use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// Standard API response wrapper
#[derive(Debug, Serialize)]
#[allow(dead_code)]
pub struct ApiResponse<T> {
    pub success: bool,
    pub data: Option<T>,
    pub error: Option<String>,
    pub timestamp: DateTime<Utc>,
}

#[allow(dead_code)]
impl<T> ApiResponse<T> {
    pub fn success(data: T) -> Self {
        Self {
            success: true,
            data: Some(data),
            error: None,
            timestamp: Utc::now(),
        }
    }

    pub fn error(message: String) -> Self {
        Self {
            success: false,
            data: None,
            error: Some(message),
            timestamp: Utc::now(),
        }
    }
}

/// Response for successful event processing
#[derive(Debug, Serialize)]
#[allow(dead_code)]
#[serde(rename_all = "camelCase")]
pub struct EventResponse {
    pub event_id: Uuid,
    pub hash: String,
    pub processed_at: DateTime<Utc>,
}

/// Response for event hash verification
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct HashVerificationResponse {
    pub hash: String,
    pub exists: bool,
    pub block_number: Option<u64>,
    pub timestamp: Option<DateTime<Utc>>,
}

/// Health check response
#[derive(Debug, Serialize)]
pub struct HealthResponse {
    pub status: String,
    pub timestamp: DateTime<Utc>,
    pub services: ServiceHealthStatus,
    pub version: String,
}

/// Service health status breakdown
#[derive(Debug, Serialize)]
pub struct ServiceHealthStatus {
    pub storage: bool,
}

/// Error response details
#[derive(Debug, Serialize)]
pub struct ErrorResponse {
    pub error: String,
    pub code: String,
    pub details: Option<serde_json::Value>,
    pub timestamp: DateTime<Utc>,
}

/// Request validation error details
#[derive(Debug, Serialize)]
pub struct ValidationError {
    pub field: String,
    pub message: String,
}

/// Batch validation errors
#[derive(Debug, Serialize)]
pub struct ValidationErrorResponse {
    pub message: String,
    pub errors: Vec<ValidationError>,
    pub timestamp: DateTime<Utc>,
}

/// Pagination parameters for list endpoints
#[derive(Debug, Deserialize)]
#[allow(dead_code)]
pub struct PaginationParams {
    pub page: Option<u32>,
    pub limit: Option<u32>,
}

impl Default for PaginationParams {
    fn default() -> Self {
        Self {
            page: Some(1),
            limit: Some(50),
        }
    }
}

/// Paginated response wrapper
#[derive(Debug, Serialize)]
pub struct PaginatedResponse<T> {
    pub data: Vec<T>,
    pub pagination: PaginationInfo,
}

/// Pagination metadata
#[derive(Debug, Serialize)]
pub struct PaginationInfo {
    pub page: u32,
    pub limit: u32,
    pub total: u64,
    pub pages: u32,
}

/// Rate limiting information
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RateLimitInfo {
    pub requests_remaining: u32,
    pub reset_time: DateTime<Utc>,
    pub limit_per_minute: u32,
}

/// Authentication challenge for PoW
#[derive(Debug, Serialize)]
pub struct AuthChallenge {
    pub challenge: String,
    pub difficulty: u32,
    pub expires_at: DateTime<Utc>,
}

/// PoW solution submission
#[derive(Debug, Deserialize)]
#[allow(dead_code)]
pub struct PowSolution {
    pub challenge: String,
    pub nonce: u64,
    pub public_key: String,
}

/// Certificate issuance response
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct CertificateResponse {
    pub certificate: String,
    pub issued_at: DateTime<Utc>,
    pub expires_at: DateTime<Utc>,
    pub relay_id: String,
}

impl HealthResponse {
    pub fn new(services: ServiceHealthStatus) -> Self {
        let status = if services.storage {
            "healthy"
        } else {
            "degraded"
        };

        Self {
            status: status.to_string(),
            timestamp: Utc::now(),
            services,
            version: env!("CARGO_PKG_VERSION").to_string(),
        }
    }
}

#[allow(dead_code)]
impl PaginationInfo {
    pub fn new(page: u32, limit: u32, total: u64) -> Self {
        let pages = ((total as f64) / (limit as f64)).ceil() as u32;
        Self {
            page,
            limit,
            total,
            pages,
        }
    }
}
