use axum::{
    http::StatusCode,
    response::{IntoResponse, Response},
    routing::get,
    Router,
};
pub use utoipa::Modify;
use utoipa::{
    openapi::security::{HttpAuthScheme, HttpBuilder, SecurityScheme},
    OpenApi,
};
use utoipa_swagger_ui::SwaggerUi;

use crate::controllers::{event, health};
use crate::crypto::{
    PowCertificateRequest, PowChallenge, PowChallengeResponse, PowSolution, TokenResponse,
};
use crate::state::AppState;
use crate::types::{
    api::{HealthResponse, ServiceHealthStatus},
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
        event::receive_event_package,
        event::verify_event_hash,
        crate::request_pow_challenge,
        crate::verify_pow_and_issue_certificate,
    ),
    components(
        schemas(
            HealthResponse,
            ServiceHealthStatus,
            event::HashVerificationResponse,
            EventPackage,
            EventPayload,
            ProcessingResult,
            EventAnnotation,
            EventMedia,
            EventMetadata,
            EventSource,
            FieldValue,
            MediaType,
            PowChallenge,
            PowChallengeResponse,
            PowSolution,
            PowCertificateRequest,
            TokenResponse,
        )
    ),
    tags(
        (name = "health", description = "Health check endpoints"),
        (name = "events", description = "Event processing endpoints"),
        (name = "authentication", description = "Authentication and PoW challenge endpoints")
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
    ),
    modifiers(&SecurityAddon)
)]
pub struct ApiDoc;

/// Security addon to add bearer token authentication scheme
struct SecurityAddon;

impl Modify for SecurityAddon {
    fn modify(&self, openapi: &mut utoipa::openapi::OpenApi) {
        if let Some(components) = openapi.components.as_mut() {
            components.security_schemes.insert(
                "bearer_auth".to_string(),
                SecurityScheme::Http(
                    HttpBuilder::new()
                        .scheme(HttpAuthScheme::Bearer)
                        .bearer_format("JWT")
                        .build(),
                ),
            );
        }
    }
}

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
