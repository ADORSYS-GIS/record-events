use axum::{middleware as axum_middleware, routing::get, Router};
use tower_http::{cors::CorsLayer, trace::TraceLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod config;
mod controllers;
mod crypto;
mod error;
mod middleware;
mod services;
mod state;
mod types;

use crate::config::AppConfig;
use crate::crypto::{CertificateRequest, CertificateService, PowCertificateRequest, PowService};
use crate::middleware::crypto::crypto_validation_middleware;
use crate::services::{EventService, StorageService};
use crate::state::AppState;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    // Load environment variables from .env file
    dotenvy::dotenv().ok();

    // Initialize tracing
    tracing_subscriber::registry()
        .with(
            tracing_subscriber::EnvFilter::try_from_default_env()
                .unwrap_or_else(|_| "eventserver=debug,tower_http=debug".into()),
        )
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Load configuration
    let config = AppConfig::load()?;
    tracing::info!("Configuration loaded successfully");

    // Initialize services
    let storage_service = StorageService::new(config.storage.clone()).await?;
    let event_service = EventService::new(storage_service.clone());
    let pow_service = PowService::new();
    let certificate_service = CertificateService::new(config.security.jwt_secret.clone());

    // Create an application state
    let app_state = AppState::new(
        event_service,
        storage_service,
        pow_service,
        certificate_service,
    );

    // Build application router with separate public and protected routes
    let app = Router::new()
        // Public routes (no authentication required)
        .route("/health", get(controllers::health::health_check))
        .merge(controllers::openapi::routes())
        // PoW routes (public endpoints for authentication)
        .route("/api/v1/pow/challenge", axum::routing::post(request_pow_challenge))
        .route("/api/v1/pow/verify", axum::routing::post(verify_pow_and_issue_certificate))
        // Protected routes (require authentication)
        .nest(
            "/api/v1",
            api_routes()
                // Apply crypto validation middleware only to protected routes
                .layer(axum_middleware::from_fn_with_state(
                    app_state.clone(),
                    crypto_validation_middleware,
                )),
        )
        .layer(TraceLayer::new_for_http())
        .layer(CorsLayer::permissive())
        .with_state(app_state);

    // Start server
    let bind_address = format!("{}:{}", config.server.host, config.server.port);
    let listener = tokio::net::TcpListener::bind(&bind_address).await?;

    tracing::info!("EventServer listening on {}", listener.local_addr()?);
    tracing::info!(
        "Server started successfully - Stateless EventServer v{} with cryptographic validation",
        env!("CARGO_PKG_VERSION")
    );

    axum::serve(listener, app).await?;

    Ok(())
}

fn api_routes() -> Router<AppState> {
    Router::new().merge(controllers::event::routes())
}

/// Request a new PoW challenge (public endpoint)
#[utoipa::path(
    post,
    path = "/api/v1/pow/challenge",
    responses(
        (status = 200, description = "PoW challenge generated successfully", body = PowChallengeResponse),
        (status = 500, description = "Failed to generate PoW challenge")
    ),
    tag = "authentication"
)]
async fn request_pow_challenge(
    axum::extract::State(state): axum::extract::State<AppState>,
) -> Result<axum::Json<serde_json::Value>, axum::http::StatusCode> {
    match state.pow_service.generate_challenge() {
        Ok(challenge) => {
            tracing::info!(
                challenge_id = %challenge.challenge_id,
                difficulty = challenge.difficulty,
                "PoW challenge generated"
            );

            Ok(axum::Json(serde_json::json!({
                "challenge_id": challenge.challenge_id,
                "challenge_data": challenge.challenge_data,
                "difficulty": challenge.difficulty,
                "expires_at": challenge.expires_at
            })))
        }
        Err(e) => {
            tracing::error!(error = %e, "Failed to generate PoW challenge");
            Err(axum::http::StatusCode::INTERNAL_SERVER_ERROR)
        }
    }
}

/// Verify PoW solution and issue device certificate (public endpoint)
#[utoipa::path(
    post,
    path = "/api/v1/pow/verify",
    request_body = PowCertificateRequest,
    responses(
        (status = 200, description = "PoW verified and certificate issued successfully", body = TokenResponse),
        (status = 400, description = "Invalid PoW solution or request data"),
        (status = 401, description = "PoW verification failed"),
        (status = 500, description = "Failed to issue certificate")
    ),
    tag = "authentication"
)]
async fn verify_pow_and_issue_certificate(
    axum::extract::State(state): axum::extract::State<AppState>,
    axum::Json(request): axum::Json<PowCertificateRequest>,
) -> Result<axum::Json<serde_json::Value>, axum::http::StatusCode> {
    // First, verify the PoW solution
    match state.pow_service.verify_solution(&request.solution) {
        Ok(()) => {
            tracing::info!(
                relay_id = %request.relay_id,
                challenge_id = %request.solution.challenge_id,
                "PoW solution verified successfully for certificate request"
            );

            // Create certificate request
            let cert_request = CertificateRequest {
                relay_id: request.relay_id.clone(),
                public_key: request.public_key.clone(),
            };

            // Issue the certificate
            match state.certificate_service.issue_certificate(&cert_request) {
                Ok(certificate_response) => {
                    tracing::info!(
                        relay_id = %request.relay_id,
                        certificate_id = %certificate_response.certificate.certificate_id,
                        expires_at = %certificate_response.certificate.expires_at,
                        "Device certificate issued successfully"
                    );

                    Ok(axum::Json(serde_json::json!({
                        "success": true,
                        "certificate": {
                            "certificate_id": certificate_response.certificate.certificate_id,
                            "relay_id": certificate_response.certificate.relay_id,
                            "public_key": certificate_response.certificate.public_key,
                            "issued_at": certificate_response.certificate.issued_at,
                            "expires_at": certificate_response.certificate.expires_at,
                            "signature": certificate_response.certificate.signature
                        },
                        "token": certificate_response.token
                    })))
                }
                Err(e) => {
                    tracing::error!(
                        error = %e,
                        relay_id = %request.relay_id,
                        "Failed to issue certificate after PoW verification"
                    );
                    Err(axum::http::StatusCode::INTERNAL_SERVER_ERROR)
                }
            }
        }
        Err(e) => {
            tracing::warn!(
                error = %e,
                relay_id = %request.relay_id,
                challenge_id = %request.solution.challenge_id,
                "PoW solution verification failed for certificate request"
            );
            Err(axum::http::StatusCode::UNAUTHORIZED)
        }
    }
}
