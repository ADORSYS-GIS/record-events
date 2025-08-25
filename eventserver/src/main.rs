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
use crate::crypto::PowService;
use crate::middleware::crypto::crypto_validation_middleware;
use crate::middleware::auth::authorization_middleware;
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

    // PoW-only authentication - no certificate initialization needed

    // Create an application state
    let app_state = AppState::new(event_service, storage_service, pow_service);

    // Build application router with cryptographic validation
    let app = Router::new()
        .route("/health", get(controllers::health::health_check))
        .nest("/api/v1", api_routes())
        // Apply cryptographic validation middleware to all routes
        .layer(axum_middleware::from_fn_with_state(
            app_state.clone(),
            crypto_validation_middleware,
        ))
        // Apply authorization middleware after crypto validation
        .layer(axum_middleware::from_fn_with_state(
            app_state.clone(),
            authorization_middleware,
        ))
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
    Router::new()
        .merge(controllers::event::routes())
        .merge(pow_routes())
}

/// PoW challenge routes for authentication
fn pow_routes() -> Router<AppState> {
    Router::new()
        .route("/pow/challenge", axum::routing::post(request_pow_challenge))
}



/// Request a new PoW challenge (public endpoint)
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

