use axum::{
    extract::{Request, State},
    http::{HeaderMap, StatusCode},
    middleware::Next,
    response::Response,
};
use base64::Engine;
use tracing::{error, info, warn};

use crate::error::EventServerError;
use crate::state::AppState;
use crate::types::event::SignedEventPackage;

/// Cryptographic validation middleware
/// This middleware ensures all incoming requests are cryptographically signed
/// and authenticated before processing
pub async fn crypto_validation_middleware(
    State(state): State<AppState>,
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    let path = request.uri().path().to_string();

    // Skip validation for public endpoints
    if should_skip_validation(&path) {
        info!(path = %path, "Skipping crypto validation for public endpoint");
        return Ok(next.run(request).await);
    }

    info!(path = %path, "Applying cryptographic validation");

    // Extract headers and body for validation
    let _headers = request.headers().clone();
    let (parts, body) = request.into_parts();
    let body_bytes = match axum::body::to_bytes(body, usize::MAX).await {
        Ok(bytes) => bytes.to_vec(),
        Err(e) => {
            error!(error = %e, "Failed to read request body for validation");
            return Err(StatusCode::BAD_REQUEST);
        }
    };

    // Try to parse body as SignedEventPackage first
    if let Ok(signed_package) = serde_json::from_slice::<SignedEventPackage>(&body_bytes) {
        info!(path = %path, "Detected SignedEventPackage, validating with PoW solution");

        // Validate PoW solution first
        match state
            .pow_service
            .verify_solution(&signed_package.pow_solution)
        {
            Ok(()) => {
                info!(
                    relay_id = %signed_package.relay_id,
                    challenge_id = %signed_package.pow_solution.challenge_id,
                    "PoW solution verified successfully"
                );

                // Then validate the signature of the event data
                match validate_event_signature(&signed_package) {
                    Ok(()) => {
                        info!(
                            relay_id = %signed_package.relay_id,
                            path = %path,
                            "SignedEventPackage validated successfully with PoW"
                        );

                        // Add validated relay ID to request headers for downstream use
                        let mut request =
                            Request::from_parts(parts, axum::body::Body::from(body_bytes));
                        request.headers_mut().insert(
                            "X-Validated-Relay-ID",
                            signed_package
                                .relay_id
                                .parse()
                                .unwrap_or_else(|_| "unknown".parse().unwrap()),
                        );

                        Ok(next.run(request).await)
                    }
                    Err(e) => {
                        warn!(
                            error = %e,
                            relay_id = %signed_package.relay_id,
                            "Event signature validation failed"
                        );
                        Err(StatusCode::UNAUTHORIZED)
                    }
                }
            }
            Err(e) => {
                warn!(
                    error = %e,
                    relay_id = %signed_package.relay_id,
                    challenge_id = %signed_package.pow_solution.challenge_id,
                    "PoW solution verification failed"
                );
                Err(StatusCode::UNAUTHORIZED)
            }
        }
    } else {
        // All authenticated requests must use SignedEventPackage format with PoW
        warn!(
            path = %path,
            "Request does not contain SignedEventPackage - PoW-based authentication required"
        );
        Err(StatusCode::BAD_REQUEST)
    }
}

/// Validate the Ed25519 signature of the event data
fn validate_event_signature(signed_package: &SignedEventPackage) -> Result<(), EventServerError> {
    // Decode the public key from base64
    let public_key_bytes = base64::engine::general_purpose::STANDARD
        .decode(&signed_package.public_key)
        .map_err(|e| EventServerError::Validation(format!("Invalid base64 public key: {e}")))?;

    // Validate public key length for Ed25519
    if public_key_bytes.len() != 32 {
        return Err(EventServerError::Validation(format!(
            "Invalid Ed25519 public key length: expected 32 bytes, got {}",
            public_key_bytes.len()
        )));
    }

    // Create Ed25519 public key
    let key_array: [u8; 32] = public_key_bytes.try_into().map_err(|_| {
        EventServerError::Validation("Failed to convert key bytes to array".to_string())
    })?;
    let public_key = ed25519_dalek::VerifyingKey::from_bytes(&key_array)
        .map_err(|e| EventServerError::Validation(format!("Invalid Ed25519 public key: {e}")))?;

    // Serialize the event data for signature verification
    let event_data_json = serde_json::to_vec(&signed_package.event_data).map_err(|e| {
        EventServerError::Validation(format!("Failed to serialize event data: {e}"))
    })?;

    // Decode the signature
    let signature_bytes = base64::engine::general_purpose::STANDARD
        .decode(&signed_package.signature)
        .map_err(|e| EventServerError::Validation(format!("Invalid base64 signature: {e}")))?;

    let signature = ed25519_dalek::Signature::try_from(&signature_bytes[..])
        .map_err(|e| EventServerError::Validation(format!("Invalid signature format: {e}")))?;

    // Verify the signature
    public_key
        .verify_strict(&event_data_json, &signature)
        .map_err(|e| EventServerError::Validation(format!("Signature verification failed: {e}")))?;

    Ok(())
}

/// Determine if cryptographic validation should be skipped for a given path
fn should_skip_validation(path: &str) -> bool {
    // Public endpoints that don't require authentication
    let public_paths = [
        "/health",
        "/docs",
        "/openapi-json",
        "/openapi-yaml",
        // PoW challenge endpoint for obtaining challenges
        "/api/v1/pow/challenge",
    ];

    public_paths
        .iter()
        .any(|&public_path| path == public_path || path.starts_with(&format!("{public_path}/")))
}

/// Extract relay ID from validated request headers
pub fn extract_validated_relay_id(headers: &HeaderMap) -> Option<String> {
    headers
        .get("X-Validated-Relay-ID")
        .and_then(|h| h.to_str().ok())
        .map(|s| s.to_string())
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_should_skip_validation() {
        assert!(should_skip_validation("/health"));
        assert!(should_skip_validation("/docs"));
        assert!(should_skip_validation("/openapi-json"));
        assert!(should_skip_validation("/openapi-yaml"));
        assert!(should_skip_validation("/api/v1/pow/challenge"));

        assert!(!should_skip_validation("/api/v1/events"));
        assert!(!should_skip_validation("/api/v1/events/package"));
        assert!(!should_skip_validation("/some/other/path"));
    }

    #[test]
    fn test_extract_validated_relay_id() {
        let mut headers = HeaderMap::new();

        // No header present
        assert_eq!(extract_validated_relay_id(&headers), None);

        // Header present
        headers.insert("X-Validated-Relay-ID", "test_relay".parse().unwrap());
        assert_eq!(
            extract_validated_relay_id(&headers),
            Some("test_relay".to_string())
        );
    }
}
