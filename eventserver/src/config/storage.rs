use envconfig::Envconfig;
use serde::{Deserialize, Serialize};

/// S3-compatible storage configuration loaded from environment variables
#[derive(Debug, Clone, Serialize, Deserialize, Envconfig)]
pub struct StorageConfig {
    /// Custom S3 endpoint (for MinIO, etc.)
    #[envconfig(from = "S3_ENDPOINT")]
    pub endpoint: Option<String>,

    #[envconfig(from = "S3_REGION", default = "us-east-1")]
    pub region: String,

    #[envconfig(from = "S3_BUCKET", default = "eventserver-storage")]
    pub bucket: String,

    #[envconfig(from = "S3_ACCESS_KEY_ID")]
    pub access_key_id: String,

    #[envconfig(from = "S3_SECRET_ACCESS_KEY")]
    pub secret_access_key: String,

    /// For MinIO compatibility
    #[envconfig(from = "S3_USE_PATH_STYLE", default = "false")]
    pub use_path_style: bool,

    #[envconfig(from = "S3_ENABLE_SSL", default = "true")]
    pub enable_ssl: bool,

    #[envconfig(from = "S3_UPLOAD_TIMEOUT", default = "300")]
    pub upload_timeout: u64, // seconds

    #[envconfig(from = "S3_MAX_FILE_SIZE", default = "104857600")]
    pub max_file_size: u64,  // bytes

    /// Comma-separated list of allowed MIME types
    #[envconfig(from = "S3_ALLOWED_MIME_TYPES", default = "image/jpeg,image/png,image/gif,video/mp4")]
    pub allowed_mime_types: String,
}

impl StorageConfig {
    /// Parse allowed_mime_types as Vec<String>
    pub fn allowed_mime_types_vec(&self) -> Vec<String> {
        self.allowed_mime_types
            .split(',')
            .map(|s| s.trim().to_string())
            .collect()
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
    pub fn generate_media_key(
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

impl Default for StorageConfig {
    fn default() -> Self {
        StorageConfig {
            endpoint: Some("http://localhost:9000".to_string()),
            region: "us-east-1".to_string(),
            bucket: "eventserver-storage".to_string(),
            access_key_id: "minioadmin".to_string(),
            secret_access_key: "minioadmin".to_string(),
            use_path_style: true,
            enable_ssl: false,
            upload_timeout: 300,
            max_file_size: 104857600,
            allowed_mime_types:
                "image/jpeg,image/png,image/gif,video/mp4".to_string(),
        }
    }
}