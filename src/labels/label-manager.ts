export interface LocalizedText {
  [key: string]: string;
  en: string;
  fr: string;
}

export interface Label {
  labelId: string;
  name_en: string;
  name_fr: string;
  type: "text" | "number" | "enum" | "boolean";
  required: boolean;
  placeholder?: string | LocalizedText;
  helpText?: string | LocalizedText;
  constraints?: {
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    min?: number;
    max?: number;
    step?: number;
  };
  options?: string[];
}

const LABELS_STORAGE_KEY = "event-app-labels";

// Mock function to fetch labels from a relay
export async function fetchLabels(): Promise<Label[]> {
  // In a real implementation, this would be a network request to a relay.
  return new Promise((resolve) => {
    setTimeout(() => {
      const labels: Label[] = [
        {
          labelId: "1",
          name_en: "Category",
          name_fr: "Catégorie",
          type: "enum",
          required: true,
          placeholder: "selectCategoryPlaceholder",
          helpText: "selectCategoryDescription",
          options: ["Music", "Sports", "Art"],
        },
        {
          labelId: "2",
          name_en: "Description",
          name_fr: "Description",
          type: "text",
          required: true,
          placeholder: "describeEventPlaceholder",
          helpText: "describeEventHelpText",
          constraints: { maxLength: 500 },
        },
        {
          labelId: "3",
          name_en: "Priority",
          name_fr: "Priorité",
          type: "enum",
          required: true,
          placeholder: "selectPriorityPlaceholder",
          helpText: "selectPriorityDescription",
          options: ["low", "medium", "high"],
        },
      ];
      resolve(labels);
    }, 1000);
  });
}

export function cacheLabels(labels: Label[]): void {
  localStorage.setItem(LABELS_STORAGE_KEY, JSON.stringify(labels));
}

export function getCachedLabels(): Label[] | null {
  const storedLabels = localStorage.getItem(LABELS_STORAGE_KEY);
  if (storedLabels) {
    return JSON.parse(storedLabels);
  }
  return null;
}

export async function initializeLabels(): Promise<Label[]> {
  let labels = getCachedLabels();
  if (!labels) {
    labels = await fetchLabels();
    cacheLabels(labels);
  }
  return labels;
}
