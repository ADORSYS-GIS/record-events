pub mod storage;

use serde::{Deserialize, Serialize};
use config::{Config, ConfigError, Environment, File};
use std::env;

/// Main application configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct AppConfig {
    pub server: ServerConfig,
    pub storage: storage::StorageConfig,
    pub security: SecurityConfig,
    pub logging: LoggingConfig,
}

/// Server configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct ServerConfig {
    pub host: String,
    pub port: u16,
    pub workers: Option<usize>,
    pub max_connections: Option<u32>,
    pub request_timeout: Option<u64>, // seconds
}


/// Security configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct SecurityConfig {
    pub jwt_secret: String,
    pub certificate_validity_hours: u64,
    pub rate_limit_per_minute: u32,
    pub pow_difficulty: u32,
    pub allowed_origins: Vec<String>,
}

/// Logging configuration
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct LoggingConfig {
    pub level: String,
    pub format: String, // "json" or "pretty"
    pub file_path: Option<String>,
}

impl AppConfig {
    /// Load configuration from environment variables and config files
    pub fn load() -> Result<Self, ConfigError> {
        let run_mode = env::var("RUN_MODE").unwrap_or_else(|_| "development".into());

        let config = Config::builder()
            // Start with default values
            .set_default("server.host", "0.0.0.0")?
            .set_default("server.port", 3000)?
            .set_default("server.workers", 4)?
            .set_default("server.max_connections", 1000)?
            .set_default("server.request_timeout", 30)?
            
            // Security defaults
            .set_default("security.certificate_validity_hours", 24)?
            .set_default("security.rate_limit_per_minute", 100)?
            .set_default("security.pow_difficulty", 4)?
            .set_default("security.allowed_origins", vec!["*"])?
            
            // Logging defaults
            .set_default("logging.level", "info")?
            .set_default("logging.format", "pretty")?
            
            // Storage defaults
            .set_default("storage.region", "us-east-1")?
            .set_default("storage.bucket", "eventserver-storage")?
            
            // Load from config file if it exists
            .add_source(File::with_name("config/default").required(false))
            .add_source(File::with_name(&format!("config/{}", run_mode)).required(false))
            .add_source(File::with_name("config/local").required(false))
            
            // Override with environment variables
            .add_source(Environment::with_prefix("EVENTSERVER").separator("__"))
            .build()?;

        let mut app_config: AppConfig = config.try_deserialize()?;

        // Validate required environment variables
        app_config.validate_required_env()?;

        Ok(app_config)
    }

    /// Validate that required environment variables are set
    fn validate_required_env(&mut self) -> Result<(), ConfigError> {
        // JWT secret is required
        if self.security.jwt_secret.is_empty() {
            if let Ok(secret) = env::var("JWT_SECRET") {
                self.security.jwt_secret = secret;
            } else {
                return Err(ConfigError::Message(
                    "JWT_SECRET environment variable is required".to_string(),
                ));
            }
        }

        // Storage credentials
        if self.storage.access_key_id.is_empty() {
            if let Ok(key) = env::var("AWS_ACCESS_KEY_ID") {
                self.storage.access_key_id = key;
            }
        }

        if self.storage.secret_access_key.is_empty() {
            if let Ok(secret) = env::var("AWS_SECRET_ACCESS_KEY") {
                self.storage.secret_access_key = secret;
            }
        }


        Ok(())
    }

    /// Get the bind address for the server
    pub fn bind_address(&self) -> String {
        format!("{}:{}", self.server.host, self.server.port)
    }

    /// Check if running in development mode
    pub fn is_development(&self) -> bool {
        env::var("RUN_MODE").unwrap_or_else(|_| "development".into()) == "development"
    }

    /// Check if running in production mode
    pub fn is_production(&self) -> bool {
        env::var("RUN_MODE").unwrap_or_else(|_| "development".into()) == "production"
    }
}

impl Default for AppConfig {
    fn default() -> Self {
        Self {
            server: ServerConfig {
                host: "0.0.0.0".to_string(),
                port: 3000,
                workers: Some(4),
                max_connections: Some(1000),
                request_timeout: Some(30),
            },
            storage: storage::StorageConfig::default(),
            security: SecurityConfig {
                jwt_secret: String::new(), // Must be set via environment
                certificate_validity_hours: 24,
                rate_limit_per_minute: 100,
                pow_difficulty: 4,
                allowed_origins: vec!["*".to_string()],
            },
            logging: LoggingConfig {
                level: "info".to_string(),
                format: "pretty".to_string(),
                file_path: None,
            },
        }
    }
}