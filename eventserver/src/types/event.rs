use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use uuid::Uuid;

/// Supported field value types - matches TypeScript FieldValue
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(untagged)]
pub enum FieldValue {
    String(String),
    Number(f64),
    Boolean(bool),
    Null,
}

/// Supported media types - matches TypeScript MediaType
#[derive(Debug, Clone, Serialize, Deserialize)]
pub enum MediaType {
    #[serde(rename = "image/jpeg")]
    ImageJpeg,
    #[serde(rename = "image/png")]
    ImagePng,
    #[serde(rename = "image/gif")]
    ImageGif,
    #[serde(rename = "video/mp4")]
    VideoMp4,
}

impl MediaType {
    pub fn as_str(&self) -> &'static str {
        match self {
            MediaType::ImageJpeg => "image/jpeg",
            MediaType::ImagePng => "image/png",
            MediaType::ImageGif => "image/gif",
            MediaType::VideoMp4 => "video/mp4",
        }
    }
}

/// Event annotation with strict typing - matches TypeScript EventAnnotation
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventAnnotation {
    pub label_id: String,
    pub value: FieldValue,
    pub timestamp: DateTime<Utc>,
}

/// Media data with proper typing - matches TypeScript EventMedia
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventMedia {
    #[serde(rename = "type")]
    pub media_type: MediaType,
    pub data: String, // Base64 encoded media data
    pub name: String,
    pub size: u64,
    pub last_modified: u64, // Unix timestamp
}

/// Event metadata - matches TypeScript structure
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventMetadata {
    pub created_at: DateTime<Utc>,
    pub created_by: Option<String>,
    pub source: EventSource,
}

/// Event source types - matches TypeScript
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum EventSource {
    Web,
    Mobile,
}

/// Complete event package - matches TypeScript EventPackage
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct EventPackage {
    pub id: Uuid,
    pub version: String,
    pub annotations: Vec<EventAnnotation>,
    pub media: Option<EventMedia>,
    pub metadata: EventMetadata,
}

/// Signed event package with PoW-based authentication
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SignedEventPackage {
    pub event_data: EventPackage,
    pub signature: String,                        // Base64 encoded signature
    pub public_key: String,                       // Base64 encoded Ed25519 public key
    pub pow_solution: crate::crypto::PowSolution, // PoW solution for authentication
    pub relay_id: String,                         // Relay identifier
}

/// Simple event payload from frontend - file upload notification
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct EventPayload {
    pub filename: String,
    pub content_type: String,
}

/// Processing result returned after event processing
#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct ProcessingResult {
    pub event_id: Uuid,
    pub hash: String,
    pub storage_location: String,
    pub processed_at: DateTime<Utc>,
}

/// Validation result for event packages
#[derive(Debug)]
pub struct ValidationResult {
    pub is_valid: bool,
    pub errors: Vec<String>,
}

impl EventPackage {
    /// Validates the event package structure
    pub fn validate(&self) -> ValidationResult {
        let mut errors = Vec::new();

        if self.annotations.is_empty() {
            errors.push("Event package must contain at least one annotation".to_string());
        }

        if self.version.is_empty() {
            errors.push("Event package must have a version".to_string());
        }

        // Validate annotations
        for (index, annotation) in self.annotations.iter().enumerate() {
            if annotation.label_id.is_empty() {
                errors.push(format!("Annotation {index} must have a label_id"));
            }
        }

        // Validate media if present
        if let Some(media) = &self.media {
            if media.data.is_empty() {
                errors.push("Media data cannot be empty".to_string());
            }
            if media.name.is_empty() {
                errors.push("Media name cannot be empty".to_string());
            }
            if media.size == 0 {
                errors.push("Media size must be greater than 0".to_string());
            }
        }

        ValidationResult {
            is_valid: errors.is_empty(),
            errors,
        }
    }

    /// Creates a hash input string for cryptographic operations
    pub fn create_hash_input(&self) -> serde_json::Value {
        serde_json::json!({
            "id": self.id,
            "annotations": self.annotations,
            "media": self.media.as_ref().map(|m| serde_json::json!({
                "type": m.media_type.as_str(),
                "size": m.size,
                "name": m.name
            })),
            "createdAt": self.metadata.created_at
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_event_package_validation() {
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

        let validation = event_package.validate();
        assert!(validation.is_valid);
        assert!(validation.errors.is_empty());
    }

    #[test]
    fn test_invalid_event_package() {
        let event_package = EventPackage {
            id: Uuid::new_v4(),
            version: "".to_string(), // Invalid: empty version
            annotations: vec![],     // Invalid: no annotations
            media: None,
            metadata: EventMetadata {
                created_at: Utc::now(),
                created_by: None,
                source: EventSource::Web,
            },
        };

        let validation = event_package.validate();
        assert!(!validation.is_valid);
        assert_eq!(validation.errors.len(), 2);
    }

    #[test]
    fn test_event_payload_deserialization() {
        // Test with the sample payload from the issue description
        let json_payload = r#"{"filename":"event-6d3eb395-496a-453a-a15d-f35798925baa.zip","contentType":"application/zip"}"#;

        let payload: EventPayload =
            serde_json::from_str(json_payload).expect("Failed to deserialize EventPayload");

        assert_eq!(
            payload.filename,
            "event-6d3eb395-496a-453a-a15d-f35798925baa.zip"
        );
        assert_eq!(payload.content_type, "application/zip");
    }

    #[test]
    fn test_event_payload_serialization() {
        let payload = EventPayload {
            filename: "test-file.zip".to_string(),
            content_type: "application/zip".to_string(),
        };

        let json = serde_json::to_string(&payload).expect("Failed to serialize EventPayload");
        let expected = r#"{"filename":"test-file.zip","contentType":"application/zip"}"#;

        assert_eq!(json, expected);
    }
}
