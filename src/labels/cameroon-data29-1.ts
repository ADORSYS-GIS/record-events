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
    "name": {
      "en": "CENTRE",
      "fr": "CENTRE"
    },
    "divisions": {
      "HAUTE-SANAGA": {
        "BIBEY": {
          "AMGBANIN NGUINOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE NGUINOUMA/A",
              "voters": 112
            }
          ],
          "ANDOM BIBEY CENTRE BIBEY I EWOE NKOM": [
            {
              "station": "CENTRE DE JEUNESSE DE BIBEY/A",
              "voters": 259
            }
          ],
          "BIBEA EBAM": [
            {
              "station": "CASE COMMUNAUTAIRE DE BIBEA/A",
              "voters": 104
            }
          ],
          "BIBEY I CAMP MARTIN": [
            {
              "station": "ECOLE CATHOLIQUE DE BIBEY/A",
              "voters": 158
            }
          ],
          "BIBEY CENTRE II": [
            {
              "station": "CASE COMMUNAUTAIRE DE BIBEY/A",
              "voters": 167
            }
          ],
          "DEA": [
            {
              "station": "ECOLE PUBLIQUE DE DE DEA/A",
              "voters": 123
            }
          ],
          "ELINGA ENYENG EWANKANG MBANYE": [
            {
              "station": "ECOLE-PUBLIQUE DE ELINGA/A",
              "voters": 98
            }
          ],
          "ENDOE ETOL-BОТ KAMA MGBOUM MPANDANG PECK-BELEM": [
            {
              "station": "ESPLANADE CHEFFERIE-ENDOE/A",
              "voters": 187
            }
          ],
          "KENG LENG LORA MGBANANG": [
            {
              "station": "ECOLE PUBLIQUE DE LORA/A",
              "voters": 94
            }
          ],
          "KIDMEBО MBELI": [
            {
              "station": "ECOLE PUBLIQUE DE MBELI/A",
              "voters": 141
            }
          ],
          "KOM-ASSO": [
            {
              "station": "ESPLANADE CHEFFERIE DE KOM-ASSO/A",
              "voters": 51
            }
          ],
          "LANDI": [
            {
              "station": "ECOLE-PUBLIQUE DE LANDI/A",
              "voters": 101
            }
          ],
          "MEKON III NGOCK NGOUH": [
            {
              "station": "ECOLE PUBLIQUE DE MEKON III/ A",
              "voters": 200
            }
          ],
          "МЕТЕРI NGOUH": [
            {
              "station": "ESPLANADE CHEFFERIE DE METEP I/A",
              "voters": 150
            }
          ],
          "METEP II": [
            {
              "station": "ECOLE-PUBLIQUE DE METEP/A",
              "voters": 75
            }
          ],
          "MIMBANGA": [
            {
              "station": "CASECOMMUNAUTAIRE DE MIMBANGA/A",
              "voters": 186
            }
          ],
          "NDOUMBA": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMBA/A",
              "voters": 170
            }
          ],
          "NGOLKONG I NGOLKONG II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGOLKONG/A",
              "voters": 61
            }
          ],
          "MPANANG KAMA MPANDANG": [
            {
              "station": "CASE COMMUNAUTAIRE DE MPANANG/A",
              "voters": 50
            }
          ],
          "TOBE": [
            {
              "station": "ECOLE PUBLIQUE DE TOBE/A",
              "voters": 88
            }
          ],
          "EBAM": [
            {
              "station": "CASE COMMUNAUTAIRE DE EBAM/A",
              "voters": 68
            }
          ]
        },
        "LEMBE-YEZOUM": {
          "AKOMO": [
            {
              "station": "ESPLANADE CHEFFERIE AKOMO/A",
              "voters": 20
            }
          ],
          "ATOLO MENGALA": [
            {
              "station": "ESPLANADE CHEFFERIE ATOLO/A",
              "voters": 43
            }
          ],
          "BANA": [
            {
              "station": "LYCEE DE BANA/A",
              "voters": 160
            }
          ],
          "BIKIT EVOVOE": [
            {
              "station": "ECOLE PUBLIQUE BIKIT/A",
              "voters": 47
            }
          ],
          "NGOULSAMBA SIMBANE": [
            {
              "station": "ECOLE PUBLIQUE DE SIMBANE/A",
              "voters": 211
            }
          ],
          "BISSA BISSO I BISSO II MBANNANGA MFANDENA NKOLABANDA": [
            {
              "station": "ECOLE PUBLIQUE DE BISSO II/A",
              "voters": 269
            }
          ],
          "BISSONO BIWONG NGUINDA I": [
            {
              "station": "ECOLE PUBLIQUE DE NGUINDA I/A",
              "voters": 26
            }
          ],
          "EBALBALASSE EKOMBО ENDANG MEBANG": [
            {
              "station": "ESPLANADE CHEFFERIE DE BISSONO/A",
              "voters": 165
            }
          ],
          "ANGONDOMO BIBOM EBAS ESSONG": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEBANG/A",
              "voters": 106
            }
          ],
          "LEMBE CENTRE MVE SIMBANE ANDOM": [
            {
              "station": "ECOLE MATERNELLE DE LEMBE CENTRE/A",
              "voters": 75
            }
          ],
          "EBOLBOUMOU MEKA'A": [
            {
              "station": "ECOLE PUBLIQUE DE EBOLBOUMOU/A",
              "voters": 90
            }
          ],
          "EDOUMDANE": [
            {
              "station": "ECOLE PUBLIQUE D'EDOUMDANE/A",
              "voters": 49
            }
          ],
          "AMAK EFOGO MBANG NDOU-MVE BEKONE": [
            {
              "station": "ECOLE PUBLIQUE D'EFOGO/A",
              "voters": 118
            }
          ],
          "EKANG FANG": [
            {
              "station": "ECOLE PUBLIQUE D'EKANG/A",
              "voters": 60
            }
          ],
          "ENDOUM ESSOUM YAMBA": [
            {
              "station": "ECOLE PUBLIQUE D'ENDOUM/A",
              "voters": 188
            }
          ],
          "ALANGANA ETSINGUILI": [
            {
              "station": "ESPLANADE CHEFFERIE D'ETSINGUILI/A",
              "voters": 52
            }
          ],
          "KOKOA": [
            {
              "station": "ECOLE PUBLIQUE DE KOKOA/A",
              "voters": 86
            }
          ],
          "LEMBE LEMBE CENTRE LEMBE II-EZANG NGASSALA": [
            {
              "station": "ECOLE PUBLIQUE DE LEMBE CENTRE/A",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE DE LEMBE CENTRE/В",
              "voters": 286
            }
          ],
          "LEMBE III-NKOMESSE YEBE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOMESSE/A",
              "voters": 121
            }
          ],
          "MBEDE NGUINDA II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGUINDA II/ A",
              "voters": 80
            }
          ],
          "AKOUTA MEBEM": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEBEM/A",
              "voters": 59
            }
          ],
          "MEBOLO NDANGAI NDANGA II": [
            {
              "station": "ECOLE PUBLIQUE DE MEBOLO/A",
              "voters": 90
            }
          ],
          "MEKA'A MELO I": [
            {
              "station": "ECOLE PUBLIQUE DE MELO I/A",
              "voters": 81
            }
          ],
          "MEKOLO NSAMBА": [
            {
              "station": "ESPLANADE CHEFFERIE DE NSAMBA/A",
              "voters": 54
            }
          ],
          "MENGUEME": [
            {
              "station": "ESPLANADE CHEFFERIE MENGUEME/A",
              "voters": 29
            }
          ],
          "MEYETTE": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYETTE/A",
              "voters": 86
            }
          ],
          "BINGOM NKOLAMA NKOM": [
            {
              "station": "ECOLE PUBLIQUE DE MOUMA/A",
              "voters": 117
            }
          ],
          "MELEN NLONG": [
            {
              "station": "ECOLE PUBLIQUE DE NLONG/A",
              "voters": 146
            }
          ],
          "OBO": [
            {
              "station": "ECOLE PUBLIQUE D'OBO /A",
              "voters": 76
            }
          ],
          "ZOA II": [
            {
              "station": "CENTRE DE SANTE ZOA II/A",
              "voters": 87
            }
          ],
          "ZOA I": [
            {
              "station": "ECOLE PUBLIQUE DE ZOA 1/A",
              "voters": 148
            }
          ],
          "MEZA'A": [
            {
              "station": "ECOLE PUBLIQUE DE MEZA'A/A",
              "voters": 90
            }
          ],
          "MESSESSA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MESSESSA/A",
              "voters": 64
            }
          ],
          "NKOBIBА": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOBIBA/A",
              "voters": 36
            }
          ],
          "NKOLESSANG TA": [
            {
              "station": "CASE COMMUNAUTAIRE DE NKOLESSANG/A",
              "voters": 89
            }
          ],
          "ESSOUM YAMBA": [
            {
              "station": "EGLISE ADVENTISTE DU SEPTIEME JOUR D'ESSOUM/A/A",
              "voters": 47
            }
          ],
          "NDANGA II": [
            {
              "station": "CASE COMMUNAUTAIRE DE NDANGAII/A/A",
              "voters": 75
            }
          ],
          "SIMBANE": [
            {
              "station": "CHAPELLE CATHOLIQUE D'EKANG-BILIK/A/ A",
              "voters": 31
            }
          ],
          "EKOMBО": [
            {
              "station": "CHAPELLE EPC DE MEVONG/A/A",
              "voters": 40
            }
          ],
          "NGASSALA": [
            {
              "station": "LYCEE DE LEMBE/A/A",
              "voters": 55
            }
          ]
        },
        "MBANDJOCK": {
          "ANS CAMP ANGEBAULT CITE DES CADRES": [
            {
              "station": "ESPLANADE CHEFFERIE ETON/A",
              "voters": 367
            },
            {
              "station": "ESPLANADE CHEFFERIE ETON/B",
              "voters": 173
            },
            {
              "station": "HANGAR DEJEUNER SOSUCAM/A",
              "voters": 311
            },
            {
              "station": "HANGAR DEJEUNER SOSUCAM/B",
              "voters": 327
            },
            {
              "station": "HANGAR DEJEUNER SOSUCAM/C",
              "voters": 264
            }
          ],
          "ADJA LOTISSEMENT NIO-BABOUTE QUARTIER CIVIL": [
            {
              "station": "FOYER MIFI/A",
              "voters": 217
            },
            {
              "station": "ECOLE PUBLIQUE LOTISSEMENT/A",
              "voters": 316
            },
            {
              "station": "ECOLE PUBLIQUE LOTISSEMENT/B",
              "voters": 322
            },
            {
              "station": "ECOLE PUBLIQUE LOTISSEMENT/C",
              "voters": 219
            }
          ],
          "BELL DOUA NDJORE ODOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NDJORE /A",
              "voters": 284
            }
          ],
          "BIBOTO LOTISSEMENT": [
            {
              "station": "ECOLE PUBLIQUE DE BIBOTO/A",
              "voters": 107
            }
          ],
          "CAMP ANGEBAULT CAMP COMMUNAL CAMP POLICE GARE METSIM QUARTIER ADMINISTRATIF": [
            {
              "station": "ECOLE BILINGUE/A",
              "voters": 249
            },
            {
              "station": "ECOLE BILINGUE/B",
              "voters": 232
            },
            {
              "station": "ECOLE BILINGUE/C",
              "voters": 215
            },
            {
              "station": "ECOLE BILINGUE/D",
              "voters": 281
            }
          ],
          "CAMP NOUVEAU MEMBRAT I": [
            {
              "station": "TRIBUNE STADE SOSUCAM/A",
              "voters": 334
            },
            {
              "station": "TRIBUNE STADE SOSUCAM/B",
              "voters": 286
            },
            {
              "station": "TRIBUNE STADE SOSUCAM/C",
              "voters": 289
            },
            {
              "station": "COOPERATIVE OUVRIERS SOSUCAM/A",
              "voters": 295
            },
            {
              "station": "COOPERATIVE OUVRIERS SOSUCAM/B",
              "voters": 127
            },
            {
              "station": "BUREAU U.S.L.C/A",
              "voters": 215
            }
          ],
          "CAMP PIONNIER (NDJORE II) NDJORE": [
            {
              "station": "FOYER CUTUREL CAMP PIONNIER/A",
              "voters": 336
            },
            {
              "station": "FOYER CUTUREL CAMP PIONNIER/B",
              "voters": 257
            }
          ],
          "CENTRE COMMERCIAL HAOUSSA ELOBI QUARTIER HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE CENTRE I/A",
              "voters": 315
            },
            {
              "station": "ECOLE PUBLIQUE CENTRE I/B",
              "voters": 319
            },
            {
              "station": "ECOLE PUBLIQUE CENTRE I/C",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE CENTRE I/D",
              "voters": 207
            }
          ],
          "CENTRE COMMERCIAL KAKA QUARTIER HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE CENTRE II/A",
              "voters": 319
            }
          ],
          "CENTRE COMMERCIAL KAKA QUARTIER HAOUSSA EKOMBITE NDOKOA": [
            {
              "station": "ECOLE PUBLIQUE CENTRE II/ B",
              "voters": 383
            }
          ],
          "NDOKOA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDOKOA/A",
              "voters": 265
            }
          ],
          "MEKOMBA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEKOMBA/A",
              "voters": 172
            }
          ],
          "MEMBRAT II": [
            {
              "station": "ESPLANADE ETS RETRAITE/A",
              "voters": 263
            },
            {
              "station": "ESPLANADE CHEFFERIE MAYENGUE/A",
              "voters": 271
            },
            {
              "station": "ETS GLOBUS/A",
              "voters": 223
            }
          ],
          "MEMBRAT III": [
            {
              "station": "ECOLE PUBLIQUE MEMBRAT III/A",
              "voters": 198
            }
          ],
          "MEMBRAT IV MENGOLO NKOL-ETON": [
            {
              "station": "FOYER MENOUA/A",
              "voters": 233
            },
            {
              "station": "ESPLANADE ETS LONGUIN/A",
              "voters": 377
            },
            {
              "station": "ESPLANADE ETS LONGUIN/B",
              "voters": 367
            },
            {
              "station": "ESPLANADE ETS LONGUIN/C",
              "voters": 429
            }
          ],
          "MENDOUGA OYILA": [
            {
              "station": "EGLISE CATHOLIQUE DE MENDOUGA/A",
              "voters": 112
            }
          ],
          "MINKOUMA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MINKOUMA/A",
              "voters": 109
            }
          ],
          "NDO NYASSI": [
            {
              "station": "ECOLE PUBLIQUE DE ND0/A",
              "voters": 136
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU/A",
              "voters": 280
            },
            {
              "station": "ECOLE PUBLIQUE DU PLATEAU/B",
              "voters": 400
            }
          ],
          "MAMBRAT III MEMBRAT III": [
            {
              "station": "E.P DE MAMBRATI/A",
              "voters": 376
            },
            {
              "station": "E.P DE MAMBRAT I/C",
              "voters": 354
            }
          ],
          "MAMBRAT III MEMBRAТ III": [
            {
              "station": "E.P DE MAMBRAT I/B",
              "voters": 384
            }
          ],
          "NIO BABOUTE CAMP COMMUNAL ET GARE": [
            {
              "station": "CASE A PALABRE DE NIO BABOUTE/A",
              "voters": 83
            }
          ],
          "DOUA": [
            {
              "station": "ESPLANADE ETABLISSEMENT ETOILE DE DOUA/A",
              "voters": 69
            }
          ],
          "ODOCK": [
            {
              "station": "CASE A PALABRER D'ODOCK/A",
              "voters": 52
            }
          ],
          "MENDOGNA": [
            {
              "station": "CASE A PALABRE DE MENDOGNA/A",
              "voters": 82
            }
          ],
          "LOTISSEMENT": [
            {
              "station": "ECOLE PUBLIQUE LOTISSEMENT /C/A",
              "voters": 42
            }
          ]
        },
        "MINTA": {
          "ABONG-MBOUNG AKOUM II BIDEMBА": [
            {
              "station": "ECOLE PUBLIQUE DE MINTA/A",
              "voters": 288
            }
          ],
          "ABONG-MBOUNG AKOUM I BIDEMBА": [
            {
              "station": "ECOLE PUBLIQUE DE MINTA/B",
              "voters": 249
            }
          ],
          "AFANOVENG": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'AFANOVENG IA",
              "voters": 137
            }
          ],
          "AKOUM І NYLON": [
            {
              "station": "LYCEE DE MINTA/A",
              "voters": 187
            }
          ],
          "ANTENNE MEBA I MEBA II MISSION CATHOLIQUE": [
            {
              "station": "ECOLE PUBLIQUE DE MEBA/A",
              "voters": 173
            }
          ],
          "BAPECK NIO": [
            {
              "station": "ECOLE PUBLIQUE DE NIO/A",
              "voters": 178
            }
          ],
          "BIKOL FIALA MEKON II NGAMBA BIKOL": [
            {
              "station": "C.E.S. DE MEKON II/A",
              "voters": 168
            }
          ],
          "BIKOL I BIKOL II MBINANG MEYENE": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE DE MEYENE/A",
              "voters": 119
            }
          ],
          "BITIBIDOU EFOULAN MINTA VILLAGE NDENGUELE": [
            {
              "station": "SALLE DES REUNIONS DE MINTA VILLAGE /A",
              "voters": 139
            }
          ],
          "COMBANI LOUM": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE DE LOUM/A",
              "voters": 41
            }
          ],
          "DIMAKO MANDERE MEDONGLONG NGOK-ETELE NKANGBANG": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NGOK-ETELE/A",
              "voters": 102
            }
          ],
          "EBANGAL": [
            {
              "station": "ECOLE PUBLIQUE D'EBANGAL/A",
              "voters": 78
            }
          ],
          "EBOLMAN EKANG-NGUEN NGUENI NKOM ETAM YONG": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE DE NGUEN/A",
              "voters": 134
            }
          ],
          "EKAK KOSSE YENYO": [
            {
              "station": "ECOLE PUBLIQUE D'EKAK/A",
              "voters": 142
            }
          ],
          "EKANG-MEBANG MEBANG": [
            {
              "station": "ECOLE PUBLIQUE DE MEBANG/A",
              "voters": 109
            }
          ],
          "ENDOUM": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE D'ENDOUM/A",
              "voters": 33
            }
          ],
          "ENONG BIBAK": [
            {
              "station": "HANGAR DE LA CHEFFERIE D'ENONG BIBAK/A",
              "voters": 78
            }
          ],
          "ESSABITONG MINKOUMA SANDJA": [
            {
              "station": "HANGAR DE LA CHEFFERIE D'ESSABITONG/A",
              "voters": 81
            }
          ],
          "ETEK-EVE": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'ETEK-EVE/A",
              "voters": 84
            }
          ],
          "ELOT ETOL": [
            {
              "station": "ECOLE PUBLIQUE D'ELOT/A",
              "voters": 94
            }
          ],
          "KAKBAN": [
            {
              "station": "FOYER CULTUREL DE KAKBAN / A",
              "voters": 159
            }
          ],
          "KOUKOUNI NGONG": [
            {
              "station": "ESPLANADE DE LA CHEFFERIE DE KOUKOUNI IA",
              "voters": 89
            }
          ],
          "KOM I MBARGUE NGAMBA": [
            {
              "station": "ECOLE PUBLIQUE DE MBARGUE /A",
              "voters": 220
            }
          ],
          "MBET": [
            {
              "station": "ECOLE PUBLIQUE DE MBET/A",
              "voters": 166
            }
          ],
          "MEDALMBOM NTAL": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE MEDALMBOM/A",
              "voters": 130
            }
          ],
          "MENDEP NDJOLE WALL": [
            {
              "station": "ECOLE PUBLIQUE DE WALL/A",
              "voters": 188
            }
          ],
          "MENDOM I MENDOM II": [
            {
              "station": "EGLISE CATHOLIQUE DE MENDOM/A",
              "voters": 108
            }
          ],
          "MENGUE II": [
            {
              "station": "HANGAR DE LA CHEFFERIE DE MENGUE II/A",
              "voters": 53
            }
          ],
          "MEWON MVOMO NKOK-ESSONG": [
            {
              "station": "ESPLANADE DE LA CHEFFERIE DE MVOMO/A",
              "voters": 63
            }
          ],
          "MEYAK": [
            {
              "station": "CASE A PALABREDE LA CHEFFERIE DE MEYAK/A",
              "voters": 77
            }
          ],
          "MGBAKAА": [
            {
              "station": "ECOLE PUBLIQUE MGBAKA/A",
              "voters": 128
            }
          ],
          "NDJOUMBI": [
            {
              "station": "HANGAR DE LA CHEFFERIE DE NDJOUMBI/A",
              "voters": 50
            }
          ],
          "NGOMBE I NGOMBE I": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NGOMBEI/A",
              "voters": 46
            }
          ],
          "NGO'O": [
            {
              "station": "ECOLE PUBLIQUE DE NGO'O/A",
              "voters": 173
            }
          ],
          "MIMBANG MIMPANE NGUEN II NIO": [
            {
              "station": "ECOLE PUBLIQUE DE MIMBANG/A",
              "voters": 180
            }
          ],
          "NLANG": [
            {
              "station": "ECOLE PUBLIQUE DE NLANG/A",
              "voters": 49
            }
          ],
          "CENTRE ADMINISTRATIF COMMERCIAL TERGAL": [
            {
              "station": "SALLE DES FETES SOUS-PREFECTURE DE MINTA/A",
              "voters": 321
            },
            {
              "station": "SALLE DES FETES SOUS-PREFECTURE DE MINTA/В",
              "voters": 372
            }
          ],
          "TIKARE": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE DE TIKARE/A",
              "voters": 77
            }
          ],
          "VELA": [
            {
              "station": "C.E.S. DE VELA/A",
              "voters": 144
            }
          ],
          "MBET 1 ET 2": [
            {
              "station": "CETIC DE MBET/A",
              "voters": 59
            }
          ],
          "EKANG-YONG": [
            {
              "station": "ESPLANADE CHEFFERIE DE YONG/A",
              "voters": 29
            }
          ],
          "MEBA II": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEBA/A",
              "voters": 56
            }
          ],
          "NGUEN": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGUEN II/A",
              "voters": 65
            }
          ],
          "NGAMBА NGAMBA KOM I": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGAMBA/A",
              "voters": 56
            }
          ],
          "BIKOL II": [
            {
              "station": "ESPLANADE CHEFFERIE DE BIKOL I/A",
              "voters": 29
            }
          ],
          "BITIBIDOU": [
            {
              "station": "MISSION CATHOLIQUE/A",
              "voters": 74
            }
          ],
          "ABIANEI ABIANE II NGOMBE II": [
            {
              "station": "CASE A PALABRE DE NGOMBE I/A",
              "voters": 54
            }
          ],
          "MBINANG": [
            {
              "station": "CASE COMMUNAUTAIRE DE MBINANG/A",
              "voters": 50
            }
          ],
          "EFOULAN": [
            {
              "station": "CENTRE DE SANTE D'EFOULAN/A",
              "voters": 44
            }
          ],
          "AKOUM І": [
            {
              "station": "CASE A PALABRE AKOUMI/A",
              "voters": 80
            }
          ],
          "ABONG-MBOUNG": [
            {
              "station": "HANGAR CHEFFERIE ABONG-MBOUNG/A",
              "voters": 73
            }
          ],
          "YENYO": [
            {
              "station": "CASE A PALABRE DE YENYO/A",
              "voters": 52
            }
          ],
          "ETOL": [
            {
              "station": "SALLE DES REUNIONS D'ETOL/A",
              "voters": 56
            }
          ]
        },
        "NANGA-EBOKO": {
          "ABAM MGBOUM": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'ABAM/A",
              "voters": 62
            }
          ],
          "ABANG I": [
            {
              "station": "ECOLE MATERNELLE DE LA CNPS /A",
              "voters": 223
            },
            {
              "station": "ECOLE MATERNELLE DE LA CNPS /B",
              "voters": 212
            },
            {
              "station": "ESPLANADE QUARTIER HAOUSSA CHEFFERIE/A",
              "voters": 43
            }
          ],
          "ABANG II ELOBI": [
            {
              "station": "CASE COMMUNAUTAIRE D'ABANG II/A",
              "voters": 281
            },
            {
              "station": "CASE COMMUNAUTAIRE D'ABANG II/B",
              "voters": 280
            },
            {
              "station": "CASE COMMUNAUTAIRE D'ABANGII/C",
              "voters": 199
            }
          ],
          "AKACK": [
            {
              "station": "HANGAR CHEFFERIE D'AKACK/A",
              "voters": 119
            }
          ],
          "ASSOBININGA": [
            {
              "station": "ASSOBININGA SALLE E.P.C.O./A",
              "voters": 245
            }
          ],
          "ASSOBININGA MVOG-BETІ": [
            {
              "station": "ESPLANADE CHEFFERIE D'ASSOBININGA/AА",
              "voters": 351
            },
            {
              "station": "ESPLANADE CHEFFERIE D'ASSOBININGA/B",
              "voters": 136
            }
          ],
          "ATTE MANGAI NANGMANA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NANGMANA A",
              "voters": 77
            }
          ],
          "BERKONG BIWONG NDJI": [
            {
              "station": "ECOLE PUBLIQUE DE BERKONG/A",
              "voters": 182
            }
          ],
          "BIBASSA BIKAGA DEA": [
            {
              "station": "ECOLE PUBLIQUE DE DEA/A",
              "voters": 190
            }
          ],
          "BIBOA MASSA'A": [
            {
              "station": "CASE COMMUNAUTAIRE CHEFFERIE DE BIBOA/A",
              "voters": 96
            }
          ],
          "BIFOGO BIKANG MIMBANGA I NDEMBА OTOMBО": [
            {
              "station": "CASE A PALABRE CHEF. DE BIFOGO-NGOULEM./A",
              "voters": 72
            }
          ],
          "BIFOULE MBENGUENI": [
            {
              "station": "HANGAR CHEFFERIE DE BIFOULE/A",
              "voters": 231
            }
          ],
          "BISSAGA EKOCK MENGONDE MPOMTENE": [
            {
              "station": "ECOLE PUBLIQUE DE BISSAGA/A",
              "voters": 306
            }
          ],
          "BITAM NDJOMBЕ": [
            {
              "station": "ECOLE PUBLIQUE DE NDJOMBE/A",
              "voters": 88
            }
          ],
          "BOGBA NGOULMEKONG": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE BOGBA/A",
              "voters": 43
            }
          ],
          "BOUNDJOU KA'A MEMIA": [
            {
              "station": "ECOLE PUBLIQUE DE KA'A/A",
              "voters": 277
            }
          ],
          "BOUNDJOU-SANGA SANGA DINGBEKOUA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE SANGA/A",
              "voters": 30
            }
          ],
          "MBENDA MEKANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBENDA/A",
              "voters": 101
            }
          ],
          "EBOLAKOUN QUARTIER ADMINISTRATIF": [
            {
              "station": "ECOLE MAT. DU QUARTIER ADMINISTRATIF/ A",
              "voters": 246
            }
          ],
          "EBOULE MEKACK OKASSANGI": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'OKASSANG-I IA",
              "voters": 181
            }
          ],
          "EDENANGONG EFEGAN MENGANG": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'EDENANGONG/A",
              "voters": 179
            },
            {
              "station": "HANGAR CHEFFERIE D'EFEGAN/А",
              "voters": 209
            }
          ],
          "EFOULAN II MEZASSA NKOLMVENG": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE MEZASSA/A",
              "voters": 22
            }
          ],
          "EKANGA I EKANGA II": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'EKANGA I/A",
              "voters": 62
            }
          ],
          "EKOMBA MEDONGO TONG-ADVENTISTE": [
            {
              "station": "COLLEGE ADVENTISTE DE TONG/A",
              "voters": 321
            }
          ],
          "EKOMBА MEDONGO TONG-ADVENTISTE": [
            {
              "station": "COLLEGE ADVENTISTE DE TONG/B",
              "voters": 230
            }
          ],
          "EKONDONG": [
            {
              "station": "ECOLE PUBLIQUE D'EKONDONG/A",
              "voters": 196
            }
          ],
          "EMTSE": [
            {
              "station": "CASE COMMUNAUTAIRE CHEFFERIE D'EMTSE/A",
              "voters": 73
            }
          ],
          "BOUNDJOU ESEKA GARE ESSIMEYONG NSEN-ETО": [
            {
              "station": "ECOLE PUBLIQUE D'ESSEKA-GARE/A",
              "voters": 194
            },
            {
              "station": "ECOLE PUBLIQUE D'ESSEKA-GARE/B",
              "voters": 234
            },
            {
              "station": "ECOLE PUBLIQUE D'ESSEKA-GARE/C",
              "voters": 142
            }
          ],
          "ASSOBININGA ESSAMESSO OKOALAT": [
            {
              "station": "ECOLE PUBLIQUE D'OKOALAT/A",
              "voters": 96
            }
          ],
          "EKONE ETAM-KINICK MEKON I OUASSA-BAMVELE": [
            {
              "station": "CASE COM. CHEFFERIE DE OUASSA-BAMVELE/A",
              "voters": 234
            },
            {
              "station": "CASE COM. CHEFFERIE DE OUASSA-BAMVELE/B",
              "voters": 220
            }
          ],
          "EWANGAL": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO I-A/ A",
              "voters": 105
            }
          ],
          "KOM MENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MENGUE/A",
              "voters": 336
            }
          ],
          "LEMBE-BAGDJA": [
            {
              "station": "CASE A PALABRE CHEF. DE LEMBE-BAGDJA/ A",
              "voters": 71
            }
          ],
          "EBABOT LONGO I": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO I-B/ A",
              "voters": 322
            },
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO I-B/ B",
              "voters": 302
            },
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO I-B/ C",
              "voters": 161
            }
          ],
          "LONGO II": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO II/ A",
              "voters": 361
            }
          ],
          "LONGO I": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE LONGO II/ B",
              "voters": 209
            }
          ],
          "MEDONGO-SUD QUARTIER LYCEE": [
            {
              "station": "LYCEE CLASSIQUE DE NANGA-ЕВОКО/A",
              "voters": 252
            }
          ],
          "MBOMENDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MBOMENDJOCK/A",
              "voters": 110
            }
          ],
          "MEBOLE": [
            {
              "station": "HANGAR CHEFFERIE DE MEBOLE/A",
              "voters": 45
            }
          ],
          "MEDEGUE MEKOMO NGUINDA SUD": [
            {
              "station": "CASE COMMUNAUTAIRE CHEF. DE NGUINDA/ A",
              "voters": 134
            }
          ],
          "MENDOUMBE": [
            {
              "station": "HANGAR CHEFFERIE DE MENDOUMBE/A",
              "voters": 96
            }
          ],
          "MENGA'A MIMBANG NYAYESSE": [
            {
              "station": "ECOLE PUBLIQUE DE MENGA'A/A",
              "voters": 141
            }
          ],
          "MENGOA MENVOUNGA": [
            {
              "station": "ECOLE PUBLIQUE DE MENGOA/A",
              "voters": 141
            }
          ],
          "NANGMANA NGAMBA-ENDOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NANGMANA/A",
              "voters": 87
            }
          ],
          "MESSEGUE MEWOME NKONDOM": [
            {
              "station": "HANGAR CHEFFERIE DE MESSEGUE/A",
              "voters": 117
            }
          ],
          "MEYANG": [
            {
              "station": "ECOLE PUBLIQUE DE MEYANG/A",
              "voters": 58
            }
          ],
          "MIMBELE": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE MIMBELEI A",
              "voters": 55
            }
          ],
          "ASSOBININGA MOKOLO-BABOUTE": [
            {
              "station": "ECOLE P. ADVENTISTE MOKOLO-BABOUTE/ A",
              "voters": 338
            }
          ],
          "MOKOLO-BABOUTE": [
            {
              "station": "ESPLANADE CHEF. DE MOKOLO-BABOUTE/A",
              "voters": 365
            }
          ],
          "MOKOLO-BAMVELE QUARTIER ADMINISTRATIF": [
            {
              "station": "C.E.S. RURAL DE MOKOLO-BAMVELE/A",
              "voters": 186
            },
            {
              "station": "C.E.S. RURAL DE MOKOLO-BAMVELE/B",
              "voters": 122
            }
          ],
          "MOKOLO-BAMVELE": [
            {
              "station": "HANGAR CHEFFERIE DE MOKOLO-BAMVELE/ A",
              "voters": 257
            },
            {
              "station": "HANGAR CHEFFERIE DE MOKOLO-BAMVELE/ B",
              "voters": 245
            },
            {
              "station": "HANGAR CHEFFERIE DE MOKOLO-BAMVELE/ C",
              "voters": 200
            }
          ],
          "MVOMZOCK": [
            {
              "station": "HANGAR CHEFFERRIE DE MVOMZOCK/A",
              "voters": 192
            }
          ],
          "NDANDOUCK": [
            {
              "station": "CASE DE SANTE DE ZENGOAGA/A",
              "voters": 33
            }
          ],
          "NDJASSI NGUINDA-BABOUTE SASSE TSEKOUM": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NDJASSI/A",
              "voters": 138
            }
          ],
          "NDJIMEKONG": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NDJIMEKONG/A",
              "voters": 26
            }
          ],
          "NFOMALENG NKOAMBANG SANGA-NKOAMBANG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOAMBANG /A",
              "voters": 216
            }
          ],
          "NGAMBA-MEKPWO": [
            {
              "station": "CASE A PALABRE CHEF. DE NGAMBA-MEKPWO/A",
              "voters": 61
            }
          ],
          "NGOA-KOMBA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NGOA-KOMBA/A",
              "voters": 120
            }
          ],
          "BIKANG NGOULEMEKONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOULEMEKONG/A",
              "voters": 179
            }
          ],
          "NGUINDA": [
            {
              "station": "ECOLE PUBLIQUE DE NDJANANGA-NGUINDA/ A",
              "voters": 197
            }
          ],
          "NGUINDA NGUINDA NORD": [
            {
              "station": "ECOLE CATHOLIQUE DE NGUINDA/A",
              "voters": 189
            },
            {
              "station": "ECOLE CATHOLIQUE DE NGUINDA/B",
              "voters": 214
            }
          ],
          "NKONDONG": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NKONDONG IA",
              "voters": 346
            },
            {
              "station": "CASE A PALABRE CHEFFERIE DE NKONDONG /B",
              "voters": 104
            }
          ],
          "NKOTNAM": [
            {
              "station": "CHAPELLE EGLISEE CATH. DE NKOTNAM/A",
              "voters": 222
            },
            {
              "station": "CASE CHEFFERIE DE NKOTNAM/A",
              "voters": 244
            },
            {
              "station": "CASE CHEFFERIE DE NKOTNAM/B",
              "voters": 220
            }
          ],
          "MESSIBIGUI MEYOSSO OKASSANG II": [
            {
              "station": "CASE A PALABRE CHEFFERIE MEYOSSO 1/A",
              "voters": 74
            }
          ],
          "PRISON-MELONGO": [
            {
              "station": "SERVICE ADMIN. PRISON DE NANGA-EBOKО/ A",
              "voters": 124
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "SALLE DES AUDIENCES DU TRIBUNAL/A",
              "voters": 207
            },
            {
              "station": "SALLE DES AUDIENCES DU TRIBUNAL/B",
              "voters": 212
            }
          ],
          "ABANG QUARTIER HAOUSSA": [
            {
              "station": "ESPLANADE CHEF. DU QUARTIER HAOUSSA/ A",
              "voters": 333
            },
            {
              "station": "ESPLANADE CHEF. DU QUARTIER HAOUSSA/ B",
              "voters": 238
            },
            {
              "station": "ESPLANADE CHEF. DU QUARTIER HAOUSSA/ D",
              "voters": 128
            }
          ],
          "ABANG": [
            {
              "station": "ESPLANADE CHEF. DU QUARTIER HAOUSSA/ C",
              "voters": 309
            }
          ],
          "SANDJA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE SANDJA /A",
              "voters": 84
            }
          ],
          "WALLA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE WALLA/A",
              "voters": 56
            }
          ],
          "MEDONGO": [
            {
              "station": "CASE CHEFFERIE MEDONGO/A",
              "voters": 300
            }
          ],
          "BITAM": [
            {
              "station": "SALLE D'AGRICULTURE DE BITAM/A",
              "voters": 95
            }
          ],
          "EBENG": [
            {
              "station": "CASE COMMUNAUAIRE D'EBENG/A",
              "voters": 64
            }
          ],
          "EKOCK": [
            {
              "station": "SALLE COMMUNAUTAIRE D'EKOCK/A/A",
              "voters": 168
            }
          ],
          "ESSAMESSO": [
            {
              "station": "HAGAR CHEFFERIE D'ESSAMESSO/A",
              "voters": 76
            }
          ],
          "EKONE": [
            {
              "station": "CASE COMMUNAUTAIRE D'EKONE/A",
              "voters": 36
            }
          ],
          "SASSE": [
            {
              "station": "ESPLANADE CHEFFERIE SASSE/A",
              "voters": 85
            }
          ]
        },
        "NKOTENG": {
          "ANDOM": [
            {
              "station": "ANDOM ECOLE MATERNELLE/A",
              "voters": 348
            },
            {
              "station": "ANDOM ECOLE MATERNELLE/B",
              "voters": 360
            },
            {
              "station": "FOYER CATH ST ETIENNE 1/A",
              "voters": 241
            },
            {
              "station": "FOYER CATH ST ETIENNE I/B",
              "voters": 235
            },
            {
              "station": "FOYER CATH ST ETIENNE II/A",
              "voters": 123
            },
            {
              "station": "ECOLE PUBLIQUE DU CHATEAU/A",
              "voters": 220
            },
            {
              "station": "ECOLE PUBLIQUE DU CHATEAU/B",
              "voters": 234
            }
          ],
          "AVANGANE NDOUMBA": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMBA/A",
              "voters": 213
            }
          ],
          "BAMBOU CAMP MARTIN": [
            {
              "station": "ECOLE PUBLIQUE DE MBAYENE GPE II/A",
              "voters": 175
            }
          ],
          "BAMBOU CAMP-NANGAH": [
            {
              "station": "ECOLE PUBLIQUE DE MBAYENE GPEI/A",
              "voters": 271
            },
            {
              "station": "ECOLE PUBLIQUE DE MBAYENE GPEI/B",
              "voters": 257
            }
          ],
          "BANKENG": [
            {
              "station": "ECOLE PUBLIQUE DE BANKENG/A",
              "voters": 94
            }
          ],
          "BIFOGO": [
            {
              "station": "BIFOGO AUBERGE SUCRE D'ORGE/A",
              "voters": 226
            }
          ],
          "BILONE": [
            {
              "station": "BILONE I ESPLANADE CHEFFERIE/A",
              "voters": 313
            },
            {
              "station": "BILONE III HANGAR CHEFFERIE / A",
              "voters": 234
            },
            {
              "station": "BILONE II FOYER GENDARMERIE/A",
              "voters": 280
            }
          ],
          "CAMP MARTIN": [
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/A",
              "voters": 313
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/B",
              "voters": 290
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/C",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/D",
              "voters": 363
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/E",
              "voters": 258
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/F",
              "voters": 219
            },
            {
              "station": "ECOLE PUBLIQUE MBAYENE II/G",
              "voters": 214
            }
          ],
          "CAMP-NANGAH": [
            {
              "station": "ECOLE-MATERNELLE/A",
              "voters": 436
            },
            {
              "station": "ANGOUMA II-FOYER SOSUCAM/A",
              "voters": 137
            },
            {
              "station": "ECOLE-PRIMAIRE/A",
              "voters": 206
            },
            {
              "station": "ANGOUMA I-CLUB-CITE/A",
              "voters": 24
            }
          ],
          "CENTRE COMMERCIAL": [
            {
              "station": "JAEMP-INSPECTION/A",
              "voters": 284
            },
            {
              "station": "FOYER DU NDE/A",
              "voters": 351
            },
            {
              "station": "FOYER DU NDE/B",
              "voters": 121
            }
          ],
          "DOUA ESSOBOUTOU": [
            {
              "station": "ECOLE PUBLIQUE DE DOUA I/A",
              "voters": 360
            }
          ],
          "DOUA": [
            {
              "station": "ECOLE PUBLIQUE DE DOUA II/A",
              "voters": 302
            },
            {
              "station": "ECOLE PUBLIQUE DE DOUA II/B",
              "voters": 297
            },
            {
              "station": "ECOLE PUBLIQUE DE DOUA II/C",
              "voters": 243
            },
            {
              "station": "ECOLE PUBLIQUE DE DOUA II/ D",
              "voters": 265
            }
          ],
          "EBOL-MBAMA ELAP NIOMBO-OTORO OUASSA-BTE": [
            {
              "station": "ECOLE PUBLIQUE DE OUASSA BABOUTE/A",
              "voters": 186
            }
          ],
          "EBOMETENDE OKALA": [
            {
              "station": "ECOLE PUBLIQUE DE EBOMETENDE/A",
              "voters": 50
            }
          ],
          "HAOUSSA": [
            {
              "station": "HAOUSSA-ECOLE-MATERNELLE/A",
              "voters": 297
            },
            {
              "station": "HAOUSSA-ECOLE PUBLIQUE/A",
              "voters": 330
            },
            {
              "station": "HAOUSSA-ECOLE PUBLIQUE/B",
              "voters": 136
            }
          ],
          "KOMBO MEYOSSO": [
            {
              "station": "ECOLE PUBLIQUE DE KOMBO/A",
              "voters": 74
            }
          ],
          "MBEZOA MENGOUBOU": [
            {
              "station": "ECOLE PUBLIQUE DE BISSA/A",
              "voters": 351
            },
            {
              "station": "ECOLE PUBLIQUE DE BISSA/B",
              "voters": 92
            }
          ],
          "MBEZOA": [
            {
              "station": "MBEZOA ECOLE BILINGUE/A",
              "voters": 255
            },
            {
              "station": "MBEZOA ECOLE BILINGUE/B",
              "voters": 257
            },
            {
              "station": "MBEZOA ECOLE BILINGUE/C",
              "voters": 315
            }
          ],
          "MEBOE MENDJUI": [
            {
              "station": "ECOLE PUBLIQUE DE MENDJUI/A",
              "voters": 117
            }
          ],
          "MEMGANGME MESSENG": [
            {
              "station": "MESSENG ESPLANADE-CHEFFERIE/A",
              "voters": 127
            }
          ],
          "CAMP-NANGAH MENDIBI": [
            {
              "station": "ECOLE MATERNELLE DU QUARTIER ADMIN/ A",
              "voters": 346
            },
            {
              "station": "ECOLE MATERNELLE DU QUARTIER ADMIN/ B",
              "voters": 194
            },
            {
              "station": "ECOLE MATERNELLE DU QUARTIER ADMIN/ C",
              "voters": 208
            }
          ],
          "MENDIBI": [
            {
              "station": "FOYER TOUPOURI/A",
              "voters": 392
            },
            {
              "station": "FOYER TOUPOURI/B",
              "voters": 110
            }
          ],
          "MENGOUBOU": [
            {
              "station": "LYCEE-CLASSIQUE/A",
              "voters": 373
            },
            {
              "station": "LYCEE-CLASSIQUE/B",
              "voters": 154
            }
          ],
          "MVAN NDA KOUDA": [
            {
              "station": "MVAN ESPLANADE-CHEFFERIE/A",
              "voters": 91
            }
          ],
          "NGAMBA": [
            {
              "station": "NGAMBA EGLISE CATHOLIQUE/A",
              "voters": 43
            }
          ],
          "MEBOLO NKOTENG CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOTENG CHEFFERIE/A",
              "voters": 175
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "CENTRE DE JEUNESSE/A",
              "voters": 359
            }
          ],
          "ZILLI": [
            {
              "station": "ECOLE PUBLIQUE DE ZILLI/A",
              "voters": 110
            }
          ]
        },
        "NSEM": {
          "AKONGA AMBANE DANKALA KPEMI": [
            {
              "station": "ESPLANADE CHEFFERIE D'AMBANE/A",
              "voters": 137
            }
          ],
          "ANGUE ASSECK EPOCK NDEN": [
            {
              "station": "ESPLANADE CHEFFERIE D'ANGUE/A",
              "voters": 145
            }
          ],
          "BANDJA": [
            {
              "station": "EGLISE ADVENTISTE DE BANDJA/A",
              "voters": 133
            }
          ],
          "CAMP CORON MBENGTENG": [
            {
              "station": "CAMP CORON/A",
              "voters": 217
            }
          ],
          "DEH ZING": [
            {
              "station": "ESPLANADE CHEFFERIE DE ZING/A",
              "voters": 54
            }
          ],
          "EBEN EWAKANE KORKENONG MFOUMI NGONG": [
            {
              "station": "CES DE NSEM/A",
              "voters": 119
            }
          ],
          "EGOBI ETOL NSEM I": [
            {
              "station": "ECOLE PUBLIQUE DE NSEM/A",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE DE NSEM/B",
              "voters": 113
            }
          ],
          "EMAN MEBANGA I MEBANGA II MEKONI NKEA CENTRE SANG": [
            {
              "station": "SALLE COMMUNAUTAIRE DE MEKONI/A",
              "voters": 252
            }
          ],
          "ENDOA MBENDA": [
            {
              "station": "ECOLE PUBLIQUE DE MBENDA/A",
              "voters": 277
            }
          ],
          "ENGUELE MBONG NDOH SO'O NDENE": [
            {
              "station": "ECOLE PUBLIQUE DE MBONG/A",
              "voters": 214
            }
          ],
          "EPEDA I": [
            {
              "station": "ECOLE PUBLIQUE D'EPEDA I/A",
              "voters": 117
            }
          ],
          "EPEDA II": [
            {
              "station": "ESPLANADE CHEFFERIE D'EPEDA I/A",
              "voters": 84
            }
          ],
          "ESSONG I ESSONG II GABON MEDOUMA": [
            {
              "station": "ESPLANADE CHEFFERIE D'ESSONGI/A",
              "voters": 60
            }
          ],
          "NSEM II": [
            {
              "station": "ECOLE ADVENTISTE DE NSEM/A",
              "voters": 132
            }
          ],
          "KIVIENT MOKOLO NYENG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NYENG/A",
              "voters": 91
            }
          ],
          "MANDJOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJOUCK/A",
              "voters": 140
            }
          ],
          "MEKON IV": [
            {
              "station": "ECOLE PUBLIQUE DE MEKON IV/А",
              "voters": 112
            }
          ],
          "MEYANE": [
            {
              "station": "EGLISE ADVENTISTE DE MEYANE/A",
              "voters": 132
            }
          ],
          "MEYENE": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYENE/A",
              "voters": 54
            }
          ],
          "MIMBANGA I": [
            {
              "station": "ESPLANADE CHEFFERIE DE MIMBANGA I/A",
              "voters": 89
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MIMBANGA/A",
              "voters": 103
            }
          ],
          "MENGUE-NSEM": [
            {
              "station": "EPP MENGUE-NSEM/A",
              "voters": 39
            }
          ]
        }
      },
      "LEKIE": {
        "BATCHENGA": {
          "BALLONG BALONG II": [
            {
              "station": "FOYER COMMUNAUTAIRE BALLONGI/A",
              "voters": 338
            }
          ],
          "BALLONG I BALONG II": [
            {
              "station": "FOYER COMMUNAUTAIRE BALLONG I/B",
              "voters": 326
            },
            {
              "station": "FOYER COMMUNAUTAIRE BALLONGI/C",
              "voters": 336
            },
            {
              "station": "HANGAR DU MARCHE DE BATCHENGA/A",
              "voters": 405
            },
            {
              "station": "HANGAR DU MARCHE DE BATCHENGA/B",
              "voters": 387
            },
            {
              "station": "HANGAR DU MARCHE DE BATCHENGA/D",
              "voters": 77
            }
          ],
          "BALONG II NKOLMEKКОК": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHENGA/A",
              "voters": 303
            }
          ],
          "BALONG II NKOLMEKOK": [
            {
              "station": "ECOLE PUBLIQUE DE BATCHENGA/B",
              "voters": 160
            }
          ],
          "BALLONGI BALONG II": [
            {
              "station": "HANGAR DU MARCHE DE BATCHENGA/C",
              "voters": 385
            }
          ],
          "EBANG - MINALA": [
            {
              "station": "ECOLE PUBLIQUE D'EBANG - MINALA/A",
              "voters": 128
            }
          ],
          "ELON": [
            {
              "station": "ECOLE PUBLIQUE D'ELON/A",
              "voters": 257
            }
          ],
          "EMANA BATCHENGA": [
            {
              "station": "FOYER GARE FERROVIERE DE BATCHENGA/ A",
              "voters": 199
            }
          ],
          "BALLONG I EMANA BATCHENGA": [
            {
              "station": "LYCEE GENERAL DE BATCHENGA/A",
              "voters": 306
            },
            {
              "station": "LYCEE GENERAL DE BATCHENGA/B",
              "voters": 381
            }
          ],
          "BALLONG EMANA BATCHENGA": [
            {
              "station": "LYCEE GENERAL DE BATCHENGA/C",
              "voters": 97
            }
          ],
          "BALONG II EMANA BATCHENGA EMANA CENTRE": [
            {
              "station": "CHAPELLE CATHOLIQUE D'EMANA/A",
              "voters": 92
            }
          ],
          "FAMENASSI": [
            {
              "station": "CHAPELLE CATHOLIQUE FAMENASSI/A",
              "voters": 235
            }
          ],
          "MEBASSA": [
            {
              "station": "ESPLANADE CHEFFERIE MEBASSA/A",
              "voters": 356
            }
          ],
          "MEVEP": [
            {
              "station": "FOYER COMMUNAUTAIRE MEVEP/A",
              "voters": 76
            }
          ],
          "NACHTIGAL": [
            {
              "station": "ESPLANADE CHEFFERIE NACHTIGAL/A",
              "voters": 203
            }
          ],
          "NALASSI": [
            {
              "station": "FOYER COMMUNAUTAIRE NALASSI/A",
              "voters": 52
            },
            {
              "station": "ECOLE PUBLIQUE NALASSI/A",
              "voters": 272
            }
          ],
          "NDJI": [
            {
              "station": "ECOLE PUBLIQUE NDJI/A",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE NDJI/B",
              "voters": 235
            }
          ],
          "NKOLMEКОК": [
            {
              "station": "DISPENSAIRE NKOLMEKOK/A",
              "voters": 364
            }
          ],
          "OLEMBE": [
            {
              "station": "ECOLE CATHOLIQUE D'OLEMBE/A",
              "voters": 334
            }
          ],
          "OTIBILI": [
            {
              "station": "ECOLE PUBLIQUE D'OTIBILI/A",
              "voters": 277
            }
          ],
          "AKOK": [
            {
              "station": "ECOLE PUBLIQUE DE NDJI II/A",
              "voters": 129
            }
          ],
          "CHAPELLE CATRHOLIQUE D'EMANA EMANA CENTRE": [
            {
              "station": "FOYER COMMUNAUTAIRE AMS D'EMANA/A",
              "voters": 338
            }
          ],
          "NKOPKALI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOPKALI/A",
              "voters": 131
            }
          ],
          "BIYAGA": [
            {
              "station": "ECOLE PUBLIQUE DE BIYAGA/A",
              "voters": 223
            }
          ]
        },
        "EBEBDA": {
          "BIKOGO": [
            {
              "station": "ECOLE PUBLIQUE DE MELEN-MENGAM/A",
              "voters": 218
            }
          ],
          "DJOUNYAT": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUNYAT/A",
              "voters": 325
            }
          ],
          "EBEBDAI": [
            {
              "station": "MISSION CATHOLIQUE D'EBEBDA I (CRAT) /A",
              "voters": 394
            }
          ],
          "EBEBDA I": [
            {
              "station": "ESPLANADE CHEFFERIE D'EBEBDA1/A",
              "voters": 243
            }
          ],
          "EBEBDA II CENTRE URBAIN LENDONG": [
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/A",
              "voters": 315
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/B",
              "voters": 317
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/C",
              "voters": 294
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/D",
              "voters": 283
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/E",
              "voters": 290
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/F",
              "voters": 211
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/G",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE D'EBEBDA II/H",
              "voters": 253
            }
          ],
          "EBONG ZOKOGO": [
            {
              "station": "ESPLANADE CHEFFERIE D'EBONG/A",
              "voters": 214
            }
          ],
          "EKOME": [
            {
              "station": "ESPLANADE CHEFFERIE D'EKOME/A",
              "voters": 154
            }
          ],
          "ENDOUM": [
            {
              "station": "ESPLANADE CHEFFERIE D'ENDOUM/A",
              "voters": 324
            }
          ],
          "EBEBDA II CENTRE URBAIN ETAM KOUMA": [
            {
              "station": "CASE COOPERATIVE D'ETAM KOUMA/A",
              "voters": 252
            }
          ],
          "EYENE": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE D'EYENE/A",
              "voters": 281
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE D'EYENE/B",
              "voters": 65
            }
          ],
          "KOAN": [
            {
              "station": "ECOLE PUBLIQUE DE KOAN/A",
              "voters": 35
            },
            {
              "station": "COLLEGE D'ENSEIGNEMENT SECONDAIRE DE KOAN/A",
              "voters": 115
            }
          ],
          "LEKA": [
            {
              "station": "CASE COOPERATIVE DE LEKA/A",
              "voters": 270
            },
            {
              "station": "CASE COOPERATIVE DE LEKA/B",
              "voters": 84
            }
          ],
          "LENDONG NEGA": [
            {
              "station": "ECOLE PUBLIQUE DE LENDONG/A",
              "voters": 354
            }
          ],
          "LENYONG NKOL-ELOUGA": [
            {
              "station": "ECOLE PUBLIQUE DE LENYONG/A",
              "voters": 273
            }
          ],
          "MBENEGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBENEGA/A",
              "voters": 164
            }
          ],
          "MELEN": [
            {
              "station": "CASE COOPERATIVE DE MELEN/А",
              "voters": 250
            },
            {
              "station": "CASE COOPERATIVE DE MELEN/B",
              "voters": 77
            }
          ],
          "NDOUNDA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDOUNDA/A",
              "voters": 96
            }
          ],
          "NGOKSAI": [
            {
              "station": "CASE COOPERATIVE DE NGOKSA I/A",
              "voters": 204
            }
          ],
          "NGOKSA II": [
            {
              "station": "MISSION CATHOLIQUE D'ELIG-EDOUMA/A",
              "voters": 190
            }
          ],
          "NGOKSA III": [
            {
              "station": "SAAR-SM NGOK-LEVA/A",
              "voters": 143
            }
          ],
          "NKANG-EFOK": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE NKANG-EFOK/A",
              "voters": 305
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE NKANG-EFOK/B",
              "voters": 57
            }
          ],
          "NKOL-EDJON": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-EDJON/A",
              "voters": 104
            }
          ],
          "NKOL-PАК": [
            {
              "station": "NKOL-PAK HANGAR/A",
              "voters": 127
            }
          ],
          "NKOL-OSSANG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-OSSANG/ A",
              "voters": 248
            }
          ],
          "NKOL-MESSA NKOMI": [
            {
              "station": "CASE COMMUNAUTAIRE NKOM I BLOC I/A",
              "voters": 219
            }
          ],
          "NKOM I": [
            {
              "station": "CASE COMMUNAUTAIRE NKOM I BLOC II/A",
              "voters": 106
            }
          ],
          "NKOM II": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE NKOM II/A",
              "voters": 125
            }
          ],
          "NLONG-ZOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE NLONG-ZOK/A",
              "voters": 226
            }
          ],
          "OLONG": [
            {
              "station": "ESPLANADE CHEFFERIE D'OLONG/A",
              "voters": 278
            }
          ],
          "POLO I": [
            {
              "station": "ECOLE PUBLIQUE DE POLO I/A",
              "voters": 217
            }
          ],
          "POLO II": [
            {
              "station": "ECOLE PUBLIQUE DE POLO II/A",
              "voters": 101
            }
          ],
          "TSANG": [
            {
              "station": "ECOLE PUBLIQUE DE TSANG /A",
              "voters": 165
            }
          ],
          "ZOKOGO": [
            {
              "station": "ECOLE PUBLIQUE DE ZOKOGO/A",
              "voters": 292
            }
          ],
          "NKOG-EDZEN NKOG-EDZEN": [
            {
              "station": "HANGAR MARCHE DE NKOG-EDZEN/A",
              "voters": 268
            },
            {
              "station": "HANGAR MARCHE DE NKOG-EDZEN/B",
              "voters": 247
            }
          ],
          "EBOMZOUT": [
            {
              "station": "ECOLE PUBLIQUE D'EBOMZOUT /A/A",
              "voters": 284
            }
          ],
          "ETAM KOUMA": [
            {
              "station": "ECOLE CATHOLIQUE D'ETAM-KOUMA/A",
              "voters": 64
            }
          ],
          "NKOL-ELOUGA": [
            {
              "station": "CENTRE DE SANTE DE NKOL-ELOUGOU/A",
              "voters": 292
            }
          ],
          "BILIK-BINDIK": [
            {
              "station": "ECOLE PUBLIQUE DE BILIK-BINDIK/A",
              "voters": 401
            }
          ]
        },
        "ELIG-MFOMO": {
          "AKAK": [
            {
              "station": "ESPLANADE CHEFFERIE D'AKAK/A",
              "voters": 199
            }
          ],
          "AKAK BIKOGO": [
            {
              "station": "CASE COOPERATIVE DE BIKOGO/A",
              "voters": 49
            }
          ],
          "BODO": [
            {
              "station": "ESPLANADE CHEFFERIE DE BODO/A",
              "voters": 213
            }
          ],
          "ELIG-MFOMO CENTRE URBAIN": [
            {
              "station": "ECOLE PUBLIQUE D'ELIG-MFOMO/A",
              "voters": 299
            },
            {
              "station": "ECOLE PUBLIQUE D'ELIG-MFOMO /B",
              "voters": 231
            },
            {
              "station": "ECOLE PUBLIQUE D'ELIG-MFOMO/C",
              "voters": 253
            },
            {
              "station": "LYCEE D'ELIG-MFOMO/A",
              "voters": 239
            },
            {
              "station": "LYCEE D'ELIG-MFOMO/B",
              "voters": 127
            }
          ],
          "ELIG-ONANA": [
            {
              "station": "ESPLANADE CHEFFERIE D'ELIG-ONANA/A",
              "voters": 215
            }
          ],
          "ELOT-KOS": [
            {
              "station": "ESPLANADE CHEFFERIE ELOT-KOS/A",
              "voters": 159
            },
            {
              "station": "ECOLE PUBLIQUE ELOT-KOS/A",
              "voters": 161
            }
          ],
          "ENDAMA": [
            {
              "station": "ECOLE PUBLIQUE ENDAMA I/A",
              "voters": 312
            },
            {
              "station": "ECOLE PUBLIQUE ENDAMA1/B",
              "voters": 105
            },
            {
              "station": "ECOLE PUBLIQUE ENDAMA I CARREFOUR/A",
              "voters": 214
            }
          ],
          "KOKODO II": [
            {
              "station": "CASE COOPERATIVE DE KOKODO II/A",
              "voters": 260
            }
          ],
          "KOMO-ESSELE": [
            {
              "station": "ECOLE PUBLIQUE D'EKOM-ESSELE/А",
              "voters": 178
            }
          ],
          "LEKIE I": [
            {
              "station": "ESPLANADE CHEFFERIE DE LEKIEI/A",
              "voters": 114
            }
          ],
          "LEKIE I LEKIE II": [
            {
              "station": "ESPLANADE CASE DU NOTABLE DE LEKIE II/ A",
              "voters": 82
            }
          ],
          "MBANEDOUMA I": [
            {
              "station": "CENTRE DE SANTE DE MBANEDOUMAI/A",
              "voters": 88
            }
          ],
          "MBANEDOUMA II": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBANEDOUMA II TA",
              "voters": 185
            }
          ],
          "MEBOMO": [
            {
              "station": "ECOLE PUBLIQUE DE MEBOMO/A",
              "voters": 56
            }
          ],
          "MEBOMО": [
            {
              "station": "ECOLE MATERNELLE DE МЕВОMO/A",
              "voters": 241
            }
          ],
          "MESSAMA": [
            {
              "station": "ESPLANADE CASE DU NOTABLE DE MESSAMA/A",
              "voters": 45
            }
          ],
          "NIGA I": [
            {
              "station": "ECOLE PUBLIQUE DE NIGA I/A",
              "voters": 354
            }
          ],
          "NIGA II": [
            {
              "station": "COLLEGE D'ENS. SECONDAIRE DE NIGA II/A",
              "voters": 78
            }
          ],
          "NKENGUE": [
            {
              "station": "CASE COOPERATIVE DE NKENGUE/A",
              "voters": 244
            },
            {
              "station": "ECOLE PUBLIQUE DE NKENGUE /А",
              "voters": 156
            }
          ],
          "NKOL BIKOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL BIKOK/A",
              "voters": 160
            }
          ],
          "NKOL MBA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL MBA/A",
              "voters": 241
            }
          ],
          "BIKOGO NKOL NANGA": [
            {
              "station": "CASE COOPERATIVE DE NKOL NANGA/A",
              "voters": 218
            }
          ],
          "NKOL OBANG I": [
            {
              "station": "CASE COOPERATIVE DE NKOL OBANG I/A",
              "voters": 218
            },
            {
              "station": "CASE COOPERATIVE DE NKOL OBANG I/B",
              "voters": 112
            },
            {
              "station": "ESPLANADE CHEFFERIE NKOL OBANG I/A",
              "voters": 206
            }
          ],
          "NKOL OBANG II": [
            {
              "station": "ESPLANADE CHEFFERIE NKOL OBANG II/A",
              "voters": 175
            }
          ],
          "NKOL OSSAN I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL OSSAN/A",
              "voters": 306
            }
          ],
          "NKOL OSSAN II": [
            {
              "station": "CETIC DE NKOL OSSAN/A",
              "voters": 197
            },
            {
              "station": "ESPL. CASE DU NOTABLE DE NKOL OSSAN III IA",
              "voters": 126
            }
          ],
          "NKONG BISSEL": [
            {
              "station": "ESPLANADE CASE DU NOTABLE NKONG BISSEL/A",
              "voters": 149
            }
          ],
          "OKOK": [
            {
              "station": "ESPLANADE CASE DU NOTABLE D'OKOK/A",
              "voters": 264
            }
          ],
          "ENDAMA II": [
            {
              "station": "ECOLE PUBLIQUE D'ENDAMA II /A/A",
              "voters": 208
            }
          ],
          "BIKOGO": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOGO /A/A",
              "voters": 283
            }
          ],
          "ENOBITА": [
            {
              "station": "ECOLE PUBLIQUE ENOBITA/A",
              "voters": 291
            }
          ],
          "LEKOUKOUA": [
            {
              "station": "ECOLE MATERNELLE DE LEKOUKOUA/A",
              "voters": 200
            }
          ],
          "KOKOD01": [
            {
              "station": "ECOLE PUBLIQUE DE KOKODO 1/A",
              "voters": 278
            }
          ],
          "MEBOMО NKOL OPOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-OPOUMA/A",
              "voters": 43
            }
          ]
        },
        "EVODOULA": {
          "EKOL": [
            {
              "station": "ECOLE PUBLIQUE D'EKOL/A",
              "voters": 291
            }
          ],
          "ELAH": [
            {
              "station": "ESPLANADE CHEFFERIE D'ELAH/A",
              "voters": 82
            }
          ],
          "ELIG-ZOGO": [
            {
              "station": "MAISON COOPERATIVE D'ELIG-ZOGO/A",
              "voters": 147
            }
          ],
          "ENOH": [
            {
              "station": "ESPLANADE CHEFFERIE D'ENOH/A",
              "voters": 120
            }
          ],
          "KALNGAНА": [
            {
              "station": "ECOLE PUBLIQUE DE KALNGAHA/A",
              "voters": 273
            }
          ],
          "KOMO": [
            {
              "station": "ECOLE PUBLIQUE DE KOMO/A",
              "voters": 261
            }
          ],
          "MEYOS": [
            {
              "station": "ECOLE PUBLIQUE DE MEYOS/A",
              "voters": 179
            }
          ],
          "MGBABANG I": [
            {
              "station": "MAISON COOPERATIVE DE MGBABANG I/A",
              "voters": 274
            }
          ],
          "MGBABANG II": [
            {
              "station": "MAISON COOPERATIVE DE MGBABANG II/A",
              "voters": 90
            }
          ],
          "MGBABANG III": [
            {
              "station": "ECOLE PUBLIQUE DE MGBABANG III/A",
              "voters": 136
            }
          ],
          "MINWOHO SUD": [
            {
              "station": "ESPLANADE CHEFFERIE MINWOHO SUD/ A",
              "voters": 170
            }
          ],
          "MISSION CATHOLIQUE": [
            {
              "station": "ECOLE MARIE-REINE D'EVODOULA/A",
              "voters": 199
            }
          ],
          "NGUESSE": [
            {
              "station": "MAISON COOPERATIVE DE NGUESSE/A",
              "voters": 175
            }
          ],
          "NKOL-ABANG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-ABANG/A",
              "voters": 194
            }
          ],
          "NKOLASSA I": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOLASSAI/A",
              "voters": 158
            }
          ],
          "NKOLASSA II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLASSA II/ A",
              "voters": 278
            }
          ],
          "NKOL-KOUGDAI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-KOUGDAI/A",
              "voters": 356
            }
          ],
          "NKOL-KOUGDA I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-KOUGDA1/B",
              "voters": 90
            }
          ],
          "NKOL-KOUGDA II": [
            {
              "station": "ESPLANADE CHEFFERIE NKOL-KOUGDA II/A",
              "voters": 162
            }
          ],
          "NKOLMEYOSI": [
            {
              "station": "MAISON COOPERATIVE DE NKOLMEYOS 1/A",
              "voters": 219
            }
          ],
          "NKOLMEYOS II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEYOS II/A",
              "voters": 77
            }
          ],
          "NKOLNGUELE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLNGUELE/A",
              "voters": 155
            }
          ],
          "NKOL-OHANDJA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-OHANDJA/ A",
              "voters": 137
            }
          ],
          "NKOL-SENG I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-SENG I/A",
              "voters": 157
            }
          ],
          "NKOL-SENG II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-SENGII/A",
              "voters": 61
            }
          ],
          "NLONG-MENANG": [
            {
              "station": "ECOLE PUBLIQUE DE NLONG-MENANG/A",
              "voters": 263
            }
          ],
          "NLOUDOU": [
            {
              "station": "ECOLE PUBLIQUE DE NLOUDOU/A",
              "voters": 231
            }
          ],
          "NTOUDA SUD": [
            {
              "station": "ESPLANADE CHEFFERIE DE NTOUDA SUD/A",
              "voters": 125
            }
          ],
          "OKOK I": [
            {
              "station": "ECOLE PUBLIQUE D'OKOK I/A",
              "voters": 284
            }
          ],
          "OKOKI": [
            {
              "station": "ECOLE PUBLIQUE D'OKOKI/B",
              "voters": 84
            }
          ],
          "PONGSOLO": [
            {
              "station": "LYCEE DE PONGSOLO/A",
              "voters": 231
            }
          ],
          "QUARTIER ACCUEIL": [
            {
              "station": "ECOLE PUBLIQUE D'EVODOULA GROUPE 1/A",
              "voters": 308
            },
            {
              "station": "ECOLE PUBLIQUE D'EVODOULA GROUPE 1/B",
              "voters": 155
            },
            {
              "station": "ECOLE PUBLIQUE D'EVODOULA GROUPE 1/C",
              "voters": 196
            }
          ],
          "QUARTIER AYISSI": [
            {
              "station": "ECOLE PUBLIQUE D'EVODOULA GROUPE II/ A",
              "voters": 258
            },
            {
              "station": "ECOLE PUBLIQUE D'EVODOULA GROUPE II/ B",
              "voters": 84
            }
          ],
          "MISSION CATHOLIQUE QUARTIER ACCUEIL QUARTIER HAOUSSA": [
            {
              "station": "ECOLE BILINGUE D'EVODOULA/A",
              "voters": 221
            }
          ],
          "EVODOULA VILLAGE": [
            {
              "station": "ECOLE MATERNELLE D'EVODOULA VILLAGE/ A",
              "voters": 182
            }
          ],
          "MBEL-BIKOL": [
            {
              "station": "CENTRE DE SANTE DE MBEL-BIKOL/A",
              "voters": 172
            }
          ],
          "NKOLAKОК": [
            {
              "station": "MAISON COOPERATIVE DE NKOLAKOK/A",
              "voters": 359
            }
          ],
          "ETOK": [
            {
              "station": "MAISON COMMUNAUTAIRE D'ETOK/A",
              "voters": 393
            }
          ],
          "EYENG MEYONG": [
            {
              "station": "ECOLE PUBLIQUE D'EYEN MEYONG/A",
              "voters": 140
            }
          ],
          "MINWOHO CENTRE": [
            {
              "station": "ECOLE MATERNELLE DE MINWOHO CENTRE/ A",
              "voters": 220
            }
          ],
          "NGOBO": [
            {
              "station": "ECOLE MATERNELLE DE NGOBO/A",
              "voters": 202
            }
          ],
          "NKOD-ABEL": [
            {
              "station": "CHAPELLE CATHOLIQUE SAINT DAMIEN DE NKOD-EBEL/A",
              "voters": 146
            }
          ],
          "NTOUDA CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE NTOUDA CENTRE/A",
              "voters": 130
            }
          ],
          "OKOK II": [
            {
              "station": "ECOLE CATHOLIQUE SAINTE CROIX D'OKOK I/A",
              "voters": 245
            }
          ],
          "POBO": [
            {
              "station": "ECOLE PUBLIQUE DE POBO/A",
              "voters": 121
            }
          ],
          "DOUMASSI": [
            {
              "station": "ECOLE BILINGUE DOUMASSI/A",
              "voters": 162
            }
          ]
        },
        "LOBO": {
          "ADZAP": [
            {
              "station": "CASE DE PRIERE D'ADZAP CENTRE/A",
              "voters": 124
            }
          ],
          "AKOK LOBO": [
            {
              "station": "ECOLE PUBLIQUE D'AKOK CENTRE/A",
              "voters": 81
            }
          ],
          "AKOK": [
            {
              "station": "ESPLANADE DOM MVOLO MICHEL A SOMBEME/A",
              "voters": 126
            }
          ],
          "EKEKAM 3": [
            {
              "station": "ECOLE PUBLIQUE D'EKEKAM 3/A",
              "voters": 186
            },
            {
              "station": "CASE DE PRIERE D'EKEKAM 3 NKOLMELEN A",
              "voters": 56
            }
          ],
          "EKOUMTIK": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUMTIK/A",
              "voters": 133
            },
            {
              "station": "CASE DE PRIERE DE NKONGNALAK/A",
              "voters": 121
            },
            {
              "station": "ESPL. DOM EBODE AWONO D'ETSIT KOA MEVO/A",
              "voters": 132
            }
          ],
          "ELIG-EBODE": [
            {
              "station": "ESPLANADE DOM FEU AWONO EBODE.J/A",
              "voters": 91
            }
          ],
          "EYANG": [
            {
              "station": "ESPLANADE CHEFFERIE D'EYANG/A",
              "voters": 237
            }
          ],
          "KELLE": [
            {
              "station": "ESPLANADE CHEFFERIE DE KELLE/A",
              "voters": 75
            }
          ],
          "KOUDI": [
            {
              "station": "ESPLANADE CHEFFERIE DE KOUDI/A",
              "voters": 87
            },
            {
              "station": "ESPL. DOM NOTABLE MVOLO GALLUS A MEFEME/A",
              "voters": 166
            }
          ],
          "LOBO": [
            {
              "station": "ECOLE PUBLIQUE DE LOBO CENTRE/A",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE DE LOBO CENTRE/B",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DE LOBO CENTRE/C",
              "voters": 296
            },
            {
              "station": "LYCEE DE LOBO A NKADIP-ASSI/A",
              "voters": 212
            },
            {
              "station": "ESPL. DOM NKOA ETEME SYMPLICEA MEMVOA/A",
              "voters": 90
            }
          ],
          "MENGUEK 1": [
            {
              "station": "MAISON DE LA COOPERATIVE DE MENGUEK 1/A",
              "voters": 118
            }
          ],
          "MENGUEK 2": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGUEK 2/A",
              "voters": 78
            }
          ],
          "MINKOA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MINKOA/A",
              "voters": 163
            }
          ],
          "NGOAS": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGOAS/A",
              "voters": 121
            },
            {
              "station": "ESPL. DOM NOTABLE AYISSI C A NKOLMFUNDI/A",
              "voters": 61
            }
          ],
          "NGONDZIE": [
            {
              "station": "ESPLANADE DOM NOTABLE AWONO JOSEPH NGONDZIE A",
              "voters": 95
            }
          ],
          "NGOULMAKONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOULMAKONG/A",
              "voters": 69
            },
            {
              "station": "ECOLE CATHOLIQUE DE NGOULMAKONG/A",
              "voters": 195
            },
            {
              "station": "MAISON DE LA FEMME DE MBAMA/A",
              "voters": 87
            }
          ],
          "NKOLKOS OZOM 2": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLKOS/A",
              "voters": 175
            }
          ],
          "NKOLMELEN": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLMELEN/A",
              "voters": 97
            },
            {
              "station": "HANGAR DU MARCHE DE YEMASSI/A",
              "voters": 134
            }
          ],
          "NKOLMEYANG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEYANG/A",
              "voters": 154
            }
          ],
          "NKOLNGUET": [
            {
              "station": "CASE DE PRIERE DE NKOLNGUET/A",
              "voters": 119
            }
          ],
          "NKOLMEYANG NKONGKADAK": [
            {
              "station": "ESPL. DOM NOTABLE NTOUDA NGA/A",
              "voters": 183
            }
          ],
          "NKONGMESSA": [
            {
              "station": "ECOLE PUBLIQUE DE NKONGMESSA CENTRE TA",
              "voters": 106
            },
            {
              "station": "CASE DE PRIERE D'OZASINGUI/A",
              "voters": 60
            }
          ],
          "NKOLYEM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLYEM/A",
              "voters": 101
            }
          ],
          "NLONG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NLONG/A",
              "voters": 179
            }
          ],
          "OVANG": [
            {
              "station": "ECOLE PUBLIQUE D'OVANG/A",
              "voters": 154
            }
          ],
          "OZOM 1": [
            {
              "station": "ESPLANADE CHEFFERIE D'OZOM 1/A",
              "voters": 308
            },
            {
              "station": "ESPLANADE CHEFFERIE D'OZOM 1/B",
              "voters": 86
            }
          ],
          "OZOM 2": [
            {
              "station": "CASE A PALABRE CHEFFERIE D'OZOM 2/A",
              "voters": 110
            }
          ],
          "OZOM 3": [
            {
              "station": "CASE DE PRIERE D'OZOM3/A",
              "voters": 85
            }
          ],
          "TIKONG": [
            {
              "station": "ECOLE MAT. IMMACULEE C. DE NKOLFOM/A",
              "voters": 193
            }
          ],
          "TSEK": [
            {
              "station": "ESPLANADE DOM FEU EWODO MARTIN/A",
              "voters": 257
            }
          ],
          "VOA III": [
            {
              "station": "CASE DE PRIERE DE VOA IIl/A",
              "voters": 52
            }
          ]
        },
        "MONATELE": {
          "AVOH NKONGMENDOG QUARTIER GENDARMERIE": [
            {
              "station": "LYCEE TECHNIQUE DE MONATELE/A",
              "voters": 341
            },
            {
              "station": "LYCEE TECHNIQUE DE MONATELE/B",
              "voters": 269
            }
          ],
          "BIKOGO": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE DE BIKOGO/ A",
              "voters": 120
            }
          ],
          "BLOC ALLOGENE I BLOC EGLISE PRESBYTERIENNE QUARTIER MINSEC SANTA ISABELLE": [
            {
              "station": "ECOLE ANNEXE GROUPE I DE MONATELE/A",
              "voters": 168
            }
          ],
          "BLOC BEYENE NOUVEAU QUARTIER": [
            {
              "station": "ENIEG DE MONATELE/A",
              "voters": 260
            },
            {
              "station": "ENIEG DE MONATELE/ В",
              "voters": 246
            },
            {
              "station": "ENIEG DE MONATELE/C",
              "voters": 323
            }
          ],
          "BLOC MESSANGA OBENG STADE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE MONATELE/ A",
              "voters": 254
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE MONATELE/ B",
              "voters": 247
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE MONATELE/ C",
              "voters": 301
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE MONATELE/ D",
              "voters": 307
            }
          ],
          "CENTRE COMMERCIAL": [
            {
              "station": "PTT CAMPOST/A",
              "voters": 293
            },
            {
              "station": "PTT CAMPOST/В",
              "voters": 225
            }
          ],
          "EBANGA": [
            {
              "station": "ECOLE PUBLIQUE D'EBANGA/A",
              "voters": 243
            }
          ],
          "EBOLMONGO": [
            {
              "station": "ECOLE PUBLIQUE D'EBOLMONGO/A",
              "voters": 162
            }
          ],
          "ЕКЕКОМ ZOBSILA": [
            {
              "station": "CASE CENADEC D'EKEKOM/A",
              "voters": 155
            }
          ],
          "EKOUDA": [
            {
              "station": "ESPLANADE CHEFFERIE D'EKOUDA/A",
              "voters": 152
            }
          ],
          "ELIG - BIKOUN": [
            {
              "station": "POSTE AGRICOLE D'ELIG - BIKOUN/A",
              "voters": 145
            }
          ],
          "EMANA": [
            {
              "station": "ECOLE SAINT MARTIN D'EMANA/A",
              "voters": 188
            }
          ],
          "ETAKA NKOLVE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLVE /A",
              "voters": 252
            }
          ],
          "ETOM": [
            {
              "station": "ESPLANADE CHEFFERIE D'ETOM/A",
              "voters": 94
            }
          ],
          "EYEN-MEYONG": [
            {
              "station": "ECOLE PUBLIQUE D'EYEN-MEYONG/A",
              "voters": 325
            }
          ],
          "EZEZANG": [
            {
              "station": "ECOLE PUBLIQUE D'EZEZANG/A",
              "voters": 168
            }
          ],
          "HAMEAU KAMESSENG NKOLKOSSE III": [
            {
              "station": "COLLEGE NDOMO DE NKOLKOSSE/A",
              "voters": 165
            }
          ],
          "KOUGOUDA II": [
            {
              "station": "ECOLE PUBLIQUE KOUGOUDA II/A",
              "voters": 178
            }
          ],
          "LENOUCK NKOLEVIDA": [
            {
              "station": "ECOLE PUBLIQUE DE LENOUCK/A",
              "voters": 161
            }
          ],
          "LEVEM": [
            {
              "station": "ESPLANADE CHEFFERIE DE LEVEM/A",
              "voters": 135
            }
          ],
          "MENGONO": [
            {
              "station": "ESPLANADE CHEFFERIE MENGONO/A",
              "voters": 96
            }
          ],
          "MONABО MONABO I": [
            {
              "station": "ECOLE PUBLIQUE DE MONABO/A",
              "voters": 248
            }
          ],
          "MONATELE II": [
            {
              "station": "ECOLE PUBLIQUE MONATELE II/A",
              "voters": 184
            }
          ],
          "MONG": [
            {
              "station": "CASE CENADEC DE MONG/A",
              "voters": 250
            }
          ],
          "MPONG": [
            {
              "station": "ECOLE MATERNELLE MPONG/A",
              "voters": 144
            }
          ],
          "MVOMEKАK II": [
            {
              "station": "CENTRE DE SANTE DE MVOMEKAK II/A",
              "voters": 121
            }
          ],
          "NDOUP": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDOUP/A",
              "voters": 162
            }
          ],
          "NDOUP ASSI NKOLNGOK": [
            {
              "station": "LYCEE GENERAL DE MONATELE/A",
              "voters": 271
            }
          ],
          "NGAMA": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUDA/A",
              "voters": 197
            }
          ],
          "NGOMO": [
            {
              "station": "CENTRE DE SANTE DE NGOMO/A",
              "voters": 150
            }
          ],
          "NGOMO CENTRE NKOLTOMO III": [
            {
              "station": "CASE CENADEC DE NKOLTOMO III/A",
              "voters": 265
            }
          ],
          "NKANG NKOLMETOLO": [
            {
              "station": "ECOLE PUBLIQUE DE NKANG/A",
              "voters": 272
            }
          ],
          "NKOG-BONG": [
            {
              "station": "CENTRE DE SANTE DE NKOG-BONG/A",
              "voters": 296
            },
            {
              "station": "CENTRE DE SANTE DE NKOG-BONG/B",
              "voters": 57
            }
          ],
          "NKOG-EKOGO": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE DE NKOG-EKOGO/A",
              "voters": 185
            }
          ],
          "NKOLFEВ NKOLKOSSE I": [
            {
              "station": "CASE CENADEC DE NKOLKOSSE/A",
              "voters": 97
            }
          ],
          "NKOLKOSSE I": [
            {
              "station": "CASE CENADEC DE NKOLKOSSE/A",
              "voters": 191
            }
          ],
          "NKOLKOSSE II": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE NKOLKOSSE II A",
              "voters": 181
            }
          ],
          "NKOLMEBEL NLONGBONI": [
            {
              "station": "ECOLE PUBLIQUE DE NLONG BON 1/A",
              "voters": 217
            }
          ],
          "NKOLMELEN NKOLNGAL": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGAL/A",
              "voters": 220
            }
          ],
          "NKOLMELONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMELONG/A",
              "voters": 61
            }
          ],
          "NKOLNDOUP": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLNDOUP/A",
              "voters": 77
            }
          ],
          "NKOLNGOBO": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGOБО/А",
              "voters": 166
            }
          ],
          "NKOLONANA": [
            {
              "station": "CASE CENADEC DE NKOLONANA/A",
              "voters": 139
            }
          ],
          "NKOLOSSANANGA": [
            {
              "station": "CASE CENADEC DE NKOLOSSANANGA/A",
              "voters": 313
            },
            {
              "station": "CASE CENADEC DE NKOLOSSANANGA/B",
              "voters": 85
            }
          ],
          "NKOLTOMO I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLTOMO 1/A",
              "voters": 212
            }
          ],
          "NKOMBIBAM I": [
            {
              "station": "CASE CENADEC DE NKOMBIBAM I/A",
              "voters": 217
            }
          ],
          "NKOMBIBAM II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOMBIBAMII/A",
              "voters": 238
            }
          ],
          "NKOLKOSSE I NKONGMESSA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKONGMESSA/ A",
              "voters": 243
            }
          ],
          "NKONGMESSE I NKONGMESSE II": [
            {
              "station": "CASE CENADEC DE NKONGMESSE I/A",
              "voters": 199
            }
          ],
          "NLONGBON II": [
            {
              "station": "CASE CENADEC DE NLONGBON II/A",
              "voters": 75
            }
          ],
          "NLONGBON III": [
            {
              "station": "ESPLANADE CHEFFERIE DE NLONGBON III/A",
              "voters": 109
            }
          ],
          "NLONGBON IV": [
            {
              "station": "CENTRE DE SANTE DE NLONGBON IVIA",
              "voters": 140
            }
          ],
          "NTOL OSSEBE": [
            {
              "station": "CASE CENADEC DE NTOL/A",
              "voters": 94
            }
          ],
          "OBENG SOUS BOIS": [
            {
              "station": "DELEGATION MINADER DE MONATELE/A",
              "voters": 233
            },
            {
              "station": "DELEGATION MINADER DE MONATELE/B",
              "voters": 263
            },
            {
              "station": "DELEGATION MINADER DE MONATELE/C",
              "voters": 205
            }
          ],
          "OKOKODO": [
            {
              "station": "ECOLE PUBLIQUE D'OKOKODO/A",
              "voters": 105
            }
          ],
          "OVANG": [
            {
              "station": "ECOLE PUBLIQUE D'OVANG/A",
              "voters": 122
            }
          ],
          "POUPOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE POUPOUMA I/A",
              "voters": 177
            }
          ],
          "QUARTIER GENDARMERIE": [
            {
              "station": "DELEGATION TRAVAUX PUBLICS DE MONATELE/A",
              "voters": 161
            },
            {
              "station": "DELEGATION TRAVAUX PUBLICS DE MONATELE/B",
              "voters": 210
            }
          ],
          "BLOC ALLOGENE QUARTIER HAOUSSA": [
            {
              "station": "IMMEUBLE GARE ROUTIERE/A",
              "voters": 291
            },
            {
              "station": "IMMEUBLE GARE ROUTIERE/B",
              "voters": 278
            }
          ],
          "QUARTIER MINSEC": [
            {
              "station": "ECOLE PRIMAIRE D'APPLICATION DE MONATELE/A",
              "voters": 304
            },
            {
              "station": "ECOLE PRIMAIRE D'APPLICATION DE MONATELE/B",
              "voters": 346
            }
          ],
          "QUARTIER PALAIS DE JUSTICE QUARTIER PRISON": [
            {
              "station": "DELEGATION DU TOURISME DE MONATELE/ A",
              "voters": 332
            }
          ],
          "TALA I": [
            {
              "station": "CENTRE DE SANTE DE TALA I/A",
              "voters": 165
            }
          ],
          "TALA II": [
            {
              "station": "ECOLE PUBLIQUE DE TALA II/A",
              "voters": 255
            }
          ],
          "KOUGOUDA KOUGOUDA I": [
            {
              "station": "ECOLE PUBLIQUE DE KOUGOUDAI/A",
              "voters": 359
            }
          ],
          "NKOLOKALA": [
            {
              "station": "CETIC D'ETAKA/A",
              "voters": 30
            }
          ],
          "MGBABA I": [
            {
              "station": "LYCEE DE MONABO/A",
              "voters": 56
            }
          ],
          "MGBABA І MGBABA II": [
            {
              "station": "ECOLE MATERNELLE DE MGBABAII/A",
              "voters": 245
            },
            {
              "station": "ECOLE MATERNELLE DE MGBABA II/B",
              "voters": 104
            }
          ],
          "ELON": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE D'ELON/A",
              "voters": 151
            }
          ],
          "LEKOUN LELA": [
            {
              "station": "ECOLE PUBLIQUE DE LEKOUN/A",
              "voters": 172
            },
            {
              "station": "ECOLE PUBLIQUE DE LEKOUN/B",
              "voters": 167
            }
          ],
          "MVOMEKAK I": [
            {
              "station": "ECOLE PUBLIQUE DE MVOMEKAK/A",
              "voters": 161
            }
          ],
          "NKOLOWONO": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE DE NKOLOWONO/A",
              "voters": 201
            }
          ]
        },
        "OBALA": {
          "ABOKONO": [
            {
              "station": "LYCEE MODERNE D'OBALA / A",
              "voters": 298
            },
            {
              "station": "LYCEE MODERNE D'OBALA / B",
              "voters": 290
            },
            {
              "station": "LYCEE MODERNE D'OBALA / C",
              "voters": 327
            },
            {
              "station": "LYCEE MODERNE D'OBALA / D",
              "voters": 326
            }
          ],
          "ABALA": [
            {
              "station": "ECOLE CATHOLIQUE ABONO / A",
              "voters": 353
            }
          ],
          "AFAMBASSI": [
            {
              "station": "ECOLE COMMUNAUTAIRE AFAMBASSI / A",
              "voters": 130
            }
          ],
          "BIKOK ASSI": [
            {
              "station": "ECOLE PRIMAIRE BILINGUE / A",
              "voters": 347
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / B",
              "voters": 357
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / C",
              "voters": 372
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / D",
              "voters": 340
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / E",
              "voters": 325
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / F",
              "voters": 327
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / G",
              "voters": 334
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / H",
              "voters": 172
            },
            {
              "station": "ECOLE PRIMAIRE BILINGUE / I",
              "voters": 200
            }
          ],
          "BILON": [
            {
              "station": "CASE COMMUNAUTAIRE BILON / A",
              "voters": 216
            }
          ],
          "EBOL AKUN": [
            {
              "station": "ESPLANADE CHEFFERIE EBOL-AKUN / A",
              "voters": 319
            }
          ],
          "ENDINGING": [
            {
              "station": "ECOLE PUBLIQUE DENDINGING / B",
              "voters": 284
            }
          ],
          "EFOK I": [
            {
              "station": "LYCEE EFOK / A",
              "voters": 257
            },
            {
              "station": "LYCEE EFOK / B",
              "voters": 76
            }
          ],
          "EFOK II": [
            {
              "station": "ECOLE CATHOLIQUE NOTRE DAME / A",
              "voters": 247
            }
          ],
          "EKABITA-ESSELE": [
            {
              "station": "ECOLE PUBLIQUE NKOL-ONDOA NGOUNA / A",
              "voters": 170
            },
            {
              "station": "CASE COM. CARREFOUR EKABITA-ESSELE / A",
              "voters": 158
            }
          ],
          "EKABITA MENDOUM": [
            {
              "station": "ECOLE PUBLIQUE DEKABITA-MENDOUM / A",
              "voters": 299
            },
            {
              "station": "ECOLE PUBLIQUE DEKABITA-MENDOUM / B",
              "voters": 230
            }
          ],
          "EKOM": [
            {
              "station": "ESPLANADE CHEFFERIE DEKOUM / A",
              "voters": 145
            }
          ],
          "EKOUM-DOUMA I": [
            {
              "station": "ECOLE CATHOLIQUE DEKOUM-DOUMA / A",
              "voters": 400
            },
            {
              "station": "ECOLE CATHOLIQUE DEKOUM-DOUMA / A",
              "voters": 400
            }
          ],
          "EKOUM-DOUMA II": [
            {
              "station": "ECOLE CATHOLIQUE DEKOUM-DOUMA / B",
              "voters": 179
            }
          ],
          "ELIG BESSALA": [
            {
              "station": "CASE A PALABRE CHEF. DELIG-BESSALA / A",
              "voters": 268
            }
          ],
          "ELIG BESSALA I": [
            {
              "station": "CASE A PALABRE CHEF. DELIG-BESSALA / B",
              "voters": 259
            },
            {
              "station": "CASE A PALABRE CHEF. DELIG-BESSALA / C",
              "voters": 199
            }
          ],
          "ELIG-BESSALA II": [
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / A",
              "voters": 291
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / B",
              "voters": 301
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / C",
              "voters": 301
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / D",
              "voters": 284
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / E",
              "voters": 279
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / F",
              "voters": 332
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / G",
              "voters": 327
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / H",
              "voters": 269
            },
            {
              "station": "ECOLE MATERNELLE PETIT CANARD / I",
              "voters": 261
            }
          ],
          "ELIG-NOG-AZOUMA I": [
            {
              "station": "ESPLANADE CHEF. DELOG-NGAZOUMA / A",
              "voters": 191
            }
          ],
          "ELIG-NOGAZOUMA II": [
            {
              "station": "ECOLE PUBLIQUE DELOG-NGAZOUMA / A",
              "voters": 153
            }
          ],
          "ELIG-NGOMO": [
            {
              "station": "CES DELIG-NGOMO / A",
              "voters": 156
            }
          ],
          "ELIG-NKOUMA I": [
            {
              "station": "CES DELIG-NKOUMA I / A",
              "voters": 104
            }
          ],
          "ELIG-NKOUMA II": [
            {
              "station": "ESPLANADE CHEFFERIE DELIG-NKOUMA II / A",
              "voters": 108
            }
          ],
          "ELIG NTSOGO": [
            {
              "station": "CASE COM. DERRIERE CHEFFERIE / A",
              "voters": 213
            }
          ],
          "ELOMZOCK": [
            {
              "station": "ECOLE PUBLIQUE ELOMZOK / A",
              "voters": 236
            }
          ],
          "ELOT I": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I / A",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / B",
              "voters": 287
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / C",
              "voters": 286
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / D",
              "voters": 300
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / E",
              "voters": 277
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / F",
              "voters": 334
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / G",
              "voters": 311
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE I / H",
              "voters": 142
            }
          ],
          "EZEZANG-ESSELE": [
            {
              "station": "ECOLE PUBLIQUE O'EZANG-ESSELE / A",
              "voters": 131
            }
          ],
          "EZEZANG-MENDOUM": [
            {
              "station": "ECOLE PUBLIQUE O'EZANG-MENDOUM / A",
              "voters": 382
            }
          ],
          "FOULASSI URBAIN": [
            {
              "station": "ESPLANADE CHEFFERIE DE FOULASSI / A",
              "voters": 272
            },
            {
              "station": "ESPLANADE CHEFFERIE DE FOULASSI / B",
              "voters": 268
            },
            {
              "station": "ESPLANADE CHEFFERIE DE FOULASSI / C",
              "voters": 318
            }
          ],
          "KOMO MVOKANI": [
            {
              "station": "ESPLANADE CHEFFERIE DE KOMO MVOKANI / A",
              "voters": 217
            }
          ],
          "KOUDADENG": [
            {
              "station": "CES DE KOUDADENG / A",
              "voters": 234
            }
          ],
          "LEKE ASSI": [
            {
              "station": "ECOLE PUBLIQUE DE LEKE-ASSI / A",
              "voters": 170
            }
          ],
          "LENGOM": [
            {
              "station": "ESPLANADE CHEFFERIE DE LENGOM / A",
              "voters": 113
            }
          ],
          "LOUA I": [
            {
              "station": "ECOLE PUBLIQUE DE LOUA I / A",
              "voters": 348
            }
          ],
          "LOUA II": [
            {
              "station": "ECOLE MATERNELLE DE LOUA II / A",
              "voters": 164
            }
          ],
          "MBAKOMO": [
            {
              "station": "MBAKOMO COMMUNAUTAIRE CARREFOUR",
              "voters": 254
            }
          ],
          "MBELE I": [
            {
              "station": "ECOLE PUBLIQUE DE MBELE I / A",
              "voters": 312
            },
            {
              "station": "ECOLE PUBLIQUE DE MBELE I / B",
              "voters": 106
            }
          ],
          "MBELE II": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBELE II / A",
              "voters": 279
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MBELE II / B",
              "voters": 233
            }
          ],
          "MBOUA": [
            {
              "station": "ECOLE PUBLIQUE DE MBOUA / A",
              "voters": 372
            },
            {
              "station": "ECOLE PUBLIQUE DE MBOUA / B",
              "voters": 367
            },
            {
              "station": "ECOLE PUBLIQUE DE MBOUA / C",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE DE MBOUA / D",
              "voters": 327
            },
            {
              "station": "ECOLE PUBLIQUE DE MBOUA / E",
              "voters": 274
            }
          ],
          "MBOUA II": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBOUA II / A",
              "voters": 342
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MBOUA II / B",
              "voters": 222
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MBOUA II / C",
              "voters": 322
            }
          ],
          "MEKAS / A": [
            {
              "station": "ECOLE PUBLIQUE DE MEKAS / A",
              "voters": 156
            }
          ],
          "NKOMETOUI": [
            {
              "station": "COLLEGE ANDJONGO NOAH / A",
              "voters": 310
            },
            {
              "station": "COLLEGE ANDJONGO NOAH / B",
              "voters": 353
            },
            {
              "station": "COLLEGE ANDJONGO NOAH / C",
              "voters": 288
            },
            {
              "station": "COLLEGE ANDJONGO NOAH / D",
              "voters": 333
            },
            {
              "station": "COLLEGE ANDJONGO NOAH / E",
              "voters": 349
            },
            {
              "station": "COLLEGE ANDJONGO NOAH / F",
              "voters": 210
            }
          ],
          "MINDJOMO": [
            {
              "station": "ECOLE PUBLIQUE DE MINDJOMO / A",
              "voters": 360
            },
            {
              "station": "ECOLE PUBLIQUE DE MINDJOMO / B",
              "voters": 384
            },
            {
              "station": "ECOLE PUBLIQUE DE MINDJOMO / C",
              "voters": 292
            },
            {
              "station": "ECOLE PUBLIQUE DE MINDJOMO / D",
              "voters": 265
            }
          ],
          "MINKAMA I": [
            {
              "station": "CASE A PALABRE CHEFFERIE MINKAMA I / A",
              "voters": 298
            }
          ],
          "MINKAMA II": [
            {
              "station": "COLLEGE SEPHORA / A",
              "voters": 349
            },
            {
              "station": "COLLEGE SEPHORA / B",
              "voters": 384
            },
            {
              "station": "CENTRE D'INSTRUCTION GARDE PRESIDENT / A",
              "voters": 271
            },
            {
              "station": "CENTRE D'INSTRUCTION GARDE PRESIDENT / D",
              "voters": 328
            },
            {
              "station": "CENTRE D'INSTRUCTION GARDE PRESIDENT / E",
              "voters": 319
            }
          ],
          "MINKAMA II GP": [
            {
              "station": "CENTRE D'INSTRUCTION GARDE PRESIDENT / B",
              "voters": 242
            },
            {
              "station": "CENTRE D'INSTRUCTION GARDE PRESIDENT / C",
              "voters": 236
            }
          ],
          "MINKAMA III": [
            {
              "station": "CASE COMM. FACE CHEFFERIE MINKAMA III / A",
              "voters": 277
            }
          ],
          "MINKAMA IV": [
            {
              "station": "ESPLANADE CHEFFERIE MINKAMA IV / A",
              "voters": 313
            },
            {
              "station": "ESPLANADE CHEFFERIE MINKAMA IV / B",
              "voters": 84
            }
          ],
          "MINKAMA V": [
            {
              "station": "ESPLANADE CHEFFERIE MINKAMA V / A",
              "voters": 73
            }
          ],
          "MINKAMA VI": [
            {
              "station": "ECOLE PUBLIQUE DE MINKAMA VI / A",
              "voters": 254
            }
          ],
          "MINKAMA VI GP": [
            {
              "station": "ECOLE PUBLIQUE DE MINKAMA / B",
              "voters": 87
            }
          ],
          "MVOOG-DZIGUI": [
            {
              "station": "CASE A PALABRE FACE CHEFFERIE / A",
              "voters": 186
            }
          ],
          "NDJONG MEZEQUE I": [
            {
              "station": "ECOLE ADVENTISTE D'OBALA / A",
              "voters": 316
            },
            {
              "station": "ECOLE ADVENTISTE D'OBALA / B",
              "voters": 348
            },
            {
              "station": "ECOLE ADVENTISTE D'OBALA / C",
              "voters": 339
            },
            {
              "station": "ECOLE ADVENTISTE D'OBALA / D",
              "voters": 330
            },
            {
              "station": "ECOLE ADVENTISTE D'OBALA / E",
              "voters": 303
            }
          ],
          "NDJONG MEZEQUE II": [
            {
              "station": "ECOLE LES MOINEAUX / A",
              "voters": 336
            },
            {
              "station": "ECOLE LES MOINEAUX / B",
              "voters": 202
            },
            {
              "station": "ECOLE LES MOINEAUX / C",
              "voters": 320
            }
          ],
          "NGONGO II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGONGO II / A",
              "voters": 240
            }
          ],
          "NKOD-ABANG": [
            {
              "station": "CASE A PALABRE CHEF DE NKOD-ABANG / A",
              "voters": 85
            }
          ],
          "NKOL BIYEM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-BYEM / A",
              "voters": 86
            }
          ],
          "NKOL MELEN": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-MELEN / A",
              "voters": 271
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOL-MELEN / B",
              "voters": 104
            }
          ],
          "NKOL NDOBO": [
            {
              "station": "ECOLE PUBLIQUE NKOL-NDOBO / A",
              "voters": 168
            }
          ],
          "NKOL TIMA": [
            {
              "station": "CHAPELLE CARREFOUR CARREFOUR / A",
              "voters": 276
            }
          ],
          "NKOL TSOGO II": [
            {
              "station": "ESPLANADE CHEFFERIE / A",
              "voters": 138
            }
          ],
          "NKOLBICOK": [
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / A",
              "voters": 332
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / B",
              "voters": 330
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / C",
              "voters": 304
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / D",
              "voters": 310
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / E",
              "voters": 338
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / F",
              "voters": 313
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / G",
              "voters": 322
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / H",
              "voters": 330
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / I",
              "voters": 340
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / J",
              "voters": 325
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / K",
              "voters": 334
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / L",
              "voters": 324
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / M",
              "voters": 330
            }
          ],
          "NKOL BICOK": [
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / N",
              "voters": 320
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / O",
              "voters": 329
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / P",
              "voters": 205
            },
            {
              "station": "ECOLE CATHOLIQUE D'OBALA / Q",
              "voters": 256
            }
          ],
          "NKOL-EDOUMA I": [
            {
              "station": "ESPLANADE CHEF. DE NKOL-EDOUMA / A",
              "voters": 237
            }
          ],
          "NKOL-EDOUMA II": [
            {
              "station": "CASE COM. DU CARREFOUR BILON / A",
              "voters": 289
            }
          ],
          "NKOL-EKUI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-EKUI / A",
              "voters": 145
            }
          ],
          "NKOL-EVODO": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-EVODO / A",
              "voters": 187
            }
          ],
          "NKOLFEB": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLFEB / A",
              "voters": 181
            }
          ],
          "NKOLFOULOU III": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLFOULOU III / A",
              "voters": 122
            }
          ],
          "NKOL-MENDOUGA": [
            {
              "station": "ESP. CHEFFERIE DE NKOL-MENDOUGA / A",
              "voters": 326
            }
          ],
          "NKOL-NGUEM I": [
            {
              "station": "CASE DE SANTE DE NKOL-NGUEM A",
              "voters": 301
            }
          ],
          "NKOL-NGUEM II": [
            {
              "station": "CASE DE SANTE DE NKOL-NGUEM B",
              "voters": 55
            },
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-NGUEM II / A",
              "voters": 286
            }
          ],
          "NKOL-NTARA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-NTARA / A",
              "voters": 147
            }
          ],
          "NKOL-OBILI": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-OBILI / A",
              "voters": 85
            }
          ],
          "NKOL-TOM II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOL-TOM II / A",
              "voters": 265
            }
          ],
          "NKOM NDAMBA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOM-NDAMBA /",
              "voters": 308
            },
            {
              "station": "ESPLANADE CHEFFERIE DE NKOM-NDAMBA / B",
              "voters": 278
            }
          ],
          "NKOMEFOUFOUM": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOMEFOUFOUM",
              "voters": 172
            }
          ],
          "NKOMETOU II": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / A",
              "voters": 305
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / B",
              "voters": 344
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / C",
              "voters": 334
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / D",
              "voters": 336
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / E",
              "voters": 328
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / F",
              "voters": 331
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / G",
              "voters": 324
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / H",
              "voters": 164
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOMETOU / I",
              "voters": 255
            }
          ],
          "NKOMETOU III": [
            {
              "station": "LYCEE DE NKOMETOU / A",
              "voters": 312
            },
            {
              "station": "LYCEE DE NKOMETOU / B",
              "voters": 333
            },
            {
              "station": "LYCEE DE NKOMETOU / C",
              "voters": 283
            },
            {
              "station": "LYCEE DE NKOMETOU / D",
              "voters": 368
            }
          ],
          "NTO": [
            {
              "station": "ESPLANADE CHEFFERIE DE NTO / A",
              "voters": 150
            }
          ],
          "NTSAN": [
            {
              "station": "ESPLANADE CHEFFERIE DE NTSAN / A",
              "voters": 231
            }
          ],
          "NTUI ESSONG": [
            {
              "station": "CES DE NTUI ESSONG / A",
              "voters": 73
            }
          ],
          "OBALA CHEFFERIE": [
            {
              "station": "ESPLANADE CHEFFERIE OBALA / A",
              "voters": 350
            },
            {
              "station": "ESPLANADE CHEFFERIE OBALA / B",
              "voters": 345
            },
            {
              "station": "ESPLANADE CHEFFERIE OBALA / C",
              "voters": 257
            }
          ],
          "OBALA ZONE II": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTIER HAOUSSA / A",
              "voters": 313
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTIER HAOUSSA / B",
              "voters": 320
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTIER HAOUSSA / C",
              "voters": 365
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTIER HAOUSSA / D",
              "voters": 333
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTIER HAOUSSA / E",
              "voters": 128
            }
          ],
          "QUARTIER ADMINISTRATIF": [
            {
              "station": "MAGASIN ANCIENNE MAIRIE / A",
              "voters": 288
            },
            {
              "station": "MAGASIN ANCIENNE MAIRIE / B",
              "voters": 341
            },
            {
              "station": "MAGASIN ANCIENNE MAIRIE / C",
              "voters": 96
            }
          ],
          "TSEK": [
            {
              "station": "CASE A PALABRE DE LA CHEFFERIE DE TSEK / A",
              "voters": 198
            }
          ],
          "VILLAGE PIONNIER": [
            {
              "station": "CASE COMMUNAUTAIRE FACE CHEFFERIE / A",
              "voters": 94
            }
          ],
          "YEMSOA I": [
            {
              "station": "ECOLE CATHOLIQUE DE YEMSOA / A",
              "voters": 233
            }
          ],
          "YEMSOA": [
            {
              "station": "ECOLE CATHOLIQUE DE YEMSOA / B",
              "voters": 303
            }
          ],
          "YEMSOA II": [
            {
              "station": "ECOLE PUBLIQUE DE YEMSOA II / A",
              "voters": 188
            }
          ],
          "YEMSOUM II": [
            {
              "station": "ESPLANADE CHEFFERIE DE YEMSOUM II / A",
              "voters": 81
            }
          ],
          "YEPTANG": [
            {
              "station": "ECOLE PUBLIQUE DE YEPTANG / A",
              "voters": 125
            }
          ],
          "ZIBA": [
            {
              "station": "CASE COMMUNAUTAIRE GIC / A",
              "voters": 265
            }
          ],
          "ZOATOUPSI": [
            {
              "station": "CASE COMMUNAUTAIRE DE ZOATOUPSI / A",
              "voters": 215
            }
          ],
          "ZOATOUPSI II": [
            {
              "station": "ECOLE PUBLIQUE DE ZOATOUPSI II / A",
              "voters": 121
            }
          ],
          "ZOATOUPSI III": [
            {
              "station": "ESPLANADE CHEF DE BLOC ZOATOUPSI / A",
              "voters": 126
            }
          ],
          "ETONG BIDJOU": [
            {
              "station": "ESPLANADE CHEFFERIE DE TONG BIDJOU / A",
              "voters": 157
            }
          ],
          "NKOL TSOGOI": [
            {
              "station": "CASE A PALABRE NKOTSOGO I / A",
              "voters": 155
            }
          ],
          "MEKAS I": [
            {
              "station": "CASE A PALABRE MEKAS I / A",
              "voters": 165
            }
          ],
          "ESSONG": [
            {
              "station": "CASE A PALABRE ESSONG / A",
              "voters": 361
            }
          ],
          "ELIG-BODO": [
            {
              "station": "CASE A PALABRE ELIG-BODO / A",
              "voters": 248
            }
          ],
          "EFOUMLSSI": [
            {
              "station": "CASE A PALABRE EFOUMLSSI / A",
              "voters": 244
            }
          ],
          "LEBOI": [
            {
              "station": "CASE A PALABRE LEBOI / A",
              "voters": 128
            }
          ],
          "NKOL-EWODO": [
            {
              "station": "CASE A PALABRE NKOL-EWODO / A",
              "voters": 236
            }
          ],
          "NGONGO I": [
            {
              "station": "CASE COMMUNAUTAIRE NGONGO I / A",
              "voters": 139
            }
          ],
          "FOULASSI GARE": [
            {
              "station": "CASE COMMUNAUTAIRE FOULASSI GARE / A",
              "voters": 323
            },
            {
              "station": "CASE COMMUNAUTAIRE FOULASSI GARE / B",
              "voters": 312
            }
          ],
          "ETOUD-AYOS": [
            {
              "station": "CASE COMMUNAUTAIRE ETOUD-AYOS / A",
              "voters": 196
            }
          ],
          "NKOL METING": [
            {
              "station": "CASE COMMUNAUTAIRE NKOLMETING / A",
              "voters": 76
            }
          ],
          "NKOL-MBENE": [
            {
              "station": "CASE COM. DERRIERE CHEFFERIE / A",
              "voters": 130
            }
          ],
          "MEBANG-MENGOE": [
            {
              "station": "CASE CHAPELLE DE MEBANG-MENGOE / A",
              "voters": 96
            },
            {
              "station": "CASE CHAPELLE DE MEBANG-MENGOE / A",
              "voters": 96
            }
          ],
          "YEMESSOA III": [
            {
              "station": "ECOLE MATERNELLE DE YEMESSOA II / A",
              "voters": 132
            }
          ]
        },
        "OKOLA": {
          "AYOS": [
            {
              "station": "MAISON SOCOPO D'AYOS/A",
              "voters": 211
            }
          ],
          "BILONO I": [
            {
              "station": "ECOLE PUBLIQUE DE BILONO I/A",
              "voters": 100
            }
          ],
          "BILONO II": [
            {
              "station": "ESPLANADE CHEFFERIE DE BILONO II/A",
              "voters": 165
            }
          ],
          "BISSOGO": [
            {
              "station": "MAISON SOCOPO DE BISSOGO/A",
              "voters": 133
            }
          ],
          "BITSINGDA": [
            {
              "station": "MISSION CATHOLIQUE DE BITSINGDA/A",
              "voters": 305
            }
          ],
          "EBANGA": [
            {
              "station": "MAISON SOCOPO D'EBANGA/A",
              "voters": 262
            }
          ],
          "EBOD": [
            {
              "station": "ESPLANADE CHEFFERIE D'EBOD/A",
              "voters": 152
            }
          ],
          "EBOUGSI": [
            {
              "station": "MAISON SOCOPO D'EBOUGSI/A",
              "voters": 435
            }
          ],
          "EKABITA TOM": [
            {
              "station": "CES D'EKABITA TOM/A",
              "voters": 182
            }
          ],
          "EKEKAM I": [
            {
              "station": "ESPLANADE CHEFFERIE EKEKAMI/A",
              "voters": 216
            }
          ],
          "EKEKAM II": [
            {
              "station": "ESPLANADE CHEFFERIE EKEKAM II/A",
              "voters": 125
            }
          ],
          "EKONG": [
            {
              "station": "ESPLANADE CHEFFERIE EKONG/A",
              "voters": 283
            },
            {
              "station": "ESPLANADE CHEFFERIE EKONG/B",
              "voters": 149
            }
          ],
          "ELIG-MAMA": [
            {
              "station": "HANGAR ELIG-MAMA/A",
              "voters": 136
            }
          ],
          "ELIG-ONANA": [
            {
              "station": "ECOLE PUBLIQUE ELIG-ONANA/A",
              "voters": 95
            }
          ],
          "ELIG-EYEN": [
            {
              "station": "CENTRE DE SANTE ELIG-EYEN/A",
              "voters": 161
            }
          ],
          "ETOUD": [
            {
              "station": "ESPLANADE CHEFFERIE ETOUD/A",
              "voters": 75
            }
          ],
          "FEGMINBANG": [
            {
              "station": "ECOLE PUBLIQUE FEGMINBANG/A",
              "voters": 79
            }
          ],
          "KONABENG": [
            {
              "station": "MAISON SOCOPO KONABENG/A",
              "voters": 401
            },
            {
              "station": "MAISON SOCOPO KONABENG/B",
              "voters": 178
            }
          ],
          "LEBOUDI I": [
            {
              "station": "CASE A PALABRE DE LEBOUDI1/A",
              "voters": 409
            },
            {
              "station": "CASE A PALABRE DE LEBOUDI 1/B",
              "voters": 387
            },
            {
              "station": "CASE A PALABRE DE LEBOUDII/C",
              "voters": 390
            },
            {
              "station": "CASE A PALABRE DE LEBOUDII/D",
              "voters": 166
            },
            {
              "station": "MISSION CATHOLIQUE DE LEBOUDI II/B",
              "voters": 370
            }
          ],
          "LEBOUDI II": [
            {
              "station": "MISSION CATHOLIQUE DE LEBOUDI II/A",
              "voters": 392
            },
            {
              "station": "MISSION CATHOLIQUE DE LEBOUDI II/C",
              "voters": 226
            },
            {
              "station": "MISSION CATHOLIQUE DE LEBOUDI II/D",
              "voters": 319
            },
            {
              "station": "MISSION CATHOLIQUE DE LEBOUDI II/E",
              "voters": 310
            }
          ],
          "LENDOM I": [
            {
              "station": "ESPLANADE CHEFFERIE LENDOMI/A",
              "voters": 200
            }
          ],
          "LENDOM II": [
            {
              "station": "ECOLE PUBLIQUE DE LENDOM II/A",
              "voters": 165
            }
          ],
          "LENGON": [
            {
              "station": "ECOLE PUBLIQUE DE LENGON/A",
              "voters": 247
            }
          ],
          "LEVELEMBEDE": [
            {
              "station": "ECOLE PUBLIQUE DE LEVELEMBEDE/A",
              "voters": 372
            },
            {
              "station": "ECOLE PUBLIQUE DE LEVELEMBEDE/B",
              "voters": 379
            },
            {
              "station": "ECOLE PUBLIQUE DE LEVELEMBEDE/C",
              "voters": 366
            },
            {
              "station": "ECOLE PUBLIQUE DE LEVELEMBEDE/D",
              "voters": 265
            }
          ],
          "LOUMA, OYAMA": [
            {
              "station": "ECOLE PUBLIQUE LOUMA/A",
              "voters": 386
            }
          ],
          "MEKAK": [
            {
              "station": "ECOLE PUBLIQUE DE MEKAK/A",
              "voters": 97
            }
          ],
          "METAK": [
            {
              "station": "CASE CHAPELLE METAK/A",
              "voters": 123
            }
          ],
          "MINSOA I": [
            {
              "station": "ECOLE PUBLIQUE MINSOAI/A",
              "voters": 411
            },
            {
              "station": "ECOLE PUBLIQUE MINSOA I/B",
              "voters": 49
            }
          ],
          "MINSOA II": [
            {
              "station": "CASE CHAPELLE MINSOA II/A",
              "voters": 109
            }
          ],
          "MINTOTOMO": [
            {
              "station": "ESPLANADE CHEFFERIE MINTOTOMO/A",
              "voters": 226
            }
          ],
          "MPONG II": [
            {
              "station": "ESPLANADE CHEFFERIE MPONG II/A",
              "voters": 87
            }
          ],
          "MVA'A II, OKOLA CENTRE": [
            {
              "station": "ECOLE CATHOLIQUE MVA'A II/A",
              "voters": 266
            }
          ],
          "MVOUA": [
            {
              "station": "ECOLE PUBLIQUE MVOUA/A",
              "voters": 273
            }
          ],
          "NDANGUENG": [
            {
              "station": "ECOLE PUBLIQUE NDANGUENG/A",
              "voters": 119
            }
          ],
          "NGOBASSI": [
            {
              "station": "ECOLE PUBLIQUE NGOBASSI/A",
              "voters": 154
            }
          ],
          "NGOYA I": [
            {
              "station": "ECOLE CATHOLIQUE NGOYA 1/A",
              "voters": 284
            },
            {
              "station": "ECOLE CATHOLIQUE NGOYAI/B",
              "voters": 300
            }
          ],
          "NGOYA III": [
            {
              "station": "ESPLANADE CHEFFERIE NGOYA III/A",
              "voters": 97
            }
          ],
          "NKOLAKIE": [
            {
              "station": "CASE A PALABRE DE NKOLAKIE/A",
              "voters": 114
            }
          ],
          "NKOLANGOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLANGOUNG/A",
              "voters": 174
            }
          ],
          "NKOL-BEGA": [
            {
              "station": "ECOLE PUBLIQUE NKOL-BEGA/A",
              "voters": 149
            }
          ],
          "NKOLDJOBE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLDJOBE/A",
              "voters": 133
            }
          ],
          "NKOLEKOTSING": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLEKOTSING/A",
              "voters": 152
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLEKOTSING/A",
              "voters": 177
            }
          ],
          "NKOLESSONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLESSONG/A",
              "voters": 295
            }
          ],
          "NKOLFEB": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLFEB/A",
              "voters": 197
            }
          ],
          "NKOLFEM": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLFEM/A",
              "voters": 85
            }
          ],
          "NKOLMEKOUMA": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLEKOUMA/A",
              "voters": 137
            }
          ],
          "NKOLNGOK": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGOK/A",
              "voters": 147
            }
          ],
          "NKOLNYADA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNYADA/A",
              "voters": 222
            }
          ],
          "NKOLONDOM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLONDOM/A",
              "voters": 263
            }
          ],
          "NKOLPOBLO": [
            {
              "station": "CES DE NKOLPOBLO/A",
              "voters": 164
            },
            {
              "station": "HANGAR MARCHE DE NKOLPOBLO/A",
              "voters": 278
            }
          ],
          "NKOLVANIZE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLVANIZE/A",
              "voters": 126
            }
          ],
          "NKOLZIBI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLZIBI/A",
              "voters": 341
            }
          ],
          "NKONG": [
            {
              "station": "CASE A PALABRE DE NKONG/A",
              "voters": 253
            }
          ],
          "NKONG-ZOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKONG-ZOK/A",
              "voters": 102
            }
          ],
          "NOUMA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NOUMA/A",
              "voters": 278
            }
          ],
          "NKOLTOMO, NTSAMA": [
            {
              "station": "ECOLE PUBLIQUE DE NTSAMA/A",
              "voters": 247
            }
          ],
          "NTUISSONG": [
            {
              "station": "ECOLE PUBLIQUE DE NTUISSONG/A",
              "voters": 292
            }
          ],
          "NKOLTSIBA, NYEMEYONG": [
            {
              "station": "ECOLE PUBLIQUE DE NYEMEYONG/A",
              "voters": 178
            }
          ],
          "OBAK": [
            {
              "station": "ECOLE PUBLIQUE D'OBAK/A",
              "voters": 373
            }
          ],
          "OBAK ASSI": [
            {
              "station": "ESPL. RESIDENCE CAPITA NORD OBAK ASSI/A",
              "voters": 165
            }
          ],
          "OBAN I": [
            {
              "station": "ESPLANADE CHEFFERIE D'OBANI/A",
              "voters": 104
            }
          ],
          "OBAN II": [
            {
              "station": "ECOLE PUBLIQUE D'OBANII/A",
              "voters": 230
            }
          ],
          "OKOLA CENTRE": [
            {
              "station": "ECOLE PUBLIQUE D'OKOLA/A",
              "voters": 404
            },
            {
              "station": "ECOLE PUBLIQUE D'OKOLA/B",
              "voters": 377
            },
            {
              "station": "ECOLE PUBLIQUE D'OKOLA/C",
              "voters": 316
            },
            {
              "station": "ECOLE PUBLIQUE D'OKOLA/D",
              "voters": 278
            },
            {
              "station": "ECOLE PUBLIQUE D'OKOLA/E",
              "voters": 111
            }
          ],
          "LENDOM II, OKOLA LYCEE TECHNIQUE": [
            {
              "station": "LYCEE TECHNIQUE D'OKOLA/A",
              "voters": 330
            }
          ],
          "OKOLA CENTRE, OKOLA MISSION CATHOLIQUE": [
            {
              "station": "MISSION CATHOLIQUE D'OKOLA/A",
              "voters": 365
            },
            {
              "station": "MISSION CATHOLIQUE D'OKOLA/B",
              "voters": 214
            }
          ],
          "OKOUKOUDA": [
            {
              "station": "ECOLE PUBLIQUE D'OKOUKOUDA/A",
              "voters": 207
            }
          ],
          "SONG ONANA": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE SONG ONANA/A",
              "voters": 163
            }
          ],
          "VOA I, VOA II": [
            {
              "station": "ECOLE PUBLIQUE DE VOA II/A",
              "voters": 281
            }
          ],
          "YEGASSI": [
            {
              "station": "ECOLE CATHOLIQUE DE YEGASSI/A",
              "voters": 293
            },
            {
              "station": "ECOLE CATHOLIQUE DE YEGASSI/B",
              "voters": 103
            }
          ],
          "ZAMENGOE": [
            {
              "station": "ECOLE MATERNELLE DE ZAMENGOE/A",
              "voters": 263
            },
            {
              "station": "ECOLE MATERNELLE DE ZAMENGOE/B",
              "voters": 343
            }
          ],
          "ELIG-NDOUM": [
            {
              "station": "ECOLE PUBLIQUE D' ELIG-NDOUM/A",
              "voters": 103
            }
          ],
          "EVIAN": [
            {
              "station": "SAR/SM D'ELIG ONANA/A",
              "voters": 132
            }
          ],
          "LEBOTH": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE LEBOTH/A",
              "voters": 113
            },
            {
              "station": "CENTRE DE SANTE INTEGRE DE LEBOTH/B",
              "voters": 269
            }
          ],
          "NKODASSA": [
            {
              "station": "SAR/SM DE NKODASSA/A",
              "voters": 138
            }
          ],
          "MVA'A I": [
            {
              "station": "ECOLE PUBLIQUE DE MVA'A 1/A",
              "voters": 278
            }
          ],
          "NGOYA II": [
            {
              "station": "CES DE NGOYA II/A",
              "voters": 203
            },
            {
              "station": "CES DE NGOYA II/B",
              "voters": 215
            }
          ]
        },
        "SA'A": {
          "ABEL": [
            {
              "station": "ECOLE PUBLIQUE D'ABEL/A",
              "voters": 178
            }
          ],
          "AYISSI ELE": [
            {
              "station": "ECOLE CATHOLIQUE MBASSILA/A",
              "voters": 168
            }
          ],
          "EBANG": [
            {
              "station": "ESPLANADE CHEFFERIE EBANG/A",
              "voters": 121
            }
          ],
          "EBANG-MINALA": [
            {
              "station": "CASE A PALABRE CHEFFERIE EBANG-MINALA IA",
              "voters": 278
            }
          ],
          "EBOGO": [
            {
              "station": "ECOLE PUBLIQUE D'EBOGO/A",
              "voters": 319
            }
          ],
          "EDZEN": [
            {
              "station": "ESPLANADE CHEFFERIE EDZEN/A",
              "voters": 217
            }
          ],
          "EKALAN-MINKOUL": [
            {
              "station": "ECOLE PUBLIQUE EKALAN-MINKOULIA",
              "voters": 117
            }
          ],
          "EKEKOM": [
            {
              "station": "LYCEE GENERAL D'EKEKOM/A",
              "voters": 192
            }
          ],
          "EKOUM DOUMA": [
            {
              "station": "ESPLANADE CHEFFERIE EKOUM DOUMA/A",
              "voters": 142
            }
          ],
          "EKOUM ONDOM": [
            {
              "station": "ECOLE PUBLIQUE EKOUM ONDOM/A",
              "voters": 204
            }
          ],
          "ELANG": [
            {
              "station": "ECOLE PUBLIQUE ELANG/A",
              "voters": 249
            }
          ],
          "ELESSOGUE": [
            {
              "station": "CASE COMMUNAUTAIRE ELESSOGUE/A",
              "voters": 143
            }
          ],
          "ELIG-MESSI": [
            {
              "station": "CASE COMMUNAUTAIRE ELIG-MESSI/A",
              "voters": 45
            }
          ],
          "ELIG-ZOGO": [
            {
              "station": "ECOLE PUBLIQUE ELIG-ZOGO/A",
              "voters": 306
            },
            {
              "station": "ECOLE PUBLIQUE ELIG-ZOGO/B",
              "voters": 108
            }
          ],
          "ESSOLMEYONG": [
            {
              "station": "ESPL. RES. ADJOINT AU CHEF D'ESSOLMEYONG/A",
              "voters": 109
            }
          ],
          "KOE": [
            {
              "station": "ESPLANADE CHEFFERIE KOE/A",
              "voters": 63
            }
          ],
          "KOKOE": [
            {
              "station": "ESPLANADE CHEFFERIE KOKOE/A",
              "voters": 184
            }
          ],
          "KONGO": [
            {
              "station": "ESPLANADE CHEFFERIE KONGO/A",
              "voters": 68
            }
          ],
          "LEBAMZIP II": [
            {
              "station": "ECOLE PUBLIQUE LEBAMZIP II/A",
              "voters": 130
            }
          ],
          "LEKOUBEK": [
            {
              "station": "CASE A PALABRE CHEFFERIE LEKOUBEK/A",
              "voters": 118
            }
          ],
          "LENGOUNG": [
            {
              "station": "ESPLANADE CHEFFERIE LENGOUNG/A",
              "voters": 117
            }
          ],
          "LEPOPOМО": [
            {
              "station": "ECOLE PUBLIQUE D'ELIG NTIGA/A",
              "voters": 196
            }
          ],
          "MANELON": [
            {
              "station": "CASE COMMUNAUTAIRE MANELON/A",
              "voters": 190
            }
          ],
          "MBAMA": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMA / A",
              "voters": 183
            }
          ],
          "MBASSILA": [
            {
              "station": "ECOLE PUBLIQUE DE MBASSILA/A",
              "voters": 227
            }
          ],
          "MBAZOA": [
            {
              "station": "ESPLANADE NOUVELLE CHEFFERIE MBAZOA IA",
              "voters": 264
            }
          ],
          "MBILMANA": [
            {
              "station": "CASE A PALABRE CHEFFERIE MBILMANA/A",
              "voters": 107
            }
          ],
          "MEKIMEBODO": [
            {
              "station": "ECOLE MATERNELLE DE MEKIMEBODO/A",
              "voters": 200
            }
          ],
          "MELIK A - NKOLMVAK": [
            {
              "station": "ESPLANADE RESIDENCE TOUA/A",
              "voters": 129
            }
          ],
          "MELIK-NKOLBOGO": [
            {
              "station": "ESPLANADE CHEFFERIE MELIK - NKOLBOGO TA",
              "voters": 85
            }
          ],
          "MELIK A - NKOLMVAK, MELIK B - NKOLMVAK": [
            {
              "station": "CASE CHAPELLE CATH. MELIK - NKOLMVAK/ A",
              "voters": 241
            }
          ],
          "MENDOUGA MOKALA": [
            {
              "station": "ECOLE PUBLIQUE MENDOUGA MOKALA/A",
              "voters": 336
            },
            {
              "station": "ECOLE PUBLIQUE MENDOUGA MOKALA/B",
              "voters": 59
            }
          ],
          "MENGAMA": [
            {
              "station": "CASE A PALABRE CHEFFERIE MENGAMA/A",
              "voters": 147
            }
          ],
          "MENGON": [
            {
              "station": "ESPL. RESIDENCE OFFICIER D'ETAT CIVIL/A",
              "voters": 122
            }
          ],
          "MESSAM": [
            {
              "station": "ECOLE PUBLIQUE MESSAM/A",
              "voters": 102
            }
          ],
          "MOMO": [
            {
              "station": "ECOLE PUBLIQUE MOMO/A",
              "voters": 222
            }
          ],
          "NDONG ELANG": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE NDONG ELANG/A",
              "voters": 157
            }
          ],
          "NDOVOLO": [
            {
              "station": "CASE A PALABRE CHEFFERIE NDOVOLO/A",
              "voters": 130
            }
          ],
          "NKOL AFAMBA": [
            {
              "station": "ECOLE MATERNELLE NKOL AFAMBA/A",
              "voters": 106
            }
          ],
          "NKOL AWONO": [
            {
              "station": "CASE COMMUNAUTAIRE NKOL AWONO/A",
              "voters": 212
            }
          ],
          "NKOL EBASSIMBI": [
            {
              "station": "ECOLE CATHOLIQUE NKOL EBASSIMBI/A",
              "voters": 300
            }
          ],
          "NKOL ESSONO": [
            {
              "station": "MAISON DE COOPERATIVE NKOL ESSONO/A",
              "voters": 317
            }
          ],
          "NKOL KAI": [
            {
              "station": "ESPLANADE NOUVELLE CHEFFERIE NKOL KAI/A",
              "voters": 157
            }
          ],
          "NKOL MESSENGI": [
            {
              "station": "ECOLE MATERNELLE NKOL MESSENG IVA",
              "voters": 279
            }
          ],
          "NKOL MESSENG II": [
            {
              "station": "ESPLANADE RESIDENCE BIYINA OMBOLE /A",
              "voters": 183
            }
          ],
          "NKOL NTSA": [
            {
              "station": "ECOLE PUBLIQUE NKOL NTSA/A",
              "voters": 294
            }
          ],
          "NKOL ONGUENE": [
            {
              "station": "ESPLANADE CHEFFERIE NKOL ONGUENE/A",
              "voters": 62
            }
          ],
          "NKOL ZOA I": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE NKOL ZOA / A",
              "voters": 257
            }
          ],
          "NKOL ZOA II": [
            {
              "station": "CES DE NKOL ZOA II/A",
              "voters": 79
            }
          ],
          "NKOLANGI": [
            {
              "station": "ECOLE PUBLIQUE NKOLANGI/A",
              "voters": 305
            }
          ],
          "NKOLANG II": [
            {
              "station": "CASE A PALABRE CHEFFERIE NKOLANG II/A",
              "voters": 92
            }
          ],
          "NKOLAYOS": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLAYOS/A",
              "voters": 220
            }
          ],
          "NKOLBIBAK": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLBIBAK/A",
              "voters": 141
            }
          ],
          "NKOLBOGO I": [
            {
              "station": "ECOLE PUBLIQUE NKOLBOGO I/A",
              "voters": 320
            }
          ],
          "NKOLBOGO III": [
            {
              "station": "CASE A PALABRE CHEFFERIE NKOLBOGO III/ A",
              "voters": 106
            }
          ],
          "NKOLDZAMA I": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLDZAMAI/A",
              "voters": 88
            }
          ],
          "NKOLDZAMA II": [
            {
              "station": "CASE A PALABRE NKOLDZAMA II/ A",
              "voters": 146
            }
          ],
          "NKOLEBOMА": [
            {
              "station": "ECOLE PUBLIQUE NKOLEBOMA/A",
              "voters": 182
            }
          ],
          "NKOLEKONO": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLEKONO/A",
              "voters": 212
            }
          ],
          "NKOLEVODO": [
            {
              "station": "ECOLE PUBLIQUE NKOLEVODO/A",
              "voters": 246
            }
          ],
          "NKOLMEFON": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLMEFON/A",
              "voters": 100
            }
          ],
          "NKOLMEKI": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLMEKI/A",
              "voters": 168
            }
          ],
          "NKOLMELOK": [
            {
              "station": "CASE A PALABRE CHEFFERIE NKOLMELOK/ A",
              "voters": 110
            }
          ],
          "NKOL AFAMBA, NKOLMGBANA": [
            {
              "station": "CASE DE SANTE NKOLMGBANA/A",
              "voters": 151
            }
          ],
          "NKOLMVAK": [
            {
              "station": "ECOLE PUBLIQUE NKOLMVAK/A",
              "voters": 275
            }
          ],
          "NKOLNDZOMO": [
            {
              "station": "ECOLE PUBLIQUE NKOLNDZOMO /A",
              "voters": 43
            }
          ],
          "NKOLNGOK -HAMEAU": [
            {
              "station": "LYCEE TECHNIQUE DE SA'A/A",
              "voters": 129
            }
          ],
          "NKOLNGOK-LEBAMZIP": [
            {
              "station": "CASE CHAPELLE CATH. DE NKOLNGOK-LEBAMZIP/A",
              "voters": 186
            }
          ],
          "NKOLO": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLO/A",
              "voters": 162
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/A",
              "voters": 84
            }
          ],
          "NKOLOFOUMBI": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOLMEBANGA/A",
              "voters": 321
            }
          ],
          "NKOLVE": [
            {
              "station": "ECOLE CATHOLIQUE NKOLVE/A",
              "voters": 251
            }
          ],
          "NKOLZOMO I": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLZOMO I/A",
              "voters": 135
            }
          ],
          "NKOLZOMO II": [
            {
              "station": "ESPLANADE RESIDENCE AMBASSA/A",
              "voters": 70
            }
          ],
          "NKOLZOMO - NKOLMVAK": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLZOМО- NKOLMVAK/A",
              "voters": 96
            }
          ],
          "NLONG LEBOG": [
            {
              "station": "ECOLE PUBLIQUE NLONG LEBOG/A",
              "voters": 83
            }
          ],
          "NLONGONAMBELE": [
            {
              "station": "ECOLE CATHOLIQUE NLONGONAMBELE/A",
              "voters": 310
            }
          ],
          "NLONGZOK": [
            {
              "station": "CES DE NLONGZOK/A",
              "voters": 204
            }
          ],
          "NSAN MENDOUGA": [
            {
              "station": "ECOLE CATHOLIQUE MVOM NAM /A",
              "voters": 360
            },
            {
              "station": "ECOLE CATHOLIQUE MVOM NAM/B",
              "voters": 48
            }
          ],
          "NTOBO": [
            {
              "station": "ESPLANADE CHEFFERIE NTOBO /A",
              "voters": 163
            }
          ],
          "NTOMLEBEL": [
            {
              "station": "ESPLANADE CHEFFERIE NTOMLEBEL/A",
              "voters": 93
            }
          ],
          "NTSA EKANG": [
            {
              "station": "ECOLE CATHOLIQUE NTSA EKANG/A",
              "voters": 182
            }
          ],
          "ONDONDO I": [
            {
              "station": "ECOLE PUBLIQUE ONDONDO I/A",
              "voters": 200
            }
          ],
          "ONDONDO II": [
            {
              "station": "CASE CHAPELLE PROTESTANT ONDONDO I1/ A",
              "voters": 67
            }
          ],
          "OVO ABANG": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE OVO ABANG/ A",
              "voters": 287
            }
          ],
          "POLO": [
            {
              "station": "ECOLE PUBLIQUE POLO/A",
              "voters": 206
            }
          ],
          "QUARTIER BAMILEKE": [
            {
              "station": "ECOLE PRIVEE LES PAPILLONS/A",
              "voters": 300
            },
            {
              "station": "ECOLE PRIVEE LES PAPILLONS/B",
              "voters": 306
            },
            {
              "station": "ECOLE PRIVEE LES PAPILLONS/C",
              "voters": 245
            },
            {
              "station": "ECOLE PRIVEE LES PAPILLONS/D",
              "voters": 228
            },
            {
              "station": "ECOLE PRIVEE LES PAPILLONS/E",
              "voters": 289
            }
          ],
          "QUARTIER FONCTIONNAIRE, QUARTIER LAC": [
            {
              "station": "TRIBUNAL-SALLE D'AUDIANCE/A",
              "voters": 292
            },
            {
              "station": "TRIBUNAL-SALLE D'AUDIANCE/B",
              "voters": 247
            },
            {
              "station": "TRIBUNAL-SALLE D'AUDIANCE/C",
              "voters": 230
            },
            {
              "station": "TRIBUNAL - SALLE D'AUDIANCE /D",
              "voters": 200
            }
          ],
          "QUARTIER HAOUSSA": [
            {
              "station": "ECOLE CATHOLIQUE DE SA'A/A",
              "voters": 317
            }
          ],
          "QUARTIER GARE ROUTIERE, QUARTIER MISSION, QUARTIER NKOLZAMBA": [
            {
              "station": "CASE A PALABRE FACE CHEF. Q'TIER HAOUSSA/A",
              "voters": 286
            },
            {
              "station": "ECOLE CATHOLIQUE DE SA'A/B",
              "voters": 228
            },
            {
              "station": "ECOLE CATHOLIQUE DE SA'A/C",
              "voters": 173
            },
            {
              "station": "ECOLE CATHOLIQUE DE SA'A/D",
              "voters": 214
            }
          ],
          "EBANG-MINALA, QUARTIER PRISON": [
            {
              "station": "HANGAR FACE PRISON/A",
              "voters": 345
            },
            {
              "station": "HANGAR FACE PRISON/ B",
              "voters": 206
            }
          ],
          "QUARTIER SANTA BARBARA, QUARTIER VALLEE HOPITAL, QUARTIER VALLEE LYCEE": [
            {
              "station": "LYCEE GENERAL DE SA'A/A",
              "voters": 300
            },
            {
              "station": "LYCEE GENERAL DE SA'A/B",
              "voters": 181
            }
          ],
          "QUARTIER CRAT, QUARTIER PARALLELE 5, QUARTIER SANTA BARBARA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE SA'A/A",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE SA'A/B",
              "voters": 225
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE SA'A/C",
              "voters": 266
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE SA'A/D",
              "voters": 308
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE IIDE SA'A/E",
              "voters": 329
            }
          ],
          "WOMKOA": [
            {
              "station": "ECOLE PUBLIQUE WOMKOA/A",
              "voters": 172
            }
          ],
          "ELESOGUE": [
            {
              "station": "CENTRE DE SANTE D'ELESOGUE/A",
              "voters": 119
            }
          ],
          "NKOL ONDOGO": [
            {
              "station": "ESPLANADE CHEF NKOL ONDOGO/A",
              "voters": 160
            }
          ],
          "NKOLBOGO II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLBOGO II/A",
              "voters": 289
            }
          ],
          "NKOL ANGOUNG, NKOLANGOUNG": [
            {
              "station": "E.P DE NKOLMBANA/A",
              "voters": 131
            }
          ],
          "MAMBRAT III, QUARTIER LAC, QUARTIER MARCHE": [
            {
              "station": "E.P BILINGUE DE SA'A/A",
              "voters": 321
            }
          ],
          "LEBAMZIP, LEBAMZIP I": [
            {
              "station": "ECOLE CATHOLIQUE DE LEBAMZIP/A",
              "voters": 389
            }
          ],
          "OBAN": [
            {
              "station": "ECOLE CATHOLIQUE D'OBAN/A",
              "voters": 97
            }
          ],
          "MBAN": [
            {
              "station": "ECOLE PIBLIQUE DE MBAN/A",
              "voters": 295
            }
          ],
          "NKOL EBАЕ": [
            {
              "station": "ECOLE MATERNELLE DE NKOL EBAE/A",
              "voters": 115
            }
          ],
          "NKOLMEYOS": [
            {
              "station": "CENTRE DE SANTE DE NKOLMEYOS/A",
              "voters": 127
            }
          ]
        }
      },
      "MBAM-ET-INOUBOU": {
        "BAFIA": {
          "BIABEGOURA": [
            {
              "station": "CHEFFERIE DE BIABEGOURA/A",
              "voters": 157
            }
          ],
          "BIABEREBE": [
            {
              "station": "ECOLE PUBLIQUE DE BIABEREBE/A",
              "voters": 399
            },
            {
              "station": "ECOLE PUBLIQUE DE BIABEREBE/B",
              "voters": 371
            },
            {
              "station": "ECOLE PUBLIQUE DE BIABEREBE/C",
              "voters": 356
            }
          ],
          "BIABETOМ": [
            {
              "station": "BIABETOM MAISON BLEU/A",
              "voters": 366
            }
          ],
          "BIABEYAKAN": [
            {
              "station": "COLLEGE MBONO BIABEYAKAN/A",
              "voters": 268
            },
            {
              "station": "COLLEGE MBONO BIABEYAKAN/B",
              "voters": 126
            }
          ],
          "BIABEYAKAN, NDENGUE": [
            {
              "station": "LYCEE TECHNIQUE BIABEYAKAN/A",
              "voters": 339
            },
            {
              "station": "LYCEE TECHNIQUE BIABEYAKAN/B",
              "voters": 316
            },
            {
              "station": "LYCEE TECHNIQUE BIABEYAKAN/C",
              "voters": 332
            },
            {
              "station": "LYCEE TECHNIQUE BIABEYAKAN/D",
              "voters": 407
            }
          ],
          "BIABEZOCK": [
            {
              "station": "LYCEE CLASSIQUE DE BAFIA/A",
              "voters": 284
            },
            {
              "station": "LYCEE CLASSIQUE DE BAFIA/B",
              "voters": 280
            },
            {
              "station": "LYCEE CLASSIQUE DE BAFIA/C",
              "voters": 250
            }
          ],
          "BIAMO": [
            {
              "station": "ECOLE ANNEXE DE BIAMO/A",
              "voters": 333
            },
            {
              "station": "ECOLE ANNEXE DE BIAMO/B",
              "voters": 307
            },
            {
              "station": "ECOLE ANNEXE DE BIAMO/C",
              "voters": 134
            }
          ],
          "BIATSOТА": [
            {
              "station": "HANGAR MARCHE CACAO DE BIATSOTA/A",
              "voters": 349
            }
          ],
          "BIGNA": [
            {
              "station": "ECOLE PUBLIQUE DE BIGNAI/A",
              "voters": 188
            },
            {
              "station": "E.P.C PAROISSE GALILEE DE BIGNA 2/A",
              "voters": 240
            }
          ],
          "DOGUEM DAH-DANG": [
            {
              "station": "E.P.C DE DOGUEM/A",
              "voters": 200
            }
          ],
          "DONENKENG": [
            {
              "station": "C.E.S DE DONENKENG I1/A",
              "voters": 220
            },
            {
              "station": "ECOLE PUBLIQUE DE DONENKENG II/A",
              "voters": 205
            },
            {
              "station": "HOPITAL DE L'E.P.C DONENKENG STATION/ A",
              "voters": 127
            }
          ],
          "DONERIBOUEM": [
            {
              "station": "ECOLE PUBLIQUE DE DONERIBOUEM/A",
              "voters": 159
            }
          ],
          "EGONA": [
            {
              "station": "ESPLANADE BOSQUET BAR EGONA I/A",
              "voters": 206
            }
          ],
          "GONDON": [
            {
              "station": "MISSION CATHOLIQUE DE GONDON/A",
              "voters": 358
            },
            {
              "station": "MISSION CATHOLIQUE DE GONDON/B",
              "voters": 225
            },
            {
              "station": "ESP. RES. AYANGMA GONDON CENTRE/A",
              "voters": 107
            },
            {
              "station": "FOYER BANDJOUN GONDON VALLEE/A",
              "voters": 322
            },
            {
              "station": "ESPLANADE BAOBAB GONDON/A",
              "voters": 340
            },
            {
              "station": "ESPLANADE BAOBAB GONDON/B",
              "voters": 358
            },
            {
              "station": "ESPLANADE BAOBAB GONDON/C",
              "voters": 199
            }
          ],
          "GOUFAN": [
            {
              "station": "MAGASIN COLPLACA CARREFOUR GOUFAN 1 TA",
              "voters": 390
            },
            {
              "station": "ECOLE PUBLIQUE DE GOUFAN 2/A",
              "voters": 226
            },
            {
              "station": "ECOLE PUBLIQUE DE GOUFAN 2/ B",
              "voters": 205
            },
            {
              "station": "ESPL. RESIDENCE GOURA LAZARE GOUFAN 3/A",
              "voters": 113
            }
          ],
          "KIRAE": [
            {
              "station": "C.N.P.S/A",
              "voters": 291
            },
            {
              "station": "C.N.P.S/B",
              "voters": 241
            },
            {
              "station": "EMMA DECOR SERIGRAPHIE/A",
              "voters": 361
            },
            {
              "station": "EMMA DECOR SERIGRAPHIE/B",
              "voters": 234
            }
          ],
          "LABLE": [
            {
              "station": "ENIEG SAVANA LABLE/A",
              "voters": 325
            },
            {
              "station": "COLLEGE SAINT SEBASTIEN LABLE / A",
              "voters": 279
            }
          ],
          "MESSANGSANG": [
            {
              "station": "E.P.C MESSANGSANG 1/A",
              "voters": 336
            },
            {
              "station": "E.P.C MESSANGSANG 1/B",
              "voters": 356
            },
            {
              "station": "E.P.C MESSANGSANG 1/ C",
              "voters": 227
            },
            {
              "station": "ECOLE PUBLIQUE MESSANSANG 2/A",
              "voters": 346
            },
            {
              "station": "ECOLE PUBLIQUE MESSANSANG 2/B",
              "voters": 269
            },
            {
              "station": "ECOLE PUBLIQUE MESSANSANG 2/C",
              "voters": 256
            }
          ],
          "MERENG": [
            {
              "station": "ECOLE PUBLIQUE DE MERENG/A",
              "voters": 138
            }
          ],
          "BIABEGOURA, NDENGUE": [
            {
              "station": "COLLEGE SABAYA/A",
              "voters": 276
            },
            {
              "station": "COLLEGE SABAYA/B",
              "voters": 297
            },
            {
              "station": "COLLEGE SABAYA/C",
              "voters": 284
            },
            {
              "station": "COLLEGE SABAYA/D",
              "voters": 208
            },
            {
              "station": "COLLEGE SABAYA/E",
              "voters": 216
            }
          ],
          "BIABEREBE, NDENGUE": [
            {
              "station": "SNEC NDENGUE/A",
              "voters": 387
            }
          ],
          "NYAMSONG": [
            {
              "station": "ECOLE PUBLIQUE DE KORDO'O NYAMSONG 1 TA",
              "voters": 239
            },
            {
              "station": "ECOLE PUBLIQUE DE NYAMSONG 2/A",
              "voters": 193
            },
            {
              "station": "ESPLANADE CHEFFERIE DE NYAMSONG 3/A",
              "voters": 159
            }
          ],
          "PLATEAU MACHIA": [
            {
              "station": "ENIEG PLATEAU /A",
              "voters": 374
            },
            {
              "station": "HANGAR MOSQUEE DU PLATEAU/A",
              "voters": 343
            },
            {
              "station": "HANGAR MOSQUEE DU PLATEAU/B",
              "voters": 340
            },
            {
              "station": "HANGAR MOSQUEE DU PLATEAU /C",
              "voters": 325
            }
          ],
          "GONDON, QUARTIER HAOUSSA": [
            {
              "station": "FOYER BANGANTE/A",
              "voters": 322
            },
            {
              "station": "FOYER BANGANTE/B",
              "voters": 258
            }
          ],
          "QUARTIER HAOUSSA, TCHOKIDJEADOM": [
            {
              "station": "MOSQUEE 2 MARCHE DU SOIR/A",
              "voters": 302
            },
            {
              "station": "MOSQUEE 2 MARCHE DU SOIR/B",
              "voters": 342
            },
            {
              "station": "MOSQUEE 2 MARCHE DU SOIR/C",
              "voters": 267
            }
          ],
          "BIABEYAKAN, BIABEZOCK, PLATEAU MACHIA, QUARTIER RESIDENTIEL": [
            {
              "station": "LYCEE BILINGUE/A",
              "voters": 300
            },
            {
              "station": "LYCEE BILINGUE/B",
              "voters": 284
            },
            {
              "station": "LYCEE BILINGUE/C",
              "voters": 309
            }
          ],
          "QUARTIER RESIDENTIEL": [
            {
              "station": "ECOLE CATHOLIQUE CALASANZ/A",
              "voters": 306
            },
            {
              "station": "ECOLE CATHOLIQUE CALASANZ/ B",
              "voters": 265
            },
            {
              "station": "BLOC ADMINISTRATIF PRISON/A",
              "voters": 237
            }
          ],
          "NDENGUE, QUARTIER RESIDENTIEL, RIMIS": [
            {
              "station": "HOTEL DES FINANCES/A",
              "voters": 315
            },
            {
              "station": "HOTEL DES FINANCES/B",
              "voters": 104
            }
          ],
          "GONDON, RIMIS": [
            {
              "station": "PETIT SEMINAIRE/A",
              "voters": 393
            },
            {
              "station": "PETIT SEMINAIRE/B",
              "voters": 398
            },
            {
              "station": "PETIT SEMINAIRE/C",
              "voters": 291
            }
          ],
          "RIMIS": [
            {
              "station": "MOSQUEE RIMIS STADE /A",
              "voters": 317
            },
            {
              "station": "MOSQUEE RIMIS STADE/B",
              "voters": 237
            }
          ],
          "RIONONG": [
            {
              "station": "ECOLE PUBLIQUE DE RIONONG/A",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE DE RIONONG/B",
              "voters": 53
            }
          ],
          "NDENGUE, RUE CHEVALIER": [
            {
              "station": "ECOLE PUBLIQUE DE RUE CHEVALIER/A",
              "voters": 379
            },
            {
              "station": "ECOLE PUBLIQUE DE RUE CHEVALIER/B",
              "voters": 365
            },
            {
              "station": "ECOLE PUBLIQUE DE RUE CHEVALIER/C",
              "voters": 112
            }
          ],
          "SANAM": [
            {
              "station": "HANGAR CHEFFERIE DE SANAM/A",
              "voters": 63
            }
          ],
          "TAMBORO": [
            {
              "station": "ECOLE PRIVEE LAIQUE DE TAMBORO/A",
              "voters": 405
            },
            {
              "station": "ECOLE PRIVEE LAIQUE DE TAMBORO/B",
              "voters": 244
            },
            {
              "station": "ECOLE PRIVEE LAIQUE DE TAMBORO/C",
              "voters": 168
            }
          ],
          "TARO": [
            {
              "station": "ECOLE PUBLIQUE DE TARO/A",
              "voters": 193
            }
          ],
          "TCHEKANE": [
            {
              "station": "ECOLE PUBLIQUE DE TCHEKANE 1/A",
              "voters": 250
            },
            {
              "station": "ECOLE PUBLIQUE DE TCHEKANE 2/A",
              "voters": 252
            },
            {
              "station": "ESPL. RES. NDJOCK A YANG TCHEKANE DJ. / A",
              "voters": 82
            }
          ],
          "TCHOKIDJEADOM": [
            {
              "station": "ECOLE PRIMAIRE PRIVEE LE BON BERGER/ A",
              "voters": 341
            },
            {
              "station": "ECOLE PRIMAIRE PRIVEE LE BON BERGER/ B",
              "voters": 285
            },
            {
              "station": "ECOLE CORANIQUE DE TCHOKIDJEADOM/A",
              "voters": 330
            },
            {
              "station": "ECOLE CORANIQUE DE TCHOKIDJEADOM/B",
              "voters": 294
            }
          ]
        },
        "BOKITO": {
          "ASSALAI, ASSALAI, BEGNI": [
            {
              "station": "CASE A PALABRES CHEFFERIE D'ASSALA I/A",
              "voters": 221
            }
          ],
          "ASSALA I, ASSALA": [
            {
              "station": "ECOLE PUBLIQUE D'ASSALA I/A",
              "voters": 304
            }
          ],
          "ASSALA II, ASSALA II": [
            {
              "station": "ECOLE PUBLIQUE D'ASSALA II/A",
              "voters": 241
            },
            {
              "station": "CASE A PALABRES CHEF. D'ASSALA II/A",
              "voters": 137
            }
          ],
          "BAKOA, BAKOA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE BAKOA/A",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE BAKOA/A",
              "voters": 190
            },
            {
              "station": "MAGASIN MIDO MARCHE DE BAKOA/A",
              "voters": 214
            },
            {
              "station": "CHAPELLE CATH. EDOGO DE BAKOA/A",
              "voters": 121
            }
          ],
          "BALAMBА І": [
            {
              "station": "LYCEE DE BALAMBA I/A",
              "voters": 162
            }
          ],
          "BALAMВА II": [
            {
              "station": "CENTRE DE SANTE DE BALAMBA II/A",
              "voters": 212
            },
            {
              "station": "ECOLE NYLON DE BALAMBA II/A",
              "voters": 277
            }
          ],
          "BALAMBА II": [
            {
              "station": "CENTRE DE SANTE DE BALAMBA II/B",
              "voters": 158
            },
            {
              "station": "ECOLE PRIVEE BILINGUE DE BALAMBA II/A",
              "voters": 203
            }
          ],
          "ASSALA II, BALAMBА II": [
            {
              "station": "ECOLE PUBLIQUE DE BALAMBAI/A",
              "voters": 189
            },
            {
              "station": "ECOLE PUBLIQUE DE BALAMBA II/B",
              "voters": 110
            }
          ],
          "BASSOLO, BASSOLO": [
            {
              "station": "ECOLE PUBLIQUE DE BASSOLO/A",
              "voters": 270
            },
            {
              "station": "SECTEUR ZAIRE DE BASSOLO/A",
              "voters": 102
            }
          ],
          "BATANGA": [
            {
              "station": "CENTRE DE SANTE DE BATANGA/A",
              "voters": 242
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE BATANGA/A",
              "voters": 202
            }
          ],
          "BEGNI, BEGNI": [
            {
              "station": "ECOLE PUBLIQUE DE BEGNI/A",
              "voters": 249
            },
            {
              "station": "CHAPELLE MISSION CATHOLIQUE DE BEGNI/ A",
              "voters": 230
            },
            {
              "station": "MAGASIN SODECAO DE BEGNI/A",
              "voters": 135
            }
          ],
          "BOALONDO": [
            {
              "station": "ECOLE PUBLIQUE DE BOALONDO/A",
              "voters": 198
            }
          ],
          "BOKAGA, BOKAGA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE BOKAGA/A",
              "voters": 100
            },
            {
              "station": "FOYER NJOCKO DE BOKAGA/A",
              "voters": 213
            },
            {
              "station": "MARCHE DE BOKAGA/A",
              "voters": 164
            },
            {
              "station": "ESPLANADE DU PRESBYTERE EPC DE BOKAGA/A",
              "voters": 207
            }
          ],
          "BOKITO RURAL": [
            {
              "station": "CHAPELLE EPC DE BOKITO RURAL/A",
              "voters": 275
            }
          ],
          "BOKITO VILLE": [
            {
              "station": "ECOLE PUBLIQUE DE BOKITO/A",
              "voters": 231
            }
          ],
          "BOKITO VILLE I": [
            {
              "station": "ECOLE PUBLIQUE DE BOKITO/B",
              "voters": 148
            },
            {
              "station": "LYCEE DE BOKITO/A",
              "voters": 311
            }
          ],
          "BOKITO RURAL, BOKITO VILLE I": [
            {
              "station": "TRIBUNE DES FETES DE BOKITO/A",
              "voters": 260
            },
            {
              "station": "TRIBUNE DES FETES DE BOKITO/B",
              "voters": 134
            }
          ],
          "BOKITO VILLEI": [
            {
              "station": "LYCEE DE BOKITO/B",
              "voters": 132
            }
          ],
          "BOKITO VILLE I, BOKITO VILLE II": [
            {
              "station": "HANGAR MARCHE DE BOKITO/A",
              "voters": 329
            },
            {
              "station": "HANGAR MARCHE DE BOKITO/B",
              "voters": 213
            }
          ],
          "BOKITO VILLE II": [
            {
              "station": "SAR-SM DE BOKITO/A",
              "voters": 344
            },
            {
              "station": "ESPLANADE KADJI-BAR DE BOKITO/A",
              "voters": 131
            }
          ],
          "BONGANDO": [
            {
              "station": "CENTRE DE SANTE DE BONGAND0/A",
              "voters": 216
            },
            {
              "station": "CHAPELLE CATHOLIQUE BOUGNIMBALA/A",
              "voters": 153
            }
          ],
          "BONGO": [
            {
              "station": "ECOLE MISSION CATHOLIQUE DE BONGO /A",
              "voters": 304
            },
            {
              "station": "ECOLE PUBLIQUE DE BONGO/A",
              "voters": 294
            }
          ],
          "BOTOMВО": [
            {
              "station": "ECOLE PUBLIQUE DE BOTOMBO /A",
              "voters": 213
            }
          ],
          "BOUGNOUNGOULOUK": [
            {
              "station": "ECOLE PUBLIQUE DE BOUGNOUNGOULOUK A",
              "voters": 187
            },
            {
              "station": "ESPL. BOYAKO OMBANO BOUGNOUNGOULOUK/A",
              "voters": 42
            }
          ],
          "EDIOLOMO": [
            {
              "station": "ECOLE PUBLIQUE D'EDIOLOMO/A",
              "voters": 158
            }
          ],
          "GUEBOВА": [
            {
              "station": "RESIDENCE MANTSANA CARREFOUR DE GUEBOBA/A",
              "voters": 192
            },
            {
              "station": "ECOLE PUBLIQUE DE GUEВОВА/А",
              "voters": 183
            }
          ],
          "GUEFIGUE, GUEFIGUE": [
            {
              "station": "CASE A PALABRES CHEFFERIE DE GUEFIGUE IA",
              "voters": 208
            },
            {
              "station": "ECOLE PUBLIQUE DE GUEFIGUE /A",
              "voters": 342
            },
            {
              "station": "BIGUINDE DE GUEFIGUE/A",
              "voters": 115
            }
          ],
          "KANANGA": [
            {
              "station": "ECOLE PUBLIQUE DE KANANGA/A",
              "voters": 225
            }
          ],
          "KEDIA": [
            {
              "station": "CHAPELLE MISSION CATHOLIQUE DE KEDIA/ A",
              "voters": 160
            },
            {
              "station": "ECOLE PUBLIQUE DE KEDIA/A",
              "voters": 258
            },
            {
              "station": "HANGAR MARCHE DE KEDIA/A",
              "voters": 165
            }
          ],
          "KILIKOTО": [
            {
              "station": "ECOLE PUBLIQUE DE KILIKOTO/A",
              "voters": 229
            }
          ],
          "MBOLA": [
            {
              "station": "MISSION CATHOLIQUE DE MBOLA/A",
              "voters": 50
            }
          ],
          "NYAMANGA I": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMANGA I/A",
              "voters": 179
            }
          ],
          "NYAMBAYE": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAYE/A",
              "voters": 269
            }
          ],
          "OMENDE, OMENDE": [
            {
              "station": "ECOLE PUBLIQUE D'OMENDE/A",
              "voters": 183
            },
            {
              "station": "MAGASIN SODEСАО ВОANANA D'OMENDE/A",
              "voters": 173
            },
            {
              "station": "CENTRE DE SANTE INTEGRE DE OMENDE/A",
              "voters": 201
            }
          ],
          "OMENG": [
            {
              "station": "ECOLE PUBLIQUE D'OMENG/A",
              "voters": 125
            }
          ],
          "OSSIMB": [
            {
              "station": "ECOLE PUBLIQUE D'OSSIMB I/A",
              "voters": 129
            }
          ],
          "OSSIMB II": [
            {
              "station": "ECOLE NGNIKOUNG D'OSSIMB II/A",
              "voters": 62
            }
          ],
          "THEKOS": [
            {
              "station": "ECOLE PUBLIQUE MENGUE DE TCHEKOS /A",
              "voters": 347
            },
            {
              "station": "ECOLE PUBLIQUE NYOLOTH DE TCHEKOS/A",
              "voters": 221
            },
            {
              "station": "MISSION CATHOLIQUE DE TCHEKOS/A",
              "voters": 176
            }
          ],
          "TOBAGNE": [
            {
              "station": "CHAPELLE EPC DE TOBAGNE/A",
              "voters": 268
            },
            {
              "station": "ECOLE PUBLIQUE DE TOBAGNE/A",
              "voters": 216
            },
            {
              "station": "RESIDENCE BATSAMAKEN-EKIKI DE TOBAGNE/A",
              "voters": 150
            }
          ],
          "YAMBASSA": [
            {
              "station": "ECOLE PUBLIQUE DE YAMBASSA/A",
              "voters": 251
            },
            {
              "station": "HANGAR MARCHE DE YAMBASSA/A",
              "voters": 235
            },
            {
              "station": "HANGAR MARCHE DE YAMBASSA/B",
              "voters": 101
            },
            {
              "station": "MAGASIN GICAG-GUESSELE DE YAMBASSA А",
              "voters": 165
            },
            {
              "station": "CETIC DE YAMBASSA/A",
              "voters": 171
            }
          ],
          "YANGBEN": [
            {
              "station": "DISPENSAIRE DE YANGBEN/A",
              "voters": 213
            },
            {
              "station": "ECOLE PUBLIQUE DE YANGBEN/A",
              "voters": 332
            },
            {
              "station": "ECOLE PUBLIQUE NISSIOMO DE YANGBEN/A",
              "voters": 116
            },
            {
              "station": "HANGAR MARCHE DE YANGBEN/A",
              "voters": 348
            },
            {
              "station": "HANGAR MARCHE DE YANGBEN/ B",
              "voters": 97
            },
            {
              "station": "FOYER DE YANGBEN/A",
              "voters": 137
            }
          ],
          "YORRO": [
            {
              "station": "FOYER DE YORRO/A",
              "voters": 281
            },
            {
              "station": "CHAPELLE CATH. BONGANDO/A",
              "voters": 132
            },
            {
              "station": "ECOLE PUBLIQUE D'ANGANA/A",
              "voters": 230
            }
          ],
          "BONGANDO, YANGBEN": [
            {
              "station": "ECOLE PUB. BONGANDO/A",
              "voters": 125
            }
          ],
          "GUEBOBА": [
            {
              "station": "GUEBOBA GUISSINE/A",
              "voters": 85
            }
          ],
          "KILIKOTO": [
            {
              "station": "CHAPELLE EPC BOTIABA/A",
              "voters": 111
            }
          ],
          "ASSALAI, BOUNKOLO, OMENDE": [
            {
              "station": "E.P DE BOUNKOLO/A",
              "voters": 91
            }
          ],
          "BAKOA, BAKOA, BAKOA": [
            {
              "station": "CHAPELLE CATH. OMBANO DE BAKOA/A",
              "voters": 130
            }
          ],
          "ASSALAI, ASSALAI": [
            {
              "station": "ESPL. ASSOUGOUMA ANTO A. D'ASSALA I/A",
              "voters": 108
            }
          ],
          "BALAMВА II, BONGANDO, KEDIA, OSSIMBI": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE D'OSSIMBI/ A",
              "voters": 143
            }
          ],
          "BOUGNOUNGOULOK, BOUGNOUNGOULOUK": [
            {
              "station": "ECOLE PUBLIQUE D'EKOLOI/A",
              "voters": 136
            }
          ],
          "ASSALA I, ASSALA II": [
            {
              "station": "ESPLANADE NTSAMA A KWALANG I/A/A",
              "voters": 87
            }
          ],
          "BOTATANGO": [
            {
              "station": "ANTENNE BAR/A",
              "voters": 128
            }
          ],
          "BALAMBА I": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE BALAMBA/A",
              "voters": 206
            }
          ],
          "OSSIMB I": [
            {
              "station": "ECOLE PUBLIQUE D'OSSIMB II/A",
              "voters": 76
            }
          ]
        },
        "DEUK": {
          "BANDA": [
            {
              "station": "ECOLE PUBLIQUE BANDA/A",
              "voters": 187
            }
          ],
          "BEANDONG": [
            {
              "station": "ECOLE PUBLIQUE BEANDONG/A",
              "voters": 214
            }
          ],
          "BEIH": [
            {
              "station": "ECOLE PUBLIQUE BEIH/А",
              "voters": 222
            }
          ],
          "BOKO- KIDOUNG, BOKO MONTAGNE": [
            {
              "station": "ECOLE PUBLIQUE BOKO MONTAGNE/A",
              "voters": 357
            }
          ],
          "BОKО-KIDOUNG, BOKO MONTAGNE": [
            {
              "station": "ECOLE PUBLIQUE BOKO MONTAGNE/B",
              "voters": 58
            }
          ],
          "BONG, DJOCK, MOUZI": [
            {
              "station": "ECOLE PUBLIQUE MOUZI/A",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE MOUZI/B",
              "voters": 57
            }
          ],
          "DEUK-NEZI, DEUK 2": [
            {
              "station": "ECOLE CATHOLIQUE DEUK CENTREA",
              "voters": 271
            }
          ],
          "BANDA, DEUK CENTRE PLATEAU, DEUK CENTRE SANG SANG, DIOMA": [
            {
              "station": "ECOLE PUBLIQUE PLATEAU/A",
              "voters": 253
            },
            {
              "station": "ECOLE PUBLIQUE PLATEAU/B",
              "voters": 94
            }
          ],
          "DEUK CENTRE FLAMBOYANT, DEUK CENTRE GAM, DEUK CENTRE GUENG, DEUK CENTRE TSIDJO": [
            {
              "station": "SAR/SM DEUK CENTRE/A",
              "voters": 274
            },
            {
              "station": "SAR/SM DEUK CENTRE/ B",
              "voters": 65
            }
          ],
          "DJAGA DOKOUM": [
            {
              "station": "CHAPELLE DOKOUM/A",
              "voters": 177
            }
          ],
          "FIANG": [
            {
              "station": "FOYER CULTUREL FIANG/A",
              "voters": 73
            }
          ],
          "GAH": [
            {
              "station": "FOYER CULTUREL GAH/A",
              "voters": 156
            }
          ],
          "GBWAH, KOP": [
            {
              "station": "ECOLE PUBLIQUE GBWAH/A",
              "voters": 285
            }
          ],
          "GOUFE, GOUPE, NKANG": [
            {
              "station": "CASE A PALABRE CANTON BALOM I GOUFE/ A",
              "voters": 179
            }
          ],
          "BISSIA, KETON, KETON": [
            {
              "station": "ECOLE PUBLIQUE BISSIA/A",
              "voters": 182
            }
          ],
          "MPAGNE": [
            {
              "station": "ECOLE PUBLIQUE MPAGNE/A",
              "voters": 205
            }
          ],
          "MPOUGA": [
            {
              "station": "ECOLE PUBLIQUE MPOUGA/A",
              "voters": 134
            }
          ],
          "NDAMBI": [
            {
              "station": "CASE COMMUNAUTAIRE NDAMBI /A",
              "voters": 178
            }
          ],
          "NDANENKONG": [
            {
              "station": "FOYER CULTUREL NDANENKONG/A",
              "voters": 219
            }
          ],
          "NKOUBOU": [
            {
              "station": "ECOLE PUBLIQUE NKOUBOU/A",
              "voters": 212
            }
          ],
          "NYAMZOM": [
            {
              "station": "ECOLE DES PARENTS NYAMZOM/A",
              "voters": 137
            }
          ],
          "TSONGO": [
            {
              "station": "FOYER CULTUREL TSONGO/A",
              "voters": 136
            }
          ],
          "ZAKAN": [
            {
              "station": "ECOLE PUBLIQUE ZAKAN/A",
              "voters": 181
            }
          ],
          "ZOCK MONTAGNE": [
            {
              "station": "ECOLE PUBLIQUE ZOCK MONTAGNE/A",
              "voters": 275
            }
          ],
          "ВОКО- KIDOUNG": [
            {
              "station": "ECOLE PUBLIQUE BOKO KIDOUNG/A",
              "voters": 125
            }
          ],
          "DJAGA KOOH": [
            {
              "station": "ECOLE PUBLIQUE DJAGA/A",
              "voters": 116
            }
          ],
          "DEUK 2": [
            {
              "station": "ECOLE PUBLIQUE DEUK I/A",
              "voters": 121
            }
          ],
          "GUENG": [
            {
              "station": "CASE COMMUNAUTAIRE GUENG/A",
              "voters": 130
            }
          ],
          "NKANG": [
            {
              "station": "ECOLE PUBLIQUE NKANG/A",
              "voters": 101
            }
          ],
          "DJAGA DOUENG": [
            {
              "station": "CHAPELLE EPC DJAGA DOUENG/A",
              "voters": 181
            }
          ],
          "DEUK 2, DIOMA, DIOMA": [
            {
              "station": "ECOLE PUBLIQUE DIOMA/A",
              "voters": 116
            }
          ],
          "ZOCK KIDOUNG": [
            {
              "station": "ECOLE PUBLIQUE ZOCK KIDOUNG/A",
              "voters": 184
            }
          ]
        },
        "KIIKI": {
          "BEP IREP": [
            {
              "station": "ECOLE PUBLIQUE BEP IREP/A",
              "voters": 105
            }
          ],
          "BIAMESSE": [
            {
              "station": "ECOLE PUBLIQUE BIAMESSE/A",
              "voters": 112
            }
          ],
          "BEP IDJEM, BITANG": [
            {
              "station": "ECOLE PUBLIQUE RIBONG/A",
              "voters": 201
            }
          ],
          "BITANG": [
            {
              "station": "CASE CHAPELLE RIZABEN/A",
              "voters": 244
            },
            {
              "station": "ECOLE PUBLIQUE NYAMNGNO/A",
              "voters": 98
            },
            {
              "station": "HANGAR MARCHE ABANDA/A",
              "voters": 159
            },
            {
              "station": "CETIC DE KITAC/A",
              "voters": 55
            }
          ],
          "BOUGNI": [
            {
              "station": "ECOLE DES PARENTS BOUGNI/A",
              "voters": 93
            }
          ],
          "KIIKI": [
            {
              "station": "ECOLE PUBLIQUE DOGBANG/A",
              "voters": 260
            },
            {
              "station": "ECOLE PUBLIQUE DOGBANG/B",
              "voters": 110
            },
            {
              "station": "ECOLE PUBLIQUE ZIBIDOUM/A",
              "voters": 279
            },
            {
              "station": "ECOLE PUBLIQUE ZIBIDOUM/B",
              "voters": 83
            },
            {
              "station": "CENTRE DE SANTE INTEGRE KIIKI /A",
              "voters": 280
            },
            {
              "station": "HANGAR CARREFOUR BEM/A",
              "voters": 134
            }
          ],
          "KPWO": [
            {
              "station": "ECOLE PUBLIQUE/A",
              "voters": 97
            }
          ],
          "MOUKEN 1": [
            {
              "station": "ECOLE PUBLIQUE MOUKEN 1/A",
              "voters": 132
            }
          ],
          "MOUKEN 2": [
            {
              "station": "CASE CHAPELLE DE MOUKEN 2/A",
              "voters": 94
            }
          ],
          "MOUKO": [
            {
              "station": "LYCEE MOUKO/A",
              "voters": 366
            },
            {
              "station": "LYCEE MOUKO /B",
              "voters": 78
            },
            {
              "station": "ECOLE PUBLIQUE DOGNOUNG/A",
              "voters": 162
            },
            {
              "station": "ECOLE PUBLIQUE RIBAMBAI/A",
              "voters": 177
            }
          ],
          "NDIEMI 1, NDIEMI 2": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE NDIEMI 2/A",
              "voters": 141
            }
          ],
          "RIBANG": [
            {
              "station": "ECOLE PUBLIQUE DE RIBANG/A",
              "voters": 181
            }
          ],
          "ROUM": [
            {
              "station": "CENTRE DE SANTE ROUM/A",
              "voters": 152
            }
          ],
          "TOOH": [
            {
              "station": "ECOLE PUBLIQUE TOOH/A",
              "voters": 228
            }
          ],
          "YAKAN 1": [
            {
              "station": "ECOLE PUBLIQUE YAKAN 1/A",
              "voters": 228
            }
          ],
          "YAKAN 2": [
            {
              "station": "CENTRE DE SANTE YAKAN 2/A",
              "voters": 145
            }
          ],
          "BEP-IDJEM": [
            {
              "station": "COLLEGE D'ENSEIGNEMENT SECONDAIRE DE BEP/A",
              "voters": 91
            }
          ],
          "NDIEMI 1, NDIEMI I": [
            {
              "station": "CARREFOUR NDIEMI I/A",
              "voters": 143
            }
          ]
        },
        "KON-YAMBETTA": {
          "BABETTA": [
            {
              "station": "ECOLE PUBLIQUE DE BABETTA/A",
              "voters": 292
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE BAMBASSANE/A",
              "voters": 90
            },
            {
              "station": "HANGAR MARCHE BANDA/A",
              "voters": 151
            }
          ],
          "BAMOKО": [
            {
              "station": "CHAPELLE CATHOLIQUE DE BAMOKO/A",
              "voters": 159
            }
          ],
          "BAPE-MONTAGNE, GAH-BAPЕ": [
            {
              "station": "CHAPELLE PROTESTANTE DE BAPE MONTAGNE/A",
              "voters": 149
            }
          ],
          "BAYOMEN": [
            {
              "station": "C.E.S DE BAYOMEN/A",
              "voters": 396
            },
            {
              "station": "C.E.S DE BAYOMEN/B",
              "voters": 326
            }
          ],
          "BEGUI": [
            {
              "station": "ECOLE PUBLIQUE DE BEGUI/A",
              "voters": 191
            }
          ],
          "BONECK": [
            {
              "station": "C.E.S DE BONECK/A",
              "voters": 288
            }
          ],
          "DIODARE": [
            {
              "station": "CHAPELLE PROTESTANTE DE DIODARE /A",
              "voters": 180
            }
          ],
          "EDOP": [
            {
              "station": "CHAPELLE CATHOLIQUE DE EDOP/A",
              "voters": 116
            }
          ],
          "GAH-BAPЕ": [
            {
              "station": "ECOLE PUBLIQUE DE GAH-BAPE /A",
              "voters": 277
            }
          ],
          "GAH-BAРE": [
            {
              "station": "HANGAR MARCHE MONDIAL DE NDENG/A",
              "voters": 232
            }
          ],
          "KEN": [
            {
              "station": "HANGAR CHEFFERIE DE KEN/A",
              "voters": 62
            }
          ],
          "KIBOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KIBOUM/A",
              "voters": 347
            },
            {
              "station": "ECOLE PUBLIQUE DE KIBOUM/B",
              "voters": 76
            }
          ],
          "KON": [
            {
              "station": "ECOLE PUBLIQUE DE KON/A",
              "voters": 317
            },
            {
              "station": "ECOLE PUBLIQUE DE KON/B",
              "voters": 52
            }
          ],
          "BAYOMEN, KON": [
            {
              "station": "ECOLE PUBLIQUE DE KON MADONG/A",
              "voters": 171
            }
          ],
          "KON-KIDOUN": [
            {
              "station": "ECOLE PUBLIQUE DE KON KIDOUNI/A",
              "voters": 185
            },
            {
              "station": "ECOLE PUBLIQUE DE KON KIDOUNII/A",
              "voters": 77
            }
          ],
          "LAKPWANG": [
            {
              "station": "ECOLE PUBLIQUE DE LAKPWANG/A",
              "voters": 112
            }
          ],
          "LALLE": [
            {
              "station": "CHAPELLE CATHOLIQUE DE LALLE/A",
              "voters": 110
            }
          ],
          "NGONGOL": [
            {
              "station": "ECOLE PUBLIQUE DE NGONGOL/A",
              "voters": 313
            }
          ],
          "KALLONG, KALLONG": [
            {
              "station": "E.P DE KALLONG/A",
              "voters": 209
            }
          ],
          "DII, DII": [
            {
              "station": "E.P DE DII/A",
              "voters": 138
            }
          ]
        },
        "MAKENENE": {
          "KINDING NDE": [
            {
              "station": "FOYER KINDING NDE /A",
              "voters": 349
            },
            {
              "station": "FOYER KINDING NDE/B",
              "voters": 125
            }
          ],
          "KINDING NDJABI": [
            {
              "station": "ECOLE PUBLIQUE DE KINDING NDJABI /A",
              "voters": 238
            },
            {
              "station": "ECOLE PUBLIQUE DE KINDING NDJABI/B",
              "voters": 49
            },
            {
              "station": "FOYER KINDING NDJABI A/A",
              "voters": 95
            }
          ],
          "MAKENENE CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE MAKENENE CENTRE/A",
              "voters": 310
            },
            {
              "station": "ECOLE PUBLIQUE DE MAKENENE CENTRE/B",
              "voters": 269
            },
            {
              "station": "ECOLE PUBLIQUE DE MAKENENE CENTRE/C",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE DE MAKENENE CENTRE/D",
              "voters": 160
            }
          ],
          "MAKENENENE EST": [
            {
              "station": "GIC PROMAK MAKENENE EST/A",
              "voters": 334
            },
            {
              "station": "GIC PROMAK MAKENENE EST/B",
              "voters": 323
            },
            {
              "station": "GIC PROMAK MAKENENE EST/C",
              "voters": 66
            }
          ],
          "MAKENENE EST, MAKENENENE EST": [
            {
              "station": "ECOLE ST JOSEPH/A",
              "voters": 328
            },
            {
              "station": "ECOLE ST JOSEPH/B",
              "voters": 345
            },
            {
              "station": "ECOLE ST JOSEPH/C",
              "voters": 232
            },
            {
              "station": "C.P. BILINGUE LES CHAMPIONS/A",
              "voters": 217
            },
            {
              "station": "C.P. BILINGUE LES CHAMPIONS/B",
              "voters": 201
            }
          ],
          "MAKENENENE EST, MOСK CENTRE, MOCK CENTRE": [
            {
              "station": "FOYER MOCK CENTRE 1/A",
              "voters": 262
            }
          ],
          "MOCK CENTRE": [
            {
              "station": "FOYER KONGOLONG/A",
              "voters": 364
            }
          ],
          "MOCK SUD, MOCK SUD": [
            {
              "station": "SALLE PETIT VILLAGE/A",
              "voters": 327
            }
          ],
          "NGOKOP": [
            {
              "station": "FOYER NGOKOPIA",
              "voters": 380
            },
            {
              "station": "FOYER NGOKOP/B",
              "voters": 183
            }
          ],
          "NGOKOР": [
            {
              "station": "FOYER DITCHA/A",
              "voters": 235
            }
          ],
          "NYINGO": [
            {
              "station": "ECOLE PUBLIQUE DE NYINGO/A",
              "voters": 59
            }
          ],
          "NYOKONI-ABANN, NYOKONII-ANDOUMALOUNG, NYOKONIII-HOUNG, NYOKONIV-POUAН": [
            {
              "station": "ECOLE PUBLIQUE DE NYOKON/A",
              "voters": 278
            }
          ],
          "NYOKONI-ABANN, NYOKONII- ANDOUMALOUNG, NYOKONIII-HOUNG, NYOKONIV-POUAH": [
            {
              "station": "ECOLE PUBLIQUE DE NYOKON/B",
              "voters": 265
            }
          ],
          "NYOKONI-ABANN, NYOKONII-ANDOUMALOUNG, NYOKONIII- HOUNG, NYOKONIV-POUAH": [
            {
              "station": "ECOLE PUBLIQUE DE NYOKON/C",
              "voters": 190
            }
          ],
          "QUARTIER BARRIERE": [
            {
              "station": "FOYER BARRIERE/A",
              "voters": 350
            },
            {
              "station": "FOYER BARRIERE/B",
              "voters": 90
            }
          ],
          "QUARTIER BARRIERE, QUARTIER CARRIERE": [
            {
              "station": "SERVICE DELEGATION DE L'ELEVAGE/A",
              "voters": 121
            }
          ],
          "QUARTIER CARRIERE": [
            {
              "station": "FOYER CARRIERE/A",
              "voters": 301
            },
            {
              "station": "FOYER CARRIERE/B",
              "voters": 203
            }
          ],
          "QUARTIER HOPITAL": [
            {
              "station": "FOYER JEUNESSE HOPITAL/A",
              "voters": 354
            },
            {
              "station": "HOPITAL/A",
              "voters": 355
            }
          ],
          "TOWN WATER": [
            {
              "station": "ECOLE СЕВЕС /A",
              "voters": 290
            }
          ],
          "KINDING NDJABI, MOCK CENTRE, MOCK CENTRE": [
            {
              "station": "E.P BILINGUE DE BALOUA/A",
              "voters": 122
            }
          ],
          "MAKENENE EST": [
            {
              "station": "ECOLE SAINT JOSEPH/A",
              "voters": 64
            },
            {
              "station": "MOUSSA CITY A/A",
              "voters": 49
            }
          ],
          "MOCK SUD": [
            {
              "station": "E.P DE MOCK SUD/A",
              "voters": 113
            }
          ],
          "CARRIERE": [
            {
              "station": "FOYER BABITCHOUA A/A",
              "voters": 64
            }
          ]
        },
        "NDIKINIMEKI": {
          "BAKONGO HAUT": [
            {
              "station": "HANGAR MARCHE BAKONGO/A",
              "voters": 80
            }
          ],
          "BOUTOUROU": [
            {
              "station": "ECOLE PUBLIQUE BOUTOUROU/AА",
              "voters": 101
            }
          ],
          "CENTRE ADMINISTRATIF": [
            {
              "station": "TRIBUNAL/A",
              "voters": 185
            },
            {
              "station": "FOYER MUNICIPAL/A",
              "voters": 149
            },
            {
              "station": "BOUKAROU DERRIERE SOUS- PREFECTURE/ A",
              "voters": 252
            },
            {
              "station": "FOYER BAMILEKE/A",
              "voters": 274
            }
          ],
          "ENDON": [
            {
              "station": "CASE COMMUNAUTAIRE ENDON/A",
              "voters": 256
            }
          ],
          "ETOUNDOU I": [
            {
              "station": "CASE COMMUNAUTAIRE ETOUNDOU1/A",
              "voters": 149
            }
          ],
          "ETOUNDOU II": [
            {
              "station": "MISSSION CATHOL SOMO/A",
              "voters": 377
            },
            {
              "station": "MISSSION CATHOL SOMO/B",
              "voters": 98
            }
          ],
          "ETOUNDOU III": [
            {
              "station": "ECOLE PUBLIQUE ETOUNDOU 3/A",
              "voters": 144
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE CEBEC VILLE/A",
              "voters": 379
            },
            {
              "station": "ECOLE CEBEC VILLE /B",
              "voters": 176
            }
          ],
          "MAFE": [
            {
              "station": "EGLISE UEBC MAFE/A",
              "voters": 361
            }
          ],
          "NDIKITIEK": [
            {
              "station": "CHAPELLE CATHOL NDIKITIEK/A",
              "voters": 200
            }
          ],
          "NDIKI-VILLAGE, NDIKITOLE": [
            {
              "station": "CHAPELLE MISSSION CATHOL NDIKITOLE/A",
              "voters": 172
            }
          ],
          "HAOUSSA, NDIKI-VILLAGE": [
            {
              "station": "ECOLE CEBEC NDIKI-VILLAGE/A",
              "voters": 282
            }
          ],
          "NDIKI-VILLAGE": [
            {
              "station": "EGLISE UEBC NDIKI BEREKIA/A",
              "voters": 327
            },
            {
              "station": "CHAPELLE MISSION CATH. ONDJACK/A",
              "voters": 153
            }
          ],
          "NDIKOTI": [
            {
              "station": "ECOLE PUBLQUE NDIKOTI/A",
              "voters": 236
            }
          ],
          "NDEKALEND": [
            {
              "station": "ECOLE PUBLQUE NDEKALEND/A",
              "voters": 217
            }
          ],
          "NDEMA-AVIATION": [
            {
              "station": "EGLISE UEBC BOUGNOMONG/A",
              "voters": 113
            }
          ],
          "NDOKOBAGNA": [
            {
              "station": "FOYER NDOKOBAGNA/A",
              "voters": 65
            },
            {
              "station": "MISSION CATHOLIQUE ELOND /A",
              "voters": 123
            }
          ],
          "NDOKOBASSABEN": [
            {
              "station": "EGLISE UEBC NDOKOBASSABEN/A",
              "voters": 73
            },
            {
              "station": "ECOLE CEBEC NDOKONABAНО /А",
              "voters": 306
            }
          ],
          "NDOKOBOU": [
            {
              "station": "CASE COMMUNAUTAIRE NDOKOBOU/A",
              "voters": 42
            }
          ],
          "NDOKOHОК": [
            {
              "station": "ECOLE PUBLQUE NDOKOHOK VILLAGE/A",
              "voters": 242
            }
          ],
          "NDOKOНОК": [
            {
              "station": "FOYER NDOKOHOK NEW BELL/A",
              "voters": 334
            }
          ],
          "NDOKOHОK": [
            {
              "station": "FOYER NDOKOHOK NEW BELL/B",
              "voters": 252
            }
          ],
          "NDOKON": [
            {
              "station": "EGLISE UEBC NDOKON/A",
              "voters": 20
            }
          ],
          "NDOKONONOHО": [
            {
              "station": "MISSSION CATHOL BILINDI/A",
              "voters": 96
            }
          ],
          "NDOKONONOHO": [
            {
              "station": "MISSSION CATHOL BWANGA/A",
              "voters": 74
            }
          ],
          "NDOKSOMB": [
            {
              "station": "CASE COMMUNAUTAIRE NDOKSOMB/A",
              "voters": 114
            }
          ],
          "NDOKOWANEN": [
            {
              "station": "ECOLE PUBLQUE NDOKOWANEN/A",
              "voters": 115
            }
          ],
          "NEBOLEN": [
            {
              "station": "MISSSION CATHOL NEBOLEN/A",
              "voters": 218
            }
          ],
          "NEFANTЕ": [
            {
              "station": "ECOLE PUBLIQUE NEFANTE/A",
              "voters": 161
            }
          ],
          "NOMALE": [
            {
              "station": "CASE COMMUNAUTAIRE NOMALE/A",
              "voters": 110
            }
          ],
          "NOMENA": [
            {
              "station": "CASE COMMUNAUTAIRE NOMENA/A",
              "voters": 81
            }
          ],
          "NIOYE": [
            {
              "station": "ECOLE PUBLIQUE GPE 1/A",
              "voters": 244
            }
          ],
          "SOUAMЕ": [
            {
              "station": "ECOLE PUBLIQUE GPE /A",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE GPE II/B",
              "voters": 100
            }
          ],
          "NDOKOBASSAYE, NDOKOНОК": [
            {
              "station": "CASE COMM. NDOKOBASSAYE/A",
              "voters": 265
            }
          ]
        },
        "NITOUKOU": {
          "EKONDJ": [
            {
              "station": "CASE CHAPELLLE CATHOLIQUE DE NIKOUNG IA",
              "voters": 138
            },
            {
              "station": "ECOLE PUBLIQUE DE MAFOUTH/A",
              "voters": 215
            },
            {
              "station": "ECOLE CЕВЕС ІНOUK / A",
              "voters": 86
            },
            {
              "station": "ECOLE MATERNELLE NEBALONGMAK/A",
              "voters": 89
            }
          ],
          "ETONG": [
            {
              "station": "ECOLE PUBLIQUE D'ETONG/A",
              "voters": 166
            }
          ],
          "NDEKEYAP": [
            {
              "station": "CASE CHAPELLE CEBEC NDEKEYAP/A",
              "voters": 60
            },
            {
              "station": "ECOLE PUBLIQUE DE NDEKEYAP/A",
              "voters": 76
            }
          ],
          "EKONDJ, NDOUGBISSOUNG": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE DE NEMAYAKA/A",
              "voters": 175
            }
          ],
          "NDOUGBISSOUNG": [
            {
              "station": "ECOLE PUBLIQUE NDOUGBISSOUNG/A",
              "voters": 102
            }
          ],
          "NEBASSEL": [
            {
              "station": "ECOLE CATHOLIQUE DE NEBASSEL/A",
              "voters": 84
            },
            {
              "station": "CASE CHAPELLE UEBC EKONDJ/A",
              "voters": 60
            }
          ],
          "NEBOYA": [
            {
              "station": "ECOLE PUBLIQUE NEBOYA/A",
              "voters": 161
            },
            {
              "station": "ECOLE CEBEC DE NEBOYA/A",
              "voters": 135
            }
          ],
          "NEKOM 1": [
            {
              "station": "ECOLE PUBLIQUE DE NEKOM 1/A",
              "voters": 78
            }
          ],
          "NEKOM 2": [
            {
              "station": "CASE CHAPELLE CATHOLIQUE DE NEKOM 2/ A",
              "voters": 61
            }
          ],
          "NGOBO": [
            {
              "station": "CASE CHAPELLE CEBEC DE NGOBO/A",
              "voters": 81
            }
          ],
          "NITOUKOU CENTRE": [
            {
              "station": "NITOUKOU ECOLE PUBLIQUE/А",
              "voters": 93
            },
            {
              "station": "FOYER MUNICIPAL NITOUKOU/A",
              "voters": 159
            },
            {
              "station": "LYCEE DE NITOUKOU/A",
              "voters": 250
            },
            {
              "station": "POSTE AGRICOLE DE NEBATOUM/A",
              "voters": 93
            }
          ],
          "ETOUNG-ILOBI, ILOBI": [
            {
              "station": "ECOLE MATERNELLE ETONG-ILOBI A/A",
              "voters": 65
            }
          ],
          "NDEMA": [
            {
              "station": "ECOLE PUBLIQUE NDEMA A/A",
              "voters": 86
            }
          ],
          "EKONDJ, NDOKSONDEN": [
            {
              "station": "CES NDOKSONDEN A/A",
              "voters": 73
            }
          ],
          "NDIKIBIL": [
            {
              "station": "ECOLE MATERNELLE NDIKIBILE/A",
              "voters": 107
            }
          ]
        },
        "OMBESSA": {
          "BALIAMА": [
            {
              "station": "HANGAR CARREFOUR KASSA/A",
              "voters": 327
            }
          ],
          "BOGONDO": [
            {
              "station": "MAGASIN MIDO BOYABIEDI/A",
              "voters": 179
            },
            {
              "station": "CHAPELLE CATHOLIQUE BOGONDO/A",
              "voters": 356
            },
            {
              "station": "ECOLE PUBLIQUE DE BOGONDO /A",
              "voters": 210
            }
          ],
          "BOURAKА": [
            {
              "station": "ECOLE PUBLIQUE DE BOYAMBESSE /A",
              "voters": 231
            },
            {
              "station": "HANGAR CARREFOUR MARCHE BOURAKA/A",
              "voters": 386
            },
            {
              "station": "HANGAR CARREFOUR MARCHE BOURAKA/B",
              "voters": 92
            },
            {
              "station": "ECOLE PUBLIQUE DE BOURAKA/A",
              "voters": 387
            },
            {
              "station": "CHAPELLE PLEIN EVANGILE DE BAKOA-BOURAKA/A",
              "voters": 214
            }
          ],
          "BOURAКА": [
            {
              "station": "CENTRE COOPERATIF OSSOGO MELIME/A",
              "voters": 115
            }
          ],
          "BOYABA PARIS": [
            {
              "station": "ECOLE PUBLIQUE DE BOYABA PARIS/A",
              "voters": 284
            }
          ],
          "BOYABISSOUMВІ": [
            {
              "station": "CENTRE COOPERATIF DE BOYABISSOUMBI/ A",
              "voters": 309
            },
            {
              "station": "FOYER CULTUREL ONDOA NKOANA DE GUIANFOCK/A",
              "voters": 65
            }
          ],
          "BOYABISSOUMBI": [
            {
              "station": "CENTRE COOPERATIF DE BOYABISSOUMBI/ B",
              "voters": 70
            },
            {
              "station": "CHAPELLE PROTESTANTE DE BOYABEGUE/ A",
              "voters": 110
            },
            {
              "station": "ESPL. CARREF. BIGUINDE-BOYABISSOUMBI/ A",
              "voters": 148
            }
          ],
          "ESSENDE": [
            {
              "station": "ECOLE PUBLIQUE D'ESSENDE/A",
              "voters": 280
            },
            {
              "station": "CHAPELLE CATHOLIQUE D'EGUIDE/A",
              "voters": 135
            },
            {
              "station": "ECOLE CATHOLIQUE D'ESSENDE/A",
              "voters": 298
            }
          ],
          "ESSENDЕ": [
            {
              "station": "ECOLE MATERNELLE WASSE 1/A",
              "voters": 243
            }
          ],
          "ESSENDЕ, GUIENTSING 1": [
            {
              "station": "CHAPELLE CATHOLIQUE DE BOYAGNANO/A",
              "voters": 256
            }
          ],
          "GUIENTSING": [
            {
              "station": "CHAPELLE CATHOLIQUE D'OSSIMBI/A",
              "voters": 162
            }
          ],
          "GUIENTSING 1": [
            {
              "station": "ECOLE PUBLIQUE DE BOYADEDE /A",
              "voters": 168
            },
            {
              "station": "ECOLE PUBLIQUE DE GUIENTSING 1/A",
              "voters": 176
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE BOYABONDOA/ A",
              "voters": 228
            },
            {
              "station": "ECOLE PUBLIQUE DE WASSE/A",
              "voters": 218
            }
          ],
          "GUIENTSING 1, GUIENTSING 2": [
            {
              "station": "ECOLE PUBLIQUE DE BOYABOGO/A",
              "voters": 224
            }
          ],
          "GUIENTSING 2": [
            {
              "station": "CHAPELLE CATHOLIQUE DE BOUYOUMENOU IA",
              "voters": 166
            },
            {
              "station": "FOYER GUIENTSING 2/A",
              "voters": 189
            },
            {
              "station": "CHAPELLE EPC DE MAYEGALA/A",
              "voters": 186
            },
            {
              "station": "CASE CHAPELLE CATHOLIQUE EGAGA/A",
              "voters": 135
            }
          ],
          "NINGOANG": [
            {
              "station": "ECOLE PUBLIQUE DE NINGOANG/A",
              "voters": 289
            },
            {
              "station": "PARC DES PRINCES-BOYANGOULOUGUE 2/ A",
              "voters": 109
            }
          ],
          "OMBESSA BLOC URBAIN": [
            {
              "station": "FOYER MUNICIPAL/A",
              "voters": 255
            },
            {
              "station": "FOYER MUNICIPAL/B",
              "voters": 230
            },
            {
              "station": "DELEGATION D'ARROND. D'AGRICULTURE/A",
              "voters": 345
            },
            {
              "station": "MAISON DES HANDICAPES/A",
              "voters": 286
            },
            {
              "station": "MAISON DES HANDICAPES/B",
              "voters": 194
            },
            {
              "station": "HALL AGENCE AMIGO D'OMBESSA/A",
              "voters": 333
            },
            {
              "station": "HALL AGENCE AMIGO D'OMBESSA/B",
              "voters": 197
            },
            {
              "station": "HALL AGENCE AMIGO D'OMBESSA/C",
              "voters": 220
            },
            {
              "station": "LYCEE GENERAL D'OMBESSA/A",
              "voters": 322
            },
            {
              "station": "LYCEE GENERAL D'OMBESSA/B",
              "voters": 176
            }
          ],
          "OMBESSA VILLAGE": [
            {
              "station": "ECOLE PRIVEE LAIQUE/A",
              "voters": 337
            },
            {
              "station": "ESPLANADE CHEFFERIE BIGUINDE-OMBESSA TA",
              "voters": 247
            },
            {
              "station": "CEAC DE BOMBANG/A",
              "voters": 104
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE HIOLA/A",
              "voters": 242
            },
            {
              "station": "PMI DE GUESSOGO/A",
              "voters": 270
            },
            {
              "station": "ESPLANADE CHEFFERIE DE GUESSOGO/A",
              "voters": 226
            },
            {
              "station": "ECOLE PUBLIQUE D'ELOA/A",
              "voters": 144
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE GUESSOGO/ A",
              "voters": 155
            }
          ],
          "BOURAКА, BOYAMAGAGNE": [
            {
              "station": "E.P DE BOYAMAGAGNE/A",
              "voters": 223
            }
          ],
          "MASSANGNO": [
            {
              "station": "ESPLANADE CARREFOUR MASSANGNO/A",
              "voters": 103
            }
          ],
          "BLOC URBAIN": [
            {
              "station": "ECOLE DE LA MISSION CATHOLIQUE OMBESSA/A",
              "voters": 189
            }
          ]
        }
      },
      "MBAM-ET-KIM": {
        "MBANGASSINA": {
          "BADISSA": [
            {
              "station": "CASE COMMUNAUTAIRE DE BADISSA/A",
              "voters": 293
            }
          ],
          "BANTA": [
            {
              "station": "ECOLE PUBLIQUE DE BANTA/A",
              "voters": 250
            },
            {
              "station": "ECOLE PUBLIQUE DE BANTA/B",
              "voters": 89
            },
            {
              "station": "CHAPELLE DE BANTA PALMERAIE/A",
              "voters": 96
            }
          ],
          "BIAKOA CENTRE, BIAKOA SCIERIE": [
            {
              "station": "ECOLE PUBLIQUE DE BIAKOA/A",
              "voters": 323
            },
            {
              "station": "ECOLE PUBLIQUE DE BIAKOA/B",
              "voters": 269
            },
            {
              "station": "ECOLE PUBLIQUE DE BIAKOA/C",
              "voters": 285
            }
          ],
          "BIAKOA FERME": [
            {
              "station": "ECOLE PUBLIQUE DE BIAKOA FERME/A",
              "voters": 98
            }
          ],
          "BIAKOA VILLAGE": [
            {
              "station": "SALLE EPC DE BIAKOA VILLAGE/A",
              "voters": 187
            }
          ],
          "BIALANGUENA": [
            {
              "station": "ECOLE PUBLIQUE DE BIALANGUENA/A",
              "voters": 336
            }
          ],
          "BIAPONGO": [
            {
              "station": "ECOLE ADVENTISTE DE BIAPONGO/A",
              "voters": 150
            }
          ],
          "BIATANGANA I": [
            {
              "station": "CASE A PALABRE DE BIATANGANAI/A",
              "voters": 349
            },
            {
              "station": "CASE A PALABRE DE BIATANGANAI/B",
              "voters": 41
            }
          ],
          "BIATANGANA II, BOKE": [
            {
              "station": "ECOLE PUBLIQUE DE BIATANGANA II/A",
              "voters": 269
            }
          ],
          "BIATOMВО, NYAMBALLA RURAL": [
            {
              "station": "ECOLE PUBLIQUE DE BIATOMBO/A",
              "voters": 216
            },
            {
              "station": "MAGASIN COMMUNAUTAIRE DE NYAMBALA RURAL/A",
              "voters": 95
            }
          ],
          "BILOMO": [
            {
              "station": "ECOLE MATERNELLE OKALA/A",
              "voters": 222
            }
          ],
          "BINDAMONGO": [
            {
              "station": "ECOLE PUBLIQUE DE BIDAMONGO/A",
              "voters": 93
            }
          ],
          "BADISSA, BITORNO": [
            {
              "station": "ECOLE PUBLIQUE DE BITORNO/A",
              "voters": 148
            }
          ],
          "BOURA I": [
            {
              "station": "ECOLE PUBLIQUE DE BOURA/A",
              "voters": 146
            }
          ],
          "BOURA II": [
            {
              "station": "CASE DE SANTE DE BOURA II/A",
              "voters": 53
            }
          ],
          "CAMP TONDJI": [
            {
              "station": "ECOLE BILINGUE DE TONDJI/A",
              "voters": 86
            }
          ],
          "DJIM": [
            {
              "station": "ECOLE PUBLIQUE DE DJIM/A",
              "voters": 93
            }
          ],
          "EBINA": [
            {
              "station": "ECOLE PUBLIQUE D'EBINA/A",
              "voters": 285
            }
          ],
          "BIYENGUENO, ENANGANA SUD": [
            {
              "station": "ECOLE PUBLIQUE D'ENANNGANA SUD/A",
              "voters": 224
            }
          ],
          "ENDINGUILI I": [
            {
              "station": "ECOLE PUBLIQUE D'EDINGUILIT/A",
              "voters": 318
            },
            {
              "station": "CASE A PALABRE D'EDINGUILI III/A",
              "voters": 23
            }
          ],
          "ENDINGUILI II": [
            {
              "station": "CASE A PALABRE D'EDINGUILI II/AА",
              "voters": 28
            }
          ],
          "ETAM-NYAT": [
            {
              "station": "CASE COMMUNAUTAIRE D'ETAM-NYAT/A",
              "voters": 214
            }
          ],
          "GOULOULOU": [
            {
              "station": "CASE A PALABRE DE GOULOULOU/A",
              "voters": 31
            }
          ],
          "GOURA": [
            {
              "station": "ECOLE PUBLIQUE DE GOURA/A",
              "voters": 338
            },
            {
              "station": "ECOLE PUBLIQUE DE GOURA/B",
              "voters": 187
            }
          ],
          "GOURA I": [
            {
              "station": "MAGASIN YOMBO DE GOURA II/A",
              "voters": 82
            }
          ],
          "IYAMBOUNI": [
            {
              "station": "ECOLE PUBLIQUE D'IYAMBOUNI/A",
              "voters": 326
            }
          ],
          "KOBA": [
            {
              "station": "HANGAR DU MARCHE DE KОВА/А",
              "voters": 116
            }
          ],
          "MBANGASSINA I, MBANGASSINA II": [
            {
              "station": "ECOLE PUBLIQUE DE MBANGASSINA/A",
              "voters": 284
            }
          ],
          "MBANGASSINA I, MBANGASSINA II, MBANGASSINA IV": [
            {
              "station": "ECOLE CATHOLIQUE DE MBANGASSINA/A",
              "voters": 338
            },
            {
              "station": "ECOLE CATHOLIQUE DE MBANGASSINA/C",
              "voters": 250
            },
            {
              "station": "ECOLE CATHOLIQUE DE MBANGASSINA/D",
              "voters": 321
            }
          ],
          "MBANGASSINA II": [
            {
              "station": "CENTRE MEDICAL D'ARR.DE MBANGASSINA/ A",
              "voters": 265
            }
          ],
          "MONT -TAMA I": [
            {
              "station": "ECOLE PULIQUE DE MONT - TAMA I/A",
              "voters": 274
            }
          ],
          "MONT- TAMA II": [
            {
              "station": "ECOLE PUBLIQUE DE MONT - TAMA II/A",
              "voters": 97
            }
          ],
          "MPII": [
            {
              "station": "ECOLE PUBLIQUE DE MPII/A",
              "voters": 321
            }
          ],
          "MPI II": [
            {
              "station": "CASE COMMUNAUTAIRE DE MPI II/A",
              "voters": 96
            }
          ],
          "MVOUNG - TSOUH": [
            {
              "station": "CASE A PALABRE DE MVOUNG-TSOUH/A",
              "voters": 45
            }
          ],
          "NGOKE, NGOKE II": [
            {
              "station": "CASE A PALABRE DE NGOKE I/A",
              "voters": 367
            }
          ],
          "NGOKE I, NGOKE II": [
            {
              "station": "CASE A PALABRE DE NGOKE I/B",
              "voters": 119
            }
          ],
          "NGOKE I-SAVANE, NGOKE I": [
            {
              "station": "CASE A PALABRE DE NGOKE I-SAVANE/A",
              "voters": 47
            }
          ],
          "NGOKE II": [
            {
              "station": "ECOLE PUBLIQUE DE NGOKE II/A",
              "voters": 245
            }
          ],
          "NKOLMESSENG": [
            {
              "station": "CASE A PALABRE DE NKOLMESSENG/A",
              "voters": 34
            }
          ],
          "NYAMANGA II, NYAMANGA II CHAPELLE": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NYAMANGA II /A",
              "voters": 87
            }
          ],
          "NYAMANGA II": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMANGA II/A",
              "voters": 219
            },
            {
              "station": "ECOLE PUBLIQUE DE NYAMANGA II/ B",
              "voters": 202
            }
          ],
          "NYAMBALLA URBAIN": [
            {
              "station": "CASE A PALABRE DE NYAMBALLA URBAIN/A",
              "voters": 213
            }
          ],
          "MBANGASSINA I, SANA - MЕТЕН": [
            {
              "station": "ECOLE PUBLIQUE DE MEТЕН/А",
              "voters": 154
            }
          ],
          "TALBA": [
            {
              "station": "ECOLE PUBLIQUE DE TALBA/A",
              "voters": 305
            },
            {
              "station": "ECOLE PUBLIQUE DE TALBA/B",
              "voters": 280
            },
            {
              "station": "ECOLE PUBLIQUE DE TALBA/C",
              "voters": 328
            },
            {
              "station": "ECOLE PUBLIQUE DE TALBA/D",
              "voters": 201
            }
          ],
          "TCHAMONGO I": [
            {
              "station": "CASE A PALABRE DE TCHAMONGOI/A",
              "voters": 62
            }
          ],
          "TCHAMONGO II": [
            {
              "station": "ECOLE PUBLIQUE DE TCHAMONGO II/ A",
              "voters": 277
            }
          ],
          "TCHAMONGO III": [
            {
              "station": "ECOLE PUBLIQUE DE NIKI/A",
              "voters": 105
            }
          ],
          "TEATE": [
            {
              "station": "ECOLE PUBLIQUE DE TEATE/A",
              "voters": 318
            }
          ],
          "VILLAGE DE LA PAIX": [
            {
              "station": "ECOLE PUBLIQUE DE VILLAGE DE LA PAIX/A",
              "voters": 54
            }
          ],
          "VOUNDOU": [
            {
              "station": "ECOLE PUBLIQUE DE VOUNDOU /A",
              "voters": 358
            },
            {
              "station": "ECOLE PUBLIQUE DE VOUNDOU/B",
              "voters": 343
            },
            {
              "station": "ECOLE PUBLIQUE DE VOUNDOU/C",
              "voters": 255
            }
          ],
          "YANGA": [
            {
              "station": "CASE A PALABRE DE YANGA/A",
              "voters": 141
            }
          ],
          "YEBEKOLO ESSERE": [
            {
              "station": "CASE COMMUNAUTAIRE D'ESSERE/A",
              "voters": 53
            }
          ],
          "YEBEKOLO -ETOA, YEBEKOLO I": [
            {
              "station": "ECOLE PUBLIQUE DE YEBEKOLO/A",
              "voters": 130
            }
          ],
          "YEBEKOLO II": [
            {
              "station": "CES DE YEBEKOLO/A",
              "voters": 95
            }
          ],
          "BIYENGONO, BIYENGUENO": [
            {
              "station": "E.P D'ENANGANA NORD/A",
              "voters": 200
            }
          ],
          "BIAHONGA PANDA MBALLA, BIAHONGO, PANDA MBALLA, YEBEKOLO I": [
            {
              "station": "E.P DE PANDA MBALLA/A",
              "voters": 261
            }
          ]
        },
        "NGAMBE-TIKAR": {
          "BARIKI": [
            {
              "station": "ECOLE PUBLIQUE DE BARIKI/A",
              "voters": 172
            }
          ],
          "BENG-BENG": [
            {
              "station": "ECOLE PUBLIQUE DE BENG BENG/A",
              "voters": 328
            }
          ],
          "GAH": [
            {
              "station": "ECOLE PUBLIQUE DE GAH/A",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE DE GAH/B",
              "voters": 306
            }
          ],
          "INA": [
            {
              "station": "ECOLE PUBLIQUE DE INA/A",
              "voters": 102
            }
          ],
          "KONG": [
            {
              "station": "ECOLE PUBLIQUE DE KONG/A",
              "voters": 333
            },
            {
              "station": "ECOLE PUBLIQUE DE KONG/B",
              "voters": 232
            }
          ],
          "KOUENG": [
            {
              "station": "ECOLE PUBLIQUE DE KOUENG/A",
              "voters": 239
            }
          ],
          "KPAGA": [
            {
              "station": "CASE A PALABRE DE KPAGA/A",
              "voters": 64
            }
          ],
          "LONWE": [
            {
              "station": "ECOLE PUBLIQUE DE LONWE/A",
              "voters": 332
            }
          ],
          "MAMBI": [
            {
              "station": "ESPLANADE CHEFFERIE DE MAMBI/A",
              "voters": 133
            }
          ],
          "MAMBIОКО": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBIOKO/A",
              "voters": 218
            }
          ],
          "MANDJA I": [
            {
              "station": "CASE A P1ALABRE DE LA CHEFFERIE/A",
              "voters": 97
            }
          ],
          "MANGBLANG": [
            {
              "station": "ECOLE PUBLIQUE DE MANGBLANG/A",
              "voters": 198
            }
          ],
          "MANSOLET": [
            {
              "station": "ECOLE PUBLIQUE DE MANSOLET/A",
              "voters": 256
            }
          ],
          "MANSOUH": [
            {
              "station": "ECOLE PUBLIQUE DE MANSOUH/A",
              "voters": 167
            }
          ],
          "MANSOH": [
            {
              "station": "ESPLANADE CHEFFERIE DE MANSOH/A",
              "voters": 105
            }
          ],
          "MBAMLAI, MBAMLA II": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMLA I ET II/A",
              "voters": 198
            }
          ],
          "MBIOKO": [
            {
              "station": "ECOLE PUBLIQUE DE MBIOKО/A",
              "voters": 173
            }
          ],
          "MBIOKO II": [
            {
              "station": "CASE CHAPELLE DE MBIOKO II/A",
              "voters": 272
            }
          ],
          "MGBAH": [
            {
              "station": "ECOLE PUBLIQUE DE MGBAН/А",
              "voters": 25
            }
          ],
          "MGBOUTOU": [
            {
              "station": "ECOLE PUBLIQUE DE MGBOUTOU/A",
              "voters": 157
            }
          ],
          "MIMBE": [
            {
              "station": "ECOLE PUBLIQUE DE MIMBE/A",
              "voters": 48
            }
          ],
          "NDITAM": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE NDITAM/A",
              "voters": 410
            },
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE NDITAM/B",
              "voters": 76
            }
          ],
          "NDJINGA": [
            {
              "station": "ECOLE PUBLIQUE DE NDJINGA/A",
              "voters": 81
            }
          ],
          "NDJONKOU": [
            {
              "station": "CASE A LA PALABRE DE LA CHEFFERIE/A",
              "voters": 187
            }
          ],
          "NDUN": [
            {
              "station": "ECOLE PUBLIQUE DE NDUN/A",
              "voters": 176
            }
          ],
          "NGAM": [
            {
              "station": "ECOLE PUBLIQUE DE NGAM/A",
              "voters": 85
            }
          ],
          "NGAMBE HAOUSSA": [
            {
              "station": "ESPLANADE CHEFFERIE NGAMBE HAOUSSA/ A",
              "voters": 312
            }
          ],
          "NGAMBE - TIKAR URBAIN": [
            {
              "station": "ECOLE CATH. STE THERESE DE NGAMBE TIKAR/A",
              "voters": 305
            },
            {
              "station": "FOYER CHEFFERIE DE GROUPEMENT/A",
              "voters": 231
            },
            {
              "station": "FOYER CHEFFERIE DE GROUPEMENT/B",
              "voters": 242
            },
            {
              "station": "LYCEE BILINGUE DE NGAMBE-TIKAR/B",
              "voters": 251
            }
          ],
          "KPAGA, NGAMBE - TIKAR URBAIN": [
            {
              "station": "ECOLE PUBLIQUE DE NGAMBE - TIKAR/A",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE DE NGAMBE - TIKAR/B",
              "voters": 170
            },
            {
              "station": "ECOLE PUBLIQUE DE NGAMBE - TIKAR/C",
              "voters": 5
            }
          ],
          "NGANDIE": [
            {
              "station": "ECOLE PUBLIQUE DE NGANDIE/A",
              "voters": 235
            }
          ],
          "NGOUME": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUME/A",
              "voters": 217
            }
          ],
          "NGOUNDJE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGOUNDJE/A",
              "voters": 83
            }
          ],
          "OUE": [
            {
              "station": "ECOLE PUBLIQUE DE OUE/A",
              "voters": 237
            }
          ],
          "WOURO HARDO": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO HARDO/A",
              "voters": 123
            }
          ],
          "YAH, YINDI": [
            {
              "station": "ECOLE PUBLIQUE DE YAH - YINDI/A",
              "voters": 407
            }
          ],
          "MBAMLAI": [
            {
              "station": "CASE CHAPELLE MBAMLAI/A",
              "voters": 145
            },
            {
              "station": "ECOLE DES PARENTS DU QUARTIER MAMBILA DE MBAMLA I/A",
              "voters": 59
            }
          ],
          "MENZOWE": [
            {
              "station": "CASE A PALABRE DE MENZOWE /A",
              "voters": 101
            }
          ],
          "NJEMBE": [
            {
              "station": "CASE A PALABRE DE NJEMBE/A",
              "voters": 189
            }
          ],
          "NDAH": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDAH/A",
              "voters": 67
            }
          ],
          "QUARTIER MODIBO": [
            {
              "station": "ECOLE CORANIQUE DE MODIBO/A",
              "voters": 67
            }
          ],
          "NGAMBE-TIKAR URBAIN": [
            {
              "station": "LYCEE TECHNIQUE DE NGAMBE-TIKAR/A",
              "voters": 37
            },
            {
              "station": "LYCEE BILINGUE DE NGAMBE-TIKAR/A",
              "voters": 203
            }
          ],
          "NTAING": [
            {
              "station": "ECOLE DES PARENTS DE NTAING/A",
              "voters": 71
            }
          ],
          "MEKEING": [
            {
              "station": "MAGASIN DE STOCKAGE DE MEKEING/A",
              "voters": 49
            }
          ],
          "NGOUNG-MANGONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNG -MANGONG/ A",
              "voters": 46
            }
          ],
          "MENGBLENG": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGBLENG/A",
              "voters": 70
            }
          ],
          "KILANGOSSO": [
            {
              "station": "ESPLANADE CHEFFERIE DE KILANGOSSO/A",
              "voters": 36
            }
          ],
          "MOMKOING": [
            {
              "station": "ESPLANADE CHEFFERIE DE MOMKOING/A",
              "voters": 88
            }
          ],
          "KPANGOUE": [
            {
              "station": "HANGAR DU MARCHE DE KPANGOUE/A",
              "voters": 300
            },
            {
              "station": "HANGAR DU MARCHE DE KPANGOUE/B",
              "voters": 191
            },
            {
              "station": "HANGAR DU MARCHE DE KPANGOUE/C",
              "voters": 258
            }
          ]
        },
        "NGORO": {
          "ANGANDJIMBERETE": [
            {
              "station": "ECOLE PUBLIQUE DE ANGANDJIMBERETE/A",
              "voters": 305
            }
          ],
          "BANGARA": [
            {
              "station": "ECOLE PUBLIQUE DE BANGARA/А",
              "voters": 324
            },
            {
              "station": "ECOLE PUBLIQUE DE BANGARA/B",
              "voters": 61
            }
          ],
          "BANGARA, BANGARA II -TAMBE": [
            {
              "station": "CASE A PALABRE DE TAMBE/A",
              "voters": 205
            }
          ],
          "BANGARA, BANGARA II -TAMBЕ": [
            {
              "station": "CASE A PALABRE DE TAMBE/B",
              "voters": 180
            }
          ],
          "BERAKOUNDOU": [
            {
              "station": "CASE A PALABRE DE BERAKOUNDOU/A",
              "voters": 78
            }
          ],
          "EGONA I": [
            {
              "station": "ECOLE PUBLIQUE DE EGONA II/A",
              "voters": 401
            }
          ],
          "KANGA": [
            {
              "station": "ECOLE PUBLIQUE DE KANGA/A",
              "voters": 233
            }
          ],
          "KOMBE": [
            {
              "station": "CASE A PALABLE DE KOMBE/A",
              "voters": 140
            }
          ],
          "KOUNDJONGOU": [
            {
              "station": "CHAPELLE EPC KOUNDJONGOU/A",
              "voters": 52
            }
          ],
          "LABO": [
            {
              "station": "CASE SANTE DE LABO/A",
              "voters": 250
            }
          ],
          "LENGBA, NYAFIANGA": [
            {
              "station": "ECOLE PUBLIQUE NYAFIANGA/A",
              "voters": 126
            }
          ],
          "MASSASSA": [
            {
              "station": "CASE COMMUNAUTAIRE DE MASSASSA/A",
              "voters": 226
            }
          ],
          "MBENGUE": [
            {
              "station": "CHAPELLE EPC DE MBENGUE/A",
              "voters": 88
            }
          ],
          "MOUNGA": [
            {
              "station": "CHAPELLE EPC DE MONGA/A",
              "voters": 98
            }
          ],
          "NDJAMTSOUROUNG": [
            {
              "station": "CASE A PALABLE DE NDJAMTSOUROUNG/A",
              "voters": 56
            }
          ],
          "NGAMBА": [
            {
              "station": "CASE A PALABRE DE NGAMBA/A",
              "voters": 133
            }
          ],
          "NGORO URBAIN": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ANDRE DE NGORO/A",
              "voters": 345
            },
            {
              "station": "ECOLE CATHOLIQUE SAINT ANDRE DE NGORO/B",
              "voters": 175
            },
            {
              "station": "ECOLE MATERNELLE DE LA SCIERIE/A",
              "voters": 125
            },
            {
              "station": "LYCEE DE NGORO/A",
              "voters": 203
            },
            {
              "station": "ESPLANADE DE LA MOSQUEE DE NGORO/A",
              "voters": 140
            },
            {
              "station": "POSTE AGRICOLE DE NGORO/A",
              "voters": 364
            },
            {
              "station": "POSTE AGRICOLE DE NGORO/B",
              "voters": 98
            },
            {
              "station": "SALLE D'AUDIENCE DE NGORO /A",
              "voters": 396
            }
          ],
          "NGORONGUIMA": [
            {
              "station": "CHAPELLE EPC DE NGORONGUIMA/A",
              "voters": 279
            }
          ],
          "NYABIDI": [
            {
              "station": "ECOLE PUBLIQUE DE NYABIDI/A",
              "voters": 316
            }
          ],
          "NYAMOКО": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE NYAMOKO/ A",
              "voters": 202
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE NYAMOKO/ A",
              "voters": 175
            }
          ],
          "NYANDINGUI": [
            {
              "station": "ECOLE PUBLIQUE DE NYANDINGUI/A",
              "voters": 163
            }
          ],
          "NYANDJANGA": [
            {
              "station": "CASE A PALABRE DE NYANDJANGA/A",
              "voters": 335
            }
          ],
          "NYAMONGO II": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMONGO/A",
              "voters": 354
            },
            {
              "station": "ECOLE PUBLIQUE DE NYAMONGO/B",
              "voters": 187
            }
          ],
          "ONDOUANO": [
            {
              "station": "CHAPELLE EPC DE ONDOUANO/A",
              "voters": 128
            }
          ],
          "OSSOMBE": [
            {
              "station": "CASE A PALABRE DE OSSOMBE/A",
              "voters": 104
            }
          ],
          "SERERE": [
            {
              "station": "ECOLE PUBLIQUE DE SERERE/A",
              "voters": 249
            }
          ],
          "YANGAFOCK, YANGAFOK II": [
            {
              "station": "ECOLE PUBLIQUE DE YANGAFOCK/A",
              "voters": 274
            }
          ],
          "YANGBA": [
            {
              "station": "CASE COMMUNAUTAIRE DE YANGBA/A",
              "voters": 318
            },
            {
              "station": "CASE COMMUNAUTAIRE DE YANGBA/B",
              "voters": 204
            },
            {
              "station": "CASE A PALABRE DE LAYON/A",
              "voters": 62
            },
            {
              "station": "CASE A PALABRE DE SAN-NDI/A",
              "voters": 46
            },
            {
              "station": "HANGAR CHEFFERIE DE TOME/A",
              "voters": 25
            }
          ],
          "YANGAFOK II": [
            {
              "station": "CASE A PALABLE NYANGAFOK II/A",
              "voters": 277
            }
          ],
          "YASSEM": [
            {
              "station": "ECOLE MATERNELLE DE YASSEM/A",
              "voters": 373
            }
          ],
          "LENGBА": [
            {
              "station": "CASE A PALABRE LENGBA/A",
              "voters": 132
            }
          ],
          "BIWOLO": [
            {
              "station": "CASE A PALABRE DE BIWOLO/A",
              "voters": 106
            }
          ],
          "KOUNOUNGOU": [
            {
              "station": "CASE A PALABRE DE KOUNOUNGOU/A",
              "voters": 112
            }
          ],
          "AYOS": [
            {
              "station": "CASE A PALABRE D'AYOS/A",
              "voters": 185
            }
          ],
          "IGOUROUMA": [
            {
              "station": "CASE A PALABRE DE IGOUROUMA/A",
              "voters": 55
            }
          ],
          "POUPA": [
            {
              "station": "CASE A PALABRE DE POUPA/A",
              "voters": 114
            }
          ],
          "BANGARA, YANGBA": [
            {
              "station": "CASE A PALABRE DE KITIKIE/A",
              "voters": 45
            }
          ]
        },
        "NTUI": {
          "ARDODOUKA": [
            {
              "station": "CASE A PALABRE ARDODOUKA/A",
              "voters": 74
            }
          ],
          "ARDODOUKA, BETAMBА": [
            {
              "station": "HANGAR MARCHE BETAMBA/A",
              "voters": 408
            }
          ],
          "BIAGNIMI, BIAGNIMI": [
            {
              "station": "CASE CHAPELLE BIAGNIMI/A",
              "voters": 162
            }
          ],
          "BIAGNIMI": [
            {
              "station": "CASE A PALABRE OSSOMBO- ALIMA/A",
              "voters": 38
            }
          ],
          "BIANGUELE": [
            {
              "station": "ECOLE PUBLIQUE BIANGUELE/A",
              "voters": 148
            }
          ],
          "BIKONG": [
            {
              "station": "ECOLE PUBLIQUE BIKONG/A",
              "voters": 176
            }
          ],
          "BINDALIMA I": [
            {
              "station": "ESPLANADE NDENGUE ADJALI BINDALIMA/A",
              "voters": 343
            },
            {
              "station": "ECOLE CORANIQUE DE BINDALIMA 1/A",
              "voters": 313
            },
            {
              "station": "ECOLE CORANIQUE DE BINDALIMA 1/B",
              "voters": 329
            }
          ],
          "BIVOUNA": [
            {
              "station": "ECOLE PUBLIQUE BIVOUNA/A",
              "voters": 202
            },
            {
              "station": "ESPLANADE BILOA ROGER EFFOCK/A",
              "voters": 90
            }
          ],
          "DJIM MASSAMBE": [
            {
              "station": "HANGAR CHEFFERIE DJIM MASSAMBE/A",
              "voters": 80
            }
          ],
          "EHONDО": [
            {
              "station": "CASE SANTE EHONDO/A",
              "voters": 185
            },
            {
              "station": "ECOLE PUBLIQUE NKOULOUTOU/A",
              "voters": 211
            }
          ],
          "ENDAMA": [
            {
              "station": "HANGAR CHEFFERIE ENDAMA/A",
              "voters": 111
            }
          ],
          "KAMKATА": [
            {
              "station": "CASE COMMUNAUTAIRE KAMKATA/A",
              "voters": 310
            },
            {
              "station": "CASE COMMUNAUTAIRE KAMKATA/B",
              "voters": 215
            }
          ],
          "KELA": [
            {
              "station": "ECOLE PUBLIQUE KELA/A",
              "voters": 370
            }
          ],
          "KOMBE BENGUE": [
            {
              "station": "ECOLE MATERNELLE KOMBE BENGUE/A",
              "voters": 120
            }
          ],
          "KORO": [
            {
              "station": "HANGAR EMBOLO JANVIER KORO/A",
              "voters": 53
            }
          ],
          "KOUNDOUNG": [
            {
              "station": "HANGAR CHEFFERIE KOUNDOUNG/A",
              "voters": 87
            }
          ],
          "KOUNG": [
            {
              "station": "HANGAR CHEFFERIE KOUNG/A",
              "voters": 160
            }
          ],
          "KOUSSE": [
            {
              "station": "HANGAR DE STOCKAGE KOUSSE/A",
              "voters": 330
            },
            {
              "station": "ECOLE PUBLIQUE KOUSSE/A",
              "voters": 179
            }
          ],
          "LOUNGUE": [
            {
              "station": "HANGAR DU VILLAGE LOUNGUE /A",
              "voters": 243
            }
          ],
          "MA'A II": [
            {
              "station": "ECOLE PUBLIQUE MA'AII/A",
              "voters": 113
            }
          ],
          "MA'A ROND POINT": [
            {
              "station": "ECOLE PUBLIQUE MA'A ROND POINT/A",
              "voters": 164
            }
          ],
          "MASSAMBE": [
            {
              "station": "ECOLE PUBLIQUE MASSAMBE/A",
              "voters": 172
            }
          ],
          "MBAMENA": [
            {
              "station": "ECOLE PUBLIQUE MBAMENA/A",
              "voters": 52
            }
          ],
          "MBANDONA": [
            {
              "station": "HANGAR CHEFFERIE MBANDONA/A",
              "voters": 50
            }
          ],
          "MBANGA": [
            {
              "station": "ECOLE PUBLIQUE MBANGA/A",
              "voters": 221
            }
          ],
          "MBONGUE II": [
            {
              "station": "ECOLE PUBLIQUE DE MBONGUE II/A",
              "voters": 152
            }
          ],
          "MGBAINDJOCK": [
            {
              "station": "ECOLE PUBLIQUE LOUNGUE/A",
              "voters": 65
            }
          ],
          "NACHTIGAL": [
            {
              "station": "ECOLE PUBLIQUE NACHTIGAL/A",
              "voters": 326
            },
            {
              "station": "HANGAR DU BORD NACHTIGAL/A",
              "voters": 73
            }
          ],
          "NDIMI": [
            {
              "station": "ECOLE PUBLIQUE NDIMI/A",
              "voters": 304
            },
            {
              "station": "ECOLE PUBLIQUE NDIMI /B",
              "voters": 159
            }
          ],
          "NDJAME": [
            {
              "station": "ECOLE PUBLIQUE NDJAME/A",
              "voters": 295
            }
          ],
          "NGUETTE": [
            {
              "station": "CASE CHAPELLE NGUETTE/A",
              "voters": 401
            },
            {
              "station": "ECOLE PUBLIQUE NGUETTE/A",
              "voters": 159
            }
          ],
          "NGUETTЕ": [
            {
              "station": "CASE CHAPELLE NGUETTE/B",
              "voters": 55
            }
          ],
          "NGUILA BABOUTE": [
            {
              "station": "ECOLE PUBLIQUE NGUILA BABOUTE/A",
              "voters": 300
            }
          ],
          "NDONTSOA, NGUILA BABOUTE": [
            {
              "station": "CASE A PALABRE NGUILA BABOUTE/A",
              "voters": 347
            },
            {
              "station": "CASE A PALABRE NGUILA BABOUTE/B",
              "voters": 94
            }
          ],
          "NGUILA HAOUSSA": [
            {
              "station": "ECOLE CORANIQUE NGUILA HAOUSSA/A",
              "voters": 298
            }
          ],
          "NGUILA PLATEAU": [
            {
              "station": "ECOLE PUBLIQUE NGUILA PLATEAU/A",
              "voters": 104
            }
          ],
          "NTUI URBAIN": [
            {
              "station": "HANGAR CHEFFERIE NDJINDJA/A",
              "voters": 97
            },
            {
              "station": "HANGAR MARCHE ABATTOIR/A",
              "voters": 310
            },
            {
              "station": "HANGAR MARCHE ABATTOIR/B",
              "voters": 293
            },
            {
              "station": "HANGAR MARCHE ABATTOIR/C",
              "voters": 335
            },
            {
              "station": "HANGAR MARCHE ABATTOIR/D",
              "voters": 259
            },
            {
              "station": "INSPECTION EDUCATION DE BASE DE NTUI/ A",
              "voters": 210
            },
            {
              "station": "LYCEE GENERAL DE NTUI/A",
              "voters": 316
            },
            {
              "station": "LYCEE GENERAL DE NTUI/B",
              "voters": 342
            },
            {
              "station": "LYCEE GENERAL DE NTUI/C",
              "voters": 259
            },
            {
              "station": "LYCEE GENERAL DE NTUI/D",
              "voters": 243
            },
            {
              "station": "LYCEE GENERAL DE NTUI/E",
              "voters": 285
            },
            {
              "station": "MAISON DE LA FEMME DE NTUI/A",
              "voters": 289
            },
            {
              "station": "MAISON DE LA FEMME DE NTUI/B",
              "voters": 246
            },
            {
              "station": "MAISON DE LA FEMME DE NTUI/C",
              "voters": 286
            },
            {
              "station": "MAISON DE LA FEMME DE NTUI/D",
              "voters": 337
            },
            {
              "station": "MAISON DE LA FEMME DE NTUI/E",
              "voters": 120
            },
            {
              "station": "MISSION CATHOLIQUE SAINT JOSEPH DE NTUI/A",
              "voters": 304
            },
            {
              "station": "MISSION CATHOLIQUE SAINT JOSEPH DE NTUI/B",
              "voters": 150
            },
            {
              "station": "ECOLE PUBLIQUE DE NTUI/A",
              "voters": 323
            },
            {
              "station": "ECOLE PUBLIQUE DE NTUI/B",
              "voters": 293
            },
            {
              "station": "LYCEE BILINGUE DE NTUI/A",
              "voters": 301
            },
            {
              "station": "GSB BON BERGER/A",
              "voters": 50
            },
            {
              "station": "LYCEE TECHNIQUE DE NTUI/A",
              "voters": 48
            },
            {
              "station": "ECOLE PRIVEE CBC DE NTUI/A",
              "voters": 25
            },
            {
              "station": "GSB COSBAN/A",
              "voters": 50
            },
            {
              "station": "GSB ONGOLA/A",
              "voters": 265
            },
            {
              "station": "GSB ONGOLA/B",
              "voters": 236
            },
            {
              "station": "GSB ONGOLA/C",
              "voters": 229
            }
          ],
          "ODON": [
            {
              "station": "ESPLANADE CHEFFERIE ODON/A",
              "voters": 109
            }
          ],
          "ONGUESSEH-ESSOUGLY": [
            {
              "station": "ECOLE PUBLIQUE ESSOUGLY/A",
              "voters": 188
            }
          ],
          "OSSOMBЕ": [
            {
              "station": "ECOLE PUBLIQUE OSSOMBE/A",
              "voters": 271
            }
          ],
          "YALONGO": [
            {
              "station": "ECOLE PUBLIQUE YALONGO/A",
              "voters": 133
            }
          ],
          "NGWE-YARENGN": [
            {
              "station": "HANGAR CHEF NGWE-YARENGN/A",
              "voters": 108
            }
          ],
          "NKOLVE": [
            {
              "station": "CASE CHAPELLE NKOLVE/A",
              "voters": 53
            }
          ],
          "YAKPACK": [
            {
              "station": "HANGAR CHEFFERIE YAKPACK/A",
              "voters": 173
            }
          ],
          "BILANGA KOMBЕ, BILANGA KOMBE": [
            {
              "station": "CES BILANGA KOMBE/A",
              "voters": 270
            }
          ],
          "SALAKOUNOU, SALAKOUNOU": [
            {
              "station": "BAPTIST SCHOOL SALAKOUNOU /А",
              "voters": 326
            }
          ],
          "NDOWE, NTUI URBAIN": [
            {
              "station": "ECOLE PRIMAIRE DE NDOWE/A",
              "voters": 53
            }
          ],
          "NDALENA": [
            {
              "station": "ECOLE PRIMAIRE DE NDALENA/A",
              "voters": 98
            }
          ],
          "NDONTSOA": [
            {
              "station": "ECOLE PUBLIQUE DE NDONTSOA/A",
              "voters": 77
            }
          ],
          "NTUI VILLE": [
            {
              "station": "ECOLE PUBLIQUE DE NTUI VILLE /A",
              "voters": 171
            }
          ],
          "EKOMBITIE": [
            {
              "station": "ECOLE PUBLIQUE D'EKOMBITIE /A",
              "voters": 51
            }
          ],
          "NKOLNGOCK": [
            {
              "station": "MAGASIN DE CACAO DE NKOLNGOCK/A",
              "voters": 99
            }
          ],
          "MA'A III": [
            {
              "station": "ECOLE PUBLIQUE DE MA'A III/A",
              "voters": 58
            }
          ],
          "TIMA": [
            {
              "station": "ECOLE SOURCE DE VIE DE DE TIMA/A",
              "voters": 51
            }
          ],
          "MA'A COTIERE": [
            {
              "station": "ECOLE PUBLIQUE DE TAMBA/A",
              "voters": 29
            },
            {
              "station": "ECOLE PUBLIQUE DE MA'A COTIERE/A",
              "voters": 284
            }
          ],
          "YALE": [
            {
              "station": "ECOLE PRIVEE SAINT PAUL DE YALE/A",
              "voters": 60
            }
          ],
          "MEWONG": [
            {
              "station": "COMPLEXE SCOLAIRE LES SCIENTIFIQUES DE MEWONG/A",
              "voters": 43
            }
          ]
        },
        "YOKO": {
          "DONG": [
            {
              "station": "CASE A PALABRE DE DONG/A",
              "voters": 105
            }
          ],
          "DONGA": [
            {
              "station": "ECOLE PUBLIQUE DE DONGA/A",
              "voters": 183
            }
          ],
          "DONGA SAVANE": [
            {
              "station": "CASE A PALABRE DE DONGA SAVANE/A",
              "voters": 246
            }
          ],
          "DOUME": [
            {
              "station": "ECOLE PUBLIQUE DE DOUME/A",
              "voters": 314
            }
          ],
          "FOUFOENG": [
            {
              "station": "ECOLE PUBLIQUE DE FOUFOENG/A",
              "voters": 69
            }
          ],
          "FOUY": [
            {
              "station": "ECOLE PUBLIQUE DE FOUY/A",
              "voters": 88
            }
          ],
          "GUERE": [
            {
              "station": "CASE A PALABRE DE GUERE/A",
              "voters": 40
            }
          ],
          "GUERVOUM": [
            {
              "station": "ECOLE PUBLIQUE DE GUERVOUM/A",
              "voters": 234
            },
            {
              "station": "CASE A PALABRE DE GUERVOUM 1/A",
              "voters": 106
            }
          ],
          "ISSANDJА": [
            {
              "station": "ECOLE PUBLIQUE DE ISSANDJA/A",
              "voters": 268
            }
          ],
          "ISSANDJA": [
            {
              "station": "ECOLE PUBLIQUE DE ISSANDJA/B",
              "voters": 182
            }
          ],
          "JERUSALEM, JERUSALEM-ISSANDJA": [
            {
              "station": "ECOLE PUBLIQUE DE JERUSALEM/A",
              "voters": 246
            },
            {
              "station": "ECOLE PUBLIQUE DE JERUSALEM/B",
              "voters": 250
            }
          ],
          "JERUSALEM": [
            {
              "station": "ECOLE BILINGUE DE JERUSALEM/A",
              "voters": 366
            },
            {
              "station": "ECOLE BILINGUE DE JERUSALEM/B",
              "voters": 207
            },
            {
              "station": "ECOLE BILINGUE DE JERUSALEM/C",
              "voters": 237
            }
          ],
          "KOUNDE": [
            {
              "station": "ECOLE PUBLIQUE DE KOUNDE/A",
              "voters": 128
            }
          ],
          "LENA": [
            {
              "station": "CASE A PALABRE DE LENA/A",
              "voters": 186
            }
          ],
          "CANTON LINTE MEHOUNG, CANTON LINTE-MEHOUNG": [
            {
              "station": "C.E.S DE LINTE/A",
              "voters": 281
            }
          ],
          "CANTON LINTE-MEHOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE LINTE/A",
              "voters": 261
            }
          ],
          "MAKOURI": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOURI/A",
              "voters": 50
            }
          ],
          "MANGAI": [
            {
              "station": "ECOLE PUBLIQUE DE MANGAI/A",
              "voters": 289
            }
          ],
          "MANKIM": [
            {
              "station": "ECOLE PUBLIQUE DE MANKIM/A",
              "voters": 165
            }
          ],
          "MATSARI": [
            {
              "station": "ECOLE PUBLIQUE DE MATSARI/A",
              "voters": 206
            }
          ],
          "MBA'AM": [
            {
              "station": "ECOLE PUBLIQUE DE MBA'AM/A",
              "voters": 146
            }
          ],
          "MBAMDING": [
            {
              "station": "CASE A PALABRE DE MBAMDING/A",
              "voters": 162
            }
          ],
          "MBATOUA": [
            {
              "station": "ECOLE PUBLIQUE DE MBATOUA/А",
              "voters": 37
            }
          ],
          "MBEMBEING": [
            {
              "station": "ECOLE PUBLIQUE DE MBEMBEING/A",
              "voters": 111
            }
          ],
          "MBIMBIМ": [
            {
              "station": "ECOLE PUBLIQUE DE MBIMBIM/A",
              "voters": 72
            }
          ],
          "MEGANG": [
            {
              "station": "ECOLE PUBLIQUE DE MEGANG/A",
              "voters": 165
            }
          ],
          "MEKAMBING, YOKO QUARTIER ADMINISTRATIF": [
            {
              "station": "CASE A PALABRE DE MEKAMBING/A",
              "voters": 98
            }
          ],
          "MEKOASSIM": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOASSIM/A",
              "voters": 170
            }
          ],
          "MEKOISSIM II": [
            {
              "station": "CASE A PALABRE DE MEKOASSIMII/A",
              "voters": 214
            }
          ],
          "MELIMVI": [
            {
              "station": "CASE A PALABRE DE MELIMVI/A",
              "voters": 34
            }
          ],
          "MELOKE": [
            {
              "station": "CASE A PALABRE DE MELOKE/A",
              "voters": 211
            }
          ],
          "MENDJANVOUNI": [
            {
              "station": "CASE A PALABRE DE MENDJANVOUNI/A",
              "voters": 59
            }
          ],
          "MENGOENG": [
            {
              "station": "CASE A PALABRE DE MENGOENG/A",
              "voters": 102
            }
          ],
          "METEING": [
            {
              "station": "CASE A PALABRE DE METEING/A",
              "voters": 78
            }
          ],
          "METSING": [
            {
              "station": "ECOLE PUBLIQUE DE METSING/A",
              "voters": 65
            }
          ],
          "MINFOUMBE": [
            {
              "station": "FOYER CUTUREL DE MINFOUMBE/A",
              "voters": 295
            },
            {
              "station": "FOYER CUTUREL DE MINFOUMBE/B",
              "voters": 75
            }
          ],
          "MINDJA": [
            {
              "station": "CASE A PALABLE DE MINDJA/A",
              "voters": 123
            }
          ],
          "MORKAING": [
            {
              "station": "CASE A PALABLE DE MORKAING/A",
              "voters": 29
            }
          ],
          "NDIM": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NDIM/A",
              "voters": 70
            }
          ],
          "MINFOUMBE, NDJOLE": [
            {
              "station": "FOYER CUTUREL DE NDJOLE/A",
              "voters": 339
            },
            {
              "station": "FOYER CUTUREL DE NDJOLE/B",
              "voters": 264
            }
          ],
          "NGOUANG": [
            {
              "station": "CASE A PALABRE DE NGOUANG/A",
              "voters": 82
            }
          ],
          "NGOUETOU": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUETOU/A",
              "voters": 289
            }
          ],
          "NGOUM I": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUM/A",
              "voters": 93
            }
          ],
          "NYEM": [
            {
              "station": "ECOLE PUBLIQUE DE NYEM/A",
              "voters": 69
            }
          ],
          "OTTODORF": [
            {
              "station": "SALLE MENUISERIE DE OTTODORF/A",
              "voters": 34
            }
          ],
          "YOKO QUARTIER ADMINISTRATIF, YOKO QUARTIER YOKO SUD II": [
            {
              "station": "ECOLE PUBLIQUE GRPE II YOKO /A",
              "voters": 307
            },
            {
              "station": "ECOLE PUBLIQUE GRPE II YOKO / B",
              "voters": 359
            },
            {
              "station": "LYCEE-YOKO/A",
              "voters": 301
            }
          ],
          "YOKO QUARTIER BABOUTE NORD": [
            {
              "station": "CASE A PALABRE BABOUTE NORD/A",
              "voters": 182
            }
          ],
          "YOKO QUARTIER ADMINISTRATIF, YOKO QUARTIER HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE GRPE I DE YOKO/A",
              "voters": 301
            },
            {
              "station": "ECOLE PUBLIQUE GRPE I DE YOKО/B",
              "voters": 99
            }
          ],
          "YOKO QUARTIER ADMINISTRATIF, YOKO QUARTIER TIKAR": [
            {
              "station": "EXPLANADE EXPLOSIF DE YOKO/A",
              "voters": 272
            }
          ],
          "YOKO QUARTIER ADMINISTRATIF, YOKO QUARTIER YOKO VILLAGE": [
            {
              "station": "ECOLE PROTESTANTE DE YOKO /A",
              "voters": 294
            },
            {
              "station": "ECOLE PROTESTANTE DE YOKO/B",
              "voters": 233
            }
          ],
          "TERRE PROMISE": [
            {
              "station": "CASE A PALABRE DE TERRE PROMISE/A",
              "voters": 170
            }
          ],
          "SAMLE": [
            {
              "station": "CASE A PALABRE DE SAMLE/A",
              "voters": 151
            }
          ],
          "SENGBE": [
            {
              "station": "ECOLE PUBLIQUE DE SENGBE/A",
              "voters": 151
            }
          ],
          "YANGOULA": [
            {
              "station": "CASE A PALABRE DE YANGOULA/A",
              "voters": 100
            }
          ],
          "DONGA SAVANE, DONGA SAVANE III": [
            {
              "station": "ESPL.BEYALA DE DONGA SAVANEIETI/A",
              "voters": 173
            }
          ],
          "MAKAIG": [
            {
              "station": "CASE A PALABRE DE MAKAIG /A",
              "voters": 37
            }
          ],
          "VILLAGE DE LA PAIX-YOКО": [
            {
              "station": "ECOLE PRIVEE DU VILLAGE DE LA PAIX-YOKO/A",
              "voters": 276
            }
          ],
          "MELOKE SAVANE": [
            {
              "station": "CASE A PALABRE MELOKE SAVANE/A",
              "voters": 100
            }
          ],
          "NGOASSABE": [
            {
              "station": "CASE A PALABRE DE NGOASSABE/A",
              "voters": 41
            }
          ],
          "MEIL NORD": [
            {
              "station": "CASE A PALABRE DE MEIL NORD /A",
              "voters": 118
            }
          ]
        }
      },
      "MEFOU-ET-AFAMBA": {
        "AFANLOUM": {
          "AFANLOUM CENTRE": [
            {
              "station": "AFANLOUM ECOLE PUBLIQUE/A",
              "voters": 256
            },
            {
              "station": "AFANLOUM ECOLE PUBLIQUE/B",
              "voters": 213
            }
          ],
          "BISSONG": [
            {
              "station": "BISSONG ECOLE PUBLIQUE/A",
              "voters": 113
            }
          ],
          "EKOUMDOUMA II": [
            {
              "station": "EKOUMDOUMA ECOLE PUBLIQUE /A",
              "voters": 121
            }
          ],
          "ETOH": [
            {
              "station": "ETOH ECOLE PUBLIQUE/A",
              "voters": 120
            }
          ],
          "ETOMBANG": [
            {
              "station": "ETOMBANG EGLISE ADVENTISTE/A",
              "voters": 36
            }
          ],
          "MEKOM": [
            {
              "station": "MEKOM ECOLE PUBLIQUE/A",
              "voters": 166
            }
          ],
          "MELOUTOU": [
            {
              "station": "MELOUTOU CENTRE COMMERCIAL/A",
              "voters": 97
            }
          ],
          "MEVAMEBOTO": [
            {
              "station": "MEVAMEBOTO EPC /А",
              "voters": 168
            }
          ],
          "MVOM": [
            {
              "station": "MVOM ECOLE PUBLIQUE/A",
              "voters": 189
            }
          ],
          "NGOUNDOU": [
            {
              "station": "NGOUNDOU ECOLE PUBLIQUE/A",
              "voters": 51
            }
          ],
          "NGOUNGOUMOUI": [
            {
              "station": "NGOUNGOUMOU VATICAN/A",
              "voters": 141
            }
          ],
          "NGOUNGOUMOU II": [
            {
              "station": "NGOUNGOUMOU ECOLE PUBLIQUE/A",
              "voters": 37
            }
          ],
          "NKOLBISSEGUE": [
            {
              "station": "NKOLBISSEGUE DISPENSAIREA",
              "voters": 36
            }
          ],
          "NLONG VILLAGE": [
            {
              "station": "HANGAR FORAGE NLONG VILLAGE/A",
              "voters": 42
            }
          ],
          "NSANAKО'О": [
            {
              "station": "NSAN-AKO'O EPC/A",
              "voters": 123
            }
          ],
          "MENGALA": [
            {
              "station": "MENGALA CASE CHAPELLE/A",
              "voters": 29
            }
          ],
          "NKOLFOLO": [
            {
              "station": "NKOLFOLO CASE CHAPELLE/A",
              "voters": 23
            }
          ],
          "ADJIZOA": [
            {
              "station": "ADJIZOA CASE CHAPELLE EPC/A",
              "voters": 32
            }
          ],
          "NGOUNGOUMOU": [
            {
              "station": "NGOUNGOUMOU DISPENSAIRE/A",
              "voters": 37
            }
          ]
        },
        "AWAЕ": {
          "AKAK": [
            {
              "station": "ECOLE PUBLIQUE AKAK/A",
              "voters": 236
            }
          ],
          "AKEKELA": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE AKEKELA/ A",
              "voters": 54
            }
          ],
          "AKOUNOU": [
            {
              "station": "ECOLE PUBLIQUE AKOUNOU/A",
              "voters": 83
            }
          ],
          "AWAE I": [
            {
              "station": "ECOLE PUBLIQUE AKOM/A",
              "voters": 70
            },
            {
              "station": "ESPLANADE HANGAR CHEFFERIE AWAE I/A",
              "voters": 189
            }
          ],
          "AWAE II": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE AWAE II/A",
              "voters": 113
            }
          ],
          "AWAE CENTRE": [
            {
              "station": "COLLEGE SAINT JOSEPH/A",
              "voters": 325
            },
            {
              "station": "COLLEGE SAINT JOSEPH/B",
              "voters": 272
            },
            {
              "station": "COLLEGE SAINT JOSEPH/C",
              "voters": 245
            }
          ],
          "AYOS": [
            {
              "station": "ECOLE PUBLIQUE AYOS/A",
              "voters": 71
            }
          ],
          "BEKOUDOU": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE BEKOUDOU/A",
              "voters": 51
            }
          ],
          "BIVIANG": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE BIVIANG/A",
              "voters": 89
            }
          ],
          "BIVOUVOUE": [
            {
              "station": "ESPLANADE HANGAR CHEFFEIRE BIVOUVOUE/A",
              "voters": 74
            }
          ],
          "EBODENKOU": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE EBODENKOU/A",
              "voters": 54
            }
          ],
          "EBOLOWA": [
            {
              "station": "ECOLE PUBLIQUE EBOLOWA/A",
              "voters": 200
            }
          ],
          "EBOLS": [
            {
              "station": "ECOLE PUBLIQUE EBOLSI/A",
              "voters": 127
            }
          ],
          "EBOLSI": [
            {
              "station": "ELEM-ENTREE ONDOA GAETAN/A",
              "voters": 61
            }
          ],
          "EKIEMBIE 1": [
            {
              "station": "ECOLE CATHOLIQUE EKIEMBIE/A",
              "voters": 179
            }
          ],
          "EKIEMBIE 2": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE EKIEMBIE 2 TA",
              "voters": 106
            }
          ],
          "ESSAMINTSANG": [
            {
              "station": "ECOLE PUBLIQUE ESSAMINTSANG/A",
              "voters": 210
            }
          ],
          "KOUKOUNOU": [
            {
              "station": "ECOLE PUBLIQUE KOUKOUNOU/A",
              "voters": 58
            }
          ],
          "LIBI": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE LIBI/A",
              "voters": 101
            }
          ],
          "MBADOUMOU": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MBADOUMOU/A",
              "voters": 74
            }
          ],
          "MBELALEN": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MBELALEN TA",
              "voters": 190
            }
          ],
          "MBOUN": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MBOUN /A",
              "voters": 37
            }
          ],
          "MENYOUMEKOMBO": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MENYOUMEKOMBO/A",
              "voters": 52
            }
          ],
          "MEWOUDOU": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MEWOUDOU/A",
              "voters": 59
            },
            {
              "station": "ECOLE PUBLIQUE DE MESSAK/A",
              "voters": 45
            }
          ],
          "MINKOMILALA": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MINKOMILALA/A",
              "voters": 59
            }
          ],
          "MINLABА": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MINLABA/ A",
              "voters": 47
            }
          ],
          "MOMEBELENGA I": [
            {
              "station": "PLACE DES FETES MOMEBELENGA/A",
              "voters": 116
            }
          ],
          "MOMEBELENGA II": [
            {
              "station": "ECOLE PUBLIQUE MOMEBELENGA/A",
              "voters": 98
            },
            {
              "station": "CHAPELLE OKYE CARRIERE/A",
              "voters": 85
            }
          ],
          "MVE I": [
            {
              "station": "ECOLE PUBLIQUE D'ESSABI/A",
              "voters": 127
            },
            {
              "station": "HANGAR CHAPELLE MVOG-MISONGUI/A/A",
              "voters": 84
            }
          ],
          "MVE II": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE MVE II/A",
              "voters": 86
            }
          ],
          "NGAT": [
            {
              "station": "ECOLE PUBLIQUE NGAT/A",
              "voters": 99
            }
          ],
          "NGOANTET": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE NGOANTЕТ IA",
              "voters": 58
            }
          ],
          "NGUINDA": [
            {
              "station": "ECOLE PUBLIQUE NGUINDA/A",
              "voters": 121
            }
          ],
          "NKOLATO": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE NKOLATO/ A",
              "voters": 39
            }
          ],
          "AWAE CENTRE, NKOLNGOCK AVAMANGA": [
            {
              "station": "ECOLE PUBLIQUE AWAE /A",
              "voters": 301
            },
            {
              "station": "ECOLE PUBLIQUE AWAE /B",
              "voters": 255
            },
            {
              "station": "ECOLE PUBLIQUE AWAE/C",
              "voters": 279
            },
            {
              "station": "ECOLE PUBLIQUE AWAE/D",
              "voters": 338
            },
            {
              "station": "ECOLE PUBLIQUE AWAE/E",
              "voters": 247
            }
          ],
          "NKOLNGOCK YEMESSOМО": [
            {
              "station": "ESPL. CHEFFERIE NKOLNGOCK YEMESSOMO TA",
              "voters": 125
            }
          ],
          "NKOLNGUET": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE NKOLNGUET/A",
              "voters": 66
            }
          ],
          "NLOMANKENG": [
            {
              "station": "ECOLE PUBLIQUE NLOMANKENG/A",
              "voters": 40
            }
          ],
          "NLONG": [
            {
              "station": "LYCEE ELAT/A",
              "voters": 280
            },
            {
              "station": "LYCEE ELAT/B",
              "voters": 76
            },
            {
              "station": "ESPLANADE HANGAR CHEFFERIE NLONG/A",
              "voters": 82
            }
          ],
          "ODOUDOUMA I": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE ODOUDOUMA I/A",
              "voters": 60
            }
          ],
          "ODOUDOUMA II": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE ODOUDOUMA II/A",
              "voters": 72
            }
          ],
          "OFFOUMNSELEK I, OFFOUMNSELEK II": [
            {
              "station": "ECOLE CATHOLIQUE OFFOUMNSELEK I/A",
              "voters": 109
            }
          ],
          "OFFOUMNSELEKI, OFFOUMNSELEKII": [
            {
              "station": "ESPL. HANGAR CHEFFERIE OFFOUMNSELEK II/A",
              "voters": 55
            }
          ],
          "OLELA": [
            {
              "station": "CES OLELA/A",
              "voters": 106
            }
          ],
          "OMAN": [
            {
              "station": "STADE OMAN/A",
              "voters": 208
            }
          ],
          "TOM": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE TOM/A",
              "voters": 59
            }
          ],
          "ZILI AVAMANGA": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE ZILI/A",
              "voters": 142
            }
          ],
          "ZOANKOМ": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE ZOANKOM/ A",
              "voters": 108
            }
          ],
          "MEYO": [
            {
              "station": "ECOLE PUBLIQUE MEYO /A/A",
              "voters": 151
            }
          ]
        },
        "EDZENDOUAN": {
          "AFAN-ATEBINI": [
            {
              "station": "ESPLANADE CHEFFERIE AFAN-ATEBINI/A",
              "voters": 126
            }
          ],
          "AFAN-ESSELE": [
            {
              "station": "MAGASIN DE STOCKAGE AFAN-ESSELE/A",
              "voters": 157
            }
          ],
          "AFAN-MVIE I": [
            {
              "station": "ECOLE CATHOLIQUE AFAN-MVIE I/A",
              "voters": 187
            }
          ],
          "AFAN-MVIE II": [
            {
              "station": "ECOLE PUBLIQUE AFAN-MVIE II/A",
              "voters": 103
            }
          ],
          "AKOK": [
            {
              "station": "ESPLANADE CHEFFERIE AKOK/A",
              "voters": 140
            }
          ],
          "AKONDOK": [
            {
              "station": "ESPLANADE CHEFFERIE AKONDOK/A",
              "voters": 88
            }
          ],
          "CARREFOUR NDZANA IV, NDZANA I NKOL-NGOK": [
            {
              "station": "NOUVEAU CES NDZANA / A",
              "voters": 193
            }
          ],
          "EBOL-NKОK": [
            {
              "station": "ECOLE PUBLIQUE EBOL-NKOK/A",
              "voters": 149
            }
          ],
          "EDZENDOUAN, MVOMNDOUMBA ECOLE": [
            {
              "station": "ECOLE PUBLIQUE EDZENDOUAN/A",
              "voters": 379
            }
          ],
          "MEBENGADZAMA": [
            {
              "station": "ECOLE PUBLIQUE MEBENGADZAMA/A",
              "voters": 110
            }
          ],
          "MEKA'A": [
            {
              "station": "MAGASIN DE STOCKAGE MEKA'A/A",
              "voters": 59
            }
          ],
          "MINKOMIBE": [
            {
              "station": "ECOLE PUBLIQUE MINKOMIBE/A",
              "voters": 124
            }
          ],
          "MVOMNDOUMBA CHAPELLE, MVOMNDOUMBA ECOLE": [
            {
              "station": "MISSION MVOMNDOUMBA/A",
              "voters": 100
            }
          ],
          "MVOMNDOUMBA CHEFFERIE": [
            {
              "station": "MAGASIN DE STOCKAGE MVOMNDOUMBA/A",
              "voters": 103
            }
          ],
          "MVOMNDOUMBA ECOLE": [
            {
              "station": "ECOLE PUBLIQUE MVOMNDOUMBA/A",
              "voters": 121
            }
          ],
          "MVOMNDOUMBA MINDI-ASSI": [
            {
              "station": "CASE CHAPELLE HAMEAU MVOMNDOUMBA/ A",
              "voters": 79
            }
          ],
          "NDZANA I NKOL-NGOK": [
            {
              "station": "DISPENSAIRE NDZANA/A",
              "voters": 115
            }
          ],
          "NDZANA II": [
            {
              "station": "ECOLE CATHOLIQUE NDZANA/A",
              "voters": 118
            }
          ],
          "NDZANA III": [
            {
              "station": "ECOLE PUBLIQUE NDZANA/A",
              "voters": 166
            }
          ],
          "NKOAYOS": [
            {
              "station": "ECOLE PUBLIQUE NKOAYOS/A",
              "voters": 164
            }
          ]
        },
        "ESSE": {
          "AFANETOUANA": [
            {
              "station": "CARREFOUR HANGAR AFANETOUANA/A",
              "voters": 121
            },
            {
              "station": "ECOLE PUBLIQUE AFANETOUANA/A",
              "voters": 157
            }
          ],
          "AKPAK": [
            {
              "station": "HANGAR CHEFFERIE AКРАК/А",
              "voters": 37
            }
          ],
          "AWAE": [
            {
              "station": "ECOLE PUBLIQUE AWAE /A",
              "voters": 85
            }
          ],
          "BIKONG-BROUSSE": [
            {
              "station": "CASE A PALABRE BIKONG-BROUSSE/A",
              "voters": 34
            }
          ],
          "BIKONG-ROUTE": [
            {
              "station": "CARREFOUR HANGAR BIKONG-ROUTE/A",
              "voters": 65
            }
          ],
          "BIKOUE": [
            {
              "station": "HANGAR CHEFFERIE BIKOUE/A",
              "voters": 72
            },
            {
              "station": "BIKOUE ECOLE PUBLIQUE/A",
              "voters": 158
            }
          ],
          "EBANGA": [
            {
              "station": "HANGAR EBANGA/A",
              "voters": 40
            }
          ],
          "EBODOUMOU": [
            {
              "station": "CASE COMMUNAUTAIRE EBODOUMOU/A",
              "voters": 71
            },
            {
              "station": "HANGAR MISSION CATH. EBODOUMOU/A",
              "voters": 79
            }
          ],
          "EBOGO": [
            {
              "station": "CASE COMMUNAUTAIRE EBOGO/A",
              "voters": 136
            }
          ],
          "EBOLZOCK-CHEFFERIE, EBOLZOСK-MЕBANG": [
            {
              "station": "HANGAR CHEFFERIE EBOLZOCK/A",
              "voters": 139
            }
          ],
          "EBOLZOCK-MEBANG": [
            {
              "station": "HANGAR COOPERATIVE EBOLZOCK/A",
              "voters": 40
            }
          ],
          "EKOUMDOUMA I": [
            {
              "station": "ECOLE CATHOLIQUE NKOLAVOLO/A",
              "voters": 45
            }
          ],
          "ESSE-VILLAGE": [
            {
              "station": "HANGAR CHEFFERIE ESSE-VILLAGE/A",
              "voters": 184
            }
          ],
          "ESSE-VILLE": [
            {
              "station": "LYCEE MIXTE D'ESSE/A",
              "voters": 263
            },
            {
              "station": "ESPLANADE MAIRIE D'ESSE/A",
              "voters": 280
            },
            {
              "station": "ESPLANADE PLACE DES FETES D'ESSE/A",
              "voters": 298
            }
          ],
          "ETETANA": [
            {
              "station": "ECOLE PUBLIQUE NGUINDA-NGAT/A",
              "voters": 85
            }
          ],
          "ETOUTOUA": [
            {
              "station": "HANGAR COOPERATIVE ETOUTOUA/A",
              "voters": 143
            }
          ],
          "EWOT": [
            {
              "station": "ECOLE PUBLIQUE EWOT/A",
              "voters": 135
            },
            {
              "station": "YANGAN HANGAR CHEFFERIE/A",
              "voters": 44
            }
          ],
          "FEGMIMBANG": [
            {
              "station": "DISPENSAIRE FEGMIMBANG/A",
              "voters": 103
            }
          ],
          "KOUTOU, MEBOE": [
            {
              "station": "ECOLE PUBLIQUE NGONDIMBELE /A",
              "voters": 223
            }
          ],
          "ESSE-VILLAGE, LONGO": [
            {
              "station": "ECOLE PUBLIQUE LONGO/A",
              "voters": 108
            }
          ],
          "LOUM ECOLE": [
            {
              "station": "ECOLE PUBLIQUE LOUM/A",
              "voters": 152
            }
          ],
          "MBAMAYOK": [
            {
              "station": "ECOLE PUBLIQUE MBAMAYOK/A",
              "voters": 108
            }
          ],
          "MBEMEDZOU": [
            {
              "station": "ECOLE PUBLIQUE MBEMEDZOU /A",
              "voters": 129
            }
          ],
          "MBENOA CHEFFERIE": [
            {
              "station": "HANGAR CHEFFERIE MBENOA/A",
              "voters": 77
            }
          ],
          "MBENOA ROUTE": [
            {
              "station": "CHAPELLE MBENOA/A",
              "voters": 103
            }
          ],
          "MBESSI": [
            {
              "station": "HANGAR CHEFFERIE MBESSI/A",
              "voters": 114
            }
          ],
          "MEBEM, ONGANDI": [
            {
              "station": "ECOLE PUBLIQUE ONGANDI/A",
              "voters": 135
            }
          ],
          "MENDOMBO": [
            {
              "station": "HANGAR CHEFFERIE MEDOMBO/A",
              "voters": 53
            }
          ],
          "MEDOUMBOU": [
            {
              "station": "HANGAR CHEFFERIE MEDOUMBOU/A",
              "voters": 120
            }
          ],
          "MENGALAI, BLOC MЕВЕМ II, MENGALA II": [
            {
              "station": "HANGAR CHEFFERIE MENGALA 1/A",
              "voters": 51
            }
          ],
          "BLOC MЕВЕМ II": [
            {
              "station": "ECOLE PUBLIQUE ABODO/A",
              "voters": 28
            }
          ],
          "MENGOSSA": [
            {
              "station": "ECOLE PUBLIQUE MENGOSSA/A",
              "voters": 107
            }
          ],
          "ETOUTOUA, MENGUEME": [
            {
              "station": "ECOLE PUBLIQUE D'ESSABOUTOU/A",
              "voters": 123
            }
          ],
          "MENGUEME": [
            {
              "station": "ECOLE PUBLIQUE DE MENGUEME/A",
              "voters": 115
            }
          ],
          "MEVO MEVO": [
            {
              "station": "ECOLE PUBLIQUE MEVO MEVO/A",
              "voters": 128
            }
          ],
          "MFANDENA": [
            {
              "station": "HANGAR COOPERATIVE MFANDENA/A",
              "voters": 66
            },
            {
              "station": "BOCOM MFANDENA/A",
              "voters": 137
            }
          ],
          "MFECKOUNDI": [
            {
              "station": "HANGAR CHEFFERIE MFECKOUNDI/A",
              "voters": 35
            }
          ],
          "MFOU": [
            {
              "station": "HANGAR CHEFFERIE MFOU/A",
              "voters": 40
            }
          ],
          "MINKOMILALA": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUMDOUMAI/A",
              "voters": 104
            },
            {
              "station": "BOUKAROU MVOG-NDZIE/A",
              "voters": 70
            }
          ],
          "MINKOUMOU": [
            {
              "station": "CASE A PALABRE MINKOUMOU/A",
              "voters": 54
            }
          ],
          "MVENG": [
            {
              "station": "HANGAR CHEFFERIE MVENG/A",
              "voters": 120
            }
          ],
          "NDOMBО": [
            {
              "station": "HANGAR CHEFFERIE NDOMBO/A",
              "voters": 89
            }
          ],
          "NGAT I": [
            {
              "station": "CASE A PALABRE NGAT I/A",
              "voters": 34
            }
          ],
          "NGAT II": [
            {
              "station": "CASE A PALABRE NGAT II/A",
              "voters": 104
            }
          ],
          "NGONWA I": [
            {
              "station": "ECOLE PUBLIQUE NGONWA/A",
              "voters": 153
            }
          ],
          "NGONWA II": [
            {
              "station": "CHAPELLE NGONWA-NDONG /A",
              "voters": 74
            }
          ],
          "NGOUNDOU BROUSSE": [
            {
              "station": "CASE A PALABRE NGOUNDOU/A",
              "voters": 27
            }
          ],
          "NGOUNDOU ROUTE": [
            {
              "station": "FORAGE NGOUNDOU ROUTE/А",
              "voters": 101
            }
          ],
          "NGUINDA": [
            {
              "station": "HANGAR CHEFFERIE NGUINDA/A",
              "voters": 57
            }
          ],
          "NKOL ESSONG": [
            {
              "station": "HANGAR CHAPELLE NKOL ESSONG/A",
              "voters": 131
            }
          ],
          "NKOLAFAMBA": [
            {
              "station": "BARRIERE FORESTIERE NKOLAFAMBA/A",
              "voters": 76
            }
          ],
          "NKOLAVOLO II": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLAVOLO II/A",
              "voters": 97
            }
          ],
          "NKOLBA": [
            {
              "station": "HANGAR CHEFFERIE NKOLBA/A",
              "voters": 112
            }
          ],
          "NKOLFOLO": [
            {
              "station": "CASE A PALABRE NKOLFOLO/A",
              "voters": 30
            }
          ],
          "NKOLMBONDE I": [
            {
              "station": "ECOLE PUBLIQUE NKOLMBONDE/A",
              "voters": 123
            }
          ],
          "NKOLMBONDE II": [
            {
              "station": "HANGAR CHEFFERIE NKOLMBONDE II/A",
              "voters": 57
            }
          ],
          "NKOLYANGA-LOUM BROUSSE": [
            {
              "station": "CASE A PALABRE NKOLYANGA/A",
              "voters": 63
            }
          ],
          "NKOMEYO": [
            {
              "station": "ECOLE PUBLIQUE NKOMEYO/A",
              "voters": 83
            }
          ],
          "NOMAYOS": [
            {
              "station": "BANQUE VILLAGEOISE NOMAYOS/A",
              "voters": 171
            }
          ],
          "NSIMI YETOULOU": [
            {
              "station": "HANGAR CHEFFERIE NSIMI YETOULOU/A",
              "voters": 111
            }
          ],
          "NTOUESSONG": [
            {
              "station": "HANGAR CARREFOUR NTOUESSONG/A",
              "voters": 157
            }
          ],
          "ONDOUNDOU": [
            {
              "station": "HANGAR CHEFFERIE ONDOUNDOU/A",
              "voters": 135
            }
          ]
        },
        "MFOU": {
          "ABANG": [
            {
              "station": "CES EKALII/A",
              "voters": 145
            }
          ],
          "ABEMBE I": [
            {
              "station": "ECOLE PUBLIQUE D'ABEMBE I/A",
              "voters": 74
            },
            {
              "station": "ECOLE PUBLIQUE D'ABEMBE II/A",
              "voters": 36
            }
          ],
          "ABIMOAН": [
            {
              "station": "ECOLE PUBLIQUE D'ABIMOAH/A",
              "voters": 184
            }
          ],
          "AKOK": [
            {
              "station": "ECOLE PUBLIQUE D'AKOK/A",
              "voters": 170
            }
          ],
          "AKOUMBOU": [
            {
              "station": "ESPLANADE CHEFFERIE AKOUMBOU/A",
              "voters": 157
            }
          ],
          "AWAE II": [
            {
              "station": "CES AWAE II/A",
              "voters": 55
            }
          ],
          "AWAE IV": [
            {
              "station": "ESPLANADE PEAGE/A",
              "voters": 120
            }
          ],
          "BENEBALOT": [
            {
              "station": "CHAPELLE BENEBALOT/A",
              "voters": 300
            }
          ],
          "BIBIE, EKOKO II": [
            {
              "station": "ESPLANADE CHEFFERIE BIBIE/A",
              "voters": 100
            },
            {
              "station": "ESPLANADE CHEFFERIE BIBIE/B",
              "voters": 61
            }
          ],
          "BLOC I, MFOU VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE/A",
              "voters": 352
            }
          ],
          "BLOCI, MFOU VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE/B",
              "voters": 251
            },
            {
              "station": "ECOLE PUBLIQUE ANNEXE/C",
              "voters": 112
            }
          ],
          "BLOCI, BLOC II": [
            {
              "station": "ECOLE MATERNELLE ANNEXE /A",
              "voters": 316
            }
          ],
          "BLOC I, BLOC II": [
            {
              "station": "ECOLE MATERNELLE ANNEXE /B",
              "voters": 214
            }
          ],
          "BLOC II": [
            {
              "station": "ESPLANADE SERVICE TRAVAUX PUBLICS/A",
              "voters": 407
            },
            {
              "station": "ESPLANADE SERVICE TRAVAUX PUBLICS/B",
              "voters": 111
            }
          ],
          "BLOC IV, CENTRE ADMINISTRATIF": [
            {
              "station": "LYCEE BILINGUE DE MFOU/A",
              "voters": 312
            },
            {
              "station": "LYCEE BILINGUE DE MFOU/B",
              "voters": 334
            },
            {
              "station": "LYCEE BILINGUE DE MFOU/C",
              "voters": 363
            }
          ],
          "CENTRE ADMINISTRATIF": [
            {
              "station": "ESPLANADE MAIRIE/A",
              "voters": 362
            },
            {
              "station": "ESPLANADE MAIRIE/B",
              "voters": 270
            }
          ],
          "EKALII": [
            {
              "station": "MAISON DE LA COOPERATIVE/A",
              "voters": 271
            }
          ],
          "EKALI II": [
            {
              "station": "ECOLE PUBLIQUE D'EKALIII/A",
              "voters": 233
            }
          ],
          "EKALI III": [
            {
              "station": "ECOLE PUBLIQUE EKALI III/A",
              "voters": 81
            }
          ],
          "EKOKO I": [
            {
              "station": "CHAPELLE EKOKO I/A",
              "voters": 209
            },
            {
              "station": "ESPLANADE CHEFFERIE EKOКO II/A",
              "voters": 399
            }
          ],
          "ELIG OWONO": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II/A",
              "voters": 313
            },
            {
              "station": "ECOLE PUBLIQUE GROUPЕ II/ B",
              "voters": 179
            }
          ],
          "ESSAZOK": [
            {
              "station": "ECOLE PUBLIQUE D'ESSAZOK/A",
              "voters": 366
            }
          ],
          "ESSAZOК": [
            {
              "station": "ECOLE PUBLIQUE D'ESSAZOK/B",
              "voters": 183
            }
          ],
          "KAMBA": [
            {
              "station": "ECOLE PUBLIQUE DE KAMBA/A",
              "voters": 237
            }
          ],
          "KOUMOU": [
            {
              "station": "ECOLE PUBLIQUE DE KOUMOU/A",
              "voters": 112
            }
          ],
          "MEHANDAN II, MEHANDAN III": [
            {
              "station": "SABEL/A",
              "voters": 347
            },
            {
              "station": "SABEL/B",
              "voters": 183
            }
          ],
          "MEKOMBА": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOMBA/A",
              "voters": 137
            }
          ],
          "MESSENG": [
            {
              "station": "CHAPELLE MESSENG/A",
              "voters": 210
            }
          ],
          "METET": [
            {
              "station": "HANGAR CARREFOUR/A",
              "voters": 112
            }
          ],
          "MFIDA": [
            {
              "station": "ECOLE PUBLIQUE DE MFIDA/A",
              "voters": 143
            }
          ],
          "NDANGUENG II": [
            {
              "station": "MARCHE PERIODIQUE/A",
              "voters": 346
            }
          ],
          "NDONG": [
            {
              "station": "ECOLE PUBLIQUE DE NDONG/A",
              "voters": 375
            },
            {
              "station": "ECOLE PUBLIQUE DE NDONG/B",
              "voters": 392
            }
          ],
          "NGOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUM/A",
              "voters": 124
            }
          ],
          "NKASSOМО": [
            {
              "station": "ECOLE PUBLIQUE DE NKASSOMO/A",
              "voters": 110
            }
          ],
          "NKILZOK II, VIAN": [
            {
              "station": "HANGAR COOPERATIVE NKILZOK I/A",
              "voters": 204
            }
          ],
          "NKOLASSI": [
            {
              "station": "PETITE CHAPELLE NKOLASSI/A",
              "voters": 57
            }
          ],
          "NKOLMEFOU I": [
            {
              "station": "ECOLE PUBLIQUE NKOLMEFOU I/A",
              "voters": 360
            }
          ],
          "COMPAGNIE DE MFOU, NKOLNDA I, NKOLNDA II": [
            {
              "station": "CENTRE DE JEUNESSE/A",
              "voters": 316
            },
            {
              "station": "CENTRE DE JEUNESSE/C",
              "voters": 249
            },
            {
              "station": "CENTRE DE JEUNESSE/D",
              "voters": 378
            }
          ],
          "COMPAGNIE DE MFOU": [
            {
              "station": "CENTRE DE JEUNESSE/B",
              "voters": 341
            },
            {
              "station": "TRIBUNE DU 20 MAI/A",
              "voters": 327
            }
          ],
          "NSIMALEN AEROPORT": [
            {
              "station": "TOUR DE CONTROLE AEROPORT/A",
              "voters": 284
            }
          ],
          "NSIMALEN KLOSSASSI": [
            {
              "station": "HANGAR KLOSS ASSI/A",
              "voters": 352
            }
          ],
          "OBOUT CHEFFERIE": [
            {
              "station": "COMPLEXE TOURISTIQUE OBOUTIA",
              "voters": 73
            }
          ],
          "OBOUT ROUTE": [
            {
              "station": "PETITE CHAPELLE OBOUT/A",
              "voters": 147
            }
          ],
          "ODZA I": [
            {
              "station": "ECOLE SAINT MARTIN DE TOURS/A",
              "voters": 360
            },
            {
              "station": "ECOLE SAINT MARTIN DE TOURS/B",
              "voters": 314
            },
            {
              "station": "ECOLE SAINT MARTIN DE TOURS /C",
              "voters": 439
            },
            {
              "station": "GROUPE SCOLAIRE ENGELBERT MVENG/A",
              "voters": 362
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PUBLIQUE D'OVENG/A",
              "voters": 51
            }
          ],
          "PRISON PRINCIPALE": [
            {
              "station": "ESPLANADE PRISON/A",
              "voters": 392
            },
            {
              "station": "ESPLANADE PRISON/B",
              "voters": 132
            }
          ],
          "CENTRE ADMINISTRATIF, SECTEUR LYCEE DE MFOU": [
            {
              "station": "LYCEE DE MFOU/A",
              "voters": 329
            },
            {
              "station": "LYCEE DE MFOU/B",
              "voters": 367
            }
          ],
          "EKOK I": [
            {
              "station": "ESPLANADE CHEFFERIE EKOK I/A",
              "voters": 195
            }
          ],
          "ABANG, EKIDMEКОЕ": [
            {
              "station": "ESPLANADE CHEFF. BIBIEKIDMEKOE/A",
              "voters": 103
            }
          ],
          "EKOUMEYEN": [
            {
              "station": "ESPLANADE CHEFFERIE EKOUMEYEN/A",
              "voters": 29
            }
          ],
          "ESSABAН": [
            {
              "station": "ESPLANADE CHEFFERIE ESSABAH/А",
              "voters": 114
            }
          ],
          "LOUM": [
            {
              "station": "ESPLANADE CHEFFERIE LOUM/A",
              "voters": 105
            }
          ],
          "NDANGUENG I": [
            {
              "station": "ESPLANADE CHEFFERIE NDANGUENG I/A",
              "voters": 141
            }
          ],
          "NDZIEFIDI": [
            {
              "station": "ESPLANADE CHEFFERIE NDZIEFIDI/A",
              "voters": 107
            }
          ],
          "NKILZOKI": [
            {
              "station": "ESPLANADE CHEFFERIE NKILZOK I/A",
              "voters": 166
            }
          ],
          "NKOLMEYOS": [
            {
              "station": "ESPLANADE CHEFFERIE NKOLMEYOS/A",
              "voters": 357
            }
          ],
          "NKONDOM": [
            {
              "station": "ESPLANADE CHEFFERIE NKONDOM/A",
              "voters": 104
            }
          ],
          "VIAN": [
            {
              "station": "HANGAR COOPERATIVE VIAN/A",
              "voters": 155
            }
          ],
          "COMPAGNIE DE MFOU, COMPAGNIE DE MFOU": [
            {
              "station": "E.P DE MFOU GROUPE III/A",
              "voters": 119
            }
          ],
          "MENDONG I": [
            {
              "station": "GSB LA REVELATION DIVINE/A",
              "voters": 275
            }
          ],
          "MENDONG II": [
            {
              "station": "GSB MEWABO /A",
              "voters": 405
            }
          ],
          "MFOU VILLAGE": [
            {
              "station": "LYCEE TECHNIQUE DE MFOU/A",
              "voters": 318
            }
          ],
          "MINKANG": [
            {
              "station": "ECOLE ST MICHEL ARCHANGE/A",
              "voters": 350
            },
            {
              "station": "ECOLE ST MICHEL ARCHANGE/B",
              "voters": 162
            }
          ],
          "AKOK, NKOLNGUET": [
            {
              "station": "GSB GUSTAVE EIFFEL/A",
              "voters": 364
            },
            {
              "station": "GSB GUSTAVE EIFFEL/B",
              "voters": 131
            }
          ],
          "CHATEAU, CHÂTEAU": [
            {
              "station": "EDUCARE NURSERY AND PRIMARY SCHOOL/ A",
              "voters": 349
            },
            {
              "station": "EDUCARE NURSERY AND PRIMARY SCHOOL/ B",
              "voters": 353
            }
          ],
          "AKOK, BENEBALOT, NKONGOA": [
            {
              "station": "CETIC DE NKONGOA/A",
              "voters": 411
            },
            {
              "station": "CETIC DE NKONGOA/B",
              "voters": 396
            },
            {
              "station": "CETIC DE NKONGOA/C",
              "voters": 445
            },
            {
              "station": "CETIC DE NKONGOA/D",
              "voters": 357
            }
          ],
          "ZALOM": [
            {
              "station": "COMPLEXE BILINGUE LA FRATERNITE /A",
              "voters": 240
            }
          ],
          "ENDOM, ENDOUM": [
            {
              "station": "ECOLE PUBLIQUE D'ENDOM/A",
              "voters": 154
            }
          ],
          "NKOLNDA I ET II": [
            {
              "station": "GROUPE SCOLAIRE LES MEILLEURS/A",
              "voters": 422
            },
            {
              "station": "GROUPE SCOLAIRE LES MEILLEURS/B",
              "voters": 101
            }
          ],
          "ABANG-NKONGOA, NDANKО": [
            {
              "station": "PETIT CHAPELLE OSSOL/A",
              "voters": 224
            }
          ],
          "ABANG-NKONGOA": [
            {
              "station": "LYCEE D'ABANG-NKONGOA/A",
              "voters": 399
            },
            {
              "station": "LYCEE D'ABANG-NKONGOA/C",
              "voters": 415
            }
          ],
          "ABANG-NKONGOА": [
            {
              "station": "LYCEE D'ABANG-NKONGOA/B",
              "voters": 436
            }
          ],
          "MAETUR NKONDOM": [
            {
              "station": "ESPLANADE MAETUR NKONDOM/A",
              "voters": 81
            }
          ],
          "NDONG-BELLE MAISON": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE PAUL ET JEAN IA",
              "voters": 174
            }
          ],
          "NKOLNDA - NKOLMEDZAP": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES PETITS RUSSES/A",
              "voters": 29
            }
          ],
          "NDONG, NDONG": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES BAMBINOS TA",
              "voters": 20
            }
          ],
          "NLOBISSON I": [
            {
              "station": "CHAPELLE MBALNGONG/A",
              "voters": 33
            }
          ],
          "ASSOK": [
            {
              "station": "ECOLE PUBLIQUE D'ASSOK/A",
              "voters": 93
            }
          ],
          "NSIMALEN": [
            {
              "station": "LYCEE DE MBELOA/A",
              "voters": 28
            }
          ],
          "NKOLNGOCK": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE JOHN F KENNEDY/A",
              "voters": 481
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE JOHN F KENNEDY/B",
              "voters": 96
            }
          ],
          "NSIMALEN VILLAGE": [
            {
              "station": "HANGAR ROND POINT NSIMALEN/A",
              "voters": 347
            }
          ]
        },
        "NKOLAFAMBA": {
          "ABANG, MEVEN": [
            {
              "station": "PALAIS DU PEUPLE TSINGA/A",
              "voters": 121
            }
          ],
          "ABANGA, EFANDI, MINDZIE": [
            {
              "station": "ECOLE PUBLIQUE D'ABANGA/A",
              "voters": 159
            }
          ],
          "AFAN, NKOLAFAMBA": [
            {
              "station": "PLACE DES FETES DE NKOLAFAMBA/A",
              "voters": 414
            },
            {
              "station": "PLACE DES FETES DE NKOLAFAMBA/B",
              "voters": 107
            }
          ],
          "AKAM": [
            {
              "station": "ECOLE CATHOLIQUE D'OMVAN/A",
              "voters": 89
            }
          ],
          "ANYOUNGOMI, ANYOUNGOM II": [
            {
              "station": "ECOLE PUBLIQUE D'ANGYOUNGOM/A",
              "voters": 169
            }
          ],
          "ATOASI, ZOK II": [
            {
              "station": "SALLE DE LA CAMEROUNAISE DES EAUX/A",
              "voters": 47
            }
          ],
          "BITOTOL": [
            {
              "station": "ECOLE PUBLIQUE DE BITOTOL/A",
              "voters": 413
            },
            {
              "station": "ECOLE PUBLIQUE DE BITOTOL/B",
              "voters": 316
            }
          ],
          "DZOUZOК": [
            {
              "station": "ECOLE PUBLIQUE DE DZOUZOK/A",
              "voters": 86
            }
          ],
          "EKOM": [
            {
              "station": "CETIC D'EKOM/A",
              "voters": 232
            }
          ],
          "EKOUMEYEN": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUMEYEN/A",
              "voters": 68
            }
          ],
          "EYO": [
            {
              "station": "ECOLE PUBLIQUE D'EYO/A",
              "voters": 97
            }
          ],
          "LADA I": [
            {
              "station": "ECOLE PUBLIQUE DE LADA/A",
              "voters": 318
            },
            {
              "station": "ECOLE PUBLIQUE DE LADA/B",
              "voters": 412
            }
          ],
          "LADA I, LADA II": [
            {
              "station": "CHAPELLE DU CARREFOUR DE LADA II/A",
              "voters": 266
            },
            {
              "station": "CHAPELLE DU CARREFOUR DE LADA II/B",
              "voters": 292
            },
            {
              "station": "CHAPELLE DU CARREFOUR DE LADA II/C",
              "voters": 286
            }
          ],
          "MBOUN": [
            {
              "station": "ECOLE MODIBO DIARRA DE MBOUN/A",
              "voters": 303
            }
          ],
          "MEHANDAN I": [
            {
              "station": "ECOLE PUBLIQUE DE MEHANDAN 1/A",
              "voters": 276
            },
            {
              "station": "ECOLE PUBLIQUE DE MEHANDAN I/B",
              "voters": 240
            }
          ],
          "NGALAN": [
            {
              "station": "CHAPELLE DE NGALAN /A",
              "voters": 104
            }
          ],
          "NGANG II": [
            {
              "station": "ECOLE PUBLIQUE DE NGANG II/A",
              "voters": 140
            }
          ],
          "NKOABANG, NKOABANG, NKOABANG": [
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/A",
              "voters": 371
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/B",
              "voters": 322
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/C",
              "voters": 271
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/D",
              "voters": 292
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/E",
              "voters": 288
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/F",
              "voters": 254
            },
            {
              "station": "SALLE PAROISSE MISSION CATH. DE NKOABANG/G",
              "voters": 282
            }
          ],
          "NKOLANGA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLANGA/A",
              "voters": 378
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLANGA/B",
              "voters": 318
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLANGA/C",
              "voters": 218
            }
          ],
          "NKOLBIKOGO": [
            {
              "station": "COLLEGE PERE MONTI/A",
              "voters": 419
            },
            {
              "station": "COLLEGE PERE MONTI/B",
              "voters": 246
            },
            {
              "station": "COLLEGE PERE MONTI/C",
              "voters": 229
            }
          ],
          "NKOLAFAMBA, NKOLMEYANG I": [
            {
              "station": "CHAPELLE FOE/A",
              "voters": 99
            }
          ],
          "NKOLMEYANG I, NKOLMEYANG II, NKOLMEYANG III": [
            {
              "station": "SALLE PAROISSIALE MISSION CATH. DE NKOL./A",
              "voters": 329
            },
            {
              "station": "SALLE PAROISSIALE MISSION CATH. DE NKOL./B",
              "voters": 206
            }
          ],
          "NKOLNGOE, ZOK I": [
            {
              "station": "CES DE ZOK/A",
              "voters": 147
            }
          ],
          "NKOABANG, NKOLANGA, NKOLO I": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/A",
              "voters": 363
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/B",
              "voters": 346
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/C",
              "voters": 326
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/D",
              "voters": 339
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/I",
              "voters": 156
            }
          ],
          "NKOABANG, NKOLANGA": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/E",
              "voters": 308
            }
          ],
          "NKOABANG, NKOLANGA, NKOLO": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/F",
              "voters": 319
            },
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/G",
              "voters": 292
            }
          ],
          "NKOLANGA, NKOLO I": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOABANG/H",
              "voters": 260
            }
          ],
          "NKOLO I, NKOLO II, NKOLO III": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLO III/C",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO III/D",
              "voters": 289
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO III/E",
              "voters": 202
            }
          ],
          "NKOMESSEBE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOMESSEBE/A",
              "voters": 71
            }
          ],
          "BITENG, BITENG": [
            {
              "station": "GROUPE SCOLAIRE PERE FRANCOIS/A",
              "voters": 279
            },
            {
              "station": "GROUPE SCOLAIRE PERE FRANCOIS/B",
              "voters": 441
            },
            {
              "station": "GROUPE SCOLAIRE PERE FRANCOIS/C",
              "voters": 442
            },
            {
              "station": "GROUPE SCOLAIRE PERE FRANCOIS/D",
              "voters": 447
            }
          ],
          "BITENG": [
            {
              "station": "GROUPE SCOLAIRE PERE FRANÇOIS/A",
              "voters": 231
            }
          ],
          "EBOLMEDZOM": [
            {
              "station": "ECOLE PRIVEE LES FUTURISTES/A",
              "voters": 328
            },
            {
              "station": "ECOLE PRIVEE LES FUTURISTES/B",
              "voters": 318
            },
            {
              "station": "ECOLE PRIVEE LES FUTURISTES/C",
              "voters": 262
            },
            {
              "station": "G.S. FUTURISTE/A",
              "voters": 486
            },
            {
              "station": "G.S. FUTURISTE/B",
              "voters": 333
            }
          ],
          "NKOABANG": [
            {
              "station": "COMPLEXE SCOLAIRE SACRE CHARLEMAGNE/A",
              "voters": 315
            },
            {
              "station": "COMPLEXE SCOLAIRE SACRE CHARLEMAGNE/B",
              "voters": 113
            }
          ],
          "NKOABANG, NKOLOI": [
            {
              "station": "LYCEE DE NKOABANG /A",
              "voters": 451
            },
            {
              "station": "LYCEE DE NKOABANG/B",
              "voters": 481
            }
          ],
          "NKOABANG, NKOLO I": [
            {
              "station": "LYCEE DE NKOABANG /C",
              "voters": 486
            },
            {
              "station": "LYCEE DE NKOABANG/D",
              "voters": 486
            },
            {
              "station": "LYCEE DE NKOABANG/E",
              "voters": 172
            }
          ],
          "NKOABANG, NKOABANG, NKOLO I": [
            {
              "station": "CENTRE DE SANTE MARCEL KONO/A",
              "voters": 382
            }
          ],
          "NKOABANG, NKOABANG, NKOLO": [
            {
              "station": "CENTRE DE SANTE MARCEL KONO/B",
              "voters": 181
            }
          ],
          "NKOLO I": [
            {
              "station": "ECOLE PRIVEE DI ANGELIS/A",
              "voters": 321
            },
            {
              "station": "COLLEGE EBAGES/E",
              "voters": 442
            }
          ],
          "NKOLO": [
            {
              "station": "ECOLE PRIVEE DI ANGELIS/B",
              "voters": 312
            },
            {
              "station": "GROUPE SCOLAIRE EMERGENCE/B",
              "voters": 177
            }
          ],
          "NKOLO II": [
            {
              "station": "COLLEGE EBAGES/A",
              "voters": 425
            },
            {
              "station": "COLLEGE EBAGES /B",
              "voters": 432
            },
            {
              "station": "COLLEGE EBAGES/C",
              "voters": 440
            },
            {
              "station": "COLLEGE EBAGES/D",
              "voters": 438
            },
            {
              "station": "COLLEGE EBAGES/F",
              "voters": 237
            },
            {
              "station": "ECOLE PRIVEE NOGUEM/A",
              "voters": 324
            },
            {
              "station": "GROUPE SCOLAIRE EMERGENCE TA",
              "voters": 406
            }
          ],
          "NKOMBASSI": [
            {
              "station": "SGROUPE SCOLAIRE SAINT BARTHELEMY/IA",
              "voters": 341
            }
          ],
          "NKOULOU": [
            {
              "station": "ECOLE PRIVEE LES ALEVINS/A",
              "voters": 285
            },
            {
              "station": "ECOLE PRIVEE SAINT MATHIEU/A",
              "voters": 401
            },
            {
              "station": "ECOLE PRIVEE SAINT MATHIEU/B",
              "voters": 87
            },
            {
              "station": "G.S. AFRICA FIRST/A",
              "voters": 487
            },
            {
              "station": "G.S. AFRICA FIRST/B",
              "voters": 490
            },
            {
              "station": "G.S. AFRICA FIRST/C",
              "voters": 259
            }
          ],
          "NSAZOMO": [
            {
              "station": "GROUPE SCOLAIRE LA SOLIDARITE/A",
              "voters": 154
            },
            {
              "station": "G.S. SOLIDARITE/A",
              "voters": 484
            },
            {
              "station": "G.S. SOLIDARITE/B",
              "voters": 73
            }
          ],
          "NSAZOMO, NSAZOMО": [
            {
              "station": "HANGAR CARREFOUR LES TROIS TOMBEAUX IA",
              "voters": 143
            }
          ],
          "SAKOK": [
            {
              "station": "GROUPE SCOLAIRE SAINT CHRISTOPHE/A",
              "voters": 105
            }
          ],
          "NOUVEAU QUARTIER NKOMBASSI": [
            {
              "station": "GROUPE SCOLAIRE VERT FORET/A",
              "voters": 28
            }
          ],
          "ABOELON": [
            {
              "station": "SALLE DE FETE ABOELON/A",
              "voters": 51
            }
          ],
          "ABOMBО": [
            {
              "station": "CHAPELLE ABOMBO/A",
              "voters": 46
            }
          ],
          "EFANDI": [
            {
              "station": "ESPLANADE SODECAO/A",
              "voters": 151
            }
          ],
          "MEBANG, NKONGMELEN": [
            {
              "station": "STADE NKONGMELEN/A",
              "voters": 97
            }
          ],
          "NDIBISSONG": [
            {
              "station": "CARREFOUR NDIBISSON/A",
              "voters": 75
            }
          ],
          "NGANG I": [
            {
              "station": "E.P NGANG I/A",
              "voters": 54
            }
          ],
          "NKIL": [
            {
              "station": "E.P NKIL/A",
              "voters": 94
            }
          ],
          "NKOLOBОМ": [
            {
              "station": "E.P NKOL-OBOM/A",
              "voters": 86
            }
          ],
          "NLOBISSON": [
            {
              "station": "G.S VISION/A",
              "voters": 488
            },
            {
              "station": "G.S VISION/B",
              "voters": 306
            }
          ],
          "MBAKA, MEBOU": [
            {
              "station": "CARREFOUR/A",
              "voters": 68
            }
          ]
        },
        "Olanguina": {
          "AKOMKADA": [
            {
              "station": "HANGAR MARCHE D'AKOMKADA/A",
              "voters": 78
            }
          ],
          "AKONDO": [
            {
              "station": "CHAPELLE D'AKONDO /A",
              "voters": 48
            }
          ],
          "ALANGUENA OLANGUINA I": [
            {
              "station": "HANGAR MARCHE D'ALANGUENA/A",
              "voters": 118
            }
          ],
          "AYENE CARRIERE": [
            {
              "station": "ECOLE PUBLIQUE DE TOP/A",
              "voters": 75
            }
          ],
          "AYENE I": [
            {
              "station": "ECOLE PUBLIQUE D'AYENE/A",
              "voters": 157
            }
          ],
          "EKOMBITIE": [
            {
              "station": "ECOLE PUBLIQUE D'EKOMBITIE/A",
              "voters": 139
            }
          ],
          "EMVAN": [
            {
              "station": "ECOLE PUBLIQUE D'EMVAN/A",
              "voters": 110
            }
          ],
          "KAH": [
            {
              "station": "CHAPELLE DE KAH/A",
              "voters": 56
            }
          ],
          "KOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE KOMBO/A",
              "voters": 118
            }
          ],
          "MFOU-ASSAMBA": [
            {
              "station": "ECOLE PUBLIQUE DE MFOU-ASSAMBA/A",
              "voters": 101
            }
          ],
          "MVEM": [
            {
              "station": "CHAPELLE DE MVEM/A",
              "voters": 113
            }
          ],
          "MVOLO": [
            {
              "station": "CHAPELLE DE MVOLO/A",
              "voters": 125
            }
          ],
          "NGOSSE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOSSE/A",
              "voters": 127
            }
          ],
          "NKOLESSONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLESSONG/A",
              "voters": 91
            }
          ],
          "NKOLTOР": [
            {
              "station": "HANGAR MARCHE DE NKOLTOP/A",
              "voters": 123
            }
          ],
          "NKOSSO OLANGUINA I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOSSO/A",
              "voters": 110
            }
          ],
          "OLANGUINA I OLANGUINA II": [
            {
              "station": "HANGAR MARCHE D'OLANGUINA/A",
              "voters": 225
            },
            {
              "station": "ECOLE PUBLIQUE D'OLANGUINA/A",
              "voters": 109
            }
          ],
          "SANGUELA": [
            {
              "station": "CHAPELLE DE SANGUELA/A",
              "voters": 49
            }
          ],
          "YEMEKOМ": [
            {
              "station": "CHAPELLE DE YEMEKOM/A",
              "voters": 94
            }
          ],
          "MIMBANG": [
            {
              "station": "ECOLE MATERNELLE DE MIMBANG/A",
              "voters": 153
            }
          ],
          "ESSONG-ASSI": [
            {
              "station": "ECOLE PUBLIQUE DE NYENG/A",
              "voters": 95
            }
          ]
        },
        "Soa": {
          "AKAK I": [
            {
              "station": "ECOLE PUBLIQUE D'AKAKI/A",
              "voters": 379
            },
            {
              "station": "ECOLE PUBLIQUE D'AKAKI/B",
              "voters": 398
            },
            {
              "station": "ECOLE PUBLIQUE D'AKAKI/C",
              "voters": 204
            }
          ],
          "AKAK II": [
            {
              "station": "CASE CHAPELLE D'AKAK II/A",
              "voters": 128
            }
          ],
          "ANDON": [
            {
              "station": "HANGAR CARREFOUR D'ANDON/A",
              "voters": 406
            }
          ],
          "EBANGI EBANG II": [
            {
              "station": "ECOLE PUBLIQUE D'EBANG/A",
              "voters": 404
            },
            {
              "station": "ECOLE PUBLIQUE D'EBANG/C",
              "voters": 417
            }
          ],
          "EBANGI EBANG": [
            {
              "station": "ECOLE PUBLIQUE D'EBANG/B",
              "voters": 392
            }
          ],
          "EBOGO I": [
            {
              "station": "ECOLE PRIVEE BILINGUE LES MYRIADES/A",
              "voters": 354
            },
            {
              "station": "ECOLE PRIVEE BILINGUE LES MYRIADES/B",
              "voters": 352
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE ANGE ET LEONCE/A",
              "voters": 296
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE ANGE ET LEONCE/B",
              "voters": 129
            }
          ],
          "EBOGO": [
            {
              "station": "ECOLE PRIVEE BILINGUE LES MYRIADES/C",
              "voters": 168
            },
            {
              "station": "E.M.E.C. DE MBEDOUMOU/A",
              "voters": 396
            },
            {
              "station": "E.M.E.C. DE MBEDOUMOU/B",
              "voters": 150
            }
          ],
          "EBOGO II": [
            {
              "station": "CASE CHAPELLE D'EBOGO II/A",
              "voters": 117
            },
            {
              "station": "ECOLE PUBLIQUE D'EBOGO III/A",
              "voters": 117
            }
          ],
          "EBOGO IV NKOZOA": [
            {
              "station": "ESPLANADE HANGAR CHEFFERIE/A",
              "voters": 90
            }
          ],
          "ESSIMEL": [
            {
              "station": "CASE CHAPELLE D'ESSIMEL/A",
              "voters": 92
            }
          ],
          "ESSONG-MINTSANG": [
            {
              "station": "CHAPELLE D'ESSONG-MINTSANG/A",
              "voters": 112
            }
          ],
          "FOULASSI NGALI I NKOMETOU I": [
            {
              "station": "CHAPELLE FOULASSI/A",
              "voters": 61
            }
          ],
          "KOULOU": [
            {
              "station": "ECOLE PUBLIQUE DE KOULOU/A",
              "voters": 92
            }
          ],
          "MBANSAN I MEYOS": [
            {
              "station": "ECOLE PUBLIQUE DE MBANSAN/A",
              "voters": 186
            }
          ],
          "MBANSAN II": [
            {
              "station": "LYCEE DE MBANSAN/A",
              "voters": 349
            }
          ],
          "MEBOUGOU": [
            {
              "station": "CETIC DE MEBOUGOU/A",
              "voters": 97
            }
          ],
          "MEYOS": [
            {
              "station": "ESPLANADE PESAGE DE MEYOS/A",
              "voters": 388
            }
          ],
          "NGALI I": [
            {
              "station": "ECOLE PUBLIQUE DE NGALI II/A",
              "voters": 209
            }
          ],
          "NGOUNGOUMOU": [
            {
              "station": "CHAPELLE DE NGOUNGOUMOU/A",
              "voters": 50
            }
          ],
          "NKOLFOULOU I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/A",
              "voters": 366
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/B",
              "voters": 337
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/C",
              "voters": 319
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/D",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/E",
              "voters": 392
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLFOULOU/F",
              "voters": 242
            },
            {
              "station": "COLLEGE WAGUE/A",
              "voters": 431
            },
            {
              "station": "COLLEGE WAGUE/B",
              "voters": 219
            },
            {
              "station": "PALAI BILINGUAL SCHOOL COMPLEX/A",
              "voters": 140
            }
          ],
          "NKOLFOULOU II": [
            {
              "station": "E.N.I.E.T DE SOA/A",
              "voters": 338
            },
            {
              "station": "E.N.I.E.T DE SOA/B",
              "voters": 392
            },
            {
              "station": "E.N.I.E.T DE SOA/C",
              "voters": 179
            },
            {
              "station": "MARIE CURIE BILINGUAL SCHOOL MACBIS /A",
              "voters": 63
            }
          ],
          "NKOLNGOCK SOA ECOLE PUBLIQUE": [
            {
              "station": "ECOLE CATHOLIQUE ST MARC/A",
              "voters": 323
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/B",
              "voters": 256
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/C",
              "voters": 245
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/D",
              "voters": 232
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/E",
              "voters": 306
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/F",
              "voters": 251
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/G",
              "voters": 306
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/H",
              "voters": 221
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/I",
              "voters": 221
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC / J",
              "voters": 316
            },
            {
              "station": "ECOLE CATHOLIQUE ST MARC/K",
              "voters": 224
            }
          ],
          "NKOLTSIT": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLTSIT/A",
              "voters": 181
            }
          ],
          "NKOMETOU I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOMETOU/A",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOMETOU/B",
              "voters": 215
            }
          ],
          "NKOZOA": [
            {
              "station": "GROUPE SCOLAIRE LES CITOYENS/A",
              "voters": 416
            },
            {
              "station": "GROUPE SCOLAIRE LES CITOYENS/В",
              "voters": 354
            },
            {
              "station": "GROUPE SCOLAIRE LES CITOYENS/C",
              "voters": 378
            },
            {
              "station": "GROUPE SCOLAIRE LES CITOYENS/D",
              "voters": 376
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE BELLA REINE /A",
              "voters": 474
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE BELLA REINE/B",
              "voters": 314
            }
          ],
          "NTOUESSONG IV": [
            {
              "station": "HANGAR MARCHE DE BABA/A",
              "voters": 408
            },
            {
              "station": "HANGAR MARCHE DE BABA/B",
              "voters": 146
            }
          ],
          "NTOUESSONG V": [
            {
              "station": "ECOLE PUBLIQUE DE NTOUESSONG V/A",
              "voters": 152
            }
          ],
          "NTOUESSONG VI NTOUESSONG VIII": [
            {
              "station": "CASE CHAPELLE NTOUESSONG VI/A",
              "voters": 64
            }
          ],
          "NTOUESSONG VII": [
            {
              "station": "CENTRE DE SANTE NTOUESSONG VII/A",
              "voters": 377
            }
          ],
          "NTOUESSONG IX": [
            {
              "station": "CHAPELLE E.P.C/A",
              "voters": 134
            }
          ],
          "OBOA": [
            {
              "station": "ECOLE PUBLIQUE D'OBOA/A",
              "voters": 104
            }
          ],
          "OKOA": [
            {
              "station": "CENTRE DE SANTE D'OKOA/A",
              "voters": 274
            }
          ],
          "ONGANDI": [
            {
              "station": "CHAPELLE DE NKOLNLONG/A",
              "voters": 78
            }
          ],
          "SOA CHATEAU": [
            {
              "station": "ECOLE PRIVEE LES AMIS D'ANGE/A",
              "voters": 292
            },
            {
              "station": "ECOLE PRIVEE LES AMIS D'ANGE /B",
              "voters": 269
            },
            {
              "station": "ECOLE PRIVEE LES AMIS D'ANGE/C",
              "voters": 215
            },
            {
              "station": "ECOLE PRIVEE LES AMIS D'ANGE /D",
              "voters": 371
            }
          ],
          "SOA DALLAS": [
            {
              "station": "COLLEGE PRIVE D'ELITES DE SOA/A",
              "voters": 356
            },
            {
              "station": "COLLEGE PRIVE D'ELITES DE SOA/B",
              "voters": 327
            }
          ],
          "SOA ECOLE PUBLIQUE": [
            {
              "station": "ECOLE PUBLIQUE DE SOA/A",
              "voters": 383
            },
            {
              "station": "ECOLE PUBLIQUE DE SOA/B",
              "voters": 349
            },
            {
              "station": "ECOLE PUBLIQUE DE SOA/C",
              "voters": 72
            }
          ],
          "SOA GENDARMERIE": [
            {
              "station": "ECOLE PRIVEE D'ELITES DE SOA/A",
              "voters": 286
            },
            {
              "station": "ECOLE PRIVEE D'ELITES DE SOA/B",
              "voters": 380
            },
            {
              "station": "ECOLE PRIVEE D'ELITES DE SOA/C",
              "voters": 302
            },
            {
              "station": "ECOLE PRIVEE D'ELITES DE SOA/D",
              "voters": 413
            }
          ],
          "SOA LYCЕЕ": [
            {
              "station": "LYCEE DE SOA/А",
              "voters": 264
            }
          ],
          "SOA LYCEE": [
            {
              "station": "LYCEE DE SOA/В",
              "voters": 274
            },
            {
              "station": "LYCEE DE SOA/C",
              "voters": 270
            },
            {
              "station": "LYCEE DE SOA/F",
              "voters": 251
            },
            {
              "station": "LYCEE DE SOA/G",
              "voters": 268
            }
          ],
          "SOA LYСЕЕ": [
            {
              "station": "LYCEE DE SOA/D",
              "voters": 271
            },
            {
              "station": "LYCEE DE SOA/E",
              "voters": 307
            }
          ],
          "SOA SOUS-PREFECTURE": [
            {
              "station": "ESPLANADE MAIRIE DE SOA/A",
              "voters": 347
            },
            {
              "station": "ESPLANADE MAIRIE DE SOA/B",
              "voters": 290
            },
            {
              "station": "ESPLANADE MAIRIE DE SOA/C",
              "voters": 271
            },
            {
              "station": "E.P GROUPE I SOA/A",
              "voters": 319
            },
            {
              "station": "E.P GROUPE I SOA/B",
              "voters": 108
            }
          ],
          "SOA VALLEE": [
            {
              "station": "ECOLE PRIVEE LE BON BERGER/A",
              "voters": 299
            },
            {
              "station": "ECOLE PRIVEE LE BON BERGER/ В",
              "voters": 55
            }
          ],
          "FOULASSI NGALII": [
            {
              "station": "CHAPELLE NGALII/A",
              "voters": 151
            }
          ],
          "OVANGOUL": [
            {
              "station": "CHAPELLE OVANGOUL/A",
              "voters": 84
            }
          ],
          "NTOUESSONG VIII": [
            {
              "station": "CASE CHAPELLE NTOUESSONG VIII/A",
              "voters": 276
            },
            {
              "station": "CASE CHAPELLE NTOUESSONG VIII/B",
              "voters": 77
            },
            {
              "station": "CENTRE DE SANTE D'OKARABELLE/A",
              "voters": 484
            }
          ],
          "TING MELEN": [
            {
              "station": "CENTRE DE SANTE TING MELEN/A",
              "voters": 71
            }
          ],
          "BANDA": [
            {
              "station": "G.S.B LA VIGNE /A",
              "voters": 293
            },
            {
              "station": "G.S.B LA VIGNE/B",
              "voters": 445
            },
            {
              "station": "G.S.B LA VIGNE/C",
              "voters": 181
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES CAMEROUNAIS DE DEMAIN/A",
              "voters": 441
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES CAMEROUNAIS DE DEMAIN/B",
              "voters": 443
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES CAMEROUNAIS DE DEMAIN/C",
              "voters": 440
            }
          ],
          "NKOLMBONG": [
            {
              "station": "LYCEE TECHNIQUE DE SOA/A",
              "voters": 287
            }
          ],
          "NKOLFOULOU": [
            {
              "station": "COLLEGE SAINT FRANÇOIS D'ASSISES/A",
              "voters": 273
            }
          ],
          "NOUVELLE SOUS PREFECTURE": [
            {
              "station": "COMPLEXE SCOLAIRE NOTRE DAME DE LOURDES/A",
              "voters": 411
            },
            {
              "station": "COMPLEXE SCOLAIRE NOTRE DAME DE LOURDES/B",
              "voters": 174
            }
          ],
          "SOA FIN GOUDRON": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES FRERES/A",
              "voters": 361
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES FRERES/B",
              "voters": 206
            }
          ],
          "NKOZOA CHAMP DE TIR": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE MOUGANG PASCAL/A",
              "voters": 478
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MOUGANG PASCAL/B",
              "voters": 459
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MOUGANG PASCAL/C",
              "voters": 275
            }
          ],
          "NKOZOA CARRIERE": [
            {
              "station": "LYCEE MODERNE DE NKOZOA/A",
              "voters": 294
            }
          ],
          "ABONDO": [
            {
              "station": "LYCEE D'ABONDO/A",
              "voters": 227
            }
          ],
          "NSAN": [
            {
              "station": "VISITE TECHNIQUE AUTOMOBILE /A",
              "voters": 423
            }
          ],
          "SOA RADIO": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC LES CAMELAS/A",
              "voters": 442
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC LES CAMELAS/B",
              "voters": 432
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC LES CAMELAS/C",
              "voters": 439
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC LES CAMELAS/D",
              "voters": 437
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC LES CAMELAS/E",
              "voters": 75
            }
          ]
        }
      },
      "MEFOU-ET-AKONO": {
        "Akono": {
          "ADZAP": [
            {
              "station": "ECOLE PUBLIQUE OYACK/A",
              "voters": 137
            }
          ],
          "AKONO I-DZAMTEWUNTUG": [
            {
              "station": "CASE A PALABRES DZAMTEWUNTUG/A",
              "voters": 129
            }
          ],
          "AKONO I-NKONGNEN": [
            {
              "station": "CASE A PALABRES NKONGNEN/A",
              "voters": 219
            }
          ],
          "AKONO I NKOLAKONO II": [
            {
              "station": "CASE A PALABRES AKONO II/A",
              "voters": 178
            }
          ],
          "AKONO-CENTRE": [
            {
              "station": "BIBLOTHEQUE MUNICIPALE/A",
              "voters": 248
            },
            {
              "station": "FOYER MUNICIPAL/A",
              "voters": 199
            },
            {
              "station": "CENTRE DE JEUNESSE/A",
              "voters": 309
            },
            {
              "station": "CENTRE DE JEUNESSE/B",
              "voters": 225
            }
          ],
          "ANDOCK DOUM": [
            {
              "station": "ECOLE PUBLIQUE DOUM/A",
              "voters": 254
            }
          ],
          "BILIK I": [
            {
              "station": "SALLE DE REUNION DE BILIK I/A",
              "voters": 126
            }
          ],
          "BILIK II OKOMBE": [
            {
              "station": "CASE A PALABRES BILIKI/A",
              "voters": 141
            },
            {
              "station": "CASE A PALABRES BILIK II/A",
              "voters": 52
            }
          ],
          "EKOUMDOUM": [
            {
              "station": "CASE A PALABRES EKOUMDOUM/A",
              "voters": 187
            }
          ],
          "FEGMIMBANG I": [
            {
              "station": "HANGAR MARCHE FEGMIMBANG/ A",
              "voters": 331
            }
          ],
          "FEGMIMBANG III": [
            {
              "station": "ECOLE PUBLIQUE FEGMIMBANG/A",
              "voters": 170
            }
          ],
          "NKOLAKONO I NKOLNLONG I": [
            {
              "station": "CES NKOLNLONG/A",
              "voters": 146
            }
          ],
          "MEZALI": [
            {
              "station": "ECOLE PUBLIQUE MEZALI/A",
              "voters": 113
            }
          ],
          "MFIDA I": [
            {
              "station": "ECOLE PUBLIQUE MFIDA/A",
              "voters": 277
            }
          ],
          "MFIDA II": [
            {
              "station": "HANGAR MARCHE MFIDA II/A",
              "voters": 127
            }
          ],
          "MFIDA III": [
            {
              "station": "CASE A PALABRES MFIDA III/A",
              "voters": 148
            }
          ],
          "MFIDA IV": [
            {
              "station": "CASE A PALABRES MFIDA IV/A",
              "voters": 86
            }
          ],
          "NDAGUENG": [
            {
              "station": "ECOLE PUBLIQUE NKOLNLONG/A",
              "voters": 64
            }
          ],
          "NGAMBA": [
            {
              "station": "CASE A PALABRES NGAMBA/A",
              "voters": 111
            }
          ],
          "NKOLAKONO I": [
            {
              "station": "ESPLANADE NOTABLE NKOLAKONO 1/A",
              "voters": 121
            }
          ],
          "NKOLNEGBE": [
            {
              "station": "ECOLE PUBLIQUE NKOLNEGBE/A",
              "voters": 76
            }
          ],
          "NKOLBONDI NKONGNTSAM": [
            {
              "station": "ECOLE PUBLIQUE NKONGNTSAM/A",
              "voters": 309
            }
          ],
          "NKOLNLONG III SIM": [
            {
              "station": "CASE A PALABRES NKOLNLONG III/A",
              "voters": 106
            }
          ],
          "NKONGNTSAM": [
            {
              "station": "ECOLE PUBLIQUE NKONGTSAM/A",
              "voters": 183
            }
          ],
          "ONANGONDI": [
            {
              "station": "CASE A PALABRES ONANGONDI/A",
              "voters": 254
            },
            {
              "station": "CASE CHAPELLE NKOM-ONAGONDI/A",
              "voters": 56
            }
          ],
          "OSSOEMIMBANG": [
            {
              "station": "ESPLANADE CASE NOTABLE OSSOEMIMBANG/A",
              "voters": 70
            }
          ],
          "OVANGOUL II OVANGOUL III": [
            {
              "station": "ECOLE PUBLIQUE OVANGOUL/A",
              "voters": 250
            }
          ],
          "OYACK": [
            {
              "station": "CASE A PALABRES OYACK/A",
              "voters": 60
            }
          ],
          "ZOALOUMA": [
            {
              "station": "ECOLE PUBLIQUE ZOALOUMA/A",
              "voters": 92
            }
          ],
          "NKOLNLONG II": [
            {
              "station": "EP NKOLNLONG I/A",
              "voters": 193
            }
          ],
          "MBENG": [
            {
              "station": "SALLE DE REUNION MBENG/A",
              "voters": 41
            }
          ],
          "NKOELON EKOUMDOUM NKOLELON": [
            {
              "station": "CASE A PALABRES NKOELON/A",
              "voters": 115
            }
          ]
        },
        "Bikok": {
          "ABANG": [
            {
              "station": "ECOLE PUBLIQUE ABANG/A",
              "voters": 316
            }
          ],
          "ABANG-MINDI": [
            {
              "station": "MINDI ECOLE CATHOLIQUE -ABANG/A",
              "voters": 215
            },
            {
              "station": "E.P. DE NKELESSI/A",
              "voters": 68
            }
          ],
          "AKOK BEKOE": [
            {
              "station": "ECOLE PUBLIQUE AKOK BEKOE/A",
              "voters": 150
            }
          ],
          "ANDOCK EVINDISSI I": [
            {
              "station": "ECOLE PUBLIQUE ANDOCK/A",
              "voters": 219
            }
          ],
          "BIKOK": [
            {
              "station": "ECOLE PUBLIQUE BIKOK - (B)/A",
              "voters": 253
            },
            {
              "station": "ECOLE PUBLIQUE BIKOK-(B)/B",
              "voters": 154
            },
            {
              "station": "ECOLE PUBLIQUE BIKOK VILLE- (A)/A",
              "voters": 223
            }
          ],
          "EKOMBITIE": [
            {
              "station": "SAR/SM BIKOK/A",
              "voters": 116
            }
          ],
          "BIKOLOG BIKOME": [
            {
              "station": "ECOLE PUBLIQUE BIKOLOG BIKOME/A",
              "voters": 98
            }
          ],
          "BIKOP": [
            {
              "station": "BIKOP (CES)/A",
              "voters": 285
            },
            {
              "station": "BIKOP (CES)/B",
              "voters": 142
            }
          ],
          "EBAKOA": [
            {
              "station": "ECOLE PUBLIQUE EBAKOA/A",
              "voters": 208
            }
          ],
          "EBANG MENGONG": [
            {
              "station": "ECOLE PUBLIQUE EBANG MENGONG/A",
              "voters": 143
            }
          ],
          "EBOUG MENYOU": [
            {
              "station": "CES EBOUG MENYOU/A",
              "voters": 118
            }
          ],
          "ESSAZOK II": [
            {
              "station": "ESSAZOK II CASE A PALABRE/A",
              "voters": 149
            }
          ],
          "EVINDISSI I": [
            {
              "station": "ECOLE PUBLIQUE EVINDISSI1/A",
              "voters": 174
            }
          ],
          "EVINDISSI I NTOUESSONG": [
            {
              "station": "ECOLE PUBLIQUE EVINDISSI II/A",
              "voters": 166
            }
          ],
          "KOULBOА": [
            {
              "station": "CASE A PALABRE KOULBOA/A",
              "voters": 149
            }
          ],
          "MANMENYIE": [
            {
              "station": "ECOLE PUBLIQUE MANMENYIE/A",
              "voters": 251
            }
          ],
          "MBADOUMOU I NTOUESSONG": [
            {
              "station": "CASE A PALABRE NTOUESSONG/A",
              "voters": 197
            }
          ],
          "MBADOUMOU II NTOUN": [
            {
              "station": "CASE A PALABRE NTOUN/A",
              "voters": 138
            }
          ],
          "MBAKA'A": [
            {
              "station": "CASE A PALABRE MBAKA'A/A",
              "voters": 135
            }
          ],
          "MELEN": [
            {
              "station": "ECOLE PUBLIQUE MELEN/A",
              "voters": 145
            }
          ],
          "MENDONG": [
            {
              "station": "ECOLE PUBLIQUE MENDONG/A",
              "voters": 250
            }
          ],
          "MEYILA": [
            {
              "station": "CASE A PALABRE MEYILA/A",
              "voters": 96
            }
          ],
          "MVOUNKENG": [
            {
              "station": "ECOLE PUBLIQUE MVOUNKENG/A",
              "voters": 196
            }
          ],
          "NGOULEMEKONG": [
            {
              "station": "CASE A PALABRE NGOULMEKONG/A",
              "voters": 330
            }
          ],
          "NKILNTSAM I": [
            {
              "station": "CASE A PALABRE NKILNTSAM I/A",
              "voters": 234
            }
          ],
          "NKILNTSAM II": [
            {
              "station": "CASE A PALABRE NKILNTSAM II/A",
              "voters": 76
            }
          ],
          "NKOEBE": [
            {
              "station": "CASE A PALABRE NKOEBE/A",
              "voters": 89
            }
          ],
          "NKOLNGOCK I": [
            {
              "station": "CASE A PALABRE NKOLNGOCK I/A",
              "voters": 130
            }
          ],
          "NKOLNGUET": [
            {
              "station": "CASE A PALABRE NKOLNGUET/A",
              "voters": 107
            }
          ],
          "NKOLNSOH": [
            {
              "station": "CASE APALABRE NKOLNSOH/A",
              "voters": 82
            }
          ],
          "NKONGBIMVIA": [
            {
              "station": "CASE A PALABRE NKONGBIMVIA/A",
              "voters": 90
            }
          ],
          "NKONGNDOUGOU NKONGNDOUGOU": [
            {
              "station": "ECOLE PUBLIQUE NKONGNDOUGOU/A",
              "voters": 155
            }
          ],
          "NKONGNDOUGOU III": [
            {
              "station": "CASE A PALABRE NKONGNDOUGOU III/A",
              "voters": 68
            }
          ],
          "NKONGNDOUGOU IV": [
            {
              "station": "ECOLE PUBLIQUE NKONGNDOUGOU IV/A",
              "voters": 66
            }
          ],
          "NKONGNDOUGOU V": [
            {
              "station": "ЕKОBТENDE-ECOLE PUBLIQUE /A",
              "voters": 173
            }
          ],
          "NKONGNDOUGOU VI": [
            {
              "station": "LYCEE MEYILA/A",
              "voters": 119
            }
          ],
          "NKONGNEN I": [
            {
              "station": "CASE A PALABRE NKONGNEN I/A",
              "voters": 259
            }
          ],
          "NKONGNEN II": [
            {
              "station": "CASE A PALABRE NKONGNEN II/A",
              "voters": 196
            }
          ],
          "NYIEMEYONG": [
            {
              "station": "CASE A PALABRE NYIEMEYONG/А",
              "voters": 111
            }
          ],
          "NYOMO": [
            {
              "station": "CENTRE DE SANTE NYOMO/A",
              "voters": 256
            },
            {
              "station": "CENTRE DE SANTE NYOMO/B",
              "voters": 210
            }
          ],
          "OKODE": [
            {
              "station": "ECOLE PUBLIQUE OKODEI/A",
              "voters": 154
            }
          ],
          "OKODE II": [
            {
              "station": "CASE A PALABRE OKODE II/A",
              "voters": 169
            }
          ],
          "OLOA": [
            {
              "station": "CASE A PALABRE OLOA/A",
              "voters": 214
            }
          ],
          "OMAN I": [
            {
              "station": "CASE A PALABRE OMAN I/A",
              "voters": 201
            }
          ],
          "OMAN II": [
            {
              "station": "ECOLE PUBLIQUE OMAN II/A",
              "voters": 177
            }
          ],
          "OZOM": [
            {
              "station": "HANGAR DUMARCHE PERIODIQUE OZOM/A",
              "voters": 139
            }
          ],
          "VEGBE I": [
            {
              "station": "CASE A PALABRE VEGBEI/A",
              "voters": 227
            }
          ],
          "VEGBE II": [
            {
              "station": "CASE A PALABRE VEGBE II/A",
              "voters": 68
            }
          ],
          "ZOATOUPSI": [
            {
              "station": "CES ZOATOUPSI/A",
              "voters": 209
            }
          ],
          "BILON": [
            {
              "station": "MARCHE PERIODIQUE/A",
              "voters": 135
            }
          ],
          "NSOH": [
            {
              "station": "CASE A PALABRE NSOH/A",
              "voters": 107
            }
          ],
          "MBADOUMOU I": [
            {
              "station": "CASE A PALABRE DE MBADOUMOUI/A",
              "voters": 178
            }
          ],
          "MBADOUMOU II": [
            {
              "station": "CASE A PALABRE DE MBADOUMOU II/A",
              "voters": 55
            }
          ],
          "ABILI": [
            {
              "station": "POSTE AGRICOLE D'ABILI/A",
              "voters": 156
            }
          ],
          "NKOADOUM": [
            {
              "station": "CHAPELLE DE NKOADOUM/A",
              "voters": 54
            }
          ],
          "NKOLNGOCK II": [
            {
              "station": "CHAPELLE DE NKOLNGOCK II/A",
              "voters": 95
            }
          ],
          "BIKOK NKOLMELEN": [
            {
              "station": "CETIC DE BIKOK/A",
              "voters": 141
            }
          ]
        },
        "Mbankomo": {
          "ABANG MENVINI NDEN": [
            {
              "station": "ECOLE PUBLIQUE D'ABANG/A",
              "voters": 189
            }
          ],
          "ANGALA ONGOT": [
            {
              "station": "ECOLE PUBLIQUE D'ONGOT/A",
              "voters": 351
            }
          ],
          "ANGON I MBALNGONG": [
            {
              "station": "CASE A PALABRE D'ANGONI/A",
              "voters": 140
            }
          ],
          "ANGON I": [
            {
              "station": "ECOLE PUBLIQUE D'ANGON II/A",
              "voters": 274
            }
          ],
          "ANGONGO": [
            {
              "station": "LYCEE D'ANGONGO/A",
              "voters": 120
            }
          ],
          "BIBE": [
            {
              "station": "ECOLE PUBLIQUE DE BIBE/A",
              "voters": 202
            }
          ],
          "BIBONG-BIDOUM": [
            {
              "station": "CASE A PALABRE DE BIBONG-BIDOUM/A",
              "voters": 384
            },
            {
              "station": "CASE A PALABRE DE BIBONG-BIDOUM/B",
              "voters": 390
            },
            {
              "station": "CASE A PALABRE DE BIBONG-BIDOUM/C",
              "voters": 335
            }
          ],
          "ВIKОBEM EKOUMDOUM": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUMDOUM/A",
              "voters": 101
            }
          ],
          "BIKOLOG-BIKOME 1ER": [
            {
              "station": "CASE A PALABRE DE BIKOLOG-BIKOME 1ER/A",
              "voters": 79
            }
          ],
          "BINGUELA I NKONG-BINGUELA": [
            {
              "station": "ECOLE PUBLIQUE DE BINGUELA/A",
              "voters": 272
            },
            {
              "station": "ECOLE PUBLIQUE DE BINGUELA/В",
              "voters": 173
            }
          ],
          "BINGUELA II": [
            {
              "station": "CASE A PALABRE DE BINGUELAI/A",
              "voters": 307
            }
          ],
          "BIYAN": [
            {
              "station": "ECOLE PUBLIQUE DE BIYAN/A",
              "voters": 201
            }
          ],
          "CALUMBА CENTRE ADMINISTRATIF MBANKOMO CENTRE": [
            {
              "station": "TRIBUNE DU DEFILE/A",
              "voters": 376
            }
          ],
          "CALUMВА CENTRE ADMINISTRATIF MBANKOMO CENTRE": [
            {
              "station": "TRIBUNE DU DEFILE/В",
              "voters": 373
            },
            {
              "station": "TRIBUNE DU DEFILE/C",
              "voters": 419
            }
          ],
          "EBEBA I EBEBA II": [
            {
              "station": "CASE A PALABRE D'EBEBA I/A",
              "voters": 72
            }
          ],
          "EBEBA II NKOTNKONG": [
            {
              "station": "ECOLE PUBLIQUE D'EBEBA II/ A",
              "voters": 262
            }
          ],
          "EDIPKOMBO": [
            {
              "station": "CENTRE DE SANTE D'EDIPKOMBO/A",
              "voters": 135
            }
          ],
          "EKANGA": [
            {
              "station": "CASE A PALABRE D'EKANGA/A",
              "voters": 81
            }
          ],
          "EKOKO": [
            {
              "station": "ECOLE PUBLIQUE D'EKOKO/A",
              "voters": 97
            }
          ],
          "ELIG-AKENG": [
            {
              "station": "SALLE REUNION MISSION CATH.D'ELIG-AKENG/A",
              "voters": 165
            }
          ],
          "ELIG-ESSOMBALA": [
            {
              "station": "CASE A PALABRE D'ELIG-ESSOMBALA/A",
              "voters": 207
            }
          ],
          "ELOUMNDEN CHEDOM ELOUMNDEN I": [
            {
              "station": "ECOLE CHEDOM/A",
              "voters": 390
            },
            {
              "station": "ECOLE CHEDOM/B",
              "voters": 361
            }
          ],
          "ELOUMNDEN CHEDOM ELOUMNDENI": [
            {
              "station": "ECOLE CHEDOM/C",
              "voters": 259
            }
          ],
          "ELOUMNDEN I": [
            {
              "station": "ECOLE PUBLIQUE D'ELOUMNDEN I/A",
              "voters": 357
            }
          ],
          "ELOUMNDEN II": [
            {
              "station": "ECOLE PUBLIQUE D'ELOUMNDEN II/A",
              "voters": 294
            },
            {
              "station": "ECOLE PUBLIQUE D'ELOUMNDEN II/B",
              "voters": 142
            }
          ],
          "ETILBIBEGUE MESSOK 1ER": [
            {
              "station": "ECOLE PUBLIQUE D'ETILBIBEGUE/A",
              "voters": 199
            }
          ],
          "FAH EKELE": [
            {
              "station": "E.P.A.B/A",
              "voters": 88
            }
          ],
          "KALA": [
            {
              "station": "CASE A PALABRE DE KALA/A",
              "voters": 144
            }
          ],
          "MBADOUMOU": [
            {
              "station": "CASE A PALABRE DE MBADOUMOU/A",
              "voters": 396
            },
            {
              "station": "CASE A PALABRE DE MBADOUMOU/B",
              "voters": 263
            },
            {
              "station": "CASE A PALABRE DE MBADOUMOU/С",
              "voters": 308
            },
            {
              "station": "YEMPOA SCHOOL/A",
              "voters": 285
            }
          ],
          "MBALNGONG": [
            {
              "station": "ECOLE MATERNELLE DE MBALNGONG/A",
              "voters": 410
            },
            {
              "station": "ECOLE MATERNELLE DE MBALNGONG/B",
              "voters": 240
            }
          ],
          "CENTRE ADMINISTRATIF MBANKOMO CENTRE MBANKOMO CHAPELLE MBANKOMO HOPITAL ZOATOUPSI": [
            {
              "station": "DELEGATION D'ARR. D'AGRICULTURE MBANKOMO/A",
              "voters": 306
            },
            {
              "station": "DELEGATION D'ARR. D'AGRICULTURE MBANKOМO/ B",
              "voters": 338
            }
          ],
          "MBANKОМО СЕNTRE MBANKOMO ECOLE PUBLIQUE": [
            {
              "station": "MBANKOMO ECOLE PUBLIQUE/A",
              "voters": 403
            },
            {
              "station": "MBANKOMO EСOLE PUBLIQUE/B",
              "voters": 347
            }
          ],
          "MBANKOMO CENTRE MBANKOMO FOYER 52 MBANKOMO FOYER SCOLAIRE MBANKOMO KOWEIT MBANKOMO LYCEE MBANKOMO LYCEE TECHNIQUE": [
            {
              "station": "LYCEE DE MBANKOMO/A",
              "voters": 375
            },
            {
              "station": "LYCEE DE MBANKOMO/B",
              "voters": 398
            },
            {
              "station": "LYCEE DE MBANKOMO/C",
              "voters": 421
            },
            {
              "station": "LYCEE DE MBANKOMO/D",
              "voters": 304
            }
          ],
          "MBANKOMO VILLAGE": [
            {
              "station": "CASE A PALABRE DE MBANKOMO VILLAGE/A",
              "voters": 109
            }
          ],
          "MBAYENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MBAYENGUE/A",
              "voters": 155
            }
          ],
          "MBONGO": [
            {
              "station": "CASE A PALABRE DE MBONGO/A",
              "voters": 116
            }
          ],
          "MEFOMО": [
            {
              "station": "ECOLE PUBLIQUE DE MEFOMO/A",
              "voters": 106
            }
          ],
          "MEFOU-ASSI": [
            {
              "station": "ECOLE PRIVEE SALOMON JULES/A",
              "voters": 382
            },
            {
              "station": "ECOLE PRIVEE SALOMON JULES /B",
              "voters": 258
            }
          ],
          "MEYENG-ADZAP": [
            {
              "station": "CASE A PALABRE DE MEYENG-ADZAP/A",
              "voters": 52
            }
          ],
          "MIAN": [
            {
              "station": "ECOLE PUBLIQUE DE TIKONG/A",
              "voters": 158
            }
          ],
          "NGATSONGO NKOA-ABANG": [
            {
              "station": "ECOLE PUBLIQUE DE NGATSONGO/A",
              "voters": 150
            }
          ],
          "NGOUMOU 1ER": [
            {
              "station": "C.E.T.I.C. DE NKOL-BIYEN/A",
              "voters": 86
            }
          ],
          "NKADIP": [
            {
              "station": "ECOLE PUBLIQUE DE NKADIP/A",
              "voters": 83
            }
          ],
          "NKOL-AKONO": [
            {
              "station": "CASE A PALABRE DE NKOL-AKONO/A",
              "voters": 79
            }
          ],
          "NKOL-BIYEN": [
            {
              "station": "LYCEE DE NKOL-BIYEN/A",
              "voters": 66
            }
          ],
          "NKOL-MENYENGUE I": [
            {
              "station": "CASE A PALABRE DE NKOL-MENYENGUE /A",
              "voters": 146
            }
          ],
          "NKOLMEWOUTH": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEWOUTH/A",
              "voters": 205
            }
          ],
          "NKOLNGOK": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGOK/А",
              "voters": 140
            }
          ],
          "NKOLNTSAM": [
            {
              "station": "CASE A PALABRE DE NKOLNTSAM/A",
              "voters": 97
            }
          ],
          "NKOLOMAN": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLOMAN/A",
              "voters": 182
            }
          ],
          "NKOLYEGUE I": [
            {
              "station": "CASE A PALABRE DE NKOLYEGUE I/A",
              "voters": 101
            }
          ],
          "NKOLYEGUE II": [
            {
              "station": "CASE A PALABRE DE NKOLYEGUE II/A",
              "voters": 125
            }
          ],
          "NKOMEKOUI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOMEKOUI/A",
              "voters": 167
            }
          ],
          "NKONG BIBEGUE": [
            {
              "station": "SALLE DE REUNION DE NKONG BIBEGUE/A",
              "voters": 80
            }
          ],
          "NKONG-BIYEN": [
            {
              "station": "ECOLE PUBLIQUE DE NKONG-BIYEN/A",
              "voters": 93
            }
          ],
          "NKOUMADZAP": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUMADZAP/A",
              "voters": 213
            }
          ],
          "NOMAYOS I NOMAYOS": [
            {
              "station": "ECOLE PUBLIQUE DE NOMAYOS/A",
              "voters": 422
            }
          ],
          "NOMAYOS": [
            {
              "station": "ECOLE PUBLIQUE DE NOMAYOS/B",
              "voters": 461
            }
          ],
          "NOMAYOS I NOMAYOS NDOUGSA": [
            {
              "station": "BATIMENT DU PESAGE NOMAYOS/A",
              "voters": 393
            },
            {
              "station": "BATIMENT DU PESAGE NOMAYOS/C",
              "voters": 264
            }
          ],
          "NOMAYOS NOMAYOS NDOUGSA": [
            {
              "station": "BATIMENT DU PESAGE NOMAYOS/B",
              "voters": 452
            }
          ],
          "NTANG OKONG": [
            {
              "station": "ECOLE PUBLIQUE DE NTANG/A",
              "voters": 161
            }
          ],
          "NTOUESSONG II": [
            {
              "station": "CASE A PALABRE DE NTOUESSONG II/A",
              "voters": 101
            }
          ],
          "NTOUESSONG III": [
            {
              "station": "CASE A PALABRE DE NTOUESSONG III/A",
              "voters": 71
            }
          ],
          "OKOA": [
            {
              "station": "ECOLE PUBLIQUE D'OKOA/A",
              "voters": 457
            },
            {
              "station": "ECOLE PUBLIQUE D'OKOA/B",
              "voters": 53
            }
          ],
          "OSSONKIA": [
            {
              "station": "CASE A PALABRE D'OSSONKIA/A",
              "voters": 89
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PUBLIQUE D'OVENG/A",
              "voters": 330
            },
            {
              "station": "ECOLE PUBLIQUE D'OVENG/B",
              "voters": 135
            }
          ],
          "ZOASSEL 1ER": [
            {
              "station": "CASE A PALABRE DE ZOASSEL 1ER/A",
              "voters": 99
            }
          ],
          "ZOASSEL II": [
            {
              "station": "CASE A PALABRE DE ZOASSEL II/A",
              "voters": 202
            }
          ],
          "Zoatoupsi ZOATOUPSI": [
            {
              "station": "ECOLE PUBLIQUE DE ZOATOUPSI/A",
              "voters": 264
            }
          ],
          "Zoatoupsi": [
            {
              "station": "Case à Palabres de Zoatoupsi /A",
              "voters": 145
            }
          ],
          "MBADOUMOU Mbadoumou SUD": [
            {
              "station": "Mbadoumou transformateur /A",
              "voters": 286
            },
            {
              "station": "Mbadoumou transformateur / B",
              "voters": 127
            }
          ],
          "MBALNGONG Mbalngong NORD": [
            {
              "station": "Centre d'Etat Civil de Mbalngong/A/A",
              "voters": 393
            }
          ],
          "Messok I": [
            {
              "station": "Case à palabres de Messok I/ATA",
              "voters": 128
            }
          ],
          "NDAZOA": [
            {
              "station": "CENTRE D'ETAT CIVIL DE NDAZOA/A",
              "voters": 140
            }
          ]
        },
        "Ngoumou": {
          "EBOLBOUM I NKOLMENDING": [
            {
              "station": "ECOLE ANNEXE GROUPE III/A",
              "voters": 142
            }
          ],
          "EDINGNDZOUK NKOLBIBANDA": [
            {
              "station": "CASE A PALABRES DE NKOLBIBANDA/A",
              "voters": 59
            }
          ],
          "EKOUDBESSANDA NKONG-MEYOS II NKONGBIBEGA II NKONGZOCK II": [
            {
              "station": "ECOLE PUBLIQUE DE NKONG-MEYOS III/A",
              "voters": 167
            }
          ],
          "HAOUSSA": [
            {
              "station": "LYCEE TECHNIQUE DE NGOUMOU/A",
              "voters": 182
            }
          ],
          "KAMBA": [
            {
              "station": "LYCEE DE NGOUMOU/A",
              "voters": 299
            },
            {
              "station": "LYCEE DE NGOUMOU/B",
              "voters": 259
            }
          ],
          "KOLI": [
            {
              "station": "ECOLE PUBLIQUE DE KOLI/A",
              "voters": 124
            }
          ],
          "MBALELON I": [
            {
              "station": "ECOLE PUBLIQUE DE MBALELON I/A",
              "voters": 115
            }
          ],
          "MBALELON II MBALELON III": [
            {
              "station": "ECOLE PUBLIQUE DE MBALELON II/A",
              "voters": 182
            }
          ],
          "MBAYENGUE II MBAYENGUE II": [
            {
              "station": "CHAPELLE DE MBAYENGUEII/A",
              "voters": 148
            }
          ],
          "MELEN": [
            {
              "station": "CHAPELLE DE MELEN/A",
              "voters": 115
            }
          ],
          "NGOUMOU CENTRE-BLOC A": [
            {
              "station": "ECOLE ANNEXE GROUPEI/A",
              "voters": 272
            },
            {
              "station": "ECOLE ANNEXE GROUPEI/B",
              "voters": 223
            }
          ],
          "NGOUMOU CENTRE-BLOC В NGOUMOU CENTRE-BLOC С": [
            {
              "station": "ECOLE ANNEXE GROUPE II/A",
              "voters": 264
            }
          ],
          "NGOUMOU CENTRE-BLOС В NGOUMOU CENTRE-BLOС С": [
            {
              "station": "ECOLE ANNEXE GROUPE II/В",
              "voters": 247
            }
          ],
          "NGOUMOU CENTRE-BLOС В NGOUMOU CENTRE-BLOC С": [
            {
              "station": "ECOLE ANNEXE GROUPEII/C",
              "voters": 189
            }
          ],
          "NKOAKOM NKOLEBEMBISSIE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOAKОM/A",
              "voters": 130
            }
          ],
          "NKOLEMOMODO": [
            {
              "station": "CASE A PALABRES DE NKOLEMOMODO/A",
              "voters": 155
            }
          ],
          "NKOLMEDZAPI NKOLMEDZAP II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEDZAP II/ A",
              "voters": 68
            }
          ],
          "NKOLMESSI I NKOLMESSI II OFFOUMOU NSELEK I OFFOUMOU NSELEK II": [
            {
              "station": "Centre de Santé D'OFFOUMOU I/A",
              "voters": 295
            }
          ],
          "NKOLNGA MBIDA NKOLNGAMBIDA NKOLNGOCK III": [
            {
              "station": "CASE A PALABRES DE NKOLNGOCK III/A",
              "voters": 60
            }
          ],
          "MINLO'O MI ZOCK NKOLOKEDE OFFOUMBI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLOKEDE/A",
              "voters": 142
            }
          ],
          "NKONG-ABOK I": [
            {
              "station": "TRIBUNAL DE NKONG-ABOK I/A",
              "voters": 182
            }
          ],
          "NKONG-ABOK II": [
            {
              "station": "ECOLE CATHOLIQUE DE NNOMNNAM/A",
              "voters": 87
            }
          ],
          "NKONG-MEYOS I NKONG-MEYOS I": [
            {
              "station": "ECOLE MATERNELLE DE NKONG-MEYOS I/A",
              "voters": 269
            }
          ],
          "EDING NDZOUK ОВОКОЕ I ОВОКОЕ II": [
            {
              "station": "ECOLE PUBLIQUE D'OBOKOE 1/A",
              "voters": 304
            }
          ],
          "OTELE CENTRE OTELE I OTELE OZOM YENEYENE": [
            {
              "station": "ECOLE PUBLIQUE D'OTELE CENTRE/A",
              "voters": 324
            }
          ],
          "OTELE CENTRE OTELE I OTELE II OZOM YENEYENE": [
            {
              "station": "ECOLE PUBLIQUE D'OTELE CENTRE/B",
              "voters": 175
            }
          ],
          "OTTOTOMO": [
            {
              "station": "CHAPELLE D'OTTOTOMO/A",
              "voters": 70
            }
          ],
          "EKIDI-EMVONG OVANGOUL I": [
            {
              "station": "CENTRE DE SANTE D'OVANGOUL I/A",
              "voters": 113
            }
          ],
          "SIBEKON": [
            {
              "station": "CASE A PALABRES DE SIBEKON/A",
              "voters": 84
            }
          ],
          "NKOL EMAN NKOLEMAN NKONGBIBEGA I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL EMAN/A",
              "voters": 52
            }
          ],
          "NKOLMESSI I NKOLMESSI II": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOLMESSI/A",
              "voters": 120
            }
          ],
          "MESSOK": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE MESSOK/A",
              "voters": 62
            }
          ],
          "NKOLNGA MBIDA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE NKOLNGA MBIDA/A",
              "voters": 41
            }
          ],
          "EBOLBOUM III": [
            {
              "station": "ECOLE PUBLIQUE D'EBOLBOUM III/A",
              "voters": 80
            }
          ],
          "NKOLEBEMBISSIE": [
            {
              "station": "CASE A PALABRE DE NKOLEBEMBISSIE/A",
              "voters": 71
            }
          ],
          "EDING NDZOUK": [
            {
              "station": "CENTRE DE SANTE D'EDING NDZOUK/A",
              "voters": 48
            }
          ],
          "EBOLBOUM II": [
            {
              "station": "CENTRE D'ETAT CIVIL D'EBOLBOUM II/A",
              "voters": 112
            }
          ],
          "EBOLBOUMI": [
            {
              "station": "GARE DE NGOUMOU/A",
              "voters": 139
            }
          ],
          "NKOLMEDZAP II": [
            {
              "station": "CENTRE SANTE NKOLMEDZAP I1/A",
              "voters": 147
            }
          ],
          "NKOLMELEN": [
            {
              "station": "ECOLE CATHOLIQUE SAINT PIEX/A",
              "voters": 239
            }
          ],
          "MESSOCK II YEGUE": [
            {
              "station": "CASE A PALABRE DE YEGUE/A",
              "voters": 95
            }
          ],
          "METSA'A": [
            {
              "station": "ECOLE MATERNELLE CATHOLIQUE/A",
              "voters": 469
            }
          ],
          "NKONGZOCKI": [
            {
              "station": "DELEGATION MINPROFF/A",
              "voters": 271
            }
          ],
          "NGON": [
            {
              "station": "CENTRE DE SANTE DE NGON/A",
              "voters": 189
            }
          ],
          "NGOUMOU CENTRE-BLOC C": [
            {
              "station": "CASE ARTISANAL DE NGOUMOU/A",
              "voters": 287
            }
          ],
          "NGOUMOU CENTRE-BLOС С": [
            {
              "station": "CASE ARTISANAL DE NGOUMOU/ В",
              "voters": 268
            }
          ],
          "NKOLEYEN": [
            {
              "station": "GARE D'OTELE/A",
              "voters": 165
            }
          ],
          "NKONGZOK I NKONGZOKII": [
            {
              "station": "CES BILINGUE DE NKONGZOK/A",
              "voters": 152
            }
          ]
        }
      },
      "MFOUNDI": {
        "Yaounde I": {
          "CENTRE COMMERCIAL": [
            {
              "station": "CHAMBRE D'AGRICULTURE/A",
              "voters": 331
            },
            {
              "station": "CHAMBRE D'AGRICULTURE/B",
              "voters": 124
            },
            {
              "station": "MARCHE MFOUNDI/A",
              "voters": 304
            },
            {
              "station": "MARCHE MFOUNDI/B",
              "voters": 286
            }
          ],
          "CENTRE COMMERCIAL CENTRE COMMERCIAL": [
            {
              "station": "ECOLE MAT. PARC REPIQUET/A",
              "voters": 300
            },
            {
              "station": "ECOLE MAT. PARC REPIQUET/В",
              "voters": 310
            },
            {
              "station": "ECOLE MAT. PARC REPIQUET/C",
              "voters": 235
            },
            {
              "station": "ECOLE MAT. PARC REPIQUET/D",
              "voters": 196
            },
            {
              "station": "ECOLE MAT. PARC REPIQUET/E",
              "voters": 322
            },
            {
              "station": "ECOLE MATERNELLE MARIE GOCKER/A",
              "voters": 306
            },
            {
              "station": "ECOLE MATERNELLE MARIE GOCKER/B",
              "voters": 286
            },
            {
              "station": "ECOLE MATERNELLE MARIE GOCKER/C",
              "voters": 332
            }
          ],
          "DJOUNGOLO I": [
            {
              "station": "LYCEE D'ELIG-ESSONO/A",
              "voters": 346
            },
            {
              "station": "LYCEE D'ELIG-ESSONO/B",
              "voters": 275
            },
            {
              "station": "LYCEE D'ELIG-ESSONO/C",
              "voters": 288
            },
            {
              "station": "LYCEE D'ELIG-ESSONO/D",
              "voters": 280
            },
            {
              "station": "LYCEE D'ELIG-ESSONO/E",
              "voters": 96
            }
          ],
          "DJOUNGOLO II": [
            {
              "station": "G.S.B. ABOMO EWONDO /A",
              "voters": 338
            },
            {
              "station": "G.S.B. ABOMO EWOND0/B",
              "voters": 342
            },
            {
              "station": "G.S.B. ABOMO EWONDO/C",
              "voters": 317
            },
            {
              "station": "G.S.B. ABOMO EWONDO/D",
              "voters": 203
            }
          ],
          "DJOUNGOLO II ETOUDI": [
            {
              "station": "COLLEGE ADVENTISTE/A",
              "voters": 302
            },
            {
              "station": "COLLEGE ADVENTISTE /B",
              "voters": 304
            },
            {
              "station": "COLLEGE ADVENTISTE /C",
              "voters": 317
            },
            {
              "station": "COLLEGE ADVENTISTE /D",
              "voters": 296
            },
            {
              "station": "COLLEGE ADVENTISTE/E",
              "voters": 306
            },
            {
              "station": "COLLEGE ADVENTISTE/F",
              "voters": 337
            }
          ],
          "DJOUNGOLO III NLONGKAK I": [
            {
              "station": "COMPLEXE SCOL. LES FLEURETTES/A",
              "voters": 380
            },
            {
              "station": "COMPLEXE SCOL. LES FLEURETTES/B",
              "voters": 323
            },
            {
              "station": "COMPLEXE SCOL. LES FLEURETTES/C",
              "voters": 284
            }
          ],
          "DJOUNGOLO III": [
            {
              "station": "IPAR/A",
              "voters": 272
            },
            {
              "station": "IPAR/B",
              "voters": 291
            },
            {
              "station": "IPAR/C",
              "voters": 115
            }
          ],
          "EKOMBITIE": [
            {
              "station": "COLLEGE PRIVE ENFANT D'AFRIQUE/A",
              "voters": 344
            },
            {
              "station": "COLLEGE PRIVE ENFANT D'AFRIQUE /B",
              "voters": 301
            },
            {
              "station": "COLLEGE PRIVE ENFANT D'AFRIQUE /C",
              "voters": 293
            },
            {
              "station": "COLLEGE PRIVE ENFANT D'AFRIQUE/D",
              "voters": 299
            },
            {
              "station": "COLLEGE PRIVE ENFANT D'AFRIQUE/E",
              "voters": 207
            },
            {
              "station": "EP PRIVEE MVOGO & MBIDA/A",
              "voters": 281
            },
            {
              "station": "EP PRIVEE MVOGO & MBIDA/B",
              "voters": 279
            }
          ],
          "EKOMBITIE EKOMBITIE OKOLO": [
            {
              "station": "INSTITUT MODERNE MBASSI/A",
              "voters": 317
            },
            {
              "station": "INSTITUT MODERNE MBASSI/ В",
              "voters": 313
            },
            {
              "station": "INSTITUT MODERNE MBASSI/C",
              "voters": 271
            },
            {
              "station": "INSTITUT MODERNE MBASSI/D",
              "voters": 313
            },
            {
              "station": "INSTITUT MODERNE MBASSI/E",
              "voters": 250
            },
            {
              "station": "INSTITUT MODERNE MBASSI/F",
              "voters": 295
            },
            {
              "station": "INSTITUT MODERNE MBASSI/G",
              "voters": 301
            },
            {
              "station": "INSTITUT MODERNE MBASSI/H",
              "voters": 380
            },
            {
              "station": "INSTITUT MODERNE MBASSI/I",
              "voters": 377
            },
            {
              "station": "INSTITUT MODERNE MBASSI/J",
              "voters": 198
            }
          ],
          "EMANA BILIK": [
            {
              "station": "GROUPE SCOLAIRE LE REVEIL/A",
              "voters": 231
            }
          ],
          "CENTRE COMMERCIAL EMANA BILIK": [
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/A",
              "voters": 314
            },
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/B",
              "voters": 355
            },
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/C",
              "voters": 296
            },
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/D",
              "voters": 372
            },
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/E",
              "voters": 375
            },
            {
              "station": "GROUPE SCOLAIRE BILIK CITY/F",
              "voters": 137
            }
          ],
          "EMANA BUEA EMANA CENTRE": [
            {
              "station": "LYCEE D'EMANA/A",
              "voters": 333
            },
            {
              "station": "LYCEE D'EMANA/B",
              "voters": 344
            },
            {
              "station": "LYCEE D'EMANA/C",
              "voters": 224
            },
            {
              "station": "LYCEE D'EMANA/D",
              "voters": 321
            },
            {
              "station": "LYCEE D'EMANA/E",
              "voters": 303
            },
            {
              "station": "LYCEE D'EMANA/F",
              "voters": 303
            },
            {
              "station": "LYCEE D'EMANA/G",
              "voters": 144
            }
          ],
          "EMANA BUEA": [
            {
              "station": "FONDATION DEO GRACIA/A",
              "voters": 330
            },
            {
              "station": "FONDATION DEO GRACIA/B",
              "voters": 368
            },
            {
              "station": "FONDATION DEO GRACIA/C",
              "voters": 349
            },
            {
              "station": "FONDATION DEO GRACIA/D",
              "voters": 246
            },
            {
              "station": "FONDATION DEO GRACIA/E",
              "voters": 388
            }
          ],
          "EMANA CENTRE": [
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/A",
              "voters": 326
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/B",
              "voters": 323
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/C",
              "voters": 324
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/D",
              "voters": 315
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/E",
              "voters": 327
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/F",
              "voters": 293
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/G",
              "voters": 308
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/H",
              "voters": 311
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/1",
              "voters": 379
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/J",
              "voters": 388
            },
            {
              "station": "ECOLE BILINGUE THE CHAMPIONS/K",
              "voters": 180
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE ANGE/A",
              "voters": 305
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE ANGE/B",
              "voters": 271
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE ANGE/C",
              "voters": 133
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/A",
              "voters": 325
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/B",
              "voters": 337
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/C",
              "voters": 325
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/D",
              "voters": 326
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/E",
              "voters": 314
            },
            {
              "station": "G. SCOLAIRE BILINGUE LA GRACE/F",
              "voters": 316
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/A",
              "voters": 321
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/B",
              "voters": 305
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/C",
              "voters": 327
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/D",
              "voters": 316
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/ E",
              "voters": 326
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/F",
              "voters": 296
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/G",
              "voters": 296
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/ Н",
              "voters": 371
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/I",
              "voters": 372
            },
            {
              "station": "INSTITUT BILINGUE D'EMANA/J",
              "voters": 174
            }
          ],
          "ETOA-MEKI": [
            {
              "station": "E. M. PRIVEE LA PEPINIERE/A",
              "voters": 300
            },
            {
              "station": "E. M. PRIVEE LA PEPINIERE/B",
              "voters": 342
            },
            {
              "station": "E. M. PRIVEE LA PEPINIERE/D",
              "voters": 306
            },
            {
              "station": "E. M. PRIVEE LA PEPINIERE/E",
              "voters": 327
            },
            {
              "station": "E. M. PRIVEE LA PEPINIERE/F",
              "voters": 334
            },
            {
              "station": "E. M. PRIVEE LA PEPINIERE/G",
              "voters": 312
            },
            {
              "station": "E. P. D'ETOA-MEKI/A",
              "voters": 264
            },
            {
              "station": "E. P. D'ETОA-MEKI/B",
              "voters": 278
            },
            {
              "station": "E. P. D'ETОA-MEKI/D",
              "voters": 278
            },
            {
              "station": "E. P. D'ETОA-MEKI/E",
              "voters": 246
            },
            {
              "station": "E. P. D'ETОA-MEKI/F",
              "voters": 373
            }
          ],
          "ETOA-MEЕКІ": [
            {
              "station": "E. M. PRIVEE LA PEPINIERE/C",
              "voters": 291
            }
          ],
          "ETOA-MEKІ": [
            {
              "station": "E. P. D'ETOA-MEKI/C",
              "voters": 267
            }
          ],
          "ETOA-MEKI ETOUDI": [
            {
              "station": "CENTRE SOCIAL/A",
              "voters": 198
            }
          ],
          "CENTRE COMMERCIAL ETOUDI": [
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/A",
              "voters": 312
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS /В",
              "voters": 329
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/C",
              "voters": 310
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/D",
              "voters": 311
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS /E",
              "voters": 296
            },
            {
              "station": "E.P.P СATHOLIQUE ST ALOYS/F",
              "voters": 318
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/G",
              "voters": 306
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/H",
              "voters": 341
            },
            {
              "station": "E.P.P CATHOLIQUE ST ALOYS/1",
              "voters": 138
            }
          ],
          "LENDOM": [
            {
              "station": "GPE SCO BILINGUE SINAI/A",
              "voters": 110
            }
          ],
          "MBALLAI MBALLA II": [
            {
              "station": "CLUB CAMTEL/A",
              "voters": 267
            },
            {
              "station": "CLUB CAMTEL/C",
              "voters": 248
            },
            {
              "station": "CLUB CAMTEL/E",
              "voters": 338
            }
          ],
          "MBALLAI MBALLA I": [
            {
              "station": "CLUB CAMTEL/B",
              "voters": 258
            }
          ],
          "MBALLAAI MBALLA II": [
            {
              "station": "CLUB CAMTEL/D",
              "voters": 281
            }
          ],
          "MBALLAI": [
            {
              "station": "E.M. BILINGUE LES LIBELLULES/A",
              "voters": 301
            },
            {
              "station": "E.M. BILINGUE LES LIBELLULES/C",
              "voters": 362
            },
            {
              "station": "E.M. BILINGUE LES LIBELLULES/D",
              "voters": 370
            }
          ],
          "MBALLAТ": [
            {
              "station": "E.M. BILINGUE LES LIBELLULES /B",
              "voters": 338
            }
          ],
          "MBALLA II NTOUGOU I": [
            {
              "station": "LYCEE MBALLAI/A",
              "voters": 295
            },
            {
              "station": "LYCEE MBALLA II/B",
              "voters": 297
            },
            {
              "station": "LYCEE MBALLA II/C",
              "voters": 286
            },
            {
              "station": "LYCEE MBALLA II/D",
              "voters": 283
            },
            {
              "station": "LYCEE MBALLAI/E",
              "voters": 286
            },
            {
              "station": "LYCEE MBALLA I/F",
              "voters": 288
            },
            {
              "station": "LYCEE MBALLAII/G",
              "voters": 276
            },
            {
              "station": "LYCEE MBALLA II/H",
              "voters": 315
            },
            {
              "station": "LYCEE MBALLA I/1",
              "voters": 351
            }
          ],
          "MBALLA I": [
            {
              "station": "E. P. DE MBALLA II/A",
              "voters": 300
            }
          ],
          "MBALLA II": [
            {
              "station": "E. P. DE MBALLA II/B",
              "voters": 325
            },
            {
              "station": "E. P. DE MBALLA II/C",
              "voters": 308
            },
            {
              "station": "E. P. DE MBALLAI/D",
              "voters": 368
            },
            {
              "station": "E. P. DE MBALLAII/E",
              "voters": 277
            },
            {
              "station": "E. P. DE MBALLA II/F",
              "voters": 325
            },
            {
              "station": "E. P. DE MBALLA II/G",
              "voters": 332
            },
            {
              "station": "E. P. DE MBALLA II/H",
              "voters": 150
            }
          ],
          "MBALLA III-A": [
            {
              "station": "GROUPE SCOLAIRE LA MARFEE/A",
              "voters": 370
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE/B",
              "voters": 361
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE / C",
              "voters": 307
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE/D",
              "voters": 309
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE/E",
              "voters": 280
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE/F",
              "voters": 317
            },
            {
              "station": "GROUPE SCOLAIRE LA MARFEE /G",
              "voters": 323
            }
          ],
          "MBALLA III-B": [
            {
              "station": "CPLEXE SCOL. MARIANE & PAUL /А",
              "voters": 370
            },
            {
              "station": "CPLEXE SCOL. MARIANE & PAUL/B",
              "voters": 161
            }
          ],
          "ETOUDI MBALLA III-B": [
            {
              "station": "COLLEGE BLAISE PASCAL/A",
              "voters": 425
            },
            {
              "station": "COLLEGE BLAISE PASCAL/B",
              "voters": 327
            },
            {
              "station": "COLLEGE BLAISE PASCAL/C",
              "voters": 336
            },
            {
              "station": "COLLEGE BLAISE PASCAL/D",
              "voters": 346
            },
            {
              "station": "COLLEGE BLAISE PASCAL/E",
              "voters": 344
            },
            {
              "station": "COLLEGE BLAISE PASCAL/F",
              "voters": 359
            },
            {
              "station": "COLLEGE BLAISE PASCAL/G",
              "voters": 203
            }
          ],
          "MBALLA III-C": [
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/A",
              "voters": 303
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/B",
              "voters": 283
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/C",
              "voters": 318
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/D",
              "voters": 307
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/E",
              "voters": 302
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/F",
              "voters": 285
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/G",
              "voters": 386
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/H",
              "voters": 384
            },
            {
              "station": "COMPLEXE SCOLAIRE PI &JU/1",
              "voters": 230
            },
            {
              "station": "FONDATION TSOUNGUI/A",
              "voters": 307
            },
            {
              "station": "FONDATION TSOUNGUI/B",
              "voters": 294
            },
            {
              "station": "FONDATION TSOUNGUI/С",
              "voters": 296
            },
            {
              "station": "FONDATION TSOUNGUI/D",
              "voters": 298
            },
            {
              "station": "FONDATION TSOUNGUI/E",
              "voters": 300
            },
            {
              "station": "FONDATION TSOUNGUI/F",
              "voters": 291
            },
            {
              "station": "FONDATION TSOUNGUI/G",
              "voters": 305
            },
            {
              "station": "FONDATION TSOUNGUI/Н",
              "voters": 280
            },
            {
              "station": "FONDATION TSOUNGUI/1",
              "voters": 333
            },
            {
              "station": "FONDATION TSOUNGUI/J",
              "voters": 376
            },
            {
              "station": "FONDATION TSOUNGUI/K",
              "voters": 385
            },
            {
              "station": "FONDATION TSOUNGUI/L",
              "voters": 189
            },
            {
              "station": "FONDATION TSOUNGUI/M",
              "voters": 257
            }
          ],
          "MBALLA III-D": [
            {
              "station": "G. S. B. PIERRES PRECIEUSES/A",
              "voters": 307
            },
            {
              "station": "G. S. B. PIERRES PRECIEUSES/B",
              "voters": 294
            },
            {
              "station": "G. S. B. PIERRES PRECIEUSES/C",
              "voters": 283
            },
            {
              "station": "G. S. B. PIERRES PRECIEUSES/D",
              "voters": 284
            },
            {
              "station": "G. S. B. PIERRES PRECIEUSES/E",
              "voters": 299
            },
            {
              "station": "G. S. B. PIERRES PRECIEUSES/F",
              "voters": 380
            }
          ],
          "MBALLA IV": [
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/A",
              "voters": 318
            },
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/B",
              "voters": 305
            },
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/C",
              "voters": 317
            },
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/D",
              "voters": 318
            },
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/E",
              "voters": 325
            },
            {
              "station": "E. M. PRIVEE LE CLASSIQUE/F",
              "voters": 415
            },
            {
              "station": "E.P. MBALLA IVIA",
              "voters": 309
            },
            {
              "station": "E.P. MBALLA IV/B",
              "voters": 297
            },
            {
              "station": "E.P. MBALLA IV/ С",
              "voters": 304
            },
            {
              "station": "E.P. MBALLA IV/D",
              "voters": 292
            },
            {
              "station": "E.P. MBALLA IV/E",
              "voters": 310
            },
            {
              "station": "E.P. MBALLA IV/F",
              "voters": 295
            },
            {
              "station": "E.P. MBALLA IV/G",
              "voters": 292
            },
            {
              "station": "E.P. MBALLA IV/H",
              "voters": 309
            },
            {
              "station": "E.P. MBALLA IV/",
              "voters": 308
            },
            {
              "station": "E.P. MBALLA IV/J",
              "voters": 315
            },
            {
              "station": "E.P. MBALLA IVIK",
              "voters": 379
            },
            {
              "station": "E.P. MBALLA IV/L",
              "voters": 107
            }
          ],
          "DJOUNGOLO I ETOUDI MBALLAV": [
            {
              "station": "C.S. IPLEX/A",
              "voters": 353
            },
            {
              "station": "C.S. IPLEX/B",
              "voters": 333
            },
            {
              "station": "C.S. IPLEX/D",
              "voters": 275
            },
            {
              "station": "C.S. IPLEX/E",
              "voters": 288
            },
            {
              "station": "C.S. IPLEX/ G",
              "voters": 278
            },
            {
              "station": "C.S. IPLEX/H",
              "voters": 134
            },
            {
              "station": "C.S. IPLEX/I",
              "voters": 277
            },
            {
              "station": "C.S. IPLEX/J",
              "voters": 287
            },
            {
              "station": "C.S. IPLEX/L",
              "voters": 332
            },
            {
              "station": "C.S. IPLEX/M",
              "voters": 338
            },
            {
              "station": "C.S. IPLEX/N",
              "voters": 134
            }
          ],
          "DJOUNGOLO I ETOUDI MBALLA V": [
            {
              "station": "C.S. IPLEX/C",
              "voters": 272
            },
            {
              "station": "C.S. IPLEX/F",
              "voters": 294
            },
            {
              "station": "C.S. IPLEX/K",
              "voters": 269
            }
          ],
          "MBALLA VI MFANDENA I": [
            {
              "station": "E.P. MFANDENA I/A",
              "voters": 284
            },
            {
              "station": "E.P. MFANDENA I/B",
              "voters": 276
            },
            {
              "station": "E.P. MFANDENA I/C",
              "voters": 301
            },
            {
              "station": "E.P. MFANDENA I/D",
              "voters": 333
            },
            {
              "station": "E.P. MFANDENA I/E",
              "voters": 295
            },
            {
              "station": "E.P. MFANDENA I/F",
              "voters": 327
            },
            {
              "station": "E.P. MFANDENA I/G",
              "voters": 332
            },
            {
              "station": "E.P. MFANDENA1/H",
              "voters": 334
            },
            {
              "station": "E.P. MFANDENA1/1",
              "voters": 323
            }
          ],
          "MBALLA VII": [
            {
              "station": "E. P. DE MBALLA VII/A",
              "voters": 301
            },
            {
              "station": "E. P. DE MBALLA VII/B",
              "voters": 295
            },
            {
              "station": "E. P. DE MBALLA VII/C",
              "voters": 285
            },
            {
              "station": "E. P. DE MBALLA VII/D",
              "voters": 297
            },
            {
              "station": "E. P. DE MBALLA VII/E",
              "voters": 270
            },
            {
              "station": "E. P. DE MBALLA VII/F",
              "voters": 302
            }
          ],
          "MFANDENA I": [
            {
              "station": "ELIG-EDZOA CHAPELLE /A",
              "voters": 308
            },
            {
              "station": "ELIG-EDZOA CHAPELLE/ В",
              "voters": 312
            },
            {
              "station": "ELIG-EDZOA CHAPELLE/C",
              "voters": 327
            },
            {
              "station": "ELIG-EDZOA CHAPELLE/D",
              "voters": 315
            },
            {
              "station": "ELIG-EDZOA CHAPELLE/E",
              "voters": 181
            }
          ],
          "NJOANASSI": [
            {
              "station": "E.P. BILINGUE DE NJOANASSI/A",
              "voters": 363
            },
            {
              "station": "E.P. BILINGUE DE NJOANASSI/ В",
              "voters": 322
            }
          ],
          "NKOLNDOMI": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES/A",
              "voters": 319
            },
            {
              "station": "INSTITUT. SUP. TECH. MEDICALE/C",
              "voters": 440
            },
            {
              "station": "POSTE AGRICOLE DE NKOLNDOMI/A",
              "voters": 413
            }
          ],
          "NKOLNDOM I": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE LES/B",
              "voters": 161
            },
            {
              "station": "INSTITUT. SUP. TECH. MEDICALE/A",
              "voters": 383
            },
            {
              "station": "INSTITUT. SUP. TECH. MEDICALE/B",
              "voters": 368
            },
            {
              "station": "COLLEGE MVOM NNAM /A",
              "voters": 330
            },
            {
              "station": "COLLEGE MVOM NNAM/В",
              "voters": 147
            }
          ],
          "NKOLNDOM II": [
            {
              "station": "CENTRE DE SANTE CARREFOUR 4/A",
              "voters": 125
            },
            {
              "station": "E.MAT.PUBLIQUE NKOLNDOM II/A",
              "voters": 342
            },
            {
              "station": "E.MAT.PUBLIQUE NKOLNDOM II/B",
              "voters": 299
            }
          ],
          "NKOLNDOM III": [
            {
              "station": "ECOLE FRANCO ANGLAISE THE WINNERS/A",
              "voters": 91
            }
          ],
          "NKOLMBONG": [
            {
              "station": "CENTRE DE SANTE ZOGO ABENA/A",
              "voters": 330
            },
            {
              "station": "CENTRE DE SANTE ZOGO ABENA/B",
              "voters": 201
            },
            {
              "station": "COMPLEXE SCOLAIRE ORNEL/A",
              "voters": 314
            },
            {
              "station": "COMPLEXE SCOLAIRE ORNEL/B",
              "voters": 309
            },
            {
              "station": "COMPLEXE SCOLAIRE ORNEL/C",
              "voters": 349
            },
            {
              "station": "COMPLEXE SCOLAIRE ORNEL/D",
              "voters": 254
            },
            {
              "station": "COMPLEXE SCOLAIRE ORNEL/E",
              "voters": 323
            },
            {
              "station": "CHRISTIAN COMPREHENSIVE SECONDARY SCHOOL/A",
              "voters": 146
            },
            {
              "station": "CS MALOUM/A",
              "voters": 134
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE/A",
              "voters": 331
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE /B",
              "voters": 326
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE/C",
              "voters": 325
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE/D",
              "voters": 316
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE /E",
              "voters": 323
            },
            {
              "station": "HONOR BILINGUAL COMPLEXE /F",
              "voters": 257
            }
          ],
          "NLONGKAK I": [
            {
              "station": "CETIC COMMUNAL/A",
              "voters": 273
            }
          ],
          "CENTRE COMMERCIAL CENTRE COMMERCIAL EKOMBITIE EKOMBITIE NLONGKAK NLONGKAK I": [
            {
              "station": "COLLEGE MATAMFEM/A",
              "voters": 346
            },
            {
              "station": "COLLEGE MATAMFEM/B",
              "voters": 326
            },
            {
              "station": "COLLEGE MATAMFEM/C",
              "voters": 330
            },
            {
              "station": "COLLEGE MATAMFEM/D",
              "voters": 316
            },
            {
              "station": "COLLEGE MATAMFEM/E",
              "voters": 294
            },
            {
              "station": "COLLEGE MATAMFEM/F",
              "voters": 307
            },
            {
              "station": "COLLEGE MATAMFEM/G",
              "voters": 299
            },
            {
              "station": "COLLEGE MATAMFEM/H",
              "voters": 308
            },
            {
              "station": "COLLEGE MATAMFEM/Л",
              "voters": 299
            },
            {
              "station": "COLLEGE MATAMFEM/J",
              "voters": 299
            },
            {
              "station": "COLLEGE MATAMFEM/K",
              "voters": 117
            }
          ],
          "NLONGKAK II": [
            {
              "station": "COMPLEXE SCOLAIRE LA GAIETE/A",
              "voters": 291
            },
            {
              "station": "COMPLEXE SCOLAIRE LA GAIETE/B",
              "voters": 271
            },
            {
              "station": "COMPLEXE SCOLAIRE LA GAIETE/C",
              "voters": 289
            },
            {
              "station": "COMPLEXE SCOLAIRE LA GAIETE/E",
              "voters": 297
            },
            {
              "station": "CETIC CHARLES ATANGANA/B",
              "voters": 265
            },
            {
              "station": "CETIC CHARLES ATANGANA/C",
              "voters": 310
            },
            {
              "station": "CETIC CHARLES ATANGANA/D",
              "voters": 256
            },
            {
              "station": "CETIC CHARLES ATANGANA/E",
              "voters": 385
            },
            {
              "station": "LYCEE DE NKOL-ETON/A",
              "voters": 314
            },
            {
              "station": "LYCEE DE NKOL-ETON/B",
              "voters": 286
            },
            {
              "station": "LYCEE DE NKOL-ETON/C",
              "voters": 323
            },
            {
              "station": "LYCEE DE NKOL-ETON/D",
              "voters": 322
            }
          ],
          "NLONGKАК II": [
            {
              "station": "COMPLEXE SCOLAIRE LA GAIETE/D",
              "voters": 297
            },
            {
              "station": "CETIC CHARLES ATANGANA/A",
              "voters": 250
            }
          ],
          "NLONGKАK II": [
            {
              "station": "LYCEE DE NKOL-ETON/E",
              "voters": 295
            }
          ],
          "DJOUNGOLO II NTOUGOU I": [
            {
              "station": "E. M. P. BILINGUE DE BASTOS/A",
              "voters": 407
            },
            {
              "station": "E. M. P. BILINGUE DE BASTOS/В",
              "voters": 368
            },
            {
              "station": "E. M. P. BILINGUE DE BASTOS/C",
              "voters": 327
            },
            {
              "station": "E. M. P. BILINGUE DE BASTOS/D",
              "voters": 247
            }
          ],
          "DJOUNGOLO II NTOUGOUI": [
            {
              "station": "E. M. P. BILINGUE DE BASTOS/E",
              "voters": 106
            }
          ],
          "CENTRE COMMERCIAL ETOUDI ETOUDI PALAIS NLONGKAK I NTOUGOU I": [
            {
              "station": "ECOLE BILINGUE DE BASTOS/A",
              "voters": 385
            },
            {
              "station": "ECOLE BILINGUE DE BASTOS/B",
              "voters": 277
            },
            {
              "station": "ECOLE BILINGUE DE BASTOS/C",
              "voters": 286
            },
            {
              "station": "ECOLE BILINGUE DE BASTOS/D",
              "voters": 283
            }
          ],
          "CENTRE COMMERCIAL NTOUGOU I": [
            {
              "station": "E. FRANCOPHONE DE BASTOS /A",
              "voters": 319
            },
            {
              "station": "E. FRANCOPHONE DE BASTOS/D",
              "voters": 251
            },
            {
              "station": "E. FRANCOPHONE DE BASTOS/E",
              "voters": 345
            }
          ],
          "CENTRE COMMERCIAL NTOUGOUI": [
            {
              "station": "E. FRANCOPHONE DE BASTOS/B",
              "voters": 272
            },
            {
              "station": "E. FRANCOPHONE DE BASTOS/C",
              "voters": 300
            }
          ],
          "NYOM II": [
            {
              "station": "E.P. NYOM II/A",
              "voters": 344
            },
            {
              "station": "E.P. NYOM II/B",
              "voters": 332
            },
            {
              "station": "E.P. NYOM II/C",
              "voters": 319
            },
            {
              "station": "E.P. NYOM II/D",
              "voters": 386
            },
            {
              "station": "E.P. NYOM II/E",
              "voters": 349
            },
            {
              "station": "E.P. NYOM II/F",
              "voters": 268
            },
            {
              "station": "E.P. NYOM II/G",
              "voters": 276
            },
            {
              "station": "E.P. NYOM II/H",
              "voters": 292
            },
            {
              "station": "IUSTY/A",
              "voters": 329
            },
            {
              "station": "LYCEE BILINGUE DE NYOM II/ A",
              "voters": 325
            }
          ],
          "NYOM I NYOM II": [
            {
              "station": "ELITE SCHOOL/A",
              "voters": 348
            },
            {
              "station": "ELITE SCHOOL/B",
              "voters": 315
            },
            {
              "station": "ELITE SCHOOL/С",
              "voters": 359
            }
          ],
          "OKOLO": [
            {
              "station": "E. P. MATERNELLE PRIVEE LE FLAMBEAU/A",
              "voters": 349
            },
            {
              "station": "E. P. MATERNELLE PRIVEE LE FLAMBEAU/B",
              "voters": 269
            },
            {
              "station": "E. P. MATERNELLE PRIVEE LE FLAMBEAU/C",
              "voters": 325
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/A",
              "voters": 292
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/B",
              "voters": 302
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/C",
              "voters": 324
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/D",
              "voters": 385
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/E",
              "voters": 379
            },
            {
              "station": "GROUPE SCOLAIRE LE NIL/F",
              "voters": 247
            },
            {
              "station": "E.PR. CNPS/A",
              "voters": 269
            },
            {
              "station": "E.PR. CNPS / B",
              "voters": 257
            },
            {
              "station": "E.PR. CNPS/C",
              "voters": 319
            },
            {
              "station": "E.PR. CNPS/D",
              "voters": 308
            },
            {
              "station": "E.PR. CNPS/E",
              "voters": 338
            },
            {
              "station": "E.PR. CNPS/F",
              "voters": 134
            }
          ],
          "OLEMBE I": [
            {
              "station": "CABINET ST RAPHAEL/A",
              "voters": 370
            },
            {
              "station": "CABINET ST RAPHAEL/B",
              "voters": 341
            },
            {
              "station": "CABINET ST RAPHAEL/C",
              "voters": 235
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/B",
              "voters": 338
            }
          ],
          "OLEMBE II": [
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/A",
              "voters": 332
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/C",
              "voters": 344
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/D",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/F",
              "voters": 334
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/G",
              "voters": 359
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/H",
              "voters": 315
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/1",
              "voters": 334
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/K",
              "voters": 377
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/L",
              "voters": 384
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/M",
              "voters": 266
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/N",
              "voters": 370
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/P",
              "voters": 346
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/Q",
              "voters": 206
            },
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/R",
              "voters": 147
            },
            {
              "station": "FAIRVIEW INT'L BILINGUAL SCHOOL OLEMBE I/A",
              "voters": 248
            },
            {
              "station": "FAIRVIEW INT'L BILINGUAL SCHOOL OLEMBЕ II/B",
              "voters": 241
            },
            {
              "station": "ECOLE PUBLIQUE CAMP SIC OLEMBE II/ B",
              "voters": 136
            }
          ],
          "EFOULAN II": [
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/E",
              "voters": 312
            }
          ],
          "OLEMBE": [
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/J",
              "voters": 383
            }
          ],
          "OLEMBЕ II": [
            {
              "station": "ECOLE PUBLIQUE D'OLEMBE II/0",
              "voters": 343
            },
            {
              "station": "ECOLE PUBLIQUE CAMP SIC OLEMBE II/A",
              "voters": 293
            }
          ],
          "ETOUDI TSINGA VILLAGE": [
            {
              "station": "E. P. TSINGA VILLAGE /A",
              "voters": 303
            },
            {
              "station": "E. P. TSINGA VILLAGE / В",
              "voters": 159
            },
            {
              "station": "E. P. TSINGA VILLAGE /C",
              "voters": 336
            },
            {
              "station": "E. P. TSINGA VILLAGE/D",
              "voters": 324
            },
            {
              "station": "E. P. TSINGA VILLAGE/E",
              "voters": 284
            }
          ],
          "BALLA I MBALLAI": [
            {
              "station": "LES PETITS GIDDEONS/A",
              "voters": 338
            },
            {
              "station": "LES PETITS GIDDEONS/B",
              "voters": 342
            },
            {
              "station": "LES PETITS GIDDEONS/E",
              "voters": 366
            }
          ],
          "BALLA I MBALLA I": [
            {
              "station": "LES PETITS GIDDEONS/C",
              "voters": 341
            },
            {
              "station": "LES PETITS GIDDEONS/D",
              "voters": 292
            }
          ],
          "CENTRE COMMERCIAL CENTRE COMMERCIAL NLONGKAK": [
            {
              "station": "CENTRE CULTUREL CAMEROUNAIS/A",
              "voters": 270
            }
          ],
          "EKOMBITIE EMANA BILIK": [
            {
              "station": "GSB LE TEMPS DES CERISES/A",
              "voters": 213
            }
          ],
          "NTOUGOU I NYOMI": [
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/A",
              "voters": 349
            }
          ],
          "NTOUGOU I NYOM I": [
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/B",
              "voters": 337
            },
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/C",
              "voters": 341
            },
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/D",
              "voters": 328
            },
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/E",
              "voters": 323
            },
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/F",
              "voters": 383
            },
            {
              "station": "SOCRATE ELANDI OU MUNA MBOA/G",
              "voters": 158
            }
          ],
          "EKOMBITIE EKOMBITIE": [
            {
              "station": "ECOLE FRANCOPHONE ENTREE CNPS MESSASSI/A",
              "voters": 281
            },
            {
              "station": "ECOLE FRANCOPHONE ENTREE CNPS MESSASSI/B",
              "voters": 266
            }
          ],
          "TSINGA VILLAGE": [
            {
              "station": "MUBA BILINGUAL SCHOOL/A",
              "voters": 190
            }
          ],
          "ETOUDI": [
            {
              "station": "E M CATHOLQUE D'ETOUDI/A",
              "voters": 346
            },
            {
              "station": "E M CATHOLQUE D'ETOUDI/B",
              "voters": 345
            },
            {
              "station": "E M CATHOLQUE D'ETOUDI/C",
              "voters": 341
            },
            {
              "station": "E M CATHOLQUE D'ETOUDI/D",
              "voters": 363
            }
          ],
          "MBALLA VI": [
            {
              "station": "GS BILINGUE LEMA/A",
              "voters": 344
            },
            {
              "station": "GS BILINGUE LEMA/B",
              "voters": 346
            },
            {
              "station": "GS BILINGUE LEMA/C",
              "voters": 339
            },
            {
              "station": "GS BILINGUE LEMA/D",
              "voters": 346
            },
            {
              "station": "GS BILINGUE LEMA/E",
              "voters": 341
            },
            {
              "station": "GS BILINGUE LEMA/F",
              "voters": 343
            },
            {
              "station": "GS BILINGUE LEMA/G",
              "voters": 347
            },
            {
              "station": "GS BILINGUE LEMA/H",
              "voters": 198
            }
          ]
        },
        "YAOUNDÉ II": {
          "AZEGUE, AZEGUE I, AZEGUE II, AZEGUE III, MOKOLO": [
            {
              "station": "ECOLE CATH SACRE COEUR 1/A",
              "voters": 281
            },
            {
              "station": "ECOLE CATH SACRE COEUR I/B",
              "voters": 240
            },
            {
              "station": "ECOLE CATH SACRE COEUR 1/C",
              "voters": 243
            }
          ],
          "AZEGUE I": [
            {
              "station": "ECOLE CATH SACRE COEUR II/A",
              "voters": 279
            },
            {
              "station": "ECOLE CATH SACRE COEUR II/B",
              "voters": 286
            }
          ],
          "AZEGUE II": [
            {
              "station": "ECOLE CATH SACRE COEUR III/A",
              "voters": 316
            },
            {
              "station": "ECOLE CATH SACRE COEUR III/B",
              "voters": 305
            },
            {
              "station": "ECOLE CATH SACRE COEUR III/C",
              "voters": 300
            }
          ],
          "AZEGUE III": [
            {
              "station": "ECOLE CATH SACRE COEUR IV/A",
              "voters": 334
            },
            {
              "station": "ECOLE CATH SACRE COEUR IV/B",
              "voters": 287
            }
          ],
          "AZEGUE IV, MADAGASCAR, MADAGASCAR I, MESSA CARRIERE": [
            {
              "station": "ECOLE DES SOURCES I/A",
              "voters": 398
            },
            {
              "station": "ECOLE DES SOURCES I/B",
              "voters": 373
            },
            {
              "station": "ECOLE DES SOURCES 1/C",
              "voters": 357
            },
            {
              "station": "ECOLE DES SOURCES I/D",
              "voters": 327
            },
            {
              "station": "ECOLE DES SOURCES I/E",
              "voters": 315
            },
            {
              "station": "ECOLE DES SOURCES 1/F",
              "voters": 378
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "E. BILINGUE EKOUDOU 1/A",
              "voters": 309
            },
            {
              "station": "E. BILINGUE EKOUDOU 1/B",
              "voters": 302
            },
            {
              "station": "E. BILINGUE EKOUDOUI/C",
              "voters": 325
            }
          ],
          "BRIQUETERIE CENTRE, BRIQUETERIE CENTRE I, BRIQUETERIE EST I": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOUT/A",
              "voters": 221
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOUI/B",
              "voters": 260
            }
          ],
          "BRIQUETERIE CENTRE I": [
            {
              "station": "ECOLE MATERNELLE D'EKOUDOU/A",
              "voters": 344
            },
            {
              "station": "ECOLE MATERNELLE D'EKOUDOU/B",
              "voters": 278
            },
            {
              "station": "E MISSION CATHI/A",
              "voters": 395
            },
            {
              "station": "E MISSION CATHI/B",
              "voters": 347
            },
            {
              "station": "E MISSION CATHI/C",
              "voters": 395
            }
          ],
          "BRIQUETERIE EST I, ECOLE DE POLICE": [
            {
              "station": "E BILINGUE EKOUDOU II/A",
              "voters": 343
            },
            {
              "station": "E BILINGUE EKOUDOU II/B",
              "voters": 331
            },
            {
              "station": "E BILINGUE EKOUDOU II/C",
              "voters": 270
            },
            {
              "station": "E BILINGUE EKOUDOU II/D",
              "voters": 293
            },
            {
              "station": "E BILINGUE EKOUDOU II/E",
              "voters": 268
            },
            {
              "station": "E BILINGUE EKOUDOU II/F",
              "voters": 281
            },
            {
              "station": "E BILINGUE EKOUDOU II/G",
              "voters": 280
            },
            {
              "station": "E BILINGUE EKOUDOU II/H",
              "voters": 253
            }
          ],
          "BRIQUETERIE EST I, MESSA CARRIERE": [
            {
              "station": "E MAT. DE POLICE 1I/A",
              "voters": 232
            },
            {
              "station": "E MAT. DE POLICE I/B",
              "voters": 240
            }
          ],
          "BRIQUETERIE CENTRE I, BRIQUETERIE EST I, BRIQUETERIE EST II": [
            {
              "station": "GRANDE MOSQUEEI/A",
              "voters": 302
            }
          ],
          "BRIQUETERIE EST II": [
            {
              "station": "E. MAT DE POLICE II/A",
              "voters": 376
            },
            {
              "station": "E. MAT DE POLICE II/B",
              "voters": 306
            }
          ],
          "BRIQUETERIE EST III, TSINGA": [
            {
              "station": "FECAFOOT/A",
              "voters": 272
            },
            {
              "station": "FECAFOOT/B",
              "voters": 215
            }
          ],
          "BRIQUETERIE EST IV": [
            {
              "station": "E MAT. DE POLICE III/A",
              "voters": 305
            },
            {
              "station": "E MISSION CATH II/A",
              "voters": 246
            },
            {
              "station": "E MISSION CATH II/B",
              "voters": 213
            }
          ],
          "BRIQUETERIE OUEST": [
            {
              "station": "FOYER BANKA/A",
              "voters": 327
            }
          ],
          "BRIQUETERIE QUEST": [
            {
              "station": "MOSQUEE BRIQUETERIE OUEST/A",
              "voters": 266
            }
          ],
          "CITE VERTE": [
            {
              "station": "ECOLE MAT CITE VERTE/A",
              "voters": 275
            },
            {
              "station": "ECOLE MAT CITE VERTE/B",
              "voters": 251
            },
            {
              "station": "ECOLE MAT CITE VERTE/C",
              "voters": 288
            },
            {
              "station": "E PR LES PETITS AMIS/A",
              "voters": 328
            },
            {
              "station": "E PR LES PETITS AMIS/B",
              "voters": 325
            },
            {
              "station": "E PR LES PETITS AMIS/C",
              "voters": 261
            },
            {
              "station": "HOPITAL CITE VERTE/A",
              "voters": 350
            },
            {
              "station": "HOPITAL CITE VERTE/B",
              "voters": 299
            },
            {
              "station": "HOPITAL CITE VERTE/C",
              "voters": 291
            },
            {
              "station": "LYCEE DE LA CITE VERTE/A",
              "voters": 363
            },
            {
              "station": "LYCEE DE LA CITE VERTE/B",
              "voters": 407
            },
            {
              "station": "LYCEE DE LA CITE VERTE/C",
              "voters": 392
            },
            {
              "station": "LYCEE DE LA CITE VERTE/D",
              "voters": 386
            },
            {
              "station": "LYCEE DE LA CITE VERTE/E",
              "voters": 406
            },
            {
              "station": "LYCEE DE LA CITE VERTE/F",
              "voters": 412
            },
            {
              "station": "LYCEE DE LA CITE VERTE/G",
              "voters": 380
            },
            {
              "station": "LYCEE DE LA CITE VERTE/H",
              "voters": 376
            },
            {
              "station": "LYCEE DE LA CITE VERTE/1",
              "voters": 392
            },
            {
              "station": "LYCEE DE LA CITE VERTE / J",
              "voters": 354
            },
            {
              "station": "LYCEE DE LA CITE VERTE/K",
              "voters": 338
            },
            {
              "station": "LYCEE DE LA CITE VERTE/L",
              "voters": 353
            },
            {
              "station": "LYCEE DE LA CITE VERTE/M",
              "voters": 297
            },
            {
              "station": "LYCEE DE LA CITE VERTE/N",
              "voters": 374
            },
            {
              "station": "LYCEE DE LA CITE VERTE/O",
              "voters": 445
            },
            {
              "station": "LYCEE DE LA CITE VERTE/P",
              "voters": 447
            },
            {
              "station": "LYCEE DE LA CITE VERTE/Q",
              "voters": 311
            },
            {
              "station": "LYCEE DE LA CITE VERTE/R",
              "voters": 403
            },
            {
              "station": "E.PR. LES ARMANDINS/A",
              "voters": 341
            }
          ],
          "EKOUDOU II": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU II/A",
              "voters": 346
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU II/B",
              "voters": 359
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU II/C",
              "voters": 297
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU II/D",
              "voters": 305
            },
            {
              "station": "FOYER KOMAI YA SAKE/A",
              "voters": 257
            },
            {
              "station": "FOYER KOMAI YA SAKE/B",
              "voters": 268
            }
          ],
          "BRIQUETERIE, EKOUDOU II": [
            {
              "station": "MOSQUEE DU MILIEU EKOUDOU II/A",
              "voters": 323
            },
            {
              "station": "MOSQUEE DU MILIEU EKOUDOU II/B",
              "voters": 308
            },
            {
              "station": "MOSQUEE DU MILIEU EKOUDOU II/C",
              "voters": 305
            }
          ],
          "EKOUDOU III": [
            {
              "station": "GRANDE MOSQUEE II/A",
              "voters": 283
            },
            {
              "station": "GRANDE MOSQUEE II/B",
              "voters": 239
            },
            {
              "station": "GRANDE MOSQUEE II/C",
              "voters": 225
            }
          ],
          "EKOUDOU IV": [
            {
              "station": "ECOLE FRANCO ARABE I/A",
              "voters": 252
            },
            {
              "station": "ECOLE FRANCO ARABE I/B",
              "voters": 200
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/A",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/B",
              "voters": 348
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/ C",
              "voters": 331
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/D",
              "voters": 279
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/E",
              "voters": 449
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU III/F",
              "voters": 125
            },
            {
              "station": "GRANDE MOSQUEE III/A",
              "voters": 318
            },
            {
              "station": "GRANDE MOSQUEE III/B",
              "voters": 247
            }
          ],
          "EKOUDOU VI": [
            {
              "station": "ECOLE FRANCO ARABE II/A",
              "voters": 222
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU IV/A",
              "voters": 409
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU IV/B",
              "voters": 373
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU IV/C",
              "voters": 341
            },
            {
              "station": "ECOLE PUBLIQUE D'EKOUDOU IV/D",
              "voters": 332
            }
          ],
          "FEBE": [
            {
              "station": "ECOLE PUBLIQUE FEBE/A",
              "voters": 421
            },
            {
              "station": "ECOLE PUBLIQUE FEBE/B",
              "voters": 418
            },
            {
              "station": "ECOLE PUBLIQUE FEBE/C",
              "voters": 405
            },
            {
              "station": "ECOLE PUBLIQUE FEBE/D",
              "voters": 311
            },
            {
              "station": "ECOLE PUBLIQUE FEBE/E",
              "voters": 393
            }
          ],
          "GRAND MESSA, MOKOLO": [
            {
              "station": "E. P. MESSA/A",
              "voters": 391
            },
            {
              "station": "Ε. Ρ. MESSA/B",
              "voters": 370
            },
            {
              "station": "E. P. MESSA/C",
              "voters": 373
            },
            {
              "station": "E. P. MESSA/D",
              "voters": 365
            },
            {
              "station": "E. P. MESSA/E",
              "voters": 345
            },
            {
              "station": "E. P. MESSA/F",
              "voters": 377
            },
            {
              "station": "E. P. MESSA/G",
              "voters": 384
            },
            {
              "station": "Ε. Ρ. MESSA/H",
              "voters": 465
            },
            {
              "station": "E. P. MESSA/1",
              "voters": 179
            }
          ],
          "GRAND MESSA": [
            {
              "station": "RECETTES DES FINANCES/A",
              "voters": 49
            }
          ],
          "HOPITAL CENTRAL": [
            {
              "station": "E PUBLIQUE CAMP BOVE/A",
              "voters": 195
            },
            {
              "station": "HOPITAL CENTRAL/A",
              "voters": 178
            },
            {
              "station": "HOPITAL CENTRAL/B",
              "voters": 180
            },
            {
              "station": "HOPITAL CENTRAL/C",
              "voters": 207
            }
          ],
          "MADAGASCAR, MADAGASCAR I": [
            {
              "station": "CTRE DE JEUNESSE MADAGASCAR 1/A",
              "voters": 261
            },
            {
              "station": "CTRE DE JEUNESSE MADAGASCAR 1/B",
              "voters": 347
            },
            {
              "station": "CTRE DE JEUNESSE MADAGASCAR I/C",
              "voters": 249
            },
            {
              "station": "CTRE DE JEUNESSE MADAGASCAR 1/D",
              "voters": 241
            }
          ],
          "MADAGASCAR, MADAGASCAR II": [
            {
              "station": "ECOLE DES SOURCES II/A",
              "voters": 365
            },
            {
              "station": "ECOLE DES SOURCES II/B",
              "voters": 326
            },
            {
              "station": "ECOLE DES SOURCES II/C",
              "voters": 313
            },
            {
              "station": "ECOLE DES SOURCES II/D",
              "voters": 456
            }
          ],
          "MADAGASCAR III, MESSA ANGONO": [
            {
              "station": "ECOLE DES SOURCES III/A",
              "voters": 312
            },
            {
              "station": "ECOLE DES SOURCES III/B",
              "voters": 343
            },
            {
              "station": "ECOLE DES SOURCES III/ C",
              "voters": 302
            },
            {
              "station": "ECOLE DES SOURCES III / D",
              "voters": 131
            }
          ],
          "MADAGASCAR IV": [
            {
              "station": "ECOLE DES SOURCES IV/A",
              "voters": 317
            },
            {
              "station": "ECOLE DES SOURCES IV/B",
              "voters": 303
            },
            {
              "station": "ECOLE DES SOURCES IV/C",
              "voters": 228
            }
          ],
          "MESSA ANGONO": [
            {
              "station": "REFUGE BILINGUAL SCHOOL/A",
              "voters": 334
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/B",
              "voters": 312
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/C",
              "voters": 318
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/D",
              "voters": 318
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/E",
              "voters": 343
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/F",
              "voters": 310
            },
            {
              "station": "REFUGE BILINGUAL SCHOOL/G",
              "voters": 273
            },
            {
              "station": "LE COMPLEXE AYUNGHA/A",
              "voters": 418
            },
            {
              "station": "LE COMPLEXE AYUNGHA/B",
              "voters": 446
            },
            {
              "station": "LE COMPLEXE AYUNGHA/C",
              "voters": 382
            },
            {
              "station": "LE COMPLEXE AYUNGHA/D",
              "voters": 327
            },
            {
              "station": "LE COMPLEXE AYUNGHA/E",
              "voters": 111
            }
          ],
          "MESSA CARRIERE": [
            {
              "station": "E MAT DES SOURCES/A",
              "voters": 437
            },
            {
              "station": "E MAT DES SOURCES/B",
              "voters": 299
            },
            {
              "station": "E MAT DES SOURCES/C",
              "voters": 295
            },
            {
              "station": "E MAT DES SOURCES/D",
              "voters": 280
            },
            {
              "station": "E MAT DES SOURCES/E",
              "voters": 288
            },
            {
              "station": "E MAT DES SOURCES/F",
              "voters": 301
            },
            {
              "station": "E MAT DES SOURCES/G",
              "voters": 279
            },
            {
              "station": "E MAT DES SOURCES/H",
              "voters": 269
            },
            {
              "station": "E MAT DES SOURCES/1",
              "voters": 272
            },
            {
              "station": "E MAT DES SOURCES/J",
              "voters": 315
            },
            {
              "station": "INSTITUT BILINGUE BLAINA/A",
              "voters": 316
            },
            {
              "station": "INSTITUT BILINGUE BLAINA/B",
              "voters": 235
            }
          ],
          "MESSA DOUMASSI": [
            {
              "station": "CTRE EDUC LES ETOILES I/A",
              "voters": 331
            },
            {
              "station": "CTRE EDUC LES ETOILES 1/B",
              "voters": 303
            },
            {
              "station": "CTRE EDUC LES ETOILES 1/C",
              "voters": 164
            }
          ],
          "MESSA EKOAZON": [
            {
              "station": "CTRE EDUCATIF SINEGHA/A",
              "voters": 316
            },
            {
              "station": "CTRE EDUCATIF SINEGHA/B",
              "voters": 338
            },
            {
              "station": "CTRE EDUCATIF SINEGHA/C",
              "voters": 297
            },
            {
              "station": "CTRE EDUCATIF SINEGHA/D",
              "voters": 236
            }
          ],
          "MESSA MEZALA": [
            {
              "station": "ANCIENNE GAR ROUT DLA/A",
              "voters": 405
            },
            {
              "station": "ANCIENNE GAR ROUT DLA/B",
              "voters": 381
            },
            {
              "station": "ANCIENNE GAR ROUT DLA/C",
              "voters": 294
            },
            {
              "station": "ANCIENNE GAR ROUT DLA/D",
              "voters": 312
            },
            {
              "station": "ANCIENNE GAR ROUT DLA/E",
              "voters": 368
            },
            {
              "station": "ANCIENNE GAR ROUT DLA/F",
              "voters": 120
            }
          ],
          "MADAGASCAR, MESSA NKOA BAH": [
            {
              "station": "CTRE JEUNESSE MADAGASCAR II/A",
              "voters": 332
            },
            {
              "station": "CTRE JEUNESSE MADAGASCAR II/B",
              "voters": 255
            }
          ],
          "MESSA PLATEAU": [
            {
              "station": "CTRE EDUC LES ETOILES II/A",
              "voters": 330
            },
            {
              "station": "CTRE EDUC LES ETOILES II/B",
              "voters": 348
            }
          ],
          "MOKOLO": [
            {
              "station": "FOYER BANGANGTE FEMME I/A",
              "voters": 88
            },
            {
              "station": "FOYER BANGANGTE FEMME II/A",
              "voters": 88
            },
            {
              "station": "FOYER BANGANGTE FEMME III/A",
              "voters": 145
            }
          ],
          "MOKOLO I": [
            {
              "station": "FOYER BADIANGSEI/A",
              "voters": 266
            },
            {
              "station": "FOYER BADIANGSEI/B",
              "voters": 244
            }
          ],
          "MOKOLO II": [
            {
              "station": "PERCEPTION MARCHE MOKOLO/A",
              "voters": 324
            },
            {
              "station": "PERCEPTION MARCHE MOKOLO/B",
              "voters": 290
            },
            {
              "station": "PERCEPTION MARCHE MOKOLO/C",
              "voters": 293
            },
            {
              "station": "PERCEPTION MARCHE MOKOLO/D",
              "voters": 275
            },
            {
              "station": "PERCEPTION MARCHE MOKOLO/E",
              "voters": 241
            }
          ],
          "MOKOLO III, MOKOLO VII": [
            {
              "station": "FOYER MEKOUMBOU NDE/A",
              "voters": 338
            }
          ],
          "MOKOLO IV": [
            {
              "station": "MARCHE MOKOLO 1/A",
              "voters": 346
            },
            {
              "station": "MARCHE MOKOLO 1/B",
              "voters": 387
            },
            {
              "station": "MARCHE MOKOLO I/C",
              "voters": 394
            }
          ],
          "MOKOLO VI": [
            {
              "station": "FOYER BAPOUMPA 1/A",
              "voters": 220
            },
            {
              "station": "FOYER BAPOUMPA1/B",
              "voters": 251
            },
            {
              "station": "FOYER BAPOUMPAI/C",
              "voters": 204
            }
          ],
          "MOKOLO VII": [
            {
              "station": "FOYER BANGANGTE HOMME I/A",
              "voters": 345
            },
            {
              "station": "FOYER BANGANGTE HOMME I/B",
              "voters": 145
            },
            {
              "station": "FOYER BANGANGTE HOMME II/A",
              "voters": 321
            },
            {
              "station": "FOYER BANGANGTE HOMME II/B",
              "voters": 284
            },
            {
              "station": "FOYER BADIANGSE II/A",
              "voters": 74
            },
            {
              "station": "FOYER BAPOUMPA II/A",
              "voters": 38
            },
            {
              "station": "MARCHE MOKOLO/A",
              "voters": 337
            },
            {
              "station": "MARCHE MOKOLO/B",
              "voters": 337
            },
            {
              "station": "MARCHE MOKOLO/C",
              "voters": 284
            },
            {
              "station": "MARCHE MOKOLO/D",
              "voters": 350
            },
            {
              "station": "MARCHE MOKOLO/E",
              "voters": 192
            }
          ],
          "ΝΚΟΜΚΑΝΑ": [
            {
              "station": "CTRE DE JNESSE ΝΚΟΜΚΑΝΑ/Α",
              "voters": 306
            },
            {
              "station": "CTRE DE JNESSE NΚΟΜΚΑΝΑ/B",
              "voters": 323
            },
            {
              "station": "FOYER BAHOUOCI/B",
              "voters": 306
            },
            {
              "station": "FOYER BAKANGOUE/A",
              "voters": 229
            },
            {
              "station": "FOYER BAKANGOUE/B",
              "voters": 228
            },
            {
              "station": "FOYER BAHOUOC II/A",
              "voters": 355
            }
          ],
          "NKOMKANA": [
            {
              "station": "CTRE DE JNESSE NKOMKANA/C",
              "voters": 335
            },
            {
              "station": "FOYER BAHOUOC 1/A",
              "voters": 316
            },
            {
              "station": "FOYER BALENGOU NKOMKANA/B",
              "voters": 209
            }
          ],
          "ΝΚΟΜΚΑΝΑ Ι": [
            {
              "station": "FOYER BALENGOU NKOMKANA/A",
              "voters": 274
            },
            {
              "station": "FOYER BAHOUOC II/B",
              "voters": 287
            }
          ],
          "AZEGUE IV, NKOMKANA": [
            {
              "station": "FOYER BAZOU NKOΜΚΑΝΑ/Α",
              "voters": 300
            }
          ],
          "ΝΚΟΜΚΑΝΑ II": [
            {
              "station": "E PR GRACE 1/A",
              "voters": 363
            },
            {
              "station": "E PR GRACE 1/B",
              "voters": 359
            },
            {
              "station": "E PR GRACE I/F",
              "voters": 429
            },
            {
              "station": "E. PR BETHLEHEM/C",
              "voters": 302
            },
            {
              "station": "E. PR BETHLEHEM/E",
              "voters": 389
            },
            {
              "station": "E. PR BETHLEHEM/F",
              "voters": 166
            }
          ],
          "ΝΚΟΜΚΑΝA II": [
            {
              "station": "E PR GRACE I/C",
              "voters": 346
            },
            {
              "station": "E PR GRACE 1/E",
              "voters": 333
            },
            {
              "station": "E. PR BETHLEHEM/A",
              "voters": 313
            },
            {
              "station": "E. PR BETHLEHEM/D",
              "voters": 322
            }
          ],
          "ΝΚΟΜΚΑΝΑA II": [
            {
              "station": "E PR GRACE I/D",
              "voters": 351
            },
            {
              "station": "E PR GRACE 1/G",
              "voters": 382
            }
          ],
          "NKOMKANA II": [
            {
              "station": "E. PR BETHLEHEM/B",
              "voters": 337
            }
          ],
          "ΝΚΟΜΚΑΝA III": [
            {
              "station": "E PR GRACE II/A",
              "voters": 301
            },
            {
              "station": "E PR GRACE II/C",
              "voters": 299
            },
            {
              "station": "E PR GRACE II/D",
              "voters": 236
            }
          ],
          "NKOMKANA III": [
            {
              "station": "E PR GRACE II/B",
              "voters": 316
            }
          ],
          "NTOUGOU I": [
            {
              "station": "COLLEGE DE LA GRACE/A",
              "voters": 324
            },
            {
              "station": "COLLEGE DE LA GRACE/C",
              "voters": 326
            },
            {
              "station": "EP TSINGA OLIGA/A",
              "voters": 351
            },
            {
              "station": "EP TSINGA OLIGA/B",
              "voters": 326
            },
            {
              "station": "EP TSINGA OLIGA/D",
              "voters": 333
            },
            {
              "station": "EP TSINGA OLIGA/F",
              "voters": 406
            },
            {
              "station": "EP TSINGA OLIGA/G",
              "voters": 150
            },
            {
              "station": "MAISON DE LA FEMME/D",
              "voters": 163
            }
          ],
          "NTOUGOU T": [
            {
              "station": "COLLEGE DE LA GRACE/B",
              "voters": 312
            },
            {
              "station": "EP TSINGA OLIGA/C",
              "voters": 322
            },
            {
              "station": "EP TSINGA OLIGA/E",
              "voters": 311
            }
          ],
          "NTOUGOU II": [
            {
              "station": "E BILG NEWTON/A",
              "voters": 424
            },
            {
              "station": "E BILG NEWTON/B",
              "voters": 393
            },
            {
              "station": "E BILG NEWTON/C",
              "voters": 365
            },
            {
              "station": "E BILG NEWTON/D",
              "voters": 279
            },
            {
              "station": "FOYER BAMENA/A",
              "voters": 391
            },
            {
              "station": "MAISON DE LA FEMME/A",
              "voters": 267
            },
            {
              "station": "MAISON DE LA FEMME/B",
              "voters": 293
            },
            {
              "station": "MAISON DE LA FEMME/C",
              "voters": 306
            }
          ],
          "OLIGA": [
            {
              "station": "GOOD CHESSER SCHOOL/A",
              "voters": 427
            },
            {
              "station": "GOOD CHESSER SCHOOL/B",
              "voters": 423
            },
            {
              "station": "GOOD CHESSER SCHOOL/C",
              "voters": 412
            },
            {
              "station": "GOOD CHESSER SCHOOL/D",
              "voters": 390
            },
            {
              "station": "GOOD CHESSER SCHOOL/E",
              "voters": 412
            },
            {
              "station": "GOOD CHESSER SCHOOL/F",
              "voters": 337
            },
            {
              "station": "GOOD CHESSER SCHOOL/G",
              "voters": 409
            },
            {
              "station": "GOOD CHESSER SCHOOL/H",
              "voters": 405
            },
            {
              "station": "GOOD CHESSER SCHOOL/1",
              "voters": 407
            },
            {
              "station": "GOOD CHESSER SCHOOL/J",
              "voters": 369
            },
            {
              "station": "GOOD CHESSER SCHOOL/K",
              "voters": 167
            },
            {
              "station": "LES COCCINELLES/A",
              "voters": 412
            },
            {
              "station": "LES COCCINELLES/B",
              "voters": 421
            },
            {
              "station": "LES COCCINELLES/C",
              "voters": 415
            },
            {
              "station": "LES COCCINELLES/D",
              "voters": 433
            },
            {
              "station": "LES COCCINELLES/E",
              "voters": 434
            },
            {
              "station": "LES COCCINELLES/F",
              "voters": 410
            },
            {
              "station": "LES COCCINELLES/G",
              "voters": 429
            },
            {
              "station": "LES COCCINELLES/H",
              "voters": 420
            },
            {
              "station": "LES COCCINELLES/1",
              "voters": 334
            },
            {
              "station": "LES COCCINELLES/J",
              "voters": 400
            },
            {
              "station": "LES COCCINELLES/K",
              "voters": 149
            },
            {
              "station": "LES COCCINELLES/L",
              "voters": 410
            }
          ],
          "TSINGA": [
            {
              "station": "EP TSINGA/A",
              "voters": 335
            },
            {
              "station": "EP TSINGA/B",
              "voters": 342
            },
            {
              "station": "EP TSINGA/C",
              "voters": 329
            },
            {
              "station": "EP TSINGA/D",
              "voters": 312
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEURI/A",
              "voters": 405
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR 1/B",
              "voters": 374
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR I/C",
              "voters": 351
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEURI/D",
              "voters": 360
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEURI/E",
              "voters": 416
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR I/F",
              "voters": 214
            },
            {
              "station": "LYCEE DE TSINGAI/A",
              "voters": 411
            },
            {
              "station": "LYCEE DE TSINGAI/B",
              "voters": 387
            },
            {
              "station": "LYCEE DE TSINGAI/C",
              "voters": 378
            },
            {
              "station": "LYCEE DE TSINGA I/D",
              "voters": 405
            },
            {
              "station": "LYCEE DE TSINGA 1/E",
              "voters": 380
            },
            {
              "station": "LYCEE DE TSINGAI/F",
              "voters": 401
            },
            {
              "station": "LYCEE DE TSINGAI/G",
              "voters": 403
            },
            {
              "station": "LYCEE DE TSINGAT/H",
              "voters": 241
            }
          ],
          "TSINGA, TSINGA I": [
            {
              "station": "E MAT CHRIST ROI TSINGA/A",
              "voters": 314
            },
            {
              "station": "E MAT CHRIST ROI TSINGA/B",
              "voters": 284
            },
            {
              "station": "E MAT CHRIST ROI TSINGA/C",
              "voters": 284
            },
            {
              "station": "E MAT CHRIST ROI TSINGA/D",
              "voters": 281
            },
            {
              "station": "E MAT CHRIST ROI TSINGA/E",
              "voters": 346
            }
          ],
          "TSINGA I": [
            {
              "station": "LYCEE DE TSINGA II/A",
              "voters": 366
            },
            {
              "station": "LYCEE DE TSINGA II/B",
              "voters": 392
            },
            {
              "station": "LYCEE DE TSINGA II/C",
              "voters": 298
            }
          ],
          "ΝΚΟΜΚΑΝΑA II, TSINGA II": [
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR II/A",
              "voters": 398
            }
          ],
          "ΝΚΟΜΚΑΝA II, TSINGA II": [
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR II/B",
              "voters": 375
            },
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR II/C",
              "voters": 294
            }
          ],
          "ΝΚΟΜΚΑΝΑ II, TSINGA II": [
            {
              "station": "INSTITUT MATAMFEN SUPERIEUR II/D",
              "voters": 376
            }
          ],
          "MESSA EKOAZON, MESSA EKOAZON": [
            {
              "station": "COLLEGE PRIVE ROSA PARK/A",
              "voters": 410
            },
            {
              "station": "COLLEGE PRIVE ROSA PARK/B",
              "voters": 427
            },
            {
              "station": "COLLEGE PRIVE ROSA PARK/C",
              "voters": 378
            },
            {
              "station": "COLLEGE PRIVE ROSA PARK/D",
              "voters": 221
            }
          ],
          "MADAGASCAR I": [
            {
              "station": "LYCEE TECHNIQUE DE YAOUNDE 2/A",
              "voters": 44
            }
          ]
        },
        "YAOUNDÉ III": {
          "AFANOYOA I, AFANOYOA II": [
            {
              "station": "E CATH AFANOYOA/A",
              "voters": 377
            },
            {
              "station": "E CATH AFANOYOA/B",
              "voters": 365
            },
            {
              "station": "E CATH AFANOYOA/C",
              "voters": 396
            },
            {
              "station": "E CATH AFANOYOA/D",
              "voters": 308
            }
          ],
          "AFANOYOA III": [
            {
              "station": "LYCEE D'AFANOYOA/A",
              "voters": 352
            }
          ],
          "AFANOYOA IV": [
            {
              "station": "CENTRE DE SANTE AFANOYOA 4/A",
              "voters": 342
            },
            {
              "station": "CENTRE DE SANTE AFANOYOA 4/B",
              "voters": 127
            }
          ],
          "AHALA I": [
            {
              "station": "E. STE THERESE AHALA 1/A",
              "voters": 310
            },
            {
              "station": "E. STE THERESE AHALA 1/B",
              "voters": 321
            },
            {
              "station": "E. STE THERESE AHALA I/C",
              "voters": 311
            },
            {
              "station": "E. STE THERESE AHALA I/D",
              "voters": 291
            },
            {
              "station": "E. STE THERESE AHALA 1/E",
              "voters": 255
            },
            {
              "station": "E. STE THERESE AHALA I/F",
              "voters": 238
            },
            {
              "station": "E. STE THERESE AHALA 1/G",
              "voters": 284
            },
            {
              "station": "E. STE THERESE AHALA 1/H",
              "voters": 276
            },
            {
              "station": "E. STE THERESE AHALA 1/1",
              "voters": 272
            },
            {
              "station": "E. STE THERESE AHALA 1/J",
              "voters": 336
            },
            {
              "station": "E. STE THERESE AHALA 1/K",
              "voters": 273
            },
            {
              "station": "E. STE THERESE AHALAI/L",
              "voters": 263
            },
            {
              "station": "E. STE THERESE AHALA I/M",
              "voters": 310
            },
            {
              "station": "E. STE THERESE AHALA I/N",
              "voters": 261
            },
            {
              "station": "E. STE THERESE AHALA 1/0",
              "voters": 303
            },
            {
              "station": "E. STE THERESE AHALA 1/P",
              "voters": 318
            },
            {
              "station": "Complexe Scolaire Bilingue le Fleuron /A",
              "voters": 333
            },
            {
              "station": "Complexe Scolaire Bilingue le Fleuron / B",
              "voters": 333
            },
            {
              "station": "Complexe Scolaire Bilingue le Fleuron / C",
              "voters": 358
            },
            {
              "station": "Complexe Scolaire Bilingue le Fleuron / D",
              "voters": 251
            },
            {
              "station": "INSTITUT MAK-MBE/A",
              "voters": 179
            }
          ],
          "AHALA II": [
            {
              "station": "COLLEGE DIDEROT/A",
              "voters": 406
            },
            {
              "station": "COLLEGE DIDEROT/B",
              "voters": 333
            },
            {
              "station": "COLLEGE DIDEROT/C",
              "voters": 342
            },
            {
              "station": "COLLEGE DIDEROT/D",
              "voters": 312
            },
            {
              "station": "COLLEGE DIDEROT/E",
              "voters": 336
            },
            {
              "station": "COLLEGE DIDEROT/F",
              "voters": 310
            },
            {
              "station": "COLLEGE DIDEROT/G",
              "voters": 337
            },
            {
              "station": "COLLEGE DIDEROT/H",
              "voters": 362
            },
            {
              "station": "COLLEGE DIDEROT/1",
              "voters": 375
            },
            {
              "station": "COLLEGE DIDEROT/J",
              "voters": 241
            },
            {
              "station": "IBAS (International Bilingual Academic School) / A",
              "voters": 304
            },
            {
              "station": "IBAS (International Bilingual Academic School) / B",
              "voters": 325
            },
            {
              "station": "IBAS (International Bilingual Academic School) / C",
              "voters": 313
            },
            {
              "station": "IBAS (International Bilingual Academic School) / D",
              "voters": 335
            },
            {
              "station": "IBAS (International Bilingual Academic School) / E",
              "voters": 325
            },
            {
              "station": "IBAS (International Bilingual Academic School) / F",
              "voters": 302
            },
            {
              "station": "IBAS (International Bilingual Academic School) / G",
              "voters": 314
            },
            {
              "station": "IBAS (International Bilingual Academic School) / H",
              "voters": 364
            },
            {
              "station": "IBAS (International Bilingual Academic School) / 1",
              "voters": 353
            },
            {
              "station": "IBAS (International Bilingual Academic School) / J",
              "voters": 248
            },
            {
              "station": "IBAS (International Bilingual Academic School) / K",
              "voters": 249
            },
            {
              "station": "IBAS (International Bilingual Academic School) / L",
              "voters": 250
            }
          ],
          "CENTRE ADMINISTRATIF, LAC, MANGUIER, VALLEE DE LA MORT": [
            {
              "station": "E CTRE ADMINISTRATIF/A",
              "voters": 309
            },
            {
              "station": "ECTRE ADMINISTRATIF/B",
              "voters": 291
            }
          ],
          "DAKAR I": [
            {
              "station": "J.E.C/A",
              "voters": 317
            },
            {
              "station": "J.E.C/B",
              "voters": 297
            }
          ],
          "DAKAR II": [
            {
              "station": "ESPLANADE DAKAR II/A",
              "voters": 345
            },
            {
              "station": "ESPLANADE DAKAR II/B",
              "voters": 407
            }
          ],
          "EFOULAN I": [
            {
              "station": "LYCEE EFOULAN/A",
              "voters": 322
            },
            {
              "station": "LYCEE EFOULAN/B",
              "voters": 374
            },
            {
              "station": "LYCEE EFOULAN/C",
              "voters": 355
            },
            {
              "station": "LYCEE EFOULAN/D",
              "voters": 307
            },
            {
              "station": "LYCEE EFOULAN/E",
              "voters": 303
            },
            {
              "station": "LYCEE EFOULAN/F",
              "voters": 322
            },
            {
              "station": "LYCEE EFOULAN/G",
              "voters": 326
            },
            {
              "station": "LYCEE EFOULAN/H",
              "voters": 319
            },
            {
              "station": "LYCEE EFOULAN/1",
              "voters": 242
            },
            {
              "station": "LYCEE EFOULAN/J",
              "voters": 278
            }
          ],
          "EFOULAN II": [
            {
              "station": "E.P.EFOULAN/A",
              "voters": 348
            },
            {
              "station": "E.P.EFOULAN/B",
              "voters": 325
            },
            {
              "station": "E.P.EFOULAN/C",
              "voters": 331
            },
            {
              "station": "E.P.EFOULAN/D",
              "voters": 322
            },
            {
              "station": "E.P.EFOULAN/E",
              "voters": 322
            },
            {
              "station": "E.P.EFOULAN/F",
              "voters": 335
            },
            {
              "station": "E.P.EFOULAN/G",
              "voters": 318
            },
            {
              "station": "E.P.EFOULAN/H",
              "voters": 319
            },
            {
              "station": "E.P.EFOULAN/1",
              "voters": 324
            },
            {
              "station": "E.P.EFOULAN/J",
              "voters": 336
            },
            {
              "station": "E.P.EFOULAN/K",
              "voters": 309
            },
            {
              "station": "E.P.EFOULAN/L",
              "voters": 362
            },
            {
              "station": "E.P.EFOULAN/M",
              "voters": 381
            },
            {
              "station": "E.P.EFOULAN/N",
              "voters": 362
            },
            {
              "station": "E.P.EFOULAN/O",
              "voters": 197
            },
            {
              "station": "E.P.EFOULAN/P",
              "voters": 195
            },
            {
              "station": "E.P.EFOULAN/Q",
              "voters": 122
            }
          ],
          "ESCADRON MOBILE": [
            {
              "station": "E. DE GENDARMERIE MOBILE / A",
              "voters": 171
            },
            {
              "station": "E. DE GENDARMERIE MOBILE/B",
              "voters": 182
            },
            {
              "station": "E. DE GENDARMERIE MOBILE/C",
              "voters": 289
            },
            {
              "station": "E. DE GENDARMERIE MOBILE/D",
              "voters": 292
            }
          ],
          "MBALIGUI": [
            {
              "station": "CASE COMMUNAUTAIRE DE MBALIGUI/A",
              "voters": 58
            }
          ],
          "MEKOUMBOU I": [
            {
              "station": "E MAT MEKOUMBOUT/A",
              "voters": 123
            }
          ],
          "MEKOUMBOU II": [
            {
              "station": "ECOLE PUB MEKOUMBOU II/A",
              "voters": 85
            }
          ],
          "MELEN II, OLEZOA": [
            {
              "station": "CETIC NGOA EKELLE/A",
              "voters": 291
            },
            {
              "station": "CETIC NGOA EKELLE/B",
              "voters": 267
            },
            {
              "station": "CETIC NGOA EKELLE/C",
              "voters": 254
            },
            {
              "station": "CETIC NGOA EKELLE/D",
              "voters": 218
            },
            {
              "station": "CETIC NGOA EKELLE/E",
              "voters": 246
            },
            {
              "station": "CETIC NGOA EKELLE/F",
              "voters": 314
            },
            {
              "station": "CETIC NGOA EKELLE/G",
              "voters": 333
            },
            {
              "station": "CETIC NGOA EKELLE/H",
              "voters": 328
            },
            {
              "station": "CETIC NGOA EKELLE/1",
              "voters": 308
            },
            {
              "station": "CETIC NGOA EKELLE/J",
              "voters": 308
            },
            {
              "station": "CETIC NGOA EKELLE/K",
              "voters": 316
            },
            {
              "station": "CETIC NGOA EKELLE/L",
              "voters": 194
            },
            {
              "station": "CETIC NGOA EKELLE/M",
              "voters": 197
            },
            {
              "station": "CETIC NGOA EKELLE/N",
              "voters": 200
            }
          ],
          "MELEN8-A": [
            {
              "station": "E. MAT LES STEPHANOIS/A",
              "voters": 295
            },
            {
              "station": "E. MAT LES STEPHANOIS/B",
              "voters": 224
            }
          ],
          "MELEN8-B": [
            {
              "station": "MADA DOMINION BIL. NURSERY \\&PR. SCHOOL/A",
              "voters": 323
            },
            {
              "station": "MADA DOMINION BIL. NURSERY \\&PR. SCHOOL/B",
              "voters": 313
            },
            {
              "station": "MADA DOMINION BIL. NURSERY \\&PR. SCHOOL/C",
              "voters": 408
            }
          ],
          "MFOUNDASSI 7": [
            {
              "station": "E LES PETITS SAGES CHEF. MFOUNDASSI 7/A",
              "voters": 259
            }
          ],
          "NGOA EKELLE II": [
            {
              "station": "E DU PLATEAU ATEMENGUE/A",
              "voters": 301
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/B",
              "voters": 312
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/C",
              "voters": 310
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/D",
              "voters": 295
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/E",
              "voters": 286
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/F",
              "voters": 289
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/G",
              "voters": 289
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/H",
              "voters": 285
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/1",
              "voters": 317
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/J",
              "voters": 278
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/K",
              "voters": 262
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/L",
              "voters": 284
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/M",
              "voters": 241
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/N",
              "voters": 353
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/0",
              "voters": 230
            },
            {
              "station": "E DU PLATEAU ATEMENGUE/P",
              "voters": 294
            }
          ],
          "NGOA EKELLE III, NSIMEYONG III": [
            {
              "station": "ECOLE DES POSTES/A",
              "voters": 273
            },
            {
              "station": "ECOLE DES POSTES/B",
              "voters": 262
            },
            {
              "station": "ECOLE DES POSTES/C",
              "voters": 256
            },
            {
              "station": "ECOLE DES POSTES/D",
              "voters": 256
            },
            {
              "station": "ECOLE DES POSTES/E",
              "voters": 270
            },
            {
              "station": "ECOLE DES POSTES/F",
              "voters": 242
            },
            {
              "station": "ECOLE DES POSTES/G",
              "voters": 230
            },
            {
              "station": "ECOLE DES POSTES/H",
              "voters": 214
            },
            {
              "station": "ECOLE DES POSTES/1",
              "voters": 174
            },
            {
              "station": "ECOLE DES POSTES/J",
              "voters": 164
            },
            {
              "station": "ECOLE DES POSTES/K",
              "voters": 169
            },
            {
              "station": "ECOLE DES POSTES/L",
              "voters": 182
            },
            {
              "station": "ECOLE DES POSTES/M",
              "voters": 196
            },
            {
              "station": "ECOLE DES POSTES/N",
              "voters": 179
            },
            {
              "station": "ECOLE DES POSTES/O",
              "voters": 164
            },
            {
              "station": "ECOLE DES POSTES/P",
              "voters": 222
            },
            {
              "station": "ECOLE DES POSTES/Q",
              "voters": 233
            },
            {
              "station": "ECOLE DES POSTES/R",
              "voters": 224
            },
            {
              "station": "ECOLE DES POSTES/S",
              "voters": 217
            },
            {
              "station": "ECOLE DES POSTES/T",
              "voters": 269
            },
            {
              "station": "ECOLE DES POSTES/U",
              "voters": 229
            },
            {
              "station": "ECOLE DES POSTES/V",
              "voters": 335
            }
          ],
          "NGOA EKELLE OBILI I": [
            {
              "station": "Ε.Ρ. ΒIYEM ASSI II/A",
              "voters": 330
            },
            {
              "station": "Ε.Ρ. ΒIYEM ASSI II/B",
              "voters": 328
            },
            {
              "station": "Ε.Ρ. ΒΙYEM ASSI II/C",
              "voters": 327
            },
            {
              "station": "Ε.Ρ. BIYEM ASSI II/D",
              "voters": 316
            },
            {
              "station": "Ε.Ρ. BIYEM ASSI II/E",
              "voters": 332
            },
            {
              "station": "Ε.Ρ. ΒIYEM ASSI II/F",
              "voters": 283
            },
            {
              "station": "Ε.Ρ. ΒΙYEM ASSI II/G",
              "voters": 260
            },
            {
              "station": "Ε.Ρ. ΒΙΥEM ASSI II/H",
              "voters": 343
            },
            {
              "station": "Ε.Ρ. ΒΙYEM ASSI II/",
              "voters": 265
            }
          ],
          "NGOA EKELLE OBILI I, OBILI III": [
            {
              "station": "JUMPING JACK SCHOOL/A",
              "voters": 303
            }
          ],
          "NGOA EKELLE OBILI II, OBILI III": [
            {
              "station": "JUMPING JACK SCHOOL/B",
              "voters": 317
            },
            {
              "station": "JUMPING JACK SCHOOL/C",
              "voters": 306
            },
            {
              "station": "JUMPING JACK SCHOOL/D",
              "voters": 302
            },
            {
              "station": "JUMPING JACK SCHOOL/E",
              "voters": 320
            },
            {
              "station": "JUMPING JACK SCHOOL/F",
              "voters": 367
            }
          ],
          "NGOA EKELLE OBILI IV": [
            {
              "station": "FOYER SOCIAL/A",
              "voters": 335
            },
            {
              "station": "FOYER SOCIAL/B",
              "voters": 279
            },
            {
              "station": "FOYER SOCIAL/C",
              "voters": 351
            },
            {
              "station": "FOYER SOCIAL/D",
              "voters": 250
            },
            {
              "station": "FOYER SOCIAL/E",
              "voters": 299
            },
            {
              "station": "FOYER SOCIAL/F",
              "voters": 306
            }
          ],
          "NKOLFON": [
            {
              "station": "CHAPELLE NKOLFON/A",
              "voters": 160
            }
          ],
          "NKOLMESSENG I": [
            {
              "station": "CHAPELLE ST MICHEL NKOLMESSENG 1/A",
              "voters": 152
            }
          ],
          "NLONG MVOLYE": [
            {
              "station": "ENGLISH HIGH SCHOOL/A",
              "voters": 323
            },
            {
              "station": "ENGLISH HIGH SCHOOL/B",
              "voters": 306
            },
            {
              "station": "ENGLISH HIGH SCHOOL/C",
              "voters": 327
            },
            {
              "station": "ENGLISH HIGH SCHOOL/D",
              "voters": 300
            },
            {
              "station": "ENGLISH HIGH SCHOOL/E",
              "voters": 325
            },
            {
              "station": "ENGLISH HIGH SCHOOL/F",
              "voters": 293
            },
            {
              "station": "ENGLISH HIGH SCHOOLG/",
              "voters": 310
            },
            {
              "station": "ENGLISH HIGH SCHOOL/H",
              "voters": 138
            }
          ],
          "NSAM I": [
            {
              "station": "ECOLE EDEN SOLLY/A",
              "voters": 360
            },
            {
              "station": "ECOLE EDEN SOLLY/B",
              "voters": 351
            },
            {
              "station": "ECOLE EDEN SOLLY/C",
              "voters": 341
            },
            {
              "station": "ECOLE EDEN SOLLY/D",
              "voters": 341
            },
            {
              "station": "ECOLE EDEN SOLLY/E",
              "voters": 313
            },
            {
              "station": "ECOLE EDEN SOLLY/F",
              "voters": 272
            },
            {
              "station": "ECOLE EDEN SOLLY/G",
              "voters": 171
            }
          ],
          "NSAM II": [
            {
              "station": "COLLEGE LES FUTURS BOSS/A",
              "voters": 305
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/B",
              "voters": 300
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/C",
              "voters": 292
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/D",
              "voters": 234
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/E",
              "voters": 250
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/F",
              "voters": 260
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/G",
              "voters": 284
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/H",
              "voters": 257
            },
            {
              "station": "COLLEGE LES FUTURS BOSS/1",
              "voters": 291
            }
          ],
          "NSIMEYONG I": [
            {
              "station": "COLLEGE VOGT/A",
              "voters": 287
            },
            {
              "station": "COLLEGE VOGT/B",
              "voters": 273
            },
            {
              "station": "COLLEGE VOGT/C",
              "voters": 260
            },
            {
              "station": "COLLEGE VOGT/D",
              "voters": 275
            },
            {
              "station": "COLLEGE VOGT/E",
              "voters": 268
            },
            {
              "station": "COLLEGE VOGT/F",
              "voters": 247
            },
            {
              "station": "COLLEGE VOGT/G",
              "voters": 234
            },
            {
              "station": "COLLEGE VOGT/H",
              "voters": 288
            },
            {
              "station": "COLLEGE VOGT/1",
              "voters": 316
            },
            {
              "station": "COLLEGE VOGT/J",
              "voters": 318
            },
            {
              "station": "COLLEGE VOGT/K",
              "voters": 272
            },
            {
              "station": "COLLEGE VOGT/L",
              "voters": 288
            },
            {
              "station": "COLLEGE VOGT/M",
              "voters": 314
            },
            {
              "station": "COLLEGE VOGT/N",
              "voters": 275
            },
            {
              "station": "COLLEGE VOGT/O",
              "voters": 249
            },
            {
              "station": "COLLEGE VOGT/P",
              "voters": 286
            },
            {
              "station": "COLLEGE VOGT/Q",
              "voters": 332
            },
            {
              "station": "INSTITUT VICTOR HUGO/A",
              "voters": 359
            },
            {
              "station": "INSTITUT VICTOR HUGO/B",
              "voters": 364
            },
            {
              "station": "INSTITUT VICTOR HUGO/C",
              "voters": 358
            },
            {
              "station": "INSTITUT VICTOR HUGO/D",
              "voters": 351
            },
            {
              "station": "INSTITUT VICTOR HUGO/E",
              "voters": 354
            },
            {
              "station": "INSTITUT VICTOR HUGO/F",
              "voters": 198
            },
            {
              "station": "INSTITUT VICTOR HUGO/G",
              "voters": 197
            },
            {
              "station": "INSTITUT VICTOR HUGO/H",
              "voters": 221
            }
          ],
          "NSIMEYONG II": [
            {
              "station": "ECOLE LA ROSIERE/A",
              "voters": 314
            },
            {
              "station": "ECOLE LA ROSIERE/B",
              "voters": 336
            },
            {
              "station": "ECOLE LA ROSIERE/C",
              "voters": 321
            },
            {
              "station": "ECOLE LA ROSIERE/D",
              "voters": 333
            },
            {
              "station": "ECOLE LA ROSIERE/E",
              "voters": 325
            },
            {
              "station": "ECOLE LA ROSIERE/F",
              "voters": 318
            },
            {
              "station": "ECOLE LA ROSIERE/G",
              "voters": 311
            },
            {
              "station": "ECOLE LA ROSIERE/H",
              "voters": 305
            },
            {
              "station": "ECOLE LA ROSIERE/1",
              "voters": 315
            },
            {
              "station": "ECOLE LA ROSIERE/J",
              "voters": 307
            },
            {
              "station": "ECOLE LA ROSIERE/K",
              "voters": 302
            },
            {
              "station": "ECOLE LA ROSIERE/L",
              "voters": 297
            },
            {
              "station": "ECOLE LA ROSIERE/M",
              "voters": 272
            },
            {
              "station": "ECOLE LA ROSIERE/N",
              "voters": 318
            },
            {
              "station": "ECOLE LA ROSIERE/O",
              "voters": 275
            },
            {
              "station": "ECOLE LA ROSIERE/P",
              "voters": 332
            }
          ],
          "NGOA EKELLE II, NSIMEYONG I, NSIMEYONG II": [
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/A",
              "voters": 293
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/B",
              "voters": 284
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/C",
              "voters": 256
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/D",
              "voters": 238
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/E",
              "voters": 267
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/F",
              "voters": 313
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/G",
              "voters": 242
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/H",
              "voters": 259
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/1",
              "voters": 253
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/J",
              "voters": 312
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/K",
              "voters": 276
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/L",
              "voters": 292
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/M",
              "voters": 280
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/N",
              "voters": 224
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/O",
              "voters": 305
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/P",
              "voters": 273
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/Q",
              "voters": 282
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/R",
              "voters": 282
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/S",
              "voters": 356
            },
            {
              "station": "GPE SCOLAIRE LES SAPINS MONTEE JOUVENCE/T",
              "voters": 360
            }
          ],
          "NSIMEYONG III": [
            {
              "station": "COLLEGE LA ROSIERE/A",
              "voters": 341
            },
            {
              "station": "COLLEGE LA ROSIERE/B",
              "voters": 328
            },
            {
              "station": "COLLEGE LA ROSIERE/C",
              "voters": 325
            },
            {
              "station": "COLLEGE LA ROSIERE/D",
              "voters": 364
            },
            {
              "station": "COLLEGE LA ROSIERE/E",
              "voters": 320
            },
            {
              "station": "COLLEGE LA ROSIERE/F",
              "voters": 311
            },
            {
              "station": "COLLEGE LA ROSIERE/G",
              "voters": 351
            },
            {
              "station": "COLLEGE LA ROSIERE/H",
              "voters": 341
            },
            {
              "station": "COLLEGE LA ROSIERE/1",
              "voters": 376
            },
            {
              "station": "COLLEGE LA ROSIERE/J",
              "voters": 368
            },
            {
              "station": "COLLEGE LA ROSIERE/K",
              "voters": 347
            },
            {
              "station": "COLLEGE LA ROSIERE/L",
              "voters": 306
            },
            {
              "station": "COLLEGE LA ROSIERE/M",
              "voters": 355
            },
            {
              "station": "COLLEGE LA ROSIERE/N",
              "voters": 338
            },
            {
              "station": "COLLEGE LA ROSIERE/O",
              "voters": 350
            },
            {
              "station": "COLLEGE LA ROSIERE/P",
              "voters": 319
            },
            {
              "station": "COLLEGE LA ROSIERE/Q",
              "voters": 348
            },
            {
              "station": "COLLEGE LA ROSIERE/R",
              "voters": 322
            },
            {
              "station": "COLLEGE LA ROSIERE/S",
              "voters": 346
            },
            {
              "station": "COLLEGE LA ROSIERE/T",
              "voters": 402
            },
            {
              "station": "COLLEGE LA ROSIERE/U",
              "voters": 423
            },
            {
              "station": "COLLEGE LA ROSIERE/V",
              "voters": 411
            },
            {
              "station": "COLLEGE LA ROSIERE/W",
              "voters": 393
            },
            {
              "station": "COLLEGE LA ROSIERE / X",
              "voters": 361
            },
            {
              "station": "COLLEGE LA ROSIERE/Y",
              "voters": 251
            },
            {
              "station": "COLLEGE LA ROSIERE/Z",
              "voters": 258
            },
            {
              "station": "INSTITUT POLYVALENT BILINGUE DES NATIONS/A",
              "voters": 253
            },
            {
              "station": "INSTITUT POLYVALENT BILINGUE DES NATIONS/B",
              "voters": 241
            }
          ],
          "NTOUESSONG I": [
            {
              "station": "ECOLE PUB NTOUESSONG1/A",
              "voters": 94
            }
          ],
          "OBOBOGO": [
            {
              "station": "ECOLE LES COLIBRIS/A",
              "voters": 340
            },
            {
              "station": "ECOLE LES COLIBRIS/B",
              "voters": 308
            },
            {
              "station": "ECOLE LES COLIBRIS / C",
              "voters": 352
            },
            {
              "station": "ECOLE LES COLIBRIS/D",
              "voters": 319
            },
            {
              "station": "ECOLE LES COLIBRIS/E",
              "voters": 331
            },
            {
              "station": "ECOLE LES COLIBRIS/F",
              "voters": 333
            },
            {
              "station": "ECOLE LES COLIBRIS/G",
              "voters": 323
            },
            {
              "station": "ECOLE LES COLIBRIS/H",
              "voters": 318
            },
            {
              "station": "ECOLE LES COLIBRIS/1",
              "voters": 319
            },
            {
              "station": "ECOLE LES COLIBRIS/J",
              "voters": 357
            },
            {
              "station": "ECOLE LES COLIBRIS/K",
              "voters": 332
            },
            {
              "station": "ECOLE LES COLIBRIS/L",
              "voters": 341
            },
            {
              "station": "ECOLE LES COLIBRIS/M",
              "voters": 330
            },
            {
              "station": "ECOLE LES COLIBRIS/N",
              "voters": 328
            },
            {
              "station": "ECOLE LES COLIBRIS/O",
              "voters": 341
            },
            {
              "station": "ECOLE LES COLIBRIS/P",
              "voters": 250
            },
            {
              "station": "ECOLE LES COLIBRIS/Q",
              "voters": 257
            },
            {
              "station": "ECOLE LES COLIBRIS/R",
              "voters": 238
            }
          ],
          "OLEZOA": [
            {
              "station": "E.P. OLEZOA/A",
              "voters": 326
            },
            {
              "station": "E.P. OLEZOA/B",
              "voters": 275
            },
            {
              "station": "E.P. OLEZOA/C",
              "voters": 278
            },
            {
              "station": "E.P. OLEZOA/D",
              "voters": 267
            },
            {
              "station": "E.P. OLEZOA/E",
              "voters": 266
            }
          ],
          "BRIGADE DU QUARTIER GENERAL": [
            {
              "station": "Lycée Général Leclerc / A",
              "voters": 302
            },
            {
              "station": "Lycée Général Leclerc / B",
              "voters": 252
            },
            {
              "station": "Lycée Général Leclerc / C",
              "voters": 294
            },
            {
              "station": "Lycée Général Leclerc /D",
              "voters": 304
            },
            {
              "station": "Lycée Général Leclerc / E",
              "voters": 283
            },
            {
              "station": "Lycée Général Leclerc / F",
              "voters": 266
            },
            {
              "station": "Lycée Général Leclerc / G",
              "voters": 290
            },
            {
              "station": "Lycée Général Leclerc / H",
              "voters": 270
            },
            {
              "station": "Lycée Général Leclerc / 1",
              "voters": 263
            },
            {
              "station": "Lycée Général Leclerc /J",
              "voters": 280
            },
            {
              "station": "Lycée Général Leclerc / K",
              "voters": 265
            },
            {
              "station": "Lycée Général Leclerc / L",
              "voters": 274
            },
            {
              "station": "Lycée Général Leclerc / M",
              "voters": 324
            },
            {
              "station": "Lycée Général Leclerc / N",
              "voters": 287
            },
            {
              "station": "Lycée Général Leclerc / O",
              "voters": 237
            },
            {
              "station": "Lycée Général Leclerc / P",
              "voters": 288
            },
            {
              "station": "Lycée Général Leclerc / Q",
              "voters": 288
            },
            {
              "station": "Lycée Général Leclerc / R",
              "voters": 297
            },
            {
              "station": "Lycée Général Leclerc /S",
              "voters": 312
            },
            {
              "station": "Lycée Général Leclerc / T",
              "voters": 273
            },
            {
              "station": "Lycée Général Leclerc / U",
              "voters": 241
            },
            {
              "station": "Lycée Général Leclerc / V",
              "voters": 236
            },
            {
              "station": "Lycée Général Leclerc / W",
              "voters": 228
            },
            {
              "station": "Lycée Général Leclerc /X",
              "voters": 241
            },
            {
              "station": "Lycée Général Leclerc /Y",
              "voters": 208
            }
          ],
          "AFANOYOA II, EFOULAN I, NSIMEYONG II": [
            {
              "station": "Collège Privée la Colombe / A",
              "voters": 319
            },
            {
              "station": "Collège Privée la Colombe / B",
              "voters": 301
            },
            {
              "station": "Collège Privée la Colombe / C",
              "voters": 323
            },
            {
              "station": "Collège Privée la Colombe / D",
              "voters": 346
            },
            {
              "station": "Collège Privée la Colombe / E",
              "voters": 305
            },
            {
              "station": "Collège Privée la Colombe/F",
              "voters": 286
            },
            {
              "station": "Collège Privée la Colombe / G",
              "voters": 306
            },
            {
              "station": "Collège Privée la Colombe / H",
              "voters": 281
            },
            {
              "station": "Collège Privée la Colombe / 1",
              "voters": 288
            },
            {
              "station": "Collège Privée la Colombe / J",
              "voters": 351
            },
            {
              "station": "Collège Privée la Colombe / K",
              "voters": 344
            },
            {
              "station": "Collège Privée la Colombe / L",
              "voters": 333
            },
            {
              "station": "Collège Privée la Colombe / M",
              "voters": 197
            },
            {
              "station": "Collège Privée la Colombe / N",
              "voters": 197
            },
            {
              "station": "Collège Privée la Colombe / O",
              "voters": 200
            },
            {
              "station": "Collège Privée la Colombe / P",
              "voters": 200
            },
            {
              "station": "Collège Privée la Colombe / Q",
              "voters": 133
            }
          ],
          "NSAM I, NSAM II": [
            {
              "station": "Ecole Maternelle les Rossignols Majors / A",
              "voters": 389
            },
            {
              "station": "Ecole Maternelle les Rossignols Majors / B",
              "voters": 382
            },
            {
              "station": "Ecole Maternelle les Rossignols Majors / C",
              "voters": 313
            },
            {
              "station": "Ecole Maternelle les Rossignols Majors / D",
              "voters": 197
            },
            {
              "station": "Ecole Maternelle les Rossignols Majors / E",
              "voters": 195
            },
            {
              "station": "Ecole Maternelle les Rossignols Majors/F",
              "voters": 128
            }
          ],
          "MELEN II": [
            {
              "station": "LYCEE DE NGOA EKELLE/A",
              "voters": 234
            },
            {
              "station": "LYCEE DE NGOA EKELLE/B",
              "voters": 201
            }
          ],
          "ETOA": [
            {
              "station": "ECOLE PUBLIQUE D'ETOA/A",
              "voters": 247
            },
            {
              "station": "ECOLE PUBLIQUE D'ETOA/B",
              "voters": 245
            },
            {
              "station": "ECOLE PUBLIQUE D'ETOA/C",
              "voters": 247
            },
            {
              "station": "ECOLE PUBLIQUE D'ETOA/D",
              "voters": 246
            },
            {
              "station": "ECOLE PUBLIQUE D'ETOA/E",
              "voters": 191
            },
            {
              "station": "ECOLE PUBLIQUE D'ETOA/F",
              "voters": 100
            }
          ]
        },
        "YAOUNDE IV": {
          "ABOME": [
            {
              "station": "C.E.S D'ODZA (MEYO)/A",
              "voters": 279
            },
            {
              "station": "C.E.S D'ODZA (MEYO) / B",
              "voters": 283
            }
          ],
          "AWAE I": [
            {
              "station": "ECOLE MVOGO MELINGUI 1/A",
              "voters": 281
            },
            {
              "station": "ECOLE ST. KISITO I/A",
              "voters": 394
            },
            {
              "station": "ECOLE ST. KISITO I/B",
              "voters": 378
            },
            {
              "station": "ECOLE ST. KISITO I/C",
              "voters": 201
            }
          ],
          "AWAE II": [
            {
              "station": "ECOLE MVOGO MELINGUI II/A",
              "voters": 270
            }
          ],
          "AWAE III": [
            {
              "station": "ECOLE MVOGO MELINGUI III / A",
              "voters": 245
            }
          ],
          "AWAE IV": [
            {
              "station": "ECOLE MVOGO MELINGUI IV/A",
              "voters": 292
            }
          ],
          "AWAE V": [
            {
              "station": "ECOLE ST. KISITO II/A",
              "voters": 408
            }
          ],
          "AWAE VI": [
            {
              "station": "ECOLE MVOGO MELINGUI V/A",
              "voters": 88
            }
          ],
          "AWAE MVOG MANGA EWONKANG": [
            {
              "station": "E. PR FARANDOLE/A",
              "voters": 304
            },
            {
              "station": "E. PR FARANDOLE/B",
              "voters": 284
            },
            {
              "station": "E. PR FARANDOLE/C",
              "voters": 280
            },
            {
              "station": "E. PR FARANDOLE/D",
              "voters": 249
            },
            {
              "station": "E. PR FARANDOLE/E",
              "voters": 276
            }
          ],
          "AWAE MVOG MANGA": [
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/A",
              "voters": 286
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/B",
              "voters": 307
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/C",
              "voters": 313
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/D",
              "voters": 264
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/E",
              "voters": 294
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/F",
              "voters": 249
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/G",
              "voters": 337
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/H",
              "voters": 356
            },
            {
              "station": "ECOLE PRIVEE LA MERE DES ENFANTS/1",
              "voters": 357
            },
            {
              "station": "ECOLE PRIVEE NOULA/A",
              "voters": 344
            },
            {
              "station": "ECOLE PRIVEE NOULA/B",
              "voters": 321
            },
            {
              "station": "ECOLE PRIVEE NOULA/C",
              "voters": 352
            },
            {
              "station": "ECOLE PRIVEE NOULA/D",
              "voters": 348
            },
            {
              "station": "ECOLE PRIVEE NOULA/E",
              "voters": 404
            },
            {
              "station": "ABS AWAE MVOG MANGA/A",
              "voters": 369
            }
          ],
          "BITENG EKOUNOU III MBOG ABANG": [
            {
              "station": "E. PR MARIE ALBERT/A",
              "voters": 317
            },
            {
              "station": "E. PR MARIE ALBERT/B",
              "voters": 300
            },
            {
              "station": "E. PR MARIE ALBERT/C",
              "voters": 277
            },
            {
              "station": "E. PR MARIE ALBERT/D",
              "voters": 284
            },
            {
              "station": "E. PR MARIE ALBERT/E",
              "voters": 295
            },
            {
              "station": "E. PR MARIE ALBERT/F",
              "voters": 343
            },
            {
              "station": "E. PR MARIE ALBERT/G",
              "voters": 311
            },
            {
              "station": "E. PR MARIE ALBERT/H",
              "voters": 296
            },
            {
              "station": "E. PR MARIE ALBERT/1",
              "voters": 350
            },
            {
              "station": "E. PR MARIE ALBERT/J",
              "voters": 358
            },
            {
              "station": "E. PR MARIE ALBERT/K",
              "voters": 263
            }
          ],
          "EKIE NORD": [
            {
              "station": "ECOLE PRIVEE LENA ET JANET/A",
              "voters": 328
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/B",
              "voters": 300
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/C",
              "voters": 298
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/D",
              "voters": 302
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/E",
              "voters": 287
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/F",
              "voters": 283
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/G",
              "voters": 339
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/H",
              "voters": 307
            },
            {
              "station": "ECOLE PRIVEE LENA ET JANET/1",
              "voters": 313
            },
            {
              "station": "COLLEGE LE BON BERGER/A",
              "voters": 415
            }
          ],
          "EKIE-SUD": [
            {
              "station": "C.J.A.R.C-EKIE NORD/A",
              "voters": 434
            },
            {
              "station": "C.J.A.R.C-EKIE NORD/B",
              "voters": 313
            },
            {
              "station": "C.J.A.R.C-EKIE NORD/C",
              "voters": 315
            },
            {
              "station": "C.J.A.R.C-EKIE NORD/D",
              "voters": 349
            },
            {
              "station": "C.J.A.R.C-EKIE NORD/E",
              "voters": 312
            },
            {
              "station": "E. P. D'EKIE-SUD/A",
              "voters": 343
            },
            {
              "station": "E. P. D'EKIE-SUD/B",
              "voters": 345
            },
            {
              "station": "E. P. D'EKIE-SUD/C",
              "voters": 343
            },
            {
              "station": "E. P. D'EKIE-SUD/D",
              "voters": 346
            },
            {
              "station": "E. P. D'EKIE-SUD/E",
              "voters": 182
            }
          ],
          "EKOUMDOUM": [
            {
              "station": "E. P. EKOUMDOUM/A",
              "voters": 319
            },
            {
              "station": "E. P. EKOUMDOUM/B",
              "voters": 324
            },
            {
              "station": "E. P. EKOUMDOUM/C",
              "voters": 305
            },
            {
              "station": "E. P. EKOUMDOUM/D",
              "voters": 287
            },
            {
              "station": "E. P. EKOUMDOUM/E",
              "voters": 251
            },
            {
              "station": "E. P. EKOUMDOUM/F",
              "voters": 309
            },
            {
              "station": "E. P. EKOUMDOUM/G",
              "voters": 312
            },
            {
              "station": "E. P. EKOUMDOUM/H",
              "voters": 397
            },
            {
              "station": "ECOLE PRIVEE SYLVAIN/A",
              "voters": 341
            },
            {
              "station": "ECOLE PRIVEE SYLVAIN/B",
              "voters": 316
            },
            {
              "station": "ECOLE PRIVEE SYLVAIN/C",
              "voters": 306
            },
            {
              "station": "ECOLE PRIVEE SYLVAIN/D",
              "voters": 343
            }
          ],
          "EKOUNOU IT": [
            {
              "station": "E. PR. LES PERROQUETS/A",
              "voters": 297
            }
          ],
          "EKOUNOU I": [
            {
              "station": "E. PR. LES PERROQUETS/B",
              "voters": 291
            },
            {
              "station": "E. PR. LES PERROQUETS/C",
              "voters": 304
            },
            {
              "station": "E. PR. LES PERROQUETS/E",
              "voters": 326
            }
          ],
          "EKOUNOUT": [
            {
              "station": "E. PR. LES PERROQUETS/D",
              "voters": 309
            }
          ],
          "EKOUNOU II NORD": [
            {
              "station": "E. P. EKOUNOU I/A",
              "voters": 357
            },
            {
              "station": "E. P. EKOUNOU 1/B",
              "voters": 348
            },
            {
              "station": "E. P. EKOUNOU 1/C",
              "voters": 352
            },
            {
              "station": "E. P. EKOUNOU 1/D",
              "voters": 340
            },
            {
              "station": "E. P. EKOUNOU 1/E",
              "voters": 355
            },
            {
              "station": "E. P. EKOUNOU I/F",
              "voters": 243
            },
            {
              "station": "E. P. EKOUNOU 1/G",
              "voters": 314
            },
            {
              "station": "COLLEGE PROTESTANT D'EKOUNOU II NORD A",
              "voters": 416
            },
            {
              "station": "COLLEGE PROTESTANT D'EKOUNOU II NORD /B",
              "voters": 342
            },
            {
              "station": "COLLEGE PROTESTANT D'EKOUNOU II NORD /C",
              "voters": 416
            }
          ],
          "EKOUNOU II SUD": [
            {
              "station": "CENTRE FORMATION CRTV/A",
              "voters": 327
            },
            {
              "station": "CENTRE FORMATION CRTV/B",
              "voters": 353
            },
            {
              "station": "E. P. EKOUNOU II/A",
              "voters": 374
            },
            {
              "station": "E. P. EKOUNOU II/B",
              "voters": 405
            },
            {
              "station": "E. P. EKOUNOU II/C",
              "voters": 369
            },
            {
              "station": "E. P. EKOUNOU II / D",
              "voters": 375
            },
            {
              "station": "E. P. EKOUNOU II/E",
              "voters": 307
            },
            {
              "station": "LYCEE D'EKOUNOU/A",
              "voters": 327
            },
            {
              "station": "LYCEE D'EKOUNOU/B",
              "voters": 340
            },
            {
              "station": "LYCEE D'EKOUNOU/C",
              "voters": 330
            },
            {
              "station": "LYCEE D'EKOUNOU/D",
              "voters": 318
            },
            {
              "station": "LYCEE D'EKOUNOU/E",
              "voters": 294
            },
            {
              "station": "LYCEE D'EKOUNOU/F",
              "voters": 332
            },
            {
              "station": "LYCEE D'EKOUNOU/G",
              "voters": 276
            }
          ],
          "EKOUNOU III": [
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/A",
              "voters": 370
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/B",
              "voters": 384
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/C",
              "voters": 365
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/D",
              "voters": 386
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/E",
              "voters": 375
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/F",
              "voters": 380
            },
            {
              "station": "SIANTOU SUP CAMPUS DE CORON/G",
              "voters": 350
            }
          ],
          "EKOUNOU IV MVAN NORD": [
            {
              "station": "E. PR BENOIT JOSEPH/A",
              "voters": 273
            },
            {
              "station": "E. PR BENOIT JOSEPH/B",
              "voters": 327
            }
          ],
          "EWONKANG": [
            {
              "station": "ECOLE PRIVEE NDEMA/A",
              "voters": 337
            },
            {
              "station": "ECOLE PRIVEE NDEMA/B",
              "voters": 174
            },
            {
              "station": "COLLEGE LES CARTESIENS/A",
              "voters": 364
            },
            {
              "station": "COLLEGE LES CARTESIENS/B",
              "voters": 355
            }
          ],
          "KONDENGUI I EST": [
            {
              "station": "E.MAT PR KONDENGUI I EST RUSTEL/A",
              "voters": 309
            },
            {
              "station": "E.MAT PR KONDENGUI I EST RUSTEL/B",
              "voters": 292
            },
            {
              "station": "E.MAT PR KONDENGUI I EST RUSTEL/C",
              "voters": 310
            }
          ],
          "KONDENGUI I QUEST": [
            {
              "station": "COLLEGE ATANGANA ESSOMBA1/A",
              "voters": 388
            },
            {
              "station": "COLLEGE ATANGANA ESSOMBA 1/B",
              "voters": 399
            },
            {
              "station": "COLLEGE ATANGANA ESSOMBA I/C",
              "voters": 438
            },
            {
              "station": "COLLEGE ATANGANA ESSOMBA II/A",
              "voters": 308
            },
            {
              "station": "COLLEGE ATANGANA ESSOMBA II/B",
              "voters": 322
            }
          ],
          "KONDENGUI II": [
            {
              "station": "COLLEGE FRANTZ FANON/A",
              "voters": 304
            },
            {
              "station": "COLLEGE FRANTZ FANON/B",
              "voters": 278
            },
            {
              "station": "COLLEGE FRANTZ FANON/C",
              "voters": 281
            },
            {
              "station": "COLLEGE FRANTZ FANON/D",
              "voters": 256
            },
            {
              "station": "COLLEGE FRANTZ FANON/E",
              "voters": 283
            },
            {
              "station": "COLLEGE FRANTZ FANON/F",
              "voters": 328
            },
            {
              "station": "COLLEGE FRANTZ FANON/G",
              "voters": 482
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/A",
              "voters": 360
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/B",
              "voters": 336
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/C",
              "voters": 319
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/D",
              "voters": 348
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/E",
              "voters": 350
            },
            {
              "station": "GROUPE SCOLAIRE PILOTE/F",
              "voters": 325
            }
          ],
          "KONDENGUI III": [
            {
              "station": "ECOLE PRIVEE LES AMIS/A",
              "voters": 318
            },
            {
              "station": "ECOLE PRIVEE LES AMIS/B",
              "voters": 298
            },
            {
              "station": "ECOLE PRIVEE LES AMIS/C",
              "voters": 108
            }
          ],
          "KONDENGUI I EST KONDENGUI III KONDENGUI IV": [
            {
              "station": "E. P. KONDENGUI I/A",
              "voters": 309
            },
            {
              "station": "E. P. KONDENGUI I/B",
              "voters": 356
            },
            {
              "station": "E. P. KONDENGUI I/C",
              "voters": 296
            },
            {
              "station": "E. P. KONDENGUI I/D",
              "voters": 260
            },
            {
              "station": "E. P. KONDENGUI I/E",
              "voters": 357
            },
            {
              "station": "E. P. KONDENGUI I/F",
              "voters": 350
            },
            {
              "station": "E. P. KONDENGUI I/G",
              "voters": 337
            }
          ],
          "KONDENGUI IV": [
            {
              "station": "E. P. KONDENGUI II/A",
              "voters": 298
            },
            {
              "station": "E. P. KONDENGUI II/B",
              "voters": 149
            },
            {
              "station": "E. P. KONDENGUI II/C",
              "voters": 314
            }
          ],
          "MBOG ABANG": [
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/A",
              "voters": 342
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/B",
              "voters": 327
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/C",
              "voters": 345
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/D",
              "voters": 313
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/E",
              "voters": 265
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/F",
              "voters": 323
            },
            {
              "station": "ECOLE PRIVEE SAINT ALBERT/G",
              "voters": 364
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/A",
              "voters": 348
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/B",
              "voters": 348
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/C",
              "voters": 340
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/D",
              "voters": 346
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/E",
              "voters": 345
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/F",
              "voters": 340
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/G",
              "voters": 342
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/H",
              "voters": 346
            },
            {
              "station": "GSB LA GLOIRE OLYMPIQUE/I",
              "voters": 385
            },
            {
              "station": "GSB LE DON DE L'AMITIE/A",
              "voters": 269
            }
          ],
          "MESSAMENDONGO ODZA I ODZA II": [
            {
              "station": "E. CATH MESSAMENDONGO/A",
              "voters": 360
            },
            {
              "station": "E. CATH MESSAMENDONGO/B",
              "voters": 339
            },
            {
              "station": "E. CATH MESSAMENDONGO/C",
              "voters": 387
            },
            {
              "station": "E. CATH MESSAMENDONGO/D",
              "voters": 324
            },
            {
              "station": "E. CATH MESSAMENDONGO/E",
              "voters": 344
            },
            {
              "station": "E. CATH MESSAMENDONGO/F",
              "voters": 316
            },
            {
              "station": "E. CATH MESSAMENDONGO/G",
              "voters": 313
            },
            {
              "station": "E. CATH MESSAMENDONGO/H",
              "voters": 355
            },
            {
              "station": "E. CATH MESSAMENDONGO/I",
              "voters": 358
            }
          ],
          "MEYO ODZA I": [
            {
              "station": "E. P. MEYO/A",
              "voters": 316
            },
            {
              "station": "E. P. MEYO/B",
              "voters": 157
            }
          ],
          "MFOUND'ASSI I": [
            {
              "station": "COLLEGE MADELEINE 1/A",
              "voters": 316
            },
            {
              "station": "COLLEGE MADELEINE I/B",
              "voters": 253
            }
          ],
          "MFOUND'ASSI II": [
            {
              "station": "COLLEGE MADELEINE II/A",
              "voters": 308
            }
          ],
          "MFOUND'ASSI III": [
            {
              "station": "COLLEGE MADELEINE III/A",
              "voters": 376
            }
          ],
          "MFOUND'ASSI IV": [
            {
              "station": "COLLEGE MADELEINE IV/A",
              "voters": 196
            }
          ],
          "MFOUND'ASSI V": [
            {
              "station": "COLLEGE MADELEINE V/A",
              "voters": 173
            },
            {
              "station": "E. P. MVOG ATANGANA MBALLA/A",
              "voters": 373
            }
          ],
          "AWAE MVOG MANGA MIMBOMAN I CENTRE": [
            {
              "station": "E. CATH DE NKOLBECK/A",
              "voters": 343
            },
            {
              "station": "E. CATH DE NKOLBECK/B",
              "voters": 271
            },
            {
              "station": "E. CATH DE NKOLBECK/C",
              "voters": 278
            },
            {
              "station": "E. CATH DE NKOLBECK/D",
              "voters": 236
            },
            {
              "station": "E. CATH DE NKOLBECK/E",
              "voters": 318
            },
            {
              "station": "E. CATH DE NKOLBECK/F",
              "voters": 309
            },
            {
              "station": "E. CATH DE NKOLBECK/G",
              "voters": 330
            },
            {
              "station": "E. CATH DE NKOLBECK/H",
              "voters": 319
            },
            {
              "station": "E. CATH DE NKOLBECK/1",
              "voters": 325
            }
          ],
          "MIMBOMAN I CENTRE": [
            {
              "station": "LYCEE D'ANGUISSA/A",
              "voters": 375
            },
            {
              "station": "LYCEE D'ANGUISSA/B",
              "voters": 372
            },
            {
              "station": "LYCEE D'ANGUISSA/C",
              "voters": 343
            },
            {
              "station": "LYCEE D'ANGUISSA/D",
              "voters": 350
            },
            {
              "station": "LYCEE D'ANGUISSA/E",
              "voters": 336
            },
            {
              "station": "LYCEE D'ANGUISSA/F",
              "voters": 342
            },
            {
              "station": "LYCEE D'ANGUISSA/G",
              "voters": 308
            },
            {
              "station": "LYCEE D'ANGUISSA/H",
              "voters": 281
            },
            {
              "station": "LYCEE D'ANGUISSA/1",
              "voters": 320
            }
          ],
          "MIMBOMAN I SUD": [
            {
              "station": "COLLEGE LES PHARAONS CAMPUS 1/A",
              "voters": 402
            },
            {
              "station": "COLLEGE LES PHARAONS CAMPUS 1/B",
              "voters": 352
            },
            {
              "station": "COLLEGE LES PHARAONS CAMPUS 1/C",
              "voters": 210
            },
            {
              "station": "COLLEGE LES PHARAONS CAMPUS II/A",
              "voters": 341
            },
            {
              "station": "COLLEGE LES PHARAONS CAMPUS II/B",
              "voters": 173
            }
          ],
          "MIMBOMAN I CENTRE MIMBOMAN II NORD MIMBOMAN II NORD": [
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/A",
              "voters": 381
            },
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/B",
              "voters": 368
            },
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/C",
              "voters": 355
            },
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/D",
              "voters": 335
            },
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/E",
              "voters": 336
            },
            {
              "station": "E. P. MIMBOMAN DISPENSAIRE/F",
              "voters": 413
            },
            {
              "station": "LYCEE DE MIMBOMAN/A",
              "voters": 307
            },
            {
              "station": "LYCEE DE MIMBOMAN/B",
              "voters": 339
            },
            {
              "station": "LYCEE DE MIMBOMAN/C",
              "voters": 279
            },
            {
              "station": "LYCEE DE MIMBOMAN/D",
              "voters": 273
            },
            {
              "station": "LYCEE DE MIMBOMAN/E",
              "voters": 248
            },
            {
              "station": "LYCEE DE MIMBOMAN/F",
              "voters": 338
            },
            {
              "station": "LYCEE DE MIMBOMAN/G",
              "voters": 285
            },
            {
              "station": "LYCEE DE MIMBOMAN/H",
              "voters": 276
            },
            {
              "station": "LYCEE DE MIMBOMAN/1",
              "voters": 325
            },
            {
              "station": "LYCEE DE MIMBOMAN/J",
              "voters": 214
            },
            {
              "station": "LYCEE DE MIMBOMAN/K",
              "voters": 312
            },
            {
              "station": "LYCEE DE MIMBOMAN/L",
              "voters": 230
            },
            {
              "station": "ECOLE CATHOLIQUE LA PASSION/A",
              "voters": 434
            },
            {
              "station": "ECOLE CATHOLIQUE LA PASSION/B",
              "voters": 414
            }
          ],
          "MIMBOMAN I CENTRE MIMBOMAN II NORD MIMBOMAN II NORD MIMBOMAN PLATEAU": [
            {
              "station": "E. P. MIMBOMAN PLATEAU/A",
              "voters": 405
            },
            {
              "station": "E. P. MIMBOMAN PLATEAU/B",
              "voters": 432
            },
            {
              "station": "E. P. MIMBOMAN PLATEAU/C",
              "voters": 364
            },
            {
              "station": "E. P. MIMBOMAN PLATEAU/D",
              "voters": 387
            },
            {
              "station": "E. P. MIMBOMAN PLATEAU/E",
              "voters": 341
            }
          ],
          "MIMBOMAN II NORD MIMBOMAN II SUD MIMBOMAN II SUD MIMBOMAN PLATEAU": [
            {
              "station": "COLLEGE ZANG MEBENGA/A",
              "voters": 280
            },
            {
              "station": "COLLEGE ZANG MEBENGA/B",
              "voters": 278
            },
            {
              "station": "COLLEGE ZANG MEBENGA/C",
              "voters": 283
            },
            {
              "station": "COLLEGE ZANG MEBENGA/D",
              "voters": 290
            },
            {
              "station": "COLLEGE ZANG MEBENGA/E",
              "voters": 270
            },
            {
              "station": "COLLEGE ZANG MEBENGA/F",
              "voters": 351
            }
          ],
          "MIMBOMAN III MIMBOMAN III MIMBOMAN III": [
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/A",
              "voters": 351
            },
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/B",
              "voters": 329
            },
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/C",
              "voters": 293
            },
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/D",
              "voters": 285
            },
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/E",
              "voters": 257
            },
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/F",
              "voters": 320
            },
            {
              "station": "KINDER GARDEN/A",
              "voters": 270
            },
            {
              "station": "KINDER GARDEN/B",
              "voters": 297
            },
            {
              "station": "KINDER GARDEN/C",
              "voters": 255
            },
            {
              "station": "COLLEGE POLY SAINT PIERRE/A",
              "voters": 333
            },
            {
              "station": "COLLEGE POLY SAINT PIERRE/B",
              "voters": 380
            },
            {
              "station": "COLLEGE POLY SAINT PIERRE/C",
              "voters": 326
            }
          ],
          "MIMBOMAN III MIMBOMAN III": [
            {
              "station": "ECOLE PRIVEE LES DEBUTANTS/G",
              "voters": 286
            },
            {
              "station": "KINDER GARDEN/D",
              "voters": 280
            }
          ],
          "MIMBOMAN III MIMBOMAN I CENTRE MIMBOMAN III MIMBOMAN III MIMBOMAN III": [
            {
              "station": "E CATH NKOLODOUI/A",
              "voters": 290
            }
          ],
          "MIMBOMAN I CENTRE MIMBOMAN III MIMBOMAN III MIMBOMAN III": [
            {
              "station": "E CATH NKOLODOU1/B",
              "voters": 287
            }
          ],
          "MIMBOMAN PLATEAU": [
            {
              "station": "E. PR LES HIRONDELLES/A",
              "voters": 285
            },
            {
              "station": "E. PR LES HIRONDELLES/B",
              "voters": 254
            },
            {
              "station": "E. PR LES HIRONDELLES/C",
              "voters": 210
            },
            {
              "station": "COLLEGE ST PIERRE 1/A",
              "voters": 414
            },
            {
              "station": "COLLEGE ST PIERRE 1/B",
              "voters": 452
            },
            {
              "station": "E.PR. SAINTE ESTHER/A",
              "voters": 412
            },
            {
              "station": "E.PR. SAINTE ESTHER/B",
              "voters": 327
            },
            {
              "station": "CSB LES PHARAONS II/A",
              "voters": 245
            },
            {
              "station": "CSB LES PHARAONS II/B",
              "voters": 247
            },
            {
              "station": "CSB LES PHARAONS II/C",
              "voters": 244
            },
            {
              "station": "CSB LES PHARAONS II/D",
              "voters": 241
            },
            {
              "station": "CSB LES PHARAONS II/E",
              "voters": 245
            },
            {
              "station": "CSB LES PHARAONS 11/F",
              "voters": 242
            },
            {
              "station": "CSB LES PHARAONS II/G",
              "voters": 206
            },
            {
              "station": "COLLEGE ST PIERRE II/A",
              "voters": 244
            },
            {
              "station": "COLLEGE ST PIERRE II / B",
              "voters": 243
            },
            {
              "station": "COLLEGE ST PIERRE II/C",
              "voters": 239
            },
            {
              "station": "COLLEGE ST PIERRE II/D",
              "voters": 245
            },
            {
              "station": "COLLEGE ST PIERRE II/E",
              "voters": 244
            },
            {
              "station": "COLLEGE ST PIERRE II/F",
              "voters": 205
            },
            {
              "station": "PROMHADICAM/A",
              "voters": 190
            }
          ],
          "MINKAN": [
            {
              "station": "LYCEE DE MINKAN/A",
              "voters": 338
            },
            {
              "station": "LYCEE DE MINKAN/B",
              "voters": 324
            },
            {
              "station": "LYCEE DE MINKAN/C",
              "voters": 327
            },
            {
              "station": "LYCEE DE MINKAN/D",
              "voters": 421
            }
          ],
          "MVAN NORD": [
            {
              "station": "ECOLE PUBLIQUE MVAN/A",
              "voters": 326
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/B",
              "voters": 337
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/C",
              "voters": 352
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/D",
              "voters": 348
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/E",
              "voters": 352
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/F",
              "voters": 312
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/G",
              "voters": 436
            },
            {
              "station": "ECOLE PUBLIQUE MVAN/H",
              "voters": 489
            }
          ],
          "MVAN SUD": [
            {
              "station": "ECOLE PRIVEE LES CHEVALIERS/A",
              "voters": 368
            },
            {
              "station": "ECOLE PRIVEE LES CHEVALIERS/B",
              "voters": 364
            },
            {
              "station": "ECOLE PRIVEE LES CHEVALIERS/C",
              "voters": 463
            },
            {
              "station": "COLLEGE YONDO-MVAN SUD/A",
              "voters": 301
            },
            {
              "station": "COLLEGE YONDO-MVAN SUD/B",
              "voters": 312
            },
            {
              "station": "COLLEGE YONDO-MVAN SUD/C",
              "voters": 278
            },
            {
              "station": "COLLEGE YONDO-MVAN SUD/D",
              "voters": 414
            }
          ],
          "NDAMVOUT I": [
            {
              "station": "ECOLE LA REFERENCE/A",
              "voters": 276
            },
            {
              "station": "ECOLE LA REFERENCE/B",
              "voters": 221
            },
            {
              "station": "ECOLE LA REFERENCE/C",
              "voters": 238
            },
            {
              "station": "ECOLE LA REFERENCE/D",
              "voters": 250
            },
            {
              "station": "ECOLE LA REFERENCE/E",
              "voters": 226
            },
            {
              "station": "CENTRE D'ETAT CIVIL DE NDAMVOUTI/A",
              "voters": 346
            }
          ],
          "NKONDONGO I": [
            {
              "station": "INSTITUT SIANTOU I/A",
              "voters": 326
            }
          ],
          "NKOLDONGO III NKOLNDONGO VI": [
            {
              "station": "E. P. NKOLNDONGO/A",
              "voters": 281
            },
            {
              "station": "E. P. NKOLNDONGO/B",
              "voters": 340
            },
            {
              "station": "E. P. NKOLNDONGO/C",
              "voters": 274
            },
            {
              "station": "E. P. NKOLNDONGO/D",
              "voters": 227
            },
            {
              "station": "E. P. NKOLNDONGO/E",
              "voters": 216
            },
            {
              "station": "E. P. NKOLNDONGO/F",
              "voters": 251
            },
            {
              "station": "E. P. NKOLNDONGO/G",
              "voters": 300
            }
          ],
          "NKOLNDONGO IV NKOLNDONGO V": [
            {
              "station": "E. MAT LES PRINCES/A",
              "voters": 352
            },
            {
              "station": "E. MAT LES PRINCES/B",
              "voters": 369
            },
            {
              "station": "E. MAT LES PRINCES/C",
              "voters": 151
            }
          ],
          "NKOLNDONGO IX": [
            {
              "station": "INSTIC NKOLNDONGO IX/A",
              "voters": 339
            },
            {
              "station": "INSTIC NKOLNDONGO IX/B",
              "voters": 87
            }
          ],
          "NKOLNDONGO VI ODZA II": [
            {
              "station": "E. PR RACINE. AILES. SAVOIR 1/A",
              "voters": 269
            }
          ],
          "NKOLNDONGO VII": [
            {
              "station": "E. PR RACINE. AILES. SAVOIR II/A",
              "voters": 214
            },
            {
              "station": "E.M. RACINE. AILES. SAVOIR/A",
              "voters": 49
            }
          ],
          "NKOLNDONGO VIII": [
            {
              "station": "CASE SOCIALE-NKOLNDONGO VIII/A",
              "voters": 367
            },
            {
              "station": "CASE SOCIALE-NKOLNDONGO VIII/B",
              "voters": 335
            }
          ],
          "NKOLNDONGO X": [
            {
              "station": "CASS NKOLNDONGO X/A",
              "voters": 253
            },
            {
              "station": "CASS NKOLNDONGO X/B",
              "voters": 276
            },
            {
              "station": "CASS NKOLNDONGO X/C",
              "voters": 89
            },
            {
              "station": "THE MIGNIFICAT PRIMARY SCHOOLI/A",
              "voters": 339
            }
          ],
          "NKOLNDONGO XI": [
            {
              "station": "E PR PIERRE ET JEAN/A",
              "voters": 337
            },
            {
              "station": "THE MIGNIFICAT PRIMARY SCHOOL II/A",
              "voters": 152
            }
          ],
          "NKOLNDONGO XII": [
            {
              "station": "E. P. NKOLNDONGO MBIDA/A",
              "voters": 342
            },
            {
              "station": "E. P. NKOLNDONGO MBIDA/B",
              "voters": 336
            },
            {
              "station": "E. P. NKOLNDONGO MBIDA/C",
              "voters": 335
            },
            {
              "station": "E. P. NKOLNDONGO MBIDA/D",
              "voters": 305
            },
            {
              "station": "LYCEE DE NKOLNDONGO NOUVEAU CAMPUS A",
              "voters": 279
            },
            {
              "station": "LYCEE DE NKOLNDONGO NOUVEAU CAMPUS /B",
              "voters": 192
            },
            {
              "station": "CENTRE DE LA PROMOTION DE LA FEMME \\- NKOLNDONGO/A",
              "voters": 65
            }
          ],
          "NKOLNDONGO XIII": [
            {
              "station": "INSTITUT SIANTOU II/A",
              "voters": 282
            },
            {
              "station": "INSTITUT SIANTOU II/B",
              "voters": 285
            },
            {
              "station": "INSTITUT SIANTOU II/C",
              "voters": 293
            },
            {
              "station": "INSTITUT SIANTOU II/D",
              "voters": 56
            },
            {
              "station": "INSTITUT SIANTOU II/E",
              "voters": 185
            }
          ],
          "NKOLNDONGO XIII NKOLNDONGO XIV": [
            {
              "station": "INSTITUT SIANTOU III/A",
              "voters": 252
            }
          ],
          "NKOLO": [
            {
              "station": "E CATH NKOLODOU II/A",
              "voters": 334
            },
            {
              "station": "E CATH NKOLODOU II/B",
              "voters": 327
            },
            {
              "station": "E CATH NKOLODOU II/C",
              "voters": 321
            },
            {
              "station": "E CATH NKOLODOU II/D",
              "voters": 310
            },
            {
              "station": "E CATH NKOLODOU II/E",
              "voters": 327
            }
          ],
          "NKOLO II NKOLO II NKOMO I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/A",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/B",
              "voters": 354
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/C",
              "voters": 358
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/D",
              "voters": 317
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/E",
              "voters": 362
            }
          ],
          "NKOLO II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLO/F",
              "voters": 338
            }
          ],
          "NKOLO II NKOMO I NKOMO I NKOMO I": [
            {
              "station": "E. P. NKOMO/A",
              "voters": 335
            }
          ],
          "NKOMO I NKOMO I": [
            {
              "station": "E. P. NKOMO/B",
              "voters": 330
            },
            {
              "station": "E. P. NKOMO/C",
              "voters": 323
            },
            {
              "station": "E. P. NKOMO/D",
              "voters": 336
            },
            {
              "station": "E. P. NKOMO/E",
              "voters": 324
            },
            {
              "station": "E. P. NKOMO/F",
              "voters": 325
            },
            {
              "station": "E. P. NKOMO/G",
              "voters": 327
            },
            {
              "station": "E. P. NKOMO/H",
              "voters": 345
            },
            {
              "station": "E. P. NKOMO/1",
              "voters": 330
            },
            {
              "station": "E. P. NKOMO/J",
              "voters": 376
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/A",
              "voters": 409
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/B",
              "voters": 286
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/C",
              "voters": 307
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/D",
              "voters": 332
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/E",
              "voters": 341
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/F",
              "voters": 377
            },
            {
              "station": "LYCEE TECHNIQUE D'OKUI/G",
              "voters": 458
            },
            {
              "station": "COLLEGE POLYTECHNIQUE LA SAINTETE/A",
              "voters": 375
            },
            {
              "station": "COLLEGE POLYTECHNIQUE LA SAINTETE/B",
              "voters": 360
            },
            {
              "station": "COLLEGE POLYTECHNIQUE LA SAINTETE/C",
              "voters": 380
            },
            {
              "station": "COLLEGE POLYTECHNIQUE LA SAINTETE/D",
              "voters": 335
            },
            {
              "station": "COLLEGE POLYTECHNIQUE LA SAINTETE/E",
              "voters": 341
            }
          ],
          "NKOMO II NORD": [
            {
              "station": "E. PR METROPOLITAINE/A",
              "voters": 264
            },
            {
              "station": "E. PR METROPOLITAINE/B",
              "voters": 277
            },
            {
              "station": "E. PR METROPOLITAINE/C",
              "voters": 277
            },
            {
              "station": "E. PR METROPOLITAINE/D",
              "voters": 229
            },
            {
              "station": "E. PR METROPOLITAINE/E",
              "voters": 180
            },
            {
              "station": "COLLEGE MARIE ALBERTI/A",
              "voters": 342
            },
            {
              "station": "COLLEGE MARIE ALBERT I/B",
              "voters": 342
            },
            {
              "station": "COLLEGE MARIE ALBERT I/C",
              "voters": 276
            },
            {
              "station": "COLLEGE MARIE ALBERT II/A",
              "voters": 343
            },
            {
              "station": "COLLEGE MARIE ALBERT II/B",
              "voters": 345
            },
            {
              "station": "COLLEGE MARIE ALBERT II/C",
              "voters": 345
            },
            {
              "station": "COLLEGE MARIE ALBERT II/D",
              "voters": 329
            }
          ],
          "NKOMO II SUD": [
            {
              "station": "E. CATH NKOAYOS/A",
              "voters": 395
            },
            {
              "station": "E. CATH NKOAYOS/B",
              "voters": 410
            },
            {
              "station": "E. CATH NKOAYOS/C",
              "voters": 278
            },
            {
              "station": "E. CATH NKOAYOS/D",
              "voters": 299
            },
            {
              "station": "E. CATH NKOAYOS/E",
              "voters": 324
            },
            {
              "station": "E. CATH NKOAYOS/F",
              "voters": 343
            },
            {
              "station": "E. CATH NKOAYOSG/H",
              "voters": 373
            },
            {
              "station": "E. CATH NKOAYOS/H",
              "voters": 294
            },
            {
              "station": "COLLEGE GAZOLANT/A",
              "voters": 321
            },
            {
              "station": "COLLEGE GAZOLANT/B",
              "voters": 303
            },
            {
              "station": "COLLEGE GAZOLANT/C",
              "voters": 280
            },
            {
              "station": "COLLEGE GAZOLANT/D",
              "voters": 330
            },
            {
              "station": "COLLEGE GAZOLANT/E",
              "voters": 236
            },
            {
              "station": "COLLEGE GAZOLANT/F",
              "voters": 285
            }
          ],
          "NKONDONGO II": [
            {
              "station": "ESSEIG/A",
              "voters": 129
            }
          ],
          "NTOUESSONG": [
            {
              "station": "ECOLE PRIVEE ANGELE/A",
              "voters": 358
            },
            {
              "station": "ECOLE PRIVEE ANGELE/B",
              "voters": 301
            },
            {
              "station": "ECOLE PRIVEE ANGELE/C",
              "voters": 324
            },
            {
              "station": "ECOLE PRIVEE ANGELE/D",
              "voters": 332
            },
            {
              "station": "ECOLE PRIVEE ANGELE/E",
              "voters": 332
            },
            {
              "station": "ECOLE PRIVEE ANGELE/F",
              "voters": 243
            },
            {
              "station": "ECOLE PRIVE NONNO/A",
              "voters": 410
            },
            {
              "station": "ECOLE PRIVE NONO/B",
              "voters": 419
            },
            {
              "station": "ECOLE PRIVE NONO/C",
              "voters": 413
            },
            {
              "station": "ECOLE PRIVE NONO/D",
              "voters": 405
            },
            {
              "station": "ECOLE PRIVE NONO/E",
              "voters": 427
            },
            {
              "station": "ECOLE PRIVE NONO/F",
              "voters": 474
            },
            {
              "station": "GSBKJM/A",
              "voters": 371
            }
          ],
          "MIMBOMAN II SUD ODZA I": [
            {
              "station": "E. P. D'ODZA/A",
              "voters": 333
            },
            {
              "station": "E. P. D'ODZA/B",
              "voters": 342
            },
            {
              "station": "E. P. D'ODZA/C",
              "voters": 284
            },
            {
              "station": "E. P. D'ODZA/D",
              "voters": 308
            },
            {
              "station": "E. P. D'ODZA/E",
              "voters": 251
            },
            {
              "station": "E. P. D'ODZA/F",
              "voters": 269
            },
            {
              "station": "E. P. D'ODZA/G",
              "voters": 308
            },
            {
              "station": "E. P. D'ODZA/H",
              "voters": 367
            },
            {
              "station": "E. P. D'ODZA/I",
              "voters": 362
            },
            {
              "station": "E. P. D'ODZA/J",
              "voters": 445
            }
          ],
          "ODZA II": [
            {
              "station": "ECOLE PRIVEE DE SAVOIR/A",
              "voters": 381
            },
            {
              "station": "ECOLE PRIVEE DE SAVOIR/B",
              "voters": 313
            },
            {
              "station": "ECOLE PRIVEE DE SAVOIR/C",
              "voters": 332
            },
            {
              "station": "PENIEL MODERN ACADEMY/A",
              "voters": 312
            },
            {
              "station": "PENIEL MODERN ACADEMY/B",
              "voters": 294
            }
          ],
          "TOUTOULI": [
            {
              "station": "COLLEGE INFIRMA MUNDI/A",
              "voters": 309
            },
            {
              "station": "COLLEGE INFIRMA MUNDI/B",
              "voters": 139
            }
          ],
          "BITENG NORD": [
            {
              "station": "INSTITUT INTERNATIONAL AIME CESAIRE/A",
              "voters": 302
            },
            {
              "station": "INSTITUT INTERNATIONAL AIME CESAIRE/B",
              "voters": 292
            },
            {
              "station": "INSTITUT INTERNATIONAL AIME CESAIRE/C",
              "voters": 337
            },
            {
              "station": "INSTITUT INTERNATIONAL AIME CESAIRE/D",
              "voters": 281
            }
          ],
          "MIMBOMAN II SUD MIMBOMAN II SUD": [
            {
              "station": "ECOLE PRIVEE LES GRILLONS/A",
              "voters": 347
            },
            {
              "station": "ECOLE PRIVEE LES GRILLONS/B",
              "voters": 362
            }
          ],
          "MIMBOMAN III MIMBOMAN III MIMBOMAN III MIMBOMAN III": [
            {
              "station": "KINDER GARDEN/E",
              "voters": 230
            }
          ],
          "NKOLO II NKOLO II": [
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/A",
              "voters": 390
            },
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/B",
              "voters": 390
            },
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/C",
              "voters": 386
            },
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/D",
              "voters": 383
            },
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/E",
              "voters": 384
            },
            {
              "station": "COLLEGE BILINGUE SHAKESPEARE/F",
              "voters": 354
            }
          ],
          "MIMBOMAN I EST": [
            {
              "station": "GSB EL NATHAN/A",
              "voters": 408
            },
            {
              "station": "GSB EL NATHAN/B",
              "voters": 415
            },
            {
              "station": "GSB EL NATHAN/C",
              "voters": 416
            },
            {
              "station": "GSB EL NATHAN/D",
              "voters": 411
            },
            {
              "station": "GSB EL NATHAN/E",
              "voters": 205
            }
          ],
          "MESSAMENDONGO": [
            {
              "station": "GSB BIBI/A",
              "voters": 330
            },
            {
              "station": "GSB BIBI/B",
              "voters": 327
            },
            {
              "station": "GSB BIBI/C",
              "voters": 326
            },
            {
              "station": "COLLEGE ADVENTISTE D'ODZA/A",
              "voters": 181
            },
            {
              "station": "COLLEGE ADVENTISTE D'ODZA/B",
              "voters": 1
            }
          ],
          "BITENG": [
            {
              "station": "CBI LA FIERTE BITENG/A",
              "voters": 300
            }
          ],
          "ODZA III": [
            {
              "station": "E. PR. PARADIS D'EVEIL II/A",
              "voters": 285
            },
            {
              "station": "H.I.S ODZA III/A",
              "voters": 341
            },
            {
              "station": "H.I.S ODZA III/B",
              "voters": 408
            }
          ],
          "MIMBOMAN II NORD": [
            {
              "station": "E. PR. LES LIONCEAUX/A",
              "voters": 307
            }
          ]
        },
        "YAOUNDE V": {
          "ABOM": [
            {
              "station": "EP. D'ABOM/A",
              "voters": 356
            },
            {
              "station": "EP. D'ABOM/B",
              "voters": 280
            },
            {
              "station": "EP. D'ABOM/C",
              "voters": 275
            },
            {
              "station": "EP. D'ABOM/D",
              "voters": 288
            },
            {
              "station": "ECOLE PRIVEE KENIANIA / A",
              "voters": 100
            }
          ],
          "BELIBI NDOMO BELIBI NDOMO": [
            {
              "station": "COLLEGE SAINT AUGUSTIN/A",
              "voters": 318
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/B",
              "voters": 301
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/C",
              "voters": 308
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/D",
              "voters": 326
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/E",
              "voters": 331
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/F",
              "voters": 342
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/G",
              "voters": 373
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/H",
              "voters": 366
            },
            {
              "station": "COLLEGE SAINT AUGUSTIN/1",
              "voters": 276
            },
            {
              "station": "GPE SCOL. MEWOULOU/A",
              "voters": 341
            },
            {
              "station": "GPE SCOL, MEWOULOU/B",
              "voters": 329
            },
            {
              "station": "GPE SCOL. MEWOULOU/C",
              "voters": 343
            },
            {
              "station": "GPE SCOL. MEWOULOU/D",
              "voters": 298
            },
            {
              "station": "GPE SCOL. MEWOULOU/E",
              "voters": 294
            },
            {
              "station": "GPE SCOL. MEWOULOU/F",
              "voters": 366
            },
            {
              "station": "GPE SCOL. MEWOULOU/G",
              "voters": 383
            },
            {
              "station": "E. MAT. LES PETITS FUTES/A",
              "voters": 370
            },
            {
              "station": "E. MAT. LES PETITS FUTES/B",
              "voters": 380
            },
            {
              "station": "E. MAT. LES PETITS FUTES/C",
              "voters": 334
            },
            {
              "station": "E. MAT. LES PETITS FUTES/D",
              "voters": 344
            },
            {
              "station": "E. MAT. LES PETITS FUTES/E",
              "voters": 346
            },
            {
              "station": "E. MAT. LES PETITS FUTES/F",
              "voters": 322
            },
            {
              "station": "E. MAT. LES PETITS FUTES/G",
              "voters": 373
            },
            {
              "station": "E. MAT. LES PETITS FUTES/H",
              "voters": 476
            },
            {
              "station": "E.PR.CREUSET DU SAVOIR/A",
              "voters": 311
            },
            {
              "station": "E.PR.CREUSET DU SAVOIR/B",
              "voters": 319
            },
            {
              "station": "E.PR.CREUSET DU SAVOIR/C",
              "voters": 274
            },
            {
              "station": "E.PR. LA BRANCHE DU SUCCES/A",
              "voters": 372
            },
            {
              "station": "E.PR. LA BRANCHE DU SUCCES/B",
              "voters": 211
            },
            {
              "station": "ECOLE LES MODELES/A",
              "voters": 361
            },
            {
              "station": "ECOLE LES MODELES/B",
              "voters": 372
            },
            {
              "station": "ECOLE LES MODELES/C",
              "voters": 370
            },
            {
              "station": "ECOLE LES MODELES/D",
              "voters": 324
            }
          ],
          "DJOUNGOLO V DJOUNGOLO VII": [
            {
              "station": "CETI NOTRE DAME/A",
              "voters": 336
            },
            {
              "station": "CETI NOTRE DAME/B",
              "voters": 319
            },
            {
              "station": "CETI NOTRE DAME/C",
              "voters": 378
            }
          ],
          "DJOUNGOLO VI DJOUNGOLO VI": [
            {
              "station": "LA LUCIOLE/A",
              "voters": 270
            },
            {
              "station": "LA LUCIOLE/B",
              "voters": 330
            },
            {
              "station": "LA LUCIOLE/C",
              "voters": 202
            }
          ],
          "DJOUNGOLO VII": [
            {
              "station": "E.MAT.SAINTE HELENE/A",
              "voters": 347
            },
            {
              "station": "E.MAT.SAINTE HELENE/B",
              "voters": 314
            },
            {
              "station": "E.MAT.SAINTE HELENE/C",
              "voters": 261
            }
          ],
          "DJOUNGOLO VIII": [
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES 1/A",
              "voters": 306
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES I/B",
              "voters": 302
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES I/C",
              "voters": 294
            }
          ],
          "DJOUNGOLO IX": [
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/A",
              "voters": 367
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/B",
              "voters": 286
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/C",
              "voters": 294
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/ D",
              "voters": 258
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/E",
              "voters": 254
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES II/F",
              "voters": 261
            }
          ],
          "DJOUNGOLO X": [
            {
              "station": "DISPENSAIRE MVOG-ADA/A",
              "voters": 300
            },
            {
              "station": "DISPENSAIRE MVOG-ADA/B",
              "voters": 283
            },
            {
              "station": "DISPENSAIRE MVOG-ADA/C",
              "voters": 290
            },
            {
              "station": "DISPENSAIRE MVOG-ADA/D",
              "voters": 251
            },
            {
              "station": "DISPENSAIRE MVOG-ADA/E",
              "voters": 215
            },
            {
              "station": "COLLEGE MONTESQUIEU/A",
              "voters": 157
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE OTO NDIS/A",
              "voters": 64
            }
          ],
          "DJOUNGOLO XI": [
            {
              "station": "COLLEGE MONTESQUIEU 1/A",
              "voters": 387
            },
            {
              "station": "COLLEGE MONTESQUIEU I/B",
              "voters": 314
            },
            {
              "station": "COLLEGE MONTESQUIEU 1/C",
              "voters": 249
            },
            {
              "station": "COLLEGE MONTESQUIEU 1/D",
              "voters": 229
            }
          ],
          "DJOUNGOLO XII": [
            {
              "station": "COLLEGE MONTESQUIEU II/A",
              "voters": 342
            },
            {
              "station": "COLLEGE MONTESQUIEU II/B",
              "voters": 293
            },
            {
              "station": "COLLEGE MONTESQUIEU II/C",
              "voters": 179
            }
          ],
          "EDZOA MBEDE": [
            {
              "station": "GPE SCOL. LES PETITS ANGES/A",
              "voters": 332
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/B",
              "voters": 294
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/C",
              "voters": 265
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/D",
              "voters": 257
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/E",
              "voters": 271
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/F",
              "voters": 319
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/G",
              "voters": 379
            },
            {
              "station": "GPE SCOL. LES PETITS ANGES/H",
              "voters": 332
            }
          ],
          "ELIG-OMGBA-NSI": [
            {
              "station": "INSTITUT SAINT ANDRE/A",
              "voters": 329
            },
            {
              "station": "INSTITUT SAINT ANDRE/B",
              "voters": 291
            },
            {
              "station": "INSTITUT SAINT ANDRE/C",
              "voters": 313
            },
            {
              "station": "INSTITUT SAINT ANDRE/D",
              "voters": 368
            }
          ],
          "ESSESALAKOK": [
            {
              "station": "GPE SCOL. LE BON TEMPS/A",
              "voters": 346
            },
            {
              "station": "GPE SCOL. LE BON TEMPS/B",
              "voters": 307
            },
            {
              "station": "GPE SCOL. LE BON TEMPS/C",
              "voters": 287
            },
            {
              "station": "GPE SCOL. LE BON TEMPS/D",
              "voters": 314
            },
            {
              "station": "GPE SCOL. LE BON TEMPS/E",
              "voters": 266
            },
            {
              "station": "GPE SCOL. LE BON TEMPS/F",
              "voters": 276
            }
          ],
          "ESSOS CENTRE I": [
            {
              "station": "COLLEGE MONGO BETII/A",
              "voters": 390
            },
            {
              "station": "COLLEGE MONGO BETII/B",
              "voters": 330
            },
            {
              "station": "COLLEGE MONGO BETII/C",
              "voters": 286
            },
            {
              "station": "COLLEGE MONGO BETII/D",
              "voters": 258
            },
            {
              "station": "COLLEGE MONGO BETI I/E",
              "voters": 254
            },
            {
              "station": "COLLEGE LAROUSSE 1/A",
              "voters": 351
            },
            {
              "station": "COLLEGE LAROUSSE I/B",
              "voters": 361
            },
            {
              "station": "COLLEGE LAROUSSE 1/C",
              "voters": 384
            }
          ],
          "ESSOS CENTRE II": [
            {
              "station": "COLLEGE LAROUSSE II/A",
              "voters": 346
            },
            {
              "station": "COLLEGE LAROUSSE II/B",
              "voters": 276
            },
            {
              "station": "COLLEGE LAROUSSE II/C",
              "voters": 245
            },
            {
              "station": "COLLEGE LAROUSSE II/D",
              "voters": 284
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES III / A",
              "voters": 362
            },
            {
              "station": "ECOLE NOTRE DAME DES VICTOIRES III / B",
              "voters": 89
            }
          ],
          "BELIBI NDOMO ESSOS CENTRE III": [
            {
              "station": "E. MAT. GROUPE III (A)/A",
              "voters": 125
            }
          ],
          "ESSOS CENTRE III": [
            {
              "station": "COLLEGE MONGO BETI II/A",
              "voters": 378
            },
            {
              "station": "COLLEGE MONGO BETI II/B",
              "voters": 368
            },
            {
              "station": "COLLEGE MONGO BETI II/C",
              "voters": 355
            },
            {
              "station": "COLLEGE MONGO BETI II/D",
              "voters": 151
            }
          ],
          "ESSOS CENTRE III ESSOS NORD I": [
            {
              "station": "ECOLE PUBLIQUE ESSOS II/A",
              "voters": 275
            },
            {
              "station": "ECOLE PUBLIQUE ESSOS II/B",
              "voters": 231
            }
          ],
          "ESSOS NORD I": [
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/A",
              "voters": 352
            },
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/B",
              "voters": 378
            },
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/C",
              "voters": 296
            },
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/D",
              "voters": 275
            },
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/E",
              "voters": 275
            },
            {
              "station": "E. P. D'ESSOS(HOP.CNPS)/F",
              "voters": 319
            }
          ],
          "ESSOS NORD II ESSOS NORD II": [
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL)/A",
              "voters": 374
            },
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL)/B",
              "voters": 343
            },
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL)/C",
              "voters": 334
            },
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL) / D",
              "voters": 269
            },
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL)/E",
              "voters": 234
            },
            {
              "station": "E. MAT. ESSOS II (CAMP SONEL)/F",
              "voters": 230
            },
            {
              "station": "E. MAT. PRIM. GAFFEI/A",
              "voters": 342
            },
            {
              "station": "E. MAT. PRIM. GAFFEI/B",
              "voters": 346
            },
            {
              "station": "COLLEGE LA DIGNITE/A",
              "voters": 372
            },
            {
              "station": "COLLEGE LA DIGNITE/B",
              "voters": 350
            },
            {
              "station": "COLLEGE LA DIGNITE/C",
              "voters": 379
            },
            {
              "station": "COLLEGE LA DIGNITE/D",
              "voters": 175
            }
          ],
          "ESSOS SUD I": [
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/A",
              "voters": 293
            },
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/B",
              "voters": 274
            },
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/C",
              "voters": 346
            },
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/D",
              "voters": 297
            },
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/E",
              "voters": 370
            },
            {
              "station": "EGLISE EVANGELIQUE ESSOS MARCHE/F",
              "voters": 346
            },
            {
              "station": "FONDATION FACT/A",
              "voters": 322
            },
            {
              "station": "MOSQUEE ESSOS/A",
              "voters": 296
            },
            {
              "station": "MOSQUEE ESSOS/B",
              "voters": 310
            },
            {
              "station": "MOSQUEE ESSOS/C",
              "voters": 290
            },
            {
              "station": "MOSQUEE ESSOS/D",
              "voters": 189
            },
            {
              "station": "E. MAT. ESSOS MARCHE/A",
              "voters": 319
            },
            {
              "station": "E. MAT. ESSOS MARCHE/B",
              "voters": 304
            }
          ],
          "ESSOS SUD II": [
            {
              "station": "E. MAT. OBAM JACKY/A",
              "voters": 235
            },
            {
              "station": "INSTITUT PRIVEE L. ESSOMBA/A",
              "voters": 288
            },
            {
              "station": "INSTITUT PRIVEE L. ESSOMBA/B",
              "voters": 247
            },
            {
              "station": "INSTITUT PRIVEE L. ESSOMBA/C",
              "voters": 271
            },
            {
              "station": "INSTITUT PRIVEE L. ESSOMBA/D",
              "voters": 378
            },
            {
              "station": "INSTITUT PRIVEE L. ESSOMBA/E",
              "voters": 263
            },
            {
              "station": "E. MAT. CLIN D'OEIL/A",
              "voters": 346
            },
            {
              "station": "E. MAT. CLIN D'OEIL/B",
              "voters": 373
            },
            {
              "station": "ECOLE PUBLIQUE ESSOS III/A",
              "voters": 386
            },
            {
              "station": "ECOLE PUBLIQUE ESSOS III/B",
              "voters": 303
            },
            {
              "station": "E. MAT. GROUPE III (B)/A",
              "voters": 100
            }
          ],
          "ESSOS SUD III": [
            {
              "station": "E. MAT. CANNE-COUSSINET/A",
              "voters": 333
            },
            {
              "station": "E. MAT. CANNE-COUSSINET/B",
              "voters": 154
            },
            {
              "station": "GRPE SCOL. DOMINIQUE SAVIO/A",
              "voters": 341
            },
            {
              "station": "GRPE SCOL. DOMINIQUE SAVIO/B",
              "voters": 351
            }
          ],
          "KIKOA": [
            {
              "station": "E.MAT LES BIQUETTINS/A",
              "voters": 367
            },
            {
              "station": "E.MAT LES BIQUETTINS/B",
              "voters": 291
            },
            {
              "station": "E.MAT LES BIQUETTINS/C",
              "voters": 293
            },
            {
              "station": "E.MAT LES BIQUETTINS/D",
              "voters": 279
            }
          ],
          "ESSOS CENTRE I KIKOA KONG": [
            {
              "station": "LYCEE BILINGUE 1/A",
              "voters": 334
            },
            {
              "station": "LYCEE BILINGUE I/B",
              "voters": 345
            },
            {
              "station": "LYCEE BILINGUE I/C",
              "voters": 353
            },
            {
              "station": "LYCEE BILINGUE 1/D",
              "voters": 332
            },
            {
              "station": "LYCEE BILINGUE 1/E",
              "voters": 370
            },
            {
              "station": "LYCEE BILINGUEI/F",
              "voters": 391
            },
            {
              "station": "LYCEE BILINGUEI/G",
              "voters": 270
            }
          ],
          "KONG NKOLMESSENG II": [
            {
              "station": "LYCEE BILINGUE II/A",
              "voters": 372
            },
            {
              "station": "LYCEE BILINGUE II/B",
              "voters": 306
            },
            {
              "station": "LYCEE BILINGUE II/C",
              "voters": 273
            },
            {
              "station": "LYCEE BILINGUE II/D",
              "voters": 335
            },
            {
              "station": "LYCEE BILINGUE II/E",
              "voters": 141
            }
          ],
          "MFANDENA MFANDENA": [
            {
              "station": "ECOLE MAT. PRIM. CESAM CRERA/A",
              "voters": 285
            },
            {
              "station": "ECOLE MAT. PRIM. CESAM CRERA/B",
              "voters": 248
            },
            {
              "station": "ECOLE MAT. PRIM. CESAM CRERA/C",
              "voters": 288
            },
            {
              "station": "ECOLE MAT. PRIM CESAM CRERA/D",
              "voters": 284
            },
            {
              "station": "COLLEGE IPLEX/A",
              "voters": 326
            },
            {
              "station": "COLLEGE IPLEX/B",
              "voters": 311
            },
            {
              "station": "COLLEGE IPLEX/C",
              "voters": 309
            },
            {
              "station": "COLLEGE IPLEX/D",
              "voters": 301
            },
            {
              "station": "COLLEGE IPLEX/E",
              "voters": 354
            },
            {
              "station": "COLLEGE IPLEX/F",
              "voters": 275
            },
            {
              "station": "COLLEGE IPLEX/G",
              "voters": 241
            },
            {
              "station": "EGLISE DU CHRIST CAMEROUN/A",
              "voters": 373
            },
            {
              "station": "EGLISE DU CHRIST CAMEROUN/B",
              "voters": 265
            },
            {
              "station": "EGLISE DU CHRIST CAMEROUN/C",
              "voters": 245
            },
            {
              "station": "FOYER CULTUREL MFANDENA II RAILS/A",
              "voters": 319
            },
            {
              "station": "FOYER CULTUREL MFANDENA II RAILS/B",
              "voters": 264
            },
            {
              "station": "FOYER CULTUREL MFANDENA II RAILS/C",
              "voters": 264
            },
            {
              "station": "FOYER CULTUREL MFANDENA II RAILS/D",
              "voters": 121
            },
            {
              "station": "MENO & BODIO COMPL BIL/A",
              "voters": 389
            },
            {
              "station": "MENO & BODIO COMPL BIL/B",
              "voters": 331
            },
            {
              "station": "MENO & BODIO COMPL BIL/C",
              "voters": 360
            },
            {
              "station": "E.MAT. MFANDENA/A",
              "voters": 353
            },
            {
              "station": "E.MAT. MFANDENA/B",
              "voters": 330
            },
            {
              "station": "E.MAT. MFANDENA/C",
              "voters": 318
            },
            {
              "station": "E.MAT. MFANDENA/D",
              "voters": 346
            },
            {
              "station": "E.MAT. MFANDENA/E",
              "voters": 138
            },
            {
              "station": "CENTRE DE SANTE DIEU AMOUR/A",
              "voters": 309
            }
          ],
          "MFANDENA": [
            {
              "station": "GPE SCO. LES RAISINS/A",
              "voters": 268
            },
            {
              "station": "ESPLANADE DU STADE BENOUE \"OYACK RAILS\"/A",
              "voters": 328
            }
          ],
          "MEYONG NDZENGUE MFANDENA": [
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/A",
              "voters": 386
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/B",
              "voters": 355
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/C",
              "voters": 328
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/D",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/E",
              "voters": 412
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/F",
              "voters": 379
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/G",
              "voters": 365
            },
            {
              "station": "ECOLE PUBLIQUE DE MFANDENA/H",
              "voters": 236
            }
          ],
          "NGONA": [
            {
              "station": "ECOLE PUBLIQUE DE NGONA/A",
              "voters": 273
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/B",
              "voters": 281
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/C",
              "voters": 309
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/D",
              "voters": 377
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/E",
              "voters": 265
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/F",
              "voters": 284
            },
            {
              "station": "ECOLE PUBLIQUE DE NGONA/G",
              "voters": 391
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIVE LAIC IRENE PATRINI RENATO/A",
              "voters": 362
            }
          ],
          "NGOULEMEKONG NGOULMEKONG": [
            {
              "station": "LYCEE DE NGOULMEKONG/A",
              "voters": 342
            },
            {
              "station": "LYCEE DE NGOULMEKONG/B",
              "voters": 299
            },
            {
              "station": "LYCEE DE NGOULMEKONG/C",
              "voters": 284
            },
            {
              "station": "LYCEE DE NGOULMEKONG/D",
              "voters": 317
            },
            {
              "station": "LYCEE DE NGOULMEKONG/E",
              "voters": 331
            },
            {
              "station": "LYCEE DE NGOULMEKONG/F",
              "voters": 297
            },
            {
              "station": "LYCEE DE NGOULMEKONG/G",
              "voters": 291
            },
            {
              "station": "LYCEE DE NGOULMEKONG/H",
              "voters": 284
            },
            {
              "station": "LYCEE DE NGOULMEKONG/J",
              "voters": 325
            },
            {
              "station": "LYCEE DE NGOULMEKONG/K",
              "voters": 288
            },
            {
              "station": "LYCEE DE NGOULMEKONG/L",
              "voters": 323
            },
            {
              "station": "LYCEE DE NGOULMEKONG/M",
              "voters": 341
            },
            {
              "station": "LYCEE DE NGOULMEKONG/N",
              "voters": 357
            },
            {
              "station": "LYCEE DE NGOULMEKONG/O",
              "voters": 353
            },
            {
              "station": "LYCEE DE NGOULMEKONG/P",
              "voters": 361
            },
            {
              "station": "LYCEE DE NGOULMEKONG/Q",
              "voters": 361
            },
            {
              "station": "LYCEE DE NGOULMEKONG/R",
              "voters": 399
            },
            {
              "station": "LYCEE DE NGOULMEKONG/S",
              "voters": 397
            },
            {
              "station": "G. S. B. L'EMBRYON/A",
              "voters": 371
            },
            {
              "station": "G. S. B. L'EMBRYON/B",
              "voters": 360
            },
            {
              "station": "G. S. B. L'EMBRYON/C",
              "voters": 327
            }
          ],
          "NGOULEMEKONG": [
            {
              "station": "LYCEE DE NGOULMEKONG/1",
              "voters": 324
            }
          ],
          "NGOULMEKONG": [
            {
              "station": "GRPE SCOLAIRE BILINGUE LA SAMAGA/A",
              "voters": 293
            },
            {
              "station": "GRPE SCOLAIRE BILINGUE LA SAMAGA/B",
              "voters": 293
            },
            {
              "station": "GRPE SCOLAIRE BILINGUE LA SAMAGA/C",
              "voters": 332
            },
            {
              "station": "GRPE SCOLAIRE BILINGUE LA SAMAGA/D",
              "voters": 276
            },
            {
              "station": "GRPE SCOLAIRE BILINGUE LA SAMAGA/E",
              "voters": 234
            },
            {
              "station": "GROUPE SCOL.BIL.CHRISTIANO/A",
              "voters": 93
            },
            {
              "station": "INSTITUT BIL ANDRE MALEREAUX/A",
              "voters": 336
            }
          ],
          "NGOUSSO I NGOUSSO I": [
            {
              "station": "COPESI/A",
              "voters": 333
            },
            {
              "station": "COPESI/B",
              "voters": 317
            },
            {
              "station": "COPESI/C",
              "voters": 349
            },
            {
              "station": "COPESI/D",
              "voters": 355
            },
            {
              "station": "COPESI/E",
              "voters": 349
            },
            {
              "station": "COPESI/F",
              "voters": 379
            },
            {
              "station": "COPESI/G",
              "voters": 375
            },
            {
              "station": "FONDATION BERNEDE/A",
              "voters": 309
            },
            {
              "station": "FONDATION BERNEDE/B",
              "voters": 318
            },
            {
              "station": "FONDATION BERNEDE/C",
              "voters": 261
            },
            {
              "station": "FONDATION BERNEDE/D",
              "voters": 283
            }
          ],
          "NGOUSSO II": [
            {
              "station": "COPES II/A",
              "voters": 382
            },
            {
              "station": "COPES II/B",
              "voters": 293
            },
            {
              "station": "COPES II/C",
              "voters": 265
            },
            {
              "station": "COPES II/D",
              "voters": 332
            },
            {
              "station": "GPE SCOL. LES REFLETS/A",
              "voters": 285
            },
            {
              "station": "GPE SCOL. LES REFLETS/B",
              "voters": 265
            },
            {
              "station": "GPE SCOL. LES REFLETS/C",
              "voters": 277
            },
            {
              "station": "GPE SCOL. LES REFLETS/D",
              "voters": 256
            },
            {
              "station": "GPE SCOL. LES REFLETS/E",
              "voters": 279
            },
            {
              "station": "GPE SCOL. LES REFLETS/F",
              "voters": 277
            },
            {
              "station": "GPE SCOL, LES REFLETS/G",
              "voters": 271
            },
            {
              "station": "COMPLEXE SCOLAIRE BILINGUE PRIVE LAIC JOSEPHA/A",
              "voters": 149
            }
          ],
          "NGOUSSO III": [
            {
              "station": "COLLEGE PRIVEE MBEUKAM/A",
              "voters": 367
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/B",
              "voters": 265
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/C",
              "voters": 259
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/D",
              "voters": 251
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/E",
              "voters": 259
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/F",
              "voters": 272
            },
            {
              "station": "COLLEGE PRIVEE MBEUKAM/G",
              "voters": 351
            },
            {
              "station": "COLLEGE AMIDHAF/A",
              "voters": 400
            },
            {
              "station": "COLLEGE AMIDHAF/B",
              "voters": 362
            },
            {
              "station": "COLLEGE AMIDHAF/C",
              "voters": 389
            },
            {
              "station": "COLLEGE AMIDHAF/D",
              "voters": 328
            },
            {
              "station": "COLLEGE AMIDHAF/E",
              "voters": 414
            },
            {
              "station": "COLLEGE AMIDHAF/F",
              "voters": 293
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/A",
              "voters": 368
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/B",
              "voters": 260
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/C",
              "voters": 276
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/D",
              "voters": 262
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/E",
              "voters": 245
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/F",
              "voters": 355
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/G",
              "voters": 270
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/H",
              "voters": 363
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/1",
              "voters": 273
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/J",
              "voters": 338
            },
            {
              "station": "ECOLE PUBLIQUE NGOUSSO/K",
              "voters": 298
            },
            {
              "station": "GPE SCOL.LARISSA/A",
              "voters": 302
            },
            {
              "station": "GPE SCOL.LARISSA/B",
              "voters": 266
            },
            {
              "station": "GPE SCOL.LARISSA/C",
              "voters": 324
            },
            {
              "station": "COLLEGE PRIVE LE SUCCES/A",
              "voters": 409
            },
            {
              "station": "COLLEGE PRIVE LE SUCCES/B",
              "voters": 360
            },
            {
              "station": "COLLEGE PRIVE LE SUCCES/C",
              "voters": 382
            },
            {
              "station": "COLLEGE PRIVE LE SUCCES/D",
              "voters": 417
            },
            {
              "station": "COLLEGE PRIVE LE SUCCES/E",
              "voters": 439
            }
          ],
          "NGOUSSO NTEM": [
            {
              "station": "ECOLE PRIVEE MAPOKAM/A",
              "voters": 365
            },
            {
              "station": "ECOLE PRIVEE MAPOKAM/B",
              "voters": 308
            },
            {
              "station": "ECOLE PRIVEE MAPOKAM/C",
              "voters": 315
            },
            {
              "station": "ECOLE PRIVEE MAPOKAM/D",
              "voters": 320
            },
            {
              "station": "ECOLE PRIVEE MAPOKAM/E",
              "voters": 282
            },
            {
              "station": "ECOLE PRIVEE MAPOKAM/F",
              "voters": 315
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/A",
              "voters": 360
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/B",
              "voters": 308
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/C",
              "voters": 289
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/D",
              "voters": 275
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/E",
              "voters": 301
            },
            {
              "station": "ECOLE PRIM. ET MAT. LES ALLOUETTES/F",
              "voters": 263
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE/A",
              "voters": 348
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE/B",
              "voters": 301
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE/C",
              "voters": 303
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE/D",
              "voters": 272
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE / E",
              "voters": 316
            },
            {
              "station": "COLLEGE PRIVE TOUSSAINT ANTOINE/F",
              "voters": 209
            }
          ],
          "NGOUSSO II NGOUSSO NTEM": [
            {
              "station": "ECOLE MAT. LES CHAMPIONS (TRANSFO)/A",
              "voters": 340
            },
            {
              "station": "ECOLE MAT. LES CHAMPIONS (TRANSFO)/B",
              "voters": 318
            },
            {
              "station": "ECOLE MAT. LES CHAMPIONS (TRANSFO)/C",
              "voters": 385
            }
          ],
          "NKOLMESSENG I": [
            {
              "station": "E. MAT. YVES ET LES MAJORETTESI/A",
              "voters": 397
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTESI/B",
              "voters": 398
            },
            {
              "station": "E. MAT.YVES ET LES MAJORETTES I/C",
              "voters": 453
            },
            {
              "station": "E. MAT.YVES ET LES MAJORETTES I/D",
              "voters": 214
            },
            {
              "station": "CAMEROON SCHOOL/A",
              "voters": 341
            },
            {
              "station": "CAMEROON SCHOOL/B",
              "voters": 305
            },
            {
              "station": "CAMEROON SCHOOL/C",
              "voters": 309
            },
            {
              "station": "CAMEROON SCHOOL/D",
              "voters": 303
            },
            {
              "station": "CAMEROON SCHOOL/E",
              "voters": 322
            },
            {
              "station": "CAMEROON SCHOOL/F",
              "voters": 338
            },
            {
              "station": "CAMEROON SCHOOL/G",
              "voters": 265
            },
            {
              "station": "CAMEROON SCHOOL/H",
              "voters": 294
            },
            {
              "station": "CAMEROON SCHOOL/1",
              "voters": 348
            },
            {
              "station": "CAMEROON SCHOOL/J",
              "voters": 363
            },
            {
              "station": "CAMEROON SCHOOL/K",
              "voters": 220
            },
            {
              "station": "CAMEROON SCHOOL/L",
              "voters": 363
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/A",
              "voters": 350
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/B",
              "voters": 350
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/C",
              "voters": 351
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/D",
              "voters": 305
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/E",
              "voters": 319
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/F",
              "voters": 326
            },
            {
              "station": "GPE SCOL. BIL. MAJIO/G",
              "voters": 368
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/A",
              "voters": 366
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/B",
              "voters": 389
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/C",
              "voters": 402
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/D",
              "voters": 341
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/E",
              "voters": 366
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/F",
              "voters": 366
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/G",
              "voters": 239
            },
            {
              "station": "COLLEGE PRIVE LES CHANTERELLES/H",
              "voters": 321
            }
          ],
          "NKOLMESSENG II": [
            {
              "station": "ALBERTO ECOLE MAT. PRIM./A",
              "voters": 335
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM. / B",
              "voters": 296
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./C",
              "voters": 267
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./D",
              "voters": 319
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./E",
              "voters": 280
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./F",
              "voters": 245
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./G",
              "voters": 294
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./H",
              "voters": 268
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM./I",
              "voters": 261
            },
            {
              "station": "ALBERTO ECOLE MAT. PRIM. / J",
              "voters": 287
            },
            {
              "station": "COLLEGE NDJANKEU/A",
              "voters": 315
            },
            {
              "station": "COLLEGE NDJANKEU/B",
              "voters": 351
            },
            {
              "station": "COLLEGE NDJANKEU/C",
              "voters": 336
            },
            {
              "station": "COLLEGE NDJANKEU/D",
              "voters": 377
            },
            {
              "station": "COLLEGE NDJANKEU/E",
              "voters": 372
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTES II/A",
              "voters": 361
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTES II/B",
              "voters": 347
            },
            {
              "station": "E. MAT.YVES ET LES MAJORETTES II/C",
              "voters": 341
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTES II/D",
              "voters": 261
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTES II/E",
              "voters": 287
            },
            {
              "station": "E. MAT.YVES ET LES MAJORETTES II/F",
              "voters": 360
            },
            {
              "station": "E. MAT. YVES ET LES MAJORETTES II/G",
              "voters": 356
            }
          ],
          "KONG NKOLMESSENG I NKOLMESSENG II": [
            {
              "station": "LYCEE BILINGUE III/A",
              "voters": 261
            }
          ],
          "NKOLMESSENG III": [
            {
              "station": "COLLEGE PRIVEE LES LILAS/A",
              "voters": 359
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/B",
              "voters": 332
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/C",
              "voters": 342
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/D",
              "voters": 265
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/E",
              "voters": 352
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/F",
              "voters": 276
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/G",
              "voters": 258
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/H",
              "voters": 248
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/1",
              "voters": 274
            },
            {
              "station": "COLLEGE PRIVEE LES LILAS/J",
              "voters": 297
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLMESSENG/A",
              "voters": 303
            }
          ],
          "ESSESALAKOK ESSESSALAKOK": [
            {
              "station": "G. S. B. POLYVALENT LES COLOMBES/A",
              "voters": 341
            },
            {
              "station": "G. S. B. POLYVALENT LES COLOMBES/B",
              "voters": 386
            },
            {
              "station": "G. S. B. POLYVALENT LES COLOMBES/C",
              "voters": 401
            },
            {
              "station": "G. S. B. POLYVALENT LES COLOMBES/D",
              "voters": 379
            },
            {
              "station": "G. S. B. POLYVALENT LES COLOMBES/E",
              "voters": 340
            }
          ],
          "ESSESALAKOK ESSESSALAKOK ESSESSALAKOK": [
            {
              "station": "G. S. B. LA REPUBLIQUE/A",
              "voters": 274
            },
            {
              "station": "G. S. B. LA REPUBLIQUE/B",
              "voters": 324
            }
          ],
          "ABOM ABOU": [
            {
              "station": "COLLEGE SAINT EXUPERY/A",
              "voters": 391
            },
            {
              "station": "COLLEGE SAINT EXUPERY/B",
              "voters": 333
            },
            {
              "station": "COLLEGE SAINT EXUPERY/C",
              "voters": 258
            }
          ],
          "NGOUSSO I": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE SEGENA EYEMO'O/A",
              "voters": 194
            }
          ],
          "ESSOS NORD II": [
            {
              "station": "GROUPE SCOL BILINGUE LES AGNELETS ST VICTOR/A",
              "voters": 145
            }
          ]
        },
        "YAOUNDE VI": {
          "BIYEM-ASSI BLOC 10": [
            {
              "station": "BIYEM-ASSI ECOLE SOURCE/A",
              "voters": 280
            },
            {
              "station": "BIYEM-ASSI ECOLE SOURCE/B",
              "voters": 332
            },
            {
              "station": "BIYEM-ASSI ECOLE SOURCE/C",
              "voters": 343
            },
            {
              "station": "BIYEM-ASSI ECOLE SOURCE/D",
              "voters": 347
            }
          ],
          "BIYEM-ASSI BLOC 11 ET 16": [
            {
              "station": "BIYEM-ASSI LYCEE/A",
              "voters": 339
            },
            {
              "station": "BIYEM-ASSI LYCEE/B",
              "voters": 351
            },
            {
              "station": "BIYEM-ASSI LYCEE/C",
              "voters": 292
            },
            {
              "station": "BIYEM-ASSI LYCEE/D",
              "voters": 293
            },
            {
              "station": "BIYEM-ASSI LYCEE/E",
              "voters": 333
            },
            {
              "station": "BIYEM-ASSI LYCEE/F",
              "voters": 256
            },
            {
              "station": "BIYEM-ASSI LYCEE/G",
              "voters": 327
            },
            {
              "station": "BIYEM-ASSI LYCEE/H",
              "voters": 309
            }
          ],
          "BIYEM-ASSI BLOC 12 ET 13": [
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/A",
              "voters": 328
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/B",
              "voters": 340
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/C",
              "voters": 348
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/D",
              "voters": 357
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/E",
              "voters": 412
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/F",
              "voters": 316
            },
            {
              "station": "COMPLEXE SCOLAIRE MARC ESSO/G",
              "voters": 397
            },
            {
              "station": "COLLEGE FLEMING/A",
              "voters": 372
            },
            {
              "station": "COLLEGE FLEMING/B",
              "voters": 370
            }
          ],
          "BIYEM-ASSI BLOC 12 ET 13, BIYEM-ASSI BLOC 14, CARREFOUR ETOUG-EBE, MENDONG": [
            {
              "station": "COLLEGE FLEMING/C",
              "voters": 382
            },
            {
              "station": "COLLEGE FLEMING/D",
              "voters": 351
            },
            {
              "station": "COLLEGE FLEMING/E",
              "voters": 359
            },
            {
              "station": "COLLEGE FLEMING/F",
              "voters": 392
            },
            {
              "station": "COLLEGE FLEMING/G",
              "voters": 396
            },
            {
              "station": "COLLEGE FLEMING/H",
              "voters": 403
            },
            {
              "station": "COLLEGE FLEMING/1",
              "voters": 260
            }
          ],
          "BIYEM-ASSI BLOC 5, BIYEM-ASSI MAIRIE": [
            {
              "station": "BIYEM-ASSI ECOLE/A",
              "voters": 310
            },
            {
              "station": "BIYEM-ASSI ECOLE/B",
              "voters": 304
            },
            {
              "station": "BIYEM-ASSI ECOLE/C",
              "voters": 323
            },
            {
              "station": "BIYEM-ASSI ECOLE/D",
              "voters": 289
            },
            {
              "station": "BIYEM-ASSI ECOLE/E",
              "voters": 303
            },
            {
              "station": "BIYEM-ASSI ECOLE/F",
              "voters": 336
            },
            {
              "station": "BIYEM-ASSI ECOLE/G",
              "voters": 337
            },
            {
              "station": "BIYEM-ASSI ECOLE/H",
              "voters": 283
            },
            {
              "station": "BIYEM-ASSI ECOLE/1",
              "voters": 313
            },
            {
              "station": "BIYEM-ASSI ECOLE/J",
              "voters": 380
            },
            {
              "station": "BIYEM-ASSI ECOLE/K",
              "voters": 325
            },
            {
              "station": "BIYEM-ASSI ECOLE/L",
              "voters": 376
            },
            {
              "station": "BIYEM-ASSI ECOLE/M",
              "voters": 220
            }
          ],
          "BIYEM-ASSI BLOC 10, BIYEM-ASSI BLOC 6, BIYEM-ASSI MAIRIE": [
            {
              "station": "ECOLE PRIVEE LES PIGEONS/A",
              "voters": 291
            },
            {
              "station": "ECOLE PRIVEE LES PIGEONS/B",
              "voters": 287
            },
            {
              "station": "ECOLE PRIVEE LES PIGEONS/C",
              "voters": 289
            }
          ],
          "BIYEM-ASSI BLOC 7": [
            {
              "station": "ECOLE MAT ANGLOPHONE/A",
              "voters": 304
            },
            {
              "station": "ECOLE MAT ANGLOPHONE/B",
              "voters": 384
            }
          ],
          "BIYEM-ASSI BLOC 8, ROND POINT EXPRESS BIYEM-ASSI": [
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/A",
              "voters": 319
            },
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/B",
              "voters": 268
            },
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/C",
              "voters": 316
            },
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/D",
              "voters": 388
            },
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/E",
              "voters": 382
            },
            {
              "station": "ECOLE BILINGUE BIYEM-ASSI/F",
              "voters": 400
            }
          ],
          "BIYEM-ASSI BLOC 8": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE BIYEM-ASSI/A",
              "voters": 331
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE BIYEM-ASSI/B",
              "voters": 364
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE BIYEM-ASSI/C",
              "voters": 322
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE BIYEM-ASSI/D",
              "voters": 396
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE BIYEM-ASSI/E",
              "voters": 367
            }
          ],
          "BIYEM-ASSI CHAPELLE": [
            {
              "station": "COLLEGE EBANDA/A",
              "voters": 307
            },
            {
              "station": "COLLEGE EBANDA/B",
              "voters": 319
            },
            {
              "station": "COLLEGE EBANDA/C",
              "voters": 312
            },
            {
              "station": "COLLEGE EBANDA/D",
              "voters": 307
            },
            {
              "station": "COLLEGE EBANDA/E",
              "voters": 325
            },
            {
              "station": "COLLEGE EBANDA/F",
              "voters": 309
            },
            {
              "station": "COLLEGE EBANDA/G",
              "voters": 359
            },
            {
              "station": "COLLEGE EBANDA/H",
              "voters": 243
            }
          ],
          "BIYEM-ASSI MAIRIE": [
            {
              "station": "COLLEGE LE SAVOIR/A",
              "voters": 306
            },
            {
              "station": "COLLEGE LE SAVOIR/B",
              "voters": 327
            },
            {
              "station": "COLLEGE LE SAVOIR/C",
              "voters": 261
            }
          ],
          "ELIG EFFA 4, ELIG-EFFA, MELEN 1": [
            {
              "station": "ENSTP/A",
              "voters": 354
            },
            {
              "station": "ENSTP/B",
              "voters": 330
            },
            {
              "station": "ENSTP/C",
              "voters": 327
            },
            {
              "station": "ENSTP/D",
              "voters": 312
            },
            {
              "station": "ENSTP/E",
              "voters": 311
            },
            {
              "station": "ENSTP/F",
              "voters": 326
            },
            {
              "station": "ENSTP/G",
              "voters": 378
            },
            {
              "station": "ENSTP/H",
              "voters": 384
            },
            {
              "station": "ENSTP/1",
              "voters": 126
            }
          ],
          "ETOUG-EBE 2": [
            {
              "station": "COLLEGE IPONI/A",
              "voters": 368
            },
            {
              "station": "COLLEGE IPONI/B",
              "voters": 369
            },
            {
              "station": "COLLEGE IPONI/C",
              "voters": 345
            },
            {
              "station": "COLLEGE IPONI/D",
              "voters": 335
            },
            {
              "station": "COLLEGE IPONI/E",
              "voters": 360
            },
            {
              "station": "COLLEGE IPONI/F",
              "voters": 368
            },
            {
              "station": "COLLEGE IPONI/G",
              "voters": 352
            },
            {
              "station": "COLLEGE IPONI/H",
              "voters": 383
            },
            {
              "station": "COLLEGE IPONI/1",
              "voters": 384
            },
            {
              "station": "COLLEGE IPONI/J",
              "voters": 377
            },
            {
              "station": "COLLEGE IPONI/K",
              "voters": 220
            }
          ],
          "ETOUG-EBE 2 BLOC 4, ETOUG-EBE NKOL-NZIE, ETOUG-EBE TKC": [
            {
              "station": "ECOLE PRIVEE LA LUMIERE/A",
              "voters": 372
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/B",
              "voters": 363
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/C",
              "voters": 374
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/D",
              "voters": 348
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/E",
              "voters": 336
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/F",
              "voters": 324
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/G",
              "voters": 294
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/H",
              "voters": 321
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/1",
              "voters": 363
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/J",
              "voters": 374
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/K",
              "voters": 381
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/L",
              "voters": 380
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/M",
              "voters": 401
            },
            {
              "station": "ECOLE PRIVEE LA LUMIERE/N",
              "voters": 430
            }
          ],
          "ETOUG-EBE I AKOA-NDOE, ETOUG-EBE TKC": [
            {
              "station": "COLLEGE LES AIGLONS/A",
              "voters": 352
            },
            {
              "station": "COLLEGE LES AIGLONS/B",
              "voters": 358
            },
            {
              "station": "COLLEGE LES AIGLONS/C",
              "voters": 331
            },
            {
              "station": "COLLEGE LES AIGLONS/D",
              "voters": 341
            },
            {
              "station": "COLLEGE LES AIGLONS/E",
              "voters": 390
            },
            {
              "station": "COLLEGE LES AIGLONS/F",
              "voters": 379
            },
            {
              "station": "COLLEGE LES AIGLONS/G",
              "voters": 388
            },
            {
              "station": "COLLEGE LES AIGLONS/H",
              "voters": 395
            },
            {
              "station": "COLLEGE LES AIGLONS/1",
              "voters": 361
            },
            {
              "station": "COLLEGE LES AIGLONS/J",
              "voters": 449
            }
          ],
          "ETOUG-EBE I AKOA-NDOE 2": [
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/A",
              "voters": 341
            },
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/B",
              "voters": 367
            },
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/C",
              "voters": 337
            },
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/D",
              "voters": 384
            },
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/E",
              "voters": 241
            },
            {
              "station": "COLLEGE ESPERANCE AKOA-NDOE II/F",
              "voters": 371
            }
          ],
          "ETOUG-EBE BLOC 3, ETOUG-EBE I BLOC 3": [
            {
              "station": "ETOUG-EBE CENTRE/A",
              "voters": 331
            },
            {
              "station": "ETOUG-EBE CENTRE/B",
              "voters": 305
            },
            {
              "station": "ETOUG-EBE CENTRE/C",
              "voters": 318
            },
            {
              "station": "ETOUG-EBE CENTRE/D",
              "voters": 316
            },
            {
              "station": "ETOUG-EBE CENTRE/E",
              "voters": 327
            },
            {
              "station": "ETOUG-EBE CENTRE/F",
              "voters": 333
            },
            {
              "station": "ETOUG-EBE CENTRE/G",
              "voters": 340
            },
            {
              "station": "ETOUG-EBE CENTRE/H",
              "voters": 296
            },
            {
              "station": "ETOUG-EBE CENTRE/1",
              "voters": 326
            },
            {
              "station": "ETOUG-EBE CENTRE/J",
              "voters": 377
            },
            {
              "station": "ETOUG-EBE CENTRE/K",
              "voters": 381
            },
            {
              "station": "ETOUG-EBE CENTRE/L",
              "voters": 383
            },
            {
              "station": "ETOUG-EBE CENTRE/M",
              "voters": 414
            },
            {
              "station": "COLLEGE MEVICK/A",
              "voters": 357
            },
            {
              "station": "COLLEGE MEVICK/B",
              "voters": 334
            },
            {
              "station": "COLLEGE MEVICK/C",
              "voters": 348
            },
            {
              "station": "COLLEGE MEVICK/D",
              "voters": 345
            },
            {
              "station": "COLLEGE MEVICK/E",
              "voters": 350
            },
            {
              "station": "COLLEGE MEVICK/F",
              "voters": 347
            },
            {
              "station": "COLLEGE MEVICK/G",
              "voters": 420
            },
            {
              "station": "COLLEGE MEVICK/H",
              "voters": 191
            }
          ],
          "ETOUG-EBE I NKOLZIE": [
            {
              "station": "ENIEG PRIVEE DE NKOLZIE/A",
              "voters": 312
            },
            {
              "station": "ENIEG PRIVEE DE NKOLZIE/B",
              "voters": 322
            },
            {
              "station": "ENIEG PRIVEE DE NKOLZIE/C",
              "voters": 313
            },
            {
              "station": "ENIEG PRIVEE DE NKOLZIE/D",
              "voters": 174
            }
          ],
          "ETOUG-EBE I NKOM-NKANA": [
            {
              "station": "ECOLE PUBLIQUE NKOM-NKANA MENDONG/A",
              "voters": 360
            },
            {
              "station": "ECOLE PUBLIQUE NKOM-NKANA MENDONG/B",
              "voters": 361
            },
            {
              "station": "ECOLE PUBLIQUE NKOM-NKANA MENDONG/C",
              "voters": 367
            },
            {
              "station": "ECOLE PUBLIQUE NKOM-NKANA MENDONG/D",
              "voters": 415
            }
          ],
          "BIYEM-ASSI BLOC 5, GENDARMERIE NATIONALE, MELEN 1, MELEN 3, MELEN GP": [
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/A",
              "voters": 290
            },
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/B",
              "voters": 283
            },
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/C",
              "voters": 279
            },
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/D",
              "voters": 319
            },
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/E",
              "voters": 374
            },
            {
              "station": "CENTRE CATHOLIQUE UNIVERSITAIRE/F",
              "voters": 75
            }
          ],
          "MELEN 3": [
            {
              "station": "ECOLE PRIVEE LES LAPEREAUX/A",
              "voters": 341
            },
            {
              "station": "ECOLE PRIVEE LES LAPEREAUX/B",
              "voters": 254
            },
            {
              "station": "ECOLE PRIVEE LES LAPEREAUX/C",
              "voters": 265
            },
            {
              "station": "ECOLE PRIVEE LES LAPEREAUX/D",
              "voters": 235
            }
          ],
          "MELEN 4": [
            {
              "station": "ISEIG/A",
              "voters": 364
            },
            {
              "station": "ISEIG/B",
              "voters": 323
            },
            {
              "station": "ISEIG/C",
              "voters": 353
            },
            {
              "station": "ISEIG/D",
              "voters": 381
            }
          ],
          "GENDARMERIE NATIONALE, MELEN 5": [
            {
              "station": "ECOLE PRIVEE LES PETITS CHAPERONS/A",
              "voters": 228
            },
            {
              "station": "ECOLE PRIVEE LES PETITS CHAPERONS/B",
              "voters": 306
            },
            {
              "station": "ECOLE PRIVEE LES PETITS CHAPERONS/C",
              "voters": 264
            },
            {
              "station": "ECOLE PRIVEE LES PETITS CHAPERONS/D",
              "voters": 215
            }
          ],
          "MELEN 6": [
            {
              "station": "HOLY INFANT SCHOOL/A",
              "voters": 350
            },
            {
              "station": "HOLY INFANT SCHOOL/B",
              "voters": 314
            },
            {
              "station": "HOLY INFANT SCHOOL/C",
              "voters": 347
            },
            {
              "station": "HOLY INFANT SCHOOL/D",
              "voters": 336
            },
            {
              "station": "HOLY INFANT SCHOOL/E",
              "voters": 346
            },
            {
              "station": "HOLY INFANT SCHOOL/F",
              "voters": 334
            },
            {
              "station": "HOLY INFANT SCHOOL/G",
              "voters": 284
            },
            {
              "station": "HOLY INFANT SCHOOL/H",
              "voters": 303
            },
            {
              "station": "HOLY INFANT SCHOOL/1",
              "voters": 381
            },
            {
              "station": "HOLY INFANT SCHOOL/J",
              "voters": 151
            }
          ],
          "MELEN 7A ET 7B": [
            {
              "station": "HILL SIDE SCHOOL/A",
              "voters": 285
            },
            {
              "station": "HILL SIDE SCHOOL/B",
              "voters": 343
            },
            {
              "station": "HILL SIDE SCHOOL/C",
              "voters": 70
            }
          ],
          "MELEN 8 C, MELEN 8C, MELEN 9": [
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/A",
              "voters": 327
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/B",
              "voters": 322
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/C",
              "voters": 314
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/D",
              "voters": 309
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/E",
              "voters": 317
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/F",
              "voters": 366
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/G",
              "voters": 368
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/H",
              "voters": 292
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/1",
              "voters": 349
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/J",
              "voters": 351
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/K",
              "voters": 362
            },
            {
              "station": "E. M. PRIVEE FOUDA MEKINDA/L",
              "voters": 69
            }
          ],
          "MELEN 9": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/A",
              "voters": 307
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/B",
              "voters": 294
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/C",
              "voters": 302
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/D",
              "voters": 308
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/E",
              "voters": 295
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/F",
              "voters": 325
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/G",
              "voters": 313
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/H",
              "voters": 303
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/1",
              "voters": 348
            },
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE MELEN 9/J",
              "voters": 125
            }
          ],
          "MENDONG CAMP SIC": [
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/A",
              "voters": 331
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/B",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/C",
              "voters": 338
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/D",
              "voters": 327
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/E",
              "voters": 333
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/F",
              "voters": 327
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/G",
              "voters": 331
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/H",
              "voters": 334
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/1",
              "voters": 310
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/J",
              "voters": 340
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/K",
              "voters": 306
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/L",
              "voters": 276
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/M",
              "voters": 383
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/N",
              "voters": 381
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/0",
              "voters": 379
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/P",
              "voters": 327
            },
            {
              "station": "ECOLE PUBLIQUE DE MENDONG/Q",
              "voters": 378
            }
          ],
          "BIYEM-ASSI BLOC 6, MENDONG, MENDONG LYCEE": [
            {
              "station": "LYCEE MENDONG/A",
              "voters": 334
            },
            {
              "station": "LYCEE MENDONG/B",
              "voters": 334
            },
            {
              "station": "LYCEE MENDONG/C",
              "voters": 378
            },
            {
              "station": "LYCEE MENDONG/D",
              "voters": 324
            },
            {
              "station": "LYCEE MENDONG/E",
              "voters": 351
            },
            {
              "station": "LYCEE MENDONG/F",
              "voters": 335
            },
            {
              "station": "LYCEE MENDONG/G",
              "voters": 356
            },
            {
              "station": "LYCEE MENDONG/H",
              "voters": 375
            },
            {
              "station": "LYCEE MENDONG/1",
              "voters": 385
            },
            {
              "station": "LYCEE MENDONG/J",
              "voters": 371
            },
            {
              "station": "LYCEE MENDONG/K",
              "voters": 428
            }
          ],
          "MENDONG VILLAGE A": [
            {
              "station": "OPERA LES SEMENCES/A",
              "voters": 376
            },
            {
              "station": "OPERA LES SEMENCES/B",
              "voters": 332
            },
            {
              "station": "OPERA LES SEMENCES/C",
              "voters": 361
            },
            {
              "station": "OPERA LES SEMENCES/D",
              "voters": 287
            },
            {
              "station": "OPERA LES SEMENCES/E",
              "voters": 284
            },
            {
              "station": "OPERA LES SEMENCES/F",
              "voters": 376
            },
            {
              "station": "OPERA LES SEMENCES/G",
              "voters": 285
            },
            {
              "station": "OPERA LES SEMENCES/H",
              "voters": 282
            }
          ],
          "MENDONG VILLAGE A, MENDONG VILLAGE B, SIMBOCK CARREFOUR": [
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/A",
              "voters": 335
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/B",
              "voters": 323
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/C",
              "voters": 362
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/D",
              "voters": 338
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/E",
              "voters": 341
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/F",
              "voters": 361
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/G",
              "voters": 381
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/H",
              "voters": 385
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/I",
              "voters": 381
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/J",
              "voters": 433
            },
            {
              "station": "COMPLEXE SCOLAIRE COSBIE/K",
              "voters": 428
            }
          ],
          "MENDONG VILLAGE B": [
            {
              "station": "GROUPE SCOL. BIL. ROSY ET LES PETITS/A",
              "voters": 357
            },
            {
              "station": "GROUPE SCOL. BIL. ROSY ET LES PETITS/B",
              "voters": 342
            },
            {
              "station": "GROUPE SCOL. BIL. ROSY ET LES PETITS/C",
              "voters": 396
            },
            {
              "station": "GROUPE SCOL. BIL. ROSY ET LES PETITS/D",
              "voters": 350
            }
          ],
          "MVOG BETSI EBA BLOC 2, 4 ET 9": [
            {
              "station": "ECOLE JERUSALEM/A",
              "voters": 371
            },
            {
              "station": "ECOLE JERUSALEM/B",
              "voters": 320
            },
            {
              "station": "ECOLE JERUSALEM/C",
              "voters": 348
            },
            {
              "station": "ECOLE JERUSALEM/D",
              "voters": 331
            },
            {
              "station": "ECOLE JERUSALEM/E",
              "voters": 374
            },
            {
              "station": "ECOLE JERUSALEM/F",
              "voters": 330
            }
          ],
          "MVOG BETSI EBA BLOC 8": [
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/A",
              "voters": 332
            },
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/B",
              "voters": 359
            },
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/C",
              "voters": 356
            },
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/D",
              "voters": 370
            },
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/E",
              "voters": 352
            },
            {
              "station": "ECOLE PRIVEE VICTOR HUGO/F",
              "voters": 172
            }
          ],
          "MVOG-BETSI EBA BLOC 1, 2, 3, 4, 5": [
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/A",
              "voters": 335
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/B",
              "voters": 313
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/C",
              "voters": 302
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/D",
              "voters": 289
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/E",
              "voters": 313
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/F",
              "voters": 386
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/G",
              "voters": 233
            },
            {
              "station": "ECOLE PUBLIQUE DE MVOG-BETSI/H",
              "voters": 335
            }
          ],
          "CARREFOUR ETOUG-EBE, ETOUG-EBE, MVOG-BETSI EBA BLOC 6 ET 7": [
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/A",
              "voters": 329
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/B",
              "voters": 342
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/C",
              "voters": 311
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/D",
              "voters": 329
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/E",
              "voters": 299
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/F",
              "voters": 314
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/G",
              "voters": 348
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/H",
              "voters": 305
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/1",
              "voters": 322
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/J",
              "voters": 300
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/K",
              "voters": 352
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/L",
              "voters": 385
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/M",
              "voters": 385
            },
            {
              "station": "LYCEE BILINGUE D'ETOUG-EBE/N",
              "voters": 278
            }
          ],
          "NKOLBIKOK 1, NKOLBIKOK 2": [
            {
              "station": "LINDA ET LES CHATONS/A",
              "voters": 235
            },
            {
              "station": "LINDA ET LES CHATONS/B",
              "voters": 261
            },
            {
              "station": "LINDA ET LES CHATONS/C",
              "voters": 304
            },
            {
              "station": "LINDA ET LES CHATONS/D",
              "voters": 256
            },
            {
              "station": "LINDA ET LES CHATONS/E",
              "voters": 298
            }
          ],
          "NKOLBIKOK 2": [
            {
              "station": "ECOLE PRIVEE TOCHE/A",
              "voters": 331
            },
            {
              "station": "ECOLE PRIVEE TOCHE/B",
              "voters": 351
            }
          ],
          "SIMBOCK BLOC 2": [
            {
              "station": "COLLEGE JEAN JAURES/A",
              "voters": 372
            },
            {
              "station": "COLLEGE JEAN JAURES/B",
              "voters": 348
            },
            {
              "station": "COLLEGE JEAN JAURES/C",
              "voters": 351
            },
            {
              "station": "COLLEGE JEAN JAURES/D",
              "voters": 357
            },
            {
              "station": "COLLEGE JEAN JAURES/E",
              "voters": 355
            },
            {
              "station": "COLLEGE JEAN JAURES/F",
              "voters": 388
            },
            {
              "station": "COLLEGE JEAN JAURES/G",
              "voters": 388
            },
            {
              "station": "COLLEGE JEAN JAURES/H",
              "voters": 386
            },
            {
              "station": "COLLEGE JEAN JAURES/1",
              "voters": 379
            },
            {
              "station": "COLLEGE JEAN JAURES/J",
              "voters": 345
            },
            {
              "station": "COLLEGE JEAN JAURES/K",
              "voters": 428
            },
            {
              "station": "COLLEGE JEAN JAURES/L",
              "voters": 397
            }
          ],
          "SIMBOCK, SIMBOCK CARREFOUR": [
            {
              "station": "COLLEGE LA GRACE/A",
              "voters": 370
            },
            {
              "station": "COLLEGE LA GRACE/B",
              "voters": 364
            },
            {
              "station": "COLLEGE LA GRACE/C",
              "voters": 356
            },
            {
              "station": "COLLEGE LA GRACE/D",
              "voters": 384
            },
            {
              "station": "COLLEGE LA GRACE/E",
              "voters": 383
            },
            {
              "station": "COLLEGE LA GRACE/F",
              "voters": 348
            },
            {
              "station": "COLLEGE LA GRACE/G",
              "voters": 368
            },
            {
              "station": "COLLEGE LA GRACE/H",
              "voters": 383
            },
            {
              "station": "COLLEGE LA GRACE/1",
              "voters": 377
            },
            {
              "station": "COLLEGE LA GRACE/J",
              "voters": 388
            },
            {
              "station": "COLLEGE LA GRACE/K",
              "voters": 387
            },
            {
              "station": "COLLEGE LA GRACE/L",
              "voters": 370
            },
            {
              "station": "COLLEGE LA GRACE/M",
              "voters": 327
            }
          ],
          "SIMBOCK, SIMBOCK CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE SIMBOCK/A",
              "voters": 332
            },
            {
              "station": "ECOLE PUBLIQUE SIMBOCK/B",
              "voters": 304
            },
            {
              "station": "ECOLE PUBLIQUE SIMBOCK/C",
              "voters": 384
            },
            {
              "station": "ECOLE PUBLIQUE SIMBOCK/D",
              "voters": 383
            },
            {
              "station": "ECOLE PUBLIQUE SIMBOCK/E",
              "voters": 416
            }
          ],
          "MELEN 8 C": [
            {
              "station": "ECOLE FRANKY (MELEN 8 C)/A",
              "voters": 391
            },
            {
              "station": "ECOLE FRANKY (MELEN 8 C)/B",
              "voters": 371
            },
            {
              "station": "ECOLE FRANKY (MELEN 8 C)/C",
              "voters": 388
            }
          ],
          "BIYEM-ASSI BLOC 15, ROND POINT EXPRESS BIYEM-ASSI": [
            {
              "station": "ECOLE BILINGUE LES GOELANDS/A",
              "voters": 302
            },
            {
              "station": "ECOLE BILINGUE LES GOELANDS/B",
              "voters": 319
            },
            {
              "station": "ECOLE BILINGUE LES GOELANDS/C",
              "voters": 343
            },
            {
              "station": "ECOLE BILINGUE LES GOELANDS/D",
              "voters": 197
            },
            {
              "station": "ECOLE BILINGUE LES GOELANDS/E",
              "voters": 229
            }
          ],
          "ETOUG-EBE NKOL-NZIE": [
            {
              "station": "ECOLE BILINGUE LES CALCEDOINES/A",
              "voters": 359
            },
            {
              "station": "ECOLE BILINGUE LES CALCEDOINES/B",
              "voters": 419
            },
            {
              "station": "ECOLE BILINGUE LES CALCEDOINES/C",
              "voters": 421
            },
            {
              "station": "ECOLE BILINGUE LES CALCEDOINES/D",
              "voters": 438
            }
          ],
          "CARREFOUR ETOUG-EBE": [
            {
              "station": "ANGLO-SAXON GENERAL AND TECHNICAL GROUP OF SCHOOL/A",
              "voters": 288
            },
            {
              "station": "ANGLO-SAXON GENERAL AND TECHNICAL GROUP OF SCHOOL/B",
              "voters": 282
            }
          ],
          "ETOUG-EBE": [
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/A",
              "voters": 353
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/B",
              "voters": 331
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/C",
              "voters": 345
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/D",
              "voters": 285
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/E",
              "voters": 340
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/F",
              "voters": 293
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/G",
              "voters": 350
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/H",
              "voters": 336
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/I",
              "voters": 244
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/J",
              "voters": 233
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/K",
              "voters": 302
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/L",
              "voters": 242
            },
            {
              "station": "JARDIN Z. B. DE MVOG BETSI/M",
              "voters": 387
            }
          ],
          "ELIG EFFA 4, GENDARMERIE NATIONALE": [
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/A",
              "voters": 255
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/B",
              "voters": 243
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/C",
              "voters": 250
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/D",
              "voters": 234
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/E",
              "voters": 306
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/F",
              "voters": 289
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/G",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/H",
              "voters": 342
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/1",
              "voters": 325
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/J",
              "voters": 348
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/K",
              "voters": 302
            },
            {
              "station": "ECOLE PUBLIQUE DE LA GENDARMERIE NATIONALE/L",
              "voters": 323
            }
          ],
          "MENDONG": [
            {
              "station": "ECOLE MATERNELLE DE LA CNPS/A",
              "voters": 323
            },
            {
              "station": "ECOLE MATERNELLE DE LA CNPS/B",
              "voters": 374
            },
            {
              "station": "ECOLE MATERNELLE DE LA CNPS/C",
              "voters": 479
            }
          ],
          "SIMBOCK, SIMBOCK BASE MILITAIRE": [
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/A",
              "voters": 420
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/B",
              "voters": 421
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/C",
              "voters": 426
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/D",
              "voters": 425
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/E",
              "voters": 417
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/F",
              "voters": 424
            },
            {
              "station": "COMPLEXE SCOLAIRE ELGRA/G",
              "voters": 211
            }
          ]
        },
        "Yaounde VII": {
          "ABOBO": [
            {
              "station": "ECOLE ST ESPRIT DABOBO / A",
              "voters": 309
            },
            {
              "station": "ECOLE ST ESPRIT DABOBO / B",
              "voters": 266
            },
            {
              "station": "ECOLE ST ESPRIT DABOBO / C",
              "voters": 277
            },
            {
              "station": "ECOLE ST ESPRIT DABOBO / D",
              "voters": 266
            },
            {
              "station": "ECOLE ST ESPRIT DABOBO / E",
              "voters": 214
            }
          ],
          "EKOREZOCK": [
            {
              "station": "THE GENIUS TRILINGUAL COLLEGE / A",
              "voters": 328
            },
            {
              "station": "THE GENIUS TRILINGUAL COLLEGE / B",
              "voters": 341
            },
            {
              "station": "THE GENIUS TRILINGUAL COLLEGE / C",
              "voters": 262
            },
            {
              "station": "THE GENIUS TRILINGUAL COLLEGE / D",
              "voters": 330
            },
            {
              "station": "E. P. EKOROZOCK / A",
              "voters": 326
            },
            {
              "station": "E. P. EKOROZOCK / B",
              "voters": 295
            },
            {
              "station": "E. P. EKOROZOCK / C",
              "voters": 308
            },
            {
              "station": "E. P. EKOROZOCK / D",
              "voters": 275
            },
            {
              "station": "E. P. EKOROZOCK / E",
              "voters": 349
            },
            {
              "station": "E. P. EKOROZOCK / F",
              "voters": 260
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / A",
              "voters": 317
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / B",
              "voters": 322
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / C",
              "voters": 320
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / D",
              "voters": 343
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / E",
              "voters": 285
            },
            {
              "station": "HANGAR DE L'ECACEP / A",
              "voters": 301
            }
          ],
          "ETETAK": [
            {
              "station": "COLLEGE PR MEYONG MEYEME / A",
              "voters": 342
            },
            {
              "station": "COLLEGE PR MEYONG MEYEME / B",
              "voters": 347
            },
            {
              "station": "COLLEGE PR MEYONG MEYEME / C",
              "voters": 234
            },
            {
              "station": "COLLEGE PR MEYONG MEYEME / D",
              "voters": 257
            },
            {
              "station": "COLLEGE PR MEYONG MEYEME / E",
              "voters": 308
            },
            {
              "station": "COLLEGE PR MEYONG MEYEME / F",
              "voters": 140
            },
            {
              "station": "ECOLE MAT LES COLOMBES PARFAITES / A",
              "voters": 269
            },
            {
              "station": "ECOLE MAT LES COLOMBES PARFAITES / B",
              "voters": 269
            }
          ],
          "MBOQ DOUM": [
            {
              "station": "EPR B & A / A",
              "voters": 324
            },
            {
              "station": "EPR B & A / B",
              "voters": 321
            },
            {
              "station": "EPR B & A / C",
              "voters": 286
            },
            {
              "station": "EPR B & A / D",
              "voters": 279
            },
            {
              "station": "EPR B & A / E",
              "voters": 161
            },
            {
              "station": "E PR TEBAP / A",
              "voters": 329
            },
            {
              "station": "E PR TEBAP / B",
              "voters": 338
            },
            {
              "station": "E PR TEBAP / C",
              "voters": 275
            },
            {
              "station": "E PR TEBAP / D",
              "voters": 245
            },
            {
              "station": "E PR MONT ZION / A",
              "voters": 336
            },
            {
              "station": "E PR MONT ZION / C",
              "voters": 229
            },
            {
              "station": "E PR MONT ZION / D",
              "voters": 219
            },
            {
              "station": "G S B LA DECouverte / A",
              "voters": 90
            }
          ],
          "MINKOA MEYOS": [
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / A",
              "voters": 344
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / B",
              "voters": 320
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / C",
              "voters": 338
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / D",
              "voters": 279
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / E",
              "voters": 328
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / F",
              "voters": 352
            },
            {
              "station": "GROUPE SCOLAIRE LES AGNEAUX / G",
              "voters": 173
            }
          ],
          "OYOM ABANG ABOBO": [
            {
              "station": "ECOLE PUBLIQUE FAM ASSI / A",
              "voters": 314
            },
            {
              "station": "ECOLE PUBLIQUE FAM ASSI / B",
              "voters": 212
            },
            {
              "station": "ECOLE PUBLIQUE FAM ASSI / C",
              "voters": 349
            },
            {
              "station": "ECOLE PUBLIQUE FAM ASSI / D",
              "voters": 299
            },
            {
              "station": "BAT ADM IRAD / A",
              "voters": 310
            },
            {
              "station": "E P OYOM ABANG / A",
              "voters": 311
            },
            {
              "station": "E P OYOM ABANG / B",
              "voters": 322
            },
            {
              "station": "E P OYOM ABANG / C",
              "voters": 317
            },
            {
              "station": "E P OYOM ABANG / D",
              "voters": 304
            },
            {
              "station": "E P OYOM ABANG / E",
              "voters": 300
            },
            {
              "station": "E P OYOM ABANG / F",
              "voters": 335
            },
            {
              "station": "E P OYOM ABANG / G",
              "voters": 302
            },
            {
              "station": "E P OYOM ABANG / H",
              "voters": 372
            },
            {
              "station": "E P OYOM ABANG / I",
              "voters": 280
            },
            {
              "station": "E P OYOM ABANG / J",
              "voters": 342
            }
          ],
          "NDAMVOUTH": [
            {
              "station": "BAT ADM IRAD / B",
              "voters": 301
            },
            {
              "station": "BAT ADM IRAD / C",
              "voters": 196
            },
            {
              "station": "CLUB AGRONOMIQUE / A",
              "voters": 302
            },
            {
              "station": "CENTRE AGRONOMIQUE / A",
              "voters": 272
            },
            {
              "station": "SALLE DES ACTES DE LA MAIRIE / C",
              "voters": 245
            },
            {
              "station": "E BIL. MARVELOUS / A",
              "voters": 308
            },
            {
              "station": "E BIL. MARVELOUS / B",
              "voters": 315
            },
            {
              "station": "G S LA REFERENCE / A",
              "voters": 247
            }
          ],
          "OYOM ABANG I": [
            {
              "station": "SALLE DES ACTES DE LA MAIRIE / A",
              "voters": 342
            },
            {
              "station": "SALLE DES ACTES DE LA MAIRIE / B",
              "voters": 334
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / B",
              "voters": 278
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / D",
              "voters": 276
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / G",
              "voters": 344
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / I",
              "voters": 155
            },
            {
              "station": "E P LES MARGUERITES / A",
              "voters": 343
            },
            {
              "station": "E P LES MARGUERITES / B",
              "voters": 347
            },
            {
              "station": "E P LES MARGUERITES / C",
              "voters": 360
            },
            {
              "station": "E P LES MARGUERITES / D",
              "voters": 134
            },
            {
              "station": "E P LES MARGUERITES / E",
              "voters": 276
            }
          ],
          "NGOULEMEKONG": [
            {
              "station": "E PR LES MBOEMLITHES / A",
              "voters": 320
            },
            {
              "station": "E PR LES MBOEMLITHES / B",
              "voters": 289
            },
            {
              "station": "E PR LES MBOEMLITHES / C",
              "voters": 285
            },
            {
              "station": "E PR LES MBOEMLITHES / D",
              "voters": 326
            },
            {
              "station": "E PR LES MBOEMLITHES / E",
              "voters": 353
            },
            {
              "station": "COLLEGE POLYVALENTS LE PERLE / A",
              "voters": 298
            },
            {
              "station": "INSTITUT PRIV LAC LE JOURDAIN / A",
              "voters": 269
            },
            {
              "station": "INSTITUT PRIV LAC LE JOURDAIN / B",
              "voters": 234
            },
            {
              "station": "INSTITUT PRIV LAC LE JOURDAIN / C",
              "voters": 278
            }
          ],
          "NKOL AFEEME": [
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / A",
              "voters": 289
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / C",
              "voters": 288
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / E",
              "voters": 308
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / F",
              "voters": 335
            },
            {
              "station": "BEATITUDES INTERNATIONAL SCHOOL / H",
              "voters": 373
            },
            {
              "station": "LES BOUTS D'CHOUX / A",
              "voters": 334
            },
            {
              "station": "LES BOUTS D'CHOUX / B",
              "voters": 130
            },
            {
              "station": "COMPLEXE SCOLAIRE BISTA / F",
              "voters": 276
            },
            {
              "station": "G S B. MERCURE / A",
              "voters": 318
            }
          ],
          "NKOLBISSON CENTRE": [
            {
              "station": "E PR KAMDZONA / A",
              "voters": 317
            },
            {
              "station": "E PR KAMDZONA / B",
              "voters": 308
            },
            {
              "station": "E PR KAMDZONA / C",
              "voters": 323
            },
            {
              "station": "E PR KAMDZONA / D",
              "voters": 299
            },
            {
              "station": "E PR KAMDZONA / E",
              "voters": 235
            },
            {
              "station": "E PR KAMDZONA / F",
              "voters": 373
            },
            {
              "station": "E PR KAMDZONA / G",
              "voters": 344
            },
            {
              "station": "COLLEGE DE LA PAIX / A",
              "voters": 378
            },
            {
              "station": "COLLEGE DE LA PAIX / B",
              "voters": 350
            },
            {
              "station": "COLLEGE DE LA PAIX / C",
              "voters": 365
            },
            {
              "station": "COLLEGE DE LA PAIX / D",
              "voters": 335
            },
            {
              "station": "COLLEGE DE LA PAIX / E",
              "voters": 405
            },
            {
              "station": "COLLEGE DE LA PAIX / F",
              "voters": 396
            },
            {
              "station": "E PR MONT ZION / B",
              "voters": 334
            },
            {
              "station": "E.P. NKOLBISSON / A",
              "voters": 326
            },
            {
              "station": "E.P. NKOLBISSON / C",
              "voters": 327
            }
          ],
          "NKOLUNKUMOU": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 95
            }
          ],
          "NKOMASSI": [
            {
              "station": "E.P. NKOLBISSON / B",
              "voters": 338
            },
            {
              "station": "LYCEE CLASSIQUE DE NKOLBISSON / A",
              "voters": 85
            }
          ],
          "NKOMASSI CENTRE": [
            {
              "station": "E.P. NKOLBISSON / D",
              "voters": 319
            },
            {
              "station": "E.P. NKOLBISSON / E",
              "voters": 335
            },
            {
              "station": "E.P. NKOLBISSON / F",
              "voters": 313
            },
            {
              "station": "E.P. NKOLBISSON / G",
              "voters": 344
            },
            {
              "station": "E.P. NKOLBISSON / H",
              "voters": 383
            }
          ],
          "NKOM NIAM": [
            {
              "station": "GROUPE SCOLAIRE LUCKY KIDS / A",
              "voters": 253
            },
            {
              "station": "GROUPE SCOLAIRE LUCKY KIDS / B",
              "voters": 323
            },
            {
              "station": "GROUPE SCOLAIRE LUCKY KIDS / C",
              "voters": 278
            },
            {
              "station": "GROUPE SCOLAIRE LUCKY KIDS / D",
              "voters": 222
            },
            {
              "station": "ECOLE D'AMELIE / A",
              "voters": 308
            },
            {
              "station": "ECOLE D'AMELIE / B",
              "voters": 281
            },
            {
              "station": "ECOLE D'AMELIE / C",
              "voters": 302
            },
            {
              "station": "ECOLE D'AMELIE / D",
              "voters": 386
            },
            {
              "station": "EMAT NNOM NNAM / A",
              "voters": 385
            },
            {
              "station": "EMAT NNOM NNAM / B",
              "voters": 95
            },
            {
              "station": "ECOLE CATHOLIQUE ST VINCENT / A",
              "voters": 279
            },
            {
              "station": "ECOLE CATHOLIQUE ST VINCENT / B",
              "voters": 243
            },
            {
              "station": "COLLEGE POLYVALENTS LE PERLE / B",
              "voters": 199
            },
            {
              "station": "G S BIL ONANA JEANNE / A",
              "voters": 372
            },
            {
              "station": "E CATH. ST VINCENT DE PAUL / A",
              "voters": 285
            },
            {
              "station": "E CATH. ST VINCENT DE PAUL / B",
              "voters": 234
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / A",
              "voters": 252
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / B",
              "voters": 296
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / C",
              "voters": 271
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / D",
              "voters": 315
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / E",
              "voters": 230
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / F",
              "voters": 314
            },
            {
              "station": "GROUPE SCOLAIRE LA CERTITUDE / G",
              "voters": 162
            }
          ],
          "OYOM ABANG II": [
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / A",
              "voters": 279
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / B",
              "voters": 249
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / C",
              "voters": 256
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / D",
              "voters": 255
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / E",
              "voters": 242
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / F",
              "voters": 324
            },
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / G",
              "voters": 313
            }
          ],
          "OYOM ABANG III": [
            {
              "station": "GROUPE SCOLAIRE GABRIELLA / H",
              "voters": 346
            },
            {
              "station": "GROUPE SCOLAIRE LA RUCHE / A",
              "voters": 365
            },
            {
              "station": "GROUPE SCOLAIRE LA RUCHE / B",
              "voters": 337
            },
            {
              "station": "GROUPE SCOLAIRE LA RUCHE / C",
              "voters": 354
            },
            {
              "station": "E PRIVEE LE GERMINAL / A",
              "voters": 331
            },
            {
              "station": "E PRIVEE ALPHA / A",
              "voters": 335
            },
            {
              "station": "E PRIVEE ALPHA / B",
              "voters": 265
            },
            {
              "station": "E PRIVEE ALPHA / C",
              "voters": 272
            },
            {
              "station": "E PRIVEE ALPHA / D",
              "voters": 278
            }
          ],
          "OYOM ABANG IV": [
            {
              "station": "GROUPE SCOLAIRE LA RUCHE / D",
              "voters": 129
            },
            {
              "station": "GROUPE SCOLAIRE LA RUCHE / E",
              "voters": 308
            }
          ],
          "NDAMVOUT": [
            {
              "station": "ECOLE PUBLIQUE DE NKOMASSI NDAMVOUT / A",
              "voters": 307
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOMASSI NDAMVOUT / B",
              "voters": 247
            }
          ],
          "MINKOAMEYOS": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE",
              "voters": 378
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE",
              "voters": 340
            },
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE",
              "voters": 201
            }
          ],
          "EBOT MEFOU": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE MARTIN MARIE / A",
              "voters": 343
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MARTIN MARIE / B",
              "voters": 339
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MARTIN MARIE / C",
              "voters": 341
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MARTIN MARIE / D",
              "voters": 292
            },
            {
              "station": "GROUPE SCOLAIRE BILINGUE MARTIN MARIE / E",
              "voters": 317
            }
          ]
        }
      },
      "NYONG-ET-KELLE": {
        "Biyouha": {
          "BANGSOMBI": [
            {
              "station": "CHAPELLE EPC BANGOMBI PLATEAU / A",
              "voters": 84
            },
            {
              "station": "CETIC DE HEYA / A",
              "voters": 66
            }
          ],
          "BIYOUHA": [
            {
              "station": "ECOLE PUBLIQUE DE BIYOUHA / A",
              "voters": 122
            },
            {
              "station": "HANGAR PLACE DES FETES / A",
              "voters": 149
            },
            {
              "station": "LYCEE BILINGUE DE BIYOUHA / A",
              "voters": 116
            }
          ],
          "DIBEGUI": [
            {
              "station": "CHAPELLE EPC DE DIBEGUI / A",
              "voters": 184
            }
          ],
          "MEMEL": [
            {
              "station": "ECOLE PUBLIQUE DE MEMEL / A",
              "voters": 140
            }
          ],
          "NSONGA": [
            {
              "station": "ESPLANADE DE LA CHEFFERIE DE NSONGA / A",
              "voters": 60
            },
            {
              "station": "CHAPELLE EPC DE NSONGA INDUSTRIEL / A",
              "voters": 43
            }
          ],
          "SOMAPAN": [
            {
              "station": "CHAPELLE EPC DE SOMAPAN CHEFFERIE / A",
              "voters": 75
            }
          ],
          "SORAPAN": [
            {
              "station": "ECOLE PUBLIQUE DE SORAPAN / A",
              "voters": 34
            }
          ],
          "SONG BAYANG": [
            {
              "station": "ECOLE PUBLIQUE DE SONG BAYANG / A",
              "voters": 300
            },
            {
              "station": "CHAPELLE DE MOM / A",
              "voters": 72
            }
          ],
          "SONG NKOUMONDO I": [
            {
              "station": "CHAPELLE CHEFFERIE DE SONG",
              "voters": 90
            }
          ],
          "SONG NKOUMONDO II": [
            {
              "station": "NKUMONDO / A ERIE DE SONG",
              "voters": 56
            },
            {
              "station": "HANGAR DE SOMAPAN / A",
              "voters": 50
            }
          ],
          "SONG POULA": [
            {
              "station": "ECOLE PUBLIQUE DE SONG POULA / A",
              "voters": 123
            }
          ],
          "SONG DIBONG": [
            {
              "station": "ANCIEN CENTRE INTEGRE DE SONG DIBONG / A",
              "voters": 163
            }
          ],
          "TOUMNGOQ": [
            {
              "station": "FOYER SOCIAL DE TOUMNGOQ / A",
              "voters": 138
            }
          ]
        },
        "BONDJOCK": {
          "BOMABOM CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE BOMABOM / A",
              "voters": 225
            }
          ],
          "BOMABOM LEPMAMB": [
            {
              "station": "ESPLANADE DE LA CHAPELLE EPC LEPMAMB",
              "voters": 102
            }
          ],
          "BONDE": [
            {
              "station": "ECOLE PUBLIQUE BONDE / A",
              "voters": 104
            }
          ],
          "BONDE II": [
            {
              "station": "CASE CHAPELLE EPC DE BONDE / A",
              "voters": 46
            }
          ],
          "BONDJOCK BAYEDE": [
            {
              "station": "CASE CHAPELLE EPC DE BAYEDE / A",
              "voters": 11
            }
          ],
          "BONDJOCK-EPC": [
            {
              "station": "ECOLE PUBLIQUE DE BONDJOCK / A",
              "voters": 229
            },
            {
              "station": "FOYER PROTESTANT DE BONDJOCK / A",
              "voters": 185
            }
          ],
          "BONDJOCK EPC": [
            {
              "station": "FOYER PROTESTANT DE BONDJOCK / B",
              "voters": 138
            }
          ],
          "BONDJOCK II": [
            {
              "station": "CASE CHAPELLE DE BONDJOCK II / A",
              "voters": 129
            }
          ],
          "BONDJOCK LISSEGUE": [
            {
              "station": "ESPL. CHAPELLE EPC DE DE LISS / A",
              "voters": 106
            }
          ],
          "BONDJOCK NDONGO GWATE": [
            {
              "station": "CASE CHAPELLE CATH. NDONGO NGWATE /",
              "voters": 199
            }
          ],
          "HONDOL BAGBA": [
            {
              "station": "ECOLE PUBLIQUE DE BAGBA / A",
              "voters": 117
            }
          ],
          "HONDOL CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE HONDOL CENTRE / A",
              "voters": 161
            }
          ],
          "HONDOL MBOLO": [
            {
              "station": "HANGAR DU CARREF. BARNABE DE MBOLO /",
              "voters": 101
            }
          ],
          "HONDOL SILVEGUE": [
            {
              "station": "CASE CHAPELLE CATH.HONDOL. SILVEGUE /",
              "voters": 98
            }
          ],
          "LINDOI CENTRE": [
            {
              "station": "ECOLE CATHOLIQUE DE LINDOI CENTRE / A",
              "voters": 208
            },
            {
              "station": "ECOLE CATHOLIQUE DE LINDOI CENTRE / B",
              "voters": 92
            },
            {
              "station": "CENTRE DE SANTE INTEGRE DE LINDOI / A",
              "voters": 170
            }
          ],
          "LINDOI SIKOA": [
            {
              "station": "ECOLE PUBLIQUE DE LINDOI / A",
              "voters": 136
            }
          ],
          "LINDOI SILVEGUE": [
            {
              "station": "ECOLE PUBLIQUE DE LINDOI / B",
              "voters": 89
            },
            {
              "station": "CES DE LINDOI / A",
              "voters": 187
            }
          ],
          "LOLA I": [
            {
              "station": "ECOLE PUBLIQUE DE LOLA / A",
              "voters": 132
            }
          ],
          "LOLA II": [
            {
              "station": "CASE CHAPELLE LOG BITJONG / A",
              "voters": 48
            }
          ],
          "MUNGWATE": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE MUNGWATE",
              "voters": 78
            }
          ],
          "NKONG-NKENI CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE NKONG-NKENI / A",
              "voters": 209
            },
            {
              "station": "ECOLE PUBLIQUE DE NKONG-NKENI / B",
              "voters": 75
            }
          ],
          "NKONG-NKENI MAGBE": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE MAGBE / A",
              "voters": 103
            }
          ],
          "NKONG-NKENI SEHA": [
            {
              "station": "HANGAR DU CARR. MARCHE DE SEHA / A",
              "voters": 85
            }
          ],
          "NKONG-NKENI TOMEL": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE TOMEL / A",
              "voters": 102
            }
          ],
          "NDONGO NGWATE": [
            {
              "station": "CHAPELLE EPC DE NGUIGASSAL BONDJOCK / A",
              "voters": 60
            }
          ]
        },
        "BOT-MAKAK": {
          "BISSOMBE": [
            {
              "station": "ECOLE PUBLIQUE DE BISSOMBE / A",
              "voters": 79
            },
            {
              "station": "ECOLE MATERNELLE DE BISSOMBE / A",
              "voters": 138
            }
          ],
          "BOBOG I": [
            {
              "station": "ECOLE PUBLIQUE DE BOBOG I / A",
              "voters": 302
            }
          ],
          "BOBOG II": [
            {
              "station": "ECOLE PUBLIQUE DE BOBOG II / A",
              "voters": 126
            }
          ],
          "CARREFOUR NGUEBA": [
            {
              "station": "CASE CHAPELLE DU CARREFOUR NGUEBA /",
              "voters": 58
            }
          ],
          "BOT-MAKAK-CENTRE": [
            {
              "station": "FOYER PROTESTANT EPC DE BOT-MAKAK / A",
              "voters": 341
            },
            {
              "station": "FOYER PROTESTANT EPC DE BOT-MAKAK / B",
              "voters": 219
            },
            {
              "station": "LYCEE DE BOT-MAKAK / B",
              "voters": 191
            },
            {
              "station": "ECOLE PUBLIQUE DE MABOBOL / A",
              "voters": 107
            },
            {
              "station": "A ECOLE PUBLIQUE DE MINSE / A",
              "voters": 240
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOK-LOUM / A",
              "voters": 85
            },
            {
              "station": "ECOLE PUBLIQUE DE BOT -MAKAK / A",
              "voters": 474
            },
            {
              "station": "ECOLE PUBLIQUE DE BOT MAKAK / A",
              "voters": 118
            }
          ],
          "MANOYOI": [
            {
              "station": "FOYER MISSION CATHOLIQUE DE BOT-",
              "voters": 246
            }
          ],
          "MINTABA": [
            {
              "station": "MAKAK / A LYCEE DE BOT-MAKAK / A",
              "voters": 309
            },
            {
              "station": "ECOLE PUBLIQUE DE MINTABA / A",
              "voters": 98
            },
            {
              "station": "CASE CHAPELLE MINTABA / A",
              "voters": 143
            }
          ],
          "EKAYA": [
            {
              "station": "CASE CHAPELLE DE EKAYA / A",
              "voters": 73
            }
          ],
          "EKONGOMBE-NORD": [
            {
              "station": "ECOLE PUBLIQUE DEKONGOMBE NORD / A",
              "voters": 298
            },
            {
              "station": "ECOLE PUBLIQUE DEKONGOMBE NORD / A",
              "voters": 91
            },
            {
              "station": "HANGAR - CARREFOUR SONG-MBEN / A",
              "voters": 33
            }
          ],
          "EKONGOMBE-SUD": [
            {
              "station": "ECOLE PUBLIQUE DEKONGOMBE SUD / A",
              "voters": 192
            },
            {
              "station": "ECOLE PUBLIQUE DE HEGBA / A",
              "voters": 156
            }
          ],
          "EKUM": [
            {
              "station": "ECOLE PUBLIQUE DEKORUM / A",
              "voters": 151
            },
            {
              "station": "ECOLE PUBLIQUE DE MANGUOYOI / A",
              "voters": 253
            }
          ],
          "HEGBA": [
            {
              "station": "CASE SANTE DE HEGBA / A",
              "voters": 108
            },
            {
              "station": "ECOLE PUBLIQUE DE MANDJACK / A",
              "voters": 79
            }
          ],
          "HENGUENGUE": [
            {
              "station": "CASE CHAPELLE DE HENGUENGUE / A",
              "voters": 49
            }
          ],
          "KOMBE": [
            {
              "station": "ECOLE PUBLIQUE DE KOMBE / A",
              "voters": 172
            }
          ],
          "LELEP I": [
            {
              "station": "ESPLANADE DE LA CHEFFERIE / A",
              "voters": 66
            }
          ],
          "LELEP II": [
            {
              "station": "CASE CHAPELLE DE LELEP II / A",
              "voters": 56
            }
          ],
          "LIBONG": [
            {
              "station": "ECOLE PUBLIQUE DE LIBONG / A",
              "voters": 64
            }
          ],
          "MAKING": [
            {
              "station": "ECOLE PUBLIQUE DE MAKING / A",
              "voters": 50
            }
          ],
          "MAL GOUNG": [
            {
              "station": "CASE CHAPELLE DE BONGA CARREFOUR / A",
              "voters": 41
            }
          ],
          "MANDOI": [
            {
              "station": "CASE CHAPELLE DE MANDJOCK / A",
              "voters": 94
            },
            {
              "station": "ESPLANADE DE LA CHEFFERIE DE MANDOI / A",
              "voters": 83
            }
          ],
          "MANGUENDA HEGBA": [
            {
              "station": "ECOLE PUBLIQUE DE MANGUEDA I / A",
              "voters": 55
            },
            {
              "station": "CASE CHAPELLE DE MANGUEDA HEGBA / A",
              "voters": 204
            }
          ],
          "MBANGUE KAK CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE MBANDA / A",
              "voters": 126
            }
          ],
          "MBANGUE I": [
            {
              "station": "ECOLE PUBLIQUE DE MBRANGUE I / A",
              "voters": 43
            }
          ],
          "MBEMBE-KIKOT": [
            {
              "station": "C.E.S DE MBEMBE-KOT / A",
              "voters": 139
            }
          ],
          "MBONGA": [
            {
              "station": "CASE CHAPELLE DE MBONGA CARREFOUR /",
              "voters": 53
            }
          ],
          "MINSE": [
            {
              "station": "ECOLE PUBLIQUE DE MINSONGUE / A",
              "voters": 99
            }
          ],
          "NGOG-TOS": [
            {
              "station": "ESPLANADE DOMICILE DE FEU NLOM GOI HER / A",
              "voters": 55
            }
          ],
          "MBERE-KIKOT": [
            {
              "station": "ECOLE PUBLIQUE DE NGOO-MBA / A",
              "voters": 91
            }
          ],
          "NGOG-MAPA": [
            {
              "station": "CASE CHAPELLE DE NGOMAGWANDA / A",
              "voters": 48
            },
            {
              "station": "CASE CHAPELLE DE NJOCK-BANE / A",
              "voters": 84
            }
          ],
          "SI-LIKENG": [
            {
              "station": "CASE CHAPELLE DE NJOCK-BANE / A",
              "voters": 84
            }
          ],
          "NKOCK LOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUMISE-NORD / A",
              "voters": 158
            }
          ],
          "NTOULENG": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NTOULENG / A",
              "voters": 202
            }
          ],
          "PAN-MAKAK": [
            {
              "station": "ECOLE PUBLIQUE DE PAN-MAKAK / A",
              "voters": 119
            }
          ],
          "SEPE": [
            {
              "station": "C.E.S DE PAN-MAKAK / A",
              "voters": 55
            }
          ],
          "PAN-SO-MAKONDO": [
            {
              "station": "ECOLE PUBLIQUE DE SEPPE / A",
              "voters": 201
            }
          ],
          "SI-PEENG": [
            {
              "station": "CETIC DE BOT-MAKAK / A E DE EANG / A",
              "voters": 74
            }
          ],
          "SI-MAYAI": [
            {
              "station": "ESPLANAGE DU DOMICILE SHMAYAI / A",
              "voters": 120
            }
          ],
          "SL MAYA II": [
            {
              "station": "ECOLE PUBLIQUE DE SHMAYAI II / A",
              "voters": 164
            }
          ],
          "TOMBI": [
            {
              "station": "ECOLE PUBLIQUE DE TOMBI / A",
              "voters": 84
            }
          ],
          "PAN-KOMBE": [
            {
              "station": "CENTRE DE SANTE DE PAN KOMBE / A",
              "voters": 112
            }
          ],
          "MANGUENDA II": [
            {
              "station": "ECOLE PUBLIQUE DE MANGUENDA II / A",
              "voters": 118
            }
          ]
        },
        "DIBANG": {
          "BAMO": [
            {
              "station": "ECOLE PUBLIQUE DE BAMO / A",
              "voters": 129
            }
          ],
          "BEDA": [
            {
              "station": "ECOLE PUBLIQUE DE BEDA / A",
              "voters": 69
            }
          ],
          "BIBAYA": [
            {
              "station": "ESPLADE CHEFFERIE DE BIBAYA / A",
              "voters": 40
            }
          ],
          "BOGA": [
            {
              "station": "ECOLE PUBLIQUE DE BOGA / A",
              "voters": 169
            },
            {
              "station": "CHAPELLE EPC DE S INITIM / A / A",
              "voters": 39
            }
          ],
          "BOM B": [
            {
              "station": "ECOLE PUBLIQUE DE BOM B / A",
              "voters": 129
            }
          ],
          "DIBANG": [
            {
              "station": "ECOLE PUBLIQUE DE DIBANG / A",
              "voters": 203
            },
            {
              "station": "LYCEE DE DIBANG / A",
              "voters": 153
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE DIBANG / A",
              "voters": 81
            }
          ],
          "DIKONOP I": [
            {
              "station": "ECOLE PUBLIQUE DE DIKONOP I / A",
              "voters": 104
            },
            {
              "station": "CASE COMMUNAUTAIRE DE SONG MAWEM / A",
              "voters": 56
            }
          ],
          "DIKONOP II": [
            {
              "station": "ECOLE PUBLIQUE DE DINGOMBI / A",
              "voters": 157
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE KOMBE / A / A",
              "voters": 44
            }
          ],
          "HAM": [
            {
              "station": "CENTRE DE SANTE COMMUNAUTAIRE DE",
              "voters": 51
            }
          ],
          "LISSEGUE": [
            {
              "station": "ECOLE PUBLIQUE DE LISSEGUE / A",
              "voters": 67
            }
          ],
          "MABOYE": [
            {
              "station": "ECOLE PUBLIQUE DE MABOYE / A",
              "voters": 152
            },
            {
              "station": "CHAPELLE EPC MABOYE DIKOA / A",
              "voters": 37
            }
          ],
          "MAHOLE": [
            {
              "station": "ECOLE PUBLIQUE DE MAHOLE / A",
              "voters": 91
            }
          ],
          "MATOL": [
            {
              "station": "CHAPELLE EPC DE MATOL ROUTE / A",
              "voters": 78
            }
          ],
          "MBANDA": [
            {
              "station": "CHAPELLE EPC BOT NEM / A",
              "voters": 53
            }
          ],
          "MOM DIBANG": [
            {
              "station": "ECOLE PUBLIQUE BOT DE MOM DIBANG /",
              "voters": 90
            },
            {
              "station": "CENTRE PROM. SANITAIRE DE MOM DIBANG /",
              "voters": 141
            },
            {
              "station": "ECOLE PUBLIQUE BOT DE MOM DIBANG /",
              "voters": 191
            },
            {
              "station": "CENTRE PROM. SANITAIRE DE MOM DIBANG /",
              "voters": 141
            }
          ],
          "NDONGO": [
            {
              "station": "ECOLE PUBLIQUE DE NDONGO PILOTE / A",
              "voters": 51
            },
            {
              "station": "CHAPELLE EPC DE LIKA / A",
              "voters": 31
            }
          ],
          "NDOUPE": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUPE / A",
              "voters": 95
            },
            {
              "station": "CHAPELLE CATHOLIQUE LOG DJON / A",
              "voters": 46
            },
            {
              "station": "CHAPELLE CATHOLIQUE LOG DJON / A",
              "voters": 377
            }
          ],
          "NDOUPE.LOM": [
            {
              "station": "CHAPELLE EPC DE NDOUPE / A",
              "voters": 104
            }
          ],
          "NGODI-COM": [
            {
              "station": "ECOLE CATHOLIQUE DEO GRACIAS / A",
              "voters": 229
            }
          ],
          "NGODI GRACIAS": [
            {
              "station": "ECOLE PUBLIQUE DEO GRACIAS / A",
              "voters": 170
            }
          ],
          "PES-LIPAN": [
            {
              "station": "CHAPELLE DES CHRÉTIENS NGONG-NGWAS / A",
              "voters": 179
            },
            {
              "station": "CHAPELLE EPC PESLIPAN / A",
              "voters": 377
            }
          ],
          "SILJAYE": [
            {
              "station": "HANGAR CHEFFERIE / A DE PES-LIPAN / A",
              "voters": 89
            }
          ],
          "SOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE SOMBO / A",
              "voters": 319
            },
            {
              "station": "ECOLE PUBLIQUE DE SOMBO / B",
              "voters": 85
            },
            {
              "station": "CHAPELLE EPC DE SOMBO CHEFFERIE / A",
              "voters": 132
            },
            {
              "station": "ECOLE PUBLIQUE DE SOMBO / C",
              "voters": 73
            }
          ],
          "SONG-NLEND": [
            {
              "station": "ECOLE PUBLIQUE CATH. SONG-NLEND MAN GUENDA / A",
              "voters": 93
            }
          ],
          "SONG NLEND": [
            {
              "station": "ECOLE PUBLIQUE DE SONG NLEND / A",
              "voters": 93
            }
          ],
          "TAMALONG": [
            {
              "station": "ECOLE PUBLIQUE DE TAMALONG / A",
              "voters": 88
            }
          ],
          "MAKEK": [
            {
              "station": "CHAPELLE EPC DE MAKEK / A",
              "voters": 189
            }
          ],
          "MANJAP": [
            {
              "station": "ECOLE PUBLIQUE DE MAKEK-MANJAP / A",
              "voters": 78
            }
          ]
        },
        "ESEKA": {
          "ADNA": [
            {
              "station": "ESPLANADE DU NOUVEAU MARCHE / A",
              "voters": 310
            }
          ],
          "TETEM": [
            {
              "station": "ESPLANADE DU NOUVEAU MARCHE / B",
              "voters": 177
            },
            {
              "station": "ECOLE PUBLIQUE ANNEXE GROUPE II / A",
              "voters": 289
            },
            {
              "station": "HANGAR PETIT MARCHE BOONDJOCK / A",
              "voters": 154
            },
            {
              "station": "HANGAR PETIT MARCHE TETEM / A",
              "voters": 367
            },
            {
              "station": "ESPLANADE CHEFFERIE TETEM / A",
              "voters": 199
            }
          ],
          "AVIATION": [
            {
              "station": "ECOLE PUBLIQUE ANNEXE GROUPE II / B",
              "voters": 128
            },
            {
              "station": "B ECOLE PUBLIQUE GROUPE II / A",
              "voters": 261
            }
          ],
          "BITOUTOUCK": [
            {
              "station": "ESPLANADE CHEFFERIE BITOUTOUCK / A",
              "voters": 129
            }
          ],
          "BOGSO": [
            {
              "station": "ECOLE PUBLIQUE DE BOGSO / A",
              "voters": 204
            },
            {
              "station": "ECOLE PUBLIQUE DE BOGSO / B",
              "voters": 202
            }
          ],
          "BONDE": [
            {
              "station": "CHEFFERIE BONDE / A",
              "voters": 77
            }
          ],
          "BRIOULETERIE": [
            {
              "station": "DELEGATION DEPARTEMENTALE MINESEC /",
              "voters": 257
            }
          ],
          "ESEKA II": [
            {
              "station": "A DELEGATION DEPARTEMENTALE MINESEC /",
              "voters": 126
            },
            {
              "station": "LYCEE TECHNIQUE DESEKA / A",
              "voters": 299
            },
            {
              "station": "LYCEE TECHNIQUE DESEKA / B",
              "voters": 248
            },
            {
              "station": "LYCEE TECHNIQUE DESEKA / C",
              "voters": 301
            }
          ],
          "CAMP FONCTIONNAIRES": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II B / A",
              "voters": 252
            },
            {
              "station": "ECOLE PUBLIQUE GROUPE II B / B",
              "voters": 149
            },
            {
              "station": "SALLE D'AUDIENCE DU PALAIS DE JUSTICE /",
              "voters": 275
            },
            {
              "station": "A SALLE D'AUDIENCE DU PALAIS DE JUSTICE /",
              "voters": 200
            },
            {
              "station": "SALLE D'AUDIENCE DU PALAIS DE JUSTICE /",
              "voters": 252
            }
          ],
          "CAMP REGIE": [
            {
              "station": "ANCIENNE SOUS-PREF DESEKA / A",
              "voters": 161
            },
            {
              "station": "DEPOT CAMRAIL / A",
              "voters": 163
            }
          ],
          "CERCLE MUNICIPAL": [
            {
              "station": "ECOLE MAT DU CENTRE / A",
              "voters": 234
            },
            {
              "station": "ECOLE MAT DU CENTRE / B",
              "voters": 184
            },
            {
              "station": "ECOLE MAT DU CENTRE / C",
              "voters": 169
            }
          ],
          "DJOGOB": [
            {
              "station": "ECOLE DES SOURDS MUETS / A",
              "voters": 195
            },
            {
              "station": "ECOLE PUBLIQUE ESEKA VILLAGE / A",
              "voters": 153
            }
          ],
          "ESEKA VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE ESEKA VILLAGE / A",
              "voters": 162
            }
          ],
          "LIRADO": [
            {
              "station": "BUREAU DEPARTEMENTAL TRAVAUX PUBLICS /",
              "voters": 241
            },
            {
              "station": "BUREAU DEPARTEMENTAL TRAVAUX PUBLICS / A",
              "voters": 241
            }
          ],
          "LIMOG LIHOG": [
            {
              "station": "A ECOLE PUBLIQUE DE LIMOG LIHOG / A",
              "voters": 187
            }
          ],
          "LIPOMBE": [
            {
              "station": "PAROISSE EPC SI LOM / A",
              "voters": 52
            },
            {
              "station": "ECOLE PUBLIQUE LE DIPOMBE II / A",
              "voters": 163
            }
          ],
          "LOG BIKONG": [
            {
              "station": "CHAPELLE EPC LOG BIKONG / A",
              "voters": 301
            },
            {
              "station": "GARE ROUTIERE DE LOLODORE / A",
              "voters": 145
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE CLASSIQUE DESEKA / A",
              "voters": 310
            },
            {
              "station": "ECOLE PUBLIQUE DE MAMOMY / A",
              "voters": 72
            }
          ],
          "MALLA": [
            {
              "station": "CENTRE DEPARTEMENTAL DES IMPOTS / A",
              "voters": 302
            },
            {
              "station": "ESPLANADE CHEFFERIE BONBE II / A",
              "voters": 192
            }
          ],
          "MAMB KELLE": [
            {
              "station": "ECOLE PUBLIQUE DE MAMB KELLE / A",
              "voters": 31
            }
          ],
          "MANGUEJUES": [
            {
              "station": "CENTRE DE SANTE DE MANGUEJUES / A",
              "voters": 87
            }
          ],
          "MAPAN": [
            {
              "station": "ECOLE PUBLIQUE DE MAPAN / A",
              "voters": 248
            }
          ],
          "MINLOH": [
            {
              "station": "ESPLANADE LISSAL / A",
              "voters": 67
            }
          ],
          "MINLONGO": [
            {
              "station": "ESPLANADE CHEFFERIE MINLONGO / A",
              "voters": 68
            }
          ],
          "MINTANYE": [
            {
              "station": "ECOLE PUBLIQUE DE MINTANYE / A",
              "voters": 67
            }
          ],
          "MOUANDA": [
            {
              "station": "CETIC DE MOUANDA / A",
              "voters": 213
            }
          ],
          "N/JOCK": [
            {
              "station": "ESPLANADE CHEFFERIE NGOG TOS / A",
              "voters": 72
            }
          ],
          "NGOG TOS": [
            {
              "station": "ESPLANADE CHEFFERIE NGOG TOS / A",
              "voters": 65
            }
          ],
          "NGUIBASSAL": [
            {
              "station": "ESPLANADE CHEFFERIE NGUIBASSAL II / A",
              "voters": 41
            }
          ],
          "MAKOMOL": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL II / A",
              "voters": 83
            },
            {
              "station": "DELEGATION DEPARTEMENTALE DES",
              "voters": 296
            }
          ],
          "PERMANENCE": [
            {
              "station": "CENTRE DE SANTE URBAN / A",
              "voters": 245
            },
            {
              "station": "CENTRE DE SANTE URBAN / B",
              "voters": 151
            },
            {
              "station": "DELEGATION DEPARTEMENTALE MINADER /",
              "voters": 278
            },
            {
              "station": "DELEGATION DEPARTEMENTALE MINADER /",
              "voters": 117
            },
            {
              "station": "DELEGATION DEPARTEMENTALE MINADER /",
              "voters": 130
            },
            {
              "station": "DELEGATION DEPARTEMENTALE DES SPORTS / B",
              "voters": 151
            }
          ],
          "POUTH KELLE": [
            {
              "station": "ECOLE PUBLIQUE DE POUTH KELLE / A",
              "voters": 377
            }
          ],
          "SNEC": [
            {
              "station": "LYCEE BILINGUE DESEKA / A",
              "voters": 209
            }
          ],
          "SONG BADJECK": [
            {
              "station": "ECOLE PUBLIQUE DE SONG BADJECK / A",
              "voters": 98
            }
          ],
          "SONG BASSONG": [
            {
              "station": "ECOLE PUBLIQUE DE SONG BASSONG / A",
              "voters": 150
            }
          ],
          "SONG BIKUN": [
            {
              "station": "ESPLANADE CHEFFERIE SONG BIKUN / A",
              "voters": 88
            }
          ],
          "SONG HOT": [
            {
              "station": "ECOLE PUBLIQUE DE SONG HOT / A",
              "voters": 44
            }
          ],
          "SONG NDENG": [
            {
              "station": "ECOLE PUBLIQUE DE SONG NDENG / A",
              "voters": 54
            }
          ],
          "SONG NWECK": [
            {
              "station": "ESPLANADE CHEFFERIE SONG NWECK / A",
              "voters": 31
            }
          ],
          "SOUHE": [
            {
              "station": "LIWANG A / ESPL. RESIDENCE FEU UM",
              "voters": 64
            }
          ],
          "BONBE": [
            {
              "station": "ECOLE EPC DESEKA CENTRE / A",
              "voters": 372
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "CHAPELLE CATHOLIQUE DE MAKOMOL / A",
              "voters": 16
            }
          ],
          "MOSQUEE": [
            {
              "station": "SPORTS / A",
              "voters": 151
            }
          ],
          "POMBE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE POMBE I / A",
              "voters": 161
            }
          ]
        },
        "MAKAK": {
          "AVIATION": [
            {
              "station": "LYCEE CLASSIQUE DE MAKAK / A",
              "voters": 189
            },
            {
              "station": "BUREAU DES AFFAIRES SOCIALES DE MAKAK",
              "voters": 100
            }
          ],
          "BAKOUKOUE": [
            {
              "station": "FOYER CULTUREL BABENG / A",
              "voters": 81
            },
            {
              "station": "ECOLE PUBLIQUE BAKOUKOUE / A",
              "voters": 173
            },
            {
              "station": "CHAPELLE EPC DE BAKOUKOUE / A",
              "voters": 116
            }
          ],
          "BAT-BAT": [
            {
              "station": "ASSION VRALE EGUSE DE DIEU DE BAT-BAT",
              "voters": 318
            },
            {
              "station": "A MISSION VRALE EGUSE DE DIEU DE BAT-BAT",
              "voters": 161
            }
          ],
          "BEH YAMB-MAKAK": [
            {
              "station": "/ B ESPLANADE DE LA CASE CHAMBORG / A",
              "voters": 95
            }
          ],
          "BIKOUKOUND": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOUKOUND / A",
              "voters": 180
            }
          ],
          "BITOUTOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE BITOUTOUCK / A",
              "voters": 120
            }
          ],
          "BOG LITOA": [
            {
              "station": "MISSION EGLISE BAPTISTE DE BOG LITOA / A",
              "voters": 386
            }
          ],
          "BOUMKOK": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMKOK / A",
              "voters": 155
            }
          ],
          "HIKAODJOM": [
            {
              "station": "ECOLE PUBLIQUE DE HIKAODJOM / A",
              "voters": 117
            }
          ],
          "RESIDENCE-MAKAK": [
            {
              "station": "CASE CHAPELLE DE SONG BISSE / A",
              "voters": 58
            },
            {
              "station": "RESIDENCE / A",
              "voters": 270
            }
          ],
          "KAYA": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE DE KAYA / A",
              "voters": 213
            },
            {
              "station": "ECOLE PUBLIQUE DE KOUKUM / A",
              "voters": 62
            }
          ],
          "LEPIBONG": [
            {
              "station": "ECOLE PUBLIQUE DE LEPIBONG / A",
              "voters": 145
            },
            {
              "station": "CASE PUB DE LEPIBONG / A",
              "voters": 122
            }
          ],
          "LEP MAMB": [
            {
              "station": "CHAPELLE EPC DE LEPIBONG / A",
              "voters": 44
            }
          ],
          "LIBAMBA": [
            {
              "station": "FOYER CHAPELLE DE LIBAMBA / A",
              "voters": 82
            },
            {
              "station": "COLLEGE EVANGELIQUE DE LIBAMBA / A",
              "voters": 114
            },
            {
              "station": "ECOLE PUBLIQUE DE LIBAMBA / A",
              "voters": 78
            }
          ],
          "LIKONGUE": [
            {
              "station": "ECOLE PUBLIQUE DE LIKONGUE / A",
              "voters": 66
            }
          ],
          "MAYOS": [
            {
              "station": "HANGAR DE LA CHEFFERIE DE LOM / A",
              "voters": 55
            }
          ],
          "LOM": [
            {
              "station": "ECOLE CATH DE ST JEAN BAPTISTE DE MAKAK /",
              "voters": 124
            }
          ],
          "MAKAK I-CENTRE": [
            {
              "station": "A ECOLE PUBLIQUE DE MABOUN / A",
              "voters": 42
            },
            {
              "station": "A ECOLE PUB. MAKAK II / A",
              "voters": 158
            },
            {
              "station": "LYCEE TECHNIQUE DE MAKAK / A",
              "voters": 334
            }
          ],
          "RESIDENCE": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAK / A",
              "voters": 228
            }
          ],
          "MAKAK-CENTRE": [
            {
              "station": "CERBC MUNICIPAL DE MAKAK / A",
              "voters": 262
            },
            {
              "station": "ECOLE MAT. PUBLIQUE DE MAKAK CENTRE /",
              "voters": 128
            }
          ],
          "MAKAK II": [
            {
              "station": "CASE COMMUNAUTAIRE DE MAMBANDO / A",
              "voters": 107
            }
          ],
          "MAMBANDO": [
            {
              "station": "CASE CHAPELLE DE MANDOGA KABO / A",
              "voters": 36
            }
          ],
          "MANDOGA KABO": [
            {
              "station": "ECOLE PUBLIQUE DE MAYOS / A",
              "voters": 18
            }
          ],
          "MBAHGUE": [
            {
              "station": "CHAPELLE EPC CARREFOUR TONYE",
              "voters": 125
            },
            {
              "station": "ECOLE PUBLIQUE DE MBAHGUE / A",
              "voters": 89
            }
          ],
          "MBEMNDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MBEMNDJOCK / A",
              "voters": 39
            },
            {
              "station": "ECOLE PUBLIQUE DE MBEMNDJOCK / A",
              "voters": 94
            },
            {
              "station": "CHAPELLE MINYOOLA DE MBEMNDJOCK / A",
              "voters": 43
            }
          ],
          "MBENG": [
            {
              "station": "ECOLE PUBLIQUE DE MBENG / A",
              "voters": 129
            },
            {
              "station": "ECOLE MISSION CATHOLIQUE DE MBENG / A",
              "voters": 257
            },
            {
              "station": "CASE CHAPELLE DE SONG NYOBE-LOURDES",
              "voters": 63
            }
          ],
          "MBOG LOM": [
            {
              "station": "ECOLE PUBLIQUE DE MBOG LOM / A",
              "voters": 62
            }
          ],
          "MALOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE MINKA / A",
              "voters": 358
            }
          ],
          "MINKA": [
            {
              "station": "ECOLE CATHOLIQUE DE MINKA / A",
              "voters": 198
            },
            {
              "station": "ECOLE PROTESTANT EPC DE MOM GARE / A",
              "voters": 118
            }
          ],
          "MINKOT MBEM": [
            {
              "station": "ECOLE PUBLIQUE DE MINKOT MBEM / A",
              "voters": 186
            }
          ],
          "MOM-GARE": [
            {
              "station": "CASE COMMUNAUTAIRE DE MOM GARE / A",
              "voters": 378
            }
          ],
          "MOM II": [
            {
              "station": "ECOLE PUBLIQUE DE NDJANGTIBDA / A",
              "voters": 155
            }
          ],
          "NDJANGTIBDA": [
            {
              "station": "ECOLE PUBLIQUE DE NDJANGTIBDA / A",
              "voters": 176
            }
          ],
          "NDJOMABAS I": [
            {
              "station": "CASE A PALABRE DE LA CHEF. DE NGOMBAS",
              "voters": 65
            }
          ],
          "NGOMBAS": [
            {
              "station": "CASE CHAPELLE DE LA CHEF. DE NGOMBAS",
              "voters": 99
            }
          ],
          "NGOMBAS II": [
            {
              "station": "II / A ECOLE PUBLIQUE DE NGONG / A",
              "voters": 31
            }
          ],
          "NGONG": [
            {
              "station": "CASE CHAPELLE POSTE LIBAM / A",
              "voters": 48
            }
          ],
          "NGOUNGOUM I": [
            {
              "station": "ESPL. CASE FAMILIALE ABEE ROBERT NDEBI /",
              "voters": 55
            },
            {
              "station": "A CENTRE D'ETAT CIVIL DE NGOUNGOUM II / A",
              "voters": 112
            }
          ],
          "NGOUNGOUM II": [
            {
              "station": "CASE A PALABRE DE LA CHEF. DE",
              "voters": 104
            }
          ],
          "NGUIMAKONG": [
            {
              "station": "NGUIMAKONG ECOLE PUBLIQUE DE NGWATE / A",
              "voters": 162
            }
          ],
          "NGWATE": [
            {
              "station": "ECOLE PUBLIQUE DE NGWATE / A",
              "voters": 32
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOK HOS / A",
              "voters": 93
            },
            {
              "station": "ESPL. DE LA CASE FAMILIALE MOMOMOGUI /",
              "voters": 33
            }
          ],
          "NKONGUI": [
            {
              "station": "A ECOLE PUBLIQUE GROUPE I DE NKONGUI / A",
              "voters": 311
            },
            {
              "station": "ECOLE PUB. GROUPE I DU OTIER",
              "voters": 270
            }
          ],
          "SEH YAMB-MAKAK": [
            {
              "station": "ECOLE PUBLIQUE DE SEPP / A",
              "voters": 169
            }
          ],
          "SEPP": [
            {
              "station": "ECOLE PUBLIQUE DE SONG-BAYA / A",
              "voters": 34
            }
          ],
          "SONG-BAYA": [
            {
              "station": "CASE A PALABRE CHEFFERIE DE SONG NTAP",
              "voters": 50
            }
          ],
          "SONG NTAP": [
            {
              "station": "/ A",
              "voters": 50
            }
          ]
        },
        "MATOMB": {
          "BINGONGOG": [
            {
              "station": "ECOLE PUBLIQUE DE BINGONGOG / A",
              "voters": 148
            }
          ],
          "BOMTOL": [
            {
              "station": "CHAPELLE BOMTOL / A",
              "voters": 81
            }
          ],
          "BOUMBONE": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMBONE / A",
              "voters": 165
            }
          ],
          "KOMBENG": [
            {
              "station": "ECOLE PUBLIQUE DE KOMBENG / A",
              "voters": 283
            }
          ],
          "LAMAL POUgue": [
            {
              "station": "ECOLE PUBLIQUE DE LAMAL POUgue / A",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DE LAMAL POUgue / B",
              "voters": 98
            }
          ],
          "LEP-MBE": [
            {
              "station": "CHAPELLE DE LEP-MBE / A",
              "voters": 76
            }
          ],
          "LISSE": [
            {
              "station": "ECOLE PUBLIQUE DE LISSE GROUPE / A",
              "voters": 82
            },
            {
              "station": "ECOLE PUBLIQUE DE LISSE / A",
              "voters": 131
            },
            {
              "station": "CASE COMMUNAUTAIRE DE LISSE MBANDJE /",
              "voters": 19
            }
          ],
          "MALMINANG": [
            {
              "station": "ECOLE PUBLIQUE DE MALINANG / A",
              "voters": 251
            }
          ],
          "MAMBINE": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBINE / A",
              "voters": 192
            }
          ],
          "MANDOGA": [
            {
              "station": "MANDOGA II - PLACE DU MARCHE / A",
              "voters": 108
            }
          ],
          "MANDOGA MAYOS": [
            {
              "station": "ECOLE PUBLIQUE DE MANDOGA MAYOS / A",
              "voters": 90
            }
          ],
          "MANDOUMBA": [
            {
              "station": "ECOLE PUBLIQUE DE MANDOUMBA / A",
              "voters": 212
            },
            {
              "station": "CASE COMMUNAUTAIRE DE MANDOUMBA / A",
              "voters": 234
            }
          ],
          "MANGUEN 1": [
            {
              "station": "MAISON I / A LA FEMME DE MANGUEN II / A",
              "voters": 276
            },
            {
              "station": "FOYER CATHOLIQUE SAINT MARTIN / A",
              "voters": 159
            },
            {
              "station": "ECOLE MATERNELLE DE MANGDOU I / A",
              "voters": 35
            }
          ],
          "MANGUEN 2": [
            {
              "station": "MAISON DE LA FEMME DE MANGUEN II / A",
              "voters": 195
            }
          ],
          "MAYAI": [
            {
              "station": "ECOLE PUBLIQUE DE MAYAI / A",
              "voters": 225
            }
          ],
          "MATOMB - ROUTE (OU VILLE)": [
            {
              "station": "FOYER PAROISSE EPC DE MATOMB / A",
              "voters": 316
            },
            {
              "station": "SALLE DES FETES MARIE DE MATOMB / A",
              "voters": 335
            },
            {
              "station": "SALLE DES FETES MARIE DE MATOMB / B",
              "voters": 336
            },
            {
              "station": "ECOLE CATHOLIQUE MARIE-REINE DE",
              "voters": 275
            },
            {
              "station": "NKGOTOM / B",
              "voters": 118
            }
          ],
          "MATOMB - VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE DE MATOMB -VILLAGE / A",
              "voters": 71
            }
          ],
          "MAWEL": [
            {
              "station": "CHAPELLE CATHOLIQUE DE MAWEL / A",
              "voters": 62
            },
            {
              "station": "ECOLE PUBLIQUE DE MAYEBEG / A",
              "voters": 164
            }
          ],
          "MAYEBEG": [
            {
              "station": "ECOLE PUBLIQUE DE MAYEBEG / A",
              "voters": 157
            }
          ],
          "MBEMNDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MBEMNDJOCK / A",
              "voters": 125
            }
          ],
          "NDIG -NYEMB": [
            {
              "station": "ECOLE PUBLIQUE DE NDIG -NYEMB / A",
              "voters": 81
            }
          ],
          "NGOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNG / A",
              "voters": 259
            }
          ],
          "NKENGLIKOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NKENGLIKOCK / A",
              "voters": 281
            },
            {
              "station": "ECOLE PUBLIQUE DE NKENGLIKOCK / A",
              "voters": 281
            }
          ],
          "NKHOM": [
            {
              "station": "ECOLE PUBLIQUE DE NKHOM / A",
              "voters": 113
            }
          ],
          "NKOGTEM": [
            {
              "station": "CHAPELLE DE NKOGTEM / A",
              "voters": 109
            },
            {
              "station": "CHAPELLE DE NKOGTEM / A",
              "voters": 109
            }
          ],
          "NKONGTOCK": [
            {
              "station": "CASE COMMUNAUTAIRE DE NKONGTOCK / A",
              "voters": 250
            },
            {
              "station": "CASE COMMUNAUTAIRE DE NKONGTOCK / A",
              "voters": 250
            }
          ],
          "PAN PAN": [
            {
              "station": "ECOLE PUBLIQUE DE PAN PAN / A",
              "voters": 94
            },
            {
              "station": "ECOLE PUBLIQUE DE PAN PAN / A",
              "voters": 94
            }
          ],
          "MANGDODA": [
            {
              "station": "ECOLE MATERNELLE DE MANGDOU I / A",
              "voters": 50
            }
          ]
        },
        "MESSONDO": {
          "NDOGBESSOL": [
            {
              "station": "CENTRE DE SANTE DE NDOGBESSOL / A",
              "voters": 250
            },
            {
              "station": "HANGAR PRES DU FORAGE DE LINGUEN / A",
              "voters": 72
            }
          ],
          "NDONG LIEN": [
            {
              "station": "ECOLE PUBLIQUE DE NDONG LIEN / A",
              "voters": 137
            }
          ],
          "NEM KONG": [
            {
              "station": "SALLE DE LA CAMPOST DE MESSONDO / A",
              "voters": 172
            }
          ],
          "NGONGOS": [
            {
              "station": "ECOLE PUBLIQUE DE NGONGOS / A",
              "voters": 143
            }
          ],
          "NGUIBASSAL KMOL": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 174
            }
          ],
          "NULBA": [
            {
              "station": "ECOLE PUBLIQUE DE NTOGO / A",
              "voters": 38
            }
          ],
          "NTOGO": [
            {
              "station": "ECOLE PUBLIQUE DE MESSONDO PLATEAU /",
              "voters": 118
            }
          ],
          "PLATEAU": [
            {
              "station": "A CETIC DE MESSONDO / A",
              "voters": 146
            }
          ],
          "POMLEP AVIATION": [
            {
              "station": "ECOLE PUBLIQUE DE SO HANGA / A",
              "voters": 194
            }
          ],
          "SO HANGA": [
            {
              "station": "ECOLE PUBLIQUE DE SO HANGA / A",
              "voters": 73
            }
          ],
          "SO KELLA": [
            {
              "station": "CHAPELLE CATHOLIQUE DE SO DIBANGA",
              "voters": 42
            }
          ],
          "SODIBANGA VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE DE SODIBANGA CENTRE /",
              "voters": 135
            }
          ],
          "SODIBANGA CENTRE": [
            {
              "station": "A ECOLE PUBLIQUE DE SODIBANGA CENTRE /",
              "voters": 131
            }
          ],
          "SOMABOYE": [
            {
              "station": "ECOLE PUBLIQUE DE SOMABOYE / A",
              "voters": 20
            }
          ],
          "SONG LIPEM": [
            {
              "station": "FOYER COMMUNAUTAIRE DE SONG LIPEM / A",
              "voters": 56
            }
          ],
          "SONG MANDENG": [
            {
              "station": "ECOLE PUBLIQUE DE SONG MANDENG / A",
              "voters": 44
            },
            {
              "station": "CASE ELLE CATHOLIQUE DE TOMEL / A",
              "voters": 83
            },
            {
              "station": "ESPLANADE DE LA CHEFFERIE DE",
              "voters": 42
            }
          ],
          "SONG MBONG": [
            {
              "station": "CASE DE LA FEMME DE SONG MBONG / A",
              "voters": 155
            },
            {
              "station": "ESPLANADE ANCIENNE CHEF. DE SONG",
              "voters": 59
            }
          ],
          "SONG NGOMBI": [
            {
              "station": "MBONG / A CHAPELLE E P C DE SONG NGOMBI / A",
              "voters": 29
            }
          ],
          "SONG NTUME": [
            {
              "station": "CENTRE DE SANTE DE SONG NTUME / A",
              "voters": 38
            },
            {
              "station": "CHAPELLE CATHOLIQUE DE MANYOI / A",
              "voters": 21
            }
          ],
          "SOUCK": [
            {
              "station": "LYCEE DE MESSONDO / A",
              "voters": 109
            },
            {
              "station": "HANGAR LIGWANGA FORAGE / A",
              "voters": 44
            }
          ],
          "TAYAP": [
            {
              "station": "ECOLE PUBLIQUE DE SONG DIBONG / A",
              "voters": 12
            }
          ],
          "TIMALOM": [
            {
              "station": "ECOLE PUBLIQUE DE TIMALOM / A",
              "voters": 85
            }
          ],
          "NGUIBASSAL KMOL.": [
            {
              "station": "NGUIBASSAL KMOL. A ECOLE PRIVEE LES SIONS / A",
              "voters": 51
            }
          ],
          "LIBANGA MOGUI": [
            {
              "station": "ECOLE PRIVEE LES SIONS / A",
              "voters": 151
            },
            {
              "station": "ECOLE PRIVEE LES SIONS / A",
              "voters": 151
            },
            {
              "station": "ECOLE PRIVEE LES SIONS / A",
              "voters": 151
            }
          ]
        },
        "NGOG-MAPUBI": {
          "BIDODI": [
            {
              "station": "ECOLE PUBLIQUE DE BIDODI / A",
              "voters": 115
            }
          ],
          "BOUMNYEBEL LIKANDA": [
            {
              "station": "E CATH. NOTRE DAME MISER. BOUMNYEBEL",
              "voters": 328
            },
            {
              "station": "E CATH. NOTRE DAME MISER. BOUMNYEBEL",
              "voters": 317
            },
            {
              "station": "C CATH. NOTRE DAME MISER. BOUMNYEBEL",
              "voters": 154
            },
            {
              "station": "TELECENTRE COM. POLYVALEN DE",
              "voters": 238
            },
            {
              "station": "BOUMNYEBEL / A TELECENTRE COM. POLYVALEN DE",
              "voters": 281
            },
            {
              "station": "BOUMNYEBEL / B BOUMNYEBEL C / POLYVALEN DE",
              "voters": 355
            }
          ],
          "BOUMNYEBEL VILLAGE": [
            {
              "station": "BOUMNYEBEL / C AMPHLET EPC DE BOUMNYEBEL VILLAGE /",
              "voters": 186
            }
          ],
          "LIBELLINGOI-NORD": [
            {
              "station": "ECOLE PUBLIQUE DE LIBELLINGOI / A",
              "voters": 191
            }
          ],
          "LIBELLINGOI-SUD": [
            {
              "station": "ECOLE PUBLIQUE DE LIBELLINGOI-SUD / A",
              "voters": 168
            }
          ],
          "LIMAI": [
            {
              "station": "ECOLE PUBLIQUE DE LIMAI / A",
              "voters": 258
            }
          ],
          "MAKAI": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAI / A",
              "voters": 346
            },
            {
              "station": "LYCEE BILINGUE DE MAKAI / A",
              "voters": 297
            },
            {
              "station": "LYCEE BILINGUE DE MAKAI / B",
              "voters": 117
            }
          ],
          "MAMB": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAI / A",
              "voters": 93
            },
            {
              "station": "C.E.S DE MAMB / A",
              "voters": 189
            }
          ],
          "MBANGA": [
            {
              "station": "CHAPPELLE CATHOLIQUE DE MBANGA / A",
              "voters": 67
            }
          ],
          "MODE": [
            {
              "station": "ECOLE PUBLIQUE PILOTE DE MODE / A",
              "voters": 287
            }
          ],
          "NDJOCK-NKONG": [
            {
              "station": "ECOLE PUBLIQUE DE NDJOCK-NKONG / A",
              "voters": 307
            },
            {
              "station": "ECOLE PUBLIQUE DE NDJOCK-NKONG / B",
              "voters": 288
            },
            {
              "station": "ECOLE PUBLIQUE DE NDJOCK-NKONG / C",
              "voters": 224
            }
          ],
          "NGOG-BASSONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOG-BASSONG / A",
              "voters": 305
            },
            {
              "station": "ECOLE PUBLIQUE DE NGOG-BASSONG / B",
              "voters": 126
            }
          ],
          "NGOG-MAPUBI": [
            {
              "station": "A ECOLE PUBLIQUE DE NGOG-MAPUBI CENTRE",
              "voters": 250
            },
            {
              "station": "LYCEE DE NGOG-MAPUBI / A",
              "voters": 191
            }
          ],
          "NKOYO": [
            {
              "station": "ECOLE PUBLIQUE DE NKOYO / A",
              "voters": 201
            }
          ],
          "NSIMEKELLE": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NIMELLE / A",
              "voters": 221
            }
          ],
          "OMOG": [
            {
              "station": "CASE COMMUNAUTAIRE DOMOG / A",
              "voters": 109
            },
            {
              "station": "ECOLE MATERNELLE DOMOG / A",
              "voters": 184
            }
          ],
          "SONG-MPECK": [
            {
              "station": "ECOLE PUBLIQUE DE SONG-MPECK / A",
              "voters": 105
            }
          ],
          "TAYAP": [
            {
              "station": "ECOLE PUBLIQUE DE TAYAP / A",
              "voters": 165
            }
          ]
        }
      },
      "NYONG-ET-MFOUMOU": {
        "NGUIBASSAL": {
          "BOUNDJACK": [
            {
              "station": "ESPLANADE CHEFFERIE DE BOUNDJACK / A",
              "voters": 49
            },
            {
              "station": "ECOLE PUBLIQUE DE BOUNDJACK / A",
              "voters": 127
            }
          ],
          "ELALE": [
            {
              "station": "ECOLE PUBLIQUE DE E LALE / A",
              "voters": 95
            },
            {
              "station": "POSTE AGRICOLE DE ELALE / A",
              "voters": 58
            },
            {
              "station": "CES DE ELALE / A",
              "voters": 113
            }
          ],
          "LAMAL": [
            {
              "station": "ECOLE PUBLIQUE DE LAMAL / A",
              "voters": 112
            },
            {
              "station": "CASE COMMUNAUTAIRE DE PEKUL / A",
              "voters": 51
            }
          ],
          "LIALINGOMBI": [
            {
              "station": "ESPLANADE CHEFFERIE DE LIALINGOMBI / A",
              "voters": 80
            },
            {
              "station": "ECOLE PUBLIQUE DE LIALINGOMBI / A",
              "voters": 103
            },
            {
              "station": "CASE COMMUNAUTAIRE DE SIPAT / A",
              "voters": 68
            }
          ],
          "LIBOBI": [
            {
              "station": "CASE COMMUNAUTAIRE DE SI LIBOBI / A",
              "voters": 152
            }
          ],
          "LIHONG": [
            {
              "station": "CASE COMMUNAUTAIRE DE SI DONGO / A",
              "voters": 57
            }
          ],
          "LIKONGUE": [
            {
              "station": "CASE COMMUNAUTAIRE DE LIKONGUE / A",
              "voters": 72
            }
          ],
          "MAHOLE I": [
            {
              "station": "CASE COMMUNAUTAIRE DE MAHOLE / A",
              "voters": 46
            }
          ],
          "MAHOLE II": [
            {
              "station": "ECOLE PUBLIQUE DE MAHOLE II / A",
              "voters": 61
            },
            {
              "station": "CASE COMMUNAUTAIRE DE MAHOLE II / A",
              "voters": 22
            }
          ],
          "MANDJANGJANG": [
            {
              "station": "A CASE COMMUNAUTAIRE DE MAHOLE II / A",
              "voters": 124
            },
            {
              "station": "ECOLE PUBLIQUE DE MANDJANDJANG / A",
              "voters": 100
            },
            {
              "station": "ECOLE MATERNELLE MANDJANDJANG / A",
              "voters": 137
            },
            {
              "station": "ECOLE MATERNELLE MANDJANDJANG / A",
              "voters": 137
            },
            {
              "station": "ECOLE MATERNELLE MANDJANDJANG / A",
              "voters": 137
            }
          ],
          "MANGANGA": [
            {
              "station": "CHAPELLE DE MANGANGA / A",
              "voters": 87
            }
          ],
          "NGUIBASSAL": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 279
            },
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 65
            }
          ],
          "NKOUMSE - SUD": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 94
            },
            {
              "station": "FOYER LEP A MBABA / A",
              "voters": 69
            },
            {
              "station": "CHAPELLE DE MBABA / A",
              "voters": 78
            }
          ],
          "SIKANDIGUE": [
            {
              "station": "CASE COMMUNAUTAIRE DE SIKANDIGUE / A",
              "voters": 107
            }
          ],
          "SIKOA": [
            {
              "station": "CASE COMMUNAUTAIRE DE SIKOA / A",
              "voters": 46
            }
          ],
          "SOMAKAI": [
            {
              "station": "COLLEGE D'ENS. SECOND. DE SOMAKAI /",
              "voters": 134
            },
            {
              "station": "ESPLANADE CHEFFERIE DE SOMAKAI / A",
              "voters": 73
            }
          ]
        },
        "AKONOLINGA": {
          "ABANDA": [
            {
              "station": "ESPLANADE CHEFFERIE DE ABANDA / A",
              "voters": 78
            }
          ],
          "EBANDA": [
            {
              "station": "ECOLE PUB. DJUYO / A",
              "voters": 70
            },
            {
              "station": "ECOLE PUB EBENA / A",
              "voters": 133
            }
          ],
          "EBOA": [
            {
              "station": "ECOLE PUB. EBODA / A",
              "voters": 221
            }
          ],
          "EFOGO": [
            {
              "station": "ECOLE PUB. EFOGO / A",
              "voters": 63
            }
          ],
          "EFOULAN": [
            {
              "station": "ECOLE PUB. EFOULAN / A",
              "voters": 237
            }
          ],
          "EKAM": [
            {
              "station": "ECOLE PUB. BILINGUE D'EKAM / A",
              "voters": 343
            },
            {
              "station": "ESPLANADE CHEFFERIE D' EKOLMAN / A",
              "voters": 274
            }
          ],
          "EKOLMAN": [
            {
              "station": "ESPLANADE CHEFFERIE D' EKOLMAN / A",
              "voters": 331
            },
            {
              "station": "ESPLANADE CHEFFERIE EKOLMAN / A",
              "voters": 3
            }
          ],
          "EKOUGOU II": [
            {
              "station": "ESPLANADE CHEFFERIE D' EKOUGOU II / A",
              "voters": 149
            }
          ],
          "EKOUMDOU": [
            {
              "station": "ESPLANADE CHEFFERIE D' EKOUMDOU / A",
              "voters": 49
            },
            {
              "station": "ESPLANADE CHEFFERIE D' EKOUMDOU / A",
              "voters": 59
            }
          ],
          "EKUGOU II": [
            {
              "station": "ESPLANADE CHEFFERIE D' ELOMBO / A",
              "voters": 73
            }
          ],
          "M BALDJAP": [
            {
              "station": "SALLE COMMUNAUTAIRE ELOUM / A",
              "voters": 171
            }
          ],
          "EMVANE SSO": [
            {
              "station": "ECOLE PUB. EMVANE SSO / A",
              "voters": 109
            }
          ],
          "ESSI": [
            {
              "station": "ESPLANADE CHEFFERIE ESSI / A",
              "voters": 94
            }
          ],
          "EVOM": [
            {
              "station": "ESPLANADE CHEFFERIE D' EVOM / A",
              "voters": 36
            }
          ],
          "EYANGAP": [
            {
              "station": "ECOLE PUB. EYANGAP / A",
              "voters": 187
            }
          ],
          "FANG SSO": [
            {
              "station": "ECOLE PUB. FANG SSO / A",
              "voters": 89
            }
          ],
          "HAOUSSA": [
            {
              "station": "ESPLANADE CHEFFERIE CAMP EFFA",
              "voters": 246
            },
            {
              "station": "SALLE DE REUNION DJUBIR HAOUSSA II / A",
              "voters": 122
            }
          ],
          "KAMBA": [
            {
              "station": "ESPLANADE CHEFFERIE EKAMBA / A",
              "voters": 68
            },
            {
              "station": "ESPLANADE CHEFFERIE DEKAMBA / A",
              "voters": 78
            }
          ],
          "KANE": [
            {
              "station": "ECOLE PUB KANE / A",
              "voters": 87
            },
            {
              "station": "ECOLE PUB. KOUDOU. MEKONG SSO / A",
              "voters": 62
            }
          ],
          "KOUDOU": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGONANG / A",
              "voters": 174
            }
          ],
          "KOUM": [
            {
              "station": "ESPLANADE CHEFFERIE DE NGONANG / A",
              "voters": 96
            }
          ],
          "KOUNDESSONG": [
            {
              "station": "ESPLANADE CHEFFERIE DE KOUNDESSONG /",
              "voters": 38
            }
          ],
          "KPWEN": [
            {
              "station": "A ESPLANADE CHEFFERIE DE KPWEN / A",
              "voters": 71
            }
          ],
          "LAC": [
            {
              "station": "ESPLANADE CHEFFERIE DE LAC / A",
              "voters": 267
            },
            {
              "station": "ESPLANADE CHEFFERIE DE LAC / B",
              "voters": 185
            }
          ],
          "LOUM VILLAGE": [
            {
              "station": "ECOLE PUB. LOUM VILLAGE / A",
              "voters": 174
            },
            {
              "station": "ECOLE PUB. LOUM VILLAGE / A",
              "voters": 121
            }
          ],
          "LOUM VILLE": [
            {
              "station": "LYCEE TECHNIQUE LOUM VILLE II / B",
              "voters": 275
            },
            {
              "station": "N.E.L G LOUM VILLE II / A",
              "voters": 256
            }
          ],
          "MAKA QUARTER": [
            {
              "station": "ESPLANADE CHEFFERIE DE MAKA QUARTER",
              "voters": 319
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MAKA QUARTER",
              "voters": 95
            }
          ],
          "MBALDJAP": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBALDJAP / A",
              "voters": 88
            }
          ],
          "MBANG SSO": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBANG SSO / A",
              "voters": 122
            }
          ],
          "MBEGEA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MBEGEA / A",
              "voters": 96
            }
          ],
          "MEBANG": [
            {
              "station": "ECOLE PUB. METONDOK / A",
              "voters": 76
            },
            {
              "station": "ECOLE PUB. MEBANG YELINDA / A",
              "voters": 112
            }
          ],
          "MEDJAP": [
            {
              "station": "ECOLE PUB. MEDJAP / A",
              "voters": 95
            }
          ],
          "MEKA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEKA / A",
              "voters": 37
            }
          ],
          "MELANE SSO": [
            {
              "station": "ESPLANADE CHEFFERIE DE SOMBO / A",
              "voters": 145
            },
            {
              "station": "ESPLANADE CHEFFERIE DE MEKOUM / A",
              "voters": 135
            }
          ],
          "MENGANA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGANA / A",
              "voters": 60
            }
          ],
          "MENGANA SSO": [
            {
              "station": "ECOLE PUB. MENGANA SSO / A",
              "voters": 86
            }
          ],
          "MENGUEME SI": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGUEME SI /",
              "voters": 220
            },
            {
              "station": "ESPLANADE CHEFFERIE DE BIKOUMOU / A",
              "voters": 33
            }
          ],
          "METONDOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYOK / A",
              "voters": 76
            }
          ],
          "MEYOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYOS SSO / A",
              "voters": 70
            }
          ],
          "MEYOS SSO": [
            {
              "station": "ESPLANADE CHEFFERIE DE MINGO / A",
              "voters": 63
            },
            {
              "station": "ESPLANADE CHEFFERIE MEYOS II / A",
              "voters": 67
            }
          ],
          "MINGUE ME": [
            {
              "station": "ECOLE PUB. MINLOH / A",
              "voters": 44
            }
          ],
          "MINLOH": [
            {
              "station": "ECOLE PUB. MINLOP / A",
              "voters": 251
            }
          ],
          "MINLOP": [
            {
              "station": "ECOLE PUB. MVEBA-ASSI",
              "voters": 59
            }
          ],
          "MVEBA-ASSI": [
            {
              "station": "LYCEE TECHNIQUE DAYOS / A",
              "voters": 190
            },
            {
              "station": "LYCEE CLASSIQUE DAYOS / A",
              "voters": 81
            }
          ],
          "NDELLE CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE DE NDELLE / A",
              "voters": 159
            }
          ],
          "NDELLE MBANG": [
            {
              "station": "HANGAR RES. NOTABLE DE NDELLE-NDELLE / A",
              "voters": 51
            }
          ],
          "NDELLE MILONDO": [
            {
              "station": "ECOLE PUBLIQUE DE MILONDO / A",
              "voters": 95
            }
          ],
          "NDJINGON": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE NDJINGON II",
              "voters": 175
            }
          ],
          "NDJINGON III": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDJINGON / A",
              "voters": 201
            }
          ],
          "NEBODO": [
            {
              "station": "ECOLE PUBLIQUE DE NGULEBOMO / A",
              "voters": 83
            }
          ],
          "NGOLEBOMO": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE",
              "voters": 141
            }
          ],
          "NGOUBI": [
            {
              "station": "ECOLE PUBLIQUE DE NGUOBI / A",
              "voters": 127
            }
          ],
          "NGOUMESSENG": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE",
              "voters": 75
            }
          ],
          "NGOUN I": [
            {
              "station": "A CENTRE D'ETAT CIVIL DE NGOUNGOUM II / A",
              "voters": 101
            }
          ],
          "NGUIMAKONG": [
            {
              "station": "CASE A PALABRE DE LA CHEF. DE",
              "voters": 162
            }
          ],
          "NGUIN II": [
            {
              "station": "ECOLE PUBLIQUE DE NIAMVOUDOU / A",
              "voters": 119
            }
          ],
          "NIAMVOUDOU ECOLE": [
            {
              "station": "COLLEGE AVENTISTE DE NIAMVOUDOU / A",
              "voters": 109
            }
          ],
          "NIAMVOUDOU CENTRE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NIAMVOUDOU / A",
              "voters": 71
            },
            {
              "station": "ESPLANADE CHEFFERIE DE NIAMVOUDOU / A",
              "voters": 144
            }
          ],
          "NKOKYA": [
            {
              "station": "SARM / DAYOS / A",
              "voters": 195
            }
          ],
          "NKOLMVEMG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLVEMENG / A",
              "voters": 55
            }
          ],
          "NKOLOBODOU II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLOBODOU II / A",
              "voters": 148
            }
          ],
          "NKOBIA": [
            {
              "station": "C.E.S NKOBIA / A",
              "voters": 27
            }
          ],
          "NKOLDAJA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NTONGA / A",
              "voters": 62
            }
          ],
          "NTONGA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NYAMOU / A",
              "voters": 96
            }
          ],
          "NYAMOU": [
            {
              "station": "ESPLANADE CHEFFERIE DE POUM POUM / A",
              "voters": 83
            }
          ],
          "POUM POUM": [
            {
              "station": "ERP GRP I / A",
              "voters": 86
            }
          ],
          "QUARTER ADMINISTRATIF": [
            {
              "station": "ERP GRP II / A",
              "voters": 154
            },
            {
              "station": "SALLE DES FETES / A",
              "voters": 127
            }
          ],
          "QUARTER EKODOU": [
            {
              "station": "ECOLE PUB. QUARTER",
              "voters": 279
            }
          ],
          "QUARTER EWONDO": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER EWONDO",
              "voters": 279
            }
          ],
          "QUARTER NKOLOBODOU": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER NKOLOBODOU",
              "voters": 208
            }
          ],
          "QUARTER OMVANG": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER OMVANG",
              "voters": 177
            }
          ],
          "QUARTER SOBIA": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER SOBIA / A",
              "voters": 107
            }
          ],
          "QUARTER YELINDA": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER YELINDA",
              "voters": 138
            }
          ],
          "QUARTER YENGONO II": [
            {
              "station": "YENGONO II / A",
              "voters": 276
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTER",
              "voters": 157
            }
          ],
          "SCIERIE": [
            {
              "station": "YENGONO B",
              "voters": 260
            }
          ],
          "SOLOLO": [
            {
              "station": "ECOLE PUB. SOLOLO / A",
              "voters": 89
            }
          ],
          "SSO MVOG NYENGUE": [
            {
              "station": "LYCEE QUARTER YENGONO S SO MVOG NYENGUE",
              "voters": 54
            }
          ],
          "TENG": [
            {
              "station": "ECOLE PUB. TENG / A",
              "voters": 134
            },
            {
              "station": "ESPLANADE CHEFFERIE SAM / A",
              "voters": 35
            }
          ],
          "TOMBA": [
            {
              "station": "ECOLE PUB. TOMBA I / A",
              "voters": 65
            },
            {
              "station": "ESPLANADE CHEFFERIE TOMBA II / A",
              "voters": 51
            }
          ],
          "TOMBA II": [
            {
              "station": "ESPLANADE CHEFFERIE TOMBA II / A",
              "voters": 29
            }
          ],
          "YEME YEME": [
            {
              "station": "ESPLANADE CHEFFERIE YEME YEME / A",
              "voters": 141
            },
            {
              "station": "ESPLANADE CHEFFERIE KEN / A",
              "voters": 62
            }
          ],
          "YEME YEME SUD NYONG": [
            {
              "station": "ESPLANADE CHEFFERIE YEME YEME SUD",
              "voters": 104
            }
          ],
          "YENGONO I": [
            {
              "station": "YENGONO / A",
              "voters": 148
            }
          ],
          "ZALOM": [
            {
              "station": "ECOLE PUB. ZALOM / A",
              "voters": 243
            },
            {
              "station": "ECOLE PUB. ZALOM II / A",
              "voters": 110
            },
            {
              "station": "ECOLE PUB. ZALOM III / A",
              "voters": 105
            }
          ],
          "MVE - AFEM": [
            {
              "station": "MVE - AFEM / A",
              "voters": 59
            }
          ],
          "EYENDE": [
            {
              "station": "HANGAR NOTABLE EYENDE / A / A",
              "voters": 91
            }
          ],
          "EBODOUMOU": [
            {
              "station": "MISSION CATHOLIQUE ETOL / A / A",
              "voters": 49
            }
          ],
          "ETOL II": [
            {
              "station": "HANGAR NOTABLE KEK / A / A",
              "voters": 94
            }
          ],
          "KEK": [
            {
              "station": "HANGAR NOTABLE ENDA MEYOS / A / A",
              "voters": 88
            }
          ],
          "ENDA MEYOS": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NDJUOBOCK / A",
              "voters": 50
            }
          ],
          "MEKO K": [
            {
              "station": "C E S DE MEDEZEK / A",
              "voters": 41
            }
          ],
          "MEDEZEK": [
            {
              "station": "CHAPELLE EPC DE MBILI / A",
              "voters": 81
            }
          ],
          "MBILI": [
            {
              "station": "ESPLANADE CHEFFERIE EKOLMAN / A",
              "voters": 33
            }
          ]
        },
        "AYOS": {
          "ESSON II": [
            {
              "station": "ESPL. RESIDENCE NOTABLE D'ESSON II /",
              "voters": 66
            }
          ],
          "EYES": [
            {
              "station": "A ECOLE PUBLIQUE DEYESS / A",
              "voters": 179
            }
          ],
          "HAOUSSA": [
            {
              "station": "HANGAR MOSQUEE / A",
              "voters": 247
            }
          ],
          "JAMOT": [
            {
              "station": "ECOLE PUBLIQUE GRP II / A",
              "voters": 329
            }
          ],
          "KOBA": [
            {
              "station": "ECOLE PUBLIQUE DE KOBA / A",
              "voters": 125
            }
          ],
          "KOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE KOMBO / A",
              "voters": 179
            }
          ],
          "LEMBE": [
            {
              "station": "ECOLE PUBLIQUE DE LEMBE / A",
              "voters": 69
            }
          ],
          "MBAKA CHEFFERIE": [
            {
              "station": "INFIRMERIE DE MBAKA / A",
              "voters": 108
            }
          ],
          "MBAKA ECOLE": [
            {
              "station": "ECOLE PUBLIQUE DE MBAKA / A",
              "voters": 79
            }
          ],
          "MBAKOK": [
            {
              "station": "ECOLE PUBLIQUE DE MBAKOK / A",
              "voters": 88
            }
          ],
          "MBANG-ABONG": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG-ABONG / A",
              "voters": 62
            }
          ],
          "MBISSIT": [
            {
              "station": "ECOLE PUBLIQUE DE MBISSIT / A",
              "voters": 144
            }
          ],
          "NG OUMESSENG": [
            {
              "station": "ECOLE PUBLIQUE DE NG OUMESSENG / A",
              "voters": 45
            }
          ],
          "MEK OUM": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MEK OUM / A",
              "voters": 68
            }
          ],
          "MELANE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANE / A",
              "voters": 111
            }
          ],
          "METOYO": [
            {
              "station": "ECOLE PUBLIQUE DE METOYO / A",
              "voters": 137
            }
          ],
          "MVANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MVANGA / A",
              "voters": 168
            }
          ],
          "MVEBA-ASSI": [
            {
              "station": "LYCEE TECHNIQUE D'AYOS / A",
              "voters": 180
            },
            {
              "station": "LYCEE CLASSIQUE D'AYOS / A",
              "voters": 81
            }
          ],
          "NDELLE": [
            {
              "station": "ECOLE PUBLIQUE DE NDELLE / A",
              "voters": 145
            }
          ],
          "NDELLE MBANG": [
            {
              "station": "HANGAR RES. NOTABLE DE NDELLE-NDELLE / A",
              "voters": 51
            }
          ],
          "NDELLE NGONJANG": [
            {
              "station": "ECOLE PUBLIQUE DE NGONJANG / A",
              "voters": 95
            }
          ],
          "NDJINGON": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE NDJINGON II",
              "voters": 175
            }
          ],
          "NDJINGON III": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDJINGON / A",
              "voters": 201
            }
          ],
          "NEBODO": [
            {
              "station": "ECOLE PUBLIQUE DE NGULEBOMO / A",
              "voters": 83
            }
          ],
          "NGUOBI": [
            {
              "station": "ECOLE PUBLIQUE DE NGUOBI / A",
              "voters": 141
            }
          ],
          "NGOUMESSENG": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE",
              "voters": 127
            }
          ],
          "NGOUN I": [
            {
              "station": "A CENTRE D'ETAT CIVIL DE NGOUNGOUM II / A",
              "voters": 101
            }
          ],
          "NGUIMAKONG": [
            {
              "station": "CASE A PALABRE DE LA CHEF. DE",
              "voters": 162
            }
          ],
          "NGUIN II": [
            {
              "station": "ECOLE PUBLIQUE DE NIAMVOUDOU / A",
              "voters": 119
            }
          ],
          "NIAMVOUDOU ECOLE": [
            {
              "station": "COLLEGE AVENTISTE DE NIAMVOUDOU / A",
              "voters": 109
            }
          ],
          "NIAMVOUDOU CENTRE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NIAMVOUDOU / A",
              "voters": 71
            },
            {
              "station": "ESPLANADE CHEFFERIE DE NIAMVOUDOU / A",
              "voters": 144
            }
          ],
          "NKOKYA": [
            {
              "station": "SARM / DAYOS / A",
              "voters": 195
            }
          ],
          "NKOLMVEMG": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLVEMENG / A",
              "voters": 55
            }
          ],
          "NKOLOBODOU II": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLOBODOU II / A",
              "voters": 148
            }
          ],
          "NKOBIA": [
            {
              "station": "C.E.S NKOBIA / A",
              "voters": 27
            }
          ],
          "NKOLDAJA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NTONGA / A",
              "voters": 62
            }
          ],
          "NTONGA": [
            {
              "station": "ESPLANADE CHEFFERIE DE NYAMOU / A",
              "voters": 96
            }
          ],
          "NYAMOU": [
            {
              "station": "ESPLANADE CHEFFERIE DE POUM POUM / A",
              "voters": 83
            }
          ],
          "POUM POUM": [
            {
              "station": "ERP GRP I / A",
              "voters": 86
            }
          ],
          "QUARTER ADMINISTRATIF": [
            {
              "station": "ERP GRP II / A",
              "voters": 154
            },
            {
              "station": "SALLE DES FETES / A",
              "voters": 127
            }
          ],
          "QUARTER EKODOU": [
            {
              "station": "ECOLE PUB. QUARTER",
              "voters": 279
            }
          ],
          "QUARTER EWONDO": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER EWONDO",
              "voters": 279
            }
          ],
          "QUARTER NKOLOBODOU": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER NKOLOBODOU",
              "voters": 208
            }
          ],
          "QUARTER OMVANG": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER OMVANG",
              "voters": 177
            }
          ],
          "QUARTER SOBIA": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER SOBIA / A",
              "voters": 107
            }
          ],
          "QUARTER YELINDA": [
            {
              "station": "ESPLANADE CHEFFERIE QUARTER YELINDA",
              "voters": 138
            }
          ],
          "QUARTER YENGONO II": [
            {
              "station": "YENGONO II / A",
              "voters": 276
            },
            {
              "station": "ESPLANADE CHEFFERIE QUARTER",
              "voters": 157
            }
          ],
          "SCIERIE": [
            {
              "station": "YENGONO B",
              "voters": 260
            }
          ],
          "SOLOLO": [
            {
              "station": "ECOLE PUB. SOLOLO / A",
              "voters": 89
            }
          ],
          "SSO MVOG NYENGUE": [
            {
              "station": "LYCEE QUARTER YENGONO S SO MVOG NYENGUE",
              "voters": 54
            }
          ],
          "TENG": [
            {
              "station": "ECOLE PUB. TENG / A",
              "voters": 134
            },
            {
              "station": "ESPLANADE CHEFFERIE SAM / A",
              "voters": 35
            }
          ],
          "MEYOS SSO": [
            {
              "station": "ESPLANADE CHEFFERIE MEYOS II / A",
              "voters": 67
            }
          ],
          "TOMBA": [
            {
              "station": "ECOLE PUB. TOMBA I / A",
              "voters": 65
            },
            {
              "station": "ESPLANADE CHEFFERIE TOMBA II / A",
              "voters": 51
            },
            {
              "station": "ECOLE PUBLIQUE DE TOMBA I / A",
              "voters": 238
            }
          ],
          "TOMBA II": [
            {
              "station": "ESPLANADE CHEFFERIE TOMBA II / A",
              "voters": 29
            }
          ],
          "YEME YEME": [
            {
              "station": "ESPLANADE CHEFFERIE YEME YEME / A",
              "voters": 141
            },
            {
              "station": "ESPLANADE CHEFFERIE KEN / A",
              "voters": 62
            }
          ],
          "YEME YEME SUD NYONG": [
            {
              "station": "ESPLANADE CHEFFERIE YEME YEME SUD",
              "voters": 104
            }
          ],
          "YENGONO I": [
            {
              "station": "YENGONO / A",
              "voters": 148
            }
          ],
          "ZALOM": [
            {
              "station": "ECOLE PUB. ZALOM / A",
              "voters": 243
            },
            {
              "station": "ECOLE PUB. ZALOM II / A",
              "voters": 110
            },
            {
              "station": "ECOLE PUB. ZALOM III / A",
              "voters": 105
            }
          ],
          "MVE - AFEM": [
            {
              "station": "MVE - AFEM / A",
              "voters": 59
            }
          ],
          "EYENDE": [
            {
              "station": "HANGAR NOTABLE EYENDE / A / A",
              "voters": 91
            }
          ],
          "ETOL II": [
            {
              "station": "MISSION CATHOLIQUE ETOL / A / A",
              "voters": 94
            }
          ],
          "KEK": [
            {
              "station": "HANGAR NOTABLE ENDA MEYOS / A / A",
              "voters": 88
            }
          ],
          "ENDA MEYOS": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NDJUOBOCK / A",
              "voters": 50
            }
          ],
          "MEKO K": [
            {
              "station": "C E S DE MEDEZEK / A",
              "voters": 41
            }
          ],
          "MBILI": [
            {
              "station": "CHAPELLE EPC DE MBILI / A",
              "voters": 33
            }
          ],
          "EKOLMAN": [
            {
              "station": "ESPLANADE CHEFFERIE EKOLMAN / A",
              "voters": 3
            }
          ],
          "OBIS": [
            {
              "station": "ECOLE PUBLIQUE DE OBIS / A",
              "voters": 103
            }
          ],
          "OLEMBE": [
            {
              "station": "HANGAR DYOLEMBE / A",
              "voters": 194
            }
          ],
          "OMVANG": [
            {
              "station": "ESPL. CHEFFERIE QUARTER OMVANG / A",
              "voters": 266
            }
          ],
          "YE BE CHEFFERIE": [
            {
              "station": "ESPLANADE CHEFFERIE DE YE BE / A",
              "voters": 51
            }
          ],
          "YE BE ECOLE": [
            {
              "station": "ECOLE PUBLIQUE DE YE BE / A",
              "voters": 91
            }
          ],
          "ASSOO OBAM": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE ASSOO",
              "voters": 82
            }
          ],
          "EMINI-CEDI": [
            {
              "station": "HANGAR COMMUNAUTAIRE PETIT MARCHE /",
              "voters": 96
            }
          ],
          "ME KOK": [
            {
              "station": "ESPLANADE RESIDENCE NOTABLE DE",
              "voters": 91
            }
          ],
          "NOUMELAYA": [
            {
              "station": "ECOLE PUBLIQUE NOTABLE DE YEBE",
              "voters": 47
            }
          ],
          "YEBE-MESSA": [
            {
              "station": "ESPL. RESIDENCE NOTABLE DE MESSA / A",
              "voters": 76
            }
          ],
          "MBANG-NYABEWA": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG-NYABEWA / A",
              "voters": 69
            }
          ]
        },
        "ENDOM": {
          "ABANG - MBAL": [
            {
              "station": "CASE A PALABRE D'ABANG / A",
              "voters": 68
            },
            {
              "station": "CASE COMMUNAUTAIRE D'ABANG-MB AL / A",
              "voters": 162
            }
          ],
          "ABAT - EDJOM": [
            {
              "station": "ECOLE CATHOLIQUE DE MEBASSA / A",
              "voters": 53
            }
          ],
          "AKAR II": [
            {
              "station": "ECOLE PUBLIQUE D'AKAR II / A",
              "voters": 71
            }
          ],
          "AKAR I": [
            {
              "station": "ECOLE PUBLIQUE D'AKAR I / A",
              "voters": 82
            }
          ],
          "AKAROLOU": [
            {
              "station": "ECOLE PUBLIQUE D'AKAROLOU / A",
              "voters": 153
            }
          ],
          "BETA": [
            {
              "station": "ECOLE PUBLIQUE DE BETA / A",
              "voters": 79
            }
          ],
          "BIKOM": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOM / A",
              "voters": 77
            }
          ],
          "BIKOUM": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOUM / A",
              "voters": 126
            }
          ],
          "BINYENYALE": [
            {
              "station": "CASE A PALABRE DE BINYENYALE / A",
              "voters": 107
            }
          ],
          "BITSOX ADJAP": [
            {
              "station": "ECOLE PUBLIQUE DE BITSOX - ADJAP / A",
              "voters": 168
            }
          ],
          "BLOC II, BLOC III": [
            {
              "station": "ECOLE PUBLIQUE D' ENDOM - VILLE / A",
              "voters": 231
            },
            {
              "station": "HOTEL DE VILLE D'ENDOM / B",
              "voters": 297
            }
          ],
          "BLOC IV, BLOC V": [
            {
              "station": "HOTEL DE VILLE D'ENDOM / A",
              "voters": 283
            }
          ],
          "ÉBOMAN": [
            {
              "station": "ECOLE PUBLIQUE D'ÉBOMAN / A",
              "voters": 155
            }
          ],
          "EDJOM": [
            {
              "station": "ECOLE PUBLIQUE D'EDJOM / A",
              "voters": 271
            }
          ],
          "EFOULAN": [
            {
              "station": "ESPLANADE CHEFFERIE DE EFOULAN / A",
              "voters": 25
            }
          ],
          "EKOMBA": [
            {
              "station": "ECOLE PUBLIQUE DEKOMBA / A",
              "voters": 187
            }
          ],
          "EKONDOU": [
            {
              "station": "ESPL CHEFFERIE SEME DEGRE DE",
              "voters": 211
            }
          ],
          "EMANA": [
            {
              "station": "EKODOU / A",
              "voters": 30
            },
            {
              "station": "ESPLANADE CHEFFERIE DE EMANA / A",
              "voters": 30
            }
          ],
          "ENONEN": [
            {
              "station": "ESPLANADE CHEFFERIE DE ENONEN / A",
              "voters": 84
            }
          ],
          "ENYENG": [
            {
              "station": "ESPLANADE CHEFFERIE DE ENYENG / A",
              "voters": 81
            }
          ],
          "ESSENG": [
            {
              "station": "CASE DE SANTE D'YEK I / A",
              "voters": 64
            }
          ],
          "EYEK I": [
            {
              "station": "CASE DE SANTE D'YEK I / A",
              "voters": 95
            }
          ],
          "KAM II": [
            {
              "station": "ECOLE PUBLIQUE DE KAM / A",
              "voters": 59
            }
          ],
          "KOUTEKOMO": [
            {
              "station": "ESPLANADE CHEFFERIE DE KOUTEKOMO / A",
              "voters": 168
            }
          ],
          "KWAMENDJUNG": [
            {
              "station": "ECOLE PUBLIQUE DE KWAMENDJUNG / A",
              "voters": 122
            }
          ],
          "LOUM": [
            {
              "station": "CASE A PALABBRES DE LOUM / A",
              "voters": 25
            }
          ],
          "MAN": [
            {
              "station": "CASE A PALABRE DE MAN / A",
              "voters": 121
            }
          ],
          "MBAA": [
            {
              "station": "CASE A PALABRE DE MAN / A",
              "voters": 46
            }
          ],
          "MEBASSA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEBASSA / A",
              "voters": 85
            }
          ],
          "MEBOMO": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEBOMO / A",
              "voters": 80
            }
          ],
          "MEBEM": [
            {
              "station": "ECOLE PUBLIQUE DE MEBEM / A",
              "voters": 64
            }
          ],
          "MEDJEME I": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEDJEME I / A",
              "voters": 60
            }
          ],
          "MEDJEME II": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEDJEME II / A",
              "voters": 176
            }
          ],
          "MEDJENGWA": [
            {
              "station": "ECOLE PUBLIQUE DE MEDJENGWA / A",
              "voters": 125
            }
          ],
          "MEYEMAYA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYEMAYA / A",
              "voters": 78
            }
          ],
          "MEYO": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEYO / A",
              "voters": 194
            }
          ],
          "MFOULADJA": [
            {
              "station": "CASE A PALABRE DE MFOULADJA / A",
              "voters": 44
            }
          ],
          "MONENGOMBO": [
            {
              "station": "CASE A PALABRE DE MONENGOMBO / A",
              "voters": 225
            }
          ],
          "NDOMBE": [
            {
              "station": "ECOLE PUBLIQUE DE NDOMBE / A",
              "voters": 95
            }
          ],
          "NKOOVENG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOOVENG / A",
              "voters": 266
            }
          ],
          "NKOAMBANG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOAMBANG / A",
              "voters": 95
            }
          ],
          "NGOLJI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEWOUT / A",
              "voters": 153
            }
          ],
          "NKOLSE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLSE / A",
              "voters": 164
            }
          ],
          "NKOLOTOM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLOTOM / A",
              "voters": 129
            }
          ],
          "NYADOGO": [
            {
              "station": "ECOLE PUBLIQUE DE NYADOGO / A",
              "voters": 177
            }
          ],
          "TAP": [
            {
              "station": "ECOLE PUBLIQUE DE TAPA / A",
              "voters": 75
            }
          ],
          "ZANDA": [
            {
              "station": "ECOLE PUBLIQUE DE ZANDA / A",
              "voters": 133
            }
          ],
          "ZOULOU": [
            {
              "station": "ECOLE PUBLIQUE DE ZOULOU / A",
              "voters": 47
            }
          ],
          "ZOULOU I": [
            {
              "station": "ESPLANADE CHEFFERIE DE ZOULOU I / A",
              "voters": 215
            }
          ],
          "OVENG": [
            {
              "station": "CASE PALABRES / A",
              "voters": 47
            }
          ],
          "NGOUI": [
            {
              "station": "ESPLANADE CHEFFERIE DE NCOUI / A",
              "voters": 43
            }
          ],
          "MEDA TETELE": [
            {
              "station": "ECOLE PUBLIQUE DE MEDJATETELE / A",
              "voters": 89
            }
          ],
          "BITE TETELE": [
            {
              "station": "ECOLE PUBLIQUE DE PARAK BIVENG / A",
              "voters": 43
            }
          ],
          "ABANG-MBONG": [
            {
              "station": "CASE A PALABRE DABANG MBONG / A",
              "voters": 132
            },
            {
              "station": "CASE A PALABRE DABANG MBONG / A",
              "voters": 104
            }
          ],
          "BIKONAM": [
            {
              "station": "ECOLE MATERNELLE DE BIKONAM / A",
              "voters": 113
            }
          ],
          "ABA BITA": [
            {
              "station": "CASE A PALABRE DE NDAMBENE / A",
              "voters": 25
            }
          ],
          "EBUK ESIKI NDAMBENE": [
            {
              "station": "CASE A PALABRE DE NDAMBENE / A",
              "voters": 25
            }
          ]
        },
        "KOBDOMBO": {
          "AKAM SOBIA": [
            {
              "station": "ECOLE PUBLIQUE D'AKAM SOBIA / A",
              "voters": 134
            }
          ],
          "ANDOM": [
            {
              "station": "ECOLE PUBLIQUE D'ANDOM / A",
              "voters": 74
            }
          ],
          "ATOA": [
            {
              "station": "ECOLE PUBLIQUE DATAO / A",
              "voters": 68
            }
          ],
          "AWAE": [
            {
              "station": "ECOLE PUBLIQUE DAWAE / A",
              "voters": 168
            }
          ],
          "BOLI": [
            {
              "station": "EGLISE ADVENTISTE DE BOLU / A",
              "voters": 25
            }
          ],
          "EBOLBOUM": [
            {
              "station": "ECOLE PUBLIQUE DEBOLBOUM / A",
              "voters": 171
            }
          ],
          "EFANDI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DEFANDI / A",
              "voters": 37
            }
          ],
          "EFOUFOUP": [
            {
              "station": "CHAPELLE EPC DASSOULEBI / A",
              "voters": 185
            },
            {
              "station": "CHAPELLE ADVENTISTE DE LOUMBOU / A",
              "voters": 142
            }
          ],
          "LOUMDOU": [
            {
              "station": "HANGAR PUBLIQUE DEFOUFOUP / A",
              "voters": 230
            }
          ],
          "EKPOWASSONG": [
            {
              "station": "A HANGAR COMMUNAUTAIRE DEKPWASSONG",
              "voters": 47
            }
          ],
          "ETANGUI": [
            {
              "station": "ECOLE PUBLIQUE ETANGUI / A",
              "voters": 86
            }
          ],
          "FANG-BILOUN": [
            {
              "station": "CHAPELLE CATHOLIQUE D EYENDE AKOE / A",
              "voters": 133
            },
            {
              "station": "ECOLE PUBLIQUE DE FANG-BILOUN / A",
              "voters": 160
            }
          ],
          "KAA": [
            {
              "station": "ECOLE PUBLIQUE DE KAA / A",
              "voters": 72
            }
          ],
          "KOBDOMBO": [
            {
              "station": "LYCEE BILINGUE DE KOBDOMBO / A",
              "voters": 197
            }
          ],
          "KONGO": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE KONGO / A",
              "voters": 100
            }
          ],
          "KOUTBENGONO": [
            {
              "station": "CHAPELLE CATHOLIQUE DE KOUTBENGONO /",
              "voters": 92
            }
          ],
          "MBENG I": [
            {
              "station": "A HANGAR COMMUNAUTAIRE DE MBENG / A",
              "voters": 66
            },
            {
              "station": "HANGAR COMMUNAUTAIRE DE MBENG I / A",
              "voters": 120
            }
          ],
          "MBENG II": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MBENG II / A",
              "voters": 87
            }
          ],
          "MBOGUE": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MBOGUE / A",
              "voters": 27
            }
          ],
          "MBOKA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MBOKA / A",
              "voters": 99
            }
          ],
          "MBOMA": [
            {
              "station": "ECOLE PUBLIQUE DE MBOMA / A",
              "voters": 29
            }
          ],
          "NDAMA": [
            {
              "station": "ECOLE PUBLIQUE DE NDAMA / A",
              "voters": 59
            }
          ],
          "NDANGA": [
            {
              "station": "ECOLE PUBLIQUE DE NDAMA / A",
              "voters": 118
            }
          ],
          "NDJONG BIKONE": [
            {
              "station": "ECOLE PUBLIQUE DE NDJONG BIKONE / A",
              "voters": 183
            }
          ],
          "NGADA": [
            {
              "station": "ECOLE PUBLIQUE DE NGADA / A",
              "voters": 137
            }
          ],
          "NGALLA": [
            {
              "station": "ECOLE ADVENTISTE DE NGALLA I / A",
              "voters": 123
            },
            {
              "station": "HANGAR COMMUNAUTAIRE DE NGALLA II / A",
              "voters": 164
            }
          ],
          "NGOMBO": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE NGOMBO / A",
              "voters": 92
            }
          ],
          "NGONDO": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE NGONDO / A",
              "voters": 149
            }
          ],
          "NGOULKEKA": [
            {
              "station": "ECOLE PUBLIQUE DE NGOULKEKA / A",
              "voters": 91
            }
          ],
          "NKOLESSONG": [
            {
              "station": "CHAPELLE CATHOLIQUE DE NKOLESSONG /",
              "voters": 102
            }
          ],
          "NKOLOBOUDOU I": [
            {
              "station": "A ECOLE PUBLIQUE NKOLOBOUDOU I / A",
              "voters": 163
            }
          ],
          "NKPWANZE": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE NKPWANZE /",
              "voters": 116
            }
          ],
          "NYAMEWOSSO": [
            {
              "station": "A CHAPELLE CATHOLIQUE DE NYAMEWOSSO /",
              "voters": 80
            }
          ],
          "NYAZONGO": [
            {
              "station": "A HANGAR COMMUNAUTAIRE DE NYAZONGO /",
              "voters": 36
            }
          ],
          "NYENDA": [
            {
              "station": "ECOLE PUBLIQUE DE NYENDA / A",
              "voters": 122
            }
          ],
          "ONGBWAKOUT": [
            {
              "station": "CHAPELLE CATHOLIQUE DE ONGBWAKOUT /",
              "voters": 32
            }
          ],
          "SALLA": [
            {
              "station": "A ECOLE PUBLIQUE DE SALLA I / A",
              "voters": 177
            },
            {
              "station": "ECOLE PUBLIQUE DE SALLA II / A",
              "voters": 153
            }
          ],
          "SOBIA": [
            {
              "station": "ECOLE PUBLIQUE DE SOBIA / A",
              "voters": 180
            },
            {
              "station": "ECOLE PUBLIQUE DE SOBIA / A",
              "voters": 180
            }
          ],
          "NDAMV": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE",
              "voters": 55
            }
          ],
          "NKOAMBANG": [
            {
              "station": "NKOAMBANG / A",
              "voters": 38
            }
          ],
          "NPWAMVOUK": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE",
              "voters": 54
            }
          ],
          "ENDAMBA / YIN EGYTEN": [
            {
              "station": "TOMBA III / A",
              "voters": 54
            }
          ],
          "ENDAMBA": [
            {
              "station": "CASE DE SANTE D'ENDAMBA / A",
              "voters": 52
            }
          ],
          "MYANGA": [
            {
              "station": "CHAPELLE EPC DE BONGA / A",
              "voters": 40
            }
          ],
          "FESSELE NIEMYON": [
            {
              "station": "EGLISE ADVENTISTE DE FESSELE / A",
              "voters": 112
            }
          ],
          "FANG-BIKANG": [
            {
              "station": "ECOLE PUBLIQUE DE FANG BIKANG II / A",
              "voters": 192
            },
            {
              "station": "FOYER COMMUNAUTAIRE DE FANG BIKANG I / A",
              "voters": 101
            }
          ],
          "LOUNDOU": [
            {
              "station": "A ECOLE PUBLIQUE DE LOUNDOU / A",
              "voters": 228
            }
          ],
          "TOMBO": [
            {
              "station": "ECOLE CATHOLIQUE DE LENG-TOMBO / A",
              "voters": 256
            },
            {
              "station": "CETIC DE KOBDOMBO / A",
              "voters": 39
            },
            {
              "station": "CETIC DE KOBDOMBO / B",
              "voters": 280
            }
          ]
        },
        "MENGANG": {
          "MEDJOU": [
            {
              "station": "ECOLE PUBLIQUE DE MEDJOU / A",
              "voters": 62
            },
            {
              "station": "ECOLE PUBLIQUE DE MEDJOU / A",
              "voters": 81
            },
            {
              "station": "ECOLE PUBLIQUE DE MEDJOU / A",
              "voters": 81
            },
            {
              "station": "ECOLE PUBLIQUE DE MEDJOU / A",
              "voters": 81
            },
            {
              "station": "ECOLE PUBLIQUE DE MEDJOU / A",
              "voters": 81
            }
          ],
          "MEA II": [
            {
              "station": "ECOLE PUBLIQUE DE MEA II / A / A",
              "voters": 74
            }
          ],
          "KOUNDESSONG": [
            {
              "station": "ECOLE PUBLIQUE DE KOUNDESSONG / A / A",
              "voters": 74
            }
          ],
          "NKOLSENG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLSENG / A / A",
              "voters": 51
            }
          ],
          "NKOULEMEKONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOULEMEKONG / A /",
              "voters": 63
            }
          ],
          "MEFOUBI": [
            {
              "station": "A USINE A CAFE DE MEFOUBI / A / A",
              "voters": 75
            },
            {
              "station": "USINE A CAFE DE MEFOUBI / A",
              "voters": 75
            },
            {
              "station": "USINE A CAFE DE MEFOUBI / A",
              "voters": 75
            },
            {
              "station": "USINE A CAFE DE MEFOUBI / A",
              "voters": 75
            },
            {
              "station": "USINE A CAFE DE MEFOUBI / A",
              "voters": 75
            }
          ],
          "EMVONG": [
            {
              "station": "ECOLE PUBLIQUE DE EMVONG / A / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE EMVONG / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE EMVONG / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE EMVONG / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE EMVONG / A",
              "voters": 33
            }
          ],
          "MEKODO MVEMNKO": [
            {
              "station": "HANGAR MEKODO / A",
              "voters": 78
            },
            {
              "station": "HANGAR MEKODO / A",
              "voters": 78
            },
            {
              "station": "HANGAR MEKODO / A",
              "voters": 78
            },
            {
              "station": "HANGAR MEKODO / A",
              "voters": 78
            },
            {
              "station": "HANGAR MEKODO / A",
              "voters": 78
            }
          ],
          "MEKAK": [
            {
              "station": "ECOLE PUBLIQUE DE MEKAK / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE MEKAK / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE MEKAK / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE MEKAK / A",
              "voters": 33
            },
            {
              "station": "ECOLE PUBLIQUE DE MEKAK / A",
              "voters": 33
            }
          ],
          "MENGANG": [
            {
              "station": "ECOLE PUBLIQUE DE MENGANG / A / A",
              "voters": 85
            },
            {
              "station": "ECOLE PUBLIQUE DE MENGANG / A",
              "voters": 85
            },
            {
              "station": "ECOLE PUBLIQUE DE MENGANG / A",
              "voters": 85
            },
            {
              "station": "ECOLE PUBLIQUE DE MENGANG / A",
              "voters": 85
            }
          ],
          "EDOU CHEFFERIE": [
            {
              "station": "HANGAR CHEFFERIE D'EDOU / A / A",
              "voters": 68
            },
            {
              "station": "HANGAR CHEFFERIE D'EDOU / A",
              "voters": 68
            },
            {
              "station": "HANGAR CHEFFERIE D'EDOU / A",
              "voters": 68
            },
            {
              "station": "HANGAR CHEFFERIE D'EDOU / A",
              "voters": 68
            }
          ],
          "NKOUL BING": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUL BING / A",
              "voters": 53
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOUL BING / A",
              "voters": 53
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOUL BING / A",
              "voters": 53
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOUL BING / A",
              "voters": 53
            }
          ],
          "NGOULEMEKONG YENGONO": [
            {
              "station": "ECOLE PUBLIQUE DE NKOULEMEKONG YENGONO",
              "voters": 76
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOULEMEKONG YENGONO",
              "voters": 76
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOULEMEKONG YENGONO",
              "voters": 76
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOULEMEKONG YENGONO",
              "voters": 76
            }
          ]
        }
      },
      "NYONG-ET-SO'O": {
        "AKOEMAN": {
          "AKOAZOLE": [
            {
              "station": "ECOLE PUBLIQUE D'AKOAZOLE / A",
              "voters": 101
            }
          ],
          "AKOEMAN": [
            {
              "station": "ECOLE PUBLIQUE D'AKOEMAN / A",
              "voters": 202
            },
            {
              "station": "ECOLE PUBLIQUE D'AKOEMAN / B",
              "voters": 183
            }
          ],
          "AKOM": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM / A",
              "voters": 141
            }
          ],
          "AWAE-FALLA": [
            {
              "station": "ECOLE PUBLIQUE D'AWAE - FALLA / A",
              "voters": 115
            }
          ],
          "BIFINDI": [
            {
              "station": "ECOLE MATERNELLE DE BIFINDI / A",
              "voters": 179
            }
          ],
          "EKONONG": [
            {
              "station": "ECOLE PUBLIQUE DEKONONG / A",
              "voters": 261
            }
          ],
          "MANENGOMBO": [
            {
              "station": "CASE A PALABRE DE MANENGOMBO / A",
              "voters": 158
            }
          ],
          "MELEN": [
            {
              "station": "ECOLE PUBLIQUE DE MELEN / A",
              "voters": 184
            }
          ],
          "NDONKO": [
            {
              "station": "NDONKO EGLISE EPC / A",
              "voters": 46
            }
          ],
          "NGON": [
            {
              "station": "ECOLE PUBLIQUE DE NGON / A",
              "voters": 82
            }
          ],
          "NGOMBOU": [
            {
              "station": "ECOLE PUBLIQUE DE NGOMBOU / A",
              "voters": 193
            }
          ],
          "NKOL-AKOA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-AKOA / A",
              "voters": 119
            }
          ],
          "NKOLMEYOS": [
            {
              "station": "CASE A PALABRE DE NKOLMEYOS / A",
              "voters": 167
            }
          ],
          "NYEP": [
            {
              "station": "COOPERATIVE DE NYEPT / A",
              "voters": 284
            }
          ],
          "SEP": [
            {
              "station": "ECOLE PASTORALE DE SEP / A",
              "voters": 149
            },
            {
              "station": "EGLISE CATHOLIQUE DE SEP / A",
              "voters": 65
            }
          ],
          "ZAMDA": [
            {
              "station": "ECOLE PUBLIQUE D'AKOSMAN 3-ZAMDA / A",
              "voters": 65
            }
          ],
          "BETH": [
            {
              "station": "ECOLE PUBLIQUE DE BETH / A",
              "voters": 27
            }
          ]
        },
        "DZENG": {
          "ABAM": [
            {
              "station": "POLLING STATION",
              "voters": 100
            }
          ],
          "ABANG I": [
            {
              "station": "ECOLE CATHOLIQUE ENDOLUM / A",
              "voters": 163
            }
          ],
          "ABANG II": [
            {
              "station": "CASE A PALABRE D'ABANG II / A",
              "voters": 49
            }
          ],
          "ADOUM": [
            {
              "station": "ECOLE PUBLIQUE EKINGUILI / A",
              "voters": 26
            }
          ],
          "ADZAP ELON": [
            {
              "station": "CASE A PALABRE IKON MEDZAP / A",
              "voters": 16
            },
            {
              "station": "CASE A PALABRE DE NKONG - MEDZAP / A",
              "voters": 148
            }
          ],
          "AKAYA": [
            {
              "station": "ECOLE CATHOLIQUE DE ZOASSI / A",
              "voters": 35
            }
          ],
          "AKAK": [
            {
              "station": "ECOLE PUBLIQUE AKAK / A",
              "voters": 140
            }
          ],
          "ASSOK": [
            {
              "station": "ECOLE PUBLIQUE DASSOK / A",
              "voters": 272
            }
          ],
          "ATEGA": [
            {
              "station": "ECOLE PUBLIQUE DATEGA / A",
              "voters": 190
            }
          ],
          "AVELE": [
            {
              "station": "CASE A PALABRE D'AVELE / A",
              "voters": 217
            }
          ],
          "AYAN": [
            {
              "station": "CASE A PALABRE D'AVANE / A",
              "voters": 69
            },
            {
              "station": "ECOLE PUBLIQUE DAYANI / A",
              "voters": 172
            }
          ],
          "BEMBE": [
            {
              "station": "ECOLE PUBLIQUE DE BEMBE / A",
              "voters": 138
            }
          ],
          "BIROK": [
            {
              "station": "ECOLE PUBLIQUE DE BIROK / A",
              "voters": 133
            }
          ],
          "BYEBE": [
            {
              "station": "ECOLE PUBLIQUE DE BYEBE / A",
              "voters": 119
            }
          ],
          "DADO": [
            {
              "station": "ECOLE PUBLIQUE DE DADO / A",
              "voters": 146
            }
          ],
          "DZENG-LAC": [
            {
              "station": "CASE CHAPPELLE DE DADO - LAC / A",
              "voters": 117
            }
          ],
          "DZENG-VILLAGE": [
            {
              "station": "COOPERATIVE DE DZENG - VILLAGE / A",
              "voters": 117
            }
          ],
          "DZENG-VILLE": [
            {
              "station": "EXPL. CERCLE MUNICIPAL DE DZENG -VILLE",
              "voters": 267
            },
            {
              "station": "EXPL. CERCLE MUNICIPAL DE DZENG -VILLE",
              "voters": 103
            }
          ],
          "EBABOT": [
            {
              "station": "B CASE CHAPPELLE DEBOT / A",
              "voters": 131
            }
          ],
          "EBOK-NKOU": [
            {
              "station": "ECOLE PUBLIQUE DEBOT - NKOU / A",
              "voters": 137
            }
          ],
          "EBOMKOP": [
            {
              "station": "CASE CHAPPELLE DEBOMKOP II / A",
              "voters": 79
            }
          ],
          "EBOMKOP II": [
            {
              "station": "ECOLE PUBLIQUE DE KOMASSI / A",
              "voters": 38
            }
          ],
          "EFKANGA": [
            {
              "station": "ECOLE PUBLIQUE DEKANGA / A",
              "voters": 52
            }
          ],
          "EKINGULI": [
            {
              "station": "ECOLE PUBLIQUE DEKINGULI / A",
              "voters": 96
            }
          ],
          "ENDOUM": [
            {
              "station": "CASE A PALABRE PENDOUM / A",
              "voters": 94
            }
          ],
          "ESSONG": [
            {
              "station": "ECOLE PUBLIQUE ABAM / A",
              "voters": 80
            }
          ],
          "FON": [
            {
              "station": "MAGASIN COOPERATIVE DE FON / A",
              "voters": 113
            }
          ],
          "KAT": [
            {
              "station": "ECOLE PUBLIQUE KAT DE FON / A",
              "voters": 96
            }
          ],
          "KOMASSI": [
            {
              "station": "CETIC DE KOMASSI / A",
              "voters": 116
            }
          ],
          "MBAH": [
            {
              "station": "CASE A PALABRE DE MBAH / A",
              "voters": 33
            }
          ],
          "NGAT II": [
            {
              "station": "DISPENSAIRE MBANGA I / A",
              "voters": 74
            }
          ],
          "MBANGA II": [
            {
              "station": "CASE A PALABRE DE MBANGA II / A",
              "voters": 64
            }
          ],
          "MEBENGADZOMO": [
            {
              "station": "DISPENSAIRE DE MEBENGADZOMO / A",
              "voters": 120
            }
          ],
          "MEKOM": [
            {
              "station": "CASE A PALABRE ME KOM / A",
              "voters": 111
            }
          ],
          "MINIFOMOUMOU": [
            {
              "station": "CASE A PALABRE MINIFOMOUMOU / A",
              "voters": 72
            }
          ],
          "NDZANDOUAN": [
            {
              "station": "ECOLE PUBLIQUE DE NDZANDOUAN / A",
              "voters": 114
            }
          ],
          "NGAT I": [
            {
              "station": "ECOLE PUBLIQUE DE NGAT I / A",
              "voters": 204
            }
          ],
          "NGOLUMINANGA": [
            {
              "station": "CASE CHAPPELLE DE NGOLUMINANGA / A",
              "voters": 81
            }
          ],
          "NKOYEEN": [
            {
              "station": "CASE A PALABRE DE NKOYEEN / A",
              "voters": 87
            }
          ],
          "NKOLVMONDO": [
            {
              "station": "CASE A PALABRE DE NKOLVMONDO / A",
              "voters": 61
            }
          ],
          "NKOLUNGQUET": [
            {
              "station": "DISPENSAIRE DE KOMASSI / A",
              "voters": 104
            }
          ],
          "NKONGDONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKONGDONG / A",
              "voters": 117
            }
          ],
          "OBOFIANGA": [
            {
              "station": "EGLISE ORTHODOXE DOBOFIANGA / A",
              "voters": 63
            }
          ],
          "OLOM": [
            {
              "station": "ECOLE PUBLIQUE DOLOM / A",
              "voters": 98
            }
          ],
          "OMGBANG": [
            {
              "station": "CASE CHAPPELLE D'OMG BANG / A",
              "voters": 58
            }
          ],
          "OMGSANG": [
            {
              "station": "CASE A PALABRE DE ZILLI / A",
              "voters": 100
            }
          ],
          "ZOASSI": [
            {
              "station": "COLLEGE CATHOLIQUE DE ZOASSI / A",
              "voters": 61
            }
          ],
          "OTOTGAN": [
            {
              "station": "ECOLE PUBLIQUE D'OTOTGAN / A",
              "voters": 64
            },
            {
              "station": "ECOLE PUBLIQUE / OTOTGAN / A",
              "voters": 64
            }
          ]
        },
        "MBALMAYO": {
          "ABANG": [
            {
              "station": "SALLE COOPERATIVE D'ABANG / A",
              "voters": 214
            }
          ],
          "AKOMETAM": [
            {
              "station": "ECOLE PUBLIQUE D'AKOMETAM / A",
              "voters": 334
            },
            {
              "station": "ECOLE PUBLIQUE D'AKOMETAM / B",
              "voters": 99
            }
          ],
          "AKOMNYADA I": [
            {
              "station": "CASE A PALABRE AKOMNYADA I / A",
              "voters": 95
            }
          ],
          "AKOMNYADA II": [
            {
              "station": "ECOLE PUBLIQUE PASSANZO A / A",
              "voters": 205
            }
          ],
          "ASSANZO A": [
            {
              "station": "ECOLE PUBLIQUE D'AVE BE / A",
              "voters": 203
            }
          ],
          "AVEBE": [
            {
              "station": "ECOLE PUBLIQUE DAVEBE / A",
              "voters": 221
            }
          ],
          "BAKASSI, DEPOT": [
            {
              "station": "DEL. AFFAIRES SOCIALES DU NYONG ET",
              "voters": 330
            }
          ],
          "BIYALLA I": [
            {
              "station": "SO'O / A",
              "voters": 140
            }
          ],
          "BIYAN I": [
            {
              "station": "ECOLE PUBLIQUE DE BIYAN / A",
              "voters": 75
            }
          ],
          "BIYAN II": [
            {
              "station": "CASE CHAPPELLE CARREFOUR 7 MANGUIERS",
              "voters": 337
            }
          ],
          "CENTRE ADMIN ET COMMERCIAL": [
            {
              "station": "ESPLANADE HOTEL DE VILLE DE MBALMAY /",
              "voters": 337
            },
            {
              "station": "A ESPLANADE HOTEL DE VILLE DE MBALMAY /",
              "voters": 258
            },
            {
              "station": "B ESPLANADE HOTEL DE VILLE DE MBALMAY /",
              "voters": 229
            },
            {
              "station": "D",
              "voters": 323
            }
          ],
          "EKOMBITIE": [
            {
              "station": "ECOLE PUBLIQUE DEKOMBITIE / A",
              "voters": 338
            }
          ],
          "FAKELE I": [
            {
              "station": "ECOLE PUBLIQUE FAKELE I / A",
              "voters": 61
            },
            {
              "station": "ESPLANADE CHEFFERIE DE FAKELE / A",
              "voters": 63
            }
          ],
          "MBEDOUMOU I": [
            {
              "station": "ECOLE PUBLIQUE DE MBEDOUMOU I / A",
              "voters": 233
            }
          ],
          "MBCOCKOLOU": [
            {
              "station": "COLLEGE NO A / A",
              "voters": 337
            },
            {
              "station": "COLLEGE NO A / B",
              "voters": 271
            },
            {
              "station": "COLLEGE NO A / C",
              "voters": 259
            },
            {
              "station": "COLLEGE NO A / D",
              "voters": 257
            },
            {
              "station": "COLLEGE NO A / E",
              "voters": 257
            },
            {
              "station": "COLLEGE NO A / F",
              "voters": 234
            },
            {
              "station": "COLLEGE NO A / G",
              "voters": 378
            },
            {
              "station": "COLLEGE NO A / H",
              "voters": 171
            }
          ],
          "MECANICIEN SACAFOM": [
            {
              "station": "ECOLE SAINT-ROSAIRE / B",
              "voters": 200
            }
          ],
          "NEW-TOWN": [
            {
              "station": "ECOLE SAINT-ROSAIRE / C",
              "voters": 205
            },
            {
              "station": "ECOLE PUBLIQUE NEW-TOWN / A",
              "voters": 407
            },
            {
              "station": "ECOLE PUBLIQUE NEW-TOWN / B",
              "voters": 261
            },
            {
              "station": "ECOLE PUBLIQUE NEW-TOWN / C",
              "voters": 295
            },
            {
              "station": "ECOLE PUBLIQUE NEW-TOWN / D",
              "voters": 230
            },
            {
              "station": "ECOLE PUBLIQUE NEW-TOWN / E",
              "voters": 280
            },
            {
              "station": "ECOLE MATERNELLE / A",
              "voters": 292
            },
            {
              "station": "ECOLE MATERNELLE EPC / A",
              "voters": 275
            },
            {
              "station": "ECOLE MATERNELLE EPC / B",
              "voters": 285
            },
            {
              "station": "ECOLE MATERNELLE EPC / C",
              "voters": 265
            },
            {
              "station": "ECOLE MATERNELLE EPC / D",
              "voters": 265
            },
            {
              "station": "ECOLE MATERNELLE EPC / E",
              "voters": 265
            },
            {
              "station": "ECOLE MATERNELLE EPC / F",
              "voters": 277
            },
            {
              "station": "ECOLE MATERNELLE EPC / G",
              "voters": 378
            },
            {
              "station": "ECOLE MATERNELLE EPC / H",
              "voters": 231
            },
            {
              "station": "ECOLE MATERNELLE EPC / I",
              "voters": 378
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / J",
              "voters": 325
            }
          ],
          "MECANICIEN": [
            {
              "station": "ECOLE SAINT-ROSAIRE / D",
              "voters": 206
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / F",
              "voters": 182
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / G",
              "voters": 164
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / H",
              "voters": 182
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / I",
              "voters": 166
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / J",
              "voters": 259
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / K",
              "voters": 314
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / L",
              "voters": 282
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / M",
              "voters": 217
            },
            {
              "station": "ECOLE SAINT-ROSAIRE / M",
              "voters": 280
            },
            {
              "station": "LYCEE TECHNIQUE DE MBALMAYO / A",
              "voters": 294
            },
            {
              "station": "LYCEE TECHNIQUE DE MBALMAYO / B",
              "voters": 335
            },
            {
              "station": "LYCEE TECHNIQUE DE MBALMAYO / C",
              "voters": 340
            }
          ],
          "SACAFOM NEW-TOWN": [
            {
              "station": "ECOLE SAINT-ROSAIRE / E",
              "voters": 222
            }
          ],
          "MEKOMO": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOMO / A",
              "voters": 268
            }
          ],
          "MOKOLO-NORD": [
            {
              "station": "ECOLE BILINGUE DE MBALMAYO / A",
              "voters": 314
            },
            {
              "station": "ECOLE BILINGUE DE MBALMAYO / B",
              "voters": 238
            },
            {
              "station": "ECOLE BILINGUE DE MBALMAYO / C",
              "voters": 181
            },
            {
              "station": "ECOLE BILINGUE DE MBALMAYO / C",
              "voters": 407
            }
          ],
          "NGALLAN": [
            {
              "station": "COLLEGE DULO / B",
              "voters": 243
            },
            {
              "station": "COLLEGE DULO / C",
              "voters": 247
            },
            {
              "station": "COLLEGE DULO / D",
              "voters": 244
            },
            {
              "station": "COLLEGE DULO / E",
              "voters": 244
            },
            {
              "station": "COLLEGE DULO / F",
              "voters": 247
            },
            {
              "station": "COLLEGE DULO / G",
              "voters": 218
            },
            {
              "station": "COLLEGE DULO / H",
              "voters": 277
            },
            {
              "station": "COLLEGE DULO / I",
              "voters": 345
            },
            {
              "station": "COLLEGE DULO / J",
              "voters": 339
            },
            {
              "station": "E P NGALLAN / A",
              "voters": 223
            },
            {
              "station": "GSB SAINTE ANNIE / A",
              "voters": 380
            }
          ],
          "NGAT-BANE": [
            {
              "station": "COLLEGE PUBLIQUE / K NGAT-BANE",
              "voters": 336
            },
            {
              "station": "ECOLE PUBLIQUE DE NGAT-BANE / A",
              "voters": 208
            }
          ],
          "NGAT- BANE": [
            {
              "station": "ECOLE PUBLIQUE DE NGAT-BANE / A",
              "voters": 22
            }
          ],
          "NGAT- PLANTATION": [
            {
              "station": "ECOLE PUBLIQUE DE NGAT-BANE / A",
              "voters": 338
            }
          ],
          "NKOLUNGOCK I": [
            {
              "station": "LYCEE DE NKOLNGOCK I / A",
              "voters": 296
            }
          ],
          "NKOLUNGOCK II": [
            {
              "station": "LYCEE DE NKOLNGOCK I / B",
              "voters": 290
            },
            {
              "station": "LYCEE DE NKOLNGOCK I / C",
              "voters": 255
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGOCK I / D",
              "voters": 165
            },
            {
              "station": "ECOLE PUBLIQUE DE NKOUGUET",
              "voters": 251
            }
          ],
          "NKOLUNGOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNGOCK",
              "voters": 182
            }
          ],
          "NKONG-SI": [
            {
              "station": "ECOLE MATERNELLE NKONG-SI / A",
              "voters": 182
            },
            {
              "station": "ECOLE MATERNELLE NKONG-SI / B",
              "voters": 252
            },
            {
              "station": "ECOLE MATERNELLE NKONG-SI / C",
              "voters": 178
            },
            {
              "station": "ECOLE PUBLIQUE DE NKONG-SI / D",
              "voters": 120
            }
          ],
          "NKOUMADZAP": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUMADZAP / A",
              "voters": 251
            }
          ],
          "NSENG-NSENG / A": [
            {
              "station": "ECOLE PUBLIQUE DE NSENG-NSENG / A",
              "voters": 232
            },
            {
              "station": "ESPLANADE CHEFFERIE NSENG-NSENG I / A",
              "voters": 239
            }
          ],
          "NSENG-NLONG II": [
            {
              "station": "EXPLANADE CHEFFERIE NSENG-NLONG II / A",
              "voters": 304
            }
          ],
          "OBECK": [
            {
              "station": "ECOLE PUBLIQUE DOBECK / B",
              "voters": 391
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / C",
              "voters": 398
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / C",
              "voters": 398
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / D",
              "voters": 251
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / E",
              "voters": 268
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / F",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / G",
              "voters": 240
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / G",
              "voters": 263
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / H",
              "voters": 273
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / I",
              "voters": 353
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / J",
              "voters": 353
            },
            {
              "station": "ECOLE PUBLIQUE DOBECK / K",
              "voters": 358
            }
          ],
          "OYACK": [
            {
              "station": "ECOLE PUBLIQUE DOYACK / A",
              "voters": 288
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / B",
              "voters": 283
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / C",
              "voters": 253
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / D",
              "voters": 251
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / E",
              "voters": 262
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / F",
              "voters": 261
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / G",
              "voters": 178
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / H",
              "voters": 297
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / I",
              "voters": 219
            },
            {
              "station": "ECOLE PUBLIQUE DOYACK / J",
              "voters": 247
            },
            {
              "station": "ECOLE DES EAUX ET FORETS / A",
              "voters": 247
            },
            {
              "station": "ECOLE DES EAUX ET FORETS / B",
              "voters": 258
            },
            {
              "station": "ECOLE DES EAUX ET FORETS / C",
              "voters": 276
            },
            {
              "station": "ECOLE DES EAUX ET FORETS / D",
              "voters": 326
            },
            {
              "station": "ECOLE DES EAUX ET FORETS / E",
              "voters": 330
            }
          ],
          "ZAMAKOE": [
            {
              "station": "CASE CHAPPELLE DE ZAMAKOE I / A",
              "voters": 219
            }
          ],
          "ZAMAKOE II": [
            {
              "station": "ECOLE PUBLIQUE DE ZAMAKOE II / A",
              "voters": 199
            }
          ],
          "ZOATOUPSI": [
            {
              "station": "ECOLE PUBLIQUE DE ZOULOUATOUPSI / A",
              "voters": 151
            }
          ]
        },
        "MENGUEME": {
          "ADZAP": [
            {
              "station": "ECOLE PUBLIQUE D'ADZAP/A",
              "voters": 138
            }
          ],
          "AMBASSADE, MENGUEME, NKOT KIP": [
            {
              "station": "ECOLE CATHOLIQUE DE MENGUEME/A",
              "voters": 326
            },
            {
              "station": "ECOLE CATHOLIQUE DE MENGUEME/B",
              "voters": 198
            },
            {
              "station": "ECOLE CATHOLIQUE DE MENGUEME/C",
              "voters": 264
            }
          ],
          "BENEBALOT 1": [
            {
              "station": "ECOLE PUBLIQUE DE BENEBALOTI/A",
              "voters": 174
            }
          ],
          "BENEBALOT 2": [
            {
              "station": "ECOLE PUBLIQUE DE BENEBALOT II/A",
              "voters": 86
            },
            {
              "station": "ZOK BEFAM ECOLINE/A",
              "voters": 65
            }
          ],
          "BENEBALOT 3, MFONGO": [
            {
              "station": "CASE CHAPELLE DE MFONGO/A",
              "voters": 116
            }
          ],
          "BILON": [
            {
              "station": "ECOLE PUBLIQUE DE BILON/A",
              "voters": 90
            }
          ],
          "EBOGO": [
            {
              "station": "ECOLE PUBLIQUE D'EBOGO/A",
              "voters": 163
            }
          ],
          "ETAM-AKOK": [
            {
              "station": "CASE A PALABRE D'ETAM-AKOK/A",
              "voters": 43
            }
          ],
          "EYIBOTO": [
            {
              "station": "ECOLE PUBLIQUE D'EYIBOTO/A",
              "voters": 80
            }
          ],
          "FALASSI": [
            {
              "station": "ECOLE PUBLIQUE DE FALASSI/A",
              "voters": 151
            }
          ],
          "KAMBA": [
            {
              "station": "ECOLE PUBLIQUE DE KAMBA/A",
              "voters": 105
            }
          ],
          "MEBOMEZOA": [
            {
              "station": "ECOLE PUBLIQUE DE MEBOMEZOA/A",
              "voters": 247
            }
          ],
          "MEKAMBA": [
            {
              "station": "CASE CHAPELLE DE MEKAMBA/A",
              "voters": 97
            }
          ],
          "MENDOCK, OSSOESSAM 2, OSSOESSAM 3, OSSOESSAM 4, OSSOESSAM CENTRE": [
            {
              "station": "CES D'OSSOESSAM/A",
              "voters": 270
            }
          ],
          "MFIDA": [
            {
              "station": "ECOLE PUBLIQUE DE MFIDA/A",
              "voters": 141
            }
          ],
          "MIMETALA": [
            {
              "station": "CASE CHAPELLE DE MIMETALA/A",
              "voters": 172
            }
          ],
          "MINLABA": [
            {
              "station": "ECOLE CATHOLIQUE DE MINLABA/A",
              "voters": 164
            }
          ],
          "MINTSANGOM": [
            {
              "station": "ECOLE PUBLIQUE DE MINTSANGOM/A",
              "voters": 73
            }
          ],
          "MVAM ZAMBA, MVAMBOT, PONT SO'O": [
            {
              "station": "ECOLE PUBLIQUE DE PONT SO'O/A",
              "voters": 200
            }
          ],
          "NKOLATOM, OSSOESSAM 2": [
            {
              "station": "MENUISERIE MUNICIPALE D'OSSOESSAM/A",
              "voters": 102
            }
          ],
          "NKOL-EBAE 1, NKOL-EBAE CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOL-EBAE/A",
              "voters": 112
            }
          ],
          "NKOL-EBAE 2": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOL-EBAE/A",
              "voters": 94
            }
          ],
          "NKOL-EBAE 3, NKOLMEYOS": [
            {
              "station": "CASE CHAP. ATANGANA BON.DE NKOLMEYOS/A",
              "voters": 44
            }
          ],
          "NNOM-NNAM": [
            {
              "station": "ECOLE PUBLIQUE DE NNOM-NNAM/A",
              "voters": 97
            }
          ],
          "NSILI, OSSOESSAM 1, OSSOESSAM 2": [
            {
              "station": "ECOLE CATHOLIQUE D'OSSOESSAM/A",
              "voters": 75
            }
          ],
          "NTANG": [
            {
              "station": "ECOLE PUBLIQUE DE NTANG/A",
              "voters": 201
            }
          ],
          "NYEMEYONG": [
            {
              "station": "ECOLE PUBLIQUE DE NYEMEYONG/A",
              "voters": 157
            }
          ],
          "NYIMI": [
            {
              "station": "ECOLE PUBLIQUE DE NYIMI/A",
              "voters": 115
            }
          ],
          "SOUMASSI": [
            {
              "station": "CASE A PALABRE DE SOUMASSI/A",
              "voters": 69
            }
          ],
          "SOUMAYOP": [
            {
              "station": "CASE A PALABRE DE SOUMAYOP/A",
              "voters": 64
            }
          ],
          "TING MELEN": [
            {
              "station": "ECOLE PUBLIQUE DE TING MELEN/A",
              "voters": 116
            }
          ],
          "YENESSI": [
            {
              "station": "ECOLE PUBLIQUE YENESSI/A",
              "voters": 160
            }
          ]
        },
        "NGOMEDZAP": {
          "ABANG AKONGO": [
            {
              "station": "ECOLE CATHOLIQUE D'ABANG AKONGO/A",
              "voters": 73
            }
          ],
          "ABANG BETSENGA": [
            {
              "station": "ECOLE PUBLIQUE D'ABANG BETSENGA/A",
              "voters": 194
            }
          ],
          "ABOD MVENG": [
            {
              "station": "ECOLE PUBLIQUE D'ABOD MVENG/A",
              "voters": 280
            }
          ],
          "ADZAP": [
            {
              "station": "ECOLE PUBLIQUE D'ADZAP/A",
              "voters": 263
            }
          ],
          "AKAK": [
            {
              "station": "ECOLE PUBLIQUE D'AKAK/A",
              "voters": 89
            }
          ],
          "AKOK": [
            {
              "station": "CASE CHAPELLE D'AKOK/A",
              "voters": 244
            }
          ],
          "AKONGO I": [
            {
              "station": "CASE A PALABRE D'AKONGO I/A",
              "voters": 138
            }
          ],
          "AKONGO II, AKONGO III": [
            {
              "station": "ECOLE PUBLIQUE D'AKONGO III/A",
              "voters": 148
            }
          ],
          "ANGONFEME": [
            {
              "station": "ECOLE PUBLIQUE D'ANGONFEME/A",
              "voters": 267
            }
          ],
          "ASSIE": [
            {
              "station": "ECOLE PUBLIQUE D'ASSIE/A",
              "voters": 174
            }
          ],
          "ASSOCK": [
            {
              "station": "CASE A PALABRE D'ASSOCK/A",
              "voters": 106
            }
          ],
          "AYENE": [
            {
              "station": "CASE A PALABRE D'AYENE/A",
              "voters": 83
            }
          ],
          "EBAMINAL": [
            {
              "station": "CASE A PALABRE D'EBAMINAL/A",
              "voters": 165
            },
            {
              "station": "Ε.Ρ ΕΒΑMINAL/A",
              "voters": 53
            }
          ],
          "EKEKAM, MBABEWA": [
            {
              "station": "CASE CHAPELLE DE MBABEWA/A",
              "voters": 157
            }
          ],
          "EKOUDBESSANDA": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUDBESSANDA/A",
              "voters": 94
            }
          ],
          "EKOUDENDI": [
            {
              "station": "CES D'EKOUDENDI/A",
              "voters": 336
            },
            {
              "station": "CES D'EKOUDENDI/B",
              "voters": 44
            }
          ],
          "EKOUMEYECK": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUMEYECK/A",
              "voters": 203
            }
          ],
          "EKOUMIKONG, NGOMEDZAP, NGOMEDZAP VILLE, QUARTIER LATIN, QUARTIER ST MICHEL": [
            {
              "station": "ECOLE BILINGUE DE NGOMEDZAP/A",
              "voters": 267
            }
          ],
          "KAMA": [
            {
              "station": "ECOLE PUBLIQUE DE KAMA/A",
              "voters": 225
            }
          ],
          "KOUMASSI": [
            {
              "station": "CASE A PALABRE DE KOUMASSI/A",
              "voters": 179
            }
          ],
          "LEPSE, OSSOEBEKADA": [
            {
              "station": "ECOLE PUBLIQUE DE LEPSE/A",
              "voters": 159
            }
          ],
          "LOUM": [
            {
              "station": "CASE CHAPELLE DE LOUM/A",
              "voters": 104
            }
          ],
          "MBENG I": [
            {
              "station": "ECOLE PUBLIQUE DE MBENG1/A",
              "voters": 118
            }
          ],
          "MBENG II": [
            {
              "station": "CASE CHAPELLE DE MBENG II/A",
              "voters": 62
            }
          ],
          "MELEN": [
            {
              "station": "CASE A PALABRE DE MELEN/A",
              "voters": 78
            }
          ],
          "MENGUEME NORD": [
            {
              "station": "ECOLE PUBLIQUE DE MENGUEME NORD/A",
              "voters": 112
            }
          ],
          "METOMBA": [
            {
              "station": "ECOLE PUBLIQUE DE METOMBA/A",
              "voters": 139
            }
          ],
          "MEVAMEBOT": [
            {
              "station": "CHAPELLE ADVENTISTE DE MEVAMEBOT/A",
              "voters": 65
            }
          ],
          "NDICKA": [
            {
              "station": "CASE CHAPELLE DE NDICKA/A",
              "voters": 90
            }
          ],
          "NGOMEDZAP VILLAGE": [
            {
              "station": "GARE ROUTIERE DE NGOMEDZAP/A",
              "voters": 44
            },
            {
              "station": "LYCEE TECHNIQUE DE NGOMEDZAP A/A",
              "voters": 144
            }
          ],
          "NGOMEDZAP, NGOMEDZAP VILLE, QUARTIER LATIN.": [
            {
              "station": "ECOLE PUBLIQUE DE NGOMEDZAP/A",
              "voters": 345
            }
          ],
          "NGOULNGAL": [
            {
              "station": "ECOLE PUBLIQUE DE NGOULNGAL/A",
              "voters": 144
            }
          ],
          "NKOABE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOABE/A",
              "voters": 220
            }
          ],
          "NKOAMBE": [
            {
              "station": "CASE A PALABRE DE NKOAMBE/A",
              "voters": 95
            }
          ],
          "NKOLBEWAI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLBEWAI/A",
              "voters": 328
            }
          ],
          "NKOLBEWA II": [
            {
              "station": "CASE CHAPELLE DE NKOLBEWA II/A",
              "voters": 209
            }
          ],
          "NKOLBEWA III": [
            {
              "station": "CENTRE DE GROUPAGE DE NKOLBEWA III/A",
              "voters": 183
            }
          ],
          "NKOLKOUMOU": [
            {
              "station": "CASE CHAPELLE DE NKOLKOUMOU/A",
              "voters": 67
            }
          ],
          "NKOLMEYANG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLMEYANG/A",
              "voters": 253
            }
          ],
          "NKOLNGOCK": [
            {
              "station": "ECOLE CATHOLIQUE DE NKOLNGOCK/A",
              "voters": 119
            }
          ],
          "NKONGNEN I": [
            {
              "station": "ECOLE PUBLIQUE DE NKONGNEN I/A",
              "voters": 151
            }
          ],
          "NKONGNEN II": [
            {
              "station": "CASE CHAPELLE DE NKONGNEN II/A",
              "voters": 94
            }
          ],
          "NNOM NNAM": [
            {
              "station": "ECOLE PUBLIQUE DE NNOM NNAM/A",
              "voters": 176
            }
          ],
          "NSIMALEN": [
            {
              "station": "ECOLE PUBLIQUE DE NSIMALEN/A",
              "voters": 82
            }
          ],
          "NYENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE NYENGUE/A",
              "voters": 108
            }
          ],
          "ONANA MBESSA": [
            {
              "station": "ECOLE PUBLIQUE D'ONANA MBESSA/A",
              "voters": 46
            }
          ],
          "OSSOEBEKADA, OSSOEBIKОВО": [
            {
              "station": "ECOLE PUBLIQUE D'OSSOEBIKOBO/A",
              "voters": 142
            }
          ],
          "OSSOEBEMVA": [
            {
              "station": "ECOLE PUBLIQUE D'OSSOEBEMVA/A",
              "voters": 129
            }
          ],
          "QUARTIER CENTRE URBAIN, QUARTIER LYCEE BILINGUE, QUARTIER ZIMBABWE": [
            {
              "station": "TRIBUNAL DE NGOMEDZAP/A",
              "voters": 295
            },
            {
              "station": "TRIBUNAL DE NGOMEDZAP/B",
              "voters": 44
            }
          ],
          "TIGA": [
            {
              "station": "ECOLE PUBLIQUE DE TIGA/A",
              "voters": 234
            }
          ],
          "NGOMEDZAP, QUARTIER LATIN,": [
            {
              "station": "E.P GROUPE II DE NGOMEDZAP/A",
              "voters": 275
            }
          ],
          "EKEKAM": [
            {
              "station": "ECOLE PUBLIQUE D'EKEKAM/A/A",
              "voters": 34
            }
          ],
          "NKOULGOUI": [
            {
              "station": "EPDE DE NKOULNGOUIA/A/A",
              "voters": 48
            }
          ],
          "OSSOENGAH": [
            {
              "station": "EP D'OSSOENGAH/A/A",
              "voters": 132
            }
          ]
        },
        "NKOLMETET": {
          "AWAE": [
            {
              "station": "ECOLE PUBLIQUE D'AWAE/A",
              "voters": 130
            },
            {
              "station": "CASE A PALABRE DE KI'I-SI/A",
              "voters": 177
            },
            {
              "station": "CASE A PALABRE D'OTONG MINLONG-SI/A",
              "voters": 127
            }
          ],
          "AYENE": [
            {
              "station": "ECOLE PUBLIQUE D'AYENE/A",
              "voters": 201
            }
          ],
          "BIKOKO": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOKO/A",
              "voters": 149
            }
          ],
          "BIZOCK": [
            {
              "station": "ECOLE PUBLIQUE DE BIZOCK/A",
              "voters": 244
            }
          ],
          "EBOMSII": [
            {
              "station": "CASE A PALABRE D'EBOMSII/A",
              "voters": 200
            }
          ],
          "EBOMSI II": [
            {
              "station": "ECOLE PUBLIQUE DE EBOMSI II/A",
              "voters": 140
            }
          ],
          "EFOULAN": [
            {
              "station": "LYCEE D'EFOULAN/A",
              "voters": 103
            },
            {
              "station": "ECOLE PUBLIQUE D'EFOULAN/A",
              "voters": 174
            }
          ],
          "EKEKAM": [
            {
              "station": "CASE A PALABRE D'EKEKAM/A",
              "voters": 98
            }
          ],
          "ELENDE": [
            {
              "station": "CASE A PALABRE D'ELENDE / A",
              "voters": 70
            }
          ],
          "ENDENGUE": [
            {
              "station": "CENTRE DE SANTE D'ENDENGUE/A",
              "voters": 72
            },
            {
              "station": "CASE A PALABRE D'ENDENGUE/A",
              "voters": 75
            }
          ],
          "KONDESSONG": [
            {
              "station": "ECOLE PUBLIQUE DE KONDESSONG./A",
              "voters": 116
            },
            {
              "station": "CASE A PALABRE D'ATOM/A",
              "voters": 67
            }
          ],
          "MBEDOUMOU II": [
            {
              "station": "CASE A PALABRE DE MBEDOUMOU II/A",
              "voters": 90
            }
          ],
          "MBEGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBEGA/A",
              "voters": 143
            }
          ],
          "MENGUEME-BANE": [
            {
              "station": "ECOLE PUBLIQUE DE MENGUEME-BANE/A",
              "voters": 200
            }
          ],
          "METET-CENTRE": [
            {
              "station": "CASE A PALABRE DE METET CENTRE/A",
              "voters": 235
            },
            {
              "station": "CASE A PALABRE NGOANTET NKONFOUM/A",
              "voters": 103
            },
            {
              "station": "CASE A PALABRE DE NKONGMEKAK./Α",
              "voters": 146
            }
          ],
          "NGOANTETI": [
            {
              "station": "ECOLE PUBLIQUE NGOANTET 1I/A",
              "voters": 228
            }
          ],
          "NGOANTET II": [
            {
              "station": "ECOLE PUBLIQUE DE NGOATET II/A",
              "voters": 139
            },
            {
              "station": "CASE A PALABRE MEYO VILLE/A",
              "voters": 120
            },
            {
              "station": "CASE A PALABRE ONYIE-SI/A",
              "voters": 94
            },
            {
              "station": "CASE A PALABRE DE MEKOM-SI/A",
              "voters": 70
            }
          ],
          "NKOLEKABELI": [
            {
              "station": "CASE A PALABRE NKOLEKABELI/A",
              "voters": 185
            }
          ],
          "NKOLMETET": [
            {
              "station": "TRIBUNAL COUTUMIER/A",
              "voters": 254
            },
            {
              "station": "TRIBUNAL COUTUMIER/B",
              "voters": 150
            },
            {
              "station": "ECOLE PILOTE/A",
              "voters": 130
            },
            {
              "station": "CETIC D'AZEM-SI/A",
              "voters": 118
            }
          ],
          "EBOMSI I, NKOLMETET": [
            {
              "station": "SAR/SM/A",
              "voters": 203
            }
          ],
          "NKOLNGUI": [
            {
              "station": "CASE A PALABRE DE NKOLNGUI/A",
              "voters": 126
            }
          ],
          "NKOLOVENG": [
            {
              "station": "CASE A PALABRE DE NKOLOVENG/A",
              "voters": 96
            }
          ],
          "NKOLTOMBO": [
            {
              "station": "CASE A PALABRE DE NKOLTOMBO/A",
              "voters": 148
            }
          ],
          "NKOLYA I": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLYA I/A",
              "voters": 184
            }
          ],
          "AWAE, NKOLYA I": [
            {
              "station": "CASE A PALABRE LA FOE/A",
              "voters": 181
            }
          ],
          "AWAE, NKOLYA II": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLYA II/A",
              "voters": 186
            }
          ],
          "NKOLYA II": [
            {
              "station": "CASE A PALABRE DE NKOLNGOCK/A",
              "voters": 84
            },
            {
              "station": "CASE A PALABRE MBEME-SI/A",
              "voters": 105
            }
          ],
          "NKOLYA III": [
            {
              "station": "CASE A PALABRE DE NKOLYA III/A",
              "voters": 114
            }
          ],
          "NKOMVANA": [
            {
              "station": "CASE A PALABRE DE NKOMVANA/A",
              "voters": 105
            }
          ],
          "NSESSOUGOU": [
            {
              "station": "ECOLE PUB. DE NKOLMBONG/A",
              "voters": 169
            }
          ],
          "OBOUT": [
            {
              "station": "ECOLE CATHOLIQUE D'OBOUT/A",
              "voters": 124
            },
            {
              "station": "CENTRE DE SANTE D'OBOUT/A",
              "voters": 155
            }
          ],
          "OLAMNDOE": [
            {
              "station": "CASE A PALABRE D'OLAMNDOE/A",
              "voters": 150
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PUBLIQUE D'OVENG/A",
              "voters": 162
            }
          ],
          "SOASSI": [
            {
              "station": "CASE A PALABRE DE SOASSI/A",
              "voters": 95
            }
          ],
          "YOP": [
            {
              "station": "ECOLE PUBLIQUE DE YOP/A",
              "voters": 133
            },
            {
              "station": "NDICK MARCHE/A",
              "voters": 101
            },
            {
              "station": "CASE A PALABRE D'AKOM/A",
              "voters": 91
            }
          ],
          "ZALOM": [
            {
              "station": "CASE A PALABRE DE ZALOM/A",
              "voters": 88
            },
            {
              "station": "CASE A PALABRE D'OYENG MEFINDI/A",
              "voters": 59
            }
          ]
        }
      }
    }
  }
};
