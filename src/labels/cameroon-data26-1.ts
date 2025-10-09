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
  "NORD": {
    name: { en: "NORTH", fr: "NORD" },
    divisions: {
      "BENOUE": {
        "BASCHEO": {
          "EP DARAM / A": [
            {
              station: "DARAM",
              voters: 530
            },
            {
              station: "WINDE",
              voters: 530
            },
            {
              station: "DEBRI",
              voters: 530
            },
          ],
          "EP DJALINGO BELEL / A": [
            {
              station: "BELEL",
              voters: 646
            },
            {
              station: "MANAWASSI",
              voters: 646
            },
            {
              station: "GODJE",
              voters: 890
            },
          ],
          "EP DJARENGUOL / A": [
            {
              station: "DJARENGUOL",
              voters: 415
            },
            {
              station: "DABA",
              voters: 766
            },
          ],
          "EP HAMAKOUSSOU / A": [
            {
              station: "DJALLOU",
              voters: 514
            },
            {
              station: "HAMAKOUSSOU",
              voters: 514
            },
            {
              station: "TONDIRE",
              voters: 514
            },
          ],
          "EP HARKOU / A": [
            {
              station: "HARKOU",
              voters: 368
            },
            {
              station: "ROYA",
              voters: 368
            },
          ],
          "EP KATAKO / A": [
            {
              station: "BAO",
              voters: 705
            },
            {
              station: "KATAKO",
              voters: 705
            },
            {
              station: "NGOUTCHOUMI",
              voters: 705
            },
            {
              station: "BASCHEO",
              voters: 7040
            },
            {
              station: "TIMPILRE",
              voters: 705
            },
            {
              station: "MODIBO",
              voters: 705
            },
          ],
          "EP KOBOSSI / A": [
            {
              station: "BOUGOUR",
              voters: 1400
            },
            {
              station: "DJALINGO",
              voters: 1520
            },
            {
              station: "MAPOUTKI",
              voters: 1204
            },
            {
              station: "DJARIA",
              voters: 1400
            },
            {
              station: "KOBOSSI",
              voters: 1418
            },
            {
              station: "MBILLA",
              voters: 709
            },
            {
              station: "TCHIKAKRE",
              voters: 709
            },
          ],
          "EP MAPOUKTI / A": [
            {
              station: "LAINDE",
              voters: 165
            },
          ],
          "EP MAYO OULO BASCHEO / A": [
            {
              station: "MAYO",
              voters: 860
            },
            {
              station: "OULO",
              voters: 860
            },
            {
              station: "FOULBE",
              voters: 430
            },
            {
              station: "TCHOME",
              voters: 430
            },
          ],
          "EP MBABI BANTADJE / A": [
            {
              station: "BAH",
              voters: 909
            },
            {
              station: "DJABOU",
              voters: 909
            },
            {
              station: "FOULBERE",
              voters: 740
            },
            {
              station: "MBABI",
              voters: 1176
            },
            {
              station: "GASCHIRE",
              voters: 436
            },
            {
              station: "LARIA",
              voters: 909
            },
            {
              station: "WOURO",
              voters: 8172
            },
            {
              station: "HAMAYEL",
              voters: 740
            },
            {
              station: "WOURO-DOUNDEHI",
              voters: 909
            },
            {
              station: "WOURO-MAIDIBINO",
              voters: 436
            },
          ],
          "EP MBOULMI BALDAYEL / A": [
            {
              station: "BALDAYEL",
              voters: 402
            },
            {
              station: "DOUNDERE",
              voters: 402
            },
            {
              station: "MBOULMI",
              voters: 402
            },
          ],
          "EP NARO KOUBADJE / A": [
            {
              station: "BOMBOL",
              voters: 725
            },
            {
              station: "KOUBADJE",
              voters: 725
            },
            {
              station: "NARO-KOUBADJE",
              voters: 725
            },
            {
              station: "POUROUROU",
              voters: 725
            },
            {
              station: "TCHAKOUM",
              voters: 725
            },
            {
              station: "TONGO",
              voters: 725
            },
          ],
          "EP PEMGOU / A": [
            {
              station: "DORBA",
              voters: 424
            },
            {
              station: "PEMGOU",
              voters: 424
            },
          ],
          "EP ROGNOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 1194
            },
            {
              station: "ROGNOU",
              voters: 1866
            },
            {
              station: "KERZENG",
              voters: 933
            },
            {
              station: "NASSARAO",
              voters: 6262
            },
            {
              station: "GOH",
              voters: 1284
            },
            {
              station: "NGONKA",
              voters: 1284
            },
            {
              station: "NGOUROU",
              voters: 2050
            },
            {
              station: "FALI",
              voters: 1714
            },
            {
              station: "SEBORE",
              voters: 933
            },
            {
              station: "TARABA",
              voters: 1194
            },
            {
              station: "WAFANGO",
              voters: 933
            },
          ],
          "EP WOURO NAOUDE / A": [
            {
              station: "SABONGARI",
              voters: 491
            },
            {
              station: "SOUKI",
              voters: 491
            },
            {
              station: "NAOUDE",
              voters: 241
            },
          ],
          "ESPL CHEF POURI ALAM / A": [
            {
              station: "DARPATA",
              voters: 436
            },
            {
              station: "DJOUGOUNDOU",
              voters: 436
            },
            {
              station: "POURI",
              voters: 436
            },
            {
              station: "RAYO",
              voters: 436
            },
          ],
          "LYCEE DE BASCHEO / A": [
            {
              station: "KESSOURE",
              voters: 4978
            },
            {
              station: "MALKOUROU",
              voters: 4978
            },
            {
              station: "MBOUTOU",
              voters: 4978
            },
            {
              station: "ARDO",
              voters: 4978
            },
            {
              station: "MBAI",
              voters: 4978
            },
            {
              station: "DJAOURO",
              voters: 5596
            },
            {
              station: "MOUSSA",
              voters: 5596
            },
          ],
        },
        "BIBEMI": {
          "ECOLE MISSION / A": [
            {
              station: "LATIN",
              voters: 481
            },
            {
              station: "NAGUE",
              voters: 481
            },
          ],
          "EP ADOUMRI / A": [
            {
              station: "ADOUMRI",
              voters: 23792
            },
            {
              station: "HAOUSSARE",
              voters: 3646
            },
            {
              station: "KAGOURE",
              voters: 4261
            },
            {
              station: "KOLLERE",
              voters: 5402
            },
            {
              station: "SODECOTON",
              voters: 5754
            },
            {
              station: "WAFANGO",
              voters: 3956
            },
            {
              station: "BIBEMI",
              voters: 20018
            },
            {
              station: "CENTRE",
              voters: 7164
            },
            {
              station: "BOUKTIO",
              voters: 3534
            },
            {
              station: "ROUMDE",
              voters: 3766
            },
            {
              station: "SEBORE-ADOUMRI",
              voters: 3038
            },
            {
              station: "TCHAMIDARI",
              voters: 3534
            },
          ],
          "EP BABOUDJI / A": [
            {
              station: "BABOUDJI",
              voters: 630
            },
            {
              station: "OURO-KIANDA",
              voters: 798
            },
          ],
          "EP BADEO / A": [
            {
              station: "TCHEKEHI",
              voters: 205
            },
          ],
          "EP BAHAMADIKO / A": [
            {
              station: "BAHAMADICKO",
              voters: 302
            },
            {
              station: "DJAOURO",
              voters: 444
            },
            {
              station: "GOTEL",
              voters: 373
            },
          ],
          "EP BAHIMI 1 / A": [
            {
              station: "OURO-SABERE",
              voters: 410
            },
            {
              station: "WANDJARA",
              voters: 410
            },
          ],
          "EP BAHIMI 2 / A": [
            {
              station: "BAHIMI",
              voters: 2348
            },
            {
              station: "OURO",
              voters: 10745
            },
            {
              station: "BOCKI",
              voters: 559
            },
          ],
          "EP BAKSA / A": [
            {
              station: "BAKSA",
              voters: 838
            },
          ],
          "EP BALDA / A": [
            {
              station: "YALANGO",
              voters: 413
            },
          ],
          "EP BANDORO / A": [
            {
              station: "BANDORO",
              voters: 249
            },
            {
              station: "P￈RE",
              voters: 249
            },
          ],
          "EP BEBOUMZA / A": [
            {
              station: "BEBOUMZA",
              voters: 321
            },
          ],
          "EP BESOUM-BOUBA / A": [
            {
              station: "BESSOUM-BOUBA",
              voters: 358
            },
          ],
          "EP BESSOUM-LABAY / A": [
            {
              station: "BESSOUM-LABAY",
              voters: 216
            },
          ],
          "EP BIBEMI GR I / A": [
            {
              station: "DAMARE",
              voters: 771
            },
            {
              station: "LAMORDE",
              voters: 771
            },
            {
              station: "BEBEMI",
              voters: 771
            },
          ],
          "EP BIBEMI GR II / A": [
            {
              station: "PLAQUES",
              voters: 2050
            },
            {
              station: "KAPSIKIRE",
              voters: 1115
            },
            {
              station: "DOWORO",
              voters: 2050
            },
            {
              station: "FOULBERE",
              voters: 1886
            },
            {
              station: "GUIZIGARE",
              voters: 1596
            },
            {
              station: "KAPSIKI",
              voters: 2199
            },
            {
              station: "MANDJAOLA",
              voters: 2498
            },
            {
              station: "MAYO-BARKA",
              voters: 1342
            },
            {
              station: "YADJI",
              voters: 1894
            },
            {
              station: "OURO-KARI",
              voters: 2050
            },
            {
              station: "OURO-YADJI",
              voters: 1115
            },
            {
              station: "SABONGARI",
              voters: 2050
            },
            {
              station: "WINDE",
              voters: 2050
            },
          ],
          "EP BIKALE / A": [
            {
              station: "BIKALE",
              voters: 1566
            },
          ],
          "EP BOELI / A": [
            {
              station: "BOELI",
              voters: 1971
            },
            {
              station: "DJAGNI",
              voters: 657
            },
            {
              station: "SEBORE",
              voters: 1884
            },
          ],
          "EP BOULA-IBIB / A": [
            {
              station: "BOULA-",
              voters: 2240
            },
            {
              station: "IBIB",
              voters: 4480
            },
            {
              station: "DJARENDIRE",
              voters: 2240
            },
            {
              station: "GADA-BOUWOL",
              voters: 2654
            },
            {
              station: "HARDE",
              voters: 2240
            },
            {
              station: "BOULA",
              voters: 2240
            },
            {
              station: "NANGUE",
              voters: 2240
            },
            {
              station: "OURO-BAI",
              voters: 2240
            },
          ],
          "EP BOUNGA / A": [
            {
              station: "BOUNGA",
              voters: 739
            },
          ],
          "EP BOUNGA HOSSERE / A": [
            {
              station: "BOUNGA-HOSSERE",
              voters: 402
            },
          ],
          "EP BOUNGUEL / A": [
            {
              station: "BOUNGUEL",
              voters: 313
            },
            {
              station: "GARALAWO",
              voters: 313
            },
          ],
          "EP CARREFOUR DJAOURO SIDDI / A": [
            {
              station: "SIDDI",
              voters: 71
            },
          ],
          "EP DANDERE / A": [
            {
              station: "DANDERE",
              voters: 459
            },
            {
              station: "NAKERE",
              voters: 872
            },
          ],
          "EP DERINTCHING / A": [
            {
              station: "DERINTCHING",
              voters: 686
            },
          ],
          "EP DJALOUMI / A": [
            {
              station: "DJALOUMI",
              voters: 1920
            },
            {
              station: "OURO-FADA",
              voters: 960
            },
            {
              station: "POUPOU",
              voters: 960
            },
          ],
          "EP DJARENDI BELLO / A": [
            {
              station: "BINOU",
              voters: 1121
            },
            {
              station: "DJARENDI-BELLO",
              voters: 466
            },
            {
              station: "TEWER",
              voters: 466
            },
          ],
          "EP DJARENGOL / A": [
            {
              station: "BOKKIRE",
              voters: 115
            },
            {
              station: "DJARENGOL",
              voters: 115
            },
          ],
          "EP DJENEO / A": [
            {
              station: "DJENEO",
              voters: 395
            },
          ],
          "EP DJOUGOUNDOURE / A": [
            {
              station: "LOUDOU",
              voters: 182
            },
            {
              station: "NEFETENGOL",
              voters: 182
            },
          ],
          "EP DOUGGUE / A": [
            {
              station: "DOUGGUE",
              voters: 302
            },
          ],
          "EP FALTIGOU / A": [
            {
              station: "MAYO-PARIS",
              voters: 205
            },
            {
              station: "SISSIRI",
              voters: 205
            },
          ],
          "EP FAMOU / A": [
            {
              station: "FAMOU",
              voters: 441
            },
          ],
          "EP FAMOURE / A": [
            {
              station: "FAMOURE",
              voters: 330
            },
          ],
          "EP G II ADOUMRI / A": [
            {
              station: "BARRIERE",
              voters: 728
            },
          ],
          "EP GALI / A": [
            {
              station: "ARABO",
              voters: 540
            },
            {
              station: "GALI",
              voters: 540
            },
            {
              station: "SUNSANE",
              voters: 540
            },
            {
              station: "TCHONASSANE",
              voters: 540
            },
          ],
          "EP GII BIBEMI / A": [
            {
              station: "QUARTIER",
              voters: 935
            },
            {
              station: "WADJIRI",
              voters: 935
            },
          ],
          "EP GOKA / A": [
            {
              station: "GOKA",
              voters: 1112
            },
            {
              station: "MAYO-BIRIDJI",
              voters: 1021
            },
            {
              station: "SOSSARI",
              voters: 703
            },
          ],
          "EP GONZOUNE / A": [
            {
              station: "GONZOUNE",
              voters: 265
            },
          ],
          "EP GOPTIKERE / A": [
            {
              station: "CARREFOUR",
              voters: 615
            },
            {
              station: "GOPTIKERE",
              voters: 1088
            },
          ],
          "EP GORE ARDO / A": [
            {
              station: "GAGAWA",
              voters: 414
            },
            {
              station: "GORE-ARDO",
              voters: 414
            },
            {
              station: "KAREDJE",
              voters: 795
            },
            {
              station: "GOUBE",
              voters: 414
            },
            {
              station: "NGORE",
              voters: 603
            },
            {
              station: "NGASKA",
              voters: 603
            },
          ],
          "EP HAMALADE / A": [
            {
              station: "HAMALADE",
              voters: 608
            },
            {
              station: "KALYANFOU",
              voters: 608
            },
          ],
          "EP HOLMA / A": [
            {
              station: "DOUMGUEL",
              voters: 680
            },
            {
              station: "HOLMA",
              voters: 1213
            },
          ],
          "EP HOULA / A": [
            {
              station: "HOULA",
              voters: 4078
            },
            {
              station: "KILBAO",
              voters: 2182
            },
            {
              station: "MBEDEO",
              voters: 2182
            },
            {
              station: "YAYA",
              voters: 2039
            },
            {
              station: "SOULMAKI",
              voters: 2182
            },
          ],
          "EP KAKOU / A": [
            {
              station: "KAKOU",
              voters: 662
            },
          ],
          "EP KALAO / A": [
            {
              station: "BIMARE",
              voters: 324
            },
            {
              station: "DAKSI",
              voters: 439
            },
            {
              station: "NAKANDJA",
              voters: 324
            },
          ],
          "EP KAPANAY / A": [
            {
              station: "KAPANAY",
              voters: 287
            },
          ],
          "EP KATCHEO / A": [
            {
              station: "KATCHEO",
              voters: 234
            },
            {
              station: "LANKANDJA",
              voters: 234
            },
            {
              station: "OURO-BOCKI",
              voters: 234
            },
          ],
          "EP KILBAO / A": [
            {
              station: "TCHABEWA",
              voters: 143
            },
          ],
          "EP LABARE BOBODJO / A": [
            {
              station: "LABARE-BOBODJO",
              voters: 407
            },
          ],
          "EP LADDE-GORE / A": [
            {
              station: "LADDE-GORE",
              voters: 592
            },
            {
              station: "SABERE",
              voters: 592
            },
            {
              station: "LADDE",
              voters: 592
            },
            {
              station: "GORE",
              voters: 592
            },
          ],
          "EP LAM / A": [
            {
              station: "KALAO",
              voters: 820
            },
            {
              station: "LAM",
              voters: 496
            },
          ],
          "EP LAWA / A": [
            {
              station: "ADI",
              voters: 315
            },
            {
              station: "LAWA",
              voters: 315
            },
            {
              station: "LIBINE",
              voters: 315
            },
            {
              station: "WASO",
              voters: 315
            },
          ],
          "EP LAZOUA / A": [
            {
              station: "BOLGUI",
              voters: 110
            },
            {
              station: "LAZOUA",
              voters: 110
            },
          ],
          "EP LOMBO / A": [
            {
              station: "DORBA",
              voters: 552
            },
            {
              station: "LOMBO",
              voters: 552
            },
          ],
          "EP LOUMINGUEL / A": [
            {
              station: "LOUMINGUEL",
              voters: 930
            },
            {
              station: "LOMINGUEL",
              voters: 465
            },
          ],
          "EP MADJOLDE / A": [
            {
              station: "GONKOI",
              voters: 532
            },
            {
              station: "MADJOLDE",
              voters: 532
            },
          ],
          "EP MAFALE / A": [
            {
              station: "MAFALE",
              voters: 239
            },
            {
              station: "MATSIRI",
              voters: 239
            },
          ],
          "EP MAIDJIMI / A": [
            {
              station: "MAIDJIMI",
              voters: 335
            },
          ],
          "EP MAKASSELE / A": [
            {
              station: "HOULA-FANDOU",
              voters: 472
            },
            {
              station: "MAKASSELLE",
              voters: 338
            },
            {
              station: "MATALI",
              voters: 338
            },
            {
              station: "ZOULGO",
              voters: 338
            },
          ],
          "EP MAYO BARKA / A": [
            {
              station: "BARKA",
              voters: 454
            },
            {
              station: "FOULBE",
              voters: 227
            },
            {
              station: "GUIZIGA",
              voters: 227
            },
          ],
          "EP MAYO-LAOULADJE / A": [
            {
              station: "BIZOME",
              voters: 146
            },
            {
              station: "MAYO-LAOULADJE",
              voters: 146
            },
          ],
          "EP MAYO-LOPE / A": [
            {
              station: "MAYO-LOPE",
              voters: 1036
            },
          ],
          "EP MBELLA / A": [
            {
              station: "DJABIRE",
              voters: 803
            },
            {
              station: "MBELLA",
              voters: 803
            },
          ],
          "EP MBIGOU / A": [
            {
              station: "DANDIBALI",
              voters: 694
            },
            {
              station: "DOMAYO",
              voters: 694
            },
            {
              station: "MBIGOU",
              voters: 1388
            },
            {
              station: "GOLLA",
              voters: 694
            },
            {
              station: "TOUPOURI",
              voters: 694
            },
          ],
          "EP MORA-CARREFOUR / A": [
            {
              station: "MORA-CARREFOUR",
              voters: 187
            },
          ],
          "EP NDIAM-BADI / A": [
            {
              station: "BALDA",
              voters: 1247
            },
            {
              station: "NDIAM-BADI",
              voters: 673
            },
            {
              station: "YALAGO",
              voters: 827
            },
            {
              station: "GONI",
              voters: 827
            },
          ],
          "EP NDJOURA / A": [
            {
              station: "NDJOURA",
              voters: 270
            },
          ],
          "EP NDONGA / A": [
            {
              station: "LENDJE",
              voters: 340
            },
            {
              station: "NDONGA",
              voters: 340
            },
            {
              station: "TCHAKARI",
              voters: 439
            },
          ],
          "EP NGAOULI / A": [
            {
              station: "BADIWA",
              voters: 479
            },
            {
              station: "NGAOULI",
              voters: 479
            },
          ],
          "EP OURO KIANDA / A": [
            {
              station: "LARKI",
              voters: 168
            },
            {
              station: "KIANDA1",
              voters: 168
            },
            {
              station: "KIANDA2",
              voters: 168
            },
          ],
          "EP OURO-ARDE / A": [
            {
              station: "GAMDOUGUEL",
              voters: 543
            },
            {
              station: "OURO-ARDE",
              voters: 408
            },
          ],
          "EP OURO-KIO / A": [
            {
              station: "OURO-KIO",
              voters: 526
            },
          ],
          "EP PADARME / A": [
            {
              station: "PADARME",
              voters: 1696
            },
            {
              station: "TIGUERE",
              voters: 1696
            },
          ],
          "EP PATADJE / A": [
            {
              station: "DJOUGOUNDOURE",
              voters: 477
            },
            {
              station: "MAYO-LOUNDOU",
              voters: 295
            },
            {
              station: "NEFETEGOL",
              voters: 295
            },
            {
              station: "PATADJE",
              voters: 295
            },
          ],
          "EP PIAGA / A": [
            {
              station: "BOUZA",
              voters: 306
            },
            {
              station: "FADARMA",
              voters: 306
            },
            {
              station: "PIAGA",
              voters: 306
            },
          ],
          "EP POMLA / A": [
            {
              station: "BANTADJE",
              voters: 1201
            },
            {
              station: "POMLA",
              voters: 2162
            },
          ],
          "EP ROUMDE-BIDE / A": [
            {
              station: "BIDE",
              voters: 640
            },
            {
              station: "BIDE-YAYA",
              voters: 640
            },
            {
              station: "LABARE",
              voters: 1078
            },
            {
              station: "DJAMAHA",
              voters: 757
            },
            {
              station: "ROUMDE-BIDE",
              voters: 640
            },
            {
              station: "SERAWA",
              voters: 640
            },
          ],
          "EP SEBORE / A": [
            {
              station: "OURO-GOUBE",
              voters: 570
            },
          ],
          "EP TAM / A": [
            {
              station: "BADEOU",
              voters: 767
            },
            {
              station: "BADORO",
              voters: 1292
            },
            {
              station: "TAM",
              voters: 1534
            },
            {
              station: "FALTIGOU",
              voters: 2205
            },
            {
              station: "MAYEL",
              voters: 767
            },
            {
              station: "PARIS-TAM",
              voters: 767
            },
            {
              station: "SISSERI",
              voters: 767
            },
          ],
          "EP TEWERE / A": [
            {
              station: "BIRIDJI",
              voters: 189
            },
            {
              station: "TEWERE",
              voters: 189
            },
          ],
          "EP TIHELE / A": [
            {
              station: "TIHELE",
              voters: 225
            },
          ],
          "EP WAGA / A": [
            {
              station: "WAGA",
              voters: 415
            },
          ],
          "EP YABERIYA / A": [
            {
              station: "YABERIYA",
              voters: 323
            },
          ],
          "ESPL PLACE DE FETE BOUI / A": [
            {
              station: "BOUI",
              voters: 283
            },
          ],
          "ESPL PLACE DE FETE DEOU / A": [
            {
              station: "DEOU",
              voters: 672
            },
            {
              station: "SOMANGO",
              voters: 336
            },
          ],
          "ESPL PLACE DE FETE GOUDJE / A": [
            {
              station: "MAYO-GOUDJE",
              voters: 132
            },
          ],
          "ESPL PLACE DE FETE NAKERE / A": [
            {
              station: "AOUDJALI",
              voters: 154
            },
            {
              station: "NELBI",
              voters: 154
            },
          ],
          "ESPL PLACE DE FETE VOUNRE / A": [
            {
              station: "VOUNRE",
              voters: 257
            },
          ],
          "ESPL PLACE FETE MALLOUM / A": [
            {
              station: "FEREOUNDE",
              voters: 213
            },
            {
              station: "LONGUEREO",
              voters: 213
            },
            {
              station: "MALLOUM",
              voters: 213
            },
            {
              station: "OURO-DOLE",
              voters: 213
            },
          ],
          "ESPL PLACE FETE MAYO-GOUDJE / A": [
            {
              station: "BAINAWA",
              voters: 492
            },
            {
              station: "MAYO",
              voters: 2608
            },
            {
              station: "GOUDJE",
              voters: 1476
            },
            {
              station: "KANGOU",
              voters: 492
            },
            {
              station: "KOULADJE",
              voters: 492
            },
          ],
          "ESPL PLACE FETE MAYO-LEBRI / A": [
            {
              station: "MAYO-LEBRI",
              voters: 346
            },
            {
              station: "MAYO-NELBE",
              voters: 346
            },
          ],
          "ESPL PLACE FETE MBOLLOM / A": [
            {
              station: "MBOLLOM",
              voters: 306
            },
            {
              station: "RIWAGO",
              voters: 306
            },
          ],
          "ESPL PLACE FETE OURO-DONKA / A": [
            {
              station: "LAINDE",
              voters: 117
            },
            {
              station: "DONKA",
              voters: 117
            },
            {
              station: "OURO-DONKA",
              voters: 117
            },
            {
              station: "YAOUNGO",
              voters: 117
            },
          ],
          "ESPL.PLACE DE FETE MASSIRI / A": [
            {
              station: "MASSIRI",
              voters: 131
            },
          ],
          "ESPL.TANKANGOL / A": [
            {
              station: "BADEO",
              voters: 362
            },
            {
              station: "TANKANGOL",
              voters: 157
            },
          ],
          "LYCEE BIBEMI GUEDA / A": [
            {
              station: "GUEDA",
              voters: 525
            },
            {
              station: "LOUGGUEREO",
              voters: 525
            },
            {
              station: "MOUWIRE",
              voters: 525
            },
          ],
          "SAR/SM ADOUMRI / A": [
            {
              station: "KODJOLI",
              voters: 496
            },
            {
              station: "GADA",
              voters: 496
            },
            {
              station: "HAOUSSA",
              voters: 496
            },
          ],
        },
        "DEMBO": {
          "EP BABESSA / A": [
            {
              station: "BABESSA",
              voters: 361
            },
            {
              station: "LOUGGA",
              voters: 361
            },
            {
              station: "WAMBABE",
              voters: 361
            },
          ],
          "EP BADJEROUM / A": [
            {
              station: "BADJEROUM",
              voters: 151
            },
            {
              station: "DALEHI",
              voters: 151
            },
            {
              station: "BADJABBO",
              voters: 151
            },
          ],
          "EP BALDE-DANEDJI / A": [
            {
              station: "BALDE-DANEDJI",
              voters: 235
            },
            {
              station: "BAPAROU",
              voters: 235
            },
            {
              station: "BELA",
              voters: 485
            },
            {
              station: "DARKODJI",
              voters: 485
            },
            {
              station: "MAYO-BANI",
              voters: 235
            },
            {
              station: "TINTINRE",
              voters: 235
            },
          ],
          "EP BORI-CENTRE / A": [
            {
              station: "BORI-CENTRE",
              voters: 365
            },
            {
              station: "MAYEL-MAIRI",
              voters: 365
            },
            {
              station: "MAYO",
              voters: 365
            },
            {
              station: "KEOU",
              voters: 365
            },
            {
              station: "MAYO-GOUDOU",
              voters: 365
            },
            {
              station: "BARODE",
              voters: 365
            },
          ],
          "EP DEMBO / A": [
            {
              station: "DEMBO",
              voters: 1692
            },
          ],
          "EP DJATOUMI CARREFOUR / A": [
            {
              station: "DJATOUMI",
              voters: 275
            },
            {
              station: "CARREFOUR",
              voters: 275
            },
            {
              station: "GUERTODE",
              voters: 395
            },
            {
              station: "TIMPIL",
              voters: 606
            },
          ],
          "EP DJATOUMI VILLAGE / A": [
            {
              station: "DJATOUMI-VILLAGE",
              voters: 333
            },
            {
              station: "KODJELEWOL",
              voters: 333
            },
            {
              station: "POSSO",
              voters: 333
            },
            {
              station: "WINDE",
              voters: 333
            },
            {
              station: "GANDOUWO",
              voters: 333
            },
          ],
          "EP DOMBOL / A": [
            {
              station: "BORI",
              voters: 311
            },
            {
              station: "DOMBOL",
              voters: 311
            },
            {
              station: "ABDOU",
              voters: 311
            },
            {
              station: "KOSSEYEL",
              voters: 311
            },
            {
              station: "MAMMA",
              voters: 311
            },
            {
              station: "ARDO",
              voters: 311
            },
            {
              station: "MATAFALRE",
              voters: 311
            },
            {
              station: "MAYEL",
              voters: 311
            },
            {
              station: "BAHARNA",
              voters: 311
            },
            {
              station: "KESSOUM",
              voters: 938
            },
          ],
          "EP DORNOMOU / A": [
            {
              station: "BOUL-BOULEL",
              voters: 451
            },
            {
              station: "DORNOMOU",
              voters: 451
            },
            {
              station: "MBOUL-MBOULA",
              voters: 451
            },
          ],
          "EP LAINDE TCHAKOUM / A": [
            {
              station: "TCHAKAWA",
              voters: 196
            },
          ],
          "EP MBOUTOU / A": [
            {
              station: "MBOUTOU",
              voters: 904
            },
            {
              station: "LAMORDE",
              voters: 452
            },
            {
              station: "OUSMANOU",
              voters: 452
            },
          ],
          "EP OURO-DOUNDEHI / A": [
            {
              station: "BARNGA",
              voters: 168
            },
            {
              station: "OURO-DOUNDEHI",
              voters: 168
            },
            {
              station: "TIMBO",
              voters: 346
            },
          ],
          "EP SEBORE / A": [
            {
              station: "BAINAWARE",
              voters: 368
            },
            {
              station: "DIRI",
              voters: 819
            },
            {
              station: "KANGOU",
              voters: 368
            },
            {
              station: "DJONGOU",
              voters: 368
            },
            {
              station: "SEBORE",
              voters: 368
            },
            {
              station: "WALEWOL",
              voters: 733
            },
            {
              station: "BOCKI",
              voters: 368
            },
          ],
          "EP SOUROU NANAYE / A": [
            {
              station: "DJAMBAKI",
              voters: 354
            },
            {
              station: "KOSSEL-IYAM",
              voters: 354
            },
            {
              station: "NARO",
              voters: 354
            },
            {
              station: "NDARAM",
              voters: 354
            },
            {
              station: "LIMAN",
              voters: 354
            },
            {
              station: "ABBASSI",
              voters: 354
            },
            {
              station: "NGOURORE",
              voters: 354
            },
            {
              station: "SOUROU",
              voters: 708
            },
            {
              station: "NANAYE",
              voters: 354
            },
            {
              station: "NDAYE",
              voters: 354
            },
            {
              station: "YOU",
              voters: 600
            },
          ],
          "EP TAPARE / A": [
            {
              station: "ALKALI",
              voters: 339
            },
            {
              station: "TAPARE",
              voters: 339
            },
            {
              station: "DALEDJE",
              voters: 339
            },
          ],
          "EP TAPAWA / A": [
            {
              station: "TAPAWA",
              voters: 143
            },
          ],
          "EP YOU / A": [
            {
              station: "DOUM",
              voters: 246
            },
          ],
          "ESPL DJAOURO DJINI-BAITI / A": [
            {
              station: "DJINI-BAITI",
              voters: 283
            },
            {
              station: "TONGO",
              voters: 622
            },
            {
              station: "DJAMBOUTOU",
              voters: 283
            },
          ],
          "ESPL DJAOURO LOUGGUEREO / A": [
            {
              station: "KAINIDE",
              voters: 178
            },
            {
              station: "LOUGGUEREO",
              voters: 178
            },
            {
              station: "TCHEKAL",
              voters: 178
            },
          ],
          "ESPL DJAOURO NDJAOULI / A": [
            {
              station: "DJALINGO",
              voters: 280
            },
            {
              station: "MALLOUMRE",
              voters: 280
            },
            {
              station: "DJALLOU",
              voters: 819
            },
            {
              station: "NDJAOULI",
              voters: 560
            },
            {
              station: "NTANG",
              voters: 280
            },
          ],
          "ESPL MARCHE DJAMBOUTOU-ISSA / A": [
            {
              station: "BALDA",
              voters: 424
            },
            {
              station: "DJAMBOUTOU-ISSA",
              voters: 424
            },
            {
              station: "GOULOUM",
              voters: 424
            },
            {
              station: "LAINDE",
              voters: 620
            },
            {
              station: "TCHAKOUM",
              voters: 620
            },
            {
              station: "NDONSA",
              voters: 620
            },
            {
              station: "OURO",
              voters: 2096
            },
            {
              station: "MODIBO",
              voters: 424
            },
          ],
        },
        "GAROUA I": {
          "CRESAS / A": [
            {
              station: "CRESAS",
              voters: 653
            },
            {
              station: "PLATEAU",
              voters: 3698
            },
          ],
          "DISPENSAIRE SOUARI / A": [
            {
              station: "PADAMA",
              voters: 908
            },
          ],
          "ECOLE CATHO NKOLBIVES / A": [
            {
              station: "NKOLBIVES",
              voters: 3315
            },
            {
              station: "SARARE",
              voters: 3315
            },
            {
              station: "TCHEBOARE",
              voters: 3315
            },
            {
              station: "YELWA",
              voters: 3315
            },
          ],
          "ECOLE DE FAUNE / A": [
            {
              station: "BASE",
              voters: 1073
            },
            {
              station: "AERIENNE",
              voters: 1073
            },
          ],
          "ECOLE DES AIDES SOIGNANTS / A": [
            {
              station: "GARAGE",
              voters: 3573
            },
            {
              station: "GADJI",
              voters: 3573
            },
            {
              station: "SOWETO",
              voters: 3573
            },
          ],
          "ECOLE PROTESTANTE / A": [
            {
              station: "BAMILEKE",
              voters: 2194
            },
            {
              station: "MEHIRI",
              voters: 2194
            },
            {
              station: "PRISON",
              voters: 2424
            },
            {
              station: "CENTRALE",
              voters: 2424
            },
            {
              station: "TOUPOURIRE",
              voters: 2194
            },
          ],
          "EM ANGLOPHONE / A": [
            {
              station: "HAOUSSARE",
              voters: 2056
            },
          ],
          "EM GENDARMERIE / A": [
            {
              station: "GENDARMERIE",
              voters: 964
            },
          ],
          "EM OURO HOURSO / A": [
            {
              station: "CAMP",
              voters: 8584
            },
            {
              station: "CHINOIS",
              voters: 8584
            },
            {
              station: "OURO",
              voters: 34800
            },
            {
              station: "HOURSO",
              voters: 24808
            },
            {
              station: "III",
              voters: 10876
            },
          ],
          "EM PLATEAU / A": [
            {
              station: "ISIC",
              voters: 936
            },
          ],
          "EP DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 10716
            },
          ],
          "EP DJOUMASSI / A": [
            {
              station: "CONGORE",
              voters: 582
            },
            {
              station: "DJOUMASSI",
              voters: 582
            },
            {
              station: "KONKOLRE",
              voters: 582
            },
          ],
          "EP GAROUA WINDE / A": [
            {
              station: "DJADJE",
              voters: 661
            },
            {
              station: "GAROUA",
              voters: 892
            },
            {
              station: "WINDE",
              voters: 892
            },
            {
              station: "SOUKI",
              voters: 661
            },
            {
              station: "WAFANGO",
              voters: 1818
            },
          ],
          "EP GR I / A": [
            {
              station: "FOULBERE",
              voters: 10722
            },
          ],
          "EP HODANGO / A": [
            {
              station: "GOFAME",
              voters: 1295
            },
            {
              station: "HODANGO",
              voters: 2314
            },
            {
              station: "MAIHARE",
              voters: 1157
            },
            {
              station: "SOUBANGO",
              voters: 1157
            },
            {
              station: "MAGADJI",
              voters: 1157
            },
            {
              station: "WOURO",
              voters: 2314
            },
            {
              station: "AMIRO",
              voters: 1157
            },
            {
              station: "HASSOUMI",
              voters: 1157
            },
          ],
          "EP LOMODOU / A": [
            {
              station: "LOMODOU",
              voters: 412
            },
          ],
          "EP OURO HOURSO I / A": [
            {
              station: "CARREFOUR",
              voters: 1698
            },
            {
              station: "SODECOTON",
              voters: 1698
            },
          ],
          "EP OURO KANADI / A": [
            {
              station: "BATMANE",
              voters: 9184
            },
            {
              station: "KANADI",
              voters: 12364
            },
            {
              station: "MOSQUEE",
              voters: 3242
            },
            {
              station: "WAKILI",
              voters: 3242
            },
          ],
          "EP OURO LABBO / A": [
            {
              station: "LABBO",
              voters: 2242
            },
          ],
          "EP SABONGARI / A": [
            {
              station: "LOWEL",
              voters: 3875
            },
            {
              station: "KESSOUM",
              voters: 3875
            },
            {
              station: "TALAKA",
              voters: 3875
            },
            {
              station: "SABONGARI",
              voters: 3875
            },
          ],
          "EP SOUARI / A": [
            {
              station: "NGAOUNDERERE",
              voters: 3594
            },
            {
              station: "SOUARI",
              voters: 3594
            },
          ],
          "LYCEE KOLLERE / A": [
            {
              station: "KOLLERE",
              voters: 2828
            },
          ],
        },
        "GAROUA II": {
          "CENTRE CULTUREL LOPERE / A": [
            {
              station: "BERE",
              voters: 3365
            },
            {
              station: "FOULBERE",
              voters: 14736
            },
            {
              station: "KILOMETRE",
              voters: 3365
            },
            {
              station: "CINQ",
              voters: 3365
            },
            {
              station: "LOPERE",
              voters: 9298
            },
          ],
          "CES BILINGUE NGALBIDJE / A": [
            {
              station: "MBOUM",
              voters: 1943
            },
            {
              station: "AVIATION",
              voters: 1943
            },
          ],
          "CETIC NASSARAO / A": [
            {
              station: "OURO",
              voters: 620
            },
            {
              station: "ALHADJI",
              voters: 620
            },
            {
              station: "OURO-KESSOUM",
              voters: 620
            },
            {
              station: "WANTOUMI",
              voters: 620
            },
          ],
          "DEL ENS SEC / A": [
            {
              station: "CAMP-SIC",
              voters: 8307
            },
            {
              station: "ROUMDE",
              voters: 16285
            },
            {
              station: "-ADJIA",
              voters: 8307
            },
          ],
          "ECOLE CATHOLIQ ST PIERRE / A": [
            {
              station: "DEMSARE",
              voters: 2239
            },
            {
              station: "NASSARAO",
              voters: 8043
            },
            {
              station: "REYRE",
              voters: 2239
            },
          ],
          "ECOLE FRANCO ARABE AL-ANSAR / A": [
            {
              station: "MADAGASCAR",
              voters: 267
            },
          ],
          "ECOLE ISLAMIQ GDE MOSQUEE / A": [
            {
              station: "TAKASKO",
              voters: 5091
            },
          ],
          "ECOLE ISLAMIQUE SABONGARI / A": [
            {
              station: "SABONGARI",
              voters: 1792
            },
          ],
          "EM BASCHEORE / A": [
            {
              station: "BASCHEORE",
              voters: 1853
            },
            {
              station: "GABDIRE",
              voters: 7682
            },
          ],
          "EP ANNEXE POUMPOUMRE / A": [
            {
              station: "POUMPOUMRE",
              voters: 7256
            },
          ],
          "EP BENOUE / A": [
            {
              station: "LIDDIRE",
              voters: 3886
            },
          ],
          "EP DOUALARE / A": [
            {
              station: "DOUALARE",
              voters: 2065
            },
          ],
          "EP GNAKIRA / A": [
            {
              station: "GNAKIRA",
              voters: 228
            },
            {
              station: "MBERI",
              voters: 228
            },
            {
              station: "FOULBE",
              voters: 228
            },
            {
              station: "WAFANGO",
              voters: 228
            },
          ],
          "EP LAINDE DANEYEL / A": [
            {
              station: "LAINDE-DANEYEL",
              voters: 1379
            },
          ],
          "EP LAINDE GR I / A": [
            {
              station: "BAH",
              voters: 6646
            },
          ],
          "EP MBILGA / A": [
            {
              station: "MBILGA",
              voters: 295
            },
          ],
          "EP NASSARAO / A": [
            {
              station: "MBOCKI",
              voters: 2902
            },
            {
              station: "NGOURORE",
              voters: 3004
            },
          ],
          "EP OURO LAWANE / A": [
            {
              station: "OURO-LAWANE",
              voters: 2091
            },
          ],
          "EP OURO NGALBIDJE / A": [
            {
              station: "OURO-NGALBIDJE",
              voters: 5240
            },
          ],
          "EP POUKOULOUKOU / A": [
            {
              station: "DAR-EL-SALAM",
              voters: 2363
            },
            {
              station: "POUKOULOUKOU",
              voters: 2363
            },
          ],
          "EP POUMPOUMRE/PETIT PARIS / A": [
            {
              station: "BOULAIBBIRE",
              voters: 1237
            },
            {
              station: "TCHAKA",
              voters: 4836
            },
            {
              station: "MIDARI",
              voters: 4836
            },
          ],
          "EP ROUMDE ADJIA / A": [
            {
              station: "ADJIA",
              voters: 7978
            },
          ],
          "EP TONGO / A": [
            {
              station: "TONGO",
              voters: 247
            },
          ],
          "GARE ROUTIERE LAINDE / A": [
            {
              station: "GADA",
              voters: 714
            },
            {
              station: "MAYEL",
              voters: 714
            },
            {
              station: "LAINDE",
              voters: 7929
            },
            {
              station: "INTER",
              voters: 1426
            },
            {
              station: "GARE",
              voters: 1426
            },
          ],
          "LYCEE TECHNIQUE BIBEMIRE / A": [
            {
              station: "BAINAWARE",
              voters: 2138
            },
            {
              station: "BIBEMIRE",
              voters: 20122
            },
            {
              station: "III",
              voters: 3884
            },
          ],
          "LYCLAMOGA / A": [
            {
              station: "MAROUARE",
              voters: 19009
            },
          ],
        },
        "GAROUA III": {
          "EP BABLA CENTRE / A": [
            {
              station: "CENTRE",
              voters: 872
            },
            {
              station: "LAKARE",
              voters: 872
            },
            {
              station: "BIGDI",
              voters: 1171
            },
            {
              station: "WINDE",
              voters: 1171
            },
            {
              station: "DOULI",
              voters: 1171
            },
          ],
          "EP BABLA ISRAEL / A": [
            {
              station: "ISRAEL",
              voters: 494
            },
          ],
          "EP BADOUDI / A": [
            {
              station: "BADOUDI",
              voters: 1024
            },
            {
              station: "OURO-MAIDADI",
              voters: 1024
            },
            {
              station: "TAPARE",
              voters: 1024
            },
            {
              station: "TONDIRE",
              voters: 1024
            },
          ],
          "EP BIBOL / A": [
            {
              station: "MAFFA",
              voters: 506
            },
            {
              station: "YIDE",
              voters: 506
            },
          ],
          "EP BOCKLE / A": [
            {
              station: "BOCKLE",
              voters: 2307
            },
            {
              station: "BILONDE",
              voters: 2497
            },
          ],
          "EP DENGUI / A": [
            {
              station: "BALANE",
              voters: 798
            },
            {
              station: "DENGUI",
              voters: 798
            },
            {
              station: "LAINGUEL",
              voters: 798
            },
          ],
          "EP DJALINGO / A": [
            {
              station: "BAINAWARE",
              voters: 3146
            },
            {
              station: "DJALINGO",
              voters: 2304
            },
            {
              station: "GUIZIGARE",
              voters: 1982
            },
          ],
          "EP DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 325
            },
            {
              station: "LOUGOUMI",
              voters: 325
            },
          ],
          "EP HAIGA-DJEWA / A": [
            {
              station: "HAIGA-DJEWA",
              voters: 455
            },
          ],
          "EP HARANDE-LOBI / A": [
            {
              station: "HARANDE",
              voters: 350
            },
            {
              station: "HARANDE-LOBI",
              voters: 350
            },
            {
              station: "KATCHATCHIA",
              voters: 350
            },
          ],
          "EP KAWTAL / A": [
            {
              station: "BIBOL",
              voters: 1030
            },
            {
              station: "KAWTAL",
              voters: 524
            },
            {
              station: "LOPE",
              voters: 524
            },
          ],
          "EP KISMATARI / A": [
            {
              station: "KISMATARI",
              voters: 581
            },
            {
              station: "NASSARAO-HAOUTA",
              voters: 581
            },
          ],
          "EP MAFA-KILDA / A": [
            {
              station: "MAFA-KILDA",
              voters: 878
            },
            {
              station: "SABEWA",
              voters: 878
            },
          ],
          "EP MAISSANOU / A": [
            {
              station: "MAISSANOU",
              voters: 298
            },
          ],
          "EP MAYO-DADI / A": [
            {
              station: "MAYO",
              voters: 2194
            },
            {
              station: "DADI",
              voters: 1164
            },
            {
              station: "LAINDE",
              voters: 4097
            },
            {
              station: "PODOKO",
              voters: 1164
            },
            {
              station: "LAMERE",
              voters: 1164
            },
            {
              station: "MAYO-DADI",
              voters: 1164
            },
            {
              station: "NGOBARA",
              voters: 1164
            },
            {
              station: "TCHIKITO",
              voters: 1164
            },
          ],
          "EP NDIAM-BABA / A": [
            {
              station: "BABLA",
              voters: 2437
            },
            {
              station: "BANANA",
              voters: 199
            },
            {
              station: "DJALINGO-TCHOUMPA",
              voters: 413
            },
            {
              station: "KAE",
              voters: 413
            },
            {
              station: "DOUTTE",
              voters: 413
            },
            {
              station: "NDIAM-BABA",
              voters: 199
            },
          ],
          "EP NORMANDI / A": [
            {
              station: "BAKASSI",
              voters: 928
            },
            {
              station: "NORMANDI",
              voters: 422
            },
          ],
          "EP PERMA / A": [
            {
              station: "PERMA",
              voters: 616
            },
            {
              station: "TCHOUMPA",
              voters: 616
            },
          ],
          "EP PITOAYEL / A": [
            {
              station: "FALIRE",
              voters: 436
            },
            {
              station: "BODINGA",
              voters: 436
            },
            {
              station: "PITOAYEL",
              voters: 436
            },
          ],
          "EP SANGUERE NGAOUNDERE / A": [
            {
              station: "CARREFOUR",
              voters: 322
            },
            {
              station: "SANGUERE",
              voters: 322
            },
            {
              station: "NGAOUNDERE",
              voters: 322
            },
          ],
          "EP SANGUERE PAUL / A": [
            {
              station: "CAMP",
              voters: 2672
            },
            {
              station: "IRAD",
              voters: 1175
            },
            {
              station: "LANAVET",
              voters: 1497
            },
            {
              station: "SANGUERE-LANAVET",
              voters: 1175
            },
            {
              station: "SANGUERE-PAUL",
              voters: 1175
            },
          ],
          "EP SANGUERE-NGAL / A": [
            {
              station: "MAFA",
              voters: 1027
            },
            {
              station: "ECOLE",
              voters: 1027
            },
            {
              station: "MANANG",
              voters: 1027
            },
            {
              station: "SANGUERE-MANANG",
              voters: 1138
            },
            {
              station: "SANGUERE-NDJOI",
              voters: 1027
            },
            {
              station: "SANGUERE-NGAL",
              voters: 1027
            },
          ],
          "EP SARKI-YAYI / A": [
            {
              station: "SARKI-YAYI",
              voters: 409
            },
          ],
          "EP WINDE DOULI / A": [
            {
              station: "BOCKI",
              voters: 299
            },
            {
              station: "DJABE",
              voters: 299
            },
          ],
          "ESPL DJAOURO OURO TCHAKA / A": [
            {
              station: "OURO",
              voters: 846
            },
            {
              station: "TCHAKA",
              voters: 248
            },
          ],
        },
        "GASCHIGA": {
          "BUREAU ELEVAGE / A": [
            {
              station: "BOGGARE",
              voters: 895
            },
            {
              station: "BOISSIRE",
              voters: 895
            },
          ],
          "EM GASCHIGA / A": [
            {
              station: "FOULBERE",
              voters: 1823
            },
            {
              station: "HAOUSSARE",
              voters: 820
            },
          ],
          "EM LAKARE / A": [
            {
              station: "LAKARE",
              voters: 259
            },
          ],
          "EP BAMANGA / A": [
            {
              station: "BAMANGA",
              voters: 1096
            },
            {
              station: "DATCHIEL",
              voters: 1096
            },
            {
              station: "FESSANGO",
              voters: 1548
            },
            {
              station: "OURO",
              voters: 8770
            },
            {
              station: "BIYA",
              voters: 1266
            },
            {
              station: "SOUARE",
              voters: 1096
            },
          ],
          "EP BILINGUE / A": [
            {
              station: "BADESSI",
              voters: 178
            },
            {
              station: "DABARE",
              voters: 167
            },
            {
              station: "MBOUM",
              voters: 167
            },
            {
              station: "MORA",
              voters: 167
            },
          ],
          "EP BOGARE / A": [
            {
              station: "SERVICES",
              voters: 335
            },
            {
              station: "PUBLICS/",
              voters: 335
            },
            {
              station: "PARA",
              voters: 335
            },
            {
              station: "PUBLICS",
              voters: 335
            },
          ],
          "EP DADJAM / A": [
            {
              station: "DADJAM",
              voters: 185
            },
          ],
          "EP DEMSA / A": [
            {
              station: "DEMSA",
              voters: 817
            },
          ],
          "EP DJIRLADJE / A": [
            {
              station: "DJIRLADJE",
              voters: 300
            },
            {
              station: "MAYEL",
              voters: 469
            },
            {
              station: "DJARENDI",
              voters: 469
            },
          ],
          "EP GASCHIGA / A": [
            {
              station: "GUIZIGARE",
              voters: 1642
            },
            {
              station: "KOLLERE",
              voters: 3330
            },
            {
              station: "MBAROUMA",
              voters: 1003
            },
            {
              station: "TCHIFFEL",
              voters: 1369
            },
          ],
          "EP KOLLERE / A": [
            {
              station: "GONDJIGUI",
              voters: 658
            },
            {
              station: "LAINDE",
              voters: 1183
            },
            {
              station: "LOUGGA",
              voters: 658
            },
            {
              station: "HORI",
              voters: 658
            },
            {
              station: "BOCKI",
              voters: 658
            },
          ],
          "EP KOSSOUMO / A": [
            {
              station: "NIBANGO",
              voters: 486
            },
            {
              station: "BOUBA",
              voters: 486
            },
            {
              station: "GNAKI",
              voters: 486
            },
          ],
          "EP MAYAMI / A": [
            {
              station: "MAYAMI",
              voters: 825
            },
          ],
          "EP MBILLA / A": [
            {
              station: "DJAMBOUTOU",
              voters: 373
            },
            {
              station: "SADOU",
              voters: 373
            },
            {
              station: "MBILLA",
              voters: 373
            },
            {
              station: "TIRCI",
              voters: 628
            },
          ],
          "EP OURO HARISSOU / A": [
            {
              station: "BOBBO",
              voters: 447
            },
            {
              station: "ININE",
              voters: 570
            },
            {
              station: "OURO-",
              voters: 447
            },
            {
              station: "HARISSOU",
              voters: 447
            },
          ],
          "EP OURO MALLOUM / A": [
            {
              station: "MALLOUM",
              voters: 654
            },
          ],
          "EP OURO TCHAKA / A": [
            {
              station: "TCHAKA",
              voters: 494
            },
          ],
          "EP PAKETE / A": [
            {
              station: "HOSSERE",
              voters: 759
            },
            {
              station: "FARAOU",
              voters: 759
            },
            {
              station: "PAKETE",
              voters: 520
            },
          ],
          "EP POMLA HAMAYERO / A": [
            {
              station: "ALIM",
              voters: 370
            },
            {
              station: "POMLA-HAMAYERO",
              voters: 370
            },
          ],
          "EP POMLA MANGA / A": [
            {
              station: "POMLA-MANGA",
              voters: 918
            },
          ],
          "EP TAPARE / A": [
            {
              station: "KESSOURE",
              voters: 1064
            },
            {
              station: "MAYO",
              voters: 1479
            },
            {
              station: "BORORO",
              voters: 578
            },
            {
              station: "NGALABA",
              voters: 578
            },
            {
              station: "TAPARE",
              voters: 578
            },
          ],
          "EP TCHIFFEL / A": [
            {
              station: "MOUFOU",
              voters: 366
            },
          ],
          "EP TONTONGO / A": [
            {
              station: "KOUBAWOL",
              voters: 641
            },
            {
              station: "LOSSI",
              voters: 641
            },
            {
              station: "TONTONGO",
              voters: 641
            },
          ],
          "EP TORO / A": [
            {
              station: "BOUTALI",
              voters: 260
            },
            {
              station: "TORO",
              voters: 260
            },
            {
              station: "ECOLE",
              voters: 260
            },
            {
              station: "TORO-CENTRE",
              voters: 349
            },
          ],
          "ESPL CHEF BARKEHI / A": [
            {
              station: "BARKEHI",
              voters: 161
            },
          ],
          "ESPL CHEF BASCHEORE / A": [
            {
              station: "BAOU",
              voters: 726
            },
            {
              station: "BASCHEORE",
              voters: 567
            },
          ],
          "ESPL CHEF BOLKI / A": [
            {
              station: "BOLKI",
              voters: 334
            },
          ],
          "ESPL CHEF LONDEROU / A": [
            {
              station: "LONDEROU",
              voters: 191
            },
          ],
          "ESPL CHEF MAYO DOUMSI / A": [
            {
              station: "MAYO-DOUMSI",
              voters: 786
            },
            {
              station: "DALAN",
              voters: 786
            },
            {
              station: "DJAMAN",
              voters: 786
            },
          ],
          "ESPL CHEF MAYO SAHEL / A": [
            {
              station: "MAYO-SAHEL",
              voters: 452
            },
          ],
          "ESPL CHEF NGOUTCHOUMI / A": [
            {
              station: "KATAKO",
              voters: 168
            },
            {
              station: "NGOUTCHOUMI",
              voters: 168
            },
          ],
          "ESPL CHEF OURO GADJI / A": [
            {
              station: "GADJI",
              voters: 260
            },
          ],
          "ESPL CHEF OURO IYA / A": [
            {
              station: "IYA",
              voters: 258
            },
          ],
          "ESPL CHEF SONDJILO / A": [
            {
              station: "LADAN",
              voters: 283
            },
            {
              station: "SONDJILO",
              voters: 283
            },
          ],
          "ESPL CHEF YARMI / A": [
            {
              station: "ALHADJI",
              voters: 362
            },
            {
              station: "BOBBOYE",
              voters: 362
            },
            {
              station: "DJAH",
              voters: 362
            },
            {
              station: "YARMI",
              voters: 620
            },
          ],
        },
        "LAGDO": {
          "EP AMRASSA / A": [
            {
              station: "BAINAWA",
              voters: 779
            },
            {
              station: "BAME",
              voters: 11294
            },
            {
              station: "DJOLA",
              voters: 779
            },
            {
              station: "LAINDE",
              voters: 1369
            },
            {
              station: "KAPSIKI",
              voters: 3148
            },
            {
              station: "SANGUERE",
              voters: 779
            },
          ],
          "EP BADANKALI / A": [
            {
              station: "BADANKALI",
              voters: 2167
            },
            {
              station: "CAMP",
              voters: 5544
            },
            {
              station: "CHANTIER",
              voters: 5179
            },
            {
              station: "CHINOIS",
              voters: 5179
            },
            {
              station: "KOKRA",
              voters: 2167
            },
            {
              station: "SOULEDE",
              voters: 2167
            },
          ],
          "EP BAKONA / A": [
            {
              station: "BAKONA",
              voters: 889
            },
          ],
          "EP BALDA LORI LOKORO / A": [
            {
              station: "BALDA",
              voters: 333
            },
            {
              station: "LORI",
              voters: 333
            },
            {
              station: "LOKORO",
              voters: 333
            },
            {
              station: "MALOMBALI",
              voters: 333
            },
            {
              station: "MADA",
              voters: 561
            },
            {
              station: "YIDE",
              voters: 561
            },
            {
              station: "SAMO",
              voters: 1122
            },
            {
              station: "MAFA",
              voters: 561
            },
          ],
          "EP BAME / A": [
            {
              station: "SABONGARI",
              voters: 3099
            },
            {
              station: "TOUBORO",
              voters: 2252
            },
          ],
          "EP BESSOUM / A": [
            {
              station: "BESSOUM",
              voters: 632
            },
            {
              station: "FOULAYE",
              voters: 837
            },
          ],
          "EP BILLINGUE LAGDO / A": [
            {
              station: "BOKASSA",
              voters: 2012
            },
            {
              station: "MAFARE",
              voters: 2441
            },
            {
              station: "PITOARE",
              voters: 2012
            },
          ],
          "EP BOULEL / A": [
            {
              station: "BOULEL",
              voters: 1865
            },
          ],
          "EP BOUMEDJE / A": [
            {
              station: "BOUMEDJE",
              voters: 2130
            },
          ],
          "EP BOURKINA / A": [
            {
              station: "BOURKINA",
              voters: 429
            },
            {
              station: "GUERE",
              voters: 664
            },
          ],
          "EP CAMP PROJET / A": [
            {
              station: "PROJET",
              voters: 365
            },
            {
              station: "WINDE-",
              voters: 365
            },
            {
              station: "GADOUROU",
              voters: 365
            },
          ],
          "EP CARREFOUR NA'ARI / A": [
            {
              station: "NA'ARI",
              voters: 1802
            },
          ],
          "EP CARREFOUR POLI / A": [
            {
              station: "POLI",
              voters: 362
            },
            {
              station: "MAMTIBA",
              voters: 362
            },
          ],
          "EP DINGALE / A": [
            {
              station: "DINGALE",
              voters: 785
            },
            {
              station: "KESME",
              voters: 785
            },
          ],
          "EP DJALINGO KAPSIKI / A": [
            {
              station: "DJALINGO",
              voters: 638
            },
          ],
          "EP DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 504
            },
          ],
          "EP DJANGA / A": [
            {
              station: "BICHARI",
              voters: 520
            },
            {
              station: "DJANGA",
              voters: 520
            },
          ],
          "EP DJAOURO DOURI / A": [
            {
              station: "DOURI",
              voters: 922
            },
          ],
          "EP DJOULOL BOCKI / A": [
            {
              station: "DANBI",
              voters: 851
            },
            {
              station: "DJOULOL",
              voters: 851
            },
            {
              station: "BOKI",
              voters: 851
            },
            {
              station: "HARANDE",
              voters: 851
            },
            {
              station: "LABBO",
              voters: 2075
            },
            {
              station: "OURO-YANGA",
              voters: 851
            },
            {
              station: "YAMEDA",
              voters: 851
            },
          ],
          "EP DO- BOULEL V / A": [
            {
              station: "NOKKA",
              voters: 263
            },
          ],
          "EP GADJA GADJA / A": [
            {
              station: "GADJA",
              voters: 744
            },
            {
              station: "NOUVRI",
              voters: 771
            },
            {
              station: "TAMBA",
              voters: 1890
            },
            {
              station: "GOUDRON",
              voters: 771
            },
            {
              station: "LADDE",
              voters: 1173
            },
          ],
          "EP GOUNA / A": [
            {
              station: "GADJI",
              voters: 3230
            },
            {
              station: "SALA",
              voters: 3230
            },
            {
              station: "GOUDI",
              voters: 3230
            },
            {
              station: "TOUPOURIRE",
              voters: 3414
            },
          ],
          "EP GOUNA GUIZIGA / A": [
            {
              station: "GUIZIGA",
              voters: 479
            },
          ],
          "EP GOUNOUGOU / A": [
            {
              station: "BANTARE",
              voters: 1363
            },
            {
              station: "CARREFOUR",
              voters: 3115
            },
            {
              station: "RIAO",
              voters: 1951
            },
            {
              station: "COL",
              voters: 1363
            },
            {
              station: "EST",
              voters: 1363
            },
            {
              station: "DOKA",
              voters: 1937
            },
            {
              station: "GOUNOUGOU",
              voters: 1363
            },
            {
              station: "LAMERE",
              voters: 1363
            },
          ],
          "EP HOULA II ZERA / A": [
            {
              station: "ZERA",
              voters: 398
            },
          ],
          "EP KAIWAN / A": [
            {
              station: "KAIWAN",
              voters: 473
            },
          ],
          "EP KATE / A": [
            {
              station: "DJABAMA",
              voters: 1273
            },
            {
              station: "DJARAKO",
              voters: 1273
            },
            {
              station: "KATE",
              voters: 1273
            },
            {
              station: "NIGERIARE",
              voters: 1273
            },
          ],
          "EP LAGDO GROUPE I / A": [
            {
              station: "CITE",
              voters: 5213
            },
            {
              station: "'A'",
              voters: 5213
            },
            {
              station: "AES/SONEL",
              voters: 5213
            },
            {
              station: "DJIPPORDE",
              voters: 7820
            },
            {
              station: "DOUALARE",
              voters: 1031
            },
            {
              station: "DYNANIQUE",
              voters: 1031
            },
            {
              station: "QTIER",
              voters: 1031
            },
            {
              station: "ADMINISTRATIF",
              voters: 1031
            },
            {
              station: "LAGON",
              voters: 1031
            },
            {
              station: "BLEU",
              voters: 1031
            },
            {
              station: "ARABE",
              voters: 1031
            },
            {
              station: "LAMORDE",
              voters: 1031
            },
            {
              station: "MAROUARE",
              voters: 10427
            },
            {
              station: "MOUSGOUM",
              voters: 1031
            },
          ],
          "EP LAGDO GROUPE II / A": [
            {
              station: "CARRIERE",
              voters: 3012
            },
            {
              station: "MOUFOURE",
              voters: 3012
            },
            {
              station: "DOLE",
              voters: 3718
            },
            {
              station: "VENEZ",
              voters: 3012
            },
            {
              station: "VOIR",
              voters: 3012
            },
          ],
          "EP LAINDE LAGDO / A": [
            {
              station: "MADAGALIRE",
              voters: 291
            },
            {
              station: "OURO-BELDOUM",
              voters: 291
            },
          ],
          "EP LAINDE TCHITTA / A": [
            {
              station: "LAINDE-TCHITTA",
              voters: 407
            },
          ],
          "EP LOUGOL BAME / A": [
            {
              station: "LOUGOL",
              voters: 684
            },
            {
              station: "YOLDEO",
              voters: 684
            },
          ],
          "EP MADABA GOUNA / A": [
            {
              station: "MADABA",
              voters: 271
            },
            {
              station: "PANA",
              voters: 271
            },
            {
              station: "MATAL",
              voters: 271
            },
          ],
          "EP MADAGASCAR II / A": [
            {
              station: "DOUNGOUSS",
              voters: 416
            },
            {
              station: "GARBA",
              voters: 416
            },
            {
              station: "KAOUNA",
              voters: 483
            },
            {
              station: "MADAGASCAR",
              voters: 551
            },
            {
              station: "OURO-KALDJIA",
              voters: 416
            },
          ],
          "EP MADAGASCAR-GOUNA / A": [
            {
              station: "MADAGASCAR-GOUNA",
              voters: 22
            },
          ],
          "EP MADAGASKAR I / A": [
            {
              station: "MADAGASKAR",
              voters: 202
            },
          ],
          "EP MADJADOU / A": [
            {
              station: "MADJADOU",
              voters: 817
            },
          ],
          "EP MAYO BOCKI NA'ARI / A": [
            {
              station: "MAYO-BOCKI",
              voters: 689
            },
          ],
          "EP MAYO-BOUCKI / A": [
            {
              station: "BAH-ADJI",
              voters: 2018
            },
            {
              station: "MAYO",
              voters: 5167
            },
            {
              station: "BOUCKI",
              voters: 4049
            },
            {
              station: "MAYO-BOUCKI",
              voters: 2018
            },
            {
              station: "GOUNA",
              voters: 12214
            },
          ],
          "EP MAYO-MBAY GUERE / A": [
            {
              station: "MAYO-MBAY",
              voters: 10
            },
          ],
          "EP MBELLA GOUNA / A": [
            {
              station: "MBELLA",
              voters: 536
            },
          ],
          "EP MBENGUI / A": [
            {
              station: "FIRA",
              voters: 548
            },
            {
              station: "BAKA",
              voters: 861
            },
            {
              station: "MBENGUI",
              voters: 548
            },
          ],
          "EP NAPANLA / A": [
            {
              station: "NAPANLA",
              voters: 389
            },
          ],
          "EP NELBI / A": [
            {
              station: "NELBI",
              voters: 294
            },
          ],
          "EP OURO BARRIERE / A": [
            {
              station: "DOMAYO",
              voters: 583
            },
            {
              station: "BARRIERE",
              voters: 583
            },
            {
              station: "ZAWADA",
              voters: 583
            },
          ],
          "EP OURO BOCKI / A": [
            {
              station: "KATCHALA",
              voters: 324
            },
            {
              station: "BOUTE",
              voters: 324
            },
            {
              station: "BOCKI",
              voters: 324
            },
            {
              station: "DAGUEDJA",
              voters: 324
            },
          ],
          "EP OURO BOGNO / A": [
            {
              station: "MILIAGAI",
              voters: 527
            },
            {
              station: "WOURO",
              voters: 527
            },
            {
              station: "BOGNO",
              voters: 527
            },
          ],
          "EP OURO MALLOUM / A": [
            {
              station: "MALLOUM",
              voters: 376
            },
            {
              station: "SOUBAGO",
              voters: 376
            },
          ],
          "EP OURO-ANDRE / A": [
            {
              station: "ANDRE",
              voters: 633
            },
          ],
          "EP OURO-BOBOA / A": [
            {
              station: "BADJIDDA",
              voters: 847
            },
            {
              station: "LABAKRI",
              voters: 1015
            },
            {
              station: "BASSI",
              voters: 1015
            },
            {
              station: "BOBOA",
              voters: 847
            },
            {
              station: "TCHOUFFI",
              voters: 1015
            },
            {
              station: "OURO-DONKA",
              voters: 847
            },
            {
              station: "SIRLAWE",
              voters: 2259
            },
            {
              station: "TCHAKARE",
              voters: 847
            },
          ],
          "EP OURO-DJIDDA / A": [
            {
              station: "OUGANDA",
              voters: 425
            },
            {
              station: "OURO-DJIDDA",
              voters: 425
            },
          ],
          "EP OURO-DOUKOUDJE / A": [
            {
              station: "LABARE",
              voters: 1116
            },
            {
              station: "DOUKOUDJE",
              voters: 1116
            },
          ],
          "EP OURO-KESSOUM LAGDO / A": [
            {
              station: "ARDO",
              voters: 2314
            },
            {
              station: "KABIROU",
              voters: 2314
            },
            {
              station: "DJAOURO-SOUDI",
              voters: 2314
            },
            {
              station: "KONTIP",
              voters: 2475
            },
            {
              station: "OURO",
              voters: 37198
            },
            {
              station: "KESSOUM",
              voters: 19326
            },
            {
              station: "BOBI",
              voters: 5536
            },
            {
              station: "MADALAM",
              voters: 2314
            },
            {
              station: "LAGDO",
              voters: 4593
            },
          ],
          "EP OURO-LABBO III / A": [
            {
              station: "III",
              voters: 619
            },
          ],
          "EP OURO-TCHAIDO / A": [
            {
              station: "MABO",
              voters: 706
            },
            {
              station: "OURO-TCHAIDO",
              voters: 706
            },
            {
              station: "SAMERE",
              voters: 706
            },
          ],
          "EP OURO-YOTTOU / A": [
            {
              station: "OURO-YOTTOU",
              voters: 214
            },
          ],
          "EP RABINGHA / A": [
            {
              station: "BANANA",
              voters: 1731
            },
            {
              station: "DJABA",
              voters: 1731
            },
            {
              station: "RABINGA",
              voters: 1731
            },
            {
              station: "MANAWASSI",
              voters: 1731
            },
            {
              station: "MAROURE",
              voters: 1731
            },
            {
              station: "MOUNDANG",
              voters: 1731
            },
            {
              station: "TOUPOURI",
              voters: 1731
            },
          ],
          "EP TONGO / A": [
            {
              station: "TONGO",
              voters: 2604
            },
          ],
          "ESPL CHEF BADJAOULE / A": [
            {
              station: "BADJAOULE",
              voters: 586
            },
            {
              station: "CENTRE",
              voters: 1128
            },
          ],
          "ESPL CHEF BADJAOULE MBOUM / A": [
            {
              station: "BAJAOLE",
              voters: 265
            },
            {
              station: "MBOUM",
              voters: 265
            },
          ],
          "ESPL CHEF DOULOUMI SANDA / A": [
            {
              station: "DOULIMI",
              voters: 443
            },
            {
              station: "SANDA",
              voters: 443
            },
          ],
          "ESPL CHEF GARWAWO / A": [
            {
              station: "GARWAWO",
              voters: 179
            },
          ],
          "ESPL CHEF KEBI / A": [
            {
              station: "KEBI",
              voters: 153
            },
          ],
          "ESPL CHEF KOUROUNGOU / A": [
            {
              station: "KOUROUNGOU",
              voters: 179
            },
          ],
          "ESPL CHEF LOUGA BACHI / B": [
            {
              station: "LEGUI",
              voters: 80
            },
            {
              station: "LOUGA",
              voters: 80
            },
            {
              station: "BACHI",
              voters: 80
            },
            {
              station: "PIKBA",
              voters: 348
            },
            {
              station: "HOSSERE",
              voters: 348
            },
          ],
          "ESPL CHEF MADJALISSA / A": [
            {
              station: "MADJALISSA",
              voters: 297
            },
          ],
          "ESPL CHEF MAYO DJARENDI / A": [
            {
              station: "BAMSI",
              voters: 343
            },
            {
              station: "DJARENDI",
              voters: 343
            },
          ],
          "ESPL CHEF MAYO SEINI / A": [
            {
              station: "DJABE",
              voters: 814
            },
            {
              station: "DJAOURO",
              voters: 1154
            },
            {
              station: "ALIOUM",
              voters: 266
            },
            {
              station: "HANTA",
              voters: 266
            },
            {
              station: "OUSMAN",
              voters: 266
            },
            {
              station: "SEINI",
              voters: 266
            },
            {
              station: "BOUGOUDOUM",
              voters: 266
            },
            {
              station: "MALI",
              voters: 266
            },
          ],
          "ESPL CHEF MAYO-MBAY / A": [
            {
              station: "MBAY",
              voters: 778
            },
            {
              station: "MBALMAYO",
              voters: 335
            },
          ],
          "ESPL CHEF NASSARAO BOUMEDJE / A": [
            {
              station: "GNIEBE",
              voters: 860
            },
          ],
          "ESPL CHEF OURO DJARMA / A": [
            {
              station: "BAMERE",
              voters: 197
            },
            {
              station: "OURO-DJARMA",
              voters: 1014
            },
          ],
          "ESPL CHEF OURO MANDA / A": [
            {
              station: "DORE",
              voters: 905
            },
            {
              station: "MANDA",
              voters: 405
            },
          ],
          "ESPL CHEF RONGONDOM / A": [
            {
              station: "RONGONDOM",
              voters: 166
            },
          ],
          "ESPL CHEF SABOREY / A": [
            {
              station: "DJAORO",
              voters: 1972
            },
            {
              station: "DASSILI",
              voters: 218
            },
            {
              station: "LIFERI",
              voters: 316
            },
            {
              station: "SABOREY",
              voters: 218
            },
          ],
          "ESPL CHEF SORKERE / A": [
            {
              station: "SORKERE",
              voters: 126
            },
          ],
          "ESPL CHEF TOURA NOKKA / A": [
            {
              station: "DANHOU",
              voters: 483
            },
            {
              station: "TOULOUM",
              voters: 667
            },
            {
              station: "TOURA",
              voters: 562
            },
            {
              station: "NOCKA",
              voters: 299
            },
          ],
          "ESPL CHEF WOUBAO / A": [
            {
              station: "MADARE",
              voters: 360
            },
            {
              station: "MADOUMARE",
              voters: 360
            },
            {
              station: "WOUBAO",
              voters: 360
            },
          ],
          "ESPL CHEF YAGADI / A": [
            {
              station: "AGORMA",
              voters: 901
            },
            {
              station: "GUIRDE",
              voters: 901
            },
            {
              station: "KABAWA",
              voters: 901
            },
            {
              station: "YAGADI",
              voters: 901
            },
          ],
          "ESPL CHEFDO-BOULEL SAMUEL / A": [
            {
              station: "DJABOU",
              voters: 90
            },
            {
              station: "SAMUEL",
              voters: 90
            },
            {
              station: "MOUFOU",
              voters: 90
            },
          ],
          "ESPLANADE CHEF. NASSARAO BAME / A": [
            {
              station: "NASSARAO",
              voters: 563
            },
          ],
          "LYCEE RABINGHA / A": [
            {
              station: "BALANE",
              voters: 1354
            },
            {
              station: "RABINGHA",
              voters: 14071
            },
            {
              station: "DJOURDE",
              voters: 1354
            },
            {
              station: "LOUGERE",
              voters: 1354
            },
          ],
        },
        "MAYO-HOURNA": {
          "CETIC DE NAKONG / A": [
            {
              station: "WINDE",
              voters: 356
            },
            {
              station: "GALDIMA",
              voters: 209
            },
            {
              station: "ABBA",
              voters: 209
            },
          ],
          "E.P. DE TCHARATCHE GADA MAYO / A": [
            {
              station: "GADA",
              voters: 490
            },
          ],
          "EFA KODOGOU / A": [
            {
              station: "KODOGOU",
              voters: 359
            },
          ],
          "EP BANGLI / A": [
            {
              station: "BANGLI",
              voters: 579
            },
          ],
          "EP DJABAWA / A": [
            {
              station: "DJABAWA",
              voters: 287
            },
            {
              station: "DJILO",
              voters: 287
            },
          ],
          "EP GUERETE / A": [
            {
              station: "GUERETE",
              voters: 661
            },
          ],
          "EP GUIBDJOL / A": [
            {
              station: "GUIBDJOL",
              voters: 1180
            },
          ],
          "EP LOUGGUERE - MOUTE / A": [
            {
              station: "LOUGUERE",
              voters: 339
            },
            {
              station: "MOUTE",
              voters: 339
            },
          ],
          "EP MALAPE / A": [
            {
              station: "MALAPE",
              voters: 622
            },
          ],
          "EP MAYO NGABBOU / A": [
            {
              station: "MAYO",
              voters: 816
            },
            {
              station: "NGABBOU",
              voters: 326
            },
          ],
          "EP MBILASSI OURO-GARGA / A": [
            {
              station: "MBILLASSI",
              voters: 174
            },
            {
              station: "OURO-GARGA",
              voters: 174
            },
          ],
          "EP NAKONG / A": [
            {
              station: "NAKONG",
              voters: 1440
            },
          ],
          "EP NDAOU / A": [
            {
              station: "NDAOU",
              voters: 611
            },
          ],
          "EP OURO SALAMAN / A": [
            {
              station: "SALAMAN",
              voters: 91
            },
          ],
          "EP OURO-ARDO / A": [
            {
              station: "OURO-ARDO",
              voters: 674
            },
          ],
          "EP SABONGARI OURO GARGA / A": [
            {
              station: "SABONGARI",
              voters: 366
            },
            {
              station: "GARGA",
              voters: 366
            },
          ],
          "EP TAIPE / A": [
            {
              station: "TAIPE",
              voters: 314
            },
          ],
          "EP TAWOI / A": [
            {
              station: "TAWOI",
              voters: 556
            },
          ],
          "EP TCHARATCHE / A": [
            {
              station: "KESSOUM",
              voters: 2061
            },
            {
              station: "TCHARATCHE",
              voters: 1970
            },
          ],
          "ESPL CHEF BOUALO / A": [
            {
              station: "BAKASSI",
              voters: 1071
            },
            {
              station: "BOUALO",
              voters: 251
            },
            {
              station: "PATARA",
              voters: 911
            },
          ],
          "ESPL CHEF MBERE DJALINGO / A": [
            {
              station: "MBERE",
              voters: 320
            },
            {
              station: "DJALINGO",
              voters: 320
            },
          ],
          "ESPL CHEF NGAWA / A": [
            {
              station: "NGAWA",
              voters: 80
            },
          ],
          "ESPL CHEF OURO BOBBO / A": [
            {
              station: "DJAMTARI",
              voters: 55
            },
            {
              station: "MBOULMBOULDIRE",
              voters: 55
            },
          ],
          "ESPL CHEF OURO-MALLOUM / A": [
            {
              station: "DJOUMO",
              voters: 103
            },
            {
              station: "OURO-MALLOUM",
              voters: 103
            },
          ],
          "ESPL CHEF PADANG / A": [
            {
              station: "PADANG",
              voters: 83
            },
          ],
          "ESPL CHEF WAFANGO / A": [
            {
              station: "WAFANGO",
              voters: 141
            },
          ],
          "ESPL EP GOLOMBE / A": [
            {
              station: "GOLOMBE",
              voters: 96
            },
          ],
          "LYCEE DE BARNDAKE / A": [
            {
              station: "BARNDAKE",
              voters: 3492
            },
            {
              station: "HODANGO",
              voters: 1714
            },
            {
              station: "OURO",
              voters: 4249
            },
            {
              station: "SIDDIKI",
              voters: 1522
            },
          ],
        },
        "NGONG": {
          "EP ADAMAOUA / A": [
            {
              station: "ADAMAOUA",
              voters: 590
            },
          ],
          "EP BAROUME / A": [
            {
              station: "BAROUME",
              voters: 652
            },
          ],
          "EP BINDJOUMI / A": [
            {
              station: "BINDJOUMI",
              voters: 1646
            },
            {
              station: "LELE",
              voters: 823
            },
          ],
          "EP DIFERGOL / A": [
            {
              station: "DIFERGOL",
              voters: 392
            },
          ],
          "EP DJEFATOU / A": [
            {
              station: "DJEFATOU",
              voters: 1301
            },
            {
              station: "OURO",
              voters: 5952
            },
            {
              station: "NDEMRI",
              voters: 2602
            },
            {
              station: "MAFA",
              voters: 4083
            },
            {
              station: "MASSA",
              voters: 3967
            },
          ],
          "EP DOUKA GAINAKO / A": [
            {
              station: "GAINAKO",
              voters: 289
            },
            {
              station: "GOULONGO",
              voters: 289
            },
          ],
          "EP DOUKA LONGO / A": [
            {
              station: "DOUKA",
              voters: 1864
            },
            {
              station: "LONGO",
              voters: 1864
            },
            {
              station: "SABONGARI",
              voters: 932
            },
            {
              station: "TAMOUNDE",
              voters: 932
            },
          ],
          "EP KAREWA / A": [
            {
              station: "KAREWA",
              voters: 3749
            },
            {
              station: "NGONG",
              voters: 16902
            },
            {
              station: "LABBO",
              voters: 1347
            },
          ],
          "EP KEINI / A": [
            {
              station: "KEINI",
              voters: 166
            },
          ],
          "EP KONDONG / A": [
            {
              station: "KONDONG",
              voters: 201
            },
          ],
          "EP KONE / A": [
            {
              station: "KONE",
              voters: 633
            },
          ],
          "EP KOUBADJE / A": [
            {
              station: "KOUBADJE",
              voters: 1208
            },
          ],
          "EP LAINDE KAREWA / A": [
            {
              station: "LAKA",
              voters: 716
            },
            {
              station: "MADAGASKAR",
              voters: 716
            },
            {
              station: "DJARENDI",
              voters: 716
            },
            {
              station: "MEDJEREM",
              voters: 716
            },
            {
              station: "TCHOUFI",
              voters: 716
            },
          ],
          "EP LAINDE MASSA / A": [
            {
              station: "DJIKA",
              voters: 1333
            },
            {
              station: "LAINDE",
              voters: 5166
            },
            {
              station: "MAYO",
              voters: 2977
            },
            {
              station: "BANGAI",
              voters: 1333
            },
            {
              station: "TAPARE",
              voters: 2349
            },
          ],
          "EP LAINDE SOULEDE / A": [
            {
              station: "SOULEDE",
              voters: 167
            },
          ],
          "EP LANGUI / A": [
            {
              station: "KADOUNA",
              voters: 1227
            },
            {
              station: "LANGUI",
              voters: 1227
            },
          ],
          "EP MAFA TCHEBOA / A": [
            {
              station: "TCHEBOA",
              voters: 4068
            },
          ],
          "EP MALLA / A": [
            {
              station: "MALLA",
              voters: 966
            },
          ],
          "EP MAPTO / A": [
            {
              station: "MAPTO",
              voters: 742
            },
          ],
          "EP NDJOLA / A": [
            {
              station: "NDJOLA",
              voters: 1096
            },
          ],
          "EP NGARGOU / A": [
            {
              station: "CENTRE",
              voters: 311
            },
            {
              station: "NGARGOU",
              voters: 311
            },
            {
              station: "DOUALARE",
              voters: 311
            },
            {
              station: "GNARDO",
              voters: 311
            },
            {
              station: "NGOURORE",
              voters: 311
            },
            {
              station: "NYONDITI",
              voters: 311
            },
            {
              station: "SILALI",
              voters: 311
            },
          ],
          "EP TARBA / A": [
            {
              station: "TARBA",
              voters: 414
            },
          ],
          "EP ZIERA / A": [
            {
              station: "MBANWERE",
              voters: 987
            },
            {
              station: "HAIROU",
              voters: 987
            },
            {
              station: "ZIERA",
              voters: 987
            },
          ],
          "ESPL CHEF HOURO BOCKI DOMAYO / A": [
            {
              station: "DISSI",
              voters: 928
            },
            {
              station: "DOMAYO",
              voters: 928
            },
          ],
          "ESPL CHEF KALFAI / A": [
            {
              station: "KALFAI",
              voters: 282
            },
          ],
          "ESPL CHEF SELIFA / A": [
            {
              station: "SELIFA",
              voters: 458
            },
          ],
          "ESPL CHEF WINDE DJAMAN / A": [
            {
              station: "WINDE",
              voters: 797
            },
            {
              station: "DJAMAN",
              voters: 144
            },
          ],
          "ESPL EP BILIEL / A": [
            {
              station: "BILIEL",
              voters: 910
            },
          ],
          "ESPL EP KOKOUMI / A": [
            {
              station: "KOKOUMI",
              voters: 828
            },
            {
              station: "TOUPOURI",
              voters: 414
            },
          ],
          "ESPL EP NADOURA / A": [
            {
              station: "NADOURA",
              voters: 362
            },
          ],
          "ESPL EP OURO BOCKI / A": [
            {
              station: "HOURO",
              voters: 991
            },
            {
              station: "BOCKI",
              voters: 1919
            },
          ],
          "ESPL EP TAMBADJAM / A": [
            {
              station: "WADJERE",
              voters: 347
            },
          ],
          "ESPL EP TSORKE / B": [
            {
              station: "GOMSI",
              voters: 454
            },
            {
              station: "KATARKO",
              voters: 88
            },
            {
              station: "SOUKA",
              voters: 88
            },
            {
              station: "TSORKE",
              voters: 1104
            },
          ],
          "GIC SODECOTON MBOLTA / A": [
            {
              station: "MBOLTA",
              voters: 217
            },
          ],
        },
        "PITOA": {
          "CEAC PITOA / A": [
            {
              station: "OURO",
              voters: 1147
            },
            {
              station: "DJABBE",
              voters: 1147
            },
            {
              station: "SODECOTON",
              voters: 1147
            },
          ],
          "CHATEAU D'EAU LANGUI YAWA / A": [
            {
              station: "LANGUI-YAWA",
              voters: 255
            },
          ],
          "E.P. DE NIGERIARE SEKADE / A": [
            {
              station: "BAMENDA",
              voters: 237
            },
          ],
          "ECOLE PARENT DE POUSSANE / A": [
            {
              station: "POUSSANE",
              voters: 197
            },
          ],
          "EP BABANGUEL / A": [
            {
              station: "BABANGUEL",
              voters: 753
            },
            {
              station: "DJAIGA",
              voters: 3669
            },
            {
              station: "GOLLIRGA",
              voters: 753
            },
            {
              station: "GOULE",
              voters: 1048
            },
          ],
          "EP BABAYE / A": [
            {
              station: "BABAYE-CENTRE",
              voters: 597
            },
            {
              station: "BANDOUKI",
              voters: 597
            },
            {
              station: "GOLLORA",
              voters: 597
            },
            {
              station: "BABAYE",
              voters: 597
            },
            {
              station: "LOUGGUEREO",
              voters: 1483
            },
            {
              station: "WALEWOL-BOUSKI",
              voters: 597
            },
          ],
          "EP BADJENGO / A": [
            {
              station: "BADJENGO-FOULBE",
              voters: 2816
            },
            {
              station: "BAINAWARE-BADJENGO",
              voters: 2621
            },
            {
              station: "BAROUNA",
              voters: 3011
            },
            {
              station: "GUIZIGARE",
              voters: 4607
            },
            {
              station: "BADJENGO",
              voters: 2621
            },
            {
              station: "LAGAM",
              voters: 4509
            },
            {
              station: "BAINAWARE",
              voters: 2621
            },
            {
              station: "MAYEL",
              voters: 2621
            },
            {
              station: "-TOBARI",
              voters: 2621
            },
            {
              station: "MOUNDANG-SOKANGA",
              voters: 2621
            },
            {
              station: "NDIAM",
              voters: 2621
            },
            {
              station: "SIWO",
              voters: 2621
            },
            {
              station: "WALEWOL",
              voters: 5242
            },
            {
              station: "WOURO-IBBI",
              voters: 2621
            },
          ],
          "EP BADJOUMA RADIER / A": [
            {
              station: "BADJOUMA",
              voters: 8733
            },
            {
              station: "CARREFOUR",
              voters: 2873
            },
            {
              station: "RADIER",
              voters: 1888
            },
            {
              station: "BAHOI",
              voters: 1888
            },
            {
              station: "DIRI",
              voters: 1888
            },
            {
              station: "DJALINGO",
              voters: 1888
            },
            {
              station: "DJIPPORDE-POUTCHOU",
              voters: 1888
            },
            {
              station: "FOULBE",
              voters: 8095
            },
            {
              station: "SEBORE",
              voters: 2442
            },
            {
              station: "SOUKKOUNDE",
              voters: 1888
            },
          ],
          "EP BADJOUMA-CENTRE / A": [
            {
              station: "CENTRE",
              voters: 4433
            },
            {
              station: "BOGORE",
              voters: 1986
            },
            {
              station: "FORTY",
              voters: 1986
            },
            {
              station: "MOUNDANGRE",
              voters: 1986
            },
            {
              station: "BADJOUMA-CENTRE",
              voters: 6857
            },
            {
              station: "OURO-BOCKI",
              voters: 3133
            },
            {
              station: "TADO",
              voters: 1986
            },
            {
              station: "OURO-ISSA",
              voters: 1986
            },
            {
              station: "SOROM-KAIGAMA",
              voters: 1986
            },
            {
              station: "TOUPOURIRE",
              voters: 2803
            },
          ],
          "EP BANAYE / A": [
            {
              station: "BANAYE",
              voters: 399
            },
          ],
          "EP BANGRANG / A": [
            {
              station: "BANGRANG",
              voters: 357
            },
            {
              station: "DJAOURO",
              voters: 947
            },
            {
              station: "CHEF",
              voters: 357
            },
            {
              station: "WAMBAI",
              voters: 357
            },
          ],
          "EP BE / A": [
            {
              station: "BE-LAMORDE",
              voters: 886
            },
            {
              station: "DACKEL",
              voters: 886
            },
            {
              station: "HAOUSSARE-BE",
              voters: 886
            },
            {
              station: "NASSARAO-BE",
              voters: 886
            },
            {
              station: "SOUARE",
              voters: 1631
            },
            {
              station: "YAMA",
              voters: 886
            },
            {
              station: "SALLA",
              voters: 886
            },
          ],
          "EP BODJAL / A": [
            {
              station: "BODJAL",
              voters: 196
            },
          ],
          "EP BOULGOU / A": [
            {
              station: "BOULGOU",
              voters: 832
            },
            {
              station: "MBERI",
              voters: 703
            },
          ],
          "EP BOULI MAL ALIM / A": [
            {
              station: "BOULI",
              voters: 541
            },
            {
              station: "MAL",
              voters: 244
            },
            {
              station: "ALIM",
              voters: 244
            },
          ],
          "EP BOULI MANGO / A": [
            {
              station: "BOULI-MANGO",
              voters: 401
            },
          ],
          "EP DJALINGO-MAIGARI / A": [
            {
              station: "DJALINGO-MAIGARI",
              voters: 360
            },
          ],
          "EP DJIDDE / A": [
            {
              station: "DJIDDE",
              voters: 317
            },
          ],
          "EP DOLLA / A": [
            {
              station: "AMTE",
              voters: 1512
            },
            {
              station: "DOLLA",
              voters: 11522
            },
            {
              station: "CARREFOUR-BARKA",
              voters: 1512
            },
            {
              station: "DELEM-DOLLA",
              voters: 1512
            },
            {
              station: "DJIMETTA",
              voters: 1512
            },
            {
              station: "GUIDJAROU",
              voters: 1512
            },
            {
              station: "KORKA'",
              voters: 1512
            },
            {
              station: "MAYO",
              voters: 3259
            },
            {
              station: "BORODJI",
              voters: 1512
            },
            {
              station: "MONTAGNERE-DOLLA",
              voters: 1512
            },
            {
              station: "OURO-DJELANI",
              voters: 1512
            },
            {
              station: "OURO-KESSOUM",
              voters: 7417
            },
            {
              station: "RAM-DOLLA",
              voters: 1512
            },
            {
              station: "TONGO-DOLLA",
              voters: 1512
            },
            {
              station: "WAFANGO",
              voters: 4397
            },
          ],
          "EP DOLLERE / A": [
            {
              station: "DOLLERE",
              voters: 1492
            },
            {
              station: "KAREWA",
              voters: 1492
            },
          ],
          "EP DOULOUMI / A": [
            {
              station: "DOULOUMI",
              voters: 484
            },
          ],
          "EP GADA MAYO / A": [
            {
              station: "GADA",
              voters: 576
            },
          ],
          "EP GUEBAKE / A": [
            {
              station: "DOUMDE",
              voters: 745
            },
            {
              station: "GUEBAKE",
              voters: 1490
            },
            {
              station: "OURO-DJIYE",
              voters: 745
            },
            {
              station: "-DALDAL",
              voters: 745
            },
            {
              station: "SOUARE-MANGO",
              voters: 745
            },
            {
              station: "ZACC",
              voters: 1644
            },
            {
              station: "TINGLING",
              voters: 1128
            },
          ],
          "EP KEFERO / A": [
            {
              station: "DELEM",
              voters: 201
            },
            {
              station: "KEFERO",
              voters: 201
            },
          ],
          "EP KIRIRAMBO / A": [
            {
              station: "GNIBANGO",
              voters: 352
            },
            {
              station: "KIRIRAMBO",
              voters: 352
            },
          ],
          "EP LOUMBOU / A": [
            {
              station: "LOUMBOU",
              voters: 302
            },
          ],
          "EP MBOR PARTIGE / A": [
            {
              station: "BAPARA",
              voters: 652
            },
            {
              station: "KANGOU",
              voters: 652
            },
            {
              station: "BAPARA-FOULBE",
              voters: 652
            },
            {
              station: "MBOR",
              voters: 431
            },
            {
              station: "PARTIGE",
              voters: 431
            },
          ],
          "EP NDEGA / A": [
            {
              station: "NDEGA",
              voters: 218
            },
          ],
          "EP NDOUDJA / A": [
            {
              station: "NDOUDJA",
              voters: 257
            },
          ],
          "EP OUMOUA / A": [
            {
              station: "WALLA",
              voters: 293
            },
            {
              station: "DOUMDERE",
              voters: 293
            },
            {
              station: "OUMOUA",
              voters: 293
            },
          ],
          "EP PENE / A": [
            {
              station: "PENE",
              voters: 888
            },
            {
              station: "SOKANGA",
              voters: 444
            },
            {
              station: "SOUROU",
              voters: 444
            },
          ],
          "EP PILOTE PITOA / A": [
            {
              station: "GUIZIGARE-PITOA",
              voters: 2450
            },
            {
              station: "LOPERE-PITOA",
              voters: 2450
            },
            {
              station: "MOUNDANG",
              voters: 2450
            },
            {
              station: "SARA",
              voters: 2450
            },
            {
              station: "TOUPOURI",
              voters: 2450
            },
          ],
          "EP PITOA BOUNGUEL / A": [
            {
              station: "BANTAHI",
              voters: 2312
            },
            {
              station: "BOUNGUEL",
              voters: 2312
            },
          ],
          "EP RAM / A": [
            {
              station: "RAM",
              voters: 537
            },
          ],
          "EP SABONGARI / A": [
            {
              station: "NGAOUNDERERE",
              voters: 342
            },
            {
              station: "SABONGARI",
              voters: 342
            },
            {
              station: "SISSERI",
              voters: 342
            },
            {
              station: "WINDE-GAROUA",
              voters: 342
            },
          ],
          "EP SEKANDE / A": [
            {
              station: "BAMENDA-SEKANDE",
              voters: 1054
            },
            {
              station: "DJALINGO-SAMBO",
              voters: 817
            },
            {
              station: "KOSSEYEL",
              voters: 1291
            },
            {
              station: "DANEYEL",
              voters: 1291
            },
            {
              station: "MONTAGNERE-SEKANDE",
              voters: 817
            },
            {
              station: "NIGERIARE",
              voters: 1291
            },
            {
              station: "SEKANDE",
              voters: 2688
            },
          ],
          "EP SONAYO / A": [
            {
              station: "GOUNOUGOU",
              voters: 287
            },
            {
              station: "SONAYO",
              voters: 574
            },
          ],
          "EP TCHOLLARAM / A": [
            {
              station: "BASSINTA",
              voters: 350
            },
            {
              station: "MBOURA",
              voters: 459
            },
            {
              station: "OGNIA",
              voters: 350
            },
            {
              station: "TCHOLLARAM",
              voters: 350
            },
          ],
          "EP WAFANGO / A": [
            {
              station: "TOKOMBERE",
              voters: 899
            },
            {
              station: "WAFANGO-PITOA",
              voters: 899
            },
          ],
          "ESPL FETE LANGUI-CENTRE III / A": [
            {
              station: "LANGUI",
              voters: 461
            },
            {
              station: "III",
              voters: 461
            },
            {
              station: "MBALARE",
              voters: 490
            },
            {
              station: "SOROM-TOSSI",
              voters: 206
            },
            {
              station: "WAPILWA",
              voters: 206
            },
          ],
          "LYCEE PITOA / A": [
            {
              station: "BALANE",
              voters: 1384
            },
            {
              station: "PITOA",
              voters: 18053
            },
            {
              station: "WINDE",
              voters: 1384
            },
            {
              station: "LIROMA",
              voters: 1384
            },
          ],
          "MARCHE TCHASKI / A": [
            {
              station: "TCHASKI",
              voters: 594
            },
            {
              station: "HAOUSSARE-TCHASKI",
              voters: 297
            },
            {
              station: "LANGUIRE",
              voters: 297
            },
            {
              station: "MBARA",
              voters: 420
            },
            {
              station: "NYABI",
              voters: 297
            },
            {
              station: "SALMANA",
              voters: 297
            },
          ],
          "PLACE FETE MAYO-LEBRI I / A": [
            {
              station: "LEBRI",
              voters: 1171
            },
            {
              station: "MAYO-BANGAY",
              voters: 260
            },
          ],
          "PLACE FETE MBOULOUWOL / A": [
            {
              station: "MBOULOUWOL",
              voters: 243
            },
          ],
          "PLACE FETE TORROYE / A": [
            {
              station: "TORROYE",
              voters: 225
            },
          ],
        },
        "TOUROUA": {
          "DELEGATION AGRICULTURE / A": [
            {
              station: "DJEKARE",
              voters: 1427
            },
            {
              station: "DOULIRE",
              voters: 247
            },
            {
              station: "LAMORDE-TOUROUA",
              voters: 1427
            },
            {
              station: "MAGADJIRE",
              voters: 1427
            },
          ],
          "E.P. DE OURO-BARKA / A": [
            {
              station: "OURO-BARKA",
              voters: 127
            },
          ],
          "EP BOGUEL / A": [
            {
              station: "BOGGUEL",
              voters: 540
            },
            {
              station: "FORADJE",
              voters: 656
            },
            {
              station: "SORBERE",
              voters: 540
            },
            {
              station: "DJIRE",
              voters: 540
            },
          ],
          "EP BORONGO / A": [
            {
              station: "BORONGO",
              voters: 1067
            },
            {
              station: "GARINKOURA",
              voters: 1160
            },
            {
              station: "IBARE",
              voters: 1160
            },
            {
              station: "KAREWA",
              voters: 1160
            },
            {
              station: "TONDIRE",
              voters: 1160
            },
          ],
          "EP BOUNDANG FOULBE / A": [
            {
              station: "BOLI",
              voters: 336
            },
            {
              station: "BOUNDANG",
              voters: 336
            },
            {
              station: "FOULBE",
              voters: 336
            },
            {
              station: "GABAS",
              voters: 336
            },
            {
              station: "KOLMARI",
              voters: 336
            },
            {
              station: "KOULAWA",
              voters: 579
            },
            {
              station: "OURO-SOUDDE",
              voters: 336
            },
            {
              station: "TOLKOMARI",
              voters: 336
            },
          ],
          "EP DAGUE / A": [
            {
              station: "DAGUE",
              voters: 696
            },
            {
              station: "KOHI",
              voters: 696
            },
            {
              station: "MAYO-YARE",
              voters: 903
            },
            {
              station: "SIDIRI",
              voters: 903
            },
          ],
          "EP DJOUTA-LEDDE / A": [
            {
              station: "DJOUTA-LEDDE",
              voters: 698
            },
            {
              station: "OURO-HAIROU",
              voters: 1064
            },
          ],
          "EP DOUNDEHI / A": [
            {
              station: "DOUNDEHI",
              voters: 640
            },
            {
              station: "HINGA",
              voters: 891
            },
            {
              station: "HOLA",
              voters: 891
            },
          ],
          "EP ERGUE / A": [
            {
              station: "ERGUE",
              voters: 337
            },
            {
              station: "HOLTCHI",
              voters: 337
            },
          ],
          "EP GR I TOUROUA / A": [
            {
              station: "MOUNDANRE",
              voters: 1777
            },
            {
              station: "OURO-KESSOUM/TOUROUA",
              voters: 1777
            },
          ],
          "EP GR II TOUROUA / A": [
            {
              station: "SEMTI",
              voters: 1484
            },
          ],
          "EP KAREWA / A": [
            {
              station: "OURO-KESSOUM",
              voters: 93
            },
            {
              station: "QUARTIER",
              voters: 93
            },
            {
              station: "BORORO",
              voters: 93
            },
          ],
          "EP LONGO / A": [
            {
              station: "DJAMTARI",
              voters: 559
            },
            {
              station: "KEDE",
              voters: 559
            },
            {
              station: "LONGO",
              voters: 686
            },
            {
              station: "MALITI",
              voters: 1245
            },
            {
              station: "OURO",
              voters: 686
            },
            {
              station: "BARKA",
              voters: 686
            },
          ],
          "EP LOUGOUNDE / A": [
            {
              station: "LOUGOUNDE",
              voters: 1080
            },
          ],
          "EP MAYO KARLAYE / A": [
            {
              station: "MAYO-KARLAYE",
              voters: 714
            },
          ],
          "EP MAYO-OULO / A": [
            {
              station: "BOULO",
              voters: 610
            },
          ],
          "EP OURO-FANDOU / A": [
            {
              station: "OURO-FANDOU",
              voters: 519
            },
          ],
          "EP OURO-SEKEHI / A": [
            {
              station: "DJALINGO",
              voters: 1135
            },
            {
              station: "OURO-SEKEHI",
              voters: 1374
            },
          ],
          "EP TCHIRKOLTCHI / A": [
            {
              station: "KAFOUE",
              voters: 329
            },
            {
              station: "KOSSEYEL",
              voters: 329
            },
            {
              station: "TCHIRKOLTCHI",
              voters: 658
            },
          ],
          "EPC BADANG / A": [
            {
              station: "BADANG",
              voters: 795
            },
            {
              station: "BAMA",
              voters: 1405
            },
            {
              station: "BOGARE",
              voters: 795
            },
            {
              station: "DARA",
              voters: 1405
            },
            {
              station: "NOKKA",
              voters: 1405
            },
            {
              station: "KAYA",
              voters: 1405
            },
            {
              station: "MAYO-OULO",
              voters: 1405
            },
          ],
          "EPC KOZA II / A": [
            {
              station: "DJABEY",
              voters: 1249
            },
            {
              station: "PATAGOLE",
              voters: 1249
            },
            {
              station: "KAREHI",
              voters: 1249
            },
            {
              station: "KOZA",
              voters: 1249
            },
            {
              station: "LAFIARI",
              voters: 1249
            },
            {
              station: "SIOUTIRKI",
              voters: 1249
            },
            {
              station: "TOUROUA",
              voters: 5397
            },
          ],
          "EPC MBAGA / A": [
            {
              station: "MBAGA",
              voters: 1658
            },
          ],
          "ESPL CHEF BOUNDANG HAOUSSARI / A": [
            {
              station: "BOUNDANG-HAOUSSARI",
              voters: 117
            },
          ],
          "ESPL CHEF LAMORDE / A": [
            {
              station: "FARKOUMO",
              voters: 211
            },
            {
              station: "LAMORDE-ERGUE",
              voters: 211
            },
          ],
          "ESPL CHEF OFFAM / A": [
            {
              station: "GUERA",
              voters: 315
            },
            {
              station: "BEMTE",
              voters: 315
            },
            {
              station: "HOLLE",
              voters: 315
            },
            {
              station: "LANGUI",
              voters: 315
            },
            {
              station: "OFFAM",
              voters: 315
            },
          ],
          "ESPL EP KINADA / A": [
            {
              station: "KINADA",
              voters: 177
            },
            {
              station: "SABONGARI-KINADI",
              voters: 177
            },
          ],
          "ESPL EP PINDILING / A": [
            {
              station: "MANDAKA",
              voters: 264
            },
          ],
        },
      },
      "FARO": {
        "BEKA": {
          "E.P. DE MAYO-SILBA / A": [
            {
              station: "SILBA",
              voters: 106
            },
          ],
          "ECOLE CATHO NDINTIRE / A": [
            {
              station: "NDINTIRE",
              voters: 397
            },
            {
              station: "SAFAI",
              voters: 479
            },
          ],
          "ECOLE DES PARENTS DE BEGUE / A": [
            {
              station: "BOULE",
              voters: 212
            },
          ],
          "ECOLE DES PARENTS DE BIPAO / A": [
            {
              station: "BIPOA",
              voters: 43
            },
          ],
          "ECOLE DES PARENTS DE DJANGUINE / A": [
            {
              station: "DJANGUINE",
              voters: 281
            },
          ],
          "ECOLE DES PARENTS D\OURO-DONKA / A": [
            {
              station: "OURO",
              voters: 146
            },
            {
              station: "DONKA",
              voters: 146
            },
          ],
          "ECOLE PUBLIQUE DE DJAMPEOU / A": [
            {
              station: "KILAROU",
              voters: 199
            },
            {
              station: "SO\O",
              voters: 199
            },
            {
              station: "BOUANGAL",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE GAMOU / A": [
            {
              station: "DJAMARE",
              voters: 84
            },
          ],
          "ECOLE PUBLIQUE DE KOKSORO / A": [
            {
              station: "ALH.IYEGA",
              voters: 202
            },
            {
              station: "SOUKKOUNDE",
              voters: 202
            },
          ],
          "ECOLE PUBLIQUE DE LOKOSSAMA / A": [
            {
              station: "LOKOSSAMA",
              voters: 86
            },
          ],
          "EM BEKA / A": [
            {
              station: "CENTRE",
              voters: 976
            },
          ],
          "EP AOUDI / A": [
            {
              station: "ABEDJO",
              voters: 251
            },
            {
              station: "AOUDI",
              voters: 251
            },
            {
              station: "ZERMOU",
              voters: 251
            },
          ],
          "EP BALGOU / A": [
            {
              station: "BALGOU",
              voters: 199
            },
            {
              station: "KARLAYE",
              voters: 199
            },
            {
              station: "KELLOU",
              voters: 199
            },
            {
              station: "PAGOU",
              voters: 199
            },
            {
              station: "WOULBA",
              voters: 199
            },
          ],
          "EP BALKOSSA / A": [
            {
              station: "BALKOSSA",
              voters: 754
            },
            {
              station: "KOLVANOU",
              voters: 501
            },
            {
              station: "LESDI-BODERI",
              voters: 377
            },
            {
              station: "PETIT",
              voters: 377
            },
            {
              station: "TAPARE",
              voters: 754
            },
            {
              station: "ZELA",
              voters: 377
            },
            {
              station: "WAPEO",
              voters: 878
            },
          ],
          "EP BEKA / A": [
            {
              station: "ALHADJI",
              voters: 992
            },
            {
              station: "IYENGA",
              voters: 992
            },
            {
              station: "BARKERE",
              voters: 1194
            },
            {
              station: "BEKA",
              voters: 1968
            },
            {
              station: "DJALINGO",
              voters: 992
            },
            {
              station: "KOKSORO",
              voters: 1194
            },
            {
              station: "LOUGGUERE",
              voters: 992
            },
            {
              station: "NDJORO",
              voters: 1194
            },
            {
              station: "NYEBBAM-GAOURI",
              voters: 1054
            },
            {
              station: "OURO-KONA",
              voters: 1138
            },
            {
              station: "ROUMDE-NANA",
              voters: 1054
            },
            {
              station: "SOUKOUNDE",
              voters: 992
            },
            {
              station: "WAOUROU",
              voters: 992
            },
            {
              station: "KOULAHI",
              voters: 992
            },
          ],
          "EP BIMBA / A": [
            {
              station: "BIMBA",
              voters: 1275
            },
            {
              station: "ADJIA",
              voters: 425
            },
            {
              station: "FOULBE",
              voters: 425
            },
            {
              station: "GUEMOU",
              voters: 425
            },
            {
              station: "DJOUTA",
              voters: 468
            },
            {
              station: "BENTERE",
              voters: 468
            },
            {
              station: "GALSAMA",
              voters: 425
            },
            {
              station: "YALOU",
              voters: 425
            },
          ],
          "EP BIMLEROU / A": [
            {
              station: "BIMLEROU",
              voters: 202
            },
            {
              station: "KASSALA",
              voters: 779
            },
            {
              station: "LIBROU-BIMLEROU",
              voters: 202
            },
          ],
          "EP BOGDOU / A": [
            {
              station: "BOGDOU",
              voters: 1078
            },
            {
              station: "DJARENDI",
              voters: 662
            },
            {
              station: "SANA",
              voters: 626
            },
            {
              station: "MAIKIDI",
              voters: 255
            },
            {
              station: "NADERE",
              voters: 626
            },
            {
              station: "KOMA",
              voters: 313
            },
            {
              station: "PEREDOU",
              voters: 525
            },
            {
              station: "SOUARI",
              voters: 255
            },
            {
              station: "WALTEROU",
              voters: 255
            },
          ],
          "EP DENOU-MANGA / A": [
            {
              station: "DENOU",
              voters: 492
            },
            {
              station: "DJOUBAOU",
              voters: 492
            },
            {
              station: "DENOU-MANGA",
              voters: 492
            },
            {
              station: "DJABE",
              voters: 1304
            },
            {
              station: "MAYO-SILBA",
              voters: 598
            },
            {
              station: "SIMKOLA",
              voters: 984
            },
            {
              station: "DOW",
              voters: 492
            },
            {
              station: "LESDI",
              voters: 492
            },
          ],
          "EP DENOU-PETEL / A": [
            {
              station: "DENOU-PETEL",
              voters: 181
            },
            {
              station: "VOGBA",
              voters: 181
            },
          ],
          "EP DIDANGO / A": [
            {
              station: "BOUBA",
              voters: 184
            },
            {
              station: "MAGAMI",
              voters: 184
            },
            {
              station: "DIDANGO",
              voters: 1131
            },
            {
              station: "NISSIRO",
              voters: 184
            },
          ],
          "EP DJAGOU / A": [
            {
              station: "DJAGOU",
              voters: 145
            },
            {
              station: "DJAMPEOU",
              voters: 344
            },
            {
              station: "YELBA",
              voters: 409
            },
          ],
          "EP DJALINGO PONT / A": [
            {
              station: "DJALINGO-PONT",
              voters: 406
            },
            {
              station: "KESSOUM",
              voters: 406
            },
          ],
          "EP DJALINGO VERE / A": [
            {
              station: "BEGUE",
              voters: 413
            },
            {
              station: "DJALINGO-VERE",
              voters: 201
            },
          ],
          "EP DORBA / A": [
            {
              station: "DJAMBOUTOU",
              voters: 311
            },
            {
              station: "DORBA",
              voters: 182
            },
            {
              station: "NATIRDE",
              voters: 229
            },
            {
              station: "TONGO",
              voters: 182
            },
          ],
          "EP GBEUDWABA / A": [
            {
              station: "GBEUDWABA",
              voters: 55
            },
          ],
          "EP GUEDE / A": [
            {
              station: "GUEDE",
              voters: 704
            },
            {
              station: "KOMBORO",
              voters: 492
            },
            {
              station: "LOUGGOUNDE",
              voters: 492
            },
          ],
          "EP HALLANI / A": [
            {
              station: "HALLANI",
              voters: 168
            },
          ],
          "EP KARINE / A": [
            {
              station: "GAMNA",
              voters: 443
            },
            {
              station: "KARINE",
              voters: 443
            },
            {
              station: "LOUGGA",
              voters: 570
            },
            {
              station: "MBELINE",
              voters: 443
            },
            {
              station: "TATOURE",
              voters: 443
            },
          ],
          "EP KASSALA VOMA / A": [
            {
              station: "VOMA",
              voters: 152
            },
          ],
          "EP KOLOU-MALKOGA / A": [
            {
              station: "KOLOU-MANGA",
              voters: 275
            },
            {
              station: "KOUDI",
              voters: 275
            },
            {
              station: "KWARA",
              voters: 275
            },
          ],
          "EP KOUBI / A": [
            {
              station: "BATBA",
              voters: 402
            },
            {
              station: "KOBLIMA",
              voters: 402
            },
            {
              station: "KOUBI",
              voters: 402
            },
          ],
          "EP LARO / A": [
            {
              station: "BISSORA",
              voters: 189
            },
            {
              station: "GAMOU",
              voters: 273
            },
            {
              station: "GAMO",
              voters: 189
            },
            {
              station: "LARO",
              voters: 378
            },
            {
              station: "MAYO",
              voters: 295
            },
          ],
          "EP LOWOL / A": [
            {
              station: "LOWOL",
              voters: 540
            },
          ],
          "EP MALKOGA / A": [
            {
              station: "MALKOGA",
              voters: 413
            },
            {
              station: "SAFIROU",
              voters: 413
            },
          ],
          "EP NYMDELOU / A": [
            {
              station: "NYMDELOU",
              voters: 331
            },
            {
              station: "VOKBA",
              voters: 331
            },
          ],
          "EP OGOLO / A": [
            {
              station: "OGOLO",
              voters: 192
            },
            {
              station: "RABBO",
              voters: 192
            },
            {
              station: "KILA",
              voters: 192
            },
          ],
          "EP POMLA / A": [
            {
              station: "AHMADOU",
              voters: 434
            },
            {
              station: "DJOUGOUDOUM",
              voters: 434
            },
            {
              station: "DANI",
              voters: 434
            },
            {
              station: "KARI",
              voters: 434
            },
            {
              station: "LENARA",
              voters: 546
            },
            {
              station: "LIH",
              voters: 434
            },
            {
              station: "POMLA",
              voters: 1302
            },
            {
              station: "LIH-WANGAI",
              voters: 434
            },
            {
              station: "SHEHOU",
              voters: 434
            },
            {
              station: "WOURO",
              voters: 3750
            },
            {
              station: "BEI",
              voters: 434
            },
          ],
          "EP SAPTOU / A": [
            {
              station: "KOLOU",
              voters: 345
            },
            {
              station: "NAKALBA",
              voters: 345
            },
            {
              station: "SAPTOU",
              voters: 345
            },
          ],
          "EP TCHAMBA / A": [
            {
              station: "DINSI",
              voters: 947
            },
            {
              station: "MAILOUDOU",
              voters: 947
            },
            {
              station: "RIDINA",
              voters: 1181
            },
            {
              station: "SOFOL",
              voters: 1181
            },
            {
              station: "PANTI",
              voters: 947
            },
          ],
          "EP TOUMBINDE / A": [
            {
              station: "PITOA-BEKA",
              voters: 276
            },
            {
              station: "TOUMBIDE",
              voters: 214
            },
          ],
          "EP WADINGA / A": [
            {
              station: "DANGANA",
              voters: 482
            },
            {
              station: "MALI",
              voters: 964
            },
            {
              station: "WADINGA",
              voters: 276
            },
          ],
          "EP WANGAI / A": [
            {
              station: "BASSOUNOU",
              voters: 545
            },
            {
              station: "DAMASSI",
              voters: 545
            },
            {
              station: "GUELBA",
              voters: 545
            },
            {
              station: "WANGAI",
              voters: 636
            },
          ],
          "EP YELLI- MANGA / A": [
            {
              station: "YELLI",
              voters: 330
            },
            {
              station: "-PETEL",
              voters: 330
            },
            {
              station: "YELLI-MANGA",
              voters: 330
            },
          ],
          "ESPL CHEF KOLGOU / A": [
            {
              station: "KOLGOU",
              voters: 221
            },
          ],
          "ESPL CHEF MAYO NGNIWA / A": [
            {
              station: "MAYO-NGNIWA",
              voters: 106
            },
          ],
          "ESPL CHEF MOUGUENI / A": [
            {
              station: "BOGUE",
              voters: 182
            },
            {
              station: "TCHAMBA",
              voters: 2874
            },
            {
              station: "FOLSI",
              voters: 91
            },
            {
              station: "MOUGUENI",
              voters: 91
            },
            {
              station: "ZAMNI",
              voters: 91
            },
          ],
          "ESPL CHEF NDINTIRE WANGAI / A": [
            {
              station: "LIWA",
              voters: 235
            },
            {
              station: "NDINGTIRE-WANGAI",
              voters: 235
            },
            {
              station: "SASSI",
              voters: 235
            },
            {
              station: "SOULABE",
              voters: 235
            },
            {
              station: "MBAI",
              voters: 235
            },
          ],
          "ESPL CHEF WARDI / A": [
            {
              station: "BORI",
              voters: 87
            },
            {
              station: "GALI",
              voters: 87
            },
            {
              station: "KOMNI",
              voters: 87
            },
            {
              station: "GUERI",
              voters: 87
            },
            {
              station: "WARDI",
              voters: 87
            },
          ],
          "ESPL CHEF YELBA / A": [
            {
              station: "KOLONTI",
              voters: 132
            },
          ],
          "ESPL CHEFWOURO BOUNOU / A": [
            {
              station: "BOUNOU",
              voters: 261
            },
            {
              station: "DOLE",
              voters: 261
            },
            {
              station: "SIKO",
              voters: 261
            },
            {
              station: "SIRA",
              voters: 347
            },
          ],
        },
        "POLI": {
          "CASE COMMUNAUTAIRE DE BALANE / A": [
            {
              station: "LAKBAI",
              voters: 752
            },
            {
              station: "BALANE",
              voters: 836
            },
          ],
          "CASE DE SANTE NINGA / A": [
            {
              station: "DITE",
              voters: 159
            },
            {
              station: "GORE",
              voters: 159
            },
            {
              station: "NAMBAVA",
              voters: 159
            },
            {
              station: "NINGA",
              voters: 159
            },
            {
              station: "TCHABAL",
              voters: 233
            },
            {
              station: "-NINGA",
              voters: 159
            },
            {
              station: "TOUNE",
              voters: 159
            },
            {
              station: "VAKOE",
              voters: 159
            },
            {
              station: "WADE",
              voters: 159
            },
            {
              station: "YEGO",
              voters: 159
            },
          ],
          "DELEGATION AGRICULTURE / A": [
            {
              station: "BAKDONKO",
              voters: 1364
            },
            {
              station: "BIBEMIRE",
              voters: 911
            },
            {
              station: "SABONGARI",
              voters: 911
            },
          ],
          "DELEGATION DES MINES / A": [
            {
              station: "BOUNDJE",
              voters: 618
            },
            {
              station: "NIBANGO",
              voters: 1097
            },
          ],
          "ECOLE CATHO YOBO / A": [
            {
              station: "DENKTE",
              voters: 394
            },
            {
              station: "PATE-GOLE",
              voters: 394
            },
            {
              station: "TAMDJAL",
              voters: 394
            },
            {
              station: "YOBO",
              voters: 394
            },
            {
              station: "YORINI",
              voters: 394
            },
          ],
          "ECOLE DES PARENTS DONKO / A": [
            {
              station: "BOULE",
              voters: 538
            },
            {
              station: "DEMTE",
              voters: 175
            },
            {
              station: "DONKO-CENTRE",
              voters: 175
            },
          ],
          "ECOLE PROT POLI-WANGO / A": [
            {
              station: "BADONGO",
              voters: 453
            },
            {
              station: "BOUSWALE",
              voters: 840
            },
            {
              station: "PETEL",
              voters: 453
            },
            {
              station: "NABARO",
              voters: 453
            },
            {
              station: "TIRGA",
              voters: 453
            },
          ],
          "EM BILINGUE POLI / A": [
            {
              station: "DOUPA",
              voters: 742
            },
            {
              station: "TONGO",
              voters: 742
            },
          ],
          "EP BANTADJE / A": [
            {
              station: "BANTADJE",
              voters: 491
            },
            {
              station: "DJALINGO",
              voters: 404
            },
            {
              station: "PELBOU",
              voters: 404
            },
            {
              station: "POMLA",
              voters: 404
            },
            {
              station: "POUKSA",
              voters: 404
            },
            {
              station: "SIGARI",
              voters: 404
            },
          ],
          "EP BEKA SEKO / A": [
            {
              station: "BEKA",
              voters: 178
            },
            {
              station: "SEKO",
              voters: 178
            },
            {
              station: "BOROYA",
              voters: 631
            },
            {
              station: "WALE",
              voters: 631
            },
            {
              station: "HEPTILELE",
              voters: 178
            },
          ],
          "EP BERE / A": [
            {
              station: "BAKTE",
              voters: 220
            },
            {
              station: "BERE",
              voters: 220
            },
            {
              station: "DJENGO",
              voters: 220
            },
            {
              station: "DJOGO",
              voters: 379
            },
            {
              station: "HEPPA",
              voters: 220
            },
            {
              station: "PIPAH",
              voters: 220
            },
            {
              station: "RINGO",
              voters: 220
            },
            {
              station: "SEKO-BOKO",
              voters: 220
            },
          ],
          "EP BOULKO / A": [
            {
              station: "BOLELE",
              voters: 387
            },
            {
              station: "BOULKO",
              voters: 387
            },
            {
              station: "DETTA",
              voters: 387
            },
            {
              station: "KOUMSDONGO",
              voters: 387
            },
            {
              station: "MOUTTO",
              voters: 387
            },
            {
              station: "TOUPTE",
              voters: 473
            },
          ],
          "EP BOUMBA / A": [
            {
              station: "BOUMBA",
              voters: 1094
            },
            {
              station: "BOUPI",
              voters: 615
            },
            {
              station: "GAGUIBA",
              voters: 615
            },
            {
              station: "GANDJIBA",
              voters: 847
            },
            {
              station: "KOGNAKBA",
              voters: 615
            },
            {
              station: "POTTI",
              voters: 615
            },
            {
              station: "SERI-BOUMBA",
              voters: 615
            },
            {
              station: "TEGUI-BOUMBA",
              voters: 615
            },
          ],
          "EP DE WOURO MBAI / A": [
            {
              station: "ROUBE",
              voters: 343
            },
          ],
          "EP DJALINGO-KONGLE / A": [
            {
              station: "DJALINGO-KONGLE",
              voters: 268
            },
          ],
          "EP DJOUMTE / A": [
            {
              station: "BOLI",
              voters: 465
            },
            {
              station: "DJOREITO",
              voters: 465
            },
            {
              station: "DJOUMTE",
              voters: 918
            },
            {
              station: "SIRKOLCHI",
              voters: 465
            },
            {
              station: "SISSI",
              voters: 704
            },
            {
              station: "TEKSA",
              voters: 465
            },
          ],
          "EP DOTRO / A": [
            {
              station: "BETE",
              voters: 182
            },
            {
              station: "DOTRO",
              voters: 182
            },
            {
              station: "GUIDING",
              voters: 182
            },
            {
              station: "WEBAKO",
              voters: 182
            },
          ],
          "EP FIGNOLE / A": [
            {
              station: "DENGUERE",
              voters: 462
            },
            {
              station: "DONE",
              voters: 462
            },
            {
              station: "FIGNOLE",
              voters: 462
            },
            {
              station: "GOURKO",
              voters: 462
            },
            {
              station: "KIMLA",
              voters: 462
            },
            {
              station: "NOTCHA",
              voters: 462
            },
            {
              station: "SERVEI",
              voters: 462
            },
          ],
          "EP GAHANBA / A": [
            {
              station: "BGAGUI",
              voters: 255
            },
            {
              station: "DJOGUI",
              voters: 255
            },
            {
              station: "GAGUI",
              voters: 255
            },
            {
              station: "GAHANBA",
              voters: 607
            },
            {
              station: "LEGUI",
              voters: 255
            },
            {
              station: "NA'",
              voters: 255
            },
            {
              station: "ABA",
              voters: 255
            },
            {
              station: "SEBI",
              voters: 255
            },
          ],
          "EP GANDABA / A": [
            {
              station: "LOUGUERE",
              voters: 74
            },
            {
              station: "GANDABA",
              voters: 74
            },
          ],
          "EP GARE / A": [
            {
              station: "BOUDE",
              voters: 252
            },
            {
              station: "BOUMSE",
              voters: 252
            },
            {
              station: "DEMBAKO",
              voters: 252
            },
            {
              station: "GAOGUI",
              voters: 252
            },
            {
              station: "GARE",
              voters: 252
            },
            {
              station: "HERKO",
              voters: 252
            },
            {
              station: "SAMO",
              voters: 252
            },
          ],
          "EP GODE / A": [
            {
              station: "KPENGEN",
              voters: 677
            },
            {
              station: "MALWADOU",
              voters: 677
            },
          ],
          "EP GOMBO / A": [
            {
              station: "DASSIDONGO",
              voters: 214
            },
            {
              station: "GOMBO",
              voters: 214
            },
            {
              station: "TAKO",
              voters: 214
            },
          ],
          "EP GOMPOU / A": [
            {
              station: "ALKALI",
              voters: 248
            },
            {
              station: "GODE",
              voters: 925
            },
            {
              station: "BOKARE",
              voters: 248
            },
            {
              station: "DJASSA",
              voters: 248
            },
            {
              station: "DJOUGLA",
              voters: 248
            },
            {
              station: "GOMPOU",
              voters: 248
            },
            {
              station: "KALBINGA",
              voters: 652
            },
            {
              station: "ANCIEN",
              voters: 496
            },
            {
              station: "MANGZANG",
              voters: 248
            },
            {
              station: "SINGBA",
              voters: 652
            },
            {
              station: "VAAKOUA",
              voters: 248
            },
            {
              station: "WANGBA",
              voters: 248
            },
          ],
          "EP GORMAYA / A": [
            {
              station: "BASSODJE",
              voters: 680
            },
            {
              station: "DELENGUE",
              voters: 552
            },
            {
              station: "GORMAYA",
              voters: 895
            },
            {
              station: "GUITO",
              voters: 1238
            },
            {
              station: "SALAKI",
              voters: 1238
            },
            {
              station: "SOUARI",
              voters: 552
            },
            {
              station: "WOURO",
              voters: 1790
            },
            {
              station: "KILA",
              voters: 552
            },
            {
              station: "MBAI",
              voters: 1238
            },
          ],
          "EP GR I / A": [
            {
              station: "BOUKO",
              voters: 442
            },
            {
              station: "LOPERE",
              voters: 442
            },
            {
              station: "STADE",
              voters: 442
            },
          ],
          "EP HOY / A": [
            {
              station: "HOM",
              voters: 352
            },
            {
              station: "HOY",
              voters: 352
            },
            {
              station: "NOGUI",
              voters: 352
            },
            {
              station: "SERI",
              voters: 352
            },
            {
              station: "TEGUI",
              voters: 352
            },
            {
              station: "TORGUI",
              voters: 352
            },
            {
              station: "WANTE",
              voters: 352
            },
          ],
          "EP KONGLE / A": [
            {
              station: "DOPITI",
              voters: 350
            },
            {
              station: "KONGLE",
              voters: 350
            },
            {
              station: "MPAH",
              voters: 350
            },
            {
              station: "NALOUKBAROU",
              voters: 350
            },
            {
              station: "SAMBARO",
              voters: 350
            },
            {
              station: "WAKIRI",
              voters: 350
            },
          ],
          "EP KOURTESSE / A": [
            {
              station: "BEKA-ILOU",
              voters: 393
            },
            {
              station: "KOURTESSE",
              voters: 393
            },
            {
              station: "SANGUERE",
              voters: 393
            },
            {
              station: "TARTESSE",
              voters: 393
            },
            {
              station: "WOURO-KESSOUM",
              voters: 393
            },
          ],
          "EP LAGBAI / A": [
            {
              station: "LAGBA",
              voters: 334
            },
          ],
          "EP MANA / A": [
            {
              station: "BILAOU",
              voters: 279
            },
            {
              station: "DJONONTI",
              voters: 279
            },
            {
              station: "DOUGOUDOUGOU",
              voters: 279
            },
            {
              station: "DOUROU-SAKA",
              voters: 347
            },
            {
              station: "GAOUDOU",
              voters: 279
            },
            {
              station: "GARANTI",
              voters: 279
            },
            {
              station: "KAOUFAL",
              voters: 279
            },
            {
              station: "KOUNGOU-WATI",
              voters: 279
            },
            {
              station: "LAKAPOU",
              voters: 279
            },
            {
              station: "MAMBI",
              voters: 279
            },
            {
              station: "MANA",
              voters: 279
            },
            {
              station: "SABONGARI-MANA",
              voters: 279
            },
          ],
          "EP MANGO / A": [
            {
              station: "DAI",
              voters: 583
            },
            {
              station: "DEMBOULKO",
              voters: 583
            },
            {
              station: "HOULE",
              voters: 583
            },
            {
              station: "LONGTE",
              voters: 583
            },
            {
              station: "MANGATI",
              voters: 583
            },
            {
              station: "MANGO",
              voters: 583
            },
            {
              station: "NAKIRE",
              voters: 583
            },
            {
              station: "NIETCHE",
              voters: 583
            },
            {
              station: "SAGO",
              voters: 583
            },
            {
              station: "TOKTE",
              voters: 583
            },
          ],
          "EP MARKA / A": [
            {
              station: "HOLLE",
              voters: 305
            },
            {
              station: "MARKA",
              voters: 305
            },
            {
              station: "NGNAGUI",
              voters: 305
            },
            {
              station: "SAARI",
              voters: 305
            },
            {
              station: "SINTE",
              voters: 305
            },
          ],
          "EP MASSINA / A": [
            {
              station: "MASSINA",
              voters: 224
            },
          ],
          "EP MAYO DJARENDI / A": [
            {
              station: "DJONGUE",
              voters: 260
            },
            {
              station: "MAYO-DJARENDI",
              voters: 260
            },
            {
              station: "META-NDIAM",
              voters: 260
            },
            {
              station: "NGOUTIRI",
              voters: 260
            },
            {
              station: "TAROUA",
              voters: 260
            },
          ],
          "EP MAYO LEMPTE / A": [
            {
              station: "MAYO-LEMPTE",
              voters: 284
            },
          ],
          "EP OURO DJAMAN / C": [
            {
              station: "OURO",
              voters: 354
            },
            {
              station: "DJAMAN",
              voters: 118
            },
          ],
          "EP OURO KESSOUM POLI / A": [
            {
              station: "KESSOUM",
              voters: 236
            },
            {
              station: "POLI",
              voters: 149
            },
          ],
          "EP PAKSE / A": [
            {
              station: "FARKOMO",
              voters: 271
            },
            {
              station: "PAKSE",
              voters: 271
            },
          ],
          "EP PATE MANGA / A": [
            {
              station: "LENGUERBA",
              voters: 632
            },
            {
              station: "LONGOTE",
              voters: 632
            },
            {
              station: "PATE-MANGA",
              voters: 632
            },
            {
              station: "PATE-PETEL",
              voters: 632
            },
            {
              station: "WOURO-KESSOUM/PATE",
              voters: 632
            },
            {
              station: "MANGA",
              voters: 632
            },
          ],
          "EP PINTCHOUMBA / A": [
            {
              station: "GUERI",
              voters: 742
            },
            {
              station: "HAKATI",
              voters: 742
            },
            {
              station: "HATI",
              voters: 742
            },
            {
              station: "PINTCHOUMBA",
              voters: 3452
            },
            {
              station: "WINDE",
              voters: 2051
            },
            {
              station: "WINDE-PINTCHOUMBA",
              voters: 1401
            },
            {
              station: "WOTTI",
              voters: 1546
            },
          ],
          "EP RIGA / A": [
            {
              station: "GOPSE",
              voters: 226
            },
            {
              station: "GOSSE",
              voters: 226
            },
            {
              station: "RIGA",
              voters: 226
            },
            {
              station: "SANGUE",
              voters: 226
            },
            {
              station: "WARE",
              voters: 483
            },
          ],
          "EP SIRDJAM / A": [
            {
              station: "DOZE",
              voters: 985
            },
            {
              station: "SIRDJAM",
              voters: 985
            },
            {
              station: "SIRLAWE",
              voters: 1163
            },
          ],
          "EP TAPARE / A": [
            {
              station: "BOCKI",
              voters: 220
            },
            {
              station: "DAGDONGO",
              voters: 220
            },
            {
              station: "TAPARE",
              voters: 220
            },
            {
              station: "TRAVO",
              voters: 220
            },
          ],
          "EP TETE / A": [
            {
              station: "BARIGTE",
              voters: 434
            },
            {
              station: "BATE",
              voters: 434
            },
            {
              station: "NASSARAO",
              voters: 1576
            },
            {
              station: "/TETE",
              voters: 434
            },
            {
              station: "PONDE",
              voters: 434
            },
            {
              station: "TETE",
              voters: 434
            },
            {
              station: "YERNAMBO",
              voters: 434
            },
          ],
          "EP WATE / A": [
            {
              station: "BATILBAKO",
              voters: 376
            },
            {
              station: "GOUNDE",
              voters: 376
            },
            {
              station: "WATE",
              voters: 376
            },
          ],
          "EP YELLE / A": [
            {
              station: "HONLE",
              voters: 190
            },
            {
              station: "TORME",
              voters: 190
            },
            {
              station: "YELLE",
              voters: 190
            },
          ],
          "ESPL CHEF BANGWABA / A": [
            {
              station: "BANGWABA",
              voters: 162
            },
          ],
          "ESPL CHEF DOULE / A": [
            {
              station: "BOLI/DOULE",
              voters: 149
            },
            {
              station: "DOULE",
              voters: 149
            },
            {
              station: "GUITCHA",
              voters: 149
            },
          ],
          "ESPL CHEF FIGNOLE / A": [
            {
              station: "BALKOA",
              voters: 171
            },
            {
              station: "BANDE",
              voters: 171
            },
            {
              station: "KEBOULI",
              voters: 171
            },
            {
              station: "NANGWALE",
              voters: 171
            },
            {
              station: "NAZARETT",
              voters: 171
            },
            {
              station: "NINTELI",
              voters: 171
            },
          ],
          "ESPL CHEF SELLOU / A": [
            {
              station: "SELLOU",
              voters: 113
            },
          ],
          "ESPL CHEF SIKO / A": [
            {
              station: "BERINGTE",
              voters: 188
            },
            {
              station: "GNOREGOU",
              voters: 188
            },
            {
              station: "SIKO",
              voters: 188
            },
            {
              station: "WALTESSE",
              voters: 188
            },
          ],
          "MAIRIE / A": [
            {
              station: "DJALINGO-POLI",
              voters: 887
            },
            {
              station: "KOUSSILE",
              voters: 1287
            },
            {
              station: "LAINDE",
              voters: 699
            },
            {
              station: "LAMORDE",
              voters: 887
            },
          ],
        },
      },
      "MAYO LOUTI": {
        "FIGUIL": {
          "CETIC BIDZAR I / A": [
            {
              station: "BAWAKA",
              voters: 1458
            },
            {
              station: "BIDOUM",
              voters: 516
            },
            {
              station: "DOUKNOUKOU",
              voters: 516
            },
            {
              station: "GUEREME-BIDZAR",
              voters: 1390
            },
            {
              station: "MOSSORGO",
              voters: 516
            },
            {
              station: "PADAGAR",
              voters: 1428
            },
            {
              station: "BIDZAR",
              voters: 4239
            },
            {
              station: "PEFE",
              voters: 1899
            },
          ],
          "DELEGATION ELEVAGE / A": [
            {
              station: "LOPERE",
              voters: 1720
            },
            {
              station: "SARKISSANOU",
              voters: 2748
            },
          ],
          "EM FIGUIL / A": [
            {
              station: "BARINGUEL",
              voters: 681
            },
          ],
          "EP BADADJI / A": [
            {
              station: "BADADJI",
              voters: 740
            },
            {
              station: "MARCHE",
              voters: 740
            },
            {
              station: "LAMORDE-BADADJI",
              voters: 740
            },
          ],
          "EP BALIA / A": [
            {
              station: "BALIA",
              voters: 345
            },
            {
              station: "KOUSSOUM",
              voters: 691
            },
          ],
          "EP BATAO / A": [
            {
              station: "BAT",
              voters: 1244
            },
            {
              station: "BATAO",
              voters: 2488
            },
            {
              station: "BETKELE",
              voters: 1244
            },
            {
              station: "GADA",
              voters: 2650
            },
            {
              station: "MAYO",
              voters: 4215
            },
            {
              station: "GANGOU",
              voters: 1244
            },
            {
              station: "HAWA",
              voters: 1244
            },
            {
              station: "MARKAYA",
              voters: 1244
            },
            {
              station: "MOUGNA",
              voters: 1244
            },
            {
              station: "SIRAI",
              voters: 1244
            },
            {
              station: "OURO-TASSA",
              voters: 1244
            },
          ],
          "EP BAWAKA II / A": [
            {
              station: "MAZANGA",
              voters: 471
            },
            {
              station: "MOTOUP",
              voters: 471
            },
          ],
          "EP BIDZAR II / A": [
            {
              station: "BERGUI",
              voters: 912
            },
            {
              station: "GUIDIM",
              voters: 912
            },
            {
              station: "KADAMA",
              voters: 912
            },
            {
              station: "OURO-BOUBI",
              voters: 1321
            },
            {
              station: "PIMTILI",
              voters: 912
            },
          ],
          "EP BIOU / A": [
            {
              station: "BIOU",
              voters: 432
            },
          ],
          "EP BOUDVA / A": [
            {
              station: "BOUDVA",
              voters: 572
            },
          ],
          "EP DAHAL / A": [
            {
              station: "DAHAL",
              voters: 346
            },
          ],
          "EP DAWALA BIDZAR I / A": [
            {
              station: "DAWALA-BIDZAR",
              voters: 348
            },
            {
              station: "GUEGUELDE",
              voters: 348
            },
          ],
          "EP DELELE / A": [
            {
              station: "DELELE",
              voters: 1674
            },
            {
              station: "CARREFOUR",
              voters: 837
            },
          ],
          "EP DJABBE BIOU / A": [
            {
              station: "DJABBE-BIOU",
              voters: 648
            },
          ],
          "EP DJABILI KASKA / A": [
            {
              station: "DJABILI-KASKA",
              voters: 323
            },
            {
              station: "KOIDAWA",
              voters: 323
            },
          ],
          "EP DJOUGUI GABLA / A": [
            {
              station: "BADVOR",
              voters: 807
            },
            {
              station: "BOU",
              voters: 807
            },
            {
              station: "BOURDOUKOU",
              voters: 807
            },
            {
              station: "DIGAR",
              voters: 1965
            },
            {
              station: "DJOUGUI",
              voters: 807
            },
            {
              station: "GABLA",
              voters: 807
            },
            {
              station: "GOUDOUFGLA",
              voters: 807
            },
            {
              station: "MOSSOMO",
              voters: 807
            },
          ],
          "EP DOUNDEHI-BIOU / A": [
            {
              station: "DOUNDEHI-BIOU",
              voters: 412
            },
            {
              station: "MADAKAMNA",
              voters: 412
            },
          ],
          "EP DOUNDEHI-FIGUIL / A": [
            {
              station: "DOUNDEHI-FIGUIL",
              voters: 347
            },
            {
              station: "OURO-TCHAKA",
              voters: 347
            },
          ],
          "EP GOLOMO / A": [
            {
              station: "DIKTINGUE",
              voters: 1045
            },
            {
              station: "GOLOMO",
              voters: 826
            },
            {
              station: "MOURKOUFO",
              voters: 826
            },
          ],
          "EP GP II FIGUIL / A": [
            {
              station: "PERSONELS",
              voters: 346
            },
            {
              station: "SERVICES",
              voters: 346
            },
          ],
          "EP GROUPE I FIGUIL / A": [
            {
              station: "BINDIRE",
              voters: 1526
            },
          ],
          "EP GUEREME BIDZAR I / A": [
            {
              station: "GUEREME-LAM",
              voters: 437
            },
            {
              station: "OURO-FANDOU",
              voters: 437
            },
          ],
          "EP HELE / A": [
            {
              station: "HELE",
              voters: 441
            },
          ],
          "EP HINDJEODE / A": [
            {
              station: "HINDJEODE",
              voters: 599
            },
            {
              station: "MARIARIAKEU",
              voters: 961
            },
          ],
          "EP HOUMBAL / A": [
            {
              station: "HOUMBAL",
              voters: 228
            },
          ],
          "EP KARBA / A": [
            {
              station: "KARBA",
              voters: 242
            },
          ],
          "EP KAREWA / A": [
            {
              station: "KAREWA",
              voters: 3725
            },
            {
              station: "GOUDRON",
              voters: 1223
            },
          ],
          "EP KOLERE ISSA / A": [
            {
              station: "ISSA",
              voters: 1565
            },
            {
              station: "KOLLE",
              voters: 2697
            },
            {
              station: "LESS",
              voters: 1565
            },
            {
              station: "LOUTI",
              voters: 1565
            },
          ],
          "EP KOLLE / A": [
            {
              station: "OURO-DAMA",
              voters: 1132
            },
          ],
          "EP KONG KONG / A": [
            {
              station: "BAKOUNA",
              voters: 795
            },
            {
              station: "DABA",
              voters: 795
            },
            {
              station: "DEDAGLA",
              voters: 1716
            },
            {
              station: "KONG",
              voters: 1590
            },
            {
              station: "GORONG",
              voters: 795
            },
            {
              station: "KIRBILING",
              voters: 795
            },
            {
              station: "KORSIOUM",
              voters: 795
            },
            {
              station: "MODOUVOURZOUM",
              voters: 795
            },
          ],
          "EP LAM CENTRE / A": [
            {
              station: "LAM",
              voters: 2079
            },
            {
              station: "DOHONG-DOUVA",
              voters: 921
            },
            {
              station: "DOHONG-LAM",
              voters: 1158
            },
            {
              station: "KAPTA-LAM",
              voters: 1195
            },
            {
              station: "KISOYOMO",
              voters: 921
            },
            {
              station: "KOUKOY",
              voters: 921
            },
          ],
          "EP LAMORDE / A": [
            {
              station: "LAMORDE-FIGUIL",
              voters: 867
            },
          ],
          "EP LAMORDE BAINAWA / A": [
            {
              station: "LAMORDE",
              voters: 1361
            },
            {
              station: "BAINAWARE",
              voters: 1361
            },
          ],
          "EP MIZUKE II / A": [
            {
              station: "MIZUKE",
              voters: 1084
            },
          ],
          "EP MORE-SINGAI / A": [
            {
              station: "MORE-SINGAI",
              voters: 537
            },
          ],
          "EP MOULVOUDA / A": [
            {
              station: "MOULVOUDA",
              voters: 531
            },
          ],
          "EP OURO MAREY / A": [
            {
              station: "OURO-MAREY",
              voters: 409
            },
          ],
          "EP OURO TALAGA / A": [
            {
              station: "OURO",
              voters: 137
            },
            {
              station: "TALAGA",
              voters: 137
            },
          ],
          "EP PELGUE / A": [
            {
              station: "NGOROWA",
              voters: 695
            },
            {
              station: "PELGUE",
              voters: 695
            },
          ],
          "EP WAFANGO / A": [
            {
              station: "ROMPO",
              voters: 3631
            },
            {
              station: "WAFANGO-FIGUIL",
              voters: 1073
            },
          ],
          "EP WALEWOL SO'O / A": [
            {
              station: "MOKODONG",
              voters: 322
            },
            {
              station: "NGOULDI",
              voters: 322
            },
            {
              station: "WALEWOL",
              voters: 322
            },
            {
              station: "SO'O",
              voters: 322
            },
          ],
          "EP WAYEBA / A": [
            {
              station: "MAYEL",
              voters: 316
            },
            {
              station: "KEWE",
              voters: 316
            },
            {
              station: "WAYEBA",
              voters: 316
            },
          ],
          "ESPL CHEF BADIA / A": [
            {
              station: "BADIA",
              voters: 197
            },
          ],
          "ESPL CHEF DAWALA BIOU / A": [
            {
              station: "DAWALA-BIOU",
              voters: 390
            },
          ],
          "ESPL CHEF DEBELZE / A": [
            {
              station: "DEBELZE",
              voters: 131
            },
          ],
          "ESPL CHEF DJABBE FIGUIL / A": [
            {
              station: "DJABBE-FIGUIL",
              voters: 563
            },
          ],
          "ESPL CHEF DJOUGUI BOH / A": [
            {
              station: "BOH",
              voters: 636
            },
            {
              station: "CENTRE",
              voters: 7498
            },
            {
              station: "DABOUR",
              voters: 636
            },
            {
              station: "DAWAI",
              voters: 636
            },
            {
              station: "KERING",
              voters: 1113
            },
            {
              station: "FIGUIL",
              voters: 1607
            },
            {
              station: "KORIOK",
              voters: 636
            },
          ],
          "ESPL CHEF DOUVA / A": [
            {
              station: "DOUVA",
              voters: 327
            },
          ],
          "ESPL CHEF GUIDI / A": [
            {
              station: "GUIDI",
              voters: 252
            },
            {
              station: "MAMPAR",
              voters: 252
            },
          ],
          "ESPL CHEF KOLERE MOUNDANG / A": [
            {
              station: "DOH-MAYO-FIGUIL",
              voters: 1021
            },
            {
              station: "KOLERE",
              voters: 2586
            },
            {
              station: "MOUNDANG",
              voters: 1021
            },
          ],
          "ESPL CHEF MOKOTE / A": [
            {
              station: "MOKOTE",
              voters: 177
            },
          ],
          "ESPL CHEF NIOUA / A": [
            {
              station: "NIOUA",
              voters: 241
            },
          ],
          "ESPL ECOLE DES PARENTS BAFOUNI / A": [
            {
              station: "BAFOUNI",
              voters: 363
            },
          ],
          "LYCEE FIGUIL / A": [
            {
              station: "OURO-NGARA",
              voters: 638
            },
            {
              station: "TANGAWOL",
              voters: 638
            },
          ],
          "LYCEE LAM / A": [
            {
              station: "KARBAZA",
              voters: 237
            },
          ],
        },
        "GUIDER": {
          "DELEGATION DOMAINE GUIDER / A": [
            {
              station: "PRISON",
              voters: 94
            },
          ],
          "E M BEBERE GADA MAYO / A": [
            {
              station: "BEBERE",
              voters: 6429
            },
            {
              station: "OURO-SOUAIBOU",
              voters: 1047
            },
            {
              station: "GADJERE",
              voters: 1047
            },
          ],
          "E M MAIDADI SALI / A": [
            {
              station: "MAIDADI",
              voters: 2838
            },
            {
              station: "SALI",
              voters: 3221
            },
          ],
          "E.P. DE OURO-BARA / A": [
            {
              station: "DJAFAROU",
              voters: 250
            },
            {
              station: "OURO-BARA",
              voters: 250
            },
          ],
          "EP BABARKINE / A": [
            {
              station: "BABARKINE",
              voters: 560
            },
            {
              station: "BAMMO",
              voters: 560
            },
            {
              station: "NGAGAN",
              voters: 560
            },
            {
              station: "NGANDA",
              voters: 917
            },
            {
              station: "GUIDER",
              voters: 2082
            },
            {
              station: "NGOLIRDE",
              voters: 560
            },
            {
              station: "OURO",
              voters: 45718
            },
            {
              station: "BAMO",
              voters: 1038
            },
            {
              station: "OURO-SATAI",
              voters: 560
            },
          ],
          "EP BABOURI / A": [
            {
              station: "BABOURI",
              voters: 334
            },
            {
              station: "CASIER",
              voters: 334
            },
            {
              station: "DERI",
              voters: 334
            },
            {
              station: "SODJOY",
              voters: 334
            },
          ],
          "EP BALGA / A": [
            {
              station: "BALGA",
              voters: 599
            },
          ],
          "EP BANG / A": [
            {
              station: "BANG",
              voters: 704
            },
          ],
          "EP BARIKI DJAMNE / A": [
            {
              station: "BARIKI",
              voters: 399
            },
            {
              station: "DJAMANE",
              voters: 399
            },
          ],
          "EP BEBERE SOULEY / A": [
            {
              station: "MANA",
              voters: 535
            },
            {
              station: "RIBAO",
              voters: 1064
            },
          ],
          "EP BELI / A": [
            {
              station: "BELI",
              voters: 866
            },
            {
              station: "OURO-BADAI",
              voters: 866
            },
          ],
          "EP BIMA / A": [
            {
              station: "BIMA",
              voters: 746
            },
            {
              station: "CARREFOUR",
              voters: 494
            },
            {
              station: "OURO-TCHANGOU",
              voters: 373
            },
          ],
          "EP BISSOLI / A": [
            {
              station: "BISSOLI",
              voters: 521
            },
            {
              station: "KAGOUMA",
              voters: 703
            },
          ],
          "EP BOBOLDOU / A": [
            {
              station: "BOBOLDOU",
              voters: 416
            },
            {
              station: "MARI",
              voters: 416
            },
            {
              station: "TAR",
              voters: 792
            },
            {
              station: "TCHOUCKOL",
              voters: 416
            },
          ],
          "EP BOUSSA / A": [
            {
              station: "BOUSSA",
              voters: 438
            },
          ],
          "EP BROUWOY / A": [
            {
              station: "BOURWOUY",
              voters: 995
            },
            {
              station: "HIRGUILAM",
              voters: 995
            },
            {
              station: "MEDEBING",
              voters: 995
            },
            {
              station: "SAMKA",
              voters: 995
            },
          ],
          "EP DABA DABA / A": [
            {
              station: "DABA-DABA",
              voters: 282
            },
            {
              station: "LARMA",
              voters: 399
            },
            {
              station: "TEKELI",
              voters: 282
            },
          ],
          "EP DAFA LE HAUT / A": [
            {
              station: "DAFA",
              voters: 2154
            },
            {
              station: "BAS",
              voters: 588
            },
            {
              station: "HAUT",
              voters: 588
            },
            {
              station: "POKA",
              voters: 588
            },
          ],
          "EP DANGAR / A": [
            {
              station: "DANGAR",
              voters: 363
            },
            {
              station: "DONFANA",
              voters: 363
            },
          ],
          "EP DES PARENTS NDJARA / A": [
            {
              station: "KOLAR",
              voters: 227
            },
            {
              station: "NDJARA",
              voters: 227
            },
            {
              station: "VOURMOUTCH",
              voters: 227
            },
          ],
          "EP DIRI / A": [
            {
              station: "DIRI",
              voters: 447
            },
            {
              station: "LONDA",
              voters: 447
            },
          ],
          "EP DJABI / A": [
            {
              station: "DJABI",
              voters: 1014
            },
            {
              station: "DJOMA",
              voters: 1754
            },
            {
              station: "ISSA",
              voters: 1014
            },
            {
              station: "TCHAMPALAM",
              voters: 1014
            },
          ],
          "EP DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 1193
            },
          ],
          "EP DJOMA BOKO / A": [
            {
              station: "BOKO",
              voters: 490
            },
          ],
          "EP DOUROUM / A": [
            {
              station: "BANA",
              voters: 738
            },
            {
              station: "DOUROUM",
              voters: 3896
            },
            {
              station: "GADA",
              voters: 3343
            },
            {
              station: "MAYO",
              voters: 5139
            },
            {
              station: "LAMORDE",
              voters: 5790
            },
            {
              station: "NASSARAO",
              voters: 738
            },
            {
              station: "PLATEAU",
              voters: 738
            },
            {
              station: "SODECOTON",
              voters: 738
            },
          ],
          "EP GALAO / A": [
            {
              station: "GALAO",
              voters: 348
            },
            {
              station: "TASKAOU",
              voters: 348
            },
          ],
          "EP GANDA GOLOMBE / A": [
            {
              station: "GOLOMBE",
              voters: 4228
            },
            {
              station: "KONA",
              voters: 1521
            },
            {
              station: "OURO-BASKODJE",
              voters: 356
            },
          ],
          "EP GARA GOLOMBE / A": [
            {
              station: "HERI",
              voters: 1087
            },
          ],
          "EP GARA GUIDER / A": [
            {
              station: "DJARA",
              voters: 606
            },
            {
              station: "GARA",
              voters: 1129
            },
            {
              station: "NDAOUDJI",
              voters: 606
            },
          ],
          "EP GATOUGUEL / A": [
            {
              station: "DANSANG",
              voters: 1006
            },
            {
              station: "GATOUGUEL",
              voters: 1006
            },
          ],
          "EP GAVAL / A": [
            {
              station: "GAVAL",
              voters: 784
            },
            {
              station: "BAIGODJE",
              voters: 408
            },
            {
              station: "SINGLIV",
              voters: 408
            },
            {
              station: "VONOZOUM",
              voters: 408
            },
          ],
          "EP GOROM / A": [
            {
              station: "GOROM",
              voters: 1018
            },
            {
              station: "KOSSEYEL",
              voters: 1600
            },
            {
              station: "-DJOHI",
              voters: 1068
            },
          ],
          "EP GOULONG FALI / A": [
            {
              station: "GOULONG",
              voters: 2600
            },
            {
              station: "FALI",
              voters: 520
            },
            {
              station: "KARLAHI",
              voters: 520
            },
            {
              station: "OURO-BOUBA",
              voters: 520
            },
            {
              station: "OURO-GODO",
              voters: 520
            },
            {
              station: "OURO-NGNEBE",
              voters: 520
            },
          ],
          "EP GUEZEOU / A": [
            {
              station: "GUEZEOU",
              voters: 417
            },
            {
              station: "OURO-LOGOM",
              voters: 417
            },
          ],
          "EP KAFINAROU / A": [
            {
              station: "KAFINAROU",
              voters: 235
            },
            {
              station: "OURO-IYA",
              voters: 235
            },
          ],
          "EP KAIGAMA / A": [
            {
              station: "KAIGAMA",
              voters: 4249
            },
            {
              station: "KESSOUM",
              voters: 4316
            },
          ],
          "EP KAKALA / A": [
            {
              station: "KAKALA",
              voters: 555
            },
            {
              station: "KARIA",
              voters: 555
            },
          ],
          "EP KAPTA MADI / A": [
            {
              station: "BEDEVE",
              voters: 488
            },
            {
              station: "KAPTA",
              voters: 269
            },
            {
              station: "MADI",
              voters: 789
            },
            {
              station: "MASGAM",
              voters: 269
            },
            {
              station: "OURO-TOUWE",
              voters: 488
            },
          ],
          "EP KASIER / A": [
            {
              station: "KASIER",
              voters: 334
            },
          ],
          "EP KERGUENG / A": [
            {
              station: "KERGUENG",
              voters: 4266
            },
          ],
          "EP KOINA MESSINGUE / A": [
            {
              station: "MESSENGUE",
              voters: 460
            },
          ],
          "EP KOLA / A": [
            {
              station: "BAINGA",
              voters: 977
            },
            {
              station: "KOLA",
              voters: 4024
            },
          ],
          "EP KOSSI / A": [
            {
              station: "BEROU",
              voters: 521
            },
            {
              station: "KOSSI",
              voters: 521
            },
          ],
          "EP LAMORDE / A": [
            {
              station: "BETCHE",
              voters: 1870
            },
            {
              station: "SOULKATA",
              voters: 1870
            },
          ],
          "EP LARBACK / A": [
            {
              station: "LARBACK",
              voters: 827
            },
            {
              station: "MANGRAYEL",
              voters: 827
            },
            {
              station: "OURO-DOUVA",
              voters: 827
            },
            {
              station: "OURO-TCHAKORGUEL",
              voters: 827
            },
          ],
          "EP LIBE / A": [
            {
              station: "DEGUERI",
              voters: 526
            },
            {
              station: "LIBE",
              voters: 820
            },
          ],
          "EP LOMBEL / A": [
            {
              station: "LOMBEL",
              voters: 397
            },
          ],
          "EP LOUGGUERE / A": [
            {
              station: "YOUKVOUNA",
              voters: 829
            },
          ],
          "EP MAISSANDA / A": [
            {
              station: "MAISSANDA",
              voters: 213
            },
          ],
          "EP MALMAS / A": [
            {
              station: "MALMAS",
              voters: 206
            },
          ],
          "EP MALWOY / A": [
            {
              station: "GOLVONG",
              voters: 448
            },
            {
              station: "MALWOY",
              voters: 448
            },
          ],
          "EP MATAFAL / A": [
            {
              station: "MATAFAL",
              voters: 461
            },
          ],
          "EP MATAFALRE / A": [
            {
              station: "MATAFALRE",
              voters: 462
            },
            {
              station: "TCHIKAF",
              voters: 462
            },
          ],
          "EP MATAIBAO / A": [
            {
              station: "KIRIRAMBO",
              voters: 797
            },
            {
              station: "MATAIBAO",
              voters: 641
            },
            {
              station: "NELBI",
              voters: 641
            },
          ],
          "EP MAYO KEWE / A": [
            {
              station: "KEWE",
              voters: 578
            },
            {
              station: "TALDAM",
              voters: 578
            },
          ],
          "EP MAYO KORA / A": [
            {
              station: "KORA",
              voters: 356
            },
          ],
          "EP MAYO LOUE / A": [
            {
              station: "MAYO-LOUE",
              voters: 827
            },
            {
              station: "OURO-DJAOURO",
              voters: 2189
            },
            {
              station: "NGOUFDA",
              voters: 827
            },
            {
              station: "OURO-TOUPOURI",
              voters: 827
            },
            {
              station: "WALEWOL",
              voters: 1060
            },
            {
              station: "NOME",
              voters: 827
            },
          ],
          "EP MAYO MALAO / A": [
            {
              station: "DOKOYOUM",
              voters: 235
            },
            {
              station: "KOUSMADOUMA",
              voters: 235
            },
          ],
          "EP MAYO SOMBRE / A": [
            {
              station: "MAYO-SOMBRE",
              voters: 201
            },
          ],
          "EP MAZAVLA / A": [
            {
              station: "MAZAVLA",
              voters: 152
            },
          ],
          "EP MEDEZEM / A": [
            {
              station: "MEDEZEM",
              voters: 331
            },
          ],
          "EP MELEDEM / A": [
            {
              station: "MBIRMIDIGUIP",
              voters: 546
            },
            {
              station: "MELEDEM",
              voters: 371
            },
          ],
          "EP MENDJEKER / A": [
            {
              station: "DALGAN",
              voters: 317
            },
            {
              station: "FILOU",
              voters: 317
            },
            {
              station: "MENDJEKER",
              voters: 317
            },
            {
              station: "TCHIKAFAI",
              voters: 317
            },
            {
              station: "TIRLAO",
              voters: 317
            },
          ],
          "EP MESSO / A": [
            {
              station: "BOLO",
              voters: 221
            },
          ],
          "EP MOKORVONG / A": [
            {
              station: "GOUDACK",
              voters: 512
            },
            {
              station: "MAYO-SANGANARE",
              voters: 512
            },
            {
              station: "MOKORVONG",
              voters: 977
            },
            {
              station: "-MOUSGOUY",
              voters: 512
            },
            {
              station: "KATCHALLA",
              voters: 512
            },
            {
              station: "TAWAN",
              voters: 512
            },
          ],
          "EP MOUSGOY / A": [
            {
              station: "BANAM",
              voters: 462
            },
            {
              station: "MARMA",
              voters: 462
            },
            {
              station: "MOUSGOY",
              voters: 1444
            },
            {
              station: "ZAGA",
              voters: 739
            },
          ],
          "EP NDIAM ETINA / A": [
            {
              station: "GOUFOURE",
              voters: 600
            },
            {
              station: "NDIAM",
              voters: 1761
            },
            {
              station: "ETINA",
              voters: 1120
            },
            {
              station: "TOLDOU",
              voters: 600
            },
          ],
          "EP OURO ALHADJI / A": [
            {
              station: "DJEDJENGUE",
              voters: 726
            },
            {
              station: "ALHADJI",
              voters: 1366
            },
            {
              station: "OURO-ALHADJI",
              voters: 726
            },
            {
              station: "TONKOLO",
              voters: 726
            },
          ],
          "EP OURO HAOUSSA / A": [
            {
              station: "BARA",
              voters: 1272
            },
          ],
          "EP OURO TARA / A": [
            {
              station: "OURO-TARA",
              voters: 611
            },
          ],
          "EP PAHA / A": [
            {
              station: "BALDA",
              voters: 496
            },
            {
              station: "PAHA",
              voters: 617
            },
          ],
          "EP RIBAO GOLOMBE / A": [
            {
              station: "TIMOTI",
              voters: 529
            },
          ],
          "EP SARWA / A": [
            {
              station: "SARWA",
              voters: 271
            },
          ],
          "EP SIBRE MALAYE / A": [
            {
              station: "SIBRE",
              voters: 646
            },
            {
              station: "MALAYE",
              voters: 306
            },
          ],
          "EP SIBRETORDOU / A": [
            {
              station: "TOROU",
              voters: 340
            },
          ],
          "EP SINGAIDI / A": [
            {
              station: "SINGAIDI",
              voters: 532
            },
          ],
          "EP SODALOU / A": [
            {
              station: "SODALOU",
              voters: 534
            },
          ],
          "EP SORAWEL / A": [
            {
              station: "SORAWEL",
              voters: 955
            },
          ],
          "EP SOSSILIM / A": [
            {
              station: "BABAGUEL",
              voters: 414
            },
            {
              station: "MAYEL",
              voters: 2287
            },
            {
              station: "TCHOLLI",
              voters: 414
            },
            {
              station: "NGONDOUROU",
              voters: 699
            },
            {
              station: "SOSSILIM",
              voters: 414
            },
            {
              station: "WADJERE",
              voters: 699
            },
          ],
          "EP SOUCKOUNDOU / A": [
            {
              station: "SOUCKOUDOU",
              voters: 555
            },
          ],
          "EP TALAZOUAI / A": [
            {
              station: "BAIDAY",
              voters: 301
            },
            {
              station: "TALAZOUAI",
              voters: 301
            },
            {
              station: "TILBIT",
              voters: 301
            },
          ],
          "EP TCHEKAL / A": [
            {
              station: "PAZARA",
              voters: 1055
            },
            {
              station: "PONT",
              voters: 888
            },
            {
              station: "TCHEKAL",
              voters: 888
            },
          ],
          "EP TCHONTCHI / A": [
            {
              station: "TCHONTCHI",
              voters: 1804
            },
          ],
          "EP TIKELKE / A": [
            {
              station: "TIKELKE",
              voters: 436
            },
            {
              station: "TOFOR",
              voters: 436
            },
            {
              station: "YAPERE",
              voters: 436
            },
            {
              station: "ALIM",
              voters: 436
            },
          ],
          "EP TIMBO / A": [
            {
              station: "TIMBO",
              voters: 91
            },
          ],
          "EP TRA / A": [
            {
              station: "BOULOU",
              voters: 376
            },
            {
              station: "DJARENDI",
              voters: 376
            },
            {
              station: "DOULA",
              voters: 376
            },
          ],
          "EP WALEWOL GADE / A": [
            {
              station: "DANAYEL",
              voters: 397
            },
            {
              station: "WALEWOL-GADE",
              voters: 262
            },
          ],
          "EP WINDE LOUE / A": [
            {
              station: "WINDE-LOUE",
              voters: 423
            },
          ],
          "EP WINDE YOLA / A": [
            {
              station: "BABASALACK",
              voters: 291
            },
            {
              station: "BOKO-DOUROUM",
              voters: 291
            },
            {
              station: "MADEKRE",
              voters: 291
            },
            {
              station: "OURO-LESS",
              voters: 291
            },
          ],
          "EP YAPERE / A": [
            {
              station: "BODONG",
              voters: 473
            },
            {
              station: "NDOLOM",
              voters: 473
            },
            {
              station: "YAPARE",
              voters: 473
            },
          ],
          "EPA SANGUERE / A": [
            {
              station: "AHMADOU",
              voters: 4028
            },
            {
              station: "KOLAS",
              voters: 12528
            },
            {
              station: "YAOUNDE",
              voters: 3940
            },
            {
              station: "FALAMA",
              voters: 4560
            },
            {
              station: "HAMADOU",
              voters: 3594
            },
            {
              station: "DAWA",
              voters: 3594
            },
            {
              station: "MOKOLO",
              voters: 3940
            },
            {
              station: "MOUSSA",
              voters: 3940
            },
            {
              station: "SANGUERE",
              voters: 3940
            },
          ],
          "ESPL CHEF BASSIRA / A": [
            {
              station: "BASSIRA",
              voters: 264
            },
          ],
          "ESPL CHEF BEBERE GADA MAYO / A": [
            {
              station: "HASSOUMI",
              voters: 886
            },
          ],
          "ESPL CHEF BOHONG / A": [
            {
              station: "BOHONG",
              voters: 803
            },
            {
              station: "MAL",
              voters: 4550
            },
            {
              station: "SIDDIKI",
              voters: 956
            },
          ],
          "ESPL CHEF BOUDJOULKOU / A": [
            {
              station: "BOUDJOULKOU",
              voters: 220
            },
          ],
          "ESPL CHEF DALE / A": [
            {
              station: "DALE",
              voters: 390
            },
            {
              station: "FITIM",
              voters: 390
            },
            {
              station: "PARKINE",
              voters: 747
            },
            {
              station: "SABERE",
              voters: 390
            },
          ],
          "ESPL CHEF DELEGUE I / A": [
            {
              station: "DELEGUE",
              voters: 3051
            },
            {
              station: "CENTRE",
              voters: 1513
            },
          ],
          "ESPL CHEF DEM / A": [
            {
              station: "DEM",
              voters: 750
            },
            {
              station: "GANDA",
              voters: 1372
            },
            {
              station: "LELING",
              voters: 541
            },
            {
              station: "BANI",
              voters: 303
            },
            {
              station: "GAOUDJA",
              voters: 303
            },
          ],
          "ESPL CHEF DJABBIRE RAOU / A": [
            {
              station: "DJABBIRE",
              voters: 244
            },
            {
              station: "RAOU",
              voters: 244
            },
          ],
          "ESPL CHEF DJAMTARI / A": [
            {
              station: "DJAMTARI",
              voters: 650
            },
            {
              station: "OURO-KESSOUM",
              voters: 4938
            },
          ],
          "ESPL CHEF DJARENGOL / A": [
            {
              station: "DJARENGOL",
              voters: 614
            },
            {
              station: "DAFAN",
              voters: 320
            },
          ],
          "ESPL CHEF DJOUNDE / A": [
            {
              station: "DJOUNDE",
              voters: 254
            },
          ],
          "ESPL CHEF DOBOULWOY / A": [
            {
              station: "DOUBOULWOUY",
              voters: 145
            },
          ],
          "ESPL CHEF DOUBAS / A": [
            {
              station: "DOUBAS",
              voters: 301
            },
          ],
          "ESPL CHEF DOUBI / A": [
            {
              station: "DOUBI",
              voters: 364
            },
          ],
          "ESPL CHEF GADA KORGOU / A": [
            {
              station: "KORGOU",
              voters: 1217
            },
          ],
          "ESPL CHEF GANGOUR BORI / A": [
            {
              station: "DALAMI",
              voters: 216
            },
            {
              station: "GANGOUR",
              voters: 216
            },
            {
              station: "BORI",
              voters: 216
            },
            {
              station: "SESSARA",
              voters: 216
            },
          ],
          "ESPL CHEF GAVAL LAWAN TODOU / A": [
            {
              station: "LAWAN",
              voters: 376
            },
            {
              station: "TODOU",
              voters: 1203
            },
            {
              station: "KAFKAI",
              voters: 559
            },
          ],
          "ESPL CHEF GOLOMO / A": [
            {
              station: "GOLOMO",
              voters: 242
            },
          ],
          "ESPL CHEF GONDOUROU / A": [
            {
              station: "GONDOUROU",
              voters: 285
            },
          ],
          "ESPL CHEF GORTONG / A": [
            {
              station: "GORTONG",
              voters: 209
            },
          ],
          "ESPL CHEF GOULDANWOL / A": [
            {
              station: "DJIMTEL",
              voters: 142
            },
            {
              station: "GOULDANWOL",
              voters: 142
            },
            {
              station: "OURO-HAOUSSA",
              voters: 553
            },
          ],
          "ESPL CHEF GUIRLAO / A": [
            {
              station: "GUIRLAO",
              voters: 103
            },
            {
              station: "LEREBI",
              voters: 103
            },
          ],
          "ESPL CHEF KAIGAMA III / A": [
            {
              station: "III",
              voters: 1627
            },
          ],
          "ESPL CHEF KARBAY / A": [
            {
              station: "KARMBAY",
              voters: 206
            },
          ],
          "ESPL CHEF KEREING / A": [
            {
              station: "KEREING",
              voters: 387
            },
          ],
          "ESPL CHEF KOINA MAIGARI / A": [
            {
              station: "KOINA",
              voters: 833
            },
            {
              station: "MAIGARI",
              voters: 373
            },
          ],
          "ESPL CHEF KORAKE / A": [
            {
              station: "KADJONKA",
              voters: 449
            },
            {
              station: "KORAKE",
              voters: 449
            },
            {
              station: "MADIA",
              voters: 593
            },
          ],
          "ESPL CHEF KOSSEYEL DANEYEL / A": [
            {
              station: "DANEYEL",
              voters: 135
            },
          ],
          "ESPL CHEF LOUGGUERE DAWAI / A": [
            {
              station: "DAWAI",
              voters: 191
            },
          ],
          "ESPL CHEF LOUGGUERE WALA / A": [
            {
              station: "DJABE",
              voters: 437
            },
            {
              station: "LOUGGUERE",
              voters: 1176
            },
            {
              station: "WALA",
              voters: 156
            },
          ],
          "ESPL CHEF MALIA / A": [
            {
              station: "MALIA",
              voters: 229
            },
          ],
          "ESPL CHEF MAMBAZA / A": [
            {
              station: "MAMBAZA",
              voters: 368
            },
            {
              station: "KOUE",
              voters: 184
            },
            {
              station: "VAGAMA",
              voters: 677
            },
          ],
          "ESPL CHEF MANTCHOUROUF / A": [
            {
              station: "MANTCHOUROUF",
              voters: 130
            },
            {
              station: "ADJIA",
              voters: 130
            },
          ],
          "ESPL CHEF MAYEL KOGUI / A": [
            {
              station: "MAYEL-KOGUI",
              voters: 466
            },
          ],
          "ESPL CHEF MAYEL POLI / A": [
            {
              station: "POLI",
              voters: 603
            },
            {
              station: "SOUPTABANI",
              voters: 1369
            },
            {
              station: "SADOU",
              voters: 986
            },
            {
              station: "YOLDE",
              voters: 603
            },
            {
              station: "KAREHI",
              voters: 603
            },
          ],
          "ESPL CHEF MAYO SIWA / A": [
            {
              station: "MAYO-SIWO",
              voters: 215
            },
          ],
          "ESPL CHEF MBIRDIF / A": [
            {
              station: "LOUMAS",
              voters: 427
            },
          ],
          "ESPL CHEF MBOR / A": [
            {
              station: "MBOR",
              voters: 230
            },
          ],
          "ESPL CHEF MELEMLEM / A": [
            {
              station: "MELEMLEM",
              voters: 488
            },
          ],
          "ESPL CHEF MODJONGO / A": [
            {
              station: "MODJONGO",
              voters: 1396
            },
            {
              station: "DEWA",
              voters: 349
            },
            {
              station: "GOULE",
              voters: 349
            },
            {
              station: "HAMAN",
              voters: 349
            },
            {
              station: "WABI",
              voters: 349
            },
            {
              station: "OUSMANOU",
              voters: 349
            },
          ],
          "ESPL CHEF MOKORVONG MAYO LOUE / A": [
            {
              station: "LOUE",
              voters: 465
            },
          ],
          "ESPL CHEF MONGORO WAIDONGO / A": [
            {
              station: "MONGORO",
              voters: 223
            },
            {
              station: "WAIDONGO",
              voters: 223
            },
          ],
          "ESPL CHEF MORDOY / A": [
            {
              station: "OURO-MORDOY",
              voters: 80
            },
          ],
          "ESPL CHEF MOUKOI / A": [
            {
              station: "DJIBAOU",
              voters: 238
            },
            {
              station: "MOUKOI",
              voters: 238
            },
          ],
          "ESPL CHEF NDOUA / A": [
            {
              station: "BADESSI",
              voters: 795
            },
            {
              station: "BAMBALO",
              voters: 795
            },
            {
              station: "NDOUA",
              voters: 542
            },
            {
              station: "NAI",
              voters: 800
            },
          ],
          "ESPL CHEF NORGO / A": [
            {
              station: "NDONDOLO",
              voters: 887
            },
            {
              station: "NORGO",
              voters: 887
            },
          ],
          "ESPL CHEF OURO ALKALI / A": [
            {
              station: "ALKALI",
              voters: 1236
            },
            {
              station: "SAGAMA",
              voters: 1236
            },
          ],
          "ESPL CHEF OURO BAMO / A": [
            {
              station: "MATHIEU",
              voters: 478
            },
            {
              station: "KOUNA",
              voters: 478
            },
            {
              station: "NDALFA",
              voters: 478
            },
            {
              station: "SERME",
              voters: 700
            },
          ],
          "ESPL CHEF OURO BOCKI / A": [
            {
              station: "MAGADJI",
              voters: 469
            },
            {
              station: "OURO-BOCKI",
              voters: 469
            },
          ],
          "ESPL CHEF OURO BOKO / A": [
            {
              station: "OURO-BOKO",
              voters: 251
            },
            {
              station: "TCHOUMBOUL",
              voters: 251
            },
          ],
          "ESPL CHEF OURO BOUBA / A": [
            {
              station: "BARKAO",
              voters: 77
            },
            {
              station: "LOUGGA",
              voters: 817
            },
            {
              station: "BOUBA",
              voters: 4654
            },
          ],
          "ESPL CHEF OURO DAMA / A": [
            {
              station: "DAMA",
              voters: 1479
            },
          ],
          "ESPL CHEF OURO MORDOY / A": [
            {
              station: "OURLANG",
              voters: 258
            },
            {
              station: "MORDOY",
              voters: 258
            },
          ],
          "ESPL CHEF OURO NGNERE / A": [
            {
              station: "NGNERE",
              voters: 258
            },
          ],
          "ESPL CHEF OURO SADAY / A": [
            {
              station: "OURO-SADAY",
              voters: 213
            },
          ],
          "ESPL CHEF OURO WACSINE / A": [
            {
              station: "VOUNDOU",
              voters: 144
            },
          ],
          "ESPL CHEF PADJARA YAYA / A": [
            {
              station: "YAYA",
              voters: 167
            },
          ],
          "ESPL CHEF PAPRENKI / A": [
            {
              station: "LOUBACK",
              voters: 294
            },
            {
              station: "MOTORDOKO",
              voters: 294
            },
            {
              station: "PAPRENKI",
              voters: 294
            },
          ],
          "ESPL CHEF POMLA / A": [
            {
              station: "POMLA",
              voters: 172
            },
          ],
          "ESPL CHEF POUGOU / A": [
            {
              station: "POUGOU",
              voters: 528
            },
          ],
          "ESPL CHEF ROUMDE / A": [
            {
              station: "BIRI",
              voters: 525
            },
            {
              station: "IDEAL",
              voters: 525
            },
            {
              station: "KORAYEL",
              voters: 525
            },
            {
              station: "ROUMDE",
              voters: 525
            },
          ],
          "ESPL CHEF SEBORE BAILA / A": [
            {
              station: "GAOUDALI",
              voters: 195
            },
            {
              station: "HARDE",
              voters: 195
            },
            {
              station: "KAYEFI",
              voters: 195
            },
          ],
          "ESPL CHEF SOULKANDOU / A": [
            {
              station: "SOULKANDOU",
              voters: 253
            },
          ],
          "ESPL CHEF TCHAKADJAM / A": [
            {
              station: "NDABALA",
              voters: 364
            },
            {
              station: "TCHAKADJAMWO",
              voters: 364
            },
          ],
          "ESPL CHEF WALDE BORORO / A": [
            {
              station: "WALDE",
              voters: 562
            },
            {
              station: "BORORO",
              voters: 562
            },
          ],
          "ESPL CHEF WALEWOL ROUMBO / A": [
            {
              station: "ROUMBO",
              voters: 233
            },
          ],
          "ESPL CHEF WOULEP / A": [
            {
              station: "TCHADA",
              voters: 254
            },
            {
              station: "GAOULA",
              voters: 254
            },
            {
              station: "WOULEP",
              voters: 254
            },
          ],
          "ESPL CHEF ZAGA DARBA / A": [
            {
              station: "DARBA",
              voters: 277
            },
          ],
          "GIC MAYO DAKOUME / A": [
            {
              station: "DAKOUME",
              voters: 180
            },
          ],
          "HAGAR CHEFFERIE HERIYEL / A": [
            {
              station: "HERIYEL",
              voters: 89
            },
          ],
          "LYCEE CLASSIQUE GUIDER / A": [
            {
              station: "DJAOURO",
              voters: 28270
            },
            {
              station: "YAMASINO",
              voters: 1643
            },
          ],
          "MAGASIN SODECOTON / A": [
            {
              station: "LAKARWAR",
              voters: 293
            },
          ],
          "SAR/SM GUIDER / A": [
            {
              station: "CAMP",
              voters: 1540
            },
            {
              station: "ADMINISTRATIF",
              voters: 1446
            },
            {
              station: "THOMAS",
              voters: 561
            },
          ],
        },
        "MAYO-OULO": {
          "BORNE FONTAINE RA'AN / A": [
            {
              station: "RA'AN",
              voters: 466
            },
          ],
          "BUREAU POSTE AGRICOLE / A": [
            {
              station: "FOLINIRKI",
              voters: 2620
            },
            {
              station: "MATRA",
              voters: 1950
            },
            {
              station: "GALBIHI",
              voters: 1152
            },
            {
              station: "MAYO-NGALBIHI",
              voters: 1152
            },
            {
              station: "SOUARI",
              voters: 1152
            },
            {
              station: "YELWATA",
              voters: 1152
            },
            {
              station: "YINOUM",
              voters: 1152
            },
          ],
          "C.E.S. DE POLOGOZOM / A": [
            {
              station: "LIBDJIKIKA",
              voters: 360
            },
          ],
          "CES DOURBEYE / A": [
            {
              station: "BALOUM",
              voters: 1501
            },
            {
              station: "NGOURORE",
              voters: 1501
            },
          ],
          "E.P. DE BOSSOUM / A": [
            {
              station: "BOSSOUM,",
              voters: 420
            },
          ],
          "E.P. DE TCHAPKA-PASSIRI / A": [
            {
              station: "TCHAPLA-SODJODJI",
              voters: 316
            },
            {
              station: "TCHENKELENG",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE DOUMO / A": [
            {
              station: "DJOUMETCHI",
              voters: 312
            },
            {
              station: "BILANGE",
              voters: 312
            },
          ],
          "EP BALA / A": [
            {
              station: "BALA",
              voters: 570
            },
            {
              station: "BAO",
              voters: 570
            },
            {
              station: "BOLIGUI",
              voters: 570
            },
          ],
          "EP BANGAYE FALI / A": [
            {
              station: "BANGAYE",
              voters: 321
            },
            {
              station: "FALI",
              voters: 321
            },
            {
              station: "BORAM",
              voters: 321
            },
            {
              station: "LILIMAKODOK",
              voters: 321
            },
          ],
          "EP BERENG / A": [
            {
              station: "BERENG",
              voters: 170
            },
            {
              station: "KEOU",
              voters: 1014
            },
          ],
          "EP BILI / A": [
            {
              station: "BILI",
              voters: 425
            },
          ],
          "EP BOMA / A": [
            {
              station: "BOMA",
              voters: 299
            },
            {
              station: "PONT",
              voters: 589
            },
            {
              station: "BOGDJI",
              voters: 299
            },
          ],
          "EP BORI-WALA / A": [
            {
              station: "BORI",
              voters: 408
            },
            {
              station: "-WALA",
              voters: 408
            },
            {
              station: "DEBO",
              voters: 585
            },
          ],
          "EP BOUDJOUMA / A": [
            {
              station: "BOUDJOUMA",
              voters: 403
            },
            {
              station: "MAKIRVE",
              voters: 403
            },
            {
              station: "MOUGOULGA",
              voters: 403
            },
          ],
          "EP BOUTOUZA / A": [
            {
              station: "BOUTOUZA",
              voters: 568
            },
            {
              station: "LAMORDE",
              voters: 9535
            },
            {
              station: "MAGUIRE",
              voters: 568
            },
            {
              station: "MOUHAINA",
              voters: 568
            },
            {
              station: "WATCHAMA",
              voters: 568
            },
          ],
          "EP BOUYOUM / A": [
            {
              station: "BOUYOUM",
              voters: 635
            },
          ],
          "EP BROH / A": [
            {
              station: "BROH",
              voters: 342
            },
          ],
          "EP DAMTA / A": [
            {
              station: "POKA",
              voters: 464
            },
          ],
          "EP DAZAL / A": [
            {
              station: "DAZAL",
              voters: 1822
            },
            {
              station: "GADAMAYO",
              voters: 911
            },
            {
              station: "MBOURABA",
              voters: 911
            },
          ],
          "EP DJAGALAM / A": [
            {
              station: "DALIWAOU",
              voters: 412
            },
            {
              station: "DAMDAI",
              voters: 412
            },
            {
              station: "PRIN",
              voters: 412
            },
            {
              station: "TCHITCHER",
              voters: 412
            },
          ],
          "EP DJECK-DJECK / A": [
            {
              station: "DJAMTARI",
              voters: 455
            },
            {
              station: "DJECKDJECK",
              voters: 455
            },
            {
              station: "LOMINGUEL",
              voters: 455
            },
          ],
          "EP DOUBBI / A": [
            {
              station: "DOUBBI",
              voters: 289
            },
            {
              station: "OURO-SAKI",
              voters: 289
            },
            {
              station: "YOUKNA",
              voters: 289
            },
          ],
          "EP DOUMO / A": [
            {
              station: "BILANGUE",
              voters: 1818
            },
            {
              station: "DJOUMITCHI",
              voters: 1506
            },
            {
              station: "DOUMO",
              voters: 5358
            },
            {
              station: "CENTRE",
              voters: 5104
            },
            {
              station: "NASSARAO-DOUMO",
              voters: 1506
            },
          ],
          "EP DOURBEYE / A": [
            {
              station: "BALERE",
              voters: 1760
            },
            {
              station: "DAMTA",
              voters: 2224
            },
            {
              station: "CAMP",
              voters: 1760
            },
            {
              station: "DJAGALAM",
              voters: 2172
            },
            {
              station: "DOURBEYE",
              voters: 2927
            },
            {
              station: "FADA",
              voters: 2927
            },
            {
              station: "SOI-YEM",
              voters: 1760
            },
          ],
          "EP DOUZOUGOU / A": [
            {
              station: "DOUZOUGOU",
              voters: 364
            },
          ],
          "EP GANE / A": [
            {
              station: "GANE",
              voters: 421
            },
          ],
          "EP GOLA / A": [
            {
              station: "AIKOMTOR",
              voters: 268
            },
            {
              station: "GOLA",
              voters: 268
            },
            {
              station: "HOSSERE",
              voters: 1106
            },
            {
              station: "LAK",
              voters: 268
            },
            {
              station: "REOUSSI",
              voters: 793
            },
          ],
          "EP GOLOZA / A": [
            {
              station: "DADIMARI",
              voters: 560
            },
            {
              station: "GOLOZA",
              voters: 560
            },
            {
              station: "MABOURKI",
              voters: 560
            },
            {
              station: "ZAOURA",
              voters: 560
            },
          ],
          "EP GOUDJOU-GOUDJOU / A": [
            {
              station: "GOUDJOU-GOUDJOU",
              voters: 279
            },
            {
              station: "MBARAM",
              voters: 412
            },
            {
              station: "POKLACK",
              voters: 412
            },
          ],
          "EP GOUDOU / A": [
            {
              station: "GOUDOU",
              voters: 543
            },
            {
              station: "KOUBERE",
              voters: 543
            },
            {
              station: "SEBORE",
              voters: 543
            },
          ],
          "EP GOULOUM / A": [
            {
              station: "BANGAI",
              voters: 917
            },
            {
              station: "DABA",
              voters: 917
            },
            {
              station: "DJARENGOL",
              voters: 714
            },
            {
              station: "GOULOUM",
              voters: 511
            },
            {
              station: "VEMI",
              voters: 511
            },
          ],
          "EP GR I MAYO OULO / A": [
            {
              station: "NASSARAO-DOUALLARE",
              voters: 1149
            },
            {
              station: "OURO-BOCKI",
              voters: 1149
            },
            {
              station: "PAWARE",
              voters: 1149
            },
          ],
          "EP GR II MAYO OULO / A": [
            {
              station: "DJALINGO/MAYO",
              voters: 2223
            },
            {
              station: "OULO",
              voters: 2223
            },
            {
              station: "DJENTO",
              voters: 2223
            },
            {
              station: "III",
              voters: 2223
            },
            {
              station: "POUMPOUMRE",
              voters: 2223
            },
            {
              station: "SABONGARI",
              voters: 2223
            },
            {
              station: "TAKADJIRGA",
              voters: 2223
            },
          ],
          "EP GUELENG / A": [
            {
              station: "DOKOYOM",
              voters: 591
            },
            {
              station: "DOUNDOUNG",
              voters: 591
            },
            {
              station: "GUELENG",
              voters: 591
            },
          ],
          "EP GUIRVIZA / A": [
            {
              station: "BAFFA",
              voters: 977
            },
            {
              station: "BIRDI",
              voters: 977
            },
            {
              station: "DJALINGO",
              voters: 3200
            },
            {
              station: "DOUKA",
              voters: 977
            },
            {
              station: "FOULBERE",
              voters: 1685
            },
            {
              station: "GUIRVIZA",
              voters: 977
            },
            {
              station: "KARKARA",
              voters: 977
            },
            {
              station: "LAKOUAN",
              voters: 977
            },
            {
              station: "LOJOUNA",
              voters: 977
            },
            {
              station: "MADARA",
              voters: 977
            },
            {
              station: "NAIRA",
              voters: 977
            },
          ],
          "EP HOLOUM / A": [
            {
              station: "HOLOUM",
              voters: 121
            },
          ],
          "EP KERMBO BORA / A": [
            {
              station: "KERMBO",
              voters: 615
            },
            {
              station: "BORA",
              voters: 615
            },
            {
              station: "KERMBO-DJERE",
              voters: 299
            },
            {
              station: "TCHAPKA-PASSIRI",
              voters: 931
            },
            {
              station: "TCHAPKA-POLA",
              voters: 931
            },
            {
              station: "TCHAPKA-SODJODJI",
              voters: 615
            },
            {
              station: "TCHENKELING",
              voters: 299
            },
          ],
          "EP KOMBOM / A": [
            {
              station: "KOMBOM",
              voters: 452
            },
          ],
          "EP KOUBOUTOU / A": [
            {
              station: "KOUBOUTOU",
              voters: 385
            },
          ],
          "EP KOUMKEOUDJI / A": [
            {
              station: "GOBRIYAM",
              voters: 289
            },
            {
              station: "KOUMKEOUDJI",
              voters: 289
            },
          ],
          "EP MABONI / A": [
            {
              station: "GUENDOU",
              voters: 619
            },
            {
              station: "GUERIDJE",
              voters: 1524
            },
            {
              station: "MABONI",
              voters: 762
            },
          ],
          "EP MAGANAK / A": [
            {
              station: "DAMADOUGOUP",
              voters: 362
            },
            {
              station: "MAGANAK",
              voters: 362
            },
          ],
          "EP MANDAMA / A": [
            {
              station: "BOUMBA",
              voters: 2609
            },
            {
              station: "GUENAW",
              voters: 1081
            },
            {
              station: "KLECK-KLECK",
              voters: 1081
            },
            {
              station: "DABA-VOUN",
              voters: 1081
            },
            {
              station: "GLAMBAD",
              voters: 1081
            },
            {
              station: "KARNAH",
              voters: 1081
            },
            {
              station: "KOLLERE",
              voters: 1081
            },
            {
              station: "KOUSSOUM",
              voters: 1081
            },
            {
              station: "VILLIS",
              voters: 1081
            },
            {
              station: "MANDAMA",
              voters: 1081
            },
            {
              station: "MANDAMA-LE",
              voters: 1081
            },
            {
              station: "HAUT",
              voters: 1414
            },
            {
              station: "MEKEDENG",
              voters: 1081
            },
            {
              station: "TCHADA-HOULONG",
              voters: 1081
            },
          ],
          "EP MATALAO / A": [
            {
              station: "MATALAO",
              voters: 269
            },
          ],
          "EP MBOH / A": [
            {
              station: "MBOH",
              voters: 360
            },
          ],
          "EP MBOUIRI / A": [
            {
              station: "BOUHIR",
              voters: 425
            },
            {
              station: "DIRTCHA",
              voters: 588
            },
            {
              station: "GOUNGOURMA",
              voters: 425
            },
            {
              station: "MBOGOUMA",
              voters: 425
            },
            {
              station: "MBOUIRI",
              voters: 425
            },
            {
              station: "MILDA",
              voters: 425
            },
            {
              station: "MOUGA",
              voters: 425
            },
          ],
          "EP MEDEOU / A": [
            {
              station: "MEDEOU",
              voters: 533
            },
            {
              station: "TALAVAM",
              voters: 533
            },
          ],
          "EP MOUNA / A": [
            {
              station: "GUINDIGUINA",
              voters: 454
            },
            {
              station: "KOUDOUKOURA",
              voters: 738
            },
            {
              station: "KWANDANLANG",
              voters: 738
            },
            {
              station: "MOUNA",
              voters: 454
            },
          ],
          "EP MOUROUM / A": [
            {
              station: "DERPOCK",
              voters: 633
            },
            {
              station: "FOKOUM",
              voters: 1230
            },
            {
              station: "MAYEL",
              voters: 582
            },
            {
              station: "DAMDJA",
              voters: 1164
            },
            {
              station: "MAYO",
              voters: 3396
            },
            {
              station: "MOUROUM",
              voters: 456
            },
          ],
          "EP MOURPAYE / A": [
            {
              station: "BIHI",
              voters: 218
            },
            {
              station: "MOURPAYE",
              voters: 218
            },
            {
              station: "PALAFAMOUN",
              voters: 218
            },
          ],
          "EP NARI / A": [
            {
              station: "NARI",
              voters: 629
            },
            {
              station: "SOSSORI",
              voters: 629
            },
          ],
          "EP NASSARAO / A": [
            {
              station: "DIDANGO",
              voters: 169
            },
            {
              station: "DOUNDEHI",
              voters: 169
            },
            {
              station: "NASSARAO",
              voters: 338
            },
            {
              station: "PILOTE",
              voters: 169
            },
          ],
          "EP NDILI / A": [
            {
              station: "GUIRLAO",
              voters: 999
            },
            {
              station: "SINI",
              voters: 999
            },
            {
              station: "NDILI",
              voters: 763
            },
            {
              station: "SOUKOUNDOU",
              voters: 1290
            },
            {
              station: "TCHOUBANAYOU",
              voters: 527
            },
            {
              station: "VOGAM",
              voters: 999
            },
          ],
          "EP NDOUZENG / A": [
            {
              station: "NDOUZENG",
              voters: 394
            },
            {
              station: "TALATCHOUMA",
              voters: 394
            },
          ],
          "EP NIVE / A": [
            {
              station: "KIRVING",
              voters: 659
            },
            {
              station: "NIVE",
              voters: 659
            },
            {
              station: "SAPALA",
              voters: 659
            },
          ],
          "EP PALAMAYOUM / A": [
            {
              station: "KOUMAI",
              voters: 447
            },
            {
              station: "DAGOURA",
              voters: 447
            },
            {
              station: "MASSABAI",
              voters: 447
            },
            {
              station: "OURVI",
              voters: 447
            },
            {
              station: "TALATCHADAK",
              voters: 447
            },
            {
              station: "VIMAR",
              voters: 447
            },
          ],
          "EP PALPAL / A": [
            {
              station: "PALPAL",
              voters: 333
            },
            {
              station: "TALAGORBOCK",
              voters: 333
            },
            {
              station: "TIMA-LE",
              voters: 333
            },
          ],
          "EP PINA / A": [
            {
              station: "PINA",
              voters: 599
            },
          ],
          "EP POLOGOZOM / A": [
            {
              station: "BARINGOL",
              voters: 1621
            },
            {
              station: "KILPE",
              voters: 901
            },
            {
              station: "LIBDJICK",
              voters: 901
            },
            {
              station: "PALADOUWER",
              voters: 901
            },
            {
              station: "POLOGOZOM",
              voters: 901
            },
          ],
          "EP SADI / A": [
            {
              station: "DJENTO-SADI",
              voters: 410
            },
            {
              station: "SADI",
              voters: 410
            },
          ],
          "EP SINTA / A": [
            {
              station: "SINTA",
              voters: 398
            },
          ],
          "EP SOLOMOU / A": [
            {
              station: "SOLOMOU",
              voters: 318
            },
          ],
          "EP SONA / A": [
            {
              station: "SONA",
              voters: 452
            },
          ],
          "EP TALAK / A": [
            {
              station: "TALAK",
              voters: 228
            },
          ],
          "EP WAFO / A": [
            {
              station: "SALLIKERE",
              voters: 608
            },
            {
              station: "WAFO",
              voters: 608
            },
          ],
          "EP WARGUIZA / A": [
            {
              station: "FOURKOI",
              voters: 424
            },
            {
              station: "WARGUIZA",
              voters: 424
            },
            {
              station: "WOUROUM",
              voters: 424
            },
          ],
          "EP WAWATCHI / A": [
            {
              station: "DAGGA",
              voters: 356
            },
            {
              station: "WAWATCHI",
              voters: 219
            },
          ],
          "ESPLANADE CHEFFERIE BATOUM / A": [
            {
              station: "BATOUM",
              voters: 342
            },
            {
              station: "BOTOUM",
              voters: 1116
            },
          ],
          "ESPLANADE CHEFFERIE MATRA DOUMO / A": [
            {
              station: "MIDJIDA",
              voters: 798
            },
            {
              station: "SO'O",
              voters: 798
            },
          ],
          "ESPLANADE CHEFFERIE PRI / A": [
            {
              station: "GODOCK",
              voters: 247
            },
            {
              station: "PRI",
              voters: 247
            },
          ],
          "MAGASIN SODECOTON / A": [
            {
              station: "LAC",
              voters: 290
            },
            {
              station: "SILANDA",
              voters: 290
            },
            {
              station: "OURO-WALDE",
              voters: 290
            },
            {
              station: "PALAIS",
              voters: 290
            },
            {
              station: "SEMNORD",
              voters: 290
            },
          ],
          "PLACE MARCHE BOSSOUM / A": [
            {
              station: "AIKARTI",
              voters: 979
            },
            {
              station: "BOSSOUM",
              voters: 2397
            },
            {
              station: "MARCHE",
              voters: 1344
            },
            {
              station: "KOUMNORO",
              voters: 1093
            },
            {
              station: "OURO",
              voters: 1357
            },
            {
              station: "KARLAHI",
              voters: 3931
            },
            {
              station: "TOKNAYOU",
              voters: 979
            },
          ],
          "PLACE MARCHE DESKIT / A": [
            {
              station: "BOUMBALOU",
              voters: 190
            },
            {
              station: "DESKIT",
              voters: 190
            },
            {
              station: "KOUBADJE",
              voters: 190
            },
          ],
          "PLACE MARCHE DONKA / A": [
            {
              station: "DJEGUELI",
              voters: 500
            },
            {
              station: "DONKA",
              voters: 500
            },
            {
              station: "HOULA",
              voters: 500
            },
            {
              station: "MADI",
              voters: 500
            },
          ],
          "PLACE MARCHE DOUMO / A": [
            {
              station: "DIWA",
              voters: 792
            },
            {
              station: "FATAROU",
              voters: 792
            },
            {
              station: "FONDJI",
              voters: 1530
            },
            {
              station: "GOUDAKI",
              voters: 792
            },
            {
              station: "PEPEDE",
              voters: 792
            },
          ],
          "PLACE MARCHE MAYO OULO / A": [
            {
              station: "DOH",
              voters: 1662
            },
            {
              station: "DOMAYO",
              voters: 1662
            },
            {
              station: "LAMBA",
              voters: 1662
            },
            {
              station: "LOUMORE",
              voters: 1662
            },
            {
              station: "TSORI",
              voters: 1662
            },
            {
              station: "WAFANGO",
              voters: 1662
            },
          ],
          "PLACE MARCHE TIMA-LE BAS / A": [
            {
              station: "TIMA",
              voters: 172
            },
            {
              station: "BAS",
              voters: 172
            },
          ],
          "PLACE MARCHE YIBANGO / A": [
            {
              station: "KAPKANA",
              voters: 205
            },
            {
              station: "YIBANGO",
              voters: 205
            },
          ],
          "PLACE PETIT MARCHE DOUI / A": [
            {
              station: "DOUI",
              voters: 467
            },
            {
              station: "NYAM",
              voters: 130
            },
          ],
          "PLACE PETIT MARCHE KOURGUENG / A": [
            {
              station: "GONDABA",
              voters: 342
            },
            {
              station: "KELALI",
              voters: 342
            },
            {
              station: "KOURGUENG",
              voters: 342
            },
            {
              station: "POKOTCHI",
              voters: 342
            },
          ],
        },
      },
      "MAYO-REY": {
        "MADINGRING": {
          "BUREAU OPCC / A": [
            {
              station: "GASTON",
              voters: 462
            },
            {
              station: "GOINGOU",
              voters: 723
            },
            {
              station: "ABADI",
              voters: 462
            },
            {
              station: "BERE",
              voters: 462
            },
            {
              station: "NINGATOLOUM",
              voters: 462
            },
            {
              station: "JEAN",
              voters: 462
            },
            {
              station: "TOULA",
              voters: 462
            },
            {
              station: "YELWA",
              voters: 723
            },
          ],
          "EP BAILA / A": [
            {
              station: "BADJANG",
              voters: 614
            },
            {
              station: "BAILA",
              voters: 1689
            },
            {
              station: "MBIEM",
              voters: 1360
            },
            {
              station: "DOLE",
              voters: 614
            },
            {
              station: "TELBE",
              voters: 614
            },
          ],
          "EP BILINGUE MADINGRING / A": [
            {
              station: "ARDO",
              voters: 1060
            },
            {
              station: "MATCHE",
              voters: 1060
            },
            {
              station: "FELIX",
              voters: 1060
            },
            {
              station: "OUMAROU",
              voters: 1060
            },
            {
              station: "VAIBOUR",
              voters: 1060
            },
            {
              station: "SECTEUR",
              voters: 3049
            },
            {
              station: "MANDINGRING",
              voters: 3049
            },
            {
              station: "MARCHE",
              voters: 3049
            },
          ],
          "EP BONGO / A": [
            {
              station: "ANDOUM",
              voters: 1122
            },
            {
              station: "BONGO",
              voters: 1122
            },
            {
              station: "WAHOULA",
              voters: 1273
            },
          ],
          "EP DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 716
            },
            {
              station: "DJEMREO",
              voters: 1256
            },
          ],
          "EP DJEING II / A": [
            {
              station: "DJEING",
              voters: 2464
            },
            {
              station: "CATHOLIQUE",
              voters: 1652
            },
          ],
          "EP DJEMADJOU I / A": [
            {
              station: "DJALINGO",
              voters: 687
            },
            {
              station: "PEULH",
              voters: 687
            },
          ],
          "EP GA MBOU / A": [
            {
              station: "DJABLANG",
              voters: 1066
            },
            {
              station: "DJIBAO",
              voters: 1066
            },
            {
              station: "GAMBOU",
              voters: 746
            },
            {
              station: "LAOU",
              voters: 746
            },
            {
              station: "WINDE",
              voters: 746
            },
          ],
          "EP GOR / A": [
            {
              station: "BALA",
              voters: 1946
            },
            {
              station: "GOINDASSOU",
              voters: 1946
            },
            {
              station: "GOITAM",
              voters: 1946
            },
            {
              station: "GOR",
              voters: 3892
            },
            {
              station: "CLAIRE",
              voters: 1946
            },
            {
              station: "LAVAIZA",
              voters: 1946
            },
            {
              station: "MISSION",
              voters: 3598
            },
            {
              station: "PROTESTANTE",
              voters: 1946
            },
            {
              station: "TOKLOMWA",
              voters: 1946
            },
            {
              station: "TOLBOUKA",
              voters: 1946
            },
          ],
          "EP KAGNADJE I / A": [
            {
              station: "DJETOHEUR",
              voters: 650
            },
            {
              station: "KAGNADJE",
              voters: 2600
            },
            {
              station: "MBAL",
              voters: 650
            },
            {
              station: "ODEMARE",
              voters: 650
            },
            {
              station: "NDAMM",
              voters: 650
            },
          ],
          "EP KOULOU MBOU / A": [
            {
              station: "KOULOUMBOU",
              voters: 481
            },
            {
              station: "MANDI",
              voters: 845
            },
            {
              station: "OURO",
              voters: 481
            },
            {
              station: "KESSOUM",
              voters: 481
            },
          ],
          "EP LAOUDJOUGOYE / A": [
            {
              station: "KODJINI",
              voters: 376
            },
            {
              station: "LAOUDJOUGOYE",
              voters: 376
            },
            {
              station: "MBAKLA",
              voters: 376
            },
            {
              station: "MBISSIRI",
              voters: 376
            },
            {
              station: "KASSEO",
              voters: 376
            },
          ],
          "EP MADINGRING / A": [
            {
              station: "CAMP",
              voters: 1989
            },
            {
              station: "BIR",
              voters: 1989
            },
            {
              station: "DOBAR",
              voters: 2306
            },
            {
              station: "PAUL",
              voters: 2306
            },
            {
              station: "DOMBALE",
              voters: 2306
            },
            {
              station: "LAKOKYA",
              voters: 1989
            },
            {
              station: "HOPITAL",
              voters: 1989
            },
            {
              station: "KOH",
              voters: 1989
            },
            {
              station: "LAKA",
              voters: 1989
            },
            {
              station: "WANGA",
              voters: 1989
            },
          ],
          "EP MANDI MANGA / A": [
            {
              station: "MAIBIYA",
              voters: 182
            },
            {
              station: "GOULA",
              voters: 182
            },
            {
              station: "MANGA",
              voters: 182
            },
          ],
          "EP MASSI / A": [
            {
              station: "KODJONG",
              voters: 206
            },
            {
              station: "MASSI",
              voters: 206
            },
          ],
          "EP MAYO DJARENDI / A": [
            {
              station: "MAYO",
              voters: 307
            },
            {
              station: "DJARENDI",
              voters: 307
            },
            {
              station: "MBAOULARI",
              voters: 307
            },
          ],
          "EP MBAOUBALA / A": [
            {
              station: "FANGWILEO",
              voters: 596
            },
            {
              station: "KONGWALA",
              voters: 596
            },
            {
              station: "LANGUI",
              voters: 596
            },
            {
              station: "MBAOUBALA",
              voters: 596
            },
          ],
          "EP SOROMBEO / A": [
            {
              station: "BAGAO",
              voters: 898
            },
            {
              station: "LAOUDJARA",
              voters: 898
            },
            {
              station: "LAOUMBORE",
              voters: 1070
            },
            {
              station: "MADAGACAR",
              voters: 898
            },
            {
              station: "MBAIGNADJE",
              voters: 898
            },
            {
              station: "MBAINAI",
              voters: 898
            },
            {
              station: "MBINGUEO",
              voters: 1070
            },
            {
              station: "SOROMBEO",
              voters: 898
            },
          ],
          "EP TOUSSIRI MBALDJOUK / A": [
            {
              station: "KAMBANG",
              voters: 463
            },
            {
              station: "MAMBOUM",
              voters: 463
            },
            {
              station: "MAWAILA",
              voters: 463
            },
            {
              station: "TOUSSIRI",
              voters: 463
            },
            {
              station: "MBALDJOUCK",
              voters: 463
            },
          ],
          "EP YAGOYE / A": [
            {
              station: "GANDAYE",
              voters: 406
            },
            {
              station: "MAIROM",
              voters: 406
            },
            {
              station: "YAGOYE",
              voters: 406
            },
          ],
          "ESPL CHEF AHMADOU / A": [
            {
              station: "ALI",
              voters: 734
            },
            {
              station: "ARABE",
              voters: 734
            },
            {
              station: "DJAOURO",
              voters: 4916
            },
            {
              station: "BOUBA",
              voters: 734
            },
            {
              station: "MADINGRING",
              voters: 13714
            },
            {
              station: "FADA",
              voters: 2723
            },
            {
              station: "FOULBE",
              voters: 1752
            },
          ],
          "ESPL CHEF DJEMADJOU II / A": [
            {
              station: "DARABEI",
              voters: 621
            },
            {
              station: "PIERRE",
              voters: 621
            },
            {
              station: "DJEMADJOU",
              voters: 2035
            },
            {
              station: "MOUDOUCK",
              voters: 621
            },
            {
              station: "FRONTIERE",
              voters: 621
            },
            {
              station: "SABERE",
              voters: 1519
            },
          ],
          "ESPL CHEF MAIKIRO / A": [
            {
              station: "BOLOHEURDJE",
              voters: 410
            },
            {
              station: "DODJONG",
              voters: 410
            },
            {
              station: "MAIKIRO",
              voters: 410
            },
          ],
          "ESPL CHEF NGANADJE CARREFOUR / A": [
            {
              station: "KOUDJOURO",
              voters: 1077
            },
            {
              station: "MAITARAL",
              voters: 1077
            },
            {
              station: "MBAOUPALA",
              voters: 1077
            },
            {
              station: "MBIHAOU",
              voters: 1077
            },
            {
              station: "NGANADJE",
              voters: 1077
            },
            {
              station: "CARREFOUR",
              voters: 1077
            },
          ],
          "GIC SODECOTON DJAMDJE / A": [
            {
              station: "BISSA",
              voters: 461
            },
            {
              station: "DJAMDJE",
              voters: 461
            },
          ],
          "LYCEE MADINGRING / A": [
            {
              station: "MASSA",
              voters: 540
            },
            {
              station: "LAOUPOYE",
              voters: 722
            },
            {
              station: "LYCEE",
              voters: 540
            },
            {
              station: "NANA",
              voters: 857
            },
            {
              station: "JACQUES",
              voters: 857
            },
          ],
        },
        "REY-BOUBA": {
          "ECOLE DES PARENTS BOUNNEROU / A": [
            {
              station: "SOUROUNGOUL",
              voters: 247
            },
          ],
          "ECOLE DES PARENTS DJOUNDI / A": [
            {
              station: "DJOUNDI",
              voters: 207
            },
          ],
          "ECOLE DES PARENTS LESDI MBODERI / A": [
            {
              station: "MAIDJAMBA",
              voters: 1246
            },
            {
              station: "BLAMA",
              voters: 623
            },
            {
              station: "MOUSSA",
              voters: 623
            },
            {
              station: "GAINA",
              voters: 730
            },
            {
              station: "LAC",
              voters: 730
            },
            {
              station: "MABEROU",
              voters: 730
            },
            {
              station: "PAKLI",
              voters: 730
            },
          ],
          "ECOLE DES PARENTS SEINANGO / A": [
            {
              station: "GAOUDALI",
              voters: 85
            },
            {
              station: "HARDE",
              voters: 85
            },
            {
              station: "KAYEFI",
              voters: 85
            },
          ],
          "EM REY-BOUBA / A": [
            {
              station: "FOUDEN",
              voters: 259
            },
            {
              station: "HAOUSSA'EN",
              voters: 259
            },
            {
              station: "SASSA'EN",
              voters: 259
            },
            {
              station: "WAMBABE",
              voters: 259
            },
          ],
          "EP ABAKOURA / A": [
            {
              station: "ABAKOURA",
              voters: 168
            },
            {
              station: "DJADJOULI",
              voters: 168
            },
          ],
          "EP ALFA / A": [
            {
              station: "ALFA",
              voters: 546
            },
            {
              station: "ANGARI",
              voters: 1335
            },
            {
              station: "GAINARE",
              voters: 284
            },
          ],
          "EP BABORORO / A": [
            {
              station: "BABORORO",
              voters: 352
            },
          ],
          "EP BADJARI / A": [
            {
              station: "BADJARI-TOUMBINGUEL",
              voters: 348
            },
          ],
          "EP BATAO / A": [
            {
              station: "BATAO",
              voters: 1336
            },
            {
              station: "LIMBATMI",
              voters: 668
            },
            {
              station: "NASSARAO",
              voters: 1079
            },
          ],
          "EP BERE / A": [
            {
              station: "BOCKA",
              voters: 587
            },
          ],
          "EP BODAL / A": [
            {
              station: "BODAL",
              voters: 254
            },
            {
              station: "LOUGGA",
              voters: 254
            },
            {
              station: "TCHABAL",
              voters: 441
            },
          ],
          "EP BOUNBOU / A": [
            {
              station: "BOUNBOU",
              voters: 280
            },
            {
              station: "BOUNNEROU",
              voters: 410
            },
          ],
          "EP DAMDJEL / A": [
            {
              station: "DAMDJEL",
              voters: 143
            },
          ],
          "EP DE HETCHOUROU / A": [
            {
              station: "HETCHOUROU",
              voters: 194
            },
          ],
          "EP DE LOUGA TCHABAL / A": [
            {
              station: "LOUGA",
              voters: 187
            },
          ],
          "EP DE MBOUKMA / A": [
            {
              station: "MBOUKMA",
              voters: 353
            },
          ],
          "EP DE TOKORMAYE / A": [
            {
              station: "TOKORMAYE",
              voters: 270
            },
            {
              station: "YADIA",
              voters: 539
            },
          ],
          "EP DE TOURA LARA / A": [
            {
              station: "TOURA",
              voters: 160
            },
            {
              station: "LARA",
              voters: 160
            },
          ],
          "EP DE VAIMBA / A": [
            {
              station: "VAIMBA",
              voters: 143
            },
          ],
          "EP DEO-NGAOURI / A": [
            {
              station: "BABOULGA",
              voters: 184
            },
            {
              station: "MADANA",
              voters: 184
            },
            {
              station: "PAM'EN",
              voters: 184
            },
          ],
          "EP DJAMARE / A": [
            {
              station: "DJAMARE",
              voters: 837
            },
          ],
          "EP DJOURDE / A": [
            {
              station: "DJOURDE",
              voters: 302
            },
          ],
          "EP DJOUROUM / A": [
            {
              station: "BADIDDI",
              voters: 1788
            },
            {
              station: "FOULBE",
              voters: 883
            },
            {
              station: "LAME",
              voters: 1031
            },
            {
              station: "GOTEL",
              voters: 640
            },
            {
              station: "DJOUROUM",
              voters: 640
            },
            {
              station: "LAMMOUDAM",
              voters: 640
            },
            {
              station: "SARGARI",
              voters: 640
            },
            {
              station: "MAMBAIRE",
              voters: 769
            },
            {
              station: "WINDE",
              voters: 2613
            },
            {
              station: "DOUDJA",
              voters: 640
            },
          ],
          "EP DOKEROL 1 / A": [
            {
              station: "DOKEROL",
              voters: 543
            },
          ],
          "EP DOUKROUM / A": [
            {
              station: "BAMAYE",
              voters: 442
            },
            {
              station: "BAMDEWO",
              voters: 246
            },
            {
              station: "DOUKROUM",
              voters: 246
            },
            {
              station: "MAWARE",
              voters: 356
            },
          ],
          "EP HOMA MAL YAYA / A": [
            {
              station: "BAPOUNI",
              voters: 597
            },
            {
              station: "BIRA",
              voters: 597
            },
            {
              station: "GUELAO",
              voters: 597
            },
            {
              station: "HOMA",
              voters: 1194
            },
            {
              station: "HAMASSIOUTO",
              voters: 597
            },
            {
              station: "MAL",
              voters: 1023
            },
            {
              station: "YAYA",
              voters: 597
            },
          ],
          "EP KOINDERI / A": [
            {
              station: "KOINDERI",
              voters: 539
            },
          ],
          "EP KONGRONG / A": [
            {
              station: "DJALBANG",
              voters: 667
            },
            {
              station: "TIPOULI",
              voters: 667
            },
            {
              station: "TOULOUM",
              voters: 667
            },
          ],
          "EP LAINDE DJAOULE / A": [
            {
              station: "DJIPORDE",
              voters: 501
            },
            {
              station: "GALAYE",
              voters: 239
            },
            {
              station: "LAINDE",
              voters: 403
            },
            {
              station: "DJAOULE",
              voters: 239
            },
            {
              station: "MBAIZASSI",
              voters: 239
            },
            {
              station: "TOUKRI",
              voters: 239
            },
          ],
          "EP LANDOU / A": [
            {
              station: "LAIHIRDOHI",
              voters: 623
            },
            {
              station: "LANDOU",
              voters: 985
            },
          ],
          "EP LAOUBOU / A": [
            {
              station: "LAOUBOU",
              voters: 325
            },
            {
              station: "SANGFOU",
              voters: 325
            },
          ],
          "EP LARKI / A": [
            {
              station: "LARKI",
              voters: 176
            },
          ],
          "EP LERKA / A": [
            {
              station: "GONDI",
              voters: 314
            },
            {
              station: "GOYANDOU",
              voters: 314
            },
            {
              station: "LERKA",
              voters: 314
            },
          ],
          "EP MANGA / A": [
            {
              station: "BASSABAR",
              voters: 360
            },
          ],
          "EP MARADI / A": [
            {
              station: "MARADI",
              voters: 460
            },
            {
              station: "TAPARE",
              voters: 1188
            },
          ],
          "EP MAYEL POULDEBO / A": [
            {
              station: "KARA",
              voters: 80
            },
            {
              station: "POULDEBO",
              voters: 80
            },
            {
              station: "TEWARE",
              voters: 80
            },
          ],
          "EP MAYO BANI OUING / A": [
            {
              station: "BAIKWA",
              voters: 2323
            },
            {
              station: "WOING",
              voters: 579
            },
            {
              station: "BAMARAFA",
              voters: 579
            },
            {
              station: "MAYO",
              voters: 4697
            },
            {
              station: "BANI",
              voters: 1912
            },
            {
              station: "HAMAN",
              voters: 1340
            },
          ],
          "EP MAYO DJOY / A": [
            {
              station: "DJOY",
              voters: 292
            },
          ],
          "EP MAYO LAYE / A": [
            {
              station: "LAYE",
              voters: 295
            },
          ],
          "EP MOMBORE / A": [
            {
              station: "BITANG",
              voters: 700
            },
            {
              station: "DABA",
              voters: 700
            },
            {
              station: "GOURING",
              voters: 700
            },
            {
              station: "GUEBADI",
              voters: 700
            },
            {
              station: "MOMBORE",
              voters: 700
            },
            {
              station: "GONI",
              voters: 700
            },
            {
              station: "SALASSA",
              voters: 700
            },
            {
              station: "WALEOL",
              voters: 700
            },
            {
              station: "SIWO",
              voters: 700
            },
          ],
          "EP NAOUDEL / A": [
            {
              station: "NAOUDEL",
              voters: 231
            },
          ],
          "EP OURO GADOUDJI / A": [
            {
              station: "GANDAYE",
              voters: 232
            },
            {
              station: "GANGOURI",
              voters: 232
            },
          ],
          "EP OURO MAYO / A": [
            {
              station: "DIWODJI",
              voters: 426
            },
            {
              station: "BALI",
              voters: 426
            },
            {
              station: "KAIGUE",
              voters: 426
            },
            {
              station: "MBOULWOL",
              voters: 478
            },
            {
              station: "TCHIKALI",
              voters: 426
            },
          ],
          "EP OURO TOUPE / A": [
            {
              station: "QUARTIERS",
              voters: 239
            },
            {
              station: "ADMINISTRATIFS",
              voters: 239
            },
          ],
          "EP REY BOUBA / A": [
            {
              station: "LAKA'EN",
              voters: 582
            },
            {
              station: "LIPORO",
              voters: 582
            },
            {
              station: "MONO'EN",
              voters: 582
            },
            {
              station: "TOUPE",
              voters: 821
            },
          ],
          "EP SINASSI / A": [
            {
              station: "MAFIRE",
              voters: 547
            },
            {
              station: "SINASSI",
              voters: 547
            },
          ],
          "EP SOMESSI / A": [
            {
              station: "BARY",
              voters: 436
            },
            {
              station: "KOUBADJE",
              voters: 436
            },
            {
              station: "SOMESSI",
              voters: 436
            },
          ],
          "EP TATOU / A": [
            {
              station: "BABBABLA",
              voters: 744
            },
            {
              station: "MACANASSE",
              voters: 744
            },
            {
              station: "SADIA",
              voters: 823
            },
            {
              station: "TATOU",
              voters: 744
            },
          ],
          "EP WAFANGO / A": [
            {
              station: "NDIAMBAILOUM",
              voters: 378
            },
            {
              station: "WAFANGO",
              voters: 378
            },
          ],
          "ESPL CHEF ACHAKA MANGA / A": [
            {
              station: "ACHAKA",
              voters: 1236
            },
            {
              station: "MANGA",
              voters: 2297
            },
            {
              station: "PETEL",
              voters: 618
            },
            {
              station: "FOTOKOL",
              voters: 618
            },
            {
              station: "MBELA",
              voters: 618
            },
            {
              station: "KOSSAM",
              voters: 618
            },
          ],
          "ESPL CHEF ANGARI WASSALI / A": [
            {
              station: "BEGUE",
              voters: 214
            },
            {
              station: "WASSALI",
              voters: 214
            },
          ],
          "ESPL CHEF AOUDJALI / A": [
            {
              station: "AOUDJALI",
              voters: 506
            },
            {
              station: "DAME",
              voters: 738
            },
            {
              station: "GABDEL",
              voters: 506
            },
            {
              station: "MBOUDIROU",
              voters: 506
            },
            {
              station: "DOLE",
              voters: 506
            },
          ],
          "ESPL CHEF BAIGRAM / A": [
            {
              station: "BAIGRAM",
              voters: 122
            },
            {
              station: "DJOULOL",
              voters: 122
            },
            {
              station: "MODIBO",
              voters: 206
            },
            {
              station: "TCHERFEKE",
              voters: 122
            },
          ],
          "ESPL CHEF BASSARI / A": [
            {
              station: "BASSARI",
              voters: 408
            },
            {
              station: "DADNA",
              voters: 221
            },
            {
              station: "DAWANE",
              voters: 221
            },
          ],
          "ESPL CHEF BIDEING / A": [
            {
              station: "BIDEING",
              voters: 381
            },
            {
              station: "BOLIYEL",
              voters: 543
            },
            {
              station: "DJABBIRE",
              voters: 381
            },
            {
              station: "DJABBIROU",
              voters: 69
            },
            {
              station: "DJANGANA",
              voters: 462
            },
            {
              station: "FOUNAGUE",
              voters: 231
            },
          ],
          "ESPL CHEF BOUNNEROU / A": [
            {
              station: "DJIGANG",
              voters: 130
            },
          ],
          "ESPL CHEF DAMI / A": [
            {
              station: "ABBA",
              voters: 854
            },
            {
              station: "IDRISSA",
              voters: 1206
            },
            {
              station: "DAMI",
              voters: 1057
            },
            {
              station: "DJAOURO",
              voters: 3375
            },
            {
              station: "AKAOU",
              voters: 854
            },
            {
              station: "LADAN",
              voters: 854
            },
            {
              station: "GAOU",
              voters: 626
            },
            {
              station: "SALI",
              voters: 626
            },
            {
              station: "GARGOURA",
              voters: 626
            },
            {
              station: "HAMIDOU",
              voters: 626
            },
            {
              station: "CHAMPION",
              voters: 626
            },
            {
              station: "NASSARA",
              voters: 626
            },
            {
              station: "DJOUKOUM",
              voters: 626
            },
            {
              station: "TOPAYEL",
              voters: 626
            },
          ],
          "ESPL CHEF DJAGOL / A": [
            {
              station: "DJAGOL",
              voters: 251
            },
            {
              station: "DJAMPARAM",
              voters: 251
            },
            {
              station: "MADAGASCAR",
              voters: 251
            },
          ],
          "ESPL CHEF DJERWING / A": [
            {
              station: "DJERWING",
              voters: 262
            },
            {
              station: "KETCHEL",
              voters: 262
            },
          ],
          "ESPL CHEF GUIRLING / A": [
            {
              station: "DANBI",
              voters: 297
            },
            {
              station: "GUIRLING",
              voters: 297
            },
          ],
          "ESPL CHEF KONGRONG SIOUTO / A": [
            {
              station: "BIZILI",
              voters: 324
            },
            {
              station: "DAWAREGA",
              voters: 324
            },
            {
              station: "KONGRONG",
              voters: 991
            },
            {
              station: "SIOUTO",
              voters: 324
            },
            {
              station: "NDOUMA",
              voters: 324
            },
          ],
          "ESPL CHEF LAINDE MODIBO / A": [
            {
              station: "DABBIRE",
              voters: 84
            },
            {
              station: "PEORIWO",
              voters: 84
            },
          ],
          "ESPL CHEF LAMOUGUEL FOULBE / A": [
            {
              station: "LAMMOUGUEL",
              voters: 634
            },
            {
              station: "WAKLA",
              voters: 604
            },
            {
              station: "HORARE",
              voters: 243
            },
          ],
          "ESPL CHEF LESDI MBODERI / A": [
            {
              station: "LELE",
              voters: 278
            },
            {
              station: "OBOLE",
              voters: 278
            },
            {
              station: "DOBINGA",
              voters: 1405
            },
            {
              station: "WANDJAM",
              voters: 471
            },
            {
              station: "LESDI",
              voters: 278
            },
            {
              station: "MBODERI",
              voters: 278
            },
            {
              station: "MAYEL",
              voters: 358
            },
            {
              station: "NDIKANI",
              voters: 278
            },
            {
              station: "POUTTINAWAL",
              voters: 471
            },
            {
              station: "BAKARY",
              voters: 471
            },
          ],
          "ESPL CHEF MAYO BANI SADOU / A": [
            {
              station: "BARAKOI",
              voters: 492
            },
            {
              station: "LOUTCHE",
              voters: 492
            },
            {
              station: "SADOU",
              voters: 492
            },
          ],
          "ESPL CHEF MAYO WONDE / A": [
            {
              station: "WONDE",
              voters: 922
            },
          ],
          "ESPL CHEF NASSARAO / A": [
            {
              station: "MBAILOU",
              voters: 411
            },
            {
              station: "ZINABALAM",
              voters: 411
            },
          ],
          "ESPL CHEF OURO GADOU / A": [
            {
              station: "DAKAR",
              voters: 390
            },
            {
              station: "JOLI",
              voters: 390
            },
            {
              station: "SOIR",
              voters: 390
            },
            {
              station: "KAMALE",
              voters: 789
            },
            {
              station: "GADOU",
              voters: 780
            },
            {
              station: "MOUKAILA",
              voters: 390
            },
            {
              station: "N'DJAMENA",
              voters: 390
            },
            {
              station: "BOCKI",
              voters: 444
            },
            {
              station: "GADOUDJI",
              voters: 399
            },
          ],
          "ESPL CHEF REY BARIKI / A": [
            {
              station: "DAMOUGAL",
              voters: 224
            },
            {
              station: "DOMAYO",
              voters: 224
            },
            {
              station: "GARGA",
              voters: 224
            },
            {
              station: "NDOKTAO",
              voters: 224
            },
          ],
          "ESPL CHEF REY MANGA / A": [
            {
              station: "AKERI",
              voters: 619
            },
            {
              station: "ALAMAI",
              voters: 619
            },
            {
              station: "DJAMBOUTOU",
              voters: 619
            },
            {
              station: "DJANDA",
              voters: 619
            },
            {
              station: "GALI",
              voters: 619
            },
            {
              station: "ABBASSI",
              voters: 619
            },
            {
              station: "GODI",
              voters: 1731
            },
            {
              station: "GODJI",
              voters: 719
            },
            {
              station: "MBOUKEKE",
              voters: 619
            },
            {
              station: "OURO",
              voters: 6208
            },
            {
              station: "BARKA",
              voters: 450
            },
            {
              station: "REY",
              voters: 1319
            },
          ],
          "ESPL CHEF REY WAOBE / A": [
            {
              station: "BIGAOULA",
              voters: 259
            },
            {
              station: "DJABBO",
              voters: 259
            },
            {
              station: "NDORO",
              voters: 259
            },
            {
              station: "DOGARI'EN",
              voters: 259
            },
            {
              station: "SIFFAKARE",
              voters: 259
            },
            {
              station: "WAOBE",
              voters: 259
            },
          ],
          "ESPL CHEF RYA / A": [
            {
              station: "GATOUGUEL",
              voters: 312
            },
            {
              station: "MBILLA",
              voters: 312
            },
            {
              station: "RYA",
              voters: 894
            },
          ],
          "ESPL CHEF SEINANGO / A": [
            {
              station: "ALARBA",
              voters: 129
            },
            {
              station: "MAKEURE",
              voters: 129
            },
            {
              station: "SEINAGO",
              voters: 129
            },
            {
              station: "SOUKI",
              voters: 129
            },
          ],
          "ESPL CHEF TAPAREROU / A": [
            {
              station: "BALAROU",
              voters: 274
            },
            {
              station: "KOILAOKI",
              voters: 274
            },
            {
              station: "TAPAREROU",
              voters: 274
            },
            {
              station: "YOLDE",
              voters: 591
            },
            {
              station: "GOUBOUDO",
              voters: 274
            },
          ],
          "ESPL CHEF TSAPOMA / A": [
            {
              station: "BIRI",
              voters: 352
            },
            {
              station: "DAGANA",
              voters: 352
            },
            {
              station: "GANGOYE",
              voters: 352
            },
            {
              station: "HAMADOU",
              voters: 352
            },
            {
              station: "FONKO",
              voters: 352
            },
            {
              station: "LAKA",
              voters: 352
            },
            {
              station: "FRONTIERE",
              voters: 352
            },
            {
              station: "MALAM",
              voters: 352
            },
            {
              station: "SEINI",
              voters: 352
            },
            {
              station: "BANANA",
              voters: 352
            },
            {
              station: "TSAPOMA",
              voters: 352
            },
          ],
          "ESPL CHEF WAKLA PAKOUARE / A": [
            {
              station: "BAMBI",
              voters: 273
            },
            {
              station: "PAKOUARE",
              voters: 88
            },
          ],
          "ESPL CHEF YOLA MBODEWA / A": [
            {
              station: "BABOUDJI",
              voters: 306
            },
            {
              station: "BADISSEM",
              voters: 792
            },
            {
              station: "BIBILI",
              voters: 236
            },
            {
              station: "SEBODJE",
              voters: 236
            },
            {
              station: "WARO",
              voters: 236
            },
            {
              station: "YOLA",
              voters: 236
            },
            {
              station: "MBODEWA",
              voters: 236
            },
          ],
          "FOYER MUNICIPAL REY BOUBA / A": [
            {
              station: "MARCHE",
              voters: 317
            },
            {
              station: "SABONGARI",
              voters: 317
            },
            {
              station: "BONGODJI",
              voters: 317
            },
          ],
          "HANGAR MARCHE ATEKI / A": [
            {
              station: "ATEKI",
              voters: 508
            },
            {
              station: "BADDIDI",
              voters: 1016
            },
            {
              station: "NOUHOU",
              voters: 508
            },
            {
              station: "TANIMOU",
              voters: 508
            },
            {
              station: "GUILGUE",
              voters: 508
            },
          ],
          "HANGAR MARCHE BALSANGRI / A": [
            {
              station: "BALSANGRI",
              voters: 222
            },
          ],
          "HOPITAL FONDATION MAYO REY / A": [
            {
              station: "ALLABEDDI",
              voters: 496
            },
            {
              station: "BERE",
              voters: 1404
            },
            {
              station: "DAMA",
              voters: 1276
            },
            {
              station: "AREY",
              voters: 496
            },
            {
              station: "KALI'EN",
              voters: 496
            },
            {
              station: "MAIKODE",
              voters: 496
            },
            {
              station: "MBERE'EN",
              voters: 496
            },
            {
              station: "SON'EN",
              voters: 496
            },
            {
              station: "WAINABE",
              voters: 496
            },
          ],
          "LYCEE BERE / A": [
            {
              station: "SERAYE",
              voters: 309
            },
          ],
          "LYCEE REY BOUBA / A": [
            {
              station: "ANINA",
              voters: 344
            },
            {
              station: "BIBBE",
              voters: 603
            },
            {
              station: "HORBE",
              voters: 603
            },
            {
              station: "BOGGA",
              voters: 344
            },
            {
              station: "KASSALA-DJOULDE",
              voters: 344
            },
            {
              station: "KILA'EN",
              voters: 344
            },
          ],
          "MAGASIN PNDP ALFA DJIPORDE / A": [
            {
              station: "BARKAWO",
              voters: 262
            },
            {
              station: "DOUBEL",
              voters: 262
            },
            {
              station: "MBOULOUMDJI",
              voters: 262
            },
            {
              station: "POLMBOMI",
              voters: 262
            },
            {
              station: "DOUA",
              voters: 262
            },
          ],
          "MAGASIN SODECOTON FIMBE / A": [
            {
              station: "FIMBE",
              voters: 212
            },
          ],
        },
        "TCHOLLIRE": {
          "ECOLE MATERNELLE BILINGUE / A": [
            {
              station: "DALBOU",
              voters: 69
            },
          ],
          "EM BILINGUE / A": [
            {
              station: "HOPITAL",
              voters: 393
            },
            {
              station: "DISTRICT",
              voters: 393
            },
            {
              station: "MAN",
              voters: 1482
            },
            {
              station: "BOCARANGA",
              voters: 698
            },
          ],
          "EM NDOKVE / A": [
            {
              station: "TCHOLLIRE",
              voters: 1036
            },
            {
              station: "NDOCKVE",
              voters: 643
            },
            {
              station: "PTT",
              voters: 643
            },
          ],
          "ENIEG / A": [
            {
              station: "ENIEG",
              voters: 57
            },
            {
              station: "MBARANG",
              voters: 698
            },
            {
              station: "GALKE",
              voters: 4828
            },
          ],
          "EP BALANE / A": [
            {
              station: "BAWALDA",
              voters: 339
            },
            {
              station: "MBAN",
              voters: 217
            },
          ],
          "EP BANDA / A": [
            {
              station: "BANDA",
              voters: 979
            },
            {
              station: "WANI",
              voters: 979
            },
          ],
          "EP BAOUTCHI / A": [
            {
              station: "BAOUTCHI",
              voters: 511
            },
            {
              station: "MAYO",
              voters: 7038
            },
            {
              station: "DADI",
              voters: 511
            },
            {
              station: "MBANG",
              voters: 618
            },
            {
              station: "KATMOR",
              voters: 618
            },
            {
              station: "MBEREM",
              voters: 511
            },
          ],
          "EP BOUK / A": [
            {
              station: "BOUK",
              voters: 571
            },
            {
              station: "MAMGUIENWA",
              voters: 1731
            },
          ],
          "EP BOURI / A": [
            {
              station: "BOURI",
              voters: 1827
            },
          ],
          "EP CRC / A": [
            {
              station: "CRC",
              voters: 447
            },
          ],
          "EP DEMSA / A": [
            {
              station: "DEMSA",
              voters: 514
            },
            {
              station: "GAVE",
              voters: 514
            },
            {
              station: "KERWA",
              voters: 1039
            },
          ],
          "EP DJABA / A": [
            {
              station: "DJABA",
              voters: 1274
            },
            {
              station: "DOGBA",
              voters: 2652
            },
          ],
          "EP DOGBA / A": [
            {
              station: "LAGBA",
              voters: 1595
            },
          ],
          "EP DOUGON / A": [
            {
              station: "LANGUI",
              voters: 250
            },
          ],
          "EP DOUKEA / A": [
            {
              station: "DOUGON",
              voters: 567
            },
            {
              station: "DOUKEA",
              voters: 317
            },
            {
              station: "HOME",
              voters: 567
            },
            {
              station: "GARAL",
              voters: 567
            },
          ],
          "EP GAMBA / A": [
            {
              station: "BOBOK",
              voters: 507
            },
            {
              station: "GAMBA",
              voters: 1014
            },
            {
              station: "GENDARMERIE",
              voters: 507
            },
            {
              station: "KARBA",
              voters: 1546
            },
            {
              station: "BABA",
              voters: 507
            },
            {
              station: "BELLO",
              voters: 507
            },
            {
              station: "NOTTO",
              voters: 746
            },
          ],
          "EP GANANI / A": [
            {
              station: "GANANI",
              voters: 980
            },
            {
              station: "DINA",
              voters: 256
            },
            {
              station: "ALIM",
              voters: 256
            },
            {
              station: "MBADJEU",
              voters: 256
            },
          ],
          "EP GOP / A": [
            {
              station: "GAKRI",
              voters: 1162
            },
            {
              station: "GOP-REY",
              voters: 1272
            },
          ],
          "EP GOUGA / A": [
            {
              station: "GOUGA",
              voters: 468
            },
            {
              station: "MANANGNA",
              voters: 530
            },
          ],
          "EP GROUPE I / A": [
            {
              station: "KABA",
              voters: 359
            },
            {
              station: "PANA",
              voters: 359
            },
          ],
          "EP GUIDJIBA / A": [
            {
              station: "GUIDJIBA",
              voters: 805
            },
          ],
          "EP KALI / A": [
            {
              station: "GABA",
              voters: 396
            },
            {
              station: "KALI",
              voters: 333
            },
          ],
          "EP KOTTI MANGA / A": [
            {
              station: "GUERI",
              voters: 239
            },
            {
              station: "MANGA",
              voters: 913
            },
          ],
          "EP KOUM / A": [
            {
              station: "KOUM",
              voters: 323
            },
          ],
          "EP KROUK / A": [
            {
              station: "KROUK",
              voters: 367
            },
            {
              station: "SOUAYE",
              voters: 367
            },
          ],
          "EP LABOUN / A": [
            {
              station: "LABOUN",
              voters: 387
            },
          ],
          "EP LASSERE / A": [
            {
              station: "HORMBALI",
              voters: 791
            },
            {
              station: "LASSERE",
              voters: 117
            },
            {
              station: "NANA",
              voters: 117
            },
            {
              station: "NDONG",
              voters: 117
            },
          ],
          "EP LEUNDA / A": [
            {
              station: "LEMBE",
              voters: 468
            },
            {
              station: "LEUNDA",
              voters: 468
            },
            {
              station: "MAZADOU",
              voters: 468
            },
            {
              station: "SOTTA",
              voters: 468
            },
          ],
          "EP MANDII / A": [
            {
              station: "BAKOI",
              voters: 784
            },
            {
              station: "DII",
              voters: 784
            },
            {
              station: "MBOULI",
              voters: 784
            },
          ],
          "EP MAYO GALKE / A": [
            {
              station: "GANDI",
              voters: 799
            },
            {
              station: "MBOUM",
              voters: 799
            },
            {
              station: "MABOUM",
              voters: 799
            },
            {
              station: "SODECOTON",
              voters: 799
            },
            {
              station: "TOUDJARA",
              voters: 799
            },
          ],
          "EP MBAOU / A": [
            {
              station: "MBIEN",
              voters: 47
            },
          ],
          "EP MBISSIRI / A": [
            {
              station: "MBISSIRI",
              voters: 311
            },
          ],
          "EP NDOUDJA / A": [
            {
              station: "NDOUDJA",
              voters: 73
            },
          ],
          "EP NOUNOUDJE / A": [
            {
              station: "BOKOM",
              voters: 534
            },
            {
              station: "LYCEE",
              voters: 534
            },
            {
              station: "BILINGUE",
              voters: 534
            },
            {
              station: "NOUNOUDJE",
              voters: 534
            },
          ],
          "EP REYNA / A": [
            {
              station: "REYNA",
              voters: 225
            },
            {
              station: "ROH",
              voters: 225
            },
          ],
          "EP SABONGARI MAYO GALKE / A": [
            {
              station: "HAOUSSA",
              voters: 1571
            },
            {
              station: "MAYO-GALKE",
              voters: 1070
            },
            {
              station: "LOUGOUI",
              voters: 535
            },
          ],
          "EP SAKDJE MAFA / A": [
            {
              station: "MAFA",
              voters: 255
            },
          ],
          "EP SASSA / A": [
            {
              station: "NDAWAN",
              voters: 276
            },
            {
              station: "SASSA",
              voters: 276
            },
          ],
          "EP THAM / A": [
            {
              station: "DJAOULE",
              voters: 167
            },
            {
              station: "THAM",
              voters: 167
            },
          ],
          "EP WINDE BOURI / A": [
            {
              station: "WINDE",
              voters: 111
            },
          ],
          "EP YOUKOUT / A": [
            {
              station: "MBIP",
              voters: 325
            },
            {
              station: "TABOUN",
              voters: 433
            },
            {
              station: "YETT",
              voters: 428
            },
            {
              station: "YOUKOUT",
              voters: 325
            },
          ],
          "ESPL CHEF BANDJOUKRI / A": [
            {
              station: "BANDJOUKRI",
              voters: 206
            },
            {
              station: "DOUDJA",
              voters: 206
            },
            {
              station: "HARNAPING",
              voters: 206
            },
            {
              station: "MBAOU",
              voters: 253
            },
            {
              station: "MBIEM",
              voters: 323
            },
            {
              station: "NYAN",
              voters: 253
            },
            {
              station: "VAH",
              voters: 253
            },
          ],
          "ESPL CHEF DALBOU / A": [
            {
              station: "KABANG",
              voters: 524
            },
            {
              station: "YELBO",
              voters: 524
            },
            {
              station: "(M.G)",
              voters: 524
            },
          ],
          "ESPL CHEF GALKE / A": [
            {
              station: "COMPAGNIE",
              voters: 476
            },
          ],
          "ESPL CHEF MBILLARE / A": [
            {
              station: "MBILARE",
              voters: 576
            },
            {
              station: "TOLORE",
              voters: 823
            },
            {
              station: "PANDJAMA",
              voters: 576
            },
          ],
          "ESPL CHEF SAKDJE / A": [
            {
              station: "BAWAN",
              voters: 2464
            },
            {
              station: "MBANA",
              voters: 2425
            },
            {
              station: "OURO",
              voters: 2302
            },
            {
              station: "BOBBO",
              voters: 2302
            },
            {
              station: "SAKDJE",
              voters: 2557
            },
          ],
          "ESPL CHEF WANGAR / A": [
            {
              station: "WAINABE",
              voters: 269
            },
          ],
          "ESPL FADA / A": [
            {
              station: "BIBE",
              voters: 374
            },
            {
              station: "HORBE",
              voters: 374
            },
            {
              station: "KAWADI",
              voters: 374
            },
            {
              station: "PORMI",
              voters: 423
            },
            {
              station: "YONDE",
              voters: 374
            },
          ],
          "ESPL MAKEDKED / A": [
            {
              station: "MAKEDKED",
              voters: 110
            },
          ],
          "ESPL MAYO DJEMMA / A": [
            {
              station: "DJEMMA",
              voters: 85
            },
          ],
          "ESPL MAYO HALFOU / A": [
            {
              station: "HALFOU",
              voters: 139
            },
          ],
          "ESPL NANGAROU / A": [
            {
              station: "NANGAROU",
              voters: 40
            },
          ],
          "LYCEE GAMBA / A": [
            {
              station: "BALANE",
              voters: 691
            },
            {
              station: "BOKKO",
              voters: 474
            },
            {
              station: "KOTTI",
              voters: 713
            },
            {
              station: "PETEL",
              voters: 591
            },
            {
              station: "KOUNDINI",
              voters: 1634
            },
            {
              station: "MBOUDJI",
              voters: 2022
            },
            {
              station: "YADJI",
              voters: 1008
            },
            {
              station: "NIGBA",
              voters: 474
            },
            {
              station: "VAGBA",
              voters: 474
            },
            {
              station: "WAA",
              voters: 474
            },
          ],
          "LYCEE TECHNIQUE / A": [
            {
              station: "DOUFFIN",
              voters: 605
            },
            {
              station: "KARNA",
              voters: 303
            },
            {
              station: "NGAOUDJI",
              voters: 303
            },
            {
              station: "NGORHECK",
              voters: 303
            },
            {
              station: "SONN",
              voters: 303
            },
          ],
          "SAR SM / A": [
            {
              station: "BALINOBE",
              voters: 773
            },
            {
              station: "BAMILEKE",
              voters: 468
            },
            {
              station: "DJOUBAOU",
              voters: 468
            },
            {
              station: "SARA",
              voters: 827
            },
          ],
          "SOUS PREFECTURE / A": [
            {
              station: "PREFECTURE",
              voters: 305
            },
            {
              station: "SOUS-PREFECTURE",
              voters: 305
            },
            {
              station: "WANGAR",
              voters: 574
            },
          ],
        },
        "TOUBORO": {
          "CENTRE DE SANTE MBANG REY / A": [
            {
              station: "GAOU",
              voters: 108
            },
            {
              station: "NDENG",
              voters: 108
            },
          ],
          "CES VOGZOM TONOM / A": [
            {
              station: "DOMAYO",
              voters: 769
            },
            {
              station: "VOGZOM",
              voters: 8521
            },
            {
              station: "KERBAI",
              voters: 1773
            },
            {
              station: "MASSOSSE",
              voters: 769
            },
            {
              station: "MBEREM",
              voters: 1340
            },
            {
              station: "MOUAROM",
              voters: 1340
            },
            {
              station: "SABONGARI",
              voters: 1432
            },
            {
              station: "TCHATBALI",
              voters: 769
            },
            {
              station: "VONG",
              voters: 2755
            },
            {
              station: "NAH",
              voters: 2755
            },
          ],
          "E.P BONG RAI / A": [
            {
              station: "KAWASINI",
              voters: 628
            },
            {
              station: "SOMALI",
              voters: 628
            },
          ],
          "E.P LOUGGERE / A": [
            {
              station: "LOUGGUERE",
              voters: 247
            },
          ],
          "E.P OURO DARA / A": [
            {
              station: "NARRAL",
              voters: 1461
            },
          ],
          "E.P OURO SALI / A": [
            {
              station: "SALI",
              voters: 294
            },
            {
              station: "RABINGA",
              voters: 294
            },
          ],
          "E.P. DE DOUROUBERG / A": [
            {
              station: "DOUROU",
              voters: 196
            },
            {
              station: "BERG",
              voters: 196
            },
            {
              station: "DOUROUBERG",
              voters: 196
            },
          ],
          "E.P. DE MIGALAK-NDJILOUGOU / A": [
            {
              station: "DEOLE",
              voters: 384
            },
            {
              station: "ABDOU",
              voters: 384
            },
            {
              station: "AMINOU",
              voters: 384
            },
            {
              station: "HAMADJOULDE",
              voters: 384
            },
            {
              station: "HAKOUDEROU",
              voters: 233
            },
            {
              station: "MIGALAK-NDJILOUGOU",
              voters: 233
            },
            {
              station: "NDJILOUGOU",
              voters: 233
            },
            {
              station: "DJAFAROU",
              voters: 466
            },
            {
              station: "BOUTALI",
              voters: 535
            },
            {
              station: "SIDDI",
              voters: 535
            },
            {
              station: "HAKOUNDEROU",
              voters: 302
            },
          ],
          "ELEVAGE MBANG REY / A": [
            {
              station: "DJOUCK",
              voters: 1638
            },
            {
              station: "ELEVAGE",
              voters: 253
            },
          ],
          "EP AKANA / A": [
            {
              station: "MAYO",
              voters: 10202
            },
            {
              station: "BARKA",
              voters: 2234
            },
            {
              station: "BATSA",
              voters: 1655
            },
          ],
          "EP AMBARANG / A": [
            {
              station: "AMBARANG",
              voters: 480
            },
          ],
          "EP BABIDAN / A": [
            {
              station: "BABIDAN",
              voters: 265
            },
            {
              station: "LARAKOUSSINI",
              voters: 265
            },
          ],
          "EP BAGOU / A": [
            {
              station: "BAGOU",
              voters: 267
            },
          ],
          "EP BAKARI / A": [
            {
              station: "BAKARI",
              voters: 475
            },
            {
              station: "BARKARI",
              voters: 475
            },
          ],
          "EP BAOUDI / A": [
            {
              station: "BAOUDI",
              voters: 341
            },
          ],
          "EP BEMBOYO / A": [
            {
              station: "BEMBOYO",
              voters: 697
            },
          ],
          "EP BENOU / A": [
            {
              station: "BANZORO",
              voters: 134
            },
            {
              station: "BENOU",
              voters: 134
            },
          ],
          "EP BILOUGUI / A": [
            {
              station: "BILOUGUI",
              voters: 604
            },
          ],
          "EP BITIOU / A": [
            {
              station: "AVIATION",
              voters: 1539
            },
            {
              station: "BILTAO",
              voters: 1446
            },
            {
              station: "BOGDIBO",
              voters: 2021
            },
            {
              station: "MANE",
              voters: 1997
            },
            {
              station: "QUARTIER",
              voters: 12664
            },
            {
              station: "BITIOU",
              voters: 1159
            },
          ],
          "EP BOGDIBO / A": [
            {
              station: "KOUBAOU",
              voters: 862
            },
          ],
          "EP BOGDORO / A": [
            {
              station: "BOGDORO",
              voters: 351
            },
            {
              station: "MBALI",
              voters: 351
            },
            {
              station: "MBIDERE",
              voters: 351
            },
          ],
          "EP BOKO / A": [
            {
              station: "BOKO",
              voters: 500
            },
            {
              station: "DOMPTA",
              voters: 692
            },
            {
              station: "BOTANA",
              voters: 500
            },
            {
              station: "BOUGOUI",
              voters: 500
            },
            {
              station: "MBOKO",
              voters: 1162
            },
            {
              station: "MBAILARA",
              voters: 2486
            },
            {
              station: "POCKEA",
              voters: 692
            },
          ],
          "EP BOUGOUE / A": [
            {
              station: "BOUGOUE",
              voters: 411
            },
          ],
          "EP DJACKONE / A": [
            {
              station: "DJACKONE",
              voters: 437
            },
          ],
          "EP DJOM / A": [
            {
              station: "DEO",
              voters: 907
            },
            {
              station: "LIBERE",
              voters: 185
            },
            {
              station: "DJOM",
              voters: 457
            },
            {
              station: "NDOYE",
              voters: 185
            },
            {
              station: "PELE",
              voters: 185
            },
          ],
          "EP DOMPTA / A": [
            {
              station: "GAMBORO",
              voters: 192
            },
          ],
          "EP ELEPHANT / A": [
            {
              station: "ELEPHANT",
              voters: 463
            },
          ],
          "EP FLAYE / A": [
            {
              station: "FLAYE",
              voters: 465
            },
            {
              station: "SEYO",
              voters: 465
            },
          ],
          "EP FOULBI / A": [
            {
              station: "FOULBI",
              voters: 205
            },
          ],
          "EP FOUMBANG / A": [
            {
              station: "FOUMBANG",
              voters: 384
            },
            {
              station: "KAPLA",
              voters: 384
            },
          ],
          "EP FRAGON / A": [
            {
              station: "FRAGON",
              voters: 241
            },
          ],
          "EP GAI TOUKOULOU / A": [
            {
              station: "GAI-TOUKOULOU",
              voters: 346
            },
            {
              station: "NASSARAO",
              voters: 346
            },
          ],
          "EP HABAGA / A": [
            {
              station: "HABAGA",
              voters: 423
            },
          ],
          "EP HAIDJAM / A": [
            {
              station: "HAIDJAM",
              voters: 504
            },
          ],
          "EP HANKAO / A": [
            {
              station: "DJIWARI",
              voters: 480
            },
            {
              station: "GUIGUI",
              voters: 480
            },
            {
              station: "HANKAO",
              voters: 480
            },
            {
              station: "NDIKA",
              voters: 480
            },
            {
              station: "NGONGUE",
              voters: 480
            },
          ],
          "EP HELBAO / A": [
            {
              station: "BALDI",
              voters: 373
            },
            {
              station: "BOGLERE",
              voters: 373
            },
            {
              station: "HELBAO",
              voters: 373
            },
            {
              station: "MBODO",
              voters: 635
            },
            {
              station: "VOYE",
              voters: 1035
            },
          ],
          "EP HOME / A": [
            {
              station: "HOME",
              voters: 845
            },
          ],
          "EP KADES / A": [
            {
              station: "KADES",
              voters: 388
            },
          ],
          "EP KANANA / A": [
            {
              station: "KANANA",
              voters: 465
            },
          ],
          "EP KARANG PANDJAMA / A": [
            {
              station: "KARANG",
              voters: 357
            },
            {
              station: "PANDJAMA",
              voters: 2112
            },
            {
              station: "NDODI",
              voters: 357
            },
          ],
          "EP KOMBO GOUDRON / A": [
            {
              station: "KOMBO",
              voters: 1862
            },
            {
              station: "GOUDRON",
              voters: 1347
            },
            {
              station: "MANBERE",
              voters: 832
            },
          ],
          "EP KOUMANE BAYA / A": [
            {
              station: "KOUMANE",
              voters: 501
            },
            {
              station: "BAYA",
              voters: 1035
            },
            {
              station: "LANYA",
              voters: 78
            },
          ],
          "EP KOUMANE MBOUM / A": [
            {
              station: "BOGLARA",
              voters: 1583
            },
          ],
          "EP LAOUDJONGUE / A": [
            {
              station: "LAOUDJONGUE",
              voters: 490
            },
          ],
          "EP LOUBOL / A": [
            {
              station: "DJACPENDI",
              voters: 310
            },
            {
              station: "DJACPOING",
              voters: 310
            },
            {
              station: "DJORO",
              voters: 310
            },
            {
              station: "LOUBOL",
              voters: 310
            },
            {
              station: "NGAOURING",
              voters: 310
            },
            {
              station: "OURO",
              voters: 8094
            },
            {
              station: "SOULEY",
              voters: 310
            },
            {
              station: "SARIBAYASSA",
              voters: 310
            },
            {
              station: "SOUROUDI",
              voters: 310
            },
            {
              station: "WODI",
              voters: 310
            },
          ],
          "EP MALAOUMBALI / A": [
            {
              station: "MALAOUMBALI",
              voters: 225
            },
            {
              station: "IWARE",
              voters: 503
            },
          ],
          "EP MANE GARMANE / A": [
            {
              station: "GARMANE",
              voters: 229
            },
            {
              station: "MBIKOUNI",
              voters: 2552
            },
          ],
          "EP MAROUM / A": [
            {
              station: "MAROUM",
              voters: 241
            },
          ],
          "EP MATA MADA / A": [
            {
              station: "MATA",
              voters: 429
            },
            {
              station: "MADA",
              voters: 429
            },
          ],
          "EP MAYO KOLOM / A": [
            {
              station: "KOLOM",
              voters: 201
            },
          ],
          "EP MAYO MBI / A": [
            {
              station: "MBI",
              voters: 600
            },
          ],
          "EP MAYO NDAH / A": [
            {
              station: "NDAH",
              voters: 652
            },
          ],
          "EP MAYO ZAKI / A": [
            {
              station: "ZAKI",
              voters: 681
            },
          ],
          "EP MBAIMBEO / A": [
            {
              station: "MBAIMBEO",
              voters: 435
            },
          ],
          "EP MBAIMBOUM SOGBE / A": [
            {
              station: "LAOUKARI",
              voters: 1288
            },
            {
              station: "PAMPANDJAMA",
              voters: 1288
            },
            {
              station: "SOGBE",
              voters: 1288
            },
            {
              station: "MBAIMBOUM",
              voters: 1288
            },
          ],
          "EP MBAKA / A": [
            {
              station: "FOUBELA",
              voters: 1239
            },
            {
              station: "MAN",
              voters: 1621
            },
            {
              station: "MBAKA",
              voters: 1239
            },
            {
              station: "MBALL",
              voters: 1621
            },
            {
              station: "MBILO",
              voters: 1621
            },
            {
              station: "NGARANG",
              voters: 1621
            },
          ],
          "EP MBAKANA / A": [
            {
              station: "BARBARA",
              voters: 971
            },
            {
              station: "MBAKANA",
              voters: 415
            },
          ],
          "EP MBALAINDE / A": [
            {
              station: "BINGOH",
              voters: 477
            },
            {
              station: "MBALAINDE",
              voters: 477
            },
          ],
          "EP MBANG REY / A": [
            {
              station: "BANDIP",
              voters: 665
            },
            {
              station: "DJOCK",
              voters: 665
            },
            {
              station: "FADA",
              voters: 4099
            },
            {
              station: "MBANG",
              voters: 1583
            },
            {
              station: "IBAL",
              voters: 665
            },
            {
              station: "KIM",
              voters: 816
            },
            {
              station: "MAFARE",
              voters: 1068
            },
            {
              station: "MARCHE",
              voters: 665
            },
            {
              station: "MIGALACK",
              voters: 898
            },
            {
              station: "NDIP",
              voters: 665
            },
            {
              station: "NDJOUCK",
              voters: 665
            },
            {
              station: "WAKASSAOU",
              voters: 665
            },
            {
              station: "SA'A",
              voters: 665
            },
            {
              station: "GOUDOU",
              voters: 859
            },
          ],
          "EP MBEING / A": [
            {
              station: "MBEING",
              voters: 935
            },
            {
              station: "MBEM",
              voters: 872
            },
          ],
          "EP MBONG / A": [
            {
              station: "SOROMBEO",
              voters: 287
            },
          ],
          "EP MBONO / A": [
            {
              station: "BOUKOUTOU",
              voters: 158
            },
            {
              station: "MBONO",
              voters: 80
            },
            {
              station: "SANGA",
              voters: 80
            },
            {
              station: "MBAI",
              voters: 1682
            },
          ],
          "EP MOYO LADDE / A": [
            {
              station: "KAOUN",
              voters: 1378
            },
            {
              station: "LADDE",
              voters: 688
            },
          ],
          "EP NDJINDANG / A": [
            {
              station: "BABOUDJI",
              voters: 425
            },
            {
              station: "FOUFORE",
              voters: 425
            },
            {
              station: "KOUMVOU",
              voters: 425
            },
            {
              station: "MBILKOUNI",
              voters: 425
            },
            {
              station: "NDJINDANG",
              voters: 425
            },
            {
              station: "SEING",
              voters: 2244
            },
            {
              station: "DJAOURO",
              voters: 2614
            },
            {
              station: "NAN",
              voters: 425
            },
          ],
          "EP NDOCK / A": [
            {
              station: "NDOCK",
              voters: 855
            },
          ],
          "EP NGAIN / A": [
            {
              station: "NANA",
              voters: 459
            },
            {
              station: "NGAIN",
              voters: 459
            },
            {
              station: "YAYA",
              voters: 636
            },
          ],
          "EP NGAY LARA / A": [
            {
              station: "NGAI",
              voters: 511
            },
            {
              station: "LARA",
              voters: 259
            },
          ],
          "EP NGAY RAH / A": [
            {
              station: "NGAY",
              voters: 210
            },
            {
              station: "RAH",
              voters: 210
            },
          ],
          "EP NGOUMI / A": [
            {
              station: "MINDAYE",
              voters: 1160
            },
            {
              station: "ROHL",
              voters: 1160
            },
          ],
          "EP OURO DJODI / A": [
            {
              station: "DJODI",
              voters: 290
            },
          ],
          "EP OURO HAIROU / A": [
            {
              station: "HAIROU",
              voters: 183
            },
          ],
          "EP OURO KESSOUM / A": [
            {
              station: "KESSOUM",
              voters: 628
            },
          ],
          "EP OURO LAKWE / A": [
            {
              station: "LAKWE",
              voters: 448
            },
          ],
          "EP OURO MASSARA / A": [
            {
              station: "MASSARA",
              voters: 663
            },
          ],
          "EP PHACOCHERE / A": [
            {
              station: "PHACOCHERE",
              voters: 1230
            },
          ],
          "EP RIBAO / A": [
            {
              station: "RIBAO",
              voters: 428
            },
          ],
          "EP ROL/DSCHANG / A": [
            {
              station: "CONALEMOU",
              voters: 502
            },
            {
              station: "DSCHANG",
              voters: 502
            },
            {
              station: "MAZORGOI",
              voters: 502
            },
            {
              station: "ROL",
              voters: 502
            },
            {
              station: "SASSA",
              voters: 502
            },
            {
              station: "PETEL",
              voters: 580
            },
          ],
          "EP SELAL MBOUSSIRI / A": [
            {
              station: "KALAKI",
              voters: 272
            },
            {
              station: "GANKALIA",
              voters: 272
            },
            {
              station: "LAINDE",
              voters: 272
            },
            {
              station: "GUINADJI",
              voters: 272
            },
            {
              station: "SELAL",
              voters: 272
            },
            {
              station: "MBOUSSIRI",
              voters: 272
            },
            {
              station: "TALAKI",
              voters: 272
            },
            {
              station: "MANDAL",
              voters: 272
            },
          ],
          "EP SIRBIA / A": [
            {
              station: "SIRBIA",
              voters: 344
            },
          ],
          "EP SIRI / A": [
            {
              station: "SIRI",
              voters: 460
            },
          ],
          "EP SOKORTA MANGA / A": [
            {
              station: "BOFORO",
              voters: 303
            },
            {
              station: "SODEA",
              voters: 326
            },
            {
              station: "MANGA",
              voters: 510
            },
            {
              station: "SOKORTA",
              voters: 237
            },
            {
              station: "TENKORI",
              voters: 159
            },
            {
              station: "YAHORO",
              voters: 159
            },
          ],
          "EP SORAMBOUM / A": [
            {
              station: "MBARKA",
              voters: 389
            },
            {
              station: "SORAMBOUM",
              voters: 389
            },
          ],
          "EP TAPI / A": [
            {
              station: "TAPI",
              voters: 590
            },
          ],
          "EP TOUBORO GPE 1 / A": [
            {
              station: "LOUMO-DOLE",
              voters: 1579
            },
            {
              station: "CARREFOUR",
              voters: 3394
            },
            {
              station: "ALH",
              voters: 2429
            },
            {
              station: "IBRAHIM",
              voters: 1579
            },
          ],
          "EP TOUBORO GPE 2 / A": [
            {
              station: "BOKONDAYA",
              voters: 462
            },
            {
              station: "MISSION",
              voters: 462
            },
            {
              station: "CATHOLIQUE",
              voters: 462
            },
          ],
          "EP TOULDORO BELAKA / A": [
            {
              station: "BENANA",
              voters: 554
            },
            {
              station: "TOULDORO",
              voters: 1364
            },
            {
              station: "HAKAO",
              voters: 965
            },
            {
              station: "HOLKAN",
              voters: 954
            },
            {
              station: "SAKA",
              voters: 682
            },
          ],
          "EP VOGZOM NAKE / A": [
            {
              station: "NAKE",
              voters: 434
            },
          ],
          "EP VONG NAH / A": [
            {
              station: "BINI",
              voters: 1645
            },
            {
              station: "NAGGA",
              voters: 1866
            },
            {
              station: "DARA",
              voters: 1866
            },
          ],
          "EP WALDE / A": [
            {
              station: "WALDE",
              voters: 1368
            },
          ],
          "EP WANTOUNOU / A": [
            {
              station: "BOKOBO",
              voters: 109
            },
            {
              station: "WAKASSAO",
              voters: 362
            },
            {
              station: "WANTOUNOU",
              voters: 109
            },
          ],
          "EP YANDEA / A": [
            {
              station: "TENYAWOE",
              voters: 167
            },
            {
              station: "YANDEA",
              voters: 167
            },
          ],
          "EP YANLI GUIZIGA / A": [
            {
              station: "YANLI",
              voters: 596
            },
            {
              station: "GUIZIGA",
              voters: 232
            },
          ],
          "EP YOKO / A": [
            {
              station: "BAL",
              voters: 1382
            },
            {
              station: "BONG",
              voters: 2010
            },
            {
              station: "REY",
              voters: 3982
            },
            {
              station: "KOUBAGDJE",
              voters: 1382
            },
            {
              station: "MBONG",
              voters: 1836
            },
            {
              station: "TILLI",
              voters: 1382
            },
            {
              station: "YOKO",
              voters: 1382
            },
            {
              station: "YORO",
              voters: 1685
            },
          ],
          "ESPL CHEF AKANA / A": [
            {
              station: "AKANA",
              voters: 1448
            },
          ],
          "ESPL CHEF CARREFOU MAROUARE / A": [
            {
              station: "KABA",
              voters: 1818
            },
            {
              station: "MAROUARE",
              voters: 1818
            },
            {
              station: "NIGER",
              voters: 1818
            },
            {
              station: "TAKAROU",
              voters: 1818
            },
          ],
          "ESPL CHEF CARREFOUR MAYO LAWA / A": [
            {
              station: "LAWA",
              voters: 639
            },
          ],
          "ESPL CHEF DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 546
            },
          ],
          "ESPL CHEF KOMBO VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 1337
            },
            {
              station: "KON",
              voters: 515
            },
            {
              station: "MVOR",
              voters: 515
            },
            {
              station: "ZANDA",
              voters: 515
            },
          ],
          "ESPL CHEF LAGGAYE / A": [
            {
              station: "DJIPORDE",
              voters: 327
            },
            {
              station: "LAGGAYE",
              voters: 580
            },
            {
              station: "LAOUDARI",
              voters: 327
            },
            {
              station: "MBIDOUMA",
              voters: 327
            },
          ],
          "ESPL CHEF LAGGOYE / A": [
            {
              station: "AGALA",
              voters: 351
            },
            {
              station: "CARRIERE",
              voters: 761
            },
            {
              station: "LAGGOYE",
              voters: 922
            },
            {
              station: "MBILAOU",
              voters: 571
            },
          ],
          "ESPL CHEF LAOUNINGA / A": [
            {
              station: "LAOUNINGA",
              voters: 373
            },
            {
              station: "NDANGA",
              voters: 373
            },
          ],
          "ESPL CHEF MAYO GUEMZECK / A": [
            {
              station: "MAYO-GUEMZEK",
              voters: 523
            },
          ],
          "ESPL CHEF MAYO ZARIA / A": [
            {
              station: "ZARIA",
              voters: 818
            },
          ],
          "ESPL CHEF MBAI MBOUM LAKHORO / A": [
            {
              station: "LAKHORO",
              voters: 1805
            },
          ],
          "ESPL CHEF MBAI MBOUM MARCHE / A": [
            {
              station: "MBOUM",
              voters: 2025
            },
            {
              station: "KOUDJEOU",
              voters: 1602
            },
            {
              station: "RIAD",
              voters: 1602
            },
          ],
          "ESPL CHEF MBANG REY NDOCK TIBA / A": [
            {
              station: "TIBA",
              voters: 91
            },
          ],
          "ESPL CHEF MBIKOUNI FOULBE / A": [
            {
              station: "FOULBE",
              voters: 1366
            },
            {
              station: "RONGODONG",
              voters: 1366
            },
            {
              station: "SODECOTON",
              voters: 1997
            },
          ],
          "ESPL CHEF MBITOM / A": [
            {
              station: "MBITOM",
              voters: 862
            },
          ],
          "ESPL CHEF NDJORO / A": [
            {
              station: "NDJORO",
              voters: 339
            },
          ],
          "ESPL CHEF NGAI NDICKI / A": [
            {
              station: "NDICKI",
              voters: 252
            },
          ],
          "ESPL CHEF NGARA NGOH / A": [
            {
              station: "NGARA",
              voters: 135
            },
            {
              station: "NGOH",
              voters: 135
            },
          ],
          "ESPL CHEF NGUEOUTAOU / A": [
            {
              station: "MBIDAM",
              voters: 367
            },
            {
              station: "NDOUROU",
              voters: 367
            },
            {
              station: "NGUEOUTAOU",
              voters: 367
            },
          ],
          "ESPL CHEF NGUIWIRI / A": [
            {
              station: "KOUROUMDJI",
              voters: 295
            },
            {
              station: "MAKOUNI",
              voters: 472
            },
            {
              station: "NDJELE",
              voters: 295
            },
            {
              station: "NGAOUROM",
              voters: 295
            },
            {
              station: "NGUIRWIRI",
              voters: 295
            },
          ],
          "ESPL CHEF OURO DALA / A": [
            {
              station: "DALA",
              voters: 177
            },
          ],
          "ESPL CHEF TCHABAL SILE DJAORO BOUBA /  A": [
            {
              station: "TCHABAL",
              voters: 866
            },
            {
              station: "SILE",
              voters: 331
            },
            {
              station: "DJAORO",
              voters: 331
            },
            {
              station: "BOUBA",
              voters: 154
            },
          ],
          "ESPL CHEF TOUBORO MBOUM / A": [
            {
              station: "BIRIBA",
              voters: 1231
            },
            {
              station: "MBITOYE",
              voters: 1435
            },
            {
              station: "TOUBORO",
              voters: 4935
            },
          ],
          "ESPLANADE CHEFFERI GOLOMBALI / A": [
            {
              station: "GOLOMBALI",
              voters: 470
            },
            {
              station: "NGOUMI",
              voters: 8003
            },
          ],
          "GIC SODECOTON LARAH NDAH / A": [
            {
              station: "LARA-NDAH",
              voters: 261
            },
          ],
          "LYCEE YANLI MOUNDANG / A": [
            {
              station: "MOUNDANG",
              voters: 364
            },
          ],
          "MAIRIE TOUBORO / A": [
            {
              station: "CAMP",
              voters: 400
            },
            {
              station: "BIR",
              voters: 200
            },
            {
              station: "GENDARMERIE",
              voters: 200
            },
            {
              station: "MAIRIE",
              voters: 200
            },
          ],
          "SOUS PREFECTURE TOUBORO / A": [
            {
              station: "FONCTIONNAIRES",
              voters: 353
            },
            {
              station: "SOUS",
              voters: 353
            },
            {
              station: "PREFECTURE",
              voters: 353
            },
          ],
        },
      },
    },
  },
};
