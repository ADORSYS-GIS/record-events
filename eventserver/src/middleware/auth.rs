use axum::{
    extract::{Request, State},
    http::StatusCode,
    middleware::Next,
    response::Response,
};
use tracing::{info, warn};

use crate::middleware::crypto::extract_validated_relay_id;
use crate::state::AppState;


/// Authorization middleware that checks if the authenticated relay
/// has permission to perform the requested operation
pub async fn authorization_middleware(
    State(_state): State<AppState>,
    request: Request,
    next: Next,
) -> Result<Response, StatusCode> {
    let path = request.uri().path();
    let method = request.method();
    
    // Extract validated relay ID from headers (set by crypto middleware)
    let relay_id = extract_validated_relay_id(request.headers());
    
    if let Some(relay_id) = relay_id {
        // Check if relay has permission for this operation
        if has_permission(&relay_id, method.as_str(), path) {
            info!(
                relay_id = %relay_id,
                method = %method,
                path = %path,
                "Authorization granted"
            );
            Ok(next.run(request).await)
        } else {
            warn!(
                relay_id = %relay_id,
                method = %method,
                path = %path,
                "Authorization denied - insufficient permissions"
            );
            Err(StatusCode::FORBIDDEN)
        }
    } else {
        warn!(
            method = %method,
            path = %path,
            "Authorization failed - no validated relay ID found"
        );
        Err(StatusCode::UNAUTHORIZED)
    }
}

/// Check if a relay has permission to perform an operation
fn has_permission(relay_id: &str, method: &str, path: &str) -> bool {
    // For now, implement basic permission logic
    // In a real system, this would check against a permission database
    
    match (method, path) {
        // All authenticated relays can submit events
        ("POST", path) if path.starts_with("/api/v1/events") => true,
        
        // All authenticated relays can verify hashes
        ("GET", path) if path.contains("/verify") => true,
        
        // Only specific relays can access admin endpoints
        ("GET" | "POST" | "PUT" | "DELETE", path) if path.starts_with("/api/v1/admin") => {
            is_admin_relay(relay_id)
        }
        
        // Default deny
        _ => false,
    }
}

/// Check if a relay has admin privileges
fn is_admin_relay(relay_id: &str) -> bool {
    // In a real system, this would check against a database or configuration
    // For now, use a simple list
    let admin_relays = ["admin_relay_1", "admin_relay_2"];
    admin_relays.contains(&relay_id)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_has_permission() {
        let relay_id = "test_relay";
        
        // Event submission should be allowed
        assert!(has_permission(relay_id, "POST", "/api/v1/events"));
        assert!(has_permission(relay_id, "POST", "/api/v1/events/package"));
        
        // Hash verification should be allowed
        assert!(has_permission(relay_id, "GET", "/api/v1/events/hash123/verify"));
        
        // Admin endpoints should be denied for regular relays
        assert!(!has_permission(relay_id, "GET", "/api/v1/admin/relays"));
        
        // Unknown endpoints should be denied
        assert!(!has_permission(relay_id, "DELETE", "/api/v1/unknown"));
    }

    #[test]
    fn test_is_admin_relay() {
        assert!(is_admin_relay("admin_relay_1"));
        assert!(is_admin_relay("admin_relay_2"));
        assert!(!is_admin_relay("regular_relay"));
    }

}
