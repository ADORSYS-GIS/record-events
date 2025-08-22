use axum::{
    extract::{Path, State},
    http::StatusCode,
    response::Json,
    routing::{get, post},
    Router,
};
use tracing::{error, info, warn};

use crate::error::EventServerError;
use crate::services::zip_packager::{ZipPackageOptions, ZipPackager};
use crate::state::AppState;
use crate::types::api::HashVerificationResponse;
use crate::types::event::{EventPackage, EventPayload, ProcessingResult};

/// Create event-related routes
pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/events", post(receive_event))
        .route("/events/upload", post(receive_event_upload))
        .route("/events/package", post(receive_event_package))
        .route("/events/:hash/verify", get(verify_event_hash))
}

/// Receive and process an event from a relay
/// This is completely stateless - each request is processed independently
#[utoipa::path(
    post,
    path = "/api/v1/events",
    request_body = EventPackage,
    responses(
        (status = 200, description = "Event processed successfully", body = ProcessingResult),
        (status = 400, description = "Bad request - validation failed"),
        (status = 500, description = "Internal server error")
    ),
    tag = "events"
)]
async fn receive_event(
    State(state): State<AppState>,
    Json(event_package): Json<EventPackage>,
) -> Result<Json<ProcessingResult>, (StatusCode, String)> {
    info!(
        event_id = %event_package.id,
        "Received event processing request"
    );

    // Extract relay ID from authentication context (would be set by auth middleware)
    // For now, using a placeholder
    let relay_id = "authenticated_relay_id".to_string();

    match state
        .event_service
        .process_event(event_package, relay_id)
        .await
    {
        Ok(result) => {
            info!(
                event_id = %result.event_id,
                hash = %result.hash,
                "Event processed successfully"
            );
            Ok(Json(result))
        }
        Err(EventServerError::Validation(msg)) => {
            warn!(error = %msg, "Event validation failed");
            Err((StatusCode::BAD_REQUEST, msg))
        }
        Err(EventServerError::Storage(msg)) => {
            error!(error = %msg, "Storage error during event processing");
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Storage error".to_string(),
            ))
        }
        Err(e) => {
            error!(error = %e, "Unexpected error during event processing");
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Internal server error".to_string(),
            ))
        }
    }
}

/// Receive and process a simple event upload notification from frontend
#[utoipa::path(
    post,
    path = "/api/v1/events/upload",
    request_body = EventPayload,
    responses(
        (status = 200, description = "Upload notification received successfully"),
        (status = 400, description = "Bad request - validation failed")
    ),
    tag = "events"
)]
async fn receive_event_upload(
    State(_state): State<AppState>,
    Json(event_payload): Json<EventPayload>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    info!(
        filename = %event_payload.filename,
        content_type = %event_payload.content_type,
        "Received event upload notification"
    );

    // Basic validation
    if event_payload.filename.is_empty() {
        warn!("Empty filename in event payload");
        return Err((
            StatusCode::BAD_REQUEST,
            "Filename cannot be empty".to_string(),
        ));
    }

    if event_payload.content_type.is_empty() {
        warn!("Empty content type in event payload");
        return Err((
            StatusCode::BAD_REQUEST,
            "Content type cannot be empty".to_string(),
        ));
    }

    // For now, just acknowledge receipt and return success
    // In the future, this could trigger file processing, validation, etc.
    let response = serde_json::json!({
        "status": "received",
        "filename": event_payload.filename,
        "contentType": event_payload.content_type,
        "receivedAt": chrono::Utc::now()
    });

    info!(
        filename = %event_payload.filename,
        "Event upload notification processed successfully"
    );

    Ok(Json(response))
}

/// Receive and process an EventPackage from frontend
/// Creates ZIP file and uploads to S3
#[utoipa::path(
    post,
    path = "/api/v1/events/package",
    request_body = EventPackage,
    responses(
        (status = 200, description = "Event package processed and stored successfully"),
        (status = 400, description = "Bad request - validation failed"),
        (status = 500, description = "Internal server error")
    ),
    tag = "events"
)]
async fn receive_event_package(
    State(state): State<AppState>,
    Json(event_package): Json<EventPackage>,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    info!(
        event_id = %event_package.id,
        version = %event_package.version,
        annotations_count = event_package.annotations.len(),
        has_media = event_package.media.is_some(),
        "Received EventPackage for processing"
    );

    // Validate the event package
    let validation = event_package.validate();
    if !validation.is_valid {
        warn!(
            event_id = %event_package.id,
            errors = ?validation.errors,
            "EventPackage validation failed"
        );
        return Err((
            StatusCode::BAD_REQUEST,
            format!("Invalid event package: {}", validation.errors.join(", ")),
        ));
    }

    // Create ZIP file from EventPackage
    let zip_options = ZipPackageOptions::default();
    let zip_data =
        match ZipPackager::create_zip_from_event_package(&event_package, zip_options).await {
            Ok(data) => data,
            Err(e) => {
                error!(
                    event_id = %event_package.id,
                    error = %e,
                    "Failed to create ZIP package"
                );
                return Err((
                    StatusCode::INTERNAL_SERVER_ERROR,
                    "Failed to create ZIP package".to_string(),
                ));
            }
        };

    // Upload ZIP file to S3
    let storage_location = match state
        .storage_service
        .upload_zip_file(&event_package, &zip_data)
        .await
    {
        Ok(location) => location,
        Err(e) => {
            error!(
                event_id = %event_package.id,
                error = %e,
                "Failed to upload ZIP to S3"
            );
            return Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to upload to storage".to_string(),
            ));
        }
    };

    // Create response
    let response = serde_json::json!({
        "status": "processed",
        "eventId": event_package.id,
        "storageLocation": storage_location,
        "zipSize": zip_data.len(),
        "processedAt": chrono::Utc::now()
    });

    info!(
        event_id = %event_package.id,
        storage_location = %storage_location,
        zip_size = zip_data.len(),
        "EventPackage processed and uploaded successfully"
    );

    Ok(Json(response))
}

/// Verify if an event hash exists in storage
/// Stateless verification - no local state required
#[utoipa::path(
    get,
    path = "/api/v1/events/{hash}/verify",
    params(
        ("hash" = String, Path, description = "SHA-256 hash of the event to verify")
    ),
    responses(
        (status = 200, description = "Hash verification completed", body = HashVerificationResponse),
        (status = 400, description = "Bad request - invalid hash format"),
        (status = 500, description = "Internal server error")
    ),
    tag = "events"
)]
async fn verify_event_hash(
    State(state): State<AppState>,
    Path(hash): Path<String>,
) -> Result<Json<HashVerificationResponse>, (StatusCode, String)> {
    info!(hash = %hash, "Received hash verification request");

    // Validate hash format
    if hash.len() != 64 {
        warn!(hash = %hash, "Invalid hash format");
        return Err((
            StatusCode::BAD_REQUEST,
            "Hash must be 64 characters (SHA-256)".to_string(),
        ));
    }

    match state.event_service.verify_event_hash(&hash).await {
        Ok(exists) => {
            info!(
                hash = %hash,
                exists = exists,
                "Hash verification completed"
            );
            Ok(Json(HashVerificationResponse {
                hash: hash.clone(),
                exists,
                block_number: None, // TODO: Implement blockchain integration
                timestamp: Some(chrono::Utc::now()),
            }))
        }
        Err(EventServerError::Validation(msg)) => {
            warn!(hash = %hash, error = %msg, "Hash validation failed");
            Err((StatusCode::BAD_REQUEST, msg))
        }
        Err(e) => {
            error!(hash = %hash, error = %e, "Unexpected error during verification");
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Internal server error".to_string(),
            ))
        }
    }
}
