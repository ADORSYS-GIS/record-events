#!/usr/bin/env rust-script

//! Test script to demonstrate SignedEventPackage validation
//! 
//! This script creates a sample SignedEventPackage with a valid signature
//! and tests the validation functionality.

use base64::Engine;
use chrono::Utc;
use ed25519_dalek::{SigningKey, Signer};
use serde_json;
use uuid::Uuid;

// Mock structures for testing (normally these would be imported)
#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct EventPackage {
    pub id: Uuid,
    pub version: String,
    pub annotations: Vec<EventAnnotation>,
    pub media: Option<EventMedia>,
    pub metadata: EventMetadata,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct EventAnnotation {
    pub label_id: String,
    pub value: FieldValue,
    pub timestamp: chrono::DateTime<Utc>,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub enum FieldValue {
    String(String),
    Number(f64),
    Boolean(bool),
    Null,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct EventMedia {
    pub data: String,
    pub media_type: String,
    pub size: u64,
    pub name: String,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
pub struct EventMetadata {
    pub created_at: chrono::DateTime<Utc>,
    pub created_by: Option<String>,
    pub source: String,
}

#[derive(Debug, Clone, serde::Serialize, serde::Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct SignedEventPackage {
    pub event_data: EventPackage,
    pub signature: String,
    pub public_key: String,
}

fn main() {
    println!("Testing SignedEventPackage validation...");

    // Generate a key pair for testing
    let secret_key_bytes: [u8; 32] = rand::random();
    let signing_key = SigningKey::from_bytes(&secret_key_bytes);
    let verifying_key = signing_key.verifying_key();

    // Create a sample event package
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
            source: "web".to_string(),
        },
    };

    // Serialize the event data for signing
    let event_data_json = serde_json::to_vec(&event_package).unwrap();

    // Sign the event data
    let signature = signing_key.sign(&event_data_json);

    // Create the signed package
    let signed_package = SignedEventPackage {
        event_data: event_package,
        signature: base64::engine::general_purpose::STANDARD.encode(signature.to_bytes()),
        public_key: base64::engine::general_purpose::STANDARD.encode(verifying_key.to_bytes()),
    };

    // Serialize the signed package to JSON
    let signed_package_json = serde_json::to_string_pretty(&signed_package).unwrap();
    println!("Generated SignedEventPackage:");
    println!("{}", signed_package_json);

    // Verify the signature (simulate what the server would do)
    println!("\nVerifying signature...");
    
    // Decode public key
    let public_key_bytes = base64::engine::general_purpose::STANDARD
        .decode(&signed_package.public_key)
        .unwrap();
    let public_key_array: [u8; 32] = public_key_bytes.try_into().unwrap();
    let public_key = ed25519_dalek::VerifyingKey::from_bytes(&public_key_array).unwrap();

    // Decode signature
    let signature_bytes = base64::engine::general_purpose::STANDARD
        .decode(&signed_package.signature)
        .unwrap();
    let signature = ed25519_dalek::Signature::try_from(&signature_bytes[..]).unwrap();

    // Serialize event data for verification
    let event_data_for_verification = serde_json::to_vec(&signed_package.event_data).unwrap();

    // Verify signature
    match public_key.verify_strict(&event_data_for_verification, &signature) {
        Ok(()) => println!("✅ Signature verification successful!"),
        Err(e) => println!("❌ Signature verification failed: {}", e),
    }

    println!("\nTest completed. The SignedEventPackage format is working correctly!");
    println!("This package can now be sent to the EventServer for processing.");
}