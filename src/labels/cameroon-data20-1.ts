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
  "EST": {
    name: { en: "EAST", fr: "EST" },
    divisions: {
      "HAUT-NYONG": {
        "ABONG-MBANG": {
          "ANCIEN CENTRE DE SANTE COMM D'OBOUL I  /A": [
            {
              station: "OBOUL",
              voters: 411
            },
          ],
          "BASE PHYTO-SANITAIRE D'ABONG-MBANG II /  A": [
            {
              station: "ABONG-MBANG",
              voters: 806
            },
          ],
          "CASE A PALABRE DE NKOUOLOU / A": [
            {
              station: "NKOUOLOU",
              voters: 31
            },
          ],
          "DEL DEPTALE D'AGRICULTURE / A": [
            {
              station: "QUARTIER",
              voters: 5092
            },
            {
              station: "ADMINISTRATIF",
              voters: 1835
            },
          ],
          "ECOLE ANNEXE GROUPE IV / A": [
            {
              station: "HAOUSSA",
              voters: 1959
            },
            {
              station: "ZALOUM",
              voters: 1959
            },
          ],
          "ECOLE CATHOLIQUE DE DJOW / A": [
            {
              station: "DJOW",
              voters: 364
            },
          ],
          "ECOLE MATERNELLE GROUPE I / A": [
            {
              station: "KAKO",
              voters: 449
            },
          ],
          "ECOLE PUBLIQUE ADOUMA / A": [
            {
              station: "ADOUMA",
              voters: 4
            },
          ],
          "ECOLE PUBLIQUE D'ABONG-DOUM / A": [
            {
              station: "ABONG-DOUM",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE D'ANKOAMBOMB / A": [
            {
              station: "ANKOAMBOMB",
              voters: 5
            },
          ],
          "ECOLE PUBLIQUE D'ANKOUNG / A": [
            {
              station: "ANKOUNG",
              voters: 7
            },
          ],
          "ECOLE PUBLIQUE D'ANZIE / A": [
            {
              station: "ANZIE",
              voters: 8
            },
          ],
          "ECOLE PUBLIQUE DE BAGOFIT / A": [
            {
              station: "BAGOFIT",
              voters: 11
            },
          ],
          "ECOLE PUBLIQUE DE BINDANANG / A": [
            {
              station: "BINDANANG",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE DE DJENASSOUME / A": [
            {
              station: "DJENASSOUME",
              voters: 14
            },
          ],
          "ECOLE PUBLIQUE DE MAZABE / A": [
            {
              station: "MAZABE",
              voters: 20
            },
          ],
          "ECOLE PUBLIQUE DE MPENZOK / A": [
            {
              station: "MPENZOK",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE DE NDJIBE / A": [
            {
              station: "NDJIBE",
              voters: 26
            },
          ],
          "ECOLE PUBLIQUE DE NDJODJOCK / A": [
            {
              station: "NDJODJOCK",
              voters: 28
            },
          ],
          "ECOLE PUBLIQUE DE NKOL-MVOLAN / A": [
            {
              station: "NKOL-MVOLAN",
              voters: 29
            },
            {
              station: "NTAKUIMB",
              voters: 29
            },
          ],
          "ECOLE PUBLIQUE DE NTIMBE I / A": [
            {
              station: "NTIMBE",
              voters: 65
            },
          ],
          "ECOLE PUBLIQUE DU CENTRE / A": [
            {
              station: "MBOULE",
              voters: 1687
            },
            {
              station: "NYONG",
              voters: 852
            },
          ],
          "EP MISSOUME / A": [
            {
              station: "MISSOUME",
              voters: 80
            },
          ],
          "FOYER BAFOUSSAM / A": [
            {
              station: "MAKA",
              voters: 849
            },
          ],
          "FOYER COMM DE SOKAMALAM / A": [
            {
              station: "SOKAMALAM",
              voters: 307
            },
          ],
          "FOYER COMM DE ZOGUEBOU / A": [
            {
              station: "ZOGUEBOU",
              voters: 57
            },
          ],
          "FOYER COMMUNAUTAIRE D'AYENE / A": [
            {
              station: "AYENE",
              voters: 19
            },
          ],
          "FOYER COMMUNAUTAIRE DE MIANT / A": [
            {
              station: "MIANT",
              voters: 24
            },
          ],
          "FOYER COMMUNAUTAIRE DE NDJIBOT / A": [
            {
              station: "NDJIBOT",
              voters: 27
            },
          ],
          "HANGAR A PALABRE D'ANKOUAMB / A": [
            {
              station: "ANKOUAMB",
              voters: 6
            },
          ],
          "HANGAR A PALABRE DE NTOUNG / A": [
            {
              station: "NTOUNG",
              voters: 34
            },
          ],
          "HANGAR COMMERCIAL DE BAMAKO / A": [
            {
              station: "BAMAKO",
              voters: 12
            },
          ],
          "HANGAR DE NKOUAL / A": [
            {
              station: "NKOUAL",
              voters: 30
            },
          ],
          "LEPROSERIE DE KWOAMB / A": [
            {
              station: "KWOAMB",
              voters: 17
            },
          ],
          "LYCEE BILINGUE DE MADOUMA / A": [
            {
              station: "MADOUMA",
              voters: 37
            },
          ],
          "SUBDIVISION DES ROUTES / A": [
            {
              station: "MBAM",
              voters: 415
            },
            {
              station: "EWONDO",
              voters: 415
            },
          ],
        },
        "ATOK": {
          "EP AKOK MAKA / A": [
            {
              station: "AKOK",
              voters: 489
            },
            {
              station: "MAKA",
              voters: 403
            },
          ],
          "EP ATOK A / A": [
            {
              station: "PALAIS",
              voters: 858
            },
          ],
          "EP BIGOENS / A": [
            {
              station: "BIGOENS",
              voters: 279
            },
          ],
          "EP DJOUM / A": [
            {
              station: "DJOUM",
              voters: 171
            },
          ],
          "EP MAKOK / A": [
            {
              station: "MAKOK",
              voters: 369
            },
          ],
          "EP MBAMA / A": [
            {
              station: "CARREFOUR",
              voters: 373
            },
          ],
          "EP MIKOAGUE / A": [
            {
              station: "MIKOAGUE",
              voters: 147
            },
          ],
          "EP MPANDE MBAMA / A": [
            {
              station: "MPANDE",
              voters: 152
            },
          ],
          "EP NGOULEMAKONG / A": [
            {
              station: "NGOULEMAKONG",
              voters: 97
            },
          ],
          "EP NKOEMETAK 2 / A": [
            {
              station: "NKOEMETAK",
              voters: 214
            },
          ],
          "EP SOUOMBOU / A": [
            {
              station: "SOUOMBOU",
              voters: 189
            },
            {
              station: "VILLAGE",
              voters: 189
            },
          ],
          "EP ZOGUELA / A": [
            {
              station: "ZOGUELA",
              voters: 212
            },
          ],
          "FOYER PUBLIC BENDE / A": [
            {
              station: "BENDE",
              voters: 53
            },
          ],
          "H P LANDA ROUTE / A": [
            {
              station: "ROUTE",
              voters: 48
            },
          ],
          "HANGAR PUBLIC AKOK - YEBEKOLO / A": [
            {
              station: "-YEBEKOLO",
              voters: 86
            },
          ],
          "HANGAR PUBLIC ATOK - CFSO / A": [
            {
              station: "ATOK",
              voters: 933
            },
            {
              station: "CFSO",
              voters: 75
            },
          ],
          "HANGAR PUBLIC BIDJIGUE 1 / A": [
            {
              station: "BIDJIGUE",
              voters: 215
            },
          ],
          "HANGAR PUBLIC DJEMB / A": [
            {
              station: "DJEMB",
              voters: 77
            },
            {
              station: "MBAMA",
              voters: 602
            },
          ],
          "HANGAR PUBLIC EBODENKOU / A": [
            {
              station: "EBODENKOU",
              voters: 86
            },
          ],
          "HANGAR PUBLIC EFFOULAN / A": [
            {
              station: "EFFOULAN",
              voters: 86
            },
            {
              station: "LANDA",
              voters: 234
            },
          ],
          "HANGAR PUBLIC KODJANS / A": [
            {
              station: "KODJANS",
              voters: 72
            },
          ],
          "HANGAR PUBLIC MAKOGOU / A": [
            {
              station: "MAKOGOU",
              voters: 101
            },
          ],
          "HANGAR PUBLIC MAYOS BEBEND / A": [
            {
              station: "MAYOS",
              voters: 135
            },
            {
              station: "BEBEND",
              voters: 135
            },
          ],
          "HANGAR PUBLIC NDANKUIMB / A": [
            {
              station: "NDANKUIMB",
              voters: 327
            },
          ],
          "HANGAR PUBLIC NDJINDA / A": [
            {
              station: "NDJINDA",
              voters: 232
            },
          ],
          "HANGAR PUBLIC NTOUMB / A": [
            {
              station: "NTOUMB",
              voters: 80
            },
          ],
          "HANGAR PUBLIC NYIMBE / A": [
            {
              station: "NYIMBE",
              voters: 121
            },
          ],
        },
        "DIMAKO": {
          "CES GRAND-POL / A": [
            {
              station: "GRAND-POL",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE BONGOSSI / A": [
            {
              station: "BONGOSSI",
              voters: 91
            },
            {
              station: "NGOMBOL",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE GROUPE I / A": [
            {
              station: "AYENE",
              voters: 380
            },
          ],
          "ECOLE PUBLIQUE GROUPE II / A": [
            {
              station: "TOMBO",
              voters: 658
            },
          ],
          "ECOLE PUBLIQUE KANDALA / A": [
            {
              station: "KANDALA",
              voters: 156
            },
          ],
          "ECOLE PUBLIQUE KOUEN / A": [
            {
              station: "KOUEN",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE LES CHAMPIONS FCB / A": [
            {
              station: "DIEU-CONNAIT",
              voters: 739
            },
            {
              station: "PETIT-POL",
              voters: 1100
            },
          ],
          "ECOLE PUBLIQUE LONGTIMBI / A": [
            {
              station: "LONGTIMBI",
              voters: 309
            },
          ],
          "ECOLE PUBLIQUE LOUSSOU / A": [
            {
              station: "LOUSSOU",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE MAYOS / A": [
            {
              station: "MAYOS",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE NGOLAMBELE / A": [
            {
              station: "NGOLAMBELE",
              voters: 270
            },
          ],
          "ECOLE PUBLIQUE NKOLBIKON / A": [
            {
              station: "NKOLBIKON",
              voters: 97
            },
          ],
          "ECOLE PUBLIQUE NKOUMADJAP / A": [
            {
              station: "NGUINDA",
              voters: 83
            },
            {
              station: "NKOUMADJAP",
              voters: 40
            },
          ],
          "ECOLE PUBLIQUE TONKOUMBE / A": [
            {
              station: "SIMEYONG",
              voters: 171
            },
            {
              station: "TONKOUMBE",
              voters: 59
            },
          ],
          "ECOLE PUBLIQUE TOUNGRELO / A": [
            {
              station: "TOUNGRELO",
              voters: 235
            },
          ],
          "FOYER COMMUNAUTAIRE BAKTALA / A": [
            {
              station: "BAKTALA",
              voters: 209
            },
          ],
          "FOYER COMMUNAUTAIRE BEUL / A": [
            {
              station: "BEUL",
              voters: 210
            },
          ],
          "FOYER SFID CAMP-NORD / A": [
            {
              station: "CAMP-NORD",
              voters: 261
            },
          ],
          "HANGAR A PALABRE AKONO / A": [
            {
              station: "AKANO",
              voters: 96
            },
          ],
          "HANGAR A PALABRE DJANDJA / A": [
            {
              station: "DJANDJA",
              voters: 107
            },
          ],
          "HANGAR A PALABRE MOKOLO / A": [
            {
              station: "MOKOLO",
              voters: 294
            },
          ],
          "HANGAR A PALABRE NKOLMEYANGA / A": [
            {
              station: "NKOLMEYANGA",
              voters: 72
            },
          ],
          "HANGAR A PALABRE NKPWENGUE / A": [
            {
              station: "NKPWENGUE",
              voters: 322
            },
          ],
          "HANGAR A PALABRE PETIT-NGOLAMBELE / A": [
            {
              station: "PETIT-NGOLAMBELE",
              voters: 91
            },
          ],
          "HANGAR A PALABRE TAHATE / A": [
            {
              station: "TAHATE",
              voters: 91
            },
          ],
          "MAIRIE DE DIMAKO / A": [
            {
              station: "SOURCE",
              voters: 812
            },
          ],
          "SOUS-PREFECTURE / A": [
            {
              station: "QUARTIER",
              voters: 183
            },
            {
              station: "ADMINISTRATIF",
              voters: 183
            },
          ],
        },
        "DOUMAINTANG": {
          "E P BADITOUM I / A": [
            {
              station: "BADITOUM",
              voters: 3
            },
          ],
          "E P DJENDE III / A": [
            {
              station: "III",
              voters: 24
            },
          ],
          "E P KOUAMBANG I / A": [
            {
              station: "KOUAMBANG",
              voters: 42
            },
          ],
          "E P NGODOMOU / A": [
            {
              station: "NGODOMOU",
              voters: 25
            },
          ],
          "E P OULBIAM / A": [
            {
              station: "OULBIAM",
              voters: 30
            },
          ],
          "E,P DOUMAINTANG / A": [
            {
              station: "DOUMAINTANG",
              voters: 545
            },
          ],
          "FOYER COMMMUNAUTAIRE DJENDE I / A": [
            {
              station: "DJENDE",
              voters: 17
            },
            {
              station: "MENYANGOUA",
              voters: 31
            },
          ],
          "FOYER COMMUNAUTAIRE MBAGUEMPAL / A": [
            {
              station: "MBAGUEMPAL",
              voters: 16
            },
          ],
          "FOYER COMMUNAUTAIRE MBALENGUE / A": [
            {
              station: "MBALENGUE",
              voters: 17
            },
          ],
          "FOYER COMMUNAUTAIRE MBAME I / A": [
            {
              station: "MBAME",
              voters: 37
            },
          ],
          "FOYER COMMUNAUTAIRE MBANGHAKOU / A": [
            {
              station: "MBANGHAKOU",
              voters: 20
            },
          ],
          "FOYER COMMUNAUTAIRE MENDJIME I / A": [
            {
              station: "MENDJIME",
              voters: 43
            },
          ],
          "FOYER COMMUNAUTAIRE NGANDAME / A": [
            {
              station: "NGANDAME",
              voters: 24
            },
          ],
          "FOYER COMMUNAUTAIRE NGOMDOUMA I / A": [
            {
              station: "NGOMDOUMA",
              voters: 53
            },
          ],
          "FOYER COMMUNAUTAIRE NKONGSIMBANG /  A": [
            {
              station: "NKONGSIMBANG",
              voters: 57
            },
          ],
          "FOYER COMMUNAUTAIRE OULDIK I / A": [
            {
              station: "OULDIK",
              voters: 94
            },
          ],
          "FOYER COMMUNAUTAIRE SEGUELENDOM / A": [
            {
              station: "SEGUELENDOM",
              voters: 127
            },
          ],
          "FOYER COMUNAUTAIRE BAMEKOK I / A": [
            {
              station: "BAMEKOK",
              voters: 13
            },
          ],
          "HANGAR PUBLIC BADOUMA I / A": [
            {
              station: "BADOUMA",
              voters: 3
            },
          ],
          "HANGAR PUBLIC BAKOUMBIAM / A": [
            {
              station: "BAKOUMBIAM",
              voters: 9
            },
          ],
          "HANGAR PUBLIC KABILI / A": [
            {
              station: "KABILI",
              voters: 12
            },
          ],
          "HANGAR PUBLIC SALLE I / A": [
            {
              station: "SALLE",
              voters: 67
            },
          ],
        },
        "DOUME": {
          "ANCIENNE USINE CFSO / A": [
            {
              station: "BODOMO",
              voters: 180
            },
          ],
          "E P AMBAKA / A": [
            {
              station: "AMBAKA",
              voters: 135
            },
          ],
          "E P BONANDO / A": [
            {
              station: "CAMP",
              voters: 486
            },
            {
              station: "PYGMEE",
              voters: 218
            },
            {
              station: "BONANDO",
              voters: 415
            },
            {
              station: "PETIT",
              voters: 598
            },
            {
              station: "BANANDO",
              voters: 415
            },
          ],
          "E P GOUMBEGERON / A": [
            {
              station: "GOUMBEGERON",
              voters: 246
            },
          ],
          "E P KOBILA / A": [
            {
              station: "KOBILA",
              voters: 243
            },
          ],
          "E P MAMPANG / A": [
            {
              station: "ECOLE",
              voters: 170
            },
            {
              station: "VILLAGE",
              voters: 558
            },
          ],
          "E P PAKI / A": [
            {
              station: "PAKI",
              voters: 543
            },
          ],
          "ECOLE MATERNELLE BILINGUE DE DOUME /  A": [
            {
              station: "DOUME",
              voters: 2101
            },
            {
              station: "FORTIN",
              voters: 487
            },
          ],
          "ECOLE MATERNELLE DU CAMP MILITAIRE / A": [
            {
              station: "MOTCHEBOUM",
              voters: 468
            },
            {
              station: "MILITAIRE",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE DJAGLASSI / A": [
            {
              station: "DJAGLASSI",
              voters: 332
            },
          ],
          "EP DOUME GROUPE II / A": [
            {
              station: "CENTRE",
              voters: 1012
            },
          ],
          "FERME MATIGNON / A": [
            {
              station: "AYENE",
              voters: 127
            },
            {
              station: "MALA",
              voters: 230
            },
          ],
          "FOYER COMMUNAUTAIRE BAGO / A": [
            {
              station: "GRAND",
              voters: 486
            },
            {
              station: "BAGO",
              voters: 162
            },
          ],
          "FOYER COMMUNAUTAIRE BAYONG I / A": [
            {
              station: "BAYONG",
              voters: 484
            },
          ],
          "FOYER COMMUNAUTAIRE BAYONG III / A": [
            {
              station: "III",
              voters: 351
            },
          ],
          "FOYER COMMUNAUTAIRE BAYONG VII / A": [
            {
              station: "VII",
              voters: 55
            },
          ],
          "FOYER COMMUNAUTAIRE BENT / A": [
            {
              station: "BENT",
              voters: 192
            },
          ],
          "FOYER COMMUNAUTAIRE BIGOTSA / A": [
            {
              station: "BIGOTSA",
              voters: 79
            },
          ],
          "FOYER COMMUNAUTAIRE BOUMPIAL / A": [
            {
              station: "BOUMPIAL",
              voters: 243
            },
          ],
          "FOYER COMMUNAUTAIRE DJAMONOMINE / A": [
            {
              station: "DJAMONOMINE",
              voters: 95
            },
          ],
          "FOYER COMMUNAUTAIRE KEMPONG / A": [
            {
              station: "KEMPONG",
              voters: 234
            },
          ],
          "FOYER COMMUNAUTAIRE LOUMBOU / A": [
            {
              station: "LOUMBOU",
              voters: 265
            },
          ],
          "FOYER COMMUNAUTAIRE MENDIM / A": [
            {
              station: "MENDIM",
              voters: 161
            },
          ],
          "FOYER COMMUNAUTAIRE NGOULAMAN / A": [
            {
              station: "NGOULAMAN",
              voters: 109
            },
          ],
          "FOYER COMMUNAUTAIRE NKOUM / A": [
            {
              station: "NKOUM",
              voters: 305
            },
          ],
          "FOYER COMMUNAUTAIRE OULMENDAMBA / A": [
            {
              station: "OULMENDAMBA",
              voters: 93
            },
          ],
          "FOYER COMMUNAUTAIRE SIBITA / A": [
            {
              station: "SIBITA",
              voters: 310
            },
          ],
          "HANGAR PUBLIC BIZIGA / A": [
            {
              station: "BIZIGA",
              voters: 42
            },
            {
              station: "DJENDE",
              voters: 217
            },
          ],
          "HANGAR PUBLIC HAOUSSA / A": [
            {
              station: "HAOUSSA",
              voters: 183
            },
          ],
          "HANGAR PUBLIC MBAMA I / A": [
            {
              station: "MBAMA",
              voters: 1532
            },
          ],
          "HANGAR PUBLIC MBAMA II / A": [
            {
              station: "MISSION",
              voters: 285
            },
            {
              station: "CATHOLIQUE",
              voters: 285
            },
          ],
          "HANGAR PUBLIC NKOLESSONG / A": [
            {
              station: "NKOLESSON",
              voters: 131
            },
          ],
          "HANGAR PUBLIC OUAMA / A": [
            {
              station: "OUAMA",
              voters: 94
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "PLATEAU",
              voters: 602
            },
          ],
          "SAR - DOUME / A": [
            {
              station: "BRIQUETERIE",
              voters: 186
            },
          ],
          "SODECAO / A": [
            {
              station: "MAMPANG",
              voters: 844
            },
            {
              station: "AFIA",
              voters: 136
            },
          ],
        },
        "LOMIE": {
          "ANCIENNE MAIRIE DE LOMIE / A": [
            {
              station: "CENTRE",
              voters: 23
            },
            {
              station: "COMMERCIAL",
              voters: 23
            },
            {
              station: "QUARTIER",
              voters: 4316
            },
            {
              station: "NEWTON",
              voters: 466
            },
            {
              station: "NZIME",
              voters: 250
            },
            {
              station: "ABOUO",
              voters: 23
            },
          ],
          "C,E,S DE ZOULABOT I / A": [
            {
              station: "MINGONGOL",
              voters: 629
            },
            {
              station: "ZOULABOT",
              voters: 262
            },
          ],
          "ECOLE CATHOLIQUE DE MESSASSEA / A": [
            {
              station: "MESSASSEA",
              voters: 200
            },
          ],
          "ECOLE CATHOLIQUE DE MOANGUE LE  BOSQUET / A": [
            {
              station: "MOANGUE",
              voters: 355
            },
            {
              station: "BOSQUET",
              voters: 355
            },
          ],
          "ECOLE PUB. PAYO / A": [
            {
              station: "PAYO",
              voters: 166
            },
          ],
          "ECOLE PUBLIQUE ADJELA / A": [
            {
              station: "ADJELA",
              voters: 11
            },
            {
              station: "DJOLEMPOUM",
              voters: 11
            },
            {
              station: "NGOULMEKONG",
              voters: 34
            },
          ],
          "ECOLE PUBLIQUE DJENOU / A": [
            {
              station: "DJENOU",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE DJOAMEODJOH / A": [
            {
              station: "DJOAMEODJOH",
              voters: 14
            },
          ],
          "ECOLE PUBLIQUE ESCHIEMBOR / A": [
            {
              station: "ESCHIEMBOR",
              voters: 283
            },
            {
              station: "MELENE",
              voters: 283
            },
          ],
          "ECOLE PUBLIQUE KONGO / A": [
            {
              station: "KONGO",
              voters: 254
            },
          ],
          "ECOLE PUBLIQUE LOMIE VILLE / A": [
            {
              station: "EPELE",
              voters: 443
            },
            {
              station: "NYLON",
              voters: 443
            },
          ],
          "ECOLE PUBLIQUE MANG - KAKA / A": [
            {
              station: "MANG",
              voters: 299
            },
            {
              station: "KAKA",
              voters: 72
            },
          ],
          "ECOLE PUBLIQUE MAYANG / A": [
            {
              station: "MAYANG",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE MEDJUH / A": [
            {
              station: "MEDJUH",
              voters: 220
            },
          ],
          "ECOLE PUBLIQUE MINTOUM / A": [
            {
              station: "MINTOUM",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE NEMEDJOH / A": [
            {
              station: "NOMEDJOH",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE NEMEYONG III / A": [
            {
              station: "NEMEYONG",
              voters: 194
            },
            {
              station: "III",
              voters: 94
            },
            {
              station: "NOLIENE",
              voters: 94
            },
          ],
          "ECOLE PUBLIQUE NGOLA / A": [
            {
              station: "NGOLA",
              voters: 305
            },
          ],
          "ECOLE PUBLIQUE POLYDOR / A": [
            {
              station: "POLYDOR",
              voters: 161
            },
            {
              station: "HAOUSSA",
              voters: 702
            },
          ],
          "FOYER COMMUNAUTAIRE  NDJOUKOULOSSOU / A": [
            {
              station: "ABIERE",
              voters: 2
            },
            {
              station: "BAMBA",
              voters: 2
            },
            {
              station: "NKOLVOLAN",
              voters: 2
            },
            {
              station: "NDJOUKOULOSSOU",
              voters: 2
            },
            {
              station: "PANA",
              voters: 2
            },
          ],
          "FOYER COMMUNAUTAIRE ALAT MAKAY / A": [
            {
              station: "ALAT",
              voters: 21
            },
            {
              station: "MAKAY",
              voters: 7
            },
            {
              station: "MEIBORO",
              voters: 7
            },
            {
              station: "NDJOUM",
              voters: 7
            },
            {
              station: "AFOUP",
              voters: 7
            },
            {
              station: "AZEM",
              voters: 7
            },
            {
              station: "MVOUTSI",
              voters: 7
            },
          ],
          "FOYER COMMUNAUTAIRE BAPILE / A": [
            {
              station: "BAPILE",
              voters: 8
            },
            {
              station: "DJOANDJILA",
              voters: 8
            },
          ],
          "FOYER COMMUNAUTAIRE BIBA I / A": [
            {
              station: "BIBA",
              voters: 19
            },
          ],
          "FOYER COMMUNAUTAIRE DJEBE / A": [
            {
              station: "ABAKOUM",
              voters: 1
            },
            {
              station: "DJEBE",
              voters: 1
            },
          ],
          "FOYER COMMUNAUTAIRE DJOUNTAM / A": [
            {
              station: "DJOUNTAM",
              voters: 15
            },
            {
              station: "ESSOMO",
              voters: 15
            },
          ],
          "FOYER COMMUNAUTAIRE DOUMZOH I / A": [
            {
              station: "DOUMZOH",
              voters: 110
            },
          ],
          "FOYER COMMUNAUTAIRE EKOM / A": [
            {
              station: "EKOM",
              voters: 209
            },
          ],
          "FOYER COMMUNAUTAIRE KASSARAFAM / A": [
            {
              station: "KASSARAFAM",
              voters: 58
            },
          ],
          "FOYER COMMUNAUTAIRE MEKA / A": [
            {
              station: "ACHIP",
              voters: 7
            },
            {
              station: "MEKA",
              voters: 3
            },
            {
              station: "NTAM",
              voters: 3
            },
          ],
          "FOYER COMMUNAUTAIRE MEMPALE / A": [
            {
              station: "MATISSON",
              voters: 73
            },
            {
              station: "MEMPALE",
              voters: 73
            },
          ],
          "FOYER COMMUNAUTAIRE MPANE KOBERA /  A": [
            {
              station: "MBANG",
              voters: 227
            },
            {
              station: "MPANE",
              voters: 454
            },
            {
              station: "DITIEP",
              voters: 227
            },
            {
              station: "KOBERA",
              voters: 227
            },
          ],
          "FOYER COMMUNAUTAIRE POHEMPOUM I / A": [
            {
              station: "POHEMPOUM",
              voters: 347
            },
          ],
          "FOYER COMMUNAUTAIRE SEMBE / A": [
            {
              station: "SEMBE",
              voters: 116
            },
          ],
          "MAIRIE DE LOMIE / A": [
            {
              station: "OLENE",
              voters: 541
            },
          ],
          "SALLE DES FETES DE LOMIE / A": [
            {
              station: "ADMINISTRATIF",
              voters: 577
            },
            {
              station: "MADOUMA",
              voters: 305
            },
          ],
          "TRIBUNAL DE LOMIE / A": [
            {
              station: "ETANG",
              voters: 272
            },
            {
              station: "KALAKOUTA",
              voters: 272
            },
            {
              station: "MELEN",
              voters: 272
            },
          ],
        },
        "MBOMA": {
          "ECOLE PUBLIQUE DE BANGOUE / A": [
            {
              station: "BANGOUE",
              voters: 264
            },
          ],
          "ECOLE PUBLIQUE DE KAGNOL 2 / A": [
            {
              station: "KAK",
              voters: 990
            },
          ],
          "ECOLE PUBLIQUE DE NGOAP / A": [
            {
              station: "NGOAP",
              voters: 302
            },
          ],
          "ECOLE PUBLIQUE DE NGOUMOU / A": [
            {
              station: "NGOUMOU",
              voters: 354
            },
          ],
          "ECOLE PUBLIQUE DE NTSIMBOU / A": [
            {
              station: "NTSIMBOU",
              voters: 304
            },
          ],
          "ECOLE PUBLIQUE DE ZOUME / A": [
            {
              station: "ZOUME",
              voters: 383
            },
          ],
          "FOYER COMMUNAUTAIRE DE BENGOND / A": [
            {
              station: "BENGOND",
              voters: 227
            },
          ],
          "FOYER COMMUNAUTAIRE DE MBOMA / A": [
            {
              station: "MBOMA",
              voters: 511
            },
          ],
          "FOYER COMMUNAUTAIRE DE NKAOULE / A": [
            {
              station: "NKAOULE",
              voters: 115
            },
          ],
          "HANGAR A PALABRE DE KAGNOL 1 / A": [
            {
              station: "KAGNOL",
              voters: 479
            },
          ],
          "HANGAR A PALABRE DE MBAME 2 / A": [
            {
              station: "MBAME",
              voters: 128
            },
          ],
        },
        "MESSAMENA": {
          "CENTRE DE SANTE BISSOUA I / A": [
            {
              station: "BISSOUA",
              voters: 21
            },
          ],
          "ECOLE MATERNELLE MPAND / A": [
            {
              station: "MPAND",
              voters: 149
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE ESSIENGBOT /  A": [
            {
              station: "ESSIENGBOT",
              voters: 421
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE MAYOS / A": [
            {
              station: "MAYOS",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE ADJANE / A": [
            {
              station: "ADJANE",
              voters: 1
            },
          ],
          "ECOLE PUBLIQUE AKOK BIKELE / A": [
            {
              station: "AKOK",
              voters: 2
            },
            {
              station: "BIKELE",
              voters: 2
            },
          ],
          "ECOLE PUBLIQUE BELAY / A": [
            {
              station: "BELAY",
              voters: 6
            },
            {
              station: "NKOUL",
              voters: 6
            },
          ],
          "ECOLE PUBLIQUE BIDJOMBO / A": [
            {
              station: "BIDJOMBO",
              voters: 7
            },
          ],
          "ECOLE PUBLIQUE BITSIL / A": [
            {
              station: "BITSIL",
              voters: 12
            },
            {
              station: "MALEN",
              voters: 397
            },
          ],
          "ECOLE PUBLIQUE BLANDJOCK / A": [
            {
              station: "BLANDJOCK",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE DIMPAM / A": [
            {
              station: "DIMPAM",
              voters: 16
            },
          ],
          "ECOLE PUBLIQUE DJA / A": [
            {
              station: "DJA",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DOUMO PIERRE / A": [
            {
              station: "PIERRE",
              voters: 62
            },
            {
              station: "MIMPALA",
              voters: 62
            },
          ],
          "ECOLE PUBLIQUE EBADE / A": [
            {
              station: "EBADE",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE ESCHOU / A": [
            {
              station: "ESCHOU",
              voters: 64
            },
            {
              station: "MADJUIH",
              voters: 118
            },
          ],
          "ECOLE PUBLIQUE KOMPIA / A": [
            {
              station: "KOMPIA",
              voters: 135
            },
          ],
          "ECOLE PUBLIQUE KOUM / A": [
            {
              station: "KOUM",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE LABBA / A": [
            {
              station: "LABBA",
              voters: 322
            },
            {
              station: "MEBA",
              voters: 322
            },
          ],
          "ECOLE PUBLIQUE MADJUIH II / A": [
            {
              station: "MPANE",
              voters: 54
            },
          ],
          "ECOLE PUBLIQUE MALEN V / A": [
            {
              station: "NTIBONKEUH",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE MALEULEU / A": [
            {
              station: "ETCHU",
              voters: 267
            },
            {
              station: "ETOL",
              voters: 267
            },
            {
              station: "MALEULEU",
              voters: 267
            },
            {
              station: "TEKSANG",
              voters: 267
            },
          ],
          "ECOLE PUBLIQUE MEDJOH / A": [
            {
              station: "BINTSINA",
              voters: 9
            },
            {
              station: "MEDJOH",
              voters: 9
            },
            {
              station: "NGOULMINANGA",
              voters: 9
            },
          ],
          "ECOLE PUBLIQUE MESSAMENA VILLAGE / A": [
            {
              station: "AKOUMOU",
              voters: 3
            },
            {
              station: "DJUEBLA",
              voters: 22
            },
            {
              station: "(MESSAMENA",
              voters: 3
            },
            {
              station: "VILLAGE)",
              voters: 3
            },
            {
              station: "MESSAMENA",
              voters: 3
            },
            {
              station: "VILLAGE",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE MIMBANG / A": [
            {
              station: "MIMBANG",
              voters: 95
            },
          ],
          "ECOLE PUBLIQUE MOKOLO / A": [
            {
              station: "QUARTIER",
              voters: 362
            },
            {
              station: "MOKOLO",
              voters: 362
            },
          ],
          "ECOLE PUBLIQUE NGAM / A": [
            {
              station: "NGAM",
              voters: 149
            },
          ],
          "ECOLE PUBLIQUE NGOULMAKONG / A": [
            {
              station: "NGOULMAKONG",
              voters: 280
            },
          ],
          "ECOLE PUBLIQUE NTOLLOCK I / A": [
            {
              station: "LEH",
              voters: 360
            },
            {
              station: "NTOLLOCK",
              voters: 345
            },
            {
              station: "PALLISCO",
              voters: 219
            },
          ],
          "ECOLE PUBLIQUE TIANE / A": [
            {
              station: "TIANE",
              voters: 106
            },
          ],
          "EP DJA ROUTE / A": [
            {
              station: "ROUTE",
              voters: 102
            },
          ],
          "EP LAKABO / A": [
            {
              station: "LAKABO",
              voters: 57
            },
          ],
          "FOPYER COMMUNAUTAIRE EBOMETOUM / A": [
            {
              station: "EBOMETOUM",
              voters: 70
            },
          ],
          "FOYER COMMUNAUTAIRE DJOLEMPOUM / A": [
            {
              station: "ASSEA",
              voters: 5
            },
            {
              station: "DJOLEMPOUM",
              voters: 5
            },
            {
              station: "EKOH",
              voters: 5
            },
          ],
          "FOYER COMMUNAUTAIRE DOUMO-MAMA / A": [
            {
              station: "DOUMO",
              voters: 83
            },
            {
              station: "MAMA",
              voters: 21
            },
          ],
          "FOYER COMMUNAUTAIRE EKOMO / A": [
            {
              station: "BIFOLONE",
              voters: 84
            },
            {
              station: "EKOMO",
              voters: 8
            },
            {
              station: "KODJA",
              voters: 8
            },
          ],
          "FOYER COMMUNAUTAIRE KA-NORD / A": [
            {
              station: "KA-NORD",
              voters: 199
            },
          ],
          "FOYER COMMUNAUTAIRE KOUA / A": [
            {
              station: "KOUA",
              voters: 195
            },
          ],
          "FOYER COMMUNAUTAIRE MBOUMO / A": [
            {
              station: "MBOUMO",
              voters: 298
            },
          ],
          "FOYER COMMUNAUTAIRE NEMEYONG II / A": [
            {
              station: "KABILONE",
              voters: 288
            },
            {
              station: "NEMEYONG",
              voters: 116
            },
            {
              station: "NTOUMZOCK",
              voters: 116
            },
          ],
          "FOYER COMMUNAUTAIRE NKONZUH / A": [
            {
              station: "NKONZUH",
              voters: 94
            },
          ],
          "FOYER COMMUNAUTAIRE SOLEYE / A": [
            {
              station: "SOLEYE",
              voters: 145
            },
          ],
          "HANGAR A PALABLE APADJOB / A": [
            {
              station: "APADJOB",
              voters: 4
            },
          ],
          "HANGAR A PALABLE KA-SUD / A": [
            {
              station: "KA-SUD",
              voters: 109
            },
          ],
          "HANGAR A PALABRE LAC / A": [
            {
              station: "LAC",
              voters: 146
            },
          ],
          "HANGAR A PALABRE LEKEK / A": [
            {
              station: "LEKEK",
              voters: 60
            },
          ],
          "HANGAR A PALABRE MALEN III / A": [
            {
              station: "(MALEN",
              voters: 19
            },
            {
              station: "III)",
              voters: 19
            },
            {
              station: "III",
              voters: 19
            },
            {
              station: "NTSINA",
              voters: 19
            },
            {
              station: "ZEMELE",
              voters: 19
            },
          ],
          "HANGAR A PALABRE MATOLE / A": [
            {
              station: "DIOULA",
              voters: 17
            },
            {
              station: "MATOLE",
              voters: 17
            },
          ],
          "HANGAR A PALABRE MBA / A": [
            {
              station: "MBA",
              voters: 42
            },
          ],
          "HANGAR A PALABRE MPAKI / A": [
            {
              station: "MPAKI",
              voters: 69
            },
          ],
          "HANGAR A PALABRE MPOMDOM / A": [
            {
              station: "SERE",
              voters: 56
            },
            {
              station: "MPOMDOM",
              voters: 56
            },
          ],
          "HANGAR DU TRIBUNAL / A": [
            {
              station: "CENTRE",
              voters: 489
            },
            {
              station: "MASSAMENA",
              voters: 489
            },
            {
              station: "DOUME",
              voters: 49
            },
            {
              station: "NYLON",
              voters: 489
            },
          ],
        },
        "MESSOK": {
          "CEB DE NJANGUE / A": [
            {
              station: "NJANGUE",
              voters: 261
            },
          ],
          "CENTRE DE SANTE INTEGRE ZOULABOT II / A": [
            {
              station: "ZOULABOT",
              voters: 104
            },
          ],
          "ECOLE CATHOLIQUE MESSOK / A": [
            {
              station: "CENTRE",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE BIZAM / A": [
            {
              station: "BIZAM",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE KAMELONE / A": [
            {
              station: "KAMELONE",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE KOUNGOULOU / A": [
            {
              station: "KOUNGOULOU",
              voters: 194
            },
          ],
          "ECOLE PUBLIQUE MESSEA / A": [
            {
              station: "MESSEA",
              voters: 418
            },
            {
              station: "CAMPEMENT",
              voters: 163
            },
            {
              station: "BAKA",
              voters: 163
            },
            {
              station: "CHEFFERIE",
              voters: 357
            },
          ],
          "ECOLE PUBLIQUE MESSOK / A": [
            {
              station: "NJONG",
              voters: 193
            },
            {
              station: "MELEN",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE MINDOUMA / A": [
            {
              station: "MINDOUMA",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE NKOAKOM / A": [
            {
              station: "ECOLE",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE YANEBOT / A": [
            {
              station: "YANEBOT",
              voters: 96
            },
          ],
          "ECOLE PUBLIQUE ZOADIBA / A": [
            {
              station: "ZOADIBA",
              voters: 271
            },
          ],
          "FOYER COMMUNAUTAIRE BAREKO / A": [
            {
              station: "BAREKO",
              voters: 237
            },
          ],
          "FOYER COMMUNAUTAIRE BEUH / A": [
            {
              station: "BEUH",
              voters: 107
            },
          ],
          "FOYER COMMUNAUTAIRE KARAGOUA / A": [
            {
              station: "KARAGOUA",
              voters: 135
            },
          ],
          "FOYER COMMUNAUTAIRE LONG / A": [
            {
              station: "LONG",
              voters: 143
            },
          ],
          "FOYER COMMUNAUTAIRE MANAM / A": [
            {
              station: "MANAM",
              voters: 84
            },
          ],
          "FOYER COMMUNAUTAIRE MASSEN'S / A": [
            {
              station: "MASSEN'S",
              voters: 72
            },
          ],
          "FOYER COMMUNAUTAIRE MBENG-MBENG / A": [
            {
              station: "MBENG-MBENG",
              voters: 260
            },
          ],
          "FOYER COMMUNAUTAIRE MEBEM / A": [
            {
              station: "MEBEM",
              voters: 51
            },
          ],
          "FOYER COMMUNAUTAIRE MEKOUA / A": [
            {
              station: "MEKOUA",
              voters: 30
            },
          ],
          "FOYER COMMUNAUTAIRE NKEADINAKO / A": [
            {
              station: "NKEADINAKO",
              voters: 230
            },
          ],
          "FOYER COMMUNAUTAIRE NKOAKOM / A": [
            {
              station: "NKOAKOM",
              voters: 226
            },
          ],
          "HANGAR A PALABRE ADJELA BEUH / A": [
            {
              station: "ADJELA",
              voters: 23
            },
          ],
          "SALLE DES FETES MESSOK / A": [
            {
              station: "MESSOK",
              voters: 969
            },
            {
              station: "CHATEAU",
              voters: 199
            },
          ],
        },
        "MINDOUROU": {
          "ECOLE PUB. DE MIN. GROUPE II / A": [
            {
              station: "MAYANG",
              voters: 34
            },
            {
              station: "MINDOUROU",
              voters: 140
            },
            {
              station: "CENTRE",
              voters: 80
            },
          ],
          "ECOLE PUBLIQUE D'AMPEL / A": [
            {
              station: "AMPEL",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE DE BEDOUMO / A": [
            {
              station: "BEDOUMO",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE DE KAGNOL / A": [
            {
              station: "KAGNOL",
              voters: 8
            },
          ],
          "ECOLE PUBLIQUE DE MEDJOH / A": [
            {
              station: "MEDJOH",
              voters: 11
            },
          ],
          "ECOLE PUBLIQUE DE NKOUAK / A": [
            {
              station: "NKOUAK",
              voters: 19
            },
          ],
          "ECOLE PUBLIQUE DE NONGBWALA / A": [
            {
              station: "NONGBWALA",
              voters: 21
            },
          ],
          "ECOLE PUBLIQUE KALAMPING / A": [
            {
              station: "ZIENG",
              voters: 23
            },
            {
              station: "ONYOUL-EDEN",
              voters: 23
            },
          ],
          "ESPLANADE RADIO / A": [
            {
              station: "CAMP",
              voters: 18
            },
            {
              station: "R/PALLISCO",
              voters: 18
            },
          ],
          "FOYER COMMUNAUTAIRE DE DIOULA / A": [
            {
              station: "DIOULA",
              voters: 4
            },
          ],
          "FOYER COMMUNAUTAIRE DE DJOLEMPOUM /  A": [
            {
              station: "DJOLEMPOUM",
              voters: 5
            },
          ],
          "FOYER COMMUNAUTAIRE DE DJOUYAYA / A": [
            {
              station: "DJOUYAYA",
              voters: 6
            },
          ],
          "FOYER COMMUNAUTAIRE DE MALENE / A": [
            {
              station: "MALENE",
              voters: 9
            },
          ],
          "FOYER COMMUNAUTAIRE ETSIEK / A": [
            {
              station: "ETSIEK",
              voters: 7
            },
          ],
          "FOYER COMMUNAUTAIRE NEMEYONG / A": [
            {
              station: "NEMEYONG",
              voters: 17
            },
          ],
          "FOYER COMMUNAUTAIRE NKOUL / A": [
            {
              station: "NKOUL",
              voters: 20
            },
          ],
          "FOYER COMMUNAUTAIRE TONKLA / A": [
            {
              station: "TONKLA",
              voters: 22
            },
          ],
          "MAISON DE LA FEMME DE MINDOUROU / A": [
            {
              station: "ADMINISTRATIF",
              voters: 25
            },
          ],
        },
        "NGOYLA": {
          "CENTRE DE SANTE MABAM / A": [
            {
              station: "ADJELA",
              voters: 255
            },
            {
              station: "MABAM",
              voters: 255
            },
            {
              station: "NKOLAKAY",
              voters: 255
            },
            {
              station: "NKONDONG",
              voters: 546
            },
          ],
          "CENTRE MEDICAL D'ARRONDISSEMENT  MOKOLO / A": [
            {
              station: "MOKOLO",
              voters: 237
            },
            {
              station: "VILLAGE",
              voters: 712
            },
          ],
          "ECOLE PUBLIQUE DJADOM / A": [
            {
              station: "BAREKO",
              voters: 139
            },
            {
              station: "DJADOM",
              voters: 139
            },
          ],
          "ECOLE PUBLIQUE ETEKESSANG / A": [
            {
              station: "ETEKESSANG",
              voters: 145
            },
            {
              station: "NDIMAKO",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE LAMSON / A": [
            {
              station: "LAMSON",
              voters: 114
            },
          ],
          "ECOLE PUBLIQUE MBALAM I / A": [
            {
              station: "MESSOK-MESSOK",
              voters: 340
            },
          ],
          "ECOLE PUBLIQUE MBALAM II / A": [
            {
              station: "ASSOUMDELE",
              voters: 560
            },
            {
              station: "MBALAM",
              voters: 636
            },
          ],
          "ECOLE PUBLIQUE NGOYLA / A": [
            {
              station: "BRIQUETERIE",
              voters: 118
            },
            {
              station: "NGOYLA",
              voters: 1404
            },
            {
              station: "CENTRE",
              voters: 692
            },
          ],
          "ECOLE PUBLIQUE NTAM / A": [
            {
              station: "MAKAMEKOUMA",
              voters: 750
            },
            {
              station: "NTAM",
              voters: 677
            },
          ],
          "HANGAR PUBLIC ASSOUMDELE III / A": [
            {
              station: "III",
              voters: 113
            },
          ],
          "HANGAR PUBLIC DOUMZOK / A": [
            {
              station: "DOUMZOK",
              voters: 103
            },
          ],
          "HANGAR PUBLIC LELENE / A": [
            {
              station: "LELENE",
              voters: 99
            },
          ],
          "HANGAR PUBLIC YANEBOT BEL AIR / A": [
            {
              station: "ETA",
              voters: 106
            },
            {
              station: "YANEBOT",
              voters: 116
            },
            {
              station: "BEL",
              voters: 58
            },
            {
              station: "AIR",
              voters: 58
            },
            {
              station: "BELLE",
              voters: 58
            },
            {
              station: "VUE",
              voters: 58
            },
          ],
          "HANGAR PUBLIC ZOULABOT I / A": [
            {
              station: "ZOULABOT",
              voters: 88
            },
          ],
          "LYCEE NGOYLA / A": [
            {
              station: "ZOULAMEYONG",
              voters: 475
            },
          ],
        },
        "NGUELEMENDOUKA": {
          "C.E.S BIKA / A": [
            {
              station: "BIKA",
              voters: 10
            },
          ],
          "ECOLE MARTERNELLE D'ADEMEGOALA / A": [
            {
              station: "ADEMEGOALA",
              voters: 1
            },
          ],
          "ECOLE PUBLIQUE AZOMEKOUT / A": [
            {
              station: "AZOMEKOUT",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE BADOUMA II / A": [
            {
              station: "BADOUMA",
              voters: 8
            },
          ],
          "ECOLE PUBLIQUE D'AMINEMEKOUND / A": [
            {
              station: "AMINEMEKOUND",
              voters: 4
            },
          ],
          "ECOLE PUBLIQUE D'EBAH / A": [
            {
              station: "EBAH",
              voters: 14
            },
          ],
          "ECOLE PUBLIQUE DE BILA / A": [
            {
              station: "BILA",
              voters: 11
            },
          ],
          "ECOLE PUBLIQUE DE KAK III / A": [
            {
              station: "KAK",
              voters: 24
            },
            {
              station: "III",
              voters: 530
            },
          ],
          "ECOLE PUBLIQUE DE ZILI / A": [
            {
              station: "ZILI",
              voters: 82
            },
          ],
          "ECOLE PUBLIQUE DJAMBELE / A": [
            {
              station: "DJAMBELE",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE EKPWASSONG I / A": [
            {
              station: "EKPWASSONG",
              voters: 33
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE NKA / A": [
            {
              station: "HAOUSSA",
              voters: 66
            },
            {
              station: "TEXAS",
              voters: 66
            },
            {
              station: "ZAPI",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE KOUMBOU / A": [
            {
              station: "KOUMBOU",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE LAMBA / A": [
            {
              station: "LAMBA",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE LEMBE / A": [
            {
              station: "LEMBE",
              voters: 78
            },
          ],
          "ECOLE PUBLIQUE LOULOU / A": [
            {
              station: "LOULOU",
              voters: 153
            },
            {
              station: "TSOLOU",
              voters: 389
            },
          ],
          "ECOLE PUBLIQUE MBANG I / A": [
            {
              station: "MBANG",
              voters: 347
            },
          ],
          "ECOLE PUBLIQUE MEBI / A": [
            {
              station: "MEBI",
              voters: 127
            },
          ],
          "ECOLE PUBLIQUE MIAMBO / A": [
            {
              station: "MIAMBO",
              voters: 368
            },
          ],
          "ECOLE PUBLIQUE MVANDA I / A": [
            {
              station: "MVANDA",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE NAMEDJAP / A": [
            {
              station: "NAMEDJAP",
              voters: 230
            },
          ],
          "ECOLE PUBLIQUE NGOUONG / A": [
            {
              station: "NGOUONG",
              voters: 118
            },
          ],
          "ECOLE PUBLIQUE NKOLBANA I / A": [
            {
              station: "NKOLBANA",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE SAMBA / A": [
            {
              station: "SAMBA",
              voters: 227
            },
          ],
          "ECOLE PUBLIQUE ZEMBE I / A": [
            {
              station: "ZEMBE",
              voters: 419
            },
          ],
          "ECOLE PUBLIQUE ZEMBE II / A": [
            {
              station: "MAYOS",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE ZILI / A": [
            {
              station: "NYAMEGOZE",
              voters: 35
            },
          ],
          "FOYER COMMUNAUTAIRE D'IMBET / A": [
            {
              station: "AFALON",
              voters: 2
            },
            {
              station: "IMBET",
              voters: 2
            },
          ],
          "HANGAR A PALABRE D'AKOSSA / A": [
            {
              station: "AKOSSA",
              voters: 3
            },
          ],
          "HANGAR A PALABRE D'ANKOUANDE / A": [
            {
              station: "ANKOUANDE",
              voters: 5
            },
          ],
          "HANGAR A PALABRE D'EFOULAN / A": [
            {
              station: "EFOULAN",
              voters: 15
            },
          ],
          "HANGAR A PALABRE D'EZAMBE I / A": [
            {
              station: "AKILBENZA",
              voters: 163
            },
            {
              station: "EZAMBE",
              voters: 78
            },
          ],
          "HANGAR A PALABRE DE BAMELAP / A": [
            {
              station: "BAMELAP",
              voters: 9
            },
          ],
          "HANGAR A PALABRE DE BOELA / A": [
            {
              station: "BOELA",
              voters: 12
            },
          ],
          "HANGAR A PALABRE DE KOSMADJI I / A": [
            {
              station: "KOSMADJI",
              voters: 26
            },
            {
              station: "MBEGUE",
              voters: 85
            },
          ],
          "HANGAR A PALABRE DE MPARAGNANG / A": [
            {
              station: "MPARAGNANG",
              voters: 189
            },
          ],
          "HANGAR A PALABRE DE NGOMENANG / A": [
            {
              station: "NGOMENANG",
              voters: 144
            },
          ],
          "HANGAR A PALABRE DE OUEYA I / A": [
            {
              station: "OUEYA",
              voters: 265
            },
          ],
          "HANGAR A PALABRE KAP / A": [
            {
              station: "KAP",
              voters: 25
            },
          ],
          "HANGAR A PALABRE KOUAMBANG II / A": [
            {
              station: "KOUAMBANG",
              voters: 131
            },
          ],
          "HANGAR A PALABRE KOUMBAMBANG / A": [
            {
              station: "KOUMBAMBANG",
              voters: 124
            },
          ],
          "LYCCE TECHNIQUE DE NKA / A": [
            {
              station: "NKA",
              voters: 300
            },
          ],
          "LYCEE CLASSIQUE DE NKA / A": [
            {
              station: "ELONO",
              voters: 18
            },
          ],
        },
        "SOMALOMO": {
          "CES SOMALOMO / A": [
            {
              station: "CODYLKO",
              voters: 9
            },
            {
              station: "QUARTIER",
              voters: 9
            },
            {
              station: "ADMINISTRATIF",
              voters: 9
            },
            {
              station: "SOMALOMO",
              voters: 333
            },
            {
              station: "VILLAGE",
              voters: 333
            },
          ],
          "ECOLE PUBLIQUE D'ALOUMA / A": [
            {
              station: "ALOUMA",
              voters: 1
            },
            {
              station: "MAKAK-APAN",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE D'EKOM / A": [
            {
              station: "BODJOUO",
              voters: 7
            },
            {
              station: "EKOM",
              voters: 7
            },
            {
              station: "ELANDJO",
              voters: 7
            },
            {
              station: "KOUNGOULOU",
              voters: 7
            },
          ],
          "ECOLE PUBLIQUE KOMBA I / A": [
            {
              station: "ASSE",
              voters: 2
            },
            {
              station: "KOMBA",
              voters: 23
            },
            {
              station: "MALENE",
              voters: 249
            },
            {
              station: "MBOMBA",
              voters: 12
            },
            {
              station: "MANG",
              voters: 12
            },
            {
              station: "NEMEYONG",
              voters: 18
            },
            {
              station: "NKANG",
              voters: 2
            },
          ],
          "ECOLE PUBLIQUE KOMBA II / A": [
            {
              station: "MESSAM",
              voters: 10
            },
          ],
          "ECOLE PUBLIQUE LONDJAP / A": [
            {
              station: "BIBA",
              voters: 3
            },
            {
              station: "LONDJAP",
              voters: 3
            },
            {
              station: "NKOLKOUA",
              voters: 48
            },
          ],
          "ECOLE PUBLIQUE MALEOLEU / A": [
            {
              station: "DJEELA",
              voters: 119
            },
            {
              station: "MALEOLEU",
              voters: 119
            },
            {
              station: "MINTOUM",
              voters: 119
            },
            {
              station: "NKOE",
              voters: 119
            },
          ],
          "ECOLE PUBLIQUE MINLOH II / A": [
            {
              station: "EPA'ALEKANE",
              voters: 8
            },
            {
              station: "MAKAK-",
              voters: 64
            },
            {
              station: "DJEUL",
              voters: 120
            },
            {
              station: "MALEN",
              voters: 8
            },
            {
              station: "MINLOH",
              voters: 19
            },
          ],
          "ECOLE PUBLIQUE NDJIBOT / A": [
            {
              station: "NDJIBOT",
              voters: 210
            },
            {
              station: "NGOULMINANGA",
              voters: 210
            },
          ],
          "ECOLE PUBLIQUE NGOLA / A": [
            {
              station: "NGOLA",
              voters: 97
            },
          ],
          "ECOLE PUBLIQUE SCHOUAM / A": [
            {
              station: "DJOLEMPOUM",
              voters: 9
            },
            {
              station: "KAGNOL",
              voters: 9
            },
            {
              station: "SCHOUAM",
              voters: 9
            },
          ],
          "ECOLE PUBLIQUE SOMALOMO / A": [
            {
              station: "ECOFAC",
              voters: 324
            },
            {
              station: "ETOU",
              voters: 324
            },
          ],
          "EP MAKAK DJEUL / A": [
            {
              station: "MAKAK",
              voters: 56
            },
          ],
          "HANGAR A PALABRE KOMBA TIDA / A": [
            {
              station: "TIDA",
              voters: 11
            },
          ],
          "HANGAR A PALABRE MASSIEL-MAKOK / A": [
            {
              station: "MASSIEL",
              voters: 130
            },
            {
              station: "TEHMO",
              voters: 130
            },
            {
              station: "MASSIEL-MAKOK",
              voters: 93
            },
          ],
          "HANGAR A PALABRE MBOUNE / A": [
            {
              station: "MBOUNE",
              voters: 41
            },
          ],
          "HANGAR A PALABRE NEMEYONG I / A": [
            {
              station: "DJOUO",
              voters: 6
            },
          ],
          "HANGAR A PALABRE NKOLEKOUL / A": [
            {
              station: "NKOLEKOUL",
              voters: 96
            },
          ],
        },
      },
      "KADEY": {
        "BATOURI": {
          "CENTRE PRE-SCOLAIRE BOUGOGO / A": [
            {
              station: "BOUGOGO",
              voters: 315
            },
            {
              station: "MOMBELE",
              voters: 74
            },
          ],
          "CES MONGONAM / A": [
            {
              station: "MONGONAM",
              voters: 336
            },
            {
              station: "PATER",
              voters: 501
            },
          ],
          "DELEGATION ARRONDISSEMENT  AGRICULTURE / A": [
            {
              station: "ADOUMBOUN",
              voters: 307
            },
          ],
          "ECOLE DEPARTEMENTALE / A": [
            {
              station: "PRISON",
              voters: 336
            },
            {
              station: "QUARTIER",
              voters: 336
            },
            {
              station: "ADMINISTRATIF",
              voters: 336
            },
          ],
          "ECOLE DEPARTEMENTALE BILINGUE / A": [
            {
              station: "BLANC",
              voters: 193
            },
          ],
          "ECOLE FRANCO-ARABE MOKOLO / A": [
            {
              station: "HAOUSSA",
              voters: 1027
            },
          ],
          "ECOLE MATERNELLE MOKOLO YOKO / A": [
            {
              station: "SABONGARI",
              voters: 1181
            },
            {
              station: "YOKO",
              voters: 2282
            },
          ],
          "ECOLE MATERNELLE NDEMBODIO / A": [
            {
              station: "NDEMBODIO",
              voters: 708
            },
          ],
          "ECOLE PRIMAIRE MOBE / A": [
            {
              station: "MOBE",
              voters: 523
            },
          ],
          "EP ANOE / A": [
            {
              station: "ANOE",
              voters: 166
            },
            {
              station: "KOLKELE",
              voters: 166
            },
            {
              station: "KONGA-MBOUA",
              voters: 166
            },
            {
              station: "NKOLMBOMO",
              voters: 166
            },
          ],
          "EP AVIATION / A": [
            {
              station: "AVIATION",
              voters: 241
            },
          ],
          "EP BAKOMBO / A": [
            {
              station: "BAKOMBO",
              voters: 246
            },
            {
              station: "MOSSO",
              voters: 246
            },
          ],
          "EP BANDONGOUE / A": [
            {
              station: "BANDONGOUE",
              voters: 461
            },
          ],
          "EP BANYO I / A": [
            {
              station: "BANYO",
              voters: 331
            },
            {
              station: "FIO",
              voters: 493
            },
          ],
          "EP BELIMBAM / A": [
            {
              station: "BELIMBAM",
              voters: 353
            },
            {
              station: "BELINGBANDA",
              voters: 353
            },
            {
              station: "BILIBILI",
              voters: 519
            },
            {
              station: "GBABELE",
              voters: 536
            },
            {
              station: "KONGA",
              voters: 353
            },
            {
              station: "NDONGBANDA",
              voters: 353
            },
          ],
          "EP BELITA II / A": [
            {
              station: "BELITA",
              voters: 975
            },
            {
              station: "NDENDE",
              voters: 282
            },
            {
              station: "NDOULE",
              voters: 282
            },
          ],
          "EP BOMA / A": [
            {
              station: "BOMA",
              voters: 96
            },
          ],
          "EP BORONGOUE II / A": [
            {
              station: "BORONGOUE",
              voters: 183
            },
            {
              station: "HEPI",
              voters: 183
            },
          ],
          "EP DALIGUENE / A": [
            {
              station: "DALIGUENE",
              voters: 162
            },
          ],
          "EP DEM II / A": [
            {
              station: "DEM",
              voters: 217
            },
          ],
          "EP DIBO / A": [
            {
              station: "DIBO",
              voters: 49
            },
          ],
          "EP DIMAKO / A": [
            {
              station: "DIMAKO",
              voters: 202
            },
            {
              station: "LOBI",
              voters: 202
            },
            {
              station: "MOBIA",
              voters: 202
            },
          ],
          "EP DJENGUE / A": [
            {
              station: "DJENGUE",
              voters: 154
            },
            {
              station: "IPA",
              voters: 154
            },
          ],
          "EP DJIRA-CENTRE / A": [
            {
              station: "DJIRA",
              voters: 156
            },
          ],
          "EP FIO / A": [
            {
              station: "-TOUKI",
              voters: 135
            },
          ],
          "EP GADJI / A": [
            {
              station: "GADJI",
              voters: 876
            },
          ],
          "EP GAROUA-SAMBE / A": [
            {
              station: "DJA",
              voters: 160
            },
            {
              station: "GAROUA-SAMBE",
              voters: 160
            },
            {
              station: "MBOUMAMA-VILLAGE",
              voters: 298
            },
          ],
          "EP KAMBELE I / A": [
            {
              station: "KAMBELE",
              voters: 1573
            },
            {
              station: "NARKE",
              voters: 959
            },
          ],
          "EP LISSOE / A": [
            {
              station: "LISSOE",
              voters: 80
            },
          ],
          "EP LOMBAYA / A": [
            {
              station: "LOMBAYA",
              voters: 279
            },
          ],
          "EP MAMA / A": [
            {
              station: "MAMA",
              voters: 136
            },
          ],
          "EP MBANGOU / A": [
            {
              station: "AKAKELE",
              voters: 123
            },
            {
              station: "MBANGOU",
              voters: 123
            },
          ],
          "EP MBENDISSOLA / A": [
            {
              station: "BAKOMBELE",
              voters: 233
            },
            {
              station: "KOMBO",
              voters: 233
            },
            {
              station: "AMOUGOU",
              voters: 233
            },
            {
              station: "MBENDISSOLA",
              voters: 233
            },
          ],
          "EP MBOUNOU / A": [
            {
              station: "III",
              voters: 1307
            },
            {
              station: "MBOUNOU",
              voters: 641
            },
          ],
          "EP MONT PANDI / A": [
            {
              station: "PANDI",
              voters: 49
            },
          ],
          "EP NABOUBOU / A": [
            {
              station: "NABOUBOU",
              voters: 174
            },
          ],
          "EP NADEGBE / A": [
            {
              station: "NADEGBE",
              voters: 119
            },
          ],
          "EP NAMBALO / A": [
            {
              station: "NAMBALO",
              voters: 198
            },
            {
              station: "NDAMANO",
              voters: 198
            },
            {
              station: "NGANGAM",
              voters: 420
            },
          ],
          "EP NDONGMEMBE / A": [
            {
              station: "NDONGMEMBE",
              voters: 88
            },
          ],
          "EP NGANGAM / A": [
            {
              station: "GUETTE",
              voters: 222
            },
          ],
          "EP NGBWAKO / A": [
            {
              station: "NGBWAKO",
              voters: 777
            },
          ],
          "EP NGOURA II / A": [
            {
              station: "AMEDJOME",
              voters: 622
            },
            {
              station: "NGOURA",
              voters: 622
            },
          ],
          "EP NGUEMO / A": [
            {
              station: "ABENGANGA",
              voters: 170
            },
            {
              station: "AMBANGA",
              voters: 170
            },
            {
              station: "NGUEMO",
              voters: 170
            },
          ],
          "EP NGUINDI / A": [
            {
              station: "AKOKANG",
              voters: 238
            },
            {
              station: "NGUINDI",
              voters: 238
            },
          ],
          "EP NYABI / A": [
            {
              station: "DJOEGUENE",
              voters: 1292
            },
            {
              station: "GBALAKISSA",
              voters: 1292
            },
            {
              station: "NYABI",
              voters: 1292
            },
          ],
          "EP TAPARE / A": [
            {
              station: "TAPARE",
              voters: 431
            },
          ],
          "EP TIKONDI / A": [
            {
              station: "TIKONDI",
              voters: 264
            },
          ],
          "EP TOUKI / A": [
            {
              station: "TOUKI",
              voters: 125
            },
          ],
          "EP TRYPANO / A": [
            {
              station: "BONGOS",
              voters: 1816
            },
            {
              station: "CAMP",
              voters: 8108
            },
            {
              station: "DENIS",
              voters: 1731
            },
            {
              station: "FLEURON",
              voters: 1332
            },
            {
              station: "KAMBO",
              voters: 1370
            },
            {
              station: "LEPI",
              voters: 1370
            },
            {
              station: "TRYPANO",
              voters: 1610
            },
          ],
          "EP TRYPANO BARRIERE / A": [
            {
              station: "BARRIERE",
              voters: 278
            },
          ],
          "EP YOKO BROUSSE / A": [
            {
              station: "NDAM",
              voters: 152
            },
            {
              station: "BROUSSE",
              voters: 152
            },
          ],
          "FOYER BAMOUN MOKOLO / A": [
            {
              station: "FOYER",
              voters: 447
            },
            {
              station: "NOUN",
              voters: 447
            },
          ],
          "FOYER CULTUREL / A": [
            {
              station: "SONEL",
              voters: 705
            },
            {
              station: "MEPO",
              voters: 369
            },
          ],
          "HANGAR PUBLIC DOGBWO I / A": [
            {
              station: "DOGBWO",
              voters: 1339
            },
            {
              station: "KPANGALA",
              voters: 203
            },
            {
              station: "SANDAE",
              voters: 463
            },
          ],
          "HANGAR PUBLIC HOUPI / A": [
            {
              station: "HOUPI",
              voters: 85
            },
            {
              station: "VALE",
              voters: 85
            },
          ],
          "HANGAR PUBLIC MBOMBE PANA / A": [
            {
              station: "MBOMBE",
              voters: 419
            },
            {
              station: "PANA",
              voters: 292
            },
            {
              station: "WESSAMBO",
              voters: 127
            },
          ],
          "HANGAR PUBLIC MBONE / A": [
            {
              station: "BARIBANGUE",
              voters: 484
            },
            {
              station: "MBONE",
              voters: 2361
            },
            {
              station: "TASSONGO",
              voters: 484
            },
          ],
          "HANGAR PUBLIC NDONDOUBE / A": [
            {
              station: "NDONDOUBE",
              voters: 95
            },
          ],
          "HANGAR PUBLIC NGARI-NDEMBO / A": [
            {
              station: "NGARI",
              voters: 133
            },
            {
              station: "DEMBO",
              voters: 133
            },
            {
              station: "PANASSELO",
              voters: 133
            },
          ],
          "HANGAR PUBLIC TISSANDA / A": [
            {
              station: "TISSANDA",
              voters: 36
            },
          ],
          "HOPITAL GRANDES ANDEMIES / A": [
            {
              station: "CENTRE",
              voters: 585
            },
            {
              station: "COMMERCIAL",
              voters: 585
            },
            {
              station: "MOKOLO",
              voters: 5370
            },
            {
              station: "GRANDES",
              voters: 585
            },
            {
              station: "ANDEMIES",
              voters: 585
            },
          ],
          "LYCEE BATOURI TRYPANO / A": [
            {
              station: "SCT",
              voters: 204
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "ELEVAGE",
              voters: 2330
            },
            {
              station: "GENTIL",
              voters: 453
            },
            {
              station: "SAMBO",
              voters: 6567
            },
          ],
          "LYCEE TECHNIQUE BATOURI / A": [
            {
              station: "MISSION",
              voters: 2360
            },
            {
              station: "MBONDOSSI",
              voters: 1997
            },
            {
              station: "MEYOPO",
              voters: 1997
            },
          ],
        },
        "KENTZOU": {
          "COLLEGE CHRIST-ROI DE KENTZOU / A": [
            {
              station: "POLICE",
              voters: 537
            },
            {
              station: "MANGUIER",
              voters: 537
            },
          ],
          "DELEGATION ELEVAGE KENTZOU / A": [
            {
              station: "CENTRE",
              voters: 1964
            },
            {
              station: "CHEFFERIE",
              voters: 843
            },
            {
              station: "CIMENCAM",
              voters: 843
            },
          ],
          "ECOLE CATHOLIQUE LOUISE LE MARCHAND  DE KENTZOU / A": [
            {
              station: "QUARTIER",
              voters: 151
            },
            {
              station: "VILLAGE",
              voters: 151
            },
          ],
          "EP GBOLEGBOLE / A": [
            {
              station: "BOULI",
              voters: 39
            },
            {
              station: "WOLO",
              voters: 39
            },
          ],
          "EP KENTZOU / A": [
            {
              station: "KENTZOU",
              voters: 1121
            },
            {
              station: "MARCHE",
              voters: 1121
            },
            {
              station: "MISSION",
              voters: 1272
            },
            {
              station: "CATHOLIQUE",
              voters: 1272
            },
            {
              station: "OKA",
              voters: 1121
            },
          ],
          "EP LOLO I / A": [
            {
              station: "GBABONE",
              voters: 742
            },
            {
              station: "GBADJANGA",
              voters: 742
            },
            {
              station: "LINDI",
              voters: 742
            },
            {
              station: "LISSAMBO",
              voters: 742
            },
            {
              station: "LOLO",
              voters: 1484
            },
            {
              station: "WASSE",
              voters: 788
            },
          ],
          "EP MBILE I / A": [
            {
              station: "BELIKOUNGOU",
              voters: 567
            },
            {
              station: "GBONGOE",
              voters: 1134
            },
            {
              station: "KOMBO",
              voters: 1134
            },
            {
              station: "MBILE",
              voters: 802
            },
          ],
          "EP MBOUYE / A": [
            {
              station: "MBENDO",
              voters: 343
            },
            {
              station: "PHILIPPE",
              voters: 343
            },
            {
              station: "MBOUYE",
              voters: 343
            },
            {
              station: "PAKA",
              voters: 343
            },
          ],
          "EP NIEWA I / A": [
            {
              station: "DOUBE",
              voters: 165
            },
            {
              station: "GBADJIM",
              voters: 165
            },
            {
              station: "GOMALA",
              voters: 165
            },
            {
              station: "NIEWA",
              voters: 330
            },
            {
              station: "YANTARI",
              voters: 165
            },
          ],
          "EP POUYANGA / A": [
            {
              station: "BOUNDEI",
              voters: 169
            },
            {
              station: "NDONGBELI",
              voters: 169
            },
            {
              station: "POUYANGA",
              voters: 169
            },
          ],
          "EP SANDJI I / A": [
            {
              station: "GOGO",
              voters: 235
            },
            {
              station: "GBANGOLO",
              voters: 235
            },
            {
              station: "NAGOUNTE",
              voters: 235
            },
            {
              station: "SANDJI",
              voters: 586
            },
            {
              station: "SEMBE",
              voters: 235
            },
          ],
          "HANGAR PUBLIC BANDA / A": [
            {
              station: "BANDA",
              voters: 122
            },
            {
              station: "BASSIA",
              voters: 122
            },
            {
              station: "KONGA",
              voters: 273
            },
          ],
          "HANGAR PUBLIC BOMBE BAKARI / A": [
            {
              station: "BOMBE",
              voters: 819
            },
            {
              station: "BAKARI",
              voters: 65
            },
          ],
          "HANGAR PUBLIC BOMBE SATO / A": [
            {
              station: "SATO",
              voters: 68
            },
          ],
          "HANGAR PUBLIC NGOUANDJI / A": [
            {
              station: "GBELI",
              voters: 176
            },
            {
              station: "MEPOLO",
              voters: 176
            },
            {
              station: "NGOUANDJI",
              voters: 176
            },
            {
              station: "SAME",
              voters: 176
            },
          ],
          "LYCEE KENTZOU / A": [
            {
              station: "LYCEE",
              voters: 1406
            },
            {
              station: "PLATEAU",
              voters: 1406
            },
            {
              station: "SOLOLO",
              voters: 1943
            },
          ],
          "TELECENTRE COMMUNAUTAIRE KENTZOU / A": [
            {
              station: "ABATTOIR",
              voters: 1716
            },
            {
              station: "GBOLE-GBOLE",
              voters: 1755
            },
            {
              station: "GENDARMERIE",
              voters: 1716
            },
            {
              station: "SOUS",
              voters: 2253
            },
            {
              station: "PREFECTURE",
              voters: 1716
            },
          ],
        },
        "KETTE": {
          "CAPAM DE CHANTIER KANA / A": [
            {
              station: "KANA",
              voters: 223
            },
          ],
          "CENTRE SANTE INTEGRE TIMANGOLO / A": [
            {
              station: "TIMANGOLO",
              voters: 890
            },
          ],
          "CES DE BOUBARA / A": [
            {
              station: "BOUBARA",
              voters: 3604
            },
            {
              station: "TIMBOLO",
              voters: 743
            },
          ],
          "ECOLE CATHOLIQUE ST LWANGA DE KETTE /  A": [
            {
              station: "BOBITA",
              voters: 19
            },
            {
              station: "BOKANGO",
              voters: 19
            },
            {
              station: "BOSSIA",
              voters: 252
            },
          ],
          "ECOLE PUBLIQUE DE MBORGUENE FONCHA /  A": [
            {
              station: "BEGONTE",
              voters: 78
            },
            {
              station: "FONCHA",
              voters: 78
            },
            {
              station: "NGASSA-CARO",
              voters: 78
            },
          ],
          "EP BEDOBO / A": [
            {
              station: "BEDOBO",
              voters: 3
            },
            {
              station: "LOMA",
              voters: 59
            },
            {
              station: "MBORGUENE",
              voters: 140
            },
            {
              station: "VILLAGE",
              voters: 192
            },
            {
              station: "NDONG-LIBIO",
              voters: 59
            },
            {
              station: "TAOULE",
              voters: 59
            },
          ],
          "EP BEKE CHANTIER / A": [
            {
              station: "BEKE",
              voters: 7
            },
            {
              station: "CHANTIER",
              voters: 197
            },
            {
              station: "TIKELA",
              voters: 118
            },
          ],
          "EP BEKE-ROUTE / A": [
            {
              station: "BEKE-ROUTE",
              voters: 264
            },
            {
              station: "TIKO",
              voters: 264
            },
            {
              station: "TISSANDA",
              voters: 264
            },
            {
              station: "ZALINGO",
              voters: 264
            },
          ],
          "EP BOUBARA GROUPE I / A": [
            {
              station: "CENTRE",
              voters: 1764
            },
          ],
          "EP BOUBARA GROUPE II / A": [
            {
              station: "MARCHE",
              voters: 401
            },
            {
              station: "BETAIL",
              voters: 401
            },
          ],
          "EP GBITI GROUPE I / A": [
            {
              station: "BONABERI",
              voters: 185
            },
            {
              station: "GBITI",
              voters: 1840
            },
          ],
          "EP GBITI GROUPE II / A": [
            {
              station: "MBOUMBE",
              voters: 968
            },
          ],
          "EP GOGADJI / A": [
            {
              station: "GOGADJI",
              voters: 222
            },
          ],
          "EP GOGOBOUA / A": [
            {
              station: "GOGOBOUA",
              voters: 112
            },
          ],
          "EP GONKORA BARRIERE / A": [
            {
              station: "GONKORA",
              voters: 256
            },
            {
              station: "BARRIERE",
              voters: 128
            },
            {
              station: "BIENVENU",
              voters: 128
            },
            {
              station: "LINGBIM",
              voters: 184
            },
          ],
          "EP KETTE / A": [
            {
              station: "NABOLOWEN",
              voters: 1106
            },
            {
              station: "NYLON",
              voters: 1106
            },
          ],
          "EP KOUMBE-TIKO / A": [
            {
              station: "KOUMBE-TIKO",
              voters: 102
            },
            {
              station: "NDONG-DARE",
              voters: 102
            },
          ],
          "EP KOYA II / A": [
            {
              station: "KOYA",
              voters: 326
            },
          ],
          "EP LALA / A": [
            {
              station: "LALA",
              voters: 155
            },
          ],
          "EP LIGUE-ROMA / A": [
            {
              station: "LIGUE-ROMA",
              voters: 111
            },
          ],
          "EP MAMA II / A": [
            {
              station: "MAMA",
              voters: 708
            },
          ],
          "EP MBORGUENE GBABIO / A": [
            {
              station: "GBABIO",
              voters: 59
            },
          ],
          "EP MBOUMAMA / A": [
            {
              station: "MBOUMAMA",
              voters: 266
            },
          ],
          "EP NAMBORA / A": [
            {
              station: "NAMBORA",
              voters: 200
            },
            {
              station: "NGASSA",
              voters: 200
            },
            {
              station: "TIBANGUE",
              voters: 200
            },
            {
              station: "TIKOLO",
              voters: 336
            },
          ],
          "EP NDAMBI I / A": [
            {
              station: "NDAMBI",
              voters: 328
            },
            {
              station: "TEZOUKPE",
              voters: 328
            },
          ],
          "EP NGBWAKINE / A": [
            {
              station: "MBOSSO",
              voters: 189
            },
            {
              station: "NGBWAKINE",
              voters: 189
            },
          ],
          "EP OUNDJIKI / A": [
            {
              station: "OUNDJIKI",
              voters: 151
            },
          ],
          "EP OURO-IDJE / A": [
            {
              station: "GBEYERE",
              voters: 51
            },
            {
              station: "NGARI-ZOCKTE",
              voters: 51
            },
            {
              station: "OURO-IDJE",
              voters: 51
            },
          ],
          "EP WANTAMO / A": [
            {
              station: "HOPPI",
              voters: 176
            },
            {
              station: "MBOUGBAKA",
              voters: 176
            },
            {
              station: "NDONG-SOUMBOU",
              voters: 176
            },
            {
              station: "WANTAMO",
              voters: 176
            },
          ],
          "HANGAR PUBLIC KPAWEYA / A": [
            {
              station: "KPAWEYA",
              voters: 81
            },
          ],
          "LYCEE BILINGUE KETTE / A": [
            {
              station: "BETANIE",
              voters: 26
            },
            {
              station: "KETTE",
              voters: 2459
            },
            {
              station: "MUSULMAN",
              voters: 769
            },
            {
              station: "MOKOLO",
              voters: 26
            },
          ],
          "TELECENTRE COMMUNAUTAIRE GBITI / A": [
            {
              station: "NDAE",
              voters: 687
            },
            {
              station: "NGUESSE",
              voters: 687
            },
          ],
        },
        "MBANG": {
          "CHEFFERIE GBATANGA / A": [
            {
              station: "BABOUTOU",
              voters: 68
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DE BANGUE I / A": [
            {
              station: "BANGUE",
              voters: 252
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DE KALAKUTA  GROUPE II / A": [
            {
              station: "KOUEM-KOUEM",
              voters: 1898
            },
            {
              station: "VATICAN",
              voters: 1898
            },
            {
              station: "YAMBOKA",
              voters: 1898
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DE MOKOKO / A": [
            {
              station: "MOKOKO",
              voters: 68
            },
            {
              station: "TERRE",
              voters: 68
            },
            {
              station: "PROMISE",
              voters: 68
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DE NGAO / A": [
            {
              station: "NGAO",
              voters: 160
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DE TIKONDI II / A": [
            {
              station: "MONT-FEBE",
              voters: 127
            },
            {
              station: "TIKONDI",
              voters: 127
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE DJEMIONG / A": [
            {
              station: "DJEMIONG",
              voters: 144
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE D\ATSIECK / A": [
            {
              station: "ATSIECK",
              voters: 254
            },
            {
              station: "DJEKOURT",
              voters: 254
            },
            {
              station: "DJELELONG",
              voters: 254
            },
            {
              station: "KOUEDJINA",
              voters: 254
            },
            {
              station: "MOMPACK",
              voters: 254
            },
            {
              station: "NONGOUALA",
              voters: 254
            },
          ],
          "ECOLE PRIMAIRE PUBLIQUE MODJENDI I / A": [
            {
              station: "GOUABILA",
              voters: 111
            },
            {
              station: "MODJENDI",
              voters: 222
            },
          ],
          "EP AMOURE / A": [
            {
              station: "AMOURE",
              voters: 60
            },
            {
              station: "MOUNDIA",
              voters: 60
            },
          ],
          "EP DJAMPIEL / A": [
            {
              station: "DJAMPIEL",
              voters: 318
            },
            {
              station: "MONGOBIA",
              voters: 318
            },
          ],
          "EP KAGNOL III SEBC / A": [
            {
              station: "SEBC",
              voters: 89
            },
          ],
          "EP KALAKUTA / A": [
            {
              station: "KALAKUTA",
              voters: 2114
            },
          ],
          "EP LILA / A": [
            {
              station: "LILA",
              voters: 176
            },
            {
              station: "NGARI",
              voters: 120
            },
          ],
          "EP MBAMA / A": [
            {
              station: "MBAMA",
              voters: 123
            },
            {
              station: "NDEINA",
              voters: 123
            },
            {
              station: "TOUKI",
              voters: 123
            },
          ],
          "EP MBANG / A": [
            {
              station: "BAMENDA",
              voters: 195
            },
            {
              station: "KOLELONG",
              voters: 434
            },
            {
              station: "DJIEMIONG",
              voters: 195
            },
          ],
          "EP NDJANG / A": [
            {
              station: "NDJANG",
              voters: 137
            },
          ],
          "FOYER COMMUNAUTAIRE BAMEKOK / A": [
            {
              station: "BAMEKOK",
              voters: 165
            },
            {
              station: "GOUTE",
              voters: 165
            },
          ],
          "FOYER COMMUNAUTAIRE BEMBOUTA / A": [
            {
              station: "BEMBOUTA",
              voters: 92
            },
            {
              station: "VILLAGE",
              voters: 301
            },
          ],
          "FOYER COMMUNAUTAIRE BIMBA / A": [
            {
              station: "BIMBA",
              voters: 165
            },
          ],
          "FOYER COMMUNAUTAIRE BITOUALA / A": [
            {
              station: "BITOUALA",
              voters: 153
            },
          ],
          "FOYER COMMUNAUTAIRE BOKENDJA / A": [
            {
              station: "BOKENDJA",
              voters: 82
            },
          ],
          "FOYER COMMUNAUTAIRE DJEPADOP / A": [
            {
              station: "DJEPADOP",
              voters: 63
            },
            {
              station: "ESSENBOTH",
              voters: 63
            },
            {
              station: "NDOMBOUDIO",
              voters: 63
            },
          ],
          "FOYER COMMUNAUTAIRE DJOCKNEPOUM / A": [
            {
              station: "DJOCKNEPOUM",
              voters: 119
            },
          ],
          "FOYER COMMUNAUTAIRE DJOUTH I / A": [
            {
              station: "DARD",
              voters: 257
            },
            {
              station: "DJOUTH",
              voters: 425
            },
          ],
          "FOYER COMMUNAUTAIRE DJOUTH II / A": [
            {
              station: "GNOUOCKDJEKOND",
              voters: 168
            },
            {
              station: "MPIEL",
              voters: 168
            },
          ],
          "FOYER COMMUNAUTAIRE KAGNOL I / A": [
            {
              station: "KAGNOL",
              voters: 651
            },
            {
              station: "MBESLEBOTH",
              voters: 245
            },
          ],
          "FOYER COMMUNAUTAIRE KAGNOL II / A": [
            {
              station: "MAMBELE",
              voters: 252
            },
            {
              station: "METHA",
              voters: 252
            },
            {
              station: "SIENGBOTH",
              voters: 252
            },
          ],
          "FOYER COMMUNAUTAIRE KOLMBONG / A": [
            {
              station: "KOLMBONG",
              voters: 239
            },
            {
              station: "KOUOKODJOS",
              voters: 239
            },
          ],
          "FOYER COMMUNAUTAIRE KOSSO / A": [
            {
              station: "AKOM",
              voters: 312
            },
            {
              station: "KOSSO",
              voters: 312
            },
          ],
          "FOYER COMMUNAUTAIRE MAYOS / A": [
            {
              station: "MAYOS",
              voters: 150
            },
            {
              station: "PEPO",
              voters: 150
            },
          ],
          "FOYER COMMUNAUTAIRE MOLOBO / A": [
            {
              station: "BONIS",
              voters: 218
            },
            {
              station: "DOMIAKA",
              voters: 218
            },
            {
              station: "KAPANG",
              voters: 218
            },
            {
              station: "MOLOBO",
              voters: 218
            },
          ],
          "FOYER COMMUNAUTAIRE MOLOUNDOU / A": [
            {
              station: "EBOUETE",
              voters: 187
            },
            {
              station: "MOLOUNDOU",
              voters: 187
            },
          ],
          "FOYER COMMUNAUTAIRE MOMBEL I / A": [
            {
              station: "MOMBEL",
              voters: 221
            },
          ],
          "FOYER COMMUNAUTAIRE NZENG I / A": [
            {
              station: "NZENG",
              voters: 164
            },
          ],
          "FOYER MUNICIPAL MBANG / A": [
            {
              station: "BAKASSI",
              voters: 700
            },
            {
              station: "BOUMDEL",
              voters: 3045
            },
            {
              station: "GBESSAWI",
              voters: 700
            },
            {
              station: "MBANG",
              voters: 700
            },
            {
              station: "PLATEAUX",
              voters: 700
            },
            {
              station: "MIMBOMAN",
              voters: 700
            },
            {
              station: "MOKOLO",
              voters: 792
            },
            {
              station: "QUARTIER",
              voters: 895
            },
          ],
          "HANGAR CHEFFERIE GBATANGA / A": [
            {
              station: "GBATANGA",
              voters: 38
            },
          ],
          "HANGAR CHEFFERIE GBWAMBALA / A": [
            {
              station: "GBWAMBALA",
              voters: 50
            },
          ],
          "HANGAR CHEFFERIE KAGNOL III / A": [
            {
              station: "III",
              voters: 154
            },
          ],
          "HANGAR CHEFFERIE LILA NGBONG / A": [
            {
              station: "NGBONG",
              voters: 56
            },
          ],
          "HANGAR CHEFFERIE MOBAMBOU / A": [
            {
              station: "LIMPOYA",
              voters: 84
            },
            {
              station: "MOBAMBOU",
              voters: 84
            },
            {
              station: "NZENGOUE",
              voters: 84
            },
          ],
          "HOPITAL BOUMDEL / A": [
            {
              station: "NYLON",
              voters: 559
            },
          ],
        },
        "NDELELE": {
          "ECOLE CATHOLIQUE MINDOUROU / A": [
            {
              station: "BODIA",
              voters: 94
            },
            {
              station: "MINDOUROU",
              voters: 1352
            },
            {
              station: "MISSION",
              voters: 778
            },
            {
              station: "CATHOLIQUE",
              voters: 778
            },
          ],
          "ECOLE CATHOLIQUE NDELELE / A": [
            {
              station: "LOUMBE",
              voters: 459
            },
            {
              station: "NGAKO",
              voters: 342
            },
          ],
          "ECOLE GBAGBALE / A": [
            {
              station: "GBAGBALE",
              voters: 85
            },
          ],
          "EP BANGA / A": [
            {
              station: "BANGA",
              voters: 230
            },
            {
              station: "WOSSO",
              voters: 230
            },
          ],
          "EP BEKARE CARREFOUR / A": [
            {
              station: "ANDEMBIAMO",
              voters: 591
            },
            {
              station: "BEKARE",
              voters: 591
            },
            {
              station: "CAMP",
              voters: 1136
            },
            {
              station: "GRUMCAM",
              voters: 591
            },
          ],
          "EP BIE / A": [
            {
              station: "ANDING-DING",
              voters: 121
            },
            {
              station: "BIE",
              voters: 121
            },
            {
              station: "LISSAMBE",
              voters: 121
            },
            {
              station: "KADEY",
              voters: 121
            },
            {
              station: "NAPION",
              voters: 121
            },
          ],
          "EP BOUNO II / A": [
            {
              station: "ALOUMA",
              voters: 107
            },
            {
              station: "BOUNO",
              voters: 219
            },
            {
              station: "WATANDA",
              voters: 107
            },
          ],
          "EP DONGALI / A": [
            {
              station: "DONGALI",
              voters: 172
            },
            {
              station: "NGALANDO",
              voters: 172
            },
          ],
          "EP DONGONGO / A": [
            {
              station: "DONGONGO",
              voters: 229
            },
            {
              station: "MBEMBELE",
              voters: 229
            },
            {
              station: "NAKOMBO",
              voters: 229
            },
          ],
          "EP KOBI / A": [
            {
              station: "ALANDA",
              voters: 384
            },
            {
              station: "KOBI",
              voters: 384
            },
          ],
          "EP LYSSEI / A": [
            {
              station: "LISSEI",
              voters: 194
            },
          ],
          "EP MBOMBETE / A": [
            {
              station: "MBOMBETE",
              voters: 506
            },
            {
              station: "NGOUNA",
              voters: 506
            },
            {
              station: "PANAWA",
              voters: 506
            },
          ],
          "EP MBONDOUA I / A": [
            {
              station: "LINDI",
              voters: 235
            },
            {
              station: "MBELE",
              voters: 235
            },
            {
              station: "MBONDOUA",
              voters: 470
            },
            {
              station: "NDONG",
              voters: 235
            },
          ],
          "EP MEPOUTA / A": [
            {
              station: "BEKELE",
              voters: 126
            },
            {
              station: "BOGAMAGO",
              voters: 126
            },
            {
              station: "DIME",
              voters: 126
            },
            {
              station: "MEPOUTA",
              voters: 126
            },
          ],
          "EP MINDOUROU / A": [
            {
              station: "FALAISE",
              voters: 134
            },
            {
              station: "MARCHE",
              voters: 599
            },
          ],
          "EP NAKPASSA II / A": [
            {
              station: "BASSIA",
              voters: 110
            },
            {
              station: "NAKPASSA",
              voters: 227
            },
          ],
          "EP NDANKO / A": [
            {
              station: "DANG-LI",
              voters: 266
            },
            {
              station: "GBABELE",
              voters: 266
            },
            {
              station: "NDANKO",
              voters: 487
            },
            {
              station: "NGOKO",
              voters: 266
            },
            {
              station: "NGOMANDJOKOU",
              voters: 266
            },
          ],
          "EP NDELELE / A": [
            {
              station: "NDELELE",
              voters: 634
            },
            {
              station: "NDODITING",
              voters: 179
            },
          ],
          "EP NDELELE II AMPOH / A": [
            {
              station: "AMPOH",
              voters: 113
            },
            {
              station: "WASSA",
              voters: 113
            },
          ],
          "EP NGOTTO / A": [
            {
              station: "NGOTTO",
              voters: 642
            },
            {
              station: "MCT",
              voters: 228
            },
          ],
          "EP PANA I / A": [
            {
              station: "GAVELA",
              voters: 318
            },
            {
              station: "HEPI",
              voters: 240
            },
            {
              station: "PANA",
              voters: 432
            },
          ],
          "EP SANGALE / A": [
            {
              station: "SOPELE",
              voters: 221
            },
            {
              station: "PARNET",
              voters: 221
            },
            {
              station: "SANGALE",
              voters: 221
            },
            {
              station: "SINAI",
              voters: 221
            },
          ],
          "EP SOBOLO / A": [
            {
              station: "SOBOLO",
              voters: 716
            },
          ],
          "EP SONE / A": [
            {
              station: "BELITA",
              voters: 122
            },
            {
              station: "SONE",
              voters: 122
            },
          ],
          "EP TINDI / A": [
            {
              station: "BELENGOU",
              voters: 61
            },
            {
              station: "TINDI",
              voters: 61
            },
          ],
          "EP YOLA / A": [
            {
              station: "YOLA",
              voters: 588
            },
          ],
          "FOYER CULTUREL / A": [
            {
              station: "AVENUE",
              voters: 300
            },
            {
              station: "QUARTIER",
              voters: 791
            },
            {
              station: "FOYER",
              voters: 300
            },
          ],
          "FOYER JEUNES MINDOUROU / A": [
            {
              station: "ESPATRIES",
              voters: 317
            },
            {
              station: "CHEFFERIE",
              voters: 317
            },
            {
              station: "CANTON",
              voters: 317
            },
          ],
          "HANGAR MARCHE MINDOUROU / A": [
            {
              station: "NGOANDAMBA",
              voters: 465
            },
            {
              station: "NGOGOM",
              voters: 465
            },
            {
              station: "STADE",
              voters: 465
            },
            {
              station: "TUNI",
              voters: 465
            },
          ],
          "HANGAR PUBLIC KENTZOU II / A": [
            {
              station: "KENTZOU",
              voters: 192
            },
            {
              station: "TIKONDI",
              voters: 192
            },
          ],
          "HANGAR PUBLIC LELE / A": [
            {
              station: "LELE",
              voters: 210
            },
            {
              station: "LOUKOU-LOUKOU",
              voters: 210
            },
            {
              station: "NGOMBE",
              voters: 210
            },
          ],
          "HANGAR PUBLIC MBEMBESSO / A": [
            {
              station: "MBEMBESSO",
              voters: 136
            },
            {
              station: "SEINGBOT",
              voters: 136
            },
          ],
          "HANGAR PUBLIC MENDENGUEM / A": [
            {
              station: "AITO",
              voters: 131
            },
            {
              station: "MEDENGUEM",
              voters: 131
            },
            {
              station: "NDOUMBE",
              voters: 131
            },
            {
              station: "SEMBE",
              voters: 252
            },
            {
              station: "III",
              voters: 131
            },
          ],
          "HANGAR PUBLIC NGOTTO / A": [
            {
              station: "CENTRE",
              voters: 414
            },
          ],
          "LYCEE NDELELE / A": [
            {
              station: "BONABERI",
              voters: 374
            },
            {
              station: "LYCEE",
              voters: 374
            },
          ],
          "MAIRIE NDELELE / A": [
            {
              station: "PLATEAU",
              voters: 179
            },
            {
              station: "ADMINISTRATIF",
              voters: 179
            },
          ],
          "SAR-SM NDELELE / A": [
            {
              station: "CACEP",
              voters: 117
            },
            {
              station: "SAR",
              voters: 117
            },
          ],
        },
        "NGUELEBOK": {
          "ECOLE PARENTS DENGORO / A": [
            {
              station: "DENGORO",
              voters: 5
            },
            {
              station: "FONA-MBILO",
              voters: 90
            },
            {
              station: "GOUNTE",
              voters: 99
            },
            {
              station: "CARREFOUR",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE BABETHO / A": [
            {
              station: "BABETHO",
              voters: 1
            },
          ],
          "ECOLE PUBLIQUE BELLO / A": [
            {
              station: "BELLO",
              voters: 2
            },
            {
              station: "MELOUPO'O",
              voters: 2
            },
          ],
          "ECOLE PUBLIQUE BITAM-YEN / A": [
            {
              station: "BITAM-YEN",
              voters: 3
            },
          ],
          "ECOLE PUBLIQUE DEM I / A": [
            {
              station: "DEM",
              voters: 4
            },
            {
              station: "MBOUFOU",
              voters: 63
            },
          ],
          "ECOLE PUBLIQUE DIMAKO II / A": [
            {
              station: "DIMAKO",
              voters: 6
            },
            {
              station: "NOL",
              voters: 69
            },
          ],
          "ECOLE PUBLIQUE GODANGA / A": [
            {
              station: "GODANGA",
              voters: 8
            },
            {
              station: "GONGA",
              voters: 35
            },
          ],
          "ECOLE PUBLIQUE GOUNTE / A": [
            {
              station: "NDEMBO",
              voters: 9
            },
          ],
          "ECOLE PUBLIQUE KAMBA-MIERI / A": [
            {
              station: "KAMBA-MIERI",
              voters: 10
            },
          ],
          "ECOLE PUBLIQUE KOBA I / A": [
            {
              station: "KOBA",
              voters: 23
            },
          ],
          "ECOLE PUBLIQUE MBEM-BIYO / A": [
            {
              station: "MBEM-BIYO",
              voters: 15
            },
          ],
          "ECOLE PUBLIQUE MELAMBO / A": [
            {
              station: "MELAMBO",
              voters: 16
            },
          ],
          "ECOLE PUBLIQUE NDJASSI / A": [
            {
              station: "NDJASSI",
              voters: 19
            },
          ],
          "ECOLE PUBLIQUE NGOULMEKONG / A": [
            {
              station: "NGOULMEKONG",
              voters: 21
            },
            {
              station: "NYAMSAMBO",
              voters: 110
            },
          ],
          "ECOLE PUBLIQUE NGOUTOU / A": [
            {
              station: "KONGA",
              voters: 63
            },
            {
              station: "NGOUTOU",
              voters: 13
            },
          ],
          "ECOLE PUBLIQUE NGUELEBOK / A": [
            {
              station: "NGUELEBOK",
              voters: 45
            },
          ],
          "ECOLE PUBLIQUE NGUIKOUASSIMA / A": [
            {
              station: "GABALETTA",
              voters: 33
            },
            {
              station: "NGUIKOUASSIMA",
              voters: 7
            },
          ],
          "ECOLE PUBLIQUE NYAMTIMBI / A": [
            {
              station: "NYAMTIMBI",
              voters: 24
            },
          ],
          "HANGAR PUBLIC NAZARETH / A": [
            {
              station: "NAZARETH",
              voters: 17
            },
          ],
          "HANGAR PUBLIC NDEMNAM / A": [
            {
              station: "NDEMNAM",
              voters: 18
            },
          ],
          "HANGAR PUBLIC NDOUMBE / A": [
            {
              station: "NDOUMBE",
              voters: 20
            },
          ],
          "HANGAR PUBLIC NYAMSSAMBO / A": [
            {
              station: "NYAMSSAMBO",
              voters: 89
            },
          ],
          "HANGAR PUBLIC SANGOE / A": [
            {
              station: "LELO",
              voters: 62
            },
            {
              station: "SANGOE",
              voters: 14
            },
          ],
          "HANGAR PUBLIC ZEMBELE / A": [
            {
              station: "ZEMBELE",
              voters: 25
            },
          ],
        },
        "OULI": {
          "ANCIENNE SOUS PREFECTURE OULI / A": [
            {
              station: "BEGUIRO",
              voters: 228
            },
            {
              station: "BENAKOBE",
              voters: 228
            },
            {
              station: "BOWANTO",
              voters: 228
            },
          ],
          "DISPENSAIRE BENGUE-TIKO / A": [
            {
              station: "BODILO",
              voters: 99
            },
            {
              station: "GBAKALA",
              voters: 99
            },
            {
              station: "GBAKOYO",
              voters: 99
            },
          ],
          "DISPENSAIRE OULI / A": [
            {
              station: "BOWAN",
              voters: 81
            },
          ],
          "EP BENGUE TIKO / A": [
            {
              station: "BEGBAGOU",
              voters: 62
            },
            {
              station: "BENAWANWE",
              voters: 62
            },
            {
              station: "BENGUE-TIKO",
              voters: 285
            },
            {
              station: "BEWANGUIDI",
              voters: 62
            },
            {
              station: "BODEN",
              voters: 212
            },
            {
              station: "BOGBABILO",
              voters: 62
            },
            {
              station: "BOKOM",
              voters: 143
            },
            {
              station: "BOSSIA",
              voters: 62
            },
            {
              station: "BOTOKO",
              voters: 62
            },
            {
              station: "BOWEN",
              voters: 62
            },
            {
              station: "COMMUNAUTE",
              voters: 1773
            },
            {
              station: "MUSULMANE",
              voters: 498
            },
          ],
          "EP MBELEBINA / A": [
            {
              station: "BEBINAZOU",
              voters: 3
            },
            {
              station: "BEMANDO",
              voters: 100
            },
            {
              station: "MBELEBINA",
              voters: 3
            },
            {
              station: "BOURAN",
              voters: 1
            },
            {
              station: "GBAFORO",
              voters: 1
            },
            {
              station: "MBODIOKOMBO",
              voters: 1
            },
            {
              station: "MBOTOKO",
              voters: 1
            },
            {
              station: "NABOLOWEN",
              voters: 1
            },
            {
              station: "TAPATA",
              voters: 229
            },
          ],
          "EP NDAMBI II / A": [
            {
              station: "BEMBOULE",
              voters: 158
            },
            {
              station: "NDAMBI",
              voters: 316
            },
            {
              station: "BOURANG",
              voters: 158
            },
            {
              station: "BOZANSANGA",
              voters: 158
            },
            {
              station: "MOINAM",
              voters: 158
            },
          ],
          "EP OULI / A": [
            {
              station: "BEDABOU",
              voters: 3
            },
            {
              station: "BETANIE",
              voters: 3
            },
            {
              station: "BOAR",
              voters: 161
            },
            {
              station: "OULI",
              voters: 712
            },
            {
              station: "BODIBO",
              voters: 3
            },
            {
              station: "BOYELE",
              voters: 3
            },
          ],
          "EP OUNSOUNOU / A": [
            {
              station: "BEHOYA",
              voters: 2
            },
            {
              station: "MBORGOKOU",
              voters: 2
            },
            {
              station: "OUNSOUNOU",
              voters: 2
            },
          ],
          "EP TAMONEGUEZE / A": [
            {
              station: "MBOMBE-NASSE",
              voters: 108
            },
            {
              station: "TAMONEGUEZE",
              voters: 108
            },
          ],
          "EP TOCKTOYO / A": [
            {
              station: "BORORO",
              voters: 342
            },
            {
              station: "GBAYA",
              voters: 933
            },
            {
              station: "TOCKTOYO",
              voters: 933
            },
          ],
          "EP ZIMBI / A": [
            {
              station: "VILLAGE",
              voters: 150
            },
            {
              station: "BOZOM",
              voters: 150
            },
            {
              station: "GBAFOU",
              voters: 150
            },
            {
              station: "DOFORO",
              voters: 150
            },
            {
              station: "LINGBI",
              voters: 150
            },
            {
              station: "MBOSSIA",
              voters: 150
            },
            {
              station: "MBOZANFORO",
              voters: 150
            },
            {
              station: "ZIMBI",
              voters: 150
            },
          ],
          "EP ZOUNGABONA / A": [
            {
              station: "ZOUNGABONA",
              voters: 343
            },
          ],
          "FOYER MUNICIPAL DE OULI / A": [
            {
              station: "BEGBEMA",
              voters: 169
            },
            {
              station: "BODIBA",
              voters: 169
            },
            {
              station: "BOLAYE",
              voters: 169
            },
            {
              station: "III",
              voters: 169
            },
          ],
          "HANGAR PUBLIC NAMBONA / A": [
            {
              station: "NAMBONA",
              voters: 149
            },
          ],
          "HP BOUNOU-GBALI / A": [
            {
              station: "BOUNOU-GBALI",
              voters: 134
            },
          ],
        },
      },
      "LOM-ET-DJEREM": {
        "BELABO": {
          "C.E.S DONDI / A": [
            {
              station: "DONDI",
              voters: 21
            },
          ],
          "CENTRE UNIVERSITAIRE / A": [
            {
              station: "ELOBI",
              voters: 313
            },
          ],
          "COMPLEXE SITRAFER / A": [
            {
              station: "SAPELLI",
              voters: 726
            },
          ],
          "COORDINATION CAMRAIL / A": [
            {
              station: "BAMILEKE",
              voters: 6
            },
          ],
          "DELEGATION AGRICULTURE / A": [
            {
              station: "BLOC",
              voters: 33
            },
            {
              station: "SOCOPAO",
              voters: 33
            },
          ],
          "ECOLE CATHOLIQUE DJANGANE / A": [
            {
              station: "DJANGANE",
              voters: 20
            },
          ],
          "EP AKOK MEKEL II / A": [
            {
              station: "POUTHEY",
              voters: 88
            },
          ],
          "EP BELABO VILLAGE / A": [
            {
              station: "BELABO",
              voters: 7
            },
            {
              station: "VILLAGE",
              voters: 7
            },
          ],
          "EP BIOMBE / A": [
            {
              station: "BIOMBE",
              voters: 8
            },
          ],
          "EP BOMBI / A": [
            {
              station: "BOMBI",
              voters: 9
            },
          ],
          "EP DENG-DENG / A": [
            {
              station: "DENG-DENG",
              voters: 35
            },
          ],
          "EP DU CENTRE / A": [
            {
              station: "CLIMAT",
              voters: 58
            },
            {
              station: "L'EST",
              voters: 58
            },
            {
              station: "HAOUSSA",
              voters: 58
            },
          ],
          "EP EKOMBITIE / A": [
            {
              station: "EKOMBITIE",
              voters: 26
            },
          ],
          "EP ESSANDJANE / A": [
            {
              station: "ESSANDJANE",
              voters: 172
            },
          ],
          "EP ESSELEGUE / A": [
            {
              station: "ESSELEGUE",
              voters: 141
            },
            {
              station: "OYACK",
              voters: 1419
            },
          ],
          "EP GBADANGA / A": [
            {
              station: "GBADANGA",
              voters: 82
            },
          ],
          "EP GOYOUM / A": [
            {
              station: "GOYOUM",
              voters: 492
            },
          ],
          "EP KALBE / A": [
            {
              station: "KALBE",
              voters: 47
            },
          ],
          "EP KANO / A": [
            {
              station: "KANO",
              voters: 168
            },
          ],
          "EP KOKBEDI / A": [
            {
              station: "KOKBEDI",
              voters: 137
            },
          ],
          "EP KOUNDI / A": [
            {
              station: "KOUNDI",
              voters: 325
            },
          ],
          "EP LENDI KAI-KAI / A": [
            {
              station: "LENDI",
              voters: 264
            },
            {
              station: "KAI-KAI",
              voters: 264
            },
          ],
          "EP MAMBAYA / A": [
            {
              station: "MAMBAYA",
              voters: 267
            },
          ],
          "EP MANSA / A": [
            {
              station: "MANSA",
              voters: 96
            },
          ],
          "EP MBAKI II / A": [
            {
              station: "MBAKI",
              voters: 424
            },
          ],
          "EP MBAMBO / A": [
            {
              station: "MBAMBO",
              voters: 140
            },
          ],
          "EP MBETHEN I / A": [
            {
              station: "MBETHEN",
              voters: 422
            },
          ],
          "EP NDEMBA I / A": [
            {
              station: "NDEMBA",
              voters: 445
            },
          ],
          "EP NDOUMBA KANGA / A": [
            {
              station: "NDOUMBA",
              voters: 456
            },
            {
              station: "KANGA",
              voters: 301
            },
          ],
          "EP OUAMI / A": [
            {
              station: "HAMAN",
              voters: 1032
            },
            {
              station: "OUAMI",
              voters: 911
            },
          ],
          "EP SIKONDJI / A": [
            {
              station: "LONDJEA",
              voters: 55
            },
            {
              station: "SIKONDJI",
              voters: 55
            },
          ],
          "EP VIALI / A": [
            {
              station: "VIALI",
              voters: 190
            },
          ],
          "EP WOUTCHABA / A": [
            {
              station: "WOUTCHABA",
              voters: 156
            },
          ],
          "EP YANDA BOBILIS / A": [
            {
              station: "YANDA",
              voters: 191
            },
            {
              station: "BOBILIS",
              voters: 191
            },
          ],
          "EP YOA / A": [
            {
              station: "EKAK",
              voters: 25
            },
            {
              station: "YOA",
              voters: 25
            },
          ],
          "EP YOKO BETOUGOU / A": [
            {
              station: "YOKO",
              voters: 152
            },
            {
              station: "BETOUGOU",
              voters: 152
            },
          ],
          "ESPL CHEFFERIE AKOK MEKEL I / A": [
            {
              station: "AKOK",
              voters: 70
            },
            {
              station: "MEKEL",
              voters: 70
            },
          ],
          "FOYER COMM LOM PANGAR / A": [
            {
              station: "PANGAR",
              voters: 557
            },
          ],
          "FOYER COMMUNAUTAIRE EBAKA I / A": [
            {
              station: "EBAKA",
              voters: 69
            },
          ],
          "HANGAR CHEFFERIE DIMONG / A": [
            {
              station: "DIMONG",
              voters: 19
            },
          ],
          "HANGAR CHEFFERIE ESSAMIEM / A": [
            {
              station: "ESSAMIEM",
              voters: 32
            },
          ],
          "HANGAR CHEFFERIE HONA / A": [
            {
              station: "HONA",
              voters: 68
            },
          ],
          "HANGAR CHEFFERIE LOM II / A": [
            {
              station: "LOM",
              voters: 583
            },
          ],
          "HANGAR CHEFFERIE MBAKI BROUSSE / A": [
            {
              station: "BROUSSE",
              voters: 24
            },
          ],
          "HANGAR CHEFFERIE MBAMBASSI / A": [
            {
              station: "MBAMBASSI",
              voters: 22
            },
          ],
          "HANGAR CHEFFERIE NDOUMBA OLINGA / A": [
            {
              station: "OLINGA",
              voters: 155
            },
          ],
          "HANGAR CHEFFERIE YEBI / A": [
            {
              station: "YEBI",
              voters: 91
            },
          ],
          "INSPECTION EDUCATION DE BASE / A": [
            {
              station: "RESIDENTIEL",
              voters: 354
            },
          ],
          "MISSION CATHOLIQUE ADIAH / A": [
            {
              station: "ADIAH",
              voters: 1
            },
          ],
          "MISSION CATHOLIQUE KAMBOCASSI / A": [
            {
              station: "KAMBOCASSI",
              voters: 74
            },
          ],
          "MISSION CATHOLIQUE SAKOUDI / A": [
            {
              station: "SAKOUDI",
              voters: 52
            },
          ],
          "MISSION CATHOLIQUE SATANDO / A": [
            {
              station: "SATANDO",
              voters: 61
            },
          ],
          "MISSION CATHOLIQUE YAMBENG / A": [
            {
              station: "YAMBENG",
              voters: 144
            },
          ],
        },
        "BERTOUA I": {
          "CENTRE DE JEUNESSE / A": [
            {
              station: "NDOUAN",
              voters: 832
            },
          ],
          "COLLEGE ZUTOCHIE / A": [
            {
              station: "BIRPONDO",
              voters: 146
            },
          ],
          "ECOLE E.P.C / A": [
            {
              station: "RADIO",
              voters: 1320
            },
          ],
          "ECOLE FRANCO ARABE / A": [
            {
              station: "NDONGOFFI",
              voters: 763
            },
          ],
          "ECOLE MATERNELLE CNPS / A": [
            {
              station: "BAMVELE",
              voters: 15
            },
          ],
          "EM ANNEXE / A": [
            {
              station: "MOKOLO",
              voters: 9125
            },
          ],
          "EP BONIS I / A": [
            {
              station: "BONIS",
              voters: 429
            },
          ],
          "EP GBAKOMBO / A": [
            {
              station: "GBAKOMBO",
              voters: 21
            },
          ],
          "EP KOUME GOFFI / A": [
            {
              station: "GOFFI",
              voters: 30
            },
          ],
          "EP MADAGASCAR / A": [
            {
              station: "MADAGASCAR",
              voters: 238
            },
          ],
          "EP MOKOLO II / A": [
            {
              station: "SEMBE",
              voters: 3138
            },
          ],
          "EP MOKOLO III / A": [
            {
              station: "III",
              voters: 810
            },
          ],
          "EP NGANKE / A": [
            {
              station: "NGANKE",
              voters: 160
            },
          ],
          "EP NKOLBIKON I / A": [
            {
              station: "NKOLBIKON",
              voters: 12817
            },
          ],
          "EP TIGAZA / A": [
            {
              station: "TIGAZA",
              voters: 3346
            },
          ],
          "ESPLANADE EXPRESS UNION / A": [
            {
              station: "GAIMONA",
              voters: 39
            },
          ],
          "FOYER BAMOUNGOUM / A": [
            {
              station: "NYANGANZA",
              voters: 1826
            },
          ],
          "FOYER COMMUNAUTAIRE KAIGAMA / A": [
            {
              station: "KAIGAMA",
              voters: 22
            },
          ],
          "FOYER COMMUNAUTAIRE KOUME / A": [
            {
              station: "KOUME",
              voters: 455
            },
          ],
          "RECETTE MUNICIPALE / A": [
            {
              station: "BODOMO",
              voters: 75
            },
          ],
        },
        "BERTOUA II": {
          "CAMP MILITAIRE / A": [
            {
              station: "GBOKLOTA",
              voters: 3013
            },
          ],
          "DEL. DEPARTEMENTALE DES SPORTS / A": [
            {
              station: "NDEMNAM",
              voters: 1696
            },
          ],
          "DELELEGATION REGIONALE DE L'ELEVAGE /  A": [
            {
              station: "ELEVAGE",
              voters: 1110
            },
          ],
          "ECOLE ANNEXE / A": [
            {
              station: "BRIQUETERIE",
              voters: 1452
            },
            {
              station: "ENIA",
              voters: 9983
            },
            {
              station: "HAOUSSA",
              voters: 1452
            },
          ],
          "ECOLE PRIM. ET MATERNELLE PRIVEE BTA II  /A": [
            {
              station: "BERTOUA",
              voters: 4105
            },
          ],
          "ECOLE ST AUGUSTIN / A": [
            {
              station: "EKOMBITIE",
              voters: 1608
            },
            {
              station: "KANO",
              voters: 3312
            },
          ],
          "EP NGAIKADA / A": [
            {
              station: "NGAIKADA",
              voters: 6490
            },
          ],
          "EP YADEME / A": [
            {
              station: "MONOU",
              voters: 4885
            },
            {
              station: "WOULAMAYO",
              voters: 2167
            },
            {
              station: "YADEME",
              voters: 2589
            },
          ],
          "LYCEE SCIENTIFIQUE / A": [
            {
              station: "TINDAMBA",
              voters: 3327
            },
          ],
        },
        "BETARE-OYA": {
          "CENTRE DE SANTE KONGOLO / A": [
            {
              station: "BOYE",
              voters: 165
            },
          ],
          "CENTRE SANTE BIBOKO / A": [
            {
              station: "BIBOKO",
              voters: 4
            },
          ],
          "CENTRE SANTE INTEGRE NDOKAYO / A": [
            {
              station: "NDOUKLA",
              voters: 242
            },
          ],
          "CENTRE SANTE OUDOULAI / A": [
            {
              station: "OUDOULAI",
              voters: 157
            },
            {
              station: "KPOK-KEA",
              voters: 157
            },
          ],
          "CES BOULI / A": [
            {
              station: "BOULI",
              voters: 62
            },
          ],
          "DISPENSAIRE CAMRAIL / A": [
            {
              station: "MBITOM",
              voters: 2131
            },
            {
              station: "DISPENSAIRE",
              voters: 550
            },
          ],
          "ECOLE BILINGUE BETARE-OYA / A": [
            {
              station: "KPAWARA",
              voters: 65
            },
          ],
          "ECOLE MAT MISSION CATHOLIQUE / A": [
            {
              station: "MISSION",
              voters: 1977
            },
            {
              station: "CATHOLIQUE",
              voters: 1977
            },
            {
              station: "ZOEGUENE",
              voters: 1977
            },
          ],
          "ECOLE MAT PUBLIQUE BETARE OYA / A": [
            {
              station: "MOSQUEE",
              voters: 474
            },
          ],
          "ECOLE MATERNELLE BETARE OYA / A": [
            {
              station: "QUARTIER",
              voters: 297
            },
            {
              station: "HAOUSSA",
              voters: 392
            },
          ],
          "ECOLE PARENTS CAMPEMENT CANAL / A": [
            {
              station: "CANAL",
              voters: 57
            },
          ],
          "ECOLE PARENTS CAMPEMENT DES JEUNES /  A": [
            {
              station: "DES",
              voters: 55
            },
            {
              station: "JEUNES",
              voters: 55
            },
          ],
          "ECOLE PARENTS HOTEL DE VILLE / A": [
            {
              station: "CAMPEMENT",
              voters: 215
            },
            {
              station: "HOTEL",
              voters: 103
            },
            {
              station: "VILLE",
              voters: 103
            },
          ],
          "ECOLE PARENTS KAWTAL / A": [
            {
              station: "KAWTAL",
              voters: 870
            },
          ],
          "ECOLE PARENTS NAMBOUI / A": [
            {
              station: "BORD",
              voters: 62
            },
            {
              station: "NAMBOUI",
              voters: 62
            },
          ],
          "ECOLE PROTESTANTE LAI / A": [
            {
              station: "LAI",
              voters: 428
            },
          ],
          "EGLISE PROTESTANTE CAMP ZAM / A": [
            {
              station: "CAMP",
              voters: 18
            },
            {
              station: "ZAM",
              voters: 18
            },
          ],
          "EGLISE PROTESTANTE GAINDARA / A": [
            {
              station: "GAINDARA",
              voters: 23
            },
          ],
          "EGLISE PROTESTANTE GBOYO / A": [
            {
              station: "GBOYO",
              voters: 29
            },
          ],
          "EGLISE PROTESTANTE GOUNTE / A": [
            {
              station: "GOUNTE",
              voters: 30
            },
          ],
          "EGLISE PROTESTANTE KONGOLO II / A": [
            {
              station: "KONGOLO",
              voters: 198
            },
          ],
          "EGLISE PROTESTANTE KPOK-GBONGA / A": [
            {
              station: "KPOK-GBONGA",
              voters: 36
            },
          ],
          "EGLISE PROTESTANTE MARARABA / A": [
            {
              station: "MARARABA",
              voters: 207
            },
          ],
          "EGLISE PROTESTANTE MBITOM / A": [
            {
              station: "VILLAGE",
              voters: 232
            },
          ],
          "EGLISE PROTESTANTE MONAY / A": [
            {
              station: "MONAY",
              voters: 74
            },
          ],
          "EGLISE PROTESTANTE NDOKAYO / A": [
            {
              station: "NDOKAYO",
              voters: 2686
            },
          ],
          "EGLISE PROTESTANTE TAMTANA / A": [
            {
              station: "DOLE",
              voters: 21
            },
            {
              station: "TAM",
              voters: 21
            },
            {
              station: "TANA",
              voters: 21
            },
          ],
          "EGLISE PROTESTANTE TAPARE SALAO / A": [
            {
              station: "SALAO",
              voters: 111
            },
          ],
          "EP ALAMADA / A": [
            {
              station: "ALAMADA",
              voters: 1
            },
          ],
          "EP BANGBEL / A": [
            {
              station: "BANGBEL",
              voters: 5
            },
          ],
          "EP BODOMO-ISSA / A": [
            {
              station: "BODOMO-ISSA",
              voters: 5
            },
          ],
          "EP BOFORO / A": [
            {
              station: "BOFORO",
              voters: 6
            },
            {
              station: "GBANBIRI",
              voters: 30
            },
          ],
          "EP BOGUERA / A": [
            {
              station: "BOGUERA",
              voters: 15
            },
          ],
          "EP BONGO / A": [
            {
              station: "BONGO",
              voters: 9
            },
          ],
          "EP BORONGO / A": [
            {
              station: "BORONGO",
              voters: 46
            },
          ],
          "EP DANG-PATOU / A": [
            {
              station: "DANG-PATOU",
              voters: 39
            },
          ],
          "EP DARA-SALAM / A": [
            {
              station: "DARA-SALAM",
              voters: 57
            },
          ],
          "EP DOYO / A": [
            {
              station: "DOYO",
              voters: 22
            },
          ],
          "EP GBATA'A / A": [
            {
              station: "GBATA'A",
              voters: 51
            },
          ],
          "EP GROUPE II GBEBANA / A": [
            {
              station: "GBEBANA",
              voters: 55
            },
          ],
          "EP LIGUIM / A": [
            {
              station: "LIGUIM",
              voters: 75
            },
          ],
          "EP MABELE I / A": [
            {
              station: "MABELE",
              voters: 215
            },
          ],
          "EP MBALE / A": [
            {
              station: "MBALE",
              voters: 110
            },
          ],
          "EP MBITOM / A": [
            {
              station: "CENTRE",
              voters: 2040
            },
          ],
          "EP MBORGUENE / A": [
            {
              station: "MBORGUENE",
              voters: 211
            },
          ],
          "EP NDANGA GANDIMA / A": [
            {
              station: "NDANGA",
              voters: 196
            },
            {
              station: "GANDIMA",
              voters: 196
            },
          ],
          "EP PONT-LOM / A": [
            {
              station: "PONT-LOM",
              voters: 210
            },
          ],
          "EP SABOUANG / A": [
            {
              station: "SABOUANG",
              voters: 95
            },
          ],
          "EP SARANG / A": [
            {
              station: "SARANG",
              voters: 129
            },
          ],
          "EP TAPARE / A": [
            {
              station: "TAPARE",
              voters: 540
            },
            {
              station: "DANG-HAOUSSA",
              voters: 429
            },
          ],
          "EP TETE D'ELEPHANT / A": [
            {
              station: "TETE",
              voters: 646
            },
            {
              station: "D'ELEPHANT",
              voters: 646
            },
          ],
          "EP TOURAKE / A": [
            {
              station: "TOURAKE",
              voters: 462
            },
          ],
          "ESPL CHEF MOINAM / A": [
            {
              station: "LOM-PANGAR",
              voters: 55
            },
          ],
          "HANGAR PUBLIC DANG HAOUSSA / A": [
            {
              station: "DANG",
              voters: 95
            },
          ],
          "HANGAR PUBLIC GBEMBOUSSA / A": [
            {
              station: "GBEMBOUSSA",
              voters: 58
            },
          ],
          "HANGAR PUBLIC KOMBO KORO / A": [
            {
              station: "KOMBO",
              voters: 96
            },
            {
              station: "KORO",
              voters: 96
            },
          ],
          "HANGAR PUBLIC LONDI / A": [
            {
              station: "LONDI",
              voters: 62
            },
          ],
          "HANGAR PUBLIC MADEPO / A": [
            {
              station: "MADEPO",
              voters: 147
            },
          ],
          "HANGAR PUBLIC VANNE-BIBOKO / A": [
            {
              station: "VANNE-BIBOKO",
              voters: 110
            },
          ],
          "HANGAR PUBLIC ZER-KORO / A": [
            {
              station: "ZER-KORO",
              voters: 74
            },
          ],
          "PLACE DES FETES / A": [
            {
              station: "MOINAM",
              voters: 812
            },
            {
              station: "URBAIN",
              voters: 691
            },
          ],
          "SALLE COMMUNAUTAIRE MALI / A": [
            {
              station: "MALI",
              voters: 270
            },
          ],
          "TRIBUNAL LYCEE TECHNIQUE / A": [
            {
              station: "LYCEE",
              voters: 249
            },
            {
              station: "TECHNIQUE",
              voters: 249
            },
          ],
          "TRIBUNAL NGADI / A": [
            {
              station: "NGADI",
              voters: 748
            },
          ],
        },
        "DIANG": {
          "ANCIENNE BARRIERE MAIRIE MBOMO / A": [
            {
              station: "MBOMO",
              voters: 756
            },
          ],
          "CETI BINGOMO / A": [
            {
              station: "BINGOMO",
              voters: 245
            },
          ],
          "CHAPELLE CATHOLIQUE NIKA / A": [
            {
              station: "NIKA",
              voters: 89
            },
          ],
          "EGLISE ADVENTISTE BIZEH / A": [
            {
              station: "BIMPEH",
              voters: 238
            },
            {
              station: "BIZEH",
              voters: 238
            },
            {
              station: "MBANG",
              voters: 335
            },
          ],
          "EM MOUNDI / A": [
            {
              station: "MOUNDI",
              voters: 357
            },
          ],
          "EP ABOUMADJALI / A": [
            {
              station: "ABOUMADJALI",
              voters: 106
            },
          ],
          "EP BIVELKA / A": [
            {
              station: "BIVELKA",
              voters: 287
            },
            {
              station: "NDEMBA",
              voters: 667
            },
          ],
          "EP BOUAM / A": [
            {
              station: "BOUAM",
              voters: 1104
            },
          ],
          "EP DONGO / A": [
            {
              station: "DONGO",
              voters: 402
            },
          ],
          "EP GOUEKONG I / A": [
            {
              station: "GOUEKONG",
              voters: 558
            },
          ],
          "EP KANDA / A": [
            {
              station: "KANDA",
              voters: 486
            },
          ],
          "EP MBELE-PANGA / A": [
            {
              station: "MBELE-PANGA",
              voters: 102
            },
          ],
          "EP MBETH II / A": [
            {
              station: "MBETH",
              voters: 422
            },
          ],
          "EP MINKOLONG / A": [
            {
              station: "MINKOLONG",
              voters: 116
            },
          ],
          "EP NGUINDA / A": [
            {
              station: "NGUINDA",
              voters: 60
            },
          ],
          "EP ZOCKLINGANG / A": [
            {
              station: "ZOCKLINGANG",
              voters: 167
            },
          ],
          "FOYER GOUEKONG II / A": [
            {
              station: "NDOUMBI",
              voters: 1410
            },
            {
              station: "III",
              voters: 412
            },
          ],
          "HANGAR ANCIEN CHEF MOTOMBO / A": [
            {
              station: "MOTOMBO",
              voters: 245
            },
          ],
          "HANGAR PUBLIC YANDA I / A": [
            {
              station: "YANDA",
              voters: 357
            },
          ],
          "HANGAR PULIC KOMBE / A": [
            {
              station: "KOMBE",
              voters: 42
            },
          ],
          "LYCEE TECHNIQUE MOKOLO / A": [
            {
              station: "MOKOLO",
              voters: 102
            },
          ],
          "MARCHE ANDOM / A": [
            {
              station: "ANDOM",
              voters: 638
            },
          ],
          "MISSION CATHOLIQUE DIMAKO / A": [
            {
              station: "DIMAKO",
              voters: 127
            },
            {
              station: "MASSOK",
              voters: 127
            },
          ],
        },
        "GAROUA-BOULAI": {
          "BATIMENT CAMP MILITAIRE / A": [
            {
              station: "MOMBAL",
              voters: 706
            },
          ],
          "CENTRE SANTE CATHOLIQUE / A": [
            {
              station: "MBASSI",
              voters: 135
            },
          ],
          "E PRIV PROTESTANTE DE NANDOUNGUE / A": [
            {
              station: "NANDOUNGUE",
              voters: 1094
            },
          ],
          "ECOLE DES PARENTS NDANGA-GBAKOBO / A": [
            {
              station: "ZOUKOUNDE",
              voters: 634
            },
          ],
          "ECOLE FRANCO ISLAMIQUE / A": [
            {
              station: "BINDIKI",
              voters: 1911
            },
          ],
          "ECOLE FRANCO-ARABE / A": [
            {
              station: "FOULBERE",
              voters: 1113
            },
          ],
          "ECOLE PARENTS NDANGA GBAKOBO / A": [
            {
              station: "NDANGA",
              voters: 993
            },
            {
              station: "GBAKOBO",
              voters: 993
            },
          ],
          "ECOLE PUBLIQUE DE GANDONG / A": [
            {
              station: "GANDONG",
              voters: 308
            },
          ],
          "ECOLE PUBLIQUE DE LA FRONTIERE / A": [
            {
              station: "FRONTIERE",
              voters: 1354
            },
          ],
          "ECOLE PUBLIQUE DE NAGONDA / A": [
            {
              station: "MBOUSSA",
              voters: 735
            },
            {
              station: "NAGONDA",
              voters: 756
            },
            {
              station: "NGANKO",
              voters: 756
            },
          ],
          "ECOLE PUBLIQUE DE SABAL VILLE / A": [
            {
              station: "QUARTIER",
              voters: 1298
            },
          ],
          "EGLISE PROTESTANTE LUTH KOMBOUL / A": [
            {
              station: "KOMBOUL",
              voters: 298
            },
          ],
          "EGLISE PROTESTANTE LUTH NANAMOYA / A": [
            {
              station: "NANAMOYA",
              voters: 73
            },
          ],
          "EGLISE PROTESTANTE LUTH ZAMBOI / A": [
            {
              station: "ZAMBOI",
              voters: 309
            },
          ],
          "EGLISE PROTESTANTE LUTHE TAPARE / A": [
            {
              station: "TAPARE",
              voters: 213
            },
          ],
          "EP ABO BOUTILLA / A": [
            {
              station: "ABO",
              voters: 1
            },
            {
              station: "BOUTILLA",
              voters: 1
            },
          ],
          "EP BADAN / A": [
            {
              station: "BADAN",
              voters: 2
            },
          ],
          "EP BINDIBA / A": [
            {
              station: "BINDIBA",
              voters: 928
            },
          ],
          "EP DABOLE / A": [
            {
              station: "DABOLE",
              voters: 191
            },
          ],
          "EP GADO BADZERE / A": [
            {
              station: "GADO",
              voters: 1443
            },
            {
              station: "BADZERE",
              voters: 1443
            },
          ],
          "EP GAROUA BOULAI / A": [
            {
              station: "MARCHE",
              voters: 1773
            },
            {
              station: "CENTRAL",
              voters: 1773
            },
          ],
          "EP GBABIO / A": [
            {
              station: "GBABIO",
              voters: 222
            },
          ],
          "EP ILLA / A": [
            {
              station: "ILLA",
              voters: 299
            },
          ],
          "EP MBONGA / A": [
            {
              station: "MBONGA",
              voters: 300
            },
          ],
          "EP MBORGUENE / A": [
            {
              station: "MBORGUENE",
              voters: 486
            },
          ],
          "EP SABAL / A": [
            {
              station: "SABAL",
              voters: 2869
            },
            {
              station: "VILLAGE",
              voters: 1571
            },
          ],
          "EP SABONGARI / A": [
            {
              station: "SABONGARI",
              voters: 1848
            },
          ],
          "EP YOKO-SIRE / A": [
            {
              station: "YOKO-SIRE",
              voters: 304
            },
          ],
          "HANGAR PUBLIC NAMBORI / A": [
            {
              station: "NAMBORI",
              voters: 161
            },
          ],
          "LYCEE GAROUA-BOULAI / A": [
            {
              station: "BAYA",
              voters: 88
            },
            {
              station: "GOZA",
              voters: 88
            },
          ],
          "SAR-SM / A": [
            {
              station: "BETHANIE",
              voters: 324
            },
            {
              station: "MAIRE",
              voters: 324
            },
          ],
          "SONEL / A": [
            {
              station: "SHELL",
              voters: 1062
            },
          ],
          "TELECENTRE COMM DE GAROUA-BOULAI / A": [
            {
              station: "DOFORO",
              voters: 919
            },
          ],
        },
        "MANDJOU": {
          "ECOLE AGRICULTURE BINDIA / A": [
            {
              station: "BINDIA",
              voters: 51
            },
          ],
          "ECOLE CATHOLIQUE TOUNGOU AEROPORT /  A": [
            {
              station: "TOUNGOU",
              voters: 757
            },
            {
              station: "AEROPORT",
              voters: 757
            },
          ],
          "ECOLE DES PARENTS / A": [
            {
              station: "KANDARA",
              voters: 22
            },
          ],
          "EP ADINKOL / A": [
            {
              station: "ADINKOL",
              voters: 3
            },
          ],
          "EP BAZZAMA / A": [
            {
              station: "BAZZAMA",
              voters: 12
            },
          ],
          "EP BAZZAMA VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 5
            },
          ],
          "EP BOULEMBE / A": [
            {
              station: "BOULEMBE",
              voters: 39
            },
          ],
          "EP DAIGUENE / A": [
            {
              station: "DAIGUENE",
              voters: 31
            },
          ],
          "EP GAMBOULA / A": [
            {
              station: "GAMBOULA",
              voters: 35
            },
          ],
          "EP GOUNTE / A": [
            {
              station: "GOUNTE",
              voters: 19
            },
          ],
          "EP GRAND MBOULAYE / A": [
            {
              station: "GRAND",
              voters: 41
            },
            {
              station: "MBOULAYE",
              voters: 389
            },
          ],
          "EP KOUBA / A": [
            {
              station: "KOUBA",
              voters: 47
            },
          ],
          "EP LETTA / A": [
            {
              station: "LETTA",
              voters: 81
            },
          ],
          "EP MANDJOU GROUPE I ET II / A": [
            {
              station: "MANDJOU",
              voters: 5307
            },
          ],
          "EP MOINAM / A": [
            {
              station: "MOINAM",
              voters: 282
            },
          ],
          "EP NDANGA NDENGUE / A": [
            {
              station: "NDANGA",
              voters: 228
            },
            {
              station: "NDENGUE",
              voters: 228
            },
          ],
          "EP NDEMBO(BATOURI) / A": [
            {
              station: "NDEMBO(BATOURI)",
              voters: 114
            },
          ],
          "EP NDEMNAM / A": [
            {
              station: "NDEMNAM",
              voters: 174
            },
          ],
          "EP NDONG MBOME / A": [
            {
              station: "NDONG",
              voters: 307
            },
            {
              station: "MBOME",
              voters: 307
            },
          ],
          "EP NDOUMBE / A": [
            {
              station: "NDOUMBE",
              voters: 151
            },
          ],
          "EP SAMBI / A": [
            {
              station: "SAMBI",
              voters: 86
            },
          ],
          "EP WALDEGORI / A": [
            {
              station: "WALDEGORI",
              voters: 75
            },
          ],
          "HANGAR PUBLIC / A": [
            {
              station: "KOUBOU",
              voters: 25
            },
            {
              station: "NDEMBO(",
              voters: 25
            },
            {
              station: "GAROUA",
              voters: 25
            },
            {
              station: "BOULAI)",
              voters: 25
            },
          ],
          "HANGAR PUBLIC MBOUTOUTOU / A": [
            {
              station: "MBOUTOUTOU",
              voters: 196
            },
          ],
          "HANGAR PUBLIC NDANGA NDENGUE  BROUSSE / A": [
            {
              station: "BROUSSE",
              voters: 62
            },
          ],
        },
        "NGOURA": {
          "CARREFOUR SAMBA / A": [
            {
              station: "CARREFOUR",
              voters: 38
            },
          ],
          "CASE COMMUNAUTAIRE MEKASSO / A": [
            {
              station: "MEKASSO",
              voters: 28
            },
          ],
          "CASE COMMUNAUTAIRE NGAMBADI / A": [
            {
              station: "NGAMBADI",
              voters: 29
            },
          ],
          "CASE COMMUNAUTAIRE YADOUE / A": [
            {
              station: "TIBALA",
              voters: 53
            },
            {
              station: "YADOUE",
              voters: 53
            },
          ],
          "CENTRE PERISCOLAIRE MBELE MBEKE / A": [
            {
              station: "MBELE-MBEKE",
              voters: 25
            },
          ],
          "CENTRE SANTE GARGA SARALI / A": [
            {
              station: "GARGA",
              voters: 57
            },
            {
              station: "SARALI",
              voters: 57
            },
          ],
          "CENTRE SANTE TONGO GANDIMA / A": [
            {
              station: "TONGO",
              voters: 1831
            },
            {
              station: "GANDIMA",
              voters: 1831
            },
          ],
          "CES COLOMINE / A": [
            {
              station: "COLOMINE",
              voters: 84
            },
          ],
          "CES NGOURA / A": [
            {
              station: "NGOURA",
              voters: 93
            },
          ],
          "CES YANGAMO / A": [
            {
              station: "YANGAMO",
              voters: 1744
            },
          ],
          "EP BAMBOUTI / A": [
            {
              station: "BAMBOUTI",
              voters: 3
            },
          ],
          "EP BOHANTO / A": [
            {
              station: "BOHANTO",
              voters: 7
            },
          ],
          "EP BONGONE / A": [
            {
              station: "BONGONE",
              voters: 5
            },
          ],
          "EP DEOULE / A": [
            {
              station: "DEOULE",
              voters: 15
            },
          ],
          "EP DOUMBA BELLO / A": [
            {
              station: "DOUMBA",
              voters: 16
            },
            {
              station: "BELLO",
              voters: 52
            },
          ],
          "EP GAROUA YAKA / A": [
            {
              station: "GAROUA",
              voters: 21
            },
            {
              station: "YAKA",
              voters: 21
            },
          ],
          "EP GOUNTE / A": [
            {
              station: "GOUNTE",
              voters: 22
            },
          ],
          "EP KADEY MALEWA / A": [
            {
              station: "KADEY",
              voters: 47
            },
            {
              station: "MALEWA",
              voters: 47
            },
          ],
          "EP MBOMBA / A": [
            {
              station: "MBOMBA",
              voters: 26
            },
          ],
          "EP MBONDA / A": [
            {
              station: "MBONDA",
              voters: 27
            },
          ],
          "EP OUANDEN / A": [
            {
              station: "OUANDEN",
              voters: 67
            },
          ],
          "EP OUDOU / A": [
            {
              station: "OUDOU",
              voters: 35
            },
          ],
          "EP PETIT BELLO / A": [
            {
              station: "PETIT",
              voters: 185
            },
          ],
          "EP PETIT NGAOUNDERE / A": [
            {
              station: "NGAOUNDERE",
              voters: 149
            },
          ],
          "EP PORPOTO / A": [
            {
              station: "PORPOTO",
              voters: 46
            },
          ],
          "EP RIGUE / A": [
            {
              station: "RIGUE",
              voters: 552
            },
          ],
          "EP SAMBA / A": [
            {
              station: "SAMBA",
              voters: 923
            },
          ],
          "EP SODEPA RANCH / A": [
            {
              station: "SODEPA",
              voters: 136
            },
            {
              station: "RANCH",
              voters: 136
            },
          ],
          "EP TIKONDI / A": [
            {
              station: "TIKONDI",
              voters: 311
            },
          ],
          "EP WOUMBOU / A": [
            {
              station: "WOUMBOU",
              voters: 933
            },
          ],
          "GANGANGA HANGAR MARCHE / A": [
            {
              station: "GANGANGA",
              voters: 17
            },
          ],
          "HANGAR MARCHE BORDAI / A": [
            {
              station: "BORDAI",
              voters: 6
            },
            {
              station: "GABON",
              voters: 6
            },
          ],
          "HANGAR PUBLIC NGOE / A": [
            {
              station: "NGOE",
              voters: 456
            },
          ],
        },
      },
      "BOUMBA-ET-NGOKO": {
        "GARI-GOMBO": {
          "CENTRE ALPHABETISATION MENTSOGA / A": [
            {
              station: "ALALAM",
              voters: 51
            },
            {
              station: "LIMOE",
              voters: 51
            },
            {
              station: "MENTSOGA",
              voters: 51
            },
            {
              station: "MOBIDEBEBE",
              voters: 51
            },
          ],
          "CES TOMBI / A": [
            {
              station: "GOUOSSOUOPENDI",
              voters: 245
            },
            {
              station: "TOMBI",
              voters: 245
            },
          ],
          "ECOLE MATERNELLE GARI-GOMBO / A": [
            {
              station: "QUARTIER",
              voters: 1275
            },
            {
              station: "BAOBAB",
              voters: 440
            },
          ],
          "EP A-EP B / A": [
            {
              station: "NDENG",
              voters: 631
            },
            {
              station: "CHANTIER",
              voters: 631
            },
          ],
          "EP GARI-GOMBO GROUPE I / A": [
            {
              station: "GENERAL",
              voters: 496
            },
          ],
          "EP GARI-GOMBO GROUPE II / A": [
            {
              station: "PLATEAU",
              voters: 339
            },
          ],
          "EP GRIBI / A": [
            {
              station: "GRIBI",
              voters: 271
            },
          ],
          "EP KELEMBA / A": [
            {
              station: "KELEMBA",
              voters: 133
            },
            {
              station: "MBANG",
              voters: 133
            },
          ],
          "EP KONGO / A": [
            {
              station: "KONGO",
              voters: 195
            },
            {
              station: "MESSADJISSO",
              voters: 195
            },
          ],
          "EP KPOKILITA / A": [
            {
              station: "BELEKOUBOU",
              voters: 188
            },
            {
              station: "GBANDIA",
              voters: 188
            },
            {
              station: "KPOKILITA",
              voters: 188
            },
            {
              station: "NGAMBELE",
              voters: 188
            },
          ],
          "EP LAMBO / A": [
            {
              station: "LAMBO",
              voters: 136
            },
          ],
          "EP LOM / A": [
            {
              station: "LOM",
              voters: 97
            },
          ],
          "EP MANG / A": [
            {
              station: "MANG",
              voters: 128
            },
          ],
          "EP MBIALI / A": [
            {
              station: "MBIALI",
              voters: 265
            },
          ],
          "EP METEGOMATSINOMORI / A": [
            {
              station: "METEGOMATSINOMORI",
              voters: 61
            },
          ],
          "EP MOMZOPIA / A": [
            {
              station: "MOMZOPIA",
              voters: 231
            },
          ],
          "EP NGOKO / A": [
            {
              station: "NGOKO",
              voters: 41
            },
          ],
          "EP NGOUNDI I / A": [
            {
              station: "TIGAZA",
              voters: 327
            },
          ],
          "EP NGOUNDI II / A": [
            {
              station: "GOUBERA",
              voters: 210
            },
            {
              station: "NGOUNDI",
              voters: 537
            },
          ],
          "EP PATERRE / A": [
            {
              station: "DISSO",
              voters: 142
            },
            {
              station: "PATERRE",
              voters: 142
            },
          ],
          "HANGAR COMM MAMPELLE / A": [
            {
              station: "MAMPELLE",
              voters: 137
            },
          ],
          "HANGAR COMM MBOUTOUNDOU I / A": [
            {
              station: "DJOKOUDOUMO",
              voters: 147
            },
            {
              station: "GBATANGA",
              voters: 147
            },
            {
              station: "MBOUTOUNDOU",
              voters: 147
            },
            {
              station: "NGOPIA",
              voters: 147
            },
            {
              station: "OUESSO",
              voters: 147
            },
            {
              station: "SEMBE",
              voters: 147
            },
          ],
          "HANGAR COMM MESSE / A": [
            {
              station: "MESSE",
              voters: 95
            },
          ],
          "HANGAR COMM MOPOUO / A": [
            {
              station: "MOPOUO",
              voters: 119
            },
            {
              station: "NOUMBANKOE",
              voters: 119
            },
          ],
          "HANGAR COMM NDENG-VILLAGE / A": [
            {
              station: "NDENG-VILLAGE",
              voters: 98
            },
          ],
          "HANGAR COMM PAYA I / A": [
            {
              station: "BINDO",
              voters: 261
            },
            {
              station: "PAYA",
              voters: 775
            },
          ],
          "HANGAR COMMUNAUTAIRE NGARETTA / A": [
            {
              station: "DIFFOLO",
              voters: 78
            },
            {
              station: "NGARETTA",
              voters: 78
            },
          ],
          "HANGAR COMMUNAUTAIRE NGARISSO / A": [
            {
              station: "NGARISSO",
              voters: 81
            },
          ],
          "HANGAR COMMUNAUTAIRE SANGHA / A": [
            {
              station: "SANGHA",
              voters: 101
            },
          ],
          "LYCEE GARI-GOMBO / A": [
            {
              station: "GARI-GOMBO",
              voters: 335
            },
          ],
        },
        "MOLOUNDOU": {
          "ALLIANCE VOYAGE / A": [
            {
              station: "CENTRE",
              voters: 1237
            },
            {
              station: "COMMERCIAL",
              voters: 680
            },
          ],
          "ECOLE BILINGUE DE MOLOUNDOU / A": [
            {
              station: "NOLA",
              voters: 741
            },
            {
              station: "PEZAM",
              voters: 300
            },
          ],
          "EFR MOLOUNDOU / A": [
            {
              station: "PRISON",
              voters: 441
            },
          ],
          "EP ADJALA / A": [
            {
              station: "ADJALA",
              voters: 101
            },
          ],
          "EP BANANA / A": [
            {
              station: "BANANA",
              voters: 328
            },
          ],
          "EP DIOULA / A": [
            {
              station: "DIOULA",
              voters: 232
            },
          ],
          "EP EKELEMBA / A": [
            {
              station: "BA'AD",
              voters: 92
            },
            {
              station: "EKELEMBA",
              voters: 92
            },
          ],
          "EP GROUPE I / A": [
            {
              station: "ADMINISTRATIF",
              voters: 749
            },
          ],
          "EP KIKA / A": [
            {
              station: "KIKA",
              voters: 1088
            },
          ],
          "EP LEGOUE / A": [
            {
              station: "LEGOUE",
              voters: 69
            },
          ],
          "EP MAKOKA I / A": [
            {
              station: "MAKOKA",
              voters: 656
            },
          ],
          "EP MALAPA / A": [
            {
              station: "MALAPA",
              voters: 64
            },
          ],
          "EP MAMBELE / A": [
            {
              station: "MAMBELE",
              voters: 274
            },
          ],
          "EP MBANDJANI / A": [
            {
              station: "MBANDJANI",
              voters: 81
            },
          ],
          "EP MBATEKA CENTRE / A": [
            {
              station: "MBATEKA",
              voters: 582
            },
          ],
          "EP MBATEKA NDJONG / A": [
            {
              station: "NDJONG",
              voters: 236
            },
          ],
          "EP MINDOUROU / A": [
            {
              station: "LEKE",
              voters: 161
            },
            {
              station: "MINDOUROU",
              voters: 161
            },
          ],
          "EP NDONGO / A": [
            {
              station: "NDONGO",
              voters: 81
            },
          ],
          "EP NGUILILI I / A": [
            {
              station: "NGUILILI",
              voters: 720
            },
          ],
          "EP TEMBE-RIVIERE / A": [
            {
              station: "TEMBE",
              voters: 68
            },
            {
              station: "RIVIERE",
              voters: 68
            },
          ],
          "EP YENGA DOUCEMENT / A": [
            {
              station: "YENGA",
              voters: 530
            },
            {
              station: "DOUCEMENT",
              voters: 160
            },
          ],
          "EP YENGA TENGUE / A": [
            {
              station: "TENGUE",
              voters: 159
            },
          ],
          "FOYER MBANGOYE I / A": [
            {
              station: "MBANGOYE",
              voters: 715
            },
          ],
          "FOYER MIGOMBE / A": [
            {
              station: "MIGOMBE",
              voters: 79
            },
          ],
          "HANGAR BAC / A": [
            {
              station: "MOLOUNDOU-RIVIERE",
              voters: 260
            },
          ],
          "HANGAR CHEFFERIE / A": [
            {
              station: "MONGOKELE",
              voters: 21
            },
          ],
          "MARCHE BAKA / A": [
            {
              station: "BAKA",
              voters: 114
            },
          ],
          "MARCHE KIKA / A": [
            {
              station: "BENZA",
              voters: 789
            },
            {
              station: "KANIVO",
              voters: 789
            },
          ],
          "MARCHE MOLOUNDOU / A": [
            {
              station: "NEW-TOWN",
              voters: 394
            },
          ],
          "MISSION CATHOLIQUE / A": [
            {
              station: "MOPOULO",
              voters: 313
            },
          ],
          "POSTE EAU ET FORET / A": [
            {
              station: "MAMBANDA",
              voters: 215
            },
          ],
          "POSTE MARINE MARCHANDE / A": [
            {
              station: "MOKOUNOUNOU",
              voters: 154
            },
          ],
        },
        "SALAPOUMBE": {
          "CEB DISSASSUE / A": [
            {
              station: "DISSASSUE",
              voters: 107
            },
          ],
          "CEB LIBONGO / A": [
            {
              station: "LIBONGO",
              voters: 1774
            },
            {
              station: "PK1",
              voters: 148
            },
          ],
          "CEB LOKOMO / A": [
            {
              station: "LOKOMO",
              voters: 808
            },
          ],
          "CEB TEMBE PISTE / A": [
            {
              station: "TEMBE-PISTE",
              voters: 311
            },
          ],
          "EP BELA / A": [
            {
              station: "BELA",
              voters: 214
            },
          ],
          "EP KOUMELA / A": [
            {
              station: "KOUMELA",
              voters: 272
            },
          ],
          "EP LIBONGO / A": [
            {
              station: "ECOLE",
              voters: 512
            },
          ],
          "EP MBOLI / A": [
            {
              station: "MBOLI",
              voters: 79
            },
          ],
          "EP MIKEL / A": [
            {
              station: "MIKEL",
              voters: 516
            },
          ],
          "EP MOMBOUE / A": [
            {
              station: "MOMBOUE",
              voters: 262
            },
          ],
          "EP NGOLLA 115 / A": [
            {
              station: "NGOLLA",
              voters: 508
            },
            {
              station: "115",
              voters: 79
            },
          ],
          "EP NGOLLA 120 / A": [
            {
              station: "120",
              voters: 292
            },
          ],
          "EP NGOLLA 125 / A": [
            {
              station: "125",
              voters: 137
            },
          ],
          "EP OTELE MAWA / A": [
            {
              station: "OTELE",
              voters: 197
            },
            {
              station: "MAWA",
              voters: 197
            },
          ],
          "EP SALAPOUMBE / A": [
            {
              station: "SALAPOUMBE",
              voters: 833
            },
          ],
          "EP SALAPOUMBE LA VIE / A": [
            {
              station: "VIE",
              voters: 159
            },
          ],
          "MARCHE LIBONGO / A": [
            {
              station: "MARCHE",
              voters: 507
            },
          ],
          "TRIBUNE STADE / A": [
            {
              station: "STADE",
              voters: 424
            },
          ],
          "USINE / A": [
            {
              station: "USINE",
              voters: 183
            },
          ],
        },
        "YOKADOUMA": {
          "CES MBOY / A": [
            {
              station: "LONG",
              voters: 290
            },
            {
              station: "MBOY",
              voters: 682
            },
            {
              station: "MOBALO",
              voters: 482
            },
          ],
          "CSI ZOKBOULANEBONE / A": [
            {
              station: "ZOKBOULANEBONE",
              voters: 130
            },
          ],
          "DEL DEPTALE COMMUNICATION / A": [
            {
              station: "MOADANG",
              voters: 715
            },
          ],
          "DEL DEPTALE ENSEIG SECOND / A": [
            {
              station: "NEW-TOWN",
              voters: 3875
            },
          ],
          "ECOLE CATHOLIQUE ST ALOYS / A": [
            {
              station: "BIENEMAMA",
              voters: 561
            },
            {
              station: "BONDJE",
              voters: 385
            },
            {
              station: "QUARTIER",
              voters: 14340
            },
            {
              station: "MISSION",
              voters: 385
            },
          ],
          "ECOLE FRANCO-ARABE / A": [
            {
              station: "DJODJOL",
              voters: 696
            },
          ],
          "ECOLE MATERNELLE BORDEAUX / A": [
            {
              station: "BORDEAUX",
              voters: 618
            },
          ],
          "EP BANDEKOK / A": [
            {
              station: "BANDEKOK",
              voters: 206
            },
          ],
          "EP BANGUE-ADJALA / A": [
            {
              station: "BANGUE",
              voters: 335
            },
          ],
          "EP BIENEMAMA NOUVEAU / A": [
            {
              station: "NOUVEAU",
              voters: 1314
            },
          ],
          "EP BIWALA I / A": [
            {
              station: "BIWALA",
              voters: 681
            },
          ],
          "EP BOMPELLO / A": [
            {
              station: "BOMPELLO",
              voters: 247
            },
          ],
          "EP CONGO-CENTRE / A": [
            {
              station: "CONGO-CENTRE",
              voters: 98
            },
          ],
          "EP DJALOBEKOE / A": [
            {
              station: "DJALOBEKOE",
              voters: 941
            },
          ],
          "EP DJEMBA / A": [
            {
              station: "DJEMBA",
              voters: 279
            },
          ],
          "EP GRIBE / A": [
            {
              station: "GRIBE",
              voters: 564
            },
          ],
          "EP GROUPE III / A": [
            {
              station: "PARADIS",
              voters: 1055
            },
            {
              station: "RELAIS",
              voters: 1769
            },
          ],
          "EP LAMEDOUM / A": [
            {
              station: "LAMEDOUM",
              voters: 89
            },
          ],
          "EP LANDJOUE I / A": [
            {
              station: "LANDJOUE",
              voters: 585
            },
          ],
          "EP MADJOUE / A": [
            {
              station: "MADJOUE",
              voters: 309
            },
          ],
          "EP MALABANGO / A": [
            {
              station: "MALABANGO",
              voters: 286
            },
          ],
          "EP MANG / A": [
            {
              station: "MANG",
              voters: 318
            },
          ],
          "EP MASSEA / A": [
            {
              station: "LEILA",
              voters: 393
            },
            {
              station: "MASSEA",
              voters: 441
            },
          ],
          "EP MASSIANG / A": [
            {
              station: "MASSIANG",
              voters: 326
            },
          ],
          "EP MBOL II / A": [
            {
              station: "MBOL",
              voters: 812
            },
          ],
          "EP MBOL XII / A": [
            {
              station: "XII",
              voters: 628
            },
          ],
          "EP MEMPOE CFC / A": [
            {
              station: "MEMPOE",
              voters: 517
            },
            {
              station: "CFC",
              voters: 517
            },
          ],
          "EP MENDOUNGUE / A": [
            {
              station: "MENDOUNGUE",
              voters: 235
            },
          ],
          "EP MEZIONG / A": [
            {
              station: "MEZIONG",
              voters: 245
            },
          ],
          "EP MIMBO-MIMBO / A": [
            {
              station: "MIMBO-MIMBO",
              voters: 403
            },
          ],
          "EP MINTOM / A": [
            {
              station: "MINTOM",
              voters: 309
            },
          ],
          "EP MOAMPACK / A": [
            {
              station: "MOAMPACK",
              voters: 720
            },
          ],
          "EP MODOUMO / A": [
            {
              station: "MODOUMO",
              voters: 253
            },
          ],
          "EP MOMESSENG / A": [
            {
              station: "MOMESSENG",
              voters: 52
            },
          ],
          "EP MOMJEPOM / A": [
            {
              station: "MOMJEPOM",
              voters: 309
            },
          ],
          "EP MOPOUE / A": [
            {
              station: "MOPOUE",
              voters: 163
            },
          ],
          "EP MOPOUO / A": [
            {
              station: "MOPOUO",
              voters: 187
            },
            {
              station: "ZOK",
              voters: 467
            },
            {
              station: "BOULANEBONE",
              voters: 467
            },
          ],
          "EP MPARO / A": [
            {
              station: "MPARO",
              voters: 354
            },
          ],
          "EP NAMPELLA / A": [
            {
              station: "NAMPELLA",
              voters: 360
            },
          ],
          "EP NGOLLA 20 / A": [
            {
              station: "NGOLLA",
              voters: 602
            },
          ],
          "EP NKAMEKO'O / A": [
            {
              station: "NKAMEKO'O",
              voters: 150
            },
          ],
          "EP NTIOU / A": [
            {
              station: "NTIOU",
              voters: 426
            },
          ],
          "EP NYABONDA / A": [
            {
              station: "NYABONDA",
              voters: 181
            },
          ],
          "EP PARNY / A": [
            {
              station: "PARNY",
              voters: 266
            },
          ],
          "EP QUARTIER COMPAGNIE / A": [
            {
              station: "COMPAGNIE",
              voters: 1928
            },
          ],
          "EP STBK SENGBOT / A": [
            {
              station: "SENGBOT",
              voters: 258
            },
          ],
          "EP TEKELE / A": [
            {
              station: "TEKELE",
              voters: 93
            },
          ],
          "EP ZOKADIBA / A": [
            {
              station: "ZOKADIBA",
              voters: 156
            },
          ],
          "FOYER COM. SIM-MALEA / A": [
            {
              station: "MALEAN",
              voters: 64
            },
          ],
          "HANGAR COMM BIWALA BIDJOUKI / A": [
            {
              station: "BIDJOUKI",
              voters: 167
            },
          ],
          "HANGAR COMM BIWALA KAMPALA / A": [
            {
              station: "KAMPALA",
              voters: 102
            },
          ],
          "HANGAR COMM BONDA OUESSO / A": [
            {
              station: "BONDA",
              voters: 82
            },
            {
              station: "OUESSO",
              voters: 567
            },
          ],
          "HANGAR COMM GOUENEPOUM NOUVEAU / A": [
            {
              station: "GOUENEPOUM",
              voters: 161
            },
          ],
          "HANGAR COMM MALEA ANCIEN / A": [
            {
              station: "MALEA",
              voters: 257
            },
            {
              station: "ANCIEN",
              voters: 464
            },
            {
              station: "ZOULABOT",
              voters: 411
            },
          ],
          "HANGAR COMM MASSIEMBO / A": [
            {
              station: "MASSIEMBO",
              voters: 162
            },
          ],
          "HANGAR COMM OTOUMKOUAND / A": [
            {
              station: "OTOUMKOUAND",
              voters: 185
            },
          ],
          "HANGAR COMM QUARTIER FOULBE / A": [
            {
              station: "FOULBE",
              voters: 320
            },
          ],
          "HANGAR COMM SONG ANCIEN / A": [
            {
              station: "SONG",
              voters: 274
            },
          ],
          "HANGAR COMMUNAUTAIRE BINTOM / A": [
            {
              station: "BINTOM",
              voters: 76
            },
          ],
          "HANGAR COMMUNAUTAIRE CONGO II / A": [
            {
              station: "CONGO",
              voters: 147
            },
          ],
          "HANGAR COMMUNAUTAIRE LIMOE / A": [
            {
              station: "LIMOE",
              voters: 103
            },
          ],
          "HOPITAL NGATTO NOUVEAU / A": [
            {
              station: "NGATTO",
              voters: 435
            },
          ],
          "MOSQUEE HAOUSSA / A": [
            {
              station: "HAOUSSA",
              voters: 398
            },
          ],
          "PALAIS DE JUSTICE / A": [
            {
              station: "ADMINISTRATIF",
              voters: 2581
            },
          ],
          "SAR-SM / A": [
            {
              station: "MOAZAM",
              voters: 638
            },
          ],
        },
      },
    },
  },
};
