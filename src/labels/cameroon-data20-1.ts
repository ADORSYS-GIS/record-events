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
    "name": {
      "en": "EAST",
      "fr": "EST"
    },
    "divisions": {
      "BOUMBA-ET-NGOKO": {
        "GARI-GOMBO": {
          "BELEKOUBOU": [
            {
              "station": "EP KPOKILITA",
              "voters": 188
            }
          ],
          "GBANDIA": [
            {
              "station": "EP KPOKILITA",
              "voters": 188
            }
          ],
          "KPOKILITA": [
            {
              "station": "EP KPOKILITA",
              "voters": 188
            }
          ],
          "NGAMBELE": [
            {
              "station": "EP KPOKILITA",
              "voters": 188
            }
          ],
          "BINDO": [
            {
              "station": "HANGAR COMM PAYA",
              "voters": 261
            }
          ],
          "PAYAI": [
            {
              "station": "HANGAR COMM PAYA",
              "voters": 261
            },
            {
              "station": "EP PAYA II",
              "voters": 257
            }
          ],
          "DJOKOUDOUMO": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "GBATANGA": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "MBOUTOUNDOU 1": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "NGOPIA": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "QOUESSO": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "SEMBE": [
            {
              "station": "HANGAR COMM MBOUTOUNDOU I",
              "voters": 147
            }
          ],
          "DISSO": [
            {
              "station": "EP PATERRE",
              "voters": 142
            }
          ],
          "PATERRE": [
            {
              "station": "EP PATERRE",
              "voters": 142
            }
          ],
          "GARI-GOMBO Il": [
            {
              "station": "LYCEE GARI-GOMBO",
              "voters": 335
            }
          ],
          "GOUBERA": [
            {
              "station": "EP NGOUNDI II",
              "voters": 210
            }
          ],
          "NGOUNDI I": [
            {
              "station": "EP NGOUNDI II",
              "voters": 210
            },
            {
              "station": "EP NGOUNDI I",
              "voters": 327
            }
          ],
          "GOUOSSOUOPENDI": [
            {
              "station": "CES TOMBI",
              "voters": 245
            }
          ],
          "TOMBI": [
            {
              "station": "CES TOMBI",
              "voters": 245
            }
          ],
          "GRIBI": [
            {
              "station": "EP GRIBI",
              "voters": 271
            }
          ],
          "KELEMBA": [
            {
              "station": "EP KELEMBA",
              "voters": 133
            }
          ],
          "MBANG": [
            {
              "station": "EP KELEMBA",
              "voters": 133
            }
          ],
          "KONGO": [
            {
              "station": "EP KONGO",
              "voters": 195
            }
          ],
          "MESSADJISSO": [
            {
              "station": "EP KONGO",
              "voters": 195
            }
          ],
          "LAMBO": [
            {
              "station": "EP LAMBO",
              "voters": 136
            }
          ],
          "ALALAM": [
            {
              "station": "CENTRE ALPHABETISATION MENTSOGA",
              "voters": 51
            }
          ],
          "LIMOE": [
            {
              "station": "CENTRE ALPHABETISATION MENTSOGA",
              "voters": 51
            }
          ],
          "MENTSOGA": [
            {
              "station": "CENTRE ALPHABETISATION MENTSOGA",
              "voters": 51
            }
          ],
          "MOBIDEBEBE": [
            {
              "station": "CENTRE ALPHABETISATION MENTSOGA",
              "voters": 51
            }
          ],
          "LOM": [
            {
              "station": "EP LOM",
              "voters": 97
            }
          ],
          "MAMPELLE": [
            {
              "station": "HANGAR COMM MAMPELLE",
              "voters": 137
            }
          ],
          "MANG": [
            {
              "station": "EP MANG",
              "voters": 128
            }
          ],
          "MBIALI": [
            {
              "station": "EP MBIALI",
              "voters": 265
            }
          ],
          "MESSE": [
            {
              "station": "HANGAR COMM MESSE",
              "voters": 95
            }
          ],
          "METEGOMATSINOMORI": [
            {
              "station": "EP METEGOMATSINOMORI",
              "voters": 61
            }
          ],
          "MOMZOPIA": [
            {
              "station": "EP MOMZOPIA",
              "voters": 231
            }
          ],
          "MOPOUO": [
            {
              "station": "HANGAR COMM MOPOUO",
              "voters": 119
            }
          ],
          "NOUMBANKOE": [
            {
              "station": "HANGAR COMM MOPOUO",
              "voters": 119
            }
          ],
          "NDENG-VILLAGE": [
            {
              "station": "HANGAR COMM NDENG-VILLAGE",
              "voters": 98
            }
          ],
          "NDENG CHANTIER": [
            {
              "station": "EP A-EPB/A NDENG CHANTIER",
              "voters": 382
            },
            {
              "station": "EP A-EPB/B NDENG CHANTIER",
              "voters": 249
            }
          ],
          "DIFFOLO": [
            {
              "station": "HANGAR COMMUNAUTAIRE NGARETTA",
              "voters": 78
            }
          ],
          "NGARETTA": [
            {
              "station": "HANGAR COMMUNAUTAIRE NGARETTA",
              "voters": 78
            }
          ],
          "NGARISSO": [
            {
              "station": "HANGAR COMMUNAUTAIRE NGARISSO",
              "voters": 81
            }
          ],
          "TIGAZA": [
            {
              "station": "EP NGOUNDI I",
              "voters": 327
            }
          ],
          "PAYA II": [
            {
              "station": "EP PAYA II",
              "voters": 257
            }
          ],
          "QUARTIER BAOBAB": [
            {
              "station": "ECOLE MATERNELLE GARI-GOMBO / A",
              "voters": 361
            },
            {
              "station": "ECOLE MATERNELLE GARI-GOMBO / B",
              "voters": 79
            }
          ],
          "QUARTIER GENERAL": [
            {
              "station": "EP GARI-GOMBO GROUPE I",
              "voters": 363
            },
            {
              "station": "EP GARI-GOMBO GROUPE I",
              "voters": 133
            }
          ],
          "QUARTIER PLATEAU": [
            {
              "station": "EP GARI-GOMBO GROUPE II",
              "voters": 339
            }
          ],
          "SANGHA": [
            {
              "station": "HANGAR COMMUNAUTAIRE SANGHA",
              "voters": 101
            }
          ],
          "NGOKO": [
            {
              "station": "EP NGOKO",
              "voters": 41
            }
          ]
        },
        "MOLOUNDOU": {
          "ADJALA": [
            {
              "station": "EP ADJALA",
              "voters": 101
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "EP GROUPE I",
              "voters": 266
            },
            {
              "station": "EP GROUPE 1",
              "voters": 183
            },
            {
              "station": "ECOLE BILINGUE DE MOLOUNDOU",
              "voters": 300
            }
          ],
          "BAKA": [
            {
              "station": "MARCHE BAKA",
              "voters": 114
            }
          ],
          "BA'AD": [
            {
              "station": "EP EKELEMBA",
              "voters": 92
            }
          ],
          "EKELEMBA": [
            {
              "station": "EP EKELEMBA",
              "voters": 92
            }
          ],
          "BANANA": [
            {
              "station": "EP BANANA",
              "voters": 328
            }
          ],
          "CENTRE COMMERCIAL": [
            {
              "station": "ALLIANCE VOYAGE / A",
              "voters": 247
            },
            {
              "station": "ALLIANCE VOYAGE / B",
              "voters": 240
            },
            {
              "station": "ALLIANCE VOYAGE / C",
              "voters": 193
            }
          ],
          "DIOULA": [
            {
              "station": "EP DIOULA",
              "voters": 232
            }
          ],
          "KIKA": [
            {
              "station": "EP KIKA / A",
              "voters": 254
            },
            {
              "station": "MARCHE KIKA / A",
              "voters": 336
            },
            {
              "station": "MARCHE KIKA / B",
              "voters": 367
            },
            {
              "station": "MARCHE KIKA / C",
              "voters": 86
            }
          ],
          "BENZA": [
            {
              "station": "MARCHE KIKA / A",
              "voters": 336
            },
            {
              "station": "MARCHE KIKA / B",
              "voters": 367
            },
            {
              "station": "MARCHE KIKA / C",
              "voters": 86
            }
          ],
          "KANIVO": [
            {
              "station": "MARCHE KIKA / A",
              "voters": 336
            },
            {
              "station": "MARCHE KIKA / B",
              "voters": 367
            },
            {
              "station": "MARCHE KIKA / C",
              "voters": 86
            }
          ],
          "LEKE": [
            {
              "station": "EP MINDOUROU / A",
              "voters": 161
            }
          ],
          "MINDOUROU": [
            {
              "station": "EP MINDOUROU / A",
              "voters": 161
            }
          ],
          "LEGOUE": [
            {
              "station": "EP LEGOUE",
              "voters": 69
            }
          ],
          "MAMBANDA": [
            {
              "station": "POSTE EAU ET FORET",
              "voters": 215
            }
          ],
          "MAKOKA I": [
            {
              "station": "EP MAKOKA I",
              "voters": 328
            }
          ],
          "MAKOKA II": [
            {
              "station": "EP MAKOKA I",
              "voters": 328
            }
          ],
          "MALAPA": [
            {
              "station": "EP MALAPA",
              "voters": 64
            }
          ],
          "MAMBELE": [
            {
              "station": "EP MAMBELE",
              "voters": 211
            },
            {
              "station": "FOYER MAMBELE",
              "voters": 63
            }
          ],
          "MBANGOYE I": [
            {
              "station": "FOYER MBANGOYE I",
              "voters": 159
            },
            {
              "station": "EP MBANGOYE I",
              "voters": 183
            }
          ],
          "MBANGOYE II": [
            {
              "station": "FOYER MBANGOYE II",
              "voters": 373
            }
          ],
          "MBATEKA CENTRE": [
            {
              "station": "EP MBATEKA CENTRE",
              "voters": 252
            },
            {
              "station": "FOYER MBATEKA CENTRE",
              "voters": 94
            }
          ],
          "MBATEKA NDJONG": [
            {
              "station": "EP MBATEKA NDJONG",
              "voters": 236
            }
          ],
          "MBANDJANI": [
            {
              "station": "EP MBANDJANI",
              "voters": 81
            }
          ],
          "MIGOMBE": [
            {
              "station": "FOYER MIGOMBE",
              "voters": 79
            }
          ],
          "MOLOUNDOU-RIVIERE": [
            {
              "station": "HANGAR BAC",
              "voters": 106
            },
            {
              "station": "POSTE MARINE MARCHANDE",
              "voters": 154
            }
          ],
          "MOKOUNOUNOU": [
            {
              "station": "POSTE MARINE MARCHANDE",
              "voters": 154
            }
          ],
          "MONGOKELE": [
            {
              "station": "HANGAR CHEFFERIE",
              "voters": 21
            }
          ],
          "MOPOULO": [
            {
              "station": "MISSION CATHOLIQUE",
              "voters": 313
            }
          ],
          "NEW-TOWN": [
            {
              "station": "MARCHE MOLOUNDOU",
              "voters": 394
            }
          ],
          "NDONGO": [
            {
              "station": "EP NDONGO",
              "voters": 81
            }
          ],
          "NGUILILI I": [
            {
              "station": "EP NGUILILI I",
              "voters": 360
            }
          ],
          "PK 14 KIKA": [
            {
              "station": "EP PK 14",
              "voters": 45
            }
          ],
          "TEMBE RIVIERE": [
            {
              "station": "EP TEMBE-RIVIERE",
              "voters": 68
            }
          ],
          "YENGA DOUCEMENT": [
            {
              "station": "EP YENGA DOUCEMENT",
              "voters": 160
            }
          ],
          "YENGA CENTRE": [
            {
              "station": "EP YENGA CENTRE",
              "voters": 211
            }
          ],
          "YENGA TENGUE": [
            {
              "station": "EP YENGA TENGUE",
              "voters": 159
            }
          ],
          "NOLA": [
            {
              "station": "ECOLE BILINGUE DE MOLOUNDOU",
              "voters": 300
            },
            {
              "station": "EFR MOLOUNDOU",
              "voters": 220
            },
            {
              "station": "EFR MOLOUNDOU",
              "voters": 221
            }
          ],
          "PEZAM": [
            {
              "station": "ECOLE BILINGUE DE MOLOUNDOU",
              "voters": 300
            }
          ],
          "PRISON": [
            {
              "station": "EFR MOLOUNDOU",
              "voters": 220
            },
            {
              "station": "EFR MOLOUNDOU",
              "voters": 221
            }
          ],
          "BELA": [
            {
              "station": "EP BELA",
              "voters": 214
            }
          ],
          "DISSASSUE": [
            {
              "station": "CEB DISSASSUE",
              "voters": 107
            }
          ],
          "KOUMELA": [
            {
              "station": "EP KOUMELA",
              "voters": 272
            }
          ],
          "LIBONGO PK1": [
            {
              "station": "CEB LIBONGO",
              "voters": 148
            }
          ],
          "LIBONGO ECOLE": [
            {
              "station": "EP LIBONGO",
              "voters": 263
            },
            {
              "station": "EP LIBONGO",
              "voters": 249
            }
          ],
          "LIBONGO MARCHE": [
            {
              "station": "MARCHE LIBONGO",
              "voters": 375
            },
            {
              "station": "MARCHE LIBONGO",
              "voters": 132
            }
          ],
          "LIBONGO STADE": [
            {
              "station": "TRIBUNE STADE",
              "voters": 282
            },
            {
              "station": "TRIBUNE STADE",
              "voters": 142
            }
          ],
          "LIBONGO USINE": [
            {
              "station": "USINE",
              "voters": 183
            }
          ],
          "LOKOMO": [
            {
              "station": "CEB LOKOMO",
              "voters": 197
            },
            {
              "station": "EP LOKOMO",
              "voters": 292
            },
            {
              "station": "EP LOKOMO",
              "voters": 319
            }
          ],
          "MBOLI": [
            {
              "station": "EP MBOLI",
              "voters": 79
            }
          ],
          "MIKEL": [
            {
              "station": "EP MIKEL",
              "voters": 396
            },
            {
              "station": "EP MIKEL",
              "voters": 120
            }
          ],
          "MOMBOUE": [
            {
              "station": "EP MOMBOUE",
              "voters": 262
            }
          ],
          "NGOLLA 115": [
            {
              "station": "EP NGOLLA 115",
              "voters": 79
            }
          ],
          "NGOLLA 120": [
            {
              "station": "EP NGOLLA 120",
              "voters": 292
            }
          ],
          "NGOLLA 125": [
            {
              "station": "EP NGOLLA 125",
              "voters": 137
            }
          ],
          "OTELE MAWA": [
            {
              "station": "EP OTELE MAWA",
              "voters": 197
            }
          ],
          "SALAPOUMBE": [
            {
              "station": "EP SALAPOUMEE",
              "voters": 345
            },
            {
              "station": "EP SALAPOUMEE",
              "voters": 210
            },
            {
              "station": "LYCEE SALAPOUMEE",
              "voters": 119
            }
          ],
          "SALAPOUMEE LA VIE": [
            {
              "station": "EP SALAPOUMEE LA VIE",
              "voters": 159
            }
          ],
          "TEMBE-PISTE": [
            {
              "station": "CEB TEMBE PISTE",
              "voters": 75
            },
            {
              "station": "EP TEMBE PISTE",
              "voters": 236
            }
          ]
        },
        "OKADOUMA": {
          "ES": [
            {
              "station": "EP BANDEKOK",
              "voters": 206
            }
          ],
          "BANGUE": [
            {
              "station": "EP BANGUE-ADJALA",
              "voters": 149
            },
            {
              "station": "EP BANGUE-CENTRE",
              "voters": 186
            }
          ],
          "BIENEMAMA A": [
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 330
            },
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 55
            }
          ],
          "BONDJE": [
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 330
            },
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 55
            }
          ],
          "QUARTIER MISSION": [
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 330
            },
            {
              "station": "ECOLE CATHOLIQUE ST ALOYS",
              "voters": 55
            }
          ],
          "BIENEMAMA NOUVEAU": [
            {
              "station": "EP BIENEMAMA NOUVEAU",
              "voters": 176
            }
          ],
          "BINTOM": [
            {
              "station": "HANGAR COMMUNAUTAIRE BINTOM",
              "voters": 76
            }
          ],
          "BIWALA I": [
            {
              "station": "EP BIWALA I",
              "voters": 225
            }
          ],
          "BIWALA II": [
            {
              "station": "HANGAR COMMUNAUTAIRE BIWALA II",
              "voters": 187
            }
          ],
          "BIWALA KAMPALA": [
            {
              "station": "HANGAR COMM BIWALA KAMPALA",
              "voters": 102
            }
          ],
          "BIWALA BIDJOUKI": [
            {
              "station": "HANGAR COMM BIWALA BIDJOUKI",
              "voters": 167
            }
          ],
          "BOMPELLO": [
            {
              "station": "EP BOMPELLO",
              "voters": 247
            }
          ],
          "BONDA": [
            {
              "station": "HANGAR COMM BONDA OUESSO",
              "voters": 82
            }
          ],
          "OUESSO": [
            {
              "station": "HANGAR COMM BONDA OUESSO",
              "voters": 82
            }
          ],
          "CONGO II": [
            {
              "station": "HANGAR COMMUNAUTAIRE CONGO II",
              "voters": 147
            }
          ],
          "CONGO-CENTRE": [
            {
              "station": "EP CONGO-CENTRE",
              "voters": 98
            }
          ],
          "DJALOBEKOE": [
            {
              "station": "EP DJALOBEKOE",
              "voters": 245
            }
          ],
          "DJEMBA": [
            {
              "station": "EP DJEMBA",
              "voters": 279
            }
          ],
          "GOUENEPOUM NOUVEAU": [
            {
              "station": "HANGAR COMM GOUENEPOUM NOUVEAU",
              "voters": 108
            }
          ],
          "GRIBE": [
            {
              "station": "EP GRIBE",
              "voters": 151
            }
          ],
          "LAMEDOUM": [
            {
              "station": "EP LAMEDOUM",
              "voters": 89
            }
          ],
          "LANDJOUE I": [
            {
              "station": "EP LANDJOUE I",
              "voters": 328
            }
          ],
          "LANDJOUE II": [
            {
              "station": "EP LANDJOUE II",
              "voters": 257
            }
          ],
          "LEILA": [
            {
              "station": "EP MASSEA",
              "voters": 345
            }
          ],
          "MASSEA": [
            {
              "station": "EP MASSEA",
              "voters": 345
            }
          ],
          "LIMOE": [
            {
              "station": "HANGAR COMMUNAUTAIRE LIMOE",
              "voters": 103
            }
          ],
          "LONG": [
            {
              "station": "CES MBOY",
              "voters": 290
            }
          ],
          "MBOY I": [
            {
              "station": "CES MBOY",
              "voters": 290
            }
          ],
          "MOBALO": [
            {
              "station": "CES MBOY",
              "voters": 290
            }
          ],
          "MADJOUE": [
            {
              "station": "EP MADJOUE",
              "voters": 309
            }
          ],
          "MALABANGO": [
            {
              "station": "EP MALABANGO",
              "voters": 286
            }
          ],
          "MALEA ANCIEN": [
            {
              "station": "HANGAR COMM MALEA ANCIEN",
              "voters": 93
            }
          ],
          "ZOULABOT ANCIEN": [
            {
              "station": "HANGAR COMM MALEA ANCIEN",
              "voters": 93
            }
          ],
          "MALEA NOUVEAU": [
            {
              "station": "HANGAR COMM MALEA NOUVEAU",
              "voters": 164
            }
          ]
        },
        "YOKADOUMA": {
          "MANG": [
            {
              "station": "EP MANG",
              "voters": 318
            }
          ],
          "MASSIANG": [
            {
              "station": "EP MASSIANG",
              "voters": 326
            }
          ],
          "MASSIEMBO": [
            {
              "station": "HANGAR COMM MASSIEMBO",
              "voters": 162
            }
          ],
          "MBOL II": [
            {
              "station": "EP MBOL II",
              "voters": 184
            }
          ],
          "MBOL XII": [
            {
              "station": "EP MBOL XII",
              "voters": 337
            },
            {
              "station": "EP MBOL XII",
              "voters": 291
            }
          ],
          "MBOY II": [
            {
              "station": "HANGAR MARCHE MBOY II",
              "voters": 392
            }
          ],
          "MEMPOE CFC": [
            {
              "station": "EP MEMPOE CFC",
              "voters": 336
            },
            {
              "station": "EP MEMPOE CFC",
              "voters": 181
            }
          ],
          "MENDOUNGUE": [
            {
              "station": "EP MENDOUNGUE",
              "voters": 235
            }
          ],
          "MEZIONG": [
            {
              "station": "EP MEZIONG",
              "voters": 245
            }
          ],
          "MIMBO-MIMBO": [
            {
              "station": "EP MIMBO-MIMBO",
              "voters": 329
            },
            {
              "station": "EP MORAZEWOUL",
              "voters": 74
            }
          ],
          "MINTOM": [
            {
              "station": "EP MINTOM",
              "voters": 102
            },
            {
              "station": "HANGAR COMM MINTOM",
              "voters": 207
            }
          ],
          "MOAMPACK": [
            {
              "station": "EP MOAMPACK",
              "voters": 308
            },
            {
              "station": "SAR-SM",
              "voters": 279
            },
            {
              "station": "SAR-SM",
              "voters": 133
            }
          ],
          "MOBALO": [
            {
              "station": "EP MOBALO II",
              "voters": 96
            }
          ],
          "MOBALO II": [
            {
              "station": "EP MOBALO II",
              "voters": 96
            }
          ],
          "MODOUMO": [
            {
              "station": "EP MODOUMO",
              "voters": 253
            }
          ],
          "MOMESSENG": [
            {
              "station": "EP MOMESSENG",
              "voters": 52
            }
          ],
          "MOMJEPOM": [
            {
              "station": "EP MOMJEPOM",
              "voters": 309
            }
          ],
          "MOPOUE": [
            {
              "station": "EP MOPOUE",
              "voters": 163
            }
          ],
          "MOPOUO": [
            {
              "station": "EP MOPOUO",
              "voters": 187
            }
          ],
          "ZOK BOULANEBONE": [
            {
              "station": "EP MOPOUO",
              "voters": 187
            },
            {
              "station": "EP NKAMEKO'O",
              "voters": 150
            },
            {
              "station": "CSI ZOKBOULANEBONE",
              "voters": 130
            }
          ],
          "MPARO": [
            {
              "station": "EP MPARO",
              "voters": 354
            }
          ],
          "NAMPELLA": [
            {
              "station": "EP NAMPELLA",
              "voters": 188
            },
            {
              "station": "HANGAR COMM NAMPELLA",
              "voters": 172
            }
          ],
          "NGATTO NOUVEAU": [
            {
              "station": "HOPITAL NGATTO NOUVEAU",
              "voters": 327
            }
          ],
          "NGOLLA 20": [
            {
              "station": "EP NGOLLA 20",
              "voters": 325
            }
          ],
          "NGOLLA 35": [
            {
              "station": "EP NGOLLA 35",
              "voters": 277
            }
          ],
          "NKAMEKO'O": [
            {
              "station": "EP NKAMEKO'O",
              "voters": 150
            }
          ],
          "NTIOU": [
            {
              "station": "EP NTIOU",
              "voters": 314
            },
            {
              "station": "HANGAR CTAIRE SONGALIKA",
              "voters": 112
            }
          ],
          "NYABONDA": [
            {
              "station": "EP NYABONDA",
              "voters": 181
            }
          ],
          "OTOUMKOUAND": [
            {
              "station": "HANGAR COMM OTOUMKOUAND",
              "voters": 185
            }
          ],
          "GRIBE": [
            {
              "station": "HANGAR SCIERIE GREEN VALEY",
              "voters": 334
            },
            {
              "station": "HANGAR SCIERIE GREEN VALEY",
              "voters": 79
            }
          ],
          "OUESSO": [
            {
              "station": "HANGAR SCIERIE GREEN VALEY",
              "voters": 334
            },
            {
              "station": "HANGAR SCIERIE GREEN VALEY",
              "voters": 79
            },
            {
              "station": "EP OUESSO",
              "voters": 72
            }
          ],
          "PARNY": [
            {
              "station": "EP PARNY",
              "voters": 266
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "PALAIS DE JUSTICE",
              "voters": 231
            },
            {
              "station": "PALAIS DE JUSTICE",
              "voters": 258
            },
            {
              "station": "PALAIS DE JUSTICE",
              "voters": 234
            },
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 318
            },
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 349
            },
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 206
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 271
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 208
            },
            {
              "station": "DELEGATION DEPT MINADER",
              "voters": 272
            },
            {
              "station": "DELEGATION DEPT MINADER",
              "voters": 234
            }
          ],
          "QUARTIER BORDEAUX": [
            {
              "station": "ECOLE MATERNELLE BORDEAUX",
              "voters": 307
            },
            {
              "station": "ECOLE MATERNELLE BORDEAUX",
              "voters": 311
            }
          ],
          "QUARTIER COMPAGNIE": [
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 318
            },
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 349
            },
            {
              "station": "EP QUARTIER COMPAGNIE",
              "voters": 206
            },
            {
              "station": "EP GROUPE III",
              "voters": 347
            },
            {
              "station": "EP GROUPE III",
              "voters": 334
            },
            {
              "station": "EP GROUPE III",
              "voters": 374
            }
          ],
          "DJALOBEKOE": [
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 273
            },
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 246
            },
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 177
            }
          ],
          "QUARTIER DJODJOL": [
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 273
            },
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 246
            },
            {
              "station": "ECOLE FRANCO-ARABE",
              "voters": 177
            }
          ],
          "QUARTIER FOULBE": [
            {
              "station": "HANGAR COMM QUARTIER FOULBE",
              "voters": 320
            }
          ],
          "QUARTIER HAOUSSA": [
            {
              "station": "MOSQUEE HAOUSSA",
              "voters": 321
            },
            {
              "station": "MOSQUEE HAOUSSA",
              "voters": 77
            }
          ],
          "QUARTIER MOADANG": [
            {
              "station": "DEL DEPTALE COMMUNICATION",
              "voters": 303
            },
            {
              "station": "SAR-SM",
              "voters": 279
            },
            {
              "station": "SAR-SM",
              "voters": 133
            }
          ],
          "MOAZAM": [
            {
              "station": "SAR-SM",
              "voters": 279
            },
            {
              "station": "SAR-SM",
              "voters": 133
            },
            {
              "station": "DELEGATION DEPT EDUCATION DE BASE",
              "voters": 226
            }
          ],
          "QUARTIER NEW-TOWN 1": [
            {
              "station": "DEL DEPTALE ENSEIG SECOND",
              "voters": 291
            },
            {
              "station": "DEL DEPTALE ENSEIG SECOND",
              "voters": 270
            },
            {
              "station": "DEL DEPTALE ENSEIG SECOND",
              "voters": 226
            },
            {
              "station": "D.D.D. ET AFFAIRES FONCIERES",
              "voters": 268
            },
            {
              "station": "D.D.D. ET AFFAIRES FONCIERES",
              "voters": 278
            },
            {
              "station": "D.D.D. ET AFFAIRES FONCIERES",
              "voters": 293
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 271
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 271
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 208
            },
            {
              "station": "HOTEL DES POSTES",
              "voters": 208
            }
          ],
          "QUARTIER PARADIS": [
            {
              "station": "EP GROUPE III",
              "voters": 347
            },
            {
              "station": "EP GROUPE III",
              "voters": 334
            },
            {
              "station": "EP GROUPE III",
              "voters": 374
            }
          ],
          "QUARTIER RELAIS": [
            {
              "station": "EP GROUPE III",
              "voters": 347
            },
            {
              "station": "EP GROUPE III",
              "voters": 334
            },
            {
              "station": "EP GROUPE III",
              "voters": 374
            },
            {
              "station": "LYCEE BILINGUE",
              "voters": 293
            },
            {
              "station": "LYCEE BILINGUE",
              "voters": 266
            },
            {
              "station": "LYCEE BILINGUE",
              "voters": 155
            }
          ],
          "SENGBOT": [
            {
              "station": "EP STBK SENGBOT",
              "voters": 258
            }
          ],
          "GOUENEPOUM ANCIEN": [
            {
              "station": "HANGAR COMM SONG ANCIEN",
              "voters": 53
            }
          ],
          "SONG ANCIEN": [
            {
              "station": "HANGAR COMM SONG ANCIEN",
              "voters": 53
            }
          ],
          "SONG NOUVEAU": [
            {
              "station": "HANGAR COMM SONG ANCIEN",
              "voters": 53
            },
            {
              "station": "HANGAR COMM SONG NOUVEAU",
              "voters": 168
            }
          ],
          "TEKELE": [
            {
              "station": "EP TEKELE",
              "voters": 93
            }
          ],
          "ZOKADIBA": [
            {
              "station": "EP ZOKADIBA",
              "voters": 156
            }
          ],
          "ZOULABOT NOUVEAU": [
            {
              "station": "EP ZOULABOT NOUVEAU",
              "voters": 318
            }
          ],
          "MALEAN ANCIEN": [
            {
              "station": "FOYER COM. SIM-MALEA",
              "voters": 64
            }
          ],
          "NGATTO ANCIEN": [
            {
              "station": "FOYER COM. SIM-MALEA",
              "voters": 64
            },
            {
              "station": "EP NGATTO ANCIEN",
              "voters": 44
            }
          ],
          "ZOKBOULANEBONE": [
            {
              "station": "CSI ZOKBOULANEBONE",
              "voters": 130
            }
          ],
          "LEILA MASSEA": [
            {
              "station": "EP NGOUANG",
              "voters": 48
            }
          ],
          "MASSEA": [
            {
              "station": "EP NGOUANG",
              "voters": 48
            }
          ],
          "QUARTIER NEW-TOWN I": [
            {
              "station": "DELEGATION DEPT EDUCATION DE BASE",
              "voters": 226
            }
          ],
          "QUARTIER NEW-TOWN II": [
            {
              "station": "DELEGATION DEPT EDUCATION DE BASE",
              "voters": 226
            }
          ]
        }
      },
      "HAUT-NYONG": {
        "ABONG-MBANG": {
          "ABONG-DOUM": [
            {
              "station": "ECOLE PUBLIQUE D'ABONG-DOUM / A",
              "voters": 244
            },
            {
              "station": "ECOLE PUBLIQUE D'ABONG-DOUM / B",
              "voters": 261
            }
          ],
          "ABONG-MBANG II": [
            {
              "station": "BASE PHYTO-SANITAIRE D'ABONG-MBANG II / A",
              "voters": 237
            },
            {
              "station": "HOPITAL DE DISTRICT D'ABONG-MBANG / A",
              "voters": 317
            },
            {
              "station": "ECOLE MATERNELLE GROUPE I / A",
              "voters": 283
            },
            {
              "station": "ECOLE MATERNELLE GROUPE 1 / B",
              "voters": 53
            },
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 88
            }
          ],
          "ADOUMA": [
            {
              "station": "ECOLE PUBLIQUE ADOUMA / A",
              "voters": 258
            }
          ],
          "ANKOAMBOMB": [
            {
              "station": "ECOLE PUBLIQUE D'ANKOAMBOMB / A",
              "voters": 151
            }
          ],
          "ANKOUAMB": [
            {
              "station": "HANGAR A PALABRE D'ANKOUAMB / A",
              "voters": 88
            }
          ],
          "ANKOUNG": [
            {
              "station": "ECOLE PUBLIQUE D'ANKOUNG / A",
              "voters": 173
            }
          ],
          "ANZIE": [
            {
              "station": "ECOLE PUBLIQUE D'ANZIE / A",
              "voters": 189
            }
          ],
          "AYENE": [
            {
              "station": "FOYER COMMUNAUTAIRE D'AYENE / A",
              "voters": 344
            },
            {
              "station": "FOYER COMMUNAUTAIRE D'AYENE / B",
              "voters": 49
            }
          ],
          "BAGOFIT": [
            {
              "station": "ECOLE PUBLIQUE DE BAGOFIT / A",
              "voters": 228
            }
          ],
          "BAMAKO": [
            {
              "station": "HANGAR COMMERCIAL DE BAMAKO / A",
              "voters": 206
            }
          ],
          "BINDANANG": [
            {
              "station": "ECOLE PUBLIQUE DE BINDANANG / A",
              "voters": 169
            }
          ],
          "DJENASSOUME": [
            {
              "station": "ECOLE PUBLIQUE DE DJENASSOUME / A",
              "voters": 261
            }
          ],
          "DJOW": [
            {
              "station": "ECOLE CATHOLIQUE DE DJOW / A",
              "voters": 302
            },
            {
              "station": "ECOLE CATHOLIQUE DE DJOW / B",
              "voters": 267
            },
            {
              "station": "ETA DE DJOW / A",
              "voters": 333
            }
          ],
          "KWOAMB": [
            {
              "station": "LEPROSERIE DE KWOAMB / A",
              "voters": 104
            }
          ],
          "MADOUMA": [
            {
              "station": "LYCEE BILINGUE DE MADOUMA / A",
              "voters": 253
            },
            {
              "station": "LYCEE BILINGUE DE MADOUMA / B",
              "voters": 377
            }
          ],
          "MAZABE": [
            {
              "station": "ECOLE PUBLIQUE DE MAZABE / A",
              "voters": 158
            }
          ],
          "MBAM EWONDO": [
            {
              "station": "SUBDIVISION DES ROUTES / A",
              "voters": 158
            },
            {
              "station": "JOCCIDALO / A",
              "voters": 394
            }
          ],
          "MBOULE II": [
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / A",
              "voters": 271
            },
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / B",
              "voters": 155
            }
          ],
          "NYONG": [
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / A",
              "voters": 271
            },
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / B",
              "voters": 155
            },
            {
              "station": "DEL DEPTALE D'AGRICULTURE / A",
              "voters": 246
            },
            {
              "station": "DEL DEPTALE D'AGRICULTURE / B",
              "voters": 290
            },
            {
              "station": "ECOLE REGIONALE / A",
              "voters": 271
            }
          ],
          "MIANT": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MIANT / A",
              "voters": 75
            }
          ],
          "MPENZOK": [
            {
              "station": "ECOLE PUBLIQUE DE MPENZOK / A",
              "voters": 176
            },
            {
              "station": "ECOLE MATERNELLE DE MPEMZOK II / A",
              "voters": 87
            }
          ],
          "NDJIBE": [
            {
              "station": "ECOLE PUBLIQUE DE NDJIBE / A",
              "voters": 127
            }
          ],
          "NDJIBOT": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NDJIBOT / A",
              "voters": 36
            }
          ],
          "NDJODJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NDJODJOCK / A",
              "voters": 185
            }
          ],
          "NKOL-MVOLAN": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-MVOLAN / A",
              "voters": 120
            }
          ],
          "NTAKUIMB": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-MVOLAN / A",
              "voters": 120
            }
          ],
          "NKOUAL": [
            {
              "station": "HANGAR DE NKOUAL / A",
              "voters": 217
            }
          ],
          "NKOUOLOU": [
            {
              "station": "CASE A PALABRE DE NKOUOLOU / A",
              "voters": 117
            }
          ],
          "NTIMBE I": [
            {
              "station": "ECOLE PUBLIQUE DE NTIMBE I / A",
              "voters": 153
            }
          ],
          "NTIMBE II": [
            {
              "station": "ECOLE PUBLIQUE DE NTIMBE II / A",
              "voters": 163
            }
          ],
          "NTOUNG": [
            {
              "station": "HANGAR A PALABRE DE NTOUNG / A",
              "voters": 191
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "DEL DEPTALE D'AGRICULTURE / A",
              "voters": 246
            },
            {
              "station": "DEL DEPTALE D'AGRICULTURE / B",
              "voters": 290
            },
            {
              "station": "MAISON DE LA FEMME / A",
              "voters": 278
            },
            {
              "station": "SOUS PREFECTURE / A",
              "voters": 283
            },
            {
              "station": "HOPITAL DE DISTRICT D'ABONG-MBANG / A",
              "voters": 317
            },
            {
              "station": "HOPITAL DE DISTRICT D'ABONG-MBANG / B",
              "voters": 62
            },
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 88
            },
            {
              "station": "ECOLE REGIONALE / A",
              "voters": 271
            }
          ],
          "OBOUL I": [
            {
              "station": "ANCIEN CENTRE DE SANTE COMM D'OBOUL",
              "voters": 234
            },
            {
              "station": "HANGAR DE COVAGRO / A",
              "voters": 112
            }
          ],
          "OBOUL II": [
            {
              "station": "FOYER COMM D'OBOUL II / A",
              "voters": 65
            }
          ],
          "ABONG-MBANG I": [
            {
              "station": "HOPITAL DE DISTRICT D'ABONG-MBANG / B",
              "voters": 62
            }
          ],
          "QUARTIER HAOUSSA": [
            {
              "station": "ECOLE ANNEXE GROUPE IV / A",
              "voters": 296
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / B",
              "voters": 271
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / C",
              "voters": 276
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / D",
              "voters": 280
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / E",
              "voters": 285
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / F",
              "voters": 337
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / G",
              "voters": 214
            }
          ],
          "ZALOUM": [
            {
              "station": "ECOLE ANNEXE GROUPE IV / A",
              "voters": 296
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / B",
              "voters": 271
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / C",
              "voters": 276
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / D",
              "voters": 280
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / E",
              "voters": 285
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / F",
              "voters": 337
            },
            {
              "station": "ECOLE ANNEXE GROUPE IV / G",
              "voters": 214
            }
          ],
          "QUARTIER KAKO": [
            {
              "station": "ECOLE MATERNELLE GROUPE I / A",
              "voters": 283
            },
            {
              "station": "ECOLE MATERNELLE GROUPE 1 / B",
              "voters": 53
            },
            {
              "station": "SAR/SM / A",
              "voters": 113
            }
          ],
          "QUARTIER MAKA": [
            {
              "station": "FOYER BAFOUSSAM / A",
              "voters": 314
            },
            {
              "station": "FOYER BAFOUSSAM / B",
              "voters": 264
            },
            {
              "station": "ECOLE REGIONALE / A",
              "voters": 271
            }
          ],
          "SOKAMALAM": [
            {
              "station": "FOYER COMM DE SOKAMALAM / A",
              "voters": 307
            }
          ],
          "ZOGUEBOU": [
            {
              "station": "FOYER COMM DE ZOGUEBOU / A",
              "voters": 57
            }
          ],
          "MISSOUME": [
            {
              "station": "EP MISSOUME / A",
              "voters": 80
            }
          ],
          "MBOULE I": [
            {
              "station": "LYCEE CLASSIQUE ABONG-MBANG / A",
              "voters": 339
            },
            {
              "station": "LYCEE CLASSIQUE ABONG-MBANG / B",
              "voters": 339
            },
            {
              "station": "LYCEE CLASSIQUE ABONG-MBANG / C",
              "voters": 341
            },
            {
              "station": "LYCEE CLASSIQUE ABONG-MBANG / D",
              "voters": 345
            },
            {
              "station": "LYCEE CLASSIQUE ABONG-MBANG / E",
              "voters": 278
            }
          ]
        },
        "ANGOSSAS": {
          "ABALA": [
            {
              "station": "HANGAR PUBLIC D'ABALA / A",
              "voters": 92
            }
          ],
          "ABAMBE": [
            {
              "station": "HANGAR PUBLIC D'ABAMBE / A",
              "voters": 177
            },
            {
              "station": "ECOLE PUBLIQUE DE BAGBEZE I / A",
              "voters": 267
            }
          ],
          "ABONIS": [
            {
              "station": "HANGAR PUBLIC D'ABONIS / A",
              "voters": 181
            }
          ],
          "ANDJOU": [
            {
              "station": "ECOLE CATHOLIQUE D'ANDJOU / A",
              "voters": 179
            }
          ],
          "ANDJOUK": [
            {
              "station": "ECOLE PUBLIQUE D'ANDJOUXK / A",
              "voters": 73
            }
          ],
          "ANGOSSAS I": [
            {
              "station": "ECOLE PUBLIQUE D'ANGOSSAS I / A",
              "voters": 307
            },
            {
              "station": "LYCEE D'ANGOSSAS / A",
              "voters": 174
            }
          ],
          "ANGOSSAS II": [
            {
              "station": "CENTRE MED. D'ARRONDISSEMENT ANGOSSAS / A",
              "voters": 383
            },
            {
              "station": "LYCEE D'ANGOSSAS / A",
              "voters": 174
            }
          ],
          "ANGUENGUE": [
            {
              "station": "ECOLE PUBLIQUE D'ANGUENGUE / A",
              "voters": 226
            }
          ],
          "ANKOM": [
            {
              "station": "ECOLE PUBLIQUE D'ANKOM / A",
              "voters": 337
            }
          ],
          "BAGBETOUT": [
            {
              "station": "ECOLE PUBLIQUE DE BAGBETOUT / A",
              "voters": 117
            },
            {
              "station": "HANGAR PUBLIC DE BAGBETOUT / A",
              "voters": 113
            }
          ],
          "BAGBEZE I": [
            {
              "station": "ECOLE PUBLIQUE DE BAGBEZE I / A",
              "voters": 267
            }
          ],
          "BAGBEZE II": [
            {
              "station": "ECOLE PUBLIQUE DE BAGBEZE II / A",
              "voters": 363
            }
          ],
          "BAGOALE": [
            {
              "station": "HANGAR PUBLIC DE BAGOALE / A",
              "voters": 136
            }
          ],
          "BAGOBOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE BAGOBOUNG / A",
              "voters": 119
            },
            {
              "station": "HANGAR PUBLIQUE DE BAGOBOUNG / A",
              "voters": 122
            }
          ],
          "BAGOLOUL": [
            {
              "station": "ECOLE PUBLIQUE DE BAGOLOUL / A",
              "voters": 236
            }
          ],
          "BEUL": [
            {
              "station": "CES DE BEUL / A",
              "voters": 219
            },
            {
              "station": "FOYER CTAIRE BEUL 7",
              "voters": 159
            }
          ],
          "DJOKOUNDI": [
            {
              "station": "ECOLE PUBLIQUE DE DJOKOUNDI / A",
              "voters": 160
            }
          ],
          "ESSENG I": [
            {
              "station": "CETIC D'ESSENG / A",
              "voters": 191
            }
          ],
          "ESSENG II": [
            {
              "station": "CETIC D'ESSENG / A",
              "voters": 191
            },
            {
              "station": "ECOLE CATHOLIQUE / A",
              "voters": 229
            }
          ],
          "KEK": [
            {
              "station": "ECOLE PUBLIQUE DE KEK / A",
              "voters": 259
            }
          ],
          "KONAKE": [
            {
              "station": "ECOLE PUBLIQUE DE KONAKE / A",
              "voters": 182
            }
          ],
          "MAZEBOUAG": [
            {
              "station": "HANGAR PUBLIC DE MAZEBOUAG / A",
              "voters": 130
            }
          ],
          "MAYOS": [
            {
              "station": "ECOLE PUBLIQUE DE MAYOS / A",
              "voters": 98
            },
            {
              "station": "HANGAR PUBLIC DE MAYOS / A",
              "voters": 137
            }
          ],
          "MBA": [
            {
              "station": "ECOLE PUBLIQUE DE MBA / A",
              "voters": 209
            }
          ],
          "MBOMBA": [
            {
              "station": "ECOLE PUBLIQUE DE MBOMBA / A",
              "voters": 103
            }
          ],
          "MPALAMPOUAM": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MPALAMPOUAM / A",
              "voters": 199
            }
          ],
          "MPOUNDOU": [
            {
              "station": "ECOLE PUBLIQUE DE MPOUNDOU / A",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DE MPOUNDOU / B",
              "voters": 313
            }
          ],
          "NKONO": [
            {
              "station": "HANGAR PUBLIC DE NKONO / A",
              "voters": 116
            }
          ],
          "SELENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE SELENGUE / A",
              "voters": 136
            }
          ],
          "ZENDE": [
            {
              "station": "HANGAR PUBLIC DE ZENDE / A",
              "voters": 192
            }
          ],
          "MBOMEA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MBOMBA / A",
              "voters": 125
            }
          ]
        },
        "ATOK": {
          "AKOK MAKA": [
            {
              "station": "EP AKOK MAKA / A",
              "voters": 342
            },
            {
              "station": "ECOLE DES INFIRMIERS / A",
              "voters": 61
            }
          ],
          "AKOK -YEBEKOLO": [
            {
              "station": "HANGAR PUBLIC AKOK - YEBEKOLO / A",
              "voters": 86
            }
          ],
          "ATOK CFSO": [
            {
              "station": "HANGAR PUBLIC ATOK - CFSO / A",
              "voters": 75
            }
          ],
          "ATOK PALAIS A": [
            {
              "station": "EP ATOK A / A",
              "voters": 286
            },
            {
              "station": "EP ATOK B / A",
              "voters": 286
            }
          ],
          "ATOK PALAIS B": [
            {
              "station": "EP ATOK B / A",
              "voters": 286
            }
          ],
          "BENDE": [
            {
              "station": "FOYER PUBLIC BENDE / A",
              "voters": 53
            }
          ],
          "BIDJIGUE 1": [
            {
              "station": "HANGAR PUBLIC BIDJIGUE 1 / A",
              "voters": 164
            }
          ],
          "BIDJIGUE 2": [
            {
              "station": "EP NKOEMETAK 2 / A",
              "voters": 51
            }
          ],
          "NKOEMETAK 2": [
            {
              "station": "EP NKOEMETAK 2 / A",
              "voters": 51
            }
          ],
          "BIGOENS": [
            {
              "station": "EP BIGOENS / A",
              "voters": 179
            },
            {
              "station": "CES DE BIGOENS / A",
              "voters": 100
            }
          ],
          "DJEMB MBAMA": [
            {
              "station": "HANGAR PUBLIC DJEMB / A",
              "voters": 77
            }
          ],
          "DJOUM": [
            {
              "station": "EP DJOUM / A",
              "voters": 171
            }
          ],
          "EBODENKOU": [
            {
              "station": "HANGAR PUBLIC EBODENKOU / A",
              "voters": 86
            }
          ],
          "EFFOULAN": [
            {
              "station": "HANGAR PUBLIC EFFOULAN / A",
              "voters": 86
            }
          ],
          "LANDA II": [
            {
              "station": "HANGAR PUBLIC EFFOULAN / A",
              "voters": 86
            }
          ],
          "KODJANS": [
            {
              "station": "HANGAR PUBLIC KODJANS / A",
              "voters": 72
            }
          ],
          "LANDA": [
            {
              "station": "EP LANDA / A",
              "voters": 100
            }
          ],
          "MAKOGOU": [
            {
              "station": "HANGAR PUBLIC MAKOGOU / A",
              "voters": 101
            }
          ],
          "MAKOK": [
            {
              "station": "EP MAKOK / A",
              "voters": 208
            },
            {
              "station": "HANGAR PUBLIQUE MAKOK / A",
              "voters": 161
            }
          ],
          "MAYOS BEBEND": [
            {
              "station": "HANGAR PUBLIC MAYOS BEBEND / A",
              "voters": 135
            }
          ],
          "MIKOAGUE": [
            {
              "station": "EP MIKOAGUE / A",
              "voters": 147
            }
          ],
          "MPANDE MBAMA": [
            {
              "station": "EP MPANDE MBAMA / A",
              "voters": 152
            }
          ],
          "NDANKUIMB": [
            {
              "station": "HANGAR PUBLIC NDANKUIMB / A",
              "voters": 95
            },
            {
              "station": "HANGAR PUBLIC NDJINDA / A",
              "voters": 232
            }
          ],
          "NDJINDA": [
            {
              "station": "HANGAR PUBLIC NDJINDA / A",
              "voters": 232
            }
          ],
          "NGOULEMAKONG": [
            {
              "station": "EP NGOULEMAKONG / A",
              "voters": 97
            }
          ],
          "NKOEMETAK 1": [
            {
              "station": "HANGAR PUBLIC NKOEMETAK 1 / A",
              "voters": 163
            }
          ],
          "NTOUMB": [
            {
              "station": "HANGAR PUBLIC NTOUMB / A",
              "voters": 80
            }
          ],
          "NYIMBE": [
            {
              "station": "HANGAR PUBLIC NYIMBE / A",
              "voters": 121
            }
          ],
          "SOUOMBOU VILLAGE": [
            {
              "station": "EP SOUOMBOU / A",
              "voters": 189
            }
          ],
          "ZOGUELA": [
            {
              "station": "EP ZOGUELA / A",
              "voters": 212
            }
          ],
          "LANDA ROUTE": [
            {
              "station": "H P LANDA ROUTE / A",
              "voters": 48
            }
          ],
          "MBAMA CARREFOUR": [
            {
              "station": "EP MBAMA / A",
              "voters": 373
            }
          ],
          "BEUL": [
            {
              "station": "FOYER CTAIRE BEUL 7",
              "voters": 159
            }
          ],
          "MAYOS": [
            {
              "station": "HANGAR PUBLIC DE MAYOS / A",
              "voters": 137
            }
          ],
          "BAGOBOUNG": [
            {
              "station": "HANGAR PUBLIQUE DE BAGOBOUNG / A",
              "voters": 122
            }
          ],
          "MBOMEA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MBOMBA / A",
              "voters": 125
            }
          ]
        },
        "DIMAKO": {
          "AKANO": [
            {
              "station": "HANGAR A PALABRE AKONO 7 / A",
              "voters": 96
            }
          ],
          "AYENE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 / A",
              "voters": 301
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 / B",
              "voters": 79
            }
          ],
          "BAKTALA": [
            {
              "station": "FOYER COMMUNAUTAIRE BAKTALA / A",
              "voters": 209
            }
          ],
          "BEUL": [
            {
              "station": "FOYER COMMUNAUTAIRE BEUL / A",
              "voters": 210
            }
          ],
          "BONGOSSI": [
            {
              "station": "ECOLE PUBLIQUE BONGOSSI / A",
              "voters": 91
            }
          ],
          "NGOMBOL": [
            {
              "station": "ECOLE PUBLIQUE BONGOSSI / A",
              "voters": 91
            },
            {
              "station": "HANGAR A PALABRE NGOBOL / A",
              "voters": 37
            }
          ],
          "CAMP-NORD": [
            {
              "station": "FOYER SFID CAMP-NORD / A",
              "voters": 261
            }
          ],
          "DIEU-CONNAIT": [
            {
              "station": "ECOLE PUBLIQUE LES CHAMPIONS FCB / A",
              "voters": 336
            },
            {
              "station": "ECOLE PUBLIQUE LES CHAMPIONS FCB / B",
              "voters": 360
            },
            {
              "station": "HANGAR PUBLIC NGUINDA / A",
              "voters": 43
            }
          ],
          "PETIT-POL": [
            {
              "station": "ECOLE PUBLIQUE LES CHAMPIONS FCB / A",
              "voters": 336
            },
            {
              "station": "ECOLE PUBLIQUE LES CHAMPIONS FCB / B",
              "voters": 360
            },
            {
              "station": "ECOLE PUBLIQUE PETIT-POL / A",
              "voters": 363
            },
            {
              "station": "ECOLE PUBLIQUE PETIT-POL / B",
              "voters": 41
            }
          ],
          "DJANDJA": [
            {
              "station": "HANGAR A PALABRE DJANDJA / A",
              "voters": 107
            }
          ],
          "GRAND-POL": [
            {
              "station": "CES GRAND-POL / A",
              "voters": 231
            }
          ],
          "KANDALA": [
            {
              "station": "ECOLE PUBLIQUE KANDALA / A",
              "voters": 156
            }
          ],
          "KOUEN": [
            {
              "station": "ECOLE PUBLIQUE KOUEN / A",
              "voters": 145
            }
          ],
          "LONGTIMBI": [
            {
              "station": "ECOLE PUBLIQUE LONGTIMEI / A",
              "voters": 309
            }
          ],
          "LOUSSOU": [
            {
              "station": "ECOLE PUBLIQUE LOUSSOU / A",
              "voters": 99
            }
          ],
          "MAYOS": [
            {
              "station": "ECOLE PUBLIQUE MAYOS / A",
              "voters": 112
            }
          ],
          "MOKOLO": [
            {
              "station": "HANGAR A PALABRE MOKOLO / A",
              "voters": 294
            }
          ],
          "NGOLAMBELE": [
            {
              "station": "ECOLE PUBLIQUE NGOLAMBELE / A",
              "voters": 146
            },
            {
              "station": "FOYER COMMUNAUTAIRE NGOLAMBELE / A",
              "voters": 124
            }
          ],
          "NGUINDA": [
            {
              "station": "ECOLE PUBLIQUE NKOUMADJAP / A",
              "voters": 40
            },
            {
              "station": "HANGAR PUBLIC NGUINDA / A",
              "voters": 43
            }
          ],
          "NKOUMADJAP": [
            {
              "station": "ECOLE PUBLIQUE NKOUMADJAP / A",
              "voters": 40
            }
          ],
          "NKOLBIKON": [
            {
              "station": "ECOLE PUBLIQUE NKOLBIKON / A",
              "voters": 97
            }
          ],
          "NKOLMEYANGA": [
            {
              "station": "HANGAR A PALABRE NKOLMEYANGA / A",
              "voters": 72
            }
          ],
          "NKPWENGUE": [
            {
              "station": "HANGAR A PALABRE NKPWENGLE / A",
              "voters": 322
            }
          ],
          "PETIT-NGOLAMBELE": [
            {
              "station": "HANGAR A PALABRE PETIT-NGOLAMBELE / A",
              "voters": 91
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "SOUS-PREFECTURE / A",
              "voters": 183
            }
          ],
          "SIMEYONG": [
            {
              "station": "ECOLE PUBLIQUE TONKOUMBE / A",
              "voters": 59
            },
            {
              "station": "HANGAR A PALABRE SIMEYONG / A",
              "voters": 112
            }
          ],
          "TONKOUMBE": [
            {
              "station": "ECOLE PUBLIQUE TONKOUMBE / A",
              "voters": 59
            }
          ],
          "SOURCE": [
            {
              "station": "MAIRIE DE DIMAKO / A",
              "voters": 319
            },
            {
              "station": "MAIRIE DE DIMAKO / B",
              "voters": 400
            },
            {
              "station": "MAIRIE DE DIMAKO / C",
              "voters": 93
            }
          ],
          "TAHATE": [
            {
              "station": "HANGAR A PALABRE TAHATE / A",
              "voters": 81
            }
          ],
          "TOMBO": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II / A",
              "voters": 351
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II / B",
              "voters": 307
            }
          ],
          "TOUNGRELO": [
            {
              "station": "ECOLE PUBLIQUE TOUNGRELO / A",
              "voters": 235
            }
          ]
        },
        "DOUMAINTANG": {
          "BADITOUM I": [
            {
              "station": "E P BADITOUM I / A",
              "voters": 151
            }
          ],
          "BADITOUM II": [
            {
              "station": "EXPLANADE BADITOUM II / A",
              "voters": 41
            }
          ],
          "BADOUMA I": [
            {
              "station": "HANGAR PUBLIC BADOUMA I / A",
              "voters": 150
            }
          ],
          "BAKOUMBIAM I": [
            {
              "station": "HANGAR PUBLIC BAKOUMBIAM / A",
              "voters": 111
            }
          ],
          "BAKOUMBIAM II": [
            {
              "station": "E P BAKOUMBIAM II / A",
              "voters": 57
            }
          ],
          "BAMEKOK I": [
            {
              "station": "FOYER COMUNAUTAIRE BAMEKOK I / A",
              "voters": 73
            }
          ],
          "BAMEKOK II": [
            {
              "station": "HANGAR PUBLIC BAMEKOK II / A",
              "voters": 68
            }
          ],
          "DJENDE I": [
            {
              "station": "FOYER COMMMUNAUTAIRE DJENDE I / A",
              "voters": 144
            }
          ],
          "MENYANGOUA": [
            {
              "station": "FOYER COMMMUNAUTAIRE DJENDE I / A",
              "voters": 144
            },
            {
              "station": "FOYER COMMUNAUTAIRE MENYANGOUA / A",
              "voters": 206
            }
          ],
          "DJENDE II": [
            {
              "station": "E P DJENDE III / A",
              "voters": 113
            }
          ],
          "DOUMAINTANG": [
            {
              "station": "E,P DOUMAINTANG / A",
              "voters": 251
            },
            {
              "station": "E,P DOUMAINTANG / B",
              "voters": 59
            },
            {
              "station": "E P NGOMDOUMA II / A",
              "voters": 201
            },
            {
              "station": "LYCEE CLASSIQUE DE DOUMAINTANG / A",
              "voters": 383
            },
            {
              "station": "ECOLE BILINGUE DOUMAINTANG / A",
              "voters": 114
            }
          ],
          "KABILI": [
            {
              "station": "HANGAR PUBLIC KABILI / A",
              "voters": 99
            }
          ],
          "KOUAMBANG 1": [
            {
              "station": "E P KOUAMBANG 1 / A",
              "voters": 125
            }
          ],
          "KOUAMBANG II": [
            {
              "station": "EXPLANADE KOUAMBANG II / A",
              "voters": 77
            }
          ],
          "KOUAMBANG III": [
            {
              "station": "EXPLANADE KOUAMBANG III / A",
              "voters": 68
            }
          ],
          "MBAGUEMPAL": [
            {
              "station": "FOYER COMMUNAUTAIRE MBAGUEMPAL / A",
              "voters": 176
            }
          ],
          "MBALENGUE": [
            {
              "station": "FOYER COMMUNAUTAIRE MBALENGUE / A",
              "voters": 142
            }
          ],
          "MBAME I": [
            {
              "station": "FOYER COMMUNAUTAIRE MBAME I / A",
              "voters": 100
            }
          ],
          "MBAME II": [
            {
              "station": "EXPLANADE MBAME II / A",
              "voters": 73
            }
          ],
          "MBANGHAKOU": [
            {
              "station": "FOYER COMMUNAUTAIRE MBANGHAKOU / A",
              "voters": 72
            }
          ],
          "MENDJIME I": [
            {
              "station": "FOYER COMMUNAUTAIRE MENDJIME I / A",
              "voters": 86
            }
          ],
          "MENDJIME II": [
            {
              "station": "EXPLANADE MENDJIME II / A",
              "voters": 79
            }
          ],
          "NGANDAME": [
            {
              "station": "FOYER COMMUNAUTAIRE NGANDAME / A",
              "voters": 175
            }
          ],
          "NGODOMOU": [
            {
              "station": "E P NGODOMOU / A",
              "voters": 52
            }
          ],
          "NGOMDOUMA I": [
            {
              "station": "FOYER COMMUNAUTAIRE NGOMDOUMA I / A",
              "voters": 124
            }
          ],
          "NGOMDOUMA II": [
            {
              "station": "E P NGOMDOUMA II / A",
              "voters": 201
            }
          ],
          "NKONGSIMBANG II": [
            {
              "station": "FOYER COMMUNAUTAIRE NKONGSIMBANG / A",
              "voters": 111
            },
            {
              "station": "HANGAR PUBLIC NKONGSIMBANG II / A",
              "voters": 62
            }
          ],
          "OULBIAM": [
            {
              "station": "E P OULBIAM / A",
              "voters": 80
            }
          ],
          "OULDIK 1": [
            {
              "station": "FOYER COMMUNAUTAIRE OULDIK 1 / A",
              "voters": 109
            }
          ],
          "OULDIK II": [
            {
              "station": "FOYER COMMUNAUTAIRE OULDIK 1 / A",
              "voters": 109
            },
            {
              "station": "FOYER COMMUNAUTAIRE OULDIK II / A",
              "voters": 164
            }
          ],
          "SALLE I": [
            {
              "station": "HANGAR PUBLIC SALLE 1 / A",
              "voters": 140
            }
          ],
          "SALLE II": [
            {
              "station": "EXPLANADE SALLE II / A",
              "voters": 82
            }
          ],
          "SEGUELENDOM": [
            {
              "station": "FOYER COMMUNAUTAIRE SEGUELENDOM / A",
              "voters": 127
            }
          ]
        },
        "DOUME": {
          "AMBAKA": [
            {
              "station": "E P AMBAKATA",
              "voters": 135
            }
          ],
          "AYENE": [
            {
              "station": "FERME MATIGNON / A",
              "voters": 127
            }
          ],
          "MALA": [
            {
              "station": "FERME MATIGNON / A",
              "voters": 127
            },
            {
              "station": "EP DE MALA / A",
              "voters": 103
            }
          ],
          "BAYONG I": [
            {
              "station": "FOYER COMMUNAUTAIRE BAYONG 1 / A",
              "voters": 62
            }
          ],
          "BAYONG III": [
            {
              "station": "FOYER COMMUNAUTAIRE BAYONG III / A",
              "voters": 74
            }
          ],
          "BAYONG IV": [
            {
              "station": "E P BAYONG IV / A",
              "voters": 55
            }
          ],
          "BAYONG V": [
            {
              "station": "HANGAR PUBLIC BAYONG V / A",
              "voters": 82
            }
          ],
          "BAYONG VI": [
            {
              "station": "FOYER COMMUNAUTAIRE BAYONG VI / A",
              "voters": 48
            }
          ],
          "BAYONG VII": [
            {
              "station": "FOYER COMMUNAUTAIRE BAYONG VII / A",
              "voters": 55
            }
          ],
          "BENT": [
            {
              "station": "FOYER COMMUNAUTAIRE BENT / A",
              "voters": 192
            }
          ],
          "BIGOTSA": [
            {
              "station": "FOYER COMMUNAUTAIRE BIGOTSA / A",
              "voters": 79
            }
          ],
          "BIZIGA": [
            {
              "station": "HANGAR PUBLIC BIZIGA / A",
              "voters": 42
            }
          ],
          "DJENDE II": [
            {
              "station": "HANGAR PUBLIC BIZIGA / A",
              "voters": 42
            },
            {
              "station": "E P DJENDE II / A",
              "voters": 175
            }
          ],
          "BOUMPIAL": [
            {
              "station": "FOYER COMMUNAUTAIRE BOUMPIAL / A",
              "voters": 243
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "SAR - DOUME / A",
              "voters": 186
            }
          ],
          "CAMP PYGMEE BONANDO": [
            {
              "station": "E P BONANDO / A",
              "voters": 218
            }
          ],
          "PETIT BANANDO": [
            {
              "station": "E P BONANDO / A",
              "voters": 218
            },
            {
              "station": "CENTRE DE SANTE DE BONANDO / A",
              "voters": 197
            }
          ],
          "DJAGLASSI": [
            {
              "station": "ECOLE PUBLIQUE DJAGLASSI / A",
              "voters": 332
            }
          ],
          "DJAMONOMINE": [
            {
              "station": "FOYER COMMUNAUTAIRE DJAMONOMINE / A",
              "voters": 95
            }
          ],
          "DOUME FORTIN": [
            {
              "station": "ECOLE MATERNELLE BILINGUE DE DOUME / A",
              "voters": 292
            },
            {
              "station": "ECOLE MATERNELLE BILINGUE DE DOUME / B",
              "voters": 195
            }
          ],
          "GOUMBEGERON": [
            {
              "station": "E P GOUMBEGERON / A",
              "voters": 246
            }
          ],
          "GRAND BAGO": [
            {
              "station": "FOYER COMMUNAUTAIRE BAGO / A",
              "voters": 70
            }
          ],
          "GRAND BONANDO": [
            {
              "station": "CENTRE DE SANTE DE BONANDO / A",
              "voters": 197
            }
          ],
          "GRAND SIBITA": [
            {
              "station": "FOYER COMMUNAUTAIRE SIBITA / A",
              "voters": 219
            }
          ],
          "HAOUSSA": [
            {
              "station": "HANGAR PUBLIC HAOUSSA / A",
              "voters": 183
            }
          ],
          "KEMPONG": [
            {
              "station": "FOYER COMMUNAUTAIRE KEMPONG / A",
              "voters": 234
            }
          ],
          "KOBILA": [
            {
              "station": "E P KOBILA / A",
              "voters": 243
            }
          ],
          "LOUMBOU": [
            {
              "station": "FOYER COMMUNAUTAIRE LOUMBOU / A",
              "voters": 265
            }
          ],
          "MAMPANG AFIA": [
            {
              "station": "SODECAO / A",
              "voters": 136
            }
          ],
          "MAMPANG BODOMO": [
            {
              "station": "ANCIENNE USINE CFSO / A",
              "voters": 180
            }
          ],
          "MAMPANG ECOLE": [
            {
              "station": "E P MAMPANG / A",
              "voters": 170
            }
          ],
          "MAMPANG VILLAGE": [
            {
              "station": "E P MAMPANG / A",
              "voters": 170
            },
            {
              "station": "HANGAR PUBLIC MAMPANG / A",
              "voters": 188
            }
          ],
          "MBAMA I": [
            {
              "station": "HANGAR PUBLIC MBAMA 1 / A",
              "voters": 239
            },
            {
              "station": "HANGAR PUBLIC MBAMA II / A",
              "voters": 285
            }
          ],
          "MBAMA II": [
            {
              "station": "HANGAR PUBLIC MBAMA II / A",
              "voters": 285
            }
          ],
          "MISSION CATHOLIQUE": [
            {
              "station": "HANGAR PUBLIC MBAMA II / A",
              "voters": 285
            }
          ],
          "MBAMA III": [
            {
              "station": "HANGAR PUBLIC MBAMA III / A",
              "voters": 277
            }
          ],
          "MBAMA IV": [
            {
              "station": "HANGAR PUBLIC MBAMA IV / A",
              "voters": 156
            }
          ],
          "MBAMA V": [
            {
              "station": "E P MBAMA V / A",
              "voters": 174
            }
          ],
          "MBAMA VI": [
            {
              "station": "HANGAR PUBLIC MBAMA VI / A",
              "voters": 116
            }
          ],
          "MENDIM": [
            {
              "station": "FOYER COMMUNAUTAIRE MENDIM / A",
              "voters": 161
            }
          ],
          "MOTCHEBOUM CAMP MILITAIRE": [
            {
              "station": "ECOLE MATERNELLE DU CAMP MILITAIRE / A",
              "voters": 68
            },
            {
              "station": "E P MOTCHEBOUM / A",
              "voters": 200
            }
          ],
          "MOTCHEBOUM VILLAGE": [
            {
              "station": "E P MOTCHEBOUM / A",
              "voters": 200
            }
          ],
          "NGOULAMAN": [
            {
              "station": "FOYER COMMUNAUTAIRE NGOULAMAN / A",
              "voters": 109
            }
          ],
          "NKOLESSON": [
            {
              "station": "HANGAR PUBLIC NKOLESSONG / A",
              "voters": 131
            }
          ],
          "NKOUM": [
            {
              "station": "FOYER COMMUNAUTAIRE NKOUM / A",
              "voters": 305
            }
          ],
          "OUAMA": [
            {
              "station": "HANGAR PUBLIC OUAMA / A",
              "voters": 94
            }
          ],
          "OULMENDAMBA": [
            {
              "station": "FOYER COMMUNAUTAIRE OULMENDAMBA / A",
              "voters": 93
            }
          ],
          "PAKI": [
            {
              "station": "EP PAKI / A",
              "voters": 303
            },
            {
              "station": "EP PAKI / B",
              "voters": 240
            }
          ],
          "PETIT BAGO": [
            {
              "station": "E P PETIT BAGO / A",
              "voters": 92
            }
          ],
          "PETIT SIBITA": [
            {
              "station": "HANGAR PUBLIC PETIT SIBITA / A",
              "voters": 91
            }
          ],
          "DOUME CENTRE": [
            {
              "station": "EP DOUME GROUPE II / A",
              "voters": 196
            },
            {
              "station": "EP DOUME GROUPE II / B",
              "voters": 214
            },
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 301
            },
            {
              "station": "LYCEE BILINGUE / B",
              "voters": 301
            }
          ],
          "DOUME PLATEAU": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 301
            },
            {
              "station": "LYCEE BILINGUE / B",
              "voters": 301
            }
          ],
          "BAYONG II": [
            {
              "station": "EP BAYONG II / A",
              "voters": 108
            }
          ]
        },
        "LOMIE": {
          "ABAKOUM": [
            {
              "station": "FOYER COMMUNAUTAIRE DJEBE / A",
              "voters": 257
            }
          ],
          "DJEBE": [
            {
              "station": "FOYER COMMUNAUTAIRE DJEBE / A",
              "voters": 257
            }
          ],
          "BAMBA NKOLVOLAN": [
            {
              "station": "FOYER COMMUNAUTAIRE ABIÈRE",
              "voters": 363
            }
          ],
          "NDJOUKOULOSSOU": [
            {
              "station": "FOYER COMMUNAUTAIRE ABIÈRE",
              "voters": 363
            }
          ],
          "PANA": [
            {
              "station": "FOYER COMMUNAUTAIRE ABIÈRE",
              "voters": 363
            }
          ],
          "ACHIP I": [
            {
              "station": "FOYER COMMUNAUTAIRE MEKA / A",
              "voters": 107
            }
          ],
          "MEKA": [
            {
              "station": "FOYER COMMUNAUTAIRE MEKA / A",
              "voters": 107
            }
          ],
          "NTAMI": [
            {
              "station": "FOYER COMMUNAUTAIRE MEKA / A",
              "voters": 107
            }
          ],
          "ACHIP II": [
            {
              "station": "ECOLE PUBLIQUE ACHIP II / A",
              "voters": 65
            }
          ],
          "ADJELA": [
            {
              "station": "ECOLE PUBLIQUE ADJELA / A",
              "voters": 245
            },
            {
              "station": "ECOLE PUBLIQUE ADJELA / B",
              "voters": 344
            }
          ],
          "DJOLEMPOUM": [
            {
              "station": "ECOLE PUBLIQUE ADJELA / A",
              "voters": 245
            },
            {
              "station": "ECOLE PUBLIQUE ADJELA / B",
              "voters": 344
            }
          ],
          "NGOULMEKONG": [
            {
              "station": "ECOLE PUBLIQUE ADJELA / A",
              "voters": 245
            },
            {
              "station": "ECOLE PUBLIQUE ADJELA / B",
              "voters": 344
            },
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / A",
              "voters": 233
            },
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / B",
              "voters": 261
            }
          ],
          "ALAT MAKAY": [
            {
              "station": "FOYER COMMUNAUTAIRE ALAT MAKAY / A",
              "voters": 195
            }
          ],
          "ALAT MEIBORO": [
            {
              "station": "FOYER COMMUNAUTAIRE ALAT MAKAY / A",
              "voters": 195
            }
          ],
          "ALAT NDJOUM AFOUP": [
            {
              "station": "FOYER COMMUNAUTAIRE ALAT MAKAY / A",
              "voters": 195
            }
          ],
          "AZEM": [
            {
              "station": "FOYER COMMUNAUTAIRE ALAT MAKAY / A",
              "voters": 195
            }
          ],
          "MVOUTSI": [
            {
              "station": "FOYER COMMUNAUTAIRE ALAT MAKAY / A",
              "voters": 195
            }
          ],
          "BAPILE": [
            {
              "station": "FOYER COMMUNAUTAIRE BAPILE / A",
              "voters": 151
            }
          ],
          "DJOANDJILA": [
            {
              "station": "FOYER COMMUNAUTAIRE BAPILE / A",
              "voters": 151
            }
          ],
          "BIBA I": [
            {
              "station": "FOYER COMMUNAUTAIRE BIBA I / A",
              "voters": 33
            }
          ],
          "BIBA II": [
            {
              "station": "FOYER COMMUNAUTAIRE BIBA II / A",
              "voters": 91
            }
          ],
          "CENTRE COMMERCIAL": [
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / A",
              "voters": 233
            },
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / B",
              "voters": 261
            }
          ],
          "QUARTIER NEWTON": [
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / A",
              "voters": 233
            },
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / B",
              "voters": 261
            },
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / A",
              "voters": 287
            },
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / B",
              "voters": 156
            }
          ],
          "QUARTIER NZIME ABOUO": [
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / A",
              "voters": 233
            },
            {
              "station": "ANCIENNE MAIRIE DE LOMIE / B",
              "voters": 261
            }
          ],
          "DJENOU": [
            {
              "station": "ECOLE PUBLIQUE DJENOU / A",
              "voters": 220
            }
          ],
          "DJOAMEODJOH": [
            {
              "station": "ECOLE PUBLIQUE DJOAMEODJOH / A",
              "voters": 111
            }
          ],
          "DJOUNTAM": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOUNTAM / A",
              "voters": 191
            }
          ],
          "ESSOMO": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOUNTAM / A",
              "voters": 191
            }
          ],
          "DOUMZOH I": [
            {
              "station": "FOYER COMMUNAUTAIRE DOUMZOH I / A",
              "voters": 49
            }
          ],
          "DOUMZOH II": [
            {
              "station": "ECOLE PUBLIQUE NEMEYONG III / A",
              "voters": 94
            }
          ],
          "NEMEYONG III": [
            {
              "station": "ECOLE PUBLIQUE NEMEYONG III / A",
              "voters": 94
            }
          ],
          "NOLIENE": [
            {
              "station": "ECOLE PUBLIQUE NEMEYONG III / A",
              "voters": 94
            }
          ],
          "EKOM": [
            {
              "station": "FOYER COMMUNAUTAIRE EKOM / A",
              "voters": 209
            }
          ],
          "ESCHIEMBOR": [
            {
              "station": "ECOLE PUBLIQUE ESCHIEMBOR / A",
              "voters": 283
            }
          ],
          "MELENE": [
            {
              "station": "ECOLE PUBLIQUE ESCHIEMBOR / A",
              "voters": 283
            }
          ],
          "KASSARAFAM": [
            {
              "station": "FOYER COMMUNAUTAIRE KASSARAFAM / A",
              "voters": 58
            }
          ],
          "KONGO": [
            {
              "station": "ECOLE PUBLIQUE KONGO / A",
              "voters": 254
            }
          ],
          "MANG - KAKA": [
            {
              "station": "ECOLE PUBLIQUE MANG - KAKA / A",
              "voters": 72
            }
          ],
          "MANG - NZIME": [
            {
              "station": "FOYER COMMUNAUTAIRE MPANE KOBERA / A",
              "voters": 227
            }
          ],
          "MBANG": [
            {
              "station": "FOYER COMMUNAUTAIRE MPANE KOBERA / A",
              "voters": 227
            }
          ],
          "MPANE DITIEP": [
            {
              "station": "FOYER COMMUNAUTAIRE MPANE KOBERA / A",
              "voters": 227
            }
          ],
          "MPANE KOBERA": [
            {
              "station": "FOYER COMMUNAUTAIRE MPANE KOBERA / A",
              "voters": 227
            }
          ],
          "MATISSON": [
            {
              "station": "FOYER COMMUNAUTAIRE MEMPALE / A",
              "voters": 73
            }
          ],
          "MEMPALE": [
            {
              "station": "FOYER COMMUNAUTAIRE MEMPALE / A",
              "voters": 73
            }
          ],
          "MAYANG": [
            {
              "station": "ECOLE PUBLIQUE MAYANG / A",
              "voters": 143
            }
          ],
          "MEDJUH": [
            {
              "station": "ECOLE PUBLIQUE MEDJUH / A",
              "voters": 220
            }
          ],
          "MINGONGOL": [
            {
              "station": "C.E.S DE ZOULABOT I / A",
              "voters": 262
            }
          ],
          "ZOULABOT I": [
            {
              "station": "C.E.S DE ZOULABOT I / A",
              "voters": 262
            }
          ],
          "MESSASSEA": [
            {
              "station": "ECOLE CATHOLIQUE DE MESSASSEA / A",
              "voters": 200
            }
          ],
          "MINGONGOL I": [
            {
              "station": "ECOLE CATHOLIQUE DE MESSASSEA / A",
              "voters": 200
            }
          ],
          "MINGONGOL II": [
            {
              "station": "FOYER COMMUNAUTAIRE MINGONGOL II / A",
              "voters": 167
            }
          ],
          "MINTOUM": [
            {
              "station": "ECOLE PUBLIQUE MINTOUM / A",
              "voters": 253
            }
          ],
          "MOANGUE LE BOSQUET": [
            {
              "station": "ECOLE CATHOLIQUE DE MOANGUE LE BOSQUET / A",
              "voters": 355
            }
          ],
          "NEMEYONG I": [
            {
              "station": "FOYER COMMUNAUTAIRE NEMEYONG I / A",
              "voters": 100
            }
          ],
          "NGOLA": [
            {
              "station": "ECOLE PUBLIQUE NGOLA / A",
              "voters": 305
            }
          ],
          "NOMEDJOH": [
            {
              "station": "ECOLE PUBLIQUE NEMEDJOH / A",
              "voters": 350
            }
          ],
          "POHEMPOUM I": [
            {
              "station": "FOYER COMMUNAUTAIRE POHEMPOUM I / A",
              "voters": 186
            }
          ],
          "POHEMPOUM II": [
            {
              "station": "ECOLE PUBLIQUE POLYDOR / A",
              "voters": 161
            }
          ],
          "POLYDOR": [
            {
              "station": "ECOLE PUBLIQUE POLYDOR / A",
              "voters": 161
            }
          ],
          "QUARTIER HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE POLYDOR / A",
              "voters": 161
            },
            {
              "station": "MAIRIE DE LOMIE / A",
              "voters": 250
            },
            {
              "station": "MAIRIE DE LOMIE / B",
              "voters": 291
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "SALLE DES FETES DE LOMIE / A",
              "voters": 305
            },
            {
              "station": "TRIBUNAL DE LOMIE / A",
              "voters": 272
            }
          ],
          "QUARTIER MADOUMA": [
            {
              "station": "SALLE DES FETES DE LOMIE / A",
              "voters": 305
            }
          ],
          "QUARTIER EPELE": [
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / A",
              "voters": 287
            },
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / B",
              "voters": 156
            }
          ],
          "QUARTIER NYLON": [
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / A",
              "voters": 287
            },
            {
              "station": "ECOLE PUBLIQUE LOMIE VILLE / B",
              "voters": 156
            }
          ],
          "QUARTIER ETANG": [
            {
              "station": "TRIBUNAL DE LOMIE / A",
              "voters": 272
            }
          ],
          "QUARTIER KALAKOUTA": [
            {
              "station": "TRIBUNAL DE LOMIE / A",
              "voters": 272
            }
          ],
          "QUARTIER MELEN": [
            {
              "station": "TRIBUNAL DE LOMIE / A",
              "voters": 272
            }
          ],
          "QUARTIER OLENE": [
            {
              "station": "MAIRIE DE LOMIE / A",
              "voters": 250
            },
            {
              "station": "MAIRIE DE LOMIE / B",
              "voters": 291
            }
          ],
          "SEMBE": [
            {
              "station": "FOYER COMMUNAUTAIRE SEMBE / A",
              "voters": 116
            }
          ],
          "PAYO": [
            {
              "station": "ECOLE PUB. PAYO / A",
              "voters": 166
            }
          ]
        },
        "MBOMA": {
          "BANGOUE": [
            {
              "station": "ECOLE PUBLIQUE DE BANGOUE / A",
              "voters": 264
            }
          ],
          "BENGOND": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BENGOND / A",
              "voters": 227
            }
          ],
          "KAGNOL 1": [
            {
              "station": "HANGAR A PALABRE DE KAGNOL 1 / A",
              "voters": 113
            }
          ],
          "KAGNOL 2": [
            {
              "station": "ECOLE PUBLIQUE DE KAGNOL 2 / A",
              "voters": 258
            },
            {
              "station": "EM KAGNOL II / A",
              "voters": 108
            }
          ],
          "KAK 1": [
            {
              "station": "ECOLE PUBLIQUE DE KAGNOL 2 / A",
              "voters": 258
            },
            {
              "station": "ECOLE PUBLIQUE DE KAK 1 / A",
              "voters": 335
            }
          ],
          "KAK 2": [
            {
              "station": "ECOLE PUBLIQUE DE KAK 2 / A",
              "voters": 397
            }
          ],
          "MBAME 2": [
            {
              "station": "HANGAR A PALABRE DE MBAME 2 / A",
              "voters": 128
            }
          ],
          "MBOMA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MBOMA / A",
              "voters": 211
            },
            {
              "station": "MARCHE DE MBOMA / A",
              "voters": 300
            }
          ],
          "NGOAP": [
            {
              "station": "ECOLE PUBLIQUE DE NGOAP / A",
              "voters": 95
            },
            {
              "station": "FOYER COMMUNAUTAIRE DE NGOAP / A",
              "voters": 207
            }
          ],
          "NGOUMOU": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUMOU / A",
              "voters": 136
            },
            {
              "station": "FOYER COMMUNAUTAIRE DE NGOUMOU / A",
              "voters": 218
            }
          ],
          "NKAOULE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NKAOULE / A",
              "voters": 115
            }
          ],
          "NTSIMBOU": [
            {
              "station": "ECOLE PUBLIQUE DE NTSIMBOU / A",
              "voters": 304
            }
          ],
          "ZOUME": [
            {
              "station": "ECOLE PUBLIQUE DE ZOUME / A",
              "voters": 109
            },
            {
              "station": "FOYER COMMUNAUTAIRE DE ZOUME / A",
              "voters": 274
            }
          ],
          "ADJANE": [
            {
              "station": "ECOLE PUBLIQUE ADJANE / A",
              "voters": 63
            }
          ],
          "AKOK BIKELE": [
            {
              "station": "ECOLE PUBLIQUE AKOK BIKELE / A",
              "voters": 82
            }
          ],
          "AKOUMOU": [
            {
              "station": "ECOLE PUBLIQUE MESSAMENA VILLAGE / A",
              "voters": 274
            }
          ],
          "DJUEBLA (MESSAMENA VILLAGE)": [
            {
              "station": "ECOLE PUBLIQUE MESSAMENA VILLAGE / A",
              "voters": 274
            }
          ],
          "MESSAMENA VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE MESSAMENA VILLAGE / A",
              "voters": 274
            }
          ],
          "APADJOB": [
            {
              "station": "HANGAR A PALABLE APADJOB / A",
              "voters": 48
            }
          ],
          "ASSEA": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOLEMPOUM / A",
              "voters": 103
            }
          ],
          "DJOLEMPOUM": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOLEMPOUM / A",
              "voters": 103
            }
          ],
          "EKOH": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOLEMPOUM / A",
              "voters": 103
            }
          ],
          "BELAY": [
            {
              "station": "ECOLE PUBLIQUE BELAY / A",
              "voters": 152
            }
          ],
          "NKOUL": [
            {
              "station": "ECOLE PUBLIQUE BELAY / A",
              "voters": 152
            }
          ],
          "BIDJOMBO": [
            {
              "station": "ECOLE PUBLIQUE BIDJOMBO / A",
              "voters": 221
            }
          ],
          "BIFOLONE": [
            {
              "station": "FOYER COMMUNAUTAIRE EKOMO / A",
              "voters": 117
            }
          ],
          "EKOMO": [
            {
              "station": "FOYER COMMUNAUTAIRE EKOMO / A",
              "voters": 117
            }
          ],
          "KODJA": [
            {
              "station": "FOYER COMMUNAUTAIRE EKOMO / A",
              "voters": 117
            }
          ],
          "BINTSINA": [
            {
              "station": "ECOLE PUBLIQUE MEDJOH / A",
              "voters": 151
            }
          ],
          "MEDJOH": [
            {
              "station": "ECOLE PUBLIQUE MEDJOH / A",
              "voters": 151
            }
          ],
          "NGOULMINANGA": [
            {
              "station": "ECOLE PUBLIQUE MEDJOH / A",
              "voters": 151
            }
          ],
          "BISSOUA I": [
            {
              "station": "CENTRE DE SANTE BISSOUA 1 / A",
              "voters": 173
            }
          ],
          "BISSOUA II": [
            {
              "station": "HANGAR A PALABRE BISSOUA II / A",
              "voters": 77
            }
          ],
          "BITSIL": [
            {
              "station": "ECOLE PUBLIQUE BITSIL / A",
              "voters": 48
            }
          ],
          "MALEN": [
            {
              "station": "ECOLE PUBLIQUE BITSIL / A",
              "voters": 48
            }
          ],
          "BLANDJOCK": [
            {
              "station": "ECOLE PUBLIQUE BLANDJOCK / A",
              "voters": 122
            }
          ],
          "CENTRE MASSAMENA": [
            {
              "station": "HANGAR DU TRIBUNAL / A",
              "voters": 326
            },
            {
              "station": "HANGAR DU TRIBUNAL / B",
              "voters": 232
            },
            {
              "station": "HANGAR A PALABRE NYLON / A",
              "voters": 360
            },
            {
              "station": "HANGAR A PALABRE NYLON / B",
              "voters": 100
            }
          ],
          "DOUME": [
            {
              "station": "HANGAR DU TRIBUNAL / A",
              "voters": 326
            },
            {
              "station": "HANGAR DU TRIBUNAL / B",
              "voters": 232
            },
            {
              "station": "FOYER COMMUNAUTAIRE DOUME / A",
              "voters": 4
            }
          ],
          "NYLON": [
            {
              "station": "HANGAR DU TRIBUNAL / A",
              "voters": 326
            },
            {
              "station": "HANGAR DU TRIBUNAL / B",
              "voters": 232
            },
            {
              "station": "HANGAR A PALABRE NYLON / A",
              "voters": 360
            },
            {
              "station": "HANGAR A PALABRE NYLON / B",
              "voters": 100
            }
          ],
          "DIMPAM": [
            {
              "station": "ECOLE PUBLIQUE DIMPAM / A",
              "voters": 140
            }
          ],
          "DIOULA": [
            {
              "station": "HANGAR A PALABRE MATOLE / A",
              "voters": 85
            }
          ],
          "MATOLE": [
            {
              "station": "HANGAR A PALABRE MATOLE / A",
              "voters": 85
            }
          ],
          "DJA": [
            {
              "station": "ECOLE PUBLIQUE DJA / A",
              "voters": 75
            }
          ],
          "DJUEBLA (MALEN III)": [
            {
              "station": "HANGAR A PALABRE MALEN III / A",
              "voters": 112
            }
          ],
          "MALEN II": [
            {
              "station": "HANGAR A PALABRE MALEN III / A",
              "voters": 112
            }
          ],
          "NTSINA": [
            {
              "station": "HANGAR A PALABRE MALEN III / A",
              "voters": 112
            }
          ],
          "ZEMELE": [
            {
              "station": "HANGAR A PALABRE MALEN III / A",
              "voters": 112
            }
          ],
          "DOUMO MAMA": [
            {
              "station": "FOYER COMMUNAUTAIRE DOUMO-MAMA / A",
              "voters": 158
            }
          ],
          "DOUMO PIERRE": [
            {
              "station": "ECOLE PUBLIQUE DOUMO PIERRE / A",
              "voters": 62
            }
          ],
          "MIMPALA": [
            {
              "station": "ECOLE PUBLIQUE DOUMO PIERRE / A",
              "voters": 62
            }
          ],
          "EBADE": [
            {
              "station": "ECOLE PUBLIQUE EBADE / A",
              "voters": 179
            }
          ],
          "EBOMETOUM": [
            {
              "station": "FOPYER COMMUNAUTAIRE EBOMETOUM / A",
              "voters": 70
            }
          ],
          "ESCHOU": [
            {
              "station": "ECOLE PUBLIQUE ESCHOU / A",
              "voters": 64
            }
          ],
          "MADJUIH I": [
            {
              "station": "ECOLE PUBLIQUE ESCHOU / A",
              "voters": 64
            }
          ],
          "ESSIENGBOT": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE ESSIENGBOT / A",
              "voters": 150
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE MAYOS / A",
              "voters": 271
            }
          ],
          "ETCHU": [
            {
              "station": "ECOLE PUBLIQUE MALEULEU / A",
              "voters": 267
            }
          ],
          "ETOL": [
            {
              "station": "ECOLE PUBLIQUE MALEULEU / A",
              "voters": 267
            }
          ],
          "MALEN V": [
            {
              "station": "ECOLE PUBLIQUE MALEULEU / A",
              "voters": 267
            },
            {
              "station": "ECOLE PUBLIQUE MALEN V / A",
              "voters": 108
            }
          ],
          "MALEULEU": [
            {
              "station": "ECOLE PUBLIQUE MALEULEU / A",
              "voters": 267
            }
          ],
          "TEKSANG": [
            {
              "station": "ECOLE PUBLIQUE MALEULEU / A",
              "voters": 267
            }
          ],
          "KABILONE": [
            {
              "station": "FOYER COMMUNAUTAIRE NEMEYONG II / A",
              "voters": 116
            }
          ],
          "NEMEYONG I": [
            {
              "station": "FOYER COMMUNAUTAIRE NEMEYONG II / A",
              "voters": 116
            }
          ],
          "NTOUMZOCK": [
            {
              "station": "FOYER COMMUNAUTAIRE NEMEYONG II / A",
              "voters": 116
            }
          ],
          "KA-NORD": [
            {
              "station": "FOYER COMMUNAUTAIRE KA-NORD / A",
              "voters": 199
            }
          ],
          "KA-SUD": [
            {
              "station": "HANGAR A PALABLE KA-SUD / A",
              "voters": 109
            }
          ],
          "KOMPIA": [
            {
              "station": "ECOLE PUBLIQUE KOMPIA / A",
              "voters": 135
            }
          ],
          "KOUA": [
            {
              "station": "FOYER COMMUNAUTAIRE KOUA / A",
              "voters": 195
            }
          ],
          "KOUM": [
            {
              "station": "ECOLE PUBLIQUE KOUM / A",
              "voters": 120
            }
          ],
          "LABBA": [
            {
              "station": "ECOLE PUBLIQUE LABBA / A",
              "voters": 322
            }
          ],
          "MEBA": [
            {
              "station": "ECOLE PUBLIQUE LABBA / A",
              "voters": 322
            }
          ],
          "LAC": [
            {
              "station": "HANGAR A PALABRE LAC / A",
              "voters": 146
            }
          ],
          "LEKEK": [
            {
              "station": "HANGAR A PALABRE LEKEK / A",
              "voters": 60
            }
          ],
          "MADJUIH II": [
            {
              "station": "ECOLE PUBLIQUE MADJUIH II / A",
              "voters": 54
            }
          ],
          "MPANE": [
            {
              "station": "ECOLE PUBLIQUE MADJUIH II / A",
              "voters": 54
            }
          ],
          "NTIBONKEUH": [
            {
              "station": "ECOLE PUBLIQUE MALEN V / A",
              "voters": 108
            }
          ],
          "MAYOS": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE MAYOS / A",
              "voters": 271
            }
          ],
          "MBA": [
            {
              "station": "HANGAR A PALABRE MBA / A",
              "voters": 42
            }
          ],
          "MBOUMO": [
            {
              "station": "FOYER COMMUNAUTAIRE MBOUMO / A",
              "voters": 129
            },
            {
              "station": "HANGAR A PALABRE MPOMDOM / A",
              "voters": 56
            }
          ],
          "MBOUMO SERE": [
            {
              "station": "HANGAR A PALABRE MPOMDOM / A",
              "voters": 56
            }
          ],
          "MPOMDOM": [
            {
              "station": "HANGAR A PALABRE MPOMDOM / A",
              "voters": 56
            }
          ],
          "MIMBANG": [
            {
              "station": "ECOLE PUBLIQUE MIMBANG / A",
              "voters": 95
            }
          ],
          "MPAKI": [
            {
              "station": "HANGAR A PALABRE MPAKI / A",
              "voters": 69
            }
          ],
          "MPAND": [
            {
              "station": "ECOLE MATERNELLE MPAND / A",
              "voters": 149
            }
          ],
          "NGAM": [
            {
              "station": "ECOLE PUBLIQUE NGAM / A",
              "voters": 149
            }
          ],
          "NGOULMAKONG": [
            {
              "station": "ECOLE PUBLIQUE NGOULMAKONG / A",
              "voters": 178
            }
          ],
          "NKONZUH": [
            {
              "station": "FOYER COMMUNAUTAIRE NKONZUH / A",
              "voters": 94
            }
          ],
          "LEH": [
            {
              "station": "ECOLE PUBLIQUE NTOLLOCK I / A",
              "voters": 135
            }
          ],
          "NTOLLOCK I": [
            {
              "station": "ECOLE PUBLIQUE NTOLLOCK I / A",
              "voters": 135
            }
          ],
          "PALLISCO": [
            {
              "station": "ECOLE PUBLIQUE NTOLLOCK I / A",
              "voters": 135
            },
            {
              "station": "ECOLE PUBLIQUE PALLISCO / A",
              "voters": 84
            }
          ],
          "NTOLLOCK II": [
            {
              "station": "FOYER COMMUNAUTAIRE NTOLLOCK II / A",
              "voters": 210
            }
          ],
          "QUARTIER MOKOLO": [
            {
              "station": "ECOLE PUBLIQUE MOKOLO / A",
              "voters": 362
            }
          ],
          "SOLEYE": [
            {
              "station": "FOYER COMMUNAUTAIRE SOLEYE / A",
              "voters": 145
            }
          ],
          "TIANE": [
            {
              "station": "ECOLE PUBLIQUE TIANE / A",
              "voters": 106
            }
          ]
        },
        "MESSAMENA": {
          "LAKABO": [
            {
              "station": "EP LAKABO / A",
              "voters": 57
            }
          ],
          "MBOUMO": [
            {
              "station": "EP LAKABO / A",
              "voters": 57
            }
          ],
          "DJA ROUTE": [
            {
              "station": "EP DJA ROUTE / A",
              "voters": 102
            }
          ],
          "LEH": [
            {
              "station": "EP DJA ROUTE / A",
              "voters": 102
            },
            {
              "station": "ECOLE PUBLIQUE LEH / A",
              "voters": 123
            }
          ],
          "NGOULMAKONG": [
            {
              "station": "EP DJA ROUTE / A",
              "voters": 102
            }
          ],
          "BIFOLONE": [
            {
              "station": "FOYER COMMUNAUTAIRE BIFOLONE / A",
              "voters": 76
            }
          ],
          "KABILONE I": [
            {
              "station": "FOYER COMMUNAUTAIRE KABILONE 1 / A",
              "voters": 172
            }
          ]
        },
        "MESSOK": {
          "BAREKO": [
            {
              "station": "FOYER COMMUNAUTAIRE BAREKO / A",
              "voters": 65
            },
            {
              "station": "EP BAREKO / A",
              "voters": 172
            }
          ],
          "BEUH": [
            {
              "station": "FOYER COMMUNAUTAIRE BEUH / A",
              "voters": 84
            }
          ],
          "BIZAM": [
            {
              "station": "ECOLE PUBLIQUE BIZAM / A",
              "voters": 253
            }
          ],
          "KAMELONE": [
            {
              "station": "ECOLE PUBLIQUE KAMELONE / A",
              "voters": 129
            }
          ],
          "KARAGOUA": [
            {
              "station": "FOYER COMMUNAUTAIRE KARAGOUA / A",
              "voters": 109
            },
            {
              "station": "HANGAR A PALABRE KARAGOUA WW / A",
              "voters": 26
            }
          ],
          "KOUNGOULOU": [
            {
              "station": "ECOLE PUBLIQUE KOUNGOULOU / A",
              "voters": 131
            },
            {
              "station": "CEB DE KOUNGOULOU / A",
              "voters": 63
            }
          ],
          "LONG": [
            {
              "station": "FOYER COMMUNAUTAIRE LONG / A",
              "voters": 143
            }
          ],
          "MANAM": [
            {
              "station": "FOYER COMMUNAUTAIRE MANAM / A",
              "voters": 84
            }
          ],
          "MASSEN'S": [
            {
              "station": "FOYER COMMUNAUTAIRE MASSENS / A",
              "voters": 72
            }
          ],
          "MBENG-MBENG": [
            {
              "station": "FOYER COMMUNAUTAIRE MBENG-MBENG / A",
              "voters": 260
            }
          ],
          "MEBEM": [
            {
              "station": "FOYER COMMUNAUTAIRE MEBEM / A",
              "voters": 51
            }
          ],
          "MEKOUA": [
            {
              "station": "FOYER COMMUNAUTAIRE MEKOUA / A",
              "voters": 30
            }
          ],
          "MESSEA CAMPEMENT BAKA": [
            {
              "station": "ECOLE PUBLIQUE MESSEA / A",
              "voters": 163
            }
          ],
          "MESSEA CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE MESSEA / A",
              "voters": 163
            },
            {
              "station": "FOYER COMMUNAUTAIRE MESSEA / A",
              "voters": 92
            }
          ],
          "MESSOK CHATEAU": [
            {
              "station": "SALLE DES FETES MESSOK / A",
              "voters": 199
            }
          ],
          "MESSOK NJANGUE": [
            {
              "station": "CEB DE NJANGUE / A",
              "voters": 261
            }
          ],
          "MESSOK NJONG MELEN": [
            {
              "station": "ECOLE PUBLIQUE MESSOK / A",
              "voters": 193
            }
          ],
          "MINDOUMA": [
            {
              "station": "ECOLE PUBLIQUE MINDOUMA / A",
              "voters": 143
            },
            {
              "station": "HP MINDOUMA II / A",
              "voters": 106
            }
          ],
          "NKEADINAKO": [
            {
              "station": "FOYER COMMUNAUTAIRE NKEADINAKO / A",
              "voters": 117
            }
          ],
          "NKEADINAKO II": [
            {
              "station": "ECOLE PUBLIQUE NKEADINAKO / A",
              "voters": 113
            }
          ],
          "NKOAKOM CHEFFERIE": [
            {
              "station": "FOYER COMMUNAUTAIRE NKOAKOM / A",
              "voters": 102
            }
          ],
          "NKOAKOM ECOLE": [
            {
              "station": "ECOLE PUBLIQUE NKOAKOM / A",
              "voters": 124
            }
          ],
          "YANEBOT": [
            {
              "station": "ECOLE PUBLIQUE YANEBOT / A",
              "voters": 96
            }
          ],
          "ZOADIBA": [
            {
              "station": "ECOLE PUBLIQUE ZOADIBA / A",
              "voters": 271
            }
          ],
          "ZOULABOT II": [
            {
              "station": "CENTRE DE SANTE INTEGRE ZOULABOT II / A",
              "voters": 104
            }
          ],
          "ADJELA BEUH": [
            {
              "station": "HANGAR A PALABRE ADJELA BEUH / A",
              "voters": 23
            }
          ],
          "MESSOK CENTRE": [
            {
              "station": "ECOLE CATHOLIQUE MESSOK / A",
              "voters": 316
            }
          ]
        },
        "MINDOUROU": {
          "AMPEL": [
            {
              "station": "ECOLE PUBLIQUE D'AMPEL / A",
              "voters": 343
            },
            {
              "station": "ECOLE PUBLIQUE D'AMPEL / B",
              "voters": 79
            }
          ],
          "BEDOUMO": [
            {
              "station": "ECOLE PUBLIQUE DE BEDOUMO / A",
              "voters": 265
            }
          ],
          "DIOULA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE DIOULA / A",
              "voters": 137
            }
          ],
          "DJOLEMPOUM": [
            {
              "station": "FOYER COMMUNAUTAIRE DE DJOLEMPOUM / A",
              "voters": 235
            }
          ],
          "DJOUYAYA": [
            {
              "station": "FOYER COMMUNAUTAIRE DE DJOUYAYA / A",
              "voters": 270
            }
          ],
          "ETSIEK": [
            {
              "station": "FOYER COMMUNAUTAIRE ETSIEK / A",
              "voters": 185
            }
          ],
          "KAGNOL": [
            {
              "station": "ECOLE PUBLIQUE DE KAGNOL / A",
              "voters": 110
            }
          ],
          "MALENE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE MALENE / A",
              "voters": 183
            }
          ],
          "MAYANG": [
            {
              "station": "ECOLE PUB. DE MIN. GROUPE II / A",
              "voters": 149
            },
            {
              "station": "EM DE MAYANG / A",
              "voters": 214
            }
          ],
          "MINDOUROU CENTRE": [
            {
              "station": "ECOLE PUB. DE MIN. GROUPE II / A",
              "voters": 149
            },
            {
              "station": "MAISON DE LA FEMME DE MINDOUROU / A",
              "voters": 353
            },
            {
              "station": "MAISON DE LA FEMME DE MINDOUROU / B",
              "voters": 298
            },
            {
              "station": "ECOLE PUB. DE MIN. GROUPE 1 / A",
              "voters": 323
            },
            {
              "station": "ECOLE PUB. DE MIN. GROUPE 1 / B",
              "voters": 297
            },
            {
              "station": "SOUS-PREFECTURE / A",
              "voters": 106
            }
          ],
          "MEDJOH": [
            {
              "station": "ECOLE PUBLIQUE DE MEDJOH / A",
              "voters": 286
            }
          ],
          "MINDOUROU ADMINISTRATIF": [
            {
              "station": "MAISON DE LA FEMME DE MINDOUROU / A",
              "voters": 353
            },
            {
              "station": "MAISON DE LA FEMME DE MINDOUROU / B",
              "voters": 298
            }
          ],
          "MINDOUROU NEMEYONG": [
            {
              "station": "FOYER COMMUNAUTAIRE NEMEYONG / A",
              "voters": 104
            }
          ],
          "MINDOUROU CAMP R/PALLISCO": [
            {
              "station": "ESPLANADE RADIO / A",
              "voters": 235
            }
          ],
          "NKOUAK": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUAK / A",
              "voters": 305
            }
          ],
          "NKOUL": [
            {
              "station": "FOYER COMMUNAUTAIRE NKOUL / A",
              "voters": 82
            }
          ],
          "NONGBWALA": [
            {
              "station": "ECOLE PUBLIQUE DE NONGBWALA / A",
              "voters": 283
            }
          ],
          "TONKLA": [
            {
              "station": "FOYER COMMUNAUTAIRE TONKLA / A",
              "voters": 122
            }
          ],
          "ZIENG ONYOUL-EDEN": [
            {
              "station": "ECOLE PUBLIQUE KALAMPING / A",
              "voters": 174
            }
          ]
        },
        "NGOYLA": {
          "ADJELA": [
            {
              "station": "CENTRE DE SANTE MABAM / A",
              "voters": 255
            }
          ],
          "MABAM": [
            {
              "station": "CENTRE DE SANTE MABAM / A",
              "voters": 255
            }
          ],
          "NKOLAKAY": [
            {
              "station": "CENTRE DE SANTE MABAM / A",
              "voters": 255
            }
          ],
          "NKONDONG II": [
            {
              "station": "CENTRE DE SANTE MABAM / A",
              "voters": 255
            }
          ],
          "ASSOUMDELE I": [
            {
              "station": "ECOLE PUBLIQUE MBALAM II / A",
              "voters": 152
            },
            {
              "station": "EP ASSOUMDELE II / A",
              "voters": 91
            }
          ],
          "MBALAM II": [
            {
              "station": "ECOLE PUBLIQUE MBALAM II / A",
              "voters": 152
            },
            {
              "station": "ECOLE PUBLIQUE MBALAM I / A",
              "voters": 193
            }
          ],
          "ASSOUMDELE II": [
            {
              "station": "HANGAR PUBLIC ASSOUMDELE III / A",
              "voters": 113
            },
            {
              "station": "EP ASSOUMDELE II / A",
              "voters": 91
            }
          ],
          "ASSOUMDELE III": [
            {
              "station": "HANGAR PUBLIC ASSOUMDELE III / A",
              "voters": 113
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "ECOLE PUBLIQUE NGOYLA / A",
              "voters": 118
            }
          ],
          "NGOYLA CENTRE": [
            {
              "station": "ECOLE PUBLIQUE NGOYLA / A",
              "voters": 118
            },
            {
              "station": "HANGAR PUBLIC LELENE / A",
              "voters": 99
            },
            {
              "station": "LYCEE NGOYLA / A",
              "voters": 309
            },
            {
              "station": "LYCEE NGOYLA / B",
              "voters": 166
            }
          ],
          "BAREKO": [
            {
              "station": "ECOLE PUBLIQUE DJADOM / A",
              "voters": 139
            }
          ],
          "DJADOM": [
            {
              "station": "ECOLE PUBLIQUE DJADOM / A",
              "voters": 139
            }
          ],
          "DOUMZOK": [
            {
              "station": "HANGAR PUBLIC DOUMZOK / A",
              "voters": 103
            }
          ],
          "ETEKESSANG": [
            {
              "station": "ECOLE PUBLIQUE ETEKESSANG / A",
              "voters": 145
            }
          ],
          "NDIMAKO": [
            {
              "station": "ECOLE PUBLIQUE ETEKESSANG / A",
              "voters": 145
            },
            {
              "station": "EP NDIMAKO / A",
              "voters": 151
            }
          ],
          "LAMSON": [
            {
              "station": "ECOLE PUBLIQUE LAMSON / A",
              "voters": 114
            }
          ],
          "LELENE": [
            {
              "station": "HANGAR PUBLIC LELENE / A",
              "voters": 99
            }
          ],
          "MBALAM I": [
            {
              "station": "ECOLE PUBLIQUE MBALAM I / A",
              "voters": 193
            },
            {
              "station": "HANGAR PUBLIC NKONDONG I / A",
              "voters": 98
            }
          ],
          "MESSOK-MESSOK": [
            {
              "station": "ECOLE PUBLIQUE MBALAM I / A",
              "voters": 193
            },
            {
              "station": "HANGAR PUBLIC NKONDONG I / A",
              "voters": 98
            },
            {
              "station": "HANGAR PUBLIC MESSOK MESSOK / A",
              "voters": 49
            }
          ],
          "NKONDONG I": [
            {
              "station": "ECOLE PUBLIQUE MBALAM I / A",
              "voters": 193
            },
            {
              "station": "HANGAR PUBLIC NKONDONG I / A",
              "voters": 98
            }
          ],
          "MOKOLO": [
            {
              "station": "CENTRE MEDICAL D'ARRONDISSEMENT MOKOLO / A",
              "voters": 237
            }
          ],
          "NGOYLA VILLAGE": [
            {
              "station": "CENTRE MEDICAL D'ARRONDISSEMENT MOKOLO / A",
              "voters": 237
            },
            {
              "station": "LYCEE NGOYLA / A",
              "voters": 309
            },
            {
              "station": "LYCEE NGOYLA / B",
              "voters": 166
            }
          ],
          "ZOULAMEYONG": [
            {
              "station": "LYCEE NGOYLA / A",
              "voters": 309
            },
            {
              "station": "LYCEE NGOYLA / B",
              "voters": 166
            }
          ],
          "MAKAMEKOUMA": [
            {
              "station": "ECOLE PUBLIQUE NTAM / A",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE NTAM / B",
              "voters": 363
            },
            {
              "station": "HANGAR PUBLIC MAKAMEKOUMA / A",
              "voters": 73
            }
          ],
          "NTAM": [
            {
              "station": "ECOLE PUBLIQUE NTAM / A",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE NTAM / B",
              "voters": 363
            }
          ],
          "ETA": [
            {
              "station": "HANGAR PUBLIC YANEBOT BEL AIR / A",
              "voters": 58
            },
            {
              "station": "HANGAR PUBLIC ETA CHEFFERIE / A",
              "voters": 48
            }
          ],
          "YANEBOT BEL AIR": [
            {
              "station": "HANGAR PUBLIC YANEBOT BEL AIR / A",
              "voters": 58
            }
          ],
          "YANEBOT BELLE VUE": [
            {
              "station": "HANGAR PUBLIC YANEBOT BEL AIR / A",
              "voters": 58
            }
          ],
          "ZOULABOT I": [
            {
              "station": "HANGAR PUBLIC ZOULABOT 1 / A",
              "voters": 88
            }
          ],
          "ADEMEGOALA": [
            {
              "station": "ECOLE MARTERNELLE D'ADEMEGOALA / A",
              "voters": 162
            }
          ],
          "AFALON": [
            {
              "station": "FOYER COMMUNAUTAIRE D'IMBET / A",
              "voters": 192
            }
          ],
          "IMBET": [
            {
              "station": "FOYER COMMUNAUTAIRE D'IMBET / A",
              "voters": 192
            }
          ],
          "AKOSSA": [
            {
              "station": "HANGAR A PALABRE D'AKOSSA / A",
              "voters": 135
            }
          ],
          "AMINEMEKOUND": [
            {
              "station": "ECOLE PUBLIQUE D'AMINEMEKOUND / A",
              "voters": 209
            }
          ],
          "ANKOUANDE": [
            {
              "station": "HANGAR A PALABRE D'ANKOUANDE / A",
              "voters": 72
            }
          ],
          "AZOMEKOUT": [
            {
              "station": "ECOLE PUBLIQUE AZOMEKOUT / A",
              "voters": 384
            },
            {
              "station": "ECOLE PUBLIQUE AZOMEKOUT / B",
              "voters": 47
            }
          ],
          "BADOUMA II": [
            {
              "station": "ECOLE PUBLIQUE BADOUMA II / A",
              "voters": 91
            }
          ],
          "BAMELAP": [
            {
              "station": "HANGAR A PALABRE DE BAMELAP / A",
              "voters": 70
            }
          ],
          "BIKA": [
            {
              "station": "C.E.S BIKA / A",
              "voters": 232
            }
          ],
          "BILA": [
            {
              "station": "ECOLE PUBLIQUE DE BILA / A",
              "voters": 172
            }
          ],
          "BOELA": [
            {
              "station": "HANGAR A PALABRE DE BOELA / A",
              "voters": 131
            }
          ],
          "DJAMBELE": [
            {
              "station": "ECOLE PUBLIQUE DJAMBELE / A",
              "voters": 130
            }
          ],
          "EBAH": [
            {
              "station": "ECOLE PUBLIQUE D'EBAH / A",
              "voters": 205
            }
          ],
          "EFOULAN": [
            {
              "station": "HANGAR A PALABRE D'EFOULAN / A",
              "voters": 118
            }
          ],
          "EKPWASSONG 1": [
            {
              "station": "ECOLE PUBLIQUE EKPWASSONG 1 / A",
              "voters": 204
            }
          ],
          "EKPWASSONG II": [
            {
              "station": "ECOLE PUBLIQUE EKPWASSONG II / A",
              "voters": 160
            }
          ],
          "ELONO": [
            {
              "station": "LYCEE CLASSIQUE DE NKA / A",
              "voters": 264
            }
          ],
          "AKILBENZA": [
            {
              "station": "HANGAR A PALABRE D'EZAMEE I / A",
              "voters": 98
            }
          ],
          "EZAMBE I": [
            {
              "station": "HANGAR A PALABRE D'EZAMEE I / A",
              "voters": 98
            }
          ],
          "EZAMBE II": [
            {
              "station": "HANGAR A PALABRE D'EZAMEE I / A",
              "voters": 98
            },
            {
              "station": "ECOLE PUBLIQUE D'EZAMEE II / A",
              "voters": 51
            }
          ],
          "EZAMEE I": [
            {
              "station": "ECOLE PUBLIQUE D'EZAMEE II / A",
              "voters": 51
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / A",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / B",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / C",
              "voters": 364
            }
          ],
          "TEXAS": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / A",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / B",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / C",
              "voters": 364
            }
          ],
          "ZAPI": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / A",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / B",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NKA / C",
              "voters": 364
            }
          ],
          "KAK III": [
            {
              "station": "ECOLE PUBLIQUE DE KAK III / A",
              "voters": 106
            }
          ],
          "KAP": [
            {
              "station": "HANGAR A PALABRE KAP / A",
              "voters": 66
            }
          ],
          "KOSMADJI I": [
            {
              "station": "HANGAR A PALABRE DE KOSMADIJI 1 / A",
              "voters": 118
            }
          ],
          "MBEGUE": [
            {
              "station": "HANGAR A PALABRE DE KOSMADIJI 1 / A",
              "voters": 118
            }
          ],
          "KOUAMBANG II": [
            {
              "station": "HANGAR A PALABRE KOUAMBANG II / A",
              "voters": 139
            }
          ]
        },
        "NGUELEMENDOUKA": {
          "": [
            {
              "station": "HANGAR A PALABRE KOUAMBANG Ill / A KOUAMBANG II!",
              "voters": 104
            },
            {
              "station": "HANGAR A PALABRE KOUMBAMBANG / A KOUMBAMBANG",
              "voters": 124
            },
            {
              "station": "ECOLE PUBLIQUE LAMBA / A LAMBA",
              "voters": 177
            },
            {
              "station": "ECOLE PUBLIQUE LOULOU / A LOULOU",
              "voters": 153
            },
            {
              "station": "ECOLE PUBLIQUE MEBI / À MEBI",
              "voters": 127
            },
            {
              "station": "HANGAR À PALABRE DE MPARAGNANG / À MPARAGNANG",
              "voters": 189
            },
            {
              "station": "CES MVANDA II / A MVANDA Il",
              "voters": 170
            },
            {
              "station": "HANGAR À PALABRE DE NGOMENANG / À NGOMENANG",
              "voters": 144
            },
            {
              "station": "ECOLE PUBLIQUE NGOUONG / A NGOUONG",
              "voters": 118
            },
            {
              "station": "HANGAR A PALABRE NKOLBANA II / A NKOLBANA II",
              "voters": 72
            },
            {
              "station": "ECOLE PUBLIQUE ZILI / À NYAMEGOZE",
              "voters": 35
            },
            {
              "station": "HANGAR A PALABRE DE OUEYA 1 / À OUEYA",
              "voters": 109
            },
            {
              "station": "ECOLE PUBLIQUE SAMBA / À SAMBA",
              "voters": 227
            },
            {
              "station": "ECOLE CATHOLIQUE NKA / A TSOLOU",
              "voters": 236
            },
            {
              "station": "ECOLE PUBLIQUE ZEMBE Il / A MAYOS",
              "voters": 129
            },
            {
              "station": "ECOLE PUBLIQUE DE ZILI / A ZiLI",
              "voters": 82
            },
            {
              "station": "ECOLE PUBLIQUE MALEOLEU / A DJEELA",
              "voters": 119
            },
            {
              "station": "HANGAR A PALABRE MASSIEL-MAKOK / A MASSIEL TEHMO",
              "voters": 93
            },
            {
              "station": "HANGAR A PALABRE MBOUNE / A MBOUNE",
              "voters": 41
            },
            {
              "station": "ECOLE PUBLIQUE NDJIBOT / A NDJIBOT",
              "voters": 210
            },
            {
              "station": "ECOLE PUBLIQUE NGOLA / A MALENE IV",
              "voters": 97
            },
            {
              "station": "ECOLE PUBLIQUE SOMALOMO / A ECOFAC",
              "voters": 324
            },
            {
              "station": "HANGAR A PALABRE MASSIEL TEHMO / A MASSIEL TEHMO",
              "voters": 37
            },
            {
              "station": "EP NKOLKOUA / A NKOLKOUA",
              "voters": 45
            },
            {
              "station": "EP MAKAK DJEUL / A MAKAK DJEUL",
              "voters": 56
            }
          ],
          "|": [
            {
              "station": "ECOLE PUBLIQUE MBANG 1 / A MBANG",
              "voters": 146
            },
            {
              "station": "HANGAR A PALABRE NKOLEKOUL / A MALENE",
              "voters": 96
            },
            {
              "station": "EP MALENE 1/A MALENE",
              "voters": 44
            }
          ],
          "/ A NKOLBANA | |": [
            {
              "station": "ECOLE PUBLIQUE NKOLBANA",
              "voters": 215
            }
          ]
        }
      },
      "KADEY": {
        "BATOURI": {
          "": [
            {
              "station": "EP NGUEMO / À ABENGANGA",
              "voters": 170
            },
            {
              "station": "DELEGATION ARRONDISSEMENT ADOUMBOUN",
              "voters": 307
            },
            {
              "station": "EP MBANGOU / À AKAKELE",
              "voters": 123
            },
            {
              "station": "EP NGUINDI / A AKOKANG",
              "voters": 238
            },
            {
              "station": "EP NGOURA Il / A AMEDJOME",
              "voters": 372
            },
            {
              "station": "EP ANOE / A ANOE",
              "voters": 166
            },
            {
              "station": "EP BANDONGOUE / À BANDONGOUE",
              "voters": 357
            },
            {
              "station": "EP BANDONGOUE / B BANDONGOUE",
              "voters": 104
            },
            {
              "station": "EP BANYOI/A BANYO 1",
              "voters": 98
            },
            {
              "station": "HANGAR PUBLIC MBONE / A BARIBANGUE",
              "voters": 319
            },
            {
              "station": "EP BELIMBAM / A BELIMBAM",
              "voters": 280
            },
            {
              "station": "EP BELIMBAM / B BELIMBAM",
              "voters": 73
            },
            {
              "station": "EP GADJI / A DOGBWO Il",
              "voters": 421
            },
            {
              "station": "EP GADJI / B DOGBWO II",
              "voters": 388
            },
            {
              "station": "EP GADJI/C DOGBWO II",
              "voters": 67
            },
            {
              "station": "HANGAR PUBLIC HOUPI / A HOUPI",
              "voters": 85
            },
            {
              "station": "BUREAU CAPAM KAMBELE III / A KAMBELE ll",
              "voters": 347
            },
            {
              "station": "BUREAU CAPAM KAMBELE Il /B KAMBELE lil",
              "voters": 267
            },
            {
              "station": "HANGAR PUBLIC MBOMBE PANA / A MBOMBE PANA",
              "voters": 127
            },
            {
              "station": "COMMUNE RURALE / A CAMP SONEL",
              "voters": 283
            },
            {
              "station": "ECOLE PRIMAIRE MOBE / A MOBE",
              "voters": 330
            },
            {
              "station": "ECOLE FRANCO-ARABE MOKOLO / B MOKOLO HAOUSSA",
              "voters": 267
            },
            {
              "station": "ECOLE FRANCO-ARABE MOKOLO / C MOKOLO HAOUSSA",
              "voters": 270
            },
            {
              "station": "ECOLE FRANCO-ARABE MOKOLO / D MOKOLO HAOUSSA",
              "voters": 181
            },
            {
              "station": "ECOLE MATERNELLE MOKOLO YOKO / A MOKOLO SABONGARI",
              "voters": 407
            },
            {
              "station": "ECOLE MATERNELLE MOKOLO YOKO /B MOKOLO SABONGARI",
              "voters": 412
            },
            {
              "station": "ECOLE MATERNELLE MOKOLO YOKO/ C MOKOLO SABONGARI",
              "voters": 362
            },
            {
              "station": "CES MONGONAM / A MONGONAM",
              "voters": 336
            },
            {
              "station": "EP NAMBALO / A NAMBALO",
              "voters": 198
            },
            {
              "station": "EP YOKO BROUSSE / A NDAM",
              "voters": 152
            },
            {
              "station": "ECOLE MATERNELLE NDEMBODIO / A NDEMBODIO",
              "voters": 360
            },
            {
              "station": "ECOLE MATERNELLE NDEMBODIO / B NDEMBODIO",
              "voters": 348
            },
            {
              "station": "HANGAR PUBLIC NDONDOUBE / À NDONDOUBE",
              "voters": 95
            },
            {
              "station": "HANGAR PUBLIC NGARI-NDEMBO / A NGARI DEMBO",
              "voters": 133
            },
            {
              "station": "EP NGBWAKO / A NGBWAKO",
              "voters": 378
            },
            {
              "station": "LYCEE BILINGUE BATOURI / A CAMP ELEVAGE",
              "voters": 402
            },
            {
              "station": "LYCEE BILINGUE BATOURI/B CAMP ELEVAGE",
              "voters": 340
            },
            {
              "station": "LYCEE BILINGUE BATOURI / C CAMP ELEVAGE",
              "voters": 323
            },
            {
              "station": "LYCEE BILINGUE BATOURI / D CAMP ELEVAGE",
              "voters": 353
            },
            {
              "station": "LYCEE BILINGUE BATOURI / E CAMP ELEVAGE",
              "voters": 459
            },
            {
              "station": "EP TAPARE / A TAPARE",
              "voters": 227
            },
            {
              "station": "EP TIKONDI / A TIKONDI",
              "voters": 264
            },
            {
              "station": "HANGAR PUBLIC TISSANDA / A TISSANDA",
              "voters": 36
            },
            {
              "station": "EP GAINA / À BARIBANGUE",
              "voters": 165
            },
            {
              "station": "COLLEGE ISLAMIQUE FRANCO ARABE DE KAMBO LEPI",
              "voters": 38
            },
            {
              "station": "ECOLE PUBLIQUE BELITA Il! / A BELITA lil",
              "voters": 52
            },
            {
              "station": "CENTRE PRE-SCOLAIRE BOUGOGO / A BOUGOGO",
              "voters": 74
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARTIN BATOURI / A CAMP MISSION",
              "voters": 363
            },
            {
              "station": "ECOLE CATHOLIQUE ST JEAN CAMP DENYS / CAMP DENIS",
              "voters": 399
            },
            {
              "station": "EP AVIATION / A AVIATION",
              "voters": 241
            },
            {
              "station": "EP NGANGAM / À GUETTE",
              "voters": 222
            },
            {
              "station": "EP NABOUBOU / A NABOUBOU",
              "voters": 174
            },
            {
              "station": "EP NADEGBE / A NADEGBE",
              "voters": 119
            },
            {
              "station": "EP NDONGMEMEE / A NDONGMEMBE",
              "voters": 88
            },
            {
              "station": "LYCEE BATOURI TRYPANO / A SCT",
              "voters": 204
            }
          ],
          "|": [
            {
              "station": "HANGAR PUBLIC DOGBWO I / A DOGBWO",
              "voters": 203
            },
            {
              "station": "EP KAMBELE 1/A KAMBELE",
              "voters": 322
            },
            {
              "station": "EP FIO/A BANYO",
              "voters": 135
            },
            {
              "station": "EP SANDAE / A DOGBWO",
              "voters": 260
            }
          ]
        },
        "KENTZOU": {
          "": [
            {
              "station": "TELECENTRE COMMUNAUTAIRE KENTZOU / ABATTOIR",
              "voters": 340
            },
            {
              "station": "TELECENTRE COMMUNAUTAIRE KENTZOU / E ABATTOIR",
              "voters": 357
            },
            {
              "station": "HANGAR PUBLIC BANDA / A BANDA",
              "voters": 122
            },
            {
              "station": "EP MBILE1/B BELIKOUNGOU",
              "voters": 149
            },
            {
              "station": "HANGAR PUBLIC BOMBE BAKARI / A BOMBE BAKARI",
              "voters": 65
            },
            {
              "station": "EP MBOUYE / À BOMBE MBENDO",
              "voters": 343
            },
            {
              "station": "HANGAR PUBLIC BOMBE SATO / A BOMBE SATO",
              "voters": 68
            },
            {
              "station": "EP KENTZOU / À",
              "voters": 301
            },
            {
              "station": "EP SANDIJI Il / A SANDJI 11",
              "voters": 116
            },
            {
              "station": "ECOLE CATHOLIQUE LOUISE LE MARCHAND QUARTIER MISSION CATHOLIQUE",
              "voters": 151
            },
            {
              "station": "COLLEGE CHRIST-ROI DE KENTZOU / B POLICE",
              "voters": 241
            }
          ]
        },
        "KETTE": {
          "": [
            {
              "station": "EP BEDOBO/B BEDOBO",
              "voters": 316
            },
            {
              "station": "EP BEKE CHANTIER / A BEKE CHANTIER",
              "voters": 292
            },
            {
              "station": "EP BEKE CHANTIER / B BEKE CHANTIER",
              "voters": 79
            },
            {
              "station": "LYCEE BILINGUE KETTE / C BETANIE",
              "voters": 365
            },
            {
              "station": "LYCEE BILINGUE KETTE / D BETANIE",
              "voters": 139
            },
            {
              "station": "ECOLE CATHOLIQUE ST LWANGA DE KETTE / BOBITA",
              "voters": 222
            },
            {
              "station": "ECOLE CATHOLIQUE ST LWANGA DE KETTE / BOBITA",
              "voters": 209
            },
            {
              "station": "EP KETTE/D",
              "voters": 180
            },
            {
              "station": "EP KOUMBE-TIKO / A KOUMBE-TIKO",
              "voters": 102
            },
            {
              "station": "EP OUNDJIKI / A OUNDJIKI",
              "voters": 151
            },
            {
              "station": "CENTRE SANTE INTEGRE TIMANGOLO / B TIMANGOLO",
              "voters": 52
            },
            {
              "station": "HANGAR PUBLIC TIKOLO / A TIKOLO",
              "voters": 68
            },
            {
              "station": "HANGAR CHEFFERIE TAOULE / A LINGBIM",
              "voters": 56
            },
            {
              "station": "HANGAR PUBLIC KPAWEYA / A KPAWEYA",
              "voters": 81
            },
            {
              "station": "FOYER COMMUNAUTAIRE KOSSO / A",
              "voters": 312
            },
            {
              "station": "EP AMOURE / A AMOURE",
              "voters": 60
            },
            {
              "station": "FOYER MUNICIPAL MBANG / A BAKASSI",
              "voters": 289
            },
            {
              "station": "FOYER MUNICIPAL MBANG / B BAKASSI",
              "voters": 299
            },
            {
              "station": "EP MBANG / A BAMENDA",
              "voters": 195
            },
            {
              "station": "FOYER COMMUNAUTAIRE BEMBOUTA / À BEMBOUTA",
              "voters": 92
            },
            {
              "station": "FOYER COMMUNAUTAIRE BIMBA / A BIMBA",
              "voters": 165
            },
            {
              "station": "FOYER COMMUNAUTAIRE BITOUALA / A BITOUALA",
              "voters": 153
            },
            {
              "station": "FOYER COMMUNAUTAIRE BOKENDIJA / A BOKENDJA",
              "voters": 82
            },
            {
              "station": "FOYER COMMUNAUTAIRE DJOUTH I / A DARD",
              "voters": 257
            },
            {
              "station": "EP DJAMPIEL / A DJAMPIEL",
              "voters": 318
            }
          ],
          "/ A BONABERI |": [
            {
              "station": "EP GBITI GROUPE",
              "voters": 332
            }
          ],
          "|": [
            {
              "station": "EP MAMAII/A MAMA",
              "voters": 354
            }
          ]
        },
        "MBANG": {
          "": [
            {
              "station": "FOYER COMMUNAUTAIRE DJOCKNEPOUM / A DJOCKNEPOUM",
              "voters": 119
            },
            {
              "station": "FOYER COMMUNAUTAIRE DJOUTH II / A DJOUTH II",
              "voters": 168
            },
            {
              "station": "FOYER COMMUNAUTAIRE MOLOUNDOU / À EBOUETE",
              "voters": 187
            },
            {
              "station": "FOYER COMMUNAUTAIRE KAGNOL II / A KAGNOL II",
              "voters": 252
            },
            {
              "station": "HANGAR CHEFFERIE KAGNOL II! / A KAGNOL III VILLAGE",
              "voters": 65
            },
            {
              "station": "HANGAR CHEFFERIE LILA NGBONG / A LILA NGBONG",
              "voters": 56
            },
            {
              "station": "HANGAR CHEFFERIE MOBAMBOU / A LIMPOYA",
              "voters": 84
            },
            {
              "station": "FOYER COMMUNAUTAIRE MAYOS / A MAYOS",
              "voters": 150
            },
            {
              "station": "EP MBAMA/ A MBAMA",
              "voters": 123
            },
            {
              "station": "HOPITAL BOUMDEL / A NYLON",
              "voters": 112
            },
            {
              "station": "CHEFFERIE NYLON II / A BOUMDEL",
              "voters": 359
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE DE KALAKUTA BOUMDEL",
              "voters": 488
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE DE KALAKUTA BOUMDEL",
              "voters": 398
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE DE KALAKUTA BOUMDEL",
              "voters": 222
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE D'ATSIECK / A ATSIECK",
              "voters": 254
            },
            {
              "station": "FOYER COMMUNAUTAIRE MOLOBO / A BONIS",
              "voters": 218
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE DE NGAO / À NGAO",
              "voters": 160
            },
            {
              "station": "HANGAR MARCHE MINDOUROU / B MINDOUROU MARCHE",
              "voters": 48
            },
            {
              "station": "EP SANGALE / A NDANKO SOPELE",
              "voters": 221
            },
            {
              "station": "HANGAR PUBLIC NGOTTO /B NGOTTO CENTRE",
              "voters": 84
            },
            {
              "station": "EP YOLA/B YOLA",
              "voters": 305
            },
            {
              "station": "HANGAR PUBLIC GAVELA / À GAVELA",
              "voters": 78
            },
            {
              "station": "EP LYSSEI / A LISSEI",
              "voters": 194
            },
            {
              "station": "ECOLE PUBLIQUE BABETHO / A",
              "voters": 58
            },
            {
              "station": "ECOLE PUBLIQUE BELLO / A",
              "voters": 201
            },
            {
              "station": "ECOLE PUBLIQUE BITAM-YEN / A BITAM-YEN",
              "voters": 203
            },
            {
              "station": "ECOLE PUBLIQUE DEMI / A DEMI",
              "voters": 128
            },
            {
              "station": "ECOLE PUBLIQUE DIMAKO II / A DIMAKO Il",
              "voters": 64
            },
            {
              "station": "ECOLE PUBLIQUE GODANGA / A GODANGA",
              "voters": 93
            },
            {
              "station": "ECOLE PUBLIQUE GOUNTE / A GOUNTE",
              "voters": 199
            },
            {
              "station": "HANGAR PUBLIC KOBA II / A KOBA Il",
              "voters": 174
            },
            {
              "station": "ECOLE PUBLIQUE NGOUTOU / A KONGA",
              "voters": 71
            },
            {
              "station": "HANGAR PUBLIC SANGOE / A LELO",
              "voters": 73
            },
            {
              "station": "ECOLE PUBLIQUE MBEM-BIYO / A MBEM-BIYO",
              "voters": 98
            },
            {
              "station": "HANGAR PUBLIC NDEMNAM / A NDEMNAM",
              "voters": 124
            },
            {
              "station": "ECOLE PUBLIQUE NDJASSI / A NDJASSI",
              "voters": 149
            },
            {
              "station": "HANGAR PUBLIC NDOUMBE / A NDOUMBE",
              "voters": 128
            },
            {
              "station": "ECOLE PUBLIQUE NGOULMEKONG / A NGOULMEKONG",
              "voters": 152
            },
            {
              "station": "ECOLE PUBLIQUE NYAMTIMBI / A NYAMTIMBI",
              "voters": 271
            },
            {
              "station": "HANGAR PUBLIC ZEMBELE / A ZEMBELE",
              "voters": 82
            },
            {
              "station": "HANGAR PUBLIC MBOUFOU / A",
              "voters": 59
            },
            {
              "station": "HANGAR PUBLIC NOL / A",
              "voters": 63
            },
            {
              "station": "HANGAR PUBLIC NYAMSSAMBO / À",
              "voters": 89
            },
            {
              "station": "HANGAR PUBLIC GOUNTE CARREFOUR / A FONA-MBILO",
              "voters": 85
            },
            {
              "station": "HANGAR PUBLIC LELO / A LELO",
              "voters": 48
            },
            {
              "station": "HANGAR PUBLIC KONGA / A KONGA",
              "voters": 50
            },
            {
              "station": "EP OUNSOUNOU / À BEBINAZOU",
              "voters": 80
            },
            {
              "station": "ANCIENNE SOUS PREFECTURE OULI / A BEGUIRO",
              "voters": 228
            },
            {
              "station": "EP NDAMBI Ii / A BEMBOULE",
              "voters": 158
            },
            {
              "station": "DISPENSAIRE OULI / A BOKOM DE OULI",
              "voters": 81
            },
            {
              "station": "HP BOUNOU-GBALI / A BOUNOU-GBALI",
              "voters": 134
            },
            {
              "station": "EP TOCKTOYO / À COMMUNAUTE BORORO",
              "voters": 342
            },
            {
              "station": "HANGAR PUBLIC TOCKTOYO / A COMMUNAUTE GBAYA Il",
              "voters": 292
            },
            {
              "station": "HANGAR PUBLIC TOCKTOYO /B COMMUNAUTE GBAYA Il",
              "voters": 299
            },
            {
              "station": "EP ZOUNGABONA / A ZOUNGABONA",
              "voters": 343
            },
            {
              "station": "MISSION CATHOLIQUE ADIAH / À ADIAH",
              "voters": 207
            },
            {
              "station": "ESPL CHEFFERIE AKOK MEKEL 1 / A AKOK MEKEL 1",
              "voters": 338
            },
            {
              "station": "CENTRE PRESCOLAIRE AVENIR / À AKOK MEKEL 1",
              "voters": 232
            },
            {
              "station": "SNEC CDE / A AKOK MEKEL 1",
              "voters": 361
            },
            {
              "station": "COORDINATION CAMRAIL / A BAMILEKE",
              "voters": 227
            },
            {
              "station": "EP BELABO VILLAGE / A BELABO VILLAGE",
              "voters": 335
            },
            {
              "station": "EP BOMBI / A BOMBI",
              "voters": 115
            },
            {
              "station": "DELEGATION AGRICULTURE / À BLOC SOCOPAO",
              "voters": 373
            },
            {
              "station": "DELEGATION AGRICULTURE / B BLOC SOCOPAO",
              "voters": 249
            },
            {
              "station": "HANGAR CHEFFERIE MEKOK MELONE / A BLOC SOCOPAO",
              "voters": 154
            },
            {
              "station": "EP DU CENTRE /A CLIMAT DE L'EST",
              "voters": 321
            },
            {
              "station": "EP DU CENTRE /C CLIMAT DE L'EST",
              "voters": 207
            },
            {
              "station": "EP DU CENTRE /D CLIMAT DE L'EST",
              "voters": 314
            },
            {
              "station": "EP DENG-DENG / À DENG-DENG",
              "voters": 252
            },
            {
              "station": "EP DENG-DENG /B DENG-DENG",
              "voters": 127
            },
            {
              "station": "HANGAR CHEFFERIE DIMONG / A DIMONG",
              "voters": 265
            },
            {
              "station": "ECOLE CATHOLIQUE DJANGANE / À DJANGANE",
              "voters": 232
            },
            {
              "station": "C.E.S DONDI/ A DONDI",
              "voters": 200
            },
            {
              "station": "FOYER COMMUNAUTAIRE EBAKA 1 / À EBAKA I",
              "voters": 199
            },
            {
              "station": "EP AKOK MEKEL I / A AKOK MEKEL 1",
              "voters": 326
            },
            {
              "station": "EP YOA/A EKAK",
              "voters": 67
            },
            {
              "station": "EP EKOMBITIE / A EKOMBITIE",
              "voters": 86
            },
            {
              "station": "CENTRE UNIVERSITAIRE / À ELOBI",
              "voters": 325
            }
          ],
          "|": [
            {
              "station": "FOYER COMMUNAUTAIRE MOMBEL I / A MOMBEL",
              "voters": 84
            },
            {
              "station": "ECOLE PRIMAIRE PUBLIQUE DE BANGUE 1 / A BANGUE",
              "voters": 126
            },
            {
              "station": "EP SOBOLO / A SOBOLO",
              "voters": 358
            }
          ],
          "/ A KOBA | |": [
            {
              "station": "ECOLE PUBLIQUE KOBA",
              "voters": 143
            }
          ]
        }
      },
      "LOM-ET-DJEREM": {
        "BELABO": {
          "": [
            {
              "station": "DELEGATION ELEVAGE / A ELOBI",
              "voters": 165
            },
            {
              "station": "HANGAR CHEFFERIE ESSAMIEM / A ESSAMIEM",
              "voters": 32
            },
            {
              "station": "EP ESSELEGUE / A ESSELEGUE",
              "voters": 141
            },
            {
              "station": "EP GOYOUM / A GOYOUM",
              "voters": 250
            },
            {
              "station": "EP GOYOUM/B GOYOUM",
              "voters": 242
            },
            {
              "station": "EP OUAMI/C HAMAN",
              "voters": 193
            },
            {
              "station": "HANGAR CHEFFERIE HONA / A HONA",
              "voters": 68
            },
            {
              "station": "EP KALBE /A KALBE",
              "voters": 47
            },
            {
              "station": "EP KOUNDI / A KOUNDI",
              "voters": 181
            },
            {
              "station": "HANGAR CHEFFERIE LOM II / A LOM II",
              "voters": 26
            },
            {
              "station": "EP SIKONDIJI / A LONDJEA",
              "voters": 55
            },
            {
              "station": "EP MAMBAYA / À MAMBAYA",
              "voters": 267
            },
            {
              "station": "EP NDOUMBA KANGA / A NDOUMBA KANGA",
              "voters": 169
            },
            {
              "station": "HANGAR CHEFFERIE NDOUMBA OLINGA / À NDOUMBA OLINGA",
              "voters": 155
            },
            {
              "station": "SAR/SM/ A OYACK",
              "voters": 351
            },
            {
              "station": "SAR/SM/B OYACK",
              "voters": 312
            },
            {
              "station": "SAR/SM / C OYACK",
              "voters": 319
            },
            {
              "station": "SAR/SM / D OYACK",
              "voters": 296
            },
            {
              "station": "INSPECTION EDUCATION DE BASE / A RESIDENTIEL",
              "voters": 354
            },
            {
              "station": "MISSION CATHOLIQUE SAKOUDI / A SAKOUDI",
              "voters": 52
            },
            {
              "station": "COMPLEXE SITRAFER / B SAPELLI",
              "voters": 76
            },
            {
              "station": "FOYER MUNICIPAL / A SAPELLI",
              "voters": 358
            },
            {
              "station": "EP VIALI/ A VIALI",
              "voters": 190
            },
            {
              "station": "EP WOUTCHABA / A WOUTCHABA",
              "voters": 156
            },
            {
              "station": "MISSION CATHOLIQUE YAMBENG / À KOUNDI",
              "voters": 144
            },
            {
              "station": "EP YANDA BOBILIS / A YANDA BOBILIS",
              "voters": 191
            },
            {
              "station": "HANGAR PUBLIC MBETHEN Il / A MBETHEN Il",
              "voters": 64
            },
            {
              "station": "ECOLE MATERNELLE HAMAN / A HAMAN",
              "voters": 121
            },
            {
              "station": "EP LENDI KAI-KAI / A LENDI KAI-KAI",
              "voters": 264
            },
            {
              "station": "ECOLE MATERNELLE CNPS / A BAMVELE",
              "voters": 286
            },
            {
              "station": "ECOLE MATERNELLE CNPS / B BAMVELE",
              "voters": 289
            },
            {
              "station": "ECOLE MATERNELLE CNPS / C BAMVELE",
              "voters": 237
            },
            {
              "station": "ECOLE MATERNELLE CNPS / D BAMVELE",
              "voters": 321
            },
            {
              "station": "COLLEGE ZUTOCHIE / C BIRPONDO",
              "voters": 203
            },
            {
              "station": "COLLEGE ZUTOCHIE / D BIRPONDO",
              "voters": 299
            },
            {
              "station": "RECETTE MUNICIPALE / A BODOMO",
              "voters": 307
            },
            {
              "station": "RECETTE MUNICIPALE / B BODOMO",
              "voters": 292
            },
            {
              "station": "RECETTE MUNICIPALE / C BODOMO",
              "voters": 366
            },
            {
              "station": "RECETTE MUNICIPALE / D BODOMO",
              "voters": 363
            },
            {
              "station": "RECETTE MUNICIPALE / F BODOMO",
              "voters": 299
            },
            {
              "station": "FOYER COMMUNAUTAIRE BONIS II / A BONIS Il",
              "voters": 347
            },
            {
              "station": "ESPLANADE EXPRESS UNION / A GAIMONA",
              "voters": 315
            },
            {
              "station": "ESPLANADE EXPRESS UNION / B GAIMONA",
              "voters": 313
            },
            {
              "station": "FOYER COMMUNAUTAIRE KOUME / A KOUME",
              "voters": 250
            },
            {
              "station": "GRAND SEMINAIRE / À KOUME BONIS",
              "voters": 340
            },
            {
              "station": "GRAND SEMINAIRE / C KOUME BONIS",
              "voters": 186
            },
            {
              "station": "GRAND SEMINAIRE / D KOUME BONIS",
              "voters": 371
            },
            {
              "station": "GRAND SEMINAIRE / E KOUME BONIS",
              "voters": 242
            },
            {
              "station": "EP KOUME GOFFI / A KOUME GOFFI",
              "voters": 300
            },
            {
              "station": "EP MADAGASCAR / A MADAGASCAR",
              "voters": 308
            },
            {
              "station": "EP MADAGASCAR / B MADAGASCAR",
              "voters": 331
            },
            {
              "station": "EP MADAGASCAR / C MADAGASCAR",
              "voters": 311
            },
            {
              "station": "EP MADAGASCAR / D MADAGASCAR",
              "voters": 315
            },
            {
              "station": "EP MADAGASCAR / E MADAGASCAR",
              "voters": 380
            }
          ],
          "|": [
            {
              "station": "EP MBAKI II / A MBAKI",
              "voters": 147
            },
            {
              "station": "EP BONIS 1 / A BONIS",
              "voters": 255
            }
          ],
          "/ A MBETHEN | |": [
            {
              "station": "EP MBETHEN",
              "voters": 179
            }
          ],
          "/ A MBAKI | |": [
            {
              "station": "HANGAR CHEFFERIE MBAKI",
              "voters": 53
            }
          ]
        },
        "BERTOUA": {
          "": [
            {
              "station": "EM ANNEXE / À MOKOLO 1",
              "voters": 249
            },
            {
              "station": "EM ANNEXE / H MOKOLO 1",
              "voters": 296
            },
            {
              "station": "EM ANNEXE / 1 MOKOLO 1",
              "voters": 139
            },
            {
              "station": "EP MOKOLO I1/B MOKOLO II",
              "voters": 323
            },
            {
              "station": "EP MOKOLO I1/C MOKOLO Il",
              "voters": 300
            },
            {
              "station": "EP MOKOLOII/E MOKOLO II",
              "voters": 310
            },
            {
              "station": "EP MOKOLO I/F MOKOLO II",
              "voters": 369
            },
            {
              "station": "EP MOKOLO Ill / A MOKOLO III",
              "voters": 302
            },
            {
              "station": "EP MOKOLO II /B MOKOLO III",
              "voters": 358
            },
            {
              "station": "CENTRE DE JEUNESSE / B NDOUAN",
              "voters": 215
            },
            {
              "station": "ECOLE FRANCO ARABE / B NDONGOFFI",
              "voters": 238
            },
            {
              "station": "EP NKOLBIKON 1/B NKOLBIKON",
              "voters": 341
            },
            {
              "station": "EP NKOLBIKON 1/G NKOLBIKON",
              "voters": 388
            },
            {
              "station": "ECOLE ST JEAN BOSCO / C NKOLBIKON 1",
              "voters": 310
            },
            {
              "station": "ECOLE ST JEAN BOSCO / D NKOLBIKON",
              "voters": 307
            },
            {
              "station": "ECOLE ST JEAN BOSCO /H NKOLBIKON",
              "voters": 357
            },
            {
              "station": "ECOLE ST JEAN BOSCO /1 NKOLBIKON 1!",
              "voters": 308
            },
            {
              "station": "FOYER BAMOUNGOUM / A NYANGANZA",
              "voters": 354
            },
            {
              "station": "FOYER BAHOUAN / A NYANGANZA",
              "voters": 264
            },
            {
              "station": "FOYER BAHOUAN / C NYANGANZA",
              "voters": 283
            },
            {
              "station": "ECOLEE.PC/C RADIO",
              "voters": 387
            },
            {
              "station": "EP MOKOLO 1 / A SEMBE",
              "voters": 306
            },
            {
              "station": "EP MOKOLO1/B SEMBE",
              "voters": 312
            },
            {
              "station": "EP MOKOLO 1/C SEMBE",
              "voters": 264
            },
            {
              "station": "EP TIGAZA / A TIGAZA",
              "voters": 381
            },
            {
              "station": "EP TIGAZA/B TIGAZA",
              "voters": 353
            },
            {
              "station": "EP TIGAZA/E TIGAZA",
              "voters": 247
            },
            {
              "station": "EP TIGAZA/G TIGAZA",
              "voters": 245
            },
            {
              "station": "EP TIGAZA/H TIGAZA",
              "voters": 314
            },
            {
              "station": "EP TIGAZA/1 TIGAZA",
              "voters": 319
            },
            {
              "station": "EP TIGAZA / J TIGAZA",
              "voters": 298
            },
            {
              "station": "EP TIGAZA/ K TIGAZA",
              "voters": 141
            },
            {
              "station": "LYCEE TECHNIQUE DE NKOLBIKON II / A NKOLBIKON I",
              "voters": 287
            },
            {
              "station": "LYCÉE TECHNIQUE DE NKOLBIKON II /B NKOLBIKON II",
              "voters": 215
            },
            {
              "station": "LYCEE TECHNIQUE DE NKOLBIKON II / C NKOLBIKON II",
              "voters": 280
            },
            {
              "station": "GROUPE SCOLAIRE LES PATRIOTES / À TIGAZA",
              "voters": 173
            },
            {
              "station": "LYCEE BILINGUE NKOLBIKON II / A NKOLBIKON II",
              "voters": 34
            },
            {
              "station": "EP EKOUNOU / A KOUME BONIS",
              "voters": 126
            },
            {
              "station": "EP BILINGUE MBANGO / A NKOLBIKON 1",
              "voters": 108
            },
            {
              "station": "EP MOKOLO 4 / A MOKOLO IV",
              "voters": 65
            },
            {
              "station": "CES BIRPONDO / A BIRPONDO",
              "voters": 68
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 326
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA II",
              "voters": 311
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA II",
              "voters": 299
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 317
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 325
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 342
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 165
            },
            {
              "station": "ECOLE PRIM. ET MATERNELLE PRIVEE BTA Il BERTOUA Il",
              "voters": 118
            },
            {
              "station": "ECOLE ANNEXE / A BRIQUETERIE",
              "voters": 283
            },
            {
              "station": "ECOLE ANNEXE / C BRIQUETERIE",
              "voters": 256
            },
            {
              "station": "ECOLE ANNEXE / D BRIQUETERIE",
              "voters": 279
            },
            {
              "station": "ECOLE ANNEXE / G BRIQUETERIE",
              "voters": 257
            },
            {
              "station": "ECOLE ANNEXE / H BRIQUETERIE",
              "voters": 281
            },
            {
              "station": "ECOLE ANNEXE /1 BRIQUETERIE",
              "voters": 379
            },
            {
              "station": "ECOLE ANNEXE / J BRIQUETERIE",
              "voters": 350
            },
            {
              "station": "ECOLE ANNEXE / K BRIQUETERIE",
              "voters": 98
            },
            {
              "station": "ECOLE ST AUGUSTIN / B EKOMBITIE",
              "voters": 300
            },
            {
              "station": "ECOLE ST AUGUSTIN / C EKOMBITIE",
              "voters": 234
            },
            {
              "station": "DELELEGATION REGIONALE DE L'ELEVAGE / ELEVAGE",
              "voters": 293
            },
            {
              "station": "DELELEGATION REGIONALE DE L'ELEVAGE / ELEVAGE",
              "voters": 132
            },
            {
              "station": "EP ENIA/G ENIA I",
              "voters": 289
            },
            {
              "station": "EP ENIA/H ENIA I",
              "voters": 336
            },
            {
              "station": "EP ENIA/J ENIA I",
              "voters": 383
            },
            {
              "station": "EP ENIA/K ENIA I",
              "voters": 247
            },
            {
              "station": "CAMP MILITAIRE / A GBOKLOTA",
              "voters": 266
            },
            {
              "station": "LYCEE TECHNIQUE GBOKLOTA / B BERTOUA II",
              "voters": 328
            },
            {
              "station": "LYCEE TECHNIQUE GBOKLOTA / E BERTOUA Il",
              "voters": 349
            },
            {
              "station": "LYCEE TECHNIQUE GBOKLOTA / F BERTOUA II",
              "voters": 347
            },
            {
              "station": "LYCEE TECHNIQUE GBOKLOTA / G BERTOUA II",
              "voters": 158
            },
            {
              "station": "LYCEE TECHNIQUE KANO / A KANO",
              "voters": 322
            },
            {
              "station": "LYCEE TECHNIQUE KANO /F KANO",
              "voters": 362
            },
            {
              "station": "LYCEE TECHNIQUE KANO / G KANO",
              "voters": 328
            },
            {
              "station": "EP YADEME / A MONOU",
              "voters": 258
            },
            {
              "station": "EP YADEME /B MONOU",
              "voters": 264
            },
            {
              "station": "EP YADEME / C MONOU",
              "voters": 279
            },
            {
              "station": "EP YADEME / D MONOU",
              "voters": 245
            },
            {
              "station": "EP MONOU Ii / A MONOU",
              "voters": 316
            },
            {
              "station": "EP MONOUII/B MONOU",
              "voters": 341
            },
            {
              "station": "EP MONOU I1/D MONOU",
              "voters": 356
            },
            {
              "station": "CENAJES / A NGAIKADA II",
              "voters": 285
            },
            {
              "station": "CENAJES /B NGAIKADA Il",
              "voters": 279
            },
            {
              "station": "CENAIJES / C NGAIKADA II",
              "voters": 290
            },
            {
              "station": "CENAJES / D NGAIKADA Il",
              "voters": 305
            },
            {
              "station": "CENAJES /E NGAIKADA Il",
              "voters": 318
            },
            {
              "station": "CENAJES /F NGAIKADA II",
              "voters": 376
            },
            {
              "station": "LYCEE SCIENTIFIQUE / A TINDAMBA",
              "voters": 299
            },
            {
              "station": "LYCEE SCIENTIFIQUE / B TINDAMBA",
              "voters": 282
            },
            {
              "station": "LYCEE SCIENTIFIQUE / C TINDAMBA",
              "voters": 282
            },
            {
              "station": "LYCEE SCIENTIFIQUE / D TINDAMBA",
              "voters": 298
            },
            {
              "station": "LYCEE SCIENTIFIQUE / E TINDAMBA",
              "voters": 279
            },
            {
              "station": "LYCEE SCIENTIFIQUE / G TINDAMBA",
              "voters": 291
            },
            {
              "station": "LYCEE SCIENTIFIQUE / H TINDAMBA",
              "voters": 337
            },
            {
              "station": "LYCEE SCIENTIFIQUE / 1 TINDAMBA",
              "voters": 364
            },
            {
              "station": "LYCEE SCIENTIFIQUE / J TINDAMBA",
              "voters": 373
            },
            {
              "station": "EP DE YADEME /C MONOU",
              "voters": 94
            },
            {
              "station": "CENTRE CDE / A YADEME",
              "voters": 271
            },
            {
              "station": "CENTRE CDE /B YADEME",
              "voters": 199
            },
            {
              "station": "EM PUBLIQUE ENIA / B BERTOUA Il",
              "voters": 373
            },
            {
              "station": "EM PUBLIQUE ENIA / C BERTOUA Il",
              "voters": 420
            },
            {
              "station": "EM PUBLIQUE ENIA / D BERTOUA Il",
              "voters": 292
            },
            {
              "station": "CES DE BERTOUA Il / A BERTOUA II",
              "voters": 250
            },
            {
              "station": "ECOLE PRIMAIRE CATHOLIQUE / A BERTOUA II",
              "voters": 275
            },
            {
              "station": "ECOLE PRIMAIRE LAIC SAINT-RAPHAEL / A ENIA I",
              "voters": 142
            },
            {
              "station": "EP TINDAMBA / A TINDAMBA",
              "voters": 229
            },
            {
              "station": "EP ALAMADA / A ALAMADA",
              "voters": 202
            },
            {
              "station": "EP BANGBEL / A BANGBEL",
              "voters": 256
            },
            {
              "station": "EP BANGBEL / B BANGBEL",
              "voters": 196
            },
            {
              "station": "CENTRE SANTE BIBOKO / A BIBOKO",
              "voters": 285
            },
            {
              "station": "EP BOGUERA / B BOGUERA",
              "voters": 198
            },
            {
              "station": "EP BONGO / A BONGO",
              "voters": 163
            },
            {
              "station": "EP BORONGO / A BORONGO",
              "voters": 328
            },
            {
              "station": "EP BORONGO /B BORONGO",
              "voters": 313
            },
            {
              "station": "EP BORONGO / C BORONGO",
              "voters": 304
            },
            {
              "station": "CES BOULI / A BOULI",
              "voters": 304
            },
            {
              "station": "CES BOULI/B BOULI",
              "voters": 166
            },
            {
              "station": "EP BOULI /A BOULI",
              "voters": 276
            },
            {
              "station": "EP DANG-PATOU / A DANG-PATOU",
              "voters": 269
            },
            {
              "station": "EP GBATA'A / A GBATA'A",
              "voters": 336
            },
            {
              "station": "ECOLE PARENTS KAWTAL / A KAWTAL",
              "voters": 299
            },
            {
              "station": "ECOLE PARENTS KAWTAL / B KAWTAL",
              "voters": 146
            },
            {
              "station": "CENTRE DE SANTE KONGOLO / A KONGOLO BOYE",
              "voters": 192
            },
            {
              "station": "EP KONGOLO / A KONGOLO BOYE",
              "voters": 117
            }
          ],
          "|": [
            {
              "station": "EM ANNEXE / D MOKOLO",
              "voters": 170
            },
            {
              "station": "EM ANNEXE / E MOKOLO",
              "voters": 167
            },
            {
              "station": "EM ANNEXE / F MOKOLO",
              "voters": 368
            },
            {
              "station": "EP NKOLBIKON 1 /D NKOLBIKON",
              "voters": 352
            },
            {
              "station": "EP NKOLBIKON 1 /H NKOLBIKON",
              "voters": 409
            },
            {
              "station": "ECOLE ST JEAN BOSCO / A NKOLBIKON",
              "voters": 338
            },
            {
              "station": "ECOLE ST JEAN BOSCO /B NKOLBIKON",
              "voters": 347
            },
            {
              "station": "ECOLE ST JEAN BOSCO / E NKOLBIKON",
              "voters": 303
            },
            {
              "station": "ECOLE ST JEAN BOSCO /F NKOLBIKON",
              "voters": 337
            },
            {
              "station": "ECOLE ST JEAN BOSCO / G NKOLBIKON",
              "voters": 364
            },
            {
              "station": "EP NGAIKADA / C NGAIKADA",
              "voters": 231
            },
            {
              "station": "ECOLE FRANCO ARABE / A NGAIKADA",
              "voters": 329
            },
            {
              "station": "ECOLE FRANCO ARABE / B NGAIKADA",
              "voters": 300
            },
            {
              "station": "ECOLE FRANCO ARABE / C NGAIKADA",
              "voters": 399
            },
            {
              "station": "LYCEE BILINGUE DE NGAIKADA / A NGAIKADA",
              "voters": 195
            }
          ],
          "! |": [
            {
              "station": "ECOLE ST JEAN BOSCO / J NKOLBIKON",
              "voters": 314
            }
          ]
        },
        "BETARE-OYA": {
          "": [
            {
              "station": "ECOLE PROTESTANTE LAI/B LAI",
              "voters": 391
            },
            {
              "station": "EP MABELE Il / A MABELE Il",
              "voters": 138
            },
            {
              "station": "SALLE COMMUNAUTAIRE MALI / A MALI",
              "voters": 270
            },
            {
              "station": "EGLISE PROTESTANTE MARARABA / À MARARABA",
              "voters": 207
            },
            {
              "station": "EP MBALE / A MBALE",
              "voters": 110
            },
            {
              "station": "EP MBITOM/B MBITOM CENTRE",
              "voters": 367
            },
            {
              "station": "EP MBORGUENE / A MBORGUENE",
              "voters": 211
            },
            {
              "station": "ECOLE MAT PUBLIQUE BETARE OYA / A MOSQUEE",
              "voters": 365
            },
            {
              "station": "ECOLE MAT PUBLIQUE BETARE OYA/B MOSQUEE",
              "voters": 109
            },
            {
              "station": "EP NDOKAYO / D NDOKAYO",
              "voters": 355
            },
            {
              "station": "EP NDOKAYO/F NDOKAYO",
              "voters": 389
            },
            {
              "station": "CENTRE SANTE INTEGRE NDOKAYO / A NDOUKLA",
              "voters": 242
            },
            {
              "station": "TRIBUNAL NGADI / A NGADI",
              "voters": 395
            },
            {
              "station": "TRIBUNAL NGADI / B NGADI",
              "voters": 353
            },
            {
              "station": "EP TOURAKE / A TOURAKE",
              "voters": 377
            },
            {
              "station": "EP TOURAKE /B TOURAKE",
              "voters": 85
            },
            {
              "station": "HANGAR PUBLIC MADEPO / A MADEPO",
              "voters": 147
            },
            {
              "station": "HANGAR PUBLIC DANG HAOUSSA / À DANG HAOUSSA",
              "voters": 95
            },
            {
              "station": "HANGAR PUBLIC GBEMBOUSSA / À GBEMBOUSSA",
              "voters": 58
            },
            {
              "station": "HANGAR PUBLIC LONDI / A LONDI",
              "voters": 62
            },
            {
              "station": "HANGAR PUBLIC MOINAM / A MOINAM",
              "voters": 66
            },
            {
              "station": "ECOLE PARENTS NAMBOUI / A BORD NAMBOUI",
              "voters": 62
            },
            {
              "station": "EP DARA-SALAM / A DARA-SALAM",
              "voters": 57
            },
            {
              "station": "HANGAR PUBLIC ZER-KORO / A ZER-KORO",
              "voters": 74
            },
            {
              "station": "ECOLE BILINGUE BETARE-OYA / A KPAWARA",
              "voters": 65
            },
            {
              "station": "ECOLE PARENTS CAMPEMENT CANAL / A CAMPEMENT CANAL",
              "voters": 57
            },
            {
              "station": "HANGAR PUBLIC VANNE-BIBOKO / A VANNE-BIBOKO",
              "voters": 110
            },
            {
              "station": "ESPL CHEF MOINAM / A MOINAM LOM-PANGAR",
              "voters": 55
            },
            {
              "station": "ECOLE PUB NDIBO MBARSOLA / A MISSION CATHOLIQUE",
              "voters": 404
            },
            {
              "station": "ECOLE PUB KAWTAL II / A KAWTAL",
              "voters": 422
            },
            {
              "station": "ECOLE PUB KAWTAL I1/B KAWTAL",
              "voters": 385
            },
            {
              "station": "EP ABOUMADJALI / A ABOUMADJALI",
              "voters": 106
            },
            {
              "station": "MARCHE ANDOM / A ANDOM",
              "voters": 319
            },
            {
              "station": "FOYER ANDOM / A ANDOM",
              "voters": 184
            },
            {
              "station": "HANGAR PUBLIC ANDOM II / A ANDOM I!",
              "voters": 135
            },
            {
              "station": "EP BIVELKA / A BIVELKA",
              "voters": 219
            },
            {
              "station": "EP BIVELKA/B BIVELKA",
              "voters": 68
            },
            {
              "station": "EP BOUAM / A BOUAM",
              "voters": 161
            },
            {
              "station": "HANGAR CHEFFERIE PK 12/ A BOUAM",
              "voters": 187
            },
            {
              "station": "MISSION CATHOLIQUE DIMAKO / A DIMAKO",
              "voters": 65
            },
            {
              "station": "EP DONGO / A DONGO",
              "voters": 169
            },
            {
              "station": "FOYER DONGO / A DONGO",
              "voters": 233
            },
            {
              "station": "EP KANDA / A KANDA",
              "voters": 179
            },
            {
              "station": "EM KANDA / A KANDA",
              "voters": 307
            },
            {
              "station": "HANGAR PUBLIC MASSOK / A DIMAKO",
              "voters": 62
            },
            {
              "station": "CHAPELLE CATHOLIQUE MBANG II / A MBANG Il",
              "voters": 97
            },
            {
              "station": "EP MBETHII/B MBETH II",
              "voters": 52
            },
            {
              "station": "ANCIENNE BARRIERE MAIRIE MBOMO / A MBOMO",
              "voters": 105
            },
            {
              "station": "EP NDEMBA Il / À NDEMBA Il",
              "voters": 380
            },
            {
              "station": "EP NGUINDA / A NGUINDA",
              "voters": 60
            },
            {
              "station": "CHAPELLE CATHOLIQUE NIKA / A NIKA",
              "voters": 89
            },
            {
              "station": "HANGAR FEU COLONEL YANDA II / A YANDA Il",
              "voters": 75
            },
            {
              "station": "EP YANDA III / A YANDA II!",
              "voters": 113
            },
            {
              "station": "EP ZOCKLINGANG / A ZOCKLINGANG",
              "voters": 167
            },
            {
              "station": "LYCEE TECHNIQUE MOKOLO / A MOKOLO",
              "voters": 102
            },
            {
              "station": "HANGAR PULIC KOMBE / A KOMBE",
              "voters": 42
            }
          ],
          "|": [
            {
              "station": "EP MABELE 1/A MABELE",
              "voters": 77
            }
          ]
        },
        "GAROUA-BOULAI": {
          "": [
            {
              "station": "EP ABO BOUTILLA / A ABO BOUTILLA",
              "voters": 291
            },
            {
              "station": "EP BADAN / A BADAN",
              "voters": 363
            },
            {
              "station": "LYCEE GAROUA-BOULAI / A BAYA",
              "voters": 349
            },
            {
              "station": "LYCEE GAROUA-BOULAI / B BAYA",
              "voters": 306
            },
            {
              "station": "LYCEE GAROUA-BOULAI / D BAYA",
              "voters": 323
            },
            {
              "station": "LYCEE GAROUA-BOULAI / E BAYA",
              "voters": 329
            },
            {
              "station": "LYCEE GAROUA-BOULAI / F BAYA",
              "voters": 347
            },
            {
              "station": "LYCEE GAROUA-BOULAI / G BAYA",
              "voters": 340
            },
            {
              "station": "LYCEE GAROUA-BOULAI / J BAYA",
              "voters": 361
            },
            {
              "station": "LYCEE GAROUA-BOULAI / K BAYA",
              "voters": 291
            },
            {
              "station": "SAR-SM/ À BETHANIE",
              "voters": 345
            },
            {
              "station": "SAR-SM/B BETHANIE",
              "voters": 316
            },
            {
              "station": "SAR-SM/C BETHANIE",
              "voters": 303
            },
            {
              "station": "SAR-SM / D BETHANIE",
              "voters": 322
            },
            {
              "station": "SAR-SM/E BETHANIE",
              "voters": 293
            },
            {
              "station": "SAR-SM/F BETHANIE",
              "voters": 394
            },
            {
              "station": "SAR-SM/G BETHANIE",
              "voters": 333
            },
            {
              "station": "SAR-SM/H BETHANIE",
              "voters": 205
            },
            {
              "station": "EP BINDIBA / C BINDIBA",
              "voters": 214
            },
            {
              "station": "ECOLE FRANCO ISLAMIQUE / C BINDIKI",
              "voters": 326
            },
            {
              "station": "ECOLE FRANCO ISLAMIQUE / E BINDIKI",
              "voters": 376
            },
            {
              "station": "TELECENTRE COMM DE GAROUA-BOULAI / B DOFORO",
              "voters": 174
            },
            {
              "station": "EP GADO BADZERE / À GADO BADZERE",
              "voters": 311
            },
            {
              "station": "EP GADO BADZERE / B GADO BADZERE",
              "voters": 289
            },
            {
              "station": "ECOLE PUBLIQUE DE GANDONG / A GANDONG",
              "voters": 300
            },
            {
              "station": "ECOLE PUBLIQUE DE GANDONG / B GANDONG",
              "voters": 8
            },
            {
              "station": "EP GBABIO / À GBABIO",
              "voters": 222
            },
            {
              "station": "ECOLE FRANCO-ARABE / À FOULBERE",
              "voters": 320
            },
            {
              "station": "ECOLE FRANCO-ARAËBE / B FOULBERE",
              "voters": 324
            },
            {
              "station": "ECOLE FRANCO-ARAËBE / C FOULBERE",
              "voters": 309
            },
            {
              "station": "ECOLE FRANCO-ARABE / D FOULBERE",
              "voters": 160
            },
            {
              "station": "EP GAROUA BOULAI / B MARCHE CENTRAL",
              "voters": 338
            },
            {
              "station": "EP GAROUA BOULAI / E MARCHE CENTRAL",
              "voters": 300
            },
            {
              "station": "EP MOMBAL / B MOMBAL",
              "voters": 203
            },
            {
              "station": "E PRIV PROTESTANTE DE NANDOUNGUE /B NANDOUNGUE",
              "voters": 358
            },
            {
              "station": "EP SABAL / A SABAL VILLAGE",
              "voters": 273
            },
            {
              "station": "EP SABONGARI / C SABONGARI",
              "voters": 343
            },
            {
              "station": "EP SABONGARI / D SABONGARI",
              "voters": 268
            },
            {
              "station": "EP SABONGARI / F SABONGARI",
              "voters": 149
            },
            {
              "station": "SONEL / A SHELL",
              "voters": 365
            },
            {
              "station": "ECOLE DES PARENTS NDANGA-GBAKOBO / À ZOUKOUNDE",
              "voters": 386
            },
            {
              "station": "ECOLE DES PARENTS NDANGA-GBAKOBO / B ZOUKOUNDE",
              "voters": 248
            },
            {
              "station": "EP DOFORO / A DOFORO",
              "voters": 268
            },
            {
              "station": "EP DOFORO/B DOFORO",
              "voters": 104
            },
            {
              "station": "HANGAR PUBLIC YASSA / À BINDIBA",
              "voters": 127
            },
            {
              "station": "HANGAR PUBLIC NAMBORI / A NAMBORI",
              "voters": 161
            },
            {
              "station": "ECOLE PUBLIQUE DE LA FRONTIERE / D FRONTIERE",
              "voters": 317
            },
            {
              "station": "ECOLE PUBLIQUE DE NGANKO / A NAGONDA",
              "voters": 247
            },
            {
              "station": "ECOLE PUBLIQUE DE MBOUSSA / A MBOUSSA",
              "voters": 226
            },
            {
              "station": "ECOLE PUBLIQUE DE SABAL VILLE / A QUARTIER SABAL",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE DE SABAL VILLE /B QUARTIER SABAL",
              "voters": 330
            },
            {
              "station": "ECOLE MATERNELLE FRANCO ISLAMIQUE SHELL",
              "voters": 449
            },
            {
              "station": "EP ADINKOL / A ADINKOL",
              "voters": 297
            },
            {
              "station": "EP ADINKOL /B ADINKOL",
              "voters": 365
            },
            {
              "station": "EP BAZZAMA / A BAZZAMA",
              "voters": 417
            },
            {
              "station": "EP BAZZAMA/B BAZZAMA",
              "voters": 322
            },
            {
              "station": "ECOLE AGRICULTURE BINDIA / C BINDIA",
              "voters": 319
            },
            {
              "station": "ECOLE AGRICULTURE BINDIA / D BINDIA",
              "voters": 270
            },
            {
              "station": "ECOLE AGRICULTURE BINDIA / E BINDIA",
              "voters": 397
            },
            {
              "station": "ECOLE AGRICULTURE BINDIA / F BINDIA",
              "voters": 178
            },
            {
              "station": "EP BOULEMBE / A BOULEMBE",
              "voters": 412
            },
            {
              "station": "EP BOULEMBE / B BOULEMBE",
              "voters": 386
            },
            {
              "station": "EP DAIGUENE / A DAIGUENE",
              "voters": 339
            },
            {
              "station": "EP GOUNTE / À GOUNTE",
              "voters": 242
            },
            {
              "station": "HANGAR PUBLIC / A KOUBOU",
              "voters": 116
            },
            {
              "station": "EP MANDJOU GROUPE I ETII/F MANDJOU",
              "voters": 322
            }
          ],
          "BAYA |": [
            {
              "station": "LYCEE GAROUA-BOULAI /",
              "voters": 384
            }
          ],
          "ETII/A MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 350
            }
          ],
          "ET 11/8 MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 330
            }
          ],
          "ET II/D MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 352
            }
          ],
          "ETII/E MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 342
            }
          ],
          "ET 11/G MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 336
            }
          ]
        },
        "MANDJOU": {
          "": [
            {
              "station": "EP MANDJOU GROUPE I ET 11/J MANDJOU",
              "voters": 303
            },
            {
              "station": "EP MANDJOU GROUPE 1 ET II/L MANDJOU",
              "voters": 339
            },
            {
              "station": "EP MANDJOU GROUPE I ET 11/M MANDJOU",
              "voters": 245
            },
            {
              "station": "EP MANDJOU GROUPE 1 ET II/N MANDJOU",
              "voters": 279
            },
            {
              "station": "EP MOINAM / À MOINAM",
              "voters": 282
            },
            {
              "station": "EP NDEMBO(BATOURI) / A NDEMBO(BATOURI)",
              "voters": 114
            },
            {
              "station": "EP NDEMNAM / A NDEMNAM",
              "voters": 174
            },
            {
              "station": "EP NDONG MBOME / A NDONG MBOME",
              "voters": 307
            },
            {
              "station": "EP NDOUMBE / A NDOUMBE",
              "voters": 151
            },
            {
              "station": "ECOLE CATHOLIQUE TOUNGOU AEROPORT / TOUNGOU AEROPORT",
              "voters": 333
            },
            {
              "station": "ECOLE CATHOLIQUE TOUNGOU AEROPORT / TOUNGOU AEROPORT",
              "voters": 198
            },
            {
              "station": "EP MANDJOU GPE 2 / A MANDJOU",
              "voters": 430
            },
            {
              "station": "EP MANDJOU GPE 2/B MANDJOU",
              "voters": 421
            },
            {
              "station": "EP MANDJOU GPE 2/C MANDJOU",
              "voters": 436
            },
            {
              "station": "EP MANDJOU GPE 2/ D MANDJOU",
              "voters": 460
            },
            {
              "station": "EP MANDJOU GPE 2/E MANDJOU",
              "voters": 407
            },
            {
              "station": "HANGAR PUBLIC MBOUTOUTOU / A MBOUTOUTOU",
              "voters": 196
            },
            {
              "station": "HANGAR PUBLIC NDANGA NDENGUE NDANGA NDENGUE BROUSSE",
              "voters": 62
            },
            {
              "station": "EP BAMBOUTI / A BAMBOUTI",
              "voters": 297
            },
            {
              "station": "EP BAMBOUTI/B BAMBOUTI",
              "voters": 62
            },
            {
              "station": "EP BOHANTO / A BOHANTO",
              "voters": 370
            },
            {
              "station": "EP BOHANTO /B BOHANTO",
              "voters": 202
            },
            {
              "station": "CES COLOMINE / A COLOMINE",
              "voters": 332
            },
            {
              "station": "CES COLOMINE /B COLOMINE",
              "voters": 360
            },
            {
              "station": "CES COLOMINE / C COLOMINE",
              "voters": 265
            },
            {
              "station": "EP COLOMINE / A COLOMINE",
              "voters": 343
            },
            {
              "station": "EP COLOMINE / B COLOMINE",
              "voters": 284
            },
            {
              "station": "EP COLOMINE / E COLOMINE",
              "voters": 294
            },
            {
              "station": "EP DEOULE / A DEOULE",
              "voters": 107
            },
            {
              "station": "EP DOUMBA BELLO / A DOUMBA BELLO",
              "voters": 225
            },
            {
              "station": "GANGANGA HANGAR MARCHE / À GANGANGA",
              "voters": 47
            },
            {
              "station": "EP GARGA SARALI / À GARGA SARALI",
              "voters": 397
            },
            {
              "station": "EP GAROUA YAKA / A GAROUA YAKA",
              "voters": 258
            },
            {
              "station": "CENTRE PERISCOLAIRE MBELE MBEKE / A MBELE-MBEKE",
              "voters": 184
            },
            {
              "station": "CASE COMMUNAUTAIRE NGAMBADI / A NGAMBADI",
              "voters": 88
            },
            {
              "station": "CES NGOURA / A NGOURA",
              "voters": 325
            },
            {
              "station": "CES NGOURA / B NGOURA",
              "voters": 344
            },
            {
              "station": "EM NGOURA / A NGOURA",
              "voters": 334
            },
            {
              "station": "EP OUANDEN / A OUANDEN",
              "voters": 380
            },
            {
              "station": "EP OUANDEN / B OUANDEN",
              "voters": 111
            },
            {
              "station": "EP OUDOU / A OUDOU",
              "voters": 84
            },
            {
              "station": "EP SAMBA / À SAMBA",
              "voters": 341
            },
            {
              "station": "EP SAMBA /B SAMBA",
              "voters": 374
            },
            {
              "station": "EP SAMBA / C SAMBA",
              "voters": 170
            },
            {
              "station": "EP SODEPA RANCH / A SODEPA RANCH",
              "voters": 136
            },
            {
              "station": "CASE COMMUNAUTAIRE YADOUE / À TIBALA",
              "voters": 53
            },
            {
              "station": "CENTRE SANTE TONGO GANDIMA / À TONGO GANDIMA",
              "voters": 305
            },
            {
              "station": "CENTRE SANTE TONGO GANDIMA / C TONGO GANDIMA",
              "voters": 184
            },
            {
              "station": "EP YANGAMO /B YANGAMO",
              "voters": 306
            },
            {
              "station": "HANGAR PUBLIC NGOE / A NGOE NGOE",
              "voters": 228
            },
            {
              "station": "CARREFOUR SAMBA / A CARREFOUR SAMBA",
              "voters": 38
            }
          ],
          "ET II / Q MANDJOU |": [
            {
              "station": "EP MANDJOU GROUPE",
              "voters": 327
            }
          ],
          "|": [
            {
              "station": "EP MBOULAYE 1/B MBOULAYE",
              "voters": 116
            }
          ]
        }
      }
    }
  }
};