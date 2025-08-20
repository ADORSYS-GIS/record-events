use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    Json,
};
use serde_json::json;
use thiserror::Error;

/// Type alias for EventServer errors - uses the main AppError type
pub type EventServerError = AppError;

/// Application-wide error types
#[derive(Error, Debug)]
pub enum AppError {
    #[error("Authentication failed: {0}")]
    Authentication(String),

    #[error("Authorization failed: {0}")]
    Authorization(String),

    #[error("Validation error: {0}")]
    Validation(String),

    #[error("Event processing error: {0}")]
    EventProcessing(String),

    #[error("Storage error: {0}")]
    Storage(String),

    #[error("Cryptography error: {0}")]
    Crypto(String),

    #[error("Configuration error: {0}")]
    Config(String),

    #[error("Rate limit exceeded")]
    RateLimit,

    #[error("Resource not found: {0}")]
    NotFound(String),

    #[error("Internal server error: {0}")]
    Internal(String),

    #[error("Bad request: {0}")]
    BadRequest(String),

    #[error("Service unavailable: {0}")]
    ServiceUnavailable(String),
}

impl IntoResponse for AppError {
    fn into_response(self) -> Response {
        let (status, error_message, error_code) = match &self {
            AppError::Authentication(_) => (StatusCode::UNAUTHORIZED, self.to_string(), "AUTH_FAILED"),
            AppError::Authorization(_) => (StatusCode::FORBIDDEN, self.to_string(), "FORBIDDEN"),
            AppError::Validation(_) => (StatusCode::BAD_REQUEST, self.to_string(), "VALIDATION_ERROR"),
            AppError::EventProcessing(_) => (StatusCode::UNPROCESSABLE_ENTITY, self.to_string(), "EVENT_PROCESSING_ERROR"),
            AppError::Storage(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string(), "STORAGE_ERROR"),
            AppError::Crypto(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string(), "CRYPTO_ERROR"),
            AppError::Config(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string(), "CONFIG_ERROR"),
            AppError::RateLimit => (StatusCode::TOO_MANY_REQUESTS, self.to_string(), "RATE_LIMIT_EXCEEDED"),
            AppError::NotFound(_) => (StatusCode::NOT_FOUND, self.to_string(), "NOT_FOUND"),
            AppError::Internal(_) => (StatusCode::INTERNAL_SERVER_ERROR, self.to_string(), "INTERNAL_ERROR"),
            AppError::BadRequest(_) => (StatusCode::BAD_REQUEST, self.to_string(), "BAD_REQUEST"),
            AppError::ServiceUnavailable(_) => (StatusCode::SERVICE_UNAVAILABLE, self.to_string(), "SERVICE_UNAVAILABLE"),
        };

        let body = Json(json!({
            "error": error_message,
            "code": error_code,
            "timestamp": chrono::Utc::now(),
        }));

        (status, body).into_response()
    }
}

/// Result type alias for application operations
pub type AppResult<T> = Result<T, AppError>;

/// Convert various error types to AppError

impl From<aws_sdk_s3::Error> for AppError {
    fn from(err: aws_sdk_s3::Error) -> Self {
        AppError::Storage(err.to_string())
    }
}

impl From<serde_json::Error> for AppError {
    fn from(err: serde_json::Error) -> Self {
        AppError::Validation(format!("JSON serialization error: {}", err))
    }
}

impl From<base64::DecodeError> for AppError {
    fn from(err: base64::DecodeError) -> Self {
        AppError::Validation(format!("Base64 decode error: {}", err))
    }
}

impl From<reqwest::Error> for AppError {
    fn from(err: reqwest::Error) -> Self {
        AppError::Internal(format!("HTTP client error: {}", err))
    }
}

impl From<config::ConfigError> for AppError {
    fn from(err: config::ConfigError) -> Self {
        AppError::Config(err.to_string())
    }
}

impl From<anyhow::Error> for AppError {
    fn from(err: anyhow::Error) -> Self {
        AppError::Internal(err.to_string())
    }
}

/// Validation error details for structured error responses
#[derive(Debug, serde::Serialize)]
pub struct ValidationErrorDetails {
    pub field: String,
    pub message: String,
}

impl AppError {
    /// Create a validation error with multiple field errors
    pub fn validation_with_details(message: &str, details: Vec<ValidationErrorDetails>) -> Self {
        let details_json = serde_json::to_value(details).unwrap_or_default();
        AppError::Validation(format!("{}: {}", message, details_json))
    }

    /// Create an authentication error with context
    pub fn auth_with_context(context: &str, reason: &str) -> Self {
        AppError::Authentication(format!("{}: {}", context, reason))
    }

    /// Create a storage error with operation context
    pub fn storage_with_context(operation: &str, reason: &str) -> Self {
        AppError::Storage(format!("Storage operation '{}' failed: {}", operation, reason))
    }
}

/// Macro for creating context-aware errors
#[macro_export]
macro_rules! app_error {
    ($variant:ident, $msg:expr) => {
        AppError::$variant($msg.to_string())
    };
    ($variant:ident, $fmt:expr, $($arg:tt)*) => {
        AppError::$variant(format!($fmt, $($arg)*))
    };
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_error_conversion() {
        let validation_error = AppError::Validation("Test validation error".to_string());
        let response = validation_error.into_response();
        
        // Response should have BAD_REQUEST status
        assert_eq!(response.status(), StatusCode::BAD_REQUEST);
    }

    #[test]
    fn test_validation_with_details() {
        let details = vec![
            ValidationErrorDetails {
                field: "email".to_string(),
                message: "Invalid email format".to_string(),
            },
            ValidationErrorDetails {
                field: "age".to_string(),
                message: "Must be greater than 0".to_string(),
            },
        ];

        let error = AppError::validation_with_details("Multiple validation errors", details);
        assert!(matches!(error, AppError::Validation(_)));
    }
}