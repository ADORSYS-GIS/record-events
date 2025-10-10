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
  "CENTRE": {
    name: { en: "CENTER", fr: "CENTRE" },
    divisions: {
      "Haute-Sanaga": {
        "Bibey": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Lembe-Yezoum": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mbandjock": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Minta": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Nanga-Eboko": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Nkoteng": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Lekié": {
        "Batchenga": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ebebda": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Elig-Mfomo": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Evodoula": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Lobo": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Monatélé": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Obala": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Okola": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Mbam-et-Inoubou": {
        "Bafia": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Bokito": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Deuk": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Kiiki": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Kon-Yambetta": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Makénéné": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ndikiniméki": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Nitoukou": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Mbam-et-Kim": {
        "Mbangassina": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ngambè-Tikar": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ngoro": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ntui": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Méfou-et-Afamba": {
        "Afanloum": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Assamba": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Awaé": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Edzendouan": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Esse": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mfou": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Nkolafamba": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Méfou-et-Akono": {
        "Akono": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Bikok": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mbankomo": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Mfoundi": {
        "Yaoundé I": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Yaoundé II": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Yaoundé III": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Yaoundé IV": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Yaoundé V": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Yaoundé VI": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Nyong-et-Kéllé": {
        "Biyouha": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Bondjock": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Bot-Makak": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Dibang": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Éséka": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Makak": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Matomb": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Messondo": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ngog-Mapubi": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Nyong-et-Mfoumou": {
        "Akonolinga": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ayos": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Endom": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mengang": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
      "Nyong-et-So'o": {
        "Akoeman": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Dzeng": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mbalmayo": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Mengueme": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
        "Ngomedzap": {
          "Others/Autre": [
            {
              station: "Others/Autre",
              voters: 0
            },
          ],
        },
      },
    },
  },
};
