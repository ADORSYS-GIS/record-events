//! StorageService: S3-compatible storage using MinIO crate and envconfig-based configuration

use chrono::Utc;
use minio::s3::client::Client as MinioClient;
use minio::s3::creds::StaticProvider;
use minio::s3::error::{Error as MinioError, ErrorCode};
use minio::s3::http::BaseUrl;
use minio::s3::segmented_bytes::SegmentedBytes;
use minio::s3::types::S3Api;
use sha2::Digest;
use std::sync::Arc;
use tracing::{error, info};
use uuid::Uuid;
use multimap::MultiMap;

use crate::config::storage::StorageConfig;
use crate::error::EventServerError;
use crate::types::event::EventPackage;

/// StorageService: handles event storage in S3-compatible backends using MinIO
#[derive(Clone)]
pub struct StorageService {
    config: StorageConfig,
    minio_client: Arc<MinioClient>,
}

impl StorageService {
    /// Create a new StorageService instance using MinIO client
    pub async fn new(config: StorageConfig) -> Result<Self, EventServerError> {
        info!(
            "Initializing StorageService with S3 config: endpoint={:?}, region={}, bucket={}, access_key_id={}, use_path_style={}, enable_ssl={}",
            config.endpoint,
            config.region,
            config.bucket,
            config.access_key_id,
            config.use_path_style,
            config.enable_ssl
        );
        let endpoint = config.endpoint.clone().ok_or_else(|| {
            EventServerError::Config("S3_ENDPOINT must be set for MinIO storage".to_string())
        })?;

        // Ensure endpoint string is acceptable for BaseUrl parser
        let endpoint_str = if endpoint.starts_with("http://") || endpoint.starts_with("https://") {
            endpoint
        } else if config.enable_ssl {
            format!("https://{endpoint}")
        } else {
            format!("http://{endpoint}")
        };

        let base_url: BaseUrl = endpoint_str
            .parse()
            .map_err(|e| EventServerError::Config(format!("Invalid S3 endpoint: {e}")))?;

        let provider = StaticProvider::new(
            &config.access_key_id,
            &config.secret_access_key,
            None,
        );

        let minio_client = MinioClient::new(base_url, Some(Box::new(provider)), None, None)
            .map_err(|e| EventServerError::Storage(format!("Failed to create MinIO client: {e}")))?;

        Ok(Self {
            config,
            minio_client: Arc::new(minio_client),
        })
    }

    /// Store an event package in S3-compatible storage
    /// Returns the storage location URL
    pub async fn store_event(
        &self,
        event_package: &EventPackage,
        event_hash: &str,
    ) -> Result<String, EventServerError> {
        info!(
            event_id = %event_package.id,
            hash = %event_hash,
            bucket = %self.config.bucket,
            "Storing event in S3-compatible storage (MinIO)"
        );

        // Generate a storage key based on hash and timestamp
        let storage_key = self.generate_storage_key(event_hash, &event_package.id);

        // Serialize event package for storage
        let event_data = serde_json::to_vec(event_package)
            .map_err(|e| EventServerError::Validation(format!("Failed to serialize event: {e}")))?;

        // Upload to S3/MinIO
        self.upload_to_s3(&storage_key, &event_data, "application/json")
            .await
    }

    /// Upload data to S3/MinIO
    async fn upload_to_s3(
        &self,
        key: &str,
        data: &[u8],
        content_type: &str,
    ) -> Result<String, EventServerError> {
        info!(
            "Uploading to S3: bucket={}, key={}, content_type={}, endpoint={:?}, access_key_id={}, use_path_style={}, enable_ssl={}",
            self.config.bucket,
            key,
            content_type,
            self.config.endpoint,
            self.config.access_key_id,
            self.config.use_path_style,
            self.config.enable_ssl
        );
        // Prepare segmented bytes for upload
        let sb = SegmentedBytes::from(bytes::Bytes::copy_from_slice(data));

        // Minio 0.2: Set content-type using extra_headers (MultiMap)
        let mut headers = MultiMap::new();
        headers.insert("content-type".to_string(), content_type.to_string());

        self.minio_client
            .put_object(self.config.bucket.clone(), key.to_string(), sb)
            .extra_headers(Some(headers))
            .send()
            .await
            .map_err(|e| {
                error!("Failed to upload to MinIO: {:?}", e);
                if let Some(minio_error) = e.as_s3error() {
                    error!("MinIO error details: code: {:?}, message: {:?}, resource: {:?}, request_id: {:?}, host_id: {:?}",
                        minio_error.code, minio_error.message, minio_error.resource, minio_error.request_id, minio_error.host_id);
                }
                EventServerError::Storage(format!("Failed to upload to MinIO: {e}"))
            })?;

        info!(
            bucket = %self.config.bucket,
            key = %key,
            size = data.len(),
            "Successfully uploaded to MinIO"
        );

        // Return object URL (path-style): <endpoint>/<bucket>/<key>
        let endpoint = self
            .config
            .endpoint
            .as_ref()
            .map(|s| s.trim_end_matches('/').to_string())
            .unwrap_or_default();
        let url = format!("{}/{}/{}", endpoint, self.config.bucket, key);
        info!(
            "Upload complete. Region: {}, Protocol: {}, Full URL: {}, enable_ssl: {}",
            self.config.region,
            if endpoint.starts_with("https://") { "https" } else { "http" },
            url,
            self.config.enable_ssl
        );
        Ok(url)
    }

    /// Check if an event exists in storage
    pub async fn event_exists(&self, event_hash: &str) -> Result<bool, EventServerError> {
        let storage_key = self.generate_storage_key_from_hash(event_hash);

        // Minio 0.2: stat_object returns Result<StatObject, MinioError>
        let result = self
            .minio_client
            .stat_object(self.config.bucket.clone(), storage_key.clone())
            .send()
            .await;
        match result {
            Ok(_) => Ok(true),
            Err(MinioError::S3Error(err_resp)) if err_resp.code == ErrorCode::NoSuchKey => Ok(false),
            Err(e) => {
                error!("Error checking object existence: {:?}", e);
                Err(EventServerError::Storage(format!("Failed to check object existence: {e}")))
            }
        }
    }

    /// Generate a storage key for an event
    fn generate_storage_key(&self, event_hash: &str, event_id: &Uuid) -> String {
        let date = Utc::now().format("%Y/%m/%d");
        format!("events/{}/{}/{}.json", date, &event_hash[..8], event_id)
    }

    /// Generate a storage key from hash only (for retrieval)
    fn generate_storage_key_from_hash(&self, event_hash: &str) -> String {
        format!("events/by-hash/{event_hash}.json")
    }

    /// Upload a ZIP file to S3/MinIO and return the storage location
    pub async fn upload_zip_file(
        &self,
        event_package: &EventPackage,
        zip_data: &[u8],
    ) -> Result<String, EventServerError> {
        // Generate storage key for ZIP file
        let event_hash = format!(
            "{:x}",
            sha2::Sha256::digest(serde_json::to_string(event_package).map_err(|e| {
                EventServerError::Storage(format!("Failed to serialize for hash: {e}"))
            })?)
        );

        let storage_key = self.config.generate_event_key(&event_hash, "zip");

        // Upload ZIP file to S3/MinIO
        self.upload_to_s3(&storage_key, zip_data, "application/zip")
            .await
    }
}
