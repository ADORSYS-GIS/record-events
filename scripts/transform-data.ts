import * as fs from 'fs';
import * as path from 'path';
import { cameroonData, CameroonData, LocationNames } from '../src/labels/cameroon-data20';

// Define the new types
type NewPollingStationData = {
  office: string;
  voters: number;
};

type NewCouncilData = {
  [locality: string]: NewPollingStationData[];
};

type NewDivisionData = {
  [council: string]: NewCouncilData;
};

type NewRegionData = {
  name: LocationNames;
  divisions: {
    [division: string]: NewDivisionData;
  };
};

type NewCameroonData = {
  [key: string]: NewRegionData;
};

const transformData = (data: CameroonData): NewCameroonData => {
  const newData: NewCameroonData = {};

  for (const regionKey in data) {
    const region = data[regionKey];
    const newRegion: NewRegionData = {
      name: region.name,
      divisions: {},
    };

    for (const divisionKey in region.divisions) {
      const division = region.divisions[divisionKey];
      const newDivision: NewDivisionData = {};

      for (const councilKey in division) {
        const council = division[councilKey];
        const newCouncil: NewCouncilData = {};

        for (const pollingStationKey in council) {
          const pollingStation = council[pollingStationKey];
          const { locality, voters } = pollingStation;

          if (!newCouncil[locality]) {
            newCouncil[locality] = [];
          }

          newCouncil[locality].push({
            office: pollingStationKey,
            voters,
          });
        }
        newDivision[councilKey] = newCouncil;
      }
      newRegion.divisions[divisionKey] = newDivision;
    }
    newData[regionKey] = newRegion;
  }

  return newData;
};

const transformedData = transformData(cameroonData);

const newFileContent = `
export type LocationNames = {
  en: string;
  fr: string;
};

type PollingStationData = {
  office: string;
  voters: number;
};

type CouncilData = {
  [locality: string]: PollingStationData[];
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

export const cameroonData: CameroonData = ${JSON.stringify(transformedData, null, 2)};
`;

const filePath = path.resolve(__dirname, '../src/labels/cameroon-data20.ts');
fs.writeFileSync(filePath, newFileContent.trim());

console.log('Data transformation complete.');