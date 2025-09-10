import { cameroonData } from "./cameroon-data";

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
  dependsOn?: string;
  showIf?: (formData: Record<string, any>) => boolean;
  category?: string;
}

const LABELS_STORAGE_KEY = "event-app-labels";

// Mock function to fetch labels from a relay
export async function fetchLabels(): Promise<Label[]> {
  console.log("Fetching labels...");
  // In a real implementation, this would be a network request to a relay.
  return new Promise((resolve) => {
    setTimeout(() => {
      const labels: Label[] = [
        {
          labelId: "1",
          name_en: "Region",
          name_fr: "Région",
          type: "enum",
          required: true,
          placeholder: "selectRegionPlaceholder",
          helpText: "selectRegionDescription",
          options: Object.keys(cameroonData),
          category: "event_details",
        },
        {
          labelId: "2",
          name_en: "Division",
          name_fr: "Département",
          type: "enum",
          required: true,
          placeholder: "selectDivisionPlaceholder",
          helpText: "selectDivisionDescription",
          options: [],
          dependsOn: "1",
          category: "event_details",
        },
        {
          labelId: "3",
          name_en: "Subdivision",
          name_fr: "Arrondissement",
          type: "enum",
          required: true,
          placeholder: "selectSubdivisionPlaceholder",
          helpText: "selectSubdivisionDescription",
          options: [],
          dependsOn: "2",
          category: "event_details",
        },
        {
          labelId: "4",
          name_en: "Polling Station",
          name_fr: "Bureau de vote",
          type: "enum",
          required: true,
          placeholder: "selectPollingStationPlaceholder",
          helpText: "selectPollingStationDescription",
          options: [],
          dependsOn: "3",
          category: "event_details",
        },
        {
          labelId: "5",
          name_en: "Other Polling Station",
          name_fr: "Autre bureau de vote",
          type: "text",
          required: true,
          placeholder: "otherPollingStationPlaceholder",
          helpText: "otherPollingStationHelpText",
          showIf: (formData) => formData["4"] === "Other",
          category: "event_details",
        },
        {
          labelId: "paul_biya",
          name_en: "Paul Biya",
          name_fr: "Paul Biya",
          type: "number",
          required: false,
          helpText: "Cameroon People's Democratic Movement - CPDM",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hermine_patricia",
          name_en: "Hermine Patricia Tomaïno Ndam Njoya",
          name_fr: "Hermine Patricia Tomaïno Ndam Njoya",
          type: "number",
          required: false,
          helpText: "Cameroon Democratic Union - UDC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "issa_tchiroma",
          name_en: "Issa Tchiroma Bakary",
          name_fr: "Issa Tchiroma Bakary",
          type: "number",
          required: false,
          helpText: "Front for the National Salvation of Cameroon - FSNC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "bello_bouba",
          name_en: "Bello Bouba Maigari",
          name_fr: "Bello Bouba Maigari",
          type: "number",
          required: false,
          helpText: "National Union for Democracy and Progress - UNDP",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "joshua_osih",
          name_en: "Joshua Osih",
          name_fr: "Joshua Osih",
          type: "number",
          required: false,
          helpText: "Social Democratic Front - SDF",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "cabral_libii",
          name_en: "Cabral Libii",
          name_fr: "Cabral Libii",
          type: "number",
          required: false,
          helpText: "Cameroon Party for National Reconciliation - PCRN",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "akere_muna",
          name_en: "Akere Muna",
          name_fr: "Akere Muna",
          type: "number",
          required: false,
          helpText: "Univers",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "serge_matomba",
          name_en: "Serge Matomba",
          name_fr: "Serge Matomba",
          type: "number",
          required: false,
          helpText: "United People for Social Renovation - PURS",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hilaire_macaire",
          name_en: "Hilaire Macaire Nzipang",
          name_fr: "Hilaire Macaire Nzipang",
          type: "number",
          required: false,
          helpText: "Progressive Movement - MP",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hiram_samuel",
          name_en: "Hiram Samuel Iyodi",
          name_fr: "Hiram Samuel Iyodi",
          type: "number",
          required: false,
          helpText: "Cameroon Democratic Front - FDC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "jacques_bouba",
          name_en: "Jacques Bouba Hagbe",
          name_fr: "Jacques Bouba Hagbe",
          type: "number",
          required: false,
          helpText: "Cameroon Movement for Change - MCMC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "ateki_parkston",
          name_en: "Ateki Parkston",
          name_fr: "Ateki Parkston",
          type: "number",
          required: false,
          helpText: "Alliance for Liberty - PAL",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "unknown_ums",
          name_en: "Pierre Kouemo (UMS)",
          name_fr: "Pierre Kouemo (UMS)",
          type: "number",
          required: false,
          helpText: "Union des Mouvements Socialistes - UMS",
          category: "election_results",
          constraints: { min: 0 },
        },
      ];
      console.log("Labels received:", labels);
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
