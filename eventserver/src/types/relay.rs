use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};

/// Legacy relay authentication information (kept for compatibility)
#[derive(Debug, Clone, Serialize, Deserialize)]
pub struct RelayAuthInfo {
    pub id: String,
    pub public_key: String,
    pub ip_address: String,
    pub certificate: String,
    pub issued_at: DateTime<Utc>,
    pub expires_at: DateTime<Utc>,
}

/// Configuration for provisioning new relays
#[allow(dead_code)]
#[derive(Debug, Deserialize)]
pub struct RelayConfig {
    pub region: String,
    pub instance_type: String,
    pub network_config: NetworkConfig,
}

/// Network configuration for relay instances
#[derive(Debug, Deserialize)]
#[allow(dead_code)]
pub struct NetworkConfig {
    pub vpc_id: Option<String>,
    pub subnet_id: Option<String>,
    pub security_groups: Vec<String>,
}

/// Result of relay provisioning operation
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct RelayProvisionResult {
    pub relay_id: String,
    pub public_ip: String,
    pub certificate: String,
    pub provisioned_at: DateTime<Utc>,
}

/// Relay registration request from EventAdminApp
#[derive(Debug, Deserialize)]
#[allow(dead_code)]
#[serde(rename_all = "camelCase")]
pub struct RelayRegistrationRequest {
    pub network_address: String,
    pub public_key: String,
    pub region: String,
}

/// List of approved relays
#[derive(Debug, Serialize)]
pub struct ApprovedRelaysList {
    pub relays: Vec<ApprovedRelay>,
    pub updated_at: DateTime<Utc>,
}

/// Individual approved relay information
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ApprovedRelay {
    pub id: String,
    pub network_address: String,
    pub public_key: String,
    pub region: String,
    pub status: RelayStatus,
    pub last_seen: Option<DateTime<Utc>>,
}

/// Status of a relay
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "lowercase")]
pub enum RelayStatus {
    Active,
    Inactive,
    Suspended,
    Provisioning,
}

/// Request for provisioning a new relay instance
#[derive(Debug, Deserialize)]
#[allow(dead_code)]
#[serde(rename_all = "camelCase")]
pub struct ProvisionRequest {
    pub region: String,
    pub instance_type: String,
    pub relay_config: Option<RelayConfig>,
}

/// Result of relay provisioning operation
#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ProvisionResult {
    pub relay_info: RelayInfo,
    pub ssl_certificate: String,
    pub provisioned_at: DateTime<Utc>,
}

/// Extended relay information with operational details
#[derive(Debug, Clone, Serialize, Deserialize)]
#[serde(rename_all = "camelCase")]
pub struct RelayInfo {
    pub id: String,
    pub public_ip: String,
    pub region: String,
    pub instance_type: String,
    pub status: RelayStatus,
    pub created_at: DateTime<Utc>,
    pub last_health_check: Option<DateTime<Utc>>,
    pub version: String,
    pub endpoint_url: String,
}

impl RelayInfo {
    /// Check if the relay is currently active
    pub fn _is_active(&self) -> bool {
        matches!(self.status, RelayStatus::Active)
    }

    /// Check if the relay needs a health check
    pub fn _needs_health_check(&self) -> bool {
        match self.last_health_check {
            Some(last_check) => {
                let now = Utc::now();
                let five_minutes = chrono::Duration::minutes(5);
                now - last_check > five_minutes
            }
            None => true,
        }
    }
}
