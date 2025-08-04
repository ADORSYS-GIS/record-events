// Supported field value types
export type FieldValue = string | number | boolean | null;

// Supported media types
export type MediaType = "image/jpeg" | "image/png" | "image/gif" | "video/mp4";

// Event annotation with strict typing
export interface EventAnnotation<T extends FieldValue = FieldValue> {
  labelId: string;
  value: T;
  timestamp: string; // ISO string
}

// Media data with proper typing
export interface EventMedia {
  type: MediaType;
  data: string; // Base64 encoded media data
  name: string;
  size: number;
  lastModified: number;
}

// Complete event package
export interface EventPackage {
  id: string; // Unique identifier
  version: string; // Data format version
  annotations: EventAnnotation[];
  media?: EventMedia;
  metadata: {
    createdAt: string; // ISO string
    createdBy?: string;
    source: "web" | "mobile" | "api";
  };
}

// Type guard for EventAnnotation
export function isEventAnnotation(value: unknown): value is EventAnnotation {
  return (
    typeof value === "object" &&
    value !== null &&
    "labelId" in value &&
    "value" in value &&
    "timestamp" in value
  );
}

// Type guard for EventPackage
export function isEventPackage(value: unknown): value is EventPackage {
  if (typeof value !== "object" || value === null) return false;

  const pkg = value as Partial<EventPackage>;

  return (
    typeof pkg.id === "string" &&
    typeof pkg.version === "string" &&
    Array.isArray(pkg.annotations) &&
    pkg.annotations.every(isEventAnnotation) &&
    (pkg.media === undefined ||
      (typeof pkg.media === "object" &&
        pkg.media !== null &&
        "type" in pkg.media &&
        "data" in pkg.media))
  );
}
