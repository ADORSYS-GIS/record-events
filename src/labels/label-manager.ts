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
          placeholder: "Région - Region",
          helpText: "Sélectionner la région - Select the region",
          options: Object.keys(cameroonData),
          category: "event_details",
        },
        {
          labelId: "2",
          name_en: "Division",
          name_fr: "Département",
          type: "enum",
          required: true,
          placeholder: "Département - Division",
          helpText: "Sélectionner le département - Select the division",
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
          placeholder: "Arrondissement - Subdivision",
          helpText: "Sélectionner l'arrondissement - Select the subdivision",
          options: [],
          dependsOn: "2",
          category: "event_details",
        },
        {
          labelId: "4",
          name_en: "Polling Station",
          name_fr: "Centre de Vote",
          type: "text",
          required: true,
          placeholder: "Centre de Vote - Polling Station",
          helpText: "Sélectionner le centre de vote - Select the polling station",
          category: "event_details",
        },
        {
          labelId: "5",
          name_en: "Polling Office",
          name_fr: "Bureau de Vote",
          type: "text",
          required: true,
          placeholder: "Bureau de Vote - Polling Office",
          helpText: "Sélectionner le bureau de vote - Select the polling office",
          category: "event_details",
        },
        {
          labelId: "paul_biya",
          name_en: "Biya Paul",
          name_fr: "Biya Paul",
          type: "number",
          required: false,
          helpText: "Rassemblement Démocratique du Peuple Camerounais - RDPC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "issa_tchiroma",
          name_en: "Issa Tchiroma",
          name_fr: "Issa Tchiroma",
          type: "number",
          required: false,
          helpText: "Front pour le Salut National Camerounais - FSNC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "bello_bouba",
          name_en: "Bello Bouba Maigari",
          name_fr: "Bello Bouba Maigari",
          type: "number",
          required: false,
          helpText: "Union Nationale pour la Démocratie et le Progres - UNDP",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "cabral_libii",
          name_en: "Libii Li Ngue Ngue Cabral",
          name_fr: "Libii Li Ngue Ngue Cabral",
          type: "number",
          required: false,
          helpText: "Parti Camerounais pour la Réconciliation Nationale - PCRN",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "joshua_osih",
          name_en: "Osih Joshua NAMBANGI",
          name_fr: "Osih Joshua NAMBANGI",
          type: "number",
          required: false,
          helpText: "Social Democratic Front - SDF",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hermine_patricia",
          name_en: "Tomaïno Hermine Patricia epse Ndam Njoya",
          name_fr: "Tomaïno Hermine Patricia epse Ndam Njoya",
          type: "number",
          required: false,
          helpText: "Union Démocratique du Cameroun - UDC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "pierre_kouemo",
          name_en: "Kwemo Pierre",
          name_fr: "Kwemo Pierre",
          type: "number",
          required: false,
          helpText: "Union des Mouvements Socialistes - UMS",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "serge_matomba",
          name_en: "Matomba Serge Espoir",
          name_fr: "Matomba Serge Espoir",
          type: "number",
          required: false,
          helpText: "Peuple Uni pour la Rénovation Sociale - PURS",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "akere_muna",
          name_en: "Muna Akere Tabeng",
          name_fr: "Muna Akere Tabeng",
          type: "number",
          required: false,
          helpText: "Univers",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hiram_samuel",
          name_en: "Iyodi Hiram Samuel",
          name_fr: "Iyodi Hiram Samuel",
          type: "number",
          required: false,
          helpText: "Front des Démocrates Camerounais - FDC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "ateki_parkston",
          name_en: "Ateki Seta Caxton",
          name_fr: "Ateki Seta Caxton",
          type: "number",
          required: false,
          helpText: "Parti de l'Alliance Libérale - PAL",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "jacques_bougha",
          name_en: "Bougha Hagbe Jacques",
          name_fr: "Bougha Hagbe Jacques",
          type: "number",
          required: false,
          helpText: "Mouvement Citoyen National Camerounais - MCMC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "votants_inscrits",
          name_en: "Registered Voters",
          name_fr: "Votants Inscrits",
          type: "number",
          required: false,
          helpText: "Votants Inscrits - Registered Voters",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "bulletins_nuls",
          name_en: "Void Ballots",
          name_fr: "Bulletins Nuls",
          type: "number",
          required: false,
          helpText: "Bulletins Nuls - Void Ballots",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "abstentions",
          name_en: "Abstentions",
          name_fr: "Abstentions",
          type: "number",
          required: false,
          helpText: "Abstentions",
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
