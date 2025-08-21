use axum::{
    extract::Request,
    middleware::Next,
    response::Response,
    http::StatusCode,
};

/// Rate limiting middleware
/// TODO: Implement rate limiting
pub async fn rate_limit_middleware(
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    // TODO: Extract relay ID from request
    // TODO: Check rate limit in storage/cache
    // TODO: Increment counter and set expiration
    // TODO: Return 429 Too Many Requests if limit exceeded
    
    // For now, just pass through all requests
    Ok(next.run(request).await)
}