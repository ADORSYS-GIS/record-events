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

export const cameroonData = {
  "NORD": {
    "name": {
      "en": "NORTH",
      "fr": "NORD"
    },
    "divisions": {
      "BENOUE": {
        "BASCHEO": {
          "DARAM": [
            {
              "station": "EP DARAM / A",
              "voters": 530
            }
          ],
          "WINDE": [
            {
              "station": "EP DARAM / A",
              "voters": 530
            }
          ],
          "DEBRI": [
            {
              "station": "EP DARAM / A",
              "voters": 530
            }
          ],
          "BELEL": [
            {
              "station": "EP DJALINGO BELEL / A",
              "voters": 646
            }
          ],
          "MANAWASSI": [
            {
              "station": "EP DJALINGO BELEL / A",
              "voters": 646
            }
          ],
          "GODJE": [
            {
              "station": "EP DJALINGO BELEL / A",
              "voters": 890
            }
          ],
          "DJARENGUOL": [
            {
              "station": "EP DJARENGUOL / A",
              "voters": 415
            }
          ],
          "DABA": [
            {
              "station": "EP DJARENGUOL / A",
              "voters": 766
            }
          ],
          "DJALLOU": [
            {
              "station": "EP HAMAKOUSSOU / A",
              "voters": 514
            }
          ],
          "HAMAKOUSSOU": [
            {
              "station": "EP HAMAKOUSSOU / A",
              "voters": 514
            }
          ],
          "TONDIRE": [
            {
              "station": "EP HAMAKOUSSOU / A",
              "voters": 514
            }
          ],
          "HARKOU": [
            {
              "station": "EP HARKOU / A",
              "voters": 368
            }
          ],
          "ROYA": [
            {
              "station": "EP HARKOU / A",
              "voters": 368
            }
          ],
          "BAO": [
            {
              "station": "EP KATAKO / A",
              "voters": 705
            }
          ],
          "KATAKO": [
            {
              "station": "EP KATAKO / A",
              "voters": 705
            }
          ],
          "NGOUTCHOUMI": [
            {
              "station": "EP KATAKO / A",
              "voters": 705
            }
          ],
          "BASCHEO": [
            {
              "station": "EP KATAKO / A",
              "voters": 7040
            }
          ],
          "TIMPILRE": [
            {
              "station": "EP KATAKO / A",
              "voters": 705
            }
          ],
          "MODIBO": [
            {
              "station": "EP KATAKO / A",
              "voters": 705
            }
          ],
          "BOUGOUR": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 1400
            }
          ],
          "DJALINGO": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 1520
            }
          ],
          "MAPOUTKI": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 1204
            }
          ],
          "DJARIA": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 1400
            }
          ],
          "KOBOSSI": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 1418
            }
          ],
          "MBILLA": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 709
            }
          ],
          "TCHIKAKRE": [
            {
              "station": "EP KOBOSSI / A",
              "voters": 709
            }
          ],
          "LAINDE": [
            {
              "station": "EP MAPOUKTI / A",
              "voters": 165
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO OULO BASCHEO / A",
              "voters": 860
            }
          ],
          "OULO": [
            {
              "station": "EP MAYO OULO BASCHEO / A",
              "voters": 860
            }
          ],
          "FOULBE": [
            {
              "station": "EP MAYO OULO BASCHEO / A",
              "voters": 430
            }
          ],
          "TCHOME": [
            {
              "station": "EP MAYO OULO BASCHEO / A",
              "voters": 430
            }
          ],
          "BAH": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 909
            }
          ],
          "DJABOU": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 909
            }
          ],
          "FOULBERE": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 740
            }
          ],
          "MBABI": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 1176
            }
          ],
          "GASCHIRE": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 436
            }
          ],
          "LARIA": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 909
            }
          ],
          "WOURO": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 8172
            }
          ],
          "HAMAYEL": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 740
            }
          ],
          "WOURO-DOUNDEHI": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 909
            }
          ],
          "WOURO-MAIDIBINO": [
            {
              "station": "EP MBABI BANTADJE / A",
              "voters": 436
            }
          ],
          "BALDAYEL": [
            {
              "station": "EP MBOULMI BALDAYEL / A",
              "voters": 402
            }
          ],
          "DOUNDERE": [
            {
              "station": "EP MBOULMI BALDAYEL / A",
              "voters": 402
            }
          ],
          "MBOULMI": [
            {
              "station": "EP MBOULMI BALDAYEL / A",
              "voters": 402
            }
          ],
          "BOMBOL": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "KOUBADJE": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "NARO-KOUBADJE": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "POUROUROU": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "TCHAKOUM": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "TONGO": [
            {
              "station": "EP NARO KOUBADJE / A",
              "voters": 725
            }
          ],
          "DORBA": [
            {
              "station": "EP PEMGOU / A",
              "voters": 424
            }
          ],
          "PEMGOU": [
            {
              "station": "EP PEMGOU / A",
              "voters": 424
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1194
            }
          ],
          "ROGNOU": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1866
            }
          ],
          "KERZENG": [
            {
              "station": "EP ROGNOU / A",
              "voters": 933
            }
          ],
          "NASSARAO": [
            {
              "station": "EP ROGNOU / A",
              "voters": 6262
            }
          ],
          "GOH": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1284
            }
          ],
          "NGONKA": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1284
            }
          ],
          "NGOUROU": [
            {
              "station": "EP ROGNOU / A",
              "voters": 2050
            }
          ],
          "FALI": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1714
            }
          ],
          "SEBORE": [
            {
              "station": "EP ROGNOU / A",
              "voters": 933
            }
          ],
          "TARABA": [
            {
              "station": "EP ROGNOU / A",
              "voters": 1194
            }
          ],
          "WAFANGO": [
            {
              "station": "EP ROGNOU / A",
              "voters": 933
            }
          ],
          "SABONGARI": [
            {
              "station": "EP WOURO NAOUDE / A",
              "voters": 491
            }
          ],
          "SOUKI": [
            {
              "station": "EP WOURO NAOUDE / A",
              "voters": 491
            }
          ],
          "NAOUDE": [
            {
              "station": "EP WOURO NAOUDE / A",
              "voters": 241
            }
          ],
          "DARPATA": [
            {
              "station": "ESPL CHEF POURI ALAM / A",
              "voters": 436
            }
          ],
          "DJOUGOUNDOU": [
            {
              "station": "ESPL CHEF POURI ALAM / A",
              "voters": 436
            }
          ],
          "POURI": [
            {
              "station": "ESPL CHEF POURI ALAM / A",
              "voters": 436
            }
          ],
          "RAYO": [
            {
              "station": "ESPL CHEF POURI ALAM / A",
              "voters": 436
            }
          ],
          "KESSOURE": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 4978
            }
          ],
          "MALKOUROU": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 4978
            }
          ],
          "MBOUTOU": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 4978
            }
          ],
          "ARDO": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 4978
            }
          ],
          "MBAI": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 4978
            }
          ],
          "DJAOURO": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 5596
            }
          ],
          "MOUSSA": [
            {
              "station": "LYCEE DE BASCHEO / A",
              "voters": 5596
            }
          ]
        },
        "BIBEMI": {
          "LATIN": [
            {
              "station": "ECOLE MISSION / A",
              "voters": 481
            }
          ],
          "NAGUE": [
            {
              "station": "ECOLE MISSION / A",
              "voters": 481
            }
          ],
          "ADOUMRI": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 23792
            }
          ],
          "HAOUSSARE": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3646
            }
          ],
          "KAGOURE": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 4261
            }
          ],
          "KOLLERE": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 5402
            }
          ],
          "SODECOTON": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 5754
            }
          ],
          "WAFANGO": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3956
            }
          ],
          "BIBEMI": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 20018
            }
          ],
          "CENTRE": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 7164
            }
          ],
          "BOUKTIO": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3534
            }
          ],
          "ROUMDE": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3766
            }
          ],
          "SEBORE-ADOUMRI": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3038
            }
          ],
          "TCHAMIDARI": [
            {
              "station": "EP ADOUMRI / A",
              "voters": 3534
            }
          ],
          "BABOUDJI": [
            {
              "station": "EP BABOUDJI / A",
              "voters": 630
            }
          ],
          "OURO-KIANDA": [
            {
              "station": "EP BABOUDJI / A",
              "voters": 798
            }
          ],
          "TCHEKEHI": [
            {
              "station": "EP BADEO / A",
              "voters": 205
            }
          ],
          "BAHAMADICKO": [
            {
              "station": "EP BAHAMADIKO / A",
              "voters": 302
            }
          ],
          "DJAOURO": [
            {
              "station": "EP BAHAMADIKO / A",
              "voters": 444
            }
          ],
          "GOTEL": [
            {
              "station": "EP BAHAMADIKO / A",
              "voters": 373
            }
          ],
          "OURO-SABERE": [
            {
              "station": "EP BAHIMI 1 / A",
              "voters": 410
            }
          ],
          "WANDJARA": [
            {
              "station": "EP BAHIMI 1 / A",
              "voters": 410
            }
          ],
          "BAHIMI": [
            {
              "station": "EP BAHIMI 2 / A",
              "voters": 2348
            }
          ],
          "OURO": [
            {
              "station": "EP BAHIMI 2 / A",
              "voters": 10745
            }
          ],
          "BOCKI": [
            {
              "station": "EP BAHIMI 2 / A",
              "voters": 559
            }
          ],
          "BAKSA": [
            {
              "station": "EP BAKSA / A",
              "voters": 838
            }
          ],
          "YALANGO": [
            {
              "station": "EP BALDA / A",
              "voters": 413
            }
          ],
          "BANDORO": [
            {
              "station": "EP BANDORO / A",
              "voters": 249
            }
          ],
          "P￈RE": [
            {
              "station": "EP BANDORO / A",
              "voters": 249
            }
          ],
          "BEBOUMZA": [
            {
              "station": "EP BEBOUMZA / A",
              "voters": 321
            }
          ],
          "BESSOUM-BOUBA": [
            {
              "station": "EP BESOUM-BOUBA / A",
              "voters": 358
            }
          ],
          "BESSOUM-LABAY": [
            {
              "station": "EP BESSOUM-LABAY / A",
              "voters": 216
            }
          ],
          "DAMARE": [
            {
              "station": "EP BIBEMI GR I / A",
              "voters": 771
            }
          ],
          "LAMORDE": [
            {
              "station": "EP BIBEMI GR I / A",
              "voters": 771
            }
          ],
          "BEBEMI": [
            {
              "station": "EP BIBEMI GR I / A",
              "voters": 771
            }
          ],
          "PLAQUES": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2050
            }
          ],
          "KAPSIKIRE": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1115
            }
          ],
          "DOWORO": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2050
            }
          ],
          "FOULBERE": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1886
            }
          ],
          "GUIZIGARE": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1596
            }
          ],
          "KAPSIKI": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2199
            }
          ],
          "MANDJAOLA": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2498
            }
          ],
          "MAYO-BARKA": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1342
            }
          ],
          "YADJI": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1894
            }
          ],
          "OURO-KARI": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2050
            }
          ],
          "OURO-YADJI": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 1115
            }
          ],
          "SABONGARI": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2050
            }
          ],
          "WINDE": [
            {
              "station": "EP BIBEMI GR II / A",
              "voters": 2050
            }
          ],
          "BIKALE": [
            {
              "station": "EP BIKALE / A",
              "voters": 1566
            }
          ],
          "BOELI": [
            {
              "station": "EP BOELI / A",
              "voters": 1971
            }
          ],
          "DJAGNI": [
            {
              "station": "EP BOELI / A",
              "voters": 657
            }
          ],
          "SEBORE": [
            {
              "station": "EP BOELI / A",
              "voters": 1884
            }
          ],
          "BOULA-": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "IBIB": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 4480
            }
          ],
          "DJARENDIRE": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "GADA-BOUWOL": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2654
            }
          ],
          "HARDE": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "BOULA": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "NANGUE": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "OURO-BAI": [
            {
              "station": "EP BOULA-IBIB / A",
              "voters": 2240
            }
          ],
          "BOUNGA": [
            {
              "station": "EP BOUNGA / A",
              "voters": 739
            }
          ],
          "BOUNGA-HOSSERE": [
            {
              "station": "EP BOUNGA HOSSERE / A",
              "voters": 402
            }
          ],
          "BOUNGUEL": [
            {
              "station": "EP BOUNGUEL / A",
              "voters": 313
            }
          ],
          "GARALAWO": [
            {
              "station": "EP BOUNGUEL / A",
              "voters": 313
            }
          ],
          "SIDDI": [
            {
              "station": "EP CARREFOUR DJAOURO SIDDI / A",
              "voters": 71
            }
          ],
          "DANDERE": [
            {
              "station": "EP DANDERE / A",
              "voters": 459
            }
          ],
          "NAKERE": [
            {
              "station": "EP DANDERE / A",
              "voters": 872
            }
          ],
          "DERINTCHING": [
            {
              "station": "EP DERINTCHING / A",
              "voters": 686
            }
          ],
          "DJALOUMI": [
            {
              "station": "EP DJALOUMI / A",
              "voters": 1920
            }
          ],
          "OURO-FADA": [
            {
              "station": "EP DJALOUMI / A",
              "voters": 960
            }
          ],
          "POUPOU": [
            {
              "station": "EP DJALOUMI / A",
              "voters": 960
            }
          ],
          "BINOU": [
            {
              "station": "EP DJARENDI BELLO / A",
              "voters": 1121
            }
          ],
          "DJARENDI-BELLO": [
            {
              "station": "EP DJARENDI BELLO / A",
              "voters": 466
            }
          ],
          "TEWER": [
            {
              "station": "EP DJARENDI BELLO / A",
              "voters": 466
            }
          ],
          "BOKKIRE": [
            {
              "station": "EP DJARENGOL / A",
              "voters": 115
            }
          ],
          "DJARENGOL": [
            {
              "station": "EP DJARENGOL / A",
              "voters": 115
            }
          ],
          "DJENEO": [
            {
              "station": "EP DJENEO / A",
              "voters": 395
            }
          ],
          "LOUDOU": [
            {
              "station": "EP DJOUGOUNDOURE / A",
              "voters": 182
            }
          ],
          "NEFETENGOL": [
            {
              "station": "EP DJOUGOUNDOURE / A",
              "voters": 182
            }
          ],
          "DOUGGUE": [
            {
              "station": "EP DOUGGUE / A",
              "voters": 302
            }
          ],
          "MAYO-PARIS": [
            {
              "station": "EP FALTIGOU / A",
              "voters": 205
            }
          ],
          "SISSIRI": [
            {
              "station": "EP FALTIGOU / A",
              "voters": 205
            }
          ],
          "FAMOU": [
            {
              "station": "EP FAMOU / A",
              "voters": 441
            }
          ],
          "FAMOURE": [
            {
              "station": "EP FAMOURE / A",
              "voters": 330
            }
          ],
          "BARRIERE": [
            {
              "station": "EP G II ADOUMRI / A",
              "voters": 728
            }
          ],
          "ARABO": [
            {
              "station": "EP GALI / A",
              "voters": 540
            }
          ],
          "GALI": [
            {
              "station": "EP GALI / A",
              "voters": 540
            }
          ],
          "SUNSANE": [
            {
              "station": "EP GALI / A",
              "voters": 540
            }
          ],
          "TCHONASSANE": [
            {
              "station": "EP GALI / A",
              "voters": 540
            }
          ],
          "QUARTIER": [
            {
              "station": "EP GII BIBEMI / A",
              "voters": 935
            }
          ],
          "WADJIRI": [
            {
              "station": "EP GII BIBEMI / A",
              "voters": 935
            }
          ],
          "GOKA": [
            {
              "station": "EP GOKA / A",
              "voters": 1112
            }
          ],
          "MAYO-BIRIDJI": [
            {
              "station": "EP GOKA / A",
              "voters": 1021
            }
          ],
          "SOSSARI": [
            {
              "station": "EP GOKA / A",
              "voters": 703
            }
          ],
          "GONZOUNE": [
            {
              "station": "EP GONZOUNE / A",
              "voters": 265
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP GOPTIKERE / A",
              "voters": 615
            }
          ],
          "GOPTIKERE": [
            {
              "station": "EP GOPTIKERE / A",
              "voters": 1088
            }
          ],
          "GAGAWA": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 414
            }
          ],
          "GORE-ARDO": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 414
            }
          ],
          "KAREDJE": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 795
            }
          ],
          "GOUBE": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 414
            }
          ],
          "NGORE": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 603
            }
          ],
          "NGASKA": [
            {
              "station": "EP GORE ARDO / A",
              "voters": 603
            }
          ],
          "HAMALADE": [
            {
              "station": "EP HAMALADE / A",
              "voters": 608
            }
          ],
          "KALYANFOU": [
            {
              "station": "EP HAMALADE / A",
              "voters": 608
            }
          ],
          "DOUMGUEL": [
            {
              "station": "EP HOLMA / A",
              "voters": 680
            }
          ],
          "HOLMA": [
            {
              "station": "EP HOLMA / A",
              "voters": 1213
            }
          ],
          "HOULA": [
            {
              "station": "EP HOULA / A",
              "voters": 4078
            }
          ],
          "KILBAO": [
            {
              "station": "EP HOULA / A",
              "voters": 2182
            }
          ],
          "MBEDEO": [
            {
              "station": "EP HOULA / A",
              "voters": 2182
            }
          ],
          "YAYA": [
            {
              "station": "EP HOULA / A",
              "voters": 2039
            }
          ],
          "SOULMAKI": [
            {
              "station": "EP HOULA / A",
              "voters": 2182
            }
          ],
          "KAKOU": [
            {
              "station": "EP KAKOU / A",
              "voters": 662
            }
          ],
          "BIMARE": [
            {
              "station": "EP KALAO / A",
              "voters": 324
            }
          ],
          "DAKSI": [
            {
              "station": "EP KALAO / A",
              "voters": 439
            }
          ],
          "NAKANDJA": [
            {
              "station": "EP KALAO / A",
              "voters": 324
            }
          ],
          "KAPANAY": [
            {
              "station": "EP KAPANAY / A",
              "voters": 287
            }
          ],
          "KATCHEO": [
            {
              "station": "EP KATCHEO / A",
              "voters": 234
            }
          ],
          "LANKANDJA": [
            {
              "station": "EP KATCHEO / A",
              "voters": 234
            }
          ],
          "OURO-BOCKI": [
            {
              "station": "EP KATCHEO / A",
              "voters": 234
            }
          ],
          "TCHABEWA": [
            {
              "station": "EP KILBAO / A",
              "voters": 143
            }
          ],
          "LABARE-BOBODJO": [
            {
              "station": "EP LABARE BOBODJO / A",
              "voters": 407
            }
          ],
          "LADDE-GORE": [
            {
              "station": "EP LADDE-GORE / A",
              "voters": 592
            }
          ],
          "SABERE": [
            {
              "station": "EP LADDE-GORE / A",
              "voters": 592
            }
          ],
          "LADDE": [
            {
              "station": "EP LADDE-GORE / A",
              "voters": 592
            }
          ],
          "GORE": [
            {
              "station": "EP LADDE-GORE / A",
              "voters": 592
            }
          ],
          "KALAO": [
            {
              "station": "EP LAM / A",
              "voters": 820
            }
          ],
          "LAM": [
            {
              "station": "EP LAM / A",
              "voters": 496
            }
          ],
          "ADI": [
            {
              "station": "EP LAWA / A",
              "voters": 315
            }
          ],
          "LAWA": [
            {
              "station": "EP LAWA / A",
              "voters": 315
            }
          ],
          "LIBINE": [
            {
              "station": "EP LAWA / A",
              "voters": 315
            }
          ],
          "WASO": [
            {
              "station": "EP LAWA / A",
              "voters": 315
            }
          ],
          "BOLGUI": [
            {
              "station": "EP LAZOUA / A",
              "voters": 110
            }
          ],
          "LAZOUA": [
            {
              "station": "EP LAZOUA / A",
              "voters": 110
            }
          ],
          "DORBA": [
            {
              "station": "EP LOMBO / A",
              "voters": 552
            }
          ],
          "LOMBO": [
            {
              "station": "EP LOMBO / A",
              "voters": 552
            }
          ],
          "LOUMINGUEL": [
            {
              "station": "EP LOUMINGUEL / A",
              "voters": 930
            }
          ],
          "LOMINGUEL": [
            {
              "station": "EP LOUMINGUEL / A",
              "voters": 465
            }
          ],
          "GONKOI": [
            {
              "station": "EP MADJOLDE / A",
              "voters": 532
            }
          ],
          "MADJOLDE": [
            {
              "station": "EP MADJOLDE / A",
              "voters": 532
            }
          ],
          "MAFALE": [
            {
              "station": "EP MAFALE / A",
              "voters": 239
            }
          ],
          "MATSIRI": [
            {
              "station": "EP MAFALE / A",
              "voters": 239
            }
          ],
          "MAIDJIMI": [
            {
              "station": "EP MAIDJIMI / A",
              "voters": 335
            }
          ],
          "HOULA-FANDOU": [
            {
              "station": "EP MAKASSELE / A",
              "voters": 472
            }
          ],
          "MAKASSELLE": [
            {
              "station": "EP MAKASSELE / A",
              "voters": 338
            }
          ],
          "MATALI": [
            {
              "station": "EP MAKASSELE / A",
              "voters": 338
            }
          ],
          "ZOULGO": [
            {
              "station": "EP MAKASSELE / A",
              "voters": 338
            }
          ],
          "BARKA": [
            {
              "station": "EP MAYO BARKA / A",
              "voters": 454
            }
          ],
          "FOULBE": [
            {
              "station": "EP MAYO BARKA / A",
              "voters": 227
            }
          ],
          "GUIZIGA": [
            {
              "station": "EP MAYO BARKA / A",
              "voters": 227
            }
          ],
          "BIZOME": [
            {
              "station": "EP MAYO-LAOULADJE / A",
              "voters": 146
            }
          ],
          "MAYO-LAOULADJE": [
            {
              "station": "EP MAYO-LAOULADJE / A",
              "voters": 146
            }
          ],
          "MAYO-LOPE": [
            {
              "station": "EP MAYO-LOPE / A",
              "voters": 1036
            }
          ],
          "DJABIRE": [
            {
              "station": "EP MBELLA / A",
              "voters": 803
            }
          ],
          "MBELLA": [
            {
              "station": "EP MBELLA / A",
              "voters": 803
            }
          ],
          "DANDIBALI": [
            {
              "station": "EP MBIGOU / A",
              "voters": 694
            }
          ],
          "DOMAYO": [
            {
              "station": "EP MBIGOU / A",
              "voters": 694
            }
          ],
          "MBIGOU": [
            {
              "station": "EP MBIGOU / A",
              "voters": 1388
            }
          ],
          "GOLLA": [
            {
              "station": "EP MBIGOU / A",
              "voters": 694
            }
          ],
          "TOUPOURI": [
            {
              "station": "EP MBIGOU / A",
              "voters": 694
            }
          ],
          "MORA-CARREFOUR": [
            {
              "station": "EP MORA-CARREFOUR / A",
              "voters": 187
            }
          ],
          "BALDA": [
            {
              "station": "EP NDIAM-BADI / A",
              "voters": 1247
            }
          ],
          "NDIAM-BADI": [
            {
              "station": "EP NDIAM-BADI / A",
              "voters": 673
            }
          ],
          "YALAGO": [
            {
              "station": "EP NDIAM-BADI / A",
              "voters": 827
            }
          ],
          "GONI": [
            {
              "station": "EP NDIAM-BADI / A",
              "voters": 827
            }
          ],
          "NDJOURA": [
            {
              "station": "EP NDJOURA / A",
              "voters": 270
            }
          ],
          "LENDJE": [
            {
              "station": "EP NDONGA / A",
              "voters": 340
            }
          ],
          "NDONGA": [
            {
              "station": "EP NDONGA / A",
              "voters": 340
            }
          ],
          "TCHAKARI": [
            {
              "station": "EP NDONGA / A",
              "voters": 439
            }
          ],
          "BADIWA": [
            {
              "station": "EP NGAOULI / A",
              "voters": 479
            }
          ],
          "NGAOULI": [
            {
              "station": "EP NGAOULI / A",
              "voters": 479
            }
          ],
          "LARKI": [
            {
              "station": "EP OURO KIANDA / A",
              "voters": 168
            }
          ],
          "KIANDA1": [
            {
              "station": "EP OURO KIANDA / A",
              "voters": 168
            }
          ],
          "KIANDA2": [
            {
              "station": "EP OURO KIANDA / A",
              "voters": 168
            }
          ],
          "GAMDOUGUEL": [
            {
              "station": "EP OURO-ARDE / A",
              "voters": 543
            }
          ],
          "OURO-ARDE": [
            {
              "station": "EP OURO-ARDE / A",
              "voters": 408
            }
          ],
          "OURO-KIO": [
            {
              "station": "EP OURO-KIO / A",
              "voters": 526
            }
          ],
          "PADARME": [
            {
              "station": "EP PADARME / A",
              "voters": 1696
            }
          ],
          "TIGUERE": [
            {
              "station": "EP PADARME / A",
              "voters": 1696
            }
          ],
          "DJOUGOUNDOURE": [
            {
              "station": "EP PATADJE / A",
              "voters": 477
            }
          ],
          "MAYO-LOUNDOU": [
            {
              "station": "EP PATADJE / A",
              "voters": 295
            }
          ],
          "NEFETEGOL": [
            {
              "station": "EP PATADJE / A",
              "voters": 295
            }
          ],
          "PATADJE": [
            {
              "station": "EP PATADJE / A",
              "voters": 295
            }
          ],
          "BOUZA": [
            {
              "station": "EP PIAGA / A",
              "voters": 306
            }
          ],
          "FADARMA": [
            {
              "station": "EP PIAGA / A",
              "voters": 306
            }
          ],
          "PIAGA": [
            {
              "station": "EP PIAGA / A",
              "voters": 306
            }
          ],
          "BANTADJE": [
            {
              "station": "EP POMLA / A",
              "voters": 1201
            }
          ],
          "POMLA": [
            {
              "station": "EP POMLA / A",
              "voters": 2162
            }
          ],
          "BIDE": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 640
            }
          ],
          "BIDE-YAYA": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 640
            }
          ],
          "LABARE": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 1078
            }
          ],
          "DJAMAHA": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 757
            }
          ],
          "ROUMDE-BIDE": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 640
            }
          ],
          "SERAWA": [
            {
              "station": "EP ROUMDE-BIDE / A",
              "voters": 640
            }
          ],
          "OURO-GOUBE": [
            {
              "station": "EP SEBORE / A",
              "voters": 570
            }
          ],
          "BADEOU": [
            {
              "station": "EP TAM / A",
              "voters": 767
            }
          ],
          "BADORO": [
            {
              "station": "EP TAM / A",
              "voters": 1292
            }
          ],
          "TAM": [
            {
              "station": "EP TAM / A",
              "voters": 1534
            }
          ],
          "FALTIGOU": [
            {
              "station": "EP TAM / A",
              "voters": 2205
            }
          ],
          "MAYEL": [
            {
              "station": "EP TAM / A",
              "voters": 767
            }
          ],
          "PARIS-TAM": [
            {
              "station": "EP TAM / A",
              "voters": 767
            }
          ],
          "SISSERI": [
            {
              "station": "EP TAM / A",
              "voters": 767
            }
          ],
          "BIRIDJI": [
            {
              "station": "EP TEWERE / A",
              "voters": 189
            }
          ],
          "TEWERE": [
            {
              "station": "EP TEWERE / A",
              "voters": 189
            }
          ],
          "TIHELE": [
            {
              "station": "EP TIHELE / A",
              "voters": 225
            }
          ],
          "WAGA": [
            {
              "station": "EP WAGA / A",
              "voters": 415
            }
          ],
          "YABERIYA": [
            {
              "station": "EP YABERIYA / A",
              "voters": 323
            }
          ],
          "BOUI": [
            {
              "station": "ESPL PLACE DE FETE BOUI / A",
              "voters": 283
            }
          ],
          "DEOU": [
            {
              "station": "ESPL PLACE DE FETE DEOU / A",
              "voters": 672
            }
          ],
          "SOMANGO": [
            {
              "station": "ESPL PLACE DE FETE DEOU / A",
              "voters": 336
            }
          ],
          "MAYO-GOUDJE": [
            {
              "station": "ESPL PLACE DE FETE GOUDJE / A",
              "voters": 132
            }
          ],
          "AOUDJALI": [
            {
              "station": "ESPL PLACE DE FETE NAKERE / A",
              "voters": 154
            }
          ],
          "NELBI": [
            {
              "station": "ESPL PLACE DE FETE NAKERE / A",
              "voters": 154
            }
          ],
          "VOUNRE": [
            {
              "station": "ESPL PLACE DE FETE VOUNRE / A",
              "voters": 257
            }
          ],
          "FEREOUNDE": [
            {
              "station": "ESPL PLACE FETE MALLOUM / A",
              "voters": 213
            }
          ],
          "LONGUEREO": [
            {
              "station": "ESPL PLACE FETE MALLOUM / A",
              "voters": 213
            }
          ],
          "MALLOUM": [
            {
              "station": "ESPL PLACE FETE MALLOUM / A",
              "voters": 213
            }
          ],
          "OURO-DOLE": [
            {
              "station": "ESPL PLACE FETE MALLOUM / A",
              "voters": 213
            }
          ],
          "BAINAWA": [
            {
              "station": "ESPL PLACE FETE MAYO-GOUDJE / A",
              "voters": 492
            }
          ],
          "MAYO": [
            {
              "station": "ESPL PLACE FETE MAYO-GOUDJE / A",
              "voters": 2608
            }
          ],
          "GOUDJE": [
            {
              "station": "ESPL PLACE FETE MAYO-GOUDJE / A",
              "voters": 1476
            }
          ],
          "KANGOU": [
            {
              "station": "ESPL PLACE FETE MAYO-GOUDJE / A",
              "voters": 492
            }
          ],
          "KOULADJE": [
            {
              "station": "ESPL PLACE FETE MAYO-GOUDJE / A",
              "voters": 492
            }
          ],
          "MAYO-LEBRI": [
            {
              "station": "ESPL PLACE FETE MAYO-LEBRI / A",
              "voters": 346
            }
          ],
          "MAYO-NELBE": [
            {
              "station": "ESPL PLACE FETE MAYO-LEBRI / A",
              "voters": 346
            }
          ],
          "MBOLLOM": [
            {
              "station": "ESPL PLACE FETE MBOLLOM / A",
              "voters": 306
            }
          ],
          "RIWAGO": [
            {
              "station": "ESPL PLACE FETE MBOLLOM / A",
              "voters": 306
            }
          ],
          "LAINDE": [
            {
              "station": "ESPL PLACE FETE OURO-DONKA / A",
              "voters": 117
            }
          ],
          "DONKA": [
            {
              "station": "ESPL PLACE FETE OURO-DONKA / A",
              "voters": 117
            }
          ],
          "OURO-DONKA": [
            {
              "station": "ESPL PLACE FETE OURO-DONKA / A",
              "voters": 117
            }
          ],
          "YAOUNGO": [
            {
              "station": "ESPL PLACE FETE OURO-DONKA / A",
              "voters": 117
            }
          ],
          "MASSIRI": [
            {
              "station": "ESPL.PLACE DE FETE MASSIRI / A",
              "voters": 131
            }
          ],
          "BADEO": [
            {
              "station": "ESPL.TANKANGOL / A",
              "voters": 362
            }
          ],
          "TANKANGOL": [
            {
              "station": "ESPL.TANKANGOL / A",
              "voters": 157
            }
          ],
          "GUEDA": [
            {
              "station": "LYCEE BIBEMI GUEDA / A",
              "voters": 525
            }
          ],
          "LOUGGUEREO": [
            {
              "station": "LYCEE BIBEMI GUEDA / A",
              "voters": 525
            }
          ],
          "MOUWIRE": [
            {
              "station": "LYCEE BIBEMI GUEDA / A",
              "voters": 525
            }
          ],
          "KODJOLI": [
            {
              "station": "SAR/SM ADOUMRI / A",
              "voters": 496
            }
          ],
          "GADA": [
            {
              "station": "SAR/SM ADOUMRI / A",
              "voters": 496
            }
          ],
          "HAOUSSA": [
            {
              "station": "SAR/SM ADOUMRI / A",
              "voters": 496
            }
          ]
        },
        "DEMBO": {
          "BABESSA": [
            {
              "station": "EP BABESSA / A",
              "voters": 361
            }
          ],
          "LOUGGA": [
            {
              "station": "EP BABESSA / A",
              "voters": 361
            }
          ],
          "WAMBABE": [
            {
              "station": "EP BABESSA / A",
              "voters": 361
            }
          ],
          "BADJEROUM": [
            {
              "station": "EP BADJEROUM / A",
              "voters": 151
            }
          ],
          "DALEHI": [
            {
              "station": "EP BADJEROUM / A",
              "voters": 151
            }
          ],
          "BADJABBO": [
            {
              "station": "EP BADJEROUM / A",
              "voters": 151
            }
          ],
          "BALDE-DANEDJI": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 235
            }
          ],
          "BAPAROU": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 235
            }
          ],
          "BELA": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 485
            }
          ],
          "DARKODJI": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 485
            }
          ],
          "MAYO-BANI": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 235
            }
          ],
          "TINTINRE": [
            {
              "station": "EP BALDE-DANEDJI / A",
              "voters": 235
            }
          ],
          "BORI-CENTRE": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "MAYEL-MAIRI": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "MAYO": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "KEOU": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "MAYO-GOUDOU": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "BARODE": [
            {
              "station": "EP BORI-CENTRE / A",
              "voters": 365
            }
          ],
          "DEMBO": [
            {
              "station": "EP DEMBO / A",
              "voters": 1692
            }
          ],
          "DJATOUMI": [
            {
              "station": "EP DJATOUMI CARREFOUR / A",
              "voters": 275
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP DJATOUMI CARREFOUR / A",
              "voters": 275
            }
          ],
          "GUERTODE": [
            {
              "station": "EP DJATOUMI CARREFOUR / A",
              "voters": 395
            }
          ],
          "TIMPIL": [
            {
              "station": "EP DJATOUMI CARREFOUR / A",
              "voters": 606
            }
          ],
          "DJATOUMI-VILLAGE": [
            {
              "station": "EP DJATOUMI VILLAGE / A",
              "voters": 333
            }
          ],
          "KODJELEWOL": [
            {
              "station": "EP DJATOUMI VILLAGE / A",
              "voters": 333
            }
          ],
          "POSSO": [
            {
              "station": "EP DJATOUMI VILLAGE / A",
              "voters": 333
            }
          ],
          "WINDE": [
            {
              "station": "EP DJATOUMI VILLAGE / A",
              "voters": 333
            }
          ],
          "GANDOUWO": [
            {
              "station": "EP DJATOUMI VILLAGE / A",
              "voters": 333
            }
          ],
          "BORI": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "DOMBOL": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "ABDOU": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "KOSSEYEL": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "MAMMA": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "ARDO": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "MATAFALRE": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "MAYEL": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "BAHARNA": [
            {
              "station": "EP DOMBOL / A",
              "voters": 311
            }
          ],
          "KESSOUM": [
            {
              "station": "EP DOMBOL / A",
              "voters": 938
            }
          ],
          "BOUL-BOULEL": [
            {
              "station": "EP DORNOMOU / A",
              "voters": 451
            }
          ],
          "DORNOMOU": [
            {
              "station": "EP DORNOMOU / A",
              "voters": 451
            }
          ],
          "MBOUL-MBOULA": [
            {
              "station": "EP DORNOMOU / A",
              "voters": 451
            }
          ],
          "TCHAKAWA": [
            {
              "station": "EP LAINDE TCHAKOUM / A",
              "voters": 196
            }
          ],
          "MBOUTOU": [
            {
              "station": "EP MBOUTOU / A",
              "voters": 904
            }
          ],
          "LAMORDE": [
            {
              "station": "EP MBOUTOU / A",
              "voters": 452
            }
          ],
          "OUSMANOU": [
            {
              "station": "EP MBOUTOU / A",
              "voters": 452
            }
          ],
          "BARNGA": [
            {
              "station": "EP OURO-DOUNDEHI / A",
              "voters": 168
            }
          ],
          "OURO-DOUNDEHI": [
            {
              "station": "EP OURO-DOUNDEHI / A",
              "voters": 168
            }
          ],
          "TIMBO": [
            {
              "station": "EP OURO-DOUNDEHI / A",
              "voters": 346
            }
          ],
          "BAINAWARE": [
            {
              "station": "EP SEBORE / A",
              "voters": 368
            }
          ],
          "DIRI": [
            {
              "station": "EP SEBORE / A",
              "voters": 819
            }
          ],
          "KANGOU": [
            {
              "station": "EP SEBORE / A",
              "voters": 368
            }
          ],
          "DJONGOU": [
            {
              "station": "EP SEBORE / A",
              "voters": 368
            }
          ],
          "SEBORE": [
            {
              "station": "EP SEBORE / A",
              "voters": 368
            }
          ],
          "WALEWOL": [
            {
              "station": "EP SEBORE / A",
              "voters": 733
            }
          ],
          "BOCKI": [
            {
              "station": "EP SEBORE / A",
              "voters": 368
            }
          ],
          "DJAMBAKI": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "KOSSEL-IYAM": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "NARO": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "NDARAM": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "LIMAN": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "ABBASSI": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "NGOURORE": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "SOUROU": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 708
            }
          ],
          "NANAYE": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "NDAYE": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 354
            }
          ],
          "YOU": [
            {
              "station": "EP SOUROU NANAYE / A",
              "voters": 600
            }
          ],
          "ALKALI": [
            {
              "station": "EP TAPARE / A",
              "voters": 339
            }
          ],
          "TAPARE": [
            {
              "station": "EP TAPARE / A",
              "voters": 339
            }
          ],
          "DALEDJE": [
            {
              "station": "EP TAPARE / A",
              "voters": 339
            }
          ],
          "TAPAWA": [
            {
              "station": "EP TAPAWA / A",
              "voters": 143
            }
          ],
          "DOUM": [
            {
              "station": "EP YOU / A",
              "voters": 246
            }
          ],
          "DJINI-BAITI": [
            {
              "station": "ESPL DJAOURO DJINI-BAITI / A",
              "voters": 283
            }
          ],
          "TONGO": [
            {
              "station": "ESPL DJAOURO DJINI-BAITI / A",
              "voters": 622
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "ESPL DJAOURO DJINI-BAITI / A",
              "voters": 283
            }
          ],
          "KAINIDE": [
            {
              "station": "ESPL DJAOURO LOUGGUEREO / A",
              "voters": 178
            }
          ],
          "LOUGGUEREO": [
            {
              "station": "ESPL DJAOURO LOUGGUEREO / A",
              "voters": 178
            }
          ],
          "TCHEKAL": [
            {
              "station": "ESPL DJAOURO LOUGGUEREO / A",
              "voters": 178
            }
          ],
          "DJALINGO": [
            {
              "station": "ESPL DJAOURO NDJAOULI / A",
              "voters": 280
            }
          ],
          "MALLOUMRE": [
            {
              "station": "ESPL DJAOURO NDJAOULI / A",
              "voters": 280
            }
          ],
          "DJALLOU": [
            {
              "station": "ESPL DJAOURO NDJAOULI / A",
              "voters": 819
            }
          ],
          "NDJAOULI": [
            {
              "station": "ESPL DJAOURO NDJAOULI / A",
              "voters": 560
            }
          ],
          "NTANG": [
            {
              "station": "ESPL DJAOURO NDJAOULI / A",
              "voters": 280
            }
          ],
          "BALDA": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 424
            }
          ],
          "DJAMBOUTOU-ISSA": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 424
            }
          ],
          "GOULOUM": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 424
            }
          ],
          "LAINDE": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 620
            }
          ],
          "TCHAKOUM": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 620
            }
          ],
          "NDONSA": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 620
            }
          ],
          "OURO": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 2096
            }
          ],
          "MODIBO": [
            {
              "station": "ESPL MARCHE DJAMBOUTOU-ISSA / A",
              "voters": 424
            }
          ]
        },
        "GAROUA I": {
          "CRESAS": [
            {
              "station": "CRESAS / A",
              "voters": 653
            }
          ],
          "PLATEAU": [
            {
              "station": "CRESAS / A",
              "voters": 3698
            }
          ],
          "PADAMA": [
            {
              "station": "DISPENSAIRE SOUARI / A",
              "voters": 908
            }
          ],
          "NKOLBIVES": [
            {
              "station": "ECOLE CATHO NKOLBIVES / A",
              "voters": 3315
            }
          ],
          "SARARE": [
            {
              "station": "ECOLE CATHO NKOLBIVES / A",
              "voters": 3315
            }
          ],
          "TCHEBOARE": [
            {
              "station": "ECOLE CATHO NKOLBIVES / A",
              "voters": 3315
            }
          ],
          "YELWA": [
            {
              "station": "ECOLE CATHO NKOLBIVES / A",
              "voters": 3315
            }
          ],
          "BASE": [
            {
              "station": "ECOLE DE FAUNE / A",
              "voters": 1073
            }
          ],
          "AERIENNE": [
            {
              "station": "ECOLE DE FAUNE / A",
              "voters": 1073
            }
          ],
          "GARAGE": [
            {
              "station": "ECOLE DES AIDES SOIGNANTS / A",
              "voters": 3573
            }
          ],
          "GADJI": [
            {
              "station": "ECOLE DES AIDES SOIGNANTS / A",
              "voters": 3573
            }
          ],
          "SOWETO": [
            {
              "station": "ECOLE DES AIDES SOIGNANTS / A",
              "voters": 3573
            }
          ],
          "BAMILEKE": [
            {
              "station": "ECOLE PROTESTANTE / A",
              "voters": 2194
            }
          ],
          "MEHIRI": [
            {
              "station": "ECOLE PROTESTANTE / A",
              "voters": 2194
            }
          ],
          "PRISON": [
            {
              "station": "ECOLE PROTESTANTE / A",
              "voters": 2424
            }
          ],
          "CENTRALE": [
            {
              "station": "ECOLE PROTESTANTE / A",
              "voters": 2424
            }
          ],
          "TOUPOURIRE": [
            {
              "station": "ECOLE PROTESTANTE / A",
              "voters": 2194
            }
          ],
          "HAOUSSARE": [
            {
              "station": "EM ANGLOPHONE / A",
              "voters": 2056
            }
          ],
          "GENDARMERIE": [
            {
              "station": "EM GENDARMERIE / A",
              "voters": 964
            }
          ],
          "CAMP": [
            {
              "station": "EM OURO HOURSO / A",
              "voters": 8584
            }
          ],
          "CHINOIS": [
            {
              "station": "EM OURO HOURSO / A",
              "voters": 8584
            }
          ],
          "OURO": [
            {
              "station": "EM OURO HOURSO / A",
              "voters": 34800
            }
          ],
          "HOURSO": [
            {
              "station": "EM OURO HOURSO / A",
              "voters": 24808
            }
          ],
          "III": [
            {
              "station": "EM OURO HOURSO / A",
              "voters": 10876
            }
          ],
          "ISIC": [
            {
              "station": "EM PLATEAU / A",
              "voters": 936
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 10716
            }
          ],
          "CONGORE": [
            {
              "station": "EP DJOUMASSI / A",
              "voters": 582
            }
          ],
          "DJOUMASSI": [
            {
              "station": "EP DJOUMASSI / A",
              "voters": 582
            }
          ],
          "KONKOLRE": [
            {
              "station": "EP DJOUMASSI / A",
              "voters": 582
            }
          ],
          "DJADJE": [
            {
              "station": "EP GAROUA WINDE / A",
              "voters": 661
            }
          ],
          "GAROUA": [
            {
              "station": "EP GAROUA WINDE / A",
              "voters": 892
            }
          ],
          "WINDE": [
            {
              "station": "EP GAROUA WINDE / A",
              "voters": 892
            }
          ],
          "SOUKI": [
            {
              "station": "EP GAROUA WINDE / A",
              "voters": 661
            }
          ],
          "WAFANGO": [
            {
              "station": "EP GAROUA WINDE / A",
              "voters": 1818
            }
          ],
          "FOULBERE": [
            {
              "station": "EP GR I / A",
              "voters": 10722
            }
          ],
          "GOFAME": [
            {
              "station": "EP HODANGO / A",
              "voters": 1295
            }
          ],
          "HODANGO": [
            {
              "station": "EP HODANGO / A",
              "voters": 2314
            }
          ],
          "MAIHARE": [
            {
              "station": "EP HODANGO / A",
              "voters": 1157
            }
          ],
          "SOUBANGO": [
            {
              "station": "EP HODANGO / A",
              "voters": 1157
            }
          ],
          "MAGADJI": [
            {
              "station": "EP HODANGO / A",
              "voters": 1157
            }
          ],
          "WOURO": [
            {
              "station": "EP HODANGO / A",
              "voters": 2314
            }
          ],
          "AMIRO": [
            {
              "station": "EP HODANGO / A",
              "voters": 1157
            }
          ],
          "HASSOUMI": [
            {
              "station": "EP HODANGO / A",
              "voters": 1157
            }
          ],
          "LOMODOU": [
            {
              "station": "EP LOMODOU / A",
              "voters": 412
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP OURO HOURSO I / A",
              "voters": 1698
            }
          ],
          "SODECOTON": [
            {
              "station": "EP OURO HOURSO I / A",
              "voters": 1698
            }
          ],
          "BATMANE": [
            {
              "station": "EP OURO KANADI / A",
              "voters": 9184
            }
          ],
          "KANADI": [
            {
              "station": "EP OURO KANADI / A",
              "voters": 12364
            }
          ],
          "MOSQUEE": [
            {
              "station": "EP OURO KANADI / A",
              "voters": 3242
            }
          ],
          "WAKILI": [
            {
              "station": "EP OURO KANADI / A",
              "voters": 3242
            }
          ],
          "LABBO": [
            {
              "station": "EP OURO LABBO / A",
              "voters": 2242
            }
          ],
          "LOWEL": [
            {
              "station": "EP SABONGARI / A",
              "voters": 3875
            }
          ],
          "KESSOUM": [
            {
              "station": "EP SABONGARI / A",
              "voters": 3875
            }
          ],
          "TALAKA": [
            {
              "station": "EP SABONGARI / A",
              "voters": 3875
            }
          ],
          "SABONGARI": [
            {
              "station": "EP SABONGARI / A",
              "voters": 3875
            }
          ],
          "NGAOUNDERERE": [
            {
              "station": "EP SOUARI / A",
              "voters": 3594
            }
          ],
          "SOUARI": [
            {
              "station": "EP SOUARI / A",
              "voters": 3594
            }
          ],
          "KOLLERE": [
            {
              "station": "LYCEE KOLLERE / A",
              "voters": 2828
            }
          ]
        },
        "GAROUA II": {
          "BERE": [
            {
              "station": "CENTRE CULTUREL LOPERE / A",
              "voters": 3365
            }
          ],
          "FOULBERE": [
            {
              "station": "CENTRE CULTUREL LOPERE / A",
              "voters": 14736
            }
          ],
          "KILOMETRE": [
            {
              "station": "CENTRE CULTUREL LOPERE / A",
              "voters": 3365
            }
          ],
          "CINQ": [
            {
              "station": "CENTRE CULTUREL LOPERE / A",
              "voters": 3365
            }
          ],
          "LOPERE": [
            {
              "station": "CENTRE CULTUREL LOPERE / A",
              "voters": 9298
            }
          ],
          "MBOUM": [
            {
              "station": "CES BILINGUE NGALBIDJE / A",
              "voters": 1943
            }
          ],
          "AVIATION": [
            {
              "station": "CES BILINGUE NGALBIDJE / A",
              "voters": 1943
            }
          ],
          "OURO": [
            {
              "station": "CETIC NASSARAO / A",
              "voters": 620
            }
          ],
          "ALHADJI": [
            {
              "station": "CETIC NASSARAO / A",
              "voters": 620
            }
          ],
          "OURO-KESSOUM": [
            {
              "station": "CETIC NASSARAO / A",
              "voters": 620
            }
          ],
          "WANTOUMI": [
            {
              "station": "CETIC NASSARAO / A",
              "voters": 620
            }
          ],
          "CAMP-SIC": [
            {
              "station": "DEL ENS SEC / A",
              "voters": 8307
            }
          ],
          "ROUMDE": [
            {
              "station": "DEL ENS SEC / A",
              "voters": 16285
            }
          ],
          "-ADJIA": [
            {
              "station": "DEL ENS SEC / A",
              "voters": 8307
            }
          ],
          "DEMSARE": [
            {
              "station": "ECOLE CATHOLIQ ST PIERRE / A",
              "voters": 2239
            }
          ],
          "NASSARAO": [
            {
              "station": "ECOLE CATHOLIQ ST PIERRE / A",
              "voters": 8043
            }
          ],
          "REYRE": [
            {
              "station": "ECOLE CATHOLIQ ST PIERRE / A",
              "voters": 2239
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ECOLE FRANCO ARABE AL-ANSAR / A",
              "voters": 267
            }
          ],
          "TAKASKO": [
            {
              "station": "ECOLE ISLAMIQ GDE MOSQUEE / A",
              "voters": 5091
            }
          ],
          "SABONGARI": [
            {
              "station": "ECOLE ISLAMIQUE SABONGARI / A",
              "voters": 1792
            }
          ],
          "BASCHEORE": [
            {
              "station": "EM BASCHEORE / A",
              "voters": 1853
            }
          ],
          "GABDIRE": [
            {
              "station": "EM BASCHEORE / A",
              "voters": 7682
            }
          ],
          "POUMPOUMRE": [
            {
              "station": "EP ANNEXE POUMPOUMRE / A",
              "voters": 7256
            }
          ],
          "LIDDIRE": [
            {
              "station": "EP BENOUE / A",
              "voters": 3886
            }
          ],
          "DOUALARE": [
            {
              "station": "EP DOUALARE / A",
              "voters": 2065
            }
          ],
          "GNAKIRA": [
            {
              "station": "EP GNAKIRA / A",
              "voters": 228
            }
          ],
          "MBERI": [
            {
              "station": "EP GNAKIRA / A",
              "voters": 228
            }
          ],
          "FOULBE": [
            {
              "station": "EP GNAKIRA / A",
              "voters": 228
            }
          ],
          "WAFANGO": [
            {
              "station": "EP GNAKIRA / A",
              "voters": 228
            }
          ],
          "LAINDE-DANEYEL": [
            {
              "station": "EP LAINDE DANEYEL / A",
              "voters": 1379
            }
          ],
          "BAH": [
            {
              "station": "EP LAINDE GR I / A",
              "voters": 6646
            }
          ],
          "MBILGA": [
            {
              "station": "EP MBILGA / A",
              "voters": 295
            }
          ],
          "MBOCKI": [
            {
              "station": "EP NASSARAO / A",
              "voters": 2902
            }
          ],
          "NGOURORE": [
            {
              "station": "EP NASSARAO / A",
              "voters": 3004
            }
          ],
          "OURO-LAWANE": [
            {
              "station": "EP OURO LAWANE / A",
              "voters": 2091
            }
          ],
          "OURO-NGALBIDJE": [
            {
              "station": "EP OURO NGALBIDJE / A",
              "voters": 5240
            }
          ],
          "DAR-EL-SALAM": [
            {
              "station": "EP POUKOULOUKOU / A",
              "voters": 2363
            }
          ],
          "POUKOULOUKOU": [
            {
              "station": "EP POUKOULOUKOU / A",
              "voters": 2363
            }
          ],
          "BOULAIBBIRE": [
            {
              "station": "EP POUMPOUMRE/PETIT PARIS / A",
              "voters": 1237
            }
          ],
          "TCHAKA": [
            {
              "station": "EP POUMPOUMRE/PETIT PARIS / A",
              "voters": 4836
            }
          ],
          "MIDARI": [
            {
              "station": "EP POUMPOUMRE/PETIT PARIS / A",
              "voters": 4836
            }
          ],
          "ADJIA": [
            {
              "station": "EP ROUMDE ADJIA / A",
              "voters": 7978
            }
          ],
          "TONGO": [
            {
              "station": "EP TONGO / A",
              "voters": 247
            }
          ],
          "GADA": [
            {
              "station": "GARE ROUTIERE LAINDE / A",
              "voters": 714
            }
          ],
          "MAYEL": [
            {
              "station": "GARE ROUTIERE LAINDE / A",
              "voters": 714
            }
          ],
          "LAINDE": [
            {
              "station": "GARE ROUTIERE LAINDE / A",
              "voters": 7929
            }
          ],
          "INTER": [
            {
              "station": "GARE ROUTIERE LAINDE / A",
              "voters": 1426
            }
          ],
          "GARE": [
            {
              "station": "GARE ROUTIERE LAINDE / A",
              "voters": 1426
            }
          ],
          "BAINAWARE": [
            {
              "station": "LYCEE TECHNIQUE BIBEMIRE / A",
              "voters": 2138
            }
          ],
          "BIBEMIRE": [
            {
              "station": "LYCEE TECHNIQUE BIBEMIRE / A",
              "voters": 20122
            }
          ],
          "III": [
            {
              "station": "LYCEE TECHNIQUE BIBEMIRE / A",
              "voters": 3884
            }
          ],
          "MAROUARE": [
            {
              "station": "LYCLAMOGA / A",
              "voters": 19009
            }
          ]
        },
        "GAROUA III": {
          "CENTRE": [
            {
              "station": "EP BABLA CENTRE / A",
              "voters": 872
            }
          ],
          "LAKARE": [
            {
              "station": "EP BABLA CENTRE / A",
              "voters": 872
            }
          ],
          "BIGDI": [
            {
              "station": "EP BABLA CENTRE / A",
              "voters": 1171
            }
          ],
          "WINDE": [
            {
              "station": "EP BABLA CENTRE / A",
              "voters": 1171
            }
          ],
          "DOULI": [
            {
              "station": "EP BABLA CENTRE / A",
              "voters": 1171
            }
          ],
          "ISRAEL": [
            {
              "station": "EP BABLA ISRAEL / A",
              "voters": 494
            }
          ],
          "BADOUDI": [
            {
              "station": "EP BADOUDI / A",
              "voters": 1024
            }
          ],
          "OURO-MAIDADI": [
            {
              "station": "EP BADOUDI / A",
              "voters": 1024
            }
          ],
          "TAPARE": [
            {
              "station": "EP BADOUDI / A",
              "voters": 1024
            }
          ],
          "TONDIRE": [
            {
              "station": "EP BADOUDI / A",
              "voters": 1024
            }
          ],
          "MAFFA": [
            {
              "station": "EP BIBOL / A",
              "voters": 506
            }
          ],
          "YIDE": [
            {
              "station": "EP BIBOL / A",
              "voters": 506
            }
          ],
          "BOCKLE": [
            {
              "station": "EP BOCKLE / A",
              "voters": 2307
            }
          ],
          "BILONDE": [
            {
              "station": "EP BOCKLE / A",
              "voters": 2497
            }
          ],
          "BALANE": [
            {
              "station": "EP DENGUI / A",
              "voters": 798
            }
          ],
          "DENGUI": [
            {
              "station": "EP DENGUI / A",
              "voters": 798
            }
          ],
          "LAINGUEL": [
            {
              "station": "EP DENGUI / A",
              "voters": 798
            }
          ],
          "BAINAWARE": [
            {
              "station": "EP DJALINGO / A",
              "voters": 3146
            }
          ],
          "DJALINGO": [
            {
              "station": "EP DJALINGO / A",
              "voters": 2304
            }
          ],
          "GUIZIGARE": [
            {
              "station": "EP DJALINGO / A",
              "voters": 1982
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 325
            }
          ],
          "LOUGOUMI": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 325
            }
          ],
          "HAIGA-DJEWA": [
            {
              "station": "EP HAIGA-DJEWA / A",
              "voters": 455
            }
          ],
          "HARANDE": [
            {
              "station": "EP HARANDE-LOBI / A",
              "voters": 350
            }
          ],
          "HARANDE-LOBI": [
            {
              "station": "EP HARANDE-LOBI / A",
              "voters": 350
            }
          ],
          "KATCHATCHIA": [
            {
              "station": "EP HARANDE-LOBI / A",
              "voters": 350
            }
          ],
          "BIBOL": [
            {
              "station": "EP KAWTAL / A",
              "voters": 1030
            }
          ],
          "KAWTAL": [
            {
              "station": "EP KAWTAL / A",
              "voters": 524
            }
          ],
          "LOPE": [
            {
              "station": "EP KAWTAL / A",
              "voters": 524
            }
          ],
          "KISMATARI": [
            {
              "station": "EP KISMATARI / A",
              "voters": 581
            }
          ],
          "NASSARAO-HAOUTA": [
            {
              "station": "EP KISMATARI / A",
              "voters": 581
            }
          ],
          "MAFA-KILDA": [
            {
              "station": "EP MAFA-KILDA / A",
              "voters": 878
            }
          ],
          "SABEWA": [
            {
              "station": "EP MAFA-KILDA / A",
              "voters": 878
            }
          ],
          "MAISSANOU": [
            {
              "station": "EP MAISSANOU / A",
              "voters": 298
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 2194
            }
          ],
          "DADI": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "LAINDE": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 4097
            }
          ],
          "PODOKO": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "LAMERE": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "MAYO-DADI": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "NGOBARA": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "TCHIKITO": [
            {
              "station": "EP MAYO-DADI / A",
              "voters": 1164
            }
          ],
          "BABLA": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 2437
            }
          ],
          "BANANA": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 199
            }
          ],
          "DJALINGO-TCHOUMPA": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 413
            }
          ],
          "KAE": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 413
            }
          ],
          "DOUTTE": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 413
            }
          ],
          "NDIAM-BABA": [
            {
              "station": "EP NDIAM-BABA / A",
              "voters": 199
            }
          ],
          "BAKASSI": [
            {
              "station": "EP NORMANDI / A",
              "voters": 928
            }
          ],
          "NORMANDI": [
            {
              "station": "EP NORMANDI / A",
              "voters": 422
            }
          ],
          "PERMA": [
            {
              "station": "EP PERMA / A",
              "voters": 616
            }
          ],
          "TCHOUMPA": [
            {
              "station": "EP PERMA / A",
              "voters": 616
            }
          ],
          "FALIRE": [
            {
              "station": "EP PITOAYEL / A",
              "voters": 436
            }
          ],
          "BODINGA": [
            {
              "station": "EP PITOAYEL / A",
              "voters": 436
            }
          ],
          "PITOAYEL": [
            {
              "station": "EP PITOAYEL / A",
              "voters": 436
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP SANGUERE NGAOUNDERE / A",
              "voters": 322
            }
          ],
          "SANGUERE": [
            {
              "station": "EP SANGUERE NGAOUNDERE / A",
              "voters": 322
            }
          ],
          "NGAOUNDERE": [
            {
              "station": "EP SANGUERE NGAOUNDERE / A",
              "voters": 322
            }
          ],
          "CAMP": [
            {
              "station": "EP SANGUERE PAUL / A",
              "voters": 2672
            }
          ],
          "IRAD": [
            {
              "station": "EP SANGUERE PAUL / A",
              "voters": 1175
            }
          ],
          "LANAVET": [
            {
              "station": "EP SANGUERE PAUL / A",
              "voters": 1497
            }
          ],
          "SANGUERE-LANAVET": [
            {
              "station": "EP SANGUERE PAUL / A",
              "voters": 1175
            }
          ],
          "SANGUERE-PAUL": [
            {
              "station": "EP SANGUERE PAUL / A",
              "voters": 1175
            }
          ],
          "MAFA": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1027
            }
          ],
          "ECOLE": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1027
            }
          ],
          "MANANG": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1027
            }
          ],
          "SANGUERE-MANANG": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1138
            }
          ],
          "SANGUERE-NDJOI": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1027
            }
          ],
          "SANGUERE-NGAL": [
            {
              "station": "EP SANGUERE-NGAL / A",
              "voters": 1027
            }
          ],
          "SARKI-YAYI": [
            {
              "station": "EP SARKI-YAYI / A",
              "voters": 409
            }
          ],
          "BOCKI": [
            {
              "station": "EP WINDE DOULI / A",
              "voters": 299
            }
          ],
          "DJABE": [
            {
              "station": "EP WINDE DOULI / A",
              "voters": 299
            }
          ],
          "OURO": [
            {
              "station": "ESPL DJAOURO OURO TCHAKA / A",
              "voters": 846
            }
          ],
          "TCHAKA": [
            {
              "station": "ESPL DJAOURO OURO TCHAKA / A",
              "voters": 248
            }
          ]
        },
        "GASCHIGA": {
          "BOGGARE": [
            {
              "station": "BUREAU ELEVAGE / A",
              "voters": 895
            }
          ],
          "BOISSIRE": [
            {
              "station": "BUREAU ELEVAGE / A",
              "voters": 895
            }
          ],
          "FOULBERE": [
            {
              "station": "EM GASCHIGA / A",
              "voters": 1823
            }
          ],
          "HAOUSSARE": [
            {
              "station": "EM GASCHIGA / A",
              "voters": 820
            }
          ],
          "LAKARE": [
            {
              "station": "EM LAKARE / A",
              "voters": 259
            }
          ],
          "BAMANGA": [
            {
              "station": "EP BAMANGA / A",
              "voters": 1096
            }
          ],
          "DATCHIEL": [
            {
              "station": "EP BAMANGA / A",
              "voters": 1096
            }
          ],
          "FESSANGO": [
            {
              "station": "EP BAMANGA / A",
              "voters": 1548
            }
          ],
          "OURO": [
            {
              "station": "EP BAMANGA / A",
              "voters": 8770
            }
          ],
          "BIYA": [
            {
              "station": "EP BAMANGA / A",
              "voters": 1266
            }
          ],
          "SOUARE": [
            {
              "station": "EP BAMANGA / A",
              "voters": 1096
            }
          ],
          "BADESSI": [
            {
              "station": "EP BILINGUE / A",
              "voters": 178
            }
          ],
          "DABARE": [
            {
              "station": "EP BILINGUE / A",
              "voters": 167
            }
          ],
          "MBOUM": [
            {
              "station": "EP BILINGUE / A",
              "voters": 167
            }
          ],
          "MORA": [
            {
              "station": "EP BILINGUE / A",
              "voters": 167
            }
          ],
          "SERVICES": [
            {
              "station": "EP BOGARE / A",
              "voters": 335
            }
          ],
          "PUBLICS/": [
            {
              "station": "EP BOGARE / A",
              "voters": 335
            }
          ],
          "PARA": [
            {
              "station": "EP BOGARE / A",
              "voters": 335
            }
          ],
          "PUBLICS": [
            {
              "station": "EP BOGARE / A",
              "voters": 335
            }
          ],
          "DADJAM": [
            {
              "station": "EP DADJAM / A",
              "voters": 185
            }
          ],
          "DEMSA": [
            {
              "station": "EP DEMSA / A",
              "voters": 817
            }
          ],
          "DJIRLADJE": [
            {
              "station": "EP DJIRLADJE / A",
              "voters": 300
            }
          ],
          "MAYEL": [
            {
              "station": "EP DJIRLADJE / A",
              "voters": 469
            }
          ],
          "DJARENDI": [
            {
              "station": "EP DJIRLADJE / A",
              "voters": 469
            }
          ],
          "GUIZIGARE": [
            {
              "station": "EP GASCHIGA / A",
              "voters": 1642
            }
          ],
          "KOLLERE": [
            {
              "station": "EP GASCHIGA / A",
              "voters": 3330
            }
          ],
          "MBAROUMA": [
            {
              "station": "EP GASCHIGA / A",
              "voters": 1003
            }
          ],
          "TCHIFFEL": [
            {
              "station": "EP GASCHIGA / A",
              "voters": 1369
            }
          ],
          "GONDJIGUI": [
            {
              "station": "EP KOLLERE / A",
              "voters": 658
            }
          ],
          "LAINDE": [
            {
              "station": "EP KOLLERE / A",
              "voters": 1183
            }
          ],
          "LOUGGA": [
            {
              "station": "EP KOLLERE / A",
              "voters": 658
            }
          ],
          "HORI": [
            {
              "station": "EP KOLLERE / A",
              "voters": 658
            }
          ],
          "BOCKI": [
            {
              "station": "EP KOLLERE / A",
              "voters": 658
            }
          ],
          "NIBANGO": [
            {
              "station": "EP KOSSOUMO / A",
              "voters": 486
            }
          ],
          "BOUBA": [
            {
              "station": "EP KOSSOUMO / A",
              "voters": 486
            }
          ],
          "GNAKI": [
            {
              "station": "EP KOSSOUMO / A",
              "voters": 486
            }
          ],
          "MAYAMI": [
            {
              "station": "EP MAYAMI / A",
              "voters": 825
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP MBILLA / A",
              "voters": 373
            }
          ],
          "SADOU": [
            {
              "station": "EP MBILLA / A",
              "voters": 373
            }
          ],
          "MBILLA": [
            {
              "station": "EP MBILLA / A",
              "voters": 373
            }
          ],
          "TIRCI": [
            {
              "station": "EP MBILLA / A",
              "voters": 628
            }
          ],
          "BOBBO": [
            {
              "station": "EP OURO HARISSOU / A",
              "voters": 447
            }
          ],
          "ININE": [
            {
              "station": "EP OURO HARISSOU / A",
              "voters": 570
            }
          ],
          "OURO-": [
            {
              "station": "EP OURO HARISSOU / A",
              "voters": 447
            }
          ],
          "HARISSOU": [
            {
              "station": "EP OURO HARISSOU / A",
              "voters": 447
            }
          ],
          "MALLOUM": [
            {
              "station": "EP OURO MALLOUM / A",
              "voters": 654
            }
          ],
          "TCHAKA": [
            {
              "station": "EP OURO TCHAKA / A",
              "voters": 494
            }
          ],
          "HOSSERE": [
            {
              "station": "EP PAKETE / A",
              "voters": 759
            }
          ],
          "FARAOU": [
            {
              "station": "EP PAKETE / A",
              "voters": 759
            }
          ],
          "PAKETE": [
            {
              "station": "EP PAKETE / A",
              "voters": 520
            }
          ],
          "ALIM": [
            {
              "station": "EP POMLA HAMAYERO / A",
              "voters": 370
            }
          ],
          "POMLA-HAMAYERO": [
            {
              "station": "EP POMLA HAMAYERO / A",
              "voters": 370
            }
          ],
          "POMLA-MANGA": [
            {
              "station": "EP POMLA MANGA / A",
              "voters": 918
            }
          ],
          "KESSOURE": [
            {
              "station": "EP TAPARE / A",
              "voters": 1064
            }
          ],
          "MAYO": [
            {
              "station": "EP TAPARE / A",
              "voters": 1479
            }
          ],
          "BORORO": [
            {
              "station": "EP TAPARE / A",
              "voters": 578
            }
          ],
          "NGALABA": [
            {
              "station": "EP TAPARE / A",
              "voters": 578
            }
          ],
          "TAPARE": [
            {
              "station": "EP TAPARE / A",
              "voters": 578
            }
          ],
          "MOUFOU": [
            {
              "station": "EP TCHIFFEL / A",
              "voters": 366
            }
          ],
          "KOUBAWOL": [
            {
              "station": "EP TONTONGO / A",
              "voters": 641
            }
          ],
          "LOSSI": [
            {
              "station": "EP TONTONGO / A",
              "voters": 641
            }
          ],
          "TONTONGO": [
            {
              "station": "EP TONTONGO / A",
              "voters": 641
            }
          ],
          "BOUTALI": [
            {
              "station": "EP TORO / A",
              "voters": 260
            }
          ],
          "TORO": [
            {
              "station": "EP TORO / A",
              "voters": 260
            }
          ],
          "ECOLE": [
            {
              "station": "EP TORO / A",
              "voters": 260
            }
          ],
          "TORO-CENTRE": [
            {
              "station": "EP TORO / A",
              "voters": 349
            }
          ],
          "BARKEHI": [
            {
              "station": "ESPL CHEF BARKEHI / A",
              "voters": 161
            }
          ],
          "BAOU": [
            {
              "station": "ESPL CHEF BASCHEORE / A",
              "voters": 726
            }
          ],
          "BASCHEORE": [
            {
              "station": "ESPL CHEF BASCHEORE / A",
              "voters": 567
            }
          ],
          "BOLKI": [
            {
              "station": "ESPL CHEF BOLKI / A",
              "voters": 334
            }
          ],
          "LONDEROU": [
            {
              "station": "ESPL CHEF LONDEROU / A",
              "voters": 191
            }
          ],
          "MAYO-DOUMSI": [
            {
              "station": "ESPL CHEF MAYO DOUMSI / A",
              "voters": 786
            }
          ],
          "DALAN": [
            {
              "station": "ESPL CHEF MAYO DOUMSI / A",
              "voters": 786
            }
          ],
          "DJAMAN": [
            {
              "station": "ESPL CHEF MAYO DOUMSI / A",
              "voters": 786
            }
          ],
          "MAYO-SAHEL": [
            {
              "station": "ESPL CHEF MAYO SAHEL / A",
              "voters": 452
            }
          ],
          "KATAKO": [
            {
              "station": "ESPL CHEF NGOUTCHOUMI / A",
              "voters": 168
            }
          ],
          "NGOUTCHOUMI": [
            {
              "station": "ESPL CHEF NGOUTCHOUMI / A",
              "voters": 168
            }
          ],
          "GADJI": [
            {
              "station": "ESPL CHEF OURO GADJI / A",
              "voters": 260
            }
          ],
          "IYA": [
            {
              "station": "ESPL CHEF OURO IYA / A",
              "voters": 258
            }
          ],
          "LADAN": [
            {
              "station": "ESPL CHEF SONDJILO / A",
              "voters": 283
            }
          ],
          "SONDJILO": [
            {
              "station": "ESPL CHEF SONDJILO / A",
              "voters": 283
            }
          ],
          "ALHADJI": [
            {
              "station": "ESPL CHEF YARMI / A",
              "voters": 362
            }
          ],
          "BOBBOYE": [
            {
              "station": "ESPL CHEF YARMI / A",
              "voters": 362
            }
          ],
          "DJAH": [
            {
              "station": "ESPL CHEF YARMI / A",
              "voters": 362
            }
          ],
          "YARMI": [
            {
              "station": "ESPL CHEF YARMI / A",
              "voters": 620
            }
          ]
        },
        "LAGDO": {
          "BAINAWA": [
            {
              "station": "EP AMRASSA / A",
              "voters": 779
            }
          ],
          "BAME": [
            {
              "station": "EP AMRASSA / A",
              "voters": 11294
            }
          ],
          "DJOLA": [
            {
              "station": "EP AMRASSA / A",
              "voters": 779
            }
          ],
          "LAINDE": [
            {
              "station": "EP AMRASSA / A",
              "voters": 1369
            }
          ],
          "KAPSIKI": [
            {
              "station": "EP AMRASSA / A",
              "voters": 3148
            }
          ],
          "SANGUERE": [
            {
              "station": "EP AMRASSA / A",
              "voters": 779
            }
          ],
          "BADANKALI": [
            {
              "station": "EP BADANKALI / A",
              "voters": 2167
            }
          ],
          "CAMP": [
            {
              "station": "EP BADANKALI / A",
              "voters": 5544
            }
          ],
          "CHANTIER": [
            {
              "station": "EP BADANKALI / A",
              "voters": 5179
            }
          ],
          "CHINOIS": [
            {
              "station": "EP BADANKALI / A",
              "voters": 5179
            }
          ],
          "KOKRA": [
            {
              "station": "EP BADANKALI / A",
              "voters": 2167
            }
          ],
          "SOULEDE": [
            {
              "station": "EP BADANKALI / A",
              "voters": 2167
            }
          ],
          "BAKONA": [
            {
              "station": "EP BAKONA / A",
              "voters": 889
            }
          ],
          "BALDA": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 333
            }
          ],
          "LORI": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 333
            }
          ],
          "LOKORO": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 333
            }
          ],
          "MALOMBALI": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 333
            }
          ],
          "MADA": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 561
            }
          ],
          "YIDE": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 561
            }
          ],
          "SAMO": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 1122
            }
          ],
          "MAFA": [
            {
              "station": "EP BALDA LORI LOKORO / A",
              "voters": 561
            }
          ],
          "SABONGARI": [
            {
              "station": "EP BAME / A",
              "voters": 3099
            }
          ],
          "TOUBORO": [
            {
              "station": "EP BAME / A",
              "voters": 2252
            }
          ],
          "BESSOUM": [
            {
              "station": "EP BESSOUM / A",
              "voters": 632
            }
          ],
          "FOULAYE": [
            {
              "station": "EP BESSOUM / A",
              "voters": 837
            }
          ],
          "BOKASSA": [
            {
              "station": "EP BILLINGUE LAGDO / A",
              "voters": 2012
            }
          ],
          "MAFARE": [
            {
              "station": "EP BILLINGUE LAGDO / A",
              "voters": 2441
            }
          ],
          "PITOARE": [
            {
              "station": "EP BILLINGUE LAGDO / A",
              "voters": 2012
            }
          ],
          "BOULEL": [
            {
              "station": "EP BOULEL / A",
              "voters": 1865
            }
          ],
          "BOUMEDJE": [
            {
              "station": "EP BOUMEDJE / A",
              "voters": 2130
            }
          ],
          "BOURKINA": [
            {
              "station": "EP BOURKINA / A",
              "voters": 429
            }
          ],
          "GUERE": [
            {
              "station": "EP BOURKINA / A",
              "voters": 664
            }
          ],
          "PROJET": [
            {
              "station": "EP CAMP PROJET / A",
              "voters": 365
            }
          ],
          "WINDE-": [
            {
              "station": "EP CAMP PROJET / A",
              "voters": 365
            }
          ],
          "GADOUROU": [
            {
              "station": "EP CAMP PROJET / A",
              "voters": 365
            }
          ],
          "NA'ARI": [
            {
              "station": "EP CARREFOUR NA'ARI / A",
              "voters": 1802
            }
          ],
          "POLI": [
            {
              "station": "EP CARREFOUR POLI / A",
              "voters": 362
            }
          ],
          "MAMTIBA": [
            {
              "station": "EP CARREFOUR POLI / A",
              "voters": 362
            }
          ],
          "DINGALE": [
            {
              "station": "EP DINGALE / A",
              "voters": 785
            }
          ],
          "KESME": [
            {
              "station": "EP DINGALE / A",
              "voters": 785
            }
          ],
          "DJALINGO": [
            {
              "station": "EP DJALINGO KAPSIKI / A",
              "voters": 638
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 504
            }
          ],
          "BICHARI": [
            {
              "station": "EP DJANGA / A",
              "voters": 520
            }
          ],
          "DJANGA": [
            {
              "station": "EP DJANGA / A",
              "voters": 520
            }
          ],
          "DOURI": [
            {
              "station": "EP DJAOURO DOURI / A",
              "voters": 922
            }
          ],
          "DANBI": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "DJOULOL": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "BOKI": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "HARANDE": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "LABBO": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 2075
            }
          ],
          "OURO-YANGA": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "YAMEDA": [
            {
              "station": "EP DJOULOL BOCKI / A",
              "voters": 851
            }
          ],
          "NOKKA": [
            {
              "station": "EP DO- BOULEL V / A",
              "voters": 263
            }
          ],
          "GADJA": [
            {
              "station": "EP GADJA GADJA / A",
              "voters": 744
            }
          ],
          "NOUVRI": [
            {
              "station": "EP GADJA GADJA / A",
              "voters": 771
            }
          ],
          "TAMBA": [
            {
              "station": "EP GADJA GADJA / A",
              "voters": 1890
            }
          ],
          "GOUDRON": [
            {
              "station": "EP GADJA GADJA / A",
              "voters": 771
            }
          ],
          "LADDE": [
            {
              "station": "EP GADJA GADJA / A",
              "voters": 1173
            }
          ],
          "GADJI": [
            {
              "station": "EP GOUNA / A",
              "voters": 3230
            }
          ],
          "SALA": [
            {
              "station": "EP GOUNA / A",
              "voters": 3230
            }
          ],
          "GOUDI": [
            {
              "station": "EP GOUNA / A",
              "voters": 3230
            }
          ],
          "TOUPOURIRE": [
            {
              "station": "EP GOUNA / A",
              "voters": 3414
            }
          ],
          "GUIZIGA": [
            {
              "station": "EP GOUNA GUIZIGA / A",
              "voters": 479
            }
          ],
          "BANTARE": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1363
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 3115
            }
          ],
          "RIAO": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1951
            }
          ],
          "COL": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1363
            }
          ],
          "EST": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1363
            }
          ],
          "DOKA": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1937
            }
          ],
          "GOUNOUGOU": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1363
            }
          ],
          "LAMERE": [
            {
              "station": "EP GOUNOUGOU / A",
              "voters": 1363
            }
          ],
          "ZERA": [
            {
              "station": "EP HOULA II ZERA / A",
              "voters": 398
            }
          ],
          "KAIWAN": [
            {
              "station": "EP KAIWAN / A",
              "voters": 473
            }
          ],
          "DJABAMA": [
            {
              "station": "EP KATE / A",
              "voters": 1273
            }
          ],
          "DJARAKO": [
            {
              "station": "EP KATE / A",
              "voters": 1273
            }
          ],
          "KATE": [
            {
              "station": "EP KATE / A",
              "voters": 1273
            }
          ],
          "NIGERIARE": [
            {
              "station": "EP KATE / A",
              "voters": 1273
            }
          ],
          "CITE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 5213
            }
          ],
          "'A'": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 5213
            }
          ],
          "AES/SONEL": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 5213
            }
          ],
          "DJIPPORDE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 7820
            }
          ],
          "DOUALARE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "DYNANIQUE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "QTIER": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "LAGON": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "BLEU": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "ARABE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "LAMORDE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "MAROUARE": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 10427
            }
          ],
          "MOUSGOUM": [
            {
              "station": "EP LAGDO GROUPE I / A",
              "voters": 1031
            }
          ],
          "CARRIERE": [
            {
              "station": "EP LAGDO GROUPE II / A",
              "voters": 3012
            }
          ],
          "MOUFOURE": [
            {
              "station": "EP LAGDO GROUPE II / A",
              "voters": 3012
            }
          ],
          "DOLE": [
            {
              "station": "EP LAGDO GROUPE II / A",
              "voters": 3718
            }
          ],
          "VENEZ": [
            {
              "station": "EP LAGDO GROUPE II / A",
              "voters": 3012
            }
          ],
          "VOIR": [
            {
              "station": "EP LAGDO GROUPE II / A",
              "voters": 3012
            }
          ],
          "MADAGALIRE": [
            {
              "station": "EP LAINDE LAGDO / A",
              "voters": 291
            }
          ],
          "OURO-BELDOUM": [
            {
              "station": "EP LAINDE LAGDO / A",
              "voters": 291
            }
          ],
          "LAINDE-TCHITTA": [
            {
              "station": "EP LAINDE TCHITTA / A",
              "voters": 407
            }
          ],
          "LOUGOL": [
            {
              "station": "EP LOUGOL BAME / A",
              "voters": 684
            }
          ],
          "YOLDEO": [
            {
              "station": "EP LOUGOL BAME / A",
              "voters": 684
            }
          ],
          "MADABA": [
            {
              "station": "EP MADABA GOUNA / A",
              "voters": 271
            }
          ],
          "PANA": [
            {
              "station": "EP MADABA GOUNA / A",
              "voters": 271
            }
          ],
          "MATAL": [
            {
              "station": "EP MADABA GOUNA / A",
              "voters": 271
            }
          ],
          "DOUNGOUSS": [
            {
              "station": "EP MADAGASCAR II / A",
              "voters": 416
            }
          ],
          "GARBA": [
            {
              "station": "EP MADAGASCAR II / A",
              "voters": 416
            }
          ],
          "KAOUNA": [
            {
              "station": "EP MADAGASCAR II / A",
              "voters": 483
            }
          ],
          "MADAGASCAR": [
            {
              "station": "EP MADAGASCAR II / A",
              "voters": 551
            }
          ],
          "OURO-KALDJIA": [
            {
              "station": "EP MADAGASCAR II / A",
              "voters": 416
            }
          ],
          "MADAGASCAR-GOUNA": [
            {
              "station": "EP MADAGASCAR-GOUNA / A",
              "voters": 22
            }
          ],
          "MADAGASKAR": [
            {
              "station": "EP MADAGASKAR I / A",
              "voters": 202
            }
          ],
          "MADJADOU": [
            {
              "station": "EP MADJADOU / A",
              "voters": 817
            }
          ],
          "MAYO-BOCKI": [
            {
              "station": "EP MAYO BOCKI NA'ARI / A",
              "voters": 689
            }
          ],
          "BAH-ADJI": [
            {
              "station": "EP MAYO-BOUCKI / A",
              "voters": 2018
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO-BOUCKI / A",
              "voters": 5167
            }
          ],
          "BOUCKI": [
            {
              "station": "EP MAYO-BOUCKI / A",
              "voters": 4049
            }
          ],
          "MAYO-BOUCKI": [
            {
              "station": "EP MAYO-BOUCKI / A",
              "voters": 2018
            }
          ],
          "GOUNA": [
            {
              "station": "EP MAYO-BOUCKI / A",
              "voters": 12214
            }
          ],
          "MAYO-MBAY": [
            {
              "station": "EP MAYO-MBAY GUERE / A",
              "voters": 10
            }
          ],
          "MBELLA": [
            {
              "station": "EP MBELLA GOUNA / A",
              "voters": 536
            }
          ],
          "FIRA": [
            {
              "station": "EP MBENGUI / A",
              "voters": 548
            }
          ],
          "BAKA": [
            {
              "station": "EP MBENGUI / A",
              "voters": 861
            }
          ],
          "MBENGUI": [
            {
              "station": "EP MBENGUI / A",
              "voters": 548
            }
          ],
          "NAPANLA": [
            {
              "station": "EP NAPANLA / A",
              "voters": 389
            }
          ],
          "NELBI": [
            {
              "station": "EP NELBI / A",
              "voters": 294
            }
          ],
          "DOMAYO": [
            {
              "station": "EP OURO BARRIERE / A",
              "voters": 583
            }
          ],
          "BARRIERE": [
            {
              "station": "EP OURO BARRIERE / A",
              "voters": 583
            }
          ],
          "ZAWADA": [
            {
              "station": "EP OURO BARRIERE / A",
              "voters": 583
            }
          ],
          "KATCHALA": [
            {
              "station": "EP OURO BOCKI / A",
              "voters": 324
            }
          ],
          "BOUTE": [
            {
              "station": "EP OURO BOCKI / A",
              "voters": 324
            }
          ],
          "BOCKI": [
            {
              "station": "EP OURO BOCKI / A",
              "voters": 324
            }
          ],
          "DAGUEDJA": [
            {
              "station": "EP OURO BOCKI / A",
              "voters": 324
            }
          ],
          "MILIAGAI": [
            {
              "station": "EP OURO BOGNO / A",
              "voters": 527
            }
          ],
          "WOURO": [
            {
              "station": "EP OURO BOGNO / A",
              "voters": 527
            }
          ],
          "BOGNO": [
            {
              "station": "EP OURO BOGNO / A",
              "voters": 527
            }
          ],
          "MALLOUM": [
            {
              "station": "EP OURO MALLOUM / A",
              "voters": 376
            }
          ],
          "SOUBAGO": [
            {
              "station": "EP OURO MALLOUM / A",
              "voters": 376
            }
          ],
          "ANDRE": [
            {
              "station": "EP OURO-ANDRE / A",
              "voters": 633
            }
          ],
          "BADJIDDA": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 847
            }
          ],
          "LABAKRI": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 1015
            }
          ],
          "BASSI": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 1015
            }
          ],
          "BOBOA": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 847
            }
          ],
          "TCHOUFFI": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 1015
            }
          ],
          "OURO-DONKA": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 847
            }
          ],
          "SIRLAWE": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 2259
            }
          ],
          "TCHAKARE": [
            {
              "station": "EP OURO-BOBOA / A",
              "voters": 847
            }
          ],
          "OUGANDA": [
            {
              "station": "EP OURO-DJIDDA / A",
              "voters": 425
            }
          ],
          "OURO-DJIDDA": [
            {
              "station": "EP OURO-DJIDDA / A",
              "voters": 425
            }
          ],
          "LABARE": [
            {
              "station": "EP OURO-DOUKOUDJE / A",
              "voters": 1116
            }
          ],
          "DOUKOUDJE": [
            {
              "station": "EP OURO-DOUKOUDJE / A",
              "voters": 1116
            }
          ],
          "ARDO": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 2314
            }
          ],
          "KABIROU": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 2314
            }
          ],
          "DJAOURO-SOUDI": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 2314
            }
          ],
          "KONTIP": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 2475
            }
          ],
          "OURO": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 37198
            }
          ],
          "KESSOUM": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 19326
            }
          ],
          "BOBI": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 5536
            }
          ],
          "MADALAM": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 2314
            }
          ],
          "LAGDO": [
            {
              "station": "EP OURO-KESSOUM LAGDO / A",
              "voters": 4593
            }
          ],
          "III": [
            {
              "station": "EP OURO-LABBO III / A",
              "voters": 619
            }
          ],
          "MABO": [
            {
              "station": "EP OURO-TCHAIDO / A",
              "voters": 706
            }
          ],
          "OURO-TCHAIDO": [
            {
              "station": "EP OURO-TCHAIDO / A",
              "voters": 706
            }
          ],
          "SAMERE": [
            {
              "station": "EP OURO-TCHAIDO / A",
              "voters": 706
            }
          ],
          "OURO-YOTTOU": [
            {
              "station": "EP OURO-YOTTOU / A",
              "voters": 214
            }
          ],
          "BANANA": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "DJABA": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "RABINGA": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "MANAWASSI": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "MAROURE": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "MOUNDANG": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "TOUPOURI": [
            {
              "station": "EP RABINGHA / A",
              "voters": 1731
            }
          ],
          "TONGO": [
            {
              "station": "EP TONGO / A",
              "voters": 2604
            }
          ],
          "BADJAOULE": [
            {
              "station": "ESPL CHEF BADJAOULE / A",
              "voters": 586
            }
          ],
          "CENTRE": [
            {
              "station": "ESPL CHEF BADJAOULE / A",
              "voters": 1128
            }
          ],
          "BAJAOLE": [
            {
              "station": "ESPL CHEF BADJAOULE MBOUM / A",
              "voters": 265
            }
          ],
          "MBOUM": [
            {
              "station": "ESPL CHEF BADJAOULE MBOUM / A",
              "voters": 265
            }
          ],
          "DOULIMI": [
            {
              "station": "ESPL CHEF DOULOUMI SANDA / A",
              "voters": 443
            }
          ],
          "SANDA": [
            {
              "station": "ESPL CHEF DOULOUMI SANDA / A",
              "voters": 443
            }
          ],
          "GARWAWO": [
            {
              "station": "ESPL CHEF GARWAWO / A",
              "voters": 179
            }
          ],
          "KEBI": [
            {
              "station": "ESPL CHEF KEBI / A",
              "voters": 153
            }
          ],
          "KOUROUNGOU": [
            {
              "station": "ESPL CHEF KOUROUNGOU / A",
              "voters": 179
            }
          ],
          "LEGUI": [
            {
              "station": "ESPL CHEF LOUGA BACHI / B",
              "voters": 80
            }
          ],
          "LOUGA": [
            {
              "station": "ESPL CHEF LOUGA BACHI / B",
              "voters": 80
            }
          ],
          "BACHI": [
            {
              "station": "ESPL CHEF LOUGA BACHI / B",
              "voters": 80
            }
          ],
          "PIKBA": [
            {
              "station": "ESPL CHEF LOUGA BACHI / B",
              "voters": 348
            }
          ],
          "HOSSERE": [
            {
              "station": "ESPL CHEF LOUGA BACHI / B",
              "voters": 348
            }
          ],
          "MADJALISSA": [
            {
              "station": "ESPL CHEF MADJALISSA / A",
              "voters": 297
            }
          ],
          "BAMSI": [
            {
              "station": "ESPL CHEF MAYO DJARENDI / A",
              "voters": 343
            }
          ],
          "DJARENDI": [
            {
              "station": "ESPL CHEF MAYO DJARENDI / A",
              "voters": 343
            }
          ],
          "DJABE": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 814
            }
          ],
          "DJAOURO": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 1154
            }
          ],
          "ALIOUM": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "HANTA": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "OUSMAN": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "SEINI": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "BOUGOUDOUM": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "MALI": [
            {
              "station": "ESPL CHEF MAYO SEINI / A",
              "voters": 266
            }
          ],
          "MBAY": [
            {
              "station": "ESPL CHEF MAYO-MBAY / A",
              "voters": 778
            }
          ],
          "MBALMAYO": [
            {
              "station": "ESPL CHEF MAYO-MBAY / A",
              "voters": 335
            }
          ],
          "GNIEBE": [
            {
              "station": "ESPL CHEF NASSARAO BOUMEDJE / A",
              "voters": 860
            }
          ],
          "BAMERE": [
            {
              "station": "ESPL CHEF OURO DJARMA / A",
              "voters": 197
            }
          ],
          "OURO-DJARMA": [
            {
              "station": "ESPL CHEF OURO DJARMA / A",
              "voters": 1014
            }
          ],
          "DORE": [
            {
              "station": "ESPL CHEF OURO MANDA / A",
              "voters": 905
            }
          ],
          "MANDA": [
            {
              "station": "ESPL CHEF OURO MANDA / A",
              "voters": 405
            }
          ],
          "RONGONDOM": [
            {
              "station": "ESPL CHEF RONGONDOM / A",
              "voters": 166
            }
          ],
          "DJAORO": [
            {
              "station": "ESPL CHEF SABOREY / A",
              "voters": 1972
            }
          ],
          "DASSILI": [
            {
              "station": "ESPL CHEF SABOREY / A",
              "voters": 218
            }
          ],
          "LIFERI": [
            {
              "station": "ESPL CHEF SABOREY / A",
              "voters": 316
            }
          ],
          "SABOREY": [
            {
              "station": "ESPL CHEF SABOREY / A",
              "voters": 218
            }
          ],
          "SORKERE": [
            {
              "station": "ESPL CHEF SORKERE / A",
              "voters": 126
            }
          ],
          "DANHOU": [
            {
              "station": "ESPL CHEF TOURA NOKKA / A",
              "voters": 483
            }
          ],
          "TOULOUM": [
            {
              "station": "ESPL CHEF TOURA NOKKA / A",
              "voters": 667
            }
          ],
          "TOURA": [
            {
              "station": "ESPL CHEF TOURA NOKKA / A",
              "voters": 562
            }
          ],
          "NOCKA": [
            {
              "station": "ESPL CHEF TOURA NOKKA / A",
              "voters": 299
            }
          ],
          "MADARE": [
            {
              "station": "ESPL CHEF WOUBAO / A",
              "voters": 360
            }
          ],
          "MADOUMARE": [
            {
              "station": "ESPL CHEF WOUBAO / A",
              "voters": 360
            }
          ],
          "WOUBAO": [
            {
              "station": "ESPL CHEF WOUBAO / A",
              "voters": 360
            }
          ],
          "AGORMA": [
            {
              "station": "ESPL CHEF YAGADI / A",
              "voters": 901
            }
          ],
          "GUIRDE": [
            {
              "station": "ESPL CHEF YAGADI / A",
              "voters": 901
            }
          ],
          "KABAWA": [
            {
              "station": "ESPL CHEF YAGADI / A",
              "voters": 901
            }
          ],
          "YAGADI": [
            {
              "station": "ESPL CHEF YAGADI / A",
              "voters": 901
            }
          ],
          "DJABOU": [
            {
              "station": "ESPL CHEFDO-BOULEL SAMUEL / A",
              "voters": 90
            }
          ],
          "SAMUEL": [
            {
              "station": "ESPL CHEFDO-BOULEL SAMUEL / A",
              "voters": 90
            }
          ],
          "MOUFOU": [
            {
              "station": "ESPL CHEFDO-BOULEL SAMUEL / A",
              "voters": 90
            }
          ],
          "NASSARAO": [
            {
              "station": "ESPLANADE CHEF. NASSARAO BAME / A",
              "voters": 563
            }
          ],
          "BALANE": [
            {
              "station": "LYCEE RABINGHA / A",
              "voters": 1354
            }
          ],
          "RABINGHA": [
            {
              "station": "LYCEE RABINGHA / A",
              "voters": 14071
            }
          ],
          "DJOURDE": [
            {
              "station": "LYCEE RABINGHA / A",
              "voters": 1354
            }
          ],
          "LOUGERE": [
            {
              "station": "LYCEE RABINGHA / A",
              "voters": 1354
            }
          ]
        },
        "MAYO-HOURNA": {
          "WINDE": [
            {
              "station": "CETIC DE NAKONG / A",
              "voters": 356
            }
          ],
          "GALDIMA": [
            {
              "station": "CETIC DE NAKONG / A",
              "voters": 209
            }
          ],
          "ABBA": [
            {
              "station": "CETIC DE NAKONG / A",
              "voters": 209
            }
          ],
          "GADA": [
            {
              "station": "E.P. DE TCHARATCHE GADA MAYO / A",
              "voters": 490
            }
          ],
          "KODOGOU": [
            {
              "station": "EFA KODOGOU / A",
              "voters": 359
            }
          ],
          "BANGLI": [
            {
              "station": "EP BANGLI / A",
              "voters": 579
            }
          ],
          "DJABAWA": [
            {
              "station": "EP DJABAWA / A",
              "voters": 287
            }
          ],
          "DJILO": [
            {
              "station": "EP DJABAWA / A",
              "voters": 287
            }
          ],
          "GUERETE": [
            {
              "station": "EP GUERETE / A",
              "voters": 661
            }
          ],
          "GUIBDJOL": [
            {
              "station": "EP GUIBDJOL / A",
              "voters": 1180
            }
          ],
          "LOUGUERE": [
            {
              "station": "EP LOUGGUERE - MOUTE / A",
              "voters": 339
            }
          ],
          "MOUTE": [
            {
              "station": "EP LOUGGUERE - MOUTE / A",
              "voters": 339
            }
          ],
          "MALAPE": [
            {
              "station": "EP MALAPE / A",
              "voters": 622
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO NGABBOU / A",
              "voters": 816
            }
          ],
          "NGABBOU": [
            {
              "station": "EP MAYO NGABBOU / A",
              "voters": 326
            }
          ],
          "MBILLASSI": [
            {
              "station": "EP MBILASSI OURO-GARGA / A",
              "voters": 174
            }
          ],
          "OURO-GARGA": [
            {
              "station": "EP MBILASSI OURO-GARGA / A",
              "voters": 174
            }
          ],
          "NAKONG": [
            {
              "station": "EP NAKONG / A",
              "voters": 1440
            }
          ],
          "NDAOU": [
            {
              "station": "EP NDAOU / A",
              "voters": 611
            }
          ],
          "SALAMAN": [
            {
              "station": "EP OURO SALAMAN / A",
              "voters": 91
            }
          ],
          "OURO-ARDO": [
            {
              "station": "EP OURO-ARDO / A",
              "voters": 674
            }
          ],
          "SABONGARI": [
            {
              "station": "EP SABONGARI OURO GARGA / A",
              "voters": 366
            }
          ],
          "GARGA": [
            {
              "station": "EP SABONGARI OURO GARGA / A",
              "voters": 366
            }
          ],
          "TAIPE": [
            {
              "station": "EP TAIPE / A",
              "voters": 314
            }
          ],
          "TAWOI": [
            {
              "station": "EP TAWOI / A",
              "voters": 556
            }
          ],
          "KESSOUM": [
            {
              "station": "EP TCHARATCHE / A",
              "voters": 2061
            }
          ],
          "TCHARATCHE": [
            {
              "station": "EP TCHARATCHE / A",
              "voters": 1970
            }
          ],
          "BAKASSI": [
            {
              "station": "ESPL CHEF BOUALO / A",
              "voters": 1071
            }
          ],
          "BOUALO": [
            {
              "station": "ESPL CHEF BOUALO / A",
              "voters": 251
            }
          ],
          "PATARA": [
            {
              "station": "ESPL CHEF BOUALO / A",
              "voters": 911
            }
          ],
          "MBERE": [
            {
              "station": "ESPL CHEF MBERE DJALINGO / A",
              "voters": 320
            }
          ],
          "DJALINGO": [
            {
              "station": "ESPL CHEF MBERE DJALINGO / A",
              "voters": 320
            }
          ],
          "NGAWA": [
            {
              "station": "ESPL CHEF NGAWA / A",
              "voters": 80
            }
          ],
          "DJAMTARI": [
            {
              "station": "ESPL CHEF OURO BOBBO / A",
              "voters": 55
            }
          ],
          "MBOULMBOULDIRE": [
            {
              "station": "ESPL CHEF OURO BOBBO / A",
              "voters": 55
            }
          ],
          "DJOUMO": [
            {
              "station": "ESPL CHEF OURO-MALLOUM / A",
              "voters": 103
            }
          ],
          "OURO-MALLOUM": [
            {
              "station": "ESPL CHEF OURO-MALLOUM / A",
              "voters": 103
            }
          ],
          "PADANG": [
            {
              "station": "ESPL CHEF PADANG / A",
              "voters": 83
            }
          ],
          "WAFANGO": [
            {
              "station": "ESPL CHEF WAFANGO / A",
              "voters": 141
            }
          ],
          "GOLOMBE": [
            {
              "station": "ESPL EP GOLOMBE / A",
              "voters": 96
            }
          ],
          "BARNDAKE": [
            {
              "station": "LYCEE DE BARNDAKE / A",
              "voters": 3492
            }
          ],
          "HODANGO": [
            {
              "station": "LYCEE DE BARNDAKE / A",
              "voters": 1714
            }
          ],
          "OURO": [
            {
              "station": "LYCEE DE BARNDAKE / A",
              "voters": 4249
            }
          ],
          "SIDDIKI": [
            {
              "station": "LYCEE DE BARNDAKE / A",
              "voters": 1522
            }
          ]
        },
        "NGONG": {
          "ADAMAOUA": [
            {
              "station": "EP ADAMAOUA / A",
              "voters": 590
            }
          ],
          "BAROUME": [
            {
              "station": "EP BAROUME / A",
              "voters": 652
            }
          ],
          "BINDJOUMI": [
            {
              "station": "EP BINDJOUMI / A",
              "voters": 1646
            }
          ],
          "LELE": [
            {
              "station": "EP BINDJOUMI / A",
              "voters": 823
            }
          ],
          "DIFERGOL": [
            {
              "station": "EP DIFERGOL / A",
              "voters": 392
            }
          ],
          "DJEFATOU": [
            {
              "station": "EP DJEFATOU / A",
              "voters": 1301
            }
          ],
          "OURO": [
            {
              "station": "EP DJEFATOU / A",
              "voters": 5952
            }
          ],
          "NDEMRI": [
            {
              "station": "EP DJEFATOU / A",
              "voters": 2602
            }
          ],
          "MAFA": [
            {
              "station": "EP DJEFATOU / A",
              "voters": 4083
            }
          ],
          "MASSA": [
            {
              "station": "EP DJEFATOU / A",
              "voters": 3967
            }
          ],
          "GAINAKO": [
            {
              "station": "EP DOUKA GAINAKO / A",
              "voters": 289
            }
          ],
          "GOULONGO": [
            {
              "station": "EP DOUKA GAINAKO / A",
              "voters": 289
            }
          ],
          "DOUKA": [
            {
              "station": "EP DOUKA LONGO / A",
              "voters": 1864
            }
          ],
          "LONGO": [
            {
              "station": "EP DOUKA LONGO / A",
              "voters": 1864
            }
          ],
          "SABONGARI": [
            {
              "station": "EP DOUKA LONGO / A",
              "voters": 932
            }
          ],
          "TAMOUNDE": [
            {
              "station": "EP DOUKA LONGO / A",
              "voters": 932
            }
          ],
          "KAREWA": [
            {
              "station": "EP KAREWA / A",
              "voters": 3749
            }
          ],
          "NGONG": [
            {
              "station": "EP KAREWA / A",
              "voters": 16902
            }
          ],
          "LABBO": [
            {
              "station": "EP KAREWA / A",
              "voters": 1347
            }
          ],
          "KEINI": [
            {
              "station": "EP KEINI / A",
              "voters": 166
            }
          ],
          "KONDONG": [
            {
              "station": "EP KONDONG / A",
              "voters": 201
            }
          ],
          "KONE": [
            {
              "station": "EP KONE / A",
              "voters": 633
            }
          ],
          "KOUBADJE": [
            {
              "station": "EP KOUBADJE / A",
              "voters": 1208
            }
          ],
          "LAKA": [
            {
              "station": "EP LAINDE KAREWA / A",
              "voters": 716
            }
          ],
          "MADAGASKAR": [
            {
              "station": "EP LAINDE KAREWA / A",
              "voters": 716
            }
          ],
          "DJARENDI": [
            {
              "station": "EP LAINDE KAREWA / A",
              "voters": 716
            }
          ],
          "MEDJEREM": [
            {
              "station": "EP LAINDE KAREWA / A",
              "voters": 716
            }
          ],
          "TCHOUFI": [
            {
              "station": "EP LAINDE KAREWA / A",
              "voters": 716
            }
          ],
          "DJIKA": [
            {
              "station": "EP LAINDE MASSA / A",
              "voters": 1333
            }
          ],
          "LAINDE": [
            {
              "station": "EP LAINDE MASSA / A",
              "voters": 5166
            }
          ],
          "MAYO": [
            {
              "station": "EP LAINDE MASSA / A",
              "voters": 2977
            }
          ],
          "BANGAI": [
            {
              "station": "EP LAINDE MASSA / A",
              "voters": 1333
            }
          ],
          "TAPARE": [
            {
              "station": "EP LAINDE MASSA / A",
              "voters": 2349
            }
          ],
          "SOULEDE": [
            {
              "station": "EP LAINDE SOULEDE / A",
              "voters": 167
            }
          ],
          "KADOUNA": [
            {
              "station": "EP LANGUI / A",
              "voters": 1227
            }
          ],
          "LANGUI": [
            {
              "station": "EP LANGUI / A",
              "voters": 1227
            }
          ],
          "TCHEBOA": [
            {
              "station": "EP MAFA TCHEBOA / A",
              "voters": 4068
            }
          ],
          "MALLA": [
            {
              "station": "EP MALLA / A",
              "voters": 966
            }
          ],
          "MAPTO": [
            {
              "station": "EP MAPTO / A",
              "voters": 742
            }
          ],
          "NDJOLA": [
            {
              "station": "EP NDJOLA / A",
              "voters": 1096
            }
          ],
          "CENTRE": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "NGARGOU": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "DOUALARE": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "GNARDO": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "NGOURORE": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "NYONDITI": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "SILALI": [
            {
              "station": "EP NGARGOU / A",
              "voters": 311
            }
          ],
          "TARBA": [
            {
              "station": "EP TARBA / A",
              "voters": 414
            }
          ],
          "MBANWERE": [
            {
              "station": "EP ZIERA / A",
              "voters": 987
            }
          ],
          "HAIROU": [
            {
              "station": "EP ZIERA / A",
              "voters": 987
            }
          ],
          "ZIERA": [
            {
              "station": "EP ZIERA / A",
              "voters": 987
            }
          ],
          "DISSI": [
            {
              "station": "ESPL CHEF HOURO BOCKI DOMAYO / A",
              "voters": 928
            }
          ],
          "DOMAYO": [
            {
              "station": "ESPL CHEF HOURO BOCKI DOMAYO / A",
              "voters": 928
            }
          ],
          "KALFAI": [
            {
              "station": "ESPL CHEF KALFAI / A",
              "voters": 282
            }
          ],
          "SELIFA": [
            {
              "station": "ESPL CHEF SELIFA / A",
              "voters": 458
            }
          ],
          "WINDE": [
            {
              "station": "ESPL CHEF WINDE DJAMAN / A",
              "voters": 797
            }
          ],
          "DJAMAN": [
            {
              "station": "ESPL CHEF WINDE DJAMAN / A",
              "voters": 144
            }
          ],
          "BILIEL": [
            {
              "station": "ESPL EP BILIEL / A",
              "voters": 910
            }
          ],
          "KOKOUMI": [
            {
              "station": "ESPL EP KOKOUMI / A",
              "voters": 828
            }
          ],
          "TOUPOURI": [
            {
              "station": "ESPL EP KOKOUMI / A",
              "voters": 414
            }
          ],
          "NADOURA": [
            {
              "station": "ESPL EP NADOURA / A",
              "voters": 362
            }
          ],
          "HOURO": [
            {
              "station": "ESPL EP OURO BOCKI / A",
              "voters": 991
            }
          ],
          "BOCKI": [
            {
              "station": "ESPL EP OURO BOCKI / A",
              "voters": 1919
            }
          ],
          "WADJERE": [
            {
              "station": "ESPL EP TAMBADJAM / A",
              "voters": 347
            }
          ],
          "GOMSI": [
            {
              "station": "ESPL EP TSORKE / B",
              "voters": 454
            }
          ],
          "KATARKO": [
            {
              "station": "ESPL EP TSORKE / B",
              "voters": 88
            }
          ],
          "SOUKA": [
            {
              "station": "ESPL EP TSORKE / B",
              "voters": 88
            }
          ],
          "TSORKE": [
            {
              "station": "ESPL EP TSORKE / B",
              "voters": 1104
            }
          ],
          "MBOLTA": [
            {
              "station": "GIC SODECOTON MBOLTA / A",
              "voters": 217
            }
          ]
        },
        "PITOA": {
          "OURO": [
            {
              "station": "CEAC PITOA / A",
              "voters": 1147
            }
          ],
          "DJABBE": [
            {
              "station": "CEAC PITOA / A",
              "voters": 1147
            }
          ],
          "SODECOTON": [
            {
              "station": "CEAC PITOA / A",
              "voters": 1147
            }
          ],
          "LANGUI-YAWA": [
            {
              "station": "CHATEAU D'EAU LANGUI YAWA / A",
              "voters": 255
            }
          ],
          "BAMENDA": [
            {
              "station": "E.P. DE NIGERIARE SEKADE / A",
              "voters": 237
            }
          ],
          "POUSSANE": [
            {
              "station": "ECOLE PARENT DE POUSSANE / A",
              "voters": 197
            }
          ],
          "BABANGUEL": [
            {
              "station": "EP BABANGUEL / A",
              "voters": 753
            }
          ],
          "DJAIGA": [
            {
              "station": "EP BABANGUEL / A",
              "voters": 3669
            }
          ],
          "GOLLIRGA": [
            {
              "station": "EP BABANGUEL / A",
              "voters": 753
            }
          ],
          "GOULE": [
            {
              "station": "EP BABANGUEL / A",
              "voters": 1048
            }
          ],
          "BABAYE-CENTRE": [
            {
              "station": "EP BABAYE / A",
              "voters": 597
            }
          ],
          "BANDOUKI": [
            {
              "station": "EP BABAYE / A",
              "voters": 597
            }
          ],
          "GOLLORA": [
            {
              "station": "EP BABAYE / A",
              "voters": 597
            }
          ],
          "BABAYE": [
            {
              "station": "EP BABAYE / A",
              "voters": 597
            }
          ],
          "LOUGGUEREO": [
            {
              "station": "EP BABAYE / A",
              "voters": 1483
            }
          ],
          "WALEWOL-BOUSKI": [
            {
              "station": "EP BABAYE / A",
              "voters": 597
            }
          ],
          "BADJENGO-FOULBE": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2816
            }
          ],
          "BAINAWARE-BADJENGO": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "BAROUNA": [
            {
              "station": "EP BADJENGO / A",
              "voters": 3011
            }
          ],
          "GUIZIGARE": [
            {
              "station": "EP BADJENGO / A",
              "voters": 4607
            }
          ],
          "BADJENGO": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "LAGAM": [
            {
              "station": "EP BADJENGO / A",
              "voters": 4509
            }
          ],
          "BAINAWARE": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "MAYEL": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "-TOBARI": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "MOUNDANG-SOKANGA": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "NDIAM": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "SIWO": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "WALEWOL": [
            {
              "station": "EP BADJENGO / A",
              "voters": 5242
            }
          ],
          "WOURO-IBBI": [
            {
              "station": "EP BADJENGO / A",
              "voters": 2621
            }
          ],
          "BADJOUMA": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 8733
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 2873
            }
          ],
          "RADIER": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "BAHOI": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "DIRI": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "DJALINGO": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "DJIPPORDE-POUTCHOU": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "FOULBE": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 8095
            }
          ],
          "SEBORE": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 2442
            }
          ],
          "SOUKKOUNDE": [
            {
              "station": "EP BADJOUMA RADIER / A",
              "voters": 1888
            }
          ],
          "CENTRE": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 4433
            }
          ],
          "BOGORE": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "FORTY": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "MOUNDANGRE": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "BADJOUMA-CENTRE": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 6857
            }
          ],
          "OURO-BOCKI": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 3133
            }
          ],
          "TADO": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "OURO-ISSA": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "SOROM-KAIGAMA": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 1986
            }
          ],
          "TOUPOURIRE": [
            {
              "station": "EP BADJOUMA-CENTRE / A",
              "voters": 2803
            }
          ],
          "BANAYE": [
            {
              "station": "EP BANAYE / A",
              "voters": 399
            }
          ],
          "BANGRANG": [
            {
              "station": "EP BANGRANG / A",
              "voters": 357
            }
          ],
          "DJAOURO": [
            {
              "station": "EP BANGRANG / A",
              "voters": 947
            }
          ],
          "CHEF": [
            {
              "station": "EP BANGRANG / A",
              "voters": 357
            }
          ],
          "WAMBAI": [
            {
              "station": "EP BANGRANG / A",
              "voters": 357
            }
          ],
          "BE-LAMORDE": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "DACKEL": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "HAOUSSARE-BE": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "NASSARAO-BE": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "SOUARE": [
            {
              "station": "EP BE / A",
              "voters": 1631
            }
          ],
          "YAMA": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "SALLA": [
            {
              "station": "EP BE / A",
              "voters": 886
            }
          ],
          "BODJAL": [
            {
              "station": "EP BODJAL / A",
              "voters": 196
            }
          ],
          "BOULGOU": [
            {
              "station": "EP BOULGOU / A",
              "voters": 832
            }
          ],
          "MBERI": [
            {
              "station": "EP BOULGOU / A",
              "voters": 703
            }
          ],
          "BOULI": [
            {
              "station": "EP BOULI MAL ALIM / A",
              "voters": 541
            }
          ],
          "MAL": [
            {
              "station": "EP BOULI MAL ALIM / A",
              "voters": 244
            }
          ],
          "ALIM": [
            {
              "station": "EP BOULI MAL ALIM / A",
              "voters": 244
            }
          ],
          "BOULI-MANGO": [
            {
              "station": "EP BOULI MANGO / A",
              "voters": 401
            }
          ],
          "DJALINGO-MAIGARI": [
            {
              "station": "EP DJALINGO-MAIGARI / A",
              "voters": 360
            }
          ],
          "DJIDDE": [
            {
              "station": "EP DJIDDE / A",
              "voters": 317
            }
          ],
          "AMTE": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "DOLLA": [
            {
              "station": "EP DOLLA / A",
              "voters": 11522
            }
          ],
          "CARREFOUR-BARKA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "DELEM-DOLLA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "DJIMETTA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "GUIDJAROU": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "KORKA'": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "MAYO": [
            {
              "station": "EP DOLLA / A",
              "voters": 3259
            }
          ],
          "BORODJI": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "MONTAGNERE-DOLLA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "OURO-DJELANI": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "OURO-KESSOUM": [
            {
              "station": "EP DOLLA / A",
              "voters": 7417
            }
          ],
          "RAM-DOLLA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "TONGO-DOLLA": [
            {
              "station": "EP DOLLA / A",
              "voters": 1512
            }
          ],
          "WAFANGO": [
            {
              "station": "EP DOLLA / A",
              "voters": 4397
            }
          ],
          "DOLLERE": [
            {
              "station": "EP DOLLERE / A",
              "voters": 1492
            }
          ],
          "KAREWA": [
            {
              "station": "EP DOLLERE / A",
              "voters": 1492
            }
          ],
          "DOULOUMI": [
            {
              "station": "EP DOULOUMI / A",
              "voters": 484
            }
          ],
          "GADA": [
            {
              "station": "EP GADA MAYO / A",
              "voters": 576
            }
          ],
          "DOUMDE": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 745
            }
          ],
          "GUEBAKE": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 1490
            }
          ],
          "OURO-DJIYE": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 745
            }
          ],
          "-DALDAL": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 745
            }
          ],
          "SOUARE-MANGO": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 745
            }
          ],
          "ZACC": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 1644
            }
          ],
          "TINGLING": [
            {
              "station": "EP GUEBAKE / A",
              "voters": 1128
            }
          ],
          "DELEM": [
            {
              "station": "EP KEFERO / A",
              "voters": 201
            }
          ],
          "KEFERO": [
            {
              "station": "EP KEFERO / A",
              "voters": 201
            }
          ],
          "GNIBANGO": [
            {
              "station": "EP KIRIRAMBO / A",
              "voters": 352
            }
          ],
          "KIRIRAMBO": [
            {
              "station": "EP KIRIRAMBO / A",
              "voters": 352
            }
          ],
          "LOUMBOU": [
            {
              "station": "EP LOUMBOU / A",
              "voters": 302
            }
          ],
          "BAPARA": [
            {
              "station": "EP MBOR PARTIGE / A",
              "voters": 652
            }
          ],
          "KANGOU": [
            {
              "station": "EP MBOR PARTIGE / A",
              "voters": 652
            }
          ],
          "BAPARA-FOULBE": [
            {
              "station": "EP MBOR PARTIGE / A",
              "voters": 652
            }
          ],
          "MBOR": [
            {
              "station": "EP MBOR PARTIGE / A",
              "voters": 431
            }
          ],
          "PARTIGE": [
            {
              "station": "EP MBOR PARTIGE / A",
              "voters": 431
            }
          ],
          "NDEGA": [
            {
              "station": "EP NDEGA / A",
              "voters": 218
            }
          ],
          "NDOUDJA": [
            {
              "station": "EP NDOUDJA / A",
              "voters": 257
            }
          ],
          "WALLA": [
            {
              "station": "EP OUMOUA / A",
              "voters": 293
            }
          ],
          "DOUMDERE": [
            {
              "station": "EP OUMOUA / A",
              "voters": 293
            }
          ],
          "OUMOUA": [
            {
              "station": "EP OUMOUA / A",
              "voters": 293
            }
          ],
          "PENE": [
            {
              "station": "EP PENE / A",
              "voters": 888
            }
          ],
          "SOKANGA": [
            {
              "station": "EP PENE / A",
              "voters": 444
            }
          ],
          "SOUROU": [
            {
              "station": "EP PENE / A",
              "voters": 444
            }
          ],
          "GUIZIGARE-PITOA": [
            {
              "station": "EP PILOTE PITOA / A",
              "voters": 2450
            }
          ],
          "LOPERE-PITOA": [
            {
              "station": "EP PILOTE PITOA / A",
              "voters": 2450
            }
          ],
          "MOUNDANG": [
            {
              "station": "EP PILOTE PITOA / A",
              "voters": 2450
            }
          ],
          "SARA": [
            {
              "station": "EP PILOTE PITOA / A",
              "voters": 2450
            }
          ],
          "TOUPOURI": [
            {
              "station": "EP PILOTE PITOA / A",
              "voters": 2450
            }
          ],
          "BANTAHI": [
            {
              "station": "EP PITOA BOUNGUEL / A",
              "voters": 2312
            }
          ],
          "BOUNGUEL": [
            {
              "station": "EP PITOA BOUNGUEL / A",
              "voters": 2312
            }
          ],
          "RAM": [
            {
              "station": "EP RAM / A",
              "voters": 537
            }
          ],
          "NGAOUNDERERE": [
            {
              "station": "EP SABONGARI / A",
              "voters": 342
            }
          ],
          "SABONGARI": [
            {
              "station": "EP SABONGARI / A",
              "voters": 342
            }
          ],
          "SISSERI": [
            {
              "station": "EP SABONGARI / A",
              "voters": 342
            }
          ],
          "WINDE-GAROUA": [
            {
              "station": "EP SABONGARI / A",
              "voters": 342
            }
          ],
          "BAMENDA-SEKANDE": [
            {
              "station": "EP SEKANDE / A",
              "voters": 1054
            }
          ],
          "DJALINGO-SAMBO": [
            {
              "station": "EP SEKANDE / A",
              "voters": 817
            }
          ],
          "KOSSEYEL": [
            {
              "station": "EP SEKANDE / A",
              "voters": 1291
            }
          ],
          "DANEYEL": [
            {
              "station": "EP SEKANDE / A",
              "voters": 1291
            }
          ],
          "MONTAGNERE-SEKANDE": [
            {
              "station": "EP SEKANDE / A",
              "voters": 817
            }
          ],
          "NIGERIARE": [
            {
              "station": "EP SEKANDE / A",
              "voters": 1291
            }
          ],
          "SEKANDE": [
            {
              "station": "EP SEKANDE / A",
              "voters": 2688
            }
          ],
          "GOUNOUGOU": [
            {
              "station": "EP SONAYO / A",
              "voters": 287
            }
          ],
          "SONAYO": [
            {
              "station": "EP SONAYO / A",
              "voters": 574
            }
          ],
          "BASSINTA": [
            {
              "station": "EP TCHOLLARAM / A",
              "voters": 350
            }
          ],
          "MBOURA": [
            {
              "station": "EP TCHOLLARAM / A",
              "voters": 459
            }
          ],
          "OGNIA": [
            {
              "station": "EP TCHOLLARAM / A",
              "voters": 350
            }
          ],
          "TCHOLLARAM": [
            {
              "station": "EP TCHOLLARAM / A",
              "voters": 350
            }
          ],
          "TOKOMBERE": [
            {
              "station": "EP WAFANGO / A",
              "voters": 899
            }
          ],
          "WAFANGO-PITOA": [
            {
              "station": "EP WAFANGO / A",
              "voters": 899
            }
          ],
          "LANGUI": [
            {
              "station": "ESPL FETE LANGUI-CENTRE III / A",
              "voters": 461
            }
          ],
          "III": [
            {
              "station": "ESPL FETE LANGUI-CENTRE III / A",
              "voters": 461
            }
          ],
          "MBALARE": [
            {
              "station": "ESPL FETE LANGUI-CENTRE III / A",
              "voters": 490
            }
          ],
          "SOROM-TOSSI": [
            {
              "station": "ESPL FETE LANGUI-CENTRE III / A",
              "voters": 206
            }
          ],
          "WAPILWA": [
            {
              "station": "ESPL FETE LANGUI-CENTRE III / A",
              "voters": 206
            }
          ],
          "BALANE": [
            {
              "station": "LYCEE PITOA / A",
              "voters": 1384
            }
          ],
          "PITOA": [
            {
              "station": "LYCEE PITOA / A",
              "voters": 18053
            }
          ],
          "WINDE": [
            {
              "station": "LYCEE PITOA / A",
              "voters": 1384
            }
          ],
          "LIROMA": [
            {
              "station": "LYCEE PITOA / A",
              "voters": 1384
            }
          ],
          "TCHASKI": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 594
            }
          ],
          "HAOUSSARE-TCHASKI": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 297
            }
          ],
          "LANGUIRE": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 297
            }
          ],
          "MBARA": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 420
            }
          ],
          "NYABI": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 297
            }
          ],
          "SALMANA": [
            {
              "station": "MARCHE TCHASKI / A",
              "voters": 297
            }
          ],
          "LEBRI": [
            {
              "station": "PLACE FETE MAYO-LEBRI I / A",
              "voters": 1171
            }
          ],
          "MAYO-BANGAY": [
            {
              "station": "PLACE FETE MAYO-LEBRI I / A",
              "voters": 260
            }
          ],
          "MBOULOUWOL": [
            {
              "station": "PLACE FETE MBOULOUWOL / A",
              "voters": 243
            }
          ],
          "TORROYE": [
            {
              "station": "PLACE FETE TORROYE / A",
              "voters": 225
            }
          ]
        },
        "TOUROUA": {
          "DJEKARE": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 1427
            }
          ],
          "DOULIRE": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 247
            }
          ],
          "LAMORDE-TOUROUA": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 1427
            }
          ],
          "MAGADJIRE": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 1427
            }
          ],
          "OURO-BARKA": [
            {
              "station": "E.P. DE OURO-BARKA / A",
              "voters": 127
            }
          ],
          "BOGGUEL": [
            {
              "station": "EP BOGUEL / A",
              "voters": 540
            }
          ],
          "FORADJE": [
            {
              "station": "EP BOGUEL / A",
              "voters": 656
            }
          ],
          "SORBERE": [
            {
              "station": "EP BOGUEL / A",
              "voters": 540
            }
          ],
          "DJIRE": [
            {
              "station": "EP BOGUEL / A",
              "voters": 540
            }
          ],
          "BORONGO": [
            {
              "station": "EP BORONGO / A",
              "voters": 1067
            }
          ],
          "GARINKOURA": [
            {
              "station": "EP BORONGO / A",
              "voters": 1160
            }
          ],
          "IBARE": [
            {
              "station": "EP BORONGO / A",
              "voters": 1160
            }
          ],
          "KAREWA": [
            {
              "station": "EP BORONGO / A",
              "voters": 1160
            }
          ],
          "TONDIRE": [
            {
              "station": "EP BORONGO / A",
              "voters": 1160
            }
          ],
          "BOLI": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "BOUNDANG": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "FOULBE": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "GABAS": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "KOLMARI": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "KOULAWA": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 579
            }
          ],
          "OURO-SOUDDE": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "TOLKOMARI": [
            {
              "station": "EP BOUNDANG FOULBE / A",
              "voters": 336
            }
          ],
          "DAGUE": [
            {
              "station": "EP DAGUE / A",
              "voters": 696
            }
          ],
          "KOHI": [
            {
              "station": "EP DAGUE / A",
              "voters": 696
            }
          ],
          "MAYO-YARE": [
            {
              "station": "EP DAGUE / A",
              "voters": 903
            }
          ],
          "SIDIRI": [
            {
              "station": "EP DAGUE / A",
              "voters": 903
            }
          ],
          "DJOUTA-LEDDE": [
            {
              "station": "EP DJOUTA-LEDDE / A",
              "voters": 698
            }
          ],
          "OURO-HAIROU": [
            {
              "station": "EP DJOUTA-LEDDE / A",
              "voters": 1064
            }
          ],
          "DOUNDEHI": [
            {
              "station": "EP DOUNDEHI / A",
              "voters": 640
            }
          ],
          "HINGA": [
            {
              "station": "EP DOUNDEHI / A",
              "voters": 891
            }
          ],
          "HOLA": [
            {
              "station": "EP DOUNDEHI / A",
              "voters": 891
            }
          ],
          "ERGUE": [
            {
              "station": "EP ERGUE / A",
              "voters": 337
            }
          ],
          "HOLTCHI": [
            {
              "station": "EP ERGUE / A",
              "voters": 337
            }
          ],
          "MOUNDANRE": [
            {
              "station": "EP GR I TOUROUA / A",
              "voters": 1777
            }
          ],
          "OURO-KESSOUM/TOUROUA": [
            {
              "station": "EP GR I TOUROUA / A",
              "voters": 1777
            }
          ],
          "SEMTI": [
            {
              "station": "EP GR II TOUROUA / A",
              "voters": 1484
            }
          ],
          "OURO-KESSOUM": [
            {
              "station": "EP KAREWA / A",
              "voters": 93
            }
          ],
          "QUARTIER": [
            {
              "station": "EP KAREWA / A",
              "voters": 93
            }
          ],
          "BORORO": [
            {
              "station": "EP KAREWA / A",
              "voters": 93
            }
          ],
          "DJAMTARI": [
            {
              "station": "EP LONGO / A",
              "voters": 559
            }
          ],
          "KEDE": [
            {
              "station": "EP LONGO / A",
              "voters": 559
            }
          ],
          "LONGO": [
            {
              "station": "EP LONGO / A",
              "voters": 686
            }
          ],
          "MALITI": [
            {
              "station": "EP LONGO / A",
              "voters": 1245
            }
          ],
          "OURO": [
            {
              "station": "EP LONGO / A",
              "voters": 686
            }
          ],
          "BARKA": [
            {
              "station": "EP LONGO / A",
              "voters": 686
            }
          ],
          "LOUGOUNDE": [
            {
              "station": "EP LOUGOUNDE / A",
              "voters": 1080
            }
          ],
          "MAYO-KARLAYE": [
            {
              "station": "EP MAYO KARLAYE / A",
              "voters": 714
            }
          ],
          "BOULO": [
            {
              "station": "EP MAYO-OULO / A",
              "voters": 610
            }
          ],
          "OURO-FANDOU": [
            {
              "station": "EP OURO-FANDOU / A",
              "voters": 519
            }
          ],
          "DJALINGO": [
            {
              "station": "EP OURO-SEKEHI / A",
              "voters": 1135
            }
          ],
          "OURO-SEKEHI": [
            {
              "station": "EP OURO-SEKEHI / A",
              "voters": 1374
            }
          ],
          "KAFOUE": [
            {
              "station": "EP TCHIRKOLTCHI / A",
              "voters": 329
            }
          ],
          "KOSSEYEL": [
            {
              "station": "EP TCHIRKOLTCHI / A",
              "voters": 329
            }
          ],
          "TCHIRKOLTCHI": [
            {
              "station": "EP TCHIRKOLTCHI / A",
              "voters": 658
            }
          ],
          "BADANG": [
            {
              "station": "EPC BADANG / A",
              "voters": 795
            }
          ],
          "BAMA": [
            {
              "station": "EPC BADANG / A",
              "voters": 1405
            }
          ],
          "BOGARE": [
            {
              "station": "EPC BADANG / A",
              "voters": 795
            }
          ],
          "DARA": [
            {
              "station": "EPC BADANG / A",
              "voters": 1405
            }
          ],
          "NOKKA": [
            {
              "station": "EPC BADANG / A",
              "voters": 1405
            }
          ],
          "KAYA": [
            {
              "station": "EPC BADANG / A",
              "voters": 1405
            }
          ],
          "MAYO-OULO": [
            {
              "station": "EPC BADANG / A",
              "voters": 1405
            }
          ],
          "DJABEY": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "PATAGOLE": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "KAREHI": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "KOZA": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "LAFIARI": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "SIOUTIRKI": [
            {
              "station": "EPC KOZA II / A",
              "voters": 1249
            }
          ],
          "TOUROUA": [
            {
              "station": "EPC KOZA II / A",
              "voters": 5397
            }
          ],
          "MBAGA": [
            {
              "station": "EPC MBAGA / A",
              "voters": 1658
            }
          ],
          "BOUNDANG-HAOUSSARI": [
            {
              "station": "ESPL CHEF BOUNDANG HAOUSSARI / A",
              "voters": 117
            }
          ],
          "FARKOUMO": [
            {
              "station": "ESPL CHEF LAMORDE / A",
              "voters": 211
            }
          ],
          "LAMORDE-ERGUE": [
            {
              "station": "ESPL CHEF LAMORDE / A",
              "voters": 211
            }
          ],
          "GUERA": [
            {
              "station": "ESPL CHEF OFFAM / A",
              "voters": 315
            }
          ],
          "BEMTE": [
            {
              "station": "ESPL CHEF OFFAM / A",
              "voters": 315
            }
          ],
          "HOLLE": [
            {
              "station": "ESPL CHEF OFFAM / A",
              "voters": 315
            }
          ],
          "LANGUI": [
            {
              "station": "ESPL CHEF OFFAM / A",
              "voters": 315
            }
          ],
          "OFFAM": [
            {
              "station": "ESPL CHEF OFFAM / A",
              "voters": 315
            }
          ],
          "KINADA": [
            {
              "station": "ESPL EP KINADA / A",
              "voters": 177
            }
          ],
          "SABONGARI-KINADI": [
            {
              "station": "ESPL EP KINADA / A",
              "voters": 177
            }
          ],
          "MANDAKA": [
            {
              "station": "ESPL EP PINDILING / A",
              "voters": 264
            }
          ]
        }
      },
      "FARO": {
        "BEKA": {
          "SILBA": [
            {
              "station": "E.P. DE MAYO-SILBA / A",
              "voters": 106
            }
          ],
          "NDINTIRE": [
            {
              "station": "ECOLE CATHO NDINTIRE / A",
              "voters": 397
            }
          ],
          "SAFAI": [
            {
              "station": "ECOLE CATHO NDINTIRE / A",
              "voters": 479
            }
          ],
          "BOULE": [
            {
              "station": "ECOLE DES PARENTS DE BEGUE / A",
              "voters": 212
            }
          ],
          "BIPOA": [
            {
              "station": "ECOLE DES PARENTS DE BIPAO / A",
              "voters": 43
            }
          ],
          "DJANGUINE": [
            {
              "station": "ECOLE DES PARENTS DE DJANGUINE / A",
              "voters": 281
            }
          ],
          "OURO": [
            {
              "station": "ECOLE DES PARENTS DOURO-DONKA / A",
              "voters": 146
            }
          ],
          "DONKA": [
            {
              "station": "ECOLE DES PARENTS DOURO-DONKA / A",
              "voters": 146
            }
          ],
          "KILAROU": [
            {
              "station": "ECOLE PUBLIQUE DE DJAMPEOU / A",
              "voters": 199
            }
          ],
          "SOO": [
            {
              "station": "ECOLE PUBLIQUE DE DJAMPEOU / A",
              "voters": 199
            }
          ],
          "BOUANGAL": [
            {
              "station": "ECOLE PUBLIQUE DE DJAMPEOU / A",
              "voters": 199
            }
          ],
          "DJAMARE": [
            {
              "station": "ECOLE PUBLIQUE DE GAMOU / A",
              "voters": 84
            }
          ],
          "ALH.IYEGA": [
            {
              "station": "ECOLE PUBLIQUE DE KOKSORO / A",
              "voters": 202
            }
          ],
          "SOUKKOUNDE": [
            {
              "station": "ECOLE PUBLIQUE DE KOKSORO / A",
              "voters": 202
            }
          ],
          "LOKOSSAMA": [
            {
              "station": "ECOLE PUBLIQUE DE LOKOSSAMA / A",
              "voters": 86
            }
          ],
          "CENTRE": [
            {
              "station": "EM BEKA / A",
              "voters": 976
            }
          ],
          "ABEDJO": [
            {
              "station": "EP AOUDI / A",
              "voters": 251
            }
          ],
          "AOUDI": [
            {
              "station": "EP AOUDI / A",
              "voters": 251
            }
          ],
          "ZERMOU": [
            {
              "station": "EP AOUDI / A",
              "voters": 251
            }
          ],
          "BALGOU": [
            {
              "station": "EP BALGOU / A",
              "voters": 199
            }
          ],
          "KARLAYE": [
            {
              "station": "EP BALGOU / A",
              "voters": 199
            }
          ],
          "KELLOU": [
            {
              "station": "EP BALGOU / A",
              "voters": 199
            }
          ],
          "PAGOU": [
            {
              "station": "EP BALGOU / A",
              "voters": 199
            }
          ],
          "WOULBA": [
            {
              "station": "EP BALGOU / A",
              "voters": 199
            }
          ],
          "BALKOSSA": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 754
            }
          ],
          "KOLVANOU": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 501
            }
          ],
          "LESDI-BODERI": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 377
            }
          ],
          "PETIT": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 377
            }
          ],
          "TAPARE": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 754
            }
          ],
          "ZELA": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 377
            }
          ],
          "WAPEO": [
            {
              "station": "EP BALKOSSA / A",
              "voters": 878
            }
          ],
          "ALHADJI": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "IYENGA": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "BARKERE": [
            {
              "station": "EP BEKA / A",
              "voters": 1194
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA / A",
              "voters": 1968
            }
          ],
          "DJALINGO": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "KOKSORO": [
            {
              "station": "EP BEKA / A",
              "voters": 1194
            }
          ],
          "LOUGGUERE": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "NDJORO": [
            {
              "station": "EP BEKA / A",
              "voters": 1194
            }
          ],
          "NYEBBAM-GAOURI": [
            {
              "station": "EP BEKA / A",
              "voters": 1054
            }
          ],
          "OURO-KONA": [
            {
              "station": "EP BEKA / A",
              "voters": 1138
            }
          ],
          "ROUMDE-NANA": [
            {
              "station": "EP BEKA / A",
              "voters": 1054
            }
          ],
          "SOUKOUNDE": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "WAOUROU": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "KOULAHI": [
            {
              "station": "EP BEKA / A",
              "voters": 992
            }
          ],
          "BIMBA": [
            {
              "station": "EP BIMBA / A",
              "voters": 1275
            }
          ],
          "ADJIA": [
            {
              "station": "EP BIMBA / A",
              "voters": 425
            }
          ],
          "FOULBE": [
            {
              "station": "EP BIMBA / A",
              "voters": 425
            }
          ],
          "GUEMOU": [
            {
              "station": "EP BIMBA / A",
              "voters": 425
            }
          ],
          "DJOUTA": [
            {
              "station": "EP BIMBA / A",
              "voters": 468
            }
          ],
          "BENTERE": [
            {
              "station": "EP BIMBA / A",
              "voters": 468
            }
          ],
          "GALSAMA": [
            {
              "station": "EP BIMBA / A",
              "voters": 425
            }
          ],
          "YALOU": [
            {
              "station": "EP BIMBA / A",
              "voters": 425
            }
          ],
          "BIMLEROU": [
            {
              "station": "EP BIMLEROU / A",
              "voters": 202
            }
          ],
          "KASSALA": [
            {
              "station": "EP BIMLEROU / A",
              "voters": 779
            }
          ],
          "LIBROU-BIMLEROU": [
            {
              "station": "EP BIMLEROU / A",
              "voters": 202
            }
          ],
          "BOGDOU": [
            {
              "station": "EP BOGDOU / A",
              "voters": 1078
            }
          ],
          "DJARENDI": [
            {
              "station": "EP BOGDOU / A",
              "voters": 662
            }
          ],
          "SANA": [
            {
              "station": "EP BOGDOU / A",
              "voters": 626
            }
          ],
          "MAIKIDI": [
            {
              "station": "EP BOGDOU / A",
              "voters": 255
            }
          ],
          "NADERE": [
            {
              "station": "EP BOGDOU / A",
              "voters": 626
            }
          ],
          "KOMA": [
            {
              "station": "EP BOGDOU / A",
              "voters": 313
            }
          ],
          "PEREDOU": [
            {
              "station": "EP BOGDOU / A",
              "voters": 525
            }
          ],
          "SOUARI": [
            {
              "station": "EP BOGDOU / A",
              "voters": 255
            }
          ],
          "WALTEROU": [
            {
              "station": "EP BOGDOU / A",
              "voters": 255
            }
          ],
          "DENOU": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 492
            }
          ],
          "DJOUBAOU": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 492
            }
          ],
          "DENOU-MANGA": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 492
            }
          ],
          "DJABE": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 1304
            }
          ],
          "MAYO-SILBA": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 598
            }
          ],
          "SIMKOLA": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 984
            }
          ],
          "DOW": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 492
            }
          ],
          "LESDI": [
            {
              "station": "EP DENOU-MANGA / A",
              "voters": 492
            }
          ],
          "DENOU-PETEL": [
            {
              "station": "EP DENOU-PETEL / A",
              "voters": 181
            }
          ],
          "VOGBA": [
            {
              "station": "EP DENOU-PETEL / A",
              "voters": 181
            }
          ],
          "BOUBA": [
            {
              "station": "EP DIDANGO / A",
              "voters": 184
            }
          ],
          "MAGAMI": [
            {
              "station": "EP DIDANGO / A",
              "voters": 184
            }
          ],
          "DIDANGO": [
            {
              "station": "EP DIDANGO / A",
              "voters": 1131
            }
          ],
          "NISSIRO": [
            {
              "station": "EP DIDANGO / A",
              "voters": 184
            }
          ],
          "DJAGOU": [
            {
              "station": "EP DJAGOU / A",
              "voters": 145
            }
          ],
          "DJAMPEOU": [
            {
              "station": "EP DJAGOU / A",
              "voters": 344
            }
          ],
          "YELBA": [
            {
              "station": "EP DJAGOU / A",
              "voters": 409
            }
          ],
          "DJALINGO-PONT": [
            {
              "station": "EP DJALINGO PONT / A",
              "voters": 406
            }
          ],
          "KESSOUM": [
            {
              "station": "EP DJALINGO PONT / A",
              "voters": 406
            }
          ],
          "BEGUE": [
            {
              "station": "EP DJALINGO VERE / A",
              "voters": 413
            }
          ],
          "DJALINGO-VERE": [
            {
              "station": "EP DJALINGO VERE / A",
              "voters": 201
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DORBA / A",
              "voters": 311
            }
          ],
          "DORBA": [
            {
              "station": "EP DORBA / A",
              "voters": 182
            }
          ],
          "NATIRDE": [
            {
              "station": "EP DORBA / A",
              "voters": 229
            }
          ],
          "TONGO": [
            {
              "station": "EP DORBA / A",
              "voters": 182
            }
          ],
          "GBEUDWABA": [
            {
              "station": "EP GBEUDWABA / A",
              "voters": 55
            }
          ],
          "GUEDE": [
            {
              "station": "EP GUEDE / A",
              "voters": 704
            }
          ],
          "KOMBORO": [
            {
              "station": "EP GUEDE / A",
              "voters": 492
            }
          ],
          "LOUGGOUNDE": [
            {
              "station": "EP GUEDE / A",
              "voters": 492
            }
          ],
          "HALLANI": [
            {
              "station": "EP HALLANI / A",
              "voters": 168
            }
          ],
          "GAMNA": [
            {
              "station": "EP KARINE / A",
              "voters": 443
            }
          ],
          "KARINE": [
            {
              "station": "EP KARINE / A",
              "voters": 443
            }
          ],
          "LOUGGA": [
            {
              "station": "EP KARINE / A",
              "voters": 570
            }
          ],
          "MBELINE": [
            {
              "station": "EP KARINE / A",
              "voters": 443
            }
          ],
          "TATOURE": [
            {
              "station": "EP KARINE / A",
              "voters": 443
            }
          ],
          "VOMA": [
            {
              "station": "EP KASSALA VOMA / A",
              "voters": 152
            }
          ],
          "KOLOU-MANGA": [
            {
              "station": "EP KOLOU-MALKOGA / A",
              "voters": 275
            }
          ],
          "KOUDI": [
            {
              "station": "EP KOLOU-MALKOGA / A",
              "voters": 275
            }
          ],
          "KWARA": [
            {
              "station": "EP KOLOU-MALKOGA / A",
              "voters": 275
            }
          ],
          "BATBA": [
            {
              "station": "EP KOUBI / A",
              "voters": 402
            }
          ],
          "KOBLIMA": [
            {
              "station": "EP KOUBI / A",
              "voters": 402
            }
          ],
          "KOUBI": [
            {
              "station": "EP KOUBI / A",
              "voters": 402
            }
          ],
          "BISSORA": [
            {
              "station": "EP LARO / A",
              "voters": 189
            }
          ],
          "GAMOU": [
            {
              "station": "EP LARO / A",
              "voters": 273
            }
          ],
          "GAMO": [
            {
              "station": "EP LARO / A",
              "voters": 189
            }
          ],
          "LARO": [
            {
              "station": "EP LARO / A",
              "voters": 378
            }
          ],
          "MAYO": [
            {
              "station": "EP LARO / A",
              "voters": 295
            }
          ],
          "LOWOL": [
            {
              "station": "EP LOWOL / A",
              "voters": 540
            }
          ],
          "MALKOGA": [
            {
              "station": "EP MALKOGA / A",
              "voters": 413
            }
          ],
          "SAFIROU": [
            {
              "station": "EP MALKOGA / A",
              "voters": 413
            }
          ],
          "NYMDELOU": [
            {
              "station": "EP NYMDELOU / A",
              "voters": 331
            }
          ],
          "VOKBA": [
            {
              "station": "EP NYMDELOU / A",
              "voters": 331
            }
          ],
          "OGOLO": [
            {
              "station": "EP OGOLO / A",
              "voters": 192
            }
          ],
          "RABBO": [
            {
              "station": "EP OGOLO / A",
              "voters": 192
            }
          ],
          "KILA": [
            {
              "station": "EP OGOLO / A",
              "voters": 192
            }
          ],
          "AHMADOU": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "DJOUGOUDOUM": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "DANI": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "KARI": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "LENARA": [
            {
              "station": "EP POMLA / A",
              "voters": 546
            }
          ],
          "LIH": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "POMLA": [
            {
              "station": "EP POMLA / A",
              "voters": 1302
            }
          ],
          "LIH-WANGAI": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "SHEHOU": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "WOURO": [
            {
              "station": "EP POMLA / A",
              "voters": 3750
            }
          ],
          "BEI": [
            {
              "station": "EP POMLA / A",
              "voters": 434
            }
          ],
          "KOLOU": [
            {
              "station": "EP SAPTOU / A",
              "voters": 345
            }
          ],
          "NAKALBA": [
            {
              "station": "EP SAPTOU / A",
              "voters": 345
            }
          ],
          "SAPTOU": [
            {
              "station": "EP SAPTOU / A",
              "voters": 345
            }
          ],
          "DINSI": [
            {
              "station": "EP TCHAMBA / A",
              "voters": 947
            }
          ],
          "MAILOUDOU": [
            {
              "station": "EP TCHAMBA / A",
              "voters": 947
            }
          ],
          "RIDINA": [
            {
              "station": "EP TCHAMBA / A",
              "voters": 1181
            }
          ],
          "SOFOL": [
            {
              "station": "EP TCHAMBA / A",
              "voters": 1181
            }
          ],
          "PANTI": [
            {
              "station": "EP TCHAMBA / A",
              "voters": 947
            }
          ],
          "PITOA-BEKA": [
            {
              "station": "EP TOUMBINDE / A",
              "voters": 276
            }
          ],
          "TOUMBIDE": [
            {
              "station": "EP TOUMBINDE / A",
              "voters": 214
            }
          ],
          "DANGANA": [
            {
              "station": "EP WADINGA / A",
              "voters": 482
            }
          ],
          "MALI": [
            {
              "station": "EP WADINGA / A",
              "voters": 964
            }
          ],
          "WADINGA": [
            {
              "station": "EP WADINGA / A",
              "voters": 276
            }
          ],
          "BASSOUNOU": [
            {
              "station": "EP WANGAI / A",
              "voters": 545
            }
          ],
          "DAMASSI": [
            {
              "station": "EP WANGAI / A",
              "voters": 545
            }
          ],
          "GUELBA": [
            {
              "station": "EP WANGAI / A",
              "voters": 545
            }
          ],
          "WANGAI": [
            {
              "station": "EP WANGAI / A",
              "voters": 636
            }
          ],
          "YELLI": [
            {
              "station": "EP YELLI- MANGA / A",
              "voters": 330
            }
          ],
          "-PETEL": [
            {
              "station": "EP YELLI- MANGA / A",
              "voters": 330
            }
          ],
          "YELLI-MANGA": [
            {
              "station": "EP YELLI- MANGA / A",
              "voters": 330
            }
          ],
          "KOLGOU": [
            {
              "station": "ESPL CHEF KOLGOU / A",
              "voters": 221
            }
          ],
          "MAYO-NGNIWA": [
            {
              "station": "ESPL CHEF MAYO NGNIWA / A",
              "voters": 106
            }
          ],
          "BOGUE": [
            {
              "station": "ESPL CHEF MOUGUENI / A",
              "voters": 182
            }
          ],
          "TCHAMBA": [
            {
              "station": "ESPL CHEF MOUGUENI / A",
              "voters": 2874
            }
          ],
          "FOLSI": [
            {
              "station": "ESPL CHEF MOUGUENI / A",
              "voters": 91
            }
          ],
          "MOUGUENI": [
            {
              "station": "ESPL CHEF MOUGUENI / A",
              "voters": 91
            }
          ],
          "ZAMNI": [
            {
              "station": "ESPL CHEF MOUGUENI / A",
              "voters": 91
            }
          ],
          "LIWA": [
            {
              "station": "ESPL CHEF NDINTIRE WANGAI / A",
              "voters": 235
            }
          ],
          "NDINGTIRE-WANGAI": [
            {
              "station": "ESPL CHEF NDINTIRE WANGAI / A",
              "voters": 235
            }
          ],
          "SASSI": [
            {
              "station": "ESPL CHEF NDINTIRE WANGAI / A",
              "voters": 235
            }
          ],
          "SOULABE": [
            {
              "station": "ESPL CHEF NDINTIRE WANGAI / A",
              "voters": 235
            }
          ],
          "MBAI": [
            {
              "station": "ESPL CHEF NDINTIRE WANGAI / A",
              "voters": 235
            }
          ],
          "BORI": [
            {
              "station": "ESPL CHEF WARDI / A",
              "voters": 87
            }
          ],
          "GALI": [
            {
              "station": "ESPL CHEF WARDI / A",
              "voters": 87
            }
          ],
          "KOMNI": [
            {
              "station": "ESPL CHEF WARDI / A",
              "voters": 87
            }
          ],
          "GUERI": [
            {
              "station": "ESPL CHEF WARDI / A",
              "voters": 87
            }
          ],
          "WARDI": [
            {
              "station": "ESPL CHEF WARDI / A",
              "voters": 87
            }
          ],
          "KOLONTI": [
            {
              "station": "ESPL CHEF YELBA / A",
              "voters": 132
            }
          ],
          "BOUNOU": [
            {
              "station": "ESPL CHEFWOURO BOUNOU / A",
              "voters": 261
            }
          ],
          "DOLE": [
            {
              "station": "ESPL CHEFWOURO BOUNOU / A",
              "voters": 261
            }
          ],
          "SIKO": [
            {
              "station": "ESPL CHEFWOURO BOUNOU / A",
              "voters": 261
            }
          ],
          "SIRA": [
            {
              "station": "ESPL CHEFWOURO BOUNOU / A",
              "voters": 347
            }
          ]
        },
        "POLI": {
          "LAKBAI": [
            {
              "station": "CASE COMMUNAUTAIRE DE BALANE / A",
              "voters": 752
            }
          ],
          "BALANE": [
            {
              "station": "CASE COMMUNAUTAIRE DE BALANE / A",
              "voters": 836
            }
          ],
          "DITE": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "GORE": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "NAMBAVA": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "NINGA": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "TCHABAL": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 233
            }
          ],
          "-NINGA": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "TOUNE": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "VAKOE": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "WADE": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "YEGO": [
            {
              "station": "CASE DE SANTE NINGA / A",
              "voters": 159
            }
          ],
          "BAKDONKO": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 1364
            }
          ],
          "BIBEMIRE": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 911
            }
          ],
          "SABONGARI": [
            {
              "station": "DELEGATION AGRICULTURE / A",
              "voters": 911
            }
          ],
          "BOUNDJE": [
            {
              "station": "DELEGATION DES MINES / A",
              "voters": 618
            }
          ],
          "NIBANGO": [
            {
              "station": "DELEGATION DES MINES / A",
              "voters": 1097
            }
          ],
          "DENKTE": [
            {
              "station": "ECOLE CATHO YOBO / A",
              "voters": 394
            }
          ],
          "PATE-GOLE": [
            {
              "station": "ECOLE CATHO YOBO / A",
              "voters": 394
            }
          ],
          "TAMDJAL": [
            {
              "station": "ECOLE CATHO YOBO / A",
              "voters": 394
            }
          ],
          "YOBO": [
            {
              "station": "ECOLE CATHO YOBO / A",
              "voters": 394
            }
          ],
          "YORINI": [
            {
              "station": "ECOLE CATHO YOBO / A",
              "voters": 394
            }
          ],
          "BOULE": [
            {
              "station": "ECOLE DES PARENTS DONKO / A",
              "voters": 538
            }
          ],
          "DEMTE": [
            {
              "station": "ECOLE DES PARENTS DONKO / A",
              "voters": 175
            }
          ],
          "DONKO-CENTRE": [
            {
              "station": "ECOLE DES PARENTS DONKO / A",
              "voters": 175
            }
          ],
          "BADONGO": [
            {
              "station": "ECOLE PROT POLI-WANGO / A",
              "voters": 453
            }
          ],
          "BOUSWALE": [
            {
              "station": "ECOLE PROT POLI-WANGO / A",
              "voters": 840
            }
          ],
          "PETEL": [
            {
              "station": "ECOLE PROT POLI-WANGO / A",
              "voters": 453
            }
          ],
          "NABARO": [
            {
              "station": "ECOLE PROT POLI-WANGO / A",
              "voters": 453
            }
          ],
          "TIRGA": [
            {
              "station": "ECOLE PROT POLI-WANGO / A",
              "voters": 453
            }
          ],
          "DOUPA": [
            {
              "station": "EM BILINGUE POLI / A",
              "voters": 742
            }
          ],
          "TONGO": [
            {
              "station": "EM BILINGUE POLI / A",
              "voters": 742
            }
          ],
          "BANTADJE": [
            {
              "station": "EP BANTADJE / A",
              "voters": 491
            }
          ],
          "DJALINGO": [
            {
              "station": "EP BANTADJE / A",
              "voters": 404
            }
          ],
          "PELBOU": [
            {
              "station": "EP BANTADJE / A",
              "voters": 404
            }
          ],
          "POMLA": [
            {
              "station": "EP BANTADJE / A",
              "voters": 404
            }
          ],
          "POUKSA": [
            {
              "station": "EP BANTADJE / A",
              "voters": 404
            }
          ],
          "SIGARI": [
            {
              "station": "EP BANTADJE / A",
              "voters": 404
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA SEKO / A",
              "voters": 178
            }
          ],
          "SEKO": [
            {
              "station": "EP BEKA SEKO / A",
              "voters": 178
            }
          ],
          "BOROYA": [
            {
              "station": "EP BEKA SEKO / A",
              "voters": 631
            }
          ],
          "WALE": [
            {
              "station": "EP BEKA SEKO / A",
              "voters": 631
            }
          ],
          "HEPTILELE": [
            {
              "station": "EP BEKA SEKO / A",
              "voters": 178
            }
          ],
          "BAKTE": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "BERE": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "DJENGO": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "DJOGO": [
            {
              "station": "EP BERE / A",
              "voters": 379
            }
          ],
          "HEPPA": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "PIPAH": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "RINGO": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "SEKO-BOKO": [
            {
              "station": "EP BERE / A",
              "voters": 220
            }
          ],
          "BOLELE": [
            {
              "station": "EP BOULKO / A",
              "voters": 387
            }
          ],
          "BOULKO": [
            {
              "station": "EP BOULKO / A",
              "voters": 387
            }
          ],
          "DETTA": [
            {
              "station": "EP BOULKO / A",
              "voters": 387
            }
          ],
          "KOUMSDONGO": [
            {
              "station": "EP BOULKO / A",
              "voters": 387
            }
          ],
          "MOUTTO": [
            {
              "station": "EP BOULKO / A",
              "voters": 387
            }
          ],
          "TOUPTE": [
            {
              "station": "EP BOULKO / A",
              "voters": 473
            }
          ],
          "BOUMBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 1094
            }
          ],
          "BOUPI": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "GAGUIBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "GANDJIBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 847
            }
          ],
          "KOGNAKBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "POTTI": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "SERI-BOUMBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "TEGUI-BOUMBA": [
            {
              "station": "EP BOUMBA / A",
              "voters": 615
            }
          ],
          "ROUBE": [
            {
              "station": "EP DE WOURO MBAI / A",
              "voters": 343
            }
          ],
          "DJALINGO-KONGLE": [
            {
              "station": "EP DJALINGO-KONGLE / A",
              "voters": 268
            }
          ],
          "BOLI": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 465
            }
          ],
          "DJOREITO": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 465
            }
          ],
          "DJOUMTE": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 918
            }
          ],
          "SIRKOLCHI": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 465
            }
          ],
          "SISSI": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 704
            }
          ],
          "TEKSA": [
            {
              "station": "EP DJOUMTE / A",
              "voters": 465
            }
          ],
          "BETE": [
            {
              "station": "EP DOTRO / A",
              "voters": 182
            }
          ],
          "DOTRO": [
            {
              "station": "EP DOTRO / A",
              "voters": 182
            }
          ],
          "GUIDING": [
            {
              "station": "EP DOTRO / A",
              "voters": 182
            }
          ],
          "WEBAKO": [
            {
              "station": "EP DOTRO / A",
              "voters": 182
            }
          ],
          "DENGUERE": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "DONE": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "FIGNOLE": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "GOURKO": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "KIMLA": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "NOTCHA": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "SERVEI": [
            {
              "station": "EP FIGNOLE / A",
              "voters": 462
            }
          ],
          "BGAGUI": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "DJOGUI": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "GAGUI": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "GAHANBA": [
            {
              "station": "EP GAHANBA / A",
              "voters": 607
            }
          ],
          "LEGUI": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "NA'": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "ABA": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "SEBI": [
            {
              "station": "EP GAHANBA / A",
              "voters": 255
            }
          ],
          "LOUGUERE": [
            {
              "station": "EP GANDABA / A",
              "voters": 74
            }
          ],
          "GANDABA": [
            {
              "station": "EP GANDABA / A",
              "voters": 74
            }
          ],
          "BOUDE": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "BOUMSE": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "DEMBAKO": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "GAOGUI": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "GARE": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "HERKO": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "SAMO": [
            {
              "station": "EP GARE / A",
              "voters": 252
            }
          ],
          "KPENGEN": [
            {
              "station": "EP GODE / A",
              "voters": 677
            }
          ],
          "MALWADOU": [
            {
              "station": "EP GODE / A",
              "voters": 677
            }
          ],
          "DASSIDONGO": [
            {
              "station": "EP GOMBO / A",
              "voters": 214
            }
          ],
          "GOMBO": [
            {
              "station": "EP GOMBO / A",
              "voters": 214
            }
          ],
          "TAKO": [
            {
              "station": "EP GOMBO / A",
              "voters": 214
            }
          ],
          "ALKALI": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "GODE": [
            {
              "station": "EP GOMPOU / A",
              "voters": 925
            }
          ],
          "BOKARE": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "DJASSA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "DJOUGLA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "GOMPOU": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "KALBINGA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 652
            }
          ],
          "ANCIEN": [
            {
              "station": "EP GOMPOU / A",
              "voters": 496
            }
          ],
          "MANGZANG": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "SINGBA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 652
            }
          ],
          "VAAKOUA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "WANGBA": [
            {
              "station": "EP GOMPOU / A",
              "voters": 248
            }
          ],
          "BASSODJE": [
            {
              "station": "EP GORMAYA / A",
              "voters": 680
            }
          ],
          "DELENGUE": [
            {
              "station": "EP GORMAYA / A",
              "voters": 552
            }
          ],
          "GORMAYA": [
            {
              "station": "EP GORMAYA / A",
              "voters": 895
            }
          ],
          "GUITO": [
            {
              "station": "EP GORMAYA / A",
              "voters": 1238
            }
          ],
          "SALAKI": [
            {
              "station": "EP GORMAYA / A",
              "voters": 1238
            }
          ],
          "SOUARI": [
            {
              "station": "EP GORMAYA / A",
              "voters": 552
            }
          ],
          "WOURO": [
            {
              "station": "EP GORMAYA / A",
              "voters": 1790
            }
          ],
          "KILA": [
            {
              "station": "EP GORMAYA / A",
              "voters": 552
            }
          ],
          "MBAI": [
            {
              "station": "EP GORMAYA / A",
              "voters": 1238
            }
          ],
          "BOUKO": [
            {
              "station": "EP GR I / A",
              "voters": 442
            }
          ],
          "LOPERE": [
            {
              "station": "EP GR I / A",
              "voters": 442
            }
          ],
          "STADE": [
            {
              "station": "EP GR I / A",
              "voters": 442
            }
          ],
          "HOM": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "HOY": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "NOGUI": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "SERI": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "TEGUI": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "TORGUI": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "WANTE": [
            {
              "station": "EP HOY / A",
              "voters": 352
            }
          ],
          "DOPITI": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "KONGLE": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "MPAH": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "NALOUKBAROU": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "SAMBARO": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "WAKIRI": [
            {
              "station": "EP KONGLE / A",
              "voters": 350
            }
          ],
          "BEKA-ILOU": [
            {
              "station": "EP KOURTESSE / A",
              "voters": 393
            }
          ],
          "KOURTESSE": [
            {
              "station": "EP KOURTESSE / A",
              "voters": 393
            }
          ],
          "SANGUERE": [
            {
              "station": "EP KOURTESSE / A",
              "voters": 393
            }
          ],
          "TARTESSE": [
            {
              "station": "EP KOURTESSE / A",
              "voters": 393
            }
          ],
          "WOURO-KESSOUM": [
            {
              "station": "EP KOURTESSE / A",
              "voters": 393
            }
          ],
          "LAGBA": [
            {
              "station": "EP LAGBAI / A",
              "voters": 334
            }
          ],
          "BILAOU": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "DJONONTI": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "DOUGOUDOUGOU": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "DOUROU-SAKA": [
            {
              "station": "EP MANA / A",
              "voters": 347
            }
          ],
          "GAOUDOU": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "GARANTI": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "KAOUFAL": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "KOUNGOU-WATI": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "LAKAPOU": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "MAMBI": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "MANA": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "SABONGARI-MANA": [
            {
              "station": "EP MANA / A",
              "voters": 279
            }
          ],
          "DAI": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "DEMBOULKO": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "HOULE": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "LONGTE": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "MANGATI": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "MANGO": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "NAKIRE": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "NIETCHE": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "SAGO": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "TOKTE": [
            {
              "station": "EP MANGO / A",
              "voters": 583
            }
          ],
          "HOLLE": [
            {
              "station": "EP MARKA / A",
              "voters": 305
            }
          ],
          "MARKA": [
            {
              "station": "EP MARKA / A",
              "voters": 305
            }
          ],
          "NGNAGUI": [
            {
              "station": "EP MARKA / A",
              "voters": 305
            }
          ],
          "SAARI": [
            {
              "station": "EP MARKA / A",
              "voters": 305
            }
          ],
          "SINTE": [
            {
              "station": "EP MARKA / A",
              "voters": 305
            }
          ],
          "MASSINA": [
            {
              "station": "EP MASSINA / A",
              "voters": 224
            }
          ],
          "DJONGUE": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 260
            }
          ],
          "MAYO-DJARENDI": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 260
            }
          ],
          "META-NDIAM": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 260
            }
          ],
          "NGOUTIRI": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 260
            }
          ],
          "TAROUA": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 260
            }
          ],
          "MAYO-LEMPTE": [
            {
              "station": "EP MAYO LEMPTE / A",
              "voters": 284
            }
          ],
          "OURO": [
            {
              "station": "EP OURO DJAMAN / C",
              "voters": 354
            }
          ],
          "DJAMAN": [
            {
              "station": "EP OURO DJAMAN / C",
              "voters": 118
            }
          ],
          "KESSOUM": [
            {
              "station": "EP OURO KESSOUM POLI / A",
              "voters": 236
            }
          ],
          "POLI": [
            {
              "station": "EP OURO KESSOUM POLI / A",
              "voters": 149
            }
          ],
          "FARKOMO": [
            {
              "station": "EP PAKSE / A",
              "voters": 271
            }
          ],
          "PAKSE": [
            {
              "station": "EP PAKSE / A",
              "voters": 271
            }
          ],
          "LENGUERBA": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "LONGOTE": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "PATE-MANGA": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "PATE-PETEL": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "WOURO-KESSOUM/PATE": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "MANGA": [
            {
              "station": "EP PATE MANGA / A",
              "voters": 632
            }
          ],
          "GUERI": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 742
            }
          ],
          "HAKATI": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 742
            }
          ],
          "HATI": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 742
            }
          ],
          "PINTCHOUMBA": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 3452
            }
          ],
          "WINDE": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 2051
            }
          ],
          "WINDE-PINTCHOUMBA": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 1401
            }
          ],
          "WOTTI": [
            {
              "station": "EP PINTCHOUMBA / A",
              "voters": 1546
            }
          ],
          "GOPSE": [
            {
              "station": "EP RIGA / A",
              "voters": 226
            }
          ],
          "GOSSE": [
            {
              "station": "EP RIGA / A",
              "voters": 226
            }
          ],
          "RIGA": [
            {
              "station": "EP RIGA / A",
              "voters": 226
            }
          ],
          "SANGUE": [
            {
              "station": "EP RIGA / A",
              "voters": 226
            }
          ],
          "WARE": [
            {
              "station": "EP RIGA / A",
              "voters": 483
            }
          ],
          "DOZE": [
            {
              "station": "EP SIRDJAM / A",
              "voters": 985
            }
          ],
          "SIRDJAM": [
            {
              "station": "EP SIRDJAM / A",
              "voters": 985
            }
          ],
          "SIRLAWE": [
            {
              "station": "EP SIRDJAM / A",
              "voters": 1163
            }
          ],
          "BOCKI": [
            {
              "station": "EP TAPARE / A",
              "voters": 220
            }
          ],
          "DAGDONGO": [
            {
              "station": "EP TAPARE / A",
              "voters": 220
            }
          ],
          "TAPARE": [
            {
              "station": "EP TAPARE / A",
              "voters": 220
            }
          ],
          "TRAVO": [
            {
              "station": "EP TAPARE / A",
              "voters": 220
            }
          ],
          "BARIGTE": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "BATE": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "NASSARAO": [
            {
              "station": "EP TETE / A",
              "voters": 1576
            }
          ],
          "/TETE": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "PONDE": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "TETE": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "YERNAMBO": [
            {
              "station": "EP TETE / A",
              "voters": 434
            }
          ],
          "BATILBAKO": [
            {
              "station": "EP WATE / A",
              "voters": 376
            }
          ],
          "GOUNDE": [
            {
              "station": "EP WATE / A",
              "voters": 376
            }
          ],
          "WATE": [
            {
              "station": "EP WATE / A",
              "voters": 376
            }
          ],
          "HONLE": [
            {
              "station": "EP YELLE / A",
              "voters": 190
            }
          ],
          "TORME": [
            {
              "station": "EP YELLE / A",
              "voters": 190
            }
          ],
          "YELLE": [
            {
              "station": "EP YELLE / A",
              "voters": 190
            }
          ],
          "BANGWABA": [
            {
              "station": "ESPL CHEF BANGWABA / A",
              "voters": 162
            }
          ],
          "BOLI/DOULE": [
            {
              "station": "ESPL CHEF DOULE / A",
              "voters": 149
            }
          ],
          "DOULE": [
            {
              "station": "ESPL CHEF DOULE / A",
              "voters": 149
            }
          ],
          "GUITCHA": [
            {
              "station": "ESPL CHEF DOULE / A",
              "voters": 149
            }
          ],
          "BALKOA": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "BANDE": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "KEBOULI": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "NANGWALE": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "NAZARETT": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "NINTELI": [
            {
              "station": "ESPL CHEF FIGNOLE / A",
              "voters": 171
            }
          ],
          "SELLOU": [
            {
              "station": "ESPL CHEF SELLOU / A",
              "voters": 113
            }
          ],
          "BERINGTE": [
            {
              "station": "ESPL CHEF SIKO / A",
              "voters": 188
            }
          ],
          "GNOREGOU": [
            {
              "station": "ESPL CHEF SIKO / A",
              "voters": 188
            }
          ],
          "SIKO": [
            {
              "station": "ESPL CHEF SIKO / A",
              "voters": 188
            }
          ],
          "WALTESSE": [
            {
              "station": "ESPL CHEF SIKO / A",
              "voters": 188
            }
          ],
          "DJALINGO-POLI": [
            {
              "station": "MAIRIE / A",
              "voters": 887
            }
          ],
          "KOUSSILE": [
            {
              "station": "MAIRIE / A",
              "voters": 1287
            }
          ],
          "LAINDE": [
            {
              "station": "MAIRIE / A",
              "voters": 699
            }
          ],
          "LAMORDE": [
            {
              "station": "MAIRIE / A",
              "voters": 887
            }
          ]
        }
      },
      "MAYO LOUTI": {
        "FIGUIL": {
          "BAWAKA": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 1458
            }
          ],
          "BIDOUM": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 516
            }
          ],
          "DOUKNOUKOU": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 516
            }
          ],
          "GUEREME-BIDZAR": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 1390
            }
          ],
          "MOSSORGO": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 516
            }
          ],
          "PADAGAR": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 1428
            }
          ],
          "BIDZAR": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 4239
            }
          ],
          "PEFE": [
            {
              "station": "CETIC BIDZAR I / A",
              "voters": 1899
            }
          ],
          "LOPERE": [
            {
              "station": "DELEGATION ELEVAGE / A",
              "voters": 1720
            }
          ],
          "SARKISSANOU": [
            {
              "station": "DELEGATION ELEVAGE / A",
              "voters": 2748
            }
          ],
          "BARINGUEL": [
            {
              "station": "EM FIGUIL / A",
              "voters": 681
            }
          ],
          "BADADJI": [
            {
              "station": "EP BADADJI / A",
              "voters": 740
            }
          ],
          "MARCHE": [
            {
              "station": "EP BADADJI / A",
              "voters": 740
            }
          ],
          "LAMORDE-BADADJI": [
            {
              "station": "EP BADADJI / A",
              "voters": 740
            }
          ],
          "BALIA": [
            {
              "station": "EP BALIA / A",
              "voters": 345
            }
          ],
          "KOUSSOUM": [
            {
              "station": "EP BALIA / A",
              "voters": 691
            }
          ],
          "BAT": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "BATAO": [
            {
              "station": "EP BATAO / A",
              "voters": 2488
            }
          ],
          "BETKELE": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "GADA": [
            {
              "station": "EP BATAO / A",
              "voters": 2650
            }
          ],
          "MAYO": [
            {
              "station": "EP BATAO / A",
              "voters": 4215
            }
          ],
          "GANGOU": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "HAWA": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "MARKAYA": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "MOUGNA": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "SIRAI": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "OURO-TASSA": [
            {
              "station": "EP BATAO / A",
              "voters": 1244
            }
          ],
          "MAZANGA": [
            {
              "station": "EP BAWAKA II / A",
              "voters": 471
            }
          ],
          "MOTOUP": [
            {
              "station": "EP BAWAKA II / A",
              "voters": 471
            }
          ],
          "BERGUI": [
            {
              "station": "EP BIDZAR II / A",
              "voters": 912
            }
          ],
          "GUIDIM": [
            {
              "station": "EP BIDZAR II / A",
              "voters": 912
            }
          ],
          "KADAMA": [
            {
              "station": "EP BIDZAR II / A",
              "voters": 912
            }
          ],
          "OURO-BOUBI": [
            {
              "station": "EP BIDZAR II / A",
              "voters": 1321
            }
          ],
          "PIMTILI": [
            {
              "station": "EP BIDZAR II / A",
              "voters": 912
            }
          ],
          "BIOU": [
            {
              "station": "EP BIOU / A",
              "voters": 432
            }
          ],
          "BOUDVA": [
            {
              "station": "EP BOUDVA / A",
              "voters": 572
            }
          ],
          "DAHAL": [
            {
              "station": "EP DAHAL / A",
              "voters": 346
            }
          ],
          "DAWALA-BIDZAR": [
            {
              "station": "EP DAWALA BIDZAR I / A",
              "voters": 348
            }
          ],
          "GUEGUELDE": [
            {
              "station": "EP DAWALA BIDZAR I / A",
              "voters": 348
            }
          ],
          "DELELE": [
            {
              "station": "EP DELELE / A",
              "voters": 1674
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP DELELE / A",
              "voters": 837
            }
          ],
          "DJABBE-BIOU": [
            {
              "station": "EP DJABBE BIOU / A",
              "voters": 648
            }
          ],
          "DJABILI-KASKA": [
            {
              "station": "EP DJABILI KASKA / A",
              "voters": 323
            }
          ],
          "KOIDAWA": [
            {
              "station": "EP DJABILI KASKA / A",
              "voters": 323
            }
          ],
          "BADVOR": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "BOU": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "BOURDOUKOU": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "DIGAR": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 1965
            }
          ],
          "DJOUGUI": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "GABLA": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "GOUDOUFGLA": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "MOSSOMO": [
            {
              "station": "EP DJOUGUI GABLA / A",
              "voters": 807
            }
          ],
          "DOUNDEHI-BIOU": [
            {
              "station": "EP DOUNDEHI-BIOU / A",
              "voters": 412
            }
          ],
          "MADAKAMNA": [
            {
              "station": "EP DOUNDEHI-BIOU / A",
              "voters": 412
            }
          ],
          "DOUNDEHI-FIGUIL": [
            {
              "station": "EP DOUNDEHI-FIGUIL / A",
              "voters": 347
            }
          ],
          "OURO-TCHAKA": [
            {
              "station": "EP DOUNDEHI-FIGUIL / A",
              "voters": 347
            }
          ],
          "DIKTINGUE": [
            {
              "station": "EP GOLOMO / A",
              "voters": 1045
            }
          ],
          "GOLOMO": [
            {
              "station": "EP GOLOMO / A",
              "voters": 826
            }
          ],
          "MOURKOUFO": [
            {
              "station": "EP GOLOMO / A",
              "voters": 826
            }
          ],
          "PERSONELS": [
            {
              "station": "EP GP II FIGUIL / A",
              "voters": 346
            }
          ],
          "SERVICES": [
            {
              "station": "EP GP II FIGUIL / A",
              "voters": 346
            }
          ],
          "BINDIRE": [
            {
              "station": "EP GROUPE I FIGUIL / A",
              "voters": 1526
            }
          ],
          "GUEREME-LAM": [
            {
              "station": "EP GUEREME BIDZAR I / A",
              "voters": 437
            }
          ],
          "OURO-FANDOU": [
            {
              "station": "EP GUEREME BIDZAR I / A",
              "voters": 437
            }
          ],
          "HELE": [
            {
              "station": "EP HELE / A",
              "voters": 441
            }
          ],
          "HINDJEODE": [
            {
              "station": "EP HINDJEODE / A",
              "voters": 599
            }
          ],
          "MARIARIAKEU": [
            {
              "station": "EP HINDJEODE / A",
              "voters": 961
            }
          ],
          "HOUMBAL": [
            {
              "station": "EP HOUMBAL / A",
              "voters": 228
            }
          ],
          "KARBA": [
            {
              "station": "EP KARBA / A",
              "voters": 242
            }
          ],
          "KAREWA": [
            {
              "station": "EP KAREWA / A",
              "voters": 3725
            }
          ],
          "GOUDRON": [
            {
              "station": "EP KAREWA / A",
              "voters": 1223
            }
          ],
          "ISSA": [
            {
              "station": "EP KOLERE ISSA / A",
              "voters": 1565
            }
          ],
          "KOLLE": [
            {
              "station": "EP KOLERE ISSA / A",
              "voters": 2697
            }
          ],
          "LESS": [
            {
              "station": "EP KOLERE ISSA / A",
              "voters": 1565
            }
          ],
          "LOUTI": [
            {
              "station": "EP KOLERE ISSA / A",
              "voters": 1565
            }
          ],
          "OURO-DAMA": [
            {
              "station": "EP KOLLE / A",
              "voters": 1132
            }
          ],
          "BAKOUNA": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "DABA": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "DEDAGLA": [
            {
              "station": "EP KONG KONG / A",
              "voters": 1716
            }
          ],
          "KONG": [
            {
              "station": "EP KONG KONG / A",
              "voters": 1590
            }
          ],
          "GORONG": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "KIRBILING": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "KORSIOUM": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "MODOUVOURZOUM": [
            {
              "station": "EP KONG KONG / A",
              "voters": 795
            }
          ],
          "LAM": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 2079
            }
          ],
          "DOHONG-DOUVA": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 921
            }
          ],
          "DOHONG-LAM": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 1158
            }
          ],
          "KAPTA-LAM": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 1195
            }
          ],
          "KISOYOMO": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 921
            }
          ],
          "KOUKOY": [
            {
              "station": "EP LAM CENTRE / A",
              "voters": 921
            }
          ],
          "LAMORDE-FIGUIL": [
            {
              "station": "EP LAMORDE / A",
              "voters": 867
            }
          ],
          "LAMORDE": [
            {
              "station": "EP LAMORDE BAINAWA / A",
              "voters": 1361
            }
          ],
          "BAINAWARE": [
            {
              "station": "EP LAMORDE BAINAWA / A",
              "voters": 1361
            }
          ],
          "MIZUKE": [
            {
              "station": "EP MIZUKE II / A",
              "voters": 1084
            }
          ],
          "MORE-SINGAI": [
            {
              "station": "EP MORE-SINGAI / A",
              "voters": 537
            }
          ],
          "MOULVOUDA": [
            {
              "station": "EP MOULVOUDA / A",
              "voters": 531
            }
          ],
          "OURO-MAREY": [
            {
              "station": "EP OURO MAREY / A",
              "voters": 409
            }
          ],
          "OURO": [
            {
              "station": "EP OURO TALAGA / A",
              "voters": 137
            }
          ],
          "TALAGA": [
            {
              "station": "EP OURO TALAGA / A",
              "voters": 137
            }
          ],
          "NGOROWA": [
            {
              "station": "EP PELGUE / A",
              "voters": 695
            }
          ],
          "PELGUE": [
            {
              "station": "EP PELGUE / A",
              "voters": 695
            }
          ],
          "ROMPO": [
            {
              "station": "EP WAFANGO / A",
              "voters": 3631
            }
          ],
          "WAFANGO-FIGUIL": [
            {
              "station": "EP WAFANGO / A",
              "voters": 1073
            }
          ],
          "MOKODONG": [
            {
              "station": "EP WALEWOL SO'O / A",
              "voters": 322
            }
          ],
          "NGOULDI": [
            {
              "station": "EP WALEWOL SO'O / A",
              "voters": 322
            }
          ],
          "WALEWOL": [
            {
              "station": "EP WALEWOL SO'O / A",
              "voters": 322
            }
          ],
          "SO'O": [
            {
              "station": "EP WALEWOL SO'O / A",
              "voters": 322
            }
          ],
          "MAYEL": [
            {
              "station": "EP WAYEBA / A",
              "voters": 316
            }
          ],
          "KEWE": [
            {
              "station": "EP WAYEBA / A",
              "voters": 316
            }
          ],
          "WAYEBA": [
            {
              "station": "EP WAYEBA / A",
              "voters": 316
            }
          ],
          "BADIA": [
            {
              "station": "ESPL CHEF BADIA / A",
              "voters": 197
            }
          ],
          "DAWALA-BIOU": [
            {
              "station": "ESPL CHEF DAWALA BIOU / A",
              "voters": 390
            }
          ],
          "DEBELZE": [
            {
              "station": "ESPL CHEF DEBELZE / A",
              "voters": 131
            }
          ],
          "DJABBE-FIGUIL": [
            {
              "station": "ESPL CHEF DJABBE FIGUIL / A",
              "voters": 563
            }
          ],
          "BOH": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 636
            }
          ],
          "CENTRE": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 7498
            }
          ],
          "DABOUR": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 636
            }
          ],
          "DAWAI": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 636
            }
          ],
          "KERING": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 1113
            }
          ],
          "FIGUIL": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 1607
            }
          ],
          "KORIOK": [
            {
              "station": "ESPL CHEF DJOUGUI BOH / A",
              "voters": 636
            }
          ],
          "DOUVA": [
            {
              "station": "ESPL CHEF DOUVA / A",
              "voters": 327
            }
          ],
          "GUIDI": [
            {
              "station": "ESPL CHEF GUIDI / A",
              "voters": 252
            }
          ],
          "MAMPAR": [
            {
              "station": "ESPL CHEF GUIDI / A",
              "voters": 252
            }
          ],
          "DOH-MAYO-FIGUIL": [
            {
              "station": "ESPL CHEF KOLERE MOUNDANG / A",
              "voters": 1021
            }
          ],
          "KOLERE": [
            {
              "station": "ESPL CHEF KOLERE MOUNDANG / A",
              "voters": 2586
            }
          ],
          "MOUNDANG": [
            {
              "station": "ESPL CHEF KOLERE MOUNDANG / A",
              "voters": 1021
            }
          ],
          "MOKOTE": [
            {
              "station": "ESPL CHEF MOKOTE / A",
              "voters": 177
            }
          ],
          "NIOUA": [
            {
              "station": "ESPL CHEF NIOUA / A",
              "voters": 241
            }
          ],
          "BAFOUNI": [
            {
              "station": "ESPL ECOLE DES PARENTS BAFOUNI / A",
              "voters": 363
            }
          ],
          "OURO-NGARA": [
            {
              "station": "LYCEE FIGUIL / A",
              "voters": 638
            }
          ],
          "TANGAWOL": [
            {
              "station": "LYCEE FIGUIL / A",
              "voters": 638
            }
          ],
          "KARBAZA": [
            {
              "station": "LYCEE LAM / A",
              "voters": 237
            }
          ]
        },
        "GUIDER": {
          "PRISON": [
            {
              "station": "DELEGATION DOMAINE GUIDER / A",
              "voters": 94
            }
          ],
          "BEBERE": [
            {
              "station": "E M BEBERE GADA MAYO / A",
              "voters": 6429
            }
          ],
          "OURO-SOUAIBOU": [
            {
              "station": "E M BEBERE GADA MAYO / A",
              "voters": 1047
            }
          ],
          "GADJERE": [
            {
              "station": "E M BEBERE GADA MAYO / A",
              "voters": 1047
            }
          ],
          "MAIDADI": [
            {
              "station": "E M MAIDADI SALI / A",
              "voters": 2838
            }
          ],
          "SALI": [
            {
              "station": "E M MAIDADI SALI / A",
              "voters": 3221
            }
          ],
          "DJAFAROU": [
            {
              "station": "E.P. DE OURO-BARA / A",
              "voters": 250
            }
          ],
          "OURO-BARA": [
            {
              "station": "E.P. DE OURO-BARA / A",
              "voters": 250
            }
          ],
          "BABARKINE": [
            {
              "station": "EP BABARKINE / A",
              "voters": 560
            }
          ],
          "BAMMO": [
            {
              "station": "EP BABARKINE / A",
              "voters": 560
            }
          ],
          "NGAGAN": [
            {
              "station": "EP BABARKINE / A",
              "voters": 560
            }
          ],
          "NGANDA": [
            {
              "station": "EP BABARKINE / A",
              "voters": 917
            }
          ],
          "GUIDER": [
            {
              "station": "EP BABARKINE / A",
              "voters": 2082
            }
          ],
          "NGOLIRDE": [
            {
              "station": "EP BABARKINE / A",
              "voters": 560
            }
          ],
          "OURO": [
            {
              "station": "EP BABARKINE / A",
              "voters": 45718
            }
          ],
          "BAMO": [
            {
              "station": "EP BABARKINE / A",
              "voters": 1038
            }
          ],
          "OURO-SATAI": [
            {
              "station": "EP BABARKINE / A",
              "voters": 560
            }
          ],
          "BABOURI": [
            {
              "station": "EP BABOURI / A",
              "voters": 334
            }
          ],
          "CASIER": [
            {
              "station": "EP BABOURI / A",
              "voters": 334
            }
          ],
          "DERI": [
            {
              "station": "EP BABOURI / A",
              "voters": 334
            }
          ],
          "SODJOY": [
            {
              "station": "EP BABOURI / A",
              "voters": 334
            }
          ],
          "BALGA": [
            {
              "station": "EP BALGA / A",
              "voters": 599
            }
          ],
          "BANG": [
            {
              "station": "EP BANG / A",
              "voters": 704
            }
          ],
          "BARIKI": [
            {
              "station": "EP BARIKI DJAMNE / A",
              "voters": 399
            }
          ],
          "DJAMANE": [
            {
              "station": "EP BARIKI DJAMNE / A",
              "voters": 399
            }
          ],
          "MANA": [
            {
              "station": "EP BEBERE SOULEY / A",
              "voters": 535
            }
          ],
          "RIBAO": [
            {
              "station": "EP BEBERE SOULEY / A",
              "voters": 1064
            }
          ],
          "BELI": [
            {
              "station": "EP BELI / A",
              "voters": 866
            }
          ],
          "OURO-BADAI": [
            {
              "station": "EP BELI / A",
              "voters": 866
            }
          ],
          "BIMA": [
            {
              "station": "EP BIMA / A",
              "voters": 746
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP BIMA / A",
              "voters": 494
            }
          ],
          "OURO-TCHANGOU": [
            {
              "station": "EP BIMA / A",
              "voters": 373
            }
          ],
          "BISSOLI": [
            {
              "station": "EP BISSOLI / A",
              "voters": 521
            }
          ],
          "KAGOUMA": [
            {
              "station": "EP BISSOLI / A",
              "voters": 703
            }
          ],
          "BOBOLDOU": [
            {
              "station": "EP BOBOLDOU / A",
              "voters": 416
            }
          ],
          "MARI": [
            {
              "station": "EP BOBOLDOU / A",
              "voters": 416
            }
          ],
          "TAR": [
            {
              "station": "EP BOBOLDOU / A",
              "voters": 792
            }
          ],
          "TCHOUCKOL": [
            {
              "station": "EP BOBOLDOU / A",
              "voters": 416
            }
          ],
          "BOUSSA": [
            {
              "station": "EP BOUSSA / A",
              "voters": 438
            }
          ],
          "BOURWOUY": [
            {
              "station": "EP BROUWOY / A",
              "voters": 995
            }
          ],
          "HIRGUILAM": [
            {
              "station": "EP BROUWOY / A",
              "voters": 995
            }
          ],
          "MEDEBING": [
            {
              "station": "EP BROUWOY / A",
              "voters": 995
            }
          ],
          "SAMKA": [
            {
              "station": "EP BROUWOY / A",
              "voters": 995
            }
          ],
          "DABA-DABA": [
            {
              "station": "EP DABA DABA / A",
              "voters": 282
            }
          ],
          "LARMA": [
            {
              "station": "EP DABA DABA / A",
              "voters": 399
            }
          ],
          "TEKELI": [
            {
              "station": "EP DABA DABA / A",
              "voters": 282
            }
          ],
          "DAFA": [
            {
              "station": "EP DAFA LE HAUT / A",
              "voters": 2154
            }
          ],
          "BAS": [
            {
              "station": "EP DAFA LE HAUT / A",
              "voters": 588
            }
          ],
          "HAUT": [
            {
              "station": "EP DAFA LE HAUT / A",
              "voters": 588
            }
          ],
          "POKA": [
            {
              "station": "EP DAFA LE HAUT / A",
              "voters": 588
            }
          ],
          "DANGAR": [
            {
              "station": "EP DANGAR / A",
              "voters": 363
            }
          ],
          "DONFANA": [
            {
              "station": "EP DANGAR / A",
              "voters": 363
            }
          ],
          "KOLAR": [
            {
              "station": "EP DES PARENTS NDJARA / A",
              "voters": 227
            }
          ],
          "NDJARA": [
            {
              "station": "EP DES PARENTS NDJARA / A",
              "voters": 227
            }
          ],
          "VOURMOUTCH": [
            {
              "station": "EP DES PARENTS NDJARA / A",
              "voters": 227
            }
          ],
          "DIRI": [
            {
              "station": "EP DIRI / A",
              "voters": 447
            }
          ],
          "LONDA": [
            {
              "station": "EP DIRI / A",
              "voters": 447
            }
          ],
          "DJABI": [
            {
              "station": "EP DJABI / A",
              "voters": 1014
            }
          ],
          "DJOMA": [
            {
              "station": "EP DJABI / A",
              "voters": 1754
            }
          ],
          "ISSA": [
            {
              "station": "EP DJABI / A",
              "voters": 1014
            }
          ],
          "TCHAMPALAM": [
            {
              "station": "EP DJABI / A",
              "voters": 1014
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 1193
            }
          ],
          "BOKO": [
            {
              "station": "EP DJOMA BOKO / A",
              "voters": 490
            }
          ],
          "BANA": [
            {
              "station": "EP DOUROUM / A",
              "voters": 738
            }
          ],
          "DOUROUM": [
            {
              "station": "EP DOUROUM / A",
              "voters": 3896
            }
          ],
          "GADA": [
            {
              "station": "EP DOUROUM / A",
              "voters": 3343
            }
          ],
          "MAYO": [
            {
              "station": "EP DOUROUM / A",
              "voters": 5139
            }
          ],
          "LAMORDE": [
            {
              "station": "EP DOUROUM / A",
              "voters": 5790
            }
          ],
          "NASSARAO": [
            {
              "station": "EP DOUROUM / A",
              "voters": 738
            }
          ],
          "PLATEAU": [
            {
              "station": "EP DOUROUM / A",
              "voters": 738
            }
          ],
          "SODECOTON": [
            {
              "station": "EP DOUROUM / A",
              "voters": 738
            }
          ],
          "GALAO": [
            {
              "station": "EP GALAO / A",
              "voters": 348
            }
          ],
          "TASKAOU": [
            {
              "station": "EP GALAO / A",
              "voters": 348
            }
          ],
          "GOLOMBE": [
            {
              "station": "EP GANDA GOLOMBE / A",
              "voters": 4228
            }
          ],
          "KONA": [
            {
              "station": "EP GANDA GOLOMBE / A",
              "voters": 1521
            }
          ],
          "OURO-BASKODJE": [
            {
              "station": "EP GANDA GOLOMBE / A",
              "voters": 356
            }
          ],
          "HERI": [
            {
              "station": "EP GARA GOLOMBE / A",
              "voters": 1087
            }
          ],
          "DJARA": [
            {
              "station": "EP GARA GUIDER / A",
              "voters": 606
            }
          ],
          "GARA": [
            {
              "station": "EP GARA GUIDER / A",
              "voters": 1129
            }
          ],
          "NDAOUDJI": [
            {
              "station": "EP GARA GUIDER / A",
              "voters": 606
            }
          ],
          "DANSANG": [
            {
              "station": "EP GATOUGUEL / A",
              "voters": 1006
            }
          ],
          "GATOUGUEL": [
            {
              "station": "EP GATOUGUEL / A",
              "voters": 1006
            }
          ],
          "GAVAL": [
            {
              "station": "EP GAVAL / A",
              "voters": 784
            }
          ],
          "BAIGODJE": [
            {
              "station": "EP GAVAL / A",
              "voters": 408
            }
          ],
          "SINGLIV": [
            {
              "station": "EP GAVAL / A",
              "voters": 408
            }
          ],
          "VONOZOUM": [
            {
              "station": "EP GAVAL / A",
              "voters": 408
            }
          ],
          "GOROM": [
            {
              "station": "EP GOROM / A",
              "voters": 1018
            }
          ],
          "KOSSEYEL": [
            {
              "station": "EP GOROM / A",
              "voters": 1600
            }
          ],
          "-DJOHI": [
            {
              "station": "EP GOROM / A",
              "voters": 1068
            }
          ],
          "GOULONG": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 2600
            }
          ],
          "FALI": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 520
            }
          ],
          "KARLAHI": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 520
            }
          ],
          "OURO-BOUBA": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 520
            }
          ],
          "OURO-GODO": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 520
            }
          ],
          "OURO-NGNEBE": [
            {
              "station": "EP GOULONG FALI / A",
              "voters": 520
            }
          ],
          "GUEZEOU": [
            {
              "station": "EP GUEZEOU / A",
              "voters": 417
            }
          ],
          "OURO-LOGOM": [
            {
              "station": "EP GUEZEOU / A",
              "voters": 417
            }
          ],
          "KAFINAROU": [
            {
              "station": "EP KAFINAROU / A",
              "voters": 235
            }
          ],
          "OURO-IYA": [
            {
              "station": "EP KAFINAROU / A",
              "voters": 235
            }
          ],
          "KAIGAMA": [
            {
              "station": "EP KAIGAMA / A",
              "voters": 4249
            }
          ],
          "KESSOUM": [
            {
              "station": "EP KAIGAMA / A",
              "voters": 4316
            }
          ],
          "KAKALA": [
            {
              "station": "EP KAKALA / A",
              "voters": 555
            }
          ],
          "KARIA": [
            {
              "station": "EP KAKALA / A",
              "voters": 555
            }
          ],
          "BEDEVE": [
            {
              "station": "EP KAPTA MADI / A",
              "voters": 488
            }
          ],
          "KAPTA": [
            {
              "station": "EP KAPTA MADI / A",
              "voters": 269
            }
          ],
          "MADI": [
            {
              "station": "EP KAPTA MADI / A",
              "voters": 789
            }
          ],
          "MASGAM": [
            {
              "station": "EP KAPTA MADI / A",
              "voters": 269
            }
          ],
          "OURO-TOUWE": [
            {
              "station": "EP KAPTA MADI / A",
              "voters": 488
            }
          ],
          "KASIER": [
            {
              "station": "EP KASIER / A",
              "voters": 334
            }
          ],
          "KERGUENG": [
            {
              "station": "EP KERGUENG / A",
              "voters": 4266
            }
          ],
          "MESSENGUE": [
            {
              "station": "EP KOINA MESSINGUE / A",
              "voters": 460
            }
          ],
          "BAINGA": [
            {
              "station": "EP KOLA / A",
              "voters": 977
            }
          ],
          "KOLA": [
            {
              "station": "EP KOLA / A",
              "voters": 4024
            }
          ],
          "BEROU": [
            {
              "station": "EP KOSSI / A",
              "voters": 521
            }
          ],
          "KOSSI": [
            {
              "station": "EP KOSSI / A",
              "voters": 521
            }
          ],
          "BETCHE": [
            {
              "station": "EP LAMORDE / A",
              "voters": 1870
            }
          ],
          "SOULKATA": [
            {
              "station": "EP LAMORDE / A",
              "voters": 1870
            }
          ],
          "LARBACK": [
            {
              "station": "EP LARBACK / A",
              "voters": 827
            }
          ],
          "MANGRAYEL": [
            {
              "station": "EP LARBACK / A",
              "voters": 827
            }
          ],
          "OURO-DOUVA": [
            {
              "station": "EP LARBACK / A",
              "voters": 827
            }
          ],
          "OURO-TCHAKORGUEL": [
            {
              "station": "EP LARBACK / A",
              "voters": 827
            }
          ],
          "DEGUERI": [
            {
              "station": "EP LIBE / A",
              "voters": 526
            }
          ],
          "LIBE": [
            {
              "station": "EP LIBE / A",
              "voters": 820
            }
          ],
          "LOMBEL": [
            {
              "station": "EP LOMBEL / A",
              "voters": 397
            }
          ],
          "YOUKVOUNA": [
            {
              "station": "EP LOUGGUERE / A",
              "voters": 829
            }
          ],
          "MAISSANDA": [
            {
              "station": "EP MAISSANDA / A",
              "voters": 213
            }
          ],
          "MALMAS": [
            {
              "station": "EP MALMAS / A",
              "voters": 206
            }
          ],
          "GOLVONG": [
            {
              "station": "EP MALWOY / A",
              "voters": 448
            }
          ],
          "MALWOY": [
            {
              "station": "EP MALWOY / A",
              "voters": 448
            }
          ],
          "MATAFAL": [
            {
              "station": "EP MATAFAL / A",
              "voters": 461
            }
          ],
          "MATAFALRE": [
            {
              "station": "EP MATAFALRE / A",
              "voters": 462
            }
          ],
          "TCHIKAF": [
            {
              "station": "EP MATAFALRE / A",
              "voters": 462
            }
          ],
          "KIRIRAMBO": [
            {
              "station": "EP MATAIBAO / A",
              "voters": 797
            }
          ],
          "MATAIBAO": [
            {
              "station": "EP MATAIBAO / A",
              "voters": 641
            }
          ],
          "NELBI": [
            {
              "station": "EP MATAIBAO / A",
              "voters": 641
            }
          ],
          "KEWE": [
            {
              "station": "EP MAYO KEWE / A",
              "voters": 578
            }
          ],
          "TALDAM": [
            {
              "station": "EP MAYO KEWE / A",
              "voters": 578
            }
          ],
          "KORA": [
            {
              "station": "EP MAYO KORA / A",
              "voters": 356
            }
          ],
          "MAYO-LOUE": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 827
            }
          ],
          "OURO-DJAOURO": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 2189
            }
          ],
          "NGOUFDA": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 827
            }
          ],
          "OURO-TOUPOURI": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 827
            }
          ],
          "WALEWOL": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 1060
            }
          ],
          "NOME": [
            {
              "station": "EP MAYO LOUE / A",
              "voters": 827
            }
          ],
          "DOKOYOUM": [
            {
              "station": "EP MAYO MALAO / A",
              "voters": 235
            }
          ],
          "KOUSMADOUMA": [
            {
              "station": "EP MAYO MALAO / A",
              "voters": 235
            }
          ],
          "MAYO-SOMBRE": [
            {
              "station": "EP MAYO SOMBRE / A",
              "voters": 201
            }
          ],
          "MAZAVLA": [
            {
              "station": "EP MAZAVLA / A",
              "voters": 152
            }
          ],
          "MEDEZEM": [
            {
              "station": "EP MEDEZEM / A",
              "voters": 331
            }
          ],
          "MBIRMIDIGUIP": [
            {
              "station": "EP MELEDEM / A",
              "voters": 546
            }
          ],
          "MELEDEM": [
            {
              "station": "EP MELEDEM / A",
              "voters": 371
            }
          ],
          "DALGAN": [
            {
              "station": "EP MENDJEKER / A",
              "voters": 317
            }
          ],
          "FILOU": [
            {
              "station": "EP MENDJEKER / A",
              "voters": 317
            }
          ],
          "MENDJEKER": [
            {
              "station": "EP MENDJEKER / A",
              "voters": 317
            }
          ],
          "TCHIKAFAI": [
            {
              "station": "EP MENDJEKER / A",
              "voters": 317
            }
          ],
          "TIRLAO": [
            {
              "station": "EP MENDJEKER / A",
              "voters": 317
            }
          ],
          "BOLO": [
            {
              "station": "EP MESSO / A",
              "voters": 221
            }
          ],
          "GOUDACK": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 512
            }
          ],
          "MAYO-SANGANARE": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 512
            }
          ],
          "MOKORVONG": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 977
            }
          ],
          "-MOUSGOUY": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 512
            }
          ],
          "KATCHALLA": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 512
            }
          ],
          "TAWAN": [
            {
              "station": "EP MOKORVONG / A",
              "voters": 512
            }
          ],
          "BANAM": [
            {
              "station": "EP MOUSGOY / A",
              "voters": 462
            }
          ],
          "MARMA": [
            {
              "station": "EP MOUSGOY / A",
              "voters": 462
            }
          ],
          "MOUSGOY": [
            {
              "station": "EP MOUSGOY / A",
              "voters": 1444
            }
          ],
          "ZAGA": [
            {
              "station": "EP MOUSGOY / A",
              "voters": 739
            }
          ],
          "GOUFOURE": [
            {
              "station": "EP NDIAM ETINA / A",
              "voters": 600
            }
          ],
          "NDIAM": [
            {
              "station": "EP NDIAM ETINA / A",
              "voters": 1761
            }
          ],
          "ETINA": [
            {
              "station": "EP NDIAM ETINA / A",
              "voters": 1120
            }
          ],
          "TOLDOU": [
            {
              "station": "EP NDIAM ETINA / A",
              "voters": 600
            }
          ],
          "DJEDJENGUE": [
            {
              "station": "EP OURO ALHADJI / A",
              "voters": 726
            }
          ],
          "ALHADJI": [
            {
              "station": "EP OURO ALHADJI / A",
              "voters": 1366
            }
          ],
          "OURO-ALHADJI": [
            {
              "station": "EP OURO ALHADJI / A",
              "voters": 726
            }
          ],
          "TONKOLO": [
            {
              "station": "EP OURO ALHADJI / A",
              "voters": 726
            }
          ],
          "BARA": [
            {
              "station": "EP OURO HAOUSSA / A",
              "voters": 1272
            }
          ],
          "OURO-TARA": [
            {
              "station": "EP OURO TARA / A",
              "voters": 611
            }
          ],
          "BALDA": [
            {
              "station": "EP PAHA / A",
              "voters": 496
            }
          ],
          "PAHA": [
            {
              "station": "EP PAHA / A",
              "voters": 617
            }
          ],
          "TIMOTI": [
            {
              "station": "EP RIBAO GOLOMBE / A",
              "voters": 529
            }
          ],
          "SARWA": [
            {
              "station": "EP SARWA / A",
              "voters": 271
            }
          ],
          "SIBRE": [
            {
              "station": "EP SIBRE MALAYE / A",
              "voters": 646
            }
          ],
          "MALAYE": [
            {
              "station": "EP SIBRE MALAYE / A",
              "voters": 306
            }
          ],
          "TOROU": [
            {
              "station": "EP SIBRETORDOU / A",
              "voters": 340
            }
          ],
          "SINGAIDI": [
            {
              "station": "EP SINGAIDI / A",
              "voters": 532
            }
          ],
          "SODALOU": [
            {
              "station": "EP SODALOU / A",
              "voters": 534
            }
          ],
          "SORAWEL": [
            {
              "station": "EP SORAWEL / A",
              "voters": 955
            }
          ],
          "BABAGUEL": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 414
            }
          ],
          "MAYEL": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 2287
            }
          ],
          "TCHOLLI": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 414
            }
          ],
          "NGONDOUROU": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 699
            }
          ],
          "SOSSILIM": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 414
            }
          ],
          "WADJERE": [
            {
              "station": "EP SOSSILIM / A",
              "voters": 699
            }
          ],
          "SOUCKOUDOU": [
            {
              "station": "EP SOUCKOUNDOU / A",
              "voters": 555
            }
          ],
          "BAIDAY": [
            {
              "station": "EP TALAZOUAI / A",
              "voters": 301
            }
          ],
          "TALAZOUAI": [
            {
              "station": "EP TALAZOUAI / A",
              "voters": 301
            }
          ],
          "TILBIT": [
            {
              "station": "EP TALAZOUAI / A",
              "voters": 301
            }
          ],
          "PAZARA": [
            {
              "station": "EP TCHEKAL / A",
              "voters": 1055
            }
          ],
          "PONT": [
            {
              "station": "EP TCHEKAL / A",
              "voters": 888
            }
          ],
          "TCHEKAL": [
            {
              "station": "EP TCHEKAL / A",
              "voters": 888
            }
          ],
          "TCHONTCHI": [
            {
              "station": "EP TCHONTCHI / A",
              "voters": 1804
            }
          ],
          "TIKELKE": [
            {
              "station": "EP TIKELKE / A",
              "voters": 436
            }
          ],
          "TOFOR": [
            {
              "station": "EP TIKELKE / A",
              "voters": 436
            }
          ],
          "YAPERE": [
            {
              "station": "EP TIKELKE / A",
              "voters": 436
            }
          ],
          "ALIM": [
            {
              "station": "EP TIKELKE / A",
              "voters": 436
            }
          ],
          "TIMBO": [
            {
              "station": "EP TIMBO / A",
              "voters": 91
            }
          ],
          "BOULOU": [
            {
              "station": "EP TRA / A",
              "voters": 376
            }
          ],
          "DJARENDI": [
            {
              "station": "EP TRA / A",
              "voters": 376
            }
          ],
          "DOULA": [
            {
              "station": "EP TRA / A",
              "voters": 376
            }
          ],
          "DANAYEL": [
            {
              "station": "EP WALEWOL GADE / A",
              "voters": 397
            }
          ],
          "WALEWOL-GADE": [
            {
              "station": "EP WALEWOL GADE / A",
              "voters": 262
            }
          ],
          "WINDE-LOUE": [
            {
              "station": "EP WINDE LOUE / A",
              "voters": 423
            }
          ],
          "BABASALACK": [
            {
              "station": "EP WINDE YOLA / A",
              "voters": 291
            }
          ],
          "BOKO-DOUROUM": [
            {
              "station": "EP WINDE YOLA / A",
              "voters": 291
            }
          ],
          "MADEKRE": [
            {
              "station": "EP WINDE YOLA / A",
              "voters": 291
            }
          ],
          "OURO-LESS": [
            {
              "station": "EP WINDE YOLA / A",
              "voters": 291
            }
          ],
          "BODONG": [
            {
              "station": "EP YAPERE / A",
              "voters": 473
            }
          ],
          "NDOLOM": [
            {
              "station": "EP YAPERE / A",
              "voters": 473
            }
          ],
          "YAPARE": [
            {
              "station": "EP YAPERE / A",
              "voters": 473
            }
          ],
          "AHMADOU": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 4028
            }
          ],
          "KOLAS": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 12528
            }
          ],
          "YAOUNDE": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3940
            }
          ],
          "FALAMA": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 4560
            }
          ],
          "HAMADOU": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3594
            }
          ],
          "DAWA": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3594
            }
          ],
          "MOKOLO": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3940
            }
          ],
          "MOUSSA": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3940
            }
          ],
          "SANGUERE": [
            {
              "station": "EPA SANGUERE / A",
              "voters": 3940
            }
          ],
          "BASSIRA": [
            {
              "station": "ESPL CHEF BASSIRA / A",
              "voters": 264
            }
          ],
          "HASSOUMI": [
            {
              "station": "ESPL CHEF BEBERE GADA MAYO / A",
              "voters": 886
            }
          ],
          "BOHONG": [
            {
              "station": "ESPL CHEF BOHONG / A",
              "voters": 803
            }
          ],
          "MAL": [
            {
              "station": "ESPL CHEF BOHONG / A",
              "voters": 4550
            }
          ],
          "SIDDIKI": [
            {
              "station": "ESPL CHEF BOHONG / A",
              "voters": 956
            }
          ],
          "BOUDJOULKOU": [
            {
              "station": "ESPL CHEF BOUDJOULKOU / A",
              "voters": 220
            }
          ],
          "DALE": [
            {
              "station": "ESPL CHEF DALE / A",
              "voters": 390
            }
          ],
          "FITIM": [
            {
              "station": "ESPL CHEF DALE / A",
              "voters": 390
            }
          ],
          "PARKINE": [
            {
              "station": "ESPL CHEF DALE / A",
              "voters": 747
            }
          ],
          "SABERE": [
            {
              "station": "ESPL CHEF DALE / A",
              "voters": 390
            }
          ],
          "DELEGUE": [
            {
              "station": "ESPL CHEF DELEGUE I / A",
              "voters": 3051
            }
          ],
          "CENTRE": [
            {
              "station": "ESPL CHEF DELEGUE I / A",
              "voters": 1513
            }
          ],
          "DEM": [
            {
              "station": "ESPL CHEF DEM / A",
              "voters": 750
            }
          ],
          "GANDA": [
            {
              "station": "ESPL CHEF DEM / A",
              "voters": 1372
            }
          ],
          "LELING": [
            {
              "station": "ESPL CHEF DEM / A",
              "voters": 541
            }
          ],
          "BANI": [
            {
              "station": "ESPL CHEF DEM / A",
              "voters": 303
            }
          ],
          "GAOUDJA": [
            {
              "station": "ESPL CHEF DEM / A",
              "voters": 303
            }
          ],
          "DJABBIRE": [
            {
              "station": "ESPL CHEF DJABBIRE RAOU / A",
              "voters": 244
            }
          ],
          "RAOU": [
            {
              "station": "ESPL CHEF DJABBIRE RAOU / A",
              "voters": 244
            }
          ],
          "DJAMTARI": [
            {
              "station": "ESPL CHEF DJAMTARI / A",
              "voters": 650
            }
          ],
          "OURO-KESSOUM": [
            {
              "station": "ESPL CHEF DJAMTARI / A",
              "voters": 4938
            }
          ],
          "DJARENGOL": [
            {
              "station": "ESPL CHEF DJARENGOL / A",
              "voters": 614
            }
          ],
          "DAFAN": [
            {
              "station": "ESPL CHEF DJARENGOL / A",
              "voters": 320
            }
          ],
          "DJOUNDE": [
            {
              "station": "ESPL CHEF DJOUNDE / A",
              "voters": 254
            }
          ],
          "DOUBOULWOUY": [
            {
              "station": "ESPL CHEF DOBOULWOY / A",
              "voters": 145
            }
          ],
          "DOUBAS": [
            {
              "station": "ESPL CHEF DOUBAS / A",
              "voters": 301
            }
          ],
          "DOUBI": [
            {
              "station": "ESPL CHEF DOUBI / A",
              "voters": 364
            }
          ],
          "KORGOU": [
            {
              "station": "ESPL CHEF GADA KORGOU / A",
              "voters": 1217
            }
          ],
          "DALAMI": [
            {
              "station": "ESPL CHEF GANGOUR BORI / A",
              "voters": 216
            }
          ],
          "GANGOUR": [
            {
              "station": "ESPL CHEF GANGOUR BORI / A",
              "voters": 216
            }
          ],
          "BORI": [
            {
              "station": "ESPL CHEF GANGOUR BORI / A",
              "voters": 216
            }
          ],
          "SESSARA": [
            {
              "station": "ESPL CHEF GANGOUR BORI / A",
              "voters": 216
            }
          ],
          "LAWAN": [
            {
              "station": "ESPL CHEF GAVAL LAWAN TODOU / A",
              "voters": 376
            }
          ],
          "TODOU": [
            {
              "station": "ESPL CHEF GAVAL LAWAN TODOU / A",
              "voters": 1203
            }
          ],
          "KAFKAI": [
            {
              "station": "ESPL CHEF GAVAL LAWAN TODOU / A",
              "voters": 559
            }
          ],
          "GOLOMO": [
            {
              "station": "ESPL CHEF GOLOMO / A",
              "voters": 242
            }
          ],
          "GONDOUROU": [
            {
              "station": "ESPL CHEF GONDOUROU / A",
              "voters": 285
            }
          ],
          "GORTONG": [
            {
              "station": "ESPL CHEF GORTONG / A",
              "voters": 209
            }
          ],
          "DJIMTEL": [
            {
              "station": "ESPL CHEF GOULDANWOL / A",
              "voters": 142
            }
          ],
          "GOULDANWOL": [
            {
              "station": "ESPL CHEF GOULDANWOL / A",
              "voters": 142
            }
          ],
          "OURO-HAOUSSA": [
            {
              "station": "ESPL CHEF GOULDANWOL / A",
              "voters": 553
            }
          ],
          "GUIRLAO": [
            {
              "station": "ESPL CHEF GUIRLAO / A",
              "voters": 103
            }
          ],
          "LEREBI": [
            {
              "station": "ESPL CHEF GUIRLAO / A",
              "voters": 103
            }
          ],
          "III": [
            {
              "station": "ESPL CHEF KAIGAMA III / A",
              "voters": 1627
            }
          ],
          "KARMBAY": [
            {
              "station": "ESPL CHEF KARBAY / A",
              "voters": 206
            }
          ],
          "KEREING": [
            {
              "station": "ESPL CHEF KEREING / A",
              "voters": 387
            }
          ],
          "KOINA": [
            {
              "station": "ESPL CHEF KOINA MAIGARI / A",
              "voters": 833
            }
          ],
          "MAIGARI": [
            {
              "station": "ESPL CHEF KOINA MAIGARI / A",
              "voters": 373
            }
          ],
          "KADJONKA": [
            {
              "station": "ESPL CHEF KORAKE / A",
              "voters": 449
            }
          ],
          "KORAKE": [
            {
              "station": "ESPL CHEF KORAKE / A",
              "voters": 449
            }
          ],
          "MADIA": [
            {
              "station": "ESPL CHEF KORAKE / A",
              "voters": 593
            }
          ],
          "DANEYEL": [
            {
              "station": "ESPL CHEF KOSSEYEL DANEYEL / A",
              "voters": 135
            }
          ],
          "DAWAI": [
            {
              "station": "ESPL CHEF LOUGGUERE DAWAI / A",
              "voters": 191
            }
          ],
          "DJABE": [
            {
              "station": "ESPL CHEF LOUGGUERE WALA / A",
              "voters": 437
            }
          ],
          "LOUGGUERE": [
            {
              "station": "ESPL CHEF LOUGGUERE WALA / A",
              "voters": 1176
            }
          ],
          "WALA": [
            {
              "station": "ESPL CHEF LOUGGUERE WALA / A",
              "voters": 156
            }
          ],
          "MALIA": [
            {
              "station": "ESPL CHEF MALIA / A",
              "voters": 229
            }
          ],
          "MAMBAZA": [
            {
              "station": "ESPL CHEF MAMBAZA / A",
              "voters": 368
            }
          ],
          "KOUE": [
            {
              "station": "ESPL CHEF MAMBAZA / A",
              "voters": 184
            }
          ],
          "VAGAMA": [
            {
              "station": "ESPL CHEF MAMBAZA / A",
              "voters": 677
            }
          ],
          "MANTCHOUROUF": [
            {
              "station": "ESPL CHEF MANTCHOUROUF / A",
              "voters": 130
            }
          ],
          "ADJIA": [
            {
              "station": "ESPL CHEF MANTCHOUROUF / A",
              "voters": 130
            }
          ],
          "MAYEL-KOGUI": [
            {
              "station": "ESPL CHEF MAYEL KOGUI / A",
              "voters": 466
            }
          ],
          "POLI": [
            {
              "station": "ESPL CHEF MAYEL POLI / A",
              "voters": 603
            }
          ],
          "SOUPTABANI": [
            {
              "station": "ESPL CHEF MAYEL POLI / A",
              "voters": 1369
            }
          ],
          "SADOU": [
            {
              "station": "ESPL CHEF MAYEL POLI / A",
              "voters": 986
            }
          ],
          "YOLDE": [
            {
              "station": "ESPL CHEF MAYEL POLI / A",
              "voters": 603
            }
          ],
          "KAREHI": [
            {
              "station": "ESPL CHEF MAYEL POLI / A",
              "voters": 603
            }
          ],
          "MAYO-SIWO": [
            {
              "station": "ESPL CHEF MAYO SIWA / A",
              "voters": 215
            }
          ],
          "LOUMAS": [
            {
              "station": "ESPL CHEF MBIRDIF / A",
              "voters": 427
            }
          ],
          "MBOR": [
            {
              "station": "ESPL CHEF MBOR / A",
              "voters": 230
            }
          ],
          "MELEMLEM": [
            {
              "station": "ESPL CHEF MELEMLEM / A",
              "voters": 488
            }
          ],
          "MODJONGO": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 1396
            }
          ],
          "DEWA": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 349
            }
          ],
          "GOULE": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 349
            }
          ],
          "HAMAN": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 349
            }
          ],
          "WABI": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 349
            }
          ],
          "OUSMANOU": [
            {
              "station": "ESPL CHEF MODJONGO / A",
              "voters": 349
            }
          ],
          "LOUE": [
            {
              "station": "ESPL CHEF MOKORVONG MAYO LOUE / A",
              "voters": 465
            }
          ],
          "MONGORO": [
            {
              "station": "ESPL CHEF MONGORO WAIDONGO / A",
              "voters": 223
            }
          ],
          "WAIDONGO": [
            {
              "station": "ESPL CHEF MONGORO WAIDONGO / A",
              "voters": 223
            }
          ],
          "OURO-MORDOY": [
            {
              "station": "ESPL CHEF MORDOY / A",
              "voters": 80
            }
          ],
          "DJIBAOU": [
            {
              "station": "ESPL CHEF MOUKOI / A",
              "voters": 238
            }
          ],
          "MOUKOI": [
            {
              "station": "ESPL CHEF MOUKOI / A",
              "voters": 238
            }
          ],
          "BADESSI": [
            {
              "station": "ESPL CHEF NDOUA / A",
              "voters": 795
            }
          ],
          "BAMBALO": [
            {
              "station": "ESPL CHEF NDOUA / A",
              "voters": 795
            }
          ],
          "NDOUA": [
            {
              "station": "ESPL CHEF NDOUA / A",
              "voters": 542
            }
          ],
          "NAI": [
            {
              "station": "ESPL CHEF NDOUA / A",
              "voters": 800
            }
          ],
          "NDONDOLO": [
            {
              "station": "ESPL CHEF NORGO / A",
              "voters": 887
            }
          ],
          "NORGO": [
            {
              "station": "ESPL CHEF NORGO / A",
              "voters": 887
            }
          ],
          "ALKALI": [
            {
              "station": "ESPL CHEF OURO ALKALI / A",
              "voters": 1236
            }
          ],
          "SAGAMA": [
            {
              "station": "ESPL CHEF OURO ALKALI / A",
              "voters": 1236
            }
          ],
          "MATHIEU": [
            {
              "station": "ESPL CHEF OURO BAMO / A",
              "voters": 478
            }
          ],
          "KOUNA": [
            {
              "station": "ESPL CHEF OURO BAMO / A",
              "voters": 478
            }
          ],
          "NDALFA": [
            {
              "station": "ESPL CHEF OURO BAMO / A",
              "voters": 478
            }
          ],
          "SERME": [
            {
              "station": "ESPL CHEF OURO BAMO / A",
              "voters": 700
            }
          ],
          "MAGADJI": [
            {
              "station": "ESPL CHEF OURO BOCKI / A",
              "voters": 469
            }
          ],
          "OURO-BOCKI": [
            {
              "station": "ESPL CHEF OURO BOCKI / A",
              "voters": 469
            }
          ],
          "OURO-BOKO": [
            {
              "station": "ESPL CHEF OURO BOKO / A",
              "voters": 251
            }
          ],
          "TCHOUMBOUL": [
            {
              "station": "ESPL CHEF OURO BOKO / A",
              "voters": 251
            }
          ],
          "BARKAO": [
            {
              "station": "ESPL CHEF OURO BOUBA / A",
              "voters": 77
            }
          ],
          "LOUGGA": [
            {
              "station": "ESPL CHEF OURO BOUBA / A",
              "voters": 817
            }
          ],
          "BOUBA": [
            {
              "station": "ESPL CHEF OURO BOUBA / A",
              "voters": 4654
            }
          ],
          "DAMA": [
            {
              "station": "ESPL CHEF OURO DAMA / A",
              "voters": 1479
            }
          ],
          "OURLANG": [
            {
              "station": "ESPL CHEF OURO MORDOY / A",
              "voters": 258
            }
          ],
          "MORDOY": [
            {
              "station": "ESPL CHEF OURO MORDOY / A",
              "voters": 258
            }
          ],
          "NGNERE": [
            {
              "station": "ESPL CHEF OURO NGNERE / A",
              "voters": 258
            }
          ],
          "OURO-SADAY": [
            {
              "station": "ESPL CHEF OURO SADAY / A",
              "voters": 213
            }
          ],
          "VOUNDOU": [
            {
              "station": "ESPL CHEF OURO WACSINE / A",
              "voters": 144
            }
          ],
          "YAYA": [
            {
              "station": "ESPL CHEF PADJARA YAYA / A",
              "voters": 167
            }
          ],
          "LOUBACK": [
            {
              "station": "ESPL CHEF PAPRENKI / A",
              "voters": 294
            }
          ],
          "MOTORDOKO": [
            {
              "station": "ESPL CHEF PAPRENKI / A",
              "voters": 294
            }
          ],
          "PAPRENKI": [
            {
              "station": "ESPL CHEF PAPRENKI / A",
              "voters": 294
            }
          ],
          "POMLA": [
            {
              "station": "ESPL CHEF POMLA / A",
              "voters": 172
            }
          ],
          "POUGOU": [
            {
              "station": "ESPL CHEF POUGOU / A",
              "voters": 528
            }
          ],
          "BIRI": [
            {
              "station": "ESPL CHEF ROUMDE / A",
              "voters": 525
            }
          ],
          "IDEAL": [
            {
              "station": "ESPL CHEF ROUMDE / A",
              "voters": 525
            }
          ],
          "KORAYEL": [
            {
              "station": "ESPL CHEF ROUMDE / A",
              "voters": 525
            }
          ],
          "ROUMDE": [
            {
              "station": "ESPL CHEF ROUMDE / A",
              "voters": 525
            }
          ],
          "GAOUDALI": [
            {
              "station": "ESPL CHEF SEBORE BAILA / A",
              "voters": 195
            }
          ],
          "HARDE": [
            {
              "station": "ESPL CHEF SEBORE BAILA / A",
              "voters": 195
            }
          ],
          "KAYEFI": [
            {
              "station": "ESPL CHEF SEBORE BAILA / A",
              "voters": 195
            }
          ],
          "SOULKANDOU": [
            {
              "station": "ESPL CHEF SOULKANDOU / A",
              "voters": 253
            }
          ],
          "NDABALA": [
            {
              "station": "ESPL CHEF TCHAKADJAM / A",
              "voters": 364
            }
          ],
          "TCHAKADJAMWO": [
            {
              "station": "ESPL CHEF TCHAKADJAM / A",
              "voters": 364
            }
          ],
          "WALDE": [
            {
              "station": "ESPL CHEF WALDE BORORO / A",
              "voters": 562
            }
          ],
          "BORORO": [
            {
              "station": "ESPL CHEF WALDE BORORO / A",
              "voters": 562
            }
          ],
          "ROUMBO": [
            {
              "station": "ESPL CHEF WALEWOL ROUMBO / A",
              "voters": 233
            }
          ],
          "TCHADA": [
            {
              "station": "ESPL CHEF WOULEP / A",
              "voters": 254
            }
          ],
          "GAOULA": [
            {
              "station": "ESPL CHEF WOULEP / A",
              "voters": 254
            }
          ],
          "WOULEP": [
            {
              "station": "ESPL CHEF WOULEP / A",
              "voters": 254
            }
          ],
          "DARBA": [
            {
              "station": "ESPL CHEF ZAGA DARBA / A",
              "voters": 277
            }
          ],
          "DAKOUME": [
            {
              "station": "GIC MAYO DAKOUME / A",
              "voters": 180
            }
          ],
          "HERIYEL": [
            {
              "station": "HAGAR CHEFFERIE HERIYEL / A",
              "voters": 89
            }
          ],
          "DJAOURO": [
            {
              "station": "LYCEE CLASSIQUE GUIDER / A",
              "voters": 28270
            }
          ],
          "YAMASINO": [
            {
              "station": "LYCEE CLASSIQUE GUIDER / A",
              "voters": 1643
            }
          ],
          "LAKARWAR": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 293
            }
          ],
          "CAMP": [
            {
              "station": "SAR/SM GUIDER / A",
              "voters": 1540
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "SAR/SM GUIDER / A",
              "voters": 1446
            }
          ],
          "THOMAS": [
            {
              "station": "SAR/SM GUIDER / A",
              "voters": 561
            }
          ]
        },
        "MAYO-OULO": {
          "RA'AN": [
            {
              "station": "BORNE FONTAINE RA'AN / A",
              "voters": 466
            }
          ],
          "FOLINIRKI": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 2620
            }
          ],
          "MATRA": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1950
            }
          ],
          "GALBIHI": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1152
            }
          ],
          "MAYO-NGALBIHI": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1152
            }
          ],
          "SOUARI": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1152
            }
          ],
          "YELWATA": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1152
            }
          ],
          "YINOUM": [
            {
              "station": "BUREAU POSTE AGRICOLE / A",
              "voters": 1152
            }
          ],
          "LIBDJIKIKA": [
            {
              "station": "C.E.S. DE POLOGOZOM / A",
              "voters": 360
            }
          ],
          "BALOUM": [
            {
              "station": "CES DOURBEYE / A",
              "voters": 1501
            }
          ],
          "NGOURORE": [
            {
              "station": "CES DOURBEYE / A",
              "voters": 1501
            }
          ],
          "BOSSOUM,": [
            {
              "station": "E.P. DE BOSSOUM / A",
              "voters": 420
            }
          ],
          "TCHAPLA-SODJODJI": [
            {
              "station": "E.P. DE TCHAPKA-PASSIRI / A",
              "voters": 316
            }
          ],
          "TCHENKELENG": [
            {
              "station": "E.P. DE TCHAPKA-PASSIRI / A",
              "voters": 316
            }
          ],
          "DJOUMETCHI": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE DOUMO / A",
              "voters": 312
            }
          ],
          "BILANGE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE DOUMO / A",
              "voters": 312
            }
          ],
          "BALA": [
            {
              "station": "EP BALA / A",
              "voters": 570
            }
          ],
          "BAO": [
            {
              "station": "EP BALA / A",
              "voters": 570
            }
          ],
          "BOLIGUI": [
            {
              "station": "EP BALA / A",
              "voters": 570
            }
          ],
          "BANGAYE": [
            {
              "station": "EP BANGAYE FALI / A",
              "voters": 321
            }
          ],
          "FALI": [
            {
              "station": "EP BANGAYE FALI / A",
              "voters": 321
            }
          ],
          "BORAM": [
            {
              "station": "EP BANGAYE FALI / A",
              "voters": 321
            }
          ],
          "LILIMAKODOK": [
            {
              "station": "EP BANGAYE FALI / A",
              "voters": 321
            }
          ],
          "BERENG": [
            {
              "station": "EP BERENG / A",
              "voters": 170
            }
          ],
          "KEOU": [
            {
              "station": "EP BERENG / A",
              "voters": 1014
            }
          ],
          "BILI": [
            {
              "station": "EP BILI / A",
              "voters": 425
            }
          ],
          "BOMA": [
            {
              "station": "EP BOMA / A",
              "voters": 299
            }
          ],
          "PONT": [
            {
              "station": "EP BOMA / A",
              "voters": 589
            }
          ],
          "BOGDJI": [
            {
              "station": "EP BOMA / A",
              "voters": 299
            }
          ],
          "BORI": [
            {
              "station": "EP BORI-WALA / A",
              "voters": 408
            }
          ],
          "-WALA": [
            {
              "station": "EP BORI-WALA / A",
              "voters": 408
            }
          ],
          "DEBO": [
            {
              "station": "EP BORI-WALA / A",
              "voters": 585
            }
          ],
          "BOUDJOUMA": [
            {
              "station": "EP BOUDJOUMA / A",
              "voters": 403
            }
          ],
          "MAKIRVE": [
            {
              "station": "EP BOUDJOUMA / A",
              "voters": 403
            }
          ],
          "MOUGOULGA": [
            {
              "station": "EP BOUDJOUMA / A",
              "voters": 403
            }
          ],
          "BOUTOUZA": [
            {
              "station": "EP BOUTOUZA / A",
              "voters": 568
            }
          ],
          "LAMORDE": [
            {
              "station": "EP BOUTOUZA / A",
              "voters": 9535
            }
          ],
          "MAGUIRE": [
            {
              "station": "EP BOUTOUZA / A",
              "voters": 568
            }
          ],
          "MOUHAINA": [
            {
              "station": "EP BOUTOUZA / A",
              "voters": 568
            }
          ],
          "WATCHAMA": [
            {
              "station": "EP BOUTOUZA / A",
              "voters": 568
            }
          ],
          "BOUYOUM": [
            {
              "station": "EP BOUYOUM / A",
              "voters": 635
            }
          ],
          "BROH": [
            {
              "station": "EP BROH / A",
              "voters": 342
            }
          ],
          "POKA": [
            {
              "station": "EP DAMTA / A",
              "voters": 464
            }
          ],
          "DAZAL": [
            {
              "station": "EP DAZAL / A",
              "voters": 1822
            }
          ],
          "GADAMAYO": [
            {
              "station": "EP DAZAL / A",
              "voters": 911
            }
          ],
          "MBOURABA": [
            {
              "station": "EP DAZAL / A",
              "voters": 911
            }
          ],
          "DALIWAOU": [
            {
              "station": "EP DJAGALAM / A",
              "voters": 412
            }
          ],
          "DAMDAI": [
            {
              "station": "EP DJAGALAM / A",
              "voters": 412
            }
          ],
          "PRIN": [
            {
              "station": "EP DJAGALAM / A",
              "voters": 412
            }
          ],
          "TCHITCHER": [
            {
              "station": "EP DJAGALAM / A",
              "voters": 412
            }
          ],
          "DJAMTARI": [
            {
              "station": "EP DJECK-DJECK / A",
              "voters": 455
            }
          ],
          "DJECKDJECK": [
            {
              "station": "EP DJECK-DJECK / A",
              "voters": 455
            }
          ],
          "LOMINGUEL": [
            {
              "station": "EP DJECK-DJECK / A",
              "voters": 455
            }
          ],
          "DOUBBI": [
            {
              "station": "EP DOUBBI / A",
              "voters": 289
            }
          ],
          "OURO-SAKI": [
            {
              "station": "EP DOUBBI / A",
              "voters": 289
            }
          ],
          "YOUKNA": [
            {
              "station": "EP DOUBBI / A",
              "voters": 289
            }
          ],
          "BILANGUE": [
            {
              "station": "EP DOUMO / A",
              "voters": 1818
            }
          ],
          "DJOUMITCHI": [
            {
              "station": "EP DOUMO / A",
              "voters": 1506
            }
          ],
          "DOUMO": [
            {
              "station": "EP DOUMO / A",
              "voters": 5358
            }
          ],
          "CENTRE": [
            {
              "station": "EP DOUMO / A",
              "voters": 5104
            }
          ],
          "NASSARAO-DOUMO": [
            {
              "station": "EP DOUMO / A",
              "voters": 1506
            }
          ],
          "BALERE": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 1760
            }
          ],
          "DAMTA": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 2224
            }
          ],
          "CAMP": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 1760
            }
          ],
          "DJAGALAM": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 2172
            }
          ],
          "DOURBEYE": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 2927
            }
          ],
          "FADA": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 2927
            }
          ],
          "SOI-YEM": [
            {
              "station": "EP DOURBEYE / A",
              "voters": 1760
            }
          ],
          "DOUZOUGOU": [
            {
              "station": "EP DOUZOUGOU / A",
              "voters": 364
            }
          ],
          "GANE": [
            {
              "station": "EP GANE / A",
              "voters": 421
            }
          ],
          "AIKOMTOR": [
            {
              "station": "EP GOLA / A",
              "voters": 268
            }
          ],
          "GOLA": [
            {
              "station": "EP GOLA / A",
              "voters": 268
            }
          ],
          "HOSSERE": [
            {
              "station": "EP GOLA / A",
              "voters": 1106
            }
          ],
          "LAK": [
            {
              "station": "EP GOLA / A",
              "voters": 268
            }
          ],
          "REOUSSI": [
            {
              "station": "EP GOLA / A",
              "voters": 793
            }
          ],
          "DADIMARI": [
            {
              "station": "EP GOLOZA / A",
              "voters": 560
            }
          ],
          "GOLOZA": [
            {
              "station": "EP GOLOZA / A",
              "voters": 560
            }
          ],
          "MABOURKI": [
            {
              "station": "EP GOLOZA / A",
              "voters": 560
            }
          ],
          "ZAOURA": [
            {
              "station": "EP GOLOZA / A",
              "voters": 560
            }
          ],
          "GOUDJOU-GOUDJOU": [
            {
              "station": "EP GOUDJOU-GOUDJOU / A",
              "voters": 279
            }
          ],
          "MBARAM": [
            {
              "station": "EP GOUDJOU-GOUDJOU / A",
              "voters": 412
            }
          ],
          "POKLACK": [
            {
              "station": "EP GOUDJOU-GOUDJOU / A",
              "voters": 412
            }
          ],
          "GOUDOU": [
            {
              "station": "EP GOUDOU / A",
              "voters": 543
            }
          ],
          "KOUBERE": [
            {
              "station": "EP GOUDOU / A",
              "voters": 543
            }
          ],
          "SEBORE": [
            {
              "station": "EP GOUDOU / A",
              "voters": 543
            }
          ],
          "BANGAI": [
            {
              "station": "EP GOULOUM / A",
              "voters": 917
            }
          ],
          "DABA": [
            {
              "station": "EP GOULOUM / A",
              "voters": 917
            }
          ],
          "DJARENGOL": [
            {
              "station": "EP GOULOUM / A",
              "voters": 714
            }
          ],
          "GOULOUM": [
            {
              "station": "EP GOULOUM / A",
              "voters": 511
            }
          ],
          "VEMI": [
            {
              "station": "EP GOULOUM / A",
              "voters": 511
            }
          ],
          "NASSARAO-DOUALLARE": [
            {
              "station": "EP GR I MAYO OULO / A",
              "voters": 1149
            }
          ],
          "OURO-BOCKI": [
            {
              "station": "EP GR I MAYO OULO / A",
              "voters": 1149
            }
          ],
          "PAWARE": [
            {
              "station": "EP GR I MAYO OULO / A",
              "voters": 1149
            }
          ],
          "DJALINGO/MAYO": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "OULO": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "DJENTO": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "III": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "POUMPOUMRE": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "SABONGARI": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "TAKADJIRGA": [
            {
              "station": "EP GR II MAYO OULO / A",
              "voters": 2223
            }
          ],
          "DOKOYOM": [
            {
              "station": "EP GUELENG / A",
              "voters": 591
            }
          ],
          "DOUNDOUNG": [
            {
              "station": "EP GUELENG / A",
              "voters": 591
            }
          ],
          "GUELENG": [
            {
              "station": "EP GUELENG / A",
              "voters": 591
            }
          ],
          "BAFFA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "BIRDI": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "DJALINGO": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 3200
            }
          ],
          "DOUKA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "FOULBERE": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 1685
            }
          ],
          "GUIRVIZA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "KARKARA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "LAKOUAN": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "LOJOUNA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "MADARA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "NAIRA": [
            {
              "station": "EP GUIRVIZA / A",
              "voters": 977
            }
          ],
          "HOLOUM": [
            {
              "station": "EP HOLOUM / A",
              "voters": 121
            }
          ],
          "KERMBO": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 615
            }
          ],
          "BORA": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 615
            }
          ],
          "KERMBO-DJERE": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 299
            }
          ],
          "TCHAPKA-PASSIRI": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 931
            }
          ],
          "TCHAPKA-POLA": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 931
            }
          ],
          "TCHAPKA-SODJODJI": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 615
            }
          ],
          "TCHENKELING": [
            {
              "station": "EP KERMBO BORA / A",
              "voters": 299
            }
          ],
          "KOMBOM": [
            {
              "station": "EP KOMBOM / A",
              "voters": 452
            }
          ],
          "KOUBOUTOU": [
            {
              "station": "EP KOUBOUTOU / A",
              "voters": 385
            }
          ],
          "GOBRIYAM": [
            {
              "station": "EP KOUMKEOUDJI / A",
              "voters": 289
            }
          ],
          "KOUMKEOUDJI": [
            {
              "station": "EP KOUMKEOUDJI / A",
              "voters": 289
            }
          ],
          "GUENDOU": [
            {
              "station": "EP MABONI / A",
              "voters": 619
            }
          ],
          "GUERIDJE": [
            {
              "station": "EP MABONI / A",
              "voters": 1524
            }
          ],
          "MABONI": [
            {
              "station": "EP MABONI / A",
              "voters": 762
            }
          ],
          "DAMADOUGOUP": [
            {
              "station": "EP MAGANAK / A",
              "voters": 362
            }
          ],
          "MAGANAK": [
            {
              "station": "EP MAGANAK / A",
              "voters": 362
            }
          ],
          "BOUMBA": [
            {
              "station": "EP MANDAMA / A",
              "voters": 2609
            }
          ],
          "GUENAW": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "KLECK-KLECK": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "DABA-VOUN": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "GLAMBAD": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "KARNAH": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "KOLLERE": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "KOUSSOUM": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "VILLIS": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "MANDAMA": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "MANDAMA-LE": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "HAUT": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1414
            }
          ],
          "MEKEDENG": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "TCHADA-HOULONG": [
            {
              "station": "EP MANDAMA / A",
              "voters": 1081
            }
          ],
          "MATALAO": [
            {
              "station": "EP MATALAO / A",
              "voters": 269
            }
          ],
          "MBOH": [
            {
              "station": "EP MBOH / A",
              "voters": 360
            }
          ],
          "BOUHIR": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "DIRTCHA": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 588
            }
          ],
          "GOUNGOURMA": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "MBOGOUMA": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "MBOUIRI": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "MILDA": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "MOUGA": [
            {
              "station": "EP MBOUIRI / A",
              "voters": 425
            }
          ],
          "MEDEOU": [
            {
              "station": "EP MEDEOU / A",
              "voters": 533
            }
          ],
          "TALAVAM": [
            {
              "station": "EP MEDEOU / A",
              "voters": 533
            }
          ],
          "GUINDIGUINA": [
            {
              "station": "EP MOUNA / A",
              "voters": 454
            }
          ],
          "KOUDOUKOURA": [
            {
              "station": "EP MOUNA / A",
              "voters": 738
            }
          ],
          "KWANDANLANG": [
            {
              "station": "EP MOUNA / A",
              "voters": 738
            }
          ],
          "MOUNA": [
            {
              "station": "EP MOUNA / A",
              "voters": 454
            }
          ],
          "DERPOCK": [
            {
              "station": "EP MOUROUM / A",
              "voters": 633
            }
          ],
          "FOKOUM": [
            {
              "station": "EP MOUROUM / A",
              "voters": 1230
            }
          ],
          "MAYEL": [
            {
              "station": "EP MOUROUM / A",
              "voters": 582
            }
          ],
          "DAMDJA": [
            {
              "station": "EP MOUROUM / A",
              "voters": 1164
            }
          ],
          "MAYO": [
            {
              "station": "EP MOUROUM / A",
              "voters": 3396
            }
          ],
          "MOUROUM": [
            {
              "station": "EP MOUROUM / A",
              "voters": 456
            }
          ],
          "BIHI": [
            {
              "station": "EP MOURPAYE / A",
              "voters": 218
            }
          ],
          "MOURPAYE": [
            {
              "station": "EP MOURPAYE / A",
              "voters": 218
            }
          ],
          "PALAFAMOUN": [
            {
              "station": "EP MOURPAYE / A",
              "voters": 218
            }
          ],
          "NARI": [
            {
              "station": "EP NARI / A",
              "voters": 629
            }
          ],
          "SOSSORI": [
            {
              "station": "EP NARI / A",
              "voters": 629
            }
          ],
          "DIDANGO": [
            {
              "station": "EP NASSARAO / A",
              "voters": 169
            }
          ],
          "DOUNDEHI": [
            {
              "station": "EP NASSARAO / A",
              "voters": 169
            }
          ],
          "NASSARAO": [
            {
              "station": "EP NASSARAO / A",
              "voters": 338
            }
          ],
          "PILOTE": [
            {
              "station": "EP NASSARAO / A",
              "voters": 169
            }
          ],
          "GUIRLAO": [
            {
              "station": "EP NDILI / A",
              "voters": 999
            }
          ],
          "SINI": [
            {
              "station": "EP NDILI / A",
              "voters": 999
            }
          ],
          "NDILI": [
            {
              "station": "EP NDILI / A",
              "voters": 763
            }
          ],
          "SOUKOUNDOU": [
            {
              "station": "EP NDILI / A",
              "voters": 1290
            }
          ],
          "TCHOUBANAYOU": [
            {
              "station": "EP NDILI / A",
              "voters": 527
            }
          ],
          "VOGAM": [
            {
              "station": "EP NDILI / A",
              "voters": 999
            }
          ],
          "NDOUZENG": [
            {
              "station": "EP NDOUZENG / A",
              "voters": 394
            }
          ],
          "TALATCHOUMA": [
            {
              "station": "EP NDOUZENG / A",
              "voters": 394
            }
          ],
          "KIRVING": [
            {
              "station": "EP NIVE / A",
              "voters": 659
            }
          ],
          "NIVE": [
            {
              "station": "EP NIVE / A",
              "voters": 659
            }
          ],
          "SAPALA": [
            {
              "station": "EP NIVE / A",
              "voters": 659
            }
          ],
          "KOUMAI": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "DAGOURA": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "MASSABAI": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "OURVI": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "TALATCHADAK": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "VIMAR": [
            {
              "station": "EP PALAMAYOUM / A",
              "voters": 447
            }
          ],
          "PALPAL": [
            {
              "station": "EP PALPAL / A",
              "voters": 333
            }
          ],
          "TALAGORBOCK": [
            {
              "station": "EP PALPAL / A",
              "voters": 333
            }
          ],
          "TIMA-LE": [
            {
              "station": "EP PALPAL / A",
              "voters": 333
            }
          ],
          "PINA": [
            {
              "station": "EP PINA / A",
              "voters": 599
            }
          ],
          "BARINGOL": [
            {
              "station": "EP POLOGOZOM / A",
              "voters": 1621
            }
          ],
          "KILPE": [
            {
              "station": "EP POLOGOZOM / A",
              "voters": 901
            }
          ],
          "LIBDJICK": [
            {
              "station": "EP POLOGOZOM / A",
              "voters": 901
            }
          ],
          "PALADOUWER": [
            {
              "station": "EP POLOGOZOM / A",
              "voters": 901
            }
          ],
          "POLOGOZOM": [
            {
              "station": "EP POLOGOZOM / A",
              "voters": 901
            }
          ],
          "DJENTO-SADI": [
            {
              "station": "EP SADI / A",
              "voters": 410
            }
          ],
          "SADI": [
            {
              "station": "EP SADI / A",
              "voters": 410
            }
          ],
          "SINTA": [
            {
              "station": "EP SINTA / A",
              "voters": 398
            }
          ],
          "SOLOMOU": [
            {
              "station": "EP SOLOMOU / A",
              "voters": 318
            }
          ],
          "SONA": [
            {
              "station": "EP SONA / A",
              "voters": 452
            }
          ],
          "TALAK": [
            {
              "station": "EP TALAK / A",
              "voters": 228
            }
          ],
          "SALLIKERE": [
            {
              "station": "EP WAFO / A",
              "voters": 608
            }
          ],
          "WAFO": [
            {
              "station": "EP WAFO / A",
              "voters": 608
            }
          ],
          "FOURKOI": [
            {
              "station": "EP WARGUIZA / A",
              "voters": 424
            }
          ],
          "WARGUIZA": [
            {
              "station": "EP WARGUIZA / A",
              "voters": 424
            }
          ],
          "WOUROUM": [
            {
              "station": "EP WARGUIZA / A",
              "voters": 424
            }
          ],
          "DAGGA": [
            {
              "station": "EP WAWATCHI / A",
              "voters": 356
            }
          ],
          "WAWATCHI": [
            {
              "station": "EP WAWATCHI / A",
              "voters": 219
            }
          ],
          "BATOUM": [
            {
              "station": "ESPLANADE CHEFFERIE BATOUM / A",
              "voters": 342
            }
          ],
          "BOTOUM": [
            {
              "station": "ESPLANADE CHEFFERIE BATOUM / A",
              "voters": 1116
            }
          ],
          "MIDJIDA": [
            {
              "station": "ESPLANADE CHEFFERIE MATRA DOUMO / A",
              "voters": 798
            }
          ],
          "SO'O": [
            {
              "station": "ESPLANADE CHEFFERIE MATRA DOUMO / A",
              "voters": 798
            }
          ],
          "GODOCK": [
            {
              "station": "ESPLANADE CHEFFERIE PRI / A",
              "voters": 247
            }
          ],
          "PRI": [
            {
              "station": "ESPLANADE CHEFFERIE PRI / A",
              "voters": 247
            }
          ],
          "LAC": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 290
            }
          ],
          "SILANDA": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 290
            }
          ],
          "OURO-WALDE": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 290
            }
          ],
          "PALAIS": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 290
            }
          ],
          "SEMNORD": [
            {
              "station": "MAGASIN SODECOTON / A",
              "voters": 290
            }
          ],
          "AIKARTI": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 979
            }
          ],
          "BOSSOUM": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 2397
            }
          ],
          "MARCHE": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 1344
            }
          ],
          "KOUMNORO": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 1093
            }
          ],
          "OURO": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 1357
            }
          ],
          "KARLAHI": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 3931
            }
          ],
          "TOKNAYOU": [
            {
              "station": "PLACE MARCHE BOSSOUM / A",
              "voters": 979
            }
          ],
          "BOUMBALOU": [
            {
              "station": "PLACE MARCHE DESKIT / A",
              "voters": 190
            }
          ],
          "DESKIT": [
            {
              "station": "PLACE MARCHE DESKIT / A",
              "voters": 190
            }
          ],
          "KOUBADJE": [
            {
              "station": "PLACE MARCHE DESKIT / A",
              "voters": 190
            }
          ],
          "DJEGUELI": [
            {
              "station": "PLACE MARCHE DONKA / A",
              "voters": 500
            }
          ],
          "DONKA": [
            {
              "station": "PLACE MARCHE DONKA / A",
              "voters": 500
            }
          ],
          "HOULA": [
            {
              "station": "PLACE MARCHE DONKA / A",
              "voters": 500
            }
          ],
          "MADI": [
            {
              "station": "PLACE MARCHE DONKA / A",
              "voters": 500
            }
          ],
          "DIWA": [
            {
              "station": "PLACE MARCHE DOUMO / A",
              "voters": 792
            }
          ],
          "FATAROU": [
            {
              "station": "PLACE MARCHE DOUMO / A",
              "voters": 792
            }
          ],
          "FONDJI": [
            {
              "station": "PLACE MARCHE DOUMO / A",
              "voters": 1530
            }
          ],
          "GOUDAKI": [
            {
              "station": "PLACE MARCHE DOUMO / A",
              "voters": 792
            }
          ],
          "PEPEDE": [
            {
              "station": "PLACE MARCHE DOUMO / A",
              "voters": 792
            }
          ],
          "DOH": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "DOMAYO": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "LAMBA": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "LOUMORE": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "TSORI": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "WAFANGO": [
            {
              "station": "PLACE MARCHE MAYO OULO / A",
              "voters": 1662
            }
          ],
          "TIMA": [
            {
              "station": "PLACE MARCHE TIMA-LE BAS / A",
              "voters": 172
            }
          ],
          "BAS": [
            {
              "station": "PLACE MARCHE TIMA-LE BAS / A",
              "voters": 172
            }
          ],
          "KAPKANA": [
            {
              "station": "PLACE MARCHE YIBANGO / A",
              "voters": 205
            }
          ],
          "YIBANGO": [
            {
              "station": "PLACE MARCHE YIBANGO / A",
              "voters": 205
            }
          ],
          "DOUI": [
            {
              "station": "PLACE PETIT MARCHE DOUI / A",
              "voters": 467
            }
          ],
          "NYAM": [
            {
              "station": "PLACE PETIT MARCHE DOUI / A",
              "voters": 130
            }
          ],
          "GONDABA": [
            {
              "station": "PLACE PETIT MARCHE KOURGUENG / A",
              "voters": 342
            }
          ],
          "KELALI": [
            {
              "station": "PLACE PETIT MARCHE KOURGUENG / A",
              "voters": 342
            }
          ],
          "KOURGUENG": [
            {
              "station": "PLACE PETIT MARCHE KOURGUENG / A",
              "voters": 342
            }
          ],
          "POKOTCHI": [
            {
              "station": "PLACE PETIT MARCHE KOURGUENG / A",
              "voters": 342
            }
          ]
        }
      },
      "MAYO-REY": {
        "MADINGRING": {
          "GASTON": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "GOINGOU": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 723
            }
          ],
          "ABADI": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "BERE": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "NINGATOLOUM": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "JEAN": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "TOULA": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 462
            }
          ],
          "YELWA": [
            {
              "station": "BUREAU OPCC / A",
              "voters": 723
            }
          ],
          "BADJANG": [
            {
              "station": "EP BAILA / A",
              "voters": 614
            }
          ],
          "BAILA": [
            {
              "station": "EP BAILA / A",
              "voters": 1689
            }
          ],
          "MBIEM": [
            {
              "station": "EP BAILA / A",
              "voters": 1360
            }
          ],
          "DOLE": [
            {
              "station": "EP BAILA / A",
              "voters": 614
            }
          ],
          "TELBE": [
            {
              "station": "EP BAILA / A",
              "voters": 614
            }
          ],
          "ARDO": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 1060
            }
          ],
          "MATCHE": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 1060
            }
          ],
          "FELIX": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 1060
            }
          ],
          "OUMAROU": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 1060
            }
          ],
          "VAIBOUR": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 1060
            }
          ],
          "SECTEUR": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 3049
            }
          ],
          "MANDINGRING": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 3049
            }
          ],
          "MARCHE": [
            {
              "station": "EP BILINGUE MADINGRING / A",
              "voters": 3049
            }
          ],
          "ANDOUM": [
            {
              "station": "EP BONGO / A",
              "voters": 1122
            }
          ],
          "BONGO": [
            {
              "station": "EP BONGO / A",
              "voters": 1122
            }
          ],
          "WAHOULA": [
            {
              "station": "EP BONGO / A",
              "voters": 1273
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 716
            }
          ],
          "DJEMREO": [
            {
              "station": "EP DJAMBOUTOU / A",
              "voters": 1256
            }
          ],
          "DJEING": [
            {
              "station": "EP DJEING II / A",
              "voters": 2464
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "EP DJEING II / A",
              "voters": 1652
            }
          ],
          "DJALINGO": [
            {
              "station": "EP DJEMADJOU I / A",
              "voters": 687
            }
          ],
          "PEULH": [
            {
              "station": "EP DJEMADJOU I / A",
              "voters": 687
            }
          ],
          "DJABLANG": [
            {
              "station": "EP GA MBOU / A",
              "voters": 1066
            }
          ],
          "DJIBAO": [
            {
              "station": "EP GA MBOU / A",
              "voters": 1066
            }
          ],
          "GAMBOU": [
            {
              "station": "EP GA MBOU / A",
              "voters": 746
            }
          ],
          "LAOU": [
            {
              "station": "EP GA MBOU / A",
              "voters": 746
            }
          ],
          "WINDE": [
            {
              "station": "EP GA MBOU / A",
              "voters": 746
            }
          ],
          "BALA": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "GOINDASSOU": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "GOITAM": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "GOR": [
            {
              "station": "EP GOR / A",
              "voters": 3892
            }
          ],
          "CLAIRE": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "LAVAIZA": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "MISSION": [
            {
              "station": "EP GOR / A",
              "voters": 3598
            }
          ],
          "PROTESTANTE": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "TOKLOMWA": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "TOLBOUKA": [
            {
              "station": "EP GOR / A",
              "voters": 1946
            }
          ],
          "DJETOHEUR": [
            {
              "station": "EP KAGNADJE I / A",
              "voters": 650
            }
          ],
          "KAGNADJE": [
            {
              "station": "EP KAGNADJE I / A",
              "voters": 2600
            }
          ],
          "MBAL": [
            {
              "station": "EP KAGNADJE I / A",
              "voters": 650
            }
          ],
          "ODEMARE": [
            {
              "station": "EP KAGNADJE I / A",
              "voters": 650
            }
          ],
          "NDAMM": [
            {
              "station": "EP KAGNADJE I / A",
              "voters": 650
            }
          ],
          "KOULOUMBOU": [
            {
              "station": "EP KOULOU MBOU / A",
              "voters": 481
            }
          ],
          "MANDI": [
            {
              "station": "EP KOULOU MBOU / A",
              "voters": 845
            }
          ],
          "OURO": [
            {
              "station": "EP KOULOU MBOU / A",
              "voters": 481
            }
          ],
          "KESSOUM": [
            {
              "station": "EP KOULOU MBOU / A",
              "voters": 481
            }
          ],
          "KODJINI": [
            {
              "station": "EP LAOUDJOUGOYE / A",
              "voters": 376
            }
          ],
          "LAOUDJOUGOYE": [
            {
              "station": "EP LAOUDJOUGOYE / A",
              "voters": 376
            }
          ],
          "MBAKLA": [
            {
              "station": "EP LAOUDJOUGOYE / A",
              "voters": 376
            }
          ],
          "MBISSIRI": [
            {
              "station": "EP LAOUDJOUGOYE / A",
              "voters": 376
            }
          ],
          "KASSEO": [
            {
              "station": "EP LAOUDJOUGOYE / A",
              "voters": 376
            }
          ],
          "CAMP": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "BIR": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "DOBAR": [
            {
              "station": "EP MADINGRING / A",
              "voters": 2306
            }
          ],
          "PAUL": [
            {
              "station": "EP MADINGRING / A",
              "voters": 2306
            }
          ],
          "DOMBALE": [
            {
              "station": "EP MADINGRING / A",
              "voters": 2306
            }
          ],
          "LAKOKYA": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "HOPITAL": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "KOH": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "LAKA": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "WANGA": [
            {
              "station": "EP MADINGRING / A",
              "voters": 1989
            }
          ],
          "MAIBIYA": [
            {
              "station": "EP MANDI MANGA / A",
              "voters": 182
            }
          ],
          "GOULA": [
            {
              "station": "EP MANDI MANGA / A",
              "voters": 182
            }
          ],
          "MANGA": [
            {
              "station": "EP MANDI MANGA / A",
              "voters": 182
            }
          ],
          "KODJONG": [
            {
              "station": "EP MASSI / A",
              "voters": 206
            }
          ],
          "MASSI": [
            {
              "station": "EP MASSI / A",
              "voters": 206
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 307
            }
          ],
          "DJARENDI": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 307
            }
          ],
          "MBAOULARI": [
            {
              "station": "EP MAYO DJARENDI / A",
              "voters": 307
            }
          ],
          "FANGWILEO": [
            {
              "station": "EP MBAOUBALA / A",
              "voters": 596
            }
          ],
          "KONGWALA": [
            {
              "station": "EP MBAOUBALA / A",
              "voters": 596
            }
          ],
          "LANGUI": [
            {
              "station": "EP MBAOUBALA / A",
              "voters": 596
            }
          ],
          "MBAOUBALA": [
            {
              "station": "EP MBAOUBALA / A",
              "voters": 596
            }
          ],
          "BAGAO": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "LAOUDJARA": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "LAOUMBORE": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 1070
            }
          ],
          "MADAGACAR": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "MBAIGNADJE": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "MBAINAI": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "MBINGUEO": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 1070
            }
          ],
          "SOROMBEO": [
            {
              "station": "EP SOROMBEO / A",
              "voters": 898
            }
          ],
          "KAMBANG": [
            {
              "station": "EP TOUSSIRI MBALDJOUK / A",
              "voters": 463
            }
          ],
          "MAMBOUM": [
            {
              "station": "EP TOUSSIRI MBALDJOUK / A",
              "voters": 463
            }
          ],
          "MAWAILA": [
            {
              "station": "EP TOUSSIRI MBALDJOUK / A",
              "voters": 463
            }
          ],
          "TOUSSIRI": [
            {
              "station": "EP TOUSSIRI MBALDJOUK / A",
              "voters": 463
            }
          ],
          "MBALDJOUCK": [
            {
              "station": "EP TOUSSIRI MBALDJOUK / A",
              "voters": 463
            }
          ],
          "GANDAYE": [
            {
              "station": "EP YAGOYE / A",
              "voters": 406
            }
          ],
          "MAIROM": [
            {
              "station": "EP YAGOYE / A",
              "voters": 406
            }
          ],
          "YAGOYE": [
            {
              "station": "EP YAGOYE / A",
              "voters": 406
            }
          ],
          "ALI": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 734
            }
          ],
          "ARABE": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 734
            }
          ],
          "DJAOURO": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 4916
            }
          ],
          "BOUBA": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 734
            }
          ],
          "MADINGRING": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 13714
            }
          ],
          "FADA": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 2723
            }
          ],
          "FOULBE": [
            {
              "station": "ESPL CHEF AHMADOU / A",
              "voters": 1752
            }
          ],
          "DARABEI": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 621
            }
          ],
          "PIERRE": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 621
            }
          ],
          "DJEMADJOU": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 2035
            }
          ],
          "MOUDOUCK": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 621
            }
          ],
          "FRONTIERE": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 621
            }
          ],
          "SABERE": [
            {
              "station": "ESPL CHEF DJEMADJOU II / A",
              "voters": 1519
            }
          ],
          "BOLOHEURDJE": [
            {
              "station": "ESPL CHEF MAIKIRO / A",
              "voters": 410
            }
          ],
          "DODJONG": [
            {
              "station": "ESPL CHEF MAIKIRO / A",
              "voters": 410
            }
          ],
          "MAIKIRO": [
            {
              "station": "ESPL CHEF MAIKIRO / A",
              "voters": 410
            }
          ],
          "KOUDJOURO": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "MAITARAL": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "MBAOUPALA": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "MBIHAOU": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "NGANADJE": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "CARREFOUR": [
            {
              "station": "ESPL CHEF NGANADJE CARREFOUR / A",
              "voters": 1077
            }
          ],
          "BISSA": [
            {
              "station": "GIC SODECOTON DJAMDJE / A",
              "voters": 461
            }
          ],
          "DJAMDJE": [
            {
              "station": "GIC SODECOTON DJAMDJE / A",
              "voters": 461
            }
          ],
          "MASSA": [
            {
              "station": "LYCEE MADINGRING / A",
              "voters": 540
            }
          ],
          "LAOUPOYE": [
            {
              "station": "LYCEE MADINGRING / A",
              "voters": 722
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE MADINGRING / A",
              "voters": 540
            }
          ],
          "NANA": [
            {
              "station": "LYCEE MADINGRING / A",
              "voters": 857
            }
          ],
          "JACQUES": [
            {
              "station": "LYCEE MADINGRING / A",
              "voters": 857
            }
          ]
        },
        "REY-BOUBA": {
          "SOUROUNGOUL": [
            {
              "station": "ECOLE DES PARENTS BOUNNEROU / A",
              "voters": 247
            }
          ],
          "DJOUNDI": [
            {
              "station": "ECOLE DES PARENTS DJOUNDI / A",
              "voters": 207
            }
          ],
          "MAIDJAMBA": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 1246
            }
          ],
          "BLAMA": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 623
            }
          ],
          "MOUSSA": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 623
            }
          ],
          "GAINA": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 730
            }
          ],
          "LAC": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 730
            }
          ],
          "MABEROU": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 730
            }
          ],
          "PAKLI": [
            {
              "station": "ECOLE DES PARENTS LESDI MBODERI / A",
              "voters": 730
            }
          ],
          "GAOUDALI": [
            {
              "station": "ECOLE DES PARENTS SEINANGO / A",
              "voters": 85
            }
          ],
          "HARDE": [
            {
              "station": "ECOLE DES PARENTS SEINANGO / A",
              "voters": 85
            }
          ],
          "KAYEFI": [
            {
              "station": "ECOLE DES PARENTS SEINANGO / A",
              "voters": 85
            }
          ],
          "FOUDEN": [
            {
              "station": "EM REY-BOUBA / A",
              "voters": 259
            }
          ],
          "HAOUSSA'EN": [
            {
              "station": "EM REY-BOUBA / A",
              "voters": 259
            }
          ],
          "SASSA'EN": [
            {
              "station": "EM REY-BOUBA / A",
              "voters": 259
            }
          ],
          "WAMBABE": [
            {
              "station": "EM REY-BOUBA / A",
              "voters": 259
            }
          ],
          "ABAKOURA": [
            {
              "station": "EP ABAKOURA / A",
              "voters": 168
            }
          ],
          "DJADJOULI": [
            {
              "station": "EP ABAKOURA / A",
              "voters": 168
            }
          ],
          "ALFA": [
            {
              "station": "EP ALFA / A",
              "voters": 546
            }
          ],
          "ANGARI": [
            {
              "station": "EP ALFA / A",
              "voters": 1335
            }
          ],
          "GAINARE": [
            {
              "station": "EP ALFA / A",
              "voters": 284
            }
          ],
          "BABORORO": [
            {
              "station": "EP BABORORO / A",
              "voters": 352
            }
          ],
          "BADJARI-TOUMBINGUEL": [
            {
              "station": "EP BADJARI / A",
              "voters": 348
            }
          ],
          "BATAO": [
            {
              "station": "EP BATAO / A",
              "voters": 1336
            }
          ],
          "LIMBATMI": [
            {
              "station": "EP BATAO / A",
              "voters": 668
            }
          ],
          "NASSARAO": [
            {
              "station": "EP BATAO / A",
              "voters": 1079
            }
          ],
          "BOCKA": [
            {
              "station": "EP BERE / A",
              "voters": 587
            }
          ],
          "BODAL": [
            {
              "station": "EP BODAL / A",
              "voters": 254
            }
          ],
          "LOUGGA": [
            {
              "station": "EP BODAL / A",
              "voters": 254
            }
          ],
          "TCHABAL": [
            {
              "station": "EP BODAL / A",
              "voters": 441
            }
          ],
          "BOUNBOU": [
            {
              "station": "EP BOUNBOU / A",
              "voters": 280
            }
          ],
          "BOUNNEROU": [
            {
              "station": "EP BOUNBOU / A",
              "voters": 410
            }
          ],
          "DAMDJEL": [
            {
              "station": "EP DAMDJEL / A",
              "voters": 143
            }
          ],
          "HETCHOUROU": [
            {
              "station": "EP DE HETCHOUROU / A",
              "voters": 194
            }
          ],
          "LOUGA": [
            {
              "station": "EP DE LOUGA TCHABAL / A",
              "voters": 187
            }
          ],
          "MBOUKMA": [
            {
              "station": "EP DE MBOUKMA / A",
              "voters": 353
            }
          ],
          "TOKORMAYE": [
            {
              "station": "EP DE TOKORMAYE / A",
              "voters": 270
            }
          ],
          "YADIA": [
            {
              "station": "EP DE TOKORMAYE / A",
              "voters": 539
            }
          ],
          "TOURA": [
            {
              "station": "EP DE TOURA LARA / A",
              "voters": 160
            }
          ],
          "LARA": [
            {
              "station": "EP DE TOURA LARA / A",
              "voters": 160
            }
          ],
          "VAIMBA": [
            {
              "station": "EP DE VAIMBA / A",
              "voters": 143
            }
          ],
          "BABOULGA": [
            {
              "station": "EP DEO-NGAOURI / A",
              "voters": 184
            }
          ],
          "MADANA": [
            {
              "station": "EP DEO-NGAOURI / A",
              "voters": 184
            }
          ],
          "PAM'EN": [
            {
              "station": "EP DEO-NGAOURI / A",
              "voters": 184
            }
          ],
          "DJAMARE": [
            {
              "station": "EP DJAMARE / A",
              "voters": 837
            }
          ],
          "DJOURDE": [
            {
              "station": "EP DJOURDE / A",
              "voters": 302
            }
          ],
          "BADIDDI": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 1788
            }
          ],
          "FOULBE": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 883
            }
          ],
          "LAME": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 1031
            }
          ],
          "GOTEL": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 640
            }
          ],
          "DJOUROUM": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 640
            }
          ],
          "LAMMOUDAM": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 640
            }
          ],
          "SARGARI": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 640
            }
          ],
          "MAMBAIRE": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 769
            }
          ],
          "WINDE": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 2613
            }
          ],
          "DOUDJA": [
            {
              "station": "EP DJOUROUM / A",
              "voters": 640
            }
          ],
          "DOKEROL": [
            {
              "station": "EP DOKEROL 1 / A",
              "voters": 543
            }
          ],
          "BAMAYE": [
            {
              "station": "EP DOUKROUM / A",
              "voters": 442
            }
          ],
          "BAMDEWO": [
            {
              "station": "EP DOUKROUM / A",
              "voters": 246
            }
          ],
          "DOUKROUM": [
            {
              "station": "EP DOUKROUM / A",
              "voters": 246
            }
          ],
          "MAWARE": [
            {
              "station": "EP DOUKROUM / A",
              "voters": 356
            }
          ],
          "BAPOUNI": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 597
            }
          ],
          "BIRA": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 597
            }
          ],
          "GUELAO": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 597
            }
          ],
          "HOMA": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 1194
            }
          ],
          "HAMASSIOUTO": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 597
            }
          ],
          "MAL": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 1023
            }
          ],
          "YAYA": [
            {
              "station": "EP HOMA MAL YAYA / A",
              "voters": 597
            }
          ],
          "KOINDERI": [
            {
              "station": "EP KOINDERI / A",
              "voters": 539
            }
          ],
          "DJALBANG": [
            {
              "station": "EP KONGRONG / A",
              "voters": 667
            }
          ],
          "TIPOULI": [
            {
              "station": "EP KONGRONG / A",
              "voters": 667
            }
          ],
          "TOULOUM": [
            {
              "station": "EP KONGRONG / A",
              "voters": 667
            }
          ],
          "DJIPORDE": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 501
            }
          ],
          "GALAYE": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 239
            }
          ],
          "LAINDE": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 403
            }
          ],
          "DJAOULE": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 239
            }
          ],
          "MBAIZASSI": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 239
            }
          ],
          "TOUKRI": [
            {
              "station": "EP LAINDE DJAOULE / A",
              "voters": 239
            }
          ],
          "LAIHIRDOHI": [
            {
              "station": "EP LANDOU / A",
              "voters": 623
            }
          ],
          "LANDOU": [
            {
              "station": "EP LANDOU / A",
              "voters": 985
            }
          ],
          "LAOUBOU": [
            {
              "station": "EP LAOUBOU / A",
              "voters": 325
            }
          ],
          "SANGFOU": [
            {
              "station": "EP LAOUBOU / A",
              "voters": 325
            }
          ],
          "LARKI": [
            {
              "station": "EP LARKI / A",
              "voters": 176
            }
          ],
          "GONDI": [
            {
              "station": "EP LERKA / A",
              "voters": 314
            }
          ],
          "GOYANDOU": [
            {
              "station": "EP LERKA / A",
              "voters": 314
            }
          ],
          "LERKA": [
            {
              "station": "EP LERKA / A",
              "voters": 314
            }
          ],
          "BASSABAR": [
            {
              "station": "EP MANGA / A",
              "voters": 360
            }
          ],
          "MARADI": [
            {
              "station": "EP MARADI / A",
              "voters": 460
            }
          ],
          "TAPARE": [
            {
              "station": "EP MARADI / A",
              "voters": 1188
            }
          ],
          "KARA": [
            {
              "station": "EP MAYEL POULDEBO / A",
              "voters": 80
            }
          ],
          "POULDEBO": [
            {
              "station": "EP MAYEL POULDEBO / A",
              "voters": 80
            }
          ],
          "TEWARE": [
            {
              "station": "EP MAYEL POULDEBO / A",
              "voters": 80
            }
          ],
          "BAIKWA": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 2323
            }
          ],
          "WOING": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 579
            }
          ],
          "BAMARAFA": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 579
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 4697
            }
          ],
          "BANI": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 1912
            }
          ],
          "HAMAN": [
            {
              "station": "EP MAYO BANI OUING / A",
              "voters": 1340
            }
          ],
          "DJOY": [
            {
              "station": "EP MAYO DJOY / A",
              "voters": 292
            }
          ],
          "LAYE": [
            {
              "station": "EP MAYO LAYE / A",
              "voters": 295
            }
          ],
          "BITANG": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "DABA": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "GOURING": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "GUEBADI": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "MOMBORE": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "GONI": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "SALASSA": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "WALEOL": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "SIWO": [
            {
              "station": "EP MOMBORE / A",
              "voters": 700
            }
          ],
          "NAOUDEL": [
            {
              "station": "EP NAOUDEL / A",
              "voters": 231
            }
          ],
          "GANDAYE": [
            {
              "station": "EP OURO GADOUDJI / A",
              "voters": 232
            }
          ],
          "GANGOURI": [
            {
              "station": "EP OURO GADOUDJI / A",
              "voters": 232
            }
          ],
          "DIWODJI": [
            {
              "station": "EP OURO MAYO / A",
              "voters": 426
            }
          ],
          "BALI": [
            {
              "station": "EP OURO MAYO / A",
              "voters": 426
            }
          ],
          "KAIGUE": [
            {
              "station": "EP OURO MAYO / A",
              "voters": 426
            }
          ],
          "MBOULWOL": [
            {
              "station": "EP OURO MAYO / A",
              "voters": 478
            }
          ],
          "TCHIKALI": [
            {
              "station": "EP OURO MAYO / A",
              "voters": 426
            }
          ],
          "QUARTIERS": [
            {
              "station": "EP OURO TOUPE / A",
              "voters": 239
            }
          ],
          "ADMINISTRATIFS": [
            {
              "station": "EP OURO TOUPE / A",
              "voters": 239
            }
          ],
          "LAKA'EN": [
            {
              "station": "EP REY BOUBA / A",
              "voters": 582
            }
          ],
          "LIPORO": [
            {
              "station": "EP REY BOUBA / A",
              "voters": 582
            }
          ],
          "MONO'EN": [
            {
              "station": "EP REY BOUBA / A",
              "voters": 582
            }
          ],
          "TOUPE": [
            {
              "station": "EP REY BOUBA / A",
              "voters": 821
            }
          ],
          "MAFIRE": [
            {
              "station": "EP SINASSI / A",
              "voters": 547
            }
          ],
          "SINASSI": [
            {
              "station": "EP SINASSI / A",
              "voters": 547
            }
          ],
          "BARY": [
            {
              "station": "EP SOMESSI / A",
              "voters": 436
            }
          ],
          "KOUBADJE": [
            {
              "station": "EP SOMESSI / A",
              "voters": 436
            }
          ],
          "SOMESSI": [
            {
              "station": "EP SOMESSI / A",
              "voters": 436
            }
          ],
          "BABBABLA": [
            {
              "station": "EP TATOU / A",
              "voters": 744
            }
          ],
          "MACANASSE": [
            {
              "station": "EP TATOU / A",
              "voters": 744
            }
          ],
          "SADIA": [
            {
              "station": "EP TATOU / A",
              "voters": 823
            }
          ],
          "TATOU": [
            {
              "station": "EP TATOU / A",
              "voters": 744
            }
          ],
          "NDIAMBAILOUM": [
            {
              "station": "EP WAFANGO / A",
              "voters": 378
            }
          ],
          "WAFANGO": [
            {
              "station": "EP WAFANGO / A",
              "voters": 378
            }
          ],
          "ACHAKA": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 1236
            }
          ],
          "MANGA": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 2297
            }
          ],
          "PETEL": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 618
            }
          ],
          "FOTOKOL": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 618
            }
          ],
          "MBELA": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 618
            }
          ],
          "KOSSAM": [
            {
              "station": "ESPL CHEF ACHAKA MANGA / A",
              "voters": 618
            }
          ],
          "BEGUE": [
            {
              "station": "ESPL CHEF ANGARI WASSALI / A",
              "voters": 214
            }
          ],
          "WASSALI": [
            {
              "station": "ESPL CHEF ANGARI WASSALI / A",
              "voters": 214
            }
          ],
          "AOUDJALI": [
            {
              "station": "ESPL CHEF AOUDJALI / A",
              "voters": 506
            }
          ],
          "DAME": [
            {
              "station": "ESPL CHEF AOUDJALI / A",
              "voters": 738
            }
          ],
          "GABDEL": [
            {
              "station": "ESPL CHEF AOUDJALI / A",
              "voters": 506
            }
          ],
          "MBOUDIROU": [
            {
              "station": "ESPL CHEF AOUDJALI / A",
              "voters": 506
            }
          ],
          "DOLE": [
            {
              "station": "ESPL CHEF AOUDJALI / A",
              "voters": 506
            }
          ],
          "BAIGRAM": [
            {
              "station": "ESPL CHEF BAIGRAM / A",
              "voters": 122
            }
          ],
          "DJOULOL": [
            {
              "station": "ESPL CHEF BAIGRAM / A",
              "voters": 122
            }
          ],
          "MODIBO": [
            {
              "station": "ESPL CHEF BAIGRAM / A",
              "voters": 206
            }
          ],
          "TCHERFEKE": [
            {
              "station": "ESPL CHEF BAIGRAM / A",
              "voters": 122
            }
          ],
          "BASSARI": [
            {
              "station": "ESPL CHEF BASSARI / A",
              "voters": 408
            }
          ],
          "DADNA": [
            {
              "station": "ESPL CHEF BASSARI / A",
              "voters": 221
            }
          ],
          "DAWANE": [
            {
              "station": "ESPL CHEF BASSARI / A",
              "voters": 221
            }
          ],
          "BIDEING": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 381
            }
          ],
          "BOLIYEL": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 543
            }
          ],
          "DJABBIRE": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 381
            }
          ],
          "DJABBIROU": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 69
            }
          ],
          "DJANGANA": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 462
            }
          ],
          "FOUNAGUE": [
            {
              "station": "ESPL CHEF BIDEING / A",
              "voters": 231
            }
          ],
          "DJIGANG": [
            {
              "station": "ESPL CHEF BOUNNEROU / A",
              "voters": 130
            }
          ],
          "ABBA": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 854
            }
          ],
          "IDRISSA": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 1206
            }
          ],
          "DAMI": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 1057
            }
          ],
          "DJAOURO": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 3375
            }
          ],
          "AKAOU": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 854
            }
          ],
          "LADAN": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 854
            }
          ],
          "GAOU": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "SALI": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "GARGOURA": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "HAMIDOU": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "CHAMPION": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "NASSARA": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "DJOUKOUM": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "TOPAYEL": [
            {
              "station": "ESPL CHEF DAMI / A",
              "voters": 626
            }
          ],
          "DJAGOL": [
            {
              "station": "ESPL CHEF DJAGOL / A",
              "voters": 251
            }
          ],
          "DJAMPARAM": [
            {
              "station": "ESPL CHEF DJAGOL / A",
              "voters": 251
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ESPL CHEF DJAGOL / A",
              "voters": 251
            }
          ],
          "DJERWING": [
            {
              "station": "ESPL CHEF DJERWING / A",
              "voters": 262
            }
          ],
          "KETCHEL": [
            {
              "station": "ESPL CHEF DJERWING / A",
              "voters": 262
            }
          ],
          "DANBI": [
            {
              "station": "ESPL CHEF GUIRLING / A",
              "voters": 297
            }
          ],
          "GUIRLING": [
            {
              "station": "ESPL CHEF GUIRLING / A",
              "voters": 297
            }
          ],
          "BIZILI": [
            {
              "station": "ESPL CHEF KONGRONG SIOUTO / A",
              "voters": 324
            }
          ],
          "DAWAREGA": [
            {
              "station": "ESPL CHEF KONGRONG SIOUTO / A",
              "voters": 324
            }
          ],
          "KONGRONG": [
            {
              "station": "ESPL CHEF KONGRONG SIOUTO / A",
              "voters": 991
            }
          ],
          "SIOUTO": [
            {
              "station": "ESPL CHEF KONGRONG SIOUTO / A",
              "voters": 324
            }
          ],
          "NDOUMA": [
            {
              "station": "ESPL CHEF KONGRONG SIOUTO / A",
              "voters": 324
            }
          ],
          "DABBIRE": [
            {
              "station": "ESPL CHEF LAINDE MODIBO / A",
              "voters": 84
            }
          ],
          "PEORIWO": [
            {
              "station": "ESPL CHEF LAINDE MODIBO / A",
              "voters": 84
            }
          ],
          "LAMMOUGUEL": [
            {
              "station": "ESPL CHEF LAMOUGUEL FOULBE / A",
              "voters": 634
            }
          ],
          "WAKLA": [
            {
              "station": "ESPL CHEF LAMOUGUEL FOULBE / A",
              "voters": 604
            }
          ],
          "HORARE": [
            {
              "station": "ESPL CHEF LAMOUGUEL FOULBE / A",
              "voters": 243
            }
          ],
          "LELE": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 278
            }
          ],
          "OBOLE": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 278
            }
          ],
          "DOBINGA": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 1405
            }
          ],
          "WANDJAM": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 471
            }
          ],
          "LESDI": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 278
            }
          ],
          "MBODERI": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 278
            }
          ],
          "MAYEL": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 358
            }
          ],
          "NDIKANI": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 278
            }
          ],
          "POUTTINAWAL": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 471
            }
          ],
          "BAKARY": [
            {
              "station": "ESPL CHEF LESDI MBODERI / A",
              "voters": 471
            }
          ],
          "BARAKOI": [
            {
              "station": "ESPL CHEF MAYO BANI SADOU / A",
              "voters": 492
            }
          ],
          "LOUTCHE": [
            {
              "station": "ESPL CHEF MAYO BANI SADOU / A",
              "voters": 492
            }
          ],
          "SADOU": [
            {
              "station": "ESPL CHEF MAYO BANI SADOU / A",
              "voters": 492
            }
          ],
          "WONDE": [
            {
              "station": "ESPL CHEF MAYO WONDE / A",
              "voters": 922
            }
          ],
          "MBAILOU": [
            {
              "station": "ESPL CHEF NASSARAO / A",
              "voters": 411
            }
          ],
          "ZINABALAM": [
            {
              "station": "ESPL CHEF NASSARAO / A",
              "voters": 411
            }
          ],
          "DAKAR": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 390
            }
          ],
          "JOLI": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 390
            }
          ],
          "SOIR": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 390
            }
          ],
          "KAMALE": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 789
            }
          ],
          "GADOU": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 780
            }
          ],
          "MOUKAILA": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 390
            }
          ],
          "N'DJAMENA": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 390
            }
          ],
          "BOCKI": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 444
            }
          ],
          "GADOUDJI": [
            {
              "station": "ESPL CHEF OURO GADOU / A",
              "voters": 399
            }
          ],
          "DAMOUGAL": [
            {
              "station": "ESPL CHEF REY BARIKI / A",
              "voters": 224
            }
          ],
          "DOMAYO": [
            {
              "station": "ESPL CHEF REY BARIKI / A",
              "voters": 224
            }
          ],
          "GARGA": [
            {
              "station": "ESPL CHEF REY BARIKI / A",
              "voters": 224
            }
          ],
          "NDOKTAO": [
            {
              "station": "ESPL CHEF REY BARIKI / A",
              "voters": 224
            }
          ],
          "AKERI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "ALAMAI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "DJANDA": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "GALI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "ABBASSI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "GODI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 1731
            }
          ],
          "GODJI": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 719
            }
          ],
          "MBOUKEKE": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 619
            }
          ],
          "OURO": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 6208
            }
          ],
          "BARKA": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 450
            }
          ],
          "REY": [
            {
              "station": "ESPL CHEF REY MANGA / A",
              "voters": 1319
            }
          ],
          "BIGAOULA": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "DJABBO": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "NDORO": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "DOGARI'EN": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "SIFFAKARE": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "WAOBE": [
            {
              "station": "ESPL CHEF REY WAOBE / A",
              "voters": 259
            }
          ],
          "GATOUGUEL": [
            {
              "station": "ESPL CHEF RYA / A",
              "voters": 312
            }
          ],
          "MBILLA": [
            {
              "station": "ESPL CHEF RYA / A",
              "voters": 312
            }
          ],
          "RYA": [
            {
              "station": "ESPL CHEF RYA / A",
              "voters": 894
            }
          ],
          "ALARBA": [
            {
              "station": "ESPL CHEF SEINANGO / A",
              "voters": 129
            }
          ],
          "MAKEURE": [
            {
              "station": "ESPL CHEF SEINANGO / A",
              "voters": 129
            }
          ],
          "SEINAGO": [
            {
              "station": "ESPL CHEF SEINANGO / A",
              "voters": 129
            }
          ],
          "SOUKI": [
            {
              "station": "ESPL CHEF SEINANGO / A",
              "voters": 129
            }
          ],
          "BALAROU": [
            {
              "station": "ESPL CHEF TAPAREROU / A",
              "voters": 274
            }
          ],
          "KOILAOKI": [
            {
              "station": "ESPL CHEF TAPAREROU / A",
              "voters": 274
            }
          ],
          "TAPAREROU": [
            {
              "station": "ESPL CHEF TAPAREROU / A",
              "voters": 274
            }
          ],
          "YOLDE": [
            {
              "station": "ESPL CHEF TAPAREROU / A",
              "voters": 591
            }
          ],
          "GOUBOUDO": [
            {
              "station": "ESPL CHEF TAPAREROU / A",
              "voters": 274
            }
          ],
          "BIRI": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "DAGANA": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "GANGOYE": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "HAMADOU": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "FONKO": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "LAKA": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "FRONTIERE": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "MALAM": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "SEINI": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "BANANA": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "TSAPOMA": [
            {
              "station": "ESPL CHEF TSAPOMA / A",
              "voters": 352
            }
          ],
          "BAMBI": [
            {
              "station": "ESPL CHEF WAKLA PAKOUARE / A",
              "voters": 273
            }
          ],
          "PAKOUARE": [
            {
              "station": "ESPL CHEF WAKLA PAKOUARE / A",
              "voters": 88
            }
          ],
          "BABOUDJI": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 306
            }
          ],
          "BADISSEM": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 792
            }
          ],
          "BIBILI": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 236
            }
          ],
          "SEBODJE": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 236
            }
          ],
          "WARO": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 236
            }
          ],
          "YOLA": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 236
            }
          ],
          "MBODEWA": [
            {
              "station": "ESPL CHEF YOLA MBODEWA / A",
              "voters": 236
            }
          ],
          "MARCHE": [
            {
              "station": "FOYER MUNICIPAL REY BOUBA / A",
              "voters": 317
            }
          ],
          "SABONGARI": [
            {
              "station": "FOYER MUNICIPAL REY BOUBA / A",
              "voters": 317
            }
          ],
          "BONGODJI": [
            {
              "station": "FOYER MUNICIPAL REY BOUBA / A",
              "voters": 317
            }
          ],
          "ATEKI": [
            {
              "station": "HANGAR MARCHE ATEKI / A",
              "voters": 508
            }
          ],
          "BADDIDI": [
            {
              "station": "HANGAR MARCHE ATEKI / A",
              "voters": 1016
            }
          ],
          "NOUHOU": [
            {
              "station": "HANGAR MARCHE ATEKI / A",
              "voters": 508
            }
          ],
          "TANIMOU": [
            {
              "station": "HANGAR MARCHE ATEKI / A",
              "voters": 508
            }
          ],
          "GUILGUE": [
            {
              "station": "HANGAR MARCHE ATEKI / A",
              "voters": 508
            }
          ],
          "BALSANGRI": [
            {
              "station": "HANGAR MARCHE BALSANGRI / A",
              "voters": 222
            }
          ],
          "ALLABEDDI": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "BERE": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 1404
            }
          ],
          "DAMA": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 1276
            }
          ],
          "AREY": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "KALI'EN": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "MAIKODE": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "MBERE'EN": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "SON'EN": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "WAINABE": [
            {
              "station": "HOPITAL FONDATION MAYO REY / A",
              "voters": 496
            }
          ],
          "SERAYE": [
            {
              "station": "LYCEE BERE / A",
              "voters": 309
            }
          ],
          "ANINA": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 344
            }
          ],
          "BIBBE": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 603
            }
          ],
          "HORBE": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 603
            }
          ],
          "BOGGA": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 344
            }
          ],
          "KASSALA-DJOULDE": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 344
            }
          ],
          "KILA'EN": [
            {
              "station": "LYCEE REY BOUBA / A",
              "voters": 344
            }
          ],
          "BARKAWO": [
            {
              "station": "MAGASIN PNDP ALFA DJIPORDE / A",
              "voters": 262
            }
          ],
          "DOUBEL": [
            {
              "station": "MAGASIN PNDP ALFA DJIPORDE / A",
              "voters": 262
            }
          ],
          "MBOULOUMDJI": [
            {
              "station": "MAGASIN PNDP ALFA DJIPORDE / A",
              "voters": 262
            }
          ],
          "POLMBOMI": [
            {
              "station": "MAGASIN PNDP ALFA DJIPORDE / A",
              "voters": 262
            }
          ],
          "DOUA": [
            {
              "station": "MAGASIN PNDP ALFA DJIPORDE / A",
              "voters": 262
            }
          ],
          "FIMBE": [
            {
              "station": "MAGASIN SODECOTON FIMBE / A",
              "voters": 212
            }
          ]
        },
        "TCHOLLIRE": {
          "DALBOU": [
            {
              "station": "ECOLE MATERNELLE BILINGUE / A",
              "voters": 69
            }
          ],
          "HOPITAL": [
            {
              "station": "EM BILINGUE / A",
              "voters": 393
            }
          ],
          "DISTRICT": [
            {
              "station": "EM BILINGUE / A",
              "voters": 393
            }
          ],
          "MAN": [
            {
              "station": "EM BILINGUE / A",
              "voters": 1482
            }
          ],
          "BOCARANGA": [
            {
              "station": "EM BILINGUE / A",
              "voters": 698
            }
          ],
          "TCHOLLIRE": [
            {
              "station": "EM NDOKVE / A",
              "voters": 1036
            }
          ],
          "NDOCKVE": [
            {
              "station": "EM NDOKVE / A",
              "voters": 643
            }
          ],
          "PTT": [
            {
              "station": "EM NDOKVE / A",
              "voters": 643
            }
          ],
          "ENIEG": [
            {
              "station": "ENIEG / A",
              "voters": 57
            }
          ],
          "MBARANG": [
            {
              "station": "ENIEG / A",
              "voters": 698
            }
          ],
          "GALKE": [
            {
              "station": "ENIEG / A",
              "voters": 4828
            }
          ],
          "BAWALDA": [
            {
              "station": "EP BALANE / A",
              "voters": 339
            }
          ],
          "MBAN": [
            {
              "station": "EP BALANE / A",
              "voters": 217
            }
          ],
          "BANDA": [
            {
              "station": "EP BANDA / A",
              "voters": 979
            }
          ],
          "WANI": [
            {
              "station": "EP BANDA / A",
              "voters": 979
            }
          ],
          "BAOUTCHI": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 511
            }
          ],
          "MAYO": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 7038
            }
          ],
          "DADI": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 511
            }
          ],
          "MBANG": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 618
            }
          ],
          "KATMOR": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 618
            }
          ],
          "MBEREM": [
            {
              "station": "EP BAOUTCHI / A",
              "voters": 511
            }
          ],
          "BOUK": [
            {
              "station": "EP BOUK / A",
              "voters": 571
            }
          ],
          "MAMGUIENWA": [
            {
              "station": "EP BOUK / A",
              "voters": 1731
            }
          ],
          "BOURI": [
            {
              "station": "EP BOURI / A",
              "voters": 1827
            }
          ],
          "CRC": [
            {
              "station": "EP CRC / A",
              "voters": 447
            }
          ],
          "DEMSA": [
            {
              "station": "EP DEMSA / A",
              "voters": 514
            }
          ],
          "GAVE": [
            {
              "station": "EP DEMSA / A",
              "voters": 514
            }
          ],
          "KERWA": [
            {
              "station": "EP DEMSA / A",
              "voters": 1039
            }
          ],
          "DJABA": [
            {
              "station": "EP DJABA / A",
              "voters": 1274
            }
          ],
          "DOGBA": [
            {
              "station": "EP DJABA / A",
              "voters": 2652
            }
          ],
          "LAGBA": [
            {
              "station": "EP DOGBA / A",
              "voters": 1595
            }
          ],
          "LANGUI": [
            {
              "station": "EP DOUGON / A",
              "voters": 250
            }
          ],
          "DOUGON": [
            {
              "station": "EP DOUKEA / A",
              "voters": 567
            }
          ],
          "DOUKEA": [
            {
              "station": "EP DOUKEA / A",
              "voters": 317
            }
          ],
          "HOME": [
            {
              "station": "EP DOUKEA / A",
              "voters": 567
            }
          ],
          "GARAL": [
            {
              "station": "EP DOUKEA / A",
              "voters": 567
            }
          ],
          "BOBOK": [
            {
              "station": "EP GAMBA / A",
              "voters": 507
            }
          ],
          "GAMBA": [
            {
              "station": "EP GAMBA / A",
              "voters": 1014
            }
          ],
          "GENDARMERIE": [
            {
              "station": "EP GAMBA / A",
              "voters": 507
            }
          ],
          "KARBA": [
            {
              "station": "EP GAMBA / A",
              "voters": 1546
            }
          ],
          "BABA": [
            {
              "station": "EP GAMBA / A",
              "voters": 507
            }
          ],
          "BELLO": [
            {
              "station": "EP GAMBA / A",
              "voters": 507
            }
          ],
          "NOTTO": [
            {
              "station": "EP GAMBA / A",
              "voters": 746
            }
          ],
          "GANANI": [
            {
              "station": "EP GANANI / A",
              "voters": 980
            }
          ],
          "DINA": [
            {
              "station": "EP GANANI / A",
              "voters": 256
            }
          ],
          "ALIM": [
            {
              "station": "EP GANANI / A",
              "voters": 256
            }
          ],
          "MBADJEU": [
            {
              "station": "EP GANANI / A",
              "voters": 256
            }
          ],
          "GAKRI": [
            {
              "station": "EP GOP / A",
              "voters": 1162
            }
          ],
          "GOP-REY": [
            {
              "station": "EP GOP / A",
              "voters": 1272
            }
          ],
          "GOUGA": [
            {
              "station": "EP GOUGA / A",
              "voters": 468
            }
          ],
          "MANANGNA": [
            {
              "station": "EP GOUGA / A",
              "voters": 530
            }
          ],
          "KABA": [
            {
              "station": "EP GROUPE I / A",
              "voters": 359
            }
          ],
          "PANA": [
            {
              "station": "EP GROUPE I / A",
              "voters": 359
            }
          ],
          "GUIDJIBA": [
            {
              "station": "EP GUIDJIBA / A",
              "voters": 805
            }
          ],
          "GABA": [
            {
              "station": "EP KALI / A",
              "voters": 396
            }
          ],
          "KALI": [
            {
              "station": "EP KALI / A",
              "voters": 333
            }
          ],
          "GUERI": [
            {
              "station": "EP KOTTI MANGA / A",
              "voters": 239
            }
          ],
          "MANGA": [
            {
              "station": "EP KOTTI MANGA / A",
              "voters": 913
            }
          ],
          "KOUM": [
            {
              "station": "EP KOUM / A",
              "voters": 323
            }
          ],
          "KROUK": [
            {
              "station": "EP KROUK / A",
              "voters": 367
            }
          ],
          "SOUAYE": [
            {
              "station": "EP KROUK / A",
              "voters": 367
            }
          ],
          "LABOUN": [
            {
              "station": "EP LABOUN / A",
              "voters": 387
            }
          ],
          "HORMBALI": [
            {
              "station": "EP LASSERE / A",
              "voters": 791
            }
          ],
          "LASSERE": [
            {
              "station": "EP LASSERE / A",
              "voters": 117
            }
          ],
          "NANA": [
            {
              "station": "EP LASSERE / A",
              "voters": 117
            }
          ],
          "NDONG": [
            {
              "station": "EP LASSERE / A",
              "voters": 117
            }
          ],
          "LEMBE": [
            {
              "station": "EP LEUNDA / A",
              "voters": 468
            }
          ],
          "LEUNDA": [
            {
              "station": "EP LEUNDA / A",
              "voters": 468
            }
          ],
          "MAZADOU": [
            {
              "station": "EP LEUNDA / A",
              "voters": 468
            }
          ],
          "SOTTA": [
            {
              "station": "EP LEUNDA / A",
              "voters": 468
            }
          ],
          "BAKOI": [
            {
              "station": "EP MANDII / A",
              "voters": 784
            }
          ],
          "DII": [
            {
              "station": "EP MANDII / A",
              "voters": 784
            }
          ],
          "MBOULI": [
            {
              "station": "EP MANDII / A",
              "voters": 784
            }
          ],
          "GANDI": [
            {
              "station": "EP MAYO GALKE / A",
              "voters": 799
            }
          ],
          "MBOUM": [
            {
              "station": "EP MAYO GALKE / A",
              "voters": 799
            }
          ],
          "MABOUM": [
            {
              "station": "EP MAYO GALKE / A",
              "voters": 799
            }
          ],
          "SODECOTON": [
            {
              "station": "EP MAYO GALKE / A",
              "voters": 799
            }
          ],
          "TOUDJARA": [
            {
              "station": "EP MAYO GALKE / A",
              "voters": 799
            }
          ],
          "MBIEN": [
            {
              "station": "EP MBAOU / A",
              "voters": 47
            }
          ],
          "MBISSIRI": [
            {
              "station": "EP MBISSIRI / A",
              "voters": 311
            }
          ],
          "NDOUDJA": [
            {
              "station": "EP NDOUDJA / A",
              "voters": 73
            }
          ],
          "BOKOM": [
            {
              "station": "EP NOUNOUDJE / A",
              "voters": 534
            }
          ],
          "LYCEE": [
            {
              "station": "EP NOUNOUDJE / A",
              "voters": 534
            }
          ],
          "BILINGUE": [
            {
              "station": "EP NOUNOUDJE / A",
              "voters": 534
            }
          ],
          "NOUNOUDJE": [
            {
              "station": "EP NOUNOUDJE / A",
              "voters": 534
            }
          ],
          "REYNA": [
            {
              "station": "EP REYNA / A",
              "voters": 225
            }
          ],
          "ROH": [
            {
              "station": "EP REYNA / A",
              "voters": 225
            }
          ],
          "HAOUSSA": [
            {
              "station": "EP SABONGARI MAYO GALKE / A",
              "voters": 1571
            }
          ],
          "MAYO-GALKE": [
            {
              "station": "EP SABONGARI MAYO GALKE / A",
              "voters": 1070
            }
          ],
          "LOUGOUI": [
            {
              "station": "EP SABONGARI MAYO GALKE / A",
              "voters": 535
            }
          ],
          "MAFA": [
            {
              "station": "EP SAKDJE MAFA / A",
              "voters": 255
            }
          ],
          "NDAWAN": [
            {
              "station": "EP SASSA / A",
              "voters": 276
            }
          ],
          "SASSA": [
            {
              "station": "EP SASSA / A",
              "voters": 276
            }
          ],
          "DJAOULE": [
            {
              "station": "EP THAM / A",
              "voters": 167
            }
          ],
          "THAM": [
            {
              "station": "EP THAM / A",
              "voters": 167
            }
          ],
          "WINDE": [
            {
              "station": "EP WINDE BOURI / A",
              "voters": 111
            }
          ],
          "MBIP": [
            {
              "station": "EP YOUKOUT / A",
              "voters": 325
            }
          ],
          "TABOUN": [
            {
              "station": "EP YOUKOUT / A",
              "voters": 433
            }
          ],
          "YETT": [
            {
              "station": "EP YOUKOUT / A",
              "voters": 428
            }
          ],
          "YOUKOUT": [
            {
              "station": "EP YOUKOUT / A",
              "voters": 325
            }
          ],
          "BANDJOUKRI": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 206
            }
          ],
          "DOUDJA": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 206
            }
          ],
          "HARNAPING": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 206
            }
          ],
          "MBAOU": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 253
            }
          ],
          "MBIEM": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 323
            }
          ],
          "NYAN": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 253
            }
          ],
          "VAH": [
            {
              "station": "ESPL CHEF BANDJOUKRI / A",
              "voters": 253
            }
          ],
          "KABANG": [
            {
              "station": "ESPL CHEF DALBOU / A",
              "voters": 524
            }
          ],
          "YELBO": [
            {
              "station": "ESPL CHEF DALBOU / A",
              "voters": 524
            }
          ],
          "(M.G)": [
            {
              "station": "ESPL CHEF DALBOU / A",
              "voters": 524
            }
          ],
          "COMPAGNIE": [
            {
              "station": "ESPL CHEF GALKE / A",
              "voters": 476
            }
          ],
          "MBILARE": [
            {
              "station": "ESPL CHEF MBILLARE / A",
              "voters": 576
            }
          ],
          "TOLORE": [
            {
              "station": "ESPL CHEF MBILLARE / A",
              "voters": 823
            }
          ],
          "PANDJAMA": [
            {
              "station": "ESPL CHEF MBILLARE / A",
              "voters": 576
            }
          ],
          "BAWAN": [
            {
              "station": "ESPL CHEF SAKDJE / A",
              "voters": 2464
            }
          ],
          "MBANA": [
            {
              "station": "ESPL CHEF SAKDJE / A",
              "voters": 2425
            }
          ],
          "OURO": [
            {
              "station": "ESPL CHEF SAKDJE / A",
              "voters": 2302
            }
          ],
          "BOBBO": [
            {
              "station": "ESPL CHEF SAKDJE / A",
              "voters": 2302
            }
          ],
          "SAKDJE": [
            {
              "station": "ESPL CHEF SAKDJE / A",
              "voters": 2557
            }
          ],
          "WAINABE": [
            {
              "station": "ESPL CHEF WANGAR / A",
              "voters": 269
            }
          ],
          "BIBE": [
            {
              "station": "ESPL FADA / A",
              "voters": 374
            }
          ],
          "HORBE": [
            {
              "station": "ESPL FADA / A",
              "voters": 374
            }
          ],
          "KAWADI": [
            {
              "station": "ESPL FADA / A",
              "voters": 374
            }
          ],
          "PORMI": [
            {
              "station": "ESPL FADA / A",
              "voters": 423
            }
          ],
          "YONDE": [
            {
              "station": "ESPL FADA / A",
              "voters": 374
            }
          ],
          "MAKEDKED": [
            {
              "station": "ESPL MAKEDKED / A",
              "voters": 110
            }
          ],
          "DJEMMA": [
            {
              "station": "ESPL MAYO DJEMMA / A",
              "voters": 85
            }
          ],
          "HALFOU": [
            {
              "station": "ESPL MAYO HALFOU / A",
              "voters": 139
            }
          ],
          "NANGAROU": [
            {
              "station": "ESPL NANGAROU / A",
              "voters": 40
            }
          ],
          "BALANE": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 691
            }
          ],
          "BOKKO": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 474
            }
          ],
          "KOTTI": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 713
            }
          ],
          "PETEL": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 591
            }
          ],
          "KOUNDINI": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 1634
            }
          ],
          "MBOUDJI": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 2022
            }
          ],
          "YADJI": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 1008
            }
          ],
          "NIGBA": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 474
            }
          ],
          "VAGBA": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 474
            }
          ],
          "WAA": [
            {
              "station": "LYCEE GAMBA / A",
              "voters": 474
            }
          ],
          "DOUFFIN": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 605
            }
          ],
          "KARNA": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 303
            }
          ],
          "NGAOUDJI": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 303
            }
          ],
          "NGORHECK": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 303
            }
          ],
          "SONN": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 303
            }
          ],
          "BALINOBE": [
            {
              "station": "SAR SM / A",
              "voters": 773
            }
          ],
          "BAMILEKE": [
            {
              "station": "SAR SM / A",
              "voters": 468
            }
          ],
          "DJOUBAOU": [
            {
              "station": "SAR SM / A",
              "voters": 468
            }
          ],
          "SARA": [
            {
              "station": "SAR SM / A",
              "voters": 827
            }
          ],
          "PREFECTURE": [
            {
              "station": "SOUS PREFECTURE / A",
              "voters": 305
            }
          ],
          "SOUS-PREFECTURE": [
            {
              "station": "SOUS PREFECTURE / A",
              "voters": 305
            }
          ],
          "WANGAR": [
            {
              "station": "SOUS PREFECTURE / A",
              "voters": 574
            }
          ]
        },
        "TOUBORO": {
          "GAOU": [
            {
              "station": "CENTRE DE SANTE MBANG REY / A",
              "voters": 108
            }
          ],
          "NDENG": [
            {
              "station": "CENTRE DE SANTE MBANG REY / A",
              "voters": 108
            }
          ],
          "DOMAYO": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 769
            }
          ],
          "VOGZOM": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 8521
            }
          ],
          "KERBAI": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 1773
            }
          ],
          "MASSOSSE": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 769
            }
          ],
          "MBEREM": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 1340
            }
          ],
          "MOUAROM": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 1340
            }
          ],
          "SABONGARI": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 1432
            }
          ],
          "TCHATBALI": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 769
            }
          ],
          "VONG": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 2755
            }
          ],
          "NAH": [
            {
              "station": "CES VOGZOM TONOM / A",
              "voters": 2755
            }
          ],
          "KAWASINI": [
            {
              "station": "E.P BONG RAI / A",
              "voters": 628
            }
          ],
          "SOMALI": [
            {
              "station": "E.P BONG RAI / A",
              "voters": 628
            }
          ],
          "LOUGGUERE": [
            {
              "station": "E.P LOUGGERE / A",
              "voters": 247
            }
          ],
          "NARRAL": [
            {
              "station": "E.P OURO DARA / A",
              "voters": 1461
            }
          ],
          "SALI": [
            {
              "station": "E.P OURO SALI / A",
              "voters": 294
            }
          ],
          "RABINGA": [
            {
              "station": "E.P OURO SALI / A",
              "voters": 294
            }
          ],
          "DOUROU": [
            {
              "station": "E.P. DE DOUROUBERG / A",
              "voters": 196
            }
          ],
          "BERG": [
            {
              "station": "E.P. DE DOUROUBERG / A",
              "voters": 196
            }
          ],
          "DOUROUBERG": [
            {
              "station": "E.P. DE DOUROUBERG / A",
              "voters": 196
            }
          ],
          "DEOLE": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 384
            }
          ],
          "ABDOU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 384
            }
          ],
          "AMINOU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 384
            }
          ],
          "HAMADJOULDE": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 384
            }
          ],
          "HAKOUDEROU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 233
            }
          ],
          "MIGALAK-NDJILOUGOU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 233
            }
          ],
          "NDJILOUGOU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 233
            }
          ],
          "DJAFAROU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 466
            }
          ],
          "BOUTALI": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 535
            }
          ],
          "SIDDI": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 535
            }
          ],
          "HAKOUNDEROU": [
            {
              "station": "E.P. DE MIGALAK-NDJILOUGOU / A",
              "voters": 302
            }
          ],
          "DJOUCK": [
            {
              "station": "ELEVAGE MBANG REY / A",
              "voters": 1638
            }
          ],
          "ELEVAGE": [
            {
              "station": "ELEVAGE MBANG REY / A",
              "voters": 253
            }
          ],
          "MAYO": [
            {
              "station": "EP AKANA / A",
              "voters": 10202
            }
          ],
          "BARKA": [
            {
              "station": "EP AKANA / A",
              "voters": 2234
            }
          ],
          "BATSA": [
            {
              "station": "EP AKANA / A",
              "voters": 1655
            }
          ],
          "AMBARANG": [
            {
              "station": "EP AMBARANG / A",
              "voters": 480
            }
          ],
          "BABIDAN": [
            {
              "station": "EP BABIDAN / A",
              "voters": 265
            }
          ],
          "LARAKOUSSINI": [
            {
              "station": "EP BABIDAN / A",
              "voters": 265
            }
          ],
          "BAGOU": [
            {
              "station": "EP BAGOU / A",
              "voters": 267
            }
          ],
          "BAKARI": [
            {
              "station": "EP BAKARI / A",
              "voters": 475
            }
          ],
          "BARKARI": [
            {
              "station": "EP BAKARI / A",
              "voters": 475
            }
          ],
          "BAOUDI": [
            {
              "station": "EP BAOUDI / A",
              "voters": 341
            }
          ],
          "BEMBOYO": [
            {
              "station": "EP BEMBOYO / A",
              "voters": 697
            }
          ],
          "BANZORO": [
            {
              "station": "EP BENOU / A",
              "voters": 134
            }
          ],
          "BENOU": [
            {
              "station": "EP BENOU / A",
              "voters": 134
            }
          ],
          "BILOUGUI": [
            {
              "station": "EP BILOUGUI / A",
              "voters": 604
            }
          ],
          "AVIATION": [
            {
              "station": "EP BITIOU / A",
              "voters": 1539
            }
          ],
          "BILTAO": [
            {
              "station": "EP BITIOU / A",
              "voters": 1446
            }
          ],
          "BOGDIBO": [
            {
              "station": "EP BITIOU / A",
              "voters": 2021
            }
          ],
          "MANE": [
            {
              "station": "EP BITIOU / A",
              "voters": 1997
            }
          ],
          "QUARTIER": [
            {
              "station": "EP BITIOU / A",
              "voters": 12664
            }
          ],
          "BITIOU": [
            {
              "station": "EP BITIOU / A",
              "voters": 1159
            }
          ],
          "KOUBAOU": [
            {
              "station": "EP BOGDIBO / A",
              "voters": 862
            }
          ],
          "BOGDORO": [
            {
              "station": "EP BOGDORO / A",
              "voters": 351
            }
          ],
          "MBALI": [
            {
              "station": "EP BOGDORO / A",
              "voters": 351
            }
          ],
          "MBIDERE": [
            {
              "station": "EP BOGDORO / A",
              "voters": 351
            }
          ],
          "BOKO": [
            {
              "station": "EP BOKO / A",
              "voters": 500
            }
          ],
          "DOMPTA": [
            {
              "station": "EP BOKO / A",
              "voters": 692
            }
          ],
          "BOTANA": [
            {
              "station": "EP BOKO / A",
              "voters": 500
            }
          ],
          "BOUGOUI": [
            {
              "station": "EP BOKO / A",
              "voters": 500
            }
          ],
          "MBOKO": [
            {
              "station": "EP BOKO / A",
              "voters": 1162
            }
          ],
          "MBAILARA": [
            {
              "station": "EP BOKO / A",
              "voters": 2486
            }
          ],
          "POCKEA": [
            {
              "station": "EP BOKO / A",
              "voters": 692
            }
          ],
          "BOUGOUE": [
            {
              "station": "EP BOUGOUE / A",
              "voters": 411
            }
          ],
          "DJACKONE": [
            {
              "station": "EP DJACKONE / A",
              "voters": 437
            }
          ],
          "DEO": [
            {
              "station": "EP DJOM / A",
              "voters": 907
            }
          ],
          "LIBERE": [
            {
              "station": "EP DJOM / A",
              "voters": 185
            }
          ],
          "DJOM": [
            {
              "station": "EP DJOM / A",
              "voters": 457
            }
          ],
          "NDOYE": [
            {
              "station": "EP DJOM / A",
              "voters": 185
            }
          ],
          "PELE": [
            {
              "station": "EP DJOM / A",
              "voters": 185
            }
          ],
          "GAMBORO": [
            {
              "station": "EP DOMPTA / A",
              "voters": 192
            }
          ],
          "ELEPHANT": [
            {
              "station": "EP ELEPHANT / A",
              "voters": 463
            }
          ],
          "FLAYE": [
            {
              "station": "EP FLAYE / A",
              "voters": 465
            }
          ],
          "SEYO": [
            {
              "station": "EP FLAYE / A",
              "voters": 465
            }
          ],
          "FOULBI": [
            {
              "station": "EP FOULBI / A",
              "voters": 205
            }
          ],
          "FOUMBANG": [
            {
              "station": "EP FOUMBANG / A",
              "voters": 384
            }
          ],
          "KAPLA": [
            {
              "station": "EP FOUMBANG / A",
              "voters": 384
            }
          ],
          "FRAGON": [
            {
              "station": "EP FRAGON / A",
              "voters": 241
            }
          ],
          "GAI-TOUKOULOU": [
            {
              "station": "EP GAI TOUKOULOU / A",
              "voters": 346
            }
          ],
          "NASSARAO": [
            {
              "station": "EP GAI TOUKOULOU / A",
              "voters": 346
            }
          ],
          "HABAGA": [
            {
              "station": "EP HABAGA / A",
              "voters": 423
            }
          ],
          "HAIDJAM": [
            {
              "station": "EP HAIDJAM / A",
              "voters": 504
            }
          ],
          "DJIWARI": [
            {
              "station": "EP HANKAO / A",
              "voters": 480
            }
          ],
          "GUIGUI": [
            {
              "station": "EP HANKAO / A",
              "voters": 480
            }
          ],
          "HANKAO": [
            {
              "station": "EP HANKAO / A",
              "voters": 480
            }
          ],
          "NDIKA": [
            {
              "station": "EP HANKAO / A",
              "voters": 480
            }
          ],
          "NGONGUE": [
            {
              "station": "EP HANKAO / A",
              "voters": 480
            }
          ],
          "BALDI": [
            {
              "station": "EP HELBAO / A",
              "voters": 373
            }
          ],
          "BOGLERE": [
            {
              "station": "EP HELBAO / A",
              "voters": 373
            }
          ],
          "HELBAO": [
            {
              "station": "EP HELBAO / A",
              "voters": 373
            }
          ],
          "MBODO": [
            {
              "station": "EP HELBAO / A",
              "voters": 635
            }
          ],
          "VOYE": [
            {
              "station": "EP HELBAO / A",
              "voters": 1035
            }
          ],
          "HOME": [
            {
              "station": "EP HOME / A",
              "voters": 845
            }
          ],
          "KADES": [
            {
              "station": "EP KADES / A",
              "voters": 388
            }
          ],
          "KANANA": [
            {
              "station": "EP KANANA / A",
              "voters": 465
            }
          ],
          "KARANG": [
            {
              "station": "EP KARANG PANDJAMA / A",
              "voters": 357
            }
          ],
          "PANDJAMA": [
            {
              "station": "EP KARANG PANDJAMA / A",
              "voters": 2112
            }
          ],
          "NDODI": [
            {
              "station": "EP KARANG PANDJAMA / A",
              "voters": 357
            }
          ],
          "KOMBO": [
            {
              "station": "EP KOMBO GOUDRON / A",
              "voters": 1862
            }
          ],
          "GOUDRON": [
            {
              "station": "EP KOMBO GOUDRON / A",
              "voters": 1347
            }
          ],
          "MANBERE": [
            {
              "station": "EP KOMBO GOUDRON / A",
              "voters": 832
            }
          ],
          "KOUMANE": [
            {
              "station": "EP KOUMANE BAYA / A",
              "voters": 501
            }
          ],
          "BAYA": [
            {
              "station": "EP KOUMANE BAYA / A",
              "voters": 1035
            }
          ],
          "LANYA": [
            {
              "station": "EP KOUMANE BAYA / A",
              "voters": 78
            }
          ],
          "BOGLARA": [
            {
              "station": "EP KOUMANE MBOUM / A",
              "voters": 1583
            }
          ],
          "LAOUDJONGUE": [
            {
              "station": "EP LAOUDJONGUE / A",
              "voters": 490
            }
          ],
          "DJACPENDI": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "DJACPOING": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "DJORO": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "LOUBOL": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "NGAOURING": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "OURO": [
            {
              "station": "EP LOUBOL / A",
              "voters": 8094
            }
          ],
          "SOULEY": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "SARIBAYASSA": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "SOUROUDI": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "WODI": [
            {
              "station": "EP LOUBOL / A",
              "voters": 310
            }
          ],
          "MALAOUMBALI": [
            {
              "station": "EP MALAOUMBALI / A",
              "voters": 225
            }
          ],
          "IWARE": [
            {
              "station": "EP MALAOUMBALI / A",
              "voters": 503
            }
          ],
          "GARMANE": [
            {
              "station": "EP MANE GARMANE / A",
              "voters": 229
            }
          ],
          "MBIKOUNI": [
            {
              "station": "EP MANE GARMANE / A",
              "voters": 2552
            }
          ],
          "MAROUM": [
            {
              "station": "EP MAROUM / A",
              "voters": 241
            }
          ],
          "MATA": [
            {
              "station": "EP MATA MADA / A",
              "voters": 429
            }
          ],
          "MADA": [
            {
              "station": "EP MATA MADA / A",
              "voters": 429
            }
          ],
          "KOLOM": [
            {
              "station": "EP MAYO KOLOM / A",
              "voters": 201
            }
          ],
          "MBI": [
            {
              "station": "EP MAYO MBI / A",
              "voters": 600
            }
          ],
          "NDAH": [
            {
              "station": "EP MAYO NDAH / A",
              "voters": 652
            }
          ],
          "ZAKI": [
            {
              "station": "EP MAYO ZAKI / A",
              "voters": 681
            }
          ],
          "MBAIMBEO": [
            {
              "station": "EP MBAIMBEO / A",
              "voters": 435
            }
          ],
          "LAOUKARI": [
            {
              "station": "EP MBAIMBOUM SOGBE / A",
              "voters": 1288
            }
          ],
          "PAMPANDJAMA": [
            {
              "station": "EP MBAIMBOUM SOGBE / A",
              "voters": 1288
            }
          ],
          "SOGBE": [
            {
              "station": "EP MBAIMBOUM SOGBE / A",
              "voters": 1288
            }
          ],
          "MBAIMBOUM": [
            {
              "station": "EP MBAIMBOUM SOGBE / A",
              "voters": 1288
            }
          ],
          "FOUBELA": [
            {
              "station": "EP MBAKA / A",
              "voters": 1239
            }
          ],
          "MAN": [
            {
              "station": "EP MBAKA / A",
              "voters": 1621
            }
          ],
          "MBAKA": [
            {
              "station": "EP MBAKA / A",
              "voters": 1239
            }
          ],
          "MBALL": [
            {
              "station": "EP MBAKA / A",
              "voters": 1621
            }
          ],
          "MBILO": [
            {
              "station": "EP MBAKA / A",
              "voters": 1621
            }
          ],
          "NGARANG": [
            {
              "station": "EP MBAKA / A",
              "voters": 1621
            }
          ],
          "BARBARA": [
            {
              "station": "EP MBAKANA / A",
              "voters": 971
            }
          ],
          "MBAKANA": [
            {
              "station": "EP MBAKANA / A",
              "voters": 415
            }
          ],
          "BINGOH": [
            {
              "station": "EP MBALAINDE / A",
              "voters": 477
            }
          ],
          "MBALAINDE": [
            {
              "station": "EP MBALAINDE / A",
              "voters": 477
            }
          ],
          "BANDIP": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "DJOCK": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "FADA": [
            {
              "station": "EP MBANG REY / A",
              "voters": 4099
            }
          ],
          "MBANG": [
            {
              "station": "EP MBANG REY / A",
              "voters": 1583
            }
          ],
          "IBAL": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "KIM": [
            {
              "station": "EP MBANG REY / A",
              "voters": 816
            }
          ],
          "MAFARE": [
            {
              "station": "EP MBANG REY / A",
              "voters": 1068
            }
          ],
          "MARCHE": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "MIGALACK": [
            {
              "station": "EP MBANG REY / A",
              "voters": 898
            }
          ],
          "NDIP": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "NDJOUCK": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "WAKASSAOU": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "SA'A": [
            {
              "station": "EP MBANG REY / A",
              "voters": 665
            }
          ],
          "GOUDOU": [
            {
              "station": "EP MBANG REY / A",
              "voters": 859
            }
          ],
          "MBEING": [
            {
              "station": "EP MBEING / A",
              "voters": 935
            }
          ],
          "MBEM": [
            {
              "station": "EP MBEING / A",
              "voters": 872
            }
          ],
          "SOROMBEO": [
            {
              "station": "EP MBONG / A",
              "voters": 287
            }
          ],
          "BOUKOUTOU": [
            {
              "station": "EP MBONO / A",
              "voters": 158
            }
          ],
          "MBONO": [
            {
              "station": "EP MBONO / A",
              "voters": 80
            }
          ],
          "SANGA": [
            {
              "station": "EP MBONO / A",
              "voters": 80
            }
          ],
          "MBAI": [
            {
              "station": "EP MBONO / A",
              "voters": 1682
            }
          ],
          "KAOUN": [
            {
              "station": "EP MOYO LADDE / A",
              "voters": 1378
            }
          ],
          "LADDE": [
            {
              "station": "EP MOYO LADDE / A",
              "voters": 688
            }
          ],
          "BABOUDJI": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "FOUFORE": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "KOUMVOU": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "MBILKOUNI": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "NDJINDANG": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "SEING": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 2244
            }
          ],
          "DJAOURO": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 2614
            }
          ],
          "NAN": [
            {
              "station": "EP NDJINDANG / A",
              "voters": 425
            }
          ],
          "NDOCK": [
            {
              "station": "EP NDOCK / A",
              "voters": 855
            }
          ],
          "NANA": [
            {
              "station": "EP NGAIN / A",
              "voters": 459
            }
          ],
          "NGAIN": [
            {
              "station": "EP NGAIN / A",
              "voters": 459
            }
          ],
          "YAYA": [
            {
              "station": "EP NGAIN / A",
              "voters": 636
            }
          ],
          "NGAI": [
            {
              "station": "EP NGAY LARA / A",
              "voters": 511
            }
          ],
          "LARA": [
            {
              "station": "EP NGAY LARA / A",
              "voters": 259
            }
          ],
          "NGAY": [
            {
              "station": "EP NGAY RAH / A",
              "voters": 210
            }
          ],
          "RAH": [
            {
              "station": "EP NGAY RAH / A",
              "voters": 210
            }
          ],
          "MINDAYE": [
            {
              "station": "EP NGOUMI / A",
              "voters": 1160
            }
          ],
          "ROHL": [
            {
              "station": "EP NGOUMI / A",
              "voters": 1160
            }
          ],
          "DJODI": [
            {
              "station": "EP OURO DJODI / A",
              "voters": 290
            }
          ],
          "HAIROU": [
            {
              "station": "EP OURO HAIROU / A",
              "voters": 183
            }
          ],
          "KESSOUM": [
            {
              "station": "EP OURO KESSOUM / A",
              "voters": 628
            }
          ],
          "LAKWE": [
            {
              "station": "EP OURO LAKWE / A",
              "voters": 448
            }
          ],
          "MASSARA": [
            {
              "station": "EP OURO MASSARA / A",
              "voters": 663
            }
          ],
          "PHACOCHERE": [
            {
              "station": "EP PHACOCHERE / A",
              "voters": 1230
            }
          ],
          "RIBAO": [
            {
              "station": "EP RIBAO / A",
              "voters": 428
            }
          ],
          "CONALEMOU": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 502
            }
          ],
          "DSCHANG": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 502
            }
          ],
          "MAZORGOI": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 502
            }
          ],
          "ROL": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 502
            }
          ],
          "SASSA": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 502
            }
          ],
          "PETEL": [
            {
              "station": "EP ROL/DSCHANG / A",
              "voters": 580
            }
          ],
          "KALAKI": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "GANKALIA": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "LAINDE": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "GUINADJI": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "SELAL": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "MBOUSSIRI": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "TALAKI": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "MANDAL": [
            {
              "station": "EP SELAL MBOUSSIRI / A",
              "voters": 272
            }
          ],
          "SIRBIA": [
            {
              "station": "EP SIRBIA / A",
              "voters": 344
            }
          ],
          "SIRI": [
            {
              "station": "EP SIRI / A",
              "voters": 460
            }
          ],
          "BOFORO": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 303
            }
          ],
          "SODEA": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 326
            }
          ],
          "MANGA": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 510
            }
          ],
          "SOKORTA": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 237
            }
          ],
          "TENKORI": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 159
            }
          ],
          "YAHORO": [
            {
              "station": "EP SOKORTA MANGA / A",
              "voters": 159
            }
          ],
          "MBARKA": [
            {
              "station": "EP SORAMBOUM / A",
              "voters": 389
            }
          ],
          "SORAMBOUM": [
            {
              "station": "EP SORAMBOUM / A",
              "voters": 389
            }
          ],
          "TAPI": [
            {
              "station": "EP TAPI / A",
              "voters": 590
            }
          ],
          "LOUMO-DOLE": [
            {
              "station": "EP TOUBORO GPE 1 / A",
              "voters": 1579
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP TOUBORO GPE 1 / A",
              "voters": 3394
            }
          ],
          "ALH": [
            {
              "station": "EP TOUBORO GPE 1 / A",
              "voters": 2429
            }
          ],
          "IBRAHIM": [
            {
              "station": "EP TOUBORO GPE 1 / A",
              "voters": 1579
            }
          ],
          "BOKONDAYA": [
            {
              "station": "EP TOUBORO GPE 2 / A",
              "voters": 462
            }
          ],
          "MISSION": [
            {
              "station": "EP TOUBORO GPE 2 / A",
              "voters": 462
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "EP TOUBORO GPE 2 / A",
              "voters": 462
            }
          ],
          "BENANA": [
            {
              "station": "EP TOULDORO BELAKA / A",
              "voters": 554
            }
          ],
          "TOULDORO": [
            {
              "station": "EP TOULDORO BELAKA / A",
              "voters": 1364
            }
          ],
          "HAKAO": [
            {
              "station": "EP TOULDORO BELAKA / A",
              "voters": 965
            }
          ],
          "HOLKAN": [
            {
              "station": "EP TOULDORO BELAKA / A",
              "voters": 954
            }
          ],
          "SAKA": [
            {
              "station": "EP TOULDORO BELAKA / A",
              "voters": 682
            }
          ],
          "NAKE": [
            {
              "station": "EP VOGZOM NAKE / A",
              "voters": 434
            }
          ],
          "BINI": [
            {
              "station": "EP VONG NAH / A",
              "voters": 1645
            }
          ],
          "NAGGA": [
            {
              "station": "EP VONG NAH / A",
              "voters": 1866
            }
          ],
          "DARA": [
            {
              "station": "EP VONG NAH / A",
              "voters": 1866
            }
          ],
          "WALDE": [
            {
              "station": "EP WALDE / A",
              "voters": 1368
            }
          ],
          "BOKOBO": [
            {
              "station": "EP WANTOUNOU / A",
              "voters": 109
            }
          ],
          "WAKASSAO": [
            {
              "station": "EP WANTOUNOU / A",
              "voters": 362
            }
          ],
          "WANTOUNOU": [
            {
              "station": "EP WANTOUNOU / A",
              "voters": 109
            }
          ],
          "TENYAWOE": [
            {
              "station": "EP YANDEA / A",
              "voters": 167
            }
          ],
          "YANDEA": [
            {
              "station": "EP YANDEA / A",
              "voters": 167
            }
          ],
          "YANLI": [
            {
              "station": "EP YANLI GUIZIGA / A",
              "voters": 596
            }
          ],
          "GUIZIGA": [
            {
              "station": "EP YANLI GUIZIGA / A",
              "voters": 232
            }
          ],
          "BAL": [
            {
              "station": "EP YOKO / A",
              "voters": 1382
            }
          ],
          "BONG": [
            {
              "station": "EP YOKO / A",
              "voters": 2010
            }
          ],
          "REY": [
            {
              "station": "EP YOKO / A",
              "voters": 3982
            }
          ],
          "KOUBAGDJE": [
            {
              "station": "EP YOKO / A",
              "voters": 1382
            }
          ],
          "MBONG": [
            {
              "station": "EP YOKO / A",
              "voters": 1836
            }
          ],
          "TILLI": [
            {
              "station": "EP YOKO / A",
              "voters": 1382
            }
          ],
          "YOKO": [
            {
              "station": "EP YOKO / A",
              "voters": 1382
            }
          ],
          "YORO": [
            {
              "station": "EP YOKO / A",
              "voters": 1685
            }
          ],
          "AKANA": [
            {
              "station": "ESPL CHEF AKANA / A",
              "voters": 1448
            }
          ],
          "KABA": [
            {
              "station": "ESPL CHEF CARREFOU MAROUARE / A",
              "voters": 1818
            }
          ],
          "MAROUARE": [
            {
              "station": "ESPL CHEF CARREFOU MAROUARE / A",
              "voters": 1818
            }
          ],
          "NIGER": [
            {
              "station": "ESPL CHEF CARREFOU MAROUARE / A",
              "voters": 1818
            }
          ],
          "TAKAROU": [
            {
              "station": "ESPL CHEF CARREFOU MAROUARE / A",
              "voters": 1818
            }
          ],
          "LAWA": [
            {
              "station": "ESPL CHEF CARREFOUR MAYO LAWA / A",
              "voters": 639
            }
          ],
          "DJAMBOUTOU": [
            {
              "station": "ESPL CHEF DJAMBOUTOU / A",
              "voters": 546
            }
          ],
          "VILLAGE": [
            {
              "station": "ESPL CHEF KOMBO VILLAGE / A",
              "voters": 1337
            }
          ],
          "KON": [
            {
              "station": "ESPL CHEF KOMBO VILLAGE / A",
              "voters": 515
            }
          ],
          "MVOR": [
            {
              "station": "ESPL CHEF KOMBO VILLAGE / A",
              "voters": 515
            }
          ],
          "ZANDA": [
            {
              "station": "ESPL CHEF KOMBO VILLAGE / A",
              "voters": 515
            }
          ],
          "DJIPORDE": [
            {
              "station": "ESPL CHEF LAGGAYE / A",
              "voters": 327
            }
          ],
          "LAGGAYE": [
            {
              "station": "ESPL CHEF LAGGAYE / A",
              "voters": 580
            }
          ],
          "LAOUDARI": [
            {
              "station": "ESPL CHEF LAGGAYE / A",
              "voters": 327
            }
          ],
          "MBIDOUMA": [
            {
              "station": "ESPL CHEF LAGGAYE / A",
              "voters": 327
            }
          ],
          "AGALA": [
            {
              "station": "ESPL CHEF LAGGOYE / A",
              "voters": 351
            }
          ],
          "CARRIERE": [
            {
              "station": "ESPL CHEF LAGGOYE / A",
              "voters": 761
            }
          ],
          "LAGGOYE": [
            {
              "station": "ESPL CHEF LAGGOYE / A",
              "voters": 922
            }
          ],
          "MBILAOU": [
            {
              "station": "ESPL CHEF LAGGOYE / A",
              "voters": 571
            }
          ],
          "LAOUNINGA": [
            {
              "station": "ESPL CHEF LAOUNINGA / A",
              "voters": 373
            }
          ],
          "NDANGA": [
            {
              "station": "ESPL CHEF LAOUNINGA / A",
              "voters": 373
            }
          ],
          "MAYO-GUEMZEK": [
            {
              "station": "ESPL CHEF MAYO GUEMZECK / A",
              "voters": 523
            }
          ],
          "ZARIA": [
            {
              "station": "ESPL CHEF MAYO ZARIA / A",
              "voters": 818
            }
          ],
          "LAKHORO": [
            {
              "station": "ESPL CHEF MBAI MBOUM LAKHORO / A",
              "voters": 1805
            }
          ],
          "MBOUM": [
            {
              "station": "ESPL CHEF MBAI MBOUM MARCHE / A",
              "voters": 2025
            }
          ],
          "KOUDJEOU": [
            {
              "station": "ESPL CHEF MBAI MBOUM MARCHE / A",
              "voters": 1602
            }
          ],
          "RIAD": [
            {
              "station": "ESPL CHEF MBAI MBOUM MARCHE / A",
              "voters": 1602
            }
          ],
          "TIBA": [
            {
              "station": "ESPL CHEF MBANG REY NDOCK TIBA / A",
              "voters": 91
            }
          ],
          "FOULBE": [
            {
              "station": "ESPL CHEF MBIKOUNI FOULBE / A",
              "voters": 1366
            }
          ],
          "RONGODONG": [
            {
              "station": "ESPL CHEF MBIKOUNI FOULBE / A",
              "voters": 1366
            }
          ],
          "SODECOTON": [
            {
              "station": "ESPL CHEF MBIKOUNI FOULBE / A",
              "voters": 1997
            }
          ],
          "MBITOM": [
            {
              "station": "ESPL CHEF MBITOM / A",
              "voters": 862
            }
          ],
          "NDJORO": [
            {
              "station": "ESPL CHEF NDJORO / A",
              "voters": 339
            }
          ],
          "NDICKI": [
            {
              "station": "ESPL CHEF NGAI NDICKI / A",
              "voters": 252
            }
          ],
          "NGARA": [
            {
              "station": "ESPL CHEF NGARA NGOH / A",
              "voters": 135
            }
          ],
          "NGOH": [
            {
              "station": "ESPL CHEF NGARA NGOH / A",
              "voters": 135
            }
          ],
          "MBIDAM": [
            {
              "station": "ESPL CHEF NGUEOUTAOU / A",
              "voters": 367
            }
          ],
          "NDOUROU": [
            {
              "station": "ESPL CHEF NGUEOUTAOU / A",
              "voters": 367
            }
          ],
          "NGUEOUTAOU": [
            {
              "station": "ESPL CHEF NGUEOUTAOU / A",
              "voters": 367
            }
          ],
          "KOUROUMDJI": [
            {
              "station": "ESPL CHEF NGUIWIRI / A",
              "voters": 295
            }
          ],
          "MAKOUNI": [
            {
              "station": "ESPL CHEF NGUIWIRI / A",
              "voters": 472
            }
          ],
          "NDJELE": [
            {
              "station": "ESPL CHEF NGUIWIRI / A",
              "voters": 295
            }
          ],
          "NGAOUROM": [
            {
              "station": "ESPL CHEF NGUIWIRI / A",
              "voters": 295
            }
          ],
          "NGUIRWIRI": [
            {
              "station": "ESPL CHEF NGUIWIRI / A",
              "voters": 295
            }
          ],
          "DALA": [
            {
              "station": "ESPL CHEF OURO DALA / A",
              "voters": 177
            }
          ],
          "TCHABAL": [
            {
              "station": "ESPL CHEF TCHABAL SILE DJAORO BOUBA /  A",
              "voters": 866
            }
          ],
          "SILE": [
            {
              "station": "ESPL CHEF TCHABAL SILE DJAORO BOUBA /  A",
              "voters": 331
            }
          ],
          "DJAORO": [
            {
              "station": "ESPL CHEF TCHABAL SILE DJAORO BOUBA /  A",
              "voters": 331
            }
          ],
          "BOUBA": [
            {
              "station": "ESPL CHEF TCHABAL SILE DJAORO BOUBA /  A",
              "voters": 154
            }
          ],
          "BIRIBA": [
            {
              "station": "ESPL CHEF TOUBORO MBOUM / A",
              "voters": 1231
            }
          ],
          "MBITOYE": [
            {
              "station": "ESPL CHEF TOUBORO MBOUM / A",
              "voters": 1435
            }
          ],
          "TOUBORO": [
            {
              "station": "ESPL CHEF TOUBORO MBOUM / A",
              "voters": 4935
            }
          ],
          "GOLOMBALI": [
            {
              "station": "ESPLANADE CHEFFERI GOLOMBALI / A",
              "voters": 470
            }
          ],
          "NGOUMI": [
            {
              "station": "ESPLANADE CHEFFERI GOLOMBALI / A",
              "voters": 8003
            }
          ],
          "LARA-NDAH": [
            {
              "station": "GIC SODECOTON LARAH NDAH / A",
              "voters": 261
            }
          ],
          "MOUNDANG": [
            {
              "station": "LYCEE YANLI MOUNDANG / A",
              "voters": 364
            }
          ],
          "CAMP": [
            {
              "station": "MAIRIE TOUBORO / A",
              "voters": 400
            }
          ],
          "BIR": [
            {
              "station": "MAIRIE TOUBORO / A",
              "voters": 200
            }
          ],
          "GENDARMERIE": [
            {
              "station": "MAIRIE TOUBORO / A",
              "voters": 200
            }
          ],
          "MAIRIE": [
            {
              "station": "MAIRIE TOUBORO / A",
              "voters": 200
            }
          ],
          "FONCTIONNAIRES": [
            {
              "station": "SOUS PREFECTURE TOUBORO / A",
              "voters": 353
            }
          ],
          "SOUS": [
            {
              "station": "SOUS PREFECTURE TOUBORO / A",
              "voters": 353
            }
          ],
          "PREFECTURE": [
            {
              "station": "SOUS PREFECTURE TOUBORO / A",
              "voters": 353
            }
          ]
        }
      }
    }
  }
};