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
  "OUEST": {
    "name": {
      "en": "WEST",
      "fr": "OUEST"
    },
    "divisions": {
      "BAMBOUTOS": {
        "BABADJOU": {
          "DJIBOUTI": [
            {
              "station": "CARREFOUR DJIBOUTI / A",
              "voters": 413
            }
          ],
          "BAMEDOU": [
            {
              "station": "CEBEC BAMEDOU / A",
              "voters": 538
            }
          ],
          "TOWCHI": [
            {
              "station": "CEBEC KOMBOU / A",
              "voters": 368
            }
          ],
          "TONYE": [
            {
              "station": "CENTRE MULTI PROMOT. DES JEUNES / A",
              "voters": 2648
            }
          ],
          "NTONG": [
            {
              "station": "CETIC BAMELO / A",
              "voters": 339
            }
          ],
          "DJINPANG": [
            {
              "station": "E.P. DE KING PLACE / A",
              "voters": 669
            }
          ],
          "KING": [
            {
              "station": "E.P. DE KING PLACE / A",
              "voters": 1338
            }
          ],
          "PLACE": [
            {
              "station": "E.P. DE KING PLACE / A",
              "voters": 1338
            }
          ],
          "CENTRE": [
            {
              "station": "E.P. DE KING PLACE / A",
              "voters": 1338
            }
          ],
          "NGUEKONG": [
            {
              "station": "E.P. DE KING PLACE / A",
              "voters": 2007
            }
          ],
          "BAMEDJI": [
            {
              "station": "EC BAMEDJI / A",
              "voters": 377
            }
          ],
          "DJINGHA": [
            {
              "station": "EC BAMENDJINGHA / A",
              "voters": 715
            }
          ],
          "MADJUI": [
            {
              "station": "EC BAMENDJINGHA / A",
              "voters": 715
            }
          ],
          "MANTSET": [
            {
              "station": "EC BAMENDJINGHA / A",
              "voters": 1126
            }
          ],
          "SOH": [
            {
              "station": "EC BAMENDJINGHA / A",
              "voters": 776
            }
          ],
          "MOPI": [
            {
              "station": "EC BAMENDJINGHA / A",
              "voters": 715
            }
          ],
          "BAMEPA'AH": [
            {
              "station": "EC BAMEPA'AH / A",
              "voters": 607
            }
          ],
          "LOUH": [
            {
              "station": "ECOLE DES PARENTS DE LOUH / A",
              "voters": 162
            }
          ],
          "BACHUA": [
            {
              "station": "EP BACHUA / A",
              "voters": 766
            }
          ],
          "BALEPO": [
            {
              "station": "EP BALEPO / A",
              "voters": 984
            }
          ],
          "BAMEGNIA": [
            {
              "station": "EP BAMEGNIA / A",
              "voters": 619
            }
          ],
          "BAMETO": [
            {
              "station": "EP BAMEKOUE / A",
              "voters": 203
            }
          ],
          "BAMELO": [
            {
              "station": "EP BAMELO / A",
              "voters": 1100
            }
          ],
          "CHEFFERIE": [
            {
              "station": "EP BAMELO / A",
              "voters": 1100
            }
          ],
          "BAMETOGOUNG": [
            {
              "station": "EP BAMETOGOUNG / A",
              "voters": 463
            }
          ],
          "FEMDJI": [
            {
              "station": "EP BAWA FEMDJI / A",
              "voters": 116
            }
          ],
          "MADZEU": [
            {
              "station": "EP BAWA FEMDJI / A",
              "voters": 116
            }
          ],
          "GAGONG": [
            {
              "station": "EP GAGONG / A",
              "voters": 423
            }
          ],
          "KOMBOU": [
            {
              "station": "EP KOMBOU / A",
              "voters": 942
            }
          ],
          "MOGNI": [
            {
              "station": "EP LEPA'AH / A",
              "voters": 394
            }
          ],
          "NTOUNGHA": [
            {
              "station": "EP NTOUNGHA / A",
              "voters": 263
            }
          ],
          "TAKANG": [
            {
              "station": "EP TAKANG / A",
              "voters": 97
            }
          ],
          "TOPELOU": [
            {
              "station": "EP TOPELOU / A",
              "voters": 249
            }
          ],
          "BAWA": [
            {
              "station": "EP TOUMAKA / A",
              "voters": 1065
            }
          ],
          "CHIMEGO": [
            {
              "station": "EP ZAVION / A",
              "voters": 227
            }
          ],
          "BAMETOUO": [
            {
              "station": "LYCEE BILINGUE DE BABADJOU / A",
              "voters": 442
            }
          ],
          "ZAVION": [
            {
              "station": "LYCEE DE ZAVION / A",
              "voters": 384
            }
          ],
          "BAMEDOUSSO": [
            {
              "station": "MARCHE BAMEDOUSSO / A",
              "voters": 690
            }
          ],
          "LEKOT": [
            {
              "station": "MARCHE FRONTALIER / A",
              "voters": 61
            }
          ],
          "KOKOU": [
            {
              "station": "MISSION CATHOLIQUE TOUMAKA / A",
              "voters": 453
            }
          ],
          "NIWANG": [
            {
              "station": "PROJET NGOMBALE / A",
              "voters": 335
            }
          ],
          "(TOUMAKA)": [
            {
              "station": "PROJET NGOMBALE / A",
              "voters": 335
            }
          ]
        },
        "BATCHAM": {
          "BANTSIET": [
            {
              "station": "C.E.S. DE BANTSIET / A",
              "voters": 298
            }
          ],
          "CENTRE": [
            {
              "station": "CENTRE DE LA JEUNESSE / A",
              "voters": 911
            }
          ],
          "URBAIN": [
            {
              "station": "CENTRE DE LA JEUNESSE / A",
              "voters": 911
            }
          ],
          "BANGUEALA-BATCHAM": [
            {
              "station": "CES DE BEBAKOUO / A",
              "voters": 323
            }
          ],
          "BALATCHUET": [
            {
              "station": "COLLEGE POLYVALENT DE KONTI / A",
              "voters": 377
            }
          ],
          "BAMELIO": [
            {
              "station": "COOPERATIVE DE NZINDONG / A",
              "voters": 521
            }
          ],
          "BORORO": [
            {
              "station": "COOPERATIVE DE NZINDONG / A",
              "voters": 521
            }
          ],
          "MEKENG-MEKOUP": [
            {
              "station": "COOPERATIVE DE NZINDONG / A",
              "voters": 521
            }
          ],
          "MESSANG": [
            {
              "station": "COOPERATIVE DE NZINDONG / A",
              "voters": 521
            }
          ],
          "TSOPEUA": [
            {
              "station": "COOPERATIVE DE NZINDONG / A",
              "voters": 521
            }
          ],
          "BADENGANG-BANGANG": [
            {
              "station": "E P DE BADENGANG-BANGANG / A",
              "voters": 361
            }
          ],
          "BANKUI": [
            {
              "station": "E P DE BAKUI / A",
              "voters": 193
            }
          ],
          "BALEGHANG": [
            {
              "station": "E P DE BALEGHANG / A",
              "voters": 587
            }
          ],
          "BALENA": [
            {
              "station": "E P DE BALENA / A",
              "voters": 932
            }
          ],
          "BALEPI": [
            {
              "station": "E P DE BALEPI / A",
              "voters": 218
            }
          ],
          "BAMBI": [
            {
              "station": "E P DE BAMBI / A",
              "voters": 645
            }
          ],
          "BAMBOUE": [
            {
              "station": "E P DE BAMBOUE I / A",
              "voters": 1132
            }
          ],
          "BAMEFOUACK": [
            {
              "station": "E P DE BAMEBORO / A",
              "voters": 301
            }
          ],
          "BAMOUGONG": [
            {
              "station": "E P DE BAMOUGONG CHEFFERIE / A",
              "voters": 422
            }
          ],
          "BANGANG": [
            {
              "station": "E P DE BANGANG CHEFFERIE / A",
              "voters": 416
            }
          ],
          "BANGOUANG": [
            {
              "station": "E P DE BANGOUANG / A",
              "voters": 460
            }
          ],
          "BAPEPA": [
            {
              "station": "E P DE BAPEPA / A",
              "voters": 745
            }
          ],
          "BATOULA": [
            {
              "station": "E P DE BAPEPA / A",
              "voters": 745
            }
          ],
          "BATCHAM": [
            {
              "station": "E P DE BATCHAM CHEFFERIE / A",
              "voters": 1072
            }
          ],
          "BATOUMBI": [
            {
              "station": "E P DE BATOUMBI / A",
              "voters": 326
            }
          ],
          "BAZIMBAP": [
            {
              "station": "E P DE BAZIMBAP / A",
              "voters": 445
            }
          ],
          "MEDOUMGONG": [
            {
              "station": "E P DE MEDOUMGONG / A",
              "voters": 556
            }
          ],
          "BATSA'A": [
            {
              "station": "E P DE NZINDONG / A",
              "voters": 393
            }
          ],
          "NZINDONG": [
            {
              "station": "E P DE NZINDONG / A",
              "voters": 393
            }
          ],
          "BIETE": [
            {
              "station": "E P DE TCHUELEKOUET / A",
              "voters": 690
            }
          ],
          "TCHUELEKOUET": [
            {
              "station": "E P DE TCHUELEKOUET / A",
              "voters": 690
            }
          ],
          "BAMEFO": [
            {
              "station": "ECOLE CATH DE BAMEFO / A",
              "voters": 280
            }
          ],
          "BAMEGHUIE": [
            {
              "station": "ECOLE CATH DE BAMEGHUIE / A",
              "voters": 333
            }
          ],
          "BAMELANG-BANGANG": [
            {
              "station": "ECOLE CATH DE BAMEGHUIE / A",
              "voters": 333
            }
          ],
          "BATOUGOUANG": [
            {
              "station": "ECOLE CATH DE BANGOUANG / A",
              "voters": 859
            }
          ],
          "BAZINMEGONG": [
            {
              "station": "ECOLE CATH DE BANGOUANG / A",
              "voters": 634
            }
          ],
          "BANGUEALA-BANGANG": [
            {
              "station": "ECOLE CATH DE BANGUEALA-BANGANG / A",
              "voters": 286
            }
          ],
          "BANGUIE": [
            {
              "station": "ECOLE CATH DE BANGUIE / A",
              "voters": 368
            }
          ],
          "BANDZA": [
            {
              "station": "ECOLE CATH DE BATCHUETIO / A",
              "voters": 1226
            }
          ],
          "BATCHUETIO": [
            {
              "station": "ECOLE CATH DE BATCHUETIO / A",
              "voters": 1226
            }
          ],
          "BATOUMOC": [
            {
              "station": "ECOLE CATH DE BATOUMOC / A",
              "voters": 239
            }
          ],
          "BATSEPOU": [
            {
              "station": "ECOLE CATH DE BATSEPOU / A",
              "voters": 315
            }
          ],
          "MADA": [
            {
              "station": "ECOLE CATH DE BATSEPOU / A",
              "voters": 315
            }
          ],
          "METIO": [
            {
              "station": "ECOLE CATH DE METIO / A",
              "voters": 1330
            }
          ],
          "KOUNTIA": [
            {
              "station": "ECOLE CATH ST-JACQUES DE BANGANG / A",
              "voters": 319
            }
          ],
          "SIEPKOU": [
            {
              "station": "ECOLE CATH ST-JACQUES DE BANGANG / A",
              "voters": 319
            }
          ],
          "BALAKAM": [
            {
              "station": "ECOLE CEBEC DE BALAKAM / A",
              "voters": 447
            }
          ],
          "BAMEKA": [
            {
              "station": "ECOLE CEBEC DE BALAKAM / A",
              "voters": 1673
            }
          ],
          "BALETSI": [
            {
              "station": "ECOLE CEBEC DE BALETSI / A",
              "voters": 374
            }
          ],
          "BATCHUETI": [
            {
              "station": "ECOLE CEBEC DE BALETSI / A",
              "voters": 374
            }
          ],
          "BAMBOUE-BANGANG": [
            {
              "station": "ECOLE CEBEC DE BAMBOUE-BANGANG / A",
              "voters": 543
            }
          ],
          "BASSESSA": [
            {
              "station": "ECOLE CEBEC DE BAMBOUE-BANGANG / A",
              "voters": 543
            }
          ],
          "BALOUO": [
            {
              "station": "ECOLE CEBEC DE BAMEMBA / A",
              "voters": 478
            }
          ],
          "BAMEMBA": [
            {
              "station": "ECOLE CEBEC DE BAMEMBA / A",
              "voters": 478
            }
          ],
          "NKOUOP": [
            {
              "station": "ECOLE CEBEC DE BAMEMBA / A",
              "voters": 478
            }
          ],
          "TOMOGO": [
            {
              "station": "ECOLE CEBEC DE BAMEMBA / A",
              "voters": 774
            }
          ],
          "BAMENDOU-BANGANG": [
            {
              "station": "ECOLE CEBEC DE BAMENDOU BANGANG / A",
              "voters": 183
            }
          ],
          "BADENGANG-BATCHAM": [
            {
              "station": "ECOLE CEBEC DE BAMESSANG / A",
              "voters": 473
            }
          ],
          "BAMESSANG": [
            {
              "station": "ECOLE CEBEC DE BAMESSANG / A",
              "voters": 473
            }
          ],
          "BATAKI": [
            {
              "station": "ECOLE CEBEC DE BAMESSANG / A",
              "voters": 1056
            }
          ],
          "III": [
            {
              "station": "ECOLE CEBEC DE BAMESSANG / A",
              "voters": 473
            }
          ],
          "BATOUMEGOUO": [
            {
              "station": "ECOLE CEBEC DE KONKEUA / A",
              "voters": 225
            }
          ],
          "FOUOMEKOUP": [
            {
              "station": "ECOLE CEBEC DE KONTI / A",
              "voters": 365
            }
          ],
          "KONTI": [
            {
              "station": "ECOLE CEBEC DE KONTI / A",
              "voters": 365
            }
          ],
          "BALEFAT": [
            {
              "station": "ECOLE CEBEC DE MENA / A",
              "voters": 467
            }
          ],
          "MENA": [
            {
              "station": "ECOLE CEBEC DE MENA / A",
              "voters": 467
            }
          ],
          "NZONG": [
            {
              "station": "ECOLE CEBEC DE NZONG / A",
              "voters": 451
            }
          ],
          "BADATCHIO": [
            {
              "station": "FOYER BADATCHIO / A",
              "voters": 252
            }
          ],
          "BACHIO": [
            {
              "station": "FOYER BAKAPFONG / A",
              "voters": 563
            }
          ],
          "BAKAPFONG": [
            {
              "station": "FOYER BAKAPFONG / A",
              "voters": 563
            }
          ],
          "BABOUGHANG": [
            {
              "station": "FOYER DE BAGHANG I / A",
              "voters": 372
            }
          ],
          "BAGHANG": [
            {
              "station": "FOYER DE BAGHANG I / A",
              "voters": 527
            }
          ],
          "BALEWA": [
            {
              "station": "FOYER DE BAGHANG I / A",
              "voters": 372
            }
          ],
          "BALADJEUTSA": [
            {
              "station": "FOYER DE BALADJEUTSA / A",
              "voters": 339
            }
          ],
          "BALAFOTIO": [
            {
              "station": "FOYER DE BALAFOTIO / A",
              "voters": 450
            }
          ],
          "BALETIA": [
            {
              "station": "FOYER DE BALETIA / A",
              "voters": 414
            }
          ],
          "BAMELA-BANGANG": [
            {
              "station": "FOYER DE BALETIA / A",
              "voters": 414
            }
          ],
          "FOMELIE": [
            {
              "station": "FOYER DE BALETIA / A",
              "voters": 414
            }
          ],
          "BALIE": [
            {
              "station": "FOYER DE BALIE / A",
              "voters": 297
            }
          ],
          "BAMESSA": [
            {
              "station": "FOYER DE BALIE / A",
              "voters": 987
            }
          ],
          "BAMEBORO": [
            {
              "station": "FOYER DE BAMEBORO / A",
              "voters": 650
            }
          ],
          "KING": [
            {
              "station": "FOYER DE BAMEBORO / A",
              "voters": 2235
            }
          ],
          "PLACE": [
            {
              "station": "FOYER DE BAMEBORO / A",
              "voters": 2235
            }
          ],
          "BAMEGHANG": [
            {
              "station": "FOYER DE BAMEGHANG / A",
              "voters": 378
            }
          ],
          "BAMEGUEA": [
            {
              "station": "FOYER DE BAMEGUEA / A",
              "voters": 384
            }
          ],
          "BAZUNTIM": [
            {
              "station": "FOYER DE BAMEGUEA / A",
              "voters": 384
            }
          ],
          "BALEFO": [
            {
              "station": "FOYER DE BAMEMBOU / A",
              "voters": 337
            }
          ],
          "BAMEMBOU": [
            {
              "station": "FOYER DE BAMEMBOU / A",
              "voters": 337
            }
          ],
          "BANGOUO": [
            {
              "station": "FOYER DE BANGOUO / A",
              "voters": 338
            }
          ],
          "BANTSA": [
            {
              "station": "FOYER DE BANTSA / A",
              "voters": 317
            }
          ],
          "BATSINLA": [
            {
              "station": "FOYER DE BANTSA / A",
              "voters": 317
            }
          ],
          "BASSOH": [
            {
              "station": "FOYER DE TOMOGO I / A",
              "voters": 296
            }
          ],
          "NJUINLA": [
            {
              "station": "FOYER DE TOMOGO I / A",
              "voters": 296
            }
          ],
          "BAMETIM-BANGANG": [
            {
              "station": "LYCEE DE BAMETIM-BANGANG / A",
              "voters": 455
            }
          ],
          "BAKOUM": [
            {
              "station": "LYCEE DE BAMOUGONG / A",
              "voters": 648
            }
          ],
          "BASSOUKA": [
            {
              "station": "LYCEE DE BANGANG / A",
              "voters": 219
            }
          ],
          "NTIO": [
            {
              "station": "LYCEE TECHNIQUE DE BATCHAM / A",
              "voters": 377
            }
          ]
        },
        "GALIM": {
          "MBAMI": [
            {
              "station": "CENTRE DE SANTE INTEGRE BAMENDJING /  A",
              "voters": 203
            }
          ],
          "BAFREUT": [
            {
              "station": "CENTRE DE SANTE INTEGRE BAMENYAM / A",
              "voters": 492
            }
          ],
          "BASSIETAH": [
            {
              "station": "CENTRE DE SANTE INTEGRE BAMENYAM / A",
              "voters": 492
            }
          ],
          "MBAEKE": [
            {
              "station": "CENTRE DE SANTE INTEGRE BAMENYAM / A",
              "voters": 492
            }
          ],
          "MBATSAH": [
            {
              "station": "CENTRE DE SANTE INTEGRE BAMENYAM / A",
              "voters": 492
            }
          ],
          "LEUPA": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE BATI / A",
              "voters": 476
            }
          ],
          "TETEM": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE BATI / A",
              "voters": 476
            }
          ],
          "MBEPEHE": [
            {
              "station": "E.P. DE MBEPEHE / A",
              "voters": 666
            }
          ],
          "MBAZAH": [
            {
              "station": "E.P. NGOYAC / A",
              "voters": 251
            }
          ],
          "NGOYAC": [
            {
              "station": "E.P. NGOYAC / A",
              "voters": 168
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE MATERNELLE DE GALIM VILLE / A",
              "voters": 2004
            }
          ],
          "COMMERCIAL": [
            {
              "station": "ECOLE MATERNELLE DE GALIM VILLE / A",
              "voters": 347
            }
          ],
          "URBAIN": [
            {
              "station": "ECOLE MATERNELLE DE GALIM VILLE / A",
              "voters": 1657
            }
          ],
          "GALIM": [
            {
              "station": "ECOLE MATERNELLE DE GALIM VILLE / A",
              "voters": 1657
            }
          ],
          "LOTISSEMENT": [
            {
              "station": "ECOLE SAINT ANDRE DE KIENEGHANG / A",
              "voters": 773
            }
          ],
          "PILOTE": [
            {
              "station": "ECOLE SAINT ANDRE DE KIENEGHANG / A",
              "voters": 108
            }
          ],
          "MBEGHANG": [
            {
              "station": "EGLISE APOSTOLIQUE DE MBEGHANG / A",
              "voters": 301
            }
          ],
          "TSENEKANG": [
            {
              "station": "EGLISE APOSTOLIQUE DE MBEGHANG / A",
              "voters": 301
            }
          ],
          "MBEVE": [
            {
              "station": "EGLISE APOSTOLIQUE MBEVE 1 / A",
              "voters": 403
            }
          ],
          "NONO": [
            {
              "station": "EGLISE EVANGELIQUE DE MEVOBO / A",
              "voters": 406
            }
          ],
          "ASSUJETIS": [
            {
              "station": "EP ASSUJETIS / A",
              "voters": 84
            }
          ],
          "KING": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 2217
            }
          ],
          "PLACE": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 2217
            }
          ],
          "BAGAM": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 1516
            }
          ],
          "PHEGHONG": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 763
            }
          ],
          "TANGUIE": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 763
            }
          ],
          "MBATSOUO": [
            {
              "station": "EP BAGAM GROUPE 3 / A",
              "voters": 763
            }
          ],
          "KOGOUP": [
            {
              "station": "EP BAMENDJING / A",
              "voters": 430
            }
          ],
          "MBEMOUO": [
            {
              "station": "EP BAMENDJING / A",
              "voters": 430
            }
          ],
          "MBEVOU": [
            {
              "station": "EP BAMENDJING / A",
              "voters": 430
            }
          ],
          "BAMENKOUPERE": [
            {
              "station": "EP BAMENKOUPERE / A",
              "voters": 336
            }
          ],
          "MBAPEHE": [
            {
              "station": "EP BAMENKOUPERE / A",
              "voters": 336
            }
          ],
          "NGUIPOP": [
            {
              "station": "EP BAMENKOUPERE / A",
              "voters": 336
            }
          ],
          "TANKAH": [
            {
              "station": "EP BAMENKOUPERE / A",
              "voters": 336
            }
          ],
          "BATIOGOU": [
            {
              "station": "EP BAMENYAM / A",
              "voters": 195
            }
          ],
          "BEGUIEKO": [
            {
              "station": "EP BAMENYAM / A",
              "voters": 195
            }
          ],
          "TSOULAT": [
            {
              "station": "EP BATI / A",
              "voters": 179
            }
          ],
          "BAZINGANG": [
            {
              "station": "EP BAZINGANG / A",
              "voters": 204
            }
          ],
          "BAMENDJING": [
            {
              "station": "EP BORORO BAMENDJING / A",
              "voters": 107
            }
          ],
          "BAMENYAM": [
            {
              "station": "EP BORORO BAMENYAM / A",
              "voters": 491
            }
          ],
          "FOULANI": [
            {
              "station": "EP FOULANI / A",
              "voters": 288
            }
          ],
          "FOUOYA": [
            {
              "station": "EP FOUOYA / A",
              "voters": 254
            }
          ],
          "MBESSABA": [
            {
              "station": "EP FOUOYA / A",
              "voters": 254
            }
          ],
          "GOH": [
            {
              "station": "EP GOH MAFOH / A",
              "voters": 71
            }
          ],
          "MAFOH": [
            {
              "station": "EP GOH MAFOH / A",
              "voters": 71
            }
          ],
          "GOSSONG": [
            {
              "station": "EP GOSSONG / A",
              "voters": 137
            }
          ],
          "KELOU": [
            {
              "station": "EP KELOU / A",
              "voters": 214
            }
          ],
          "MAFOTOH": [
            {
              "station": "EP KELOU / A",
              "voters": 214
            }
          ],
          "VILLAGE": [
            {
              "station": "EP KELOU / A",
              "voters": 322
            }
          ],
          "PIONNIER": [
            {
              "station": "EP KELOU / A",
              "voters": 214
            }
          ],
          "KIEMVE": [
            {
              "station": "EP KIEMVE / A",
              "voters": 151
            }
          ],
          "NZEUMBA": [
            {
              "station": "EP LAFI / A",
              "voters": 161
            }
          ],
          "MBAFAH": [
            {
              "station": "EP MBAFAH / A",
              "voters": 95
            }
          ],
          "NGOSSOH": [
            {
              "station": "EP MBAFAH / A",
              "voters": 95
            }
          ],
          "MBAGHONG": [
            {
              "station": "EP MBAGHONG / A",
              "voters": 328
            }
          ],
          "MBANUC": [
            {
              "station": "EP MBAGHONG / A",
              "voters": 328
            }
          ],
          "GWANAP": [
            {
              "station": "EP MBAKOP / A",
              "voters": 330
            }
          ],
          "MBAKOP": [
            {
              "station": "EP MBAKOP / A",
              "voters": 330
            }
          ],
          "MBEFOU": [
            {
              "station": "EP MBEKONG MAGAP / A",
              "voters": 429
            }
          ],
          "MBEKONG": [
            {
              "station": "EP MBEKONG MAGAP / A",
              "voters": 429
            }
          ],
          "MAGAP": [
            {
              "station": "EP MBEKONG MAGAP / A",
              "voters": 429
            }
          ],
          "NGOSSONG": [
            {
              "station": "EP MBEKONG MAGAP / A",
              "voters": 429
            }
          ],
          "JUNEFONG": [
            {
              "station": "EP MBENGHUIE / A",
              "voters": 479
            }
          ],
          "MBEDONG": [
            {
              "station": "EP MBENGHUIE / A",
              "voters": 479
            }
          ],
          "MBENGHUIE": [
            {
              "station": "EP MBENGHUIE / A",
              "voters": 479
            }
          ],
          "MBASSI": [
            {
              "station": "EP MBESSA / A",
              "voters": 499
            }
          ],
          "MBEFO": [
            {
              "station": "EP MBESSA / A",
              "voters": 782
            }
          ],
          "MBEDEKAP": [
            {
              "station": "EP MBESSA / A",
              "voters": 499
            }
          ],
          "MBESSA": [
            {
              "station": "EP MBESSA / A",
              "voters": 781
            }
          ],
          "MONBAP": [
            {
              "station": "EP MBESSA / A",
              "voters": 499
            }
          ],
          "MBETSOUNG": [
            {
              "station": "EP MBETSOUNG / A",
              "voters": 235
            }
          ],
          "NGOTTOH": [
            {
              "station": "EP MBETSOUNG / A",
              "voters": 235
            }
          ],
          "NGOGHONG": [
            {
              "station": "EP MBEVE 2 / A",
              "voters": 282
            }
          ],
          "MBEZATE": [
            {
              "station": "EP MBEZATE / A",
              "voters": 270
            }
          ],
          "BORORO": [
            {
              "station": "EP MENFOUNG / A",
              "voters": 873
            }
          ],
          "MASSANG": [
            {
              "station": "EP MENFOUNG / A",
              "voters": 454
            }
          ],
          "MENGOH": [
            {
              "station": "EP MENGOH / A",
              "voters": 948
            }
          ],
          "MEVOBO": [
            {
              "station": "EP MENGOH / A",
              "voters": 880
            }
          ],
          "MONTESSIE": [
            {
              "station": "EP MENGOH / A",
              "voters": 474
            }
          ],
          "MEBONG": [
            {
              "station": "EP MEVOBO / A",
              "voters": 306
            }
          ],
          "SESSE": [
            {
              "station": "EP MEVOBO / A",
              "voters": 306
            }
          ],
          "TASSE": [
            {
              "station": "EP MEVOBO / A",
              "voters": 461
            }
          ],
          "YEYEP": [
            {
              "station": "EP MEVOBO / A",
              "voters": 461
            }
          ],
          "SUD": [
            {
              "station": "EP MEVOBO / A",
              "voters": 306
            }
          ],
          "MEYEDUNG": [
            {
              "station": "EP MEYEDUNG / A",
              "voters": 283
            }
          ],
          "KOHTUNG": [
            {
              "station": "EP MIFI / A",
              "voters": 389
            }
          ],
          "MIFI": [
            {
              "station": "EP MIFI / A",
              "voters": 389
            }
          ],
          "KAMADE": [
            {
              "station": "EP NGOGHOUP / A",
              "voters": 355
            }
          ],
          "NGOGHOUP": [
            {
              "station": "EP NGOGHOUP / A",
              "voters": 355
            }
          ],
          "NDEKOUODE": [
            {
              "station": "EP NGOUPEPONG / A",
              "voters": 110
            }
          ],
          "NGOUPEPONG": [
            {
              "station": "EP NGOUPEPONG / A",
              "voters": 110
            }
          ],
          "NGOYO": [
            {
              "station": "EP NGOYO / A",
              "voters": 327
            }
          ],
          "NZENELEUP": [
            {
              "station": "EP NZENELEUP / A",
              "voters": 488
            }
          ],
          "TATA": [
            {
              "station": "EP TATA / A",
              "voters": 796
            }
          ],
          "TSINEGHA": [
            {
              "station": "EP TSINEGHA / A",
              "voters": 156
            }
          ],
          "TSISSAP": [
            {
              "station": "EP TSISSAP / A",
              "voters": 284
            }
          ],
          "TSUETHAP": [
            {
              "station": "EP TSUETHAP / A",
              "voters": 99
            }
          ],
          "QUARTIER": [
            {
              "station": "EP YEYEP / A",
              "voters": 155
            }
          ],
          "NOUVEAUX": [
            {
              "station": "EP YEYEP / A",
              "voters": 155
            }
          ],
          "NORD": [
            {
              "station": "EP YEYEP / A",
              "voters": 155
            }
          ],
          "TSIDEHE": [
            {
              "station": "EP YEYEP / A",
              "voters": 155
            }
          ],
          "MBEALA": [
            {
              "station": "FOYER BAMENYAM / A",
              "voters": 335
            }
          ],
          "MBEAMEKA": [
            {
              "station": "FOYER BAMENYAM / A",
              "voters": 335
            }
          ],
          "BATI": [
            {
              "station": "FOYER BATI / A",
              "voters": 366
            }
          ],
          "HAOUSSA": [
            {
              "station": "LYCEE BILINGUE DE GALIM / A",
              "voters": 599
            }
          ],
          "KIENEGHANG": [
            {
              "station": "LYCEE BILINGUE KIENEGHANG / A",
              "voters": 1038
            }
          ],
          "MBAMONG": [
            {
              "station": "LYCEE DE BAGAM / A",
              "voters": 525
            }
          ],
          "TSOGUET": [
            {
              "station": "LYCEE DE BAGAM / A",
              "voters": 525
            }
          ],
          "MBETSING": [
            {
              "station": "LYCEE DE BAGAM / A",
              "voters": 525
            }
          ],
          "MBETSOP": [
            {
              "station": "LYCEE DE BAGAM / A",
              "voters": 525
            }
          ],
          "MEZAH": [
            {
              "station": "LYCEE DE BAMENYAM / A",
              "voters": 80
            }
          ],
          "MBAGHANG": [
            {
              "station": "LYCEE TECHNIQUE DE GALIM / A",
              "voters": 316
            }
          ]
        },
        "MBOUDA": {
          "BAFEMTOH": [
            {
              "station": "CASE COMMUNAUTAIRE BAFEMTOH / A",
              "voters": 199
            }
          ],
          "BASSI": [
            {
              "station": "CEBEC BASSI / A",
              "voters": 126
            }
          ],
          "TAP": [
            {
              "station": "CENTRE DE JEUNESSE / A",
              "voters": 2246
            }
          ],
          "BATANG": [
            {
              "station": "CENTRE SANTE INTEGRE BATANG / A",
              "voters": 488
            }
          ],
          "CSI": [
            {
              "station": "CENTRE SANTE INTEGRE BATANG / A",
              "voters": 388
            }
          ],
          "BATOUSSI": [
            {
              "station": "CENTRE SANTE INTEGRE LATET / A",
              "voters": 504
            }
          ],
          "BOUMETIO": [
            {
              "station": "CENTRE SANTE INTEGRE LATET / A",
              "voters": 504
            }
          ],
          "(BAMENDJINDA)": [
            {
              "station": "CENTRE SANTE INTEGRE LATET / A",
              "voters": 1435
            }
          ],
          "TSUEWGE": [
            {
              "station": "DELEGATION FORETS / A",
              "voters": 929
            }
          ],
          "LATET": [
            {
              "station": "ECOLE CATHOLIQUE BABETE / A",
              "voters": 873
            }
          ],
          "NGAMOKIE": [
            {
              "station": "ECOLE CATHOLIQUE BABETE / A",
              "voters": 300
            }
          ],
          "BAKIE": [
            {
              "station": "ECOLE CEBEC BAKIE / A",
              "voters": 206
            }
          ],
          "BALOUM": [
            {
              "station": "ECOLE CEBEC BALOUM / A",
              "voters": 221
            }
          ],
          "DJINEGHO": [
            {
              "station": "ECOLE CEBEC BAMENDJINDA / A",
              "voters": 326
            }
          ],
          "DJINLENG": [
            {
              "station": "ECOLE CEBEC BAMENDJINDA / A",
              "voters": 326
            }
          ],
          "DOUNTSEU": [
            {
              "station": "ECOLE CEBEC BAMENDJINDA / A",
              "voters": 326
            }
          ],
          "CEBEC": [
            {
              "station": "ECOLE CEBEC BANTANG / A",
              "voters": 100
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE CEBEC LAFI / A",
              "voters": 3602
            }
          ],
          "LAFI": [
            {
              "station": "ECOLE CEBEC LAFI / A",
              "voters": 4533
            }
          ],
          "LEPI": [
            {
              "station": "ECOLE CEBEC LAFI / A",
              "voters": 3602
            }
          ],
          "RAPIDE": [
            {
              "station": "ECOLE CEBEC RAPIDE / A",
              "voters": 2208
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE MAT. DU PLATEAU ADMINISTRATIF / A",
              "voters": 1729
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE MAT. DU PLATEAU ADMINISTRATIF / A",
              "voters": 1729
            }
          ],
          "VILLE": [
            {
              "station": "ECOLE MAT. DU PLATEAU ADMINISTRATIF / A",
              "voters": 4801
            }
          ],
          "TSUEGWE": [
            {
              "station": "ECOLE MATERNELLE SNEC. / A",
              "voters": 2154
            }
          ],
          "BAMEGOUN": [
            {
              "station": "ECOLE PUB. BALATCHI CENTRE / A",
              "voters": 742
            }
          ],
          "BAMEKEME": [
            {
              "station": "ECOLE PUB. BALATCHI CENTRE / A",
              "voters": 742
            }
          ],
          "BAZINTCHI": [
            {
              "station": "ECOLE PUB. BALATCHI CENTRE / A",
              "voters": 742
            }
          ],
          "BATSELA": [
            {
              "station": "ECOLE PUB. BALATCHI MEKIE / A",
              "voters": 1792
            }
          ],
          "BAZINLA": [
            {
              "station": "ECOLE PUB. BALATCHI MEKIE / A",
              "voters": 554
            }
          ],
          "MEKIE": [
            {
              "station": "ECOLE PUB. BALATCHI MEKIE / A",
              "voters": 554
            }
          ],
          "TOUTOUT": [
            {
              "station": "ECOLE PUB. BAMENDJINDA MARCHE / A",
              "voters": 332
            }
          ],
          "BAGONG": [
            {
              "station": "ECOLE PUB. BAMENDJO GROUPE 1 / A",
              "voters": 380
            }
          ],
          "BAMOGO": [
            {
              "station": "ECOLE PUB. BAMENDJO GROUPE 1 / A",
              "voters": 780
            }
          ],
          "BATOUSSOP": [
            {
              "station": "ECOLE PUB. BAMENDJO GROUPE 1 / A",
              "voters": 380
            }
          ],
          "BATOULA": [
            {
              "station": "ECOLE PUB. BATOULA (BAMESSINGUE) / A",
              "voters": 1160
            }
          ],
          "BAMESSINGUE": [
            {
              "station": "ECOLE PUB. BATOULA (BAMESSINGUE) / A",
              "voters": 8797
            }
          ],
          "FOUOLA": [
            {
              "station": "ECOLE PUB. DE L'HOTEL DE VILLE / A",
              "voters": 3508
            }
          ],
          "BODJEUZEULE": [
            {
              "station": "ECOLE PUB. DE LATET BAMESSO / A",
              "voters": 573
            }
          ],
          "BAMENKOMBO": [
            {
              "station": "ECOLE PUB. KING-PLACE BAMENKOMBO / A",
              "voters": 479
            }
          ],
          "(KING-PLACE)": [
            {
              "station": "ECOLE PUB. KING-PLACE BAMENKOMBO / A",
              "voters": 479
            }
          ],
          "MOGATSO": [
            {
              "station": "ECOLE PUB. KING-PLACE BAMENKOMBO / A",
              "voters": 479
            }
          ],
          "SIGLE": [
            {
              "station": "ECOLE PUB. KING-PLACE BAMENKOMBO / A",
              "voters": 479
            }
          ],
          "TSEUTSA": [
            {
              "station": "ECOLE PUB. KING-PLACE BAMENKOMBO / A",
              "voters": 1410
            }
          ],
          "MOTSEUTSA": [
            {
              "station": "ECOLE PUB. LAFI (BAMENDJINDA) / A",
              "voters": 931
            }
          ],
          "BAKAKOU": [
            {
              "station": "ECOLE PUB. LATET BAMENDJINDA / A",
              "voters": 444
            }
          ],
          "BAKOGHA": [
            {
              "station": "ECOLE PUB. LATET BAMENDJINDA / A",
              "voters": 444
            }
          ],
          "BAMAKAK": [
            {
              "station": "ECOLE PUB. TOUMAKA GROUPE 1 / A",
              "voters": 578
            }
          ],
          "TOUMAKA": [
            {
              "station": "ECOLE PUB. TOUMAKA GROUPE 1 / A",
              "voters": 578
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE BABETE / A",
              "voters": 403
            }
          ],
          "BABETE": [
            {
              "station": "ECOLE PUBLIQUE BABETE / A",
              "voters": 1450
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE BABETE / A",
              "voters": 1556
            }
          ],
          "BAFACDJUI": [
            {
              "station": "ECOLE PUBLIQUE BAFACDJUI / A",
              "voters": 871
            }
          ],
          "BAMEJIN": [
            {
              "station": "ECOLE PUBLIQUE BAFACDJUI / A",
              "voters": 871
            }
          ],
          "BAMETAP": [
            {
              "station": "ECOLE PUBLIQUE BAFACDJUI / A",
              "voters": 871
            }
          ],
          "BAMETE": [
            {
              "station": "ECOLE PUBLIQUE BAFACDJUI / A",
              "voters": 871
            }
          ],
          "BATIAMEKIE": [
            {
              "station": "ECOLE PUBLIQUE BAFACDJUI / A",
              "voters": 1613
            }
          ],
          "BAFEMGHA": [
            {
              "station": "ECOLE PUBLIQUE BAFEMGHA / A",
              "voters": 869
            }
          ],
          "BAKOTIO": [
            {
              "station": "ECOLE PUBLIQUE BAKOTIO / A",
              "voters": 241
            }
          ],
          "KOUPTESE": [
            {
              "station": "ECOLE PUBLIQUE BAKOTIO / A",
              "voters": 241
            }
          ],
          "BALALOUM": [
            {
              "station": "ECOLE PUBLIQUE BALALOUM / A",
              "voters": 246
            }
          ],
          "BALENG": [
            {
              "station": "ECOLE PUBLIQUE BALENG / A",
              "voters": 389
            }
          ],
          "BAGADING": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 1017
            }
          ],
          "BAMAKA": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 1468
            }
          ],
          "BAMEBIN": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 890
            }
          ],
          "BATOMENI": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 1131
            }
          ],
          "BAZINMAGONG": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 890
            }
          ],
          "BORORO": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 1144
            }
          ],
          "MESSUEZAP": [
            {
              "station": "ECOLE PUBLIQUE BAMAKA / A",
              "voters": 1144
            }
          ],
          "BAMEFAP": [
            {
              "station": "ECOLE PUBLIQUE BAMEFAP / A",
              "voters": 523
            }
          ],
          "TEDJING": [
            {
              "station": "ECOLE PUBLIQUE BAMEFAP / A",
              "voters": 523
            }
          ],
          "ZEMTEDJING": [
            {
              "station": "ECOLE PUBLIQUE BAMEFAP / A",
              "voters": 523
            }
          ],
          "BAMENDOU": [
            {
              "station": "ECOLE PUBLIQUE BAMENDOU / A",
              "voters": 373
            }
          ],
          "BAMETA": [
            {
              "station": "ECOLE PUBLIQUE BAMETA / A",
              "voters": 116
            }
          ],
          "BAKONTI": [
            {
              "station": "ECOLE PUBLIQUE BAMOUSSANG / A",
              "voters": 269
            }
          ],
          "BAMOUSSANG": [
            {
              "station": "ECOLE PUBLIQUE BAMOUSSANG / A",
              "voters": 269
            }
          ],
          "BATCHOPI": [
            {
              "station": "ECOLE PUBLIQUE BAMOUSSANG / A",
              "voters": 269
            }
          ],
          "BANTANG": [
            {
              "station": "ECOLE PUBLIQUE BANTANG / A",
              "voters": 2311
            }
          ],
          "BAGONBONG": [
            {
              "station": "ECOLE PUBLIQUE BASSOKENG / A",
              "voters": 335
            }
          ],
          "BASSOKENG": [
            {
              "station": "ECOLE PUBLIQUE BASSOKENG / A",
              "voters": 335
            }
          ],
          "NENEGOU": [
            {
              "station": "ECOLE PUBLIQUE BASSOKENG / A",
              "voters": 1141
            }
          ],
          "BATCHEUPA": [
            {
              "station": "ECOLE PUBLIQUE BATCHIPA / A",
              "voters": 407
            }
          ],
          "BATOH": [
            {
              "station": "ECOLE PUBLIQUE BATCHIPA / A",
              "voters": 407
            }
          ],
          "BATCHUSSO": [
            {
              "station": "ECOLE PUBLIQUE BATCHUSSO / A",
              "voters": 323
            }
          ],
          "BATSADA": [
            {
              "station": "ECOLE PUBLIQUE BATSADA / A",
              "voters": 459
            }
          ],
          "NANSAP": [
            {
              "station": "ECOLE PUBLIQUE BATSADA / A",
              "voters": 459
            }
          ],
          "NGOUAYA": [
            {
              "station": "ECOLE PUBLIQUE BATSADA / A",
              "voters": 459
            }
          ],
          "ZEMMEGUEME": [
            {
              "station": "ECOLE PUBLIQUE BATSADA / A",
              "voters": 459
            }
          ],
          "BAMEKOU": [
            {
              "station": "ECOLE PUBLIQUE BAWA / A",
              "voters": 392
            }
          ],
          "BAWA": [
            {
              "station": "ECOLE PUBLIQUE BAWA / A",
              "voters": 392
            }
          ],
          "FEMTOH": [
            {
              "station": "ECOLE PUBLIQUE FEMTOH / A",
              "voters": 648
            }
          ],
          "MATSA": [
            {
              "station": "ECOLE PUBLIQUE FEMTOH / A",
              "voters": 648
            }
          ],
          "NZENEPA": [
            {
              "station": "ECOLE PUBLIQUE FEMTOH / A",
              "voters": 648
            }
          ],
          "TSOUMONTCHIO": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 / A",
              "voters": 1179
            }
          ],
          "BAMELO": [
            {
              "station": "ECOLE PUBLIQUE KONLETIO / A",
              "voters": 789
            }
          ],
          "KONLETIO": [
            {
              "station": "ECOLE PUBLIQUE KONLETIO / A",
              "voters": 789
            }
          ],
          "BAMETIEN": [
            {
              "station": "ECOLE PUBLIQUE MBATAP / A",
              "voters": 643
            }
          ],
          "BATCHIEPA": [
            {
              "station": "ECOLE PUBLIQUE MBATAP / A",
              "voters": 643
            }
          ],
          "MATHE": [
            {
              "station": "ECOLE PUBLIQUE MBATAP / A",
              "voters": 643
            }
          ],
          "MBATAP": [
            {
              "station": "ECOLE PUBLIQUE MBATAP / A",
              "voters": 643
            }
          ],
          "MONTCHIO": [
            {
              "station": "ECOLE PUBLIQUE MONTCHIO I / A",
              "voters": 3617
            }
          ],
          "NZINTIA": [
            {
              "station": "ECOLE PUBLIQUE NYLON GROUPE 3 / A",
              "voters": 2649
            }
          ],
          "PONEKI": [
            {
              "station": "ECOLE PUBLIQUE PONEKI / A",
              "voters": 615
            }
          ],
          "BOUMETIO-BAMENKOMBO": [
            {
              "station": "ECOLE PUBLIQUE TOUSSO / A",
              "voters": 854
            }
          ],
          "MOTSA": [
            {
              "station": "ECOLE PUBLIQUE TOUSSO / A",
              "voters": 854
            }
          ],
          "TOUSSO": [
            {
              "station": "ECOLE PUBLIQUE TOUSSO / A",
              "voters": 854
            }
          ],
          "TSEULE": [
            {
              "station": "ECOLE PUBLIQUE TOUSSO / A",
              "voters": 854
            }
          ],
          "BALEGHO": [
            {
              "station": "EGLISE CATHOLIQUE BATSINGLA / A",
              "voters": 292
            }
          ],
          "BATSINGLA": [
            {
              "station": "EGLISE CATHOLIQUE BATSINGLA / A",
              "voters": 292
            }
          ],
          "BAMENKA": [
            {
              "station": "EP KING PLACE BAMESSO / A",
              "voters": 1103
            }
          ],
          "BATAGOUA": [
            {
              "station": "EP KING PLACE BAMESSO / A",
              "voters": 1103
            }
          ],
          "BATCHIKOU": [
            {
              "station": "EP KING PLACE BAMESSO / A",
              "voters": 1103
            }
          ],
          "BAMESSO": [
            {
              "station": "EP KING PLACE BAMESSO / A",
              "voters": 1676
            }
          ],
          "TCHIAPA": [
            {
              "station": "FOYER BAMENDJINDA / A",
              "voters": 452
            }
          ],
          "TSEULA": [
            {
              "station": "FOYER BAMENDJINDA / A",
              "voters": 784
            }
          ],
          "BADJINFE": [
            {
              "station": "FOYER BAMESSO / A",
              "voters": 870
            }
          ],
          "BALAFI": [
            {
              "station": "FOYER BAMESSO / A",
              "voters": 870
            }
          ],
          "BATCHIAPA": [
            {
              "station": "FOYER BAMESSO / A",
              "voters": 870
            }
          ],
          "MBOTEU": [
            {
              "station": "FOYER BAMESSO / A",
              "voters": 870
            }
          ],
          "MEZZIE": [
            {
              "station": "FOYER CULTUREL BABETE / A",
              "voters": 364
            }
          ],
          "BADJUVAN": [
            {
              "station": "FOYER CULTUREL BAFOUNDA / A",
              "voters": 420
            }
          ],
          "BATOUDJA": [
            {
              "station": "FOYER CULTUREL BAFOUNDA / A",
              "voters": 420
            }
          ],
          "KING-PLACE": [
            {
              "station": "FOYER CULTUREL BAFOUNDA / A",
              "voters": 8712
            }
          ],
          "BAFOUNDA": [
            {
              "station": "FOYER CULTUREL BAFOUNDA / A",
              "voters": 420
            }
          ],
          "TOUGONG": [
            {
              "station": "FOYER CULTUREL BAFOUNDA / A",
              "voters": 420
            }
          ],
          "BALATCHI": [
            {
              "station": "LYCEE BALATCHI / A",
              "voters": 699
            }
          ],
          "TIALONG": [
            {
              "station": "LYCEE BALATCHI / A",
              "voters": 316
            }
          ],
          "TSEDING": [
            {
              "station": "LYCEE BALATCHI / A",
              "voters": 699
            }
          ],
          "BANOCK": [
            {
              "station": "LYCEE BILINGUE BANOCK / A",
              "voters": 1751
            }
          ],
          "BADJUDING": [
            {
              "station": "MARCHE BADJUTSIT / A",
              "voters": 222
            }
          ],
          "BADJUTSIT": [
            {
              "station": "MARCHE BADJUTSIT / A",
              "voters": 444
            }
          ],
          "NORD": [
            {
              "station": "MARCHE BADJUTSIT / A",
              "voters": 222
            }
          ],
          "SUD": [
            {
              "station": "MARCHE BADJUTSIT / A",
              "voters": 222
            }
          ],
          "BADJENSI": [
            {
              "station": "MISSION CATHOLIQUE BAMENDJO / A",
              "voters": 320
            }
          ],
          "BAKATOU": [
            {
              "station": "MISSION CATHOLIQUE BAMENDJO / A",
              "voters": 320
            }
          ],
          "BAKAZOU": [
            {
              "station": "MISSION CATHOLIQUE BAMENDJO / A",
              "voters": 320
            }
          ],
          "MISSION": [
            {
              "station": "MISSION CATHOLIQUE BAMENDJO / A",
              "voters": 620
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "MISSION CATHOLIQUE BAMENDJO / A",
              "voters": 620
            }
          ],
          "BAKASSANG": [
            {
              "station": "POSTE AGRICOLE BAKASSANG / A",
              "voters": 155
            }
          ],
          "BATOGO": [
            {
              "station": "POSTE AGRICOLE BAKASSANG / A",
              "voters": 155
            }
          ],
          "BATSELLA": [
            {
              "station": "POSTE AGRICOLE BATSELLA / A",
              "voters": 548
            }
          ],
          "MOLLA": [
            {
              "station": "POSTE AGRICOLE BATSELLA / A",
              "voters": 548
            }
          ],
          "NGOPA": [
            {
              "station": "POSTE AGRICOLE BATSELLA / A",
              "voters": 548
            }
          ],
          "TOUMODJI": [
            {
              "station": "POSTE AGRICOLE BATSELLA / A",
              "voters": 548
            }
          ]
        }
      },
      "HAUT-NKAM": {
        "BAFANG": {
          "800": [
            {
              "station": "FOYER BANKONDJI / A",
              "voters": 146
            }
          ],
          "TOMCHI": [
            {
              "station": "CERCLE DES ELITES DU HAUT-NKAM / A",
              "voters": 1964
            }
          ],
          "TCHOUNO": [
            {
              "station": "DELEGATION DE L'AGRICULTURE / A",
              "voters": 768
            }
          ],
          "AXE-LOURD": [
            {
              "station": "E.M DAPPLICATION 3 / A",
              "voters": 190
            }
          ],
          "TETHU": [
            {
              "station": "E.M DU CENTRE / A",
              "voters": 219
            }
          ],
          "NGUENACK": [
            {
              "station": "ECOLE CATHOLIQUE DE NGUENACK / A",
              "voters": 1504
            }
          ],
          "BABOUTCHEU-NGALEU": [
            {
              "station": "ECOLE PUB. BABOUTCHEU-NGALEU / A",
              "voters": 464
            }
          ],
          "BABONE": [
            {
              "station": "ECOLE PUBLIQUE BABONE CENTRE / A",
              "voters": 743
            }
          ],
          "BAKOLOU": [
            {
              "station": "ECOLE PUBLIQUE BABONE SELA / A",
              "voters": 115
            }
          ],
          "SELA-KOM": [
            {
              "station": "ECOLE PUBLIQUE BABONE SELA / A",
              "voters": 115
            }
          ],
          "BABOUTCHA-NINTCHEU": [
            {
              "station": "ECOLE PUBLIQUE BATCHEU / A",
              "voters": 463
            }
          ],
          "BATCHEU": [
            {
              "station": "ECOLE PUBLIQUE BATCHEU / A",
              "voters": 463
            }
          ],
          "KETCHEGUEU": [
            {
              "station": "ECOLE PUBLIQUE BATCHEU / A",
              "voters": 463
            }
          ],
          "BAVI": [
            {
              "station": "ECOLE PUBLIQUE DE BAVI / A",
              "voters": 604
            }
          ],
          "BANKONDJI": [
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / A",
              "voters": 519
            }
          ],
          "FAMKEU": [
            {
              "station": "ECOLE PUBLIQUE FAMKEU / A",
              "voters": 222
            }
          ],
          "MOUANKEU": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 / A",
              "voters": 2832
            }
          ],
          "LOSSACK": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 4 LOSSACK / A",
              "voters": 1668
            }
          ],
          "POUANGO": [
            {
              "station": "ECOLE PUBLIQUE TETAM / A",
              "voters": 707
            }
          ],
          "TETAM-CARRY-WATTER": [
            {
              "station": "ECOLE PUBLIQUE TETAM / A",
              "voters": 707
            }
          ],
          "METRES": [
            {
              "station": "FOYER BANKONDJI / A",
              "voters": 146
            }
          ],
          "BASSAP": [
            {
              "station": "FOYER CULTUREL BASSAP / A",
              "voters": 264
            }
          ],
          "CHEU": [
            {
              "station": "FOYER CULTUREL CHEU / A",
              "voters": 138
            }
          ],
          "BALACK": [
            {
              "station": "FOYER CULTUREL MANITU NDOKOVI / A",
              "voters": 266
            }
          ],
          "NDOKOVI": [
            {
              "station": "FOYER CULTUREL MANITU NDOKOVI / A",
              "voters": 1431
            }
          ],
          "BALEN": [
            {
              "station": "LYCEE BABOUTCHA NINTCHEU / A",
              "voters": 318
            }
          ],
          "BAPOUNDEU": [
            {
              "station": "LYCEE BABOUTCHA NINTCHEU / A",
              "voters": 318
            }
          ],
          "BAKOTCHEU": [
            {
              "station": "MEDECINE PREVENTIVE / A",
              "voters": 481
            }
          ],
          "LIEUTCHI-MOUANKEU": [
            {
              "station": "MISSION PROTESTANTE BAFANG 2 / A",
              "voters": 1104
            }
          ]
        },
        "BAKOU": {
          "BANKAMBE": [
            {
              "station": "E.P BANKAMBE / A",
              "voters": 163
            }
          ],
          "FOPOUANGA": [
            {
              "station": "E.P FOPOUANGA / A",
              "voters": 200
            }
          ],
          "MAKOUCK.": [
            {
              "station": "E.P FOPOUANGA / A",
              "voters": 200
            }
          ],
          "BALACK-LOUM": [
            {
              "station": "E.P KOUNOU / A",
              "voters": 232
            }
          ],
          "KOUNOU": [
            {
              "station": "E.P KOUNOU / A",
              "voters": 161
            }
          ],
          "NGANG": [
            {
              "station": "E.P NGANG / A",
              "voters": 125
            }
          ],
          "BAKOU": [
            {
              "station": "ECOLE CATHOLIQUE DE BAKOU / A",
              "voters": 1001
            }
          ],
          "FONDJANTI": [
            {
              "station": "ECOLE CATHOLIQUE DE BAKOU / A",
              "voters": 680
            }
          ],
          "KOBA": [
            {
              "station": "ECOLE PUBLIQUE DE BAKOU / A",
              "voters": 845
            }
          ],
          "BALOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE KOMAKO / A",
              "voters": 271
            }
          ],
          "KOMAKO": [
            {
              "station": "ECOLE PUBLIQUE DE KOMAKO / A",
              "voters": 389
            }
          ],
          "BABOUTCHA": [
            {
              "station": "EP DE BABOUTCHA FONGAM / A",
              "voters": 303
            }
          ],
          "FONGAM": [
            {
              "station": "EP DE BABOUTCHA FONGAM / A",
              "voters": 303
            }
          ]
        },
        "BANA": {
          "NYLON": [
            {
              "station": "BUREAU CAMPOST BANA / A",
              "voters": 397
            }
          ],
          "BANDOUMLA": [
            {
              "station": "CASE COMMUNAUTAIRE BADOUMLA / A",
              "voters": 285
            }
          ],
          "BAKAM": [
            {
              "station": "CASE COMMUNAUTAIRE BAKAM / A",
              "voters": 290
            }
          ],
          "BAPOUH": [
            {
              "station": "CASE COMMUNAUTAIRE BAPOUH / A",
              "voters": 284
            }
          ],
          "LIMEU": [
            {
              "station": "CENTRE SOCIAL BANA / A",
              "voters": 330
            }
          ],
          "KONTE": [
            {
              "station": "ECOLE CEBEC KONTE / A",
              "voters": 431
            }
          ],
          "BASSO": [
            {
              "station": "ECOLE MATERNELLE BASSO / A",
              "voters": 432
            }
          ],
          "BAKASSA": [
            {
              "station": "ECOLE PUBLIQUE BAKASSA / A",
              "voters": 1130
            }
          ],
          "TOULA": [
            {
              "station": "ECOLE PUBLIQUE BANA CENTRE / A",
              "voters": 1043
            }
          ],
          "BANDOUMKASSA": [
            {
              "station": "ECOLE PUBLIQUE BANDOUMKASSA / A",
              "voters": 402
            }
          ],
          "BATCHA": [
            {
              "station": "ECOLE PUBLIQUE BATCHA / A",
              "voters": 427
            }
          ],
          "TENTCHEU": [
            {
              "station": "ECOLE PUBLIQUE TENTCHEU / A",
              "voters": 916
            }
          ],
          "KATOU": [
            {
              "station": "LYCEE CLASSIQUE BANA / A",
              "voters": 155
            }
          ],
          "FAMNO": [
            {
              "station": "LYCEE TECHNIQUE BANA / A",
              "voters": 180
            }
          ],
          "FOUMBE": [
            {
              "station": "TRIBUNE DU MARCHE BANA / A",
              "voters": 516
            }
          ]
        },
        "BANDJA": {
          "BABONG": [
            {
              "station": "CASE COMITE BABONG / A",
              "voters": 276
            }
          ],
          "BALASSIE": [
            {
              "station": "CASE COMITE BABONG / A",
              "voters": 775
            }
          ],
          "BADENLA": [
            {
              "station": "CASE DE SANTE DE BADENLA / A",
              "voters": 191
            }
          ],
          "BAKOUOTCHA": [
            {
              "station": "CASE DE SANTE DE BADENLA / A",
              "voters": 191
            }
          ],
          "BALACHIE": [
            {
              "station": "CASE DE SANTE DE BADENLA / A",
              "voters": 742
            }
          ],
          "BAMENDJO": [
            {
              "station": "CASE DE SANTE DE BADENLA / A",
              "voters": 191
            }
          ],
          "BATCHAM": [
            {
              "station": "CASE DE SANTE DE BADENLA / A",
              "voters": 191
            }
          ],
          "BASSEU": [
            {
              "station": "CEBEC DE BASSEU / A",
              "voters": 485
            }
          ],
          "NDJAMKOUO": [
            {
              "station": "CES DE FONDANTI / A",
              "voters": 152
            }
          ],
          "TCHOULA": [
            {
              "station": "CES DE FONDANTI / A",
              "voters": 152
            }
          ],
          "HIELA": [
            {
              "station": "COLLEGE KAMBOU / A",
              "voters": 578
            }
          ],
          "TCHOUNO": [
            {
              "station": "COLLEGE KAMBOU / A",
              "voters": 578
            }
          ],
          "FAMLA": [
            {
              "station": "ECOLE CATHOLIQUE SAINT DENIS / A",
              "voters": 566
            }
          ],
          "DJIFFO": [
            {
              "station": "ECOLE CEBEC DE FONDJOMEKWET / A",
              "voters": 192
            }
          ],
          "HIALA": [
            {
              "station": "ECOLE CEBEC DE FONDJOMEKWET / A",
              "voters": 770
            }
          ],
          "MEKO": [
            {
              "station": "ECOLE NOTRE DAME DE BATCHITCHEU / A",
              "voters": 389
            }
          ],
          "WUM": [
            {
              "station": "ECOLE NOTRE DAME DE BATCHITCHEU / A",
              "voters": 389
            }
          ],
          "BALANGUEU": [
            {
              "station": "ECOLE PUB. BANDJA CHEFFERIE (MANGA) / A",
              "voters": 392
            }
          ],
          "TCHALA/BANDJA": [
            {
              "station": "ECOLE PUB. BANDJA CHEFFERIE (MANGA) / A",
              "voters": 392
            }
          ],
          "BANGUEKA": [
            {
              "station": "ECOLE PUBLIQUE BANGUEKA / A",
              "voters": 260
            }
          ],
          "VING": [
            {
              "station": "ECOLE PUBLIQUE BANGUEKA / A",
              "voters": 260
            }
          ],
          "TCHIPA": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE / A",
              "voters": 486
            }
          ],
          "BAKEU": [
            {
              "station": "ECOLE PUBLIQUE DE BAKEU / A",
              "voters": 77
            }
          ],
          "BAKOTCHA": [
            {
              "station": "ECOLE PUBLIQUE DE BAKOTCHA / A",
              "voters": 72
            }
          ],
          "BAKWOP": [
            {
              "station": "ECOLE PUBLIQUE DE BAKWOP / A",
              "voters": 147
            }
          ],
          "NGUIEBONG": [
            {
              "station": "ECOLE PUBLIQUE DE BAKWOP / A",
              "voters": 147
            }
          ],
          "BALAFI": [
            {
              "station": "ECOLE PUBLIQUE DE BALAFI / A",
              "voters": 247
            }
          ],
          "BALEUGWA": [
            {
              "station": "ECOLE PUBLIQUE DE BALEUGWA / A",
              "voters": 77
            }
          ],
          "FAPTCHEU": [
            {
              "station": "ECOLE PUBLIQUE DE BALOUM PLATEAU / A",
              "voters": 145
            }
          ],
          "LOM": [
            {
              "station": "ECOLE PUBLIQUE DE BALOUM PLATEAU / A",
              "voters": 145
            }
          ],
          "(BALOUM)": [
            {
              "station": "ECOLE PUBLIQUE DE BALOUM PLATEAU / A",
              "voters": 145
            }
          ],
          "NGOUEPI": [
            {
              "station": "ECOLE PUBLIQUE DE BALOUM PLATEAU / A",
              "voters": 145
            }
          ],
          "BAKATCHEU": [
            {
              "station": "ECOLE PUBLIQUE DE BANDJA / A",
              "voters": 1037
            }
          ],
          "METCHE": [
            {
              "station": "ECOLE PUBLIQUE DE BANDJA / A",
              "voters": 917
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE DE BANDJA / A",
              "voters": 5960
            }
          ],
          "BANGOKO": [
            {
              "station": "ECOLE PUBLIQUE DE BANGOKO / A",
              "voters": 108
            }
          ],
          "BANO": [
            {
              "station": "ECOLE PUBLIQUE DE BANO / A",
              "voters": 369
            }
          ],
          "LASSIE/BANDJA": [
            {
              "station": "ECOLE PUBLIQUE DE BASSEU / A",
              "voters": 100
            }
          ],
          "TACK": [
            {
              "station": "ECOLE PUBLIQUE DE BATACK / A",
              "voters": 71
            }
          ],
          "(BATACK)": [
            {
              "station": "ECOLE PUBLIQUE DE BATACK / A",
              "voters": 71
            }
          ],
          "TCHIEUH": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHIEU / A",
              "voters": 199
            }
          ],
          "(BATCHIEU)": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHIEU / A",
              "voters": 199
            }
          ],
          "BATCHITCHEU/FONDANTI": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHITCHEU / A",
              "voters": 143
            }
          ],
          "BATCHITCHEU/FONDJOMEKWET": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHITCHEU / A",
              "voters": 532
            }
          ],
          "TOULA": [
            {
              "station": "ECOLE PUBLIQUE DE BATOULA / A",
              "voters": 497
            }
          ],
          "(BATOULA)": [
            {
              "station": "ECOLE PUBLIQUE DE BATOULA / A",
              "voters": 146
            }
          ],
          "BABOUANTOU": [
            {
              "station": "ECOLE PUBLIQUE DE BATOULA / A",
              "voters": 146
            }
          ],
          "BAWANG": [
            {
              "station": "ECOLE PUBLIQUE DE BAWANG / A",
              "voters": 679
            }
          ],
          "TSELA": [
            {
              "station": "ECOLE PUBLIQUE DE BAWANG / A",
              "voters": 679
            }
          ],
          "FANGAM": [
            {
              "station": "ECOLE PUBLIQUE DE FANGAM / A",
              "voters": 138
            }
          ],
          "DJAH": [
            {
              "station": "ECOLE PUBLIQUE DE FONDANTI / A",
              "voters": 378
            }
          ],
          "MENDAH": [
            {
              "station": "ECOLE PUBLIQUE DE FONDANTI / A",
              "voters": 378
            }
          ],
          "DEMTCHANG": [
            {
              "station": "ECOLE PUBLIQUE DE FONDJOMEKWET / A",
              "voters": 334
            }
          ],
          "BAKOUA": [
            {
              "station": "ECOLE PUBLIQUE DE LATCHIEU / A",
              "voters": 263
            }
          ],
          "KOUOBONG": [
            {
              "station": "ECOLE PUBLIQUE DE LATCHIEU / A",
              "voters": 263
            }
          ],
          "LATCHIEU": [
            {
              "station": "ECOLE PUBLIQUE DE LATCHIEU / A",
              "voters": 263
            }
          ],
          "NDAKPEUDJIE": [
            {
              "station": "ECOLE PUBLIQUE DE NDAKPEUDJIE / A",
              "voters": 269
            }
          ],
          "NGUIEUH": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIEUH / A",
              "voters": 81
            }
          ],
          "FONDJOMEKWET": [
            {
              "station": "ECOLE PUBLIQUE DE TOULA / A",
              "voters": 351
            }
          ],
          "NGONFET": [
            {
              "station": "ENTREE CHEFFERIE NGONFET / A",
              "voters": 158
            }
          ],
          "SONG": [
            {
              "station": "ENTREE CHEFFERIE NGONFET / A",
              "voters": 158
            }
          ],
          "TOUKONG": [
            {
              "station": "ENTREE CHEFFERIE NGONFET / A",
              "voters": 158
            }
          ],
          "NDACKVEN": [
            {
              "station": "FOYER CULTUREL DE BABOUANTOU / A",
              "voters": 315
            }
          ],
          "TCHALA/BABOUANTOU": [
            {
              "station": "FOYER CULTUREL DE BABOUANTOU / A",
              "voters": 821
            }
          ],
          "BALAKO": [
            {
              "station": "FOYER CULTUREL DE DOMGOUM / A",
              "voters": 183
            }
          ],
          "DOMGOUM": [
            {
              "station": "FOYER CULTUREL DE DOMGOUM / A",
              "voters": 183
            }
          ],
          "SESSIEU": [
            {
              "station": "LYCEE DE BABOUANTOU / A",
              "voters": 181
            }
          ],
          "TCHIKONG": [
            {
              "station": "LYCEE DE FOTOUNI / A",
              "voters": 499
            }
          ],
          "TCHISSO": [
            {
              "station": "LYCEE DE FOTOUNI / A",
              "voters": 499
            }
          ],
          "DJEMLA": [
            {
              "station": "POSTE AGRICOLE DE FONDJOMEKWET / A",
              "voters": 212
            }
          ]
        },
        "BANKA": {
          "BADOUMGA": [
            {
              "station": "CENTRE NUFI DE BANKA / A",
              "voters": 7583
            }
          ],
          "III": [
            {
              "station": "ECOLE NOTRE DAME DE BANKA / A",
              "voters": 684
            }
          ],
          "BADOUMVEN": [
            {
              "station": "ECOLE PUBLIQUE BADOUMVEN / A",
              "voters": 148
            }
          ],
          "BAKOYE": [
            {
              "station": "ECOLE PUBLIQUE BAKOYE / A",
              "voters": 177
            }
          ],
          "BANDOUMKA": [
            {
              "station": "ECOLE PUBLIQUE BANDOUMKA / A",
              "voters": 310
            }
          ],
          "BANFEKO": [
            {
              "station": "ECOLE PUBLIQUE BANFEKO / A",
              "voters": 417
            }
          ],
          "TOUSSA": [
            {
              "station": "ECOLE PUBLIQUE BANKA - TOUSSA / A",
              "voters": 148
            }
          ],
          "BATCHO": [
            {
              "station": "ECOLE PUBLIQUE BATCHO / A",
              "voters": 200
            }
          ],
          "BATOUTCHO": [
            {
              "station": "ECOLE PUBLIQUE BATCHO / A",
              "voters": 337
            }
          ],
          "PANTCHI": [
            {
              "station": "ECOLE PUBLIQUE DOMGA GROUPE I ET II / A",
              "voters": 1264
            }
          ],
          "FONGOLI": [
            {
              "station": "ECOLE PUBLIQUE FONGOLI / A",
              "voters": 153
            }
          ],
          "BANGA": [
            {
              "station": "ECOLE PUBLIQUE NEW- TOWN / A",
              "voters": 728
            }
          ],
          "TCHONTE": [
            {
              "station": "ECOLE PUBLIQUE NEW- TOWN / A",
              "voters": 728
            }
          ],
          "(NEW-TOWN)": [
            {
              "station": "ECOLE PUBLIQUE NEW- TOWN / A",
              "voters": 728
            }
          ],
          "YONTEU": [
            {
              "station": "ECOLE PUBLIQUE YONTEU KETCHO / A",
              "voters": 349
            }
          ],
          "KETCHO": [
            {
              "station": "ECOLE PUBLIQUE YONTEU KETCHO / A",
              "voters": 349
            }
          ],
          "BADJESSA": [
            {
              "station": "ECOLE TECHNIQUE D'AGRICULTURE / A",
              "voters": 889
            }
          ],
          "POUANGO": [
            {
              "station": "ECOLE TECHNIQUE D'AGRICULTURE / A",
              "voters": 1251
            }
          ],
          "TCHOYI": [
            {
              "station": "ECOLE TECHNIQUE D'AGRICULTURE / A",
              "voters": 889
            }
          ],
          "BABOATE": [
            {
              "station": "FOYER CULTUREL BABOATE / A",
              "voters": 590
            }
          ],
          "BAKOVEN": [
            {
              "station": "FOYER CULTUREL BAKOVEN / A",
              "voters": 242
            }
          ],
          "BANFELOUK": [
            {
              "station": "FOYER CULTUREL BANFELOUK / A",
              "voters": 311
            }
          ],
          "BANGONDACK": [
            {
              "station": "FOYER CULTUREL BANGONDACK / A",
              "voters": 92
            }
          ],
          "BANKA": [
            {
              "station": "FOYER CULTUREL BANKA- CHEFFERIE / A",
              "voters": 1247
            }
          ],
          "CHEFFERIE": [
            {
              "station": "FOYER CULTUREL BANKA- CHEFFERIE / A",
              "voters": 1195
            }
          ],
          "BAPOUFEN": [
            {
              "station": "FOYER CULTUREL BAPOUFEN / A",
              "voters": 155
            }
          ],
          "BATOUGONDACK": [
            {
              "station": "FOYER CULTUREL BAPOUFEN / A",
              "voters": 155
            }
          ],
          "DOMLEUGOU": [
            {
              "station": "FOYER CULTUREL DOMLEUGOU / A",
              "voters": 431
            }
          ],
          "FOLENTCHA": [
            {
              "station": "FOYER CULTUREL FOLENTCHA / A",
              "voters": 280
            }
          ],
          "MANILA": [
            {
              "station": "FOYER CULTUREL MANILA / A",
              "voters": 289
            }
          ],
          "MARCHE": [
            {
              "station": "LYCEE TECHNIQUE DE BAFANG / A",
              "voters": 52
            }
          ],
          "CARREFOUR": [
            {
              "station": "LYCEE TECHNIQUE DE BAFANG / A",
              "voters": 52
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE TECHNIQUE DE BAFANG / A",
              "voters": 52
            }
          ],
          "TECHNIQUE": [
            {
              "station": "LYCEE TECHNIQUE DE BAFANG / A",
              "voters": 52
            }
          ],
          "FUMANGA": [
            {
              "station": "MISSION CATH. POUANGO FUMANGA / A",
              "voters": 362
            }
          ]
        },
        "BANWA": {
          "GENDARMERIE": [
            {
              "station": "CENTRE DE JEUNESSE DE BANWA CENTRE /  A",
              "voters": 435
            }
          ],
          "PALMERAIE": [
            {
              "station": "CENTRE DE JEUNESSE DE BANWA CENTRE /  A",
              "voters": 435
            }
          ],
          "TCHUENWE": [
            {
              "station": "CENTRE DE JEUNESSE DE BANWA CENTRE /  A",
              "voters": 435
            }
          ],
          "DOMLA": [
            {
              "station": "CES BILINGUE DE FOMESSA / A",
              "voters": 547
            }
          ],
          "MEDJIE": [
            {
              "station": "CES BILINGUE DE FOMESSA / A",
              "voters": 547
            }
          ],
          "NZEUGUEU": [
            {
              "station": "DELEGATION AGRICULTURE BANWA / A",
              "voters": 60
            }
          ],
          "NZISO": [
            {
              "station": "DELEGATION AGRICULTURE BANWA / A",
              "voters": 60
            }
          ],
          "MFEKO": [
            {
              "station": "E.P BAMELECK / A",
              "voters": 114
            }
          ],
          "NKAKASHI": [
            {
              "station": "E.P BAMELECK / A",
              "voters": 114
            }
          ],
          "NTCHA'A": [
            {
              "station": "E.P BAMELECK / A",
              "voters": 114
            }
          ],
          "NTCHEKAM": [
            {
              "station": "E.P BAMELECK / A",
              "voters": 114
            }
          ],
          "TEEPOUA": [
            {
              "station": "E.P BAMELECK / A",
              "voters": 114
            }
          ],
          "FOYAVE": [
            {
              "station": "E.P BANWA CENTRE / A",
              "voters": 161
            }
          ],
          "MAKONGO": [
            {
              "station": "E.P BANWA CENTRE / A",
              "voters": 161
            }
          ],
          "KAKO": [
            {
              "station": "E.P KAKO - FONTI / A",
              "voters": 446
            }
          ],
          "POUKAKO": [
            {
              "station": "E.P KAKO - FONTI / A",
              "voters": 223
            }
          ],
          "KANEN": [
            {
              "station": "E.P. BAPOUNGUE / A",
              "voters": 195
            }
          ],
          "KEUMOU": [
            {
              "station": "E.P. BAPOUNGUE / A",
              "voters": 195
            }
          ],
          "MOUMEE": [
            {
              "station": "ECOLE CATH. DE MOUMEE MARCHE / A",
              "voters": 1285
            }
          ],
          "LONG": [
            {
              "station": "ECOLE CATH. DE MOUMEE MARCHE / A",
              "voters": 478
            }
          ],
          "TRAIT": [
            {
              "station": "ECOLE CATH. DE MOUMEE MARCHE / A",
              "voters": 478
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE CATH. DE MOUMEE MARCHE / A",
              "voters": 478
            }
          ],
          "AMICAL": [
            {
              "station": "ECOLE CATHOLIQUE FONTI / A",
              "voters": 367
            }
          ],
          "DOMBREK": [
            {
              "station": "ECOLE CATHOLIQUE FONTI / A",
              "voters": 367
            }
          ],
          "KING": [
            {
              "station": "ECOLE CATHOLIQUE FONTI / A",
              "voters": 2195
            }
          ],
          "PLACE": [
            {
              "station": "ECOLE CATHOLIQUE FONTI / A",
              "voters": 2195
            }
          ],
          "FONTI": [
            {
              "station": "ECOLE CATHOLIQUE FONTI / A",
              "voters": 367
            }
          ],
          "SUD": [
            {
              "station": "EP FOTSI-SUD / A",
              "voters": 205
            }
          ],
          "PONT": [
            {
              "station": "EPB DE DJAMONI / A",
              "voters": 329
            }
          ],
          "CENE": [
            {
              "station": "FOMESSA I / A",
              "voters": 197
            }
          ],
          "FOMESSA": [
            {
              "station": "FOMESSA I / A",
              "voters": 1291
            }
          ],
          "DJAMONI": [
            {
              "station": "FOYER BAKONTI / A",
              "voters": 157
            }
          ],
          "BAKONTI": [
            {
              "station": "FOYER BAKONTI / A",
              "voters": 157
            }
          ],
          "HOPITAL": [
            {
              "station": "FOYER BANWA CENTRE / A",
              "voters": 394
            }
          ],
          "KATANGA": [
            {
              "station": "FOYER BANWA CENTRE / A",
              "voters": 394
            }
          ],
          "STADE": [
            {
              "station": "FOYER BANWA CENTRE / A",
              "voters": 394
            }
          ],
          "DOMLAA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BAPOUNGUE /  A",
              "voters": 219
            }
          ],
          "BAPOUNGUE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BAPOUNGUE /  A",
              "voters": 219
            }
          ],
          "DOMBOCK": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 176
            }
          ],
          "DOMMEKOO": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 176
            }
          ],
          "FOTSI": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 454
            }
          ],
          "NORD": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 249
            }
          ],
          "NGOTTE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 176
            }
          ],
          "NKEUSIE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 176
            }
          ],
          "POUNDI": [
            {
              "station": "FOYER COMMUNAUTAIRE DE FOMBELE / A",
              "voters": 176
            }
          ],
          "MAIRIE": [
            {
              "station": "FOYER COMMUNAUTAIRE FOYAVE / A",
              "voters": 221
            }
          ],
          "SCANWATER": [
            {
              "station": "FOYER COMMUNAUTAIRE FOYAVE / A",
              "voters": 221
            }
          ]
        },
        "KEKEM": {
          "DAKLA": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE BALEMBO /  A",
              "voters": 161
            }
          ],
          "DOMTCHIEU": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE BALEMBO /  A",
              "voters": 161
            }
          ],
          "POULIEU": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE BALEMBO /  A",
              "voters": 161
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "COLLEGE MAYA KEKEM / A",
              "voters": 371
            }
          ],
          "QUARTIER": [
            {
              "station": "COLLEGE MAYA KEKEM / A",
              "voters": 371
            }
          ],
          "COLLEGE": [
            {
              "station": "COLLEGE MAYA KEKEM / A",
              "voters": 371
            }
          ],
          "MAYA": [
            {
              "station": "COLLEGE MAYA KEKEM / A",
              "voters": 371
            }
          ],
          "MAZOUKOUP": [
            {
              "station": "ECOLE CATHOLIQUE DE BAMENGWI / A",
              "voters": 333
            }
          ],
          "METOUZE": [
            {
              "station": "ECOLE CATHOLIQUE DE BAMENGWI / A",
              "voters": 729
            }
          ],
          "DEYEP": [
            {
              "station": "ECOLE CATHOLIQUE FOYEMTCHA / A",
              "voters": 286
            }
          ],
          "MEMFEBOM": [
            {
              "station": "ECOLE CATHOLIQUE FOYEMTCHA / A",
              "voters": 286
            }
          ],
          "TCHA'A": [
            {
              "station": "ECOLE CATHOLIQUE MBAFAM / A",
              "voters": 147
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 742
            }
          ],
          "MOUMEE": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 2420
            }
          ],
          "FONKOUAKEM": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 651
            }
          ],
          "MISSION": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 903
            }
          ],
          "QTIER": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 8967
            }
          ],
          "HOPITAL": [
            {
              "station": "ECOLE CATHOLIQUE MOUMEE / A",
              "voters": 385
            }
          ],
          "TITALOM": [
            {
              "station": "ECOLE CEBEC DE PETIT NKAM / A",
              "voters": 161
            }
          ],
          "PONT": [
            {
              "station": "ECOLE CEBEC FONDJOMOKO / A",
              "voters": 441
            }
          ],
          "KING-PLACE": [
            {
              "station": "ECOLE MATERNELLE DE KEKEM CENTRE / A",
              "voters": 5242
            }
          ],
          "PETIT": [
            {
              "station": "ECOLE MATERNELLE DE KEKEM CENTRE / A",
              "voters": 4190
            }
          ],
          "NKAM": [
            {
              "station": "ECOLE MATERNELLE DE KEKEM CENTRE / A",
              "voters": 4190
            }
          ],
          "KOUMEGWI": [
            {
              "station": "ECOLE MTLE DE BAMENGWI / A",
              "voters": 458
            }
          ],
          "CITE": [
            {
              "station": "ECOLE MTLE DE PETIT NKAM / A",
              "voters": 804
            }
          ],
          "DES": [
            {
              "station": "ECOLE MTLE DE PETIT NKAM / A",
              "voters": 804
            }
          ],
          "PALMIERS": [
            {
              "station": "ECOLE MTLE DE PETIT NKAM / A",
              "voters": 804
            }
          ],
          "CECILE": [
            {
              "station": "ECOLE MTLE DE PETIT NKAM / A",
              "voters": 804
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE MTLE DE PETIT NKAM / A",
              "voters": 1659
            }
          ],
          "KAMBO": [
            {
              "station": "ECOLE PUB. DE KAMBO / A",
              "voters": 151
            }
          ],
          "DOWN": [
            {
              "station": "ECOLE PUB. DE KAMBO / A",
              "voters": 108
            }
          ],
          "TCHOUNGOU": [
            {
              "station": "ECOLE PUB. DE TCHOUNGOU / A",
              "voters": 111
            }
          ],
          "NGASSA": [
            {
              "station": "ECOLE PUB. FOND. NGASSA NICODEME / A",
              "voters": 173
            }
          ],
          "NICODEME": [
            {
              "station": "ECOLE PUB. FOND. NGASSA NICODEME / A",
              "voters": 173
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE PUB. FOND. NGASSA NICODEME / A",
              "voters": 1066
            }
          ],
          "PUB.MOUMEE": [
            {
              "station": "ECOLE PUB. FOND. NGASSA NICODEME / A",
              "voters": 173
            }
          ],
          "MBAFAM": [
            {
              "station": "ECOLE PUB. MBAFAM CENTRE / A",
              "voters": 651
            }
          ],
          "BAVAD": [
            {
              "station": "ECOLE PUB. MBOEBO CENTRE / A",
              "voters": 450
            }
          ],
          "MBOUM": [
            {
              "station": "ECOLE PUB. MBOEBO CENTRE / A",
              "voters": 450
            }
          ],
          "BAYON": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 209
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 1102
            }
          ],
          "BOMBOCK": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 209
            }
          ],
          "DONKOU": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 209
            }
          ],
          "MBOUE": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 209
            }
          ],
          "NKOUANKALIEU": [
            {
              "station": "ECOLE PUB.BAYON CENTRE / A",
              "voters": 209
            }
          ],
          "MBOUEBOCK": [
            {
              "station": "ECOLE PUB.FOYEMTCHA CENTRE / A",
              "voters": 362
            }
          ],
          "MOUMEKEM": [
            {
              "station": "ECOLE PUB.FOYEMTCHA CENTRE / A",
              "voters": 362
            }
          ],
          "KACK": [
            {
              "station": "ECOLE PUB.FOYEMTCHA CHEFFERIE / A",
              "voters": 183
            }
          ],
          "NGOUEM": [
            {
              "station": "ECOLE PUB.FOYEMTCHA CHEFFERIE / A",
              "voters": 183
            }
          ],
          "BAKOUA": [
            {
              "station": "ECOLE PUBLIQUE DE BALEMBO / A",
              "voters": 400
            }
          ],
          "BAVAT": [
            {
              "station": "ECOLE PUBLIQUE DE BALEMBO / A",
              "voters": 400
            }
          ],
          "TCHOUDJEU": [
            {
              "station": "ECOLE PUBLIQUE DE BALEMBO / A",
              "voters": 400
            }
          ],
          "MBONZOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE BAMENGWI CENTRE / A",
              "voters": 396
            }
          ],
          "1ERE": [
            {
              "station": "ECOLE PUBLIQUE FOND. KING- PLACE / A",
              "voters": 855
            }
          ],
          "ETAPE": [
            {
              "station": "ECOLE PUBLIQUE FOND. KING- PLACE / A",
              "voters": 855
            }
          ],
          "DOMDI": [
            {
              "station": "ECOLE PUBLIQUE FONKOUAKEM / A",
              "voters": 446
            }
          ],
          "LOSSUH": [
            {
              "station": "ECOLE PUBLIQUE FONKOUAKEM / A",
              "voters": 446
            }
          ],
          "FONDJOMOKO": [
            {
              "station": "ECOLE PUBLIQUE FONKOUAKEM / A",
              "voters": 2156
            }
          ],
          "SHUNOCK": [
            {
              "station": "ECOLE PUBLIQUE FONKOUAKEM / A",
              "voters": 446
            }
          ],
          "EKOUOT": [
            {
              "station": "FOYER BANA KEKEM / A",
              "voters": 772
            }
          ],
          "RESIDENCE": [
            {
              "station": "FOYER BANA KEKEM / A",
              "voters": 401
            }
          ],
          "CARRIERE": [
            {
              "station": "FOYER CARRIERE KEKEM / A",
              "voters": 3527
            }
          ],
          "KEKEM": [
            {
              "station": "FOYER CARRIERE KEKEM / A",
              "voters": 8691
            }
          ],
          "NGOM-NZOCK": [
            {
              "station": "FOYER CULTUREL NGOM-NZOCK / A",
              "voters": 43
            }
          ],
          "TCHEUKOUA": [
            {
              "station": "FOYER FONKOUAKEM CENTRE / A",
              "voters": 149
            }
          ],
          "NYELE": [
            {
              "station": "FOYER NYELE / A",
              "voters": 936
            }
          ],
          "BALAKU": [
            {
              "station": "LYCEE BILINGUE DE MBOEBO / A",
              "voters": 751
            }
          ],
          "DJIKEU": [
            {
              "station": "LYCEE BILINGUE DE MBOEBO / A",
              "voters": 590
            }
          ],
          "MBOCBI": [
            {
              "station": "LYCEE BILINGUE DE MBOEBO / A",
              "voters": 1040
            }
          ],
          "BANGUI": [
            {
              "station": "LYCEE TECHNIQUE DE KEKEM / A",
              "voters": 1714
            }
          ],
          "CHARI": [
            {
              "station": "LYCEE TECHNIQUE DE KEKEM / A",
              "voters": 1714
            }
          ],
          "PUB.KEKEM": [
            {
              "station": "SALLE DES FETES DE KEKEM / A",
              "voters": 893
            }
          ],
          "MAIRIE": [
            {
              "station": "SALLE DES FETES DE KEKEM / A",
              "voters": 893
            }
          ],
          "NJIMBONG": [
            {
              "station": "SALLE DES FETES DE NJIMBONG 01 / A",
              "voters": 582
            }
          ]
        }
      },
      "MIFI": {
        "BAFOUSSAM I": {
          "NJINGAH": [
            {
              "station": "ARCHE DES PHOTONS / A",
              "voters": 2646
            }
          ],
          "(TAYIM)": [
            {
              "station": "ARCHE DES PHOTONS / A",
              "voters": 1922
            }
          ],
          "CENTRE": [
            {
              "station": "C U DE BAFOUSSAM / A",
              "voters": 2599
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "C U DE BAFOUSSAM / A",
              "voters": 2599
            }
          ],
          "FAMLA": [
            {
              "station": "CHAMBRE DE COMMERCE / A",
              "voters": 5337
            }
          ],
          "BIS": [
            {
              "station": "COLLEGE DE LA CITE / A",
              "voters": 6001
            }
          ],
          "KING": [
            {
              "station": "COLLEGE MARTIN LUTHER KING / A",
              "voters": 1672
            }
          ],
          "PLACE": [
            {
              "station": "COLLEGE MARTIN LUTHER KING / A",
              "voters": 1672
            }
          ],
          "TAMDJA": [
            {
              "station": "DEL. REG. COMMUNICATION / A",
              "voters": 2166
            }
          ],
          "NDIENGSO-I": [
            {
              "station": "ECOLE MATERNELLE BILINGUE CANADIENNE  /A",
              "voters": 570
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PRIVEE LES LABOUREURS / A",
              "voters": 5570
            }
          ],
          "(A)": [
            {
              "station": "EP BAMENDZI VILLE (A) / A",
              "voters": 3627
            }
          ],
          "(B)": [
            {
              "station": "EP BAMENDZI VILLE (B) / A",
              "voters": 3125
            }
          ],
          "BANEFO": [
            {
              "station": "EP BANEFO / A",
              "voters": 363
            }
          ],
          "TCHO": [
            {
              "station": "EP DE TCHO / A",
              "voters": 94
            }
          ],
          "TOMDJO": [
            {
              "station": "EP DE TOMDJO / A",
              "voters": 386
            }
          ],
          "DJELENG": [
            {
              "station": "EP DJELENG V / A",
              "voters": 4034
            }
          ],
          "DJEMOUM": [
            {
              "station": "EP DJEMOUM / A",
              "voters": 5827
            }
          ],
          "HOUKAHA": [
            {
              "station": "EP HOUKAHA / A",
              "voters": 1207
            }
          ],
          "HOUMKAM": [
            {
              "station": "EP HOUMKAM / A",
              "voters": 311
            }
          ],
          "KOUEKONG": [
            {
              "station": "EP KOUEKONG / A",
              "voters": 336
            }
          ],
          "NDIANBOU": [
            {
              "station": "EP MEDJO I / A",
              "voters": 1290
            }
          ],
          "MEDJO": [
            {
              "station": "EP MEDJO I / A",
              "voters": 294
            }
          ],
          "MELAM": [
            {
              "station": "EP MELAM I / A",
              "voters": 996
            }
          ],
          "NDEMSIEM": [
            {
              "station": "EP NDEMSIEM / A",
              "voters": 211
            }
          ],
          "BAMENDZI": [
            {
              "station": "EP NDIANGDAM / A",
              "voters": 30631
            }
          ],
          "BANENGO": [
            {
              "station": "EP NDIANGDAM / A",
              "voters": 28167
            }
          ],
          "VILLE": [
            {
              "station": "EP NDIANGDAM / A",
              "voters": 29349
            }
          ],
          "NDIANGDAM": [
            {
              "station": "EP NDIANGDAM / A",
              "voters": 10790
            }
          ],
          "NDIENGSO": [
            {
              "station": "EP NDIENGSO / A",
              "voters": 1863
            }
          ],
          "BATOUKOP": [
            {
              "station": "LYCEE DE BATOUKOP / A",
              "voters": 750
            }
          ],
          "III": [
            {
              "station": "MISSION CATHOLIQUE ST JEAN BAPTISTE / A",
              "voters": 6295
            }
          ],
          "MVOUTSAHA": [
            {
              "station": "MISSION PROT. MVOUTSAHA / A",
              "voters": 240
            }
          ]
        },
        "BAFOUSSAM II": {
          "FAMPIE": [
            {
              "station": "ANCIENNE BRIGADE GENDARMERIE / A",
              "voters": 481
            }
          ],
          "DIONTONG": [
            {
              "station": "CARREFOUR DIONTONG / A",
              "voters": 144
            }
          ],
          "BAYE": [
            {
              "station": "CASE DE SANTE DE BAYE / A",
              "voters": 206
            }
          ],
          "DOUPE": [
            {
              "station": "CEBEC DE DOUPE / A",
              "voters": 385
            }
          ],
          "II/BIS": [
            {
              "station": "CEBEC DE LAFE BAOBAB / A",
              "voters": 2798
            }
          ],
          "MARCHE": [
            {
              "station": "CEBEC DE TCHITCHAP / A",
              "voters": 1260
            }
          ],
          "KONTI": [
            {
              "station": "CES DE KONTI / A",
              "voters": 561
            }
          ],
          "III/B": [
            {
              "station": "COLLEGE NELSON MANDELA / A",
              "voters": 1124
            }
          ],
          "IV/D": [
            {
              "station": "COLLEGE TANKOU BLOC II / A",
              "voters": 2954
            }
          ],
          "I/C": [
            {
              "station": "COPLANO / A",
              "voters": 699
            }
          ],
          "IV/B": [
            {
              "station": "DELEGATION DEPT JEUNESSE / A",
              "voters": 1667
            }
          ],
          "MAETUR": [
            {
              "station": "E P B KOPTCHOU MAETUR / A",
              "voters": 1693
            }
          ],
          "BAKELACK": [
            {
              "station": "E P BANDENG / A",
              "voters": 110
            }
          ],
          "BANEFO-MIFI": [
            {
              "station": "E P BANEFO-MIFI / A",
              "voters": 397
            }
          ],
          "DJASSA": [
            {
              "station": "E P DJASSA / A",
              "voters": 322
            }
          ],
          "DJELENG": [
            {
              "station": "E P DJELENG I / A",
              "voters": 11635
            }
          ],
          "I/A": [
            {
              "station": "E P DJELENG I / A",
              "voters": 723
            }
          ],
          "III/A": [
            {
              "station": "E P DJELENG III / A",
              "voters": 3889
            }
          ],
          "NDIONKOU": [
            {
              "station": "E P FAMPIE / A",
              "voters": 1088
            }
          ],
          "TYO-VILLAGE": [
            {
              "station": "E P KPI DE TYO-VILLAGE I / A",
              "voters": 13631
            }
          ],
          "LAFE": [
            {
              "station": "E P LAFE / A",
              "voters": 3653
            }
          ],
          "LAGOUENG": [
            {
              "station": "E P LAGOUENG I / A",
              "voters": 778
            }
          ],
          "BALATCHOUET": [
            {
              "station": "E P LATCHOUET BAPI / A",
              "voters": 324
            }
          ],
          "BAPI": [
            {
              "station": "E P LATCHOUET BAPI / A",
              "voters": 914
            }
          ],
          "TCHADA": [
            {
              "station": "E P TCHADA / A",
              "voters": 312
            }
          ],
          "TCHITCHAP": [
            {
              "station": "E P TCHITCHAP / A",
              "voters": 3107
            }
          ],
          "VILLE": [
            {
              "station": "E P TOUGANG VILLE / A",
              "voters": 3087
            }
          ],
          "TYO-LAGOUENG": [
            {
              "station": "E P TYO-LAGOUENG / A",
              "voters": 680
            }
          ],
          "ZEGAM": [
            {
              "station": "E P ZEGAM / A",
              "voters": 216
            }
          ],
          "IV/A": [
            {
              "station": "ECOLE CATH. SAINT JOSEPH / A",
              "voters": 674
            }
          ],
          "IV/C": [
            {
              "station": "ECOLE CATH. SAINTE THERESE / A",
              "voters": 1261
            }
          ],
          "TYO-VILLE": [
            {
              "station": "ECOLE CATH. SAINTE THERESE / A",
              "voters": 2861
            }
          ],
          "BAKAJOU": [
            {
              "station": "ECOLE MAT. BANDENG / A",
              "voters": 189
            }
          ],
          "BANDENG": [
            {
              "station": "ECOLE MAT. BANDENG / A",
              "voters": 607
            }
          ],
          "KOPTCHOU": [
            {
              "station": "ECOLE MAT. CATH. KOPTCHOU / A",
              "voters": 5296
            }
          ],
          "TOUGANG": [
            {
              "station": "ECOLE MAT. CATH. KOPTCHOU / A",
              "voters": 15643
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE MAT. CATH. KOPTCHOU / A",
              "voters": 9670
            }
          ],
          "I/B": [
            {
              "station": "ECOLE MAT. DJELENG I / A",
              "voters": 423
            }
          ],
          "KING": [
            {
              "station": "ECOLE MAT. NDIONKOU / A",
              "voters": 985
            }
          ],
          "PLACE": [
            {
              "station": "ECOLE MAT. NDIONKOU / A",
              "voters": 985
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE MAT. SAINT DAMIEN LEPROSERIE / A",
              "voters": 4366
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE MAT. SAINT DAMIEN LEPROSERIE / A",
              "voters": 4366
            }
          ],
          "DEPOT": [
            {
              "station": "ECOLE MAT. TOUGANG MEBOUTI / A",
              "voters": 802
            }
          ],
          "PETROLIER": [
            {
              "station": "ECOLE MAT. TOUGANG MEBOUTI / A",
              "voters": 802
            }
          ],
          "TOUGANG-MEBOUTI": [
            {
              "station": "ECOLE MAT. TOUGANG MEBOUTI / A",
              "voters": 1682
            }
          ],
          "TYO-LANGOUENG": [
            {
              "station": "ECOLE ST PHILIPPE DE TONGU / A",
              "voters": 137
            }
          ],
          "TONGU": [
            {
              "station": "ECOLE ST PHILIPPE DE TONGU / A",
              "voters": 137
            }
          ],
          "III": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 3523
            }
          ],
          "LAVENG-BAPI": [
            {
              "station": "HOP BAPT LAVENG-BAPI / A",
              "voters": 181
            }
          ],
          "NGONLE": [
            {
              "station": "MISSION CATH. KEGANG / A",
              "voters": 159
            }
          ],
          "FAMTCHOUET": [
            {
              "station": "MISSION PROT. FAMTCHOUET / A",
              "voters": 1130
            }
          ],
          "NEFOLOUM": [
            {
              "station": "MISSION PROT. NEFOLOUM / A",
              "voters": 246
            }
          ],
          "SINTE": [
            {
              "station": "MISSION PROT. SINTE / A",
              "voters": 201
            }
          ],
          "BAKELEU": [
            {
              "station": "POSTE AGRICOLE DE BANDENG / A",
              "voters": 123
            }
          ]
        },
        "BAFOUSSAM III": {
          "BASSE": [
            {
              "station": "CEBEC BASSE / A",
              "voters": 814
            }
          ],
          "VILLE": [
            {
              "station": "CEBEC KOUOGOUO / A",
              "voters": 7370
            }
          ],
          "KENA": [
            {
              "station": "COLLEGE ITEGE / A",
              "voters": 812
            }
          ],
          "KOUOGOUO": [
            {
              "station": "COLLEGE SAINT THOMAS / A",
              "voters": 15725
            }
          ],
          "SUD": [
            {
              "station": "COLLEGE SAINT THOMAS / A",
              "voters": 2785
            }
          ],
          "VILLAGE": [
            {
              "station": "COLLEGE SAINT THOMAS / A",
              "voters": 5570
            }
          ],
          "III": [
            {
              "station": "ENIEG GOUACHE / A",
              "voters": 4716
            }
          ],
          "TCHOUONG": [
            {
              "station": "ENIEG GOUACHE / A",
              "voters": 4623
            }
          ],
          "BANDZE": [
            {
              "station": "EP BANDZE / A",
              "voters": 1766
            }
          ],
          "HOUNG": [
            {
              "station": "EP BASSE / A",
              "voters": 136
            }
          ],
          "GARNISON": [
            {
              "station": "EP CAMP MILITAIRE / A",
              "voters": 1866
            }
          ],
          "MILITAIRE": [
            {
              "station": "EP CAMP MILITAIRE / A",
              "voters": 1866
            }
          ],
          "KOUABANG": [
            {
              "station": "EP DJUKANG / A",
              "voters": 1149
            }
          ],
          "DJUTCHA": [
            {
              "station": "EP DJUTCHA / A",
              "voters": 297
            }
          ],
          "FAMKOUO": [
            {
              "station": "EP FAMKOUO / A",
              "voters": 530
            }
          ],
          "KELEU": [
            {
              "station": "EP KEULEU / A",
              "voters": 334
            }
          ],
          "LAFIE": [
            {
              "station": "EP LAFIE I / A",
              "voters": 920
            }
          ],
          "LATSIT": [
            {
              "station": "EP LATSIT-KAM / A",
              "voters": 1330
            }
          ],
          "GOUACHE": [
            {
              "station": "EP MB MALU / A",
              "voters": 15495
            }
          ],
          "NKONGSO": [
            {
              "station": "EP NKONGSO / A",
              "voters": 637
            }
          ],
          "KESSA": [
            {
              "station": "EP TOKET / A",
              "voters": 1012
            }
          ],
          "TOSSEU": [
            {
              "station": "EP TOKET / A",
              "voters": 1012
            }
          ],
          "VII": [
            {
              "station": "EPPB TCHEUCTHOUA / A",
              "voters": 1753
            }
          ],
          "DJUNANG": [
            {
              "station": "LYCEE DE DJUNANG / A",
              "voters": 771
            }
          ],
          "METE": [
            {
              "station": "LYCEE DE DJUNANG / A",
              "voters": 539
            }
          ],
          "TOKET": [
            {
              "station": "LYCEE TECHNIQUE DE TOKET / A",
              "voters": 3966
            }
          ],
          "HOUONG": [
            {
              "station": "MC HOUONG / A",
              "voters": 2795
            }
          ],
          "KAMKOP": [
            {
              "station": "MC KAMKOP / A",
              "voters": 16996
            }
          ],
          "METOH": [
            {
              "station": "MC KEGANG / A",
              "voters": 526
            }
          ],
          "MBI": [
            {
              "station": "MC MBI / A",
              "voters": 810
            }
          ],
          "TCHIPOU": [
            {
              "station": "MC TCHIPOU / A",
              "voters": 147
            }
          ],
          "TCHU": [
            {
              "station": "MC TCHU / A",
              "voters": 330
            }
          ],
          "LOUMGOUO": [
            {
              "station": "MC TOTCHAP / A",
              "voters": 199
            }
          ],
          "BII": [
            {
              "station": "PRISON CENTRALE / A",
              "voters": 782
            }
          ]
        }
      },
      "HAUTS-PLATEAUX": {
        "BAHAM": {
          "BLOC": [
            {
              "station": "CENTRE MULTIFONCTIONNEL / A",
              "voters": 549
            }
          ],
          "NYLON": [
            {
              "station": "CENTRE MULTIFONCTIONNEL / A",
              "voters": 549
            }
          ],
          "BAHIALA": [
            {
              "station": "CSI DE BAHIALA / A",
              "voters": 537
            }
          ],
          "BAPI": [
            {
              "station": "CSI DE BAPI / A",
              "voters": 303
            }
          ],
          "KATSE": [
            {
              "station": "CSI NGOUGOUA / A",
              "voters": 311
            }
          ],
          "TOULE": [
            {
              "station": "CSI NGOUGOUA / A",
              "voters": 311
            }
          ],
          "BAGHOM": [
            {
              "station": "EEC BAGHOM / A",
              "voters": 313
            }
          ],
          "CHENGNE": [
            {
              "station": "EEC CHENGNE / A",
              "voters": 142
            }
          ],
          "KAFFO": [
            {
              "station": "EEC KAFFO / A",
              "voters": 490
            }
          ],
          "TAMDJA": [
            {
              "station": "EEC PENKIEU / A",
              "voters": 240
            }
          ],
          "DEMKO": [
            {
              "station": "EEC PENKIEU / A",
              "voters": 240
            }
          ],
          "TOCHEFFOU": [
            {
              "station": "EEC PENKIEU / A",
              "voters": 240
            }
          ],
          "BAHO": [
            {
              "station": "EP BAHO / A",
              "voters": 283
            }
          ],
          "BAMENDJO": [
            {
              "station": "EP BAMENDJO / A",
              "voters": 389
            }
          ],
          "BANKA": [
            {
              "station": "EP BANKA / A",
              "voters": 730
            }
          ],
          "BATOUSSOUO": [
            {
              "station": "EP BATOSSOUO / A",
              "voters": 536
            }
          ],
          "KAMBEN": [
            {
              "station": "EP CHENGNE / A",
              "voters": 641
            }
          ],
          "PIETOYETSE": [
            {
              "station": "EP CHENGNE / A",
              "voters": 641
            }
          ],
          "DJEMGHEU": [
            {
              "station": "EP DJEMGHEU / A",
              "voters": 584
            }
          ],
          "CENTRE": [
            {
              "station": "EP DU CENTRE / A",
              "voters": 2064
            }
          ],
          "COMMERCIAL": [
            {
              "station": "EP DU CENTRE / A",
              "voters": 1476
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "EP GENGARMERIE / A",
              "voters": 588
            }
          ],
          "MBOUKUE": [
            {
              "station": "EP MAFOCHE / A",
              "voters": 510
            }
          ],
          "DJEKUN": [
            {
              "station": "EP POUMZE / A",
              "voters": 616
            }
          ],
          "TOCHIE": [
            {
              "station": "EP POUMZE / A",
              "voters": 616
            }
          ],
          "MKA": [
            {
              "station": "EP POUMZE / A",
              "voters": 616
            }
          ],
          "DEMGO": [
            {
              "station": "FC DEMGO / A",
              "voters": 657
            }
          ],
          "LASSEU": [
            {
              "station": "FC LAGWEU / A",
              "voters": 798
            }
          ],
          "TIETIE": [
            {
              "station": "LYCEE BILINGUE DE BAHAM / A",
              "voters": 123
            }
          ],
          "DEMGOUE": [
            {
              "station": "MC NGOUGOUA / A",
              "voters": 238
            }
          ],
          "CHEFFOU": [
            {
              "station": "MC PENKWA / A",
              "voters": 303
            }
          ],
          "TOPOUMZE": [
            {
              "station": "MC POUMZE / A",
              "voters": 223
            }
          ],
          "MAMYOM": [
            {
              "station": "MC POUMZE / A",
              "voters": 223
            }
          ],
          "LAGWEU": [
            {
              "station": "MC SAINT ANDRE / A",
              "voters": 223
            }
          ]
        },
        "BAMENDJOU": {
          "BAKOUOKEU": [
            {
              "station": "CEBEC BAMENDJOU / A",
              "voters": 226
            }
          ],
          "MEDJI": [
            {
              "station": "CEBEC BAMENDJOU / A",
              "voters": 851
            }
          ],
          "BALATSIT": [
            {
              "station": "CSI BALATSIT / A",
              "voters": 1053
            }
          ],
          "BAMESSING": [
            {
              "station": "EMC BAMESSING / A",
              "voters": 668
            }
          ],
          "BATCHAVEU": [
            {
              "station": "EMC BATOGUEU / A",
              "voters": 395
            }
          ],
          "BATOGUEU": [
            {
              "station": "EMC BATOGUEU / A",
              "voters": 395
            }
          ],
          "DJEUGO": [
            {
              "station": "EMC DJEUGO / A",
              "voters": 262
            }
          ],
          "BAMOHIE": [
            {
              "station": "EMC KAGHO / A",
              "voters": 283
            }
          ],
          "LATSIT": [
            {
              "station": "EMC LATSIT / A",
              "voters": 634
            }
          ],
          "NKONVE": [
            {
              "station": "EMC NKONVE / A",
              "voters": 376
            }
          ],
          "DJUMKANG": [
            {
              "station": "EMC ST ANTOINE / A",
              "voters": 418
            }
          ],
          "BATOUMI": [
            {
              "station": "EMC ST GABRIEL / A",
              "voters": 325
            }
          ],
          "BADJUPA": [
            {
              "station": "EMC TOBA / A",
              "voters": 543
            }
          ],
          "BABOUM": [
            {
              "station": "EP BABOUM / A",
              "voters": 663
            }
          ],
          "BAMBOU": [
            {
              "station": "EP BAHOUAN CENTRE / A",
              "voters": 214
            }
          ],
          "BAKANG": [
            {
              "station": "EP BAKANG / A",
              "voters": 538
            }
          ],
          "III": [
            {
              "station": "EP BALATSIT / A",
              "voters": 209
            }
          ],
          "NGOUANG": [
            {
              "station": "EP BAMEKA CHEFFERIE / A",
              "voters": 998
            }
          ],
          "NKET": [
            {
              "station": "EP BAMEKA CHEFFERIE / A",
              "voters": 998
            }
          ],
          "BATCHANG": [
            {
              "station": "EP BAMENDJOU CHEFFERIE / A",
              "voters": 660
            }
          ],
          "BATCHUNKANG": [
            {
              "station": "EP BAMENDJOU CHEFFERIE / A",
              "voters": 660
            }
          ],
          "BATOUGOUONG": [
            {
              "station": "EP BAMENDJOU CHEFFERIE / A",
              "voters": 660
            }
          ],
          "BAMEYA": [
            {
              "station": "EP BAMEYA / A",
              "voters": 584
            }
          ],
          "BATCHOUNOUO": [
            {
              "station": "EP BANGAM CENTRE / A",
              "voters": 479
            }
          ],
          "BATEUFANG": [
            {
              "station": "EP BANGAM CENTRE / A",
              "voters": 479
            }
          ],
          "BAPENG": [
            {
              "station": "EP BAPENG / A",
              "voters": 365
            }
          ],
          "BATCHIT": [
            {
              "station": "EP BATCHIT / A",
              "voters": 345
            }
          ],
          "BATIDONG": [
            {
              "station": "EP BATCHIT / A",
              "voters": 345
            }
          ],
          "BATCHOUM": [
            {
              "station": "EP BATCHOUM / A",
              "voters": 497
            }
          ],
          "BATOUNTA": [
            {
              "station": "EP BATOUNTA / A",
              "voters": 409
            }
          ],
          "PLATEAU": [
            {
              "station": "EP BILINGUE BAMENDJOU / A",
              "voters": 458
            }
          ],
          "ADMINISRATIF": [
            {
              "station": "EP BILINGUE BAMENDJOU / A",
              "voters": 458
            }
          ],
          "DJUT": [
            {
              "station": "EP DJUT / A",
              "voters": 675
            }
          ],
          "BAGHEU": [
            {
              "station": "EP GROUPE 1 / A",
              "voters": 1232
            }
          ],
          "BATOKE": [
            {
              "station": "EP GROUPE 1 / A",
              "voters": 1362
            }
          ],
          "BAHILA": [
            {
              "station": "EP MATERNELLE BAHILA / A",
              "voters": 161
            }
          ],
          "(BANGAM)": [
            {
              "station": "EP MATERNELLE BAHILA / A",
              "voters": 161
            }
          ],
          "BAHIALA": [
            {
              "station": "EP NDENG / A",
              "voters": 394
            }
          ],
          "(BAHOUAN)": [
            {
              "station": "EP NDENG / A",
              "voters": 394
            }
          ],
          "BADENTCHA": [
            {
              "station": "FOYER BAHOUAN / A",
              "voters": 293
            }
          ],
          "BAKOUOGOUO": [
            {
              "station": "LYCEE CLASSIQUE BAMEKA / A",
              "voters": 769
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE CLASSIQUE BAMEKA / A",
              "voters": 393
            }
          ],
          "BADANG": [
            {
              "station": "LYCEE DE BAMENDJOU / A",
              "voters": 657
            }
          ]
        },
        "BANGOU": {
          "BALANGOUE": [
            {
              "station": "E CEBEC BANGOU VILLE / A",
              "voters": 219
            }
          ],
          "TCHEIKON-KA'AKA": [
            {
              "station": "EB BANGOU VILLE / A",
              "voters": 134
            }
          ],
          "NDENGNIEP": [
            {
              "station": "EC BANGOU CARREFOUR / A",
              "voters": 1397
            }
          ],
          "MADAGASCAR": [
            {
              "station": "EC BANGOU VILLE / A",
              "voters": 167
            }
          ],
          "BADJENWANG": [
            {
              "station": "EC BAPA / A",
              "voters": 528
            }
          ],
          "BALANGOU": [
            {
              "station": "EC BAPA / A",
              "voters": 528
            }
          ],
          "DJEUKOU": [
            {
              "station": "EC BAPA / A",
              "voters": 528
            }
          ],
          "BADENSO": [
            {
              "station": "EP BADENSO / A",
              "voters": 480
            }
          ],
          "FAMLEU": [
            {
              "station": "EP BADENSO / A",
              "voters": 480
            }
          ],
          "BALAMBO": [
            {
              "station": "EP BALAMBO / A",
              "voters": 426
            }
          ],
          "BATOUGO": [
            {
              "station": "EP BALAMBO / A",
              "voters": 426
            }
          ],
          "BALOUMGOU": [
            {
              "station": "EP BALOUMGOU / A",
              "voters": 728
            }
          ],
          "BATOUKONG": [
            {
              "station": "EP BALOUMGOU / A",
              "voters": 728
            }
          ],
          "POHEKEU": [
            {
              "station": "EP BALOUMGOU / A",
              "voters": 728
            }
          ],
          "POUTSUE": [
            {
              "station": "EP BALOUMGOU / A",
              "voters": 728
            }
          ],
          "BANDENKOP": [
            {
              "station": "EP BANDENKOP CENTRE / A",
              "voters": 322
            }
          ],
          "CENTRE": [
            {
              "station": "EP BANDENKOP CENTRE / A",
              "voters": 1376
            }
          ],
          "BANTOUO": [
            {
              "station": "EP BANGOU CARREFOUR / A",
              "voters": 375
            }
          ],
          "(BANGOU)": [
            {
              "station": "EP BANGOU CARREFOUR / A",
              "voters": 375
            }
          ],
          "BAKANGOUE": [
            {
              "station": "EP BANGOU VILLE / A",
              "voters": 750
            }
          ],
          "BANKAKA": [
            {
              "station": "EP BANGOU VILLE / A",
              "voters": 750
            }
          ],
          "BADENGPA": [
            {
              "station": "EP BAPA / A",
              "voters": 736
            }
          ],
          "BATOP": [
            {
              "station": "EP BAPA / A",
              "voters": 1111
            }
          ],
          "(BAPA)": [
            {
              "station": "EP BAPA / A",
              "voters": 736
            }
          ],
          "LOUG": [
            {
              "station": "EP BAPA / A",
              "voters": 736
            }
          ],
          "FEUTCHI": [
            {
              "station": "EP BETE / A",
              "voters": 218
            }
          ],
          "TCHITCHOUO": [
            {
              "station": "EP BETE / A",
              "voters": 218
            }
          ],
          "BAKEN": [
            {
              "station": "EP CHEFFERIE / A",
              "voters": 662
            }
          ],
          "BANZINZI": [
            {
              "station": "EP CHEFFERIE / A",
              "voters": 662
            }
          ],
          "BATOUZO": [
            {
              "station": "EP CHEFFERIE / A",
              "voters": 662
            }
          ],
          "DEMGUEU": [
            {
              "station": "EP CHEFFERIE / A",
              "voters": 662
            }
          ],
          "KING-PLACE": [
            {
              "station": "EP CHEFFERIE / A",
              "voters": 662
            }
          ],
          "FEM": [
            {
              "station": "EP KENSUM / A",
              "voters": 274
            }
          ],
          "KENSUM": [
            {
              "station": "EP KENSUM / A",
              "voters": 274
            }
          ],
          "KOUTON": [
            {
              "station": "EP KENSUM / A",
              "voters": 274
            }
          ],
          "TSEMEHIA": [
            {
              "station": "EP KENSUM / A",
              "voters": 274
            }
          ],
          "FOBLEP": [
            {
              "station": "EP MEDJIEU / A",
              "voters": 596
            }
          ],
          "MEDJIEU": [
            {
              "station": "EP MEDJIEU / A",
              "voters": 1226
            }
          ],
          "NGOUETCHA": [
            {
              "station": "EP NGOUETCHA / A",
              "voters": 124
            }
          ],
          "BADENKENG": [
            {
              "station": "EP PAKEM / A",
              "voters": 362
            }
          ],
          "PAKEM": [
            {
              "station": "EP PAKEM / A",
              "voters": 362
            }
          ],
          "KENONG": [
            {
              "station": "EP TAMDJO / A",
              "voters": 509
            }
          ],
          "KEPTCHE": [
            {
              "station": "EP TAMDJO / A",
              "voters": 509
            }
          ],
          "SAMBI": [
            {
              "station": "EP TAMDJO / A",
              "voters": 509
            }
          ],
          "TCHITCHI": [
            {
              "station": "EP TCHICTCHI / A",
              "voters": 292
            }
          ],
          "BATSELA": [
            {
              "station": "EP TSIM-TSELA / A",
              "voters": 299
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "EP TSIM-TSELA / A",
              "voters": 1054
            }
          ]
        },
        "BATIE": {
          "NDEUMGNOCK": [
            {
              "station": "CES BALIG / A",
              "voters": 154
            }
          ],
          "ZANG": [
            {
              "station": "CES BALIG / A",
              "voters": 154
            }
          ],
          "NDEUMTOUH": [
            {
              "station": "CES BILINGUE BATIE / A",
              "voters": 200
            }
          ],
          "DEUTCHA": [
            {
              "station": "CSI BAMETCHETCHA / A",
              "voters": 67
            }
          ],
          "MBO": [
            {
              "station": "CSI BAMETCHETCHA / A",
              "voters": 67
            }
          ],
          "TSHESSO'O": [
            {
              "station": "E.P. DE NSO'O / A",
              "voters": 140
            }
          ],
          "DJEUKHOUE": [
            {
              "station": "E.P. DE NSO'O / A",
              "voters": 140
            }
          ],
          "BALIG": [
            {
              "station": "EMC BALIG / A",
              "voters": 448
            }
          ],
          "TOUKOP": [
            {
              "station": "EMC FAMGOUM II / A",
              "voters": 487
            }
          ],
          "BADJEUGOU": [
            {
              "station": "EP BADJEUGOU / A",
              "voters": 426
            }
          ],
          "LEUH": [
            {
              "station": "EP BAMETCHETCHA / A",
              "voters": 75
            }
          ],
          "HIALA": [
            {
              "station": "EP BATIE CHEFFERIE / A",
              "voters": 1357
            }
          ],
          "BACHEPANG": [
            {
              "station": "EP BATIE COL / A",
              "voters": 627
            }
          ],
          "BAMETCHOUE": [
            {
              "station": "EP BATIE COL / A",
              "voters": 627
            }
          ],
          "FODOM": [
            {
              "station": "EP BATIE COL / A",
              "voters": 627
            }
          ],
          "FAMGOUM": [
            {
              "station": "EP FAMGOUM I / A",
              "voters": 1638
            }
          ],
          "DEJEDEUM": [
            {
              "station": "EPPLM BATIE / A",
              "voters": 219
            }
          ],
          "NZANG": [
            {
              "station": "EPPLM BATIE / A",
              "voters": 219
            }
          ],
          "TEUH": [
            {
              "station": "FOYER BAMETCHETCHA / A",
              "voters": 345
            }
          ],
          "GOUFEU": [
            {
              "station": "FOYER BAMETCHETCHA / A",
              "voters": 345
            }
          ],
          "TCHOMSO": [
            {
              "station": "LYCEE TECHNIQUE DE BATIE / A",
              "voters": 157
            }
          ],
          "LAGOU": [
            {
              "station": "MC LAGOU I / A",
              "voters": 1266
            }
          ]
        }
      },
      "NDE": {
        "BANGANGTE": {
          "FOPBOU": [
            {
              "station": "CEBEC BAMENA / A",
              "voters": 340
            }
          ],
          "NDEPGANG": [
            {
              "station": "CEBEC BAMENA / A",
              "voters": 340
            }
          ],
          "SO'OH": [
            {
              "station": "CEBEC BAMENA / A",
              "voters": 340
            }
          ],
          "TOUTAP": [
            {
              "station": "CEBEC BAMENA / A",
              "voters": 340
            }
          ],
          "BANEKANE": [
            {
              "station": "CEBEC BANEKANE / A",
              "voters": 958
            }
          ],
          "BATOUKOP": [
            {
              "station": "CEBEC BATOUKOP / A",
              "voters": 239
            }
          ],
          "TOUDANDOU": [
            {
              "station": "CEBEC BATOUKOP / A",
              "voters": 239
            }
          ],
          "PEUDONG": [
            {
              "station": "CEBEC FEUTAP / A",
              "voters": 288
            }
          ],
          "BAFEUGNOUN": [
            {
              "station": "CENTRE DE SANTE DE BAFEUGNOUN / A",
              "voters": 212
            }
          ],
          "BASSANDIANG": [
            {
              "station": "CENTRE DE SANTE DE BAFEUGNOUN / A",
              "voters": 212
            }
          ],
          "KAMDAM": [
            {
              "station": "CENTRE DE SANTE DE POUMPA / A",
              "voters": 147
            }
          ],
          "POUMPA": [
            {
              "station": "CENTRE DE SANTE DE POUMPA / A",
              "voters": 147
            }
          ],
          "FAMBEU": [
            {
              "station": "CETIC BANEKANE / A",
              "voters": 161
            }
          ],
          "MAGNIADJEU": [
            {
              "station": "DELEGATION DEPT TRAVAUX PUBLICS / A",
              "voters": 553
            }
          ],
          "NGANKOUN": [
            {
              "station": "DELEGATION DEPT TRAVAUX PUBLICS / A",
              "voters": 553
            }
          ],
          "DEPTAP": [
            {
              "station": "DISPENSAIRE BAMENA / A",
              "voters": 532
            }
          ],
          "NTAH": [
            {
              "station": "DISPENSAIRE BAMENA / A",
              "voters": 532
            }
          ],
          "POZOU": [
            {
              "station": "DISPENSAIRE BAMENA / A",
              "voters": 532
            }
          ],
          "TONCHO": [
            {
              "station": "DISPENSAIRE BAMENA / A",
              "voters": 532
            }
          ],
          "MANDJA": [
            {
              "station": "ECOLE D'INGENIEURIE DE MANDJA / A",
              "voters": 1003
            }
          ],
          "NDIENTANG": [
            {
              "station": "ECOLE MAT. DE BANGANG-FOKAM / A",
              "voters": 69
            }
          ],
          "FAMNGO": [
            {
              "station": "ECOLE MATERNELLE DE NENTA / A",
              "voters": 29
            }
          ],
          "TCHOUNEUM": [
            {
              "station": "ECOLE PRIVEE DE TCHOUNEUM / A",
              "voters": 49
            }
          ],
          "BAGNOU": [
            {
              "station": "EP BAGNOU / A",
              "voters": 195
            }
          ],
          "FOPLEP": [
            {
              "station": "EP BAGNOU / A",
              "voters": 195
            }
          ],
          "FOPLOUH": [
            {
              "station": "EP BAGNOU / A",
              "voters": 195
            }
          ],
          "BAKWA": [
            {
              "station": "EP BAHOUOC / A",
              "voters": 299
            }
          ],
          "FEUTCHOUET": [
            {
              "station": "EP BAHOUOC / A",
              "voters": 299
            }
          ],
          "NOUMKO": [
            {
              "station": "EP BAHOUOC / A",
              "voters": 299
            }
          ],
          "LANGWEU": [
            {
              "station": "EP BAMENA / A",
              "voters": 315
            }
          ],
          "BANDIANGSEU": [
            {
              "station": "EP BANDIANGSEU / A",
              "voters": 525
            }
          ],
          "BANDJUIDJONG": [
            {
              "station": "EP BANDJUIDJONG / A",
              "voters": 40
            }
          ],
          "BANEKOUANE": [
            {
              "station": "EP BANEKANE / A",
              "voters": 1252
            }
          ],
          "NETAM": [
            {
              "station": "EP BANEKANE / A",
              "voters": 680
            }
          ],
          "PAMKOP": [
            {
              "station": "EP BANEKANE / A",
              "voters": 680
            }
          ],
          "NDIONCHEU": [
            {
              "station": "EP BANGANG-FOKAM / A",
              "voters": 381
            }
          ],
          "TEU": [
            {
              "station": "EP BANGANG-FOKAM / A",
              "voters": 381
            }
          ],
          "FAMDIONGSO": [
            {
              "station": "EP BANGOUA / A",
              "voters": 772
            }
          ],
          "BANOUMGA": [
            {
              "station": "EP BANOUMGA / A",
              "voters": 354
            }
          ],
          "MANKO": [
            {
              "station": "EP BANOUMGA / A",
              "voters": 354
            }
          ],
          "BANTOUM": [
            {
              "station": "EP BANTOUM 1 / A",
              "voters": 2691
            }
          ],
          "KA'A": [
            {
              "station": "EP BATCHINGOU / A",
              "voters": 408
            }
          ],
          "LAH": [
            {
              "station": "EP BATCHINGOU / A",
              "voters": 408
            }
          ],
          "TOUKOU": [
            {
              "station": "EP BATCHINGOU / A",
              "voters": 408
            }
          ],
          "TOUNTA": [
            {
              "station": "EP BATCHINGOU / A",
              "voters": 408
            }
          ],
          "BATELA": [
            {
              "station": "EP BATELA / A",
              "voters": 499
            }
          ],
          "QUARTIER": [
            {
              "station": "EP D'APPLICATION 1 / A",
              "voters": 20763
            }
          ],
          "FATGO'O": [
            {
              "station": "EP FATGO'O / A",
              "voters": 59
            }
          ],
          "TCHOUAGWA": [
            {
              "station": "EP FATGO'O / A",
              "voters": 59
            }
          ],
          "BATAP": [
            {
              "station": "EP FEUTAP / A",
              "voters": 320
            }
          ],
          "FEUTAP": [
            {
              "station": "EP FEUTAP / A",
              "voters": 550
            }
          ],
          "NAAH": [
            {
              "station": "EP KAMNA / A",
              "voters": 697
            }
          ],
          "KONTAP": [
            {
              "station": "EP KONTAP / A",
              "voters": 483
            }
          ],
          "TATAP": [
            {
              "station": "EP KONTAP / A",
              "voters": 483
            }
          ],
          "TCHOUPLANG": [
            {
              "station": "EP KONTAP / A",
              "voters": 483
            }
          ],
          "FANG": [
            {
              "station": "EP KOPKING / A",
              "voters": 488
            }
          ],
          "KOPKING": [
            {
              "station": "EP KOPKING / A",
              "voters": 488
            }
          ],
          "KOPNDA": [
            {
              "station": "EP KOPKING / A",
              "voters": 488
            }
          ],
          "LAFENG": [
            {
              "station": "EP KOPKING / A",
              "voters": 488
            }
          ],
          "MADOUM": [
            {
              "station": "EP MADOUM / A",
              "voters": 397
            }
          ],
          "MAHAM": [
            {
              "station": "EP MAHAM / A",
              "voters": 366
            }
          ],
          "MANGO'O": [
            {
              "station": "EP MANGO'O / A",
              "voters": 433
            }
          ],
          "MATAM": [
            {
              "station": "EP MANGO'O / A",
              "voters": 433
            }
          ],
          "NJIPKO": [
            {
              "station": "EP MANGO'O / A",
              "voters": 433
            }
          ],
          "TCHOUDIM": [
            {
              "station": "EP MANGO'O / A",
              "voters": 433
            }
          ],
          "FAMVEU": [
            {
              "station": "EP MVEU / A",
              "voters": 182
            }
          ],
          "MVEU": [
            {
              "station": "EP MVEU / A",
              "voters": 182
            }
          ],
          "NOUMTCHOUET": [
            {
              "station": "EP NOUMTCHOUET / A",
              "voters": 375
            }
          ],
          "MANGA": [
            {
              "station": "EP NYAMGA / A",
              "voters": 496
            }
          ],
          "NOUMFAM": [
            {
              "station": "EP NYAMGA / A",
              "voters": 496
            }
          ],
          "NYAMGA": [
            {
              "station": "EP NYAMGA / A",
              "voters": 496
            }
          ],
          "NZUILOU": [
            {
              "station": "EP NYAMGA / A",
              "voters": 496
            }
          ],
          "PRN": [
            {
              "station": "EP PRN 1 / A",
              "voters": 1123
            }
          ],
          "BANGOULAP": [
            {
              "station": "EP SAGNA / A",
              "voters": 433
            }
          ],
          "SAGNA": [
            {
              "station": "EP SAGNA / A",
              "voters": 433
            }
          ],
          "FEUNGA": [
            {
              "station": "EP SAGNA / A",
              "voters": 433
            }
          ],
          "DEPOUOLONG": [
            {
              "station": "EP TOULAH / A",
              "voters": 138
            }
          ],
          "HOULAP": [
            {
              "station": "EP TOULAH / A",
              "voters": 138
            }
          ],
          "NDEPTAH": [
            {
              "station": "EP TOULAH / A",
              "voters": 138
            }
          ],
          "TOULAH": [
            {
              "station": "EP TOULAH / A",
              "voters": 138
            }
          ],
          "BABOU": [
            {
              "station": "FOYER BABOU 1 / A",
              "voters": 595
            }
          ],
          "BANESSAH": [
            {
              "station": "FOYER BANESSAH / A",
              "voters": 84
            }
          ],
          "DOUNDOU": [
            {
              "station": "FOYER BANESSAH / A",
              "voters": 84
            }
          ],
          "KOUNSAH": [
            {
              "station": "FOYER BANESSAH / A",
              "voters": 84
            }
          ],
          "BASSIFEU": [
            {
              "station": "FOYER BASSIFEU / A",
              "voters": 99
            }
          ],
          "NEUDJAP": [
            {
              "station": "FOYER BASSIFEU / A",
              "voters": 99
            }
          ],
          "BITCHOUA": [
            {
              "station": "FOYER BITCHOUA SUD / A",
              "voters": 319
            }
          ],
          "SUD": [
            {
              "station": "FOYER BITCHOUA SUD / A",
              "voters": 319
            }
          ],
          "BONGO": [
            {
              "station": "FOYER BONKEU / A",
              "voters": 251
            }
          ],
          "BONKEU": [
            {
              "station": "FOYER BONKEU / A",
              "voters": 251
            }
          ],
          "FAMETCHA": [
            {
              "station": "FOYER FAMETCHA / A",
              "voters": 198
            }
          ],
          "TOUNGOUI": [
            {
              "station": "FOYER FAMETCHA / A",
              "voters": 198
            }
          ],
          "FAMNGO-NENTA": [
            {
              "station": "FOYER FAMNGO-NENTA / A",
              "voters": 539
            }
          ],
          "BAYAHOUN": [
            {
              "station": "FOYER FEUMBATH / A",
              "voters": 712
            }
          ],
          "FEUMBATH": [
            {
              "station": "FOYER FEUMBATH / A",
              "voters": 712
            }
          ],
          "PEDON": [
            {
              "station": "FOYER FEUTAP / A",
              "voters": 99
            }
          ],
          "KAFENG": [
            {
              "station": "FOYER KAFENG / A",
              "voters": 314
            }
          ],
          "KEDACK": [
            {
              "station": "FOYER KEDACK / A",
              "voters": 45
            }
          ],
          "DEWEH": [
            {
              "station": "FOYER KWELEH / A",
              "voters": 258
            }
          ],
          "KWELEH": [
            {
              "station": "FOYER KWELEH / A",
              "voters": 258
            }
          ],
          "TOUSSIEU": [
            {
              "station": "FOYER KWELEH / A",
              "voters": 258
            }
          ],
          "LANGOUI": [
            {
              "station": "FOYER LANGOUI / A",
              "voters": 117
            }
          ],
          "LANGWI": [
            {
              "station": "FOYER LANGWI / A",
              "voters": 125
            }
          ],
          "MBANGWEU": [
            {
              "station": "FOYER MBANGWEU / A",
              "voters": 85
            }
          ],
          "MBOMBEU": [
            {
              "station": "FOYER MBOMBEU / A",
              "voters": 97
            }
          ],
          "NGOUIKONG": [
            {
              "station": "FOYER MBOMBEU / A",
              "voters": 97
            }
          ],
          "MENEU": [
            {
              "station": "FOYER MENEU / A",
              "voters": 43
            }
          ],
          "NDEPKONG": [
            {
              "station": "FOYER NDEPKONG / A",
              "voters": 165
            }
          ],
          "NGOUADJI": [
            {
              "station": "FOYER NDEPKONG / A",
              "voters": 165
            }
          ],
          "YANLONG": [
            {
              "station": "FOYER NDEPKONG / A",
              "voters": 165
            }
          ],
          "NDEPNOU": [
            {
              "station": "FOYER NDEPNOU / A",
              "voters": 339
            }
          ],
          "NDOUKONG": [
            {
              "station": "FOYER NDOUKONG / A",
              "voters": 479
            }
          ],
          "NENGA": [
            {
              "station": "FOYER NENGA 1 / A",
              "voters": 496
            }
          ],
          "NENTA": [
            {
              "station": "FOYER NENTA / A",
              "voters": 355
            }
          ],
          "MABIT": [
            {
              "station": "FOYER NYAMBEU / A",
              "voters": 192
            }
          ],
          "NYAMBEU": [
            {
              "station": "FOYER NYAMBEU / A",
              "voters": 192
            }
          ],
          "SAGNAM": [
            {
              "station": "FOYER SAGNAM / A",
              "voters": 346
            }
          ],
          "SANGOUA": [
            {
              "station": "FOYER SANGOUA / A",
              "voters": 98
            }
          ],
          "SANKI": [
            {
              "station": "FOYER SANKI / A",
              "voters": 247
            }
          ],
          "TALEUM": [
            {
              "station": "FOYER TALEUM / A",
              "voters": 622
            }
          ],
          "TCHILA": [
            {
              "station": "FOYER TCHILA / A",
              "voters": 204
            }
          ],
          "TOUGONG": [
            {
              "station": "FOYER TOUGONG / A",
              "voters": 384
            }
          ],
          "TOUKWEUT": [
            {
              "station": "FOYER TOUKWEUT / A",
              "voters": 265
            }
          ],
          "BALOUE": [
            {
              "station": "FOYER TOUMVEU / A",
              "voters": 270
            }
          ],
          "FAPDOLOP": [
            {
              "station": "FOYER TOUMVEU / A",
              "voters": 270
            }
          ],
          "TOUMVEU": [
            {
              "station": "FOYER TOUMVEU / A",
              "voters": 270
            }
          ],
          "ZAP": [
            {
              "station": "FOYER ZAP / A",
              "voters": 59
            }
          ],
          "BAMETCHA": [
            {
              "station": "LYCEE DE BANGANG-FOKAM / A",
              "voters": 177
            }
          ],
          "NJIFOUE": [
            {
              "station": "LYCEE DE BANGANG-FOKAM / A",
              "voters": 177
            }
          ],
          "PEUP": [
            {
              "station": "LYCEE DE BANGOUA / A",
              "voters": 192
            }
          ],
          "LOUH": [
            {
              "station": "LYCEE TECHNIQUE DE BAMENA / A",
              "voters": 747
            }
          ],
          "METCHA": [
            {
              "station": "ORPHELINAT LA BONNE CASE / A",
              "voters": 109
            }
          ],
          "BGTE": [
            {
              "station": "ORPHELINAT LA BONNE CASE / A",
              "voters": 109
            }
          ],
          "BANDONG": [
            {
              "station": "POSTE AGRICOLE DE BATCHINGOU / A",
              "voters": 138
            }
          ],
          "BANGOUE": [
            {
              "station": "POSTE AGRICOLE DE BATCHINGOU / A",
              "voters": 138
            }
          ],
          "TOUNGOUE": [
            {
              "station": "POSTE AGRICOLE DE BATCHINGOU / A",
              "voters": 138
            }
          ]
        },
        "BASSAMBA": {
          "NEW": [
            {
              "station": "CENTRE DINSERTION DES JEUNES(CIJ) / A",
              "voters": 91
            }
          ],
          "TOWN": [
            {
              "station": "CENTRE DINSERTION DES JEUNES(CIJ) / A",
              "voters": 91
            }
          ],
          "QUARTIER": [
            {
              "station": "EP BABOSSA / A",
              "voters": 3762
            }
          ],
          "BANYABO": [
            {
              "station": "POSTE AGRICOLE DE BANYABO / A",
              "voters": 22
            }
          ]
        },
        "BAZOU": {
          "QUARTIER": [
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 207
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 207
            }
          ],
          "MBOU": [
            {
              "station": "CENTRE D'ACCUEIL BALENGOU / A",
              "voters": 250
            }
          ],
          "CONFORT": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 424
            }
          ],
          "COTEAU": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 424
            }
          ],
          "FAMTCHOUET": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 787
            }
          ],
          "BLOC": [
            {
              "station": "ECOLE CEBEC BALENGOU / A",
              "voters": 441
            }
          ],
          "MABOU": [
            {
              "station": "ECOLE CEBEC BALENGOU / A",
              "voters": 147
            }
          ],
          "LANGOUE": [
            {
              "station": "ECOLE CEBEC BALENGOU / A",
              "voters": 543
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE CEBEC BAZOU / A",
              "voters": 265
            }
          ],
          "COMMERCIAL": [
            {
              "station": "ECOLE CEBEC BAZOU / A",
              "voters": 265
            }
          ],
          "NDIPTA": [
            {
              "station": "ECOLE CEBEC BAZOU / A",
              "voters": 265
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ECOLE MATERNELLE BAZOU / A",
              "voters": 335
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE MATERNELLE BAZOU / A",
              "voters": 335
            }
          ],
          "FOSSE": [
            {
              "station": "ECOLE SAINT JOSEPH FAMTCHOUET / A",
              "voters": 605
            }
          ],
          "MONT": [
            {
              "station": "ECOLE SAINT JOSEPH FAMTCHOUET / A",
              "voters": 605
            }
          ],
          "NYEMMACK": [
            {
              "station": "ECOLE SAINT JOSEPH FAMTCHOUET / A",
              "voters": 605
            }
          ],
          "PENTE": [
            {
              "station": "ECOLE SAINT JOSEPH FAMTCHOUET / A",
              "voters": 605
            }
          ],
          "RAPHIA": [
            {
              "station": "ECOLE SAINT JOSEPH FAMTCHOUET / A",
              "voters": 363
            }
          ],
          "KOOLO": [
            {
              "station": "EP BAGNOUN / A",
              "voters": 239
            }
          ],
          "NOUMKA": [
            {
              "station": "EP BAGNOUN / A",
              "voters": 239
            }
          ],
          "CHICHELEH": [
            {
              "station": "EP BASSOUMDJANG / A",
              "voters": 161
            }
          ],
          "KANKA'A": [
            {
              "station": "EP BASSOUMDJANG / A",
              "voters": 161
            }
          ],
          "TOUGWE": [
            {
              "station": "EP BASSOUMDJANG / A",
              "voters": 161
            }
          ],
          "BALENGOU": [
            {
              "station": "EP CHEFFERIE BALENGOU / A",
              "voters": 354
            }
          ],
          "MBANKEP": [
            {
              "station": "EP CHEFFERIE BALENGOU / A",
              "voters": 169
            }
          ],
          "MBOO": [
            {
              "station": "EP CHEFFERIE BALENGOU / A",
              "voters": 169
            }
          ],
          "TUKO": [
            {
              "station": "EP CHEFFERIE BALENGOU / A",
              "voters": 169
            }
          ],
          "FOPTCHUI": [
            {
              "station": "EP FOPTCHUI / A",
              "voters": 158
            }
          ],
          "NDONTAP": [
            {
              "station": "EP FOPTCHUI / A",
              "voters": 158
            }
          ],
          "KOUAH": [
            {
              "station": "EP GROUPE I BAKONG / A",
              "voters": 244
            }
          ],
          "MANGA": [
            {
              "station": "EP GROUPE I BAKONG / A",
              "voters": 244
            }
          ],
          "NLONGBWE": [
            {
              "station": "EP GROUPE I BAKONG / A",
              "voters": 244
            }
          ],
          "SAGNA": [
            {
              "station": "EP GROUPE I BAKONG / A",
              "voters": 244
            }
          ],
          "MAHELO": [
            {
              "station": "EP GROUPE I BALENGOU / A",
              "voters": 490
            }
          ],
          "CARRIERE": [
            {
              "station": "EP GROUPE I BAZOU / A",
              "voters": 540
            }
          ],
          "BOFAM": [
            {
              "station": "EP GROUPE II BAKONG / A",
              "voters": 108
            }
          ],
          "LANTEUNE": [
            {
              "station": "EP GROUPE II BAKONG / A",
              "voters": 108
            }
          ],
          "MBO": [
            {
              "station": "EP GROUPE II BAKONG / A",
              "voters": 352
            }
          ],
          "BAZOU": [
            {
              "station": "EP GROUPE II BAZOU / A",
              "voters": 611
            }
          ],
          "KATCHA": [
            {
              "station": "EP GROUPE II BAZOU / A",
              "voters": 167
            }
          ],
          "MBOUODJO": [
            {
              "station": "EP GROUPE II BAZOU / A",
              "voters": 167
            }
          ],
          "NGANGUEYONG": [
            {
              "station": "EP GROUPE II BAZOU / A",
              "voters": 437
            }
          ],
          "PRISON": [
            {
              "station": "EP GROUPE II BAZOU / A",
              "voters": 437
            }
          ],
          "NGWETCHEU": [
            {
              "station": "EP KASSANG / A",
              "voters": 118
            }
          ],
          "KATIO": [
            {
              "station": "EP KATIO / A",
              "voters": 296
            }
          ],
          "BANDJA": [
            {
              "station": "EP NDEPLA / A",
              "voters": 135
            }
          ],
          "NDEPLA": [
            {
              "station": "EP NDEPLA / A",
              "voters": 135
            }
          ],
          "BABATCHE": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "BATAP": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "MBAHA": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "MBIBEUHEU": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 366
            }
          ],
          "MBOUTONG": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "NDIONZOU": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "NGOUEDIP": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "SAHA": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "TOUKOP": [
            {
              "station": "EP NDIONZOU / A",
              "voters": 296
            }
          ],
          "KOUADJOU": [
            {
              "station": "EP NDIPTA III / A",
              "voters": 167
            }
          ],
          "NDITA": [
            {
              "station": "EP NDIPTA III / A",
              "voters": 167
            }
          ],
          "III": [
            {
              "station": "EP NDIPTA III / A",
              "voters": 167
            }
          ],
          "NGOKO": [
            {
              "station": "EP NDIPTA III / A",
              "voters": 167
            }
          ],
          "NJEUFEP": [
            {
              "station": "EP NDIPTA III / A",
              "voters": 167
            }
          ],
          "MBEUDOU": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "NDOUKOP": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "NTANZE": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "SAGNIA": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "TANGA": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "ZEUDIP": [
            {
              "station": "EP NTANZE / A",
              "voters": 155
            }
          ],
          "BAGNOUN": [
            {
              "station": "FOYER BAGNOUN / A",
              "voters": 261
            }
          ],
          "BOUDJA": [
            {
              "station": "FOYER BAKONG / A",
              "voters": 171
            }
          ],
          "CHEFFERIE": [
            {
              "station": "FOYER BAKONG / A",
              "voters": 1240
            }
          ],
          "BAKONG": [
            {
              "station": "FOYER BAKONG / A",
              "voters": 171
            }
          ],
          "MATCHUET": [
            {
              "station": "FOYER BAKONG / A",
              "voters": 171
            }
          ],
          "KASSANG": [
            {
              "station": "FOYER KASSANG / A",
              "voters": 229
            }
          ],
          "FOZE": [
            {
              "station": "FOYER KEUKEU / A",
              "voters": 175
            }
          ],
          "BAKOUA": [
            {
              "station": "FOYER KOUBA / A",
              "voters": 174
            }
          ],
          "KOUBA": [
            {
              "station": "FOYER KOUBA / A",
              "voters": 174
            }
          ],
          "MANGUEU": [
            {
              "station": "FOYER KOUBA / A",
              "voters": 174
            }
          ],
          "NDEPGNIA": [
            {
              "station": "FOYER KOUBA / A",
              "voters": 174
            }
          ],
          "BOTCHUI": [
            {
              "station": "FOYER MAHA / A",
              "voters": 202
            }
          ],
          "MAHA": [
            {
              "station": "FOYER MAHA / A",
              "voters": 202
            }
          ],
          "NOUMTCHUI": [
            {
              "station": "FOYER MAHA / A",
              "voters": 202
            }
          ],
          "BANAH": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 144
            }
          ],
          "MANGOU": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 144
            }
          ],
          "MBOUDENG": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 313
            }
          ],
          "NDEPDA": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 144
            }
          ],
          "TONGO": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 144
            }
          ],
          "TOUTCHUI": [
            {
              "station": "FOYER MANGOU / A",
              "voters": 144
            }
          ],
          "KOUODJOU": [
            {
              "station": "FOYER NDEPNGOUE / A",
              "voters": 151
            }
          ],
          "NDEPNGOUE": [
            {
              "station": "FOYER NDEPNGOUE / A",
              "voters": 151
            }
          ],
          "NDIPFEP": [
            {
              "station": "FOYER NDIPFEP / A",
              "voters": 141
            }
          ],
          "TOUNTSE": [
            {
              "station": "FOYER NDIPFEP / A",
              "voters": 141
            }
          ],
          "NJEUTA": [
            {
              "station": "FOYER NJEUTA / A",
              "voters": 208
            }
          ],
          "COLLINE": [
            {
              "station": "FOYER NSION / A",
              "voters": 341
            }
          ],
          "NGANTAHA": [
            {
              "station": "FOYER NSION / A",
              "voters": 341
            }
          ],
          "NSION": [
            {
              "station": "FOYER NSION / A",
              "voters": 341
            }
          ],
          "NYLON": [
            {
              "station": "FOYER NSION / A",
              "voters": 341
            }
          ],
          "BAKONTCHOU": [
            {
              "station": "FOYER NTANGA FETBA / A",
              "voters": 106
            }
          ],
          "FETBA": [
            {
              "station": "FOYER NTANGA FETBA / A",
              "voters": 106
            }
          ],
          "NTANGA": [
            {
              "station": "FOYER NTANGA FETBA / A",
              "voters": 106
            }
          ],
          "TCHUIKAM": [
            {
              "station": "FOYER TCHUIKAM / A",
              "voters": 264
            }
          ],
          "TOUMBOU": [
            {
              "station": "FOYER TCHUIKAM / A",
              "voters": 264
            }
          ],
          "TERGAL": [
            {
              "station": "FOYER TERGAL / A",
              "voters": 294
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE BALENGOU / A",
              "voters": 359
            }
          ],
          "NGONDJIO": [
            {
              "station": "LYCEE BALENGOU / A",
              "voters": 185
            }
          ],
          "SOURCE": [
            {
              "station": "LYCEE BAZOU / A",
              "voters": 174
            }
          ],
          "KAFOZE": [
            {
              "station": "POSTE AGRICOLE BALENGOU / A",
              "voters": 170
            }
          ],
          "DUOP": [
            {
              "station": "POSTE AGRICOLE DUOP / A",
              "voters": 251
            }
          ]
        },
        "TONGA": {
          "TELIGWA": [
            {
              "station": "CES BILINGUE BANDOUNGA / A",
              "voters": 120
            }
          ],
          "CHEFFERIE": [
            {
              "station": "CES BILINGUE BANDOUNGA / A",
              "voters": 120
            }
          ],
          "SACQUEKE": [
            {
              "station": "ECOLE BILINGUE DE BABITCHOUA / A",
              "voters": 112
            }
          ],
          "BALOUA": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE BALOUA / A",
              "voters": 120
            }
          ],
          "NJINDOM": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE BALOUA / A",
              "voters": 120
            }
          ],
          "NOUMKA": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE BALOUA / A",
              "voters": 240
            }
          ],
          "NTONGAH": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE BALOUA / A",
              "voters": 120
            }
          ],
          "BITCHOUA": [
            {
              "station": "EP BABITCHOUA / A",
              "voters": 697
            }
          ],
          "NORD": [
            {
              "station": "EP BABITCHOUA / A",
              "voters": 697
            }
          ],
          "DJANTCHALI": [
            {
              "station": "EP DJANTCHALI / A",
              "voters": 146
            }
          ],
          "NTO": [
            {
              "station": "EP MEDIMA / A",
              "voters": 51
            }
          ],
          "-NGA": [
            {
              "station": "EP MEDIMA / A",
              "voters": 51
            }
          ],
          "QUARTIER": [
            {
              "station": "EP TONGA / A",
              "voters": 18105
            }
          ],
          "BABITCHOUA": [
            {
              "station": "FOYER BABITCHOUA / A",
              "voters": 687
            }
          ],
          "BALLOUA": [
            {
              "station": "FOYER BALLOUA / A",
              "voters": 760
            }
          ],
          "BANDOUNGA": [
            {
              "station": "FOYER BANDOUNGA / A",
              "voters": 900
            }
          ],
          "BANKOUA": [
            {
              "station": "FOYER BANDOUNGA / A",
              "voters": 292
            }
          ],
          "NOUMBO": [
            {
              "station": "FOYER NOUMBO / A",
              "voters": 280
            }
          ],
          "GABON": [
            {
              "station": "GPBS GABON / A",
              "voters": 151
            }
          ],
          "BABOULENG": [
            {
              "station": "MAISON COMMUNAUTAIRE BABOULENG / A",
              "voters": 269
            }
          ],
          "BABOUNDI": [
            {
              "station": "MAISON COMMUNAUTAIRE BABOUNDI / A",
              "voters": 91
            }
          ],
          "FAGNO": [
            {
              "station": "MAISON COMMUNAUTAIRE FAGNO / A",
              "voters": 248
            }
          ],
          "MBEUNA": [
            {
              "station": "MAISON COMMUNAUTAIRE MBEUNA / A",
              "voters": 72
            }
          ],
          "MEDIMA": [
            {
              "station": "MAISON COMMUNAUTAIRE MEDIMA / A",
              "voters": 89
            }
          ],
          "NOUTSE": [
            {
              "station": "MAISON COMMUNAUTAIRE NOUNTSE / A",
              "voters": 124
            }
          ],
          "KOPNTA": [
            {
              "station": "MAISON COMMUNAUTAIRE QTR 13 / A",
              "voters": 79
            }
          ]
        }
      },
      "NOUN": {
        "BANGOURAIN": {
          "NJILOUM": [
            {
              "station": "CETIC DE BANGOURAIN / A",
              "voters": 204
            }
          ],
          "DOUFFEN-CENTRE": [
            {
              "station": "DELEGATION D'ELEVAGE / A",
              "voters": 355
            }
          ],
          "COMMERCIAL": [
            {
              "station": "DELEGATION D'ELEVAGE / A",
              "voters": 355
            }
          ],
          "MARAP": [
            {
              "station": "E P BANGOURAIN CENTRE / A",
              "voters": 669
            }
          ],
          "MAROUMGOUO": [
            {
              "station": "E P BANGOURAIN CENTRE / A",
              "voters": 400
            }
          ],
          "NJINTOUT": [
            {
              "station": "E P BILINGUE DE BANGOURAIN / A",
              "voters": 299
            }
          ],
          "KOUROM-CHEFFERIE": [
            {
              "station": "E P BILINGUE DE KOUROM-CHEFFERIE / A",
              "voters": 661
            }
          ],
          "KOUTOUPI": [
            {
              "station": "E P BILINGUE KOUTOUPI / A",
              "voters": 579
            }
          ],
          "BANGOURAIN": [
            {
              "station": "E P DE BANGOURAIN CHEFFERIE / A",
              "voters": 710
            }
          ],
          "CHEFFERIE": [
            {
              "station": "E P DE BANGOURAIN CHEFFERIE / A",
              "voters": 1054
            }
          ],
          "KOUCHONG": [
            {
              "station": "E P DE KOUCHONG / A",
              "voters": 155
            }
          ],
          "MANSEN": [
            {
              "station": "E P DE KOUHOUAT / A",
              "voters": 1277
            }
          ],
          "KOUMBAM": [
            {
              "station": "E P DE KOUMBAM / A",
              "voters": 618
            }
          ],
          "KOUROM-MARCHE": [
            {
              "station": "E P DE KOUROM-MARCHE CENTRE / A",
              "voters": 549
            }
          ],
          "MANKI": [
            {
              "station": "E P DE MANKI / A",
              "voters": 147
            }
          ],
          "MENKEFU": [
            {
              "station": "E P DE MENKEFU / A",
              "voters": 187
            }
          ],
          "NCHOUTPAH": [
            {
              "station": "E P DE NCHOUTPAH / A",
              "voters": 525
            }
          ],
          "NDOUGHAM": [
            {
              "station": "E P DE NDOUGHAM / A",
              "voters": 262
            }
          ],
          "NDOUMBAIN": [
            {
              "station": "E P DE NDOUMBAIN / A",
              "voters": 456
            }
          ],
          "NGOUNOUN": [
            {
              "station": "E P DE NGOUNOUN / A",
              "voters": 425
            }
          ],
          "NGWENFON": [
            {
              "station": "E P DE NGWENFON / A",
              "voters": 439
            }
          ],
          "NGWENFONGUIE": [
            {
              "station": "E P DE NGWENFONGUIE / A",
              "voters": 526
            }
          ],
          "NJINTOUT-BORORO": [
            {
              "station": "E P DE NJINTOUT SAGNIRI / A",
              "voters": 82
            }
          ],
          "NKANTAIN": [
            {
              "station": "E P DE NKANTAIN / A",
              "voters": 574
            }
          ],
          "KOUMENGBA-": [
            {
              "station": "E P DE TOUKOUOP / A",
              "voters": 1123
            }
          ],
          "KOUMENGBA-TOUKOUOP": [
            {
              "station": "E P DE TOUKOUOP / A",
              "voters": 436
            }
          ],
          "PANZOUH": [
            {
              "station": "E. FRANCO ISLAMIQUE DE PANZOUH / A",
              "voters": 96
            }
          ],
          "CHOUTPAH": [
            {
              "station": "ECOLE BILINGUE DE CHOUTPAH / A",
              "voters": 87
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE BILINGUE DE CHOUTPAH / A",
              "voters": 87
            }
          ],
          "SOMTAIN": [
            {
              "station": "ECOLE DES PARENTS BANGAMBI SOMTAIN /  A",
              "voters": 94
            }
          ],
          "KOUPOUOKAM": [
            {
              "station": "ECOLE DES PARENTS DE KOUPOUOKAM I / A",
              "voters": 257
            }
          ],
          "PAGHA": [
            {
              "station": "ECOLE DES PARENTS DE PAGHA / A",
              "voters": 127
            }
          ],
          "NGUEDIEM": [
            {
              "station": "ECOLE FRANCO ISLAMIQUE DE BANGOURAN  CHEFFERIE / A",
              "voters": 98
            }
          ],
          "KOUMENGBA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE KOUMENGBA /  A",
              "voters": 78
            }
          ],
          "MACHINYOUOM": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NKANTAIN / A",
              "voters": 31
            }
          ],
          "NJIMBOUH-PAGHA": [
            {
              "station": "FOYER MUNICIPAL / A",
              "voters": 275
            }
          ],
          "NGARAP": [
            {
              "station": "LYCEE BILINGUE DE BANGOURAIN / A",
              "voters": 175
            }
          ],
          "BANGAMBI": [
            {
              "station": "MAGAZIN CAPLANOUN / A",
              "voters": 1425
            }
          ]
        },
        "FOUMBAN": {
          "III": [
            {
              "station": "CENTRE DE PROMOTION DE LA FEMME / A",
              "voters": 1459
            }
          ],
          "KOUNGA": [
            {
              "station": "COMMUNE RURALE DE FOUMBAN / A",
              "voters": 4101
            }
          ],
          "DALLAS": [
            {
              "station": "COMMUNE RURALE DE FOUMBAN / A",
              "voters": 2247
            }
          ],
          "KOUKOUET-MALOUM": [
            {
              "station": "DELEGATION DEP. DES AFFAIRES SOCIALES  /A",
              "voters": 2637
            }
          ],
          "MALATAM": [
            {
              "station": "ECOLE ANNEXE GROUPE I / A",
              "voters": 1256
            }
          ],
          "NJINDARE": [
            {
              "station": "ECOLE CEBEC FONTAIN / A",
              "voters": 2453
            }
          ],
          "NJINTOUT": [
            {
              "station": "ECOLE CEBEC NJINTOUT / A",
              "voters": 4394
            }
          ],
          "NJISSE": [
            {
              "station": "ECOLE CEBEC NJISSE / A",
              "voters": 2390
            }
          ],
          "KOUONGOUPGNET": [
            {
              "station": "ECOLE MATERNELLE BILINGUE MANKOUEN /  A",
              "voters": 2146
            }
          ],
          "NJIMBAM": [
            {
              "station": "ECOLE MATERNELLE NJIMBAM I / A",
              "voters": 1158
            }
          ],
          "NJISSAMTOUEN": [
            {
              "station": "ECOLE PRIMAIRE ST JOSEPH / A",
              "voters": 5468
            }
          ],
          "NSHUT": [
            {
              "station": "ECOLE PRIMAIRE ST JOSEPH / A",
              "voters": 2979
            }
          ],
          "KOUFFEN": [
            {
              "station": "ECOLE PUBLIQUE DE KOUFFEN / A",
              "voters": 772
            }
          ],
          "KOUFOMLOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUFOMLOUM / A",
              "voters": 335
            }
          ],
          "KOUNDOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUNDOUM / A",
              "voters": 803
            }
          ],
          "KOUPA-GAGNOU": [
            {
              "station": "ECOLE PUBLIQUE DE KOUPA-GAGNOU / A",
              "voters": 301
            }
          ],
          "MACHINBAIN": [
            {
              "station": "ECOLE PUBLIQUE DE MACHINBAIN / A",
              "voters": 282
            }
          ],
          "MAKOUENMENKA": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOUENMENKA / A",
              "voters": 662
            }
          ],
          "MAMFU": [
            {
              "station": "ECOLE PUBLIQUE DE MAMFU / A",
              "voters": 541
            }
          ],
          "MANGA-KOUNDOUM": [
            {
              "station": "ECOLE PUBLIQUE DE MANGA KOUNDOUM / A",
              "voters": 153
            }
          ],
          "MANKA": [
            {
              "station": "ECOLE PUBLIQUE DE MANKA / A",
              "voters": 1752
            }
          ],
          "MAROM": [
            {
              "station": "ECOLE PUBLIQUE DE MAROM / A",
              "voters": 610
            }
          ],
          "MATOUMBAIN": [
            {
              "station": "ECOLE PUBLIQUE DE MATOUMBAIN / A",
              "voters": 680
            }
          ],
          "MEKOUONO": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOUONO / A",
              "voters": 151
            }
          ],
          "MFETAME": [
            {
              "station": "ECOLE PUBLIQUE DE MFETAME / A",
              "voters": 251
            }
          ],
          "NJICHOM": [
            {
              "station": "ECOLE PUBLIQUE DE NJICHOM / A",
              "voters": 366
            }
          ],
          "NJILOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NJILOUM / A",
              "voters": 2240
            }
          ],
          "MACHINKA": [
            {
              "station": "ECOLE PUBLIQUE DE NJINKA / A",
              "voters": 2068
            }
          ],
          "NJIKETNKIE": [
            {
              "station": "ECOLE PUBLIQUE DE NJITIECHE / A",
              "voters": 781
            }
          ],
          "KOUKETNDI": [
            {
              "station": "ECOLE PUBLIQUE KOUKETNDI / A",
              "voters": 529
            }
          ],
          "MANGA": [
            {
              "station": "ECOLE PUBLIQUE MANGA I / A",
              "voters": 3338
            }
          ],
          "NJIGOUELAM": [
            {
              "station": "ECOLE PUBLIQUE NJIGOUELAM / A",
              "voters": 486
            }
          ],
          "NJIKOUET": [
            {
              "station": "ECOLE PUBLIQUE NJIKOUET / A",
              "voters": 407
            }
          ],
          "NJILARE": [
            {
              "station": "ECOLE PUBLIQUE NJILARE / A",
              "voters": 426
            }
          ],
          "NJIMOGNAWOU": [
            {
              "station": "ECOLE PUBLIQUE NJIMOGNAWOU / A",
              "voters": 127
            }
          ],
          "KOUNDOUMBAIN": [
            {
              "station": "ENIEG MAMBAIN / A",
              "voters": 2404
            }
          ],
          "FOUMBAN": [
            {
              "station": "HOTEL DES FINANCE / A",
              "voters": 1854
            }
          ],
          "KOUNTOUNGA": [
            {
              "station": "LYCEE BILINGUE DE FOUMBAN / A",
              "voters": 2322
            }
          ],
          "KOUDOUNKA": [
            {
              "station": "LYCEE CLASSIQUE DE FOUMBAN / A",
              "voters": 1924
            }
          ],
          "KOUPA-MATAPIT": [
            {
              "station": "LYCEE KOUPA -MATAPIT / A",
              "voters": 1257
            }
          ]
        },
        "FOUMBOT": {
          "MBANJOU": [
            {
              "station": "C.E.B.EC. MBANJOU / A",
              "voters": 2500
            }
          ],
          "FOSSANG": [
            {
              "station": "CEBEC FOSSANG / A",
              "voters": 857
            }
          ],
          "NJINCHA": [
            {
              "station": "CEBEC NJINCHA / A",
              "voters": 832
            }
          ],
          "BAIGOM": [
            {
              "station": "CENTRE DE SANTE DE MATAM / A",
              "voters": 3848
            }
          ],
          "NJIMBOT": [
            {
              "station": "ECOLE FRANCO - ARABE / A",
              "voters": 10498
            }
          ],
          "COMPANY": [
            {
              "station": "ECOLE PUBLIQUE CENTRE / A",
              "voters": 3070
            }
          ],
          "KWETVU": [
            {
              "station": "ECOLE PUBLIQUE DE KWETVU / A",
              "voters": 209
            }
          ],
          "FOCHIEYA": [
            {
              "station": "ECOLE PUBLIQUE FOCHIEYA / A",
              "voters": 571
            }
          ],
          "FOSSETT": [
            {
              "station": "ECOLE PUBLIQUE FOSSETT / A",
              "voters": 5760
            }
          ],
          "KOUFFEN": [
            {
              "station": "ECOLE PUBLIQUE KOUFFEN / A",
              "voters": 191
            }
          ],
          "MAHOUON": [
            {
              "station": "ECOLE PUBLIQUE MAHOUON / A",
              "voters": 482
            }
          ],
          "MAKA": [
            {
              "station": "ECOLE PUBLIQUE MAKA PONT / A",
              "voters": 1124
            }
          ],
          "MANGOUM": [
            {
              "station": "ECOLE PUBLIQUE MANGOUM / A",
              "voters": 1018
            }
          ],
          "MBANTOU": [
            {
              "station": "ECOLE PUBLIQUE MBANTOU / A",
              "voters": 3059
            }
          ],
          "MOMO": [
            {
              "station": "ECOLE PUBLIQUE MOMO / A",
              "voters": 466
            }
          ],
          "NKOUNDOUMBAIN": [
            {
              "station": "ECOLE PUBLIQUE NKOUNDOUMBAIN / A",
              "voters": 2240
            }
          ],
          "NKOUONDJA": [
            {
              "station": "ECOLE PUBLIQUE NKOUONDJA / A",
              "voters": 913
            }
          ],
          "KOUKPA": [
            {
              "station": "ECOLE PUBLIQUE TENJOUONOUN / A",
              "voters": 246
            }
          ],
          "SOUPKPEN": [
            {
              "station": "ECOLE PUBLIQUE TENJOUONOUN / A",
              "voters": 246
            }
          ],
          "TENJOUONOUN": [
            {
              "station": "ECOLE PUBLIQUE TENJOUONOUN / A",
              "voters": 246
            }
          ],
          "III": [
            {
              "station": "TRIBUNE / A",
              "voters": 2093
            }
          ]
        },
        "KOUOPTAMO": {
          "NKOUOPNKARE": [
            {
              "station": "CASE NON HABITEE / A",
              "voters": 33
            }
          ],
          "BANKOUOP": [
            {
              "station": "CEBEC BANKOUOP / A",
              "voters": 1133
            }
          ],
          "CENTRE": [
            {
              "station": "CEBEC BANKOUOP / A",
              "voters": 2180
            }
          ],
          "VILLE": [
            {
              "station": "CEBEC BANKOUOP / A",
              "voters": 547
            }
          ],
          "NJILAM": [
            {
              "station": "CEBEC DE NDOUMKAIN / A",
              "voters": 232
            }
          ],
          "NGBETNSOUEN": [
            {
              "station": "CEBEC DE NJITOU / A",
              "voters": 1317
            }
          ],
          "SANKA": [
            {
              "station": "CEBEC DE NJITOU / A",
              "voters": 153
            }
          ],
          "(NJITOU)": [
            {
              "station": "CEBEC DE NJITOU / A",
              "voters": 153
            }
          ],
          "LOUMBOUOT": [
            {
              "station": "CEBEC KOUPARA / A",
              "voters": 359
            }
          ],
          "KOUNDEN": [
            {
              "station": "CENTRE DE FORMATION DE KOUNDEN / A",
              "voters": 193
            }
          ],
          "NJITAPON": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE KOUSSOH /  A",
              "voters": 1497
            }
          ],
          "KOUSSOH": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE KOUSSOH /  A",
              "voters": 574
            }
          ],
          "NJINGOUMBE": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE LA CHANAS /  A",
              "voters": 1421
            }
          ],
          "CHANAS": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE LA CHANAS /  A",
              "voters": 444
            }
          ],
          "(CENTRE": [
            {
              "station": "CES DE NGBETNSOUEN II / A",
              "voters": 223
            }
          ],
          "MONGAMBE)": [
            {
              "station": "CES DE NGBETNSOUEN II / A",
              "voters": 223
            }
          ],
          "MEKIECHOUM": [
            {
              "station": "ECOLE DES PARENTS DE MEKIECHOUM / A",
              "voters": 164
            }
          ],
          "SOUS": [
            {
              "station": "ECOLE FRANCO ISLAMIQUE S/ PREFECTURE  /A",
              "voters": 394
            }
          ],
          "PREFECTURE": [
            {
              "station": "ECOLE FRANCO ISLAMIQUE S/ PREFECTURE  /A",
              "voters": 394
            }
          ],
          "COC": [
            {
              "station": "ECOLE PUB. DE NJINDOUN / A",
              "voters": 564
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE DE BANKOUOP / A",
              "voters": 2217
            }
          ],
          "BUEA": [
            {
              "station": "ECOLE PUBLIQUE DE BUEA / A",
              "voters": 362
            }
          ],
          "KOUCHOUONTOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUCHOUONTOUM / A",
              "voters": 432
            }
          ],
          "KOUOPTAMO": [
            {
              "station": "ECOLE PUBLIQUE DE KOUOPTAMO / A",
              "voters": 2436
            }
          ],
          "KOUPARA": [
            {
              "station": "ECOLE PUBLIQUE DE KOUPARA BAIGOM / A",
              "voters": 1980
            }
          ],
          "BAIGOM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUPARA BAIGOM / A",
              "voters": 426
            }
          ],
          "NJIRIPA": [
            {
              "station": "ECOLE PUBLIQUE DE KOUPARA KEUMAHOU /  A",
              "voters": 361
            }
          ],
          "NJISSEN": [
            {
              "station": "ECOLE PUBLIQUE DE KOUPARA NJISSEN / A",
              "voters": 607
            }
          ],
          "NCHOUTNOUN": [
            {
              "station": "ECOLE PUBLIQUE DE NCHOUTNOUN / A",
              "voters": 888
            }
          ],
          "NDOUMKAIN": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMKAIN / A",
              "voters": 1362
            }
          ],
          "NKOUNGOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMKAIN SANKA / A",
              "voters": 485
            }
          ],
          "NGAMBOUO": [
            {
              "station": "ECOLE PUBLIQUE DE NGAMBOUOII / A",
              "voters": 419
            }
          ],
          "(MANKUT)": [
            {
              "station": "ECOLE PUBLIQUE DE NGBETNSOUEN I / A",
              "voters": 288
            }
          ],
          "NGOUENDAM": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUENDAM / A",
              "voters": 685
            }
          ],
          "NGOUENJIAMGBIE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUENJIAMGBIE / A",
              "voters": 389
            }
          ],
          "NGOUENJINGOUMBE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUENJINGOUMBE /  A",
              "voters": 271
            }
          ],
          "NJIMGBAMOU": [
            {
              "station": "ECOLE PUBLIQUE DE NJIMBAMBELE / A",
              "voters": 287
            }
          ],
          "NKOUNCHA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUNCHA / A",
              "voters": 242
            }
          ],
          "NKOUONJA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUONJA / A",
              "voters": 461
            }
          ],
          "(NIJTAPON)": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUONJA / A",
              "voters": 461
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE PUBLIQUE NJINGOUMBE MARCHE / A",
              "voters": 1551
            }
          ],
          "NKOUSONDE": [
            {
              "station": "ECOLE PUBLIQUE NJINGOUMBE MARCHE / A",
              "voters": 628
            }
          ],
          "NKOUATKOUAT": [
            {
              "station": "ESPLANADE DE LA MOSQUEE / A",
              "voters": 166
            }
          ],
          "KOUOMBOUM": [
            {
              "station": "MISSION CATHOLIQUE DE KOUOMBOUM / A",
              "voters": 466
            }
          ],
          "NGOUMOU": [
            {
              "station": "MISSION CATHOLIQUE DE KOUOPTAMO / A",
              "voters": 409
            }
          ],
          "ROUTE": [
            {
              "station": "MISSION CATHOLIQUE DE NDOUMKAIN / A",
              "voters": 343
            }
          ],
          "(NDOUMBAIN": [
            {
              "station": "MISSION CATHOLIQUE DE NGBETNSOUEN / A",
              "voters": 396
            }
          ],
          "B.)": [
            {
              "station": "MISSION CATHOLIQUE DE NGBETNSOUEN / A",
              "voters": 396
            }
          ],
          "NGOUENJITAPON": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 257
            }
          ]
        },
        "KOUTABA": {
          "KOUNDJA": [
            {
              "station": "BUREAU CAMPOST / A",
              "voters": 7470
            }
          ],
          "MARIATOU": [
            {
              "station": "BUREAU CAMPOST / A",
              "voters": 4740
            }
          ],
          "VILLAGE": [
            {
              "station": "CENTRE DE PROMOTION DE LA FEMME / A",
              "voters": 2730
            }
          ],
          "KOUTIE": [
            {
              "station": "CENTRE DE SANTE DE KOUTIE / A",
              "voters": 1283
            }
          ],
          "NJINDOUM": [
            {
              "station": "CENTRE DE SANTE INTEGRE NJINDOUM / A",
              "voters": 107
            }
          ],
          "LANKOUM": [
            {
              "station": "E. PRIVEE FRANCO-ARABE DE NJITEFAM / A",
              "voters": 310
            }
          ],
          "METAKET": [
            {
              "station": "ECOLE DU CEBEC DE METAKET / A",
              "voters": 264
            }
          ],
          "NCHOUTFAH": [
            {
              "station": "ECOLE PRIVEE LAIQUE DE L'ENTENTE / A",
              "voters": 226
            }
          ],
          "BAFOLE": [
            {
              "station": "ECOLE PUBLIQUE DE BAFOLE / A",
              "voters": 948
            }
          ],
          "DIDANGO": [
            {
              "station": "ECOLE PUBLIQUE DE DIDANGO / A",
              "voters": 489
            }
          ],
          "KAGNAM": [
            {
              "station": "ECOLE PUBLIQUE DE KAGNAM / A",
              "voters": 4421
            }
          ],
          "KOUCHANKAP": [
            {
              "station": "ECOLE PUBLIQUE DE KOUCHANKAP / A",
              "voters": 1695
            }
          ],
          "KOUMELAP": [
            {
              "station": "ECOLE PUBLIQUE DE KOUTOUKOUOP / A",
              "voters": 1284
            }
          ],
          "MAPARE": [
            {
              "station": "ECOLE PUBLIQUE DE MAPARE / A",
              "voters": 1021
            }
          ],
          "MATABA": [
            {
              "station": "ECOLE PUBLIQUE DE MATABA / A",
              "voters": 1313
            }
          ],
          "NGOUNDOUP": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNDOUP / A",
              "voters": 1753
            }
          ],
          "KOUMENKE": [
            {
              "station": "ECOLE PUBLIQUE DE NJIGWEN / A",
              "voters": 4098
            }
          ],
          "NJIYIT": [
            {
              "station": "ECOLE PUBLIQUE DE NJIYIT / A",
              "voters": 325
            }
          ],
          "PONDIMOUN": [
            {
              "station": "ECOLE PUBLIQUE DE PONDIMOUN / A",
              "voters": 1714
            }
          ],
          "MANKEN": [
            {
              "station": "ESPL. DE LA MOSQUEE DE MANKEN / A",
              "voters": 159
            }
          ],
          "TAYANDI": [
            {
              "station": "GARE ROUTIERE DE KOUTABA / A",
              "voters": 3652
            }
          ]
        },
        "MAGBA": {
          "NYLON": [
            {
              "station": "BAPTIST SCHOOL MAGBA / A",
              "voters": 3127
            }
          ],
          "MOUNKELE": [
            {
              "station": "E. BILINGUE DE MOUNKELE / A",
              "voters": 184
            }
          ],
          "WALDE": [
            {
              "station": "E. BILINGUE DE MOUNKELE / A",
              "voters": 184
            }
          ],
          "MOUNTOUBIOU": [
            {
              "station": "E. BILINGUE DE MOUNKELE / A",
              "voters": 184
            }
          ],
          "MACHINGHOM": [
            {
              "station": "E. BILINGUE MACHINGHOM / A",
              "voters": 145
            }
          ],
          "NJOUM": [
            {
              "station": "E. BILINGUE MACHINGHOM / A",
              "voters": 300
            }
          ],
          "FOUBALOU": [
            {
              "station": "E.P. DE FOUBALOU / A",
              "voters": 126
            }
          ],
          "LONG": [
            {
              "station": "ECOLE BILINGUE LONG_STREET / A",
              "voters": 324
            }
          ],
          "STREET": [
            {
              "station": "ECOLE BILINGUE LONG_STREET / A",
              "voters": 324
            }
          ],
          "NGOUNSO": [
            {
              "station": "ECOLE BILINGUE NGOUNSO / A",
              "voters": 1259
            }
          ],
          "JIMGBAKOUP": [
            {
              "station": "ECOLE CATHOLIQUE DE JIMGBAKOUP / A",
              "voters": 451
            }
          ],
          "NJIMKPARA": [
            {
              "station": "ECOLE PUBLIQUE CBC DE NJIMKPARA / A",
              "voters": 307
            }
          ],
          "FOROUONGAIN": [
            {
              "station": "ECOLE PUBLIQUE DE FOROUONGAIN / A",
              "voters": 253
            }
          ],
          "KOURAP": [
            {
              "station": "ECOLE PUBLIQUE DE KOURAP / A",
              "voters": 276
            }
          ],
          "MACHOUTVI": [
            {
              "station": "ECOLE PUBLIQUE DE MACHOUTVI / A",
              "voters": 387
            }
          ],
          "MAKOUOMPARE": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOUOMPARE / A",
              "voters": 173
            }
          ],
          "MANDOUGNAM": [
            {
              "station": "ECOLE PUBLIQUE DE MANDOUGNAM / A",
              "voters": 95
            }
          ],
          "MASSAROUM": [
            {
              "station": "ECOLE PUBLIQUE DE MASSAROUM / A",
              "voters": 228
            }
          ],
          "MATETCHIT": [
            {
              "station": "ECOLE PUBLIQUE DE MATETCHIT / A",
              "voters": 202
            }
          ],
          "MBAKOP": [
            {
              "station": "ECOLE PUBLIQUE DE MBAKOP / A",
              "voters": 290
            }
          ],
          "NORD": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNSO / A",
              "voters": 260
            }
          ],
          "NGOUOMEWOUO": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNSO / A",
              "voters": 260
            }
          ],
          "NGOUOTOU": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUOTOU / A",
              "voters": 319
            }
          ],
          "TAMTOUO": [
            {
              "station": "ECOLE PUBLIQUE DE TAMTOUO / A",
              "voters": 164
            }
          ],
          "FEJEMKWET": [
            {
              "station": "ECOLE PUBLIQUE FEJEMKWET / A",
              "voters": 258
            }
          ],
          "KEGHOUO": [
            {
              "station": "ECOLE PUBLIQUE KHEGOUO / A",
              "voters": 118
            }
          ],
          "MAKOUPA": [
            {
              "station": "ECOLE PUBLIQUE MAKOUPA LE GRAND / A",
              "voters": 666
            }
          ],
          "GRAND": [
            {
              "station": "ECOLE PUBLIQUE MAKOUPA LE GRAND / A",
              "voters": 834
            }
          ],
          "MALOUNGOURE": [
            {
              "station": "ECOLE PUBLIQUE MALOUNGOURE / A",
              "voters": 249
            }
          ],
          "MAMBONKO": [
            {
              "station": "ECOLE PUBLIQUE MAMBONKO / A",
              "voters": 592
            }
          ],
          "MAMOKIMO": [
            {
              "station": "ECOLE PUBLIQUE MAMOKIMO / A",
              "voters": 140
            }
          ],
          "MAMOSSAFON": [
            {
              "station": "ECOLE PUBLIQUE MAMOSSAFON / A",
              "voters": 153
            }
          ],
          "MANDA": [
            {
              "station": "ECOLE PUBLIQUE MANDA / A",
              "voters": 645
            }
          ],
          "MANTE": [
            {
              "station": "ECOLE PUBLIQUE MANTE / A",
              "voters": 658
            }
          ],
          "BARRAGE": [
            {
              "station": "ECOLE PUBLIQUE MATTA BARRAGE / A",
              "voters": 1791
            }
          ],
          "MATTA": [
            {
              "station": "ECOLE PUBLIQUE MATTA VILLAGE / A",
              "voters": 2099
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE MATTA VILLAGE / A",
              "voters": 451
            }
          ],
          "NYANZOURI": [
            {
              "station": "ECOLE PUBLIQUE NYANZOURI / A",
              "voters": 134
            }
          ],
          "POMI": [
            {
              "station": "ECOLE PUBLIQUE POMI VILLAGE / A",
              "voters": 314
            }
          ],
          "FOSSOUOPOUO": [
            {
              "station": "FOYER MUNICIPAL / A",
              "voters": 681
            }
          ],
          "FUTAM": [
            {
              "station": "FUTAM / A",
              "voters": 136
            }
          ],
          "MAGBA": [
            {
              "station": "HOTEL DE VILLE DE MAGBA / A",
              "voters": 2724
            }
          ],
          "PETIT": [
            {
              "station": "MAKOUPA LE PETIT / A",
              "voters": 490
            }
          ],
          "MANOUORE": [
            {
              "station": "MANOUORE / A",
              "voters": 195
            }
          ],
          "MAMBOUNGAM": [
            {
              "station": "MISSION CATHO. MAMBOUNGAM / A",
              "voters": 131
            }
          ],
          "NGOUSSEM": [
            {
              "station": "NGOUSSEM MARCHE / A",
              "voters": 322
            }
          ],
          "NJOUM1": [
            {
              "station": "NJOUM I / A",
              "voters": 103
            }
          ],
          "BORD": [
            {
              "station": "POMI BORD MARCHE / A",
              "voters": 337
            }
          ],
          "KOULA": [
            {
              "station": "POSTE AGRICOLE DE KOULA / A",
              "voters": 271
            }
          ],
          "NGONZANG": [
            {
              "station": "POSTE DES DOUANES / A",
              "voters": 2234
            }
          ]
        },
        "MALANTOUEN": {
          "MARAH": [
            {
              "station": "ECOLE CATHOLIQUE DE MARAH / A",
              "voters": 148
            }
          ],
          "MAGNAMPA": [
            {
              "station": "ECOLE F. ISLAMIQUE CITE DES P.  MAGNAMPA / A",
              "voters": 390
            }
          ],
          "NJINGBABAYIT": [
            {
              "station": "ECOLE FRANCO ISLAMIQUE NJINGBABAYIT /  A",
              "voters": 330
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE FERIPA / A",
              "voters": 325
            }
          ],
          "MANSOM": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE MANSOM / A",
              "voters": 124
            }
          ],
          "MACHU": [
            {
              "station": "ECOLE PUBLIQUE DE MACHU / A",
              "voters": 167
            }
          ],
          "MAFOUATIE": [
            {
              "station": "ECOLE PUBLIQUE DE MAFOUATIE / A",
              "voters": 324
            }
          ],
          "MAGHAM": [
            {
              "station": "ECOLE PUBLIQUE DE MAGHAM / A",
              "voters": 282
            }
          ],
          "MAHOUA": [
            {
              "station": "ECOLE PUBLIQUE DE MAHOUA / A",
              "voters": 671
            }
          ],
          "MAKOUTAM": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOUTAM / A",
              "voters": 732
            }
          ],
          "MANKOUTMBOU": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOUTMBOU / A",
              "voters": 652
            }
          ],
          "MAKPA": [
            {
              "station": "ECOLE PUBLIQUE DE MAKPA I / A",
              "voters": 937
            }
          ],
          "MALIEN": [
            {
              "station": "ECOLE PUBLIQUE DE MALIEN / A",
              "voters": 624
            }
          ],
          "MAMBANTOU": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBANTOU / A",
              "voters": 321
            }
          ],
          "MAMBICHAM": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBICHAM / A",
              "voters": 370
            }
          ],
          "MAMBOUOMBOU": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBOUOMBOU / A",
              "voters": 113
            }
          ],
          "MANDA": [
            {
              "station": "ECOLE PUBLIQUE DE MANDA / A",
              "voters": 438
            }
          ],
          "MNADINGA": [
            {
              "station": "ECOLE PUBLIQUE DE MANDINGA CHEFFERIE  /A",
              "voters": 117
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE DE MANDINGA CHEFFERIE  /A",
              "voters": 117
            }
          ],
          "MANDINGA": [
            {
              "station": "ECOLE PUBLIQUE DE MANDINGA PLATEAU / A",
              "voters": 331
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE PUBLIQUE DE MANDINGA PLATEAU / A",
              "voters": 331
            }
          ],
          "MANGAMBI": [
            {
              "station": "ECOLE PUBLIQUE DE MANGAMBI / A",
              "voters": 202
            }
          ],
          "MANJE": [
            {
              "station": "ECOLE PUBLIQUE DE MANJE KOUTOU / A",
              "voters": 816
            }
          ],
          "KOUTOU": [
            {
              "station": "ECOLE PUBLIQUE DE MANJE KOUTOU / A",
              "voters": 816
            }
          ],
          "MANJOUOM": [
            {
              "station": "ECOLE PUBLIQUE DE MANJOUOM / A",
              "voters": 676
            }
          ],
          "MATIAPON": [
            {
              "station": "ECOLE PUBLIQUE DE MANJOUOM / A",
              "voters": 733
            }
          ],
          "MANTOUM": [
            {
              "station": "ECOLE PUBLIQUE DE MANTOUM PRISON / A",
              "voters": 1060
            }
          ],
          "MAPOU": [
            {
              "station": "ECOLE PUBLIQUE DE MAPOU NJIPOUTE / A",
              "voters": 522
            }
          ],
          "NJIPOUTE": [
            {
              "station": "ECOLE PUBLIQUE DE MAPOU NJIPOUTE / A",
              "voters": 522
            }
          ],
          "MAPOUAYAM": [
            {
              "station": "ECOLE PUBLIQUE DE MAPOUAYAM / A",
              "voters": 323
            }
          ],
          "MARAPNDOUM": [
            {
              "station": "ECOLE PUBLIQUE DE MARAPNDOUM / A",
              "voters": 559
            }
          ],
          "MATACHOM": [
            {
              "station": "ECOLE PUBLIQUE DE MATACHOM / A",
              "voters": 604
            }
          ],
          "MATOUPOU": [
            {
              "station": "ECOLE PUBLIQUE DE MATOUPOU / A",
              "voters": 1372
            }
          ],
          "NDETNGA": [
            {
              "station": "ECOLE PUBLIQUE DE NDETNGA / A",
              "voters": 252
            }
          ],
          "MANGUIEMBOU": [
            {
              "station": "ECOLE PUBLIQUE DE NJIGOUHOUN / A",
              "voters": 1067
            }
          ],
          "NJINGA": [
            {
              "station": "ECOLE PUBLIQUE DE NJINGA / A",
              "voters": 702
            }
          ],
          "MALANTOUEN": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE MAL. / A",
              "voters": 2851
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE MAL. / A",
              "voters": 2526
            }
          ],
          "MAKOUP": [
            {
              "station": "EP MERINGOUM / A",
              "voters": 79
            }
          ]
        },
        "MASSANGAM": {
          "MATOUFA": [
            {
              "station": "BAOBAB EP / A",
              "voters": 1077
            }
          ],
          "MANSOUEN": [
            {
              "station": "DISPENSAIRE EEC / A",
              "voters": 3901
            }
          ],
          "FOYOUOM": [
            {
              "station": "DISPENSAIRE EEC / A",
              "voters": 1040
            }
          ],
          "NJA": [
            {
              "station": "DISPENSAIRE EEC / A",
              "voters": 792
            }
          ],
          "MARAP": [
            {
              "station": "E. PUBLIC DE MARAP / A",
              "voters": 76
            }
          ],
          "BANI": [
            {
              "station": "E. PUBLIC DE SABEL BANI / A",
              "voters": 53
            }
          ],
          "MASSANGAM": [
            {
              "station": "FOYER MUNICIPAL / A",
              "voters": 2179
            }
          ],
          "KOUTOU": [
            {
              "station": "KOUTOU LANDEN EP / A",
              "voters": 347
            }
          ],
          "LANDEN": [
            {
              "station": "KOUTOU LANDEN EP / A",
              "voters": 347
            }
          ],
          "MACHATOUM": [
            {
              "station": "MACHATOUM EEC / A",
              "voters": 699
            }
          ],
          "MACHOUTPOU": [
            {
              "station": "MACHOUTPOU EP / A",
              "voters": 241
            }
          ],
          "MACHU": [
            {
              "station": "MACHU EP / A",
              "voters": 332
            }
          ],
          "MAGNA": [
            {
              "station": "MAGNA EP / A",
              "voters": 449
            }
          ],
          "MAGNITKOM": [
            {
              "station": "MAGNITKOM EP / A",
              "voters": 280
            }
          ],
          "MAKOM": [
            {
              "station": "MAKOM CHEFFERIE EP / A",
              "voters": 948
            }
          ],
          "MAKOUOPSAP": [
            {
              "station": "MAKOUOPSAP EP / A",
              "voters": 248
            }
          ],
          "MASSAGAM": [
            {
              "station": "MAKOUOPSAP EP / A",
              "voters": 2150
            }
          ],
          "MAKPANTOUM": [
            {
              "station": "MAKPANTOUM MARCHE / A",
              "voters": 220
            }
          ],
          "MALANDEN": [
            {
              "station": "MALANDEN EP / A",
              "voters": 601
            }
          ],
          "MALOUA": [
            {
              "station": "MALOUA EP / A",
              "voters": 242
            }
          ],
          "MALOUNG": [
            {
              "station": "MALOUNG EP / A",
              "voters": 216
            }
          ],
          "MAMBOUONKOU": [
            {
              "station": "MAMBOUONKOU EP / A",
              "voters": 239
            }
          ],
          "MANCHA": [
            {
              "station": "MANCHA CHEFFERIE EP / A",
              "voters": 1162
            }
          ],
          "MANDARE": [
            {
              "station": "MANCHA MARCHE / A",
              "voters": 732
            }
          ],
          "YOLO": [
            {
              "station": "MANCHA YOLO EP / A",
              "voters": 153
            }
          ],
          "SABEL": [
            {
              "station": "MANDARE EP / A",
              "voters": 366
            }
          ],
          "BANNI": [
            {
              "station": "MANDARE EP / A",
              "voters": 313
            }
          ],
          "MANDIYANG": [
            {
              "station": "MANDIYANG EP / A",
              "voters": 365
            }
          ],
          "MANKAKOUN": [
            {
              "station": "MANKAKOUN EP / A",
              "voters": 281
            }
          ],
          "MANKEMBOUOT": [
            {
              "station": "MANKEMBOUOT EFI / A",
              "voters": 359
            }
          ],
          "MANKOUNKOU": [
            {
              "station": "MANKOUNKOU EP / A",
              "voters": 392
            }
          ],
          "MANKOUOMBI": [
            {
              "station": "MANKOUOMBI CENTRE EP / A",
              "voters": 1550
            }
          ],
          "SAVANE": [
            {
              "station": "MANKOUOMBI SAVANE HANGAR / A",
              "voters": 131
            }
          ],
          "MANSEN": [
            {
              "station": "MANSEN EP / A",
              "voters": 179
            }
          ],
          "MAMBAIN": [
            {
              "station": "MANSOUEN EP / A",
              "voters": 756
            }
          ],
          "MARIPA": [
            {
              "station": "MARIPA CEBEC / A",
              "voters": 418
            }
          ],
          "MATAM": [
            {
              "station": "MATAM EP / A",
              "voters": 575
            }
          ],
          "MATEMBAIN": [
            {
              "station": "MATEMBAIN EP / A",
              "voters": 323
            }
          ],
          "MAYAKOUE": [
            {
              "station": "MAYAKOUE EP / A",
              "voters": 279
            }
          ],
          "MAKOUOPCHICHI": [
            {
              "station": "MOSQUEE MAKOUOPCHICHI / A",
              "voters": 97
            }
          ],
          "NJIMBETGWEN": [
            {
              "station": "NJIMBETGWEN EP / A",
              "voters": 393
            }
          ],
          "NJINGOUOT": [
            {
              "station": "NJINGOUOT EP / A",
              "voters": 237
            }
          ],
          "MAMOGNAM": [
            {
              "station": "NJINTOUM EP / A",
              "voters": 1570
            }
          ],
          "NJISSANGAM": [
            {
              "station": "NJISSANGAM EEC / A",
              "voters": 224
            }
          ],
          "NJINDOUM": [
            {
              "station": "SCIERIE EP / A",
              "voters": 225
            }
          ]
        },
        "NJIMOM": {
          "MALOURE": [
            {
              "station": "CEBEC MALOURE / A",
              "voters": 452
            }
          ],
          "SUMBE": [
            {
              "station": "CES DE MANKI / A",
              "voters": 390
            }
          ],
          "FOYET": [
            {
              "station": "CSI FOYET / A",
              "voters": 939
            }
          ],
          "MAMAREN": [
            {
              "station": "E. PUBLIC DE MAMAREN / A",
              "voters": 223
            }
          ],
          "NJIKOUOCHIE": [
            {
              "station": "E. PUBLIC DE NJIKOUOCHIE / A",
              "voters": 110
            }
          ],
          "MAGHENFAH": [
            {
              "station": "ECOLE CORANIQUE / A",
              "voters": 160
            }
          ],
          "MAFOMYA": [
            {
              "station": "EFI MAFOMYA / A",
              "voters": 228
            }
          ],
          "MANKI": [
            {
              "station": "EFI MAFOMYA / A",
              "voters": 2554
            }
          ],
          "CHEFFERIE": [
            {
              "station": "EFI MAFOMYA / A",
              "voters": 1495
            }
          ],
          "FENGOU": [
            {
              "station": "EP FENGOU / A",
              "voters": 228
            }
          ],
          "NJIMOM": [
            {
              "station": "EP FENGOU / A",
              "voters": 2209
            }
          ],
          "FOLAP": [
            {
              "station": "EP FOLAP / A",
              "voters": 755
            }
          ],
          "MAKUETVU": [
            {
              "station": "EP KOUKOUET / A",
              "voters": 1052
            }
          ],
          "KOUSSAM": [
            {
              "station": "EP KOUSSAM / A",
              "voters": 1162
            }
          ],
          "MABOUO": [
            {
              "station": "EP MABOUO / A",
              "voters": 363
            }
          ],
          "MANCHOUTMANOUN": [
            {
              "station": "EP MACHOUTMANOUN / A",
              "voters": 259
            }
          ],
          "MACHOUTVI": [
            {
              "station": "EP MACHOUTVI / A",
              "voters": 614
            }
          ],
          "MAGHAIT": [
            {
              "station": "EP MAGHAIT / A",
              "voters": 1550
            }
          ],
          "CENTRE": [
            {
              "station": "EP MAGHAIT / A",
              "voters": 1708
            }
          ],
          "MAKAM": [
            {
              "station": "EP MAKAM / A",
              "voters": 373
            }
          ],
          "KEBA": [
            {
              "station": "EP MAKEBA / A",
              "voters": 338
            }
          ],
          "MAMATIE": [
            {
              "station": "EP MAMATIE / A",
              "voters": 323
            }
          ],
          "MANKOUNVI": [
            {
              "station": "EP MANKOUNVI / A",
              "voters": 168
            }
          ],
          "MANSOM": [
            {
              "station": "EP MANSOM / A",
              "voters": 347
            }
          ],
          "MAYO": [
            {
              "station": "EP MAYO / A",
              "voters": 939
            }
          ],
          "MAYOUOM": [
            {
              "station": "EP MAYOUOM I / A",
              "voters": 1366
            }
          ],
          "FOMGHAIT": [
            {
              "station": "EP NJIFOMGHAIT / A",
              "voters": 165
            }
          ],
          "TAMTOUO": [
            {
              "station": "EP TAMTOUO / A",
              "voters": 391
            }
          ]
        }
      },
      "KOUNG-KHI": {
        "BAYANGAM": {
          "YENOM": [
            {
              "station": "CASE DE SANTE DE YENOM / A",
              "voters": 228
            }
          ],
          "FIEUCHIP": [
            {
              "station": "CEBEC CHILA / A",
              "voters": 374
            }
          ],
          "TOUNANG": [
            {
              "station": "CEBEC CHILA / A",
              "voters": 374
            }
          ],
          "KAKO": [
            {
              "station": "CEBEC KADEPA / A",
              "voters": 174
            }
          ],
          "TSEP": [
            {
              "station": "CENTRE DE SANTE DE TSEP / A",
              "voters": 199
            }
          ],
          "DEPTSE": [
            {
              "station": "ECOLE CATHOLIQUE DE MBE / A",
              "voters": 467
            }
          ],
          "BAGONKONG": [
            {
              "station": "ECOLE PUBLIQUE BANDREFAM / A",
              "voters": 352
            }
          ],
          "BATCHI": [
            {
              "station": "ECOLE PUBLIQUE BANDREFAM / A",
              "voters": 352
            }
          ],
          "TOULA": [
            {
              "station": "ECOLE PUBLIQUE BANDREFAM / A",
              "voters": 643
            }
          ],
          "(BADREFAM)": [
            {
              "station": "ECOLE PUBLIQUE BANDREFAM / A",
              "voters": 352
            }
          ],
          "KAASSE": [
            {
              "station": "ECOLE PUBLIQUE BATOUFAM CHEFFERIE / A",
              "voters": 291
            }
          ],
          "(BATOUFAM)": [
            {
              "station": "ECOLE PUBLIQUE BATOUFAM CHEFFERIE / A",
              "voters": 291
            }
          ],
          "KAMKIEU": [
            {
              "station": "ECOLE PUBLIQUE BATOUFAM MARCHE / A",
              "voters": 740
            }
          ],
          "TSOUGUI": [
            {
              "station": "ECOLE PUBLIQUE BATOUFAM MARCHE / A",
              "voters": 740
            }
          ],
          "DJEMGANG": [
            {
              "station": "ECOLE PUBLIQUE KAGNIE / A",
              "voters": 487
            }
          ],
          "LEKOUA": [
            {
              "station": "ECOLE PUBLIQUE KAGNIE / A",
              "voters": 487
            }
          ],
          "NGUIHOP": [
            {
              "station": "ECOLE PUBLIQUE KAGNIE / A",
              "voters": 487
            }
          ],
          "DJA'A": [
            {
              "station": "ECOLE PUBLIQUE KING-PLACE BAYANGAM /  A",
              "voters": 347
            }
          ],
          "TOCHE": [
            {
              "station": "ECOLE PUBLIQUE KING-PLACE BAYANGAM /  A",
              "voters": 347
            }
          ],
          "NKE": [
            {
              "station": "ECOLE PUBLIQUE KING-PLACE BAYANGAM /  A",
              "voters": 874
            }
          ],
          "MBA": [
            {
              "station": "ECOLE PUBLIQUE MBA / A",
              "voters": 765
            }
          ],
          "TOUGOUE-MBEM": [
            {
              "station": "ECOLE PUBLIQUE MBA / A",
              "voters": 765
            }
          ],
          "DJEUVE": [
            {
              "station": "ECOLE PUBLIQUE TCHALA / A",
              "voters": 848
            }
          ],
          "KAGONGOUE": [
            {
              "station": "ECOLE PUBLIQUE TCHALA / A",
              "voters": 848
            }
          ],
          "TOMKIEU": [
            {
              "station": "ECOLE PUBLIQUE TCHALA / A",
              "voters": 848
            }
          ],
          "TOUGOUE-MEUDJU": [
            {
              "station": "ECOLE PUBLIQUE TOUGOUE / A",
              "voters": 322
            }
          ],
          "TOUGOUE-MPOU": [
            {
              "station": "ECOLE PUBLIQUE TOUGOUE / A",
              "voters": 322
            }
          ],
          "FAMLA": [
            {
              "station": "LYCEE DE BATOUFAM / A",
              "voters": 299
            }
          ],
          "KASSAP": [
            {
              "station": "LYCEE DE KASSAP / A",
              "voters": 816
            }
          ],
          "TOCHOM": [
            {
              "station": "LYCEE DE KASSAP / A",
              "voters": 816
            }
          ],
          "KOUOPOU": [
            {
              "station": "MISSION CATHOLIQUE DE MBENG / A",
              "voters": 699
            }
          ],
          "MBENG": [
            {
              "station": "MISSION CATHOLIQUE DE MBENG / A",
              "voters": 699
            }
          ],
          "TOMGHEM": [
            {
              "station": "MISSION CATHOLIQUE DE MBENG / A",
              "voters": 986
            }
          ],
          "BAKALA": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 235
            }
          ],
          "BATCHIEU": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 235
            }
          ]
        },
        "DEMDING": {
          "FAMGHOUO": [
            {
              "station": "CENTRE SANTE FAMGHOUO / A",
              "voters": 926
            }
          ],
          "MVEULE": [
            {
              "station": "CENTRE SANTE FAMGHOUO / A",
              "voters": 1251
            }
          ],
          "NDENG": [
            {
              "station": "CES DEMDING / A",
              "voters": 486
            }
          ],
          "BANGANG": [
            {
              "station": "ECOLE BANGANG FONDJI / A",
              "voters": 363
            }
          ],
          "FONDJI": [
            {
              "station": "ECOLE BANGANG FONDJI / A",
              "voters": 363
            }
          ],
          "DJIOGO": [
            {
              "station": "ECOLE PUBLIQUE DJIOGO / A",
              "voters": 167
            }
          ],
          "FAMLA": [
            {
              "station": "ECOLE PUBLIQUE FAMLA 1 / A",
              "voters": 271
            }
          ],
          "FAMLA2": [
            {
              "station": "ECOLE PUBLIQUE FAMLA 2 / A",
              "voters": 971
            }
          ],
          "SEDEMDOM": [
            {
              "station": "ECOLE PUBLIQUE FAMLA 2 / A",
              "voters": 879
            }
          ],
          "PALMERAIE": [
            {
              "station": "ECOLE PUBLIQUE FAMLA 2 / A",
              "voters": 879
            }
          ],
          "FOMAYUM": [
            {
              "station": "ECOLE PUBLIQUE FOMAYUM / A",
              "voters": 177
            }
          ],
          "FONEGOM": [
            {
              "station": "ECOLE PUBLIQUE FONEGOM / A",
              "voters": 450
            }
          ],
          "MAGUE": [
            {
              "station": "ECOLE PUBLIQUE MAGUE / A",
              "voters": 277
            }
          ],
          "MOUTCHA": [
            {
              "station": "ECOLE PUBLIQUE MOUTCHA / A",
              "voters": 369
            }
          ],
          "DJIKO": [
            {
              "station": "FOYER DJIKO / A",
              "voters": 142
            }
          ],
          "FAMTUM": [
            {
              "station": "FOYER FAMTUM / A",
              "voters": 165
            }
          ],
          "MBIENG-DJEBEM": [
            {
              "station": "FOYER MBIENG DJEBEM / A",
              "voters": 105
            }
          ],
          "SEDEMBOM": [
            {
              "station": "FOYER SEDEMBOM / A",
              "voters": 407
            }
          ],
          "POU": [
            {
              "station": "MISSION CATHOLIQUE DE FAMGHOUO / A",
              "voters": 1567
            }
          ],
          "DJEBEM": [
            {
              "station": "MISSION CATHOLIQUE DE FAMGHOUO / A",
              "voters": 1567
            }
          ],
          "HOCK": [
            {
              "station": "MISSION CATHOLIQUE HOCK / A",
              "voters": 128
            }
          ],
          "MVUH": [
            {
              "station": "MISSION CATHOLIQUE MVUH / A",
              "voters": 553
            }
          ]
        },
        "PETE-BANDJOUN": {
          "DJIOMGHOUO": [
            {
              "station": "CEBEC DJIOMGHOUO / A",
              "voters": 965
            }
          ],
          "KATSELA": [
            {
              "station": "CEBEC KATSELA / A",
              "voters": 501
            }
          ],
          "TOTSELA": [
            {
              "station": "CEBEC TOTSELA / A",
              "voters": 212
            }
          ],
          "MBIENG": [
            {
              "station": "COLLEGE ELIE ALLEGRET / A",
              "voters": 1092
            }
          ],
          "TSE": [
            {
              "station": "ECOLE CATHOLIQUE DE TSE / A",
              "voters": 220
            }
          ],
          "FAMLENG": [
            {
              "station": "ECOLE CATHOLIQUE DJIOGO / A",
              "voters": 1301
            }
          ],
          "HA'A": [
            {
              "station": "ECOLE CATHOLIQUE HA'A / A",
              "voters": 716
            }
          ],
          "KAKOUO": [
            {
              "station": "ECOLE CATHOLIQUE KAKOUO / A",
              "voters": 285
            }
          ],
          "TOKOUO": [
            {
              "station": "ECOLE CATHOLIQUE KAKOUO / A",
              "voters": 2267
            }
          ],
          "KAMGO": [
            {
              "station": "ECOLE CATHOLIQUE KAMGO / A",
              "voters": 589
            }
          ],
          "MBOUO": [
            {
              "station": "ECOLE CATHOLIQUE ST ALBERT / A",
              "voters": 2568
            }
          ],
          "PETE": [
            {
              "station": "ECOLE CATHOLIQUE ST ALBERT / A",
              "voters": 5824
            }
          ],
          "CHARLES": [
            {
              "station": "ECOLE CATHOLIQUE ST ALBERT / A",
              "voters": 2529
            }
          ],
          "TOUOBA": [
            {
              "station": "ECOLE CATHOLIQUE TOUOBA / A",
              "voters": 385
            }
          ],
          "MAGOM": [
            {
              "station": "ECOLE PILOTE DE MAGOM / A",
              "voters": 453
            }
          ],
          "DENGBEM": [
            {
              "station": "ECOLE PUBLIQUE DENGBEM / A",
              "voters": 456
            }
          ],
          "DJA": [
            {
              "station": "ECOLE PUBLIQUE DJA / A",
              "voters": 1665
            }
          ],
          "DJIOPA": [
            {
              "station": "ECOLE PUBLIQUE DJIOPA / A",
              "voters": 314
            }
          ],
          "LEMLA": [
            {
              "station": "ECOLE PUBLIQUE DJIOPA / A",
              "voters": 314
            }
          ],
          "SEKAKOUO": [
            {
              "station": "ECOLE PUBLIQUE DJIOPA / A",
              "voters": 314
            }
          ],
          "DOMLO": [
            {
              "station": "ECOLE PUBLIQUE DOMLO / A",
              "voters": 139
            }
          ],
          "KING-PLACE": [
            {
              "station": "ECOLE PUBLIQUE HIALA / A",
              "voters": 901
            }
          ],
          "TSECHA": [
            {
              "station": "ECOLE PUBLIQUE HIALA / A",
              "voters": 901
            }
          ],
          "TSELENG": [
            {
              "station": "ECOLE PUBLIQUE HIALA / A",
              "voters": 901
            }
          ],
          "HOUA": [
            {
              "station": "ECOLE PUBLIQUE HOUA / A",
              "voters": 912
            }
          ],
          "KAYO": [
            {
              "station": "ECOLE PUBLIQUE KAYO / A",
              "voters": 395
            }
          ],
          "LEMGO": [
            {
              "station": "ECOLE PUBLIQUE KAYO / A",
              "voters": 395
            }
          ],
          "KENG": [
            {
              "station": "ECOLE PUBLIQUE KENG / A",
              "voters": 274
            }
          ],
          "MBEMTUM": [
            {
              "station": "ECOLE PUBLIQUE MBEMTUM / A",
              "voters": 928
            }
          ],
          "MTIEKI": [
            {
              "station": "ECOLE PUBLIQUE MTIEKI / A",
              "voters": 566
            }
          ],
          "SOUNG": [
            {
              "station": "ECOLE PUBLIQUE SOUNG / A",
              "voters": 757
            }
          ],
          "TESSE": [
            {
              "station": "ECOLE PUBLIQUE TESSE / A",
              "voters": 496
            }
          ],
          "TSEGHEM": [
            {
              "station": "ECOLE PUBLIQUE TSEGHEM / A",
              "voters": 438
            }
          ],
          "HOUOPOUO": [
            {
              "station": "ECOLE PUBLIQUE TSELA / A",
              "voters": 520
            }
          ],
          "DJIOGUE": [
            {
              "station": "FOYER CULTUREL DJIOGUE / A",
              "voters": 167
            }
          ],
          "DJIONE": [
            {
              "station": "FOYER CULTUREL DJIONE / A",
              "voters": 88
            }
          ],
          "YOM": [
            {
              "station": "FOYER CULTUREL YOM / A",
              "voters": 2147
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE CLASSIQUE BANDJOUN / A",
              "voters": 468
            }
          ],
          "CARRIERE": [
            {
              "station": "PETE CARRIERE PLACE PUBLIQUE / A",
              "voters": 849
            }
          ],
          "CENTRE": [
            {
              "station": "PETE ECOLE PUBLIQUE DU CENTRE / A",
              "voters": 1978
            }
          ],
          "MOUWE": [
            {
              "station": "PLACE PUBLIQUE MAFO TOUKAM / A",
              "voters": 511
            }
          ]
        }
      },
      "MENOUA": {
        "DSCHANG": {
          "FONGO": [
            {
              "station": "CENTRE DE SANTE DE FONGO-NDENG / A",
              "voters": 105
            }
          ],
          "-NDENG": [
            {
              "station": "CENTRE DE SANTE DE FONGO-NDENG / A",
              "voters": 105
            }
          ],
          "NGUI": [
            {
              "station": "CENTRE DE SANTE DE FONGO-NDENG / A",
              "voters": 4814
            }
          ],
          "MEGUIALA": [
            {
              "station": "CENTRE DE SANTE DE FONGO-NDENG / A",
              "voters": 105
            }
          ],
          "DIAKA": [
            {
              "station": "CENTRE SANTE DE MFEU / A",
              "voters": 535
            }
          ],
          "MFEU": [
            {
              "station": "CENTRE SANTE DE MFEU / A",
              "voters": 535
            }
          ],
          "TSINFEM": [
            {
              "station": "COL. NOTRE DAME DE L'IMMAT. C.(CONODIC)  /A",
              "voters": 2790
            }
          ],
          "LAC": [
            {
              "station": "COLLEGE ALBERT CAMUS / A",
              "voters": 521
            }
          ],
          "TCHOUALE": [
            {
              "station": "COLLEGE INTELLEXI / A",
              "voters": 3782
            }
          ],
          "FEMTEU": [
            {
              "station": "COLLEGE MENOUA ESPOIR / A",
              "voters": 7145
            }
          ],
          "KELENG": [
            {
              "station": "COLLEGE MENOUA ESPOIR / A",
              "voters": 5837
            }
          ],
          "ASSEITSA": [
            {
              "station": "DELEGATION D'ARROND. AGRICULTURE / A",
              "voters": 1690
            }
          ],
          "IRAD": [
            {
              "station": "DELEGATION D'ARROND. AGRICULTURE / A",
              "voters": 2321
            }
          ],
          "NYLON": [
            {
              "station": "DELEGATION D'ARROND. AGRICULTURE / A",
              "voters": 3680
            }
          ],
          "REGIE": [
            {
              "station": "DELEGATION D'ARROND. AGRICULTURE / A",
              "voters": 1690
            }
          ],
          "GENIE": [
            {
              "station": "DELEGATION DEP. AFFAIRES SOCIALES / A",
              "voters": 2764
            }
          ],
          "RURAL": [
            {
              "station": "DELEGATION DEP. AFFAIRES SOCIALES / A",
              "voters": 2764
            }
          ],
          "LEFOCK": [
            {
              "station": "DELEGATION DEP. D'ELEVAGE / A",
              "voters": 1022
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "DELEGATION DEP. SPORTS E. PHYSIQUE / A",
              "voters": 1853
            }
          ],
          "FEUMBING": [
            {
              "station": "ECOLE CATHOLIQUE DE BATA / A",
              "voters": 149
            }
          ],
          "FOTO": [
            {
              "station": "ECOLE CATHOLIQUE DE BATA / A",
              "voters": 3100
            }
          ],
          "ATHA": [
            {
              "station": "ECOLE CATHOLIQUE DE BATA / A",
              "voters": 149
            }
          ],
          "NKEULI": [
            {
              "station": "ECOLE CATHOLIQUE DE BATA / A",
              "voters": 149
            }
          ],
          "TSINGLAH": [
            {
              "station": "ECOLE CATHOLIQUE DE BATA / A",
              "voters": 149
            }
          ],
          "ZEMPOUET": [
            {
              "station": "ECOLE CATHOLIQUE DE FOTETSA / A",
              "voters": 456
            }
          ],
          "CANNE": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 949
            }
          ],
          "SUCRE": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 949
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 3497
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ALBERT / A",
              "voters": 1644
            }
          ],
          "FOSSONG": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MATHIAS / A",
              "voters": 6028
            }
          ],
          "WENTCHENG": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MATHIAS / A",
              "voters": 6028
            }
          ],
          "AZUENLA": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MATHIAS / A",
              "voters": 5719
            }
          ],
          "MINGOU": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MATHIAS / A",
              "voters": 4054
            }
          ],
          "TONCHOU": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MATHIAS / A",
              "voters": 4054
            }
          ],
          "MELANG": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MICHEL / A",
              "voters": 2069
            }
          ],
          "TAPALE": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MICHEL / A",
              "voters": 3464
            }
          ],
          "TOUOLE": [
            {
              "station": "ECOLE CATHOLIQUE SAINT MICHEL / A",
              "voters": 674
            }
          ],
          "CAMP": [
            {
              "station": "ECOLE MATERNELLE DE LA GENDARMERIE /  A",
              "voters": 256
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ECOLE MATERNELLE DE LA GENDARMERIE /  A",
              "voters": 256
            }
          ],
          "FEMLA": [
            {
              "station": "ECOLE MATERNELLE LES HIRONDELLES / A",
              "voters": 396
            }
          ],
          "ZEMDA": [
            {
              "station": "ECOLE MATERNELLE LES HIRONDELLES / A",
              "voters": 1963
            }
          ],
          "URBAIN": [
            {
              "station": "ECOLE MATERNELLE MARCHE B / A",
              "voters": 1419
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE MATERNELLE MARCHE B / A",
              "voters": 1419
            }
          ],
          "MECHIEU": [
            {
              "station": "ECOLE MATERNELLE MARCHE B / A",
              "voters": 3140
            }
          ],
          "AVIATION": [
            {
              "station": "ECOLE PRIVEE DES INFIRMIERS / A",
              "voters": 932
            }
          ],
          "YAGUEM": [
            {
              "station": "ECOLE PRIVEE DES INFIRMIERS / A",
              "voters": 1305
            }
          ],
          "ATHOUMETO": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE DE FOREKE / A",
              "voters": 3294
            }
          ],
          "MEKA'A": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE DE FOREKE / A",
              "voters": 7520
            }
          ],
          "ZENMEH": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE DE FOREKE / A",
              "voters": 3294
            }
          ],
          "ATOCHI": [
            {
              "station": "ECOLE PUBLIQUE D'ATOCHI / A",
              "voters": 148
            }
          ],
          "AZUENG": [
            {
              "station": "ECOLE PUBLIQUE D'ESSANG / A",
              "voters": 225
            }
          ],
          "ESSANG": [
            {
              "station": "ECOLE PUBLIQUE D'ESSANG / A",
              "voters": 225
            }
          ],
          "MBILE": [
            {
              "station": "ECOLE PUBLIQUE D'ESSANG / A",
              "voters": 225
            }
          ],
          "APOUH": [
            {
              "station": "ECOLE PUBLIQUE DE BANKI / A",
              "voters": 450
            }
          ],
          "BANKI": [
            {
              "station": "ECOLE PUBLIQUE DE BANKI / A",
              "voters": 356
            }
          ],
          "FONGO-": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 779
            }
          ],
          "NDENG": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 779
            }
          ],
          "TSIMBING": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 1472
            }
          ],
          "FONGO-NDENG": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 2377
            }
          ],
          "FOMEGUIA": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 237
            }
          ],
          "MEZENG": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 237
            }
          ],
          "NDJIA": [
            {
              "station": "ECOLE PUBLIQUE DE FOMEGUIA / A",
              "voters": 237
            }
          ],
          "FONAKEUKEU": [
            {
              "station": "ECOLE PUBLIQUE DE FONAKEUKEU / A",
              "voters": 764
            }
          ],
          "FOTCHOULI": [
            {
              "station": "ECOLE PUBLIQUE DE FOTCHOULI / A",
              "voters": 224
            }
          ],
          "ASSUE": [
            {
              "station": "ECOLE PUBLIQUE DE FOTETSA / A",
              "voters": 230
            }
          ],
          "AWONLA": [
            {
              "station": "ECOLE PUBLIQUE DE FOTETSA / A",
              "voters": 230
            }
          ],
          "MELAH": [
            {
              "station": "ECOLE PUBLIQUE DE FOTETSA / A",
              "voters": 230
            }
          ],
          "FOTETSA": [
            {
              "station": "ECOLE PUBLIQUE DE FOTO / A",
              "voters": 6410
            }
          ],
          "TOULA": [
            {
              "station": "ECOLE PUBLIQUE DE FOTO / A",
              "voters": 5890
            }
          ],
          "NDOUNGAH": [
            {
              "station": "ECOLE PUBLIQUE DE FOTO / A",
              "voters": 7047
            }
          ],
          "AZONG": [
            {
              "station": "ECOLE PUBLIQUE DE FOTSEM LESSING / A",
              "voters": 253
            }
          ],
          "FOTSEM": [
            {
              "station": "ECOLE PUBLIQUE DE FOTSEM LESSING / A",
              "voters": 253
            }
          ],
          "LESSING": [
            {
              "station": "ECOLE PUBLIQUE DE FOTSEM LESSING / A",
              "voters": 253
            }
          ],
          "VALLEE": [
            {
              "station": "ECOLE PUBLIQUE DE LA VALLEE / A",
              "voters": 1825
            }
          ],
          "LEFANG": [
            {
              "station": "ECOLE PUBLIQUE DE LEFANG / A",
              "voters": 513
            }
          ],
          "NKOP": [
            {
              "station": "ECOLE PUBLIQUE DE LEFANG / A",
              "voters": 513
            }
          ],
          "LEFFE": [
            {
              "station": "ECOLE PUBLIQUE DE LEFFE / A",
              "voters": 249
            }
          ],
          "LEPPE": [
            {
              "station": "ECOLE PUBLIQUE DE LEPPE / A",
              "voters": 116
            }
          ],
          "TOULEPE": [
            {
              "station": "ECOLE PUBLIQUE DE LEPPE / A",
              "voters": 699
            }
          ],
          "LETSA": [
            {
              "station": "ECOLE PUBLIQUE DE LETSA / A",
              "voters": 1525
            }
          ],
          "AFEMLITAGLI": [
            {
              "station": "ECOLE PUBLIQUE DE LIKONG / A",
              "voters": 492
            }
          ],
          "FOREKE": [
            {
              "station": "ECOLE PUBLIQUE DE LIKONG / A",
              "voters": 14985
            }
          ],
          "ATSAGOUA": [
            {
              "station": "ECOLE PUBLIQUE DE LIKONG / A",
              "voters": 492
            }
          ],
          "LIKONG": [
            {
              "station": "ECOLE PUBLIQUE DE LIKONG / A",
              "voters": 986
            }
          ],
          "ZEUKENG": [
            {
              "station": "ECOLE PUBLIQUE DE LINGANG / A",
              "voters": 411
            }
          ],
          "LESSE": [
            {
              "station": "ECOLE PUBLIQUE DE LINGANG / A",
              "voters": 411
            }
          ],
          "LINGANG": [
            {
              "station": "ECOLE PUBLIQUE DE LINGANG / A",
              "voters": 411
            }
          ],
          "MEFET": [
            {
              "station": "ECOLE PUBLIQUE DE LINGANG / A",
              "voters": 411
            }
          ],
          "KEMDONNA": [
            {
              "station": "ECOLE PUBLIQUE DE LIPO / A",
              "voters": 436
            }
          ],
          "LIPO": [
            {
              "station": "ECOLE PUBLIQUE DE LIPO / A",
              "voters": 1193
            }
          ],
          "POUH": [
            {
              "station": "ECOLE PUBLIQUE DE LIPO / A",
              "voters": 1193
            }
          ],
          "LITAGLI": [
            {
              "station": "ECOLE PUBLIQUE DE LITAGLI / A",
              "voters": 225
            }
          ],
          "LITIEU": [
            {
              "station": "ECOLE PUBLIQUE DE LITIEU / A",
              "voters": 670
            }
          ],
          "LAP": [
            {
              "station": "ECOLE PUBLIQUE DE NDAH / A",
              "voters": 1096
            }
          ],
          "NDAH": [
            {
              "station": "ECOLE PUBLIQUE DE NDAH / A",
              "voters": 202
            }
          ],
          "NNEH": [
            {
              "station": "ECOLE PUBLIQUE DE NDAH / A",
              "voters": 202
            }
          ],
          "TOULE,NLEH": [
            {
              "station": "ECOLE PUBLIQUE DE NDAH / A",
              "voters": 4158
            }
          ],
          "NDENKOP": [
            {
              "station": "ECOLE PUBLIQUE DE NDENKOP / A",
              "voters": 191
            }
          ],
          "MINGMETO": [
            {
              "station": "ECOLE PUBLIQUE DE NGUI / A",
              "voters": 3190
            }
          ],
          "NOU": [
            {
              "station": "ECOLE PUBLIQUE DE NOU / A",
              "voters": 161
            }
          ],
          "NTEINGUE": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 1635
            }
          ],
          "ZENG": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 545
            }
          ],
          "MIENDAP": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 545
            }
          ],
          "NTISSAH": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 545
            }
          ],
          "TISSAH": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 545
            }
          ],
          "FALAISE": [
            {
              "station": "ECOLE PUBLIQUE DE NTEINGUE / A",
              "voters": 545
            }
          ],
          "NTSEU": [
            {
              "station": "ECOLE PUBLIQUE DE NTSEU / A",
              "voters": 89
            }
          ],
          "MVEUH": [
            {
              "station": "ECOLE PUBLIQUE DE NZEMPOUET / A",
              "voters": 241
            }
          ],
          "TCHOUADENG": [
            {
              "station": "ECOLE PUBLIQUE DE NZEMPOUET / A",
              "voters": 241
            }
          ],
          "NZIDENG": [
            {
              "station": "ECOLE PUBLIQUE DE NZIDENG / A",
              "voters": 178
            }
          ],
          "ATOUPOU": [
            {
              "station": "ECOLE PUBLIQUE DE NZINTSO / A",
              "voters": 668
            }
          ],
          "MINGHONG": [
            {
              "station": "ECOLE PUBLIQUE DE NZINTSO / A",
              "voters": 1690
            }
          ],
          "NZINTSO": [
            {
              "station": "ECOLE PUBLIQUE DE NZINTSO / A",
              "voters": 668
            }
          ],
          "TSINTSUET": [
            {
              "station": "ECOLE PUBLIQUE DE NZINTSO / A",
              "voters": 668
            }
          ],
          "NTEUH": [
            {
              "station": "ECOLE PUBLIQUE DE NZONG / A",
              "voters": 583
            }
          ],
          "NZONG": [
            {
              "station": "ECOLE PUBLIQUE DE NZONG / A",
              "voters": 583
            }
          ],
          "TOUTSANG": [
            {
              "station": "ECOLE PUBLIQUE DE TOUTSANG / A",
              "voters": 271
            }
          ],
          "TSINGLA": [
            {
              "station": "ECOLE PUBLIQUE DE TSINGLA / A",
              "voters": 94
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE DE TSINKOP VILLAGE / A",
              "voters": 1940
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU / A",
              "voters": 3327
            }
          ],
          "COMMERCIAL": [
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU / A",
              "voters": 1908
            }
          ],
          "FIANKOP": [
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU / A",
              "voters": 9943
            }
          ],
          "TSINKOP": [
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU / A",
              "voters": 5560
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ECOLE PUBLIQUE GROUPE2 / A",
              "voters": 1990
            }
          ],
          "MAKEMTSA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE3 / A",
              "voters": 2213
            }
          ],
          "ATCHOUAZONG": [
            {
              "station": "FOYER ATCHOUNZONG / A",
              "voters": 132
            }
          ],
          "MAKAATOUPOUH": [
            {
              "station": "FOYER ATOUPOUH / A",
              "voters": 163
            }
          ],
          "KING": [
            {
              "station": "FOYER COM. FOTO KING PLACE / A",
              "voters": 483
            }
          ],
          "PLACE": [
            {
              "station": "FOYER COM. FOTO KING PLACE / A",
              "voters": 483
            }
          ],
          "NGATSI": [
            {
              "station": "FOYER COM. FOTO KING PLACE / A",
              "voters": 483
            }
          ],
          "FOGUE-SAH": [
            {
              "station": "FOYER FOGUE-SAH / A",
              "voters": 64
            }
          ],
          "NGOUA": [
            {
              "station": "FOYER NGOUA / A",
              "voters": 162
            }
          ],
          "SITEU": [
            {
              "station": "FOYER SITEU / A",
              "voters": 561
            }
          ],
          "TITIA": [
            {
              "station": "FOYER SITEU / A",
              "voters": 561
            }
          ],
          "DEZONG": [
            {
              "station": "FOYER TOULA DEZONG / A",
              "voters": 759
            }
          ],
          "BASA": [
            {
              "station": "FOYER TOULA FOGUIMGO / A",
              "voters": 403
            }
          ],
          "FOGUIMGO": [
            {
              "station": "FOYER TOULA FOGUIMGO / A",
              "voters": 403
            }
          ],
          "METEU": [
            {
              "station": "FOYER TOULA FOGUIMGO / A",
              "voters": 403
            }
          ],
          "TSIEZA": [
            {
              "station": "FOYER TOULA FOGUIMGO / A",
              "voters": 706
            }
          ],
          "BAWA": [
            {
              "station": "FOYER WA / A",
              "voters": 159
            }
          ],
          "FEMTSING": [
            {
              "station": "FOYER WA / A",
              "voters": 159
            }
          ],
          "TSINTSET": [
            {
              "station": "FOYER WA / A",
              "voters": 159
            }
          ],
          "KELENG,": [
            {
              "station": "INSTITUT FOYAGUEM / A",
              "voters": 373
            }
          ],
          "ZEMBING,SIGNAL": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 511
            }
          ],
          "LEPIA": [
            {
              "station": "LYCEE CLASSIQUE / A",
              "voters": 2027
            }
          ],
          "BALIVONLI": [
            {
              "station": "LYCEE DE BALIVONLI / A",
              "voters": 396
            }
          ],
          "AZENG": [
            {
              "station": "LYCEE DE FONGO-NDENG / A",
              "voters": 110
            }
          ],
          "ZENKEU": [
            {
              "station": "LYCEE DE FONGO-NDENG / A",
              "voters": 110
            }
          ],
          "ZINTSE": [
            {
              "station": "LYCEE DE FONGO-NDENG / A",
              "voters": 110
            }
          ],
          "MEGANG": [
            {
              "station": "MAGASIN CAPLAME DE FONGO-NDENG / A",
              "voters": 772
            }
          ],
          "ASSANG": [
            {
              "station": "MAGASIN CAPLAME DE FONGO-NDENG / A",
              "voters": 542
            }
          ],
          "FIALA": [
            {
              "station": "MAGASIN CAPLAME DE FONGO-NDENG / A",
              "voters": 9191
            }
          ],
          "NZENLAH": [
            {
              "station": "MAGASIN CAPLAME DE FONGO-NDENG / A",
              "voters": 788
            }
          ],
          "MEZEM": [
            {
              "station": "MAGASIN CAPLAME DE FONGO-NDENG / A",
              "voters": 542
            }
          ],
          "MENOUET": [
            {
              "station": "MAGASIN CAPLAME DE MAKONG / A",
              "voters": 285
            }
          ],
          "MAKONG": [
            {
              "station": "MAGASIN CAPLAME FOTETSA / A",
              "voters": 853
            }
          ],
          "TSINKOU": [
            {
              "station": "MAGASIN CAPLAME FOTETSA / A",
              "voters": 283
            }
          ],
          "ZEMLOH": [
            {
              "station": "MAGASIN CAPLAME FOTETSA / A",
              "voters": 283
            }
          ],
          "CAMPUS": [
            {
              "station": "SAR ET SM / A",
              "voters": 494
            }
          ],
          "UNIVERSITAIRE": [
            {
              "station": "SAR ET SM / A",
              "voters": 494
            }
          ],
          "CITE": [
            {
              "station": "SAR ET SM / A",
              "voters": 494
            }
          ],
          "CAPLAME": [
            {
              "station": "SAR ET SM / A",
              "voters": 494
            }
          ],
          "MOSQUEE": [
            {
              "station": "USINE CAPLAME DE DSCHANG / A",
              "voters": 658
            }
          ]
        },
        "FOKOUE": {
          "NKA": [
            {
              "station": "BAMEGWOU EP / A",
              "voters": 124
            }
          ],
          "NZEMBOUO": [
            {
              "station": "BAMEGWOU EP / A",
              "voters": 124
            }
          ],
          "BANDOUM": [
            {
              "station": "BANDOUM EP / A",
              "voters": 139
            }
          ],
          "BANGOUET": [
            {
              "station": "BANGOUET EP / A",
              "voters": 204
            }
          ],
          "CENTRE": [
            {
              "station": "BUREAU DE POSTE / A",
              "voters": 1103
            }
          ],
          "COMMERCIAL": [
            {
              "station": "BUREAU DE POSTE / A",
              "voters": 874
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "BUREAU DE POSTE / A",
              "voters": 253
            }
          ],
          "NZENTSIEH": [
            {
              "station": "CASE COMMUNAUTAIRE NZENTSIEUH / A",
              "voters": 74
            }
          ],
          "MENA'A": [
            {
              "station": "CASE DE SANTE MENA'A / A",
              "voters": 114
            }
          ],
          "MINLAH": [
            {
              "station": "CETIC DE FOKOUE / A",
              "voters": 138
            }
          ],
          "MINTSOH": [
            {
              "station": "COURS DU FOYER MINTSOH / A",
              "voters": 255
            }
          ],
          "MISSION": [
            {
              "station": "EC FOKOUE / A",
              "voters": 45
            }
          ],
          "MANGUEZONG": [
            {
              "station": "EC FOTOMENA / A",
              "voters": 410
            }
          ],
          "MEKA": [
            {
              "station": "EC FOTOMENA / A",
              "voters": 378
            }
          ],
          "NKO'O": [
            {
              "station": "EC FOTOMENA / A",
              "voters": 378
            }
          ],
          "LEPOUNG": [
            {
              "station": "FOKOUE CENTRE EP / A",
              "voters": 497
            }
          ],
          "NDOUNPOU": [
            {
              "station": "FOKOUE CENTRE EP / A",
              "voters": 497
            }
          ],
          "TOUCHET": [
            {
              "station": "FOKOUE CENTRE EP / A",
              "voters": 497
            }
          ],
          "MINBING": [
            {
              "station": "FONTSA - TOUALA EP / A",
              "voters": 172
            }
          ],
          "FOTCHOUFFEU": [
            {
              "station": "FOTCHOUFFEU EP / A",
              "voters": 124
            }
          ],
          "FOTOMENA": [
            {
              "station": "FOTOMENA EP / A",
              "voters": 412
            }
          ],
          "NTSAH": [
            {
              "station": "FOTOMENA EP / A",
              "voters": 412
            }
          ],
          "TCWELEVENG": [
            {
              "station": "FOTOMENA EP / A",
              "voters": 412
            }
          ],
          "FOMELO": [
            {
              "station": "FOTSAGHO EP / A",
              "voters": 478
            }
          ],
          "FOTSAGHO": [
            {
              "station": "FOTSAGHO EP / A",
              "voters": 68
            }
          ],
          "EJWET": [
            {
              "station": "FOYER EJWET / A",
              "voters": 67
            }
          ],
          "FOKOUE": [
            {
              "station": "FOYER FOKOUE / A",
              "voters": 151
            }
          ],
          "MBOU": [
            {
              "station": "FOYER FOKOUE / A",
              "voters": 151
            }
          ],
          "NSATSE": [
            {
              "station": "FOYER FOKOUE / A",
              "voters": 151
            }
          ],
          "FOMOPEA": [
            {
              "station": "FOYER FOMOPEA / A",
              "voters": 366
            }
          ],
          "FONTSA": [
            {
              "station": "FOYER FONTSA - TOUALA / A",
              "voters": 229
            }
          ],
          "TOUALA": [
            {
              "station": "FOYER FONTSA - TOUALA / A",
              "voters": 229
            }
          ],
          "LAFIE": [
            {
              "station": "FOYER LAFIE / A",
              "voters": 84
            }
          ],
          "LENLAH": [
            {
              "station": "FOYER LENLAH / A",
              "voters": 98
            }
          ],
          "MANDONG": [
            {
              "station": "FOYER MANDONG / A",
              "voters": 108
            }
          ],
          "MESSEM": [
            {
              "station": "FOYER MESSEM / A",
              "voters": 37
            }
          ],
          "NDOUNDE": [
            {
              "station": "FOYER NDOUNDE / A",
              "voters": 80
            }
          ],
          "EKOUH": [
            {
              "station": "LYCEE DE FOKOUE / A",
              "voters": 135
            }
          ],
          "NTSENLAH": [
            {
              "station": "NTSENLAH EP / A",
              "voters": 159
            }
          ],
          "NZALLAH": [
            {
              "station": "NZALLAH EP / A",
              "voters": 87
            }
          ],
          "FIALAH": [
            {
              "station": "POSTE AGRICOLE BAMEGWOU / A",
              "voters": 675
            }
          ],
          "BAMEGWOU": [
            {
              "station": "POSTE AGRICOLE BAMEGWOU / A",
              "voters": 112
            }
          ],
          "TSAFOUH": [
            {
              "station": "POSTE AGRICOLE DE TSAFOUH / A",
              "voters": 20
            }
          ],
          "TOUFFAM": [
            {
              "station": "TOUFFAM EP / A",
              "voters": 255
            }
          ],
          "YANTOU": [
            {
              "station": "YANTOU EP / A",
              "voters": 111
            }
          ]
        },
        "FONGO-TONGO": {
          "AGAP": [
            {
              "station": "AGAP-ATOGUIA EP / A",
              "voters": 184
            }
          ],
          "LOTSA": [
            {
              "station": "AGAP-ATOGUIA EP / A",
              "voters": 184
            }
          ],
          "TCHOUANWA-FOBEUH": [
            {
              "station": "AGAP-ATOGUIA EP / A",
              "voters": 184
            }
          ],
          "NWASSAA": [
            {
              "station": "CES BILINGUE DE NDENTO / A",
              "voters": 24
            }
          ],
          "FOSSONG": [
            {
              "station": "COLLEGE CO.PLI.FO / A",
              "voters": 16
            }
          ],
          "TCHUENTCHUE": [
            {
              "station": "COLLEGE CO.PLI.FO / A",
              "voters": 16
            }
          ],
          "LEPOUO": [
            {
              "station": "COLLEGE CO.PLI.FO / A",
              "voters": 16
            }
          ],
          "DJEU": [
            {
              "station": "DJEU EP / A",
              "voters": 269
            }
          ],
          "MENIEUH": [
            {
              "station": "DJEU EP / A",
              "voters": 269
            }
          ],
          "DJIEUMBOU": [
            {
              "station": "EP DJIEUMBOU / A",
              "voters": 177
            }
          ],
          "LEVENG": [
            {
              "station": "EP DJIEUMBOU / A",
              "voters": 177
            }
          ],
          "MBANECK": [
            {
              "station": "EP TCHOUANWA / A",
              "voters": 52
            }
          ],
          "NFEUNG": [
            {
              "station": "EP TCHOUANWA / A",
              "voters": 52
            }
          ],
          "SIETIEH": [
            {
              "station": "EP TCHOUANWA / A",
              "voters": 52
            }
          ],
          "TCHOUANWA": [
            {
              "station": "EP TCHOUANWA / A",
              "voters": 52
            }
          ],
          "TIEDONG": [
            {
              "station": "EP TCHOUANWA / A",
              "voters": 52
            }
          ],
          "ALLOH": [
            {
              "station": "FONGO-TONGO EP CHEFFERIE / A",
              "voters": 227
            }
          ],
          "AZEM": [
            {
              "station": "FONGO-TONGO EP CHEFFERIE / A",
              "voters": 227
            }
          ],
          "TOUOTCHOUET": [
            {
              "station": "FONGO-TONGO EP CHEFFERIE / A",
              "voters": 227
            }
          ],
          "FOSSONG-ELLELEM": [
            {
              "station": "FOSSONG-ELLELEM EP / A",
              "voters": 483
            }
          ],
          "FOSSONG-TCHUENTCHUE": [
            {
              "station": "FOSSONG-TCHUENTCHUE EP / A",
              "voters": 381
            }
          ],
          "APANG": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 912
            }
          ],
          "APANTSE": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 895
            }
          ],
          "LATCHOUET": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 1090
            }
          ],
          "LEFANG": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "MBOUA": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "MEGUEU-FIALA": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "METEUH": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "MEZA": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 1191
            }
          ],
          "NDEDAH": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "NKO'OH": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "TOUFEM": [
            {
              "station": "FOYER FONGO-TONGO / A",
              "voters": 856
            }
          ],
          "BALI": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "LEPIA": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "LEPOUH": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "MENGA": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "NZENBING": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "NZEUH": [
            {
              "station": "FOYER MENGA / A",
              "voters": 185
            }
          ],
          "TSENKEUNG": [
            {
              "station": "LATCHOUET EP / A",
              "voters": 234
            }
          ],
          "LEMBET": [
            {
              "station": "LEMBET EP / A",
              "voters": 336
            }
          ],
          "TCHOUOTENG": [
            {
              "station": "LEMBET EP / A",
              "voters": 336
            }
          ],
          "LETHIAPANG": [
            {
              "station": "LETHIAPANG EP / A",
              "voters": 269
            }
          ],
          "NDENTO": [
            {
              "station": "LETHIAPANG EP / A",
              "voters": 293
            }
          ],
          "NKEMLEKEU": [
            {
              "station": "LETHIAPANG EP / A",
              "voters": 269
            }
          ],
          "NWASSA'A": [
            {
              "station": "LETHIAPANG EP / A",
              "voters": 269
            }
          ],
          "TIKANG": [
            {
              "station": "LETHIAPANG EP / A",
              "voters": 293
            }
          ],
          "LOUNG": [
            {
              "station": "LOUNG EP / A",
              "voters": 308
            }
          ],
          "APOUH": [
            {
              "station": "LYCEE D'APOUH / A",
              "voters": 559
            }
          ],
          "LEWOE": [
            {
              "station": "LYCEE D'APOUH / A",
              "voters": 559
            }
          ],
          "NZO": [
            {
              "station": "LYCEE D'APOUH / A",
              "voters": 559
            }
          ],
          "NKOOH": [
            {
              "station": "LYCEE TECHNIQUE DE FONGO-TONGO / A",
              "voters": 39
            }
          ],
          "NTONCHIEU": [
            {
              "station": "LYCEE TECHNIQUE DE FONGO-TONGO / A",
              "voters": 39
            }
          ],
          "ZEMBOUA": [
            {
              "station": "LYCEE TECHNIQUE DE FONGO-TONGO / A",
              "voters": 39
            }
          ],
          "LEFOCK": [
            {
              "station": "MEGUEU EP / A",
              "voters": 298
            }
          ],
          "MEGUEU": [
            {
              "station": "MEGUEU EP / A",
              "voters": 298
            }
          ],
          "TSINGLAH": [
            {
              "station": "MEGUEU EP / A",
              "voters": 298
            }
          ],
          "LEKEUH-SA'A": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "LETHIOP": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MBEUH": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MBING": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MEKOUALE": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MENTSOK": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MEZOUE": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MINKA": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "NZENBAH": [
            {
              "station": "MEKOUALE EP / A",
              "voters": 588
            }
          ],
          "MEKEUH": [
            {
              "station": "MELANG EP / A",
              "voters": 432
            }
          ],
          "MELANG": [
            {
              "station": "MELANG EP / A",
              "voters": 432
            }
          ],
          "MESSONG": [
            {
              "station": "MELANG EP / A",
              "voters": 545
            }
          ],
          "NZONG": [
            {
              "station": "MELANG EP / A",
              "voters": 319
            }
          ],
          "(MELANG)": [
            {
              "station": "MELANG EP / A",
              "voters": 319
            }
          ],
          "TOUOLAH": [
            {
              "station": "MELANG EP / A",
              "voters": 319
            }
          ],
          "MBOUMOK": [
            {
              "station": "MENAH EP / A",
              "voters": 144
            }
          ],
          "MENAH": [
            {
              "station": "MENAH EP / A",
              "voters": 144
            }
          ],
          "NGANTEUH": [
            {
              "station": "MEZA EP / A",
              "voters": 335
            }
          ],
          "TCHOUANWA-FOGUENA": [
            {
              "station": "MEZA EP / A",
              "voters": 335
            }
          ],
          "TCHOUANWA-FOKA": [
            {
              "station": "MEZA EP / A",
              "voters": 335
            }
          ],
          "TCHOUANWA-MBANGNEK": [
            {
              "station": "MEZA EP / A",
              "voters": 335
            }
          ],
          "TSA'NWA": [
            {
              "station": "MEZA EP / A",
              "voters": 335
            }
          ],
          "NGUEN": [
            {
              "station": "NGUEN EP / A",
              "voters": 189
            }
          ],
          "NZON": [
            {
              "station": "NGUEN EP / A",
              "voters": 189
            }
          ],
          "(NGUEN)": [
            {
              "station": "NGUEN EP / A",
              "voters": 189
            }
          ],
          "THIE": [
            {
              "station": "NGUEN EP / A",
              "voters": 189
            }
          ],
          "LEKEUH-ZAH": [
            {
              "station": "NZIE-FODA POSTE AGRICOLE / A",
              "voters": 464
            }
          ],
          "MENLAH": [
            {
              "station": "NZIE-FODA POSTE AGRICOLE / A",
              "voters": 324
            }
          ],
          "NZIE-FODA": [
            {
              "station": "NZIE-FODA POSTE AGRICOLE / A",
              "voters": 519
            }
          ],
          "LENSAP": [
            {
              "station": "TSIEDONG EP / A",
              "voters": 207
            }
          ],
          "TSIEDONG": [
            {
              "station": "TSIEDONG EP / A",
              "voters": 207
            }
          ],
          "YAGUEM": [
            {
              "station": "YAGUEM EP / A",
              "voters": 417
            }
          ],
          "ZEMDA": [
            {
              "station": "YAGUEM EP / A",
              "voters": 468
            }
          ]
        },
        "NKONG-NI": {
          "LEKATCHOU": [
            {
              "station": "CEEBEC NZAH / A",
              "voters": 513
            }
          ],
          "LOUNG": [
            {
              "station": "CEEBEC NZAH / A",
              "voters": 1096
            }
          ],
          "NZEMTSAH": [
            {
              "station": "CEEBEC NZAH / A",
              "voters": 218
            }
          ],
          "K.LEFOC": [
            {
              "station": "CEEBEC NZAH / A",
              "voters": 218
            }
          ],
          "AGHON": [
            {
              "station": "COL. CHERE SABINA / A",
              "voters": 326
            }
          ],
          "FOGAH": [
            {
              "station": "COL. EVANG BALEVENG / A",
              "voters": 423
            }
          ],
          "LAATCHUET": [
            {
              "station": "COL. EVANG BALEVENG / A",
              "voters": 249
            }
          ],
          "LEFE": [
            {
              "station": "COL. ST LAURENT / A",
              "voters": 508
            }
          ],
          "Djili": [
            {
              "station": "COLLEGE PRIVE LAIC / A",
              "voters": 116
            }
          ],
          "BALEPOUO": [
            {
              "station": "EC BALEPOUO / A",
              "voters": 285
            }
          ],
          "KEKAN": [
            {
              "station": "EC BALEPOUO / A",
              "voters": 526
            }
          ],
          "MENLAH": [
            {
              "station": "EC BALEPOUO / A",
              "voters": 285
            }
          ],
          "BAMELIEU": [
            {
              "station": "EC BAMELIEU / A",
              "voters": 371
            }
          ],
          "ZEMLA": [
            {
              "station": "EC BAMELIEU / A",
              "voters": 947
            }
          ],
          "FOOLOH": [
            {
              "station": "EC FOMBET / A",
              "voters": 341
            }
          ],
          "MBETH": [
            {
              "station": "EC FOMBET / A",
              "voters": 341
            }
          ],
          "SOH": [
            {
              "station": "EC FOMBET / A",
              "voters": 942
            }
          ],
          "BASSESSA": [
            {
              "station": "EC FOTSA / A",
              "voters": 381
            }
          ],
          "FOTSA": [
            {
              "station": "EC FOTSA / A",
              "voters": 381
            }
          ],
          "DJIO": [
            {
              "station": "EC NKOHO / A",
              "voters": 922
            }
          ],
          "NKOHO": [
            {
              "station": "EC NKOHO / A",
              "voters": 409
            }
          ],
          "SUELEN": [
            {
              "station": "EC ST LOUIS / A",
              "voters": 156
            }
          ],
          "BAGHA": [
            {
              "station": "EC ST THOMAS / A",
              "voters": 210
            }
          ],
          "KELENG": [
            {
              "station": "EC ST THOMAS / A",
              "voters": 210
            }
          ],
          "BAFOU": [
            {
              "station": "EM BAFOU CHEFFERIE / A",
              "voters": 1274
            }
          ],
          "CHEFFERIE": [
            {
              "station": "EM BAFOU CHEFFERIE / A",
              "voters": 865
            }
          ],
          "BALEKOUET": [
            {
              "station": "EM BALEKOUET / A",
              "voters": 85
            }
          ],
          "TEKAN": [
            {
              "station": "EM BALEKOUET / A",
              "voters": 85
            }
          ],
          "LOH": [
            {
              "station": "EM LOH KEMZI / A",
              "voters": 148
            }
          ],
          "KEMZI": [
            {
              "station": "EM LOH KEMZI / A",
              "voters": 148
            }
          ],
          "Lingang": [
            {
              "station": "EM Lingang / A",
              "voters": 173
            }
          ],
          "MEGUIM": [
            {
              "station": "EM MEGUIM / A",
              "voters": 179
            }
          ],
          "NZUNLA": [
            {
              "station": "EM MEGUIM / A",
              "voters": 179
            }
          ],
          "NDOH": [
            {
              "station": "EM NDOH / A",
              "voters": 746
            }
          ],
          "TALLE": [
            {
              "station": "EM NDOH / A",
              "voters": 865
            }
          ],
          "AGANG": [
            {
              "station": "EP AGANG / A",
              "voters": 211
            }
          ],
          "AGHONG": [
            {
              "station": "EP AGHONG / A",
              "voters": 57
            }
          ],
          "MEGHONG": [
            {
              "station": "EP BAFOU BASSESSA / A",
              "voters": 573
            }
          ],
          "MVOUH": [
            {
              "station": "EP BAFOU BASSESSA / A",
              "voters": 169
            }
          ],
          "NTSAH": [
            {
              "station": "EP BAFOU CARREFOUR / A",
              "voters": 243
            }
          ],
          "TSINGBEU": [
            {
              "station": "EP BAFOU CHEFFERIE / A",
              "voters": 457
            }
          ],
          "BAGHONTO": [
            {
              "station": "EP BAGHONTO / A",
              "voters": 130
            }
          ],
          "BALENG": [
            {
              "station": "EP BALENG / A",
              "voters": 328
            }
          ],
          "TOULEVENG": [
            {
              "station": "EP BALEVENG CTRE / A",
              "voters": 568
            }
          ],
          "SUELA": [
            {
              "station": "EP BATSINGLA / A",
              "voters": 289
            }
          ],
          "BATSINGLA": [
            {
              "station": "EP BATSINGLA / A",
              "voters": 289
            }
          ],
          "BATSINGTO": [
            {
              "station": "EP BATSINGTO / A",
              "voters": 241
            }
          ],
          "BAWOUWOUA": [
            {
              "station": "EP BAWOUWOUA / A",
              "voters": 112
            }
          ],
          "NKONGZEM": [
            {
              "station": "EP BAZEM / A",
              "voters": 290
            }
          ],
          "MBIH": [
            {
              "station": "EP DJO MOCK / A",
              "voters": 397
            }
          ],
          "MELEKOUET": [
            {
              "station": "EP DJO MOCK / A",
              "voters": 397
            }
          ],
          "DJUTTITSA": [
            {
              "station": "EP DJUTTITSA / A",
              "voters": 483
            }
          ],
          "MELOUNG": [
            {
              "station": "EP DJUTTITSA / A",
              "voters": 483
            }
          ],
          "SUADEM": [
            {
              "station": "EP DJUTTITSA / A",
              "voters": 483
            }
          ],
          "DOUMBOUO": [
            {
              "station": "EP DOUMBOUO / A",
              "voters": 264
            }
          ],
          "NZENBING": [
            {
              "station": "EP DOUMBOUO / A",
              "voters": 264
            }
          ],
          "DZINKOP": [
            {
              "station": "EP DZINKOP / A",
              "voters": 645
            }
          ],
          "LAACHUE": [
            {
              "station": "EP DZINKOP / A",
              "voters": 565
            }
          ],
          "DZI": [
            {
              "station": "EP DZINNOH / A",
              "voters": 193
            }
          ],
          "NNOH": [
            {
              "station": "EP DZINNOH / A",
              "voters": 193
            }
          ],
          "FEUMOCK": [
            {
              "station": "EP FEUMOCK / A",
              "voters": 312
            }
          ],
          "FODZONG": [
            {
              "station": "EP FODZONG / A",
              "voters": 364
            }
          ],
          "METSOP": [
            {
              "station": "EP FODZONG / A",
              "voters": 364
            }
          ],
          "FOKAMEZO": [
            {
              "station": "EP FOKAMEZO / A",
              "voters": 271
            }
          ],
          "FOLEWI": [
            {
              "station": "EP FOLEWI / A",
              "voters": 683
            }
          ],
          "LETSIET": [
            {
              "station": "EP FOLEWI / A",
              "voters": 683
            }
          ],
          "TOUOZONG": [
            {
              "station": "EP FOLEWI / A",
              "voters": 683
            }
          ],
          "KAMNICK": [
            {
              "station": "EP KAMNICK / A",
              "voters": 198
            }
          ],
          "LEPE": [
            {
              "station": "EP LEPE / A",
              "voters": 210
            }
          ],
          "MENTSI": [
            {
              "station": "EP LEPE / A",
              "voters": 488
            }
          ],
          "LEPOH": [
            {
              "station": "EP LEPOH / A",
              "voters": 264
            }
          ],
          "LIE-YAGUEM": [
            {
              "station": "EP LIAGUEM / A",
              "voters": 127
            }
          ],
          "MBENG": [
            {
              "station": "EP MBENG / A",
              "voters": 560
            }
          ],
          "MBOUH": [
            {
              "station": "EP MBOUH / A",
              "voters": 201
            }
          ],
          "NKONMBOUH": [
            {
              "station": "EP MBOUH / A",
              "voters": 769
            }
          ],
          "NZENLEKOUET": [
            {
              "station": "EP MBOUH / A",
              "voters": 201
            }
          ],
          "MEKONG": [
            {
              "station": "EP MEKONG / A",
              "voters": 146
            }
          ],
          "Mengne": [
            {
              "station": "EP MENGNE / A",
              "voters": 116
            }
          ],
          "Ngnweh": [
            {
              "station": "EP MENGNE / A",
              "voters": 116
            }
          ],
          "Tekang-Kemgue": [
            {
              "station": "EP MENGNE / A",
              "voters": 116
            }
          ],
          "Zem-Tekang": [
            {
              "station": "EP MENGNE / A",
              "voters": 116
            }
          ],
          "METSAH": [
            {
              "station": "EP METSAH / A",
              "voters": 139
            }
          ],
          "MEKOUH": [
            {
              "station": "EP MEZET / A",
              "voters": 386
            }
          ],
          "MEZET": [
            {
              "station": "EP MEZET / A",
              "voters": 386
            }
          ],
          "NDOMETSANG": [
            {
              "station": "EP NDOMETSANG / A",
              "voters": 148
            }
          ],
          "NKONTO": [
            {
              "station": "EP NZEMTO / A",
              "voters": 147
            }
          ],
          "ZEMTO": [
            {
              "station": "EP NZEMTO / A",
              "voters": 147
            }
          ],
          "NZIEFENG": [
            {
              "station": "EP NZIEFENG / A",
              "voters": 334
            }
          ],
          "SESSA": [
            {
              "station": "EP POUDZANG / A",
              "voters": 89
            }
          ],
          "POUDZANG": [
            {
              "station": "EP POUDZANG / A",
              "voters": 89
            }
          ],
          "SAA": [
            {
              "station": "EP SAA-NDOH / A",
              "voters": 274
            }
          ],
          "SAAH": [
            {
              "station": "EP SAAH / A",
              "voters": 618
            }
          ],
          "TSINSAAH": [
            {
              "station": "EP SAAH / A",
              "voters": 290
            }
          ],
          "LEPAN": [
            {
              "station": "EP SUEFFENG / A",
              "voters": 391
            }
          ],
          "NZIE": [
            {
              "station": "EP SUEFFENG / A",
              "voters": 391
            }
          ],
          "TCHOUTSI": [
            {
              "station": "EP TCHOUTSI / A",
              "voters": 763
            }
          ],
          "TCHUEZA": [
            {
              "station": "EP TCHUEZA / A",
              "voters": 328
            }
          ],
          "FOZOH": [
            {
              "station": "EP TSOMBING / A",
              "voters": 605
            }
          ],
          "MELIO": [
            {
              "station": "EP TSOMBING / A",
              "voters": 605
            }
          ],
          "NFENG": [
            {
              "station": "EP TSOMBING / A",
              "voters": 605
            }
          ],
          "ZEM": [
            {
              "station": "EP ZEM BALEVENG / A",
              "voters": 252
            }
          ],
          "BALEVENG": [
            {
              "station": "EP ZEM BALEVENG / A",
              "voters": 252
            }
          ],
          "BALETSI": [
            {
              "station": "FOYER BALETSI / A",
              "voters": 260
            }
          ],
          "BANZA": [
            {
              "station": "FOYER BANZA / A",
              "voters": 350
            }
          ],
          "CTE": [
            {
              "station": "FOYER CDC / A",
              "voters": 343
            }
          ],
          "SAAKIA": [
            {
              "station": "FOYER CDC / A",
              "voters": 343
            }
          ],
          "MEKANG": [
            {
              "station": "FOYER EV. BALEVENG / A",
              "voters": 174
            }
          ],
          "MELIA": [
            {
              "station": "FOYER MELIA / A",
              "voters": 260
            }
          ],
          "NGUI": [
            {
              "station": "FOYER NGUI / A",
              "voters": 325
            }
          ],
          "CENTRE": [
            {
              "station": "IAEB NKONG-NI / A",
              "voters": 1086
            }
          ],
          "ADM": [
            {
              "station": "IAEB NKONG-NI / A",
              "voters": 815
            }
          ],
          "MENGOO": [
            {
              "station": "LT BALEVENG / A",
              "voters": 404
            }
          ],
          "KIAGNI": [
            {
              "station": "LT BALEVENG / A",
              "voters": 404
            }
          ],
          "MIATCHUET-LYCEE": [
            {
              "station": "LYCEE BAFOU / A",
              "voters": 343
            }
          ],
          "BALETET": [
            {
              "station": "LYCEE BAFOU SUD / A",
              "voters": 184
            }
          ],
          "LEPIA,MEYA": [
            {
              "station": "POSTE AGRICOLE MEYA / A",
              "voters": 328
            }
          ]
        },
        "PENKA-MICHEL": {
          "BAFOMSO": [
            {
              "station": "C.M.A BANSOA KING-PLACE / A",
              "voters": 350
            }
          ],
          "LEH": [
            {
              "station": "C.S.I BAMENDOU CHEFFERIE / A",
              "voters": 382
            }
          ],
          "MINKOP": [
            {
              "station": "C.S.I BAMENDOU CHEFFERIE / A",
              "voters": 382
            }
          ],
          "TOULEKOUET": [
            {
              "station": "C.S.I BAMENDOU CHEFFERIE / A",
              "voters": 382
            }
          ],
          "LEWOU": [
            {
              "station": "CENTRE DE SANTE DE BAMENDOU-LEO / A",
              "voters": 208
            }
          ],
          "BAWANG": [
            {
              "station": "CENTRE DE SANTE FOLAFIE / A",
              "voters": 939
            }
          ],
          "HOPITAL": [
            {
              "station": "CENTRE MULTIMEDIA DE PENKA MICHEL / A",
              "voters": 395
            }
          ],
          "NGOUANG": [
            {
              "station": "CES BILINGUE DE NGOUANG / A",
              "voters": 282
            }
          ],
          "TAMI": [
            {
              "station": "CES BILINGUE DE NGOUANG / A",
              "voters": 564
            }
          ],
          "BAMENDOU": [
            {
              "station": "CETIC BAMENDOU KING-PLACE / A",
              "voters": 565
            }
          ],
          "BANETSINTSIT": [
            {
              "station": "COLLEGE POLYVALENT DE BANEGHANG / A",
              "voters": 261
            }
          ],
          "NTONE": [
            {
              "station": "COLLEGE SAINT DOMINIQUE NDOUNKE / A",
              "voters": 195
            }
          ],
          "TSIMILLA": [
            {
              "station": "COLLEGE SAINT DOMINIQUE NDOUNKE / A",
              "voters": 195
            }
          ],
          "FOYER": [
            {
              "station": "COOPERATIVE BATOULA / A",
              "voters": 388
            }
          ],
          "NYLON": [
            {
              "station": "DELEGATION D'ARR. AGRICULTURE / A",
              "voters": 772
            }
          ],
          "LAFEU": [
            {
              "station": "E.P. BILINGUE DE TOUSSANG / A",
              "voters": 346
            }
          ],
          "TOUSSANG": [
            {
              "station": "E.P. BILINGUE DE TOUSSANG / A",
              "voters": 346
            }
          ],
          "BADJONG": [
            {
              "station": "E.P. DE BADJONG / A",
              "voters": 4872
            }
          ],
          "MELABONG": [
            {
              "station": "E.P. DE TCHUEZA / A",
              "voters": 274
            }
          ],
          "TCHUEDEU": [
            {
              "station": "E.P. DE TCHUEZA / A",
              "voters": 274
            }
          ],
          "BALLESING": [
            {
              "station": "E.P. GROUPE III BALESSING / A",
              "voters": 319
            }
          ],
          "BAKASSA": [
            {
              "station": "EC BAKASSA / A",
              "voters": 984
            }
          ],
          "MELIO": [
            {
              "station": "EC BAMENDOU POPING / A",
              "voters": 717
            }
          ],
          "POPING": [
            {
              "station": "EC BAMENDOU POPING / A",
              "voters": 416
            }
          ],
          "ZEMEVOU": [
            {
              "station": "EC BAMENDOU-LEO / A",
              "voters": 158
            }
          ],
          "BAMETSAM": [
            {
              "station": "EC BAMETSAM / A",
              "voters": 1037
            }
          ],
          "BAGHAM": [
            {
              "station": "EC BANDJA / A",
              "voters": 697
            }
          ],
          "BANDJA": [
            {
              "station": "EC BANDJA / A",
              "voters": 697
            }
          ],
          "BAWASSA": [
            {
              "station": "EC BANDJA / A",
              "voters": 697
            }
          ],
          "BAWONFAM": [
            {
              "station": "EC BANDJA / A",
              "voters": 697
            }
          ],
          "PENCHIE": [
            {
              "station": "EC BANDJA / A",
              "voters": 697
            }
          ],
          "BATEU": [
            {
              "station": "EC BANEGHANG / A",
              "voters": 533
            }
          ],
          "BAFEMBE": [
            {
              "station": "EC BASSOSSIA / A",
              "voters": 346
            }
          ],
          "BATOUSSO": [
            {
              "station": "EC BASSOSSIA / A",
              "voters": 173
            }
          ],
          "NGEUFEMBE": [
            {
              "station": "EC BASSOSSIA / A",
              "voters": 173
            }
          ],
          "LEFETSA": [
            {
              "station": "EC MEGHO / A",
              "voters": 263
            }
          ],
          "MEGHO": [
            {
              "station": "EC MEGHO / A",
              "voters": 263
            }
          ],
          "MENAH": [
            {
              "station": "EC MEGHO / A",
              "voters": 263
            }
          ],
          "BAMEKEU": [
            {
              "station": "EC NDOUNKE / A",
              "voters": 173
            }
          ],
          "BATSILE": [
            {
              "station": "EC NDOUNKE / A",
              "voters": 173
            }
          ],
          "MILLA": [
            {
              "station": "EC NDOUNKE / A",
              "voters": 582
            }
          ],
          "NDOUNKE": [
            {
              "station": "EC NDOUNKE / A",
              "voters": 173
            }
          ],
          "TSILA": [
            {
              "station": "EC NDOUNKE / A",
              "voters": 299
            }
          ],
          "I,BATENG": [
            {
              "station": "ECOLE CATHOLIQUE BATENG / A",
              "voters": 165
            }
          ],
          "BALATSIT-HETT": [
            {
              "station": "ECOLE CEBEC BALATSIT / A",
              "voters": 321
            }
          ],
          "BALATSIT-TCHO": [
            {
              "station": "ECOLE CEBEC BALATSIT / A",
              "voters": 321
            }
          ],
          "BAMEWACK": [
            {
              "station": "ECOLE CEBEC BAMEWACK / A",
              "voters": 235
            }
          ],
          "BATOULETENG": [
            {
              "station": "ECOLE CEBEC BAMEWACK / A",
              "voters": 235
            }
          ],
          "BATCHIE": [
            {
              "station": "ECOLE CEBEC BATCHIE / A",
              "voters": 428
            }
          ],
          "MUKIE": [
            {
              "station": "ECOLE CEBEC BATCHIE / A",
              "voters": 428
            }
          ],
          "BALI": [
            {
              "station": "ECOLE CEBEC BAWOUANG / A",
              "voters": 367
            }
          ],
          "BAMEDOU": [
            {
              "station": "ECOLE CEBEC BAWOUANG / A",
              "voters": 367
            }
          ],
          "BAWOUANG": [
            {
              "station": "ECOLE CEBEC BAWOUANG / A",
              "voters": 367
            }
          ],
          "LATCHUET": [
            {
              "station": "ECOLE CEBEC MOLEPEU / A",
              "voters": 344
            }
          ],
          "MOLEPEU": [
            {
              "station": "ECOLE CEBEC MOLEPEU / A",
              "voters": 344
            }
          ],
          "TAGAH": [
            {
              "station": "ECOLE CEBEC MOLEPEU / A",
              "voters": 344
            }
          ],
          "TOUKO'O": [
            {
              "station": "ECOLE CEBEC TANG / A",
              "voters": 246
            }
          ],
          "ZENTO": [
            {
              "station": "ECOLE CEBEC TANG / A",
              "voters": 246
            }
          ],
          "ZENTO-": [
            {
              "station": "ECOLE CEBEC TANG / A",
              "voters": 246
            }
          ],
          "ZEMLA": [
            {
              "station": "ECOLE CEBEC TANG / A",
              "voters": 246
            }
          ],
          "MEKOO": [
            {
              "station": "ECOLE MATERNELLE MEKOO / A",
              "voters": 278
            }
          ],
          "NEMBOUO-I,NEMBOUO-II,NGUIM,MBIKENG": [
            {
              "station": "ECOLE MATERNELLE NEMBOUO / A",
              "voters": 351
            }
          ],
          "BADJEGHANG": [
            {
              "station": "EP BADJEGHANG / A",
              "voters": 1636
            }
          ],
          "III": [
            {
              "station": "EP BADJEGHANG / A",
              "voters": 4265
            }
          ],
          "BAKE": [
            {
              "station": "EP BAKE / A",
              "voters": 771
            }
          ],
          "BAKENG": [
            {
              "station": "EP BAKENG / A",
              "voters": 344
            }
          ],
          "BALATSIT": [
            {
              "station": "EP BALATSIT / A",
              "voters": 1036
            }
          ],
          "EWOUE": [
            {
              "station": "EP BALATSIT / A",
              "voters": 250
            }
          ],
          "TCHIEU": [
            {
              "station": "EP BALATSIT / A",
              "voters": 250
            }
          ],
          "BALEPIPI": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1366
            }
          ],
          "BALEPOU": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 2642
            }
          ],
          "BAMEKA": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1601
            }
          ],
          "BAMEKIE": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1321
            }
          ],
          "BAMETA": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1685
            }
          ],
          "BATENG": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1861
            }
          ],
          "BATOULA": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1902
            }
          ],
          "BALESSING": [
            {
              "station": "EP BALEPIPI / A",
              "voters": 1685
            }
          ],
          "BALETSI": [
            {
              "station": "EP BALETSI II / A",
              "voters": 874
            }
          ],
          "BALATSET": [
            {
              "station": "EP BALOUM CENTRE / A",
              "voters": 344
            }
          ],
          "TOUTSET": [
            {
              "station": "EP BALOUM CENTRE / A",
              "voters": 344
            }
          ],
          "ZEMYA": [
            {
              "station": "EP BALOUM CENTRE / A",
              "voters": 344
            }
          ],
          "BALESSING-TCHUET": [
            {
              "station": "EP BAMBI / A",
              "voters": 195
            }
          ],
          "BATSIMBI": [
            {
              "station": "EP BAMBI / A",
              "voters": 195
            }
          ],
          "LEGHONG": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "LEM": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "LEO": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "NEMBOUO": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 880
            }
          ],
          "NGUIM": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "TCHO": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "TEMTE": [
            {
              "station": "EP BAMENDOU CHEFFERIE / A",
              "voters": 440
            }
          ],
          "KOAGOH": [
            {
              "station": "EP BAMENDOU KOAGOH / A",
              "voters": 292
            }
          ],
          "MBINKENG": [
            {
              "station": "EP BAMENDOU KOAGOH / A",
              "voters": 292
            }
          ],
          "MEKO'O": [
            {
              "station": "EP BAMENDOU KOAGOH / A",
              "voters": 636
            }
          ],
          "TCHUEFFI": [
            {
              "station": "EP BAMENDOU KOAGOH / A",
              "voters": 292
            }
          ],
          "BAMOUP": [
            {
              "station": "EP BANGOUO / A",
              "voters": 195
            }
          ],
          "BANGOUO": [
            {
              "station": "EP BANGOUO / A",
              "voters": 195
            }
          ],
          "BANI": [
            {
              "station": "EP BANI / A",
              "voters": 229
            }
          ],
          "BIMEGOU": [
            {
              "station": "EP BANI / A",
              "voters": 229
            }
          ],
          "BORORO": [
            {
              "station": "EP BANI / A",
              "voters": 229
            }
          ],
          "BANOCK": [
            {
              "station": "EP BANOCK / A",
              "voters": 341
            }
          ],
          "BANANG": [
            {
              "station": "EP BASSOKENG / A",
              "voters": 308
            }
          ],
          "BASSOKENG": [
            {
              "station": "EP BASSOKENG / A",
              "voters": 308
            }
          ],
          "BAGHANG": [
            {
              "station": "EP BASSOSSIA / A",
              "voters": 640
            }
          ],
          "BASSOSSIA": [
            {
              "station": "EP BASSOSSIA / A",
              "voters": 640
            }
          ],
          "BAFEMKOUO": [
            {
              "station": "EP BATCHEU / A",
              "voters": 317
            }
          ],
          "BANEGHANG": [
            {
              "station": "EP BATCHEU / A",
              "voters": 1644
            }
          ],
          "BANEPIE": [
            {
              "station": "EP BATCHEU / A",
              "voters": 634
            }
          ],
          "BATCHEU": [
            {
              "station": "EP BATCHEU / A",
              "voters": 634
            }
          ],
          "BASSAP": [
            {
              "station": "EP BATOLAFIE/POASSAP / A",
              "voters": 267
            }
          ],
          "BATOLAFIE": [
            {
              "station": "EP BATOLAFIE/POASSAP / A",
              "voters": 534
            }
          ],
          "BATOTCHA": [
            {
              "station": "EP BATOTCHA II / A",
              "voters": 939
            }
          ],
          "BAKOUA": [
            {
              "station": "EP BAWONG / A",
              "voters": 382
            }
          ],
          "BAMANG": [
            {
              "station": "EP BAWONG / A",
              "voters": 382
            }
          ],
          "BAWONG": [
            {
              "station": "EP BAWONG / A",
              "voters": 382
            }
          ],
          "BALENA": [
            {
              "station": "EP BAZINZA / A",
              "voters": 449
            }
          ],
          "BALOUM": [
            {
              "station": "EP BAZINZA / A",
              "voters": 607
            }
          ],
          "BAMBING": [
            {
              "station": "EP BAZINZA / A",
              "voters": 449
            }
          ],
          "BATCHOUWOUA": [
            {
              "station": "EP BAZINZA / A",
              "voters": 449
            }
          ],
          "BAZINZA": [
            {
              "station": "EP BAZINZA / A",
              "voters": 449
            }
          ],
          "DEDENG": [
            {
              "station": "EP DEDENG / A",
              "voters": 186
            }
          ],
          "DOUTSET-SANG": [
            {
              "station": "EP DOUTSET / A",
              "voters": 65
            }
          ],
          "BAWONWOUA": [
            {
              "station": "EP GROUPE I BALESSING / A",
              "voters": 744
            }
          ],
          "BADJOUWOUO": [
            {
              "station": "EP GROUPE I BANSOA KING-PLACE / A",
              "voters": 1694
            }
          ],
          "BAMESSEU": [
            {
              "station": "EP GROUPE I BANSOA KING-PLACE / A",
              "voters": 1694
            }
          ],
          "BATCHANG": [
            {
              "station": "EP GROUPE I BANSOA KING-PLACE / A",
              "voters": 1490
            }
          ],
          "HIELA": [
            {
              "station": "EP GROUPE I BANSOA KING-PLACE / A",
              "voters": 847
            }
          ],
          "KING-PLACE": [
            {
              "station": "EP GROUPE I BANSOA KING-PLACE / A",
              "voters": 2882
            }
          ],
          "BASTOS": [
            {
              "station": "EP GROUPE I CENTRE URBAIN / A",
              "voters": 497
            }
          ],
          "HAUT-TAMI": [
            {
              "station": "EP GROUPE I CENTRE URBAIN / A",
              "voters": 497
            }
          ],
          "MADAGASCAR": [
            {
              "station": "EP GROUPE I CENTRE URBAIN / A",
              "voters": 497
            }
          ],
          "NEW-BELL": [
            {
              "station": "EP GROUPE I CENTRE URBAIN / A",
              "voters": 497
            }
          ],
          "PLATEAU": [
            {
              "station": "EP GROUPE I CENTRE URBAIN / A",
              "voters": 1265
            }
          ],
          "BAGATCHEU": [
            {
              "station": "EP GROUPE II BALESSING / A",
              "voters": 445
            }
          ],
          "BASSO": [
            {
              "station": "EP GROUPE II BALESSING / A",
              "voters": 445
            }
          ],
          "BATOUGOUNG": [
            {
              "station": "EP GROUPE II BALESSING / A",
              "voters": 445
            }
          ],
          "BADJULAH": [
            {
              "station": "EP GROUPE II BANSOA-BADJULAH / A",
              "voters": 1044
            }
          ],
          "BAHOU": [
            {
              "station": "EP GROUPE II BANSOA-BADJULAH / A",
              "voters": 522
            }
          ],
          "DEDEU": [
            {
              "station": "EP GROUPE II BANSOA-BADJULAH / A",
              "voters": 522
            }
          ],
          "DJEUYA": [
            {
              "station": "EP GROUPE II BANSOA-BADJULAH / A",
              "voters": 522
            }
          ],
          "TCHOUMNEKEU": [
            {
              "station": "EP GROUPE II BANSOA-BADJULAH / A",
              "voters": 1044
            }
          ],
          "LAC": [
            {
              "station": "EP GROUPE II CENTRE URBAIN / A",
              "voters": 768
            }
          ],
          "PENKOUE": [
            {
              "station": "EP GROUPE II CENTRE URBAIN / A",
              "voters": 768
            }
          ],
          "WOPOUO": [
            {
              "station": "EP LEO / A",
              "voters": 203
            }
          ],
          "TERGAL": [
            {
              "station": "EP MATERNELLE CENTRE URBAIN / A",
              "voters": 337
            }
          ],
          "MELAH": [
            {
              "station": "EP MELAH / A",
              "voters": 284
            }
          ],
          "TSANG": [
            {
              "station": "EP MELAH / A",
              "voters": 852
            }
          ],
          "TSENNANG": [
            {
              "station": "EP MESSING / A",
              "voters": 210
            }
          ],
          "MEGHA": [
            {
              "station": "EP METCHOU / A",
              "voters": 304
            }
          ],
          "METCHOU": [
            {
              "station": "EP METCHOU / A",
              "voters": 796
            }
          ],
          "PETSISANG": [
            {
              "station": "EP MILLA / A",
              "voters": 214
            }
          ],
          "MEKIA": [
            {
              "station": "EP MINDEM / A",
              "voters": 168
            }
          ],
          "SESSA": [
            {
              "station": "EP MINDEM / A",
              "voters": 168
            }
          ],
          "MEPENG": [
            {
              "station": "EP NGUIMETO / A",
              "voters": 179
            }
          ],
          "NGUIMETO": [
            {
              "station": "EP NGUIMETO / A",
              "voters": 179
            }
          ],
          "NKOTSA": [
            {
              "station": "EP NKOTSA / A",
              "voters": 509
            }
          ],
          "TAPEU": [
            {
              "station": "EP NKOTSA / A",
              "voters": 509
            }
          ],
          "TOUZAH": [
            {
              "station": "EP NKOTSA / A",
              "voters": 509
            }
          ],
          "TSAH": [
            {
              "station": "EP NKOTSA / A",
              "voters": 509
            }
          ],
          "TSINFOU": [
            {
              "station": "EP NKOTSA / A",
              "voters": 509
            }
          ],
          "ZINMEKONG": [
            {
              "station": "EP NKOTSA / A",
              "voters": 648
            }
          ],
          "PANNI": [
            {
              "station": "EP PANNI / A",
              "voters": 223
            }
          ],
          "SANG": [
            {
              "station": "EP SANG / A",
              "voters": 636
            }
          ],
          "SONKENG": [
            {
              "station": "EP SONKENG / A",
              "voters": 81
            }
          ],
          "LEKOUET": [
            {
              "station": "EP TALE / A",
              "voters": 345
            }
          ],
          "MENTSA": [
            {
              "station": "EP TALE / A",
              "voters": 473
            }
          ],
          "TALE": [
            {
              "station": "EP TALE / A",
              "voters": 345
            }
          ],
          "TOUDJOUA": [
            {
              "station": "EP TOUDJOUA / A",
              "voters": 89
            }
          ],
          "ZINMET": [
            {
              "station": "EP TOUDJOUA / A",
              "voters": 89
            }
          ],
          "ANNOCK": [
            {
              "station": "FOYER ANNOCK / A",
              "voters": 172
            }
          ],
          "BALEFOCK": [
            {
              "station": "FOYER BALEFOCK / A",
              "voters": 311
            }
          ],
          "MEKAH": [
            {
              "station": "FOYER BANI / A",
              "voters": 126
            }
          ],
          "PETSEM": [
            {
              "station": "FOYER BANI / A",
              "voters": 126
            }
          ],
          "MBOUO": [
            {
              "station": "FOYER MBOUO / A",
              "voters": 499
            }
          ],
          "NGUI": [
            {
              "station": "FOYER MBOUO / A",
              "voters": 499
            }
          ],
          "DJOUA": [
            {
              "station": "FOYER MESSING / A",
              "voters": 385
            }
          ],
          "MESSING": [
            {
              "station": "FOYER MESSING / A",
              "voters": 664
            }
          ],
          "LONAKO": [
            {
              "station": "INSPECT. D'ARROND. DE L'EDU. DE BASE / A",
              "voters": 482
            }
          ],
          "BATOUMBI": [
            {
              "station": "LYCEE BAMBI / A",
              "voters": 507
            }
          ],
          "BATCHUFRET": [
            {
              "station": "LYCEE BANSOA-MBRI / A",
              "voters": 762
            }
          ],
          "DJUKOP": [
            {
              "station": "LYCEE BANSOA-MBRI / A",
              "voters": 381
            }
          ],
          "MBRI": [
            {
              "station": "LYCEE BANSOA-MBRI / A",
              "voters": 381
            }
          ],
          "BALATSI": [
            {
              "station": "LYCEE DE BAKASSA / A",
              "voters": 411
            }
          ],
          "BALATSITSOO": [
            {
              "station": "LYCEE DE BAKASSA / A",
              "voters": 411
            }
          ],
          "SOO": [
            {
              "station": "LYCEE DE BAKASSA / A",
              "voters": 411
            }
          ],
          "BALEFET": [
            {
              "station": "POSTE AGRICOLE DE BALESSING / A",
              "voters": 329
            }
          ],
          "BAMETCHO": [
            {
              "station": "POSTE AGRICOLE DE BALESSING / A",
              "voters": 329
            }
          ],
          "TSALLA": [
            {
              "station": "POSTE AGRICOLE DE BALESSING / A",
              "voters": 658
            }
          ]
        },
        "SANTCHOU": {
          "NTEINGUE": [
            {
              "station": "CAPLAME NTEINGUE / A",
              "voters": 392
            }
          ],
          "MIENDAP_RELOCALISE": [
            {
              "station": "CAPLAME NTEINGUE / A",
              "voters": 33
            }
          ],
          "MOGOT": [
            {
              "station": "CASE CHEFFERIE MOGOT / A",
              "voters": 133
            }
          ],
          "FIALA-FOMBAP": [
            {
              "station": "CEBEC FOMBAP / A",
              "voters": 725
            }
          ],
          "FOMBAP": [
            {
              "station": "CEBEC FOMBAP / A",
              "voters": 1326
            }
          ],
          "AFEEH": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "AKO": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "KOUA": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "LEFOCK": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "NDA": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "NZECLAH": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 494
            }
          ],
          "SITEU": [
            {
              "station": "CES BILINGUE NKA / A",
              "voters": 318
            }
          ],
          "FONGUETAFOU": [
            {
              "station": "CES DE FONGUETAFOU ECHIOCK / A",
              "voters": 286
            }
          ],
          "MIENDAP,NTISSAH": [
            {
              "station": "COOPERATIVE NTEINGUE / A",
              "voters": 226
            }
          ],
          "ECHIOCK-MOKELEWOUM": [
            {
              "station": "EC ECHIOCK / A",
              "voters": 254
            }
          ],
          "MBONGO": [
            {
              "station": "EC FOMBAP / A",
              "voters": 261
            }
          ],
          "TSALA": [
            {
              "station": "EC FOMBAP / A",
              "voters": 261
            }
          ],
          "LETOP": [
            {
              "station": "EC FONDONERA / A",
              "voters": 176
            }
          ],
          "NZINGLA": [
            {
              "station": "EC FONDONERA / A",
              "voters": 176
            }
          ],
          "ETAM-MBEUH": [
            {
              "station": "EC SANTCHOU / A",
              "voters": 842
            }
          ],
          "FONGWANG": [
            {
              "station": "EC SANTCHOU / A",
              "voters": 842
            }
          ],
          "NGWAGNIA": [
            {
              "station": "EC SANTCHOU / A",
              "voters": 1418
            }
          ],
          "SEKOU": [
            {
              "station": "EC SANTCHOU / A",
              "voters": 842
            }
          ],
          "BALE": [
            {
              "station": "EP BALE / A",
              "voters": 505
            }
          ],
          "BAMIA": [
            {
              "station": "EP BAMIA / A",
              "voters": 249
            }
          ],
          "BEBONG": [
            {
              "station": "EP BEBONG / A",
              "voters": 286
            }
          ],
          "NCHOUCHOU": [
            {
              "station": "EP BEBONG / A",
              "voters": 286
            }
          ],
          "MOGONGAH": [
            {
              "station": "EP ECHIOCK / A",
              "voters": 247
            }
          ],
          "FOMBAP-": [
            {
              "station": "EP FOMBAP / A",
              "voters": 595
            }
          ],
          "LEZAP": [
            {
              "station": "EP FOMBAP / A",
              "voters": 595
            }
          ],
          "LESAP": [
            {
              "station": "EP FOMBAP / A",
              "voters": 595
            }
          ],
          "MBOKOU": [
            {
              "station": "EP MBOKOU / A",
              "voters": 86
            }
          ],
          "MBOUKOK": [
            {
              "station": "EP MBOUKOK / A",
              "voters": 321
            }
          ],
          "MEKET": [
            {
              "station": "EP MEKET / A",
              "voters": 116
            }
          ],
          "MELA": [
            {
              "station": "EP MELA / A",
              "voters": 153
            }
          ],
          "MELEU": [
            {
              "station": "EP MELEU / A",
              "voters": 184
            }
          ],
          "BALE-MOKELEWOUM": [
            {
              "station": "EP MOKELEWOUM / A",
              "voters": 184
            }
          ],
          "MOKELEWOUM": [
            {
              "station": "EP MOKELEWOUM / A",
              "voters": 184
            }
          ],
          "MOKOT": [
            {
              "station": "EP MOKOT / A",
              "voters": 246
            }
          ],
          "NDEN-EFOUNGOUO": [
            {
              "station": "EP NDEN-EFOUNGOUO / A",
              "voters": 441
            }
          ],
          "NDEN-MANTOCK": [
            {
              "station": "EP NDEN-MANTOCK / A",
              "voters": 83
            }
          ],
          "NFONTSAM": [
            {
              "station": "EP NFONTSAM / A",
              "voters": 239
            }
          ],
          "NGUIANGO": [
            {
              "station": "EP NGUIANGO / A",
              "voters": 535
            }
          ],
          "NZIE": [
            {
              "station": "EP NGUIANGO / A",
              "voters": 535
            }
          ],
          "NZONG": [
            {
              "station": "EP NGUIANGO / A",
              "voters": 535
            }
          ],
          "BETONN": [
            {
              "station": "EP NJINJANG / A",
              "voters": 201
            }
          ],
          "NJINJANG": [
            {
              "station": "EP NJINJANG / A",
              "voters": 201
            }
          ],
          "ALACHUET": [
            {
              "station": "EP NKA / A",
              "voters": 287
            }
          ],
          "AWA": [
            {
              "station": "EP NKA / A",
              "voters": 287
            }
          ],
          "NKA": [
            {
              "station": "EP NKA / A",
              "voters": 287
            }
          ],
          "NTAWOUNG": [
            {
              "station": "EP NTAWOUNG / A",
              "voters": 1070
            }
          ],
          "NTIEM": [
            {
              "station": "EP NTIEM / A",
              "voters": 179
            }
          ],
          "ASSONG": [
            {
              "station": "EP NZINCHUET / A",
              "voters": 269
            }
          ],
          "FEMELA": [
            {
              "station": "EP NZINCHUET / A",
              "voters": 269
            }
          ],
          "NZINCHUET": [
            {
              "station": "EP NZINCHUET / A",
              "voters": 269
            }
          ],
          "BESSOUCK": [
            {
              "station": "EP SANTCHOU / A",
              "voters": 1005
            }
          ],
          "NKEKA": [
            {
              "station": "EP SINGAIM / A",
              "voters": 250
            }
          ],
          "SINGAIM": [
            {
              "station": "EP SINGAIM / A",
              "voters": 406
            }
          ],
          "KASSALAFAM": [
            {
              "station": "FOYER ADENKA / A",
              "voters": 475
            }
          ],
          "BESKWAING": [
            {
              "station": "FOYER BESKWAING / A",
              "voters": 86
            }
          ],
          "MANKANG": [
            {
              "station": "FOYER MANKANG / A",
              "voters": 255
            }
          ],
          "MOYONG": [
            {
              "station": "FOYER MANKANG / A",
              "voters": 255
            }
          ],
          "ABOU": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 724
            }
          ],
          "AGONBING": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "AKEP": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "ATSADENG": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "AZON": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "NDOKENG": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "NZATSENG": [
            {
              "station": "FOYER MOMBONG / A",
              "voters": 362
            }
          ],
          "NGANG": [
            {
              "station": "FOYER NGANG / A",
              "voters": 47
            }
          ],
          "NGANZOM": [
            {
              "station": "FOYER NGANZOM / A",
              "voters": 299
            }
          ],
          "NTISSAH_RELOCALISE": [
            {
              "station": "GROUPE SCOLAIRE BPL MBANKOUME / A",
              "voters": 359
            }
          ],
          "MBOUZEP": [
            {
              "station": "LYCEE BILINGUE NGWATTA / A",
              "voters": 1152
            }
          ],
          "NGWATTA": [
            {
              "station": "LYCEE BILINGUE NGWATTA / A",
              "voters": 1152
            }
          ],
          "MBOUSSECK": [
            {
              "station": "LYCEE BILINGUE NGWATTA / A",
              "voters": 576
            }
          ],
          "NGWATTA-MABOKOM": [
            {
              "station": "LYCEE BILINGUE NGWATTA / A",
              "voters": 576
            }
          ],
          "NTAKONG": [
            {
              "station": "LYCEE BILINGUE NGWATTA / A",
              "voters": 576
            }
          ],
          "MBONDEN,MBONGO": [
            {
              "station": "MANDELA STANDARD BILINGUAL NURSERY  AND PRIMARY SCHOOL SANTCHOU / A",
              "voters": 240
            }
          ],
          "MADAGASCAR": [
            {
              "station": "MOSQUEE CENTRALE DE SANTCHOU / A",
              "voters": 1622
            }
          ],
          "MICHIMIA": [
            {
              "station": "SAINT ANDREW SCHOOL MICHIMIA / A",
              "voters": 142
            }
          ],
          "FIALA": [
            {
              "station": "SALLE COMMUNAUTAIRE FONDONERA / A",
              "voters": 441
            }
          ],
          "FONDONERA": [
            {
              "station": "SALLE COMMUNAUTAIRE FONDONERA / A",
              "voters": 1058
            }
          ],
          "LETIA": [
            {
              "station": "SALLE COMMUNAUTAIRE FONDONERA / A",
              "voters": 617
            }
          ],
          "MANZOCKO": [
            {
              "station": "SALLE COMMUNAUTAIRE FONDONERA / A",
              "voters": 1568
            }
          ]
        }
      }
    }
  }
};