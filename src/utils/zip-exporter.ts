/**
 * Exports an event package as a ZIP file containing its annotations and media.
 *
 * The resulting ZIP will include:
 * - `annotations.json`: A JSON file with the event's annotations.
 * - A media file (if present): A placeholder text file named according to the media type.
 *
 * @param eventPackage - The event package to export, including annotations and optional media.
 * @returns A Promise that resolves to a Blob representing the generated ZIP file.
 */
import JSZip from "jszip";
import type { EventPackage } from "../types/event";

/**
 * Extracts the file extension from a MIME type
 */
function getFileExtension(mimeType: string): string {
  const parts = mimeType.split("/");
  return parts.length > 1 ? parts[1] : "bin";
}

/**
 * Converts a base64 string to a Uint8Array
 */
function base64ToUint8Array(base64: string): Uint8Array {
  // Remove data URL prefix if present
  const base64Data = base64.includes("base64,") ? base64.split(",")[1] : base64;

  const binaryString = atob(base64Data);
  const bytes = new Uint8Array(binaryString.length);

  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes;
}

/**
 * Creates a ZIP archive containing the event package data
 * @throws {Error} If there's an error creating the ZIP file
 */
export async function exportEventPackageAsZip(
  eventPackage: EventPackage,
  options: {
    /** Include the media file in the ZIP (default: true) */
    includeMedia?: boolean;
    /** Include metadata in the ZIP (default: true) */
    includeMetadata?: boolean;
  } = {},
): Promise<Blob> {
  const { includeMedia = true, includeMetadata = true } = options;

  const zip = new JSZip();

  try {
    // Add metadata file
    if (includeMetadata) {
      const metadata = {
        id: eventPackage.id,
        version: eventPackage.version,
        createdAt: eventPackage.metadata.createdAt,
        createdBy: eventPackage.metadata.createdBy,
        source: eventPackage.metadata.source,
        annotationCount: eventPackage.annotations.length,
        hasMedia: !!eventPackage.media,
      };

      zip.file("metadata.json", JSON.stringify(metadata, null, 2));
    }

    // Add annotations as a JSON file
    zip.file(
      "annotations.json",
      JSON.stringify(eventPackage.annotations, null, 2),
    );

    // Add media file if available and requested
    if (includeMedia && eventPackage.media) {
      const media = eventPackage.media;
      try {
        const fileData = base64ToUint8Array(media.data);
        const extension = getFileExtension(media.type);
        const filename = `media.${extension}`;

        zip.file(filename, fileData, {
          binary: true,
          date: new Date(media.lastModified || Date.now()),
          unixPermissions: "644", // rw-r--r--
          comment: `Type: ${media.type}, Size: ${media.size} bytes`,
        });

        // Add media metadata
        if (includeMetadata) {
          const mediaMetadata = {
            originalName: media.name,
            type: media.type,
            size: media.size,
            lastModified: media.lastModified
              ? new Date(media.lastModified).toISOString()
              : null,
          };

          zip.file(
            "media_metadata.json",
            JSON.stringify(mediaMetadata, null, 2),
          );
        }
      } catch (error) {
        console.error("Failed to process media file:", error);
        // Continue without failing, just log the error
      }
    }

    // Generate the ZIP file
    const content = await zip.generateAsync({
      type: "blob",
      compression: "DEFLATE",
      compressionOptions: {
        level: 6, // Medium compression (1-9, where 9 is maximum)
      },
      platform: "UNIX",
      comment: `Event Package Export - ${new Date().toISOString()}`,
    });

    return content;
  } catch (error) {
    console.error("Error creating ZIP file:", error);
    throw new Error(
      `Failed to create export package: ${error instanceof Error ? error.message : "Unknown error"}`,
    );
  }
}

/**
 * Triggers a download of the event package as a ZIP file
 */
export async function downloadEventPackage(
  eventPackage: EventPackage,
  filename: string = `event-${eventPackage.id}.zip`,
): Promise<void> {
  try {
    const zipBlob = await exportEventPackageAsZip(eventPackage);
    const url = URL.createObjectURL(zipBlob);

    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();

    // Cleanup
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  } catch (error) {
    console.error("Error downloading event package:", error);
    throw error; // Re-throw to allow calling code to handle the error
  }
}
