use base64::Engine;
use chrono::{DateTime, Duration, Utc};
use rand::Rng;
use serde::{Deserialize, Serialize};
use sha2::{Digest, Sha256};
use std::collections::HashMap;
use std::sync::{Arc, Mutex};

use crate::error::EventServerError;

/// Proof of Work challenge
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PowChallenge {
    pub challenge_id: String,
    pub challenge_data: String, // Base64 encoded random data
    pub difficulty: u32,        // Number of leading zeros required
    pub expires_at: DateTime<Utc>,
    pub created_at: DateTime<Utc>,
}

/// Proof of Work solution
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PowSolution {
    pub challenge_id: String,
    pub nonce: u64,
    pub hash: String, // Base64 encoded hash result
}

/// Proof of Work request for certificate issuance
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct PowCertificateRequest {
    pub solution: PowSolution,
    pub public_key: String, // Base64 encoded Ed25519 public key
    pub relay_id: String,
}

/// Proof of Work service for managing challenges and verification
#[derive(Debug, Clone)]
pub struct PowService {
    challenges: Arc<Mutex<HashMap<String, PowChallenge>>>,
    default_difficulty: u32,
    challenge_lifetime: Duration,
}

impl PowService {
    /// Create a new PoW service
    pub fn new() -> Self {
        Self {
            challenges: Arc::new(Mutex::new(HashMap::new())),
            default_difficulty: 4, // Require 4 leading zeros (moderate difficulty)
            challenge_lifetime: Duration::minutes(10), // Challenges expire in 10 minutes
        }
    }

    /// Create a new PoW service with custom parameters
    #[cfg(test)]
    pub fn with_params(difficulty: u32, lifetime_minutes: i64) -> Self {
        Self {
            challenges: Arc::new(Mutex::new(HashMap::new())),
            default_difficulty: difficulty,
            challenge_lifetime: Duration::minutes(lifetime_minutes),
        }
    }

    /// Generate a new PoW challenge
    pub fn generate_challenge(&self) -> Result<PowChallenge, EventServerError> {
        let challenge_id = self.generate_challenge_id();
        let challenge_data = self.generate_challenge_data();
        let now = Utc::now();

        let challenge = PowChallenge {
            challenge_id: challenge_id.clone(),
            challenge_data,
            difficulty: self.default_difficulty,
            expires_at: now + self.challenge_lifetime,
            created_at: now,
        };

        // Store the challenge
        {
            let mut challenges = self.challenges.lock().unwrap();
            challenges.insert(challenge_id, challenge.clone());
        }

        Ok(challenge)
    }

    /// Verify a PoW solution
    pub fn verify_solution(&self, solution: &PowSolution) -> Result<(), EventServerError> {
        // Get the challenge
        let challenge = {
            let challenges = self.challenges.lock().unwrap();
            challenges
                .get(&solution.challenge_id)
                .cloned()
                .ok_or_else(|| {
                    EventServerError::Validation(format!(
                        "Challenge not found: {}",
                        solution.challenge_id
                    ))
                })?
        };

        // Check if challenge is expired
        if Utc::now() > challenge.expires_at {
            // Remove expired challenge
            {
                let mut challenges = self.challenges.lock().unwrap();
                challenges.remove(&solution.challenge_id);
            }
            return Err(EventServerError::Validation(
                "Challenge has expired".to_string(),
            ));
        }

        // Verify the solution
        let computed_hash = self.compute_hash(&challenge.challenge_data, solution.nonce)?;

        // Check if the computed hash matches the provided hash
        if computed_hash != solution.hash {
            return Err(EventServerError::Validation(
                "Invalid hash in solution".to_string(),
            ));
        }

        // Check if the hash meets the difficulty requirement
        if !self.meets_difficulty(&computed_hash, challenge.difficulty)? {
            return Err(EventServerError::Validation(format!(
                "Hash does not meet difficulty requirement of {} leading zeros",
                challenge.difficulty
            )));
        }

        // Remove the used challenge to prevent reuse
        {
            let mut challenges = self.challenges.lock().unwrap();
            challenges.remove(&solution.challenge_id);
        }

        Ok(())
    }

    /// Generate a unique challenge ID
    fn generate_challenge_id(&self) -> String {
        let mut rng = rand::thread_rng();
        let random_bytes: [u8; 16] = rng.gen();
        base64::engine::general_purpose::STANDARD.encode(random_bytes)
    }

    /// Generate random challenge data
    fn generate_challenge_data(&self) -> String {
        let mut rng = rand::thread_rng();
        let random_bytes: [u8; 32] = rng.gen();
        base64::engine::general_purpose::STANDARD.encode(random_bytes)
    }

    /// Compute hash for challenge data and nonce
    fn compute_hash(&self, challenge_data: &str, nonce: u64) -> Result<String, EventServerError> {
        let mut hasher = Sha256::new();
        hasher.update(challenge_data.as_bytes());
        hasher.update(nonce.to_le_bytes());
        let hash = hasher.finalize();
        Ok(base64::engine::general_purpose::STANDARD.encode(hash))
    }

    /// Check if hash meets difficulty requirement (number of leading zeros)
    fn meets_difficulty(&self, hash: &str, difficulty: u32) -> Result<bool, EventServerError> {
        let hash_bytes = base64::engine::general_purpose::STANDARD
            .decode(hash)
            .map_err(|e| EventServerError::Validation(format!("Invalid base64 hash: {e}")))?;

        let required_zeros = difficulty as usize;
        let mut zero_count = 0;

        for byte in hash_bytes.iter() {
            if *byte == 0 {
                zero_count += 2; // Each zero byte contributes 2 hex zeros
            } else if *byte < 16 {
                zero_count += 1; // High nibble is zero
                break;
            } else {
                break;
            }
        }

        Ok(zero_count >= required_zeros)
    }

    /// Get the number of active challenges (for testing/monitoring)
    #[cfg(test)]
    pub fn active_challenge_count(&self) -> usize {
        let challenges = self.challenges.lock().unwrap();
        challenges.len()
    }

    /// Get challenge by ID (for testing)
    #[cfg(test)]
    pub fn get_challenge(&self, challenge_id: &str) -> Option<PowChallenge> {
        let challenges = self.challenges.lock().unwrap();
        challenges.get(challenge_id).cloned()
    }
}

impl Default for PowService {
    fn default() -> Self {
        Self::new()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_pow_service_creation() {
        let service = PowService::new();
        assert_eq!(service.default_difficulty, 4);
        assert_eq!(service.active_challenge_count(), 0);
    }

    #[test]
    fn test_challenge_generation() {
        let service = PowService::new();
        let challenge = service.generate_challenge().unwrap();

        assert!(!challenge.challenge_id.is_empty());
        assert!(!challenge.challenge_data.is_empty());
        assert_eq!(challenge.difficulty, 4);
        assert!(challenge.expires_at > challenge.created_at);
        assert_eq!(service.active_challenge_count(), 1);
    }

    #[test]
    fn test_hash_computation() {
        let service = PowService::new();
        let challenge_data = "test_data";
        let nonce = 12345u64;

        let hash1 = service.compute_hash(challenge_data, nonce).unwrap();
        let hash2 = service.compute_hash(challenge_data, nonce).unwrap();

        // Same input should produce same hash
        assert_eq!(hash1, hash2);

        // Different nonce should produce different hash
        let hash3 = service.compute_hash(challenge_data, nonce + 1).unwrap();
        assert_ne!(hash1, hash3);
    }

    #[test]
    fn test_difficulty_checking() {
        let service = PowService::new();

        // Create a hash with known leading zeros
        let zero_hash = base64::engine::general_purpose::STANDARD.encode([0u8; 32]);
        assert!(service.meets_difficulty(&zero_hash, 64).unwrap()); // All zeros

        // Create a hash with some leading zeros
        let mut partial_zero = [0u8; 32];
        partial_zero[0] = 0;
        partial_zero[1] = 0;
        partial_zero[2] = 15; // 0x0F
        let partial_hash = base64::engine::general_purpose::STANDARD.encode(partial_zero);
        assert!(service.meets_difficulty(&partial_hash, 5).unwrap()); // 5 leading zeros
        assert!(!service.meets_difficulty(&partial_hash, 6).unwrap()); // Not 6 leading zeros
    }

    #[test]
    fn test_solution_verification() {
        let service = PowService::with_params(1, 10); // Easy difficulty for testing
        let challenge = service.generate_challenge().unwrap();

        // Find a valid nonce (brute force for testing)
        let mut nonce = 0u64;
        let mut valid_hash = String::new();

        for i in 0..10000 {
            let hash = service.compute_hash(&challenge.challenge_data, i).unwrap();
            if service.meets_difficulty(&hash, 1).unwrap() {
                nonce = i;
                valid_hash = hash;
                break;
            }
        }

        assert!(!valid_hash.is_empty(), "Should find a valid solution");

        let solution = PowSolution {
            challenge_id: challenge.challenge_id.clone(),
            nonce,
            hash: valid_hash,
        };

        // Valid solution should pass
        assert!(service.verify_solution(&solution).is_ok());

        // Challenge should be removed after successful verification
        assert!(service.get_challenge(&challenge.challenge_id).is_none());
    }

    #[test]
    fn test_invalid_solution() {
        let service = PowService::new();
        let challenge = service.generate_challenge().unwrap();

        let invalid_solution = PowSolution {
            challenge_id: challenge.challenge_id,
            nonce: 0,
            hash: "invalid_hash".to_string(),
        };

        // Invalid solution should fail
        assert!(service.verify_solution(&invalid_solution).is_err());
    }

    #[test]
    fn test_expired_challenge() {
        let service = PowService::with_params(1, 0); // Expire immediately
        let challenge = service.generate_challenge().unwrap();

        // Wait a bit to ensure expiration (challenge expires immediately but we need time for clock to advance)
        std::thread::sleep(std::time::Duration::from_millis(1));

        let solution = PowSolution {
            challenge_id: challenge.challenge_id,
            nonce: 0,
            hash: "any_hash".to_string(),
        };

        let result = service.verify_solution(&solution);
        assert!(result.is_err());
        assert!(result.unwrap_err().to_string().contains("expired"));
    }
}
