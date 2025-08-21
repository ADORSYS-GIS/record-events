use crate::services::{EventService, StorageService};

/// Unified application state containing all services
/// This enables dependency injection across all controllers while maintaining stateless architecture
#[derive(Clone)]
pub struct AppState {
    pub event_service: EventService,
    pub storage_service: StorageService,
}

impl AppState {
    /// Create a new AppState with initialized services
    pub fn new(event_service: EventService, storage_service: StorageService) -> Self {
        Self {
            event_service,
            storage_service,
        }
    }
}
