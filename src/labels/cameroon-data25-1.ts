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
  "LITTORAL": {
    "name": {
      "en": "LITTORAL",
      "fr": "LITTORAL"
    },
    "divisions": {
      "MOUNGO": {
        "BARE-BAKEM": {
          "QUARTIERS": [
            {
              "station": "CMA BARE / A",
              "voters": 2342
            }
          ],
          "EBOULKONG": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "NDOM": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "BAKEM": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "NDOUENKE": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "NKONIAKE": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "NKONIAKO-NIAMA": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "NKONIAMBOT": [
            {
              "station": "EP BAKEM / A",
              "voters": 514
            }
          ],
          "BAREHOCK": [
            {
              "station": "EP BAREHOCK / A",
              "voters": 677
            }
          ],
          "EBORIDJA": [
            {
              "station": "EP BAREHOCK / A",
              "voters": 922
            }
          ],
          "EBOUH": [
            {
              "station": "EP EBOUH / A",
              "voters": 597
            }
          ],
          "EBOUKOU": [
            {
              "station": "EP EBOUKOU / A",
              "voters": 142
            }
          ],
          "SOUNDOP": [
            {
              "station": "EP EBOUKOU / A",
              "voters": 142
            }
          ],
          "EKOM": [
            {
              "station": "EP EKOM NKAM / A",
              "voters": 158
            }
          ],
          "NKAM": [
            {
              "station": "EP EKOM NKAM / A",
              "voters": 158
            }
          ],
          "ESSEL": [
            {
              "station": "EP ESSEL / A",
              "voters": 26
            }
          ],
          "MANDJIBO": [
            {
              "station": "EP MANDJIBO / A",
              "voters": 163
            }
          ],
          "MBANGLA": [
            {
              "station": "EP MBANGLA / A",
              "voters": 42
            }
          ],
          "VILLAGE": [
            {
              "station": "EP MBANGLA / A",
              "voters": 172
            }
          ],
          "MBAREMBENG": [
            {
              "station": "EP MBAREMBENG / A",
              "voters": 451
            }
          ],
          "BAYON": [
            {
              "station": "EP MELONG II / A",
              "voters": 845
            }
          ],
          "MELONG": [
            {
              "station": "EP MELONG II / A",
              "voters": 1821
            }
          ],
          "MOUNKO": [
            {
              "station": "EP MOUNKO / A",
              "voters": 130
            }
          ],
          "MPAKA": [
            {
              "station": "EP MPAKA / A",
              "voters": 175
            }
          ],
          "BARE": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 2311
            }
          ],
          "QUARTIER": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 4227
            }
          ],
          "AXE": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 866
            }
          ],
          "LOURD": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 866
            }
          ],
          "(BIS)": [
            {
              "station": "FOYER BANDJOUN / A",
              "voters": 3208
            }
          ],
          "MBIE": [
            {
              "station": "POSTE AGRICOLE BAKEM / A",
              "voters": 145
            }
          ],
          "NDOUEMBOT": [
            {
              "station": "POSTE AGRICOLE BAKEM / A",
              "voters": 145
            }
          ],
          "NTANGTONG": [
            {
              "station": "POSTE AGRICOLE BAKEM / A",
              "voters": 145
            }
          ],
          "BAREKO": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 282
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 282
            }
          ],
          "PLATEAU": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 282
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 416
            }
          ],
          "VIE": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 282
            }
          ],
          "TRANQUILLE": [
            {
              "station": "ST CHARLES LWANGA / A",
              "voters": 282
            }
          ],
          "BAGANGTE": [
            {
              "station": "ST MARC MELONG II / A",
              "voters": 528
            }
          ]
        },
        "BONALEA": {
          "BENGSE": [
            {
              "station": "BESSOUNGKANG (CENTRE DE SANTE) / A",
              "voters": 110
            }
          ],
          "BESSOUNGKANG": [
            {
              "station": "BESSOUNGKANG (CENTRE DE SANTE) / A",
              "voters": 110
            }
          ],
          "BONADIKA": [
            {
              "station": "BESSOUNGKANG (CENTRE DE SANTE) / A",
              "voters": 110
            }
          ],
          "MBOMBO'O": [
            {
              "station": "BESSOUNGKANG (CENTRE DE SANTE) / A",
              "voters": 110
            }
          ],
          "MOUYAMBE": [
            {
              "station": "BESSOUNGKANG (CENTRE DE SANTE) / A",
              "voters": 110
            }
          ],
          "BONAKOU-BWAPAKI": [
            {
              "station": "BONAKOU-BWAPAKI (E.P.) / A",
              "voters": 84
            }
          ],
          "BWAPAKI": [
            {
              "station": "BONAKOU-BWAPAKI (E.P.) / A",
              "voters": 176
            }
          ],
          "NDONGO": [
            {
              "station": "BONAKOU-BWAPAKI (E.P.) / A",
              "voters": 176
            }
          ],
          "KENJE-BWAPAKI": [
            {
              "station": "CASE COMMUNAUTAIRE LONDO - BWAPAKI /  A",
              "voters": 92
            }
          ],
          "KWEDIKO-BWAPAKI": [
            {
              "station": "CASE COMMUNAUTAIRE LONDO - BWAPAKI /  A",
              "voters": 92
            }
          ],
          "LONDO-BWAPAKI": [
            {
              "station": "CASE COMMUNAUTAIRE LONDO - BWAPAKI /  A",
              "voters": 92
            }
          ],
          "NDONGO-BWAPAKI": [
            {
              "station": "CASE COMMUNAUTAIRE LONDO - BWAPAKI /  A",
              "voters": 92
            }
          ],
          "BONAKWASSI": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 107
            }
          ],
          "BONAMAKOUA": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 107
            }
          ],
          "BONAMBOULE": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 107
            }
          ],
          "BONAMPACKO": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 107
            }
          ],
          "BONEYAN": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 107
            }
          ],
          "FIKO": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 321
            }
          ],
          "MANGAMBA": [
            {
              "station": "CASE COMMUNAUTAIRE MANGAMBA / A",
              "voters": 535
            }
          ],
          "MBONJO-VILLAGE": [
            {
              "station": "CASE COMMUNAUTAIRE MBONJO - VILL / A",
              "voters": 159
            }
          ],
          "(MBONJO": [
            {
              "station": "CASE COMMUNAUTAIRE MBONJO - VILL / A",
              "voters": 159
            }
          ],
          "II-": [
            {
              "station": "CASE COMMUNAUTAIRE MBONJO - VILL / A",
              "voters": 159
            }
          ],
          "MBONDO": [
            {
              "station": "CASE COMMUNAUTAIRE MBONJO - VILL / A",
              "voters": 159
            }
          ],
          "MAYEN": [
            {
              "station": "CASE DE PASSAGE MAYEN / A",
              "voters": 116
            }
          ],
          "BAYON": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 1564
            }
          ],
          "BONASSAMA-SOUZA": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 765
            }
          ],
          "SOUZA": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 54994
            }
          ],
          "BIG": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 765
            }
          ],
          "MOP": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 765
            }
          ],
          "BONABERI": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 765
            }
          ],
          "CARREFOUR": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 1668
            }
          ],
          "BLACK": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 799
            }
          ],
          "DERRIERE": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 5193
            }
          ],
          "GARE": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 7574
            }
          ],
          "QUARTIER": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 6097
            }
          ],
          "HAOUSSA": [
            {
              "station": "CETIC DE SOUZA / A",
              "voters": 765
            }
          ],
          "KOMPINA": [
            {
              "station": "CLUB CDC CAMP I KOMPINA / A",
              "voters": 4444
            }
          ],
          "CDC-CAMP": [
            {
              "station": "CLUB CDC CAMP I KOMPINA / A",
              "voters": 1072
            }
          ],
          "BANGOULAP": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "BAYANGUE": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "BONABONG": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2347
            }
          ],
          "CHATEAU": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2347
            }
          ],
          "D'EAU": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2347
            }
          ],
          "HAUTE": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "TENSION": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "KASSALA": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2347
            }
          ],
          "FARM": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2347
            }
          ],
          "MISSION": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 4598
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2375
            }
          ],
          "CEBEC": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "BANGANGTE": [
            {
              "station": "COLLEGE HERBERT SOUZA-GARE / A",
              "voters": 2299
            }
          ],
          "MBONJO-BAR": [
            {
              "station": "COLLEGE PIPART / A",
              "voters": 1104
            }
          ],
          "PIPART": [
            {
              "station": "COLLEGE PIPART / A",
              "voters": 1104
            }
          ],
          "AKWA": [
            {
              "station": "COLLEGE PRIVEE NEW HOPE / A",
              "voters": 116
            }
          ],
          "SELELE": [
            {
              "station": "COLLEGE PRIVEE NEW HOPE / A",
              "voters": 116
            }
          ],
          "NEW": [
            {
              "station": "COLLEGE PRIVEE NEW HOPE / A",
              "voters": 58
            }
          ],
          "KOUMBILI": [
            {
              "station": "COLLEGE PRIVEE NEW HOPE / A",
              "voters": 58
            }
          ],
          "BINAM": [
            {
              "station": "E.P. BIL MOUNDANI SOUZA / A",
              "voters": 3403
            }
          ],
          "MUNDANI": [
            {
              "station": "E.P. BIL MOUNDANI SOUZA / A",
              "voters": 3403
            }
          ],
          "NKONGPEN": [
            {
              "station": "E.P. BIL MOUNDANI SOUZA / A",
              "voters": 3737
            }
          ],
          "CAMP": [
            {
              "station": "E.P. DE KOMPINA / A",
              "voters": 326
            }
          ],
          "ONE": [
            {
              "station": "E.P. DE KOMPINA / A",
              "voters": 326
            }
          ],
          "CDC": [
            {
              "station": "E.P. DE KOMPINA / A",
              "voters": 326
            }
          ],
          "NDOULOU(MIANG,BADOU,BADJIOU)": [
            {
              "station": "E.P. NDOULOU / A",
              "voters": 278
            }
          ],
          "ANCIENNE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 2952
            }
          ],
          "POSTE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 2952
            }
          ],
          "MAIRIE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1476
            }
          ],
          "MARCHE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 2952
            }
          ],
          "STATION": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1476
            }
          ],
          "MAYA": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1476
            }
          ],
          "NYLON": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1476
            }
          ],
          "ECOLE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1552
            }
          ],
          "PUBLIQUE": [
            {
              "station": "E.P. SOUZA GARE / A",
              "voters": 1476
            }
          ],
          "BAG-GARE": [
            {
              "station": "ECOLE BIL KOMPINA ROAD / A",
              "voters": 1371
            }
          ],
          "KOMPINA-CHEFFERIE": [
            {
              "station": "ECOLE BIL KOMPINA ROAD / A",
              "voters": 1371
            }
          ],
          "KOMPINA-GARE": [
            {
              "station": "ECOLE BIL KOMPINA ROAD / A",
              "voters": 1371
            }
          ],
          "KOMPINA-MARCHE": [
            {
              "station": "ECOLE BIL KOMPINA ROAD / A",
              "voters": 1371
            }
          ],
          "KOMPINA-ROAD": [
            {
              "station": "ECOLE BIL KOMPINA ROAD / A",
              "voters": 1371
            }
          ],
          "BONATOTO": [
            {
              "station": "ECOLE DES PARENTS KOUNANG / A",
              "voters": 46
            }
          ],
          "KOUNANG": [
            {
              "station": "ECOLE DES PARENTS KOUNANG / A",
              "voters": 46
            }
          ],
          "DERICK": [
            {
              "station": "ECOLE PRIVEE LAIQUE L'EXPERTISE DE  SOUZA / A",
              "voters": 109
            }
          ],
          "MARIGOT": [
            {
              "station": "ECOLE PRIVEE LAIQUE L'EXPERTISE DE  SOUZA / A",
              "voters": 109
            }
          ],
          "D'HUILE": [
            {
              "station": "ECOLE PRIVEE LAIQUE L'EXPERTISE DE  SOUZA / A",
              "voters": 109
            }
          ],
          "NKOLO": [
            {
              "station": "ECOLE PRIVEE LAIQUE L'EXPERTISE DE  SOUZA / A",
              "voters": 109
            }
          ],
          "BANSENG": [
            {
              "station": "ECOLE PUBLIQUE BANSENG / A",
              "voters": 43
            }
          ],
          "MPOBO": [
            {
              "station": "ECOLE PUBLIQUE BANSENG / A",
              "voters": 43
            }
          ],
          "BADOU": [
            {
              "station": "ECOLE PUBLIQUE KAKE VILLAGE / A",
              "voters": 291
            }
          ],
          "KAKE": [
            {
              "station": "ECOLE PUBLIQUE KAKE VILLAGE / A",
              "voters": 582
            }
          ],
          "BONANKA": [
            {
              "station": "ECOLE PUBLIQUE KAKE VILLAGE / A",
              "voters": 291
            }
          ],
          "BONANJO": [
            {
              "station": "ECOLE PUBLIQUE KAKE VILLAGE / A",
              "voters": 1767
            }
          ],
          "KAKE-VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE KAKE VILLAGE / A",
              "voters": 291
            }
          ],
          "PENDA": [
            {
              "station": "ECOLE PUBLIQUE MALENDE / A",
              "voters": 2251
            }
          ],
          "MBOKO-CDC-CAMP": [
            {
              "station": "ECOLE PUBLIQUE MALENDE / A",
              "voters": 1551
            }
          ],
          "BONANGASSE": [
            {
              "station": "ECOLE PUBLIQUE MANDOUKA / A",
              "voters": 176
            }
          ],
          "KOLLO": [
            {
              "station": "ECOLE PUBLIQUE MANDOUKA / A",
              "voters": 176
            }
          ],
          "MALENDE": [
            {
              "station": "ECOLE PUBLIQUE MANDOUKA / A",
              "voters": 239
            }
          ],
          "MANDOUKA": [
            {
              "station": "ECOLE PUBLIQUE MANDOUKA / A",
              "voters": 176
            }
          ],
          "KOKI": [
            {
              "station": "ECOLE PUBLIQUE MIANG / A",
              "voters": 203
            }
          ],
          "MIANG-": [
            {
              "station": "ECOLE PUBLIQUE MIANG / A",
              "voters": 203
            }
          ],
          "MIANG": [
            {
              "station": "ECOLE PUBLIQUE MIANG / A",
              "voters": 203
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE MIANG / A",
              "voters": 203
            }
          ],
          "MBONJO": [
            {
              "station": "ECOLE PUBLIQUE SOCAPALM MBONJO I / A",
              "voters": 671
            }
          ],
          "MBONJO-CAMP": [
            {
              "station": "ECOLE PUBLIQUE SOCAPALM MBONJO I / A",
              "voters": 512
            }
          ],
          "(SOCAPALM)": [
            {
              "station": "ECOLE PUBLIQUE SOCAPALM MBONJO I / A",
              "voters": 512
            }
          ],
          "STADE": [
            {
              "station": "ECOLE ST CHARLES LWANGA KOMPINA / A",
              "voters": 76
            }
          ],
          "MALEKE": [
            {
              "station": "ECOLE ST KISITO MALEKE / A",
              "voters": 2280
            }
          ],
          "BEKOUMA-KAKE": [
            {
              "station": "ECOLE ST LUC / A",
              "voters": 320
            }
          ],
          "BEKOUMA-SOUZA": [
            {
              "station": "ECOLE ST LUC / A",
              "voters": 320
            }
          ],
          "CARREFOUR-KAKE": [
            {
              "station": "ECOLE ST LUC / A",
              "voters": 320
            }
          ],
          "MANKOULANG": [
            {
              "station": "EEC MANKOULANG / A",
              "voters": 63
            }
          ],
          "GRAND": [
            {
              "station": "GRAND-SOUZA ECOLE PUBLIQUE / A",
              "voters": 394
            }
          ],
          "MOUNDANI": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 628
            }
          ],
          "BERCLOTEL": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 157
            }
          ],
          "FONDONERA/QUARTIER": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 157
            }
          ],
          "DSCHANG": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 157
            }
          ],
          "MASSEPO": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 157
            }
          ],
          "VALLEE": [
            {
              "station": "GROUPE SCOLAIRE LA COLOMBE DE SOUZA  /A",
              "voters": 157
            }
          ],
          "MBOKO-VILLAGE": [
            {
              "station": "LYCEE BIL DE PENDA MBOKO / A",
              "voters": 700
            }
          ],
          "MAKEMBA": [
            {
              "station": "MAKEMBA (EEC) / A",
              "voters": 56
            }
          ]
        },
        "DIBOMBARI": {
          "DIKOLO": [
            {
              "station": "CASE COM BOMONO-BA-MBENGUE / A",
              "voters": 861
            }
          ],
          "NKONE": [
            {
              "station": "CASE COM BOMONO-BA-MBENGUE / A",
              "voters": 861
            }
          ],
          "BOADIBO": [
            {
              "station": "CASE COMMUNAUTAIRE BOADIBO / A",
              "voters": 2657
            }
          ],
          "GABSIA": [
            {
              "station": "CASE COMMUNAUTAIRE BOADIBO / A",
              "voters": 2657
            }
          ],
          "NOBRA": [
            {
              "station": "CASE COMMUNAUTAIRE BOADIBO / A",
              "voters": 2657
            }
          ],
          "YABAKON": [
            {
              "station": "CASE DE SANTE YASSEM / A",
              "voters": 78
            }
          ],
          "YASSEM": [
            {
              "station": "CASE DE SANTE YASSEM / A",
              "voters": 78
            }
          ],
          "BALI": [
            {
              "station": "CENTRE D'ETAT CIVILE BALLI / A",
              "voters": 50
            }
          ],
          "BEJANGA": [
            {
              "station": "CENTRE ETAT CIVIL BEJANGA / A",
              "voters": 394
            }
          ],
          "YANDOM": [
            {
              "station": "E.E.C YANDOM / A",
              "voters": 193
            }
          ],
          "BONAMAKA": [
            {
              "station": "E.E.C. BWANJOUMBA / A",
              "voters": 256
            }
          ],
          "BWANJOUMBA": [
            {
              "station": "E.E.C. BWANJOUMBA / A",
              "voters": 256
            }
          ],
          "MOUNDEBELLE": [
            {
              "station": "E.E.C. BWANJOUMBA / A",
              "voters": 256
            }
          ],
          "NJOUKI": [
            {
              "station": "E.E.C. NJOUKI / A",
              "voters": 108
            }
          ],
          "YASSUKA": [
            {
              "station": "E.E.C. YASSUKA / A",
              "voters": 65
            }
          ],
          "BEKOKO": [
            {
              "station": "E.P. BEKOKO / A",
              "voters": 661
            }
          ],
          "BOMONO": [
            {
              "station": "E.P. BOMONO GARE / A",
              "voters": 826
            }
          ],
          "GARE": [
            {
              "station": "E.P. BOMONO GARE / A",
              "voters": 2880
            }
          ],
          "REGIE": [
            {
              "station": "E.P. BOMONO GARE / A",
              "voters": 2054
            }
          ],
          "KASSALAFARM": [
            {
              "station": "E.P. BOMONO GARE / A",
              "voters": 826
            }
          ],
          "BONAKOLLO": [
            {
              "station": "E.P. BOMONO-BA-JEDU / A",
              "voters": 529
            }
          ],
          "BONAMABONG": [
            {
              "station": "E.P. BOMONO-BA-JEDU / A",
              "voters": 388
            }
          ],
          "BONEWANG": [
            {
              "station": "E.P. BOMONO-BA-JEDU / A",
              "voters": 670
            }
          ],
          "BWAMBODI": [
            {
              "station": "E.P. BOMONO-BA-JEDU / A",
              "voters": 388
            }
          ],
          "SOLLE": [
            {
              "station": "E.P. BOMONO-BA-JEDU / A",
              "voters": 388
            }
          ],
          "JOMBE": [
            {
              "station": "E.P. BOMONO-BA-MBENGUE / A",
              "voters": 596
            }
          ],
          "NKONGBONG": [
            {
              "station": "E.P. BONAMATEKE / A",
              "voters": 340
            }
          ],
          "YAMIKOKI": [
            {
              "station": "E.P. BONAMATEKE / A",
              "voters": 340
            }
          ],
          "BONAJANGA": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "BONAKOULE": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 796
            }
          ],
          "BONAMALOLO": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "DIBOMBARI": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 740
            }
          ],
          "CENTRE": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 709
            }
          ],
          "NGUE": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "PEGNA": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "TIKI": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "KOULE": [
            {
              "station": "E.P. BWELELO / A",
              "voters": 315
            }
          ],
          "NKAPA": [
            {
              "station": "E.P. NKAPA SOCAPALM / A",
              "voters": 1871
            }
          ],
          "LEFEM": [
            {
              "station": "E.P. NKAPA VILLAGE / A",
              "voters": 1915
            }
          ],
          "MOUYENGUE": [
            {
              "station": "E.P. NKAPA VILLAGE / A",
              "voters": 1115
            }
          ],
          "CAMP": [
            {
              "station": "E.P. TILLO / A",
              "voters": 1656
            }
          ],
          "MAITRISE": [
            {
              "station": "E.P. TILLO / A",
              "voters": 670
            }
          ],
          "SOCAPALM": [
            {
              "station": "E.P. TILLO / A",
              "voters": 1540
            }
          ],
          "OUVRIERS": [
            {
              "station": "E.P. TILLO / A",
              "voters": 986
            }
          ],
          "TILLO": [
            {
              "station": "E.P. TILLO / A",
              "voters": 1100
            }
          ],
          "CITE": [
            {
              "station": "E.P. TILLO / A",
              "voters": 870
            }
          ],
          "DES": [
            {
              "station": "E.P. TILLO / A",
              "voters": 550
            }
          ],
          "CADRES": [
            {
              "station": "E.P. TILLO / A",
              "voters": 550
            }
          ],
          "VILLAGE": [
            {
              "station": "E.P. TILLO / A",
              "voters": 2491
            }
          ],
          "YABEA": [
            {
              "station": "E.P. YABEA / A",
              "voters": 73
            }
          ],
          "E.T.A": [
            {
              "station": "E.T.A BWELELO / A",
              "voters": 250
            }
          ],
          "BONAMASSOUKA": [
            {
              "station": "ECOLE CATHOLIQUE BONANGUELE / A",
              "voters": 140
            }
          ],
          "BONANGUELE": [
            {
              "station": "ECOLE CATHOLIQUE BONANGUELE / A",
              "voters": 140
            }
          ],
          "EWOULO": [
            {
              "station": "ECOLE CATHOLIQUE BONANGUELE / A",
              "voters": 140
            }
          ],
          "BONABENGA": [
            {
              "station": "ECOLE MATERNELLE BWELELO / A",
              "voters": 256
            }
          ],
          "BONANJANGA": [
            {
              "station": "ECOLE MATERNELLE BWELELO / A",
              "voters": 487
            }
          ],
          "BWATAKA": [
            {
              "station": "ECOLE MATERNELLE BWELELO / A",
              "voters": 256
            }
          ],
          "MIONDO": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1498
            }
          ],
          "BAR": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1498
            }
          ],
          "MONTHE": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1498
            }
          ],
          "NGONGANG": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1844
            }
          ],
          "SONEL": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1498
            }
          ],
          "YAPAKI": [
            {
              "station": "ECOLE PRESBYTERIENNE YAPAKI / A",
              "voters": 1498
            }
          ],
          "BAYONG": [
            {
              "station": "ECOLE ST THOMAS - BOMONO - BA -  MBENGUE / A",
              "voters": 668
            }
          ],
          "MAKA": [
            {
              "station": "ECOLE ST THOMAS - BOMONO - BA -  MBENGUE / A",
              "voters": 1142
            }
          ],
          "MOUKOMBO": [
            {
              "station": "ECOLE ST THOMAS - BOMONO - BA -  MBENGUE / A",
              "voters": 668
            }
          ],
          "BASSA": [
            {
              "station": "FOYER BASSA / A",
              "voters": 313
            }
          ],
          "BONAMBONGUE": [
            {
              "station": "FOYER BONAMBONGUE / A",
              "voters": 24
            }
          ],
          "YABWADIBE": [
            {
              "station": "FOYER BONAMBONGUE / A",
              "voters": 24
            }
          ],
          "BIENDINDE": [
            {
              "station": "FOYER BONANDINDE / BIENDENDE / A",
              "voters": 70
            }
          ],
          "BONADINDE": [
            {
              "station": "FOYER BONANDINDE / BIENDENDE / A",
              "voters": 70
            }
          ],
          "MBANGUE": [
            {
              "station": "FOYER DE MBANGUE I / A",
              "voters": 94
            }
          ],
          "BONAMBWASSE": [
            {
              "station": "FOYER DIBOMBARI BEACH / A",
              "voters": 31
            }
          ],
          "BEACH": [
            {
              "station": "FOYER DIBOMBARI BEACH / A",
              "voters": 31
            }
          ],
          "BONAMOUKOUDI": [
            {
              "station": "FOYER E.E.C. BOSSEDI I / A",
              "voters": 291
            }
          ],
          "BOSSEDI": [
            {
              "station": "FOYER E.E.C. BOSSEDI I / A",
              "voters": 331
            }
          ],
          "MABANGA": [
            {
              "station": "FOYER MABANGA / A",
              "voters": 47
            }
          ],
          "NKENDE": [
            {
              "station": "FOYER NKENDE / A",
              "voters": 196
            }
          ],
          "NKOUME": [
            {
              "station": "FOYER SOCAPALM NKOUME / A",
              "voters": 296
            }
          ],
          "CITY": [
            {
              "station": "FOYER SOCAPALM NKOUME / A",
              "voters": 296
            }
          ],
          "YABONA": [
            {
              "station": "FOYER YABONA / A",
              "voters": 61
            }
          ],
          "YAMIDJANG": [
            {
              "station": "FOYER YABONA / A",
              "voters": 61
            }
          ],
          "BONGO": [
            {
              "station": "FOYER YANGONANG / A",
              "voters": 143
            }
          ],
          "YANGONANG": [
            {
              "station": "FOYER YANGONANG / A",
              "voters": 143
            }
          ],
          "MOULANGA": [
            {
              "station": "FOYER YATO / A",
              "voters": 1353
            }
          ],
          "YATO": [
            {
              "station": "FOYER YATO / A",
              "voters": 837
            }
          ],
          "BABENGA": [
            {
              "station": "MISSION CATHOLIQUE BABENGA / A",
              "voters": 2068
            }
          ],
          "LYBANAIS": [
            {
              "station": "MISSION CATHOLIQUE BABENGA / A",
              "voters": 2068
            }
          ],
          "MOUNYENGUE": [
            {
              "station": "MISSION CATHOLIQUE NKAPA / A",
              "voters": 800
            }
          ],
          "BEKOUMA": [
            {
              "station": "MISSSION CATHOLIQUE BEKOUMA / A",
              "voters": 444
            }
          ],
          "MINYOUNGOU": [
            {
              "station": "N,B,C/EBC MINYOUNGOU / A",
              "voters": 69
            }
          ],
          "YANDOUNGOU": [
            {
              "station": "N,B,C/EBC MINYOUNGOU / A",
              "voters": 69
            }
          ],
          "BUEA-PONGO": [
            {
              "station": "POSTE AGRICOLE NGODI / A",
              "voters": 129
            }
          ],
          "NGODI": [
            {
              "station": "POSTE AGRICOLE NGODI / A",
              "voters": 129
            }
          ],
          "NJOBWELE": [
            {
              "station": "POSTE AGRICOLE NJOBWELE / A",
              "voters": 73
            }
          ],
          "III": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "BONATAKWA": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "COMMISSARIAT": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "SPECIAL": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "GENDARMERIE": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "BWELOLO": [
            {
              "station": "TRIBUNAL BWELELO / A",
              "voters": 231
            }
          ],
          "BONABWENG": [
            {
              "station": "UEBC BONABWENG / A",
              "voters": 81
            }
          ],
          "BWASSALO": [
            {
              "station": "UEBC BWASSALO / A",
              "voters": 234
            }
          ]
        },
        "EBONE": {
          "EBONE-MBENG": [
            {
              "station": "ANCIEN POSTE FORESTIER / A",
              "voters": 186
            }
          ],
          "EYANG-MBENG": [
            {
              "station": "ANCIEN POSTE FORESTIER / A",
              "voters": 186
            }
          ],
          "EBONE": [
            {
              "station": "ANCIEN POSTE FORESTIER / A",
              "voters": 186
            }
          ],
          "NJANGA": [
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 124
            }
          ],
          "SINGUEDJANG": [
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 124
            }
          ],
          "KEM": [
            {
              "station": "CES BAKWAT / A",
              "voters": 1142
            }
          ],
          "BAKWAT": [
            {
              "station": "CES BAKWAT / A",
              "voters": 990
            }
          ],
          "BAYILE": [
            {
              "station": "CES MANENGOLE / A",
              "voters": 70
            }
          ],
          "EBANGTE": [
            {
              "station": "CES MANENGOLE / A",
              "voters": 70
            }
          ],
          "MANJAM": [
            {
              "station": "CES MANENGOLE / A",
              "voters": 872
            }
          ],
          "MANENGOLE": [
            {
              "station": "CES MANENGOLE / A",
              "voters": 1397
            }
          ],
          "NLOCK": [
            {
              "station": "CES MANENGOLE / A",
              "voters": 70
            }
          ],
          "MANENGOUBA": [
            {
              "station": "CES MANENGOUBA / A",
              "voters": 153
            }
          ],
          "MAMBELLION": [
            {
              "station": "CS MAMBELLION / A",
              "voters": 76
            }
          ],
          "MANGAMBA": [
            {
              "station": "CS MANGAMBA / A",
              "voters": 427
            }
          ],
          "MANEBOUE": [
            {
              "station": "ECOLE CATHOLIQUE MANENGOLE / A",
              "voters": 565
            }
          ],
          "NHANG": [
            {
              "station": "ECOLE CATHOLIQUE NHANG BAKWAT / A",
              "voters": 261
            }
          ],
          "NDOUNGUE": [
            {
              "station": "ECOLE CATHOLIQUE SACRE COEUR  NDOUNGUE / A",
              "voters": 1353
            }
          ],
          "BANG": [
            {
              "station": "ECOLE CATHOLIQUE SACRE COEUR  NDOUNGUE / A",
              "voters": 1167
            }
          ],
          "BADJONG": [
            {
              "station": "EEC BADJONG / A",
              "voters": 60
            }
          ],
          "BETTE": [
            {
              "station": "EP BAKAKTE / A",
              "voters": 115
            }
          ],
          "EKRINGOUB": [
            {
              "station": "EP BAKAKTE / A",
              "voters": 115
            }
          ],
          "KWADIKOH": [
            {
              "station": "EP BAKAKTE / A",
              "voters": 488
            }
          ],
          "BAKAKTE": [
            {
              "station": "EP BAKAKTE / A",
              "voters": 115
            }
          ],
          "LAH": [
            {
              "station": "EP BAKWAT / A",
              "voters": 373
            }
          ],
          "BALONDO": [
            {
              "station": "EP BALONDO / A",
              "voters": 214
            }
          ],
          "BASSELTE": [
            {
              "station": "EP BASSELTE / A",
              "voters": 94
            }
          ],
          "BEMJO": [
            {
              "station": "EP BEMJO / A",
              "voters": 43
            }
          ],
          "BWANEBWA": [
            {
              "station": "EP BWANEBWA / A",
              "voters": 117
            }
          ],
          "EKOM-KOH": [
            {
              "station": "EP EBONE / A",
              "voters": 336
            }
          ],
          "EKOM-MBENG": [
            {
              "station": "EP EBONE / A",
              "voters": 336
            }
          ],
          "EKOHOCK": [
            {
              "station": "EP EKOHOCK / A",
              "voters": 139
            }
          ],
          "NTOLO": [
            {
              "station": "EP EKOHOCK / A",
              "voters": 271
            }
          ],
          "EKOMTOLO": [
            {
              "station": "EP EKOMTOLO / A",
              "voters": 66
            }
          ],
          "NDOMBENG": [
            {
              "station": "EP NDOMBENG / A",
              "voters": 128
            }
          ],
          "NKONGNINE": [
            {
              "station": "EP NKONGNINE / A",
              "voters": 482
            }
          ],
          "SALMOA": [
            {
              "station": "EP SALMOA / A",
              "voters": 85
            }
          ],
          "EBONE-KOH": [
            {
              "station": "LYCEE D'EBONE / A",
              "voters": 239
            }
          ],
          "FONTIONNAIRE": [
            {
              "station": "MAIRIE D'EBONE / A",
              "voters": 97
            }
          ],
          "SERVICE": [
            {
              "station": "MAIRIE D'EBONE / A",
              "voters": 97
            }
          ],
          "EKOMEDION": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 184
            }
          ],
          "MBAKA": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 370
            }
          ],
          "VILLAGE": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 370
            }
          ],
          "NDIANG-EKOM": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 184
            }
          ],
          "NTAMAKO": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 423
            }
          ],
          "NYAMSA": [
            {
              "station": "SAR/SM MANGAMBA / A",
              "voters": 184
            }
          ]
        },
        "LOUM": {
          "RAILS": [
            {
              "station": "COLLEGE NGAMGA & FRERES / A",
              "voters": 296
            }
          ],
          "BONEBELA": [
            {
              "station": "COLLEGE NGAMGA & FRERES / A",
              "voters": 296
            }
          ],
          "NKOMBI": [
            {
              "station": "COLLEGE ST PIERRE & PAUL / A",
              "voters": 11198
            }
          ],
          "NGONGUE": [
            {
              "station": "E. ST ALBERT LOUM CHT GARE / A",
              "voters": 748
            }
          ],
          "NGOUMBA": [
            {
              "station": "E. ST ALBERT LOUM CHT GARE / A",
              "voters": 748
            }
          ],
          "DIME": [
            {
              "station": "E. ST PAUL LOUM CHT CIE / A",
              "voters": 770
            }
          ],
          "NASSIF": [
            {
              "station": "ECOLE CEBEC LOUM CHT CIE / A",
              "voters": 1033
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ECOLE CEBEC MADAGASCAR / A",
              "voters": 575
            }
          ],
          "INDEPENDANCE": [
            {
              "station": "ECOLE CEBEC MARCHE / A",
              "voters": 4083
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE CEBEC MARCHE / A",
              "voters": 1925
            }
          ],
          "BONADAM": [
            {
              "station": "ECOLE PUBLIQUE BABONG / A",
              "voters": 113
            }
          ],
          "(BABONG)": [
            {
              "station": "ECOLE PUBLIQUE BABONG / A",
              "voters": 113
            }
          ],
          "BALONDO": [
            {
              "station": "ECOLE PUBLIQUE BALONDO / A",
              "voters": 302
            }
          ],
          "BONALEBE": [
            {
              "station": "ECOLE PUBLIQUE BONALEBE / A",
              "voters": 296
            }
          ],
          "BONAMBOME": [
            {
              "station": "ECOLE PUBLIQUE BONKENG / A",
              "voters": 756
            }
          ],
          "BONKENG": [
            {
              "station": "ECOLE PUBLIQUE BONKENG / A",
              "voters": 756
            }
          ],
          "NYLON": [
            {
              "station": "ECOLE PUBLIQUE BONKENG / A",
              "voters": 756
            }
          ],
          "MOUNGO": [
            {
              "station": "ECOLE PUBLIQUE LOUM CHT CIE / A",
              "voters": 2292
            }
          ],
          "RIVER": [
            {
              "station": "ECOLE PUBLIQUE LOUM CHT CIE / A",
              "voters": 2292
            }
          ],
          "MABOMBE": [
            {
              "station": "ECOLE PUBLIQUE MABOMBE / A",
              "voters": 527
            }
          ],
          "TWO": [
            {
              "station": "ECOLE PUBLIQUE MABOMBE / A",
              "voters": 527
            }
          ],
          "WATER": [
            {
              "station": "ECOLE PUBLIQUE MABOMBE / A",
              "voters": 527
            }
          ],
          "NGODI": [
            {
              "station": "ECOLE PUBLIQUE SANDA I / A",
              "voters": 12409
            }
          ],
          "BWANIBWA": [
            {
              "station": "ESPLANADE CHEFFERIE BWANIBWA II / A",
              "voters": 57
            }
          ],
          "MANENGWASSA": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 3877
            }
          ],
          "DIMITHE": [
            {
              "station": "FOYER BANGOULAP / A",
              "voters": 809
            }
          ],
          "FONTAINE": [
            {
              "station": "FOYER FONTAINE LOUM CHT CIE / A",
              "voters": 108
            }
          ],
          "VILLAGE": [
            {
              "station": "FOYER NGONDO III / A",
              "voters": 55
            }
          ],
          "NGONDO": [
            {
              "station": "FOYER NGONDO III / A",
              "voters": 55
            }
          ],
          "III": [
            {
              "station": "FOYER NGONDO III / A",
              "voters": 55
            }
          ],
          "SALAKA": [
            {
              "station": "FOYER SALAKA / A",
              "voters": 123
            }
          ],
          "ROUTE": [
            {
              "station": "HANGAR PHP ROUTE BAKOSSI A / A",
              "voters": 2158
            }
          ],
          "BAKOSSI": [
            {
              "station": "HANGAR PHP ROUTE BAKOSSI A / A",
              "voters": 2158
            }
          ],
          "BONEKO": [
            {
              "station": "LYCEE BILINGUE LOUM CHT GARE / A",
              "voters": 535
            }
          ],
          "MISSION": [
            {
              "station": "LYCEE BILINGUE LOUM CHT GARE / A",
              "voters": 535
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "LYCEE BILINGUE LOUM CHT GARE / A",
              "voters": 535
            }
          ],
          "MPONDO": [
            {
              "station": "LYCEE DE LOUM / A",
              "voters": 253
            }
          ],
          "ETAPE": [
            {
              "station": "MAIRIE DE LOUM / A",
              "voters": 1167
            }
          ],
          "BADJOKI": [
            {
              "station": "SAR. SM BADJOKI / A",
              "voters": 73
            }
          ],
          "ABATTOIR": [
            {
              "station": "TRIBUNAL DE LOUM / A",
              "voters": 3185
            }
          ]
        },
        "MANJO": {
          "NKWAH": [
            {
              "station": "ANCIENNE ECOLE MATERNELLE NKWAH / A",
              "voters": 217
            }
          ],
          "(QTIER": [
            {
              "station": "ANCIENNE ECOLE MATERNELLE NKWAH / A",
              "voters": 217
            }
          ],
          "MOUMEKENG": [
            {
              "station": "CES BILINGUE DE MOUMEKENG / A",
              "voters": 140
            }
          ],
          "MIKOMBE-POSTE": [
            {
              "station": "CJA / A",
              "voters": 303
            }
          ],
          "(DIBOMBE)": [
            {
              "station": "CJA / A",
              "voters": 303
            }
          ],
          "BOUM": [
            {
              "station": "COLLEGE DE L'UNITE / A",
              "voters": 824
            }
          ],
          "MANEWANG-COLLEGE": [
            {
              "station": "COLLEGE DE NLONAKO / A",
              "voters": 96
            }
          ],
          "NLONAKO": [
            {
              "station": "COLLEGE DE NLONAKO / A",
              "voters": 96
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ECOLE BILINGUE ANNEXE DE MANJO / A",
              "voters": 81
            }
          ],
          "MISSION": [
            {
              "station": "ECOLE CATHOLIQUE KOLLA -MISSION / A",
              "voters": 495
            }
          ],
          "LALA": [
            {
              "station": "ECOLE CATHOLIQUE LALA MISSION / A",
              "voters": 536
            }
          ],
          "MOUAKOUMEL": [
            {
              "station": "ECOLE CATHOLIQUE MOUAKOUMEL / A",
              "voters": 93
            }
          ],
          "NDIANG(QTIER": [
            {
              "station": "ECOLE CATHOLIQUE ST MARC DE NDIANG / A",
              "voters": 751
            }
          ],
          "MIKOMBE-ECOLE": [
            {
              "station": "ECOLE CATHOLIQUE ST NESTOR DE  MIKOMBE / A",
              "voters": 590
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "ECOLE CATHOLIQUE ST NESTOR DE  MIKOMBE / A",
              "voters": 590
            }
          ],
          "NLOHE-NSOLE": [
            {
              "station": "ECOLE CEBEC DE NLOHE-NSOLE / A",
              "voters": 451
            }
          ],
          "KWALLA": [
            {
              "station": "ECOLE CEBEC KWALLA / A",
              "voters": 924
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE CEBEC KWALLA / A",
              "voters": 924
            }
          ],
          "FOIE": [
            {
              "station": "ECOLE CEBEC KWALLA / A",
              "voters": 924
            }
          ],
          "(CHEFFERIE)": [
            {
              "station": "ECOLE CEBEC KWALLA / A",
              "voters": 924
            }
          ],
          "KWALLA-CEBEC": [
            {
              "station": "ECOLE CEBEC KWALLA / A",
              "voters": 424
            }
          ],
          "MANENGOTENG-": [
            {
              "station": "ECOLE CEBEC MANENGOTENG / A",
              "voters": 415
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE CEBEC MANENGOTENG / A",
              "voters": 415
            }
          ],
          "I-MOUETOUCK": [
            {
              "station": "ECOLE P. NJOUMBENG ANNEXE  MOUETOUCK / A",
              "voters": 77
            }
          ],
          "EMENG": [
            {
              "station": "ECOLE PUBLIQUE  GR1 DE MANJO / A",
              "voters": 1575
            }
          ],
          "COMMISSARIAT": [
            {
              "station": "ECOLE PUBLIQUE  GR1 DE MANJO / A",
              "voters": 1575
            }
          ],
          "EMENG-CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE  GR1 DE MANJO / A",
              "voters": 907
            }
          ],
          "EMENG-MATERNELLE": [
            {
              "station": "ECOLE PUBLIQUE  GR1 DE MANJO / A",
              "voters": 1222
            }
          ],
          "ABANG": [
            {
              "station": "ECOLE PUBLIQUE ABANG / A",
              "voters": 208
            }
          ],
          "BADJOUNGUE": [
            {
              "station": "ECOLE PUBLIQUE BADJOUNGUE / A",
              "voters": 198
            }
          ],
          "EMAL-GARE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE MANJO / A",
              "voters": 592
            }
          ],
          "NGOL": [
            {
              "station": "ECOLE PUBLIQUE DE NGOL / A",
              "voters": 309
            }
          ],
          "NSOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE NSOUNG / A",
              "voters": 96
            }
          ],
          "MANEWANG-CEBEC": [
            {
              "station": "ECOLE PUBLIQUE GR2 MANEWANG / A",
              "voters": 623
            }
          ],
          "MANEWANG-CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE GR2 MANEWANG / A",
              "voters": 371
            }
          ],
          "KOLLA": [
            {
              "station": "ECOLE PUBLIQUE KOLLA / A",
              "voters": 1267
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE KOLLA / A",
              "voters": 1081
            }
          ],
          "-CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE KOLLA / A",
              "voters": 376
            }
          ],
          "-COMITE": [
            {
              "station": "ECOLE PUBLIQUE KOLLA / A",
              "voters": 705
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE LALA VILLAGE / A",
              "voters": 227
            }
          ],
          "MANENGOTENG-GARE": [
            {
              "station": "ECOLE PUBLIQUE MANENGOTENG / A",
              "voters": 218
            }
          ],
          "MANTEM": [
            {
              "station": "ECOLE PUBLIQUE MANTEM I / A",
              "voters": 319
            }
          ],
          "MBETTE": [
            {
              "station": "ECOLE PUBLIQUE MBETTE / A",
              "voters": 200
            }
          ],
          "MOUANDONG": [
            {
              "station": "ECOLE PUBLIQUE MOUANDONG / A",
              "voters": 218
            }
          ],
          "NAMBA": [
            {
              "station": "ECOLE PUBLIQUE NAMBA / A",
              "voters": 311
            }
          ],
          "NJOUMBENG": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG I / A",
              "voters": 704
            }
          ],
          "I-CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG I / A",
              "voters": 198
            }
          ],
          "BIS": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG I BIS / A",
              "voters": 154
            }
          ],
          "BIG": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG I BIS / A",
              "voters": 154
            }
          ],
          "MOP)": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG I BIS / A",
              "voters": 154
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE NJOUMBENG III / A",
              "voters": 186
            }
          ],
          "NLOHE-NDIBE": [
            {
              "station": "ECOLE PUBLIQUE NLOHE-NDIBE / A",
              "voters": 284
            }
          ],
          "EMAL-FOYER": [
            {
              "station": "FOYER BALESSING / A",
              "voters": 737
            }
          ],
          "BALESSING": [
            {
              "station": "FOYER BALESSING / A",
              "voters": 737
            }
          ],
          "(TCHONLAFI)": [
            {
              "station": "FOYER BALESSING / A",
              "voters": 737
            }
          ],
          "EMENG-LYCEE": [
            {
              "station": "LYCEE DE MANJO / A",
              "voters": 517
            }
          ],
          "MIKOMBE-CHEFFERIE": [
            {
              "station": "MAIRIE DE MANJO / A",
              "voters": 1317
            }
          ],
          "(ECOLE": [
            {
              "station": "MAIRIE DE MANJO / A",
              "voters": 1317
            }
          ],
          "MAT,)": [
            {
              "station": "MAIRIE DE MANJO / A",
              "voters": 1317
            }
          ],
          "MOUASSOUM": [
            {
              "station": "MISSION CATHOLIQUE DE MOUASSOUM / A",
              "voters": 86
            }
          ],
          "NDOM": [
            {
              "station": "MISSION CATHOLIQUE DE NDOM / A",
              "voters": 72
            }
          ],
          "KOLLA-SONGO": [
            {
              "station": "MISSION CATHOLIQUE KOLLA-SONGO / A",
              "voters": 178
            }
          ],
          "NLOHE-DIBOMBE": [
            {
              "station": "NLOHE - DIBOMBE ECOLE CATHOLIQUE / A",
              "voters": 523
            }
          ],
          "NLOHE-SASSA": [
            {
              "station": "SALLE COMITE DE NLOHE-SASSA / A",
              "voters": 560
            }
          ],
          "EKANGTE-MPAKA": [
            {
              "station": "SALLE COMITE EKANGTE-MPAKA / A",
              "voters": 111
            }
          ],
          "MANJO-ETAM": [
            {
              "station": "SALLE COMITE MANJO ETAM / A",
              "voters": 88
            }
          ],
          "NGOLSI": [
            {
              "station": "SALLE COMITE NGOLSI / A",
              "voters": 39
            }
          ],
          "EMENG-COMMISSARIAT": [
            {
              "station": "SAR SM / A",
              "voters": 668
            }
          ],
          "EMAL-EXPRESS": [
            {
              "station": "SERVICE SOCIAL MANJO / A",
              "voters": 829
            }
          ],
          "UNION": [
            {
              "station": "SERVICE SOCIAL MANJO / A",
              "voters": 829
            }
          ]
        },
        "MBANGA": {
          "ROUTE": [
            {
              "station": "CASE COMMUNAUTAIRE / A",
              "voters": 536
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ECOLE PUB BILINGUE MBANGA GPE 1 / A",
              "voters": 262
            }
          ],
          "TERRITORIALE": [
            {
              "station": "ECOLE PUB BILINGUE MBANGA GPE 1 / A",
              "voters": 262
            }
          ],
          "PRISON": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE MBANGA GPE 2 /  A",
              "voters": 101
            }
          ],
          "FIKO": [
            {
              "station": "ECOLE PUBLIQUE GRP III / A",
              "voters": 2429
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE GRP III / A",
              "voters": 32148
            }
          ],
          "MALENDE": [
            {
              "station": "ECOLE PUBLIQUE GRP IV / A",
              "voters": 211
            }
          ],
          "YOKE": [
            {
              "station": "ECOLE PUBLIQUE GRP V / A",
              "voters": 320
            }
          ],
          "KOTTO": [
            {
              "station": "ECOLE PUBLIQUE KOTTO DOWN TOWN / A",
              "voters": 2261
            }
          ],
          "MATOUKE": [
            {
              "station": "ECOLE PUBLIQUE MATOUKE / A",
              "voters": 894
            }
          ],
          "NEW": [
            {
              "station": "ECOLE PUBLIQUE MATOUKE / A",
              "voters": 447
            }
          ],
          "MOUYOUKA": [
            {
              "station": "ECOLE PUBLIQUE MOUYOUKA / A",
              "voters": 1355
            }
          ],
          "NACHTIGAL": [
            {
              "station": "ECOLE SAINT JOSEPH KOTTO NACHTIGAL / A",
              "voters": 778
            }
          ],
          "DIKOUMA": [
            {
              "station": "EEC DIKOUMA I / A",
              "voters": 258
            }
          ],
          "NDOH": [
            {
              "station": "EEC NDOH I / A",
              "voters": 2086
            }
          ],
          "NDOM": [
            {
              "station": "EEC NDOM I / A",
              "voters": 107
            }
          ],
          "CAMP": [
            {
              "station": "FOYER CAMP I / A",
              "voters": 215
            }
          ],
          "ONE": [
            {
              "station": "FOYER CAMP I / A",
              "voters": 215
            }
          ],
          "LENGUE": [
            {
              "station": "FOYER ITALIA CERAMICA / A",
              "voters": 178
            }
          ],
          "BEACH": [
            {
              "station": "GARE DE NDOH BEACH / A",
              "voters": 80
            }
          ],
          "KOMBE": [
            {
              "station": "GARE DE TRAIN KOMBE / A",
              "voters": 3004
            }
          ],
          "GARE": [
            {
              "station": "GARE DE TRAIN KOMBE / A",
              "voters": 115
            }
          ],
          "MARCHE": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE KOMBE  MARCHE / A",
              "voters": 1447
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "MAIRIE DE MBANGA / A",
              "voters": 340
            }
          ],
          "MISSION": [
            {
              "station": "MISSION CATHOLIQUE / A",
              "voters": 1524
            }
          ]
        },
        "MELONG": {
          "DENZO": [
            {
              "station": "COLLEGE 3 ETOILES / A",
              "voters": 240
            }
          ],
          "VILLE": [
            {
              "station": "COLLEGE 3 ETOILES / A",
              "voters": 192
            }
          ],
          "(FOTSO)": [
            {
              "station": "COLLEGE POLYVALENT / A",
              "voters": 462
            }
          ],
          "(CAFE)": [
            {
              "station": "COLLEGE POLYVALENT / A",
              "voters": 733
            }
          ],
          "PONT": [
            {
              "station": "COLLEGE TCHOUMO AARON / A",
              "voters": 1905
            }
          ],
          "MBOKEM": [
            {
              "station": "CS MBOKEM / A",
              "voters": 23
            }
          ],
          "NGALMBO": [
            {
              "station": "E P NGALMBO / A",
              "voters": 139
            }
          ],
          "MOUAKWEN": [
            {
              "station": "ECOLE BILINGUE MOUANGUEL / A",
              "voters": 382
            }
          ],
          "NKOM": [
            {
              "station": "ECOLE BILINGUE MOUANGUEL / A",
              "voters": 382
            }
          ],
          "BIS": [
            {
              "station": "ECOLE CEBEC MELONG CENTRE / A",
              "voters": 1947
            }
          ],
          "MISSION": [
            {
              "station": "ECOLE ST PAUL MELONG CENTRE / A",
              "voters": 1423
            }
          ],
          "NEW": [
            {
              "station": "ECOLE ST PAUL NEW MELONG / A",
              "voters": 1850
            }
          ],
          "MELONG": [
            {
              "station": "ECOLE ST PAUL NEW MELONG / A",
              "voters": 1850
            }
          ],
          "NJINJOU": [
            {
              "station": "ECOLE ST PAUL NJINJOU 1 / A",
              "voters": 690
            }
          ],
          "MBONDEMANG(LA": [
            {
              "station": "ECOLE ST PHILIPPE DE MBONDANG / A",
              "voters": 1048
            }
          ],
          "FORET)": [
            {
              "station": "ECOLE ST PHILIPPE DE MBONDANG / A",
              "voters": 1048
            }
          ],
          "MBOANGO": [
            {
              "station": "EEC MBOANGO / A",
              "voters": 110
            }
          ],
          "NKONGSOUNG": [
            {
              "station": "EP BONDJA NKONGSOUNG / A",
              "voters": 2050
            }
          ],
          "BONDJA": [
            {
              "station": "EP BONDJA NKONGSOUNG / A",
              "voters": 221
            }
          ],
          "EBAKONG": [
            {
              "station": "EP EBAKONG / A",
              "voters": 124
            }
          ],
          "EBANG": [
            {
              "station": "EP EBANG MAMA / A",
              "voters": 313
            }
          ],
          "MAMA": [
            {
              "station": "EP EBANG MAMA / A",
              "voters": 565
            }
          ],
          "EDIENGO": [
            {
              "station": "EP EDIENGO / A",
              "voters": 20
            }
          ],
          "EKAH": [
            {
              "station": "EP EKAH / A",
              "voters": 85
            }
          ],
          "NKAH": [
            {
              "station": "EP EKAH / A",
              "voters": 392
            }
          ],
          "EKANANG": [
            {
              "station": "EP EKANANG / A",
              "voters": 235
            }
          ],
          "VILLAGE": [
            {
              "station": "EP EKOLBOUNI / A",
              "voters": 928
            }
          ],
          "ESSEKOU": [
            {
              "station": "EP ESSEKOU / A",
              "voters": 671
            }
          ],
          "ETABANG": [
            {
              "station": "EP ETABANG / A",
              "voters": 225
            }
          ],
          "NLOLACK": [
            {
              "station": "EP ETABANG / A",
              "voters": 225
            }
          ],
          "HAOUSSA": [
            {
              "station": "EP GP1 MELONG CENTRE / A",
              "voters": 1639
            }
          ],
          "LELEM": [
            {
              "station": "EP LELEM MANGWETE / A",
              "voters": 6337
            }
          ],
          "MANGWETE": [
            {
              "station": "EP LELEM MANGWETE / A",
              "voters": 706
            }
          ],
          "MOUANTONG": [
            {
              "station": "EP LELEM MOUANTONG / A",
              "voters": 5631
            }
          ],
          "QUARTIER": [
            {
              "station": "EP LELEM MOUANTONG / A",
              "voters": 20616
            }
          ],
          "MANA": [
            {
              "station": "EP MANA / A",
              "voters": 304
            }
          ],
          "MANGWEKANG": [
            {
              "station": "EP MANGWEKANG / A",
              "voters": 97
            }
          ],
          "MANKWA": [
            {
              "station": "EP MANKWA / A",
              "voters": 343
            }
          ],
          "MBOKAMBO": [
            {
              "station": "EP MBOKAMBO / A",
              "voters": 232
            }
          ],
          "MBONDANG": [
            {
              "station": "EP MBOMBENG / A",
              "voters": 518
            }
          ],
          "NLONGKO": [
            {
              "station": "EP MBOMBENG / A",
              "voters": 518
            }
          ],
          "MBOUASSOUM": [
            {
              "station": "EP MBOUASSOUM / A",
              "voters": 549
            }
          ],
          "MBOUROUKOU": [
            {
              "station": "EP MBOUROUKOU / A",
              "voters": 677
            }
          ],
          "MONT": [
            {
              "station": "EP MBOUROUKOU MONT / A",
              "voters": 49
            }
          ],
          "EKOUNI": [
            {
              "station": "EP MOUANGUEL / A",
              "voters": 313
            }
          ],
          "NDOMVEN": [
            {
              "station": "EP MOUANGUEL / A",
              "voters": 313
            }
          ],
          "MOUHE": [
            {
              "station": "EP MOUHE / A",
              "voters": 86
            }
          ],
          "NANSI": [
            {
              "station": "EP NANSI / A",
              "voters": 1496
            }
          ],
          "NDOKOU": [
            {
              "station": "EP NDOKOU / A",
              "voters": 214
            }
          ],
          "NINONG": [
            {
              "station": "EP NINONG / A",
              "voters": 275
            }
          ],
          "NJINJO": [
            {
              "station": "EP NJINJO VILLAGE / A",
              "voters": 84
            }
          ],
          "NKANDJOU": [
            {
              "station": "EP NKANDJOU 1 / A",
              "voters": 592
            }
          ],
          "LONGTRAIT": [
            {
              "station": "EP NKONGSOUNG / A",
              "voters": 1261
            }
          ],
          "NSANKE": [
            {
              "station": "EP NSANKE / A",
              "voters": 182
            }
          ],
          "NZOBI": [
            {
              "station": "EP NZOBI / A",
              "voters": 41
            }
          ],
          "PASSIM": [
            {
              "station": "EP PASSIM / A",
              "voters": 296
            }
          ],
          "EKOLKANG": [
            {
              "station": "LYCEE BILINGUE DE MELONG / A",
              "voters": 297
            }
          ],
          "MBOKOLA": [
            {
              "station": "MISSION CATHOLIQUE MBOKOLA / A",
              "voters": 175
            }
          ],
          "MBOMOANGO": [
            {
              "station": "MISSION CATHOLIQUE MBOKOLA / A",
              "voters": 175
            }
          ],
          "NYABANG": [
            {
              "station": "MISSION CATHOLIQUE NYABANG  PLANTATION / A",
              "voters": 234
            }
          ],
          "PLANTATION": [
            {
              "station": "MISSION CATHOLIQUE NYABANG  PLANTATION / A",
              "voters": 128
            }
          ],
          "EKOLBOUNI": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 280
            }
          ],
          "POSTE": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 158
            }
          ],
          "AGRICOLE": [
            {
              "station": "POSTE AGRICOLE / A",
              "voters": 158
            }
          ],
          "MOUANGUEL": [
            {
              "station": "SAR/SM MOUANGUEL / A",
              "voters": 2099
            }
          ],
          "BORIKO": [
            {
              "station": "SAR/SM MOUANGUEL / A",
              "voters": 511
            }
          ],
          "MOUEKOUM": [
            {
              "station": "SAR/SM MOUANGUEL / A",
              "voters": 198
            }
          ]
        },
        "MOMBO": {
          "BOUBOU": [
            {
              "station": "E.P. DE BOUBOU / A",
              "voters": 373
            }
          ],
          "DJOUNGO-RAILS": [
            {
              "station": "E.P. DE DJOUNGO-RAILS / A",
              "voters": 215
            }
          ],
          "DJOUNGO-ROUTE": [
            {
              "station": "E.P. DE DJOUNGO-ROUTE / A",
              "voters": 296
            }
          ],
          "QUARTIER": [
            {
              "station": "E.P. DE MOMBO-GARE / A",
              "voters": 2584
            }
          ],
          "TANGUI": [
            {
              "station": "E.P. DE TANGUI / A",
              "voters": 316
            }
          ],
          "MOUNDECK": [
            {
              "station": "E.P.DE MOUNDECK / A",
              "voters": 172
            }
          ],
          "NKWANGSI": [
            {
              "station": "PLACE PUBLIQUE DE NKWANGSI / A",
              "voters": 242
            }
          ]
        },
        "NJOMBE-PENJA": {
          "MBALMBONG": [
            {
              "station": "CAMPOST PENJA / A",
              "voters": 4750
            }
          ],
          "MBOME": [
            {
              "station": "CASE COMITE MBOME NGWONDANG / A",
              "voters": 76
            }
          ],
          "NGWONDANG": [
            {
              "station": "CASE COMITE MBOME NGWONDANG / A",
              "voters": 76
            }
          ],
          "MBONKOTA": [
            {
              "station": "CASE COMITE MBOME NGWONDANG / A",
              "voters": 76
            }
          ],
          "NGOMBA": [
            {
              "station": "CASE COMITE MBOME NGWONDANG / A",
              "voters": 76
            }
          ],
          "NJOMBE-FAN": [
            {
              "station": "CASE COMITE MBOME NGWONDANG / A",
              "voters": 76
            }
          ],
          "BAYILE": [
            {
              "station": "CASE COMMUNAUTAIRE BONANDAM / A",
              "voters": 144
            }
          ],
          "(NJOMBE)": [
            {
              "station": "CASE COMMUNAUTAIRE BONANDAM / A",
              "voters": 18244
            }
          ],
          "BONADAM": [
            {
              "station": "CASE COMMUNAUTAIRE BONANDAM / A",
              "voters": 144
            }
          ],
          "CHATEAU": [
            {
              "station": "ECOLE BILINGUE FOUTCHOUANG PENJA / A",
              "voters": 2444
            }
          ],
          "D'EAU": [
            {
              "station": "ECOLE BILINGUE FOUTCHOUANG PENJA / A",
              "voters": 2444
            }
          ],
          "CACAOYERS": [
            {
              "station": "ECOLE BILINGUE FOUTCHOUANG PENJA / A",
              "voters": 1222
            }
          ],
          "SOURCE": [
            {
              "station": "ECOLE BILINGUE FOUTCHOUANG PENJA / A",
              "voters": 1222
            }
          ],
          "MOUATABA": [
            {
              "station": "ECOLE CEBEC PENJA / A",
              "voters": 646
            }
          ],
          "NKOLBIANDI": [
            {
              "station": "ECOLE CEBEC PENJA / A",
              "voters": 646
            }
          ],
          "MBWALE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 NJOMBE / A",
              "voters": 1368
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 1 NJOMBE / A",
              "voters": 17884
            }
          ],
          "CACAO": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 2 PENJA / A",
              "voters": 1615
            }
          ],
          "TOWN": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 2 PENJA / A",
              "voters": 1615
            }
          ],
          "1(PENJA)": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 2 PENJA / A",
              "voters": 952
            }
          ],
          "SHELL-": [
            {
              "station": "ECOLE SAINT LUC GROUPE II PENJA / A",
              "voters": 452
            }
          ],
          "SAM": [
            {
              "station": "ECOLE SAINT LUC GROUPE II PENJA / A",
              "voters": 452
            }
          ],
          "PENJA": [
            {
              "station": "ECOLE SAINT LUC GROUPE II PENJA / A",
              "voters": 452
            }
          ],
          "BOUBA": [
            {
              "station": "ECOLE SAINT-PIERRE BOUBA 3 / A",
              "voters": 869
            }
          ],
          "(PENJA)": [
            {
              "station": "ECOLE SAINT-PIERRE BOUBA 3 / A",
              "voters": 11479
            }
          ],
          "MOULINKAM": [
            {
              "station": "FOYER BACHINGOU MOULINKAM NJOMBE / A",
              "voters": 1147
            }
          ],
          "MOUATCHOM": [
            {
              "station": "LYCEE BILINGUE PENJA / A",
              "voters": 364
            }
          ],
          "MPOULA": [
            {
              "station": "LYCEE BILINGUE PENJA / A",
              "voters": 364
            }
          ],
          "SHELL": [
            {
              "station": "SHELL PENJA / A",
              "voters": 1084
            }
          ]
        },
        "NKONGSAMBA I": {
          "MOUANDJA": [
            {
              "station": "CEBEC CENTRE / A",
              "voters": 582
            }
          ],
          "(CEBEC": [
            {
              "station": "CEBEC EKEL / A",
              "voters": 1814
            }
          ],
          "EKEL)": [
            {
              "station": "CEBEC EKEL / A",
              "voters": 1814
            }
          ],
          "MOUANBOH": [
            {
              "station": "CEBEC MOUANBOH / A",
              "voters": 950
            }
          ],
          "NLONKO'O": [
            {
              "station": "CENTRE DE SANTE DE NLONKO'O / A",
              "voters": 1354
            }
          ],
          "(COMMISSARIAT)": [
            {
              "station": "COMMISSARIAT CENTRAL / A",
              "voters": 2237
            }
          ],
          "(COMMUNAUTE": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 1866
            }
          ],
          "URBAINE)": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 1866
            }
          ],
          "MOSQUEE": [
            {
              "station": "ECOLE MATERNELLE BARESSOUMTOU / A",
              "voters": 1399
            }
          ],
          "STADE": [
            {
              "station": "ECOLE ST JEAN BAPTISTE / A",
              "voters": 1374
            }
          ],
          "BADJOKI": [
            {
              "station": "EP DE MBOUL / A",
              "voters": 42
            }
          ],
          "SINGA": [
            {
              "station": "EP DE MBOUL / A",
              "voters": 42
            }
          ],
          "NGALMOA": [
            {
              "station": "EP EKAMBENG / A",
              "voters": 190
            }
          ],
          "ENGUENGUE": [
            {
              "station": "EP ENGUENGUE / A",
              "voters": 85
            }
          ],
          "EDIP": [
            {
              "station": "EP GROUPE II B / A",
              "voters": 1116
            }
          ],
          "BARESSOUMTOU": [
            {
              "station": "EP GROUPE IV / A",
              "voters": 4073
            }
          ],
          "CARRIERE": [
            {
              "station": "EP GROUPE IV / A",
              "voters": 1300
            }
          ],
          "EBOUM": [
            {
              "station": "EP GROUPE IV / A",
              "voters": 9616
            }
          ],
          "(GARAGE": [
            {
              "station": "EP GROUPE IV / A",
              "voters": 1259
            }
          ],
          "ADMINISTRATIF)": [
            {
              "station": "EP GROUPE IV / A",
              "voters": 1259
            }
          ],
          "MBENG": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 4254
            }
          ],
          "(FOYER": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 2782
            }
          ],
          "BALENGOU)": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 912
            }
          ],
          "EKEL": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 7450
            }
          ],
          "KO'O": [
            {
              "station": "FOYER BALENGOU / A",
              "voters": 5407
            }
          ],
          "BANGANGTE)": [
            {
              "station": "FOYER BANGANGTE / A",
              "voters": 262
            }
          ],
          "BANGOUA)": [
            {
              "station": "FOYER BANGOUA / A",
              "voters": 562
            }
          ],
          "BANGOULAP)": [
            {
              "station": "FOYER BANGOULAP / A",
              "voters": 464
            }
          ],
          "BATCHINGOU)": [
            {
              "station": "FOYER BATCHINGOU / A",
              "voters": 252
            }
          ],
          "BAYANGAM)": [
            {
              "station": "FOYER BAYANGAM / A",
              "voters": 215
            }
          ],
          "EBOUMDJA": [
            {
              "station": "FOYER CULTUREL / A",
              "voters": 839
            }
          ],
          "FOTOUNI)": [
            {
              "station": "FOYER FOTOUNI / A",
              "voters": 115
            }
          ],
          "(GARE": [
            {
              "station": "GARE FERROVIAIRE / A",
              "voters": 809
            }
          ],
          "FERROVIAIRE)": [
            {
              "station": "GARE FERROVIAIRE / A",
              "voters": 809
            }
          ],
          "(RASS)": [
            {
              "station": "GARNISON MILITAIRE / A",
              "voters": 549
            }
          ],
          "(GENDARMERIE)": [
            {
              "station": "GENDARMERIE / A",
              "voters": 182
            }
          ],
          "(INSPECTION": [
            {
              "station": "INSPECTION PRIMAIRE / A",
              "voters": 256
            }
          ],
          "PRIMAIRE)": [
            {
              "station": "INSPECTION PRIMAIRE / A",
              "voters": 256
            }
          ],
          "(PRISON": [
            {
              "station": "PRISON PRINCIPALE / A",
              "voters": 247
            }
          ],
          "PRINCIPALE)": [
            {
              "station": "PRISON PRINCIPALE / A",
              "voters": 247
            }
          ],
          "EGNOKI": [
            {
              "station": "USINE KWAYEP / A",
              "voters": 288
            }
          ]
        },
        "NKONGSAMBA III": {
          "EKOL-MBENG": [
            {
              "station": "CCCS / A",
              "voters": 1093
            }
          ],
          "CCCS": [
            {
              "station": "CCCS / A",
              "voters": 1093
            }
          ],
          "BARESSOUMTOU": [
            {
              "station": "COLLEGE MBAMY / A",
              "voters": 5136
            }
          ],
          "AVIATION": [
            {
              "station": "COLLEGE MBAMY / A",
              "voters": 2039
            }
          ],
          "MBAMY)": [
            {
              "station": "COLLEGE MBAMY / A",
              "voters": 1187
            }
          ],
          "RASS": [
            {
              "station": "CPFF / A",
              "voters": 400
            }
          ],
          "MINEPAT": [
            {
              "station": "DELEGATION DU MINEPAT / A",
              "voters": 430
            }
          ],
          "EKOL": [
            {
              "station": "ECOLE MATERNELLE GROUPE I EKOL-MB / A",
              "voters": 1443
            }
          ],
          "MBENG": [
            {
              "station": "ECOLE MATERNELLE GROUPE I EKOL-MB / A",
              "voters": 1443
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE MATERNELLE GROUPE I EKOL-MB / A",
              "voters": 426
            }
          ],
          "MATERNELLE": [
            {
              "station": "ECOLE MATERNELLE GROUPE I EKOL-MB / A",
              "voters": 426
            }
          ],
          "(EP)": [
            {
              "station": "ECOLE PUBLIQUE BARESSOUMT / A",
              "voters": 852
            }
          ],
          "RAILS": [
            {
              "station": "ECOLE PUBLIQUE BARESSOUMT / A",
              "voters": 2081
            }
          ],
          "POOLA": [
            {
              "station": "ECOLE PUBLIQUE BARESSOUMT / A",
              "voters": 1918
            }
          ],
          "AVIA.": [
            {
              "station": "ECOLE PUBLIQUE D'APPLICATION LA  REFERENCE / A",
              "voters": 1016
            }
          ],
          "PMI": [
            {
              "station": "ECOLE PUBLIQUE D'APPLICATION LA  REFERENCE / A",
              "voters": 1016
            }
          ],
          "NLONAKO": [
            {
              "station": "ECOLE PUBLIQUE D'APPLICATION LA  REFERENCE / A",
              "voters": 1016
            }
          ],
          "MBORIKO": [
            {
              "station": "ECOLE PUBLIQUE DE MBORIKO / A",
              "voters": 105
            }
          ],
          "NGWA": [
            {
              "station": "ECOLE PUBLIQUE DE NGWA / A",
              "voters": 291
            }
          ],
          "GARAGE": [
            {
              "station": "GARAGE ADMINISTRATIF / A",
              "voters": 187
            }
          ],
          "ADMIN.": [
            {
              "station": "GARAGE ADMINISTRATIF / A",
              "voters": 187
            }
          ],
          "MBARESSOUMTOU": [
            {
              "station": "LYCEE BILINGUE DE NKONGSAMBA / A",
              "voters": 207
            }
          ],
          "VILLAGE": [
            {
              "station": "LYCEE BILINGUE DE NKONGSAMBA / A",
              "voters": 207
            }
          ]
        },
        "NKONGSAMBA II": {
          "(COLLEGE": [
            {
              "station": "COLLEGE SOCKA MBONGUE / A",
              "voters": 544
            }
          ],
          "SOCKA)": [
            {
              "station": "COLLEGE SOCKA MBONGUE / A",
              "voters": 544
            }
          ],
          "(JEANNE": [
            {
              "station": "COLLEGE ST JEANNE D'ARC / A",
              "voters": 461
            }
          ],
          "D'ARC)": [
            {
              "station": "COLLEGE ST JEANNE D'ARC / A",
              "voters": 461
            }
          ],
          "PALMIER": [
            {
              "station": "ECOLE DE L'UNITE / A",
              "voters": 2311
            }
          ],
          "NGWA": [
            {
              "station": "ECOLE LES DAUPHINS / A",
              "voters": 373
            }
          ],
          "CRTV(ST": [
            {
              "station": "ECOLE MATERNELLE BILINGUE D'EKANGTE /  A",
              "voters": 1830
            }
          ],
          "DENIS)": [
            {
              "station": "ECOLE MATERNELLE BILINGUE D'EKANGTE /  A",
              "voters": 1830
            }
          ],
          "MAT.": [
            {
              "station": "ECOLE MATERNELLE BILINGUE D'EKANGTE /  A",
              "voters": 754
            }
          ],
          "BILINGUE": [
            {
              "station": "ECOLE MATERNELLE BILINGUE D'EKANGTE /  A",
              "voters": 754
            }
          ],
          "EDIAKAP": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 2366
            }
          ],
          "(ST-": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 1166
            }
          ],
          "CHARLES)": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 1166
            }
          ],
          "CEBEC": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 768
            }
          ],
          "(CEBEC": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 768
            }
          ],
          "EDIAKAP)": [
            {
              "station": "ECOLE PROTESTANTE D'EDIAKAP / A",
              "voters": 768
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE D'EKANGTE / A",
              "voters": 171
            }
          ],
          "SOSSO": [
            {
              "station": "ECOLE PUBLIQUE DE SOSSO GROUPE VI / A",
              "voters": 1006
            }
          ],
          "(ECOLE": [
            {
              "station": "ECOLE PUBLIQUE DE SOSSO GROUPE VI / A",
              "voters": 238
            }
          ],
          "PUBLIQUE)": [
            {
              "station": "ECOLE PUBLIQUE DE SOSSO GROUPE VI / A",
              "voters": 238
            }
          ],
          "EDJOGMOA": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 2239
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 1450
            }
          ],
          "PUBLIQUE": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 696
            }
          ],
          "NDOGMOA": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 1584
            }
          ],
          "(MONT,": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 66
            }
          ],
          "VILLAGE)": [
            {
              "station": "ECOLE PUBLIQUE NDOGMOA / A",
              "voters": 66
            }
          ],
          "BONANGOH": [
            {
              "station": "ECOLE ST VICTOR / A",
              "voters": 1547
            }
          ],
          "(GROUPE": [
            {
              "station": "ECOLE ST VICTOR / A",
              "voters": 1547
            }
          ],
          "VI-": [
            {
              "station": "ECOLE ST VICTOR / A",
              "voters": 1547
            }
          ],
          "VICTOR)": [
            {
              "station": "ECOLE ST VICTOR / A",
              "voters": 1547
            }
          ],
          "(ST-KISITO)": [
            {
              "station": "ECOLE ST-KISITO / A",
              "voters": 329
            }
          ],
          "(ST-MARTIN)": [
            {
              "station": "ECOLE ST-MARTIN / A",
              "voters": 728
            }
          ],
          "(FOYER": [
            {
              "station": "FOYER BANSOA / A",
              "voters": 432
            }
          ],
          "BANSOA)": [
            {
              "station": "FOYER BANSOA / A",
              "voters": 864
            }
          ],
          "EDJOGMOA(": [
            {
              "station": "FOYER BANSOA / A",
              "voters": 432
            }
          ],
          "FOYER": [
            {
              "station": "FOYER BANSOA / A",
              "voters": 432
            }
          ],
          "PALMIERS": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE ALPHA / A",
              "voters": 110
            }
          ],
          "(CLINIQUE": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE ALPHA / A",
              "voters": 110
            }
          ],
          "ANANFAH)": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE ALPHA / A",
              "voters": 110
            }
          ],
          "EHALMOA": [
            {
              "station": "JARDIN D'ENFANTS EHALMOA / A",
              "voters": 1011
            }
          ],
          "(ST": [
            {
              "station": "JARDIN D'ENFANTS EHALMOA / A",
              "voters": 554
            }
          ],
          "VICTOR,GROUPE": [
            {
              "station": "JARDIN D'ENFANTS EHALMOA / A",
              "voters": 554
            }
          ],
          "VI)": [
            {
              "station": "JARDIN D'ENFANTS EHALMOA / A",
              "voters": 554
            }
          ],
          "EKANGTE": [
            {
              "station": "LYCEE DU MANENGOUBA / A",
              "voters": 6920
            }
          ],
          "MBENG": [
            {
              "station": "LYCEE DU MANENGOUBA / A",
              "voters": 4389
            }
          ],
          "(LYCEE": [
            {
              "station": "LYCEE DU MANENGOUBA / A",
              "voters": 2201
            }
          ],
          "MANENGOUBA)": [
            {
              "station": "LYCEE DU MANENGOUBA / A",
              "voters": 1421
            }
          ],
          "TECHNIQUE)": [
            {
              "station": "LYCEE TECHNIQUE DE NKONGSAMBA / A",
              "voters": 323
            }
          ],
          "TECHNIQUE": [
            {
              "station": "LYCEE TECHNIQUE II / A",
              "voters": 457
            }
          ],
          "II)": [
            {
              "station": "LYCEE TECHNIQUE II / A",
              "voters": 457
            }
          ],
          "(ROI": [
            {
              "station": "PAROISSE ROI DAVID / A",
              "voters": 999
            }
          ],
          "DAVID)": [
            {
              "station": "PAROISSE ROI DAVID / A",
              "voters": 999
            }
          ]
        }
      },
      "SANAGA-MARITIME": {
        "DIBAMBA": {
          "NKOM,BIENKOK": [
            {
              "station": "CHEFFERIE DE NKOM / A",
              "voters": 135
            }
          ],
          "SIKOUM": [
            {
              "station": "E. MAT. DE SIKOUM / A",
              "voters": 1366
            }
          ],
          "BONEPOUPA": [
            {
              "station": "ECOLE PUBLIQUE DE BONEPOUPA / A",
              "voters": 98
            }
          ],
          "KENDECK": [
            {
              "station": "ECOLE PUBLIQUE DE KENDECK / A",
              "voters": 243
            }
          ],
          "KOPONGO": [
            {
              "station": "ECOLE PUBLIQUE DE KOPONGO / A",
              "voters": 377
            }
          ],
          "LOGBADJECK": [
            {
              "station": "ECOLE PUBLIQUE DE KOPONGO / A",
              "voters": 1833
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE KOPONGO / A",
              "voters": 1353
            }
          ],
          "LOUNGAHE": [
            {
              "station": "ECOLE PUBLIQUE DE LOUNGAHE / A",
              "voters": 387
            }
          ],
          "GARE": [
            {
              "station": "ECOLE PUBLIQUE DE LOUNGAHE / A",
              "voters": 867
            }
          ],
          "MISSOLE": [
            {
              "station": "ECOLE PUBLIQUE DE MISSOLE I / A",
              "voters": 3875
            }
          ],
          "BARRIERE": [
            {
              "station": "ECOLE PUBLIQUE DE MISSOLE II BARRIERE /  A",
              "voters": 172
            }
          ],
          "PITTI-GARE": [
            {
              "station": "ECOLE PUBLIQUE DE PITTI-GARE / A",
              "voters": 372
            }
          ],
          "SOMAKEK,POUT-NJOUMA": [
            {
              "station": "ECOLE PUBLIQUE DE SOMAKEK / A",
              "voters": 226
            }
          ],
          "PITTI-NKONDJOCK": [
            {
              "station": "EGLISE CATHOLIQUE DE PITTI-NKONDJOCK /  A",
              "voters": 198
            }
          ],
          "BESSOMBE": [
            {
              "station": "MAISON COMMUNAUTAIRE DE BESSOMBE / A",
              "voters": 489
            }
          ]
        },
        "DIZANGUE": {
          "KOUNGUE": [
            {
              "station": "CASE COM. KOUNGUE LAC OSSA / A",
              "voters": 188
            }
          ],
          "LAC": [
            {
              "station": "CASE COM. KOUNGUE LAC OSSA / A",
              "voters": 51
            }
          ],
          "OSSA": [
            {
              "station": "CASE COM. KOUNGUE LAC OSSA / A",
              "voters": 51
            }
          ],
          "DIKOLA": [
            {
              "station": "CASE COMMUNAURAIRE DE DIKOLA / A",
              "voters": 74
            }
          ],
          "MBIMBE": [
            {
              "station": "CASE COMMUNAUTAIRE DE MBIMBE / A",
              "voters": 111
            }
          ],
          "PONGO-": [
            {
              "station": "CASE COMMUNAUTAIRE DE PONGO-PITTI / A",
              "voters": 73
            }
          ],
          "PITTI": [
            {
              "station": "CASE COMMUNAUTAIRE DE PONGO-PITTI / A",
              "voters": 73
            }
          ],
          "CAMP": [
            {
              "station": "CES DE MBIMBE / A",
              "voters": 120
            }
          ],
          "CADRES": [
            {
              "station": "CES DE MBIMBE / A",
              "voters": 120
            }
          ],
          "III": [
            {
              "station": "COLLEGE SAINT GERARD / A",
              "voters": 736
            }
          ],
          "KM7": [
            {
              "station": "E.P. DE KM7 / A",
              "voters": 131
            }
          ],
          "BEACH-QUARTIER": [
            {
              "station": "ECOLE MATERNELLE DE BEACH / A",
              "voters": 804
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "ECOLE MATERNELLE DE BEACH / A",
              "voters": 804
            }
          ],
          "COMPAGNIE": [
            {
              "station": "ECOLE PUBLIQUE COMPAGNIE DOUALA / A",
              "voters": 387
            }
          ],
          "DOUALA": [
            {
              "station": "ECOLE PUBLIQUE COMPAGNIE DOUALA / A",
              "voters": 286
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE PUBLIQUE D'ETIKA / A",
              "voters": 543
            }
          ],
          "4/4": [
            {
              "station": "ECOLE PUBLIQUE DE 4/4 / A",
              "voters": 429
            }
          ],
          "BEACH-CAMP": [
            {
              "station": "ECOLE PUBLIQUE DE BEACH / A",
              "voters": 1083
            }
          ],
          "DES": [
            {
              "station": "ECOLE PUBLIQUE DE BEACH / A",
              "voters": 1083
            }
          ],
          "RETRAITES": [
            {
              "station": "ECOLE PUBLIQUE DE BEACH / A",
              "voters": 1083
            }
          ],
          "BEACH-NJANGA": [
            {
              "station": "ECOLE PUBLIQUE DE BEACH / A",
              "voters": 765
            }
          ],
          "SAFACAM": [
            {
              "station": "ECOLE PUBLIQUE DE KM 11 / A",
              "voters": 3913
            }
          ],
          "SOMSE": [
            {
              "station": "ECOLE PUBLIQUE DE KOUNGUE / A",
              "voters": 137
            }
          ],
          "MBALMAYO": [
            {
              "station": "ECOLE PUBLIQUE DE MBALMAYO / A",
              "voters": 601
            }
          ],
          "MBANDA": [
            {
              "station": "ECOLE PUBLIQUE DE MBANDA / A",
              "voters": 123
            }
          ],
          "SONGMBENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE SONGMBENGUE / A",
              "voters": 223
            }
          ],
          "SONGUELAND": [
            {
              "station": "ECOLE PUBLIQUE DE SONGUELAND / A",
              "voters": 149
            }
          ],
          "CEREPAH-PITTI-DIBAMBA": [
            {
              "station": "ECOLE PUBLIQUE DU CEREPAH / A",
              "voters": 150
            }
          ],
          "PITTI-DIBAMBA": [
            {
              "station": "ECOLE PUBLIQUE DU CEREPAH / A",
              "voters": 706
            }
          ],
          "MBAMBOU": [
            {
              "station": "FOYER DES CADRES DE MBAMBOU V1 / A",
              "voters": 2361
            }
          ],
          "VILLAGE": [
            {
              "station": "FOYER DES CADRES DE MBAMBOU V1 / A",
              "voters": 4002
            }
          ],
          "USINE": [
            {
              "station": "FOYER DU CAMP MBAMBOU V5 / A",
              "voters": 591
            }
          ],
          "G14": [
            {
              "station": "FOYER MBAMBOU G14 / A",
              "voters": 239
            }
          ],
          "MBONGO": [
            {
              "station": "HANGAR DIRECTION DE L'UNITE / A",
              "voters": 4389
            }
          ],
          "SOCAPALM": [
            {
              "station": "HANGAR DIRECTION DE L'UNITE / A",
              "voters": 3177
            }
          ],
          "BIKOUM": [
            {
              "station": "HANGAR DU MARCHE DE BIKOUM / A",
              "voters": 294
            }
          ],
          "LINDEMA": [
            {
              "station": "HANGAR DU MARCHE DE MEVIA / A",
              "voters": 206
            }
          ],
          "MEVIA": [
            {
              "station": "HANGAR DU MARCHE DE MEVIA / A",
              "voters": 206
            }
          ],
          "DOUALA-MOUKOLO": [
            {
              "station": "HANGAR DU SERVICE-36 / A",
              "voters": 101
            }
          ],
          "HOLLAND": [
            {
              "station": "LYCEE DE DIZANGUE / A",
              "voters": 624
            }
          ]
        },
        "EDEA I": {
          "BATOMBE": [
            {
              "station": "CENTRE SANTE DEV. DE BATOMBE / A",
              "voters": 282
            }
          ],
          "NDOKOHI": [
            {
              "station": "CES DE NDOKOHI / A",
              "voters": 114
            }
          ],
          "NLON": [
            {
              "station": "CHAPELLE MISSION CATH. DE NLON A MIOH /  A",
              "voters": 245
            }
          ],
          "MIOH": [
            {
              "station": "CHAPELLE MISSION CATH. DE NLON A MIOH /  A",
              "voters": 245
            }
          ],
          "CITE": [
            {
              "station": "CLUB CITE FROMAGER / A",
              "voters": 246
            }
          ],
          "FROMAGER": [
            {
              "station": "CLUB CITE FROMAGER / A",
              "voters": 246
            }
          ],
          "FERME-SUISSE": [
            {
              "station": "CLUB FERME SUISSE V2 / A",
              "voters": 4509
            }
          ],
          "FERME": [
            {
              "station": "CLUB FERME SUISSE V4 / A",
              "voters": 162
            }
          ],
          "SUISSE": [
            {
              "station": "CLUB FERME SUISSE V4 / A",
              "voters": 162
            }
          ],
          "CENTRE": [
            {
              "station": "COMMUNE D'EDEA 1ER / A",
              "voters": 2783
            }
          ],
          "COMMERCIAL": [
            {
              "station": "COMMUNE D'EDEA 1ER / A",
              "voters": 1391
            }
          ],
          "SOCAPALM": [
            {
              "station": "CROIX ROUGE SOCAPALM / A",
              "voters": 284
            }
          ],
          "ZANGA": [
            {
              "station": "DELEGATION AFFAIRES SOCIALES / A",
              "voters": 347
            }
          ],
          "NKOLMELEN": [
            {
              "station": "DELEGATION AFFAIRES SOCIALES / A",
              "voters": 347
            }
          ],
          "DEHANE": [
            {
              "station": "E.P. DE DEHANE / A",
              "voters": 234
            }
          ],
          "GARE": [
            {
              "station": "ECOLE DES SOURDS MUETS DE LA GARE / A",
              "voters": 1022
            }
          ],
          "MBOUE": [
            {
              "station": "ECOLE E.P.C. DE MBOUE / A",
              "voters": 773
            }
          ],
          "EVECHE,": [
            {
              "station": "ECOLE PUBLIQUE (PILOTE) D'APPLICATION /  A",
              "voters": 824
            }
          ],
          "ELOGBELE-AVIATION": [
            {
              "station": "ECOLE PUBLIQUE (PILOTE) D'APPLICATION /  A",
              "voters": 824
            }
          ],
          "METEO": [
            {
              "station": "ECOLE PUBLIQUE (PILOTE) D'APPLICATION /  A",
              "voters": 1313
            }
          ],
          "BISSEKE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE / A",
              "voters": 2142
            }
          ],
          "APPOUH-EBOKA": [
            {
              "station": "ECOLE PUBLIQUE D'APPOUH / A",
              "voters": 89
            }
          ],
          "ELOGBELE": [
            {
              "station": "ECOLE PUBLIQUE D'ELOGBELE / A",
              "voters": 801
            }
          ],
          "ELOGKAM": [
            {
              "station": "ECOLE PUBLIQUE D'ELOGKAM / A",
              "voters": 133
            }
          ],
          "OKOTH": [
            {
              "station": "ECOLE PUBLIQUE D'OKOTH / A",
              "voters": 262
            }
          ],
          "BEON": [
            {
              "station": "ECOLE PUBLIQUE D'OSSOMBAH / A",
              "voters": 2221
            }
          ],
          "OSSOMBAH": [
            {
              "station": "ECOLE PUBLIQUE D'OSSOMBAH / A",
              "voters": 977
            }
          ],
          "KOUKOUE": [
            {
              "station": "ECOLE PUBLIQUE DE KOUKOUE / A",
              "voters": 315
            }
          ],
          "DOMAINE": [
            {
              "station": "ECOLE PUBLIQUE DE LA GARE / A",
              "voters": 2399
            }
          ],
          "SANAGA": [
            {
              "station": "ECOLE PUBLIQUE DE LA GARE / A",
              "voters": 1007
            }
          ],
          "LOM-EDEA": [
            {
              "station": "ECOLE PUBLIQUE DE LOM-EDEA / A",
              "voters": 226
            }
          ],
          "MBENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MBENGUE / A",
              "voters": 126
            }
          ],
          "NDOGBIANG": [
            {
              "station": "ECOLE PUBLIQUE DE NDOGBIANG / A",
              "voters": 60
            }
          ],
          "NDOGTIMA": [
            {
              "station": "ECOLE PUBLIQUE DE NDOGTIMA CRIQUE / A",
              "voters": 146
            }
          ],
          "CRIQUE": [
            {
              "station": "ECOLE PUBLIQUE DE NDOGTIMA CRIQUE / A",
              "voters": 91
            }
          ],
          "NYONG": [
            {
              "station": "ECOLE PUBLIQUE DE NDOGTIMA NYONG / A",
              "voters": 55
            }
          ],
          "NKAKANZOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NKAKANZOCK / A",
              "voters": 300
            }
          ],
          "ONGUE": [
            {
              "station": "ECOLE PUBLIQUE DE ONGUE / A",
              "voters": 230
            }
          ],
          "PALMIER": [
            {
              "station": "ECOLE PUBLIQUE DE ST PALMIER / A",
              "voters": 1002
            }
          ],
          "YAWANDA": [
            {
              "station": "ECOLE PUBLIQUE DE YAWANDA / A",
              "voters": 93
            }
          ],
          "BONAMINKENGUE": [
            {
              "station": "ECOLE PUBLIQUE PLATEAU  BONAMINKENGUE / A",
              "voters": 937
            }
          ],
          "SONGMINKOUGOU": [
            {
              "station": "ECOLE PUBLIQUE SONGMINKOUGOU / A",
              "voters": 642
            }
          ],
          "EON": [
            {
              "station": "ESPL. CHEF. EON EDING / A",
              "voters": 47
            }
          ],
          "EDING": [
            {
              "station": "ESPL. CHEF. EON EDING / A",
              "voters": 47
            }
          ],
          "ABBE": [
            {
              "station": "ESPL. CHEFFERIE - ABBE YASSOUKOU / A",
              "voters": 66
            }
          ],
          "ONGANDE": [
            {
              "station": "ESPL. CHEFFERIE D'ONGANDE / A",
              "voters": 45
            }
          ],
          "NKONGMONDO": [
            {
              "station": "ESPL.CHEFFERIE DE NKONGMONDO / A",
              "voters": 698
            }
          ],
          "NZOCKNKONG": [
            {
              "station": "ESPL.CHEFFERIE DE NZOCKNKONG / A",
              "voters": 96
            }
          ],
          "METOUNGA": [
            {
              "station": "ESPL.CHEFFERIE METOUNGA / A",
              "voters": 84
            }
          ],
          "MBONDADICK": [
            {
              "station": "FONDATION PIERRE ET PAUL / A",
              "voters": 680
            }
          ],
          "QUARTIER": [
            {
              "station": "FOYER QUARTIER HAOUSSA / A",
              "voters": 1538
            }
          ],
          "HAOUSSA": [
            {
              "station": "FOYER QUARTIER HAOUSSA / A",
              "voters": 1538
            }
          ],
          "APPOUH-LYCEE": [
            {
              "station": "LYCEE BILINGUE D'APPOUH / A",
              "voters": 111
            }
          ],
          "PLATEAU": [
            {
              "station": "LYCEE BILINGUE D'EDEA / A",
              "voters": 691
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "LYCEE BILINGUE D'EDEA / A",
              "voters": 691
            }
          ],
          "MBANDA": [
            {
              "station": "MBANDA CAMP SIC / A",
              "voters": 5410
            }
          ],
          "NTOUMBA": [
            {
              "station": "NTOUMBA HANGAR CARREFOUR / A",
              "voters": 335
            }
          ],
          "PONGO": [
            {
              "station": "SAR-SM DE PONGO / A",
              "voters": 3593
            }
          ],
          "AMOUR": [
            {
              "station": "STADE MUNICIPAL / A",
              "voters": 1771
            }
          ]
        },
        "EDEA II": {
          "CITE": [
            {
              "station": "CLUB CITE BILALANG / A",
              "voters": 3112
            }
          ],
          "CADRES": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 2305
            }
          ],
          "ANCIEN": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 2305
            }
          ],
          "CELLUCAM": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 2420
            }
          ],
          "EKITE": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 6152
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 2696
            }
          ],
          "PILOTE": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 2696
            }
          ],
          "MALIMBA": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 4910
            }
          ],
          "URBAIN": [
            {
              "station": "ECOLE MATERNELLE CITE CADRES / A",
              "voters": 3615
            }
          ],
          "DIPITA": [
            {
              "station": "ECOLE PRIVEE UEBC DE DIPITA / A",
              "voters": 1373
            }
          ],
          "POUTLOLOMA": [
            {
              "station": "ECOLE PUB. POUTLOLOMA LOUNGAHE / A",
              "voters": 304
            }
          ],
          "LOUNGAHE": [
            {
              "station": "ECOLE PUB. POUTLOLOMA LOUNGAHE / A",
              "voters": 144
            }
          ],
          "NDOGBIANGA": [
            {
              "station": "ECOLE PUB. POUTLOLOMA NDOGBIANGA / A",
              "voters": 160
            }
          ],
          "FARM": [
            {
              "station": "ECOLE PUBLIQUE D' EKITE 3 / A",
              "voters": 767
            }
          ],
          "DIKOUS": [
            {
              "station": "ECOLE PUBLIQUE DE DIKOUS / A",
              "voters": 90
            }
          ],
          "DISSAT": [
            {
              "station": "ECOLE PUBLIQUE DE DISSAT / A",
              "voters": 103
            }
          ],
          "NEW": [
            {
              "station": "ECOLE PUBLIQUE DE MALIMBA II / A",
              "voters": 254
            }
          ],
          "MALO": [
            {
              "station": "ECOLE PUBLIQUE DE MALO / A",
              "voters": 64
            }
          ],
          "MASSEING": [
            {
              "station": "ECOLE PUBLIQUE DE MASSEING / A",
              "voters": 25
            }
          ],
          "NGONGA": [
            {
              "station": "ECOLE PUBLIQUE DE NGONGA / A",
              "voters": 229
            }
          ],
          "POKO": [
            {
              "station": "ECOLE PUBLIQUE DE NGONGA / A",
              "voters": 229
            }
          ],
          "GARE": [
            {
              "station": "ECOLE PUBLIQUE MALIMBA - GARE / A",
              "voters": 274
            }
          ],
          "BILALANG": [
            {
              "station": "EGLISE LUTHERIENNE BILALANG PONT / A",
              "voters": 1226
            }
          ],
          "PONT": [
            {
              "station": "EGLISE LUTHERIENNE BILALANG PONT / A",
              "voters": 599
            }
          ],
          "NDJONG": [
            {
              "station": "EGLISE PRESBY. CAM NDJONG / A",
              "voters": 39
            }
          ],
          "DES": [
            {
              "station": "MAISON D'ACCUEIL CITE MANGUIERS / A",
              "voters": 180
            }
          ],
          "MANGUIERS": [
            {
              "station": "MAISON D'ACCUEIL CITE MANGUIERS / A",
              "voters": 180
            }
          ],
          "MONGOMBE": [
            {
              "station": "REFECTOIRE L'ANCIENNE USINE CEL. / A",
              "voters": 115
            }
          ]
        },
        "MASSOK-SONGLOULOU": {
          "ONNA": [
            {
              "station": "CHAPELLE D'ONNA / A",
              "voters": 54
            }
          ],
          "BIOUMOUL": [
            {
              "station": "CHAPELLE DE BIOUMOUL / A",
              "voters": 45
            }
          ],
          "NTAMBE": [
            {
              "station": "CHAPELLE DE BIOUMOUL / A",
              "voters": 45
            }
          ],
          "DISSEMA": [
            {
              "station": "CHAPELLE DE DISSEMA / A",
              "voters": 61
            }
          ],
          "MANDJAP": [
            {
              "station": "CHAPELLE DE DISSEMA / A",
              "voters": 147
            }
          ],
          "TAI": [
            {
              "station": "CHAPELLE DE DISSEMA / A",
              "voters": 61
            }
          ],
          "LOG": [
            {
              "station": "CHAPELLE DE LOG PAGAL / A",
              "voters": 22
            }
          ],
          "PAGAL": [
            {
              "station": "CHAPELLE DE LOG PAGAL / A",
              "voters": 22
            }
          ],
          "MAMBONDO": [
            {
              "station": "CHAPELLE DE MAMBONDO / A",
              "voters": 50
            }
          ],
          "NDJOCK": [
            {
              "station": "CHAPELLE DE NDJOCK NKONG / A",
              "voters": 51
            }
          ],
          "NKONG": [
            {
              "station": "CHAPELLE DE NDJOCK NKONG / A",
              "voters": 51
            }
          ],
          "NGONG": [
            {
              "station": "CHAPELLE DE NGOND MBAK / A",
              "voters": 30
            }
          ],
          "MBAK": [
            {
              "station": "CHAPELLE DE NGOND MBAK / A",
              "voters": 30
            }
          ],
          "NSANGA": [
            {
              "station": "CHAPELLE DE NSANGA ET MBOULE / A",
              "voters": 26
            }
          ],
          "MBOULE": [
            {
              "station": "CHAPELLE DE NSANGA ET MBOULE / A",
              "voters": 26
            }
          ],
          "SEPPE": [
            {
              "station": "CHAPELLE DE SONG NKAM / A",
              "voters": 69
            }
          ],
          "NKAM": [
            {
              "station": "CHAPELLE DE SONG NKAM / A",
              "voters": 69
            }
          ],
          "TEKIBO'O": [
            {
              "station": "CHAPELLE EPC DE TEKIBO'O / A",
              "voters": 46
            }
          ],
          "SONGLOULOU": [
            {
              "station": "CLUB AES-SONEL DE SONGLOULOU / A",
              "voters": 168
            }
          ],
          "IBOMPOI": [
            {
              "station": "DISPENSAIRE DE SAHA / A",
              "voters": 84
            }
          ],
          "MBEMBENDJOCK": [
            {
              "station": "DISPENSAIRE DE SAHA / A",
              "voters": 84
            }
          ],
          "NINGA": [
            {
              "station": "DISPENSAIRE DE SAHA / A",
              "voters": 84
            }
          ],
          "SOCKE": [
            {
              "station": "DISPENSAIRE DE SAHA / A",
              "voters": 84
            }
          ],
          "IAAKOK": [
            {
              "station": "ECOLE PUBLIQUE D'IAAKOK / A",
              "voters": 49
            }
          ],
          "IBOM": [
            {
              "station": "ECOLE PUBLIQUE D'IAAKOK / A",
              "voters": 49
            }
          ],
          "IBAIKAK": [
            {
              "station": "ECOLE PUBLIQUE D'IBAIKAK / A",
              "voters": 93
            }
          ],
          "ISSONDJE": [
            {
              "station": "ECOLE PUBLIQUE D'ISSONDJE II / A",
              "voters": 216
            }
          ],
          "BAHANGA": [
            {
              "station": "ECOLE PUBLIQUE DE BAHANGA / A",
              "voters": 19
            }
          ],
          "AUTOCHTONES": [
            {
              "station": "ECOLE PUBLIQUE DE DOUKOKOL / A",
              "voters": 131
            }
          ],
          "KAHN": [
            {
              "station": "ECOLE PUBLIQUE DE KAHN / A",
              "voters": 166
            }
          ],
          "MAHOHI": [
            {
              "station": "ECOLE PUBLIQUE DE MAHOHI II / A",
              "voters": 36
            }
          ],
          "MASSOK": [
            {
              "station": "ECOLE PUBLIQUE DE MASSOK / A",
              "voters": 415
            }
          ],
          "MBANDA": [
            {
              "station": "ECOLE PUBLIQUE DE MBANDA / A",
              "voters": 103
            }
          ],
          "NDEDE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOG MBOG / A",
              "voters": 86
            }
          ],
          "NGOG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOG MBOG / A",
              "voters": 86
            }
          ],
          "MBOG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOG MBOG / A",
              "voters": 86
            }
          ],
          "SONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGOG MBOG / A",
              "voters": 155
            }
          ],
          "NGUIBASSAL": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 65
            }
          ],
          "NKAKA": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIBASSAL / A",
              "voters": 65
            }
          ],
          "BOT": [
            {
              "station": "ECOLE PUBLIQUE DE NKOM / A",
              "voters": 143
            }
          ],
          "MBAI": [
            {
              "station": "ECOLE PUBLIQUE DE NKOM / A",
              "voters": 143
            }
          ],
          "ITAYAP": [
            {
              "station": "ECOLE PUBLIQUE DE NKOM / A",
              "voters": 143
            }
          ],
          "NKOM": [
            {
              "station": "ECOLE PUBLIQUE DE NKOM / A",
              "voters": 143
            }
          ],
          "NSINGMANDENG": [
            {
              "station": "ECOLE PUBLIQUE DE NSINGMANDENG / A",
              "voters": 35
            }
          ],
          "PANDANG": [
            {
              "station": "ECOLE PUBLIQUE DE PANDANG / A",
              "voters": 54
            }
          ],
          "PENDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE PENDJOCK / A",
              "voters": 161
            }
          ],
          "SONGKOLLO": [
            {
              "station": "ECOLE PUBLIQUE DE SONGKOLLO / A",
              "voters": 39
            }
          ],
          "DIKAMACK": [
            {
              "station": "ECOLE PUBLIQUE DE SONGNDJEM / A",
              "voters": 90
            }
          ],
          "MAKOKI": [
            {
              "station": "ECOLE PUBLIQUE DE SONGNDJEM / A",
              "voters": 90
            }
          ],
          "SONGNDJEM": [
            {
              "station": "ECOLE PUBLIQUE DE SONGNDJEM / A",
              "voters": 90
            }
          ],
          "SONGUEN": [
            {
              "station": "ECOLE PUBLIQUE DE SONGUEN / A",
              "voters": 52
            }
          ],
          "MBANDI": [
            {
              "station": "ECOLE PUBLIQUE DE TOMEL / A",
              "voters": 270
            }
          ],
          "TOMEL": [
            {
              "station": "ECOLE PUBLIQUE DE TOMEL / A",
              "voters": 270
            }
          ],
          "DIMBENGUI": [
            {
              "station": "EPC DE DIMBENGUI / A",
              "voters": 54
            }
          ],
          "KANGA": [
            {
              "station": "FEMEC DE KANGA / A",
              "voters": 137
            }
          ],
          "SONGMBENGUE": [
            {
              "station": "LYCEE DE SONGMBENGUE / A",
              "voters": 892
            }
          ]
        },
        "MOUANKO": {
          "NDOGMONGO": [
            {
              "station": "CHAPELLE ASSEMBLEE DIEU NDOGMONGO /  A",
              "voters": 210
            }
          ],
          "BOSSAMBO-FARM": [
            {
              "station": "CHAPELLE EEC BOSSAMBO-FARM / A",
              "voters": 73
            }
          ],
          "YAVI": [
            {
              "station": "CHAPELLE EEC DE YAVI / A",
              "voters": 104
            }
          ],
          "VILLAGE": [
            {
              "station": "CHAPELLE EEC MOUANKO VILLAGE / A",
              "voters": 145
            }
          ],
          "ELOG-NGANGO": [
            {
              "station": "ECOLE CATHOLIQUE MARIEMBERG / A",
              "voters": 62
            }
          ],
          "MARIEMBERG": [
            {
              "station": "ECOLE CATHOLIQUE MARIEMBERG / A",
              "voters": 62
            }
          ],
          "LOBETHAL": [
            {
              "station": "ECOLE EEC LOBETHAL / A",
              "voters": 263
            }
          ],
          "OLOMBE": [
            {
              "station": "ECOLE PUBLIQUE D'OLOMBE / A",
              "voters": 138
            }
          ],
          "BOLONDO": [
            {
              "station": "ECOLE PUBLIQUE DE BOLONDO / A",
              "voters": 55
            }
          ],
          "BADANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE BOLOY / A",
              "voters": 197
            }
          ],
          "BOHENGUE": [
            {
              "station": "ECOLE PUBLIQUE DE BOLOY / A",
              "voters": 197
            }
          ],
          "BOLOY": [
            {
              "station": "ECOLE PUBLIQUE DE BOLOY / A",
              "voters": 197
            }
          ],
          "BONGO": [
            {
              "station": "ECOLE PUBLIQUE DE BOLOY / A",
              "voters": 197
            }
          ],
          "MOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE BOLOY / A",
              "voters": 197
            }
          ],
          "DIBONGO": [
            {
              "station": "ECOLE PUBLIQUE DIBONGO / A",
              "voters": 147
            }
          ],
          "COCONETH": [
            {
              "station": "ECOLE PUBLIQUE MBIAKO / A",
              "voters": 192
            }
          ],
          "MBIAKO": [
            {
              "station": "ECOLE PUBLIQUE MBIAKO / A",
              "voters": 192
            }
          ],
          "MOUANKO": [
            {
              "station": "ECOLE PUBLIQUE MOUANKO CENTRE / A",
              "voters": 350
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE MOUANKO CENTRE / A",
              "voters": 205
            }
          ],
          "BOLOUNGA": [
            {
              "station": "ECOLE PUBLIQUE MOULONGO / A",
              "voters": 379
            }
          ],
          "BONABOIBA": [
            {
              "station": "ECOLE PUBLIQUE MOULONGO / A",
              "voters": 379
            }
          ],
          "MOULONGO": [
            {
              "station": "ECOLE PUBLIQUE MOULONGO / A",
              "voters": 379
            }
          ],
          "NSEPPE": [
            {
              "station": "ECOLE PUBLIQUE NSEPPE / A",
              "voters": 90
            }
          ],
          "PONGO": [
            {
              "station": "ECOLE PUBLIQUE PONGO SONGO / A",
              "voters": 230
            }
          ],
          "SONGO": [
            {
              "station": "ECOLE PUBLIQUE PONGO SONGO / A",
              "voters": 230
            }
          ],
          "TISSONGO": [
            {
              "station": "ECOLE PUBLIQUE PONGO SONGO / A",
              "voters": 145
            }
          ],
          "YATOU": [
            {
              "station": "ECOLE PUBLIQUE YATOU / A",
              "voters": 70
            }
          ],
          "YOYO": [
            {
              "station": "ECOLE PUBLIQUE YOYO 1 / A",
              "voters": 333
            }
          ],
          "YAKONZOG": [
            {
              "station": "ESPLANADE CHEFFERIE YAKONZOG / A",
              "voters": 30
            }
          ],
          "KOMBO": [
            {
              "station": "FOYER DIPITA YOUME I / A",
              "voters": 78
            }
          ],
          "MOUKALA": [
            {
              "station": "FOYER DIPITA YOUME I / A",
              "voters": 78
            }
          ],
          "YOUME": [
            {
              "station": "FOYER DIPITA YOUME I / A",
              "voters": 136
            }
          ],
          "BEDALE": [
            {
              "station": "FOYER MBANGA / A",
              "voters": 120
            }
          ],
          "ELOG": [
            {
              "station": "FOYER MBANGA / A",
              "voters": 120
            }
          ],
          "NDIGLE": [
            {
              "station": "FOYER MBANGA / A",
              "voters": 120
            }
          ],
          "ELOGNZOGWOUTH": [
            {
              "station": "FOYER MBANGA / A",
              "voters": 120
            }
          ],
          "YADIBO": [
            {
              "station": "FOYER MBANGA / A",
              "voters": 120
            }
          ],
          "MBANGA": [
            {
              "station": "FOYER NKOKE / A",
              "voters": 64
            }
          ],
          "OKOKONG": [
            {
              "station": "FOYER NKOKE / A",
              "voters": 64
            }
          ],
          "BAKAKA": [
            {
              "station": "HUILERIE MOUTAPAM / A",
              "voters": 378
            }
          ],
          "PLANTATION": [
            {
              "station": "HUILERIE MOUTAPAM / A",
              "voters": 189
            }
          ],
          "ROUTE": [
            {
              "station": "HUILERIE MOUTAPAM / A",
              "voters": 189
            }
          ],
          "ABEE": [
            {
              "station": "LYCEE BILINGUE DE MOUANKO / A",
              "voters": 359
            }
          ],
          "BEMENGUE": [
            {
              "station": "LYCEE BILINGUE DE MOUANKO / A",
              "voters": 359
            }
          ],
          "EPOLLO": [
            {
              "station": "LYCEE BILINGUE DE MOUANKO / A",
              "voters": 359
            }
          ],
          "NDIE": [
            {
              "station": "LYCEE BILINGUE DE MOUANKO / A",
              "voters": 359
            }
          ],
          "NKAGANZOG": [
            {
              "station": "LYCEE TECHNIQUE DE MOUANKO / A",
              "voters": 290
            }
          ]
        },
        "NDOM": {
          "MAKOM": [
            {
              "station": "CENTRE DE SANTE DE MAKOM / A",
              "voters": 143
            }
          ],
          "EPAKO": [
            {
              "station": "CHAPELLE E.P.C. DE EPAKO / A",
              "voters": 92
            }
          ],
          "BODBAMBAI,": [
            {
              "station": "CHAPELLE E.P.C. DE IBONG / A",
              "voters": 147
            }
          ],
          "EKOUN,": [
            {
              "station": "CHAPELLE E.P.C. DE IBONG / A",
              "voters": 147
            }
          ],
          "NGUIKOK,": [
            {
              "station": "CHAPELLE E.P.C. DE IBONG / A",
              "voters": 147
            }
          ],
          "NGUIN": [
            {
              "station": "CHAPELLE E.P.C. DE IBONG / A",
              "voters": 147
            }
          ],
          "IKOLLONG": [
            {
              "station": "CHAPELLE E.P.C. DE IKOLLONG / A",
              "voters": 195
            }
          ],
          "NDOM": [
            {
              "station": "CHAPELLE E.P.C. DE IKOLLONG / A",
              "voters": 909
            }
          ],
          "CENTRE": [
            {
              "station": "CHAPELLE E.P.C. DE IKOLLONG / A",
              "voters": 714
            }
          ],
          "KAKAK": [
            {
              "station": "CHAPELLE E.P.C. DE KAKAK / A",
              "voters": 80
            }
          ],
          "LELO": [
            {
              "station": "CHAPELLE E.P.C. DE LELO / A",
              "voters": 75
            }
          ],
          "LOG": [
            {
              "station": "CHAPELLE E.P.C. DE LOG SAGAL / A",
              "voters": 65
            }
          ],
          "SAGAL": [
            {
              "station": "CHAPELLE E.P.C. DE LOG SAGAL / A",
              "voters": 65
            }
          ],
          "MBAPOUT": [
            {
              "station": "CHAPELLE E.P.C. DE MBAPOUT / A",
              "voters": 81
            }
          ],
          "NDOG": [
            {
              "station": "CHAPELLE E.P.C. DE NDOG-NJOKA / A",
              "voters": 135
            }
          ],
          "NJOKA": [
            {
              "station": "CHAPELLE E.P.C. DE NDOG-NJOKA / A",
              "voters": 135
            }
          ],
          "NONN": [
            {
              "station": "CHAPELLE E.P.C. DE NONN / A",
              "voters": 75
            }
          ],
          "LIHE": [
            {
              "station": "CHAPELLE E.P.C. DE SONG-MOT / A",
              "voters": 110
            }
          ],
          "IPIM": [
            {
              "station": "CHAPELLE E.P.C. DE SONG-MOT / A",
              "voters": 110
            }
          ],
          "BOMAKONDO": [
            {
              "station": "CHAPELLE EGLISE CATH. BOMAKONDO / A",
              "voters": 80
            }
          ],
          "DIHONG": [
            {
              "station": "CHAPELLE EGLISE CATH. DIHONG / A",
              "voters": 23
            }
          ],
          "DJONBASSO": [
            {
              "station": "CHAPELLE EGLISE CATH. DJONBASSO / A",
              "voters": 85
            }
          ],
          "KOKO": [
            {
              "station": "CHAPELLE EGLISE CATH. KOKO / A",
              "voters": 51
            }
          ],
          "LOGMANDENG": [
            {
              "station": "CHAPELLE EGLISE CATH. LOGMANDENG / A",
              "voters": 248
            }
          ],
          "LOGMBOUGUE": [
            {
              "station": "CHAPELLE EGLISE CATH. LOGMBOUGUE / A",
              "voters": 102
            }
          ],
          "NSOH": [
            {
              "station": "CHAPELLE EGLISE CATH. NSOH / A",
              "voters": 67
            }
          ],
          "YOP": [
            {
              "station": "CHAPELLE EGLISE CATH. YOP YOP / A",
              "voters": 156
            }
          ],
          "NDOGSE": [
            {
              "station": "CHAPELLE EGLISE CATHOLIQUE / A",
              "voters": 145
            }
          ],
          "NINDJE": [
            {
              "station": "ECOLE CATHOLIQUE DE BISSENG / A",
              "voters": 190
            }
          ],
          "NGOG": [
            {
              "station": "ECOLE MAT. SI-NGOG-MBEND / A",
              "voters": 120
            }
          ],
          "MBEND": [
            {
              "station": "ECOLE MAT. SI-NGOG-MBEND / A",
              "voters": 120
            }
          ],
          "BANG": [
            {
              "station": "ECOLE PUBLIQUE DE BANG / A",
              "voters": 86
            }
          ],
          "BIPOCK": [
            {
              "station": "ECOLE PUBLIQUE DE BIPOCK / A",
              "voters": 211
            }
          ],
          "BODKANG": [
            {
              "station": "ECOLE PUBLIQUE DE BODKANG / A",
              "voters": 206
            }
          ],
          "DINGOM": [
            {
              "station": "ECOLE PUBLIQUE DE DINGOM / A",
              "voters": 117
            }
          ],
          "KAY": [
            {
              "station": "ECOLE PUBLIQUE DE KAY - NYAANG / A",
              "voters": 92
            }
          ],
          "NYAANG": [
            {
              "station": "ECOLE PUBLIQUE DE KAY - NYAANG / A",
              "voters": 92
            }
          ],
          "KOUKOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUKOUM / A",
              "voters": 134
            }
          ],
          "LIKOUND": [
            {
              "station": "ECOLE PUBLIQUE DE LIKOUND / A",
              "voters": 133
            }
          ],
          "LIKOUNDBIAM": [
            {
              "station": "ECOLE PUBLIQUE DE LIKOUNDBIAM / A",
              "voters": 319
            }
          ],
          "LOGMBANGA": [
            {
              "station": "ECOLE PUBLIQUE DE LOGMBANGA / A",
              "voters": 90
            }
          ],
          "MASSANGUI": [
            {
              "station": "ECOLE PUBLIQUE DE MASSANGUI II / A",
              "voters": 74
            }
          ],
          "NDAMBOG": [
            {
              "station": "ECOLE PUBLIQUE DE NDAMBOG / A",
              "voters": 65
            }
          ],
          "DJOM": [
            {
              "station": "ECOLE PUBLIQUE DE NDAMBOG / A",
              "voters": 65
            }
          ],
          "YOUMNGUE": [
            {
              "station": "ECOLE PUBLIQUE DE NDAMBOG / A",
              "voters": 65
            }
          ],
          "NDEBI": [
            {
              "station": "ECOLE PUBLIQUE DE NDEBI / A",
              "voters": 154
            }
          ],
          "NGOCK": [
            {
              "station": "ECOLE PUBLIQUE DE NGOCK / A",
              "voters": 29
            }
          ],
          "NGUIMBONG": [
            {
              "station": "ECOLE PUBLIQUE DE NGUIMBONG / A",
              "voters": 100
            }
          ],
          "NKOO": [
            {
              "station": "ECOLE PUBLIQUE DE NKO'O / A",
              "voters": 89
            }
          ],
          "KOMBE": [
            {
              "station": "ECOLE PUBLIQUE DE NONG-NKE / A",
              "voters": 478
            }
          ],
          "NSE": [
            {
              "station": "ECOLE PUBLIQUE DE NSE / A",
              "voters": 62
            }
          ],
          "TEMBYET": [
            {
              "station": "ECOLE PUBLIQUE DE TEMBYET / A",
              "voters": 162
            }
          ],
          "TOUBANGOM": [
            {
              "station": "ECOLE PUBLIQUE DE TOUBANGOM / A",
              "voters": 107
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE II DE NDOM / A",
              "voters": 195
            }
          ],
          "MAKOU": [
            {
              "station": "ESPL. CHEFFERIE DE MAKOU / A",
              "voters": 58
            }
          ],
          "NKONGTAP": [
            {
              "station": "LYCEE D'ENS. GENERAL DE NDOM / A",
              "voters": 85
            }
          ],
          "OMENG": [
            {
              "station": "MAISON COMMUNAUTAIRE D'OMENG / A",
              "voters": 708
            }
          ],
          "DISSAHAI": [
            {
              "station": "MAISON COMMUNAUTAIRE DE KOMOL / A",
              "voters": 104
            }
          ],
          "KOMOL": [
            {
              "station": "MAISON COMMUNAUTAIRE DE KOMOL / A",
              "voters": 104
            }
          ],
          "BODBADJANG": [
            {
              "station": "PRESBYTERE E. PRESBY. CAM.  BODBADJANG / A",
              "voters": 148
            }
          ]
        },
        "NGAMBE": {
          "BISSONGA": [
            {
              "station": "CARREFOUR BISSONGA / A",
              "voters": 109
            }
          ],
          "ESSEING": [
            {
              "station": "CASE COMM. ESSEING / A",
              "voters": 249
            }
          ],
          "NKAM": [
            {
              "station": "CASE COMM. ESSEING / A",
              "voters": 172
            }
          ],
          "NYEGUI": [
            {
              "station": "CASE COMM. ESSEING / A",
              "voters": 77
            }
          ],
          "NKONGNLET": [
            {
              "station": "CASE COMM. NKONGNLET / A",
              "voters": 58
            }
          ],
          "IHENDEL": [
            {
              "station": "ECOLE ADVENTISTE D'IHENDEL / A",
              "voters": 133
            }
          ],
          "BODIPO": [
            {
              "station": "ECOLE PUBLIQUE DE BODIPO / A",
              "voters": 40
            }
          ],
          "BOTBEA": [
            {
              "station": "ECOLE PUBLIQUE DE BOTBEA / A",
              "voters": 39
            }
          ],
          "BOTKO": [
            {
              "station": "ECOLE PUBLIQUE DE BOTKO / A",
              "voters": 103
            }
          ],
          "NSOUME": [
            {
              "station": "ECOLE PUBLIQUE DE BOTKO / A",
              "voters": 103
            }
          ],
          "NIEL": [
            {
              "station": "ECOLE PUBLIQUE DE NIEL / A",
              "voters": 60
            }
          ],
          "ITOI": [
            {
              "station": "ECOLE PUBLIQUE LOGBASSEMEL / A",
              "voters": 143
            }
          ],
          "MAHOHI": [
            {
              "station": "ECOLE PUBLIQUE LOGBASSEMEL / A",
              "voters": 143
            }
          ],
          "NKOMAKONDO": [
            {
              "station": "ECOLE PUBLIQUE LOGBASSEMEL / A",
              "voters": 143
            }
          ],
          "IBAI": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE 2EME / A",
              "voters": 264
            }
          ],
          "2EME": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE 2EME / A",
              "voters": 264
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE 2EME / A",
              "voters": 264
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE 2EME / A",
              "voters": 264
            }
          ],
          "NGAMBE": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE CENTRE / A",
              "voters": 1232
            }
          ],
          "1ER": [
            {
              "station": "ECOLE PUBLIQUE NGAMBE CENTRE / A",
              "voters": 278
            }
          ],
          "NSAPACK": [
            {
              "station": "ECOLE PUBLIQUE NSAPACK / A",
              "voters": 60
            }
          ],
          "NYEE": [
            {
              "station": "ECOLE PUBLIQUE NYEE / A",
              "voters": 64
            }
          ],
          "NYOUYA": [
            {
              "station": "ECOLE PUBLIQUE NYOUYA / A",
              "voters": 143
            }
          ],
          "PIMBE": [
            {
              "station": "ECOLE PUBLIQUE NYOUYA / A",
              "voters": 221
            }
          ],
          "SONGMBOM": [
            {
              "station": "ECOLE PUBLIQUE NYOUYA / A",
              "voters": 143
            }
          ],
          "PAPAN": [
            {
              "station": "ECOLE PUBLIQUE PAPAN / A",
              "voters": 38
            }
          ],
          "POUTKAK": [
            {
              "station": "ECOLE PUBLIQUE POUTKAK / A",
              "voters": 217
            }
          ],
          "SINGANG": [
            {
              "station": "ECOLE PUBLIQUE SINGANG / A",
              "voters": 109
            }
          ],
          "NGOBILO": [
            {
              "station": "ECOLE PUBLIQUE TEKIBONGO / A",
              "voters": 64
            }
          ],
          "TEKIBONGO": [
            {
              "station": "ECOLE PUBLIQUE TEKIBONGO / A",
              "voters": 64
            }
          ],
          "KOKOA": [
            {
              "station": "ESPL. CHEFFERIE DE NKAK / A",
              "voters": 43
            }
          ],
          "MBANDI": [
            {
              "station": "ESPL. CHEFFERIE DE NKAK / A",
              "voters": 43
            }
          ],
          "NKAK": [
            {
              "station": "ESPL. CHEFFERIE DE NKAK / A",
              "voters": 43
            }
          ],
          "YOI": [
            {
              "station": "ESPL. CHEFFERIE DE YOI / A",
              "voters": 58
            }
          ],
          "NGOMBE": [
            {
              "station": "ESPL. CHEFFERIE NGOMBE / A",
              "voters": 54
            }
          ],
          "POUTBABA": [
            {
              "station": "ESPL. CHEFFERIE POUTBABA / A",
              "voters": 33
            }
          ],
          "BAKOMBE": [
            {
              "station": "FOYER DE BAKOMBE I / A",
              "voters": 79
            }
          ],
          "MOUANDE": [
            {
              "station": "FOYER DE NKAKMBOM / A",
              "voters": 130
            }
          ],
          "NKAKMBOM": [
            {
              "station": "FOYER DE NKAKMBOM / A",
              "voters": 130
            }
          ],
          "BILONGUE": [
            {
              "station": "FOYER DES JEUX DE MASSANGUI / A",
              "voters": 47
            }
          ],
          "MASSANGUI": [
            {
              "station": "FOYER DES JEUX DE MASSANGUI / A",
              "voters": 47
            }
          ],
          "MBINA": [
            {
              "station": "FOYER DES JEUX DE MASSANGUI / A",
              "voters": 47
            }
          ],
          "4EME": [
            {
              "station": "LYCEE DE NGAMBE / A",
              "voters": 262
            }
          ],
          "NOUVEAU": [
            {
              "station": "LYCEE DE NGAMBE / A",
              "voters": 262
            }
          ],
          "LOTISSEMENT": [
            {
              "station": "LYCEE DE NGAMBE / A",
              "voters": 262
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE TECHNIQUE NGAMBE / A",
              "voters": 111
            }
          ],
          "TECHNIQUE": [
            {
              "station": "LYCEE TECHNIQUE NGAMBE / A",
              "voters": 111
            }
          ],
          "MANDJAP": [
            {
              "station": "MAISON COMMUNAUTAIRE MANDJAP I / A",
              "voters": 243
            }
          ],
          "3EME": [
            {
              "station": "MARCHE DE NGAMBE / A",
              "voters": 136
            }
          ],
          "PONG": [
            {
              "station": "POSTE DES EAUX ET FORETS DE PONG / A",
              "voters": 108
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "PRISON SECONDAIRE NGAMBE / A",
              "voters": 181
            }
          ],
          "MABEL": [
            {
              "station": "STATION DES EAUX DE MATOL / A",
              "voters": 87
            }
          ],
          "MATOL": [
            {
              "station": "STATION DES EAUX DE MATOL / A",
              "voters": 87
            }
          ]
        },
        "NGWEI": {
          "SOLOPA": [
            {
              "station": "CASE COMMUNAUTAIRE SOLOPA / A",
              "voters": 145
            }
          ],
          "MBANDJOCK": [
            {
              "station": "CEAC DINGOMBI / A",
              "voters": 109
            }
          ],
          "NDJOCKLOUMBE": [
            {
              "station": "ECOLE PUB. DE NDJOCKLOUMBE / A",
              "voters": 760
            }
          ],
          "MBAMBLE": [
            {
              "station": "ECOLE PUB. MBAMBLE-MAYAMBA / A",
              "voters": 289
            }
          ],
          "NYATJO": [
            {
              "station": "ECOLE PUB. MBAMBLE-MAYAMBA / A",
              "voters": 289
            }
          ],
          "EBOMBE": [
            {
              "station": "ECOLE PUBLIQUE D'EBOMBE / A",
              "voters": 151
            }
          ],
          "BITOUTOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE BITOUTOUCK / A",
              "voters": 159
            }
          ],
          "DINGOMBI": [
            {
              "station": "ECOLE PUBLIQUE DE DINGOMBI / A",
              "voters": 153
            }
          ],
          "LEP": [
            {
              "station": "ECOLE PUBLIQUE DE LEP LIKOUNG / A",
              "voters": 552
            }
          ],
          "LIKOUNG": [
            {
              "station": "ECOLE PUBLIQUE DE LEP LIKOUNG / A",
              "voters": 117
            }
          ],
          "MAKEK": [
            {
              "station": "ECOLE PUBLIQUE DE MAKEK / A",
              "voters": 192
            }
          ],
          "NYOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MAKONDO / A",
              "voters": 435
            }
          ],
          "MAKAￏ": [
            {
              "station": "ECOLE PUBLIQUE DE MAKONDO / A",
              "voters": 403
            }
          ],
          "MAKONDO": [
            {
              "station": "ECOLE PUBLIQUE DE MAKONDO / A",
              "voters": 605
            }
          ],
          "BOOMABONG": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJAB / A",
              "voters": 238
            }
          ],
          "MANDJAB": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJAB / A",
              "voters": 238
            }
          ],
          "POUTH": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJAB / A",
              "voters": 322
            }
          ],
          "BITEN": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJAB / A",
              "voters": 322
            }
          ],
          "POUTH-NDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MANDJAB / A",
              "voters": 520
            }
          ],
          "MBOG": [
            {
              "station": "ECOLE PUBLIQUE DE NDOKOK / A",
              "voters": 284
            }
          ],
          "SEPPE": [
            {
              "station": "ECOLE PUBLIQUE DE SEPPE / A",
              "voters": 395
            }
          ],
          "NDONG": [
            {
              "station": "ECOLE PUBLIQUE DE SONG NDONG / A",
              "voters": 154
            }
          ],
          "LOGBII": [
            {
              "station": "EGLISE PRESBY CAM. DE LOGBII / A",
              "voters": 106
            }
          ],
          "MAKAI": [
            {
              "station": "EGLISE PRESBYTERIENNE DE MAKAￏ / A",
              "voters": 96
            }
          ],
          "MAPAN": [
            {
              "station": "ESPL. CHEF. MAPAN SONG TONYE / A",
              "voters": 148
            }
          ],
          "SONG": [
            {
              "station": "ESPL. CHEF. MAPAN SONG TONYE / A",
              "voters": 568
            }
          ],
          "TONYE": [
            {
              "station": "ESPL. CHEF. MAPAN SONG TONYE / A",
              "voters": 130
            }
          ],
          "MAPOUBI": [
            {
              "station": "ESPL. CHEFFERIE DE MAPOUBI / A",
              "voters": 180
            }
          ],
          "NGWEI": [
            {
              "station": "ESPL. CHEFFERIE DE NGWEI I / A",
              "voters": 177
            }
          ],
          "ETOUHA": [
            {
              "station": "ESPL. CHEFFERIE ETOUHA / A",
              "voters": 134
            }
          ],
          "LOGBAMAL": [
            {
              "station": "ESPL. CHEFFERIE LOGBAMAL / A",
              "voters": 129
            }
          ],
          "YABI": [
            {
              "station": "FOYER MBELECK B. MAPAN YABI / A",
              "voters": 18
            }
          ],
          "NDOKOK": [
            {
              "station": "FOYER MBOG-MBOG NDOKOK PUBI / A",
              "voters": 91
            }
          ],
          "PUBI": [
            {
              "station": "FOYER MBOG-MBOG NDOKOK PUBI / A",
              "voters": 91
            }
          ],
          "IKONDE": [
            {
              "station": "HANGAR D'IKONDE / A",
              "voters": 110
            }
          ]
        },
        "NYANON": {
          "LOGBIKOY": [
            {
              "station": "E. CATH. CHRIST-ROI DE LOGBIKOY / A",
              "voters": 293
            }
          ],
          "BAPTECK-KAI": [
            {
              "station": "E. P KAI-NDOGKOBE / A",
              "voters": 124
            }
          ],
          "NKONGBAKENEG": [
            {
              "station": "E. P KAI-NDOGKOBE / A",
              "voters": 124
            }
          ],
          "NKONGHOL": [
            {
              "station": "E. P KAI-NDOGKOBE / A",
              "voters": 124
            }
          ],
          "NSINGMBONGO": [
            {
              "station": "E. PRIV. LAIQUE NSINGMBONGO / A",
              "voters": 78
            }
          ],
          "BINOUM": [
            {
              "station": "E.P BINOUM-NDOMDJENGUE / A",
              "voters": 209
            }
          ],
          "NDOMNDJENGUE": [
            {
              "station": "E.P BINOUM-NDOMDJENGUE / A",
              "voters": 209
            }
          ],
          "NKONGKWALLA": [
            {
              "station": "E.P NKONGKWALLA / A",
              "voters": 182
            }
          ],
          "NYIZAGHE": [
            {
              "station": "E.P. DE NYIZAGHE / A",
              "voters": 74
            }
          ],
          "LIBOLINGOCK": [
            {
              "station": "ECOLE PUBLIQUE BAYA-LOG NTOMB / A",
              "voters": 191
            }
          ],
          "LOGBAHA": [
            {
              "station": "ECOLE PUBLIQUE BAYA-LOG NTOMB / A",
              "voters": 191
            }
          ],
          "NDOGBATOUGUE": [
            {
              "station": "ECOLE PUBLIQUE BAYA-LOG NTOMB / A",
              "voters": 191
            }
          ],
          "BILANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE BILANGUE / A",
              "voters": 249
            }
          ],
          "BODI": [
            {
              "station": "ECOLE PUBLIQUE DE BODI / A",
              "voters": 131
            }
          ],
          "BOLIKOL": [
            {
              "station": "ECOLE PUBLIQUE DE BOLIKOL / A",
              "voters": 114
            }
          ],
          "HOCK": [
            {
              "station": "ECOLE PUBLIQUE DE HOCK / A",
              "voters": 67
            }
          ],
          "KELLENG": [
            {
              "station": "ECOLE PUBLIQUE DE KELLENG / A",
              "voters": 182
            }
          ],
          "MBOUGUE": [
            {
              "station": "ECOLE PUBLIQUE DE KELLENG / A",
              "voters": 182
            }
          ],
          "MAHONDA": [
            {
              "station": "ECOLE PUBLIQUE DE MAHONDA / A",
              "voters": 92
            }
          ],
          "NDOGBATOGUE": [
            {
              "station": "ECOLE PUBLIQUE DE MASEHE / A",
              "voters": 158
            }
          ],
          "MBAY": [
            {
              "station": "ECOLE PUBLIQUE DE MBAY / A",
              "voters": 188
            }
          ],
          "NDOGBIKIM": [
            {
              "station": "ECOLE PUBLIQUE DE MBAY / A",
              "voters": 188
            }
          ],
          "NYABAMLAN": [
            {
              "station": "ECOLE PUBLIQUE DE NYABAMLAN / A",
              "voters": 199
            }
          ],
          "NKONTGTOMA": [
            {
              "station": "ECOLE PUBLIQUE DE NYAHENDEL / A",
              "voters": 213
            }
          ],
          "NYAHENDEL": [
            {
              "station": "ECOLE PUBLIQUE DE NYAHENDEL / A",
              "voters": 213
            }
          ],
          "NYAHO": [
            {
              "station": "ECOLE PUBLIQUE DE NYAHO / A",
              "voters": 358
            }
          ],
          "NYAKELLE": [
            {
              "station": "ECOLE PUBLIQUE DE NYAKELLE / A",
              "voters": 316
            }
          ],
          "NYAMBAT": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAT / A",
              "voters": 88
            }
          ],
          "NYANON": [
            {
              "station": "ECOLE PUBLIQUE DE NYANON GP I / A",
              "voters": 479
            }
          ],
          "NYASSENG": [
            {
              "station": "ECOLE PUBLIQUE DE NYASSENG / A",
              "voters": 208
            }
          ],
          "PENTOME": [
            {
              "station": "ECOLE PUBLIQUE DE NYASSENG / A",
              "voters": 386
            }
          ],
          "NYOUNDEM": [
            {
              "station": "ECOLE PUBLIQUE DE NYOUNDEM / A",
              "voters": 262
            }
          ],
          "PENDIKI": [
            {
              "station": "ECOLE PUBLIQUE DE PENDIKI / A",
              "voters": 301
            }
          ],
          "SONGTJANG": [
            {
              "station": "ECOLE PUBLIQUE DE SONGTJANG / A",
              "voters": 147
            }
          ],
          "KOMBE": [
            {
              "station": "ECOLE PUBLIQUE KOMBE I / A",
              "voters": 77
            }
          ],
          "SONGMBOG": [
            {
              "station": "ECOLE PUBLIQUE SONGMBOG I / A",
              "voters": 414
            }
          ],
          "BOUMBANGA": [
            {
              "station": "ECOLE PUBLIQUE TOUE / A",
              "voters": 158
            }
          ],
          "MALOHE": [
            {
              "station": "ECOLE PUBLIQUE TOUE / A",
              "voters": 158
            }
          ],
          "TOUE": [
            {
              "station": "ECOLE PUBLIQUE TOUE / A",
              "voters": 158
            }
          ],
          "BANN": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANN / A",
              "voters": 76
            }
          ],
          "LOGYAMBEN": [
            {
              "station": "ESPLANADE CHEFFERIE DE BANN / A",
              "voters": 76
            }
          ],
          "LOG": [
            {
              "station": "ESPLANADE CHEFFERIE DE LOGMEM / A",
              "voters": 53
            }
          ],
          "MEM": [
            {
              "station": "ESPLANADE CHEFFERIE DE LOGMEM / A",
              "voters": 53
            }
          ],
          "LOGBIOCK": [
            {
              "station": "ESPLANADE CHEFFERIE DE LOGMEM / A",
              "voters": 53
            }
          ],
          "NDEME": [
            {
              "station": "ESPLANADE CHEFFERIE DE NDEME / A",
              "voters": 377
            }
          ],
          "NSINGLIBADO": [
            {
              "station": "ESPLANADE CHEFFERIE NSINGMPAGUE / A",
              "voters": 190
            }
          ],
          "NSINGMPAGUE": [
            {
              "station": "ESPLANADE CHEFFERIE NSINGMPAGUE / A",
              "voters": 190
            }
          ]
        },
        "POUMA": {
          "BIBOUMHA": [
            {
              "station": "CHAPELLE E.P.C DE BIBOUMHA / A",
              "voters": 73
            }
          ],
          "SOKELLE": [
            {
              "station": "COLLEGE D'ENS. SECONDAIRE DE SOKELLE I  /A",
              "voters": 571
            }
          ],
          "LOGMABAA": [
            {
              "station": "ECOLE CATHOLIQUE SAINT ANDRE  LOGMABAA / A",
              "voters": 174
            }
          ],
          "BOTMOM": [
            {
              "station": "ECOLE MATERNELLE DE BOTMOM / A",
              "voters": 207
            }
          ],
          "LOGDIKIT": [
            {
              "station": "ECOLE PUBLIQUE DE BIHIANG / A",
              "voters": 494
            }
          ],
          "BIHIANG": [
            {
              "station": "ECOLE PUBLIQUE DE BIHIANG / A",
              "voters": 287
            }
          ],
          "HEGBA": [
            {
              "station": "ECOLE PUBLIQUE DE HEGBA POUMA / A",
              "voters": 343
            }
          ],
          "POUMA": [
            {
              "station": "ECOLE PUBLIQUE DE HEGBA POUMA / A",
              "voters": 3458
            }
          ],
          "NDOKOMA": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAK NDOKOMA / A",
              "voters": 215
            }
          ],
          "MAKOB": [
            {
              "station": "ECOLE PUBLIQUE DE MAKOB LOGBAKO / A",
              "voters": 204
            }
          ],
          "MINOMINDJOCK": [
            {
              "station": "ECOLE PUBLIQUE DE MINOMINDJOCK / A",
              "voters": 223
            }
          ],
          "NGOMPEM": [
            {
              "station": "ECOLE PUBLIQUE DE NGOMPEM CENTRE / A",
              "voters": 427
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE DE NGOMPEM CENTRE / A",
              "voters": 3217
            }
          ],
          "NKANGLA": [
            {
              "station": "ECOLE PUBLIQUE DE NGOMPEM NKANGLA /  A",
              "voters": 102
            }
          ],
          "NGWEI": [
            {
              "station": "ECOLE PUBLIQUE DE NGWEI II / A",
              "voters": 256
            }
          ],
          "LOGBABEM": [
            {
              "station": "ECOLE PUBLIQUE DE NKONDJOCK II / A",
              "voters": 435
            }
          ],
          "LOGBISSOL": [
            {
              "station": "ECOLE PUBLIQUE DE NKONDJOCK II / A",
              "voters": 219
            }
          ],
          "LOGSANHO": [
            {
              "station": "ECOLE PUBLIQUE DE NKONDJOCK II / A",
              "voters": 630
            }
          ],
          "NKONGA": [
            {
              "station": "ECOLE PUBLIQUE DE NKONGA I / A",
              "voters": 544
            }
          ],
          "SAKBAYEME": [
            {
              "station": "ECOLE PUBLIQUE DE SAKBAYEME CENTRE /  A",
              "voters": 578
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE DE SAKBAYEME PLATEAU /  A",
              "voters": 232
            }
          ],
          "SINDONGUI": [
            {
              "station": "ECOLE PUBLIQUE DE SAKBAYEME PLATEAU /  A",
              "voters": 432
            }
          ],
          "SIBONGO": [
            {
              "station": "ECOLE PUBLIQUE DE SIBONGO / A",
              "voters": 185
            }
          ],
          "LOGMBON": [
            {
              "station": "ECOLE PUBLIQUE DE SONGSIMOUTH / A",
              "voters": 345
            }
          ],
          "SONGSIMOUTH": [
            {
              "station": "ECOLE PUBLIQUE DE SONGSIMOUTH / A",
              "voters": 345
            }
          ],
          "SONGWOGA": [
            {
              "station": "ECOLE PUBLIQUE DE SONGWOGA / A",
              "voters": 310
            }
          ],
          "MAKAK": [
            {
              "station": "ESPL. CHEFFERIE MAKAK LOGBAKO / A",
              "voters": 396
            }
          ],
          "LOGBAKO": [
            {
              "station": "ESPL. CHEFFERIE MAKAK LOGBAKO / A",
              "voters": 385
            }
          ],
          "NDJOCK": [
            {
              "station": "HANGAR NJOCK NKONG / A",
              "voters": 71
            }
          ],
          "NKONG": [
            {
              "station": "HANGAR NJOCK NKONG / A",
              "voters": 71
            }
          ]
        }
      },
      "WOURI": {
        "DOUALA I": {
          "COAF": [
            {
              "station": "CENTRE SOCIAL BESSENGUE / A",
              "voters": 1158
            }
          ],
          "BONAMUDOUROU": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 13182
            }
          ],
          "BOUTIQUES": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 7651
            }
          ],
          "ROND": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "POINT": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "BONAMUDOURU": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "BONANTONE": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 7651
            }
          ],
          "SAFEL": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "CHEF.": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "SUPERIEURE": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "DEGL.": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "BOUTIQUE": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "KOTTO": [
            {
              "station": "COLLEGE ALFRED SAKER / A",
              "voters": 6591
            }
          ],
          "BONABEKOMBO": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 3307
            }
          ],
          "VAL.": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 3307
            }
          ],
          "BONAMOUKOURI": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 3307
            }
          ],
          "RUE": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 41164
            }
          ],
          "FOCH": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 3307
            }
          ],
          "SANDAGA": [
            {
              "station": "COLLEGE DE LA SALLE / A",
              "voters": 3307
            }
          ],
          "PLAGE": [
            {
              "station": "COLLEGE EYENGUE NKONGO / A",
              "voters": 3478
            }
          ],
          "PAYS": [
            {
              "station": "COLLEGE EYENGUE NKONGO / A",
              "voters": 3478
            }
          ],
          "BAS": [
            {
              "station": "COLLEGE EYENGUE NKONGO / A",
              "voters": 3478
            }
          ],
          "BERNABE": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "BUR": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "TRANSPORT": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "BONELANG": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 24349
            }
          ],
          "SONEL": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 10707
            }
          ],
          "BONELEKE": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 19430
            }
          ],
          "DOUALA": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "BAR": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "LAQUINTINIE": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "PAU": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "BEBEY": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 10707
            }
          ],
          "EYIDI": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "MERMOZ": [
            {
              "station": "COLLEGE INTEG / A",
              "voters": 3886
            }
          ],
          "EGLISES": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "CENTRALE": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "VOY.": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "DOUCHE": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "GARANTI": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "EXP.": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 12316
            }
          ],
          "CONGO": [
            {
              "station": "ECOLE CEBEC BETHELBONAMIKENGUE / A",
              "voters": 1387
            }
          ],
          "BEPANDA": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 29962
            }
          ],
          "BON": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 3444
            }
          ],
          "FILS": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 3444
            }
          ],
          "CAPITOL": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 3444
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 6700
            }
          ],
          "D'ACCUEIL": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 3444
            }
          ],
          "CITE": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 16367
            }
          ],
          "CHARDI": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 3444
            }
          ],
          "PONDI": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 9298
            }
          ],
          "OMNISPORT": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 6888
            }
          ],
          "TEXACO": [
            {
              "station": "ECOLE PUBLIQUE BEPANDA / A",
              "voters": 13072
            }
          ],
          "ZEPOL": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "BONAMOUTI": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 23941
            }
          ],
          "COURRIER": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "SPORTIF": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "DEPOT": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "SCIMPOS": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "EMILI": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "SAKER": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 13412
            }
          ],
          "BONEJANG": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 13642
            }
          ],
          "MTN": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "DIRECTION": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "ELAME": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "ANC.": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "PORTE": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "JAUNE": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "SOCAR": [
            {
              "station": "ECOLE PUBLIQUE D'AKWA / A",
              "voters": 6821
            }
          ],
          "BALI": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 22318
            }
          ],
          "ECOLE": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "PUBLIQUE": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "HOTEL": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 9307
            }
          ],
          "ROSES": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "KAYO": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 9817
            }
          ],
          "ELI": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 9817
            }
          ],
          "MONT": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "CAMEROUN": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "(OLD": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "NEW)": [
            {
              "station": "ECOLE PUBLIQUE DE BALI / A",
              "voters": 3767
            }
          ],
          "ROUTE": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 6150
            }
          ],
          "GERARD": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 6150
            }
          ],
          "PUB.": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 6150
            }
          ],
          "ESSENGUE": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 11114
            }
          ],
          "PETIT": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 8632
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE DEIDO / A",
              "voters": 8632
            }
          ],
          "BASE": [
            {
              "station": "ECOLE PUBLIQUE PETIT JOSS / A",
              "voters": 2482
            }
          ],
          "NAVALE": [
            {
              "station": "ECOLE PUBLIQUE PETIT JOSS / A",
              "voters": 2482
            }
          ],
          "BONADIBONG": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 31656
            }
          ],
          "ANCIEN": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 15983
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 11326
            }
          ],
          "TIF": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 5276
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 16879
            }
          ],
          "DES": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 16293
            }
          ],
          "PAVES": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 5276
            }
          ],
          "SOUDANAISE": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 5276
            }
          ],
          "STADE": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 5276
            }
          ],
          "BONAMIKENGUE": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 21370
            }
          ],
          "AVENUE": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 5276
            }
          ],
          "AOUT": [
            {
              "station": "ECOLE ST. JEAN BOSCO / A",
              "voters": 9162
            }
          ],
          "BONAMOUANG": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 19645
            }
          ],
          "BANYA": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 3929
            }
          ],
          "BOULANGERIE": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 3929
            }
          ],
          "BAKER": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 3929
            }
          ],
          "CARRIERE": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 3929
            }
          ],
          "CIMETIERE": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 9715
            }
          ],
          "TERMINUS": [
            {
              "station": "EP BONAMOUANG / A",
              "voters": 3929
            }
          ],
          "SAINTE": [
            {
              "station": "EP NEW-DEIDO / A",
              "voters": 4338
            }
          ],
          "FAMILLE": [
            {
              "station": "EP NEW-DEIDO / A",
              "voters": 4338
            }
          ],
          "NEW": [
            {
              "station": "EPL PETIT MONDE / A",
              "voters": 18976
            }
          ],
          "CANADA": [
            {
              "station": "EPL PETIT MONDE / A",
              "voters": 2981
            }
          ],
          "CINEMA": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 2096
            }
          ],
          "EDEN": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 2096
            }
          ],
          "FEUX": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 3254
            }
          ],
          "ROUGES": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 3254
            }
          ],
          "GARE": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 2096
            }
          ],
          "LEWAT": [
            {
              "station": "JARDIN ENFANTS BESSENGUE / A",
              "voters": 2096
            }
          ],
          "DEIDO": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 161128
            }
          ],
          "BONAJINJE": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 15050
            }
          ],
          "IESB": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 5786
            }
          ],
          "BONATEKI": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 57094
            }
          ],
          "CHATEAU": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 5786
            }
          ],
          "D'EAU": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 5786
            }
          ],
          "GRAND": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 11936
            }
          ],
          "MOULIN": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 11936
            }
          ],
          "BONATENE": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 32150
            }
          ],
          "NOUVEAU": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 5786
            }
          ],
          "ISES": [
            {
              "station": "LYCEE BILINGUE DEIDO / A",
              "voters": 5786
            }
          ],
          "BONANJO": [
            {
              "station": "LYCEE JOSS / A",
              "voters": 6312
            }
          ],
          "BONADUMA": [
            {
              "station": "LYCEE TECH. BONADOUMBE / A",
              "voters": 5854
            }
          ],
          "HOME": [
            {
              "station": "LYCEE TECH. BONADOUMBE / A",
              "voters": 5854
            }
          ],
          "BONADUMBE": [
            {
              "station": "LYCEE TECH. BONADOUMBE / A",
              "voters": 5854
            }
          ],
          "BONAPRISO": [
            {
              "station": "LYCEE TECH. BONADOUMBE / A",
              "voters": 9684
            }
          ],
          "AKWA": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 183882
            }
          ],
          "BESSENGUE": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 23493
            }
          ],
          "MBOPPI": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 4743
            }
          ],
          "BONABWANDJA": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 4743
            }
          ],
          "BONALEMBE": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 15450
            }
          ],
          "SOREPCO": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 4743
            }
          ],
          "BONEBONG": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 4743
            }
          ],
          "NGODI": [
            {
              "station": "LYCEE TECHN. D'AKWA / A",
              "voters": 4743
            }
          ],
          "KOUMASSI": [
            {
              "station": "LYCEE TECHN. KOUMASSI / A",
              "voters": 18125
            }
          ],
          "DIKOLO": [
            {
              "station": "LYCEE TECHN. KOUMASSI / A",
              "voters": 3625
            }
          ],
          "DOUANES": [
            {
              "station": "LYCEE TECHN. KOUMASSI / A",
              "voters": 3625
            }
          ],
          "HYDROCARBURES": [
            {
              "station": "LYCEE TECHN. KOUMASSI / A",
              "voters": 3625
            }
          ],
          "MANGUIERS": [
            {
              "station": "LYCEE TECHN. KOUMASSI / A",
              "voters": 3625
            }
          ],
          "BONEWONDA": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 13024
            }
          ],
          "AXE": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 17222
            }
          ],
          "LOURD": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 17222
            }
          ],
          "D'ETAT": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 3256
            }
          ],
          "CIVIL": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 3256
            }
          ],
          "NOUVELLE": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 9406
            }
          ],
          "RTE": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 3256
            }
          ],
          "BONABASSEM": [
            {
              "station": "NBC BONEWONDA / A",
              "voters": 3256
            }
          ],
          "NKONGMONDO": [
            {
              "station": "NKONGMONDO / A",
              "voters": 18150
            }
          ],
          "ANATOLE": [
            {
              "station": "NKONGMONDO / A",
              "voters": 6050
            }
          ]
        },
        "DOUALA II": {
          "BONADOUMBE": [
            {
              "station": "BASE AERIENNE / A",
              "voters": 993
            }
          ],
          "SERVICE": [
            {
              "station": "C.R.E.S. / A",
              "voters": 2139
            }
          ],
          "SOCIAL": [
            {
              "station": "C.R.E.S. / A",
              "voters": 2139
            }
          ],
          "BABYLONE": [
            {
              "station": "CBC BABYLONE / A",
              "voters": 2054
            }
          ],
          "NEW-TOWN": [
            {
              "station": "CBC BABYLONE / A",
              "voters": 34054
            }
          ],
          "AEROPORT": [
            {
              "station": "CBC BABYLONE / A",
              "voters": 34054
            }
          ],
          "DERNIER": [
            {
              "station": "COLLEGE EVANGELIQUE / A",
              "voters": 7536
            }
          ],
          "POTEAU": [
            {
              "station": "COLLEGE EVANGELIQUE / A",
              "voters": 7536
            }
          ],
          "MBAM": [
            {
              "station": "E.CATH. MARIA GORETTI / A",
              "voters": 5459
            }
          ],
          "EWONDO": [
            {
              "station": "E.CATH. MARIA GORETTI / A",
              "voters": 5459
            }
          ],
          "BELL": [
            {
              "station": "E.CATH. MARIA GORETTI / A",
              "voters": 57021
            }
          ],
          "HAOUSSA": [
            {
              "station": "E.CATH. MARIA GORETTI / A",
              "voters": 13516
            }
          ],
          "BONADOUMA": [
            {
              "station": "E.P. BONAPRISO 1 / A",
              "voters": 5605
            }
          ],
          "BONAPRISO": [
            {
              "station": "E.P. BONAPRISO 1 / A",
              "voters": 6862
            }
          ],
          "CAMP": [
            {
              "station": "E.P. CAMP BERTEAUD / A",
              "voters": 6472
            }
          ],
          "YABASSI": [
            {
              "station": "E.P. CAMP BERTEAUD / A",
              "voters": 6472
            }
          ],
          "MBOPPI": [
            {
              "station": "E.P. CAMP BERTEAUD / A",
              "voters": 7274
            }
          ],
          "BAMILEKE": [
            {
              "station": "E.P. N/B BAMILEKE / A",
              "voters": 7434
            }
          ],
          "CONGO": [
            {
              "station": "E.P. N/B MUSULMAN / A",
              "voters": 7883
            }
          ],
          "NOUVEAU": [
            {
              "station": "E.P. N/BELL AVIATION FILLES / A",
              "voters": 1839
            }
          ],
          "TERRAIN": [
            {
              "station": "E.P. N/BELL AVIATION FILLES / A",
              "voters": 1839
            }
          ],
          "NGANGUE": [
            {
              "station": "E.P. N/BELL AVIATION GANGUE / A",
              "voters": 5308
            }
          ],
          "FUNKEL": [
            {
              "station": "E.P. N/BELL BASSA / A",
              "voters": 6386
            }
          ],
          "TSF": [
            {
              "station": "E.P. N/BELL BASSA / A",
              "voters": 3877
            }
          ],
          "BASSA": [
            {
              "station": "E.P. N/BELL BASSA / A",
              "voters": 3877
            }
          ],
          "NEW": [
            {
              "station": "E.P. YOUPWE / A",
              "voters": 60705
            }
          ],
          "PRISO": [
            {
              "station": "E.P. YOUPWE / A",
              "voters": 3684
            }
          ],
          "YOUPWE": [
            {
              "station": "E.P. YOUPWE / A",
              "voters": 3684
            }
          ],
          "GARE": [
            {
              "station": "E.PR. FRANCO- ARABE / A",
              "voters": 2854
            }
          ],
          "TRACTAFRIC": [
            {
              "station": "ECOLE DE LA PATERNITE / A",
              "voters": 2674
            }
          ],
          "III": [
            {
              "station": "ECOLE DES PARENTS / A",
              "voters": 3761
            }
          ],
          "NKOLMINTAG": [
            {
              "station": "ECOLE KING FOTSO II / A",
              "voters": 7721
            }
          ],
          "KASSALAFAM": [
            {
              "station": "ECOLE ST. LUC KASSALAFAM / A",
              "voters": 2037
            }
          ],
          "NGONSOA": [
            {
              "station": "EPC PENIEL / A",
              "voters": 2726
            }
          ],
          "BOIS": [
            {
              "station": "GPE SCOL. BIL. LELE LA COLOMBE / A",
              "voters": 3627
            }
          ],
          "DES": [
            {
              "station": "GPE SCOL. BIL. LELE LA COLOMBE / A",
              "voters": 3627
            }
          ],
          "SINGES": [
            {
              "station": "GPE SCOL. BIL. LELE LA COLOMBE / A",
              "voters": 3627
            }
          ],
          "MAKEA": [
            {
              "station": "LYCEE DE NEW BELL / A",
              "voters": 5321
            }
          ],
          "BANDJOUN": [
            {
              "station": "NOTRE DAME DES 7 DOULEURS / A",
              "voters": 2388
            }
          ],
          "NKOLOLOUN": [
            {
              "station": "SCE SOCIAL CAMP YABASSI / A",
              "voters": 8531
            }
          ]
        },
        "DOUALA III": {
          "LOHKA": [
            {
              "station": "C.P.L.A.N. / A",
              "voters": 6529
            }
          ],
          "LOMBE": [
            {
              "station": "C.P.L.A.N. / A",
              "voters": 6529
            }
          ],
          "NDOGPASSI": [
            {
              "station": "C.P.L.A.N. / A",
              "voters": 39717
            }
          ],
          "STADE": [
            {
              "station": "CANADIAN INTERNATIONAL SCHOOL / A",
              "voters": 102
            }
          ],
          "IBOUTOU": [
            {
              "station": "CANADIAN INTERNATIONAL SCHOOL / A",
              "voters": 102
            }
          ],
          "III": [
            {
              "station": "CES DE BOBONGO / A",
              "voters": 49297
            }
          ],
          "NGODI": [
            {
              "station": "COLLEGE EXCELLENCE TERTIO / A",
              "voters": 14247
            }
          ],
          "CARREFOUR": [
            {
              "station": "COLLEGE EXCELLENCE TERTIO / A",
              "voters": 6791
            }
          ],
          "ARY": [
            {
              "station": "COLLEGE EXCELLENCE TERTIO / A",
              "voters": 6791
            }
          ],
          "CENTRE": [
            {
              "station": "COLLEGE KAMTCHOUNDAMI / A",
              "voters": 30613
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "COLLEGE KAMTCHOUNDAMI / A",
              "voters": 4076
            }
          ],
          "SO'O-BIBAL": [
            {
              "station": "COLLEGE KAMTCHOUNDAMI / A",
              "voters": 4076
            }
          ],
          "MAHOUME": [
            {
              "station": "COLLEGE LA ROCHE / A",
              "voters": 3221
            }
          ],
          "ROCHE": [
            {
              "station": "COLLEGE LA ROCHE / A",
              "voters": 3221
            }
          ],
          "NDOKOTI": [
            {
              "station": "COLLEGE LA ROCHE / A",
              "voters": 3221
            }
          ],
          "SINCATEX": [
            {
              "station": "COLLEGE LA ROCHE / A",
              "voters": 3221
            }
          ],
          "SOPOM": [
            {
              "station": "COLLEGE LA ROCHE / A",
              "voters": 4952
            }
          ],
          "DIBOM": [
            {
              "station": "COLLEGE LES CONQUERANTS / A",
              "voters": 21499
            }
          ],
          "MOUTONGO": [
            {
              "station": "COLLEGE NKOUALONG / A",
              "voters": 384
            }
          ],
          "NKUIMY": [
            {
              "station": "COLLEGE NKUIMY / A",
              "voters": 2123
            }
          ],
          "BOG-NKOU": [
            {
              "station": "COLLEGE SAINT LOUIS / A",
              "voters": 1753
            }
          ],
          "MBENGUE": [
            {
              "station": "COLLEGE SAINT LOUIS / A",
              "voters": 1753
            }
          ],
          "CITY": [
            {
              "station": "COLLEGE SAINT LOUIS / A",
              "voters": 1753
            }
          ],
          "NGONGUE": [
            {
              "station": "COLLEGE SAINT LOUIS / A",
              "voters": 1753
            }
          ],
          "BBR": [
            {
              "station": "COLLEGE ST MICHEL / A",
              "voters": 4582
            }
          ],
          "TERGAL": [
            {
              "station": "COLLEGE ST MICHEL / A",
              "voters": 9164
            }
          ],
          "TRACTAFRIC": [
            {
              "station": "COLLEGE ST MICHEL / A",
              "voters": 4582
            }
          ],
          "LEPROSERIE": [
            {
              "station": "E. LEPROSERIE / A",
              "voters": 1870
            }
          ],
          "DIBAMBA": [
            {
              "station": "E. LEPROSERIE / A",
              "voters": 1870
            }
          ],
          "CHATEAU": [
            {
              "station": "E. MIXTE LA PAIX NYALLA II / A",
              "voters": 6520
            }
          ],
          "NYLON": [
            {
              "station": "E. P. NYLON / A",
              "voters": 2054
            }
          ],
          "KAMBO": [
            {
              "station": "E. PR. LA REGENERATION / A",
              "voters": 23121
            }
          ],
          "LIBERTE": [
            {
              "station": "E. PR. LES HIRONDELLES BAYANG / A",
              "voters": 1731
            }
          ],
          "LOGBESSOU": [
            {
              "station": "E. PR. PIERRE BONNEAU / A",
              "voters": 9448
            }
          ],
          "MBOUHANG": [
            {
              "station": "E. PR. PIERRE BONNEAU / A",
              "voters": 9770
            }
          ],
          "NGOLOKO": [
            {
              "station": "E. PR. PIERRE BONNEAU / A",
              "voters": 18896
            }
          ],
          "PAPAS": [
            {
              "station": "E. PR. PIERRE BONNEAU / A",
              "voters": 9770
            }
          ],
          "BIBAMBA": [
            {
              "station": "E.P. BIBAMBA BONANLOKA / A",
              "voters": 3569
            }
          ],
          "BONANLOKA": [
            {
              "station": "E.P. BIBAMBA BONANLOKA / A",
              "voters": 4330
            }
          ],
          "BONADIWOTO": [
            {
              "station": "E.P. BONADIWOTO / A",
              "voters": 1487
            }
          ],
          "CITE": [
            {
              "station": "E.P. CITE BERGE / A",
              "voters": 36197
            }
          ],
          "BERGE": [
            {
              "station": "E.P. CITE BERGE / A",
              "voters": 19380
            }
          ],
          "PAIX": [
            {
              "station": "E.P. CITE DES ENSEIGNANTS / A",
              "voters": 3159
            }
          ],
          "DES": [
            {
              "station": "E.P. CITE DES ENSEIGNANTS / A",
              "voters": 6647
            }
          ],
          "ENSEIGNANTS": [
            {
              "station": "E.P. CITE DES ENSEIGNANTS / A",
              "voters": 3159
            }
          ],
          "LOGBABA": [
            {
              "station": "E.P. CITE DES ENSEIGNANTS / A",
              "voters": 10038
            }
          ],
          "BILONGUE": [
            {
              "station": "E.P. DE BILONGUE / A",
              "voters": 20078
            }
          ],
          "BOBONGO": [
            {
              "station": "E.P. DE BOBONGO / A",
              "voters": 19771
            }
          ],
          "MADIBA": [
            {
              "station": "E.P. GENIE MILITAIRE / A",
              "voters": 3488
            }
          ],
          "NOBLES": [
            {
              "station": "E.P. GENIE MILITAIRE / A",
              "voters": 3488
            }
          ],
          "JARDIN": [
            {
              "station": "E.P. NDOGMBE / A",
              "voters": 1943
            }
          ],
          "SO'O-BECKER": [
            {
              "station": "E.P. NDOGMBE / A",
              "voters": 1943
            }
          ],
          "SONG-NKOT": [
            {
              "station": "E.P. NDOGMBE / A",
              "voters": 1838
            }
          ],
          "CHIRAC": [
            {
              "station": "E.P. NKOLBONG / A",
              "voters": 7011
            }
          ],
          "NKOLBONG": [
            {
              "station": "E.P. NKOLBONG / A",
              "voters": 7011
            }
          ],
          "BWANG": [
            {
              "station": "E.P. YATCHIKA / A",
              "voters": 5896
            }
          ],
          "YANSOKI": [
            {
              "station": "E.P. YATCHIKA / A",
              "voters": 5896
            }
          ],
          "YASSA": [
            {
              "station": "E.P. YATCHIKA / A",
              "voters": 13352
            }
          ],
          "YATCHIKA": [
            {
              "station": "E.P. YATCHIKA / A",
              "voters": 5896
            }
          ],
          "SOBINAN": [
            {
              "station": "E.P.L LES COUCOUS / A",
              "voters": 2476
            }
          ],
          "BIKIBO": [
            {
              "station": "E.P.L. AVENIR / A",
              "voters": 11594
            }
          ],
          "MANDJAP": [
            {
              "station": "E.P.L. AVENIR / A",
              "voters": 5797
            }
          ],
          "NDOG-MANG": [
            {
              "station": "E.P.L. AVENIR / A",
              "voters": 5797
            }
          ],
          "NDOGHEM": [
            {
              "station": "E.P.L. AVENIR / A",
              "voters": 5797
            }
          ],
          "VILLAGE": [
            {
              "station": "E.P.L. AVENIR / A",
              "voters": 32220
            }
          ],
          "LOG": [
            {
              "station": "E.P.L. FIDELITE / A",
              "voters": 726
            }
          ],
          "NDENGUE": [
            {
              "station": "E.P.L. FIDELITE / A",
              "voters": 726
            }
          ],
          "NYANKA": [
            {
              "station": "E.P.L. HENRI DUMONT / A",
              "voters": 3461
            }
          ],
          "QUARTIER": [
            {
              "station": "E.P.L. LA LIBERTE / A",
              "voters": 1507
            }
          ],
          "BAMENDA": [
            {
              "station": "E.P.L. LA LIBERTE / A",
              "voters": 1507
            }
          ],
          "SOCARTO": [
            {
              "station": "E.P.L. LA LIBERTE / A",
              "voters": 1507
            }
          ],
          "NDOGSIMBI": [
            {
              "station": "E.P.L. NDOGSIMBI / A",
              "voters": 2421
            }
          ],
          "BONAMOUTONGO": [
            {
              "station": "E.PR. LA FIDELITE / A",
              "voters": 3143
            }
          ],
          "LOGMAYANGUI": [
            {
              "station": "E.PR. LA PREVOYANCE / A",
              "voters": 1951
            }
          ],
          "SOBIKAGO": [
            {
              "station": "ECOLE CEBEC KONDI PK 9 / A",
              "voters": 4146
            }
          ],
          "CAMP": [
            {
              "station": "ECOLE CEBEC MBOPPI / A",
              "voters": 1896
            }
          ],
          "MBOPPI": [
            {
              "station": "ECOLE CEBEC MBOPPI / A",
              "voters": 3792
            }
          ],
          "CIVIL": [
            {
              "station": "ECOLE CEBEC MBOPPI / A",
              "voters": 1896
            }
          ],
          "SOBOUM": [
            {
              "station": "ECOLE CEBEC SOBOUM / A",
              "voters": 5627
            }
          ],
          "PMI": [
            {
              "station": "ECOLE CEBEC SOBOUM / A",
              "voters": 3504
            }
          ],
          "EMANGUE": [
            {
              "station": "ECOLE CHARLEMAGNE / A",
              "voters": 25
            }
          ],
          "EMANGUE-JAPOMA": [
            {
              "station": "ECOLE CHARLEMAGNE / A",
              "voters": 25
            }
          ],
          "NSONG": [
            {
              "station": "ECOLE LA CAPACITE S.FR / A",
              "voters": 5782
            }
          ],
          "NGONGA-MBOH": [
            {
              "station": "ECOLE LA CAPACITE S.FR / A",
              "voters": 5782
            }
          ],
          "KON": [
            {
              "station": "ECOLE LA CAPACITE S.FR / A",
              "voters": 5782
            }
          ],
          "SONGA-BOKO": [
            {
              "station": "ECOLE LA CAPACITE S.FR / A",
              "voters": 14864
            }
          ],
          "CCC": [
            {
              "station": "ECOLE PACIFIQUE CCC / A",
              "voters": 4146
            }
          ],
          "NGOMA": [
            {
              "station": "ECOLE SAINT FELIX / A",
              "voters": 2607
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ECOLE SAINTE AGNES / A",
              "voters": 7919
            }
          ],
          "BOMKOU": [
            {
              "station": "ECOLE SAINTE MADELEINE / A",
              "voters": 2872
            }
          ],
          "POM": [
            {
              "station": "ECOLE ST THOMAS / A",
              "voters": 3422
            }
          ],
          "DIHEN": [
            {
              "station": "ECOLE ST THOMAS / A",
              "voters": 3422
            }
          ],
          "BOKO": [
            {
              "station": "GPE SCOL. ACHOUKA / A",
              "voters": 45403
            }
          ],
          "CARRIERE": [
            {
              "station": "GPE SCOL. ACHOUKA / A",
              "voters": 13440
            }
          ],
          "PLAGE": [
            {
              "station": "GPE SCOL. ACHOUKA / A",
              "voters": 21759
            }
          ],
          "PLATEAU": [
            {
              "station": "GPE SCOL. LA REFERENCE PLUS / A",
              "voters": 17496
            }
          ],
          "SONG": [
            {
              "station": "GPE SCOL. LA RIVE / A",
              "voters": 3029
            }
          ],
          "MAHOP": [
            {
              "station": "GPE SCOL. LA RIVE / A",
              "voters": 3029
            }
          ],
          "HOPITAL": [
            {
              "station": "GPE SCOL. LES MEILLEURS / A",
              "voters": 2651
            }
          ],
          "KING": [
            {
              "station": "GPE SCOL. MEUKONTCHOU / A",
              "voters": 9082
            }
          ],
          "QUARTER": [
            {
              "station": "GPE SCOL. MEUKONTCHOU / A",
              "voters": 9082
            }
          ],
          "MBANGA": [
            {
              "station": "GPE SCOL. MEUKONTCHOU / A",
              "voters": 16615
            }
          ],
          "PONGO": [
            {
              "station": "GPE SCOL. MEUKONTCHOU / A",
              "voters": 9159
            }
          ],
          "NGO-NJOH": [
            {
              "station": "GPE SCOL. OPUNTIA / A",
              "voters": 1783
            }
          ],
          "NYALLA": [
            {
              "station": "I.A.E.S / A",
              "voters": 44903
            }
          ],
          "BAKOKO": [
            {
              "station": "INSAM DE MBANGA BAKOKO / A",
              "voters": 7456
            }
          ],
          "AXE": [
            {
              "station": "INSAM DE MBANGA BAKOKO / A",
              "voters": 7456
            }
          ],
          "LOURD": [
            {
              "station": "INSAM DE MBANGA BAKOKO / A",
              "voters": 7456
            }
          ],
          "REGIFERCAM": [
            {
              "station": "INSAM DE NDOGBATI / A",
              "voters": 947
            }
          ],
          "MBOKANG": [
            {
              "station": "INSTITUT NGASSI LOGBABA / A",
              "voters": 3694
            }
          ],
          "TOUNOU": [
            {
              "station": "INSTITUT NGASSI LOGBABA / A",
              "voters": 15846
            }
          ],
          "KONDI": [
            {
              "station": "INSTITUT UNIV. GOLFE DE GUINEE / A",
              "voters": 4335
            }
          ],
          "SUD": [
            {
              "station": "INSTITUT UNIV. GOLFE DE GUINEE / A",
              "voters": 7556
            }
          ],
          "NKONGUI": [
            {
              "station": "INSTITUT YULIANA / A",
              "voters": 3185
            }
          ],
          "LOGTCHA": [
            {
              "station": "LYCEE BILINGUE DE NYALLA / A",
              "voters": 5781
            }
          ],
          "HAOUSSA": [
            {
              "station": "LYCEE BILINGUE DE NYALLA / A",
              "voters": 5781
            }
          ],
          "GENIE": [
            {
              "station": "LYCEE BILINGUE DU GENIE / A",
              "voters": 7923
            }
          ],
          "MILITAIRE": [
            {
              "station": "LYCEE BILINGUE DU GENIE / A",
              "voters": 7923
            }
          ],
          "OYACK": [
            {
              "station": "LYCEE D'OYACK / A",
              "voters": 18954
            }
          ],
          "BRAZZAVILLE": [
            {
              "station": "LYCEE DE BRAZZAVILLE / A",
              "voters": 7130
            }
          ],
          "JAPOMA": [
            {
              "station": "LYCEE DE JAPOMA / A",
              "voters": 9515
            }
          ],
          "ZONE": [
            {
              "station": "LYCEE DE NDOGPASSI / A",
              "voters": 11416
            }
          ],
          "RECASEMENT": [
            {
              "station": "LYCEE DE NDOGPASSI / A",
              "voters": 11416
            }
          ]
        },
        "DOUALA IV": {
          "CHEFFERIE": [
            {
              "station": "C.F.S.M. / A",
              "voters": 3011
            }
          ],
          "MINKWELE": [
            {
              "station": "CASE SOCIALE MINKWELE / A",
              "voters": 3976
            }
          ],
          "VILLAGE": [
            {
              "station": "CES DE SODIKO / A",
              "voters": 741
            }
          ],
          "NGWELE": [
            {
              "station": "COLLEGE DAAS / A",
              "voters": 18738
            }
          ],
          "DAAS": [
            {
              "station": "COLLEGE DAAS / A",
              "voters": 6360
            }
          ],
          "MPANJO": [
            {
              "station": "COLLEGE DU LEVANT / A",
              "voters": 5870
            }
          ],
          "SODIKO": [
            {
              "station": "COLLEGE LA MARTINE / A",
              "voters": 10280
            }
          ],
          "VILLE": [
            {
              "station": "COLLEGE LA MARTINE / A",
              "voters": 8434
            }
          ],
          "BONENDALE": [
            {
              "station": "E P BONENDALE / A",
              "voters": 11946
            }
          ],
          "BONAMATUMBE": [
            {
              "station": "E P BONENDALE / A",
              "voters": 3982
            }
          ],
          "DJEBALE": [
            {
              "station": "E P DJEBALE / A",
              "voters": 340
            }
          ],
          "RAILS": [
            {
              "station": "E. PRIVEE DE L'EXCELLENCE / A",
              "voters": 3619
            }
          ],
          "QUARTIER": [
            {
              "station": "E.P. NDOBO / A",
              "voters": 10881
            }
          ],
          "BILINGUE": [
            {
              "station": "E.P. NDOBO / A",
              "voters": 10881
            }
          ],
          "BOJONGO": [
            {
              "station": "ECOLE BOJONGO / A",
              "voters": 5989
            }
          ],
          "CARRIERE": [
            {
              "station": "ECOLE COMMUNALE / A",
              "voters": 13043
            }
          ],
          "WASHINGTON": [
            {
              "station": "ECOLE LE FLEURON / A",
              "voters": 8262
            }
          ],
          "BESSEKE": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 9944
            }
          ],
          "BONAMBAPPE": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 21593
            }
          ],
          "NKOMBA": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 19386
            }
          ],
          "NDOBO": [
            {
              "station": "ECOLE PRIVEE LA REDOUTE / A",
              "voters": 36908
            }
          ],
          "BANEN": [
            {
              "station": "ECOLE PRIVEE LA REDOUTE / A",
              "voters": 17067
            }
          ],
          "GRAND": [
            {
              "station": "ECOLE PUBLIQUE NKONJIBE / A",
              "voters": 11337
            }
          ],
          "HANGAR": [
            {
              "station": "ECOLE PUBLIQUE NKONJIBE / A",
              "voters": 11337
            }
          ],
          "BONAMATUMBE-VILLE": [
            {
              "station": "EP BONAMATUMBE / A",
              "voters": 2149
            }
          ],
          "DIKOLO": [
            {
              "station": "EP BONAMIKANO / A",
              "voters": 5899
            }
          ],
          "BONASSAMA": [
            {
              "station": "EP BONASSAMA / A",
              "voters": 4228
            }
          ],
          "JOHN": [
            {
              "station": "INSTITUT TONJI / A",
              "voters": 10058
            }
          ],
          "WHITE": [
            {
              "station": "INSTITUT TONJI / A",
              "voters": 10058
            }
          ],
          "BONAMIKANO": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 13049
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE MAMBANDA / A",
              "voters": 3369
            }
          ],
          "MAMBANDA": [
            {
              "station": "MOUNT ZION SCHOOL / A",
              "voters": 47559
            }
          ],
          "CENTRE": [
            {
              "station": "MOUNT ZION SCHOOL / A",
              "voters": 33945
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "MOUNT ZION SCHOOL / A",
              "voters": 21089
            }
          ],
          "BEPELE": [
            {
              "station": "RENGLAD MAJESTY / A",
              "voters": 3366
            }
          ]
        },
        "DOUALA V": {
          "2000": [
            {
              "station": "COLLEGE COHAS / A",
              "voters": 2189
            }
          ],
          "MBANYA": [
            {
              "station": "CEFTI MBANYA / A",
              "voters": 5829
            }
          ],
          "TSF": [
            {
              "station": "COL. MARTIN LUTHER KING / A",
              "voters": 8769
            }
          ],
          "SODIKOMBO": [
            {
              "station": "COLLEGE CEFOMI SODIKOMBO / A",
              "voters": 4429
            }
          ],
          "BEPANDA": [
            {
              "station": "COLLEGE COHAS / A",
              "voters": 73355
            }
          ],
          "NOUVELLE": [
            {
              "station": "COLLEGE L'AGAPE / A",
              "voters": 4033
            }
          ],
          "ROUTE": [
            {
              "station": "COLLEGE L'AGAPE / A",
              "voters": 4033
            }
          ],
          "SHANGAI": [
            {
              "station": "COLLEGE L'AGAPE / A",
              "voters": 4033
            }
          ],
          "DEFOSSO": [
            {
              "station": "COLLEGE MATURITE / A",
              "voters": 4440
            }
          ],
          "ESSEC": [
            {
              "station": "COLLEGE MATURITE / A",
              "voters": 13556
            }
          ],
          "PEUPLE": [
            {
              "station": "COLLEGE POLY. BEPANDA PEUPLE / A",
              "voters": 6014
            }
          ],
          "SOBIKAGO": [
            {
              "station": "E.P.P.R DE SOBIKAGO / A",
              "voters": 1673
            }
          ],
          "MATURITE": [
            {
              "station": "ECOLE ADVENTISTE 7EME JOUR / A",
              "voters": 4163
            }
          ],
          "MONACO": [
            {
              "station": "ECOLE BIL. ANGLOPHONE OMNISPORT / A",
              "voters": 1047
            }
          ],
          "NDOGHEM": [
            {
              "station": "ECOLE CONFESS. NDOGHEM I / A",
              "voters": 2153
            }
          ],
          "BEEDI": [
            {
              "station": "ECOLE LA RETRAITE / A",
              "voters": 22835
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE LA RETRAITE / A",
              "voters": 40757
            }
          ],
          "MACON": [
            {
              "station": "ECOLE LA RETRAITE / A",
              "voters": 13577
            }
          ],
          "HAUTE": [
            {
              "station": "ECOLE LA RETRAITE / A",
              "voters": 3978
            }
          ],
          "TENSION": [
            {
              "station": "ECOLE LA RETRAITE / A",
              "voters": 3978
            }
          ],
          "NGUERECK": [
            {
              "station": "ECOLE PIGEONS / A",
              "voters": 1724
            }
          ],
          "PK14/PK15": [
            {
              "station": "ECOLE POPULAIRE BOMKOUL PK15 / A",
              "voters": 3189
            }
          ],
          "CONSULAT": [
            {
              "station": "ECOLE POPULAIRE YONYONG / A",
              "voters": 4633
            }
          ],
          "BENIN": [
            {
              "station": "ECOLE POPULAIRE YONYONG / A",
              "voters": 4633
            }
          ],
          "PETIT": [
            {
              "station": "ECOLE POPULAIRE YONYONG / A",
              "voters": 15201
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE POPULAIRE YONYONG / A",
              "voters": 34486
            }
          ],
          "YONYONG": [
            {
              "station": "ECOLE POPULAIRE YONYONG / A",
              "voters": 4633
            }
          ],
          "DIKAHE": [
            {
              "station": "ECOLE PRIVEE CADENELLE / A",
              "voters": 2883
            }
          ],
          "CACAO": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 6577
            }
          ],
          "BARRY": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 6577
            }
          ],
          "BOULANGERIE": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 5627
            }
          ],
          "PAIX": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 5627
            }
          ],
          "MAKEPE": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 77318
            }
          ],
          "MISSOKE": [
            {
              "station": "ECOLE PRIVEE FRATERNITE / A",
              "voters": 22389
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE PRIVEE LA FIERTE KOTTO / A",
              "voters": 6284
            }
          ],
          "EMENE": [
            {
              "station": "ECOLE PRIVEE LES PIGEONS / A",
              "voters": 2997
            }
          ],
          "CITY": [
            {
              "station": "ECOLE PRIVEE LES PIGEONS / A",
              "voters": 5558
            }
          ],
          "PK20/PK21": [
            {
              "station": "ECOLE PUBLIQUE PK21 / A",
              "voters": 2803
            }
          ],
          "MANIKE": [
            {
              "station": "ECOLE SAINT ANDRE MANIKE / A",
              "voters": 751
            }
          ],
          "SCDP": [
            {
              "station": "ECOLE SAINT KISITO OMNISPORT / A",
              "voters": 3229
            }
          ],
          "OMNISPORT": [
            {
              "station": "ECOLE SAINT KISITO OMNISPORT / A",
              "voters": 6648
            }
          ],
          "STADE": [
            {
              "station": "EP BEPANDA OMNISPORT / A",
              "voters": 3419
            }
          ],
          "BONAMOUSADI": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 11881
            }
          ],
          "SONEL": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 14364
            }
          ],
          "BONAMOUSSADI": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 111793
            }
          ],
          "AFRIQUE": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 9599
            }
          ],
          "SUD": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 9599
            }
          ],
          "BIJOU": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 9599
            }
          ],
          "LYCEE": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 23612
            }
          ],
          "COMMISSARIAT": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 9599
            }
          ],
          "DENVER": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 15890
            }
          ],
          "TERMINUS": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 24772
            }
          ],
          "BONANGANDO": [
            {
              "station": "EP BONAMOUSSADI / A",
              "voters": 17240
            }
          ],
          "BONEWANDA": [
            {
              "station": "EP BONEWANDA / A",
              "voters": 1977
            }
          ],
          "GENTIL": [
            {
              "station": "EP CITE SIC / A",
              "voters": 5061
            }
          ],
          "MANOKA": [
            {
              "station": "EP CITE SIC / A",
              "voters": 5061
            }
          ],
          "LOGBESSOU": [
            {
              "station": "EP DE LOGBESSOU / A",
              "voters": 11529
            }
          ],
          "NDOGBONG": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 40938
            }
          ],
          "ANCIEN": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "DEPOT": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "GUI.": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "GUINNESS": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "MBONDY": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "MERVEILLES": [
            {
              "station": "EP DE NDOGBONG / A",
              "voters": 6950
            }
          ],
          "DECHARGE": [
            {
              "station": "EP LA CONFIANCE / A",
              "voters": 14942
            }
          ],
          "KOTTO": [
            {
              "station": "EP LA SOCIALISATION / A",
              "voters": 25932
            }
          ],
          "BLOC": [
            {
              "station": "EP LA SOCIALISATION / A",
              "voters": 37036
            }
          ],
          "CAMTEL": [
            {
              "station": "EP LA SOCIALISATION / A",
              "voters": 3462
            }
          ],
          "TONNER": [
            {
              "station": "EPL BONAMOUSSONGO / A",
              "voters": 4114
            }
          ],
          "VERT": [
            {
              "station": "EPL LA CARINA KONDI VERT / A",
              "voters": 4452
            }
          ],
          "ANDEM": [
            {
              "station": "EPL LA RECHERCHE / A",
              "voters": 3933
            }
          ],
          "LOGPOM": [
            {
              "station": "EPL LA RECHERCHE / A",
              "voters": 14653
            }
          ],
          "BANGUE": [
            {
              "station": "EPM PETITS BOIS BANGUE / A",
              "voters": 14772
            }
          ],
          "FIN": [
            {
              "station": "EPM PETITS BOIS BANGUE / A",
              "voters": 20824
            }
          ],
          "GOUDRON": [
            {
              "station": "EPM PETITS BOIS BANGUE / A",
              "voters": 20824
            }
          ],
          "VILLAGE": [
            {
              "station": "EPM PETITS BOIS BANGUE / A",
              "voters": 28250
            }
          ],
          "MBENGUE": [
            {
              "station": "EPPL MBENGUE CITY / A",
              "voters": 2561
            }
          ],
          "BONABEYIKE": [
            {
              "station": "FOYER CHEFFERIE BONABEYIKE / A",
              "voters": 140
            }
          ],
          "BONANGANG": [
            {
              "station": "FOYER CHEFFERIE BONANGANDO / A",
              "voters": 5829
            }
          ],
          "NDOG": [
            {
              "station": "FOYER CHEFFERIE NDOG MBE II / A",
              "voters": 132
            }
          ],
          "MBE": [
            {
              "station": "FOYER CHEFFERIE NDOG MBE II / A",
              "voters": 132
            }
          ],
          "NGOMBE": [
            {
              "station": "FOYER CHEFFERIE NGOMBE / A",
              "voters": 199
            }
          ],
          "PK16/17/18": [
            {
              "station": "GP. SCOLAIRE BILINGUE LES POUSSINS / A",
              "voters": 3497
            }
          ],
          "MALANGUE": [
            {
              "station": "GP. SCOLAIRE LA RECHERCHE II MALANGUE  /A",
              "voters": 3884
            }
          ],
          "KONDI": [
            {
              "station": "GPE SCOL. EYIDI KONDI / A",
              "voters": 8066
            }
          ],
          "PK8": [
            {
              "station": "GPE SCOL. EYIDI KONDI / A",
              "voters": 3614
            }
          ],
          "LENDI": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE FELYMA / A",
              "voters": 3573
            }
          ],
          "CENTRE": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE FELYMA / A",
              "voters": 746
            }
          ],
          "URBAIN": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE FELYMA / A",
              "voters": 746
            }
          ],
          "NGOMA": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIMAIRE ET  MATERNELLE VENDUN / A",
              "voters": 1376
            }
          ],
          "(PK19)": [
            {
              "station": "GROUPE SCOLAIRE BILINGUE PRIMAIRE ET  MATERNELLE VENDUN / A",
              "voters": 1376
            }
          ],
          "PAYS": [
            {
              "station": "GSB LE PORTIQUE MAKEPE P.P. / A",
              "voters": 4922
            }
          ],
          "BISSOKE": [
            {
              "station": "GSBM / A",
              "voters": 2379
            }
          ],
          "WOURI": [
            {
              "station": "I.P.P.F PETIT WOURI / A",
              "voters": 5646
            }
          ],
          "NDOGBATI": [
            {
              "station": "INST. POLYVALENT MINTANYOU / A",
              "voters": 2532
            }
          ],
          "CITE": [
            {
              "station": "LYCEE CITE DES PALMIERS / A",
              "voters": 49348
            }
          ],
          "DES": [
            {
              "station": "LYCEE CITE DES PALMIERS / A",
              "voters": 12468
            }
          ],
          "PALMIERS": [
            {
              "station": "LYCEE CITE DES PALMIERS / A",
              "voters": 12468
            }
          ],
          "RUE": [
            {
              "station": "LYCEE D'AKWA NORD / A",
              "voters": 7807
            }
          ],
          "AJUDANT": [
            {
              "station": "LYCEE D'AKWA NORD / A",
              "voters": 7807
            }
          ],
          "AXE": [
            {
              "station": "LYCEE DE BEPANDA / A",
              "voters": 6204
            }
          ],
          "LOURD": [
            {
              "station": "LYCEE DE BEPANDA / A",
              "voters": 6204
            }
          ],
          "TENDON": [
            {
              "station": "LYCEE DE BEPANDA / A",
              "voters": 6204
            }
          ],
          "VOIRIE": [
            {
              "station": "LYCEE DE BEPANDA / A",
              "voters": 6204
            }
          ],
          "IUT": [
            {
              "station": "LYCEE TECH. NDOGBONG / A",
              "voters": 6569
            }
          ],
          "TECHNIQUE": [
            {
              "station": "LYCEE TECH. NDOGBONG / A",
              "voters": 6569
            }
          ]
        },
        "DOUALA VI": {
          "CAP": [
            {
              "station": "E. P. BILINGUE DE CAP-CAMEROUN / A",
              "voters": 480
            }
          ],
          "CAMEROUN": [
            {
              "station": "E. P. BILINGUE DE CAP-CAMEROUN / A",
              "voters": 480
            }
          ],
          "TENDE": [
            {
              "station": "E. P. BILINGUE DE CAP-CAMEROUN / A",
              "voters": 480
            }
          ],
          "MOUKOKO": [
            {
              "station": "E. P. DE KOMBO MOUKOKO / A",
              "voters": 40
            }
          ],
          "WENGUE": [
            {
              "station": "E. P. DE KOMBO MOUKOKO / A",
              "voters": 40
            }
          ],
          "BOSCO": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "KOOH": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "MATANDA": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "MASSADI": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "PIKORO": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "TAKELE": [
            {
              "station": "E. P. DE KOOH / A",
              "voters": 423
            }
          ],
          "ACCRA": [
            {
              "station": "E.P. DE BESCHOOL / A",
              "voters": 68
            }
          ],
          "KOMBO": [
            {
              "station": "E.P. DE BESCHOOL / A",
              "voters": 1467
            }
          ],
          "BESCHOOL": [
            {
              "station": "E.P. DE BESCHOOL / A",
              "voters": 68
            }
          ],
          "MOPI": [
            {
              "station": "E.P. DE BESCHOOL / A",
              "voters": 68
            }
          ],
          "CAMP": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "BIR": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "CENTRE": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "DAHOMEY": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "GENDARMERIE": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "KALABAR": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "QUATER": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "KWANSI": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "PLATEAU": [
            {
              "station": "E.P. DE MANOKA / A",
              "voters": 814
            }
          ],
          "EPAKA": [
            {
              "station": "E.P. DE MBENGUE DIKOUME / A",
              "voters": 62
            }
          ],
          "MBENGUE": [
            {
              "station": "E.P. DE MBENGUE DIKOUME / A",
              "voters": 62
            }
          ],
          "DIKOUME": [
            {
              "station": "E.P. DE MBENGUE DIKOUME / A",
              "voters": 62
            }
          ],
          "NGALAMBERY": [
            {
              "station": "E.P. DE MBENGUE DIKOUME / A",
              "voters": 62
            }
          ],
          "EPASSI": [
            {
              "station": "E.P. DE SIO - SIO / A",
              "voters": 163
            }
          ],
          "SIO-SIO": [
            {
              "station": "E.P. DE SIO - SIO / A",
              "voters": 326
            }
          ],
          "KALABOT": [
            {
              "station": "E.P. DE TOUBE / A",
              "voters": 65
            }
          ],
          "TOUBE": [
            {
              "station": "E.P. DE TOUBE / A",
              "voters": 130
            }
          ],
          "BWAPE": [
            {
              "station": "ECOLE DES PARENTS DE BWAPE / A",
              "voters": 161
            }
          ],
          "MANBANDA": [
            {
              "station": "ECOLE DES PARENTS DE BWAPE / A",
              "voters": 161
            }
          ],
          "DONGO": [
            {
              "station": "ECOLE DES PARENTS DE DONGO / A",
              "voters": 701
            }
          ],
          "DIBO": [
            {
              "station": "ECOLE DES PARENTS DE DONGO / A",
              "voters": 701
            }
          ],
          "MISSIPI": [
            {
              "station": "ECOLE DES PARENTS DE DONGO / A",
              "voters": 701
            }
          ],
          "BOUMA": [
            {
              "station": "ECOLE DES PARENTS DE MOUNGANGUE / A",
              "voters": 46
            }
          ],
          "MOUNGANGUE": [
            {
              "station": "ECOLE DES PARENTS DE MOUNGANGUE / A",
              "voters": 46
            }
          ],
          "NGOMBE": [
            {
              "station": "ECOLE DES PARENTS DE MOUNGANGUE / A",
              "voters": 46
            }
          ],
          "MUNJA": [
            {
              "station": "ECOLE DES PARENTS DE MOUNGANGUE / A",
              "voters": 46
            }
          ],
          "BIKIKRI": [
            {
              "station": "ECOLE DES PARENTS DE NGOTI / A",
              "voters": 42
            }
          ],
          "NGOTI": [
            {
              "station": "ECOLE DES PARENTS DE NGOTI / A",
              "voters": 168
            }
          ],
          "(ZION)": [
            {
              "station": "ECOLE DES PARENTS DE NGOTI / A",
              "voters": 42
            }
          ],
          "CREEK": [
            {
              "station": "ECOLE MAT. PUB. MANOKA / A",
              "voters": 757
            }
          ],
          "NUMERO": [
            {
              "station": "ECOLE MAT. PUB. MANOKA / A",
              "voters": 757
            }
          ],
          "NYANGADOU": [
            {
              "station": "ECOLE MAT. PUB. MANOKA / A",
              "voters": 757
            }
          ],
          "SANDJE": [
            {
              "station": "ECOLE MAT. PUB. MANOKA / A",
              "voters": 1514
            }
          ]
        }
      },
      "NKAM": {
        "NDOBIAN": {
          "BANGOPE": [
            {
              "station": "ECOLE PUBLIQUE BANGOPE / A",
              "voters": 147
            }
          ],
          "BEHACK": [
            {
              "station": "ECOLE PUBLIQUE BEHACK / A",
              "voters": 149
            }
          ],
          "DJOUE": [
            {
              "station": "ECOLE PUBLIQUE BEHACK / A",
              "voters": 149
            }
          ],
          "MOUMA": [
            {
              "station": "ECOLE PUBLIQUE BEHACK / A",
              "voters": 149
            }
          ],
          "BAKOM": [
            {
              "station": "ECOLE PUBLIQUE CENTRE / A",
              "voters": 471
            }
          ],
          "NKONGMISSA": [
            {
              "station": "ECOLE PUBLIQUE CENTRE / A",
              "voters": 471
            }
          ],
          "FANDA": [
            {
              "station": "ECOLE PUBLIQUE DE FANDA / A",
              "voters": 122
            }
          ],
          "DJONGO": [
            {
              "station": "ECOLE PUBLIQUE DJONGO / A",
              "voters": 45
            }
          ],
          "NDOKOLO": [
            {
              "station": "ECOLE PUBLIQUE NDOKOLO / A",
              "voters": 86
            }
          ],
          "NDOTORONG": [
            {
              "station": "ECOLE PUBLIQUE NDOTORONG / A",
              "voters": 43
            }
          ],
          "NDOTTO": [
            {
              "station": "ECOLE PUBLIQUE NDOTTO II / A",
              "voters": 493
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE NDOTTO III / A",
              "voters": 155
            }
          ],
          "KWAKWACK": [
            {
              "station": "ECOLE PUBLIQUE NDOTTO K-K / A",
              "voters": 258
            }
          ],
          "NGOMA-BAKOUA": [
            {
              "station": "ECOLE PUBLIQUE NGOMA / A",
              "voters": 38
            }
          ],
          "RIKI": [
            {
              "station": "ECOLE PUBLIQUE RIKI / A",
              "voters": 104
            }
          ],
          "KONG-BAKOUA": [
            {
              "station": "FOYER KONG / A",
              "voters": 45
            }
          ],
          "MBIAM": [
            {
              "station": "FOYER MBIAM / A",
              "voters": 325
            }
          ],
          "MILOMBE": [
            {
              "station": "FOYER MILOMBE / A",
              "voters": 43
            }
          ],
          "MOYA": [
            {
              "station": "FOYER MOYA / A",
              "voters": 254
            }
          ],
          "NDOLAH": [
            {
              "station": "FOYER NDOLAH / A",
              "voters": 24
            }
          ],
          "NOUH": [
            {
              "station": "FOYER NOUH NGOBNAH / A",
              "voters": 202
            }
          ],
          "NGOBNAH": [
            {
              "station": "FOYER NOUH NGOBNAH / A",
              "voters": 202
            }
          ],
          "BOBA": [
            {
              "station": "FOYER TONGO / A",
              "voters": 183
            }
          ],
          "SOGHON": [
            {
              "station": "FOYER TONGO / A",
              "voters": 183
            }
          ],
          "TONGO": [
            {
              "station": "FOYER TONGO / A",
              "voters": 183
            }
          ],
          "NDOCKSA": [
            {
              "station": "LYCEE NDOBIAN / A",
              "voters": 552
            }
          ],
          "NDOYEM": [
            {
              "station": "LYCEE NDOBIAN / A",
              "voters": 172
            }
          ],
          "NDOUDOUMA": [
            {
              "station": "SAR/SM NDOBIAN / A",
              "voters": 225
            }
          ],
          "YACKLONG": [
            {
              "station": "SAR/SM NDOBIAN / A",
              "voters": 225
            }
          ]
        },
        "NKONDJOCK": {
          "ANCIENNE": [
            {
              "station": "ANCIENNE S/P / A",
              "voters": 204
            }
          ],
          "SOUS-PREFECTURE": [
            {
              "station": "ANCIENNE S/P / A",
              "voters": 204
            }
          ],
          "NDOCKBOUNE": [
            {
              "station": "CETIC NDOCK SAMBA MABOMBE / A",
              "voters": 180
            }
          ],
          "DEKOULE": [
            {
              "station": "DEKOULE FOYER / A",
              "voters": 463
            }
          ],
          "AUT": [
            {
              "station": "ECOLE ST PAUL MAKITA / A",
              "voters": 135
            }
          ],
          "NYLON": [
            {
              "station": "EM NYLON / A",
              "voters": 176
            }
          ],
          "ABINYAM": [
            {
              "station": "EP ABINYAM / A",
              "voters": 67
            }
          ],
          "BINDJEN": [
            {
              "station": "EP BINDJEN DOCBAN / A",
              "voters": 333
            }
          ],
          "DOCBAN": [
            {
              "station": "EP BINDJEN DOCBAN / A",
              "voters": 132
            }
          ],
          "DIDIPE": [
            {
              "station": "EP DIDIPE / A",
              "voters": 473
            }
          ],
          "DISSOUCK": [
            {
              "station": "EP DISSOUCK / A",
              "voters": 163
            }
          ],
          "KOUEDJOU": [
            {
              "station": "EP KOUEDJOU / A",
              "voters": 453
            }
          ],
          "MADIP": [
            {
              "station": "EP MADIP / A",
              "voters": 157
            }
          ],
          "MAKAKAN": [
            {
              "station": "EP MAKAKAN / A",
              "voters": 43
            }
          ],
          "MALE": [
            {
              "station": "EP MALE 6E / A",
              "voters": 669
            }
          ],
          "BIS": [
            {
              "station": "EP MALE BIS / A",
              "voters": 223
            }
          ],
          "MOLOCK": [
            {
              "station": "EP MOLOCK / A",
              "voters": 134
            }
          ],
          "NDOCKOUMA": [
            {
              "station": "EP NDOCKOUMA / A",
              "voters": 162
            }
          ],
          "NDOCKTIBA": [
            {
              "station": "EP NDOCKTIBA / A",
              "voters": 244
            }
          ],
          "SODENKAM": [
            {
              "station": "EP NKONDJOCK GPEA / A",
              "voters": 143
            }
          ],
          "SAHE": [
            {
              "station": "EP SAHE / A",
              "voters": 93
            }
          ],
          "NKONGMALANG": [
            {
              "station": "EP SAHE / A",
              "voters": 93
            }
          ],
          "SAM": [
            {
              "station": "EP SAM / A",
              "voters": 113
            }
          ],
          "TAM": [
            {
              "station": "EP TAM / A",
              "voters": 371
            }
          ],
          "MINE": [
            {
              "station": "FOYER DE MINE / A",
              "voters": 250
            }
          ],
          "MAKITA": [
            {
              "station": "FOYER MAKITA / A",
              "voters": 368
            }
          ],
          "MANGUELE": [
            {
              "station": "FOYER MANGUELE / A",
              "voters": 183
            }
          ],
          "MATIN": [
            {
              "station": "FOYER MATIN / A",
              "voters": 94
            }
          ],
          "GENDARMERIE": [
            {
              "station": "FOYER MBEMA / A",
              "voters": 694
            }
          ],
          "ROUTE": [
            {
              "station": "FOYER MBEMA / A",
              "voters": 848
            }
          ],
          "MATOUBE": [
            {
              "station": "FOYER MBEMA / A",
              "voters": 1894
            }
          ],
          "BENGA": [
            {
              "station": "FOYER MBENGA I / A",
              "voters": 199
            }
          ],
          "NDOCKBAN": [
            {
              "station": "FOYER NDOCKBAN ROUTE / A",
              "voters": 154
            }
          ],
          "NDOCKSAMBA": [
            {
              "station": "FOYER NDOCKSAMBA / A",
              "voters": 761
            }
          ],
          "NGOMAN": [
            {
              "station": "FOYER NGOMAN I / A",
              "voters": 232
            }
          ],
          "NJINGANG": [
            {
              "station": "FOYER NJINGANG / A",
              "voters": 165
            }
          ],
          "NKAKE": [
            {
              "station": "FOYER NKAKE / A",
              "voters": 18
            }
          ],
          "MBEMA": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 801
            }
          ],
          "NKONDJOCK": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 801
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE BILINGUE / A",
              "voters": 801
            }
          ],
          "MABOMBE": [
            {
              "station": "MABOMBE EM / A",
              "voters": 619
            }
          ],
          "PIONNIER": [
            {
              "station": "POSTE AGRICOLE BINDJEN P. / A",
              "voters": 201
            }
          ],
          "SOHOCK": [
            {
              "station": "POSTE AGRICOLE SOHOCK / A",
              "voters": 419
            }
          ],
          "YANDOCK": [
            {
              "station": "UEBC YANDOCK / A",
              "voters": 144
            }
          ]
        },
        "YABASSI": {
          "BAKEM": [
            {
              "station": "CASE COM. BAKEM / A",
              "voters": 34
            }
          ],
          "DIBENG": [
            {
              "station": "CASE COM. DIBENG / A",
              "voters": 149
            }
          ],
          "DIMBONG": [
            {
              "station": "CASE COM. DIMBONG / A",
              "voters": 395
            }
          ],
          "DJENG": [
            {
              "station": "CASE COM. DJENG / A",
              "voters": 75
            }
          ],
          "MANGOULE": [
            {
              "station": "CASE COM. MANGOULE I / A",
              "voters": 314
            }
          ],
          "NDOGBAO": [
            {
              "station": "CASE COM. NDOGBAO / A",
              "voters": 47
            }
          ],
          "NKOKOM": [
            {
              "station": "CASE COM. NKOKOM / A",
              "voters": 150
            }
          ],
          "NTABAKO": [
            {
              "station": "CASE COM. NTABAKO / A",
              "voters": 180
            }
          ],
          "BONABEKE": [
            {
              "station": "CENTRE DE SANTE DE BONABEKE / A",
              "voters": 378
            }
          ],
          "BWENE-OLI": [
            {
              "station": "CENTRE DE SANTE DE BWENE-OLI / A",
              "voters": 101
            }
          ],
          "MAMBA": [
            {
              "station": "CENTRE DE SANTE DE MAMBA / A",
              "voters": 84
            }
          ],
          "MANBA": [
            {
              "station": "CENTRE DE SANTE DE MAMBA / A",
              "voters": 84
            }
          ],
          "SIGA": [
            {
              "station": "CENTRE SOCIAL DE SIGA BONJO / A",
              "voters": 642
            }
          ],
          "MOUTIMBELEMBE": [
            {
              "station": "E.E.C MOUTIMBELEMBE / A",
              "voters": 103
            }
          ],
          "NKOLMBONG": [
            {
              "station": "ECOLE C.E.B.E.C NKOLMBONG / A",
              "voters": 413
            }
          ],
          "NDOGBELE": [
            {
              "station": "ECOLE MATERNELLE NDOGBELE I / A",
              "voters": 1018
            }
          ],
          "BANYA": [
            {
              "station": "ECOLE PUBLIQUE BANYA I / A",
              "voters": 2748
            }
          ],
          "BEBONDO": [
            {
              "station": "ECOLE PUBLIQUE BEBONDO / A",
              "voters": 81
            }
          ],
          "BONADISSAKE": [
            {
              "station": "ECOLE PUBLIQUE BONADISSAKE / A",
              "voters": 289
            }
          ],
          "BONANJOA": [
            {
              "station": "ECOLE PUBLIQUE BONANJOA / A",
              "voters": 111
            }
          ],
          "BODIMAM": [
            {
              "station": "ECOLE PUBLIQUE BONANYAMSI / A",
              "voters": 193
            }
          ],
          "BONEPEA": [
            {
              "station": "ECOLE PUBLIQUE BONEPEA / A",
              "voters": 66
            }
          ],
          "BONEPOUPA": [
            {
              "station": "ECOLE PUBLIQUE BONEPOUPA I / A",
              "voters": 1371
            }
          ],
          "BONJO": [
            {
              "station": "ECOLE PUBLIQUE BONJO / A",
              "voters": 1409
            }
          ],
          "DIWOM": [
            {
              "station": "ECOLE PUBLIQUE DIWOM / A",
              "voters": 367
            }
          ],
          "LAMBA": [
            {
              "station": "ECOLE PUBLIQUE LAMBA / A",
              "voters": 252
            }
          ],
          "MASSOUMBOU": [
            {
              "station": "ECOLE PUBLIQUE MASSOUMBOU VILLAGE / A",
              "voters": 350
            }
          ],
          "NDJEN": [
            {
              "station": "ECOLE PUBLIQUE NDJENGA / A",
              "voters": 56
            }
          ],
          "NDOGBANGUENGUE": [
            {
              "station": "ECOLE PUBLIQUE NDOGBANGUENGUE / A",
              "voters": 53
            }
          ],
          "NDOGPO": [
            {
              "station": "ECOLE PUBLIQUE NDOGPO / A",
              "voters": 109
            }
          ],
          "NDOKATI": [
            {
              "station": "ECOLE PUBLIQUE NDOKATI / A",
              "voters": 86
            }
          ],
          "NDOKNDACK": [
            {
              "station": "ECOLE PUBLIQUE NDOKNDACK / A",
              "voters": 66
            }
          ],
          "NKONGMALANG": [
            {
              "station": "ECOLE PUBLIQUE NKONGMALANG / A",
              "voters": 100
            }
          ],
          "NYAMTAN": [
            {
              "station": "ECOLE PUBLIQUE NYAMTAN / A",
              "voters": 127
            }
          ],
          "SOLE": [
            {
              "station": "ECOLE PUBLIQUE SOLE / A",
              "voters": 603
            }
          ],
          "TONDE": [
            {
              "station": "ECOLE PUBLIQUE TONDE CARREFOUR / A",
              "voters": 884
            }
          ],
          "NDOKAMA": [
            {
              "station": "EGLISE CATHOLIQUE DE NDOKAMA I / A",
              "voters": 198
            }
          ],
          "MAFIL": [
            {
              "station": "LAMBA GIC MAFIL / A",
              "voters": 34
            }
          ],
          "NDOKOKO": [
            {
              "station": "LYCEE NDOKOKO / A",
              "voters": 387
            }
          ],
          "CENTRE": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 548
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "LYCEE TECHNIQUE / A",
              "voters": 548
            }
          ]
        },
        "YINGUI": {
          "NDOKHENDE": [
            {
              "station": "CETIC DE YINGUI / A",
              "voters": 40
            }
          ],
          "KOH": [
            {
              "station": "CETIC DE YINGUI / A",
              "voters": 40
            }
          ],
          "MANINGA": [
            {
              "station": "E.P. DE NIPPOUN / A",
              "voters": 138
            }
          ],
          "MAKOMBE": [
            {
              "station": "E.P. DE NIPPOUN / A",
              "voters": 138
            }
          ],
          "NIPPOUM": [
            {
              "station": "E.P. DE NIPPOUN / A",
              "voters": 61
            }
          ],
          "NDEM": [
            {
              "station": "ECOLE MATERNELLE NDEM-KAK / A",
              "voters": 188
            }
          ],
          "IBOTI": [
            {
              "station": "ECOLE PUBLIQUE D'IBOTI / A",
              "voters": 228
            }
          ],
          "NDOCKAN": [
            {
              "station": "ECOLE PUBLIQUE DE  NDOCKANYACKMANINGA MAKOMBE / A",
              "voters": 109
            }
          ],
          "YACK": [
            {
              "station": "ECOLE PUBLIQUE DE  NDOCKANYACKMANINGA MAKOMBE / A",
              "voters": 109
            }
          ],
          "LOGDENG": [
            {
              "station": "ECOLE PUBLIQUE DE LOGDENG / A",
              "voters": 105
            }
          ],
          "NDOKMINOKON": [
            {
              "station": "ECOLE PUBLIQUE DE LOGDENG / A",
              "voters": 214
            }
          ],
          "MAKAI": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAI / A",
              "voters": 96
            }
          ],
          "LOG": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAI / A",
              "voters": 96
            }
          ],
          "MANANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MAKAI / A",
              "voters": 96
            }
          ],
          "MOSSE": [
            {
              "station": "ECOLE PUBLIQUE DE MOSSE / A",
              "voters": 84
            }
          ],
          "NDOKMEM": [
            {
              "station": "ECOLE PUBLIQUE NDOKMEM NORD / A",
              "voters": 94
            }
          ],
          "NORD": [
            {
              "station": "ECOLE PUBLIQUE NDOKMEM NORD / A",
              "voters": 94
            }
          ],
          "QUARTIER": [
            {
              "station": "ESPLANADE CHEFFERIE NDOCKTOUNA / A",
              "voters": 1286
            }
          ],
          "NDOCKTOUNA": [
            {
              "station": "ESPLANADE CHEFFERIE NDOCKTOUNA / A",
              "voters": 204
            }
          ],
          "III": [
            {
              "station": "FOYER MUNICIPAL / A",
              "voters": 306
            }
          ],
          "NUYE": [
            {
              "station": "HANGAR NUYE / A",
              "voters": 61
            }
          ],
          "EBO.O": [
            {
              "station": "HANGAR PUBLIC EBO.O / A",
              "voters": 123
            }
          ],
          "NDOKMEN": [
            {
              "station": "SAR SM / A",
              "voters": 97
            }
          ],
          "SUD": [
            {
              "station": "SAR SM / A",
              "voters": 97
            }
          ],
          "YINGUI": [
            {
              "station": "SOUPREFECTURE / A",
              "voters": 1833
            }
          ],
          "VILLAGE": [
            {
              "station": "SOUPREFECTURE / A",
              "voters": 524
            }
          ],
          "KAK": [
            {
              "station": "YINGUI VILLAGE / A",
              "voters": 155
            }
          ]
        }
      }
    }
  }
};