use std::collections::HashMap;
use chrono::Utc;
use sha2::{Digest, Sha256};
use uuid::Uuid;
use tracing::{info, warn, error};

use crate::types::event::{EventPackage, ProcessingResult, ValidationResult};
use crate::services::StorageService;
use crate::error::EventServerError;

/// Stateless event processing service
/// Each request is processed independently without maintaining any state
#[derive(Clone)]
pub struct EventService {
    storage: StorageService,
}

impl EventService {
    /// Create a new EventService instance
    pub fn new(storage: StorageService) -> Self {
        Self {
            storage,
        }
    }

    /// Process an event package from a relay
    /// This is completely stateless - each call is independent
    pub async fn process_event(
        &self,
        event_package: EventPackage,
        relay_id: String,
    ) -> Result<ProcessingResult, EventServerError> {
        info!(
            event_id = %event_package.id,
            relay_id = %relay_id,
            "Processing event package"
        );

        // Step 1: Validate the event package
        let validation = event_package.validate();
        if !validation.is_valid {
            warn!(
                event_id = %event_package.id,
                errors = ?validation.errors,
                "Event validation failed"
            );
            return Err(EventServerError::Validation(validation.errors.join(", ")));
        }

        // Step 2: Generate cryptographic hash
        let event_hash = self.generate_event_hash(&event_package)?;
        info!(
            event_id = %event_package.id,
            hash = %event_hash,
            "Generated event hash"
        );

        // Step 3: Store event in S3-compatible storage
        let storage_location = self.storage.store_event(&event_package, &event_hash).await?;
        info!(
            event_id = %event_package.id,
            location = %storage_location,
            "Event stored successfully"
        );

        // Step 4: Return processing result
        let result = ProcessingResult {
            event_id: event_package.id,
            hash: event_hash,
            storage_location,
            processed_at: Utc::now(),
        };

        info!(
            event_id = %event_package.id,
            "Event processing completed successfully"
        );

        Ok(result)
    }

    /// Verify if an event exists in storage
    /// Stateless verification - no local state required
    pub async fn verify_event_hash(&self, hash: &str) -> Result<bool, EventServerError> {
        info!(hash = %hash, "Verifying event hash in storage");

        let exists = self.storage.event_exists(hash).await?;
        
        if exists {
            info!(hash = %hash, "Hash verified successfully in storage");
        } else {
            info!(hash = %hash, "Hash not found in storage");
        }

        Ok(exists)
    }

    /// Generate a cryptographic hash for the event
    /// Uses SHA-256 for consistency and security
    fn generate_event_hash(&self, event_package: &EventPackage) -> Result<String, EventServerError> {
        let hash_input = event_package.create_hash_input();
        let hash_string = serde_json::to_string(&hash_input)
            .map_err(|e| EventServerError::EventProcessing(format!("Failed to serialize event for hashing: {}", e)))?;

        let mut hasher = Sha256::new();
        hasher.update(hash_string.as_bytes());
        let result = hasher.finalize();

        Ok(format!("{:x}", result))
    }

    /// Get event statistics (for monitoring purposes)
    /// This is stateless - queries external systems for current state
    pub async fn get_event_stats(&self) -> Result<EventStats, EventServerError> {
        // This would typically query storage for current stats
        // For now, return basic stats structure
        Ok(EventStats {
            total_events_processed: 0, // Would query from storage service
            total_storage_used: 0,     // Would query from storage service
        })
    }
}

/// Event statistics structure
#[derive(Debug, serde::Serialize)]
pub struct EventStats {
    pub total_events_processed: u64,
    pub total_storage_used: u64, // bytes
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::types::event::{EventAnnotation, EventMetadata, EventSource, FieldValue};

    #[tokio::test]
    async fn test_generate_event_hash() {
        // Create mock services (would use actual mocks in real tests)
        let storage = StorageService::new_mock();
        let service = EventService::new(storage);

        let event_package = EventPackage {
            id: Uuid::new_v4(),
            version: "1.0".to_string(),
            annotations: vec![EventAnnotation {
                label_id: "test_label".to_string(),
                value: FieldValue::String("test_value".to_string()),
                timestamp: Utc::now(),
            }],
            media: None,
            metadata: EventMetadata {
                created_at: Utc::now(),
                created_by: Some("test_user".to_string()),
                source: EventSource::Web,
            },
        };

        let hash = service.generate_event_hash(&event_package).unwrap();
        assert!(!hash.is_empty());
        assert_eq!(hash.len(), 64); // SHA-256 produces 64 hex characters
    }

    #[test]
    fn test_hash_consistency() {
        let storage = StorageService::new_mock();
        let service = EventService::new(storage);

        let event_package = EventPackage {
            id: Uuid::parse_str("550e8400-e29b-41d4-a716-446655440000").unwrap(),
            version: "1.0".to_string(),
            annotations: vec![EventAnnotation {
                label_id: "test_label".to_string(),
                value: FieldValue::String("test_value".to_string()),
                timestamp: chrono::DateTime::parse_from_rfc3339("2023-01-01T00:00:00Z").unwrap().with_timezone(&Utc),
            }],
            media: None,
            metadata: EventMetadata {
                created_at: chrono::DateTime::parse_from_rfc3339("2023-01-01T00:00:00Z").unwrap().with_timezone(&Utc),
                created_by: Some("test_user".to_string()),
                source: EventSource::Web,
            },
        };

        let hash1 = service.generate_event_hash(&event_package).unwrap();
        let hash2 = service.generate_event_hash(&event_package).unwrap();
        
        // Same input should produce same hash (deterministic)
        assert_eq!(hash1, hash2);
    }
}