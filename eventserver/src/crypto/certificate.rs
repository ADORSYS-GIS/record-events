use base64::Engine;
use chrono::{DateTime, Duration, Utc};
use rand::Rng;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use crate::error::EventServerError;

/// Device certificate issued after successful PoW verification
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct DeviceCertificate {
    pub certificate_id: String,
    pub relay_id: String,
    pub public_key: String, // Base64 encoded Ed25519 public key
    pub issued_at: DateTime<Utc>,
    pub expires_at: DateTime<Utc>,
    pub signature: String, // Server signature of the certificate
}

/// Certificate request after PoW verification
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CertificateRequest {
    pub relay_id: String,
    pub public_key: String, // Base64 encoded Ed25519 public key
}

/// Certificate response returned to client
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct CertificateResponse {
    pub certificate: DeviceCertificate,
    pub token: String, // JWT-like token for easy validation
}

/// Certificate validation result
#[derive(Debug, Clone)]
#[allow(unused)]
pub struct CertificateValidation {
    pub relay_id: String,
    pub public_key: String,
    pub expires_at: DateTime<Utc>,
}

/// Certificate service for managing device certificates
#[derive(Debug, Clone)]
pub struct CertificateService {
    certificates: Arc<Mutex<HashMap<String, DeviceCertificate>>>,
    certificate_lifetime: Duration,
    server_private_key: [u8; 32], // Server's private key for signing certificates
}

impl CertificateService {
    /// Create a new certificate service
    pub fn new() -> Self {
        // In production, this should be loaded from secure configuration
        let mut rng = rand::thread_rng();
        let server_private_key: [u8; 32] = rng.gen();

        Self {
            certificates: Arc::new(Mutex::new(HashMap::new())),
            certificate_lifetime: Duration::hours(24), // Certificates valid for 24 hours
            server_private_key,
        }
    }

    /// Create a new certificate service with custom parameters
    #[cfg(test)]
    pub fn with_params(lifetime_hours: i64, server_key: [u8; 32]) -> Self {
        Self {
            certificates: Arc::new(Mutex::new(HashMap::new())),
            certificate_lifetime: Duration::hours(lifetime_hours),
            server_private_key: server_key,
        }
    }

    /// Issue a new device certificate
    pub fn issue_certificate(
        &self,
        request: &CertificateRequest,
    ) -> Result<CertificateResponse, EventServerError> {
        // Clean up expired certificates first
        self.cleanup_expired_certificates();

        let certificate_id = self.generate_certificate_id();
        let now = Utc::now();
        let expires_at = now + self.certificate_lifetime;

        // Create certificate data for signing
        let cert_data = format!(
            "{}:{}:{}:{}",
            certificate_id,
            request.relay_id,
            request.public_key,
            expires_at.timestamp()
        );

        // Sign the certificate with server's private key
        let signature = self.sign_certificate_data(&cert_data)?;

        let certificate = DeviceCertificate {
            certificate_id: certificate_id.clone(),
            relay_id: request.relay_id.clone(),
            public_key: request.public_key.clone(),
            issued_at: now,
            expires_at,
            signature,
        };

        // Generate JWT-like token for easy validation
        let token = self.generate_certificate_token(&certificate)?;

        // Store the certificate
        {
            let mut certificates = self.certificates.lock().unwrap();
            certificates.insert(certificate_id, certificate.clone());
        }

        // Note: Cleanup of expired certificates is handled during both issuance and validation
        // to ensure optimal memory management and remove stale certificates proactively

        Ok(CertificateResponse { certificate, token })
    }

    /// Validate a certificate token
    pub fn validate_certificate(
        &self,
        token: &str,
    ) -> Result<CertificateValidation, EventServerError> {
        // Clean up expired certificates first
        self.cleanup_expired_certificates();

        // Parse the token to extract certificate ID
        let certificate_id = self.extract_certificate_id_from_token(token)?;

        // Get the certificate from storage
        let certificate = {
            let certificates = self.certificates.lock().unwrap();
            certificates
                .get(&certificate_id)
                .cloned()
                .ok_or_else(|| EventServerError::Validation("Certificate not found".to_string()))?
        };

        // Check if certificate is expired
        if Utc::now() > certificate.expires_at {
            // Remove expired certificate
            {
                let mut certificates = self.certificates.lock().unwrap();
                certificates.remove(&certificate_id);
            }
            return Err(EventServerError::Validation(
                "Certificate has expired".to_string(),
            ));
        }

        // Verify certificate signature
        let cert_data = format!(
            "{}:{}:{}:{}",
            certificate.certificate_id,
            certificate.relay_id,
            certificate.public_key,
            certificate.expires_at.timestamp()
        );

        if !self.verify_certificate_signature(&cert_data, &certificate.signature)? {
            return Err(EventServerError::Validation(
                "Invalid certificate signature".to_string(),
            ));
        }

        Ok(CertificateValidation {
            relay_id: certificate.relay_id,
            public_key: certificate.public_key,
            expires_at: certificate.expires_at,
        })
    }

    /// Generate a unique certificate ID
    fn generate_certificate_id(&self) -> String {
        let mut rng = rand::thread_rng();
        let random_bytes: [u8; 16] = rng.gen();
        base64::engine::general_purpose::STANDARD.encode(random_bytes)
    }

    /// Sign certificate data with server's private key
    fn sign_certificate_data(&self, data: &str) -> Result<String, EventServerError> {
        let mut hasher = Sha256::new();
        hasher.update(data.as_bytes());
        hasher.update(self.server_private_key);
        let hash = hasher.finalize();
        Ok(base64::engine::general_purpose::STANDARD.encode(hash))
    }

    /// Verify certificate signature
    fn verify_certificate_signature(
        &self,
        data: &str,
        signature: &str,
    ) -> Result<bool, EventServerError> {
        let expected_signature = self.sign_certificate_data(data)?;
        Ok(expected_signature == signature)
    }

    /// Generate a JWT-like token for the certificate
    fn generate_certificate_token(
        &self,
        certificate: &DeviceCertificate,
    ) -> Result<String, EventServerError> {
        // Simple token format: base64(certificate_id:expires_at:signature_hash)
        let token_data = format!(
            "{}:{}:{}",
            certificate.certificate_id,
            certificate.expires_at.timestamp(),
            &certificate.signature[..16] // First 16 chars of signature as verification
        );
        Ok(base64::engine::general_purpose::STANDARD.encode(token_data))
    }

    /// Extract certificate ID from token
    fn extract_certificate_id_from_token(&self, token: &str) -> Result<String, EventServerError> {
        let decoded = base64::engine::general_purpose::STANDARD
            .decode(token)
            .map_err(|e| EventServerError::Validation(format!("Invalid token format: {e}")))?;

        let token_str = String::from_utf8(decoded)
            .map_err(|e| EventServerError::Validation(format!("Invalid token encoding: {e}")))?;

        let parts: Vec<&str> = token_str.split(':').collect();
        if parts.len() != 3 {
            return Err(EventServerError::Validation(
                "Invalid token structure".to_string(),
            ));
        }

        Ok(parts[0].to_string())
    }

    /// Clean up expired certificates from memory
    fn cleanup_expired_certificates(&self) {
        let now = Utc::now();
        let mut certificates = self.certificates.lock().unwrap();
        certificates.retain(|_, cert| cert.expires_at > now);
    }

    /// Get the number of active certificates (for testing/monitoring)
    #[cfg(test)]
    pub fn active_certificate_count(&self) -> usize {
        let certificates = self.certificates.lock().unwrap();
        certificates.len()
    }
}

impl Default for CertificateService {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_certificate_service_creation() {
        let service = CertificateService::new();
        assert_eq!(service.active_certificate_count(), 0);
    }

    #[test]
    fn test_certificate_issuance() {
        let service = CertificateService::new();
        let request = CertificateRequest {
            relay_id: "test_relay".to_string(),
            public_key: "test_public_key".to_string(),
        };

        let response = service.issue_certificate(&request).unwrap();
        assert_eq!(response.certificate.relay_id, "test_relay");
        assert_eq!(response.certificate.public_key, "test_public_key");
        assert_eq!(service.active_certificate_count(), 1);
    }

    #[test]
    fn test_certificate_validation() {
        let service = CertificateService::new();
        let request = CertificateRequest {
            relay_id: "test_relay".to_string(),
            public_key: "test_public_key".to_string(),
        };

        let response = service.issue_certificate(&request).unwrap();
        let validation = service.validate_certificate(&response.token).unwrap();

        assert_eq!(validation.relay_id, "test_relay");
        assert_eq!(validation.public_key, "test_public_key");
    }

    #[test]
    fn test_expired_certificate() {
        let server_key: [u8; 32] = [0; 32];
        let service = CertificateService::with_params(-1, server_key); // Expired 1 hour ago
        let request = CertificateRequest {
            relay_id: "test_relay".to_string(),
            public_key: "test_public_key".to_string(),
        };

        let response = service.issue_certificate(&request).unwrap();

        // Certificate should be expired immediately
        let result = service.validate_certificate(&response.token);
        assert!(result.is_err());
    }
}
