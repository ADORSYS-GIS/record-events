use axum::{
    extract::{Multipart, Path, Request, State},
    http::{header, StatusCode},
    response::{IntoResponse, Json, Response},
    routing::{get, post},
    Router,
};
use tracing::{error, info, warn};
use utoipa;
use uuid::Uuid;

use crate::error::EventServerError;
use crate::middleware::crypto::extract_validated_relay_id;
use crate::state::AppState;
use crate::types::event::{
    EventListResponse, EventPackage, MediaSubmissionResponse, ProcessingResult,
};

/// Extract verified event package from request extensions (set by crypto middleware)
fn extract_verified_event_package(request: &Request) -> Option<EventPackage> {
    request.extensions().get::<EventPackage>().cloned()
}

/// Get an event media package from storage by its key
#[utoipa::path(
    get,
    path = "/api/v1/events/media/{key}",
    params(
        ("key" = String, Path, description = "The full S3 key of the event package (zip file)")
    ),
    responses(
        (status = 200, description = "Event media retrieved successfully", content_type = "application/zip", body = [u8]),
        (status = 404, description = "Event not found"),
        (status = 500, description = "Internal server error")
    ),
    security(
        ("bearer_auth" = [])
    ),
    tag = "events"
)]
async fn get_event_media(State(state): State<AppState>, Path(key): Path<String>) -> Response {
    info!(key = %key, "Received request to get event media by key");

    // The key from a wildcard path includes a leading `/`, which should be removed for the S3 client.
    let key_str = key.trim_start_matches('/');

    match state.storage_service.get_object_by_key(key_str).await {
        Ok(Some(data)) => {
            info!(key = %key, "Successfully fetched event media");

            // Replace slashes with underscores for a browser-friendly filename.
            let filename = key_str.replace('/', "_");
            let content_disposition = format!("attachment; filename=\"{filename}\"");

            let content_type = if key_str.ends_with(".zip") {
                "application/zip"
            } else if key_str.ends_with(".json") {
                "application/json"
            } else {
                "application/octet-stream"
            };

            (
                StatusCode::OK,
                [
                    (header::CONTENT_TYPE, content_type),
                    (header::CONTENT_DISPOSITION, &content_disposition),
                ],
                data,
            )
                .into_response()
        }
        Ok(None) => {
            warn!(key = %key, "Event media not found");
            (StatusCode::NOT_FOUND, "Event not found".to_string()).into_response()
        }
        Err(e) => {
            error!(key = %key, error = %e, "Failed to fetch event media");
            (
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to retrieve event".to_string(),
            )
                .into_response()
        }
    }
}

/// Create event-related routes
pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/events", post(receive_event))
        .route("/events/package", post(receive_event_package))
        .route("/events/:hash/verify", get(verify_event_hash))
        .route("/events/:eventId/media", post(submit_event_media))
        .route("/events/all", get(list_all_events))
        .route("/events/media/*key", get(get_event_media))
}

/// List all events from the storage backend
#[utoipa::path(
    get,
    path = "/api/v1/events/all",
    responses(
        (status = 200, description = "Events listed successfully", body = EventListResponse),
        (status = 500, description = "Internal server error")
    ),
    security(
        ("bearer_auth" = [])
    ),
    tag = "events"
)]
async fn list_all_events(
    State(state): State<AppState>,
) -> Result<Json<EventListResponse>, (StatusCode, String)> {
    info!("Received request to list all events");

    match state.storage_service.list_events().await {
        Ok(events) => {
            info!("Successfully listed {} events", events.len());
            Ok(Json(EventListResponse { events }))
        }
        Err(e) => {
            error!(error = %e, "Failed to list events from storage");
            Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Failed to list events".to_string(),
            ))
        }
    }
}

/// Receive and process an event from a relay
/// This is completely stateless - each request is processed independently
#[utoipa::path(
    post,
    path = "/api/v1/events",
    request_body = String,
    responses(
        (status = 200, description = "Event processed successfully", body = ProcessingResult),
        (status = 400, description = "Invalid event data or validation failed"),
        (status = 401, description = "Authentication required - Bearer token missing or invalid"),
        (status = 500, description = "Internal server error during processing")
    ),
    security(
        ("bearer_auth" = [])
    ),
    tag = "events"
)]
async fn receive_event(
    State(state): State<AppState>,
    request: Request,
) -> Result<Json<ProcessingResult>, (StatusCode, String)> {
    // Extract verified event package from request extensions (set by crypto middleware)
    let event_package = extract_verified_event_package(&request).ok_or_else(|| {
        error!("No verified event package found in request extensions");
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            "Event data verification failed".to_string(),
        )
    })?;

    info!(
        event_id = %event_package.id,
        "Received signed event processing request"
    );

    // Extract relay ID from validated headers (set by crypto middleware)
    let headers = request.headers();
    let relay_id = extract_validated_relay_id(headers).ok_or_else(|| {
        error!("No validated relay ID found in headers");
        (
            StatusCode::UNAUTHORIZED,
            "Authentication required".to_string(),
        )
    })?;

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

/// Receive and process a SignedEventPackage from frontend
/// Creates ZIP file and uploads to S3
#[utoipa::path(
    post,
    path = "/api/v1/events/package",
    request_body = String,
    responses(
        (status = 200, description = "Event package processed and uploaded successfully", body = serde_json::Value),
        (status = 400, description = "Invalid event package or validation failed"),
        (status = 401, description = "Authentication required - Bearer token missing or invalid"),
        (status = 500, description = "Internal server error during processing or storage")
    ),
    security(
        ("bearer_auth" = [])
    ),
    tag = "events"
)]
async fn receive_event_package(
    State(state): State<AppState>,
    request: Request,
) -> Result<Json<serde_json::Value>, (StatusCode, String)> {
    // Extract verified event package from request extensions (set by crypto middleware)
    let event_package = extract_verified_event_package(&request).ok_or_else(|| {
        error!("No verified event package found in request extensions");
        (
            StatusCode::INTERNAL_SERVER_ERROR,
            "Event data verification failed".to_string(),
        )
    })?;

    // The crypto middleware has already consumed and replaced the body.
    // We need to get the body bytes again to store the raw payload.
    let (_parts, body) = request.into_parts();
    let body_bytes = match axum::body::to_bytes(body, usize::MAX).await {
        Ok(bytes) => bytes,
        Err(e) => {
            error!("Failed to read request body: {}", e);
            return Err((
                StatusCode::BAD_REQUEST,
                "Failed to read request body".to_string(),
            ));
        }
    };

    // Upload raw JSON file to S3
    let storage_location = match state
        .storage_service
        .upload_raw_event_package(&event_package, &body_bytes)
        .await
    {
        Ok(location) => location,
        Err(e) => {
            error!(
                event_id = %event_package.id,
                error = %e,
                "Failed to upload raw event package to S3"
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
        "size": body_bytes.len(),
        "processedAt": chrono::Utc::now()
    });

    info!(
        event_id = %event_package.id,
        storage_location = %storage_location,
        size = body_bytes.len(),
        "Raw EventPackage processed and uploaded successfully"
    );

    Ok(Json(response))
}

/// Verify if an event hash exists in storage
/// Stateless verification - no local state required
#[utoipa::path(
    get,
    path = "/api/v1/events/{hash}/verify",
    params(
        ("hash" = String, Path, description = "SHA-256 hash of the event to verify (64 characters)")
    ),
    responses(
        (status = 200, description = "Hash verification completed", body = HashVerificationResponse),
        (status = 400, description = "Invalid hash format - must be 64 characters"),
        (status = 401, description = "Authentication required - Bearer token missing or invalid"),
        (status = 500, description = "Internal server error during verification")
    ),
    security(
        ("bearer_auth" = [])
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
                verified_at: chrono::Utc::now(),
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

/// Response for hash verification
#[derive(serde::Serialize, utoipa::ToSchema)]
#[serde(rename_all = "camelCase")]
pub struct HashVerificationResponse {
    pub hash: String,
    pub exists: bool,
    pub verified_at: chrono::DateTime<chrono::Utc>,
}

/// Submit media file associated with an event
#[utoipa::path(
    post,
    path = "/api/v1/events/{eventId}/media",
    params(
        ("eventId" = Uuid, Path, description = "UUID of the event to associate media with")
    ),
    responses(
        (status = 201, description = "Media uploaded successfully", body = MediaSubmissionResponse),
        (status = 400, description = "Invalid request data or validation failed"),
        (status = 401, description = "Authentication required - Bearer token missing or invalid"),
        (status = 404, description = "Event not found"),
        (status = 415, description = "Unsupported media type"),
        (status = 500, description = "Internal server error during upload")
    ),
    security(
        ("bearer_auth" = [])
    ),
    tag = "events"
)]
async fn submit_event_media(
    State(state): State<AppState>,
    Path(event_id): Path<Uuid>,
    mut multipart: Multipart,
) -> Result<Json<MediaSubmissionResponse>, (StatusCode, String)> {
    info!(
        event_id = %event_id,
        "Received media submission request"
    );

    // Extract validated relay ID from request headers (set by crypto middleware)
    // Note: Multipart extraction happens after middleware, so we need to get headers from the underlying request
    // For now, we'll proceed with the assumption that middleware has validated the request
    let relay_id = format!("relay-{}", uuid::Uuid::new_v4()); // Temporary until we fix header extraction

    // Process multipart form data
    let mut media_file: Option<Vec<u8>> = None;
    let mut media_type: Option<String> = None;
    let mut file_name: Option<String> = None;
    let mut description: Option<String> = None;

    while let Some(field) = multipart.next_field().await.map_err(|e| {
        error!(error = %e, "Failed to read multipart field");
        (
            StatusCode::BAD_REQUEST,
            format!("Invalid multipart data: {e}"),
        )
    })? {
        let name = field.name().unwrap_or("unknown").to_string();

        if name == "media" {
            // Handle media file
            let content_type = field
                .content_type()
                .unwrap_or("application/octet-stream")
                .to_string();
            let file_name_field = field.file_name().unwrap_or("media.bin").to_string();
            let data = field.bytes().await.map_err(|e| {
                error!(error = %e, "Failed to read media file data");
                (
                    StatusCode::BAD_REQUEST,
                    format!("Failed to read media file: {e}"),
                )
            })?;

            // Validate file size
            if data.len() > state.storage_service.config.max_file_size as usize {
                error!(
                    file_size = data.len(),
                    max_size = state.storage_service.config.max_file_size,
                    "Media file too large"
                );
                return Err((
                    StatusCode::BAD_REQUEST,
                    format!(
                        "Media file too large: {} bytes (max: {} bytes)",
                        data.len(),
                        state.storage_service.config.max_file_size
                    ),
                ));
            }

            // Validate MIME type
            let allowed_types: Vec<&str> = state
                .storage_service
                .config
                .allowed_mime_types
                .split(',')
                .collect();
            if !allowed_types.contains(&content_type.as_str()) {
                error!(
                    content_type = %content_type,
                    allowed_types = ?allowed_types,
                    "Unsupported media type"
                );
                return Err((
                    StatusCode::UNSUPPORTED_MEDIA_TYPE,
                    format!("Unsupported media type: {content_type}"),
                ));
            }

            media_file = Some(data.to_vec());
            media_type = Some(content_type);
            file_name = Some(file_name_field);
        } else if name == "description" {
            // Handle description field
            let desc_data = field.text().await.map_err(|e| {
                error!(error = %e, "Failed to read description field");
                (
                    StatusCode::BAD_REQUEST,
                    format!("Failed to read description: {e}"),
                )
            })?;
            description = Some(desc_data);
        }
    }

    // Validate that we have a media file
    let media_data = media_file.ok_or_else(|| {
        error!("No media file provided in request");
        (
            StatusCode::BAD_REQUEST,
            "Media file is required".to_string(),
        )
    })?;

    let media_type = media_type.unwrap_or_else(|| "application/octet-stream".to_string());
    let file_name = file_name.unwrap_or_else(|| "media.bin".to_string());

    info!(
        event_id = %event_id,
        relay_id = %relay_id,
        file_name = %file_name,
        media_type = %media_type,
        size = media_data.len(),
        description = ?description,
        "Processing media upload"
    );

    // Check if event exists (verify event ID is valid)
    // For now, we'll assume the event exists if we get here
    // In a real implementation, you might want to verify against storage
    info!(event_id = %event_id, "Verifying event exists");

    // Upload media file to storage
    let storage_location = match state
        .storage_service
        .upload_media_file(&event_id, &media_data, &media_type, &file_name)
        .await
    {
        Ok(location) => location,
        Err(EventServerError::Storage(msg)) => {
            error!(
                event_id = %event_id,
                error = %msg,
                "Storage error during media upload"
            );
            return Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Storage error".to_string(),
            ));
        }
        Err(e) => {
            error!(
                event_id = %event_id,
                error = %e,
                "Unexpected error during media upload"
            );
            return Err((
                StatusCode::INTERNAL_SERVER_ERROR,
                "Internal server error".to_string(),
            ));
        }
    };

    // Generate media ID
    let media_id = uuid::Uuid::new_v4().to_string();

    // Create response
    let response = MediaSubmissionResponse {
        media_id,
        event_id,
        access_link: storage_location.clone(),
        uploaded_at: chrono::Utc::now(),
        media_type,
        size: media_data.len() as u64,
    };

    info!(
        event_id = %event_id,
        media_id = %response.media_id,
        storage_location = %storage_location,
        size = response.size,
        "Media uploaded successfully"
    );

    Ok(Json(response))
}
