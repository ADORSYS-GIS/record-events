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
  "SUD": {
    name: { en: "SOUTH", fr: "SUD" },
    divisions: {
      "OCEAN": {
        "AKOM II": {
          "CASE A PALABRE D'AKOM II VILLAGE / A": [
            {
              station: "AKOM",
              voters: 1087
            },
            {
              station: "VILLAGE",
              voters: 385
            },
          ],
          "CASE A PALABRE D'EFOULAN I / A": [
            {
              station: "EFOULAN",
              voters: 166
            },
          ],
          "CASE A PALABRE D'ESSA-NGOH / A": [
            {
              station: "NKOMAKAK1",
              voters: 72
            },
          ],
          "CASE A PALABRE DE BIBOLE / A": [
            {
              station: "BIBOLE",
              voters: 66
            },
          ],
          "CASE A PALABRE DE NKO'ONGOP / A": [
            {
              station: "NKO'ONGOP",
              voters: 59
            },
          ],
          "CASE A PALABRE DE NKO'OVUMBA / A": [
            {
              station: "NKO'OVUMBA",
              voters: 44
            },
          ],
          "CASE A PALABRE DE NKOMAKAK / A": [
            {
              station: "NKOMAKAK",
              voters: 150
            },
          ],
          "CASE A PALABRE DE NLOMOTO / A": [
            {
              station: "NLOMOTO",
              voters: 149
            },
          ],
          "CASE A PALABRE DE TYENGUE / A": [
            {
              station: "TYENGUE",
              voters: 100
            },
          ],
          "ECOLE DES PARENTS DE NDJABILOBE / A": [
            {
              station: "NDJABILOBE",
              voters: 63
            },
          ],
          "ECOLE PUBLIQUE D'ABIETE / A": [
            {
              station: "ABIETE",
              voters: 92
            },
          ],
          "ECOLE PUBLIQUE D'AKOK / A": [
            {
              station: "AKOK",
              voters: 127
            },
          ],
          "ECOLE PUBLIQUE D'AKOM II / A": [
            {
              station: "ASSOK",
              voters: 291
            },
          ],
          "ECOLE PUBLIQUE D'AWOMO / A": [
            {
              station: "AWOMO",
              voters: 26
            },
          ],
          "ECOLE PUBLIQUE D'EBEMVOK / A": [
            {
              station: "EBEMVOK",
              voters: 146
            },
          ],
          "ECOLE PUBLIQUE D'ELON / A": [
            {
              station: "ELON",
              voters: 53
            },
          ],
          "ECOLE PUBLIQUE D'ENYANKOL / A": [
            {
              station: "ENYANKOL",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE DE BIBINDI / A": [
            {
              station: "BIBINDI",
              voters: 91
            },
            {
              station: "BIYENG",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE DE FENDA / A": [
            {
              station: "FENDA",
              voters: 123
            },
          ],
          "ECOLE PUBLIQUE DE MALOMBA / A": [
            {
              station: "MALOMBA",
              voters: 72
            },
          ],
          "ECOLE PUBLIQUE DE MBANGA / A": [
            {
              station: "MBANGA",
              voters: 110
            },
          ],
          "ECOLE PUBLIQUE DE MEFANE / A": [
            {
              station: "MEFANE",
              voters: 49
            },
          ],
          "ECOLE PUBLIQUE DE MINGOH / A": [
            {
              station: "MINGOH",
              voters: 50
            },
          ],
          "ECOLE PUBLIQUE DE MVIE / A": [
            {
              station: "MVIE",
              voters: 624
            },
            {
              station: "CENTRE",
              voters: 312
            },
          ],
          "ECOLE PUBLIQUE DE NLONKENG / A": [
            {
              station: "NLOKENG",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE DE NNEMEYONG / A": [
            {
              station: "NNEMEYONG",
              voters: 136
            },
          ],
          "ECOLE PUBLIQUE DE TOKO / A": [
            {
              station: "TOKO",
              voters: 127
            },
          ],
          "ESPLANADE CHEFFERIE D'EKOWONG / A": [
            {
              station: "EKOWONG",
              voters: 82
            },
          ],
          "FOYER CULTUREL DE BIBOULEMAM / A": [
            {
              station: "BIBOULEMAM",
              voters: 76
            },
          ],
          "FOYER CULTUREL DE MEBANGA / A": [
            {
              station: "MEBANGA",
              voters: 46
            },
          ],
          "I S M A P DE NYABITANDE / A": [
            {
              station: "NYABITANDE",
              voters: 161
            },
          ],
          "LYCEE D'AKOM II / A": [
            {
              station: "VILLE",
              voters: 702
            },
          ],
        },
        "BIPINDI": {
          "ANNEXE RES. BEKOUNOU NICOLAS / A": [
            {
              station: "ZOCK",
              voters: 134
            },
            {
              station: "BEFAM-OYACK",
              voters: 134
            },
            {
              station: "MELEN",
              voters: 235
            },
            {
              station: "ENGOGO",
              voters: 134
            },
          ],
          "ANNEXE RES. ENYEGUE METINI ALBERT / A": [
            {
              station: "NKOL-BILON",
              voters: 76
            },
          ],
          "ANNEXE RESIDENCE NLONGVOUMBO / A": [
            {
              station: "KOUAMBO",
              voters: 271
            },
            {
              station: "NABONYARE",
              voters: 59
            },
            {
              station: "NKULMALENDI",
              voters: 59
            },
            {
              station: "NTUERPEMBE",
              voters: 59
            },
          ],
          "ANNEXE RESIDENCE REV, MVONDO MOISE /  A": [
            {
              station: "ASSOK",
              voters: 302
            },
            {
              station: "CENTRE",
              voters: 378
            },
            {
              station: "EDO'O-MANG",
              voters: 94
            },
            {
              station: "MVONDO",
              voters: 204
            },
          ],
          "ANNEXE RESIDENCE ZINDO AUGUSTE / A": [
            {
              station: "BIFOUM",
              voters: 86
            },
          ],
          "CENTRE DE PROM. FEMME ET FAMILLE / A": [
            {
              station: "BIPINDI",
              voters: 570
            },
            {
              station: "MADAGASCAR",
              voters: 92
            },
            {
              station: "MISSION",
              voters: 92
            },
            {
              station: "CATHOLIQUE",
              voters: 92
            },
          ],
          "CES BIDJOUKA CONDOR / A": [
            {
              station: "ATLANTIQUE",
              voters: 206
            },
            {
              station: "CONDOR",
              voters: 206
            },
            {
              station: "BIDJOUKA",
              voters: 665
            },
          ],
          "CETIC DE BIPINDI / A": [
            {
              station: "VILLAGE",
              voters: 175
            },
          ],
          "ECOLE PUBLIQUE ASSOK 2 ESSAWO'O / A": [
            {
              station: "ESSAWO'O",
              voters: 57
            },
            {
              station: "ESSEBENG",
              voters: 57
            },
          ],
          "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A": [
            {
              station: "ATOG-BOGA",
              voters: 397
            },
            {
              station: "ETETAK",
              voters: 129
            },
            {
              station: "ESSOMBA-ENOLA",
              voters: 129
            },
            {
              station: "KAMELON",
              voters: 129
            },
            {
              station: "NKOL-BIKOM",
              voters: 129
            },
            {
              station: "NKOL-NGOCK",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE BIDJOUKA CENTRE / A": [
            {
              station: "MBAMBA",
              voters: 177
            },
            {
              station: "NAMASSAMBI",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE BONGOUANA / A": [
            {
              station: "BONGOUANA",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE KOUAMBO / A": [
            {
              station: "SISANDE",
              voters: 106
            },
          ],
          "ECOLE PUBLIQUE DE MADOUNGOU / A": [
            {
              station: "MADOUNGOU",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE EBIMIMPBANG AKOM / A": [
            {
              station: "EBIMIMBANG",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE GRAND ZAMBI / A": [
            {
              station: "GRAND-ZAMBI",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE KPWA / A": [
            {
              station: "KPWA",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE LAMBI / A": [
            {
              station: "LAMBI",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE MBIKILIKI-SI / A": [
            {
              station: "DEUX-PONTS",
              voters: 178
            },
            {
              station: "SAMAL",
              voters: 178
            },
            {
              station: "BIWANDI",
              voters: 178
            },
            {
              station: "ORANGER",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE MELOMBO / A": [
            {
              station: "MELOMBO",
              voters: 333
            },
          ],
          "ECOLE PUBLIQUE MELONDO CENTRE / A": [
            {
              station: "MELONDO-SI",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE MEMEL 2 / A": [
            {
              station: "DAHOMEY",
              voters: 138
            },
            {
              station: "MEMEL",
              voters: 407
            },
            {
              station: "CARREFOUR",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE MINFOMBO CENTRE / A": [
            {
              station: "MINFOMBO",
              voters: 79
            },
          ],
          "ECOLE PUBLIQUE MOUNGUE / A": [
            {
              station: "MOUNGUE",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE NDTOUA CENTRE / A": [
            {
              station: "MINLOUEL-MIOH",
              voters: 144
            },
          ],
          "ECOLE PUBLIQUE NSOLA / A": [
            {
              station: "NSOLA",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE SONG-MAYI / A": [
            {
              station: "SONG-MAYI",
              voters: 168
            },
          ],
          "ECOLE PUBLIQUE TYANGO / A": [
            {
              station: "TYANGO",
              voters: 188
            },
          ],
          "ESPL. CHEFFERIE NDTOUA BITSILBILANDI / A": [
            {
              station: "BITSILBILANDI",
              voters: 148
            },
            {
              station: "NDTOUA",
              voters: 292
            },
            {
              station: "NGOUMA-NZIOU",
              voters: 148
            },
          ],
          "ESPLANADE CHEFFERIE MIMBAMELA  CENTRE / A": [
            {
              station: "MIMBAMELA",
              voters: 76
            },
          ],
          "ESPLANADE CHEFFERIE NKPWA NKOUTOU /  A": [
            {
              station: "NKOUTOU",
              voters: 109
            },
          ],
          "ESPLANADE CHEFFERIE NYAMINKOM / A": [
            {
              station: "NYAMINKOM",
              voters: 65
            },
          ],
          "ESPLANADE CHEFFERIE PETIT-ZAMBI / A": [
            {
              station: "PETIT",
              voters: 80
            },
            {
              station: "-ZAMBI",
              voters: 80
            },
          ],
          "MISSION CATH. MASCHUER-MASHUER / A": [
            {
              station: "BAMBI",
              voters: 104
            },
            {
              station: "BILIBI-TSOP",
              voters: 104
            },
            {
              station: "KOUERTSO",
              voters: 104
            },
          ],
          "SALLE DE FETES DE BIPINDI CENTRE / A": [
            {
              station: "CENTRE-VILLE",
              voters: 303
            },
          ],
          "SALLE DES FETES DE BOKOKOUALA  (G-STONES RESOURCES SA) / A": [
            {
              station: "BOKOKOUALA",
              voters: 127
            },
          ],
        },
        "CAMPO": {
          "BATIMENT CAMEROUNAISE DES EAUX / A": [
            {
              station: "TONDEFOM",
              voters: 55
            },
          ],
          "C.E.S. D'EBODJE / A": [
            {
              station: "MATAMBA",
              voters: 66
            },
            {
              station: "NGATA",
              voters: 66
            },
          ],
          "CAMP BONO / A": [
            {
              station: "LEILA",
              voters: 66
            },
            {
              station: "MASSEA",
              voters: 66
            },
          ],
          "CARREFOUR MAMEL / A": [
            {
              station: "CARREFOUR",
              voters: 71
            },
            {
              station: "MAMEL",
              voters: 71
            },
          ],
          "CHAPELLE EPC DE MBENDJI / A": [
            {
              station: "BEKOKA",
              voters: 36
            },
            {
              station: "MBENDJI",
              voters: 72
            },
          ],
          "CHAPELLE EPC DOUM-ESSAMEBENGA / A": [
            {
              station: "DOUM",
              voters: 68
            },
            {
              station: "ESSAMEBENGA",
              voters: 68
            },
            {
              station: "NKO'ADJAP",
              voters: 68
            },
          ],
          "CHAPELLE MALABA / A": [
            {
              station: "MALABA",
              voters: 61
            },
            {
              station: "OTOU",
              voters: 61
            },
          ],
          "E.P. BOUANDJO / A": [
            {
              station: "BOUANDJO",
              voters: 182
            },
            {
              station: "DOUM-ESSAMEDJANG",
              voters: 182
            },
          ],
          "E.P. CAMPO BEACH / A": [
            {
              station: "CAMPO",
              voters: 601
            },
            {
              station: "BEACH",
              voters: 601
            },
          ],
          "E.P. CAMPO VILLE / A": [
            {
              station: "BOKOMBE",
              voters: 766
            },
            {
              station: "CHATEAU",
              voters: 952
            },
            {
              station: "DOUMASSI",
              voters: 1007
            },
            {
              station: "PARIS",
              voters: 914
            },
            {
              station: "SOIR",
              voters: 914
            },
            {
              station: "QUARTIER",
              voters: 766
            },
            {
              station: "ADMINISTRATIF",
              voters: 766
            },
          ],
          "E.P. D'AKAK / A": [
            {
              station: "AFAN",
              voters: 150
            },
            {
              station: "ESSOKIE",
              voters: 150
            },
            {
              station: "AKAK",
              voters: 95
            },
            {
              station: "ASSOK",
              voters: 95
            },
            {
              station: "BITANDE",
              voters: 95
            },
          ],
          "E.P. EBIANEMEYONG / A": [
            {
              station: "EBIANEMEYONG",
              voters: 71
            },
          ],
          "E.P. EBODJE / A": [
            {
              station: "EBODJE",
              voters: 438
            },
            {
              station: "CHEFFERIE",
              voters: 284
            },
          ],
          "E.P. IPONO / A": [
            {
              station: "ANCIEN",
              voters: 195
            },
            {
              station: "CAMP",
              voters: 390
            },
            {
              station: "HFC",
              voters: 390
            },
            {
              station: "IPONO",
              voters: 390
            },
            {
              station: "NOUVEAU",
              voters: 195
            },
          ],
          "E.P. ITONDEFANG / A": [
            {
              station: "ECOLE",
              voters: 55
            },
          ],
          "E.P. MABIOGO / A": [
            {
              station: "MABIOGO",
              voters: 105
            },
            {
              station: "NAZARETH",
              voters: 105
            },
          ],
          "E.P. MVASSE / A": [
            {
              station: "MVASSE",
              voters: 142
            },
          ],
          "E.P. NKOELON / A": [
            {
              station: "NKOELON",
              voters: 47
            },
          ],
          "EGLISE PROTESTANTE ATLANTIQUE / A": [
            {
              station: "ENYENGENAMANGA",
              voters: 93
            },
            {
              station: "GENDARMERIE",
              voters: 93
            },
          ],
          "ESPL. CHEFFERIE D'ITONDEFANG / A": [
            {
              station: "ITONDE",
              voters: 65
            },
            {
              station: "MER",
              voters: 65
            },
            {
              station: "ITONDEFANG",
              voters: 120
            },
          ],
          "ESPLANADE MAISON IPENYENDJE / A": [
            {
              station: "BEYO",
              voters: 25
            },
            {
              station: "IPENYENDJE",
              voters: 25
            },
          ],
          "P.C. 11EME BAFUMAR / A": [
            {
              station: "EME",
              voters: 389
            },
            {
              station: "BAFUMAR",
              voters: 389
            },
          ],
          "WWF FAUNE MINTOM / A": [
            {
              station: "MINTOM",
              voters: 108
            },
          ],
        },
        "KRIBI I": {
          "ANCIENNE COMMUNE RURALE / A": [
            {
              station: "NGOYE",
              voters: 560
            },
            {
              station: "ADMINISTRATIF",
              voters: 560
            },
          ],
          "CASE COMMUNAUTAIRE DE TALLA / A": [
            {
              station: "EBOUNDJA",
              voters: 1254
            },
          ],
          "CENTRE SOCIAL LOBE / A": [
            {
              station: "LOBE",
              voters: 423
            },
          ],
          "CHAPELLE CATHOLIQUE / A": [
            {
              station: "MBEKA'A",
              voters: 492
            },
          ],
          "DAADER / A": [
            {
              station: "MASSAKA",
              voters: 1970
            },
          ],
          "DISPENSAIRE / A": [
            {
              station: "BONGAHELE",
              voters: 378
            },
          ],
          "ECOLE ADVENTISTE / A": [
            {
              station: "ZAIRE",
              voters: 1315
            },
          ],
          "ECOLE DU CENTRE / A": [
            {
              station: "NEW-TOWN",
              voters: 946
            },
          ],
          "ECOLE MATERNELLE DE TALLA / A": [
            {
              station: "TALLA",
              voters: 1444
            },
          ],
          "ECOLE PUBLIQUE DE BWAMBE / A": [
            {
              station: "BWAMBE",
              voters: 541
            },
          ],
          "ECOLE PUBLIQUE DE LENDE DIBE / A": [
            {
              station: "LENDE",
              voters: 289
            },
            {
              station: "DIBE",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE DE LOLABE / A": [
            {
              station: "LOLABE",
              voters: 1320
            },
          ],
          "ECOLE PUBLIQUE DE LOUMA / A": [
            {
              station: "LOUMA",
              voters: 878
            },
          ],
          "ECOLE PUBLIQUE DE TALLA / A": [
            {
              station: "BONGANDOUE",
              voters: 398
            },
          ],
          "ENIEG DE KRIBI / A": [
            {
              station: "MPANGOU",
              voters: 1020
            },
          ],
          "ETS BLACK & WHITE / A": [
            {
              station: "MOKOLO",
              voters: 2060
            },
          ],
          "ETS CATHY / A": [
            {
              station: "PETIT",
              voters: 3480
            },
            {
              station: "PARIS",
              voters: 3480
            },
          ],
          "HANGAR BIWANGI / A": [
            {
              station: "EBOME",
              voters: 1619
            },
          ],
          "HANGAR LENDI 1 / A": [
            {
              station: "LENDI",
              voters: 612
            },
          ],
          "SALLE DES FETES MBOAMANGA / A": [
            {
              station: "MBOAMANGA",
              voters: 1203
            },
          ],
        },
        "KRIBI II": {
          "C E S DE DOMBE / A": [
            {
              station: "DOMBE",
              voters: 13752
            },
          ],
          "COLLEGE ADVENTISTE / A": [
            {
              station: "AFAN",
              voters: 6178
            },
            {
              station: "MABE",
              voters: 6178
            },
          ],
          "DESTINY KIDS / A": [
            {
              station: "DOMBE-TRADEX",
              voters: 64
            },
          ],
          "E. PRIVEE BILINGUE ARINA / A": [
            {
              station: "NGOYERESERVE",
              voters: 608
            },
          ],
          "E.P. DE MIMBOUGUE / A": [
            {
              station: "MAKA\AWUM",
              voters: 2546
            },
            {
              station: "MIMBOUGUE",
              voters: 1432
            },
          ],
          "ECOLE ADVENTISTE / A": [
            {
              station: "NEW-",
              voters: 1606
            },
            {
              station: "TOWN",
              voters: 1606
            },
          ],
          "ECOLE MATERNELLE DES PETITS MARINS / A": [
            {
              station: "WAMIE",
              voters: 778
            },
          ],
          "ECOLE PRIVEE LES HIRONDELLES / A": [
            {
              station: "DOMBE-EBOBISSE",
              voters: 117
            },
          ],
          "ECOLE PUBLIQUE DE BEBAMBWE 1 / A": [
            {
              station: "BEBAMBWE",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE DE BIKONDO / A": [
            {
              station: "BIKONDO",
              voters: 1862
            },
          ],
          "ECOLE PUBLIQUE DE MPALLA / A": [
            {
              station: "MPALLA",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE NZIOU / A": [
            {
              station: "NZIOU",
              voters: 882
            },
          ],
          "ECOLE PUBLIQUE LONDJI1 / A": [
            {
              station: "LONDJI",
              voters: 678
            },
          ],
          "EP DE DOMBE CAMP MILITAIRE / A": [
            {
              station: "DOMBE-CAMP",
              voters: 73
            },
            {
              station: "MILITAIRE",
              voters: 73
            },
          ],
          "ESPL. DE SWECOM / A": [
            {
              station: "ALAN-MABE",
              voters: 401
            },
          ],
          "ESPL. DU STADE / A": [
            {
              station: "AFAN-MABE",
              voters: 1505
            },
          ],
          "ESPLANADE BAR PONT DES PETITS MARINS /  A": [
            {
              station: "MPOLONGWE",
              voters: 175
            },
          ],
          "GROUPE SCOLAIRE GEORGES LAURENT / A": [
            {
              station: "DOMBE-BOSSIGUI",
              voters: 113
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "NZAMI",
              voters: 561
            },
          ],
          "LYCEE TECHNIQUE / A": [
            {
              station: "NGOYE",
              voters: 3913
            },
            {
              station: "RESERVE",
              voters: 2574
            },
          ],
          "POSTE DE DOUANE D'EBOUYIE / A": [
            {
              station: "EBOUYE",
              voters: 201
            },
          ],
          "SALLE COMMUNAUTAIRE D'ELABE / A": [
            {
              station: "ELABE",
              voters: 469
            },
          ],
          "SALLE COMMUNAUTAIRE DE BILOLO / A": [
            {
              station: "BILOLO",
              voters: 142
            },
          ],
          "SALLE COMMUNAUTAIRE DE MPOLONGWE /  A": [
            {
              station: "MPOLONGWE1",
              voters: 214
            },
          ],
          "UNI PALACE / A": [
            {
              station: "NZIOU-TERRE",
              voters: 57
            },
            {
              station: "PROMISE",
              voters: 57
            },
          ],
        },
        "LOKOUNDJE": {
          "ANCIENNE ECOLE PUBLIQUE BIDOU I / A": [
            {
              station: "BIDOU",
              voters: 284
            },
          ],
          "BASE CAMTEL DE BIVOUBA SUD / A": [
            {
              station: "BIVOUBA",
              voters: 165
            },
          ],
          "BUREAU SOCAPALM KILOMBO I / A": [
            {
              station: "KILOMBO",
              voters: 557
            },
          ],
          "CASE COMMUNAUTAIRE DIBOUNE / A": [
            {
              station: "DIBOUNE",
              voters: 23
            },
          ],
          "CASE DU VILLAGE EPOLLE / A": [
            {
              station: "EPOLLE",
              voters: 64
            },
          ],
          "CASE SANTE NKOLLO / A": [
            {
              station: "NKOLLO",
              voters: 96
            },
          ],
          "CES BELLA - HAUT / A": [
            {
              station: "BELLA",
              voters: 232
            },
          ],
          "CETIC D'ELOGBATINDI / A": [
            {
              station: "ELOGBATINDI",
              voters: 608
            },
          ],
          "CHAPELLE CATHOLIQUE D'EBONDI / A": [
            {
              station: "EBONDI",
              voters: 418
            },
          ],
          "ECOLE BILINGUE V I / A": [
            {
              station: "SOCAPALM",
              voters: 2341
            },
          ],
          "ECOLE PUBLIQUE BEHONDO / A": [
            {
              station: "BEHONDO",
              voters: 50
            },
          ],
          "ECOLE PUBLIQUE DE BANDEVOURI / A": [
            {
              station: "BANDEVOURI",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE DE BISSIANG / A": [
            {
              station: "BISSIANG",
              voters: 430
            },
          ],
          "ECOLE PUBLIQUE DE BONGUEN / A": [
            {
              station: "BONGUEN",
              voters: 243
            },
          ],
          "ECOLE PUBLIQUE DE FIFINDA I / A": [
            {
              station: "FIFINDA",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DE GWAP / A": [
            {
              station: "GWAP",
              voters: 59
            },
          ],
          "ECOLE PUBLIQUE DE MAKOURE I / A": [
            {
              station: "MAKOURE",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE DE MBOKE / A": [
            {
              station: "MBOKE",
              voters: 67
            },
          ],
          "ECOLE PUBLIQUE DE PAMA / A": [
            {
              station: "PAMA",
              voters: 197
            },
          ],
          "ECOLE PUBLIQUE DE PONGO / A": [
            {
              station: "PONGO",
              voters: 47
            },
          ],
          "ECOLE PUBLIQUE DEHANE / A": [
            {
              station: "DEHANE",
              voters: 204
            },
          ],
          "ECOLE PUBLIQUE DIKOBE / A": [
            {
              station: "DIKOBE",
              voters: 70
            },
          ],
          "EPC MABENANGA / A": [
            {
              station: "MABENANGA",
              voters: 32
            },
          ],
          "ESPL. SALLE CONFERENCE WIJMA / A": [
            {
              station: "CAMP",
              voters: 310
            },
            {
              station: "WIJMA",
              voters: 310
            },
          ],
          "ESPLANADECHEFFERIE / A": [
            {
              station: "NDOUMALE",
              voters: 65
            },
          ],
          "HANGAR MARCHE DONENGA / A": [
            {
              station: "DONENGA",
              voters: 55
            },
          ],
          "HANGAR MARCHE EBEA / A": [
            {
              station: "EBEA",
              voters: 80
            },
          ],
          "HANGAR MARCHE EBOUDAVAE / A": [
            {
              station: "EBOUDAVAE",
              voters: 20
            },
          ],
          "HANGAR PUBLIC LOKOUNDJE / A": [
            {
              station: "LOKOUNDJE",
              voters: 54
            },
          ],
          "HANGAR VILLAGE BIPAGA / A": [
            {
              station: "BIPAGA",
              voters: 209
            },
          ],
          "LYCEE DE YALPENDA / A": [
            {
              station: "YALPENDA",
              voters: 185
            },
          ],
          "QUARTIER LATIN MBEBE / A": [
            {
              station: "MBEBE",
              voters: 259
            },
          ],
          "RESIDENCE DOMICILE MBILE RAPHAEL / A": [
            {
              station: "EDOUNGANGOMO",
              voters: 39
            },
          ],
        },
        "LOLODORF": {
          "ABATTOIR MUNICIPAL DE LOLODORF / A": [
            {
              station: "HAOUSSA",
              voters: 386
            },
          ],
          "CASE COM. BIGBALLY II MASSAKPWA / A": [
            {
              station: "MASSAKPWA",
              voters: 62
            },
          ],
          "CASE COM. BIKALLA MACEDOINE / A": [
            {
              station: "MACEDOINE",
              voters: 79
            },
          ],
          "CASE COM.DE MBANGO NGOUMBA / A": [
            {
              station: "NGOUMBA",
              voters: 59
            },
          ],
          "CASE COMMUNAUTAIRE DE KABA / A": [
            {
              station: "KABA",
              voters: 122
            },
          ],
          "CASE COMMUNAUTAIRE DEDE SABALLY / A": [
            {
              station: "SABALLY",
              voters: 135
            },
          ],
          "CES DE NKOUMBALA / A": [
            {
              station: "NKOUMBALA",
              voters: 101
            },
          ],
          "CETIC DE NGOVAYANG I / A": [
            {
              station: "NGOVAYANG",
              voters: 622
            },
          ],
          "E.F.A. BIBONDI NKONG - OGNIE / A": [
            {
              station: "NKONG-OGNIE",
              voters: 81
            },
          ],
          "ECOLE EPC DE BIBIA / A": [
            {
              station: "BIBIA",
              voters: 234
            },
          ],
          "ECOLE P. DE MELANGUE MVOG-ESSON / A": [
            {
              station: "MELANGUE",
              voters: 70
            },
            {
              station: "MVOG",
              voters: 70
            },
            {
              station: "ESSON",
              voters: 70
            },
          ],
          "ECOLE PUBLIQUE DE BIBONDI / A": [
            {
              station: "BIBONDI",
              voters: 269
            },
            {
              station: "CENTRE",
              voters: 869
            },
          ],
          "ECOLE PUBLIQUE DE BIGBALLY / A": [
            {
              station: "BIGBALLY",
              voters: 1214
            },
          ],
          "ECOLE PUBLIQUE DE BIKALLA NGOMBASS / A": [
            {
              station: "NGOMBASS",
              voters: 123
            },
          ],
          "ECOLE PUBLIQUE DE BIKOKA I / A": [
            {
              station: "BIKOKA",
              voters: 337
            },
            {
              station: "NLANGWAYENE",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE DE KABA MBANGO / A": [
            {
              station: "MBANGO",
              voters: 427
            },
            {
              station: "BITOUER",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE KOUMBINZIK / A": [
            {
              station: "KOUMBINZIK",
              voters: 73
            },
          ],
          "ECOLE PUBLIQUE DE LOLODORF / A": [
            {
              station: "QUARTIER",
              voters: 547
            },
            {
              station: "ADMINISTRATIF",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE MADONG / A": [
            {
              station: "MADONG",
              voters: 514
            },
          ],
          "ECOLE PUBLIQUE DE MANGOUMA / A": [
            {
              station: "MANGOUMA",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE DE MBANGO BOULOU / A": [
            {
              station: "BOULOU",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE DE MBIKILIKI / A": [
            {
              station: "MBIKILIKI",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE DE MILL / A": [
            {
              station: "MILL",
              voters: 141
            },
          ],
          "ECOLE PUBLIQUE DE MOUGUE / A": [
            {
              station: "MOUGUE",
              voters: 214
            },
          ],
          "ECOLE PUBLIQUE DE NGOYANG / A": [
            {
              station: "NGOYANG",
              voters: 548
            },
            {
              station: "NKOUONGUIOH",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE DE NKOUAMBPOER I / A": [
            {
              station: "NKOUAMBPOER",
              voters: 254
            },
          ],
          "FOYER COM.DE BIKOUI II - MBPANGA / A": [
            {
              station: "MBPANGA",
              voters: 130
            },
          ],
          "FOYER COMMUNAUTAIRE DE / A": [
            {
              station: "MVILLE",
              voters: 193
            },
          ],
          "FOYER COMMUNAUTAIRE DE BINGAMBO / A": [
            {
              station: "BINGAMBO",
              voters: 394
            },
          ],
          "FOYER MUNICIPAL DE LOLODORF / A": [
            {
              station: "LOLODORF",
              voters: 508
            },
            {
              station: "VILLE",
              voters: 508
            },
          ],
          "HANGAR MARCHE BIKALLA CENTRE / A": [
            {
              station: "BIKALLA",
              voters: 375
            },
          ],
          "LYCEE CLASSIQUE DE LOLODORF / A": [
            {
              station: "III",
              voters: 485
            },
            {
              station: "LYCEE",
              voters: 398
            },
          ],
          "LYCEE TECHNIQUE DE LOLODORF / A": [
            {
              station: "BIKOUI",
              voters: 475
            },
            {
              station: "LIMAZOUANG",
              voters: 345
            },
          ],
        },
        "MVENGUE": {
          "CASE COM. D'ATING - ETOM / A": [
            {
              station: "ATING",
              voters: 124
            },
            {
              station: "ETOM",
              voters: 124
            },
          ],
          "CASE COM. D'ELON NYAMFENDE / A": [
            {
              station: "NYAMFENDE",
              voters: 108
            },
          ],
          "CASE COM. D'ELON YANDA / A": [
            {
              station: "YANDA",
              voters: 26
            },
          ],
          "CASE COM. DE MENGANDA I / A": [
            {
              station: "MENGADA",
              voters: 75
            },
          ],
          "CASE COM. DE MINKOUGOU / A": [
            {
              station: "MINKOUGOU",
              voters: 81
            },
          ],
          "CASE COM. DE MVENGUE NSAM / A": [
            {
              station: "NSAM",
              voters: 131
            },
          ],
          "CASE COM. DE NKOALATOM / A": [
            {
              station: "NKOLATOM",
              voters: 70
            },
          ],
          "CASE COM. DE NKOLMENDING I / A": [
            {
              station: "NKOLMENDING",
              voters: 172
            },
          ],
          "CASE COM. DE WOM I / A": [
            {
              station: "WOM",
              voters: 299
            },
          ],
          "CETIC DE MELONDO / A": [
            {
              station: "MELONDO",
              voters: 188
            },
          ],
          "ECOLE DE PUBLIQUE D'EBAYEGE / A": [
            {
              station: "EBAYEGA",
              voters: 125
            },
          ],
          "ECOLE PUBLIQUE ADOUMAN / A": [
            {
              station: "ADOUMAN",
              voters: 50
            },
          ],
          "ECOLE PUBLIQUE ANNEX -A / A": [
            {
              station: "MVENGUE",
              voters: 1197
            },
          ],
          "ECOLE PUBLIQUE D'ABAM / A": [
            {
              station: "ABAM",
              voters: 118
            },
          ],
          "ECOLE PUBLIQUE D'AKIE / A": [
            {
              station: "AKIE",
              voters: 150
            },
          ],
          "ECOLE PUBLIQUE D'AKOK / A": [
            {
              station: "AKOK",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE D'AKOM / A": [
            {
              station: "AKOM",
              voters: 228
            },
          ],
          "ECOLE PUBLIQUE D'ATINZAM / A": [
            {
              station: "ATINZAM",
              voters: 69
            },
          ],
          "ECOLE PUBLIQUE D'AWANDA / A": [
            {
              station: "AWANDA",
              voters: 614
            },
          ],
          "ECOLE PUBLIQUE D'EBOM CENTRE / A": [
            {
              station: "EBOM",
              voters: 353
            },
            {
              station: "CENTRE",
              voters: 759
            },
          ],
          "ECOLE PUBLIQUE D'ELON / A": [
            {
              station: "ELON",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE D'OKOGA / A": [
            {
              station: "OKOGA",
              voters: 111
            },
          ],
          "ECOLE PUBLIQUE DE BEMBE / A": [
            {
              station: "BEMBE",
              voters: 41
            },
          ],
          "ECOLE PUBLIQUE DE BIKOE I / A": [
            {
              station: "BIKOE",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE BIKOP / A": [
            {
              station: "BIKOP",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE DE D'OKAROBELE / A": [
            {
              station: "OKAROBELE",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE DE KA'AN II / A": [
            {
              station: "KA'AN",
              voters: 318
            },
          ],
          "ECOLE PUBLIQUE DE KOULNGANGA / A": [
            {
              station: "KOULNGANGA",
              voters: 281
            },
          ],
          "ECOLE PUBLIQUE DE MEKOM / A": [
            {
              station: "MEKOM",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE DE MELEN / A": [
            {
              station: "MELEN",
              voters: 180
            },
          ],
          "ECOLE PUBLIQUE DE MENGANDA II / A": [
            {
              station: "MENGANDA",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE DE MINKAN / A": [
            {
              station: "MINKAN",
              voters: 446
            },
          ],
          "ECOLE PUBLIQUE DE NDZIEBETONO / A": [
            {
              station: "NDZIEBETONO",
              voters: 131
            },
          ],
          "ECOLE PUBLIQUE DE NKOALA'A I / A": [
            {
              station: "NKOALA'A",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE DE NKOALA'A II / A": [
            {
              station: "NKOALA",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE DE NKOAMBE / A": [
            {
              station: "NKOAMBE",
              voters: 163
            },
          ],
          "ECOLE PUBLIQUE MVENGUE III / A": [
            {
              station: "III",
              voters: 189
            },
          ],
          "SAR/SM DE MVENGUE MEDZOBO / A": [
            {
              station: "MEDZOBO",
              voters: 163
            },
          ],
        },
        "NIETE": {
          "ECOLE PUBLIQUE BIDOU III / A": [
            {
              station: "BIDOU",
              voters: 160
            },
            {
              station: "III",
              voters: 160
            },
          ],
          "ECOLE PUBLIQUE D'ADJAP / A": [
            {
              station: "ADJAP",
              voters: 249
            },
            {
              station: "AKO'OZAM",
              voters: 249
            },
            {
              station: "NKOMGMINTOM",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE D'AFAN-OVENG / A": [
            {
              station: "AFANG-OVENG",
              voters: 184
            },
            {
              station: "ANGALE",
              voters: 184
            },
          ],
          "ECOLE PUBLIQUE D'AKOM I / A": [
            {
              station: "AKOM",
              voters: 172
            },
            {
              station: "EDOUDOUMA",
              voters: 172
            },
            {
              station: "NJANTOM",
              voters: 172
            },
            {
              station: "VILLAGE",
              voters: 11059
            },
          ],
          "ECOLE PUBLIQUE DE BIFA / A": [
            {
              station: "BIFA",
              voters: 75
            },
            {
              station: "MEKANDA",
              voters: 75
            },
            {
              station: "OLEM",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE NGOCK / A": [
            {
              station: "NGOCK",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE DE NKO'OLONG / A": [
            {
              station: "NKO'OLONG",
              voters: 230
            },
          ],
          "ECOLE PUBLIQUE DE ZINGUI / A": [
            {
              station: "ANDJECK",
              voters: 302
            },
            {
              station: "BINAK",
              voters: 302
            },
            {
              station: "NYEMA",
              voters: 302
            },
            {
              station: "ZINGUI",
              voters: 302
            },
          ],
          "ECOLE PUBLIQUE HEVECAM VILLAGE 1 / A": [
            {
              station: "CITE",
              voters: 159
            },
            {
              station: "DES",
              voters: 159
            },
            {
              station: "CADRES",
              voters: 159
            },
          ],
          "ECOLE PUBLIQUE HEVECAM VILLAGE 15 / A": [
            {
              station: "LOBE",
              voters: 686
            },
          ],
          "ECOLE PUBLIQUE HEVECAM VILLAGE 2 / A": [
            {
              station: "NIETE",
              voters: 545
            },
          ],
          "ECOLE PUBLIQUE HEVECAM VILLAGE HOP. /  A": [
            {
              station: "QUARTIER",
              voters: 65
            },
            {
              station: "HOPITAL",
              voters: 65
            },
          ],
          "ECOLE PUBLIQUE NKO'OLONG / A": [
            {
              station: "NLOZOK",
              voters: 45
            },
          ],
          "ESPL. BAR ALIMENTATION CODERA / A": [
            {
              station: "NKOLMBONDA",
              voters: 149
            },
            {
              station: "NKOMBONDA",
              voters: 149
            },
          ],
          "SALLE DES FETES NLONGO / A": [
            {
              station: "NLONGO",
              voters: 107
            },
            {
              station: "GENDARMERIE",
              voters: 107
            },
          ],
        },
      },
      "VALLE DU": {
        "AMBAM": {
          "CORPS DE GARDE AKINA / A": [
            {
              station: "AKINA",
              voters: 67
            },
          ],
          "CORPS DE GARDE AKOM BIKAK / A": [
            {
              station: "AKOM",
              voters: 73
            },
            {
              station: "BIKAK",
              voters: 73
            },
          ],
          "CORPS DE GARDE AMBAM YAT / A": [
            {
              station: "YAT",
              voters: 439
            },
          ],
          "CORPS DE GARDE BILE OSSI / A": [
            {
              station: "BILE",
              voters: 107
            },
            {
              station: "OSSI",
              voters: 107
            },
          ],
          "CORPS DE GARDE BILIK-BI-THO / A": [
            {
              station: "BILIK",
              voters: 123
            },
            {
              station: "THO",
              voters: 280
            },
          ],
          "CORPS DE GARDE BINDAMEYOS / A": [
            {
              station: "BINDAMEYOS",
              voters: 144
            },
          ],
          "CORPS DE GARDE EBOZI I / A": [
            {
              station: "EBOZI",
              voters: 160
            },
          ],
          "CORPS DE GARDE EKOUMEDOUM / A": [
            {
              station: "EKOUMEDOUM",
              voters: 248
            },
          ],
          "CORPS DE GARDE ELON / A": [
            {
              station: "ELON",
              voters: 108
            },
          ],
          "CORPS DE GARDE KONEMEKAK / A": [
            {
              station: "KONEMEKAK",
              voters: 84
            },
          ],
          "CORPS DE GARDE M . OVENG ESSAKORAN /  A": [
            {
              station: "ESSAKORAN",
              voters: 99
            },
          ],
          "CORPS DE GARDE MEDJOUNOU / A": [
            {
              station: "MEDJOUNOU",
              voters: 69
            },
          ],
          "CORPS DE GARDE MEKAMAN / A": [
            {
              station: "MEKAMAN",
              voters: 124
            },
          ],
          "CORPS DE GARDE MEKOMO AMBAM / A": [
            {
              station: "MEKOMO",
              voters: 255
            },
          ],
          "CORPS DE GARDE MENGOMO / A": [
            {
              station: "MENGOMO",
              voters: 175
            },
          ],
          "CORPS DE GARDE MESSI-MESSI / A": [
            {
              station: "MESSI-MESSI",
              voters: 81
            },
          ],
          "CORPS DE GARDE NKOLMELEN / A": [
            {
              station: "NKOLMELEN",
              voters: 55
            },
          ],
          "CORPS DE GARDE NKOTOVENG / A": [
            {
              station: "NKOTOVENG",
              voters: 163
            },
          ],
          "CORPS DE GARDE NNEZAM / A": [
            {
              station: "NNEZAM",
              voters: 77
            },
          ],
          "CORPS DE GARDE NSELANG / A": [
            {
              station: "NSELANG",
              voters: 107
            },
          ],
          "CORPS DE GARDE NSESSOUM / A": [
            {
              station: "NSESSOUM",
              voters: 192
            },
          ],
          "CORPS DE GARDE NYAZANGA / A": [
            {
              station: "NYANZANGA",
              voters: 137
            },
          ],
          "CORPS DE GARDE YOS-MA'AN / A": [
            {
              station: "YOS-MA'AN",
              voters: 28
            },
          ],
          "CORPS-DE-GARDE ZALOM / A": [
            {
              station: "ZALOM",
              voters: 45
            },
          ],
          "DELEGATION MINDAF-AMBAM / A": [
            {
              station: "MELEN-SI",
              voters: 760
            },
          ],
          "DOUANE AMBAM / A": [
            {
              station: "CENTRE",
              voters: 572
            },
            {
              station: "VILLE",
              voters: 206
            },
          ],
          "ECOLE ANNEXE NSOLE / A": [
            {
              station: "NSOLE",
              voters: 994
            },
          ],
          "ECOLE CATHOLIQUE NKOLETAM / A": [
            {
              station: "NKOLETAM",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE ABANG BETHEL / A": [
            {
              station: "ABANG",
              voters: 1125
            },
            {
              station: "BETHEL",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE AKAK METOM / A": [
            {
              station: "AKAK",
              voters: 52
            },
            {
              station: "METOM",
              voters: 52
            },
          ],
          "ECOLE PUBLIQUE AKAM BITAM I / A": [
            {
              station: "AKAM",
              voters: 489
            },
            {
              station: "BITAM",
              voters: 299
            },
          ],
          "ECOLE PUBLIQUE AKAM MESSI / A": [
            {
              station: "MESSI",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE AKONETYE / A": [
            {
              station: "AKONETYE",
              voters: 173
            },
          ],
          "ECOLE PUBLIQUE AKOULEZOK / A": [
            {
              station: "AKOULEZOK",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE ANDOM / A": [
            {
              station: "ANDOM",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE ASSANDJIK / A": [
            {
              station: "ASSANDJIK",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE BILIK BI YAMA / A": [
            {
              station: "YAMA",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE BIYI-EBA / A": [
            {
              station: "BIYI",
              voters: 166
            },
            {
              station: "EBA",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE BIYI-EFACK / A": [
            {
              station: "EFACK",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE MEYO CENTRE / A": [
            {
              station: "MEYO",
              voters: 631
            },
          ],
          "ECOLE PUBLIQUE DE NEW BELL / A": [
            {
              station: "NEW",
              voters: 670
            },
            {
              station: "BELL",
              voters: 670
            },
          ],
          "ECOLE PUBLIQUE DU CENTRE / A": [
            {
              station: "AVIATION",
              voters: 1799
            },
          ],
          "ECOLE PUBLIQUE MBAM ESSAOBAM / A": [
            {
              station: "MBAM",
              voters: 136
            },
            {
              station: "ESSAOBAM",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE MEFOUP ESSAKAK / A": [
            {
              station: "MEFOUP",
              voters: 264
            },
            {
              station: "ESSAKAK",
              voters: 264
            },
          ],
          "ECOLE PUBLIQUE MEMVIM / A": [
            {
              station: "MEMVIM",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE MENDJIMI / A": [
            {
              station: "MENDJIMI",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE MENGAMA / A": [
            {
              station: "MENGAMA",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE MEYO-ELIE / A": [
            {
              station: "ELIE",
              voters: 265
            },
          ],
          "ECOLE PUBLIQUE MEYO-NYAKA / A": [
            {
              station: "MEYO-NYAKA",
              voters: 121
            },
          ],
          "ECOLE PUBLIQUE MFOULEKOK / A": [
            {
              station: "MFOULEKOK",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE MINDI MI OVENG / A": [
            {
              station: "MINDJI",
              voters: 100
            },
            {
              station: "OVENG",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE MINKOK / A": [
            {
              station: "MINKOK",
              voters: 159
            },
          ],
          "ECOLE PUBLIQUE MINYIN / A": [
            {
              station: "MINYIN",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE NGOM-ADJAP / A": [
            {
              station: "NGOM",
              voters: 167
            },
            {
              station: "ADJAP",
              voters: 62
            },
          ],
          "ECOLE PUBLIQUE NKAN / A": [
            {
              station: "NKAN",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE NKO'OMBE / A": [
            {
              station: "NKO'OMBE",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE NKOLEFOULAN / A": [
            {
              station: "NKOLEFOULAN",
              voters: 88
            },
          ],
          "ECOLE PUBLIQUE NKOLEKON / A": [
            {
              station: "NKOLEKON",
              voters: 68
            },
          ],
          "ECOLE PUBLIQUE NKPWA EVOLE / A": [
            {
              station: "NPWA",
              voters: 201
            },
            {
              station: "EVOLE",
              voters: 201
            },
          ],
          "ECOLE PUBLIQUE NLONO / A": [
            {
              station: "NLONO",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE NONG / A": [
            {
              station: "NONG",
              voters: 53
            },
          ],
          "ECOLE PUBLIQUE ZAMINKAN / A": [
            {
              station: "ZAMINKAN",
              voters: 136
            },
          ],
          "ECOLE-PRIVEE AFANETE / A": [
            {
              station: "AFANETE",
              voters: 1798
            },
          ],
          "ESPLANADE PRISON / A": [
            {
              station: "PRISON",
              voters: 181
            },
          ],
          "FOYER MUNICIPAL AMBAM / A": [
            {
              station: "QUARTIER",
              voters: 397
            },
            {
              station: "ADMINISTRATIF",
              voters: 397
            },
          ],
          "LYCEE BILINGUE AMBAM / A": [
            {
              station: "AMBAM",
              voters: 8875
            },
            {
              station: "BRIQUETERIE",
              voters: 388
            },
          ],
          "LYCEE MIXTE ABANG MINKO / A": [
            {
              station: "MINKO",
              voters: 1003
            },
          ],
          "LYCEE TECHNIQUE NKOUMEKEKE / A": [
            {
              station: "NKOUMEKEKE",
              voters: 735
            },
          ],
        },
        "KYE-OSSI": {
          "BUREAU DE DOUANE ONGOZOK / A": [
            {
              station: "ONGOZOK",
              voters: 74
            },
          ],
          "CENTRE DE SANTEINTEGREDE FENETE / A": [
            {
              station: "FENETE",
              voters: 204
            },
          ],
          "CORPS DE GARDE EBENGON I / A": [
            {
              station: "EBENGON",
              voters: 257
            },
          ],
          "CORPS DE GARDE KONO FONOSSI / A": [
            {
              station: "KONO",
              voters: 202
            },
            {
              station: "FONOSSI",
              voters: 202
            },
          ],
          "CORPS DE GARDE MEFOUP / A": [
            {
              station: "MEFOUP",
              voters: 109
            },
          ],
          "CORPS DE GARDE METET / A": [
            {
              station: "METET",
              voters: 138
            },
          ],
          "CORPS DE GARDE MINYON / A": [
            {
              station: "MINYON",
              voters: 57
            },
          ],
          "CORPS DE GARDE NKAN / A": [
            {
              station: "NKAN",
              voters: 57
            },
          ],
          "DOUANE AKOMBANG / A": [
            {
              station: "AKOMBANG",
              voters: 8086
            },
          ],
          "E.P. DE NSANGBWANG / A": [
            {
              station: "NSANBWANG",
              voters: 136
            },
            {
              station: "NSANGBWANG",
              voters: 136
            },
          ],
          "ECOLE PUBLIQUE ADJOU'OU / A": [
            {
              station: "ADJOU'OU",
              voters: 84
            },
          ],
          "ECOLE PUBLIQUE AKONANGUI / A": [
            {
              station: "AKONANGUI",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE DAMA / A": [
            {
              station: "DAMA",
              voters: 106
            },
          ],
          "ECOLE PUBLIQUE KYE-OSSI / A": [
            {
              station: "KYE-OSSI",
              voters: 1709
            },
          ],
          "ECOLE PUBLIQUE MINKOMO / A": [
            {
              station: "MINKOMO",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE NGOAZIK / A": [
            {
              station: "NGOAZIK",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE NKOSSI MEKOMO I / A": [
            {
              station: "MEKOMO",
              voters: 386
            },
          ],
          "ECOLE PUBLIQUE NSANA / A": [
            {
              station: "NSANA",
              voters: 207
            },
          ],
          "ECOLE PUBLIQUE NSEZANG / A": [
            {
              station: "NSEZANG",
              voters: 62
            },
          ],
          "TRIBUNAL COUTUMIER MEYO NKOULOU / A": [
            {
              station: "MEYO",
              voters: 168
            },
            {
              station: "NKOULOU",
              voters: 168
            },
          ],
        },
        "MA'AN": {
          "CENTRE DE SANTE DE ZOUAMEYONG / A": [
            {
              station: "ZOUAMEYONG",
              voters: 54
            },
          ],
          "CORPS DE GARDE D'ABEM / A": [
            {
              station: "CHEFFERIE",
              voters: 231
            },
            {
              station: "ODING",
              voters: 66
            },
          ],
          "CORPS DE GARDE D'AKOM / A": [
            {
              station: "AKOM",
              voters: 167
            },
          ],
          "CORPS DE GARDE D'EBOLMBAMA / A": [
            {
              station: "EBOLMBAMA",
              voters: 65
            },
          ],
          "CORPS DE GARDE D'ENDENDEM / A": [
            {
              station: "ENDENDEM",
              voters: 150
            },
          ],
          "CORPS DE GARDE DE MEBERA / A": [
            {
              station: "ABANG",
              voters: 208
            },
            {
              station: "BITOTO",
              voters: 130
            },
            {
              station: "MEBERA",
              voters: 130
            },
          ],
          "CORPS DE GARDE DE NDJAZENG / A": [
            {
              station: "NDJAZENG",
              voters: 98
            },
          ],
          "CORPS DE GARDE DE NGBWA-AKOM / A": [
            {
              station: "EWONG",
              voters: 61
            },
            {
              station: "NGBWA",
              voters: 61
            },
          ],
          "CORPS DE GARDE DE NNEMEYONG / A": [
            {
              station: "MELEN",
              voters: 184
            },
            {
              station: "NNEMEYONG",
              voters: 127
            },
          ],
          "CORPS DE GARDE DE NSEBITO / A": [
            {
              station: "NSEBITO",
              voters: 124
            },
          ],
          "CORPS DE GARDE DE NYABIBAK / A": [
            {
              station: "NYABIBAK",
              voters: 61
            },
          ],
          "CORPS DE GARDE DE ZOETELE / A": [
            {
              station: "MEYO-NTEM",
              voters: 177
            },
            {
              station: "MEYOS",
              voters: 177
            },
            {
              station: "ZOETELE",
              voters: 177
            },
          ],
          "CORPS DE GARGE DE MEKONDOM / A": [
            {
              station: "NKOL",
              voters: 78
            },
            {
              station: "ABUI",
              voters: 78
            },
          ],
          "ECOLE PUBLIQUE D'AFAN / A": [
            {
              station: "AFAN",
              voters: 83
            },
          ],
          "ECOLE PUBLIQUE D'ALEN 1 / A": [
            {
              station: "ALEN1",
              voters: 156
            },
            {
              station: "NKONGMEYOS",
              voters: 156
            },
          ],
          "ECOLE PUBLIQUE D'ALEN 2 / A": [
            {
              station: "ALEN",
              voters: 96
            },
            {
              station: "NTEBEZOK",
              voters: 96
            },
          ],
          "ECOLE PUBLIQUE D'ALOUM 1 / A": [
            {
              station: "ALOUM",
              voters: 245
            },
          ],
          "ECOLE PUBLIQUE D'ANGUIRIDJANG / A": [
            {
              station: "ANGUIRIDJANG",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE D'ASSAM / A": [
            {
              station: "ASSAM",
              voters: 96
            },
            {
              station: "SON",
              voters: 96
            },
          ],
          "ECOLE PUBLIQUE D'AYA'AMANG / A": [
            {
              station: "AYA'AMANG",
              voters: 87
            },
          ],
          "ECOLE PUBLIQUE D'EKEKE / A": [
            {
              station: "EKEKE",
              voters: 105
            },
          ],
          "ECOLE PUBLIQUE D'EVES / A": [
            {
              station: "EVES",
              voters: 185
            },
          ],
          "ECOLE PUBLIQUE D'EVOLE / A": [
            {
              station: "EVOLE",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE D'EVOUZOK / A": [
            {
              station: "EVOUZOK",
              voters: 68
            },
            {
              station: "MEKONDOM",
              voters: 107
            },
          ],
          "ECOLE PUBLIQUE D'OKONG / A": [
            {
              station: "EVINDISSI",
              voters: 203
            },
            {
              station: "OKONG",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE DE BIDJAP / A": [
            {
              station: "BIDJAP",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE DE BIYAN / A": [
            {
              station: "BIYAN",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE DE MA'AN CENTRE / A": [
            {
              station: "MA'AN",
              voters: 958
            },
            {
              station: "CENTRE",
              voters: 958
            },
            {
              station: "MINKAN-MENGALE",
              voters: 1222
            },
            {
              station: "NNEZAM",
              voters: 1021
            },
          ],
          "ECOLE PUBLIQUE DE MBEKOMO / A": [
            {
              station: "MBEKOMO",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE DE MEBANG / A": [
            {
              station: "MEBANG",
              voters: 97
            },
          ],
          "ECOLE PUBLIQUE DE MEKOK / A": [
            {
              station: "MEKOK",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE MELEN 2 / A": [
            {
              station: "NGO'AMBANG",
              voters: 57
            },
          ],
          "ECOLE PUBLIQUE DE MESSAMA 1 / A": [
            {
              station: "BINDEM",
              voters: 143
            },
            {
              station: "MESSAMA",
              voters: 293
            },
          ],
          "ECOLE PUBLIQUE DE METONDO / A": [
            {
              station: "MESSONDO",
              voters: 65
            },
            {
              station: "METONDO",
              voters: 65
            },
          ],
          "ECOLE PUBLIQUE DE MFANG / A": [
            {
              station: "MFANG",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE DE MFOUA / A": [
            {
              station: "MFOUA",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DE MINKAN / A": [
            {
              station: "MINKAN",
              voters: 33
            },
          ],
          "ECOLE PUBLIQUE DE MINKAN- MENGALE / A": [
            {
              station: "ZAMAYAT",
              voters: 264
            },
          ],
          "ECOLE PUBLIQUE DE MVI'ILIMENGALE / A": [
            {
              station: "MVI'ILIMENGALE",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE DE NKO'ONDO'O / A": [
            {
              station: "NKO'ONDO'O",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE DE NSENGOU / A": [
            {
              station: "NSENGOU",
              voters: 49
            },
          ],
          "ECOLE PUBLIQUE DE NSOMESSOK / A": [
            {
              station: "ANGALE",
              voters: 155
            },
            {
              station: "NSOMESSOK",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE DE NYABESSANG / A": [
            {
              station: "ABEM",
              voters: 555
            },
            {
              station: "NYABESSANG",
              voters: 489
            },
          ],
          "ECOLE PUBLIQUE DE TOM / A": [
            {
              station: "ASSENG",
              voters: 104
            },
            {
              station: "TOM",
              voters: 104
            },
          ],
          "ECOLE PUBLIQUE DE TYA'ASSONO / A": [
            {
              station: "MEKOMENGON",
              voters: 153
            },
            {
              station: "TYA'ASSONO",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE D\ANGALE / A": [
            {
              station: "NKOMO",
              voters: 70
            },
            {
              station: "OFET",
              voters: 70
            },
          ],
          "ECOLE PUBLIQUE D\EVOUMA / A": [
            {
              station: "EVOUMA",
              voters: 91
            },
          ],
          "LYCEE BILINGUE DE MEBEM / A": [
            {
              station: "MEBEM",
              voters: 198
            },
            {
              station: "CARREFOUR",
              voters: 132
            },
            {
              station: "LYCEE",
              voters: 66
            },
            {
              station: "BILINGUE",
              voters: 66
            },
            {
              station: "MVAM",
              voters: 66
            },
            {
              station: "ZAMBE",
              voters: 66
            },
          ],
        },
        "OLAMZE": {
          "CORPS DE GARDE D'OBANG / A": [
            {
              station: "OBANG",
              voters: 114
            },
          ],
          "CORPS DE GARDE D'OLAMZE VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 153
            },
          ],
          "CORPS DE GARDE D'OLANG AMVILA / A": [
            {
              station: "OLANG-AMVILA",
              voters: 260
            },
          ],
          "CORPS DE GARDE D'OLANG MFOUMOU / A": [
            {
              station: "OLANG",
              voters: 70
            },
            {
              station: "MFOUMOU",
              voters: 70
            },
          ],
          "CORPS DE GARDE D'OLANG-LAE / A": [
            {
              station: "OLANG-LAE",
              voters: 96
            },
          ],
          "CORPS DE GARDE DE BINDOM / A": [
            {
              station: "BINDOM",
              voters: 50
            },
          ],
          "CORPS DE GARDE DE BIYI / A": [
            {
              station: "BIYI",
              voters: 141
            },
          ],
          "CORPS DE GARDE DE MBANG / A": [
            {
              station: "MBANG",
              voters: 81
            },
          ],
          "CORPS DE GARDE DE MENGUET / A": [
            {
              station: "MENGUET",
              voters: 75
            },
          ],
          "CORPS DE GARDE DE MEYO NKOLAYAT / A": [
            {
              station: "MEYO-NKOLAYAT",
              voters: 145
            },
          ],
          "CORPS DE GARDE DE MINDJO-KOUMOU / A": [
            {
              station: "MINDJO-KOUMOU",
              voters: 121
            },
          ],
          "E.P. DE MEKA'AMINKOUMOU / A": [
            {
              station: "MBO'O",
              voters: 140
            },
            {
              station: "AYOP",
              voters: 140
            },
            {
              station: "MEKA'AMINKOUMOU",
              voters: 140
            },
            {
              station: "MEKA\AMINKOUMOU",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE D'ATA'ANTEM / A": [
            {
              station: "ATA'ANTEM",
              voters: 219
            },
          ],
          "ECOLE PUBLIQUE D'EMIANGON / A": [
            {
              station: "EMIANGON",
              voters: 88
            },
          ],
          "ECOLE PUBLIQUE D'ENGO-NLOZOK / A": [
            {
              station: "ENGO-NLOZOK",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE D'EYINANTOUM / A": [
            {
              station: "EYINANTOUM",
              voters: 121
            },
          ],
          "ECOLE PUBLIQUE D'OLAMZE CENTRE / A": [
            {
              station: "OLAMZE",
              voters: 1405
            },
            {
              station: "CENTRE",
              voters: 417
            },
            {
              station: "QUARTIER",
              voters: 835
            },
            {
              station: "ADMINISTRATIF",
              voters: 835
            },
          ],
          "ECOLE PUBLIQUE D'OLANG -CENTRE / A": [
            {
              station: "OLANG-CENTRE",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE DE MBE ETO / A": [
            {
              station: "MBE",
              voters: 210
            },
            {
              station: "ETO",
              voters: 210
            },
          ],
          "ECOLE PUBLIQUE DE MEKO'OSSI I / A": [
            {
              station: "MEKO'OSSI",
              voters: 713
            },
          ],
          "ECOLE PUBLIQUE DE MEKOMENGONA I / A": [
            {
              station: "MEKOMENGONA",
              voters: 353
            },
          ],
          "ECOLE PUBLIQUE DE MENGUIKOM / A": [
            {
              station: "MENGUIKOM",
              voters: 497
            },
          ],
          "ECOLE PUBLIQUE DE MEYO -CARREFOUR / A": [
            {
              station: "MEYO-CARREFOUR",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE YOS II / A": [
            {
              station: "YOS",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE MBEDOUMOU-SI / A": [
            {
              station: "AKA\A-",
              voters: 78
            },
            {
              station: "AKA\A-SI",
              voters: 78
            },
            {
              station: "CHEFFERIE",
              voters: 78
            },
            {
              station: "MBEDOUMOU-SI",
              voters: 156
            },
            {
              station: "ECOLE",
              voters: 78
            },
          ],
        },
      },
      "DJA-ET-LOBO": {
        "BENGBIS": {
          "CES MEKAS / A": [
            {
              station: "MEKAS",
              voters: 127
            },
          ],
          "CES NGONEBEME / A": [
            {
              station: "NGONEBEME",
              voters: 130
            },
          ],
          "CORPS DE GARDE AKAM II / A": [
            {
              station: "AKAM",
              voters: 522
            },
            {
              station: "OYEM",
              voters: 261
            },
          ],
          "CORPS DE GARDE ANDO'O / A": [
            {
              station: "ANDO'O",
              voters: 113
            },
          ],
          "CORPS DE GARDE BENGBIS II BANZOK / A": [
            {
              station: "ADJOLE",
              voters: 144
            },
            {
              station: "BENGBIS",
              voters: 1301
            },
            {
              station: "BANZOCK",
              voters: 144
            },
          ],
          "CORPS DE GARDE BENGBIS II CHEFFERIE / A": [
            {
              station: "CHEFFERIE",
              voters: 77
            },
          ],
          "CORPS DE GARDE BITON / A": [
            {
              station: "BITON",
              voters: 72
            },
          ],
          "CORPS DE GARDE CARREF. NGOUNAYOS / A": [
            {
              station: "NGOUNAYOS",
              voters: 152
            },
          ],
          "CORPS DE GARDE DOUMA / A": [
            {
              station: "DOUMA",
              voters: 101
            },
          ],
          "CORPS DE GARDE DOUMBAYAN / A": [
            {
              station: "DOUMBANYAN",
              voters: 31
            },
          ],
          "CORPS DE GARDE EBODOUMOU / A": [
            {
              station: "EBODOUMOU",
              voters: 105
            },
          ],
          "CORPS DE GARDE ENDAM / A": [
            {
              station: "ENDAM",
              voters: 89
            },
          ],
          "CORPS DE GARDE MEBA / A": [
            {
              station: "MEBA",
              voters: 61
            },
          ],
          "CORPS DE GARDE MEBOMO / A": [
            {
              station: "MEBOMO",
              voters: 58
            },
          ],
          "CORPS DE GARDE MEKA'A / A": [
            {
              station: "MEKA'A",
              voters: 457
            },
          ],
          "CORPS DE GARDE MEKA'A AKOE / A": [
            {
              station: "AKOE",
              voters: 94
            },
            {
              station: "YANDA",
              voters: 94
            },
          ],
          "CORPS DE GARDE MEKA'A YEKOMBO / A": [
            {
              station: "YEKOMBO",
              voters: 132
            },
          ],
          "CORPS DE GARDE MEKA'A YETYANG / A": [
            {
              station: "YETYANG",
              voters: 79
            },
          ],
          "CORPS DE GARDE MIMBANG / A": [
            {
              station: "MIMBANG",
              voters: 52
            },
          ],
          "CORPS DE GARDE NDOUNDOU / A": [
            {
              station: "NDOUNDOU",
              voters: 104
            },
          ],
          "CORPS DE GARDE NGOBISSONG / A": [
            {
              station: "NGOBISSONG",
              voters: 117
            },
          ],
          "CORPS DE GARDE NKOLMEKAE / A": [
            {
              station: "NKOLMEKAE",
              voters: 76
            },
          ],
          "CORPS DE GARDE NKOULAZE / A": [
            {
              station: "NKOULAZE",
              voters: 55
            },
          ],
          "CORPS DE GARDE ONGOLZOK / A": [
            {
              station: "ONGOLZOK",
              voters: 112
            },
          ],
          "CORPS DE GARDE YEME YEME II / A": [
            {
              station: "ALANGANA",
              voters: 85
            },
            {
              station: "YEME",
              voters: 170
            },
          ],
          "CORPS DE GARDE ZOUAMEYONG / A": [
            {
              station: "NGOMBO",
              voters: 70
            },
            {
              station: "ZOUAMEYONG",
              voters: 70
            },
          ],
          "EP ASSOK / A": [
            {
              station: "ASSOK",
              voters: 169
            },
          ],
          "EP BENGBIS-VILLE / A": [
            {
              station: "CENTRE",
              voters: 976
            },
            {
              station: "ADMINISTRATIF",
              voters: 976
            },
          ],
          "EP BIBINDA / A": [
            {
              station: "BIBINDA",
              voters: 180
            },
          ],
          "EP BISSOMBO / A": [
            {
              station: "BISSOMBO",
              voters: 65
            },
          ],
          "EP DJENG / A": [
            {
              station: "DJENG",
              voters: 160
            },
            {
              station: "ESSON",
              voters: 160
            },
          ],
          "EP EVINDISSI / A": [
            {
              station: "EVINDISSI",
              voters: 116
            },
            {
              station: "KAM",
              voters: 116
            },
          ],
          "EP KOUNGOULOU / A": [
            {
              station: "KOUNGOULOU",
              voters: 91
            },
          ],
          "EP MBOMETA'A / A": [
            {
              station: "MBOMETA'A",
              voters: 161
            },
          ],
          "EP MBOUN / A": [
            {
              station: "MBOUN",
              voters: 72
            },
          ],
          "EP MELONDO / A": [
            {
              station: "MELONDO",
              voters: 101
            },
          ],
          "EP MESSE / A": [
            {
              station: "MESSE",
              voters: 97
            },
          ],
          "EP MESSENG / A": [
            {
              station: "EWOT",
              voters: 86
            },
            {
              station: "MESSENG",
              voters: 86
            },
          ],
          "EP METOM / A": [
            {
              station: "METOM",
              voters: 137
            },
          ],
          "EP MIMBIL / A": [
            {
              station: "MIMBIL",
              voters: 141
            },
          ],
          "EP MINLA'A / A": [
            {
              station: "MINLA'A",
              voters: 144
            },
          ],
          "EP NKOLMBEMBE / A": [
            {
              station: "NKOLBEMBE",
              voters: 137
            },
            {
              station: "NSIMALEN",
              voters: 137
            },
          ],
          "EP NYANGBWASSA / A": [
            {
              station: "MELAN",
              voters: 178
            },
          ],
          "EP OLEMBE / A": [
            {
              station: "OLEMBE",
              voters: 105
            },
          ],
          "EP TENG / A": [
            {
              station: "EWOLOMBAMA",
              voters: 202
            },
            {
              station: "TENG",
              voters: 202
            },
          ],
          "EP TYIZOK / A": [
            {
              station: "TYIZOCK",
              voters: 76
            },
          ],
          "EP ZALENGANG / A": [
            {
              station: "ALLEN",
              voters: 80
            },
            {
              station: "ZALENGANG",
              voters: 80
            },
          ],
        },
        "DJOUM": {
          "ANCIEN MARCHE / A": [
            {
              station: "ADJAP",
              voters: 342
            },
          ],
          "CASE COM. MINKO'O MESSENG / A": [
            {
              station: "AKONETYE",
              voters: 87
            },
            {
              station: "MESSENG",
              voters: 87
            },
          ],
          "CASE COMMUNAUTAIRE ABOELONE / A": [
            {
              station: "ABOELONE",
              voters: 139
            },
          ],
          "CASE COMMUNAUTAIRE AMVAM / A": [
            {
              station: "AMVAM",
              voters: 85
            },
            {
              station: "OTTONGMBONG",
              voters: 85
            },
          ],
          "CASE COMMUNAUTAIRE AVOBENGON / A": [
            {
              station: "AVOBENGON",
              voters: 36
            },
          ],
          "CASE COMMUNAUTAIRE DJOP / A": [
            {
              station: "DJOP",
              voters: 137
            },
          ],
          "CASE COMMUNAUTAIRE MBOMELA / A": [
            {
              station: "MBOMELA",
              voters: 40
            },
          ],
          "CORPS DE GARDE ALOP / A": [
            {
              station: "ALOP",
              voters: 58
            },
          ],
          "CORPS DE GARDE DJOUZE / A": [
            {
              station: "DJOUZE",
              voters: 177
            },
          ],
          "CORPS DE GARDE DOUM / A": [
            {
              station: "DOUM",
              voters: 87
            },
          ],
          "CORPS DE GARDE ELLENG / A": [
            {
              station: "AKAK",
              voters: 137
            },
            {
              station: "ELLENG",
              voters: 340
            },
            {
              station: "MEYOS",
              voters: 260
            },
            {
              station: "OBAM",
              voters: 137
            },
          ],
          "CORPS DE GARDE MBOUMA / A": [
            {
              station: "MBOUMA",
              voters: 99
            },
          ],
          "CORPS DE GARDE MINKO'O / A": [
            {
              station: "MINKO'O",
              voters: 348
            },
          ],
          "CORPS DE GARDE NKO / A": [
            {
              station: "NKO",
              voters: 81
            },
          ],
          "CORPS DE GARDE OKPWENG / A": [
            {
              station: "OKPWENG",
              voters: 142
            },
          ],
          "CYBER MUNICIPAL / A": [
            {
              station: "KAKA",
              voters: 434
            },
            {
              station: "NEW-TOWN",
              voters: 434
            },
          ],
          "ECOLE CATHO ABING / A": [
            {
              station: "ABING",
              voters: 237
            },
            {
              station: "DJOUM",
              voters: 2123
            },
            {
              station: "VILLAGE",
              voters: 1416
            },
          ],
          "EM DJOUM VILLE / A": [
            {
              station: "VILLE",
              voters: 814
            },
          ],
          "EP AKOM ZAMANE / A": [
            {
              station: "ZAMANE",
              voters: 275
            },
          ],
          "EP AKONTANGAN / A": [
            {
              station: "AKONTANGAN",
              voters: 163
            },
          ],
          "EP AVEBE / A": [
            {
              station: "AVEBE",
              voters: 71
            },
          ],
          "EP BINDOUMBA / A": [
            {
              station: "ALAT",
              voters: 204
            },
            {
              station: "MEKAE",
              voters: 204
            },
            {
              station: "BINDOUMBA",
              voters: 204
            },
          ],
          "EP CIFAN / A": [
            {
              station: "CENTRE",
              voters: 1415
            },
            {
              station: "D'INSTRUCTION",
              voters: 601
            },
            {
              station: "NKAN",
              voters: 418
            },
          ],
          "EP EFOULAN / A": [
            {
              station: "EFOULAN",
              voters: 156
            },
            {
              station: "MENDOUNG",
              voters: 156
            },
          ],
          "EP ENDENGUE / A": [
            {
              station: "AKOM",
              voters: 390
            },
            {
              station: "BINYENG",
              voters: 188
            },
            {
              station: "ENDENGUE",
              voters: 330
            },
          ],
          "EP ESSONG / A": [
            {
              station: "ESSONG",
              voters: 131
            },
          ],
          "EP GROUPE III / A": [
            {
              station: "BITEBIOKANG",
              voters: 1577
            },
            {
              station: "LONO-YAT",
              voters: 1179
            },
          ],
          "EP MEBANE / A": [
            {
              station: "MEBANE",
              voters: 312
            },
          ],
          "EP MELLEN BOULOU / A": [
            {
              station: "MELLEN",
              voters: 223
            },
            {
              station: "BOULOU",
              voters: 150
            },
          ],
          "EP MEYOS III / A": [
            {
              station: "III",
              voters: 123
            },
          ],
          "EP MFEM / A": [
            {
              station: "AYENE",
              voters: 287
            },
            {
              station: "MFEM",
              voters: 287
            },
          ],
          "EP MIATTA / A": [
            {
              station: "MIATTA",
              voters: 200
            },
          ],
          "EP MVENG / A": [
            {
              station: "MVENG",
              voters: 255
            },
          ],
          "EP NKOLAFENDEK / A": [
            {
              station: "NKOLAFENDEK",
              voters: 191
            },
          ],
          "EP NKOLENYENG / A": [
            {
              station: "NKOLENYENG",
              voters: 183
            },
          ],
          "EP NYABIBETE / A": [
            {
              station: "NYABIBETE",
              voters: 124
            },
          ],
          "EP YEN / A": [
            {
              station: "YEN",
              voters: 312
            },
          ],
          "ESPLANADE CHEFFERIE HAOUSSA / A": [
            {
              station: "ACCRA",
              voters: 444
            },
            {
              station: "HAOUSSA",
              voters: 531
            },
          ],
          "FOYER CHANTIER CAMINEX / A": [
            {
              station: "SOCIETE",
              voters: 19
            },
            {
              station: "CAMINEX",
              voters: 19
            },
          ],
          "FOYER DU SOLDAT / A": [
            {
              station: "ETOILE",
              voters: 801
            },
          ],
          "FOYER SCIERIE / A": [
            {
              station: "SFID",
              voters: 106
            },
          ],
          "TRAVAUX PUBLICS / A": [
            {
              station: "EVINDI-SI",
              voters: 185
            },
          ],
        },
        "MEYOMESSI": {
          "ANGAT OLOUNOU / A": [
            {
              station: "OLOUNOU",
              voters: 259
            },
          ],
          "CENTRE DE SANTE INTEGRE D'AMVAN / A": [
            {
              station: "AMVAN",
              voters: 70
            },
          ],
          "CENTRE PRESCOLAIRE NGOM-EBAE / A": [
            {
              station: "NGOM-EBAE",
              voters: 159
            },
          ],
          "CORPS DE GARDE EMVIENG I / A": [
            {
              station: "EMVIENG",
              voters: 265
            },
          ],
          "CORPS DE GARDE MBIELEME / A": [
            {
              station: "MBIELEME",
              voters: 187
            },
          ],
          "CORPS DE GARDE MEKOK-NDONG / A": [
            {
              station: "MEKOK-NDONG",
              voters: 165
            },
          ],
          "CORPS DE GARDE MELAN-NDONG / A": [
            {
              station: "MELAN-NDONG",
              voters: 156
            },
          ],
          "CORPS DE GARDE MIMBANG / A": [
            {
              station: "MIMBANG",
              voters: 142
            },
          ],
          "CORPS DE GARDE MINKANG II / A": [
            {
              station: "CHEFFERIE",
              voters: 203
            },
          ],
          "EP AKOM-NDONG / A": [
            {
              station: "AKOM-NDONG",
              voters: 184
            },
          ],
          "EP AZEM-YEMFEK / A": [
            {
              station: "AZEM-YEMFEK",
              voters: 284
            },
          ],
          "EP BIKOULA / A": [
            {
              station: "BIKOULA",
              voters: 152
            },
          ],
          "EP ELOM / A": [
            {
              station: "ELOM",
              voters: 354
            },
          ],
          "EP ESSANGMVOUT / A": [
            {
              station: "ESSANGMVOUT",
              voters: 187
            },
          ],
          "EP ESSONG / A": [
            {
              station: "ESSONG-NDONG",
              voters: 74
            },
          ],
          "EP KONGO / A": [
            {
              station: "KONGO",
              voters: 330
            },
          ],
          "EP MBILEMVOM / A": [
            {
              station: "MBILEMVOM",
              voters: 162
            },
          ],
          "EP MEDJOUNOU / A": [
            {
              station: "MEDJOUNOU",
              voters: 220
            },
          ],
          "EP MELOK / A": [
            {
              station: "MELOK",
              voters: 146
            },
          ],
          "EP MESSOK / A": [
            {
              station: "MESSOK-NDONG",
              voters: 117
            },
          ],
          "EP MEYOMESSI / A": [
            {
              station: "MEYOMESSI",
              voters: 557
            },
          ],
          "EP MEYOS / A": [
            {
              station: "MEYOS",
              voters: 190
            },
          ],
          "EP MINKANG I / A": [
            {
              station: "MINKANG",
              voters: 429
            },
          ],
          "EP NDJELE / A": [
            {
              station: "NDJELE",
              voters: 52
            },
          ],
          "EP ODING / A": [
            {
              station: "ODING",
              voters: 91
            },
          ],
        },
        "MEYOMESSALA": {
          "BLOC ADMINISTRATIF SUDCAM I / A": [
            {
              station: "SDAIC",
              voters: 265
            },
            {
              station: "SUDCAM",
              voters: 1917
            },
          ],
          "CASE COMMUNAUTAIRE YOUS / A": [
            {
              station: "YOUS",
              voters: 68
            },
          ],
          "CENTRE COOP MEYOMAKOT / A": [
            {
              station: "KOUT",
              voters: 207
            },
            {
              station: "MEYOMAKOT",
              voters: 207
            },
          ],
          "CENTRE COOP NNEMEYONG III / A": [
            {
              station: "MEMVAE",
              voters: 287
            },
            {
              station: "MINTIMA",
              voters: 287
            },
            {
              station: "NNEMEYONG",
              voters: 766
            },
            {
              station: "III",
              voters: 560
            },
          ],
          "CENTRE DE SANTESUDCAM II / A": [
            {
              station: "VILLAGE",
              voters: 1417
            },
          ],
          "CES MEBAME / A": [
            {
              station: "MEBAME",
              voters: 156
            },
          ],
          "CETIC NDONKOL / A": [
            {
              station: "NDONKOL",
              voters: 166
            },
          ],
          "CORPS DE GARDE ALEN / A": [
            {
              station: "ALEN",
              voters: 189
            },
            {
              station: "BIKOKO",
              voters: 189
            },
          ],
          "CORPS DE GARDE BIBAS / A": [
            {
              station: "BIBAS",
              voters: 99
            },
          ],
          "CORPS DE GARDE BIDJONG / A": [
            {
              station: "CHEFFERIE",
              voters: 930
            },
            {
              station: "LIBI",
              voters: 443
            },
            {
              station: "SNEC",
              voters: 443
            },
          ],
          "CORPS DE GARDE EBOLAKOUNOU / A": [
            {
              station: "EBOLAKOUNOU",
              voters: 42
            },
          ],
          "CORPS DE GARDE EKONG / A": [
            {
              station: "EKONG",
              voters: 525
            },
          ],
          "CORPS DE GARDE ETON / A": [
            {
              station: "ETON",
              voters: 111
            },
            {
              station: "MEYOS",
              voters: 343
            },
            {
              station: "YETYANG",
              voters: 111
            },
          ],
          "CORPS DE GARDE MBANLAM / A": [
            {
              station: "MBANLAM",
              voters: 74
            },
          ],
          "CORPS DE GARDE MBE'ELON / A": [
            {
              station: "MBE'ELON",
              voters: 104
            },
          ],
          "CORPS DE GARDE MELOK II / A": [
            {
              station: "MELOK",
              voters: 374
            },
          ],
          "CORPS DE GARDE NKO'ONTONDA / A": [
            {
              station: "NKO'ONTONDA",
              voters: 67
            },
          ],
          "E.P. DE YEMFECK / A": [
            {
              station: "YEMFEK",
              voters: 874
            },
            {
              station: "YEM",
              voters: 334
            },
          ],
          "EP ANYOUNGAN / A": [
            {
              station: "ANYOUNGAN",
              voters: 205
            },
            {
              station: "ONGONGO'O",
              voters: 205
            },
          ],
          "EP BIBA YEZOUM / A": [
            {
              station: "BIBA",
              voters: 697
            },
            {
              station: "YEZOUM",
              voters: 157
            },
          ],
          "EP BIBOULEMAN / A": [
            {
              station: "BIBOULEMAM",
              voters: 165
            },
          ],
          "EP BIDJONG / A": [
            {
              station: "ANDOM",
              voters: 514
            },
            {
              station: "ANGAMBA",
              voters: 514
            },
            {
              station: "BIDJONG",
              voters: 1444
            },
            {
              station: "CARREFOUR",
              voters: 514
            },
          ],
          "EP BITYE / A": [
            {
              station: "BITYE",
              voters: 231
            },
          ],
          "EP BIYEBE / A": [
            {
              station: "BIYEBE",
              voters: 57
            },
            {
              station: "MENGOM",
              voters: 391
            },
          ],
          "EP EBEZOM / A": [
            {
              station: "BITEKBOE",
              voters: 251
            },
            {
              station: "EBEZOM",
              voters: 251
            },
            {
              station: "NKOLESSAS",
              voters: 251
            },
            {
              station: "NKOUT",
              voters: 251
            },
          ],
          "EP EDJOM / A": [
            {
              station: "AKOM",
              voters: 161
            },
            {
              station: "NDONG",
              voters: 161
            },
            {
              station: "EDJOM",
              voters: 161
            },
            {
              station: "NDJOM",
              voters: 418
            },
            {
              station: "YEKOMBO",
              voters: 418
            },
          ],
          "EP EFOULAN YASSAMAN / A": [
            {
              station: "BISSO'O",
              voters: 307
            },
            {
              station: "EFOULAN",
              voters: 895
            },
            {
              station: "YASSAMAN",
              voters: 193
            },
          ],
          "EP EKOK / A": [
            {
              station: "EKOK",
              voters: 130
            },
            {
              station: "MEKIN",
              voters: 595
            },
            {
              station: "MEKOMO",
              voters: 130
            },
          ],
          "EP ENDAM / A": [
            {
              station: "ENDAM",
              voters: 285
            },
            {
              station: "YEMBONG",
              voters: 285
            },
          ],
          "EP FIBOT-YEBENE / A": [
            {
              station: "FIBOT",
              voters: 61
            },
            {
              station: "YEBENE",
              voters: 61
            },
          ],
          "EP KOUM YETOTANE / A": [
            {
              station: "KOUM",
              voters: 575
            },
          ],
          "EP KPWE / A": [
            {
              station: "ELLE",
              voters: 316
            },
            {
              station: "KPWE",
              voters: 316
            },
          ],
          "EP MEKALAT / A": [
            {
              station: "ESSON",
              voters: 375
            },
            {
              station: "MEKALAT",
              voters: 198
            },
          ],
          "EP MESSOK / A": [
            {
              station: "MESSOK",
              voters: 359
            },
          ],
          "EP MEYOS YEMVAK / A": [
            {
              station: "YEMVAK",
              voters: 107
            },
          ],
          "EP MEZA'A I / A": [
            {
              station: "YEBAE",
              voters: 177
            },
            {
              station: "MEZA'A",
              voters: 354
            },
          ],
          "EP MIMBANG / A": [
            {
              station: "ESSONG",
              voters: 98
            },
            {
              station: "MIMBANG",
              voters: 98
            },
          ],
          "EP MVANBISSON / A": [
            {
              station: "MVANBISSON",
              voters: 179
            },
          ],
          "EP MVIA / A": [
            {
              station: "MVIA",
              voters: 243
            },
          ],
          "EP MVOMEKA'A / A": [
            {
              station: "MVOMEKA'A",
              voters: 2521
            },
          ],
          "EP NDJABEM / A": [
            {
              station: "YEMVAM",
              voters: 513
            },
            {
              station: "NDJABEM",
              voters: 125
            },
          ],
          "EP NDJIKOM / A": [
            {
              station: "EBANG",
              voters: 142
            },
            {
              station: "NDJIKOM",
              voters: 732
            },
          ],
          "EP NDJOM-YEKOMBO / A": [
            {
              station: "MELAN",
              voters: 257
            },
          ],
          "EP NKO / A": [
            {
              station: "AKOK",
              voters: 325
            },
            {
              station: "MINKO",
              voters: 418
            },
            {
              station: "NKO",
              voters: 325
            },
          ],
          "EP NKOLEBO'O / A": [
            {
              station: "NKOLEBO'O",
              voters: 225
            },
            {
              station: "NKOLENDAM",
              voters: 225
            },
          ],
          "EP NKOMO / A": [
            {
              station: "NKOLESSAM",
              voters: 240
            },
            {
              station: "NKOMO",
              voters: 240
            },
          ],
          "EP NKONGMEKAK / A": [
            {
              station: "NGOUNDOU",
              voters: 289
            },
            {
              station: "NKONGMEKAK",
              voters: 289
            },
            {
              station: "OVENG-SI",
              voters: 289
            },
          ],
          "EP NLOBESSE'E / A": [
            {
              station: "NLOBESSE'E",
              voters: 353
            },
          ],
          "EP NYE'ELE / A": [
            {
              station: "NYE'ELE",
              voters: 1045
            },
          ],
          "EP OYOP / A": [
            {
              station: "LOUM",
              voters: 128
            },
            {
              station: "OYOP",
              voters: 128
            },
          ],
          "EP TATCHING I / A": [
            {
              station: "TATCHING",
              voters: 608
            },
          ],
          "EP TEKMO II / A": [
            {
              station: "OLONG",
              voters: 177
            },
            {
              station: "TEKMO",
              voters: 878
            },
          ],
          "EP ZOUMEYO / A": [
            {
              station: "MESSILA",
              voters: 129
            },
            {
              station: "ZOUMEYO",
              voters: 129
            },
          ],
          "ESPL. MARCHENKOLDJA / A": [
            {
              station: "NKOLDJA",
              voters: 178
            },
          ],
          "LYCEE TECH. MEYOMESSALA / A": [
            {
              station: "CAMP",
              voters: 1585
            },
            {
              station: "SONEL",
              voters: 1585
            },
            {
              station: "CENTRE",
              voters: 1585
            },
            {
              station: "SOCIAL",
              voters: 1585
            },
            {
              station: "EKOUK",
              voters: 1585
            },
            {
              station: "MEYOMESSALA",
              voters: 2072
            },
            {
              station: "NGAT",
              voters: 1585
            },
          ],
          "MARCHE DE MINKO / A": [
            {
              station: "NKAE",
              voters: 93
            },
          ],
          "MISSION CATHOLIQUE MENGON / A": [
            {
              station: "MENGON",
              voters: 263
            },
          ],
          "NOVAPALM FOYER / A": [
            {
              station: "NOVAPALM",
              voters: 176
            },
          ],
          "SAR SM MVOMEKA'A / A": [
            {
              station: "NGOASSE",
              voters: 1194
            },
          ],
        },
        "MINTOM": {
          "CENTRE PRESCOLAIRE ZOULABOT / A": [
            {
              station: "ZOULABOT",
              voters: 297
            },
          ],
          "CORPS DE GARDE BITE / A": [
            {
              station: "BITE",
              voters: 463
            },
          ],
          "CORPS DE GARDE ESSENG / A": [
            {
              station: "ESSENG",
              voters: 51
            },
          ],
          "CORPS DE GARDE NOAH AKOM II / A": [
            {
              station: "BELLE",
              voters: 189
            },
            {
              station: "VILLE",
              voters: 189
            },
            {
              station: "EKOMBITE",
              voters: 136
            },
          ],
          "EP AKOM / A": [
            {
              station: "AKOM",
              voters: 210
            },
          ],
          "EP ALATI / A": [
            {
              station: "ALATI",
              voters: 77
            },
          ],
          "EP BINDOM / A": [
            {
              station: "BINDOM",
              voters: 128
            },
            {
              station: "DOUM",
              voters: 128
            },
          ],
          "EP DU CENTRE MINTOM II / A": [
            {
              station: "MEYIBOTO",
              voters: 345
            },
            {
              station: "MINTOM",
              voters: 1059
            },
          ],
          "EP KOUNGOULOU / A": [
            {
              station: "KOUNGOULOU",
              voters: 119
            },
            {
              station: "ZO'OTOU",
              voters: 161
            },
          ],
          "EP LELE / A": [
            {
              station: "LELE",
              voters: 156
            },
            {
              station: "NKOLFONG",
              voters: 314
            },
          ],
          "EP MBOUT-OKONG / A": [
            {
              station: "MBOUT-OKONG",
              voters: 215
            },
          ],
          "EP MEKOM / A": [
            {
              station: "MEKOM",
              voters: 53
            },
          ],
          "EP MEKOTTO / A": [
            {
              station: "MEKOTTO",
              voters: 156
            },
          ],
          "EP NKOLMBOULA / A": [
            {
              station: "NKOLMBOULA",
              voters: 79
            },
            {
              station: "ZOULAMEYONG",
              voters: 327
            },
          ],
          "EP ZOEBEFAM / A": [
            {
              station: "NKOLEFIAL",
              voters: 248
            },
            {
              station: "ZOEBEFAM",
              voters: 200
            },
          ],
          "FOYER AKONETYE / A": [
            {
              station: "AKONETYE",
              voters: 55
            },
            {
              station: "MENGOM",
              voters: 201
            },
            {
              station: "SAKE",
              voters: 201
            },
          ],
          "FOYER NKOLKOUMOU / A": [
            {
              station: "NKOLKOUMOU",
              voters: 113
            },
          ],
          "LYCEE MINTOM CENTRE / A": [
            {
              station: "CENTRE",
              voters: 592
            },
          ],
        },
        "OVENG": {
          "CORPS DE GARDE AKOM / A": [
            {
              station: "AKOM",
              voters: 139
            },
            {
              station: "EPC",
              voters: 139
            },
          ],
          "CORPS DE GARDE DE BIKOUGOU / A": [
            {
              station: "CORPS",
              voters: 35
            },
            {
              station: "GARDE",
              voters: 35
            },
          ],
          "CORPS DE GARDE EBOMANE / A": [
            {
              station: "EBOMANE",
              voters: 62
            },
            {
              station: "ENDONE",
              voters: 62
            },
          ],
          "CORPS DE GARDE EKOWONG / A": [
            {
              station: "EKOWONG",
              voters: 123
            },
          ],
          "CORPS DE GARDE ESSAM / A": [
            {
              station: "ESSAM",
              voters: 41
            },
          ],
          "CORPS DE GARDE MEBASSA / A": [
            {
              station: "MEBASSA",
              voters: 98
            },
          ],
          "CORPS DE GARDE MVAM I / A": [
            {
              station: "MVAM",
              voters: 251
            },
          ],
          "CORPS DE GARDE NKOLMESSAS / A": [
            {
              station: "MBEDOUM",
              voters: 177
            },
            {
              station: "NKOLMESSAS",
              voters: 177
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE OVENG / A": [
            {
              station: "LALALA",
              voters: 174
            },
            {
              station: "MISSION",
              voters: 348
            },
            {
              station: "CATHOLIQUE",
              voters: 174
            },
            {
              station: "OVENG",
              voters: 483
            },
            {
              station: "CATH",
              voters: 174
            },
          ],
          "EM AKOM (NKO'ETENG) / A": [
            {
              station: "NKO'ETENG",
              voters: 183
            },
          ],
          "EP ABECK / A": [
            {
              station: "ABECK",
              voters: 104
            },
          ],
          "EP ABOULOU VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 76
            },
          ],
          "EP ADJAP / A": [
            {
              station: "ADJAP",
              voters: 72
            },
          ],
          "EP AKOABAS / A": [
            {
              station: "AKOABAS",
              voters: 210
            },
          ],
          "EP ANDOUNG / A": [
            {
              station: "ANDOUNG",
              voters: 93
            },
          ],
          "EP BITCHE / A": [
            {
              station: "BIKOUGOU",
              voters: 181
            },
            {
              station: "BITCHE",
              voters: 111
            },
          ],
          "EP MEBANG / A": [
            {
              station: "MEBANG",
              voters: 120
            },
          ],
          "EP MEDJENG / A": [
            {
              station: "MEDJENG",
              voters: 162
            },
          ],
          "EP NDJA / A": [
            {
              station: "NDJA",
              voters: 125
            },
          ],
          "EP NGBWASSA / A": [
            {
              station: "NGBWASSA",
              voters: 124
            },
          ],
          "EP NGOUDJEN / A": [
            {
              station: "NGOUDJEN",
              voters: 123
            },
          ],
          "EP NKONO / A": [
            {
              station: "NKONO",
              voters: 113
            },
          ],
          "EP ONON / A": [
            {
              station: "ONON",
              voters: 216
            },
          ],
          "EP OVENG CENTRE CHEFFERIE / A": [
            {
              station: "CENTRE",
              voters: 309
            },
          ],
          "EPC ANYOUNGOM / A": [
            {
              station: "ANYOUNGOM",
              voters: 49
            },
          ],
          "EPC BIFOT / A": [
            {
              station: "BIFOT",
              voters: 70
            },
          ],
          "EPC ESSAMENKOU / A": [
            {
              station: "ESSAMENKOU",
              voters: 58
            },
          ],
          "MAIRIE / A": [
            {
              station: "BONO-SI",
              voters: 156
            },
          ],
          "POSTE DE POLICE ABOULOU FRONTIERE / A": [
            {
              station: "ABOULOU",
              voters: 266
            },
            {
              station: "FRONTIERE",
              voters: 190
            },
          ],
          "SOUS-PREFECTURE / A": [
            {
              station: "SOUS-PREFECTURE",
              voters: 130
            },
          ],
          "TELECENTRE OVENG / A": [
            {
              station: "GENDARMERIE",
              voters: 75
            },
          ],
        },
        "SANGMELIMA": {
          "ANTENNE CRTV / A": [
            {
              station: "SOURCES",
              voters: 332
            },
          ],
          "BATIMENT ELEVAGE NKOLNGUET / A": [
            {
              station: "NKOLNGUET",
              voters: 860
            },
          ],
          "CES NKOLOTOU' OUTOU / A": [
            {
              station: "NKOLEBOM",
              voters: 213
            },
          ],
          "CODJAL / A": [
            {
              station: "COMMERCIAL",
              voters: 506
            },
          ],
          "COLLEGE KISITO / A": [
            {
              station: "LOBO-SI",
              voters: 1782
            },
          ],
          "CORPS DE GARDE AKO'O ESSE / A": [
            {
              station: "AKO'O-ESSE",
              voters: 62
            },
          ],
          "CORPS DE GARDE AKO'O LUI / A": [
            {
              station: "AKO'O",
              voters: 107
            },
            {
              station: "LUI",
              voters: 107
            },
          ],
          "CORPS DE GARDE EFOULAN-YEMVAK / A": [
            {
              station: "EFOULAN",
              voters: 83
            },
            {
              station: "YEMVAK",
              voters: 266
            },
          ],
          "CORPS DE GARDE MEKOMO YENDAM / A": [
            {
              station: "MEKOMO",
              voters: 201
            },
            {
              station: "YENDAM",
              voters: 114
            },
          ],
          "CORPS DE GARDE MFOULOVENG / A": [
            {
              station: "MFOULOVENG",
              voters: 90
            },
          ],
          "CORPS DE GARDE NGOMEYOP / A": [
            {
              station: "NGOMEYOP",
              voters: 90
            },
            {
              station: "NKOETYE",
              voters: 90
            },
          ],
          "CORPS DE GARDE ZOEBEFAM / A": [
            {
              station: "ZOEBEFAM",
              voters: 65
            },
          ],
          "CORPS DE GARDE ZOUM / A": [
            {
              station: "ZOUM",
              voters: 225
            },
          ],
          "DISPENSAIRE MONEKO'O / A": [
            {
              station: "MONEKO'O",
              voters: 268
            },
          ],
          "DISPENSAIRE NDJOM ESSAMAN / A": [
            {
              station: "NDJOM",
              voters: 199
            },
          ],
          "ECOLE ANNEXE DE SANGMELIMA GI / A": [
            {
              station: "CENTRE",
              voters: 1409
            },
            {
              station: "ADMINISTRATIF",
              voters: 903
            },
          ],
          "ECOLE ANNEXE HOPITAL / A": [
            {
              station: "BASE",
              voters: 694
            },
          ],
          "ECOLE BILINGUE DE SANGMELIMA / A": [
            {
              station: "NYLON",
              voters: 1013
            },
          ],
          "ECOLE CATHO ST JOSEPH / A": [
            {
              station: "BRIQUETERIE",
              voters: 751
            },
            {
              station: "SANGMELIMA",
              voters: 6579
            },
            {
              station: "VILLAGE",
              voters: 6579
            },
          ],
          "ECOLE MATERNELLE 7E RUE / A": [
            {
              station: "III",
              voters: 1287
            },
          ],
          "EM BIBOULEMAM / A": [
            {
              station: "BIBOULEMAM",
              voters: 110
            },
          ],
          "EM LA ROSEE DU SUD / A": [
            {
              station: "AKON",
              voters: 7324
            },
            {
              station: "BISSONO",
              voters: 3346
            },
            {
              station: "GENDARMERIE",
              voters: 2437
            },
          ],
          "ENIEG / A": [
            {
              station: "MBELI'I",
              voters: 620
            },
          ],
          "EP AKAK ESSE / A": [
            {
              station: "AKAK-ESSE",
              voters: 138
            },
          ],
          "EP AKOMENDIBI / A": [
            {
              station: "AKOMENDIBI",
              voters: 198
            },
          ],
          "EP AKOMESSING / A": [
            {
              station: "AKOMESSING",
              voters: 335
            },
          ],
          "EP ALOUMA YEKOMBO / A": [
            {
              station: "ALOUMA",
              voters: 382
            },
            {
              station: "YEKOMBO",
              voters: 538
            },
          ],
          "EP ASSOK YEMVENG / A": [
            {
              station: "ASSOK-YEMVENG",
              voters: 399
            },
          ],
          "EP ASSOK-YEMVENG / A": [
            {
              station: "YEMVENG",
              voters: 342
            },
          ],
          "EP AVEBE ESSE / A": [
            {
              station: "AVEBE",
              voters: 602
            },
            {
              station: "ESSE",
              voters: 539
            },
          ],
          "EP BENYOUNGOU / A": [
            {
              station: "BENYOUNGOU",
              voters: 158
            },
          ],
          "EP BIDJOM / A": [
            {
              station: "BIDJOM",
              voters: 260
            },
            {
              station: "MANG",
              voters: 260
            },
          ],
          "EP BIKOBO ESSAMAN / A": [
            {
              station: "BIKOBO",
              voters: 267
            },
            {
              station: "ESSAMAN",
              voters: 466
            },
          ],
          "EP BINGOU / A": [
            {
              station: "ANGONGUE",
              voters: 159
            },
            {
              station: "BINGOU",
              voters: 159
            },
          ],
          "EP BISSONO / A": [
            {
              station: "EPCO",
              voters: 909
            },
          ],
          "EP BIZANG / A": [
            {
              station: "BIZANG",
              voters: 56
            },
          ],
          "EP DE MEKA'A / A": [
            {
              station: "MEKA'A",
              voters: 284
            },
          ],
          "EP EBOLENGBWANG / A": [
            {
              station: "EBOLENGBWANG",
              voters: 2128
            },
          ],
          "EP EMINEMVOM / A": [
            {
              station: "EKOUMEDOUM",
              voters: 379
            },
            {
              station: "EMINEMVOM",
              voters: 449
            },
          ],
          "EP ESSAM-ESSE / A": [
            {
              station: "ESSAM-ESSE",
              voters: 112
            },
          ],
          "EP EVELESSI I / A": [
            {
              station: "EVELESSI",
              voters: 319
            },
          ],
          "EP EVINDISSI I / A": [
            {
              station: "EVINDISSI",
              voters: 323
            },
          ],
          "EP EYE'E / A": [
            {
              station: "YETOK",
              voters: 200
            },
            {
              station: "EYE'E",
              voters: 200
            },
          ],
          "EP KAMELON / A": [
            {
              station: "KAMELON",
              voters: 220
            },
          ],
          "EP KEKA / A": [
            {
              station: "KEKA",
              voters: 176
            },
          ],
          "EP KOMBE / A": [
            {
              station: "KOMBE",
              voters: 254
            },
          ],
          "EP KOUM ESSE / A": [
            {
              station: "KOUM",
              voters: 206
            },
          ],
          "EP MA'ANMENYIN / A": [
            {
              station: "MA'ANMENYIN",
              voters: 111
            },
          ],
          "EP MBOM / A": [
            {
              station: "MBOM",
              voters: 229
            },
          ],
          "EP MEBEM / A": [
            {
              station: "MEBEM",
              voters: 148
            },
          ],
          "EP MEKAM / A": [
            {
              station: "MEKAM",
              voters: 180
            },
          ],
          "EP MEKOM I / A": [
            {
              station: "MEKOM",
              voters: 228
            },
          ],
          "EP MELEN / A": [
            {
              station: "MELEN",
              voters: 127
            },
          ],
          "EP MENGUE / A": [
            {
              station: "MENGUE",
              voters: 162
            },
            {
              station: "MESSAK",
              voters: 304
            },
          ],
          "EP MEPHO / A": [
            {
              station: "MEPHO",
              voters: 295
            },
          ],
          "EP METET / A": [
            {
              station: "METET",
              voters: 160
            },
          ],
          "EP MEYO-ESSE / A": [
            {
              station: "MEYO-ESSE",
              voters: 140
            },
          ],
          "EP MEYOMADJOM / A": [
            {
              station: "MEYOMADJOM",
              voters: 364
            },
          ],
          "EP MEYOS ESSABIKOULA / A": [
            {
              station: "MEYOS",
              voters: 384
            },
            {
              station: "ESSABIKOULA",
              voters: 292
            },
          ],
          "EP MEZESSE / A": [
            {
              station: "MEZESSE",
              voters: 230
            },
          ],
          "EP MINKPWAEMIOVENG / A": [
            {
              station: "MINKPWAEMIOVENG",
              voters: 121
            },
          ],
          "EP MINTYAEMINYUMIN / A": [
            {
              station: "MINTYAEMINYUMIN",
              voters: 511
            },
          ],
          "EP NDJANTOM / A": [
            {
              station: "NDJANTOM",
              voters: 388
            },
          ],
          "EP NDJOM-YEMVAK / A": [
            {
              station: "NDJOM-YEMVAK",
              voters: 130
            },
          ],
          "EP NGAM YEMBONG / A": [
            {
              station: "NGAM",
              voters: 739
            },
            {
              station: "YEMBONG",
              voters: 444
            },
          ],
          "EP NGOULEMEKONG / A": [
            {
              station: "NGOULEMEKONG",
              voters: 355
            },
          ],
          "EP NKOLEWOT / A": [
            {
              station: "NKOLEWOT",
              voters: 101
            },
          ],
          "EP NKOLEYOP / A": [
            {
              station: "NKOLEYOP",
              voters: 164
            },
            {
              station: "ONDONDO",
              voters: 164
            },
          ],
          "EP NKOLNGBWA / A": [
            {
              station: "NKOLNGBWA",
              voters: 123
            },
          ],
          "EP NKOLOTOU'OUTOU / A": [
            {
              station: "MFOULADJA",
              voters: 66
            },
            {
              station: "NGOM",
              voters: 66
            },
            {
              station: "NKOLOTOU'OUTOU",
              voters: 279
            },
          ],
          "EP NKOUT II / A": [
            {
              station: "NKOUT",
              voters: 92
            },
          ],
          "EP NKPWANG / A": [
            {
              station: "NKPWANG",
              voters: 510
            },
          ],
          "EP NLOUP / A": [
            {
              station: "MIMBO",
              voters: 344
            },
            {
              station: "NLOUP",
              voters: 344
            },
          ],
          "EP NYAZANGA / A": [
            {
              station: "NYAZANGA",
              voters: 138
            },
          ],
          "EP OVENG YEMBONG / A": [
            {
              station: "OVENG",
              voters: 230
            },
          ],
          "EP OVENG-YEMEVONG / A": [
            {
              station: "OVENG-YEMEVONG",
              voters: 132
            },
          ],
          "EP PLATEAU CHIC / A": [
            {
              station: "PLATEAU",
              voters: 802
            },
            {
              station: "CHIC",
              voters: 802
            },
          ],
          "EP ZOUAMEYONG / A": [
            {
              station: "ZOUAMEYONG",
              voters: 110
            },
          ],
          "ETA MONAVEBE / A": [
            {
              station: "MONAVEBE",
              voters: 1213
            },
          ],
          "FOYER FERUDJAL / A": [
            {
              station: "MINKONGO",
              voters: 556
            },
          ],
          "HANGAR EKOUMEDOUM / A": [
            {
              station: "EKOUMDOUM",
              voters: 70
            },
          ],
          "SALLE DE FETE ATONG / A": [
            {
              station: "ATONG",
              voters: 151
            },
          ],
          "SALLE DE FETE KONDEMEYOS / A": [
            {
              station: "KONDEMEYOS",
              voters: 170
            },
          ],
          "SALLE DE FETE KONDEYEBAE / A": [
            {
              station: "KONDEYEBAE",
              voters: 157
            },
          ],
          "SALLE DE FETE MENDONG / A": [
            {
              station: "MENDONG",
              voters: 100
            },
          ],
          "SALLE DE FETE NGON / A": [
            {
              station: "NGON",
              voters: 154
            },
          ],
          "SALLE DE FETE NSIMALENE I / A": [
            {
              station: "NSIMALENE",
              voters: 172
            },
          ],
          "STADE MUNICIPAL / A": [
            {
              station: "STADE",
              voters: 721
            },
          ],
        },
        "ZOETELE": {
          "CES NKILZOK / A": [
            {
              station: "NKILZOK",
              voters: 705
            },
          ],
          "CORPS DE GARDE ADJAP / A": [
            {
              station: "ADJAP",
              voters: 64
            },
          ],
          "CORPS DE GARDE BIYAN-CARREFOUR / A": [
            {
              station: "BIYAN",
              voters: 241
            },
          ],
          "CORPS DE GARDE ENAMENGAL / A": [
            {
              station: "ENAMENGAL",
              voters: 82
            },
          ],
          "CORPS DE GARDE ENGOUTOUK / A": [
            {
              station: "ENGOUTOUK",
              voters: 308
            },
          ],
          "CORPS DE GARDE ESSA / A": [
            {
              station: "ESSA",
              voters: 156
            },
          ],
          "CORPS DE GARDE ETOTO / A": [
            {
              station: "ETOTO",
              voters: 289
            },
          ],
          "CORPS DE GARDE KONDEBILONG / A": [
            {
              station: "KONDEBILONG",
              voters: 196
            },
          ],
          "CORPS DE GARDE KONDEBIYEN / A": [
            {
              station: "KONDEBIYEN",
              voters: 70
            },
          ],
          "CORPS DE GARDE MEKAK / A": [
            {
              station: "MEKAK",
              voters: 125
            },
          ],
          "CORPS DE GARDE MELOMEBAE CENTRE / A": [
            {
              station: "MELOMEBAE",
              voters: 229
            },
          ],
          "CORPS DE GARDE MEYIBOTO / A": [
            {
              station: "MEYIBOTO",
              voters: 141
            },
          ],
          "CORPS DE GARDE NDELE / A": [
            {
              station: "NDELE",
              voters: 232
            },
          ],
          "CORPS DE GARDE NEW TOWN-ZOETELE / A": [
            {
              station: "NEW",
              voters: 333
            },
            {
              station: "TOWN",
              voters: 333
            },
          ],
          "CORPS DE GARDE NGOLBANG / A": [
            {
              station: "NGOLBANG",
              voters: 248
            },
          ],
          "CORPS DE GARDE NKOLASSOK / A": [
            {
              station: "NKOLASSOK",
              voters: 124
            },
          ],
          "CORPS DE GARDE NKOLFITI / A": [
            {
              station: "NKOLFITI",
              voters: 171
            },
          ],
          "CORPS DE GARDE NKOLFONG / A": [
            {
              station: "NKOLFONG",
              voters: 332
            },
          ],
          "CORPS DE GARDE NNEMEYONG / A": [
            {
              station: "NNEMEYONG",
              voters: 52
            },
          ],
          "CORPS DE GARDE NYABIBETE / A": [
            {
              station: "MEYILA",
              voters: 727
            },
          ],
          "CORPS DE GARDE OLOUNOU / A": [
            {
              station: "OLOUNOU",
              voters: 93
            },
          ],
          "CORPS DE GARDE OTETEK / A": [
            {
              station: "OTETEK",
              voters: 341
            },
          ],
          "CORPS DE GARDE OVENG-NKOLASSOK / A": [
            {
              station: "OVENG",
              voters: 244
            },
          ],
          "CORPS DE GARDE ZOETELE VILLAGE I / A": [
            {
              station: "ZOETELE",
              voters: 725
            },
            {
              station: "VILLAGE",
              voters: 725
            },
          ],
          "ECOLE MATERNELLE ZOETELE / A": [
            {
              station: "PLATEAU",
              voters: 1517
            },
          ],
          "ECOLE PUBLIQUE ENYENG / A": [
            {
              station: "ENYENG",
              voters: 132
            },
          ],
          "EP ABANGOK / A": [
            {
              station: "ABANGOK",
              voters: 271
            },
          ],
          "EP AKOK / A": [
            {
              station: "AKOK",
              voters: 183
            },
          ],
          "EP AWOUT / A": [
            {
              station: "AWOUT",
              voters: 198
            },
          ],
          "EP BIBE / A": [
            {
              station: "BIBE",
              voters: 70
            },
          ],
          "EP BIBOULEMAM / A": [
            {
              station: "BIBOULEMAM",
              voters: 94
            },
          ],
          "EP BINDOUMBA / A": [
            {
              station: "BINDOUMBA",
              voters: 99
            },
          ],
          "EP EBAMINA I / A": [
            {
              station: "EBAMINA",
              voters: 631
            },
          ],
          "EP EKOMBITE / A": [
            {
              station: "EKOMBITE",
              voters: 179
            },
          ],
          "EP ELAND-NORD / A": [
            {
              station: "NKOUMADJAP",
              voters: 727
            },
          ],
          "EP FIBOT / A": [
            {
              station: "FIBOT",
              voters: 456
            },
          ],
          "EP KONDEMEYOS / A": [
            {
              station: "KONDEMEYOS",
              voters: 100
            },
          ],
          "EP MBEDOUMOU / A": [
            {
              station: "MBEDOUMOU",
              voters: 107
            },
          ],
          "EP MEBA / A": [
            {
              station: "MEBA",
              voters: 408
            },
          ],
          "EP MENGBWA / A": [
            {
              station: "MENGBWA",
              voters: 227
            },
          ],
          "EP MESSAM / A": [
            {
              station: "MESSAM",
              voters: 231
            },
          ],
          "EP MESSOK / A": [
            {
              station: "MESSOK",
              voters: 117
            },
          ],
          "EP MINKOUMOU / A": [
            {
              station: "MINKOUMOU",
              voters: 161
            },
          ],
          "EP MVOUTESSI I / A": [
            {
              station: "MVOUTESSI",
              voters: 689
            },
          ],
          "EP NGOMEDJAP / A": [
            {
              station: "NGOMEDJAP",
              voters: 164
            },
          ],
          "EP NGOUNGOUMOU I / A": [
            {
              station: "NGOUNGOUMOU",
              voters: 288
            },
          ],
          "EP NGOUNGOUMOU II CENTRE / A": [
            {
              station: "CENTRE",
              voters: 137
            },
          ],
          "EP NKOLBANG / A": [
            {
              station: "NKOLBANG",
              voters: 222
            },
          ],
          "EP NKOUMADJAP III / A": [
            {
              station: "III",
              voters: 132
            },
          ],
          "EP NSIMI-CARREFOUR / A": [
            {
              station: "NSIMI",
              voters: 294
            },
          ],
          "EP WOABETE / A": [
            {
              station: "WOABETE",
              voters: 198
            },
          ],
          "EP YEM-NKILZOK / A": [
            {
              station: "YEM",
              voters: 310
            },
          ],
          "MAIRIE DE ZOETELE / A": [
            {
              station: "LAC",
              voters: 452
            },
          ],
        },
      },
      "MVILA": {
        "BIWONG-BANE": {
          "CASE A PALABRE D' ADJAP-MVOG-EDA / A": [
            {
              station: "ADJAP-MVOG-EDA",
              voters: 351
            },
            {
              station: "YEM",
              voters: 522
            },
          ],
          "CASE A PALABRE D' ATING-BANE / A": [
            {
              station: "ATING-BANE",
              voters: 62
            },
          ],
          "CASE A PALABRE D'ADJAP-MENYIE / A": [
            {
              station: "ADJAP-MENYIE",
              voters: 50
            },
          ],
          "CASE A PALABRE D'AKIAE / A": [
            {
              station: "AKIAE",
              voters: 73
            },
          ],
          "CASE A PALABRE D'EFOUMLOU-NSELEK / A": [
            {
              station: "EFOUMLOU-NSELEK",
              voters: 47
            },
          ],
          "CASE A PALABRE D'OVENG-BANE / A": [
            {
              station: "ABIERE",
              voters: 182
            },
            {
              station: "OVENGE-BANE",
              voters: 182
            },
          ],
          "CASE A PALABRE D'OVENG-FONG / A": [
            {
              station: "OVENG-FONG",
              voters: 175
            },
          ],
          "CASE A PALABRE DE NKOLONYIE / A": [
            {
              station: "NKOLONYIE",
              voters: 242
            },
          ],
          "CASE A PALABRE METET / A": [
            {
              station: "METET",
              voters: 210
            },
          ],
          "CASE A PALABRE OBANG I / A": [
            {
              station: "OBANG",
              voters: 42
            },
          ],
          "ECOLE CATHOLIQUE D'OFOUMBI / A": [
            {
              station: "OFOUMBI",
              voters: 109
            },
          ],
          "ECOLE CATHOLIQUE DE MINKANE / A": [
            {
              station: "MINKANE",
              voters: 160
            },
          ],
          "ECOLE FAMILIALE D'AGRICULTURE  NDZOM-BANE / A": [
            {
              station: "NDZOM-BANE",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE D'ADJAP-FONG / A": [
            {
              station: "ADJAP-FONG",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE D'EBEMEVOMAN I / A": [
            {
              station: "EBEMEWOMAN",
              voters: 252
            },
          ],
          "ECOLE PUBLIQUE DE KAMA / A": [
            {
              station: "KAMA",
              voters: 378
            },
          ],
          "ECOLE PUBLIQUE DE MA'ANMENYIN / A": [
            {
              station: "MA'ANMENYIN",
              voters: 298
            },
          ],
          "ECOLE PUBLIQUE DE MELANGUE III / A": [
            {
              station: "III",
              voters: 166
            },
          ],
          "ECOLE PUBLIQUE DE NGOAEKELE / A": [
            {
              station: "NGOAEKELE",
              voters: 167
            },
          ],
          "ECOLE PUBLIQUE DE NKOEMVONE / A": [
            {
              station: "NKOEMVONE",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE DE NKOLAMOUGOU / A": [
            {
              station: "NKOLAMOUGOU",
              voters: 157
            },
          ],
          "ECOLE PUBLIQUE DE NKOLNKENG / A": [
            {
              station: "NKOLNKENG",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE DE NYAZOA / A": [
            {
              station: "NYAZOA",
              voters: 79
            },
          ],
          "ECOLE PUBLIQUE DE NYEP-BANE / A": [
            {
              station: "NYEP-BANE",
              voters: 205
            },
          ],
          "LYCEE BIWONG CENTRE / A": [
            {
              station: "BIWONG",
              voters: 687
            },
            {
              station: "CENTRE",
              voters: 687
            },
          ],
          "LYCEE MELANGUE I / A": [
            {
              station: "MELANGUE",
              voters: 555
            },
          ],
          "LYCEE NGOAZIP I / A": [
            {
              station: "NGOAZIP",
              voters: 589
            },
          ],
        },
        "BIWONG-BULU": {
          "DISPENSAIRE EBE / A": [
            {
              station: "EBE",
              voters: 75
            },
          ],
          "E.P. ABIETE / A": [
            {
              station: "ABIETE",
              voters: 482
            },
            {
              station: "NKONE",
              voters: 482
            },
          ],
          "ECOLE MATERNELLE D'AKOM / A": [
            {
              station: "AKOM",
              voters: 299
            },
            {
              station: "BIBA",
              voters: 299
            },
            {
              station: "III",
              voters: 299
            },
            {
              station: "BIWONG-",
              voters: 1211
            },
            {
              station: "BULU",
              voters: 1211
            },
            {
              station: "EMINEMVOM",
              voters: 598
            },
          ],
          "ECOLE PUBLIQUE AKAK-YEVOL / A": [
            {
              station: "AKAK-YEVOL",
              voters: 343
            },
            {
              station: "BIBOULEMAM",
              voters: 343
            },
            {
              station: "NKONG-MELEN",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE AKPWAE / A": [
            {
              station: "AKPWAE",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE BIBA -YEVOL / A": [
            {
              station: "BIBA-YEVOL",
              voters: 332
            },
            {
              station: "ZOEBEFAM",
              voters: 332
            },
          ],
          "ECOLE PUBLIQUE DE MELANE / A": [
            {
              station: "ELONE",
              voters: 150
            },
            {
              station: "MELANE",
              voters: 150
            },
          ],
          "ECOLE PUBLIQUE ESSANGONG / A": [
            {
              station: "ADJAP-MVOESON",
              voters: 255
            },
            {
              station: "ESSANGONG",
              voters: 255
            },
            {
              station: "OKPWENG",
              voters: 511
            },
          ],
          "ECOLE PUBLIQUE KOUNGOULOU-NGOE / A": [
            {
              station: "KOUNGOULOU-NGOE",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE MAMENYIE / A": [
            {
              station: "MAMENYIE",
              voters: 224
            },
            {
              station: "NKPWEBAE",
              voters: 224
            },
            {
              station: "NPKWEBAE",
              voters: 224
            },
            {
              station: "OVENG",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE MANG-YEMINSEM / A": [
            {
              station: "MANG-YEMINSEM",
              voters: 410
            },
          ],
          "ECOLE PUBLIQUE MESSAMBE-NDONG / A": [
            {
              station: "EFOULANE",
              voters: 201
            },
            {
              station: "MESSAMBE-NDONG",
              voters: 201
            },
          ],
          "ECOLE PUBLIQUE METYKPWALE -NGOE / A": [
            {
              station: "METYKPWALE-NGOE",
              voters: 215
            },
            {
              station: "MINKPWELE",
              voters: 295
            },
          ],
          "ECOLE PUBLIQUE MOMEBILI / A": [
            {
              station: "MBOUNEZOK",
              voters: 119
            },
            {
              station: "MOMEBILI",
              voters: 119
            },
          ],
          "ECOLE PUBLIQUE MVONG / A": [
            {
              station: "MVO",
              voters: 196
            },
          ],
          "ECOLE PUBLIQUE NJANA / A": [
            {
              station: "MEDOUM",
              voters: 203
            },
            {
              station: "NJANA",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE NKO'ETYE / A": [
            {
              station: "NKO'ETYE",
              voters: 486
            },
          ],
          "ECOLE PUBLIQUE NKOLBITYE / A": [
            {
              station: "NKOLBITYE",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE NKOLENYENG / A": [
            {
              station: "EKOUM",
              voters: 184
            },
            {
              station: "-ANDO'O",
              voters: 184
            },
            {
              station: "NKOLEBAN",
              voters: 184
            },
            {
              station: "NKOLENYENG",
              voters: 184
            },
          ],
          "ECOLE PUBLIQUE NKONG-EDJOM / A": [
            {
              station: "NKONG-EDJOM",
              voters: 351
            },
          ],
          "ECOLE PUBLIQUE NLOUPESSA- YEVOL / A": [
            {
              station: "NLOUPESSA-YEVOL",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE NSELANG / A": [
            {
              station: "MVOULA",
              voters: 552
            },
            {
              station: "NSELANG",
              voters: 552
            },
          ],
          "ECOLE PUBLIQUE ONDONDO / A": [
            {
              station: "ONDONDO",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE ONGOL / A": [
            {
              station: "ONGOL",
              voters: 103
            },
          ],
          "ECOLE PUBLIQUE SONKOE / A": [
            {
              station: "SONKOE",
              voters: 389
            },
          ],
          "ESPL CHEF ZOUAMEYONG / A": [
            {
              station: "ZOUAMEYONG",
              voters: 149
            },
          ],
          "ESPLANADE CHEFFERIE NKONGMEDJAP II / A": [
            {
              station: "NGOMEDEN",
              voters: 206
            },
            {
              station: "NKONGMEDJAP",
              voters: 321
            },
          ],
          "FOYER COMMUNAUTAIRE DE NGONE / A": [
            {
              station: "LOBE",
              voters: 564
            },
            {
              station: "NGONE",
              voters: 564
            },
          ],
        },
        "EBOLOWA I": {
          "ANCIENNE COMMUNE URBAINE / A": [
            {
              station: "ANGOUNOU",
              voters: 533
            },
          ],
          "BATIMENT ETANG AQUACOLE / A": [
            {
              station: "LO'O-BIYENG",
              voters: 362
            },
            {
              station: "MEBAE",
              voters: 362
            },
          ],
          "BUREAU DES POSTES / A": [
            {
              station: "MENDAMESSAMAN",
              voters: 1734
            },
          ],
          "C.E.S DE MVIENG / A": [
            {
              station: "BIKOU'OU",
              voters: 301
            },
            {
              station: "MVIENG",
              voters: 301
            },
            {
              station: "NKOENVONE",
              voters: 301
            },
          ],
          "CASE A PALABRE CHEFFERIE EBOLOWA-SI I /  A": [
            {
              station: "EBOLOWA-SI",
              voters: 4338
            },
          ],
          "CASE A PALABRES D'ALAM / A": [
            {
              station: "ALAM",
              voters: 153
            },
          ],
          "CENTRE DE FORMATION DE DON BOSCO / A": [
            {
              station: "CENTRE-VILLE",
              voters: 1331
            },
          ],
          "CENTRE DE SANTE INTEGRE / A": [
            {
              station: "NGALANE",
              voters: 656
            },
          ],
          "E. PRIVEE JORDAN / A": [
            {
              station: "BASE",
              voters: 489
            },
            {
              station: "RAZEL",
              voters: 489
            },
          ],
          "E.P. DE JOHN HOLT / A": [
            {
              station: "JOHN",
              voters: 807
            },
            {
              station: "HOLT",
              voters: 807
            },
          ],
          "ECOLE CATHOLIQUE D'ABANG / A": [
            {
              station: "ABANG",
              voters: 1129
            },
          ],
          "ECOLE MATERNELLE CAMP DE POLICE / A": [
            {
              station: "III",
              voters: 639
            },
          ],
          "ECOLE MATERNELLE DE KONDA / A": [
            {
              station: "ANDO'O",
              voters: 276
            },
            {
              station: "KONDA",
              voters: 276
            },
            {
              station: "MVILA-YEMISSEM",
              voters: 276
            },
          ],
          "ECOLE PUBLIQUE D'ADJAP-BIYENG / A": [
            {
              station: "ADJAP-BIYENG",
              voters: 99
            },
            {
              station: "KOUNGOULOU-BIYENG",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE D'ADOUM / A": [
            {
              station: "ADOUM",
              voters: 722
            },
          ],
          "ECOLE PUBLIQUE D'AFANENGONG / A": [
            {
              station: "AFANENGONG",
              voters: 100
            },
            {
              station: "-EVELE",
              voters: 100
            },
            {
              station: "AFANENGONG-ADJAP",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE D'AKAK ESSATOLO / A": [
            {
              station: "AKAK-ESSATOLO",
              voters: 325
            },
            {
              station: "EVES",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE D'ALAM-SONKOT / A": [
            {
              station: "SONKOT",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE D'AMVAM-YEVOL / A": [
            {
              station: "AMVAM-YEVOL",
              voters: 300
            },
            {
              station: "OLEM",
              voters: 300
            },
          ],
          "ECOLE PUBLIQUE D'ENGONG / A": [
            {
              station: "ENGONG",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE DE MEFAK / A": [
            {
              station: "MEFAK",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE DE MEKA'A I / A": [
            {
              station: "MEKA'A",
              voters: 115
            },
          ],
          "ECOLE PUBLIQUE DE MESSAMBE / A": [
            {
              station: "MESSAMBE-YEMISSEM",
              voters: 75
            },
            {
              station: "MINKANE",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE MEYO-VILLE / A": [
            {
              station: "MEYO-VILLE",
              voters: 197
            },
            {
              station: "YEM-NDONG",
              voters: 197
            },
          ],
          "ECOLE PUBLIQUE DE NEW-BELL / A": [
            {
              station: "NEW-BELL",
              voters: 5844
            },
          ],
          "ECOLE PUBLIQUE DE NYANGONG / A": [
            {
              station: "NYANGONG",
              voters: 135
            },
          ],
          "ECOLE PUBLIQUE GROUPE II / A": [
            {
              station: "CENTRE",
              voters: 4284
            },
            {
              station: "ADMINISTRATIF",
              voters: 4284
            },
            {
              station: "NKO'OVOS",
              voters: 3524
            },
          ],
          "ECOLE PULIQUE D'AZEM / A": [
            {
              station: "AZEM",
              voters: 396
            },
          ],
          "ENIEG / A": [
            {
              station: "EBOLOWA",
              voters: 5406
            },
            {
              station: "SI-II",
              voters: 5406
            },
          ],
          "ESPLANADE CHEFFERIE  FOULASSI-YEMBONG / A": [
            {
              station: "FOULASSI-YEMBONG",
              voters: 77
            },
          ],
          "ESPLANADE CHEFFERIE DE MELATE / A": [
            {
              station: "MELATE",
              voters: 53
            },
          ],
          "ESPLANADE CHEFFERIE DE YEM-ESSAKOE /  A": [
            {
              station: "YEM-ESSAKOE",
              voters: 77
            },
          ],
          "ESPLANADE CHEFFERIE DE ZINGUI / A": [
            {
              station: "ZINGUI",
              voters: 114
            },
          ],
          "ESPLANADE CHEFFERIE ENGOM II / A": [
            {
              station: "ENGOM",
              voters: 278
            },
          ],
          "ESPLANADE CHEFFERIE MBANGA / A": [
            {
              station: "VI-MBANGA",
              voters: 773
            },
          ],
          "GROUPE SCOLAIRE BILINGUE ﾫ LE SUIVI ﾻ / A": [
            {
              station: "GOUDRON",
              voters: 90
            },
          ],
          "PRISON CENTRALE D'EBOLOWA / A": [
            {
              station: "CAMP",
              voters: 100
            },
            {
              station: "PRISON",
              voters: 100
            },
          ],
        },
        "EBOLOWA II": {
          "CES D'ESSINGUILI / A": [
            {
              station: "ESSINGUILI",
              voters: 582
            },
          ],
          "CES DE MEKOMO / A": [
            {
              station: "MEKOMO",
              voters: 252
            },
            {
              station: "NKPWAEBAE",
              voters: 252
            },
          ],
          "COLLEGES UNIS D'ELAT / A": [
            {
              station: "ELAT",
              voters: 1678
            },
          ],
          "E.P DE MEKALAT-BIYENG / A": [
            {
              station: "BIYENG",
              voters: 231
            },
            {
              station: "MEKALAT-BIYENG",
              voters: 231
            },
          ],
          "ECOLE CATHOLIQUE NKO'OVOS II / A": [
            {
              station: "NKO'OVOS",
              voters: 3032
            },
          ],
          "ECOLE DES INFIRMIERS EKOMBITE / A": [
            {
              station: "EKOMBITE",
              voters: 4824
            },
          ],
          "ECOLE MATERNELLE DE BISSOK / A": [
            {
              station: "BISSOK",
              voters: 368
            },
            {
              station: "BITYILI",
              voters: 828
            },
          ],
          "ECOLE MATERNELLE DE MBAKO'O / A": [
            {
              station: "MBAKO'O",
              voters: 91
            },
          ],
          "ECOLE MATERNELLE SMT7 / A": [
            {
              station: "ANGALE",
              voters: 5122
            },
          ],
          "ECOLE P. METYIKPWALE - Y. NLAYOP / A": [
            {
              station: "METYIKPWALE",
              voters: 203
            },
            {
              station: "YEMISSEM",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE ABOUT / A": [
            {
              station: "ABOUT",
              voters: 305
            },
            {
              station: "BOUS",
              voters: 305
            },
          ],
          "ECOLE PUBLIQUE ADJAP II / A": [
            {
              station: "ASSOK",
              voters: 189
            },
            {
              station: "NKO'ADJAP",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE AKOK - FEG YOP / A": [
            {
              station: "ADJAP",
              voters: 475
            },
            {
              station: "AKOK",
              voters: 286
            },
            {
              station: "EYEK",
              voters: 286
            },
            {
              station: "NKOLEMVONE",
              voters: 286
            },
          ],
          "ECOLE PUBLIQUE ALOUM I / A": [
            {
              station: "ALOUM",
              voters: 404
            },
            {
              station: "NGONE",
              voters: 202
            },
          ],
          "ECOLE PUBLIQUE BIBA I / A": [
            {
              station: "BIBA",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE D'ENONGAL-BULU / A": [
            {
              station: "ENONGAL",
              voters: 321
            },
            {
              station: "NKO\ESSOMBO",
              voters: 321
            },
          ],
          "ECOLE PUBLIQUE D'EVINDISSI / A": [
            {
              station: "EVINDISSI",
              voters: 195
            },
            {
              station: "MEYOS",
              voters: 489
            },
            {
              station: "OKPWENG",
              voters: 195
            },
          ],
          "ECOLE PUBLIQUE DE BIKPWAE- EBOMAM II /  A": [
            {
              station: "BIKPWAE",
              voters: 504
            },
            {
              station: "EBOMAM",
              voters: 593
            },
            {
              station: "MINTO",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE DE BIKPWAE-ENGUEP  ANYU / A": [
            {
              station: "ENGUEP",
              voters: 532
            },
            {
              station: "ANYU",
              voters: 532
            },
            {
              station: "EBOLAKOUN",
              voters: 273
            },
            {
              station: "NDJAFOB",
              voters: 273
            },
          ],
          "ECOLE PUBLIQUE DE BISSAM / A": [
            {
              station: "BISSAM",
              voters: 172
            },
          ],
          "ECOLE PUBLIQUE DE BITON / A": [
            {
              station: "BITON",
              voters: 119
            },
          ],
          "ECOLE PUBLIQUE DE BIYEYEM / A": [
            {
              station: "BIYEYEM",
              voters: 279
            },
          ],
          "ECOLE PUBLIQUE DE MA'AMEZAM / A": [
            {
              station: "AFANEGONG",
              voters: 311
            },
            {
              station: "YESSOK",
              voters: 311
            },
            {
              station: "MA'AMEZAM",
              voters: 311
            },
            {
              station: "MBILETANGAN",
              voters: 311
            },
          ],
          "ECOLE PUBLIQUE DE MEFO / A": [
            {
              station: "MEFO",
              voters: 146
            },
            {
              station: "ONOYONG",
              voters: 166
            },
          ],
          "ECOLE PUBLIQUE DE MFENDA / A": [
            {
              station: "AVELEZOK",
              voters: 125
            },
            {
              station: "MFENDA",
              voters: 125
            },
            {
              station: "SIJAKON",
              voters: 125
            },
          ],
          "ECOLE PUBLIQUE DE NLOUPESSA - YEMONG  /A": [
            {
              station: "MVOMAN",
              voters: 170
            },
            {
              station: "NLOUPESSA",
              voters: 170
            },
            {
              station: "YEMONG",
              voters: 170
            },
          ],
          "ECOLE PUBLIQUE DE NNELEFOUP / A": [
            {
              station: "NNELEFOUP",
              voters: 61
            },
          ],
          "ECOLE PUBLIQUE DE VEMA / A": [
            {
              station: "AKO\OKAS",
              voters: 188
            },
            {
              station: "VEMA",
              voters: 188
            },
          ],
          "ECOLE PUBLIQUE MEKALAT - YEMVENG / A": [
            {
              station: "MEKALAT",
              voters: 5405
            },
            {
              station: "YEMVENG",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE MEKALAT - YEVOL / A": [
            {
              station: "YEVOL",
              voters: 4802
            },
          ],
          "ECOLE PUBLIQUE MEKOK I / A": [
            {
              station: "MEKOK",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE MEYOS - ENGUEP ANYU / A": [
            {
              station: "NGALAN",
              voters: 259
            },
          ],
          "ECOLE PUBLIQUE MVAM - ESSAKOE / A": [
            {
              station: "MVAM",
              voters: 743
            },
            {
              station: "ESSAKOE",
              voters: 517
            },
          ],
          "ECOLE PUBLIQUE MVAM - YETOM / A": [
            {
              station: "MBOUT",
              voters: 226
            },
            {
              station: "YETOM",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE NDENGUE / A": [
            {
              station: "NDENGUE",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE NKOLANDOM / A": [
            {
              station: "NKOLANDOM",
              voters: 348
            },
          ],
          "ECOLE PUBLIQUE NKOLENYENG - YEMVANG /  A": [
            {
              station: "NKOLENYENG",
              voters: 75
            },
            {
              station: "YEMVANG",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE NKOLOVENG / A": [
            {
              station: "NKOLOVENG",
              voters: 108
            },
          ],
          "ENIEG / A": [
            {
              station: "AMANG",
              voters: 22524
            },
            {
              station: "III",
              voters: 4224
            },
            {
              station: "DJOP",
              voters: 3504
            },
          ],
          "ESPL. CHEF. MEVOUS / A": [
            {
              station: "EBAE",
              voters: 178
            },
            {
              station: "MEVOUS",
              voters: 178
            },
          ],
          "ESPLANADE CHEFFERIE ALEN / A": [
            {
              station: "ALEN",
              voters: 77
            },
          ],
          "ESPLANADE CHEFFERIE D'EKOWONG / A": [
            {
              station: "ABOMVOMBA",
              voters: 178
            },
            {
              station: "EKOWONG",
              voters: 178
            },
          ],
          "ESPLANADE CHEFFERIE D'ELONE / A": [
            {
              station: "ELONE",
              voters: 109
            },
          ],
          "ESPLANADE CHEFFERIE DE BITYILI III / A": [
            {
              station: "MINKOK-",
              voters: 343
            },
            {
              station: "MVII",
              voters: 211
            },
          ],
          "ESPLANADE CHEFFERIE DE FOULASSI I / A": [
            {
              station: "FOULASSI",
              voters: 161
            },
          ],
          "ESPLANADE CHEFFERIE DENKONG / A": [
            {
              station: "NKONG",
              voters: 98
            },
          ],
          "ESPLANADE CHEFFERIE MINKOK - EBOMAM II  /A": [
            {
              station: "NKONDONGO",
              voters: 132
            },
          ],
          "LYCEE NKOEMVONE / A": [
            {
              station: "ASSO\OSSENG",
              voters: 407
            },
            {
              station: "NKOEMVONE",
              voters: 407
            },
          ],
          "SAR / SM DE BILON / A": [
            {
              station: "BILON",
              voters: 1492
            },
          ],
        },
        "EFOULAN": {
          "ECOLE PUBLIQUE D'ABO'ONTOMBA / A": [
            {
              station: "ABO'ONTOMBA",
              voters: 82
            },
          ],
          "ECOLE PUBLIQUE D'ADJAP ESSAWO / A": [
            {
              station: "ADJAP",
              voters: 535
            },
            {
              station: "ESSAWO",
              voters: 492
            },
          ],
          "ECOLE PUBLIQUE D'EBOM ESSAWO / A": [
            {
              station: "EBOM",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE D'ENGOMBA / A": [
            {
              station: "ENGOMBA",
              voters: 152
            },
            {
              station: "MEKALATE",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE D'ONDONG ADJAP / A": [
            {
              station: "BIKOUBA",
              voters: 256
            },
            {
              station: "ONDONG",
              voters: 256
            },
          ],
          "ECOLE PUBLIQUE DE MA'AMENYIN / A": [
            {
              station: "MA'AMENYIN",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE DE MELANE / A": [
            {
              station: "MELANE",
              voters: 145
            },
            {
              station: "MFALA",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE DE MELANGUE II / A": [
            {
              station: "ELONE",
              voters: 189
            },
            {
              station: "MELANGUE",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE DE MENGALE / A": [
            {
              station: "MENGALE",
              voters: 196
            },
          ],
          "ECOLE PUBLIQUE DE MIMBOMINGAL / A": [
            {
              station: "ANGBWEK",
              voters: 289
            },
            {
              station: "MIMBOMINGAL",
              voters: 289
            },
            {
              station: "MINTO",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE DE NGONEBOK / A": [
            {
              station: "NGONEBOK",
              voters: 317
            },
          ],
          "ECOLE PUBLIQUE DE NKOADJAP / A": [
            {
              station: "MINTOM",
              voters: 228
            },
            {
              station: "NKOADJAP",
              voters: 228
            },
          ],
          "ECOLE PUBLIQUE DE NKOUEKOUK / A": [
            {
              station: "NKOUEKOUK",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE DE NYAZO'O / A": [
            {
              station: "BONGOLO",
              voters: 194
            },
            {
              station: "NYAZO'O",
              voters: 194
            },
          ],
          "ECOLE PUBLIQUE DE TCHANGUE / A": [
            {
              station: "MEBEM",
              voters: 360
            },
            {
              station: "TCHANGUE",
              voters: 360
            },
          ],
          "ESPLANADE D'ALOUM YEMVENG / A": [
            {
              station: "ALOUM",
              voters: 139
            },
            {
              station: "YEMVENG",
              voters: 139
            },
          ],
          "ESPLANADE DE BINYINA / A": [
            {
              station: "BINYINA",
              voters: 92
            },
          ],
          "ESPLANADE DE KALATE ABA'A / A": [
            {
              station: "KALATE",
              voters: 115
            },
            {
              station: "ABA'A",
              voters: 115
            },
            {
              station: "NKOUTOU",
              voters: 321
            },
          ],
          "ESPLANADE DE MBONG / A": [
            {
              station: "MBONG",
              voters: 225
            },
            {
              station: "MVILA",
              voters: 399
            },
            {
              station: "YEVOL",
              voters: 843
            },
            {
              station: "NDJANTOM",
              voters: 225
            },
          ],
          "ESPLANADE DE MEBANDE / A": [
            {
              station: "MEBANDE",
              voters: 82
            },
          ],
          "ESPLANADE DE NGALANE II / A": [
            {
              station: "AKOM",
              voters: 293
            },
            {
              station: "NGALANE",
              voters: 293
            },
          ],
          "LYCEE D'EFOULAN / A": [
            {
              station: "EFOULAN",
              voters: 867
            },
            {
              station: "MINKANE",
              voters: 867
            },
            {
              station: "NGAT",
              voters: 867
            },
          ],
        },
        "MENGONG": {
          "BOUKAROU / A": [
            {
              station: "EBOLEBOLA",
              voters: 143
            },
          ],
          "BOUKAROU DOUNGOU / A": [
            {
              station: "DOUNGOU",
              voters: 52
            },
          ],
          "CASE SANTE DE MA'ANEMENYIN / A": [
            {
              station: "MA'ANEMENYIN",
              voters: 96
            },
          ],
          "CASE SANTE KE'EKE / A": [
            {
              station: "KE'EKE",
              voters: 217
            },
          ],
          "ECOLE MATERNELLE D'ENDAM I / A": [
            {
              station: "ENDAM",
              voters: 216
            },
          ],
          "ECOLE MATERNELLE DE MENGONG / A": [
            {
              station: "MENGONG",
              voters: 810
            },
          ],
          "ECOLE MATERNELLE DE NGOULESSAMAN / A": [
            {
              station: "NGOULESSAMAN",
              voters: 295
            },
          ],
          "ECOLE PUBLIQUE D'ABIETE / A": [
            {
              station: "ABIETE",
              voters: 368
            },
            {
              station: "DOUM",
              voters: 368
            },
          ],
          "ECOLE PUBLIQUE D'EBAP / A": [
            {
              station: "EBAP",
              voters: 102
            },
          ],
          "ECOLE PUBLIQUE D'EKOUK / A": [
            {
              station: "EKOUK",
              voters: 114
            },
          ],
          "ECOLE PUBLIQUE D'EMANEMVAM / A": [
            {
              station: "EMANEMVAM",
              voters: 170
            },
          ],
          "ECOLE PUBLIQUE DE LOUM / A": [
            {
              station: "LOUM",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE MVANGUE / A": [
            {
              station: "MVANGUE",
              voters: 157
            },
          ],
          "ECOLE PUBLIQUE DE NGUET / A": [
            {
              station: "NGUET",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE NKAN / A": [
            {
              station: "NKAN",
              voters: 132
            },
          ],
          "ECOLE PUBLIQUE DE NKO'OVOS II / A": [
            {
              station: "NKO'OVOS",
              voters: 118
            },
          ],
          "ECOLE PUBLIQUE DE NKOLETOTO / A": [
            {
              station: "NKOLETOTO",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DE NNEMEYONG I / A": [
            {
              station: "NNEMEYONG",
              voters: 473
            },
          ],
          "ECOLE PUBLIQUE DE NNEMEYONG III / A": [
            {
              station: "III",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE DE NYENGUE / A": [
            {
              station: "NYENGUE",
              voters: 198
            },
          ],
          "HANGAR ABABITA / A": [
            {
              station: "ABABITA",
              voters: 68
            },
          ],
          "HANGAR ANDO'O / A": [
            {
              station: "ANDO'O",
              voters: 49
            },
          ],
          "HANGAR ATOUI / A": [
            {
              station: "ATOUI",
              voters: 56
            },
          ],
          "HANGAR BAN-YOP / A": [
            {
              station: "BAN-YOP",
              voters: 49
            },
          ],
          "HANGAR D'ADJAP-YEVOL / A": [
            {
              station: "ADJAP-YEVOL",
              voters: 117
            },
          ],
          "HANGAR EFOT / A": [
            {
              station: "EFOT",
              voters: 51
            },
          ],
          "HANGAR ESSESSANA / A": [
            {
              station: "ESSESSANA",
              voters: 45
            },
          ],
          "HANGAR ESSOKBENGA'A / A": [
            {
              station: "ESSOKBENGA'A",
              voters: 113
            },
          ],
          "HANGAR ETONDO / A": [
            {
              station: "ETONDO",
              voters: 119
            },
          ],
          "HANGAR EYENG-ESSEL / A": [
            {
              station: "EYENG-ESSEL",
              voters: 84
            },
          ],
          "HANGAR KOUNGOULOU / A": [
            {
              station: "KOUNGOULOU",
              voters: 210
            },
          ],
          "HANGAR MARCHE ATO'OVENG I / A": [
            {
              station: "ATO'OVENG",
              voters: 315
            },
          ],
          "HANGAR MBOABANG I / A": [
            {
              station: "MBOABANG",
              voters: 160
            },
          ],
          "HANGAR MBONDO / A": [
            {
              station: "MBONDO",
              voters: 85
            },
          ],
          "HANGAR MBOULA / A": [
            {
              station: "MBOULA",
              voters: 163
            },
          ],
          "HANGAR MEFIEP / A": [
            {
              station: "MEFIEP",
              voters: 25
            },
          ],
          "HANGAR MEKAMEMVOM / A": [
            {
              station: "MEKAMEMVOM",
              voters: 209
            },
          ],
          "HANGAR MVII / A": [
            {
              station: "MVII",
              voters: 56
            },
          ],
          "HANGAR NGOMESSANE / A": [
            {
              station: "NGOMESSANE",
              voters: 182
            },
          ],
          "HANGAR NKOLEBENGUE / A": [
            {
              station: "NKOLEBENGUE",
              voters: 88
            },
          ],
          "HANGAR NKOLOWON / A": [
            {
              station: "NKOLOWON",
              voters: 100
            },
          ],
          "HANGAR ONDONDO / A": [
            {
              station: "ONDONDO",
              voters: 83
            },
          ],
          "HANGAR YEM / A": [
            {
              station: "YEM",
              voters: 72
            },
          ],
          "POSTE AGRICOLE DE MELANE / A": [
            {
              station: "NDENG",
              voters: 116
            },
          ],
        },
        "MVANGAN": {
          "ECOLE CATHOLIQUE D'ABABENDOMAN / A": [
            {
              station: "ABABENDOMAN",
              voters: 183
            },
          ],
          "ECOLE PUBLIQUE D'ABOELONE / A": [
            {
              station: "ABOELONE",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE D'AFAN / A": [
            {
              station: "AFAN",
              voters: 230
            },
          ],
          "ECOLE PUBLIQUE D'AKAM / A": [
            {
              station: "AKAM",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE D'AKO'OBETE / A": [
            {
              station: "AKO'OBETE",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE D'ALOMBO / A": [
            {
              station: "ALOMBO",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE D'AMVOM / A": [
            {
              station: "AMVOM",
              voters: 151
            },
          ],
          "ECOLE PUBLIQUE D'ENDENGUE / A": [
            {
              station: "ENDENGUE",
              voters: 150
            },
          ],
          "ECOLE PUBLIQUE D'OYEM I / A": [
            {
              station: "OYEM",
              voters: 239
            },
          ],
          "ECOLE PUBLIQUE DE BIKONG / A": [
            {
              station: "BIKONG",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE KOUGOULOU / A": [
            {
              station: "KOUGOULOU",
              voters: 210
            },
          ],
          "ECOLE PUBLIQUE DE MEBEMENKO / A": [
            {
              station: "MEBEMENKO",
              voters: 307
            },
          ],
          "ECOLE PUBLIQUE DE MEBO'O NGOE / A": [
            {
              station: "MEBO'O",
              voters: 530
            },
            {
              station: "NGOE",
              voters: 80
            },
          ],
          "ECOLE PUBLIQUE DE MEBOSSO / A": [
            {
              station: "MEBOSSO",
              voters: 130
            },
          ],
          "ECOLE PUBLIQUE DE MGOMEBAE / A": [
            {
              station: "ENDAMEYOS",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE DE MINKOUMOU / A": [
            {
              station: "MINKOUMOU",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE DE MINTYENE / A": [
            {
              station: "MINTYENE",
              voters: 276
            },
          ],
          "ECOLE PUBLIQUE DE NDICK / A": [
            {
              station: "NDICK",
              voters: 163
            },
          ],
          "ECOLE PUBLIQUE DE ZOEBEFAM / A": [
            {
              station: "ZOEBEFAM",
              voters: 322
            },
          ],
          "HANGAR ALOTOM / A": [
            {
              station: "ALOTOM",
              voters: 57
            },
          ],
          "HANGAR D'ANDJECK / A": [
            {
              station: "ANDJECK",
              voters: 305
            },
          ],
          "HANGAR D'ASSOK I / A": [
            {
              station: "ASSOK",
              voters: 172
            },
            {
              station: "NKENGOU",
              voters: 415
            },
          ],
          "HANGAR D'EBOMAN I / A": [
            {
              station: "EBOMAN",
              voters: 203
            },
          ],
          "HANGAR D'EKOWONG I / A": [
            {
              station: "EKOWONG",
              voters: 485
            },
          ],
          "HANGAR D'ETOUBETOUBANDI / A": [
            {
              station: "ETOUBETOUBANDI",
              voters: 113
            },
          ],
          "HANGAR DE BIBOULEMAM / A": [
            {
              station: "BIBOULEMAM",
              voters: 133
            },
          ],
          "HANGAR DE MEBO'O YENGAP / A": [
            {
              station: "YENGAP",
              voters: 450
            },
          ],
          "HANGAR DE MVAEZOM / A": [
            {
              station: "MVAEZOM",
              voters: 204
            },
          ],
          "HANGAR DE NDANGA / A": [
            {
              station: "NDANGA",
              voters: 99
            },
          ],
          "HANGAR DE NKOLENYENG / A": [
            {
              station: "NKOLENYENG",
              voters: 367
            },
          ],
          "HANGAR DE NKOMO / A": [
            {
              station: "NKOMO",
              voters: 114
            },
          ],
          "HANGAR DE NNELEFOUP / A": [
            {
              station: "NNELEFOUP",
              voters: 122
            },
          ],
          "HANGAR DE NNEZAM / A": [
            {
              station: "NNEZAM",
              voters: 121
            },
          ],
          "HANGAR MVANGAN- VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 170
            },
          ],
          "LYCEE DE MVANGAN / A": [
            {
              station: "MVANGAN-",
              voters: 836
            },
            {
              station: "CENTRE",
              voters: 247
            },
            {
              station: "ADMINISTRATIF",
              voters: 247
            },
            {
              station: "VILLE",
              voters: 419
            },
          ],
        },
        "NGOULEMAKONG": {
          "C.E.S D'ENAMENGAL I / A": [
            {
              station: "ENAMENGAL",
              voters: 434
            },
          ],
          "C.E.S DE BITSOGMAN / A": [
            {
              station: "BITSOGMAM",
              voters: 188
            },
            {
              station: "ENYENG",
              voters: 188
            },
          ],
          "C.E.S DE DOUM / A": [
            {
              station: "DOUM",
              voters: 410
            },
            {
              station: "CHEFFERIE",
              voters: 169
            },
          ],
          "C.E.S DE SOUMOU / A": [
            {
              station: "SOUMOU",
              voters: 113
            },
          ],
          "DELEGATION D'AGRICULTURE / A": [
            {
              station: "MBAMA",
              voters: 512
            },
            {
              station: "MINKONGO",
              voters: 512
            },
            {
              station: "NKOL-YOP",
              voters: 512
            },
          ],
          "ECOLE MATERNELLE DE MBEKA'A I / A": [
            {
              station: "OVENG",
              voters: 156
            },
            {
              station: "OTOLO'O",
              voters: 156
            },
          ],
          "ECOLE MATERNELLE DE NNEMEYONG / A": [
            {
              station: "NNEMEYONG",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE D'ALLOM / A": [
            {
              station: "ALLOM",
              voters: 77
            },
            {
              station: "NLAN",
              voters: 77
            },
            {
              station: "YOP",
              voters: 420
            },
          ],
          "ECOLE PUBLIQUE D'EBOTENKOU / A": [
            {
              station: "EBOTENKOU",
              voters: 174
            },
            {
              station: "OYACK",
              voters: 311
            },
            {
              station: "-FONG",
              voters: 174
            },
          ],
          "ECOLE PUBLIQUE D'ELONE / A": [
            {
              station: "ELONE",
              voters: 102
            },
          ],
          "ECOLE PUBLIQUE D'ESSINGANG / A": [
            {
              station: "ESSINGANG",
              voters: 73
            },
          ],
          "ECOLE PUBLIQUE D'OBANG II / A": [
            {
              station: "OBANG",
              voters: 174
            },
          ],
          "ECOLE PUBLIQUE DE BINYINYALI / A": [
            {
              station: "BINYINYALI",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE DE DOUM / A": [
            {
              station: "CARREFOUR",
              voters: 57
            },
          ],
          "ECOLE PUBLIQUE DE KOUMA / A": [
            {
              station: "KOUMA",
              voters: 141
            },
          ],
          "ECOLE PUBLIQUE DE MBEKA'A II / A": [
            {
              station: "MBEKA'A",
              voters: 235
            },
          ],
          "ECOLE PUBLIQUE DE MBENG / A": [
            {
              station: "MBENG",
              voters: 211
            },
            {
              station: "OSSOEFEME",
              voters: 211
            },
          ],
          "ECOLE PUBLIQUE DE MESSOK I / A": [
            {
              station: "MESSOK",
              voters: 284
            },
            {
              station: "NGOCK",
              voters: 142
            },
          ],
          "ECOLE PUBLIQUE DE MINLAMIZIBI / A": [
            {
              station: "MINLAMIZIBI",
              voters: 428
            },
            {
              station: "MINYEBE",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DE MVAMEDJAP BANE / A": [
            {
              station: "OLLA",
              voters: 184
            },
            {
              station: "MVAMEDJAP-",
              voters: 308
            },
            {
              station: "BANE",
              voters: 184
            },
          ],
          "ECOLE PUBLIQUE DE MVAMEDJAP FONG / A": [
            {
              station: "FONG",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE DE MVANDA / A": [
            {
              station: "MVANDA",
              voters: 87
            },
          ],
          "ECOLE PUBLIQUE DE NTOUMBA / A": [
            {
              station: "NTOUMBA",
              voters: 187
            },
          ],
          "ESPLANADE CHEF. DE NKOUMADJAP I / A": [
            {
              station: "NKOUMADJAP",
              voters: 180
            },
          ],
          "ESPLANADE CHEFFERIE D'AKOATALA / A": [
            {
              station: "AKOATALA",
              voters: 66
            },
          ],
          "ESPLANADE CHEFFERIE D'ASSAM / A": [
            {
              station: "ASSAM",
              voters: 49
            },
            {
              station: "ONGONGO",
              voters: 49
            },
          ],
          "ESPLANADE CHEFFERIE D'EBAE / A": [
            {
              station: "EBAE",
              voters: 76
            },
          ],
          "ESPLANADE CHEFFERIE D'EBOLBOUM / A": [
            {
              station: "EBOLBOUM",
              voters: 82
            },
          ],
          "ESPLANADE CHEFFERIE DE BANGA / A": [
            {
              station: "BANGA",
              voters: 655
            },
            {
              station: "BIKOP",
              voters: 331
            },
            {
              station: "KOUNGOULOU",
              voters: 143
            },
            {
              station: "NKOLMEKOK",
              voters: 143
            },
          ],
          "ESPLANADE CHEFFERIE DE MEKOM / A": [
            {
              station: "MEKOM",
              voters: 101
            },
          ],
          "ESPLANADE CHEFFERIE DE MENGBWA / A": [
            {
              station: "ABIETE",
              voters: 121
            },
            {
              station: "MENGBWA",
              voters: 121
            },
          ],
          "ESPLANADE CHEFFERIE DE MINKOK / A": [
            {
              station: "MINKOK",
              voters: 238
            },
          ],
          "ESPLANADE CHEFFERIE DE NDZAFOM / A": [
            {
              station: "NDZAFOM",
              voters: 31
            },
            {
              station: "NKOLNGOCK",
              voters: 31
            },
          ],
          "ESPLANADE CHEFFERIE DE NKOLE / A": [
            {
              station: "FONE",
              voters: 146
            },
            {
              station: "NKOLE",
              voters: 146
            },
          ],
          "ESPLANADE CHEFFERIE DE NYAMVENDE / A": [
            {
              station: "NYAMVENDE",
              voters: 71
            },
          ],
          "ESPLANADE CHEFFERIE EKOWONDO / A": [
            {
              station: "EKOWONDO",
              voters: 80
            },
          ],
          "LYCEE MIXTE DE NGOULEMAKONG / A": [
            {
              station: "NNANGA",
              voters: 364
            },
            {
              station: "EZAN",
              voters: 364
            },
          ],
          "LYCEE TECHNIQUE DE NGOULEMAKONG / A": [
            {
              station: "CENTRE",
              voters: 896
            },
            {
              station: "COMMERCIAL",
              voters: 896
            },
            {
              station: "OMANG",
              voters: 896
            },
            {
              station: "-SI",
              voters: 896
            },
          ],
          "MISSION CATHOLIQUE / A": [
            {
              station: "NKOL-MESSAS",
              voters: 137
            },
            {
              station: "-BENE",
              voters: 137
            },
          ],
        },
      },
    },
  },
};
