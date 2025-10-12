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
  "ADAMAOUA": {
    "name": {
      "en": "ADAMAWA",
      "fr": "ADAMAOUA"
    },
    "divisions": {
      "MAYO-BANYO": {
        "BANKIM": {
          "LONGRASS": [
            {
              "station": "E.P DE LONGRASS / A",
              "voters": 63
            }
          ],
          "MAYO": [
            {
              "station": "E.P DE MAYO MOUKA / A",
              "voters": 154
            }
          ],
          "MOUKA": [
            {
              "station": "E.P DE MAYO MOUKA / A",
              "voters": 154
            }
          ],
          "SANKI": [
            {
              "station": "E.P DE SARKI BAKA / A",
              "voters": 186
            }
          ],
          "TCHIMBLOK": [
            {
              "station": "ECOLE CATHOLIQUE DE BANKIM / A",
              "voters": 2547
            }
          ],
          "MELI": [
            {
              "station": "ECOLE PARENTS MELI TENBONG KE / A",
              "voters": 281
            }
          ],
          "TENBONG": [
            {
              "station": "ECOLE PARENTS MELI TENBONG KE / A",
              "voters": 281
            }
          ],
          "KE(BARRAGE": [
            {
              "station": "ECOLE PARENTS MELI TENBONG KE / A",
              "voters": 281
            }
          ],
          "LUNDI)": [
            {
              "station": "ECOLE PARENTS MELI TENBONG KE / A",
              "voters": 281
            }
          ],
          "MEWIDOK": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE BANKIM / A",
              "voters": 307
            }
          ],
          "NGUINKLO": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE BANKIM / A",
              "voters": 1875
            }
          ],
          "YIMBERE": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE YIMBERE /  A",
              "voters": 312
            }
          ],
          "DJANG": [
            {
              "station": "ECOLE PROTESTANTE DE DJANG ET TONG /  A",
              "voters": 762
            }
          ],
          "TONG": [
            {
              "station": "ECOLE PROTESTANTE DE DJANG ET TONG /  A",
              "voters": 762
            }
          ],
          "KOUROUM": [
            {
              "station": "ECOLE PROTESTANTE DE KOUROUM / A",
              "voters": 622
            }
          ],
          "MAGNAM": [
            {
              "station": "ECOLE PROTESTANTE DE KOUROUM / A",
              "voters": 622
            }
          ],
          "NASSARAO": [
            {
              "station": "ECOLE PROTESTANTE DE KOUROUM / A",
              "voters": 436
            }
          ],
          "SARKI": [
            {
              "station": "ECOLE PROTESTANTE DE KOUROUM / A",
              "voters": 622
            }
          ],
          "BAKA": [
            {
              "station": "ECOLE PROTESTANTE DE KOUROUM / A",
              "voters": 808
            }
          ],
          "MBIRIDJOM": [
            {
              "station": "ECOLE PUB. MBIRIDJOM / A",
              "voters": 594
            }
          ],
          "LINGAM": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE LINGAM / A",
              "voters": 932
            }
          ],
          "DJAYIE": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE NYAKONG / A",
              "voters": 1220
            }
          ],
          "MAYO-SEINI": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE NYAKONG / A",
              "voters": 877
            }
          ],
          "NYAKONG": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE NYAKONG / A",
              "voters": 2035
            }
          ],
          "ATTA": [
            {
              "station": "ECOLE PUBLIQUE DE ATTA / A",
              "voters": 2320
            }
          ],
          "BANDAM": [
            {
              "station": "ECOLE PUBLIQUE DE BANDAM / A",
              "voters": 1205
            }
          ],
          "DIEKI": [
            {
              "station": "ECOLE PUBLIQUE DE DIEKI / A",
              "voters": 615
            }
          ],
          "MBANDOUOH": [
            {
              "station": "ECOLE PUBLIQUE DE DIEKI / A",
              "voters": 615
            }
          ],
          "MVOUIBAM": [
            {
              "station": "ECOLE PUBLIQUE DE DIEKI / A",
              "voters": 768
            }
          ],
          "FOUABANG": [
            {
              "station": "ECOLE PUBLIQUE DE FOUABANG / A",
              "voters": 287
            }
          ],
          "HAINARE": [
            {
              "station": "ECOLE PUBLIQUE DE HAINARE ATTA / A",
              "voters": 476
            }
          ],
          "KING-KONG": [
            {
              "station": "ECOLE PUBLIQUE DE KING-KONG / A",
              "voters": 377
            }
          ],
          "KONGUI-DOUOH": [
            {
              "station": "ECOLE PUBLIQUE DE KONGUI-DOUOH / A",
              "voters": 653
            }
          ],
          "KOUMTCHOUM": [
            {
              "station": "ECOLE PUBLIQUE DE KOUMTCHOUM / A",
              "voters": 252
            }
          ],
          "MALIM": [
            {
              "station": "ECOLE PUBLIQUE DE MALIM / A",
              "voters": 283
            }
          ],
          "BOITIKONG": [
            {
              "station": "ECOLE PUBLIQUE DE MAPE SONEL / A",
              "voters": 608
            }
          ],
          "CITE": [
            {
              "station": "ECOLE PUBLIQUE DE MAPE SONEL / A",
              "voters": 608
            }
          ],
          "SONEL": [
            {
              "station": "ECOLE PUBLIQUE DE MAPE SONEL / A",
              "voters": 1216
            }
          ],
          "KIPOH": [
            {
              "station": "ECOLE PUBLIQUE DE MAPE SONEL / A",
              "voters": 1612
            }
          ],
          "MAPE": [
            {
              "station": "ECOLE PUBLIQUE DE MAPE SONEL / A",
              "voters": 608
            }
          ],
          "MBONDJANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBONDJANGA / A",
              "voters": 280
            }
          ],
          "MGBADJI": [
            {
              "station": "ECOLE PUBLIQUE DE MGBADJI / A",
              "voters": 248
            }
          ],
          "MOINKOING": [
            {
              "station": "ECOLE PUBLIQUE DE MOINKOING / A",
              "voters": 373
            }
          ],
          "MONGBE": [
            {
              "station": "ECOLE PUBLIQUE DE MONGBE / A",
              "voters": 468
            }
          ],
          "NDEM-NDEM": [
            {
              "station": "ECOLE PUBLIQUE DE NDEM-NDEM / A",
              "voters": 179
            }
          ],
          "NDOUMDJANDI": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMDJANDI / A",
              "voters": 581
            }
          ],
          "NDOUMDJOM": [
            {
              "station": "ECOLE PUBLIQUE DE NDOUMDJANDI / A",
              "voters": 1360
            }
          ],
          "GLORI": [
            {
              "station": "ECOLE PUBLIQUE DE NGATTI / A",
              "voters": 526
            }
          ],
          "MBOUGAM": [
            {
              "station": "ECOLE PUBLIQUE DE NGATTI / A",
              "voters": 526
            }
          ],
          "NGATTI": [
            {
              "station": "ECOLE PUBLIQUE DE NGATTI / A",
              "voters": 526
            }
          ],
          "MGBETOH": [
            {
              "station": "ECOLE PUBLIQUE DE NGLOCHIFEING / A",
              "voters": 249
            }
          ],
          "NGLOCHIFEING": [
            {
              "station": "ECOLE PUBLIQUE DE NGLOCHIFEING / A",
              "voters": 249
            }
          ],
          "NYAMBOYA": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBOYA / A",
              "voters": 1926
            }
          ],
          "KOTTI": [
            {
              "station": "ECOLE PUBLIQUE DE SOMIE / A",
              "voters": 1073
            }
          ],
          "YOKASSALA": [
            {
              "station": "ECOLE PUBLIQUE DE SOMIE / A",
              "voters": 1073
            }
          ],
          "SONGKOLONG": [
            {
              "station": "ECOLE PUBLIQUE DE SONGKOLONG / A",
              "voters": 1567
            }
          ],
          "TCHAMBA": [
            {
              "station": "ECOLE PUBLIQUE DE TCHAMBA / A",
              "voters": 543
            }
          ],
          "TCHIM": [
            {
              "station": "ECOLE PUBLIQUE DE TCHIM / A",
              "voters": 649
            }
          ],
          "NEW-TOWN": [
            {
              "station": "ECOLE PUBLIQUE GP.1 DE BANKIM / A",
              "voters": 1113
            }
          ],
          "SHE": [
            {
              "station": "ECOLE PUBLIQUE GP.1 DE BANKIM / A",
              "voters": 1113
            }
          ],
          "BANANIER": [
            {
              "station": "EP ANCIEN BANDAM / A",
              "voters": 82
            }
          ],
          "BARRAGE": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "MARDI": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "KOLEGI": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "MAIGORO": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "TUNGA": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "WAGONO": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "ZINA": [
            {
              "station": "EP BARRAGE MARDI / A",
              "voters": 85
            }
          ],
          "MISSILIKA": [
            {
              "station": "EP DE MISSILIKA / A",
              "voters": 76
            }
          ],
          "SANDAMA": [
            {
              "station": "EP DE MISSILIKA / A",
              "voters": 76
            }
          ],
          "LOUMDE1": [
            {
              "station": "EP LOUMDE / A",
              "voters": 65
            }
          ],
          "LOUMDE2": [
            {
              "station": "EP LOUMDE / A",
              "voters": 65
            }
          ],
          "NAKANI": [
            {
              "station": "EP LOUMDE / A",
              "voters": 130
            }
          ],
          "NJISSEN": [
            {
              "station": "EP MVOUBAM / A",
              "voters": 153
            }
          ],
          "BONABERI": [
            {
              "station": "EP NEW NGONG / A",
              "voters": 54
            }
          ],
          "NEW": [
            {
              "station": "EP NEW NGONG / A",
              "voters": 54
            }
          ],
          "NGONG": [
            {
              "station": "EP NEW NGONG / A",
              "voters": 54
            }
          ],
          "NGOULORI": [
            {
              "station": "EP NGOULORI / A",
              "voters": 76
            }
          ],
          "BAKASSI": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 202
            }
          ],
          "ABBA": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "COTE": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "CAMPEMENT": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 341
            }
          ],
          "KOTOKO": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 188
            }
          ],
          "DOUOUH": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "MOLEMA": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "BAMOUN": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "TANPON": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "KONGUI": [
            {
              "station": "EP TAPON KONGUI / A",
              "voters": 120
            }
          ],
          "SA'AH": [
            {
              "station": "EP TONG / A",
              "voters": 74
            }
          ],
          "ADAM": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "GRAND": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "BADAY": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "ARABE": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "CAMPEMENTS": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "UNIS": [
            {
              "station": "EPP CAMPEMENTS UNIS / A",
              "voters": 68
            }
          ],
          "BOUPLE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 878
            }
          ],
          "CHEFFERIE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 954
            }
          ],
          "MWUMCHIM": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 9009
            }
          ],
          "NDANGUE": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 5336
            }
          ],
          "TONEGOUONG": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 878
            }
          ],
          "YIWET": [
            {
              "station": "FOYER COMMUNAUTAIRE DE BANKIM / A",
              "voters": 2267
            }
          ],
          "QUARTIER": [
            {
              "station": "FOYER MUNICIPAL DE BANKIM / A",
              "voters": 1509
            }
          ],
          "HAOUSSA": [
            {
              "station": "FOYER MUNICIPAL DE BANKIM / A",
              "voters": 1389
            }
          ],
          "QUARTIERS": [
            {
              "station": "MISSION CATHOLIQUE DE BANKIM / A",
              "voters": 343
            }
          ],
          "YAMBA": [
            {
              "station": "MISSION CATHOLIQUE DE BANKIM / A",
              "voters": 343
            }
          ],
          "BANSO": [
            {
              "station": "MISSION CATHOLIQUE DE BANKIM / A",
              "voters": 343
            }
          ],
          "PETEL": [
            {
              "station": "PLACE DU MARCHE ATTA PETEL / A",
              "voters": 911
            }
          ],
          "BINI": [
            {
              "station": "PLACE DU MARCHE ATTA PETEL / A",
              "voters": 405
            }
          ],
          "CHINGNAMBO": [
            {
              "station": "PLACE DU MARCHE DE CHINGNAMBO / A",
              "voters": 286
            }
          ],
          "SOMIE": [
            {
              "station": "PLACE DU MARCHE DE HAINARE SOMIE / A",
              "voters": 1298
            }
          ],
          "KIMI": [
            {
              "station": "PLACE DU MARCHE DE KIMI PETEL / A",
              "voters": 651
            }
          ],
          "KWI": [
            {
              "station": "PLACE DU MARCHE DE KWI DAN(ALI MALI) / A",
              "voters": 570
            }
          ],
          "DAN": [
            {
              "station": "PLACE DU MARCHE DE KWI DAN(ALI MALI) / A",
              "voters": 570
            }
          ],
          "ALI": [
            {
              "station": "PLACE DU MARCHE DE KWI DAN(ALI MALI) / A",
              "voters": 570
            }
          ],
          "MALI": [
            {
              "station": "PLACE DU MARCHE DE KWI DAN(ALI MALI) / A",
              "voters": 570
            }
          ],
          "CHATEAU": [
            {
              "station": "PLACE DU MARCHE DE NKLONG / A",
              "voters": 17
            }
          ],
          "MBODOUM": [
            {
              "station": "PLACE DU MARCHE DE NKLONG / A",
              "voters": 17
            }
          ],
          "NGAH": [
            {
              "station": "PLACE DU MARCHE DE NKLONG / A",
              "voters": 17
            }
          ],
          "NKLONG": [
            {
              "station": "PLACE DU MARCHE DE NKLONG / A",
              "voters": 17
            }
          ]
        },
        "BANYO": {
          "KOLERE": [
            {
              "station": "DEL DEP ELEVAGE DE MAYO-BANYO / A",
              "voters": 2203
            }
          ],
          "PASTORAL": [
            {
              "station": "DEL DEP ELEVAGE DE MAYO-BANYO / A",
              "voters": 2203
            }
          ],
          "NDOGNAM": [
            {
              "station": "E. PUBLIQUE NDOGNAM TARAM YABAM  FOULBE / A",
              "voters": 470
            }
          ],
          "TONGODJI": [
            {
              "station": "E.P DE TONGODJI / A",
              "voters": 309
            }
          ],
          "LEGAL": [
            {
              "station": "ECOLE ANNEXE GROUPE 1 DE BANYO / A",
              "voters": 2533
            }
          ],
          "GORO": [
            {
              "station": "ECOLE ANNEXE GROUPE 1 DE BANYO / A",
              "voters": 2533
            }
          ],
          "MBOULADJI": [
            {
              "station": "ECOLE ANNEXE GROUPE 1 DE BANYO / A",
              "voters": 3207
            }
          ],
          "DARES": [
            {
              "station": "ECOLE ANNEXE TICKET / A",
              "voters": 1579
            }
          ],
          "SALAM": [
            {
              "station": "ECOLE ANNEXE TICKET / A",
              "voters": 1579
            }
          ],
          "TICKET": [
            {
              "station": "ECOLE ANNEXE TICKET / A",
              "voters": 1579
            }
          ],
          "SABAL": [
            {
              "station": "ECOLE DES PARENTS / A",
              "voters": 96
            }
          ],
          "BOURDOU": [
            {
              "station": "ECOLE DES PARENTS / A",
              "voters": 96
            }
          ],
          "GASSANGUEL": [
            {
              "station": "ECOLE DES PARENTS DE HORE  GASSANGUEL / A",
              "voters": 118
            }
          ],
          "MAGNAM": [
            {
              "station": "ECOLE DES PARENTS DE HORE  GASSANGUEL / A",
              "voters": 118
            }
          ],
          "FOOUROU": [
            {
              "station": "ECOLE DES PARENTS DE KOUI MAYO  FOOUROU / A",
              "voters": 836
            }
          ],
          "BODJI": [
            {
              "station": "ECOLE DES PARENTS DE KOUI MAYO BODJI /  A",
              "voters": 155
            }
          ],
          "MBERKOU": [
            {
              "station": "ECOLE DES PARENTS DE MAYO BANYO  MBERKOU / A",
              "voters": 126
            }
          ],
          "NOMA": [
            {
              "station": "ECOLE DES PARENTS DE MAYO BOUTALI  NOMA / A",
              "voters": 106
            }
          ],
          "DJANABA": [
            {
              "station": "ECOLE DES PARENTS DE SEBORE DJANABA /  A",
              "voters": 88
            }
          ],
          "WAMGUERI": [
            {
              "station": "ECOLE DES PARENTS DE WAMGUERI / A",
              "voters": 616
            }
          ],
          "GAMTI": [
            {
              "station": "ECOLE DES PARENTS GAMTI / A",
              "voters": 200
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE DES PARENTS GAMTI / A",
              "voters": 8248
            }
          ],
          "KELELE": [
            {
              "station": "ECOLE DES PARENTS GAMTI / A",
              "voters": 2843
            }
          ],
          "LOUM": [
            {
              "station": "ECOLE DES PARENTS MAYO LOUM / A",
              "voters": 468
            }
          ],
          "GARLADJI": [
            {
              "station": "ECOLE FRANCO ARABE DE BANYO / A",
              "voters": 3135
            }
          ],
          "KILAROU": [
            {
              "station": "ECOLE FRANCO ARABE DE BANYO / A",
              "voters": 1570
            }
          ],
          "MAIANGOUA": [
            {
              "station": "ECOLE FRANCO ARABE DE BANYO / A",
              "voters": 1570
            }
          ],
          "SARKI": [
            {
              "station": "ECOLE FRANCO ARABE DE BANYO / A",
              "voters": 1570
            }
          ],
          "YAKI": [
            {
              "station": "ECOLE FRANCO ARABE DE BANYO / A",
              "voters": 1570
            }
          ],
          "DJOUTA": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 6221
            }
          ],
          "FADA": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 8117
            }
          ],
          "KOUI": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 2759
            }
          ],
          "DJAMNATI": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 2236
            }
          ],
          "MBAMTI": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 7348
            }
          ],
          "DJOUMBARE": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 4191
            }
          ],
          "MBEWERE": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 4377
            }
          ],
          "PEDENG": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 1844
            }
          ],
          "TCHABBAL": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 2507
            }
          ],
          "SEOUDI": [
            {
              "station": "ECOLE MATERNELLE ANNEXE DE BANYO / A",
              "voters": 2119
            }
          ],
          "BOUTALI": [
            {
              "station": "ECOLE ONG DE MAYO BOUTALI KATARKO / A",
              "voters": 276
            }
          ],
          "KATARKO": [
            {
              "station": "ECOLE ONG DE MAYO BOUTALI KATARKO / A",
              "voters": 2692
            }
          ],
          "DJAMAN": [
            {
              "station": "ECOLE PARENTS MAYO DJARANDI B,  DJAMAN / A",
              "voters": 162
            }
          ],
          "BARAINI": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE BANYO / A",
              "voters": 1720
            }
          ],
          "SABONGARI": [
            {
              "station": "ECOLE PRIVEE CATHOLIQUE DE BANYO / A",
              "voters": 2145
            }
          ],
          "ALLAT": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE ALLAT / A",
              "voters": 3867
            }
          ],
          "BOUDJOUNKOURA": [
            {
              "station": "ECOLE PUBLIQUE BOUDJOUNKOURA / A",
              "voters": 358
            }
          ],
          "ALTINE": [
            {
              "station": "ECOLE PUBLIQUE DE ALTINE / A",
              "voters": 203
            }
          ],
          "MBONSOUM": [
            {
              "station": "ECOLE PUBLIQUE DE ALTINE / A",
              "voters": 203
            }
          ],
          "ASSAWE": [
            {
              "station": "ECOLE PUBLIQUE DE ASSAWE / A",
              "voters": 344
            }
          ],
          "DADAWAL": [
            {
              "station": "ECOLE PUBLIQUE DE DADAWAL / A",
              "voters": 166
            }
          ],
          "DJEM": [
            {
              "station": "ECOLE PUBLIQUE DE DJEM / A",
              "voters": 288
            }
          ],
          "GANDOUA": [
            {
              "station": "ECOLE PUBLIQUE DE GANDOUA / A",
              "voters": 460
            }
          ],
          "WAWA": [
            {
              "station": "ECOLE PUBLIQUE DE GANDOUA / A",
              "voters": 2709
            }
          ],
          "HORE": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO KELELE / A",
              "voters": 1391
            }
          ],
          "KASSALA": [
            {
              "station": "ECOLE PUBLIQUE DE KASSALA WAWA / A",
              "voters": 2565
            }
          ],
          "DJARANDI": [
            {
              "station": "ECOLE PUBLIQUE DE KOUI MAYO DJARANDI /  A",
              "voters": 407
            }
          ],
          "LABBARE": [
            {
              "station": "ECOLE PUBLIQUE DE LABBARE BAYA / A",
              "voters": 372
            }
          ],
          "BAYA": [
            {
              "station": "ECOLE PUBLIQUE DE LABBARE BAYA / A",
              "voters": 170
            }
          ],
          "SEINI": [
            {
              "station": "ECOLE PUBLIQUE DE LABBARE SEINI / A",
              "voters": 202
            }
          ],
          "MINGUEM": [
            {
              "station": "ECOLE PUBLIQUE DE LABBARE SEINI / A",
              "voters": 858
            }
          ],
          "LASSEL": [
            {
              "station": "ECOLE PUBLIQUE DE LASSEL / A",
              "voters": 188
            }
          ],
          "LOUGGUEL": [
            {
              "station": "ECOLE PUBLIQUE DE LOUGGUEL / A",
              "voters": 97
            }
          ],
          "MAKKAM": [
            {
              "station": "ECOLE PUBLIQUE DE MAKKAM / A",
              "voters": 220
            }
          ],
          "BADJI": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO BADJI FOULBE /  A",
              "voters": 358
            }
          ],
          "LADDE": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO DJARANDI  LADDE / A",
              "voters": 182
            }
          ],
          "DOUROU": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO DOUROU / A",
              "voters": 80
            }
          ],
          "LELEWAL": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO LELEWAL / A",
              "voters": 221
            }
          ],
          "LINGWA": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO LINGWA / A",
              "voters": 161
            }
          ],
          "MINSANKAR": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO-BANYO  MINSANKAR / A",
              "voters": 119
            }
          ],
          "GORDI": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO-BANYO  MINSANKAR / A",
              "voters": 119
            }
          ],
          "VOURE": [
            {
              "station": "ECOLE PUBLIQUE DE MBAH / A",
              "voters": 808
            }
          ],
          "MBAH": [
            {
              "station": "ECOLE PUBLIQUE DE MBAH / A",
              "voters": 690
            }
          ],
          "ALARBA": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI ALARBA / A",
              "voters": 387
            }
          ],
          "BEKA": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI BEKA / A",
              "voters": 113
            }
          ],
          "DIPELE": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI DIPELE / A",
              "voters": 141
            }
          ],
          "LAINDE": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI LAINDE / A",
              "voters": 214
            }
          ],
          "LAINGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI LAINGA / A",
              "voters": 431
            }
          ],
          "NYALEDJI": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMTI NYALEDJI / A",
              "voters": 149
            }
          ],
          "MBASSEWA": [
            {
              "station": "ECOLE PUBLIQUE DE MBASSEWA WAWA / A",
              "voters": 559
            }
          ],
          "MBENGUEDJE": [
            {
              "station": "ECOLE PUBLIQUE DE MBENGUEDJE FOULBE  /A",
              "voters": 806
            }
          ],
          "MBONHARI": [
            {
              "station": "ECOLE PUBLIQUE DE MBONHARI / A",
              "voters": 450
            }
          ],
          "NDI": [
            {
              "station": "ECOLE PUBLIQUE DE NDI WAWA / A",
              "voters": 329
            }
          ],
          "NGAMNI": [
            {
              "station": "ECOLE PUBLIQUE DE NGAMNI  MBAMWOURKE / A",
              "voters": 275
            }
          ],
          "MBAMWOURKE": [
            {
              "station": "ECOLE PUBLIQUE DE NGAMNI  MBAMWOURKE / A",
              "voters": 275
            }
          ],
          "NGOUM": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUM FOULBE / A",
              "voters": 1242
            }
          ],
          "NYARA": [
            {
              "station": "ECOLE PUBLIQUE DE NYARA SEBORE DARLE  /A",
              "voters": 297
            }
          ],
          "SEBORE": [
            {
              "station": "ECOLE PUBLIQUE DE NYARA SEBORE DARLE  /A",
              "voters": 385
            }
          ],
          "DARLE": [
            {
              "station": "ECOLE PUBLIQUE DE NYARA SEBORE DARLE  /A",
              "voters": 297
            }
          ],
          "NYATTI": [
            {
              "station": "ECOLE PUBLIQUE DE NYATTI / A",
              "voters": 266
            }
          ],
          "NYAWA": [
            {
              "station": "ECOLE PUBLIQUE DE NYAWA / A",
              "voters": 240
            }
          ],
          "SAKKOUDE": [
            {
              "station": "ECOLE PUBLIQUE DE SAKKOUDE / A",
              "voters": 220
            }
          ],
          "SAMBOLABO": [
            {
              "station": "ECOLE PUBLIQUE DE SAMBOLABO / A",
              "voters": 1731
            }
          ],
          "SISSIM": [
            {
              "station": "ECOLE PUBLIQUE DE SISSIM / A",
              "voters": 125
            }
          ],
          "SIRI": [
            {
              "station": "ECOLE PUBLIQUE DE TARAM SIRI / A",
              "voters": 730
            }
          ],
          "YABAM": [
            {
              "station": "ECOLE PUBLIQUE DE TARAM YABAM FOULBE  /A",
              "voters": 569
            }
          ],
          "GNAGNIRI": [
            {
              "station": "ECOLE PUBLIQUE DE TCHABBAL GNAGNIRI /  A",
              "voters": 178
            }
          ],
          "MBITI": [
            {
              "station": "ECOLE PUBLIQUE DE TCHABBAL MBITI / A",
              "voters": 210
            }
          ],
          "TOUKOUROUA": [
            {
              "station": "ECOLE PUBLIQUE DE TOUKOUROUA / A",
              "voters": 285
            }
          ],
          "YANI": [
            {
              "station": "ECOLE PUBLIQUE GP3 DE BANYO / A",
              "voters": 2457
            }
          ],
          "WOUTA": [
            {
              "station": "ECOLE PUBLIQUE GP3 DE BANYO / A",
              "voters": 598
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE GP3 DE BANYO / A",
              "voters": 1994
            }
          ],
          "ADJIA": [
            {
              "station": "ECOLE PUBLIQUE GP3 DE BANYO / A",
              "voters": 598
            }
          ],
          "GALDIMA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 4 DE BANYO / A",
              "voters": 1239
            }
          ],
          "MALOUMRI": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 4 DE BANYO / A",
              "voters": 1565
            }
          ],
          "TACHA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 4 DE BANYO / A",
              "voters": 1565
            }
          ],
          "TARAM": [
            {
              "station": "ECOLE PUBLIQUE HORE TARAM FOULBE / A",
              "voters": 2441
            }
          ],
          "FOULBE": [
            {
              "station": "ECOLE PUBLIQUE HORE TARAM FOULBE / A",
              "voters": 2575
            }
          ],
          "TORBI": [
            {
              "station": "ECOLE PUBLIQUE HORE TARAM TORBI / A",
              "voters": 409
            }
          ],
          "LESS": [
            {
              "station": "ECOLE PUBLIQUE LESS WOUROUM / A",
              "voters": 132
            }
          ],
          "WOUROUM": [
            {
              "station": "ECOLE PUBLIQUE LESS WOUROUM / A",
              "voters": 769
            }
          ],
          "BANYO": [
            {
              "station": "ECOLE PUBLIQUE MAYO BANYO BARIKI / A",
              "voters": 626
            }
          ],
          "BARIKI": [
            {
              "station": "ECOLE PUBLIQUE MAYO BANYO BARIKI / A",
              "voters": 361
            }
          ],
          "MATTI": [
            {
              "station": "ECOLE PUBLIQUE MAYO BANYO MATTI / A",
              "voters": 182
            }
          ],
          "SEOUSSI": [
            {
              "station": "ECOLE PUBLIQUE MAYO SEOUSSI / A",
              "voters": 129
            }
          ],
          "NYAMSOUMRE": [
            {
              "station": "ECOLE PUBLIQUE NYAMSOUMRE / A",
              "voters": 234
            }
          ],
          "OUMYARI": [
            {
              "station": "ECOLE PUBLIQUE OUMYARI WAWA / A",
              "voters": 457
            }
          ],
          "SANGOL": [
            {
              "station": "ECOLE PUBLIQUE SANGOL SO'O / A",
              "voters": 125
            }
          ],
          "SO'O": [
            {
              "station": "ECOLE PUBLIQUE SANGOL SO'O / A",
              "voters": 125
            }
          ],
          "KOULADJE": [
            {
              "station": "EP DE MAYO KOULADJE / A",
              "voters": 163
            }
          ],
          "MAYO-BANYO": [
            {
              "station": "EP DE MOUFOUM / A",
              "voters": 55
            }
          ],
          "MOUFOUM": [
            {
              "station": "EP DE MOUFOUM / A",
              "voters": 55
            }
          ],
          "CARREFOUR": [
            {
              "station": "EP DE YOUKSA / A",
              "voters": 152
            }
          ],
          "TAPAWA": [
            {
              "station": "EP DE YOUKSA / A",
              "voters": 304
            }
          ],
          "YOUKOTODOU": [
            {
              "station": "EP DE YOUKSA / A",
              "voters": 152
            }
          ],
          "YOUKSA": [
            {
              "station": "EP DE YOUKSA / A",
              "voters": 152
            }
          ],
          "CAMP": [
            {
              "station": "HANGAR DE NGARBER / A",
              "voters": 85
            }
          ],
          "BIR": [
            {
              "station": "HANGAR DE NGARBER / A",
              "voters": 85
            }
          ],
          "SANS": [
            {
              "station": "LYCEE BILINGUE DE BANYO / A",
              "voters": 86
            }
          ],
          "PEINTURE": [
            {
              "station": "LYCEE BILINGUE DE BANYO / A",
              "voters": 86
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "MAIRIE DE BANYO / A",
              "voters": 1310
            }
          ],
          "BANI": [
            {
              "station": "PLACE DU MARCHE DE BANI LOUGGA  TCHOLLI / A",
              "voters": 526
            }
          ],
          "LOUGGA": [
            {
              "station": "PLACE DU MARCHE DE BANI LOUGGA  TCHOLLI / A",
              "voters": 703
            }
          ],
          "TCHOLLI": [
            {
              "station": "PLACE DU MARCHE DE BANI LOUGGA  TCHOLLI / A",
              "voters": 526
            }
          ],
          "GASSIRI": [
            {
              "station": "PLACE DU MARCHE DE NGOUM GASSIRI / A",
              "voters": 135
            }
          ]
        },
        "MAYO-DARLE": {
          "BONABERI": [
            {
              "station": "ECOLE BILINGUE DE MAYO-DARLE / A",
              "voters": 1940
            }
          ],
          "LOUGGA": [
            {
              "station": "ECOLE BILINGUE DE MAYO-DARLE / A",
              "voters": 970
            }
          ],
          "FOOUROU": [
            {
              "station": "ECOLE BILINGUE DE MAYO-DARLE / A",
              "voters": 970
            }
          ],
          "SEKANDE": [
            {
              "station": "ECOLE BILINGUE DE MAYO-DARLE / A",
              "voters": 970
            }
          ],
          "BOUNG": [
            {
              "station": "ECOLE DES PARENTS DE BOUNG 2 / A",
              "voters": 81
            }
          ],
          "MBALANG": [
            {
              "station": "ECOLE DES PARENTS DE MBALANG / A",
              "voters": 172
            }
          ],
          "ASSAWE": [
            {
              "station": "ECOLE DES PARENTS DE MBOUNOUKOUM / A",
              "voters": 158
            }
          ],
          "BOUTOUKWAN": [
            {
              "station": "ECOLE DES PARENTS DE MBOUNOUKOUM / A",
              "voters": 158
            }
          ],
          "MBOUNOUKOUM": [
            {
              "station": "ECOLE DES PARENTS DE MBOUNOUKOUM / A",
              "voters": 158
            }
          ],
          "GOMNJOR": [
            {
              "station": "ECOLE DES PARENTS MAYO-DARLE MINES /  A",
              "voters": 624
            }
          ],
          "KOUZA": [
            {
              "station": "ECOLE DES PARENTS MAYO-DARLE MINES /  A",
              "voters": 624
            }
          ],
          "DARLE": [
            {
              "station": "ECOLE DES PARENTS MAYO-DARLE MINES /  A",
              "voters": 624
            }
          ],
          "MINES": [
            {
              "station": "ECOLE DES PARENTS MAYO-DARLE MINES /  A",
              "voters": 624
            }
          ],
          "CAMPEMENT": [
            {
              "station": "ECOLE FRANCO-ARABE DE MAYO-DARLE / A",
              "voters": 276
            }
          ],
          "CHATEAU": [
            {
              "station": "ECOLE FRANCO-ARABE DE MAYO-DARLE / A",
              "voters": 276
            }
          ],
          "GADA": [
            {
              "station": "ECOLE FRANCO-ARABE DE MAYO-DARLE / A",
              "voters": 1272
            }
          ],
          "PLAN": [
            {
              "station": "ECOLE FRANCO-ARABE DE MAYO-DARLE / A",
              "voters": 2544
            }
          ],
          "TICKET": [
            {
              "station": "ECOLE FRANCO-ARABE DE MAYO-DARLE / A",
              "voters": 276
            }
          ],
          "TICKET-CHEFFERIE": [
            {
              "station": "ECOLE PRIV. CATH. MAYO DARLE / A",
              "voters": 996
            }
          ],
          "BAMBOL": [
            {
              "station": "ECOLE PUBLIQUE DE BAMBOL / A",
              "voters": 283
            }
          ],
          "LESS": [
            {
              "station": "ECOLE PUBLIQUE DE BAMBOL / A",
              "voters": 283
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE PUBLIQUE DE BAMBOL / A",
              "voters": 907
            }
          ],
          "BOUMDO": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMDO / A",
              "voters": 1432
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMDO / A",
              "voters": 716
            }
          ],
          "LOUGGODJE": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMDO / A",
              "voters": 716
            }
          ],
          "DJAGUI": [
            {
              "station": "ECOLE PUBLIQUE DE BOUMDO / A",
              "voters": 716
            }
          ],
          "GUISSIMI": [
            {
              "station": "ECOLE PUBLIQUE DE GUISSIMI / A",
              "voters": 808
            }
          ],
          "HAMOA": [
            {
              "station": "ECOLE PUBLIQUE DE HAMOA / A",
              "voters": 424
            }
          ],
          "HORE": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "MAYO-DARLE": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "MAYO-": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "DANIEL": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "NGATTA": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "SATTABE": [
            {
              "station": "ECOLE PUBLIQUE DE HORE MAYO DARLE / A",
              "voters": 637
            }
          ],
          "KEBAM": [
            {
              "station": "ECOLE PUBLIQUE DE KEBAM / A",
              "voters": 111
            }
          ],
          "FOULBE": [
            {
              "station": "ECOLE PUBLIQUE DE KEBAM / A",
              "voters": 111
            }
          ],
          "SAKADJE": [
            {
              "station": "ECOLE PUBLIQUE DE KEBAM / A",
              "voters": 111
            }
          ],
          "MAYO-DJINGA": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO-DJINGA / A",
              "voters": 581
            }
          ],
          "NGNAGBI": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO-DJINGA / A",
              "voters": 581
            }
          ],
          "LAMOU": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMGUERI / A",
              "voters": 440
            }
          ],
          "GOTEL": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMGUERI / A",
              "voters": 440
            }
          ],
          "MAGNI": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMGUERI / A",
              "voters": 440
            }
          ],
          "MBAMGUERI": [
            {
              "station": "ECOLE PUBLIQUE DE MBAMGUERI / A",
              "voters": 440
            }
          ],
          "GASSOL": [
            {
              "station": "ECOLE PUBLIQUE DE MBILANG / A",
              "voters": 185
            }
          ],
          "MBILANG": [
            {
              "station": "ECOLE PUBLIQUE DE MBILANG / A",
              "voters": 185
            }
          ],
          "NGUESSAM": [
            {
              "station": "ECOLE PUBLIQUE DE NGUESSAM / A",
              "voters": 386
            }
          ],
          "NYARA": [
            {
              "station": "ECOLE PUBLIQUE DE NGUESSAM / A",
              "voters": 193
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE PUBLIQUE DE NYALANG / A",
              "voters": 343
            }
          ],
          "MONDIAL": [
            {
              "station": "ECOLE PUBLIQUE DE NYALANG / A",
              "voters": 343
            }
          ],
          "NYALANG": [
            {
              "station": "ECOLE PUBLIQUE DE NYALANG / A",
              "voters": 343
            }
          ],
          "SAMANDJA": [
            {
              "station": "ECOLE PUBLIQUE DE NYALANG / A",
              "voters": 343
            }
          ],
          "MAYO-GOLBI": [
            {
              "station": "ECOLE PUBLIQUE DE PANGARI / A",
              "voters": 1015
            }
          ],
          "MAYO-SEINI": [
            {
              "station": "ECOLE PUBLIQUE DE PANGARI / A",
              "voters": 660
            }
          ],
          "PANGARI": [
            {
              "station": "ECOLE PUBLIQUE DE PANGARI / A",
              "voters": 574
            }
          ],
          "MAGADJANG": [
            {
              "station": "ECOLE PUBLIQUE DE RIBAO / A",
              "voters": 1108
            }
          ],
          "MAYO-NGNIDOUGA": [
            {
              "station": "ECOLE PUBLIQUE DE RIBAO / A",
              "voters": 1549
            }
          ],
          "NGAMGA": [
            {
              "station": "ECOLE PUBLIQUE DE RIBAO / A",
              "voters": 1549
            }
          ],
          "NGNOGO": [
            {
              "station": "ECOLE PUBLIQUE DE RIBAO / A",
              "voters": 1108
            }
          ],
          "RIBAO": [
            {
              "station": "ECOLE PUBLIQUE DE RIBAO / A",
              "voters": 1108
            }
          ],
          "BOUDOWA": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO YOBI / A",
              "voters": 441
            }
          ],
          "GOYAVE": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO YOBI / A",
              "voters": 441
            }
          ],
          "BADJANG": [
            {
              "station": "ECOLE PUBLIQUE DE YIMBERE CHEFFERIE /  A",
              "voters": 169
            }
          ],
          "YIMEBERE": [
            {
              "station": "ECOLE PUBLIQUE DE YIMBERE CHEFFERIE /  A",
              "voters": 359
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE PUBLIQUE DE YIMBERE CHEFFERIE /  A",
              "voters": 169
            }
          ],
          "BANYE": [
            {
              "station": "ECOLE PUBLIQUE DE YIMBERE PLATEAU / A",
              "voters": 190
            }
          ],
          "PLATEAU": [
            {
              "station": "ECOLE PUBLIQUE DE YIMBERE PLATEAU / A",
              "voters": 190
            }
          ],
          "BOGGOLE": [
            {
              "station": "ECOLE PUBLIQUE DE YOLI / A",
              "voters": 244
            }
          ],
          "NYAWA": [
            {
              "station": "ECOLE PUBLIQUE DE YOLI / A",
              "voters": 693
            }
          ],
          "YOLI": [
            {
              "station": "ECOLE PUBLIQUE DE YOLI / A",
              "voters": 244
            }
          ],
          "FADA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE  MAYO-DARLE / A",
              "voters": 2025
            }
          ],
          "TACHA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE  MAYO-DARLE / A",
              "voters": 2025
            }
          ],
          "YOKA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE  MAYO-DARLE / A",
              "voters": 2025
            }
          ],
          "SALA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I DE  MAYO-DARLE / A",
              "voters": 2025
            }
          ],
          "GBAYA": [
            {
              "station": "GBPS GBAYA / A",
              "voters": 202
            }
          ],
          "KALVARI": [
            {
              "station": "GBPS GBAYA / A",
              "voters": 643
            }
          ],
          "MAYO-BOUNOUWA": [
            {
              "station": "GBPS GBAYA / A",
              "voters": 643
            }
          ],
          "WOURO": [
            {
              "station": "GBPS GBAYA / A",
              "voters": 1751
            }
          ],
          "YOBI": [
            {
              "station": "GBPS GBAYA / A",
              "voters": 1751
            }
          ],
          "TAPARE": [
            {
              "station": "GOV'T BILINGUAL PRIMARY SCHOOL TAPARE  /A",
              "voters": 164
            }
          ],
          "DJAOURO": [
            {
              "station": "LYCEE BILINGUE DE MAYO-DARLE / A",
              "voters": 135
            }
          ],
          "MANA": [
            {
              "station": "LYCEE BILINGUE DE MAYO-DARLE / A",
              "voters": 135
            }
          ],
          "LEDJAM": [
            {
              "station": "LYCEE BILINGUE DE MAYO-DARLE / A",
              "voters": 135
            }
          ],
          "NGADAM": [
            {
              "station": "LYCEE BILINGUE DE MAYO-DARLE / A",
              "voters": 135
            }
          ]
        }
      },
      "VINA": {
        "BELEL": {
          "CAMP": [
            {
              "station": "DEL D'ARRONDISSEMENT D'ELEVAGE / A",
              "voters": 1231
            }
          ],
          "ABATTOIR": [
            {
              "station": "DEL D'ARRONDISSEMENT D'ELEVAGE / A",
              "voters": 678
            }
          ],
          "SELAL": [
            {
              "station": "E.P DE SELAL DJERTOU / A",
              "voters": 279
            }
          ],
          "DJERTOU": [
            {
              "station": "E.P DE SELAL DJERTOU / A",
              "voters": 279
            }
          ],
          "LESWOCKA": [
            {
              "station": "ECOLE DES PARENTS DE LESWOCKA / A",
              "voters": 133
            }
          ],
          "NGOUNDJEL": [
            {
              "station": "ECOLE DES PARENTS DE NGOUNDJEL  NYAGOI / A",
              "voters": 813
            }
          ],
          "NYAGOI": [
            {
              "station": "ECOLE DES PARENTS DE NGOUNDJEL  NYAGOI / A",
              "voters": 130
            }
          ],
          "DJOKOTI": [
            {
              "station": "ECOLE MAT CATHOLIQUE DE DJOKOTI / A",
              "voters": 214
            }
          ],
          "CARREFOUR": [
            {
              "station": "ECOLE MATERNELLE DE BELEL / A",
              "voters": 1141
            }
          ],
          "MARCHE": [
            {
              "station": "ECOLE MATERNELLE DE BELEL / A",
              "voters": 1141
            }
          ],
          "CHEFFERIE": [
            {
              "station": "ECOLE MATERNELLE DE BELEL / A",
              "voters": 2076
            }
          ],
          "IDOOL": [
            {
              "station": "ECOLE PUBLIQUE D'IDOOL / A",
              "voters": 893
            }
          ],
          "BABOUA": [
            {
              "station": "ECOLE PUBLIQUE DE BABOUA / A",
              "voters": 215
            }
          ],
          "BAKARI": [
            {
              "station": "ECOLE PUBLIQUE DE BAKARI BATA / A",
              "voters": 448
            }
          ],
          "BATA": [
            {
              "station": "ECOLE PUBLIQUE DE BAKARI BATA / A",
              "voters": 448
            }
          ],
          "YOKOTONDOU": [
            {
              "station": "ECOLE PUBLIQUE DE BAKARI BATA / A",
              "voters": 731
            }
          ],
          "BELEL": [
            {
              "station": "ECOLE PUBLIQUE DE BAKARI BATA / A",
              "voters": 731
            }
          ],
          "BARINGO": [
            {
              "station": "ECOLE PUBLIQUE DE BARINGO / A",
              "voters": 165
            }
          ],
          "BEKA": [
            {
              "station": "ECOLE PUBLIQUE DE BARINGO / A",
              "voters": 1585
            }
          ],
          "MODIBO": [
            {
              "station": "ECOLE PUBLIQUE DE BARINGO / A",
              "voters": 1585
            }
          ],
          "BAYARA": [
            {
              "station": "ECOLE PUBLIQUE DE BAYARA / A",
              "voters": 1598
            }
          ],
          "LAH": [
            {
              "station": "ECOLE PUBLIQUE DE BEKA MODIBO / A",
              "voters": 710
            }
          ],
          "GOURAH": [
            {
              "station": "ECOLE PUBLIQUE DE BEKA MODIBO / A",
              "voters": 834
            }
          ],
          "GADJI": [
            {
              "station": "ECOLE PUBLIQUE DE BEKA MODIBO / A",
              "voters": 834
            }
          ],
          "DIDJAWA": [
            {
              "station": "ECOLE PUBLIQUE DE DIDJAWA / A",
              "voters": 161
            }
          ],
          "DJAWA": [
            {
              "station": "ECOLE PUBLIQUE DE DJAWA / A",
              "voters": 304
            }
          ],
          "PORO": [
            {
              "station": "ECOLE PUBLIQUE DE DJAWA / A",
              "voters": 304
            }
          ],
          "DJERKOKA": [
            {
              "station": "ECOLE PUBLIQUE DE DJERKOKA I / A",
              "voters": 481
            }
          ],
          "TELLO": [
            {
              "station": "ECOLE PUBLIQUE DE DJERKOKA I / A",
              "voters": 2000
            }
          ],
          "DJILOUGOU": [
            {
              "station": "ECOLE PUBLIQUE DE DJILOUGOU / A",
              "voters": 717
            }
          ],
          "LIPAOU": [
            {
              "station": "ECOLE PUBLIQUE DE DJILOUGOU LIPAOU / A",
              "voters": 281
            }
          ],
          "GUEBAKE": [
            {
              "station": "ECOLE PUBLIQUE DE GUEBAKE / A",
              "voters": 413
            }
          ],
          "HOSSERE": [
            {
              "station": "ECOLE PUBLIQUE DE HOSSERE LESDI / A",
              "voters": 633
            }
          ],
          "LESDI": [
            {
              "station": "ECOLE PUBLIQUE DE HOSSERE LESDI / A",
              "voters": 359
            }
          ],
          "DOFORO": [
            {
              "station": "ECOLE PUBLIQUE DE KONA DJENAI / A",
              "voters": 747
            }
          ],
          "KONA": [
            {
              "station": "ECOLE PUBLIQUE DE KONA DJENAI / A",
              "voters": 808
            }
          ],
          "DJENAI": [
            {
              "station": "ECOLE PUBLIQUE DE KONA DJENAI / A",
              "voters": 668
            }
          ],
          "GAOURI": [
            {
              "station": "ECOLE PUBLIQUE DE KONA GAOURI / A",
              "voters": 140
            }
          ],
          "LAINDE": [
            {
              "station": "ECOLE PUBLIQUE DE LAINDE KANE / A",
              "voters": 196
            }
          ],
          "KANE": [
            {
              "station": "ECOLE PUBLIQUE DE LAINDE KANE / A",
              "voters": 139
            }
          ],
          "MAMBERE": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBERE HASSIMI / A",
              "voters": 171
            }
          ],
          "HASSIMI": [
            {
              "station": "ECOLE PUBLIQUE DE MAMBERE HASSIMI / A",
              "voters": 171
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO BADJI / A",
              "voters": 708
            }
          ],
          "BADJI": [
            {
              "station": "ECOLE PUBLIQUE DE MAYO BADJI / A",
              "voters": 431
            }
          ],
          "MBANG": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG LANGA / A",
              "voters": 350
            }
          ],
          "LANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG LANGA / A",
              "voters": 350
            }
          ],
          "NDIGOU": [
            {
              "station": "ECOLE PUBLIQUE DE NDIGOU ADAMOU / A",
              "voters": 165
            }
          ],
          "ADAMOU": [
            {
              "station": "ECOLE PUBLIQUE DE NDIGOU ADAMOU / A",
              "voters": 165
            }
          ],
          "NGAOUDAMDJI": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUDAMDJI / A",
              "voters": 240
            }
          ],
          "PASTORAL": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNDJEL  PASTORAL / A",
              "voters": 415
            }
          ],
          "TROUA": [
            {
              "station": "ECOLE PUBLIQUE DE NGOUNDJEL TROUA / A",
              "voters": 268
            }
          ],
          "NYASSEY": [
            {
              "station": "ECOLE PUBLIQUE DE NYASSEY SOUCKOL / A",
              "voters": 110
            }
          ],
          "SOUCKOL": [
            {
              "station": "ECOLE PUBLIQUE DE NYASSEY SOUCKOL / A",
              "voters": 110
            }
          ],
          "SAOUGAOU": [
            {
              "station": "ECOLE PUBLIQUE DE SAOUGAOU / A",
              "voters": 79
            }
          ],
          "SEKA": [
            {
              "station": "ECOLE PUBLIQUE DE SEKA MAYO DADI / A",
              "voters": 220
            }
          ],
          "DADI": [
            {
              "station": "ECOLE PUBLIQUE DE SEKA MAYO DADI / A",
              "voters": 220
            }
          ],
          "SINDERE": [
            {
              "station": "ECOLE PUBLIQUE DE SINDERE / A",
              "voters": 142
            }
          ],
          "TOURNINGAL": [
            {
              "station": "ECOLE PUBLIQUE DE TOURNINGAL / A",
              "voters": 1290
            }
          ],
          "GAGOU": [
            {
              "station": "ECOLE PUBLIQUE DE YOKOTONDOU BELEL /  A",
              "voters": 283
            }
          ],
          "LESS": [
            {
              "station": "EP MANDING OURDOU / A",
              "voters": 80
            }
          ],
          "OURDOU": [
            {
              "station": "EP MANDING OURDOU / A",
              "voters": 80
            }
          ],
          "NGAOUKANA": [
            {
              "station": "EP MANDING OURDOU / A",
              "voters": 80
            }
          ],
          "DJIGA": [
            {
              "station": "EP MAYO DJARANDI / A",
              "voters": 57
            }
          ],
          "MAPA": [
            {
              "station": "EP MAYO DJARANDI / A",
              "voters": 57
            }
          ],
          "LANG": [
            {
              "station": "EP MAYO DJARANDI / A",
              "voters": 57
            }
          ],
          "DJARANDI": [
            {
              "station": "EP MAYO DJARANDI / A",
              "voters": 57
            }
          ],
          "NAMBAMRI": [
            {
              "station": "EP NAMBAMRI / A",
              "voters": 100
            }
          ],
          "DJELDERE": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "NGOURAH": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "LOUGUERE": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "RANCH": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "SOACAM": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "WALAMBA": [
            {
              "station": "EP NGOURA LOUGUERE / A",
              "voters": 43
            }
          ],
          "BENGOUBOU": [
            {
              "station": "EP ROUMDE DJAOURO / A",
              "voters": 192
            }
          ],
          "DJERSOYA": [
            {
              "station": "EP ROUMDE DJAOURO / A",
              "voters": 149
            }
          ],
          "ROUMDE": [
            {
              "station": "EP ROUMDE DJAOURO / A",
              "voters": 149
            }
          ],
          "DJAOURO": [
            {
              "station": "EP ROUMDE DJAOURO / A",
              "voters": 149
            }
          ],
          "KALAMBA": [
            {
              "station": "HANGAR DE KALAMBA / A",
              "voters": 117
            }
          ],
          "KORYON": [
            {
              "station": "HANGAR DE KORYON / A",
              "voters": 234
            }
          ],
          "MBABIKOY": [
            {
              "station": "HANGAR DE KORYON / A",
              "voters": 327
            }
          ],
          "KOUDINI": [
            {
              "station": "HANGAR DE KOUDINI / A",
              "voters": 206
            }
          ],
          "LAOURE": [
            {
              "station": "HANGAR DE LAOURE NGOCK / A",
              "voters": 172
            }
          ],
          "NGOCK": [
            {
              "station": "HANGAR DE LAOURE NGOCK / A",
              "voters": 172
            }
          ],
          "MBELA": [
            {
              "station": "HANGAR DE MBELA YAKI / A",
              "voters": 49
            }
          ],
          "YAKI": [
            {
              "station": "HANGAR DE MBELA YAKI / A",
              "voters": 49
            }
          ],
          "MBINGALAK": [
            {
              "station": "HANGAR DE MBINGALAK / A",
              "voters": 205
            }
          ],
          "BARRIERE": [
            {
              "station": "LYCEE DE BELEL / A",
              "voters": 553
            }
          ],
          "QTIER": [
            {
              "station": "SOUS-PREFECTURE / A",
              "voters": 524
            }
          ],
          "SOUS-PREFECTURE": [
            {
              "station": "SOUS-PREFECTURE / A",
              "voters": 524
            }
          ]
        },
        "MARTAP": {
          "BAGARMI": [
            {
              "station": "EP BAGARMI / A",
              "voters": 223
            }
          ],
          "BALI-ISSA": [
            {
              "station": "EP BALI-ISSA / A",
              "voters": 332
            }
          ],
          "SARMBALE": [
            {
              "station": "EP BALI-ISSA / A",
              "voters": 600
            }
          ],
          "BAWA": [
            {
              "station": "EP BAWA / A",
              "voters": 2617
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA MANGARI / A",
              "voters": 330
            }
          ],
          "MANGARI": [
            {
              "station": "EP BEKA MANGARI / A",
              "voters": 330
            }
          ],
          "PACKSAL": [
            {
              "station": "EP BEKA MANGARI / A",
              "voters": 330
            }
          ],
          "BELAKA": [
            {
              "station": "EP BELAKA DJOUI / A",
              "voters": 291
            }
          ],
          "DJOUI": [
            {
              "station": "EP BELAKA DJOUI / A",
              "voters": 291
            }
          ],
          "LAPSI": [
            {
              "station": "EP BIDEM / A",
              "voters": 76
            }
          ],
          "NDJING": [
            {
              "station": "EP BIDEM / A",
              "voters": 76
            }
          ],
          "NGAOUMETER": [
            {
              "station": "EP BIDEM / A",
              "voters": 76
            }
          ],
          "BIRSOCK": [
            {
              "station": "EP BIRSOCK / A",
              "voters": 234
            }
          ],
          "NGAOUHONA": [
            {
              "station": "EP BIRSOCK / A",
              "voters": 234
            }
          ],
          "NGOURORE": [
            {
              "station": "EP BIRSOCK / A",
              "voters": 234
            }
          ],
          "DJALO": [
            {
              "station": "EP BIRSOCK / A",
              "voters": 234
            }
          ],
          "BOBBODJI": [
            {
              "station": "EP BOBBODJI / A",
              "voters": 237
            }
          ],
          "DJABE-FOULBE": [
            {
              "station": "EP DJABE FOULBE / A",
              "voters": 914
            }
          ],
          "DJARIA": [
            {
              "station": "EP DJARIA I / A",
              "voters": 308
            }
          ],
          "VINPARO": [
            {
              "station": "EP GANDJAKIRA / A",
              "voters": 21
            }
          ],
          "GUENA": [
            {
              "station": "EP GUENA / A",
              "voters": 445
            }
          ],
          "HANGLOA": [
            {
              "station": "EP HANGLOA / A",
              "voters": 693
            }
          ],
          "MANDOUROU": [
            {
              "station": "EP HANGLOA / A",
              "voters": 4801
            }
          ],
          "ABDALA": [
            {
              "station": "EP HANGLOA / A",
              "voters": 1720
            }
          ],
          "HORE-BINI": [
            {
              "station": "EP HORE -BINI / A",
              "voters": 163
            }
          ],
          "HORE-MANANG": [
            {
              "station": "EP HORE-MANANG / A",
              "voters": 87
            }
          ],
          "MANANG": [
            {
              "station": "EP HORE-MANANG / A",
              "voters": 605
            }
          ],
          "HOURSO": [
            {
              "station": "EP HORE-MANANG / A",
              "voters": 390
            }
          ],
          "HORE-MIKAI": [
            {
              "station": "EP HORE-MIKAI / A",
              "voters": 124
            }
          ],
          "MOUSSA": [
            {
              "station": "EP LEWA MOUSSA / A",
              "voters": 2353
            }
          ],
          "WALDE-SOLARE": [
            {
              "station": "EP LEWA MOUSSA / A",
              "voters": 323
            }
          ],
          "WAMAR": [
            {
              "station": "EP LEWA MOUSSA / A",
              "voters": 323
            }
          ],
          "WOURO": [
            {
              "station": "EP LEWA WOURO DOLE / A",
              "voters": 355
            }
          ],
          "DOLE": [
            {
              "station": "EP LEWA WOURO DOLE / A",
              "voters": 355
            }
          ],
          "LIKOK": [
            {
              "station": "EP LIKOK / A",
              "voters": 3729
            }
          ],
          "LISSEY": [
            {
              "station": "EP LISSEY / A",
              "voters": 431
            }
          ],
          "DJABE": [
            {
              "station": "EP LOUGGA TAPPADI / A",
              "voters": 1026
            }
          ],
          "MBOUM": [
            {
              "station": "EP LOUGGA TAPPADI / A",
              "voters": 1301
            }
          ],
          "LOUGGA": [
            {
              "station": "EP LOUGGA TAPPADI / A",
              "voters": 1294
            }
          ],
          "TAPPADI": [
            {
              "station": "EP LOUGGA TAPPADI / A",
              "voters": 1294
            }
          ],
          "DJOGGA": [
            {
              "station": "EP MAHOBA / A",
              "voters": 474
            }
          ],
          "MAHOBA": [
            {
              "station": "EP MAHOBA / A",
              "voters": 268
            }
          ],
          "MAMBALI-YANWAL": [
            {
              "station": "EP MAHOBA / A",
              "voters": 268
            }
          ],
          "MAKOR": [
            {
              "station": "EP MAKOR SAMAKI / A",
              "voters": 505
            }
          ],
          "SAMAKI": [
            {
              "station": "EP MAKOR SAMAKI / A",
              "voters": 505
            }
          ],
          "DALIL": [
            {
              "station": "EP MANDOUROU / A",
              "voters": 1027
            }
          ],
          "HAMADJODA": [
            {
              "station": "EP MANDOUROU / A",
              "voters": 1027
            }
          ],
          "VOKOR": [
            {
              "station": "EP MANDOUROU / A",
              "voters": 1027
            }
          ],
          "MASSIWOL": [
            {
              "station": "EP MASSIWOL / A",
              "voters": 320
            }
          ],
          "SIERR": [
            {
              "station": "EP MASSIWOL 2 / A",
              "voters": 54
            }
          ],
          "LOUGGA-MANDOUROU": [
            {
              "station": "EP MATAKORO / A",
              "voters": 171
            }
          ],
          "MATAKORO": [
            {
              "station": "EP MATAKORO / A",
              "voters": 171
            }
          ],
          "HORE": [
            {
              "station": "EP MBEWE / A",
              "voters": 407
            }
          ],
          "MAYANGA": [
            {
              "station": "EP MBEWE / A",
              "voters": 407
            }
          ],
          "MBEWE": [
            {
              "station": "EP MBEWE / A",
              "voters": 407
            }
          ],
          "SOUKOURWO": [
            {
              "station": "EP MBEWE / A",
              "voters": 407
            }
          ],
          "NGAOUNANG": [
            {
              "station": "EP NGAOUNANG / A",
              "voters": 325
            }
          ],
          "SANGOL": [
            {
              "station": "EP SEBORE DJANGOL / A",
              "voters": 800
            }
          ],
          "LEKKI": [
            {
              "station": "EP SEBORE DJANGOL / A",
              "voters": 800
            }
          ],
          "SEBORE": [
            {
              "station": "EP SEBORE DJANGOL / A",
              "voters": 800
            }
          ],
          "DJANGOL": [
            {
              "station": "EP SEBORE DJANGOL / A",
              "voters": 800
            }
          ],
          "TEKKEL": [
            {
              "station": "EP TEKKEL / A",
              "voters": 617
            }
          ],
          "TOUMBOUROUM": [
            {
              "station": "EP TOUMBOUROUM / A",
              "voters": 315
            }
          ],
          "ASSOM": [
            {
              "station": "HANGAR COMMUNAUTAIRE D'ASSOM / A",
              "voters": 440
            }
          ],
          "MARTAP": [
            {
              "station": "HANGAR COMMUNAUTAIRE D'ASSOM / A",
              "voters": 3388
            }
          ],
          "TCHABBAL": [
            {
              "station": "HANGAR COMMUNAUTAIRE D'ASSOM / A",
              "voters": 1992
            }
          ],
          "HALEO": [
            {
              "station": "HANGAR COMMUNAUTAIRE D'ASSOM / A",
              "voters": 641
            }
          ],
          "LAOUKOBONG": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE  LAOUKOBONG / A",
              "voters": 182
            }
          ],
          "MAKEP": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE  NGAOUNDANGA / A",
              "voters": 102
            }
          ],
          "NGAOUNDANGA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE  NGAOUNDANGA / A",
              "voters": 102
            }
          ],
          "ANAM": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE ANAM / A",
              "voters": 199
            }
          ],
          "MARMA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE ANAM / A",
              "voters": 199
            }
          ],
          "KOUM": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE KOUM KILBA /  A",
              "voters": 155
            }
          ],
          "KILBA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE KOUM KILBA /  A",
              "voters": 155
            }
          ],
          "LENA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE LENA DADI / A",
              "voters": 51
            }
          ],
          "DADI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE LENA DADI / A",
              "voters": 51
            }
          ],
          "MABANGAL": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MABANGAL /  A",
              "voters": 126
            }
          ],
          "MADEM": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MADEM / A",
              "voters": 235
            }
          ],
          "MALOUA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MALOUA / A",
              "voters": 178
            }
          ],
          "DOROFI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MANANG  DOROFI / A",
              "voters": 215
            }
          ],
          "GOLBI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MAYO GOLBI /  A",
              "voters": 109
            }
          ],
          "MBANA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MAYO GOLBI /  A",
              "voters": 559
            }
          ],
          "LEWA": [
            {
              "station": "HANGAR COMMUNAUTAIRE LEWA MAYO / A",
              "voters": 3113
            }
          ],
          "MAYO": [
            {
              "station": "HANGAR COMMUNAUTAIRE LEWA MAYO / A",
              "voters": 3136
            }
          ]
        },
        "MBE": {
          "NGUESSECK-KESSOUM": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE TAGBOUM /  A",
              "voters": 230
            }
          ],
          "TAGBOUM": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE TAGBOUM /  A",
              "voters": 465
            }
          ],
          "EST": [
            {
              "station": "CENTRE DE SANTE INTEGRE DE TAGBOUM /  A",
              "voters": 230
            }
          ],
          "MADJADOU-NGAOUDJOUM": [
            {
              "station": "CENTRE DE SANTE PRIVE DE NGAOUDJOM /  A",
              "voters": 347
            }
          ],
          "NGAOUDJOM": [
            {
              "station": "CENTRE DE SANTE PRIVE DE NGAOUDJOM /  A",
              "voters": 347
            }
          ],
          "HARR": [
            {
              "station": "ECOLE CATHOLIQUE DE KARNA MANGA / A",
              "voters": 2941
            }
          ],
          "CHATEAU": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE DE MBE / A",
              "voters": 72
            }
          ],
          "TOO": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE DE MBE / A",
              "voters": 72
            }
          ],
          "WOURO": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE DE MBE / A",
              "voters": 72
            }
          ],
          "KESSOUM": [
            {
              "station": "ECOLE MATERNELLE PUBLIQUE DE MBE / A",
              "voters": 72
            }
          ],
          "SANFOU": [
            {
              "station": "ECOLE PRIV PROTEST VOURGNE SANFOU / A",
              "voters": 290
            }
          ],
          "FOUBARKA": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE  FOUBARKA / A",
              "voters": 396
            }
          ],
          "MBIP": [
            {
              "station": "ECOLE PRIVEE PROTESTANTE DE  FOUBARKA / A",
              "voters": 396
            }
          ],
          "DOBOI": [
            {
              "station": "ECOLE PROTESTANTE DE MBE / A",
              "voters": 1300
            }
          ],
          "KIANG": [
            {
              "station": "ECOLE PROTESTANTE DE NYADOU / A",
              "voters": 328
            }
          ],
          "NYADOU": [
            {
              "station": "ECOLE PROTESTANTE DE NYADOU / A",
              "voters": 328
            }
          ],
          "BAANDANRE": [
            {
              "station": "ECOLE PUBLIQUE DE BAANDANRE / A",
              "voters": 20
            }
          ],
          "DJETT": [
            {
              "station": "ECOLE PUBLIQUE DE DJETT / A",
              "voters": 539
            }
          ],
          "KARNA": [
            {
              "station": "ECOLE PUBLIQUE DE DJETT / A",
              "voters": 2476
            }
          ],
          "MANGA": [
            {
              "station": "ECOLE PUBLIQUE DE DJETT / A",
              "voters": 1642
            }
          ],
          "PETEL": [
            {
              "station": "ECOLE PUBLIQUE DE DJETT / A",
              "voters": 834
            }
          ],
          "GORHIECK": [
            {
              "station": "ECOLE PUBLIQUE DE HOME / A",
              "voters": 296
            }
          ],
          "HOME": [
            {
              "station": "ECOLE PUBLIQUE DE HOME / A",
              "voters": 197
            }
          ],
          "BENOUE": [
            {
              "station": "ECOLE PUBLIQUE DE HOME / A",
              "voters": 798
            }
          ],
          "MAN": [
            {
              "station": "ECOLE PUBLIQUE DE MAN / A",
              "voters": 209
            }
          ],
          "CITE": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "VERTE": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "LAINDE": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "MORA": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "MADJADOU-MAROUARE": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "MAROUARE": [
            {
              "station": "ECOLE PUBLIQUE DE MAROUARE / A",
              "voters": 967
            }
          ],
          "NDOM": [
            {
              "station": "ECOLE PUBLIQUE DE NDOM BENOUE / A",
              "voters": 502
            }
          ],
          "NGAOUYANGA": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUYANGA / A",
              "voters": 1550
            }
          ],
          "NGUESSECK-TATT": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUYANGA / A",
              "voters": 1550
            }
          ],
          "NOVE": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUYANGA / A",
              "voters": 1550
            }
          ],
          "SEIGBA": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUYANGA / A",
              "voters": 1766
            }
          ],
          "SELLOU": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUYANGA / A",
              "voters": 1766
            }
          ],
          "GOPNOUCK": [
            {
              "station": "ECOLE PUBLIQUE DE NGUESSECK-NGAI / A",
              "voters": 392
            }
          ],
          "NGUESSECK-NGAI": [
            {
              "station": "ECOLE PUBLIQUE DE NGUESSECK-NGAI / A",
              "voters": 392
            }
          ],
          "MBAOU": [
            {
              "station": "ECOLE PUBLIQUE DE SASSA GARDA / A",
              "voters": 266
            }
          ],
          "NDOMSOTTOT": [
            {
              "station": "ECOLE PUBLIQUE DE SASSA GARDA / A",
              "voters": 266
            }
          ],
          "SASSA": [
            {
              "station": "ECOLE PUBLIQUE DE SASSA GARDA / A",
              "voters": 1572
            }
          ],
          "GARDA": [
            {
              "station": "ECOLE PUBLIQUE DE SASSA GARDA / A",
              "voters": 919
            }
          ],
          "OUEST": [
            {
              "station": "ECOLE PUBLIQUE DE TAGBOUM / A",
              "voters": 235
            }
          ],
          "MONALASSI": [
            {
              "station": "ECOLE PUBLIQUE DE TIBANG-NYESSE / A",
              "voters": 423
            }
          ],
          "PANOUA": [
            {
              "station": "ECOLE PUBLIQUE DE TIBANG-NYESSE / A",
              "voters": 423
            }
          ],
          "TIBANG": [
            {
              "station": "ECOLE PUBLIQUE DE TIBANG-NYESSE / A",
              "voters": 423
            }
          ],
          "NYESSE": [
            {
              "station": "ECOLE PUBLIQUE DE TIBANG-NYESSE / A",
              "voters": 423
            }
          ],
          "DENA-MBE": [
            {
              "station": "ECOLE PUBLIQUE DE TOUBAKA / A",
              "voters": 1858
            }
          ],
          "SYH": [
            {
              "station": "ECOLE PUBLIQUE DE TOUBAKA / A",
              "voters": 545
            }
          ],
          "TOUBAKA": [
            {
              "station": "ECOLE PUBLIQUE DE TOUBAKA / A",
              "voters": 733
            }
          ],
          "VOURGNE": [
            {
              "station": "ECOLE PUBLIQUE DE VOURGNE MAMBOUM /  A",
              "voters": 596
            }
          ],
          "MAMBOUM": [
            {
              "station": "ECOLE PUBLIQUE DE VOURGNE MAMBOUM /  A",
              "voters": 306
            }
          ],
          "GOP-GABDO": [
            {
              "station": "ECOLE PUBLIQUE DE WACK / A",
              "voters": 1145
            }
          ],
          "NDONG": [
            {
              "station": "ECOLE PUBLIQUE DE WACK / A",
              "voters": 1638
            }
          ],
          "WACK": [
            {
              "station": "ECOLE PUBLIQUE DE WACK / A",
              "voters": 2290
            }
          ],
          "DONG-NA-NOVE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 1593
            }
          ],
          "FADA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 2494
            }
          ],
          "MBATE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 2494
            }
          ],
          "MBE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 1786
            }
          ],
          "PERIPHERIQUE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 1593
            }
          ],
          "TO'O": [
            {
              "station": "ECOLE PUBLIQUE GROUPE I MBE / A",
              "voters": 2395
            }
          ],
          "MONAPITA": [
            {
              "station": "ECOLE PUBLIQUE GROUPE IV DE MBE / A",
              "voters": 209
            }
          ],
          "QUARTIER": [
            {
              "station": "ECOLE PUBLIQUE GROUPE IV DE MBE / A",
              "voters": 209
            }
          ],
          "TOUPOURI": [
            {
              "station": "ECOLE PUBLIQUE GROUPE IV DE MBE / A",
              "voters": 209
            }
          ],
          "TOKOMBERE": [
            {
              "station": "ECOLE PUBLIQUE GROUPE IV DE MBE / A",
              "voters": 209
            }
          ],
          "MBERSI": [
            {
              "station": "ECOLE PUBLIQUE SASSA MBERSI / A",
              "voters": 653
            }
          ],
          "GOVE": [
            {
              "station": "HANGAR GOVE / A",
              "voters": 332
            }
          ],
          "DENA": [
            {
              "station": "HANGAR MAFAWACK / A",
              "voters": 193
            }
          ],
          "KAPSIKI": [
            {
              "station": "HANGAR MAFAWACK / A",
              "voters": 193
            }
          ],
          "MAFAWACK": [
            {
              "station": "HANGAR MAFAWACK / A",
              "voters": 193
            }
          ],
          "MORTOCK": [
            {
              "station": "HANGAR MAFAWACK / A",
              "voters": 193
            }
          ],
          "DOGONG": [
            {
              "station": "LYCEE DE MBE / A",
              "voters": 802
            }
          ],
          "DOUDJA": [
            {
              "station": "LYCEE DE MBE / A",
              "voters": 802
            }
          ],
          "MISSION": [
            {
              "station": "LYCEE DE MBE / A",
              "voters": 1599
            }
          ],
          "TAPARE": [
            {
              "station": "LYCEE DE MBE / A",
              "voters": 802
            }
          ],
          "NYAN": [
            {
              "station": "POSTE DE MBE / A",
              "voters": 901
            }
          ]
        },
        "NGAN-HA": {
          "BALEL": [
            {
              "station": "CASE COMMUNAUTAIRE DE BALEL / A",
              "voters": 86
            }
          ],
          "GOP": [
            {
              "station": "ECOLE CATHOLIQUE DE MBEREM / A",
              "voters": 578
            }
          ],
          "MBEREM": [
            {
              "station": "ECOLE CATHOLIQUE DE MBEREM / A",
              "voters": 578
            }
          ],
          "MADJER": [
            {
              "station": "ECOLE DES PARENTS DE MADJER / A",
              "voters": 153
            }
          ],
          "MANDJIMI": [
            {
              "station": "ECOLE DES PARENTS DE MANDJIMI / A",
              "voters": 114
            }
          ],
          "KANDI": [
            {
              "station": "ECOLE PROTESTANTE DE NOM-KANDI / A",
              "voters": 1137
            }
          ],
          "MANDIKOUM": [
            {
              "station": "ECOLE PROTESTANTE DE NOM-KANDI / A",
              "voters": 1271
            }
          ],
          "NOM": [
            {
              "station": "ECOLE PROTESTANTE DE NOM-KANDI / A",
              "voters": 1137
            }
          ],
          "AWA": [
            {
              "station": "ECOLE PUBLIQUE D'AWA / A",
              "voters": 176
            }
          ],
          "BAOUSSI": [
            {
              "station": "ECOLE PUBLIQUE DE BAOUSSI I / A",
              "voters": 638
            }
          ],
          "NGAOUMBAM": [
            {
              "station": "ECOLE PUBLIQUE DE BAOUSSI II / A",
              "voters": 583
            }
          ],
          "BINI-POCK": [
            {
              "station": "ECOLE PUBLIQUE DE BINI-POCK / A",
              "voters": 102
            }
          ],
          "BORONGO": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 928
            }
          ],
          "DEO": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 928
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 928
            }
          ],
          "FOLIFERE": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 1128
            }
          ],
          "FOUKOUNI": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 928
            }
          ],
          "MAISCAM": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 928
            }
          ],
          "MAREL": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 1128
            }
          ],
          "POFE": [
            {
              "station": "ECOLE PUBLIQUE DE BORONGO / A",
              "voters": 1128
            }
          ],
          "DENA": [
            {
              "station": "ECOLE PUBLIQUE DE DENA / A",
              "voters": 415
            }
          ],
          "MBIDJORO": [
            {
              "station": "ECOLE PUBLIQUE DE DENA / A",
              "voters": 617
            }
          ],
          "SOTTA": [
            {
              "station": "ECOLE PUBLIQUE DE DENA / A",
              "voters": 617
            }
          ],
          "WARACK": [
            {
              "station": "ECOLE PUBLIQUE DE DENA / A",
              "voters": 1497
            }
          ],
          "III": [
            {
              "station": "ECOLE PUBLIQUE DE DENA / A",
              "voters": 617
            }
          ],
          "FOUNDOY": [
            {
              "station": "ECOLE PUBLIQUE DE FOUNDOY / A",
              "voters": 198
            }
          ],
          "WOCK-VOCK": [
            {
              "station": "ECOLE PUBLIQUE DE FOUNDOY / A",
              "voters": 198
            }
          ],
          "GAMBOUKOU": [
            {
              "station": "ECOLE PUBLIQUE DE GAMBOUKOU / A",
              "voters": 250
            }
          ],
          "KOBI": [
            {
              "station": "ECOLE PUBLIQUE DE GAMBOUKOU / A",
              "voters": 387
            }
          ],
          "DOENE": [
            {
              "station": "ECOLE PUBLIQUE DE GANGASSAOU / A",
              "voters": 1593
            }
          ],
          "GANGASSAOU": [
            {
              "station": "ECOLE PUBLIQUE DE GANGASSAOU / A",
              "voters": 1457
            }
          ],
          "LOUMO-NANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE GANGASSAOU / A",
              "voters": 1593
            }
          ],
          "SABONGARI-GANGASSAOU": [
            {
              "station": "ECOLE PUBLIQUE DE GANGASSAOU / A",
              "voters": 1648
            }
          ],
          "BANTAI": [
            {
              "station": "ECOLE PUBLIQUE DE LAFIA-DIDANGO / A",
              "voters": 154
            }
          ],
          "LAFIA-DIDANGO": [
            {
              "station": "ECOLE PUBLIQUE DE LAFIA-DIDANGO / A",
              "voters": 154
            }
          ],
          "AMAI-MARA": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "MADEM": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "MAMAN": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "MARA-OUSMANOU": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "MBANG-MARA": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "NDOUGUELEN": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "SACK-TOY": [
            {
              "station": "ECOLE PUBLIQUE DE MARA-OUSMANOU / A",
              "voters": 257
            }
          ],
          "MASSACKBATT": [
            {
              "station": "ECOLE PUBLIQUE DE MASSACKBATT / A",
              "voters": 296
            }
          ],
          "BAH-ZANGA": [
            {
              "station": "ECOLE PUBLIQUE DE MBALANG / A",
              "voters": 667
            }
          ],
          "MBALANG-ABOUBAKAR": [
            {
              "station": "ECOLE PUBLIQUE DE MBALANG / A",
              "voters": 1265
            }
          ],
          "SANGA-GOUMDJEL": [
            {
              "station": "ECOLE PUBLIQUE DE MBALANG / A",
              "voters": 667
            }
          ],
          "MAMOUM": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG-BOUHARI / A",
              "voters": 598
            }
          ],
          "MBANG-BOUHARI": [
            {
              "station": "ECOLE PUBLIQUE DE MBANG-BOUHARI / A",
              "voters": 598
            }
          ],
          "MBARANG": [
            {
              "station": "ECOLE PUBLIQUE DE MBARANG / A",
              "voters": 109
            }
          ],
          "NDIGOU-HAMADJODA": [
            {
              "station": "ECOLE PUBLIQUE DE NDIGOU-HAMADJODA /  A",
              "voters": 279
            }
          ],
          "NDOKTOUTO": [
            {
              "station": "ECOLE PUBLIQUE DE NDOKTOUTO / A",
              "voters": 109
            }
          ],
          "BANSANG": [
            {
              "station": "ECOLE PUBLIQUE DE NGAN-HA / A",
              "voters": 1678
            }
          ],
          "NGAN-HA": [
            {
              "station": "ECOLE PUBLIQUE DE NGAN-HA / A",
              "voters": 2917
            }
          ],
          "NYASSAR": [
            {
              "station": "ECOLE PUBLIQUE DE NYASSAR / A",
              "voters": 575
            }
          ],
          "FOUKINI": [
            {
              "station": "ECOLE PUBLIQUE DE POFE-FOLIFERE / A",
              "voters": 200
            }
          ],
          "SADOOL-YAYA": [
            {
              "station": "ECOLE PUBLIQUE DE SADOOL-YAYA / A",
              "voters": 404
            }
          ],
          "SAIWA": [
            {
              "station": "ECOLE PUBLIQUE DE SAIWA / A",
              "voters": 135
            }
          ],
          "VACK": [
            {
              "station": "ECOLE PUBLIQUE DE VACK / A",
              "voters": 468
            }
          ],
          "WAME": [
            {
              "station": "ECOLE PUBLIQUE DE WAME / A",
              "voters": 647
            }
          ],
          "WAME-PETIT": [
            {
              "station": "ECOLE PUBLIQUE DE WAME-PETIT / A",
              "voters": 224
            }
          ],
          "HOLMBALI": [
            {
              "station": "ECOLE PUBLIQUE DE YENWA / A",
              "voters": 492
            }
          ],
          "KOUBADJE": [
            {
              "station": "ECOLE PUBLIQUE DE YENWA / A",
              "voters": 820
            }
          ],
          "YENWA": [
            {
              "station": "ECOLE PUBLIQUE DE YENWA / A",
              "voters": 492
            }
          ],
          "GOP-BERA": [
            {
              "station": "ECOLE PUBLIQUE DE YOKOTONDOU / A",
              "voters": 303
            }
          ],
          "YOKOTONDOU": [
            {
              "station": "ECOLE PUBLIQUE DE YOKOTONDOU / A",
              "voters": 303
            }
          ],
          "FOUFEKE": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 746
            }
          ],
          "MADJELE": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 746
            }
          ],
          "MAMBARANG": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 746
            }
          ],
          "MBANG-BERNI": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 1344
            }
          ],
          "NYASSEY": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 746
            }
          ],
          "LEMOU": [
            {
              "station": "ECOLE PUBLIQUEDE MBANG-BERNI / A",
              "voters": 746
            }
          ],
          "BERA-BARSAOUI": [
            {
              "station": "HANGAR DE BERA-BARSAOU / A",
              "voters": 298
            }
          ],
          "SADOOL-KALMET": [
            {
              "station": "HANGAR SADOOL-KALMET / A",
              "voters": 283
            }
          ],
          "DIGONG": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "FALINGO": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "LOUGGUERE": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "BAH": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "SAMBO": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "NGAOUBO": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 945
            }
          ],
          "TOUMBERE": [
            {
              "station": "HANGAR TOUMBERE / A",
              "voters": 347
            }
          ],
          "YANG": [
            {
              "station": "HANGAR YANG / A",
              "voters": 78
            }
          ],
          "MBI": [
            {
              "station": "POSTE A BETAIL MBI AFESSAKA / A",
              "voters": 532
            }
          ],
          "AFFESSAKA": [
            {
              "station": "POSTE A BETAIL MBI AFESSAKA / A",
              "voters": 532
            }
          ],
          "NDOLONG": [
            {
              "station": "POSTE A BETAIL MBI AFESSAKA / A",
              "voters": 532
            }
          ],
          "MBIKAOU": [
            {
              "station": "POSTE A BETAIL MBI AFESSAKA / A",
              "voters": 532
            }
          ],
          "NYAMBARANG": [
            {
              "station": "POSTE A BETAIL MBI AFESSAKA / A",
              "voters": 684
            }
          ]
        },
        "NGAOUNDERE I": {
          "WOURO": [
            {
              "station": "CES BILINGUE DE MARZA / A",
              "voters": 48
            }
          ],
          "KESSOUM": [
            {
              "station": "CES BILINGUE DE MARZA / A",
              "voters": 48
            }
          ],
          "NAMOKALA": [
            {
              "station": "COLLEGE PROTESTANT / A",
              "voters": 3848
            }
          ],
          "NDELBE": [
            {
              "station": "COLLEGE PROTESTANT / A",
              "voters": 13274
            }
          ],
          "(SABONGARI": [
            {
              "station": "COLLEGE PROTESTANT / A",
              "voters": 3681
            }
          ],
          "AMERICA)": [
            {
              "station": "COLLEGE PROTESTANT / A",
              "voters": 3681
            }
          ],
          "CENTRE": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 431
            }
          ],
          "COMMERCIAL": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 431
            }
          ],
          "CAMP": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 12825
            }
          ],
          "FONCTIONNAIRE": [
            {
              "station": "COMMUNAUTE URBAINE / A",
              "voters": 7699
            }
          ],
          "BAMYANGA": [
            {
              "station": "ECOLE ANGLO ISLAMIQUE / A",
              "voters": 34716
            }
          ],
          "SOMENO": [
            {
              "station": "ECOLE ANGLO ISLAMIQUE / A",
              "voters": 2319
            }
          ],
          "BALI": [
            {
              "station": "ECOLE ANNEXE / A",
              "voters": 3268
            }
          ],
          "BEKA": [
            {
              "station": "ECOLE ANNEXE / A",
              "voters": 6255
            }
          ],
          "HOSSERE": [
            {
              "station": "ECOLE ANNEXE / A",
              "voters": 9327
            }
          ],
          "KANTALANG": [
            {
              "station": "ECOLE DES PARENTS KANTALANG / A",
              "voters": 220
            }
          ],
          "FOUFEKE": [
            {
              "station": "ECOLE DES SOEURS / A",
              "voters": 2971
            }
          ],
          "MOUNDANG": [
            {
              "station": "ECOLE LES GAZELLES / A",
              "voters": 1075
            }
          ],
          "SOCARET": [
            {
              "station": "ECOLE LES GAZELLES / A",
              "voters": 2525
            }
          ],
          "CENTRAL": [
            {
              "station": "ECOLE LES PINTADELLES / A",
              "voters": 146
            }
          ],
          "SONEL": [
            {
              "station": "ECOLE LES PINTADELLES / A",
              "voters": 146
            }
          ],
          "LOGEMENTS": [
            {
              "station": "ECOLE LES PINTADELLES / A",
              "voters": 146
            }
          ],
          "SOCIAUX": [
            {
              "station": "ECOLE LES PINTADELLES / A",
              "voters": 146
            }
          ],
          "POLICE": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 1100
            }
          ],
          "MISSION": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 1100
            }
          ],
          "CATHOLIQUE": [
            {
              "station": "ECOLE MISSION CATHOLIQUE / A",
              "voters": 1100
            }
          ],
          "ISSA": [
            {
              "station": "ECOLE PUBLIQUE BAMYANGA / A",
              "voters": 8988
            }
          ],
          "DENA": [
            {
              "station": "ECOLE PUBLIQUE BAMYANGA / A",
              "voters": 8988
            }
          ],
          "HAMADJANGUI": [
            {
              "station": "ECOLE PUBLIQUE BAMYANGA HAMADJANGUI  /A",
              "voters": 2867
            }
          ],
          "HORE": [
            {
              "station": "ECOLE PUBLIQUE BEKA HOSSERE / A",
              "voters": 3849
            }
          ],
          "FORET": [
            {
              "station": "ECOLE PUBLIQUE BEKA HOSSERE / A",
              "voters": 3849
            }
          ],
          "MARGNANG": [
            {
              "station": "ECOLE PUBLIQUE BEKA HOSSERE / A",
              "voters": 3894
            }
          ],
          "BURKINA": [
            {
              "station": "ECOLE PUBLIQUE BURKINA / A",
              "voters": 6445
            }
          ],
          "BONDJONG": [
            {
              "station": "ECOLE PUBLIQUE DE BONDJONG / A",
              "voters": 99
            }
          ],
          "NGAOUNDELBE": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUNDELBE / A",
              "voters": 126
            }
          ],
          "YOKO": [
            {
              "station": "ECOLE PUBLIQUE DE NGAOUNDELBE / A",
              "voters": 126
            }
          ],
          "AOUDI": [
            {
              "station": "ECOLE PUBLIQUE DJAKBOL / A",
              "voters": 3801
            }
          ],
          "BELAKA": [
            {
              "station": "ECOLE PUBLIQUE DJAKBOL / A",
              "voters": 10246
            }
          ],
          "BOUMDJERE": [
            {
              "station": "ECOLE PUBLIQUE DJAKBOL / A",
              "voters": 3801
            }
          ],
          "DJAKBOL": [
            {
              "station": "ECOLE PUBLIQUE DJAKBOL / A",
              "voters": 3801
            }
          ],
          "GAMBARA": [
            {
              "station": "ECOLE PUBLIQUE GAMBARA 2 / A",
              "voters": 1775
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ECOLE PUBLIQUE GENDARMERIE / A",
              "voters": 221
            }
          ],
          "MILITAIRE": [
            {
              "station": "ECOLE PUBLIQUE GENDARMERIE / A",
              "voters": 1910
            }
          ],
          "FALFA": [
            {
              "station": "ECOLE PUBLIQUE MARMA / A",
              "voters": 441
            }
          ],
          "MARMA": [
            {
              "station": "ECOLE PUBLIQUE MARMA / A",
              "voters": 393
            }
          ],
          "LAIGA": [
            {
              "station": "ECOLE PUBLIQUE MARZA / A",
              "voters": 2053
            }
          ],
          "MARZA": [
            {
              "station": "ECOLE PUBLIQUE MARZA / A",
              "voters": 2053
            }
          ],
          "MBIDENG": [
            {
              "station": "ECOLE PUBLIQUE MBIDENG / A",
              "voters": 3305
            }
          ],
          "LOUGGUERE": [
            {
              "station": "ECOLE PUBLIQUE NGAOUNDAI / A",
              "voters": 311
            }
          ],
          "MBONDJONG": [
            {
              "station": "ECOLE PUBLIQUE NGAOUNDAI / A",
              "voters": 622
            }
          ],
          "NGAOUNDAI": [
            {
              "station": "ECOLE PUBLIQUE NGAOUNDAI / A",
              "voters": 311
            }
          ],
          "SIOUTERE": [
            {
              "station": "ECOLE PUBLIQUE NGAOUNDAI / A",
              "voters": 311
            }
          ],
          "RESIDENTIEL": [
            {
              "station": "ECOLE PUBLIQUE QUARTIER RESIDENTIEL /  A",
              "voters": 982
            }
          ],
          "VINA": [
            {
              "station": "ECOLE PUBLIQUE WAKWA / A",
              "voters": 596
            }
          ],
          "PONT": [
            {
              "station": "ECOLE PUBLIQUE WAKWA / A",
              "voters": 596
            }
          ],
          "WAKWA": [
            {
              "station": "ECOLE PUBLIQUE WAKWA / A",
              "voters": 690
            }
          ],
          "MAYO-DJARANDI": [
            {
              "station": "LYCEE BILINGUE DE BAMYANGA / A",
              "voters": 4945
            }
          ],
          "PANA": [
            {
              "station": "LYCEE BILINGUE DE BAMYANGA / A",
              "voters": 3870
            }
          ],
          "HAUTS": [
            {
              "station": "LYCEE BILINGUE DE BAMYANGA / A",
              "voters": 6582
            }
          ],
          "PLATEAUX": [
            {
              "station": "LYCEE BILINGUE DE BAMYANGA / A",
              "voters": 6582
            }
          ],
          "MBIBAKLA": [
            {
              "station": "LYCEE CLASSIQUE / A",
              "voters": 3072
            }
          ],
          "QUARTIER": [
            {
              "station": "LYCEE CLASSIQUE / A",
              "voters": 4054
            }
          ],
          "LYCEE": [
            {
              "station": "LYCEE CLASSIQUE / A",
              "voters": 3072
            }
          ],
          "PRISON": [
            {
              "station": "PRISON CENTRALE / A",
              "voters": 1895
            }
          ]
        },
        "NGAOUNDERE II": {
          "CAMP": [
            {
              "station": "BASE - BIR / A",
              "voters": 288
            }
          ],
          "BIR": [
            {
              "station": "BASE - BIR / A",
              "voters": 288
            }
          ],
          "NORD": [
            {
              "station": "COLLEGE POLYVALENT / A",
              "voters": 2723
            }
          ],
          "CIFAN": [
            {
              "station": "COLLEGE POLYVALENT / A",
              "voters": 2723
            }
          ],
          "III": [
            {
              "station": "DISPENSAIRE CAMRAIL / A",
              "voters": 4208
            }
          ],
          "MADEM": [
            {
              "station": "E.P DE MADEM / A",
              "voters": 223
            }
          ],
          "ABATTOIR": [
            {
              "station": "ECOLE BALADJI GROUPE 5 / A",
              "voters": 3041
            }
          ],
          "BALADJI": [
            {
              "station": "ECOLE BALADJI GROUPE 5 / A",
              "voters": 9773
            }
          ],
          "KALME": [
            {
              "station": "ECOLE CATHOLIQUE SAINT PIERRE / A",
              "voters": 893
            }
          ],
          "FADA": [
            {
              "station": "ECOLE FEMME FADA / A",
              "voters": 2846
            }
          ],
          "MALOUMRI": [
            {
              "station": "ECOLE FEMME FADA / A",
              "voters": 2846
            }
          ],
          "MALLA": [
            {
              "station": "ECOLE FRANCO ARABE / A",
              "voters": 3092
            }
          ],
          "TONGO": [
            {
              "station": "ECOLE MATERNELLE TONGO / A",
              "voters": 6668
            }
          ],
          "NANA": [
            {
              "station": "ECOLE MATERNELLE TONGO / A",
              "voters": 1788
            }
          ],
          "BISKEWAL": [
            {
              "station": "ECOLE PARENT BISKEWAL / A",
              "voters": 408
            }
          ],
          "DJALBARKE": [
            {
              "station": "ECOLE PARENT DJALBARKE / A",
              "voters": 70
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE PARENT MAYO - DANEYEL / A",
              "voters": 250
            }
          ],
          "DANEYEL": [
            {
              "station": "ECOLE PARENT MAYO - DANEYEL / A",
              "voters": 250
            }
          ],
          "NGAOUHORA": [
            {
              "station": "ECOLE PARENT NGAOUHORA I / A",
              "voters": 3273
            }
          ],
          "SELBE": [
            {
              "station": "ECOLE PARENT SELBE -DARANG / A",
              "voters": 805
            }
          ],
          "VELEBAI": [
            {
              "station": "ECOLE PARENT VELEMBAI / A",
              "voters": 188
            }
          ],
          "YOUKOU": [
            {
              "station": "ECOLE PARENT YOUKOU / A",
              "voters": 370
            }
          ],
          "REP": [
            {
              "station": "ECOLE PRIVEE PROTESTANT - VILLE / A",
              "voters": 10407
            }
          ],
          "YANGA": [
            {
              "station": "ECOLE PRIVEE PROTESTANT - VILLE / A",
              "voters": 10407
            }
          ],
          "DARA": [
            {
              "station": "ECOLE PUBLIQUE DARA SALAM / A",
              "voters": 422
            }
          ],
          "SALAM": [
            {
              "station": "ECOLE PUBLIQUE DARA SALAM / A",
              "voters": 422
            }
          ],
          "DARANG": [
            {
              "station": "ECOLE PUBLIQUE DARANG / A",
              "voters": 2005
            }
          ],
          "MABANGA": [
            {
              "station": "ECOLE PUBLIQUE DJALINGO / A",
              "voters": 14611
            }
          ],
          "GADA": [
            {
              "station": "ECOLE PUBLIQUE GADA MABANGA / A",
              "voters": 11374
            }
          ],
          "MADAGASCAR": [
            {
              "station": "ECOLE PUBLIQUE GADA MABANGA / A",
              "voters": 14523
            }
          ],
          "HAOUSSA": [
            {
              "station": "ECOLE PUBLIQUE HAOUSSA / A",
              "voters": 2275
            }
          ],
          "MASSOLA": [
            {
              "station": "ECOLE PUBLIQUE MBLAN DJALINGO / A",
              "voters": 635
            }
          ],
          "MBALANG": [
            {
              "station": "ECOLE PUBLIQUE MBLAN DJALINGO / A",
              "voters": 3652
            }
          ],
          "DJALINGO": [
            {
              "station": "ECOLE PUBLIQUE MBLAN DJALINGO / A",
              "voters": 6889
            }
          ],
          "NGAOUSSAY": [
            {
              "station": "ECOLE PUBLIQUE NGAOUSSAY / A",
              "voters": 535
            }
          ],
          "SHOA": [
            {
              "station": "ECOLE PUBLIQUE SABONGARI / A",
              "voters": 3213
            }
          ],
          "ENIEG": [
            {
              "station": "ENIEG / A",
              "voters": 992
            }
          ],
          "YARBANG": [
            {
              "station": "ENIEG / A",
              "voters": 8690
            }
          ],
          "JOLI": [
            {
              "station": "FOYER BAMOUN / A",
              "voters": 5853
            }
          ],
          "SOIR": [
            {
              "station": "FOYER BAMOUN / A",
              "voters": 5853
            }
          ],
          "QUARTIER": [
            {
              "station": "FOYER BAMOUN / A",
              "voters": 5464
            }
          ],
          "BAMOUN": [
            {
              "station": "FOYER BAMOUN / A",
              "voters": 3189
            }
          ],
          "AOUDI": [
            {
              "station": "GARAGE AOUDI / A",
              "voters": 2529
            }
          ],
          "GAMBARA": [
            {
              "station": "GARAGE AOUDI / A",
              "voters": 2529
            }
          ],
          "AEROPORT": [
            {
              "station": "HANGAR AEROPORT / A",
              "voters": 693
            }
          ],
          "MBIBAR": [
            {
              "station": "LYCEE DE SABONGARI / A",
              "voters": 4485
            }
          ],
          "SABONGAR": [
            {
              "station": "LYCEE DE SABONGARI / A",
              "voters": 7698
            }
          ],
          "SABONGARI": [
            {
              "station": "LYCEE DE SABONGARI / A",
              "voters": 17494
            }
          ],
          "TROUA": [
            {
              "station": "LYCEE DE SABONGARI / A",
              "voters": 13882
            }
          ],
          "MALA": [
            {
              "station": "LYCEE DE SABONGARI / A",
              "voters": 10790
            }
          ],
          "LITAI": [
            {
              "station": "SYNDICAT SETRACAUCAM / A",
              "voters": 929
            }
          ]
        },
        "NGAOUNDERE III": {
          "MBIDOU": [
            {
              "station": "CETIC DE MALANG / A",
              "voters": 86
            }
          ],
          "CETIC": [
            {
              "station": "CETIC DE MALANG / A",
              "voters": 86
            }
          ],
          "DJALINGO": [
            {
              "station": "ECOLE MATERNELLE DE DJALINGO / A",
              "voters": 328
            }
          ],
          "PASTORAL": [
            {
              "station": "ECOLE MATERNELLE DE DJALINGO / A",
              "voters": 328
            }
          ],
          "GONI": [
            {
              "station": "ECOLE MATERNELLE DE MALO / A",
              "voters": 102
            }
          ],
          "GOURORE": [
            {
              "station": "ECOLE MATERNELLE DE MALO / A",
              "voters": 102
            }
          ],
          "TENGUERING": [
            {
              "station": "ECOLE PARENTS DE BEKA TENGUERING / A",
              "voters": 425
            }
          ],
          "MALANG": [
            {
              "station": "ECOLE PARENTS DE BEKA TENGUERING / A",
              "voters": 3199
            }
          ],
          "MALO": [
            {
              "station": "ECOLE PARENTS DE BEKA TENGUERING / A",
              "voters": 1461
            }
          ],
          "MBIFAL": [
            {
              "station": "ECOLE PARENTS DE BEKA TENGUERING / A",
              "voters": 1257
            }
          ],
          "LERE": [
            {
              "station": "ECOLE PUB DE TCHABBAL MOUNGUEL / A",
              "voters": 148
            }
          ],
          "TCHABBAL": [
            {
              "station": "ECOLE PUB DE TCHABBAL MOUNGUEL / A",
              "voters": 791
            }
          ],
          "BAOURO": [
            {
              "station": "ECOLE PUB DE TCHABBAL MOUNGUEL / A",
              "voters": 643
            }
          ],
          "MOUNGUEL": [
            {
              "station": "ECOLE PUB DE TCHABBAL MOUNGUEL / A",
              "voters": 148
            }
          ],
          "BINI": [
            {
              "station": "ECOLE PUBLIQUE DE BINI / A",
              "voters": 2285
            }
          ],
          "UNIVERSITE": [
            {
              "station": "ECOLE PUBLIQUE DE BINI / A",
              "voters": 10973
            }
          ],
          "NGAWA": [
            {
              "station": "ECOLE PUBLIQUE DE BINI / A",
              "voters": 2244
            }
          ],
          "DO-MBELLA": [
            {
              "station": "ECOLE PUBLIQUE DE GADA DANG / A",
              "voters": 180
            }
          ],
          "DORI-MAINA": [
            {
              "station": "ECOLE PUBLIQUE DE GADA DANG / A",
              "voters": 180
            }
          ],
          "GADA": [
            {
              "station": "ECOLE PUBLIQUE DE GADA DANG / A",
              "voters": 307
            }
          ],
          "BAGARMI": [
            {
              "station": "ECOLE PUBLIQUE DE GADA-MBIDOU / A",
              "voters": 580
            }
          ],
          "DANG": [
            {
              "station": "ECOLE PUBLIQUE DE GADA-MBIDOU / A",
              "voters": 14155
            }
          ],
          "VILLAGE": [
            {
              "station": "ECOLE PUBLIQUE DE GADA-MBIDOU / A",
              "voters": 3002
            }
          ],
          "GADA-MBIDOU": [
            {
              "station": "ECOLE PUBLIQUE DE GADA-MBIDOU / A",
              "voters": 580
            }
          ],
          "GADA-MADJELE": [
            {
              "station": "ECOLE PUBLIQUE DE MADJELE II / A",
              "voters": 267
            }
          ],
          "MADJELE": [
            {
              "station": "ECOLE PUBLIQUE DE MADJELE II / A",
              "voters": 595
            }
          ],
          "TIBAKA": [
            {
              "station": "ECOLE PUBLIQUE DE MADJELE II / A",
              "voters": 267
            }
          ],
          "DEBE": [
            {
              "station": "ECOLE PUBLIQUE DE MALANG / A",
              "voters": 2860
            }
          ],
          "MBIDOU-MALANG": [
            {
              "station": "ECOLE PUBLIQUE DE MALANG / A",
              "voters": 2774
            }
          ],
          "MBIPEI": [
            {
              "station": "ECOLE PUBLIQUE DE MALANG / A",
              "voters": 2860
            }
          ],
          "NDOUGOI": [
            {
              "station": "ECOLE PUBLIQUE DE MALANG / A",
              "voters": 2861
            }
          ],
          "MALAOU": [
            {
              "station": "ECOLE PUBLIQUE DE MANWI / A",
              "voters": 2848
            }
          ],
          "MANWI": [
            {
              "station": "ECOLE PUBLIQUE DE MANWI / A",
              "voters": 2848
            }
          ],
          "MASSIOL": [
            {
              "station": "ECOLE PUBLIQUE DE MANWI / A",
              "voters": 2848
            }
          ],
          "MBIDJORO": [
            {
              "station": "ECOLE PUBLIQUE DE MANWI / A",
              "voters": 2848
            }
          ],
          "BALGARE": [
            {
              "station": "ECOLE PUBLIQUE DE MARGOL / A",
              "voters": 238
            }
          ],
          "MARGOL": [
            {
              "station": "ECOLE PUBLIQUE DE MARGOL / A",
              "voters": 238
            }
          ],
          "NABOUN": [
            {
              "station": "ECOLE PUBLIQUE DE NABOUN / A",
              "voters": 261
            }
          ],
          "MALO-GONI": [
            {
              "station": "ECOLE PUBLIQUE DE NGODI / A",
              "voters": 1327
            }
          ],
          "MALO-GOURORE": [
            {
              "station": "ECOLE PUBLIQUE DE NGODI / A",
              "voters": 832
            }
          ],
          "NGANA": [
            {
              "station": "ECOLE PUBLIQUE DE NGODI / A",
              "voters": 832
            }
          ],
          "(MAIBORNO)": [
            {
              "station": "ECOLE PUBLIQUE DE NGODI / A",
              "voters": 832
            }
          ],
          "FALINGO": [
            {
              "station": "ECOLE PUBLIQUE DE SALTAKA / A",
              "voters": 281
            }
          ],
          "FARANCA": [
            {
              "station": "ECOLE PUBLIQUE DE SALTAKA / A",
              "voters": 281
            }
          ],
          "SALTAKA": [
            {
              "station": "ECOLE PUBLIQUE DE SALTAKA / A",
              "voters": 281
            }
          ],
          "BARANG": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 494
            }
          ],
          "BEKA": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 1344
            }
          ],
          "NGAOUMOKON": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 919
            }
          ],
          "LANGUI": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 494
            }
          ],
          "NGODI": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 1326
            }
          ],
          "MAFALGAOU": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 494
            }
          ],
          "WOURO-SOUA": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SOUA / A",
              "voters": 680
            }
          ],
          "YALA": [
            {
              "station": "ECOLE PUBLIQUE DE YALA YARNA / A",
              "voters": 186
            }
          ],
          "YARNA": [
            {
              "station": "ECOLE PUBLIQUE DE YALA YARNA / A",
              "voters": 186
            }
          ]
        },
        "NYAMBAKA": {
          "GADO": [
            {
              "station": "ECOLE DES PARENTS DE GADO DJEREM / A",
              "voters": 308
            }
          ],
          "DJEREM": [
            {
              "station": "ECOLE DES PARENTS DE GADO DJEREM / A",
              "voters": 308
            }
          ],
          "KADJOKA": [
            {
              "station": "ECOLE DES PARENTS DE KADJOKA / A",
              "voters": 199
            }
          ],
          "MANBAKA": [
            {
              "station": "ECOLE DES PARENTS DE KADJOKA / A",
              "voters": 199
            }
          ],
          "KATILFOULBE": [
            {
              "station": "ECOLE DES PARENTS DE KATILFOULBE / A",
              "voters": 325
            }
          ],
          "KATILMBOUM": [
            {
              "station": "ECOLE DES PARENTS DE KATILFOULBE / A",
              "voters": 673
            }
          ],
          "LAOUPANGA": [
            {
              "station": "ECOLE DES PARENTS DE LAOUPANGA / A",
              "voters": 188
            }
          ],
          "MAKANE": [
            {
              "station": "ECOLE DES PARENTS DE MAKANE II / A",
              "voters": 149
            }
          ],
          "MBARANG": [
            {
              "station": "ECOLE DES PARENTS DE MBARANG DOUKA /  A",
              "voters": 130
            }
          ],
          "DOUKA": [
            {
              "station": "ECOLE DES PARENTS DE MBARANG DOUKA /  A",
              "voters": 130
            }
          ],
          "SOUKOUNGA": [
            {
              "station": "ECOLE DES PARENTS DE SOUKOUNGA / A",
              "voters": 578
            }
          ],
          "LAWANA": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE LAWANA / A",
              "voters": 476
            }
          ],
          "SAGA": [
            {
              "station": "ECOLE PUBLIQUE BILINGUE DE LAWANA / A",
              "voters": 476
            }
          ],
          "BALEWA": [
            {
              "station": "ECOLE PUBLIQUE DE BALEWA / A",
              "voters": 4091
            }
          ],
          "BANDAL": [
            {
              "station": "ECOLE PUBLIQUE DE BANDAL / A",
              "voters": 1181
            }
          ],
          "BELEL-DIBI": [
            {
              "station": "ECOLE PUBLIQUE DE BELEL-DIBI / A",
              "voters": 409
            }
          ],
          "DIBI": [
            {
              "station": "ECOLE PUBLIQUE DE DIBI / A",
              "voters": 1415
            }
          ],
          "DJAMTARI": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUROUM / A",
              "voters": 419
            }
          ],
          "DJOUROUM": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUROUM / A",
              "voters": 419
            }
          ],
          "SAILLARD": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUROUM / A",
              "voters": 419
            }
          ],
          "VINA": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUROUM / A",
              "voters": 419
            }
          ],
          "LAH": [
            {
              "station": "ECOLE PUBLIQUE DE DJOUROUM / A",
              "voters": 419
            }
          ],
          "FOULOUGOU": [
            {
              "station": "ECOLE PUBLIQUE DE FOULOUGOU  LOUGGUERE / A",
              "voters": 165
            }
          ],
          "LOUGGUERE": [
            {
              "station": "ECOLE PUBLIQUE DE FOULOUGOU  LOUGGUERE / A",
              "voters": 165
            }
          ],
          "MAREL": [
            {
              "station": "ECOLE PUBLIQUE DE FOULOUGOU  LOUGGUERE / A",
              "voters": 165
            }
          ],
          "NGOROM": [
            {
              "station": "ECOLE PUBLIQUE DE FOULOUGOU  LOUGGUERE / A",
              "voters": 3896
            }
          ],
          "DJAILA": [
            {
              "station": "ECOLE PUBLIQUE DE GALDI / A",
              "voters": 1028
            }
          ],
          "GALDI": [
            {
              "station": "ECOLE PUBLIQUE DE GALDI / A",
              "voters": 988
            }
          ],
          "KOGNOLI": [
            {
              "station": "ECOLE PUBLIQUE DE KOGNOLI / A",
              "voters": 970
            }
          ],
          "MADJALANG": [
            {
              "station": "ECOLE PUBLIQUE DE KOGNOLI / A",
              "voters": 970
            }
          ],
          "MANGOLI": [
            {
              "station": "ECOLE PUBLIQUE DE KOGNOLI / A",
              "voters": 1598
            }
          ],
          "NGAOUMBOL": [
            {
              "station": "ECOLE PUBLIQUE DE KOGNOLI / A",
              "voters": 1068
            }
          ],
          "TINDINRING": [
            {
              "station": "ECOLE PUBLIQUE DE KOGNOLI / A",
              "voters": 970
            }
          ],
          "MALOMBO": [
            {
              "station": "ECOLE PUBLIQUE DE MALOMBO / A",
              "voters": 193
            }
          ],
          "MANDOUROU": [
            {
              "station": "ECOLE PUBLIQUE DE MANDOUROU KOLSEL /  A",
              "voters": 340
            }
          ],
          "KOLSEL": [
            {
              "station": "ECOLE PUBLIQUE DE MANDOUROU KOLSEL /  A",
              "voters": 340
            }
          ],
          "MAYO": [
            {
              "station": "ECOLE PUBLIQUE DE MANGOLI / A",
              "voters": 628
            }
          ],
          "BALI": [
            {
              "station": "ECOLE PUBLIQUE DE MANGOLI / A",
              "voters": 628
            }
          ],
          "MANGOM-MBEWE": [
            {
              "station": "ECOLE PUBLIQUE DE MANGOM-MBEWE / A",
              "voters": 552
            }
          ],
          "MBERE": [
            {
              "station": "ECOLE PUBLIQUE DE MBERE MAGOIGNANG /  A",
              "voters": 558
            }
          ],
          "MAGOIGNANG": [
            {
              "station": "ECOLE PUBLIQUE DE MBERE MAGOIGNANG /  A",
              "voters": 558
            }
          ],
          "MBERENG": [
            {
              "station": "ECOLE PUBLIQUE DE MBERENG / A",
              "voters": 52
            }
          ],
          "MBONG-IYA": [
            {
              "station": "ECOLE PUBLIQUE DE MBONG-IYA / A",
              "voters": 466
            }
          ],
          "MBONG-MAYO": [
            {
              "station": "ECOLE PUBLIQUE DE MBONG-IYA / A",
              "voters": 466
            }
          ],
          "MBADJI": [
            {
              "station": "ECOLE PUBLIQUE DE MBONG-IYA / A",
              "voters": 466
            }
          ],
          "MAYO-NANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE NEMINAKA / A",
              "voters": 231
            }
          ],
          "NEMINAKA": [
            {
              "station": "ECOLE PUBLIQUE DE NEMINAKA / A",
              "voters": 231
            }
          ],
          "GOP": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAKA / A",
              "voters": 3731
            }
          ],
          "NYAMBAKA": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAKA / A",
              "voters": 4887
            }
          ],
          "YANGAI": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAKA / A",
              "voters": 3731
            }
          ],
          "HOSSERE": [
            {
              "station": "ECOLE PUBLIQUE DE NYAMBAKA HOSSERE /  A",
              "voters": 478
            }
          ],
          "SADOOL": [
            {
              "station": "ECOLE PUBLIQUE DE SADOOL MANA / A",
              "voters": 212
            }
          ],
          "MANA": [
            {
              "station": "ECOLE PUBLIQUE DE SADOOL MANA / A",
              "voters": 212
            }
          ],
          "SADOOLTOUGGA": [
            {
              "station": "ECOLE PUBLIQUE DE SADOOL MANA / A",
              "voters": 316
            }
          ],
          "KOULADJE": [
            {
              "station": "ECOLE PUBLIQUE DE SOANGOR / A",
              "voters": 475
            }
          ],
          "SOANGOR": [
            {
              "station": "ECOLE PUBLIQUE DE SOANGOR / A",
              "voters": 475
            }
          ],
          "BARRIERE": [
            {
              "station": "ECOLE PUBLIQUE DE WASSANDE / A",
              "voters": 1274
            }
          ],
          "MOKMO": [
            {
              "station": "ECOLE PUBLIQUE DE WASSANDE / A",
              "voters": 1274
            }
          ],
          "WASSANDE": [
            {
              "station": "ECOLE PUBLIQUE DE WASSANDE / A",
              "voters": 1274
            }
          ],
          "WOURO-SANGUE": [
            {
              "station": "ECOLE PUBLIQUE DE WOURO-SANGUE / A",
              "voters": 582
            }
          ],
          "FORI": [
            {
              "station": "EP FORI / A",
              "voters": 53
            }
          ],
          "LAOURE": [
            {
              "station": "HANG. COMM LAOURE BAYA / A",
              "voters": 135
            }
          ],
          "BAYA": [
            {
              "station": "HANG. COMM LAOURE BAYA / A",
              "voters": 135
            }
          ],
          "KOSSONO": [
            {
              "station": "HANGAR COMM. DE VONA / A",
              "voters": 54
            }
          ],
          "MAFIL": [
            {
              "station": "HANGAR COMM. DE VONA / A",
              "voters": 91
            }
          ],
          "MAKANEDJIDJI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE  MAKANEDJIDJI / A",
              "voters": 137
            }
          ],
          "DASSAKOUL": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE DASSAKOUL /  A",
              "voters": 126
            }
          ],
          "KONATOUKOUR": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE DASSAKOUL /  A",
              "voters": 1114
            }
          ],
          "VONA": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE DASSAKOUL /  A",
              "voters": 180
            }
          ],
          "MAMOUMI": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MAMOUMI / A",
              "voters": 200
            }
          ],
          "MBIDOU": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE MBIDOU / A",
              "voters": 102
            }
          ],
          "WADEN": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE WADEN YOKO  /A",
              "voters": 90
            }
          ],
          "YOKO": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE WADEN YOKO  /A",
              "voters": 90
            }
          ]
        }
      },
      "MBERE": {
        "DIR": {
          "MBARTOUA": [
            {
              "station": "CASE COM. MBARTOUA PASSI / A",
              "voters": 210
            }
          ],
          "PASSI": [
            {
              "station": "CASE COM. MBARTOUA PASSI / A",
              "voters": 210
            }
          ],
          "ANCIEN": [
            {
              "station": "CASE COMMUNAUTAIRE ANCIEN BINAKO / A",
              "voters": 132
            }
          ],
          "BINAKO": [
            {
              "station": "CASE COMMUNAUTAIRE ANCIEN BINAKO / A",
              "voters": 132
            }
          ],
          "DIR": [
            {
              "station": "CASE COMMUNAUTAIRE ANCIEN BINAKO / A",
              "voters": 4870
            }
          ],
          "BADI": [
            {
              "station": "CASE COMMUNAUTAIRE BADI / A",
              "voters": 141
            }
          ],
          "GBAGO": [
            {
              "station": "CASE COMMUNAUTAIRE DE GBAGO / A",
              "voters": 38
            }
          ],
          "DJEREM": [
            {
              "station": "CASE COMMUNAUTAIRE DJEREM / A",
              "voters": 169
            }
          ],
          "MALINGARA": [
            {
              "station": "CASE COMMUNAUTAIRE MALINGARA / A",
              "voters": 96
            }
          ],
          "MOINAM": [
            {
              "station": "CASE COMMUNAUTAIRE MOINAM / A",
              "voters": 59
            }
          ],
          "NYONGAKE": [
            {
              "station": "CASE COMMUNAUTAIRE NYONGAKE / A",
              "voters": 146
            }
          ],
          "WENDOKA": [
            {
              "station": "CASE COMMUNAUTAIRE WENDOKA / A",
              "voters": 48
            }
          ],
          "TENAH": [
            {
              "station": "ECOLE BILINGUE DIR / A",
              "voters": 451
            }
          ],
          "SAFOU": [
            {
              "station": "ECOLE BILINGUE DIR / A",
              "voters": 451
            }
          ],
          "TOMEDO": [
            {
              "station": "ECOLE DES PARENTS TOMEDO / A",
              "voters": 307
            }
          ],
          "MATOKO": [
            {
              "station": "EP ALI AFFAIRE / A",
              "voters": 245
            }
          ],
          "BADJER": [
            {
              "station": "EP BADJER / A",
              "voters": 803
            }
          ],
          "BAGODO": [
            {
              "station": "EP BAGODO / A",
              "voters": 959
            }
          ],
          "BATOUA": [
            {
              "station": "EP BATOUA PANGAR / A",
              "voters": 304
            }
          ],
          "PANGAR": [
            {
              "station": "EP BATOUA PANGAR / A",
              "voters": 304
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA ZIKI / A",
              "voters": 171
            }
          ],
          "ZIKI": [
            {
              "station": "EP BEKA ZIKI / A",
              "voters": 171
            }
          ],
          "BEYALA": [
            {
              "station": "EP BEYALA / A",
              "voters": 188
            }
          ],
          "BINDIBA": [
            {
              "station": "EP BINDIBA / A",
              "voters": 984
            }
          ],
          "BINMBAPPE": [
            {
              "station": "EP BINMBAPPE / A",
              "voters": 265
            }
          ],
          "GBEZAH": [
            {
              "station": "EP BINMBAPPE / A",
              "voters": 453
            }
          ],
          "BOFORO": [
            {
              "station": "EP BOFORO / A",
              "voters": 494
            }
          ],
          "BOY": [
            {
              "station": "EP BOY BAYA / A",
              "voters": 579
            }
          ],
          "BAYA": [
            {
              "station": "EP BOY BAYA / A",
              "voters": 579
            }
          ],
          "SIMI": [
            {
              "station": "EP BOY BAYA / A",
              "voters": 1158
            }
          ],
          "DOBIRI": [
            {
              "station": "EP DOBIRI / A",
              "voters": 91
            }
          ],
          "DOUA": [
            {
              "station": "EP DOUA / A",
              "voters": 233
            }
          ],
          "GAZAGAZADE": [
            {
              "station": "EP GAZAGAZADE / A",
              "voters": 350
            }
          ],
          "GORO": [
            {
              "station": "EP GORO / A",
              "voters": 284
            }
          ],
          "GUIZORE": [
            {
              "station": "EP GUIZORE / A",
              "voters": 225
            }
          ],
          "KALALDI": [
            {
              "station": "EP KALALDI / A",
              "voters": 1028
            }
          ],
          "KELA": [
            {
              "station": "EP KELA SAMI / A",
              "voters": 317
            }
          ],
          "SAMI": [
            {
              "station": "EP KELA SAMI / A",
              "voters": 317
            }
          ],
          "KOUNDE": [
            {
              "station": "EP KOUNDE / A",
              "voters": 213
            }
          ],
          "LAMOU": [
            {
              "station": "EP LAMOU / A",
              "voters": 100
            }
          ],
          "MBELLA": [
            {
              "station": "EP MBELLA / A",
              "voters": 256
            }
          ],
          "MBIGORO": [
            {
              "station": "EP MBIGORO I / A",
              "voters": 702
            }
          ],
          "PANGARA": [
            {
              "station": "EP PANGARA 4 / A",
              "voters": 36
            }
          ],
          "RAOUZANAM": [
            {
              "station": "EP RAOUZANAM / A",
              "voters": 166
            }
          ],
          "SOURMA": [
            {
              "station": "EP SOURMA / A",
              "voters": 480
            }
          ],
          "WAAH": [
            {
              "station": "EP WAAH / A",
              "voters": 632
            }
          ],
          "TIKORO": [
            {
              "station": "LYCEE DIR / A",
              "voters": 185
            }
          ],
          "MBORGUENE": [
            {
              "station": "LYCEE DIR / A",
              "voters": 185
            }
          ]
        },
        "DJOHONG": {
          "DJAKONG": [
            {
              "station": "CASE COMMUNAUTAIRE DJAKONG / A",
              "voters": 79
            }
          ],
          "HOSSERE": [
            {
              "station": "CES DE NYARMBANG / A",
              "voters": 95
            }
          ],
          "GADJI": [
            {
              "station": "CES DE NYARMBANG / A",
              "voters": 95
            }
          ],
          "DJIBO": [
            {
              "station": "CETIC DE DJOHONG / A",
              "voters": 75
            }
          ],
          "DJONNE": [
            {
              "station": "ECOLE DES PARENTS DJONNE / A",
              "voters": 80
            }
          ],
          "BABOUA": [
            {
              "station": "EP BABOUA / A",
              "voters": 137
            }
          ],
          "BAH": [
            {
              "station": "EP BAH NDAI / A",
              "voters": 76
            }
          ],
          "NDAI": [
            {
              "station": "EP BAH NDAI / A",
              "voters": 76
            }
          ],
          "BATOURE": [
            {
              "station": "EP BATOURE ZIM / A",
              "voters": 166
            }
          ],
          "ZIM": [
            {
              "station": "EP BATOURE ZIM / A",
              "voters": 91
            }
          ],
          "BEE": [
            {
              "station": "EP BEE DJAORO / A",
              "voters": 136
            }
          ],
          "DJAORO": [
            {
              "station": "EP BEE DJAORO / A",
              "voters": 136
            }
          ],
          "NAZARETH": [
            {
              "station": "EP BEE DJAORO / A",
              "voters": 136
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA PETEL / A",
              "voters": 191
            }
          ],
          "PETEL": [
            {
              "station": "EP BEKA PETEL / A",
              "voters": 191
            }
          ],
          "BORGOP": [
            {
              "station": "EP BORGOP / A",
              "voters": 323
            }
          ],
          "DAMISSA": [
            {
              "station": "EP DAMISSA / A",
              "voters": 327
            }
          ],
          "DARE": [
            {
              "station": "EP DARE I / A",
              "voters": 369
            }
          ],
          "MBONDO": [
            {
              "station": "EP DARE MBONDO / A",
              "voters": 268
            }
          ],
          "DJAOROU": [
            {
              "station": "EP DJAOROU MONE / A",
              "voters": 395
            }
          ],
          "MONE": [
            {
              "station": "EP DJAOROU MONE / A",
              "voters": 395
            }
          ],
          "GANDINANG": [
            {
              "station": "EP GANDINANG / A",
              "voters": 534
            }
          ],
          "GBATOUA": [
            {
              "station": "EP GBATOUA / A",
              "voters": 132
            }
          ],
          "DJOHONG": [
            {
              "station": "EP GROUPE I DJOHONG / A",
              "voters": 2304
            }
          ],
          "LAINDE": [
            {
              "station": "EP LAINDE MAMI / A",
              "voters": 153
            }
          ],
          "MAMI": [
            {
              "station": "EP LAINDE MAMI / A",
              "voters": 153
            }
          ],
          "LAMOU": [
            {
              "station": "EP LAMOU / A",
              "voters": 502
            }
          ],
          "MBELLA": [
            {
              "station": "EP MBELLA NGOU / A",
              "voters": 168
            }
          ],
          "NGOU": [
            {
              "station": "EP MBELLA NGOU / A",
              "voters": 168
            }
          ],
          "MBEWE": [
            {
              "station": "EP MBEWE MIDAL / A",
              "voters": 238
            }
          ],
          "MIDAL": [
            {
              "station": "EP MBEWE MIDAL / A",
              "voters": 238
            }
          ],
          "NABEMO": [
            {
              "station": "EP NABEMO / A",
              "voters": 564
            }
          ],
          "NDAWE": [
            {
              "station": "EP NDAWE / A",
              "voters": 264
            }
          ],
          "OURO": [
            {
              "station": "EP OURO ADDE / A",
              "voters": 436
            }
          ],
          "ADDE": [
            {
              "station": "EP OURO ADDE / A",
              "voters": 436
            }
          ],
          "WANGOU": [
            {
              "station": "EP WANGOU / A",
              "voters": 49
            }
          ],
          "YAMBA": [
            {
              "station": "EP YAMBA / A",
              "voters": 1093
            }
          ],
          "YARMBANG": [
            {
              "station": "EP YARMBANG / A",
              "voters": 1066
            }
          ],
          "NGAOUZORO": [
            {
              "station": "ESPLANADE CHEFFERIE NGAOUZORO / A",
              "voters": 154
            }
          ],
          "MBOUDOUA": [
            {
              "station": "LYCEE BILINGUE DE DJOHONG / A",
              "voters": 257
            }
          ]
        },
        "MEIGANGA": {
          "MBELLA": [
            {
              "station": "CASE COMMUNAUTAIRE SABONGARI BELA /  A",
              "voters": 97
            }
          ],
          "WANTAMO": [
            {
              "station": "CASE COMMUNAUTAIRE WANTAMO / A",
              "voters": 59
            }
          ],
          "BONWEN": [
            {
              "station": "CENTRE DE PROMOTIONN DE LA FEMME / A",
              "voters": 387
            }
          ],
          "NDAA": [
            {
              "station": "DD TRANSPORTS / A",
              "voters": 842
            }
          ],
          "ZANDABA": [
            {
              "station": "DD TRANSPORTS / A",
              "voters": 14378
            }
          ],
          "DOOBEZO": [
            {
              "station": "DEL DEP TRAVAUX PUBLICS / A",
              "voters": 346
            }
          ],
          "BONABERI": [
            {
              "station": "DEL DPT EMPLOI / A",
              "voters": 525
            }
          ],
          "BANTADJE": [
            {
              "station": "DEL DPT HABITAT ET DEV URBAIN / A",
              "voters": 1150
            }
          ],
          "ARDO": [
            {
              "station": "DEL DPT PETITES ET MOYENNES  ENTREPRISES / A",
              "voters": 1251
            }
          ],
          "BAKARI": [
            {
              "station": "DEL DPT PETITES ET MOYENNES  ENTREPRISES / A",
              "voters": 726
            }
          ],
          "BEM": [
            {
              "station": "DEL DPT PETITES ET MOYENNES  ENTREPRISES / A",
              "voters": 726
            }
          ],
          "ANCIEN": [
            {
              "station": "ECOLE DES PARENTS ANCIEN BAINA / A",
              "voters": 61
            }
          ],
          "BAINA": [
            {
              "station": "ECOLE DES PARENTS ANCIEN BAINA / A",
              "voters": 211
            }
          ],
          "BARDE": [
            {
              "station": "ECOLE DES PARENTS BARDE / A",
              "voters": 49
            }
          ],
          "DJALO": [
            {
              "station": "ECOLE DES PARENTS DJALO / A",
              "voters": 101
            }
          ],
          "DOKOLIM": [
            {
              "station": "ECOLE DES PARENTS DOKOLIM / A",
              "voters": 323
            }
          ],
          "DOLE": [
            {
              "station": "ECOLE DES PARENTS DOLE / A",
              "voters": 28
            }
          ],
          "FELL": [
            {
              "station": "ECOLE DES PARENTS FELL / A",
              "voters": 433
            }
          ],
          "GBATEN": [
            {
              "station": "ECOLE DES PARENTS GBATEN / A",
              "voters": 81
            }
          ],
          "LORTANG": [
            {
              "station": "ECOLE DES PARENTS LORTANG / A",
              "voters": 57
            }
          ],
          "MAMA": [
            {
              "station": "ECOLE DES PARENTS MAMA WASSANDE / A",
              "voters": 33
            }
          ],
          "WASSANDE": [
            {
              "station": "ECOLE DES PARENTS MAMA WASSANDE / A",
              "voters": 33
            }
          ],
          "MBERE": [
            {
              "station": "ECOLE DES PARENTS MBERE / A",
              "voters": 3299
            }
          ],
          "MOUFECK": [
            {
              "station": "ECOLE DES PARENTS MOUFECK / A",
              "voters": 39
            }
          ],
          "NDERA": [
            {
              "station": "ECOLE DES PARENTS NDERA / A",
              "voters": 38
            }
          ],
          "SALAO": [
            {
              "station": "ECOLE DES PARENTS SALAO / A",
              "voters": 43
            }
          ],
          "BEGUEM": [
            {
              "station": "ECOLE MATERNELLE LES AMIS / A",
              "voters": 405
            }
          ],
          "KOUR": [
            {
              "station": "ECOLE PUBLIQUE GROUPE 3B KOUR YOYO /  A",
              "voters": 39
            }
          ],
          "DABOLOE": [
            {
              "station": "ENIEG MEIGANGA / A",
              "voters": 615
            }
          ],
          "MBOU": [
            {
              "station": "EP BAINA MBOU / A",
              "voters": 150
            }
          ],
          "BARKI": [
            {
              "station": "EP BARKI / A",
              "voters": 81
            }
          ],
          "BEKA": [
            {
              "station": "EP BEKA / A",
              "voters": 1054
            }
          ],
          "BEMBARANG": [
            {
              "station": "EP BEMBARANG / A",
              "voters": 93
            }
          ],
          "BOUNOU": [
            {
              "station": "EP BOUNOU / A",
              "voters": 99
            }
          ],
          "DAKERE": [
            {
              "station": "EP DAKERE / A",
              "voters": 187
            }
          ],
          "DANA": [
            {
              "station": "EP DANA / A",
              "voters": 75
            }
          ],
          "DANKALI": [
            {
              "station": "EP DANKALI / A",
              "voters": 288
            }
          ],
          "DJALINGO": [
            {
              "station": "EP DJALINGO / A",
              "voters": 125
            }
          ],
          "DJAORO": [
            {
              "station": "EP DJAORO DOUA / A",
              "voters": 581
            }
          ],
          "DOUA": [
            {
              "station": "EP DJAORO DOUA / A",
              "voters": 139
            }
          ],
          "DJOUZAMI": [
            {
              "station": "EP DJOUZAMI / A",
              "voters": 407
            }
          ],
          "YEL": [
            {
              "station": "EP DOUA YEL / A",
              "voters": 83
            }
          ],
          "DOZOUI": [
            {
              "station": "EP DOZOUI / A",
              "voters": 239
            }
          ],
          "MIKILA": [
            {
              "station": "EP DOZOUI / A",
              "voters": 239
            }
          ],
          "FADA": [
            {
              "station": "EP FADA / A",
              "voters": 1050
            }
          ],
          "ADAMOU": [
            {
              "station": "EP FADA / A",
              "voters": 525
            }
          ],
          "SOUDI": [
            {
              "station": "EP FADA / A",
              "voters": 525
            }
          ],
          "GANKOMBOL": [
            {
              "station": "EP GANKOMBOL / A",
              "voters": 440
            }
          ],
          "GARGA": [
            {
              "station": "EP GANKOMBOL / A",
              "voters": 1199
            }
          ],
          "LIMBONA": [
            {
              "station": "EP GANKOMBOL / A",
              "voters": 1199
            }
          ],
          "GBAFOUCK": [
            {
              "station": "EP GBAFOUCK HOSSERE / A",
              "voters": 65
            }
          ],
          "HOSSERE": [
            {
              "station": "EP GBAFOUCK HOSSERE / A",
              "voters": 65
            }
          ],
          "GBAGBONGO": [
            {
              "station": "EP GBAGBONGO / A",
              "voters": 485
            }
          ],
          "GBATA": [
            {
              "station": "EP GBATA / A",
              "voters": 114
            }
          ],
          "NORD": [
            {
              "station": "EP GBATA / A",
              "voters": 77
            }
          ],
          "GBATOUA": [
            {
              "station": "EP GBATOUA GODOLE / A",
              "voters": 1877
            }
          ],
          "GODOLE": [
            {
              "station": "EP GBATOUA GODOLE / A",
              "voters": 1877
            }
          ],
          "GBAWAR": [
            {
              "station": "EP GBAWAR / A",
              "voters": 182
            }
          ],
          "GBOUTOU": [
            {
              "station": "EP GBOUTOU / A",
              "voters": 445
            }
          ],
          "GOUIGO": [
            {
              "station": "EP GOUIGO / A",
              "voters": 63
            }
          ],
          "FOULBERE": [
            {
              "station": "EP GP1A MEIGANGA / A",
              "voters": 5044
            }
          ],
          "DABO": [
            {
              "station": "EP GP1A MEIGANGA / A",
              "voters": 2522
            }
          ],
          "HAMADJANGUI": [
            {
              "station": "EP GP1A MEIGANGA / A",
              "voters": 2522
            }
          ],
          "HAOUSSA": [
            {
              "station": "EP GP1A MEIGANGA / A",
              "voters": 3196
            }
          ],
          "ELEVAGE": [
            {
              "station": "EP GP2 MEIGANGA / A",
              "voters": 688
            }
          ],
          "SABONGARI": [
            {
              "station": "EP GP3 MEIGANGA / A",
              "voters": 6083
            }
          ],
          "BASSIROU": [
            {
              "station": "EP GP3 MEIGANGA / A",
              "voters": 2798
            }
          ],
          "MAMOUDOU": [
            {
              "station": "EP GP3 MEIGANGA / A",
              "voters": 2798
            }
          ],
          "GUNBELA": [
            {
              "station": "EP GUNBELA / A",
              "voters": 1069
            }
          ],
          "HORE": [
            {
              "station": "EP HORE KONI / A",
              "voters": 306
            }
          ],
          "KONI": [
            {
              "station": "EP HORE KONI / A",
              "voters": 306
            }
          ],
          "ASSOURA": [
            {
              "station": "EP KAAKA / A",
              "voters": 642
            }
          ],
          "KAAKA": [
            {
              "station": "EP KAAKA / A",
              "voters": 642
            }
          ],
          "KOMBO": [
            {
              "station": "EP KOMBO LAKA / A",
              "voters": 1301
            }
          ],
          "LAKA": [
            {
              "station": "EP KOMBO LAKA / A",
              "voters": 1444
            }
          ],
          "KPAAMA": [
            {
              "station": "EP KPAAMA / A",
              "voters": 173
            }
          ],
          "NGOLORI": [
            {
              "station": "EP KPAAMA / A",
              "voters": 173
            }
          ],
          "KPOCKO'O": [
            {
              "station": "EP KPOCKO'O / A",
              "voters": 996
            }
          ],
          "PETEL": [
            {
              "station": "EP LAKA PETEL / A",
              "voters": 143
            }
          ],
          "GBAGUETE": [
            {
              "station": "EP LAWANE / A",
              "voters": 215
            }
          ],
          "LAWANE": [
            {
              "station": "EP LAWANE / A",
              "voters": 215
            }
          ],
          "LOKOTI": [
            {
              "station": "EP LOKOTI / A",
              "voters": 1344
            }
          ],
          "MBANDJOUCK": [
            {
              "station": "EP LOKOTI / A",
              "voters": 1344
            }
          ],
          "MAZEDOU": [
            {
              "station": "EP MAZEDOU / A",
              "voters": 74
            }
          ],
          "MBALE": [
            {
              "station": "EP MBALE / A",
              "voters": 301
            }
          ],
          "MBARANG": [
            {
              "station": "EP MBARANG / A",
              "voters": 1514
            }
          ],
          "ABDOURAOUFI": [
            {
              "station": "EP MBARANG / A",
              "voters": 757
            }
          ],
          "MAMANG": [
            {
              "station": "EP MBARANG / A",
              "voters": 757
            }
          ],
          "MBONDO": [
            {
              "station": "EP MBONDO / A",
              "voters": 350
            }
          ],
          "NGAZI": [
            {
              "station": "EP MBONDO / A",
              "voters": 596
            }
          ],
          "TINAH": [
            {
              "station": "EP MBONDO / A",
              "voters": 350
            }
          ],
          "MBOULA": [
            {
              "station": "EP MBOULA / A",
              "voters": 6295
            }
          ],
          "MBOULAI": [
            {
              "station": "EP MBOULAI / A",
              "voters": 270
            }
          ],
          "MEIDOUGOU": [
            {
              "station": "EP MEIDOUGOU / A",
              "voters": 3119
            }
          ],
          "MGBAKOUNGUE": [
            {
              "station": "EP MGBAKOUNGUE / A",
              "voters": 579
            }
          ],
          "NANDEKE": [
            {
              "station": "EP NANDEKE / A",
              "voters": 472
            }
          ],
          "NDONGUE": [
            {
              "station": "EP NDONGUE / A",
              "voters": 259
            }
          ],
          "NDOYONG": [
            {
              "station": "EP NDOYONG / A",
              "voters": 77
            }
          ],
          "NGAM": [
            {
              "station": "EP NGAM / A",
              "voters": 429
            }
          ],
          "NGANHI": [
            {
              "station": "EP NGAM / A",
              "voters": 1094
            }
          ],
          "PITOA": [
            {
              "station": "EP NINGA SONGO / A",
              "voters": 1237
            }
          ],
          "YABASSI": [
            {
              "station": "EP PROTESTANTE MEIGANGA / A",
              "voters": 1634
            }
          ],
          "YELWA": [
            {
              "station": "EP PROTESTANTE MEIGANGA / A",
              "voters": 3268
            }
          ],
          "ABBA": [
            {
              "station": "EP PROTESTANTE MEIGANGA / A",
              "voters": 1634
            }
          ],
          "MOUSSA": [
            {
              "station": "EP PROTESTANTE MEIGANGA / A",
              "voters": 1634
            }
          ],
          "GBABOE": [
            {
              "station": "EP SABONGARI GBABOE / A",
              "voters": 149
            }
          ],
          "MBORGUENE": [
            {
              "station": "EP SABONGARI MBORGUENE / A",
              "voters": 241
            }
          ],
          "TIKIRI": [
            {
              "station": "EP TIKIRI / A",
              "voters": 307
            }
          ],
          "YAFOUNOU": [
            {
              "station": "EP YAFOUNOU / A",
              "voters": 45
            }
          ],
          "YENDE": [
            {
              "station": "EP YENDE / A",
              "voters": 117
            }
          ],
          "SUD": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE GBATA SUD /  A",
              "voters": 37
            }
          ],
          "KOMBOUL": [
            {
              "station": "HANGAR COMMUNAUTAIRE DE KOMBOUL / A",
              "voters": 144
            }
          ],
          "KASSA": [
            {
              "station": "HANGAR KASSA ZARA / A",
              "voters": 65
            }
          ],
          "ZARA": [
            {
              "station": "HANGAR KASSA ZARA / A",
              "voters": 65
            }
          ],
          "ARABE": [
            {
              "station": "LYCEE BILINGUE MEIGANGA / A",
              "voters": 3212
            }
          ],
          "GUIMINI": [
            {
              "station": "LYCEE BILINGUE MEIGANGA / A",
              "voters": 3212
            }
          ],
          "SOBEA": [
            {
              "station": "LYCEE BILINGUE MEIGANGA / A",
              "voters": 3212
            }
          ],
          "NGASSIRI": [
            {
              "station": "LYCEE CLASSIQUE MEIGANGA / A",
              "voters": 9036
            }
          ],
          "ELF": [
            {
              "station": "LYCEE CLASSIQUE MEIGANGA / A",
              "voters": 3012
            }
          ],
          "GBAHOKO": [
            {
              "station": "LYCEE CLASSIQUE MEIGANGA / A",
              "voters": 3012
            }
          ],
          "GONGA": [
            {
              "station": "LYCEE CLASSIQUE MEIGANGA / A",
              "voters": 3012
            }
          ],
          "CENTRE": [
            {
              "station": "RECETTE DES FINANCES MEIGANGA / A",
              "voters": 3372
            }
          ],
          "ADMINISTRATIF": [
            {
              "station": "RECETTE DES FINANCES MEIGANGA / A",
              "voters": 3372
            }
          ],
          "YIZORO": [
            {
              "station": "RECETTE DES FINANCES MEIGANGA / A",
              "voters": 1461
            }
          ],
          "YOYO": [
            {
              "station": "RECETTE DES FINANCES MEIGANGA / A",
              "voters": 1500
            }
          ],
          "DOUKOULOUKOU": [
            {
              "station": "SAR/SM MEIGANGA / A",
              "voters": 153
            }
          ],
          "KAIGAMA": [
            {
              "station": "SERVICE DPT AFFAIRES FONCTIERES / A",
              "voters": 259
            }
          ]
        },
        "NGAOUI": {
          "DOLE": [
            {
              "station": "CASE COMMUNAUTAIRE DE DOLE / A",
              "voters": 58
            }
          ],
          "BADOUNDA": [
            {
              "station": "ECOLE DES PARENTS BADOUNDA / A",
              "voters": 21
            }
          ],
          "OUMAROU": [
            {
              "station": "ECOLE DES PARENTS BAWAKA OUMAROU / A",
              "voters": 186
            }
          ],
          "DANMABIA": [
            {
              "station": "ECOLE DES PARENTS DANMABIA / A",
              "voters": 40
            }
          ],
          "CENTRE": [
            {
              "station": "ECOLE MATERNELLE - TACHA NGAOUI / A",
              "voters": 1086
            }
          ],
          "SANTE": [
            {
              "station": "ECOLE MATERNELLE - TACHA NGAOUI / A",
              "voters": 1086
            }
          ],
          "ALHAMDOU": [
            {
              "station": "EP ALHAMDOU / A",
              "voters": 568
            }
          ],
          "BAFOUCK": [
            {
              "station": "EP BAFOUCK / A",
              "voters": 603
            }
          ],
          "BAWAKA": [
            {
              "station": "EP BAWAKA KOE / A",
              "voters": 272
            }
          ],
          "KOE": [
            {
              "station": "EP BAWAKA KOE / A",
              "voters": 86
            }
          ],
          "DIEL": [
            {
              "station": "EP DIEL / A",
              "voters": 438
            }
          ],
          "DJABORI": [
            {
              "station": "EP DJABORI / A",
              "voters": 275
            }
          ],
          "GARGA-PELLA": [
            {
              "station": "EP GARGA-PELLA / A",
              "voters": 436
            }
          ],
          "NGOLO": [
            {
              "station": "EP NGOLO / A",
              "voters": 123
            }
          ],
          "SOBBA": [
            {
              "station": "EP SOBBA / A",
              "voters": 140
            }
          ],
          "TOURAKE": [
            {
              "station": "EP TOURAKE / A",
              "voters": 122
            }
          ],
          "WANDANDERRE": [
            {
              "station": "EP WANDANDERRE / A",
              "voters": 103
            }
          ],
          "LAMORDE": [
            {
              "station": "EPG1 NGAOUI / A",
              "voters": 1686
            }
          ],
          "LOMBE": [
            {
              "station": "EPG2 NGAOUI / A",
              "voters": 3141
            }
          ],
          "MBARANG": [
            {
              "station": "EPG3 NGAOUI / A",
              "voters": 2130
            }
          ]
        }
      }
    }
  }
};