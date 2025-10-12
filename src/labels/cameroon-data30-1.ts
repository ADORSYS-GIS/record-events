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

export const cameroonData: CameroonData = {
  "Others/Autre": {
    name: { en: "Others", fr: "Autre" },
    divisions: {
      "Others/Autre": {
        "Others/Autre": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            }
          ]
        }
      }
    }
  }
};