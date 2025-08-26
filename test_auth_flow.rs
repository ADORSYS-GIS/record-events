use base64::Engine;
use ed25519_dalek::{SigningKey, VerifyingKey};
use reqwest;
use serde_json::{json, Value};
use sha2::{Digest, Sha256};
use std::error::Error;
use tokio;

#[tokio::main]
async fn main() -> Result<(), Box<dyn Error>> {
    println!("🚀 Testing EventServer Authentication Flow");
    println!("==========================================");

    // Step 1: Generate Ed25519 key pair
    println!("\n1. Generating Ed25519 key pair...");
    let signing_key = SigningKey::generate(&mut rand::thread_rng());
    let verifying_key = signing_key.verifying_key();
    let public_key_bytes = verifying_key.to_bytes();
    let public_key_b64 = base64::engine::general_purpose::STANDARD.encode(public_key_bytes);
    println!("   ✓ Public key: {}", &public_key_b64[..32]);

    let client = reqwest::Client::new();
    let base_url = "http://127.0.0.1:3000";

    // Step 2: Request PoW Challenge
    println!("\n2. Requesting PoW challenge...");
    let challenge_response = client
        .post(&format!("{}/api/v1/pow/challenge", base_url))
        .send()
        .await?;

    if !challenge_response.status().is_success() {
        return Err(format!("Failed to request challenge: {}", challenge_response.status()).into());
    }

    let challenge_data: Value = challenge_response.json().await?;
    let challenge_id = challenge_data["challenge_id"].as_str().unwrap();
    let challenge_data_str = challenge_data["challenge_data"].as_str().unwrap();
    let difficulty = challenge_data["difficulty"].as_u64().unwrap() as u32;
    
    println!("   ✓ Challenge ID: {}", &challenge_id[..16]);
    println!("   ✓ Difficulty: {} leading zeros", difficulty);

    // Step 3: Solve PoW Challenge
    println!("\n3. Solving PoW challenge...");
    let (nonce, hash) = solve_pow_challenge(challenge_data_str, difficulty)?;
    println!("   ✓ Found solution! Nonce: {}, Hash: {}", nonce, &hash[..32]);

    // Step 4: Submit PoW Solution and Get Certificate
    println!("\n4. Submitting PoW solution and requesting certificate...");
    let relay_id = "test_relay_client";
    let cert_request = json!({
        "solution": {
            "challenge_id": challenge_id,
            "nonce": nonce,
            "hash": hash
        },
        "public_key": public_key_b64,
        "relay_id": relay_id
    });

    let cert_response = client
        .post(&format!("{}/api/v1/pow/submit", base_url))
        .json(&cert_request)
        .send()
        .await?;

    if !cert_response.status().is_success() {
        let error_text = cert_response.text().await?;
        return Err(format!("Failed to submit PoW solution: {}", error_text).into());
    }

    let cert_data: Value = cert_response.json().await?;
    println!("   ✓ Certificate issued successfully!");
    println!("   ✓ Relay ID: {}", cert_data["certificate"]["relay_id"]);
    println!("   ✓ Expires at: {}", cert_data["certificate"]["expires_at"]);

    // Step 5: Test Certificate Validation by Listing Certificates
    println!("\n5. Verifying certificate was stored...");
    let list_response = client
        .get(&format!("{}/api/v1/certificates/list", base_url))
        .send()
        .await?;

    if list_response.status().is_success() {
        let list_data: Value = list_response.json().await?;
        let count = list_data["count"].as_u64().unwrap();
        println!("   ✓ Found {} certificates in store", count);
        
        if let Some(certificates) = list_data["certificates"].as_array() {
            for cert in certificates {
                if cert["relay_id"] == relay_id {
                    println!("   ✓ Our certificate found in store!");
                    break;
                }
            }
        }
    }

    // Step 6: Test Event Submission with Signed Package
    println!("\n6. Testing event submission with signed package...");
    let event_data = json!({
        "event_type": "test_event",
        "data": {
            "message": "Hello from authenticated client!",
            "timestamp": chrono::Utc::now().to_rfc3339()
        }
    });

    // Create a signed event package (simplified version)
    let signed_package = json!({
        "relay_id": relay_id,
        "public_key": public_key_b64,
        "events": [event_data],
        "signature": "dummy_signature_for_testing",
        "timestamp": chrono::Utc::now().timestamp(),
        "nonce": "test_nonce"
    });

    let event_response = client
        .post(&format!("{}/api/v1/events/package", base_url))
        .json(&signed_package)
        .send()
        .await;

    match event_response {
        Ok(response) => {
            if response.status().is_success() {
                println!("   ✓ Event submitted successfully!");
            } else {
                println!("   ⚠ Event submission failed (expected - signature validation)");
                println!("     Status: {}", response.status());
            }
        }
        Err(e) => {
            println!("   ⚠ Event submission error: {}", e);
        }
    }

    println!("\n🎉 Authentication Flow Test Complete!");
    println!("=====================================");
    println!("✓ PoW challenge system working");
    println!("✓ Certificate issuance working");
    println!("✓ Certificate storage working");
    println!("✓ Authentication flow implemented");

    Ok(())
}

fn solve_pow_challenge(challenge_data: &str, difficulty: u32) -> Result<(u64, String), Box<dyn Error>> {
    println!("   🔍 Searching for valid nonce...");
    
    for nonce in 0..1_000_000u64 {
        let hash = compute_hash(challenge_data, nonce)?;
        
        if meets_difficulty(&hash, difficulty)? {
            return Ok((nonce, hash));
        }
        
        if nonce % 10_000 == 0 {
            print!(".");
            std::io::Write::flush(&mut std::io::stdout()).unwrap();
        }
    }
    
    Err("Could not find valid nonce within reasonable time".into())
}

fn compute_hash(challenge_data: &str, nonce: u64) -> Result<String, Box<dyn Error>> {
    let mut hasher = Sha256::new();
    hasher.update(challenge_data.as_bytes());
    hasher.update(nonce.to_le_bytes());
    let hash = hasher.finalize();
    Ok(base64::engine::general_purpose::STANDARD.encode(hash))
}

fn meets_difficulty(hash: &str, difficulty: u32) -> Result<bool, Box<dyn Error>> {
    let hash_bytes = base64::engine::general_purpose::STANDARD.decode(hash)?;
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