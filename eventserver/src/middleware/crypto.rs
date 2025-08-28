use axum::{
    extract::{Request, State},
    http::{HeaderMap, StatusCode},
    middleware::Next,
    response::Response,
};
use base64::Engine;
use jsonwebtoken::{decode, DecodingKey, Validation, Algorithm};
use serde::{Deserialize, Serialize};
use tracing::{error, info, warn};

use crate::error::EventServerError;
use crate::state::AppState;
use crate::types::event::{SignedEventPackage, EventPackage};

/// JWT Claims structure for event data
#[derive(Debug, Serialize, Deserialize)]
struct EventJwtClaims {
    /// The event package payload
    payload: EventPackage,
}

/// Cryptographic validation middleware
/// This middleware ensures all incoming requests are cryptographically signed
/// and authenticated before processing. It uses certificate-based authentication
/// with JWT verification of event data using device public keys.
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

    // Extract headers for certificate token check
    let headers = request.headers().clone();

    // First, try certificate-based authentication
    if let Some(certificate_token) = extract_certificate_token(&headers) {
        info!(path = %path, "Detected certificate token, validating certificate");

        match state
            .certificate_service
            .validate_certificate(&certificate_token)
        {
            Ok(validation) => {
                info!(
                    relay_id = %validation.relay_id,
                    expires_at = %validation.expires_at,
                    path = %path,
                    "Certificate validated successfully"
                );

                // Extract request body to verify JWT event data
                let (parts, body) = request.into_parts();
                let body_bytes = match axum::body::to_bytes(body, usize::MAX).await {
                    Ok(bytes) => bytes.to_vec(),
                    Err(e) => {
                        error!(error = %e, "Failed to read request body for JWT verification");
                        return Err(StatusCode::BAD_REQUEST);
                    }
                };

                // Try to parse body as SignedEventPackage for JWT verification
                if let Ok(signed_package) = serde_json::from_slice::<SignedEventPackage>(&body_bytes) {
                    // Verify JWT event data using device public key from certificate
                    match verify_jwt_event_data(&signed_package.jwt_event_data, &validation.public_key) {
                        Ok(event_package) => {
                            
                            // Add validated relay ID to request headers and event data to extensions
                            let mut request = Request::from_parts(parts, axum::body::Body::from(body_bytes));
                            request.headers_mut().insert(
                                "X-Validated-Relay-ID",
                                validation
                                    .relay_id
                                    .parse()
                                    .unwrap_or_else(|_| "unknown".parse().unwrap()),
                            );
                            
                            // Add the verified event package to request extensions for controllers to use
                            request.extensions_mut().insert(event_package);

                            return Ok(next.run(request).await);
                        }
                        Err(e) => {
                            warn!(
                                error = %e,
                                relay_id = %validation.relay_id,
                                "JWT event data verification failed"
                            );
                            return Err(StatusCode::UNAUTHORIZED);
                        }
                    }
                } else {
                    // For non-event endpoints, just validate the certificate
                    let mut request = Request::from_parts(parts, axum::body::Body::from(body_bytes));
                    request.headers_mut().insert(
                        "X-Validated-Relay-ID",
                        validation
                            .relay_id
                            .parse()
                            .unwrap_or_else(|_| "unknown".parse().unwrap()),
                    );

                    return Ok(next.run(request).await);
                }
            }
            Err(e) => {
                warn!(
                    error = %e,
                    path = %path,
                    "Certificate validation failed"
                );
                return Err(StatusCode::UNAUTHORIZED);
            }
        }
    }

    // No certificate token found - authentication required
    warn!(
        path = %path,
        "Request missing certificate token in Authorization header - authentication required"
    );
    Err(StatusCode::UNAUTHORIZED)
}

/// Verify JWT event data using device public key from certificate
fn verify_jwt_event_data(
    jwt_token: &str,
    device_public_key: &str,
) -> Result<EventPackage, EventServerError> {
    // Decode the device public key from base64
    let public_key_bytes = base64::engine::general_purpose::STANDARD
        .decode(device_public_key)
        .map_err(|e| EventServerError::Validation(format!("Invalid base64 public key: {e}")))?;

    // Validate public key length for Ed25519
    if public_key_bytes.len() != 32 {
        return Err(EventServerError::Validation(format!(
            "Invalid Ed25519 public key length: expected 32 bytes, got {}",
            public_key_bytes.len()
        )));
    }

    // Create decoding key for JWT verification
    let decoding_key = DecodingKey::from_ed_der(&public_key_bytes);

    // Set up JWT validation parameters
    let mut validation = Validation::new(Algorithm::EdDSA);
    validation.validate_exp = true;

    // Decode and verify the JWT
    let token_data = decode::<EventJwtClaims>(jwt_token, &decoding_key, &validation)
        .map_err(|e| EventServerError::Validation(format!("JWT verification failed: {e}")))?;

    Ok(token_data.claims.payload)
}

/// Determine if cryptographic validation should be skipped for a given path
pub fn should_skip_validation(path: &str) -> bool {
    // Public endpoints that don't require authentication
    let public_paths = [
        "/health",
        "/docs",
        "/openapi-json",
        "/openapi-yaml",
        // PoW challenge endpoint for obtaining challenges
        "/api/v1/pow/challenge",
        // PoW verification endpoint for obtaining certificates
        "/api/v1/pow/verify",
    ];

    public_paths
        .iter()
        .any(|&public_path| path == public_path || path.starts_with(&format!("{public_path}/")))
}

/// Extract certificate token from Authorization header
/// Expected format: "Bearer <certificate_token>"
fn extract_certificate_token(headers: &HeaderMap) -> Option<String> {
    headers
        .get("Authorization")
        .and_then(|h| h.to_str().ok())
        .and_then(|auth_header| {
            auth_header
                .strip_prefix("Bearer ")
                .map(|token| token.to_string())
        })
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
