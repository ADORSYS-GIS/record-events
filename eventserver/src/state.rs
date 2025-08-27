use crate::crypto::PowService;
use crate::services::{EventService, StorageService};

/// Unified application state containing all services
/// This enables dependency injection across all controllers while maintaining stateless architecture
#[derive(Clone)]
pub struct AppState {
    pub event_service: EventService,
    pub storage_service: StorageService,
    pub pow_service: PowService,
}

impl AppState {
    /// Create a new AppState with initialized services
    pub fn new(
        event_service: EventService,
        storage_service: StorageService,
        pow_service: PowService,
    ) -> Self {
        Self {
            event_service,
            storage_service,
            pow_service,
        }
    }
}
