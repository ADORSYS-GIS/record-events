use aws_config::{BehaviorVersion, Region};
use aws_sdk_s3::{primitives::ByteStream, Client as S3Client};
use chrono::Utc;
use sha2::Digest;
use std::sync::Arc;
use tracing::info;
use uuid::Uuid;

use crate::config::storage::StorageConfig;
use crate::error::EventServerError;
use crate::types::event::EventPackage;

/// Trait for S3 operations to enable mocking in tests
#[async_trait::async_trait]
pub trait S3Operations: Send + Sync {
    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        body: Vec<u8>,
        content_type: &str,
    ) -> Result<(), EventServerError>;

    async fn head_object(&self, bucket: &str, key: &str) -> Result<bool, EventServerError>;

    async fn _get_object(&self, bucket: &str, key: &str) -> Result<Vec<u8>, EventServerError>;
}

/// Real S3 client implementation
pub struct RealS3Client {
    client: S3Client,
}

#[async_trait::async_trait]
impl S3Operations for RealS3Client {
    async fn put_object(
        &self,
        bucket: &str,
        key: &str,
        body: Vec<u8>,
        content_type: &str,
    ) -> Result<(), EventServerError> {
        self.client
            .put_object()
            .bucket(bucket)
            .key(key)
            .body(ByteStream::from(body))
            .content_type(content_type)
            .send()
            .await
            .map_err(|e| EventServerError::Storage(format!("Failed to upload to S3: {e}")))?;
        Ok(())
    }

    async fn head_object(&self, bucket: &str, key: &str) -> Result<bool, EventServerError> {
        match self
            .client
            .head_object()
            .bucket(bucket)
            .key(key)
            .send()
            .await
        {
            Ok(_) => Ok(true),
            Err(_) => Ok(false), // Object doesn't exist or access denied
        }
    }

    async fn _get_object(&self, bucket: &str, key: &str) -> Result<Vec<u8>, EventServerError> {
        let response = self
            .client
            .get_object()
            .bucket(bucket)
            .key(key)
            .send()
            .await
            .map_err(|e| EventServerError::Storage(format!("Failed to get object: {e}")))?;

        let data =
            response.body.collect().await.map_err(|e| {
                EventServerError::Storage(format!("Failed to read response body: {e}"))
            })?;

        Ok(data.into_bytes().to_vec())
    }
}

/// Mock S3 client for testing
#[cfg(test)]
pub struct MockS3Client;

#[cfg(test)]
#[async_trait::async_trait]
impl S3Operations for MockS3Client {
    async fn put_object(
        &self,
        _bucket: &str,
        _key: &str,
        _body: Vec<u8>,
        _content_type: &str,
    ) -> Result<(), EventServerError> {
        // Simulate successful upload
        tokio::time::sleep(tokio::time::Duration::from_millis(10)).await;
        Ok(())
    }

    async fn head_object(&self, _bucket: &str, _key: &str) -> Result<bool, EventServerError> {
        // Simulate object exists check
        tokio::time::sleep(tokio::time::Duration::from_millis(5)).await;
        Ok(true)
    }

    async fn _get_object(&self, _bucket: &str, _key: &str) -> Result<Vec<u8>, EventServerError> {
        // Return mock data
        tokio::time::sleep(tokio::time::Duration::from_millis(10)).await;
        Ok(b"mock_event_data".to_vec())
    }
}

/// Stateless S3-compatible storage service
/// Handles event storage without maintaining any local state
#[derive(Clone)]
pub struct StorageService {
    config: StorageConfig,
    s3_operations: Arc<dyn S3Operations>,
}

impl StorageService {
    /// Create a new StorageService instance
    pub async fn new(config: StorageConfig) -> Result<Self, EventServerError> {
        // Configure AWS SDK for MinIO
        let mut aws_config = aws_config::defaults(BehaviorVersion::latest())
            .region(Region::new(config.region.clone()))
            .load()
            .await;

        // If we have a custom endpoint (MinIO), configure it
        if let Some(endpoint) = &config.endpoint {
            info!("Configuring S3 client for custom endpoint: {}", endpoint);

            // Override the endpoint configuration
            aws_config = aws_config.to_builder().endpoint_url(endpoint).build();
        }

        // Configure path style for MinIO compatibility
        let s3_config = aws_sdk_s3::config::Builder::from(&aws_config)
            .force_path_style(config.use_path_style)
            .build();

        let s3_client = S3Client::from_conf(s3_config);
        let s3_operations = Arc::new(RealS3Client { client: s3_client });

        Ok(Self {
            config,
            s3_operations,
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
            "Storing event in S3-compatible storage"
        );

        // Generate a storage key based on hash and timestamp
        let storage_key = self.generate_storage_key(event_hash, &event_package.id);

        // Serialize event package for storage
        let event_data = serde_json::to_vec(event_package)
            .map_err(|e| EventServerError::Validation(format!("Failed to serialize event: {e}")))?;

        // Upload to S3
        let storage_location = self
            .upload_to_s3(&storage_key, &event_data, "application/json")
            .await?;

        info!(
            event_id = %event_package.id,
            location = %storage_location,
            size = event_data.len(),
            "Event stored successfully"
        );

        Ok(storage_location)
    }

    /// Retrieve an event package from storage by hash
    pub async fn _retrieve_event(
        &self,
        event_hash: &str,
    ) -> Result<EventPackage, EventServerError> {
        info!(hash = %event_hash, "Retrieving event from storage");

        // Generate storage key
        let storage_key = self.generate_storage_key_from_hash(event_hash);

        // Simulate S3 retrieval
        let event_data = self._simulate_s3_download(&storage_key).await?;

        // Deserialize event package
        let event_package: EventPackage = serde_json::from_slice(&event_data).map_err(|e| {
            EventServerError::Validation(format!("Failed to deserialize event: {e}"))
        })?;

        info!(
            event_id = %event_package.id,
            hash = %event_hash,
            "Event retrieved successfully"
        );

        Ok(event_package)
    }

    /// Check if an event exists in storage
    pub async fn event_exists(&self, event_hash: &str) -> Result<bool, EventServerError> {
        let storage_key = self.generate_storage_key_from_hash(event_hash);

        // Simulate S3 head object operation
        let exists = self.simulate_s3_exists(&storage_key).await?;

        info!(
            hash = %event_hash,
            exists = exists,
            "Checked event existence in storage"
        );

        Ok(exists)
    }

    /// Get storage statistics
    pub async fn _get_storage_stats(&self) -> Result<StorageStats, EventServerError> {
        // In a real implementation, this would query S3 for bucket statistics
        Ok(StorageStats {
            total_objects: 0,
            total_size_bytes: 0,
            bucket_name: self.config.bucket.clone(),
            region: self.config.region.clone(),
        })
    }

    /// Generate a storage key for an event
    fn generate_storage_key(&self, event_hash: &str, event_id: &Uuid) -> String {
        let date = Utc::now().format("%Y/%m/%d");
        format!("events/{}/{}/{}.json", date, &event_hash[..8], event_id)
    }

    /// Generate a storage key from hash only (for retrieval)
    fn generate_storage_key_from_hash(&self, event_hash: &str) -> String {
        // In a real implementation, we might need to search or maintain an index
        // For now, we'll use a simplified approach
        format!("events/by-hash/{event_hash}.json")
    }

    /// Upload data to S3
    async fn upload_to_s3(
        &self,
        key: &str,
        data: &[u8],
        content_type: &str,
    ) -> Result<String, EventServerError> {
        self.s3_operations
            .put_object(&self.config.bucket, key, data.to_vec(), content_type)
            .await?;

        info!(
            bucket = %self.config.bucket,
            key = %key,
            size = data.len(),
            "Successfully uploaded to S3"
        );

        // Return S3 URL
        Ok(format!(
            "{} {} {} {} {}",
            self.clone()
                .config
                .endpoint
                .unwrap_or("https://s3.{}.amazonaws.com".to_string()),
            self.config.region,
            self.config.bucket,
            self.config.region,
            key
        ))
    }

    /// Upload a ZIP file to S3 and return the storage location
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

        // Upload ZIP file to S3
        let storage_location = self
            .upload_to_s3(&storage_key, zip_data, "application/zip")
            .await?;

        info!(
            event_id = %event_package.id,
            location = %storage_location,
            size = zip_data.len(),
            "Successfully uploaded ZIP file to S3"
        );

        Ok(storage_location)
    }

    /// Simulate S3 download operation
    async fn _simulate_s3_download(&self, _key: &str) -> Result<Vec<u8>, EventServerError> {
        // In a real implementation, this would use AWS SDK:
        // let result = self.s3_client
        //     .get_object()
        //     .bucket(&self.config.bucket)
        //     .key(key)
        //     .send()
        //     .await?;

        // Simulate network delay
        tokio::time::sleep(tokio::time::Duration::from_millis(50)).await;

        // For simulation, return empty data (would be actual event data)
        Err(EventServerError::Storage(
            "Simulated storage - not implemented".to_string(),
        ))
    }

    /// Check if object exists in S3
    async fn simulate_s3_exists(&self, key: &str) -> Result<bool, EventServerError> {
        self.s3_operations
            .head_object(&self.config.bucket, key)
            .await
    }

    /// Create a mock instance for testing
    #[cfg(test)]
    pub async fn new_mock() -> Self {
        use crate::config::storage::StorageConfig;

        let config = StorageConfig {
            endpoint: None,
            region: "us-east-1".to_string(),
            bucket: "test-bucket".to_string(),
            access_key_id: "test-key".to_string(),
            secret_access_key: "test-secret".to_string(),
            use_path_style: false,
            enable_ssl: true,
            upload_timeout: 300,
            max_file_size: 100 * 1024 * 1024,
            allowed_mime_types: vec![
                "image/jpeg".to_string(),
                "image/png".to_string(),
                "application/json".to_string(),
            ],
        };

        let s3_operations = Arc::new(MockS3Client);

        Self {
            config,
            s3_operations,
        }
    }
}

/// Storage statistics
#[derive(Debug, serde::Serialize)]
pub struct StorageStats {
    pub total_objects: u64,
    pub total_size_bytes: u64,
    pub bucket_name: String,
    pub region: String,
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::types::event::{EventAnnotation, EventMetadata, EventSource, FieldValue};

    #[tokio::test]
    async fn test_generate_storage_key() {
        let service = StorageService::new_mock().await;
        let event_id = Uuid::new_v4();
        let hash = "abcdef1234567890";

        let key = service.generate_storage_key(hash, &event_id);

        // Should include date, hash prefix, and event ID
        assert!(key.contains("events/"));
        assert!(key.contains("abcdef12")); // First 8 chars of hash
        assert!(key.contains(&event_id.to_string()));
        assert!(key.ends_with(".json"));
    }

    #[tokio::test]
    async fn test_generate_storage_key_from_hash() {
        let service = StorageService::new_mock().await;
        let hash = "abcdef1234567890";

        let key = service.generate_storage_key_from_hash(hash);

        assert_eq!(key, "events/by-hash/abcdef1234567890.json");
    }

    #[tokio::test]
    async fn test_store_event() {
        let service = StorageService::new_mock().await;

        let event_package = EventPackage {
            id: Uuid::new_v4(),
            version: "1.0".to_string(),
            annotations: vec![EventAnnotation {
                label_id: "test_label".to_string(),
                value: FieldValue::String("test_value".to_string()),
                timestamp: Utc::now(),
            }],
            media: None,
            metadata: EventMetadata {
                created_at: Utc::now(),
                created_by: Some("test_user".to_string()),
                source: EventSource::Web,
            },
        };

        let hash = "test_hash_123";
        let result = service.store_event(&event_package, hash).await;

        assert!(result.is_ok());
        println!("{result:?}");
        let location = result.unwrap();
        assert!(location.contains("s3"));
        assert!(location.contains("test-bucket"));
    }
}
