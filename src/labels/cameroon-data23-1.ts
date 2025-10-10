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
  "OUEST": {
    name: { en: "WEST", fr: "OUEST" },
    divisions: {
      "BAMBOUTOS": {
        "BABADJOU": {
          "CARREFOUR DJIBOUTI / A": [
            {
              station: "DJIBOUTI",
              voters: 413
            },
          ],
          "CEBEC BAMEDOU / A": [
            {
              station: "BAMEDOU",
              voters: 538
            },
          ],
          "CEBEC KOMBOU / A": [
            {
              station: "TOWCHI",
              voters: 368
            },
          ],
          "CENTRE MULTI PROMOT. DES JEUNES / A": [
            {
              station: "TONYE",
              voters: 2648
            },
          ],
          "CETIC BAMELO / A": [
            {
              station: "NTONG",
              voters: 339
            },
          ],
          "E.P. DE KING PLACE / A": [
            {
              station: "DJINPANG",
              voters: 669
            },
            {
              station: "KING",
              voters: 1338
            },
            {
              station: "PLACE",
              voters: 1338
            },
            {
              station: "CENTRE",
              voters: 1338
            },
            {
              station: "NGUEKONG",
              voters: 2007
            },
          ],
          "EC BAMEDJI / A": [
            {
              station: "BAMEDJI",
              voters: 377
            },
          ],
          "EC BAMENDJINGHA / A": [
            {
              station: "DJINGHA",
              voters: 715
            },
            {
              station: "MADJUI",
              voters: 715
            },
            {
              station: "MANTSET",
              voters: 1126
            },
            {
              station: "SOH",
              voters: 776
            },
            {
              station: "MOPI",
              voters: 715
            },
          ],
          "EC BAMEPA'AH / A": [
            {
              station: "BAMEPA'AH",
              voters: 607
            },
          ],
          "ECOLE DES PARENTS DE LOUH / A": [
            {
              station: "LOUH",
              voters: 162
            },
          ],
          "EP BACHUA / A": [
            {
              station: "BACHUA",
              voters: 766
            },
          ],
          "EP BALEPO / A": [
            {
              station: "BALEPO",
              voters: 984
            },
          ],
          "EP BAMEGNIA / A": [
            {
              station: "BAMEGNIA",
              voters: 619
            },
          ],
          "EP BAMEKOUE / A": [
            {
              station: "BAMETO",
              voters: 203
            },
          ],
          "EP BAMELO / A": [
            {
              station: "BAMELO",
              voters: 1100
            },
            {
              station: "CHEFFERIE",
              voters: 1100
            },
          ],
          "EP BAMETOGOUNG / A": [
            {
              station: "BAMETOGOUNG",
              voters: 463
            },
          ],
          "EP BAWA FEMDJI / A": [
            {
              station: "FEMDJI",
              voters: 116
            },
            {
              station: "MADZEU",
              voters: 116
            },
          ],
          "EP GAGONG / A": [
            {
              station: "GAGONG",
              voters: 423
            },
          ],
          "EP KOMBOU / A": [
            {
              station: "KOMBOU",
              voters: 942
            },
          ],
          "EP LEPA'AH / A": [
            {
              station: "MOGNI",
              voters: 394
            },
          ],
          "EP NTOUNGHA / A": [
            {
              station: "NTOUNGHA",
              voters: 263
            },
          ],
          "EP TAKANG / A": [
            {
              station: "TAKANG",
              voters: 97
            },
          ],
          "EP TOPELOU / A": [
            {
              station: "TOPELOU",
              voters: 249
            },
          ],
          "EP TOUMAKA / A": [
            {
              station: "BAWA",
              voters: 1065
            },
          ],
          "EP ZAVION / A": [
            {
              station: "CHIMEGO",
              voters: 227
            },
          ],
          "LYCEE BILINGUE DE BABADJOU / A": [
            {
              station: "BAMETOUO",
              voters: 442
            },
          ],
          "LYCEE DE ZAVION / A": [
            {
              station: "ZAVION",
              voters: 384
            },
          ],
          "MARCHE BAMEDOUSSO / A": [
            {
              station: "BAMEDOUSSO",
              voters: 690
            },
          ],
          "MARCHE FRONTALIER / A": [
            {
              station: "LEKOT",
              voters: 61
            },
          ],
          "MISSION CATHOLIQUE TOUMAKA / A": [
            {
              station: "KOKOU",
              voters: 453
            },
          ],
          "PROJET NGOMBALE / A": [
            {
              station: "NIWANG",
              voters: 335
            },
            {
              station: "(TOUMAKA)",
              voters: 335
            },
          ],
        },
        "BATCHAM": {
          "C.E.S. DE BANTSIET / A": [
            {
              station: "BANTSIET",
              voters: 298
            },
          ],
          "CENTRE DE LA JEUNESSE / A": [
            {
              station: "CENTRE",
              voters: 911
            },
            {
              station: "URBAIN",
              voters: 911
            },
          ],
          "CES DE BEBAKOUO / A": [
            {
              station: "BANGUEALA-BATCHAM",
              voters: 323
            },
          ],
          "COLLEGE POLYVALENT DE KONTI / A": [
            {
              station: "BALATCHUET",
              voters: 377
            },
          ],
          "COOPERATIVE DE NZINDONG / A": [
            {
              station: "BAMELIO",
              voters: 521
            },
            {
              station: "BORORO",
              voters: 521
            },
            {
              station: "MEKENG-MEKOUP",
              voters: 521
            },
            {
              station: "MESSANG",
              voters: 521
            },
            {
              station: "TSOPEUA",
              voters: 521
            },
          ],
          "E P DE BADENGANG-BANGANG / A": [
            {
              station: "BADENGANG-BANGANG",
              voters: 361
            },
          ],
          "E P DE BAKUI / A": [
            {
              station: "BANKUI",
              voters: 193
            },
          ],
          "E P DE BALEGHANG / A": [
            {
              station: "BALEGHANG",
              voters: 587
            },
          ],
          "E P DE BALENA / A": [
            {
              station: "BALENA",
              voters: 932
            },
          ],
          "E P DE BALEPI / A": [
            {
              station: "BALEPI",
              voters: 218
            },
          ],
          "E P DE BAMBI / A": [
            {
              station: "BAMBI",
              voters: 645
            },
          ],
          "E P DE BAMBOUE I / A": [
            {
              station: "BAMBOUE",
              voters: 1132
            },
          ],
          "E P DE BAMEBORO / A": [
            {
              station: "BAMEFOUACK",
              voters: 301
            },
          ],
          "E P DE BAMOUGONG CHEFFERIE / A": [
            {
              station: "BAMOUGONG",
              voters: 422
            },
          ],
          "E P DE BANGANG CHEFFERIE / A": [
            {
              station: "BANGANG",
              voters: 416
            },
          ],
          "E P DE BANGOUANG / A": [
            {
              station: "BANGOUANG",
              voters: 460
            },
          ],
          "E P DE BAPEPA / A": [
            {
              station: "BAPEPA",
              voters: 745
            },
            {
              station: "BATOULA",
              voters: 745
            },
          ],
          "E P DE BATCHAM CHEFFERIE / A": [
            {
              station: "BATCHAM",
              voters: 1072
            },
          ],
          "E P DE BATOUMBI / A": [
            {
              station: "BATOUMBI",
              voters: 326
            },
          ],
          "E P DE BAZIMBAP / A": [
            {
              station: "BAZIMBAP",
              voters: 445
            },
          ],
          "E P DE MEDOUMGONG / A": [
            {
              station: "MEDOUMGONG",
              voters: 556
            },
          ],
          "E P DE NZINDONG / A": [
            {
              station: "BATSA'A",
              voters: 393
            },
            {
              station: "NZINDONG",
              voters: 393
            },
          ],
          "E P DE TCHUELEKOUET / A": [
            {
              station: "BIETE",
              voters: 690
            },
            {
              station: "TCHUELEKOUET",
              voters: 690
            },
          ],
          "ECOLE CATH DE BAMEFO / A": [
            {
              station: "BAMEFO",
              voters: 280
            },
          ],
          "ECOLE CATH DE BAMEGHUIE / A": [
            {
              station: "BAMEGHUIE",
              voters: 333
            },
            {
              station: "BAMELANG-BANGANG",
              voters: 333
            },
          ],
          "ECOLE CATH DE BANGOUANG / A": [
            {
              station: "BATOUGOUANG",
              voters: 859
            },
            {
              station: "BAZINMEGONG",
              voters: 634
            },
          ],
          "ECOLE CATH DE BANGUEALA-BANGANG / A": [
            {
              station: "BANGUEALA-BANGANG",
              voters: 286
            },
          ],
          "ECOLE CATH DE BANGUIE / A": [
            {
              station: "BANGUIE",
              voters: 368
            },
          ],
          "ECOLE CATH DE BATCHUETIO / A": [
            {
              station: "BANDZA",
              voters: 1226
            },
            {
              station: "BATCHUETIO",
              voters: 1226
            },
          ],
          "ECOLE CATH DE BATOUMOC / A": [
            {
              station: "BATOUMOC",
              voters: 239
            },
          ],
          "ECOLE CATH DE BATSEPOU / A": [
            {
              station: "BATSEPOU",
              voters: 315
            },
            {
              station: "MADA",
              voters: 315
            },
          ],
          "ECOLE CATH DE METIO / A": [
            {
              station: "METIO",
              voters: 1330
            },
          ],
          "ECOLE CATH ST-JACQUES DE BANGANG / A": [
            {
              station: "KOUNTIA",
              voters: 319
            },
            {
              station: "SIEPKOU",
              voters: 319
            },
          ],
          "ECOLE CEBEC DE BALAKAM / A": [
            {
              station: "BALAKAM",
              voters: 447
            },
            {
              station: "BAMEKA",
              voters: 1673
            },
          ],
          "ECOLE CEBEC DE BALETSI / A": [
            {
              station: "BALETSI",
              voters: 374
            },
            {
              station: "BATCHUETI",
              voters: 374
            },
          ],
          "ECOLE CEBEC DE BAMBOUE-BANGANG / A": [
            {
              station: "BAMBOUE-BANGANG",
              voters: 543
            },
            {
              station: "BASSESSA",
              voters: 543
            },
          ],
          "ECOLE CEBEC DE BAMEMBA / A": [
            {
              station: "BALOUO",
              voters: 478
            },
            {
              station: "BAMEMBA",
              voters: 478
            },
            {
              station: "NKOUOP",
              voters: 478
            },
            {
              station: "TOMOGO",
              voters: 774
            },
          ],
          "ECOLE CEBEC DE BAMENDOU BANGANG / A": [
            {
              station: "BAMENDOU-BANGANG",
              voters: 183
            },
          ],
          "ECOLE CEBEC DE BAMESSANG / A": [
            {
              station: "BADENGANG-BATCHAM",
              voters: 473
            },
            {
              station: "BAMESSANG",
              voters: 473
            },
            {
              station: "BATAKI",
              voters: 1056
            },
            {
              station: "III",
              voters: 473
            },
          ],
          "ECOLE CEBEC DE KONKEUA / A": [
            {
              station: "BATOUMEGOUO",
              voters: 225
            },
          ],
          "ECOLE CEBEC DE KONTI / A": [
            {
              station: "FOUOMEKOUP",
              voters: 365
            },
            {
              station: "KONTI",
              voters: 365
            },
          ],
          "ECOLE CEBEC DE MENA / A": [
            {
              station: "BALEFAT",
              voters: 467
            },
            {
              station: "MENA",
              voters: 467
            },
          ],
          "ECOLE CEBEC DE NZONG / A": [
            {
              station: "NZONG",
              voters: 451
            },
          ],
          "FOYER BADATCHIO / A": [
            {
              station: "BADATCHIO",
              voters: 252
            },
          ],
          "FOYER BAKAPFONG / A": [
            {
              station: "BACHIO",
              voters: 563
            },
            {
              station: "BAKAPFONG",
              voters: 563
            },
          ],
          "FOYER DE BAGHANG I / A": [
            {
              station: "BABOUGHANG",
              voters: 372
            },
            {
              station: "BAGHANG",
              voters: 527
            },
            {
              station: "BALEWA",
              voters: 372
            },
          ],
          "FOYER DE BALADJEUTSA / A": [
            {
              station: "BALADJEUTSA",
              voters: 339
            },
          ],
          "FOYER DE BALAFOTIO / A": [
            {
              station: "BALAFOTIO",
              voters: 450
            },
          ],
          "FOYER DE BALETIA / A": [
            {
              station: "BALETIA",
              voters: 414
            },
            {
              station: "BAMELA-BANGANG",
              voters: 414
            },
            {
              station: "FOMELIE",
              voters: 414
            },
          ],
          "FOYER DE BALIE / A": [
            {
              station: "BALIE",
              voters: 297
            },
            {
              station: "BAMESSA",
              voters: 987
            },
          ],
          "FOYER DE BAMEBORO / A": [
            {
              station: "BAMEBORO",
              voters: 650
            },
            {
              station: "KING",
              voters: 2235
            },
            {
              station: "PLACE",
              voters: 2235
            },
          ],
          "FOYER DE BAMEGHANG / A": [
            {
              station: "BAMEGHANG",
              voters: 378
            },
          ],
          "FOYER DE BAMEGUEA / A": [
            {
              station: "BAMEGUEA",
              voters: 384
            },
            {
              station: "BAZUNTIM",
              voters: 384
            },
          ],
          "FOYER DE BAMEMBOU / A": [
            {
              station: "BALEFO",
              voters: 337
            },
            {
              station: "BAMEMBOU",
              voters: 337
            },
          ],
          "FOYER DE BANGOUO / A": [
            {
              station: "BANGOUO",
              voters: 338
            },
          ],
          "FOYER DE BANTSA / A": [
            {
              station: "BANTSA",
              voters: 317
            },
            {
              station: "BATSINLA",
              voters: 317
            },
          ],
          "FOYER DE TOMOGO I / A": [
            {
              station: "BASSOH",
              voters: 296
            },
            {
              station: "NJUINLA",
              voters: 296
            },
          ],
          "LYCEE DE BAMETIM-BANGANG / A": [
            {
              station: "BAMETIM-BANGANG",
              voters: 455
            },
          ],
          "LYCEE DE BAMOUGONG / A": [
            {
              station: "BAKOUM",
              voters: 648
            },
          ],
          "LYCEE DE BANGANG / A": [
            {
              station: "BASSOUKA",
              voters: 219
            },
          ],
          "LYCEE TECHNIQUE DE BATCHAM / A": [
            {
              station: "NTIO",
              voters: 377
            },
          ],
        },
        "GALIM": {
          "CENTRE DE SANTE INTEGRE BAMENDJING /  A": [
            {
              station: "MBAMI",
              voters: 203
            },
          ],
          "CENTRE DE SANTE INTEGRE BAMENYAM / A": [
            {
              station: "BAFREUT",
              voters: 492
            },
            {
              station: "BASSIETAH",
              voters: 492
            },
            {
              station: "MBAEKE",
              voters: 492
            },
            {
              station: "MBATSAH",
              voters: 492
            },
          ],
          "CENTRE DE SANTE INTEGRE DE BATI / A": [
            {
              station: "LEUPA",
              voters: 476
            },
            {
              station: "TETEM",
              voters: 476
            },
          ],
          "E.P. DE MBEPEHE / A": [
            {
              station: "MBEPEHE",
              voters: 666
            },
          ],
          "E.P. NGOYAC / A": [
            {
              station: "MBAZAH",
              voters: 251
            },
            {
              station: "NGOYAC",
              voters: 168
            },
          ],
          "ECOLE MATERNELLE DE GALIM VILLE / A": [
            {
              station: "CENTRE",
              voters: 2004
            },
            {
              station: "COMMERCIAL",
              voters: 347
            },
            {
              station: "URBAIN",
              voters: 1657
            },
            {
              station: "GALIM",
              voters: 1657
            },
          ],
          "ECOLE SAINT ANDRE DE KIENEGHANG / A": [
            {
              station: "LOTISSEMENT",
              voters: 773
            },
            {
              station: "PILOTE",
              voters: 108
            },
          ],
          "EGLISE APOSTOLIQUE DE MBEGHANG / A": [
            {
              station: "MBEGHANG",
              voters: 301
            },
            {
              station: "TSENEKANG",
              voters: 301
            },
          ],
          "EGLISE APOSTOLIQUE MBEVE 1 / A": [
            {
              station: "MBEVE",
              voters: 403
            },
          ],
          "EGLISE EVANGELIQUE DE MEVOBO / A": [
            {
              station: "NONO",
              voters: 406
            },
          ],
          "EP ASSUJETIS / A": [
            {
              station: "ASSUJETIS",
              voters: 84
            },
          ],
          "EP BAGAM GROUPE 3 / A": [
            {
              station: "KING",
              voters: 2217
            },
            {
              station: "PLACE",
              voters: 2217
            },
            {
              station: "BAGAM",
              voters: 1516
            },
            {
              station: "PHEGHONG",
              voters: 763
            },
            {
              station: "TANGUIE",
              voters: 763
            },
            {
              station: "MBATSOUO",
              voters: 763
            },
          ],
          "EP BAMENDJING / A": [
            {
              station: "KOGOUP",
              voters: 430
            },
            {
              station: "MBEMOUO",
              voters: 430
            },
            {
              station: "MBEVOU",
              voters: 430
            },
          ],
          "EP BAMENKOUPERE / A": [
            {
              station: "BAMENKOUPERE",
              voters: 336
            },
            {
              station: "MBAPEHE",
              voters: 336
            },
            {
              station: "NGUIPOP",
              voters: 336
            },
            {
              station: "TANKAH",
              voters: 336
            },
          ],
          "EP BAMENYAM / A": [
            {
              station: "BATIOGOU",
              voters: 195
            },
            {
              station: "BEGUIEKO",
              voters: 195
            },
          ],
          "EP BATI / A": [
            {
              station: "TSOULAT",
              voters: 179
            },
          ],
          "EP BAZINGANG / A": [
            {
              station: "BAZINGANG",
              voters: 204
            },
          ],
          "EP BORORO BAMENDJING / A": [
            {
              station: "BAMENDJING",
              voters: 107
            },
          ],
          "EP BORORO BAMENYAM / A": [
            {
              station: "BAMENYAM",
              voters: 491
            },
          ],
          "EP FOULANI / A": [
            {
              station: "FOULANI",
              voters: 288
            },
          ],
          "EP FOUOYA / A": [
            {
              station: "FOUOYA",
              voters: 254
            },
            {
              station: "MBESSABA",
              voters: 254
            },
          ],
          "EP GOH MAFOH / A": [
            {
              station: "GOH",
              voters: 71
            },
            {
              station: "MAFOH",
              voters: 71
            },
          ],
          "EP GOSSONG / A": [
            {
              station: "GOSSONG",
              voters: 137
            },
          ],
          "EP KELOU / A": [
            {
              station: "KELOU",
              voters: 214
            },
            {
              station: "MAFOTOH",
              voters: 214
            },
            {
              station: "VILLAGE",
              voters: 322
            },
            {
              station: "PIONNIER",
              voters: 214
            },
          ],
          "EP KIEMVE / A": [
            {
              station: "KIEMVE",
              voters: 151
            },
          ],
          "EP LAFI / A": [
            {
              station: "NZEUMBA",
              voters: 161
            },
          ],
          "EP MBAFAH / A": [
            {
              station: "MBAFAH",
              voters: 95
            },
            {
              station: "NGOSSOH",
              voters: 95
            },
          ],
          "EP MBAGHONG / A": [
            {
              station: "MBAGHONG",
              voters: 328
            },
            {
              station: "MBANUC",
              voters: 328
            },
          ],
          "EP MBAKOP / A": [
            {
              station: "GWANAP",
              voters: 330
            },
            {
              station: "MBAKOP",
              voters: 330
            },
          ],
          "EP MBEKONG MAGAP / A": [
            {
              station: "MBEFOU",
              voters: 429
            },
            {
              station: "MBEKONG",
              voters: 429
            },
            {
              station: "MAGAP",
              voters: 429
            },
            {
              station: "NGOSSONG",
              voters: 429
            },
          ],
          "EP MBENGHUIE / A": [
            {
              station: "JUNEFONG",
              voters: 479
            },
            {
              station: "MBEDONG",
              voters: 479
            },
            {
              station: "MBENGHUIE",
              voters: 479
            },
          ],
          "EP MBESSA / A": [
            {
              station: "MBASSI",
              voters: 499
            },
            {
              station: "MBEFO",
              voters: 782
            },
            {
              station: "MBEDEKAP",
              voters: 499
            },
            {
              station: "MBESSA",
              voters: 781
            },
            {
              station: "MONBAP",
              voters: 499
            },
          ],
          "EP MBETSOUNG / A": [
            {
              station: "MBETSOUNG",
              voters: 235
            },
            {
              station: "NGOTTOH",
              voters: 235
            },
          ],
          "EP MBEVE 2 / A": [
            {
              station: "NGOGHONG",
              voters: 282
            },
          ],
          "EP MBEZATE / A": [
            {
              station: "MBEZATE",
              voters: 270
            },
          ],
          "EP MENFOUNG / A": [
            {
              station: "BORORO",
              voters: 873
            },
            {
              station: "MASSANG",
              voters: 454
            },
          ],
          "EP MENGOH / A": [
            {
              station: "MENGOH",
              voters: 948
            },
            {
              station: "MEVOBO",
              voters: 880
            },
            {
              station: "MONTESSIE",
              voters: 474
            },
          ],
          "EP MEVOBO / A": [
            {
              station: "MEBONG",
              voters: 306
            },
            {
              station: "SESSE",
              voters: 306
            },
            {
              station: "TASSE",
              voters: 461
            },
            {
              station: "YEYEP",
              voters: 461
            },
            {
              station: "SUD",
              voters: 306
            },
          ],
          "EP MEYEDUNG / A": [
            {
              station: "MEYEDUNG",
              voters: 283
            },
          ],
          "EP MIFI / A": [
            {
              station: "KOHTUNG",
              voters: 389
            },
            {
              station: "MIFI",
              voters: 389
            },
          ],
          "EP NGOGHOUP / A": [
            {
              station: "KAMADE",
              voters: 355
            },
            {
              station: "NGOGHOUP",
              voters: 355
            },
          ],
          "EP NGOUPEPONG / A": [
            {
              station: "NDEKOUODE",
              voters: 110
            },
            {
              station: "NGOUPEPONG",
              voters: 110
            },
          ],
          "EP NGOYO / A": [
            {
              station: "NGOYO",
              voters: 327
            },
          ],
          "EP NZENELEUP / A": [
            {
              station: "NZENELEUP",
              voters: 488
            },
          ],
          "EP TATA / A": [
            {
              station: "TATA",
              voters: 796
            },
          ],
          "EP TSINEGHA / A": [
            {
              station: "TSINEGHA",
              voters: 156
            },
          ],
          "EP TSISSAP / A": [
            {
              station: "TSISSAP",
              voters: 284
            },
          ],
          "EP TSUETHAP / A": [
            {
              station: "TSUETHAP",
              voters: 99
            },
          ],
          "EP YEYEP / A": [
            {
              station: "QUARTIER",
              voters: 155
            },
            {
              station: "NOUVEAUX",
              voters: 155
            },
            {
              station: "NORD",
              voters: 155
            },
            {
              station: "TSIDEHE",
              voters: 155
            },
          ],
          "FOYER BAMENYAM / A": [
            {
              station: "MBEALA",
              voters: 335
            },
            {
              station: "MBEAMEKA",
              voters: 335
            },
          ],
          "FOYER BATI / A": [
            {
              station: "BATI",
              voters: 366
            },
          ],
          "LYCEE BILINGUE DE GALIM / A": [
            {
              station: "HAOUSSA",
              voters: 599
            },
          ],
          "LYCEE BILINGUE KIENEGHANG / A": [
            {
              station: "KIENEGHANG",
              voters: 1038
            },
          ],
          "LYCEE DE BAGAM / A": [
            {
              station: "MBAMONG",
              voters: 525
            },
            {
              station: "TSOGUET",
              voters: 525
            },
            {
              station: "MBETSING",
              voters: 525
            },
            {
              station: "MBETSOP",
              voters: 525
            },
          ],
          "LYCEE DE BAMENYAM / A": [
            {
              station: "MEZAH",
              voters: 80
            },
          ],
          "LYCEE TECHNIQUE DE GALIM / A": [
            {
              station: "MBAGHANG",
              voters: 316
            },
          ],
        },
        "MBOUDA": {
          "CASE COMMUNAUTAIRE BAFEMTOH / A": [
            {
              station: "BAFEMTOH",
              voters: 199
            },
          ],
          "CEBEC BASSI / A": [
            {
              station: "BASSI",
              voters: 126
            },
          ],
          "CENTRE DE JEUNESSE / A": [
            {
              station: "TAP",
              voters: 2246
            },
          ],
          "CENTRE SANTE INTEGRE BATANG / A": [
            {
              station: "BATANG",
              voters: 488
            },
            {
              station: "CSI",
              voters: 388
            },
          ],
          "CENTRE SANTE INTEGRE LATET / A": [
            {
              station: "BATOUSSI",
              voters: 504
            },
            {
              station: "BOUMETIO",
              voters: 504
            },
            {
              station: "(BAMENDJINDA)",
              voters: 1435
            },
          ],
          "DELEGATION FORETS / A": [
            {
              station: "TSUEWGE",
              voters: 929
            },
          ],
          "ECOLE CATHOLIQUE BABETE / A": [
            {
              station: "LATET",
              voters: 873
            },
            {
              station: "NGAMOKIE",
              voters: 300
            },
          ],
          "ECOLE CEBEC BAKIE / A": [
            {
              station: "BAKIE",
              voters: 206
            },
          ],
          "ECOLE CEBEC BALOUM / A": [
            {
              station: "BALOUM",
              voters: 221
            },
          ],
          "ECOLE CEBEC BAMENDJINDA / A": [
            {
              station: "DJINEGHO",
              voters: 326
            },
            {
              station: "DJINLENG",
              voters: 326
            },
            {
              station: "DOUNTSEU",
              voters: 326
            },
          ],
          "ECOLE CEBEC BANTANG / A": [
            {
              station: "CEBEC",
              voters: 100
            },
          ],
          "ECOLE CEBEC LAFI / A": [
            {
              station: "HAOUSSA",
              voters: 3602
            },
            {
              station: "LAFI",
              voters: 4533
            },
            {
              station: "LEPI",
              voters: 3602
            },
          ],
          "ECOLE CEBEC RAPIDE / A": [
            {
              station: "RAPIDE",
              voters: 2208
            },
          ],
          "ECOLE MAT. DU PLATEAU ADMINISTRATIF / A": [
            {
              station: "PLATEAU",
              voters: 1729
            },
            {
              station: "ADMINISTRATIF",
              voters: 1729
            },
            {
              station: "VILLE",
              voters: 4801
            },
          ],
          "ECOLE MATERNELLE SNEC. / A": [
            {
              station: "TSUEGWE",
              voters: 2154
            },
          ],
          "ECOLE PUB. BALATCHI CENTRE / A": [
            {
              station: "BAMEGOUN",
              voters: 742
            },
            {
              station: "BAMEKEME",
              voters: 742
            },
            {
              station: "BAZINTCHI",
              voters: 742
            },
          ],
          "ECOLE PUB. BALATCHI MEKIE / A": [
            {
              station: "BATSELA",
              voters: 1792
            },
            {
              station: "BAZINLA",
              voters: 554
            },
            {
              station: "MEKIE",
              voters: 554
            },
          ],
          "ECOLE PUB. BAMENDJINDA MARCHE / A": [
            {
              station: "TOUTOUT",
              voters: 332
            },
          ],
          "ECOLE PUB. BAMENDJO GROUPE 1 / A": [
            {
              station: "BAGONG",
              voters: 380
            },
            {
              station: "BAMOGO",
              voters: 780
            },
            {
              station: "BATOUSSOP",
              voters: 380
            },
          ],
          "ECOLE PUB. BATOULA (BAMESSINGUE) / A": [
            {
              station: "BATOULA",
              voters: 1160
            },
            {
              station: "BAMESSINGUE",
              voters: 8797
            },
          ],
          "ECOLE PUB. DE L'HOTEL DE VILLE / A": [
            {
              station: "FOUOLA",
              voters: 3508
            },
          ],
          "ECOLE PUB. DE LATET BAMESSO / A": [
            {
              station: "BODJEUZEULE",
              voters: 573
            },
          ],
          "ECOLE PUB. KING-PLACE BAMENKOMBO / A": [
            {
              station: "BAMENKOMBO",
              voters: 479
            },
            {
              station: "(KING-PLACE)",
              voters: 479
            },
            {
              station: "MOGATSO",
              voters: 479
            },
            {
              station: "SIGLE",
              voters: 479
            },
            {
              station: "TSEUTSA",
              voters: 1410
            },
          ],
          "ECOLE PUB. LAFI (BAMENDJINDA) / A": [
            {
              station: "MOTSEUTSA",
              voters: 931
            },
          ],
          "ECOLE PUB. LATET BAMENDJINDA / A": [
            {
              station: "BAKAKOU",
              voters: 444
            },
            {
              station: "BAKOGHA",
              voters: 444
            },
          ],
          "ECOLE PUB. TOUMAKA GROUPE 1 / A": [
            {
              station: "BAMAKAK",
              voters: 578
            },
            {
              station: "TOUMAKA",
              voters: 578
            },
          ],
          "ECOLE PUBLIQUE BABETE / A": [
            {
              station: "CARREFOUR",
              voters: 403
            },
            {
              station: "BABETE",
              voters: 1450
            },
            {
              station: "III",
              voters: 1556
            },
          ],
          "ECOLE PUBLIQUE BAFACDJUI / A": [
            {
              station: "BAFACDJUI",
              voters: 871
            },
            {
              station: "BAMEJIN",
              voters: 871
            },
            {
              station: "BAMETAP",
              voters: 871
            },
            {
              station: "BAMETE",
              voters: 871
            },
            {
              station: "BATIAMEKIE",
              voters: 1613
            },
          ],
          "ECOLE PUBLIQUE BAFEMGHA / A": [
            {
              station: "BAFEMGHA",
              voters: 869
            },
          ],
          "ECOLE PUBLIQUE BAKOTIO / A": [
            {
              station: "BAKOTIO",
              voters: 241
            },
            {
              station: "KOUPTESE",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE BALALOUM / A": [
            {
              station: "BALALOUM",
              voters: 246
            },
          ],
          "ECOLE PUBLIQUE BALENG / A": [
            {
              station: "BALENG",
              voters: 389
            },
          ],
          "ECOLE PUBLIQUE BAMAKA / A": [
            {
              station: "BAGADING",
              voters: 1017
            },
            {
              station: "BAMAKA",
              voters: 1468
            },
            {
              station: "BAMEBIN",
              voters: 890
            },
            {
              station: "BATOMENI",
              voters: 1131
            },
            {
              station: "BAZINMAGONG",
              voters: 890
            },
            {
              station: "BORORO",
              voters: 1144
            },
            {
              station: "MESSUEZAP",
              voters: 1144
            },
          ],
          "ECOLE PUBLIQUE BAMEFAP / A": [
            {
              station: "BAMEFAP",
              voters: 523
            },
            {
              station: "TEDJING",
              voters: 523
            },
            {
              station: "ZEMTEDJING",
              voters: 523
            },
          ],
          "ECOLE PUBLIQUE BAMENDOU / A": [
            {
              station: "BAMENDOU",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE BAMETA / A": [
            {
              station: "BAMETA",
              voters: 116
            },
          ],
          "ECOLE PUBLIQUE BAMOUSSANG / A": [
            {
              station: "BAKONTI",
              voters: 269
            },
            {
              station: "BAMOUSSANG",
              voters: 269
            },
            {
              station: "BATCHOPI",
              voters: 269
            },
          ],
          "ECOLE PUBLIQUE BANTANG / A": [
            {
              station: "BANTANG",
              voters: 2311
            },
          ],
          "ECOLE PUBLIQUE BASSOKENG / A": [
            {
              station: "BAGONBONG",
              voters: 335
            },
            {
              station: "BASSOKENG",
              voters: 335
            },
            {
              station: "NENEGOU",
              voters: 1141
            },
          ],
          "ECOLE PUBLIQUE BATCHIPA / A": [
            {
              station: "BATCHEUPA",
              voters: 407
            },
            {
              station: "BATOH",
              voters: 407
            },
          ],
          "ECOLE PUBLIQUE BATCHUSSO / A": [
            {
              station: "BATCHUSSO",
              voters: 323
            },
          ],
          "ECOLE PUBLIQUE BATSADA / A": [
            {
              station: "BATSADA",
              voters: 459
            },
            {
              station: "NANSAP",
              voters: 459
            },
            {
              station: "NGOUAYA",
              voters: 459
            },
            {
              station: "ZEMMEGUEME",
              voters: 459
            },
          ],
          "ECOLE PUBLIQUE BAWA / A": [
            {
              station: "BAMEKOU",
              voters: 392
            },
            {
              station: "BAWA",
              voters: 392
            },
          ],
          "ECOLE PUBLIQUE FEMTOH / A": [
            {
              station: "FEMTOH",
              voters: 648
            },
            {
              station: "MATSA",
              voters: 648
            },
            {
              station: "NZENEPA",
              voters: 648
            },
          ],
          "ECOLE PUBLIQUE GROUPE 1 / A": [
            {
              station: "TSOUMONTCHIO",
              voters: 1179
            },
          ],
          "ECOLE PUBLIQUE KONLETIO / A": [
            {
              station: "BAMELO",
              voters: 789
            },
            {
              station: "KONLETIO",
              voters: 789
            },
          ],
          "ECOLE PUBLIQUE MBATAP / A": [
            {
              station: "BAMETIEN",
              voters: 643
            },
            {
              station: "BATCHIEPA",
              voters: 643
            },
            {
              station: "MATHE",
              voters: 643
            },
            {
              station: "MBATAP",
              voters: 643
            },
          ],
          "ECOLE PUBLIQUE MONTCHIO I / A": [
            {
              station: "MONTCHIO",
              voters: 3617
            },
          ],
          "ECOLE PUBLIQUE NYLON GROUPE 3 / A": [
            {
              station: "NZINTIA",
              voters: 2649
            },
          ],
          "ECOLE PUBLIQUE PONEKI / A": [
            {
              station: "PONEKI",
              voters: 615
            },
          ],
          "ECOLE PUBLIQUE TOUSSO / A": [
            {
              station: "BOUMETIO-BAMENKOMBO",
              voters: 854
            },
            {
              station: "MOTSA",
              voters: 854
            },
            {
              station: "TOUSSO",
              voters: 854
            },
            {
              station: "TSEULE",
              voters: 854
            },
          ],
          "EGLISE CATHOLIQUE BATSINGLA / A": [
            {
              station: "BALEGHO",
              voters: 292
            },
            {
              station: "BATSINGLA",
              voters: 292
            },
          ],
          "EP KING PLACE BAMESSO / A": [
            {
              station: "BAMENKA",
              voters: 1103
            },
            {
              station: "BATAGOUA",
              voters: 1103
            },
            {
              station: "BATCHIKOU",
              voters: 1103
            },
            {
              station: "BAMESSO",
              voters: 1676
            },
          ],
          "FOYER BAMENDJINDA / A": [
            {
              station: "TCHIAPA",
              voters: 452
            },
            {
              station: "TSEULA",
              voters: 784
            },
          ],
          "FOYER BAMESSO / A": [
            {
              station: "BADJINFE",
              voters: 870
            },
            {
              station: "BALAFI",
              voters: 870
            },
            {
              station: "BATCHIAPA",
              voters: 870
            },
            {
              station: "MBOTEU",
              voters: 870
            },
          ],
          "FOYER CULTUREL BABETE / A": [
            {
              station: "MEZZIE",
              voters: 364
            },
          ],
          "FOYER CULTUREL BAFOUNDA / A": [
            {
              station: "BADJUVAN",
              voters: 420
            },
            {
              station: "BATOUDJA",
              voters: 420
            },
            {
              station: "KING-PLACE",
              voters: 8712
            },
            {
              station: "BAFOUNDA",
              voters: 420
            },
            {
              station: "TOUGONG",
              voters: 420
            },
          ],
          "LYCEE BALATCHI / A": [
            {
              station: "BALATCHI",
              voters: 699
            },
            {
              station: "TIALONG",
              voters: 316
            },
            {
              station: "TSEDING",
              voters: 699
            },
          ],
          "LYCEE BILINGUE BANOCK / A": [
            {
              station: "BANOCK",
              voters: 1751
            },
          ],
          "MARCHE BADJUTSIT / A": [
            {
              station: "BADJUDING",
              voters: 222
            },
            {
              station: "BADJUTSIT",
              voters: 444
            },
            {
              station: "NORD",
              voters: 222
            },
            {
              station: "SUD",
              voters: 222
            },
          ],
          "MISSION CATHOLIQUE BAMENDJO / A": [
            {
              station: "BADJENSI",
              voters: 320
            },
            {
              station: "BAKATOU",
              voters: 320
            },
            {
              station: "BAKAZOU",
              voters: 320
            },
            {
              station: "MISSION",
              voters: 620
            },
            {
              station: "CATHOLIQUE",
              voters: 620
            },
          ],
          "POSTE AGRICOLE BAKASSANG / A": [
            {
              station: "BAKASSANG",
              voters: 155
            },
            {
              station: "BATOGO",
              voters: 155
            },
          ],
          "POSTE AGRICOLE BATSELLA / A": [
            {
              station: "BATSELLA",
              voters: 548
            },
            {
              station: "MOLLA",
              voters: 548
            },
            {
              station: "NGOPA",
              voters: 548
            },
            {
              station: "TOUMODJI",
              voters: 548
            },
          ],
        },
      },
      "HAUT-NKAM": {
        "BAFANG": {
          "CERCLE DES ELITES DU HAUT-NKAM / A": [
            {
              station: "TOMCHI",
              voters: 1964
            },
          ],
          "DELEGATION DE L'AGRICULTURE / A": [
            {
              station: "TCHOUNO",
              voters: 768
            },
          ],
          "E.M DAPPLICATION 3 / A": [
            {
              station: "AXE-LOURD",
              voters: 190
            },
          ],
          "E.M DU CENTRE / A": [
            {
              station: "TETHU",
              voters: 219
            },
          ],
          "ECOLE CATHOLIQUE DE NGUENACK / A": [
            {
              station: "NGUENACK",
              voters: 1504
            },
          ],
          "ECOLE PUB. BABOUTCHEU-NGALEU / A": [
            {
              station: "BABOUTCHEU-NGALEU",
              voters: 464
            },
          ],
          "ECOLE PUBLIQUE BABONE CENTRE / A": [
            {
              station: "BABONE",
              voters: 743
            },
          ],
          "ECOLE PUBLIQUE BABONE SELA / A": [
            {
              station: "BAKOLOU",
              voters: 115
            },
            {
              station: "SELA-KOM",
              voters: 115
            },
          ],
          "ECOLE PUBLIQUE BATCHEU / A": [
            {
              station: "BABOUTCHA-NINTCHEU",
              voters: 463
            },
            {
              station: "BATCHEU",
              voters: 463
            },
            {
              station: "KETCHEGUEU",
              voters: 463
            },
          ],
          "ECOLE PUBLIQUE DE BAVI / A": [
            {
              station: "BAVI",
              voters: 604
            },
          ],
          "ECOLE PUBLIQUE DU CENTRE / A": [
            {
              station: "BANKONDJI",
              voters: 519
            },
          ],
          "ECOLE PUBLIQUE FAMKEU / A": [
            {
              station: "FAMKEU",
              voters: 222
            },
          ],
          "ECOLE PUBLIQUE GROUPE 1 / A": [
            {
              station: "MOUANKEU",
              voters: 2832
            },
          ],
          "ECOLE PUBLIQUE GROUPE 4 LOSSACK / A": [
            {
              station: "LOSSACK",
              voters: 1668
            },
          ],
          "ECOLE PUBLIQUE TETAM / A": [
            {
              station: "POUANGO",
              voters: 707
            },
            {
              station: "TETAM-CARRY-WATTER",
              voters: 707
            },
          ],
          "FOYER BANKONDJI / A": [
            {
              station: "800",
              voters: 146
            },
            {
              station: "METRES",
              voters: 146
            },
          ],
          "FOYER CULTUREL BASSAP / A": [
            {
              station: "BASSAP",
              voters: 264
            },
          ],
          "FOYER CULTUREL CHEU / A": [
            {
              station: "CHEU",
              voters: 138
            },
          ],
          "FOYER CULTUREL MANITU NDOKOVI / A": [
            {
              station: "BALACK",
              voters: 266
            },
            {
              station: "NDOKOVI",
              voters: 1431
            },
          ],
          "LYCEE BABOUTCHA NINTCHEU / A": [
            {
              station: "BALEN",
              voters: 318
            },
            {
              station: "BAPOUNDEU",
              voters: 318
            },
          ],
          "MEDECINE PREVENTIVE / A": [
            {
              station: "BAKOTCHEU",
              voters: 481
            },
          ],
          "MISSION PROTESTANTE BAFANG 2 / A": [
            {
              station: "LIEUTCHI-MOUANKEU",
              voters: 1104
            },
          ],
        },
        "BAKOU": {
          "E.P BANKAMBE / A": [
            {
              station: "BANKAMBE",
              voters: 163
            },
          ],
          "E.P FOPOUANGA / A": [
            {
              station: "FOPOUANGA",
              voters: 200
            },
            {
              station: "MAKOUCK.",
              voters: 200
            },
          ],
          "E.P KOUNOU / A": [
            {
              station: "BALACK-LOUM",
              voters: 232
            },
            {
              station: "KOUNOU",
              voters: 161
            },
          ],
          "E.P NGANG / A": [
            {
              station: "NGANG",
              voters: 125
            },
          ],
          "ECOLE CATHOLIQUE DE BAKOU / A": [
            {
              station: "BAKOU",
              voters: 1001
            },
            {
              station: "FONDJANTI",
              voters: 680
            },
          ],
          "ECOLE PUBLIQUE DE BAKOU / A": [
            {
              station: "KOBA",
              voters: 845
            },
          ],
          "ECOLE PUBLIQUE DE KOMAKO / A": [
            {
              station: "BALOUCK",
              voters: 271
            },
            {
              station: "KOMAKO",
              voters: 389
            },
          ],
          "EP DE BABOUTCHA FONGAM / A": [
            {
              station: "BABOUTCHA",
              voters: 303
            },
            {
              station: "FONGAM",
              voters: 303
            },
          ],
        },
        "BANA": {
          "BUREAU CAMPOST BANA / A": [
            {
              station: "NYLON",
              voters: 397
            },
          ],
          "CASE COMMUNAUTAIRE BADOUMLA / A": [
            {
              station: "BANDOUMLA",
              voters: 285
            },
          ],
          "CASE COMMUNAUTAIRE BAKAM / A": [
            {
              station: "BAKAM",
              voters: 290
            },
          ],
          "CASE COMMUNAUTAIRE BAPOUH / A": [
            {
              station: "BAPOUH",
              voters: 284
            },
          ],
          "CENTRE SOCIAL BANA / A": [
            {
              station: "LIMEU",
              voters: 330
            },
          ],
          "ECOLE CEBEC KONTE / A": [
            {
              station: "KONTE",
              voters: 431
            },
          ],
          "ECOLE MATERNELLE BASSO / A": [
            {
              station: "BASSO",
              voters: 432
            },
          ],
          "ECOLE PUBLIQUE BAKASSA / A": [
            {
              station: "BAKASSA",
              voters: 1130
            },
          ],
          "ECOLE PUBLIQUE BANA CENTRE / A": [
            {
              station: "TOULA",
              voters: 1043
            },
          ],
          "ECOLE PUBLIQUE BANDOUMKASSA / A": [
            {
              station: "BANDOUMKASSA",
              voters: 402
            },
          ],
          "ECOLE PUBLIQUE BATCHA / A": [
            {
              station: "BATCHA",
              voters: 427
            },
          ],
          "ECOLE PUBLIQUE TENTCHEU / A": [
            {
              station: "TENTCHEU",
              voters: 916
            },
          ],
          "LYCEE CLASSIQUE BANA / A": [
            {
              station: "KATOU",
              voters: 155
            },
          ],
          "LYCEE TECHNIQUE BANA / A": [
            {
              station: "FAMNO",
              voters: 180
            },
          ],
          "TRIBUNE DU MARCHE BANA / A": [
            {
              station: "FOUMBE",
              voters: 516
            },
          ],
        },
        "BANDJA": {
          "CASE COMITE BABONG / A": [
            {
              station: "BABONG",
              voters: 276
            },
            {
              station: "BALASSIE",
              voters: 775
            },
          ],
          "CASE DE SANTE DE BADENLA / A": [
            {
              station: "BADENLA",
              voters: 191
            },
            {
              station: "BAKOUOTCHA",
              voters: 191
            },
            {
              station: "BALACHIE",
              voters: 742
            },
            {
              station: "BAMENDJO",
              voters: 191
            },
            {
              station: "BATCHAM",
              voters: 191
            },
          ],
          "CEBEC DE BASSEU / A": [
            {
              station: "BASSEU",
              voters: 485
            },
          ],
          "CES DE FONDANTI / A": [
            {
              station: "NDJAMKOUO",
              voters: 152
            },
            {
              station: "TCHOULA",
              voters: 152
            },
          ],
          "COLLEGE KAMBOU / A": [
            {
              station: "HIELA",
              voters: 578
            },
            {
              station: "TCHOUNO",
              voters: 578
            },
          ],
          "ECOLE CATHOLIQUE SAINT DENIS / A": [
            {
              station: "FAMLA",
              voters: 566
            },
          ],
          "ECOLE CEBEC DE FONDJOMEKWET / A": [
            {
              station: "DJIFFO",
              voters: 192
            },
            {
              station: "HIALA",
              voters: 770
            },
          ],
          "ECOLE NOTRE DAME DE BATCHITCHEU / A": [
            {
              station: "MEKO",
              voters: 389
            },
            {
              station: "WUM",
              voters: 389
            },
          ],
          "ECOLE PUB. BANDJA CHEFFERIE (MANGA) / A": [
            {
              station: "BALANGUEU",
              voters: 392
            },
            {
              station: "TCHALA/BANDJA",
              voters: 392
            },
          ],
          "ECOLE PUBLIQUE BANGUEKA / A": [
            {
              station: "BANGUEKA",
              voters: 260
            },
            {
              station: "VING",
              voters: 260
            },
          ],
          "ECOLE PUBLIQUE BILINGUE / A": [
            {
              station: "TCHIPA",
              voters: 486
            },
          ],
          "ECOLE PUBLIQUE DE BAKEU / A": [
            {
              station: "BAKEU",
              voters: 77
            },
          ],
          "ECOLE PUBLIQUE DE BAKOTCHA / A": [
            {
              station: "BAKOTCHA",
              voters: 72
            },
          ],
          "ECOLE PUBLIQUE DE BAKWOP / A": [
            {
              station: "BAKWOP",
              voters: 147
            },
            {
              station: "NGUIEBONG",
              voters: 147
            },
          ],
          "ECOLE PUBLIQUE DE BALAFI / A": [
            {
              station: "BALAFI",
              voters: 247
            },
          ],
          "ECOLE PUBLIQUE DE BALEUGWA / A": [
            {
              station: "BALEUGWA",
              voters: 77
            },
          ],
          "ECOLE PUBLIQUE DE BALOUM PLATEAU / A": [
            {
              station: "FAPTCHEU",
              voters: 145
            },
            {
              station: "LOM",
              voters: 145
            },
            {
              station: "(BALOUM)",
              voters: 145
            },
            {
              station: "NGOUEPI",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE DE BANDJA / A": [
            {
              station: "BAKATCHEU",
              voters: 1037
            },
            {
              station: "METCHE",
              voters: 917
            },
            {
              station: "QUARTIER",
              voters: 5960
            },
          ],
          "ECOLE PUBLIQUE DE BANGOKO / A": [
            {
              station: "BANGOKO",
              voters: 108
            },
          ],
          "ECOLE PUBLIQUE DE BANO / A": [
            {
              station: "BANO",
              voters: 369
            },
          ],
          "ECOLE PUBLIQUE DE BASSEU / A": [
            {
              station: "LASSIE/BANDJA",
              voters: 100
            },
          ],
          "ECOLE PUBLIQUE DE BATACK / A": [
            {
              station: "TACK",
              voters: 71
            },
            {
              station: "(BATACK)",
              voters: 71
            },
          ],
          "ECOLE PUBLIQUE DE BATCHIEU / A": [
            {
              station: "TCHIEUH",
              voters: 199
            },
            {
              station: "(BATCHIEU)",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE BATCHITCHEU / A": [
            {
              station: "BATCHITCHEU/FONDANTI",
              voters: 143
            },
            {
              station: "BATCHITCHEU/FONDJOMEKWET",
              voters: 532
            },
          ],
          "ECOLE PUBLIQUE DE BATOULA / A": [
            {
              station: "TOULA",
              voters: 497
            },
            {
              station: "(BATOULA)",
              voters: 146
            },
            {
              station: "BABOUANTOU",
              voters: 146
            },
          ],
          "ECOLE PUBLIQUE DE BAWANG / A": [
            {
              station: "BAWANG",
              voters: 679
            },
            {
              station: "TSELA",
              voters: 679
            },
          ],
          "ECOLE PUBLIQUE DE FANGAM / A": [
            {
              station: "FANGAM",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE DE FONDANTI / A": [
            {
              station: "DJAH",
              voters: 378
            },
            {
              station: "MENDAH",
              voters: 378
            },
          ],
          "ECOLE PUBLIQUE DE FONDJOMEKWET / A": [
            {
              station: "DEMTCHANG",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE DE LATCHIEU / A": [
            {
              station: "BAKOUA",
              voters: 263
            },
            {
              station: "KOUOBONG",
              voters: 263
            },
            {
              station: "LATCHIEU",
              voters: 263
            },
          ],
          "ECOLE PUBLIQUE DE NDAKPEUDJIE / A": [
            {
              station: "NDAKPEUDJIE",
              voters: 269
            },
          ],
          "ECOLE PUBLIQUE DE NGUIEUH / A": [
            {
              station: "NGUIEUH",
              voters: 81
            },
          ],
          "ECOLE PUBLIQUE DE TOULA / A": [
            {
              station: "FONDJOMEKWET",
              voters: 351
            },
          ],
          "ENTREE CHEFFERIE NGONFET / A": [
            {
              station: "NGONFET",
              voters: 158
            },
            {
              station: "SONG",
              voters: 158
            },
            {
              station: "TOUKONG",
              voters: 158
            },
          ],
          "FOYER CULTUREL DE BABOUANTOU / A": [
            {
              station: "NDACKVEN",
              voters: 315
            },
            {
              station: "TCHALA/BABOUANTOU",
              voters: 821
            },
          ],
          "FOYER CULTUREL DE DOMGOUM / A": [
            {
              station: "BALAKO",
              voters: 183
            },
            {
              station: "DOMGOUM",
              voters: 183
            },
          ],
          "LYCEE DE BABOUANTOU / A": [
            {
              station: "SESSIEU",
              voters: 181
            },
          ],
          "LYCEE DE FOTOUNI / A": [
            {
              station: "TCHIKONG",
              voters: 499
            },
            {
              station: "TCHISSO",
              voters: 499
            },
          ],
          "POSTE AGRICOLE DE FONDJOMEKWET / A": [
            {
              station: "DJEMLA",
              voters: 212
            },
          ],
        },
        "BANKA": {
          "CENTRE NUFI DE BANKA / A": [
            {
              station: "BADOUMGA",
              voters: 7583
            },
          ],
          "ECOLE NOTRE DAME DE BANKA / A": [
            {
              station: "III",
              voters: 684
            },
          ],
          "ECOLE PUBLIQUE BADOUMVEN / A": [
            {
              station: "BADOUMVEN",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE BAKOYE / A": [
            {
              station: "BAKOYE",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE BANDOUMKA / A": [
            {
              station: "BANDOUMKA",
              voters: 310
            },
          ],
          "ECOLE PUBLIQUE BANFEKO / A": [
            {
              station: "BANFEKO",
              voters: 417
            },
          ],
          "ECOLE PUBLIQUE BANKA - TOUSSA / A": [
            {
              station: "TOUSSA",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE BATCHO / A": [
            {
              station: "BATCHO",
              voters: 200
            },
            {
              station: "BATOUTCHO",
              voters: 337
            },
          ],
          "ECOLE PUBLIQUE DOMGA GROUPE I ET II / A": [
            {
              station: "PANTCHI",
              voters: 1264
            },
          ],
          "ECOLE PUBLIQUE FONGOLI / A": [
            {
              station: "FONGOLI",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE NEW- TOWN / A": [
            {
              station: "BANGA",
              voters: 728
            },
            {
              station: "TCHONTE",
              voters: 728
            },
            {
              station: "(NEW-TOWN)",
              voters: 728
            },
          ],
          "ECOLE PUBLIQUE YONTEU KETCHO / A": [
            {
              station: "YONTEU",
              voters: 349
            },
            {
              station: "KETCHO",
              voters: 349
            },
          ],
          "ECOLE TECHNIQUE D'AGRICULTURE / A": [
            {
              station: "BADJESSA",
              voters: 889
            },
            {
              station: "POUANGO",
              voters: 1251
            },
            {
              station: "TCHOYI",
              voters: 889
            },
          ],
          "FOYER CULTUREL BABOATE / A": [
            {
              station: "BABOATE",
              voters: 590
            },
          ],
          "FOYER CULTUREL BAKOVEN / A": [
            {
              station: "BAKOVEN",
              voters: 242
            },
          ],
          "FOYER CULTUREL BANFELOUK / A": [
            {
              station: "BANFELOUK",
              voters: 311
            },
          ],
          "FOYER CULTUREL BANGONDACK / A": [
            {
              station: "BANGONDACK",
              voters: 92
            },
          ],
          "FOYER CULTUREL BANKA- CHEFFERIE / A": [
            {
              station: "BANKA",
              voters: 1247
            },
            {
              station: "CHEFFERIE",
              voters: 1195
            },
          ],
          "FOYER CULTUREL BAPOUFEN / A": [
            {
              station: "BAPOUFEN",
              voters: 155
            },
            {
              station: "BATOUGONDACK",
              voters: 155
            },
          ],
          "FOYER CULTUREL DOMLEUGOU / A": [
            {
              station: "DOMLEUGOU",
              voters: 431
            },
          ],
          "FOYER CULTUREL FOLENTCHA / A": [
            {
              station: "FOLENTCHA",
              voters: 280
            },
          ],
          "FOYER CULTUREL MANILA / A": [
            {
              station: "MANILA",
              voters: 289
            },
          ],
          "LYCEE TECHNIQUE DE BAFANG / A": [
            {
              station: "MARCHE",
              voters: 52
            },
            {
              station: "CARREFOUR",
              voters: 52
            },
            {
              station: "LYCEE",
              voters: 52
            },
            {
              station: "TECHNIQUE",
              voters: 52
            },
          ],
          "MISSION CATH. POUANGO FUMANGA / A": [
            {
              station: "FUMANGA",
              voters: 362
            },
          ],
        },
        "BANWA": {
          "CENTRE DE JEUNESSE DE BANWA CENTRE /  A": [
            {
              station: "GENDARMERIE",
              voters: 435
            },
            {
              station: "PALMERAIE",
              voters: 435
            },
            {
              station: "TCHUENWE",
              voters: 435
            },
          ],
          "CES BILINGUE DE FOMESSA / A": [
            {
              station: "DOMLA",
              voters: 547
            },
            {
              station: "MEDJIE",
              voters: 547
            },
          ],
          "DELEGATION AGRICULTURE BANWA / A": [
            {
              station: "NZEUGUEU",
              voters: 60
            },
            {
              station: "NZISO",
              voters: 60
            },
          ],
          "E.P BAMELECK / A": [
            {
              station: "MFEKO",
              voters: 114
            },
            {
              station: "NKAKASHI",
              voters: 114
            },
            {
              station: "NTCHA'A",
              voters: 114
            },
            {
              station: "NTCHEKAM",
              voters: 114
            },
            {
              station: "TEEPOUA",
              voters: 114
            },
          ],
          "E.P BANWA CENTRE / A": [
            {
              station: "FOYAVE",
              voters: 161
            },
            {
              station: "MAKONGO",
              voters: 161
            },
          ],
          "E.P KAKO - FONTI / A": [
            {
              station: "KAKO",
              voters: 446
            },
            {
              station: "POUKAKO",
              voters: 223
            },
          ],
          "E.P. BAPOUNGUE / A": [
            {
              station: "KANEN",
              voters: 195
            },
            {
              station: "KEUMOU",
              voters: 195
            },
          ],
          "ECOLE CATH. DE MOUMEE MARCHE / A": [
            {
              station: "MOUMEE",
              voters: 1285
            },
            {
              station: "LONG",
              voters: 478
            },
            {
              station: "TRAIT",
              voters: 478
            },
            {
              station: "MARCHE",
              voters: 478
            },
          ],
          "ECOLE CATHOLIQUE FONTI / A": [
            {
              station: "AMICAL",
              voters: 367
            },
            {
              station: "DOMBREK",
              voters: 367
            },
            {
              station: "KING",
              voters: 2195
            },
            {
              station: "PLACE",
              voters: 2195
            },
            {
              station: "FONTI",
              voters: 367
            },
          ],
          "EP FOTSI-SUD / A": [
            {
              station: "SUD",
              voters: 205
            },
          ],
          "EPB DE DJAMONI / A": [
            {
              station: "PONT",
              voters: 329
            },
          ],
          "FOMESSA I / A": [
            {
              station: "CENE",
              voters: 197
            },
            {
              station: "FOMESSA",
              voters: 1291
            },
          ],
          "FOYER BAKONTI / A": [
            {
              station: "DJAMONI",
              voters: 157
            },
            {
              station: "BAKONTI",
              voters: 157
            },
          ],
          "FOYER BANWA CENTRE / A": [
            {
              station: "HOPITAL",
              voters: 394
            },
            {
              station: "KATANGA",
              voters: 394
            },
            {
              station: "STADE",
              voters: 394
            },
          ],
          "FOYER COMMUNAUTAIRE DE BAPOUNGUE /  A": [
            {
              station: "DOMLAA",
              voters: 219
            },
            {
              station: "BAPOUNGUE",
              voters: 219
            },
          ],
          "FOYER COMMUNAUTAIRE DE FOMBELE / A": [
            {
              station: "DOMBOCK",
              voters: 176
            },
            {
              station: "DOMMEKOO",
              voters: 176
            },
            {
              station: "FOTSI",
              voters: 454
            },
            {
              station: "NORD",
              voters: 249
            },
            {
              station: "NGOTTE",
              voters: 176
            },
            {
              station: "NKEUSIE",
              voters: 176
            },
            {
              station: "POUNDI",
              voters: 176
            },
          ],
          "FOYER COMMUNAUTAIRE FOYAVE / A": [
            {
              station: "MAIRIE",
              voters: 221
            },
            {
              station: "SCANWATER",
              voters: 221
            },
          ],
        },
        "KEKEM": {
          "CENTRE DE SANTE INTEGRE DE BALEMBO /  A": [
            {
              station: "DAKLA",
              voters: 161
            },
            {
              station: "DOMTCHIEU",
              voters: 161
            },
            {
              station: "POULIEU",
              voters: 161
            },
          ],
          "COLLEGE MAYA KEKEM / A": [
            {
              station: "CATHOLIQUE",
              voters: 371
            },
            {
              station: "QUARTIER",
              voters: 371
            },
            {
              station: "COLLEGE",
              voters: 371
            },
            {
              station: "MAYA",
              voters: 371
            },
          ],
          "ECOLE CATHOLIQUE DE BAMENGWI / A": [
            {
              station: "MAZOUKOUP",
              voters: 333
            },
            {
              station: "METOUZE",
              voters: 729
            },
          ],
          "ECOLE CATHOLIQUE FOYEMTCHA / A": [
            {
              station: "DEYEP",
              voters: 286
            },
            {
              station: "MEMFEBOM",
              voters: 286
            },
          ],
          "ECOLE CATHOLIQUE MBAFAM / A": [
            {
              station: "TCHA'A",
              voters: 147
            },
          ],
          "ECOLE CATHOLIQUE MOUMEE / A": [
            {
              station: "CARREFOUR",
              voters: 742
            },
            {
              station: "MOUMEE",
              voters: 2420
            },
            {
              station: "FONKOUAKEM",
              voters: 651
            },
            {
              station: "MISSION",
              voters: 903
            },
            {
              station: "QTIER",
              voters: 8967
            },
            {
              station: "HOPITAL",
              voters: 385
            },
          ],
          "ECOLE CEBEC DE PETIT NKAM / A": [
            {
              station: "TITALOM",
              voters: 161
            },
          ],
          "ECOLE CEBEC FONDJOMOKO / A": [
            {
              station: "PONT",
              voters: 441
            },
          ],
          "ECOLE MATERNELLE DE KEKEM CENTRE / A": [
            {
              station: "KING-PLACE",
              voters: 5242
            },
            {
              station: "PETIT",
              voters: 4190
            },
            {
              station: "NKAM",
              voters: 4190
            },
          ],
          "ECOLE MTLE DE BAMENGWI / A": [
            {
              station: "KOUMEGWI",
              voters: 458
            },
          ],
          "ECOLE MTLE DE PETIT NKAM / A": [
            {
              station: "CITE",
              voters: 804
            },
            {
              station: "DES",
              voters: 804
            },
            {
              station: "PALMIERS",
              voters: 804
            },
            {
              station: "CECILE",
              voters: 804
            },
            {
              station: "CHEFFERIE",
              voters: 1659
            },
          ],
          "ECOLE PUB. DE KAMBO / A": [
            {
              station: "KAMBO",
              voters: 151
            },
            {
              station: "DOWN",
              voters: 108
            },
          ],
          "ECOLE PUB. DE TCHOUNGOU / A": [
            {
              station: "TCHOUNGOU",
              voters: 111
            },
          ],
          "ECOLE PUB. FOND. NGASSA NICODEME / A": [
            {
              station: "NGASSA",
              voters: 173
            },
            {
              station: "NICODEME",
              voters: 173
            },
            {
              station: "ECOLE",
              voters: 1066
            },
            {
              station: "PUB.MOUMEE",
              voters: 173
            },
          ],
          "ECOLE PUB. MBAFAM CENTRE / A": [
            {
              station: "MBAFAM",
              voters: 651
            },
          ],
          "ECOLE PUB. MBOEBO CENTRE / A": [
            {
              station: "BAVAD",
              voters: 450
            },
            {
              station: "MBOUM",
              voters: 450
            },
          ],
          "ECOLE PUB.BAYON CENTRE / A": [
            {
              station: "BAYON",
              voters: 209
            },
            {
              station: "CENTRE",
              voters: 1102
            },
            {
              station: "BOMBOCK",
              voters: 209
            },
            {
              station: "DONKOU",
              voters: 209
            },
            {
              station: "MBOUE",
              voters: 209
            },
            {
              station: "NKOUANKALIEU",
              voters: 209
            },
          ],
          "ECOLE PUB.FOYEMTCHA CENTRE / A": [
            {
              station: "MBOUEBOCK",
              voters: 362
            },
            {
              station: "MOUMEKEM",
              voters: 362
            },
          ],
          "ECOLE PUB.FOYEMTCHA CHEFFERIE / A": [
            {
              station: "KACK",
              voters: 183
            },
            {
              station: "NGOUEM",
              voters: 183
            },
          ],
          "ECOLE PUBLIQUE DE BALEMBO / A": [
            {
              station: "BAKOUA",
              voters: 400
            },
            {
              station: "BAVAT",
              voters: 400
            },
            {
              station: "TCHOUDJEU",
              voters: 400
            },
          ],
          "ECOLE PUBLIQUE DE BAMENGWI CENTRE / A": [
            {
              station: "MBONZOUCK",
              voters: 396
            },
          ],
          "ECOLE PUBLIQUE FOND. KING- PLACE / A": [
            {
              station: "1ERE",
              voters: 855
            },
            {
              station: "ETAPE",
              voters: 855
            },
          ],
          "ECOLE PUBLIQUE FONKOUAKEM / A": [
            {
              station: "DOMDI",
              voters: 446
            },
            {
              station: "LOSSUH",
              voters: 446
            },
            {
              station: "FONDJOMOKO",
              voters: 2156
            },
            {
              station: "SHUNOCK",
              voters: 446
            },
          ],
          "FOYER BANA KEKEM / A": [
            {
              station: "EKOUOT",
              voters: 772
            },
            {
              station: "RESIDENCE",
              voters: 401
            },
          ],
          "FOYER CARRIERE KEKEM / A": [
            {
              station: "CARRIERE",
              voters: 3527
            },
            {
              station: "KEKEM",
              voters: 8691
            },
          ],
          "FOYER CULTUREL NGOM-NZOCK / A": [
            {
              station: "NGOM-NZOCK",
              voters: 43
            },
          ],
          "FOYER FONKOUAKEM CENTRE / A": [
            {
              station: "TCHEUKOUA",
              voters: 149
            },
          ],
          "FOYER NYELE / A": [
            {
              station: "NYELE",
              voters: 936
            },
          ],
          "LYCEE BILINGUE DE MBOEBO / A": [
            {
              station: "BALAKU",
              voters: 751
            },
            {
              station: "DJIKEU",
              voters: 590
            },
            {
              station: "MBOCBI",
              voters: 1040
            },
          ],
          "LYCEE TECHNIQUE DE KEKEM / A": [
            {
              station: "BANGUI",
              voters: 1714
            },
            {
              station: "CHARI",
              voters: 1714
            },
          ],
          "SALLE DES FETES DE KEKEM / A": [
            {
              station: "PUB.KEKEM",
              voters: 893
            },
            {
              station: "MAIRIE",
              voters: 893
            },
          ],
          "SALLE DES FETES DE NJIMBONG 01 / A": [
            {
              station: "NJIMBONG",
              voters: 582
            },
          ],
        },
      },
      "MIFI": {
        "BAFOUSSAM I": {
          "ARCHE DES PHOTONS / A": [
            {
              station: "NJINGAH",
              voters: 2646
            },
            {
              station: "(TAYIM)",
              voters: 1922
            },
          ],
          "C U DE BAFOUSSAM / A": [
            {
              station: "CENTRE",
              voters: 2599
            },
            {
              station: "ADMINISTRATIF",
              voters: 2599
            },
          ],
          "CHAMBRE DE COMMERCE / A": [
            {
              station: "FAMLA",
              voters: 5337
            },
          ],
          "COLLEGE DE LA CITE / A": [
            {
              station: "BIS",
              voters: 6001
            },
          ],
          "COLLEGE MARTIN LUTHER KING / A": [
            {
              station: "KING",
              voters: 1672
            },
            {
              station: "PLACE",
              voters: 1672
            },
          ],
          "DEL. REG. COMMUNICATION / A": [
            {
              station: "TAMDJA",
              voters: 2166
            },
          ],
          "ECOLE MATERNELLE BILINGUE CANADIENNE  /A": [
            {
              station: "NDIENGSO-I",
              voters: 570
            },
          ],
          "ECOLE PRIVEE LES LABOUREURS / A": [
            {
              station: "VILLAGE",
              voters: 5570
            },
          ],
          "EP BAMENDZI VILLE (A) / A": [
            {
              station: "(A)",
              voters: 3627
            },
          ],
          "EP BAMENDZI VILLE (B) / A": [
            {
              station: "(B)",
              voters: 3125
            },
          ],
          "EP BANEFO / A": [
            {
              station: "BANEFO",
              voters: 363
            },
          ],
          "EP DE TCHO / A": [
            {
              station: "TCHO",
              voters: 94
            },
          ],
          "EP DE TOMDJO / A": [
            {
              station: "TOMDJO",
              voters: 386
            },
          ],
          "EP DJELENG V / A": [
            {
              station: "DJELENG",
              voters: 4034
            },
          ],
          "EP DJEMOUM / A": [
            {
              station: "DJEMOUM",
              voters: 5827
            },
          ],
          "EP HOUKAHA / A": [
            {
              station: "HOUKAHA",
              voters: 1207
            },
          ],
          "EP HOUMKAM / A": [
            {
              station: "HOUMKAM",
              voters: 311
            },
          ],
          "EP KOUEKONG / A": [
            {
              station: "KOUEKONG",
              voters: 336
            },
          ],
          "EP MEDJO I / A": [
            {
              station: "NDIANBOU",
              voters: 1290
            },
            {
              station: "MEDJO",
              voters: 294
            },
          ],
          "EP MELAM I / A": [
            {
              station: "MELAM",
              voters: 996
            },
          ],
          "EP NDEMSIEM / A": [
            {
              station: "NDEMSIEM",
              voters: 211
            },
          ],
          "EP NDIANGDAM / A": [
            {
              station: "BAMENDZI",
              voters: 30631
            },
            {
              station: "BANENGO",
              voters: 28167
            },
            {
              station: "VILLE",
              voters: 29349
            },
            {
              station: "NDIANGDAM",
              voters: 10790
            },
          ],
          "EP NDIENGSO / A": [
            {
              station: "NDIENGSO",
              voters: 1863
            },
          ],
          "LYCEE DE BATOUKOP / A": [
            {
              station: "BATOUKOP",
              voters: 750
            },
          ],
          "MISSION CATHOLIQUE ST JEAN BAPTISTE / A": [
            {
              station: "III",
              voters: 6295
            },
          ],
          "MISSION PROT. MVOUTSAHA / A": [
            {
              station: "MVOUTSAHA",
              voters: 240
            },
          ],
        },
        "BAFOUSSAM II": {
          "ANCIENNE BRIGADE GENDARMERIE / A": [
            {
              station: "FAMPIE",
              voters: 481
            },
          ],
          "CARREFOUR DIONTONG / A": [
            {
              station: "DIONTONG",
              voters: 144
            },
          ],
          "CASE DE SANTE DE BAYE / A": [
            {
              station: "BAYE",
              voters: 206
            },
          ],
          "CEBEC DE DOUPE / A": [
            {
              station: "DOUPE",
              voters: 385
            },
          ],
          "CEBEC DE LAFE BAOBAB / A": [
            {
              station: "II/BIS",
              voters: 2798
            },
          ],
          "CEBEC DE TCHITCHAP / A": [
            {
              station: "MARCHE",
              voters: 1260
            },
          ],
          "CES DE KONTI / A": [
            {
              station: "KONTI",
              voters: 561
            },
          ],
          "COLLEGE NELSON MANDELA / A": [
            {
              station: "III/B",
              voters: 1124
            },
          ],
          "COLLEGE TANKOU BLOC II / A": [
            {
              station: "IV/D",
              voters: 2954
            },
          ],
          "COPLANO / A": [
            {
              station: "I/C",
              voters: 699
            },
          ],
          "DELEGATION DEPT JEUNESSE / A": [
            {
              station: "IV/B",
              voters: 1667
            },
          ],
          "E P B KOPTCHOU MAETUR / A": [
            {
              station: "MAETUR",
              voters: 1693
            },
          ],
          "E P BANDENG / A": [
            {
              station: "BAKELACK",
              voters: 110
            },
          ],
          "E P BANEFO-MIFI / A": [
            {
              station: "BANEFO-MIFI",
              voters: 397
            },
          ],
          "E P DJASSA / A": [
            {
              station: "DJASSA",
              voters: 322
            },
          ],
          "E P DJELENG I / A": [
            {
              station: "DJELENG",
              voters: 11635
            },
            {
              station: "I/A",
              voters: 723
            },
          ],
          "E P DJELENG III / A": [
            {
              station: "III/A",
              voters: 3889
            },
          ],
          "E P FAMPIE / A": [
            {
              station: "NDIONKOU",
              voters: 1088
            },
          ],
          "E P KPI DE TYO-VILLAGE I / A": [
            {
              station: "TYO-VILLAGE",
              voters: 13631
            },
          ],
          "E P LAFE / A": [
            {
              station: "LAFE",
              voters: 3653
            },
          ],
          "E P LAGOUENG I / A": [
            {
              station: "LAGOUENG",
              voters: 778
            },
          ],
          "E P LATCHOUET BAPI / A": [
            {
              station: "BALATCHOUET",
              voters: 324
            },
            {
              station: "BAPI",
              voters: 914
            },
          ],
          "E P TCHADA / A": [
            {
              station: "TCHADA",
              voters: 312
            },
          ],
          "E P TCHITCHAP / A": [
            {
              station: "TCHITCHAP",
              voters: 3107
            },
          ],
          "E P TOUGANG VILLE / A": [
            {
              station: "VILLE",
              voters: 3087
            },
          ],
          "E P TYO-LAGOUENG / A": [
            {
              station: "TYO-LAGOUENG",
              voters: 680
            },
          ],
          "E P ZEGAM / A": [
            {
              station: "ZEGAM",
              voters: 216
            },
          ],
          "ECOLE CATH. SAINT JOSEPH / A": [
            {
              station: "IV/A",
              voters: 674
            },
          ],
          "ECOLE CATH. SAINTE THERESE / A": [
            {
              station: "IV/C",
              voters: 1261
            },
            {
              station: "TYO-VILLE",
              voters: 2861
            },
          ],
          "ECOLE MAT. BANDENG / A": [
            {
              station: "BAKAJOU",
              voters: 189
            },
            {
              station: "BANDENG",
              voters: 607
            },
          ],
          "ECOLE MAT. CATH. KOPTCHOU / A": [
            {
              station: "KOPTCHOU",
              voters: 5296
            },
            {
              station: "TOUGANG",
              voters: 15643
            },
            {
              station: "VILLAGE",
              voters: 9670
            },
          ],
          "ECOLE MAT. DJELENG I / A": [
            {
              station: "I/B",
              voters: 423
            },
          ],
          "ECOLE MAT. NDIONKOU / A": [
            {
              station: "KING",
              voters: 985
            },
            {
              station: "PLACE",
              voters: 985
            },
          ],
          "ECOLE MAT. SAINT DAMIEN LEPROSERIE / A": [
            {
              station: "CENTRE",
              voters: 4366
            },
            {
              station: "ADMINISTRATIF",
              voters: 4366
            },
          ],
          "ECOLE MAT. TOUGANG MEBOUTI / A": [
            {
              station: "DEPOT",
              voters: 802
            },
            {
              station: "PETROLIER",
              voters: 802
            },
            {
              station: "TOUGANG-MEBOUTI",
              voters: 1682
            },
          ],
          "ECOLE ST PHILIPPE DE TONGU / A": [
            {
              station: "TYO-LANGOUENG",
              voters: 137
            },
            {
              station: "TONGU",
              voters: 137
            },
          ],
          "FOYER BANDJOUN / A": [
            {
              station: "III",
              voters: 3523
            },
          ],
          "HOP BAPT LAVENG-BAPI / A": [
            {
              station: "LAVENG-BAPI",
              voters: 181
            },
          ],
          "MISSION CATH. KEGANG / A": [
            {
              station: "NGONLE",
              voters: 159
            },
          ],
          "MISSION PROT. FAMTCHOUET / A": [
            {
              station: "FAMTCHOUET",
              voters: 1130
            },
          ],
          "MISSION PROT. NEFOLOUM / A": [
            {
              station: "NEFOLOUM",
              voters: 246
            },
          ],
          "MISSION PROT. SINTE / A": [
            {
              station: "SINTE",
              voters: 201
            },
          ],
          "POSTE AGRICOLE DE BANDENG / A": [
            {
              station: "BAKELEU",
              voters: 123
            },
          ],
        },
        "BAFOUSSAM III": {
          "CEBEC BASSE / A": [
            {
              station: "BASSE",
              voters: 814
            },
          ],
          "CEBEC KOUOGOUO / A": [
            {
              station: "VILLE",
              voters: 7370
            },
          ],
          "COLLEGE ITEGE / A": [
            {
              station: "KENA",
              voters: 812
            },
          ],
          "COLLEGE SAINT THOMAS / A": [
            {
              station: "KOUOGOUO",
              voters: 15725
            },
            {
              station: "SUD",
              voters: 2785
            },
            {
              station: "VILLAGE",
              voters: 5570
            },
          ],
          "ENIEG GOUACHE / A": [
            {
              station: "III",
              voters: 4716
            },
            {
              station: "TCHOUONG",
              voters: 4623
            },
          ],
          "EP BANDZE / A": [
            {
              station: "BANDZE",
              voters: 1766
            },
          ],
          "EP BASSE / A": [
            {
              station: "HOUNG",
              voters: 136
            },
          ],
          "EP CAMP MILITAIRE / A": [
            {
              station: "GARNISON",
              voters: 1866
            },
            {
              station: "MILITAIRE",
              voters: 1866
            },
          ],
          "EP DJUKANG / A": [
            {
              station: "KOUABANG",
              voters: 1149
            },
          ],
          "EP DJUTCHA / A": [
            {
              station: "DJUTCHA",
              voters: 297
            },
          ],
          "EP FAMKOUO / A": [
            {
              station: "FAMKOUO",
              voters: 530
            },
          ],
          "EP KEULEU / A": [
            {
              station: "KELEU",
              voters: 334
            },
          ],
          "EP LAFIE I / A": [
            {
              station: "LAFIE",
              voters: 920
            },
          ],
          "EP LATSIT-KAM / A": [
            {
              station: "LATSIT",
              voters: 1330
            },
          ],
          "EP MB MALU / A": [
            {
              station: "GOUACHE",
              voters: 15495
            },
          ],
          "EP NKONGSO / A": [
            {
              station: "NKONGSO",
              voters: 637
            },
          ],
          "EP TOKET / A": [
            {
              station: "KESSA",
              voters: 1012
            },
            {
              station: "TOSSEU",
              voters: 1012
            },
          ],
          "EPPB TCHEUCTHOUA / A": [
            {
              station: "VII",
              voters: 1753
            },
          ],
          "LYCEE DE DJUNANG / A": [
            {
              station: "DJUNANG",
              voters: 771
            },
            {
              station: "METE",
              voters: 539
            },
          ],
          "LYCEE TECHNIQUE DE TOKET / A": [
            {
              station: "TOKET",
              voters: 3966
            },
          ],
          "MC HOUONG / A": [
            {
              station: "HOUONG",
              voters: 2795
            },
          ],
          "MC KAMKOP / A": [
            {
              station: "KAMKOP",
              voters: 16996
            },
          ],
          "MC KEGANG / A": [
            {
              station: "METOH",
              voters: 526
            },
          ],
          "MC MBI / A": [
            {
              station: "MBI",
              voters: 810
            },
          ],
          "MC TCHIPOU / A": [
            {
              station: "TCHIPOU",
              voters: 147
            },
          ],
          "MC TCHU / A": [
            {
              station: "TCHU",
              voters: 330
            },
          ],
          "MC TOTCHAP / A": [
            {
              station: "LOUMGOUO",
              voters: 199
            },
          ],
          "PRISON CENTRALE / A": [
            {
              station: "BII",
              voters: 782
            },
          ],
        },
      },
      "HAUTS-PLATEAUX": {
        "BAHAM": {
          "CENTRE MULTIFONCTIONNEL / A": [
            {
              station: "BLOC",
              voters: 549
            },
            {
              station: "NYLON",
              voters: 549
            },
          ],
          "CSI DE BAHIALA / A": [
            {
              station: "BAHIALA",
              voters: 537
            },
          ],
          "CSI DE BAPI / A": [
            {
              station: "BAPI",
              voters: 303
            },
          ],
          "CSI NGOUGOUA / A": [
            {
              station: "KATSE",
              voters: 311
            },
            {
              station: "TOULE",
              voters: 311
            },
          ],
          "EEC BAGHOM / A": [
            {
              station: "BAGHOM",
              voters: 313
            },
          ],
          "EEC CHENGNE / A": [
            {
              station: "CHENGNE",
              voters: 142
            },
          ],
          "EEC KAFFO / A": [
            {
              station: "KAFFO",
              voters: 490
            },
          ],
          "EEC PENKIEU / A": [
            {
              station: "TAMDJA",
              voters: 240
            },
            {
              station: "DEMKO",
              voters: 240
            },
            {
              station: "TOCHEFFOU",
              voters: 240
            },
          ],
          "EP BAHO / A": [
            {
              station: "BAHO",
              voters: 283
            },
          ],
          "EP BAMENDJO / A": [
            {
              station: "BAMENDJO",
              voters: 389
            },
          ],
          "EP BANKA / A": [
            {
              station: "BANKA",
              voters: 730
            },
          ],
          "EP BATOSSOUO / A": [
            {
              station: "BATOUSSOUO",
              voters: 536
            },
          ],
          "EP CHENGNE / A": [
            {
              station: "KAMBEN",
              voters: 641
            },
            {
              station: "PIETOYETSE",
              voters: 641
            },
          ],
          "EP DJEMGHEU / A": [
            {
              station: "DJEMGHEU",
              voters: 584
            },
          ],
          "EP DU CENTRE / A": [
            {
              station: "CENTRE",
              voters: 2064
            },
            {
              station: "COMMERCIAL",
              voters: 1476
            },
          ],
          "EP GENGARMERIE / A": [
            {
              station: "ADMINISTRATIF",
              voters: 588
            },
          ],
          "EP MAFOCHE / A": [
            {
              station: "MBOUKUE",
              voters: 510
            },
          ],
          "EP POUMZE / A": [
            {
              station: "DJEKUN",
              voters: 616
            },
            {
              station: "TOCHIE",
              voters: 616
            },
            {
              station: "MKA",
              voters: 616
            },
          ],
          "FC DEMGO / A": [
            {
              station: "DEMGO",
              voters: 657
            },
          ],
          "FC LAGWEU / A": [
            {
              station: "LASSEU",
              voters: 798
            },
          ],
          "LYCEE BILINGUE DE BAHAM / A": [
            {
              station: "TIETIE",
              voters: 123
            },
          ],
          "MC NGOUGOUA / A": [
            {
              station: "DEMGOUE",
              voters: 238
            },
          ],
          "MC PENKWA / A": [
            {
              station: "CHEFFOU",
              voters: 303
            },
          ],
          "MC POUMZE / A": [
            {
              station: "TOPOUMZE",
              voters: 223
            },
            {
              station: "MAMYOM",
              voters: 223
            },
          ],
          "MC SAINT ANDRE / A": [
            {
              station: "LAGWEU",
              voters: 223
            },
          ],
        },
        "BAMENDJOU": {
          "CEBEC BAMENDJOU / A": [
            {
              station: "BAKOUOKEU",
              voters: 226
            },
            {
              station: "MEDJI",
              voters: 851
            },
          ],
          "CSI BALATSIT / A": [
            {
              station: "BALATSIT",
              voters: 1053
            },
          ],
          "EMC BAMESSING / A": [
            {
              station: "BAMESSING",
              voters: 668
            },
          ],
          "EMC BATOGUEU / A": [
            {
              station: "BATCHAVEU",
              voters: 395
            },
            {
              station: "BATOGUEU",
              voters: 395
            },
          ],
          "EMC DJEUGO / A": [
            {
              station: "DJEUGO",
              voters: 262
            },
          ],
          "EMC KAGHO / A": [
            {
              station: "BAMOHIE",
              voters: 283
            },
          ],
          "EMC LATSIT / A": [
            {
              station: "LATSIT",
              voters: 634
            },
          ],
          "EMC NKONVE / A": [
            {
              station: "NKONVE",
              voters: 376
            },
          ],
          "EMC ST ANTOINE / A": [
            {
              station: "DJUMKANG",
              voters: 418
            },
          ],
          "EMC ST GABRIEL / A": [
            {
              station: "BATOUMI",
              voters: 325
            },
          ],
          "EMC TOBA / A": [
            {
              station: "BADJUPA",
              voters: 543
            },
          ],
          "EP BABOUM / A": [
            {
              station: "BABOUM",
              voters: 663
            },
          ],
          "EP BAHOUAN CENTRE / A": [
            {
              station: "BAMBOU",
              voters: 214
            },
          ],
          "EP BAKANG / A": [
            {
              station: "BAKANG",
              voters: 538
            },
          ],
          "EP BALATSIT / A": [
            {
              station: "III",
              voters: 209
            },
          ],
          "EP BAMEKA CHEFFERIE / A": [
            {
              station: "NGOUANG",
              voters: 998
            },
            {
              station: "NKET",
              voters: 998
            },
          ],
          "EP BAMENDJOU CHEFFERIE / A": [
            {
              station: "BATCHANG",
              voters: 660
            },
            {
              station: "BATCHUNKANG",
              voters: 660
            },
            {
              station: "BATOUGOUONG",
              voters: 660
            },
          ],
          "EP BAMEYA / A": [
            {
              station: "BAMEYA",
              voters: 584
            },
          ],
          "EP BANGAM CENTRE / A": [
            {
              station: "BATCHOUNOUO",
              voters: 479
            },
            {
              station: "BATEUFANG",
              voters: 479
            },
          ],
          "EP BAPENG / A": [
            {
              station: "BAPENG",
              voters: 365
            },
          ],
          "EP BATCHIT / A": [
            {
              station: "BATCHIT",
              voters: 345
            },
            {
              station: "BATIDONG",
              voters: 345
            },
          ],
          "EP BATCHOUM / A": [
            {
              station: "BATCHOUM",
              voters: 497
            },
          ],
          "EP BATOUNTA / A": [
            {
              station: "BATOUNTA",
              voters: 409
            },
          ],
          "EP BILINGUE BAMENDJOU / A": [
            {
              station: "PLATEAU",
              voters: 458
            },
            {
              station: "ADMINISRATIF",
              voters: 458
            },
          ],
          "EP DJUT / A": [
            {
              station: "DJUT",
              voters: 675
            },
          ],
          "EP GROUPE 1 / A": [
            {
              station: "BAGHEU",
              voters: 1232
            },
            {
              station: "BATOKE",
              voters: 1362
            },
          ],
          "EP MATERNELLE BAHILA / A": [
            {
              station: "BAHILA",
              voters: 161
            },
            {
              station: "(BANGAM)",
              voters: 161
            },
          ],
          "EP NDENG / A": [
            {
              station: "BAHIALA",
              voters: 394
            },
            {
              station: "(BAHOUAN)",
              voters: 394
            },
          ],
          "FOYER BAHOUAN / A": [
            {
              station: "BADENTCHA",
              voters: 293
            },
          ],
          "LYCEE CLASSIQUE BAMEKA / A": [
            {
              station: "BAKOUOGOUO",
              voters: 769
            },
            {
              station: "LYCEE",
              voters: 393
            },
          ],
          "LYCEE DE BAMENDJOU / A": [
            {
              station: "BADANG",
              voters: 657
            },
          ],
        },
        "BANGOU": {
          "E CEBEC BANGOU VILLE / A": [
            {
              station: "BALANGOUE",
              voters: 219
            },
          ],
          "EB BANGOU VILLE / A": [
            {
              station: "TCHEIKON-KA'AKA",
              voters: 134
            },
          ],
          "EC BANGOU CARREFOUR / A": [
            {
              station: "NDENGNIEP",
              voters: 1397
            },
          ],
          "EC BANGOU VILLE / A": [
            {
              station: "MADAGASCAR",
              voters: 167
            },
          ],
          "EC BAPA / A": [
            {
              station: "BADJENWANG",
              voters: 528
            },
            {
              station: "BALANGOU",
              voters: 528
            },
            {
              station: "DJEUKOU",
              voters: 528
            },
          ],
          "EP BADENSO / A": [
            {
              station: "BADENSO",
              voters: 480
            },
            {
              station: "FAMLEU",
              voters: 480
            },
          ],
          "EP BALAMBO / A": [
            {
              station: "BALAMBO",
              voters: 426
            },
            {
              station: "BATOUGO",
              voters: 426
            },
          ],
          "EP BALOUMGOU / A": [
            {
              station: "BALOUMGOU",
              voters: 728
            },
            {
              station: "BATOUKONG",
              voters: 728
            },
            {
              station: "POHEKEU",
              voters: 728
            },
            {
              station: "POUTSUE",
              voters: 728
            },
          ],
          "EP BANDENKOP CENTRE / A": [
            {
              station: "BANDENKOP",
              voters: 322
            },
            {
              station: "CENTRE",
              voters: 1376
            },
          ],
          "EP BANGOU CARREFOUR / A": [
            {
              station: "BANTOUO",
              voters: 375
            },
            {
              station: "(BANGOU)",
              voters: 375
            },
          ],
          "EP BANGOU VILLE / A": [
            {
              station: "BAKANGOUE",
              voters: 750
            },
            {
              station: "BANKAKA",
              voters: 750
            },
          ],
          "EP BAPA / A": [
            {
              station: "BADENGPA",
              voters: 736
            },
            {
              station: "BATOP",
              voters: 1111
            },
            {
              station: "(BAPA)",
              voters: 736
            },
            {
              station: "LOUG",
              voters: 736
            },
          ],
          "EP BETE / A": [
            {
              station: "FEUTCHI",
              voters: 218
            },
            {
              station: "TCHITCHOUO",
              voters: 218
            },
          ],
          "EP CHEFFERIE / A": [
            {
              station: "BAKEN",
              voters: 662
            },
            {
              station: "BANZINZI",
              voters: 662
            },
            {
              station: "BATOUZO",
              voters: 662
            },
            {
              station: "DEMGUEU",
              voters: 662
            },
            {
              station: "KING-PLACE",
              voters: 662
            },
          ],
          "EP KENSUM / A": [
            {
              station: "FEM",
              voters: 274
            },
            {
              station: "KENSUM",
              voters: 274
            },
            {
              station: "KOUTON",
              voters: 274
            },
            {
              station: "TSEMEHIA",
              voters: 274
            },
          ],
          "EP MEDJIEU / A": [
            {
              station: "FOBLEP",
              voters: 596
            },
            {
              station: "MEDJIEU",
              voters: 1226
            },
          ],
          "EP NGOUETCHA / A": [
            {
              station: "NGOUETCHA",
              voters: 124
            },
          ],
          "EP PAKEM / A": [
            {
              station: "BADENKENG",
              voters: 362
            },
            {
              station: "PAKEM",
              voters: 362
            },
          ],
          "EP TAMDJO / A": [
            {
              station: "KENONG",
              voters: 509
            },
            {
              station: "KEPTCHE",
              voters: 509
            },
            {
              station: "SAMBI",
              voters: 509
            },
          ],
          "EP TCHICTCHI / A": [
            {
              station: "TCHITCHI",
              voters: 292
            },
          ],
          "EP TSIM-TSELA / A": [
            {
              station: "BATSELA",
              voters: 299
            },
            {
              station: "ADMINISTRATIF",
              voters: 1054
            },
          ],
        },
        "BATIE": {
          "CES BALIG / A": [
            {
              station: "NDEUMGNOCK",
              voters: 154
            },
            {
              station: "ZANG",
              voters: 154
            },
          ],
          "CES BILINGUE BATIE / A": [
            {
              station: "NDEUMTOUH",
              voters: 200
            },
          ],
          "CSI BAMETCHETCHA / A": [
            {
              station: "DEUTCHA",
              voters: 67
            },
            {
              station: "MBO",
              voters: 67
            },
          ],
          "E.P. DE NSO'O / A": [
            {
              station: "TSHESSO'O",
              voters: 140
            },
            {
              station: "DJEUKHOUE",
              voters: 140
            },
          ],
          "EMC BALIG / A": [
            {
              station: "BALIG",
              voters: 448
            },
          ],
          "EMC FAMGOUM II / A": [
            {
              station: "TOUKOP",
              voters: 487
            },
          ],
          "EP BADJEUGOU / A": [
            {
              station: "BADJEUGOU",
              voters: 426
            },
          ],
          "EP BAMETCHETCHA / A": [
            {
              station: "LEUH",
              voters: 75
            },
          ],
          "EP BATIE CHEFFERIE / A": [
            {
              station: "HIALA",
              voters: 1357
            },
          ],
          "EP BATIE COL / A": [
            {
              station: "BACHEPANG",
              voters: 627
            },
            {
              station: "BAMETCHOUE",
              voters: 627
            },
            {
              station: "FODOM",
              voters: 627
            },
          ],
          "EP FAMGOUM I / A": [
            {
              station: "FAMGOUM",
              voters: 1638
            },
          ],
          "EPPLM BATIE / A": [
            {
              station: "DEJEDEUM",
              voters: 219
            },
            {
              station: "NZANG",
              voters: 219
            },
          ],
          "FOYER BAMETCHETCHA / A": [
            {
              station: "TEUH",
              voters: 345
            },
            {
              station: "GOUFEU",
              voters: 345
            },
          ],
          "LYCEE TECHNIQUE DE BATIE / A": [
            {
              station: "TCHOMSO",
              voters: 157
            },
          ],
          "MC LAGOU I / A": [
            {
              station: "LAGOU",
              voters: 1266
            },
          ],
        },
      },
      "NDE": {
        "BANGANGTE": {
          "CEBEC BAMENA / A": [
            {
              station: "FOPBOU",
              voters: 340
            },
            {
              station: "NDEPGANG",
              voters: 340
            },
            {
              station: "SO'OH",
              voters: 340
            },
            {
              station: "TOUTAP",
              voters: 340
            },
          ],
          "CEBEC BANEKANE / A": [
            {
              station: "BANEKANE",
              voters: 958
            },
          ],
          "CEBEC BATOUKOP / A": [
            {
              station: "BATOUKOP",
              voters: 239
            },
            {
              station: "TOUDANDOU",
              voters: 239
            },
          ],
          "CEBEC FEUTAP / A": [
            {
              station: "PEUDONG",
              voters: 288
            },
          ],
          "CENTRE DE SANTE DE BAFEUGNOUN / A": [
            {
              station: "BAFEUGNOUN",
              voters: 212
            },
            {
              station: "BASSANDIANG",
              voters: 212
            },
          ],
          "CENTRE DE SANTE DE POUMPA / A": [
            {
              station: "KAMDAM",
              voters: 147
            },
            {
              station: "POUMPA",
              voters: 147
            },
          ],
          "CETIC BANEKANE / A": [
            {
              station: "FAMBEU",
              voters: 161
            },
          ],
          "DELEGATION DEPT TRAVAUX PUBLICS / A": [
            {
              station: "MAGNIADJEU",
              voters: 553
            },
            {
              station: "NGANKOUN",
              voters: 553
            },
          ],
          "DISPENSAIRE BAMENA / A": [
            {
              station: "DEPTAP",
              voters: 532
            },
            {
              station: "NTAH",
              voters: 532
            },
            {
              station: "POZOU",
              voters: 532
            },
            {
              station: "TONCHO",
              voters: 532
            },
          ],
          "ECOLE D'INGENIEURIE DE MANDJA / A": [
            {
              station: "MANDJA",
              voters: 1003
            },
          ],
          "ECOLE MAT. DE BANGANG-FOKAM / A": [
            {
              station: "NDIENTANG",
              voters: 69
            },
          ],
          "ECOLE MATERNELLE DE NENTA / A": [
            {
              station: "FAMNGO",
              voters: 29
            },
          ],
          "ECOLE PRIVEE DE TCHOUNEUM / A": [
            {
              station: "TCHOUNEUM",
              voters: 49
            },
          ],
          "EP BAGNOU / A": [
            {
              station: "BAGNOU",
              voters: 195
            },
            {
              station: "FOPLEP",
              voters: 195
            },
            {
              station: "FOPLOUH",
              voters: 195
            },
          ],
          "EP BAHOUOC / A": [
            {
              station: "BAKWA",
              voters: 299
            },
            {
              station: "FEUTCHOUET",
              voters: 299
            },
            {
              station: "NOUMKO",
              voters: 299
            },
          ],
          "EP BAMENA / A": [
            {
              station: "LANGWEU",
              voters: 315
            },
          ],
          "EP BANDIANGSEU / A": [
            {
              station: "BANDIANGSEU",
              voters: 525
            },
          ],
          "EP BANDJUIDJONG / A": [
            {
              station: "BANDJUIDJONG",
              voters: 40
            },
          ],
          "EP BANEKANE / A": [
            {
              station: "BANEKOUANE",
              voters: 1252
            },
            {
              station: "NETAM",
              voters: 680
            },
            {
              station: "PAMKOP",
              voters: 680
            },
          ],
          "EP BANGANG-FOKAM / A": [
            {
              station: "NDIONCHEU",
              voters: 381
            },
            {
              station: "TEU",
              voters: 381
            },
          ],
          "EP BANGOUA / A": [
            {
              station: "FAMDIONGSO",
              voters: 772
            },
          ],
          "EP BANOUMGA / A": [
            {
              station: "BANOUMGA",
              voters: 354
            },
            {
              station: "MANKO",
              voters: 354
            },
          ],
          "EP BANTOUM 1 / A": [
            {
              station: "BANTOUM",
              voters: 2691
            },
          ],
          "EP BATCHINGOU / A": [
            {
              station: "KA'A",
              voters: 408
            },
            {
              station: "LAH",
              voters: 408
            },
            {
              station: "TOUKOU",
              voters: 408
            },
            {
              station: "TOUNTA",
              voters: 408
            },
          ],
          "EP BATELA / A": [
            {
              station: "BATELA",
              voters: 499
            },
          ],
          "EP D'APPLICATION 1 / A": [
            {
              station: "QUARTIER",
              voters: 20763
            },
          ],
          "EP FATGO'O / A": [
            {
              station: "FATGO'O",
              voters: 59
            },
            {
              station: "TCHOUAGWA",
              voters: 59
            },
          ],
          "EP FEUTAP / A": [
            {
              station: "BATAP",
              voters: 320
            },
            {
              station: "FEUTAP",
              voters: 550
            },
          ],
          "EP KAMNA / A": [
            {
              station: "NAAH",
              voters: 697
            },
          ],
          "EP KONTAP / A": [
            {
              station: "KONTAP",
              voters: 483
            },
            {
              station: "TATAP",
              voters: 483
            },
            {
              station: "TCHOUPLANG",
              voters: 483
            },
          ],
          "EP KOPKING / A": [
            {
              station: "FANG",
              voters: 488
            },
            {
              station: "KOPKING",
              voters: 488
            },
            {
              station: "KOPNDA",
              voters: 488
            },
            {
              station: "LAFENG",
              voters: 488
            },
          ],
          "EP MADOUM / A": [
            {
              station: "MADOUM",
              voters: 397
            },
          ],
          "EP MAHAM / A": [
            {
              station: "MAHAM",
              voters: 366
            },
          ],
          "EP MANGO'O / A": [
            {
              station: "MANGO'O",
              voters: 433
            },
            {
              station: "MATAM",
              voters: 433
            },
            {
              station: "NJIPKO",
              voters: 433
            },
            {
              station: "TCHOUDIM",
              voters: 433
            },
          ],
          "EP MVEU / A": [
            {
              station: "FAMVEU",
              voters: 182
            },
            {
              station: "MVEU",
              voters: 182
            },
          ],
          "EP NOUMTCHOUET / A": [
            {
              station: "NOUMTCHOUET",
              voters: 375
            },
          ],
          "EP NYAMGA / A": [
            {
              station: "MANGA",
              voters: 496
            },
            {
              station: "NOUMFAM",
              voters: 496
            },
            {
              station: "NYAMGA",
              voters: 496
            },
            {
              station: "NZUILOU",
              voters: 496
            },
          ],
          "EP PRN 1 / A": [
            {
              station: "PRN",
              voters: 1123
            },
          ],
          "EP SAGNA / A": [
            {
              station: "BANGOULAP",
              voters: 433
            },
            {
              station: "SAGNA",
              voters: 433
            },
            {
              station: "FEUNGA",
              voters: 433
            },
          ],
          "EP TOULAH / A": [
            {
              station: "DEPOUOLONG",
              voters: 138
            },
            {
              station: "HOULAP",
              voters: 138
            },
            {
              station: "NDEPTAH",
              voters: 138
            },
            {
              station: "TOULAH",
              voters: 138
            },
          ],
          "FOYER BABOU 1 / A": [
            {
              station: "BABOU",
              voters: 595
            },
          ],
          "FOYER BANESSAH / A": [
            {
              station: "BANESSAH",
              voters: 84
            },
            {
              station: "DOUNDOU",
              voters: 84
            },
            {
              station: "KOUNSAH",
              voters: 84
            },
          ],
          "FOYER BASSIFEU / A": [
            {
              station: "BASSIFEU",
              voters: 99
            },
            {
              station: "NEUDJAP",
              voters: 99
            },
          ],
          "FOYER BITCHOUA SUD / A": [
            {
              station: "BITCHOUA",
              voters: 319
            },
            {
              station: "SUD",
              voters: 319
            },
          ],
          "FOYER BONKEU / A": [
            {
              station: "BONGO",
              voters: 251
            },
            {
              station: "BONKEU",
              voters: 251
            },
          ],
          "FOYER FAMETCHA / A": [
            {
              station: "FAMETCHA",
              voters: 198
            },
            {
              station: "TOUNGOUI",
              voters: 198
            },
          ],
          "FOYER FAMNGO-NENTA / A": [
            {
              station: "FAMNGO-NENTA",
              voters: 539
            },
          ],
          "FOYER FEUMBATH / A": [
            {
              station: "BAYAHOUN",
              voters: 712
            },
            {
              station: "FEUMBATH",
              voters: 712
            },
          ],
          "FOYER FEUTAP / A": [
            {
              station: "PEDON",
              voters: 99
            },
          ],
          "FOYER KAFENG / A": [
            {
              station: "KAFENG",
              voters: 314
            },
          ],
          "FOYER KEDACK / A": [
            {
              station: "KEDACK",
              voters: 45
            },
          ],
          "FOYER KWELEH / A": [
            {
              station: "DEWEH",
              voters: 258
            },
            {
              station: "KWELEH",
              voters: 258
            },
            {
              station: "TOUSSIEU",
              voters: 258
            },
          ],
          "FOYER LANGOUI / A": [
            {
              station: "LANGOUI",
              voters: 117
            },
          ],
          "FOYER LANGWI / A": [
            {
              station: "LANGWI",
              voters: 125
            },
          ],
          "FOYER MBANGWEU / A": [
            {
              station: "MBANGWEU",
              voters: 85
            },
          ],
          "FOYER MBOMBEU / A": [
            {
              station: "MBOMBEU",
              voters: 97
            },
            {
              station: "NGOUIKONG",
              voters: 97
            },
          ],
          "FOYER MENEU / A": [
            {
              station: "MENEU",
              voters: 43
            },
          ],
          "FOYER NDEPKONG / A": [
            {
              station: "NDEPKONG",
              voters: 165
            },
            {
              station: "NGOUADJI",
              voters: 165
            },
            {
              station: "YANLONG",
              voters: 165
            },
          ],
          "FOYER NDEPNOU / A": [
            {
              station: "NDEPNOU",
              voters: 339
            },
          ],
          "FOYER NDOUKONG / A": [
            {
              station: "NDOUKONG",
              voters: 479
            },
          ],
          "FOYER NENGA 1 / A": [
            {
              station: "NENGA",
              voters: 496
            },
          ],
          "FOYER NENTA / A": [
            {
              station: "NENTA",
              voters: 355
            },
          ],
          "FOYER NYAMBEU / A": [
            {
              station: "MABIT",
              voters: 192
            },
            {
              station: "NYAMBEU",
              voters: 192
            },
          ],
          "FOYER SAGNAM / A": [
            {
              station: "SAGNAM",
              voters: 346
            },
          ],
          "FOYER SANGOUA / A": [
            {
              station: "SANGOUA",
              voters: 98
            },
          ],
          "FOYER SANKI / A": [
            {
              station: "SANKI",
              voters: 247
            },
          ],
          "FOYER TALEUM / A": [
            {
              station: "TALEUM",
              voters: 622
            },
          ],
          "FOYER TCHILA / A": [
            {
              station: "TCHILA",
              voters: 204
            },
          ],
          "FOYER TOUGONG / A": [
            {
              station: "TOUGONG",
              voters: 384
            },
          ],
          "FOYER TOUKWEUT / A": [
            {
              station: "TOUKWEUT",
              voters: 265
            },
          ],
          "FOYER TOUMVEU / A": [
            {
              station: "BALOUE",
              voters: 270
            },
            {
              station: "FAPDOLOP",
              voters: 270
            },
            {
              station: "TOUMVEU",
              voters: 270
            },
          ],
          "FOYER ZAP / A": [
            {
              station: "ZAP",
              voters: 59
            },
          ],
          "LYCEE DE BANGANG-FOKAM / A": [
            {
              station: "BAMETCHA",
              voters: 177
            },
            {
              station: "NJIFOUE",
              voters: 177
            },
          ],
          "LYCEE DE BANGOUA / A": [
            {
              station: "PEUP",
              voters: 192
            },
          ],
          "LYCEE TECHNIQUE DE BAMENA / A": [
            {
              station: "LOUH",
              voters: 747
            },
          ],
          "ORPHELINAT LA BONNE CASE / A": [
            {
              station: "METCHA",
              voters: 109
            },
            {
              station: "BGTE",
              voters: 109
            },
          ],
          "POSTE AGRICOLE DE BATCHINGOU / A": [
            {
              station: "BANDONG",
              voters: 138
            },
            {
              station: "BANGOUE",
              voters: 138
            },
            {
              station: "TOUNGOUE",
              voters: 138
            },
          ],
        },
        "BASSAMBA": {
          "CENTRE D\INSERTION DES JEUNES(CIJ) / A": [
            {
              station: "NEW",
              voters: 91
            },
            {
              station: "TOWN",
              voters: 91
            },
          ],
          "EP BABOSSA / A": [
            {
              station: "QUARTIER",
              voters: 3762
            },
          ],
          "POSTE AGRICOLE DE BANYABO / A": [
            {
              station: "BANYABO",
              voters: 22
            },
          ],
        },
        "BAZOU": {
          "CASE COMMUNAUTAIRE / A": [
            {
              station: "QUARTIER",
              voters: 207
            },
            {
              station: "ADMINISTRATIF",
              voters: 207
            },
          ],
          "CENTRE D'ACCUEIL BALENGOU / A": [
            {
              station: "MBOU",
              voters: 250
            },
          ],
          "ECOLE CATHOLIQUE SAINT ALBERT / A": [
            {
              station: "CONFORT",
              voters: 424
            },
            {
              station: "COTEAU",
              voters: 424
            },
            {
              station: "FAMTCHOUET",
              voters: 787
            },
          ],
          "ECOLE CEBEC BALENGOU / A": [
            {
              station: "BLOC",
              voters: 441
            },
            {
              station: "MABOU",
              voters: 147
            },
            {
              station: "LANGOUE",
              voters: 543
            },
          ],
          "ECOLE CEBEC BAZOU / A": [
            {
              station: "CENTRE",
              voters: 265
            },
            {
              station: "COMMERCIAL",
              voters: 265
            },
            {
              station: "NDIPTA",
              voters: 265
            },
          ],
          "ECOLE MATERNELLE BAZOU / A": [
            {
              station: "GENDARMERIE",
              voters: 335
            },
            {
              station: "PLATEAU",
              voters: 335
            },
          ],
          "ECOLE SAINT JOSEPH FAMTCHOUET / A": [
            {
              station: "FOSSE",
              voters: 605
            },
            {
              station: "MONT",
              voters: 605
            },
            {
              station: "NYEMMACK",
              voters: 605
            },
            {
              station: "PENTE",
              voters: 605
            },
            {
              station: "RAPHIA",
              voters: 363
            },
          ],
          "EP BAGNOUN / A": [
            {
              station: "KOOLO",
              voters: 239
            },
            {
              station: "NOUMKA",
              voters: 239
            },
          ],
          "EP BASSOUMDJANG / A": [
            {
              station: "CHICHELEH",
              voters: 161
            },
            {
              station: "KANKA'A",
              voters: 161
            },
            {
              station: "TOUGWE",
              voters: 161
            },
          ],
          "EP CHEFFERIE BALENGOU / A": [
            {
              station: "BALENGOU",
              voters: 354
            },
            {
              station: "MBANKEP",
              voters: 169
            },
            {
              station: "MBOO",
              voters: 169
            },
            {
              station: "TUKO",
              voters: 169
            },
          ],
          "EP FOPTCHUI / A": [
            {
              station: "FOPTCHUI",
              voters: 158
            },
            {
              station: "NDONTAP",
              voters: 158
            },
          ],
          "EP GROUPE I BAKONG / A": [
            {
              station: "KOUAH",
              voters: 244
            },
            {
              station: "MANGA",
              voters: 244
            },
            {
              station: "NLONGBWE",
              voters: 244
            },
            {
              station: "SAGNA",
              voters: 244
            },
          ],
          "EP GROUPE I BALENGOU / A": [
            {
              station: "MAHELO",
              voters: 490
            },
          ],
          "EP GROUPE I BAZOU / A": [
            {
              station: "CARRIERE",
              voters: 540
            },
          ],
          "EP GROUPE II BAKONG / A": [
            {
              station: "BOFAM",
              voters: 108
            },
            {
              station: "LANTEUNE",
              voters: 108
            },
            {
              station: "MBO",
              voters: 352
            },
          ],
          "EP GROUPE II BAZOU / A": [
            {
              station: "BAZOU",
              voters: 611
            },
            {
              station: "KATCHA",
              voters: 167
            },
            {
              station: "MBOUODJO",
              voters: 167
            },
            {
              station: "NGANGUEYONG",
              voters: 437
            },
            {
              station: "PRISON",
              voters: 437
            },
          ],
          "EP KASSANG / A": [
            {
              station: "NGWETCHEU",
              voters: 118
            },
          ],
          "EP KATIO / A": [
            {
              station: "KATIO",
              voters: 296
            },
          ],
          "EP NDEPLA / A": [
            {
              station: "BANDJA",
              voters: 135
            },
            {
              station: "NDEPLA",
              voters: 135
            },
          ],
          "EP NDIONZOU / A": [
            {
              station: "BABATCHE",
              voters: 296
            },
            {
              station: "BATAP",
              voters: 296
            },
            {
              station: "MBAHA",
              voters: 296
            },
            {
              station: "MBIBEUHEU",
              voters: 366
            },
            {
              station: "MBOUTONG",
              voters: 296
            },
            {
              station: "NDIONZOU",
              voters: 296
            },
            {
              station: "NGOUEDIP",
              voters: 296
            },
            {
              station: "SAHA",
              voters: 296
            },
            {
              station: "TOUKOP",
              voters: 296
            },
          ],
          "EP NDIPTA III / A": [
            {
              station: "KOUADJOU",
              voters: 167
            },
            {
              station: "NDITA",
              voters: 167
            },
            {
              station: "III",
              voters: 167
            },
            {
              station: "NGOKO",
              voters: 167
            },
            {
              station: "NJEUFEP",
              voters: 167
            },
          ],
          "EP NTANZE / A": [
            {
              station: "MBEUDOU",
              voters: 155
            },
            {
              station: "NDOUKOP",
              voters: 155
            },
            {
              station: "NTANZE",
              voters: 155
            },
            {
              station: "SAGNIA",
              voters: 155
            },
            {
              station: "TANGA",
              voters: 155
            },
            {
              station: "ZEUDIP",
              voters: 155
            },
          ],
          "FOYER BAGNOUN / A": [
            {
              station: "BAGNOUN",
              voters: 261
            },
          ],
          "FOYER BAKONG / A": [
            {
              station: "BOUDJA",
              voters: 171
            },
            {
              station: "CHEFFERIE",
              voters: 1240
            },
            {
              station: "BAKONG",
              voters: 171
            },
            {
              station: "MATCHUET",
              voters: 171
            },
          ],
          "FOYER KASSANG / A": [
            {
              station: "KASSANG",
              voters: 229
            },
          ],
          "FOYER KEUKEU / A": [
            {
              station: "FOZE",
              voters: 175
            },
          ],
          "FOYER KOUBA / A": [
            {
              station: "BAKOUA",
              voters: 174
            },
            {
              station: "KOUBA",
              voters: 174
            },
            {
              station: "MANGUEU",
              voters: 174
            },
            {
              station: "NDEPGNIA",
              voters: 174
            },
          ],
          "FOYER MAHA / A": [
            {
              station: "BOTCHUI",
              voters: 202
            },
            {
              station: "MAHA",
              voters: 202
            },
            {
              station: "NOUMTCHUI",
              voters: 202
            },
          ],
          "FOYER MANGOU / A": [
            {
              station: "BANAH",
              voters: 144
            },
            {
              station: "MANGOU",
              voters: 144
            },
            {
              station: "MBOUDENG",
              voters: 313
            },
            {
              station: "NDEPDA",
              voters: 144
            },
            {
              station: "TONGO",
              voters: 144
            },
            {
              station: "TOUTCHUI",
              voters: 144
            },
          ],
          "FOYER NDEPNGOUE / A": [
            {
              station: "KOUODJOU",
              voters: 151
            },
            {
              station: "NDEPNGOUE",
              voters: 151
            },
          ],
          "FOYER NDIPFEP / A": [
            {
              station: "NDIPFEP",
              voters: 141
            },
            {
              station: "TOUNTSE",
              voters: 141
            },
          ],
          "FOYER NJEUTA / A": [
            {
              station: "NJEUTA",
              voters: 208
            },
          ],
          "FOYER NSION / A": [
            {
              station: "COLLINE",
              voters: 341
            },
            {
              station: "NGANTAHA",
              voters: 341
            },
            {
              station: "NSION",
              voters: 341
            },
            {
              station: "NYLON",
              voters: 341
            },
          ],
          "FOYER NTANGA FETBA / A": [
            {
              station: "BAKONTCHOU",
              voters: 106
            },
            {
              station: "FETBA",
              voters: 106
            },
            {
              station: "NTANGA",
              voters: 106
            },
          ],
          "FOYER TCHUIKAM / A": [
            {
              station: "TCHUIKAM",
              voters: 264
            },
            {
              station: "TOUMBOU",
              voters: 264
            },
          ],
          "FOYER TERGAL / A": [
            {
              station: "TERGAL",
              voters: 294
            },
          ],
          "LYCEE BALENGOU / A": [
            {
              station: "LYCEE",
              voters: 359
            },
            {
              station: "NGONDJIO",
              voters: 185
            },
          ],
          "LYCEE BAZOU / A": [
            {
              station: "SOURCE",
              voters: 174
            },
          ],
          "POSTE AGRICOLE BALENGOU / A": [
            {
              station: "KAFOZE",
              voters: 170
            },
          ],
          "POSTE AGRICOLE DUOP / A": [
            {
              station: "DUOP",
              voters: 251
            },
          ],
        },
        "TONGA": {
          "CES BILINGUE BANDOUNGA / A": [
            {
              station: "TELIGWA",
              voters: 120
            },
            {
              station: "CHEFFERIE",
              voters: 120
            },
          ],
          "ECOLE BILINGUE DE BABITCHOUA / A": [
            {
              station: "SACQUEKE",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE BALOUA / A": [
            {
              station: "BALOUA",
              voters: 120
            },
            {
              station: "NJINDOM",
              voters: 120
            },
            {
              station: "NOUMKA",
              voters: 240
            },
            {
              station: "NTONGAH",
              voters: 120
            },
          ],
          "EP BABITCHOUA / A": [
            {
              station: "BITCHOUA",
              voters: 697
            },
            {
              station: "NORD",
              voters: 697
            },
          ],
          "EP DJANTCHALI / A": [
            {
              station: "DJANTCHALI",
              voters: 146
            },
          ],
          "EP MEDIMA / A": [
            {
              station: "NTO",
              voters: 51
            },
            {
              station: "-NGA",
              voters: 51
            },
          ],
          "EP TONGA / A": [
            {
              station: "QUARTIER",
              voters: 18105
            },
          ],
          "FOYER BABITCHOUA / A": [
            {
              station: "BABITCHOUA",
              voters: 687
            },
          ],
          "FOYER BALLOUA / A": [
            {
              station: "BALLOUA",
              voters: 760
            },
          ],
          "FOYER BANDOUNGA / A": [
            {
              station: "BANDOUNGA",
              voters: 900
            },
            {
              station: "BANKOUA",
              voters: 292
            },
          ],
          "FOYER NOUMBO / A": [
            {
              station: "NOUMBO",
              voters: 280
            },
          ],
          "GPBS GABON / A": [
            {
              station: "GABON",
              voters: 151
            },
          ],
          "MAISON COMMUNAUTAIRE BABOULENG / A": [
            {
              station: "BABOULENG",
              voters: 269
            },
          ],
          "MAISON COMMUNAUTAIRE BABOUNDI / A": [
            {
              station: "BABOUNDI",
              voters: 91
            },
          ],
          "MAISON COMMUNAUTAIRE FAGNO / A": [
            {
              station: "FAGNO",
              voters: 248
            },
          ],
          "MAISON COMMUNAUTAIRE MBEUNA / A": [
            {
              station: "MBEUNA",
              voters: 72
            },
          ],
          "MAISON COMMUNAUTAIRE MEDIMA / A": [
            {
              station: "MEDIMA",
              voters: 89
            },
          ],
          "MAISON COMMUNAUTAIRE NOUNTSE / A": [
            {
              station: "NOUTSE",
              voters: 124
            },
          ],
          "MAISON COMMUNAUTAIRE QTR 13 / A": [
            {
              station: "KOPNTA",
              voters: 79
            },
          ],
        },
      },
      "NOUN": {
        "BANGOURAIN": {
          "CETIC DE BANGOURAIN / A": [
            {
              station: "NJILOUM",
              voters: 204
            },
          ],
          "DELEGATION D'ELEVAGE / A": [
            {
              station: "DOUFFEN-CENTRE",
              voters: 355
            },
            {
              station: "COMMERCIAL",
              voters: 355
            },
          ],
          "E P BANGOURAIN CENTRE / A": [
            {
              station: "MARAP",
              voters: 669
            },
            {
              station: "MAROUMGOUO",
              voters: 400
            },
          ],
          "E P BILINGUE DE BANGOURAIN / A": [
            {
              station: "NJINTOUT",
              voters: 299
            },
          ],
          "E P BILINGUE DE KOUROM-CHEFFERIE / A": [
            {
              station: "KOUROM-CHEFFERIE",
              voters: 661
            },
          ],
          "E P BILINGUE KOUTOUPI / A": [
            {
              station: "KOUTOUPI",
              voters: 579
            },
          ],
          "E P DE BANGOURAIN CHEFFERIE / A": [
            {
              station: "BANGOURAIN",
              voters: 710
            },
            {
              station: "CHEFFERIE",
              voters: 1054
            },
          ],
          "E P DE KOUCHONG / A": [
            {
              station: "KOUCHONG",
              voters: 155
            },
          ],
          "E P DE KOUHOUAT / A": [
            {
              station: "MANSEN",
              voters: 1277
            },
          ],
          "E P DE KOUMBAM / A": [
            {
              station: "KOUMBAM",
              voters: 618
            },
          ],
          "E P DE KOUROM-MARCHE CENTRE / A": [
            {
              station: "KOUROM-MARCHE",
              voters: 549
            },
          ],
          "E P DE MANKI / A": [
            {
              station: "MANKI",
              voters: 147
            },
          ],
          "E P DE MENKEFU / A": [
            {
              station: "MENKEFU",
              voters: 187
            },
          ],
          "E P DE NCHOUTPAH / A": [
            {
              station: "NCHOUTPAH",
              voters: 525
            },
          ],
          "E P DE NDOUGHAM / A": [
            {
              station: "NDOUGHAM",
              voters: 262
            },
          ],
          "E P DE NDOUMBAIN / A": [
            {
              station: "NDOUMBAIN",
              voters: 456
            },
          ],
          "E P DE NGOUNOUN / A": [
            {
              station: "NGOUNOUN",
              voters: 425
            },
          ],
          "E P DE NGWENFON / A": [
            {
              station: "NGWENFON",
              voters: 439
            },
          ],
          "E P DE NGWENFONGUIE / A": [
            {
              station: "NGWENFONGUIE",
              voters: 526
            },
          ],
          "E P DE NJINTOUT SAGNIRI / A": [
            {
              station: "NJINTOUT-BORORO",
              voters: 82
            },
          ],
          "E P DE NKANTAIN / A": [
            {
              station: "NKANTAIN",
              voters: 574
            },
          ],
          "E P DE TOUKOUOP / A": [
            {
              station: "KOUMENGBA-",
              voters: 1123
            },
            {
              station: "KOUMENGBA-TOUKOUOP",
              voters: 436
            },
          ],
          "E. FRANCO ISLAMIQUE DE PANZOUH / A": [
            {
              station: "PANZOUH",
              voters: 96
            },
          ],
          "ECOLE BILINGUE DE CHOUTPAH / A": [
            {
              station: "CHOUTPAH",
              voters: 87
            },
            {
              station: "CENTRE",
              voters: 87
            },
          ],
          "ECOLE DES PARENTS BANGAMBI SOMTAIN /  A": [
            {
              station: "SOMTAIN",
              voters: 94
            },
          ],
          "ECOLE DES PARENTS DE KOUPOUOKAM I / A": [
            {
              station: "KOUPOUOKAM",
              voters: 257
            },
          ],
          "ECOLE DES PARENTS DE PAGHA / A": [
            {
              station: "PAGHA",
              voters: 127
            },
          ],
          "ECOLE FRANCO ISLAMIQUE DE BANGOURAN  CHEFFERIE / A": [
            {
              station: "NGUEDIEM",
              voters: 98
            },
          ],
          "FOYER COMMUNAUTAIRE DE KOUMENGBA /  A": [
            {
              station: "KOUMENGBA",
              voters: 78
            },
          ],
          "FOYER COMMUNAUTAIRE DE NKANTAIN / A": [
            {
              station: "MACHINYOUOM",
              voters: 31
            },
          ],
          "FOYER MUNICIPAL / A": [
            {
              station: "NJIMBOUH-PAGHA",
              voters: 275
            },
          ],
          "LYCEE BILINGUE DE BANGOURAIN / A": [
            {
              station: "NGARAP",
              voters: 175
            },
          ],
          "MAGAZIN CAPLANOUN / A": [
            {
              station: "BANGAMBI",
              voters: 1425
            },
          ],
        },
        "FOUMBAN": {
          "CENTRE DE PROMOTION DE LA FEMME / A": [
            {
              station: "III",
              voters: 1459
            },
          ],
          "COMMUNE RURALE DE FOUMBAN / A": [
            {
              station: "KOUNGA",
              voters: 4101
            },
            {
              station: "DALLAS",
              voters: 2247
            },
          ],
          "DELEGATION DEP. DES AFFAIRES SOCIALES  /A": [
            {
              station: "KOUKOUET-MALOUM",
              voters: 2637
            },
          ],
          "ECOLE ANNEXE GROUPE I / A": [
            {
              station: "MALATAM",
              voters: 1256
            },
          ],
          "ECOLE CEBEC FONTAIN / A": [
            {
              station: "NJINDARE",
              voters: 2453
            },
          ],
          "ECOLE CEBEC NJINTOUT / A": [
            {
              station: "NJINTOUT",
              voters: 4394
            },
          ],
          "ECOLE CEBEC NJISSE / A": [
            {
              station: "NJISSE",
              voters: 2390
            },
          ],
          "ECOLE MATERNELLE BILINGUE MANKOUEN /  A": [
            {
              station: "KOUONGOUPGNET",
              voters: 2146
            },
          ],
          "ECOLE MATERNELLE NJIMBAM I / A": [
            {
              station: "NJIMBAM",
              voters: 1158
            },
          ],
          "ECOLE PRIMAIRE ST JOSEPH / A": [
            {
              station: "NJISSAMTOUEN",
              voters: 5468
            },
            {
              station: "NSHUT",
              voters: 2979
            },
          ],
          "ECOLE PUBLIQUE DE KOUFFEN / A": [
            {
              station: "KOUFFEN",
              voters: 772
            },
          ],
          "ECOLE PUBLIQUE DE KOUFOMLOUM / A": [
            {
              station: "KOUFOMLOUM",
              voters: 335
            },
          ],
          "ECOLE PUBLIQUE DE KOUNDOUM / A": [
            {
              station: "KOUNDOUM",
              voters: 803
            },
          ],
          "ECOLE PUBLIQUE DE KOUPA-GAGNOU / A": [
            {
              station: "KOUPA-GAGNOU",
              voters: 301
            },
          ],
          "ECOLE PUBLIQUE DE MACHINBAIN / A": [
            {
              station: "MACHINBAIN",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE MAKOUENMENKA / A": [
            {
              station: "MAKOUENMENKA",
              voters: 662
            },
          ],
          "ECOLE PUBLIQUE DE MAMFU / A": [
            {
              station: "MAMFU",
              voters: 541
            },
          ],
          "ECOLE PUBLIQUE DE MANGA KOUNDOUM / A": [
            {
              station: "MANGA-KOUNDOUM",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE DE MANKA / A": [
            {
              station: "MANKA",
              voters: 1752
            },
          ],
          "ECOLE PUBLIQUE DE MAROM / A": [
            {
              station: "MAROM",
              voters: 610
            },
          ],
          "ECOLE PUBLIQUE DE MATOUMBAIN / A": [
            {
              station: "MATOUMBAIN",
              voters: 680
            },
          ],
          "ECOLE PUBLIQUE DE MEKOUONO / A": [
            {
              station: "MEKOUONO",
              voters: 151
            },
          ],
          "ECOLE PUBLIQUE DE MFETAME / A": [
            {
              station: "MFETAME",
              voters: 251
            },
          ],
          "ECOLE PUBLIQUE DE NJICHOM / A": [
            {
              station: "NJICHOM",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE DE NJILOUM / A": [
            {
              station: "NJILOUM",
              voters: 2240
            },
          ],
          "ECOLE PUBLIQUE DE NJINKA / A": [
            {
              station: "MACHINKA",
              voters: 2068
            },
          ],
          "ECOLE PUBLIQUE DE NJITIECHE / A": [
            {
              station: "NJIKETNKIE",
              voters: 781
            },
          ],
          "ECOLE PUBLIQUE KOUKETNDI / A": [
            {
              station: "KOUKETNDI",
              voters: 529
            },
          ],
          "ECOLE PUBLIQUE MANGA I / A": [
            {
              station: "MANGA",
              voters: 3338
            },
          ],
          "ECOLE PUBLIQUE NJIGOUELAM / A": [
            {
              station: "NJIGOUELAM",
              voters: 486
            },
          ],
          "ECOLE PUBLIQUE NJIKOUET / A": [
            {
              station: "NJIKOUET",
              voters: 407
            },
          ],
          "ECOLE PUBLIQUE NJILARE / A": [
            {
              station: "NJILARE",
              voters: 426
            },
          ],
          "ECOLE PUBLIQUE NJIMOGNAWOU / A": [
            {
              station: "NJIMOGNAWOU",
              voters: 127
            },
          ],
          "ENIEG MAMBAIN / A": [
            {
              station: "KOUNDOUMBAIN",
              voters: 2404
            },
          ],
          "HOTEL DES FINANCE / A": [
            {
              station: "FOUMBAN",
              voters: 1854
            },
          ],
          "LYCEE BILINGUE DE FOUMBAN / A": [
            {
              station: "KOUNTOUNGA",
              voters: 2322
            },
          ],
          "LYCEE CLASSIQUE DE FOUMBAN / A": [
            {
              station: "KOUDOUNKA",
              voters: 1924
            },
          ],
          "LYCEE KOUPA -MATAPIT / A": [
            {
              station: "KOUPA-MATAPIT",
              voters: 1257
            },
          ],
        },
        "FOUMBOT": {
          "C.E.B.EC. MBANJOU / A": [
            {
              station: "MBANJOU",
              voters: 2500
            },
          ],
          "CEBEC FOSSANG / A": [
            {
              station: "FOSSANG",
              voters: 857
            },
          ],
          "CEBEC NJINCHA / A": [
            {
              station: "NJINCHA",
              voters: 832
            },
          ],
          "CENTRE DE SANTE DE MATAM / A": [
            {
              station: "BAIGOM",
              voters: 3848
            },
          ],
          "ECOLE FRANCO - ARABE / A": [
            {
              station: "NJIMBOT",
              voters: 10498
            },
          ],
          "ECOLE PUBLIQUE CENTRE / A": [
            {
              station: "COMPANY",
              voters: 3070
            },
          ],
          "ECOLE PUBLIQUE DE KWETVU / A": [
            {
              station: "KWETVU",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE FOCHIEYA / A": [
            {
              station: "FOCHIEYA",
              voters: 571
            },
          ],
          "ECOLE PUBLIQUE FOSSETT / A": [
            {
              station: "FOSSETT",
              voters: 5760
            },
          ],
          "ECOLE PUBLIQUE KOUFFEN / A": [
            {
              station: "KOUFFEN",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE MAHOUON / A": [
            {
              station: "MAHOUON",
              voters: 482
            },
          ],
          "ECOLE PUBLIQUE MAKA PONT / A": [
            {
              station: "MAKA",
              voters: 1124
            },
          ],
          "ECOLE PUBLIQUE MANGOUM / A": [
            {
              station: "MANGOUM",
              voters: 1018
            },
          ],
          "ECOLE PUBLIQUE MBANTOU / A": [
            {
              station: "MBANTOU",
              voters: 3059
            },
          ],
          "ECOLE PUBLIQUE MOMO / A": [
            {
              station: "MOMO",
              voters: 466
            },
          ],
          "ECOLE PUBLIQUE NKOUNDOUMBAIN / A": [
            {
              station: "NKOUNDOUMBAIN",
              voters: 2240
            },
          ],
          "ECOLE PUBLIQUE NKOUONDJA / A": [
            {
              station: "NKOUONDJA",
              voters: 913
            },
          ],
          "ECOLE PUBLIQUE TENJOUONOUN / A": [
            {
              station: "KOUKPA",
              voters: 246
            },
            {
              station: "SOUPKPEN",
              voters: 246
            },
            {
              station: "TENJOUONOUN",
              voters: 246
            },
          ],
          "TRIBUNE / A": [
            {
              station: "III",
              voters: 2093
            },
          ],
        },
        "KOUOPTAMO": {
          "CASE NON HABITEE / A": [
            {
              station: "NKOUOPNKARE",
              voters: 33
            },
          ],
          "CEBEC BANKOUOP / A": [
            {
              station: "BANKOUOP",
              voters: 1133
            },
            {
              station: "CENTRE",
              voters: 2180
            },
            {
              station: "VILLE",
              voters: 547
            },
          ],
          "CEBEC DE NDOUMKAIN / A": [
            {
              station: "NJILAM",
              voters: 232
            },
          ],
          "CEBEC DE NJITOU / A": [
            {
              station: "NGBETNSOUEN",
              voters: 1317
            },
            {
              station: "SANKA",
              voters: 153
            },
            {
              station: "(NJITOU)",
              voters: 153
            },
          ],
          "CEBEC KOUPARA / A": [
            {
              station: "LOUMBOUOT",
              voters: 359
            },
          ],
          "CENTRE DE FORMATION DE KOUNDEN / A": [
            {
              station: "KOUNDEN",
              voters: 193
            },
          ],
          "CENTRE DE SANTE INTEGRE DE KOUSSOH /  A": [
            {
              station: "NJITAPON",
              voters: 1497
            },
            {
              station: "KOUSSOH",
              voters: 574
            },
          ],
          "CENTRE DE SANTE INTEGRE DE LA CHANAS /  A": [
            {
              station: "NJINGOUMBE",
              voters: 1421
            },
            {
              station: "CHANAS",
              voters: 444
            },
          ],
          "CES DE NGBETNSOUEN II / A": [
            {
              station: "(CENTRE",
              voters: 223
            },
            {
              station: "MONGAMBE)",
              voters: 223
            },
          ],
          "ECOLE DES PARENTS DE MEKIECHOUM / A": [
            {
              station: "MEKIECHOUM",
              voters: 164
            },
          ],
          "ECOLE FRANCO ISLAMIQUE S/ PREFECTURE  /A": [
            {
              station: "SOUS",
              voters: 394
            },
            {
              station: "PREFECTURE",
              voters: 394
            },
          ],
          "ECOLE PUB. DE NJINDOUN / A": [
            {
              station: "COC",
              voters: 564
            },
          ],
          "ECOLE PUBLIQUE DE BANKOUOP / A": [
            {
              station: "CHEFFERIE",
              voters: 2217
            },
          ],
          "ECOLE PUBLIQUE DE BUEA / A": [
            {
              station: "BUEA",
              voters: 362
            },
          ],
          "ECOLE PUBLIQUE DE KOUCHOUONTOUM / A": [
            {
              station: "KOUCHOUONTOUM",
              voters: 432
            },
          ],
          "ECOLE PUBLIQUE DE KOUOPTAMO / A": [
            {
              station: "KOUOPTAMO",
              voters: 2436
            },
          ],
          "ECOLE PUBLIQUE DE KOUPARA BAIGOM / A": [
            {
              station: "KOUPARA",
              voters: 1980
            },
            {
              station: "BAIGOM",
              voters: 426
            },
          ],
          "ECOLE PUBLIQUE DE KOUPARA KEUMAHOU /  A": [
            {
              station: "NJIRIPA",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE DE KOUPARA NJISSEN / A": [
            {
              station: "NJISSEN",
              voters: 607
            },
          ],
          "ECOLE PUBLIQUE DE NCHOUTNOUN / A": [
            {
              station: "NCHOUTNOUN",
              voters: 888
            },
          ],
          "ECOLE PUBLIQUE DE NDOUMKAIN / A": [
            {
              station: "NDOUMKAIN",
              voters: 1362
            },
          ],
          "ECOLE PUBLIQUE DE NDOUMKAIN SANKA / A": [
            {
              station: "NKOUNGOUM",
              voters: 485
            },
          ],
          "ECOLE PUBLIQUE DE NGAMBOUOII / A": [
            {
              station: "NGAMBOUO",
              voters: 419
            },
          ],
          "ECOLE PUBLIQUE DE NGBETNSOUEN I / A": [
            {
              station: "(MANKUT)",
              voters: 288
            },
          ],
          "ECOLE PUBLIQUE DE NGOUENDAM / A": [
            {
              station: "NGOUENDAM",
              voters: 685
            },
          ],
          "ECOLE PUBLIQUE DE NGOUENJIAMGBIE / A": [
            {
              station: "NGOUENJIAMGBIE",
              voters: 389
            },
          ],
          "ECOLE PUBLIQUE DE NGOUENJINGOUMBE /  A": [
            {
              station: "NGOUENJINGOUMBE",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE DE NJIMBAMBELE / A": [
            {
              station: "NJIMGBAMOU",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE DE NKOUNCHA / A": [
            {
              station: "NKOUNCHA",
              voters: 242
            },
          ],
          "ECOLE PUBLIQUE DE NKOUONJA / A": [
            {
              station: "NKOUONJA",
              voters: 461
            },
            {
              station: "(NIJTAPON)",
              voters: 461
            },
          ],
          "ECOLE PUBLIQUE NJINGOUMBE MARCHE / A": [
            {
              station: "MARCHE",
              voters: 1551
            },
            {
              station: "NKOUSONDE",
              voters: 628
            },
          ],
          "ESPLANADE DE LA MOSQUEE / A": [
            {
              station: "NKOUATKOUAT",
              voters: 166
            },
          ],
          "MISSION CATHOLIQUE DE KOUOMBOUM / A": [
            {
              station: "KOUOMBOUM",
              voters: 466
            },
          ],
          "MISSION CATHOLIQUE DE KOUOPTAMO / A": [
            {
              station: "NGOUMOU",
              voters: 409
            },
          ],
          "MISSION CATHOLIQUE DE NDOUMKAIN / A": [
            {
              station: "ROUTE",
              voters: 343
            },
          ],
          "MISSION CATHOLIQUE DE NGBETNSOUEN / A": [
            {
              station: "(NDOUMBAIN",
              voters: 396
            },
            {
              station: "B.)",
              voters: 396
            },
          ],
          "POSTE AGRICOLE / A": [
            {
              station: "NGOUENJITAPON",
              voters: 257
            },
          ],
        },
        "KOUTABA": {
          "BUREAU CAMPOST / A": [
            {
              station: "KOUNDJA",
              voters: 7470
            },
            {
              station: "MARIATOU",
              voters: 4740
            },
          ],
          "CENTRE DE PROMOTION DE LA FEMME / A": [
            {
              station: "VILLAGE",
              voters: 2730
            },
          ],
          "CENTRE DE SANTE DE KOUTIE / A": [
            {
              station: "KOUTIE",
              voters: 1283
            },
          ],
          "CENTRE DE SANTE INTEGRE NJINDOUM / A": [
            {
              station: "NJINDOUM",
              voters: 107
            },
          ],
          "E. PRIVEE FRANCO-ARABE DE NJITEFAM / A": [
            {
              station: "LANKOUM",
              voters: 310
            },
          ],
          "ECOLE DU CEBEC DE METAKET / A": [
            {
              station: "METAKET",
              voters: 264
            },
          ],
          "ECOLE PRIVEE LAIQUE DE L'ENTENTE / A": [
            {
              station: "NCHOUTFAH",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE BAFOLE / A": [
            {
              station: "BAFOLE",
              voters: 948
            },
          ],
          "ECOLE PUBLIQUE DE DIDANGO / A": [
            {
              station: "DIDANGO",
              voters: 489
            },
          ],
          "ECOLE PUBLIQUE DE KAGNAM / A": [
            {
              station: "KAGNAM",
              voters: 4421
            },
          ],
          "ECOLE PUBLIQUE DE KOUCHANKAP / A": [
            {
              station: "KOUCHANKAP",
              voters: 1695
            },
          ],
          "ECOLE PUBLIQUE DE KOUTOUKOUOP / A": [
            {
              station: "KOUMELAP",
              voters: 1284
            },
          ],
          "ECOLE PUBLIQUE DE MAPARE / A": [
            {
              station: "MAPARE",
              voters: 1021
            },
          ],
          "ECOLE PUBLIQUE DE MATABA / A": [
            {
              station: "MATABA",
              voters: 1313
            },
          ],
          "ECOLE PUBLIQUE DE NGOUNDOUP / A": [
            {
              station: "NGOUNDOUP",
              voters: 1753
            },
          ],
          "ECOLE PUBLIQUE DE NJIGWEN / A": [
            {
              station: "KOUMENKE",
              voters: 4098
            },
          ],
          "ECOLE PUBLIQUE DE NJIYIT / A": [
            {
              station: "NJIYIT",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE DE PONDIMOUN / A": [
            {
              station: "PONDIMOUN",
              voters: 1714
            },
          ],
          "ESPL. DE LA MOSQUEE DE MANKEN / A": [
            {
              station: "MANKEN",
              voters: 159
            },
          ],
          "GARE ROUTIERE DE KOUTABA / A": [
            {
              station: "TAYANDI",
              voters: 3652
            },
          ],
        },
        "MAGBA": {
          "BAPTIST SCHOOL MAGBA / A": [
            {
              station: "NYLON",
              voters: 3127
            },
          ],
          "E. BILINGUE DE MOUNKELE / A": [
            {
              station: "MOUNKELE",
              voters: 184
            },
            {
              station: "WALDE",
              voters: 184
            },
            {
              station: "MOUNTOUBIOU",
              voters: 184
            },
          ],
          "E. BILINGUE MACHINGHOM / A": [
            {
              station: "MACHINGHOM",
              voters: 145
            },
            {
              station: "NJOUM",
              voters: 300
            },
          ],
          "E.P. DE FOUBALOU / A": [
            {
              station: "FOUBALOU",
              voters: 126
            },
          ],
          "ECOLE BILINGUE LONG_STREET / A": [
            {
              station: "LONG",
              voters: 324
            },
            {
              station: "STREET",
              voters: 324
            },
          ],
          "ECOLE BILINGUE NGOUNSO / A": [
            {
              station: "NGOUNSO",
              voters: 1259
            },
          ],
          "ECOLE CATHOLIQUE DE JIMGBAKOUP / A": [
            {
              station: "JIMGBAKOUP",
              voters: 451
            },
          ],
          "ECOLE PUBLIQUE CBC DE NJIMKPARA / A": [
            {
              station: "NJIMKPARA",
              voters: 307
            },
          ],
          "ECOLE PUBLIQUE DE FOROUONGAIN / A": [
            {
              station: "FOROUONGAIN",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE DE KOURAP / A": [
            {
              station: "KOURAP",
              voters: 276
            },
          ],
          "ECOLE PUBLIQUE DE MACHOUTVI / A": [
            {
              station: "MACHOUTVI",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE MAKOUOMPARE / A": [
            {
              station: "MAKOUOMPARE",
              voters: 173
            },
          ],
          "ECOLE PUBLIQUE DE MANDOUGNAM / A": [
            {
              station: "MANDOUGNAM",
              voters: 95
            },
          ],
          "ECOLE PUBLIQUE DE MASSAROUM / A": [
            {
              station: "MASSAROUM",
              voters: 228
            },
          ],
          "ECOLE PUBLIQUE DE MATETCHIT / A": [
            {
              station: "MATETCHIT",
              voters: 202
            },
          ],
          "ECOLE PUBLIQUE DE MBAKOP / A": [
            {
              station: "MBAKOP",
              voters: 290
            },
          ],
          "ECOLE PUBLIQUE DE NGOUNSO / A": [
            {
              station: "NORD",
              voters: 260
            },
            {
              station: "NGOUOMEWOUO",
              voters: 260
            },
          ],
          "ECOLE PUBLIQUE DE NGOUOTOU / A": [
            {
              station: "NGOUOTOU",
              voters: 319
            },
          ],
          "ECOLE PUBLIQUE DE TAMTOUO / A": [
            {
              station: "TAMTOUO",
              voters: 164
            },
          ],
          "ECOLE PUBLIQUE FEJEMKWET / A": [
            {
              station: "FEJEMKWET",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE KHEGOUO / A": [
            {
              station: "KEGHOUO",
              voters: 118
            },
          ],
          "ECOLE PUBLIQUE MAKOUPA LE GRAND / A": [
            {
              station: "MAKOUPA",
              voters: 666
            },
            {
              station: "GRAND",
              voters: 834
            },
          ],
          "ECOLE PUBLIQUE MALOUNGOURE / A": [
            {
              station: "MALOUNGOURE",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE MAMBONKO / A": [
            {
              station: "MAMBONKO",
              voters: 592
            },
          ],
          "ECOLE PUBLIQUE MAMOKIMO / A": [
            {
              station: "MAMOKIMO",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE MAMOSSAFON / A": [
            {
              station: "MAMOSSAFON",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE MANDA / A": [
            {
              station: "MANDA",
              voters: 645
            },
          ],
          "ECOLE PUBLIQUE MANTE / A": [
            {
              station: "MANTE",
              voters: 658
            },
          ],
          "ECOLE PUBLIQUE MATTA BARRAGE / A": [
            {
              station: "BARRAGE",
              voters: 1791
            },
          ],
          "ECOLE PUBLIQUE MATTA VILLAGE / A": [
            {
              station: "MATTA",
              voters: 2099
            },
            {
              station: "VILLAGE",
              voters: 451
            },
          ],
          "ECOLE PUBLIQUE NYANZOURI / A": [
            {
              station: "NYANZOURI",
              voters: 134
            },
          ],
          "ECOLE PUBLIQUE POMI VILLAGE / A": [
            {
              station: "POMI",
              voters: 314
            },
          ],
          "FOYER MUNICIPAL / A": [
            {
              station: "FOSSOUOPOUO",
              voters: 681
            },
          ],
          "FUTAM / A": [
            {
              station: "FUTAM",
              voters: 136
            },
          ],
          "HOTEL DE VILLE DE MAGBA / A": [
            {
              station: "MAGBA",
              voters: 2724
            },
          ],
          "MAKOUPA LE PETIT / A": [
            {
              station: "PETIT",
              voters: 490
            },
          ],
          "MANOUORE / A": [
            {
              station: "MANOUORE",
              voters: 195
            },
          ],
          "MISSION CATHO. MAMBOUNGAM / A": [
            {
              station: "MAMBOUNGAM",
              voters: 131
            },
          ],
          "NGOUSSEM MARCHE / A": [
            {
              station: "NGOUSSEM",
              voters: 322
            },
          ],
          "NJOUM I / A": [
            {
              station: "NJOUM1",
              voters: 103
            },
          ],
          "POMI BORD MARCHE / A": [
            {
              station: "BORD",
              voters: 337
            },
          ],
          "POSTE AGRICOLE DE KOULA / A": [
            {
              station: "KOULA",
              voters: 271
            },
          ],
          "POSTE DES DOUANES / A": [
            {
              station: "NGONZANG",
              voters: 2234
            },
          ],
        },
        "MALANTOUEN": {
          "ECOLE CATHOLIQUE DE MARAH / A": [
            {
              station: "MARAH",
              voters: 148
            },
          ],
          "ECOLE F. ISLAMIQUE CITE DES P.  MAGNAMPA / A": [
            {
              station: "MAGNAMPA",
              voters: 390
            },
          ],
          "ECOLE FRANCO ISLAMIQUE NJINGBABAYIT /  A": [
            {
              station: "NJINGBABAYIT",
              voters: 330
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE FERIPA / A": [
            {
              station: "VILLAGE",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE MANSOM / A": [
            {
              station: "MANSOM",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE DE MACHU / A": [
            {
              station: "MACHU",
              voters: 167
            },
          ],
          "ECOLE PUBLIQUE DE MAFOUATIE / A": [
            {
              station: "MAFOUATIE",
              voters: 324
            },
          ],
          "ECOLE PUBLIQUE DE MAGHAM / A": [
            {
              station: "MAGHAM",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE MAHOUA / A": [
            {
              station: "MAHOUA",
              voters: 671
            },
          ],
          "ECOLE PUBLIQUE DE MAKOUTAM / A": [
            {
              station: "MAKOUTAM",
              voters: 732
            },
          ],
          "ECOLE PUBLIQUE DE MAKOUTMBOU / A": [
            {
              station: "MANKOUTMBOU",
              voters: 652
            },
          ],
          "ECOLE PUBLIQUE DE MAKPA I / A": [
            {
              station: "MAKPA",
              voters: 937
            },
          ],
          "ECOLE PUBLIQUE DE MALIEN / A": [
            {
              station: "MALIEN",
              voters: 624
            },
          ],
          "ECOLE PUBLIQUE DE MAMBANTOU / A": [
            {
              station: "MAMBANTOU",
              voters: 321
            },
          ],
          "ECOLE PUBLIQUE DE MAMBICHAM / A": [
            {
              station: "MAMBICHAM",
              voters: 370
            },
          ],
          "ECOLE PUBLIQUE DE MAMBOUOMBOU / A": [
            {
              station: "MAMBOUOMBOU",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE DE MANDA / A": [
            {
              station: "MANDA",
              voters: 438
            },
          ],
          "ECOLE PUBLIQUE DE MANDINGA CHEFFERIE  /A": [
            {
              station: "MNADINGA",
              voters: 117
            },
            {
              station: "CHEFFERIE",
              voters: 117
            },
          ],
          "ECOLE PUBLIQUE DE MANDINGA PLATEAU / A": [
            {
              station: "MANDINGA",
              voters: 331
            },
            {
              station: "PLATEAU",
              voters: 331
            },
          ],
          "ECOLE PUBLIQUE DE MANGAMBI / A": [
            {
              station: "MANGAMBI",
              voters: 202
            },
          ],
          "ECOLE PUBLIQUE DE MANJE KOUTOU / A": [
            {
              station: "MANJE",
              voters: 816
            },
            {
              station: "KOUTOU",
              voters: 816
            },
          ],
          "ECOLE PUBLIQUE DE MANJOUOM / A": [
            {
              station: "MANJOUOM",
              voters: 676
            },
            {
              station: "MATIAPON",
              voters: 733
            },
          ],
          "ECOLE PUBLIQUE DE MANTOUM PRISON / A": [
            {
              station: "MANTOUM",
              voters: 1060
            },
          ],
          "ECOLE PUBLIQUE DE MAPOU NJIPOUTE / A": [
            {
              station: "MAPOU",
              voters: 522
            },
            {
              station: "NJIPOUTE",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE DE MAPOUAYAM / A": [
            {
              station: "MAPOUAYAM",
              voters: 323
            },
          ],
          "ECOLE PUBLIQUE DE MARAPNDOUM / A": [
            {
              station: "MARAPNDOUM",
              voters: 559
            },
          ],
          "ECOLE PUBLIQUE DE MATACHOM / A": [
            {
              station: "MATACHOM",
              voters: 604
            },
          ],
          "ECOLE PUBLIQUE DE MATOUPOU / A": [
            {
              station: "MATOUPOU",
              voters: 1372
            },
          ],
          "ECOLE PUBLIQUE DE NDETNGA / A": [
            {
              station: "NDETNGA",
              voters: 252
            },
          ],
          "ECOLE PUBLIQUE DE NJIGOUHOUN / A": [
            {
              station: "MANGUIEMBOU",
              voters: 1067
            },
          ],
          "ECOLE PUBLIQUE DE NJINGA / A": [
            {
              station: "NJINGA",
              voters: 702
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE MAL. / A": [
            {
              station: "MALANTOUEN",
              voters: 2851
            },
            {
              station: "CENTRE",
              voters: 2526
            },
          ],
          "EP MERINGOUM / A": [
            {
              station: "MAKOUP",
              voters: 79
            },
          ],
        },
        "MASSANGAM": {
          "BAOBAB EP / A": [
            {
              station: "MATOUFA",
              voters: 1077
            },
          ],
          "DISPENSAIRE EEC / A": [
            {
              station: "MANSOUEN",
              voters: 3901
            },
            {
              station: "FOYOUOM",
              voters: 1040
            },
            {
              station: "NJA",
              voters: 792
            },
          ],
          "E. PUBLIC DE MARAP / A": [
            {
              station: "MARAP",
              voters: 76
            },
          ],
          "E. PUBLIC DE SABEL BANI / A": [
            {
              station: "BANI",
              voters: 53
            },
          ],
          "FOYER MUNICIPAL / A": [
            {
              station: "MASSANGAM",
              voters: 2179
            },
          ],
          "KOUTOU LANDEN EP / A": [
            {
              station: "KOUTOU",
              voters: 347
            },
            {
              station: "LANDEN",
              voters: 347
            },
          ],
          "MACHATOUM EEC / A": [
            {
              station: "MACHATOUM",
              voters: 699
            },
          ],
          "MACHOUTPOU EP / A": [
            {
              station: "MACHOUTPOU",
              voters: 241
            },
          ],
          "MACHU EP / A": [
            {
              station: "MACHU",
              voters: 332
            },
          ],
          "MAGNA EP / A": [
            {
              station: "MAGNA",
              voters: 449
            },
          ],
          "MAGNITKOM EP / A": [
            {
              station: "MAGNITKOM",
              voters: 280
            },
          ],
          "MAKOM CHEFFERIE EP / A": [
            {
              station: "MAKOM",
              voters: 948
            },
          ],
          "MAKOUOPSAP EP / A": [
            {
              station: "MAKOUOPSAP",
              voters: 248
            },
            {
              station: "MASSAGAM",
              voters: 2150
            },
          ],
          "MAKPANTOUM MARCHE / A": [
            {
              station: "MAKPANTOUM",
              voters: 220
            },
          ],
          "MALANDEN EP / A": [
            {
              station: "MALANDEN",
              voters: 601
            },
          ],
          "MALOUA EP / A": [
            {
              station: "MALOUA",
              voters: 242
            },
          ],
          "MALOUNG EP / A": [
            {
              station: "MALOUNG",
              voters: 216
            },
          ],
          "MAMBOUONKOU EP / A": [
            {
              station: "MAMBOUONKOU",
              voters: 239
            },
          ],
          "MANCHA CHEFFERIE EP / A": [
            {
              station: "MANCHA",
              voters: 1162
            },
          ],
          "MANCHA MARCHE / A": [
            {
              station: "MANDARE",
              voters: 732
            },
          ],
          "MANCHA YOLO EP / A": [
            {
              station: "YOLO",
              voters: 153
            },
          ],
          "MANDARE EP / A": [
            {
              station: "SABEL",
              voters: 366
            },
            {
              station: "BANNI",
              voters: 313
            },
          ],
          "MANDIYANG EP / A": [
            {
              station: "MANDIYANG",
              voters: 365
            },
          ],
          "MANKAKOUN EP / A": [
            {
              station: "MANKAKOUN",
              voters: 281
            },
          ],
          "MANKEMBOUOT EFI / A": [
            {
              station: "MANKEMBOUOT",
              voters: 359
            },
          ],
          "MANKOUNKOU EP / A": [
            {
              station: "MANKOUNKOU",
              voters: 392
            },
          ],
          "MANKOUOMBI CENTRE EP / A": [
            {
              station: "MANKOUOMBI",
              voters: 1550
            },
          ],
          "MANKOUOMBI SAVANE HANGAR / A": [
            {
              station: "SAVANE",
              voters: 131
            },
          ],
          "MANSEN EP / A": [
            {
              station: "MANSEN",
              voters: 179
            },
          ],
          "MANSOUEN EP / A": [
            {
              station: "MAMBAIN",
              voters: 756
            },
          ],
          "MARIPA CEBEC / A": [
            {
              station: "MARIPA",
              voters: 418
            },
          ],
          "MATAM EP / A": [
            {
              station: "MATAM",
              voters: 575
            },
          ],
          "MATEMBAIN EP / A": [
            {
              station: "MATEMBAIN",
              voters: 323
            },
          ],
          "MAYAKOUE EP / A": [
            {
              station: "MAYAKOUE",
              voters: 279
            },
          ],
          "MOSQUEE MAKOUOPCHICHI / A": [
            {
              station: "MAKOUOPCHICHI",
              voters: 97
            },
          ],
          "NJIMBETGWEN EP / A": [
            {
              station: "NJIMBETGWEN",
              voters: 393
            },
          ],
          "NJINGOUOT EP / A": [
            {
              station: "NJINGOUOT",
              voters: 237
            },
          ],
          "NJINTOUM EP / A": [
            {
              station: "MAMOGNAM",
              voters: 1570
            },
          ],
          "NJISSANGAM EEC / A": [
            {
              station: "NJISSANGAM",
              voters: 224
            },
          ],
          "SCIERIE EP / A": [
            {
              station: "NJINDOUM",
              voters: 225
            },
          ],
        },
        "NJIMOM": {
          "CEBEC MALOURE / A": [
            {
              station: "MALOURE",
              voters: 452
            },
          ],
          "CES DE MANKI / A": [
            {
              station: "SUMBE",
              voters: 390
            },
          ],
          "CSI FOYET / A": [
            {
              station: "FOYET",
              voters: 939
            },
          ],
          "E. PUBLIC DE MAMAREN / A": [
            {
              station: "MAMAREN",
              voters: 223
            },
          ],
          "E. PUBLIC DE NJIKOUOCHIE / A": [
            {
              station: "NJIKOUOCHIE",
              voters: 110
            },
          ],
          "ECOLE CORANIQUE / A": [
            {
              station: "MAGHENFAH",
              voters: 160
            },
          ],
          "EFI MAFOMYA / A": [
            {
              station: "MAFOMYA",
              voters: 228
            },
            {
              station: "MANKI",
              voters: 2554
            },
            {
              station: "CHEFFERIE",
              voters: 1495
            },
          ],
          "EP FENGOU / A": [
            {
              station: "FENGOU",
              voters: 228
            },
            {
              station: "NJIMOM",
              voters: 2209
            },
          ],
          "EP FOLAP / A": [
            {
              station: "FOLAP",
              voters: 755
            },
          ],
          "EP KOUKOUET / A": [
            {
              station: "MAKUETVU",
              voters: 1052
            },
          ],
          "EP KOUSSAM / A": [
            {
              station: "KOUSSAM",
              voters: 1162
            },
          ],
          "EP MABOUO / A": [
            {
              station: "MABOUO",
              voters: 363
            },
          ],
          "EP MACHOUTMANOUN / A": [
            {
              station: "MANCHOUTMANOUN",
              voters: 259
            },
          ],
          "EP MACHOUTVI / A": [
            {
              station: "MACHOUTVI",
              voters: 614
            },
          ],
          "EP MAGHAIT / A": [
            {
              station: "MAGHAIT",
              voters: 1550
            },
            {
              station: "CENTRE",
              voters: 1708
            },
          ],
          "EP MAKAM / A": [
            {
              station: "MAKAM",
              voters: 373
            },
          ],
          "EP MAKEBA / A": [
            {
              station: "KEBA",
              voters: 338
            },
          ],
          "EP MAMATIE / A": [
            {
              station: "MAMATIE",
              voters: 323
            },
          ],
          "EP MANKOUNVI / A": [
            {
              station: "MANKOUNVI",
              voters: 168
            },
          ],
          "EP MANSOM / A": [
            {
              station: "MANSOM",
              voters: 347
            },
          ],
          "EP MAYO / A": [
            {
              station: "MAYO",
              voters: 939
            },
          ],
          "EP MAYOUOM I / A": [
            {
              station: "MAYOUOM",
              voters: 1366
            },
          ],
          "EP NJIFOMGHAIT / A": [
            {
              station: "FOMGHAIT",
              voters: 165
            },
          ],
          "EP TAMTOUO / A": [
            {
              station: "TAMTOUO",
              voters: 391
            },
          ],
        },
      },
      "KOUNG-KHI": {
        "BAYANGAM": {
          "CASE DE SANTE DE YENOM / A": [
            {
              station: "YENOM",
              voters: 228
            },
          ],
          "CEBEC CHILA / A": [
            {
              station: "FIEUCHIP",
              voters: 374
            },
            {
              station: "TOUNANG",
              voters: 374
            },
          ],
          "CEBEC KADEPA / A": [
            {
              station: "KAKO",
              voters: 174
            },
          ],
          "CENTRE DE SANTE DE TSEP / A": [
            {
              station: "TSEP",
              voters: 199
            },
          ],
          "ECOLE CATHOLIQUE DE MBE / A": [
            {
              station: "DEPTSE",
              voters: 467
            },
          ],
          "ECOLE PUBLIQUE BANDREFAM / A": [
            {
              station: "BAGONKONG",
              voters: 352
            },
            {
              station: "BATCHI",
              voters: 352
            },
            {
              station: "TOULA",
              voters: 643
            },
            {
              station: "(BADREFAM)",
              voters: 352
            },
          ],
          "ECOLE PUBLIQUE BATOUFAM CHEFFERIE / A": [
            {
              station: "KAASSE",
              voters: 291
            },
            {
              station: "(BATOUFAM)",
              voters: 291
            },
          ],
          "ECOLE PUBLIQUE BATOUFAM MARCHE / A": [
            {
              station: "KAMKIEU",
              voters: 740
            },
            {
              station: "TSOUGUI",
              voters: 740
            },
          ],
          "ECOLE PUBLIQUE KAGNIE / A": [
            {
              station: "DJEMGANG",
              voters: 487
            },
            {
              station: "LEKOUA",
              voters: 487
            },
            {
              station: "NGUIHOP",
              voters: 487
            },
          ],
          "ECOLE PUBLIQUE KING-PLACE BAYANGAM /  A": [
            {
              station: "DJA'A",
              voters: 347
            },
            {
              station: "TOCHE",
              voters: 347
            },
            {
              station: "NKE",
              voters: 874
            },
          ],
          "ECOLE PUBLIQUE MBA / A": [
            {
              station: "MBA",
              voters: 765
            },
            {
              station: "TOUGOUE-MBEM",
              voters: 765
            },
          ],
          "ECOLE PUBLIQUE TCHALA / A": [
            {
              station: "DJEUVE",
              voters: 848
            },
            {
              station: "KAGONGOUE",
              voters: 848
            },
            {
              station: "TOMKIEU",
              voters: 848
            },
          ],
          "ECOLE PUBLIQUE TOUGOUE / A": [
            {
              station: "TOUGOUE-MEUDJU",
              voters: 322
            },
            {
              station: "TOUGOUE-MPOU",
              voters: 322
            },
          ],
          "LYCEE DE BATOUFAM / A": [
            {
              station: "FAMLA",
              voters: 299
            },
          ],
          "LYCEE DE KASSAP / A": [
            {
              station: "KASSAP",
              voters: 816
            },
            {
              station: "TOCHOM",
              voters: 816
            },
          ],
          "MISSION CATHOLIQUE DE MBENG / A": [
            {
              station: "KOUOPOU",
              voters: 699
            },
            {
              station: "MBENG",
              voters: 699
            },
            {
              station: "TOMGHEM",
              voters: 986
            },
          ],
          "POSTE AGRICOLE / A": [
            {
              station: "BAKALA",
              voters: 235
            },
            {
              station: "BATCHIEU",
              voters: 235
            },
          ],
        },
        "DEMDING": {
          "CENTRE SANTE FAMGHOUO / A": [
            {
              station: "FAMGHOUO",
              voters: 926
            },
            {
              station: "MVEULE",
              voters: 1251
            },
          ],
          "CES DEMDING / A": [
            {
              station: "NDENG",
              voters: 486
            },
          ],
          "ECOLE BANGANG FONDJI / A": [
            {
              station: "BANGANG",
              voters: 363
            },
            {
              station: "FONDJI",
              voters: 363
            },
          ],
          "ECOLE PUBLIQUE DJIOGO / A": [
            {
              station: "DJIOGO",
              voters: 167
            },
          ],
          "ECOLE PUBLIQUE FAMLA 1 / A": [
            {
              station: "FAMLA",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE FAMLA 2 / A": [
            {
              station: "FAMLA2",
              voters: 971
            },
            {
              station: "SEDEMDOM",
              voters: 879
            },
            {
              station: "PALMERAIE",
              voters: 879
            },
          ],
          "ECOLE PUBLIQUE FOMAYUM / A": [
            {
              station: "FOMAYUM",
              voters: 177
            },
          ],
          "ECOLE PUBLIQUE FONEGOM / A": [
            {
              station: "FONEGOM",
              voters: 450
            },
          ],
          "ECOLE PUBLIQUE MAGUE / A": [
            {
              station: "MAGUE",
              voters: 277
            },
          ],
          "ECOLE PUBLIQUE MOUTCHA / A": [
            {
              station: "MOUTCHA",
              voters: 369
            },
          ],
          "FOYER DJIKO / A": [
            {
              station: "DJIKO",
              voters: 142
            },
          ],
          "FOYER FAMTUM / A": [
            {
              station: "FAMTUM",
              voters: 165
            },
          ],
          "FOYER MBIENG DJEBEM / A": [
            {
              station: "MBIENG-DJEBEM",
              voters: 105
            },
          ],
          "FOYER SEDEMBOM / A": [
            {
              station: "SEDEMBOM",
              voters: 407
            },
          ],
          "MISSION CATHOLIQUE DE FAMGHOUO / A": [
            {
              station: "POU",
              voters: 1567
            },
            {
              station: "DJEBEM",
              voters: 1567
            },
          ],
          "MISSION CATHOLIQUE HOCK / A": [
            {
              station: "HOCK",
              voters: 128
            },
          ],
          "MISSION CATHOLIQUE MVUH / A": [
            {
              station: "MVUH",
              voters: 553
            },
          ],
        },
        "PETE-BANDJOUN": {
          "CEBEC DJIOMGHOUO / A": [
            {
              station: "DJIOMGHOUO",
              voters: 965
            },
          ],
          "CEBEC KATSELA / A": [
            {
              station: "KATSELA",
              voters: 501
            },
          ],
          "CEBEC TOTSELA / A": [
            {
              station: "TOTSELA",
              voters: 212
            },
          ],
          "COLLEGE ELIE ALLEGRET / A": [
            {
              station: "MBIENG",
              voters: 1092
            },
          ],
          "ECOLE CATHOLIQUE DE TSE / A": [
            {
              station: "TSE",
              voters: 220
            },
          ],
          "ECOLE CATHOLIQUE DJIOGO / A": [
            {
              station: "FAMLENG",
              voters: 1301
            },
          ],
          "ECOLE CATHOLIQUE HA'A / A": [
            {
              station: "HA'A",
              voters: 716
            },
          ],
          "ECOLE CATHOLIQUE KAKOUO / A": [
            {
              station: "KAKOUO",
              voters: 285
            },
            {
              station: "TOKOUO",
              voters: 2267
            },
          ],
          "ECOLE CATHOLIQUE KAMGO / A": [
            {
              station: "KAMGO",
              voters: 589
            },
          ],
          "ECOLE CATHOLIQUE ST ALBERT / A": [
            {
              station: "MBOUO",
              voters: 2568
            },
            {
              station: "PETE",
              voters: 5824
            },
            {
              station: "CHARLES",
              voters: 2529
            },
          ],
          "ECOLE CATHOLIQUE TOUOBA / A": [
            {
              station: "TOUOBA",
              voters: 385
            },
          ],
          "ECOLE PILOTE DE MAGOM / A": [
            {
              station: "MAGOM",
              voters: 453
            },
          ],
          "ECOLE PUBLIQUE DENGBEM / A": [
            {
              station: "DENGBEM",
              voters: 456
            },
          ],
          "ECOLE PUBLIQUE DJA / A": [
            {
              station: "DJA",
              voters: 1665
            },
          ],
          "ECOLE PUBLIQUE DJIOPA / A": [
            {
              station: "DJIOPA",
              voters: 314
            },
            {
              station: "LEMLA",
              voters: 314
            },
            {
              station: "SEKAKOUO",
              voters: 314
            },
          ],
          "ECOLE PUBLIQUE DOMLO / A": [
            {
              station: "DOMLO",
              voters: 139
            },
          ],
          "ECOLE PUBLIQUE HIALA / A": [
            {
              station: "KING-PLACE",
              voters: 901
            },
            {
              station: "TSECHA",
              voters: 901
            },
            {
              station: "TSELENG",
              voters: 901
            },
          ],
          "ECOLE PUBLIQUE HOUA / A": [
            {
              station: "HOUA",
              voters: 912
            },
          ],
          "ECOLE PUBLIQUE KAYO / A": [
            {
              station: "KAYO",
              voters: 395
            },
            {
              station: "LEMGO",
              voters: 395
            },
          ],
          "ECOLE PUBLIQUE KENG / A": [
            {
              station: "KENG",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE MBEMTUM / A": [
            {
              station: "MBEMTUM",
              voters: 928
            },
          ],
          "ECOLE PUBLIQUE MTIEKI / A": [
            {
              station: "MTIEKI",
              voters: 566
            },
          ],
          "ECOLE PUBLIQUE SOUNG / A": [
            {
              station: "SOUNG",
              voters: 757
            },
          ],
          "ECOLE PUBLIQUE TESSE / A": [
            {
              station: "TESSE",
              voters: 496
            },
          ],
          "ECOLE PUBLIQUE TSEGHEM / A": [
            {
              station: "TSEGHEM",
              voters: 438
            },
          ],
          "ECOLE PUBLIQUE TSELA / A": [
            {
              station: "HOUOPOUO",
              voters: 520
            },
          ],
          "FOYER CULTUREL DJIOGUE / A": [
            {
              station: "DJIOGUE",
              voters: 167
            },
          ],
          "FOYER CULTUREL DJIONE / A": [
            {
              station: "DJIONE",
              voters: 88
            },
          ],
          "FOYER CULTUREL YOM / A": [
            {
              station: "YOM",
              voters: 2147
            },
          ],
          "LYCEE CLASSIQUE BANDJOUN / A": [
            {
              station: "LYCEE",
              voters: 468
            },
          ],
          "PETE CARRIERE PLACE PUBLIQUE / A": [
            {
              station: "CARRIERE",
              voters: 849
            },
          ],
          "PETE ECOLE PUBLIQUE DU CENTRE / A": [
            {
              station: "CENTRE",
              voters: 1978
            },
          ],
          "PLACE PUBLIQUE MAFO TOUKAM / A": [
            {
              station: "MOUWE",
              voters: 511
            },
          ],
        },
      },
      "MENOUA": {
        "DSCHANG": {
          "CENTRE DE SANTE DE FONGO-NDENG / A": [
            {
              station: "FONGO",
              voters: 105
            },
            {
              station: "-NDENG",
              voters: 105
            },
            {
              station: "NGUI",
              voters: 4814
            },
            {
              station: "MEGUIALA",
              voters: 105
            },
          ],
          "CENTRE SANTE DE MFEU / A": [
            {
              station: "DIAKA",
              voters: 535
            },
            {
              station: "MFEU",
              voters: 535
            },
          ],
          "COL. NOTRE DAME DE L'IMMAT. C.(CONODIC)  /A": [
            {
              station: "TSINFEM",
              voters: 2790
            },
          ],
          "COLLEGE ALBERT CAMUS / A": [
            {
              station: "LAC",
              voters: 521
            },
          ],
          "COLLEGE INTELLEXI / A": [
            {
              station: "TCHOUALE",
              voters: 3782
            },
          ],
          "COLLEGE MENOUA ESPOIR / A": [
            {
              station: "FEMTEU",
              voters: 7145
            },
            {
              station: "KELENG",
              voters: 5837
            },
          ],
          "DELEGATION D'ARROND. AGRICULTURE / A": [
            {
              station: "ASSEITSA",
              voters: 1690
            },
            {
              station: "IRAD",
              voters: 2321
            },
            {
              station: "NYLON",
              voters: 3680
            },
            {
              station: "REGIE",
              voters: 1690
            },
          ],
          "DELEGATION DEP. AFFAIRES SOCIALES / A": [
            {
              station: "GENIE",
              voters: 2764
            },
            {
              station: "RURAL",
              voters: 2764
            },
          ],
          "DELEGATION DEP. D'ELEVAGE / A": [
            {
              station: "LEFOCK",
              voters: 1022
            },
          ],
          "DELEGATION DEP. SPORTS E. PHYSIQUE / A": [
            {
              station: "ADMINISTRATIF",
              voters: 1853
            },
          ],
          "ECOLE CATHOLIQUE DE BATA / A": [
            {
              station: "FEUMBING",
              voters: 149
            },
            {
              station: "FOTO",
              voters: 3100
            },
            {
              station: "ATHA",
              voters: 149
            },
            {
              station: "NKEULI",
              voters: 149
            },
            {
              station: "TSINGLAH",
              voters: 149
            },
          ],
          "ECOLE CATHOLIQUE DE FOTETSA / A": [
            {
              station: "ZEMPOUET",
              voters: 456
            },
          ],
          "ECOLE CATHOLIQUE SAINT ALBERT / A": [
            {
              station: "CANNE",
              voters: 949
            },
            {
              station: "SUCRE",
              voters: 949
            },
            {
              station: "QUARTIER",
              voters: 3497
            },
            {
              station: "HAOUSSA",
              voters: 1644
            },
          ],
          "ECOLE CATHOLIQUE SAINT MATHIAS / A": [
            {
              station: "FOSSONG",
              voters: 6028
            },
            {
              station: "WENTCHENG",
              voters: 6028
            },
            {
              station: "AZUENLA",
              voters: 5719
            },
            {
              station: "MINGOU",
              voters: 4054
            },
            {
              station: "TONCHOU",
              voters: 4054
            },
          ],
          "ECOLE CATHOLIQUE SAINT MICHEL / A": [
            {
              station: "MELANG",
              voters: 2069
            },
            {
              station: "TAPALE",
              voters: 3464
            },
            {
              station: "TOUOLE",
              voters: 674
            },
          ],
          "ECOLE MATERNELLE DE LA GENDARMERIE /  A": [
            {
              station: "CAMP",
              voters: 256
            },
            {
              station: "GENDARMERIE",
              voters: 256
            },
          ],
          "ECOLE MATERNELLE LES HIRONDELLES / A": [
            {
              station: "FEMLA",
              voters: 396
            },
            {
              station: "ZEMDA",
              voters: 1963
            },
          ],
          "ECOLE MATERNELLE MARCHE B / A": [
            {
              station: "URBAIN",
              voters: 1419
            },
            {
              station: "MARCHE",
              voters: 1419
            },
            {
              station: "MECHIEU",
              voters: 3140
            },
          ],
          "ECOLE PRIVEE DES INFIRMIERS / A": [
            {
              station: "AVIATION",
              voters: 932
            },
            {
              station: "YAGUEM",
              voters: 1305
            },
          ],
          "ECOLE PUBLIQUE ANNEXE DE FOREKE / A": [
            {
              station: "ATHOUMETO",
              voters: 3294
            },
            {
              station: "MEKA'A",
              voters: 7520
            },
            {
              station: "ZENMEH",
              voters: 3294
            },
          ],
          "ECOLE PUBLIQUE D'ATOCHI / A": [
            {
              station: "ATOCHI",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE D'ESSANG / A": [
            {
              station: "AZUENG",
              voters: 225
            },
            {
              station: "ESSANG",
              voters: 225
            },
            {
              station: "MBILE",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE DE BANKI / A": [
            {
              station: "APOUH",
              voters: 450
            },
            {
              station: "BANKI",
              voters: 356
            },
          ],
          "ECOLE PUBLIQUE DE FOMEGUIA / A": [
            {
              station: "FONGO-",
              voters: 779
            },
            {
              station: "NDENG",
              voters: 779
            },
            {
              station: "TSIMBING",
              voters: 1472
            },
            {
              station: "FONGO-NDENG",
              voters: 2377
            },
            {
              station: "FOMEGUIA",
              voters: 237
            },
            {
              station: "MEZENG",
              voters: 237
            },
            {
              station: "NDJIA",
              voters: 237
            },
          ],
          "ECOLE PUBLIQUE DE FONAKEUKEU / A": [
            {
              station: "FONAKEUKEU",
              voters: 764
            },
          ],
          "ECOLE PUBLIQUE DE FOTCHOULI / A": [
            {
              station: "FOTCHOULI",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE FOTETSA / A": [
            {
              station: "ASSUE",
              voters: 230
            },
            {
              station: "AWONLA",
              voters: 230
            },
            {
              station: "MELAH",
              voters: 230
            },
          ],
          "ECOLE PUBLIQUE DE FOTO / A": [
            {
              station: "FOTETSA",
              voters: 6410
            },
            {
              station: "TOULA",
              voters: 5890
            },
            {
              station: "NDOUNGAH",
              voters: 7047
            },
          ],
          "ECOLE PUBLIQUE DE FOTSEM LESSING / A": [
            {
              station: "AZONG",
              voters: 253
            },
            {
              station: "FOTSEM",
              voters: 253
            },
            {
              station: "LESSING",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE DE LA VALLEE / A": [
            {
              station: "VALLEE",
              voters: 1825
            },
          ],
          "ECOLE PUBLIQUE DE LEFANG / A": [
            {
              station: "LEFANG",
              voters: 513
            },
            {
              station: "NKOP",
              voters: 513
            },
          ],
          "ECOLE PUBLIQUE DE LEFFE / A": [
            {
              station: "LEFFE",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE LEPPE / A": [
            {
              station: "LEPPE",
              voters: 116
            },
            {
              station: "TOULEPE",
              voters: 699
            },
          ],
          "ECOLE PUBLIQUE DE LETSA / A": [
            {
              station: "LETSA",
              voters: 1525
            },
          ],
          "ECOLE PUBLIQUE DE LIKONG / A": [
            {
              station: "AFEMLITAGLI",
              voters: 492
            },
            {
              station: "FOREKE",
              voters: 14985
            },
            {
              station: "ATSAGOUA",
              voters: 492
            },
            {
              station: "LIKONG",
              voters: 986
            },
          ],
          "ECOLE PUBLIQUE DE LINGANG / A": [
            {
              station: "ZEUKENG",
              voters: 411
            },
            {
              station: "LESSE",
              voters: 411
            },
            {
              station: "LINGANG",
              voters: 411
            },
            {
              station: "MEFET",
              voters: 411
            },
          ],
          "ECOLE PUBLIQUE DE LIPO / A": [
            {
              station: "KEMDONNA",
              voters: 436
            },
            {
              station: "LIPO",
              voters: 1193
            },
            {
              station: "POUH",
              voters: 1193
            },
          ],
          "ECOLE PUBLIQUE DE LITAGLI / A": [
            {
              station: "LITAGLI",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE DE LITIEU / A": [
            {
              station: "LITIEU",
              voters: 670
            },
          ],
          "ECOLE PUBLIQUE DE NDAH / A": [
            {
              station: "LAP",
              voters: 1096
            },
            {
              station: "NDAH",
              voters: 202
            },
            {
              station: "NNEH",
              voters: 202
            },
            {
              station: "TOULE,NLEH",
              voters: 4158
            },
          ],
          "ECOLE PUBLIQUE DE NDENKOP / A": [
            {
              station: "NDENKOP",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE DE NGUI / A": [
            {
              station: "MINGMETO",
              voters: 3190
            },
          ],
          "ECOLE PUBLIQUE DE NOU / A": [
            {
              station: "NOU",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE NTEINGUE / A": [
            {
              station: "NTEINGUE",
              voters: 1635
            },
            {
              station: "ZENG",
              voters: 545
            },
            {
              station: "MIENDAP",
              voters: 545
            },
            {
              station: "NTISSAH",
              voters: 545
            },
            {
              station: "TISSAH",
              voters: 545
            },
            {
              station: "FALAISE",
              voters: 545
            },
          ],
          "ECOLE PUBLIQUE DE NTSEU / A": [
            {
              station: "NTSEU",
              voters: 89
            },
          ],
          "ECOLE PUBLIQUE DE NZEMPOUET / A": [
            {
              station: "MVEUH",
              voters: 241
            },
            {
              station: "TCHOUADENG",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE DE NZIDENG / A": [
            {
              station: "NZIDENG",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE DE NZINTSO / A": [
            {
              station: "ATOUPOU",
              voters: 668
            },
            {
              station: "MINGHONG",
              voters: 1690
            },
            {
              station: "NZINTSO",
              voters: 668
            },
            {
              station: "TSINTSUET",
              voters: 668
            },
          ],
          "ECOLE PUBLIQUE DE NZONG / A": [
            {
              station: "NTEUH",
              voters: 583
            },
            {
              station: "NZONG",
              voters: 583
            },
          ],
          "ECOLE PUBLIQUE DE TOUTSANG / A": [
            {
              station: "TOUTSANG",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE DE TSINGLA / A": [
            {
              station: "TSINGLA",
              voters: 94
            },
          ],
          "ECOLE PUBLIQUE DE TSINKOP VILLAGE / A": [
            {
              station: "VILLAGE",
              voters: 1940
            },
          ],
          "ECOLE PUBLIQUE DU PLATEAU / A": [
            {
              station: "CENTRE",
              voters: 3327
            },
            {
              station: "COMMERCIAL",
              voters: 1908
            },
            {
              station: "FIANKOP",
              voters: 9943
            },
            {
              station: "TSINKOP",
              voters: 5560
            },
          ],
          "ECOLE PUBLIQUE GROUPE2 / A": [
            {
              station: "MADAGASCAR",
              voters: 1990
            },
          ],
          "ECOLE PUBLIQUE GROUPE3 / A": [
            {
              station: "MAKEMTSA",
              voters: 2213
            },
          ],
          "FOYER ATCHOUNZONG / A": [
            {
              station: "ATCHOUAZONG",
              voters: 132
            },
          ],
          "FOYER ATOUPOUH / A": [
            {
              station: "MAKAATOUPOUH",
              voters: 163
            },
          ],
          "FOYER COM. FOTO KING PLACE / A": [
            {
              station: "KING",
              voters: 483
            },
            {
              station: "PLACE",
              voters: 483
            },
            {
              station: "NGATSI",
              voters: 483
            },
          ],
          "FOYER FOGUE-SAH / A": [
            {
              station: "FOGUE-SAH",
              voters: 64
            },
          ],
          "FOYER NGOUA / A": [
            {
              station: "NGOUA",
              voters: 162
            },
          ],
          "FOYER SITEU / A": [
            {
              station: "SITEU",
              voters: 561
            },
            {
              station: "TITIA",
              voters: 561
            },
          ],
          "FOYER TOULA DEZONG / A": [
            {
              station: "DEZONG",
              voters: 759
            },
          ],
          "FOYER TOULA FOGUIMGO / A": [
            {
              station: "BASA",
              voters: 403
            },
            {
              station: "FOGUIMGO",
              voters: 403
            },
            {
              station: "METEU",
              voters: 403
            },
            {
              station: "TSIEZA",
              voters: 706
            },
          ],
          "FOYER WA / A": [
            {
              station: "BAWA",
              voters: 159
            },
            {
              station: "FEMTSING",
              voters: 159
            },
            {
              station: "TSINTSET",
              voters: 159
            },
          ],
          "INSTITUT FOYAGUEM / A": [
            {
              station: "KELENG,",
              voters: 373
            },
          ],
          "LYCEE BILINGUE / A": [
            {
              station: "ZEMBING,SIGNAL",
              voters: 511
            },
          ],
          "LYCEE CLASSIQUE / A": [
            {
              station: "LEPIA",
              voters: 2027
            },
          ],
          "LYCEE DE BALIVONLI / A": [
            {
              station: "BALIVONLI",
              voters: 396
            },
          ],
          "LYCEE DE FONGO-NDENG / A": [
            {
              station: "AZENG",
              voters: 110
            },
            {
              station: "ZENKEU",
              voters: 110
            },
            {
              station: "ZINTSE",
              voters: 110
            },
          ],
          "MAGASIN CAPLAME DE FONGO-NDENG / A": [
            {
              station: "MEGANG",
              voters: 772
            },
            {
              station: "ASSANG",
              voters: 542
            },
            {
              station: "FIALA",
              voters: 9191
            },
            {
              station: "NZENLAH",
              voters: 788
            },
            {
              station: "MEZEM",
              voters: 542
            },
          ],
          "MAGASIN CAPLAME DE MAKONG / A": [
            {
              station: "MENOUET",
              voters: 285
            },
          ],
          "MAGASIN CAPLAME FOTETSA / A": [
            {
              station: "MAKONG",
              voters: 853
            },
            {
              station: "TSINKOU",
              voters: 283
            },
            {
              station: "ZEMLOH",
              voters: 283
            },
          ],
          "SAR ET SM / A": [
            {
              station: "CAMPUS",
              voters: 494
            },
            {
              station: "UNIVERSITAIRE",
              voters: 494
            },
            {
              station: "CITE",
              voters: 494
            },
            {
              station: "CAPLAME",
              voters: 494
            },
          ],
          "USINE CAPLAME DE DSCHANG / A": [
            {
              station: "MOSQUEE",
              voters: 658
            },
          ],
        },
        "FOKOUE": {
          "BAMEGWOU EP / A": [
            {
              station: "NKA",
              voters: 124
            },
            {
              station: "NZEMBOUO",
              voters: 124
            },
          ],
          "BANDOUM EP / A": [
            {
              station: "BANDOUM",
              voters: 139
            },
          ],
          "BANGOUET EP / A": [
            {
              station: "BANGOUET",
              voters: 204
            },
          ],
          "BUREAU DE POSTE / A": [
            {
              station: "CENTRE",
              voters: 1103
            },
            {
              station: "COMMERCIAL",
              voters: 874
            },
            {
              station: "ADMINISTRATIF",
              voters: 253
            },
          ],
          "CASE COMMUNAUTAIRE NZENTSIEUH / A": [
            {
              station: "NZENTSIEH",
              voters: 74
            },
          ],
          "CASE DE SANTE MENA'A / A": [
            {
              station: "MENA'A",
              voters: 114
            },
          ],
          "CETIC DE FOKOUE / A": [
            {
              station: "MINLAH",
              voters: 138
            },
          ],
          "COURS DU FOYER MINTSOH / A": [
            {
              station: "MINTSOH",
              voters: 255
            },
          ],
          "EC FOKOUE / A": [
            {
              station: "MISSION",
              voters: 45
            },
          ],
          "EC FOTOMENA / A": [
            {
              station: "MANGUEZONG",
              voters: 410
            },
            {
              station: "MEKA",
              voters: 378
            },
            {
              station: "NKO'O",
              voters: 378
            },
          ],
          "FOKOUE CENTRE EP / A": [
            {
              station: "LEPOUNG",
              voters: 497
            },
            {
              station: "NDOUNPOU",
              voters: 497
            },
            {
              station: "TOUCHET",
              voters: 497
            },
          ],
          "FONTSA - TOUALA EP / A": [
            {
              station: "MINBING",
              voters: 172
            },
          ],
          "FOTCHOUFFEU EP / A": [
            {
              station: "FOTCHOUFFEU",
              voters: 124
            },
          ],
          "FOTOMENA EP / A": [
            {
              station: "FOTOMENA",
              voters: 412
            },
            {
              station: "NTSAH",
              voters: 412
            },
            {
              station: "TCWELEVENG",
              voters: 412
            },
          ],
          "FOTSAGHO EP / A": [
            {
              station: "FOMELO",
              voters: 478
            },
            {
              station: "FOTSAGHO",
              voters: 68
            },
          ],
          "FOYER EJWET / A": [
            {
              station: "EJWET",
              voters: 67
            },
          ],
          "FOYER FOKOUE / A": [
            {
              station: "FOKOUE",
              voters: 151
            },
            {
              station: "MBOU",
              voters: 151
            },
            {
              station: "NSATSE",
              voters: 151
            },
          ],
          "FOYER FOMOPEA / A": [
            {
              station: "FOMOPEA",
              voters: 366
            },
          ],
          "FOYER FONTSA - TOUALA / A": [
            {
              station: "FONTSA",
              voters: 229
            },
            {
              station: "TOUALA",
              voters: 229
            },
          ],
          "FOYER LAFIE / A": [
            {
              station: "LAFIE",
              voters: 84
            },
          ],
          "FOYER LENLAH / A": [
            {
              station: "LENLAH",
              voters: 98
            },
          ],
          "FOYER MANDONG / A": [
            {
              station: "MANDONG",
              voters: 108
            },
          ],
          "FOYER MESSEM / A": [
            {
              station: "MESSEM",
              voters: 37
            },
          ],
          "FOYER NDOUNDE / A": [
            {
              station: "NDOUNDE",
              voters: 80
            },
          ],
          "LYCEE DE FOKOUE / A": [
            {
              station: "EKOUH",
              voters: 135
            },
          ],
          "NTSENLAH EP / A": [
            {
              station: "NTSENLAH",
              voters: 159
            },
          ],
          "NZALLAH EP / A": [
            {
              station: "NZALLAH",
              voters: 87
            },
          ],
          "POSTE AGRICOLE BAMEGWOU / A": [
            {
              station: "FIALAH",
              voters: 675
            },
            {
              station: "BAMEGWOU",
              voters: 112
            },
          ],
          "POSTE AGRICOLE DE TSAFOUH / A": [
            {
              station: "TSAFOUH",
              voters: 20
            },
          ],
          "TOUFFAM EP / A": [
            {
              station: "TOUFFAM",
              voters: 255
            },
          ],
          "YANTOU EP / A": [
            {
              station: "YANTOU",
              voters: 111
            },
          ],
        },
        "FONGO-TONGO": {
          "AGAP-ATOGUIA EP / A": [
            {
              station: "AGAP",
              voters: 184
            },
            {
              station: "LOTSA",
              voters: 184
            },
            {
              station: "TCHOUANWA-FOBEUH",
              voters: 184
            },
          ],
          "CES BILINGUE DE NDENTO / A": [
            {
              station: "NWASSA\A",
              voters: 24
            },
          ],
          "COLLEGE CO.PLI.FO / A": [
            {
              station: "FOSSONG",
              voters: 16
            },
            {
              station: "TCHUENTCHUE",
              voters: 16
            },
            {
              station: "LEPOUO",
              voters: 16
            },
          ],
          "DJEU EP / A": [
            {
              station: "DJEU",
              voters: 269
            },
            {
              station: "MENIEUH",
              voters: 269
            },
          ],
          "EP DJIEUMBOU / A": [
            {
              station: "DJIEUMBOU",
              voters: 177
            },
            {
              station: "LEVENG",
              voters: 177
            },
          ],
          "EP TCHOUANWA / A": [
            {
              station: "MBANECK",
              voters: 52
            },
            {
              station: "NFEUNG",
              voters: 52
            },
            {
              station: "SIETIEH",
              voters: 52
            },
            {
              station: "TCHOUANWA",
              voters: 52
            },
            {
              station: "TIEDONG",
              voters: 52
            },
          ],
          "FONGO-TONGO EP CHEFFERIE / A": [
            {
              station: "ALLOH",
              voters: 227
            },
            {
              station: "AZEM",
              voters: 227
            },
            {
              station: "TOUOTCHOUET",
              voters: 227
            },
          ],
          "FOSSONG-ELLELEM EP / A": [
            {
              station: "FOSSONG-ELLELEM",
              voters: 483
            },
          ],
          "FOSSONG-TCHUENTCHUE EP / A": [
            {
              station: "FOSSONG-TCHUENTCHUE",
              voters: 381
            },
          ],
          "FOYER FONGO-TONGO / A": [
            {
              station: "APANG",
              voters: 912
            },
            {
              station: "APANTSE",
              voters: 895
            },
            {
              station: "LATCHOUET",
              voters: 1090
            },
            {
              station: "LEFANG",
              voters: 856
            },
            {
              station: "MBOUA",
              voters: 856
            },
            {
              station: "MEGUEU-FIALA",
              voters: 856
            },
            {
              station: "METEUH",
              voters: 856
            },
            {
              station: "MEZA",
              voters: 1191
            },
            {
              station: "NDEDAH",
              voters: 856
            },
            {
              station: "NKO'OH",
              voters: 856
            },
            {
              station: "TOUFEM",
              voters: 856
            },
          ],
          "FOYER MENGA / A": [
            {
              station: "BALI",
              voters: 185
            },
            {
              station: "LEPIA",
              voters: 185
            },
            {
              station: "LEPOUH",
              voters: 185
            },
            {
              station: "MENGA",
              voters: 185
            },
            {
              station: "NZENBING",
              voters: 185
            },
            {
              station: "NZEUH",
              voters: 185
            },
          ],
          "LATCHOUET EP / A": [
            {
              station: "TSENKEUNG",
              voters: 234
            },
          ],
          "LEMBET EP / A": [
            {
              station: "LEMBET",
              voters: 336
            },
            {
              station: "TCHOUOTENG",
              voters: 336
            },
          ],
          "LETHIAPANG EP / A": [
            {
              station: "LETHIAPANG",
              voters: 269
            },
            {
              station: "NDENTO",
              voters: 293
            },
            {
              station: "NKEMLEKEU",
              voters: 269
            },
            {
              station: "NWASSA'A",
              voters: 269
            },
            {
              station: "TIKANG",
              voters: 293
            },
          ],
          "LOUNG EP / A": [
            {
              station: "LOUNG",
              voters: 308
            },
          ],
          "LYCEE D'APOUH / A": [
            {
              station: "APOUH",
              voters: 559
            },
            {
              station: "LEWOE",
              voters: 559
            },
            {
              station: "NZO",
              voters: 559
            },
          ],
          "LYCEE TECHNIQUE DE FONGO-TONGO / A": [
            {
              station: "NKO\OH",
              voters: 39
            },
            {
              station: "NTONCHIEU",
              voters: 39
            },
            {
              station: "ZEMBOUA",
              voters: 39
            },
          ],
          "MEGUEU EP / A": [
            {
              station: "LEFOCK",
              voters: 298
            },
            {
              station: "MEGUEU",
              voters: 298
            },
            {
              station: "TSINGLAH",
              voters: 298
            },
          ],
          "MEKOUALE EP / A": [
            {
              station: "LEKEUH-SA'A",
              voters: 588
            },
            {
              station: "LETHIOP",
              voters: 588
            },
            {
              station: "MBEUH",
              voters: 588
            },
            {
              station: "MBING",
              voters: 588
            },
            {
              station: "MEKOUALE",
              voters: 588
            },
            {
              station: "MENTSOK",
              voters: 588
            },
            {
              station: "MEZOUE",
              voters: 588
            },
            {
              station: "MINKA",
              voters: 588
            },
            {
              station: "NZENBAH",
              voters: 588
            },
          ],
          "MELANG EP / A": [
            {
              station: "MEKEUH",
              voters: 432
            },
            {
              station: "MELANG",
              voters: 432
            },
            {
              station: "MESSONG",
              voters: 545
            },
            {
              station: "NZONG",
              voters: 319
            },
            {
              station: "(MELANG)",
              voters: 319
            },
            {
              station: "TOUOLAH",
              voters: 319
            },
          ],
          "MENAH EP / A": [
            {
              station: "MBOUMOK",
              voters: 144
            },
            {
              station: "MENAH",
              voters: 144
            },
          ],
          "MEZA EP / A": [
            {
              station: "NGANTEUH",
              voters: 335
            },
            {
              station: "TCHOUANWA-FOGUENA",
              voters: 335
            },
            {
              station: "TCHOUANWA-FOKA",
              voters: 335
            },
            {
              station: "TCHOUANWA-MBANGNEK",
              voters: 335
            },
            {
              station: "TSA'NWA",
              voters: 335
            },
          ],
          "NGUEN EP / A": [
            {
              station: "NGUEN",
              voters: 189
            },
            {
              station: "NZON",
              voters: 189
            },
            {
              station: "(NGUEN)",
              voters: 189
            },
            {
              station: "THIE",
              voters: 189
            },
          ],
          "NZIE-FODA POSTE AGRICOLE / A": [
            {
              station: "LEKEUH-ZAH",
              voters: 464
            },
            {
              station: "MENLAH",
              voters: 324
            },
            {
              station: "NZIE-FODA",
              voters: 519
            },
          ],
          "TSIEDONG EP / A": [
            {
              station: "LENSAP",
              voters: 207
            },
            {
              station: "TSIEDONG",
              voters: 207
            },
          ],
          "YAGUEM EP / A": [
            {
              station: "YAGUEM",
              voters: 417
            },
            {
              station: "ZEMDA",
              voters: 468
            },
          ],
        },
        "NKONG-NI": {
          "CEEBEC NZAH / A": [
            {
              station: "LEKATCHOU",
              voters: 513
            },
            {
              station: "LOUNG",
              voters: 1096
            },
            {
              station: "NZEMTSAH",
              voters: 218
            },
            {
              station: "K.LEFOC",
              voters: 218
            },
          ],
          "COL. CHERE SABINA / A": [
            {
              station: "AGHON",
              voters: 326
            },
          ],
          "COL. EVANG BALEVENG / A": [
            {
              station: "FOGAH",
              voters: 423
            },
            {
              station: "LAATCHUET",
              voters: 249
            },
          ],
          "COL. ST LAURENT / A": [
            {
              station: "LEFE",
              voters: 508
            },
          ],
          "COLLEGE PRIVE LAIC / A": [
            {
              station: "Djili",
              voters: 116
            },
          ],
          "EC BALEPOUO / A": [
            {
              station: "BALEPOUO",
              voters: 285
            },
            {
              station: "KEKAN",
              voters: 526
            },
            {
              station: "MENLAH",
              voters: 285
            },
          ],
          "EC BAMELIEU / A": [
            {
              station: "BAMELIEU",
              voters: 371
            },
            {
              station: "ZEMLA",
              voters: 947
            },
          ],
          "EC FOMBET / A": [
            {
              station: "FOOLOH",
              voters: 341
            },
            {
              station: "MBETH",
              voters: 341
            },
            {
              station: "SOH",
              voters: 942
            },
          ],
          "EC FOTSA / A": [
            {
              station: "BASSESSA",
              voters: 381
            },
            {
              station: "FOTSA",
              voters: 381
            },
          ],
          "EC NKOHO / A": [
            {
              station: "DJIO",
              voters: 922
            },
            {
              station: "NKOHO",
              voters: 409
            },
          ],
          "EC ST LOUIS / A": [
            {
              station: "SUELEN",
              voters: 156
            },
          ],
          "EC ST THOMAS / A": [
            {
              station: "BAGHA",
              voters: 210
            },
            {
              station: "KELENG",
              voters: 210
            },
          ],
          "EM BAFOU CHEFFERIE / A": [
            {
              station: "BAFOU",
              voters: 1274
            },
            {
              station: "CHEFFERIE",
              voters: 865
            },
          ],
          "EM BALEKOUET / A": [
            {
              station: "BALEKOUET",
              voters: 85
            },
            {
              station: "TEKAN",
              voters: 85
            },
          ],
          "EM LOH KEMZI / A": [
            {
              station: "LOH",
              voters: 148
            },
            {
              station: "KEMZI",
              voters: 148
            },
          ],
          "EM Lingang / A": [
            {
              station: "Lingang",
              voters: 173
            },
          ],
          "EM MEGUIM / A": [
            {
              station: "MEGUIM",
              voters: 179
            },
            {
              station: "NZUNLA",
              voters: 179
            },
          ],
          "EM NDOH / A": [
            {
              station: "NDOH",
              voters: 746
            },
            {
              station: "TALLE",
              voters: 865
            },
          ],
          "EP AGANG / A": [
            {
              station: "AGANG",
              voters: 211
            },
          ],
          "EP AGHONG / A": [
            {
              station: "AGHONG",
              voters: 57
            },
          ],
          "EP BAFOU BASSESSA / A": [
            {
              station: "MEGHONG",
              voters: 573
            },
            {
              station: "MVOUH",
              voters: 169
            },
          ],
          "EP BAFOU CARREFOUR / A": [
            {
              station: "NTSAH",
              voters: 243
            },
          ],
          "EP BAFOU CHEFFERIE / A": [
            {
              station: "TSINGBEU",
              voters: 457
            },
          ],
          "EP BAGHONTO / A": [
            {
              station: "BAGHONTO",
              voters: 130
            },
          ],
          "EP BALENG / A": [
            {
              station: "BALENG",
              voters: 328
            },
          ],
          "EP BALEVENG CTRE / A": [
            {
              station: "TOULEVENG",
              voters: 568
            },
          ],
          "EP BATSINGLA / A": [
            {
              station: "SUELA",
              voters: 289
            },
            {
              station: "BATSINGLA",
              voters: 289
            },
          ],
          "EP BATSINGTO / A": [
            {
              station: "BATSINGTO",
              voters: 241
            },
          ],
          "EP BAWOUWOUA / A": [
            {
              station: "BAWOUWOUA",
              voters: 112
            },
          ],
          "EP BAZEM / A": [
            {
              station: "NKONGZEM",
              voters: 290
            },
          ],
          "EP DJO MOCK / A": [
            {
              station: "MBIH",
              voters: 397
            },
            {
              station: "MELEKOUET",
              voters: 397
            },
          ],
          "EP DJUTTITSA / A": [
            {
              station: "DJUTTITSA",
              voters: 483
            },
            {
              station: "MELOUNG",
              voters: 483
            },
            {
              station: "SUADEM",
              voters: 483
            },
          ],
          "EP DOUMBOUO / A": [
            {
              station: "DOUMBOUO",
              voters: 264
            },
            {
              station: "NZENBING",
              voters: 264
            },
          ],
          "EP DZINKOP / A": [
            {
              station: "DZINKOP",
              voters: 645
            },
            {
              station: "LAACHUE",
              voters: 565
            },
          ],
          "EP DZINNOH / A": [
            {
              station: "DZI",
              voters: 193
            },
            {
              station: "NNOH",
              voters: 193
            },
          ],
          "EP FEUMOCK / A": [
            {
              station: "FEUMOCK",
              voters: 312
            },
          ],
          "EP FODZONG / A": [
            {
              station: "FODZONG",
              voters: 364
            },
            {
              station: "METSOP",
              voters: 364
            },
          ],
          "EP FOKAMEZO / A": [
            {
              station: "FOKAMEZO",
              voters: 271
            },
          ],
          "EP FOLEWI / A": [
            {
              station: "FOLEWI",
              voters: 683
            },
            {
              station: "LETSIET",
              voters: 683
            },
            {
              station: "TOUOZONG",
              voters: 683
            },
          ],
          "EP KAMNICK / A": [
            {
              station: "KAMNICK",
              voters: 198
            },
          ],
          "EP LEPE / A": [
            {
              station: "LEPE",
              voters: 210
            },
            {
              station: "MENTSI",
              voters: 488
            },
          ],
          "EP LEPOH / A": [
            {
              station: "LEPOH",
              voters: 264
            },
          ],
          "EP LIAGUEM / A": [
            {
              station: "LIE-YAGUEM",
              voters: 127
            },
          ],
          "EP MBENG / A": [
            {
              station: "MBENG",
              voters: 560
            },
          ],
          "EP MBOUH / A": [
            {
              station: "MBOUH",
              voters: 201
            },
            {
              station: "NKONMBOUH",
              voters: 769
            },
            {
              station: "NZENLEKOUET",
              voters: 201
            },
          ],
          "EP MEKONG / A": [
            {
              station: "MEKONG",
              voters: 146
            },
          ],
          "EP MENGNE / A": [
            {
              station: "Mengne",
              voters: 116
            },
            {
              station: "Ngnweh",
              voters: 116
            },
            {
              station: "Tekang-Kemgue",
              voters: 116
            },
            {
              station: "Zem-Tekang",
              voters: 116
            },
          ],
          "EP METSAH / A": [
            {
              station: "METSAH",
              voters: 139
            },
          ],
          "EP MEZET / A": [
            {
              station: "MEKOUH",
              voters: 386
            },
            {
              station: "MEZET",
              voters: 386
            },
          ],
          "EP NDOMETSANG / A": [
            {
              station: "NDOMETSANG",
              voters: 148
            },
          ],
          "EP NZEMTO / A": [
            {
              station: "NKONTO",
              voters: 147
            },
            {
              station: "ZEMTO",
              voters: 147
            },
          ],
          "EP NZIEFENG / A": [
            {
              station: "NZIEFENG",
              voters: 334
            },
          ],
          "EP POUDZANG / A": [
            {
              station: "SESSA",
              voters: 89
            },
            {
              station: "POUDZANG",
              voters: 89
            },
          ],
          "EP SAA-NDOH / A": [
            {
              station: "SAA",
              voters: 274
            },
          ],
          "EP SAAH / A": [
            {
              station: "SAAH",
              voters: 618
            },
            {
              station: "TSINSAAH",
              voters: 290
            },
          ],
          "EP SUEFFENG / A": [
            {
              station: "LEPAN",
              voters: 391
            },
            {
              station: "NZIE",
              voters: 391
            },
          ],
          "EP TCHOUTSI / A": [
            {
              station: "TCHOUTSI",
              voters: 763
            },
          ],
          "EP TCHUEZA / A": [
            {
              station: "TCHUEZA",
              voters: 328
            },
          ],
          "EP TSOMBING / A": [
            {
              station: "FOZOH",
              voters: 605
            },
            {
              station: "MELIO",
              voters: 605
            },
            {
              station: "NFENG",
              voters: 605
            },
          ],
          "EP ZEM BALEVENG / A": [
            {
              station: "ZEM",
              voters: 252
            },
            {
              station: "BALEVENG",
              voters: 252
            },
          ],
          "FOYER BALETSI / A": [
            {
              station: "BALETSI",
              voters: 260
            },
          ],
          "FOYER BANZA / A": [
            {
              station: "BANZA",
              voters: 350
            },
          ],
          "FOYER CDC / A": [
            {
              station: "CTE",
              voters: 343
            },
            {
              station: "SAAKIA",
              voters: 343
            },
          ],
          "FOYER EV. BALEVENG / A": [
            {
              station: "MEKANG",
              voters: 174
            },
          ],
          "FOYER MELIA / A": [
            {
              station: "MELIA",
              voters: 260
            },
          ],
          "FOYER NGUI / A": [
            {
              station: "NGUI",
              voters: 325
            },
          ],
          "IAEB NKONG-NI / A": [
            {
              station: "CENTRE",
              voters: 1086
            },
            {
              station: "ADM",
              voters: 815
            },
          ],
          "LT BALEVENG / A": [
            {
              station: "MENGOO",
              voters: 404
            },
            {
              station: "KIAGNI",
              voters: 404
            },
          ],
          "LYCEE BAFOU / A": [
            {
              station: "MIATCHUET-LYCEE",
              voters: 343
            },
          ],
          "LYCEE BAFOU SUD / A": [
            {
              station: "BALETET",
              voters: 184
            },
          ],
          "POSTE AGRICOLE MEYA / A": [
            {
              station: "LEPIA,MEYA",
              voters: 328
            },
          ],
        },
        "PENKA-MICHEL": {
          "C.M.A BANSOA KING-PLACE / A": [
            {
              station: "BAFOMSO",
              voters: 350
            },
          ],
          "C.S.I BAMENDOU CHEFFERIE / A": [
            {
              station: "LEH",
              voters: 382
            },
            {
              station: "MINKOP",
              voters: 382
            },
            {
              station: "TOULEKOUET",
              voters: 382
            },
          ],
          "CENTRE DE SANTE DE BAMENDOU-LEO / A": [
            {
              station: "LEWOU",
              voters: 208
            },
          ],
          "CENTRE DE SANTE FOLAFIE / A": [
            {
              station: "BAWANG",
              voters: 939
            },
          ],
          "CENTRE MULTIMEDIA DE PENKA MICHEL / A": [
            {
              station: "HOPITAL",
              voters: 395
            },
          ],
          "CES BILINGUE DE NGOUANG / A": [
            {
              station: "NGOUANG",
              voters: 282
            },
            {
              station: "TAMI",
              voters: 564
            },
          ],
          "CETIC BAMENDOU KING-PLACE / A": [
            {
              station: "BAMENDOU",
              voters: 565
            },
          ],
          "COLLEGE POLYVALENT DE BANEGHANG / A": [
            {
              station: "BANETSINTSIT",
              voters: 261
            },
          ],
          "COLLEGE SAINT DOMINIQUE NDOUNKE / A": [
            {
              station: "NTONE",
              voters: 195
            },
            {
              station: "TSIMILLA",
              voters: 195
            },
          ],
          "COOPERATIVE BATOULA / A": [
            {
              station: "FOYER",
              voters: 388
            },
          ],
          "DELEGATION D'ARR. AGRICULTURE / A": [
            {
              station: "NYLON",
              voters: 772
            },
          ],
          "E.P. BILINGUE DE TOUSSANG / A": [
            {
              station: "LAFEU",
              voters: 346
            },
            {
              station: "TOUSSANG",
              voters: 346
            },
          ],
          "E.P. DE BADJONG / A": [
            {
              station: "BADJONG",
              voters: 4872
            },
          ],
          "E.P. DE TCHUEZA / A": [
            {
              station: "MELABONG",
              voters: 274
            },
            {
              station: "TCHUEDEU",
              voters: 274
            },
          ],
          "E.P. GROUPE III BALESSING / A": [
            {
              station: "BALLESING",
              voters: 319
            },
          ],
          "EC BAKASSA / A": [
            {
              station: "BAKASSA",
              voters: 984
            },
          ],
          "EC BAMENDOU POPING / A": [
            {
              station: "MELIO",
              voters: 717
            },
            {
              station: "POPING",
              voters: 416
            },
          ],
          "EC BAMENDOU-LEO / A": [
            {
              station: "ZEMEVOU",
              voters: 158
            },
          ],
          "EC BAMETSAM / A": [
            {
              station: "BAMETSAM",
              voters: 1037
            },
          ],
          "EC BANDJA / A": [
            {
              station: "BAGHAM",
              voters: 697
            },
            {
              station: "BANDJA",
              voters: 697
            },
            {
              station: "BAWASSA",
              voters: 697
            },
            {
              station: "BAWONFAM",
              voters: 697
            },
            {
              station: "PENCHIE",
              voters: 697
            },
          ],
          "EC BANEGHANG / A": [
            {
              station: "BATEU",
              voters: 533
            },
          ],
          "EC BASSOSSIA / A": [
            {
              station: "BAFEMBE",
              voters: 346
            },
            {
              station: "BATOUSSO",
              voters: 173
            },
            {
              station: "NGEUFEMBE",
              voters: 173
            },
          ],
          "EC MEGHO / A": [
            {
              station: "LEFETSA",
              voters: 263
            },
            {
              station: "MEGHO",
              voters: 263
            },
            {
              station: "MENAH",
              voters: 263
            },
          ],
          "EC NDOUNKE / A": [
            {
              station: "BAMEKEU",
              voters: 173
            },
            {
              station: "BATSILE",
              voters: 173
            },
            {
              station: "MILLA",
              voters: 582
            },
            {
              station: "NDOUNKE",
              voters: 173
            },
            {
              station: "TSILA",
              voters: 299
            },
          ],
          "ECOLE CATHOLIQUE BATENG / A": [
            {
              station: "I,BATENG",
              voters: 165
            },
          ],
          "ECOLE CEBEC BALATSIT / A": [
            {
              station: "BALATSIT-HETT",
              voters: 321
            },
            {
              station: "BALATSIT-TCHO",
              voters: 321
            },
          ],
          "ECOLE CEBEC BAMEWACK / A": [
            {
              station: "BAMEWACK",
              voters: 235
            },
            {
              station: "BATOULETENG",
              voters: 235
            },
          ],
          "ECOLE CEBEC BATCHIE / A": [
            {
              station: "BATCHIE",
              voters: 428
            },
            {
              station: "MUKIE",
              voters: 428
            },
          ],
          "ECOLE CEBEC BAWOUANG / A": [
            {
              station: "BALI",
              voters: 367
            },
            {
              station: "BAMEDOU",
              voters: 367
            },
            {
              station: "BAWOUANG",
              voters: 367
            },
          ],
          "ECOLE CEBEC MOLEPEU / A": [
            {
              station: "LATCHUET",
              voters: 344
            },
            {
              station: "MOLEPEU",
              voters: 344
            },
            {
              station: "TAGAH",
              voters: 344
            },
          ],
          "ECOLE CEBEC TANG / A": [
            {
              station: "TOUKO'O",
              voters: 246
            },
            {
              station: "ZENTO",
              voters: 246
            },
            {
              station: "ZENTO-",
              voters: 246
            },
            {
              station: "ZEMLA",
              voters: 246
            },
          ],
          "ECOLE MATERNELLE MEKOO / A": [
            {
              station: "MEKOO",
              voters: 278
            },
          ],
          "ECOLE MATERNELLE NEMBOUO / A": [
            {
              station: "NEMBOUO-I,NEMBOUO-II,NGUIM,MBIKENG",
              voters: 351
            },
          ],
          "EP BADJEGHANG / A": [
            {
              station: "BADJEGHANG",
              voters: 1636
            },
            {
              station: "III",
              voters: 4265
            },
          ],
          "EP BAKE / A": [
            {
              station: "BAKE",
              voters: 771
            },
          ],
          "EP BAKENG / A": [
            {
              station: "BAKENG",
              voters: 344
            },
          ],
          "EP BALATSIT / A": [
            {
              station: "BALATSIT",
              voters: 1036
            },
            {
              station: "EWOUE",
              voters: 250
            },
            {
              station: "TCHIEU",
              voters: 250
            },
          ],
          "EP BALEPIPI / A": [
            {
              station: "BALEPIPI",
              voters: 1366
            },
            {
              station: "BALEPOU",
              voters: 2642
            },
            {
              station: "BAMEKA",
              voters: 1601
            },
            {
              station: "BAMEKIE",
              voters: 1321
            },
            {
              station: "BAMETA",
              voters: 1685
            },
            {
              station: "BATENG",
              voters: 1861
            },
            {
              station: "BATOULA",
              voters: 1902
            },
            {
              station: "BALESSING",
              voters: 1685
            },
          ],
          "EP BALETSI II / A": [
            {
              station: "BALETSI",
              voters: 874
            },
          ],
          "EP BALOUM CENTRE / A": [
            {
              station: "BALATSET",
              voters: 344
            },
            {
              station: "TOUTSET",
              voters: 344
            },
            {
              station: "ZEMYA",
              voters: 344
            },
          ],
          "EP BAMBI / A": [
            {
              station: "BALESSING-TCHUET",
              voters: 195
            },
            {
              station: "BATSIMBI",
              voters: 195
            },
          ],
          "EP BAMENDOU CHEFFERIE / A": [
            {
              station: "LEGHONG",
              voters: 440
            },
            {
              station: "LEM",
              voters: 440
            },
            {
              station: "LEO",
              voters: 440
            },
            {
              station: "NEMBOUO",
              voters: 880
            },
            {
              station: "NGUIM",
              voters: 440
            },
            {
              station: "TCHO",
              voters: 440
            },
            {
              station: "TEMTE",
              voters: 440
            },
          ],
          "EP BAMENDOU KOAGOH / A": [
            {
              station: "KOAGOH",
              voters: 292
            },
            {
              station: "MBINKENG",
              voters: 292
            },
            {
              station: "MEKO'O",
              voters: 636
            },
            {
              station: "TCHUEFFI",
              voters: 292
            },
          ],
          "EP BANGOUO / A": [
            {
              station: "BAMOUP",
              voters: 195
            },
            {
              station: "BANGOUO",
              voters: 195
            },
          ],
          "EP BANI / A": [
            {
              station: "BANI",
              voters: 229
            },
            {
              station: "BIMEGOU",
              voters: 229
            },
            {
              station: "BORORO",
              voters: 229
            },
          ],
          "EP BANOCK / A": [
            {
              station: "BANOCK",
              voters: 341
            },
          ],
          "EP BASSOKENG / A": [
            {
              station: "BANANG",
              voters: 308
            },
            {
              station: "BASSOKENG",
              voters: 308
            },
          ],
          "EP BASSOSSIA / A": [
            {
              station: "BAGHANG",
              voters: 640
            },
            {
              station: "BASSOSSIA",
              voters: 640
            },
          ],
          "EP BATCHEU / A": [
            {
              station: "BAFEMKOUO",
              voters: 317
            },
            {
              station: "BANEGHANG",
              voters: 1644
            },
            {
              station: "BANEPIE",
              voters: 634
            },
            {
              station: "BATCHEU",
              voters: 634
            },
          ],
          "EP BATOLAFIE/POASSAP / A": [
            {
              station: "BASSAP",
              voters: 267
            },
            {
              station: "BATOLAFIE",
              voters: 534
            },
          ],
          "EP BATOTCHA II / A": [
            {
              station: "BATOTCHA",
              voters: 939
            },
          ],
          "EP BAWONG / A": [
            {
              station: "BAKOUA",
              voters: 382
            },
            {
              station: "BAMANG",
              voters: 382
            },
            {
              station: "BAWONG",
              voters: 382
            },
          ],
          "EP BAZINZA / A": [
            {
              station: "BALENA",
              voters: 449
            },
            {
              station: "BALOUM",
              voters: 607
            },
            {
              station: "BAMBING",
              voters: 449
            },
            {
              station: "BATCHOUWOUA",
              voters: 449
            },
            {
              station: "BAZINZA",
              voters: 449
            },
          ],
          "EP DEDENG / A": [
            {
              station: "DEDENG",
              voters: 186
            },
          ],
          "EP DOUTSET / A": [
            {
              station: "DOUTSET-SANG",
              voters: 65
            },
          ],
          "EP GROUPE I BALESSING / A": [
            {
              station: "BAWONWOUA",
              voters: 744
            },
          ],
          "EP GROUPE I BANSOA KING-PLACE / A": [
            {
              station: "BADJOUWOUO",
              voters: 1694
            },
            {
              station: "BAMESSEU",
              voters: 1694
            },
            {
              station: "BATCHANG",
              voters: 1490
            },
            {
              station: "HIELA",
              voters: 847
            },
            {
              station: "KING-PLACE",
              voters: 2882
            },
          ],
          "EP GROUPE I CENTRE URBAIN / A": [
            {
              station: "BASTOS",
              voters: 497
            },
            {
              station: "HAUT-TAMI",
              voters: 497
            },
            {
              station: "MADAGASCAR",
              voters: 497
            },
            {
              station: "NEW-BELL",
              voters: 497
            },
            {
              station: "PLATEAU",
              voters: 1265
            },
          ],
          "EP GROUPE II BALESSING / A": [
            {
              station: "BAGATCHEU",
              voters: 445
            },
            {
              station: "BASSO",
              voters: 445
            },
            {
              station: "BATOUGOUNG",
              voters: 445
            },
          ],
          "EP GROUPE II BANSOA-BADJULAH / A": [
            {
              station: "BADJULAH",
              voters: 1044
            },
            {
              station: "BAHOU",
              voters: 522
            },
            {
              station: "DEDEU",
              voters: 522
            },
            {
              station: "DJEUYA",
              voters: 522
            },
            {
              station: "TCHOUMNEKEU",
              voters: 1044
            },
          ],
          "EP GROUPE II CENTRE URBAIN / A": [
            {
              station: "LAC",
              voters: 768
            },
            {
              station: "PENKOUE",
              voters: 768
            },
          ],
          "EP LEO / A": [
            {
              station: "WOPOUO",
              voters: 203
            },
          ],
          "EP MATERNELLE CENTRE URBAIN / A": [
            {
              station: "TERGAL",
              voters: 337
            },
          ],
          "EP MELAH / A": [
            {
              station: "MELAH",
              voters: 284
            },
            {
              station: "TSANG",
              voters: 852
            },
          ],
          "EP MESSING / A": [
            {
              station: "TSENNANG",
              voters: 210
            },
          ],
          "EP METCHOU / A": [
            {
              station: "MEGHA",
              voters: 304
            },
            {
              station: "METCHOU",
              voters: 796
            },
          ],
          "EP MILLA / A": [
            {
              station: "PETSISANG",
              voters: 214
            },
          ],
          "EP MINDEM / A": [
            {
              station: "MEKIA",
              voters: 168
            },
            {
              station: "SESSA",
              voters: 168
            },
          ],
          "EP NGUIMETO / A": [
            {
              station: "MEPENG",
              voters: 179
            },
            {
              station: "NGUIMETO",
              voters: 179
            },
          ],
          "EP NKOTSA / A": [
            {
              station: "NKOTSA",
              voters: 509
            },
            {
              station: "TAPEU",
              voters: 509
            },
            {
              station: "TOUZAH",
              voters: 509
            },
            {
              station: "TSAH",
              voters: 509
            },
            {
              station: "TSINFOU",
              voters: 509
            },
            {
              station: "ZINMEKONG",
              voters: 648
            },
          ],
          "EP PANNI / A": [
            {
              station: "PANNI",
              voters: 223
            },
          ],
          "EP SANG / A": [
            {
              station: "SANG",
              voters: 636
            },
          ],
          "EP SONKENG / A": [
            {
              station: "SONKENG",
              voters: 81
            },
          ],
          "EP TALE / A": [
            {
              station: "LEKOUET",
              voters: 345
            },
            {
              station: "MENTSA",
              voters: 473
            },
            {
              station: "TALE",
              voters: 345
            },
          ],
          "EP TOUDJOUA / A": [
            {
              station: "TOUDJOUA",
              voters: 89
            },
            {
              station: "ZINMET",
              voters: 89
            },
          ],
          "FOYER ANNOCK / A": [
            {
              station: "ANNOCK",
              voters: 172
            },
          ],
          "FOYER BALEFOCK / A": [
            {
              station: "BALEFOCK",
              voters: 311
            },
          ],
          "FOYER BANI / A": [
            {
              station: "MEKAH",
              voters: 126
            },
            {
              station: "PETSEM",
              voters: 126
            },
          ],
          "FOYER MBOUO / A": [
            {
              station: "MBOUO",
              voters: 499
            },
            {
              station: "NGUI",
              voters: 499
            },
          ],
          "FOYER MESSING / A": [
            {
              station: "DJOUA",
              voters: 385
            },
            {
              station: "MESSING",
              voters: 664
            },
          ],
          "INSPECT. D'ARROND. DE L'EDU. DE BASE / A": [
            {
              station: "LONAKO",
              voters: 482
            },
          ],
          "LYCEE BAMBI / A": [
            {
              station: "BATOUMBI",
              voters: 507
            },
          ],
          "LYCEE BANSOA-MBRI / A": [
            {
              station: "BATCHUFRET",
              voters: 762
            },
            {
              station: "DJUKOP",
              voters: 381
            },
            {
              station: "MBRI",
              voters: 381
            },
          ],
          "LYCEE DE BAKASSA / A": [
            {
              station: "BALATSI",
              voters: 411
            },
            {
              station: "BALATSIT\SOO",
              voters: 411
            },
            {
              station: "SOO",
              voters: 411
            },
          ],
          "POSTE AGRICOLE DE BALESSING / A": [
            {
              station: "BALEFET",
              voters: 329
            },
            {
              station: "BAMETCHO",
              voters: 329
            },
            {
              station: "TSALLA",
              voters: 658
            },
          ],
        },
        "SANTCHOU": {
          "CAPLAME NTEINGUE / A": [
            {
              station: "NTEINGUE",
              voters: 392
            },
            {
              station: "MIENDAP_RELOCALISE",
              voters: 33
            },
          ],
          "CASE CHEFFERIE MOGOT / A": [
            {
              station: "MOGOT",
              voters: 133
            },
          ],
          "CEBEC FOMBAP / A": [
            {
              station: "FIALA-FOMBAP",
              voters: 725
            },
            {
              station: "FOMBAP",
              voters: 1326
            },
          ],
          "CES BILINGUE NKA / A": [
            {
              station: "AFEEH",
              voters: 318
            },
            {
              station: "AKO",
              voters: 318
            },
            {
              station: "KOUA",
              voters: 318
            },
            {
              station: "LEFOCK",
              voters: 318
            },
            {
              station: "NDA",
              voters: 318
            },
            {
              station: "NZECLAH",
              voters: 494
            },
            {
              station: "SITEU",
              voters: 318
            },
          ],
          "CES DE FONGUETAFOU ECHIOCK / A": [
            {
              station: "FONGUETAFOU",
              voters: 286
            },
          ],
          "COOPERATIVE NTEINGUE / A": [
            {
              station: "MIENDAP,NTISSAH",
              voters: 226
            },
          ],
          "EC ECHIOCK / A": [
            {
              station: "ECHIOCK-MOKELEWOUM",
              voters: 254
            },
          ],
          "EC FOMBAP / A": [
            {
              station: "MBONGO",
              voters: 261
            },
            {
              station: "TSALA",
              voters: 261
            },
          ],
          "EC FONDONERA / A": [
            {
              station: "LETOP",
              voters: 176
            },
            {
              station: "NZINGLA",
              voters: 176
            },
          ],
          "EC SANTCHOU / A": [
            {
              station: "ETAM-MBEUH",
              voters: 842
            },
            {
              station: "FONGWANG",
              voters: 842
            },
            {
              station: "NGWAGNIA",
              voters: 1418
            },
            {
              station: "SEKOU",
              voters: 842
            },
          ],
          "EP BALE / A": [
            {
              station: "BALE",
              voters: 505
            },
          ],
          "EP BAMIA / A": [
            {
              station: "BAMIA",
              voters: 249
            },
          ],
          "EP BEBONG / A": [
            {
              station: "BEBONG",
              voters: 286
            },
            {
              station: "NCHOUCHOU",
              voters: 286
            },
          ],
          "EP ECHIOCK / A": [
            {
              station: "MOGONGAH",
              voters: 247
            },
          ],
          "EP FOMBAP / A": [
            {
              station: "FOMBAP-",
              voters: 595
            },
            {
              station: "LEZAP",
              voters: 595
            },
            {
              station: "LESAP",
              voters: 595
            },
          ],
          "EP MBOKOU / A": [
            {
              station: "MBOKOU",
              voters: 86
            },
          ],
          "EP MBOUKOK / A": [
            {
              station: "MBOUKOK",
              voters: 321
            },
          ],
          "EP MEKET / A": [
            {
              station: "MEKET",
              voters: 116
            },
          ],
          "EP MELA / A": [
            {
              station: "MELA",
              voters: 153
            },
          ],
          "EP MELEU / A": [
            {
              station: "MELEU",
              voters: 184
            },
          ],
          "EP MOKELEWOUM / A": [
            {
              station: "BALE-MOKELEWOUM",
              voters: 184
            },
            {
              station: "MOKELEWOUM",
              voters: 184
            },
          ],
          "EP MOKOT / A": [
            {
              station: "MOKOT",
              voters: 246
            },
          ],
          "EP NDEN-EFOUNGOUO / A": [
            {
              station: "NDEN-EFOUNGOUO",
              voters: 441
            },
          ],
          "EP NDEN-MANTOCK / A": [
            {
              station: "NDEN-MANTOCK",
              voters: 83
            },
          ],
          "EP NFONTSAM / A": [
            {
              station: "NFONTSAM",
              voters: 239
            },
          ],
          "EP NGUIANGO / A": [
            {
              station: "NGUIANGO",
              voters: 535
            },
            {
              station: "NZIE",
              voters: 535
            },
            {
              station: "NZONG",
              voters: 535
            },
          ],
          "EP NJINJANG / A": [
            {
              station: "BETONN",
              voters: 201
            },
            {
              station: "NJINJANG",
              voters: 201
            },
          ],
          "EP NKA / A": [
            {
              station: "ALACHUET",
              voters: 287
            },
            {
              station: "AWA",
              voters: 287
            },
            {
              station: "NKA",
              voters: 287
            },
          ],
          "EP NTAWOUNG / A": [
            {
              station: "NTAWOUNG",
              voters: 1070
            },
          ],
          "EP NTIEM / A": [
            {
              station: "NTIEM",
              voters: 179
            },
          ],
          "EP NZINCHUET / A": [
            {
              station: "ASSONG",
              voters: 269
            },
            {
              station: "FEMELA",
              voters: 269
            },
            {
              station: "NZINCHUET",
              voters: 269
            },
          ],
          "EP SANTCHOU / A": [
            {
              station: "BESSOUCK",
              voters: 1005
            },
          ],
          "EP SINGAIM / A": [
            {
              station: "NKEKA",
              voters: 250
            },
            {
              station: "SINGAIM",
              voters: 406
            },
          ],
          "FOYER ADENKA / A": [
            {
              station: "KASSALAFAM",
              voters: 475
            },
          ],
          "FOYER BESKWAING / A": [
            {
              station: "BESKWAING",
              voters: 86
            },
          ],
          "FOYER MANKANG / A": [
            {
              station: "MANKANG",
              voters: 255
            },
            {
              station: "MOYONG",
              voters: 255
            },
          ],
          "FOYER MOMBONG / A": [
            {
              station: "ABOU",
              voters: 724
            },
            {
              station: "AGONBING",
              voters: 362
            },
            {
              station: "AKEP",
              voters: 362
            },
            {
              station: "ATSADENG",
              voters: 362
            },
            {
              station: "AZON",
              voters: 362
            },
            {
              station: "NDOKENG",
              voters: 362
            },
            {
              station: "NZATSENG",
              voters: 362
            },
          ],
          "FOYER NGANG / A": [
            {
              station: "NGANG",
              voters: 47
            },
          ],
          "FOYER NGANZOM / A": [
            {
              station: "NGANZOM",
              voters: 299
            },
          ],
          "GROUPE SCOLAIRE BPL MBANKOUME / A": [
            {
              station: "NTISSAH_RELOCALISE",
              voters: 359
            },
          ],
          "LYCEE BILINGUE NGWATTA / A": [
            {
              station: "MBOUZEP",
              voters: 1152
            },
            {
              station: "NGWATTA",
              voters: 1152
            },
            {
              station: "MBOUSSECK",
              voters: 576
            },
            {
              station: "NGWATTA-MABOKOM",
              voters: 576
            },
            {
              station: "NTAKONG",
              voters: 576
            },
          ],
          "MANDELA STANDARD BILINGUAL NURSERY  AND PRIMARY SCHOOL SANTCHOU / A": [
            {
              station: "MBONDEN,MBONGO",
              voters: 240
            },
          ],
          "MOSQUEE CENTRALE DE SANTCHOU / A": [
            {
              station: "MADAGASCAR",
              voters: 1622
            },
          ],
          "SAINT ANDREW SCHOOL MICHIMIA / A": [
            {
              station: "MICHIMIA",
              voters: 142
            },
          ],
          "SALLE COMMUNAUTAIRE FONDONERA / A": [
            {
              station: "FIALA",
              voters: 441
            },
            {
              station: "FONDONERA",
              voters: 1058
            },
            {
              station: "LETIA",
              voters: 617
            },
            {
              station: "MANZOCKO",
              voters: 1568
            },
          ],
        },
      },
    },
  },
};
