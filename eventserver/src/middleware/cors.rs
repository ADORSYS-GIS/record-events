use axum::{
    extract::Request,
    middleware::Next,
    response::Response,
    http::StatusCode,
};

/// CORS middleware
/// TODO: Implement custom CORS handling if needed
pub async fn cors_middleware(
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    // TODO: Add custom CORS headers if needed
    // Note: We're using tower-http CorsLayer in main.rs for basic CORS
    
    // For now, just pass through all requests
    Ok(next.run(request).await)
}