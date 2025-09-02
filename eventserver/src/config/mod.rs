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
    #[envconfig(from = "JWT_SECRET", default = "dummy_jwt_secret_for_development_only")]
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


impl Default for ServerConfig {
    fn default() -> Self {
        ServerConfig {
            host: "0.0.0.0".to_string(),
            port: 3000,
            workers: None,
            max_connections: None,
            request_timeout: None,
        }
    }
}

impl Default for SecurityConfig {
    fn default() -> Self {
        SecurityConfig {
            jwt_secret: "dummy_jwt_secret_for_development_only".to_string(),
            certificate_validity_hours: 24,
            rate_limit_per_minute: 100,
            pow_difficulty: 4,
            allowed_origins: "*".to_string(),
        }
    }
}

impl Default for LoggingConfig {
    fn default() -> Self {
        LoggingConfig {
            level: "info".to_string(),
            format: "pretty".to_string(),
            file_path: None,
        }
    }
}

impl Default for AppConfig {
    fn default() -> Self {
        AppConfig {
            server: ServerConfig::default(),
            storage: storage::StorageConfig::default(),
            security: SecurityConfig::default(),
            logging: LoggingConfig::default(),
        }
    }
}
