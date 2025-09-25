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
          helpText: "La région - The region",
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
          helpText: "Le département - The division",
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
          helpText: "L'arrondissement - The subdivision",
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
          helpText: "Le centre de vote - The polling station",
          category: "event_details",
        },
        {
          labelId: "5",
          name_en: "Polling Office",
          name_fr: "Bureau de Vote",
          type: "text",
          required: true,
          placeholder: "Bureau de Vote - Polling Office",
          helpText: "Le bureau de vote - The polling office",
          category: "event_details",
        },
        {
          labelId: "paul_biya",
          name_en: "Paul Biya",
          name_fr: "Paul Biya",
          type: "number",
          required: false,
          helpText: "Rassemblement Démocratique du Peuple Camerounais - RDPC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "issa_tchiroma",
          name_en: "Issa Tchiroma Bakary",
          name_fr: "Issa Tchiroma Bakary",
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
          name_en: "Cabral Libii Li Ngue Ngue",
          name_fr: "Cabral Libii Li Ngue Ngue",
          type: "number",
          required: false,
          helpText: "Parti Camerounais pour la Réconciliation Nationale - PCRN",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "joshua_osih",
          name_en: "Joshua Osih Nambangi",
          name_fr: "Joshua Osih Nambangi",
          type: "number",
          required: false,
          helpText: "Social Democratic Front - SDF",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "hermine_patricia",
          name_en: "Patricia Tomaïno epse Ndam Njoya",
          name_fr: "Patricia Tomaïno epse Ndam Njoya",
          type: "number",
          required: false,
          helpText: "Union Démocratique du Cameroun - UDC",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "pierre_kouemo",
          name_en: "Pierre Kwemo",
          name_fr: "Pierre Kwemo",
          type: "number",
          required: false,
          helpText: "Union des Mouvements Socialistes - UMS",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "serge_matomba",
          name_en: "Serge Espoir Matomba",
          name_fr: "Serge Espoir Matomba",
          type: "number",
          required: false,
          helpText: "Peuple Uni pour la Rénovation Sociale - PURS",
          category: "election_results",
          constraints: { min: 0 },
        },
        {
          labelId: "akere_muna",
          name_en: "Akere Muna Tabeng",
          name_fr: "Akere Muna Tabeng",
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
          helpText: "Mouvement Citoyen National Camerounais - MCNC",
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
