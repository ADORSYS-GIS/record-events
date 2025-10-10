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
  "LITTORAL": {
    name: { en: "LITTORAL", fr: "LITTORAL" },
    divisions: {
      "MOUNGO": {
        "BARE-BAKEM": {
          "CMA BARE / A": [
            {
              station: "QUARTIERS",
              voters: 2342
            },
          ],
          "EP BAKEM / A": [
            {
              station: "EBOULKONG",
              voters: 514
            },
            {
              station: "NDOM",
              voters: 514
            },
            {
              station: "BAKEM",
              voters: 514
            },
            {
              station: "NDOUENKE",
              voters: 514
            },
            {
              station: "NKONIAKE",
              voters: 514
            },
            {
              station: "NKONIAKO-NIAMA",
              voters: 514
            },
            {
              station: "NKONIAMBOT",
              voters: 514
            },
          ],
          "EP BAREHOCK / A": [
            {
              station: "BAREHOCK",
              voters: 677
            },
            {
              station: "EBORIDJA",
              voters: 922
            },
          ],
          "EP EBOUH / A": [
            {
              station: "EBOUH",
              voters: 597
            },
          ],
          "EP EBOUKOU / A": [
            {
              station: "EBOUKOU",
              voters: 142
            },
            {
              station: "SOUNDOP",
              voters: 142
            },
          ],
          "EP EKOM NKAM / A": [
            {
              station: "EKOM",
              voters: 158
            },
            {
              station: "NKAM",
              voters: 158
            },
          ],
          "EP ESSEL / A": [
            {
              station: "ESSEL",
              voters: 26
            },
          ],
          "EP MANDJIBO / A": [
            {
              station: "MANDJIBO",
              voters: 163
            },
          ],
          "EP MBANGLA / A": [
            {
              station: "MBANGLA",
              voters: 42
            },
            {
              station: "VILLAGE",
              voters: 172
            },
          ],
          "EP MBAREMBENG / A": [
            {
              station: "MBAREMBENG",
              voters: 451
            },
          ],
          "EP MELONG II / A": [
            {
              station: "BAYON",
              voters: 845
            },
            {
              station: "MELONG",
              voters: 1821
            },
          ],
          "EP MOUNKO / A": [
            {
              station: "MOUNKO",
              voters: 130
            },
          ],
          "EP MPAKA / A": [
            {
              station: "MPAKA",
              voters: 175
            },
          ],
          "FOYER BANDJOUN / A": [
            {
              station: "BARE",
              voters: 2311
            },
            {
              station: "QUARTIER",
              voters: 4227
            },
            {
              station: "AXE",
              voters: 866
            },
            {
              station: "LOURD",
              voters: 866
            },
            {
              station: "(BIS)",
              voters: 3208
            },
          ],
          "POSTE AGRICOLE BAKEM / A": [
            {
              station: "MBIE",
              voters: 145
            },
            {
              station: "NDOUEMBOT",
              voters: 145
            },
            {
              station: "NTANGTONG",
              voters: 145
            },
          ],
          "ST CHARLES LWANGA / A": [
            {
              station: "BAREKO",
              voters: 282
            },
            {
              station: "GENDARMERIE",
              voters: 282
            },
            {
              station: "PLATEAU",
              voters: 282
            },
            {
              station: "ADMINISTRATIF",
              voters: 416
            },
            {
              station: "VIE",
              voters: 282
            },
            {
              station: "TRANQUILLE",
              voters: 282
            },
          ],
          "ST MARC MELONG II / A": [
            {
              station: "BAGANGTE",
              voters: 528
            },
          ],
        },
        "BONALEA": {
          "BESSOUNGKANG (CENTRE DE SANTE) / A": [
            {
              station: "BENGSE",
              voters: 110
            },
            {
              station: "BESSOUNGKANG",
              voters: 110
            },
            {
              station: "BONADIKA",
              voters: 110
            },
            {
              station: "MBOMBO'O",
              voters: 110
            },
            {
              station: "MOUYAMBE",
              voters: 110
            },
          ],
          "BONAKOU-BWAPAKI (E.P.) / A": [
            {
              station: "BONAKOU-BWAPAKI",
              voters: 84
            },
            {
              station: "BWAPAKI",
              voters: 176
            },
            {
              station: "NDONGO",
              voters: 176
            },
          ],
          "CASE COMMUNAUTAIRE LONDO - BWAPAKI /  A": [
            {
              station: "KENJE-BWAPAKI",
              voters: 92
            },
            {
              station: "KWEDIKO-BWAPAKI",
              voters: 92
            },
            {
              station: "LONDO-BWAPAKI",
              voters: 92
            },
            {
              station: "NDONGO-BWAPAKI",
              voters: 92
            },
          ],
          "CASE COMMUNAUTAIRE MANGAMBA / A": [
            {
              station: "BONAKWASSI",
              voters: 107
            },
            {
              station: "BONAMAKOUA",
              voters: 107
            },
            {
              station: "BONAMBOULE",
              voters: 107
            },
            {
              station: "BONAMPACKO",
              voters: 107
            },
            {
              station: "BONEYAN",
              voters: 107
            },
            {
              station: "FIKO",
              voters: 321
            },
            {
              station: "MANGAMBA",
              voters: 535
            },
          ],
          "CASE COMMUNAUTAIRE MBONJO - VILL / A": [
            {
              station: "MBONJO-VILLAGE",
              voters: 159
            },
            {
              station: "(MBONJO",
              voters: 159
            },
            {
              station: "II-",
              voters: 159
            },
            {
              station: "MBONDO",
              voters: 159
            },
          ],
          "CASE DE PASSAGE MAYEN / A": [
            {
              station: "MAYEN",
              voters: 116
            },
          ],
          "CETIC DE SOUZA / A": [
            {
              station: "BAYON",
              voters: 1564
            },
            {
              station: "BONASSAMA-SOUZA",
              voters: 765
            },
            {
              station: "SOUZA",
              voters: 54994
            },
            {
              station: "BIG",
              voters: 765
            },
            {
              station: "MOP",
              voters: 765
            },
            {
              station: "BONABERI",
              voters: 765
            },
            {
              station: "CARREFOUR",
              voters: 1668
            },
            {
              station: "BLACK",
              voters: 799
            },
            {
              station: "DERRIERE",
              voters: 5193
            },
            {
              station: "GARE",
              voters: 7574
            },
            {
              station: "QUARTIER",
              voters: 6097
            },
            {
              station: "HAOUSSA",
              voters: 765
            },
          ],
          "CLUB CDC CAMP I KOMPINA / A": [
            {
              station: "KOMPINA",
              voters: 4444
            },
            {
              station: "CDC-CAMP",
              voters: 1072
            },
          ],
          "COLLEGE HERBERT SOUZA-GARE / A": [
            {
              station: "BANGOULAP",
              voters: 2299
            },
            {
              station: "BAYANGUE",
              voters: 2299
            },
            {
              station: "BONABONG",
              voters: 2347
            },
            {
              station: "CHATEAU",
              voters: 2347
            },
            {
              station: "D'EAU",
              voters: 2347
            },
            {
              station: "HAUTE",
              voters: 2299
            },
            {
              station: "TENSION",
              voters: 2299
            },
            {
              station: "KASSALA",
              voters: 2347
            },
            {
              station: "FARM",
              voters: 2347
            },
            {
              station: "MISSION",
              voters: 4598
            },
            {
              station: "CATHOLIQUE",
              voters: 2375
            },
            {
              station: "CEBEC",
              voters: 2299
            },
            {
              station: "BANGANGTE",
              voters: 2299
            },
          ],
          "COLLEGE PIPART / A": [
            {
              station: "MBONJO-BAR",
              voters: 1104
            },
            {
              station: "PIPART",
              voters: 1104
            },
          ],
          "COLLEGE PRIVEE NEW HOPE / A": [
            {
              station: "AKWA",
              voters: 116
            },
            {
              station: "SELELE",
              voters: 116
            },
            {
              station: "NEW",
              voters: 58
            },
            {
              station: "KOUMBILI",
              voters: 58
            },
          ],
          "E.P. BIL MOUNDANI SOUZA / A": [
            {
              station: "BINAM",
              voters: 3403
            },
            {
              station: "MUNDANI",
              voters: 3403
            },
            {
              station: "NKONGPEN",
              voters: 3737
            },
          ],
          "E.P. DE KOMPINA / A": [
            {
              station: "CAMP",
              voters: 326
            },
            {
              station: "ONE",
              voters: 326
            },
            {
              station: "CDC",
              voters: 326
            },
          ],
          "E.P. NDOULOU / A": [
            {
              station: "NDOULOU(MIANG,BADOU,BADJIOU)",
              voters: 278
            },
          ],
          "E.P. SOUZA GARE / A": [
            {
              station: "ANCIENNE",
              voters: 2952
            },
            {
              station: "POSTE",
              voters: 2952
            },
            {
              station: "MAIRIE",
              voters: 1476
            },
            {
              station: "MARCHE",
              voters: 2952
            },
            {
              station: "STATION",
              voters: 1476
            },
            {
              station: "MAYA",
              voters: 1476
            },
            {
              station: "NYLON",
              voters: 1476
            },
            {
              station: "ECOLE",
              voters: 1552
            },
            {
              station: "PUBLIQUE",
              voters: 1476
            },
          ],
          "ECOLE BIL KOMPINA ROAD / A": [
            {
              station: "BAG-GARE",
              voters: 1371
            },
            {
              station: "KOMPINA-CHEFFERIE",
              voters: 1371
            },
            {
              station: "KOMPINA-GARE",
              voters: 1371
            },
            {
              station: "KOMPINA-MARCHE",
              voters: 1371
            },
            {
              station: "KOMPINA-ROAD",
              voters: 1371
            },
          ],
          "ECOLE DES PARENTS KOUNANG / A": [
            {
              station: "BONATOTO",
              voters: 46
            },
            {
              station: "KOUNANG",
              voters: 46
            },
          ],
          "ECOLE PRIVEE LAIQUE L'EXPERTISE DE  SOUZA / A": [
            {
              station: "DERICK",
              voters: 109
            },
            {
              station: "MARIGOT",
              voters: 109
            },
            {
              station: "D'HUILE",
              voters: 109
            },
            {
              station: "NKOLO",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE BANSENG / A": [
            {
              station: "BANSENG",
              voters: 43
            },
            {
              station: "MPOBO",
              voters: 43
            },
          ],
          "ECOLE PUBLIQUE KAKE VILLAGE / A": [
            {
              station: "BADOU",
              voters: 291
            },
            {
              station: "KAKE",
              voters: 582
            },
            {
              station: "BONANKA",
              voters: 291
            },
            {
              station: "BONANJO",
              voters: 1767
            },
            {
              station: "KAKE-VILLAGE",
              voters: 291
            },
          ],
          "ECOLE PUBLIQUE MALENDE / A": [
            {
              station: "PENDA",
              voters: 2251
            },
            {
              station: "MBOKO-CDC-CAMP",
              voters: 1551
            },
          ],
          "ECOLE PUBLIQUE MANDOUKA / A": [
            {
              station: "BONANGASSE",
              voters: 176
            },
            {
              station: "KOLLO",
              voters: 176
            },
            {
              station: "MALENDE",
              voters: 239
            },
            {
              station: "MANDOUKA",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE MIANG / A": [
            {
              station: "KOKI",
              voters: 203
            },
            {
              station: "MIANG-",
              voters: 203
            },
            {
              station: "MIANG",
              voters: 203
            },
            {
              station: "CENTRE",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE SOCAPALM MBONJO I / A": [
            {
              station: "MBONJO",
              voters: 671
            },
            {
              station: "MBONJO-CAMP",
              voters: 512
            },
            {
              station: "(SOCAPALM)",
              voters: 512
            },
          ],
          "ECOLE ST CHARLES LWANGA KOMPINA / A": [
            {
              station: "STADE",
              voters: 76
            },
          ],
          "ECOLE ST KISITO MALEKE / A": [
            {
              station: "MALEKE",
              voters: 2280
            },
          ],
          "ECOLE ST LUC / A": [
            {
              station: "BEKOUMA-KAKE",
              voters: 320
            },
            {
              station: "BEKOUMA-SOUZA",
              voters: 320
            },
            {
              station: "CARREFOUR-KAKE",
              voters: 320
            },
          ],
          "EEC MANKOULANG / A": [
            {
              station: "MANKOULANG",
              voters: 63
            },
          ],
          "GRAND-SOUZA ECOLE PUBLIQUE / A": [
            {
              station: "GRAND",
              voters: 394
            },
          ],
          "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A": [
            {
              station: "MOUNDANI",
              voters: 628
            },
            {
              station: "BERCLOTEL",
              voters: 157
            },
            {
              station: "FONDONERA/QUARTIER",
              voters: 157
            },
            {
              station: "DSCHANG",
              voters: 157
            },
            {
              station: "MASSEPO",
              voters: 157
            },
            {
              station: "VALLEE",
              voters: 157
            },
          ],
          "LYCEE BIL DE PENDA MBOKO / A": [
            {
              station: "MBOKO-VILLAGE",
              voters: 700
            },
          ],
          "MAKEMBA (EEC) / A": [
            {
              station: "MAKEMBA",
              voters: 56
            },
          ],
        },
        "DIBOMBARI": {
          "CASE COM BOMONO-BA-MBENGUE / A": [
            {
              station: "DIKOLO",
              voters: 861
            },
            {
              station: "NKONE",
              voters: 861
            },
          ],
          "CASE COMMUNAUTAIRE BOADIBO / A": [
            {
              station: "BOADIBO",
              voters: 2657
            },
            {
              station: "GABSIA",
              voters: 2657
            },
            {
              station: "NOBRA",
              voters: 2657
            },
          ],
          "CASE DE SANTE YASSEM / A": [
            {
              station: "YABAKON",
              voters: 78
            },
            {
              station: "YASSEM",
              voters: 78
            },
          ],
          "CENTRE D'ETAT CIVILE BALLI / A": [
            {
              station: "BALI",
              voters: 50
            },
          ],
          "CENTRE ETAT CIVIL BEJANGA / A": [
            {
              station: "BEJANGA",
              voters: 394
            },
          ],
          "E.E.C YANDOM / A": [
            {
              station: "YANDOM",
              voters: 193
            },
          ],
          "E.E.C. BWANJOUMBA / A": [
            {
              station: "BONAMAKA",
              voters: 256
            },
            {
              station: "BWANJOUMBA",
              voters: 256
            },
            {
              station: "MOUNDEBELLE",
              voters: 256
            },
          ],
          "E.E.C. NJOUKI / A": [
            {
              station: "NJOUKI",
              voters: 108
            },
          ],
          "E.E.C. YASSUKA / A": [
            {
              station: "YASSUKA",
              voters: 65
            },
          ],
          "E.P. BEKOKO / A": [
            {
              station: "BEKOKO",
              voters: 661
            },
          ],
          "E.P. BOMONO GARE / A": [
            {
              station: "BOMONO",
              voters: 826
            },
            {
              station: "GARE",
              voters: 2880
            },
            {
              station: "REGIE",
              voters: 2054
            },
            {
              station: "KASSALAFARM",
              voters: 826
            },
          ],
          "E.P. BOMONO-BA-JEDU / A": [
            {
              station: "BONAKOLLO",
              voters: 529
            },
            {
              station: "BONAMABONG",
              voters: 388
            },
            {
              station: "BONEWANG",
              voters: 670
            },
            {
              station: "BWAMBODI",
              voters: 388
            },
            {
              station: "SOLLE",
              voters: 388
            },
          ],
          "E.P. BOMONO-BA-MBENGUE / A": [
            {
              station: "JOMBE",
              voters: 596
            },
          ],
          "E.P. BONAMATEKE / A": [
            {
              station: "NKONGBONG",
              voters: 340
            },
            {
              station: "YAMIKOKI",
              voters: 340
            },
          ],
          "E.P. BWELELO / A": [
            {
              station: "BONAJANGA",
              voters: 315
            },
            {
              station: "BONAKOULE",
              voters: 796
            },
            {
              station: "BONAMALOLO",
              voters: 315
            },
            {
              station: "DIBOMBARI",
              voters: 740
            },
            {
              station: "CENTRE",
              voters: 709
            },
            {
              station: "NGUE",
              voters: 315
            },
            {
              station: "PEGNA",
              voters: 315
            },
            {
              station: "TIKI",
              voters: 315
            },
            {
              station: "KOULE",
              voters: 315
            },
          ],
          "E.P. NKAPA SOCAPALM / A": [
            {
              station: "NKAPA",
              voters: 1871
            },
          ],
          "E.P. NKAPA VILLAGE / A": [
            {
              station: "LEFEM",
              voters: 1915
            },
            {
              station: "MOUYENGUE",
              voters: 1115
            },
          ],
          "E.P. TILLO / A": [
            {
              station: "CAMP",
              voters: 1656
            },
            {
              station: "MAITRISE",
              voters: 670
            },
            {
              station: "SOCAPALM",
              voters: 1540
            },
            {
              station: "OUVRIERS",
              voters: 986
            },
            {
              station: "TILLO",
              voters: 1100
            },
            {
              station: "CITE",
              voters: 870
            },
            {
              station: "DES",
              voters: 550
            },
            {
              station: "CADRES",
              voters: 550
            },
            {
              station: "VILLAGE",
              voters: 2491
            },
          ],
          "E.P. YABEA / A": [
            {
              station: "YABEA",
              voters: 73
            },
          ],
          "E.T.A BWELELO / A": [
            {
              station: "E.T.A",
              voters: 250
            },
          ],
          "ECOLE CATHOLIQUE BONANGUELE / A": [
            {
              station: "BONAMASSOUKA",
              voters: 140
            },
            {
              station: "BONANGUELE",
              voters: 140
            },
            {
              station: "EWOULO",
              voters: 140
            },
          ],
          "ECOLE MATERNELLE BWELELO / A": [
            {
              station: "BONABENGA",
              voters: 256
            },
            {
              station: "BONANJANGA",
              voters: 487
            },
            {
              station: "BWATAKA",
              voters: 256
            },
          ],
          "ECOLE PRESBYTERIENNE YAPAKI / A": [
            {
              station: "MIONDO",
              voters: 1498
            },
            {
              station: "BAR",
              voters: 1498
            },
            {
              station: "MONTHE",
              voters: 1498
            },
            {
              station: "NGONGANG",
              voters: 1844
            },
            {
              station: "SONEL",
              voters: 1498
            },
            {
              station: "YAPAKI",
              voters: 1498
            },
          ],
          "ECOLE ST THOMAS - BOMONO - BA -  MBENGUE / A": [
            {
              station: "BAYONG",
              voters: 668
            },
            {
              station: "MAKA",
              voters: 1142
            },
            {
              station: "MOUKOMBO",
              voters: 668
            },
          ],
          "FOYER BASSA / A": [
            {
              station: "BASSA",
              voters: 313
            },
          ],
          "FOYER BONAMBONGUE / A": [
            {
              station: "BONAMBONGUE",
              voters: 24
            },
            {
              station: "YABWADIBE",
              voters: 24
            },
          ],
          "FOYER BONANDINDE / BIENDENDE / A": [
            {
              station: "BIENDINDE",
              voters: 70
            },
            {
              station: "BONADINDE",
              voters: 70
            },
          ],
          "FOYER DE MBANGUE I / A": [
            {
              station: "MBANGUE",
              voters: 94
            },
          ],
          "FOYER DIBOMBARI BEACH / A": [
            {
              station: "BONAMBWASSE",
              voters: 31
            },
            {
              station: "BEACH",
              voters: 31
            },
          ],
          "FOYER E.E.C. BOSSEDI I / A": [
            {
              station: "BONAMOUKOUDI",
              voters: 291
            },
            {
              station: "BOSSEDI",
              voters: 331
            },
          ],
          "FOYER MABANGA / A": [
            {
              station: "MABANGA",
              voters: 47
            },
          ],
          "FOYER NKENDE / A": [
            {
              station: "NKENDE",
              voters: 196
            },
          ],
          "FOYER SOCAPALM NKOUME / A": [
            {
              station: "NKOUME",
              voters: 296
            },
            {
              station: "CITY",
              voters: 296
            },
          ],
          "FOYER YABONA / A": [
            {
              station: "YABONA",
              voters: 61
            },
            {
              station: "YAMIDJANG",
              voters: 61
            },
          ],
          "FOYER YANGONANG / A": [
            {
              station: "BONGO",
              voters: 143
            },
            {
              station: "YANGONANG",
              voters: 143
            },
          ],
          "FOYER YATO / A": [
            {
              station: "MOULANGA",
              voters: 1353
            },
            {
              station: "YATO",
              voters: 837
            },
          ],
          "MISSION CATHOLIQUE BABENGA / A": [
            {
              station: "BABENGA",
              voters: 2068
            },
            {
              station: "LYBANAIS",
              voters: 2068
            },
          ],
          "MISSION CATHOLIQUE NKAPA / A": [
            {
              station: "MOUNYENGUE",
              voters: 800
            },
          ],
          "MISSSION CATHOLIQUE BEKOUMA / A": [
            {
              station: "BEKOUMA",
              voters: 444
            },
          ],
          "N,B,C/EBC MINYOUNGOU / A": [
            {
              station: "MINYOUNGOU",
              voters: 69
            },
            {
              station: "YANDOUNGOU",
              voters: 69
            },
          ],
          "POSTE AGRICOLE NGODI / A": [
            {
              station: "BUEA-PONGO",
              voters: 129
            },
            {
              station: "NGODI",
              voters: 129
            },
          ],
          "POSTE AGRICOLE NJOBWELE / A": [
            {
              station: "NJOBWELE",
              voters: 73
            },
          ],
          "TRIBUNAL BWELELO / A": [
            {
              station: "III",
              voters: 231
            },
            {
              station: "BONATAKWA",
              voters: 231
            },
            {
              station: "COMMISSARIAT",
              voters: 231
            },
            {
              station: "SPECIAL",
              voters: 231
            },
            {
              station: "GENDARMERIE",
              voters: 231
            },
            {
              station: "BWELOLO",
              voters: 231
            },
          ],
          "UEBC BONABWENG / A": [
            {
              station: "BONABWENG",
              voters: 81
            },
          ],
          "UEBC BWASSALO / A": [
            {
              station: "BWASSALO",
              voters: 234
            },
          ],
        },
        "EBONE": {
          "ANCIEN POSTE FORESTIER / A": [
            {
              station: "EBONE-MBENG",
              voters: 186
            },
            {
              station: "EYANG-MBENG",
              voters: 186
            },
            {
              station: "EBONE",
              voters: 186
            },
          ],
          "CASE COMMUNAUTAIRE / A": [
            {
              station: "NJANGA",
              voters: 124
            },
            {
              station: "SINGUEDJANG",
              voters: 124
            },
          ],
          "CES BAKWAT / A": [
            {
              station: "KEM",
              voters: 1142
            },
            {
              station: "BAKWAT",
              voters: 990
            },
          ],
          "CES MANENGOLE / A": [
            {
              station: "BAYILE",
              voters: 70
            },
            {
              station: "EBANGTE",
              voters: 70
            },
            {
              station: "MANJAM",
              voters: 872
            },
            {
              station: "MANENGOLE",
              voters: 1397
            },
            {
              station: "NLOCK",
              voters: 70
            },
          ],
          "CES MANENGOUBA / A": [
            {
              station: "MANENGOUBA",
              voters: 153
            },
          ],
          "CS MAMBELLION / A": [
            {
              station: "MAMBELLION",
              voters: 76
            },
          ],
          "CS MANGAMBA / A": [
            {
              station: "MANGAMBA",
              voters: 427
            },
          ],
          "ECOLE CATHOLIQUE MANENGOLE / A": [
            {
              station: "MANEBOUE",
              voters: 565
            },
          ],
          "ECOLE CATHOLIQUE NHANG BAKWAT / A": [
            {
              station: "NHANG",
              voters: 261
            },
          ],
          "ECOLE CATHOLIQUE SACRE COEUR  NDOUNGUE / A": [
            {
              station: "NDOUNGUE",
              voters: 1353
            },
            {
              station: "BANG",
              voters: 1167
            },
          ],
          "EEC BADJONG / A": [
            {
              station: "BADJONG",
              voters: 60
            },
          ],
          "EP BAKAKTE / A": [
            {
              station: "BETTE",
              voters: 115
            },
            {
              station: "EKRINGOUB",
              voters: 115
            },
            {
              station: "KWADIKOH",
              voters: 488
            },
            {
              station: "BAKAKTE",
              voters: 115
            },
          ],
          "EP BAKWAT / A": [
            {
              station: "LAH",
              voters: 373
            },
          ],
          "EP BALONDO / A": [
            {
              station: "BALONDO",
              voters: 214
            },
          ],
          "EP BASSELTE / A": [
            {
              station: "BASSELTE",
              voters: 94
            },
          ],
          "EP BEMJO / A": [
            {
              station: "BEMJO",
              voters: 43
            },
          ],
          "EP BWANEBWA / A": [
            {
              station: "BWANEBWA",
              voters: 117
            },
          ],
          "EP EBONE / A": [
            {
              station: "EKOM-KOH",
              voters: 336
            },
            {
              station: "EKOM-MBENG",
              voters: 336
            },
          ],
          "EP EKOHOCK / A": [
            {
              station: "EKOHOCK",
              voters: 139
            },
            {
              station: "NTOLO",
              voters: 271
            },
          ],
          "EP EKOMTOLO / A": [
            {
              station: "EKOMTOLO",
              voters: 66
            },
          ],
          "EP NDOMBENG / A": [
            {
              station: "NDOMBENG",
              voters: 128
            },
          ],
          "EP NKONGNINE / A": [
            {
              station: "NKONGNINE",
              voters: 482
            },
          ],
          "EP SALMOA / A": [
            {
              station: "SALMOA",
              voters: 85
            },
          ],
          "LYCEE D'EBONE / A": [
            {
              station: "EBONE-KOH",
              voters: 239
            },
          ],
          "MAIRIE D'EBONE / A": [
            {
              station: "FONTIONNAIRE",
              voters: 97
            },
            {
              station: "SERVICE",
              voters: 97
            },
          ],
          "SAR/SM MANGAMBA / A": [
            {
              station: "EKOMEDION",
              voters: 184
            },
            {
              station: "MBAKA",
              voters: 370
            },
            {
              station: "VILLAGE",
              voters: 370
            },
            {
              station: "NDIANG-EKOM",
              voters: 184
            },
            {
              station: "NTAMAKO",
              voters: 423
            },
            {
              station: "NYAMSA",
              voters: 184
            },
          ],
        },
        "LOUM": {
          "COLLEGE NGAMGA & FRERES / A": [
            {
              station: "RAILS",
              voters: 296
            },
            {
              station: "BONEBELA",
              voters: 296
            },
          ],
          "COLLEGE ST PIERRE & PAUL / A": [
            {
              station: "NKOMBI",
              voters: 11198
            },
          ],
          "E. ST ALBERT LOUM CHT GARE / A": [
            {
              station: "NGONGUE",
              voters: 748
            },
            {
              station: "NGOUMBA",
              voters: 748
            },
          ],
          "E. ST PAUL LOUM CHT CIE / A": [
            {
              station: "DIME",
              voters: 770
            },
          ],
          "ECOLE CEBEC LOUM CHT CIE / A": [
            {
              station: "NASSIF",
              voters: 1033
            },
          ],
          "ECOLE CEBEC MADAGASCAR / A": [
            {
              station: "MADAGASCAR",
              voters: 575
            },
          ],
          "ECOLE CEBEC MARCHE / A": [
            {
              station: "INDEPENDANCE",
              voters: 4083
            },
            {
              station: "MARCHE",
              voters: 1925
            },
          ],
          "ECOLE PUBLIQUE BABONG / A": [
            {
              station: "BONADAM",
              voters: 113
            },
            {
              station: "(BABONG)",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE BALONDO / A": [
            {
              station: "BALONDO",
              voters: 302
            },
          ],
          "ECOLE PUBLIQUE BONALEBE / A": [
            {
              station: "BONALEBE",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE BONKENG / A": [
            {
              station: "BONAMBOME",
              voters: 756
            },
            {
              station: "BONKENG",
              voters: 756
            },
            {
              station: "NYLON",
              voters: 756
            },
          ],
          "ECOLE PUBLIQUE LOUM CHT CIE / A": [
            {
              station: "MOUNGO",
              voters: 2292
            },
            {
              station: "RIVER",
              voters: 2292
            },
          ],
          "ECOLE PUBLIQUE MABOMBE / A": [
            {
              station: "MABOMBE",
              voters: 527
            },
            {
              station: "TWO",
              voters: 527
            },
            {
              station: "WATER",
              voters: 527
            },
          ],
          "ECOLE PUBLIQUE SANDA I / A": [
            {
              station: "NGODI",
              voters: 12409
            },
          ],
          "ESPLANADE CHEFFERIE BWANIBWA II / A": [
            {
              station: "BWANIBWA",
              voters: 57
            },
          ],
          "FOYER BALENGOU / A": [
            {
              station: "MANENGWASSA",
              voters: 3877
            },
          ],
          "FOYER BANGOULAP / A": [
            {
              station: "DIMITHE",
              voters: 809
            },
          ],
          "FOYER FONTAINE LOUM CHT CIE / A": [
            {
              station: "FONTAINE",
              voters: 108
            },
          ],
          "FOYER NGONDO III / A": [
            {
              station: "VILLAGE",
              voters: 55
            },
            {
              station: "NGONDO",
              voters: 55
            },
            {
              station: "III",
              voters: 55
            },
          ],
          "FOYER SALAKA / A": [
            {
              station: "SALAKA",
              voters: 123
            },
          ],
          "HANGAR PHP ROUTE BAKOSSI A / A": [
            {
              station: "ROUTE",
              voters: 2158
            },
            {
              station: "BAKOSSI",
              voters: 2158
            },
          ],
          "LYCEE BILINGUE LOUM CHT GARE / A": [
            {
              station: "BONEKO",
              voters: 535
            },
            {
              station: "MISSION",
              voters: 535
            },
            {
              station: "CATHOLIQUE",
              voters: 535
            },
          ],
          "LYCEE DE LOUM / A": [
            {
              station: "MPONDO",
              voters: 253
            },
          ],
          "MAIRIE DE LOUM / A": [
            {
              station: "ETAPE",
              voters: 1167
            },
          ],
          "SAR. SM BADJOKI / A": [
            {
              station: "BADJOKI",
              voters: 73
            },
          ],
          "TRIBUNAL DE LOUM / A": [
            {
              station: "ABATTOIR",
              voters: 3185
            },
          ],
        },
        "MANJO": {
          "ANCIENNE ECOLE MATERNELLE NKWAH / A": [
            {
              station: "NKWAH",
              voters: 217
            },
            {
              station: "(QTIER",
              voters: 217
            },
          ],
          "CES BILINGUE DE MOUMEKENG / A": [
            {
              station: "MOUMEKENG",
              voters: 140
            },
          ],
          "CJA / A": [
            {
              station: "MIKOMBE-POSTE",
              voters: 303
            },
            {
              station: "(DIBOMBE)",
              voters: 303
            },
          ],
          "COLLEGE DE L'UNITE / A": [
            {
              station: "BOUM",
              voters: 824
            },
          ],
          "COLLEGE DE NLONAKO / A": [
            {
              station: "MANEWANG-COLLEGE",
              voters: 96
            },
            {
              station: "NLONAKO",
              voters: 96
            },
          ],
          "ECOLE BILINGUE ANNEXE DE MANJO / A": [
            {
              station: "GENDARMERIE",
              voters: 81
            },
          ],
          "ECOLE CATHOLIQUE KOLLA -MISSION / A": [
            {
              station: "MISSION",
              voters: 495
            },
          ],
          "ECOLE CATHOLIQUE LALA MISSION / A": [
            {
              station: "LALA",
              voters: 536
            },
          ],
          "ECOLE CATHOLIQUE MOUAKOUMEL / A": [
            {
              station: "MOUAKOUMEL",
              voters: 93
            },
          ],
          "ECOLE CATHOLIQUE ST MARC DE NDIANG / A": [
            {
              station: "NDIANG(QTIER",
              voters: 751
            },
          ],
          "ECOLE CATHOLIQUE ST NESTOR DE  MIKOMBE / A": [
            {
              station: "MIKOMBE-ECOLE",
              voters: 590
            },
            {
              station: "CATHOLIQUE",
              voters: 590
            },
          ],
          "ECOLE CEBEC DE NLOHE-NSOLE / A": [
            {
              station: "NLOHE-NSOLE",
              voters: 451
            },
          ],
          "ECOLE CEBEC KWALLA / A": [
            {
              station: "KWALLA",
              voters: 924
            },
            {
              station: "ECOLE",
              voters: 924
            },
            {
              station: "FOIE",
              voters: 924
            },
            {
              station: "(CHEFFERIE)",
              voters: 924
            },
            {
              station: "KWALLA-CEBEC",
              voters: 424
            },
          ],
          "ECOLE CEBEC MANENGOTENG / A": [
            {
              station: "MANENGOTENG-",
              voters: 415
            },
            {
              station: "CHEFFERIE",
              voters: 415
            },
          ],
          "ECOLE P. NJOUMBENG ANNEXE  MOUETOUCK / A": [
            {
              station: "I-MOUETOUCK",
              voters: 77
            },
          ],
          "ECOLE PUBLIQUE  GR1 DE MANJO / A": [
            {
              station: "EMENG",
              voters: 1575
            },
            {
              station: "COMMISSARIAT",
              voters: 1575
            },
            {
              station: "EMENG-CHEFFERIE",
              voters: 907
            },
            {
              station: "EMENG-MATERNELLE",
              voters: 1222
            },
          ],
          "ECOLE PUBLIQUE ABANG / A": [
            {
              station: "ABANG",
              voters: 208
            },
          ],
          "ECOLE PUBLIQUE BADJOUNGUE / A": [
            {
              station: "BADJOUNGUE",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE MANJO / A": [
            {
              station: "EMAL-GARE",
              voters: 592
            },
          ],
          "ECOLE PUBLIQUE DE NGOL / A": [
            {
              station: "NGOL",
              voters: 309
            },
          ],
          "ECOLE PUBLIQUE DE NSOUNG / A": [
            {
              station: "NSOUNG",
              voters: 96
            },
          ],
          "ECOLE PUBLIQUE GR2 MANEWANG / A": [
            {
              station: "MANEWANG-CEBEC",
              voters: 623
            },
            {
              station: "MANEWANG-CHEFFERIE",
              voters: 371
            },
          ],
          "ECOLE PUBLIQUE KOLLA / A": [
            {
              station: "KOLLA",
              voters: 1267
            },
            {
              station: "CARREFOUR",
              voters: 1081
            },
            {
              station: "-CHEFFERIE",
              voters: 376
            },
            {
              station: "-COMITE",
              voters: 705
            },
          ],
          "ECOLE PUBLIQUE LALA VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 227
            },
          ],
          "ECOLE PUBLIQUE MANENGOTENG / A": [
            {
              station: "MANENGOTENG-GARE",
              voters: 218
            },
          ],
          "ECOLE PUBLIQUE MANTEM I / A": [
            {
              station: "MANTEM",
              voters: 319
            },
          ],
          "ECOLE PUBLIQUE MBETTE / A": [
            {
              station: "MBETTE",
              voters: 200
            },
          ],
          "ECOLE PUBLIQUE MOUANDONG / A": [
            {
              station: "MOUANDONG",
              voters: 218
            },
          ],
          "ECOLE PUBLIQUE NAMBA / A": [
            {
              station: "NAMBA",
              voters: 311
            },
          ],
          "ECOLE PUBLIQUE NJOUMBENG I / A": [
            {
              station: "NJOUMBENG",
              voters: 704
            },
            {
              station: "I-CHEFFERIE",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE NJOUMBENG I BIS / A": [
            {
              station: "BIS",
              voters: 154
            },
            {
              station: "BIG",
              voters: 154
            },
            {
              station: "MOP)",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE NJOUMBENG III / A": [
            {
              station: "III",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE NLOHE-NDIBE / A": [
            {
              station: "NLOHE-NDIBE",
              voters: 284
            },
          ],
          "FOYER BALESSING / A": [
            {
              station: "EMAL-FOYER",
              voters: 737
            },
            {
              station: "BALESSING",
              voters: 737
            },
            {
              station: "(TCHONLAFI)",
              voters: 737
            },
          ],
          "LYCEE DE MANJO / A": [
            {
              station: "EMENG-LYCEE",
              voters: 517
            },
          ],
          "MAIRIE DE MANJO / A": [
            {
              station: "MIKOMBE-CHEFFERIE",
              voters: 1317
            },
            {
              station: "(ECOLE",
              voters: 1317
            },
            {
              station: "MAT,)",
              voters: 1317
            },
          ],
          "MISSION CATHOLIQUE DE MOUASSOUM / A": [
            {
              station: "MOUASSOUM",
              voters: 86
            },
          ],
          "MISSION CATHOLIQUE DE NDOM / A": [
            {
              station: "NDOM",
              voters: 72
            },
          ],
          "MISSION CATHOLIQUE KOLLA-SONGO / A": [
            {
              station: "KOLLA-SONGO",
              voters: 178
            },
          ],
          "NLOHE - DIBOMBE ECOLE CATHOLIQUE / A": [
            {
              station: "NLOHE-DIBOMBE",
              voters: 523
            },
          ],
          "SALLE COMITE DE NLOHE-SASSA / A": [
            {
              station: "NLOHE-SASSA",
              voters: 560
            },
          ],
          "SALLE COMITE EKANGTE-MPAKA / A": [
            {
              station: "EKANGTE-MPAKA",
              voters: 111
            },
          ],
          "SALLE COMITE MANJO ETAM / A": [
            {
              station: "MANJO-ETAM",
              voters: 88
            },
          ],
          "SALLE COMITE NGOLSI / A": [
            {
              station: "NGOLSI",
              voters: 39
            },
          ],
          "SAR SM / A": [
            {
              station: "EMENG-COMMISSARIAT",
              voters: 668
            },
          ],
          "SERVICE SOCIAL MANJO / A": [
            {
              station: "EMAL-EXPRESS",
              voters: 829
            },
            {
              station: "UNION",
              voters: 829
            },
          ],
        },
        "MBANGA": {
          "CASE COMMUNAUTAIRE / A": [
            {
              station: "ROUTE",
              voters: 536
            },
          ],
          "ECOLE PUB BILINGUE MBANGA GPE 1 / A": [
            {
              station: "GENDARMERIE",
              voters: 262
            },
            {
              station: "TERRITORIALE",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE BILINGUE MBANGA GPE 2 /  A": [
            {
              station: "PRISON",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE GRP III / A": [
            {
              station: "FIKO",
              voters: 2429
            },
            {
              station: "QUARTIER",
              voters: 32148
            },
          ],
          "ECOLE PUBLIQUE GRP IV / A": [
            {
              station: "MALENDE",
              voters: 211
            },
          ],
          "ECOLE PUBLIQUE GRP V / A": [
            {
              station: "YOKE",
              voters: 320
            },
          ],
          "ECOLE PUBLIQUE KOTTO DOWN TOWN / A": [
            {
              station: "KOTTO",
              voters: 2261
            },
          ],
          "ECOLE PUBLIQUE MATOUKE / A": [
            {
              station: "MATOUKE",
              voters: 894
            },
            {
              station: "NEW",
              voters: 447
            },
          ],
          "ECOLE PUBLIQUE MOUYOUKA / A": [
            {
              station: "MOUYOUKA",
              voters: 1355
            },
          ],
          "ECOLE SAINT JOSEPH KOTTO NACHTIGAL / A": [
            {
              station: "NACHTIGAL",
              voters: 778
            },
          ],
          "EEC DIKOUMA I / A": [
            {
              station: "DIKOUMA",
              voters: 258
            },
          ],
          "EEC NDOH I / A": [
            {
              station: "NDOH",
              voters: 2086
            },
          ],
          "EEC NDOM I / A": [
            {
              station: "NDOM",
              voters: 107
            },
          ],
          "FOYER CAMP I / A": [
            {
              station: "CAMP",
              voters: 215
            },
            {
              station: "ONE",
              voters: 215
            },
          ],
          "FOYER ITALIA CERAMICA / A": [
            {
              station: "LENGUE",
              voters: 178
            },
          ],
          "GARE DE NDOH BEACH / A": [
            {
              station: "BEACH",
              voters: 80
            },
          ],
          "GARE DE TRAIN KOMBE / A": [
            {
              station: "KOMBE",
              voters: 3004
            },
            {
              station: "GARE",
              voters: 115
            },
          ],
          "GROUPE SCOLAIRE BILINGUE KOMBE  MARCHE / A": [
            {
              station: "MARCHE",
              voters: 1447
            },
          ],
          "MAIRIE DE MBANGA / A": [
            {
              station: "ADMINISTRATIF",
              voters: 340
            },
          ],
          "MISSION CATHOLIQUE / A": [
            {
              station: "MISSION",
              voters: 1524
            },
          ],
        },
        "MELONG": {
          "COLLEGE 3 ETOILES / A": [
            {
              station: "DENZO",
              voters: 240
            },
            {
              station: "VILLE",
              voters: 192
            },
          ],
          "COLLEGE POLYVALENT / A": [
            {
              station: "(FOTSO)",
              voters: 462
            },
            {
              station: "(CAFE)",
              voters: 733
            },
          ],
          "COLLEGE TCHOUMO AARON / A": [
            {
              station: "PONT",
              voters: 1905
            },
          ],
          "CS MBOKEM / A": [
            {
              station: "MBOKEM",
              voters: 23
            },
          ],
          "E P NGALMBO / A": [
            {
              station: "NGALMBO",
              voters: 139
            },
          ],
          "ECOLE BILINGUE MOUANGUEL / A": [
            {
              station: "MOUAKWEN",
              voters: 382
            },
            {
              station: "NKOM",
              voters: 382
            },
          ],
          "ECOLE CEBEC MELONG CENTRE / A": [
            {
              station: "BIS",
              voters: 1947
            },
          ],
          "ECOLE ST PAUL MELONG CENTRE / A": [
            {
              station: "MISSION",
              voters: 1423
            },
          ],
          "ECOLE ST PAUL NEW MELONG / A": [
            {
              station: "NEW",
              voters: 1850
            },
            {
              station: "MELONG",
              voters: 1850
            },
          ],
          "ECOLE ST PAUL NJINJOU 1 / A": [
            {
              station: "NJINJOU",
              voters: 690
            },
          ],
          "ECOLE ST PHILIPPE DE MBONDANG / A": [
            {
              station: "MBONDEMANG(LA",
              voters: 1048
            },
            {
              station: "FORET)",
              voters: 1048
            },
          ],
          "EEC MBOANGO / A": [
            {
              station: "MBOANGO",
              voters: 110
            },
          ],
          "EP BONDJA NKONGSOUNG / A": [
            {
              station: "NKONGSOUNG",
              voters: 2050
            },
            {
              station: "BONDJA",
              voters: 221
            },
          ],
          "EP EBAKONG / A": [
            {
              station: "EBAKONG",
              voters: 124
            },
          ],
          "EP EBANG MAMA / A": [
            {
              station: "EBANG",
              voters: 313
            },
            {
              station: "MAMA",
              voters: 565
            },
          ],
          "EP EDIENGO / A": [
            {
              station: "EDIENGO",
              voters: 20
            },
          ],
          "EP EKAH / A": [
            {
              station: "EKAH",
              voters: 85
            },
            {
              station: "NKAH",
              voters: 392
            },
          ],
          "EP EKANANG / A": [
            {
              station: "EKANANG",
              voters: 235
            },
          ],
          "EP EKOLBOUNI / A": [
            {
              station: "VILLAGE",
              voters: 928
            },
          ],
          "EP ESSEKOU / A": [
            {
              station: "ESSEKOU",
              voters: 671
            },
          ],
          "EP ETABANG / A": [
            {
              station: "ETABANG",
              voters: 225
            },
            {
              station: "NLOLACK",
              voters: 225
            },
          ],
          "EP GP1 MELONG CENTRE / A": [
            {
              station: "HAOUSSA",
              voters: 1639
            },
          ],
          "EP LELEM MANGWETE / A": [
            {
              station: "LELEM",
              voters: 6337
            },
            {
              station: "MANGWETE",
              voters: 706
            },
          ],
          "EP LELEM MOUANTONG / A": [
            {
              station: "MOUANTONG",
              voters: 5631
            },
            {
              station: "QUARTIER",
              voters: 20616
            },
          ],
          "EP MANA / A": [
            {
              station: "MANA",
              voters: 304
            },
          ],
          "EP MANGWEKANG / A": [
            {
              station: "MANGWEKANG",
              voters: 97
            },
          ],
          "EP MANKWA / A": [
            {
              station: "MANKWA",
              voters: 343
            },
          ],
          "EP MBOKAMBO / A": [
            {
              station: "MBOKAMBO",
              voters: 232
            },
          ],
          "EP MBOMBENG / A": [
            {
              station: "MBONDANG",
              voters: 518
            },
            {
              station: "NLONGKO",
              voters: 518
            },
          ],
          "EP MBOUASSOUM / A": [
            {
              station: "MBOUASSOUM",
              voters: 549
            },
          ],
          "EP MBOUROUKOU / A": [
            {
              station: "MBOUROUKOU",
              voters: 677
            },
          ],
          "EP MBOUROUKOU MONT / A": [
            {
              station: "MONT",
              voters: 49
            },
          ],
          "EP MOUANGUEL / A": [
            {
              station: "EKOUNI",
              voters: 313
            },
            {
              station: "NDOMVEN",
              voters: 313
            },
          ],
          "EP MOUHE / A": [
            {
              station: "MOUHE",
              voters: 86
            },
          ],
          "EP NANSI / A": [
            {
              station: "NANSI",
              voters: 1496
            },
          ],
          "EP NDOKOU / A": [
            {
              station: "NDOKOU",
              voters: 214
            },
          ],
          "EP NINONG / A": [
            {
              station: "NINONG",
              voters: 275
            },
          ],
          "EP NJINJO VILLAGE / A": [
            {
              station: "NJINJO",
              voters: 84
            },
          ],
          "EP NKANDJOU 1 / A": [
            {
              station: "NKANDJOU",
              voters: 592
            },
          ],
          "EP NKONGSOUNG / A": [
            {
              station: "LONGTRAIT",
              voters: 1261
            },
          ],
          "EP NSANKE / A": [
            {
              station: "NSANKE",
              voters: 182
            },
          ],
          "EP NZOBI / A": [
            {
              station: "NZOBI",
              voters: 41
            },
          ],
          "EP PASSIM / A": [
            {
              station: "PASSIM",
              voters: 296
            },
          ],
          "LYCEE BILINGUE DE MELONG / A": [
            {
              station: "EKOLKANG",
              voters: 297
            },
          ],
          "MISSION CATHOLIQUE MBOKOLA / A": [
            {
              station: "MBOKOLA",
              voters: 175
            },
            {
              station: "MBOMOANGO",
              voters: 175
            },
          ],
          "MISSION CATHOLIQUE NYABANG  PLANTATION / A": [
            {
              station: "NYABANG",
              voters: 234
            },
            {
              station: "PLANTATION",
              voters: 128
            },
          ],
          "POSTE AGRICOLE / A": [
            {
              station: "EKOLBOUNI",
              voters: 280
            },
            {
              station: "POSTE",
              voters: 158
            },
            {
              station: "AGRICOLE",
              voters: 158
            },
          ],
          "SAR/SM MOUANGUEL / A": [
            {
              station: "MOUANGUEL",
              voters: 2099
            },
            {
              station: "BORIKO",
              voters: 511
            },
            {
              station: "MOUEKOUM",
              voters: 198
            },
          ],
        },
        "MOMBO": {
          "E.P. DE BOUBOU / A": [
            {
              station: "BOUBOU",
              voters: 373
            },
          ],
          "E.P. DE DJOUNGO-RAILS / A": [
            {
              station: "DJOUNGO-RAILS",
              voters: 215
            },
          ],
          "E.P. DE DJOUNGO-ROUTE / A": [
            {
              station: "DJOUNGO-ROUTE",
              voters: 296
            },
          ],
          "E.P. DE MOMBO-GARE / A": [
            {
              station: "QUARTIER",
              voters: 2584
            },
          ],
          "E.P. DE TANGUI / A": [
            {
              station: "TANGUI",
              voters: 316
            },
          ],
          "E.P.DE MOUNDECK / A": [
            {
              station: "MOUNDECK",
              voters: 172
            },
          ],
          "PLACE PUBLIQUE DE NKWANGSI / A": [
            {
              station: "NKWANGSI",
              voters: 242
            },
          ],
        },
        "NJOMBE-PENJA": {
          "CAMPOST PENJA / A": [
            {
              station: "MBALMBONG",
              voters: 4750
            },
          ],
          "CASE COMITE MBOME NGWONDANG / A": [
            {
              station: "MBOME",
              voters: 76
            },
            {
              station: "NGWONDANG",
              voters: 76
            },
            {
              station: "MBONKOTA",
              voters: 76
            },
            {
              station: "NGOMBA",
              voters: 76
            },
            {
              station: "NJOMBE-FAN",
              voters: 76
            },
          ],
          "CASE COMMUNAUTAIRE BONANDAM / A": [
            {
              station: "BAYILE",
              voters: 144
            },
            {
              station: "(NJOMBE)",
              voters: 18244
            },
            {
              station: "BONADAM",
              voters: 144
            },
          ],
          "ECOLE BILINGUE FOUTCHOUANG PENJA / A": [
            {
              station: "CHATEAU",
              voters: 2444
            },
            {
              station: "D'EAU",
              voters: 2444
            },
            {
              station: "CACAOYERS",
              voters: 1222
            },
            {
              station: "SOURCE",
              voters: 1222
            },
          ],
          "ECOLE CEBEC PENJA / A": [
            {
              station: "MOUATABA",
              voters: 646
            },
            {
              station: "NKOLBIANDI",
              voters: 646
            },
          ],
          "ECOLE PUBLIQUE GROUPE 1 NJOMBE / A": [
            {
              station: "MBWALE",
              voters: 1368
            },
            {
              station: "QUARTIER",
              voters: 17884
            },
          ],
          "ECOLE PUBLIQUE GROUPE 2 PENJA / A": [
            {
              station: "CACAO",
              voters: 1615
            },
            {
              station: "TOWN",
              voters: 1615
            },
            {
              station: "1(PENJA)",
              voters: 952
            },
          ],
          "ECOLE SAINT LUC GROUPE II PENJA / A": [
            {
              station: "SHELL-",
              voters: 452
            },
            {
              station: "SAM",
              voters: 452
            },
            {
              station: "PENJA",
              voters: 452
            },
          ],
          "ECOLE SAINT-PIERRE BOUBA 3 / A": [
            {
              station: "BOUBA",
              voters: 869
            },
            {
              station: "(PENJA)",
              voters: 11479
            },
          ],
          "FOYER BACHINGOU MOULINKAM NJOMBE / A": [
            {
              station: "MOULINKAM",
              voters: 1147
            },
          ],
          "LYCEE BILINGUE PENJA / A": [
            {
              station: "MOUATCHOM",
              voters: 364
            },
            {
              station: "MPOULA",
              voters: 364
            },
          ],
          "SHELL PENJA / A": [
            {
              station: "SHELL",
              voters: 1084
            },
          ],
        },
        "NKONGSAMBA I": {
          "CEBEC CENTRE / A": [
            {
              station: "MOUANDJA",
              voters: 582
            },
          ],
          "CEBEC EKEL / A": [
            {
              station: "(CEBEC",
              voters: 1814
            },
            {
              station: "EKEL)",
              voters: 1814
            },
          ],
          "CEBEC MOUANBOH / A": [
            {
              station: "MOUANBOH",
              voters: 950
            },
          ],
          "CENTRE DE SANTE DE NLONKO'O / A": [
            {
              station: "NLONKO'O",
              voters: 1354
            },
          ],
          "COMMISSARIAT CENTRAL / A": [
            {
              station: "(COMMISSARIAT)",
              voters: 2237
            },
          ],
          "COMMUNAUTE URBAINE / A": [
            {
              station: "(COMMUNAUTE",
              voters: 1866
            },
            {
              station: "URBAINE)",
              voters: 1866
            },
          ],
          "ECOLE MATERNELLE BARESSOUMTOU / A": [
            {
              station: "MOSQUEE",
              voters: 1399
            },
          ],
          "ECOLE ST JEAN BAPTISTE / A": [
            {
              station: "STADE",
              voters: 1374
            },
          ],
          "EP DE MBOUL / A": [
            {
              station: "BADJOKI",
              voters: 42
            },
            {
              station: "SINGA",
              voters: 42
            },
          ],
          "EP EKAMBENG / A": [
            {
              station: "NGALMOA",
              voters: 190
            },
          ],
          "EP ENGUENGUE / A": [
            {
              station: "ENGUENGUE",
              voters: 85
            },
          ],
          "EP GROUPE II B / A": [
            {
              station: "EDIP",
              voters: 1116
            },
          ],
          "EP GROUPE IV / A": [
            {
              station: "BARESSOUMTOU",
              voters: 4073
            },
            {
              station: "CARRIERE",
              voters: 1300
            },
            {
              station: "EBOUM",
              voters: 9616
            },
            {
              station: "(GARAGE",
              voters: 1259
            },
            {
              station: "ADMINISTRATIF)",
              voters: 1259
            },
          ],
          "FOYER BALENGOU / A": [
            {
              station: "MBENG",
              voters: 4254
            },
            {
              station: "(FOYER",
              voters: 2782
            },
            {
              station: "BALENGOU)",
              voters: 912
            },
            {
              station: "EKEL",
              voters: 7450
            },
            {
              station: "KO'O",
              voters: 5407
            },
          ],
          "FOYER BANGANGTE / A": [
            {
              station: "BANGANGTE)",
              voters: 262
            },
          ],
          "FOYER BANGOUA / A": [
            {
              station: "BANGOUA)",
              voters: 562
            },
          ],
          "FOYER BANGOULAP / A": [
            {
              station: "BANGOULAP)",
              voters: 464
            },
          ],
          "FOYER BATCHINGOU / A": [
            {
              station: "BATCHINGOU)",
              voters: 252
            },
          ],
          "FOYER BAYANGAM / A": [
            {
              station: "BAYANGAM)",
              voters: 215
            },
          ],
          "FOYER CULTUREL / A": [
            {
              station: "EBOUMDJA",
              voters: 839
            },
          ],
          "FOYER FOTOUNI / A": [
            {
              station: "FOTOUNI)",
              voters: 115
            },
          ],
          "GARE FERROVIAIRE / A": [
            {
              station: "(GARE",
              voters: 809
            },
            {
              station: "FERROVIAIRE)",
              voters: 809
            },
          ],
          "GARNISON MILITAIRE / A": [
            {
              station: "(RASS)",
              voters: 549
            },
          ],
          "GENDARMERIE / A": [
            {
              station: "(GENDARMERIE)",
              voters: 182
            },
          ],
          "INSPECTION PRIMAIRE / A": [
            {
              station: "(INSPECTION",
              voters: 256
            },
            {
              station: "PRIMAIRE)",
              voters: 256
            },
          ],
          "PRISON PRINCIPALE / A": [
            {
              station: "(PRISON",
              voters: 247
            },
            {
              station: "PRINCIPALE)",
              voters: 247
            },
          ],
          "USINE KWAYEP / A": [
            {
              station: "EGNOKI",
              voters: 288
            },
          ],
        },
        "NKONGSAMBA III": {
          "CCCS / A": [
            {
              station: "EKOL-MBENG",
              voters: 1093
            },
            {
              station: "CCCS",
              voters: 1093
            },
          ],
          "COLLEGE MBAMY / A": [
            {
              station: "BARESSOUMTOU",
              voters: 5136
            },
            {
              station: "AVIATION",
              voters: 2039
            },
            {
              station: "MBAMY)",
              voters: 1187
            },
          ],
          "CPFF / A": [
            {
              station: "RASS",
              voters: 400
            },
          ],
          "DELEGATION DU MINEPAT / A": [
            {
              station: "MINEPAT",
              voters: 430
            },
          ],
          "ECOLE MATERNELLE GROUPE I EKOL-MB / A": [
            {
              station: "EKOL",
              voters: 1443
            },
            {
              station: "MBENG",
              voters: 1443
            },
            {
              station: "ECOLE",
              voters: 426
            },
            {
              station: "MATERNELLE",
              voters: 426
            },
          ],
          "ECOLE PUBLIQUE BARESSOUMT / A": [
            {
              station: "(EP)",
              voters: 852
            },
            {
              station: "RAILS",
              voters: 2081
            },
            {
              station: "POOLA",
              voters: 1918
            },
          ],
          "ECOLE PUBLIQUE D'APPLICATION LA  REFERENCE / A": [
            {
              station: "AVIA.",
              voters: 1016
            },
            {
              station: "PMI",
              voters: 1016
            },
            {
              station: "NLONAKO",
              voters: 1016
            },
          ],
          "ECOLE PUBLIQUE DE MBORIKO / A": [
            {
              station: "MBORIKO",
              voters: 105
            },
          ],
          "ECOLE PUBLIQUE DE NGWA / A": [
            {
              station: "NGWA",
              voters: 291
            },
          ],
          "GARAGE ADMINISTRATIF / A": [
            {
              station: "GARAGE",
              voters: 187
            },
            {
              station: "ADMIN.",
              voters: 187
            },
          ],
          "LYCEE BILINGUE DE NKONGSAMBA / A": [
            {
              station: "MBARESSOUMTOU",
              voters: 207
            },
            {
              station: "VILLAGE",
              voters: 207
            },
          ],
        },
        "NKONGSAMBA II": {
          "COLLEGE SOCKA MBONGUE / A": [
            {
              station: "(COLLEGE",
              voters: 544
            },
            {
              station: "SOCKA)",
              voters: 544
            },
          ],
          "COLLEGE ST JEANNE D'ARC / A": [
            {
              station: "(JEANNE",
              voters: 461
            },
            {
              station: "D'ARC)",
              voters: 461
            },
          ],
          "ECOLE DE L'UNITE / A": [
            {
              station: "PALMIER",
              voters: 2311
            },
          ],
          "ECOLE LES DAUPHINS / A": [
            {
              station: "NGWA",
              voters: 373
            },
          ],
          "ECOLE MATERNELLE BILINGUE D'EKANGTE /  A": [
            {
              station: "CRTV(ST",
              voters: 1830
            },
            {
              station: "DENIS)",
              voters: 1830
            },
            {
              station: "MAT.",
              voters: 754
            },
            {
              station: "BILINGUE",
              voters: 754
            },
          ],
          "ECOLE PROTESTANTE D'EDIAKAP / A": [
            {
              station: "EDIAKAP",
              voters: 2366
            },
            {
              station: "(ST-",
              voters: 1166
            },
            {
              station: "CHARLES)",
              voters: 1166
            },
            {
              station: "CEBEC",
              voters: 768
            },
            {
              station: "(CEBEC",
              voters: 768
            },
            {
              station: "EDIAKAP)",
              voters: 768
            },
          ],
          "ECOLE PUBLIQUE D'EKANGTE / A": [
            {
              station: "VILLAGE",
              voters: 171
            },
          ],
          "ECOLE PUBLIQUE DE SOSSO GROUPE VI / A": [
            {
              station: "SOSSO",
              voters: 1006
            },
            {
              station: "(ECOLE",
              voters: 238
            },
            {
              station: "PUBLIQUE)",
              voters: 238
            },
          ],
          "ECOLE PUBLIQUE NDOGMOA / A": [
            {
              station: "EDJOGMOA",
              voters: 2239
            },
            {
              station: "ECOLE",
              voters: 1450
            },
            {
              station: "PUBLIQUE",
              voters: 696
            },
            {
              station: "NDOGMOA",
              voters: 1584
            },
            {
              station: "(MONT,",
              voters: 66
            },
            {
              station: "VILLAGE)",
              voters: 66
            },
          ],
          "ECOLE ST VICTOR / A": [
            {
              station: "BONANGOH",
              voters: 1547
            },
            {
              station: "(GROUPE",
              voters: 1547
            },
            {
              station: "VI-",
              voters: 1547
            },
            {
              station: "VICTOR)",
              voters: 1547
            },
          ],
          "ECOLE ST-KISITO / A": [
            {
              station: "(ST-KISITO)",
              voters: 329
            },
          ],
          "ECOLE ST-MARTIN / A": [
            {
              station: "(ST-MARTIN)",
              voters: 728
            },
          ],
          "FOYER BANSOA / A": [
            {
              station: "(FOYER",
              voters: 432
            },
            {
              station: "BANSOA)",
              voters: 864
            },
            {
              station: "EDJOGMOA(",
              voters: 432
            },
            {
              station: "FOYER",
              voters: 432
            },
          ],
          "GROUPE SCOLAIRE BILINGUE ALPHA / A": [
            {
              station: "PALMIERS",
              voters: 110
            },
            {
              station: "(CLINIQUE",
              voters: 110
            },
            {
              station: "ANANFAH)",
              voters: 110
            },
          ],
          "JARDIN D'ENFANTS EHALMOA / A": [
            {
              station: "EHALMOA",
              voters: 1011
            },
            {
              station: "(ST",
              voters: 554
            },
            {
              station: "VICTOR,GROUPE",
              voters: 554
            },
            {
              station: "VI)",
              voters: 554
            },
          ],
          "LYCEE DU MANENGOUBA / A": [
            {
              station: "EKANGTE",
              voters: 6920
            },
            {
              station: "MBENG",
              voters: 4389
            },
            {
              station: "(LYCEE",
              voters: 2201
            },
            {
              station: "MANENGOUBA)",
              voters: 1421
            },
          ],
          "LYCEE TECHNIQUE DE NKONGSAMBA / A": [
            {
              station: "TECHNIQUE)",
              voters: 323
            },
          ],
          "LYCEE TECHNIQUE II / A": [
            {
              station: "TECHNIQUE",
              voters: 457
            },
            {
              station: "II)",
              voters: 457
            },
          ],
          "PAROISSE ROI DAVID / A": [
            {
              station: "(ROI",
              voters: 999
            },
            {
              station: "DAVID)",
              voters: 999
            },
          ],
        },
      },
      "SANAGA-MARITIME": {
        "DIBAMBA": {
          "CHEFFERIE DE NKOM / A": [
            {
              station: "NKOM,BIENKOK",
              voters: 135
            },
          ],
          "E. MAT. DE SIKOUM / A": [
            {
              station: "SIKOUM",
              voters: 1366
            },
          ],
          "ECOLE PUBLIQUE DE BONEPOUPA / A": [
            {
              station: "BONEPOUPA",
              voters: 98
            },
          ],
          "ECOLE PUBLIQUE DE KENDECK / A": [
            {
              station: "KENDECK",
              voters: 243
            },
          ],
          "ECOLE PUBLIQUE DE KOPONGO / A": [
            {
              station: "KOPONGO",
              voters: 377
            },
            {
              station: "LOGBADJECK",
              voters: 1833
            },
            {
              station: "CENTRE",
              voters: 1353
            },
          ],
          "ECOLE PUBLIQUE DE LOUNGAHE / A": [
            {
              station: "LOUNGAHE",
              voters: 387
            },
            {
              station: "GARE",
              voters: 867
            },
          ],
          "ECOLE PUBLIQUE DE MISSOLE I / A": [
            {
              station: "MISSOLE",
              voters: 3875
            },
          ],
          "ECOLE PUBLIQUE DE MISSOLE II BARRIERE /  A": [
            {
              station: "BARRIERE",
              voters: 172
            },
          ],
          "ECOLE PUBLIQUE DE PITTI-GARE / A": [
            {
              station: "PITTI-GARE",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE SOMAKEK / A": [
            {
              station: "SOMAKEK,POUT-NJOUMA",
              voters: 226
            },
          ],
          "EGLISE CATHOLIQUE DE PITTI-NKONDJOCK /  A": [
            {
              station: "PITTI-NKONDJOCK",
              voters: 198
            },
          ],
          "MAISON COMMUNAUTAIRE DE BESSOMBE / A": [
            {
              station: "BESSOMBE",
              voters: 489
            },
          ],
        },
        "DIZANGUE": {
          "CASE COM. KOUNGUE LAC OSSA / A": [
            {
              station: "KOUNGUE",
              voters: 188
            },
            {
              station: "LAC",
              voters: 51
            },
            {
              station: "OSSA",
              voters: 51
            },
          ],
          "CASE COMMUNAURAIRE DE DIKOLA / A": [
            {
              station: "DIKOLA",
              voters: 74
            },
          ],
          "CASE COMMUNAUTAIRE DE MBIMBE / A": [
            {
              station: "MBIMBE",
              voters: 111
            },
          ],
          "CASE COMMUNAUTAIRE DE PONGO-PITTI / A": [
            {
              station: "PONGO-",
              voters: 73
            },
            {
              station: "PITTI",
              voters: 73
            },
          ],
          "CES DE MBIMBE / A": [
            {
              station: "CAMP",
              voters: 120
            },
            {
              station: "CADRES",
              voters: 120
            },
          ],
          "COLLEGE SAINT GERARD / A": [
            {
              station: "III",
              voters: 736
            },
          ],
          "E.P. DE KM7 / A": [
            {
              station: "KM7",
              voters: 131
            },
          ],
          "ECOLE MATERNELLE DE BEACH / A": [
            {
              station: "BEACH-QUARTIER",
              voters: 804
            },
            {
              station: "ADMINISTRATIF",
              voters: 804
            },
          ],
          "ECOLE PUBLIQUE COMPAGNIE DOUALA / A": [
            {
              station: "COMPAGNIE",
              voters: 387
            },
            {
              station: "DOUALA",
              voters: 286
            },
          ],
          "ECOLE PUBLIQUE D'ETIKA / A": [
            {
              station: "MARCHE",
              voters: 543
            },
          ],
          "ECOLE PUBLIQUE DE 4/4 / A": [
            {
              station: "4/4",
              voters: 429
            },
          ],
          "ECOLE PUBLIQUE DE BEACH / A": [
            {
              station: "BEACH-CAMP",
              voters: 1083
            },
            {
              station: "DES",
              voters: 1083
            },
            {
              station: "RETRAITES",
              voters: 1083
            },
            {
              station: "BEACH-NJANGA",
              voters: 765
            },
          ],
          "ECOLE PUBLIQUE DE KM 11 / A": [
            {
              station: "SAFACAM",
              voters: 3913
            },
          ],
          "ECOLE PUBLIQUE DE KOUNGUE / A": [
            {
              station: "SOMSE",
              voters: 137
            },
          ],
          "ECOLE PUBLIQUE DE MBALMAYO / A": [
            {
              station: "MBALMAYO",
              voters: 601
            },
          ],
          "ECOLE PUBLIQUE DE MBANDA / A": [
            {
              station: "MBANDA",
              voters: 123
            },
          ],
          "ECOLE PUBLIQUE DE SONGMBENGUE / A": [
            {
              station: "SONGMBENGUE",
              voters: 223
            },
          ],
          "ECOLE PUBLIQUE DE SONGUELAND / A": [
            {
              station: "SONGUELAND",
              voters: 149
            },
          ],
          "ECOLE PUBLIQUE DU CEREPAH / A": [
            {
              station: "CEREPAH-PITTI-DIBAMBA",
              voters: 150
            },
            {
              station: "PITTI-DIBAMBA",
              voters: 706
            },
          ],
          "FOYER DES CADRES DE MBAMBOU V1 / A": [
            {
              station: "MBAMBOU",
              voters: 2361
            },
            {
              station: "VILLAGE",
              voters: 4002
            },
          ],
          "FOYER DU CAMP MBAMBOU V5 / A": [
            {
              station: "USINE",
              voters: 591
            },
          ],
          "FOYER MBAMBOU G14 / A": [
            {
              station: "G14",
              voters: 239
            },
          ],
          "HANGAR DIRECTION DE L'UNITE / A": [
            {
              station: "MBONGO",
              voters: 4389
            },
            {
              station: "SOCAPALM",
              voters: 3177
            },
          ],
          "HANGAR DU MARCHE DE BIKOUM / A": [
            {
              station: "BIKOUM",
              voters: 294
            },
          ],
          "HANGAR DU MARCHE DE MEVIA / A": [
            {
              station: "LINDEMA",
              voters: 206
            },
            {
              station: "MEVIA",
              voters: 206
            },
          ],
          "HANGAR DU SERVICE-36 / A": [
            {
              station: "DOUALA-MOUKOLO",
              voters: 101
            },
          ],
          "LYCEE DE DIZANGUE / A": [
            {
              station: "HOLLAND",
              voters: 624
            },
          ],
        },
        "EDEA I": {
          "CENTRE SANTE DEV. DE BATOMBE / A": [
            {
              station: "BATOMBE",
              voters: 282
            },
          ],
          "CES DE NDOKOHI / A": [
            {
              station: "NDOKOHI",
              voters: 114
            },
          ],
          "CHAPELLE MISSION CATH. DE NLON A MIOH /  A": [
            {
              station: "NLON",
              voters: 245
            },
            {
              station: "MIOH",
              voters: 245
            },
          ],
          "CLUB CITE FROMAGER / A": [
            {
              station: "CITE",
              voters: 246
            },
            {
              station: "FROMAGER",
              voters: 246
            },
          ],
          "CLUB FERME SUISSE V2 / A": [
            {
              station: "FERME-SUISSE",
              voters: 4509
            },
          ],
          "CLUB FERME SUISSE V4 / A": [
            {
              station: "FERME",
              voters: 162
            },
            {
              station: "SUISSE",
              voters: 162
            },
          ],
          "COMMUNE D'EDEA 1ER / A": [
            {
              station: "CENTRE",
              voters: 2783
            },
            {
              station: "COMMERCIAL",
              voters: 1391
            },
          ],
          "CROIX ROUGE SOCAPALM / A": [
            {
              station: "SOCAPALM",
              voters: 284
            },
          ],
          "DELEGATION AFFAIRES SOCIALES / A": [
            {
              station: "ZANGA",
              voters: 347
            },
            {
              station: "NKOLMELEN",
              voters: 347
            },
          ],
          "E.P. DE DEHANE / A": [
            {
              station: "DEHANE",
              voters: 234
            },
          ],
          "ECOLE DES SOURDS MUETS DE LA GARE / A": [
            {
              station: "GARE",
              voters: 1022
            },
          ],
          "ECOLE E.P.C. DE MBOUE / A": [
            {
              station: "MBOUE",
              voters: 773
            },
          ],
          "ECOLE PUBLIQUE (PILOTE) D'APPLICATION /  A": [
            {
              station: "EVECHE,",
              voters: 824
            },
            {
              station: "ELOGBELE-AVIATION",
              voters: 824
            },
            {
              station: "METEO",
              voters: 1313
            },
          ],
          "ECOLE PUBLIQUE BILINGUE / A": [
            {
              station: "BISSEKE",
              voters: 2142
            },
          ],
          "ECOLE PUBLIQUE D'APPOUH / A": [
            {
              station: "APPOUH-EBOKA",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE D'ELOGBELE / A": [
            {
              station: "ELOGBELE",
              voters: 801
            },
          ],
          "ECOLE PUBLIQUE D'ELOGKAM / A": [
            {
              station: "ELOGKAM",
              voters: 133
            },
          ],
          "ECOLE PUBLIQUE D'OKOTH / A": [
            {
              station: "OKOTH",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE D'OSSOMBAH / A": [
            {
              station: "BEON",
              voters: 2221
            },
            {
              station: "OSSOMBAH",
              voters: 977
            },
          ],
          "ECOLE PUBLIQUE DE KOUKOUE / A": [
            {
              station: "KOUKOUE",
              voters: 315
            },
          ],
          "ECOLE PUBLIQUE DE LA GARE / A": [
            {
              station: "DOMAINE",
              voters: 2399
            },
            {
              station: "SANAGA",
              voters: 1007
            },
          ],
          "ECOLE PUBLIQUE DE LOM-EDEA / A": [
            {
              station: "LOM-EDEA",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE MBENGUE / A": [
            {
              station: "MBENGUE",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE DE NDOGBIANG / A": [
            {
              station: "NDOGBIANG",
              voters: 60
            },
          ],
          "ECOLE PUBLIQUE DE NDOGTIMA CRIQUE / A": [
            {
              station: "NDOGTIMA",
              voters: 146
            },
            {
              station: "CRIQUE",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE DE NDOGTIMA NYONG / A": [
            {
              station: "NYONG",
              voters: 55
            },
          ],
          "ECOLE PUBLIQUE DE NKAKANZOCK / A": [
            {
              station: "NKAKANZOCK",
              voters: 300
            },
          ],
          "ECOLE PUBLIQUE DE ONGUE / A": [
            {
              station: "ONGUE",
              voters: 230
            },
          ],
          "ECOLE PUBLIQUE DE ST PALMIER / A": [
            {
              station: "PALMIER",
              voters: 1002
            },
          ],
          "ECOLE PUBLIQUE DE YAWANDA / A": [
            {
              station: "YAWANDA",
              voters: 93
            },
          ],
          "ECOLE PUBLIQUE PLATEAU  BONAMINKENGUE / A": [
            {
              station: "BONAMINKENGUE",
              voters: 937
            },
          ],
          "ECOLE PUBLIQUE SONGMINKOUGOU / A": [
            {
              station: "SONGMINKOUGOU",
              voters: 642
            },
          ],
          "ESPL. CHEF. EON EDING / A": [
            {
              station: "EON",
              voters: 47
            },
            {
              station: "EDING",
              voters: 47
            },
          ],
          "ESPL. CHEFFERIE - ABBE YASSOUKOU / A": [
            {
              station: "ABBE",
              voters: 66
            },
          ],
          "ESPL. CHEFFERIE D'ONGANDE / A": [
            {
              station: "ONGANDE",
              voters: 45
            },
          ],
          "ESPL.CHEFFERIE DE NKONGMONDO / A": [
            {
              station: "NKONGMONDO",
              voters: 698
            },
          ],
          "ESPL.CHEFFERIE DE NZOCKNKONG / A": [
            {
              station: "NZOCKNKONG",
              voters: 96
            },
          ],
          "ESPL.CHEFFERIE METOUNGA / A": [
            {
              station: "METOUNGA",
              voters: 84
            },
          ],
          "FONDATION PIERRE ET PAUL / A": [
            {
              station: "MBONDADICK",
              voters: 680
            },
          ],
          "FOYER QUARTIER HAOUSSA / A": [
            {
              station: "QUARTIER",
              voters: 1538
            },
            {
              station: "HAOUSSA",
              voters: 1538
            },
          ],
          "LYCEE BILINGUE D'APPOUH / A": [
            {
              station: "APPOUH-LYCEE",
              voters: 111
            },
          ],
          "LYCEE BILINGUE D'EDEA / A": [
            {
              station: "PLATEAU",
              voters: 691
            },
            {
              station: "ADMINISTRATIF",
              voters: 691
            },
          ],
          "MBANDA CAMP SIC / A": [
            {
              station: "MBANDA",
              voters: 5410
            },
          ],
          "NTOUMBA HANGAR CARREFOUR / A": [
            {
              station: "NTOUMBA",
              voters: 335
            },
          ],
          "SAR-SM DE PONGO / A": [
            {
              station: "PONGO",
              voters: 3593
            },
          ],
          "STADE MUNICIPAL / A": [
            {
              station: "AMOUR",
              voters: 1771
            },
          ],
        },
        "EDEA II": {
          "CLUB CITE BILALANG / A": [
            {
              station: "CITE",
              voters: 3112
            },
          ],
          "ECOLE MATERNELLE CITE CADRES / A": [
            {
              station: "CADRES",
              voters: 2305
            },
            {
              station: "ANCIEN",
              voters: 2305
            },
            {
              station: "CELLUCAM",
              voters: 2420
            },
            {
              station: "EKITE",
              voters: 6152
            },
            {
              station: "VILLAGE",
              voters: 2696
            },
            {
              station: "PILOTE",
              voters: 2696
            },
            {
              station: "MALIMBA",
              voters: 4910
            },
            {
              station: "URBAIN",
              voters: 3615
            },
          ],
          "ECOLE PRIVEE UEBC DE DIPITA / A": [
            {
              station: "DIPITA",
              voters: 1373
            },
          ],
          "ECOLE PUB. POUTLOLOMA LOUNGAHE / A": [
            {
              station: "POUTLOLOMA",
              voters: 304
            },
            {
              station: "LOUNGAHE",
              voters: 144
            },
          ],
          "ECOLE PUB. POUTLOLOMA NDOGBIANGA / A": [
            {
              station: "NDOGBIANGA",
              voters: 160
            },
          ],
          "ECOLE PUBLIQUE D' EKITE 3 / A": [
            {
              station: "FARM",
              voters: 767
            },
          ],
          "ECOLE PUBLIQUE DE DIKOUS / A": [
            {
              station: "DIKOUS",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE DE DISSAT / A": [
            {
              station: "DISSAT",
              voters: 103
            },
          ],
          "ECOLE PUBLIQUE DE MALIMBA II / A": [
            {
              station: "NEW",
              voters: 254
            },
          ],
          "ECOLE PUBLIQUE DE MALO / A": [
            {
              station: "MALO",
              voters: 64
            },
          ],
          "ECOLE PUBLIQUE DE MASSEING / A": [
            {
              station: "MASSEING",
              voters: 25
            },
          ],
          "ECOLE PUBLIQUE DE NGONGA / A": [
            {
              station: "NGONGA",
              voters: 229
            },
            {
              station: "POKO",
              voters: 229
            },
          ],
          "ECOLE PUBLIQUE MALIMBA - GARE / A": [
            {
              station: "GARE",
              voters: 274
            },
          ],
          "EGLISE LUTHERIENNE BILALANG PONT / A": [
            {
              station: "BILALANG",
              voters: 1226
            },
            {
              station: "PONT",
              voters: 599
            },
          ],
          "EGLISE PRESBY. CAM NDJONG / A": [
            {
              station: "NDJONG",
              voters: 39
            },
          ],
          "MAISON D'ACCUEIL CITE MANGUIERS / A": [
            {
              station: "DES",
              voters: 180
            },
            {
              station: "MANGUIERS",
              voters: 180
            },
          ],
          "REFECTOIRE L'ANCIENNE USINE CEL. / A": [
            {
              station: "MONGOMBE",
              voters: 115
            },
          ],
        },
        "MASSOK-SONGLOULOU": {
          "CHAPELLE D'ONNA / A": [
            {
              station: "ONNA",
              voters: 54
            },
          ],
          "CHAPELLE DE BIOUMOUL / A": [
            {
              station: "BIOUMOUL",
              voters: 45
            },
            {
              station: "NTAMBE",
              voters: 45
            },
          ],
          "CHAPELLE DE DISSEMA / A": [
            {
              station: "DISSEMA",
              voters: 61
            },
            {
              station: "MANDJAP",
              voters: 147
            },
            {
              station: "TAI",
              voters: 61
            },
          ],
          "CHAPELLE DE LOG PAGAL / A": [
            {
              station: "LOG",
              voters: 22
            },
            {
              station: "PAGAL",
              voters: 22
            },
          ],
          "CHAPELLE DE MAMBONDO / A": [
            {
              station: "MAMBONDO",
              voters: 50
            },
          ],
          "CHAPELLE DE NDJOCK NKONG / A": [
            {
              station: "NDJOCK",
              voters: 51
            },
            {
              station: "NKONG",
              voters: 51
            },
          ],
          "CHAPELLE DE NGOND MBAK / A": [
            {
              station: "NGONG",
              voters: 30
            },
            {
              station: "MBAK",
              voters: 30
            },
          ],
          "CHAPELLE DE NSANGA ET MBOULE / A": [
            {
              station: "NSANGA",
              voters: 26
            },
            {
              station: "MBOULE",
              voters: 26
            },
          ],
          "CHAPELLE DE SONG NKAM / A": [
            {
              station: "SEPPE",
              voters: 69
            },
            {
              station: "NKAM",
              voters: 69
            },
          ],
          "CHAPELLE EPC DE TEKIBO'O / A": [
            {
              station: "TEKIBO'O",
              voters: 46
            },
          ],
          "CLUB AES-SONEL DE SONGLOULOU / A": [
            {
              station: "SONGLOULOU",
              voters: 168
            },
          ],
          "DISPENSAIRE DE SAHA / A": [
            {
              station: "IBOMPOI",
              voters: 84
            },
            {
              station: "MBEMBENDJOCK",
              voters: 84
            },
            {
              station: "NINGA",
              voters: 84
            },
            {
              station: "SOCKE",
              voters: 84
            },
          ],
          "ECOLE PUBLIQUE D'IAAKOK / A": [
            {
              station: "IAAKOK",
              voters: 49
            },
            {
              station: "IBOM",
              voters: 49
            },
          ],
          "ECOLE PUBLIQUE D'IBAIKAK / A": [
            {
              station: "IBAIKAK",
              voters: 93
            },
          ],
          "ECOLE PUBLIQUE D'ISSONDJE II / A": [
            {
              station: "ISSONDJE",
              voters: 216
            },
          ],
          "ECOLE PUBLIQUE DE BAHANGA / A": [
            {
              station: "BAHANGA",
              voters: 19
            },
          ],
          "ECOLE PUBLIQUE DE DOUKOKOL / A": [
            {
              station: "AUTOCHTONES",
              voters: 131
            },
          ],
          "ECOLE PUBLIQUE DE KAHN / A": [
            {
              station: "KAHN",
              voters: 166
            },
          ],
          "ECOLE PUBLIQUE DE MAHOHI II / A": [
            {
              station: "MAHOHI",
              voters: 36
            },
          ],
          "ECOLE PUBLIQUE DE MASSOK / A": [
            {
              station: "MASSOK",
              voters: 415
            },
          ],
          "ECOLE PUBLIQUE DE MBANDA / A": [
            {
              station: "MBANDA",
              voters: 103
            },
          ],
          "ECOLE PUBLIQUE DE NGOG MBOG / A": [
            {
              station: "NDEDE",
              voters: 86
            },
            {
              station: "NGOG",
              voters: 86
            },
            {
              station: "MBOG",
              voters: 86
            },
            {
              station: "SONG",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE DE NGUIBASSAL / A": [
            {
              station: "NGUIBASSAL",
              voters: 65
            },
            {
              station: "NKAKA",
              voters: 65
            },
          ],
          "ECOLE PUBLIQUE DE NKOM / A": [
            {
              station: "BOT",
              voters: 143
            },
            {
              station: "MBAI",
              voters: 143
            },
            {
              station: "ITAYAP",
              voters: 143
            },
            {
              station: "NKOM",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE DE NSINGMANDENG / A": [
            {
              station: "NSINGMANDENG",
              voters: 35
            },
          ],
          "ECOLE PUBLIQUE DE PANDANG / A": [
            {
              station: "PANDANG",
              voters: 54
            },
          ],
          "ECOLE PUBLIQUE DE PENDJOCK / A": [
            {
              station: "PENDJOCK",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE SONGKOLLO / A": [
            {
              station: "SONGKOLLO",
              voters: 39
            },
          ],
          "ECOLE PUBLIQUE DE SONGNDJEM / A": [
            {
              station: "DIKAMACK",
              voters: 90
            },
            {
              station: "MAKOKI",
              voters: 90
            },
            {
              station: "SONGNDJEM",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE DE SONGUEN / A": [
            {
              station: "SONGUEN",
              voters: 52
            },
          ],
          "ECOLE PUBLIQUE DE TOMEL / A": [
            {
              station: "MBANDI",
              voters: 270
            },
            {
              station: "TOMEL",
              voters: 270
            },
          ],
          "EPC DE DIMBENGUI / A": [
            {
              station: "DIMBENGUI",
              voters: 54
            },
          ],
          "FEMEC DE KANGA / A": [
            {
              station: "KANGA",
              voters: 137
            },
          ],
          "LYCEE DE SONGMBENGUE / A": [
            {
              station: "SONGMBENGUE",
              voters: 892
            },
          ],
        },
        "MOUANKO": {
          "CHAPELLE ASSEMBLEE DIEU NDOGMONGO /  A": [
            {
              station: "NDOGMONGO",
              voters: 210
            },
          ],
          "CHAPELLE EEC BOSSAMBO-FARM / A": [
            {
              station: "BOSSAMBO-FARM",
              voters: 73
            },
          ],
          "CHAPELLE EEC DE YAVI / A": [
            {
              station: "YAVI",
              voters: 104
            },
          ],
          "CHAPELLE EEC MOUANKO VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 145
            },
          ],
          "ECOLE CATHOLIQUE MARIEMBERG / A": [
            {
              station: "ELOG-NGANGO",
              voters: 62
            },
            {
              station: "MARIEMBERG",
              voters: 62
            },
          ],
          "ECOLE EEC LOBETHAL / A": [
            {
              station: "LOBETHAL",
              voters: 263
            },
          ],
          "ECOLE PUBLIQUE D'OLOMBE / A": [
            {
              station: "OLOMBE",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE DE BOLONDO / A": [
            {
              station: "BOLONDO",
              voters: 55
            },
          ],
          "ECOLE PUBLIQUE DE BOLOY / A": [
            {
              station: "BADANGUE",
              voters: 197
            },
            {
              station: "BOHENGUE",
              voters: 197
            },
            {
              station: "BOLOY",
              voters: 197
            },
            {
              station: "BONGO",
              voters: 197
            },
            {
              station: "MOMBO",
              voters: 197
            },
          ],
          "ECOLE PUBLIQUE DIBONGO / A": [
            {
              station: "DIBONGO",
              voters: 147
            },
          ],
          "ECOLE PUBLIQUE MBIAKO / A": [
            {
              station: "COCONETH",
              voters: 192
            },
            {
              station: "MBIAKO",
              voters: 192
            },
          ],
          "ECOLE PUBLIQUE MOUANKO CENTRE / A": [
            {
              station: "MOUANKO",
              voters: 350
            },
            {
              station: "CENTRE",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE MOULONGO / A": [
            {
              station: "BOLOUNGA",
              voters: 379
            },
            {
              station: "BONABOIBA",
              voters: 379
            },
            {
              station: "MOULONGO",
              voters: 379
            },
          ],
          "ECOLE PUBLIQUE NSEPPE / A": [
            {
              station: "NSEPPE",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE PONGO SONGO / A": [
            {
              station: "PONGO",
              voters: 230
            },
            {
              station: "SONGO",
              voters: 230
            },
            {
              station: "TISSONGO",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE YATOU / A": [
            {
              station: "YATOU",
              voters: 70
            },
          ],
          "ECOLE PUBLIQUE YOYO 1 / A": [
            {
              station: "YOYO",
              voters: 333
            },
          ],
          "ESPLANADE CHEFFERIE YAKONZOG / A": [
            {
              station: "YAKONZOG",
              voters: 30
            },
          ],
          "FOYER DIPITA YOUME I / A": [
            {
              station: "KOMBO",
              voters: 78
            },
            {
              station: "MOUKALA",
              voters: 78
            },
            {
              station: "YOUME",
              voters: 136
            },
          ],
          "FOYER MBANGA / A": [
            {
              station: "BEDALE",
              voters: 120
            },
            {
              station: "ELOG",
              voters: 120
            },
            {
              station: "NDIGLE",
              voters: 120
            },
            {
              station: "ELOGNZOGWOUTH",
              voters: 120
            },
            {
              station: "YADIBO",
              voters: 120
            },
          ],
          "FOYER NKOKE / A": [
            {
              station: "MBANGA",
              voters: 64
            },
            {
              station: "OKOKONG",
              voters: 64
            },
          ],
          "HUILERIE MOUTAPAM / A": [
            {
              station: "BAKAKA",
              voters: 378
            },
            {
              station: "PLANTATION",
              voters: 189
            },
            {
              station: "ROUTE",
              voters: 189
            },
          ],
          "LYCEE BILINGUE DE MOUANKO / A": [
            {
              station: "ABEE",
              voters: 359
            },
            {
              station: "BEMENGUE",
              voters: 359
            },
            {
              station: "EPOLLO",
              voters: 359
            },
            {
              station: "NDIE",
              voters: 359
            },
          ],
          "LYCEE TECHNIQUE DE MOUANKO / A": [
            {
              station: "NKAGANZOG",
              voters: 290
            },
          ],
        },
        "NDOM": {
          "CENTRE DE SANTE DE MAKOM / A": [
            {
              station: "MAKOM",
              voters: 143
            },
          ],
          "CHAPELLE E.P.C. DE EPAKO / A": [
            {
              station: "EPAKO",
              voters: 92
            },
          ],
          "CHAPELLE E.P.C. DE IBONG / A": [
            {
              station: "BODBAMBAI,",
              voters: 147
            },
            {
              station: "EKOUN,",
              voters: 147
            },
            {
              station: "NGUIKOK,",
              voters: 147
            },
            {
              station: "NGUIN",
              voters: 147
            },
          ],
          "CHAPELLE E.P.C. DE IKOLLONG / A": [
            {
              station: "IKOLLONG",
              voters: 195
            },
            {
              station: "NDOM",
              voters: 909
            },
            {
              station: "CENTRE",
              voters: 714
            },
          ],
          "CHAPELLE E.P.C. DE KAKAK / A": [
            {
              station: "KAKAK",
              voters: 80
            },
          ],
          "CHAPELLE E.P.C. DE LELO / A": [
            {
              station: "LELO",
              voters: 75
            },
          ],
          "CHAPELLE E.P.C. DE LOG SAGAL / A": [
            {
              station: "LOG",
              voters: 65
            },
            {
              station: "SAGAL",
              voters: 65
            },
          ],
          "CHAPELLE E.P.C. DE MBAPOUT / A": [
            {
              station: "MBAPOUT",
              voters: 81
            },
          ],
          "CHAPELLE E.P.C. DE NDOG-NJOKA / A": [
            {
              station: "NDOG",
              voters: 135
            },
            {
              station: "NJOKA",
              voters: 135
            },
          ],
          "CHAPELLE E.P.C. DE NONN / A": [
            {
              station: "NONN",
              voters: 75
            },
          ],
          "CHAPELLE E.P.C. DE SONG-MOT / A": [
            {
              station: "LIHE",
              voters: 110
            },
            {
              station: "IPIM",
              voters: 110
            },
          ],
          "CHAPELLE EGLISE CATH. BOMAKONDO / A": [
            {
              station: "BOMAKONDO",
              voters: 80
            },
          ],
          "CHAPELLE EGLISE CATH. DIHONG / A": [
            {
              station: "DIHONG",
              voters: 23
            },
          ],
          "CHAPELLE EGLISE CATH. DJONBASSO / A": [
            {
              station: "DJONBASSO",
              voters: 85
            },
          ],
          "CHAPELLE EGLISE CATH. KOKO / A": [
            {
              station: "KOKO",
              voters: 51
            },
          ],
          "CHAPELLE EGLISE CATH. LOGMANDENG / A": [
            {
              station: "LOGMANDENG",
              voters: 248
            },
          ],
          "CHAPELLE EGLISE CATH. LOGMBOUGUE / A": [
            {
              station: "LOGMBOUGUE",
              voters: 102
            },
          ],
          "CHAPELLE EGLISE CATH. NSOH / A": [
            {
              station: "NSOH",
              voters: 67
            },
          ],
          "CHAPELLE EGLISE CATH. YOP YOP / A": [
            {
              station: "YOP",
              voters: 156
            },
          ],
          "CHAPELLE EGLISE CATHOLIQUE / A": [
            {
              station: "NDOGSE",
              voters: 145
            },
          ],
          "ECOLE CATHOLIQUE DE BISSENG / A": [
            {
              station: "NINDJE",
              voters: 190
            },
          ],
          "ECOLE MAT. SI-NGOG-MBEND / A": [
            {
              station: "NGOG",
              voters: 120
            },
            {
              station: "MBEND",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DE BANG / A": [
            {
              station: "BANG",
              voters: 86
            },
          ],
          "ECOLE PUBLIQUE DE BIPOCK / A": [
            {
              station: "BIPOCK",
              voters: 211
            },
          ],
          "ECOLE PUBLIQUE DE BODKANG / A": [
            {
              station: "BODKANG",
              voters: 206
            },
          ],
          "ECOLE PUBLIQUE DE DINGOM / A": [
            {
              station: "DINGOM",
              voters: 117
            },
          ],
          "ECOLE PUBLIQUE DE KAY - NYAANG / A": [
            {
              station: "KAY",
              voters: 92
            },
            {
              station: "NYAANG",
              voters: 92
            },
          ],
          "ECOLE PUBLIQUE DE KOUKOUM / A": [
            {
              station: "KOUKOUM",
              voters: 134
            },
          ],
          "ECOLE PUBLIQUE DE LIKOUND / A": [
            {
              station: "LIKOUND",
              voters: 133
            },
          ],
          "ECOLE PUBLIQUE DE LIKOUNDBIAM / A": [
            {
              station: "LIKOUNDBIAM",
              voters: 319
            },
          ],
          "ECOLE PUBLIQUE DE LOGMBANGA / A": [
            {
              station: "LOGMBANGA",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE DE MASSANGUI II / A": [
            {
              station: "MASSANGUI",
              voters: 74
            },
          ],
          "ECOLE PUBLIQUE DE NDAMBOG / A": [
            {
              station: "NDAMBOG",
              voters: 65
            },
            {
              station: "DJOM",
              voters: 65
            },
            {
              station: "YOUMNGUE",
              voters: 65
            },
          ],
          "ECOLE PUBLIQUE DE NDEBI / A": [
            {
              station: "NDEBI",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE DE NGOCK / A": [
            {
              station: "NGOCK",
              voters: 29
            },
          ],
          "ECOLE PUBLIQUE DE NGUIMBONG / A": [
            {
              station: "NGUIMBONG",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE DE NKO'O / A": [
            {
              station: "NKOO",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE DE NONG-NKE / A": [
            {
              station: "KOMBE",
              voters: 478
            },
          ],
          "ECOLE PUBLIQUE DE NSE / A": [
            {
              station: "NSE",
              voters: 62
            },
          ],
          "ECOLE PUBLIQUE DE TEMBYET / A": [
            {
              station: "TEMBYET",
              voters: 162
            },
          ],
          "ECOLE PUBLIQUE DE TOUBANGOM / A": [
            {
              station: "TOUBANGOM",
              voters: 107
            },
          ],
          "ECOLE PUBLIQUE GROUPE II DE NDOM / A": [
            {
              station: "VILLAGE",
              voters: 195
            },
          ],
          "ESPL. CHEFFERIE DE MAKOU / A": [
            {
              station: "MAKOU",
              voters: 58
            },
          ],
          "LYCEE D'ENS. GENERAL DE NDOM / A": [
            {
              station: "NKONGTAP",
              voters: 85
            },
          ],
          "MAISON COMMUNAUTAIRE D'OMENG / A": [
            {
              station: "OMENG",
              voters: 708
            },
          ],
          "MAISON COMMUNAUTAIRE DE KOMOL / A": [
            {
              station: "DISSAHAI",
              voters: 104
            },
            {
              station: "KOMOL",
              voters: 104
            },
          ],
          "PRESBYTERE E. PRESBY. CAM.  BODBADJANG / A": [
            {
              station: "BODBADJANG",
              voters: 148
            },
          ],
        },
        "NGAMBE": {
          "CARREFOUR BISSONGA / A": [
            {
              station: "BISSONGA",
              voters: 109
            },
          ],
          "CASE COMM. ESSEING / A": [
            {
              station: "ESSEING",
              voters: 249
            },
            {
              station: "NKAM",
              voters: 172
            },
            {
              station: "NYEGUI",
              voters: 77
            },
          ],
          "CASE COMM. NKONGNLET / A": [
            {
              station: "NKONGNLET",
              voters: 58
            },
          ],
          "ECOLE ADVENTISTE D'IHENDEL / A": [
            {
              station: "IHENDEL",
              voters: 133
            },
          ],
          "ECOLE PUBLIQUE DE BODIPO / A": [
            {
              station: "BODIPO",
              voters: 40
            },
          ],
          "ECOLE PUBLIQUE DE BOTBEA / A": [
            {
              station: "BOTBEA",
              voters: 39
            },
          ],
          "ECOLE PUBLIQUE DE BOTKO / A": [
            {
              station: "BOTKO",
              voters: 103
            },
            {
              station: "NSOUME",
              voters: 103
            },
          ],
          "ECOLE PUBLIQUE DE NIEL / A": [
            {
              station: "NIEL",
              voters: 60
            },
          ],
          "ECOLE PUBLIQUE LOGBASSEMEL / A": [
            {
              station: "ITOI",
              voters: 143
            },
            {
              station: "MAHOHI",
              voters: 143
            },
            {
              station: "NKOMAKONDO",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE NGAMBE 2EME / A": [
            {
              station: "IBAI",
              voters: 264
            },
            {
              station: "2EME",
              voters: 264
            },
            {
              station: "QUARTIER",
              voters: 264
            },
            {
              station: "HAOUSSA",
              voters: 264
            },
          ],
          "ECOLE PUBLIQUE NGAMBE CENTRE / A": [
            {
              station: "NGAMBE",
              voters: 1232
            },
            {
              station: "1ER",
              voters: 278
            },
          ],
          "ECOLE PUBLIQUE NSAPACK / A": [
            {
              station: "NSAPACK",
              voters: 60
            },
          ],
          "ECOLE PUBLIQUE NYEE / A": [
            {
              station: "NYEE",
              voters: 64
            },
          ],
          "ECOLE PUBLIQUE NYOUYA / A": [
            {
              station: "NYOUYA",
              voters: 143
            },
            {
              station: "PIMBE",
              voters: 221
            },
            {
              station: "SONGMBOM",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE PAPAN / A": [
            {
              station: "PAPAN",
              voters: 38
            },
          ],
          "ECOLE PUBLIQUE POUTKAK / A": [
            {
              station: "POUTKAK",
              voters: 217
            },
          ],
          "ECOLE PUBLIQUE SINGANG / A": [
            {
              station: "SINGANG",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE TEKIBONGO / A": [
            {
              station: "NGOBILO",
              voters: 64
            },
            {
              station: "TEKIBONGO",
              voters: 64
            },
          ],
          "ESPL. CHEFFERIE DE NKAK / A": [
            {
              station: "KOKOA",
              voters: 43
            },
            {
              station: "MBANDI",
              voters: 43
            },
            {
              station: "NKAK",
              voters: 43
            },
          ],
          "ESPL. CHEFFERIE DE YOI / A": [
            {
              station: "YOI",
              voters: 58
            },
          ],
          "ESPL. CHEFFERIE NGOMBE / A": [
            {
              station: "NGOMBE",
              voters: 54
            },
          ],
          "ESPL. CHEFFERIE POUTBABA / A": [
            {
              station: "POUTBABA",
              voters: 33
            },
          ],
          "FOYER DE BAKOMBE I / A": [
            {
              station: "BAKOMBE",
              voters: 79
            },
          ],
          "FOYER DE NKAKMBOM / A": [
            {
              station: "MOUANDE",
              voters: 130
            },
            {
              station: "NKAKMBOM",
              voters: 130
            },
          ],
          "FOYER DES JEUX DE MASSANGUI / A": [
            {
              station: "BILONGUE",
              voters: 47
            },
            {
              station: "MASSANGUI",
              voters: 47
            },
            {
              station: "MBINA",
              voters: 47
            },
          ],
          "LYCEE DE NGAMBE / A": [
            {
              station: "4EME",
              voters: 262
            },
            {
              station: "NOUVEAU",
              voters: 262
            },
            {
              station: "LOTISSEMENT",
              voters: 262
            },
          ],
          "LYCEE TECHNIQUE NGAMBE / A": [
            {
              station: "LYCEE",
              voters: 111
            },
            {
              station: "TECHNIQUE",
              voters: 111
            },
          ],
          "MAISON COMMUNAUTAIRE MANDJAP I / A": [
            {
              station: "MANDJAP",
              voters: 243
            },
          ],
          "MARCHE DE NGAMBE / A": [
            {
              station: "3EME",
              voters: 136
            },
          ],
          "POSTE DES EAUX ET FORETS DE PONG / A": [
            {
              station: "PONG",
              voters: 108
            },
          ],
          "PRISON SECONDAIRE NGAMBE / A": [
            {
              station: "ADMINISTRATIF",
              voters: 181
            },
          ],
          "STATION DES EAUX DE MATOL / A": [
            {
              station: "MABEL",
              voters: 87
            },
            {
              station: "MATOL",
              voters: 87
            },
          ],
        },
        "NGWEI": {
          "CASE COMMUNAUTAIRE SOLOPA / A": [
            {
              station: "SOLOPA",
              voters: 145
            },
          ],
          "CEAC DINGOMBI / A": [
            {
              station: "MBANDJOCK",
              voters: 109
            },
          ],
          "ECOLE PUB. DE NDJOCKLOUMBE / A": [
            {
              station: "NDJOCKLOUMBE",
              voters: 760
            },
          ],
          "ECOLE PUB. MBAMBLE-MAYAMBA / A": [
            {
              station: "MBAMBLE",
              voters: 289
            },
            {
              station: "NYATJO",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE D'EBOMBE / A": [
            {
              station: "EBOMBE",
              voters: 151
            },
          ],
          "ECOLE PUBLIQUE DE BITOUTOUCK / A": [
            {
              station: "BITOUTOUCK",
              voters: 159
            },
          ],
          "ECOLE PUBLIQUE DE DINGOMBI / A": [
            {
              station: "DINGOMBI",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE DE LEP LIKOUNG / A": [
            {
              station: "LEP",
              voters: 552
            },
            {
              station: "LIKOUNG",
              voters: 117
            },
          ],
          "ECOLE PUBLIQUE DE MAKEK / A": [
            {
              station: "MAKEK",
              voters: 192
            },
          ],
          "ECOLE PUBLIQUE DE MAKONDO / A": [
            {
              station: "NYOCK",
              voters: 435
            },
            {
              station: "MAKAￏ",
              voters: 403
            },
            {
              station: "MAKONDO",
              voters: 605
            },
          ],
          "ECOLE PUBLIQUE DE MANDJAB / A": [
            {
              station: "BOOMABONG",
              voters: 238
            },
            {
              station: "MANDJAB",
              voters: 238
            },
            {
              station: "POUTH",
              voters: 322
            },
            {
              station: "BITEN",
              voters: 322
            },
            {
              station: "POUTH-NDJOCK",
              voters: 520
            },
          ],
          "ECOLE PUBLIQUE DE NDOKOK / A": [
            {
              station: "MBOG",
              voters: 284
            },
          ],
          "ECOLE PUBLIQUE DE SEPPE / A": [
            {
              station: "SEPPE",
              voters: 395
            },
          ],
          "ECOLE PUBLIQUE DE SONG NDONG / A": [
            {
              station: "NDONG",
              voters: 154
            },
          ],
          "EGLISE PRESBY CAM. DE LOGBII / A": [
            {
              station: "LOGBII",
              voters: 106
            },
          ],
          "EGLISE PRESBYTERIENNE DE MAKAￏ / A": [
            {
              station: "MAKAI",
              voters: 96
            },
          ],
          "ESPL. CHEF. MAPAN SONG TONYE / A": [
            {
              station: "MAPAN",
              voters: 148
            },
            {
              station: "SONG",
              voters: 568
            },
            {
              station: "TONYE",
              voters: 130
            },
          ],
          "ESPL. CHEFFERIE DE MAPOUBI / A": [
            {
              station: "MAPOUBI",
              voters: 180
            },
          ],
          "ESPL. CHEFFERIE DE NGWEI I / A": [
            {
              station: "NGWEI",
              voters: 177
            },
          ],
          "ESPL. CHEFFERIE ETOUHA / A": [
            {
              station: "ETOUHA",
              voters: 134
            },
          ],
          "ESPL. CHEFFERIE LOGBAMAL / A": [
            {
              station: "LOGBAMAL",
              voters: 129
            },
          ],
          "FOYER MBELECK B. MAPAN YABI / A": [
            {
              station: "YABI",
              voters: 18
            },
          ],
          "FOYER MBOG-MBOG NDOKOK PUBI / A": [
            {
              station: "NDOKOK",
              voters: 91
            },
            {
              station: "PUBI",
              voters: 91
            },
          ],
          "HANGAR D'IKONDE / A": [
            {
              station: "IKONDE",
              voters: 110
            },
          ],
        },
        "NYANON": {
          "E. CATH. CHRIST-ROI DE LOGBIKOY / A": [
            {
              station: "LOGBIKOY",
              voters: 293
            },
          ],
          "E. P KAI-NDOGKOBE / A": [
            {
              station: "BAPTECK-KAI",
              voters: 124
            },
            {
              station: "NKONGBAKENEG",
              voters: 124
            },
            {
              station: "NKONGHOL",
              voters: 124
            },
          ],
          "E. PRIV. LAIQUE NSINGMBONGO / A": [
            {
              station: "NSINGMBONGO",
              voters: 78
            },
          ],
          "E.P BINOUM-NDOMDJENGUE / A": [
            {
              station: "BINOUM",
              voters: 209
            },
            {
              station: "NDOMNDJENGUE",
              voters: 209
            },
          ],
          "E.P NKONGKWALLA / A": [
            {
              station: "NKONGKWALLA",
              voters: 182
            },
          ],
          "E.P. DE NYIZAGHE / A": [
            {
              station: "NYIZAGHE",
              voters: 74
            },
          ],
          "ECOLE PUBLIQUE BAYA-LOG NTOMB / A": [
            {
              station: "LIBOLINGOCK",
              voters: 191
            },
            {
              station: "LOGBAHA",
              voters: 191
            },
            {
              station: "NDOGBATOUGUE",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE DE BILANGUE / A": [
            {
              station: "BILANGUE",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE BODI / A": [
            {
              station: "BODI",
              voters: 131
            },
          ],
          "ECOLE PUBLIQUE DE BOLIKOL / A": [
            {
              station: "BOLIKOL",
              voters: 114
            },
          ],
          "ECOLE PUBLIQUE DE HOCK / A": [
            {
              station: "HOCK",
              voters: 67
            },
          ],
          "ECOLE PUBLIQUE DE KELLENG / A": [
            {
              station: "KELLENG",
              voters: 182
            },
            {
              station: "MBOUGUE",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE DE MAHONDA / A": [
            {
              station: "MAHONDA",
              voters: 92
            },
          ],
          "ECOLE PUBLIQUE DE MASEHE / A": [
            {
              station: "NDOGBATOGUE",
              voters: 158
            },
          ],
          "ECOLE PUBLIQUE DE MBAY / A": [
            {
              station: "MBAY",
              voters: 188
            },
            {
              station: "NDOGBIKIM",
              voters: 188
            },
          ],
          "ECOLE PUBLIQUE DE NYABAMLAN / A": [
            {
              station: "NYABAMLAN",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE NYAHENDEL / A": [
            {
              station: "NKONTGTOMA",
              voters: 213
            },
            {
              station: "NYAHENDEL",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE NYAHO / A": [
            {
              station: "NYAHO",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE NYAKELLE / A": [
            {
              station: "NYAKELLE",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE DE NYAMBAT / A": [
            {
              station: "NYAMBAT",
              voters: 88
            },
          ],
          "ECOLE PUBLIQUE DE NYANON GP I / A": [
            {
              station: "NYANON",
              voters: 479
            },
          ],
          "ECOLE PUBLIQUE DE NYASSENG / A": [
            {
              station: "NYASSENG",
              voters: 208
            },
            {
              station: "PENTOME",
              voters: 386
            },
          ],
          "ECOLE PUBLIQUE DE NYOUNDEM / A": [
            {
              station: "NYOUNDEM",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE DE PENDIKI / A": [
            {
              station: "PENDIKI",
              voters: 301
            },
          ],
          "ECOLE PUBLIQUE DE SONGTJANG / A": [
            {
              station: "SONGTJANG",
              voters: 147
            },
          ],
          "ECOLE PUBLIQUE KOMBE I / A": [
            {
              station: "KOMBE",
              voters: 77
            },
          ],
          "ECOLE PUBLIQUE SONGMBOG I / A": [
            {
              station: "SONGMBOG",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE TOUE / A": [
            {
              station: "BOUMBANGA",
              voters: 158
            },
            {
              station: "MALOHE",
              voters: 158
            },
            {
              station: "TOUE",
              voters: 158
            },
          ],
          "ESPLANADE CHEFFERIE DE BANN / A": [
            {
              station: "BANN",
              voters: 76
            },
            {
              station: "LOGYAMBEN",
              voters: 76
            },
          ],
          "ESPLANADE CHEFFERIE DE LOGMEM / A": [
            {
              station: "LOG",
              voters: 53
            },
            {
              station: "MEM",
              voters: 53
            },
            {
              station: "LOGBIOCK",
              voters: 53
            },
          ],
          "ESPLANADE CHEFFERIE DE NDEME / A": [
            {
              station: "NDEME",
              voters: 377
            },
          ],
          "ESPLANADE CHEFFERIE NSINGMPAGUE / A": [
            {
              station: "NSINGLIBADO",
              voters: 190
            },
            {
              station: "NSINGMPAGUE",
              voters: 190
            },
          ],
        },
        "POUMA": {
          "CHAPELLE E.P.C DE BIBOUMHA / A": [
            {
              station: "BIBOUMHA",
              voters: 73
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE DE SOKELLE I  /A": [
            {
              station: "SOKELLE",
              voters: 571
            },
          ],
          "ECOLE CATHOLIQUE SAINT ANDRE  LOGMABAA / A": [
            {
              station: "LOGMABAA",
              voters: 174
            },
          ],
          "ECOLE MATERNELLE DE BOTMOM / A": [
            {
              station: "BOTMOM",
              voters: 207
            },
          ],
          "ECOLE PUBLIQUE DE BIHIANG / A": [
            {
              station: "LOGDIKIT",
              voters: 494
            },
            {
              station: "BIHIANG",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE DE HEGBA POUMA / A": [
            {
              station: "HEGBA",
              voters: 343
            },
            {
              station: "POUMA",
              voters: 3458
            },
          ],
          "ECOLE PUBLIQUE DE MAKAK NDOKOMA / A": [
            {
              station: "NDOKOMA",
              voters: 215
            },
          ],
          "ECOLE PUBLIQUE DE MAKOB LOGBAKO / A": [
            {
              station: "MAKOB",
              voters: 204
            },
          ],
          "ECOLE PUBLIQUE DE MINOMINDJOCK / A": [
            {
              station: "MINOMINDJOCK",
              voters: 223
            },
          ],
          "ECOLE PUBLIQUE DE NGOMPEM CENTRE / A": [
            {
              station: "NGOMPEM",
              voters: 427
            },
            {
              station: "CENTRE",
              voters: 3217
            },
          ],
          "ECOLE PUBLIQUE DE NGOMPEM NKANGLA /  A": [
            {
              station: "NKANGLA",
              voters: 102
            },
          ],
          "ECOLE PUBLIQUE DE NGWEI II / A": [
            {
              station: "NGWEI",
              voters: 256
            },
          ],
          "ECOLE PUBLIQUE DE NKONDJOCK II / A": [
            {
              station: "LOGBABEM",
              voters: 435
            },
            {
              station: "LOGBISSOL",
              voters: 219
            },
            {
              station: "LOGSANHO",
              voters: 630
            },
          ],
          "ECOLE PUBLIQUE DE NKONGA I / A": [
            {
              station: "NKONGA",
              voters: 544
            },
          ],
          "ECOLE PUBLIQUE DE SAKBAYEME CENTRE /  A": [
            {
              station: "SAKBAYEME",
              voters: 578
            },
          ],
          "ECOLE PUBLIQUE DE SAKBAYEME PLATEAU /  A": [
            {
              station: "III",
              voters: 232
            },
            {
              station: "SINDONGUI",
              voters: 432
            },
          ],
          "ECOLE PUBLIQUE DE SIBONGO / A": [
            {
              station: "SIBONGO",
              voters: 185
            },
          ],
          "ECOLE PUBLIQUE DE SONGSIMOUTH / A": [
            {
              station: "LOGMBON",
              voters: 345
            },
            {
              station: "SONGSIMOUTH",
              voters: 345
            },
          ],
          "ECOLE PUBLIQUE DE SONGWOGA / A": [
            {
              station: "SONGWOGA",
              voters: 310
            },
          ],
          "ESPL. CHEFFERIE MAKAK LOGBAKO / A": [
            {
              station: "MAKAK",
              voters: 396
            },
            {
              station: "LOGBAKO",
              voters: 385
            },
          ],
          "HANGAR NJOCK NKONG / A": [
            {
              station: "NDJOCK",
              voters: 71
            },
            {
              station: "NKONG",
              voters: 71
            },
          ],
        },
      },
      "WOURI": {
        "DOUALA I": {
          "CENTRE SOCIAL BESSENGUE / A": [
            {
              station: "COAF",
              voters: 1158
            },
          ],
          "COLLEGE ALFRED SAKER / A": [
            {
              station: "BONAMUDOUROU",
              voters: 13182
            },
            {
              station: "BOUTIQUES",
              voters: 7651
            },
            {
              station: "ROND",
              voters: 6591
            },
            {
              station: "POINT",
              voters: 6591
            },
            {
              station: "BONAMUDOURU",
              voters: 6591
            },
            {
              station: "BONANTONE",
              voters: 7651
            },
            {
              station: "SAFEL",
              voters: 6591
            },
            {
              station: "CHEF.",
              voters: 6591
            },
            {
              station: "SUPERIEURE",
              voters: 6591
            },
            {
              station: "DEGL.",
              voters: 6591
            },
            {
              station: "BOUTIQUE",
              voters: 6591
            },
            {
              station: "KOTTO",
              voters: 6591
            },
          ],
          "COLLEGE DE LA SALLE / A": [
            {
              station: "BONABEKOMBO",
              voters: 3307
            },
            {
              station: "VAL.",
              voters: 3307
            },
            {
              station: "BONAMOUKOURI",
              voters: 3307
            },
            {
              station: "RUE",
              voters: 41164
            },
            {
              station: "FOCH",
              voters: 3307
            },
            {
              station: "SANDAGA",
              voters: 3307
            },
          ],
          "COLLEGE EYENGUE NKONGO / A": [
            {
              station: "PLAGE",
              voters: 3478
            },
            {
              station: "PAYS",
              voters: 3478
            },
            {
              station: "BAS",
              voters: 3478
            },
          ],
          "COLLEGE INTEG / A": [
            {
              station: "BERNABE",
              voters: 3886
            },
            {
              station: "BUR",
              voters: 3886
            },
            {
              station: "TRANSPORT",
              voters: 3886
            },
            {
              station: "BONELANG",
              voters: 24349
            },
            {
              station: "SONEL",
              voters: 10707
            },
            {
              station: "BONELEKE",
              voters: 19430
            },
            {
              station: "DOUALA",
              voters: 3886
            },
            {
              station: "BAR",
              voters: 3886
            },
            {
              station: "LAQUINTINIE",
              voters: 3886
            },
            {
              station: "PAU",
              voters: 3886
            },
            {
              station: "BEBEY",
              voters: 10707
            },
            {
              station: "EYIDI",
              voters: 3886
            },
            {
              station: "MERMOZ",
              voters: 3886
            },
          ],
          "ECOLE CEBEC BETHELBONAMIKENGUE / A": [
            {
              station: "EGLISES",
              voters: 1387
            },
            {
              station: "CENTRALE",
              voters: 1387
            },
            {
              station: "VOY.",
              voters: 1387
            },
            {
              station: "DOUCHE",
              voters: 1387
            },
            {
              station: "GARANTI",
              voters: 1387
            },
            {
              station: "EXP.",
              voters: 1387
            },
            {
              station: "MARCHE",
              voters: 12316
            },
            {
              station: "CONGO",
              voters: 1387
            },
          ],
          "ECOLE PUBLIQUE BEPANDA / A": [
            {
              station: "BEPANDA",
              voters: 29962
            },
            {
              station: "BON",
              voters: 3444
            },
            {
              station: "FILS",
              voters: 3444
            },
            {
              station: "CAPITOL",
              voters: 3444
            },
            {
              station: "CENTRE",
              voters: 6700
            },
            {
              station: "D'ACCUEIL",
              voters: 3444
            },
            {
              station: "CITE",
              voters: 16367
            },
            {
              station: "CHARDI",
              voters: 3444
            },
            {
              station: "PONDI",
              voters: 9298
            },
            {
              station: "OMNISPORT",
              voters: 6888
            },
            {
              station: "TEXACO",
              voters: 13072
            },
          ],
          "ECOLE PUBLIQUE D'AKWA / A": [
            {
              station: "ZEPOL",
              voters: 6821
            },
            {
              station: "BONAMOUTI",
              voters: 23941
            },
            {
              station: "COURRIER",
              voters: 6821
            },
            {
              station: "SPORTIF",
              voters: 6821
            },
            {
              station: "DEPOT",
              voters: 6821
            },
            {
              station: "SCIMPOS",
              voters: 6821
            },
            {
              station: "EMILI",
              voters: 6821
            },
            {
              station: "SAKER",
              voters: 13412
            },
            {
              station: "BONEJANG",
              voters: 13642
            },
            {
              station: "MTN",
              voters: 6821
            },
            {
              station: "DIRECTION",
              voters: 6821
            },
            {
              station: "ELAME",
              voters: 6821
            },
            {
              station: "ANC.",
              voters: 6821
            },
            {
              station: "PORTE",
              voters: 6821
            },
            {
              station: "JAUNE",
              voters: 6821
            },
            {
              station: "SOCAR",
              voters: 6821
            },
          ],
          "ECOLE PUBLIQUE DE BALI / A": [
            {
              station: "BALI",
              voters: 22318
            },
            {
              station: "ECOLE",
              voters: 3767
            },
            {
              station: "PUBLIQUE",
              voters: 3767
            },
            {
              station: "HOTEL",
              voters: 9307
            },
            {
              station: "ROSES",
              voters: 3767
            },
            {
              station: "KAYO",
              voters: 9817
            },
            {
              station: "ELI",
              voters: 9817
            },
            {
              station: "MONT",
              voters: 3767
            },
            {
              station: "CAMEROUN",
              voters: 3767
            },
            {
              station: "(OLD",
              voters: 3767
            },
            {
              station: "NEW)",
              voters: 3767
            },
          ],
          "ECOLE PUBLIQUE DEIDO / A": [
            {
              station: "ROUTE",
              voters: 6150
            },
            {
              station: "GERARD",
              voters: 6150
            },
            {
              station: "PUB.",
              voters: 6150
            },
            {
              station: "ESSENGUE",
              voters: 11114
            },
            {
              station: "PETIT",
              voters: 8632
            },
            {
              station: "VILLAGE",
              voters: 8632
            },
          ],
          "ECOLE PUBLIQUE PETIT JOSS / A": [
            {
              station: "BASE",
              voters: 2482
            },
            {
              station: "NAVALE",
              voters: 2482
            },
          ],
          "ECOLE ST. JEAN BOSCO / A": [
            {
              station: "BONADIBONG",
              voters: 31656
            },
            {
              station: "ANCIEN",
              voters: 15983
            },
            {
              station: "CARREFOUR",
              voters: 11326
            },
            {
              station: "TIF",
              voters: 5276
            },
            {
              station: "CHEFFERIE",
              voters: 16879
            },
            {
              station: "DES",
              voters: 16293
            },
            {
              station: "PAVES",
              voters: 5276
            },
            {
              station: "SOUDANAISE",
              voters: 5276
            },
            {
              station: "STADE",
              voters: 5276
            },
            {
              station: "BONAMIKENGUE",
              voters: 21370
            },
            {
              station: "AVENUE",
              voters: 5276
            },
            {
              station: "AOUT",
              voters: 9162
            },
          ],
          "EP BONAMOUANG / A": [
            {
              station: "BONAMOUANG",
              voters: 19645
            },
            {
              station: "BANYA",
              voters: 3929
            },
            {
              station: "BOULANGERIE",
              voters: 3929
            },
            {
              station: "BAKER",
              voters: 3929
            },
            {
              station: "CARRIERE",
              voters: 3929
            },
            {
              station: "CIMETIERE",
              voters: 9715
            },
            {
              station: "TERMINUS",
              voters: 3929
            },
          ],
          "EP NEW-DEIDO / A": [
            {
              station: "SAINTE",
              voters: 4338
            },
            {
              station: "FAMILLE",
              voters: 4338
            },
          ],
          "EPL PETIT MONDE / A": [
            {
              station: "NEW",
              voters: 18976
            },
            {
              station: "CANADA",
              voters: 2981
            },
          ],
          "JARDIN ENFANTS BESSENGUE / A": [
            {
              station: "CINEMA",
              voters: 2096
            },
            {
              station: "EDEN",
              voters: 2096
            },
            {
              station: "FEUX",
              voters: 3254
            },
            {
              station: "ROUGES",
              voters: 3254
            },
            {
              station: "GARE",
              voters: 2096
            },
            {
              station: "LEWAT",
              voters: 2096
            },
          ],
          "LYCEE BILINGUE DEIDO / A": [
            {
              station: "DEIDO",
              voters: 161128
            },
            {
              station: "BONAJINJE",
              voters: 15050
            },
            {
              station: "IESB",
              voters: 5786
            },
            {
              station: "BONATEKI",
              voters: 57094
            },
            {
              station: "CHATEAU",
              voters: 5786
            },
            {
              station: "D'EAU",
              voters: 5786
            },
            {
              station: "GRAND",
              voters: 11936
            },
            {
              station: "MOULIN",
              voters: 11936
            },
            {
              station: "BONATENE",
              voters: 32150
            },
            {
              station: "NOUVEAU",
              voters: 5786
            },
            {
              station: "ISES",
              voters: 5786
            },
          ],
          "LYCEE JOSS / A": [
            {
              station: "BONANJO",
              voters: 6312
            },
          ],
          "LYCEE TECH. BONADOUMBE / A": [
            {
              station: "BONADUMA",
              voters: 5854
            },
            {
              station: "HOME",
              voters: 5854
            },
            {
              station: "BONADUMBE",
              voters: 5854
            },
            {
              station: "BONAPRISO",
              voters: 9684
            },
          ],
          "LYCEE TECHN. D'AKWA / A": [
            {
              station: "AKWA",
              voters: 183882
            },
            {
              station: "BESSENGUE",
              voters: 23493
            },
            {
              station: "MBOPPI",
              voters: 4743
            },
            {
              station: "BONABWANDJA",
              voters: 4743
            },
            {
              station: "BONALEMBE",
              voters: 15450
            },
            {
              station: "SOREPCO",
              voters: 4743
            },
            {
              station: "BONEBONG",
              voters: 4743
            },
            {
              station: "NGODI",
              voters: 4743
            },
          ],
          "LYCEE TECHN. KOUMASSI / A": [
            {
              station: "KOUMASSI",
              voters: 18125
            },
            {
              station: "DIKOLO",
              voters: 3625
            },
            {
              station: "DOUANES",
              voters: 3625
            },
            {
              station: "HYDROCARBURES",
              voters: 3625
            },
            {
              station: "MANGUIERS",
              voters: 3625
            },
          ],
          "NBC BONEWONDA / A": [
            {
              station: "BONEWONDA",
              voters: 13024
            },
            {
              station: "AXE",
              voters: 17222
            },
            {
              station: "LOURD",
              voters: 17222
            },
            {
              station: "D'ETAT",
              voters: 3256
            },
            {
              station: "CIVIL",
              voters: 3256
            },
            {
              station: "NOUVELLE",
              voters: 9406
            },
            {
              station: "RTE",
              voters: 3256
            },
            {
              station: "BONABASSEM",
              voters: 3256
            },
          ],
          "NKONGMONDO / A": [
            {
              station: "NKONGMONDO",
              voters: 18150
            },
            {
              station: "ANATOLE",
              voters: 6050
            },
          ],
        },
        "DOUALA II": {
          "BASE AERIENNE / A": [
            {
              station: "BONADOUMBE",
              voters: 993
            },
          ],
          "C.R.E.S. / A": [
            {
              station: "SERVICE",
              voters: 2139
            },
            {
              station: "SOCIAL",
              voters: 2139
            },
          ],
          "CBC BABYLONE / A": [
            {
              station: "BABYLONE",
              voters: 2054
            },
            {
              station: "NEW-TOWN",
              voters: 34054
            },
            {
              station: "AEROPORT",
              voters: 34054
            },
          ],
          "COLLEGE EVANGELIQUE / A": [
            {
              station: "DERNIER",
              voters: 7536
            },
            {
              station: "POTEAU",
              voters: 7536
            },
          ],
          "E.CATH. MARIA GORETTI / A": [
            {
              station: "MBAM",
              voters: 5459
            },
            {
              station: "EWONDO",
              voters: 5459
            },
            {
              station: "BELL",
              voters: 57021
            },
            {
              station: "HAOUSSA",
              voters: 13516
            },
          ],
          "E.P. BONAPRISO 1 / A": [
            {
              station: "BONADOUMA",
              voters: 5605
            },
            {
              station: "BONAPRISO",
              voters: 6862
            },
          ],
          "E.P. CAMP BERTEAUD / A": [
            {
              station: "CAMP",
              voters: 6472
            },
            {
              station: "YABASSI",
              voters: 6472
            },
            {
              station: "MBOPPI",
              voters: 7274
            },
          ],
          "E.P. N/B BAMILEKE / A": [
            {
              station: "BAMILEKE",
              voters: 7434
            },
          ],
          "E.P. N/B MUSULMAN / A": [
            {
              station: "CONGO",
              voters: 7883
            },
          ],
          "E.P. N/BELL AVIATION FILLES / A": [
            {
              station: "NOUVEAU",
              voters: 1839
            },
            {
              station: "TERRAIN",
              voters: 1839
            },
          ],
          "E.P. N/BELL AVIATION GANGUE / A": [
            {
              station: "NGANGUE",
              voters: 5308
            },
          ],
          "E.P. N/BELL BASSA / A": [
            {
              station: "FUNKEL",
              voters: 6386
            },
            {
              station: "TSF",
              voters: 3877
            },
            {
              station: "BASSA",
              voters: 3877
            },
          ],
          "E.P. YOUPWE / A": [
            {
              station: "NEW",
              voters: 60705
            },
            {
              station: "PRISO",
              voters: 3684
            },
            {
              station: "YOUPWE",
              voters: 3684
            },
          ],
          "E.PR. FRANCO- ARABE / A": [
            {
              station: "GARE",
              voters: 2854
            },
          ],
          "ECOLE DE LA PATERNITE / A": [
            {
              station: "TRACTAFRIC",
              voters: 2674
            },
          ],
          "ECOLE DES PARENTS / A": [
            {
              station: "III",
              voters: 3761
            },
          ],
          "ECOLE KING FOTSO II / A": [
            {
              station: "NKOLMINTAG",
              voters: 7721
            },
          ],
          "ECOLE ST. LUC KASSALAFAM / A": [
            {
              station: "KASSALAFAM",
              voters: 2037
            },
          ],
          "EPC PENIEL / A": [
            {
              station: "NGONSOA",
              voters: 2726
            },
          ],
          "GPE SCOL. BIL. LELE LA COLOMBE / A": [
            {
              station: "BOIS",
              voters: 3627
            },
            {
              station: "DES",
              voters: 3627
            },
            {
              station: "SINGES",
              voters: 3627
            },
          ],
          "LYCEE DE NEW BELL / A": [
            {
              station: "MAKEA",
              voters: 5321
            },
          ],
          "NOTRE DAME DES 7 DOULEURS / A": [
            {
              station: "BANDJOUN",
              voters: 2388
            },
          ],
          "SCE SOCIAL CAMP YABASSI / A": [
            {
              station: "NKOLOLOUN",
              voters: 8531
            },
          ],
        },
        "DOUALA III": {
          "C.P.L.A.N. / A": [
            {
              station: "LOHKA",
              voters: 6529
            },
            {
              station: "LOMBE",
              voters: 6529
            },
            {
              station: "NDOGPASSI",
              voters: 39717
            },
          ],
          "CANADIAN INTERNATIONAL SCHOOL / A": [
            {
              station: "STADE",
              voters: 102
            },
            {
              station: "IBOUTOU",
              voters: 102
            },
          ],
          "CES DE BOBONGO / A": [
            {
              station: "III",
              voters: 49297
            },
          ],
          "COLLEGE EXCELLENCE TERTIO / A": [
            {
              station: "NGODI",
              voters: 14247
            },
            {
              station: "CARREFOUR",
              voters: 6791
            },
            {
              station: "ARY",
              voters: 6791
            },
          ],
          "COLLEGE KAMTCHOUNDAMI / A": [
            {
              station: "CENTRE",
              voters: 30613
            },
            {
              station: "ADMINISTRATIF",
              voters: 4076
            },
            {
              station: "SO'O-BIBAL",
              voters: 4076
            },
          ],
          "COLLEGE LA ROCHE / A": [
            {
              station: "MAHOUME",
              voters: 3221
            },
            {
              station: "ROCHE",
              voters: 3221
            },
            {
              station: "NDOKOTI",
              voters: 3221
            },
            {
              station: "SINCATEX",
              voters: 3221
            },
            {
              station: "SOPOM",
              voters: 4952
            },
          ],
          "COLLEGE LES CONQUERANTS / A": [
            {
              station: "DIBOM",
              voters: 21499
            },
          ],
          "COLLEGE NKOUALONG / A": [
            {
              station: "MOUTONGO",
              voters: 384
            },
          ],
          "COLLEGE NKUIMY / A": [
            {
              station: "NKUIMY",
              voters: 2123
            },
          ],
          "COLLEGE SAINT LOUIS / A": [
            {
              station: "BOG-NKOU",
              voters: 1753
            },
            {
              station: "MBENGUE",
              voters: 1753
            },
            {
              station: "CITY",
              voters: 1753
            },
            {
              station: "NGONGUE",
              voters: 1753
            },
          ],
          "COLLEGE ST MICHEL / A": [
            {
              station: "BBR",
              voters: 4582
            },
            {
              station: "TERGAL",
              voters: 9164
            },
            {
              station: "TRACTAFRIC",
              voters: 4582
            },
          ],
          "E. LEPROSERIE / A": [
            {
              station: "LEPROSERIE",
              voters: 1870
            },
            {
              station: "DIBAMBA",
              voters: 1870
            },
          ],
          "E. MIXTE LA PAIX NYALLA II / A": [
            {
              station: "CHATEAU",
              voters: 6520
            },
          ],
          "E. P. NYLON / A": [
            {
              station: "NYLON",
              voters: 2054
            },
          ],
          "E. PR. LA REGENERATION / A": [
            {
              station: "KAMBO",
              voters: 23121
            },
          ],
          "E. PR. LES HIRONDELLES BAYANG / A": [
            {
              station: "LIBERTE",
              voters: 1731
            },
          ],
          "E. PR. PIERRE BONNEAU / A": [
            {
              station: "LOGBESSOU",
              voters: 9448
            },
            {
              station: "MBOUHANG",
              voters: 9770
            },
            {
              station: "NGOLOKO",
              voters: 18896
            },
            {
              station: "PAPAS",
              voters: 9770
            },
          ],
          "E.P. BIBAMBA BONANLOKA / A": [
            {
              station: "BIBAMBA",
              voters: 3569
            },
            {
              station: "BONANLOKA",
              voters: 4330
            },
          ],
          "E.P. BONADIWOTO / A": [
            {
              station: "BONADIWOTO",
              voters: 1487
            },
          ],
          "E.P. CITE BERGE / A": [
            {
              station: "CITE",
              voters: 36197
            },
            {
              station: "BERGE",
              voters: 19380
            },
          ],
          "E.P. CITE DES ENSEIGNANTS / A": [
            {
              station: "PAIX",
              voters: 3159
            },
            {
              station: "DES",
              voters: 6647
            },
            {
              station: "ENSEIGNANTS",
              voters: 3159
            },
            {
              station: "LOGBABA",
              voters: 10038
            },
          ],
          "E.P. DE BILONGUE / A": [
            {
              station: "BILONGUE",
              voters: 20078
            },
          ],
          "E.P. DE BOBONGO / A": [
            {
              station: "BOBONGO",
              voters: 19771
            },
          ],
          "E.P. GENIE MILITAIRE / A": [
            {
              station: "MADIBA",
              voters: 3488
            },
            {
              station: "NOBLES",
              voters: 3488
            },
          ],
          "E.P. NDOGMBE / A": [
            {
              station: "JARDIN",
              voters: 1943
            },
            {
              station: "SO'O-BECKER",
              voters: 1943
            },
            {
              station: "SONG-NKOT",
              voters: 1838
            },
          ],
          "E.P. NKOLBONG / A": [
            {
              station: "CHIRAC",
              voters: 7011
            },
            {
              station: "NKOLBONG",
              voters: 7011
            },
          ],
          "E.P. YATCHIKA / A": [
            {
              station: "BWANG",
              voters: 5896
            },
            {
              station: "YANSOKI",
              voters: 5896
            },
            {
              station: "YASSA",
              voters: 13352
            },
            {
              station: "YATCHIKA",
              voters: 5896
            },
          ],
          "E.P.L LES COUCOUS / A": [
            {
              station: "SOBINAN",
              voters: 2476
            },
          ],
          "E.P.L. AVENIR / A": [
            {
              station: "BIKIBO",
              voters: 11594
            },
            {
              station: "MANDJAP",
              voters: 5797
            },
            {
              station: "NDOG-MANG",
              voters: 5797
            },
            {
              station: "NDOGHEM",
              voters: 5797
            },
            {
              station: "VILLAGE",
              voters: 32220
            },
          ],
          "E.P.L. FIDELITE / A": [
            {
              station: "LOG",
              voters: 726
            },
            {
              station: "NDENGUE",
              voters: 726
            },
          ],
          "E.P.L. HENRI DUMONT / A": [
            {
              station: "NYANKA",
              voters: 3461
            },
          ],
          "E.P.L. LA LIBERTE / A": [
            {
              station: "QUARTIER",
              voters: 1507
            },
            {
              station: "BAMENDA",
              voters: 1507
            },
            {
              station: "SOCARTO",
              voters: 1507
            },
          ],
          "E.P.L. NDOGSIMBI / A": [
            {
              station: "NDOGSIMBI",
              voters: 2421
            },
          ],
          "E.PR. LA FIDELITE / A": [
            {
              station: "BONAMOUTONGO",
              voters: 3143
            },
          ],
          "E.PR. LA PREVOYANCE / A": [
            {
              station: "LOGMAYANGUI",
              voters: 1951
            },
          ],
          "ECOLE CEBEC KONDI PK 9 / A": [
            {
              station: "SOBIKAGO",
              voters: 4146
            },
          ],
          "ECOLE CEBEC MBOPPI / A": [
            {
              station: "CAMP",
              voters: 1896
            },
            {
              station: "MBOPPI",
              voters: 3792
            },
            {
              station: "CIVIL",
              voters: 1896
            },
          ],
          "ECOLE CEBEC SOBOUM / A": [
            {
              station: "SOBOUM",
              voters: 5627
            },
            {
              station: "PMI",
              voters: 3504
            },
          ],
          "ECOLE CHARLEMAGNE / A": [
            {
              station: "EMANGUE",
              voters: 25
            },
            {
              station: "EMANGUE-JAPOMA",
              voters: 25
            },
          ],
          "ECOLE LA CAPACITE S.FR / A": [
            {
              station: "NSONG",
              voters: 5782
            },
            {
              station: "NGONGA-MBOH",
              voters: 5782
            },
            {
              station: "KON",
              voters: 5782
            },
            {
              station: "SONGA-BOKO",
              voters: 14864
            },
          ],
          "ECOLE PACIFIQUE CCC / A": [
            {
              station: "CCC",
              voters: 4146
            },
          ],
          "ECOLE SAINT FELIX / A": [
            {
              station: "NGOMA",
              voters: 2607
            },
          ],
          "ECOLE SAINTE AGNES / A": [
            {
              station: "MADAGASCAR",
              voters: 7919
            },
          ],
          "ECOLE SAINTE MADELEINE / A": [
            {
              station: "BOMKOU",
              voters: 2872
            },
          ],
          "ECOLE ST THOMAS / A": [
            {
              station: "POM",
              voters: 3422
            },
            {
              station: "DIHEN",
              voters: 3422
            },
          ],
          "GPE SCOL. ACHOUKA / A": [
            {
              station: "BOKO",
              voters: 45403
            },
            {
              station: "CARRIERE",
              voters: 13440
            },
            {
              station: "PLAGE",
              voters: 21759
            },
          ],
          "GPE SCOL. LA REFERENCE PLUS / A": [
            {
              station: "PLATEAU",
              voters: 17496
            },
          ],
          "GPE SCOL. LA RIVE / A": [
            {
              station: "SONG",
              voters: 3029
            },
            {
              station: "MAHOP",
              voters: 3029
            },
          ],
          "GPE SCOL. LES MEILLEURS / A": [
            {
              station: "HOPITAL",
              voters: 2651
            },
          ],
          "GPE SCOL. MEUKONTCHOU / A": [
            {
              station: "KING",
              voters: 9082
            },
            {
              station: "QUARTER",
              voters: 9082
            },
            {
              station: "MBANGA",
              voters: 16615
            },
            {
              station: "PONGO",
              voters: 9159
            },
          ],
          "GPE SCOL. OPUNTIA / A": [
            {
              station: "NGO-NJOH",
              voters: 1783
            },
          ],
          "I.A.E.S / A": [
            {
              station: "NYALLA",
              voters: 44903
            },
          ],
          "INSAM DE MBANGA BAKOKO / A": [
            {
              station: "BAKOKO",
              voters: 7456
            },
            {
              station: "AXE",
              voters: 7456
            },
            {
              station: "LOURD",
              voters: 7456
            },
          ],
          "INSAM DE NDOGBATI / A": [
            {
              station: "REGIFERCAM",
              voters: 947
            },
          ],
          "INSTITUT NGASSI LOGBABA / A": [
            {
              station: "MBOKANG",
              voters: 3694
            },
            {
              station: "TOUNOU",
              voters: 15846
            },
          ],
          "INSTITUT UNIV. GOLFE DE GUINEE / A": [
            {
              station: "KONDI",
              voters: 4335
            },
            {
              station: "SUD",
              voters: 7556
            },
          ],
          "INSTITUT YULIANA / A": [
            {
              station: "NKONGUI",
              voters: 3185
            },
          ],
          "LYCEE BILINGUE DE NYALLA / A": [
            {
              station: "LOGTCHA",
              voters: 5781
            },
            {
              station: "HAOUSSA",
              voters: 5781
            },
          ],
          "LYCEE BILINGUE DU GENIE / A": [
            {
              station: "GENIE",
              voters: 7923
            },
            {
              station: "MILITAIRE",
              voters: 7923
            },
          ],
          "LYCEE D'OYACK / A": [
            {
              station: "OYACK",
              voters: 18954
            },
          ],
          "LYCEE DE BRAZZAVILLE / A": [
            {
              station: "BRAZZAVILLE",
              voters: 7130
            },
          ],
          "LYCEE DE JAPOMA / A": [
            {
              station: "JAPOMA",
              voters: 9515
            },
          ],
          "LYCEE DE NDOGPASSI / A": [
            {
              station: "ZONE",
              voters: 11416
            },
            {
              station: "RECASEMENT",
              voters: 11416
            },
          ],
        },
        "DOUALA IV": {
          "C.F.S.M. / A": [
            {
              station: "CHEFFERIE",
              voters: 3011
            },
          ],
          "CASE SOCIALE MINKWELE / A": [
            {
              station: "MINKWELE",
              voters: 3976
            },
          ],
          "CES DE SODIKO / A": [
            {
              station: "VILLAGE",
              voters: 741
            },
          ],
          "COLLEGE DAAS / A": [
            {
              station: "NGWELE",
              voters: 18738
            },
            {
              station: "DAAS",
              voters: 6360
            },
          ],
          "COLLEGE DU LEVANT / A": [
            {
              station: "MPANJO",
              voters: 5870
            },
          ],
          "COLLEGE LA MARTINE / A": [
            {
              station: "SODIKO",
              voters: 10280
            },
            {
              station: "VILLE",
              voters: 8434
            },
          ],
          "E P BONENDALE / A": [
            {
              station: "BONENDALE",
              voters: 11946
            },
            {
              station: "BONAMATUMBE",
              voters: 3982
            },
          ],
          "E P DJEBALE / A": [
            {
              station: "DJEBALE",
              voters: 340
            },
          ],
          "E. PRIVEE DE L'EXCELLENCE / A": [
            {
              station: "RAILS",
              voters: 3619
            },
          ],
          "E.P. NDOBO / A": [
            {
              station: "QUARTIER",
              voters: 10881
            },
            {
              station: "BILINGUE",
              voters: 10881
            },
          ],
          "ECOLE BOJONGO / A": [
            {
              station: "BOJONGO",
              voters: 5989
            },
          ],
          "ECOLE COMMUNALE / A": [
            {
              station: "CARRIERE",
              voters: 13043
            },
          ],
          "ECOLE LE FLEURON / A": [
            {
              station: "WASHINGTON",
              voters: 8262
            },
          ],
          "ECOLE MISSION CATHOLIQUE / A": [
            {
              station: "BESSEKE",
              voters: 9944
            },
            {
              station: "BONAMBAPPE",
              voters: 21593
            },
            {
              station: "NKOMBA",
              voters: 19386
            },
          ],
          "ECOLE PRIVEE LA REDOUTE / A": [
            {
              station: "NDOBO",
              voters: 36908
            },
            {
              station: "BANEN",
              voters: 17067
            },
          ],
          "ECOLE PUBLIQUE NKONJIBE / A": [
            {
              station: "GRAND",
              voters: 11337
            },
            {
              station: "HANGAR",
              voters: 11337
            },
          ],
          "EP BONAMATUMBE / A": [
            {
              station: "BONAMATUMBE-VILLE",
              voters: 2149
            },
          ],
          "EP BONAMIKANO / A": [
            {
              station: "DIKOLO",
              voters: 5899
            },
          ],
          "EP BONASSAMA / A": [
            {
              station: "BONASSAMA",
              voters: 4228
            },
          ],
          "INSTITUT TONJI / A": [
            {
              station: "JOHN",
              voters: 10058
            },
            {
              station: "WHITE",
              voters: 10058
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "BONAMIKANO",
              voters: 13049
            },
          ],
          "LYCEE MAMBANDA / A": [
            {
              station: "LYCEE",
              voters: 3369
            },
          ],
          "MOUNT ZION SCHOOL / A": [
            {
              station: "MAMBANDA",
              voters: 47559
            },
            {
              station: "CENTRE",
              voters: 33945
            },
            {
              station: "ADMINISTRATIF",
              voters: 21089
            },
          ],
          "RENGLAD MAJESTY / A": [
            {
              station: "BEPELE",
              voters: 3366
            },
          ],
        },
        "DOUALA V": {
          "CEFTI MBANYA / A": [
            {
              station: "MBANYA",
              voters: 5829
            },
          ],
          "COL. MARTIN LUTHER KING / A": [
            {
              station: "TSF",
              voters: 8769
            },
          ],
          "COLLEGE CEFOMI SODIKOMBO / A": [
            {
              station: "SODIKOMBO",
              voters: 4429
            },
          ],
          "COLLEGE COHAS / A": [
            {
              station: "BEPANDA",
              voters: 73355
            },
            {
              station: "2000",
              voters: 2189
            },
          ],
          "COLLEGE L'AGAPE / A": [
            {
              station: "NOUVELLE",
              voters: 4033
            },
            {
              station: "ROUTE",
              voters: 4033
            },
            {
              station: "SHANGAI",
              voters: 4033
            },
          ],
          "COLLEGE MATURITE / A": [
            {
              station: "DEFOSSO",
              voters: 4440
            },
            {
              station: "ESSEC",
              voters: 13556
            },
          ],
          "COLLEGE POLY. BEPANDA PEUPLE / A": [
            {
              station: "PEUPLE",
              voters: 6014
            },
          ],
          "E.P.P.R DE SOBIKAGO / A": [
            {
              station: "SOBIKAGO",
              voters: 1673
            },
          ],
          "ECOLE ADVENTISTE 7EME JOUR / A": [
            {
              station: "MATURITE",
              voters: 4163
            },
          ],
          "ECOLE BIL. ANGLOPHONE OMNISPORT / A": [
            {
              station: "MONACO",
              voters: 1047
            },
          ],
          "ECOLE CONFESS. NDOGHEM I / A": [
            {
              station: "NDOGHEM",
              voters: 2153
            },
          ],
          "ECOLE LA RETRAITE / A": [
            {
              station: "BEEDI",
              voters: 22835
            },
            {
              station: "CARREFOUR",
              voters: 40757
            },
            {
              station: "MACON",
              voters: 13577
            },
            {
              station: "HAUTE",
              voters: 3978
            },
            {
              station: "TENSION",
              voters: 3978
            },
          ],
          "ECOLE PIGEONS / A": [
            {
              station: "NGUERECK",
              voters: 1724
            },
          ],
          "ECOLE POPULAIRE BOMKOUL PK15 / A": [
            {
              station: "PK14/PK15",
              voters: 3189
            },
          ],
          "ECOLE POPULAIRE YONYONG / A": [
            {
              station: "CONSULAT",
              voters: 4633
            },
            {
              station: "BENIN",
              voters: 4633
            },
            {
              station: "PETIT",
              voters: 15201
            },
            {
              station: "MARCHE",
              voters: 34486
            },
            {
              station: "YONYONG",
              voters: 4633
            },
          ],
          "ECOLE PRIVEE CADENELLE / A": [
            {
              station: "DIKAHE",
              voters: 2883
            },
          ],
          "ECOLE PRIVEE FRATERNITE / A": [
            {
              station: "CACAO",
              voters: 6577
            },
            {
              station: "BARRY",
              voters: 6577
            },
            {
              station: "BOULANGERIE",
              voters: 5627
            },
            {
              station: "PAIX",
              voters: 5627
            },
            {
              station: "MAKEPE",
              voters: 77318
            },
            {
              station: "MISSOKE",
              voters: 22389
            },
          ],
          "ECOLE PRIVEE LA FIERTE KOTTO / A": [
            {
              station: "CHEFFERIE",
              voters: 6284
            },
          ],
          "ECOLE PRIVEE LES PIGEONS / A": [
            {
              station: "EMENE",
              voters: 2997
            },
            {
              station: "CITY",
              voters: 5558
            },
          ],
          "ECOLE PUBLIQUE PK21 / A": [
            {
              station: "PK20/PK21",
              voters: 2803
            },
          ],
          "ECOLE SAINT ANDRE MANIKE / A": [
            {
              station: "MANIKE",
              voters: 751
            },
          ],
          "ECOLE SAINT KISITO OMNISPORT / A": [
            {
              station: "SCDP",
              voters: 3229
            },
            {
              station: "OMNISPORT",
              voters: 6648
            },
          ],
          "EP BEPANDA OMNISPORT / A": [
            {
              station: "STADE",
              voters: 3419
            },
          ],
          "EP BONAMOUSSADI / A": [
            {
              station: "BONAMOUSADI",
              voters: 11881
            },
            {
              station: "SONEL",
              voters: 14364
            },
            {
              station: "BONAMOUSSADI",
              voters: 111793
            },
            {
              station: "AFRIQUE",
              voters: 9599
            },
            {
              station: "SUD",
              voters: 9599
            },
            {
              station: "BIJOU",
              voters: 9599
            },
            {
              station: "LYCEE",
              voters: 23612
            },
            {
              station: "COMMISSARIAT",
              voters: 9599
            },
            {
              station: "DENVER",
              voters: 15890
            },
            {
              station: "TERMINUS",
              voters: 24772
            },
            {
              station: "BONANGANDO",
              voters: 17240
            },
          ],
          "EP BONEWANDA / A": [
            {
              station: "BONEWANDA",
              voters: 1977
            },
          ],
          "EP CITE SIC / A": [
            {
              station: "GENTIL",
              voters: 5061
            },
            {
              station: "MANOKA",
              voters: 5061
            },
          ],
          "EP DE LOGBESSOU / A": [
            {
              station: "LOGBESSOU",
              voters: 11529
            },
          ],
          "EP DE NDOGBONG / A": [
            {
              station: "NDOGBONG",
              voters: 40938
            },
            {
              station: "ANCIEN",
              voters: 6950
            },
            {
              station: "DEPOT",
              voters: 6950
            },
            {
              station: "GUI.",
              voters: 6950
            },
            {
              station: "GUINNESS",
              voters: 6950
            },
            {
              station: "MBONDY",
              voters: 6950
            },
            {
              station: "MERVEILLES",
              voters: 6950
            },
          ],
          "EP LA CONFIANCE / A": [
            {
              station: "DECHARGE",
              voters: 14942
            },
          ],
          "EP LA SOCIALISATION / A": [
            {
              station: "KOTTO",
              voters: 25932
            },
            {
              station: "BLOC",
              voters: 37036
            },
            {
              station: "CAMTEL",
              voters: 3462
            },
          ],
          "EPL BONAMOUSSONGO / A": [
            {
              station: "TONNER",
              voters: 4114
            },
          ],
          "EPL LA CARINA KONDI VERT / A": [
            {
              station: "VERT",
              voters: 4452
            },
          ],
          "EPL LA RECHERCHE / A": [
            {
              station: "ANDEM",
              voters: 3933
            },
            {
              station: "LOGPOM",
              voters: 14653
            },
          ],
          "EPM PETITS BOIS BANGUE / A": [
            {
              station: "BANGUE",
              voters: 14772
            },
            {
              station: "FIN",
              voters: 20824
            },
            {
              station: "GOUDRON",
              voters: 20824
            },
            {
              station: "VILLAGE",
              voters: 28250
            },
          ],
          "EPPL MBENGUE CITY / A": [
            {
              station: "MBENGUE",
              voters: 2561
            },
          ],
          "FOYER CHEFFERIE BONABEYIKE / A": [
            {
              station: "BONABEYIKE",
              voters: 140
            },
          ],
          "FOYER CHEFFERIE BONANGANDO / A": [
            {
              station: "BONANGANG",
              voters: 5829
            },
          ],
          "FOYER CHEFFERIE NDOG MBE II / A": [
            {
              station: "NDOG",
              voters: 132
            },
            {
              station: "MBE",
              voters: 132
            },
          ],
          "FOYER CHEFFERIE NGOMBE / A": [
            {
              station: "NGOMBE",
              voters: 199
            },
          ],
          "GP. SCOLAIRE BILINGUE LES POUSSINS / A": [
            {
              station: "PK16/17/18",
              voters: 3497
            },
          ],
          "GP. SCOLAIRE LA RECHERCHE II MALANGUE  /A": [
            {
              station: "MALANGUE",
              voters: 3884
            },
          ],
          "GPE SCOL. EYIDI KONDI / A": [
            {
              station: "KONDI",
              voters: 8066
            },
            {
              station: "PK8",
              voters: 3614
            },
          ],
          "GROUPE SCOLAIRE BILINGUE FELYMA / A": [
            {
              station: "LENDI",
              voters: 3573
            },
            {
              station: "CENTRE",
              voters: 746
            },
            {
              station: "URBAIN",
              voters: 746
            },
          ],
          "GROUPE SCOLAIRE BILINGUE PRIMAIRE ET  MATERNELLE VENDUN / A": [
            {
              station: "NGOMA",
              voters: 1376
            },
            {
              station: "(PK19)",
              voters: 1376
            },
          ],
          "GSB LE PORTIQUE MAKEPE P.P. / A": [
            {
              station: "PAYS",
              voters: 4922
            },
          ],
          "GSBM / A": [
            {
              station: "BISSOKE",
              voters: 2379
            },
          ],
          "I.P.P.F PETIT WOURI / A": [
            {
              station: "WOURI",
              voters: 5646
            },
          ],
          "INST. POLYVALENT MINTANYOU / A": [
            {
              station: "NDOGBATI",
              voters: 2532
            },
          ],
          "LYCEE CITE DES PALMIERS / A": [
            {
              station: "CITE",
              voters: 49348
            },
            {
              station: "DES",
              voters: 12468
            },
            {
              station: "PALMIERS",
              voters: 12468
            },
          ],
          "LYCEE D'AKWA NORD / A": [
            {
              station: "RUE",
              voters: 7807
            },
            {
              station: "AJUDANT",
              voters: 7807
            },
          ],
          "LYCEE DE BEPANDA / A": [
            {
              station: "AXE",
              voters: 6204
            },
            {
              station: "LOURD",
              voters: 6204
            },
            {
              station: "TENDON",
              voters: 6204
            },
            {
              station: "VOIRIE",
              voters: 6204
            },
          ],
          "LYCEE TECH. NDOGBONG / A": [
            {
              station: "IUT",
              voters: 6569
            },
            {
              station: "TECHNIQUE",
              voters: 6569
            },
          ],
        },
        "DOUALA VI": {
          "E. P. BILINGUE DE CAP-CAMEROUN / A": [
            {
              station: "CAP",
              voters: 480
            },
            {
              station: "CAMEROUN",
              voters: 480
            },
            {
              station: "TENDE",
              voters: 480
            },
          ],
          "E. P. DE KOMBO MOUKOKO / A": [
            {
              station: "MOUKOKO",
              voters: 40
            },
            {
              station: "WENGUE",
              voters: 40
            },
          ],
          "E. P. DE KOOH / A": [
            {
              station: "BOSCO",
              voters: 423
            },
            {
              station: "KOOH",
              voters: 423
            },
            {
              station: "MATANDA",
              voters: 423
            },
            {
              station: "MASSADI",
              voters: 423
            },
            {
              station: "PIKORO",
              voters: 423
            },
            {
              station: "TAKELE",
              voters: 423
            },
          ],
          "E.P. DE BESCHOOL / A": [
            {
              station: "ACCRA",
              voters: 68
            },
            {
              station: "KOMBO",
              voters: 1467
            },
            {
              station: "BESCHOOL",
              voters: 68
            },
            {
              station: "MOPI",
              voters: 68
            },
          ],
          "E.P. DE MANOKA / A": [
            {
              station: "CAMP",
              voters: 814
            },
            {
              station: "BIR",
              voters: 814
            },
            {
              station: "CENTRE",
              voters: 814
            },
            {
              station: "ADMINISTRATIF",
              voters: 814
            },
            {
              station: "DAHOMEY",
              voters: 814
            },
            {
              station: "GENDARMERIE",
              voters: 814
            },
            {
              station: "KALABAR",
              voters: 814
            },
            {
              station: "QUATER",
              voters: 814
            },
            {
              station: "KWANSI",
              voters: 814
            },
            {
              station: "PLATEAU",
              voters: 814
            },
          ],
          "E.P. DE MBENGUE DIKOUME / A": [
            {
              station: "EPAKA",
              voters: 62
            },
            {
              station: "MBENGUE",
              voters: 62
            },
            {
              station: "DIKOUME",
              voters: 62
            },
            {
              station: "NGALAMBERY",
              voters: 62
            },
          ],
          "E.P. DE SIO - SIO / A": [
            {
              station: "EPASSI",
              voters: 163
            },
            {
              station: "SIO-SIO",
              voters: 326
            },
          ],
          "E.P. DE TOUBE / A": [
            {
              station: "KALABOT",
              voters: 65
            },
            {
              station: "TOUBE",
              voters: 130
            },
          ],
          "ECOLE DES PARENTS DE BWAPE / A": [
            {
              station: "BWAPE",
              voters: 161
            },
            {
              station: "MANBANDA",
              voters: 161
            },
          ],
          "ECOLE DES PARENTS DE DONGO / A": [
            {
              station: "DONGO",
              voters: 701
            },
            {
              station: "DIBO",
              voters: 701
            },
            {
              station: "MISSIPI",
              voters: 701
            },
          ],
          "ECOLE DES PARENTS DE MOUNGANGUE / A": [
            {
              station: "BOUMA",
              voters: 46
            },
            {
              station: "MOUNGANGUE",
              voters: 46
            },
            {
              station: "NGOMBE",
              voters: 46
            },
            {
              station: "MUNJA",
              voters: 46
            },
          ],
          "ECOLE DES PARENTS DE NGOTI / A": [
            {
              station: "BIKIKRI",
              voters: 42
            },
            {
              station: "NGOTI",
              voters: 168
            },
            {
              station: "(ZION)",
              voters: 42
            },
          ],
          "ECOLE MAT. PUB. MANOKA / A": [
            {
              station: "CREEK",
              voters: 757
            },
            {
              station: "NUMERO",
              voters: 757
            },
            {
              station: "NYANGADOU",
              voters: 757
            },
            {
              station: "SANDJE",
              voters: 1514
            },
          ],
        },
      },
      "NKAM": {
        "NDOBIAN": {
          "ECOLE PUBLIQUE BANGOPE / A": [
            {
              station: "BANGOPE",
              voters: 147
            },
          ],
          "ECOLE PUBLIQUE BEHACK / A": [
            {
              station: "BEHACK",
              voters: 149
            },
            {
              station: "DJOUE",
              voters: 149
            },
            {
              station: "MOUMA",
              voters: 149
            },
          ],
          "ECOLE PUBLIQUE CENTRE / A": [
            {
              station: "BAKOM",
              voters: 471
            },
            {
              station: "NKONGMISSA",
              voters: 471
            },
          ],
          "ECOLE PUBLIQUE DE FANDA / A": [
            {
              station: "FANDA",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE DJONGO / A": [
            {
              station: "DJONGO",
              voters: 45
            },
          ],
          "ECOLE PUBLIQUE NDOKOLO / A": [
            {
              station: "NDOKOLO",
              voters: 86
            },
          ],
          "ECOLE PUBLIQUE NDOTORONG / A": [
            {
              station: "NDOTORONG",
              voters: 43
            },
          ],
          "ECOLE PUBLIQUE NDOTTO II / A": [
            {
              station: "NDOTTO",
              voters: 493
            },
          ],
          "ECOLE PUBLIQUE NDOTTO III / A": [
            {
              station: "III",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE NDOTTO K-K / A": [
            {
              station: "KWAKWACK",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE NGOMA / A": [
            {
              station: "NGOMA-BAKOUA",
              voters: 38
            },
          ],
          "ECOLE PUBLIQUE RIKI / A": [
            {
              station: "RIKI",
              voters: 104
            },
          ],
          "FOYER KONG / A": [
            {
              station: "KONG-BAKOUA",
              voters: 45
            },
          ],
          "FOYER MBIAM / A": [
            {
              station: "MBIAM",
              voters: 325
            },
          ],
          "FOYER MILOMBE / A": [
            {
              station: "MILOMBE",
              voters: 43
            },
          ],
          "FOYER MOYA / A": [
            {
              station: "MOYA",
              voters: 254
            },
          ],
          "FOYER NDOLAH / A": [
            {
              station: "NDOLAH",
              voters: 24
            },
          ],
          "FOYER NOUH NGOBNAH / A": [
            {
              station: "NOUH",
              voters: 202
            },
            {
              station: "NGOBNAH",
              voters: 202
            },
          ],
          "FOYER TONGO / A": [
            {
              station: "BOBA",
              voters: 183
            },
            {
              station: "SOGHON",
              voters: 183
            },
            {
              station: "TONGO",
              voters: 183
            },
          ],
          "LYCEE NDOBIAN / A": [
            {
              station: "NDOCKSA",
              voters: 552
            },
            {
              station: "NDOYEM",
              voters: 172
            },
          ],
          "SAR/SM NDOBIAN / A": [
            {
              station: "NDOUDOUMA",
              voters: 225
            },
            {
              station: "YACKLONG",
              voters: 225
            },
          ],
        },
        "NKONDJOCK": {
          "ANCIENNE S/P / A": [
            {
              station: "ANCIENNE",
              voters: 204
            },
            {
              station: "SOUS-PREFECTURE",
              voters: 204
            },
          ],
          "CETIC NDOCK SAMBA MABOMBE / A": [
            {
              station: "NDOCKBOUNE",
              voters: 180
            },
          ],
          "DEKOULE FOYER / A": [
            {
              station: "DEKOULE",
              voters: 463
            },
          ],
          "ECOLE ST PAUL MAKITA / A": [
            {
              station: "AUT",
              voters: 135
            },
          ],
          "EM NYLON / A": [
            {
              station: "NYLON",
              voters: 176
            },
          ],
          "EP ABINYAM / A": [
            {
              station: "ABINYAM",
              voters: 67
            },
          ],
          "EP BINDJEN DOCBAN / A": [
            {
              station: "BINDJEN",
              voters: 333
            },
            {
              station: "DOCBAN",
              voters: 132
            },
          ],
          "EP DIDIPE / A": [
            {
              station: "DIDIPE",
              voters: 473
            },
          ],
          "EP DISSOUCK / A": [
            {
              station: "DISSOUCK",
              voters: 163
            },
          ],
          "EP KOUEDJOU / A": [
            {
              station: "KOUEDJOU",
              voters: 453
            },
          ],
          "EP MADIP / A": [
            {
              station: "MADIP",
              voters: 157
            },
          ],
          "EP MAKAKAN / A": [
            {
              station: "MAKAKAN",
              voters: 43
            },
          ],
          "EP MALE 6E / A": [
            {
              station: "MALE",
              voters: 669
            },
          ],
          "EP MALE BIS / A": [
            {
              station: "BIS",
              voters: 223
            },
          ],
          "EP MOLOCK / A": [
            {
              station: "MOLOCK",
              voters: 134
            },
          ],
          "EP NDOCKOUMA / A": [
            {
              station: "NDOCKOUMA",
              voters: 162
            },
          ],
          "EP NDOCKTIBA / A": [
            {
              station: "NDOCKTIBA",
              voters: 244
            },
          ],
          "EP NKONDJOCK GPEA / A": [
            {
              station: "SODENKAM",
              voters: 143
            },
          ],
          "EP SAHE / A": [
            {
              station: "SAHE",
              voters: 93
            },
            {
              station: "NKONGMALANG",
              voters: 93
            },
          ],
          "EP SAM / A": [
            {
              station: "SAM",
              voters: 113
            },
          ],
          "EP TAM / A": [
            {
              station: "TAM",
              voters: 371
            },
          ],
          "FOYER DE MINE / A": [
            {
              station: "MINE",
              voters: 250
            },
          ],
          "FOYER MAKITA / A": [
            {
              station: "MAKITA",
              voters: 368
            },
          ],
          "FOYER MANGUELE / A": [
            {
              station: "MANGUELE",
              voters: 183
            },
          ],
          "FOYER MATIN / A": [
            {
              station: "MATIN",
              voters: 94
            },
          ],
          "FOYER MBEMA / A": [
            {
              station: "GENDARMERIE",
              voters: 694
            },
            {
              station: "ROUTE",
              voters: 848
            },
            {
              station: "MATOUBE",
              voters: 1894
            },
          ],
          "FOYER MBENGA I / A": [
            {
              station: "BENGA",
              voters: 199
            },
          ],
          "FOYER NDOCKBAN ROUTE / A": [
            {
              station: "NDOCKBAN",
              voters: 154
            },
          ],
          "FOYER NDOCKSAMBA / A": [
            {
              station: "NDOCKSAMBA",
              voters: 761
            },
          ],
          "FOYER NGOMAN I / A": [
            {
              station: "NGOMAN",
              voters: 232
            },
          ],
          "FOYER NJINGANG / A": [
            {
              station: "NJINGANG",
              voters: 165
            },
          ],
          "FOYER NKAKE / A": [
            {
              station: "NKAKE",
              voters: 18
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "MBEMA",
              voters: 801
            },
            {
              station: "NKONDJOCK",
              voters: 801
            },
            {
              station: "CENTRE",
              voters: 801
            },
          ],
          "MABOMBE EM / A": [
            {
              station: "MABOMBE",
              voters: 619
            },
          ],
          "POSTE AGRICOLE BINDJEN P. / A": [
            {
              station: "PIONNIER",
              voters: 201
            },
          ],
          "POSTE AGRICOLE SOHOCK / A": [
            {
              station: "SOHOCK",
              voters: 419
            },
          ],
          "UEBC YANDOCK / A": [
            {
              station: "YANDOCK",
              voters: 144
            },
          ],
        },
        "YABASSI": {
          "CASE COM. BAKEM / A": [
            {
              station: "BAKEM",
              voters: 34
            },
          ],
          "CASE COM. DIBENG / A": [
            {
              station: "DIBENG",
              voters: 149
            },
          ],
          "CASE COM. DIMBONG / A": [
            {
              station: "DIMBONG",
              voters: 395
            },
          ],
          "CASE COM. DJENG / A": [
            {
              station: "DJENG",
              voters: 75
            },
          ],
          "CASE COM. MANGOULE I / A": [
            {
              station: "MANGOULE",
              voters: 314
            },
          ],
          "CASE COM. NDOGBAO / A": [
            {
              station: "NDOGBAO",
              voters: 47
            },
          ],
          "CASE COM. NKOKOM / A": [
            {
              station: "NKOKOM",
              voters: 150
            },
          ],
          "CASE COM. NTABAKO / A": [
            {
              station: "NTABAKO",
              voters: 180
            },
          ],
          "CENTRE DE SANTE DE BONABEKE / A": [
            {
              station: "BONABEKE",
              voters: 378
            },
          ],
          "CENTRE DE SANTE DE BWENE-OLI / A": [
            {
              station: "BWENE-OLI",
              voters: 101
            },
          ],
          "CENTRE DE SANTE DE MAMBA / A": [
            {
              station: "MAMBA",
              voters: 84
            },
            {
              station: "MANBA",
              voters: 84
            },
          ],
          "CENTRE SOCIAL DE SIGA BONJO / A": [
            {
              station: "SIGA",
              voters: 642
            },
          ],
          "E.E.C MOUTIMBELEMBE / A": [
            {
              station: "MOUTIMBELEMBE",
              voters: 103
            },
          ],
          "ECOLE C.E.B.E.C NKOLMBONG / A": [
            {
              station: "NKOLMBONG",
              voters: 413
            },
          ],
          "ECOLE MATERNELLE NDOGBELE I / A": [
            {
              station: "NDOGBELE",
              voters: 1018
            },
          ],
          "ECOLE PUBLIQUE BANYA I / A": [
            {
              station: "BANYA",
              voters: 2748
            },
          ],
          "ECOLE PUBLIQUE BEBONDO / A": [
            {
              station: "BEBONDO",
              voters: 81
            },
          ],
          "ECOLE PUBLIQUE BONADISSAKE / A": [
            {
              station: "BONADISSAKE",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE BONANJOA / A": [
            {
              station: "BONANJOA",
              voters: 111
            },
          ],
          "ECOLE PUBLIQUE BONANYAMSI / A": [
            {
              station: "BODIMAM",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE BONEPEA / A": [
            {
              station: "BONEPEA",
              voters: 66
            },
          ],
          "ECOLE PUBLIQUE BONEPOUPA I / A": [
            {
              station: "BONEPOUPA",
              voters: 1371
            },
          ],
          "ECOLE PUBLIQUE BONJO / A": [
            {
              station: "BONJO",
              voters: 1409
            },
          ],
          "ECOLE PUBLIQUE DIWOM / A": [
            {
              station: "DIWOM",
              voters: 367
            },
          ],
          "ECOLE PUBLIQUE LAMBA / A": [
            {
              station: "LAMBA",
              voters: 252
            },
          ],
          "ECOLE PUBLIQUE MASSOUMBOU VILLAGE / A": [
            {
              station: "MASSOUMBOU",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE NDJENGA / A": [
            {
              station: "NDJEN",
              voters: 56
            },
          ],
          "ECOLE PUBLIQUE NDOGBANGUENGUE / A": [
            {
              station: "NDOGBANGUENGUE",
              voters: 53
            },
          ],
          "ECOLE PUBLIQUE NDOGPO / A": [
            {
              station: "NDOGPO",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE NDOKATI / A": [
            {
              station: "NDOKATI",
              voters: 86
            },
          ],
          "ECOLE PUBLIQUE NDOKNDACK / A": [
            {
              station: "NDOKNDACK",
              voters: 66
            },
          ],
          "ECOLE PUBLIQUE NKONGMALANG / A": [
            {
              station: "NKONGMALANG",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE NYAMTAN / A": [
            {
              station: "NYAMTAN",
              voters: 127
            },
          ],
          "ECOLE PUBLIQUE SOLE / A": [
            {
              station: "SOLE",
              voters: 603
            },
          ],
          "ECOLE PUBLIQUE TONDE CARREFOUR / A": [
            {
              station: "TONDE",
              voters: 884
            },
          ],
          "EGLISE CATHOLIQUE DE NDOKAMA I / A": [
            {
              station: "NDOKAMA",
              voters: 198
            },
          ],
          "LAMBA GIC MAFIL / A": [
            {
              station: "MAFIL",
              voters: 34
            },
          ],
          "LYCEE NDOKOKO / A": [
            {
              station: "NDOKOKO",
              voters: 387
            },
          ],
          "LYCEE TECHNIQUE / A": [
            {
              station: "CENTRE",
              voters: 548
            },
            {
              station: "ADMINISTRATIF",
              voters: 548
            },
          ],
        },
        "YINGUI": {
          "CETIC DE YINGUI / A": [
            {
              station: "NDOKHENDE",
              voters: 40
            },
            {
              station: "KOH",
              voters: 40
            },
          ],
          "E.P. DE NIPPOUN / A": [
            {
              station: "MANINGA",
              voters: 138
            },
            {
              station: "MAKOMBE",
              voters: 138
            },
            {
              station: "NIPPOUM",
              voters: 61
            },
          ],
          "ECOLE MATERNELLE NDEM-KAK / A": [
            {
              station: "NDEM",
              voters: 188
            },
          ],
          "ECOLE PUBLIQUE D'IBOTI / A": [
            {
              station: "IBOTI",
              voters: 228
            },
          ],
          "ECOLE PUBLIQUE DE  NDOCKANYACKMANINGA MAKOMBE / A": [
            {
              station: "NDOCKAN",
              voters: 109
            },
            {
              station: "YACK",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE DE LOGDENG / A": [
            {
              station: "LOGDENG",
              voters: 105
            },
            {
              station: "NDOKMINOKON",
              voters: 214
            },
          ],
          "ECOLE PUBLIQUE DE MAKAI / A": [
            {
              station: "MAKAI",
              voters: 96
            },
            {
              station: "LOG",
              voters: 96
            },
            {
              station: "MANANGA",
              voters: 96
            },
          ],
          "ECOLE PUBLIQUE DE MOSSE / A": [
            {
              station: "MOSSE",
              voters: 84
            },
          ],
          "ECOLE PUBLIQUE NDOKMEM NORD / A": [
            {
              station: "NDOKMEM",
              voters: 94
            },
            {
              station: "NORD",
              voters: 94
            },
          ],
          "ESPLANADE CHEFFERIE NDOCKTOUNA / A": [
            {
              station: "QUARTIER",
              voters: 1286
            },
            {
              station: "NDOCKTOUNA",
              voters: 204
            },
          ],
          "FOYER MUNICIPAL / A": [
            {
              station: "III",
              voters: 306
            },
          ],
          "HANGAR NUYE / A": [
            {
              station: "NUYE",
              voters: 61
            },
          ],
          "HANGAR PUBLIC EBO.O / A": [
            {
              station: "EBO.O",
              voters: 123
            },
          ],
          "SAR SM / A": [
            {
              station: "NDOKMEN",
              voters: 97
            },
            {
              station: "SUD",
              voters: 97
            },
          ],
          "SOUPREFECTURE / A": [
            {
              station: "YINGUI",
              voters: 1833
            },
            {
              station: "VILLAGE",
              voters: 524
            },
          ],
          "YINGUI VILLAGE / A": [
            {
              station: "KAK",
              voters: 155
            },
          ],
        },
      },
    },
  },
};
