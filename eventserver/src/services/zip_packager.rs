use std::io::{Cursor, Write};
use zip::{ZipWriter, write::FileOptions, CompressionMethod};
use base64::{Engine as _, engine::general_purpose};
use chrono::Utc;
use tracing::{info, warn, error};

use crate::types::event::{EventPackage, EventMedia};
use crate::error::EventServerError;

/// Service for creating ZIP packages from EventPackage objects
pub struct ZipPackager;

impl ZipPackager {
    /// Creates a ZIP archive containing the event package data
    /// Replicates the frontend zip-exporter.ts functionality
    pub async fn create_zip_from_event_package(
        event_package: &EventPackage,
        options: ZipPackageOptions,
    ) -> Result<Vec<u8>, EventServerError> {
        let mut zip_buffer = Vec::new();
        let mut zip = {
            let cursor = Cursor::new(&mut zip_buffer);
            ZipWriter::new(cursor)
        };

        let file_options = FileOptions::default()
            .compression_method(CompressionMethod::Deflated)
            .unix_permissions(0o644);

        // Add metadata file if requested
        if options.include_metadata {
            let metadata = serde_json::json!({
                "id": event_package.id,
                "version": event_package.version,
                "createdAt": event_package.metadata.created_at,
                "createdBy": event_package.metadata.created_by,
                "source": event_package.metadata.source,
                "annotationCount": event_package.annotations.len(),
                "hasMedia": event_package.media.is_some()
            });

            zip.start_file("metadata.json", file_options)
                .map_err(|e| EventServerError::Storage(format!("Failed to create metadata.json: {}", e)))?;
            
            zip.write_all(serde_json::to_string_pretty(&metadata)
                .map_err(|e| EventServerError::Storage(format!("Failed to serialize metadata: {}", e)))?
                .as_bytes())
                .map_err(|e| EventServerError::Storage(format!("Failed to write metadata: {}", e)))?;
        }

        // Add annotations as JSON file
        zip.start_file("annotations.json", file_options)
            .map_err(|e| EventServerError::Storage(format!("Failed to create annotations.json: {}", e)))?;
        
        zip.write_all(serde_json::to_string_pretty(&event_package.annotations)
            .map_err(|e| EventServerError::Storage(format!("Failed to serialize annotations: {}", e)))?
            .as_bytes())
            .map_err(|e| EventServerError::Storage(format!("Failed to write annotations: {}", e)))?;

        // Add media file if available and requested
        if options.include_media {
            if let Some(media) = &event_package.media {
                match Self::add_media_to_zip(&mut zip, media, file_options, options.include_metadata).await {
                    Ok(_) => info!("Successfully added media to ZIP"),
                    Err(e) => {
                        warn!("Failed to add media to ZIP: {}", e);
                        // Continue without failing, just log the error (matches frontend behavior)
                    }
                }
            }
        }

        // Finalize the ZIP file and get the buffer back
        let cursor = zip.finish()
            .map_err(|e| EventServerError::Storage(format!("Failed to finalize ZIP: {}", e)))?;
        
        let zip_buffer = cursor.into_inner().clone();
        let zip_size = zip_buffer.len();
        
        info!(
            event_id = %event_package.id,
            zip_size = zip_size,
            "Successfully created ZIP package"
        );

        Ok(zip_buffer)
    }

    /// Add media file to the ZIP archive
    async fn add_media_to_zip(
        zip: &mut ZipWriter<Cursor<&mut Vec<u8>>>,
        media: &EventMedia,
        file_options: FileOptions,
        include_metadata: bool,
    ) -> Result<(), EventServerError> {
        // Decode base64 media data
        let media_data = Self::decode_base64_media(&media.data)?;
        
        // Get file extension from media type
        let extension = Self::get_file_extension(&media.media_type.as_str());
        let filename = format!("media.{}", extension);

        // Add the media file
        zip.start_file(&filename, file_options)
            .map_err(|e| EventServerError::Storage(format!("Failed to create media file: {}", e)))?;
        
        zip.write_all(&media_data)
            .map_err(|e| EventServerError::Storage(format!("Failed to write media data: {}", e)))?;

        // Add media metadata if requested
        if include_metadata {
            let media_metadata = serde_json::json!({
                "originalName": media.name,
                "type": media.media_type.as_str(),
                "size": media.size,
                "lastModified": chrono::DateTime::from_timestamp_millis(media.last_modified as i64)
                    .unwrap_or_else(|| Utc::now())
                    .to_rfc3339()
            });

            zip.start_file("media_metadata.json", file_options)
                .map_err(|e| EventServerError::Storage(format!("Failed to create media_metadata.json: {}", e)))?;
            
            zip.write_all(serde_json::to_string_pretty(&media_metadata)
                .map_err(|e| EventServerError::Storage(format!("Failed to serialize media metadata: {}", e)))?
                .as_bytes())
                .map_err(|e| EventServerError::Storage(format!("Failed to write media metadata: {}", e)))?;
        }

        Ok(())
    }

    /// Decode base64 media data, handling data URL prefixes
    fn decode_base64_media(base64_data: &str) -> Result<Vec<u8>, EventServerError> {
        // Remove data URL prefix if present (e.g., "data:image/jpeg;base64,")
        let clean_base64 = if base64_data.contains("base64,") {
            base64_data.split("base64,").nth(1).unwrap_or(base64_data)
        } else {
            base64_data
        };

        general_purpose::STANDARD
            .decode(clean_base64)
            .map_err(|e| EventServerError::Storage(format!("Failed to decode base64 media: {}", e)))
    }

    /// Extract file extension from MIME type
    fn get_file_extension(mime_type: &str) -> &str {
        match mime_type {
            "image/jpeg" => "jpg",
            "image/png" => "png",
            "image/gif" => "gif",
            "video/mp4" => "mp4",
            _ => {
                // Extract from MIME type (e.g., "image/webp" -> "webp")
                mime_type.split('/').nth(1).unwrap_or("bin")
            }
        }
    }
}

/// Options for ZIP package creation
#[derive(Debug, Clone)]
pub struct ZipPackageOptions {
    /// Include metadata file in the ZIP (default: true)
    pub include_metadata: bool,
    /// Include media file in the ZIP (default: true)
    pub include_media: bool,
}

impl Default for ZipPackageOptions {
    fn default() -> Self {
        Self {
            include_metadata: true,
            include_media: true,
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    use crate::types::event::{EventAnnotation, EventMetadata, EventSource, FieldValue, MediaType};
    use uuid::Uuid;

    #[tokio::test]
    async fn test_create_zip_from_event_package() {
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

        let options = ZipPackageOptions::default();
        let zip_data = ZipPackager::create_zip_from_event_package(&event_package, options).await;
        
        assert!(zip_data.is_ok());
        let zip_bytes = zip_data.unwrap();
        assert!(!zip_bytes.is_empty());
    }

    #[test]
    fn test_get_file_extension() {
        assert_eq!(ZipPackager::get_file_extension("image/jpeg"), "jpg");
        assert_eq!(ZipPackager::get_file_extension("image/png"), "png");
        assert_eq!(ZipPackager::get_file_extension("video/mp4"), "mp4");
        assert_eq!(ZipPackager::get_file_extension("image/webp"), "webp");
        assert_eq!(ZipPackager::get_file_extension("unknown"), "bin");
    }

    #[test]
    fn test_decode_base64_media() {
        // Test with data URL prefix
        let data_url = "data:image/jpeg;base64,SGVsbG8gV29ybGQ=";
        let result = ZipPackager::decode_base64_media(data_url);
        assert!(result.is_ok());
        assert_eq!(result.unwrap(), b"Hello World");

        // Test without prefix
        let plain_base64 = "SGVsbG8gV29ybGQ=";
        let result = ZipPackager::decode_base64_media(plain_base64);
        assert!(result.is_ok());
        assert_eq!(result.unwrap(), b"Hello World");
    }
}