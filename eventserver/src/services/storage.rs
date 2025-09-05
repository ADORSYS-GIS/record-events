//! StorageService: S3-compatible storage using MinIO crate and envconfig-based configuration

use chrono::Utc;
use aws_sdk_s3::{Client as S3Client};
use aws_sdk_s3::primitives::ByteStream;
use aws_sdk_s3::config::{Region, Credentials};
use aws_config::endpoint::Endpoint;
use sha2::Digest;
use std::sync::Arc;
use tracing::{error, info};
use uuid::Uuid;

use crate::config::storage::StorageConfig;
use crate::error::EventServerError;
use crate::types::event::EventPackage;

/// StorageService: handles event storage in S3-compatible backends using MinIO
#[derive(Clone)]
pub struct StorageService {
    config: StorageConfig,
    s3_client: Arc<S3Client>,
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

        let region = Region::new(config.region.clone());
        let credentials = Credentials::new(
            config.access_key_id.clone(),
            config.secret_access_key.clone(),
            None,
            None,
            "static"
        );
        let endpoint_url = endpoint.clone();

        let s3_config = aws_sdk_s3::config::Builder::new()
            .region(region)
            .endpoint_url(&endpoint_url)
            .credentials_provider(credentials)
            .force_path_style(config.use_path_style)
            .build();

        let s3_client = S3Client::from_conf(s3_config);

        Ok(Self {
            config,
            s3_client: Arc::new(s3_client),
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
        // Debug: Log partial secret key, region, and current UTC time for signature troubleshooting
        let secret = &self.config.secret_access_key;
        let secret_preview = if secret.len() > 8 {
            format!("{}...{}", &secret[..4], &secret[secret.len()-4..])
        } else {
            "[too short]".to_string()
        };
        info!(
            "S3 debug: region={}, secret_key_preview={}, system_utc_time={}",
            self.config.region,
            secret_preview,
            chrono::Utc::now().to_rfc3339()
        );
        info!(
            "S3 debug: path_style={}, endpoint_url={:?}",
            self.config.use_path_style,
            self.config.endpoint
        );

        let body = ByteStream::from(data.to_vec());
        let put_res = self.s3_client
            .put_object()
            .bucket(&self.config.bucket)
            .key(key)
            .body(body)
            .content_type(content_type)
            .send()
            .await;

        match put_res {
            Ok(_) => {
                info!(
                    bucket = %self.config.bucket,
                    key = %key,
                    size = data.len(),
                    "Successfully uploaded to S3/MinIO"
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
            Err(e) => {
                error!("Failed to upload to S3/MinIO: {:?}", e);
                Err(EventServerError::Storage(format!("Failed to upload to S3/MinIO: {e}")))
            }
        }
    }

    /// Check if an event exists in storage
    pub async fn event_exists(&self, event_hash: &str) -> Result<bool, EventServerError> {
        let key = self.generate_storage_key_from_hash(event_hash);
        let res = self.s3_client
            .head_object()
            .bucket(&self.config.bucket)
            .key(&key)
            .send()
            .await;
        match res {
            Ok(_) => Ok(true),
            Err(e) => {
                // Check for NotFound error
                if let aws_sdk_s3::types::SdkError::ServiceError { err, .. } = &e {
                    if err.is_not_found() {
                        return Ok(false);
                    }
                }
                error!("Failed to check object existence: {:?}", e);
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
