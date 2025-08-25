use axum::{routing::get, Router};
use tower_http::{cors::CorsLayer, trace::TraceLayer};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

mod config;
mod controllers;
mod error;
mod services;
mod state;
mod types;

use crate::config::AppConfig;
use crate::services::{EventService, StorageService};
use crate::state::AppState;

#[tokio::main]
async fn main() -> anyhow::Result<()> {
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

    // Create an application state
    let app_state = AppState::new(event_service, storage_service);

    // Build application router
    let app = Router::new()
        .route("/health", get(controllers::health::health_check))
        .nest("/api/v1", api_routes())
        .layer(TraceLayer::new_for_http())
        .layer(CorsLayer::permissive())
        .with_state(app_state);

    // Start server
    let bind_address = format!("{}:{}", config.server.host, config.server.port);
    let listener = tokio::net::TcpListener::bind(&bind_address).await?;

    tracing::info!("EventServer listening on {}", listener.local_addr()?);
    tracing::info!(
        "Server started successfully - Stateless EventServer v{}",
        env!("CARGO_PKG_VERSION")
    );

    axum::serve(listener, app).await?;

    Ok(())
}

fn api_routes() -> Router<AppState> {
    Router::new().merge(controllers::event::routes())
}
