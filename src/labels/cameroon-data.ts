import i18n from "i18next";

export type LocationNames = {
  en: string;
  fr: string;
};

type PollingStationData = {
  station: string;
  voters: number;
};

type LocalityData = PollingStationData[];

type CouncilData = {
  [locality: string]: LocalityData;
};

type DivisionData = {
  [council: string]: CouncilData;
};

type RegionData = {
  name: LocationNames;
  divisions: {
    [division: string]: DivisionData;
  };
};

export type CameroonData = {
  [key: string]: RegionData;
};

let cameroonData: CameroonData = {};

export async function loadData() {
  if (Object.keys(cameroonData).length > 0) {
    return;
  }

  const modules = import.meta.glob("./cameroon-data*.ts");

  const allData: CameroonData[] = await Promise.all(
    Object.values(modules).map((importer) =>
      importer().then((mod: any) => mod.cameroonData),
    ),
  );

  cameroonData = allData.reduce((acc, data) => {
    return { ...acc, ...data };
  }, {});
}

export function getRegions(): LocationNames[] {
  return Object.values(cameroonData).map((region) => region.name);
}

export function getDivisions(region: string): string[] {
  if (!region || !cameroonData[region]) return [];
  return Object.keys(cameroonData[region].divisions);
}

export function getSubdivisions(region: string, division: string): string[] {
  if (
    !region ||
    !division ||
    !cameroonData[region] ||
    !cameroonData[region].divisions[division]
  )
    return [];
  return Object.keys(cameroonData[region].divisions[division]);
}

export function getLocalities(
  region: string,
  division: string,
  subdivision: string,
): string[] {
  if (
    !region ||
    !division ||
    !subdivision ||
    !cameroonData[region] ||
    !cameroonData[region].divisions[division] ||
    !cameroonData[region].divisions[division][subdivision]
  )
    return [];
  return Object.keys(cameroonData[region].divisions[division][subdivision]);
}

export function getStations(
  region: string,
  division: string,
  subdivision: string,
  locality: string,
): string[] {
  if (
    !region ||
    !division ||
    !subdivision ||
    !locality ||
    !cameroonData[region] ||
    !cameroonData[region].divisions[division] ||
    !cameroonData[region].divisions[division][subdivision] ||
    !cameroonData[region].divisions[division][subdivision][locality]
  )
    return [];
  return cameroonData[region].divisions[division][subdivision][locality].map(
    (stationData) => stationData.station,
  );
}

export function findRegionKey(regionValue: string): string | undefined {
  if (!regionValue) return undefined;
  return Object.keys(cameroonData).find((key) => {
    const region = cameroonData[key as keyof typeof cameroonData];
    return region.name.en === regionValue || region.name.fr === regionValue;
  });
}

export const electionCandidates = {
  candidates: [
    {
      political_party_french:
        "Rassemblement Démocratique du Peuple Camerounais (RDPC)",
      political_party_english: "Cameroon People's Democratic Movement (CPDM)",
      candidate: "Paul Biya",
    },
    {
      political_party_french: "Union Démocratique du Cameroun (UDC)",
      political_party_english: "Cameroon Democratic Union (UDC)",
      candidate: "Hermine Patricia Tomaïno Ndam Njoya",
    },
    {
      political_party_french: "Front pour le Salut National du Cameroun (FSNC)",
      political_party_english:
        "Front for the National Salvation of Cameroon (FSNC)",
      candidate: "Issa Tchiroma Bakary",
    },
    {
      political_party_french:
        "Union Nationale pour la Démocratie et le Progrès (UNDP)",
      political_party_english:
        "National Union for Democracy and Progress (UNDP)",
      candidate: "Bello Bouba Maigari",
    },
    {
      political_party_french: "Front Social Démocratique (SDF)",
      political_party_english: "Social Democratic Front (SDF)",
      candidate: "Joshua Osih",
    },
    {
      political_party_french:
        "Parti Camerounais pour la Réconciliation Nationale (PCRN)",
      political_party_english:
        "Cameroon Party for National Reconciliation (PCRN)",
      candidate: "Cabral Libii",
    },
    {
      political_party_french: "Univers",
      political_party_english: "Univers",
      candidate: "Akere Muna",
    },
    {
      political_party_french: "Peuple Uni pour la Rénovation Sociale (PURS)",
      political_party_english: "United People for Social Renovation (PURS)",
      candidate: "Serge Matomba",
    },
    {
      political_party_french: "Front Démocratique du Cameroun (FDC)",
      political_party_english: "Cameroon Democratic Front (FDC)",
      candidate: "Hiram Samuel Iyodi",
    },
    {
      political_party_french: "Mouvement Camerounais pour le Changement (MCMC)",
      political_party_english: "Cameroon Movement for Change (MCMC)",
      candidate: "Jacques Bouba Hagbe",
    },
    {
      political_party_french: "Alliance pour la Liberté (PAL)",
      political_party_english: "Alliance for Liberty (PAL)",
      candidate: "Ateki Parkston",
    },
    {
      political_party_french: "Union des Mouvements Socialistes (UMS)",
      political_party_english: "Union des Mouvements Socialistes (UMS)",
      candidate: "Pierre Kouemo",
    },
    {
      political_party_french: "Mouvement Progressiste",
      political_party_english: "Mouvement Progressiste",
      candidate: "Hilaire Macaire Nzipang",
    },
    {
      political_party_french: "Bulletin Null - Invalide",
      political_party_english: "Void Votes - Invalid",
      candidate: "invalid",
    },
  ],
};
