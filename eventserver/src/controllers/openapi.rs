use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
    Router,
};
pub use utoipa::Modify;
use utoipa::OpenApi;
use utoipa_swagger_ui::SwaggerUi;

use crate::controllers::{event, health};
use crate::state::AppState;
use crate::types::{
    api::{HashVerificationResponse, HealthResponse, ServiceHealthStatus},
    event::{
        EventAnnotation, EventMedia, EventMetadata, EventPackage, EventPayload, EventSource,
        FieldValue, MediaType, ProcessingResult,
    },
};

/// OpenAPI documentation structure
#[derive(OpenApi)]
#[openapi(
    paths(
        health::health_check,
        event::receive_event,
        event::receive_event_upload,
        event::receive_event_package,
        event::verify_event_hash,
    ),
    components(
        schemas(
            HealthResponse,
            ServiceHealthStatus,
            HashVerificationResponse,
            EventPackage,
            EventPayload,
            ProcessingResult,
            EventAnnotation,
            EventMedia,
            EventMetadata,
            EventSource,
            FieldValue,
            MediaType,
        )
    ),
    tags(
        (name = "health", description = "Health check endpoints"),
        (name = "events", description = "Event processing endpoints")
    ),
    info(
        title = "EventServer API",
        version = "1.0.0",
        description = "Stateless EventServer backend for the EventApp ecosystem",
        contact(
            name = "EventApp Team",
            email = "support@eventapp.com"
        )
    ),
    servers(
        (url = "/", description = "Local server")
    )
)]
pub struct ApiDoc;

/// Create OpenAPI documentation routes
pub fn routes() -> Router<AppState> {
    Router::new()
        .route("/openapi-json", get(openapi_json))
        .route("/openapi-yaml", get(openapi_yaml))
        .merge(SwaggerUi::new("/docs").url("/openapi.json", ApiDoc::openapi()))
}

/// Serve OpenAPI specification in JSON format
#[utoipa::path(
    get,
    path = "/openapi.json",
    responses(
        (status = 200, description = "OpenAPI specification in JSON format", content_type = "application/json")
    ),
    tag = "documentation"
)]

async fn openapi_json() -> Response {
    let spec = ApiDoc::openapi();
    match serde_json::to_string_pretty(&spec) {
        Ok(json) => (StatusCode::OK, [("content-type", "application/json")], json).into_response(),
        Err(_) => StatusCode::INTERNAL_SERVER_ERROR.into_response(),
    }
}

/// Serve OpenAPI specification in YAML format
#[utoipa::path(
    get,
    path = "/openapi.yaml",
    responses(
        (status = 200, description = "OpenAPI specification in YAML format", content_type = "application/yaml")
    ),
    tag = "documentation"
)]
async fn openapi_yaml() -> Response {
    let spec = ApiDoc::openapi();
    match serde_yaml::to_string(&spec) {
        Ok(yaml) => (StatusCode::OK, [("content-type", "application/yaml")], yaml).into_response(),
        Err(_) => StatusCode::INTERNAL_SERVER_ERROR.into_response(),
    }
}
