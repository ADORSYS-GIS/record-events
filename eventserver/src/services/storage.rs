//! StorageService: S3-compatible storage using MinIO crate and envconfig-based configuration

use chrono::Utc;
use minio::s3::client::Client as MinioClient;
use minio::s3::args::{PutObjectArgs, StatObjectArgs};
use minio::s3::error::Error as MinioError;
use sha2::Digest;
use std::sync::Arc;
use tracing::{info, error};
use uuid::Uuid;

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
        let endpoint = config.endpoint.clone().ok_or_else(|| {
            EventServerError::Config("S3_ENDPOINT must be set for MinIO storage".to_string())
        })?;

        let minio_client = MinioClient::new(
            &endpoint,
            &config.access_key_id,
            &config.secret_access_key,
            config.enable_ssl,
        );

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
        let args = PutObjectArgs::new(
            &self.config.bucket,
            key,
            data,
            Some(content_type),
        )
        .map_err(|e| EventServerError::Storage(format!("Failed to build PutObjectArgs: {e}")))?;

        self.minio_client
            .put_object(&args)
            .await
            .map_err(|e| {
                error!("Failed to upload to MinIO: {:?}", e);
                EventServerError::Storage(format!("Failed to upload to MinIO: {e}"))
            })?;

        info!(
            bucket = %self.config.bucket,
            key = %key,
            size = data.len(),
            "Successfully uploaded to MinIO"
        );

        // Return MinIO URL
        let url = format!(
            "{}/{}",
            self.config.endpoint.as_ref().unwrap_or(&"".to_string()),
            key
        );
        Ok(url)
    }

    /// Check if an event exists in storage
    pub async fn event_exists(&self, event_hash: &str) -> Result<bool, EventServerError> {
        let storage_key = self.generate_storage_key_from_hash(event_hash);

        let args = StatObjectArgs::new(&self.config.bucket, &storage_key)
            .map_err(|e| EventServerError::Storage(format!("Failed to build StatObjectArgs: {e}")))?;

        match self.minio_client.stat_object(&args).await {
            Ok(_) => Ok(true),
            Err(MinioError::ObjectNotFound { .. }) => Ok(false),
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
