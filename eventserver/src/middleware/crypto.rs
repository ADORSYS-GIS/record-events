use axum::{
    extract::{Request, State},
    http::{HeaderMap, StatusCode},
    middleware::Next,
    response::Response,
};
use base64::Engine;
use jsonwebtoken::{decode, Algorithm, DecodingKey, Validation};
use serde::{Deserialize, Serialize};
use tracing::{error, info, warn};
use p256::{PublicKey, EncodedPoint};
use p256::elliptic_curve::sec1::FromEncodedPoint;

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
    kty: String, // Key type: "EC"
    crv: String, // Curve: "P-256"
    x: String,   // X coordinate (base64url encoded)
    y: String,   // Y coordinate (base64url encoded)
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
                if let Ok(signed_package) =
                    serde_json::from_slice::<SignedEventPackage>(&body_bytes)
                {
                    // Verify JWT event data using device public key from certificate
                    match verify_jwt_event_data(
                        &signed_package.jwt_event_data,
                        &validation.public_key,
                    ) {
                        Ok(event_package) => {
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
    // Parse the device public key as JWK format
    let jwk: JwkKey = serde_json::from_str(device_public_key)
        .map_err(|e| EventServerError::Validation(format!("Invalid JWK format: {e}")))?;

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
    let x_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
        .decode(&jwk.x)
        .map_err(|e| EventServerError::Validation(format!("Invalid x coordinate: {e}")))?;
    
    let y_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
        .decode(&jwk.y)
        .map_err(|e| EventServerError::Validation(format!("Invalid y coordinate: {e}")))?;

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

    // Create P-256 public key from the point
    let encoded_point = EncodedPoint::from_bytes(&point_bytes)
        .map_err(|e| EventServerError::Validation(format!("Invalid EC point: {e}")))?;
    
    let public_key = PublicKey::from_encoded_point(&encoded_point)
        .into_option()
        .ok_or_else(|| EventServerError::Validation("Invalid P-256 public key point".to_string()))?;

    // Convert to SEC1 DER format for JWT verification  
    let der_bytes = public_key.to_sec1_bytes().to_vec();

    // Create decoding key for JWT verification with ES256
    let decoding_key = DecodingKey::from_ec_der(&der_bytes);

    // Set up JWT validation parameters for ES256
    let mut validation = Validation::new(Algorithm::ES256);
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

    #[test]
    fn test_p256_jwk_parsing() {
        // Test P-256 JWK public key parsing from the issue description
        let public_key_jwk = r#"{ "kty": "EC", "crv": "P-256", "x": "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s", "y": "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc" }"#;
        
        // Test that JWK parsing works
        let jwk_result: Result<JwkKey, _> = serde_json::from_str(public_key_jwk);
        assert!(jwk_result.is_ok(), "Failed to parse JWK: {:?}", jwk_result.err());
        
        let jwk = jwk_result.unwrap();
        assert_eq!(jwk.kty, "EC");
        assert_eq!(jwk.crv, "P-256");
        assert_eq!(jwk.x, "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s");
        assert_eq!(jwk.y, "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc");
        
        // Test that coordinate decoding works
        let x_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
            .decode(&jwk.x);
        let y_bytes = base64::engine::general_purpose::URL_SAFE_NO_PAD
            .decode(&jwk.y);
            
        assert!(x_bytes.is_ok(), "Failed to decode x coordinate");
        assert!(y_bytes.is_ok(), "Failed to decode y coordinate");
        assert_eq!(x_bytes.unwrap().len(), 32, "X coordinate should be 32 bytes");
        assert_eq!(y_bytes.unwrap().len(), 32, "Y coordinate should be 32 bytes");
    }

    #[test]
    fn test_invalid_jwk_formats() {
        // Test invalid key type
        let invalid_kty = r#"{ "kty": "RSA", "crv": "P-256", "x": "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s", "y": "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc" }"#;
        
        // Create a mock JWT token (doesn't need to be valid for this test)
        let mock_jwt = "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImRldmljZV9pZCI6InRlc3QiLCJ0aW1lc3RhbXAiOiIyMDI1LTA4LTI4VDE2OjE5OjAwWiIsImV2ZW50X3R5cGUiOiJ0ZXN0In0sImV4cCI6OTk5OTk5OTk5OX0.invalid";
        
        let result = verify_jwt_event_data(mock_jwt, invalid_kty);
        assert!(result.is_err(), "Should fail with invalid key type");
        
        // Test invalid curve
        let invalid_crv = r#"{ "kty": "EC", "crv": "P-384", "x": "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s", "y": "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc" }"#;
        
        let result = verify_jwt_event_data(mock_jwt, invalid_crv);
        assert!(result.is_err(), "Should fail with invalid curve");
        
        // Test malformed JSON
        let malformed_json = r#"{ "kty": "EC", "crv": "P-256" }"#;
        
        let result = verify_jwt_event_data(mock_jwt, malformed_json);
        assert!(result.is_err(), "Should fail with malformed JSON");
    }

    #[test]
    fn test_josekit_p256_support() {
        // Test josekit library for P-256 JWK parsing and ES256 JWT operations
        use josekit::jwk::Jwk;
        use josekit::jws::{JwsHeader, ES256};
        use josekit::jwt::{self, JwtPayload};
        use std::time::{SystemTime, Duration};
        
        // Sample P-256 keypair from the original issue
        let private_key_jwk = r#"{ "kty": "EC", "crv": "P-256", "d": "E-_KxQl0ow6_4Munq81OH_lg64R2vDpe3zq9XnI0AjE", "x": "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s", "y": "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc" }"#;
        let public_key_jwk = r#"{ "kty": "EC", "crv": "P-256", "x": "PHlAcVDiqi7130xWiMn5CEbOyg_Yo0qfOhabhPlDV_s", "y": "N5bqvbDjbsX2uo2_lzKrwPt7fySMweZVeFSAv99TEEc" }"#;
        
        // Test JWK parsing
        let private_jwk = Jwk::from_bytes(private_key_jwk.as_bytes())
            .expect("Failed to parse private JWK");
        let public_jwk = Jwk::from_bytes(public_key_jwk.as_bytes())
            .expect("Failed to parse public JWK");
            
        assert_eq!(private_jwk.key_type(), "EC");
        assert_eq!(public_jwk.key_type(), "EC");
        
        // Test JWT operations
        let mut payload = JwtPayload::new();
        payload.set_claim(
            "payload",
            Some(serde_json::json!({
                "device_id": "test-device",
                "timestamp": "2025-08-28T16:19:00Z",
                "event_type": "test"
            })),
        ).expect("Failed to set payload claim");
        
        // Set expiration using SystemTime instead of chrono::DateTime
        let expires_at = SystemTime::now() + Duration::from_secs(3600); // 1 hour
        payload.set_expires_at(&expires_at);
        
        // Create ES256 signer and create JWT
        let signer = ES256.signer_from_jwk(&private_jwk)
            .expect("Failed to create signer from JWK");
        let jwt = jwt::encode_with_signer(&payload, &JwsHeader::new(), &signer)
            .expect("Failed to create JWT");
        
        // Create ES256 verifier and verify JWT
        let verifier = ES256.verifier_from_jwk(&public_jwk)
            .expect("Failed to create verifier from JWK");
        let (verified_payload, _) = jwt::decode_with_verifier(&jwt, &verifier)
            .expect("Failed to verify JWT");
            
        // Verify payload content exists
        let payload_claim = verified_payload.claim("payload");
        assert!(payload_claim.is_some(), "Payload claim should exist");
        
        // Verify it's not null
        let claim_value = payload_claim.unwrap();
        assert!(!claim_value.is_null(), "Payload claim should not be null");
    }

    // NOTE: We investigated using the `jsonwebkey-convert` library as requested,
    // but it has compilation errors due to dependency version conflicts and
    // appears to be incompatible with our current dependency tree.
    // The custom implementation below works correctly for P-256 JWK conversion.
}
