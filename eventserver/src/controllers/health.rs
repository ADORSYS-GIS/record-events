use axum::{response::Json, http::StatusCode};
use crate::types::api::{HealthResponse, ServiceHealthStatus};

/// Health check endpoint
pub async fn health_check() -> Result<Json<HealthResponse>, StatusCode> {
    // TODO: Implement actual health checks for services
    let services = ServiceHealthStatus {
        storage: true,  // TODO: Check S3 connectivity
    };

    let health_response = HealthResponse::new(services);
    Ok(Json(health_response))
}