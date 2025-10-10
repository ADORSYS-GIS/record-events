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
  "ADAMAOUA": {
    name: { en: "ADAMAWA", fr: "ADAMAOUA" },
    divisions: {
      "MAYO-BANYO": {
        "BANKIM": {
          "E.P DE LONGRASS / A": [
            {
              station: "LONGRASS",
              voters: 63
            },
          ],
          "E.P DE MAYO MOUKA / A": [
            {
              station: "MAYO",
              voters: 154
            },
            {
              station: "MOUKA",
              voters: 154
            },
          ],
          "E.P DE SARKI BAKA / A": [
            {
              station: "SANKI",
              voters: 186
            },
          ],
          "ECOLE CATHOLIQUE DE BANKIM / A": [
            {
              station: "TCHIMBLOK",
              voters: 2547
            },
          ],
          "ECOLE PARENTS MELI TENBONG KE / A": [
            {
              station: "MELI",
              voters: 281
            },
            {
              station: "TENBONG",
              voters: 281
            },
            {
              station: "KE(BARRAGE",
              voters: 281
            },
            {
              station: "LUNDI)",
              voters: 281
            },
          ],
          "ECOLE PRIVEE PROTESTANTE DE BANKIM / A": [
            {
              station: "MEWIDOK",
              voters: 307
            },
            {
              station: "NGUINKLO",
              voters: 1875
            },
          ],
          "ECOLE PRIVEE PROTESTANTE DE YIMBERE /  A": [
            {
              station: "YIMBERE",
              voters: 312
            },
          ],
          "ECOLE PROTESTANTE DE DJANG ET TONG /  A": [
            {
              station: "DJANG",
              voters: 762
            },
            {
              station: "TONG",
              voters: 762
            },
          ],
          "ECOLE PROTESTANTE DE KOUROUM / A": [
            {
              station: "KOUROUM",
              voters: 622
            },
            {
              station: "MAGNAM",
              voters: 622
            },
            {
              station: "NASSARAO",
              voters: 436
            },
            {
              station: "SARKI",
              voters: 622
            },
            {
              station: "BAKA",
              voters: 808
            },
          ],
          "ECOLE PUB. MBIRIDJOM / A": [
            {
              station: "MBIRIDJOM",
              voters: 594
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE LINGAM / A": [
            {
              station: "LINGAM",
              voters: 932
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE NYAKONG / A": [
            {
              station: "DJAYIE",
              voters: 1220
            },
            {
              station: "MAYO-SEINI",
              voters: 877
            },
            {
              station: "NYAKONG",
              voters: 2035
            },
          ],
          "ECOLE PUBLIQUE DE ATTA / A": [
            {
              station: "ATTA",
              voters: 2320
            },
          ],
          "ECOLE PUBLIQUE DE BANDAM / A": [
            {
              station: "BANDAM",
              voters: 1205
            },
          ],
          "ECOLE PUBLIQUE DE DIEKI / A": [
            {
              station: "DIEKI",
              voters: 615
            },
            {
              station: "MBANDOUOH",
              voters: 615
            },
            {
              station: "MVOUIBAM",
              voters: 768
            },
          ],
          "ECOLE PUBLIQUE DE FOUABANG / A": [
            {
              station: "FOUABANG",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE DE HAINARE ATTA / A": [
            {
              station: "HAINARE",
              voters: 476
            },
          ],
          "ECOLE PUBLIQUE DE KING-KONG / A": [
            {
              station: "KING-KONG",
              voters: 377
            },
          ],
          "ECOLE PUBLIQUE DE KONGUI-DOUOH / A": [
            {
              station: "KONGUI-DOUOH",
              voters: 653
            },
          ],
          "ECOLE PUBLIQUE DE KOUMTCHOUM / A": [
            {
              station: "KOUMTCHOUM",
              voters: 252
            },
          ],
          "ECOLE PUBLIQUE DE MALIM / A": [
            {
              station: "MALIM",
              voters: 283
            },
          ],
          "ECOLE PUBLIQUE DE MAPE SONEL / A": [
            {
              station: "BOITIKONG",
              voters: 608
            },
            {
              station: "CITE",
              voters: 608
            },
            {
              station: "SONEL",
              voters: 1216
            },
            {
              station: "KIPOH",
              voters: 1612
            },
            {
              station: "MAPE",
              voters: 608
            },
          ],
          "ECOLE PUBLIQUE DE MBONDJANGA / A": [
            {
              station: "MBONDJANGA",
              voters: 280
            },
          ],
          "ECOLE PUBLIQUE DE MGBADJI / A": [
            {
              station: "MGBADJI",
              voters: 248
            },
          ],
          "ECOLE PUBLIQUE DE MOINKOING / A": [
            {
              station: "MOINKOING",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE MONGBE / A": [
            {
              station: "MONGBE",
              voters: 468
            },
          ],
          "ECOLE PUBLIQUE DE NDEM-NDEM / A": [
            {
              station: "NDEM-NDEM",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE NDOUMDJANDI / A": [
            {
              station: "NDOUMDJANDI",
              voters: 581
            },
            {
              station: "NDOUMDJOM",
              voters: 1360
            },
          ],
          "ECOLE PUBLIQUE DE NGATTI / A": [
            {
              station: "GLORI",
              voters: 526
            },
            {
              station: "MBOUGAM",
              voters: 526
            },
            {
              station: "NGATTI",
              voters: 526
            },
          ],
          "ECOLE PUBLIQUE DE NGLOCHIFEING / A": [
            {
              station: "MGBETOH",
              voters: 249
            },
            {
              station: "NGLOCHIFEING",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE NYAMBOYA / A": [
            {
              station: "NYAMBOYA",
              voters: 1926
            },
          ],
          "ECOLE PUBLIQUE DE SOMIE / A": [
            {
              station: "KOTTI",
              voters: 1073
            },
            {
              station: "YOKASSALA",
              voters: 1073
            },
          ],
          "ECOLE PUBLIQUE DE SONGKOLONG / A": [
            {
              station: "SONGKOLONG",
              voters: 1567
            },
          ],
          "ECOLE PUBLIQUE DE TCHAMBA / A": [
            {
              station: "TCHAMBA",
              voters: 543
            },
          ],
          "ECOLE PUBLIQUE DE TCHIM / A": [
            {
              station: "TCHIM",
              voters: 649
            },
          ],
          "ECOLE PUBLIQUE GP.1 DE BANKIM / A": [
            {
              station: "NEW-TOWN",
              voters: 1113
            },
            {
              station: "SHE",
              voters: 1113
            },
          ],
          "EP ANCIEN BANDAM / A": [
            {
              station: "BANANIER",
              voters: 82
            },
          ],
          "EP BARRAGE MARDI / A": [
            {
              station: "BARRAGE",
              voters: 85
            },
            {
              station: "MARDI",
              voters: 85
            },
            {
              station: "KOLEGI",
              voters: 85
            },
            {
              station: "MAIGORO",
              voters: 85
            },
            {
              station: "TUNGA",
              voters: 85
            },
            {
              station: "WAGONO",
              voters: 85
            },
            {
              station: "ZINA",
              voters: 85
            },
          ],
          "EP DE MISSILIKA / A": [
            {
              station: "MISSILIKA",
              voters: 76
            },
            {
              station: "SANDAMA",
              voters: 76
            },
          ],
          "EP LOUMDE / A": [
            {
              station: "LOUMDE1",
              voters: 65
            },
            {
              station: "LOUMDE2",
              voters: 65
            },
            {
              station: "NAKANI",
              voters: 130
            },
          ],
          "EP MVOUBAM / A": [
            {
              station: "NJISSEN",
              voters: 153
            },
          ],
          "EP NEW NGONG / A": [
            {
              station: "BONABERI",
              voters: 54
            },
            {
              station: "NEW",
              voters: 54
            },
            {
              station: "NGONG",
              voters: 54
            },
          ],
          "EP NGOULORI / A": [
            {
              station: "NGOULORI",
              voters: 76
            },
          ],
          "EP TAPON KONGUI / A": [
            {
              station: "BAKASSI",
              voters: 202
            },
            {
              station: "ABBA",
              voters: 120
            },
            {
              station: "COTE",
              voters: 120
            },
            {
              station: "CAMPEMENT",
              voters: 341
            },
            {
              station: "KOTOKO",
              voters: 188
            },
            {
              station: "DOUOUH",
              voters: 120
            },
            {
              station: "MOLEMA",
              voters: 120
            },
            {
              station: "BAMOUN",
              voters: 120
            },
            {
              station: "TANPON",
              voters: 120
            },
            {
              station: "KONGUI",
              voters: 120
            },
          ],
          "EP TONG / A": [
            {
              station: "SA'AH",
              voters: 74
            },
          ],
          "EPP CAMPEMENTS UNIS / A": [
            {
              station: "ADAM",
              voters: 68
            },
            {
              station: "GRAND",
              voters: 68
            },
            {
              station: "BADAY",
              voters: 68
            },
            {
              station: "ARABE",
              voters: 68
            },
            {
              station: "CAMPEMENTS",
              voters: 68
            },
            {
              station: "UNIS",
              voters: 68
            },
          ],
          "FOYER COMMUNAUTAIRE DE BANKIM / A": [
            {
              station: "BOUPLE",
              voters: 878
            },
            {
              station: "CHEFFERIE",
              voters: 954
            },
            {
              station: "MWUMCHIM",
              voters: 9009
            },
            {
              station: "NDANGUE",
              voters: 5336
            },
            {
              station: "TONEGOUONG",
              voters: 878
            },
            {
              station: "YIWET",
              voters: 2267
            },
          ],
          "FOYER MUNICIPAL DE BANKIM / A": [
            {
              station: "QUARTIER",
              voters: 1509
            },
            {
              station: "HAOUSSA",
              voters: 1389
            },
          ],
          "MISSION CATHOLIQUE DE BANKIM / A": [
            {
              station: "QUARTIERS",
              voters: 343
            },
            {
              station: "YAMBA",
              voters: 343
            },
            {
              station: "BANSO",
              voters: 343
            },
          ],
          "PLACE DU MARCHE ATTA PETEL / A": [
            {
              station: "PETEL",
              voters: 911
            },
            {
              station: "BINI",
              voters: 405
            },
          ],
          "PLACE DU MARCHE DE CHINGNAMBO / A": [
            {
              station: "CHINGNAMBO",
              voters: 286
            },
          ],
          "PLACE DU MARCHE DE HAINARE SOMIE / A": [
            {
              station: "SOMIE",
              voters: 1298
            },
          ],
          "PLACE DU MARCHE DE KIMI PETEL / A": [
            {
              station: "KIMI",
              voters: 651
            },
          ],
          "PLACE DU MARCHE DE KWI DAN(ALI MALI) / A": [
            {
              station: "KWI",
              voters: 570
            },
            {
              station: "DAN",
              voters: 570
            },
            {
              station: "ALI",
              voters: 570
            },
            {
              station: "MALI",
              voters: 570
            },
          ],
          "PLACE DU MARCHE DE NKLONG / A": [
            {
              station: "CHATEAU",
              voters: 17
            },
            {
              station: "MBODOUM",
              voters: 17
            },
            {
              station: "NGAH",
              voters: 17
            },
            {
              station: "NKLONG",
              voters: 17
            },
          ],
        },
        "BANYO": {
          "DEL DEP ELEVAGE DE MAYO-BANYO / A": [
            {
              station: "KOLERE",
              voters: 2203
            },
            {
              station: "PASTORAL",
              voters: 2203
            },
          ],
          "E. PUBLIQUE NDOGNAM TARAM YABAM  FOULBE / A": [
            {
              station: "NDOGNAM",
              voters: 470
            },
          ],
          "E.P DE TONGODJI / A": [
            {
              station: "TONGODJI",
              voters: 309
            },
          ],
          "ECOLE ANNEXE GROUPE 1 DE BANYO / A": [
            {
              station: "LEGAL",
              voters: 2533
            },
            {
              station: "GORO",
              voters: 2533
            },
            {
              station: "MBOULADJI",
              voters: 3207
            },
          ],
          "ECOLE ANNEXE TICKET / A": [
            {
              station: "DARES",
              voters: 1579
            },
            {
              station: "SALAM",
              voters: 1579
            },
            {
              station: "TICKET",
              voters: 1579
            },
          ],
          "ECOLE DES PARENTS / A": [
            {
              station: "SABAL",
              voters: 96
            },
            {
              station: "BOURDOU",
              voters: 96
            },
          ],
          "ECOLE DES PARENTS DE HORE  GASSANGUEL / A": [
            {
              station: "GASSANGUEL",
              voters: 118
            },
            {
              station: "MAGNAM",
              voters: 118
            },
          ],
          "ECOLE DES PARENTS DE KOUI MAYO  FOOUROU / A": [
            {
              station: "FOOUROU",
              voters: 836
            },
          ],
          "ECOLE DES PARENTS DE KOUI MAYO BODJI /  A": [
            {
              station: "BODJI",
              voters: 155
            },
          ],
          "ECOLE DES PARENTS DE MAYO BANYO  MBERKOU / A": [
            {
              station: "MBERKOU",
              voters: 126
            },
          ],
          "ECOLE DES PARENTS DE MAYO BOUTALI  NOMA / A": [
            {
              station: "NOMA",
              voters: 106
            },
          ],
          "ECOLE DES PARENTS DE SEBORE DJANABA /  A": [
            {
              station: "DJANABA",
              voters: 88
            },
          ],
          "ECOLE DES PARENTS DE WAMGUERI / A": [
            {
              station: "WAMGUERI",
              voters: 616
            },
          ],
          "ECOLE DES PARENTS GAMTI / A": [
            {
              station: "GAMTI",
              voters: 200
            },
            {
              station: "MAYO",
              voters: 8248
            },
            {
              station: "KELELE",
              voters: 2843
            },
          ],
          "ECOLE DES PARENTS MAYO LOUM / A": [
            {
              station: "LOUM",
              voters: 468
            },
          ],
          "ECOLE FRANCO ARABE DE BANYO / A": [
            {
              station: "GARLADJI",
              voters: 3135
            },
            {
              station: "KILAROU",
              voters: 1570
            },
            {
              station: "MAIANGOUA",
              voters: 1570
            },
            {
              station: "SARKI",
              voters: 1570
            },
            {
              station: "YAKI",
              voters: 1570
            },
          ],
          "ECOLE MATERNELLE ANNEXE DE BANYO / A": [
            {
              station: "DJOUTA",
              voters: 6221
            },
            {
              station: "FADA",
              voters: 8117
            },
            {
              station: "KOUI",
              voters: 2759
            },
            {
              station: "DJAMNATI",
              voters: 2236
            },
            {
              station: "MBAMTI",
              voters: 7348
            },
            {
              station: "DJOUMBARE",
              voters: 4191
            },
            {
              station: "MBEWERE",
              voters: 4377
            },
            {
              station: "PEDENG",
              voters: 1844
            },
            {
              station: "TCHABBAL",
              voters: 2507
            },
            {
              station: "SEOUDI",
              voters: 2119
            },
          ],
          "ECOLE ONG DE MAYO BOUTALI KATARKO / A": [
            {
              station: "BOUTALI",
              voters: 276
            },
            {
              station: "KATARKO",
              voters: 2692
            },
          ],
          "ECOLE PARENTS MAYO DJARANDI B,  DJAMAN / A": [
            {
              station: "DJAMAN",
              voters: 162
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE BANYO / A": [
            {
              station: "BARAINI",
              voters: 1720
            },
            {
              station: "SABONGARI",
              voters: 2145
            },
          ],
          "ECOLE PUBLIQUE BILINGUE ALLAT / A": [
            {
              station: "ALLAT",
              voters: 3867
            },
          ],
          "ECOLE PUBLIQUE BOUDJOUNKOURA / A": [
            {
              station: "BOUDJOUNKOURA",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE ALTINE / A": [
            {
              station: "ALTINE",
              voters: 203
            },
            {
              station: "MBONSOUM",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE DE ASSAWE / A": [
            {
              station: "ASSAWE",
              voters: 344
            },
          ],
          "ECOLE PUBLIQUE DE DADAWAL / A": [
            {
              station: "DADAWAL",
              voters: 166
            },
          ],
          "ECOLE PUBLIQUE DE DJEM / A": [
            {
              station: "DJEM",
              voters: 288
            },
          ],
          "ECOLE PUBLIQUE DE GANDOUA / A": [
            {
              station: "GANDOUA",
              voters: 460
            },
            {
              station: "WAWA",
              voters: 2709
            },
          ],
          "ECOLE PUBLIQUE DE HORE MAYO KELELE / A": [
            {
              station: "HORE",
              voters: 1391
            },
          ],
          "ECOLE PUBLIQUE DE KASSALA WAWA / A": [
            {
              station: "KASSALA",
              voters: 2565
            },
          ],
          "ECOLE PUBLIQUE DE KOUI MAYO DJARANDI /  A": [
            {
              station: "DJARANDI",
              voters: 407
            },
          ],
          "ECOLE PUBLIQUE DE LABBARE BAYA / A": [
            {
              station: "LABBARE",
              voters: 372
            },
            {
              station: "BAYA",
              voters: 170
            },
          ],
          "ECOLE PUBLIQUE DE LABBARE SEINI / A": [
            {
              station: "SEINI",
              voters: 202
            },
            {
              station: "MINGUEM",
              voters: 858
            },
          ],
          "ECOLE PUBLIQUE DE LASSEL / A": [
            {
              station: "LASSEL",
              voters: 188
            },
          ],
          "ECOLE PUBLIQUE DE LOUGGUEL / A": [
            {
              station: "LOUGGUEL",
              voters: 97
            },
          ],
          "ECOLE PUBLIQUE DE MAKKAM / A": [
            {
              station: "MAKKAM",
              voters: 220
            },
          ],
          "ECOLE PUBLIQUE DE MAYO BADJI FOULBE /  A": [
            {
              station: "BADJI",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE MAYO DJARANDI  LADDE / A": [
            {
              station: "LADDE",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE DE MAYO DOUROU / A": [
            {
              station: "DOUROU",
              voters: 80
            },
          ],
          "ECOLE PUBLIQUE DE MAYO LELEWAL / A": [
            {
              station: "LELEWAL",
              voters: 221
            },
          ],
          "ECOLE PUBLIQUE DE MAYO LINGWA / A": [
            {
              station: "LINGWA",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-BANYO  MINSANKAR / A": [
            {
              station: "MINSANKAR",
              voters: 119
            },
            {
              station: "GORDI",
              voters: 119
            },
          ],
          "ECOLE PUBLIQUE DE MBAH / A": [
            {
              station: "VOURE",
              voters: 808
            },
            {
              station: "MBAH",
              voters: 690
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI ALARBA / A": [
            {
              station: "ALARBA",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI BEKA / A": [
            {
              station: "BEKA",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI DIPELE / A": [
            {
              station: "DIPELE",
              voters: 141
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI LAINDE / A": [
            {
              station: "LAINDE",
              voters: 214
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI LAINGA / A": [
            {
              station: "LAINGA",
              voters: 431
            },
          ],
          "ECOLE PUBLIQUE DE MBAMTI NYALEDJI / A": [
            {
              station: "NYALEDJI",
              voters: 149
            },
          ],
          "ECOLE PUBLIQUE DE MBASSEWA WAWA / A": [
            {
              station: "MBASSEWA",
              voters: 559
            },
          ],
          "ECOLE PUBLIQUE DE MBENGUEDJE FOULBE  /A": [
            {
              station: "MBENGUEDJE",
              voters: 806
            },
          ],
          "ECOLE PUBLIQUE DE MBONHARI / A": [
            {
              station: "MBONHARI",
              voters: 450
            },
          ],
          "ECOLE PUBLIQUE DE NDI WAWA / A": [
            {
              station: "NDI",
              voters: 329
            },
          ],
          "ECOLE PUBLIQUE DE NGAMNI  MBAMWOURKE / A": [
            {
              station: "NGAMNI",
              voters: 275
            },
            {
              station: "MBAMWOURKE",
              voters: 275
            },
          ],
          "ECOLE PUBLIQUE DE NGOUM FOULBE / A": [
            {
              station: "NGOUM",
              voters: 1242
            },
          ],
          "ECOLE PUBLIQUE DE NYARA SEBORE DARLE  /A": [
            {
              station: "NYARA",
              voters: 297
            },
            {
              station: "SEBORE",
              voters: 385
            },
            {
              station: "DARLE",
              voters: 297
            },
          ],
          "ECOLE PUBLIQUE DE NYATTI / A": [
            {
              station: "NYATTI",
              voters: 266
            },
          ],
          "ECOLE PUBLIQUE DE NYAWA / A": [
            {
              station: "NYAWA",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE SAKKOUDE / A": [
            {
              station: "SAKKOUDE",
              voters: 220
            },
          ],
          "ECOLE PUBLIQUE DE SAMBOLABO / A": [
            {
              station: "SAMBOLABO",
              voters: 1731
            },
          ],
          "ECOLE PUBLIQUE DE SISSIM / A": [
            {
              station: "SISSIM",
              voters: 125
            },
          ],
          "ECOLE PUBLIQUE DE TARAM SIRI / A": [
            {
              station: "SIRI",
              voters: 730
            },
          ],
          "ECOLE PUBLIQUE DE TARAM YABAM FOULBE  /A": [
            {
              station: "YABAM",
              voters: 569
            },
          ],
          "ECOLE PUBLIQUE DE TCHABBAL GNAGNIRI /  A": [
            {
              station: "GNAGNIRI",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE DE TCHABBAL MBITI / A": [
            {
              station: "MBITI",
              voters: 210
            },
          ],
          "ECOLE PUBLIQUE DE TOUKOUROUA / A": [
            {
              station: "TOUKOUROUA",
              voters: 285
            },
          ],
          "ECOLE PUBLIQUE GP3 DE BANYO / A": [
            {
              station: "YANI",
              voters: 2457
            },
            {
              station: "WOUTA",
              voters: 598
            },
            {
              station: "QUARTIER",
              voters: 1994
            },
            {
              station: "ADJIA",
              voters: 598
            },
          ],
          "ECOLE PUBLIQUE GROUPE 4 DE BANYO / A": [
            {
              station: "GALDIMA",
              voters: 1239
            },
            {
              station: "MALOUMRI",
              voters: 1565
            },
            {
              station: "TACHA",
              voters: 1565
            },
          ],
          "ECOLE PUBLIQUE HORE TARAM FOULBE / A": [
            {
              station: "TARAM",
              voters: 2441
            },
            {
              station: "FOULBE",
              voters: 2575
            },
          ],
          "ECOLE PUBLIQUE HORE TARAM TORBI / A": [
            {
              station: "TORBI",
              voters: 409
            },
          ],
          "ECOLE PUBLIQUE LESS WOUROUM / A": [
            {
              station: "LESS",
              voters: 132
            },
            {
              station: "WOUROUM",
              voters: 769
            },
          ],
          "ECOLE PUBLIQUE MAYO BANYO BARIKI / A": [
            {
              station: "BANYO",
              voters: 626
            },
            {
              station: "BARIKI",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE MAYO BANYO MATTI / A": [
            {
              station: "MATTI",
              voters: 182
            },
          ],
          "ECOLE PUBLIQUE MAYO SEOUSSI / A": [
            {
              station: "SEOUSSI",
              voters: 129
            },
          ],
          "ECOLE PUBLIQUE NYAMSOUMRE / A": [
            {
              station: "NYAMSOUMRE",
              voters: 234
            },
          ],
          "ECOLE PUBLIQUE OUMYARI WAWA / A": [
            {
              station: "OUMYARI",
              voters: 457
            },
          ],
          "ECOLE PUBLIQUE SANGOL SO'O / A": [
            {
              station: "SANGOL",
              voters: 125
            },
            {
              station: "SO'O",
              voters: 125
            },
          ],
          "EP DE MAYO KOULADJE / A": [
            {
              station: "KOULADJE",
              voters: 163
            },
          ],
          "EP DE MOUFOUM / A": [
            {
              station: "MAYO-BANYO",
              voters: 55
            },
            {
              station: "MOUFOUM",
              voters: 55
            },
          ],
          "EP DE YOUKSA / A": [
            {
              station: "CARREFOUR",
              voters: 152
            },
            {
              station: "TAPAWA",
              voters: 304
            },
            {
              station: "YOUKOTODOU",
              voters: 152
            },
            {
              station: "YOUKSA",
              voters: 152
            },
          ],
          "HANGAR DE NGARBER / A": [
            {
              station: "CAMP",
              voters: 85
            },
            {
              station: "BIR",
              voters: 85
            },
          ],
          "LYCEE BILINGUE DE BANYO / A": [
            {
              station: "SANS",
              voters: 86
            },
            {
              station: "PEINTURE",
              voters: 86
            },
          ],
          "MAIRIE DE BANYO / A": [
            {
              station: "ADMINISTRATIF",
              voters: 1310
            },
          ],
          "PLACE DU MARCHE DE BANI LOUGGA  TCHOLLI / A": [
            {
              station: "BANI",
              voters: 526
            },
            {
              station: "LOUGGA",
              voters: 703
            },
            {
              station: "TCHOLLI",
              voters: 526
            },
          ],
          "PLACE DU MARCHE DE NGOUM GASSIRI / A": [
            {
              station: "GASSIRI",
              voters: 135
            },
          ],
        },
        "MAYO-DARLE": {
          "ECOLE BILINGUE DE MAYO-DARLE / A": [
            {
              station: "BONABERI",
              voters: 1940
            },
            {
              station: "LOUGGA",
              voters: 970
            },
            {
              station: "FOOUROU",
              voters: 970
            },
            {
              station: "SEKANDE",
              voters: 970
            },
          ],
          "ECOLE DES PARENTS DE BOUNG 2 / A": [
            {
              station: "BOUNG",
              voters: 81
            },
          ],
          "ECOLE DES PARENTS DE MBALANG / A": [
            {
              station: "MBALANG",
              voters: 172
            },
          ],
          "ECOLE DES PARENTS DE MBOUNOUKOUM / A": [
            {
              station: "ASSAWE",
              voters: 158
            },
            {
              station: "BOUTOUKWAN",
              voters: 158
            },
            {
              station: "MBOUNOUKOUM",
              voters: 158
            },
          ],
          "ECOLE DES PARENTS MAYO-DARLE MINES /  A": [
            {
              station: "GOMNJOR",
              voters: 624
            },
            {
              station: "KOUZA",
              voters: 624
            },
            {
              station: "DARLE",
              voters: 624
            },
            {
              station: "MINES",
              voters: 624
            },
          ],
          "ECOLE FRANCO-ARABE DE MAYO-DARLE / A": [
            {
              station: "CAMPEMENT",
              voters: 276
            },
            {
              station: "CHATEAU",
              voters: 276
            },
            {
              station: "GADA",
              voters: 1272
            },
            {
              station: "PLAN",
              voters: 2544
            },
            {
              station: "TICKET",
              voters: 276
            },
          ],
          "ECOLE PRIV. CATH. MAYO DARLE / A": [
            {
              station: "TICKET-CHEFFERIE",
              voters: 996
            },
          ],
          "ECOLE PUBLIQUE DE BAMBOL / A": [
            {
              station: "BAMBOL",
              voters: 283
            },
            {
              station: "LESS",
              voters: 283
            },
            {
              station: "MAYO",
              voters: 907
            },
          ],
          "ECOLE PUBLIQUE DE BOUMDO / A": [
            {
              station: "BOUMDO",
              voters: 1432
            },
            {
              station: "CARREFOUR",
              voters: 716
            },
            {
              station: "LOUGGODJE",
              voters: 716
            },
            {
              station: "DJAGUI",
              voters: 716
            },
          ],
          "ECOLE PUBLIQUE DE GUISSIMI / A": [
            {
              station: "GUISSIMI",
              voters: 808
            },
          ],
          "ECOLE PUBLIQUE DE HAMOA / A": [
            {
              station: "HAMOA",
              voters: 424
            },
          ],
          "ECOLE PUBLIQUE DE HORE MAYO DARLE / A": [
            {
              station: "HORE",
              voters: 637
            },
            {
              station: "MAYO-DARLE",
              voters: 637
            },
            {
              station: "MAYO-",
              voters: 637
            },
            {
              station: "DANIEL",
              voters: 637
            },
            {
              station: "NGATTA",
              voters: 637
            },
            {
              station: "SATTABE",
              voters: 637
            },
          ],
          "ECOLE PUBLIQUE DE KEBAM / A": [
            {
              station: "KEBAM",
              voters: 111
            },
            {
              station: "FOULBE",
              voters: 111
            },
            {
              station: "SAKADJE",
              voters: 111
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-DJINGA / A": [
            {
              station: "MAYO-DJINGA",
              voters: 581
            },
            {
              station: "NGNAGBI",
              voters: 581
            },
          ],
          "ECOLE PUBLIQUE DE MBAMGUERI / A": [
            {
              station: "LAMOU",
              voters: 440
            },
            {
              station: "GOTEL",
              voters: 440
            },
            {
              station: "MAGNI",
              voters: 440
            },
            {
              station: "MBAMGUERI",
              voters: 440
            },
          ],
          "ECOLE PUBLIQUE DE MBILANG / A": [
            {
              station: "GASSOL",
              voters: 185
            },
            {
              station: "MBILANG",
              voters: 185
            },
          ],
          "ECOLE PUBLIQUE DE NGUESSAM / A": [
            {
              station: "NGUESSAM",
              voters: 386
            },
            {
              station: "NYARA",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE DE NYALANG / A": [
            {
              station: "MARCHE",
              voters: 343
            },
            {
              station: "MONDIAL",
              voters: 343
            },
            {
              station: "NYALANG",
              voters: 343
            },
            {
              station: "SAMANDJA",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE DE PANGARI / A": [
            {
              station: "MAYO-GOLBI",
              voters: 1015
            },
            {
              station: "MAYO-SEINI",
              voters: 660
            },
            {
              station: "PANGARI",
              voters: 574
            },
          ],
          "ECOLE PUBLIQUE DE RIBAO / A": [
            {
              station: "MAGADJANG",
              voters: 1108
            },
            {
              station: "MAYO-NGNIDOUGA",
              voters: 1549
            },
            {
              station: "NGAMGA",
              voters: 1549
            },
            {
              station: "NGNOGO",
              voters: 1108
            },
            {
              station: "RIBAO",
              voters: 1108
            },
          ],
          "ECOLE PUBLIQUE DE WOURO YOBI / A": [
            {
              station: "BOUDOWA",
              voters: 441
            },
            {
              station: "GOYAVE",
              voters: 441
            },
          ],
          "ECOLE PUBLIQUE DE YIMBERE CHEFFERIE /  A": [
            {
              station: "BADJANG",
              voters: 169
            },
            {
              station: "YIMEBERE",
              voters: 359
            },
            {
              station: "CHEFFERIE",
              voters: 169
            },
          ],
          "ECOLE PUBLIQUE DE YIMBERE PLATEAU / A": [
            {
              station: "BANYE",
              voters: 190
            },
            {
              station: "PLATEAU",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE DE YOLI / A": [
            {
              station: "BOGGOLE",
              voters: 244
            },
            {
              station: "NYAWA",
              voters: 693
            },
            {
              station: "YOLI",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE  MAYO-DARLE / A": [
            {
              station: "FADA",
              voters: 2025
            },
            {
              station: "TACHA",
              voters: 2025
            },
            {
              station: "YOKA",
              voters: 2025
            },
            {
              station: "SALA",
              voters: 2025
            },
          ],
          "GBPS GBAYA / A": [
            {
              station: "GBAYA",
              voters: 202
            },
            {
              station: "KALVARI",
              voters: 643
            },
            {
              station: "MAYO-BOUNOUWA",
              voters: 643
            },
            {
              station: "WOURO",
              voters: 1751
            },
            {
              station: "YOBI",
              voters: 1751
            },
          ],
          "GOV'T BILINGUAL PRIMARY SCHOOL TAPARE  /A": [
            {
              station: "TAPARE",
              voters: 164
            },
          ],
          "LYCEE BILINGUE DE MAYO-DARLE / A": [
            {
              station: "DJAOURO",
              voters: 135
            },
            {
              station: "MANA",
              voters: 135
            },
            {
              station: "LEDJAM",
              voters: 135
            },
            {
              station: "NGADAM",
              voters: 135
            },
          ],
        },
      },
      "VINA": {
        "BELEL": {
          "DEL D'ARRONDISSEMENT D'ELEVAGE / A": [
            {
              station: "CAMP",
              voters: 1231
            },
            {
              station: "ABATTOIR",
              voters: 678
            },
          ],
          "E.P DE SELAL DJERTOU / A": [
            {
              station: "SELAL",
              voters: 279
            },
            {
              station: "DJERTOU",
              voters: 279
            },
          ],
          "ECOLE DES PARENTS DE LESWOCKA / A": [
            {
              station: "LESWOCKA",
              voters: 133
            },
          ],
          "ECOLE DES PARENTS DE NGOUNDJEL  NYAGOI / A": [
            {
              station: "NGOUNDJEL",
              voters: 813
            },
            {
              station: "NYAGOI",
              voters: 130
            },
          ],
          "ECOLE MAT CATHOLIQUE DE DJOKOTI / A": [
            {
              station: "DJOKOTI",
              voters: 214
            },
          ],
          "ECOLE MATERNELLE DE BELEL / A": [
            {
              station: "CARREFOUR",
              voters: 1141
            },
            {
              station: "MARCHE",
              voters: 1141
            },
            {
              station: "CHEFFERIE",
              voters: 2076
            },
          ],
          "ECOLE PUBLIQUE D'IDOOL / A": [
            {
              station: "IDOOL",
              voters: 893
            },
          ],
          "ECOLE PUBLIQUE DE BABOUA / A": [
            {
              station: "BABOUA",
              voters: 215
            },
          ],
          "ECOLE PUBLIQUE DE BAKARI BATA / A": [
            {
              station: "BAKARI",
              voters: 448
            },
            {
              station: "BATA",
              voters: 448
            },
            {
              station: "YOKOTONDOU",
              voters: 731
            },
            {
              station: "BELEL",
              voters: 731
            },
          ],
          "ECOLE PUBLIQUE DE BARINGO / A": [
            {
              station: "BARINGO",
              voters: 165
            },
            {
              station: "BEKA",
              voters: 1585
            },
            {
              station: "MODIBO",
              voters: 1585
            },
          ],
          "ECOLE PUBLIQUE DE BAYARA / A": [
            {
              station: "BAYARA",
              voters: 1598
            },
          ],
          "ECOLE PUBLIQUE DE BEKA MODIBO / A": [
            {
              station: "LAH",
              voters: 710
            },
            {
              station: "GOURAH",
              voters: 834
            },
            {
              station: "GADJI",
              voters: 834
            },
          ],
          "ECOLE PUBLIQUE DE DIDJAWA / A": [
            {
              station: "DIDJAWA",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE DJAWA / A": [
            {
              station: "DJAWA",
              voters: 304
            },
            {
              station: "PORO",
              voters: 304
            },
          ],
          "ECOLE PUBLIQUE DE DJERKOKA I / A": [
            {
              station: "DJERKOKA",
              voters: 481
            },
            {
              station: "TELLO",
              voters: 2000
            },
          ],
          "ECOLE PUBLIQUE DE DJILOUGOU / A": [
            {
              station: "DJILOUGOU",
              voters: 717
            },
          ],
          "ECOLE PUBLIQUE DE DJILOUGOU LIPAOU / A": [
            {
              station: "LIPAOU",
              voters: 281
            },
          ],
          "ECOLE PUBLIQUE DE GUEBAKE / A": [
            {
              station: "GUEBAKE",
              voters: 413
            },
          ],
          "ECOLE PUBLIQUE DE HOSSERE LESDI / A": [
            {
              station: "HOSSERE",
              voters: 633
            },
            {
              station: "LESDI",
              voters: 359
            },
          ],
          "ECOLE PUBLIQUE DE KONA DJENAI / A": [
            {
              station: "DOFORO",
              voters: 747
            },
            {
              station: "KONA",
              voters: 808
            },
            {
              station: "DJENAI",
              voters: 668
            },
          ],
          "ECOLE PUBLIQUE DE KONA GAOURI / A": [
            {
              station: "GAOURI",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE DE LAINDE KANE / A": [
            {
              station: "LAINDE",
              voters: 196
            },
            {
              station: "KANE",
              voters: 139
            },
          ],
          "ECOLE PUBLIQUE DE MAMBERE HASSIMI / A": [
            {
              station: "MAMBERE",
              voters: 171
            },
            {
              station: "HASSIMI",
              voters: 171
            },
          ],
          "ECOLE PUBLIQUE DE MAYO BADJI / A": [
            {
              station: "MAYO",
              voters: 708
            },
            {
              station: "BADJI",
              voters: 431
            },
          ],
          "ECOLE PUBLIQUE DE MBANG LANGA / A": [
            {
              station: "MBANG",
              voters: 350
            },
            {
              station: "LANGA",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE DE NDIGOU ADAMOU / A": [
            {
              station: "NDIGOU",
              voters: 165
            },
            {
              station: "ADAMOU",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE DE NGAOUDAMDJI / A": [
            {
              station: "NGAOUDAMDJI",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE NGOUNDJEL  PASTORAL / A": [
            {
              station: "PASTORAL",
              voters: 415
            },
          ],
          "ECOLE PUBLIQUE DE NGOUNDJEL TROUA / A": [
            {
              station: "TROUA",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE DE NYASSEY SOUCKOL / A": [
            {
              station: "NYASSEY",
              voters: 110
            },
            {
              station: "SOUCKOL",
              voters: 110
            },
          ],
          "ECOLE PUBLIQUE DE SAOUGAOU / A": [
            {
              station: "SAOUGAOU",
              voters: 79
            },
          ],
          "ECOLE PUBLIQUE DE SEKA MAYO DADI / A": [
            {
              station: "SEKA",
              voters: 220
            },
            {
              station: "DADI",
              voters: 220
            },
          ],
          "ECOLE PUBLIQUE DE SINDERE / A": [
            {
              station: "SINDERE",
              voters: 142
            },
          ],
          "ECOLE PUBLIQUE DE TOURNINGAL / A": [
            {
              station: "TOURNINGAL",
              voters: 1290
            },
          ],
          "ECOLE PUBLIQUE DE YOKOTONDOU BELEL /  A": [
            {
              station: "GAGOU",
              voters: 283
            },
          ],
          "EP MANDING OURDOU / A": [
            {
              station: "LESS",
              voters: 80
            },
            {
              station: "OURDOU",
              voters: 80
            },
            {
              station: "NGAOUKANA",
              voters: 80
            },
          ],
          "EP MAYO DJARANDI / A": [
            {
              station: "DJIGA",
              voters: 57
            },
            {
              station: "MAPA",
              voters: 57
            },
            {
              station: "LANG",
              voters: 57
            },
            {
              station: "DJARANDI",
              voters: 57
            },
          ],
          "EP NAMBAMRI / A": [
            {
              station: "NAMBAMRI",
              voters: 100
            },
          ],
          "EP NGOURA LOUGUERE / A": [
            {
              station: "DJELDERE",
              voters: 43
            },
            {
              station: "NGOURAH",
              voters: 43
            },
            {
              station: "LOUGUERE",
              voters: 43
            },
            {
              station: "RANCH",
              voters: 43
            },
            {
              station: "SOACAM",
              voters: 43
            },
            {
              station: "WALAMBA",
              voters: 43
            },
          ],
          "EP ROUMDE DJAOURO / A": [
            {
              station: "BENGOUBOU",
              voters: 192
            },
            {
              station: "DJERSOYA",
              voters: 149
            },
            {
              station: "ROUMDE",
              voters: 149
            },
            {
              station: "DJAOURO",
              voters: 149
            },
          ],
          "HANGAR DE KALAMBA / A": [
            {
              station: "KALAMBA",
              voters: 117
            },
          ],
          "HANGAR DE KORYON / A": [
            {
              station: "KORYON",
              voters: 234
            },
            {
              station: "MBABIKOY",
              voters: 327
            },
          ],
          "HANGAR DE KOUDINI / A": [
            {
              station: "KOUDINI",
              voters: 206
            },
          ],
          "HANGAR DE LAOURE NGOCK / A": [
            {
              station: "LAOURE",
              voters: 172
            },
            {
              station: "NGOCK",
              voters: 172
            },
          ],
          "HANGAR DE MBELA YAKI / A": [
            {
              station: "MBELA",
              voters: 49
            },
            {
              station: "YAKI",
              voters: 49
            },
          ],
          "HANGAR DE MBINGALAK / A": [
            {
              station: "MBINGALAK",
              voters: 205
            },
          ],
          "LYCEE DE BELEL / A": [
            {
              station: "BARRIERE",
              voters: 553
            },
          ],
          "SOUS-PREFECTURE / A": [
            {
              station: "QTIER",
              voters: 524
            },
            {
              station: "SOUS-PREFECTURE",
              voters: 524
            },
          ],
        },
        "MARTAP": {
          "EP BAGARMI / A": [
            {
              station: "BAGARMI",
              voters: 223
            },
          ],
          "EP BALI-ISSA / A": [
            {
              station: "BALI-ISSA",
              voters: 332
            },
            {
              station: "SARMBALE",
              voters: 600
            },
          ],
          "EP BAWA / A": [
            {
              station: "BAWA",
              voters: 2617
            },
          ],
          "EP BEKA MANGARI / A": [
            {
              station: "BEKA",
              voters: 330
            },
            {
              station: "MANGARI",
              voters: 330
            },
            {
              station: "PACKSAL",
              voters: 330
            },
          ],
          "EP BELAKA DJOUI / A": [
            {
              station: "BELAKA",
              voters: 291
            },
            {
              station: "DJOUI",
              voters: 291
            },
          ],
          "EP BIDEM / A": [
            {
              station: "LAPSI",
              voters: 76
            },
            {
              station: "NDJING",
              voters: 76
            },
            {
              station: "NGAOUMETER",
              voters: 76
            },
          ],
          "EP BIRSOCK / A": [
            {
              station: "BIRSOCK",
              voters: 234
            },
            {
              station: "NGAOUHONA",
              voters: 234
            },
            {
              station: "NGOURORE",
              voters: 234
            },
            {
              station: "DJALO",
              voters: 234
            },
          ],
          "EP BOBBODJI / A": [
            {
              station: "BOBBODJI",
              voters: 237
            },
          ],
          "EP DJABE FOULBE / A": [
            {
              station: "DJABE-FOULBE",
              voters: 914
            },
          ],
          "EP DJARIA I / A": [
            {
              station: "DJARIA",
              voters: 308
            },
          ],
          "EP GANDJAKIRA / A": [
            {
              station: "VINPARO",
              voters: 21
            },
          ],
          "EP GUENA / A": [
            {
              station: "GUENA",
              voters: 445
            },
          ],
          "EP HANGLOA / A": [
            {
              station: "HANGLOA",
              voters: 693
            },
            {
              station: "MANDOUROU",
              voters: 4801
            },
            {
              station: "ABDALA",
              voters: 1720
            },
          ],
          "EP HORE -BINI / A": [
            {
              station: "HORE-BINI",
              voters: 163
            },
          ],
          "EP HORE-MANANG / A": [
            {
              station: "HORE-MANANG",
              voters: 87
            },
            {
              station: "MANANG",
              voters: 605
            },
            {
              station: "HOURSO",
              voters: 390
            },
          ],
          "EP HORE-MIKAI / A": [
            {
              station: "HORE-MIKAI",
              voters: 124
            },
          ],
          "EP LEWA MOUSSA / A": [
            {
              station: "MOUSSA",
              voters: 2353
            },
            {
              station: "WALDE-SOLARE",
              voters: 323
            },
            {
              station: "WAMAR",
              voters: 323
            },
          ],
          "EP LEWA WOURO DOLE / A": [
            {
              station: "WOURO",
              voters: 355
            },
            {
              station: "DOLE",
              voters: 355
            },
          ],
          "EP LIKOK / A": [
            {
              station: "LIKOK",
              voters: 3729
            },
          ],
          "EP LISSEY / A": [
            {
              station: "LISSEY",
              voters: 431
            },
          ],
          "EP LOUGGA TAPPADI / A": [
            {
              station: "DJABE",
              voters: 1026
            },
            {
              station: "MBOUM",
              voters: 1301
            },
            {
              station: "LOUGGA",
              voters: 1294
            },
            {
              station: "TAPPADI",
              voters: 1294
            },
          ],
          "EP MAHOBA / A": [
            {
              station: "DJOGGA",
              voters: 474
            },
            {
              station: "MAHOBA",
              voters: 268
            },
            {
              station: "MAMBALI-YANWAL",
              voters: 268
            },
          ],
          "EP MAKOR SAMAKI / A": [
            {
              station: "MAKOR",
              voters: 505
            },
            {
              station: "SAMAKI",
              voters: 505
            },
          ],
          "EP MANDOUROU / A": [
            {
              station: "DALIL",
              voters: 1027
            },
            {
              station: "HAMADJODA",
              voters: 1027
            },
            {
              station: "VOKOR",
              voters: 1027
            },
          ],
          "EP MASSIWOL / A": [
            {
              station: "MASSIWOL",
              voters: 320
            },
          ],
          "EP MASSIWOL 2 / A": [
            {
              station: "SIERR",
              voters: 54
            },
          ],
          "EP MATAKORO / A": [
            {
              station: "LOUGGA-MANDOUROU",
              voters: 171
            },
            {
              station: "MATAKORO",
              voters: 171
            },
          ],
          "EP MBEWE / A": [
            {
              station: "HORE",
              voters: 407
            },
            {
              station: "MAYANGA",
              voters: 407
            },
            {
              station: "MBEWE",
              voters: 407
            },
            {
              station: "SOUKOURWO",
              voters: 407
            },
          ],
          "EP NGAOUNANG / A": [
            {
              station: "NGAOUNANG",
              voters: 325
            },
          ],
          "EP SEBORE DJANGOL / A": [
            {
              station: "SANGOL",
              voters: 800
            },
            {
              station: "LEKKI",
              voters: 800
            },
            {
              station: "SEBORE",
              voters: 800
            },
            {
              station: "DJANGOL",
              voters: 800
            },
          ],
          "EP TEKKEL / A": [
            {
              station: "TEKKEL",
              voters: 617
            },
          ],
          "EP TOUMBOUROUM / A": [
            {
              station: "TOUMBOUROUM",
              voters: 315
            },
          ],
          "HANGAR COMMUNAUTAIRE D'ASSOM / A": [
            {
              station: "ASSOM",
              voters: 440
            },
            {
              station: "MARTAP",
              voters: 3388
            },
            {
              station: "TCHABBAL",
              voters: 1992
            },
            {
              station: "HALEO",
              voters: 641
            },
          ],
          "HANGAR COMMUNAUTAIRE DE  LAOUKOBONG / A": [
            {
              station: "LAOUKOBONG",
              voters: 182
            },
          ],
          "HANGAR COMMUNAUTAIRE DE  NGAOUNDANGA / A": [
            {
              station: "MAKEP",
              voters: 102
            },
            {
              station: "NGAOUNDANGA",
              voters: 102
            },
          ],
          "HANGAR COMMUNAUTAIRE DE ANAM / A": [
            {
              station: "ANAM",
              voters: 199
            },
            {
              station: "MARMA",
              voters: 199
            },
          ],
          "HANGAR COMMUNAUTAIRE DE KOUM KILBA /  A": [
            {
              station: "KOUM",
              voters: 155
            },
            {
              station: "KILBA",
              voters: 155
            },
          ],
          "HANGAR COMMUNAUTAIRE DE LENA DADI / A": [
            {
              station: "LENA",
              voters: 51
            },
            {
              station: "DADI",
              voters: 51
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MABANGAL /  A": [
            {
              station: "MABANGAL",
              voters: 126
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MADEM / A": [
            {
              station: "MADEM",
              voters: 235
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MALOUA / A": [
            {
              station: "MALOUA",
              voters: 178
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MANANG  DOROFI / A": [
            {
              station: "DOROFI",
              voters: 215
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MAYO GOLBI /  A": [
            {
              station: "GOLBI",
              voters: 109
            },
            {
              station: "MBANA",
              voters: 559
            },
          ],
          "HANGAR COMMUNAUTAIRE LEWA MAYO / A": [
            {
              station: "LEWA",
              voters: 3113
            },
            {
              station: "MAYO",
              voters: 3136
            },
          ],
        },
        "MBE": {
          "CENTRE DE SANTE INTEGRE DE TAGBOUM /  A": [
            {
              station: "NGUESSECK-KESSOUM",
              voters: 230
            },
            {
              station: "TAGBOUM",
              voters: 465
            },
            {
              station: "EST",
              voters: 230
            },
          ],
          "CENTRE DE SANTE PRIVE DE NGAOUDJOM /  A": [
            {
              station: "MADJADOU-NGAOUDJOUM",
              voters: 347
            },
            {
              station: "NGAOUDJOM",
              voters: 347
            },
          ],
          "ECOLE CATHOLIQUE DE KARNA MANGA / A": [
            {
              station: "HARR",
              voters: 2941
            },
          ],
          "ECOLE MATERNELLE PUBLIQUE DE MBE / A": [
            {
              station: "CHATEAU",
              voters: 72
            },
            {
              station: "TO\O",
              voters: 72
            },
            {
              station: "WOURO",
              voters: 72
            },
            {
              station: "KESSOUM",
              voters: 72
            },
          ],
          "ECOLE PRIV PROTEST VOURGNE SANFOU / A": [
            {
              station: "SANFOU",
              voters: 290
            },
          ],
          "ECOLE PRIVEE PROTESTANTE DE  FOUBARKA / A": [
            {
              station: "FOUBARKA",
              voters: 396
            },
            {
              station: "MBIP",
              voters: 396
            },
          ],
          "ECOLE PROTESTANTE DE MBE / A": [
            {
              station: "DOBOI",
              voters: 1300
            },
          ],
          "ECOLE PROTESTANTE DE NYADOU / A": [
            {
              station: "KIANG",
              voters: 328
            },
            {
              station: "NYADOU",
              voters: 328
            },
          ],
          "ECOLE PUBLIQUE DE BAANDANRE / A": [
            {
              station: "BAANDANRE",
              voters: 20
            },
          ],
          "ECOLE PUBLIQUE DE DJETT / A": [
            {
              station: "DJETT",
              voters: 539
            },
            {
              station: "KARNA",
              voters: 2476
            },
            {
              station: "MANGA",
              voters: 1642
            },
            {
              station: "PETEL",
              voters: 834
            },
          ],
          "ECOLE PUBLIQUE DE HOME / A": [
            {
              station: "GORHIECK",
              voters: 296
            },
            {
              station: "HOME",
              voters: 197
            },
            {
              station: "BENOUE",
              voters: 798
            },
          ],
          "ECOLE PUBLIQUE DE MAN / A": [
            {
              station: "MAN",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE DE MAROUARE / A": [
            {
              station: "CITE",
              voters: 967
            },
            {
              station: "VERTE",
              voters: 967
            },
            {
              station: "LAINDE",
              voters: 967
            },
            {
              station: "MORA",
              voters: 967
            },
            {
              station: "MADJADOU-MAROUARE",
              voters: 967
            },
            {
              station: "MAROUARE",
              voters: 967
            },
          ],
          "ECOLE PUBLIQUE DE NDOM BENOUE / A": [
            {
              station: "NDOM",
              voters: 502
            },
          ],
          "ECOLE PUBLIQUE DE NGAOUYANGA / A": [
            {
              station: "NGAOUYANGA",
              voters: 1550
            },
            {
              station: "NGUESSECK-TATT",
              voters: 1550
            },
            {
              station: "NOVE",
              voters: 1550
            },
            {
              station: "SEIGBA",
              voters: 1766
            },
            {
              station: "SELLOU",
              voters: 1766
            },
          ],
          "ECOLE PUBLIQUE DE NGUESSECK-NGAI / A": [
            {
              station: "GOPNOUCK",
              voters: 392
            },
            {
              station: "NGUESSECK-NGAI",
              voters: 392
            },
          ],
          "ECOLE PUBLIQUE DE SASSA GARDA / A": [
            {
              station: "MBAOU",
              voters: 266
            },
            {
              station: "NDOMSOTTOT",
              voters: 266
            },
            {
              station: "SASSA",
              voters: 1572
            },
            {
              station: "GARDA",
              voters: 919
            },
          ],
          "ECOLE PUBLIQUE DE TAGBOUM / A": [
            {
              station: "OUEST",
              voters: 235
            },
          ],
          "ECOLE PUBLIQUE DE TIBANG-NYESSE / A": [
            {
              station: "MONALASSI",
              voters: 423
            },
            {
              station: "PANOUA",
              voters: 423
            },
            {
              station: "TIBANG",
              voters: 423
            },
            {
              station: "NYESSE",
              voters: 423
            },
          ],
          "ECOLE PUBLIQUE DE TOUBAKA / A": [
            {
              station: "DENA-MBE",
              voters: 1858
            },
            {
              station: "SYH",
              voters: 545
            },
            {
              station: "TOUBAKA",
              voters: 733
            },
          ],
          "ECOLE PUBLIQUE DE VOURGNE MAMBOUM /  A": [
            {
              station: "VOURGNE",
              voters: 596
            },
            {
              station: "MAMBOUM",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE DE WACK / A": [
            {
              station: "GOP-GABDO",
              voters: 1145
            },
            {
              station: "NDONG",
              voters: 1638
            },
            {
              station: "WACK",
              voters: 2290
            },
          ],
          "ECOLE PUBLIQUE GROUPE I MBE / A": [
            {
              station: "DONG-NA-NOVE",
              voters: 1593
            },
            {
              station: "FADA",
              voters: 2494
            },
            {
              station: "MBATE",
              voters: 2494
            },
            {
              station: "MBE",
              voters: 1786
            },
            {
              station: "PERIPHERIQUE",
              voters: 1593
            },
            {
              station: "TO'O",
              voters: 2395
            },
          ],
          "ECOLE PUBLIQUE GROUPE IV DE MBE / A": [
            {
              station: "MONAPITA",
              voters: 209
            },
            {
              station: "QUARTIER",
              voters: 209
            },
            {
              station: "TOUPOURI",
              voters: 209
            },
            {
              station: "TOKOMBERE",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE SASSA MBERSI / A": [
            {
              station: "MBERSI",
              voters: 653
            },
          ],
          "HANGAR GOVE / A": [
            {
              station: "GOVE",
              voters: 332
            },
          ],
          "HANGAR MAFAWACK / A": [
            {
              station: "DENA",
              voters: 193
            },
            {
              station: "KAPSIKI",
              voters: 193
            },
            {
              station: "MAFAWACK",
              voters: 193
            },
            {
              station: "MORTOCK",
              voters: 193
            },
          ],
          "LYCEE DE MBE / A": [
            {
              station: "DOGONG",
              voters: 802
            },
            {
              station: "DOUDJA",
              voters: 802
            },
            {
              station: "MISSION",
              voters: 1599
            },
            {
              station: "TAPARE",
              voters: 802
            },
          ],
          "POSTE DE MBE / A": [
            {
              station: "NYAN",
              voters: 901
            },
          ],
        },
        "NGAN-HA": {
          "CASE COMMUNAUTAIRE DE BALEL / A": [
            {
              station: "BALEL",
              voters: 86
            },
          ],
          "ECOLE CATHOLIQUE DE MBEREM / A": [
            {
              station: "GOP",
              voters: 578
            },
            {
              station: "MBEREM",
              voters: 578
            },
          ],
          "ECOLE DES PARENTS DE MADJER / A": [
            {
              station: "MADJER",
              voters: 153
            },
          ],
          "ECOLE DES PARENTS DE MANDJIMI / A": [
            {
              station: "MANDJIMI",
              voters: 114
            },
          ],
          "ECOLE PROTESTANTE DE NOM-KANDI / A": [
            {
              station: "KANDI",
              voters: 1137
            },
            {
              station: "MANDIKOUM",
              voters: 1271
            },
            {
              station: "NOM",
              voters: 1137
            },
          ],
          "ECOLE PUBLIQUE D'AWA / A": [
            {
              station: "AWA",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE DE BAOUSSI I / A": [
            {
              station: "BAOUSSI",
              voters: 638
            },
          ],
          "ECOLE PUBLIQUE DE BAOUSSI II / A": [
            {
              station: "NGAOUMBAM",
              voters: 583
            },
          ],
          "ECOLE PUBLIQUE DE BINI-POCK / A": [
            {
              station: "BINI-POCK",
              voters: 102
            },
          ],
          "ECOLE PUBLIQUE DE BORONGO / A": [
            {
              station: "BORONGO",
              voters: 928
            },
            {
              station: "DEO",
              voters: 928
            },
            {
              station: "MAYO",
              voters: 928
            },
            {
              station: "FOLIFERE",
              voters: 1128
            },
            {
              station: "FOUKOUNI",
              voters: 928
            },
            {
              station: "MAISCAM",
              voters: 928
            },
            {
              station: "MAREL",
              voters: 1128
            },
            {
              station: "POFE",
              voters: 1128
            },
          ],
          "ECOLE PUBLIQUE DE DENA / A": [
            {
              station: "DENA",
              voters: 415
            },
            {
              station: "MBIDJORO",
              voters: 617
            },
            {
              station: "SOTTA",
              voters: 617
            },
            {
              station: "WARACK",
              voters: 1497
            },
            {
              station: "III",
              voters: 617
            },
          ],
          "ECOLE PUBLIQUE DE FOUNDOY / A": [
            {
              station: "FOUNDOY",
              voters: 198
            },
            {
              station: "WOCK-VOCK",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE DE GAMBOUKOU / A": [
            {
              station: "GAMBOUKOU",
              voters: 250
            },
            {
              station: "KOBI",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE GANGASSAOU / A": [
            {
              station: "DOENE",
              voters: 1593
            },
            {
              station: "GANGASSAOU",
              voters: 1457
            },
            {
              station: "LOUMO-NANGUE",
              voters: 1593
            },
            {
              station: "SABONGARI-GANGASSAOU",
              voters: 1648
            },
          ],
          "ECOLE PUBLIQUE DE LAFIA-DIDANGO / A": [
            {
              station: "BANTAI",
              voters: 154
            },
            {
              station: "LAFIA-DIDANGO",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE DE MARA-OUSMANOU / A": [
            {
              station: "AMAI-MARA",
              voters: 257
            },
            {
              station: "MADEM",
              voters: 257
            },
            {
              station: "MAMAN",
              voters: 257
            },
            {
              station: "MARA-OUSMANOU",
              voters: 257
            },
            {
              station: "MBANG-MARA",
              voters: 257
            },
            {
              station: "NDOUGUELEN",
              voters: 257
            },
            {
              station: "SACK-TOY",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE MASSACKBATT / A": [
            {
              station: "MASSACKBATT",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE DE MBALANG / A": [
            {
              station: "BAH-ZANGA",
              voters: 667
            },
            {
              station: "MBALANG-ABOUBAKAR",
              voters: 1265
            },
            {
              station: "SANGA-GOUMDJEL",
              voters: 667
            },
          ],
          "ECOLE PUBLIQUE DE MBANG-BOUHARI / A": [
            {
              station: "MAMOUM",
              voters: 598
            },
            {
              station: "MBANG-BOUHARI",
              voters: 598
            },
          ],
          "ECOLE PUBLIQUE DE MBARANG / A": [
            {
              station: "MBARANG",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE DE NDIGOU-HAMADJODA /  A": [
            {
              station: "NDIGOU-HAMADJODA",
              voters: 279
            },
          ],
          "ECOLE PUBLIQUE DE NDOKTOUTO / A": [
            {
              station: "NDOKTOUTO",
              voters: 109
            },
          ],
          "ECOLE PUBLIQUE DE NGAN-HA / A": [
            {
              station: "BANSANG",
              voters: 1678
            },
            {
              station: "NGAN-HA",
              voters: 2917
            },
          ],
          "ECOLE PUBLIQUE DE NYASSAR / A": [
            {
              station: "NYASSAR",
              voters: 575
            },
          ],
          "ECOLE PUBLIQUE DE POFE-FOLIFERE / A": [
            {
              station: "FOUKINI",
              voters: 200
            },
          ],
          "ECOLE PUBLIQUE DE SADOOL-YAYA / A": [
            {
              station: "SADOOL-YAYA",
              voters: 404
            },
          ],
          "ECOLE PUBLIQUE DE SAIWA / A": [
            {
              station: "SAIWA",
              voters: 135
            },
          ],
          "ECOLE PUBLIQUE DE VACK / A": [
            {
              station: "VACK",
              voters: 468
            },
          ],
          "ECOLE PUBLIQUE DE WAME / A": [
            {
              station: "WAME",
              voters: 647
            },
          ],
          "ECOLE PUBLIQUE DE WAME-PETIT / A": [
            {
              station: "WAME-PETIT",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE YENWA / A": [
            {
              station: "HOLMBALI",
              voters: 492
            },
            {
              station: "KOUBADJE",
              voters: 820
            },
            {
              station: "YENWA",
              voters: 492
            },
          ],
          "ECOLE PUBLIQUE DE YOKOTONDOU / A": [
            {
              station: "GOP-BERA",
              voters: 303
            },
            {
              station: "YOKOTONDOU",
              voters: 303
            },
          ],
          "ECOLE PUBLIQUEDE MBANG-BERNI / A": [
            {
              station: "FOUFEKE",
              voters: 746
            },
            {
              station: "MADJELE",
              voters: 746
            },
            {
              station: "MAMBARANG",
              voters: 746
            },
            {
              station: "MBANG-BERNI",
              voters: 1344
            },
            {
              station: "NYASSEY",
              voters: 746
            },
            {
              station: "LEMOU",
              voters: 746
            },
          ],
          "HANGAR DE BERA-BARSAOU / A": [
            {
              station: "BERA-BARSAOUI",
              voters: 298
            },
          ],
          "HANGAR SADOOL-KALMET / A": [
            {
              station: "SADOOL-KALMET",
              voters: 283
            },
          ],
          "HANGAR TOUMBERE / A": [
            {
              station: "DIGONG",
              voters: 347
            },
            {
              station: "FALINGO",
              voters: 347
            },
            {
              station: "LOUGGUERE",
              voters: 347
            },
            {
              station: "BAH",
              voters: 347
            },
            {
              station: "SAMBO",
              voters: 347
            },
            {
              station: "NGAOUBO",
              voters: 945
            },
            {
              station: "TOUMBERE",
              voters: 347
            },
          ],
          "HANGAR YANG / A": [
            {
              station: "YANG",
              voters: 78
            },
          ],
          "POSTE A BETAIL MBI AFESSAKA / A": [
            {
              station: "MBI",
              voters: 532
            },
            {
              station: "AFFESSAKA",
              voters: 532
            },
            {
              station: "NDOLONG",
              voters: 532
            },
            {
              station: "MBIKAOU",
              voters: 532
            },
            {
              station: "NYAMBARANG",
              voters: 684
            },
          ],
        },
        "NGAOUNDERE I": {
          "CES BILINGUE DE MARZA / A": [
            {
              station: "WOURO",
              voters: 48
            },
            {
              station: "KESSOUM",
              voters: 48
            },
          ],
          "COLLEGE PROTESTANT / A": [
            {
              station: "NAMOKALA",
              voters: 3848
            },
            {
              station: "NDELBE",
              voters: 13274
            },
            {
              station: "(SABONGARI",
              voters: 3681
            },
            {
              station: "AMERICA)",
              voters: 3681
            },
          ],
          "COMMUNAUTE URBAINE / A": [
            {
              station: "CENTRE",
              voters: 431
            },
            {
              station: "COMMERCIAL",
              voters: 431
            },
            {
              station: "CAMP",
              voters: 12825
            },
            {
              station: "FONCTIONNAIRE",
              voters: 7699
            },
          ],
          "ECOLE ANGLO ISLAMIQUE / A": [
            {
              station: "BAMYANGA",
              voters: 34716
            },
            {
              station: "SOMENO",
              voters: 2319
            },
          ],
          "ECOLE ANNEXE / A": [
            {
              station: "BALI",
              voters: 3268
            },
            {
              station: "BEKA",
              voters: 6255
            },
            {
              station: "HOSSERE",
              voters: 9327
            },
          ],
          "ECOLE DES PARENTS KANTALANG / A": [
            {
              station: "KANTALANG",
              voters: 220
            },
          ],
          "ECOLE DES SOEURS / A": [
            {
              station: "FOUFEKE",
              voters: 2971
            },
          ],
          "ECOLE LES GAZELLES / A": [
            {
              station: "MOUNDANG",
              voters: 1075
            },
            {
              station: "SOCARET",
              voters: 2525
            },
          ],
          "ECOLE LES PINTADELLES / A": [
            {
              station: "CENTRAL",
              voters: 146
            },
            {
              station: "SONEL",
              voters: 146
            },
            {
              station: "LOGEMENTS",
              voters: 146
            },
            {
              station: "SOCIAUX",
              voters: 146
            },
          ],
          "ECOLE MISSION CATHOLIQUE / A": [
            {
              station: "POLICE",
              voters: 1100
            },
            {
              station: "MISSION",
              voters: 1100
            },
            {
              station: "CATHOLIQUE",
              voters: 1100
            },
          ],
          "ECOLE PUBLIQUE BAMYANGA / A": [
            {
              station: "ISSA",
              voters: 8988
            },
            {
              station: "DENA",
              voters: 8988
            },
          ],
          "ECOLE PUBLIQUE BAMYANGA HAMADJANGUI  /A": [
            {
              station: "HAMADJANGUI",
              voters: 2867
            },
          ],
          "ECOLE PUBLIQUE BEKA HOSSERE / A": [
            {
              station: "HORE",
              voters: 3849
            },
            {
              station: "FORET",
              voters: 3849
            },
            {
              station: "MARGNANG",
              voters: 3894
            },
          ],
          "ECOLE PUBLIQUE BURKINA / A": [
            {
              station: "BURKINA",
              voters: 6445
            },
          ],
          "ECOLE PUBLIQUE DE BONDJONG / A": [
            {
              station: "BONDJONG",
              voters: 99
            },
          ],
          "ECOLE PUBLIQUE DE NGAOUNDELBE / A": [
            {
              station: "NGAOUNDELBE",
              voters: 126
            },
            {
              station: "YOKO",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE DJAKBOL / A": [
            {
              station: "AOUDI",
              voters: 3801
            },
            {
              station: "BELAKA",
              voters: 10246
            },
            {
              station: "BOUMDJERE",
              voters: 3801
            },
            {
              station: "DJAKBOL",
              voters: 3801
            },
          ],
          "ECOLE PUBLIQUE GAMBARA 2 / A": [
            {
              station: "GAMBARA",
              voters: 1775
            },
          ],
          "ECOLE PUBLIQUE GENDARMERIE / A": [
            {
              station: "GENDARMERIE",
              voters: 221
            },
            {
              station: "MILITAIRE",
              voters: 1910
            },
          ],
          "ECOLE PUBLIQUE MARMA / A": [
            {
              station: "FALFA",
              voters: 441
            },
            {
              station: "MARMA",
              voters: 393
            },
          ],
          "ECOLE PUBLIQUE MARZA / A": [
            {
              station: "LAIGA",
              voters: 2053
            },
            {
              station: "MARZA",
              voters: 2053
            },
          ],
          "ECOLE PUBLIQUE MBIDENG / A": [
            {
              station: "MBIDENG",
              voters: 3305
            },
          ],
          "ECOLE PUBLIQUE NGAOUNDAI / A": [
            {
              station: "LOUGGUERE",
              voters: 311
            },
            {
              station: "MBONDJONG",
              voters: 622
            },
            {
              station: "NGAOUNDAI",
              voters: 311
            },
            {
              station: "SIOUTERE",
              voters: 311
            },
          ],
          "ECOLE PUBLIQUE QUARTIER RESIDENTIEL /  A": [
            {
              station: "RESIDENTIEL",
              voters: 982
            },
          ],
          "ECOLE PUBLIQUE WAKWA / A": [
            {
              station: "VINA",
              voters: 596
            },
            {
              station: "PONT",
              voters: 596
            },
            {
              station: "WAKWA",
              voters: 690
            },
          ],
          "LYCEE BILINGUE DE BAMYANGA / A": [
            {
              station: "MAYO-DJARANDI",
              voters: 4945
            },
            {
              station: "PANA",
              voters: 3870
            },
            {
              station: "HAUTS",
              voters: 6582
            },
            {
              station: "PLATEAUX",
              voters: 6582
            },
          ],
          "LYCEE CLASSIQUE / A": [
            {
              station: "MBIBAKLA",
              voters: 3072
            },
            {
              station: "QUARTIER",
              voters: 4054
            },
            {
              station: "LYCEE",
              voters: 3072
            },
          ],
          "PRISON CENTRALE / A": [
            {
              station: "PRISON",
              voters: 1895
            },
          ],
        },
        "NGAOUNDERE II": {
          "BASE - BIR / A": [
            {
              station: "CAMP",
              voters: 288
            },
            {
              station: "BIR",
              voters: 288
            },
          ],
          "COLLEGE POLYVALENT / A": [
            {
              station: "NORD",
              voters: 2723
            },
            {
              station: "CIFAN",
              voters: 2723
            },
          ],
          "DISPENSAIRE CAMRAIL / A": [
            {
              station: "III",
              voters: 4208
            },
          ],
          "E.P DE MADEM / A": [
            {
              station: "MADEM",
              voters: 223
            },
          ],
          "ECOLE BALADJI GROUPE 5 / A": [
            {
              station: "ABATTOIR",
              voters: 3041
            },
            {
              station: "BALADJI",
              voters: 9773
            },
          ],
          "ECOLE CATHOLIQUE SAINT PIERRE / A": [
            {
              station: "KALME",
              voters: 893
            },
          ],
          "ECOLE FEMME FADA / A": [
            {
              station: "FADA",
              voters: 2846
            },
            {
              station: "MALOUMRI",
              voters: 2846
            },
          ],
          "ECOLE FRANCO ARABE / A": [
            {
              station: "MALLA",
              voters: 3092
            },
          ],
          "ECOLE MATERNELLE TONGO / A": [
            {
              station: "TONGO",
              voters: 6668
            },
            {
              station: "NANA",
              voters: 1788
            },
          ],
          "ECOLE PARENT BISKEWAL / A": [
            {
              station: "BISKEWAL",
              voters: 408
            },
          ],
          "ECOLE PARENT DJALBARKE / A": [
            {
              station: "DJALBARKE",
              voters: 70
            },
          ],
          "ECOLE PARENT MAYO - DANEYEL / A": [
            {
              station: "MAYO",
              voters: 250
            },
            {
              station: "DANEYEL",
              voters: 250
            },
          ],
          "ECOLE PARENT NGAOUHORA I / A": [
            {
              station: "NGAOUHORA",
              voters: 3273
            },
          ],
          "ECOLE PARENT SELBE -DARANG / A": [
            {
              station: "SELBE",
              voters: 805
            },
          ],
          "ECOLE PARENT VELEMBAI / A": [
            {
              station: "VELEBAI",
              voters: 188
            },
          ],
          "ECOLE PARENT YOUKOU / A": [
            {
              station: "YOUKOU",
              voters: 370
            },
          ],
          "ECOLE PRIVEE PROTESTANT - VILLE / A": [
            {
              station: "REP",
              voters: 10407
            },
            {
              station: "YANGA",
              voters: 10407
            },
          ],
          "ECOLE PUBLIQUE DARA SALAM / A": [
            {
              station: "DARA",
              voters: 422
            },
            {
              station: "SALAM",
              voters: 422
            },
          ],
          "ECOLE PUBLIQUE DARANG / A": [
            {
              station: "DARANG",
              voters: 2005
            },
          ],
          "ECOLE PUBLIQUE DJALINGO / A": [
            {
              station: "MABANGA",
              voters: 14611
            },
          ],
          "ECOLE PUBLIQUE GADA MABANGA / A": [
            {
              station: "GADA",
              voters: 11374
            },
            {
              station: "MADAGASCAR",
              voters: 14523
            },
          ],
          "ECOLE PUBLIQUE HAOUSSA / A": [
            {
              station: "HAOUSSA",
              voters: 2275
            },
          ],
          "ECOLE PUBLIQUE MBLAN DJALINGO / A": [
            {
              station: "MASSOLA",
              voters: 635
            },
            {
              station: "MBALANG",
              voters: 3652
            },
            {
              station: "DJALINGO",
              voters: 6889
            },
          ],
          "ECOLE PUBLIQUE NGAOUSSAY / A": [
            {
              station: "NGAOUSSAY",
              voters: 535
            },
          ],
          "ECOLE PUBLIQUE SABONGARI / A": [
            {
              station: "SHOA",
              voters: 3213
            },
          ],
          "ENIEG / A": [
            {
              station: "ENIEG",
              voters: 992
            },
            {
              station: "YARBANG",
              voters: 8690
            },
          ],
          "FOYER BAMOUN / A": [
            {
              station: "JOLI",
              voters: 5853
            },
            {
              station: "SOIR",
              voters: 5853
            },
            {
              station: "QUARTIER",
              voters: 5464
            },
            {
              station: "BAMOUN",
              voters: 3189
            },
          ],
          "GARAGE AOUDI / A": [
            {
              station: "AOUDI",
              voters: 2529
            },
            {
              station: "GAMBARA",
              voters: 2529
            },
          ],
          "HANGAR AEROPORT / A": [
            {
              station: "AEROPORT",
              voters: 693
            },
          ],
          "LYCEE DE SABONGARI / A": [
            {
              station: "MBIBAR",
              voters: 4485
            },
            {
              station: "SABONGAR",
              voters: 7698
            },
            {
              station: "SABONGARI",
              voters: 17494
            },
            {
              station: "TROUA",
              voters: 13882
            },
            {
              station: "MALA",
              voters: 10790
            },
          ],
          "SYNDICAT SETRACAUCAM / A": [
            {
              station: "LITAI",
              voters: 929
            },
          ],
        },
        "NGAOUNDERE III": {
          "CETIC DE MALANG / A": [
            {
              station: "MBIDOU",
              voters: 86
            },
            {
              station: "CETIC",
              voters: 86
            },
          ],
          "ECOLE MATERNELLE DE DJALINGO / A": [
            {
              station: "DJALINGO",
              voters: 328
            },
            {
              station: "PASTORAL",
              voters: 328
            },
          ],
          "ECOLE MATERNELLE DE MALO / A": [
            {
              station: "GONI",
              voters: 102
            },
            {
              station: "GOURORE",
              voters: 102
            },
          ],
          "ECOLE PARENTS DE BEKA TENGUERING / A": [
            {
              station: "TENGUERING",
              voters: 425
            },
            {
              station: "MALANG",
              voters: 3199
            },
            {
              station: "MALO",
              voters: 1461
            },
            {
              station: "MBIFAL",
              voters: 1257
            },
          ],
          "ECOLE PUB DE TCHABBAL MOUNGUEL / A": [
            {
              station: "LERE",
              voters: 148
            },
            {
              station: "TCHABBAL",
              voters: 791
            },
            {
              station: "BAOURO",
              voters: 643
            },
            {
              station: "MOUNGUEL",
              voters: 148
            },
          ],
          "ECOLE PUBLIQUE DE BINI / A": [
            {
              station: "BINI",
              voters: 2285
            },
            {
              station: "UNIVERSITE",
              voters: 10973
            },
            {
              station: "NGAWA",
              voters: 2244
            },
          ],
          "ECOLE PUBLIQUE DE GADA DANG / A": [
            {
              station: "DO-MBELLA",
              voters: 180
            },
            {
              station: "DORI-MAINA",
              voters: 180
            },
            {
              station: "GADA",
              voters: 307
            },
          ],
          "ECOLE PUBLIQUE DE GADA-MBIDOU / A": [
            {
              station: "BAGARMI",
              voters: 580
            },
            {
              station: "DANG",
              voters: 14155
            },
            {
              station: "VILLAGE",
              voters: 3002
            },
            {
              station: "GADA-MBIDOU",
              voters: 580
            },
          ],
          "ECOLE PUBLIQUE DE MADJELE II / A": [
            {
              station: "GADA-MADJELE",
              voters: 267
            },
            {
              station: "MADJELE",
              voters: 595
            },
            {
              station: "TIBAKA",
              voters: 267
            },
          ],
          "ECOLE PUBLIQUE DE MALANG / A": [
            {
              station: "DEBE",
              voters: 2860
            },
            {
              station: "MBIDOU-MALANG",
              voters: 2774
            },
            {
              station: "MBIPEI",
              voters: 2860
            },
            {
              station: "NDOUGOI",
              voters: 2861
            },
          ],
          "ECOLE PUBLIQUE DE MANWI / A": [
            {
              station: "MALAOU",
              voters: 2848
            },
            {
              station: "MANWI",
              voters: 2848
            },
            {
              station: "MASSIOL",
              voters: 2848
            },
            {
              station: "MBIDJORO",
              voters: 2848
            },
          ],
          "ECOLE PUBLIQUE DE MARGOL / A": [
            {
              station: "BALGARE",
              voters: 238
            },
            {
              station: "MARGOL",
              voters: 238
            },
          ],
          "ECOLE PUBLIQUE DE NABOUN / A": [
            {
              station: "NABOUN",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE DE NGODI / A": [
            {
              station: "MALO-GONI",
              voters: 1327
            },
            {
              station: "MALO-GOURORE",
              voters: 832
            },
            {
              station: "NGANA",
              voters: 832
            },
            {
              station: "(MAIBORNO)",
              voters: 832
            },
          ],
          "ECOLE PUBLIQUE DE SALTAKA / A": [
            {
              station: "FALINGO",
              voters: 281
            },
            {
              station: "FARANCA",
              voters: 281
            },
            {
              station: "SALTAKA",
              voters: 281
            },
          ],
          "ECOLE PUBLIQUE DE WOURO-SOUA / A": [
            {
              station: "BARANG",
              voters: 494
            },
            {
              station: "BEKA",
              voters: 1344
            },
            {
              station: "NGAOUMOKON",
              voters: 919
            },
            {
              station: "LANGUI",
              voters: 494
            },
            {
              station: "NGODI",
              voters: 1326
            },
            {
              station: "MAFALGAOU",
              voters: 494
            },
            {
              station: "WOURO-SOUA",
              voters: 680
            },
          ],
          "ECOLE PUBLIQUE DE YALA YARNA / A": [
            {
              station: "YALA",
              voters: 186
            },
            {
              station: "YARNA",
              voters: 186
            },
          ],
        },
        "NYAMBAKA": {
          "ECOLE DES PARENTS DE GADO DJEREM / A": [
            {
              station: "GADO",
              voters: 308
            },
            {
              station: "DJEREM",
              voters: 308
            },
          ],
          "ECOLE DES PARENTS DE KADJOKA / A": [
            {
              station: "KADJOKA",
              voters: 199
            },
            {
              station: "MANBAKA",
              voters: 199
            },
          ],
          "ECOLE DES PARENTS DE KATILFOULBE / A": [
            {
              station: "KATILFOULBE",
              voters: 325
            },
            {
              station: "KATILMBOUM",
              voters: 673
            },
          ],
          "ECOLE DES PARENTS DE LAOUPANGA / A": [
            {
              station: "LAOUPANGA",
              voters: 188
            },
          ],
          "ECOLE DES PARENTS DE MAKANE II / A": [
            {
              station: "MAKANE",
              voters: 149
            },
          ],
          "ECOLE DES PARENTS DE MBARANG DOUKA /  A": [
            {
              station: "MBARANG",
              voters: 130
            },
            {
              station: "DOUKA",
              voters: 130
            },
          ],
          "ECOLE DES PARENTS DE SOUKOUNGA / A": [
            {
              station: "SOUKOUNGA",
              voters: 578
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE LAWANA / A": [
            {
              station: "LAWANA",
              voters: 476
            },
            {
              station: "SAGA",
              voters: 476
            },
          ],
          "ECOLE PUBLIQUE DE BALEWA / A": [
            {
              station: "BALEWA",
              voters: 4091
            },
          ],
          "ECOLE PUBLIQUE DE BANDAL / A": [
            {
              station: "BANDAL",
              voters: 1181
            },
          ],
          "ECOLE PUBLIQUE DE BELEL-DIBI / A": [
            {
              station: "BELEL-DIBI",
              voters: 409
            },
          ],
          "ECOLE PUBLIQUE DE DIBI / A": [
            {
              station: "DIBI",
              voters: 1415
            },
          ],
          "ECOLE PUBLIQUE DE DJOUROUM / A": [
            {
              station: "DJAMTARI",
              voters: 419
            },
            {
              station: "DJOUROUM",
              voters: 419
            },
            {
              station: "SAILLARD",
              voters: 419
            },
            {
              station: "VINA",
              voters: 419
            },
            {
              station: "LAH",
              voters: 419
            },
          ],
          "ECOLE PUBLIQUE DE FOULOUGOU  LOUGGUERE / A": [
            {
              station: "FOULOUGOU",
              voters: 165
            },
            {
              station: "LOUGGUERE",
              voters: 165
            },
            {
              station: "MAREL",
              voters: 165
            },
            {
              station: "NGOROM",
              voters: 3896
            },
          ],
          "ECOLE PUBLIQUE DE GALDI / A": [
            {
              station: "DJAILA",
              voters: 1028
            },
            {
              station: "GALDI",
              voters: 988
            },
          ],
          "ECOLE PUBLIQUE DE KOGNOLI / A": [
            {
              station: "KOGNOLI",
              voters: 970
            },
            {
              station: "MADJALANG",
              voters: 970
            },
            {
              station: "MANGOLI",
              voters: 1598
            },
            {
              station: "NGAOUMBOL",
              voters: 1068
            },
            {
              station: "TINDINRING",
              voters: 970
            },
          ],
          "ECOLE PUBLIQUE DE MALOMBO / A": [
            {
              station: "MALOMBO",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE DE MANDOUROU KOLSEL /  A": [
            {
              station: "MANDOUROU",
              voters: 340
            },
            {
              station: "KOLSEL",
              voters: 340
            },
          ],
          "ECOLE PUBLIQUE DE MANGOLI / A": [
            {
              station: "MAYO",
              voters: 628
            },
            {
              station: "BALI",
              voters: 628
            },
          ],
          "ECOLE PUBLIQUE DE MANGOM-MBEWE / A": [
            {
              station: "MANGOM-MBEWE",
              voters: 552
            },
          ],
          "ECOLE PUBLIQUE DE MBERE MAGOIGNANG /  A": [
            {
              station: "MBERE",
              voters: 558
            },
            {
              station: "MAGOIGNANG",
              voters: 558
            },
          ],
          "ECOLE PUBLIQUE DE MBERENG / A": [
            {
              station: "MBERENG",
              voters: 52
            },
          ],
          "ECOLE PUBLIQUE DE MBONG-IYA / A": [
            {
              station: "MBONG-IYA",
              voters: 466
            },
            {
              station: "MBONG-MAYO",
              voters: 466
            },
            {
              station: "MBADJI",
              voters: 466
            },
          ],
          "ECOLE PUBLIQUE DE NEMINAKA / A": [
            {
              station: "MAYO-NANGUE",
              voters: 231
            },
            {
              station: "NEMINAKA",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE DE NYAMBAKA / A": [
            {
              station: "GOP",
              voters: 3731
            },
            {
              station: "NYAMBAKA",
              voters: 4887
            },
            {
              station: "YANGAI",
              voters: 3731
            },
          ],
          "ECOLE PUBLIQUE DE NYAMBAKA HOSSERE /  A": [
            {
              station: "HOSSERE",
              voters: 478
            },
          ],
          "ECOLE PUBLIQUE DE SADOOL MANA / A": [
            {
              station: "SADOOL",
              voters: 212
            },
            {
              station: "MANA",
              voters: 212
            },
            {
              station: "SADOOLTOUGGA",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE DE SOANGOR / A": [
            {
              station: "KOULADJE",
              voters: 475
            },
            {
              station: "SOANGOR",
              voters: 475
            },
          ],
          "ECOLE PUBLIQUE DE WASSANDE / A": [
            {
              station: "BARRIERE",
              voters: 1274
            },
            {
              station: "MOKMO",
              voters: 1274
            },
            {
              station: "WASSANDE",
              voters: 1274
            },
          ],
          "ECOLE PUBLIQUE DE WOURO-SANGUE / A": [
            {
              station: "WOURO-SANGUE",
              voters: 582
            },
          ],
          "EP FORI / A": [
            {
              station: "FORI",
              voters: 53
            },
          ],
          "HANG. COMM LAOURE BAYA / A": [
            {
              station: "LAOURE",
              voters: 135
            },
            {
              station: "BAYA",
              voters: 135
            },
          ],
          "HANGAR COMM. DE VONA / A": [
            {
              station: "KOSSONO",
              voters: 54
            },
            {
              station: "MAFIL",
              voters: 91
            },
          ],
          "HANGAR COMMUNAUTAIRE DE  MAKANEDJIDJI / A": [
            {
              station: "MAKANEDJIDJI",
              voters: 137
            },
          ],
          "HANGAR COMMUNAUTAIRE DE DASSAKOUL /  A": [
            {
              station: "DASSAKOUL",
              voters: 126
            },
            {
              station: "KONATOUKOUR",
              voters: 1114
            },
            {
              station: "VONA",
              voters: 180
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MAMOUMI / A": [
            {
              station: "MAMOUMI",
              voters: 200
            },
          ],
          "HANGAR COMMUNAUTAIRE DE MBIDOU / A": [
            {
              station: "MBIDOU",
              voters: 102
            },
          ],
          "HANGAR COMMUNAUTAIRE DE WADEN YOKO  /A": [
            {
              station: "WADEN",
              voters: 90
            },
            {
              station: "YOKO",
              voters: 90
            },
          ],
        },
      },
      "MBERE": {
        "DIR": {
          "CASE COM. MBARTOUA PASSI / A": [
            {
              station: "MBARTOUA",
              voters: 210
            },
            {
              station: "PASSI",
              voters: 210
            },
          ],
          "CASE COMMUNAUTAIRE ANCIEN BINAKO / A": [
            {
              station: "ANCIEN",
              voters: 132
            },
            {
              station: "BINAKO",
              voters: 132
            },
            {
              station: "DIR",
              voters: 4870
            },
          ],
          "CASE COMMUNAUTAIRE BADI / A": [
            {
              station: "BADI",
              voters: 141
            },
          ],
          "CASE COMMUNAUTAIRE DE GBAGO / A": [
            {
              station: "GBAGO",
              voters: 38
            },
          ],
          "CASE COMMUNAUTAIRE DJEREM / A": [
            {
              station: "DJEREM",
              voters: 169
            },
          ],
          "CASE COMMUNAUTAIRE MALINGARA / A": [
            {
              station: "MALINGARA",
              voters: 96
            },
          ],
          "CASE COMMUNAUTAIRE MOINAM / A": [
            {
              station: "MOINAM",
              voters: 59
            },
          ],
          "CASE COMMUNAUTAIRE NYONGAKE / A": [
            {
              station: "NYONGAKE",
              voters: 146
            },
          ],
          "CASE COMMUNAUTAIRE WENDOKA / A": [
            {
              station: "WENDOKA",
              voters: 48
            },
          ],
          "ECOLE BILINGUE DIR / A": [
            {
              station: "TENAH",
              voters: 451
            },
            {
              station: "SAFOU",
              voters: 451
            },
          ],
          "ECOLE DES PARENTS TOMEDO / A": [
            {
              station: "TOMEDO",
              voters: 307
            },
          ],
          "EP ALI AFFAIRE / A": [
            {
              station: "MATOKO",
              voters: 245
            },
          ],
          "EP BADJER / A": [
            {
              station: "BADJER",
              voters: 803
            },
          ],
          "EP BAGODO / A": [
            {
              station: "BAGODO",
              voters: 959
            },
          ],
          "EP BATOUA PANGAR / A": [
            {
              station: "BATOUA",
              voters: 304
            },
            {
              station: "PANGAR",
              voters: 304
            },
          ],
          "EP BEKA ZIKI / A": [
            {
              station: "BEKA",
              voters: 171
            },
            {
              station: "ZIKI",
              voters: 171
            },
          ],
          "EP BEYALA / A": [
            {
              station: "BEYALA",
              voters: 188
            },
          ],
          "EP BINDIBA / A": [
            {
              station: "BINDIBA",
              voters: 984
            },
          ],
          "EP BINMBAPPE / A": [
            {
              station: "BINMBAPPE",
              voters: 265
            },
            {
              station: "GBEZAH",
              voters: 453
            },
          ],
          "EP BOFORO / A": [
            {
              station: "BOFORO",
              voters: 494
            },
          ],
          "EP BOY BAYA / A": [
            {
              station: "BOY",
              voters: 579
            },
            {
              station: "BAYA",
              voters: 579
            },
            {
              station: "SIMI",
              voters: 1158
            },
          ],
          "EP DOBIRI / A": [
            {
              station: "DOBIRI",
              voters: 91
            },
          ],
          "EP DOUA / A": [
            {
              station: "DOUA",
              voters: 233
            },
          ],
          "EP GAZAGAZADE / A": [
            {
              station: "GAZAGAZADE",
              voters: 350
            },
          ],
          "EP GORO / A": [
            {
              station: "GORO",
              voters: 284
            },
          ],
          "EP GUIZORE / A": [
            {
              station: "GUIZORE",
              voters: 225
            },
          ],
          "EP KALALDI / A": [
            {
              station: "KALALDI",
              voters: 1028
            },
          ],
          "EP KELA SAMI / A": [
            {
              station: "KELA",
              voters: 317
            },
            {
              station: "SAMI",
              voters: 317
            },
          ],
          "EP KOUNDE / A": [
            {
              station: "KOUNDE",
              voters: 213
            },
          ],
          "EP LAMOU / A": [
            {
              station: "LAMOU",
              voters: 100
            },
          ],
          "EP MBELLA / A": [
            {
              station: "MBELLA",
              voters: 256
            },
          ],
          "EP MBIGORO I / A": [
            {
              station: "MBIGORO",
              voters: 702
            },
          ],
          "EP PANGARA 4 / A": [
            {
              station: "PANGARA",
              voters: 36
            },
          ],
          "EP RAOUZANAM / A": [
            {
              station: "RAOUZANAM",
              voters: 166
            },
          ],
          "EP SOURMA / A": [
            {
              station: "SOURMA",
              voters: 480
            },
          ],
          "EP WAAH / A": [
            {
              station: "WAAH",
              voters: 632
            },
          ],
          "LYCEE DIR / A": [
            {
              station: "TIKORO",
              voters: 185
            },
            {
              station: "MBORGUENE",
              voters: 185
            },
          ],
        },
        "DJOHONG": {
          "CASE COMMUNAUTAIRE DJAKONG / A": [
            {
              station: "DJAKONG",
              voters: 79
            },
          ],
          "CES DE NYARMBANG / A": [
            {
              station: "HOSSERE",
              voters: 95
            },
            {
              station: "GADJI",
              voters: 95
            },
          ],
          "CETIC DE DJOHONG / A": [
            {
              station: "DJIBO",
              voters: 75
            },
          ],
          "ECOLE DES PARENTS DJONNE / A": [
            {
              station: "DJONNE",
              voters: 80
            },
          ],
          "EP BABOUA / A": [
            {
              station: "BABOUA",
              voters: 137
            },
          ],
          "EP BAH NDAI / A": [
            {
              station: "BAH",
              voters: 76
            },
            {
              station: "NDAI",
              voters: 76
            },
          ],
          "EP BATOURE ZIM / A": [
            {
              station: "BATOURE",
              voters: 166
            },
            {
              station: "ZIM",
              voters: 91
            },
          ],
          "EP BEE DJAORO / A": [
            {
              station: "BEE",
              voters: 136
            },
            {
              station: "DJAORO",
              voters: 136
            },
            {
              station: "NAZARETH",
              voters: 136
            },
          ],
          "EP BEKA PETEL / A": [
            {
              station: "BEKA",
              voters: 191
            },
            {
              station: "PETEL",
              voters: 191
            },
          ],
          "EP BORGOP / A": [
            {
              station: "BORGOP",
              voters: 323
            },
          ],
          "EP DAMISSA / A": [
            {
              station: "DAMISSA",
              voters: 327
            },
          ],
          "EP DARE I / A": [
            {
              station: "DARE",
              voters: 369
            },
          ],
          "EP DARE MBONDO / A": [
            {
              station: "MBONDO",
              voters: 268
            },
          ],
          "EP DJAOROU MONE / A": [
            {
              station: "DJAOROU",
              voters: 395
            },
            {
              station: "MONE",
              voters: 395
            },
          ],
          "EP GANDINANG / A": [
            {
              station: "GANDINANG",
              voters: 534
            },
          ],
          "EP GBATOUA / A": [
            {
              station: "GBATOUA",
              voters: 132
            },
          ],
          "EP GROUPE I DJOHONG / A": [
            {
              station: "DJOHONG",
              voters: 2304
            },
          ],
          "EP LAINDE MAMI / A": [
            {
              station: "LAINDE",
              voters: 153
            },
            {
              station: "MAMI",
              voters: 153
            },
          ],
          "EP LAMOU / A": [
            {
              station: "LAMOU",
              voters: 502
            },
          ],
          "EP MBELLA NGOU / A": [
            {
              station: "MBELLA",
              voters: 168
            },
            {
              station: "NGOU",
              voters: 168
            },
          ],
          "EP MBEWE MIDAL / A": [
            {
              station: "MBEWE",
              voters: 238
            },
            {
              station: "MIDAL",
              voters: 238
            },
          ],
          "EP NABEMO / A": [
            {
              station: "NABEMO",
              voters: 564
            },
          ],
          "EP NDAWE / A": [
            {
              station: "NDAWE",
              voters: 264
            },
          ],
          "EP OURO ADDE / A": [
            {
              station: "OURO",
              voters: 436
            },
            {
              station: "ADDE",
              voters: 436
            },
          ],
          "EP WANGOU / A": [
            {
              station: "WANGOU",
              voters: 49
            },
          ],
          "EP YAMBA / A": [
            {
              station: "YAMBA",
              voters: 1093
            },
          ],
          "EP YARMBANG / A": [
            {
              station: "YARMBANG",
              voters: 1066
            },
          ],
          "ESPLANADE CHEFFERIE NGAOUZORO / A": [
            {
              station: "NGAOUZORO",
              voters: 154
            },
          ],
          "LYCEE BILINGUE DE DJOHONG / A": [
            {
              station: "MBOUDOUA",
              voters: 257
            },
          ],
        },
        "MEIGANGA": {
          "CASE COMMUNAUTAIRE SABONGARI BELA /  A": [
            {
              station: "MBELLA",
              voters: 97
            },
          ],
          "CASE COMMUNAUTAIRE WANTAMO / A": [
            {
              station: "WANTAMO",
              voters: 59
            },
          ],
          "CENTRE DE PROMOTIONN DE LA FEMME / A": [
            {
              station: "BONWEN",
              voters: 387
            },
          ],
          "DD TRANSPORTS / A": [
            {
              station: "NDAA",
              voters: 842
            },
            {
              station: "ZANDABA",
              voters: 14378
            },
          ],
          "DEL DEP TRAVAUX PUBLICS / A": [
            {
              station: "DOOBEZO",
              voters: 346
            },
          ],
          "DEL DPT EMPLOI / A": [
            {
              station: "BONABERI",
              voters: 525
            },
          ],
          "DEL DPT HABITAT ET DEV URBAIN / A": [
            {
              station: "BANTADJE",
              voters: 1150
            },
          ],
          "DEL DPT PETITES ET MOYENNES  ENTREPRISES / A": [
            {
              station: "ARDO",
              voters: 1251
            },
            {
              station: "BAKARI",
              voters: 726
            },
            {
              station: "BEM",
              voters: 726
            },
          ],
          "ECOLE DES PARENTS ANCIEN BAINA / A": [
            {
              station: "ANCIEN",
              voters: 61
            },
            {
              station: "BAINA",
              voters: 211
            },
          ],
          "ECOLE DES PARENTS BARDE / A": [
            {
              station: "BARDE",
              voters: 49
            },
          ],
          "ECOLE DES PARENTS DJALO / A": [
            {
              station: "DJALO",
              voters: 101
            },
          ],
          "ECOLE DES PARENTS DOKOLIM / A": [
            {
              station: "DOKOLIM",
              voters: 323
            },
          ],
          "ECOLE DES PARENTS DOLE / A": [
            {
              station: "DOLE",
              voters: 28
            },
          ],
          "ECOLE DES PARENTS FELL / A": [
            {
              station: "FELL",
              voters: 433
            },
          ],
          "ECOLE DES PARENTS GBATEN / A": [
            {
              station: "GBATEN",
              voters: 81
            },
          ],
          "ECOLE DES PARENTS LORTANG / A": [
            {
              station: "LORTANG",
              voters: 57
            },
          ],
          "ECOLE DES PARENTS MAMA WASSANDE / A": [
            {
              station: "MAMA",
              voters: 33
            },
            {
              station: "WASSANDE",
              voters: 33
            },
          ],
          "ECOLE DES PARENTS MBERE / A": [
            {
              station: "MBERE",
              voters: 3299
            },
          ],
          "ECOLE DES PARENTS MOUFECK / A": [
            {
              station: "MOUFECK",
              voters: 39
            },
          ],
          "ECOLE DES PARENTS NDERA / A": [
            {
              station: "NDERA",
              voters: 38
            },
          ],
          "ECOLE DES PARENTS SALAO / A": [
            {
              station: "SALAO",
              voters: 43
            },
          ],
          "ECOLE MATERNELLE LES AMIS / A": [
            {
              station: "BEGUEM",
              voters: 405
            },
          ],
          "ECOLE PUBLIQUE GROUPE 3B KOUR YOYO /  A": [
            {
              station: "KOUR",
              voters: 39
            },
          ],
          "ENIEG MEIGANGA / A": [
            {
              station: "DABOLOE",
              voters: 615
            },
          ],
          "EP BAINA MBOU / A": [
            {
              station: "MBOU",
              voters: 150
            },
          ],
          "EP BARKI / A": [
            {
              station: "BARKI",
              voters: 81
            },
          ],
          "EP BEKA / A": [
            {
              station: "BEKA",
              voters: 1054
            },
          ],
          "EP BEMBARANG / A": [
            {
              station: "BEMBARANG",
              voters: 93
            },
          ],
          "EP BOUNOU / A": [
            {
              station: "BOUNOU",
              voters: 99
            },
          ],
          "EP DAKERE / A": [
            {
              station: "DAKERE",
              voters: 187
            },
          ],
          "EP DANA / A": [
            {
              station: "DANA",
              voters: 75
            },
          ],
          "EP DANKALI / A": [
            {
              station: "DANKALI",
              voters: 288
            },
          ],
          "EP DJALINGO / A": [
            {
              station: "DJALINGO",
              voters: 125
            },
          ],
          "EP DJAORO DOUA / A": [
            {
              station: "DJAORO",
              voters: 581
            },
            {
              station: "DOUA",
              voters: 139
            },
          ],
          "EP DJOUZAMI / A": [
            {
              station: "DJOUZAMI",
              voters: 407
            },
          ],
          "EP DOUA YEL / A": [
            {
              station: "YEL",
              voters: 83
            },
          ],
          "EP DOZOUI / A": [
            {
              station: "DOZOUI",
              voters: 239
            },
            {
              station: "MIKILA",
              voters: 239
            },
          ],
          "EP FADA / A": [
            {
              station: "FADA",
              voters: 1050
            },
            {
              station: "ADAMOU",
              voters: 525
            },
            {
              station: "SOUDI",
              voters: 525
            },
          ],
          "EP GANKOMBOL / A": [
            {
              station: "GANKOMBOL",
              voters: 440
            },
            {
              station: "GARGA",
              voters: 1199
            },
            {
              station: "LIMBONA",
              voters: 1199
            },
          ],
          "EP GBAFOUCK HOSSERE / A": [
            {
              station: "GBAFOUCK",
              voters: 65
            },
            {
              station: "HOSSERE",
              voters: 65
            },
          ],
          "EP GBAGBONGO / A": [
            {
              station: "GBAGBONGO",
              voters: 485
            },
          ],
          "EP GBATA / A": [
            {
              station: "GBATA",
              voters: 114
            },
            {
              station: "NORD",
              voters: 77
            },
          ],
          "EP GBATOUA GODOLE / A": [
            {
              station: "GBATOUA",
              voters: 1877
            },
            {
              station: "GODOLE",
              voters: 1877
            },
          ],
          "EP GBAWAR / A": [
            {
              station: "GBAWAR",
              voters: 182
            },
          ],
          "EP GBOUTOU / A": [
            {
              station: "GBOUTOU",
              voters: 445
            },
          ],
          "EP GOUIGO / A": [
            {
              station: "GOUIGO",
              voters: 63
            },
          ],
          "EP GP1A MEIGANGA / A": [
            {
              station: "FOULBERE",
              voters: 5044
            },
            {
              station: "DABO",
              voters: 2522
            },
            {
              station: "HAMADJANGUI",
              voters: 2522
            },
            {
              station: "HAOUSSA",
              voters: 3196
            },
          ],
          "EP GP2 MEIGANGA / A": [
            {
              station: "ELEVAGE",
              voters: 688
            },
          ],
          "EP GP3 MEIGANGA / A": [
            {
              station: "SABONGARI",
              voters: 6083
            },
            {
              station: "BASSIROU",
              voters: 2798
            },
            {
              station: "MAMOUDOU",
              voters: 2798
            },
          ],
          "EP GUNBELA / A": [
            {
              station: "GUNBELA",
              voters: 1069
            },
          ],
          "EP HORE KONI / A": [
            {
              station: "HORE",
              voters: 306
            },
            {
              station: "KONI",
              voters: 306
            },
          ],
          "EP KAAKA / A": [
            {
              station: "ASSOURA",
              voters: 642
            },
            {
              station: "KAAKA",
              voters: 642
            },
          ],
          "EP KOMBO LAKA / A": [
            {
              station: "KOMBO",
              voters: 1301
            },
            {
              station: "LAKA",
              voters: 1444
            },
          ],
          "EP KPAAMA / A": [
            {
              station: "KPAAMA",
              voters: 173
            },
            {
              station: "NGOLORI",
              voters: 173
            },
          ],
          "EP KPOCKO'O / A": [
            {
              station: "KPOCKO'O",
              voters: 996
            },
          ],
          "EP LAKA PETEL / A": [
            {
              station: "PETEL",
              voters: 143
            },
          ],
          "EP LAWANE / A": [
            {
              station: "GBAGUETE",
              voters: 215
            },
            {
              station: "LAWANE",
              voters: 215
            },
          ],
          "EP LOKOTI / A": [
            {
              station: "LOKOTI",
              voters: 1344
            },
            {
              station: "MBANDJOUCK",
              voters: 1344
            },
          ],
          "EP MAZEDOU / A": [
            {
              station: "MAZEDOU",
              voters: 74
            },
          ],
          "EP MBALE / A": [
            {
              station: "MBALE",
              voters: 301
            },
          ],
          "EP MBARANG / A": [
            {
              station: "MBARANG",
              voters: 1514
            },
            {
              station: "ABDOURAOUFI",
              voters: 757
            },
            {
              station: "MAMANG",
              voters: 757
            },
          ],
          "EP MBONDO / A": [
            {
              station: "MBONDO",
              voters: 350
            },
            {
              station: "NGAZI",
              voters: 596
            },
            {
              station: "TINAH",
              voters: 350
            },
          ],
          "EP MBOULA / A": [
            {
              station: "MBOULA",
              voters: 6295
            },
          ],
          "EP MBOULAI / A": [
            {
              station: "MBOULAI",
              voters: 270
            },
          ],
          "EP MEIDOUGOU / A": [
            {
              station: "MEIDOUGOU",
              voters: 3119
            },
          ],
          "EP MGBAKOUNGUE / A": [
            {
              station: "MGBAKOUNGUE",
              voters: 579
            },
          ],
          "EP NANDEKE / A": [
            {
              station: "NANDEKE",
              voters: 472
            },
          ],
          "EP NDONGUE / A": [
            {
              station: "NDONGUE",
              voters: 259
            },
          ],
          "EP NDOYONG / A": [
            {
              station: "NDOYONG",
              voters: 77
            },
          ],
          "EP NGAM / A": [
            {
              station: "NGAM",
              voters: 429
            },
            {
              station: "NGANHI",
              voters: 1094
            },
          ],
          "EP NINGA SONGO / A": [
            {
              station: "PITOA",
              voters: 1237
            },
          ],
          "EP PROTESTANTE MEIGANGA / A": [
            {
              station: "YABASSI",
              voters: 1634
            },
            {
              station: "YELWA",
              voters: 3268
            },
            {
              station: "ABBA",
              voters: 1634
            },
            {
              station: "MOUSSA",
              voters: 1634
            },
          ],
          "EP SABONGARI GBABOE / A": [
            {
              station: "GBABOE",
              voters: 149
            },
          ],
          "EP SABONGARI MBORGUENE / A": [
            {
              station: "MBORGUENE",
              voters: 241
            },
          ],
          "EP TIKIRI / A": [
            {
              station: "TIKIRI",
              voters: 307
            },
          ],
          "EP YAFOUNOU / A": [
            {
              station: "YAFOUNOU",
              voters: 45
            },
          ],
          "EP YENDE / A": [
            {
              station: "YENDE",
              voters: 117
            },
          ],
          "HANGAR COMMUNAUTAIRE DE GBATA SUD /  A": [
            {
              station: "SUD",
              voters: 37
            },
          ],
          "HANGAR COMMUNAUTAIRE DE KOMBOUL / A": [
            {
              station: "KOMBOUL",
              voters: 144
            },
          ],
          "HANGAR KASSA ZARA / A": [
            {
              station: "KASSA",
              voters: 65
            },
            {
              station: "ZARA",
              voters: 65
            },
          ],
          "LYCEE BILINGUE MEIGANGA / A": [
            {
              station: "ARABE",
              voters: 3212
            },
            {
              station: "GUIMINI",
              voters: 3212
            },
            {
              station: "SOBEA",
              voters: 3212
            },
          ],
          "LYCEE CLASSIQUE MEIGANGA / A": [
            {
              station: "NGASSIRI",
              voters: 9036
            },
            {
              station: "ELF",
              voters: 3012
            },
            {
              station: "GBAHOKO",
              voters: 3012
            },
            {
              station: "GONGA",
              voters: 3012
            },
          ],
          "RECETTE DES FINANCES MEIGANGA / A": [
            {
              station: "CENTRE",
              voters: 3372
            },
            {
              station: "ADMINISTRATIF",
              voters: 3372
            },
            {
              station: "YIZORO",
              voters: 1461
            },
            {
              station: "YOYO",
              voters: 1500
            },
          ],
          "SAR/SM MEIGANGA / A": [
            {
              station: "DOUKOULOUKOU",
              voters: 153
            },
          ],
          "SERVICE DPT AFFAIRES FONCTIERES / A": [
            {
              station: "KAIGAMA",
              voters: 259
            },
          ],
        },
        "NGAOUI": {
          "CASE COMMUNAUTAIRE DE DOLE / A": [
            {
              station: "DOLE",
              voters: 58
            },
          ],
          "ECOLE DES PARENTS BADOUNDA / A": [
            {
              station: "BADOUNDA",
              voters: 21
            },
          ],
          "ECOLE DES PARENTS BAWAKA OUMAROU / A": [
            {
              station: "OUMAROU",
              voters: 186
            },
          ],
          "ECOLE DES PARENTS DANMABIA / A": [
            {
              station: "DANMABIA",
              voters: 40
            },
          ],
          "ECOLE MATERNELLE - TACHA NGAOUI / A": [
            {
              station: "CENTRE",
              voters: 1086
            },
            {
              station: "SANTE",
              voters: 1086
            },
          ],
          "EP ALHAMDOU / A": [
            {
              station: "ALHAMDOU",
              voters: 568
            },
          ],
          "EP BAFOUCK / A": [
            {
              station: "BAFOUCK",
              voters: 603
            },
          ],
          "EP BAWAKA KOE / A": [
            {
              station: "BAWAKA",
              voters: 272
            },
            {
              station: "KOE",
              voters: 86
            },
          ],
          "EP DIEL / A": [
            {
              station: "DIEL",
              voters: 438
            },
          ],
          "EP DJABORI / A": [
            {
              station: "DJABORI",
              voters: 275
            },
          ],
          "EP GARGA-PELLA / A": [
            {
              station: "GARGA-PELLA",
              voters: 436
            },
          ],
          "EP NGOLO / A": [
            {
              station: "NGOLO",
              voters: 123
            },
          ],
          "EP SOBBA / A": [
            {
              station: "SOBBA",
              voters: 140
            },
          ],
          "EP TOURAKE / A": [
            {
              station: "TOURAKE",
              voters: 122
            },
          ],
          "EP WANDANDERRE / A": [
            {
              station: "WANDANDERRE",
              voters: 103
            },
          ],
          "EPG1 NGAOUI / A": [
            {
              station: "LAMORDE",
              voters: 1686
            },
          ],
          "EPG2 NGAOUI / A": [
            {
              station: "LOMBE",
              voters: 3141
            },
          ],
          "EPG3 NGAOUI / A": [
            {
              station: "MBARANG",
              voters: 2130
            },
          ],
        },
      },
    },
  },
};
