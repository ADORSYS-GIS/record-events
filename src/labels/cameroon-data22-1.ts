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
  "SUD": {
    "name": {
      "en": "SOUTH",
      "fr": "SUD"
    },
    "divisions": {
      "OCEAN": {
        "AKOM II": {
          "AKOM": [
            {
              "station": "CASE A PALABRE D'AKOM II VILLAGE / A",
              "voters": 1087
            }
          ],
          "VILLAGE": [
            {
              "station": "CASE A PALABRE D'AKOM II VILLAGE / A",
              "voters": 385
            }
          ],
          "EFOULAN": [
            {
              "station": "CASE A PALABRE D'EFOULAN I / A",
              "voters": 166
            }
          ],
          "NKOMAKAK1": [
            {
              "station": "CASE A PALABRE D'ESSA-NGOH / A",
              "voters": 72
            }
          ],
          "BIBOLE": [
            {
              "station": "CASE A PALABRE DE BIBOLE / A",
              "voters": 66
            }
          ],
          "NKO'ONGOP": [
            {
              "station": "CASE A PALABRE DE NKO'ONGOP / A",
              "voters": 59
            }
          ],
          "NKO'OVUMBA": [
            {
              "station": "CASE A PALABRE DE NKO'OVUMBA / A",
              "voters": 44
            }
          ],
          "NKOMAKAK": [
            {
              "station": "CASE A PALABRE DE NKOMAKAK / A",
              "voters": 150
            }
          ],
          "NLOMOTO": [
            {
              "station": "CASE A PALABRE DE NLOMOTO / A",
              "voters": 149
            }
          ],
          "TYENGUE": [
            {
              "station": "CASE A PALABRE DE TYENGUE / A",
              "voters": 100
            }
          ],
          "NDJABILOBE": [
            {
              "station": "ECOLE DES PARENTS DE NDJABILOBE / A",
              "voters": 63
            }
          ],
          "ABIETE": [
            {
              "station": "ECOLE PUBLIQUE D'ABIETE / A",
              "voters": 92
            }
          ],
          "AKOK": [
            {
              "station": "ECOLE PUBLIQUE D'AKOK / A",
              "voters": 127
            }
          ],
          "ASSOK": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM II / A",
              "voters": 291
            }
          ],
          "AWOMO": [
            {
              "station": "ECOLE PUBLIQUE D'AWOMO / A",
              "voters": 26
            }
          ],
          "EBEMVOK": [
            {
              "station": "ECOLE PUBLIQUE D'EBEMVOK / A",
              "voters": 146
            }
          ],
          "ELON": [
            {
              "station": "ECOLE PUBLIQUE D'ELON / A",
              "voters": 53
            }
          ],
          "ENYANKOL": [
            {
              "station": "ECOLE PUBLIQUE D'ENYANKOL / A",
              "voters": 109
            }
          ],
          "BIBINDI": [
            {
              "station": "ECOLE PUBLIQUE DE BIBINDI / A",
              "voters": 91
            }
          ],
          "BIYENG": [
            {
              "station": "ECOLE PUBLIQUE DE BIBINDI / A",
              "voters": 182
            }
          ],
          "FENDA": [
            {
              "station": "ECOLE PUBLIQUE DE FENDA / A",
              "voters": 123
            }
          ],
          "MALOMBA": [
            {
              "station": "ECOLE PUBLIQUE DE MALOMBA / A",
              "voters": 72
            }
          ],
          "MBANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBANGA / A",
              "voters": 110
            }
          ],
          "MEFANE": [
            {
              "station": "ECOLE PUBLIQUE DE MEFANE / A",
              "voters": 49
            }
          ],
          "MINGOH": [
            {
              "station": "ECOLE PUBLIQUE DE MINGOH / A",
              "voters": 50
            }
          ],
          "MVIE": [
            {
              "station": "ECOLE PUBLIQUE DE MVIE / A",
              "voters": 624
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE MVIE / A",
              "voters": 312
            }
          ],
          "NLOKENG": [
            {
              "station": "ECOLE PUBLIQUE DE NLONKENG / A",
              "voters": 91
            }
          ],
          "NNEMEYONG": [
            {
              "station": "ECOLE PUBLIQUE DE NNEMEYONG / A",
              "voters": 136
            }
          ],
          "TOKO": [
            {
              "station": "ECOLE PUBLIQUE DE TOKO / A",
              "voters": 127
            }
          ],
          "EKOWONG": [
            {
              "station": "ESPLANADE CHEFFERIE D'EKOWONG / A",
              "voters": 82
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "FOYER CULTUREL DE BIBOULEMAM / A",
              "voters": 76
            }
          ],
          "MEBANGA": [
            {
              "station": "FOYER CULTUREL DE MEBANGA / A",
              "voters": 46
            }
          ],
          "NYABITANDE": [
            {
              "station": "I S M A P DE NYABITANDE / A",
              "voters": 161
            }
          ],
          "VILLE": [
            {
              "station": "LYCEE D'AKOM II / A",
              "voters": 702
            }
          ]
        },
        "BIPINDI": {
          "ZOCK": [
            {
              "station": "ANNEXE RES. BEKOUNOU NICOLAS / A",
              "voters": 134
            }
          ],
          "BEFAM-OYACK": [
            {
              "station": "ANNEXE RES. BEKOUNOU NICOLAS / A",
              "voters": 134
            }
          ],
          "MELEN": [
            {
              "station": "ANNEXE RES. BEKOUNOU NICOLAS / A",
              "voters": 235
            }
          ],
          "ENGOGO": [
            {
              "station": "ANNEXE RES. BEKOUNOU NICOLAS / A",
              "voters": 134
            }
          ],
          "NKOL-BILON": [
            {
              "station": "ANNEXE RES. ENYEGUE METINI ALBERT / A",
              "voters": 76
            }
          ],
          "KOUAMBO": [
            {
              "station": "ANNEXE RESIDENCE NLONGVOUMBO / A",
              "voters": 271
            }
          ],
          "NABONYARE": [
            {
              "station": "ANNEXE RESIDENCE NLONGVOUMBO / A",
              "voters": 59
            }
          ],
          "NKULMALENDI": [
            {
              "station": "ANNEXE RESIDENCE NLONGVOUMBO / A",
              "voters": 59
            }
          ],
          "NTUERPEMBE": [
            {
              "station": "ANNEXE RESIDENCE NLONGVOUMBO / A",
              "voters": 59
            }
          ],
          "ASSOK": [
            {
              "station": "ANNEXE RESIDENCE REV, MVONDO MOISE /  A",
              "voters": 302
            }
          ],
          "CENTRE": [
            {
              "station": "ANNEXE RESIDENCE REV, MVONDO MOISE /  A",
              "voters": 378
            }
          ],
          "EDO'O-MANG": [
            {
              "station": "ANNEXE RESIDENCE REV, MVONDO MOISE /  A",
              "voters": 94
            }
          ],
          "MVONDO": [
            {
              "station": "ANNEXE RESIDENCE REV, MVONDO MOISE /  A",
              "voters": 204
            }
          ],
          "BIFOUM": [
            {
              "station": "ANNEXE RESIDENCE ZINDO AUGUSTE / A",
              "voters": 86
            }
          ],
          "BIPINDI": [
            {
              "station": "CENTRE DE PROM. FEMME ET FAMILLE / A",
              "voters": 570
            }
          ],
          "MADAGASCAR": [
            {
              "station": "CENTRE DE PROM. FEMME ET FAMILLE / A",
              "voters": 92
            }
          ],
          "MISSION": [
            {
              "station": "CENTRE DE PROM. FEMME ET FAMILLE / A",
              "voters": 92
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "CENTRE DE PROM. FEMME ET FAMILLE / A",
              "voters": 92
            }
          ],
          "ATLANTIQUE": [
            {
              "station": "CES BIDJOUKA CONDOR / A",
              "voters": 206
            }
          ],
          "CONDOR": [
            {
              "station": "CES BIDJOUKA CONDOR / A",
              "voters": 206
            }
          ],
          "BIDJOUKA": [
            {
              "station": "CES BIDJOUKA CONDOR / A",
              "voters": 665
            }
          ],
          "VILLAGE": [
            {
              "station": "CETIC DE BIPINDI / A",
              "voters": 175
            }
          ],
          "ESSAWO'O": [
            {
              "station": "ECOLE PUBLIQUE ASSOK 2 ESSAWO'O / A",
              "voters": 57
            }
          ],
          "ESSEBENG": [
            {
              "station": "ECOLE PUBLIQUE ASSOK 2 ESSAWO'O / A",
              "voters": 57
            }
          ],
          "ATOG-BOGA": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 397
            }
          ],
          "ETETAK": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 129
            }
          ],
          "ESSOMBA-ENOLA": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 129
            }
          ],
          "KAMELON": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 129
            }
          ],
          "NKOL-BIKOM": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 129
            }
          ],
          "NKOL-NGOCK": [
            {
              "station": "ECOLE PUBLIQUE ATOG-BOGA CENTRE / A",
              "voters": 129
            }
          ],
          "MBAMBA": [
            {
              "station": "ECOLE PUBLIQUE BIDJOUKA CENTRE / A",
              "voters": 177
            }
          ],
          "NAMASSAMBI": [
            {
              "station": "ECOLE PUBLIQUE BIDJOUKA CENTRE / A",
              "voters": 177
            }
          ],
          "BONGOUANA": [
            {
              "station": "ECOLE PUBLIQUE BONGOUANA / A",
              "voters": 75
            }
          ],
          "SISANDE": [
            {
              "station": "ECOLE PUBLIQUE DE KOUAMBO / A",
              "voters": 106
            }
          ],
          "MADOUNGOU": [
            {
              "station": "ECOLE PUBLIQUE DE MADOUNGOU / A",
              "voters": 112
            }
          ],
          "EBIMIMBANG": [
            {
              "station": "ECOLE PUBLIQUE EBIMIMPBANG AKOM / A",
              "voters": 182
            }
          ],
          "GRAND-ZAMBI": [
            {
              "station": "ECOLE PUBLIQUE GRAND ZAMBI / A",
              "voters": 148
            }
          ],
          "KPWA": [
            {
              "station": "ECOLE PUBLIQUE KPWA / A",
              "voters": 186
            }
          ],
          "LAMBI": [
            {
              "station": "ECOLE PUBLIQUE LAMBI / A",
              "voters": 240
            }
          ],
          "DEUX-PONTS": [
            {
              "station": "ECOLE PUBLIQUE MBIKILIKI-SI / A",
              "voters": 178
            }
          ],
          "SAMAL": [
            {
              "station": "ECOLE PUBLIQUE MBIKILIKI-SI / A",
              "voters": 178
            }
          ],
          "BIWANDI": [
            {
              "station": "ECOLE PUBLIQUE MBIKILIKI-SI / A",
              "voters": 178
            }
          ],
          "ORANGER": [
            {
              "station": "ECOLE PUBLIQUE MBIKILIKI-SI / A",
              "voters": 178
            }
          ],
          "MELOMBO": [
            {
              "station": "ECOLE PUBLIQUE MELOMBO / A",
              "voters": 333
            }
          ],
          "MELONDO-SI": [
            {
              "station": "ECOLE PUBLIQUE MELONDO CENTRE / A",
              "voters": 128
            }
          ],
          "DAHOMEY": [
            {
              "station": "ECOLE PUBLIQUE MEMEL 2 / A",
              "voters": 138
            }
          ],
          "MEMEL": [
            {
              "station": "ECOLE PUBLIQUE MEMEL 2 / A",
              "voters": 407
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE MEMEL 2 / A",
              "voters": 138
            }
          ],
          "MINFOMBO": [
            {
              "station": "ECOLE PUBLIQUE MINFOMBO CENTRE / A",
              "voters": 79
            }
          ],
          "MOUNGUE": [
            {
              "station": "ECOLE PUBLIQUE MOUNGUE / A",
              "voters": 165
            }
          ],
          "MINLOUEL-MIOH": [
            {
              "station": "ECOLE PUBLIQUE NDTOUA CENTRE / A",
              "voters": 144
            }
          ],
          "NSOLA": [
            {
              "station": "ECOLE PUBLIQUE NSOLA / A",
              "voters": 148
            }
          ],
          "SONG-MAYI": [
            {
              "station": "ECOLE PUBLIQUE SONG-MAYI / A",
              "voters": 168
            }
          ],
          "TYANGO": [
            {
              "station": "ECOLE PUBLIQUE TYANGO / A",
              "voters": 188
            }
          ],
          "BITSILBILANDI": [
            {
              "station": "ESPL. CHEFFERIE NDTOUA BITSILBILANDI / A",
              "voters": 148
            }
          ],
          "NDTOUA": [
            {
              "station": "ESPL. CHEFFERIE NDTOUA BITSILBILANDI / A",
              "voters": 292
            }
          ],
          "NGOUMA-NZIOU": [
            {
              "station": "ESPL. CHEFFERIE NDTOUA BITSILBILANDI / A",
              "voters": 148
            }
          ],
          "MIMBAMELA": [
            {
              "station": "ESPLANADE CHEFFERIE MIMBAMELA  CENTRE / A",
              "voters": 76
            }
          ],
          "NKOUTOU": [
            {
              "station": "ESPLANADE CHEFFERIE NKPWA NKOUTOU /  A",
              "voters": 109
            }
          ],
          "NYAMINKOM": [
            {
              "station": "ESPLANADE CHEFFERIE NYAMINKOM / A",
              "voters": 65
            }
          ],
          "PETIT": [
            {
              "station": "ESPLANADE CHEFFERIE PETIT-ZAMBI / A",
              "voters": 80
            }
          ],
          "-ZAMBI": [
            {
              "station": "ESPLANADE CHEFFERIE PETIT-ZAMBI / A",
              "voters": 80
            }
          ],
          "BAMBI": [
            {
              "station": "MISSION CATH. MASCHUER-MASHUER / A",
              "voters": 104
            }
          ],
          "BILIBI-TSOP": [
            {
              "station": "MISSION CATH. MASCHUER-MASHUER / A",
              "voters": 104
            }
          ],
          "KOUERTSO": [
            {
              "station": "MISSION CATH. MASCHUER-MASHUER / A",
              "voters": 104
            }
          ],
          "CENTRE-VILLE": [
            {
              "station": "SALLE DE FETES DE BIPINDI CENTRE / A",
              "voters": 303
            }
          ],
          "BOKOKOUALA": [
            {
              "station": "SALLE DES FETES DE BOKOKOUALA  (G-STONES RESOURCES SA) / A",
              "voters": 127
            }
          ]
        },
        "CAMPO": {
          "TONDEFOM": [
            {
              "station": "BATIMENT CAMEROUNAISE DES EAUX / A",
              "voters": 55
            }
          ],
          "MATAMBA": [
            {
              "station": "C.E.S. D'EBODJE / A",
              "voters": 66
            }
          ],
          "NGATA": [
            {
              "station": "C.E.S. D'EBODJE / A",
              "voters": 66
            }
          ],
          "LEILA": [
            {
              "station": "CAMP BONO / A",
              "voters": 66
            }
          ],
          "MASSEA": [
            {
              "station": "CAMP BONO / A",
              "voters": 66
            }
          ],
          "CARREFOUR": [
            {
              "station": "CARREFOUR MAMEL / A",
              "voters": 71
            }
          ],
          "MAMEL": [
            {
              "station": "CARREFOUR MAMEL / A",
              "voters": 71
            }
          ],
          "BEKOKA": [
            {
              "station": "CHAPELLE EPC DE MBENDJI / A",
              "voters": 36
            }
          ],
          "MBENDJI": [
            {
              "station": "CHAPELLE EPC DE MBENDJI / A",
              "voters": 72
            }
          ],
          "DOUM": [
            {
              "station": "CHAPELLE EPC DOUM-ESSAMEBENGA / A",
              "voters": 68
            }
          ],
          "ESSAMEBENGA": [
            {
              "station": "CHAPELLE EPC DOUM-ESSAMEBENGA / A",
              "voters": 68
            }
          ],
          "NKO'ADJAP": [
            {
              "station": "CHAPELLE EPC DOUM-ESSAMEBENGA / A",
              "voters": 68
            }
          ],
          "MALABA": [
            {
              "station": "CHAPELLE MALABA / A",
              "voters": 61
            }
          ],
          "OTOU": [
            {
              "station": "CHAPELLE MALABA / A",
              "voters": 61
            }
          ],
          "BOUANDJO": [
            {
              "station": "E.P. BOUANDJO / A",
              "voters": 182
            }
          ],
          "DOUM-ESSAMEDJANG": [
            {
              "station": "E.P. BOUANDJO / A",
              "voters": 182
            }
          ],
          "CAMPO": [
            {
              "station": "E.P. CAMPO BEACH / A",
              "voters": 601
            }
          ],
          "BEACH": [
            {
              "station": "E.P. CAMPO BEACH / A",
              "voters": 601
            }
          ],
          "BOKOMBE": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 766
            }
          ],
          "CHATEAU": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 952
            }
          ],
          "DOUMASSI": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 1007
            }
          ],
          "PARIS": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 914
            }
          ],
          "SOIR": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 914
            }
          ],
          "QUARTIER": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 766
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "E.P. CAMPO VILLE / A",
              "voters": 766
            }
          ],
          "AFAN": [
            {
              "station": "E.P. D'AKAK / A",
              "voters": 150
            }
          ],
          "ESSOKIE": [
            {
              "station": "E.P. D'AKAK / A",
              "voters": 150
            }
          ],
          "AKAK": [
            {
              "station": "E.P. D'AKAK / A",
              "voters": 95
            }
          ],
          "ASSOK": [
            {
              "station": "E.P. D'AKAK / A",
              "voters": 95
            }
          ],
          "BITANDE": [
            {
              "station": "E.P. D'AKAK / A",
              "voters": 95
            }
          ],
          "EBIANEMEYONG": [
            {
              "station": "E.P. EBIANEMEYONG / A",
              "voters": 71
            }
          ],
          "EBODJE": [
            {
              "station": "E.P. EBODJE / A",
              "voters": 438
            }
          ],
          "CHEFFERIE": [
            {
              "station": "E.P. EBODJE / A",
              "voters": 284
            }
          ],
          "ANCIEN": [
            {
              "station": "E.P. IPONO / A",
              "voters": 195
            }
          ],
          "CAMP": [
            {
              "station": "E.P. IPONO / A",
              "voters": 390
            }
          ],
          "HFC": [
            {
              "station": "E.P. IPONO / A",
              "voters": 390
            }
          ],
          "IPONO": [
            {
              "station": "E.P. IPONO / A",
              "voters": 390
            }
          ],
          "NOUVEAU": [
            {
              "station": "E.P. IPONO / A",
              "voters": 195
            }
          ],
          "ECOLE": [
            {
              "station": "E.P. ITONDEFANG / A",
              "voters": 55
            }
          ],
          "MABIOGO": [
            {
              "station": "E.P. MABIOGO / A",
              "voters": 105
            }
          ],
          "NAZARETH": [
            {
              "station": "E.P. MABIOGO / A",
              "voters": 105
            }
          ],
          "MVASSE": [
            {
              "station": "E.P. MVASSE / A",
              "voters": 142
            }
          ],
          "NKOELON": [
            {
              "station": "E.P. NKOELON / A",
              "voters": 47
            }
          ],
          "ENYENGENAMANGA": [
            {
              "station": "EGLISE PROTESTANTE ATLANTIQUE / A",
              "voters": 93
            }
          ],
          "GENDARMERIE": [
            {
              "station": "EGLISE PROTESTANTE ATLANTIQUE / A",
              "voters": 93
            }
          ],
          "ITONDE": [
            {
              "station": "ESPL. CHEFFERIE D'ITONDEFANG / A",
              "voters": 65
            }
          ],
          "MER": [
            {
              "station": "ESPL. CHEFFERIE D'ITONDEFANG / A",
              "voters": 65
            }
          ],
          "ITONDEFANG": [
            {
              "station": "ESPL. CHEFFERIE D'ITONDEFANG / A",
              "voters": 120
            }
          ],
          "BEYO": [
            {
              "station": "ESPLANADE MAISON IPENYENDJE / A",
              "voters": 25
            }
          ],
          "IPENYENDJE": [
            {
              "station": "ESPLANADE MAISON IPENYENDJE / A",
              "voters": 25
            }
          ],
          "EME": [
            {
              "station": "P.C. 11EME BAFUMAR / A",
              "voters": 389
            }
          ],
          "BAFUMAR": [
            {
              "station": "P.C. 11EME BAFUMAR / A",
              "voters": 389
            }
          ],
          "MINTOM": [
            {
              "station": "WWF FAUNE MINTOM / A",
              "voters": 108
            }
          ]
        },
        "KRIBI I": {
          "NGOYE": [
            {
              "station": "ANCIENNE COMMUNE RURALE / A",
              "voters": 560
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ANCIENNE COMMUNE RURALE / A",
              "voters": 560
            }
          ],
          "EBOUNDJA": [
            {
              "station": "CASE COMMUNAUTAIRE DE TALLA / A",
              "voters": 1254
            }
          ],
          "LOBE": [
            {
              "station": "CENTRE SOCIAL LOBE / A",
              "voters": 423
            }
          ],
          "MBEKA'A": [
            {
              "station": "CHAPELLE CATHOLIQUE / A",
              "voters": 492
            }
          ],
          "MASSAKA": [
            {
              "station": "DAADER / A",
              "voters": 1970
            }
          ],
          "BONGAHELE": [
            {
              "station": "DISPENSAIRE / A",
              "voters": 378
            }
          ],
          "ZAIRE": [
            {
              "station": "ECOLE ADVENTISTE / A",
              "voters": 1315
            }
          ],
          "NEW-TOWN": [
            {
              "station": "ECOLE DU CENTRE / A",
              "voters": 946
            }
          ],
          "TALLA": [
            {
              "station": "ECOLE MATERNELLE DE TALLA / A",
              "voters": 1444
            }
          ],
          "BWAMBE": [
            {
              "station": "ECOLE PUBLIQUE DE BWAMBE / A",
              "voters": 541
            }
          ],
          "LENDE": [
            {
              "station": "ECOLE PUBLIQUE DE LENDE DIBE / A",
              "voters": 289
            }
          ],
          "DIBE": [
            {
              "station": "ECOLE PUBLIQUE DE LENDE DIBE / A",
              "voters": 289
            }
          ],
          "LOLABE": [
            {
              "station": "ECOLE PUBLIQUE DE LOLABE / A",
              "voters": 1320
            }
          ],
          "LOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE LOUMA / A",
              "voters": 878
            }
          ],
          "BONGANDOUE": [
            {
              "station": "ECOLE PUBLIQUE DE TALLA / A",
              "voters": 398
            }
          ],
          "MPANGOU": [
            {
              "station": "ENIEG DE KRIBI / A",
              "voters": 1020
            }
          ],
          "MOKOLO": [
            {
              "station": "ETS BLACK & WHITE / A",
              "voters": 2060
            }
          ],
          "PETIT": [
            {
              "station": "ETS CATHY / A",
              "voters": 3480
            }
          ],
          "PARIS": [
            {
              "station": "ETS CATHY / A",
              "voters": 3480
            }
          ],
          "EBOME": [
            {
              "station": "HANGAR BIWANGI / A",
              "voters": 1619
            }
          ],
          "LENDI": [
            {
              "station": "HANGAR LENDI 1 / A",
              "voters": 612
            }
          ],
          "MBOAMANGA": [
            {
              "station": "SALLE DES FETES MBOAMANGA / A",
              "voters": 1203
            }
          ]
        },
        "KRIBI II": {
          "DOMBE": [
            {
              "station": "C E S DE DOMBE / A",
              "voters": 13752
            }
          ],
          "AFAN": [
            {
              "station": "COLLEGE ADVENTISTE / A",
              "voters": 6178
            }
          ],
          "MABE": [
            {
              "station": "COLLEGE ADVENTISTE / A",
              "voters": 6178
            }
          ],
          "DOMBE-TRADEX": [
            {
              "station": "DESTINY KIDS / A",
              "voters": 64
            }
          ],
          "NGOYERESERVE": [
            {
              "station": "E. PRIVEE BILINGUE ARINA / A",
              "voters": 608
            }
          ],
          "MAKAAWUM": [
            {
              "station": "E.P. DE MIMBOUGUE / A",
              "voters": 2546
            }
          ],
          "MIMBOUGUE": [
            {
              "station": "E.P. DE MIMBOUGUE / A",
              "voters": 1432
            }
          ],
          "NEW-": [
            {
              "station": "ECOLE ADVENTISTE / A",
              "voters": 1606
            }
          ],
          "TOWN": [
            {
              "station": "ECOLE ADVENTISTE / A",
              "voters": 1606
            }
          ],
          "WAMIE": [
            {
              "station": "ECOLE MATERNELLE DES PETITS MARINS / A",
              "voters": 778
            }
          ],
          "DOMBE-EBOBISSE": [
            {
              "station": "ECOLE PRIVEE LES HIRONDELLES / A",
              "voters": 117
            }
          ],
          "BEBAMBWE": [
            {
              "station": "ECOLE PUBLIQUE DE BEBAMBWE 1 / A",
              "voters": 343
            }
          ],
          "BIKONDO": [
            {
              "station": "ECOLE PUBLIQUE DE BIKONDO / A",
              "voters": 1862
            }
          ],
          "MPALLA": [
            {
              "station": "ECOLE PUBLIQUE DE MPALLA / A",
              "voters": 372
            }
          ],
          "NZIOU": [
            {
              "station": "ECOLE PUBLIQUE DE NZIOU / A",
              "voters": 882
            }
          ],
          "LONDJI": [
            {
              "station": "ECOLE PUBLIQUE LONDJI1 / A",
              "voters": 678
            }
          ],
          "DOMBE-CAMP": [
            {
              "station": "EP DE DOMBE CAMP MILITAIRE / A",
              "voters": 73
            }
          ],
          "MILITAIRE": [
            {
              "station": "EP DE DOMBE CAMP MILITAIRE / A",
              "voters": 73
            }
          ],
          "ALAN-MABE": [
            {
              "station": "ESPL. DE SWECOM / A",
              "voters": 401
            }
          ],
          "AFAN-MABE": [
            {
              "station": "ESPL. DU STADE / A",
              "voters": 1505
            }
          ],
          "MPOLONGWE": [
            {
              "station": "ESPLANADE BAR PONT DES PETITS MARINS /  A",
              "voters": 175
            }
          ],
          "DOMBE-BOSSIGUI": [
            {
              "station": "GROUPE SCOLAIRE GEORGES LAURENT / A",
              "voters": 113
            }
          ],
          "NZAMI": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 561
            }
          ],
          "NGOYE": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 3913
            }
          ],
          "RESERVE": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 2574
            }
          ],
          "EBOUYE": [
            {
              "station": "POSTE DE DOUANE D'EBOUYIE / A",
              "voters": 201
            }
          ],
          "ELABE": [
            {
              "station": "SALLE COMMUNAUTAIRE D'ELABE / A",
              "voters": 469
            }
          ],
          "BILOLO": [
            {
              "station": "SALLE COMMUNAUTAIRE DE BILOLO / A",
              "voters": 142
            }
          ],
          "MPOLONGWE1": [
            {
              "station": "SALLE COMMUNAUTAIRE DE MPOLONGWE /  A",
              "voters": 214
            }
          ],
          "NZIOU-TERRE": [
            {
              "station": "UNI PALACE / A",
              "voters": 57
            }
          ],
          "PROMISE": [
            {
              "station": "UNI PALACE / A",
              "voters": 57
            }
          ]
        },
        "LOKOUNDJE": {
          "BIDOU": [
            {
              "station": "ANCIENNE ECOLE PUBLIQUE BIDOU I / A",
              "voters": 284
            }
          ],
          "BIVOUBA": [
            {
              "station": "BASE CAMTEL DE BIVOUBA SUD / A",
              "voters": 165
            }
          ],
          "KILOMBO": [
            {
              "station": "BUREAU SOCAPALM KILOMBO I / A",
              "voters": 557
            }
          ],
          "DIBOUNE": [
            {
              "station": "CASE COMMUNAUTAIRE DIBOUNE / A",
              "voters": 23
            }
          ],
          "EPOLLE": [
            {
              "station": "CASE DU VILLAGE EPOLLE / A",
              "voters": 64
            }
          ],
          "NKOLLO": [
            {
              "station": "CASE SANTE NKOLLO / A",
              "voters": 96
            }
          ],
          "BELLA": [
            {
              "station": "CES BELLA - HAUT / A",
              "voters": 232
            }
          ],
          "ELOGBATINDI": [
            {
              "station": "CETIC D'ELOGBATINDI / A",
              "voters": 608
            }
          ],
          "EBONDI": [
            {
              "station": "CHAPELLE CATHOLIQUE D'EBONDI / A",
              "voters": 418
            }
          ],
          "SOCAPALM": [
            {
              "station": "ECOLE BILINGUE V I / A",
              "voters": 2341
            }
          ],
          "BEHONDO": [
            {
              "station": "ECOLE PUBLIQUE BEHONDO / A",
              "voters": 50
            }
          ],
          "BANDEVOURI": [
            {
              "station": "ECOLE PUBLIQUE DE BANDEVOURI / A",
              "voters": 91
            }
          ],
          "BISSIANG": [
            {
              "station": "ECOLE PUBLIQUE DE BISSIANG / A",
              "voters": 430
            }
          ],
          "BONGUEN": [
            {
              "station": "ECOLE PUBLIQUE DE BONGUEN / A",
              "voters": 243
            }
          ],
          "FIFINDA": [
            {
              "station": "ECOLE PUBLIQUE DE FIFINDA I / A",
              "voters": 428
            }
          ],
          "GWAP": [
            {
              "station": "ECOLE PUBLIQUE DE GWAP / A",
              "voters": 59
            }
          ],
          "MAKOURE": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOURE I / A",
              "voters": 189
            }
          ],
          "MBOKE": [
            {
              "station": "ECOLE PUBLIQUE DE MBOKE / A",
              "voters": 67
            }
          ],
          "PAMA": [
            {
              "station": "ECOLE PUBLIQUE DE PAMA / A",
              "voters": 197
            }
          ],
          "PONGO": [
            {
              "station": "ECOLE PUBLIQUE DE PONGO / A",
              "voters": 47
            }
          ],
          "DEHANE": [
            {
              "station": "ECOLE PUBLIQUE DEHANE / A",
              "voters": 204
            }
          ],
          "DIKOBE": [
            {
              "station": "ECOLE PUBLIQUE DIKOBE / A",
              "voters": 70
            }
          ],
          "MABENANGA": [
            {
              "station": "EPC MABENANGA / A",
              "voters": 32
            }
          ],
          "CAMP": [
            {
              "station": "ESPL. SALLE CONFERENCE WIJMA / A",
              "voters": 310
            }
          ],
          "WIJMA": [
            {
              "station": "ESPL. SALLE CONFERENCE WIJMA / A",
              "voters": 310
            }
          ],
          "NDOUMALE": [
            {
              "station": "ESPLANADECHEFFERIE / A",
              "voters": 65
            }
          ],
          "DONENGA": [
            {
              "station": "HANGAR MARCHE DONENGA / A",
              "voters": 55
            }
          ],
          "EBEA": [
            {
              "station": "HANGAR MARCHE EBEA / A",
              "voters": 80
            }
          ],
          "EBOUDAVAE": [
            {
              "station": "HANGAR MARCHE EBOUDAVAE / A",
              "voters": 20
            }
          ],
          "LOKOUNDJE": [
            {
              "station": "HANGAR PUBLIC LOKOUNDJE / A",
              "voters": 54
            }
          ],
          "BIPAGA": [
            {
              "station": "HANGAR VILLAGE BIPAGA / A",
              "voters": 209
            }
          ],
          "YALPENDA": [
            {
              "station": "LYCEE DE YALPENDA / A",
              "voters": 185
            }
          ],
          "MBEBE": [
            {
              "station": "QUARTIER LATIN MBEBE / A",
              "voters": 259
            }
          ],
          "EDOUNGANGOMO": [
            {
              "station": "RESIDENCE DOMICILE MBILE RAPHAEL / A",
              "voters": 39
            }
          ]
        },
        "LOLODORF": {
          "HAOUSSA": [
            {
              "station": "ABATTOIR MUNICIPAL DE LOLODORF / A",
              "voters": 386
            }
          ],
          "MASSAKPWA": [
            {
              "station": "CASE COM. BIGBALLY II MASSAKPWA / A",
              "voters": 62
            }
          ],
          "MACEDOINE": [
            {
              "station": "CASE COM. BIKALLA MACEDOINE / A",
              "voters": 79
            }
          ],
          "NGOUMBA": [
            {
              "station": "CASE COM.DE MBANGO NGOUMBA / A",
              "voters": 59
            }
          ],
          "KABA": [
            {
              "station": "CASE COMMUNAUTAIRE DE KABA / A",
              "voters": 122
            }
          ],
          "SABALLY": [
            {
              "station": "CASE COMMUNAUTAIRE DEDE SABALLY / A",
              "voters": 135
            }
          ],
          "NKOUMBALA": [
            {
              "station": "CES DE NKOUMBALA / A",
              "voters": 101
            }
          ],
          "NGOVAYANG": [
            {
              "station": "CETIC DE NGOVAYANG I / A",
              "voters": 622
            }
          ],
          "NKONG-OGNIE": [
            {
              "station": "E.F.A. BIBONDI NKONG - OGNIE / A",
              "voters": 81
            }
          ],
          "BIBIA": [
            {
              "station": "ECOLE EPC DE BIBIA / A",
              "voters": 234
            }
          ],
          "MELANGUE": [
            {
              "station": "ECOLE P. DE MELANGUE MVOG-ESSON / A",
              "voters": 70
            }
          ],
          "MVOG": [
            {
              "station": "ECOLE P. DE MELANGUE MVOG-ESSON / A",
              "voters": 70
            }
          ],
          "ESSON": [
            {
              "station": "ECOLE P. DE MELANGUE MVOG-ESSON / A",
              "voters": 70
            }
          ],
          "BIBONDI": [
            {
              "station": "ECOLE PUBLIQUE DE BIBONDI / A",
              "voters": 269
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE BIBONDI / A",
              "voters": 869
            }
          ],
          "BIGBALLY": [
            {
              "station": "ECOLE PUBLIQUE DE BIGBALLY / A",
              "voters": 1214
            }
          ],
          "NGOMBASS": [
            {
              "station": "ECOLE PUBLIQUE DE BIKALLA NGOMBASS / A",
              "voters": 123
            }
          ],
          "BIKOKA": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOKA I / A",
              "voters": 337
            }
          ],
          "NLANGWAYENE": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOKA I / A",
              "voters": 145
            }
          ],
          "MBANGO": [
            {
              "station": "ECOLE PUBLIQUE DE KABA MBANGO / A",
              "voters": 427
            }
          ],
          "BITOUER": [
            {
              "station": "ECOLE PUBLIQUE DE KABA MBANGO / A",
              "voters": 240
            }
          ],
          "KOUMBINZIK": [
            {
              "station": "ECOLE PUBLIQUE DE KOUMBINZIK / A",
              "voters": 73
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE DE LOLODORF / A",
              "voters": 547
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE PUBLIQUE DE LOLODORF / A",
              "voters": 161
            }
          ],
          "MADONG": [
            {
              "station": "ECOLE PUBLIQUE DE MADONG / A",
              "voters": 514
            }
          ],
          "MANGOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE MANGOUMA / A",
              "voters": 122
            }
          ],
          "BOULOU": [
            {
              "station": "ECOLE PUBLIQUE DE MBANGO BOULOU / A",
              "voters": 128
            }
          ],
          "MBIKILIKI": [
            {
              "station": "ECOLE PUBLIQUE DE MBIKILIKI / A",
              "voters": 177
            }
          ],
          "MILL": [
            {
              "station": "ECOLE PUBLIQUE DE MILL / A",
              "voters": 141
            }
          ],
          "MOUGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MOUGUE / A",
              "voters": 214
            }
          ],
          "NGOYANG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOYANG / A",
              "voters": 548
            }
          ],
          "NKOUONGUIOH": [
            {
              "station": "ECOLE PUBLIQUE DE NGOYANG / A",
              "voters": 274
            }
          ],
          "NKOUAMBPOER": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUAMBPOER I / A",
              "voters": 254
            }
          ],
          "MBPANGA": [
            {
              "station": "FOYER COM.DE BIKOUI II - MBPANGA / A",
              "voters": 130
            }
          ],
          "MVILLE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE / A",
              "voters": 193
            }
          ],
          "BINGAMBO": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BINGAMBO / A",
              "voters": 394
            }
          ],
          "LOLODORF": [
            {
              "station": "FOYER MUNICIPAL DE LOLODORF / A",
              "voters": 508
            }
          ],
          "VILLE": [
            {
              "station": "FOYER MUNICIPAL DE LOLODORF / A",
              "voters": 508
            }
          ],
          "BIKALLA": [
            {
              "station": "HANGAR MARCHE BIKALLA CENTRE / A",
              "voters": 375
            }
          ],
          "III": [
            {
              "station": "LYCEE CLASSIQUE DE LOLODORF / A",
              "voters": 485
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE CLASSIQUE DE LOLODORF / A",
              "voters": 398
            }
          ],
          "BIKOUI": [
            {
              "station": "LYCEE TECHNIQUE DE LOLODORF / A",
              "voters": 475
            }
          ],
          "LIMAZOUANG": [
            {
              "station": "LYCEE TECHNIQUE DE LOLODORF / A",
              "voters": 345
            }
          ]
        },
        "MVENGUE": {
          "ATING": [
            {
              "station": "CASE COM. D'ATING - ETOM / A",
              "voters": 124
            }
          ],
          "ETOM": [
            {
              "station": "CASE COM. D'ATING - ETOM / A",
              "voters": 124
            }
          ],
          "NYAMFENDE": [
            {
              "station": "CASE COM. D'ELON NYAMFENDE / A",
              "voters": 108
            }
          ],
          "YANDA": [
            {
              "station": "CASE COM. D'ELON YANDA / A",
              "voters": 26
            }
          ],
          "MENGADA": [
            {
              "station": "CASE COM. DE MENGANDA I / A",
              "voters": 75
            }
          ],
          "MINKOUGOU": [
            {
              "station": "CASE COM. DE MINKOUGOU / A",
              "voters": 81
            }
          ],
          "NSAM": [
            {
              "station": "CASE COM. DE MVENGUE NSAM / A",
              "voters": 131
            }
          ],
          "NKOLATOM": [
            {
              "station": "CASE COM. DE NKOALATOM / A",
              "voters": 70
            }
          ],
          "NKOLMENDING": [
            {
              "station": "CASE COM. DE NKOLMENDING I / A",
              "voters": 172
            }
          ],
          "WOM": [
            {
              "station": "CASE COM. DE WOM I / A",
              "voters": 299
            }
          ],
          "MELONDO": [
            {
              "station": "CETIC DE MELONDO / A",
              "voters": 188
            }
          ],
          "EBAYEGA": [
            {
              "station": "ECOLE DE PUBLIQUE D'EBAYEGE / A",
              "voters": 125
            }
          ],
          "ADOUMAN": [
            {
              "station": "ECOLE PUBLIQUE ADOUMAN / A",
              "voters": 50
            }
          ],
          "MVENGUE": [
            {
              "station": "ECOLE PUBLIQUE ANNEX -A / A",
              "voters": 1197
            }
          ],
          "ABAM": [
            {
              "station": "ECOLE PUBLIQUE D'ABAM / A",
              "voters": 118
            }
          ],
          "AKIE": [
            {
              "station": "ECOLE PUBLIQUE D'AKIE / A",
              "voters": 150
            }
          ],
          "AKOK": [
            {
              "station": "ECOLE PUBLIQUE D'AKOK / A",
              "voters": 100
            }
          ],
          "AKOM": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM / A",
              "voters": 228
            }
          ],
          "ATINZAM": [
            {
              "station": "ECOLE PUBLIQUE D'ATINZAM / A",
              "voters": 69
            }
          ],
          "AWANDA": [
            {
              "station": "ECOLE PUBLIQUE D'AWANDA / A",
              "voters": 614
            }
          ],
          "EBOM": [
            {
              "station": "ECOLE PUBLIQUE D'EBOM CENTRE / A",
              "voters": 353
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE D'EBOM CENTRE / A",
              "voters": 759
            }
          ],
          "ELON": [
            {
              "station": "ECOLE PUBLIQUE D'ELON / A",
              "voters": 190
            }
          ],
          "OKOGA": [
            {
              "station": "ECOLE PUBLIQUE D'OKOGA / A",
              "voters": 111
            }
          ],
          "BEMBE": [
            {
              "station": "ECOLE PUBLIQUE DE BEMBE / A",
              "voters": 41
            }
          ],
          "BIKOE": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOE I / A",
              "voters": 373
            }
          ],
          "BIKOP": [
            {
              "station": "ECOLE PUBLIQUE DE BIKOP / A",
              "voters": 152
            }
          ],
          "OKAROBELE": [
            {
              "station": "ECOLE PUBLIQUE DE D'OKAROBELE / A",
              "voters": 203
            }
          ],
          "KA'AN": [
            {
              "station": "ECOLE PUBLIQUE DE KA'AN II / A",
              "voters": 318
            }
          ],
          "KOULNGANGA": [
            {
              "station": "ECOLE PUBLIQUE DE KOULNGANGA / A",
              "voters": 281
            }
          ],
          "MEKOM": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOM / A",
              "voters": 101
            }
          ],
          "MELEN": [
            {
              "station": "ECOLE PUBLIQUE DE MELEN / A",
              "voters": 180
            }
          ],
          "MENGANDA": [
            {
              "station": "ECOLE PUBLIQUE DE MENGANDA II / A",
              "voters": 99
            }
          ],
          "MINKAN": [
            {
              "station": "ECOLE PUBLIQUE DE MINKAN / A",
              "voters": 446
            }
          ],
          "NDZIEBETONO": [
            {
              "station": "ECOLE PUBLIQUE DE NDZIEBETONO / A",
              "voters": 131
            }
          ],
          "NKOALA'A": [
            {
              "station": "ECOLE PUBLIQUE DE NKOALA'A I / A",
              "voters": 113
            }
          ],
          "NKOALA": [
            {
              "station": "ECOLE PUBLIQUE DE NKOALA'A II / A",
              "voters": 101
            }
          ],
          "NKOAMBE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOAMBE / A",
              "voters": 163
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE MVENGUE III / A",
              "voters": 189
            }
          ],
          "MEDZOBO": [
            {
              "station": "SAR/SM DE MVENGUE MEDZOBO / A",
              "voters": 163
            }
          ]
        },
        "NIETE": {
          "BIDOU": [
            {
              "station": "ECOLE PUBLIQUE BIDOU III / A",
              "voters": 160
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE BIDOU III / A",
              "voters": 160
            }
          ],
          "ADJAP": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP / A",
              "voters": 249
            }
          ],
          "AKO'OZAM": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP / A",
              "voters": 249
            }
          ],
          "NKOMGMINTOM": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP / A",
              "voters": 249
            }
          ],
          "AFANG-OVENG": [
            {
              "station": "ECOLE PUBLIQUE D'AFAN-OVENG / A",
              "voters": 184
            }
          ],
          "ANGALE": [
            {
              "station": "ECOLE PUBLIQUE D'AFAN-OVENG / A",
              "voters": 184
            }
          ],
          "AKOM": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM I / A",
              "voters": 172
            }
          ],
          "EDOUDOUMA": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM I / A",
              "voters": 172
            }
          ],
          "NJANTOM": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM I / A",
              "voters": 172
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE D'AKOM I / A",
              "voters": 11059
            }
          ],
          "BIFA": [
            {
              "station": "ECOLE PUBLIQUE DE BIFA / A",
              "voters": 75
            }
          ],
          "MEKANDA": [
            {
              "station": "ECOLE PUBLIQUE DE BIFA / A",
              "voters": 75
            }
          ],
          "OLEM": [
            {
              "station": "ECOLE PUBLIQUE DE BIFA / A",
              "voters": 75
            }
          ],
          "NGOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NGOCK / A",
              "voters": 261
            }
          ],
          "NKO'OLONG": [
            {
              "station": "ECOLE PUBLIQUE DE NKO'OLONG / A",
              "voters": 230
            }
          ],
          "ANDJECK": [
            {
              "station": "ECOLE PUBLIQUE DE ZINGUI / A",
              "voters": 302
            }
          ],
          "BINAK": [
            {
              "station": "ECOLE PUBLIQUE DE ZINGUI / A",
              "voters": 302
            }
          ],
          "NYEMA": [
            {
              "station": "ECOLE PUBLIQUE DE ZINGUI / A",
              "voters": 302
            }
          ],
          "ZINGUI": [
            {
              "station": "ECOLE PUBLIQUE DE ZINGUI / A",
              "voters": 302
            }
          ],
          "CITE": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE 1 / A",
              "voters": 159
            }
          ],
          "DES": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE 1 / A",
              "voters": 159
            }
          ],
          "CADRES": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE 1 / A",
              "voters": 159
            }
          ],
          "LOBE": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE 15 / A",
              "voters": 686
            }
          ],
          "NIETE": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE 2 / A",
              "voters": 545
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE HOP. /  A",
              "voters": 65
            }
          ],
          "HOPITAL": [
            {
              "station": "ECOLE PUBLIQUE HEVECAM VILLAGE HOP. /  A",
              "voters": 65
            }
          ],
          "NLOZOK": [
            {
              "station": "ECOLE PUBLIQUE NKO'OLONG / A",
              "voters": 45
            }
          ],
          "NKOLMBONDA": [
            {
              "station": "ESPL. BAR ALIMENTATION CODERA / A",
              "voters": 149
            }
          ],
          "NKOMBONDA": [
            {
              "station": "ESPL. BAR ALIMENTATION CODERA / A",
              "voters": 149
            }
          ],
          "NLONGO": [
            {
              "station": "SALLE DES FETES NLONGO / A",
              "voters": 107
            }
          ],
          "GENDARMERIE": [
            {
              "station": "SALLE DES FETES NLONGO / A",
              "voters": 107
            }
          ]
        }
      },
      "VALLE DU": {
        "AMBAM": {
          "AKINA": [
            {
              "station": "CORPS DE GARDE AKINA / A",
              "voters": 67
            }
          ],
          "AKOM": [
            {
              "station": "CORPS DE GARDE AKOM BIKAK / A",
              "voters": 73
            }
          ],
          "BIKAK": [
            {
              "station": "CORPS DE GARDE AKOM BIKAK / A",
              "voters": 73
            }
          ],
          "YAT": [
            {
              "station": "CORPS DE GARDE AMBAM YAT / A",
              "voters": 439
            }
          ],
          "BILE": [
            {
              "station": "CORPS DE GARDE BILE OSSI / A",
              "voters": 107
            }
          ],
          "OSSI": [
            {
              "station": "CORPS DE GARDE BILE OSSI / A",
              "voters": 107
            }
          ],
          "BILIK": [
            {
              "station": "CORPS DE GARDE BILIK-BI-THO / A",
              "voters": 123
            }
          ],
          "THO": [
            {
              "station": "CORPS DE GARDE BILIK-BI-THO / A",
              "voters": 280
            }
          ],
          "BINDAMEYOS": [
            {
              "station": "CORPS DE GARDE BINDAMEYOS / A",
              "voters": 144
            }
          ],
          "EBOZI": [
            {
              "station": "CORPS DE GARDE EBOZI I / A",
              "voters": 160
            }
          ],
          "EKOUMEDOUM": [
            {
              "station": "CORPS DE GARDE EKOUMEDOUM / A",
              "voters": 248
            }
          ],
          "ELON": [
            {
              "station": "CORPS DE GARDE ELON / A",
              "voters": 108
            }
          ],
          "KONEMEKAK": [
            {
              "station": "CORPS DE GARDE KONEMEKAK / A",
              "voters": 84
            }
          ],
          "ESSAKORAN": [
            {
              "station": "CORPS DE GARDE M . OVENG ESSAKORAN /  A",
              "voters": 99
            }
          ],
          "MEDJOUNOU": [
            {
              "station": "CORPS DE GARDE MEDJOUNOU / A",
              "voters": 69
            }
          ],
          "MEKAMAN": [
            {
              "station": "CORPS DE GARDE MEKAMAN / A",
              "voters": 124
            }
          ],
          "MEKOMO": [
            {
              "station": "CORPS DE GARDE MEKOMO AMBAM / A",
              "voters": 255
            }
          ],
          "MENGOMO": [
            {
              "station": "CORPS DE GARDE MENGOMO / A",
              "voters": 175
            }
          ],
          "MESSI-MESSI": [
            {
              "station": "CORPS DE GARDE MESSI-MESSI / A",
              "voters": 81
            }
          ],
          "NKOLMELEN": [
            {
              "station": "CORPS DE GARDE NKOLMELEN / A",
              "voters": 55
            }
          ],
          "NKOTOVENG": [
            {
              "station": "CORPS DE GARDE NKOTOVENG / A",
              "voters": 163
            }
          ],
          "NNEZAM": [
            {
              "station": "CORPS DE GARDE NNEZAM / A",
              "voters": 77
            }
          ],
          "NSELANG": [
            {
              "station": "CORPS DE GARDE NSELANG / A",
              "voters": 107
            }
          ],
          "NSESSOUM": [
            {
              "station": "CORPS DE GARDE NSESSOUM / A",
              "voters": 192
            }
          ],
          "NYANZANGA": [
            {
              "station": "CORPS DE GARDE NYAZANGA / A",
              "voters": 137
            }
          ],
          "YOS-MA'AN": [
            {
              "station": "CORPS DE GARDE YOS-MA'AN / A",
              "voters": 28
            }
          ],
          "ZALOM": [
            {
              "station": "CORPS-DE-GARDE ZALOM / A",
              "voters": 45
            }
          ],
          "MELEN-SI": [
            {
              "station": "DELEGATION MINDAF-AMBAM / A",
              "voters": 760
            }
          ],
          "CENTRE": [
            {
              "station": "DOUANE AMBAM / A",
              "voters": 572
            }
          ],
          "VILLE": [
            {
              "station": "DOUANE AMBAM / A",
              "voters": 206
            }
          ],
          "NSOLE": [
            {
              "station": "ECOLE ANNEXE NSOLE / A",
              "voters": 994
            }
          ],
          "NKOLETAM": [
            {
              "station": "ECOLE CATHOLIQUE NKOLETAM / A",
              "voters": 253
            }
          ],
          "ABANG": [
            {
              "station": "ECOLE PUBLIQUE ABANG BETHEL / A",
              "voters": 1125
            }
          ],
          "BETHEL": [
            {
              "station": "ECOLE PUBLIQUE ABANG BETHEL / A",
              "voters": 122
            }
          ],
          "AKAK": [
            {
              "station": "ECOLE PUBLIQUE AKAK METOM / A",
              "voters": 52
            }
          ],
          "METOM": [
            {
              "station": "ECOLE PUBLIQUE AKAK METOM / A",
              "voters": 52
            }
          ],
          "AKAM": [
            {
              "station": "ECOLE PUBLIQUE AKAM BITAM I / A",
              "voters": 489
            }
          ],
          "BITAM": [
            {
              "station": "ECOLE PUBLIQUE AKAM BITAM I / A",
              "voters": 299
            }
          ],
          "MESSI": [
            {
              "station": "ECOLE PUBLIQUE AKAM MESSI / A",
              "voters": 190
            }
          ],
          "AKONETYE": [
            {
              "station": "ECOLE PUBLIQUE AKONETYE / A",
              "voters": 173
            }
          ],
          "AKOULEZOK": [
            {
              "station": "ECOLE PUBLIQUE AKOULEZOK / A",
              "voters": 361
            }
          ],
          "ANDOM": [
            {
              "station": "ECOLE PUBLIQUE ANDOM / A",
              "voters": 128
            }
          ],
          "ASSANDJIK": [
            {
              "station": "ECOLE PUBLIQUE ASSANDJIK / A",
              "voters": 126
            }
          ],
          "YAMA": [
            {
              "station": "ECOLE PUBLIQUE BILIK BI YAMA / A",
              "voters": 154
            }
          ],
          "BIYI": [
            {
              "station": "ECOLE PUBLIQUE BIYI-EBA / A",
              "voters": 166
            }
          ],
          "EBA": [
            {
              "station": "ECOLE PUBLIQUE BIYI-EBA / A",
              "voters": 91
            }
          ],
          "EFACK": [
            {
              "station": "ECOLE PUBLIQUE BIYI-EFACK / A",
              "voters": 75
            }
          ],
          "MEYO": [
            {
              "station": "ECOLE PUBLIQUE DE MEYO CENTRE / A",
              "voters": 631
            }
          ],
          "NEW": [
            {
              "station": "ECOLE PUBLIQUE DE NEW BELL / A",
              "voters": 670
            }
          ],
          "BELL": [
            {
              "station": "ECOLE PUBLIQUE DE NEW BELL / A",
              "voters": 670
            }
          ],
          "AVIATION": [
            {
              "station": "ECOLE PUBLIQUE DU CENTRE / A",
              "voters": 1799
            }
          ],
          "MBAM": [
            {
              "station": "ECOLE PUBLIQUE MBAM ESSAOBAM / A",
              "voters": 136
            }
          ],
          "ESSAOBAM": [
            {
              "station": "ECOLE PUBLIQUE MBAM ESSAOBAM / A",
              "voters": 241
            }
          ],
          "MEFOUP": [
            {
              "station": "ECOLE PUBLIQUE MEFOUP ESSAKAK / A",
              "voters": 264
            }
          ],
          "ESSAKAK": [
            {
              "station": "ECOLE PUBLIQUE MEFOUP ESSAKAK / A",
              "voters": 264
            }
          ],
          "MEMVIM": [
            {
              "station": "ECOLE PUBLIQUE MEMVIM / A",
              "voters": 85
            }
          ],
          "MENDJIMI": [
            {
              "station": "ECOLE PUBLIQUE MENDJIMI / A",
              "voters": 249
            }
          ],
          "MENGAMA": [
            {
              "station": "ECOLE PUBLIQUE MENGAMA / A",
              "voters": 100
            }
          ],
          "ELIE": [
            {
              "station": "ECOLE PUBLIQUE MEYO-ELIE / A",
              "voters": 265
            }
          ],
          "MEYO-NYAKA": [
            {
              "station": "ECOLE PUBLIQUE MEYO-NYAKA / A",
              "voters": 121
            }
          ],
          "MFOULEKOK": [
            {
              "station": "ECOLE PUBLIQUE MFOULEKOK / A",
              "voters": 129
            }
          ],
          "MINDJI": [
            {
              "station": "ECOLE PUBLIQUE MINDI MI OVENG / A",
              "voters": 100
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PUBLIQUE MINDI MI OVENG / A",
              "voters": 199
            }
          ],
          "MINKOK": [
            {
              "station": "ECOLE PUBLIQUE MINKOK / A",
              "voters": 159
            }
          ],
          "MINYIN": [
            {
              "station": "ECOLE PUBLIQUE MINYIN / A",
              "voters": 205
            }
          ],
          "NGOM": [
            {
              "station": "ECOLE PUBLIQUE NGOM-ADJAP / A",
              "voters": 167
            }
          ],
          "ADJAP": [
            {
              "station": "ECOLE PUBLIQUE NGOM-ADJAP / A",
              "voters": 62
            }
          ],
          "NKAN": [
            {
              "station": "ECOLE PUBLIQUE NKAN / A",
              "voters": 122
            }
          ],
          "NKO'OMBE": [
            {
              "station": "ECOLE PUBLIQUE NKO'OMBE / A",
              "voters": 90
            }
          ],
          "NKOLEFOULAN": [
            {
              "station": "ECOLE PUBLIQUE NKOLEFOULAN / A",
              "voters": 88
            }
          ],
          "NKOLEKON": [
            {
              "station": "ECOLE PUBLIQUE NKOLEKON / A",
              "voters": 68
            }
          ],
          "NPWA": [
            {
              "station": "ECOLE PUBLIQUE NKPWA EVOLE / A",
              "voters": 201
            }
          ],
          "EVOLE": [
            {
              "station": "ECOLE PUBLIQUE NKPWA EVOLE / A",
              "voters": 201
            }
          ],
          "NLONO": [
            {
              "station": "ECOLE PUBLIQUE NLONO / A",
              "voters": 148
            }
          ],
          "NONG": [
            {
              "station": "ECOLE PUBLIQUE NONG / A",
              "voters": 53
            }
          ],
          "ZAMINKAN": [
            {
              "station": "ECOLE PUBLIQUE ZAMINKAN / A",
              "voters": 136
            }
          ],
          "AFANETE": [
            {
              "station": "ECOLE-PRIVEE AFANETE / A",
              "voters": 1798
            }
          ],
          "PRISON": [
            {
              "station": "ESPLANADE PRISON / A",
              "voters": 181
            }
          ],
          "QUARTIER": [
            {
              "station": "FOYER MUNICIPAL AMBAM / A",
              "voters": 397
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "FOYER MUNICIPAL AMBAM / A",
              "voters": 397
            }
          ],
          "AMBAM": [
            {
              "station": "LYCEE BILINGUE AMBAM / A",
              "voters": 8875
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "LYCEE BILINGUE AMBAM / A",
              "voters": 388
            }
          ],
          "MINKO": [
            {
              "station": "LYCEE MIXTE ABANG MINKO / A",
              "voters": 1003
            }
          ],
          "NKOUMEKEKE": [
            {
              "station": "LYCEE TECHNIQUE NKOUMEKEKE / A",
              "voters": 735
            }
          ]
        },
        "KYE-OSSI": {
          "ONGOZOK": [
            {
              "station": "BUREAU DE DOUANE ONGOZOK / A",
              "voters": 74
            }
          ],
          "FENETE": [
            {
              "station": "CENTRE DE SANTEINTEGREDE FENETE / A",
              "voters": 204
            }
          ],
          "EBENGON": [
            {
              "station": "CORPS DE GARDE EBENGON I / A",
              "voters": 257
            }
          ],
          "KONO": [
            {
              "station": "CORPS DE GARDE KONO FONOSSI / A",
              "voters": 202
            }
          ],
          "FONOSSI": [
            {
              "station": "CORPS DE GARDE KONO FONOSSI / A",
              "voters": 202
            }
          ],
          "MEFOUP": [
            {
              "station": "CORPS DE GARDE MEFOUP / A",
              "voters": 109
            }
          ],
          "METET": [
            {
              "station": "CORPS DE GARDE METET / A",
              "voters": 138
            }
          ],
          "MINYON": [
            {
              "station": "CORPS DE GARDE MINYON / A",
              "voters": 57
            }
          ],
          "NKAN": [
            {
              "station": "CORPS DE GARDE NKAN / A",
              "voters": 57
            }
          ],
          "AKOMBANG": [
            {
              "station": "DOUANE AKOMBANG / A",
              "voters": 8086
            }
          ],
          "NSANBWANG": [
            {
              "station": "E.P. DE NSANGBWANG / A",
              "voters": 136
            }
          ],
          "NSANGBWANG": [
            {
              "station": "E.P. DE NSANGBWANG / A",
              "voters": 136
            }
          ],
          "ADJOU'OU": [
            {
              "station": "ECOLE PUBLIQUE ADJOU'OU / A",
              "voters": 84
            }
          ],
          "AKONANGUI": [
            {
              "station": "ECOLE PUBLIQUE AKONANGUI / A",
              "voters": 198
            }
          ],
          "DAMA": [
            {
              "station": "ECOLE PUBLIQUE DAMA / A",
              "voters": 106
            }
          ],
          "KYE-OSSI": [
            {
              "station": "ECOLE PUBLIQUE KYE-OSSI / A",
              "voters": 1709
            }
          ],
          "MINKOMO": [
            {
              "station": "ECOLE PUBLIQUE MINKOMO / A",
              "voters": 112
            }
          ],
          "NGOAZIK": [
            {
              "station": "ECOLE PUBLIQUE NGOAZIK / A",
              "voters": 274
            }
          ],
          "MEKOMO": [
            {
              "station": "ECOLE PUBLIQUE NKOSSI MEKOMO I / A",
              "voters": 386
            }
          ],
          "NSANA": [
            {
              "station": "ECOLE PUBLIQUE NSANA / A",
              "voters": 207
            }
          ],
          "NSEZANG": [
            {
              "station": "ECOLE PUBLIQUE NSEZANG / A",
              "voters": 62
            }
          ],
          "MEYO": [
            {
              "station": "TRIBUNAL COUTUMIER MEYO NKOULOU / A",
              "voters": 168
            }
          ],
          "NKOULOU": [
            {
              "station": "TRIBUNAL COUTUMIER MEYO NKOULOU / A",
              "voters": 168
            }
          ]
        },
        "MA'AN": {
          "ZOUAMEYONG": [
            {
              "station": "CENTRE DE SANTE DE ZOUAMEYONG / A",
              "voters": 54
            }
          ],
          "CHEFFERIE": [
            {
              "station": "CORPS DE GARDE D'ABEM / A",
              "voters": 231
            }
          ],
          "ODING": [
            {
              "station": "CORPS DE GARDE D'ABEM / A",
              "voters": 66
            }
          ],
          "AKOM": [
            {
              "station": "CORPS DE GARDE D'AKOM / A",
              "voters": 167
            }
          ],
          "EBOLMBAMA": [
            {
              "station": "CORPS DE GARDE D'EBOLMBAMA / A",
              "voters": 65
            }
          ],
          "ENDENDEM": [
            {
              "station": "CORPS DE GARDE D'ENDENDEM / A",
              "voters": 150
            }
          ],
          "ABANG": [
            {
              "station": "CORPS DE GARDE DE MEBERA / A",
              "voters": 208
            }
          ],
          "BITOTO": [
            {
              "station": "CORPS DE GARDE DE MEBERA / A",
              "voters": 130
            }
          ],
          "MEBERA": [
            {
              "station": "CORPS DE GARDE DE MEBERA / A",
              "voters": 130
            }
          ],
          "NDJAZENG": [
            {
              "station": "CORPS DE GARDE DE NDJAZENG / A",
              "voters": 98
            }
          ],
          "EWONG": [
            {
              "station": "CORPS DE GARDE DE NGBWA-AKOM / A",
              "voters": 61
            }
          ],
          "NGBWA": [
            {
              "station": "CORPS DE GARDE DE NGBWA-AKOM / A",
              "voters": 61
            }
          ],
          "MELEN": [
            {
              "station": "CORPS DE GARDE DE NNEMEYONG / A",
              "voters": 184
            }
          ],
          "NNEMEYONG": [
            {
              "station": "CORPS DE GARDE DE NNEMEYONG / A",
              "voters": 127
            }
          ],
          "NSEBITO": [
            {
              "station": "CORPS DE GARDE DE NSEBITO / A",
              "voters": 124
            }
          ],
          "NYABIBAK": [
            {
              "station": "CORPS DE GARDE DE NYABIBAK / A",
              "voters": 61
            }
          ],
          "MEYO-NTEM": [
            {
              "station": "CORPS DE GARDE DE ZOETELE / A",
              "voters": 177
            }
          ],
          "MEYOS": [
            {
              "station": "CORPS DE GARDE DE ZOETELE / A",
              "voters": 177
            }
          ],
          "ZOETELE": [
            {
              "station": "CORPS DE GARDE DE ZOETELE / A",
              "voters": 177
            }
          ],
          "NKOL": [
            {
              "station": "CORPS DE GARGE DE MEKONDOM / A",
              "voters": 78
            }
          ],
          "ABUI": [
            {
              "station": "CORPS DE GARGE DE MEKONDOM / A",
              "voters": 78
            }
          ],
          "AFAN": [
            {
              "station": "ECOLE PUBLIQUE D'AFAN / A",
              "voters": 83
            }
          ],
          "ALEN1": [
            {
              "station": "ECOLE PUBLIQUE D'ALEN 1 / A",
              "voters": 156
            }
          ],
          "NKONGMEYOS": [
            {
              "station": "ECOLE PUBLIQUE D'ALEN 1 / A",
              "voters": 156
            }
          ],
          "ALEN": [
            {
              "station": "ECOLE PUBLIQUE D'ALEN 2 / A",
              "voters": 96
            }
          ],
          "NTEBEZOK": [
            {
              "station": "ECOLE PUBLIQUE D'ALEN 2 / A",
              "voters": 96
            }
          ],
          "ALOUM": [
            {
              "station": "ECOLE PUBLIQUE D'ALOUM 1 / A",
              "voters": 245
            }
          ],
          "ANGUIRIDJANG": [
            {
              "station": "ECOLE PUBLIQUE D'ANGUIRIDJANG / A",
              "voters": 89
            }
          ],
          "ASSAM": [
            {
              "station": "ECOLE PUBLIQUE D'ASSAM / A",
              "voters": 96
            }
          ],
          "SON": [
            {
              "station": "ECOLE PUBLIQUE D'ASSAM / A",
              "voters": 96
            }
          ],
          "AYA'AMANG": [
            {
              "station": "ECOLE PUBLIQUE D'AYA'AMANG / A",
              "voters": 87
            }
          ],
          "EKEKE": [
            {
              "station": "ECOLE PUBLIQUE D'EKEKE / A",
              "voters": 105
            }
          ],
          "EVES": [
            {
              "station": "ECOLE PUBLIQUE D'EVES / A",
              "voters": 185
            }
          ],
          "EVOLE": [
            {
              "station": "ECOLE PUBLIQUE D'EVOLE / A",
              "voters": 113
            }
          ],
          "EVOUZOK": [
            {
              "station": "ECOLE PUBLIQUE D'EVOUZOK / A",
              "voters": 68
            }
          ],
          "MEKONDOM": [
            {
              "station": "ECOLE PUBLIQUE D'EVOUZOK / A",
              "voters": 107
            }
          ],
          "EVINDISSI": [
            {
              "station": "ECOLE PUBLIQUE D'OKONG / A",
              "voters": 203
            }
          ],
          "OKONG": [
            {
              "station": "ECOLE PUBLIQUE D'OKONG / A",
              "voters": 203
            }
          ],
          "BIDJAP": [
            {
              "station": "ECOLE PUBLIQUE DE BIDJAP / A",
              "voters": 244
            }
          ],
          "BIYAN": [
            {
              "station": "ECOLE PUBLIQUE DE BIYAN / A",
              "voters": 89
            }
          ],
          "MA'AN": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AN CENTRE / A",
              "voters": 958
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AN CENTRE / A",
              "voters": 958
            }
          ],
          "MINKAN-MENGALE": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AN CENTRE / A",
              "voters": 1222
            }
          ],
          "NNEZAM": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AN CENTRE / A",
              "voters": 1021
            }
          ],
          "MBEKOMO": [
            {
              "station": "ECOLE PUBLIQUE DE MBEKOMO / A",
              "voters": 126
            }
          ],
          "MEBANG": [
            {
              "station": "ECOLE PUBLIQUE DE MEBANG / A",
              "voters": 97
            }
          ],
          "MEKOK": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOK / A",
              "voters": 249
            }
          ],
          "NGO'AMBANG": [
            {
              "station": "ECOLE PUBLIQUE DE MELEN 2 / A",
              "voters": 57
            }
          ],
          "BINDEM": [
            {
              "station": "ECOLE PUBLIQUE DE MESSAMA 1 / A",
              "voters": 143
            }
          ],
          "MESSAMA": [
            {
              "station": "ECOLE PUBLIQUE DE MESSAMA 1 / A",
              "voters": 293
            }
          ],
          "MESSONDO": [
            {
              "station": "ECOLE PUBLIQUE DE METONDO / A",
              "voters": 65
            }
          ],
          "METONDO": [
            {
              "station": "ECOLE PUBLIQUE DE METONDO / A",
              "voters": 65
            }
          ],
          "MFANG": [
            {
              "station": "ECOLE PUBLIQUE DE MFANG / A",
              "voters": 165
            }
          ],
          "MFOUA": [
            {
              "station": "ECOLE PUBLIQUE DE MFOUA / A",
              "voters": 120
            }
          ],
          "MINKAN": [
            {
              "station": "ECOLE PUBLIQUE DE MINKAN / A",
              "voters": 33
            }
          ],
          "ZAMAYAT": [
            {
              "station": "ECOLE PUBLIQUE DE MINKAN- MENGALE / A",
              "voters": 264
            }
          ],
          "MVI'ILIMENGALE": [
            {
              "station": "ECOLE PUBLIQUE DE MVI'ILIMENGALE / A",
              "voters": 138
            }
          ],
          "NKO'ONDO'O": [
            {
              "station": "ECOLE PUBLIQUE DE NKO'ONDO'O / A",
              "voters": 89
            }
          ],
          "NSENGOU": [
            {
              "station": "ECOLE PUBLIQUE DE NSENGOU / A",
              "voters": 49
            }
          ],
          "ANGALE": [
            {
              "station": "ECOLE PUBLIQUE DE NSOMESSOK / A",
              "voters": 155
            }
          ],
          "NSOMESSOK": [
            {
              "station": "ECOLE PUBLIQUE DE NSOMESSOK / A",
              "voters": 85
            }
          ],
          "ABEM": [
            {
              "station": "ECOLE PUBLIQUE DE NYABESSANG / A",
              "voters": 555
            }
          ],
          "NYABESSANG": [
            {
              "station": "ECOLE PUBLIQUE DE NYABESSANG / A",
              "voters": 489
            }
          ],
          "ASSENG": [
            {
              "station": "ECOLE PUBLIQUE DE TOM / A",
              "voters": 104
            }
          ],
          "TOM": [
            {
              "station": "ECOLE PUBLIQUE DE TOM / A",
              "voters": 104
            }
          ],
          "MEKOMENGON": [
            {
              "station": "ECOLE PUBLIQUE DE TYA'ASSONO / A",
              "voters": 153
            }
          ],
          "TYA'ASSONO": [
            {
              "station": "ECOLE PUBLIQUE DE TYA'ASSONO / A",
              "voters": 153
            }
          ],
          "NKOMO": [
            {
              "station": "ECOLE PUBLIQUE DANGALE / A",
              "voters": 70
            }
          ],
          "OFET": [
            {
              "station": "ECOLE PUBLIQUE DANGALE / A",
              "voters": 70
            }
          ],
          "EVOUMA": [
            {
              "station": "ECOLE PUBLIQUE DEVOUMA / A",
              "voters": 91
            }
          ],
          "MEBEM": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 198
            }
          ],
          "CARREFOUR": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 132
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 66
            }
          ],
          "BILINGUE": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 66
            }
          ],
          "MVAM": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 66
            }
          ],
          "ZAMBE": [
            {
              "station": "LYCEE BILINGUE DE MEBEM / A",
              "voters": 66
            }
          ]
        },
        "OLAMZE": {
          "OBANG": [
            {
              "station": "CORPS DE GARDE D'OBANG / A",
              "voters": 114
            }
          ],
          "VILLAGE": [
            {
              "station": "CORPS DE GARDE D'OLAMZE VILLAGE / A",
              "voters": 153
            }
          ],
          "OLANG-AMVILA": [
            {
              "station": "CORPS DE GARDE D'OLANG AMVILA / A",
              "voters": 260
            }
          ],
          "OLANG": [
            {
              "station": "CORPS DE GARDE D'OLANG MFOUMOU / A",
              "voters": 70
            }
          ],
          "MFOUMOU": [
            {
              "station": "CORPS DE GARDE D'OLANG MFOUMOU / A",
              "voters": 70
            }
          ],
          "OLANG-LAE": [
            {
              "station": "CORPS DE GARDE D'OLANG-LAE / A",
              "voters": 96
            }
          ],
          "BINDOM": [
            {
              "station": "CORPS DE GARDE DE BINDOM / A",
              "voters": 50
            }
          ],
          "BIYI": [
            {
              "station": "CORPS DE GARDE DE BIYI / A",
              "voters": 141
            }
          ],
          "MBANG": [
            {
              "station": "CORPS DE GARDE DE MBANG / A",
              "voters": 81
            }
          ],
          "MENGUET": [
            {
              "station": "CORPS DE GARDE DE MENGUET / A",
              "voters": 75
            }
          ],
          "MEYO-NKOLAYAT": [
            {
              "station": "CORPS DE GARDE DE MEYO NKOLAYAT / A",
              "voters": 145
            }
          ],
          "MINDJO-KOUMOU": [
            {
              "station": "CORPS DE GARDE DE MINDJO-KOUMOU / A",
              "voters": 121
            }
          ],
          "MBO'O": [
            {
              "station": "E.P. DE MEKA'AMINKOUMOU / A",
              "voters": 140
            }
          ],
          "AYOP": [
            {
              "station": "E.P. DE MEKA'AMINKOUMOU / A",
              "voters": 140
            }
          ],
          "MEKA'AMINKOUMOU": [
            {
              "station": "E.P. DE MEKA'AMINKOUMOU / A",
              "voters": 140
            }
          ],
          "MEKAAMINKOUMOU": [
            {
              "station": "E.P. DE MEKA'AMINKOUMOU / A",
              "voters": 140
            }
          ],
          "ATA'ANTEM": [
            {
              "station": "ECOLE PUBLIQUE D'ATA'ANTEM / A",
              "voters": 219
            }
          ],
          "EMIANGON": [
            {
              "station": "ECOLE PUBLIQUE D'EMIANGON / A",
              "voters": 88
            }
          ],
          "ENGO-NLOZOK": [
            {
              "station": "ECOLE PUBLIQUE D'ENGO-NLOZOK / A",
              "voters": 129
            }
          ],
          "EYINANTOUM": [
            {
              "station": "ECOLE PUBLIQUE D'EYINANTOUM / A",
              "voters": 121
            }
          ],
          "OLAMZE": [
            {
              "station": "ECOLE PUBLIQUE D'OLAMZE CENTRE / A",
              "voters": 1405
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE D'OLAMZE CENTRE / A",
              "voters": 417
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE D'OLAMZE CENTRE / A",
              "voters": 835
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE PUBLIQUE D'OLAMZE CENTRE / A",
              "voters": 835
            }
          ],
          "OLANG-CENTRE": [
            {
              "station": "ECOLE PUBLIQUE D'OLANG -CENTRE / A",
              "voters": 101
            }
          ],
          "MBE": [
            {
              "station": "ECOLE PUBLIQUE DE MBE ETO / A",
              "voters": 210
            }
          ],
          "ETO": [
            {
              "station": "ECOLE PUBLIQUE DE MBE ETO / A",
              "voters": 210
            }
          ],
          "MEKO'OSSI": [
            {
              "station": "ECOLE PUBLIQUE DE MEKO'OSSI I / A",
              "voters": 713
            }
          ],
          "MEKOMENGONA": [
            {
              "station": "ECOLE PUBLIQUE DE MEKOMENGONA I / A",
              "voters": 353
            }
          ],
          "MENGUIKOM": [
            {
              "station": "ECOLE PUBLIQUE DE MENGUIKOM / A",
              "voters": 497
            }
          ],
          "MEYO-CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE DE MEYO -CARREFOUR / A",
              "voters": 249
            }
          ],
          "YOS": [
            {
              "station": "ECOLE PUBLIQUE DE YOS II / A",
              "voters": 212
            }
          ],
          "AKAA-": [
            {
              "station": "ECOLE PUBLIQUE MBEDOUMOU-SI / A",
              "voters": 78
            }
          ],
          "AKAA-SI": [
            {
              "station": "ECOLE PUBLIQUE MBEDOUMOU-SI / A",
              "voters": 78
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE MBEDOUMOU-SI / A",
              "voters": 78
            }
          ],
          "MBEDOUMOU-SI": [
            {
              "station": "ECOLE PUBLIQUE MBEDOUMOU-SI / A",
              "voters": 156
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE PUBLIQUE MBEDOUMOU-SI / A",
              "voters": 78
            }
          ]
        }
      },
      "DJA-ET-LOBO": {
        "BENGBIS": {
          "MEKAS": [
            {
              "station": "CES MEKAS / A",
              "voters": 127
            }
          ],
          "NGONEBEME": [
            {
              "station": "CES NGONEBEME / A",
              "voters": 130
            }
          ],
          "AKAM": [
            {
              "station": "CORPS DE GARDE AKAM II / A",
              "voters": 522
            }
          ],
          "OYEM": [
            {
              "station": "CORPS DE GARDE AKAM II / A",
              "voters": 261
            }
          ],
          "ANDO'O": [
            {
              "station": "CORPS DE GARDE ANDO'O / A",
              "voters": 113
            }
          ],
          "ADJOLE": [
            {
              "station": "CORPS DE GARDE BENGBIS II BANZOK / A",
              "voters": 144
            }
          ],
          "BENGBIS": [
            {
              "station": "CORPS DE GARDE BENGBIS II BANZOK / A",
              "voters": 1301
            }
          ],
          "BANZOCK": [
            {
              "station": "CORPS DE GARDE BENGBIS II BANZOK / A",
              "voters": 144
            }
          ],
          "CHEFFERIE": [
            {
              "station": "CORPS DE GARDE BENGBIS II CHEFFERIE / A",
              "voters": 77
            }
          ],
          "BITON": [
            {
              "station": "CORPS DE GARDE BITON / A",
              "voters": 72
            }
          ],
          "NGOUNAYOS": [
            {
              "station": "CORPS DE GARDE CARREF. NGOUNAYOS / A",
              "voters": 152
            }
          ],
          "DOUMA": [
            {
              "station": "CORPS DE GARDE DOUMA / A",
              "voters": 101
            }
          ],
          "DOUMBANYAN": [
            {
              "station": "CORPS DE GARDE DOUMBAYAN / A",
              "voters": 31
            }
          ],
          "EBODOUMOU": [
            {
              "station": "CORPS DE GARDE EBODOUMOU / A",
              "voters": 105
            }
          ],
          "ENDAM": [
            {
              "station": "CORPS DE GARDE ENDAM / A",
              "voters": 89
            }
          ],
          "MEBA": [
            {
              "station": "CORPS DE GARDE MEBA / A",
              "voters": 61
            }
          ],
          "MEBOMO": [
            {
              "station": "CORPS DE GARDE MEBOMO / A",
              "voters": 58
            }
          ],
          "MEKA'A": [
            {
              "station": "CORPS DE GARDE MEKA'A / A",
              "voters": 457
            }
          ],
          "AKOE": [
            {
              "station": "CORPS DE GARDE MEKA'A AKOE / A",
              "voters": 94
            }
          ],
          "YANDA": [
            {
              "station": "CORPS DE GARDE MEKA'A AKOE / A",
              "voters": 94
            }
          ],
          "YEKOMBO": [
            {
              "station": "CORPS DE GARDE MEKA'A YEKOMBO / A",
              "voters": 132
            }
          ],
          "YETYANG": [
            {
              "station": "CORPS DE GARDE MEKA'A YETYANG / A",
              "voters": 79
            }
          ],
          "MIMBANG": [
            {
              "station": "CORPS DE GARDE MIMBANG / A",
              "voters": 52
            }
          ],
          "NDOUNDOU": [
            {
              "station": "CORPS DE GARDE NDOUNDOU / A",
              "voters": 104
            }
          ],
          "NGOBISSONG": [
            {
              "station": "CORPS DE GARDE NGOBISSONG / A",
              "voters": 117
            }
          ],
          "NKOLMEKAE": [
            {
              "station": "CORPS DE GARDE NKOLMEKAE / A",
              "voters": 76
            }
          ],
          "NKOULAZE": [
            {
              "station": "CORPS DE GARDE NKOULAZE / A",
              "voters": 55
            }
          ],
          "ONGOLZOK": [
            {
              "station": "CORPS DE GARDE ONGOLZOK / A",
              "voters": 112
            }
          ],
          "ALANGANA": [
            {
              "station": "CORPS DE GARDE YEME YEME II / A",
              "voters": 85
            }
          ],
          "YEME": [
            {
              "station": "CORPS DE GARDE YEME YEME II / A",
              "voters": 170
            }
          ],
          "NGOMBO": [
            {
              "station": "CORPS DE GARDE ZOUAMEYONG / A",
              "voters": 70
            }
          ],
          "ZOUAMEYONG": [
            {
              "station": "CORPS DE GARDE ZOUAMEYONG / A",
              "voters": 70
            }
          ],
          "ASSOK": [
            {
              "station": "EP ASSOK / A",
              "voters": 169
            }
          ],
          "CENTRE": [
            {
              "station": "EP BENGBIS-VILLE / A",
              "voters": 976
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "EP BENGBIS-VILLE / A",
              "voters": 976
            }
          ],
          "BIBINDA": [
            {
              "station": "EP BIBINDA / A",
              "voters": 180
            }
          ],
          "BISSOMBO": [
            {
              "station": "EP BISSOMBO / A",
              "voters": 65
            }
          ],
          "DJENG": [
            {
              "station": "EP DJENG / A",
              "voters": 160
            }
          ],
          "ESSON": [
            {
              "station": "EP DJENG / A",
              "voters": 160
            }
          ],
          "EVINDISSI": [
            {
              "station": "EP EVINDISSI / A",
              "voters": 116
            }
          ],
          "KAM": [
            {
              "station": "EP EVINDISSI / A",
              "voters": 116
            }
          ],
          "KOUNGOULOU": [
            {
              "station": "EP KOUNGOULOU / A",
              "voters": 91
            }
          ],
          "MBOMETA'A": [
            {
              "station": "EP MBOMETA'A / A",
              "voters": 161
            }
          ],
          "MBOUN": [
            {
              "station": "EP MBOUN / A",
              "voters": 72
            }
          ],
          "MELONDO": [
            {
              "station": "EP MELONDO / A",
              "voters": 101
            }
          ],
          "MESSE": [
            {
              "station": "EP MESSE / A",
              "voters": 97
            }
          ],
          "EWOT": [
            {
              "station": "EP MESSENG / A",
              "voters": 86
            }
          ],
          "MESSENG": [
            {
              "station": "EP MESSENG / A",
              "voters": 86
            }
          ],
          "METOM": [
            {
              "station": "EP METOM / A",
              "voters": 137
            }
          ],
          "MIMBIL": [
            {
              "station": "EP MIMBIL / A",
              "voters": 141
            }
          ],
          "MINLA'A": [
            {
              "station": "EP MINLA'A / A",
              "voters": 144
            }
          ],
          "NKOLBEMBE": [
            {
              "station": "EP NKOLMBEMBE / A",
              "voters": 137
            }
          ],
          "NSIMALEN": [
            {
              "station": "EP NKOLMBEMBE / A",
              "voters": 137
            }
          ],
          "MELAN": [
            {
              "station": "EP NYANGBWASSA / A",
              "voters": 178
            }
          ],
          "OLEMBE": [
            {
              "station": "EP OLEMBE / A",
              "voters": 105
            }
          ],
          "EWOLOMBAMA": [
            {
              "station": "EP TENG / A",
              "voters": 202
            }
          ],
          "TENG": [
            {
              "station": "EP TENG / A",
              "voters": 202
            }
          ],
          "TYIZOCK": [
            {
              "station": "EP TYIZOK / A",
              "voters": 76
            }
          ],
          "ALLEN": [
            {
              "station": "EP ZALENGANG / A",
              "voters": 80
            }
          ],
          "ZALENGANG": [
            {
              "station": "EP ZALENGANG / A",
              "voters": 80
            }
          ]
        },
        "DJOUM": {
          "ADJAP": [
            {
              "station": "ANCIEN MARCHE / A",
              "voters": 342
            }
          ],
          "AKONETYE": [
            {
              "station": "CASE COM. MINKO'O MESSENG / A",
              "voters": 87
            }
          ],
          "MESSENG": [
            {
              "station": "CASE COM. MINKO'O MESSENG / A",
              "voters": 87
            }
          ],
          "ABOELONE": [
            {
              "station": "CASE COMMUNAUTAIRE ABOELONE / A",
              "voters": 139
            }
          ],
          "AMVAM": [
            {
              "station": "CASE COMMUNAUTAIRE AMVAM / A",
              "voters": 85
            }
          ],
          "OTTONGMBONG": [
            {
              "station": "CASE COMMUNAUTAIRE AMVAM / A",
              "voters": 85
            }
          ],
          "AVOBENGON": [
            {
              "station": "CASE COMMUNAUTAIRE AVOBENGON / A",
              "voters": 36
            }
          ],
          "DJOP": [
            {
              "station": "CASE COMMUNAUTAIRE DJOP / A",
              "voters": 137
            }
          ],
          "MBOMELA": [
            {
              "station": "CASE COMMUNAUTAIRE MBOMELA / A",
              "voters": 40
            }
          ],
          "ALOP": [
            {
              "station": "CORPS DE GARDE ALOP / A",
              "voters": 58
            }
          ],
          "DJOUZE": [
            {
              "station": "CORPS DE GARDE DJOUZE / A",
              "voters": 177
            }
          ],
          "DOUM": [
            {
              "station": "CORPS DE GARDE DOUM / A",
              "voters": 87
            }
          ],
          "AKAK": [
            {
              "station": "CORPS DE GARDE ELLENG / A",
              "voters": 137
            }
          ],
          "ELLENG": [
            {
              "station": "CORPS DE GARDE ELLENG / A",
              "voters": 340
            }
          ],
          "MEYOS": [
            {
              "station": "CORPS DE GARDE ELLENG / A",
              "voters": 260
            }
          ],
          "OBAM": [
            {
              "station": "CORPS DE GARDE ELLENG / A",
              "voters": 137
            }
          ],
          "MBOUMA": [
            {
              "station": "CORPS DE GARDE MBOUMA / A",
              "voters": 99
            }
          ],
          "MINKO'O": [
            {
              "station": "CORPS DE GARDE MINKO'O / A",
              "voters": 348
            }
          ],
          "NKO": [
            {
              "station": "CORPS DE GARDE NKO / A",
              "voters": 81
            }
          ],
          "OKPWENG": [
            {
              "station": "CORPS DE GARDE OKPWENG / A",
              "voters": 142
            }
          ],
          "KAKA": [
            {
              "station": "CYBER MUNICIPAL / A",
              "voters": 434
            }
          ],
          "NEW-TOWN": [
            {
              "station": "CYBER MUNICIPAL / A",
              "voters": 434
            }
          ],
          "ABING": [
            {
              "station": "ECOLE CATHO ABING / A",
              "voters": 237
            }
          ],
          "DJOUM": [
            {
              "station": "ECOLE CATHO ABING / A",
              "voters": 2123
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE CATHO ABING / A",
              "voters": 1416
            }
          ],
          "VILLE": [
            {
              "station": "EM DJOUM VILLE / A",
              "voters": 814
            }
          ],
          "ZAMANE": [
            {
              "station": "EP AKOM ZAMANE / A",
              "voters": 275
            }
          ],
          "AKONTANGAN": [
            {
              "station": "EP AKONTANGAN / A",
              "voters": 163
            }
          ],
          "AVEBE": [
            {
              "station": "EP AVEBE / A",
              "voters": 71
            }
          ],
          "ALAT": [
            {
              "station": "EP BINDOUMBA / A",
              "voters": 204
            }
          ],
          "MEKAE": [
            {
              "station": "EP BINDOUMBA / A",
              "voters": 204
            }
          ],
          "BINDOUMBA": [
            {
              "station": "EP BINDOUMBA / A",
              "voters": 204
            }
          ],
          "CENTRE": [
            {
              "station": "EP CIFAN / A",
              "voters": 1415
            }
          ],
          "D'INSTRUCTION": [
            {
              "station": "EP CIFAN / A",
              "voters": 601
            }
          ],
          "NKAN": [
            {
              "station": "EP CIFAN / A",
              "voters": 418
            }
          ],
          "EFOULAN": [
            {
              "station": "EP EFOULAN / A",
              "voters": 156
            }
          ],
          "MENDOUNG": [
            {
              "station": "EP EFOULAN / A",
              "voters": 156
            }
          ],
          "AKOM": [
            {
              "station": "EP ENDENGUE / A",
              "voters": 390
            }
          ],
          "BINYENG": [
            {
              "station": "EP ENDENGUE / A",
              "voters": 188
            }
          ],
          "ENDENGUE": [
            {
              "station": "EP ENDENGUE / A",
              "voters": 330
            }
          ],
          "ESSONG": [
            {
              "station": "EP ESSONG / A",
              "voters": 131
            }
          ],
          "BITEBIOKANG": [
            {
              "station": "EP GROUPE III / A",
              "voters": 1577
            }
          ],
          "LONO-YAT": [
            {
              "station": "EP GROUPE III / A",
              "voters": 1179
            }
          ],
          "MEBANE": [
            {
              "station": "EP MEBANE / A",
              "voters": 312
            }
          ],
          "MELLEN": [
            {
              "station": "EP MELLEN BOULOU / A",
              "voters": 223
            }
          ],
          "BOULOU": [
            {
              "station": "EP MELLEN BOULOU / A",
              "voters": 150
            }
          ],
          "III": [
            {
              "station": "EP MEYOS III / A",
              "voters": 123
            }
          ],
          "AYENE": [
            {
              "station": "EP MFEM / A",
              "voters": 287
            }
          ],
          "MFEM": [
            {
              "station": "EP MFEM / A",
              "voters": 287
            }
          ],
          "MIATTA": [
            {
              "station": "EP MIATTA / A",
              "voters": 200
            }
          ],
          "MVENG": [
            {
              "station": "EP MVENG / A",
              "voters": 255
            }
          ],
          "NKOLAFENDEK": [
            {
              "station": "EP NKOLAFENDEK / A",
              "voters": 191
            }
          ],
          "NKOLENYENG": [
            {
              "station": "EP NKOLENYENG / A",
              "voters": 183
            }
          ],
          "NYABIBETE": [
            {
              "station": "EP NYABIBETE / A",
              "voters": 124
            }
          ],
          "YEN": [
            {
              "station": "EP YEN / A",
              "voters": 312
            }
          ],
          "ACCRA": [
            {
              "station": "ESPLANADE CHEFFERIE HAOUSSA / A",
              "voters": 444
            }
          ],
          "HAOUSSA": [
            {
              "station": "ESPLANADE CHEFFERIE HAOUSSA / A",
              "voters": 531
            }
          ],
          "SOCIETE": [
            {
              "station": "FOYER CHANTIER CAMINEX / A",
              "voters": 19
            }
          ],
          "CAMINEX": [
            {
              "station": "FOYER CHANTIER CAMINEX / A",
              "voters": 19
            }
          ],
          "ETOILE": [
            {
              "station": "FOYER DU SOLDAT / A",
              "voters": 801
            }
          ],
          "SFID": [
            {
              "station": "FOYER SCIERIE / A",
              "voters": 106
            }
          ],
          "EVINDI-SI": [
            {
              "station": "TRAVAUX PUBLICS / A",
              "voters": 185
            }
          ]
        },
        "MEYOMESSI": {
          "OLOUNOU": [
            {
              "station": "ANGAT OLOUNOU / A",
              "voters": 259
            }
          ],
          "AMVAN": [
            {
              "station": "CENTRE DE SANTE INTEGRE D'AMVAN / A",
              "voters": 70
            }
          ],
          "NGOM-EBAE": [
            {
              "station": "CENTRE PRESCOLAIRE NGOM-EBAE / A",
              "voters": 159
            }
          ],
          "EMVIENG": [
            {
              "station": "CORPS DE GARDE EMVIENG I / A",
              "voters": 265
            }
          ],
          "MBIELEME": [
            {
              "station": "CORPS DE GARDE MBIELEME / A",
              "voters": 187
            }
          ],
          "MEKOK-NDONG": [
            {
              "station": "CORPS DE GARDE MEKOK-NDONG / A",
              "voters": 165
            }
          ],
          "MELAN-NDONG": [
            {
              "station": "CORPS DE GARDE MELAN-NDONG / A",
              "voters": 156
            }
          ],
          "MIMBANG": [
            {
              "station": "CORPS DE GARDE MIMBANG / A",
              "voters": 142
            }
          ],
          "CHEFFERIE": [
            {
              "station": "CORPS DE GARDE MINKANG II / A",
              "voters": 203
            }
          ],
          "AKOM-NDONG": [
            {
              "station": "EP AKOM-NDONG / A",
              "voters": 184
            }
          ],
          "AZEM-YEMFEK": [
            {
              "station": "EP AZEM-YEMFEK / A",
              "voters": 284
            }
          ],
          "BIKOULA": [
            {
              "station": "EP BIKOULA / A",
              "voters": 152
            }
          ],
          "ELOM": [
            {
              "station": "EP ELOM / A",
              "voters": 354
            }
          ],
          "ESSANGMVOUT": [
            {
              "station": "EP ESSANGMVOUT / A",
              "voters": 187
            }
          ],
          "ESSONG-NDONG": [
            {
              "station": "EP ESSONG / A",
              "voters": 74
            }
          ],
          "KONGO": [
            {
              "station": "EP KONGO / A",
              "voters": 330
            }
          ],
          "MBILEMVOM": [
            {
              "station": "EP MBILEMVOM / A",
              "voters": 162
            }
          ],
          "MEDJOUNOU": [
            {
              "station": "EP MEDJOUNOU / A",
              "voters": 220
            }
          ],
          "MELOK": [
            {
              "station": "EP MELOK / A",
              "voters": 146
            }
          ],
          "MESSOK-NDONG": [
            {
              "station": "EP MESSOK / A",
              "voters": 117
            }
          ],
          "MEYOMESSI": [
            {
              "station": "EP MEYOMESSI / A",
              "voters": 557
            }
          ],
          "MEYOS": [
            {
              "station": "EP MEYOS / A",
              "voters": 190
            }
          ],
          "MINKANG": [
            {
              "station": "EP MINKANG I / A",
              "voters": 429
            }
          ],
          "NDJELE": [
            {
              "station": "EP NDJELE / A",
              "voters": 52
            }
          ],
          "ODING": [
            {
              "station": "EP ODING / A",
              "voters": 91
            }
          ]
        },
        "MEYOMESSALA": {
          "SDAIC": [
            {
              "station": "BLOC ADMINISTRATIF SUDCAM I / A",
              "voters": 265
            }
          ],
          "SUDCAM": [
            {
              "station": "BLOC ADMINISTRATIF SUDCAM I / A",
              "voters": 1917
            }
          ],
          "YOUS": [
            {
              "station": "CASE COMMUNAUTAIRE YOUS / A",
              "voters": 68
            }
          ],
          "KOUT": [
            {
              "station": "CENTRE COOP MEYOMAKOT / A",
              "voters": 207
            }
          ],
          "MEYOMAKOT": [
            {
              "station": "CENTRE COOP MEYOMAKOT / A",
              "voters": 207
            }
          ],
          "MEMVAE": [
            {
              "station": "CENTRE COOP NNEMEYONG III / A",
              "voters": 287
            }
          ],
          "MINTIMA": [
            {
              "station": "CENTRE COOP NNEMEYONG III / A",
              "voters": 287
            }
          ],
          "NNEMEYONG": [
            {
              "station": "CENTRE COOP NNEMEYONG III / A",
              "voters": 766
            }
          ],
          "III": [
            {
              "station": "CENTRE COOP NNEMEYONG III / A",
              "voters": 560
            }
          ],
          "VILLAGE": [
            {
              "station": "CENTRE DE SANTESUDCAM II / A",
              "voters": 1417
            }
          ],
          "MEBAME": [
            {
              "station": "CES MEBAME / A",
              "voters": 156
            }
          ],
          "NDONKOL": [
            {
              "station": "CETIC NDONKOL / A",
              "voters": 166
            }
          ],
          "ALEN": [
            {
              "station": "CORPS DE GARDE ALEN / A",
              "voters": 189
            }
          ],
          "BIKOKO": [
            {
              "station": "CORPS DE GARDE ALEN / A",
              "voters": 189
            }
          ],
          "BIBAS": [
            {
              "station": "CORPS DE GARDE BIBAS / A",
              "voters": 99
            }
          ],
          "CHEFFERIE": [
            {
              "station": "CORPS DE GARDE BIDJONG / A",
              "voters": 930
            }
          ],
          "LIBI": [
            {
              "station": "CORPS DE GARDE BIDJONG / A",
              "voters": 443
            }
          ],
          "SNEC": [
            {
              "station": "CORPS DE GARDE BIDJONG / A",
              "voters": 443
            }
          ],
          "EBOLAKOUNOU": [
            {
              "station": "CORPS DE GARDE EBOLAKOUNOU / A",
              "voters": 42
            }
          ],
          "EKONG": [
            {
              "station": "CORPS DE GARDE EKONG / A",
              "voters": 525
            }
          ],
          "ETON": [
            {
              "station": "CORPS DE GARDE ETON / A",
              "voters": 111
            }
          ],
          "MEYOS": [
            {
              "station": "CORPS DE GARDE ETON / A",
              "voters": 343
            }
          ],
          "YETYANG": [
            {
              "station": "CORPS DE GARDE ETON / A",
              "voters": 111
            }
          ],
          "MBANLAM": [
            {
              "station": "CORPS DE GARDE MBANLAM / A",
              "voters": 74
            }
          ],
          "MBE'ELON": [
            {
              "station": "CORPS DE GARDE MBE'ELON / A",
              "voters": 104
            }
          ],
          "MELOK": [
            {
              "station": "CORPS DE GARDE MELOK II / A",
              "voters": 374
            }
          ],
          "NKO'ONTONDA": [
            {
              "station": "CORPS DE GARDE NKO'ONTONDA / A",
              "voters": 67
            }
          ],
          "YEMFEK": [
            {
              "station": "E.P. DE YEMFECK / A",
              "voters": 874
            }
          ],
          "YEM": [
            {
              "station": "E.P. DE YEMFECK / A",
              "voters": 334
            }
          ],
          "ANYOUNGAN": [
            {
              "station": "EP ANYOUNGAN / A",
              "voters": 205
            }
          ],
          "ONGONGO'O": [
            {
              "station": "EP ANYOUNGAN / A",
              "voters": 205
            }
          ],
          "BIBA": [
            {
              "station": "EP BIBA YEZOUM / A",
              "voters": 697
            }
          ],
          "YEZOUM": [
            {
              "station": "EP BIBA YEZOUM / A",
              "voters": 157
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "EP BIBOULEMAN / A",
              "voters": 165
            }
          ],
          "ANDOM": [
            {
              "station": "EP BIDJONG / A",
              "voters": 514
            }
          ],
          "ANGAMBA": [
            {
              "station": "EP BIDJONG / A",
              "voters": 514
            }
          ],
          "BIDJONG": [
            {
              "station": "EP BIDJONG / A",
              "voters": 1444
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP BIDJONG / A",
              "voters": 514
            }
          ],
          "BITYE": [
            {
              "station": "EP BITYE / A",
              "voters": 231
            }
          ],
          "BIYEBE": [
            {
              "station": "EP BIYEBE / A",
              "voters": 57
            }
          ],
          "MENGOM": [
            {
              "station": "EP BIYEBE / A",
              "voters": 391
            }
          ],
          "BITEKBOE": [
            {
              "station": "EP EBEZOM / A",
              "voters": 251
            }
          ],
          "EBEZOM": [
            {
              "station": "EP EBEZOM / A",
              "voters": 251
            }
          ],
          "NKOLESSAS": [
            {
              "station": "EP EBEZOM / A",
              "voters": 251
            }
          ],
          "NKOUT": [
            {
              "station": "EP EBEZOM / A",
              "voters": 251
            }
          ],
          "AKOM": [
            {
              "station": "EP EDJOM / A",
              "voters": 161
            }
          ],
          "NDONG": [
            {
              "station": "EP EDJOM / A",
              "voters": 161
            }
          ],
          "EDJOM": [
            {
              "station": "EP EDJOM / A",
              "voters": 161
            }
          ],
          "NDJOM": [
            {
              "station": "EP EDJOM / A",
              "voters": 418
            }
          ],
          "YEKOMBO": [
            {
              "station": "EP EDJOM / A",
              "voters": 418
            }
          ],
          "BISSO'O": [
            {
              "station": "EP EFOULAN YASSAMAN / A",
              "voters": 307
            }
          ],
          "EFOULAN": [
            {
              "station": "EP EFOULAN YASSAMAN / A",
              "voters": 895
            }
          ],
          "YASSAMAN": [
            {
              "station": "EP EFOULAN YASSAMAN / A",
              "voters": 193
            }
          ],
          "EKOK": [
            {
              "station": "EP EKOK / A",
              "voters": 130
            }
          ],
          "MEKIN": [
            {
              "station": "EP EKOK / A",
              "voters": 595
            }
          ],
          "MEKOMO": [
            {
              "station": "EP EKOK / A",
              "voters": 130
            }
          ],
          "ENDAM": [
            {
              "station": "EP ENDAM / A",
              "voters": 285
            }
          ],
          "YEMBONG": [
            {
              "station": "EP ENDAM / A",
              "voters": 285
            }
          ],
          "FIBOT": [
            {
              "station": "EP FIBOT-YEBENE / A",
              "voters": 61
            }
          ],
          "YEBENE": [
            {
              "station": "EP FIBOT-YEBENE / A",
              "voters": 61
            }
          ],
          "KOUM": [
            {
              "station": "EP KOUM YETOTANE / A",
              "voters": 575
            }
          ],
          "ELLE": [
            {
              "station": "EP KPWE / A",
              "voters": 316
            }
          ],
          "KPWE": [
            {
              "station": "EP KPWE / A",
              "voters": 316
            }
          ],
          "ESSON": [
            {
              "station": "EP MEKALAT / A",
              "voters": 375
            }
          ],
          "MEKALAT": [
            {
              "station": "EP MEKALAT / A",
              "voters": 198
            }
          ],
          "MESSOK": [
            {
              "station": "EP MESSOK / A",
              "voters": 359
            }
          ],
          "YEMVAK": [
            {
              "station": "EP MEYOS YEMVAK / A",
              "voters": 107
            }
          ],
          "YEBAE": [
            {
              "station": "EP MEZA'A I / A",
              "voters": 177
            }
          ],
          "MEZA'A": [
            {
              "station": "EP MEZA'A I / A",
              "voters": 354
            }
          ],
          "ESSONG": [
            {
              "station": "EP MIMBANG / A",
              "voters": 98
            }
          ],
          "MIMBANG": [
            {
              "station": "EP MIMBANG / A",
              "voters": 98
            }
          ],
          "MVANBISSON": [
            {
              "station": "EP MVANBISSON / A",
              "voters": 179
            }
          ],
          "MVIA": [
            {
              "station": "EP MVIA / A",
              "voters": 243
            }
          ],
          "MVOMEKA'A": [
            {
              "station": "EP MVOMEKA'A / A",
              "voters": 2521
            }
          ],
          "YEMVAM": [
            {
              "station": "EP NDJABEM / A",
              "voters": 513
            }
          ],
          "NDJABEM": [
            {
              "station": "EP NDJABEM / A",
              "voters": 125
            }
          ],
          "EBANG": [
            {
              "station": "EP NDJIKOM / A",
              "voters": 142
            }
          ],
          "NDJIKOM": [
            {
              "station": "EP NDJIKOM / A",
              "voters": 732
            }
          ],
          "MELAN": [
            {
              "station": "EP NDJOM-YEKOMBO / A",
              "voters": 257
            }
          ],
          "AKOK": [
            {
              "station": "EP NKO / A",
              "voters": 325
            }
          ],
          "MINKO": [
            {
              "station": "EP NKO / A",
              "voters": 418
            }
          ],
          "NKO": [
            {
              "station": "EP NKO / A",
              "voters": 325
            }
          ],
          "NKOLEBO'O": [
            {
              "station": "EP NKOLEBO'O / A",
              "voters": 225
            }
          ],
          "NKOLENDAM": [
            {
              "station": "EP NKOLEBO'O / A",
              "voters": 225
            }
          ],
          "NKOLESSAM": [
            {
              "station": "EP NKOMO / A",
              "voters": 240
            }
          ],
          "NKOMO": [
            {
              "station": "EP NKOMO / A",
              "voters": 240
            }
          ],
          "NGOUNDOU": [
            {
              "station": "EP NKONGMEKAK / A",
              "voters": 289
            }
          ],
          "NKONGMEKAK": [
            {
              "station": "EP NKONGMEKAK / A",
              "voters": 289
            }
          ],
          "OVENG-SI": [
            {
              "station": "EP NKONGMEKAK / A",
              "voters": 289
            }
          ],
          "NLOBESSE'E": [
            {
              "station": "EP NLOBESSE'E / A",
              "voters": 353
            }
          ],
          "NYE'ELE": [
            {
              "station": "EP NYE'ELE / A",
              "voters": 1045
            }
          ],
          "LOUM": [
            {
              "station": "EP OYOP / A",
              "voters": 128
            }
          ],
          "OYOP": [
            {
              "station": "EP OYOP / A",
              "voters": 128
            }
          ],
          "TATCHING": [
            {
              "station": "EP TATCHING I / A",
              "voters": 608
            }
          ],
          "OLONG": [
            {
              "station": "EP TEKMO II / A",
              "voters": 177
            }
          ],
          "TEKMO": [
            {
              "station": "EP TEKMO II / A",
              "voters": 878
            }
          ],
          "MESSILA": [
            {
              "station": "EP ZOUMEYO / A",
              "voters": 129
            }
          ],
          "ZOUMEYO": [
            {
              "station": "EP ZOUMEYO / A",
              "voters": 129
            }
          ],
          "NKOLDJA": [
            {
              "station": "ESPL. MARCHENKOLDJA / A",
              "voters": 178
            }
          ],
          "CAMP": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "SONEL": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "SOCIAL": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "EKOUK": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "MEYOMESSALA": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 2072
            }
          ],
          "NGAT": [
            {
              "station": "LYCEE TECH. MEYOMESSALA / A",
              "voters": 1585
            }
          ],
          "NKAE": [
            {
              "station": "MARCHE DE MINKO / A",
              "voters": 93
            }
          ],
          "MENGON": [
            {
              "station": "MISSION CATHOLIQUE MENGON / A",
              "voters": 263
            }
          ],
          "NOVAPALM": [
            {
              "station": "NOVAPALM FOYER / A",
              "voters": 176
            }
          ],
          "NGOASSE": [
            {
              "station": "SAR SM MVOMEKA'A / A",
              "voters": 1194
            }
          ]
        },
        "MINTOM": {
          "ZOULABOT": [
            {
              "station": "CENTRE PRESCOLAIRE ZOULABOT / A",
              "voters": 297
            }
          ],
          "BITE": [
            {
              "station": "CORPS DE GARDE BITE / A",
              "voters": 463
            }
          ],
          "ESSENG": [
            {
              "station": "CORPS DE GARDE ESSENG / A",
              "voters": 51
            }
          ],
          "BELLE": [
            {
              "station": "CORPS DE GARDE NOAH AKOM II / A",
              "voters": 189
            }
          ],
          "VILLE": [
            {
              "station": "CORPS DE GARDE NOAH AKOM II / A",
              "voters": 189
            }
          ],
          "EKOMBITE": [
            {
              "station": "CORPS DE GARDE NOAH AKOM II / A",
              "voters": 136
            }
          ],
          "AKOM": [
            {
              "station": "EP AKOM / A",
              "voters": 210
            }
          ],
          "ALATI": [
            {
              "station": "EP ALATI / A",
              "voters": 77
            }
          ],
          "BINDOM": [
            {
              "station": "EP BINDOM / A",
              "voters": 128
            }
          ],
          "DOUM": [
            {
              "station": "EP BINDOM / A",
              "voters": 128
            }
          ],
          "MEYIBOTO": [
            {
              "station": "EP DU CENTRE MINTOM II / A",
              "voters": 345
            }
          ],
          "MINTOM": [
            {
              "station": "EP DU CENTRE MINTOM II / A",
              "voters": 1059
            }
          ],
          "KOUNGOULOU": [
            {
              "station": "EP KOUNGOULOU / A",
              "voters": 119
            }
          ],
          "ZO'OTOU": [
            {
              "station": "EP KOUNGOULOU / A",
              "voters": 161
            }
          ],
          "LELE": [
            {
              "station": "EP LELE / A",
              "voters": 156
            }
          ],
          "NKOLFONG": [
            {
              "station": "EP LELE / A",
              "voters": 314
            }
          ],
          "MBOUT-OKONG": [
            {
              "station": "EP MBOUT-OKONG / A",
              "voters": 215
            }
          ],
          "MEKOM": [
            {
              "station": "EP MEKOM / A",
              "voters": 53
            }
          ],
          "MEKOTTO": [
            {
              "station": "EP MEKOTTO / A",
              "voters": 156
            }
          ],
          "NKOLMBOULA": [
            {
              "station": "EP NKOLMBOULA / A",
              "voters": 79
            }
          ],
          "ZOULAMEYONG": [
            {
              "station": "EP NKOLMBOULA / A",
              "voters": 327
            }
          ],
          "NKOLEFIAL": [
            {
              "station": "EP ZOEBEFAM / A",
              "voters": 248
            }
          ],
          "ZOEBEFAM": [
            {
              "station": "EP ZOEBEFAM / A",
              "voters": 200
            }
          ],
          "AKONETYE": [
            {
              "station": "FOYER AKONETYE / A",
              "voters": 55
            }
          ],
          "MENGOM": [
            {
              "station": "FOYER AKONETYE / A",
              "voters": 201
            }
          ],
          "SAKE": [
            {
              "station": "FOYER AKONETYE / A",
              "voters": 201
            }
          ],
          "NKOLKOUMOU": [
            {
              "station": "FOYER NKOLKOUMOU / A",
              "voters": 113
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE MINTOM CENTRE / A",
              "voters": 592
            }
          ]
        },
        "OVENG": {
          "AKOM": [
            {
              "station": "CORPS DE GARDE AKOM / A",
              "voters": 139
            }
          ],
          "EPC": [
            {
              "station": "CORPS DE GARDE AKOM / A",
              "voters": 139
            }
          ],
          "CORPS": [
            {
              "station": "CORPS DE GARDE DE BIKOUGOU / A",
              "voters": 35
            }
          ],
          "GARDE": [
            {
              "station": "CORPS DE GARDE DE BIKOUGOU / A",
              "voters": 35
            }
          ],
          "EBOMANE": [
            {
              "station": "CORPS DE GARDE EBOMANE / A",
              "voters": 62
            }
          ],
          "ENDONE": [
            {
              "station": "CORPS DE GARDE EBOMANE / A",
              "voters": 62
            }
          ],
          "EKOWONG": [
            {
              "station": "CORPS DE GARDE EKOWONG / A",
              "voters": 123
            }
          ],
          "ESSAM": [
            {
              "station": "CORPS DE GARDE ESSAM / A",
              "voters": 41
            }
          ],
          "MEBASSA": [
            {
              "station": "CORPS DE GARDE MEBASSA / A",
              "voters": 98
            }
          ],
          "MVAM": [
            {
              "station": "CORPS DE GARDE MVAM I / A",
              "voters": 251
            }
          ],
          "MBEDOUM": [
            {
              "station": "CORPS DE GARDE NKOLMESSAS / A",
              "voters": 177
            }
          ],
          "NKOLMESSAS": [
            {
              "station": "CORPS DE GARDE NKOLMESSAS / A",
              "voters": 177
            }
          ],
          "LALALA": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE OVENG / A",
              "voters": 174
            }
          ],
          "MISSION": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE OVENG / A",
              "voters": 348
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE OVENG / A",
              "voters": 174
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE OVENG / A",
              "voters": 483
            }
          ],
          "CATH": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE OVENG / A",
              "voters": 174
            }
          ],
          "NKO'ETENG": [
            {
              "station": "EM AKOM (NKO'ETENG) / A",
              "voters": 183
            }
          ],
          "ABECK": [
            {
              "station": "EP ABECK / A",
              "voters": 104
            }
          ],
          "VILLAGE": [
            {
              "station": "EP ABOULOU VILLAGE / A",
              "voters": 76
            }
          ],
          "ADJAP": [
            {
              "station": "EP ADJAP / A",
              "voters": 72
            }
          ],
          "AKOABAS": [
            {
              "station": "EP AKOABAS / A",
              "voters": 210
            }
          ],
          "ANDOUNG": [
            {
              "station": "EP ANDOUNG / A",
              "voters": 93
            }
          ],
          "BIKOUGOU": [
            {
              "station": "EP BITCHE / A",
              "voters": 181
            }
          ],
          "BITCHE": [
            {
              "station": "EP BITCHE / A",
              "voters": 111
            }
          ],
          "MEBANG": [
            {
              "station": "EP MEBANG / A",
              "voters": 120
            }
          ],
          "MEDJENG": [
            {
              "station": "EP MEDJENG / A",
              "voters": 162
            }
          ],
          "NDJA": [
            {
              "station": "EP NDJA / A",
              "voters": 125
            }
          ],
          "NGBWASSA": [
            {
              "station": "EP NGBWASSA / A",
              "voters": 124
            }
          ],
          "NGOUDJEN": [
            {
              "station": "EP NGOUDJEN / A",
              "voters": 123
            }
          ],
          "NKONO": [
            {
              "station": "EP NKONO / A",
              "voters": 113
            }
          ],
          "ONON": [
            {
              "station": "EP ONON / A",
              "voters": 216
            }
          ],
          "CENTRE": [
            {
              "station": "EP OVENG CENTRE CHEFFERIE / A",
              "voters": 309
            }
          ],
          "ANYOUNGOM": [
            {
              "station": "EPC ANYOUNGOM / A",
              "voters": 49
            }
          ],
          "BIFOT": [
            {
              "station": "EPC BIFOT / A",
              "voters": 70
            }
          ],
          "ESSAMENKOU": [
            {
              "station": "EPC ESSAMENKOU / A",
              "voters": 58
            }
          ],
          "BONO-SI": [
            {
              "station": "MAIRIE / A",
              "voters": 156
            }
          ],
          "ABOULOU": [
            {
              "station": "POSTE DE POLICE ABOULOU FRONTIERE / A",
              "voters": 266
            }
          ],
          "FRONTIERE": [
            {
              "station": "POSTE DE POLICE ABOULOU FRONTIERE / A",
              "voters": 190
            }
          ],
          "SOUS-PREFECTURE": [
            {
              "station": "SOUS-PREFECTURE / A",
              "voters": 130
            }
          ],
          "GENDARMERIE": [
            {
              "station": "TELECENTRE OVENG / A",
              "voters": 75
            }
          ]
        },
        "SANGMELIMA": {
          "SOURCES": [
            {
              "station": "ANTENNE CRTV / A",
              "voters": 332
            }
          ],
          "NKOLNGUET": [
            {
              "station": "BATIMENT ELEVAGE NKOLNGUET / A",
              "voters": 860
            }
          ],
          "NKOLEBOM": [
            {
              "station": "CES NKOLOTOU' OUTOU / A",
              "voters": 213
            }
          ],
          "COMMERCIAL": [
            {
              "station": "CODJAL / A",
              "voters": 506
            }
          ],
          "LOBO-SI": [
            {
              "station": "COLLEGE KISITO / A",
              "voters": 1782
            }
          ],
          "AKO'O-ESSE": [
            {
              "station": "CORPS DE GARDE AKO'O ESSE / A",
              "voters": 62
            }
          ],
          "AKO'O": [
            {
              "station": "CORPS DE GARDE AKO'O LUI / A",
              "voters": 107
            }
          ],
          "LUI": [
            {
              "station": "CORPS DE GARDE AKO'O LUI / A",
              "voters": 107
            }
          ],
          "EFOULAN": [
            {
              "station": "CORPS DE GARDE EFOULAN-YEMVAK / A",
              "voters": 83
            }
          ],
          "YEMVAK": [
            {
              "station": "CORPS DE GARDE EFOULAN-YEMVAK / A",
              "voters": 266
            }
          ],
          "MEKOMO": [
            {
              "station": "CORPS DE GARDE MEKOMO YENDAM / A",
              "voters": 201
            }
          ],
          "YENDAM": [
            {
              "station": "CORPS DE GARDE MEKOMO YENDAM / A",
              "voters": 114
            }
          ],
          "MFOULOVENG": [
            {
              "station": "CORPS DE GARDE MFOULOVENG / A",
              "voters": 90
            }
          ],
          "NGOMEYOP": [
            {
              "station": "CORPS DE GARDE NGOMEYOP / A",
              "voters": 90
            }
          ],
          "NKOETYE": [
            {
              "station": "CORPS DE GARDE NGOMEYOP / A",
              "voters": 90
            }
          ],
          "ZOEBEFAM": [
            {
              "station": "CORPS DE GARDE ZOEBEFAM / A",
              "voters": 65
            }
          ],
          "ZOUM": [
            {
              "station": "CORPS DE GARDE ZOUM / A",
              "voters": 225
            }
          ],
          "MONEKO'O": [
            {
              "station": "DISPENSAIRE MONEKO'O / A",
              "voters": 268
            }
          ],
          "NDJOM": [
            {
              "station": "DISPENSAIRE NDJOM ESSAMAN / A",
              "voters": 199
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE ANNEXE DE SANGMELIMA GI / A",
              "voters": 1409
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE ANNEXE DE SANGMELIMA GI / A",
              "voters": 903
            }
          ],
          "BASE": [
            {
              "station": "ECOLE ANNEXE HOPITAL / A",
              "voters": 694
            }
          ],
          "NYLON": [
            {
              "station": "ECOLE BILINGUE DE SANGMELIMA / A",
              "voters": 1013
            }
          ],
          "BRIQUETERIE": [
            {
              "station": "ECOLE CATHO ST JOSEPH / A",
              "voters": 751
            }
          ],
          "SANGMELIMA": [
            {
              "station": "ECOLE CATHO ST JOSEPH / A",
              "voters": 6579
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE CATHO ST JOSEPH / A",
              "voters": 6579
            }
          ],
          "III": [
            {
              "station": "ECOLE MATERNELLE 7E RUE / A",
              "voters": 1287
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "EM BIBOULEMAM / A",
              "voters": 110
            }
          ],
          "AKON": [
            {
              "station": "EM LA ROSEE DU SUD / A",
              "voters": 7324
            }
          ],
          "BISSONO": [
            {
              "station": "EM LA ROSEE DU SUD / A",
              "voters": 3346
            }
          ],
          "GENDARMERIE": [
            {
              "station": "EM LA ROSEE DU SUD / A",
              "voters": 2437
            }
          ],
          "MBELI'I": [
            {
              "station": "ENIEG / A",
              "voters": 620
            }
          ],
          "AKAK-ESSE": [
            {
              "station": "EP AKAK ESSE / A",
              "voters": 138
            }
          ],
          "AKOMENDIBI": [
            {
              "station": "EP AKOMENDIBI / A",
              "voters": 198
            }
          ],
          "AKOMESSING": [
            {
              "station": "EP AKOMESSING / A",
              "voters": 335
            }
          ],
          "ALOUMA": [
            {
              "station": "EP ALOUMA YEKOMBO / A",
              "voters": 382
            }
          ],
          "YEKOMBO": [
            {
              "station": "EP ALOUMA YEKOMBO / A",
              "voters": 538
            }
          ],
          "ASSOK-YEMVENG": [
            {
              "station": "EP ASSOK YEMVENG / A",
              "voters": 399
            }
          ],
          "YEMVENG": [
            {
              "station": "EP ASSOK-YEMVENG / A",
              "voters": 342
            }
          ],
          "AVEBE": [
            {
              "station": "EP AVEBE ESSE / A",
              "voters": 602
            }
          ],
          "ESSE": [
            {
              "station": "EP AVEBE ESSE / A",
              "voters": 539
            }
          ],
          "BENYOUNGOU": [
            {
              "station": "EP BENYOUNGOU / A",
              "voters": 158
            }
          ],
          "BIDJOM": [
            {
              "station": "EP BIDJOM / A",
              "voters": 260
            }
          ],
          "MANG": [
            {
              "station": "EP BIDJOM / A",
              "voters": 260
            }
          ],
          "BIKOBO": [
            {
              "station": "EP BIKOBO ESSAMAN / A",
              "voters": 267
            }
          ],
          "ESSAMAN": [
            {
              "station": "EP BIKOBO ESSAMAN / A",
              "voters": 466
            }
          ],
          "ANGONGUE": [
            {
              "station": "EP BINGOU / A",
              "voters": 159
            }
          ],
          "BINGOU": [
            {
              "station": "EP BINGOU / A",
              "voters": 159
            }
          ],
          "EPCO": [
            {
              "station": "EP BISSONO / A",
              "voters": 909
            }
          ],
          "BIZANG": [
            {
              "station": "EP BIZANG / A",
              "voters": 56
            }
          ],
          "MEKA'A": [
            {
              "station": "EP DE MEKA'A / A",
              "voters": 284
            }
          ],
          "EBOLENGBWANG": [
            {
              "station": "EP EBOLENGBWANG / A",
              "voters": 2128
            }
          ],
          "EKOUMEDOUM": [
            {
              "station": "EP EMINEMVOM / A",
              "voters": 379
            }
          ],
          "EMINEMVOM": [
            {
              "station": "EP EMINEMVOM / A",
              "voters": 449
            }
          ],
          "ESSAM-ESSE": [
            {
              "station": "EP ESSAM-ESSE / A",
              "voters": 112
            }
          ],
          "EVELESSI": [
            {
              "station": "EP EVELESSI I / A",
              "voters": 319
            }
          ],
          "EVINDISSI": [
            {
              "station": "EP EVINDISSI I / A",
              "voters": 323
            }
          ],
          "YETOK": [
            {
              "station": "EP EYE'E / A",
              "voters": 200
            }
          ],
          "EYE'E": [
            {
              "station": "EP EYE'E / A",
              "voters": 200
            }
          ],
          "KAMELON": [
            {
              "station": "EP KAMELON / A",
              "voters": 220
            }
          ],
          "KEKA": [
            {
              "station": "EP KEKA / A",
              "voters": 176
            }
          ],
          "KOMBE": [
            {
              "station": "EP KOMBE / A",
              "voters": 254
            }
          ],
          "KOUM": [
            {
              "station": "EP KOUM ESSE / A",
              "voters": 206
            }
          ],
          "MA'ANMENYIN": [
            {
              "station": "EP MA'ANMENYIN / A",
              "voters": 111
            }
          ],
          "MBOM": [
            {
              "station": "EP MBOM / A",
              "voters": 229
            }
          ],
          "MEBEM": [
            {
              "station": "EP MEBEM / A",
              "voters": 148
            }
          ],
          "MEKAM": [
            {
              "station": "EP MEKAM / A",
              "voters": 180
            }
          ],
          "MEKOM": [
            {
              "station": "EP MEKOM I / A",
              "voters": 228
            }
          ],
          "MELEN": [
            {
              "station": "EP MELEN / A",
              "voters": 127
            }
          ],
          "MENGUE": [
            {
              "station": "EP MENGUE / A",
              "voters": 162
            }
          ],
          "MESSAK": [
            {
              "station": "EP MENGUE / A",
              "voters": 304
            }
          ],
          "MEPHO": [
            {
              "station": "EP MEPHO / A",
              "voters": 295
            }
          ],
          "METET": [
            {
              "station": "EP METET / A",
              "voters": 160
            }
          ],
          "MEYO-ESSE": [
            {
              "station": "EP MEYO-ESSE / A",
              "voters": 140
            }
          ],
          "MEYOMADJOM": [
            {
              "station": "EP MEYOMADJOM / A",
              "voters": 364
            }
          ],
          "MEYOS": [
            {
              "station": "EP MEYOS ESSABIKOULA / A",
              "voters": 384
            }
          ],
          "ESSABIKOULA": [
            {
              "station": "EP MEYOS ESSABIKOULA / A",
              "voters": 292
            }
          ],
          "MEZESSE": [
            {
              "station": "EP MEZESSE / A",
              "voters": 230
            }
          ],
          "MINKPWAEMIOVENG": [
            {
              "station": "EP MINKPWAEMIOVENG / A",
              "voters": 121
            }
          ],
          "MINTYAEMINYUMIN": [
            {
              "station": "EP MINTYAEMINYUMIN / A",
              "voters": 511
            }
          ],
          "NDJANTOM": [
            {
              "station": "EP NDJANTOM / A",
              "voters": 388
            }
          ],
          "NDJOM-YEMVAK": [
            {
              "station": "EP NDJOM-YEMVAK / A",
              "voters": 130
            }
          ],
          "NGAM": [
            {
              "station": "EP NGAM YEMBONG / A",
              "voters": 739
            }
          ],
          "YEMBONG": [
            {
              "station": "EP NGAM YEMBONG / A",
              "voters": 444
            }
          ],
          "NGOULEMEKONG": [
            {
              "station": "EP NGOULEMEKONG / A",
              "voters": 355
            }
          ],
          "NKOLEWOT": [
            {
              "station": "EP NKOLEWOT / A",
              "voters": 101
            }
          ],
          "NKOLEYOP": [
            {
              "station": "EP NKOLEYOP / A",
              "voters": 164
            }
          ],
          "ONDONDO": [
            {
              "station": "EP NKOLEYOP / A",
              "voters": 164
            }
          ],
          "NKOLNGBWA": [
            {
              "station": "EP NKOLNGBWA / A",
              "voters": 123
            }
          ],
          "MFOULADJA": [
            {
              "station": "EP NKOLOTOU'OUTOU / A",
              "voters": 66
            }
          ],
          "NGOM": [
            {
              "station": "EP NKOLOTOU'OUTOU / A",
              "voters": 66
            }
          ],
          "NKOLOTOU'OUTOU": [
            {
              "station": "EP NKOLOTOU'OUTOU / A",
              "voters": 279
            }
          ],
          "NKOUT": [
            {
              "station": "EP NKOUT II / A",
              "voters": 92
            }
          ],
          "NKPWANG": [
            {
              "station": "EP NKPWANG / A",
              "voters": 510
            }
          ],
          "MIMBO": [
            {
              "station": "EP NLOUP / A",
              "voters": 344
            }
          ],
          "NLOUP": [
            {
              "station": "EP NLOUP / A",
              "voters": 344
            }
          ],
          "NYAZANGA": [
            {
              "station": "EP NYAZANGA / A",
              "voters": 138
            }
          ],
          "OVENG": [
            {
              "station": "EP OVENG YEMBONG / A",
              "voters": 230
            }
          ],
          "OVENG-YEMEVONG": [
            {
              "station": "EP OVENG-YEMEVONG / A",
              "voters": 132
            }
          ],
          "PLATEAU": [
            {
              "station": "EP PLATEAU CHIC / A",
              "voters": 802
            }
          ],
          "CHIC": [
            {
              "station": "EP PLATEAU CHIC / A",
              "voters": 802
            }
          ],
          "ZOUAMEYONG": [
            {
              "station": "EP ZOUAMEYONG / A",
              "voters": 110
            }
          ],
          "MONAVEBE": [
            {
              "station": "ETA MONAVEBE / A",
              "voters": 1213
            }
          ],
          "MINKONGO": [
            {
              "station": "FOYER FERUDJAL / A",
              "voters": 556
            }
          ],
          "EKOUMDOUM": [
            {
              "station": "HANGAR EKOUMEDOUM / A",
              "voters": 70
            }
          ],
          "ATONG": [
            {
              "station": "SALLE DE FETE ATONG / A",
              "voters": 151
            }
          ],
          "KONDEMEYOS": [
            {
              "station": "SALLE DE FETE KONDEMEYOS / A",
              "voters": 170
            }
          ],
          "KONDEYEBAE": [
            {
              "station": "SALLE DE FETE KONDEYEBAE / A",
              "voters": 157
            }
          ],
          "MENDONG": [
            {
              "station": "SALLE DE FETE MENDONG / A",
              "voters": 100
            }
          ],
          "NGON": [
            {
              "station": "SALLE DE FETE NGON / A",
              "voters": 154
            }
          ],
          "NSIMALENE": [
            {
              "station": "SALLE DE FETE NSIMALENE I / A",
              "voters": 172
            }
          ],
          "STADE": [
            {
              "station": "STADE MUNICIPAL / A",
              "voters": 721
            }
          ]
        },
        "ZOETELE": {
          "NKILZOK": [
            {
              "station": "CES NKILZOK / A",
              "voters": 705
            }
          ],
          "ADJAP": [
            {
              "station": "CORPS DE GARDE ADJAP / A",
              "voters": 64
            }
          ],
          "BIYAN": [
            {
              "station": "CORPS DE GARDE BIYAN-CARREFOUR / A",
              "voters": 241
            }
          ],
          "ENAMENGAL": [
            {
              "station": "CORPS DE GARDE ENAMENGAL / A",
              "voters": 82
            }
          ],
          "ENGOUTOUK": [
            {
              "station": "CORPS DE GARDE ENGOUTOUK / A",
              "voters": 308
            }
          ],
          "ESSA": [
            {
              "station": "CORPS DE GARDE ESSA / A",
              "voters": 156
            }
          ],
          "ETOTO": [
            {
              "station": "CORPS DE GARDE ETOTO / A",
              "voters": 289
            }
          ],
          "KONDEBILONG": [
            {
              "station": "CORPS DE GARDE KONDEBILONG / A",
              "voters": 196
            }
          ],
          "KONDEBIYEN": [
            {
              "station": "CORPS DE GARDE KONDEBIYEN / A",
              "voters": 70
            }
          ],
          "MEKAK": [
            {
              "station": "CORPS DE GARDE MEKAK / A",
              "voters": 125
            }
          ],
          "MELOMEBAE": [
            {
              "station": "CORPS DE GARDE MELOMEBAE CENTRE / A",
              "voters": 229
            }
          ],
          "MEYIBOTO": [
            {
              "station": "CORPS DE GARDE MEYIBOTO / A",
              "voters": 141
            }
          ],
          "NDELE": [
            {
              "station": "CORPS DE GARDE NDELE / A",
              "voters": 232
            }
          ],
          "NEW": [
            {
              "station": "CORPS DE GARDE NEW TOWN-ZOETELE / A",
              "voters": 333
            }
          ],
          "TOWN": [
            {
              "station": "CORPS DE GARDE NEW TOWN-ZOETELE / A",
              "voters": 333
            }
          ],
          "NGOLBANG": [
            {
              "station": "CORPS DE GARDE NGOLBANG / A",
              "voters": 248
            }
          ],
          "NKOLASSOK": [
            {
              "station": "CORPS DE GARDE NKOLASSOK / A",
              "voters": 124
            }
          ],
          "NKOLFITI": [
            {
              "station": "CORPS DE GARDE NKOLFITI / A",
              "voters": 171
            }
          ],
          "NKOLFONG": [
            {
              "station": "CORPS DE GARDE NKOLFONG / A",
              "voters": 332
            }
          ],
          "NNEMEYONG": [
            {
              "station": "CORPS DE GARDE NNEMEYONG / A",
              "voters": 52
            }
          ],
          "MEYILA": [
            {
              "station": "CORPS DE GARDE NYABIBETE / A",
              "voters": 727
            }
          ],
          "OLOUNOU": [
            {
              "station": "CORPS DE GARDE OLOUNOU / A",
              "voters": 93
            }
          ],
          "OTETEK": [
            {
              "station": "CORPS DE GARDE OTETEK / A",
              "voters": 341
            }
          ],
          "OVENG": [
            {
              "station": "CORPS DE GARDE OVENG-NKOLASSOK / A",
              "voters": 244
            }
          ],
          "ZOETELE": [
            {
              "station": "CORPS DE GARDE ZOETELE VILLAGE I / A",
              "voters": 725
            }
          ],
          "VILLAGE": [
            {
              "station": "CORPS DE GARDE ZOETELE VILLAGE I / A",
              "voters": 725
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE MATERNELLE ZOETELE / A",
              "voters": 1517
            }
          ],
          "ENYENG": [
            {
              "station": "ECOLE PUBLIQUE ENYENG / A",
              "voters": 132
            }
          ],
          "ABANGOK": [
            {
              "station": "EP ABANGOK / A",
              "voters": 271
            }
          ],
          "AKOK": [
            {
              "station": "EP AKOK / A",
              "voters": 183
            }
          ],
          "AWOUT": [
            {
              "station": "EP AWOUT / A",
              "voters": 198
            }
          ],
          "BIBE": [
            {
              "station": "EP BIBE / A",
              "voters": 70
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "EP BIBOULEMAM / A",
              "voters": 94
            }
          ],
          "BINDOUMBA": [
            {
              "station": "EP BINDOUMBA / A",
              "voters": 99
            }
          ],
          "EBAMINA": [
            {
              "station": "EP EBAMINA I / A",
              "voters": 631
            }
          ],
          "EKOMBITE": [
            {
              "station": "EP EKOMBITE / A",
              "voters": 179
            }
          ],
          "NKOUMADJAP": [
            {
              "station": "EP ELAND-NORD / A",
              "voters": 727
            }
          ],
          "FIBOT": [
            {
              "station": "EP FIBOT / A",
              "voters": 456
            }
          ],
          "KONDEMEYOS": [
            {
              "station": "EP KONDEMEYOS / A",
              "voters": 100
            }
          ],
          "MBEDOUMOU": [
            {
              "station": "EP MBEDOUMOU / A",
              "voters": 107
            }
          ],
          "MEBA": [
            {
              "station": "EP MEBA / A",
              "voters": 408
            }
          ],
          "MENGBWA": [
            {
              "station": "EP MENGBWA / A",
              "voters": 227
            }
          ],
          "MESSAM": [
            {
              "station": "EP MESSAM / A",
              "voters": 231
            }
          ],
          "MESSOK": [
            {
              "station": "EP MESSOK / A",
              "voters": 117
            }
          ],
          "MINKOUMOU": [
            {
              "station": "EP MINKOUMOU / A",
              "voters": 161
            }
          ],
          "MVOUTESSI": [
            {
              "station": "EP MVOUTESSI I / A",
              "voters": 689
            }
          ],
          "NGOMEDJAP": [
            {
              "station": "EP NGOMEDJAP / A",
              "voters": 164
            }
          ],
          "NGOUNGOUMOU": [
            {
              "station": "EP NGOUNGOUMOU I / A",
              "voters": 288
            }
          ],
          "CENTRE": [
            {
              "station": "EP NGOUNGOUMOU II CENTRE / A",
              "voters": 137
            }
          ],
          "NKOLBANG": [
            {
              "station": "EP NKOLBANG / A",
              "voters": 222
            }
          ],
          "III": [
            {
              "station": "EP NKOUMADJAP III / A",
              "voters": 132
            }
          ],
          "NSIMI": [
            {
              "station": "EP NSIMI-CARREFOUR / A",
              "voters": 294
            }
          ],
          "WOABETE": [
            {
              "station": "EP WOABETE / A",
              "voters": 198
            }
          ],
          "YEM": [
            {
              "station": "EP YEM-NKILZOK / A",
              "voters": 310
            }
          ],
          "LAC": [
            {
              "station": "MAIRIE DE ZOETELE / A",
              "voters": 452
            }
          ]
        }
      },
      "MVILA": {
        "BIWONG-BANE": {
          "ADJAP-MVOG-EDA": [
            {
              "station": "CASE A PALABRE D' ADJAP-MVOG-EDA / A",
              "voters": 351
            }
          ],
          "YEM": [
            {
              "station": "CASE A PALABRE D' ADJAP-MVOG-EDA / A",
              "voters": 522
            }
          ],
          "ATING-BANE": [
            {
              "station": "CASE A PALABRE D' ATING-BANE / A",
              "voters": 62
            }
          ],
          "ADJAP-MENYIE": [
            {
              "station": "CASE A PALABRE D'ADJAP-MENYIE / A",
              "voters": 50
            }
          ],
          "AKIAE": [
            {
              "station": "CASE A PALABRE D'AKIAE / A",
              "voters": 73
            }
          ],
          "EFOUMLOU-NSELEK": [
            {
              "station": "CASE A PALABRE D'EFOUMLOU-NSELEK / A",
              "voters": 47
            }
          ],
          "ABIERE": [
            {
              "station": "CASE A PALABRE D'OVENG-BANE / A",
              "voters": 182
            }
          ],
          "OVENGE-BANE": [
            {
              "station": "CASE A PALABRE D'OVENG-BANE / A",
              "voters": 182
            }
          ],
          "OVENG-FONG": [
            {
              "station": "CASE A PALABRE D'OVENG-FONG / A",
              "voters": 175
            }
          ],
          "NKOLONYIE": [
            {
              "station": "CASE A PALABRE DE NKOLONYIE / A",
              "voters": 242
            }
          ],
          "METET": [
            {
              "station": "CASE A PALABRE METET / A",
              "voters": 210
            }
          ],
          "OBANG": [
            {
              "station": "CASE A PALABRE OBANG I / A",
              "voters": 42
            }
          ],
          "OFOUMBI": [
            {
              "station": "ECOLE CATHOLIQUE D'OFOUMBI / A",
              "voters": 109
            }
          ],
          "MINKANE": [
            {
              "station": "ECOLE CATHOLIQUE DE MINKANE / A",
              "voters": 160
            }
          ],
          "NDZOM-BANE": [
            {
              "station": "ECOLE FAMILIALE D'AGRICULTURE  NDZOM-BANE / A",
              "voters": 177
            }
          ],
          "ADJAP-FONG": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP-FONG / A",
              "voters": 140
            }
          ],
          "EBEMEWOMAN": [
            {
              "station": "ECOLE PUBLIQUE D'EBEMEVOMAN I / A",
              "voters": 252
            }
          ],
          "KAMA": [
            {
              "station": "ECOLE PUBLIQUE DE KAMA / A",
              "voters": 378
            }
          ],
          "MA'ANMENYIN": [
            {
              "station": "ECOLE PUBLIQUE DE MA'ANMENYIN / A",
              "voters": 298
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE DE MELANGUE III / A",
              "voters": 166
            }
          ],
          "NGOAEKELE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOAEKELE / A",
              "voters": 167
            }
          ],
          "NKOEMVONE": [
            {
              "station": "ECOLE PUBLIQUE DE NKOEMVONE / A",
              "voters": 154
            }
          ],
          "NKOLAMOUGOU": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLAMOUGOU / A",
              "voters": 157
            }
          ],
          "NKOLNKENG": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLNKENG / A",
              "voters": 231
            }
          ],
          "NYAZOA": [
            {
              "station": "ECOLE PUBLIQUE DE NYAZOA / A",
              "voters": 79
            }
          ],
          "NYEP-BANE": [
            {
              "station": "ECOLE PUBLIQUE DE NYEP-BANE / A",
              "voters": 205
            }
          ],
          "BIWONG": [
            {
              "station": "LYCEE BIWONG CENTRE / A",
              "voters": 687
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE BIWONG CENTRE / A",
              "voters": 687
            }
          ],
          "MELANGUE": [
            {
              "station": "LYCEE MELANGUE I / A",
              "voters": 555
            }
          ],
          "NGOAZIP": [
            {
              "station": "LYCEE NGOAZIP I / A",
              "voters": 589
            }
          ]
        },
        "BIWONG-BULU": {
          "EBE": [
            {
              "station": "DISPENSAIRE EBE / A",
              "voters": 75
            }
          ],
          "ABIETE": [
            {
              "station": "E.P. ABIETE / A",
              "voters": 482
            }
          ],
          "NKONE": [
            {
              "station": "E.P. ABIETE / A",
              "voters": 482
            }
          ],
          "AKOM": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 299
            }
          ],
          "BIBA": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 299
            }
          ],
          "III": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 299
            }
          ],
          "BIWONG-": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 1211
            }
          ],
          "BULU": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 1211
            }
          ],
          "EMINEMVOM": [
            {
              "station": "ECOLE MATERNELLE D'AKOM / A",
              "voters": 598
            }
          ],
          "AKAK-YEVOL": [
            {
              "station": "ECOLE PUBLIQUE AKAK-YEVOL / A",
              "voters": 343
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "ECOLE PUBLIQUE AKAK-YEVOL / A",
              "voters": 343
            }
          ],
          "NKONG-MELEN": [
            {
              "station": "ECOLE PUBLIQUE AKAK-YEVOL / A",
              "voters": 343
            }
          ],
          "AKPWAE": [
            {
              "station": "ECOLE PUBLIQUE AKPWAE / A",
              "voters": 124
            }
          ],
          "BIBA-YEVOL": [
            {
              "station": "ECOLE PUBLIQUE BIBA -YEVOL / A",
              "voters": 332
            }
          ],
          "ZOEBEFAM": [
            {
              "station": "ECOLE PUBLIQUE BIBA -YEVOL / A",
              "voters": 332
            }
          ],
          "ELONE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANE / A",
              "voters": 150
            }
          ],
          "MELANE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANE / A",
              "voters": 150
            }
          ],
          "ADJAP-MVOESON": [
            {
              "station": "ECOLE PUBLIQUE ESSANGONG / A",
              "voters": 255
            }
          ],
          "ESSANGONG": [
            {
              "station": "ECOLE PUBLIQUE ESSANGONG / A",
              "voters": 255
            }
          ],
          "OKPWENG": [
            {
              "station": "ECOLE PUBLIQUE ESSANGONG / A",
              "voters": 511
            }
          ],
          "KOUNGOULOU-NGOE": [
            {
              "station": "ECOLE PUBLIQUE KOUNGOULOU-NGOE / A",
              "voters": 233
            }
          ],
          "MAMENYIE": [
            {
              "station": "ECOLE PUBLIQUE MAMENYIE / A",
              "voters": 224
            }
          ],
          "NKPWEBAE": [
            {
              "station": "ECOLE PUBLIQUE MAMENYIE / A",
              "voters": 224
            }
          ],
          "NPKWEBAE": [
            {
              "station": "ECOLE PUBLIQUE MAMENYIE / A",
              "voters": 224
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE PUBLIQUE MAMENYIE / A",
              "voters": 224
            }
          ],
          "MANG-YEMINSEM": [
            {
              "station": "ECOLE PUBLIQUE MANG-YEMINSEM / A",
              "voters": 410
            }
          ],
          "EFOULANE": [
            {
              "station": "ECOLE PUBLIQUE MESSAMBE-NDONG / A",
              "voters": 201
            }
          ],
          "MESSAMBE-NDONG": [
            {
              "station": "ECOLE PUBLIQUE MESSAMBE-NDONG / A",
              "voters": 201
            }
          ],
          "METYKPWALE-NGOE": [
            {
              "station": "ECOLE PUBLIQUE METYKPWALE -NGOE / A",
              "voters": 215
            }
          ],
          "MINKPWELE": [
            {
              "station": "ECOLE PUBLIQUE METYKPWALE -NGOE / A",
              "voters": 295
            }
          ],
          "MBOUNEZOK": [
            {
              "station": "ECOLE PUBLIQUE MOMEBILI / A",
              "voters": 119
            }
          ],
          "MOMEBILI": [
            {
              "station": "ECOLE PUBLIQUE MOMEBILI / A",
              "voters": 119
            }
          ],
          "MVO": [
            {
              "station": "ECOLE PUBLIQUE MVONG / A",
              "voters": 196
            }
          ],
          "MEDOUM": [
            {
              "station": "ECOLE PUBLIQUE NJANA / A",
              "voters": 203
            }
          ],
          "NJANA": [
            {
              "station": "ECOLE PUBLIQUE NJANA / A",
              "voters": 203
            }
          ],
          "NKO'ETYE": [
            {
              "station": "ECOLE PUBLIQUE NKO'ETYE / A",
              "voters": 486
            }
          ],
          "NKOLBITYE": [
            {
              "station": "ECOLE PUBLIQUE NKOLBITYE / A",
              "voters": 271
            }
          ],
          "EKOUM": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG / A",
              "voters": 184
            }
          ],
          "-ANDO'O": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG / A",
              "voters": 184
            }
          ],
          "NKOLEBAN": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG / A",
              "voters": 184
            }
          ],
          "NKOLENYENG": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG / A",
              "voters": 184
            }
          ],
          "NKONG-EDJOM": [
            {
              "station": "ECOLE PUBLIQUE NKONG-EDJOM / A",
              "voters": 351
            }
          ],
          "NLOUPESSA-YEVOL": [
            {
              "station": "ECOLE PUBLIQUE NLOUPESSA- YEVOL / A",
              "voters": 306
            }
          ],
          "MVOULA": [
            {
              "station": "ECOLE PUBLIQUE NSELANG / A",
              "voters": 552
            }
          ],
          "NSELANG": [
            {
              "station": "ECOLE PUBLIQUE NSELANG / A",
              "voters": 552
            }
          ],
          "ONDONDO": [
            {
              "station": "ECOLE PUBLIQUE ONDONDO / A",
              "voters": 244
            }
          ],
          "ONGOL": [
            {
              "station": "ECOLE PUBLIQUE ONGOL / A",
              "voters": 103
            }
          ],
          "SONKOE": [
            {
              "station": "ECOLE PUBLIQUE SONKOE / A",
              "voters": 389
            }
          ],
          "ZOUAMEYONG": [
            {
              "station": "ESPL CHEF ZOUAMEYONG / A",
              "voters": 149
            }
          ],
          "NGOMEDEN": [
            {
              "station": "ESPLANADE CHEFFERIE NKONGMEDJAP II / A",
              "voters": 206
            }
          ],
          "NKONGMEDJAP": [
            {
              "station": "ESPLANADE CHEFFERIE NKONGMEDJAP II / A",
              "voters": 321
            }
          ],
          "LOBE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NGONE / A",
              "voters": 564
            }
          ],
          "NGONE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE NGONE / A",
              "voters": 564
            }
          ]
        },
        "EBOLOWA I": {
          "ANGOUNOU": [
            {
              "station": "ANCIENNE COMMUNE URBAINE / A",
              "voters": 533
            }
          ],
          "LO'O-BIYENG": [
            {
              "station": "BATIMENT ETANG AQUACOLE / A",
              "voters": 362
            }
          ],
          "MEBAE": [
            {
              "station": "BATIMENT ETANG AQUACOLE / A",
              "voters": 362
            }
          ],
          "MENDAMESSAMAN": [
            {
              "station": "BUREAU DES POSTES / A",
              "voters": 1734
            }
          ],
          "BIKOU'OU": [
            {
              "station": "C.E.S DE MVIENG / A",
              "voters": 301
            }
          ],
          "MVIENG": [
            {
              "station": "C.E.S DE MVIENG / A",
              "voters": 301
            }
          ],
          "NKOENVONE": [
            {
              "station": "C.E.S DE MVIENG / A",
              "voters": 301
            }
          ],
          "EBOLOWA-SI": [
            {
              "station": "CASE A PALABRE CHEFFERIE EBOLOWA-SI I /  A",
              "voters": 4338
            }
          ],
          "ALAM": [
            {
              "station": "CASE A PALABRES D'ALAM / A",
              "voters": 153
            }
          ],
          "CENTRE-VILLE": [
            {
              "station": "CENTRE DE FORMATION DE DON BOSCO / A",
              "voters": 1331
            }
          ],
          "NGALANE": [
            {
              "station": "CENTRE DE SANTE INTEGRE / A",
              "voters": 656
            }
          ],
          "BASE": [
            {
              "station": "E. PRIVEE JORDAN / A",
              "voters": 489
            }
          ],
          "RAZEL": [
            {
              "station": "E. PRIVEE JORDAN / A",
              "voters": 489
            }
          ],
          "JOHN": [
            {
              "station": "E.P. DE JOHN HOLT / A",
              "voters": 807
            }
          ],
          "HOLT": [
            {
              "station": "E.P. DE JOHN HOLT / A",
              "voters": 807
            }
          ],
          "ABANG": [
            {
              "station": "ECOLE CATHOLIQUE D'ABANG / A",
              "voters": 1129
            }
          ],
          "III": [
            {
              "station": "ECOLE MATERNELLE CAMP DE POLICE / A",
              "voters": 639
            }
          ],
          "ANDO'O": [
            {
              "station": "ECOLE MATERNELLE DE KONDA / A",
              "voters": 276
            }
          ],
          "KONDA": [
            {
              "station": "ECOLE MATERNELLE DE KONDA / A",
              "voters": 276
            }
          ],
          "MVILA-YEMISSEM": [
            {
              "station": "ECOLE MATERNELLE DE KONDA / A",
              "voters": 276
            }
          ],
          "ADJAP-BIYENG": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP-BIYENG / A",
              "voters": 99
            }
          ],
          "KOUNGOULOU-BIYENG": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP-BIYENG / A",
              "voters": 99
            }
          ],
          "ADOUM": [
            {
              "station": "ECOLE PUBLIQUE D'ADOUM / A",
              "voters": 722
            }
          ],
          "AFANENGONG": [
            {
              "station": "ECOLE PUBLIQUE D'AFANENGONG / A",
              "voters": 100
            }
          ],
          "-EVELE": [
            {
              "station": "ECOLE PUBLIQUE D'AFANENGONG / A",
              "voters": 100
            }
          ],
          "AFANENGONG-ADJAP": [
            {
              "station": "ECOLE PUBLIQUE D'AFANENGONG / A",
              "voters": 100
            }
          ],
          "AKAK-ESSATOLO": [
            {
              "station": "ECOLE PUBLIQUE D'AKAK ESSATOLO / A",
              "voters": 325
            }
          ],
          "EVES": [
            {
              "station": "ECOLE PUBLIQUE D'AKAK ESSATOLO / A",
              "voters": 325
            }
          ],
          "SONKOT": [
            {
              "station": "ECOLE PUBLIQUE D'ALAM-SONKOT / A",
              "voters": 85
            }
          ],
          "AMVAM-YEVOL": [
            {
              "station": "ECOLE PUBLIQUE D'AMVAM-YEVOL / A",
              "voters": 300
            }
          ],
          "OLEM": [
            {
              "station": "ECOLE PUBLIQUE D'AMVAM-YEVOL / A",
              "voters": 300
            }
          ],
          "ENGONG": [
            {
              "station": "ECOLE PUBLIQUE D'ENGONG / A",
              "voters": 178
            }
          ],
          "MEFAK": [
            {
              "station": "ECOLE PUBLIQUE DE MEFAK / A",
              "voters": 124
            }
          ],
          "MEKA'A": [
            {
              "station": "ECOLE PUBLIQUE DE MEKA'A I / A",
              "voters": 115
            }
          ],
          "MESSAMBE-YEMISSEM": [
            {
              "station": "ECOLE PUBLIQUE DE MESSAMBE / A",
              "voters": 75
            }
          ],
          "MINKANE": [
            {
              "station": "ECOLE PUBLIQUE DE MESSAMBE / A",
              "voters": 75
            }
          ],
          "MEYO-VILLE": [
            {
              "station": "ECOLE PUBLIQUE DE MEYO-VILLE / A",
              "voters": 197
            }
          ],
          "YEM-NDONG": [
            {
              "station": "ECOLE PUBLIQUE DE MEYO-VILLE / A",
              "voters": 197
            }
          ],
          "NEW-BELL": [
            {
              "station": "ECOLE PUBLIQUE DE NEW-BELL / A",
              "voters": 5844
            }
          ],
          "NYANGONG": [
            {
              "station": "ECOLE PUBLIQUE DE NYANGONG / A",
              "voters": 135
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II / A",
              "voters": 4284
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II / A",
              "voters": 4284
            }
          ],
          "NKO'OVOS": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II / A",
              "voters": 3524
            }
          ],
          "AZEM": [
            {
              "station": "ECOLE PULIQUE D'AZEM / A",
              "voters": 396
            }
          ],
          "EBOLOWA": [
            {
              "station": "ENIEG / A",
              "voters": 5406
            }
          ],
          "SI-II": [
            {
              "station": "ENIEG / A",
              "voters": 5406
            }
          ],
          "FOULASSI-YEMBONG": [
            {
              "station": "ESPLANADE CHEFFERIE  FOULASSI-YEMBONG / A",
              "voters": 77
            }
          ],
          "MELATE": [
            {
              "station": "ESPLANADE CHEFFERIE DE MELATE / A",
              "voters": 53
            }
          ],
          "YEM-ESSAKOE": [
            {
              "station": "ESPLANADE CHEFFERIE DE YEM-ESSAKOE /  A",
              "voters": 77
            }
          ],
          "ZINGUI": [
            {
              "station": "ESPLANADE CHEFFERIE DE ZINGUI / A",
              "voters": 114
            }
          ],
          "ENGOM": [
            {
              "station": "ESPLANADE CHEFFERIE ENGOM II / A",
              "voters": 278
            }
          ],
          "VI-MBANGA": [
            {
              "station": "ESPLANADE CHEFFERIE MBANGA / A",
              "voters": 773
            }
          ],
          "GOUDRON": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE ﾫ LE SUIVI ﾻ / A",
              "voters": 90
            }
          ],
          "CAMP": [
            {
              "station": "PRISON CENTRALE D'EBOLOWA / A",
              "voters": 100
            }
          ],
          "PRISON": [
            {
              "station": "PRISON CENTRALE D'EBOLOWA / A",
              "voters": 100
            }
          ]
        },
        "EBOLOWA II": {
          "ESSINGUILI": [
            {
              "station": "CES D'ESSINGUILI / A",
              "voters": 582
            }
          ],
          "MEKOMO": [
            {
              "station": "CES DE MEKOMO / A",
              "voters": 252
            }
          ],
          "NKPWAEBAE": [
            {
              "station": "CES DE MEKOMO / A",
              "voters": 252
            }
          ],
          "ELAT": [
            {
              "station": "COLLEGES UNIS D'ELAT / A",
              "voters": 1678
            }
          ],
          "BIYENG": [
            {
              "station": "E.P DE MEKALAT-BIYENG / A",
              "voters": 231
            }
          ],
          "MEKALAT-BIYENG": [
            {
              "station": "E.P DE MEKALAT-BIYENG / A",
              "voters": 231
            }
          ],
          "NKO'OVOS": [
            {
              "station": "ECOLE CATHOLIQUE NKO'OVOS II / A",
              "voters": 3032
            }
          ],
          "EKOMBITE": [
            {
              "station": "ECOLE DES INFIRMIERS EKOMBITE / A",
              "voters": 4824
            }
          ],
          "BISSOK": [
            {
              "station": "ECOLE MATERNELLE DE BISSOK / A",
              "voters": 368
            }
          ],
          "BITYILI": [
            {
              "station": "ECOLE MATERNELLE DE BISSOK / A",
              "voters": 828
            }
          ],
          "MBAKO'O": [
            {
              "station": "ECOLE MATERNELLE DE MBAKO'O / A",
              "voters": 91
            }
          ],
          "ANGALE": [
            {
              "station": "ECOLE MATERNELLE SMT7 / A",
              "voters": 5122
            }
          ],
          "METYIKPWALE": [
            {
              "station": "ECOLE P. METYIKPWALE - Y. NLAYOP / A",
              "voters": 203
            }
          ],
          "YEMISSEM": [
            {
              "station": "ECOLE P. METYIKPWALE - Y. NLAYOP / A",
              "voters": 203
            }
          ],
          "ABOUT": [
            {
              "station": "ECOLE PUBLIQUE ABOUT / A",
              "voters": 305
            }
          ],
          "BOUS": [
            {
              "station": "ECOLE PUBLIQUE ABOUT / A",
              "voters": 305
            }
          ],
          "ASSOK": [
            {
              "station": "ECOLE PUBLIQUE ADJAP II / A",
              "voters": 189
            }
          ],
          "NKO'ADJAP": [
            {
              "station": "ECOLE PUBLIQUE ADJAP II / A",
              "voters": 189
            }
          ],
          "ADJAP": [
            {
              "station": "ECOLE PUBLIQUE AKOK - FEG YOP / A",
              "voters": 475
            }
          ],
          "AKOK": [
            {
              "station": "ECOLE PUBLIQUE AKOK - FEG YOP / A",
              "voters": 286
            }
          ],
          "EYEK": [
            {
              "station": "ECOLE PUBLIQUE AKOK - FEG YOP / A",
              "voters": 286
            }
          ],
          "NKOLEMVONE": [
            {
              "station": "ECOLE PUBLIQUE AKOK - FEG YOP / A",
              "voters": 286
            }
          ],
          "ALOUM": [
            {
              "station": "ECOLE PUBLIQUE ALOUM I / A",
              "voters": 404
            }
          ],
          "NGONE": [
            {
              "station": "ECOLE PUBLIQUE ALOUM I / A",
              "voters": 202
            }
          ],
          "BIBA": [
            {
              "station": "ECOLE PUBLIQUE BIBA I / A",
              "voters": 350
            }
          ],
          "ENONGAL": [
            {
              "station": "ECOLE PUBLIQUE D'ENONGAL-BULU / A",
              "voters": 321
            }
          ],
          "NKOESSOMBO": [
            {
              "station": "ECOLE PUBLIQUE D'ENONGAL-BULU / A",
              "voters": 321
            }
          ],
          "EVINDISSI": [
            {
              "station": "ECOLE PUBLIQUE D'EVINDISSI / A",
              "voters": 195
            }
          ],
          "MEYOS": [
            {
              "station": "ECOLE PUBLIQUE D'EVINDISSI / A",
              "voters": 489
            }
          ],
          "OKPWENG": [
            {
              "station": "ECOLE PUBLIQUE D'EVINDISSI / A",
              "voters": 195
            }
          ],
          "BIKPWAE": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE- EBOMAM II /  A",
              "voters": 504
            }
          ],
          "EBOMAM": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE- EBOMAM II /  A",
              "voters": 593
            }
          ],
          "MINTO": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE- EBOMAM II /  A",
              "voters": 231
            }
          ],
          "ENGUEP": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE-ENGUEP  ANYU / A",
              "voters": 532
            }
          ],
          "ANYU": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE-ENGUEP  ANYU / A",
              "voters": 532
            }
          ],
          "EBOLAKOUN": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE-ENGUEP  ANYU / A",
              "voters": 273
            }
          ],
          "NDJAFOB": [
            {
              "station": "ECOLE PUBLIQUE DE BIKPWAE-ENGUEP  ANYU / A",
              "voters": 273
            }
          ],
          "BISSAM": [
            {
              "station": "ECOLE PUBLIQUE DE BISSAM / A",
              "voters": 172
            }
          ],
          "BITON": [
            {
              "station": "ECOLE PUBLIQUE DE BITON / A",
              "voters": 119
            }
          ],
          "BIYEYEM": [
            {
              "station": "ECOLE PUBLIQUE DE BIYEYEM / A",
              "voters": 279
            }
          ],
          "AFANEGONG": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AMEZAM / A",
              "voters": 311
            }
          ],
          "YESSOK": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AMEZAM / A",
              "voters": 311
            }
          ],
          "MA'AMEZAM": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AMEZAM / A",
              "voters": 311
            }
          ],
          "MBILETANGAN": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AMEZAM / A",
              "voters": 311
            }
          ],
          "MEFO": [
            {
              "station": "ECOLE PUBLIQUE DE MEFO / A",
              "voters": 146
            }
          ],
          "ONOYONG": [
            {
              "station": "ECOLE PUBLIQUE DE MEFO / A",
              "voters": 166
            }
          ],
          "AVELEZOK": [
            {
              "station": "ECOLE PUBLIQUE DE MFENDA / A",
              "voters": 125
            }
          ],
          "MFENDA": [
            {
              "station": "ECOLE PUBLIQUE DE MFENDA / A",
              "voters": 125
            }
          ],
          "SIJAKON": [
            {
              "station": "ECOLE PUBLIQUE DE MFENDA / A",
              "voters": 125
            }
          ],
          "MVOMAN": [
            {
              "station": "ECOLE PUBLIQUE DE NLOUPESSA - YEMONG  /A",
              "voters": 170
            }
          ],
          "NLOUPESSA": [
            {
              "station": "ECOLE PUBLIQUE DE NLOUPESSA - YEMONG  /A",
              "voters": 170
            }
          ],
          "YEMONG": [
            {
              "station": "ECOLE PUBLIQUE DE NLOUPESSA - YEMONG  /A",
              "voters": 170
            }
          ],
          "NNELEFOUP": [
            {
              "station": "ECOLE PUBLIQUE DE NNELEFOUP / A",
              "voters": 61
            }
          ],
          "AKOOKAS": [
            {
              "station": "ECOLE PUBLIQUE DE VEMA / A",
              "voters": 188
            }
          ],
          "VEMA": [
            {
              "station": "ECOLE PUBLIQUE DE VEMA / A",
              "voters": 188
            }
          ],
          "MEKALAT": [
            {
              "station": "ECOLE PUBLIQUE MEKALAT - YEMVENG / A",
              "voters": 5405
            }
          ],
          "YEMVENG": [
            {
              "station": "ECOLE PUBLIQUE MEKALAT - YEMVENG / A",
              "voters": 372
            }
          ],
          "YEVOL": [
            {
              "station": "ECOLE PUBLIQUE MEKALAT - YEVOL / A",
              "voters": 4802
            }
          ],
          "MEKOK": [
            {
              "station": "ECOLE PUBLIQUE MEKOK I / A",
              "voters": 178
            }
          ],
          "NGALAN": [
            {
              "station": "ECOLE PUBLIQUE MEYOS - ENGUEP ANYU / A",
              "voters": 259
            }
          ],
          "MVAM": [
            {
              "station": "ECOLE PUBLIQUE MVAM - ESSAKOE / A",
              "voters": 743
            }
          ],
          "ESSAKOE": [
            {
              "station": "ECOLE PUBLIQUE MVAM - ESSAKOE / A",
              "voters": 517
            }
          ],
          "MBOUT": [
            {
              "station": "ECOLE PUBLIQUE MVAM - YETOM / A",
              "voters": 226
            }
          ],
          "YETOM": [
            {
              "station": "ECOLE PUBLIQUE MVAM - YETOM / A",
              "voters": 226
            }
          ],
          "NDENGUE": [
            {
              "station": "ECOLE PUBLIQUE NDENGUE / A",
              "voters": 225
            }
          ],
          "NKOLANDOM": [
            {
              "station": "ECOLE PUBLIQUE NKOLANDOM / A",
              "voters": 348
            }
          ],
          "NKOLENYENG": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG - YEMVANG /  A",
              "voters": 75
            }
          ],
          "YEMVANG": [
            {
              "station": "ECOLE PUBLIQUE NKOLENYENG - YEMVANG /  A",
              "voters": 75
            }
          ],
          "NKOLOVENG": [
            {
              "station": "ECOLE PUBLIQUE NKOLOVENG / A",
              "voters": 108
            }
          ],
          "AMANG": [
            {
              "station": "ENIEG / A",
              "voters": 22524
            }
          ],
          "III": [
            {
              "station": "ENIEG / A",
              "voters": 4224
            }
          ],
          "DJOP": [
            {
              "station": "ENIEG / A",
              "voters": 3504
            }
          ],
          "EBAE": [
            {
              "station": "ESPL. CHEF. MEVOUS / A",
              "voters": 178
            }
          ],
          "MEVOUS": [
            {
              "station": "ESPL. CHEF. MEVOUS / A",
              "voters": 178
            }
          ],
          "ALEN": [
            {
              "station": "ESPLANADE CHEFFERIE ALEN / A",
              "voters": 77
            }
          ],
          "ABOMVOMBA": [
            {
              "station": "ESPLANADE CHEFFERIE D'EKOWONG / A",
              "voters": 178
            }
          ],
          "EKOWONG": [
            {
              "station": "ESPLANADE CHEFFERIE D'EKOWONG / A",
              "voters": 178
            }
          ],
          "ELONE": [
            {
              "station": "ESPLANADE CHEFFERIE D'ELONE / A",
              "voters": 109
            }
          ],
          "MINKOK-": [
            {
              "station": "ESPLANADE CHEFFERIE DE BITYILI III / A",
              "voters": 343
            }
          ],
          "MVII": [
            {
              "station": "ESPLANADE CHEFFERIE DE BITYILI III / A",
              "voters": 211
            }
          ],
          "FOULASSI": [
            {
              "station": "ESPLANADE CHEFFERIE DE FOULASSI I / A",
              "voters": 161
            }
          ],
          "NKONG": [
            {
              "station": "ESPLANADE CHEFFERIE DENKONG / A",
              "voters": 98
            }
          ],
          "NKONDONGO": [
            {
              "station": "ESPLANADE CHEFFERIE MINKOK - EBOMAM II  /A",
              "voters": 132
            }
          ],
          "ASSOOSSENG": [
            {
              "station": "LYCEE NKOEMVONE / A",
              "voters": 407
            }
          ],
          "NKOEMVONE": [
            {
              "station": "LYCEE NKOEMVONE / A",
              "voters": 407
            }
          ],
          "BILON": [
            {
              "station": "SAR / SM DE BILON / A",
              "voters": 1492
            }
          ]
        },
        "EFOULAN": {
          "ABO'ONTOMBA": [
            {
              "station": "ECOLE PUBLIQUE D'ABO'ONTOMBA / A",
              "voters": 82
            }
          ],
          "ADJAP": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP ESSAWO / A",
              "voters": 535
            }
          ],
          "ESSAWO": [
            {
              "station": "ECOLE PUBLIQUE D'ADJAP ESSAWO / A",
              "voters": 492
            }
          ],
          "EBOM": [
            {
              "station": "ECOLE PUBLIQUE D'EBOM ESSAWO / A",
              "voters": 212
            }
          ],
          "ENGOMBA": [
            {
              "station": "ECOLE PUBLIQUE D'ENGOMBA / A",
              "voters": 152
            }
          ],
          "MEKALATE": [
            {
              "station": "ECOLE PUBLIQUE D'ENGOMBA / A",
              "voters": 152
            }
          ],
          "BIKOUBA": [
            {
              "station": "ECOLE PUBLIQUE D'ONDONG ADJAP / A",
              "voters": 256
            }
          ],
          "ONDONG": [
            {
              "station": "ECOLE PUBLIQUE D'ONDONG ADJAP / A",
              "voters": 256
            }
          ],
          "MA'AMENYIN": [
            {
              "station": "ECOLE PUBLIQUE DE MA'AMENYIN / A",
              "voters": 101
            }
          ],
          "MELANE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANE / A",
              "voters": 145
            }
          ],
          "MFALA": [
            {
              "station": "ECOLE PUBLIQUE DE MELANE / A",
              "voters": 145
            }
          ],
          "ELONE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANGUE II / A",
              "voters": 189
            }
          ],
          "MELANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MELANGUE II / A",
              "voters": 189
            }
          ],
          "MENGALE": [
            {
              "station": "ECOLE PUBLIQUE DE MENGALE / A",
              "voters": 196
            }
          ],
          "ANGBWEK": [
            {
              "station": "ECOLE PUBLIQUE DE MIMBOMINGAL / A",
              "voters": 289
            }
          ],
          "MIMBOMINGAL": [
            {
              "station": "ECOLE PUBLIQUE DE MIMBOMINGAL / A",
              "voters": 289
            }
          ],
          "MINTO": [
            {
              "station": "ECOLE PUBLIQUE DE MIMBOMINGAL / A",
              "voters": 289
            }
          ],
          "NGONEBOK": [
            {
              "station": "ECOLE PUBLIQUE DE NGONEBOK / A",
              "voters": 317
            }
          ],
          "MINTOM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOADJAP / A",
              "voters": 228
            }
          ],
          "NKOADJAP": [
            {
              "station": "ECOLE PUBLIQUE DE NKOADJAP / A",
              "voters": 228
            }
          ],
          "NKOUEKOUK": [
            {
              "station": "ECOLE PUBLIQUE DE NKOUEKOUK / A",
              "voters": 182
            }
          ],
          "BONGOLO": [
            {
              "station": "ECOLE PUBLIQUE DE NYAZO'O / A",
              "voters": 194
            }
          ],
          "NYAZO'O": [
            {
              "station": "ECOLE PUBLIQUE DE NYAZO'O / A",
              "voters": 194
            }
          ],
          "MEBEM": [
            {
              "station": "ECOLE PUBLIQUE DE TCHANGUE / A",
              "voters": 360
            }
          ],
          "TCHANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE TCHANGUE / A",
              "voters": 360
            }
          ],
          "ALOUM": [
            {
              "station": "ESPLANADE D'ALOUM YEMVENG / A",
              "voters": 139
            }
          ],
          "YEMVENG": [
            {
              "station": "ESPLANADE D'ALOUM YEMVENG / A",
              "voters": 139
            }
          ],
          "BINYINA": [
            {
              "station": "ESPLANADE DE BINYINA / A",
              "voters": 92
            }
          ],
          "KALATE": [
            {
              "station": "ESPLANADE DE KALATE ABA'A / A",
              "voters": 115
            }
          ],
          "ABA'A": [
            {
              "station": "ESPLANADE DE KALATE ABA'A / A",
              "voters": 115
            }
          ],
          "NKOUTOU": [
            {
              "station": "ESPLANADE DE KALATE ABA'A / A",
              "voters": 321
            }
          ],
          "MBONG": [
            {
              "station": "ESPLANADE DE MBONG / A",
              "voters": 225
            }
          ],
          "MVILA": [
            {
              "station": "ESPLANADE DE MBONG / A",
              "voters": 399
            }
          ],
          "YEVOL": [
            {
              "station": "ESPLANADE DE MBONG / A",
              "voters": 843
            }
          ],
          "NDJANTOM": [
            {
              "station": "ESPLANADE DE MBONG / A",
              "voters": 225
            }
          ],
          "MEBANDE": [
            {
              "station": "ESPLANADE DE MEBANDE / A",
              "voters": 82
            }
          ],
          "AKOM": [
            {
              "station": "ESPLANADE DE NGALANE II / A",
              "voters": 293
            }
          ],
          "NGALANE": [
            {
              "station": "ESPLANADE DE NGALANE II / A",
              "voters": 293
            }
          ],
          "EFOULAN": [
            {
              "station": "LYCEE D'EFOULAN / A",
              "voters": 867
            }
          ],
          "MINKANE": [
            {
              "station": "LYCEE D'EFOULAN / A",
              "voters": 867
            }
          ],
          "NGAT": [
            {
              "station": "LYCEE D'EFOULAN / A",
              "voters": 867
            }
          ]
        },
        "MENGONG": {
          "EBOLEBOLA": [
            {
              "station": "BOUKAROU / A",
              "voters": 143
            }
          ],
          "DOUNGOU": [
            {
              "station": "BOUKAROU DOUNGOU / A",
              "voters": 52
            }
          ],
          "MA'ANEMENYIN": [
            {
              "station": "CASE SANTE DE MA'ANEMENYIN / A",
              "voters": 96
            }
          ],
          "KE'EKE": [
            {
              "station": "CASE SANTE KE'EKE / A",
              "voters": 217
            }
          ],
          "ENDAM": [
            {
              "station": "ECOLE MATERNELLE D'ENDAM I / A",
              "voters": 216
            }
          ],
          "MENGONG": [
            {
              "station": "ECOLE MATERNELLE DE MENGONG / A",
              "voters": 810
            }
          ],
          "NGOULESSAMAN": [
            {
              "station": "ECOLE MATERNELLE DE NGOULESSAMAN / A",
              "voters": 295
            }
          ],
          "ABIETE": [
            {
              "station": "ECOLE PUBLIQUE D'ABIETE / A",
              "voters": 368
            }
          ],
          "DOUM": [
            {
              "station": "ECOLE PUBLIQUE D'ABIETE / A",
              "voters": 368
            }
          ],
          "EBAP": [
            {
              "station": "ECOLE PUBLIQUE D'EBAP / A",
              "voters": 102
            }
          ],
          "EKOUK": [
            {
              "station": "ECOLE PUBLIQUE D'EKOUK / A",
              "voters": 114
            }
          ],
          "EMANEMVAM": [
            {
              "station": "ECOLE PUBLIQUE D'EMANEMVAM / A",
              "voters": 170
            }
          ],
          "LOUM": [
            {
              "station": "ECOLE PUBLIQUE DE LOUM / A",
              "voters": 75
            }
          ],
          "MVANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MVANGUE / A",
              "voters": 157
            }
          ],
          "NGUET": [
            {
              "station": "ECOLE PUBLIQUE DE NGUET / A",
              "voters": 179
            }
          ],
          "NKAN": [
            {
              "station": "ECOLE PUBLIQUE DE NKAN / A",
              "voters": 132
            }
          ],
          "NKO'OVOS": [
            {
              "station": "ECOLE PUBLIQUE DE NKO'OVOS II / A",
              "voters": 118
            }
          ],
          "NKOLETOTO": [
            {
              "station": "ECOLE PUBLIQUE DE NKOLETOTO / A",
              "voters": 360
            }
          ],
          "NNEMEYONG": [
            {
              "station": "ECOLE PUBLIQUE DE NNEMEYONG I / A",
              "voters": 473
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE DE NNEMEYONG III / A",
              "voters": 126
            }
          ],
          "NYENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE NYENGUE / A",
              "voters": 198
            }
          ],
          "ABABITA": [
            {
              "station": "HANGAR ABABITA / A",
              "voters": 68
            }
          ],
          "ANDO'O": [
            {
              "station": "HANGAR ANDO'O / A",
              "voters": 49
            }
          ],
          "ATOUI": [
            {
              "station": "HANGAR ATOUI / A",
              "voters": 56
            }
          ],
          "BAN-YOP": [
            {
              "station": "HANGAR BAN-YOP / A",
              "voters": 49
            }
          ],
          "ADJAP-YEVOL": [
            {
              "station": "HANGAR D'ADJAP-YEVOL / A",
              "voters": 117
            }
          ],
          "EFOT": [
            {
              "station": "HANGAR EFOT / A",
              "voters": 51
            }
          ],
          "ESSESSANA": [
            {
              "station": "HANGAR ESSESSANA / A",
              "voters": 45
            }
          ],
          "ESSOKBENGA'A": [
            {
              "station": "HANGAR ESSOKBENGA'A / A",
              "voters": 113
            }
          ],
          "ETONDO": [
            {
              "station": "HANGAR ETONDO / A",
              "voters": 119
            }
          ],
          "EYENG-ESSEL": [
            {
              "station": "HANGAR EYENG-ESSEL / A",
              "voters": 84
            }
          ],
          "KOUNGOULOU": [
            {
              "station": "HANGAR KOUNGOULOU / A",
              "voters": 210
            }
          ],
          "ATO'OVENG": [
            {
              "station": "HANGAR MARCHE ATO'OVENG I / A",
              "voters": 315
            }
          ],
          "MBOABANG": [
            {
              "station": "HANGAR MBOABANG I / A",
              "voters": 160
            }
          ],
          "MBONDO": [
            {
              "station": "HANGAR MBONDO / A",
              "voters": 85
            }
          ],
          "MBOULA": [
            {
              "station": "HANGAR MBOULA / A",
              "voters": 163
            }
          ],
          "MEFIEP": [
            {
              "station": "HANGAR MEFIEP / A",
              "voters": 25
            }
          ],
          "MEKAMEMVOM": [
            {
              "station": "HANGAR MEKAMEMVOM / A",
              "voters": 209
            }
          ],
          "MVII": [
            {
              "station": "HANGAR MVII / A",
              "voters": 56
            }
          ],
          "NGOMESSANE": [
            {
              "station": "HANGAR NGOMESSANE / A",
              "voters": 182
            }
          ],
          "NKOLEBENGUE": [
            {
              "station": "HANGAR NKOLEBENGUE / A",
              "voters": 88
            }
          ],
          "NKOLOWON": [
            {
              "station": "HANGAR NKOLOWON / A",
              "voters": 100
            }
          ],
          "ONDONDO": [
            {
              "station": "HANGAR ONDONDO / A",
              "voters": 83
            }
          ],
          "YEM": [
            {
              "station": "HANGAR YEM / A",
              "voters": 72
            }
          ],
          "NDENG": [
            {
              "station": "POSTE AGRICOLE DE MELANE / A",
              "voters": 116
            }
          ]
        },
        "MVANGAN": {
          "ABABENDOMAN": [
            {
              "station": "ECOLE CATHOLIQUE D'ABABENDOMAN / A",
              "voters": 183
            }
          ],
          "ABOELONE": [
            {
              "station": "ECOLE PUBLIQUE D'ABOELONE / A",
              "voters": 128
            }
          ],
          "AFAN": [
            {
              "station": "ECOLE PUBLIQUE D'AFAN / A",
              "voters": 230
            }
          ],
          "AKAM": [
            {
              "station": "ECOLE PUBLIQUE D'AKAM / A",
              "voters": 155
            }
          ],
          "AKO'OBETE": [
            {
              "station": "ECOLE PUBLIQUE D'AKO'OBETE / A",
              "voters": 122
            }
          ],
          "ALOMBO": [
            {
              "station": "ECOLE PUBLIQUE D'ALOMBO / A",
              "voters": 198
            }
          ],
          "AMVOM": [
            {
              "station": "ECOLE PUBLIQUE D'AMVOM / A",
              "voters": 151
            }
          ],
          "ENDENGUE": [
            {
              "station": "ECOLE PUBLIQUE D'ENDENGUE / A",
              "voters": 150
            }
          ],
          "OYEM": [
            {
              "station": "ECOLE PUBLIQUE D'OYEM I / A",
              "voters": 239
            }
          ],
          "BIKONG": [
            {
              "station": "ECOLE PUBLIQUE DE BIKONG / A",
              "voters": 199
            }
          ],
          "KOUGOULOU": [
            {
              "station": "ECOLE PUBLIQUE DE KOUGOULOU / A",
              "voters": 210
            }
          ],
          "MEBEMENKO": [
            {
              "station": "ECOLE PUBLIQUE DE MEBEMENKO / A",
              "voters": 307
            }
          ],
          "MEBO'O": [
            {
              "station": "ECOLE PUBLIQUE DE MEBO'O NGOE / A",
              "voters": 530
            }
          ],
          "NGOE": [
            {
              "station": "ECOLE PUBLIQUE DE MEBO'O NGOE / A",
              "voters": 80
            }
          ],
          "MEBOSSO": [
            {
              "station": "ECOLE PUBLIQUE DE MEBOSSO / A",
              "voters": 130
            }
          ],
          "ENDAMEYOS": [
            {
              "station": "ECOLE PUBLIQUE DE MGOMEBAE / A",
              "voters": 244
            }
          ],
          "MINKOUMOU": [
            {
              "station": "ECOLE PUBLIQUE DE MINKOUMOU / A",
              "voters": 85
            }
          ],
          "MINTYENE": [
            {
              "station": "ECOLE PUBLIQUE DE MINTYENE / A",
              "voters": 276
            }
          ],
          "NDICK": [
            {
              "station": "ECOLE PUBLIQUE DE NDICK / A",
              "voters": 163
            }
          ],
          "ZOEBEFAM": [
            {
              "station": "ECOLE PUBLIQUE DE ZOEBEFAM / A",
              "voters": 322
            }
          ],
          "ALOTOM": [
            {
              "station": "HANGAR ALOTOM / A",
              "voters": 57
            }
          ],
          "ANDJECK": [
            {
              "station": "HANGAR D'ANDJECK / A",
              "voters": 305
            }
          ],
          "ASSOK": [
            {
              "station": "HANGAR D'ASSOK I / A",
              "voters": 172
            }
          ],
          "NKENGOU": [
            {
              "station": "HANGAR D'ASSOK I / A",
              "voters": 415
            }
          ],
          "EBOMAN": [
            {
              "station": "HANGAR D'EBOMAN I / A",
              "voters": 203
            }
          ],
          "EKOWONG": [
            {
              "station": "HANGAR D'EKOWONG I / A",
              "voters": 485
            }
          ],
          "ETOUBETOUBANDI": [
            {
              "station": "HANGAR D'ETOUBETOUBANDI / A",
              "voters": 113
            }
          ],
          "BIBOULEMAM": [
            {
              "station": "HANGAR DE BIBOULEMAM / A",
              "voters": 133
            }
          ],
          "YENGAP": [
            {
              "station": "HANGAR DE MEBO'O YENGAP / A",
              "voters": 450
            }
          ],
          "MVAEZOM": [
            {
              "station": "HANGAR DE MVAEZOM / A",
              "voters": 204
            }
          ],
          "NDANGA": [
            {
              "station": "HANGAR DE NDANGA / A",
              "voters": 99
            }
          ],
          "NKOLENYENG": [
            {
              "station": "HANGAR DE NKOLENYENG / A",
              "voters": 367
            }
          ],
          "NKOMO": [
            {
              "station": "HANGAR DE NKOMO / A",
              "voters": 114
            }
          ],
          "NNELEFOUP": [
            {
              "station": "HANGAR DE NNELEFOUP / A",
              "voters": 122
            }
          ],
          "NNEZAM": [
            {
              "station": "HANGAR DE NNEZAM / A",
              "voters": 121
            }
          ],
          "VILLAGE": [
            {
              "station": "HANGAR MVANGAN- VILLAGE / A",
              "voters": 170
            }
          ],
          "MVANGAN-": [
            {
              "station": "LYCEE DE MVANGAN / A",
              "voters": 836
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE DE MVANGAN / A",
              "voters": 247
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "LYCEE DE MVANGAN / A",
              "voters": 247
            }
          ],
          "VILLE": [
            {
              "station": "LYCEE DE MVANGAN / A",
              "voters": 419
            }
          ]
        },
        "NGOULEMAKONG": {
          "ENAMENGAL": [
            {
              "station": "C.E.S D'ENAMENGAL I / A",
              "voters": 434
            }
          ],
          "BITSOGMAM": [
            {
              "station": "C.E.S DE BITSOGMAN / A",
              "voters": 188
            }
          ],
          "ENYENG": [
            {
              "station": "C.E.S DE BITSOGMAN / A",
              "voters": 188
            }
          ],
          "DOUM": [
            {
              "station": "C.E.S DE DOUM / A",
              "voters": 410
            }
          ],
          "CHEFFERIE": [
            {
              "station": "C.E.S DE DOUM / A",
              "voters": 169
            }
          ],
          "SOUMOU": [
            {
              "station": "C.E.S DE SOUMOU / A",
              "voters": 113
            }
          ],
          "MBAMA": [
            {
              "station": "DELEGATION D'AGRICULTURE / A",
              "voters": 512
            }
          ],
          "MINKONGO": [
            {
              "station": "DELEGATION D'AGRICULTURE / A",
              "voters": 512
            }
          ],
          "NKOL-YOP": [
            {
              "station": "DELEGATION D'AGRICULTURE / A",
              "voters": 512
            }
          ],
          "OVENG": [
            {
              "station": "ECOLE MATERNELLE DE MBEKA'A I / A",
              "voters": 156
            }
          ],
          "OTOLO'O": [
            {
              "station": "ECOLE MATERNELLE DE MBEKA'A I / A",
              "voters": 156
            }
          ],
          "NNEMEYONG": [
            {
              "station": "ECOLE MATERNELLE DE NNEMEYONG / A",
              "voters": 176
            }
          ],
          "ALLOM": [
            {
              "station": "ECOLE PUBLIQUE D'ALLOM / A",
              "voters": 77
            }
          ],
          "NLAN": [
            {
              "station": "ECOLE PUBLIQUE D'ALLOM / A",
              "voters": 77
            }
          ],
          "YOP": [
            {
              "station": "ECOLE PUBLIQUE D'ALLOM / A",
              "voters": 420
            }
          ],
          "EBOTENKOU": [
            {
              "station": "ECOLE PUBLIQUE D'EBOTENKOU / A",
              "voters": 174
            }
          ],
          "OYACK": [
            {
              "station": "ECOLE PUBLIQUE D'EBOTENKOU / A",
              "voters": 311
            }
          ],
          "-FONG": [
            {
              "station": "ECOLE PUBLIQUE D'EBOTENKOU / A",
              "voters": 174
            }
          ],
          "ELONE": [
            {
              "station": "ECOLE PUBLIQUE D'ELONE / A",
              "voters": 102
            }
          ],
          "ESSINGANG": [
            {
              "station": "ECOLE PUBLIQUE D'ESSINGANG / A",
              "voters": 73
            }
          ],
          "OBANG": [
            {
              "station": "ECOLE PUBLIQUE D'OBANG II / A",
              "voters": 174
            }
          ],
          "BINYINYALI": [
            {
              "station": "ECOLE PUBLIQUE DE BINYINYALI / A",
              "voters": 152
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE DE DOUM / A",
              "voters": 57
            }
          ],
          "KOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE KOUMA / A",
              "voters": 141
            }
          ],
          "MBEKA'A": [
            {
              "station": "ECOLE PUBLIQUE DE MBEKA'A II / A",
              "voters": 235
            }
          ],
          "MBENG": [
            {
              "station": "ECOLE PUBLIQUE DE MBENG / A",
              "voters": 211
            }
          ],
          "OSSOEFEME": [
            {
              "station": "ECOLE PUBLIQUE DE MBENG / A",
              "voters": 211
            }
          ],
          "MESSOK": [
            {
              "station": "ECOLE PUBLIQUE DE MESSOK I / A",
              "voters": 284
            }
          ],
          "NGOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MESSOK I / A",
              "voters": 142
            }
          ],
          "MINLAMIZIBI": [
            {
              "station": "ECOLE PUBLIQUE DE MINLAMIZIBI / A",
              "voters": 428
            }
          ],
          "MINYEBE": [
            {
              "station": "ECOLE PUBLIQUE DE MINLAMIZIBI / A",
              "voters": 428
            }
          ],
          "OLLA": [
            {
              "station": "ECOLE PUBLIQUE DE MVAMEDJAP BANE / A",
              "voters": 184
            }
          ],
          "MVAMEDJAP-": [
            {
              "station": "ECOLE PUBLIQUE DE MVAMEDJAP BANE / A",
              "voters": 308
            }
          ],
          "BANE": [
            {
              "station": "ECOLE PUBLIQUE DE MVAMEDJAP BANE / A",
              "voters": 184
            }
          ],
          "FONG": [
            {
              "station": "ECOLE PUBLIQUE DE MVAMEDJAP FONG / A",
              "voters": 124
            }
          ],
          "MVANDA": [
            {
              "station": "ECOLE PUBLIQUE DE MVANDA / A",
              "voters": 87
            }
          ],
          "NTOUMBA": [
            {
              "station": "ECOLE PUBLIQUE DE NTOUMBA / A",
              "voters": 187
            }
          ],
          "NKOUMADJAP": [
            {
              "station": "ESPLANADE CHEF. DE NKOUMADJAP I / A",
              "voters": 180
            }
          ],
          "AKOATALA": [
            {
              "station": "ESPLANADE CHEFFERIE D'AKOATALA / A",
              "voters": 66
            }
          ],
          "ASSAM": [
            {
              "station": "ESPLANADE CHEFFERIE D'ASSAM / A",
              "voters": 49
            }
          ],
          "ONGONGO": [
            {
              "station": "ESPLANADE CHEFFERIE D'ASSAM / A",
              "voters": 49
            }
          ],
          "EBAE": [
            {
              "station": "ESPLANADE CHEFFERIE D'EBAE / A",
              "voters": 76
            }
          ],
          "EBOLBOUM": [
            {
              "station": "ESPLANADE CHEFFERIE D'EBOLBOUM / A",
              "voters": 82
            }
          ],
          "BANGA": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANGA / A",
              "voters": 655
            }
          ],
          "BIKOP": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANGA / A",
              "voters": 331
            }
          ],
          "KOUNGOULOU": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANGA / A",
              "voters": 143
            }
          ],
          "NKOLMEKOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANGA / A",
              "voters": 143
            }
          ],
          "MEKOM": [
            {
              "station": "ESPLANADE CHEFFERIE DE MEKOM / A",
              "voters": 101
            }
          ],
          "ABIETE": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGBWA / A",
              "voters": 121
            }
          ],
          "MENGBWA": [
            {
              "station": "ESPLANADE CHEFFERIE DE MENGBWA / A",
              "voters": 121
            }
          ],
          "MINKOK": [
            {
              "station": "ESPLANADE CHEFFERIE DE MINKOK / A",
              "voters": 238
            }
          ],
          "NDZAFOM": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDZAFOM / A",
              "voters": 31
            }
          ],
          "NKOLNGOCK": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDZAFOM / A",
              "voters": 31
            }
          ],
          "FONE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLE / A",
              "voters": 146
            }
          ],
          "NKOLE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NKOLE / A",
              "voters": 146
            }
          ],
          "NYAMVENDE": [
            {
              "station": "ESPLANADE CHEFFERIE DE NYAMVENDE / A",
              "voters": 71
            }
          ],
          "EKOWONDO": [
            {
              "station": "ESPLANADE CHEFFERIE EKOWONDO / A",
              "voters": 80
            }
          ],
          "NNANGA": [
            {
              "station": "LYCEE MIXTE DE NGOULEMAKONG / A",
              "voters": 364
            }
          ],
          "EZAN": [
            {
              "station": "LYCEE MIXTE DE NGOULEMAKONG / A",
              "voters": 364
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE TECHNIQUE DE NGOULEMAKONG / A",
              "voters": 896
            }
          ],
          "COMMERCIAL": [
            {
              "station": "LYCEE TECHNIQUE DE NGOULEMAKONG / A",
              "voters": 896
            }
          ],
          "OMANG": [
            {
              "station": "LYCEE TECHNIQUE DE NGOULEMAKONG / A",
              "voters": 896
            }
          ],
          "-SI": [
            {
              "station": "LYCEE TECHNIQUE DE NGOULEMAKONG / A",
              "voters": 896
            }
          ],
          "NKOL-MESSAS": [
            {
              "station": "MISSION CATHOLIQUE / A",
              "voters": 137
            }
          ],
          "-BENE": [
            {
              "station": "MISSION CATHOLIQUE / A",
              "voters": 137
            }
          ]
        }
      }
    }
  }
};