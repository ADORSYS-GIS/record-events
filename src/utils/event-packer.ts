import { v4 as uuidv4 } from "uuid";
import type {
  EventPackage,
  EventAnnotation,
  EventMedia,
  FieldValue,
  MediaType,
} from "../types/event";
import { isEventPackage } from "../types/event";
import type { Label } from "../labels/label-manager";

/**
 * Converts a File object to a base64 string
 */
async function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to read file as base64"));
      }
    };
    reader.onerror = () =>
      reject(new Error(reader.error?.message || "Failed to read file"));

    // Use readAsDataURL to get base64 data
    reader.readAsDataURL(file);
  });
}

/**
 * Creates an EventPackage object from form data, labels, and an optional media file
 * @throws {Error} If media processing fails or form data is invalid
 */
export async function createEventPackage(
  formData: Record<string, FieldValue>,
  labels: Label[],
  mediaFile: File | null,
  options: {
    createdBy?: string;
    source?: "web" | "mobile" | "api";
  } = {},
): Promise<EventPackage> {
  const now = new Date().toISOString();

  // Create annotations with proper typing and timestamps
  const annotations: EventAnnotation[] = labels.map((label) => {
    const value = formData[label.labelId] ?? null;

    // Validate value type
    if (
      value !== null &&
      typeof value !== "string" &&
      typeof value !== "number" &&
      typeof value !== "boolean"
    ) {
      throw new Error(
        `Invalid value type for ${label.labelId}: ${typeof value}`,
      );
    }

    return {
      labelId: label.labelId,
      value: value as FieldValue,
      timestamp: now,
    };
  });

  // separate annotation for the creation timestamp
  annotations.push({
    labelId: "createdAt",
    value: now,
    timestamp: now,
  });

  // Process media file if provided
  let media: EventMedia | undefined;
  if (mediaFile) {
    try {
      const base64Data = await fileToBase64(mediaFile);

      media = {
        type: mediaFile.type as MediaType, // Will be validated by isEventPackage
        data: base64Data,
        name: mediaFile.name,
        size: mediaFile.size,
        lastModified: mediaFile.lastModified,
      };
    } catch (error) {
      throw new Error(
        `Failed to process media file: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  const eventPackage: EventPackage = {
    id: uuidv4(),
    version: "1.0.0",
    annotations,
    media,
    metadata: {
      createdAt: now,
      createdBy: options.createdBy,
      source: options.source ?? "web",
    },
  };

  // Validate the final package
  if (!isEventPackage(eventPackage)) {
    throw new Error("Failed to create valid event package");
  }

  return eventPackage;
}

/**
 * Validates a single form field against its label constraints
 */
function validateField(value: FieldValue, label: Label): string | undefined {
  // Check required fields
  if (
    label.required &&
    (value === null || value === undefined || value === "")
  ) {
    return `${label.labelId} is required`;
  }

  // Skip further validation if value is empty
  if (value === null || value === undefined) {
    return undefined;
  }

  // Type-specific validation
  switch (label.type) {
    case "number":
      return validateNumberField(value, label);

    case "text":
      return validateTextField(value, label);

    // Add other type validations as needed
    default:
      return undefined;
  }
}

/**
 * Validates a number field against its constraints
 */
function validateNumberField(
  value: FieldValue,
  label: Label,
): string | undefined {
  if (typeof value !== "number") {
    return "Must be a number";
  }

  if (!label.constraints) {
    return undefined;
  }

  const { min, max } = label.constraints;

  if (min !== undefined && value < min) {
    return `Must be at least ${min}`;
  }

  if (max !== undefined && value > max) {
    return `Must be at most ${max}`;
  }

  return undefined;
}

/**
 * Validates a text field against its constraints
 */
function validateTextField(
  value: FieldValue,
  label: Label,
): string | undefined {
  if (typeof value !== "string") {
    return "Must be text";
  }

  const maxLength = label.constraints?.maxLength;
  if (maxLength !== undefined && value.length > maxLength) {
    return `Must be at most ${maxLength} characters`;
  }

  return undefined;
}

/**
 * Validates form data against label constraints
 */
export function validateFormData(
  formData: Record<string, FieldValue>,
  labels: Label[],
): { isValid: boolean; errors: Record<string, string> } {
  const errors: Record<string, string> = {};

  labels.forEach((label) => {
    const error = validateField(formData[label.labelId], label);
    if (error) {
      errors[label.labelId] = error;
    }
  });

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
