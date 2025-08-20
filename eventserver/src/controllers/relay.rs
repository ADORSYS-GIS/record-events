use axum::{
    extract::State,
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use tracing::{info, warn, error};

use crate::services::RelayService;
use crate::types::relay::{ProvisionRequest, ProvisionResult, RelayInfo};
use crate::error::EventServerError;
use crate::state::AppState;

/// Create relay-related routes
pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/relays/provision", post(provision_relay))
        .route("/relays", get(list_relays))
        .route("/relays/:id/health", get(check_relay_health))
        .route("/relays/stats", get(get_network_stats))
}

/// Provision a new relay instance
/// This is stateless - each provisioning request is independent
async fn provision_relay(
    State(state): State<AppState>,
    Json(request): Json<ProvisionRequest>,
) -> Result<Json<ProvisionResult>, (StatusCode, String)> {
    info!(
        region = %request.region,
        instance_type = %request.instance_type,
        "Received relay provisioning request"
    );

    match state.relay_service.provision_relay(request).await {
        Ok(result) => {
            info!(
                relay_id = %result.relay_info.id,
                region = %result.relay_info.region,
                "Relay provisioned successfully"
            );
            Ok(Json(result))
        }
        Err(EventServerError::Validation(msg)) => {
            warn!(error = %msg, "Relay provisioning validation failed");
            Err((StatusCode::BAD_REQUEST, msg))
        }
        Err(EventServerError::Config(msg)) => {
            error!(error = %msg, "Configuration error during relay provisioning");
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Configuration error".to_string()))
        }
        Err(e) => {
            error!(error = %e, "Unexpected error during relay provisioning");
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Internal server error".to_string()))
        }
    }
}

/// List approved relays
/// Stateless - queries external systems for current relay list
async fn list_relays(
    State(state): State<AppState>,
) -> Result<Json<RelayListResponse>, (StatusCode, String)> {
    info!("Received relay list request");

    match state.relay_service.list_relays().await {
        Ok(relays) => {
            info!(count = relays.len(), "Retrieved relay list successfully");
            Ok(Json(RelayListResponse {
                relays,
                retrieved_at: chrono::Utc::now(),
            }))
        }
        Err(e) => {
            error!(error = %e, "Error retrieving relay list");
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to retrieve relay list".to_string()))
        }
    }
}

/// Check relay health status
async fn check_relay_health(
    State(state): State<AppState>,
    axum::extract::Path(relay_id): axum::extract::Path<String>,
) -> Result<Json<RelayHealthResponse>, (StatusCode, String)> {
    info!(relay_id = %relay_id, "Received relay health check request");

    match state.relay_service.check_relay_health(&relay_id).await {
        Ok(health) => {
            info!(
                relay_id = %relay_id,
                status = ?health.status,
                response_time = health.response_time_ms,
                "Relay health check completed"
            );
            Ok(Json(RelayHealthResponse {
                relay_id: health.relay_id,
                status: health.status,
                response_time_ms: health.response_time_ms,
                last_check: health.last_check,
                error_rate: health.error_rate,
                cpu_usage: health.cpu_usage,
                memory_usage: health.memory_usage,
            }))
        }
        Err(EventServerError::NotFound(msg)) => {
            warn!(relay_id = %relay_id, "Relay not found");
            Err((StatusCode::NOT_FOUND, msg))
        }
        Err(e) => {
            error!(relay_id = %relay_id, error = %e, "Error checking relay health");
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Health check failed".to_string()))
        }
    }
}

/// Get relay network statistics
async fn get_network_stats(
    State(state): State<AppState>,
) -> Result<Json<NetworkStatsResponse>, (StatusCode, String)> {
    info!("Received network statistics request");

    match state.relay_service.get_network_stats().await {
        Ok(stats) => {
            info!("Retrieved network statistics successfully");
            Ok(Json(NetworkStatsResponse {
                total_relays: stats.total_relays,
                active_relays: stats.active_relays,
                total_events_processed: stats.total_events_processed,
                average_response_time_ms: stats.average_response_time_ms,
                network_uptime_percentage: stats.network_uptime_percentage,
                retrieved_at: chrono::Utc::now(),
            }))
        }
        Err(e) => {
            error!(error = %e, "Error retrieving network statistics");
            Err((StatusCode::INTERNAL_SERVER_ERROR, "Failed to retrieve statistics".to_string()))
        }
    }
}

/// Response for relay list
#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RelayListResponse {
    pub relays: Vec<RelayInfo>,
    pub retrieved_at: chrono::DateTime<chrono::Utc>,
}

/// Response for relay health check
#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RelayHealthResponse {
    pub relay_id: String,
    pub status: crate::types::relay::RelayStatus,
    pub response_time_ms: u64,
    pub last_check: chrono::DateTime<chrono::Utc>,
    pub error_rate: f64,
    pub cpu_usage: f64,
    pub memory_usage: f64,
}

/// Response for network statistics
#[derive(serde::Serialize)]
#[serde(rename_all = "camelCase")]
pub struct NetworkStatsResponse {
    pub total_relays: u32,
    pub active_relays: u32,
    pub total_events_processed: u64,
    pub average_response_time_ms: f64,
    pub network_uptime_percentage: f64,
    pub retrieved_at: chrono::DateTime<chrono::Utc>,
}