use axum::{
    extract::{Request, State},
    http::{HeaderMap, StatusCode},
    middleware::Next,
    response::Response,
};
use base64::Engine;
use jsonwebtoken::{decode, Algorithm, DecodingKey, Validation};
use p256::elliptic_curve::sec1::FromEncodedPoint;
use p256::{EncodedPoint, PublicKey};
use serde::{Deserialize, Serialize};
use tracing::{error, info, warn};

use crate::error::EventServerError;
use crate::state::AppState;
use crate::types::event::{EventPackage, SignedEventPackage};

/// JWT Claims structure for event data
#[derive(Debug, Serialize, Deserialize)]
struct EventJwtClaims {
    /// The event package payload
    payload: EventPackage,
}

/// JWK (JSON Web Key) structure for P-256 elliptic curve keys
#[derive(Debug, Serialize, Deserialize)]
struct JwkKey {
    kty: String,       // Key type: "EC"
    crv: String,       // Curve: "P-256"
    x: String,         // X coordinate (base64url encoded)
    y: String,         // Y coordinate (base64url encoded)
    d: Option<String>, // Private key component (optional)
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
                info!("Attempting to parse request body as SignedEventPackage");
                info!("Request body: {}", String::from_utf8_lossy(&body_bytes));
                if let Ok(signed_package) =
                    serde_json::from_slice::<SignedEventPackage>(&body_bytes)
                {
                    info!(
                        "Successfully parsed SignedEventPackage, JWT data length: {}",
                        signed_package.jwt_event_data.len()
                    );

                    // Verify JWT event data using device public key from certificate
                    info!("Starting JWT verification with device public key");
                    match verify_jwt_event_data(
                        &signed_package.jwt_event_data,
                        &validation.public_key,
                    ) {
                        Ok(event_package) => {
                            // Print the event package for debugging
                            info!(
                                event_id = %event_package.id,
                                event_version = %event_package.version,
                                annotations_count = %event_package.annotations.len(),
                                has_media = %event_package.media.is_some(),
                                "Received and verified event package: {:?}",
                                event_package
                            );

                            // Add validated relay ID to request headers and event data to extensions
                            let mut request =
                                Request::from_parts(parts, axum::body::Body::from(body_bytes));
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
                            error!(
                                error = %e,
                                relay_id = %validation.relay_id,
                                "JWT event data verification failed"
                            );
                            return Err(StatusCode::UNAUTHORIZED);
                        }
                    }
                } else {
                    // For non-event endpoints, just validate the certificate
                    info!("Failed to parse as SignedEventPackage, treating as non-event endpoint");
                    if let Err(e) = serde_json::from_slice::<SignedEventPackage>(&body_bytes) {
                        error!("SignedEventPackage parsing error: {}", e);
                    }
                    let mut request =
                        Request::from_parts(parts, axum::body::Body::from(body_bytes));
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
    info!("Starting JWT verification process");
    info!("JWT token length: {}", jwt_token.len());
    info!("Device public key: {}", device_public_key);

    // Decode the base64 encoded public key first
    let decoded_key = base64::engine::general_purpose::STANDARD
        .decode(device_public_key)
        .map_err(|e| {
            error!("Failed to decode base64 public key: {}", e);
            EventServerError::Validation(format!("Invalid base64 encoding: {e}"))
        })?;

    let decoded_key_str = String::from_utf8(decoded_key).map_err(|e| {
        error!("Failed to convert decoded key to UTF-8: {}", e);
        EventServerError::Validation(format!("Invalid UTF-8 in decoded key: {e}"))
    })?;

    info!("Decoded public key: {}", decoded_key_str);

    // Parse the decoded device public key as JWK format
    let jwk: JwkKey = serde_json::from_str(&decoded_key_str).map_err(|e| {
        error!("Failed to parse decoded public key as JWK: {}", e);
        error!("Decoded key content: '{}'", decoded_key_str);
        EventServerError::Validation(format!("Invalid JWK format: {e}"))
    })?;

    info!(
        "Successfully parsed JWK - kty: {}, crv: {}",
        jwk.kty, jwk.crv
    );

    // Validate that this is an EC P-256 key
    if jwk.kty != "EC" {
        return Err(EventServerError::Validation(format!(
            "Invalid key type: expected 'EC', got '{}'",
            jwk.kty
        )));
    }

    if jwk.crv != "P-256" {
        return Err(EventServerError::Validation(format!(
            "Invalid curve: expected 'P-256', got '{}'",
            jwk.crv
        )));
    }

    // Decode x and y coordinates from base64url
    info!("Decoding JWK coordinates - x: {}, y: {}", jwk.x, jwk.y);
    let x_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
        .decode(&jwk.x)
        .map_err(|e| {
            error!("Failed to decode x coordinate '{}': {}", jwk.x, e);
            EventServerError::Validation(format!("Invalid x coordinate: {e}"))
        })?;

    let y_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
        .decode(&jwk.y)
        .map_err(|e| {
            error!("Failed to decode y coordinate '{}': {}", jwk.y, e);
            EventServerError::Validation(format!("Invalid y coordinate: {e}"))
        })?;

    info!(
        "Successfully decoded coordinates - x: {} bytes, y: {} bytes",
        x_bytes.len(),
        y_bytes.len()
    );

    // Validate coordinate lengths for P-256 (32 bytes each)
    if x_bytes.len() != 32 {
        return Err(EventServerError::Validation(format!(
            "Invalid x coordinate length: expected 32 bytes, got {}",
            x_bytes.len()
        )));
    }

    if y_bytes.len() != 32 {
        return Err(EventServerError::Validation(format!(
            "Invalid y coordinate length: expected 32 bytes, got {}",
            y_bytes.len()
        )));
    }

    // Create uncompressed point format: 0x04 || x || y
    let mut point_bytes = Vec::with_capacity(65);
    point_bytes.push(0x04); // Uncompressed point indicator
    point_bytes.extend_from_slice(&x_bytes);
    point_bytes.extend_from_slice(&y_bytes);
    info!("Created EC point bytes: {} bytes total", point_bytes.len());

    // Create P-256 public key from the point
    let encoded_point = EncodedPoint::from_bytes(&point_bytes).map_err(|e| {
        error!("Failed to create encoded point from bytes: {}", e);
        EventServerError::Validation(format!("Invalid EC point: {e}"))
    })?;

    let public_key = PublicKey::from_encoded_point(&encoded_point)
        .into_option()
        .ok_or_else(|| {
            error!("Failed to create P-256 public key from encoded point");
            EventServerError::Validation("Invalid P-256 public key point".to_string())
        })?;
    info!("Successfully created P-256 public key");

    // Convert to SEC1 DER format for JWT verification
    let der_bytes = public_key.to_sec1_bytes().to_vec();
    info!(
        "Created DER bytes for JWT verification: {} bytes",
        der_bytes.len()
    );

    // Create decoding key for JWT verification with ES256
    let decoding_key = DecodingKey::from_ec_der(&der_bytes);
    info!("Successfully created JWT decoding key");

    // Set up JWT validation parameters for ES256
    let mut validation = Validation::new(Algorithm::ES256);
    validation.validate_exp = true;
    validation.set_audience(&["event_server"]); // Match the audience from frontend
    info!("Set up JWT validation with ES256 algorithm and audience 'event_server'");

    // Decode and verify the JWT
    info!("Attempting to decode and verify JWT token");
    let token_data =
        decode::<EventJwtClaims>(jwt_token, &decoding_key, &validation).map_err(|e| {
            error!("JWT verification failed: {}", e);
            error!(
                "JWT token (first 50 chars): {}",
                &jwt_token[..std::cmp::min(50, jwt_token.len())]
            );
            EventServerError::Validation(format!("JWT verification failed: {e}"))
        })?;

    info!("Successfully verified JWT token");
    info!("Event package payload: {:?}", token_data.claims.payload);

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
