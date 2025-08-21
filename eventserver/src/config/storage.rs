use serde::{Deserialize, Serialize};

/// S3-compatible storage configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct StorageConfig {
    pub endpoint: Option<String>, // Custom S3 endpoint (for MinIO, etc.)
    pub region: String,
    pub bucket: String,
    pub access_key_id: String,
    pub secret_access_key: String,
    pub use_path_style: bool, // For MinIO compatibility
    pub enable_ssl: bool,
    pub upload_timeout: u64, // seconds
    pub max_file_size: u64,  // bytes
    pub allowed_mime_types: Vec<String>,
}

impl Default for StorageConfig {
    fn default() -> Self {
        Self {
            endpoint: None,
            region: "us-east-1".to_string(),
            bucket: "eventserver-storage".to_string(),
            access_key_id: String::new(), // Must be set via environment
            secret_access_key: String::new(), // Must be set via environment
            use_path_style: false,
            enable_ssl: true,
            upload_timeout: 300,              // 5 minutes
            max_file_size: 100 * 1024 * 1024, // 100MB
            allowed_mime_types: vec![
                "image/jpeg".to_string(),
                "image/png".to_string(),
                "image/gif".to_string(),
                "video/mp4".to_string(),
            ],
        }
    }
}

impl StorageConfig {
    /// Validate storage configuration
    pub fn _validate(&self) -> Result<(), String> {
        if self.bucket.is_empty() {
            return Err("Storage bucket name is required".to_string());
        }

        if self.region.is_empty() {
            return Err("Storage region is required".to_string());
        }

        if self.access_key_id.is_empty() {
            return Err("Storage access key ID is required".to_string());
        }

        if self.secret_access_key.is_empty() {
            return Err("Storage secret access key is required".to_string());
        }

        if self.max_file_size == 0 {
            return Err("Max file size must be greater than 0".to_string());
        }

        if self.upload_timeout == 0 {
            return Err("Upload timeout must be greater than 0".to_string());
        }

        Ok(())
    }

    /// Get the effective endpoint URL
    pub fn _effective_endpoint(&self) -> Option<String> {
        self.endpoint.clone()
    }

    /// Check if a MIME type is allowed
    pub fn _is_mime_type_allowed(&self, mime_type: &str) -> bool {
        self.allowed_mime_types.contains(&mime_type.to_string())
    }

    /// Get the maximum file size in a human-readable format
    pub fn _max_file_size_human(&self) -> String {
        let size = self.max_file_size as f64;
        if size >= 1024.0 * 1024.0 * 1024.0 {
            format!("{:.1} GB", size / (1024.0 * 1024.0 * 1024.0))
        } else if size >= 1024.0 * 1024.0 {
            format!("{:.1} MB", size / (1024.0 * 1024.0))
        } else if size >= 1024.0 {
            format!("{:.1} KB", size / 1024.0)
        } else {
            format!("{size} bytes")
        }
    }

    /// Generate object key for event storage
    pub fn generate_event_key(&self, event_hash: &str, file_extension: &str) -> String {
        let now = chrono::Utc::now();
        format!(
            "events/{}/{}/{}.{}",
            now.format("%Y"),
            now.format("%m"),
            event_hash,
            file_extension
        )
    }

    /// Generate object key for media storage
    pub fn _generate_media_key(
        &self,
        event_hash: &str,
        media_hash: &str,
        file_extension: &str,
    ) -> String {
        let now = chrono::Utc::now();
        format!(
            "media/{}/{}/{}/{}.{}",
            now.format("%Y"),
            now.format("%m"),
            event_hash,
            media_hash,
            file_extension
        )
    }
}
