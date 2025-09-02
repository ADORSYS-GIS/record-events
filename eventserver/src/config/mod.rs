pub mod storage;

use envconfig::Envconfig;
use serde::{Deserialize, Serialize};

/// Main application configuration loaded from environment variables
#[derive(Debug, Clone, Serialize, Deserialize, Envconfig)]
pub struct AppConfig {
    #[envconfig(nested = true)]
    pub server: ServerConfig,

    #[envconfig(nested = true)]
    pub storage: storage::StorageConfig,

    #[envconfig(nested = true)]
    pub security: SecurityConfig,

    #[envconfig(nested = true)]
    pub logging: LoggingConfig,
}

/// Server configuration
#[derive(Debug, Clone, Serialize, Deserialize, Envconfig)]
pub struct ServerConfig {
    #[envconfig(from = "SERVER_HOST", default = "0.0.0.0")]
    pub host: String,

    #[envconfig(from = "SERVER_PORT", default = "3000")]
    pub port: u16,

    #[envconfig(from = "SERVER_WORKERS")]
    pub workers: Option<usize>,

    #[envconfig(from = "SERVER_MAX_CONNECTIONS")]
    pub max_connections: Option<u32>,

    #[envconfig(from = "SERVER_REQUEST_TIMEOUT")]
    pub request_timeout: Option<u64>, // seconds
}

/// Security configuration
#[derive(Debug, Clone, Serialize, Deserialize, Envconfig)]
pub struct SecurityConfig {
    #[envconfig(from = "JWT_SECRET")]
    pub jwt_secret: String,

    #[envconfig(from = "CERTIFICATE_VALIDITY_HOURS", default = "24")]
    pub certificate_validity_hours: u64,

    #[envconfig(from = "RATE_LIMIT_PER_MINUTE", default = "100")]
    pub rate_limit_per_minute: u32,

    #[envconfig(from = "POW_DIFFICULTY", default = "4")]
    pub pow_difficulty: u32,

    /// Comma-separated list of allowed origins
    #[envconfig(from = "ALLOWED_ORIGINS", default = "*")]
    pub allowed_origins: String,
}

/// Logging configuration
#[derive(Debug, Clone, Serialize, Deserialize, Envconfig)]
pub struct LoggingConfig {
    #[envconfig(from = "LOG_LEVEL", default = "info")]
    pub level: String,

    #[envconfig(from = "LOG_FORMAT", default = "pretty")]
    pub format: String, // "json" or "pretty"

    #[envconfig(from = "LOG_FILE_PATH")]
    pub file_path: Option<String>,
}
