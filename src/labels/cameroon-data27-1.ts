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
  "EXTREME-NORD": {
    name: { en: "FAR-NORTH", fr: "EXTREME-NORD" },
    divisions: {
      "LOGONE-ET-CHARI": {
        "BLANGOUA": {
          "CENTRE DE SANTE DE BLARAM / A": [
            {
              station: "BLARAM",
              voters: 724
            },
            {
              station: "WAYAWAYA",
              voters: 426
            },
          ],
          "CHEFFERIE DE BLABINE / A": [
            {
              station: "BLABLINE",
              voters: 178
            },
          ],
          "CHEFFERIE DE CHAOUE / A": [
            {
              station: "BERMOUSSA",
              voters: 233
            },
            {
              station: "CHAOUE",
              voters: 233
            },
            {
              station: "NAGA",
              voters: 233
            },
          ],
          "CHEFFERIE DE GUELAM / A": [
            {
              station: "GUELAM",
              voters: 348
            },
          ],
          "CHEFFERIE DE MANGALME / A": [
            {
              station: "MANGALME",
              voters: 202
            },
          ],
          "CHEFFERIE DE NGOUM / A": [
            {
              station: "ALHADJI",
              voters: 399
            },
            {
              station: "BRAHIM",
              voters: 399
            },
            {
              station: "NGOUM",
              voters: 399
            },
          ],
          "CHEFFERIE DE ZAFAYA / A": [
            {
              station: "III",
              voters: 1045
            },
          ],
          "ECOLE PUBLIQUE DE BLANGOUA / A": [
            {
              station: "NDILI",
              voters: 770
            },
            {
              station: "NGANATIR",
              voters: 903
            },
            {
              station: "RESIDENTIEL",
              voters: 770
            },
          ],
          "ECOLE PUBLIQUE DE DABOULDA / A": [
            {
              station: "ADAM",
              voters: 814
            },
            {
              station: "DOGO",
              voters: 814
            },
            {
              station: "ARDEBE",
              voters: 4206
            },
            {
              station: "DABOULDA",
              voters: 814
            },
          ],
          "ECOLE PUBLIQUE DE DOR-IMAR / A": [
            {
              station: "DOR-IMAR",
              voters: 356
            },
            {
              station: "KOUK",
              voters: 356
            },
            {
              station: "KOUSSOUMA",
              voters: 356
            },
          ],
          "ECOLE PUBLIQUE DE KINABARI / A": [
            {
              station: "ANDOURMANE",
              voters: 381
            },
            {
              station: "DJOUROU",
              voters: 514
            },
            {
              station: "KINABARI",
              voters: 381
            },
            {
              station: "KINZAYAKEU",
              voters: 1297
            },
            {
              station: "MANDINA",
              voters: 759
            },
            {
              station: "MANGAIYO",
              voters: 381
            },
            {
              station: "NZILIO",
              voters: 381
            },
          ],
          "ECOLE PUBLIQUE DE KINZAYAKEU / A": [
            {
              station: "KOKI",
              voters: 916
            },
            {
              station: "MASSAKI",
              voters: 1108
            },
            {
              station: "TCHINGOUA",
              voters: 916
            },
          ],
          "ECOLE PUBLIQUE DE KOBRO / A": [
            {
              station: "IYAMAGRA",
              voters: 388
            },
            {
              station: "KOBRO",
              voters: 388
            },
          ],
          "ECOLE PUBLIQUE DE KOFIA / A": [
            {
              station: "BIRNIN",
              voters: 657
            },
            {
              station: "GONI",
              voters: 657
            },
            {
              station: "KOFIA",
              voters: 2054
            },
          ],
          "ECOLE PUBLIQUE DE KOUTOULA / A": [
            {
              station: "KOUTOULA",
              voters: 787
            },
          ],
          "ECOLE PUBLIQUE DE NGOUM / A": [
            {
              station: "AMADOU",
              voters: 169
            },
            {
              station: "BARI",
              voters: 169
            },
            {
              station: "GOLBE",
              voters: 169
            },
            {
              station: "TAPAWADJI",
              voters: 169
            },
            {
              station: "ZOUNFOUMA",
              voters: 169
            },
          ],
          "ECOLE PUBLIQUE DE SERO ABOU / A": [
            {
              station: "DINDO",
              voters: 285
            },
            {
              station: "SERO",
              voters: 285
            },
            {
              station: "ABOU",
              voters: 285
            },
          ],
          "ESPL. CHEFFERIE DE MASSAKI / A": [
            {
              station: "MARATCHA",
              voters: 384
            },
            {
              station: "MAMOU",
              voters: 192
            },
            {
              station: "SIGNAKA",
              voters: 192
            },
            {
              station: "NDJARGOUDJA",
              voters: 192
            },
          ],
          "GRANDE MOSQUEE DE SABOURA / A": [
            {
              station: "NDARABAYA",
              voters: 218
            },
            {
              station: "SABOURA",
              voters: 218
            },
          ],
          "HOPITAL DE BLANGOUA (CMA) / A": [
            {
              station: "BLANGOUA",
              voters: 4830
            },
          ],
          "MARCHE DE POISSON DE BLANGOUA / A": [
            {
              station: "MASSA",
              voters: 2081
            },
          ],
          "MOSQUEE DE ABINKRO / A": [
            {
              station: "ABINKRO",
              voters: 196
            },
            {
              station: "ACHIYAMBA",
              voters: 196
            },
          ],
          "MOSQUEE DE MADAIK / A": [
            {
              station: "MADAIK",
              voters: 260
            },
          ],
          "MOSQUEE DE PAKISTAN / A": [
            {
              station: "PAKISTAN",
              voters: 231
            },
          ],
        },
        "DARAK": {
          "CHEFFERIE DE AISSA KOURA / A": [
            {
              station: "AISSA",
              voters: 565
            },
            {
              station: "KOURA",
              voters: 565
            },
          ],
          "CHEFFERIE DE DOLE ABOUNA / A": [
            {
              station: "DOLE",
              voters: 282
            },
            {
              station: "ABOUNA",
              voters: 282
            },
          ],
          "CHEFFERIE DE KARENA I / A": [
            {
              station: "KARENA",
              voters: 960
            },
          ],
          "CHEFFERIE DE KOUNDJARA / A": [
            {
              station: "KOUNDJARA",
              voters: 275
            },
          ],
          "CHEFFERIE DE MAGALA DJOURGOUL / A": [
            {
              station: "DJOURGOUL",
              voters: 86
            },
          ],
          "CHEFFERIE DE MAGALA-NDJAMENA / A": [
            {
              station: "DISMANE",
              voters: 192
            },
            {
              station: "HIDJELIDJE",
              voters: 192
            },
            {
              station: "MAGALA-NDJAMENA",
              voters: 192
            },
          ],
          "CHEFFERIE DE NGUIRKIMA-RIAD / A": [
            {
              station: "NGUIRKIMA-RIAD",
              voters: 258
            },
          ],
          "CHEFFERIE DE TOROROYA / A": [
            {
              station: "RAMINDORINA",
              voters: 277
            },
            {
              station: "TOROROYA",
              voters: 277
            },
          ],
          "CHEFFERIE KOTOKO DE DARAK / A": [
            {
              station: "KOTOKO",
              voters: 1050
            },
            {
              station: "VIII",
              voters: 234
            },
          ],
          "CHEFFERIE SABONGARI DE BLAMA AI / A": [
            {
              station: "BLAMA",
              voters: 2221
            },
            {
              station: "DARAK",
              voters: 5237
            },
          ],
          "ECOLE BILINGUE DE DARAK / A": [
            {
              station: "DANIEL",
              voters: 337
            },
            {
              station: "VII",
              voters: 337
            },
            {
              station: "SIMON",
              voters: 337
            },
          ],
          "ECOLE PUBLIQUE DE BIDEINE / A": [
            {
              station: "BIDEINE",
              voters: 411
            },
          ],
          "ECOLE PUBLIQUE DE BOUARAM / A": [
            {
              station: "BOUARAM",
              voters: 98
            },
          ],
          "ECOLE PUBLIQUE DE BOUSSAYA / A": [
            {
              station: "BOUSSAYA",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE DE GORE TCHANDI I / A": [
            {
              station: "GORE",
              voters: 454
            },
            {
              station: "TCHANDI",
              voters: 454
            },
          ],
          "ECOLE PUBLIQUE DE KADOUNA / A": [
            {
              station: "KADOUNA",
              voters: 323
            },
          ],
          "ECOLE PUBLIQUE DE KATIKIME II / A": [
            {
              station: "DORO",
              voters: 360
            },
            {
              station: "LIMAN",
              voters: 360
            },
            {
              station: "KATIKIME",
              voters: 512
            },
          ],
          "ECOLE PUBLIQUE DE MAGALA KABIR I / A": [
            {
              station: "HERWA",
              voters: 328
            },
            {
              station: "MAGALA",
              voters: 1079
            },
            {
              station: "KABIR",
              voters: 993
            },
          ],
          "ECOLE PUBLIQUE DE MAINARI / A": [
            {
              station: "DJIREIB",
              voters: 627
            },
            {
              station: "HAMIT",
              voters: 306
            },
            {
              station: "MAINARI",
              voters: 306
            },
            {
              station: "NDJODA",
              voters: 306
            },
            {
              station: "NGAIWA",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE DE NAGA'A I / A": [
            {
              station: "NAGA'A",
              voters: 1618
            },
          ],
          "ECOLE PUBLIQUE DE NIGUE / A": [
            {
              station: "KARAMA",
              voters: 176
            },
            {
              station: "NIGUE",
              voters: 176
            },
          ],
          "GRANDE MOSQUEE DE DARAK / A": [
            {
              station: "ISSA",
              voters: 918
            },
            {
              station: "III",
              voters: 1318
            },
            {
              station: "ARABE",
              voters: 489
            },
          ],
          "MARCHE DE POISSON DE DARAK / A": [
            {
              station: "KANOURI",
              voters: 582
            },
          ],
          "SOUS-PREFECTURE DE DARAK / A": [
            {
              station: "MOUSGOUM",
              voters: 330
            },
          ],
        },
        "FOTOKOL": {
          "DELAGATION D'ELEVAGE DE FOTOKOL / A": [
            {
              station: "ABAKAR",
              voters: 879
            },
            {
              station: "GAMBO",
              voters: 879
            },
          ],
          "ECOLE P. DE KOUBOUGUE CENTRE DU  VILLAGE / A": [
            {
              station: "KOUBOUGUE",
              voters: 412
            },
          ],
          "ECOLE PUBLIQUE D'AMTCHOUKOULI / A": [
            {
              station: "AMTOUKOULII",
              voters: 467
            },
            {
              station: "WOROKEIME",
              voters: 467
            },
          ],
          "ECOLE PUBLIQUE DE BELGUEDE / A": [
            {
              station: "BELGUEDE",
              voters: 521
            },
            {
              station: "BENESSOUE",
              voters: 521
            },
            {
              station: "FIMA",
              voters: 521
            },
            {
              station: "KALOUE",
              voters: 521
            },
          ],
          "ECOLE PUBLIQUE DE BLANGAFE / A": [
            {
              station: "BLANGAFE",
              voters: 435
            },
            {
              station: "DOLE",
              voters: 435
            },
            {
              station: "HERERIME",
              voters: 1019
            },
          ],
          "ECOLE PUBLIQUE DE CHOULOBA / A": [
            {
              station: "CHOLOBA",
              voters: 320
            },
          ],
          "ECOLE PUBLIQUE DE DJISSALAM / A": [
            {
              station: "DISSALAM",
              voters: 119
            },
          ],
          "ECOLE PUBLIQUE DE DJOUKA HACHIM / A": [
            {
              station: "BIDI",
              voters: 376
            },
            {
              station: "DJOUKA",
              voters: 684
            },
            {
              station: "HACHIM",
              voters: 376
            },
            {
              station: "KEKAWA",
              voters: 376
            },
            {
              station: "MEDINA",
              voters: 376
            },
          ],
          "ECOLE PUBLIQUE DE GLO - KOTOKO / A": [
            {
              station: "FARKOUMARI",
              voters: 292
            },
            {
              station: "GLO-",
              voters: 292
            },
            {
              station: "KOTOKO",
              voters: 782
            },
          ],
          "ECOLE PUBLIQUE DE LAIMARI / A": [
            {
              station: "LAIMARI",
              voters: 432
            },
          ],
          "ECOLE PUBLIQUE DE MAINARI / A": [
            {
              station: "MAINARI",
              voters: 402
            },
          ],
          "ECOLE PUBLIQUE DE MAKABAMRA / A": [
            {
              station: "MAKAMBARA",
              voters: 1007
            },
          ],
          "ECOLE PUBLIQUE DE SAGME GARDOLE / A": [
            {
              station: "SAGME",
              voters: 978
            },
            {
              station: "GARDOLE",
              voters: 390
            },
          ],
          "ECOLE PUBLIQUE DE SAGME MERAHA / A": [
            {
              station: "MEIRAHA",
              voters: 141
            },
          ],
          "ECOLE PUBLIQUE DE SAGME SABANGARI / A": [
            {
              station: "SABANGARI",
              voters: 236
            },
          ],
          "ECOLE PUBLIQUE DE SOUERAM / A": [
            {
              station: "SOUERAM",
              voters: 354
            },
          ],
          "ECOLE PUBLIQUE DMAGAM KOTOKO / A": [
            {
              station: "MAGAM",
              voters: 202
            },
            {
              station: "ARABE",
              voters: 62
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE FOTOKOL / A": [
            {
              station: "ABALIFA",
              voters: 1828
            },
            {
              station: "ALLAMINE",
              voters: 1828
            },
            {
              station: "WALAMBA",
              voters: 1828
            },
          ],
          "ECOLE PUBLIQUEE DE HAIGAYO / A": [
            {
              station: "HAIGAYO",
              voters: 334
            },
          ],
          "ESPLANADE MOSQUEE ABAGANAMA / A": [
            {
              station: "ABAGANAMA",
              voters: 2552
            },
            {
              station: "ABATCHA",
              voters: 1376
            },
          ],
          "ESPLANADE MOSQUEE DE ARDEBE / A": [
            {
              station: "ARDEBE",
              voters: 172
            },
          ],
          "ESPLANADE MOSQUEE DE BIDEINE / A": [
            {
              station: "BIDEINE",
              voters: 259
            },
          ],
          "ESPLANADE MOSQUEE DE BLABAGO / A": [
            {
              station: "GREMARI",
              voters: 130
            },
            {
              station: "MOUNGACHIRI",
              voters: 130
            },
            {
              station: "SEBSABANE",
              voters: 130
            },
          ],
          "ESPLANADE MOSQUEE DE DJOUKA  NDJAMENA / A": [
            {
              station: "NDJAMENA",
              voters: 519
            },
            {
              station: "KABETOUA",
              voters: 308
            },
            {
              station: "WAFLAM",
              voters: 308
            },
          ],
          "ESPLANADE MOSQUEE DE ELBEIT / A": [
            {
              station: "MALLOUM",
              voters: 1943
            },
          ],
          "ESPLANADE MOSQUEE DE ELBEIT III / A": [
            {
              station: "YOUNOUS",
              voters: 584
            },
            {
              station: "HESSANA",
              voters: 584
            },
          ],
          "ESPLANADE MOSQUEE DE GADAFAI / A": [
            {
              station: "GADAFAI",
              voters: 292
            },
          ],
          "ESPLANADE MOSQUEE DE GALAOU / A": [
            {
              station: "GALAOU",
              voters: 1137
            },
          ],
          "ESPLANADE MOSQUEE DE GOLMO KOTOKO /  A": [
            {
              station: "GOLMO",
              voters: 350
            },
          ],
          "ESPLANADE MOSQUEE DE GONI SEINI / A": [
            {
              station: "DJIDDA",
              voters: 213
            },
            {
              station: "ADOUM",
              voters: 213
            },
          ],
          "ESPLANADE MOSQUEE DE GONI TJIDJANIMA  /A": [
            {
              station: "ABBA",
              voters: 720
            },
            {
              station: "MAHAMAT",
              voters: 720
            },
          ],
          "ESPLANADE MOSQUEE DE GUEGUERI / A": [
            {
              station: "GUEGUERI",
              voters: 235
            },
            {
              station: "NGANAWAI",
              voters: 235
            },
          ],
          "ESPLANADE MOSQUEE DE MADAIK / A": [
            {
              station: "MADAIK",
              voters: 149
            },
          ],
          "ESPLANADE MOSQUEE DE MAGADI / A": [
            {
              station: "BARKARI",
              voters: 612
            },
            {
              station: "MAGADI",
              voters: 612
            },
            {
              station: "SAMBORI",
              voters: 612
            },
            {
              station: "IMAR",
              voters: 920
            },
          ],
          "ESPLANADE MOSQUEE DE NIGUE / A": [
            {
              station: "NIGUE",
              voters: 391
            },
          ],
          "ESPLANADE MOSQUEE DE OH- HEMADIE / A": [
            {
              station: "ISSA",
              voters: 276
            },
            {
              station: "TOM",
              voters: 276
            },
            {
              station: "OH-",
              voters: 552
            },
            {
              station: "HEMADIE",
              voters: 276
            },
            {
              station: "HISSENIE",
              voters: 276
            },
          ],
          "ESPLANADE MOSQUEE DE WOROMARI / A": [
            {
              station: "WOROMARI",
              voters: 234
            },
          ],
          "ESPLANADE MOSQUEE GLO-ARABE / A": [
            {
              station: "DAMALGOU",
              voters: 307
            },
            {
              station: "FADJE",
              voters: 859
            },
            {
              station: "BANASSET",
              voters: 307
            },
            {
              station: "GLO-ARABE",
              voters: 307
            },
          ],
          "ESPLANAGE MOSQUEE DE BLABAGO / A": [
            {
              station: "BLABAGO",
              voters: 168
            },
          ],
          "FACE BOUTIQUE LAMARA / A": [
            {
              station: "HEROUAMA",
              voters: 767
            },
          ],
          "FOTOKOL CAMTEL / A": [
            {
              station: "MALMADJA",
              voters: 291
            },
          ],
          "LIEU DE REUNION PUBLIQUE WANGARA I / A": [
            {
              station: "KALDJOUA",
              voters: 244
            },
            {
              station: "WANGARA",
              voters: 548
            },
          ],
          "LIEU DE REUNION PUBLIQUE WANGARA II / A": [
            {
              station: "DJABARI",
              voters: 304
            },
          ],
          "LYCEE DE FOTOKOL / A": [
            {
              station: "ALHADJI",
              voters: 980
            },
            {
              station: "DJIBRINE",
              voters: 980
            },
            {
              station: "BARKA",
              voters: 980
            },
            {
              station: "LAWAN",
              voters: 980
            },
            {
              station: "IDRISSA",
              voters: 980
            },
          ],
          "POINT CONTROLE MILIMARI / A": [
            {
              station: "MILIMARI",
              voters: 239
            },
            {
              station: "NAGA'A",
              voters: 239
            },
          ],
          "POINT FORAGE WARO I ET II / A": [
            {
              station: "MARGAMA",
              voters: 139
            },
            {
              station: "MOUNGOUMASSE",
              voters: 139
            },
            {
              station: "WARO",
              voters: 139
            },
          ],
          "PUITS DEGA / A": [
            {
              station: "BOROWADJI",
              voters: 363
            },
            {
              station: "BRINGADROM",
              voters: 363
            },
            {
              station: "DEGA",
              voters: 363
            },
            {
              station: "ROUROUNDE",
              voters: 363
            },
          ],
        },
        "GOULFEY": {
          "CASE COMMUNAUTAIRE DE  AMDJAGARA-DABA / A": [
            {
              station: "AMDJAGARA-DABA",
              voters: 348
            },
            {
              station: "AMDJAGARA-GAMBO",
              voters: 348
            },
            {
              station: "DJAMOUSS",
              voters: 703
            },
            {
              station: "GRET",
              voters: 348
            },
            {
              station: "SAGOUR",
              voters: 348
            },
          ],
          "CASE COMMUNAUTAIRE DE  BINEYE-BOURKOU / A": [
            {
              station: "BINEYE-BOURKOU",
              voters: 223
            },
            {
              station: "BOUTAL-ARDEBE",
              voters: 223
            },
            {
              station: "GLEY",
              voters: 377
            },
            {
              station: "NGOULOU",
              voters: 223
            },
          ],
          "CASE COMMUNAUTAIRE DE ABOUDIBEK / A": [
            {
              station: "ABOUDIBEK",
              voters: 221
            },
            {
              station: "AMFADENA",
              voters: 440
            },
            {
              station: "BIDEK",
              voters: 221
            },
            {
              station: "BIRNIASSOU",
              voters: 440
            },
            {
              station: "DREK",
              voters: 221
            },
          ],
          "CASE COMMUNAUTAIRE DE AMBASSADNA / A": [
            {
              station: "AMBASSADNA",
              voters: 200
            },
            {
              station: "ANGOCH",
              voters: 200
            },
            {
              station: "MRENE",
              voters: 200
            },
            {
              station: "NAIRA",
              voters: 200
            },
          ],
          "CASE COMMUNAUTAIRE DE AMKEFA / A": [
            {
              station: "AMDOURMAN",
              voters: 460
            },
            {
              station: "AMKEFA",
              voters: 926
            },
            {
              station: "DJINENE",
              voters: 598
            },
            {
              station: "HILEGUIM",
              voters: 460
            },
            {
              station: "MALTAM-GOULFEY",
              voters: 1058
            },
            {
              station: "NDARABA",
              voters: 460
            },
          ],
          "CASE COMMUNAUTAIRE DE DAGOMI / A": [
            {
              station: "DAGOMI",
              voters: 293
            },
            {
              station: "DJIKEBE",
              voters: 293
            },
            {
              station: "DOROROYA",
              voters: 528
            },
            {
              station: "HILE",
              voters: 293
            },
            {
              station: "ALGADI",
              voters: 293
            },
            {
              station: "KRENACK",
              voters: 652
            },
          ],
          "CASE COMMUNAUTAIRE DE DARO / A": [
            {
              station: "DARO",
              voters: 240
            },
            {
              station: "DOUBAN",
              voters: 698
            },
            {
              station: "ARABE",
              voters: 240
            },
          ],
          "CASE COMMUNAUTAIRE DE FADJE BAKARY /  A": [
            {
              station: "BAGASSA",
              voters: 253
            },
            {
              station: "BAKARY",
              voters: 476
            },
            {
              station: "MADINA",
              voters: 253
            },
            {
              station: "MERAHA",
              voters: 656
            },
            {
              station: "NDJAMENA",
              voters: 1061
            },
            {
              station: "HERERIME",
              voters: 253
            },
          ],
          "CASE COMMUNAUTAIRE DE GOURLE / A": [
            {
              station: "AMDJANA",
              voters: 296
            },
            {
              station: "DIRBEY",
              voters: 296
            },
            {
              station: "GOURLE",
              voters: 296
            },
          ],
          "CASE COMMUNAUTAIRE DE HILE-NIMIR / A": [
            {
              station: "HILE-NIMIR",
              voters: 237
            },
            {
              station: "MOURRA",
              voters: 237
            },
          ],
          "CASE COMMUNAUTAIRE DE KAGLEY / A": [
            {
              station: "DJIBRINE",
              voters: 154
            },
            {
              station: "KAGLEY",
              voters: 154
            },
            {
              station: "MAHAYA-NEHERE",
              voters: 154
            },
          ],
          "CASE COMMUNAUTAIRE DE KOUNDOUE / A": [
            {
              station: "BOUMBOUMA",
              voters: 517
            },
            {
              station: "KOUNDOUE",
              voters: 165
            },
          ],
          "CASE COMMUNAUTAIRE DE KRENACK / A": [
            {
              station: "IMAR",
              voters: 124
            },
          ],
          "CASE COMMUNAUTAIRE DE MADBA / A": [
            {
              station: "MADBA",
              voters: 184
            },
          ],
          "CASE COMMUNAUTAIRE DE MOUR / A": [
            {
              station: "ADOUA",
              voters: 348
            },
            {
              station: "FAR",
              voters: 1244
            },
            {
              station: "DANNA",
              voters: 348
            },
            {
              station: "DJIME",
              voters: 348
            },
            {
              station: "MOUR",
              voters: 348
            },
            {
              station: "TILAM",
              voters: 348
            },
          ],
          "CASE COMMUNAUTAIRE DE NABAGAYA / A": [
            {
              station: "RIAD",
              voters: 150
            },
          ],
          "CASE COMMUNAUTAIRE DE RIDJIL HAMADI /  A": [
            {
              station: "ABOUDOUGOUT",
              voters: 274
            },
            {
              station: "FADJE",
              voters: 1277
            },
            {
              station: "SANGAYA",
              voters: 274
            },
            {
              station: "RIDJIL",
              voters: 274
            },
            {
              station: "HAMADI",
              voters: 274
            },
          ],
          "CASE COMMUNAUTAIRE DE SAGOUA / A": [
            {
              station: "SAGOUA",
              voters: 264
            },
          ],
          "CASE COMMUNAUTAIRE DE SIGUET / A": [
            {
              station: "KALAWA",
              voters: 326
            },
            {
              station: "SIGUET",
              voters: 326
            },
          ],
          "CASE COMMUNAUTAIRE DE TOUE / A": [
            {
              station: "TOUE",
              voters: 300
            },
          ],
          "CASE COMMUNAUTAIRE DE ZALAT NOUARA /  A": [
            {
              station: "ABOKI",
              voters: 335
            },
            {
              station: "MARAFAINE",
              voters: 335
            },
            {
              station: "ZALAT",
              voters: 928
            },
            {
              station: "NOUARA",
              voters: 335
            },
          ],
          "ECOLE PUBLIQUE DE AKMASSIRAK / A": [
            {
              station: "AKMASSIRAK",
              voters: 530
            },
            {
              station: "TCHOR",
              voters: 530
            },
          ],
          "ECOLE PUBLIQUE DE AMDANE / A": [
            {
              station: "ABOUDJOKOUA",
              voters: 366
            },
            {
              station: "ABOUHOUDJOUL",
              voters: 366
            },
            {
              station: "AMDANE",
              voters: 366
            },
            {
              station: "HIMEDE",
              voters: 366
            },
            {
              station: "TCHABOKA",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE DE AMFARA / A": [
            {
              station: "AMFARA",
              voters: 394
            },
            {
              station: "RIDINA",
              voters: 394
            },
          ],
          "ECOLE PUBLIQUE DE AMRICHAD / A": [
            {
              station: "AMRICHAD",
              voters: 539
            },
            {
              station: "BOURNAOUI",
              voters: 727
            },
            {
              station: "HAMBAKA",
              voters: 539
            },
            {
              station: "LABODO",
              voters: 727
            },
          ],
          "ECOLE PUBLIQUE DE ARDEBE / A": [
            {
              station: "ARDEBE",
              voters: 511
            },
            {
              station: "DOUNGOURA",
              voters: 511
            },
            {
              station: "GOULFEY-BANANA",
              voters: 511
            },
          ],
          "ECOLE PUBLIQUE DE BEDAT / A": [
            {
              station: "BEDAT",
              voters: 403
            },
            {
              station: "DAGME",
              voters: 403
            },
            {
              station: "FADJE-SALE",
              voters: 403
            },
          ],
          "ECOLE PUBLIQUE DE BOUTAL-HADOUM / A": [
            {
              station: "BOUTAL-HADOUM",
              voters: 570
            },
            {
              station: "ADJI",
              voters: 570
            },
            {
              station: "TAMALA-BEDA",
              voters: 570
            },
          ],
          "ECOLE PUBLIQUE DE DAKOTCHI / A": [
            {
              station: "DAKOTCHI",
              voters: 235
            },
            {
              station: "ELI",
              voters: 235
            },
          ],
          "ECOLE PUBLIQUE DE DJAGALAT / A": [
            {
              station: "DJAGALAT",
              voters: 427
            },
          ],
          "ECOLE PUBLIQUE DE DOUGUIA / A": [
            {
              station: "KOTOKO",
              voters: 458
            },
            {
              station: "DOUGUIA",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE DROH / A": [
            {
              station: "BOUDOU-BOUDOU",
              voters: 363
            },
            {
              station: "DROH",
              voters: 363
            },
          ],
          "ECOLE PUBLIQUE DE GOULFEY-GANA / A": [
            {
              station: "AKI",
              voters: 600
            },
            {
              station: "ALARADA",
              voters: 600
            },
            {
              station: "GOULFEY-GANA",
              voters: 600
            },
            {
              station: "MAFANG",
              voters: 600
            },
          ],
          "ECOLE PUBLIQUE DE GUEWALGA / A": [
            {
              station: "GUEWALGA",
              voters: 621
            },
          ],
          "ECOLE PUBLIQUE DE HABOBA / A": [
            {
              station: "HABOBA",
              voters: 231
            },
            {
              station: "TOM",
              voters: 355
            },
          ],
          "ECOLE PUBLIQUE DE HILELE / A": [
            {
              station: "HILELE",
              voters: 597
            },
          ],
          "ECOLE PUBLIQUE DE LIOUNDE / A": [
            {
              station: "LIOUNDE",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE MABRAKA / A": [
            {
              station: "DAMBE",
              voters: 191
            },
            {
              station: "MABRAKA",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE DE MAHAYA MADALALA / A": [
            {
              station: "AMKOUBOULA",
              voters: 293
            },
            {
              station: "MAHAYA",
              voters: 586
            },
            {
              station: "KOUNDJO",
              voters: 293
            },
            {
              station: "SAHADINE",
              voters: 293
            },
            {
              station: "MAHAYA-KOTOKO",
              voters: 293
            },
            {
              station: "MAHAYA-MADALALA",
              voters: 293
            },
            {
              station: "NGUETOYA",
              voters: 987
            },
            {
              station: "BRAHIM",
              voters: 293
            },
          ],
          "ECOLE PUBLIQUE DE MALLA / A": [
            {
              station: "FITCHOYA",
              voters: 465
            },
          ],
          "ECOLE PUBLIQUE DE MARA / A": [
            {
              station: "MARA",
              voters: 762
            },
          ],
          "ECOLE PUBLIQUE DE MITCH-MITCH / A": [
            {
              station: "FORFOYA",
              voters: 368
            },
            {
              station: "MITCH-MITCH",
              voters: 368
            },
            {
              station: "SOUKARE",
              voters: 368
            },
          ],
          "ECOLE PUBLIQUE DE MOLODIA / A": [
            {
              station: "DILEIB",
              voters: 913
            },
            {
              station: "BIRKE",
              voters: 439
            },
            {
              station: "MOLODIA",
              voters: 439
            },
          ],
          "ECOLE PUBLIQUE DE MOUGALAM / A": [
            {
              station: "MOUGALAM",
              voters: 392
            },
          ],
          "ECOLE PUBLIQUE DE MOULOUANG / A": [
            {
              station: "MOULOUANG",
              voters: 465
            },
          ],
          "ECOLE PUBLIQUE DE NADJI / A": [
            {
              station: "DAGDIA",
              voters: 681
            },
            {
              station: "EL-GOUMRI",
              voters: 531
            },
            {
              station: "FADJAWA",
              voters: 531
            },
            {
              station: "HOUMAR",
              voters: 681
            },
            {
              station: "ABIAT",
              voters: 681
            },
            {
              station: "IRAK",
              voters: 531
            },
            {
              station: "NABAGAYA",
              voters: 681
            },
            {
              station: "NADJI",
              voters: 531
            },
            {
              station: "TCHADO",
              voters: 531
            },
            {
              station: "WAK",
              voters: 681
            },
          ],
          "ECOLE PUBLIQUE DE NGRANG / A": [
            {
              station: "NGRANG",
              voters: 359
            },
          ],
          "ECOLE PUBLIQUE DE NIGUE / A": [
            {
              station: "HERAZA",
              voters: 221
            },
            {
              station: "KINEBOYA",
              voters: 221
            },
            {
              station: "MAHADJIRI",
              voters: 221
            },
            {
              station: "NIGUE",
              voters: 221
            },
          ],
          "ECOLE PUBLIQUE DE NIMIA / A": [
            {
              station: "DAOUGAL",
              voters: 343
            },
            {
              station: "KARNOK",
              voters: 343
            },
            {
              station: "HATRON",
              voters: 343
            },
            {
              station: "NIMIA",
              voters: 343
            },
            {
              station: "TOULOUS",
              voters: 343
            },
            {
              station: "WALAGA",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE DE SAO / A": [
            {
              station: "SAO",
              voters: 285
            },
          ],
          "ECOLE PUBLIQUE DE TAKOULWEBE / A": [
            {
              station: "ABOUNDROUA",
              voters: 588
            },
            {
              station: "GLEIGO",
              voters: 588
            },
            {
              station: "MOUGDA",
              voters: 588
            },
            {
              station: "TAKOULWEBE",
              voters: 588
            },
          ],
          "ECOLE PUBLIQUE DE TANNE AMADOUGCHI /  A": [
            {
              station: "MALLA",
              voters: 915
            },
            {
              station: "TANNE",
              voters: 900
            },
            {
              station: "AMADOUGCHI",
              voters: 450
            },
          ],
          "ECOLE PUBLIQUE DE TOUYOUS / A": [
            {
              station: "DOUGOUMAYA",
              voters: 155
            },
            {
              station: "EL-HILTRE",
              voters: 155
            },
            {
              station: "TOUYOUS",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE DE ZALAT SALAMAT / A": [
            {
              station: "DOUE",
              voters: 686
            },
            {
              station: "KIGNAGNA",
              voters: 358
            },
            {
              station: "MISTCHIKA",
              voters: 358
            },
            {
              station: "MALIE",
              voters: 358
            },
            {
              station: "SOULOU",
              voters: 548
            },
            {
              station: "SALAMAT",
              voters: 358
            },
          ],
          "ESPLANADE MOSQUEE DE GUEMALGOUE / A": [
            {
              station: "GUEMALGOUE",
              voters: 321
            },
          ],
          "ESPLANADE MOSQUEE DE MAGALOUE / A": [
            {
              station: "MAGALOUE",
              voters: 271
            },
          ],
          "ESPLANADE MOSQUEE DE WAKALTOU / A": [
            {
              station: "ALGOSS",
              voters: 350
            },
            {
              station: "CHOLOBA",
              voters: 1840
            },
            {
              station: "DOURBEY",
              voters: 350
            },
            {
              station: "KRENAK",
              voters: 829
            },
            {
              station: "FAKARA",
              voters: 350
            },
            {
              station: "WAKALTOU",
              voters: 350
            },
          ],
          "FORAGE DE GUERANDOUMA / A": [
            {
              station: "GUERANDOUMA",
              voters: 445
            },
          ],
          "GARE ROUTIERE DE DJAGARA / A": [
            {
              station: "DJAGARA",
              voters: 392
            },
          ],
          "TRIBUNAL DU CENTRE-VILLE / A": [
            {
              station: "SARE",
              voters: 352
            },
            {
              station: "SULTAN",
              voters: 352
            },
          ],
        },
        "HILE-ALIFA": {
          "ECOLE PUBLIQUE DE ABASSOUNI I / A": [
            {
              station: "ABASSOUNI",
              voters: 999
            },
          ],
          "ECOLE PUBLIQUE DE BARGARAM / A": [
            {
              station: "BARGARAM",
              voters: 1027
            },
            {
              station: "CHAHAK",
              voters: 1027
            },
          ],
          "ECOLE PUBLIQUE DE DJIBOUNIBA / A": [
            {
              station: "DJIBOUNIBA",
              voters: 130
            },
            {
              station: "TOUBOUNKARE",
              voters: 130
            },
          ],
          "ECOLE PUBLIQUE DE DOUGOUMSILIO / A": [
            {
              station: "DOUGOUMSILIO",
              voters: 365
            },
            {
              station: "KAFORAM",
              voters: 365
            },
            {
              station: "KASSALARI",
              voters: 365
            },
            {
              station: "SILIO",
              voters: 365
            },
          ],
          "ECOLE PUBLIQUE DE FADJA / A": [
            {
              station: "DOLE-BADA",
              voters: 299
            },
            {
              station: "FADJA",
              voters: 299
            },
          ],
          "ECOLE PUBLIQUE DE GORETAL-GOUTOUNE /  A": [
            {
              station: "GORETAL-GOUTOUNE",
              voters: 517
            },
          ],
          "ECOLE PUBLIQUE DE HILE-ALIFA / A": [
            {
              station: "FAMARE",
              voters: 926
            },
            {
              station: "HILE-ALIFA",
              voters: 1459
            },
          ],
          "ECOLE PUBLIQUE DE HILE-TANDALGUI / A": [
            {
              station: "DOUCHE",
              voters: 224
            },
            {
              station: "HILE-TANDALGUI",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE KAMOUNA / A": [
            {
              station: "KAMOUNA",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE DE MAFOULSO / A": [
            {
              station: "MAFOULSO",
              voters: 360
            },
            {
              station: "MAITO",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DE MOURDAS / A": [
            {
              station: "MOURDAS",
              voters: 159
            },
          ],
          "ECOLE PUBLIQUE DE TCHIKA / A": [
            {
              station: "HILE-KATCHOU",
              voters: 956
            },
            {
              station: "TCHIKA",
              voters: 956
            },
          ],
          "ECOLE PUBLIQUE DE TERBOU / A": [
            {
              station: "TERBOU",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE DE WADAK / A": [
            {
              station: "DOLE-MILIMI",
              voters: 425
            },
            {
              station: "WADAK",
              voters: 425
            },
          ],
          "ESPLANADE CHEFFERIE DE ABASSOUNI III / A": [
            {
              station: "III",
              voters: 105
            },
          ],
          "ESPLANADE CHEFFERIE DE GONONI / A": [
            {
              station: "GONONI",
              voters: 116
            },
          ],
        },
        "KOUSSERI": {
          "COMMUNE DE KOUSSERI / A": [
            {
              station: "KOUSSERI",
              voters: 1098
            },
            {
              station: "WALY",
              voters: 1098
            },
          ],
          "COMPAGNIE GARAGE ADMINISTRATIF C / A": [
            {
              station: "GENDARMERIE",
              voters: 463
            },
          ],
          "COOPERATIVE GARAGE ADMINISTRATIF / A": [
            {
              station: "BATAILLON",
              voters: 897
            },
            {
              station: "COMPAGNIE",
              voters: 897
            },
            {
              station: "POLICE",
              voters: 897
            },
          ],
          "ECOLE FRANCO-ARABE / A": [
            {
              station: "PRISON",
              voters: 51
            },
          ],
          "ECOLE MATERNELLE DE GAROUA / A": [
            {
              station: "GAROUA",
              voters: 1723
            },
          ],
          "ECOLE PUBLIQUE DE ADJAINE / A": [
            {
              station: "ADJAINE",
              voters: 494
            },
            {
              station: "NIGUE",
              voters: 352
            },
            {
              station: "SEHEBA",
              voters: 352
            },
            {
              station: "TAMRAYA",
              voters: 352
            },
          ],
          "ECOLE PUBLIQUE DE ALAYA / A": [
            {
              station: "ALAYA",
              voters: 1426
            },
          ],
          "ECOLE PUBLIQUE DE ARDEBE-NGABDJAM / A": [
            {
              station: "ARDEBE",
              voters: 848
            },
            {
              station: "NGABDJAM",
              voters: 240
            },
            {
              station: "GABAG",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE BABOU / A": [
            {
              station: "BABOU",
              voters: 1343
            },
          ],
          "ECOLE PUBLIQUE DE KAWADJI I / A": [
            {
              station: "KAWADJI",
              voters: 574
            },
            {
              station: "NDOU",
              voters: 574
            },
            {
              station: "WADAN",
              voters: 574
            },
          ],
          "ECOLE PUBLIQUE DE LACKA / A": [
            {
              station: "LACKA",
              voters: 1527
            },
          ],
          "ECOLE PUBLIQUE DE LACTA / A": [
            {
              station: "LACTA",
              voters: 243
            },
          ],
          "ECOLE PUBLIQUE DE MADAGASCAR / A": [
            {
              station: "GORE",
              voters: 2216
            },
            {
              station: "MADAGASCAR",
              voters: 3432
            },
          ],
          "ECOLE PUBLIQUE DE MALAK / A": [
            {
              station: "MALAK",
              voters: 278
            },
          ],
          "ECOLE PUBLIQUE DE MASSIL-AL KANAM / A": [
            {
              station: "MASSIL-AL-KANAM",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DE MAWAK / A": [
            {
              station: "MAWAK",
              voters: 2910
            },
          ],
          "ECOLE PUBLIQUE DE MICHEDIRE / A": [
            {
              station: "MICHEDIRE",
              voters: 2653
            },
          ],
          "ECOLE PUBLIQUE DE NDJAGARE / A": [
            {
              station: "ABOUZIREGA",
              voters: 1210
            },
            {
              station: "ARKISS",
              voters: 1210
            },
            {
              station: "FACHAR",
              voters: 1210
            },
            {
              station: "KOUMBOULA",
              voters: 1210
            },
            {
              station: "NDJAGARE",
              voters: 1210
            },
            {
              station: "NGAMADJA",
              voters: 1210
            },
            {
              station: "WADJETOUNA",
              voters: 1210
            },
          ],
          "ECOLE PUBLIQUE DE NDJAMENA / A": [
            {
              station: "NDJAMENA",
              voters: 2096
            },
          ],
          "ECOLE PUBLIQUE DE PAR-PAR / A": [
            {
              station: "PAR-PAR",
              voters: 1207
            },
          ],
          "ECOLE PUBLIQUE DE WOMDANNA / A": [
            {
              station: "HILE",
              voters: 1895
            },
            {
              station: "HAOUSSA",
              voters: 1895
            },
            {
              station: "WOMDANNA",
              voters: 1895
            },
          ],
          "ENIEG DE KOUSSERI / A": [
            {
              station: "MADANA",
              voters: 926
            },
          ],
          "ESPLANADE CHEFFERIE DE  GUERGUE-RABAH I / A": [
            {
              station: "GUERGUE-RABAH",
              voters: 1301
            },
          ],
          "ESPLANADE CHEFFERIE DE ADJAINE II / A": [
            {
              station: "NAGA",
              voters: 142
            },
          ],
          "ESPLANADE CHEFFERIE DE IBOU / A": [
            {
              station: "IBOU",
              voters: 1038
            },
          ],
          "ESPLANADE CHEFFERIE DE KODOGO I / A": [
            {
              station: "KODOGO",
              voters: 5500
            },
          ],
          "ESPLANADE CHEFFERIE DE KODOGO III / A": [
            {
              station: "III",
              voters: 2589
            },
          ],
          "ESPLANADE CHEFFERIE DE KOULKOUADA I /  A": [
            {
              station: "KOULKOUADA",
              voters: 2916
            },
          ],
          "ESPLANADE CHEFFERIE DE MASSAKI / A": [
            {
              station: "MASSAKI",
              voters: 1352
            },
            {
              station: "RIGGIL",
              voters: 1352
            },
            {
              station: "KOTOKO",
              voters: 676
            },
            {
              station: "MOUSGOUM",
              voters: 676
            },
          ],
          "ESPLANADE CHEFFERIE DE MPAGUY / A": [
            {
              station: "MPAGUY",
              voters: 845
            },
          ],
          "ESPLANADE CHEFFERIE DE NGALLO I / A": [
            {
              station: "NGALLO",
              voters: 1438
            },
          ],
          "ESPLANADE CHEFFERIE DE NGALLO III / A": [
            {
              station: "NGALO",
              voters: 252
            },
          ],
          "ESPLANADE CHEFFERIE DE NZAKALO I / A": [
            {
              station: "NZAKALO",
              voters: 777
            },
          ],
          "ESPLANADE CHEFFERIE DE SOKOTO I / A": [
            {
              station: "SOKOTO",
              voters: 1371
            },
          ],
          "LYCEE BILINGUE DE KOUSSERI / A": [
            {
              station: "HARAZAYA",
              voters: 1069
            },
          ],
          "LYCEE TECHNIQUE DE KOUSSERI / A": [
            {
              station: "VILLE",
              voters: 608
            },
          ],
          "MARCHE DE DJAMBAL-BAR / A": [
            {
              station: "DJAMBAL-BAR",
              voters: 1878
            },
            {
              station: "KROUANG",
              voters: 2539
            },
            {
              station: "MAINANI",
              voters: 1878
            },
            {
              station: "MAINARI",
              voters: 1878
            },
            {
              station: "NGARGOUSO",
              voters: 1878
            },
          ],
          "PTT / A": [
            {
              station: "KOULOUK",
              voters: 459
            },
          ],
        },
        "LOGONE-BIRNI": {
          "BORNE FONTAINE DE MARAFINE / A": [
            {
              station: "MARAFINE",
              voters: 103
            },
          ],
          "BORNE FONTAINE DE MOULADOCK / A": [
            {
              station: "ABOUKANO",
              voters: 361
            },
            {
              station: "BAMCHARAFA",
              voters: 361
            },
            {
              station: "KALA",
              voters: 2233
            },
            {
              station: "GANA",
              voters: 1143
            },
            {
              station: "KARENA",
              voters: 361
            },
            {
              station: "KAZAL",
              voters: 361
            },
            {
              station: "MACHOUFA",
              voters: 361
            },
            {
              station: "MAHANA",
              voters: 793
            },
            {
              station: "(CANTON",
              voters: 2431
            },
            {
              station: "KAFRA)",
              voters: 1389
            },
            {
              station: "MOULADOCK",
              voters: 361
            },
            {
              station: "MOUR",
              voters: 361
            },
            {
              station: "SERO",
              voters: 361
            },
            {
              station: "TRAYA",
              voters: 361
            },
            {
              station: "ZAHAWA",
              voters: 361
            },
          ],
          "BORNE FONTAINE DE RIDINA / A": [
            {
              station: "MADINA",
              voters: 449
            },
            {
              station: "MARTE",
              voters: 449
            },
            {
              station: "MESKETE",
              voters: 449
            },
            {
              station: "RIDINA",
              voters: 449
            },
            {
              station: "MASGA",
              voters: 449
            },
          ],
          "BORNE FONTAINE DE SORORO / A": [
            {
              station: "DAIMA",
              voters: 196
            },
            {
              station: "KOULKOULE",
              voters: 196
            },
            {
              station: "SORORO",
              voters: 196
            },
          ],
          "BORNE FONTAINE DE ZIMADO IV / A": [
            {
              station: "DOGDORI",
              voters: 244
            },
            {
              station: "ZIMADO",
              voters: 1371
            },
          ],
          "ECOLE MATERNELLE DE LOGONE-BIRNI / A": [
            {
              station: "MAMTE",
              voters: 607
            },
            {
              station: "TIKINI",
              voters: 607
            },
            {
              station: "VARAGA",
              voters: 607
            },
          ],
          "ECOLE PUBLIQUE DE ABOU-ADAMA / A": [
            {
              station: "ABOU-ADAMA",
              voters: 140
            },
            {
              station: "KELLOU",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE DE AKOUMARI / A": [
            {
              station: "AKOUMARI-DARSALA",
              voters: 226
            },
            {
              station: "GOUDJARI",
              voters: 226
            },
            {
              station: "NDAGA",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE BANGALIA / A": [
            {
              station: "BANGALIA",
              voters: 67
            },
          ],
          "ECOLE PUBLIQUE DE BOURGOUMA BORNO /  A": [
            {
              station: "BOURGOUMA",
              voters: 758
            },
            {
              station: "BORNO",
              voters: 786
            },
          ],
          "ECOLE PUBLIQUE DE CHOUARAM / A": [
            {
              station: "CHOUARAM",
              voters: 257
            },
            {
              station: "MAGOURDE",
              voters: 464
            },
            {
              station: "NDOM",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE DABANGA / A": [
            {
              station: "BARDE",
              voters: 611
            },
            {
              station: "FAIDE",
              voters: 611
            },
          ],
          "ECOLE PUBLIQUE DE DILGA ELI / A": [
            {
              station: "BARAH",
              voters: 2448
            },
            {
              station: "ADOUM",
              voters: 528
            },
            {
              station: "AHINANKAI",
              voters: 528
            },
            {
              station: "MABARAM",
              voters: 528
            },
            {
              station: "DAMROU",
              voters: 528
            },
            {
              station: "DILGA",
              voters: 1848
            },
            {
              station: "ELI",
              voters: 528
            },
            {
              station: "HEMDANE",
              voters: 528
            },
            {
              station: "DOLE",
              voters: 528
            },
          ],
          "ECOLE PUBLIQUE DE DJIDAT / A": [
            {
              station: "DJIDAT",
              voters: 272
            },
          ],
          "ECOLE PUBLIQUE DE EL-BIRKE / A": [
            {
              station: "ABOUDROUA",
              voters: 414
            },
            {
              station: "AMBILA",
              voters: 414
            },
            {
              station: "BAWARA",
              voters: 414
            },
            {
              station: "EL-BIRKE",
              voters: 414
            },
            {
              station: "SEHEBA",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE DE GAMBAROU  MOUSGOUM / A": [
            {
              station: "GAMBAROU",
              voters: 610
            },
            {
              station: "BORNOU",
              voters: 305
            },
            {
              station: "OULI",
              voters: 2455
            },
          ],
          "ECOLE PUBLIQUE DE GOIZINAK / A": [
            {
              station: "GOIZINAK",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE GOUDOUGOUNI / A": [
            {
              station: "GOUDOUGOUNI",
              voters: 234
            },
            {
              station: "ZABANG",
              voters: 117
            },
          ],
          "ECOLE PUBLIQUE DE HINALE / A": [
            {
              station: "BADOUA",
              voters: 485
            },
            {
              station: "BOUACH",
              voters: 485
            },
            {
              station: "HINALE",
              voters: 485
            },
            {
              station: "MANECH",
              voters: 485
            },
            {
              station: "MATKEU",
              voters: 485
            },
            {
              station: "MOUKAK",
              voters: 485
            },
            {
              station: "TINERI",
              voters: 485
            },
          ],
          "ECOLE PUBLIQUE DE HONKOL / A": [
            {
              station: "BLAKORO",
              voters: 312
            },
            {
              station: "HONKOL",
              voters: 312
            },
          ],
          "ECOLE PUBLIQUE DE HOULOUF / A": [
            {
              station: "HOULOUF",
              voters: 504
            },
          ],
          "ECOLE PUBLIQUE DE KABE / A": [
            {
              station: "BEKORO",
              voters: 469
            },
            {
              station: "KABE",
              voters: 1876
            },
            {
              station: "KILAM",
              voters: 469
            },
            {
              station: "KODOGO",
              voters: 469
            },
            {
              station: "MALO",
              voters: 469
            },
          ],
          "ECOLE PUBLIQUE DE KABELA / A": [
            {
              station: "AMALGOCH",
              voters: 338
            },
            {
              station: "KABELA",
              voters: 338
            },
            {
              station: "MARMADODJI",
              voters: 338
            },
            {
              station: "NGOUDOUM",
              voters: 338
            },
          ],
          "ECOLE PUBLIQUE DE KABO / A": [
            {
              station: "SALE",
              voters: 782
            },
            {
              station: "DIBA",
              voters: 782
            },
            {
              station: "DJILBE",
              voters: 782
            },
            {
              station: "DJOHANE",
              voters: 782
            },
            {
              station: "GOULMA",
              voters: 782
            },
            {
              station: "GUECH",
              voters: 948
            },
            {
              station: "ALMEDEK",
              voters: 782
            },
            {
              station: "GUIGOL",
              voters: 782
            },
            {
              station: "WADI",
              voters: 782
            },
            {
              station: "KABO",
              voters: 782
            },
            {
              station: "KRENAK",
              voters: 782
            },
            {
              station: "NGOI",
              voters: 2346
            },
            {
              station: "BALEMA",
              voters: 782
            },
            {
              station: "DJAMOUS",
              voters: 782
            },
          ],
          "ECOLE PUBLIQUE DE KALA KAFRA / A": [
            {
              station: "KAFRA",
              voters: 483
            },
          ],
          "ECOLE PUBLIQUE DE KALKOUSSAM / A": [
            {
              station: "KALKOUSSAM",
              voters: 535
            },
            {
              station: "MBAVA",
              voters: 535
            },
            {
              station: "ZARAF",
              voters: 535
            },
          ],
          "ECOLE PUBLIQUE DE KARAM / A": [
            {
              station: "KARAM",
              voters: 380
            },
          ],
          "ECOLE PUBLIQUE DE MAHAM / A": [
            {
              station: "HOURMA",
              voters: 645
            },
            {
              station: "MAHAM",
              voters: 645
            },
          ],
          "ECOLE PUBLIQUE DE MAHANA / A": [
            {
              station: "ALAYA",
              voters: 233
            },
            {
              station: "EL-BIRKE)",
              voters: 760
            },
          ],
          "ECOLE PUBLIQUE DE MANAWADJI / A": [
            {
              station: "AMRE",
              voters: 250
            },
            {
              station: "DABANGA",
              voters: 1125
            },
            {
              station: "ABANI",
              voters: 250
            },
            {
              station: "KARE",
              voters: 750
            },
            {
              station: "ABAKAR",
              voters: 250
            },
            {
              station: "DELEBE",
              voters: 680
            },
            {
              station: "GARSALA",
              voters: 250
            },
            {
              station: "MANAMADJI",
              voters: 250
            },
          ],
          "ECOLE PUBLIQUE DE MBOUDOUFKA / A": [
            {
              station: "AFTA",
              voters: 924
            },
            {
              station: "ARABE",
              voters: 1959
            },
            {
              station: "MOUSGOUM",
              voters: 5401
            },
            {
              station: "BAMZALA",
              voters: 924
            },
            {
              station: "MOKORI",
              voters: 462
            },
            {
              station: "NGUINI",
              voters: 462
            },
            {
              station: "GADOUDJI",
              voters: 462
            },
            {
              station: "GASSAMA",
              voters: 581
            },
            {
              station: "KUIMA",
              voters: 462
            },
            {
              station: "MBEHCHE",
              voters: 462
            },
            {
              station: "MBOUDOUFKA",
              voters: 462
            },
            {
              station: "SALANE",
              voters: 462
            },
          ],
          "ECOLE PUBLIQUE DE MOUDIA / A": [
            {
              station: "MOUDIA",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE DE NDJAMENA NOUVEAU /  A": [
            {
              station: "DAMBE",
              voters: 479
            },
            {
              station: "HILE",
              voters: 207
            },
            {
              station: "WAYA",
              voters: 207
            },
            {
              station: "NOUVEAU",
              voters: 207
            },
          ],
          "ECOLE PUBLIQUE DE NGAWAMA BORNO / A": [
            {
              station: "NGAWAMA",
              voters: 752
            },
          ],
          "ECOLE PUBLIQUE DE NKIDAM / A": [
            {
              station: "LAHAOULA",
              voters: 830
            },
            {
              station: "NKIDAM",
              voters: 830
            },
          ],
          "ECOLE PUBLIQUE DE OULOUMSA / A": [
            {
              station: "MAIRAM",
              voters: 365
            },
            {
              station: "GALA",
              voters: 365
            },
            {
              station: "NDEDOUM",
              voters: 365
            },
            {
              station: "OULOUMSA",
              voters: 730
            },
            {
              station: "MASSA",
              voters: 365
            },
          ],
          "ECOLE PUBLIQUE DE TILDE / A": [
            {
              station: "DOCKI",
              voters: 446
            },
            {
              station: "TILDE",
              voters: 446
            },
          ],
          "ECOLE PUBLIQUE DE ZIMADO / A": [
            {
              station: "ECOLE",
              voters: 453
            },
          ],
          "EGLISE DE DAFFA / A": [
            {
              station: "DAFFA",
              voters: 231
            },
          ],
          "ESPL. MOSQUEE DE CHAFFO HIDJELIDJE / A": [
            {
              station: "CHAFFO",
              voters: 911
            },
            {
              station: "HIDJELIDJE",
              voters: 911
            },
          ],
          "ESPLANADE MADAF BLAMA / A": [
            {
              station: "BOURBETE",
              voters: 274
            },
            {
              station: "GALESS",
              voters: 274
            },
            {
              station: "MADAF",
              voters: 274
            },
          ],
          "ESPLANADE MOSQUEE DE BAGUE ARABE / A": [
            {
              station: "BAGUE",
              voters: 721
            },
            {
              station: "MICHAK",
              voters: 186
            },
            {
              station: "NTAGA",
              voters: 186
            },
            {
              station: "WALDEYE",
              voters: 186
            },
          ],
          "ESPLANADE MOSQUEE DE BLABLINE / A": [
            {
              station: "BLABLINE",
              voters: 218
            },
            {
              station: "BREMBRI",
              voters: 218
            },
            {
              station: "KARAGAMA",
              voters: 218
            },
            {
              station: "KOULARKE",
              voters: 218
            },
          ],
          "ESPLANADE MOSQUEE DE GOUESS / A": [
            {
              station: "GOUESS",
              voters: 67
            },
          ],
          "ESPLANADE MOSQUEE DE GUECH / A": [
            {
              station: "DOUGOUNBRA",
              voters: 166
            },
            {
              station: "KAFI",
              voters: 166
            },
            {
              station: "SARA",
              voters: 614
            },
          ],
          "ESPLANADE MOSQUEE DE KALGOULOU / A": [
            {
              station: "ADDA",
              voters: 199
            },
            {
              station: "KALGOULOU",
              voters: 199
            },
            {
              station: "MARDIA",
              voters: 199
            },
          ],
          "ESPLANADE MOSQUEE DE MAGO / A": [
            {
              station: "MAGO",
              voters: 481
            },
            {
              station: "NGAOUPATA",
              voters: 481
            },
          ],
          "ESPLANADE MOSQUEE DE MANDABE / A": [
            {
              station: "MANDABE",
              voters: 96
            },
            {
              station: "ZILWE",
              voters: 96
            },
          ],
          "ESPLANADE MOSQUEE DE MBANA MAGA'A /  A": [
            {
              station: "GAOUI",
              voters: 481
            },
            {
              station: "MBANA",
              voters: 1088
            },
            {
              station: "MAGA'A",
              voters: 481
            },
          ],
          "ESPLANADE MOSQUEE DE MILDI / A": [
            {
              station: "AMAMIREF",
              voters: 527
            },
            {
              station: "DANGOURCHOUM",
              voters: 527
            },
            {
              station: "DJOKANE",
              voters: 527
            },
            {
              station: "HERAZ",
              voters: 1739
            },
            {
              station: "HINDOUK",
              voters: 527
            },
            {
              station: "MICHISKA",
              voters: 1054
            },
            {
              station: "MILDI",
              voters: 527
            },
            {
              station: "NGOUMATI",
              voters: 527
            },
            {
              station: "SABLA",
              voters: 1425
            },
            {
              station: "ARDEBE",
              voters: 773
            },
            {
              station: "SADICK",
              voters: 527
            },
          ],
          "ESPLANADE MOSQUEE DE MLARI / A": [
            {
              station: "GLEM",
              voters: 309
            },
            {
              station: "MLARI",
              voters: 309
            },
            {
              station: "SAHABA",
              voters: 309
            },
            {
              station: "SKILIO",
              voters: 309
            },
          ],
          "ESPLANADE MOSQUEE DE MOULOUHIE / A": [
            {
              station: "LABADO",
              voters: 475
            },
            {
              station: "MOULOUHIE",
              voters: 246
            },
            {
              station: "NGOUT",
              voters: 528
            },
          ],
          "ESPLANADE MOSQUEE DE MOUNKEU / A": [
            {
              station: "ALARKE",
              voters: 136
            },
            {
              station: "HEROUA",
              voters: 594
            },
            {
              station: "BACTABA",
              voters: 594
            },
            {
              station: "MOUNKEU",
              voters: 136
            },
            {
              station: "POURKLIWA",
              voters: 365
            },
          ],
          "ESPLANADE MOSQUEE DE MRE KOTOKO / A": [
            {
              station: "GOMA",
              voters: 264
            },
            {
              station: "MAHE",
              voters: 264
            },
            {
              station: "MANAWADJI",
              voters: 264
            },
            {
              station: "MRE",
              voters: 792
            },
            {
              station: "ABDRAMANE",
              voters: 264
            },
            {
              station: "KOTOKO",
              voters: 264
            },
            {
              station: "MAROUF",
              voters: 264
            },
          ],
          "ESPLANADE MOSQUEE DE NGOLOKE / A": [
            {
              station: "KAMSOULOUM",
              voters: 336
            },
            {
              station: "MAROUFA",
              voters: 336
            },
            {
              station: "NDJAMENA",
              voters: 1603
            },
            {
              station: "ISSA",
              voters: 336
            },
            {
              station: "NGOLOKE",
              voters: 336
            },
            {
              station: "NGUEDAM-RIDINA",
              voters: 336
            },
            {
              station: "ZAOUYA",
              voters: 336
            },
          ],
          "ESPLANADE MOSQUEE DE OULI GOULMADE /  A": [
            {
              station: "GOULMADE",
              voters: 430
            },
            {
              station: "MAGNOKO",
              voters: 430
            },
            {
              station: "MAM",
              voters: 430
            },
          ],
          "ESPLANADE MOSQUEE DE SABAKALE BICHI /  A": [
            {
              station: "-BIRKE)",
              voters: 282
            },
            {
              station: "OUZOURGOUBOUA",
              voters: 564
            },
            {
              station: "SABAKALE",
              voters: 846
            },
            {
              station: "BICHI",
              voters: 282
            },
            {
              station: "IREDIBE",
              voters: 282
            },
          ],
          "ESPLANADE MOSQUEE DE SHI / A": [
            {
              station: "GLOU",
              voters: 143
            },
            {
              station: "ABADAM",
              voters: 143
            },
            {
              station: "NDAGAYA",
              voters: 143
            },
            {
              station: "SHI",
              voters: 143
            },
          ],
          "ESPLANADE MOSQUEE DE ZIMADO III / A": [
            {
              station: "III",
              voters: 195
            },
          ],
          "ESPLANADE SAGOULOU BLAMA / A": [
            {
              station: "BERE",
              voters: 138
            },
            {
              station: "SAGOULOU",
              voters: 138
            },
          ],
          "MAGASIN DU PETIT MARCHE DE LOGONE  BIRNI / A": [
            {
              station: "GOUAMA",
              voters: 498
            },
            {
              station: "SAGOULA",
              voters: 498
            },
            {
              station: "SKOUARA",
              voters: 498
            },
          ],
          "MARCHE DE OUNANGARE / A": [
            {
              station: "BLAGANA",
              voters: 438
            },
            {
              station: "GOH",
              voters: 219
            },
            {
              station: "KASSAKIA",
              voters: 219
            },
            {
              station: "OUNANGARE",
              voters: 219
            },
          ],
          "MARCHE DE ZIMADO / A": [
            {
              station: "MARCHE",
              voters: 479
            },
          ],
        },
        "MAKARI": {
          "ANCIENNE ECOLE DE AFADE / A": [
            {
              station: "FITINE",
              voters: 1252
            },
            {
              station: "SAO",
              voters: 2504
            },
          ],
          "ANTENNE ELECAM DE MAKARI / A": [
            {
              station: "GENDARMERIE",
              voters: 1126
            },
            {
              station: "POLICE",
              voters: 1126
            },
          ],
          "ECOLE PUBLIQUE D'ABOUDANGALA / A": [
            {
              station: "ABOUDANGALA",
              voters: 268
            },
            {
              station: "FADJE",
              voters: 3840
            },
            {
              station: "KACHALLA",
              voters: 390
            },
            {
              station: "NGOUROYA",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE D'ABOUKOUS-KA WAIME /  A": [
            {
              station: "DIO",
              voters: 292
            },
            {
              station: "PARIS",
              voters: 900
            },
          ],
          "ECOLE PUBLIQUE D'AMCHILGA / A": [
            {
              station: "AMCHILGA",
              voters: 554
            },
            {
              station: "MANDA",
              voters: 792
            },
            {
              station: "NDARKA",
              voters: 554
            },
          ],
          "ECOLE PUBLIQUE D'AMDA GALGUI / A": [
            {
              station: "AMDA",
              voters: 287
            },
            {
              station: "GALGUI",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE D'AMKOUNDRO / A": [
            {
              station: "AMKOUNDRO",
              voters: 150
            },
            {
              station: "KRONOYA",
              voters: 150
            },
          ],
          "ECOLE PUBLIQUE D'AMSABANG / A": [
            {
              station: "AMSABANG",
              voters: 386
            },
            {
              station: "GLAO",
              voters: 862
            },
            {
              station: "MBEDAT",
              voters: 386
            },
          ],
          "ECOLE PUBLIQUE D'OULAMSO / A": [
            {
              station: "OULAMSO",
              voters: 357
            },
          ],
          "ECOLE PUBLIQUE DE ALAK / A": [
            {
              station: "ALAK",
              voters: 340
            },
            {
              station: "ARDEBE",
              voters: 461
            },
            {
              station: "SAID",
              voters: 340
            },
          ],
          "ECOLE PUBLIQUE DE ATRI FALATA / A": [
            {
              station: "ATRI",
              voters: 258
            },
            {
              station: "ATTRI",
              voters: 258
            },
            {
              station: "KARTCHA",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE BIAMO / A": [
            {
              station: "BIAMO",
              voters: 3248
            },
            {
              station: "GEUISSIMO",
              voters: 1624
            },
            {
              station: "KADOUGO",
              voters: 1624
            },
            {
              station: "GRELIE",
              voters: 1624
            },
          ],
          "ECOLE PUBLIQUE DE BODO / A": [
            {
              station: "BODO",
              voters: 6072
            },
            {
              station: "FOUDA",
              voters: 1518
            },
            {
              station: "GALGOUA",
              voters: 1518
            },
            {
              station: "GUEFTAGUE",
              voters: 1518
            },
          ],
          "ECOLE PUBLIQUE DE BOMBOYO / A": [
            {
              station: "BOMBOYO",
              voters: 295
            },
          ],
          "ECOLE PUBLIQUE DE DAGUE KOTOKO / A": [
            {
              station: "DAGUE",
              voters: 1078
            },
            {
              station: "MEITO",
              voters: 539
            },
          ],
          "ECOLE PUBLIQUE DE DIGAM / A": [
            {
              station: "DIGAM",
              voters: 1330
            },
            {
              station: "DIGAM-BAR",
              voters: 472
            },
          ],
          "ECOLE PUBLIQUE DE DILDIL FALATA / A": [
            {
              station: "DIDIL",
              voters: 442
            },
            {
              station: "BANASSET",
              voters: 442
            },
            {
              station: "DILDIL",
              voters: 420
            },
            {
              station: "GOGRE",
              voters: 221
            },
            {
              station: "S/QUARTIER",
              voters: 221
            },
          ],
          "ECOLE PUBLIQUE DE DJADJAYA / A": [
            {
              station: "ADJIRI",
              voters: 495
            },
            {
              station: "DJADJAYA",
              voters: 495
            },
            {
              station: "MAMADOU",
              voters: 495
            },
            {
              station: "WACHAM",
              voters: 495
            },
          ],
          "ECOLE PUBLIQUE DE DJIDANSAMA / A": [
            {
              station: "DJADJA",
              voters: 350
            },
            {
              station: "KAYA",
              voters: 350
            },
            {
              station: "DJIDANSAMA",
              voters: 350
            },
            {
              station: "MIDEGUINE",
              voters: 350
            },
            {
              station: "NGOUNOU",
              voters: 350
            },
            {
              station: "WOREDINE",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE DE DOLE / A": [
            {
              station: "MADIA",
              voters: 347
            },
            {
              station: "DOLE",
              voters: 804
            },
          ],
          "ECOLE PUBLIQUE DE DOROROYA / A": [
            {
              station: "AMCHEDIRE",
              voters: 540
            },
            {
              station: "DOROROYA",
              voters: 265
            },
          ],
          "ECOLE PUBLIQUE DE FADJE / A": [
            {
              station: "DEI",
              voters: 466
            },
            {
              station: "SAGUE",
              voters: 584
            },
            {
              station: "GADIME",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE GLESSALAO / A": [
            {
              station: "BEDA",
              voters: 133
            },
            {
              station: "GLESSALAO",
              voters: 133
            },
            {
              station: "KALAMOULOUE",
              voters: 133
            },
            {
              station: "MFAGARADE",
              voters: 133
            },
            {
              station: "TCHEIGOU",
              voters: 133
            },
          ],
          "ECOLE PUBLIQUE DE GOLALA / A": [
            {
              station: "GOLALA",
              voters: 322
            },
            {
              station: "GUELALA",
              voters: 820
            },
            {
              station: "NGOUSSOURE-ARABE",
              voters: 322
            },
            {
              station: "OROKALI",
              voters: 322
            },
          ],
          "ECOLE PUBLIQUE DE GUELALA / A": [
            {
              station: "HADAMARI",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE HEDRE / A": [
            {
              station: "ABOUKOUS-ABOUBOYA",
              voters: 648
            },
            {
              station: "ABOUKOUS-HAMADIE",
              voters: 620
            },
            {
              station: "ABOUKOUS-KAWAIME",
              voters: 648
            },
            {
              station: "AMFARA",
              voters: 506
            },
            {
              station: "BDIGUINI",
              voters: 356
            },
            {
              station: "KOTOKO",
              voters: 8155
            },
            {
              station: "BEND",
              voters: 356
            },
            {
              station: "HEDRE",
              voters: 356
            },
            {
              station: "MAADA",
              voters: 356
            },
            {
              station: "PARIS-DIO",
              voters: 356
            },
          ],
          "ECOLE PUBLIQUE DE HERASS / A": [
            {
              station: "GOULOUMBO",
              voters: 244
            },
            {
              station: "HERASS",
              voters: 244
            },
            {
              station: "HERDIBE",
              voters: 405
            },
            {
              station: "MAGNOKO",
              voters: 244
            },
            {
              station: "MATKOUS",
              voters: 488
            },
          ],
          "ECOLE PUBLIQUE DE HISSEINIE / A": [
            {
              station: "HISSEINIE",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE DE KAOUSSE / A": [
            {
              station: "KAOUSSE",
              voters: 400
            },
            {
              station: "RINGUE",
              voters: 400
            },
          ],
          "ECOLE PUBLIQUE DE KOKIO / A": [
            {
              station: "GAMBAROU",
              voters: 372
            },
            {
              station: "KOKIO",
              voters: 744
            },
          ],
          "ECOLE PUBLIQUE DE LARISKY / A": [
            {
              station: "LARISKY",
              voters: 157
            },
            {
              station: "MADAIK",
              voters: 157
            },
          ],
          "ECOLE PUBLIQUE DE MADANDOUGOUROU /  A": [
            {
              station: "MADANDOUGOUROU",
              voters: 216
            },
          ],
          "ECOLE PUBLIQUE DE MADARDAM / A": [
            {
              station: "ABOUBIRO",
              voters: 112
            },
            {
              station: "CHALAMTINI",
              voters: 832
            },
            {
              station: "MADARDAM",
              voters: 112
            },
          ],
          "ECOLE PUBLIQUE DE MADINA / A": [
            {
              station: "ARDEB",
              voters: 903
            },
            {
              station: "WASSO",
              voters: 903
            },
            {
              station: "GOURA",
              voters: 2239
            },
            {
              station: "MADINA",
              voters: 1104
            },
            {
              station: "NGUINEGUI",
              voters: 903
            },
          ],
          "ECOLE PUBLIQUE DE MALADI / A": [
            {
              station: "BONEWANE",
              voters: 465
            },
            {
              station: "MALADI",
              voters: 465
            },
          ],
          "ECOLE PUBLIQUE DE MALIE / A": [
            {
              station: "MAGUEL",
              voters: 223
            },
            {
              station: "MALIE",
              voters: 424
            },
          ],
          "ECOLE PUBLIQUE DE MALTAM / A": [
            {
              station: "CAMP",
              voters: 3985
            },
            {
              station: "FONCTIONNAIRE",
              voters: 3376
            },
            {
              station: "MALTAM",
              voters: 1431
            },
            {
              station: "CENTRE",
              voters: 1431
            },
          ],
          "ECOLE PUBLIQUE DE MANAWADJI / A": [
            {
              station: "NAGA",
              voters: 633
            },
          ],
          "ECOLE PUBLIQUE DE MARGUI / A": [
            {
              station: "DARAGA",
              voters: 238
            },
            {
              station: "MARGUI",
              voters: 238
            },
            {
              station: "NDILBING",
              voters: 238
            },
          ],
          "ECOLE PUBLIQUE DE MASSAKY / A": [
            {
              station: "MASSAKY",
              voters: 2181
            },
            {
              station: "MASSAKY-ARABE",
              voters: 727
            },
          ],
          "ECOLE PUBLIQUE DE MASSIO / A": [
            {
              station: "MASSIO",
              voters: 281
            },
          ],
          "ECOLE PUBLIQUE DE MBLAME / A": [
            {
              station: "DAFOUK",
              voters: 668
            },
            {
              station: "WANO",
              voters: 668
            },
            {
              station: "MBLAME",
              voters: 668
            },
            {
              station: "MBLAME-ECOLE",
              voters: 668
            },
            {
              station: "QUARTIER",
              voters: 1547
            },
            {
              station: "WOULKIE",
              voters: 668
            },
          ],
          "ECOLE PUBLIQUE DE MEIRAHA / A": [
            {
              station: "DOUELOU",
              voters: 340
            },
            {
              station: "MEIRAHA",
              voters: 170
            },
          ],
          "ECOLE PUBLIQUE DE NAIRA DJIDDA / A": [
            {
              station: "ALMITERAP",
              voters: 466
            },
            {
              station: "AMBOUSSOULTOUK",
              voters: 539
            },
            {
              station: "AMSAORA",
              voters: 539
            },
            {
              station: "ADOUM",
              voters: 727
            },
            {
              station: "MANAWADJI",
              voters: 996
            },
            {
              station: "NAIRA",
              voters: 676
            },
          ],
          "ECOLE PUBLIQUE DE NDIGUINI / A": [
            {
              station: "NDIGUINI",
              voters: 321
            },
            {
              station: "NGOUSSOURE",
              voters: 321
            },
          ],
          "ECOLE PUBLIQUE DE NDJAMENA KOTOKO / A": [
            {
              station: "MADA",
              voters: 2011
            },
            {
              station: "BOUK",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE DE NDJIMINI / A": [
            {
              station: "AHAI",
              voters: 221
            },
            {
              station: "AMFLEI",
              voters: 221
            },
            {
              station: "AMKINDING",
              voters: 362
            },
            {
              station: "MICHKA",
              voters: 430
            },
            {
              station: "NDJIMINI",
              voters: 221
            },
          ],
          "ECOLE PUBLIQUE DE NGAME MAKARY / A": [
            {
              station: "DJAGALAT",
              voters: 201
            },
            {
              station: "LAFIANA",
              voters: 201
            },
            {
              station: "SULTANAT",
              voters: 201
            },
          ],
          "ECOLE PUBLIQUE DE NGARDOUGOUM / A": [
            {
              station: "BAGARA",
              voters: 358
            },
            {
              station: "GALE",
              voters: 716
            },
            {
              station: "NGARDOUGOUM",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE NGARKAWA / A": [
            {
              station: "NGARKAWA",
              voters: 2430
            },
            {
              station: "KANOURI",
              voters: 810
            },
            {
              station: "WAGLAM",
              voters: 1199
            },
          ],
          "ECOLE PUBLIQUE DE NGOUMA / A": [
            {
              station: "BRATALIA",
              voters: 1693
            },
            {
              station: "NGOUMA",
              voters: 11851
            },
            {
              station: "GUEIRANDOUMO",
              voters: 1693
            },
            {
              station: "III",
              voters: 4649
            },
            {
              station: "KRIBI",
              voters: 3386
            },
            {
              station: "MASSOUN",
              voters: 1693
            },
          ],
          "ECOLE PUBLIQUE DE NGOUT / A": [
            {
              station: "DAGLE",
              voters: 500
            },
            {
              station: "DIAM",
              voters: 1000
            },
            {
              station: "FARFARA",
              voters: 500
            },
            {
              station: "NGOUT",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE NGREE / A": [
            {
              station: "ARDEBEE-BANASSET",
              voters: 255
            },
            {
              station: "MADEBA",
              voters: 255
            },
            {
              station: "NGREE",
              voters: 255
            },
            {
              station: "TCHAPPE",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE DE SAGME / A": [
            {
              station: "DAGME",
              voters: 171
            },
            {
              station: "SAGME",
              voters: 171
            },
            {
              station: "SOUKARE",
              voters: 171
            },
            {
              station: "DIAME",
              voters: 171
            },
          ],
          "ECOLE PUBLIQUE DE SOULFA / A": [
            {
              station: "SOULFA",
              voters: 214
            },
          ],
          "ECOLE PUBLIQUE DE SOUNGOURA / A": [
            {
              station: "FROUHOURI",
              voters: 277
            },
            {
              station: "SERAH",
              voters: 277
            },
            {
              station: "SOUNGOURA",
              voters: 277
            },
          ],
          "ECOLE PUBLIQUE DE TILDE / A": [
            {
              station: "TILDE",
              voters: 605
            },
          ],
          "ECOLE PUBLIQUE DE WOULKIO KALE / A": [
            {
              station: "WOULKIO",
              voters: 298
            },
            {
              station: "KALE",
              voters: 298
            },
          ],
          "ECOLE PUBLIQUE DE WOULKY / A": [
            {
              station: "GANDI",
              voters: 511
            },
            {
              station: "GOULSE",
              voters: 511
            },
            {
              station: "SARE",
              voters: 511
            },
            {
              station: "SULTAN",
              voters: 511
            },
            {
              station: "WOULKY",
              voters: 511
            },
          ],
          "ECOLE PUBLIQUE DE ZAMANE / A": [
            {
              station: "DELEBE",
              voters: 428
            },
            {
              station: "ZAMANE",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DES PARENTS DE  NDODOHE / A": [
            {
              station: "BADRA",
              voters: 295
            },
            {
              station: "GOUBAGO",
              voters: 295
            },
            {
              station: "NDODOHE",
              voters: 1199
            },
            {
              station: "ARABE",
              voters: 2403
            },
          ],
          "ECOLE PUBLIQUE DES PARENTS DE SEHEBA  /A": [
            {
              station: "MEDANE",
              voters: 379
            },
            {
              station: "MOUGOUDI",
              voters: 379
            },
            {
              station: "NALLA",
              voters: 379
            },
            {
              station: "SEHEBA",
              voters: 379
            },
            {
              station: "SIDDIE",
              voters: 379
            },
          ],
          "ECOLE PUBLIQUE GROUPE I D'AFADE / A": [
            {
              station: "AFADE",
              voters: 6394
            },
            {
              station: "DAMIA",
              voters: 462
            },
            {
              station: "IIB",
              voters: 462
            },
            {
              station: "SILMAO",
              voters: 462
            },
            {
              station: "AFADE-DAMIA",
              voters: 462
            },
            {
              station: "DOUGOUMO",
              voters: 462
            },
          ],
          "ECOLE PUBLIQUE PARENTS DE  SOUH-SALAMAT / A": [
            {
              station: "BLOH",
              voters: 178
            },
            {
              station: "SOUH-SALAMAT",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE PARENTS DE TCHARI ABBA  /A": [
            {
              station: "TCHARI",
              voters: 129
            },
            {
              station: "ABBA",
              voters: 129
            },
          ],
          "HANGAR PUB LIC DE NAIRA / A": [
            {
              station: "HAWAF",
              voters: 210
            },
          ],
          "HANGAR PUBLIC D'ABODI-GRELIE / A": [
            {
              station: "ABODI-GRELIE",
              voters: 247
            },
            {
              station: "ADJIBAR",
              voters: 247
            },
            {
              station: "FADJAWA",
              voters: 478
            },
          ],
          "HANGAR PUBLIC D'ABOUTABILO / A": [
            {
              station: "ABOUTABILO",
              voters: 138
            },
            {
              station: "ABOUTABILO-NGOUROYA",
              voters: 138
            },
            {
              station: "GAGRAWA",
              voters: 138
            },
          ],
          "HANGAR PUBLIC D'ABOUYAKOUBA / A": [
            {
              station: "ABOUYAKOUBA",
              voters: 199
            },
          ],
          "HANGAR PUBLIC D'AMKOUMBOULA / A": [
            {
              station: "AMKOUMBOULA",
              voters: 261
            },
            {
              station: "AMSOUFA",
              voters: 261
            },
            {
              station: "BEDAT",
              voters: 448
            },
            {
              station: "KESSAWA",
              voters: 261
            },
          ],
          "HANGAR PUBLIC DE ALEK FALATA / A": [
            {
              station: "ALEK",
              voters: 148
            },
            {
              station: "FALATA",
              voters: 826
            },
          ],
          "HANGAR PUBLIC DE BAKIE / A": [
            {
              station: "BAKIE",
              voters: 236
            },
            {
              station: "DOUGOUM",
              voters: 236
            },
            {
              station: "MANGAFEI",
              voters: 236
            },
          ],
          "HANGAR PUBLIC DE BELBELI / A": [
            {
              station: "BELBELI",
              voters: 209
            },
            {
              station: "GOURLEY",
              voters: 291
            },
            {
              station: "GUITRE",
              voters: 209
            },
            {
              station: "KOUEZI",
              voters: 209
            },
            {
              station: "NIGUE",
              voters: 593
            },
          ],
          "HANGAR PUBLIC DE BIANG / A": [
            {
              station: "ALEK-KOTOKO",
              voters: 121
            },
            {
              station: "BIANG",
              voters: 121
            },
            {
              station: "DOH",
              voters: 121
            },
          ],
          "HANGAR PUBLIC DE BIDEINE / A": [
            {
              station: "BIDEINE",
              voters: 86
            },
          ],
          "HANGAR PUBLIC DE BLAMTAGUI / A": [
            {
              station: "BLAMTAGUI",
              voters: 246
            },
            {
              station: "NANAMI",
              voters: 246
            },
          ],
          "HANGAR PUBLIC DE CHAIBOU / A": [
            {
              station: "ABODI-HESSANA",
              voters: 171
            },
            {
              station: "CHAIBOU",
              voters: 171
            },
            {
              station: "ZEFAYA",
              voters: 171
            },
            {
              station: "HIPTRE",
              voters: 171
            },
          ],
          "HANGAR PUBLIC DE DAMBA I / A": [
            {
              station: "DAMBA",
              voters: 423
            },
            {
              station: "DOUGUI",
              voters: 141
            },
          ],
          "HANGAR PUBLIC DE DOUBABE SABALBOUTA  /A": [
            {
              station: "ABOUSSOULOUM",
              voters: 134
            },
            {
              station: "DOUBABE",
              voters: 842
            },
            {
              station: "SABALBOUTA",
              voters: 268
            },
            {
              station: "DOUMAN",
              voters: 513
            },
          ],
          "HANGAR PUBLIC DE DOUBABEL GOSS / A": [
            {
              station: "AMANIKAIRE",
              voters: 410
            },
            {
              station: "KRENAK",
              voters: 1542
            },
            {
              station: "DOUBABEL",
              voters: 820
            },
            {
              station: "GOSS",
              voters: 820
            },
            {
              station: "GADA",
              voters: 410
            },
            {
              station: "MABROUKA",
              voters: 611
            },
          ],
          "HANGAR PUBLIC DE GOURGOURA / A": [
            {
              station: "AFAMI",
              voters: 264
            },
            {
              station: "GOURGOURA",
              voters: 264
            },
            {
              station: "HARADINE",
              voters: 264
            },
            {
              station: "SAFRE",
              voters: 264
            },
          ],
          "HANGAR PUBLIC DE GOURLEY II / A": [
            {
              station: "MISKA",
              voters: 41
            },
          ],
          "HANGAR PUBLIC DE HIDILIDJE SALAMAT / A": [
            {
              station: "BAKELA",
              voters: 150
            },
            {
              station: "HIDILIDJE",
              voters: 150
            },
            {
              station: "SALAMAT",
              voters: 795
            },
            {
              station: "HIDJELIDJE",
              voters: 721
            },
            {
              station: "NDEGO",
              voters: 807
            },
            {
              station: "ZAMA",
              voters: 150
            },
          ],
          "HANGAR PUBLIC DE KASSIBE / A": [
            {
              station: "KASSIBE",
              voters: 144
            },
            {
              station: "MADEGOUA",
              voters: 144
            },
          ],
          "HANGAR PUBLIC DE KRENACK ARABE / A": [
            {
              station: "RASSALFIL",
              voters: 164
            },
            {
              station: "EDJOUS",
              voters: 164
            },
            {
              station: "HISSEINI",
              voters: 164
            },
            {
              station: "KRENACK",
              voters: 1096
            },
            {
              station: "OUSSADA",
              voters: 395
            },
          ],
          "HANGAR PUBLIC DE KRENACK FARCH I / A": [
            {
              station: "FARCH",
              voters: 616
            },
          ],
          "HANGAR PUBLIC DE KRENACK MBARMA / A": [
            {
              station: "MBARMA",
              voters: 208
            },
          ],
          "HANGAR PUBLIC DE LAFIA / A": [
            {
              station: "LAFIA",
              voters: 1204
            },
          ],
          "HANGAR PUBLIC DE LAFIA KOTOKO / A": [
            {
              station: "KAWALME",
              voters: 274
            },
          ],
          "HANGAR PUBLIC DE LOGOYA / A": [
            {
              station: "LOGOYA",
              voters: 327
            },
            {
              station: "NGOUSSERE",
              voters: 327
            },
          ],
          "HANGAR PUBLIC DE MAFANDE / A": [
            {
              station: "MAFANDE",
              voters: 55
            },
          ],
          "HANGAR PUBLIC DE MAFOUFOU / A": [
            {
              station: "LAGOS",
              voters: 668
            },
            {
              station: "MAFOUFOU",
              voters: 668
            },
            {
              station: "OUSSE",
              voters: 668
            },
            {
              station: "TCHA",
              voters: 668
            },
          ],
          "HANGAR PUBLIC DE MANIGAIDE / A": [
            {
              station: "HILIO",
              voters: 384
            },
            {
              station: "KLEHE",
              voters: 384
            },
            {
              station: "MANIGAIDE",
              voters: 384
            },
            {
              station: "TCHANGA",
              voters: 384
            },
          ],
          "HANGAR PUBLIC DE MBALAL / A": [
            {
              station: "BLALI",
              voters: 252
            },
            {
              station: "BOUNOU",
              voters: 252
            },
            {
              station: "MASSILATER",
              voters: 252
            },
            {
              station: "MBALAL",
              voters: 252
            },
          ],
          "HANGAR PUBLIC DE MELEKI / A": [
            {
              station: "MECHIMALE-SALAMIT",
              voters: 334
            },
            {
              station: "MELEKI",
              voters: 334
            },
          ],
          "HANGAR PUBLIC DE MERIMIE-BAZIZNI / A": [
            {
              station: "AMSOUMBOUL",
              voters: 73
            },
            {
              station: "BAZIZNI",
              voters: 73
            },
            {
              station: "GOLGOLA",
              voters: 73
            },
            {
              station: "HABOBA",
              voters: 73
            },
            {
              station: "HELIT",
              voters: 73
            },
            {
              station: "KHABOBA",
              voters: 73
            },
            {
              station: "SOUMBOUL",
              voters: 73
            },
          ],
          "HANGAR PUBLIC DE MESSIO / A": [
            {
              station: "MESSIO",
              voters: 146
            },
          ],
          "HANGAR PUBLIC DE MILIE / A": [
            {
              station: "MILIE",
              voters: 1366
            },
          ],
          "HANGAR PUBLIC DE NDAGA / A": [
            {
              station: "DANCHAK",
              voters: 242
            },
            {
              station: "DOUGMO",
              voters: 1698
            },
            {
              station: "MONGO",
              voters: 242
            },
            {
              station: "NDAGA",
              voters: 242
            },
            {
              station: "SOUSDRAHEL",
              voters: 242
            },
          ],
          "HANGAR PUBLIC DE NGAIWA / A": [
            {
              station: "BALMA",
              voters: 267
            },
            {
              station: "BAOOURI",
              voters: 267
            },
            {
              station: "NGAIWA",
              voters: 267
            },
          ],
          "HANGAR PUBLIC DE NGAME SAGME / A": [
            {
              station: "ISIAM",
              voters: 111
            },
            {
              station: "SOUH-KOTOKO",
              voters: 111
            },
          ],
          "HANGAR PUBLIC DE NGONFLA / A": [
            {
              station: "DEHERE",
              voters: 176
            },
            {
              station: "GOURLIE",
              voters: 176
            },
            {
              station: "NGONFLA",
              voters: 176
            },
          ],
          "HANGAR PUBLIC DE NOUAR / A": [
            {
              station: "MBIRTCHA",
              voters: 217
            },
            {
              station: "NOUAR",
              voters: 217
            },
          ],
          "HANGAR PUBLIC DE OUROGOULMO / A": [
            {
              station: "GLEM",
              voters: 356
            },
            {
              station: "OUROGOULMO",
              voters: 178
            },
          ],
          "HANGAR PUBLIC DE SOUARGUE / A": [
            {
              station: "MBRATALLA",
              voters: 223
            },
            {
              station: "SOUARGUE",
              voters: 223
            },
            {
              station: "SOUMAINE",
              voters: 223
            },
          ],
          "HANGAR PUBLIC DE SOUMOU / A": [
            {
              station: "BELLA",
              voters: 275
            },
            {
              station: "DELIP",
              voters: 275
            },
            {
              station: "MOUR",
              voters: 275
            },
            {
              station: "OUDAAH",
              voters: 275
            },
            {
              station: "SOUMOU",
              voters: 275
            },
          ],
          "HANGAR PUBLIC DE TREBOULO / A": [
            {
              station: "ABOUNGLA",
              voters: 384
            },
            {
              station: "AMSAMKA",
              voters: 384
            },
            {
              station: "LABADO",
              voters: 1262
            },
            {
              station: "MEREMIE",
              voters: 457
            },
            {
              station: "SOUEDJE",
              voters: 384
            },
            {
              station: "TREBOULO",
              voters: 384
            },
          ],
          "HANGAR PUBLIC DE WACHAMO / A": [
            {
              station: "WACHAMO",
              voters: 192
            },
          ],
          "HANGAR PUBLIC DE YIK / A": [
            {
              station: "ABODI",
              voters: 772
            },
            {
              station: "HESSANA",
              voters: 1062
            },
            {
              station: "AMSINENE",
              voters: 652
            },
            {
              station: "FARCHA",
              voters: 652
            },
            {
              station: "HILISNA",
              voters: 828
            },
            {
              station: "NGAME",
              voters: 1049
            },
            {
              station: "OUGAYO",
              voters: 386
            },
            {
              station: "SAHABA",
              voters: 661
            },
            {
              station: "TCHIGO",
              voters: 386
            },
            {
              station: "YIK",
              voters: 386
            },
          ],
          "HANGAR PUBLIC NDJAMENA MOUSSA  DJIBRINE / A": [
            {
              station: "ABOUNOUMIRE",
              voters: 360
            },
            {
              station: "DJAMOUS",
              voters: 360
            },
            {
              station: "GOSALNOUGARA",
              voters: 360
            },
            {
              station: "LEIFA",
              voters: 360
            },
            {
              station: "NDJAMENA",
              voters: 2344
            },
            {
              station: "MOUSSA",
              voters: 360
            },
            {
              station: "DJIBRINE",
              voters: 360
            },
          ],
          "HANGAR PUBLIQUE DE NGAME II / A": [
            {
              station: "SIAM",
              voters: 120
            },
            {
              station: "SOUH",
              voters: 120
            },
          ],
          "INSPECTION PRIMAIRE DE MAKARI / A": [
            {
              station: "(SARE",
              voters: 879
            },
            {
              station: "SULTAN)",
              voters: 879
            },
          ],
          "MAIRIE DE MAKARI / A": [
            {
              station: "FONCTIONNAIRES",
              voters: 1277
            },
            {
              station: "GOSLO",
              voters: 3035
            },
            {
              station: "MADJIO",
              voters: 1277
            },
            {
              station: "MAKARI",
              voters: 4957
            },
            {
              station: "GALME",
              voters: 2403
            },
            {
              station: "MAIRIE",
              voters: 1277
            },
            {
              station: "WELIO",
              voters: 2554
            },
            {
              station: "MAKARI-MAIRIE",
              voters: 1277
            },
            {
              station: "MOULO",
              voters: 1277
            },
          ],
          "MOSQUEE DE ATIME-FARA / A": [
            {
              station: "ATIME-FARA",
              voters: 152
            },
            {
              station: "HOULOUS",
              voters: 152
            },
          ],
          "MOSQUEE DE BLAHE / A": [
            {
              station: "BLAHE",
              voters: 365
            },
          ],
          "MOSQUEE DE BON GOUR / A": [
            {
              station: "BON",
              voters: 426
            },
            {
              station: "GOUR",
              voters: 426
            },
            {
              station: "GORE",
              voters: 426
            },
            {
              station: "MAMAT",
              voters: 426
            },
          ],
          "MOSQUEE DE DOUGMO I / A": [
            {
              station: "MILIOMA",
              voters: 608
            },
            {
              station: "OULOUGME",
              voters: 608
            },
          ],
          "MOSQUEE DE HERDIBE / A": [
            {
              station: "KISKA",
              voters: 161
            },
          ],
          "MOSQUEE DE KORNOYA / A": [
            {
              station: "ABARI",
              voters: 190
            },
            {
              station: "DONGOLO",
              voters: 190
            },
            {
              station: "KORNOYA",
              voters: 190
            },
          ],
          "MOSQUEE DE LABADO / A": [
            {
              station: "BEDAO",
              voters: 247
            },
          ],
          "MOSQUEE DE MBE / A": [
            {
              station: "MBE",
              voters: 187
            },
            {
              station: "MINKINDING",
              voters: 187
            },
            {
              station: "NGORTCHONO",
              voters: 618
            },
          ],
        },
        "WAZA": {
          "ECOLE MATERNELLE DE WAZA / A": [
            {
              station: "BLOC",
              voters: 404
            },
            {
              station: "RESIDENTIEL",
              voters: 404
            },
            {
              station: "LARISKI",
              voters: 1886
            },
            {
              station: "WAZAGAROU",
              voters: 1087
            },
          ],
          "ECOLE PUBLIQUE D'AMTALIA / A": [
            {
              station: "AMBASSADNA",
              voters: 215
            },
            {
              station: "AMTALIA",
              voters: 215
            },
            {
              station: "GAMALARI",
              voters: 215
            },
            {
              station: "NDJAMENA",
              voters: 353
            },
          ],
          "ECOLE PUBLIQUE D'OULZOUME / A": [
            {
              station: "OULZOUME",
              voters: 232
            },
          ],
          "ECOLE PUBLIQUE DE BILE 1 / A": [
            {
              station: "BILE",
              voters: 285
            },
          ],
          "ECOLE PUBLIQUE DE MICHEDIRE / A": [
            {
              station: "KABE",
              voters: 634
            },
            {
              station: "MICHEDIRE",
              voters: 317
            },
          ],
          "ECOLE PUBLIQUE DE NDAGA / A": [
            {
              station: "KOULIA",
              voters: 86
            },
            {
              station: "KOUMARKA",
              voters: 86
            },
            {
              station: "MADAHAYER",
              voters: 86
            },
            {
              station: "NDAGA",
              voters: 86
            },
          ],
          "ECOLE PUBLIQUE DE NDIGUINA / A": [
            {
              station: "GOULADOUMA",
              voters: 127
            },
            {
              station: "MADAKOLA",
              voters: 127
            },
            {
              station: "NDIGUINA",
              voters: 371
            },
            {
              station: "BLAMA",
              voters: 371
            },
            {
              station: "ATTI",
              voters: 127
            },
            {
              station: "OUSKA",
              voters: 190
            },
            {
              station: "ABBA",
              voters: 127
            },
            {
              station: "GADOU",
              voters: 127
            },
          ],
          "ECOLE PUBLIQUE DE NDOUVOUL / A": [
            {
              station: "MIZIGLI",
              voters: 169
            },
            {
              station: "NDOUVOUL",
              voters: 169
            },
            {
              station: "VIGUIYOUM",
              voters: 169
            },
          ],
          "ECOLE PUBLIQUE DE NGAME / A": [
            {
              station: "KIDJIME",
              voters: 189
            },
            {
              station: "NGAME",
              voters: 378
            },
          ],
          "ECOLE PUBLIQUE DE ZIGAGUE / A": [
            {
              station: "MBANAWALY",
              voters: 484
            },
            {
              station: "MZEGA",
              voters: 484
            },
          ],
          "EMPLACEMENT ECOLE DE GNAM-GNAM / A": [
            {
              station: "BLANGOU",
              voters: 504
            },
            {
              station: "GNAM-GNAM",
              voters: 252
            },
            {
              station: "HARAKA",
              voters: 252
            },
          ],
          "ER MAGASIN DE STOCKAGE A COTE DU  MARCHE / A": [
            {
              station: "KIDJIMATARI",
              voters: 312
            },
          ],
          "ESPLANADE GRANDE MOSQUEE D'ALAPITARI  /A": [
            {
              station: "ALAPITARI",
              voters: 302
            },
          ],
          "ESPLANADE GRANDE MOSQUEE DE  NDIGUINA / A": [
            {
              station: "ABDOU",
              voters: 244
            },
          ],
          "ESPLANADE GRANDEE MOSQUE DE BAKIE / A": [
            {
              station: "BAKIE",
              voters: 311
            },
          ],
          "ESPLANADE MOSQUEE D'ARDEBE / A": [
            {
              station: "ARDEBE",
              voters: 156
            },
          ],
          "ESPLANADE MOSQUEE DE CHAOUDE / A": [
            {
              station: "CHAOUDE",
              voters: 107
            },
          ],
          "ESPLANADE MOSQUEE DE GONERI / A": [
            {
              station: "GONERI",
              voters: 126
            },
          ],
          "ESPLANADE MOSQUEE DE GOULOUZIVINI / A": [
            {
              station: "GOULOUZIVINI",
              voters: 63
            },
            {
              station: "MARGUI",
              voters: 63
            },
            {
              station: "MAHAMAT",
              voters: 63
            },
            {
              station: "AHMAT",
              voters: 63
            },
          ],
          "ESPLANADE MOSQUEE DE GOURGOURO / A": [
            {
              station: "GOURGOURO",
              voters: 326
            },
            {
              station: "GUINE-GUINE",
              voters: 163
            },
          ],
          "ESPLANADE MOSQUEE DE GOZONAL / A": [
            {
              station: "AMTAKALA",
              voters: 105
            },
            {
              station: "GOZONAL",
              voters: 105
            },
          ],
          "ESPLANADE MOSQUEE DE LAFIA / A": [
            {
              station: "LAFIA",
              voters: 125
            },
            {
              station: "NGOUROU-MADINA",
              voters: 125
            },
          ],
          "ESPLANADE MOSQUEE DE LAYOUNA / A": [
            {
              station: "LAYOUNA",
              voters: 192
            },
            {
              station: "MADA",
              voters: 395
            },
          ],
          "ESPLANADE MOSQUEE DE MAMANI / A": [
            {
              station: "MAMANI",
              voters: 138
            },
          ],
          "ESPLANADE MOSQUEE DE SALE / A": [
            {
              station: "SALE",
              voters: 105
            },
          ],
          "ESPLANADE MOSQUEE DE TCHOUMKOUL 1 /  A": [
            {
              station: "TCHOUMKOUL",
              voters: 246
            },
          ],
          "ESPLANADE MOSQUEE DE TOUKOUMAYA / A": [
            {
              station: "TOUKOUMAYA",
              voters: 126
            },
          ],
          "ESPLANADE MOSQUEE DE ZALZALE / A": [
            {
              station: "MASSANGUIRMA",
              voters: 103
            },
            {
              station: "ZALZALE",
              voters: 103
            },
          ],
          "ESPLANADE MOSQUEE DE ZIGUE / A": [
            {
              station: "DOKOLA",
              voters: 188
            },
            {
              station: "MBATKOUNA",
              voters: 376
            },
            {
              station: "MBONGA",
              voters: 188
            },
            {
              station: "ZIGUE",
              voters: 188
            },
          ],
          "ESPLANADE MOSQUEE GONI LAMBA  D'AWARAM / A": [
            {
              station: "AWARAM",
              voters: 270
            },
          ],
          "ESPLANADE PETITE MOSQUEE DE KOUKA / A": [
            {
              station: "KOUKA",
              voters: 191
            },
            {
              station: "ZIGAGUE",
              voters: 191
            },
            {
              station: "MOUSGOUM",
              voters: 191
            },
          ],
          "ESPLANADE PETITE MOSQUEE DE WALASSA  /A": [
            {
              station: "WALASSA",
              voters: 335
            },
          ],
          "MAGASIN DE STOCKAGE DEMALIA / A": [
            {
              station: "HEDITH",
              voters: 325
            },
            {
              station: "KOURMA",
              voters: 325
            },
            {
              station: "MALIA",
              voters: 325
            },
            {
              station: "TOUNGA",
              voters: 325
            },
          ],
          "MAGASIN STOCKAGE DE TAGAWA 1 / A": [
            {
              station: "TAGAWA",
              voters: 716
            },
          ],
        },
        "ZINA": {
          "CAMPEMENT DE BALGUE III / A": [
            {
              station: "BAGUE",
              voters: 518
            },
            {
              station: "BALGUE",
              voters: 518
            },
            {
              station: "DABAK",
              voters: 518
            },
            {
              station: "DARAZI",
              voters: 518
            },
            {
              station: "GALAM",
              voters: 518
            },
            {
              station: "KOSSA-MOUSGOUM",
              voters: 518
            },
            {
              station: "PATALVI",
              voters: 518
            },
          ],
          "DIGUE DE ZILIM / A": [
            {
              station: "ZILIMI",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE D'ANDIRNI / A": [
            {
              station: "ANDIRNI",
              voters: 458
            },
            {
              station: "FADJE",
              voters: 458
            },
            {
              station: "KIDJIMATARI",
              voters: 458
            },
            {
              station: "NDJERME",
              voters: 458
            },
          ],
          "ECOLE PUBLIQUE D'ARAFOU / A": [
            {
              station: "ARAFOU",
              voters: 234
            },
            {
              station: "NKARSE",
              voters: 468
            },
            {
              station: "KOTOKO",
              voters: 387
            },
            {
              station: "MOUSGOUM",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE DOUENG / A": [
            {
              station: "BILMANKAI",
              voters: 88
            },
            {
              station: "DOUENG",
              voters: 88
            },
            {
              station: "MASKALAI",
              voters: 88
            },
          ],
          "ECOLE PUBLIQUE DE DOULO / A": [
            {
              station: "BANGALIA",
              voters: 335
            },
            {
              station: "DOULO",
              voters: 335
            },
            {
              station: "TCHAFFA",
              voters: 335
            },
          ],
          "ECOLE PUBLIQUE DE GUIDIBA / A": [
            {
              station: "GARLE",
              voters: 239
            },
            {
              station: "GUIDIBA",
              voters: 239
            },
            {
              station: "MOROMA",
              voters: 239
            },
          ],
          "ECOLE PUBLIQUE DE LAHAI / A": [
            {
              station: "LAHAI",
              voters: 276
            },
            {
              station: "PATMANGAI-LAHAI",
              voters: 276
            },
            {
              station: "TCHEKTCHEK",
              voters: 276
            },
          ],
          "ECOLE PUBLIQUE DE LOUGOUMA / A": [
            {
              station: "LOUGOUMA",
              voters: 179
            },
            {
              station: "ZOUANG",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE MESDE / A": [
            {
              station: "BADGASSI",
              voters: 271
            },
            {
              station: "MESDE",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE DE SARASARA / A": [
            {
              station: "KOFAYA",
              voters: 146
            },
            {
              station: "MARGOUE",
              voters: 146
            },
            {
              station: "SARASARA",
              voters: 146
            },
          ],
          "ECOLE PUBLIQUE DE SIFNA / A": [
            {
              station: "SIFNA",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE DE ZAGARA / A": [
            {
              station: "HALLAVANG",
              voters: 224
            },
            {
              station: "ZAGARA",
              voters: 224
            },
          ],
          "ESPLANADE CHEFFEREIE DE MANDJOUR III /  A": [
            {
              station: "MANDJOUR",
              voters: 1034
            },
            {
              station: "III",
              voters: 176
            },
          ],
          "ESPLANADE CHEFFERIE D'ALVAKAI / A": [
            {
              station: "ALVAKAI",
              voters: 137
            },
            {
              station: "MALAZINA",
              voters: 137
            },
          ],
          "ESPLANADE CHEFFERIE D'ARAINABA / A": [
            {
              station: "ARAINABA",
              voters: 302
            },
            {
              station: "DAVAGANG",
              voters: 302
            },
            {
              station: "MANKA",
              voters: 302
            },
          ],
          "ESPLANADE CHEFFERIE DE GALA / A": [
            {
              station: "GALA",
              voters: 134
            },
          ],
          "ESPLANADE MOSQUEE DE DABIA / A": [
            {
              station: "DABIA",
              voters: 114
            },
            {
              station: "ZAMA",
              voters: 114
            },
          ],
          "ESPLANADE MOSQUEE DE DEGUERE / A": [
            {
              station: "DEGUERE",
              voters: 118
            },
          ],
          "ESPLANADE MOSQUEE DE KADAM / A": [
            {
              station: "ABLOUNKAI",
              voters: 103
            },
            {
              station: "KADAM",
              voters: 103
            },
          ],
          "ESPLANADE MOSQUEE DE MAHE KOTOKO / A": [
            {
              station: "MAHE",
              voters: 306
            },
          ],
          "ESPLANADE MOSQUEE DE TCHOUKFOU / A": [
            {
              station: "GALAMI",
              voters: 177
            },
            {
              station: "TCHOUKFOU",
              voters: 177
            },
          ],
          "ESPLANADE PUIT DE SHEDE / A": [
            {
              station: "ARABO",
              voters: 171
            },
            {
              station: "SEFENA",
              voters: 171
            },
            {
              station: "SHEDE",
              voters: 171
            },
          ],
          "MARCHE DE HOLLOM / A": [
            {
              station: "HOLLOM",
              voters: 245
            },
            {
              station: "SKIR-ZINA",
              voters: 245
            },
          ],
          "MARCHE DE IVIE / A": [
            {
              station: "IVIE",
              voters: 249
            },
          ],
          "MARCHE DE KAZIRE / A": [
            {
              station: "GOIRAZI",
              voters: 360
            },
            {
              station: "KAZIRE",
              voters: 360
            },
          ],
          "MARCHE DE MAZERA / A": [
            {
              station: "BAZE",
              voters: 756
            },
            {
              station: "DOUVOUL",
              voters: 756
            },
            {
              station: "DRAWANE",
              voters: 756
            },
            {
              station: "GOMA",
              voters: 756
            },
            {
              station: "MANDA",
              voters: 756
            },
            {
              station: "MAZERA",
              voters: 756
            },
            {
              station: "PATMANGAI",
              voters: 756
            },
            {
              station: "YADJAWA",
              voters: 756
            },
            {
              station: "YOUKOULI",
              voters: 756
            },
          ],
          "PLACE DE FETE DE DIBISSA / A": [
            {
              station: "DIBISSA",
              voters: 335
            },
            {
              station: "GOUBA",
              voters: 335
            },
            {
              station: "GOURPE",
              voters: 335
            },
          ],
          "SOUS-PREFECTURE DE ZINA / A": [
            {
              station: "AGAME",
              voters: 1162
            },
            {
              station: "AGOUA",
              voters: 1162
            },
            {
              station: "ASKOMA",
              voters: 1162
            },
            {
              station: "GATTE",
              voters: 1162
            },
            {
              station: "MAGOUYA",
              voters: 1162
            },
            {
              station: "MARO",
              voters: 1162
            },
            {
              station: "WALIAGA",
              voters: 1162
            },
            {
              station: "ZINA",
              voters: 1162
            },
          ],
          "TAMARINIER DE NGOLAHAM / A": [
            {
              station: "MASSARI",
              voters: 102
            },
            {
              station: "NGOLAHAM",
              voters: 102
            },
            {
              station: "SKIR",
              voters: 102
            },
            {
              station: "NGODENI",
              voters: 508
            },
          ],
        },
      },
      "DIAMARE": {
        "BOGO": {
          "ANCIENNE COMMUNE RURALE / A": [
            {
              station: "LAIDEWO",
              voters: 648
            },
            {
              station: "BARE",
              voters: 648
            },
          ],
          "DELEGATION ELEVAGE MAGOUMAI / A": [
            {
              station: "BADEO",
              voters: 626
            },
            {
              station: "FOULBEO",
              voters: 626
            },
            {
              station: "MAGOUMAI",
              voters: 1365
            },
          ],
          "ECOLE MATERNELLE BOGO I / A": [
            {
              station: "MAROUARE",
              voters: 268
            },
            {
              station: "MATAKAMRE",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE BAGALAF / A": [
            {
              station: "KALANWO",
              voters: 91
            },
            {
              station: "SOUTTININGO",
              voters: 91
            },
            {
              station: "TCHASDEWO",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE BOGO GARRE / A": [
            {
              station: "BAYERORE",
              voters: 101
            },
            {
              station: "SABONGARI",
              voters: 101
            },
          ],
          "ECOLE PUBLIQUE BORAI MANGO / A": [
            {
              station: "BANKIRE",
              voters: 312
            },
            {
              station: "GADA",
              voters: 653
            },
            {
              station: "LOUGGOL",
              voters: 1230
            },
            {
              station: "ADDA",
              voters: 312
            },
            {
              station: "GANDJEL",
              voters: 487
            },
            {
              station: "SADOU",
              voters: 312
            },
            {
              station: "SHEHOU",
              voters: 312
            },
          ],
          "ECOLE PUBLIQUE BOUDOU MANGO / A": [
            {
              station: "BOUDOU",
              voters: 466
            },
            {
              station: "BOUDOUYEL",
              voters: 1384
            },
            {
              station: "HODANDE",
              voters: 466
            },
            {
              station: "MAOUDO",
              voters: 466
            },
            {
              station: "SAP-SAP",
              voters: 466
            },
            {
              station: "MANA",
              voters: 466
            },
            {
              station: "KAOU",
              voters: 466
            },
          ],
          "ECOLE PUBLIQUE DIGUIR / A": [
            {
              station: "DIGUIR",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DJIDDEL / A": [
            {
              station: "KESKER",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE FOUNANGUEDJE / A": [
            {
              station: "DASINGARRE",
              voters: 1067
            },
            {
              station: "FOUNANGUEDJE",
              voters: 1067
            },
          ],
          "ECOLE PUBLIQUE GOULOF ALA / A": [
            {
              station: "AGARDAWADJI",
              voters: 264
            },
            {
              station: "GOULOF",
              voters: 1205
            },
            {
              station: "ALA",
              voters: 264
            },
            {
              station: "ATIKOU",
              voters: 264
            },
            {
              station: "AZOUGOU",
              voters: 264
            },
            {
              station: "DOUNDERE",
              voters: 1331
            },
          ],
          "ECOLE PUBLIQUE GOUZOUBLAM / A": [
            {
              station: "WABI",
              voters: 971
            },
            {
              station: "GOUZOUBLAM",
              voters: 940
            },
            {
              station: "MOUSGOUM",
              voters: 470
            },
          ],
          "ECOLE PUBLIQUE GUIRLE / A": [
            {
              station: "YOLEL",
              voters: 828
            },
            {
              station: "BELLO",
              voters: 276
            },
            {
              station: "DAIROU",
              voters: 276
            },
          ],
          "ECOLE PUBLIQUE HIRNANGUEWO / A": [
            {
              station: "HIRNANGUEWO",
              voters: 364
            },
            {
              station: "HAMADOU",
              voters: 364
            },
            {
              station: "LIRINGO",
              voters: 364
            },
          ],
          "ECOLE PUBLIQUE KORREWO / A": [
            {
              station: "DJABINGUEL",
              voters: 261
            },
            {
              station: "KORREWO",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE MADAKA / A": [
            {
              station: "GOUREL",
              voters: 247
            },
            {
              station: "SALEH",
              voters: 247
            },
            {
              station: "YORONDOU",
              voters: 247
            },
            {
              station: "ABBA",
              voters: 531
            },
          ],
          "ECOLE PUBLIQUE MOKODOS / A": [
            {
              station: "MOKODOS",
              voters: 469
            },
          ],
          "ECOLE PUBLIQUE SEDEK GARRE / A": [
            {
              station: "ARDO",
              voters: 1336
            },
            {
              station: "BIRFA",
              voters: 976
            },
            {
              station: "KAGAO",
              voters: 1340
            },
            {
              station: "WINDE",
              voters: 1465
            },
            {
              station: "BORNO",
              voters: 976
            },
            {
              station: "WOURO",
              voters: 14169
            },
            {
              station: "MATI",
              voters: 976
            },
          ],
          "ECOLE PUBLIQUE SILIARE / A": [
            {
              station: "SILIARE",
              voters: 364
            },
          ],
          "ECOLE PUBLIQUE SIRATARE / A": [
            {
              station: "DJADJARI",
              voters: 1577
            },
            {
              station: "GOUZOUGOUIRE",
              voters: 1577
            },
            {
              station: "MAOUNDIRE",
              voters: 1577
            },
            {
              station: "SIRATARE",
              voters: 2244
            },
          ],
          "ECOLE PUBLIQUE TANKIROU / A": [
            {
              station: "ARDOWO",
              voters: 556
            },
            {
              station: "LOUGGEREO",
              voters: 556
            },
            {
              station: "MOGOMRE",
              voters: 1773
            },
            {
              station: "TANKIROU",
              voters: 1112
            },
            {
              station: "TOWNDEWO",
              voters: 556
            },
          ],
          "ECOLE PUBLIQUE TCHABAWOL / A": [
            {
              station: "ADARWALA",
              voters: 1178
            },
            {
              station: "DJIDDERE",
              voters: 708
            },
            {
              station: "BALOL",
              voters: 708
            },
            {
              station: "DOLDOLDEWO",
              voters: 708
            },
            {
              station: "DOUDO",
              voters: 708
            },
            {
              station: "GUELING",
              voters: 708
            },
            {
              station: "TCHABOWOL",
              voters: 708
            },
            {
              station: "MAYARE",
              voters: 907
            },
            {
              station: "MESSEGUE",
              voters: 708
            },
            {
              station: "SOURBAWOL",
              voters: 708
            },
            {
              station: "TCHABAWOL",
              voters: 708
            },
          ],
          "ECOLE PUBLIQUE ZALAO / A": [
            {
              station: "ADAMOKOU",
              voters: 225
            },
            {
              station: "ZALAO",
              voters: 225
            },
            {
              station: "ZALAWO",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE ZINABALANG / A": [
            {
              station: "ARIA-ARIA",
              voters: 311
            },
            {
              station: "KORADAI",
              voters: 311
            },
            {
              station: "MOKOROM",
              voters: 311
            },
            {
              station: "SADOWOL",
              voters: 311
            },
            {
              station: "ZINA",
              voters: 311
            },
            {
              station: "HARDE",
              voters: 795
            },
            {
              station: "ZINABALANG",
              voters: 311
            },
          ],
          "ESPL. CHEF. BOTCHAWO ABDOULAYE / A": [
            {
              station: "BOTCHAWO",
              voters: 297
            },
            {
              station: "BIRI",
              voters: 472
            },
            {
              station: "DJAM",
              voters: 297
            },
          ],
          "ESPL. CHEF. DJOUTNGO MODIBBO / A": [
            {
              station: "MODIBO",
              voters: 259
            },
            {
              station: "TANNEWO",
              voters: 259
            },
          ],
          "ESPL. CHEF. GUINGLAYE GARRE / A": [
            {
              station: "BOUNGUEL",
              voters: 918
            },
            {
              station: "GUINGLAYE",
              voters: 918
            },
            {
              station: "NGARI",
              voters: 918
            },
            {
              station: "MATABEL",
              voters: 918
            },
            {
              station: "TOURMATAL",
              voters: 918
            },
          ],
          "ESPL. CHEF. SEDEK WOURO GABDO / A": [
            {
              station: "FOUKARBEWO",
              voters: 185
            },
            {
              station: "GABDO",
              voters: 185
            },
            {
              station: "LIMAN",
              voters: 257
            },
          ],
          "ESPL. CHEF. SEDEK WOURO YOLDE / A": [
            {
              station: "TOUROUKRE",
              voters: 115
            },
          ],
          "ESPL. CHEF. WAKKA BOUNGOU FOULBE / A": [
            {
              station: "WAKKA",
              voters: 276
            },
            {
              station: "BOUNGOU",
              voters: 276
            },
          ],
          "ESPL. CHEFFERIE ADDIA / A": [
            {
              station: "ADDIA",
              voters: 239
            },
            {
              station: "WAWANGO",
              voters: 239
            },
          ],
          "ESPL. CHEFFERIE AGAIDA / A": [
            {
              station: "AGAIDA",
              voters: 127
            },
            {
              station: "NDJAPPE",
              voters: 127
            },
          ],
          "ESPL. CHEFFERIE BAGALAF GARRE / A": [
            {
              station: "BAGALAF",
              voters: 460
            },
            {
              station: "DIDELWO",
              voters: 460
            },
          ],
          "ESPL. CHEFFERIE BALDA GARRE / A": [
            {
              station: "BALDA",
              voters: 1779
            },
            {
              station: "SOULKANDOU",
              voters: 1051
            },
            {
              station: "TAGAMRE",
              voters: 1051
            },
            {
              station: "BAME",
              voters: 1051
            },
            {
              station: "DOLE",
              voters: 1051
            },
          ],
          "ESPL. CHEFFERIE BALDA LOPERE / A": [
            {
              station: "LOPERE",
              voters: 364
            },
            {
              station: "DANKI",
              voters: 364
            },
            {
              station: "DJIMTILORE",
              voters: 364
            },
            {
              station: "BAKEL",
              voters: 364
            },
            {
              station: "ZANGA",
              voters: 364
            },
            {
              station: "YAMDJIDJIMRE",
              voters: 364
            },
          ],
          "ESPL. CHEFFERIE BORAI MANGO / A": [
            {
              station: "BORAI",
              voters: 1014
            },
            {
              station: "KERARE",
              voters: 507
            },
            {
              station: "TCHAKAMADJE",
              voters: 1059
            },
          ],
          "ESPL. CHEFFERIE DAMBAYE / A": [
            {
              station: "DAMBAYE",
              voters: 378
            },
            {
              station: "HARDEWO",
              voters: 378
            },
            {
              station: "IBBAWO",
              voters: 378
            },
            {
              station: "REGUE",
              voters: 577
            },
          ],
          "ESPL. CHEFFERIE DANKI DJOUTNGO / A": [
            {
              station: "DANKI-DJOUTNGO",
              voters: 237
            },
            {
              station: "DJOUTNGO",
              voters: 496
            },
            {
              station: "MADIDE",
              voters: 616
            },
            {
              station: "DJAOURO",
              voters: 237
            },
            {
              station: "DALIL",
              voters: 237
            },
          ],
          "ESPL. CHEFFERIE DJIDDEL GARRE / A": [
            {
              station: "ADIBE",
              voters: 761
            },
            {
              station: "DJIDDEL",
              voters: 761
            },
            {
              station: "GARRE",
              voters: 5577
            },
          ],
          "ESPL. CHEFFERIE GUIRLE / A": [
            {
              station: "GUIRLE",
              voters: 706
            },
          ],
          "ESPL. CHEFFERIE HIRNANGUEWO / A": [
            {
              station: "YERO",
              voters: 296
            },
            {
              station: "HIRNANGEWO",
              voters: 1035
            },
            {
              station: "ADAMA",
              voters: 1035
            },
          ],
          "ESPL. CHEFFERIE KASSAIWO / A": [
            {
              station: "KASSAIWO",
              voters: 160
            },
            {
              station: "SOUARE",
              voters: 160
            },
          ],
          "ESPL. CHEFFERIE KAWAYA / A": [
            {
              station: "KAWAYA",
              voters: 225
            },
          ],
          "ESPL. CHEFFERIE KORHO / A": [
            {
              station: "KORHO",
              voters: 103
            },
            {
              station: "TOURLI",
              voters: 103
            },
          ],
          "ESPL. CHEFFERIE KOURDAYA / A": [
            {
              station: "KOURDAYA",
              voters: 549
            },
            {
              station: "CENTRE",
              voters: 549
            },
          ],
          "ESPL. CHEFFERIE MADAKA GARRE / A": [
            {
              station: "MADAKA",
              voters: 2001
            },
          ],
          "ESPL. CHEFFERIE MADIDE / A": [
            {
              station: "FEWANGO",
              voters: 379
            },
            {
              station: "TANNEO",
              voters: 580
            },
            {
              station: "MDIDE",
              voters: 379
            },
            {
              station: "TCHOLLIRE",
              voters: 379
            },
            {
              station: "ALI",
              voters: 379
            },
            {
              station: "WOURO-NDJIDDA",
              voters: 379
            },
          ],
          "ESPL. CHEFFERIE MARVAK HAMAN / A": [
            {
              station: "DOURI",
              voters: 249
            },
            {
              station: "MARVAK",
              voters: 249
            },
          ],
          "ESPL. CHEFFERIE MBADDI / A": [
            {
              station: "MBADDI",
              voters: 167
            },
          ],
          "ESPL. CHEFFERIE METCHE / A": [
            {
              station: "DIGUIRYEL",
              voters: 202
            },
            {
              station: "METCHE",
              voters: 202
            },
          ],
          "ESPL. CHEFFERIE MOKOZOUMAI / A": [
            {
              station: "BASGARRE",
              voters: 351
            },
            {
              station: "MOKOZOUMAI",
              voters: 351
            },
            {
              station: "BAKRY",
              voters: 351
            },
          ],
          "ESPL. CHEFFERIE MORORO GARRE / A": [
            {
              station: "MORORO",
              voters: 508
            },
            {
              station: "YONKOLDE",
              voters: 508
            },
          ],
          "ESPL. CHEFFERIE NERBA / A": [
            {
              station: "MORGOYE",
              voters: 220
            },
            {
              station: "NERBA",
              voters: 220
            },
          ],
          "ESPL. CHEFFERIE NGALAGA / A": [
            {
              station: "NGALAGA",
              voters: 168
            },
          ],
          "ESPL. CHEFFERIE NGARAWO / A": [
            {
              station: "DJAFOUNWO",
              voters: 341
            },
            {
              station: "KARAL",
              voters: 341
            },
            {
              station: "NGARAWO",
              voters: 341
            },
          ],
          "ESPL. CHEFFERIE NGOYAWO / A": [
            {
              station: "BEDJI",
              voters: 1650
            },
            {
              station: "MANGO",
              voters: 1799
            },
            {
              station: "BEDJI-BEDJI",
              voters: 550
            },
            {
              station: "KOIRANGA",
              voters: 550
            },
            {
              station: "NGOYAWO",
              voters: 550
            },
            {
              station: "DANNA",
              voters: 550
            },
            {
              station: "GADAM",
              voters: 550
            },
            {
              station: "LAYE",
              voters: 550
            },
          ],
          "ESPL. CHEFFERIE SAKAZAMAI / A": [
            {
              station: "SAKAZAMAI",
              voters: 141
            },
          ],
          "ESPL. CHEFFERIE SAOUDJO / A": [
            {
              station: "GADJAMA",
              voters: 410
            },
            {
              station: "GOURIKI",
              voters: 410
            },
            {
              station: "SAOUDJO",
              voters: 410
            },
          ],
          "ESPL. CHEFFERIE SAWAWO / A": [
            {
              station: "SAWAWO",
              voters: 473
            },
          ],
          "ESPL. CHEFFERIE SEDEK DJADJEL / A": [
            {
              station: "DJADJEL",
              voters: 201
            },
            {
              station: "TAOUROU",
              voters: 201
            },
            {
              station: "GAOULA",
              voters: 201
            },
          ],
          "ESPL. CHEFFERIE TCHOFFOL / A": [
            {
              station: "BADJIWAL",
              voters: 296
            },
            {
              station: "TCHOFFOL",
              voters: 296
            },
          ],
          "ESPL. CHEFFERIE WINDE SEDEK / A": [
            {
              station: "ATIBA",
              voters: 144
            },
            {
              station: "DAKDALAK",
              voters: 144
            },
            {
              station: "TOUPPERE",
              voters: 144
            },
          ],
          "ESPL. CHEFFERIE WOILA MAYO / A": [
            {
              station: "ADJANGAMDA",
              voters: 190
            },
            {
              station: "NGOUMARE",
              voters: 190
            },
            {
              station: "SEDEK",
              voters: 1827
            },
            {
              station: "WOILA",
              voters: 190
            },
            {
              station: "MAYO",
              voters: 190
            },
          ],
          "ESPL. CHEFFERIE WOURO ALADJI / A": [
            {
              station: "ALADJI",
              voters: 172
            },
          ],
          "ESPL. CHEFFERIE WOURO MBAM / A": [
            {
              station: "WOURO-MBAM",
              voters: 94
            },
          ],
          "ESPL. CHEFFERIE WOURO YAYA / A": [
            {
              station: "KATCHELWO",
              voters: 345
            },
            {
              station: "YAYA",
              voters: 345
            },
          ],
          "ESPL. LAMIDAT BOGO GARRE / A": [
            {
              station: "BOGO",
              voters: 1756
            },
          ],
          "ESPL. MOSQUEE ARDJANIRE MAMOUDOU / A": [
            {
              station: "ARDJANIRE",
              voters: 706
            },
            {
              station: "MAMOUDOU",
              voters: 410
            },
            {
              station: "BALANGA",
              voters: 410
            },
            {
              station: "ISSA",
              voters: 930
            },
            {
              station: "RIBAO",
              voters: 410
            },
            {
              station: "WALA",
              voters: 410
            },
            {
              station: "YITE",
              voters: 410
            },
          ],
          "ESPL. MOSQUEE BAOULI ALAGARNORE / A": [
            {
              station: "ALAGARNORE",
              voters: 269
            },
            {
              station: "ALLOUKIROU",
              voters: 269
            },
            {
              station: "BAOULI",
              voters: 1182
            },
            {
              station: "BOUBA",
              voters: 269
            },
            {
              station: "BORAIRE",
              voters: 269
            },
            {
              station: "SANWAR",
              voters: 269
            },
          ],
          "ESPL. MOSQUEE BAOULI DJOUBEIROU / A": [
            {
              station: "DJOUBEIROU",
              voters: 503
            },
          ],
          "ESPL. MOSQUEE MASSOYEL / A": [
            {
              station: "BABADAM",
              voters: 270
            },
            {
              station: "DJAMBOUTOU",
              voters: 270
            },
            {
              station: "MASSOYEL",
              voters: 270
            },
            {
              station: "MOUNGOUSSI",
              voters: 270
            },
            {
              station: "SOURANDE",
              voters: 270
            },
            {
              station: "TCHINALAYE",
              voters: 270
            },
          ],
          "ESPL. MOSQUEE SEDEK WOURO ABBA / A": [
            {
              station: "DJINGUI",
              voters: 59
            },
          ],
          "ESPL. MOSQUEE WOURO MESSERE / A": [
            {
              station: "MESSERE",
              voters: 371
            },
          ],
          "ESPL. MOSQUEE WOURO TCHEKEHI / A": [
            {
              station: "TCHEKEHI",
              voters: 93
            },
          ],
          "GRANDE MOSQUEE BOGO / A": [
            {
              station: "GRANDE",
              voters: 330
            },
            {
              station: "MOSQUE",
              voters: 330
            },
          ],
          "LYCEE DE BOGO / A": [
            {
              station: "KAGAMARI",
              voters: 739
            },
          ],
          "MAGASIN SODECOTON WOURO LIMANE / A": [
            {
              station: "LIMANE",
              voters: 72
            },
          ],
          "MARCHE BALDA / A": [
            {
              station: "BOULARE",
              voters: 149
            },
            {
              station: "MERENGUE",
              voters: 149
            },
            {
              station: "TCHAKAWO",
              voters: 149
            },
            {
              station: "MANDJIBE",
              voters: 149
            },
          ],
          "MARCHE CENTRAL BOGO / A": [
            {
              station: "BONGORWO",
              voters: 954
            },
            {
              station: "GOUDIRE",
              voters: 954
            },
          ],
          "MARCHE DJIDDEL / A": [
            {
              station: "ASSOUALAI",
              voters: 117
            },
            {
              station: "BIRNINGUEL",
              voters: 117
            },
            {
              station: "KOBLON",
              voters: 117
            },
            {
              station: "MATCHABADAL",
              voters: 117
            },
            {
              station: "WAKA",
              voters: 117
            },
          ],
          "SAR/SM / A": [
            {
              station: "DASSINGARRE",
              voters: 416
            },
            {
              station: "NGAWAREWOL",
              voters: 416
            },
            {
              station: "DJOUGOULE",
              voters: 416
            },
            {
              station: "ZAKIA",
              voters: 416
            },
          ],
          "STADE YOLDE / A": [
            {
              station: "DOW",
              voters: 739
            },
            {
              station: "YOLDE",
              voters: 854
            },
            {
              station: "KABALAIRE",
              voters: 739
            },
            {
              station: "MADINARE",
              voters: 739
            },
            {
              station: "SARARE",
              voters: 739
            },
          ],
        },
        "DARGALA": {
          "ECOLE PUBLIQUE ALAKIRE / A": [
            {
              station: "ALAKIRE",
              voters: 209
            },
            {
              station: "LEGGAO",
              voters: 417
            },
            {
              station: "BELLO",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE APPAIDI / A": [
            {
              station: "APAIDI",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE DARGALA / A": [
            {
              station: "DARGALA",
              voters: 2096
            },
            {
              station: "GARRE",
              voters: 5015
            },
            {
              station: "DJAMBOUTOU",
              voters: 1819
            },
            {
              station: "HAYAGA",
              voters: 1819
            },
            {
              station: "KEDELE",
              voters: 1819
            },
            {
              station: "LASKA",
              voters: 1819
            },
            {
              station: "OURO",
              voters: 11851
            },
            {
              station: "HARAKA",
              voters: 1819
            },
            {
              station: "KAI-KAI",
              voters: 1819
            },
            {
              station: "MAL",
              voters: 1819
            },
            {
              station: "SOULEY",
              voters: 1819
            },
          ],
          "ECOLE PUBLIQUE DJABIRE / A": [
            {
              station: "DJABIRE",
              voters: 652
            },
            {
              station: "DJAMNAI",
              voters: 326
            },
            {
              station: "SANGUIROU",
              voters: 326
            },
            {
              station: "GOURO",
              voters: 326
            },
            {
              station: "YONKOLEL",
              voters: 326
            },
          ],
          "ECOLE PUBLIQUE GAI-GAI MAOUNDIRE / A": [
            {
              station: "GAI-GAI",
              voters: 374
            },
            {
              station: "MAOUNDIRE",
              voters: 374
            },
            {
              station: "NGARWAWO",
              voters: 374
            },
          ],
          "ECOLE PUBLIQUE GOUROUM / A": [
            {
              station: "GORAI",
              voters: 754
            },
            {
              station: "FOULBE",
              voters: 377
            },
            {
              station: "KERA",
              voters: 377
            },
            {
              station: "GOUROUM",
              voters: 377
            },
            {
              station: "TADINDOU",
              voters: 377
            },
            {
              station: "WALIDJAM",
              voters: 377
            },
          ],
          "ECOLE PUBLIQUE HARDEO GOLO / A": [
            {
              station: "GOLO",
              voters: 197
            },
            {
              station: "SIRO",
              voters: 197
            },
          ],
          "ECOLE PUBLIQUE HARDEO-KESSOUWO / A": [
            {
              station: "DJABIWO",
              voters: 236
            },
            {
              station: "HARDEO",
              voters: 782
            },
            {
              station: "KESSOUWO",
              voters: 236
            },
          ],
          "ECOLE PUBLIQUE HODANDE / A": [
            {
              station: "HODANDE",
              voters: 856
            },
            {
              station: "WOURO",
              voters: 504
            },
            {
              station: "BAYI",
              voters: 504
            },
          ],
          "ECOLE PUBLIQUE KALAKI / A": [
            {
              station: "DJOUTNGO",
              voters: 431
            },
            {
              station: "KALAKI",
              voters: 431
            },
          ],
          "ECOLE PUBLIQUE MADOULI / A": [
            {
              station: "MADOULI",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE MEREM HARDEWO / A": [
            {
              station: "MEREM",
              voters: 1396
            },
            {
              station: "BAGADJE",
              voters: 349
            },
            {
              station: "HIDJI",
              voters: 349
            },
            {
              station: "KAIGAMA",
              voters: 760
            },
          ],
          "ECOLE PUBLIQUE NGANDARMA / A": [
            {
              station: "BOULOULIWO",
              voters: 467
            },
            {
              station: "KELERE",
              voters: 467
            },
            {
              station: "MBORDAMWO",
              voters: 467
            },
            {
              station: "NGANDARMA",
              voters: 467
            },
          ],
          "ECOLE PUBLIQUE NGASSA / A": [
            {
              station: "NGASSA",
              voters: 316
            },
            {
              station: "ALKALI",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE OURO BOGNO / A": [
            {
              station: "DAWA",
              voters: 214
            },
            {
              station: "BOGNO",
              voters: 214
            },
          ],
          "ECOLE PUBLIQUE OURO-DALLA TAR / A": [
            {
              station: "DALLA",
              voters: 584
            },
            {
              station: "ALI",
              voters: 292
            },
            {
              station: "TAR",
              voters: 292
            },
          ],
          "ECOLE PUBLIQUE OURO-ZANGUI / A": [
            {
              station: "AZALWO",
              voters: 321
            },
            {
              station: "CHEFFERIE",
              voters: 321
            },
          ],
          "ECOLE PUBLIQUE SITTIBRILI / A": [
            {
              station: "SITTIBIRILLI",
              voters: 313
            },
            {
              station: "WALDE",
              voters: 313
            },
            {
              station: "LOFOU",
              voters: 313
            },
          ],
          "ECOLE PUBLIQUE TANNEO / A": [
            {
              station: "DOLWO",
              voters: 265
            },
            {
              station: "TANNEO",
              voters: 265
            },
          ],
          "ECOLE PUBLIQUE TCHABEYEL / A": [
            {
              station: "TCHABELYEL",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE TCHELBIYEL / A": [
            {
              station: "GORFOUNNA",
              voters: 386
            },
            {
              station: "DORE",
              voters: 386
            },
            {
              station: "TCHELBIYEL",
              voters: 386
            },
          ],
          "ECOLE PUBLIQUE TCHOKOLA / A": [
            {
              station: "TCHOKOLA",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE WIRDIWO / A": [
            {
              station: "WIRDIO",
              voters: 704
            },
            {
              station: "MANGO",
              voters: 352
            },
            {
              station: "WIRDIWO",
              voters: 352
            },
            {
              station: "HODANGO",
              voters: 352
            },
          ],
          "ECOLE PUBLIQUE YOLDEO / A": [
            {
              station: "FORLAMY",
              voters: 1056
            },
            {
              station: "KANGALERI",
              voters: 1056
            },
            {
              station: "KARAGADJI",
              voters: 1056
            },
            {
              station: "LAKAPOUTE",
              voters: 1056
            },
            {
              station: "LOUGGA",
              voters: 1056
            },
            {
              station: "BAMDE",
              voters: 1056
            },
            {
              station: "GAOU",
              voters: 1056
            },
            {
              station: "TCHELBIWO",
              voters: 1056
            },
            {
              station: "YAKATAMWO",
              voters: 1056
            },
            {
              station: "YOLDEO",
              voters: 1056
            },
          ],
          "ECOLE PUBLIQUE YOLEL / A": [
            {
              station: "YOLEL",
              voters: 410
            },
          ],
          "ECOLE PUBLIQUE ZOUMAYA LAMORDE / A": [
            {
              station: "DOUBBELWO",
              voters: 293
            },
            {
              station: "GUERTOGALWO",
              voters: 533
            },
            {
              station: "ZANGUI",
              voters: 935
            },
            {
              station: "KOULDOUKI",
              voters: 293
            },
            {
              station: "MAOUNDE",
              voters: 293
            },
            {
              station: "ZOUMAYA",
              voters: 293
            },
            {
              station: "LAMORDE",
              voters: 293
            },
          ],
          "ESPL MOSQUEE OURO MALLOUM / A": [
            {
              station: "DOUNDEHI",
              voters: 85
            },
            {
              station: "MALLOUM",
              voters: 85
            },
          ],
          "ESPL. CHEFFERI OURO MALA / A": [
            {
              station: "MALA",
              voters: 110
            },
          ],
          "ESPL. CHEFFERIE ADOUMARNA / A": [
            {
              station: "ADOUMARNA",
              voters: 80
            },
            {
              station: "ROUNDEO",
              voters: 80
            },
          ],
          "ESPL. CHEFFERIE BINDIRYEL / A": [
            {
              station: "BINDIRYEL",
              voters: 116
            },
          ],
          "ESPL. CHEFFERIE DARGALA WINDE / A": [
            {
              station: "WINDE",
              voters: 277
            },
            {
              station: "DARGALAYEL",
              voters: 277
            },
            {
              station: "TOUPPEO",
              voters: 277
            },
          ],
          "ESPL. CHEFFERIE DJOUTNGO / A": [
            {
              station: "BOUNGUELRE",
              voters: 174
            },
            {
              station: "DJOUTGO",
              voters: 174
            },
            {
              station: "NGARAREWO",
              voters: 174
            },
          ],
          "ESPL. CHEFFERIE DJOWIRE / A": [
            {
              station: "DJOWIRE",
              voters: 124
            },
          ],
          "ESPL. CHEFFERIE GABA GAWOL / A": [
            {
              station: "GABA",
              voters: 329
            },
            {
              station: "GAWOL",
              voters: 329
            },
            {
              station: "WOUROU",
              voters: 329
            },
            {
              station: "DJARMA",
              voters: 329
            },
            {
              station: "ZALAMBI",
              voters: 329
            },
          ],
          "ESPL. CHEFFERIE GASSAYEL FARIKOU / A": [
            {
              station: "GASSAYEL",
              voters: 480
            },
            {
              station: "FARIKOU",
              voters: 240
            },
            {
              station: "KAPIEL",
              voters: 240
            },
            {
              station: "MOUSGOUM",
              voters: 240
            },
          ],
          "ESPL. CHEFFERIE KAHEO / A": [
            {
              station: "KAHEO",
              voters: 384
            },
          ],
          "ESPL. CHEFFERIE KODJELEWO / A": [
            {
              station: "KODJELEO",
              voters: 189
            },
          ],
          "ESPL. CHEFFERIE KOUMAIRE / A": [
            {
              station: "KOUMAIRE",
              voters: 198
            },
          ],
          "ESPL. CHEFFERIE MELEME / A": [
            {
              station: "MELEME",
              voters: 144
            },
          ],
          "ESPL. CHEFFERIE MEMERE / A": [
            {
              station: "MAGUIRAO",
              voters: 388
            },
            {
              station: "MEMERE",
              voters: 388
            },
          ],
          "ESPL. CHEFFERIE OURO BABBA / A": [
            {
              station: "BOUBA",
              voters: 352
            },
            {
              station: "BABBA",
              voters: 208
            },
          ],
          "ESPL. CHEFFERIE OURO BELAL / A": [
            {
              station: "BELAL",
              voters: 156
            },
          ],
          "ESPL. CHEFFERIE OURO DJAM / A": [
            {
              station: "GUIZIGARE",
              voters: 311
            },
            {
              station: "MBANKARA",
              voters: 311
            },
            {
              station: "DJAM",
              voters: 311
            },
          ],
          "ESPL. CHEFFERIE OURO DOMAYO / A": [
            {
              station: "DOMAYO",
              voters: 200
            },
          ],
          "ESPL. CHEFFERIE OURO HITNGO / A": [
            {
              station: "HITNGO",
              voters: 124
            },
          ],
          "ESPL. CHEFFERIE OURO KAIGAMA / A": [
            {
              station: "GALDIMA",
              voters: 149
            },
            {
              station: "TOUPOURI",
              voters: 149
            },
          ],
          "ESPL. CHEFFERIE OURO MAOUNI / A": [
            {
              station: "MAOUNI",
              voters: 111
            },
          ],
          "ESPL. CHEFFERIE OUSSOUR / A": [
            {
              station: "OUSSOUR",
              voters: 128
            },
          ],
          "ESPL. CHEFFERIE ROUFIRDE KAIGAMA / A": [
            {
              station: "ROUFIRDE",
              voters: 262
            },
          ],
          "ESPL. CHEFFERIE TOUPERE / A": [
            {
              station: "KOULIRE",
              voters: 266
            },
            {
              station: "TOUPERE",
              voters: 266
            },
          ],
          "ESPL. CHEFFERIE WAWALA / A": [
            {
              station: "WAWALA",
              voters: 122
            },
          ],
          "ESPL. CHEFFERIE WOULMOYE / A": [
            {
              station: "WOULMOYE",
              voters: 113
            },
          ],
          "ESPL. MOSQUEE OURO BOUKAR / A": [
            {
              station: "BOUKAR",
              voters: 117
            },
          ],
        },
        "GAZAWA": {
          "BUREAU GIC MAYEL NAOUDE / A": [
            {
              station: "EDELWO",
              voters: 494
            },
            {
              station: "MAYEL",
              voters: 867
            },
            {
              station: "NAOUDE",
              voters: 867
            },
            {
              station: "MINGLIAO",
              voters: 494
            },
            {
              station: "OURO",
              voters: 494
            },
            {
              station: "MATAL",
              voters: 494
            },
            {
              station: "PROJET",
              voters: 494
            },
          ],
          "CARREFOUR CLUB / A": [
            {
              station: "SIRATA",
              voters: 613
            },
            {
              station: "KITCHIMATARI",
              voters: 613
            },
            {
              station: "TSHASGAO",
              voters: 613
            },
            {
              station: "WOURO",
              voters: 1925
            },
            {
              station: "GOUDI'EN",
              voters: 613
            },
            {
              station: "NGOBA",
              voters: 613
            },
          ],
          "CARREFOUR GOURELESS / A": [
            {
              station: "DJARMA",
              voters: 633
            },
            {
              station: "KAFTARA",
              voters: 633
            },
          ],
          "CENTRE SANTE GAZAWA / A": [
            {
              station: "OLIWO",
              voters: 616
            },
          ],
          "CENTRE SANTE MASSAKAL KONGKONG / A": [
            {
              station: "KONGONG",
              voters: 348
            },
          ],
          "COMMUNE DE GAZAWA / A": [
            {
              station: "ILDIGOYANG",
              voters: 736
            },
            {
              station: "ZONGOYARE",
              voters: 736
            },
          ],
          "DELEGATION ELEVAGE / A": [
            {
              station: "BRIGADE",
              voters: 259
            },
            {
              station: "GENDARMERIE",
              voters: 259
            },
            {
              station: "LOUMORE",
              voters: 259
            },
            {
              station: "DELEGATION",
              voters: 259
            },
            {
              station: "ELEVAGE",
              voters: 259
            },
          ],
          "ECOLE PUBLIQUE BARZA / A": [
            {
              station: "FOULBE",
              voters: 1830
            },
            {
              station: "BARZAO",
              voters: 496
            },
            {
              station: "GOURELESS",
              voters: 1129
            },
          ],
          "ECOLE PUBLIQUE GAZAWA / A": [
            {
              station: "BOUBOULO",
              voters: 565
            },
            {
              station: "GASSOL",
              voters: 4013
            },
            {
              station: "MATAKAM",
              voters: 565
            },
            {
              station: "GOURODOW",
              voters: 1178
            },
          ],
          "ECOLE PUBLIQUE HODANGO / A": [
            {
              station: "WANDOU",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE IBBAO / A": [
            {
              station: "IBBAO",
              voters: 713
            },
          ],
          "ECOLE PUBLIQUE MASSAKAL HOLOUM / A": [
            {
              station: "MASSAKAL",
              voters: 1598
            },
            {
              station: "BABALDA",
              voters: 511
            },
            {
              station: "HOLOUM",
              voters: 511
            },
          ],
          "ECOLE PUBLIQUE MBANKARA I / A": [
            {
              station: "NASSARAWO",
              voters: 266
            },
            {
              station: "SIMBLAM",
              voters: 266
            },
          ],
          "ECOLE PUBLIQUE MBANKARA II / A": [
            {
              station: "DOURBELEING",
              voters: 545
            },
            {
              station: "MBANKARA",
              voters: 3262
            },
            {
              station: "BANGUI",
              voters: 545
            },
            {
              station: "HODANGO",
              voters: 879
            },
            {
              station: "MAZAWO",
              voters: 545
            },
          ],
          "ECOLE PUBLIQUE MINAWA / A": [
            {
              station: "MINAWA",
              voters: 373
            },
            {
              station: "PAPALAMWO",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE MIZILING / A": [
            {
              station: "MIZILING",
              voters: 431
            },
            {
              station: "WAWALA",
              voters: 371
            },
          ],
          "ECOLE PUBLIQUE POURTAMAI / A": [
            {
              station: "KOUMIWOL",
              voters: 1360
            },
            {
              station: "MOUFOU",
              voters: 680
            },
            {
              station: "POURTAMAI",
              voters: 680
            },
          ],
          "ECOLE PUBLIQUE YOLA MALIKI / A": [
            {
              station: "MAZAWAR",
              voters: 768
            },
            {
              station: "PAPALAM",
              voters: 768
            },
            {
              station: "YOLA",
              voters: 487
            },
            {
              station: "MALIKI",
              voters: 487
            },
          ],
          "ECOLE PUBLIQUE ZOUMBA / A": [
            {
              station: "PALAKONDEL",
              voters: 276
            },
            {
              station: "ZOUMBA",
              voters: 276
            },
          ],
          "ESPL. CHEFFERIE DINGOULA FOULBE / A": [
            {
              station: "DINGOULA",
              voters: 95
            },
          ],
          "ESPL. CHEFFERIE GOUDOURWO / A": [
            {
              station: "GOUDOURWO",
              voters: 866
            },
          ],
          "ESPL. CHEFFERIE ILEL GUIZIGA / A": [
            {
              station: "ILEL",
              voters: 103
            },
            {
              station: "GUIZIGA",
              voters: 1312
            },
          ],
          "ESPL. CHEFFERIE MALIA / A": [
            {
              station: "BANTADJE",
              voters: 916
            },
            {
              station: "BARZA",
              voters: 1412
            },
            {
              station: "GUIZIGUA",
              voters: 916
            },
            {
              station: "ILDINTOUNGOULOUN",
              voters: 916
            },
            {
              station: "MALIA",
              voters: 916
            },
            {
              station: "TCHEKELWO",
              voters: 1652
            },
          ],
          "ESPL. CHEFFERIE MASSAKAL KOULEK / A": [
            {
              station: "KOULEK",
              voters: 228
            },
          ],
          "ESPL. CHEFFERIE MBANKARA IBBAO / A": [
            {
              station: "SALI",
              voters: 365
            },
            {
              station: "MANA",
              voters: 365
            },
            {
              station: "IBBI",
              voters: 365
            },
          ],
          "ESPL. CHEFFERIE MOSSIRAK FOULBE / A": [
            {
              station: "DOMAYO",
              voters: 448
            },
            {
              station: "DALARI",
              voters: 224
            },
            {
              station: "KOIRE",
              voters: 224
            },
            {
              station: "MOSSIRAK",
              voters: 837
            },
          ],
          "ESPL. CHEFFERIE NAREWA / A": [
            {
              station: "DJALINGO",
              voters: 186
            },
            {
              station: "NAREWA",
              voters: 186
            },
          ],
          "ESPL. CHEFFERIE NGAROUA FOULBE / A": [
            {
              station: "DASDEO",
              voters: 433
            },
            {
              station: "NGAROUA",
              voters: 213
            },
          ],
          "ESPL. FACE MOSQUEE KOMBI MAYO / A": [
            {
              station: "KITCHMATARI",
              voters: 566
            },
            {
              station: "PERE-PERE",
              voters: 876
            },
            {
              station: "KOMBI",
              voters: 566
            },
            {
              station: "MAYO",
              voters: 566
            },
          ],
          "ESPL. LAMIDAT / A": [
            {
              station: "GARRE",
              voters: 1091
            },
            {
              station: "GAZAWA",
              voters: 1350
            },
          ],
          "MARCHE DE COTON MAKOUMBA / A": [
            {
              station: "MAKOUMBA",
              voters: 254
            },
          ],
        },
        "MAROUA I": {
          "BIBLIOTHEQUE REGIONALE PILOTE / A": [
            {
              station: "CAMP",
              voters: 386
            },
            {
              station: "CIC",
              voters: 386
            },
          ],
          "CARREFOUR BILMITI (BILIMITI DJEBEO) / A": [
            {
              station: "BILMITI",
              voters: 439
            },
            {
              station: "DJEBEO",
              voters: 220
            },
          ],
          "CENTRE SANTE INTEGRE SALAK / A": [
            {
              station: "NGARAO",
              voters: 260
            },
            {
              station: "CENTRE",
              voters: 260
            },
            {
              station: "SANTE",
              voters: 260
            },
          ],
          "CENTRE SANTE MAKABAYE / A": [
            {
              station: "BORNOUAN",
              voters: 1686
            },
            {
              station: "KOUTDKOUM",
              voters: 1686
            },
            {
              station: "KARAL",
              voters: 1686
            },
          ],
          "COLLEGE SIDDI DJRO / A": [
            {
              station: "CONGORE",
              voters: 1239
            },
            {
              station: "MBOURTA",
              voters: 1388
            },
          ],
          "COMMUNAUTE URBAINE / A": [
            {
              station: "HOTEL",
              voters: 989
            },
            {
              station: "VILLE",
              voters: 989
            },
          ],
          "COMPLEXE SPORTIF / A": [
            {
              station: "GALDIMA",
              voters: 1488
            },
            {
              station: "YERIMA",
              voters: 1641
            },
            {
              station: "DJOUBAIROU",
              voters: 1488
            },
          ],
          "DELEGATION DEPARTEMENTALE DE LA  JEUNESSE / A": [
            {
              station: "BRIGADE",
              voters: 786
            },
            {
              station: "ESCADRON",
              voters: 786
            },
            {
              station: "MOBILE",
              voters: 786
            },
            {
              station: "COMPAGNIE",
              voters: 786
            },
            {
              station: "GENDARMERIE",
              voters: 1572
            },
            {
              station: "LEGION",
              voters: 786
            },
            {
              station: "HOPITAL",
              voters: 786
            },
            {
              station: "GARNISON",
              voters: 786
            },
          ],
          "DELEGATION D\ARRONDISSEMENT  D\AGRICULTURE / A": [
            {
              station: "SECTEUR",
              voters: 770
            },
            {
              station: "MILITAIRE",
              voters: 770
            },
          ],
          "DELEGATION REGIONALE DOMAINES / A": [
            {
              station: "DOMAINES",
              voters: 48
            },
            {
              station: "TOURISME",
              voters: 48
            },
          ],
          "DELEGATION REGIONALE ELEVAGE / A": [
            {
              station: "MISSINGUILEO",
              voters: 1441
            },
            {
              station: "DEL.",
              voters: 619
            },
            {
              station: "REG.",
              voters: 619
            },
            {
              station: "ELEVAGE",
              voters: 523
            },
          ],
          "ECOLE BILINGUE / A": [
            {
              station: "BILINGUE",
              voters: 129
            },
          ],
          "ECOLE FRANCO-ARABE DOMAYO / A": [
            {
              station: "PIDDERE",
              voters: 2023
            },
          ],
          "ECOLE LES CHAMPIONS / A": [
            {
              station: "LES",
              voters: 418
            },
            {
              station: "CHAMPIONS",
              voters: 418
            },
            {
              station: "FCB",
              voters: 418
            },
          ],
          "ECOLE MATERNELLE CNPS / A": [
            {
              station: "MATERNELLE",
              voters: 1515
            },
          ],
          "ECOLE PUBLIQUE BAO HOSSERE I (GAKLE) /  A": [
            {
              station: "GAKLE",
              voters: 142
            },
          ],
          "ECOLE PUBLIQUE BAO HOSSERE II / A": [
            {
              station: "BAO",
              voters: 454
            },
            {
              station: "FARIKOU",
              voters: 227
            },
            {
              station: "HAMADOU",
              voters: 227
            },
          ],
          "ECOLE PUBLIQUE BEGUELE / A": [
            {
              station: "BEGUELE",
              voters: 303
            },
            {
              station: "DINAO",
              voters: 303
            },
          ],
          "ECOLE PUBLIQUE DAKAR / A": [
            {
              station: "MODIBO",
              voters: 190
            },
            {
              station: "YOUSSOUFA",
              voters: 190
            },
            {
              station: "WOILA",
              voters: 190
            },
            {
              station: "MAYO",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE DOULGOU / A": [
            {
              station: "DOUBAZAOU",
              voters: 113
            },
          ],
          "ECOLE PUBLIQUE HARDE / A": [
            {
              station: "BANANA",
              voters: 10076
            },
          ],
          "ECOLE PUBLIQUE KAIGAMA / A": [
            {
              station: "WOURO-TCHEDE",
              voters: 231
            },
            {
              station: "COLLEGE",
              voters: 231
            },
            {
              station: "SABIL",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE KATOUAL / A": [
            {
              station: "DJARENGOL",
              voters: 4452
            },
            {
              station: "ABDOULAYE",
              voters: 318
            },
            {
              station: "AHMADOU",
              voters: 1147
            },
            {
              station: "MAI",
              voters: 318
            },
          ],
          "ECOLE PUBLIQUE MAZA OURO BAH / A": [
            {
              station: "NGUENDEWA",
              voters: 181
            },
            {
              station: "BAH",
              voters: 924
            },
          ],
          "ECOLE PUBLIQUE MOUGOUDI / A": [
            {
              station: "HARDE",
              voters: 336
            },
            {
              station: "BLAKATANG",
              voters: 336
            },
            {
              station: "MOUGOUDI",
              voters: 336
            },
            {
              station: "HOSSERE",
              voters: 790
            },
            {
              station: "SINDILEP",
              voters: 336
            },
            {
              station: "MERI",
              voters: 336
            },
            {
              station: "WALEWOL",
              voters: 336
            },
          ],
          "ECOLE PUBLIQUE NGASSA / A": [
            {
              station: "NGASSA",
              voters: 1460
            },
            {
              station: "IDOWAWO",
              voters: 730
            },
            {
              station: "NGASSAO",
              voters: 730
            },
          ],
          "ECOLE PUBLIQUE PALAOUDI / A": [
            {
              station: "GOUREL",
              voters: 360
            },
            {
              station: "GANDE",
              voters: 360
            },
            {
              station: "PALAOUDI",
              voters: 720
            },
          ],
          "ECOLE PUBLIQUE PALAR I / A": [
            {
              station: "PALAR",
              voters: 4760
            },
          ],
          "ECOLE PUBLIQUE PONT VERT / A": [
            {
              station: "BONGORE",
              voters: 5133
            },
            {
              station: "MANDARA",
              voters: 2605
            },
            {
              station: "TOUPOURI",
              voters: 2736
            },
          ],
          "ECOLE PUBLIQUE SALAK / A": [
            {
              station: "BAINAWARE",
              voters: 1514
            },
            {
              station: "KALWAWO",
              voters: 1254
            },
            {
              station: "KOULOMARE",
              voters: 1254
            },
            {
              station: "SALAK",
              voters: 6062
            },
            {
              station: "ECOLE",
              voters: 2769
            },
            {
              station: "PUBLIQUE",
              voters: 1254
            },
            {
              station: "WOURO",
              voters: 10180
            },
            {
              station: "DJARMA",
              voters: 3588
            },
          ],
          "ECOLE PUBLIQUE YAMDJIDJING / A": [
            {
              station: "YAMDJIDJING",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE YONKOLE / A": [
            {
              station: "YONKOLE",
              voters: 626
            },
          ],
          "ECOLE PUBLIQUE ZILING HARDE / A": [
            {
              station: "DJOUBEIROU",
              voters: 758
            },
          ],
          "ESPL EGLISE CATH. BAO HOSSERE GUIZIGA /  A": [
            {
              station: "TANNEO",
              voters: 368
            },
            {
              station: "ISSA",
              voters: 368
            },
          ],
          "ESPL MAL DAIROU WOURO TCHEDE / A": [
            {
              station: "DAIROU",
              voters: 2001
            },
          ],
          "ESPL. ALH OUMAROU DAKAR OUMAROU / A": [
            {
              station: "OUMAROU",
              voters: 154
            },
          ],
          "ESPL. BA MAMMA DIGUIRWO I DOMAYO / A": [
            {
              station: "DIGUIRWO",
              voters: 468
            },
          ],
          "ESPL. CHEFFERIE KATOUAL / A": [
            {
              station: "DOUBAGALA",
              voters: 944
            },
            {
              station: "SALAMBOULAM",
              voters: 472
            },
          ],
          "ESPL. DJRO AMINOU HASOUMI WOURO  TCHEDE / A": [
            {
              station: "TCHEDE",
              voters: 2580
            },
            {
              station: "AMINOU",
              voters: 426
            },
            {
              station: "HASSOUMI",
              voters: 426
            },
          ],
          "ESPL. DJRO BABA / A": [
            {
              station: "III",
              voters: 695
            },
            {
              station: "DJRO",
              voters: 695
            },
            {
              station: "BABA",
              voters: 695
            },
          ],
          "ESPL. DJRO BOUDOU TCHAKAMADJE / A": [
            {
              station: "BOUDOUGOU",
              voters: 1275
            },
            {
              station: "HARDEO",
              voters: 735
            },
            {
              station: "TCHAKAMADJE",
              voters: 680
            },
            {
              station: "NGOYANG",
              voters: 734
            },
            {
              station: "FOULBE",
              voters: 5200
            },
            {
              station: "GUIZIGA",
              voters: 7772
            },
          ],
          "ESPL. DJRO BOUDOUGOU KATOUAL / A": [
            {
              station: "KATOUAL",
              voters: 1653
            },
            {
              station: "ZEBE",
              voters: 448
            },
          ],
          "ESPL. DJRO BOUDOUGOU MANGO / A": [
            {
              station: "MANGO",
              voters: 980
            },
          ],
          "ESPL. DJRO DAKAR GONI BELLO / A": [
            {
              station: "GONI",
              voters: 175
            },
            {
              station: "BELLO",
              voters: 439
            },
          ],
          "ESPL. DJRO DENGUI FOULBE / A": [
            {
              station: "DENGUI",
              voters: 1642
            },
            {
              station: "MOUFOU",
              voters: 2121
            },
          ],
          "ESPL. DJRO DJAGALAI FOULBE / A": [
            {
              station: "DJAGALAI",
              voters: 222
            },
            {
              station: "DOUGOUF",
              voters: 1031
            },
          ],
          "ESPL. DJRO DJODI FERE / A": [
            {
              station: "DJODI",
              voters: 157
            },
            {
              station: "FERE",
              voters: 157
            },
          ],
          "ESPL. DJRO DOMAYO ARDO AHMADOU / A": [
            {
              station: "ARDO",
              voters: 829
            },
          ],
          "ESPL. DJRO DOMAYO KATOUAL / A": [
            {
              station: "GUINGUIL",
              voters: 103
            },
          ],
          "ESPL. DJRO DOMAYO PATCHIGUINARI / A": [
            {
              station: "PATCHIGUINARI",
              voters: 1306
            },
          ],
          "ESPL. DJRO DOUGOIWO GUIZIGA / A": [
            {
              station: "DOUGOIWO",
              voters: 633
            },
            {
              station: "LAOURE",
              voters: 318
            },
          ],
          "ESPL. DJRO DOURBELING / A": [
            {
              station: "DOURBELING",
              voters: 250
            },
            {
              station: "TAMBANAGUE",
              voters: 383
            },
            {
              station: "SAIDOU",
              voters: 125
            },
          ],
          "ESPL. DJRO FOULBE NGOUMTOUKOI / A": [
            {
              station: "BAGORE",
              voters: 71
            },
          ],
          "ESPL. DJRO GADAMAYO SIDDI / A": [
            {
              station: "GADMAYO",
              voters: 219
            },
            {
              station: "TALA",
              voters: 555
            },
            {
              station: "(DOWEDOU)",
              voters: 219
            },
            {
              station: "GADAMAYO",
              voters: 219
            },
            {
              station: "SIDDI",
              voters: 402
            },
          ],
          "ESPL. DJRO GALA KATOUAL / A": [
            {
              station: "GALA",
              voters: 207
            },
            {
              station: "SAMBO",
              voters: 322
            },
            {
              station: "MAKADA",
              voters: 1893
            },
            {
              station: "YAYA",
              voters: 2046
            },
          ],
          "ESPL. DJRO GOUBEO MESKINE / A": [
            {
              station: "GOUBEO",
              voters: 244
            },
          ],
          "ESPL. DJRO HEDJER / A": [
            {
              station: "HEDJER",
              voters: 245
            },
            {
              station: "LIRINGO",
              voters: 245
            },
          ],
          "ESPL. DJRO HODANGO OUMARA / A": [
            {
              station: "DEMDEM",
              voters: 123
            },
            {
              station: "DIMBILISS",
              voters: 246
            },
            {
              station: "DOULGOU",
              voters: 123
            },
            {
              station: "HODANGO",
              voters: 123
            },
            {
              station: "OUMARA",
              voters: 123
            },
          ],
          "ESPL. DJRO KALWA / A": [
            {
              station: "DEMEDEM",
              voters: 313
            },
            {
              station: "GUIZIGUA",
              voters: 494
            },
            {
              station: "KALWA",
              voters: 313
            },
            {
              station: "MAYEL",
              voters: 570
            },
            {
              station: "BE'I",
              voters: 313
            },
          ],
          "ESPL. DJRO LOUGGA NGADOU / A": [
            {
              station: "DOUDADJIRE",
              voters: 183
            },
            {
              station: "LOUGGA",
              voters: 654
            },
            {
              station: "NGADOU",
              voters: 183
            },
            {
              station: "MOUNDANWO",
              voters: 183
            },
            {
              station: "PALAMA",
              voters: 183
            },
            {
              station: "TCHAKADJAO",
              voters: 183
            },
          ],
          "ESPL. DJRO LOUGGA PAYANDE / A": [
            {
              station: "PAYANDE",
              voters: 471
            },
          ],
          "ESPL. DJRO LOUGGOL / A": [
            {
              station: "LOUGGOL",
              voters: 1588
            },
          ],
          "ESPL. DJRO LOUGGOL MESKINE / A": [
            {
              station: "SALA",
              voters: 354
            },
            {
              station: "KALIAO",
              voters: 354
            },
          ],
          "ESPL. DJRO MAKABAYE BATCHAR / A": [
            {
              station: "MAKABAYE",
              voters: 8435
            },
            {
              station: "BATCHAR",
              voters: 136
            },
          ],
          "ESPL. DJRO MAKABAYE DJAMNAI / A": [
            {
              station: "DJAMNAI",
              voters: 887
            },
          ],
          "ESPL. DJRO MANGALARE / A": [
            {
              station: "MANGALARE",
              voters: 315
            },
            {
              station: "SABONGARI",
              voters: 315
            },
            {
              station: "MATAKAM",
              voters: 315
            },
          ],
          "ESPL. DJRO MASSINIKA DJONGO / A": [
            {
              station: "DJONGO",
              voters: 875
            },
            {
              station: "TCHASDEO",
              voters: 1987
            },
          ],
          "ESPL. DJRO MAYEL DENGUESDJI MANDARA /  A": [
            {
              station: "DEGUESDJI",
              voters: 63
            },
          ],
          "ESPL. DJRO MAYEL DENGUESDJI TOUPOURI /  A": [
            {
              station: "DENGUESDJI",
              voters: 194
            },
            {
              station: "MAL",
              voters: 2195
            },
            {
              station: "MANGA",
              voters: 194
            },
          ],
          "ESPL. DJRO MAZA DJOYWO / A": [
            {
              station: "MAZA",
              voters: 1084
            },
            {
              station: "DJOYEWO",
              voters: 92
            },
            {
              station: "GARGA",
              voters: 92
            },
          ],
          "ESPL. DJRO OUHA DOMAYO / A": [
            {
              station: "DJAORO",
              voters: 772
            },
            {
              station: "OUHA",
              voters: 1544
            },
            {
              station: "BIBLIOTHEQUE",
              voters: 772
            },
            {
              station: "PILOTE",
              voters: 772
            },
          ],
          "ESPL. DJRO PITOA / A": [
            {
              station: "PITOA",
              voters: 536
            },
          ],
          "ESPL. DJRO SOMBOLA SALI / A": [
            {
              station: "MOKORA",
              voters: 169
            },
            {
              station: "SOMBOLA",
              voters: 169
            },
          ],
          "ESPL. DJRO TALIEL / A": [
            {
              station: "TALIEL",
              voters: 342
            },
          ],
          "ESPL. DJRO TAMBANANGUE BOUBA / A": [
            {
              station: "LOUGGUERE",
              voters: 258
            },
            {
              station: "BOULI",
              voters: 258
            },
            {
              station: "BOUBA",
              voters: 258
            },
            {
              station: "DOW",
              voters: 258
            },
          ],
          "ESPL. DJRO TCHOFFA BANI / A": [
            {
              station: "TCHOFFA",
              voters: 528
            },
            {
              station: "BANI",
              voters: 528
            },
            {
              station: "AMADOU",
              voters: 264
            },
          ],
          "ESPL. DJRO TONDEO-KATOUAL / A": [
            {
              station: "TONDEO",
              voters: 176
            },
          ],
          "ESPL. DJRO WAFANGO / A": [
            {
              station: "GUIRAMDJEO",
              voters: 384
            },
            {
              station: "WAFANGO",
              voters: 192
            },
          ],
          "ESPL. DJRO WOURO DJIDDERE / A": [
            {
              station: "DJIDDERE",
              voters: 281
            },
          ],
          "ESPL. DJRO YAOUBA DOGARI / A": [
            {
              station: "YAOUBA",
              voters: 350
            },
            {
              station: "DOGARI",
              voters: 350
            },
          ],
          "ESPL. DJRO YOLDEO SALAK / A": [
            {
              station: "MEDENGUER",
              voters: 557
            },
            {
              station: "YOLDEO",
              voters: 1844
            },
          ],
          "ESPL. DJRO ZAIKA / A": [
            {
              station: "DOYANG",
              voters: 1309
            },
            {
              station: "ZALA",
              voters: 669
            },
            {
              station: "ZAIKA",
              voters: 669
            },
            {
              station: "FALAMA",
              voters: 669
            },
          ],
          "ESPL. DJRO ZILING HAMAN DJODA / A": [
            {
              station: "ZILING",
              voters: 3791
            },
            {
              station: "HAMAN",
              voters: 2481
            },
            {
              station: "DJODA",
              voters: 2267
            },
          ],
          "ESPL. DJRO ZILING MESKINE / A": [
            {
              station: "MBELLARE",
              voters: 338
            },
          ],
          "ESPL. DJRO ZILING VAGAI / A": [
            {
              station: "VAGAI",
              voters: 428
            },
            {
              station: "YATOU",
              voters: 214
            },
          ],
          "ESPL. DJRO ZOULOUM BAOLIWOL / A": [
            {
              station: "ZOULOUM",
              voters: 1454
            },
            {
              station: "BAOLIWOL",
              voters: 1454
            },
          ],
          "ESPL. DJRO ZOURMBAIWO I / A": [
            {
              station: "ZOURMBAIWO",
              voters: 3577
            },
          ],
          "ESPL. ISSA YOUGOUDA PONT VERT / A": [
            {
              station: "DOURSOUGO",
              voters: 650
            },
            {
              station: "FOUNANGUE",
              voters: 816
            },
            {
              station: "PONT",
              voters: 816
            },
            {
              station: "VERT",
              voters: 816
            },
            {
              station: "DOLE",
              voters: 650
            },
          ],
          "ESPL. KAIGAMA ABDOU DJARENGOL / A": [
            {
              station: "PASCALET",
              voters: 1119
            },
          ],
          "ESPL. LAMIDAT MESKINE / A": [
            {
              station: "DOUGGOIWO",
              voters: 2294
            },
            {
              station: "CEMAO",
              voters: 1520
            },
          ],
          "ESPL. LAWANE DAKAR GARRE / A": [
            {
              station: "DAKAR",
              voters: 1503
            },
            {
              station: "GARRE",
              voters: 2778
            },
          ],
          "ESPL. LAWANE SALAK GARRE / A": [
            {
              station: "AEROPORT",
              voters: 1040
            },
          ],
          "ESPL. MODIBO RADJIL DOMAYO / A": [
            {
              station: "RADJIL",
              voters: 278
            },
          ],
          "ESPLANADE MOSQUEE TEVENG / A": [
            {
              station: "TEVENG",
              voters: 344
            },
          ],
          "FOYER CULTUREL / A": [
            {
              station: "BOLOLO",
              voters: 3146
            },
          ],
          "HOTEL DES FINANCES / A": [
            {
              station: "FINANCES",
              voters: 272
            },
          ],
          "IMMEUBLE CNPS / A": [
            {
              station: "INADES-IRAD-CNPS",
              voters: 164
            },
          ],
          "LYCEE DE SALAK / A": [
            {
              station: "BIR",
              voters: 2468
            },
          ],
          "LYCEE MAROUA DOMAYO / A": [
            {
              station: "LYCEE",
              voters: 356
            },
            {
              station: "MAROUA",
              voters: 356
            },
            {
              station: "DOMAYO",
              voters: 42376
            },
            {
              station: "PITOARE",
              voters: 7889
            },
            {
              station: "AGRICULTURE",
              voters: 356
            },
          ],
          "LYCEE MESKINE / A": [
            {
              station: "MESKINE",
              voters: 2788
            },
          ],
          "NGOUMTOUKOI-ESPL. DJRO FOULBE / A": [
            {
              station: "NGOUMTOKOI",
              voters: 408
            },
            {
              station: "GUISIGA",
              voters: 485
            },
          ],
          "SALLE DES FETES 400 PLACE / A": [
            {
              station: "400",
              voters: 4163
            },
            {
              station: "PLACE",
              voters: 4163
            },
          ],
          "SODECOTON / A": [
            {
              station: "SODECOTON",
              voters: 742
            },
          ],
          "TRIBUNAL DE GRANDE INSTANCE / A": [
            {
              station: "COMMISSARIAT",
              voters: 880
            },
            {
              station: "CENTRAL",
              voters: 440
            },
            {
              station: "MRA",
              voters: 440
            },
            {
              station: "EMI-IMMIGRATION",
              voters: 440
            },
          ],
        },
        "MAROUA II": {
          "CENTRE ARTISANAL / A": [
            {
              station: "FOUNANGUE",
              voters: 4205
            },
            {
              station: "GADAMAHOL",
              voters: 2765
            },
            {
              station: "III",
              voters: 1356
            },
          ],
          "CENTRE SANTE ZOKOK / A": [
            {
              station: "BAOULIWOL",
              voters: 561
            },
            {
              station: "MISSINGLEO",
              voters: 561
            },
          ],
          "COMMISSARIAT SPECIAL / A": [
            {
              station: "ESSIR",
              voters: 92
            },
            {
              station: "PERSONNEL",
              voters: 918
            },
            {
              station: "COMMISSARIAT",
              voters: 92
            },
            {
              station: "SPECIAL",
              voters: 92
            },
          ],
          "COUR D'APPEL / A": [
            {
              station: "JUSTICE",
              voters: 145
            },
            {
              station: "ZOULOUM",
              voters: 930
            },
          ],
          "DOGBA-MISSION / A": [
            {
              station: "MISSION",
              voters: 390
            },
          ],
          "ECOLE DES INFIRMIERS / A": [
            {
              station: "DES",
              voters: 681
            },
            {
              station: "AIDES-SOIGNANTS",
              voters: 681
            },
            {
              station: "KOUTBAO",
              voters: 1083
            },
            {
              station: "INFIRMIERS",
              voters: 681
            },
          ],
          "ECOLE FRANCO ARABE / A": [
            {
              station: "FRANCO-ARABE",
              voters: 882
            },
            {
              station: "ENVIRONS",
              voters: 1313
            },
          ],
          "ECOLE MATERNELLE LOPERE / A": [
            {
              station: "LOPERE",
              voters: 4685
            },
            {
              station: "ABDOURAMAN",
              voters: 1533
            },
            {
              station: "YAYA",
              voters: 1533
            },
          ],
          "ECOLE PUBLIQUE DOUALARE / A": [
            {
              station: "DOUALARE",
              voters: 7981
            },
            {
              station: "ECOLE",
              voters: 5594
            },
            {
              station: "PUBLIQUE",
              voters: 2957
            },
          ],
          "ECOLE PUBLIQUE GAYAK / A": [
            {
              station: "BAMIO",
              voters: 548
            },
            {
              station: "FOULBE",
              voters: 1790
            },
            {
              station: "BARRIDJO",
              voters: 274
            },
            {
              station: "BIMARWA",
              voters: 274
            },
            {
              station: "WOURO",
              voters: 842
            },
            {
              station: "ASSIDEWO",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE KAKATARE / A": [
            {
              station: "KAKATARE",
              voters: 868
            },
          ],
          "ECOLE PUBLIQUE PAPATA / A": [
            {
              station: "ANGLESSE",
              voters: 413
            },
            {
              station: "TOUKOUR",
              voters: 413
            },
            {
              station: "HODANDE,",
              voters: 413
            },
            {
              station: "TIMAYA",
              voters: 413
            },
          ],
          "ECOLE PUBLIQUE WIRDIO FOYA / A": [
            {
              station: "SUD",
              voters: 182
            },
            {
              station: "WIRDIO",
              voters: 182
            },
          ],
          "ESPL . YERIMA BAKARI LAMIDO DOUALARE /  A": [
            {
              station: "YERIMA",
              voters: 1363
            },
          ],
          "ESPL DJAOURO SIDDI MAZOU FOUNANGUE  IV / A": [
            {
              station: "BOUSSAOURE",
              voters: 949
            },
            {
              station: "SIDDI",
              voters: 949
            },
          ],
          "ESPL. ALIOUM HAMIDOU MAY FOUNANGUE III  /A": [
            {
              station: "MAY",
              voters: 535
            },
          ],
          "ESPL. DJAOURO FANTA MVOGO MAROUARE  MAT / A": [
            {
              station: "MATAKAM",
              voters: 1227
            },
          ],
          "ESPL. DJAOURO HAROUN BAMARE  NASSARAWO / A": [
            {
              station: "BAMARE",
              voters: 3013
            },
            {
              station: "NASS,",
              voters: 1674
            },
            {
              station: "SARKI",
              voters: 1674
            },
            {
              station: "PAWA",
              voters: 1674
            },
            {
              station: "OUMAROU",
              voters: 1674
            },
            {
              station: "NASSARAO",
              voters: 1339
            },
          ],
          "ESPL. DJAOURO MOGAZANG HAMADOU  TALLA / A": [
            {
              station: "MOGAZANG",
              voters: 1290
            },
            {
              station: "MADAR",
              voters: 326
            },
          ],
          "ESPL. MOSQUEE ATCHEMIRE FOUNANGUE /  A": [
            {
              station: "ATCHEMIRE",
              voters: 753
            },
          ],
          "ESPL. MOSQUEE DJAOURO DANIA  GADAMAHO / A": [
            {
              station: "MAL",
              voters: 927
            },
            {
              station: "WABI",
              voters: 927
            },
          ],
          "ESPLANADE ALH / A": [
            {
              station: "OUMAR",
              voters: 736
            },
            {
              station: "BALARABE",
              voters: 736
            },
            {
              station: "KOUNTCHARE",
              voters: 736
            },
          ],
          "ESPLANADE ALH BA / A": [
            {
              station: "DJOUDANDOU",
              voters: 2154
            },
            {
              station: "ESPL.",
              voters: 3706
            },
            {
              station: "BAKARI",
              voters: 1380
            },
            {
              station: "BABBAWA",
              voters: 419
            },
          ],
          "ESPLANADE ALH NDJI / A": [
            {
              station: "NDJIDDA",
              voters: 1945
            },
            {
              station: "GAWEL",
              voters: 650
            },
          ],
          "ESPLANADE ALIOUM SAWA / A": [
            {
              station: "ALIOUM",
              voters: 1743
            },
            {
              station: "SAWALAM",
              voters: 816
            },
          ],
          "ESPLANADE BABBA GADJAMA GADAMAHOL V  /A": [
            {
              station: "BARMARE",
              voters: 656
            },
          ],
          "ESPLANADE BAH BOUBA DJOUDA / A": [
            {
              station: "BAH",
              voters: 572
            },
            {
              station: "BOUBA",
              voters: 298
            },
          ],
          "ESPLANADE BAPPAGNO / A": [
            {
              station: "ESPL",
              voters: 1439
            },
            {
              station: "BAPPAGNO",
              voters: 1439
            },
            {
              station: "NDJOB",
              voters: 1439
            },
          ],
          "ESPLANADE BELLO / A": [
            {
              station: "AMBASSADE",
              voters: 530
            },
          ],
          "ESPLANADE DJAO BAKARI SAMBO BELALRE /  A": [
            {
              station: "BELALRE",
              voters: 702
            },
          ],
          "ESPLANADE DJAORO LAINDE / A": [
            {
              station: "LAINDE",
              voters: 1236
            },
          ],
          "ESPLANADE DJAOURO ABDOU DOUGGOY I /  A": [
            {
              station: "DOGGOY",
              voters: 316
            },
            {
              station: "DJAORO",
              voters: 2007
            },
            {
              station: "ABDOU",
              voters: 316
            },
          ],
          "ESPLANADE DJAOURO ADIA ANDJOUBAI / A": [
            {
              station: "ADIA",
              voters: 617
            },
            {
              station: "ANDJOUBAI",
              voters: 107
            },
            {
              station: "SALI",
              voters: 381
            },
            {
              station: "SAMADANG",
              voters: 107
            },
          ],
          "ESPLANADE DJAOURO ADIA BORNOUAN / A": [
            {
              station: "BOURNOUAN",
              voters: 193
            },
          ],
          "ESPLANADE DJAOURO ADIA GUIZIGA / A": [
            {
              station: "GUIZIGUA",
              voters: 403
            },
          ],
          "ESPLANADE DJAOURO BIRNIGUEL  BIRNIGUEL / A": [
            {
              station: "BIRNIGUEL",
              voters: 95
            },
            {
              station: "NGOURORE",
              voters: 190
            },
            {
              station: "NASSOUROU",
              voters: 95
            },
          ],
          "ESPLANADE DJAOURO BOULOULI / A": [
            {
              station: "BOULOULI",
              voters: 600
            },
            {
              station: "GADJAMA",
              voters: 300
            },
            {
              station: "TCHOFFA",
              voters: 300
            },
            {
              station: "HODANDE",
              voters: 1870
            },
          ],
          "ESPLANADE DJAOURO DABANADOU / A": [
            {
              station: "DABANADOU",
              voters: 411
            },
            {
              station: "BELLO",
              voters: 667
            },
            {
              station: "MASSA",
              voters: 137
            },
            {
              station: "RAWANDOU",
              voters: 137
            },
          ],
          "ESPLANADE DJAOURO DJOUNDE  MAOUNDIWO / A": [
            {
              station: "DJOUNDE",
              voters: 218
            },
            {
              station: "MAOUDIWO",
              voters: 218
            },
          ],
          "ESPLANADE DJAOURO DOGA MAOUNDE / A": [
            {
              station: "DOGA",
              voters: 657
            },
            {
              station: "MAOUNDE",
              voters: 657
            },
            {
              station: "GARRE",
              voters: 2406
            },
            {
              station: "GUIZIGA",
              voters: 2199
            },
            {
              station: "MOUFFOU",
              voters: 445
            },
          ],
          "ESPLANADE DJAOURO DOGBA PAPATARE / A": [
            {
              station: "BONGA",
              voters: 99
            },
            {
              station: "PAPATARE",
              voters: 198
            },
            {
              station: "DOGBA",
              voters: 3058
            },
          ],
          "ESPLANADE DJAOURO DOLDOLDEWO / A": [
            {
              station: "DOLDOLDEWO",
              voters: 226
            },
          ],
          "ESPLANADE DJAOURO DOUNDERE / A": [
            {
              station: "DJOUNDERE",
              voters: 87
            },
            {
              station: "FOFTOUROU",
              voters: 87
            },
            {
              station: "OUMARA",
              voters: 87
            },
          ],
          "ESPLANADE DJAOURO DOURSOUNGOWO / A": [
            {
              station: "DOURSOUNGOWO",
              voters: 274
            },
            {
              station: "GAYAK",
              voters: 1073
            },
            {
              station: "SINDIGAWO",
              voters: 274
            },
            {
              station: "OURO",
              voters: 274
            },
            {
              station: "SAMBO",
              voters: 274
            },
          ],
          "ESPLANADE DJAOURO FOYA DJALINGO / A": [
            {
              station: "MANGAVE",
              voters: 1568
            },
            {
              station: "FOYA",
              voters: 779
            },
          ],
          "ESPLANADE DJAOURO GADA KARAL DOGBA /  A": [
            {
              station: "GADA",
              voters: 270
            },
            {
              station: "KARAL",
              voters: 177
            },
            {
              station: "NANIDJAM",
              voters: 177
            },
            {
              station: "TIMINI",
              voters: 177
            },
          ],
          "ESPLANADE DJAOURO GADA TCHOUKOL / A": [
            {
              station: "TCHOUKOL",
              voters: 93
            },
            {
              station: "LOWOL",
              voters: 936
            },
            {
              station: "DONG",
              voters: 279
            },
            {
              station: "FAGOU",
              voters: 93
            },
            {
              station: "KAWA",
              voters: 93
            },
            {
              station: "MASSAI",
              voters: 93
            },
          ],
          "ESPLANADE DJAOURO GAYAKRE FOULBE / A": [
            {
              station: "GAYAKRE",
              voters: 328
            },
            {
              station: "MALIDOU",
              voters: 164
            },
          ],
          "ESPLANADE DJAOURO KOSSEWA BARMARE /  A": [
            {
              station: "KOSSEWA",
              voters: 977
            },
            {
              station: "AKOULI",
              voters: 90
            },
          ],
          "ESPLANADE DJAOURO LOWOL DIGUA  MOUFOU / A": [
            {
              station: "DIGA",
              voters: 657
            },
          ],
          "ESPLANADE DJAOURO MANGAVE DOW  BOUWOL / A": [
            {
              station: "DOW",
              voters: 462
            },
            {
              station: "BOUWOL",
              voters: 462
            },
          ],
          "ESPLANADE DJAOURO MANGAVE HASSANA /  A": [
            {
              station: "HASSANA",
              voters: 183
            },
          ],
          "ESPLANADE DJAOURO MANGAVE IMANOU / A": [
            {
              station: "MAGAVE",
              voters: 315
            },
            {
              station: "IMAMOU",
              voters: 315
            },
            {
              station: "KOTOKO",
              voters: 315
            },
            {
              station: "MAROUARE",
              voters: 3140
            },
          ],
          "ESPLANADE DJAOURO MANGAVE WOURO  HAYATOU / A": [
            {
              station: "DJIBIRE",
              voters: 242
            },
          ],
          "ESPLANADE DJAOURO MAOUNDIWO / A": [
            {
              station: "MAOUNDIWO",
              voters: 597
            },
          ],
          "ESPLANADE DJAOURO MASSOURDOUBA / A": [
            {
              station: "MASSOURDOUBA",
              voters: 204
            },
          ],
          "ESPLANADE DJAOURO MAYEL FO'OUROU / A": [
            {
              station: "AMBIRI",
              voters: 206
            },
            {
              station: "FO'OUROU",
              voters: 206
            },
            {
              station: "ATOUR",
              voters: 206
            },
          ],
          "ESPLANADE DJAOURO MAYEL IBBE / A": [
            {
              station: "IBBE",
              voters: 1546
            },
          ],
          "ESPLANADE DJAOURO MAZANGAI  MANDARARE / A": [
            {
              station: "MAZANGAI",
              voters: 347
            },
            {
              station: "MANDARARE",
              voters: 204
            },
          ],
          "ESPLANADE DJAOURO MOGAZANG MAMA  KARRE / A": [
            {
              station: "MAMA",
              voters: 128
            },
            {
              station: "KARRE",
              voters: 128
            },
            {
              station: "WATCHAHAI",
              voters: 128
            },
            {
              station: "WAYATA",
              voters: 128
            },
          ],
          "ESPLANADE DJAOURO MOGAZANG SAIDI / A": [
            {
              station: "GOAKA",
              voters: 191
            },
            {
              station: "SAIDI",
              voters: 191
            },
          ],
          "ESPLANADE DJAOURO NOUHOU BILALI  DOUAL / A": [
            {
              station: "DJAOURO",
              voters: 2840
            },
            {
              station: "NOUHOU",
              voters: 331
            },
            {
              station: "BILALI",
              voters: 331
            },
          ],
          "ESPLANADE DJAOURO SOUKOUNGO  MANDARAWO / A": [
            {
              station: "WARIBAI",
              voters: 167
            },
            {
              station: "MANDARAWO",
              voters: 167
            },
          ],
          "ESPLANADE DJAOURO SOUKOUNGO GONI  PAPATA / A": [
            {
              station: "BOUBOULI",
              voters: 205
            },
            {
              station: "HAMAN",
              voters: 614
            },
            {
              station: "SALMAN",
              voters: 205
            },
            {
              station: "COMICE",
              voters: 205
            },
            {
              station: "SOUKOUNGO",
              voters: 720
            },
            {
              station: "GONI",
              voters: 205
            },
            {
              station: "DJODA",
              voters: 205
            },
          ],
          "ESPLANADE DJAOURO SOUKOUNGO NAIBI /  A": [
            {
              station: "KOUTARADJIL",
              voters: 143
            },
            {
              station: "NAIBI",
              voters: 143
            },
          ],
          "ESPLANADE DJAOURO TCHABA FOULBE / A": [
            {
              station: "TCHABA",
              voters: 726
            },
          ],
          "ESPLANADE DJAOURO TCHAMPITINGA  FOULBE / A": [
            {
              station: "TCHAMPITINGA",
              voters: 638
            },
          ],
          "ESPLANADE DJAOURO WALASSA / A": [
            {
              station: "BOUDOUGOU",
              voters: 287
            },
            {
              station: "FORLAMIYEL",
              voters: 287
            },
            {
              station: "LOUGGOL",
              voters: 287
            },
            {
              station: "DJANGAR",
              voters: 287
            },
            {
              station: "MAGAOULA",
              voters: 574
            },
            {
              station: "WALASSA",
              voters: 287
            },
          ],
          "ESPLANADE DJAOURO WOURO ABBA  HALLOUNDOU / A": [
            {
              station: "MAGASSE",
              voters: 120
            },
            {
              station: "ABBA",
              voters: 120
            },
            {
              station: "HALLOUNDOU",
              voters: 120
            },
          ],
          "ESPLANADE DJAOURO WOURO WAMDE / A": [
            {
              station: "TCHOUDANGOL",
              voters: 143
            },
            {
              station: "WORO",
              voters: 143
            },
            {
              station: "WAMDE",
              voters: 143
            },
          ],
          "ESPLANADE DJAOURO YERIMA BACHIROU  KOUT / A": [
            {
              station: "BACHIROU",
              voters: 402
            },
          ],
          "ESPLANADE DJAOURO YOLDE  LOUGGEREWO / A": [
            {
              station: "YOLDE",
              voters: 144
            },
            {
              station: "ARDO",
              voters: 72
            },
            {
              station: "BOULI",
              voters: 72
            },
            {
              station: "LOUGGUEREWO",
              voters: 72
            },
          ],
          "ESPLANADE DJRO ATCHINANG WOURNDE I /  A": [
            {
              station: "WOURNDE",
              voters: 1863
            },
          ],
          "ESPLANADE DJRO NDJIDDA TAMOU  BALGARE I / A": [
            {
              station: "BALGARE",
              voters: 944
            },
          ],
          "ESPLANADE DJRO OUMAROU ZAWAYE / A": [
            {
              station: "DOUNDERE",
              voters: 204
            },
            {
              station: "MODI",
              voters: 204
            },
            {
              station: "ZAWAYE",
              voters: 204
            },
          ],
          "ESPLANADE GALDJADAI M / A": [
            {
              station: "GALDJADAI",
              voters: 286
            },
          ],
          "ESPLANADE HADJA IZZA DOUALA / A": [
            {
              station: "ESPLANADE",
              voters: 942
            },
            {
              station: "HADJA",
              voters: 942
            },
            {
              station: "IZZA",
              voters: 942
            },
          ],
          "ESPLANADE HAMADOU GOU / A": [
            {
              station: "ESPL,",
              voters: 4555
            },
            {
              station: "HAMADOU",
              voters: 1435
            },
            {
              station: "GOURVI",
              voters: 700
            },
          ],
          "ESPLANADE HAYATOU / A": [
            {
              station: "HAYATOU",
              voters: 499
            },
            {
              station: "MAZOU",
              voters: 1206
            },
          ],
          "ESPLANADE LAWANAT DOGBA / A": [
            {
              station: "ADJATANG",
              voters: 781
            },
            {
              station: "MOUFOU",
              voters: 4333
            },
            {
              station: "DOMAYO",
              voters: 1171
            },
            {
              station: "BOUDE",
              voters: 781
            },
            {
              station: "HODANGO",
              voters: 1517
            },
            {
              station: "HIDIGUIR",
              voters: 781
            },
            {
              station: "MAYEL",
              voters: 2775
            },
            {
              station: "MOTORSOLO",
              voters: 781
            },
          ],
          "ESPLANADE LAWANE PAPATA / A": [
            {
              station: "PAPATA",
              voters: 472
            },
            {
              station: "GARRE,",
              voters: 472
            },
          ],
          "ESPLANADE MOSQUEE AMINOU AD / A": [
            {
              station: "DIGUIRWO",
              voters: 3707
            },
            {
              station: "MOSQUEE",
              voters: 1943
            },
            {
              station: "AMINO",
              voters: 673
            },
            {
              station: "ADAMA",
              voters: 673
            },
          ],
          "ESPLANADE MOSQUEE LAMIDO PE / A": [
            {
              station: "LAMIDO",
              voters: 2231
            },
            {
              station: "PETTE",
              voters: 1270
            },
          ],
          "FOUNANGUE-ECOLE MATERNELLE / A": [
            {
              station: "MATERNELLE",
              voters: 393
            },
          ],
          "LAMIDAT MAROUA / A": [
            {
              station: "BONGORE",
              voters: 612
            },
          ],
          "MAIRIE MAROUA IIE / A": [
            {
              station: "AES",
              voters: 93
            },
            {
              station: "SONNEL",
              voters: 93
            },
            {
              station: "MAIRIE",
              voters: 93
            },
            {
              station: "MAROUA",
              voters: 93
            },
            {
              station: "PERSONNELS",
              voters: 305
            },
            {
              station: "HOPITAL",
              voters: 93
            },
            {
              station: "REGIONAL",
              voters: 93
            },
            {
              station: "ZOKOK",
              voters: 2092
            },
          ],
          "MUSEE D'ART LOCAL / A": [
            {
              station: "CENTRE",
              voters: 431
            },
            {
              station: "ARTISANAT",
              voters: 431
            },
          ],
          "PRISON CENTRALE MAROUA / A": [
            {
              station: "PRISON",
              voters: 212
            },
            {
              station: "FAMILLES",
              voters: 212
            },
          ],
          "SERVICES DU GOUVERNEUR / A": [
            {
              station: "SERVICES",
              voters: 305
            },
            {
              station: "GOUVERNEUR,",
              voters: 305
            },
            {
              station: "CAMPOST",
              voters: 305
            },
          ],
        },
        "MAROUA III": {
          "BUREAU SYNDICAT GARA ROUTIERE / A": [
            {
              station: "GARE",
              voters: 806
            },
            {
              station: "ROUTIRE",
              voters: 806
            },
          ],
          "CES DE BALAZA ALCALI / A": [
            {
              station: "ADJIT",
              voters: 189
            },
            {
              station: "BALAZA",
              voters: 3747
            },
            {
              station: "MASSA",
              voters: 370
            },
            {
              station: "DIGUIR",
              voters: 830
            },
            {
              station: "ABOUL",
              voters: 189
            },
            {
              station: "GADIRE",
              voters: 189
            },
            {
              station: "GUIZIGARE",
              voters: 189
            },
            {
              station: "MOLKORE",
              voters: 189
            },
            {
              station: "WOURO",
              voters: 20073
            },
            {
              station: "ADAMA",
              voters: 1733
            },
            {
              station: "MAL",
              voters: 1884
            },
            {
              station: "WABI",
              voters: 189
            },
          ],
          "COLLEGE ABOU DAOUD / A": [
            {
              station: "GRANDE",
              voters: 1688
            },
            {
              station: "MOSQUEE",
              voters: 1688
            },
            {
              station: "DOUGUOI",
              voters: 844
            },
          ],
          "COLLEGE PRIVE ISLAMIQUE ZAID / A": [
            {
              station: "SIRATARE",
              voters: 2955
            },
            {
              station: "TCHASDEO",
              voters: 2584
            },
            {
              station: "YERO",
              voters: 1854
            },
            {
              station: "DANEDJI",
              voters: 1847
            },
            {
              station: "DOURMA",
              voters: 1874
            },
            {
              station: "MADJDERE",
              voters: 1566
            },
            {
              station: "NDJARENDI",
              voters: 1566
            },
          ],
          "COLLEGE PROTESTANT DE MAROUA / A": [
            {
              station: "MINERAH",
              voters: 498
            },
          ],
          "ECOLE BILINGUE LA REFERENCE / A": [
            {
              station: "DIX",
              voters: 888
            },
            {
              station: "VILLAS",
              voters: 888
            },
            {
              station: "LEGION",
              voters: 888
            },
            {
              station: "SARKI",
              voters: 888
            },
            {
              station: "YAYI",
              voters: 888
            },
            {
              station: "YAYA",
              voters: 888
            },
          ],
          "ECOLE PRIVE LAIC HAMADOU MOUSTAPHA /  A": [
            {
              station: "ECOLE",
              voters: 1097
            },
            {
              station: "MOUSTAPHA",
              voters: 445
            },
          ],
          "ECOLE PUBLIQUE BALAZA LAWANE / A": [
            {
              station: "BAGARMIRE",
              voters: 737
            },
            {
              station: "DJARENGOL",
              voters: 4074
            },
            {
              station: "LAWANE",
              voters: 2635
            },
            {
              station: "GARRE",
              voters: 5778
            },
            {
              station: "GALDIMA",
              voters: 1428
            },
          ],
          "ECOLE PUBLIQUE BIRIWO / A": [
            {
              station: "BIRIWO",
              voters: 174
            },
            {
              station: "KODEK",
              voters: 3257
            },
          ],
          "ECOLE PUBLIQUE DE BALAZA ALCALI / A": [
            {
              station: "ALCALI",
              voters: 1158
            },
          ],
          "ECOLE PUBLIQUE DE DOUGGOY / A": [
            {
              station: "CENTRE",
              voters: 1695
            },
            {
              station: "SANTE",
              voters: 1695
            },
            {
              station: "DJAMA'A",
              voters: 1834
            },
          ],
          "ECOLE PUBLIQUE DJOULGOUF / A": [
            {
              station: "KARDIDJI",
              voters: 459
            },
          ],
          "ECOLE PUBLIQUE DOURSOUNGO / A": [
            {
              station: "PUBLIQUE",
              voters: 652
            },
          ],
          "ECOLE PUBLIQUE IBBA KAIGAMA / A": [
            {
              station: "ASTADJAM",
              voters: 281
            },
            {
              station: "BOULOUDEO",
              voters: 281
            },
            {
              station: "KAIGAMA",
              voters: 787
            },
            {
              station: "TANNEO",
              voters: 533
            },
          ],
          "ECOLE PUBLIQUE KAOUDJIGA / A": [
            {
              station: "KAOUDJIGA",
              voters: 314
            },
          ],
          "ECOLE PUBLIQUE KONGOLA DJIDDEO / A": [
            {
              station: "NDJIDDEO",
              voters: 856
            },
          ],
          "ECOLE PUBLIQUE KONGOLA DJOLAO / A": [
            {
              station: "IBBAO",
              voters: 1132
            },
            {
              station: "DJOLAO",
              voters: 1384
            },
            {
              station: "ZOULOUM",
              voters: 1132
            },
          ],
          "ECOLE PUBLIQUE KONGOLA SAID / A": [
            {
              station: "SAID",
              voters: 875
            },
            {
              station: "NOUDE",
              voters: 522
            },
            {
              station: "FOULBE",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE NGABA MANGO / A": [
            {
              station: "NGABA",
              voters: 1506
            },
            {
              station: "MANGO",
              voters: 699
            },
          ],
          "ECOLE PUBLIQUE TOUPPERE / A": [
            {
              station: "TOUPPERE",
              voters: 623
            },
          ],
          "ECOLE PUBLIQUE WOURO LOPE / A": [
            {
              station: "LOPE",
              voters: 531
            },
          ],
          "ECOLE PUBLIQUE YAERE WOURO MALLOUM  /A": [
            {
              station: "KOUMBO",
              voters: 420
            },
            {
              station: "OLDOU",
              voters: 420
            },
            {
              station: "MAI",
              voters: 420
            },
            {
              station: "MALLOUM",
              voters: 420
            },
          ],
          "ECOLE PUBLIQUE YAMBARAM / A": [
            {
              station: "DJOUTNGO",
              voters: 637
            },
            {
              station: "KATCHALLA",
              voters: 328
            },
            {
              station: "YAMBARAM",
              voters: 681
            },
          ],
          "ECOLE PUBLIQUE YONKOLDE / A": [
            {
              station: "YONKOLDE",
              voters: 42
            },
          ],
          "EM BCS / A": [
            {
              station: "BCS",
              voters: 358
            },
          ],
          "ENIEG / A": [
            {
              station: "ENIEG",
              voters: 599
            },
          ],
          "ENS DE MAROUA / A": [
            {
              station: "CAMPUS",
              voters: 195
            },
            {
              station: "ENS",
              voters: 195
            },
          ],
          "EPLS BAH AYOUBA / A": [
            {
              station: "BAH",
              voters: 1378
            },
            {
              station: "AYOUBA",
              voters: 770
            },
          ],
          "ESPL. ALH KARI / A": [
            {
              station: "BAKARI",
              voters: 4114
            },
            {
              station: "ALH",
              voters: 1362
            },
            {
              station: "KARI",
              voters: 1318
            },
          ],
          "ESPL. ARDO FADARE WALANANGUE / A": [
            {
              station: "DJIBIRE",
              voters: 313
            },
            {
              station: "FADARE",
              voters: 626
            },
            {
              station: "WALANANGUE",
              voters: 313
            },
            {
              station: "ABOU",
              voters: 313
            },
            {
              station: "AMMA",
              voters: 313
            },
          ],
          "ESPL. ARDO KONGOLA GOUBEO / A": [
            {
              station: "GOUBEO",
              voters: 751
            },
            {
              station: "DJIDDEO",
              voters: 2517
            },
          ],
          "ESPL. DJAORO ABBA TCHADJI SIDDI / A": [
            {
              station: "ABBA",
              voters: 1729
            },
            {
              station: "TCHADJI",
              voters: 392
            },
            {
              station: "BASSIROU",
              voters: 196
            },
            {
              station: "SIDDI",
              voters: 1084
            },
            {
              station: "MAHEL",
              voters: 196
            },
            {
              station: "TOUKOUR",
              voters: 479
            },
          ],
          "ESPL. DJAORO AWIMARE / A": [
            {
              station: "AWIMARE",
              voters: 85
            },
            {
              station: "MEREM",
              voters: 85
            },
            {
              station: "DJABIRE",
              voters: 85
            },
          ],
          "ESPL. DJAORO BAKOUREIHI HASSANA / A": [
            {
              station: "BAKOUREIHI",
              voters: 314
            },
            {
              station: "HAMADOU",
              voters: 3728
            },
            {
              station: "HASSANA",
              voters: 157
            },
          ],
          "ESPL. DJAORO BALAM / A": [
            {
              station: "BALAM",
              voters: 230
            },
            {
              station: "DJOULGOUF",
              voters: 1409
            },
            {
              station: "TORDJO",
              voters: 143
            },
          ],
          "ESPL. DJAORO DIGUIR HODANGO / A": [
            {
              station: "HODANDE",
              voters: 626
            },
            {
              station: "HODANGO",
              voters: 810
            },
          ],
          "ESPL. DJAORO DJARENGOL ALIOUM / A": [
            {
              station: "ALIOUM",
              voters: 1792
            },
          ],
          "ESPL. DJAORO DJARENGOL BANTADJE / A": [
            {
              station: "BANTADJE",
              voters: 329
            },
            {
              station: "DALIL",
              voters: 457
            },
          ],
          "ESPL. DJAORO DJARENGOL SAMBO / A": [
            {
              station: "SAMBO",
              voters: 553
            },
          ],
          "ESPL. DJAORO DJEDJEBE AMINOU / A": [
            {
              station: "AMINOU",
              voters: 751
            },
          ],
          "ESPL. DJAORO DJEDJEBE DALIL / A": [
            {
              station: "DJEDJEBE",
              voters: 330
            },
            {
              station: "NGASSA",
              voters: 128
            },
            {
              station: "NGADOU",
              voters: 128
            },
          ],
          "ESPL. DJAORO HODANGO MINIMINI / A": [
            {
              station: "ARABO",
              voters: 160
            },
            {
              station: "MINI-MINI",
              voters: 160
            },
          ],
          "ESPL. DJAORO IBBA MODOYEL / A": [
            {
              station: "MODOYEL",
              voters: 309
            },
            {
              station: "WIRDIWO",
              voters: 309
            },
          ],
          "ESPL. DJAORO KARAGARI DJEIDO / A": [
            {
              station: "DJEIDO",
              voters: 218
            },
            {
              station: "FILINGO",
              voters: 218
            },
          ],
          "ESPL. DJAORO KODEK WOURO ABBA / A": [
            {
              station: "YAERE",
              voters: 1568
            },
            {
              station: "IBBA",
              voters: 2640
            },
          ],
          "ESPL. DJAORO MALAM ATIKOU / A": [
            {
              station: "MALAM",
              voters: 287
            },
            {
              station: "ATIKOU",
              voters: 98
            },
            {
              station: "WAZAO",
              voters: 189
            },
          ],
          "ESPL. DJAORO MAOUNDIRE / A": [
            {
              station: "MAOUNDIRE",
              voters: 64
            },
          ],
          "ESPL. DJAORO NDABALA / A": [
            {
              station: "NDABALA",
              voters: 115
            },
          ],
          "ESPL. DJAORO NDJIMTILO / A": [
            {
              station: "NDJIMTILO",
              voters: 53
            },
          ],
          "ESPL. DJAORO NGABA TOWNGUEL / A": [
            {
              station: "TOWNGUEL",
              voters: 128
            },
          ],
          "ESPL. DJAORO NGABA WOURO LEGGA / A": [
            {
              station: "LEGGA",
              voters: 160
            },
            {
              station: "TAMBADJAM",
              voters: 281
            },
          ],
          "ESPL. DJAORO NGABA YONKOLE / A": [
            {
              station: "SALAKRE",
              voters: 147
            },
            {
              station: "YONKOLE",
              voters: 147
            },
          ],
          "ESPL. DJAORO SIRATAWO / A": [
            {
              station: "SIRATAWO",
              voters: 127
            },
          ],
          "ESPL. DJAORO TANNEO KONGOLA DJOLAO /  A": [
            {
              station: "MANAWACHI",
              voters: 252
            },
          ],
          "ESPL. DJAORO TCHALLOUDI MANGO / A": [
            {
              station: "TCHALLODI",
              voters: 317
            },
            {
              station: "BOKKIRE",
              voters: 317
            },
            {
              station: "ANSARRE",
              voters: 317
            },
          ],
          "ESPL. DJAORO WOURO ADOUM / A": [
            {
              station: "ADOUM",
              voters: 332
            },
          ],
          "ESPL. DJAORO WOURO ARDO / A": [
            {
              station: "ARDO",
              voters: 299
            },
            {
              station: "FAMARO",
              voters: 299
            },
          ],
          "ESPL. DJAORO WOURO BABBA / A": [
            {
              station: "HARDE",
              voters: 536
            },
            {
              station: "SIYAMA",
              voters: 536
            },
            {
              station: "BABBA",
              voters: 956
            },
            {
              station: "YOLEL",
              voters: 536
            },
          ],
          "ESPL. DJAORO WOURO BOGNO BALAZA / A": [
            {
              station: "GARDAWATCHI",
              voters: 285
            },
            {
              station: "HOPPORE",
              voters: 285
            },
            {
              station: "BOGNO",
              voters: 285
            },
            {
              station: "MAMMA",
              voters: 285
            },
          ],
          "ESPL. DJAORO WOURO DADY / A": [
            {
              station: "BALGA",
              voters: 132
            },
            {
              station: "BANANNA",
              voters: 132
            },
            {
              station: "DADY",
              voters: 132
            },
          ],
          "ESPL. DJAORO WOURO DJODJE / A": [
            {
              station: "DOMAYO",
              voters: 110
            },
            {
              station: "YERIMA",
              voters: 110
            },
            {
              station: "DJODJE",
              voters: 110
            },
          ],
          "ESPL. DJAORO WOURO GUIRING / A": [
            {
              station: "GUIRING",
              voters: 172
            },
          ],
          "ESPL. DJAORO WOURO KAOU MANOU / A": [
            {
              station: "NGOURORE",
              voters: 288
            },
            {
              station: "KAOU",
              voters: 288
            },
            {
              station: "MANOU",
              voters: 288
            },
          ],
          "ESPL. DJAORO WOURO KOUTOULMI / A": [
            {
              station: "GUENDEDJI",
              voters: 257
            },
            {
              station: "KOUTOULMI",
              voters: 257
            },
          ],
          "ESPL. DJAORO WOURO LOUGGA / A": [
            {
              station: "LOUGGA",
              voters: 288
            },
            {
              station: "YONKOLA",
              voters: 288
            },
          ],
          "ESPL. DJAORO WOURO MAYO / A": [
            {
              station: "MAYO",
              voters: 196
            },
          ],
          "ESPL. DJAORO WOURO POLLE / A": [
            {
              station: "POLLE",
              voters: 165
            },
          ],
          "ESPL. DJAORO WOURO SEYAR / A": [
            {
              station: "SEYAR",
              voters: 109
            },
          ],
          "ESPL. DJAORO YAGA WOURO BAH / A": [
            {
              station: "MATFAIRE",
              voters: 276
            },
            {
              station: "YAGA",
              voters: 552
            },
            {
              station: "DJALAKIO",
              voters: 276
            },
          ],
          "ESPL. GRANDE MOSQUEE DIGUIR BA'AWO / A": [
            {
              station: "BA'AWO",
              voters: 137
            },
          ],
          "ESPL. GRANDE MOSQUEE DIGUIR SALI / A": [
            {
              station: "SALI",
              voters: 1822
            },
          ],
          "ESPL. GRDE MOSQUEE KARAGARI AMINOU /  A": [
            {
              station: "KARAGARI",
              voters: 1037
            },
            {
              station: "TCHALLOUDI",
              voters: 1269
            },
            {
              station: "WAZIRI",
              voters: 318
            },
          ],
          "ESPL. MOSQUEE ABDOU NGARAKI / A": [
            {
              station: "DOUGGOY",
              voters: 15935
            },
            {
              station: "ABDOU",
              voters: 596
            },
            {
              station: "NGARAKI",
              voters: 596
            },
          ],
          "ESPL.ALHADJI ADAMOU DIA / A": [
            {
              station: "ADAMOU",
              voters: 520
            },
            {
              station: "DIA",
              voters: 520
            },
          ],
          "ESPL.DJAORO BOUBA AMINOU / A": [
            {
              station: "BOUBA",
              voters: 6002
            },
            {
              station: "LOUGGUEWO",
              voters: 8436
            },
            {
              station: "DJAORO",
              voters: 7576
            },
            {
              station: "TAKAL",
              voters: 5771
            },
          ],
          "ESPL.DJAORO GOOTO / A": [
            {
              station: "GOOTO",
              voters: 1000
            },
          ],
          "ESPL.DJAORO HAMADOU HASSOUMI / A": [
            {
              station: "HASOUMI",
              voters: 1144
            },
          ],
          "ESPL.DJAORO MADAROU / A": [
            {
              station: "FASSAWO",
              voters: 978
            },
          ],
          "ESPL.DJAORO MADI SOULEY / A": [
            {
              station: "MADI",
              voters: 782
            },
            {
              station: "SOULEY",
              voters: 782
            },
          ],
          "ESPL.DJAORO MOLKO / A": [
            {
              station: "MOLKO",
              voters: 880
            },
            {
              station: "CAMP",
              voters: 880
            },
            {
              station: "SONEL",
              voters: 880
            },
          ],
          "ESPL.DJAORO WOURO MADOUVA / A": [
            {
              station: "MADOUVA",
              voters: 154
            },
          ],
          "ESPL.DJAORO YAOUBA / A": [
            {
              station: "YAOUBA",
              voters: 385
            },
          ],
          "ESPL.HAMADOU MATCHOUNGUEL / A": [
            {
              station: "MATCHOUNGUEL",
              voters: 287
            },
          ],
          "ESPL.HAMAN WABI ABDOU / A": [
            {
              station: "BIKORDI",
              voters: 863
            },
          ],
          "GUINADJI-ECOLE PUBLIQUE / A": [
            {
              station: "GUINADJI",
              voters: 1932
            },
            {
              station: "DAKELWO",
              voters: 330
            },
            {
              station: "DISSOWO",
              voters: 330
            },
            {
              station: "FOUNANGUEWO",
              voters: 330
            },
            {
              station: "MANAWATCHI",
              voters: 611
            },
          ],
          "INSTITUT ISLAMIQUE ( MAHAD ) / A": [
            {
              station: "INSTITUT",
              voters: 1183
            },
            {
              station: "ISLAMIQUE",
              voters: 1183
            },
          ],
          "LYCEE DE MAROUA KONGOLA / A": [
            {
              station: "DOW",
              voters: 493
            },
            {
              station: "TCHOFOL",
              voters: 185
            },
            {
              station: "MOUFOU",
              voters: 185
            },
            {
              station: "GUIZIGA",
              voters: 580
            },
            {
              station: "MOUSGOUM",
              voters: 185
            },
          ],
          "LYCEE TECH. COMMERCIAL DE MAROUA / A": [
            {
              station: "SARARE",
              voters: 1627
            },
          ],
          "MADARASSA ADAMA KAELE / A": [
            {
              station: "KAELE",
              voters: 1544
            },
          ],
          "MADARASSA ALH BIRI SITE I / A": [
            {
              station: "ABDOULAYE",
              voters: 809
            },
            {
              station: "KONGOLA",
              voters: 7321
            },
          ],
          "MADARASSA ALH BIRI SITE II / A": [
            {
              station: "MADARASSA",
              voters: 718
            },
            {
              station: "BIRI",
              voters: 1006
            },
            {
              station: "DOURSOUNGO",
              voters: 8491
            },
            {
              station: "KARAL",
              voters: 718
            },
            {
              station: "WOYA",
              voters: 718
            },
          ],
          "MAGASIN PREPAFEN SOUAWO / A": [
            {
              station: "SOUWAWO",
              voters: 334
            },
            {
              station: "ABBALI",
              voters: 334
            },
            {
              station: "PABA",
              voters: 334
            },
          ],
          "MAIRIE MAROUA III / A": [
            {
              station: "MAIRIE",
              voters: 1281
            },
            {
              station: "MAROUA",
              voters: 1476
            },
            {
              station: "III",
              voters: 3576
            },
          ],
        },
        "MERI": {
          "CASE COMMUNAUTAIRE MADLOUA / A": [
            {
              station: "MALDOUA",
              voters: 184
            },
          ],
          "CASE INHABITEE ABASSI MOUGOULIN / A": [
            {
              station: "ASKAM",
              voters: 404
            },
            {
              station: "DOUBAGOUDO",
              voters: 304
            },
            {
              station: "MOUGOULIN",
              voters: 227
            },
            {
              station: "MOUNDOUR",
              voters: 1098
            },
            {
              station: "FOULBE",
              voters: 2268
            },
            {
              station: "TCHAKIDJEBE",
              voters: 730
            },
            {
              station: "BIMARVA",
              voters: 227
            },
          ],
          "CASE NDER-NDER NGOLA / A": [
            {
              station: "MOKOUZEK",
              voters: 579
            },
            {
              station: "NGOLA",
              voters: 106
            },
          ],
          "CASE PMI MARVAI / A": [
            {
              station: "MARVAI",
              voters: 206
            },
            {
              station: "WOURO",
              voters: 206
            },
            {
              station: "FINDOU",
              voters: 206
            },
          ],
          "CASE SAIDOU MAKABAYE / A": [
            {
              station: "MAKABAYE",
              voters: 291
            },
          ],
          "CASE ZAWARAI METCHEKET / A": [
            {
              station: "IYEM",
              voters: 304
            },
            {
              station: "MADOUWEK",
              voters: 304
            },
            {
              station: "MAOUDLAK",
              voters: 304
            },
            {
              station: "MAYO",
              voters: 1093
            },
            {
              station: "BALI",
              voters: 1093
            },
            {
              station: "METCHEKET",
              voters: 304
            },
            {
              station: "ZAWARAI",
              voters: 128
            },
          ],
          "CETIC MERI / A": [
            {
              station: "NGUISSAR",
              voters: 792
            },
          ],
          "ECOLE DES PARENTS DALBAYE / A": [
            {
              station: "DALBAYE",
              voters: 692
            },
            {
              station: "MONTAGNE",
              voters: 2208
            },
            {
              station: "PLAINE",
              voters: 4671
            },
          ],
          "ECOLE DES PARENTS NGOKTOF I / A": [
            {
              station: "NGOKTOF",
              voters: 634
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DOUVANGAR / A": [
            {
              station: "KILLIOUO",
              voters: 576
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE MANGUIRDLA /  A": [
            {
              station: "MANGUIRDLA",
              voters: 703
            },
            {
              station: "MEDJEREW",
              voters: 703
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE MATCHARAI / A": [
            {
              station: "MATCHARAI",
              voters: 309
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE MBALDAK / A": [
            {
              station: "MBALDAK",
              voters: 645
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE TCHERE / A": [
            {
              station: "MOHOLT",
              voters: 539
            },
            {
              station: "TCHERE",
              voters: 1333
            },
            {
              station: "ABOUSSANG",
              voters: 539
            },
          ],
          "ECOLE PUBLIQUE BALEWA / A": [
            {
              station: "BALEWA",
              voters: 664
            },
            {
              station: "DJEBE",
              voters: 1222
            },
            {
              station: "KOSDAI",
              voters: 664
            },
            {
              station: "MOMIGO",
              voters: 611
            },
          ],
          "ECOLE PUBLIQUE BOZO / A": [
            {
              station: "BOZO",
              voters: 982
            },
            {
              station: "MOFOU",
              voters: 1192
            },
            {
              station: "DEBI",
              voters: 982
            },
          ],
          "ECOLE PUBLIQUE DJEBBE / A": [
            {
              station: "DJEBBE",
              voters: 317
            },
          ],
          "ECOLE PUBLIQUE DOGBA MOULVONG / A": [
            {
              station: "MOULVONG",
              voters: 260
            },
          ],
          "ECOLE PUBLIQUE DOUGOUR / A": [
            {
              station: "DOUGOUR",
              voters: 409
            },
            {
              station: "TCHENGUELEW",
              voters: 409
            },
          ],
          "ECOLE PUBLIQUE DOULEK / A": [
            {
              station: "DOULEK",
              voters: 423
            },
          ],
          "ECOLE PUBLIQUE FOULAH / A": [
            {
              station: "FOULAH",
              voters: 474
            },
          ],
          "ECOLE PUBLIQUE GADA / A": [
            {
              station: "GADA",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE GADGALAO / A": [
            {
              station: "GADGALAO",
              voters: 601
            },
          ],
          "ECOLE PUBLIQUE GADJAWAI / A": [
            {
              station: "GADJAWAI",
              voters: 495
            },
          ],
          "ECOLE PUBLIQUE GANDJOUWAI / A": [
            {
              station: "GANDJOUWAI",
              voters: 305
            },
            {
              station: "MORLOY",
              voters: 305
            },
          ],
          "ECOLE PUBLIQUE GASSA / A": [
            {
              station: "GASSA",
              voters: 260
            },
          ],
          "ECOLE PUBLIQUE GODOLA HOSSERE / A": [
            {
              station: "DANGAR",
              voters: 449
            },
            {
              station: "GODOLA",
              voters: 2515
            },
            {
              station: "HOSSERE",
              voters: 1347
            },
            {
              station: "III",
              voters: 449
            },
            {
              station: "GOULMOKO",
              voters: 641
            },
          ],
          "ECOLE PUBLIQUE GOLI / A": [
            {
              station: "GOLI",
              voters: 685
            },
          ],
          "ECOLE PUBLIQUE GROUPE I MERI / A": [
            {
              station: "GAMASSAI",
              voters: 463
            },
            {
              station: "MEGUIVELE",
              voters: 463
            },
          ],
          "ECOLE PUBLIQUE GUIVEL MERI / A": [
            {
              station: "MERI",
              voters: 1350
            },
            {
              station: "MANGAV",
              voters: 257
            },
            {
              station: "VEZEH",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE HOUDOUVOU / A": [
            {
              station: "BAIWA",
              voters: 429
            },
            {
              station: "GOULMOYO",
              voters: 621
            },
            {
              station: "HOUDOUVOU",
              voters: 858
            },
            {
              station: "GUIZIGA",
              voters: 3518
            },
            {
              station: "MOUFOU",
              voters: 1601
            },
            {
              station: "LOGGOL",
              voters: 621
            },
            {
              station: "GOUM",
              voters: 621
            },
            {
              station: "ZANDAI",
              voters: 429
            },
          ],
          "ECOLE PUBLIQUE HOULOUM / A": [
            {
              station: "HOULOUM",
              voters: 2029
            },
            {
              station: "CENTRE",
              voters: 3194
            },
          ],
          "ECOLE PUBLIQUE KALLIAO / A": [
            {
              station: "BAMGUEL",
              voters: 561
            },
            {
              station: "KALLIAO",
              voters: 1683
            },
            {
              station: "MOZOGOI",
              voters: 561
            },
          ],
          "ECOLE PUBLIQUE KATCHOUNGA / A": [
            {
              station: "KATCHOUNGA",
              voters: 459
            },
            {
              station: "NDANEDJAM",
              voters: 459
            },
          ],
          "ECOLE PUBLIQUE KILLIOUO II / A": [
            {
              station: "DOULOV",
              voters: 301
            },
            {
              station: "TAKOLA",
              voters: 301
            },
          ],
          "ECOLE PUBLIQUE MAGAWA / A": [
            {
              station: "MAGAWA",
              voters: 443
            },
            {
              station: "MEYEL",
              voters: 443
            },
            {
              station: "DADI",
              voters: 443
            },
          ],
          "ECOLE PUBLIQUE MAKSAL / A": [
            {
              station: "KELEKEY",
              voters: 520
            },
            {
              station: "MAKSAL",
              voters: 520
            },
            {
              station: "MEZET",
              voters: 520
            },
          ],
          "ECOLE PUBLIQUE MALDANG / A": [
            {
              station: "MALDANG",
              voters: 356
            },
          ],
          "ECOLE PUBLIQUE MAMBANG / A": [
            {
              station: "MAMBANG",
              voters: 1212
            },
            {
              station: "MOGAZANG",
              voters: 1212
            },
            {
              station: "LAMBA",
              voters: 606
            },
            {
              station: "LAMORDE",
              voters: 606
            },
          ],
          "ECOLE PUBLIQUE MARKABA / A": [
            {
              station: "MARKABA",
              voters: 426
            },
          ],
          "ECOLE PUBLIQUE MEDEMTERE / A": [
            {
              station: "MEDEMTERE",
              voters: 420
            },
          ],
          "ECOLE PUBLIQUE MEFTEK / A": [
            {
              station: "FOUTANTG",
              voters: 542
            },
            {
              station: "MACHARAI",
              voters: 542
            },
            {
              station: "MEFTEK",
              voters: 542
            },
            {
              station: "WAWAI",
              voters: 755
            },
          ],
          "ECOLE PUBLIQUE MEFTEUK / A": [
            {
              station: "WOUZE",
              voters: 503
            },
          ],
          "ECOLE PUBLIQUE MENGUER / A": [
            {
              station: "MENGUER",
              voters: 284
            },
          ],
          "ECOLE PUBLIQUE MERI GROUPE II / A": [
            {
              station: "DALKONDO",
              voters: 331
            },
            {
              station: "MERIGOUMA",
              voters: 527
            },
          ],
          "ECOLE PUBLIQUE MIKIRI / A": [
            {
              station: "MIKIRI",
              voters: 690
            },
          ],
          "ECOLE PUBLIQUE MINGLIYA / A": [
            {
              station: "GABAGA",
              voters: 255
            },
            {
              station: "MINGLIYA",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE NDOLOKO / A": [
            {
              station: "NDOLOKO",
              voters: 256
            },
          ],
          "ECOLE PUBLIQUE NGOMEMBLEY / A": [
            {
              station: "NGOMEMBLEY",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE OUATERGASS / A": [
            {
              station: "GUIVEL",
              voters: 1594
            },
            {
              station: "DOUROUM",
              voters: 1337
            },
            {
              station: "MEZED",
              voters: 1092
            },
            {
              station: "NGOMEREY",
              voters: 1857
            },
            {
              station: "OUATERGASS",
              voters: 1706
            },
            {
              station: "TOUKOV",
              voters: 1612
            },
          ],
          "ECOLE PUBLIQUE TCHABAWOL / A": [
            {
              station: "TCHABAWOL",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE TOZOM / A": [
            {
              station: "TOZOM",
              voters: 155
            },
          ],
          "ECOLE PUBLIQUE WELE / A": [
            {
              station: "WELE",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE WINDE GANKI / A": [
            {
              station: "GANKI",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE ZALLA / A": [
            {
              station: "ZALLA",
              voters: 1152
            },
          ],
          "ECOLE PUBLIQUE ZIGDELING / A": [
            {
              station: "MATCHALAI",
              voters: 614
            },
            {
              station: "NGOZEY",
              voters: 614
            },
            {
              station: "ZIGDELING",
              voters: 614
            },
          ],
          "EGLISE MESSIANIQUE BIZIMAKAYA / A": [
            {
              station: "BIZIMAKAYA",
              voters: 177
            },
          ],
          "ESPL MOSQUEE TCHERE GARRE / A": [
            {
              station: "KAKATA",
              voters: 255
            },
          ],
          "ESPL. EGLISE ADVENTISTE DOGBA DELING /  A": [
            {
              station: "DAGUIZANG",
              voters: 462
            },
            {
              station: "DOGBA",
              voters: 1592
            },
            {
              station: "DELING",
              voters: 462
            },
          ],
          "ESPL. EGLISE BAPTISTE BILGUIM / A": [
            {
              station: "BILGUIM",
              voters: 212
            },
          ],
          "ESPL. EGLISE PROTESTANTE BOUTOU  FEDEM / A": [
            {
              station: "BOUTOU",
              voters: 334
            },
            {
              station: "FEDEM",
              voters: 334
            },
          ],
          "ESPL. EGLISE PROTESTANTE DALGAZA / A": [
            {
              station: "DALGAZA",
              voters: 263
            },
          ],
          "ESPL. EGLISE PROTESTANTE GADGALAO / A": [
            {
              station: "GRIYA",
              voters: 180
            },
            {
              station: "MAYAK",
              voters: 180
            },
          ],
          "ESPL. EGLISE PROTESTANTE MAMZALA / A": [
            {
              station: "MAMZALA",
              voters: 146
            },
          ],
          "ESPL. EGLISE PROTESTANTE ZAKALIAO / A": [
            {
              station: "ZAKALIAO",
              voters: 109
            },
          ],
          "ESPL. MOSQUEE BEZEL / A": [
            {
              station: "BEZEL",
              voters: 1550
            },
          ],
          "ESPL. MOSQUEE DOGBA ALHADJI / A": [
            {
              station: "ALHADJI",
              voters: 195
            },
            {
              station: "BARKEHI",
              voters: 195
            },
          ],
          "ESPL. MOSQUEE DOGBA MALIKI / A": [
            {
              station: "MALIKI",
              voters: 240
            },
            {
              station: "WINDE",
              voters: 493
            },
          ],
          "ESPL. MOSQUEE HARDE WOURO SISSI / A": [
            {
              station: "PETTODJE",
              voters: 210
            },
            {
              station: "WOURO-SISSI",
              voters: 210
            },
          ],
          "ESPL. MOSQUEE NDIAM TCHOLLI / A": [
            {
              station: "DIAM",
              voters: 278
            },
            {
              station: "TCHOLLI",
              voters: 278
            },
            {
              station: "HODANGO",
              voters: 278
            },
            {
              station: "LOUGGOL",
              voters: 278
            },
            {
              station: "GARGA",
              voters: 278
            },
          ],
          "ESPL. MOSQUEE TAPADAM / A": [
            {
              station: "TAPADAM",
              voters: 170
            },
          ],
          "ESPL. PUITS HADAOURE / A": [
            {
              station: "HADAOURE",
              voters: 127
            },
            {
              station: "MOTORSOLO",
              voters: 399
            },
          ],
          "ESPL. TCHAKA MINDARI / A": [
            {
              station: "KODJELEWO",
              voters: 188
            },
            {
              station: "MOGORDOM",
              voters: 188
            },
          ],
          "LYCEE MERI / A": [
            {
              station: "MAGUIVELE",
              voters: 184
            },
          ],
          "MAGASIN PAM WAMBEZ / A": [
            {
              station: "NGOZEMEYE",
              voters: 281
            },
            {
              station: "WAMBEZ",
              voters: 163
            },
          ],
          "MAGASIN SODECOTON DOURGA / A": [
            {
              station: "DOURGA",
              voters: 306
            },
            {
              station: "GARRE",
              voters: 1962
            },
            {
              station: "HADAOU",
              voters: 445
            },
          ],
          "MAGASIN SODECOTON GABOU / A": [
            {
              station: "GABOU",
              voters: 650
            },
          ],
          "MARCHE DALBADA / A": [
            {
              station: "NGOZVAL",
              voters: 371
            },
            {
              station: "ZOUVAL",
              voters: 910
            },
          ],
          "MARCHE DLANGATAK / A": [
            {
              station: "DLANGATAK",
              voters: 360
            },
          ],
          "MOULIN TIZEK / A": [
            {
              station: "DIBLA",
              voters: 401
            },
            {
              station: "TIZEK",
              voters: 282
            },
            {
              station: "ZOB",
              voters: 282
            },
          ],
        },
        "NDOUKOULA": {
          "ECOLE PRIVEE PROTESTANTE ZAMA / A": [
            {
              station: "ZAMA",
              voters: 727
            },
          ],
          "ECOLE PUBLIQUE BADAM I / A": [
            {
              station: "BADAM",
              voters: 366
            },
            {
              station: "TCHALMAI",
              voters: 366
            },
            {
              station: "GOUBOULO",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE BADAM II / A": [
            {
              station: "DOUGOUROUMBES",
              voters: 430
            },
            {
              station: "LOUGGA",
              voters: 430
            },
            {
              station: "BARKEDJE",
              voters: 430
            },
            {
              station: "LOUGGUERE",
              voters: 605
            },
            {
              station: "LOULOU",
              voters: 430
            },
          ],
          "ECOLE PUBLIQUE DALEWAO / A": [
            {
              station: "DAGAI-BAH",
              voters: 268
            },
            {
              station: "DALEWAWO",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE DJABBA KOULI / A": [
            {
              station: "DJABBA",
              voters: 75
            },
            {
              station: "KOULI",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE GAWEL / A": [
            {
              station: "MAYO",
              voters: 306
            },
            {
              station: "MBANTAL",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE GONOZO / A": [
            {
              station: "GONOZO",
              voters: 342
            },
          ],
          "ECOLE PUBLIQUE IBBA NGOMNA / A": [
            {
              station: "IBBA",
              voters: 179
            },
            {
              station: "NGOMNA",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE KEBENG / A": [
            {
              station: "KIBENG",
              voters: 412
            },
            {
              station: "MIDILMA",
              voters: 412
            },
            {
              station: "MISSINGUID",
              voters: 412
            },
          ],
          "ECOLE PUBLIQUE KOSSEYEL DJAOULE / A": [
            {
              station: "KOSSEYEL",
              voters: 92
            },
            {
              station: "DJAOULE",
              voters: 92
            },
          ],
          "ECOLE PUBLIQUE MAKADA / A": [
            {
              station: "MAKADA",
              voters: 253
            },
            {
              station: "YOLDE",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE MARBAYE (KALAYE) / A": [
            {
              station: "KALAYE",
              voters: 452
            },
            {
              station: "MARBAYE",
              voters: 331
            },
            {
              station: "ZOUGOU",
              voters: 331
            },
          ],
          "ECOLE PUBLIQUE MAYEL BARAM / A": [
            {
              station: "MAYEL",
              voters: 168
            },
            {
              station: "BARAM",
              voters: 168
            },
          ],
          "ECOLE PUBLIQUE MIZILING / A": [
            {
              station: "MIZILING",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE MOUDVAR / A": [
            {
              station: "MOUDVAR",
              voters: 180
            },
            {
              station: "TOULOUM",
              voters: 180
            },
          ],
          "ECOLE PUBLIQUE MOULANDI / A": [
            {
              station: "MOULANDI",
              voters: 386
            },
          ],
          "ECOLE PUBLIQUE MOULOUM / A": [
            {
              station: "MOULOUM",
              voters: 488
            },
          ],
          "ECOLE PUBLIQUE NGARIWA / A": [
            {
              station: "NGARIWA",
              voters: 152
            },
            {
              station: "TCHEKEL",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE NGORKOUWOL / A": [
            {
              station: "NGORKOUWOL",
              voters: 413
            },
          ],
          "ECOLE PUBLIQUE TCHOFFI / A": [
            {
              station: "TCHOFFI",
              voters: 310
            },
          ],
          "ECOLE PUBLIQUE WOURO DJABBI / A": [
            {
              station: "WINDE",
              voters: 240
            },
            {
              station: "DJABBI",
              voters: 240
            },
            {
              station: "YAKANRE",
              voters: 445
            },
          ],
          "ECOLE PUBLIQUE WOURO FANGO / A": [
            {
              station: "FANGO",
              voters: 152
            },
            {
              station: "LOPE",
              voters: 152
            },
          ],
          "ECOLE PUBLIQUE WOURO-BOCKI / A": [
            {
              station: "VELVEL",
              voters: 213
            },
            {
              station: "BOCKI",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE WOURO-NANGUE / A": [
            {
              station: "NANGUE",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE WOUYANG / A": [
            {
              station: "WOUYANG",
              voters: 451
            },
          ],
          "ECOLE PUBLIQUE ZAMALA / A": [
            {
              station: "ZAMALA",
              voters: 414
            },
            {
              station: "ZIKAKA",
              voters: 414
            },
            {
              station: "ZIP",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE ZONGOYA / A": [
            {
              station: "FAKALAO",
              voters: 432
            },
            {
              station: "KAYELWO",
              voters: 432
            },
            {
              station: "CENTRE",
              voters: 1141
            },
          ],
          "ECOLE PUBLIQUE ZONGOYAO / A": [
            {
              station: "ZONGOYAO",
              voters: 164
            },
          ],
          "ESPL. CHEF BANTAHI / A": [
            {
              station: "BANTAHI",
              voters: 284
            },
            {
              station: "DOUBAZAO",
              voters: 366
            },
            {
              station: "NDOUKOULA",
              voters: 1694
            },
          ],
          "ESPL. CHEFFERIE DIGUIDIM / A": [
            {
              station: "DIGUIDIM",
              voters: 344
            },
          ],
          "ESPL. CHEFFERIE DJERVING / A": [
            {
              station: "DJERVING",
              voters: 197
            },
          ],
          "ESPL. CHEFFERIE DJIDDEO / A": [
            {
              station: "DJIDDEO",
              voters: 217
            },
          ],
          "ESPL. CHEFFERIE GAWA / A": [
            {
              station: "DJALINGO",
              voters: 250
            },
            {
              station: "GAWA",
              voters: 250
            },
            {
              station: "HARDE",
              voters: 250
            },
            {
              station: "KADAM",
              voters: 250
            },
          ],
          "ESPL. CHEFFERIE GOUDOUM / A": [
            {
              station: "BOURKALAF",
              voters: 153
            },
            {
              station: "GOUDOUM",
              voters: 153
            },
            {
              station: "SARMOUA",
              voters: 153
            },
            {
              station: "MOUSSA",
              voters: 153
            },
          ],
          "ESPL. CHEFFERIE GOUNGOUI / A": [
            {
              station: "GOUNGOUI",
              voters: 122
            },
          ],
          "ESPL. CHEFFERIE HARDEO / A": [
            {
              station: "HARDEO",
              voters: 182
            },
          ],
          "ESPL. CHEFFERIE HODANGO / A": [
            {
              station: "DJARENGOL",
              voters: 172
            },
            {
              station: "HODANGO",
              voters: 351
            },
            {
              station: "GAWEL",
              voters: 1024
            },
          ],
          "ESPL. CHEFFERIE MISSINGLEO / A": [
            {
              station: "BOULAO",
              voters: 236
            },
            {
              station: "MISSINGLEO",
              voters: 236
            },
          ],
          "ESPL. CHEFFERIE MOUDOUMBOUI / A": [
            {
              station: "MOLDJO",
              voters: 239
            },
            {
              station: "MOUDOUMBOUI",
              voters: 239
            },
          ],
          "ESPL. CHEFFERIE MOUKOUDWA / A": [
            {
              station: "MOUKOUDWA",
              voters: 136
            },
          ],
          "ESPL. CHEFFERIE OUZAL-KAMAS / A": [
            {
              station: "KAMAS",
              voters: 139
            },
            {
              station: "OUZAL",
              voters: 139
            },
          ],
          "ESPL. CHEFFERIE TCHABEWA / A": [
            {
              station: "TCHABEWA",
              voters: 143
            },
          ],
          "ESPL. CHEFFERIE WOURO GARIDJI / A": [
            {
              station: "GARIDJI",
              voters: 82
            },
          ],
          "ESPL. CHEFFERIE WOURO GOTEL / A": [
            {
              station: "GOTEL",
              voters: 220
            },
          ],
          "ESPL. CHEFFERIE WOURO KARMBA / A": [
            {
              station: "FIAKI",
              voters: 289
            },
            {
              station: "MAYAM",
              voters: 289
            },
            {
              station: "KARMBA",
              voters: 602
            },
          ],
          "ESPL. CHEFFERIE WOURO-BOUTOUL / A": [
            {
              station: "BOUTOUL",
              voters: 243
            },
          ],
          "ESPL. CHEFFERIE YAMVRI / A": [
            {
              station: "YAMVRI",
              voters: 205
            },
          ],
          "ESPL. EGLSE CATHOLIQUE FOUTOUT / A": [
            {
              station: "FOUTOUT",
              voters: 238
            },
            {
              station: "TCHEFCHEL",
              voters: 238
            },
          ],
          "ESPL. LAWANAT KOLA / A": [
            {
              station: "TALENDE",
              voters: 95
            },
          ],
          "MAGASIN GIC GAWEL / A": [
            {
              station: "MAOUNA",
              voters: 175
            },
            {
              station: "FAOURO",
              voters: 175
            },
          ],
          "MARCHE DE DAGAI KOLA / A": [
            {
              station: "DAGAI",
              voters: 1899
            },
            {
              station: "BENGOLO",
              voters: 633
            },
            {
              station: "FOULBE",
              voters: 633
            },
            {
              station: "GADAMAYO",
              voters: 633
            },
            {
              station: "DOUVGAD",
              voters: 633
            },
            {
              station: "WOURO",
              voters: 2887
            },
            {
              station: "BETCHE",
              voters: 633
            },
            {
              station: "RIDAI",
              voters: 633
            },
          ],
        },
        "PETTE": {
          "CENTRE SANTE MANGAVE / A": [
            {
              station: "MANGAVE",
              voters: 278
            },
            {
              station: "HAMMA",
              voters: 278
            },
          ],
          "DELEGATION ELEVAGE PETTE / A": [
            {
              station: "DJAFOUNO",
              voters: 372
            },
            {
              station: "FARDARE",
              voters: 372
            },
            {
              station: "YAKATAO",
              voters: 372
            },
          ],
          "ECOLE PRIVEE CATH. PETTE KORNIRE / A": [
            {
              station: "DJOUTABOUNDOU",
              voters: 536
            },
          ],
          "ECOLE PUBLIQUE DABBAM / A": [
            {
              station: "DABBAM",
              voters: 325
            },
            {
              station: "SACKINE",
              voters: 325
            },
            {
              station: "BIRI",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE DAKKANA / A": [
            {
              station: "DAKKANA",
              voters: 308
            },
            {
              station: "FADAMA",
              voters: 616
            },
            {
              station: "BAGOUDOU",
              voters: 308
            },
            {
              station: "DOMAYO",
              voters: 308
            },
          ],
          "ECOLE PUBLIQUE DJOUTA BEMBAL / A": [
            {
              station: "DJOUTA",
              voters: 428
            },
            {
              station: "BEMBAL",
              voters: 428
            },
            {
              station: "EREO",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DOUBBEL / A": [
            {
              station: "BANKIYEL",
              voters: 547
            },
            {
              station: "DOUBBEL",
              voters: 1641
            },
            {
              station: "GADA",
              voters: 737
            },
            {
              station: "MAYO",
              voters: 547
            },
            {
              station: "SIRATARE",
              voters: 832
            },
          ],
          "ECOLE PUBLIQUE KIDJEMI / A": [
            {
              station: "DJEDJEBE",
              voters: 326
            },
            {
              station: "GNADNGA",
              voters: 326
            },
            {
              station: "KIDJEMI",
              voters: 326
            },
          ],
          "ECOLE PUBLIQUE KONGHO / A": [
            {
              station: "KONGHO",
              voters: 318
            },
          ],
          "ECOLE PUBLIQUE LOUBA LOUBA / A": [
            {
              station: "LOUBA",
              voters: 1446
            },
            {
              station: "DALIL",
              voters: 403
            },
            {
              station: "SOUAWO",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE MAYA / A": [
            {
              station: "MAYA",
              voters: 216
            },
          ],
          "ECOLE PUBLIQUE MOURGOUNE / A": [
            {
              station: "ADOUMER",
              voters: 470
            },
            {
              station: "ALLAHOKKI",
              voters: 470
            },
            {
              station: "AMKOYE",
              voters: 470
            },
            {
              station: "BANDALARE",
              voters: 470
            },
            {
              station: "DJOUBOURWO",
              voters: 470
            },
            {
              station: "KOLAKOLADJE",
              voters: 470
            },
            {
              station: "MOURGOUNE",
              voters: 1410
            },
            {
              station: "ARABE",
              voters: 470
            },
            {
              station: "MOUSGOUM",
              voters: 470
            },
            {
              station: "NDJIDDA",
              voters: 708
            },
          ],
          "ECOLE PUBLIQUE NIWADJI / A": [
            {
              station: "TANNE",
              voters: 261
            },
            {
              station: "NAMARREDJI",
              voters: 261
            },
            {
              station: "NIWADJI",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE TAKAYE / A": [
            {
              station: "GALWASSE",
              voters: 333
            },
            {
              station: "NDALANGA",
              voters: 333
            },
            {
              station: "PATAWALWO",
              voters: 333
            },
            {
              station: "TAKAYE",
              voters: 333
            },
          ],
          "ECOLE PUBLIQUE TCHAKAMADJE / A": [
            {
              station: "MBORDAM",
              voters: 145
            },
            {
              station: "WANKO",
              voters: 145
            },
            {
              station: "WENDOU",
              voters: 145
            },
            {
              station: "DJABI",
              voters: 145
            },
            {
              station: "BOULDOUMDJE",
              voters: 145
            },
          ],
          "ESPL. CHEF. FADARE OURO HABIROU / A": [
            {
              station: "HABIROU",
              voters: 217
            },
            {
              station: "ARDO",
              voters: 458
            },
            {
              station: "MANA",
              voters: 217
            },
          ],
          "ESPL. CHEF. KOURWAMA ABDOU / A": [
            {
              station: "KOURWAMA",
              voters: 539
            },
            {
              station: "ABDOU",
              voters: 301
            },
          ],
          "ESPL. CHEF. KOURWAMA NDJIDDA / A": [
            {
              station: "KOURWAMAYEL",
              voters: 238
            },
          ],
          "ESPL. CHEF. MAGALDAO HAMAN / A": [
            {
              station: "MAGALDAO",
              voters: 678
            },
            {
              station: "DJIDDERE",
              voters: 226
            },
            {
              station: "HAMAN",
              voters: 226
            },
            {
              station: "TOUPPEO",
              voters: 226
            },
          ],
          "ESPL. CHEF. SOUKOUNGO GALDIMA / A": [
            {
              station: "BABOUDJE",
              voters: 298
            },
            {
              station: "GALDIMA",
              voters: 298
            },
            {
              station: "KAIDAL",
              voters: 298
            },
            {
              station: "MALLOUM",
              voters: 298
            },
            {
              station: "TCHARI",
              voters: 298
            },
          ],
          "ESPL. CHEF. SOUKOUNGO HODANDE / A": [
            {
              station: "DJOYERE",
              voters: 190
            },
            {
              station: "FILINDE",
              voters: 190
            },
            {
              station: "SOUKOUNGO",
              voters: 1680
            },
            {
              station: "ABBA",
              voters: 374
            },
            {
              station: "OLO",
              voters: 190
            },
            {
              station: "DJINGUI",
              voters: 190
            },
          ],
          "ESPL. CHEFFERIE ALAGARNO / A": [
            {
              station: "ALAGARNO",
              voters: 637
            },
            {
              station: "BANGOUDI",
              voters: 637
            },
            {
              station: "DJIDDEL",
              voters: 637
            },
            {
              station: "DJOYE",
              voters: 637
            },
            {
              station: "GOULNA",
              voters: 1274
            },
            {
              station: "HODANDE",
              voters: 827
            },
            {
              station: "NGOURORE",
              voters: 637
            },
            {
              station: "KODJOLEO",
              voters: 955
            },
            {
              station: "MASSINDAYE",
              voters: 637
            },
            {
              station: "NGASKA",
              voters: 637
            },
            {
              station: "FAOUROU",
              voters: 819
            },
            {
              station: "WAHA",
              voters: 637
            },
          ],
          "ESPL. CHEFFERIE BADADAI / A": [
            {
              station: "BADADAI",
              voters: 117
            },
            {
              station: "KARAL",
              voters: 568
            },
            {
              station: "GUIYE",
              voters: 117
            },
          ],
          "ESPL. CHEFFERIE BADEO / A": [
            {
              station: "BADEO",
              voters: 174
            },
          ],
          "ESPL. CHEFFERIE DIGUIRWO / A": [
            {
              station: "DIGUIRWO",
              voters: 181
            },
          ],
          "ESPL. CHEFFERIE DJAFGUE / A": [
            {
              station: "DJAFGUE",
              voters: 572
            },
          ],
          "ESPL. CHEFFERIE DOUTAROU / A": [
            {
              station: "DJOUTNGO",
              voters: 322
            },
            {
              station: "DOUTAROU",
              voters: 322
            },
            {
              station: "GAOUALI",
              voters: 322
            },
            {
              station: "ZAO-ZAO",
              voters: 322
            },
          ],
          "ESPL. CHEFFERIE FADARE / A": [
            {
              station: "GARRE",
              voters: 1717
            },
            {
              station: "KARAGADJI",
              voters: 738
            },
            {
              station: "KOULOUAL",
              voters: 738
            },
            {
              station: "TOUPOURIRE",
              voters: 738
            },
            {
              station: "DOLE",
              voters: 738
            },
            {
              station: "MALAM",
              voters: 1930
            },
            {
              station: "SANI",
              voters: 738
            },
          ],
          "ESPL. CHEFFERIE HABILE / A": [
            {
              station: "HABILE",
              voters: 167
            },
            {
              station: "AZOGO",
              voters: 167
            },
          ],
          "ESPL. CHEFFERIE HODEMA / A": [
            {
              station: "HODEMA",
              voters: 214
            },
            {
              station: "TOUKOUMAYEL",
              voters: 214
            },
          ],
          "ESPL. CHEFFERIE KENE KENE / A": [
            {
              station: "KENE",
              voters: 380
            },
          ],
          "ESPL. CHEFFERIE KLISSAWA / A": [
            {
              station: "KLISSAWA",
              voters: 284
            },
          ],
          "ESPL. CHEFFERIE MADAGASCAR / A": [
            {
              station: "BAKOUREHI",
              voters: 289
            },
            {
              station: "HOLLADANO",
              voters: 289
            },
            {
              station: "MADAGASCAR",
              voters: 289
            },
            {
              station: "MANDARARE",
              voters: 289
            },
          ],
          "ESPL. CHEFFERIE MALAM / A": [
            {
              station: "SOUTTININGO",
              voters: 596
            },
            {
              station: "DAIROU",
              voters: 596
            },
          ],
          "ESPL. CHEFFERIE NANIDJAM / A": [
            {
              station: "BOURANGO",
              voters: 335
            },
            {
              station: "NANIDJAM",
              voters: 335
            },
          ],
          "ESPL. CHEFFERIE SALAME BAKARI / A": [
            {
              station: "BALDARE",
              voters: 433
            },
            {
              station: "SALAME",
              voters: 866
            },
            {
              station: "ALIOUM",
              voters: 433
            },
            {
              station: "BAKARI",
              voters: 433
            },
          ],
          "ESPL. CHEFFERIE TCHAKAMADJE / A": [
            {
              station: "TCHAKAMADJE",
              voters: 537
            },
          ],
          "ESPL. CHEFFERIE TCHALLOUGOL / A": [
            {
              station: "TCHALLOUGOL",
              voters: 119
            },
          ],
          "ESPL. CHEFFERIE TOUTKA / A": [
            {
              station: "DJADJEL",
              voters: 434
            },
            {
              station: "TERO",
              voters: 304
            },
            {
              station: "TOUTKA",
              voters: 304
            },
            {
              station: "WOIKA",
              voters: 304
            },
          ],
          "ESPL. CHEFFERIE WOURO DANDI / A": [
            {
              station: "FADARE",
              voters: 1085
            },
            {
              station: "DANDI",
              voters: 130
            },
          ],
          "ESPL. CHEFFERIE YAGA SOUDANI / A": [
            {
              station: "TCHOFNANGUEL",
              voters: 286
            },
            {
              station: "YAGA",
              voters: 1344
            },
            {
              station: "DANDEO",
              voters: 286
            },
            {
              station: "HODANGO",
              voters: 286
            },
            {
              station: "SOUDANI",
              voters: 286
            },
          ],
          "ESPL. CHEFFERIE YAGA WABI / A": [
            {
              station: "DJIBIHO",
              voters: 162
            },
            {
              station: "WABI",
              voters: 162
            },
          ],
          "ESPL. CHEFFERIE YIDI WADI / A": [
            {
              station: "DANEYEL",
              voters: 294
            },
            {
              station: "KARAGAMARE",
              voters: 294
            },
            {
              station: "YAERE",
              voters: 294
            },
            {
              station: "MBORI",
              voters: 294
            },
            {
              station: "YIDI",
              voters: 294
            },
            {
              station: "WADI",
              voters: 294
            },
          ],
          "ESPL. CHEFFERIE YOLDE NAGGUE / A": [
            {
              station: "BAGARISSE",
              voters: 538
            },
            {
              station: "COURGNOUGNOU",
              voters: 538
            },
            {
              station: "FOFTOUROU",
              voters: 538
            },
            {
              station: "YOLDE",
              voters: 1076
            },
            {
              station: "NAGGUE",
              voters: 538
            },
            {
              station: "NGARBA",
              voters: 538
            },
          ],
          "ESPL. LAMIDAT PETTE GARRE / A": [
            {
              station: "PETTE",
              voters: 383
            },
          ],
          "ESPL. MOSQUEE AMMA HAIRI / A": [
            {
              station: "AMMA",
              voters: 182
            },
            {
              station: "HAIRI",
              voters: 182
            },
            {
              station: "POUTCHOUROU",
              voters: 182
            },
            {
              station: "WOURO",
              voters: 4080
            },
          ],
          "ESPL. MOSQUEE MBANAROU / A": [
            {
              station: "MBANAROU",
              voters: 205
            },
            {
              station: "SILOKDJI",
              voters: 205
            },
          ],
          "ESPL. MOSQUEE TCHALNGA / A": [
            {
              station: "TCHALNGA",
              voters: 304
            },
          ],
          "ESPL. MOSQUEE WOURO ABBA YAYA / A": [
            {
              station: "YAYA",
              voters: 184
            },
          ],
          "MARCHE DJAOUDE / A": [
            {
              station: "DJAOUDE",
              voters: 813
            },
            {
              station: "MOKOSSE",
              voters: 813
            },
          ],
          "POSTE IDENTIFICATION PETTE / A": [
            {
              station: "LOPERE",
              voters: 606
            },
            {
              station: "WOILAWO",
              voters: 606
            },
          ],
        },
      },
      "MAYO-TSANAGA": {
        "BOURHA": {
          "CES DE GAMBOURA / A": [
            {
              station: "MADAKOU",
              voters: 252
            },
            {
              station: "MANDJAOULA",
              voters: 252
            },
            {
              station: "NGONGONA",
              voters: 252
            },
            {
              station: "TCHILTI",
              voters: 252
            },
          ],
          "CHEFFERIE DE BOUKOULA GASHIGA / A": [
            {
              station: "GASHIGA",
              voters: 1017
            },
            {
              station: "GUINGOURA",
              voters: 485
            },
            {
              station: "KOUDAGUILA",
              voters: 485
            },
            {
              station: "TCHANTCHI",
              voters: 485
            },
          ],
          "CHEFFERIE DE BOUKOULA NDJAMENA / A": [
            {
              station: "HINGRA",
              voters: 882
            },
            {
              station: "NDJAMENA",
              voters: 1005
            },
          ],
          "CHEFFERIE DE GUILI -YOLDE / A": [
            {
              station: "LANGUI",
              voters: 696
            },
            {
              station: "YOLDE-MODIBO",
              voters: 338
            },
          ],
          "CHEFFERIE DE HAOU-GUILI / A": [
            {
              station: "HAOU-GUILI",
              voters: 514
            },
          ],
          "CHEFFERIE DE KISSAM / A": [
            {
              station: "DANDJINE",
              voters: 248
            },
            {
              station: "KISSAM",
              voters: 248
            },
            {
              station: "HERAHOULI",
              voters: 248
            },
          ],
          "CHEFFERIE DE KONDERHA / A": [
            {
              station: "HOUBARE",
              voters: 522
            },
            {
              station: "KONDERHA",
              voters: 390
            },
          ],
          "CHEFFERIE DE LONGOM / A": [
            {
              station: "BOURMOULOUM",
              voters: 193
            },
            {
              station: "KILVID",
              voters: 193
            },
            {
              station: "LONGOM",
              voters: 193
            },
            {
              station: "MANDAMAH",
              voters: 193
            },
          ],
          "CHEFFERIE DE MAZAVOU HOSSERE / A": [
            {
              station: "MAZAVOU",
              voters: 683
            },
          ],
          "CHEFFERIE DE MAZAVOU I / A": [
            {
              station: "PLAINE",
              voters: 500
            },
            {
              station: "WAZLA",
              voters: 500
            },
          ],
          "CHEFFERIE DE OUDDA BALIWOL / A": [
            {
              station: "BALIWOL",
              voters: 1506
            },
            {
              station: "CHIKOU",
              voters: 698
            },
            {
              station: "LOUGUERE",
              voters: 698
            },
          ],
          "CHEFFERIE DE OUDDA CARREFOUR / A": [
            {
              station: "GOUTTOU",
              voters: 201
            },
            {
              station: "GUEKI",
              voters: 201
            },
            {
              station: "OULEKI",
              voters: 201
            },
          ],
          "CHEFFERIE DE OUDDA WAZA'A / A": [
            {
              station: "WAZA'A",
              voters: 89
            },
          ],
          "CHEFFERIE DE RIPPI-GAMBOURA / A": [
            {
              station: "LIGOU",
              voters: 161
            },
            {
              station: "MAGA",
              voters: 161
            },
            {
              station: "RIPPI",
              voters: 161
            },
          ],
          "CHEFFERIE DE TCHOUNGOULA / A": [
            {
              station: "GOULATCHI",
              voters: 162
            },
            {
              station: "TCHOUNGOULA",
              voters: 162
            },
          ],
          "CHEFFERIE DE TELEKI LAIDE / A": [
            {
              station: "LAINDE",
              voters: 253
            },
            {
              station: "HOUDJI",
              voters: 253
            },
            {
              station: "POKA",
              voters: 253
            },
          ],
          "CHEFFERIE DE WADA / A": [
            {
              station: "WADA",
              voters: 94
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE DJIMI / A": [
            {
              station: "DJIMI",
              voters: 496
            },
            {
              station: "NOUNGOURA",
              voters: 248
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE WALBANA /  A": [
            {
              station: "MUIGINKIN",
              voters: 490
            },
            {
              station: "TAMPA",
              voters: 490
            },
            {
              station: "WALBANA",
              voters: 490
            },
          ],
          "ECOLE PRIVEE PROTESTANTE GAMBOURA /  A": [
            {
              station: "TRAKA",
              voters: 479
            },
            {
              station: "ZRA-GUING",
              voters: 479
            },
          ],
          "ECOLE PUBLIQUE DE BOUKOULA / A": [
            {
              station: "CHAMPAGNE",
              voters: 926
            },
            {
              station: "KADAMBA",
              voters: 1523
            },
            {
              station: "ECOLE",
              voters: 926
            },
            {
              station: "BOUKOULA",
              voters: 2890
            },
          ],
          "ECOLE PUBLIQUE DE BOUKOULA KADINA / A": [
            {
              station: "BARAMA",
              voters: 513
            },
            {
              station: "BETEMA",
              voters: 513
            },
            {
              station: "DJANTA",
              voters: 513
            },
            {
              station: "KADINA",
              voters: 513
            },
            {
              station: "OURO-DOUBBE",
              voters: 513
            },
          ],
          "ECOLE PUBLIQUE DE BOUKOULA MAZOUVA /  A": [
            {
              station: "MAZOUVA",
              voters: 374
            },
            {
              station: "WAFANGO",
              voters: 374
            },
          ],
          "ECOLE PUBLIQUE DE BOURHA / A": [
            {
              station: "KUITOU",
              voters: 808
            },
          ],
          "ECOLE PUBLIQUE DE DIGUILA / A": [
            {
              station: "DIGUILA",
              voters: 209
            },
            {
              station: "NOUGOURA",
              voters: 209
            },
          ],
          "ECOLE PUBLIQUE DE DJEKI / A": [
            {
              station: "DAROUA",
              voters: 273
            },
            {
              station: "DJEKI",
              voters: 273
            },
            {
              station: "GOULAHA",
              voters: 273
            },
            {
              station: "KIDJECHI",
              voters: 273
            },
            {
              station: "MODJIVI",
              voters: 273
            },
          ],
          "ECOLE PUBLIQUE DE DOUVA / A": [
            {
              station: "BOURGOUM",
              voters: 223
            },
            {
              station: "DOUVA",
              voters: 446
            },
            {
              station: "MARCHE",
              voters: 654
            },
            {
              station: "MBABI",
              voters: 223
            },
            {
              station: "WAGOU",
              voters: 223
            },
          ],
          "ECOLE PUBLIQUE DE KOLERBESSI / A": [
            {
              station: "KOLERBESSI",
              voters: 237
            },
            {
              station: "RERE",
              voters: 237
            },
          ],
          "ECOLE PUBLIQUE DE MABOUDJI / A": [
            {
              station: "DJOUGOURMA",
              voters: 902
            },
            {
              station: "GUINWADJOUGOURMA",
              voters: 902
            },
            {
              station: "KOULIRA",
              voters: 1010
            },
            {
              station: "LAYI",
              voters: 902
            },
            {
              station: "NOUM-MABOUDJI",
              voters: 902
            },
            {
              station: "SALAWA",
              voters: 902
            },
          ],
          "ECOLE PUBLIQUE DE MAHAOU / A": [
            {
              station: "KONDER",
              voters: 165
            },
            {
              station: "TERERE",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE DE MBOLA / A": [
            {
              station: "ASKI",
              voters: 334
            },
            {
              station: "FOULBE",
              voters: 2968
            },
            {
              station: "MBOLA",
              voters: 668
            },
            {
              station: "MOUDJI",
              voters: 582
            },
            {
              station: "WOUDEMI",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE DE MITCHIMI / A": [
            {
              station: "BOUMBOUNA",
              voters: 207
            },
            {
              station: "MITCHIMI",
              voters: 207
            },
          ],
          "ECOLE PUBLIQUE DE MOUDI / A": [
            {
              station: "MOUDI",
              voters: 340
            },
          ],
          "ECOLE PUBLIQUE DE MOUDJADA / A": [
            {
              station: "MOUDJADA",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE DE MOVOI DJALINGO / A": [
            {
              station: "DJALINGO",
              voters: 289
            },
            {
              station: "MOVOI",
              voters: 597
            },
          ],
          "ECOLE PUBLIQUE DE NGONGA / A": [
            {
              station: "GUIWADINA",
              voters: 420
            },
            {
              station: "NGONGA",
              voters: 420
            },
          ],
          "ECOLE PUBLIQUE DE NGUEVER / A": [
            {
              station: "NGUEVER",
              voters: 782
            },
            {
              station: "HOUSSERE",
              voters: 391
            },
            {
              station: "TCHADA-DOUGOUE",
              voters: 391
            },
          ],
          "ECOLE PUBLIQUE DE OUDDA / A": [
            {
              station: "ELEVEUR",
              voters: 278
            },
            {
              station: "KAMAZOU",
              voters: 278
            },
          ],
          "ECOLE PUBLIQUE DE OUDDA LAKA / A": [
            {
              station: "OUDA",
              voters: 327
            },
            {
              station: "LAKA",
              voters: 654
            },
            {
              station: "OUDDA",
              voters: 327
            },
          ],
          "ECOLE PUBLIQUE DE PASSA / A": [
            {
              station: "PASSA",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE SOUA / A": [
            {
              station: "SOUA",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE DE TAIFARA / A": [
            {
              station: "DJARGA",
              voters: 420
            },
            {
              station: "TAIFARA",
              voters: 420
            },
            {
              station: "GUENG",
              voters: 420
            },
            {
              station: "KOUSSEDI",
              voters: 420
            },
            {
              station: "LIK-LIK",
              voters: 420
            },
            {
              station: "TETER",
              voters: 420
            },
            {
              station: "YAMGOUBIRI",
              voters: 750
            },
          ],
          "ECOLE PUBLIQUE DE TCHEVI / A": [
            {
              station: "GOUMABA",
              voters: 410
            },
            {
              station: "MAFA",
              voters: 410
            },
            {
              station: "OUDAVOUNA",
              voters: 410
            },
          ],
          "ECOLE PUBLIQUE DE TELEKI / A": [
            {
              station: "DAKABOUM",
              voters: 437
            },
            {
              station: "DANOU",
              voters: 437
            },
            {
              station: "DJIFFI",
              voters: 437
            },
            {
              station: "GUINDING-GUINDING",
              voters: 437
            },
            {
              station: "KIDEBESSI",
              voters: 437
            },
            {
              station: "KOUPEA-BABAL",
              voters: 437
            },
            {
              station: "OUBA",
              voters: 437
            },
            {
              station: "PELLOU",
              voters: 437
            },
            {
              station: "TAZOUMAI",
              voters: 437
            },
            {
              station: "TELEKI",
              voters: 690
            },
            {
              station: "HOSSERE",
              voters: 620
            },
            {
              station: "ZOURMAI",
              voters: 437
            },
          ],
          "ECOLE PUBLIQUE DE WATIR / A": [
            {
              station: "DOUM-OULEKI",
              voters: 479
            },
            {
              station: "TAMASSI",
              voters: 479
            },
            {
              station: "TCHIROU-DAOU",
              voters: 479
            },
            {
              station: "WATIR",
              voters: 743
            },
          ],
          "ECOLE PUBLIQUE DE YOUMDOUM / A": [
            {
              station: "KOGOURGOUTCHA",
              voters: 176
            },
            {
              station: "YOUMDOUM",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE DE ZAHOURA / A": [
            {
              station: "DAGUIRLA",
              voters: 473
            },
            {
              station: "ZAHOURA",
              voters: 847
            },
            {
              station: "KOUDKOURA",
              voters: 473
            },
            {
              station: "PARAMA",
              voters: 473
            },
            {
              station: "WOUMSSIKI",
              voters: 682
            },
            {
              station: "ZOU",
              voters: 721
            },
          ],
          "ECOLE PUBLIQUE DE ZOUVOU / A": [
            {
              station: "ZOUVOU",
              voters: 272
            },
          ],
          "EGLISE DE MAHAOU / A": [
            {
              station: "GAING",
              voters: 264
            },
            {
              station: "MAHAOU",
              voters: 264
            },
            {
              station: "EGLISE",
              voters: 264
            },
            {
              station: "PALNGAROUA",
              voters: 264
            },
            {
              station: "PAPLA-MADAI",
              voters: 264
            },
            {
              station: "PLADOUM",
              voters: 264
            },
            {
              station: "TALONG",
              voters: 264
            },
            {
              station: "MAHAO",
              voters: 264
            },
          ],
          "EGLISE DE MBOLA-MBANKARA / A": [
            {
              station: "MBANKARA",
              voters: 180
            },
            {
              station: "MBANKARA-DOUGOUWA",
              voters: 180
            },
          ],
          "EGLISE DE MOVOI MARCHE GARBA / A": [
            {
              station: "GARBA",
              voters: 308
            },
            {
              station: "MAYO-KINADA",
              voters: 308
            },
          ],
          "EGLISE DE VASSOU / A": [
            {
              station: "VASSOU",
              voters: 330
            },
          ],
          "GRENIER COM. LANGUI MAGANAK / A": [
            {
              station: "MAGANAK",
              voters: 716
            },
            {
              station: "PEUL",
              voters: 358
            },
          ],
          "HOPITAL DE BOUKOULA / A": [
            {
              station: "DAZA",
              voters: 597
            },
            {
              station: "FARANA",
              voters: 597
            },
            {
              station: "GADAMAYO",
              voters: 2682
            },
            {
              station: "HOPITAL",
              voters: 597
            },
          ],
          "LAMIDAT DE TCHEVI / A": [
            {
              station: "SAFARA",
              voters: 288
            },
          ],
          "MARCHE DE GAMBOURA / A": [
            {
              station: "GAMBOURA",
              voters: 690
            },
            {
              station: "KIDOUM",
              voters: 345
            },
          ],
          "MARCHE DE GUILI / A": [
            {
              station: "WAKSEN",
              voters: 430
            },
            {
              station: "GUILI-SILI",
              voters: 1098
            },
            {
              station: "LOUMORE",
              voters: 1572
            },
            {
              station: "GUILI",
              voters: 2347
            },
          ],
          "MARCHE DE TCHEVI / A": [
            {
              station: "TCHEVI",
              voters: 1221
            },
            {
              station: "MOVONA",
              voters: 523
            },
            {
              station: "PONT",
              voters: 523
            },
            {
              station: "LIRA",
              voters: 523
            },
          ],
          "MISSION CATHOLIQUE DE BOURHA / A": [
            {
              station: "DIHI",
              voters: 356
            },
            {
              station: "KABANG",
              voters: 1011
            },
            {
              station: "MISSION",
              voters: 356
            },
            {
              station: "CATH",
              voters: 356
            },
            {
              station: "MAYANKA",
              voters: 356
            },
            {
              station: "ZOUMBOUDA",
              voters: 517
            },
          ],
          "MISSION CATHOLIQUE DE GUILI / A": [
            {
              station: "BANA",
              voters: 689
            },
            {
              station: "BANHOU",
              voters: 259
            },
          ],
          "PLACE DES FETES DE BOURHA / A": [
            {
              station: "BOURHA-WANGO",
              voters: 1088
            },
            {
              station: "FEHAEL",
              voters: 280
            },
          ],
          "POSTE DE DOUANE DE BOURHA / A": [
            {
              station: "BAMGUEL",
              voters: 441
            },
            {
              station: "DJIMETA",
              voters: 564
            },
            {
              station: "DOUANE",
              voters: 441
            },
            {
              station: "LAMORDE",
              voters: 5716
            },
            {
              station: "III",
              voters: 779
            },
            {
              station: "BOURHA",
              voters: 3929
            },
            {
              station: "OURO-DOLE",
              voters: 441
            },
          ],
          "POSTE DE POLICE DE BOURHA / A": [
            {
              station: "POSTE",
              voters: 532
            },
            {
              station: "POLICE",
              voters: 532
            },
          ],
          "STADE PLATA / A": [
            {
              station: "DOUMBOULBAYE",
              voters: 102
            },
            {
              station: "HOUTIA",
              voters: 102
            },
          ],
        },
        "HINA": {
          "BERING CENTRE GAINA / A": [
            {
              station: "BERING",
              voters: 688
            },
            {
              station: "CENTRTE",
              voters: 313
            },
          ],
          "CENTRE DE SANTE BERING / A": [
            {
              station: "GADA",
              voters: 126
            },
            {
              station: "ECOLE",
              voters: 63
            },
          ],
          "DOMAYO MOULDAR / A": [
            {
              station: "DOMAYO",
              voters: 227
            },
          ],
          "ECOLE PUB. BILINGUE LAMORDE MARBAK / A": [
            {
              station: "LAMORDE",
              voters: 556
            },
            {
              station: "MARBAK",
              voters: 1112
            },
          ],
          "ECOLE PUB. DE BERING HOSSERE / A": [
            {
              station: "HOSSERE",
              voters: 390
            },
            {
              station: "DOGAINA",
              voters: 149
            },
          ],
          "ECOLE PUB. DE DJOUMDJOUM MOTOKOL / A": [
            {
              station: "DJOUMDJOUM",
              voters: 313
            },
            {
              station: "DOUWOUNG",
              voters: 409
            },
            {
              station: "HATARAM",
              voters: 409
            },
          ],
          "ECOLE PUB. DES PARENTS DE MADINA / A": [
            {
              station: "MADINA",
              voters: 86
            },
          ],
          "ECOLE PUB. DES PARENTS DE WAFKA / A": [
            {
              station: "DOGOYE",
              voters: 142
            },
            {
              station: "WADA",
              voters: 142
            },
            {
              station: "WAFKA",
              voters: 142
            },
          ],
          "ECOLE PUB. HINA WINDE WOUZOUDAM / A": [
            {
              station: "WOUZOUDAM",
              voters: 235
            },
          ],
          "ECOLE PUB. KEFETDJEVRING CENTRE / A": [
            {
              station: "KEFETDJEVRING",
              voters: 316
            },
          ],
          "ECOLE PUB. ZOUVOUL GARA MEDEFKET / A": [
            {
              station: "GARA",
              voters: 313
            },
            {
              station: "MEDEKFET",
              voters: 313
            },
            {
              station: "KOYANG",
              voters: 439
            },
          ],
          "ECOLE PUBL. DES PARENTS GAROUA DABA /  A": [
            {
              station: "GAROUA",
              voters: 66
            },
            {
              station: "DABA",
              voters: 66
            },
          ],
          "ECOLE PUBLIQUE DE BAMGUEL / A": [
            {
              station: "BAMGUEL",
              voters: 344
            },
          ],
          "ECOLE PUBLIQUE DE BASSARA / A": [
            {
              station: "BASSARA",
              voters: 586
            },
            {
              station: "ABDOULAYE",
              voters: 293
            },
            {
              station: "MANA",
              voters: 750
            },
          ],
          "ECOLE PUBLIQUE DE DJADDA / A": [
            {
              station: "DJADDA",
              voters: 133
            },
            {
              station: "HINA",
              voters: 634
            },
          ],
          "ECOLE PUBLIQUE DE DJORLDONG / A": [
            {
              station: "BILDAOU",
              voters: 523
            },
            {
              station: "DJORLDONG",
              voters: 523
            },
            {
              station: "MEDJEBDJEB",
              voters: 523
            },
            {
              station: "ZOUGO",
              voters: 523
            },
            {
              station: "GOUGONG",
              voters: 789
            },
          ],
          "ECOLE PUBLIQUE DE FOULDAI / A": [
            {
              station: "FOULDAI",
              voters: 870
            },
            {
              station: "BIVOUNG",
              voters: 377
            },
          ],
          "ECOLE PUBLIQUE DE GAMDOUGOUM / A": [
            {
              station: "MOUDOUWOUR",
              voters: 280
            },
            {
              station: "TCHADAMOUA",
              voters: 514
            },
          ],
          "ECOLE PUBLIQUE DE GONOZO / A": [
            {
              station: "GONOZO",
              voters: 115
            },
          ],
          "ECOLE PUBLIQUE DE GOUGONG VAK / A": [
            {
              station: "VAK",
              voters: 266
            },
            {
              station: "MBOURDANG",
              voters: 266
            },
            {
              station: "DAIROU",
              voters: 266
            },
          ],
          "ECOLE PUBLIQUE DE GOUVDA / A": [
            {
              station: "GOUVDA",
              voters: 344
            },
            {
              station: "LOUGGUERE",
              voters: 555
            },
            {
              station: "MADAMA",
              voters: 344
            },
          ],
          "ECOLE PUBLIQUE DE HAKOULA / A": [
            {
              station: "HAKOULA",
              voters: 255
            },
            {
              station: "LOUBOU",
              voters: 255
            },
            {
              station: "MOUDA",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE DE HAKOULA WALDE / A": [
            {
              station: "WALDE",
              voters: 180
            },
          ],
          "ECOLE PUBLIQUE DE HODANGO / A": [
            {
              station: "HODANGO",
              voters: 181
            },
          ],
          "ECOLE PUBLIQUE DE HOUVA / A": [
            {
              station: "HOUVA",
              voters: 368
            },
            {
              station: "MANDJAH",
              voters: 674
            },
            {
              station: "TCHAKADJAM",
              voters: 368
            },
          ],
          "ECOLE PUBLIQUE DE KABBA GUIZIGA / A": [
            {
              station: "GUIZIGA",
              voters: 367
            },
          ],
          "ECOLE PUBLIQUE DE KAFTAKA CENTRE / A": [
            {
              station: "KAFTAKA",
              voters: 1189
            },
            {
              station: "LITAHI",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE KETCHEBLEH / A": [
            {
              station: "KETCHEBLEH",
              voters: 235
            },
            {
              station: "TAIFARA",
              voters: 501
            },
            {
              station: "TRI",
              voters: 501
            },
          ],
          "ECOLE PUBLIQUE DE MADAI / A": [
            {
              station: "MADAI",
              voters: 75
            },
          ],
          "ECOLE PUBLIQUE DE MAYO KABBA CENTRE /  A": [
            {
              station: "MAYO",
              voters: 1373
            },
          ],
          "ECOLE PUBLIQUE DE MAYO MBANA / A": [
            {
              station: "MBANA",
              voters: 402
            },
          ],
          "ECOLE PUBLIQUE DE MBOUROU / A": [
            {
              station: "MBOUROU",
              voters: 248
            },
          ],
          "ECOLE PUBLIQUE DE MBRAF MAYO / A": [
            {
              station: "MBRAF",
              voters: 835
            },
            {
              station: "DJABOU",
              voters: 297
            },
            {
              station: "TCHIKOUA",
              voters: 297
            },
          ],
          "ECOLE PUBLIQUE DE MILDINDING / A": [
            {
              station: "LYCEE",
              voters: 242
            },
            {
              station: "MILDINDING",
              voters: 242
            },
          ],
          "ECOLE PUBLIQUE DE MOUTOROK / A": [
            {
              station: "BOUDOUM",
              voters: 434
            },
            {
              station: "DJEREK",
              voters: 434
            },
            {
              station: "MOUTOROK",
              voters: 528
            },
            {
              station: "JEAN",
              voters: 264
            },
            {
              station: "OUMAROU",
              voters: 264
            },
          ],
          "ECOLE PUBLIQUE DE PALVA / A": [
            {
              station: "PALVA",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE PANAI / A": [
            {
              station: "PANAI",
              voters: 468
            },
          ],
          "ECOLE PUBLIQUE DE PANAKA / A": [
            {
              station: "HARDE",
              voters: 233
            },
            {
              station: "PANAKA",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE DE WANAROU BOUBA / A": [
            {
              station: "WANAROU",
              voters: 709
            },
            {
              station: "BOUBA",
              voters: 291
            },
          ],
          "ECOLE PUBLIQUE DE ZOUVOUL CASIER / A": [
            {
              station: "CASIER",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE ZOUVOUL FOULBE / A": [
            {
              station: "MAL",
              voters: 138
            },
            {
              station: "PASSAM",
              voters: 138
            },
            {
              station: "ZOUVOUL",
              voters: 663
            },
            {
              station: "FOULBE",
              voters: 138
            },
          ],
          "ECOLE PUBLIQUE PARENTS MALANVA / A": [
            {
              station: "BILDID",
              voters: 276
            },
            {
              station: "MALANVA",
              voters: 276
            },
          ],
          "EGLISE DE DAHANE / A": [
            {
              station: "DAHANE",
              voters: 152
            },
          ],
          "ESPL. CHEF. OURO DJEDIDI / A": [
            {
              station: "MBOURKOUTOM",
              voters: 94
            },
            {
              station: "DJEDIDI",
              voters: 188
            },
          ],
          "FOULDAI KOUTKOUTA / A": [
            {
              station: "KOUTKOUTA",
              voters: 116
            },
          ],
          "GADAMAYO BERING / A": [
            {
              station: "GADAMAYO",
              voters: 226
            },
          ],
          "GOLONG / A": [
            {
              station: "GOLONG",
              voters: 230
            },
          ],
          "GUINGUI / A": [
            {
              station: "GUINGUI",
              voters: 100
            },
            {
              station: "WINDE",
              voters: 334
            },
            {
              station: "BELLO",
              voters: 243
            },
          ],
          "HINA WINDE GOUVGARBAK / A": [
            {
              station: "BEDI",
              voters: 569
            },
            {
              station: "GOUVGARBAK",
              voters: 334
            },
            {
              station: "KABBA",
              voters: 788
            },
            {
              station: "DELI",
              voters: 477
            },
          ],
          "KAFTAKA NGAOUNGOULI / A": [
            {
              station: "NGAOUNGOULI",
              voters: 189
            },
          ],
          "LARBA / A": [
            {
              station: "LARBA",
              voters: 286
            },
            {
              station: "TCHALKA",
              voters: 143
            },
            {
              station: "BADI",
              voters: 143
            },
          ],
          "LOUGGUERE SO'O CENTRE / A": [
            {
              station: "SO'O",
              voters: 211
            },
          ],
          "LOUGGUERE SO'O MOUTCHOUKOUDAK / A": [
            {
              station: "MEDEBEING",
              voters: 215
            },
            {
              station: "MOUTCHOUKOUDAK",
              voters: 215
            },
          ],
          "MARCHE A BETAIL DE NEIMOUNDJORONG / A": [
            {
              station: "MOUGOUZOUM",
              voters: 185
            },
            {
              station: "NEIMOUNDJORONG",
              voters: 185
            },
          ],
          "MARCHE DE BOKO / A": [
            {
              station: "BOKO",
              voters: 279
            },
            {
              station: "BOURGALA",
              voters: 279
            },
            {
              station: "DANWOUROUM",
              voters: 431
            },
            {
              station: "DRAME",
              voters: 279
            },
          ],
          "MARCHE DE HOUBARE / A": [
            {
              station: "HOUBARE",
              voters: 226
            },
            {
              station: "NDJIDDA",
              voters: 113
            },
            {
              station: "TAKOULI",
              voters: 113
            },
          ],
          "MARCHE DE LDOUA / A": [
            {
              station: "LDOUA",
              voters: 174
            },
          ],
          "MARCHE DE LESNAI / A": [
            {
              station: "LESNAI",
              voters: 367
            },
          ],
          "MARCHE DE NDLA / A": [
            {
              station: "MBODI",
              voters: 150
            },
            {
              station: "NDLA",
              voters: 150
            },
          ],
          "MARCHE DE NGNIBANGO / A": [
            {
              station: "NGNIBANGO",
              voters: 233
            },
          ],
          "MARCHE DE VAGRIMBAI / A": [
            {
              station: "DJIGUILDENG",
              voters: 338
            },
            {
              station: "VAGRIMBAI",
              voters: 338
            },
          ],
          "MARCHE DE ZOUVOUL BAGUING / A": [
            {
              station: "BAGUING",
              voters: 243
            },
          ],
          "MBARMA / A": [
            {
              station: "MBARMA",
              voters: 352
            },
            {
              station: "KONAI",
              voters: 176
            },
            {
              station: "LOCOAT",
              voters: 176
            },
          ],
          "MEDEK KOYANG / A": [
            {
              station: "MEDEK",
              voters: 252
            },
            {
              station: "BASSAI",
              voters: 126
            },
          ],
          "MOULDAR CENTRE / A": [
            {
              station: "MOULDAR",
              voters: 659
            },
            {
              station: "CENTRE",
              voters: 1998
            },
            {
              station: "ZIRMITIS",
              voters: 216
            },
          ],
          "OURO GUERTODE CENTRE / A": [
            {
              station: "GUERTODE",
              voters: 357
            },
          ],
          "OURO LAWANE MANA / A": [
            {
              station: "DJAMBOUTOU",
              voters: 202
            },
            {
              station: "LAWANE",
              voters: 202
            },
          ],
          "OURO TOLE / A": [
            {
              station: "CAMP",
              voters: 266
            },
            {
              station: "CHINOIS",
              voters: 266
            },
            {
              station: "CARREFOUR",
              voters: 482
            },
            {
              station: "MOUSSA",
              voters: 266
            },
            {
              station: "MATAKAM",
              voters: 766
            },
            {
              station: "MBOURKOUTOUM",
              voters: 360
            },
            {
              station: "OURO",
              voters: 2928
            },
            {
              station: "TOLE",
              voters: 266
            },
          ],
          "OURO TOUBOU BAMGUEL / A": [
            {
              station: "TOUBOU",
              voters: 123
            },
          ],
          "PALPAL / A": [
            {
              station: "PALPAL",
              voters: 200
            },
          ],
          "TACHA GAMDOUGOUM / A": [
            {
              station: "GAMDOUGOUM",
              voters: 573
            },
          ],
          "WANAROU GAZOUAL / A": [
            {
              station: "GAZOUAL",
              voters: 163
            },
          ],
        },
        "KOZA": {
          "CASE DE SANTE DE KOUFTAH / A": [
            {
              station: "KOUFTAH",
              voters: 571
            },
            {
              station: "MOHORO",
              voters: 571
            },
          ],
          "CEAC DE KOZA / A": [
            {
              station: "GUIDIMBEK",
              voters: 224
            },
          ],
          "ECOLE MATERNELLE DE KOZA / A": [
            {
              station: "FONCTIONNAIRES",
              voters: 237
            },
            {
              station: "AUTRES",
              voters: 237
            },
          ],
          "ECOLE PRIVEE ADVENTISTE DE KOZA / A": [
            {
              station: "KECHKEME",
              voters: 1116
            },
            {
              station: "WALADE",
              voters: 1116
            },
          ],
          "ECOLE PRIVEE CATH. DE DJINGLIYA / A": [
            {
              station: "GUID-DZAH",
              voters: 692
            },
            {
              station: "GUID-MBROM",
              voters: 692
            },
            {
              station: "TCHEME",
              voters: 692
            },
            {
              station: "TSILEKEKE",
              voters: 692
            },
          ],
          "ECOLE PRIVEE CATH. DE GALDALA / A": [
            {
              station: "GALDALA",
              voters: 892
            },
            {
              station: "MAWA",
              voters: 892
            },
          ],
          "ECOLE PRIVEE CATH. DE MOUTCHIKAR / A": [
            {
              station: "DIGUIRBI",
              voters: 798
            },
            {
              station: "LTAGAM",
              voters: 798
            },
            {
              station: "NDOURWAD",
              voters: 798
            },
            {
              station: "WALTEM",
              voters: 798
            },
            {
              station: "WAYAM-MBOUDZA",
              voters: 798
            },
            {
              station: "ZAROUA",
              voters: 1700
            },
            {
              station: "MOUTCHIKAR",
              voters: 798
            },
          ],
          "ECOLE PRIVEE CATH. STE MARIE DE KOZA /  A": [
            {
              station: "DOUBANGO",
              voters: 798
            },
            {
              station: "KALANGUI",
              voters: 798
            },
            {
              station: "KOZA",
              voters: 2790
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE KILDA / A": [
            {
              station: "KILDA",
              voters: 1778
            },
            {
              station: "MBEVER",
              voters: 653
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE KOZA / A": [
            {
              station: "HAMDALA",
              voters: 815
            },
            {
              station: "LAMORDE",
              voters: 1582
            },
          ],
          "ECOLE PUBLIQUE DE DAKOTCHER / A": [
            {
              station: "DAKOTCHER",
              voters: 588
            },
          ],
          "ECOLE PUBLIQUE DE DJINGLIYA PLAINE / A": [
            {
              station: "DZAH",
              voters: 1256
            },
            {
              station: "GUIRNAWA",
              voters: 1256
            },
            {
              station: "JELE",
              voters: 2395
            },
            {
              station: "DJINGLIYA",
              voters: 1256
            },
            {
              station: "PLAINE",
              voters: 2057
            },
            {
              station: "MBOUZOUM",
              voters: 1256
            },
            {
              station: "VARKILDA",
              voters: 1256
            },
          ],
          "ECOLE PUBLIQUE DE GABAS / A": [
            {
              station: "GABAS",
              voters: 516
            },
            {
              station: "WAGZA",
              voters: 516
            },
          ],
          "ECOLE PUBLIQUE DE GABOUA / A": [
            {
              station: "KODJELAO",
              voters: 767
            },
            {
              station: "GABOUA",
              voters: 767
            },
            {
              station: "MORGOA",
              voters: 767
            },
            {
              station: "(VILLAGE)",
              voters: 767
            },
            {
              station: "MOSKOTA",
              voters: 767
            },
            {
              station: "WALLASSA",
              voters: 767
            },
          ],
          "ECOLE PUBLIQUE DE GOUZDA / A": [
            {
              station: "DABLA",
              voters: 1035
            },
            {
              station: "DANAWA",
              voters: 1035
            },
            {
              station: "GOURRA",
              voters: 1688
            },
            {
              station: "GOUZDA",
              voters: 1035
            },
            {
              station: "KOUDONG",
              voters: 1035
            },
            {
              station: "MODZOV",
              voters: 1035
            },
          ],
          "ECOLE PUBLIQUE DE GUEDJELE / A": [
            {
              station: "GUEDJELE",
              voters: 330
            },
          ],
          "ECOLE PUBLIQUE DE GUID-NGOLDA / A": [
            {
              station: "GUID-NGOLDA",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE HIRCHE / A": [
            {
              station: "KIDAOLA",
              voters: 755
            },
            {
              station: "MIDALA",
              voters: 1094
            },
            {
              station: "ZAWADA",
              voters: 1094
            },
          ],
          "ECOLE PUBLIQUE DE KAZIE / A": [
            {
              station: "KAZIE",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE DE KILDA / A": [
            {
              station: "BANQUETTE",
              voters: 451
            },
            {
              station: "KOKORDONA",
              voters: 451
            },
            {
              station: "MALTALAM",
              voters: 790
            },
          ],
          "ECOLE PUBLIQUE DE KOZA I / A": [
            {
              station: "GUID-WAYAM",
              voters: 1181
            },
            {
              station: "NDOURWAT",
              voters: 1181
            },
          ],
          "ECOLE PUBLIQUE DE KOZA II / A": [
            {
              station: "GUETALE",
              voters: 767
            },
            {
              station: "OURO-MBAI",
              voters: 767
            },
          ],
          "ECOLE PUBLIQUE DE LDAMA / A": [
            {
              station: "LDAMA",
              voters: 518
            },
          ],
          "ECOLE PUBLIQUE DE MADAKAR / A": [
            {
              station: "DZAKOURMA",
              voters: 940
            },
            {
              station: "GUID-KOZA",
              voters: 940
            },
            {
              station: "MADAKAR",
              voters: 940
            },
            {
              station: "TOKOZOK",
              voters: 940
            },
          ],
          "ECOLE PUBLIQUE DE MAKANDAI / A": [
            {
              station: "CHERE",
              voters: 1062
            },
            {
              station: "GOLIBI",
              voters: 2002
            },
            {
              station: "MAKANDAI",
              voters: 2124
            },
            {
              station: "MADA",
              voters: 1062
            },
            {
              station: "NDOUVGUI",
              voters: 3551
            },
            {
              station: "WOUYAK",
              voters: 1062
            },
          ],
          "ECOLE PUBLIQUE DE MALTAMAYA / A": [
            {
              station: "GAIVOUKIDA",
              voters: 1520
            },
            {
              station: "GOUDOUVYAGOYE",
              voters: 1239
            },
            {
              station: "MALTAMAYA",
              voters: 1239
            },
            {
              station: "OUSSA",
              voters: 1239
            },
          ],
          "ECOLE PUBLIQUE DE MARBA / A": [
            {
              station: "BIGDE",
              voters: 517
            },
            {
              station: "MARBA",
              voters: 517
            },
          ],
          "ECOLE PUBLIQUE DE MAVOUMAI / A": [
            {
              station: "HAZALAK",
              voters: 810
            },
            {
              station: "MAVOUMAI",
              voters: 810
            },
          ],
          "ECOLE PUBLIQUE DE MAWA / A": [
            {
              station: "GUEGUEDWERE",
              voters: 1012
            },
            {
              station: "MADALA",
              voters: 1012
            },
            {
              station: "ZILER",
              voters: 2024
            },
            {
              station: "CENTRE",
              voters: 1012
            },
            {
              station: "SODECOTON",
              voters: 1012
            },
          ],
          "ECOLE PUBLIQUE DE MBARDAM / A": [
            {
              station: "MASSIF",
              voters: 433
            },
          ],
          "ECOLE PUBLIQUE DE MODOKO / A": [
            {
              station: "GOLDA",
              voters: 902
            },
            {
              station: "HATAKA",
              voters: 902
            },
            {
              station: "KIRBI",
              voters: 902
            },
            {
              station: "PETCHEM",
              voters: 902
            },
            {
              station: "MODOKO",
              voters: 902
            },
          ],
          "ECOLE PUBLIQUE DE MOULI / A": [
            {
              station: "JEKETEM",
              voters: 980
            },
            {
              station: "MELDERE",
              voters: 980
            },
            {
              station: "MOULI",
              voters: 980
            },
            {
              station: "NGALA",
              voters: 980
            },
            {
              station: "VARA",
              voters: 980
            },
          ],
          "ECOLE PUBLIQUE DE MOUZOUA / A": [
            {
              station: "MOUZOUA",
              voters: 540
            },
            {
              station: "HIJE",
              voters: 577
            },
          ],
          "ECOLE PUBLIQUE DE OULAD / A": [
            {
              station: "CHITEUK",
              voters: 879
            },
            {
              station: "DAOUTA",
              voters: 879
            },
            {
              station: "DZABA",
              voters: 1149
            },
            {
              station: "OULAD",
              voters: 1758
            },
            {
              station: "PAMBAO",
              voters: 1677
            },
          ],
          "ECOLE PUBLIQUE DE TENDEO / A": [
            {
              station: "GUID-GUILA",
              voters: 300
            },
            {
              station: "KOUCHERE",
              voters: 300
            },
            {
              station: "MADZARI",
              voters: 300
            },
            {
              station: "NZAKATI",
              voters: 300
            },
          ],
          "EGLISE PROTESTANTE DE DOUGVE / A": [
            {
              station: "DELDIR",
              voters: 167
            },
            {
              station: "DOUGVE",
              voters: 167
            },
            {
              station: "TIMA",
              voters: 167
            },
          ],
          "GUEDJELE MOKOLO GIC / A": [
            {
              station: "MOKOLO",
              voters: 190
            },
          ],
          "MARCHE DE GABOUA / A": [
            {
              station: "TOUBORO",
              voters: 339
            },
            {
              station: "YAMEDE",
              voters: 339
            },
          ],
          "MARCHE DE OULA / A": [
            {
              station: "OULA",
              voters: 472
            },
          ],
          "MAZI GIC / A": [
            {
              station: "MAZI",
              voters: 486
            },
          ],
          "MISSION ADVENTISE DE NDJENGUE / A": [
            {
              station: "MAKAWAT",
              voters: 183
            },
            {
              station: "NDJENGUE",
              voters: 183
            },
          ],
          "MISSION CATHOLIQUE DE MAMTSI / A": [
            {
              station: "MAMTSI",
              voters: 123
            },
            {
              station: "MBARDAM",
              voters: 556
            },
          ],
        },
        "MOGODE": {
          "ECOLE BILINGUE DE KOCH MANBA / A": [
            {
              station: "KOCH",
              voters: 196
            },
            {
              station: "MANBA",
              voters: 196
            },
            {
              station: "TCHINKIR",
              voters: 196
            },
          ],
          "ECOLE DES PARENTS DE GHWALEALEA / A": [
            {
              station: "GHWALEALEA",
              voters: 170
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE  MBOUGAHOU / A": [
            {
              station: "MELUM",
              voters: 529
            },
            {
              station: "MBOUGAHOU",
              voters: 529
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE DOUROUF /  A": [
            {
              station: "DOUROUF",
              voters: 183
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE HOUPOU / A": [
            {
              station: "HOUPOU",
              voters: 303
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE MELEH-LEH /  A": [
            {
              station: "MELEH-LEH",
              voters: 480
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE MOGODE / A": [
            {
              station: "KODAJEDA",
              voters: 2129
            },
            {
              station: "LAMORDE",
              voters: 2129
            },
            {
              station: "LDAKA",
              voters: 2129
            },
            {
              station: "WOULA",
              voters: 2129
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE RHUMZOU /  A": [
            {
              station: "GOVE",
              voters: 1175
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE SIR / A": [
            {
              station: "SIR",
              voters: 627
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE VITTE / A": [
            {
              station: "MAYO-DZIMI",
              voters: 403
            },
          ],
          "ECOLE PUBLIQUE D'AMSA / A": [
            {
              station: "BAZIRI",
              voters: 472
            },
            {
              station: "DOMAYO",
              voters: 472
            },
            {
              station: "FOULBE",
              voters: 4081
            },
            {
              station: "AMSA",
              voters: 472
            },
            {
              station: "WOUDEKA",
              voters: 472
            },
          ],
          "ECOLE PUBLIQUE DE BABADELI / A": [
            {
              station: "BABADELI",
              voters: 341
            },
          ],
          "ECOLE PUBLIQUE DE BARIKI / A": [
            {
              station: "BARIKI",
              voters: 466
            },
          ],
          "ECOLE PUBLIQUE DE BOULDROUM / A": [
            {
              station: "BOULDROUM",
              voters: 447
            },
          ],
          "ECOLE PUBLIQUE DE DJAGOMA / A": [
            {
              station: "DJAGOMA",
              voters: 480
            },
            {
              station: "MEDE",
              voters: 480
            },
          ],
          "ECOLE PUBLIQUE DE DOUMDEHI / A": [
            {
              station: "DOUMDEHI",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE DE DZAMBOU / A": [
            {
              station: "DZAMBOU",
              voters: 333
            },
            {
              station: "TEUNDEUM",
              voters: 542
            },
          ],
          "ECOLE PUBLIQUE DE GAMBA-SIRAKOUTI / A": [
            {
              station: "GAMBA-SIRAKOUTI",
              voters: 275
            },
          ],
          "ECOLE PUBLIQUE DE GHEA GOVA / A": [
            {
              station: "GHEA",
              voters: 206
            },
            {
              station: "GOVA",
              voters: 904
            },
          ],
          "ECOLE PUBLIQUE DE GILI / A": [
            {
              station: "GILI",
              voters: 293
            },
          ],
          "ECOLE PUBLIQUE DE GMAZE GOVA / A": [
            {
              station: "MAZE",
              voters: 624
            },
          ],
          "ECOLE PUBLIQUE DE GOURIA / A": [
            {
              station: "GOURIA",
              voters: 867
            },
            {
              station: "GAMBA",
              voters: 867
            },
            {
              station: "GUELEU",
              voters: 867
            },
            {
              station: "KAMA",
              voters: 867
            },
          ],
          "ECOLE PUBLIQUE DE GUILI GAWAR / A": [
            {
              station: "FTAI",
              voters: 453
            },
            {
              station: "GUILI",
              voters: 453
            },
            {
              station: "GAWAR",
              voters: 453
            },
          ],
          "ECOLE PUBLIQUE DE HAOU / A": [
            {
              station: "HAOU",
              voters: 774
            },
            {
              station: "HOUTOUMBOU",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE KARANTCHI / A": [
            {
              station: "KARANTCHI",
              voters: 444
            },
            {
              station: "TCHAKASLA",
              voters: 444
            },
          ],
          "ECOLE PUBLIQUE DE KILA / A": [
            {
              station: "DJAKOMA",
              voters: 963
            },
            {
              station: "GUIVOUA",
              voters: 963
            },
            {
              station: "KILA",
              voters: 1195
            },
            {
              station: "ROUMGLI",
              voters: 963
            },
          ],
          "ECOLE PUBLIQUE DE KINGUING / A": [
            {
              station: "KINGUING",
              voters: 361
            },
            {
              station: "LIRI",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE DE KOFFI / A": [
            {
              station: "BIRE",
              voters: 1156
            },
            {
              station: "DJOUDJI",
              voters: 627
            },
            {
              station: "KOFFI",
              voters: 627
            },
            {
              station: "CENTRE",
              voters: 6981
            },
            {
              station: "NDEKA",
              voters: 627
            },
          ],
          "ECOLE PUBLIQUE DE KOITAKWA / A": [
            {
              station: "KOITAKWA",
              voters: 409
            },
          ],
          "ECOLE PUBLIQUE DE KOLWA / A": [
            {
              station: "KOLWA",
              voters: 454
            },
          ],
          "ECOLE PUBLIQUE DE LDIRI / A": [
            {
              station: "DAKOULA",
              voters: 656
            },
            {
              station: "DJITE",
              voters: 656
            },
            {
              station: "GLATOUA",
              voters: 656
            },
            {
              station: "MAYO-KOGELA",
              voters: 656
            },
          ],
          "ECOLE PUBLIQUE DE LTIBA / A": [
            {
              station: "HOUANDOUVA",
              voters: 210
            },
            {
              station: "LTIBA",
              voters: 210
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-LOUTI / A": [
            {
              station: "MAYO-LOUTI",
              voters: 206
            },
          ],
          "ECOLE PUBLIQUE DE MBOUGOINE / A": [
            {
              station: "MBOUGOINE",
              voters: 394
            },
          ],
          "ECOLE PUBLIQUE DE MIJAKOGHWEME / A": [
            {
              station: "MIJAKOGHWEME",
              voters: 232
            },
          ],
          "ECOLE PUBLIQUE DE MODELE / A": [
            {
              station: "NDELE",
              voters: 415
            },
            {
              station: "SINI",
              voters: 415
            },
            {
              station: "TCHOUGA",
              voters: 415
            },
          ],
          "ECOLE PUBLIQUE DE MOGODE / A": [
            {
              station: "MISSION",
              voters: 731
            },
            {
              station: "EFLC",
              voters: 731
            },
            {
              station: "KLUN",
              voters: 731
            },
            {
              station: "DOUGHOU",
              voters: 731
            },
            {
              station: "MODELE",
              voters: 1146
            },
            {
              station: "LAWAN",
              voters: 1146
            },
            {
              station: "RUFTA",
              voters: 1282
            },
          ],
          "ECOLE PUBLIQUE DE MOUFTOUM MG / A": [
            {
              station: "DAGOZA",
              voters: 439
            },
            {
              station: "MOUFTOUM",
              voters: 439
            },
          ],
          "ECOLE PUBLIQUE DE MOUVOU / A": [
            {
              station: "MOUVOU",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE DE NDEAGUIVAYA / A": [
            {
              station: "NDEAGUIVAYA",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE DE NORA / A": [
            {
              station: "NORA",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE DE OUDAVA / A": [
            {
              station: "KOTCHANA",
              voters: 966
            },
            {
              station: "NDELEWOU",
              voters: 966
            },
            {
              station: "NDOUNG",
              voters: 966
            },
            {
              station: "OUDAVA",
              voters: 966
            },
          ],
          "ECOLE PUBLIQUE DE RAFFA / A": [
            {
              station: "RAFFA",
              voters: 276
            },
            {
              station: "YELE",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE RHUMSIKI / A": [
            {
              station: "GHWARAVI",
              voters: 1411
            },
            {
              station: "GORAMA",
              voters: 1411
            },
            {
              station: "JAKOMA",
              voters: 1411
            },
            {
              station: "MEGHELEGHELE",
              voters: 1411
            },
            {
              station: "MIKOULIVI",
              voters: 1411
            },
            {
              station: "RHUMZOU",
              voters: 2586
            },
            {
              station: "ROVER",
              voters: 1411
            },
            {
              station: "TCHABA",
              voters: 1568
            },
          ],
          "ECOLE PUBLIQUE DE RUFTA / A": [
            {
              station: "DZETSU",
              voters: 551
            },
            {
              station: "HOULI",
              voters: 551
            },
            {
              station: "NDEKE",
              voters: 551
            },
          ],
          "ECOLE PUBLIQUE DE SIRAKOUTI / A": [
            {
              station: "DJIPPA",
              voters: 530
            },
            {
              station: "SIRAKOUTI",
              voters: 1883
            },
            {
              station: "MARCHE",
              voters: 1006
            },
          ],
          "ECOLE PUBLIQUE DE TCHAMAHE / A": [
            {
              station: "TCHAMAHE",
              voters: 496
            },
          ],
          "ECOLE PUBLIQUE DE TCHANAWA / A": [
            {
              station: "TCHANAWA",
              voters: 713
            },
          ],
          "ECOLE PUBLIQUE DE TCHIBI / A": [
            {
              station: "TCHIBI",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE DE TEKI / A": [
            {
              station: "PLOUMTOU",
              voters: 315
            },
            {
              station: "TEKI",
              voters: 315
            },
          ],
          "ECOLE PUBLIQUE DE VITTE / A": [
            {
              station: "CAMP",
              voters: 1240
            },
            {
              station: "GOUZLARA",
              voters: 509
            },
            {
              station: "HEULEU",
              voters: 509
            },
            {
              station: "VITTE",
              voters: 912
            },
            {
              station: "LAWANA",
              voters: 912
            },
          ],
          "ECOLE PUBLIQUE DE WALAKA / A": [
            {
              station: "CHIKOU",
              voters: 418
            },
            {
              station: "DJALINGO",
              voters: 418
            },
            {
              station: "WALAKA",
              voters: 500
            },
            {
              station: "BANA",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE YAMGO / A": [
            {
              station: "TEZE",
              voters: 98
            },
            {
              station: "YAMGO",
              voters: 98
            },
            {
              station: "ZEMA",
              voters: 98
            },
          ],
          "ECOLE PUBLIQUE DE ZAI / A": [
            {
              station: "ZAI",
              voters: 244
            },
          ],
          "EGLISE FRATERNELLE LUTH DU CAM DE  DZIMI / A": [
            {
              station: "DZIMI",
              voters: 454
            },
          ],
          "SAR/SM DE RHUMSIKI / A": [
            {
              station: "KWEUNDIHOU",
              voters: 157
            },
            {
              station: "KWEUYI",
              voters: 157
            },
          ],
        },
        "MOKOLO": {
          "BOUNGUELRE MALIKI ADJIA / A": [
            {
              station: "BOUNGUELRE",
              voters: 765
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE DE TOUROU /  A": [
            {
              station: "DEDEK",
              voters: 1103
            },
            {
              station: "PALAM",
              voters: 312
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE DE ZAMAI / A": [
            {
              station: "POMLA",
              voters: 619
            },
            {
              station: "ZAMAI",
              voters: 619
            },
            {
              station: "ZAMAI-GALTA",
              voters: 619
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE MOFOLE / A": [
            {
              station: "DORVA",
              voters: 337
            },
            {
              station: "HELIPORT",
              voters: 337
            },
          ],
          "DOMAYO-TACHA HAMAN GAWAR / A": [
            {
              station: "HAMANGAWAR",
              voters: 664
            },
          ],
          "E P. D'APPLICATION II A MOKOLO (MBOUA) / A": [
            {
              station: "MBOUA",
              voters: 1624
            },
          ],
          "E. PARENTS  LOUGUERE KONDONG / A": [
            {
              station: "LOUGGUERE-KONDONG",
              voters: 505
            },
            {
              station: "LOUGUERE-KONDONG",
              voters: 505
            },
          ],
          "E.DES PARENTS DE MAXI / A": [
            {
              station: "MAXI",
              voters: 374
            },
          ],
          "E.DES PARENTS DE TCHOUMPEL / A": [
            {
              station: "MAYEL",
              voters: 310
            },
            {
              station: "TABA",
              voters: 310
            },
            {
              station: "TCHOUMPEL",
              voters: 620
            },
          ],
          "E.MAT. SABONGARI-ZAMAI / A": [
            {
              station: "SABONGARI-ZAMAI",
              voters: 380
            },
          ],
          "E.P. BILINGUE DE MOWO / A": [
            {
              station: "MOWO-HOPITAL/EGLISE",
              voters: 674
            },
            {
              station: "UEBC",
              voters: 674
            },
            {
              station: "SIGODOM",
              voters: 674
            },
          ],
          "E.P. DE BANDAMAI / A": [
            {
              station: "BANDAMAI",
              voters: 333
            },
          ],
          "E.P. DE MAYO SANGUE / A": [
            {
              station: "MAYO",
              voters: 259
            },
            {
              station: "SANGE",
              voters: 259
            },
            {
              station: "MAYO-SANGUE",
              voters: 259
            },
            {
              station: "WAMPA-ZAMAI",
              voters: 259
            },
          ],
          "E.P. DE NDROCK / A": [
            {
              station: "NDROCK",
              voters: 712
            },
          ],
          "E.P. DE WINDE ZAMAI / A": [
            {
              station: "WINDE",
              voters: 239
            },
            {
              station: "WINDE-ZAMAI",
              voters: 239
            },
          ],
          "ECOLE BILINGUE DE DJIMETA / A": [
            {
              station: "DJIMETA",
              voters: 1336
            },
          ],
          "ECOLE BILINGUE DE LDAMTSAI / A": [
            {
              station: "LDAMTSAI-GODA",
              voters: 610
            },
            {
              station: "WAYAM-HAWAN",
              voters: 610
            },
          ],
          "ECOLE DES PARENTS DE LDAGODJA  (TOUROU) / A": [
            {
              station: "LDAGODJA",
              voters: 325
            },
          ],
          "ECOLE DES PARENTS DE MEDERE / A": [
            {
              station: "MAZDAI",
              voters: 320
            },
            {
              station: "METERGUED",
              voters: 320
            },
            {
              station: "NGOHVAL",
              voters: 320
            },
          ],
          "ECOLE DES PARENTS DE TCHAKADJAM / A": [
            {
              station: "DJAKADJAM",
              voters: 109
            },
            {
              station: "-MAYO",
              voters: 109
            },
            {
              station: "DELI",
              voters: 109
            },
            {
              station: "SABONGARI-MOFOU",
              voters: 109
            },
            {
              station: "WOUDJABEMBE",
              voters: 109
            },
          ],
          "ECOLE DES PARENTS DE YAKAWA-  BANTAHAI / A": [
            {
              station: "BANTAHAI",
              voters: 284
            },
          ],
          "ECOLE FRANCO-ARABE DE DOMAYO / A": [
            {
              station: "BLOC",
              voters: 1658
            },
            {
              station: "SARKI-FADA",
              voters: 994
            },
            {
              station: "TONGO",
              voters: 1533
            },
          ],
          "ECOLE MAT. D'APPLICATION DE MOKOLO / A": [
            {
              station: "FONCTIONNAIRE",
              voters: 396
            },
            {
              station: "VILLE-FONCTIONNAIRES",
              voters: 396
            },
            {
              station: "DOMAYO",
              voters: 2054
            },
            {
              station: "WAKILI",
              voters: 396
            },
            {
              station: "HAMADAMA",
              voters: 396
            },
          ],
          "ECOLE MATERNELLE DE LDAMTSAI / A": [
            {
              station: "LDAMTSAI-CHEBE",
              voters: 636
            },
            {
              station: "LDAMTSAI-DOUVGAI",
              voters: 636
            },
            {
              station: "LDAMTSAI-ZIMANGAYAK",
              voters: 636
            },
          ],
          "ECOLE P. D'APPLICATION MOFOLE IV / A": [
            {
              station: "ANCIENNE",
              voters: 1660
            },
            {
              station: "SONEL-DEDEB",
              voters: 1660
            },
            {
              station: "GOLIGUECHE",
              voters: 869
            },
            {
              station: "GROUPE",
              voters: 869
            },
          ],
          "ECOLE P. DE MATAKAM (TCHOUVOUK) / A": [
            {
              station: "ZAMNDEK",
              voters: 385
            },
          ],
          "ECOLE P. DE METCHELTEO (TCHOUVOUK) / A": [
            {
              station: "KOKOM",
              voters: 706
            },
            {
              station: "MEDERE",
              voters: 706
            },
          ],
          "ECOLE PRIVEE CATH. DE LDIBAM PLATEAU /  A": [
            {
              station: "LDIBAM",
              voters: 1135
            },
            {
              station: "PLATEAU",
              voters: 1084
            },
          ],
          "ECOLE PRIVEE CATH. DE TOUFOU I  (TOUROU) / A": [
            {
              station: "DABA-VOUROUA",
              voters: 343
            },
            {
              station: "DJIDJI",
              voters: 343
            },
            {
              station: "MAGA",
              voters: 343
            },
          ],
          "ECOLE PRIVEE CATH. DE TOUROU-OUFOU I /  A": [
            {
              station: "STAROUM",
              voters: 165
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE GAGALA / A": [
            {
              station: "GAGALA",
              voters: 502
            },
            {
              station: "MARBANA",
              voters: 502
            },
            {
              station: "PALILTAO",
              voters: 502
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE MOUDAL / A": [
            {
              station: "MOUDAL-LAWANA",
              voters: 285
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE NDREME  KOSSEHONE / A": [
            {
              station: "NDREME",
              voters: 301
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE OURO- TADA  /A": [
            {
              station: "MENDELELEM",
              voters: 856
            },
            {
              station: "OURO-TADA",
              voters: 856
            },
            {
              station: "OURO-",
              voters: 856
            },
            {
              station: "TADA",
              voters: 856
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE SOUGOULE /  A": [
            {
              station: "SOUGOULE-GOULDANDA",
              voters: 497
            },
            {
              station: "SOUGOULE-ZBA",
              voters: 497
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE UDKIA / A": [
            {
              station: "UDKIA",
              voters: 1424
            },
          ],
          "ECOLE PUB. D'APPLICATION III DE MOKOLO /  A": [
            {
              station: "DZAHMBROM",
              voters: 1283
            },
          ],
          "ECOLE PUB. DE DINLDING-VARA (SOKOTAI) /  A": [
            {
              station: "DINLDING",
              voters: 1052
            },
            {
              station: "VARA",
              voters: 770
            },
          ],
          "ECOLE PUBLIQUE D'APPLICATION DE  MBIKEM / A": [
            {
              station: "MBIKEM",
              voters: 1721
            },
            {
              station: "OURO-TCHEDE",
              voters: 1056
            },
          ],
          "ECOLE PUBLIQUE DE (TCHOUVOUK) / A": [
            {
              station: "MATREPAS",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE BAIGAI / A": [
            {
              station: "BAIGAI",
              voters: 2544
            },
            {
              station: "FOULBE",
              voters: 1272
            },
            {
              station: "MASSIF",
              voters: 1272
            },
            {
              station: "MAVOUMAI",
              voters: 1272
            },
            {
              station: "GUIDKLOUM",
              voters: 1272
            },
            {
              station: "MAVOUMAI-KULVENG",
              voters: 1272
            },
            {
              station: "MAVOUMAI-TSANAO",
              voters: 1272
            },
            {
              station: "YAWA-MAVOUMAI",
              voters: 1272
            },
          ],
          "ECOLE PUBLIQUE DE BARIKI (GADALA) / A": [
            {
              station: "GADALA-BARIKI",
              voters: 178
            },
          ],
          "ECOLE PUBLIQUE DE BATAWAYA / A": [
            {
              station: "BATAWAYA-ZIVER",
              voters: 103
            },
          ],
          "ECOLE PUBLIQUE DE BAWADA / A": [
            {
              station: "BAWADA",
              voters: 343
            },
            {
              station: "OUDAHAI-BARRAGE",
              voters: 343
            },
            {
              station: "OUDAHAI-GOLDOK",
              voters: 343
            },
          ],
          "ECOLE PUBLIQUE DE BISKAVAI / A": [
            {
              station: "BISKAVAI",
              voters: 317
            },
          ],
          "ECOLE PUBLIQUE DE BOUDOUM / A": [
            {
              station: "BOUDOUM",
              voters: 581
            },
          ],
          "ECOLE PUBLIQUE DE BOULA / A": [
            {
              station: "BAMNGUEL",
              voters: 1092
            },
            {
              station: "BOULA",
              voters: 2817
            },
            {
              station: "CENTRE",
              voters: 5402
            },
            {
              station: "OURO-DAVAI",
              voters: 1092
            },
            {
              station: "OURO-MODIBO",
              voters: 1092
            },
            {
              station: "OURO-NDJARENDI",
              voters: 1092
            },
            {
              station: "TAMBADJAM",
              voters: 1092
            },
          ],
          "ECOLE PUBLIQUE DE DABA / A": [
            {
              station: "MAVOUMAI-DABA",
              voters: 482
            },
          ],
          "ECOLE PUBLIQUE DE DIMEO / A": [
            {
              station: "DIMEO",
              voters: 660
            },
            {
              station: "DIMEO-MAYO",
              voters: 660
            },
            {
              station: "SABERE-ZANG",
              voters: 660
            },
            {
              station: "SIHALAI",
              voters: 660
            },
            {
              station: "ZANG",
              voters: 660
            },
          ],
          "ECOLE PUBLIQUE DE DJABERE(ZAMALAO) / A": [
            {
              station: "DJABERE",
              voters: 245
            },
            {
              station: "LOUGGUERE",
              voters: 245
            },
            {
              station: "DJOUMEL",
              voters: 245
            },
            {
              station: "LOUGGUERE-MALBOUBA",
              voters: 245
            },
          ],
          "ECOLE PUBLIQUE DE DJADA(MEMBENG) / A": [
            {
              station: "DJADA",
              voters: 114
            },
          ],
          "ECOLE PUBLIQUE DE DJALINGO / A": [
            {
              station: "DJALINGO-CENTRE",
              voters: 435
            },
            {
              station: "DJALINGO-PILOTE",
              voters: 435
            },
            {
              station: "DJALINGO-SOUSOUKADJE",
              voters: 435
            },
            {
              station: "OURO-VIMA",
              voters: 435
            },
          ],
          "ECOLE PUBLIQUE DE DJALINGO-AVIATION / A": [
            {
              station: "DJALINGO-AVIATION",
              voters: 83
            },
            {
              station: "OURO",
              voters: 379
            },
            {
              station: "ALHADJI",
              voters: 83
            },
          ],
          "ECOLE PUBLIQUE DE DJAMDOUDI / A": [
            {
              station: "DJAMDOUDI",
              voters: 448
            },
            {
              station: "GUELEWE-GADAMAYO",
              voters: 448
            },
            {
              station: "GUELEWE-POMPE",
              voters: 448
            },
          ],
          "ECOLE PUBLIQUE DE DZAVAYA / A": [
            {
              station: "DZAVAYA",
              voters: 640
            },
          ],
          "ECOLE PUBLIQUE DE DZAWANDAI / A": [
            {
              station: "DZAWANDAI",
              voters: 473
            },
            {
              station: "MAGAGAB",
              voters: 473
            },
          ],
          "ECOLE PUBLIQUE DE GADAKA(TCHOUVOUK)  /A": [
            {
              station: "GADAKA",
              voters: 559
            },
            {
              station: "MATAVOU",
              voters: 459
            },
            {
              station: "MEKLEK",
              voters: 459
            },
            {
              station: "METCHELTEO",
              voters: 845
            },
          ],
          "ECOLE PUBLIQUE DE GADALA / A": [
            {
              station: "GADALA-MANGARE",
              voters: 988
            },
            {
              station: "GADALA-MENGUELETCHI",
              voters: 988
            },
            {
              station: "GADALA-OURO-JOEL",
              voters: 988
            },
            {
              station: "KOUBADJE",
              voters: 988
            },
            {
              station: "MATSE",
              voters: 988
            },
          ],
          "ECOLE PUBLIQUE DE GADALAO / A": [
            {
              station: "GADALAO",
              voters: 731
            },
          ],
          "ECOLE PUBLIQUE DE GAWAR / A": [
            {
              station: "DJIGUIDAIWO",
              voters: 716
            },
            {
              station: "FALIWO",
              voters: 1432
            },
            {
              station: "GADAKO",
              voters: 716
            },
            {
              station: "GAWAR",
              voters: 716
            },
            {
              station: "LOGODAWO",
              voters: 716
            },
            {
              station: "SABERE",
              voters: 716
            },
            {
              station: "SOUHOURWO",
              voters: 1432
            },
            {
              station: "TALYEL",
              voters: 716
            },
            {
              station: "TOUDOUROU",
              voters: 1114
            },
            {
              station: "YOLDEWO",
              voters: 716
            },
          ],
          "ECOLE PUBLIQUE DE GORAI / A": [
            {
              station: "GORAI",
              voters: 778
            },
            {
              station: "KOBALA",
              voters: 778
            },
            {
              station: "KONDALHA",
              voters: 778
            },
            {
              station: "KOPLASSAR",
              voters: 778
            },
            {
              station: "NDZAMA",
              voters: 778
            },
          ],
          "ECOLE PUBLIQUE DE GOSSI (TOUROU) / A": [
            {
              station: "GOSSI",
              voters: 273
            },
          ],
          "ECOLE PUBLIQUE DE GOUDOUR / A": [
            {
              station: "BILAVAI",
              voters: 792
            },
            {
              station: "GOUDOUR",
              voters: 792
            },
          ],
          "ECOLE PUBLIQUE DE GOULOUA / A": [
            {
              station: "GOULOUA",
              voters: 629
            },
          ],
          "ECOLE PUBLIQUE DE GUELENG / A": [
            {
              station: "GUELENG",
              voters: 540
            },
            {
              station: "KIDVE",
              voters: 540
            },
            {
              station: "MANDERDALAI",
              voters: 540
            },
            {
              station: "ZLOUM",
              voters: 540
            },
          ],
          "ECOLE PUBLIQUE DE GUIDMBAZ (MANDAKA  II) / A": [
            {
              station: "GUIDMBAZ",
              voters: 323
            },
            {
              station: "GUIMBSAK",
              voters: 323
            },
            {
              station: "QUARTIER-BARRIERE",
              voters: 323
            },
            {
              station: "WAIROUA",
              voters: 1035
            },
            {
              station: "COTE",
              voters: 1035
            },
          ],
          "ECOLE PUBLIQUE DE GUIRDJIVAI(MOFOLE) /  A": [
            {
              station: "GOULDA",
              voters: 290
            },
            {
              station: "GUIRDJIVAI",
              voters: 290
            },
            {
              station: "MEJELELEM",
              voters: 290
            },
          ],
          "ECOLE PUBLIQUE DE HIDOUA / A": [
            {
              station: "HIDOUA",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE DE HITAWA / A": [
            {
              station: "HITAWA",
              voters: 163
            },
          ],
          "ECOLE PUBLIQUE DE HODANGO / A": [
            {
              station: "HODANGO",
              voters: 434
            },
            {
              station: "LOUGGUERE-KOUITA",
              voters: 434
            },
            {
              station: "OURO-GUERTODE",
              voters: 434
            },
          ],
          "ECOLE PUBLIQUE DE JEGOUE (SOUGOULE) /  A": [
            {
              station: "JEGOUE",
              voters: 408
            },
          ],
          "ECOLE PUBLIQUE DE KADLAￏ / A": [
            {
              station: "DOURFOK",
              voters: 86
            },
            {
              station: "KADLAￏ",
              voters: 86
            },
          ],
          "ECOLE PUBLIQUE DE KATAMSA GAMBOUA / A": [
            {
              station: "KATAMSA-GAMBOUA",
              voters: 281
            },
          ],
          "ECOLE PUBLIQUE DE KATAMSA SIKIA / A": [
            {
              station: "KATAMSA-SIKIA",
              voters: 408
            },
          ],
          "ECOLE PUBLIQUE DE KIDE / A": [
            {
              station: "KIDE",
              voters: 253
            },
            {
              station: "MASKAI",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE DE KILWO / A": [
            {
              station: "KILWO",
              voters: 562
            },
          ],
          "ECOLE PUBLIQUE DE KOSSEHONE / A": [
            {
              station: "KOSSEHONE",
              voters: 1232
            },
          ],
          "ECOLE PUBLIQUE DE LDAMANG / A": [
            {
              station: "KADLAI",
              voters: 1317
            },
            {
              station: "LDAMANG",
              voters: 1317
            },
          ],
          "ECOLE PUBLIQUE DE LDARBAK / A": [
            {
              station: "LDARBAK",
              voters: 526
            },
            {
              station: "MBALVOU",
              voters: 263
            },
            {
              station: "OURO-NGAZAI",
              voters: 263
            },
          ],
          "ECOLE PUBLIQUE DE LOUGGUERE  BANDAIDAWA / A": [
            {
              station: "MBOKO",
              voters: 297
            },
            {
              station: "GUILAWA",
              voters: 297
            },
          ],
          "ECOLE PUBLIQUE DE LOUGGUERE HAOUSSA  /A": [
            {
              station: "LOUGGUERE-HAOUSSA",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE MABASS / A": [
            {
              station: "MABASS",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE DE MADA (MANDAKA) / A": [
            {
              station: "LDAKAPRAD",
              voters: 102
            },
            {
              station: "MADA",
              voters: 102
            },
          ],
          "ECOLE PUBLIQUE DE MADAMA (MOFOLE) / A": [
            {
              station: "MADAMA",
              voters: 370
            },
            {
              station: "PETIT",
              voters: 370
            },
            {
              station: "BARRAGE",
              voters: 370
            },
            {
              station: "WAI-ZKAD",
              voters: 370
            },
          ],
          "ECOLE PUBLIQUE DE MADAMBROM  (MAGOUMAZ) / A": [
            {
              station: "MAGOUMAZ-MADAMBROM",
              voters: 425
            },
            {
              station: "MAGOUMAZ-NDOUVGAI",
              voters: 425
            },
          ],
          "ECOLE PUBLIQUE DE MAGAWAI (GADALA) / A": [
            {
              station: "DOUGUETBAI",
              voters: 241
            },
            {
              station: "GADALA-MAGAWAI",
              voters: 241
            },
            {
              station: "MAGAWAI-HOULDOK",
              voters: 241
            },
          ],
          "ECOLE PUBLIQUE DE MAGOUMAZ / A": [
            {
              station: "BAKATAO",
              voters: 1498
            },
            {
              station: "GUIRMAMAGAI",
              voters: 999
            },
            {
              station: "LDAMA-MAGOUMAZ",
              voters: 999
            },
            {
              station: "MBJE",
              voters: 999
            },
            {
              station: "VARKOUDA",
              voters: 1998
            },
            {
              station: "WAICHEHEN",
              voters: 999
            },
            {
              station: "ZABAM-MISSION",
              voters: 999
            },
          ],
          "ECOLE PUBLIQUE DE MAMBARIA / A": [
            {
              station: "KOSSEYEL",
              voters: 578
            },
            {
              station: "MAMBARIA",
              voters: 578
            },
            {
              station: "SEBORE",
              voters: 578
            },
            {
              station: "TCHOUKOL",
              voters: 578
            },
          ],
          "ECOLE PUBLIQUE DE MANDAKA / A": [
            {
              station: "DOURVAYA",
              voters: 1175
            },
            {
              station: "DZANGOLDA",
              voters: 1175
            },
            {
              station: "MANDAKA-CENTRE",
              voters: 1175
            },
          ],
          "ECOLE PUBLIQUE DE MANDAKA CHECHEM /  A": [
            {
              station: "CHECHEM",
              voters: 296
            },
            {
              station: "KELEWE",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE DE MANDAYA / A": [
            {
              station: "MIMALAF",
              voters: 428
            },
            {
              station: "NGOTCHVAI",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DE MANDOULA / A": [
            {
              station: "DIGOVONG",
              voters: 297
            },
            {
              station: "GLDOM",
              voters: 297
            },
            {
              station: "(GUIVIHAWAR)",
              voters: 297
            },
            {
              station: "MANDOULA",
              voters: 297
            },
            {
              station: "MELENDEW",
              voters: 297
            },
          ],
          "ECOLE PUBLIQUE DE MARAF (ZAMALAO) / A": [
            {
              station: "MARAF",
              voters: 98
            },
          ],
          "ECOLE PUBLIQUE DE MARAM (TCHOUVOUK) /  A": [
            {
              station: "MARAM",
              voters: 336
            },
            {
              station: "MATERGWET",
              voters: 336
            },
          ],
          "ECOLE PUBLIQUE DE MATERPAS / A": [
            {
              station: "MATERPAS",
              voters: 140
            },
            {
              station: "MATERPAS-DASKWAL",
              voters: 140
            },
            {
              station: "MATERPAS-HARDE",
              voters: 140
            },
            {
              station: "WISSOLOKI",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-KAOULEDJI / A": [
            {
              station: "MAYO-KAOULEDJI",
              voters: 151
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-LADDE / A": [
            {
              station: "MAYO-LADDE",
              voters: 295
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-LEGGA / A": [
            {
              station: "MAYO-LEGGA",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-SANGANARE / A": [
            {
              station: "MAYO-SANGANARE",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-TCHOUKOURI / A": [
            {
              station: "BANDAIDAWA",
              voters: 930
            },
            {
              station: "BANDAIDAWA-MOKOLO",
              voters: 633
            },
            {
              station: "GUIRDE",
              voters: 633
            },
            {
              station: "MBOKOM-NGUILAWA",
              voters: 633
            },
          ],
          "ECOLE PUBLIQUE DE MEMBENG / A": [
            {
              station: "MEMBENG",
              voters: 942
            },
            {
              station: "NDJELENG",
              voters: 471
            },
            {
              station: "OURO-KAOUSADJO",
              voters: 580
            },
            {
              station: "SABONGARI",
              voters: 851
            },
            {
              station: "TCHAKADJAM",
              voters: 1090
            },
          ],
          "ECOLE PUBLIQUE DE METERE (OUDAHAI) / A": [
            {
              station: "METERE",
              voters: 213
            },
            {
              station: "OUDAHAI-DOUVGAI",
              voters: 213
            },
            {
              station: "OUDAHAI-NGOURDEK",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE MINGLIA / A": [
            {
              station: "MINGLIA",
              voters: 423
            },
          ],
          "ECOLE PUBLIQUE DE MOFOU-SUD / A": [
            {
              station: "GAZANG",
              voters: 295
            },
            {
              station: "(LAMORDE)",
              voters: 295
            },
            {
              station: "HIRLDELEK",
              voters: 295
            },
            {
              station: "KOREEL",
              voters: 295
            },
            {
              station: "MATAZAK",
              voters: 295
            },
          ],
          "ECOLE PUBLIQUE DE MOGODAYEL(MOFOU) /  A": [
            {
              station: "MOGODAYEL",
              voters: 231
            },
            {
              station: "NGOMAGRIANG",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE DE MOKONG / A": [
            {
              station: "MOKONG",
              voters: 1558
            },
          ],
          "ECOLE PUBLIQUE DE MOSSO / A": [
            {
              station: "MOSSO",
              voters: 466
            },
          ],
          "ECOLE PUBLIQUE DE MOUFTOUM / A": [
            {
              station: "MOUFTOUM",
              voters: 322
            },
          ],
          "ECOLE PUBLIQUE DE MOUHOUR / A": [
            {
              station: "GOUVODOUM",
              voters: 808
            },
            {
              station: "MOUHOUR",
              voters: 808
            },
            {
              station: "ZIVED",
              voters: 808
            },
          ],
          "ECOLE PUBLIQUE DE MOUTAZ (TOUROU) / A": [
            {
              station: "DABAWOUTAK",
              voters: 626
            },
            {
              station: "DOULONG",
              voters: 626
            },
            {
              station: "KOULKOUBAYE",
              voters: 626
            },
            {
              station: "MOUTAZ",
              voters: 626
            },
          ],
          "ECOLE PUBLIQUE DE NDILANG / A": [
            {
              station: "NDILANG",
              voters: 801
            },
            {
              station: "SIRAK-KALIMTE",
              voters: 801
            },
          ],
          "ECOLE PUBLIQUE DE NGAFAKAT / A": [
            {
              station: "NGAFAKAT",
              voters: 153
            },
          ],
          "ECOLE PUBLIQUE DE NGOLKODJOLA / A": [
            {
              station: "NGOLKODJOLA",
              voters: 191
            },
          ],
          "ECOLE PUBLIQUE DE OUDAGAZA / A": [
            {
              station: "OUDAGAZA",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE DE OURO- BOCKI / A": [
            {
              station: "OURO-BOCKI",
              voters: 309
            },
          ],
          "ECOLE PUBLIQUE DE PARWAI / A": [
            {
              station: "NASSARAO-GAWAR",
              voters: 461
            },
            {
              station: "PARWAI",
              voters: 338
            },
          ],
          "ECOLE PUBLIQUE DE SEKANDE (MANDAKA) /  A": [
            {
              station: "DZABANGAI",
              voters: 311
            },
            {
              station: "SEKANDE",
              voters: 1167
            },
            {
              station: "MANDAKA",
              voters: 634
            },
          ],
          "ECOLE PUBLIQUE DE SINGAMOKSAH / A": [
            {
              station: "RIHOUYAK",
              voters: 611
            },
            {
              station: "SINGOMABARAK",
              voters: 611
            },
            {
              station: "SINGOMAKSAH",
              voters: 611
            },
            {
              station: "SIPRAD",
              voters: 611
            },
            {
              station: "ZINGOS",
              voters: 611
            },
          ],
          "ECOLE PUBLIQUE DE TCHALLAHONE / A": [
            {
              station: "TCHALLAHONE",
              voters: 424
            },
            {
              station: "WOULA-HANKO",
              voters: 424
            },
          ],
          "ECOLE PUBLIQUE DE TCHOUVOUK / A": [
            {
              station: "BALIAK",
              voters: 469
            },
            {
              station: "MIREW",
              voters: 469
            },
            {
              station: "MOHORSOK",
              voters: 469
            },
            {
              station: "NDOURE",
              voters: 469
            },
          ],
          "ECOLE PUBLIQUE DE TOUROU / A": [
            {
              station: "BEREK",
              voters: 1579
            },
            {
              station: "LAMRAM",
              voters: 1579
            },
            {
              station: "LOCKTCHA",
              voters: 1579
            },
          ],
          "ECOLE PUBLIQUE DE WAFANGO / A": [
            {
              station: "NASSARAO",
              voters: 539
            },
            {
              station: "WAFANGO",
              voters: 539
            },
          ],
          "ECOLE PUBLIQUE DE WALAMAI (DIMEO) / A": [
            {
              station: "BOUZAL",
              voters: 324
            },
            {
              station: "MBEVER",
              voters: 162
            },
            {
              station: "SIKIA",
              voters: 162
            },
            {
              station: "WALAMAI",
              voters: 162
            },
          ],
          "ECOLE PUBLIQUE DE WAMPA (MOUDAL) / A": [
            {
              station: "WAMPA",
              voters: 173
            },
          ],
          "ECOLE PUBLIQUE DE WANAROU / A": [
            {
              station: "WANAROU",
              voters: 187
            },
          ],
          "ECOLE PUBLIQUE DE WANDAI / A": [
            {
              station: "BAKATEREO",
              voters: 280
            },
            {
              station: "DJAMBOUTOU",
              voters: 280
            },
            {
              station: "GNOBORGA",
              voters: 280
            },
            {
              station: "WANDAI",
              voters: 280
            },
          ],
          "ECOLE PUBLIQUE DE WINDE-GAWAR / A": [
            {
              station: "GAWAR-WINDE",
              voters: 398
            },
          ],
          "ECOLE PUBLIQUE DE WOURO BOURDI / A": [
            {
              station: "MBALIYAK",
              voters: 298
            },
            {
              station: "MEKILEK-CENTRE",
              voters: 298
            },
            {
              station: "MOKSI",
              voters: 298
            },
            {
              station: "WISSAMBAK",
              voters: 298
            },
          ],
          "ECOLE PUBLIQUE DE YOLLEL / A": [
            {
              station: "BOKIRE",
              voters: 454
            },
            {
              station: "FERNDE",
              voters: 454
            },
            {
              station: "LOUGGUERE-CENTRE",
              voters: 1131
            },
            {
              station: "LOUGGUERE-MAKI",
              voters: 454
            },
            {
              station: "MINAWAO",
              voters: 454
            },
            {
              station: "NDJAINDI",
              voters: 454
            },
            {
              station: "YOLLEL",
              voters: 454
            },
            {
              station: "ZILI",
              voters: 454
            },
          ],
          "ECOLE PUBLIQUE DE ZAMAI / A": [
            {
              station: "BETCHE",
              voters: 1373
            },
            {
              station: "HOSSERE",
              voters: 1373
            },
            {
              station: "WOURO",
              voters: 1671
            },
            {
              station: "BOURDI",
              voters: 1671
            },
            {
              station: "ZAMAI-CENTRE",
              voters: 1373
            },
          ],
          "ECOLE PUBLIQUE DE ZAMALAO / A": [
            {
              station: "ZAMALAO",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE DE ZAMALVA / A": [
            {
              station: "AMALVA",
              voters: 78
            },
            {
              station: "KESSOUM",
              voters: 78
            },
            {
              station: "ZAMALVA",
              voters: 78
            },
            {
              station: "ZAMALVA-DOMAYO",
              voters: 78
            },
          ],
          "ECOLE PUBLIQUE DE ZILING / A": [
            {
              station: "MADANGUIRZAI",
              voters: 695
            },
            {
              station: "ZILING",
              voters: 695
            },
          ],
          "ECOLE PUBLIQUE DE ZIVED / A": [
            {
              station: "ZOUMBOUDA",
              voters: 85
            },
          ],
          "ECOLE PUBLIQUE DE ZIVER-MONTAGNE / A": [
            {
              station: "ZIVER-MONTAGNE",
              voters: 422
            },
          ],
          "ECOLE PUBLIQUE DE ZIVER-PLAINE / A": [
            {
              station: "ZIVER-PLAINE",
              voters: 690
            },
          ],
          "ECOLE PUBLIQUE DE ZOUBA / A": [
            {
              station: "WAIGAGAR",
              voters: 406
            },
            {
              station: "MIZALA",
              voters: 406
            },
            {
              station: "ZOUBA",
              voters: 406
            },
          ],
          "ECOLE PUBLIQUE DEMANDAYA / A": [
            {
              station: "MANDAYA",
              voters: 804
            },
          ],
          "ENIEG DE MOKOLO (MBOUA) / A": [
            {
              station: "KOUDEKOKWE",
              voters: 632
            },
            {
              station: "LOUMO-DOLE",
              voters: 632
            },
          ],
          "GRENIER COMMUNAUTAIRE DE  MOWO-LAWANA / A": [
            {
              station: "OURO-SALTE",
              voters: 121
            },
            {
              station: "QUARTIER",
              voters: 121
            },
            {
              station: "LAWANA",
              voters: 121
            },
            {
              station: "MOWO",
              voters: 795
            },
          ],
          "HANGAR MARCHE DE VOUZOD / A": [
            {
              station: "JOUE",
              voters: 526
            },
            {
              station: "LTAVADAI",
              voters: 526
            },
            {
              station: "MALKZA",
              voters: 526
            },
            {
              station: "VOUZOD-PLAINE",
              voters: 1216
            },
          ],
          "LAWANA DE GAZAWAO(MAGASIN  SODECOTON) / A": [
            {
              station: "GAZAWAO",
              voters: 298
            },
            {
              station: "HOSSOM",
              voters: 298
            },
            {
              station: "MOUVOULWA",
              voters: 298
            },
          ],
          "LYCEE BILINGUE DE MBIKEM / A": [
            {
              station: "TACHA",
              voters: 1329
            },
            {
              station: "KOUTOUROU",
              voters: 665
            },
          ],
          "LYCEE DE MOKOLA / A": [
            {
              station: "DOUVAR-DOUBDZA",
              voters: 1622
            },
            {
              station: "DOUVAR-MAGADZA",
              voters: 1622
            },
            {
              station: "DOUVAR-NDOUVGAI",
              voters: 1622
            },
            {
              station: "OUDAHAI-DOMAYO",
              voters: 1622
            },
            {
              station: "OUDAHAI-LDEMBELE",
              voters: 1622
            },
          ],
          "LYCEE DE ZIDIM / A": [
            {
              station: "GOMBOR",
              voters: 1234
            },
            {
              station: "LDAKAM",
              voters: 1234
            },
            {
              station: "LTALABAYE",
              voters: 1234
            },
            {
              station: "MBIGA",
              voters: 1234
            },
            {
              station: "WOULMA",
              voters: 1234
            },
            {
              station: "ZEKELE",
              voters: 1234
            },
            {
              station: "ZIDIM",
              voters: 1234
            },
          ],
          "LYCEE TECHNIQUE MOKOLO / A": [
            {
              station: "NDOUVGAI",
              voters: 2440
            },
            {
              station: "WOULER",
              voters: 2440
            },
          ],
          "MAGASIN MARCHE DE TOUFOU II (TOUROU) /  A": [
            {
              station: "DABA-KODA",
              voters: 353
            },
            {
              station: "ZOUHOULOU",
              voters: 353
            },
          ],
          "MAGASIN SEDOCOTON DE TCHEMBI / A": [
            {
              station: "TCHEMBI",
              voters: 213
            },
          ],
          "MAGASIN SODECOTON DE MOMBOI / A": [
            {
              station: "MASFAI",
              voters: 670
            },
            {
              station: "MOMBOI",
              voters: 670
            },
          ],
          "MAGASIN-MARCHE MOFOU / A": [
            {
              station: "GIVIHAWAR",
              voters: 184
            },
            {
              station: "GUIVIGAMBAI",
              voters: 184
            },
            {
              station: "KOREE",
              voters: 184
            },
          ],
          "MENDEZE-EGLISE CATHOLIQUE DAYAK / A": [
            {
              station: "MENDEZE-DAYAK",
              voters: 375
            },
          ],
          "MOKOLO FOYER CULTUREL / A": [
            {
              station: "CHATEAU",
              voters: 565
            },
            {
              station: "D'EAU",
              voters: 565
            },
            {
              station: "LAMORDE",
              voters: 2625
            },
            {
              station: "MATAKAM-SUD",
              voters: 565
            },
            {
              station: "MOKOLO",
              voters: 565
            },
          ],
          "PRISON PRINCIPALE / A": [
            {
              station: "CAMP",
              voters: 503
            },
            {
              station: "PRISON",
              voters: 107
            },
          ],
        },
        "MOZOGO": {
          "ECOLE P. DE MOUDOUKOUA METERDE / A": [
            {
              station: "METERDE",
              voters: 226
            },
          ],
          "ECOLE P. DE NGUETCHEWE LAMORDE / A": [
            {
              station: "NGUETCHEWE",
              voters: 1377
            },
          ],
          "ECOLE P. DE TCHEBE-TCHEBE GUIWANDAR /  A": [
            {
              station: "GUIWANDAR",
              voters: 139
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE ZELEVET / A": [
            {
              station: "ZELEVET",
              voters: 427
            },
          ],
          "ECOLE PUBLIQUE DE ASSIGHASSIA / A": [
            {
              station: "ASSIGHASSIA",
              voters: 4332
            },
            {
              station: "LAMORDE",
              voters: 4698
            },
            {
              station: "MAFA",
              voters: 2028
            },
            {
              station: "BANKI",
              voters: 1444
            },
            {
              station: "DJAKARA",
              voters: 2888
            },
            {
              station: "GUID-POURI",
              voters: 1444
            },
          ],
          "ECOLE PUBLIQUE DE BALA-TIXE / A": [
            {
              station: "BALA-TIXE",
              voters: 98
            },
          ],
          "ECOLE PUBLIQUE DE CHERIF-MOUSSARI / A": [
            {
              station: "CHERIF-MOUSSARI",
              voters: 318
            },
          ],
          "ECOLE PUBLIQUE DE DJIBRILLI / A": [
            {
              station: "DJIBRILLI",
              voters: 609
            },
          ],
          "ECOLE PUBLIQUE DE DOUVAL / A": [
            {
              station: "DOUVAL",
              voters: 345
            },
          ],
          "ECOLE PUBLIQUE DE DZABA / A": [
            {
              station: "DZABA",
              voters: 282
            },
            {
              station: "VOURKAZA",
              voters: 493
            },
            {
              station: "PLAINE",
              voters: 636
            },
          ],
          "ECOLE PUBLIQUE DE DZAMADZAF / A": [
            {
              station: "DZAMADZAF",
              voters: 376
            },
          ],
          "ECOLE PUBLIQUE DE GODJOGODZONG / A": [
            {
              station: "GODJOGODZONG",
              voters: 412
            },
          ],
          "ECOLE PUBLIQUE DE GOKORO / A": [
            {
              station: "GOKORO",
              voters: 216
            },
          ],
          "ECOLE PUBLIQUE DE GOLDAVI / A": [
            {
              station: "GOLDAVI",
              voters: 1290
            },
            {
              station: "ECOLE",
              voters: 645
            },
          ],
          "ECOLE PUBLIQUE DE GOUZDA VREKET / A": [
            {
              station: "GOUZDA-VREKET",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE HITERE / A": [
            {
              station: "HITERE",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE HOURBECH / A": [
            {
              station: "HOURBECH",
              voters: 126
            },
          ],
          "ECOLE PUBLIQUE DE KARAZAWA / A": [
            {
              station: "KARAZAWA",
              voters: 433
            },
          ],
          "ECOLE PUBLIQUE DE KIRBI-MALAWI / A": [
            {
              station: "KIRBI-MALAWI",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DE KRAWA-MAFA / A": [
            {
              station: "KRAWA-MAFA",
              voters: 639
            },
          ],
          "ECOLE PUBLIQUE DE LDAOUTSAF / A": [
            {
              station: "LDAOUTSAF",
              voters: 357
            },
          ],
          "ECOLE PUBLIQUE DE MADAKAR / A": [
            {
              station: "MADAKAR",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE DE MANDOUSSA / A": [
            {
              station: "MANDOUSSA",
              voters: 526
            },
          ],
          "ECOLE PUBLIQUE DE MBAL-JOUEL / A": [
            {
              station: "MBAL-JOUEL",
              voters: 124
            },
          ],
          "ECOLE PUBLIQUE DE MOGODA / A": [
            {
              station: "MOGODA",
              voters: 128
            },
          ],
          "ECOLE PUBLIQUE DE MOSKOTA LAMORDE /  A": [
            {
              station: "MOSKOTA",
              voters: 1443
            },
          ],
          "ECOLE PUBLIQUE DE MOSKOTA ZELE I / A": [
            {
              station: "ZELE",
              voters: 896
            },
          ],
          "ECOLE PUBLIQUE DE MOUDOUKOUA BLEF / A": [
            {
              station: "MOUDOUKOUA",
              voters: 492
            },
            {
              station: "BLEF",
              voters: 266
            },
          ],
          "ECOLE PUBLIQUE DE MOULDOUGOUA / A": [
            {
              station: "MOULDOUGOUA",
              voters: 145
            },
          ],
          "ECOLE PUBLIQUE DE MOZOGO GI / A": [
            {
              station: "TCHEKODE",
              voters: 1172
            },
          ],
          "ECOLE PUBLIQUE DE NGUETCHEWE MAFA /  A": [
            {
              station: "TALLA",
              voters: 1309
            },
            {
              station: "BAPPA",
              voters: 584
            },
          ],
          "ECOLE PUBLIQUE DE OUDAL / A": [
            {
              station: "OUDAL",
              voters: 149
            },
          ],
          "ECOLE PUBLIQUE DE OUPAI- KIRBI / A": [
            {
              station: "OUPAI-KIRBI",
              voters: 239
            },
          ],
          "ECOLE PUBLIQUE DE OUPAI-MANAK / A": [
            {
              station: "KORE-MANAK",
              voters: 258
            },
            {
              station: "OUPAI-MANAK",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE OUZAL MARCHE / A": [
            {
              station: "OUZAL",
              voters: 496
            },
            {
              station: "MARCHE",
              voters: 496
            },
          ],
          "ECOLE PUBLIQUE DE TALLA GOZELE / A": [
            {
              station: "GOZELE",
              voters: 229
            },
          ],
          "ECOLE PUBLIQUE DE TALLA KATCHI / A": [
            {
              station: "KATCHI",
              voters: 496
            },
          ],
          "ECOLE PUBLIQUE DE TCHEBE-TCHEBE / A": [
            {
              station: "TCHEBE-TCHEBE",
              voters: 401
            },
          ],
          "ECOLE PUBLIQUE DE VOUZI / A": [
            {
              station: "VOUZI",
              voters: 141
            },
          ],
          "ECOLE PUBLIQUE DE VREKET / A": [
            {
              station: "GUID-VREKET",
              voters: 354
            },
            {
              station: "VREKET",
              voters: 354
            },
          ],
          "ECOLE PUBLIQUE DE ZAMGA / A": [
            {
              station: "ZAMGA",
              voters: 519
            },
          ],
          "ECOLE PUBLIQUE GI DE MOZOGO / A": [
            {
              station: "MOZOGO",
              voters: 1516
            },
          ],
          "EGLISE CATHOLIQUE DE MEDEGOUER / A": [
            {
              station: "MEDEGOUER",
              voters: 212
            },
          ],
          "MAGASIN SODECOTON DE KALIARI / A": [
            {
              station: "KALIARI",
              voters: 256
            },
          ],
          "MAGASIN SODECOTON DE KORSAMBA / A": [
            {
              station: "KORSAMBA",
              voters: 185
            },
          ],
          "MAGASIN SODECOTON DE MBOUZOUM / A": [
            {
              station: "MBOUZOM",
              voters: 149
            },
          ],
          "MAGASIN SODECOTON DE MOZOGO / A": [
            {
              station: "TALLA-HAOUSSA",
              voters: 638
            },
            {
              station: "YAMGAZAWA",
              voters: 638
            },
          ],
          "MAGASIN SODECOTON DE ZENEME I / A": [
            {
              station: "ZENEME",
              voters: 288
            },
          ],
          "MARCHE DE BAVONGOLA / A": [
            {
              station: "BAVONGOLA",
              voters: 70
            },
          ],
          "MARCHE DE KOKOR-GLAVDA / A": [
            {
              station: "KOKOR-GLAVDA",
              voters: 57
            },
          ],
          "MARCHE DE KOUVA / A": [
            {
              station: "KOUVA",
              voters: 392
            },
          ],
          "MARCHE DE MAWA-MOZOGO / A": [
            {
              station: "MAWA-MOZOGO",
              voters: 281
            },
          ],
          "MOSQUEE DE KAMDJIDJI / A": [
            {
              station: "KAMDJIDJI",
              voters: 380
            },
          ],
          "PUIT-D'EAU DE MAIGOUBARI / A": [
            {
              station: "MAIGOUBARI",
              voters: 135
            },
          ],
        },
        "SOULEDE-ROUA": {
          "BAO-FOYER / A": [
            {
              station: "BAO-DALZA",
              voters: 523
            },
            {
              station: "BAO-FOYER",
              voters: 523
            },
            {
              station: "BAO-VARA",
              voters: 523
            },
            {
              station: "BODOUMVADA",
              voters: 523
            },
            {
              station: "DALZA",
              voters: 523
            },
            {
              station: "GLAKAI",
              voters: 758
            },
            {
              station: "GUED-KOLALA",
              voters: 523
            },
            {
              station: "HAWATAM",
              voters: 523
            },
            {
              station: "MOKOZA",
              voters: 523
            },
          ],
          "BAO-NDEVGAI / A": [
            {
              station: "DEMZAO",
              voters: 54
            },
          ],
          "ECOLE P. DE MATAKAM-SOULEDE / A": [
            {
              station: "DOBONGO",
              voters: 465
            },
            {
              station: "KELWA",
              voters: 465
            },
            {
              station: "MATAKAM",
              voters: 465
            },
            {
              station: "MBOUDAWAI",
              voters: 465
            },
            {
              station: "MENDEZE",
              voters: 465
            },
            {
              station: "PRACHEBA",
              voters: 465
            },
          ],
          "ECOLE P. GROUPE 1 ET 2 DE SOULEDE / A": [
            {
              station: "GLAPAR",
              voters: 720
            },
            {
              station: "GUILDAKAM-CENTRE",
              voters: 720
            },
            {
              station: "MBOKOM-NGUELAWA",
              voters: 720
            },
            {
              station: "MELE",
              voters: 720
            },
          ],
          "ECOLE PUBLIQUE 1 DE MADAKONAI I / A": [
            {
              station: "BARKAI",
              voters: 1072
            },
            {
              station: "DJEKEYING",
              voters: 1072
            },
            {
              station: "GOURVAD",
              voters: 1072
            },
            {
              station: "GUIRMETE",
              voters: 1072
            },
            {
              station: "MADAKONAI",
              voters: 1651
            },
            {
              station: "MBALLA",
              voters: 1072
            },
            {
              station: "MEKEDANG",
              voters: 1072
            },
            {
              station: "MOHORDOM",
              voters: 1072
            },
            {
              station: "NGOBASS",
              voters: 1072
            },
            {
              station: "WOUDJED",
              voters: 1072
            },
          ],
          "ECOLE PUBLIQUE 1 DE MIDRE-NDEVGAI / A": [
            {
              station: "DAK",
              voters: 609
            },
            {
              station: "MEDELE",
              voters: 609
            },
            {
              station: "NDEVGAI",
              voters: 795
            },
            {
              station: "NPOLDOK",
              voters: 609
            },
            {
              station: "NVRAD",
              voters: 609
            },
          ],
          "ECOLE PUBLIQUE 2 DE MADAKONAI II / A": [
            {
              station: "NDEVYE",
              voters: 253
            },
            {
              station: "NDIVIYE",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE 2 DE MIDRE / A": [
            {
              station: "GUEZALBAI",
              voters: 737
            },
            {
              station: "GUIDAYAK",
              voters: 737
            },
            {
              station: "KOUDELD",
              voters: 737
            },
            {
              station: "MIDRE-DZAH",
              voters: 737
            },
          ],
          "ECOLE PUBLIQUE 3 DE MADAKONAI II / A": [
            {
              station: "DRILANGA",
              voters: 579
            },
            {
              station: "GUED-GOUDOF",
              voters: 579
            },
            {
              station: "GUIDING",
              voters: 579
            },
            {
              station: "KOURDAYE",
              voters: 579
            },
            {
              station: "MECHEWEYE",
              voters: 579
            },
          ],
          "ECOLE PUBLIQUE DE BAO-NDEVGAI / A": [
            {
              station: "BAO-DZILDAM",
              voters: 536
            },
            {
              station: "BAO-NDEVGAI",
              voters: 536
            },
            {
              station: "DER",
              voters: 536
            },
            {
              station: "GRO",
              voters: 536
            },
            {
              station: "MAMBAO",
              voters: 536
            },
            {
              station: "MIDAO",
              voters: 536
            },
            {
              station: "MONDOURZAI",
              voters: 536
            },
            {
              station: "NDEHWAM",
              voters: 536
            },
            {
              station: "NDEVGAI-CENTRE",
              voters: 536
            },
          ],
          "ECOLE PUBLIQUE DE BAO-TASSAI / A": [
            {
              station: "BAO-DALBAI",
              voters: 1650
            },
            {
              station: "BAO-MENDEZE",
              voters: 1128
            },
            {
              station: "GOLIBAI-TASSAI",
              voters: 1128
            },
            {
              station: "KELDA-TASSAI",
              voters: 1128
            },
            {
              station: "MAZAVAI",
              voters: 1128
            },
            {
              station: "TASSAI",
              voters: 1128
            },
            {
              station: "WAYAM",
              voters: 1568
            },
            {
              station: "BAO-TASSAI",
              voters: 1128
            },
          ],
          "ECOLE PUBLIQUE DE BROH / A": [
            {
              station: "BROH",
              voters: 452
            },
            {
              station: "CHEUMBREUM",
              voters: 452
            },
            {
              station: "GALI-WALA",
              voters: 452
            },
          ],
          "ECOLE PUBLIQUE DE DEMROUA / A": [
            {
              station: "BAO-DEMROUA",
              voters: 345
            },
            {
              station: "DEMROUA",
              voters: 345
            },
            {
              station: "MENDEZE-DEMROUA",
              voters: 345
            },
            {
              station: "TSANAO",
              voters: 345
            },
          ],
          "ECOLE PUBLIQUE DE DISSAMBAK / A": [
            {
              station: "DAMENAI",
              voters: 480
            },
            {
              station: "DISSAMBAK",
              voters: 480
            },
            {
              station: "DISSAMBAK-CENTRE",
              voters: 480
            },
            {
              station: "GUIDAYAK-DISSAMBAK",
              voters: 480
            },
            {
              station: "GUIDZAVAI",
              voters: 480
            },
            {
              station: "MAMBAO-DISSAMBAK",
              voters: 480
            },
          ],
          "ECOLE PUBLIQUE DE DOUMDERE / A": [
            {
              station: "DOUMDERE",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE DOUMGAR / A": [
            {
              station: "BALA",
              voters: 477
            },
            {
              station: "DOUMGAR",
              voters: 477
            },
            {
              station: "DOUZAI",
              voters: 802
            },
            {
              station: "GUEDBEJE",
              voters: 477
            },
            {
              station: "GUEDIAK-DOUMGAR",
              voters: 477
            },
            {
              station: "GUIDIE",
              voters: 477
            },
            {
              station: "HAIMA",
              voters: 477
            },
            {
              station: "MOGVONGO",
              voters: 519
            },
            {
              station: "VAGAO",
              voters: 519
            },
            {
              station: "ZENGUDDE",
              voters: 477
            },
            {
              station: "ZUDO",
              voters: 513
            },
          ],
          "ECOLE PUBLIQUE DE DOUZAI / A": [
            {
              station: "GOLIBAI-DOUZAI",
              voters: 325
            },
            {
              station: "GOLIWALA",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE DE FOGOM I / A": [
            {
              station: "DEWE",
              voters: 549
            },
            {
              station: "FOGOM",
              voters: 1086
            },
            {
              station: "GAZA",
              voters: 549
            },
            {
              station: "KOUJEK",
              voters: 549
            },
            {
              station: "VOURZIDALA",
              voters: 549
            },
            {
              station: "ZOUAI",
              voters: 549
            },
          ],
          "ECOLE PUBLIQUE DE FOGOM II / A": [
            {
              station: "DOUE",
              voters: 537
            },
            {
              station: "LEGOUED",
              voters: 537
            },
            {
              station: "SOGOMAI",
              voters: 537
            },
            {
              station: "WOUDVARA",
              voters: 537
            },
          ],
          "ECOLE PUBLIQUE DE GOLIBAI / A": [
            {
              station: "CAMP-DIYA",
              voters: 257
            },
            {
              station: "CENTRE",
              voters: 257
            },
            {
              station: "GOLIBAI",
              voters: 257
            },
            {
              station: "MADZAGAI",
              voters: 257
            },
            {
              station: "MAKAYA",
              voters: 257
            },
            {
              station: "MOGODA",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE GUED-WAGA / A": [
            {
              station: "GUED-MAGAI",
              voters: 501
            },
            {
              station: "GUED-PRAD",
              voters: 501
            },
            {
              station: "GUED-WAGA",
              voters: 501
            },
            {
              station: "MALGODJE",
              voters: 501
            },
            {
              station: "WOULDAR",
              voters: 501
            },
          ],
          "ECOLE PUBLIQUE DE GUIRDE / A": [
            {
              station: "BAO-GUIRDE",
              voters: 226
            },
            {
              station: "GUIRDE",
              voters: 946
            },
          ],
          "ECOLE PUBLIQUE DE KONE / A": [
            {
              station: "GREVDA",
              voters: 401
            },
            {
              station: "GUED-GAWAI",
              voters: 401
            },
            {
              station: "KONE",
              voters: 401
            },
            {
              station: "PLATEAU",
              voters: 401
            },
          ],
          "ECOLE PUBLIQUE DE MAZAM / A": [
            {
              station: "DIBLEM",
              voters: 565
            },
            {
              station: "JING-JING",
              voters: 565
            },
            {
              station: "KISSADAO",
              voters: 565
            },
            {
              station: "LIWA",
              voters: 565
            },
            {
              station: "MAZAM",
              voters: 565
            },
            {
              station: "MEGUEJE",
              voters: 726
            },
            {
              station: "PREKLEF",
              voters: 565
            },
            {
              station: "WOULDER",
              voters: 565
            },
          ],
          "ECOLE PUBLIQUE DE MAZAYA / A": [
            {
              station: "DROLDO",
              voters: 316
            },
            {
              station: "MAZAYA",
              voters: 569
            },
            {
              station: "WALLA",
              voters: 316
            },
          ],
          "ECOLE PUBLIQUE DE MAZAYA-VIDE / A": [
            {
              station: "MAZAYA-VIDE",
              voters: 372
            },
            {
              station: "MAZAYA-ZANG",
              voters: 186
            },
            {
              station: "VIDE",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE DE MBALDA / A": [
            {
              station: "GOGOGE",
              voters: 387
            },
            {
              station: "KOULADA",
              voters: 387
            },
            {
              station: "KOUMBI-MAYO",
              voters: 387
            },
            {
              station: "MAYO-GOGOGE",
              voters: 387
            },
            {
              station: "MBALDA",
              voters: 387
            },
            {
              station: "MOKODNGOL",
              voters: 387
            },
            {
              station: "WOUDVADJE",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE MBROM-KABWA / A": [
            {
              station: "CAMP-MISSION",
              voters: 353
            },
            {
              station: "DEBEO",
              voters: 353
            },
            {
              station: "DIBO",
              voters: 353
            },
            {
              station: "MAKAZA",
              voters: 353
            },
            {
              station: "MBROM-KABWA",
              voters: 353
            },
            {
              station: "ZERE",
              voters: 353
            },
          ],
          "ECOLE PUBLIQUE DE MEDIMCHE / A": [
            {
              station: "MEDIMCHE",
              voters: 549
            },
            {
              station: "MPIYA",
              voters: 549
            },
            {
              station: "PILDE",
              voters: 549
            },
          ],
          "ECOLE PUBLIQUE DE MEGUEJE I / A": [
            {
              station: "MEGUEDJE",
              voters: 42
            },
          ],
          "ECOLE PUBLIQUE DE MESDAI / A": [
            {
              station: "CHENA",
              voters: 205
            },
            {
              station: "GOLVARA",
              voters: 205
            },
            {
              station: "MEJEVA-VARA",
              voters: 205
            },
            {
              station: "MESDAI",
              voters: 205
            },
            {
              station: "NDROGOLDA",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE DE MEUSTEUK / A": [
            {
              station: "GREMETE-ROUA",
              voters: 348
            },
            {
              station: "KOUSCHELE",
              voters: 348
            },
            {
              station: "MEUSTEUK",
              voters: 348
            },
          ],
          "ECOLE PUBLIQUE DE MVEGAI / A": [
            {
              station: "MVEGAI",
              voters: 134
            },
          ],
          "ECOLE PUBLIQUE DE OUDOUMZARAI / A": [
            {
              station: "GOUMDZALDA-OUDOUMZARAI",
              voters: 436
            },
            {
              station: "GOYA",
              voters: 436
            },
            {
              station: "MADA-OUDOUMZARAI",
              voters: 436
            },
            {
              station: "MALANGAZ",
              voters: 671
            },
            {
              station: "ZATALA",
              voters: 436
            },
          ],
          "ECOLE PUBLIQUE DE PRADGADAYA / A": [
            {
              station: "CAMP-BANANE",
              voters: 608
            },
            {
              station: "GUEDGABA",
              voters: 608
            },
            {
              station: "PRADGADAYA",
              voters: 608
            },
            {
              station: "ZELE",
              voters: 1044
            },
          ],
          "ECOLE PUBLIQUE DE ROUA / A": [
            {
              station: "DEBAKOTSE",
              voters: 809
            },
            {
              station: "DOMAYO-ROUA",
              voters: 809
            },
            {
              station: "GUEDTEDA",
              voters: 809
            },
            {
              station: "KOTCHA",
              voters: 1044
            },
            {
              station: "LAMORDE",
              voters: 809
            },
            {
              station: "MAYO-ROUA",
              voters: 809
            },
            {
              station: "YOLDEO",
              voters: 809
            },
          ],
          "ECOLE PUBLIQUE DE TREWAD / A": [
            {
              station: "GOUMDZALDA-TREWAD",
              voters: 290
            },
            {
              station: "GUEDEMNAI",
              voters: 290
            },
            {
              station: "MADA-TREWAD",
              voters: 290
            },
            {
              station: "SLAWAR",
              voters: 290
            },
            {
              station: "TREWAD",
              voters: 290
            },
          ],
          "ECOLE PUBLIQUE DE WAYAM / A": [
            {
              station: "WAYAM-DZOMA",
              voters: 440
            },
          ],
          "ECOLE PUBLIQUE DE ZOGOM / A": [
            {
              station: "BODOMZE",
              voters: 685
            },
            {
              station: "BONONO",
              voters: 685
            },
            {
              station: "DEDZAM-ZOGOM",
              voters: 685
            },
            {
              station: "ZOGOM",
              voters: 685
            },
            {
              station: "ZOGOM-CENTRE",
              voters: 685
            },
          ],
          "FOYER-SOULEDE / A": [
            {
              station: "DZAB-BIDAO",
              voters: 320
            },
            {
              station: "FOYER-SOULEDE",
              voters: 320
            },
            {
              station: "GOULAPAR",
              voters: 320
            },
            {
              station: "OUDOUMDZARAI",
              voters: 320
            },
            {
              station: "OUDOUMDZARAI-GOLDAK",
              voters: 320
            },
            {
              station: "TAMBAKAY",
              voters: 320
            },
          ],
          "LYCEE DE ROUA / A": [
            {
              station: "HAWAZ",
              voters: 235
            },
            {
              station: "QUARTIER",
              voters: 235
            },
            {
              station: "LYCEE",
              voters: 235
            },
          ],
          "TELECENTRE COMMUNAUTAIRE DE  SOULEDE / A": [
            {
              station: "GOLDAK",
              voters: 641
            },
            {
              station: "GUEDAYAK",
              voters: 641
            },
            {
              station: "GUIDIAK",
              voters: 641
            },
            {
              station: "KOKOR-TSENA",
              voters: 641
            },
            {
              station: "LAKALAK",
              voters: 641
            },
            {
              station: "MAYO-TSANAGA",
              voters: 641
            },
            {
              station: "NDEVREM",
              voters: 641
            },
            {
              station: "SOULEDE-GOLDAK",
              voters: 641
            },
            {
              station: "TCHOSSOSSO",
              voters: 641
            },
          ],
        },
      },
      "MAYO-DANAY": {
        "DATCHEKA": {
          "BIBLIOTHEQUE DE BLAMBALE / A": [
            {
              station: "BALANE-ZOUAYE",
              voters: 339
            },
            {
              station: "BLAMBALE",
              voters: 339
            },
            {
              station: "DRAM",
              voters: 339
            },
          ],
          "CENTRE MEDICAL D'ARR DE DATCHEKA / A": [
            {
              station: "DAPLAGUE",
              voters: 564
            },
            {
              station: "DOUFLEWA",
              voters: 564
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE GUIDIMA / A": [
            {
              station: "GOLONBOURI",
              voters: 465
            },
            {
              station: "GUIDIMA",
              voters: 235
            },
            {
              station: "HEDEKNE",
              voters: 465
            },
            {
              station: "KAOYA",
              voters: 235
            },
          ],
          "ECOLE PUBLIQUE DE DADJAO / A": [
            {
              station: "DADJAO",
              voters: 136
            },
          ],
          "ECOLE PUBLIQUE DE DATCHEKA / A": [
            {
              station: "DATCHEKA-ECOLE",
              voters: 574
            },
            {
              station: "YONDIKI",
              voters: 483
            },
          ],
          "ECOLE PUBLIQUE DE GAIGAI / A": [
            {
              station: "GAIGAI",
              voters: 247
            },
            {
              station: "GUISEWELE",
              voters: 247
            },
          ],
          "ECOLE PUBLIQUE DE GANGALANG / A": [
            {
              station: "ARBODJAWA",
              voters: 700
            },
            {
              station: "GANGALANG",
              voters: 700
            },
            {
              station: "CENTRE",
              voters: 3022
            },
            {
              station: "KATRANG",
              voters: 700
            },
            {
              station: "LAGARDA",
              voters: 700
            },
          ],
          "ECOLE PUBLIQUE DE GOLONHOBE-YOUAYE /  A": [
            {
              station: "GOLONHOBE-YOUAYE",
              voters: 277
            },
            {
              station: "GOLONTCHAI",
              voters: 277
            },
            {
              station: "TERDEGOLOGUE",
              voters: 277
            },
          ],
          "ECOLE PUBLIQUE DE GOUIN-TAALA / A": [
            {
              station: "BORNO",
              voters: 301
            },
            {
              station: "GOING",
              voters: 301
            },
            {
              station: "MBITCHARE-GOING",
              voters: 301
            },
          ],
          "ECOLE PUBLIQUE DE KABI / A": [
            {
              station: "BALANE-TAALA",
              voters: 750
            },
            {
              station: "DARAM",
              voters: 411
            },
            {
              station: "DAWAREGA",
              voters: 411
            },
            {
              station: "KABI",
              voters: 411
            },
            {
              station: "MBITCHARE-KABI",
              voters: 411
            },
          ],
          "ECOLE PUBLIQUE DE KANKARWA / A": [
            {
              station: "KANKARWA",
              voters: 142
            },
            {
              station: "LA-NGUELFE",
              voters: 142
            },
          ],
          "ECOLE PUBLIQUE DE KONKORONG / A": [
            {
              station: "KONKORONG-CENTRE",
              voters: 720
            },
            {
              station: "LINGOA",
              voters: 720
            },
            {
              station: "MBANDEHE",
              voters: 720
            },
            {
              station: "MBISEO-KONKORONG",
              voters: 720
            },
            {
              station: "NDAIBA",
              voters: 720
            },
            {
              station: "NOUMGA",
              voters: 720
            },
            {
              station: "SOUKOUMKAYA-KONKORONG",
              voters: 720
            },
          ],
          "ECOLE PUBLIQUE DE LABALGA / A": [
            {
              station: "DANHOULI",
              voters: 261
            },
            {
              station: "LABALGA",
              voters: 261
            },
            {
              station: "TITILA",
              voters: 261
            },
          ],
          "ECOLE PUBLIQUE DE LARA / A": [
            {
              station: "LARA",
              voters: 314
            },
            {
              station: "TCHOUDOGUE",
              voters: 314
            },
          ],
          "ECOLE PUBLIQUE DE MBIGUEBERE / A": [
            {
              station: "MBIDIRI",
              voters: 186
            },
            {
              station: "MBIGUEBERE",
              voters: 186
            },
            {
              station: "NGUIRDI",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE DE MOURYOUKI / A": [
            {
              station: "DOMO",
              voters: 266
            },
            {
              station: "MELEE",
              voters: 266
            },
            {
              station: "MOURYOUKI",
              voters: 266
            },
          ],
          "ECOLE PUBLIQUE DE MRAO / A": [
            {
              station: "MBRAO",
              voters: 181
            },
          ],
          "ECOLE PUBLIQUE DE SOUKOUMKAYA / A": [
            {
              station: "KA-NGADE",
              voters: 232
            },
            {
              station: "SOUKOUMKAYA-CENTRE",
              voters: 232
            },
            {
              station: "TILALE-SOUKOUMKAYA",
              voters: 232
            },
          ],
          "ECOLE PUBLIQUE DE TAOMARAO / A": [
            {
              station: "GOLONDERE",
              voters: 312
            },
            {
              station: "TAOMARAO",
              voters: 312
            },
            {
              station: "WERFEO",
              voters: 312
            },
          ],
          "ECOLE PUBLIQUE DE TIBALI / A": [
            {
              station: "GONMANA",
              voters: 484
            },
            {
              station: "MANDEPOURI",
              voters: 484
            },
            {
              station: "NGUING",
              voters: 484
            },
            {
              station: "TIBALI",
              voters: 484
            },
          ],
          "ECOLE PUBLIQUE DE TINING / A": [
            {
              station: "BAOLI",
              voters: 199
            },
            {
              station: "TILALE-TINING",
              voters: 199
            },
            {
              station: "TINING",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE WARSAYE / A": [
            {
              station: "TINRING",
              voters: 362
            },
            {
              station: "WARSAYE",
              voters: 362
            },
          ],
          "ECOLE PUBLIQUE DE YOUAYE / A": [
            {
              station: "KALFOU",
              voters: 554
            },
            {
              station: "MBIGUIRLING",
              voters: 554
            },
            {
              station: "MINDIF",
              voters: 554
            },
            {
              station: "YOUAYE-CENTRE",
              voters: 554
            },
          ],
          "ECOLE PUBLIQUE DE ZOUAYE / A": [
            {
              station: "BAODI",
              voters: 581
            },
            {
              station: "DARLOU",
              voters: 581
            },
            {
              station: "DJAKLOUMO",
              voters: 581
            },
            {
              station: "DJENRENG",
              voters: 581
            },
            {
              station: "KANTONRONG",
              voters: 581
            },
            {
              station: "ZOUAYE-CENTRE",
              voters: 581
            },
          ],
          "EGLISE DE ZADDIELE / A": [
            {
              station: "GOLONTCHEO",
              voters: 91
            },
            {
              station: "ZADDIELE",
              voters: 91
            },
          ],
          "EGLISE ORTHODOXE DE DOUBANGOU / A": [
            {
              station: "DOUBANGOU",
              voters: 324
            },
            {
              station: "MBIREON",
              voters: 324
            },
          ],
          "ESPLANADE CHEFFERIE DE DJAMNI / A": [
            {
              station: "DILIK-NGA",
              voters: 186
            },
            {
              station: "DJAMNI",
              voters: 186
            },
            {
              station: "NEOLENG",
              voters: 186
            },
          ],
          "ESPLANADE CHEFFERIE DE LESSE / A": [
            {
              station: "LESSE",
              voters: 75
            },
          ],
          "MAGASIN DON SUISSE DE TAALA / A": [
            {
              station: "REY",
              voters: 263
            },
            {
              station: "TAALA",
              voters: 263
            },
          ],
          "MAGASIN GIC DE GOLOMPOUI CENTRE / A": [
            {
              station: "DAPTIKAI",
              voters: 514
            },
            {
              station: "GOLOMPOUI",
              voters: 514
            },
            {
              station: "GOLONDJAM",
              voters: 514
            },
            {
              station: "MBITCHARE-GOLOMPOUI",
              voters: 514
            },
          ],
          "MAGASIN GIC DE GOLONHOBE-GOING / A": [
            {
              station: "DJAOLANE",
              voters: 134
            },
            {
              station: "GOLONHOBE-GOING",
              voters: 134
            },
            {
              station: "GOLONHOBE-TAOLA",
              voters: 134
            },
            {
              station: "GOLONSEO",
              voters: 134
            },
          ],
          "MAGASIN SODECOTON DE SOKOM / A": [
            {
              station: "DORE",
              voters: 336
            },
            {
              station: "ELBORE",
              voters: 336
            },
            {
              station: "POLE",
              voters: 336
            },
            {
              station: "SOKOM-CENTRE",
              voters: 336
            },
          ],
          "MARCHE DE BOUGOUI / A": [
            {
              station: "BOUGOUI",
              voters: 614
            },
          ],
          "MARCHE DE DIKDIM / A": [
            {
              station: "DIKDIM",
              voters: 151
            },
          ],
          "MARCHE DE DJOUDIDO / A": [
            {
              station: "DJOUDIDO",
              voters: 279
            },
            {
              station: "GUIBENANIGA",
              voters: 279
            },
            {
              station: "SEGUEORE",
              voters: 279
            },
          ],
          "MARCHE DE FOULAYE / A": [
            {
              station: "BARETAOGUI",
              voters: 258
            },
            {
              station: "FOULAYE",
              voters: 258
            },
            {
              station: "NDONGROSSE",
              voters: 258
            },
          ],
          "MARCHE DE TITCHEO / A": [
            {
              station: "FALE",
              voters: 219
            },
            {
              station: "TITCHEO",
              voters: 219
            },
          ],
          "POSTE AGRICOLE DE GOLONPOUI / A": [
            {
              station: "MBISSEO-GOLONPOUI",
              voters: 285
            },
            {
              station: "TILALE-GOLONPOUI",
              voters: 285
            },
          ],
        },
        "GOBO": {
          "ECOLE MATERNELLE DE GOBO / A": [
            {
              station: "ALIOUM",
              voters: 467
            },
            {
              station: "TCHEKETA",
              voters: 467
            },
            {
              station: "YARO",
              voters: 467
            },
          ],
          "ECOLE PUBLIQUE DE BASTEBE / A": [
            {
              station: "BARDOUKI",
              voters: 443
            },
            {
              station: "BASTEBE",
              voters: 443
            },
            {
              station: "SAODA",
              voters: 443
            },
          ],
          "ECOLE PUBLIQUE DE BEKSOU / A": [
            {
              station: "BEKSOU",
              voters: 450
            },
            {
              station: "DJOUBOUNSOU",
              voters: 450
            },
          ],
          "ECOLE PUBLIQUE DE DABANA / A": [
            {
              station: "DABANA",
              voters: 528
            },
            {
              station: "DONGO",
              voters: 1315
            },
            {
              station: "GOUNOUDA",
              voters: 528
            },
            {
              station: "KARFA",
              voters: 528
            },
            {
              station: "KOKAINA",
              voters: 528
            },
            {
              station: "KOUFAK",
              voters: 528
            },
          ],
          "ECOLE PUBLIQUE DE DJELME / A": [
            {
              station: "GOULMOUNDA",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE DE DJELME DONGO / A": [
            {
              station: "DJAOSSOU",
              voters: 462
            },
            {
              station: "DJELME",
              voters: 984
            },
            {
              station: "FOKSIA",
              voters: 462
            },
            {
              station: "LAM-OUMBI",
              voters: 462
            },
            {
              station: "SAMARGUE",
              voters: 462
            },
          ],
          "ECOLE PUBLIQUE DE DOM-SOULKOU / A": [
            {
              station: "AIDI",
              voters: 604
            },
            {
              station: "HOUMGATSOU",
              voters: 604
            },
            {
              station: "KAIWA",
              voters: 604
            },
            {
              station: "KETE",
              voters: 604
            },
            {
              station: "KOMESSOU",
              voters: 604
            },
            {
              station: "MOULLA",
              voters: 1259
            },
            {
              station: "NGAYA",
              voters: 1237
            },
            {
              station: "SALKAM",
              voters: 604
            },
            {
              station: "SOULKOU",
              voters: 604
            },
          ],
          "ECOLE PUBLIQUE DE DOM-TCHANTOKO / A": [
            {
              station: "TCHANDOUM",
              voters: 500
            },
            {
              station: "TCHANTOKO",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE DOMPYA / A": [
            {
              station: "DOMPYA",
              voters: 402
            },
            {
              station: "SALE",
              voters: 402
            },
            {
              station: "SOUINA",
              voters: 402
            },
          ],
          "ECOLE PUBLIQUE DE DONGO / A": [
            {
              station: "NOULDAINA",
              voters: 980
            },
            {
              station: "SIFOULDA",
              voters: 325
            },
            {
              station: "TCHO-ONNA",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE DE GADAMBE / A": [
            {
              station: "DJARWAYE",
              voters: 233
            },
            {
              station: "GADAMBE",
              voters: 233
            },
            {
              station: "OURO-BOUNOU",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE DE GALAM FOULDA / A": [
            {
              station: "BOROSSOU",
              voters: 541
            },
            {
              station: "DILSIA",
              voters: 541
            },
            {
              station: "GALAM",
              voters: 1174
            },
            {
              station: "CENTRE",
              voters: 1708
            },
            {
              station: "GUIMBORO",
              voters: 541
            },
            {
              station: "HAYAMSOU",
              voters: 541
            },
          ],
          "ECOLE PUBLIQUE DE GOBO OUNGASSOU / A": [
            {
              station: "DJOVANA",
              voters: 489
            },
            {
              station: "OUNGASSOU",
              voters: 489
            },
          ],
          "ECOLE PUBLIQUE DE GONONDA / A": [
            {
              station: "GONONDA",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE GOUFGA / A": [
            {
              station: "DJIRINSOU",
              voters: 665
            },
            {
              station: "FALKAKOU",
              voters: 665
            },
            {
              station: "GOUFGA",
              voters: 665
            },
            {
              station: "HLEDANDI",
              voters: 665
            },
            {
              station: "HLAMANA",
              voters: 665
            },
            {
              station: "KOULDANDI",
              voters: 665
            },
            {
              station: "NGAMDIBE",
              voters: 665
            },
            {
              station: "VIADANDI",
              voters: 665
            },
          ],
          "ECOLE PUBLIQUE DE GUIMRI / A": [
            {
              station: "GUIMRI",
              voters: 645
            },
            {
              station: "HLAOUDA",
              voters: 433
            },
          ],
          "ECOLE PUBLIQUE DE GUIRIOU / A": [
            {
              station: "MODIBO",
              voters: 572
            },
            {
              station: "MAL-BAH",
              voters: 572
            },
            {
              station: "MOUSKOUN",
              voters: 572
            },
            {
              station: "VANKOMBI",
              voters: 572
            },
          ],
          "ECOLE PUBLIQUE DE GUIRIOU GRAND / A": [
            {
              station: "GASTA",
              voters: 769
            },
            {
              station: "GOLONGUELDA",
              voters: 769
            },
            {
              station: "GUIRIOU",
              voters: 1929
            },
            {
              station: "WALANGUE",
              voters: 769
            },
          ],
          "ECOLE PUBLIQUE DE KAIGUE / A": [
            {
              station: "KAIGUE",
              voters: 1324
            },
          ],
          "ECOLE PUBLIQUE DE KARAM / A": [
            {
              station: "DJOSSEMA",
              voters: 479
            },
            {
              station: "ERDANDI",
              voters: 479
            },
            {
              station: "LIDINKERO",
              voters: 479
            },
            {
              station: "MITLIBI",
              voters: 479
            },
          ],
          "ECOLE PUBLIQUE DE MASSA IKA / A": [
            {
              station: "DAHAO",
              voters: 495
            },
            {
              station: "DAKATANKERO",
              voters: 495
            },
            {
              station: "DARKAWAYE",
              voters: 495
            },
            {
              station: "LAKADARAM",
              voters: 495
            },
            {
              station: "MASSA-IKA",
              voters: 495
            },
            {
              station: "NDOU-NOULDA",
              voters: 495
            },
          ],
          "ECOLE PUBLIQUE DE MASSA VOUNSOUMNA /  A": [
            {
              station: "BERENA",
              voters: 417
            },
            {
              station: "KALAK",
              voters: 417
            },
            {
              station: "VOUNSOUMNA",
              voters: 417
            },
          ],
          "ECOLE PUBLIQUE DE MASSA-KOUTWEITA / A": [
            {
              station: "BOURMASSOU",
              voters: 849
            },
            {
              station: "DJARWIDI",
              voters: 849
            },
            {
              station: "KOLOMKERO",
              voters: 849
            },
            {
              station: "KOUMGUE",
              voters: 849
            },
            {
              station: "MASSA-KOUTWEITA",
              voters: 849
            },
            {
              station: "TCHENEM",
              voters: 849
            },
          ],
          "ECOLE PUBLIQUE DE MOGOZOULOU / A": [
            {
              station: "MOUGOUZOULOU",
              voters: 282
            },
            {
              station: "TCHAKALNA",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE MONGUI / A": [
            {
              station: "MONGUI-DOWEITA",
              voters: 761
            },
            {
              station: "MONGUI-SALI",
              voters: 761
            },
          ],
          "ECOLE PUBLIQUE DE NAIGUISSIA / A": [
            {
              station: "LAKI",
              voters: 560
            },
            {
              station: "MOURHA",
              voters: 560
            },
            {
              station: "NAIGUISSIA",
              voters: 560
            },
            {
              station: "NDIRIM",
              voters: 560
            },
            {
              station: "RAH",
              voters: 560
            },
          ],
          "ECOLE PUBLIQUE DE NOULDAINA / A": [
            {
              station: "GODOMO",
              voters: 655
            },
            {
              station: "KELE",
              voters: 655
            },
            {
              station: "MBARA",
              voters: 655
            },
            {
              station: "NDOUDJIDA",
              voters: 655
            },
            {
              station: "YABANA",
              voters: 655
            },
            {
              station: "SIAMASSI",
              voters: 655
            },
          ],
          "ECOLE PUBLIQUE DE POLGUE CENTRE / A": [
            {
              station: "POLGUE",
              voters: 508
            },
            {
              station: "DJOONA",
              voters: 508
            },
          ],
          "ECOLE PUBLIQUE DE YAKREO I / A": [
            {
              station: "SALLA",
              voters: 369
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE GOBO DIA / A": [
            {
              station: "KARINA",
              voters: 200
            },
            {
              station: "MATANGA",
              voters: 200
            },
          ],
          "EGLISE EVANGELIQUE DE DOBONA / A": [
            {
              station: "DOBONA",
              voters: 211
            },
          ],
          "EGLISE EVANGELIQUE DE KARAM II / A": [
            {
              station: "GOLOMBENA",
              voters: 236
            },
          ],
          "EGLISE FRATERNELLE LUTHERIENNE BIGUI /  A": [
            {
              station: "BIGUI",
              voters: 589
            },
            {
              station: "BIGUI-FOULDA",
              voters: 589
            },
            {
              station: "BIGUI-MBASTA",
              voters: 589
            },
            {
              station: "MONGUI-FOULDA",
              voters: 589
            },
            {
              station: "NGARANA",
              voters: 1178
            },
            {
              station: "LAWANE",
              voters: 3324
            },
            {
              station: "NINGAINA",
              voters: 589
            },
          ],
          "EGLISE PROTESTANTE DE GALAM MBASTA /  A": [
            {
              station: "MBASTA",
              voters: 633
            },
            {
              station: "KADRI",
              voters: 633
            },
            {
              station: "AMOS",
              voters: 633
            },
            {
              station: "BENOIT",
              voters: 633
            },
            {
              station: "SOUSSOUNA",
              voters: 633
            },
          ],
          "ESPLANADE GIC DE KAINA / A": [
            {
              station: "KAINA",
              voters: 224
            },
          ],
          "ESPLANADE MOSQUEE DE LAMORDE / A": [
            {
              station: "ABDOU",
              voters: 593
            },
            {
              station: "ALPOS",
              voters: 593
            },
            {
              station: "LAMORDE",
              voters: 593
            },
            {
              station: "BAKARY",
              voters: 593
            },
          ],
          "MAGASIN GIC DE DOM MOUDMARA / A": [
            {
              station: "ABDOU-DOM",
              voters: 549
            },
            {
              station: "MOUDMARA",
              voters: 549
            },
            {
              station: "DIRSA",
              voters: 549
            },
            {
              station: "GANLI",
              voters: 549
            },
            {
              station: "HLAMDAINA",
              voters: 549
            },
            {
              station: "KAHLA",
              voters: 549
            },
            {
              station: "NDENLE",
              voters: 549
            },
            {
              station: "YODI",
              voters: 549
            },
          ],
          "MAGASIN GIC DE KOROMBA / A": [
            {
              station: "KALIDI",
              voters: 696
            },
          ],
          "MAGASIN GIC DE MBALLA / A": [
            {
              station: "DJOYOMSOU",
              voters: 147
            },
            {
              station: "MBALLA",
              voters: 147
            },
          ],
          "MAGASIN SODECOTON DE BAIGA / A": [
            {
              station: "BAIGA",
              voters: 221
            },
            {
              station: "BAONA",
              voters: 221
            },
            {
              station: "GOUMA",
              voters: 221
            },
          ],
          "MAGASIN SODECOTON DE BASTEBE II / A": [
            {
              station: "BASS",
              voters: 358
            },
            {
              station: "BONGOR",
              voters: 358
            },
            {
              station: "POIDI",
              voters: 358
            },
          ],
          "MAGASIN SODECOTON DE BOSSO / A": [
            {
              station: "BOSSO",
              voters: 339
            },
            {
              station: "LAK",
              voters: 339
            },
            {
              station: "ABDOULAYE",
              voters: 834
            },
            {
              station: "SADOU",
              voters: 1406
            },
          ],
          "MAGASIN SODECOTON DE ESS-GUE / A": [
            {
              station: "ESS-ECOLE",
              voters: 392
            },
            {
              station: "ESS-FOULBE",
              voters: 392
            },
            {
              station: "ESS-GUE",
              voters: 392
            },
          ],
          "MAGASIN SODECOTON DE GUIMRI / A": [
            {
              station: "KONA",
              voters: 212
            },
          ],
          "MAGASIN SODECOTON DE GUIRIOU OIDOU /  A": [
            {
              station: "MBASKI",
              voters: 294
            },
            {
              station: "OIDOU",
              voters: 294
            },
          ],
          "MAGASIN SODECOTON DE KARAM / A": [
            {
              station: "LAKKA",
              voters: 521
            },
            {
              station: "LOPTOUANBE",
              voters: 521
            },
            {
              station: "MOUGOUMMA",
              voters: 521
            },
            {
              station: "TONRONPOUTNA",
              voters: 521
            },
          ],
          "MAGASIN SODECOTON DE MATCHAMANDI / A": [
            {
              station: "KALOSSOU",
              voters: 136
            },
            {
              station: "MATCHAMANDI",
              voters: 136
            },
          ],
          "MAGASIN SODECOTON DE YAKREO II / A": [
            {
              station: "DOUBANA",
              voters: 277
            },
            {
              station: "GAHLAWA",
              voters: 277
            },
            {
              station: "MOULVOUDAYE",
              voters: 277
            },
            {
              station: "YAKREO",
              voters: 646
            },
          ],
          "MAGASIN SODECOTON DE ZEGUELLEO / A": [
            {
              station: "ALTINE",
              voters: 338
            },
            {
              station: "TAIWE",
              voters: 338
            },
            {
              station: "ZEGUELEO",
              voters: 338
            },
          ],
          "MAGASIN SODECOTON HOLOM-NDAKASSOU  /A": [
            {
              station: "HOLOM-KOULOUMBA",
              voters: 969
            },
            {
              station: "HOLOM-NDAKASSOU",
              voters: 570
            },
            {
              station: "ZEBELDA",
              voters: 969
            },
            {
              station: "ZOMI",
              voters: 570
            },
          ],
          "MARCHE DU RIZ DE GOBO / A": [
            {
              station: "GARGA",
              voters: 495
            },
            {
              station: "FOULBE",
              voters: 495
            },
            {
              station: "GUIDANMOUTOU",
              voters: 495
            },
            {
              station: "HASSANA",
              voters: 495
            },
          ],
          "MOSQUEE DE SIRATARE / A": [
            {
              station: "BOULAMA",
              voters: 531
            },
            {
              station: "MADI",
              voters: 531
            },
            {
              station: "GOBO",
              voters: 1493
            },
            {
              station: "SIRATARE",
              voters: 531
            },
            {
              station: "ISSA",
              voters: 531
            },
          ],
          "PLACE DES FETES DE GOBO / A": [
            {
              station: "HLEMSOU",
              voters: 241
            },
          ],
        },
        "GUEME-VELE": {
          "CAISSE COMMUNAUTAIRE DE HELENG / A": [
            {
              station: "HELENG",
              voters: 174
            },
          ],
          "ECOLE PUBLIQUE DE AGOLLA / A": [
            {
              station: "AGOLLA",
              voters: 2868
            },
          ],
          "ECOLE PUBLIQUE DE DABAYE GOHO / A": [
            {
              station: "GOHO",
              voters: 771
            },
            {
              station: "KOMO",
              voters: 771
            },
          ],
          "ECOLE PUBLIQUE DE DOUANG / A": [
            {
              station: "DOUANG",
              voters: 2241
            },
          ],
          "ECOLE PUBLIQUE DE GANDJAM / A": [
            {
              station: "GANDJAM",
              voters: 565
            },
          ],
          "ECOLE PUBLIQUE DE GANDJAM DANAY / A": [
            {
              station: "DANAY",
              voters: 318
            },
          ],
          "ECOLE PUBLIQUE DE GUEMERE / A": [
            {
              station: "GUEMERE",
              voters: 1518
            },
            {
              station: "III",
              voters: 702
            },
            {
              station: "MERINGUE",
              voters: 1951
            },
          ],
          "ECOLE PUBLIQUE DE GUIA / A": [
            {
              station: "BIDIWER",
              voters: 451
            },
            {
              station: "GUIA",
              voters: 902
            },
            {
              station: "MOKOLOM",
              voters: 451
            },
          ],
          "ECOLE PUBLIQUE DE GUIDIME / A": [
            {
              station: "GUIDIME",
              voters: 364
            },
          ],
          "ECOLE PUBLIQUE DE KARTOUA / A": [
            {
              station: "KARTOUA",
              voters: 1200
            },
          ],
          "ECOLE PUBLIQUE DE KAYAM / A": [
            {
              station: "KAYAM",
              voters: 856
            },
          ],
          "ECOLE PUBLIQUE DE LHAGAM / A": [
            {
              station: "WIDIGUE",
              voters: 832
            },
            {
              station: "LHAGAM",
              voters: 832
            },
          ],
          "ECOLE PUBLIQUE DE MARA / A": [
            {
              station: "MARA",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE DE VELE FIRIMDI / A": [
            {
              station: "FIRIMDI",
              voters: 234
            },
          ],
          "ECOLE PUBLIQUE DE YIKA / A": [
            {
              station: "GABARAYE",
              voters: 1455
            },
            {
              station: "YIKA",
              voters: 1455
            },
          ],
          "ECOLE PUBLIQUE GROUPE 2 / A": [
            {
              station: "HIRI",
              voters: 690
            },
          ],
          "EGLISE CONGREGATION DE TOUASSOU / A": [
            {
              station: "TOUASSOU",
              voters: 696
            },
          ],
          "EGLISE DE BIDI CENTRE A / A": [
            {
              station: "CENTRE",
              voters: 4410
            },
          ],
          "EGLISE DE BIDI CENTRE B / A": [
            {
              station: "BIDI",
              voters: 362
            },
            {
              station: "BALAMDI",
              voters: 177
            },
          ],
          "EGLISE DE GANGANG / A": [
            {
              station: "GANGANG",
              voters: 632
            },
          ],
          "EGLISE DE MOGOI / A": [
            {
              station: "BANGALA",
              voters: 357
            },
            {
              station: "MOGOI",
              voters: 357
            },
            {
              station: "NIRAM",
              voters: 357
            },
          ],
          "EP WAKA / A": [
            {
              station: "WAGA",
              voters: 730
            },
            {
              station: "DJARMATNA",
              voters: 365
            },
            {
              station: "FOULOU",
              voters: 365
            },
            {
              station: "WAKA",
              voters: 730
            },
            {
              station: "KAGAN",
              voters: 604
            },
          ],
          "EP WAￏDOUA / A": [
            {
              station: "WAￏDOU",
              voters: 717
            },
            {
              station: "VORO",
              voters: 239
            },
          ],
          "ESPL. CHEF. DE GABARAYE WIDI GARDI / A": [
            {
              station: "GARDI",
              voters: 644
            },
          ],
          "ESPL. CHEF. GABARAYE WIDI DJALWA / A": [
            {
              station: "DJALWA",
              voters: 1758
            },
            {
              station: "WAIDOUA",
              voters: 586
            },
          ],
          "ESPL. CHEFFERIE DE DABAYE DJOROCK / A": [
            {
              station: "DABAYE",
              voters: 4705
            },
            {
              station: "DJOROCK",
              voters: 2218
            },
          ],
          "ESPL. CHEFFERIE DE DABAYE KOUMAKA / A": [
            {
              station: "KOUMAKA",
              voters: 266
            },
          ],
          "ESPL. CHEFFERIE DE DABAYE NGAGUI / A": [
            {
              station: "NGAGUI",
              voters: 1803
            },
          ],
          "ESPL. CHEFFERIE DE GONYONRE / A": [
            {
              station: "DJADJEL",
              voters: 177
            },
            {
              station: "GONYONRE",
              voters: 177
            },
          ],
          "ESPL. CHEFFERIE DE GUEME DJOROCK / A": [
            {
              station: "FOULBE",
              voters: 524
            },
            {
              station: "NGASSA",
              voters: 524
            },
          ],
          "ESPL. CHEFFERIE DE GUILING / A": [
            {
              station: "GUILING",
              voters: 674
            },
          ],
          "ESPL. CHEFFERIE DE KOURO-MOKDAYE / A": [
            {
              station: "KOURO-MOKDAYE",
              voters: 125
            },
          ],
          "ESPL. CHEFFERIE DE SENGUE / A": [
            {
              station: "SENGUE",
              voters: 706
            },
          ],
          "ESPL. CHEFFERIE DE VELE CENTRE / A": [
            {
              station: "DOBO",
              voters: 1007
            },
            {
              station: "VELE",
              voters: 4625
            },
          ],
          "ESPL. CHEFFERIE DE VELE YOTTOKA / A": [
            {
              station: "YOTTOKA",
              voters: 170
            },
          ],
          "ESPL. CHEFFERIE DE YARAYE / A": [
            {
              station: "YARAYE",
              voters: 318
            },
          ],
          "ESPL. CHEFFERIE DE YONGHO / A": [
            {
              station: "YONGHO",
              voters: 666
            },
          ],
          "ESPLANADE CHEFFERIE DE GUILING / A": [
            {
              station: "KAO",
              voters: 136
            },
          ],
          "MAIRIE DE GUEME / A": [
            {
              station: "GUEME",
              voters: 2667
            },
            {
              station: "ARABE",
              voters: 571
            },
            {
              station: "GUIYA",
              voters: 571
            },
          ],
          "MAISON COMMUNAUTAIRE DE GUEME BAI / A": [
            {
              station: "BAI",
              voters: 1048
            },
          ],
          "MOSQUEE DE KARTOUA-BERE / A": [
            {
              station: "DOUMARAYE",
              voters: 506
            },
          ],
        },
        "GUERE": {
          "CASE COURS D'ADULTE DE ZARNA / A": [
            {
              station: "ZIMANGAYAK",
              voters: 96
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE DE BOUROU /  A": [
            {
              station: "BOUROU",
              voters: 256
            },
          ],
          "ECOLE DES PARENTS DE GOUNOUDA / A": [
            {
              station: "GOUNOUDA",
              voters: 105
            },
          ],
          "ECOLE DES PARENTS DE TCHARWAYE / A": [
            {
              station: "TCHARWAYE",
              voters: 160
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DJOUGOUMTA /  A": [
            {
              station: "DJOUGOUMTA-NORD",
              voters: 199
            },
          ],
          "ECOLE PUBLIQUE DE ARDAF / A": [
            {
              station: "ARDAF",
              voters: 1574
            },
            {
              station: "CENTRE",
              voters: 2920
            },
          ],
          "ECOLE PUBLIQUE DE ARKOUNA / A": [
            {
              station: "ARKOUNA",
              voters: 345
            },
          ],
          "ECOLE PUBLIQUE DE BALMATTA / A": [
            {
              station: "RURAL",
              voters: 237
            },
          ],
          "ECOLE PUBLIQUE DE DANGABISSI / A": [
            {
              station: "DANGABISSI",
              voters: 243
            },
            {
              station: "VOUNSOUMKAKOU",
              voters: 243
            },
          ],
          "ECOLE PUBLIQUE DE DANIGUE / A": [
            {
              station: "DANIGUE",
              voters: 404
            },
            {
              station: "MARWANA",
              voters: 404
            },
            {
              station: "POURHANA",
              voters: 404
            },
          ],
          "ECOLE PUBLIQUE DE DOUSEYE / A": [
            {
              station: "ECOLE",
              voters: 367
            },
          ],
          "ECOLE PUBLIQUE DE FOURGANA / A": [
            {
              station: "FOURGANA",
              voters: 334
            },
            {
              station: "YOUNA",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE DE GADISSOU / A": [
            {
              station: "GADISSOU",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE GAOYANG / A": [
            {
              station: "GAOYANG",
              voters: 373
            },
            {
              station: "VOUNALAKI",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE GOURVAYE / A": [
            {
              station: "GOURVAYE",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE GROUM / A": [
            {
              station: "GOULMOUNDA",
              voters: 422
            },
            {
              station: "GROUM",
              voters: 422
            },
          ],
          "ECOLE PUBLIQUE DE HOLOM / A": [
            {
              station: "HOLOM",
              voters: 307
            },
          ],
          "ECOLE PUBLIQUE DE KLEDANDI / A": [
            {
              station: "KLEDANDI",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE KONONAYE / A": [
            {
              station: "KONONAYE",
              voters: 180
            },
          ],
          "ECOLE PUBLIQUE DE LOKO / A": [
            {
              station: "KOUTCHOUTA-LOKO",
              voters: 469
            },
            {
              station: "LOKO",
              voters: 469
            },
          ],
          "ECOLE PUBLIQUE DE MERENGUE / A": [
            {
              station: "VOULANMAISSOU",
              voters: 217
            },
          ],
          "ECOLE PUBLIQUE DE MOUKA / A": [
            {
              station: "BOUGOL",
              voters: 134
            },
            {
              station: "FOULDA",
              voters: 134
            },
          ],
          "ECOLE PUBLIQUE DE MOUTANG / A": [
            {
              station: "MOUTANG",
              voters: 492
            },
          ],
          "ECOLE PUBLIQUE DE NAHAIDE / A": [
            {
              station: "BASKALAYE",
              voters: 672
            },
            {
              station: "BOTMOYE",
              voters: 672
            },
            {
              station: "NAHAIDE",
              voters: 672
            },
          ],
          "ECOLE PUBLIQUE DE NGAINA / A": [
            {
              station: "NGAINA",
              voters: 251
            },
          ],
          "ECOLE PUBLIQUE DE NGUERING I / A": [
            {
              station: "NGUERUNG",
              voters: 842
            },
          ],
          "ECOLE PUBLIQUE DE NOULDA / A": [
            {
              station: "GUIYA",
              voters: 349
            },
            {
              station: "NOULDA",
              voters: 349
            },
          ],
          "ECOLE PUBLIQUE DE WARKALAK / A": [
            {
              station: "WARKALAK",
              voters: 704
            },
          ],
          "EGLISE PROTESTANTE DE GRAND / A": [
            {
              station: "GRAND",
              voters: 117
            },
          ],
          "EGLISE PROTESTANTE DE MARFI / A": [
            {
              station: "GUILING",
              voters: 169
            },
            {
              station: "MARFI",
              voters: 169
            },
          ],
          "ESPLANADE CHEFFERIE DE BONGOR / A": [
            {
              station: "BONGOR",
              voters: 365
            },
            {
              station: "DAHAO",
              voters: 365
            },
          ],
          "ESPLANADE CHEFFERIE DE DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 147
            },
          ],
          "ESPLANADE CHEFFERIE DE DJOBTA / A": [
            {
              station: "DJOBTA",
              voters: 134
            },
          ],
          "ESPLANADE CHEFFERIE DE GOTPA / A": [
            {
              station: "GOTPA",
              voters: 61
            },
          ],
          "ESPLANADE CHEFFERIE DE KLEDANDI / A": [
            {
              station: "MOUGUE",
              voters: 127
            },
          ],
          "ESPLANADE CHEFFERIE DE MAIDA / A": [
            {
              station: "MAIDA",
              voters: 301
            },
          ],
          "ESPLANADE CHEFFERIE DE MOUZOUK / A": [
            {
              station: "MOUZOUK",
              voters: 188
            },
          ],
          "ESPLANADE CHEFFERIE DE TA'ALA / A": [
            {
              station: "TA'ALA",
              voters: 122
            },
          ],
          "ESPLANADE CHEFFERIE DE ZORKE / A": [
            {
              station: "ZOLONA",
              voters: 201
            },
            {
              station: "ZORKE",
              voters: 201
            },
          ],
          "LYCEE DE BANGANA / A": [
            {
              station: "BANGANA",
              voters: 749
            },
            {
              station: "YORONA",
              voters: 777
            },
            {
              station: "SOUANA",
              voters: 457
            },
          ],
          "LYCEE DE GUERE / A": [
            {
              station: "FOULBE",
              voters: 218
            },
          ],
          "MAGASIN DELEGATION D'AGRICULTURE G. /  A": [
            {
              station: "GUIBI",
              voters: 580
            },
          ],
          "MAGASIN GIC DE GOUNOUGANG / A": [
            {
              station: "GOUNOUGANG",
              voters: 176
            },
          ],
          "MAGASIN SODECOTON DE MOUKA / A": [
            {
              station: "MOUKA",
              voters: 343
            },
            {
              station: "ZARNA",
              voters: 439
            },
          ],
          "MAGASIN SODECOTON DE TRANTOUANG / A": [
            {
              station: "GUIZIMDARI",
              voters: 221
            },
            {
              station: "TRANTOUANG",
              voters: 221
            },
          ],
          "MAGASIN SODECOTON DOUSEYE CENTRE /  A": [
            {
              station: "DOUSEYE",
              voters: 534
            },
          ],
          "MARCHE DE DJOUGOUMTA / A": [
            {
              station: "DJOUGOUMTA-SUD",
              voters: 279
            },
          ],
          "MARCHE DE HOROKNA / A": [
            {
              station: "HOROKNA",
              voters: 262
            },
          ],
          "MARCHE DE NAMAINA / A": [
            {
              station: "NAMAINA",
              voters: 165
            },
          ],
          "POSTE DE SURVEILLANCE LAC DE GUERE / A": [
            {
              station: "DJEDEL",
              voters: 203
            },
          ],
          "RADIER DE DANRAI / A": [
            {
              station: "DANRAI",
              voters: 129
            },
          ],
        },
        "KAI-KAI": {
          "ECOLE PRIVEE CATHOLIQUE DE DOUALARE /  A": [
            {
              station: "MADINA",
              voters: 490
            },
            {
              station: "MOUTORKOYE",
              voters: 490
            },
            {
              station: "TCHOULO",
              voters: 490
            },
            {
              station: "WOURO-KESSOUM",
              voters: 490
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE KOKO / A": [
            {
              station: "KOKO",
              voters: 542
            },
            {
              station: "SOTONGAI",
              voters: 542
            },
          ],
          "ECOLE PUBLIQUE DE  LOUGOYE-MASSOUANG / A": [
            {
              station: "GONGOH",
              voters: 423
            },
            {
              station: "MANGAL",
              voters: 423
            },
          ],
          "ECOLE PUBLIQUE DE BALGAM / A": [
            {
              station: "BALGAM",
              voters: 568
            },
            {
              station: "TOUMAS",
              voters: 568
            },
          ],
          "ECOLE PUBLIQUE DE BANGAL / A": [
            {
              station: "BANGAL",
              voters: 130
            },
            {
              station: "KALAO-BG",
              voters: 130
            },
            {
              station: "ZILBIDI",
              voters: 130
            },
          ],
          "ECOLE PUBLIQUE DE BARKAYA / A": [
            {
              station: "BARKAYA",
              voters: 387
            },
            {
              station: "GUIZEKE",
              voters: 387
            },
            {
              station: "HOTAI",
              voters: 387
            },
          ],
          "ECOLE PUBLIQUE DE BEGUE-PALAM / A": [
            {
              station: "OUTAI",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE DE BOGOL / A": [
            {
              station: "BOGOL",
              voters: 917
            },
            {
              station: "DIVIDIVI",
              voters: 91
            },
          ],
          "ECOLE PUBLIQUE DE DAMA / A": [
            {
              station: "BARAI-DOUMOURLAI",
              voters: 728
            },
            {
              station: "DJOBODAYE",
              voters: 728
            },
            {
              station: "DJOUGONG",
              voters: 589
            },
            {
              station: "GOLMO",
              voters: 589
            },
            {
              station: "KOUAI",
              voters: 589
            },
            {
              station: "MAWA",
              voters: 589
            },
            {
              station: "MEMIYE",
              voters: 589
            },
            {
              station: "MINI",
              voters: 589
            },
            {
              station: "MOUGOU",
              voters: 589
            },
          ],
          "ECOLE PUBLIQUE DE DAVA-KARMAKAYE / A": [
            {
              station: "DAVA",
              voters: 253
            },
            {
              station: "DAVA-KARMAKAYE",
              voters: 253
            },
          ],
          "ECOLE PUBLIQUE DE DEDEKE / A": [
            {
              station: "BONGOR",
              voters: 282
            },
            {
              station: "DEDEKE",
              voters: 282
            },
            {
              station: "MADAGASCAR",
              voters: 282
            },
          ],
          "ECOLE PUBLIQUE DE DJAFGA / A": [
            {
              station: "AGOMSOU",
              voters: 296
            },
            {
              station: "TCHOMO",
              voters: 444
            },
          ],
          "ECOLE PUBLIQUE DE DOBOKO / A": [
            {
              station: "ABANA",
              voters: 330
            },
            {
              station: "DANA",
              voters: 330
            },
            {
              station: "DOBOKO",
              voters: 330
            },
            {
              station: "MEMIE-DJ",
              voters: 330
            },
          ],
          "ECOLE PUBLIQUE DE DOREISSOU / A": [
            {
              station: "DELBA",
              voters: 417
            },
            {
              station: "MOUKOUSOUK",
              voters: 417
            },
            {
              station: "NGAIDANDJI",
              voters: 417
            },
            {
              station: "WARIA",
              voters: 417
            },
          ],
          "ECOLE PUBLIQUE DE DOUGUI / A": [
            {
              station: "DJAFGA-DOUG",
              voters: 275
            },
            {
              station: "GAMADA",
              voters: 275
            },
            {
              station: "WOURAI-DOUG",
              voters: 275
            },
          ],
          "ECOLE PUBLIQUE DE DOUKROYE / A": [
            {
              station: "DALWA",
              voters: 855
            },
            {
              station: "DJOSSOUAKAYE",
              voters: 855
            },
            {
              station: "DOUKROYE",
              voters: 855
            },
            {
              station: "DOUKROYE-WAH",
              voters: 855
            },
            {
              station: "GOLOMBA",
              voters: 855
            },
          ],
          "ECOLE PUBLIQUE DE HOUMI / A": [
            {
              station: "DJONGO",
              voters: 358
            },
            {
              station: "HOUMI",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE KAI-KAI / A": [
            {
              station: "DABRANG",
              voters: 907
            },
            {
              station: "DIRKENG",
              voters: 1416
            },
            {
              station: "GOLONBAI",
              voters: 907
            },
            {
              station: "HOHORE",
              voters: 1208
            },
            {
              station: "KAI-KAI",
              voters: 1208
            },
            {
              station: "SABONGARI",
              voters: 907
            },
          ],
          "ECOLE PUBLIQUE DE KAI-VELE / A": [
            {
              station: "KAI-VELE",
              voters: 217
            },
          ],
          "ECOLE PUBLIQUE DE KELEO / A": [
            {
              station: "BISGUI",
              voters: 122
            },
            {
              station: "DJOGLAINI",
              voters: 562
            },
            {
              station: "DJOWELNANDJI",
              voters: 562
            },
            {
              station: "KELEO",
              voters: 411
            },
          ],
          "ECOLE PUBLIQUE DE LOUGOYE-KAMAS / A": [
            {
              station: "LOUGOYE-KAMAS",
              voters: 255
            },
          ],
          "ECOLE PUBLIQUE DE MADALAM / A": [
            {
              station: "DJARWA",
              voters: 715
            },
            {
              station: "GUIZAN-NANDJI",
              voters: 715
            },
            {
              station: "HAROUAI",
              voters: 715
            },
            {
              station: "MADALAM",
              voters: 715
            },
            {
              station: "MAIGOU",
              voters: 715
            },
          ],
          "ECOLE PUBLIQUE DE MAGAYEL / A": [
            {
              station: "LOULOK",
              voters: 772
            },
            {
              station: "MAGAYEL",
              voters: 772
            },
            {
              station: "ZARATA",
              voters: 772
            },
          ],
          "ECOLE PUBLIQUE DE MANGA / A": [
            {
              station: "DJILEKOU",
              voters: 415
            },
            {
              station: "GADAKARAL",
              voters: 415
            },
            {
              station: "MANGA",
              voters: 415
            },
            {
              station: "MARANDJA",
              voters: 415
            },
            {
              station: "TAMPADJAM",
              voters: 415
            },
          ],
          "ECOLE PUBLIQUE DE MIHAO / A": [
            {
              station: "BOGOM",
              voters: 204
            },
            {
              station: "MIHAO",
              voters: 204
            },
          ],
          "ECOLE PUBLIQUE DE MOGOZI / A": [
            {
              station: "MOGOZI",
              voters: 311
            },
            {
              station: "MORAI",
              voters: 311
            },
            {
              station: "TAMANA",
              voters: 311
            },
            {
              station: "TAWAITA",
              voters: 311
            },
            {
              station: "WADAI",
              voters: 311
            },
          ],
          "ECOLE PUBLIQUE DE NGUENDJEL / A": [
            {
              station: "DOUBOUKASSAM",
              voters: 186
            },
            {
              station: "DOUMARSIAMNA",
              voters: 186
            },
            {
              station: "DOUVOULOUM",
              voters: 186
            },
            {
              station: "NGUENDJEL",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE DE NGUIDOUANG / A": [
            {
              station: "AGAM",
              voters: 268
            },
            {
              station: "DJOGOLO",
              voters: 268
            },
            {
              station: "MALBANG",
              voters: 268
            },
            {
              station: "NGUIDOUANG",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE DE SADAMAKOU / A": [
            {
              station: "SADAMAKOU",
              voters: 285
            },
          ],
          "ECOLE PUBLIQUE DE SILLA / A": [
            {
              station: "SILLA",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE DE SOKOMOYE / A": [
            {
              station: "NDANDALANG",
              voters: 189
            },
            {
              station: "SOKOMOYE",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE DE TARSIA / A": [
            {
              station: "DONGO",
              voters: 237
            },
            {
              station: "TARSIA",
              voters: 237
            },
          ],
          "ECOLE PUBLIQUE DE TIKALAI / A": [
            {
              station: "BALI",
              voters: 265
            },
            {
              station: "KALAK-DOR",
              voters: 265
            },
            {
              station: "TIKALAI",
              voters: 265
            },
          ],
          "ECOLE PUBLIQUE DE YANGHA / A": [
            {
              station: "DJERKENG",
              voters: 375
            },
            {
              station: "DOUAK",
              voters: 375
            },
            {
              station: "KALAO-YANGHA",
              voters: 375
            },
            {
              station: "MALAWAI",
              voters: 375
            },
            {
              station: "YANGHA",
              voters: 375
            },
          ],
          "EGLISE DE DJAFGA / A": [
            {
              station: "GALANGARIAM",
              voters: 148
            },
          ],
          "EGLISE DE GONGOLONG / A": [
            {
              station: "AGONG",
              voters: 337
            },
            {
              station: "AGONG-BALI",
              voters: 337
            },
            {
              station: "GONGOLONG",
              voters: 337
            },
          ],
          "EGLISE DE KOURBOUK / A": [
            {
              station: "KOURBOUK",
              voters: 147
            },
            {
              station: "LIHIDANG",
              voters: 147
            },
          ],
          "EGLISE DE PARIA KOUAYE / A": [
            {
              station: "PARIA",
              voters: 196
            },
            {
              station: "KOUAYE",
              voters: 196
            },
          ],
          "EGLISE FRAT. LUTHERIENNE DE MALIA / A": [
            {
              station: "ABDALAYE",
              voters: 492
            },
            {
              station: "AFAYA",
              voters: 492
            },
            {
              station: "MALIA",
              voters: 492
            },
          ],
          "EGLISE FRAT. LUTHERIENNE DE TARDAYE / A": [
            {
              station: "RAMKAKOU",
              voters: 173
            },
            {
              station: "TARDAYE",
              voters: 173
            },
          ],
          "ESPLANADE CHEF. DARAM-MBOUKTANG / A": [
            {
              station: "DARAM-MBOUKTANG",
              voters: 62
            },
          ],
          "ESPLANADE CHEF. KALAK LOUGOYE KAMAS /  A": [
            {
              station: "ADAWA",
              voters: 228
            },
            {
              station: "KALAK",
              voters: 228
            },
            {
              station: "LOUGOYE",
              voters: 651
            },
            {
              station: "KAMAS",
              voters: 228
            },
          ],
          "ESPLANADE CHEFFERIE DE BAH / A": [
            {
              station: "BAH",
              voters: 274
            },
          ],
          "ESPLANADE CHEFFERIE DE BARIA-GODJO / A": [
            {
              station: "BARIA-GODJO",
              voters: 464
            },
            {
              station: "DAMARAO",
              voters: 232
            },
            {
              station: "DJOKADAYE",
              voters: 232
            },
            {
              station: "MAISAM",
              voters: 232
            },
            {
              station: "YOUGOU",
              voters: 441
            },
          ],
          "ESPLANADE CHEFFERIE DE BEGUE-PALAM /  A": [
            {
              station: "ADIBEK",
              voters: 450
            },
            {
              station: "ARAVAI",
              voters: 666
            },
            {
              station: "BEGUE-PALAM",
              voters: 450
            },
            {
              station: "MATOUKOU",
              voters: 450
            },
          ],
          "ESPLANADE CHEFFERIE DE DIDIM / A": [
            {
              station: "DIDIM",
              voters: 96
            },
            {
              station: "MAROUGARE",
              voters: 96
            },
          ],
          "ESPLANADE CHEFFERIE DE DJOFFA / A": [
            {
              station: "DJAMBOUTOU",
              voters: 515
            },
            {
              station: "DJOFFA",
              voters: 515
            },
            {
              station: "KOTROMBEL",
              voters: 515
            },
          ],
          "ESPLANADE CHEFFERIE DE DOROMO / A": [
            {
              station: "AMAS",
              voters: 291
            },
            {
              station: "DJEGREME",
              voters: 291
            },
            {
              station: "DOMAYE",
              voters: 291
            },
            {
              station: "DOROMO",
              voters: 291
            },
            {
              station: "KOLONG",
              voters: 395
            },
            {
              station: "YOUGOU-BAR",
              voters: 291
            },
          ],
          "ESPLANADE CHEFFERIE DE GABARAIROU / A": [
            {
              station: "GABARAIROU",
              voters: 242
            },
          ],
          "ESPLANADE CHEFFERIE DE KAMASS / A": [
            {
              station: "BORNOUA",
              voters: 239
            },
            {
              station: "FOULBERE",
              voters: 239
            },
            {
              station: "TOUKOI",
              voters: 239
            },
          ],
          "ESPLANADE CHEFFERIE DE MASSOUANG / A": [
            {
              station: "DARAM",
              voters: 180
            },
            {
              station: "MASSOUANG",
              voters: 986
            },
          ],
          "ESPLANADE CHEFFERIE DE MBOUKTANG / A": [
            {
              station: "KALAO",
              voters: 383
            },
            {
              station: "MANANDJI",
              voters: 383
            },
            {
              station: "MBOUKTANG",
              voters: 383
            },
          ],
          "ESPLANADE CHEFFERIE DE MELFET / A": [
            {
              station: "DIGUILI",
              voters: 116
            },
            {
              station: "LIVIDI",
              voters: 116
            },
            {
              station: "MELFET",
              voters: 116
            },
            {
              station: "PESRENG",
              voters: 116
            },
          ],
          "ESPLANADE CHEFFERIE DE MEMIE / A": [
            {
              station: "HOUYOUKI",
              voters: 174
            },
            {
              station: "MEMIE",
              voters: 174
            },
          ],
          "ESPLANADE CHEFFERIE DE VAGANDJA / A": [
            {
              station: "GAVRA",
              voters: 515
            },
            {
              station: "HODONDE",
              voters: 515
            },
            {
              station: "VAGANDJA",
              voters: 515
            },
            {
              station: "VOUSSOUMNAKOU",
              voters: 515
            },
          ],
          "ESPLANADE CHEFFERIE DE WOURAI / A": [
            {
              station: "WOURAI",
              voters: 330
            },
          ],
          "FORAGE DE MBOUKTANG / A": [
            {
              station: "GANGAI",
              voters: 186
            },
            {
              station: "VARANG",
              voters: 186
            },
          ],
          "GARAGE DE LA SEMRY / A": [
            {
              station: "DJAFGA",
              voters: 525
            },
            {
              station: "DJINGARIAM",
              voters: 128
            },
          ],
          "LYCEE DE DJAFGA / A": [
            {
              station: "MAHAI",
              voters: 208
            },
            {
              station: "MARBA",
              voters: 208
            },
            {
              station: "MAZAOGA",
              voters: 208
            },
          ],
          "LYCEE DE DOREISSOU / A": [
            {
              station: "MOURKOUDAYE",
              voters: 218
            },
          ],
          "LYCEE DE KAI-KAI / A": [
            {
              station: "DOMAYO",
              voters: 301
            },
            {
              station: "MARCHE",
              voters: 301
            },
          ],
          "MARCHE DE DOREISSOU / A": [
            {
              station: "PALAM",
              voters: 826
            },
            {
              station: "DARAM-DOR",
              voters: 826
            },
            {
              station: "DOREISSOU",
              voters: 826
            },
            {
              station: "CENTRE",
              voters: 1936
            },
            {
              station: "KAMAS-DOR",
              voters: 826
            },
            {
              station: "VOUNBA",
              voters: 826
            },
          ],
        },
        "KALFOU": {
          "ECOLE FRANCO-ARABE DE KALFOU / A": [
            {
              station: "DIRLAIRE",
              voters: 602
            },
            {
              station: "KAIGAMARE",
              voters: 602
            },
            {
              station: "LAMORDE",
              voters: 602
            },
            {
              station: "POURIRE",
              voters: 602
            },
            {
              station: "WOURO",
              voters: 1561
            },
            {
              station: "DJAORO",
              voters: 602
            },
          ],
          "ECOLE PUBLIQUE DE BAGA / A": [
            {
              station: "BAGA",
              voters: 373
            },
            {
              station: "BEDEREO",
              voters: 373
            },
            {
              station: "DEBRE",
              voters: 373
            },
            {
              station: "KILAKI",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE BOUGAYE / A": [
            {
              station: "BOUGAYE",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE DAIBA / A": [
            {
              station: "DAIBA",
              voters: 359
            },
            {
              station: "GUEREME",
              voters: 359
            },
            {
              station: "TAMBADJAM",
              voters: 359
            },
          ],
          "ECOLE PUBLIQUE DE DANGMIGUIRI / A": [
            {
              station: "DANGMIGUIRI",
              voters: 415
            },
          ],
          "ECOLE PUBLIQUE DE DJABEWAL DJODOMA /  A": [
            {
              station: "DJODOMA",
              voters: 137
            },
          ],
          "ECOLE PUBLIQUE DE DJADA / A": [
            {
              station: "DJADA",
              voters: 323
            },
            {
              station: "DJIMETA",
              voters: 323
            },
            {
              station: "FOULAYOUGOURI",
              voters: 646
            },
          ],
          "ECOLE PUBLIQUE DE GADA KARAL / A": [
            {
              station: "GADA",
              voters: 213
            },
            {
              station: "KARAL",
              voters: 213
            },
            {
              station: "MODJOUWO",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE GUINANE / A": [
            {
              station: "GUINANE",
              voters: 323
            },
            {
              station: "HODANDE",
              voters: 323
            },
            {
              station: "MANDARA",
              voters: 323
            },
          ],
          "ECOLE PUBLIQUE DE HAMDALLAO DODJI / A": [
            {
              station: "DODJI",
              voters: 245
            },
          ],
          "ECOLE PUBLIQUE DE KALFOU / A": [
            {
              station: "GALDIMARE",
              voters: 513
            },
            {
              station: "SIRATARE",
              voters: 513
            },
            {
              station: "YANGARE",
              voters: 513
            },
          ],
          "ECOLE PUBLIQUE DE KOURO / A": [
            {
              station: "KOURO",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE DE LOKORO / A": [
            {
              station: "FANKAGUE",
              voters: 376
            },
            {
              station: "FOUTI",
              voters: 376
            },
            {
              station: "LOKORO",
              voters: 376
            },
            {
              station: "NEMBAKRI",
              voters: 376
            },
          ],
          "ECOLE PUBLIQUE DE THIOU LAWANE / A": [
            {
              station: "MANFIRWA",
              voters: 223
            },
            {
              station: "THIOU",
              voters: 223
            },
            {
              station: "LAWANE",
              voters: 223
            },
          ],
          "ECOLE PUBLIQUE DE WOURO SOUDI / A": [
            {
              station: "KARBAWO",
              voters: 438
            },
            {
              station: "LALIBOUI",
              voters: 438
            },
            {
              station: "MISKINE",
              voters: 438
            },
            {
              station: "SOUDI",
              voters: 438
            },
          ],
          "ECOLE PUBLIQUE DE ZARIA / A": [
            {
              station: "ZARIA",
              voters: 138
            },
          ],
          "ESPLANADE CHEF. DE KORO-KORO ABDOU /  A": [
            {
              station: "KORO-KORO",
              voters: 264
            },
            {
              station: "ABDOU",
              voters: 138
            },
          ],
          "ESPLANADE CHEF. DE KORO-KORO ADAMA /  A": [
            {
              station: "BAIGARI",
              voters: 126
            },
            {
              station: "ADAMA",
              voters: 126
            },
          ],
          "ESPLANADE CHEF. WOURO MAL SAMBO / A": [
            {
              station: "TCHOURA",
              voters: 272
            },
            {
              station: "MAL",
              voters: 272
            },
            {
              station: "SAMBO",
              voters: 272
            },
          ],
          "ESPLANADE CHEFFERIE DE DARDJAWO / A": [
            {
              station: "BIBEMIRE",
              voters: 261
            },
            {
              station: "DARDJAWO",
              voters: 261
            },
            {
              station: "KOUROUM",
              voters: 261
            },
          ],
          "ESPLANADE CHEFFERIE DE DINAO / A": [
            {
              station: "DINAO",
              voters: 216
            },
          ],
          "ESPLANADE CHEFFERIE DE DJABEWAL  BELLO / A": [
            {
              station: "DAMPOUNDOU",
              voters: 350
            },
            {
              station: "DJABEWAL",
              voters: 487
            },
            {
              station: "BELLO",
              voters: 350
            },
            {
              station: "DJIBAIGUE",
              voters: 350
            },
            {
              station: "MOURAISSOU",
              voters: 350
            },
          ],
          "ESPLANADE CHEFFERIE DE DJABTOWO / A": [
            {
              station: "DJABTOWO",
              voters: 449
            },
            {
              station: "GOTTADIO",
              voters: 898
            },
            {
              station: "BOUBA",
              voters: 449
            },
            {
              station: "NDAOURA",
              voters: 449
            },
          ],
          "ESPLANADE CHEFFERIE DE DJOYEWO / A": [
            {
              station: "BOUGAYEL",
              voters: 157
            },
            {
              station: "KARI",
              voters: 157
            },
            {
              station: "DJOYEWO",
              voters: 157
            },
          ],
          "ESPLANADE CHEFFERIE DE GAOURANG / A": [
            {
              station: "GAOURANG",
              voters: 177
            },
          ],
          "ESPLANADE CHEFFERIE DE GOBIO / A": [
            {
              station: "DJORGUEL",
              voters: 362
            },
            {
              station: "GOBIO",
              voters: 362
            },
            {
              station: "WANSAKI",
              voters: 362
            },
          ],
          "ESPLANADE CHEFFERIE DE GOLOPO / A": [
            {
              station: "DANGMAI",
              voters: 544
            },
            {
              station: "GANDOU",
              voters: 221
            },
            {
              station: "GOLOPO",
              voters: 221
            },
            {
              station: "GOLOPO-TOUPOURI",
              voters: 221
            },
          ],
          "ESPLANADE CHEFFERIE DE GOULMOUNE / A": [
            {
              station: "BARWETA",
              voters: 226
            },
            {
              station: "GOLOMBEZOUE",
              voters: 226
            },
            {
              station: "GOULMOUNE",
              voters: 226
            },
            {
              station: "NEGUEM",
              voters: 226
            },
          ],
          "ESPLANADE CHEFFERIE DE GOULOURGOU /  A": [
            {
              station: "KIWA",
              voters: 235
            },
            {
              station: "TOSSO",
              voters: 235
            },
          ],
          "ESPLANADE CHEFFERIE DE KANAM THIOU / A": [
            {
              station: "DJAKRA",
              voters: 409
            },
            {
              station: "KANAM",
              voters: 409
            },
            {
              station: "KRONGSIBE",
              voters: 409
            },
          ],
          "ESPLANADE CHEFFERIE DE KAOULA / A": [
            {
              station: "KAOULA",
              voters: 170
            },
          ],
          "ESPLANADE CHEFFERIE DE KESSOUWO / A": [
            {
              station: "DJOUBAWO",
              voters: 183
            },
            {
              station: "KESSOUWO",
              voters: 183
            },
          ],
          "ESPLANADE CHEFFERIE DE LOUGGOL BAGA  /A": [
            {
              station: "KIDWE",
              voters: 328
            },
            {
              station: "LOUGGOL",
              voters: 328
            },
            {
              station: "HAOUSSA",
              voters: 328
            },
            {
              station: "NGASSO",
              voters: 328
            },
            {
              station: "PALI",
              voters: 328
            },
          ],
          "ESPLANADE CHEFFERIE DE NGAOUNDEREO /  A": [
            {
              station: "NGAOUNDEREO",
              voters: 251
            },
            {
              station: "TOUMBAO",
              voters: 251
            },
          ],
          "MAGASIN SODECOTON DE HAMDALLAO  ARDO / A": [
            {
              station: "HAMDALLAO",
              voters: 432
            },
            {
              station: "ARDO",
              voters: 187
            },
          ],
          "MAGASIN SODECOTON DE TCHANGALEO / A": [
            {
              station: "BIBEMI",
              voters: 137
            },
            {
              station: "TCHANGALEO",
              voters: 137
            },
          ],
          "PLACE DU MARCHE DE GAROUEL / A": [
            {
              station: "GAROUEL",
              voters: 249
            },
            {
              station: "SOUFTEREO",
              voters: 249
            },
            {
              station: "HAKO",
              voters: 249
            },
          ],
          "PLACE DU MARCHE DE GUIBERA / A": [
            {
              station: "BLEMTCHEME",
              voters: 278
            },
            {
              station: "DELTA",
              voters: 278
            },
            {
              station: "HOUNAYE",
              voters: 278
            },
          ],
        },
        "KAR-HAY": {
          "CENTRE DE SANTE INTEGRE DE AGOURDA /  A": [
            {
              station: "AGOURDA",
              voters: 746
            },
            {
              station: "DOUKOULA-MARCHE",
              voters: 1874
            },
            {
              station: "TIGOUMGOUM",
              voters: 746
            },
          ],
          "COMITE DE VIGILANCE DE DOUKOULA / A": [
            {
              station: "DJONDONG-ECOLE",
              voters: 1387
            },
            {
              station: "DJONDONG-WANG",
              voters: 957
            },
          ],
          "ECOLE PUBLIQUE DE BALANE / A": [
            {
              station: "BALANE",
              voters: 211
            },
          ],
          "ECOLE PUBLIQUE DE BALDA / A": [
            {
              station: "BALDA",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE DE BOUBAYE / A": [
            {
              station: "BOUBAYE",
              voters: 305
            },
          ],
          "ECOLE PUBLIQUE DE BOUZAR / A": [
            {
              station: "BOUZAR",
              voters: 602
            },
          ],
          "ECOLE PUBLIQUE DE DABOU / A": [
            {
              station: "DABOU",
              voters: 302
            },
          ],
          "ECOLE PUBLIQUE DE DADJAMKA / A": [
            {
              station: "DADJAMKA",
              voters: 811
            },
          ],
          "ECOLE PUBLIQUE DE DAMDAMA / A": [
            {
              station: "DAMDAMA",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE DIMGUILI / A": [
            {
              station: "DIMGUILI",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE DE DOLGAI / A": [
            {
              station: "DOLGAI",
              voters: 275
            },
          ],
          "ECOLE PUBLIQUE DE GAMLOUM / A": [
            {
              station: "GAMLOUM",
              voters: 485
            },
          ],
          "ECOLE PUBLIQUE DE GOLONGARI / A": [
            {
              station: "GOLONGARI",
              voters: 325
            },
          ],
          "ECOLE PUBLIQUE DE GOLONTIKOGUE / A": [
            {
              station: "GOLONTIKOGUE",
              voters: 139
            },
          ],
          "ECOLE PUBLIQUE DE GOULOULOU / A": [
            {
              station: "GOULOULOU",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE DE GUERME / A": [
            {
              station: "GUERME",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE DE GUIDINDING / A": [
            {
              station: "GUIDINDING",
              voters: 644
            },
          ],
          "ECOLE PUBLIQUE DE GUISSIA / A": [
            {
              station: "GUISSIA",
              voters: 669
            },
          ],
          "ECOLE PUBLIQUE DE HOULA / A": [
            {
              station: "HOULA",
              voters: 354
            },
          ],
          "ECOLE PUBLIQUE DE KAYA / A": [
            {
              station: "KAYA",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE DE MBIDERE / A": [
            {
              station: "MBASSAM",
              voters: 465
            },
            {
              station: "MBIDERE",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE DE NDUE / A": [
            {
              station: "MONGOLONG",
              voters: 317
            },
            {
              station: "NDUE",
              voters: 317
            },
          ],
          "ECOLE PUBLIQUE DE OULARGO / A": [
            {
              station: "OULARGO",
              voters: 526
            },
          ],
          "ECOLE PUBLIQUE DE SIRLAWE / A": [
            {
              station: "GAMRAI",
              voters: 1644
            },
            {
              station: "SIRLAWE",
              voters: 910
            },
          ],
          "ECOLE PUBLIQUE DE TAKREO / A": [
            {
              station: "TAKREO",
              voters: 454
            },
          ],
          "ECOLE PUBLIQUE DE TOUKSOU / A": [
            {
              station: "TOUKSOU",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DE TOUNGOUI / A": [
            {
              station: "TOUNGOUI",
              voters: 203
            },
          ],
          "ECOLE PUBLIQUE DE WALIA / A": [
            {
              station: "WALIA",
              voters: 382
            },
          ],
          "ECOLE PUBLIQUE DE WERFEO / A": [
            {
              station: "WERFEO",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE YOLDEO / A": [
            {
              station: "YOLDEO",
              voters: 353
            },
          ],
          "ECOLE PUBLIQUE MOGOM / A": [
            {
              station: "MOGOM",
              voters: 795
            },
          ],
          "EP DE BOUGOUDOUM / A": [
            {
              station: "BOUGOUDOUM",
              voters: 204
            },
            {
              station: "MATOURWA",
              voters: 204
            },
            {
              station: "OURO",
              voters: 204
            },
            {
              station: "DEBBO",
              voters: 204
            },
          ],
          "EP DE FOULAYE / A": [
            {
              station: "DOUFALGUE",
              voters: 178
            },
            {
              station: "FOULAYE",
              voters: 178
            },
          ],
          "EP DE SADDIELE / A": [
            {
              station: "GORTIGUIRI",
              voters: 222
            },
            {
              station: "SADDIELE",
              voters: 222
            },
            {
              station: "SORGANOU",
              voters: 222
            },
          ],
          "MAGASIN SODECOTON DE BARGUING / A": [
            {
              station: "BAKDAI",
              voters: 369
            },
            {
              station: "BARGUING",
              voters: 369
            },
          ],
          "MAIRIE DE DOUKOULA / A": [
            {
              station: "CAMP",
              voters: 1522
            },
            {
              station: "ADMINISTRATIF",
              voters: 761
            },
            {
              station: "FONCTIONNAIRE",
              voters: 761
            },
            {
              station: "DJAOLANE",
              voters: 761
            },
            {
              station: "DOUAYA",
              voters: 761
            },
            {
              station: "TCHABTCHABA",
              voters: 761
            },
          ],
          "MAISON DE LA FEMME DE DOUKOULA / A": [
            {
              station: "CASABLANCA",
              voters: 824
            },
            {
              station: "DJENGRENG",
              voters: 824
            },
            {
              station: "GOLONTCHAI",
              voters: 1558
            },
          ],
        },
        "MAGA": {
          "ANCIEN MARCHE DE BOKO POUSS / A": [
            {
              station: "HOLYO",
              voters: 389
            },
          ],
          "CARREFOUR DE MEMERE / A": [
            {
              station: "MEMERE",
              voters: 1413
            },
          ],
          "CARREFOUR PATCHA DE SIRATARE / A": [
            {
              station: "SIRATARE",
              voters: 383
            },
          ],
          "CARREFOUR ZINATA / A": [
            {
              station: "ZINATA",
              voters: 242
            },
          ],
          "CASE EN OBUS DE MOURLA-HAH / A": [
            {
              station: "MOURLA-HAH",
              voters: 291
            },
          ],
          "DELEGATION D'ARROND. DU MINJEC / A": [
            {
              station: "MADAGASCAR",
              voters: 426
            },
            {
              station: "SEMRY",
              voters: 426
            },
          ],
          "ECOLE DES PARENTS DE PINFOUNG / A": [
            {
              station: "PINFOUNG",
              voters: 198
            },
            {
              station: "WAHA",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE DE ARGAZAMA / A": [
            {
              station: "ARGAZAMA",
              voters: 652
            },
            {
              station: "KAI-KAI",
              voters: 1030
            },
          ],
          "ECOLE PUBLIQUE DE BAGUIRMI / A": [
            {
              station: "BAGIRMI",
              voters: 92
            },
          ],
          "ECOLE PUBLIQUE DE BANGAL / A": [
            {
              station: "BANGAL",
              voters: 122
            },
          ],
          "ECOLE PUBLIQUE DE BARABAYE / A": [
            {
              station: "BARABAYE",
              voters: 556
            },
          ],
          "ECOLE PUBLIQUE DE BARI-HOHO / A": [
            {
              station: "BARI-HOHO",
              voters: 361
            },
            {
              station: "VAYAYE",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE DE DARAM POUSS / A": [
            {
              station: "DARAM-POUSS",
              voters: 364
            },
          ],
          "ECOLE PUBLIQUE DE DAWAYA / A": [
            {
              station: "DAWAYA",
              voters: 206
            },
            {
              station: "TALAYE",
              voters: 206
            },
            {
              station: "VRICK",
              voters: 206
            },
          ],
          "ECOLE PUBLIQUE DE DIGA / A": [
            {
              station: "DIGA",
              voters: 158
            },
          ],
          "ECOLE PUBLIQUE DE EHEING / A": [
            {
              station: "EHEING",
              voters: 570
            },
            {
              station: "MANGA",
              voters: 570
            },
            {
              station: "ZOULAYE",
              voters: 570
            },
          ],
          "ECOLE PUBLIQUE DE GADJIAM / A": [
            {
              station: "GADJIAM",
              voters: 158
            },
          ],
          "ECOLE PUBLIQUE DE GAYA-SUD / A": [
            {
              station: "WAYA",
              voters: 234
            },
            {
              station: "WAYACK",
              voters: 234
            },
          ],
          "ECOLE PUBLIQUE DE GOUNGHI / A": [
            {
              station: "GOUNGHI",
              voters: 441
            },
          ],
          "ECOLE PUBLIQUE DE GUEDWENG / A": [
            {
              station: "GUEDWENG",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE DE LAWAYA / A": [
            {
              station: "GOBO",
              voters: 648
            },
            {
              station: "LAWAYA",
              voters: 500
            },
          ],
          "ECOLE PUBLIQUE DE LOUVOUNG / A": [
            {
              station: "LOUVOUNG",
              voters: 258
            },
          ],
          "ECOLE PUBLIQUE DE MADIOGO / A": [
            {
              station: "MADIOGO",
              voters: 787
            },
            {
              station: "ZEMERE",
              voters: 562
            },
          ],
          "ECOLE PUBLIQUE DE MALIA / A": [
            {
              station: "MALIA",
              voters: 92
            },
            {
              station: "MASSA",
              voters: 172
            },
          ],
          "ECOLE PUBLIQUE DE MAOUDA / A": [
            {
              station: "GALANG",
              voters: 336
            },
            {
              station: "MAOUDA",
              voters: 336
            },
          ],
          "ECOLE PUBLIQUE DE MARIAVA / A": [
            {
              station: "MARIAVA",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE DE MASSA / A": [
            {
              station: "MASTAFARI",
              voters: 207
            },
          ],
          "ECOLE PUBLIQUE DE NOUHOYE / A": [
            {
              station: "KOUNKOUMA",
              voters: 327
            },
            {
              station: "NOUHOYE",
              voters: 327
            },
          ],
          "ECOLE PUBLIQUE DE PATAKAYE / A": [
            {
              station: "PATAKAYE",
              voters: 127
            },
            {
              station: "TAPADAYE",
              voters: 563
            },
          ],
          "ECOLE PUBLIQUE DE POUKOUM / A": [
            {
              station: "POUKOUM",
              voters: 288
            },
          ],
          "ECOLE PUBLIQUE DE SIMATOU / A": [
            {
              station: "SIMATOU-TOUPOURI",
              voters: 590
            },
          ],
          "ECOLE PUBLIQUE DE SIRLAWE / A": [
            {
              station: "SIRLAWE",
              voters: 311
            },
          ],
          "ECOLE PUBLIQUE DE TAKAYE / A": [
            {
              station: "TAKAYE",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE DE TARAM / A": [
            {
              station: "TARAM",
              voters: 187
            },
          ],
          "ECOLE PUBLIQUE DE TEKELE / A": [
            {
              station: "TEKELE",
              voters: 524
            },
          ],
          "ECOLE PUBLIQUE DE WOUDAWOUDA / A": [
            {
              station: "WOUDAWOUDA",
              voters: 876
            },
          ],
          "ECOLE PUBLIQUE DE ZIAM / A": [
            {
              station: "TOUPOURI",
              voters: 527
            },
          ],
          "ECOLE PUBLIQUE DE ZIAM II / A": [
            {
              station: "ZIAM",
              voters: 1410
            },
          ],
          "ECOLE PUBLIQUE DE ZIAM III / A": [
            {
              station: "III",
              voters: 225
            },
          ],
          "EGLISE DE DOUGUI-MAGA / A": [
            {
              station: "DOUGUI-MAGA",
              voters: 419
            },
          ],
          "EGLISE FLC DE MAGA / A": [
            {
              station: "MADALAM",
              voters: 1779
            },
          ],
          "ESPLANADE CHEF. BALLA-MOUSGOUM / A": [
            {
              station: "BOKO",
              voters: 1962
            },
            {
              station: "POUSS",
              voters: 3326
            },
            {
              station: "LAC",
              voters: 2070
            },
            {
              station: "DANDALANG",
              voters: 1674
            },
            {
              station: "MAGA",
              voters: 5199
            },
            {
              station: "CENTRE",
              voters: 2661
            },
            {
              station: "MALKA",
              voters: 1821
            },
            {
              station: "MOULVOUAYE",
              voters: 631
            },
            {
              station: "PIDITOKOYE",
              voters: 883
            },
          ],
          "ESPLANADE CHEF. BLAMATOKO ARABE / A": [
            {
              station: "BLAMATOKO",
              voters: 1040
            },
            {
              station: "ARABE",
              voters: 684
            },
            {
              station: "MOUSGOUM",
              voters: 1286
            },
          ],
          "ESPLANADE CHEF. BLAMATOKO FOULBE / A": [
            {
              station: "FOULBE",
              voters: 431
            },
            {
              station: "DOUNDERE",
              voters: 128
            },
          ],
          "ESPLANADE CHEF. KALAO NGOULMOUNG / A": [
            {
              station: "KALAO",
              voters: 693
            },
          ],
          "ESPLANADE CHEFFERIE DE ALVAKAYE / A": [
            {
              station: "SOKOLAYE-ALAVAKAYE",
              voters: 182
            },
            {
              station: "WOUDI",
              voters: 439
            },
          ],
          "ESPLANADE CHEFFERIE DE BLAH I MOURLA /  A": [
            {
              station: "MOURLA",
              voters: 86
            },
          ],
          "ESPLANADE CHEFFERIE DE BOURMI POUSS /  A": [
            {
              station: "DOMO",
              voters: 404
            },
          ],
          "ESPLANADE CHEFFERIE DE COMMERCIAL / A": [
            {
              station: "COMMERCIAL",
              voters: 1029
            },
          ],
          "ESPLANADE CHEFFERIE DE GAMAK / A": [
            {
              station: "GAMAK",
              voters: 235
            },
          ],
          "ESPLANADE CHEFFERIE DE GAYA-NORD / A": [
            {
              station: "GAYA-NORD",
              voters: 314
            },
            {
              station: "GAYA-SUD",
              voters: 548
            },
          ],
          "ESPLANADE CHEFFERIE DE GOUVRAYE / A": [
            {
              station: "GOUVRAYE",
              voters: 438
            },
          ],
          "ESPLANADE CHEFFERIE DE GOZOM / A": [
            {
              station: "GOZOM",
              voters: 224
            },
          ],
          "ESPLANADE CHEFFERIE DE KAYAM / A": [
            {
              station: "KAYAM",
              voters: 144
            },
          ],
          "ESPLANADE CHEFFERIE DE MAGA CENTRE /  A": [
            {
              station: "PAY-VELE",
              voters: 1001
            },
          ],
          "ESPLANADE CHEFFERIE DE MALIA-MASSA / A": [
            {
              station: "MALIA-MASSA",
              voters: 595
            },
          ],
          "ESPLANADE CHEFFERIE DE MANAWATCHI / A": [
            {
              station: "MANAWATCHI",
              voters: 438
            },
          ],
          "ESPLANADE CHEFFERIE DE PIDIMIER / A": [
            {
              station: "PIDIMIER",
              voters: 64
            },
          ],
          "ESPLANADE CHEFFERIE DE SOKOLOYE / A": [
            {
              station: "SOKOLAYE",
              voters: 384
            },
          ],
          "ESPLANADE CHEFFERIE MEREOU MEMERE /  A": [
            {
              station: "BADAI",
              voters: 99
            },
            {
              station: "MEREOU",
              voters: 99
            },
            {
              station: "HIRGUE",
              voters: 99
            },
          ],
          "ESPLANADE CHEFFERIE MIHIRIA / A": [
            {
              station: "MIHIRIA",
              voters: 182
            },
          ],
          "ESPLANADE CHEFFERIE MILIAOU / A": [
            {
              station: "MILIAOU",
              voters: 416
            },
          ],
          "FORAGE DE BALLA-MASSA / A": [
            {
              station: "BALLA-MASSA",
              voters: 451
            },
            {
              station: "BALLA-MOUSGOUM",
              voters: 1082
            },
            {
              station: "BLAH",
              voters: 782
            },
            {
              station: "NORD",
              voters: 2619
            },
          ],
          "FORAGE DE HOUDI / A": [
            {
              station: "GRAH",
              voters: 87
            },
            {
              station: "HOUDI",
              voters: 87
            },
          ],
          "FORAGE DE LAMARY / A": [
            {
              station: "LAMARY",
              voters: 228
            },
          ],
          "GRANDE MOSQUEE DE GUIRVIDIG / A": [
            {
              station: "ALARBARE",
              voters: 653
            },
            {
              station: "GUIRVIDIG",
              voters: 653
            },
            {
              station: "GUIZI",
              voters: 828
            },
          ],
          "GRANDE MOSQUEE DE MAGA / A": [
            {
              station: "ABOLOGOIDI",
              voters: 502
            },
            {
              station: "BOURMI",
              voters: 1941
            },
            {
              station: "GAYA",
              voters: 502
            },
            {
              station: "MOUHOUNA",
              voters: 502
            },
          ],
          "LYCEE CLASSIQUE DE PALIA / A": [
            {
              station: "PALIA",
              voters: 313
            },
          ],
          "MAGASIN CREDIT DU SAHEL DE DOUAK / A": [
            {
              station: "DOUACK",
              voters: 153
            },
            {
              station: "MAHABOUSS",
              voters: 314
            },
            {
              station: "MAHAOUROU",
              voters: 453
            },
            {
              station: "YANGAH",
              voters: 661
            },
          ],
          "MARCHE DE BARIA-GODJO / A": [
            {
              station: "BARIA-GODJO",
              voters: 376
            },
            {
              station: "MEWI",
              voters: 376
            },
          ],
          "MOSQUE DE MAHAOUROU / A": [
            {
              station: "MOURBOUNA",
              voters: 300
            },
            {
              station: "OURA",
              voters: 300
            },
          ],
          "MOSQUEE DE ALTINERE / A": [
            {
              station: "ALTINERE",
              voters: 212
            },
            {
              station: "ALVAKAYE",
              voters: 576
            },
          ],
          "MOSQUEE DE BANANARE / A": [
            {
              station: "BANANARE",
              voters: 409
            },
          ],
          "MOSQUEE DE BLAH SUD / A": [
            {
              station: "SUD",
              voters: 192
            },
            {
              station: "GRONG",
              voters: 352
            },
            {
              station: "VARAYE",
              voters: 192
            },
          ],
          "MOSQUEE DE CANAL DOUGUI / A": [
            {
              station: "CANAL-DOUGUI",
              voters: 553
            },
            {
              station: "GALA",
              voters: 553
            },
          ],
          "MOSQUEE DE DANDALANG POUSS / A": [
            {
              station: "HOULOUMI",
              voters: 269
            },
          ],
          "MOSQUEE DE DING POUSS / A": [
            {
              station: "DING",
              voters: 435
            },
            {
              station: "GUELIM",
              voters: 435
            },
            {
              station: "MAMADI",
              voters: 435
            },
          ],
          "MOSQUEE DE FARAHOULOU / A": [
            {
              station: "ASSENG",
              voters: 287
            },
            {
              station: "FARAHOULOU",
              voters: 418
            },
            {
              station: "GOGOM",
              voters: 287
            },
            {
              station: "GOUROUKI",
              voters: 287
            },
          ],
          "MOSQUEE DE FOULBERE / A": [
            {
              station: "FOULBERE",
              voters: 301
            },
            {
              station: "MANACHE",
              voters: 301
            },
          ],
          "MOSQUEE DE GASBALLA / A": [
            {
              station: "GASBALLA",
              voters: 222
            },
          ],
          "MOSQUEE DE GOLABAYE / A": [
            {
              station: "GOLABAYE",
              voters: 465
            },
          ],
          "MOSQUEE DE GOROMO / A": [
            {
              station: "GOROMO",
              voters: 252
            },
          ],
          "MOSQUEE DE GOUDOGOYE / A": [
            {
              station: "GOUDOGOYE",
              voters: 586
            },
            {
              station: "MAKDAKA",
              voters: 586
            },
          ],
          "MOSQUEE DE GRONG-POUSS / A": [
            {
              station: "GRONG-POUSS",
              voters: 160
            },
          ],
          "MOSQUEE DE GUIZI / A": [
            {
              station: "KALANG",
              voters: 175
            },
          ],
          "MOSQUEE DE KATMAYA / A": [
            {
              station: "KATMAYA",
              voters: 150
            },
          ],
          "MOSQUEE DE KELEO / A": [
            {
              station: "DOULANG",
              voters: 569
            },
            {
              station: "KELEO",
              voters: 569
            },
            {
              station: "MOUGOU",
              voters: 569
            },
            {
              station: "ZINGA",
              voters: 569
            },
          ],
          "MOSQUEE DE KOTOKO-MAGA / A": [
            {
              station: "GUIDIBA",
              voters: 409
            },
            {
              station: "KOTOKO-MAGA",
              voters: 409
            },
            {
              station: "KOUAYE",
              voters: 1212
            },
            {
              station: "NGOULMOUNG",
              voters: 713
            },
          ],
          "MOSQUEE DE LAMORDE / A": [
            {
              station: "LAMORDE",
              voters: 227
            },
          ],
          "MOSQUEE DE MELEME / A": [
            {
              station: "MELEME",
              voters: 199
            },
            {
              station: "SIAOU",
              voters: 199
            },
          ],
          "MOSQUEE DE SABONGARI / A": [
            {
              station: "SABONGARI",
              voters: 58
            },
          ],
          "MOSQUEE DE VARAYE-POUSS / A": [
            {
              station: "VARAYE-POUSS",
              voters: 206
            },
          ],
          "MOSQUEE DE WOURO-TCHEKE / A": [
            {
              station: "WOURO-TCHEDE",
              voters: 243
            },
          ],
          "PUITS A CIEL OUVERT DE GAGRAYE / A": [
            {
              station: "GAGRAYE",
              voters: 456
            },
            {
              station: "HABOU",
              voters: 456
            },
          ],
          "RIZERIE DE FALAYE POUSS / A": [
            {
              station: "BAGASSARE",
              voters: 257
            },
            {
              station: "FALAYE",
              voters: 257
            },
          ],
        },
        "TCHATIBALI": {
          "CES DE SAOURINGWA / A": [
            {
              station: "MBANGMBARHAING-SAOURINGWA",
              voters: 212
            },
          ],
          "COLLEGE D'ENS. SECONDAIRE DE KADA'A / A": [
            {
              station: "YONDIKI",
              voters: 173
            },
          ],
          "ECOLE PUBLIQUE DE BAIGA / A": [
            {
              station: "BAIGA",
              voters: 366
            },
            {
              station: "MBITCHARE",
              voters: 366
            },
          ],
          "ECOLE PUBLIQUE DE BINDIRIEL / A": [
            {
              station: "BINDIRIEL",
              voters: 593
            },
            {
              station: "FLAING",
              voters: 593
            },
          ],
          "ECOLE PUBLIQUE DE DANGBA / A": [
            {
              station: "DANGBA",
              voters: 256
            },
          ],
          "ECOLE PUBLIQUE DE DANGLAO / A": [
            {
              station: "DANGLAO",
              voters: 401
            },
          ],
          "ECOLE PUBLIQUE DE DOUAYE / A": [
            {
              station: "DOUAYE",
              voters: 523
            },
            {
              station: "GANE-YONDIKI",
              voters: 523
            },
          ],
          "ECOLE PUBLIQUE DE DOUDOULA / A": [
            {
              station: "DOUDOULA",
              voters: 614
            },
          ],
          "ECOLE PUBLIQUE DE DOUSGOUM / A": [
            {
              station: "DOUSGOUM",
              voters: 1022
            },
            {
              station: "FRONTIERE",
              voters: 511
            },
            {
              station: "SAOMAHALANG",
              voters: 511
            },
            {
              station: "WERPORE",
              voters: 511
            },
          ],
          "ECOLE PUBLIQUE DE GANE / A": [
            {
              station: "GANE",
              voters: 351
            },
          ],
          "ECOLE PUBLIQUE DE GOUA / A": [
            {
              station: "BOURI",
              voters: 239
            },
            {
              station: "MANENBAGUE",
              voters: 239
            },
          ],
          "ECOLE PUBLIQUE DE GOUARE / A": [
            {
              station: "GOUARE",
              voters: 246
            },
          ],
          "ECOLE PUBLIQUE DE GOUNA / A": [
            {
              station: "GOUNA",
              voters: 357
            },
          ],
          "ECOLE PUBLIQUE DE HOLING / A": [
            {
              station: "HOLING",
              voters: 222
            },
          ],
          "ECOLE PUBLIQUE DE KADA'A / A": [
            {
              station: "KADA'A",
              voters: 501
            },
          ],
          "ECOLE PUBLIQUE DE KAMA / A": [
            {
              station: "KAMA",
              voters: 401
            },
            {
              station: "PEFE",
              voters: 401
            },
          ],
          "ECOLE PUBLIQUE DE KOPIRDA / A": [
            {
              station: "KOPIRDA",
              voters: 349
            },
          ],
          "ECOLE PUBLIQUE DE MANDIKERLEGUE / A": [
            {
              station: "MANDIKERLEGUE",
              voters: 393
            },
            {
              station: "TROGUE",
              voters: 393
            },
          ],
          "ECOLE PUBLIQUE DE MANDJAKMA / A": [
            {
              station: "GOULOUM",
              voters: 704
            },
            {
              station: "MANDJAKMA",
              voters: 704
            },
            {
              station: "MBANGASSOURA",
              voters: 704
            },
            {
              station: "MBANTABAI",
              voters: 704
            },
            {
              station: "MOMBAROUA",
              voters: 704
            },
            {
              station: "TOUPOUI",
              voters: 704
            },
          ],
          "ECOLE PUBLIQUE DE MBIHOORE / A": [
            {
              station: "DJAOLANE-TILIGA",
              voters: 329
            },
            {
              station: "SADJANKBE-MALE",
              voters: 329
            },
          ],
          "ECOLE PUBLIQUE DE SAOURINGWA / A": [
            {
              station: "SAOURINGWA",
              voters: 610
            },
          ],
          "ECOLE PUBLIQUE DE TCHAFFOUNTCHING / A": [
            {
              station: "TCHAFFOUNTCHING",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE DE WERFEO / A": [
            {
              station: "MANHOUNOUGA",
              voters: 705
            },
            {
              station: "MBANGMBARHAING",
              voters: 705
            },
            {
              station: "PALI",
              voters: 705
            },
            {
              station: "WERFEO",
              voters: 705
            },
            {
              station: "WERGOULOULOU",
              voters: 705
            },
          ],
          "ECOLE PUBLIQUE DE WIBIWA / A": [
            {
              station: "BALANE",
              voters: 522
            },
            {
              station: "MBILSOUE",
              voters: 1227
            },
            {
              station: "WIBIWA",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE DE YAKWANG / A": [
            {
              station: "KABI",
              voters: 280
            },
            {
              station: "RAI",
              voters: 280
            },
            {
              station: "YAKWANG",
              voters: 280
            },
          ],
          "ECOLE PUBLIQUE DE YAOUAYE / A": [
            {
              station: "GUITARE",
              voters: 187
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE TCHATIBALI /  A": [
            {
              station: "BAFOUSSAM",
              voters: 789
            },
            {
              station: "DAOUYA",
              voters: 789
            },
            {
              station: "KANE",
              voters: 789
            },
            {
              station: "KAOLARE",
              voters: 789
            },
            {
              station: "LERE",
              voters: 789
            },
            {
              station: "MBALE",
              voters: 789
            },
            {
              station: "KOING",
              voters: 789
            },
            {
              station: "TILALE",
              voters: 789
            },
          ],
          "ECOLE PUBLIQUE GROUPE II DE TCHATIBALI  /A": [
            {
              station: "TCHATIBALI",
              voters: 495
            },
          ],
          "ESPLANADE CHEFFERIE DE GOUA / A": [
            {
              station: "GOUA",
              voters: 965
            },
            {
              station: "CENTRE",
              voters: 2544
            },
          ],
          "LYCEE BILINGUE DE TCHATIBALI / A": [
            {
              station: "CAMP",
              voters: 399
            },
            {
              station: "SODECOTON",
              voters: 399
            },
            {
              station: "KOKRA",
              voters: 399
            },
            {
              station: "MOGOM",
              voters: 399
            },
          ],
          "LYCEE DE TCHATIBALI / A": [
            {
              station: "LAWANG",
              voters: 491
            },
          ],
          "LYCEE TECHNIQUE DE TCHATIBALI / A": [
            {
              station: "BIHORE",
              voters: 294
            },
            {
              station: "GOFGO",
              voters: 294
            },
            {
              station: "SADJAKBE-CENTRE",
              voters: 294
            },
          ],
          "MAGASIN SODECOTON Y. MBOGUE CENTRE /  A": [
            {
              station: "YOUAYE",
              voters: 364
            },
            {
              station: "MBOGUE",
              voters: 364
            },
            {
              station: "YOUAYE-TOUPOUI",
              voters: 40
            },
          ],
          "MARCHE DE DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 130
            },
          ],
          "MARCHE DE DJAOLANE / A": [
            {
              station: "DJAOLANE",
              voters: 290
            },
            {
              station: "MBANBARHAING",
              voters: 781
            },
          ],
          "MARCHE DE KALFOU / A": [
            {
              station: "FOULGON",
              voters: 191
            },
            {
              station: "KALFOU",
              voters: 191
            },
          ],
        },
        "WINA": {
          "CARREFOUR MISSION CATH. DE VIRI / A": [
            {
              station: "MAHAOUDA",
              voters: 215
            },
          ],
          "CARREFOUR PETIT TERRAIN DE GUIRIOU / A": [
            {
              station: "GUIRIOU",
              voters: 181
            },
          ],
          "CETIC DE DJONGDONG / A": [
            {
              station: "YAOUGA",
              voters: 103
            },
          ],
          "CMPJ DE DJONGDONG / A": [
            {
              station: "GAMBOUR",
              voters: 312
            },
          ],
          "CZCSV DE HOUGNO / A": [
            {
              station: "GOLONG-DJIRE",
              voters: 278
            },
          ],
          "ECOLE PUBLIQUE BILINGUE DE WAIMOU / A": [
            {
              station: "BLADA",
              voters: 307
            },
            {
              station: "WAIMOU",
              voters: 307
            },
          ],
          "ECOLE PUBLIQUE DE BIGDI / A": [
            {
              station: "BIGDI",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE DE BOSGOYE / A": [
            {
              station: "BOSGOYE",
              voters: 480
            },
          ],
          "ECOLE PUBLIQUE DE DARAM-BILAI / A": [
            {
              station: "DARAM-BILAI",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE DARAM-TAIWE / A": [
            {
              station: "DARAM-KARMAYE",
              voters: 168
            },
            {
              station: "NINRING",
              voters: 168
            },
          ],
          "ECOLE PUBLIQUE DE DJANGA / A": [
            {
              station: "DJANGA",
              voters: 238
            },
          ],
          "ECOLE PUBLIQUE DE DJAWAR / A": [
            {
              station: "DJAWAR",
              voters: 254
            },
          ],
          "ECOLE PUBLIQUE DE DJENGRENG / A": [
            {
              station: "DJENRENG",
              voters: 522
            },
            {
              station: "HAPTA",
              voters: 522
            },
            {
              station: "TONGOYE",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE DE DJONGDONG / A": [
            {
              station: "CENTRE",
              voters: 372
            },
            {
              station: "ADMINISTRATIF",
              voters: 372
            },
            {
              station: "DJONGDONG",
              voters: 372
            },
            {
              station: "SIFOULTA",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE DOUFFAYA / A": [
            {
              station: "DOUFFAYA",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE DE GOULOURGOU / A": [
            {
              station: "GOULOURGOU",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE DE GUIDOUA / A": [
            {
              station: "GUIDOUA",
              voters: 240
            },
          ],
          "ECOLE PUBLIQUE DE HOUGNO / A": [
            {
              station: "BARWAI",
              voters: 606
            },
            {
              station: "BENBERENG",
              voters: 606
            },
            {
              station: "BIHORE",
              voters: 606
            },
            {
              station: "FOULAYE",
              voters: 606
            },
            {
              station: "LOUAI",
              voters: 606
            },
            {
              station: "NGARANDANG",
              voters: 606
            },
          ],
          "ECOLE PUBLIQUE DE KAMARGUI / A": [
            {
              station: "KAMARGUI",
              voters: 473
            },
          ],
          "ECOLE PUBLIQUE DE KINARKINA / A": [
            {
              station: "KINARKINA",
              voters: 217
            },
          ],
          "ECOLE PUBLIQUE DE KOUNOU / A": [
            {
              station: "KOUNOU",
              voters: 190
            },
          ],
          "ECOLE PUBLIQUE DE KOURBI / A": [
            {
              station: "KOURBI",
              voters: 140
            },
          ],
          "ECOLE PUBLIQUE DE ROUANE / A": [
            {
              station: "ROUANE",
              voters: 338
            },
          ],
          "ECOLE PUBLIQUE DE SOUAYE / A": [
            {
              station: "ILE-DONG",
              voters: 324
            },
            {
              station: "SOUAYE",
              voters: 324
            },
          ],
          "ECOLE PUBLIQUE DE TOUBA / A": [
            {
              station: "TOUBA",
              voters: 84
            },
          ],
          "ECOLE PUBLIQUE DE VAIDOU / A": [
            {
              station: "KASKAO",
              voters: 361
            },
            {
              station: "VAIDOU",
              voters: 361
            },
          ],
          "ECOLE PUBLIQUE DES PARENTS DE HLIBI / A": [
            {
              station: "HLIBI",
              voters: 259
            },
            {
              station: "VIGUIM",
              voters: 259
            },
          ],
          "EGLISE F.L. DE DARAM-WERMOUTCHOU / A": [
            {
              station: "DARAM-WERMOUTCHOU",
              voters: 92
            },
          ],
          "EGLISE F.L. DE KARMAYE-WERE / A": [
            {
              station: "KARMAYE-WERE",
              voters: 89
            },
          ],
          "ESPL,FORAGE DE KALAK / A": [
            {
              station: "KALAK",
              voters: 106
            },
          ],
          "ESPL. PUITS COM. DE VOUDARNA / A": [
            {
              station: "VOUDARNA",
              voters: 140
            },
          ],
          "ESPLANADE CHEF. GOLONG-MAKERNA / A": [
            {
              station: "GOLONG-MAKERNA",
              voters: 136
            },
          ],
          "ESPLANADE CHEFFERIE DE BADARA / A": [
            {
              station: "BADARA",
              voters: 304
            },
          ],
          "ESPLANADE CHEFFERIE DE BARA / A": [
            {
              station: "BARA",
              voters: 127
            },
            {
              station: "FEKNE",
              voters: 127
            },
            {
              station: "KARMAYE",
              voters: 283
            },
          ],
          "ESPLANADE CHEFFERIE DE GUIWINI / A": [
            {
              station: "GUIWINI",
              voters: 102
            },
          ],
          "ESPLANADE CHEFFERIE DE HLARAM / A": [
            {
              station: "HLARAM",
              voters: 124
            },
          ],
          "ESPLANADE CHEFFERIE DE KOULFOU / A": [
            {
              station: "KOULFOU",
              voters: 79
            },
          ],
          "ESPLANADE CHEFFERIE DE LAGOUA / A": [
            {
              station: "LAGOUA",
              voters: 72
            },
          ],
          "ESPLANADE CHEFFERIE DE NGUIRLA / A": [
            {
              station: "GOUA",
              voters: 147
            },
            {
              station: "NGUIRLA",
              voters: 147
            },
            {
              station: "PARAM",
              voters: 147
            },
          ],
          "ESPLANADE CHEFFERIE DE TELKOA / A": [
            {
              station: "TELKOA",
              voters: 96
            },
          ],
          "ESPLANADE CHEFFERIE DE WOUDOU / A": [
            {
              station: "WOUDOU",
              voters: 241
            },
          ],
          "ESPLANADE CHEFFERIE MOURPOUTOU / A": [
            {
              station: "MOURPOUTOU",
              voters: 100
            },
          ],
          "MAGASIN SODECOTON DE TITCHEOU / A": [
            {
              station: "TITCHEOU",
              voters: 175
            },
          ],
          "MARCHE DE DIMANCHE DE MASSI / A": [
            {
              station: "GOULMOUNE",
              voters: 260
            },
            {
              station: "GRAND-VIRI",
              voters: 260
            },
            {
              station: "MASSI",
              voters: 260
            },
            {
              station: "NEDDA",
              voters: 260
            },
            {
              station: "VIRI-MASSI",
              voters: 260
            },
          ],
          "MARCHE DE DJOBDA / A": [
            {
              station: "DJOBDA",
              voters: 704
            },
          ],
          "MARCHE DE PORC DE DIRIM / A": [
            {
              station: "DIRIM",
              voters: 236
            },
          ],
        },
        "YAGOUA": {
          "ANCIEN BATIMENT COMMUNE DE YAGOUA /  A": [
            {
              station: "FONCTIONNAIRE",
              voters: 1064
            },
            {
              station: "GENDARMERIE",
              voters: 1064
            },
            {
              station: "PRISON",
              voters: 1064
            },
            {
              station: "QUARTIER",
              voters: 1064
            },
            {
              station: "RESIDENTIEL",
              voters: 1064
            },
          ],
          "ANCIEN BATIMENT DU MARCHE DE DANA / A": [
            {
              station: "SODECOTON",
              voters: 643
            },
            {
              station: "DANA",
              voters: 1894
            },
          ],
          "CARREFOUR CNPS YAGOUA / A": [
            {
              station: "EST",
              voters: 771
            },
          ],
          "CARREFOUR DE BAGARA / A": [
            {
              station: "BAGARA",
              voters: 1279
            },
            {
              station: "TIYALA",
              voters: 636
            },
            {
              station: "DAGAMBE",
              voters: 636
            },
            {
              station: "GARABE",
              voters: 636
            },
            {
              station: "GONYO",
              voters: 636
            },
            {
              station: "KOLOBE",
              voters: 636
            },
            {
              station: "SAWDA",
              voters: 636
            },
          ],
          "CARREFOUR GRAVIER DE GONGYO / A": [
            {
              station: "GONGYO",
              voters: 253
            },
            {
              station: "MORLOM",
              voters: 253
            },
          ],
          "CARREFOUR YIRDENG DIGUIZI / A": [
            {
              station: "SLOUBAR",
              voters: 183
            },
            {
              station: "TOUASSOU",
              voters: 183
            },
          ],
          "COLLEGE D'ENSEIG. SECOND. VOUNALOUM /  A": [
            {
              station: "GONYOH",
              voters: 301
            },
            {
              station: "GOURFAYE",
              voters: 301
            },
            {
              station: "NANGAYE",
              voters: 301
            },
            {
              station: "WOURLAYTA",
              voters: 301
            },
          ],
          "ECOLE DES PARENTS DE DOUGOU / A": [
            {
              station: "DOUGOU",
              voters: 107
            },
          ],
          "ECOLE FRANCO-ARABE DE YAGOUA / A": [
            {
              station: "COMMISSARIAT",
              voters: 545
            },
            {
              station: "SARA",
              voters: 545
            },
            {
              station: "TIKORO",
              voters: 2190
            },
          ],
          "ECOLE MATERNELLE DE DINA-MASSA / A": [
            {
              station: "DI-YALLA",
              voters: 908
            },
            {
              station: "DINA-FOULBE",
              voters: 908
            },
            {
              station: "GAN-YALLA",
              voters: 908
            },
            {
              station: "MAMINA",
              voters: 908
            },
            {
              station: "SEMRY",
              voters: 908
            },
          ],
          "ECOLE P. ANNEXE GROUPE 4 DE BEHENA / A": [
            {
              station: "BEHENA",
              voters: 622
            },
            {
              station: "YADJOGODA",
              voters: 622
            },
          ],
          "ECOLE PRIMAIRE D'APLICATION GROUPE 3  SABONGARI DE YAGOUA / A": [
            {
              station: "DOUALAYEL",
              voters: 1294
            },
          ],
          "ECOLE PRIMAIRE D'APLICATION GROUPE 4  SABONGARI DE YAGOUA / A": [
            {
              station: "SABONGARI",
              voters: 1370
            },
          ],
          "ECOLE PUBLIQUE DE BADAYE / A": [
            {
              station: "BADAYE",
              voters: 206
            },
            {
              station: "CENTRE",
              voters: 1263
            },
            {
              station: "BERMELE",
              voters: 206
            },
            {
              station: "HLANA",
              voters: 206
            },
            {
              station: "TCHONTO",
              voters: 206
            },
          ],
          "ECOLE PUBLIQUE DE BAGARAO / A": [
            {
              station: "BAGARAO",
              voters: 303
            },
            {
              station: "GANDJAM",
              voters: 303
            },
            {
              station: "KAOROUS",
              voters: 303
            },
            {
              station: "NDONRONG",
              voters: 303
            },
          ],
          "ECOLE PUBLIQUE DE DANA / A": [
            {
              station: "BONGOLONGA",
              voters: 81
            },
            {
              station: "CAMP",
              voters: 3916
            },
            {
              station: "ECOLE",
              voters: 81
            },
            {
              station: "BIBLIQUE",
              voters: 81
            },
            {
              station: "REGIONALE",
              voters: 81
            },
            {
              station: "DES",
              voters: 81
            },
            {
              station: "JEUNES",
              voters: 81
            },
            {
              station: "AGRICULTEURS",
              voters: 81
            },
          ],
          "ECOLE PUBLIQUE DE DANA GUENDJENG / A": [
            {
              station: "GUENDJENG",
              voters: 1077
            },
          ],
          "ECOLE PUBLIQUE DE DANAY DIGUISSI / A": [
            {
              station: "DIGUISSI",
              voters: 186
            },
            {
              station: "HIRAI",
              voters: 186
            },
            {
              station: "KOMKOSSAYE",
              voters: 186
            },
          ],
          "ECOLE PUBLIQUE DE DJAFGADJI / A": [
            {
              station: "DJAFGADJI",
              voters: 368
            },
            {
              station: "AHMADOU",
              voters: 368
            },
            {
              station: "DOZALI",
              voters: 368
            },
            {
              station: "FOUKARBEO",
              voters: 495
            },
            {
              station: "KOUDOUHO",
              voters: 368
            },
            {
              station: "TCHAKAO",
              voters: 495
            },
            {
              station: "DABANG",
              voters: 495
            },
          ],
          "ECOLE PUBLIQUE DE DJAFGAYEL / A": [
            {
              station: "DJAFGAYEL",
              voters: 127
            },
            {
              station: "DJALINGOL",
              voters: 127
            },
            {
              station: "KESSOUM",
              voters: 127
            },
          ],
          "ECOLE PUBLIQUE DE DJOGOIDI-DJORHA / A": [
            {
              station: "DJORHA",
              voters: 274
            },
            {
              station: "HOHLOKBE",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE DE DJOUNTOUANGSOU / A": [
            {
              station: "DJOUNTOUANGSOU",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE DE DOMO / A": [
            {
              station: "DAOULAYE",
              voters: 342
            },
            {
              station: "KODOYO",
              voters: 342
            },
            {
              station: "MASSI",
              voters: 342
            },
            {
              station: "TENG-TENG",
              voters: 342
            },
            {
              station: "VOUNALAKI",
              voters: 342
            },
          ],
          "ECOLE PUBLIQUE DE DOUNA / A": [
            {
              station: "DOUNA",
              voters: 120
            },
            {
              station: "BODINGA",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DE DROUMKA / A": [
            {
              station: "DROUMKA",
              voters: 495
            },
          ],
          "ECOLE PUBLIQUE DE HOUNOU / A": [
            {
              station: "BOURMI",
              voters: 458
            },
            {
              station: "HOLO",
              voters: 458
            },
            {
              station: "HOUNOU",
              voters: 458
            },
            {
              station: "VORO",
              voters: 602
            },
            {
              station: "LAKI",
              voters: 458
            },
            {
              station: "MASNA",
              voters: 458
            },
            {
              station: "TIYOMDI",
              voters: 458
            },
            {
              station: "VALAM",
              voters: 458
            },
            {
              station: "VOROH",
              voters: 458
            },
          ],
          "ECOLE PUBLIQUE DE HOURFOU / A": [
            {
              station: "DARVOUNNA",
              voters: 653
            },
            {
              station: "FOUMARKAMNA",
              voters: 653
            },
            {
              station: "HLATKREO",
              voters: 653
            },
            {
              station: "HLI'SIKREO",
              voters: 1100
            },
            {
              station: "SALIKREO",
              voters: 653
            },
            {
              station: "SOUKAMNA",
              voters: 653
            },
          ],
          "ECOLE PUBLIQUE DE KALAK / A": [
            {
              station: "KALAK",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE MALDI / A": [
            {
              station: "BADAYE-MALDI",
              voters: 562
            },
            {
              station: "DOULOU",
              voters: 750
            },
            {
              station: "KOLHO",
              voters: 562
            },
            {
              station: "MALDI",
              voters: 562
            },
            {
              station: "MOLONGO-MALDI",
              voters: 562
            },
            {
              station: "PUITS",
              voters: 562
            },
            {
              station: "BIANA",
              voters: 562
            },
            {
              station: "TCHIMATNA",
              voters: 562
            },
          ],
          "ECOLE PUBLIQUE DE MOURI / A": [
            {
              station: "GOUFKA",
              voters: 333
            },
            {
              station: "GOURVAYE",
              voters: 333
            },
            {
              station: "MOURI",
              voters: 1507
            },
            {
              station: "MOUDA",
              voters: 333
            },
            {
              station: "VORMASSI",
              voters: 333
            },
            {
              station: "MOURI-DJINA",
              voters: 333
            },
            {
              station: "OUBA",
              voters: 333
            },
          ],
          "ECOLE PUBLIQUE DE NGAYA / A": [
            {
              station: "DAKADAKA",
              voters: 228
            },
            {
              station: "GOUA",
              voters: 228
            },
            {
              station: "HABI",
              voters: 429
            },
          ],
          "ECOLE PUBLIQUE DE RIGANDA / A": [
            {
              station: "RIDANDA",
              voters: 188
            },
          ],
          "ECOLE PUBLIQUE DE TCHAKLINA / A": [
            {
              station: "TCHAKLINA",
              voters: 206
            },
          ],
          "ECOLE PUBLIQUE DE TCHEKE / A": [
            {
              station: "BONGLONGA",
              voters: 525
            },
            {
              station: "KLERO",
              voters: 525
            },
            {
              station: "MOUKA",
              voters: 693
            },
            {
              station: "TCHEKE",
              voters: 748
            },
          ],
          "ECOLE PUBLIQUE DE TOUKOU / A": [
            {
              station: "DJAPTIKREO",
              voters: 477
            },
            {
              station: "GADIGUE",
              voters: 477
            },
          ],
          "ECOLE PUBLIQUE DE TOUKOU II / A": [
            {
              station: "ZOULLA",
              voters: 185
            },
            {
              station: "MOUSSI",
              voters: 185
            },
          ],
          "ECOLE PUBLIQUE DE VADA / A": [
            {
              station: "BAHARI",
              voters: 404
            },
            {
              station: "DAGAM",
              voters: 404
            },
            {
              station: "HAKAYE",
              voters: 404
            },
            {
              station: "TANGRANG",
              voters: 404
            },
            {
              station: "TCHOUM",
              voters: 404
            },
            {
              station: "VORROH",
              voters: 404
            },
          ],
          "ECOLE PUBLIQUE DE VOUNALOUM / A": [
            {
              station: "DOUNGOURWOURLAYDA",
              voters: 447
            },
            {
              station: "GOUITCHALANGSOU",
              voters: 894
            },
            {
              station: "SABAM",
              voters: 447
            },
          ],
          "ECOLE PUBLIQUE DE VOUNALOUM II / A": [
            {
              station: "ANSOU",
              voters: 562
            },
            {
              station: "HINIMDOU",
              voters: 562
            },
            {
              station: "VOUNALOUM-FERME",
              voters: 562
            },
          ],
          "ECOLE PUBLIQUE DE WOUDATA / A": [
            {
              station: "BANGA",
              voters: 201
            },
            {
              station: "KOTKONG",
              voters: 844
            },
            {
              station: "WOUDATA",
              voters: 201
            },
          ],
          "ECOLE PUBLIQUE DE YELEONA / A": [
            {
              station: "BALANE",
              voters: 165
            },
            {
              station: "GOLONMADOUMARA",
              voters: 165
            },
          ],
          "ECOLE PUBLIQUE DE YINGA / A": [
            {
              station: "YINGA",
              voters: 327
            },
          ],
          "ECOLE PUBLIQUE DE YIRDENG / A": [
            {
              station: "BANGALGARYAMNA",
              voters: 400
            },
            {
              station: "KERTCHEM",
              voters: 400
            },
            {
              station: "VOHDA",
              voters: 400
            },
            {
              station: "YIRDENG",
              voters: 583
            },
            {
              station: "FOULOU",
              voters: 1366
            },
          ],
          "ECOLE PUBLIQUE DE ZANGYAO / A": [
            {
              station: "DIKISSI",
              voters: 287
            },
            {
              station: "KOMLOM",
              voters: 287
            },
            {
              station: "KOUDOHO",
              voters: 287
            },
            {
              station: "MIGOU",
              voters: 655
            },
            {
              station: "ZANGYAO",
              voters: 287
            },
          ],
          "ECOLE PUBLIQUE DE ZEBE / A": [
            {
              station: "DOGORGO",
              voters: 624
            },
            {
              station: "GOLOK",
              voters: 624
            },
            {
              station: "LAHAYDI",
              voters: 624
            },
            {
              station: "TCHOUTTA",
              voters: 624
            },
            {
              station: "TELENG",
              voters: 624
            },
            {
              station: "YANGOU",
              voters: 624
            },
            {
              station: "VOUNFARA",
              voters: 624
            },
            {
              station: "YAMDJOGOTA",
              voters: 624
            },
            {
              station: "ZEBE",
              voters: 986
            },
          ],
          "ECOLE PUBLIQUE DE ZOULLA-KIRSIDI / A": [
            {
              station: "DIME",
              voters: 481
            },
            {
              station: "KAYAMI",
              voters: 481
            },
            {
              station: "KIRSIDI",
              voters: 481
            },
          ],
          "ECOLEPUBLIQUE DE MIOGOYE / A": [
            {
              station: "BALYA",
              voters: 453
            },
            {
              station: "KOUMA",
              voters: 453
            },
            {
              station: "MIOGOYE",
              voters: 453
            },
            {
              station: "NAGASSIA",
              voters: 453
            },
          ],
          "EGLISE DE BIDIM / A": [
            {
              station: "BIDIM",
              voters: 312
            },
          ],
          "EGLISE DE MARAO / A": [
            {
              station: "BAISTONGAYE",
              voters: 310
            },
            {
              station: "HLEMGUE",
              voters: 310
            },
          ],
          "EGLISE DE TCHANGBE / A": [
            {
              station: "DJIYOUMBE",
              voters: 198
            },
            {
              station: "TCHANGBE",
              voters: 198
            },
            {
              station: "TCHIKIDEM",
              voters: 499
            },
          ],
          "EGLISE PROTESTANTE DE FOULAWAYNA / A": [
            {
              station: "BISSISSENG",
              voters: 238
            },
            {
              station: "FOULAWAINA",
              voters: 238
            },
          ],
          "ESPLANADE CHEF. DANA HLASSOUNA / A": [
            {
              station: "ARDAF",
              voters: 233
            },
            {
              station: "FIANA",
              voters: 233
            },
            {
              station: "HLASSOUNA",
              voters: 233
            },
            {
              station: "SEMGUENA",
              voters: 233
            },
            {
              station: "WETE",
              voters: 233
            },
          ],
          "ESPLANADE CHEF. DANAY VORNGOLLA / A": [
            {
              station: "YOUWA",
              voters: 281
            },
            {
              station: "VORGORA",
              voters: 117
            },
            {
              station: "VORNGOLLA",
              voters: 199
            },
          ],
          "ESPLANADE CHEF. DJOGOIDI-WIGARBE / A": [
            {
              station: "SIFARA",
              voters: 118
            },
            {
              station: "SINA",
              voters: 118
            },
          ],
          "ESPLANADE CHEF. KIRSIDI NOYOMBE / A": [
            {
              station: "BAIHLIDI",
              voters: 258
            },
            {
              station: "MOULAH",
              voters: 258
            },
            {
              station: "NOYOMBE",
              voters: 258
            },
          ],
          "ESPLANADE CHEFFERIE BARDOUKI / A": [
            {
              station: "BARDOUKI",
              voters: 198
            },
          ],
          "ESPLANADE CHEFFERIE BORNOUA / A": [
            {
              station: "BORNOUA",
              voters: 1103
            },
          ],
          "ESPLANADE CHEFFERIE DANA DJINA / A": [
            {
              station: "BALANGDOUNGOU",
              voters: 208
            },
            {
              station: "DARGUI",
              voters: 208
            },
            {
              station: "DJINA",
              voters: 208
            },
            {
              station: "KEMLEO",
              voters: 208
            },
          ],
          "ESPLANADE CHEFFERIE DANA-BABARE / A": [
            {
              station: "SOUAYE",
              voters: 241
            },
          ],
          "ESPLANADE CHEFFERIE DANA-DIGUIZI / A": [
            {
              station: "BILLATCHOUFFI",
              voters: 255
            },
            {
              station: "DE'ESNA",
              voters: 255
            },
            {
              station: "DIGUIZI",
              voters: 438
            },
            {
              station: "KALAYE",
              voters: 255
            },
            {
              station: "WOURO",
              voters: 1124
            },
            {
              station: "MODIBO",
              voters: 255
            },
            {
              station: "WOURO-SANDA",
              voters: 255
            },
          ],
          "ESPLANADE CHEFFERIE DANA-NALAYE / A": [
            {
              station: "GUEGUENA",
              voters: 209
            },
            {
              station: "NALAYE",
              voters: 209
            },
            {
              station: "NOULOU",
              voters: 209
            },
          ],
          "ESPLANADE CHEFFERIE DANAY II / A": [
            {
              station: "DANAY",
              voters: 854
            },
          ],
          "ESPLANADE CHEFFERIE DE BARDOUKI / A": [
            {
              station: "GAYA",
              voters: 305
            },
            {
              station: "GUINANE",
              voters: 305
            },
            {
              station: "LERE",
              voters: 305
            },
            {
              station: "MASS-GAYA",
              voters: 305
            },
          ],
          "ESPLANADE CHEFFERIE DE GRIF / A": [
            {
              station: "GRIF",
              voters: 82
            },
          ],
          "ESPLANADE CHEFFERIE DE KAO / A": [
            {
              station: "KAO",
              voters: 186
            },
          ],
          "ESPLANADE CHEFFERIE DE ZEBE MARAO / A": [
            {
              station: "MARAO",
              voters: 362
            },
          ],
          "ESPLANADE CHEFFERIE DEHE I / A": [
            {
              station: "DEHE",
              voters: 504
            },
          ],
          "ESPLANADE CHEFFERIE DJIBETSOU / A": [
            {
              station: "DJIBETSOU",
              voters: 1105
            },
            {
              station: "GUIDANMOUTOU",
              voters: 1105
            },
          ],
          "ESPLANADE CHEFFERIE DJOGOIDI-WIGARBE  /A": [
            {
              station: "DELBAYAKKA",
              voters: 324
            },
            {
              station: "HERE",
              voters: 442
            },
            {
              station: "KOUTWAIDA",
              voters: 324
            },
          ],
          "ESPLANADE CHEFFERIE DOMO-RANGDIBE / A": [
            {
              station: "KALACK",
              voters: 416
            },
            {
              station: "RANGDIBE",
              voters: 167
            },
          ],
          "ESPLANADE CHEFFERIE HAOUSSARE / A": [
            {
              station: "HAOUSSARE",
              voters: 557
            },
          ],
          "ESPLANADE CHEFFERIE KAO / A": [
            {
              station: "GALAK",
              voters: 168
            },
          ],
          "ESPLANADE CHEFFERIE KOUDOUFOU / A": [
            {
              station: "DJENGRENG",
              voters: 109
            },
            {
              station: "GANGALANG",
              voters: 109
            },
          ],
          "ESPLANADE CHEFFERIE MAK / A": [
            {
              station: "DIGAGOUNA",
              voters: 379
            },
            {
              station: "MAK",
              voters: 379
            },
          ],
          "ESPLANADE CHEFFERIE MARAO / A": [
            {
              station: "GUILLA",
              voters: 188
            },
            {
              station: "NIGUIBE",
              voters: 188
            },
          ],
          "ESPLANADE CHEFFERIE MIOGOYE II / A": [
            {
              station: "DOUMOUNA",
              voters: 354
            },
            {
              station: "GUISSIA",
              voters: 354
            },
            {
              station: "HELENGA",
              voters: 354
            },
            {
              station: "PATANG",
              voters: 354
            },
            {
              station: "VOUNALAKKI",
              voters: 354
            },
          ],
          "ESPLANADE CHEFFERIE MOURI II / A": [
            {
              station: "HLIGANDA",
              voters: 175
            },
            {
              station: "SAOUDA",
              voters: 175
            },
          ],
          "ESPLANADE CHEFFERIE MOURI KAOZA / A": [
            {
              station: "KAOZA",
              voters: 144
            },
            {
              station: "KAYAM",
              voters: 144
            },
            {
              station: "KODEYO",
              voters: 144
            },
          ],
          "ESPLANADE CHEFFERIE NGAYA / A": [
            {
              station: "LAKKY",
              voters: 201
            },
            {
              station: "MOUDOUGOUR",
              voters: 201
            },
          ],
          "ESPLANADE CHEFFERIE TCHERFEKE / A": [
            {
              station: "HODANDE",
              voters: 242
            },
            {
              station: "TCHERFEKE",
              voters: 242
            },
          ],
          "ESPLANADE CHEFFERIE VADA / A": [
            {
              station: "GAIWA",
              voters: 199
            },
            {
              station: "HELEK",
              voters: 199
            },
          ],
          "ESPLANADE CHEFFERIE VORMOUNOUN / A": [
            {
              station: "HLIGANI",
              voters: 184
            },
            {
              station: "MITTONGAYE",
              voters: 184
            },
            {
              station: "NGAIDANDI",
              voters: 184
            },
            {
              station: "PORGONAYE",
              voters: 184
            },
            {
              station: "VORMOUNOUN",
              voters: 184
            },
          ],
          "ESPLANADE CHEFFERIE ZOULLA / A": [
            {
              station: "BOURMANGA",
              voters: 359
            },
            {
              station: "DAMDAM",
              voters: 359
            },
            {
              station: "GALAYE",
              voters: 359
            },
            {
              station: "YAMDJOGODA",
              voters: 983
            },
          ],
          "ESPLANADE GRANDE MOSQUEE DE  FOULBERE / A": [
            {
              station: "FOULBERE",
              voters: 608
            },
          ],
          "ESPLANADE MOSQUEE DE KASKAO / A": [
            {
              station: "KALFOURE",
              voters: 624
            },
            {
              station: "KASKAO",
              voters: 624
            },
          ],
          "FORAGE DE DANAY I / A": [
            {
              station: "DANAYE",
              voters: 2011
            },
            {
              station: "DANAYRE",
              voters: 2011
            },
            {
              station: "OURO-DJAM",
              voters: 2011
            },
            {
              station: "ZABA",
              voters: 5057
            },
            {
              station: "III",
              voters: 2011
            },
          ],
          "FORAGE DE DOMO-BALA / A": [
            {
              station: "BALA",
              voters: 160
            },
            {
              station: "MOLONGO",
              voters: 493
            },
          ],
          "MAGASIN SEMRY DE TOUKOU / A": [
            {
              station: "TARSIA",
              voters: 433
            },
            {
              station: "VOUNSIA",
              voters: 433
            },
          ],
          "MARCHE DE DANKERKE / A": [
            {
              station: "DANKERKE",
              voters: 174
            },
            {
              station: "DOKNAI",
              voters: 174
            },
            {
              station: "NGAINA",
              voters: 174
            },
            {
              station: "YONGO",
              voters: 174
            },
          ],
          "MARCHE DE VADA / A": [
            {
              station: "DAFIANGA",
              voters: 343
            },
            {
              station: "DALAMDA",
              voters: 343
            },
            {
              station: "HLEKE",
              voters: 2361
            },
            {
              station: "OUEST",
              voters: 1590
            },
          ],
        },
      },
      "MAYO-KANI": {
        "DZIGUILAO": {
          "BRIGADE DE DZIGUILAO / A": [
            {
              station: "DZIGUILAO",
              voters: 6590
            },
            {
              station: "KLAKBERE",
              voters: 320
            },
            {
              station: "MBIBOURI",
              voters: 320
            },
          ],
          "CES DE DONGROSSE / A": [
            {
              station: "BALANI",
              voters: 3093
            },
            {
              station: "BILDING",
              voters: 237
            },
            {
              station: "MANGUEDELE",
              voters: 237
            },
            {
              station: "NGAOUNDERE",
              voters: 237
            },
            {
              station: "NIYOWA",
              voters: 237
            },
          ],
          "CES DE GOLONGHINI / A": [
            {
              station: "GOLONGHINI",
              voters: 7664
            },
            {
              station: "MBITOKLORE",
              voters: 113
            },
            {
              station: "TILALE",
              voters: 113
            },
          ],
          "ECOLE DES PARENTS DE DJINDJEREINGUE /  A": [
            {
              station: "BARLANG",
              voters: 8024
            },
            {
              station: "DADJAMGA",
              voters: 389
            },
            {
              station: "DARGALA",
              voters: 254
            },
            {
              station: "DJINDJEREINGUE",
              voters: 254
            },
          ],
          "ECOLE P. GROUPE 2 GOUNDAYE DANKREO /  A": [
            {
              station: "DAWAREGA",
              voters: 378
            },
          ],
          "ECOLE PUBLIQUE BALANE GOUNDAYE / A": [
            {
              station: "BALANE",
              voters: 546
            },
          ],
          "ECOLE PUBLIQUE DE BARLANG / A": [
            {
              station: "MANNEE",
              voters: 419
            },
            {
              station: "MBIHORE",
              voters: 419
            },
            {
              station: "SAOSSIGUIDI",
              voters: 419
            },
          ],
          "ECOLE PUBLIQUE DE BISSOUE SOUEYE / A": [
            {
              station: "BISSOUE",
              voters: 434
            },
            {
              station: "TAKLARE",
              voters: 434
            },
            {
              station: "YOLDEO",
              voters: 869
            },
          ],
          "ECOLE PUBLIQUE DE BOGO / A": [
            {
              station: "BAODI",
              voters: 297
            },
            {
              station: "BOGO",
              voters: 297
            },
            {
              station: "YAMEDA",
              voters: 644
            },
          ],
          "ECOLE PUBLIQUE DE DANHOU / A": [
            {
              station: "DJELERE",
              voters: 450
            },
            {
              station: "MBANG",
              voters: 744
            },
            {
              station: "MBRAO",
              voters: 294
            },
            {
              station: "MOUGOURI",
              voters: 450
            },
            {
              station: "MBILSOUE",
              voters: 972
            },
            {
              station: "TIKALI",
              voters: 294
            },
          ],
          "ECOLE PUBLIQUE DE DOMBA / A": [
            {
              station: "DOMBA",
              voters: 3114
            },
            {
              station: "BENOUE",
              voters: 455
            },
            {
              station: "DANHOULY",
              voters: 455
            },
            {
              station: "SIRLAWE",
              voters: 950
            },
          ],
          "ECOLE PUBLIQUE DE DONGROSSE / A": [
            {
              station: "DONGROSSE",
              voters: 1452
            },
            {
              station: "TELGOA.",
              voters: 310
            },
          ],
          "ECOLE PUBLIQUE DE DZIGUILAO / A": [
            {
              station: "MBIHOORI",
              voters: 976
            },
            {
              station: "TCHATIBALI",
              voters: 522
            },
          ],
          "ECOLE PUBLIQUE DE GOLONGHINI / A": [
            {
              station: "DJAKPIEO",
              voters: 450
            },
            {
              station: "FOULAI",
              voters: 608
            },
            {
              station: "MAROUA",
              voters: 450
            },
            {
              station: "MBITCHARE",
              voters: 760
            },
          ],
          "ECOLE PUBLIQUE DE HOUANG / A": [
            {
              station: "DANHOU",
              voters: 3121
            },
            {
              station: "CENTRE",
              voters: 4511
            },
            {
              station: "BLAMBALE",
              voters: 605
            },
            {
              station: "DJAKMASSING",
              voters: 463
            },
            {
              station: "HOUANG",
              voters: 463
            },
          ],
          "ECOLE PUBLIQUE DE KEPNA / A": [
            {
              station: "MANDARE",
              voters: 326
            },
            {
              station: "SAOHOYOMO",
              voters: 326
            },
          ],
          "ECOLE PUBLIQUE DE KERA / A": [
            {
              station: "KERA",
              voters: 257
            },
            {
              station: "SAIGA",
              voters: 257
            },
          ],
          "ECOLE PUBLIQUE DE MAILOMBA / A": [
            {
              station: "WERFEO",
              voters: 354
            },
          ],
          "ECOLE PUBLIQUE DE MANNENBAGUE / A": [
            {
              station: "FOULAYE",
              voters: 456
            },
            {
              station: "MANNENBAGUE",
              voters: 456
            },
          ],
          "ECOLE PUBLIQUE DE MBITOU / A": [
            {
              station: "MBITOU",
              voters: 816
            },
          ],
          "ECOLE PUBLIQUE DE MBORHO / A": [
            {
              station: "KOKRA",
              voters: 454
            },
            {
              station: "MBORHO",
              voters: 692
            },
            {
              station: "TCHABINI",
              voters: 454
            },
            {
              station: "WELPIEO",
              voters: 454
            },
          ],
          "ECOLE PUBLIQUE DE MBRODONG / A": [
            {
              station: "MBRODONG",
              voters: 1438
            },
            {
              station: "TOUPOURI",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE DE PADE / A": [
            {
              station: "PADE",
              voters: 439
            },
          ],
          "ECOLE PUBLIQUE DE PITOA / A": [
            {
              station: "PITOA",
              voters: 486
            },
          ],
          "ECOLE PUBLIQUE DE REBEDE / A": [
            {
              station: "HARDE",
              voters: 212
            },
            {
              station: "NGOUMA",
              voters: 212
            },
            {
              station: "REBEDE",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE DE SADONG / A": [
            {
              station: "SADONG",
              voters: 423
            },
          ],
          "ECOLE PUBLIQUE DE SAO-NYAWE / A": [
            {
              station: "GOUNDAYE",
              voters: 2831
            },
            {
              station: "DANKREO",
              voters: 2831
            },
            {
              station: "DANFEGUE",
              voters: 213
            },
            {
              station: "LEKEGA",
              voters: 213
            },
            {
              station: "SAO-NYAWE",
              voters: 213
            },
          ],
          "ECOLE PUBLIQUE DE SOUEYE / A": [
            {
              station: "SOUEYE",
              voters: 2830
            },
            {
              station: "FOULBE",
              voters: 508
            },
          ],
          "ECOLE PUBLIQUE DE WALYA / A": [
            {
              station: "GALNA",
              voters: 161
            },
            {
              station: "GOUDOUSSI",
              voters: 161
            },
            {
              station: "WALYA",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE WERBAGUE / A": [
            {
              station: "SADDIELE",
              voters: 238
            },
            {
              station: "WERBAGUE",
              voters: 238
            },
          ],
          "ECOLE PUBLIQUE DE YEKWANG / A": [
            {
              station: "YEKWANG",
              voters: 202
            },
          ],
          "ECOLE PUBLIQUE DE YOLDEO / A": [
            {
              station: "DAHOUMGA",
              voters: 552
            },
            {
              station: "NDOUMGA",
              voters: 435
            },
            {
              station: "SOMGUE",
              voters: 435
            },
            {
              station: "WOYA",
              voters: 435
            },
          ],
          "ECOLE PUBLIQUE DJAOLANE MAPORE / A": [
            {
              station: "MAPORE",
              voters: 1398
            },
            {
              station: "DJAOLANE",
              voters: 742
            },
          ],
          "ECOLE PUBLIQUE GOUNDAYE MAPORE / A": [
            {
              station: "MBITCHAGUE",
              voters: 973
            },
            {
              station: "DAMSOU",
              voters: 200
            },
          ],
          "ESPL. MARCHE BLAMBALE / A": [
            {
              station: "MAPORE-WELBO",
              voters: 142
            },
            {
              station: "WELBO",
              voters: 142
            },
            {
              station: "MAPORE-BLAMBALE",
              voters: 142
            },
          ],
          "ESPL. MARCHE DANMIGUIRI / A": [
            {
              station: "DANMIGUIRI",
              voters: 202
            },
          ],
          "MAIRIE DE DZIGUILAO / A": [
            {
              station: "GOLONGREO",
              voters: 338
            },
          ],
          "MARCHE DE BOBOYO / A": [
            {
              station: "BOBOYO",
              voters: 144
            },
            {
              station: "GOING",
              voters: 144
            },
          ],
          "MARCHE DE DOMKEGA / A": [
            {
              station: "DOMKEGA",
              voters: 108
            },
          ],
          "MARCHE DE DONGROSSE DOMBA / A": [
            {
              station: "SAORINWA",
              voters: 326
            },
            {
              station: "TCHEOBRING",
              voters: 326
            },
          ],
          "MARCHE DE FADGO / A": [
            {
              station: "DJAOBE",
              voters: 211
            },
            {
              station: "FADGO",
              voters: 211
            },
          ],
          "MARCHE DE FALEPIEO / A": [
            {
              station: "FALEPIEO",
              voters: 164
            },
            {
              station: "KANE",
              voters: 164
            },
          ],
          "MARCHE DE HOURKOUTOUKI / A": [
            {
              station: "HOURKOUTOUKI",
              voters: 177
            },
          ],
          "MARCHE DE KAYA / A": [
            {
              station: "KAYA",
              voters: 117
            },
          ],
          "MARCHE DE KOUMAIWA / A": [
            {
              station: "KOUMAIWA",
              voters: 271
            },
          ],
          "MARCHE DE LOBOKRI MAPORE / A": [
            {
              station: "LOBOKRI",
              voters: 280
            },
          ],
          "MARCHE DE TCHOUWAIBE / A": [
            {
              station: "TCHOUWAIBE",
              voters: 147
            },
          ],
          "MARCHE DE TIBEGUE / A": [
            {
              station: "LIRTCHAI",
              voters: 362
            },
            {
              station: "WERSEORE",
              voters: 864
            },
            {
              station: "TIBEGUE",
              voters: 613
            },
          ],
          "MARCHE DE YAMEDA / A": [
            {
              station: "BILIOU",
              voters: 347
            },
          ],
          "SOUS-PREFECTURE / A": [
            {
              station: "DJAKLALE",
              voters: 496
            },
            {
              station: "NDAKLA",
              voters: 496
            },
          ],
        },
        "GUIDIGUIS": {
          "BALANE-MAIGUE DJAORO / A": [
            {
              station: "BALANE-MAIGUE",
              voters: 342
            },
            {
              station: "LAWANG",
              voters: 1103
            },
            {
              station: "GUIDIGUIS",
              voters: 2707
            },
          ],
          "BALDAO DJAORO / A": [
            {
              station: "BALDAO",
              voters: 186
            },
            {
              station: "BILAO",
              voters: 186
            },
            {
              station: "KILELDJOU",
              voters: 186
            },
          ],
          "BITCHARE DJAORO / A": [
            {
              station: "BITCHARE",
              voters: 206
            },
            {
              station: "DANGHOU",
              voters: 206
            },
          ],
          "CASERNE BRIGADE GUIDIGUIS / A": [
            {
              station: "CASERNE",
              voters: 158
            },
            {
              station: "DJABIRE",
              voters: 158
            },
            {
              station: "FABALE",
              voters: 158
            },
          ],
          "DALAMDJI DJAORO / A": [
            {
              station: "DALAMDJI",
              voters: 266
            },
          ],
          "DAMTIKORE DJAMA DJAORO / A": [
            {
              station: "DAMTIKORE",
              voters: 780
            },
            {
              station: "DJAMA",
              voters: 390
            },
            {
              station: "(HARDE",
              voters: 390
            },
            {
              station: "BASSIBA)",
              voters: 390
            },
            {
              station: "MANA",
              voters: 390
            },
          ],
          "DANDEO MARCHE / A": [
            {
              station: "DANDEO",
              voters: 1305
            },
            {
              station: "HAMADOU",
              voters: 643
            },
            {
              station: "SALI",
              voters: 435
            },
            {
              station: "SAMSI",
              voters: 435
            },
          ],
          "DANHOUNI DJAORO / A": [
            {
              station: "DANHOUNI",
              voters: 148
            },
            {
              station: "SADDIEL",
              voters: 148
            },
          ],
          "DINAO MARCHE / A": [
            {
              station: "DINAO",
              voters: 365
            },
            {
              station: "KODOKKI",
              voters: 365
            },
          ],
          "DJIBIDI DJAORO / A": [
            {
              station: "GUEGO",
              voters: 540
            },
          ],
          "DJINDJERINGUE DJAORO / A": [
            {
              station: "DJINDJERINGUE",
              voters: 86
            },
          ],
          "DOUBANE MBOLOLWAINA DJAORO / A": [
            {
              station: "MANSEGUE",
              voters: 121
            },
            {
              station: "MBOLOWAINA",
              voters: 121
            },
          ],
          "DOUBANE WERCTHOURI MARCHE / A": [
            {
              station: "DA'ARE",
              voters: 140
            },
            {
              station: "DJAMTARE",
              voters: 140
            },
            {
              station: "WERTCHOURI",
              voters: 140
            },
          ],
          "DOUKOULA TOUPOUING DJAORO / A": [
            {
              station: "DANFEGUE",
              voters: 344
            },
            {
              station: "GOLONBOURI",
              voters: 344
            },
            {
              station: "LABALIGA",
              voters: 344
            },
            {
              station: "TCHATIBALI",
              voters: 344
            },
            {
              station: "TOUPOUING",
              voters: 344
            },
          ],
          "ECOLE FRANCO-ARABE II DE GUIDIGUIS / A": [
            {
              station: "YOLDE",
              voters: 310
            },
            {
              station: "YOLDEO",
              voters: 310
            },
          ],
          "ECOLE PUBLIQUE DE DANGMIGUIRI / A": [
            {
              station: "DANGMIGUIRI",
              voters: 491
            },
            {
              station: "(TCHOFFI)",
              voters: 491
            },
          ],
          "ECOLE PUBLIQUE DE DAWAREGA / A": [
            {
              station: "DAWAREGA",
              voters: 677
            },
            {
              station: "DJIBIDI",
              voters: 487
            },
            {
              station: "HAIGUEYEWA",
              voters: 289
            },
            {
              station: "MBISSOUWE",
              voters: 289
            },
            {
              station: "NALINGA",
              voters: 289
            },
            {
              station: "NENBAGUE",
              voters: 289
            },
          ],
          "ECOLE PUBLIQUE DE DEFIN / A": [
            {
              station: "DANSING",
              voters: 276
            },
            {
              station: "DEFIN",
              voters: 552
            },
          ],
          "ECOLE PUBLIQUE DE DOUBANE LAMIDAT / A": [
            {
              station: "BARIBELE",
              voters: 974
            },
            {
              station: "CENTRE",
              voters: 487
            },
            {
              station: "CAMP",
              voters: 607
            },
            {
              station: "MISSIONNAIRES",
              voters: 487
            },
            {
              station: "DJEFATOU",
              voters: 487
            },
            {
              station: "SIRLAWE",
              voters: 763
            },
          ],
          "ECOLE PUBLIQUE DE GOLONDERE / A": [
            {
              station: "BALANE",
              voters: 419
            },
            {
              station: "GOLONDERE",
              voters: 1257
            },
            {
              station: "DANGBA",
              voters: 419
            },
            {
              station: "DANGLAO",
              voters: 419
            },
            {
              station: "GORTIGUIRI",
              voters: 599
            },
            {
              station: "KOBO",
              voters: 419
            },
          ],
          "ECOLE PUBLIQUE DE GUEGO / A": [
            {
              station: "LOUGGUE",
              voters: 441
            },
            {
              station: "TCHIFTIEL",
              voters: 441
            },
          ],
          "ECOLE PUBLIQUE DE KOURBI / A": [
            {
              station: "MOUNDANG",
              voters: 224
            },
            {
              station: "YOUWAY",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE LAMTARE / A": [
            {
              station: "LAMTARE",
              voters: 314
            },
          ],
          "ECOLE PUBLIQUE DE MANDAIGOUM / A": [
            {
              station: "GOLONREO",
              voters: 420
            },
            {
              station: "MANDAIGOUM",
              voters: 521
            },
          ],
          "ECOLE PUBLIQUE DE MBANG-MBAHAING / A": [
            {
              station: "MBANG-MBARHAING",
              voters: 110
            },
          ],
          "ECOLE PUBLIQUE DE NGARMASSE / A": [
            {
              station: "SIRLAWE-NGARMASSE",
              voters: 313
            },
          ],
          "ECOLE PUBLIQUE DE PAKANA / A": [
            {
              station: "PAKANA",
              voters: 516
            },
          ],
          "ECOLE PUBLIQUE DE PATALAO / A": [
            {
              station: "DAKAR",
              voters: 283
            },
            {
              station: "DJAKORE",
              voters: 283
            },
            {
              station: "GUIZIGA",
              voters: 283
            },
            {
              station: "PATALAO",
              voters: 283
            },
            {
              station: "WERBAGUE",
              voters: 283
            },
          ],
          "ECOLE PUBLIQUE DE SALMAY / A": [
            {
              station: "SALMAY-DOUBANE",
              voters: 306
            },
          ],
          "ECOLE PUBLIQUE DE SAOSSEGUEDE / A": [
            {
              station: "SAOSSEGUEDE",
              voters: 143
            },
          ],
          "ECOLE PUBLIQUE DE SIRLAWE / A": [
            {
              station: "SAOMAITIKLI",
              voters: 336
            },
            {
              station: "SIRLAWE-GUIDIGUIS",
              voters: 336
            },
          ],
          "ECOLE PUBLIQUE DE TOROCK CHEFFERIE /  A": [
            {
              station: "BATROUM",
              voters: 469
            },
            {
              station: "LARAO",
              voters: 1417
            },
            {
              station: "TOROCK",
              voters: 1124
            },
            {
              station: "TERSING",
              voters: 469
            },
          ],
          "ECOLE PUBLIQUE GROUPE II DE HAOUSSARE  /A": [
            {
              station: "DOMAYO",
              voters: 702
            },
            {
              station: "HAOUSSARE",
              voters: 702
            },
          ],
          "ECOLE PUBLIQUE GROUPE III DE GUIDIGUIS /  A": [
            {
              station: "WIBIWA",
              voters: 409
            },
          ],
          "FEO-EBA DJAORO / A": [
            {
              station: "FEO-EBA",
              voters: 523
            },
          ],
          "GASSEL DJAORO / A": [
            {
              station: "GASSEL",
              voters: 574
            },
            {
              station: "HARDE",
              voters: 1148
            },
            {
              station: "LAWAL",
              voters: 574
            },
            {
              station: "TOUKOUR",
              voters: 574
            },
          ],
          "GOLOMBE DJAORO / A": [
            {
              station: "GOLOMBE",
              voters: 107
            },
            {
              station: "WANGBAGA",
              voters: 107
            },
          ],
          "GOLONPOUING DJAORO / A": [
            {
              station: "GOLONPOUING",
              voters: 239
            },
            {
              station: "KANKARWA",
              voters: 478
            },
            {
              station: "MOKAI",
              voters: 239
            },
          ],
          "GOUNDAIRE DJAORO / A": [
            {
              station: "BOKIRE",
              voters: 400
            },
            {
              station: "GOUNDAIRE",
              voters: 400
            },
            {
              station: "LITARE",
              voters: 400
            },
            {
              station: "TCHAKAO",
              voters: 400
            },
          ],
          "GUEREME EP MANDARAO DJAORO / A": [
            {
              station: "HARDEO",
              voters: 499
            },
            {
              station: "GUEREME",
              voters: 477
            },
            {
              station: "ILAWO",
              voters: 189
            },
            {
              station: "MANDARAO",
              voters: 189
            },
            {
              station: "OURO",
              voters: 189
            },
            {
              station: "LIEDJI",
              voters: 189
            },
          ],
          "GUEREME LAWANAT YALDAM DJAORO / A": [
            {
              station: "OURO-KAE",
              voters: 129
            },
            {
              station: "PISSOUMI",
              voters: 129
            },
            {
              station: "YALDAM",
              voters: 129
            },
          ],
          "HOULORE DJAORO / A": [
            {
              station: "HOULORE",
              voters: 117
            },
          ],
          "KILELA DJAORO / A": [
            {
              station: "KILELA",
              voters: 216
            },
          ],
          "KOURBI CHEFFERIE DJAORO / A": [
            {
              station: "DADJAMGA",
              voters: 356
            },
            {
              station: "HODANGO",
              voters: 542
            },
            {
              station: "KOURBI",
              voters: 1334
            },
            {
              station: "FOULBE",
              voters: 356
            },
            {
              station: "TCHEMBELA",
              voters: 356
            },
          ],
          "KOURBI LAWANAT DJAORO / A": [
            {
              station: "DJAOLANE",
              voters: 329
            },
            {
              station: "GUINGUINROU",
              voters: 329
            },
          ],
          "KOURBI MANGALA DJAORO / A": [
            {
              station: "LOUGGA-BOULI",
              voters: 426
            },
            {
              station: "MANGALA",
              voters: 426
            },
          ],
          "KOURBI TOUPOURI DJAORO / A": [
            {
              station: "TOUPOURI",
              voters: 398
            },
          ],
          "LAWANG DJAORO / A": [
            {
              station: "KONGRONG",
              voters: 101
            },
          ],
          "LIRINDE DJAORO / A": [
            {
              station: "LIRINDE",
              voters: 152
            },
          ],
          "MABLAMNA DJAORO / A": [
            {
              station: "DJODIDE",
              voters: 186
            },
            {
              station: "MABLAMNA",
              voters: 186
            },
          ],
          "MANDAIRE DJAORO / A": [
            {
              station: "LALIEL",
              voters: 318
            },
            {
              station: "MANDAIRE",
              voters: 318
            },
            {
              station: "SIRATARE",
              voters: 318
            },
          ],
          "MAROUA DJAORO / A": [
            {
              station: "MAROUA",
              voters: 360
            },
            {
              station: "MAIKARLAM",
              voters: 180
            },
          ],
          "MOGOM DJAORO / A": [
            {
              station: "MOGOM",
              voters: 111
            },
          ],
          "NDAKLA DJAORO / A": [
            {
              station: "NDAKLA",
              voters: 143
            },
          ],
          "NGARMASSE DJAORO / A": [
            {
              station: "MAMBERWE",
              voters: 208
            },
            {
              station: "NGARMASSE",
              voters: 521
            },
          ],
          "NGAYEWA DJAORO / A": [
            {
              station: "NGAYEWA",
              voters: 207
            },
          ],
          "OURLARGO DJAORO / A": [
            {
              station: "KOBRO",
              voters: 66
            },
            {
              station: "OURLARGO",
              voters: 66
            },
          ],
          "PARC A VACCINATION (DAEPIA) / A": [
            {
              station: "KROH",
              voters: 388
            },
            {
              station: "TOUGGA-DJOYA",
              voters: 388
            },
          ],
          "PILZALI DJAORO / A": [
            {
              station: "OURO-SIRFOU",
              voters: 98
            },
            {
              station: "PILZALI",
              voters: 98
            },
          ],
          "PITCHOTONGUEL (LYCEE GUDIGUIS) / A": [
            {
              station: "GAKNA",
              voters: 735
            },
            {
              station: "LOUGGA",
              voters: 735
            },
            {
              station: "PITCHOTONGUEL",
              voters: 735
            },
            {
              station: "(MANDOUGOUI)",
              voters: 735
            },
          ],
          "PRIWO DJAORO / A": [
            {
              station: "PRIWO",
              voters: 210
            },
          ],
          "SOULKANDOU DJAORO / A": [
            {
              station: "KAELE",
              voters: 199
            },
            {
              station: "SOULKANDOU",
              voters: 199
            },
          ],
          "SOUS-PREFECTURE / A": [
            {
              station: "FONCTIONNAIRES",
              voters: 120
            },
          ],
          "TERSING DJAORO / A": [
            {
              station: "BOULAREO",
              voters: 464
            },
            {
              station: "TERSING-GUIDIGUIS",
              voters: 763
            },
          ],
          "WAIBA MARCHE / A": [
            {
              station: "WAIBA",
              voters: 248
            },
          ],
          "WINDEO GUIDIGUIS DJAORO / A": [
            {
              station: "WINDEO-GUIDIGUIS",
              voters: 299
            },
          ],
          "WINDEO KOURBI DJAORO / A": [
            {
              station: "KREMDJI",
              voters: 296
            },
            {
              station: "(WINDEO-KOURBI)",
              voters: 296
            },
          ],
          "ZANINI HAMADOU DJAORO / A": [
            {
              station: "ZANINI",
              voters: 416
            },
            {
              station: "BOUBA",
              voters: 208
            },
          ],
        },
        "KAELE": {
          "CENTRE DE SANTE INTEGRE DE KAELE / A": [
            {
              station: "KILIMAIGOUO",
              voters: 746
            },
            {
              station: "KILIMODERE",
              voters: 746
            },
            {
              station: "TIZENI",
              voters: 746
            },
            {
              station: "ZALAKMASSALAI",
              voters: 746
            },
          ],
          "CENTRE DE SANTE INTEGRE DE KANI / A": [
            {
              station: "KILI",
              voters: 725
            },
            {
              station: "FASSOUNYA",
              voters: 725
            },
            {
              station: "LAKMASSELAY",
              voters: 725
            },
            {
              station: "LOPERE",
              voters: 1756
            },
            {
              station: "MATCHOKDABOLE",
              voters: 725
            },
            {
              station: "MOURBA",
              voters: 725
            },
            {
              station: "TOUKROU",
              voters: 725
            },
          ],
          "CENTRE VETERINAIRE ZOOTECH. DOUMROU  /A": [
            {
              station: "KAPILI",
              voters: 722
            },
            {
              station: "LAMORDE",
              voters: 722
            },
            {
              station: "LITAO",
              voters: 722
            },
            {
              station: "POLLEO",
              voters: 722
            },
            {
              station: "WADANGO",
              voters: 722
            },
          ],
          "CES DE GABAN / A": [
            {
              station: "BAMAKIDJINE",
              voters: 153
            },
            {
              station: "ZABOULE",
              voters: 153
            },
          ],
          "CETIC DE KEOKEO / A": [
            {
              station: "KEO-KEO",
              voters: 302
            },
          ],
          "ECOLE ANNEXE DE MOURGOURONG / A": [
            {
              station: "SABONGARI",
              voters: 796
            },
            {
              station: "TASSA",
              voters: 796
            },
            {
              station: "MODI",
              voters: 796
            },
            {
              station: "TCHOLLIRE",
              voters: 796
            },
          ],
          "ECOLE ANNEXE MOURGOURONG / A": [
            {
              station: "TCHAKAO",
              voters: 242
            },
          ],
          "ECOLE CATHOLIQUE DE LARA / A": [
            {
              station: "HARANG",
              voters: 325
            },
            {
              station: "REPADAKE",
              voters: 325
            },
          ],
          "ECOLE CATHOLIQUE DE MAGRONGONG / A": [
            {
              station: "BOURKINA",
              voters: 227
            },
            {
              station: "MADASSIL",
              voters: 227
            },
            {
              station: "PAIN",
              voters: 227
            },
            {
              station: "MAGRONGONG",
              voters: 1135
            },
            {
              station: "MOURBAHRE",
              voters: 227
            },
            {
              station: "YANTEGOURBE",
              voters: 227
            },
          ],
          "ECOLE CATHOLIQUE DE PIWA / A": [
            {
              station: "POUDOUWAI",
              voters: 607
            },
            {
              station: "TEGUEORI",
              voters: 607
            },
            {
              station: "TEZOUARE",
              voters: 983
            },
            {
              station: "PIWA",
              voters: 607
            },
          ],
          "ECOLE MATERNELLE DE YELWA / A": [
            {
              station: "DJAORO",
              voters: 922
            },
            {
              station: "GARGA",
              voters: 404
            },
            {
              station: "GUIEDAME",
              voters: 404
            },
            {
              station: "VILLE",
              voters: 1264
            },
            {
              station: "YELWA",
              voters: 404
            },
          ],
          "ECOLE PRIVEE PROTESTANTE DRAME / A": [
            {
              station: "DRAME",
              voters: 2696
            },
            {
              station: "TEKABE",
              voters: 1134
            },
            {
              station: "TEPAL-DA",
              voters: 1134
            },
            {
              station: "TEPIL",
              voters: 1134
            },
            {
              station: "YEWAI",
              voters: 1134
            },
            {
              station: "ZAGOURONG",
              voters: 1134
            },
            {
              station: "ZAGUERE",
              voters: 1134
            },
            {
              station: "TANG",
              voters: 1134
            },
          ],
          "ECOLE PUBLIQUE DE BERKEDE II / A": [
            {
              station: "BERKEDE",
              voters: 429
            },
            {
              station: "GUEBAL",
              voters: 429
            },
            {
              station: "YALLI",
              voters: 429
            },
            {
              station: "HARDEO",
              voters: 2004
            },
            {
              station: "BALERI",
              voters: 429
            },
          ],
          "ECOLE PUBLIQUE DE BILAO / A": [
            {
              station: "BILAO",
              voters: 508
            },
            {
              station: "BLANG",
              voters: 254
            },
            {
              station: "WASSOUYA",
              voters: 254
            },
            {
              station: "WINDE",
              voters: 254
            },
            {
              station: "YEKARE",
              voters: 254
            },
          ],
          "ECOLE PUBLIQUE DE BIPAING / A": [
            {
              station: "BAZO",
              voters: 457
            },
            {
              station: "BIETE",
              voters: 457
            },
            {
              station: "HARDE",
              voters: 1077
            },
            {
              station: "BIPAING",
              voters: 1828
            },
            {
              station: "GOUDOUMGOUDOUM",
              voters: 865
            },
            {
              station: "GOURKAYE",
              voters: 457
            },
            {
              station: "NBANKOTCHORE",
              voters: 457
            },
            {
              station: "TCHAKAMADJE",
              voters: 830
            },
          ],
          "ECOLE PUBLIQUE DE BISSELE / A": [
            {
              station: "BISSELE",
              voters: 828
            },
            {
              station: "LARAO",
              voters: 414
            },
            {
              station: "POUGOUO",
              voters: 414
            },
            {
              station: "TANELWO",
              voters: 414
            },
          ],
          "ECOLE PUBLIQUE DE BOBOYO / A": [
            {
              station: "BOBOYO",
              voters: 1692
            },
            {
              station: "DOUNGOY-MATCHING",
              voters: 424
            },
            {
              station: "MOURIE",
              voters: 1036
            },
            {
              station: "TCHINSELE",
              voters: 424
            },
            {
              station: "ZABISSENE",
              voters: 424
            },
            {
              station: "ZALOUMI",
              voters: 424
            },
          ],
          "ECOLE PUBLIQUE DE BOLOLO / A": [
            {
              station: "BIGA",
              voters: 352
            },
            {
              station: "BOLOLO",
              voters: 2005
            },
            {
              station: "DJAMBOUTOU",
              voters: 1177
            },
            {
              station: "SILBOULAM",
              voters: 352
            },
            {
              station: "TALLA",
              voters: 11271
            },
            {
              station: "GABA",
              voters: 2003
            },
            {
              station: "MASSAI",
              voters: 2771
            },
          ],
          "ECOLE PUBLIQUE DE DJAGARA / A": [
            {
              station: "DIBA",
              voters: 268
            },
            {
              station: "GALA",
              voters: 581
            },
            {
              station: "DJAGARA",
              voters: 536
            },
            {
              station: "HOUR-HAI",
              voters: 556
            },
            {
              station: "MAZAGOI",
              voters: 268
            },
            {
              station: "MBOKI",
              voters: 268
            },
            {
              station: "ROUI",
              voters: 268
            },
          ],
          "ECOLE PUBLIQUE DE DJIDOMA I DARDAO / A": [
            {
              station: "DARDAO",
              voters: 3060
            },
            {
              station: "KILIBIGUIBI",
              voters: 612
            },
            {
              station: "MOURGOURONG",
              voters: 2861
            },
            {
              station: "WADJOU",
              voters: 612
            },
          ],
          "ECOLE PUBLIQUE DE DJIDOMA II PIWA / A": [
            {
              station: "BADOUE",
              voters: 508
            },
            {
              station: "DAGAZIE",
              voters: 508
            },
            {
              station: "FETCHARE",
              voters: 508
            },
            {
              station: "GADAMAYO",
              voters: 1303
            },
            {
              station: "BATROUM",
              voters: 1115
            },
            {
              station: "GUEBALE",
              voters: 508
            },
            {
              station: "TE-DASSEL-SING",
              voters: 508
            },
          ],
          "ECOLE PUBLIQUE DE DJOUREDANNE / A": [
            {
              station: "DANG",
              voters: 580
            },
            {
              station: "TIBALI",
              voters: 373
            },
            {
              station: "DJOUREDANNE",
              voters: 1119
            },
            {
              station: "WAFANGO",
              voters: 373
            },
          ],
          "ECOLE PUBLIQUE DE DOUMROU / A": [
            {
              station: "DALEWAO",
              voters: 431
            },
            {
              station: "KOURONG",
              voters: 709
            },
            {
              station: "DODO",
              voters: 431
            },
            {
              station: "DOLEY",
              voters: 431
            },
            {
              station: "TCHASDEO",
              voters: 431
            },
          ],
          "ECOLE PUBLIQUE DE FOULI / A": [
            {
              station: "BALSALE",
              voters: 328
            },
            {
              station: "FOULI",
              voters: 271
            },
          ],
          "ECOLE PUBLIQUE DE FOULOU / A": [
            {
              station: "FOULOU",
              voters: 2628
            },
            {
              station: "MOULVA",
              voters: 876
            },
          ],
          "ECOLE PUBLIQUE DE GABAN / A": [
            {
              station: "DEVORA",
              voters: 875
            },
            {
              station: "GRON",
              voters: 875
            },
            {
              station: "MAPPI",
              voters: 875
            },
            {
              station: "GUIEPOUORE",
              voters: 1231
            },
            {
              station: "KAGAI",
              voters: 1393
            },
            {
              station: "KILSIL",
              voters: 875
            },
            {
              station: "MANEWANE",
              voters: 875
            },
            {
              station: "MOURPOUOMARBE",
              voters: 875
            },
            {
              station: "NGARAYEL",
              voters: 875
            },
            {
              station: "ZARIE",
              voters: 875
            },
            {
              station: "WAPPING",
              voters: 875
            },
          ],
          "ECOLE PUBLIQUE DE GADAS / A": [
            {
              station: "BIDEBI",
              voters: 478
            },
            {
              station: "DOMAYO",
              voters: 808
            },
            {
              station: "GADAS",
              voters: 1912
            },
            {
              station: "FOUNSELE",
              voters: 478
            },
            {
              station: "KOUSSOUDA",
              voters: 478
            },
            {
              station: "MARAOU",
              voters: 478
            },
            {
              station: "MAZOULNGAH",
              voters: 478
            },
            {
              station: "(KISSANG)",
              voters: 478
            },
            {
              station: "MOURPOUORE",
              voters: 2535
            },
            {
              station: "SILDEGUERE",
              voters: 478
            },
          ],
          "ECOLE PUBLIQUE DE GAI-GAI GOUDRON / A": [
            {
              station: "WAREGA",
              voters: 207
            },
            {
              station: "GAI-GAI",
              voters: 802
            },
            {
              station: "GOUDRON",
              voters: 563
            },
          ],
          "ECOLE PUBLIQUE DE GAMBOUR / A": [
            {
              station: "BIBALE",
              voters: 1028
            },
            {
              station: "DJAOLINGUIN",
              voters: 362
            },
            {
              station: "GAMBOUR",
              voters: 1448
            },
            {
              station: "CENTRE",
              voters: 7696
            },
            {
              station: "MALIGAM",
              voters: 362
            },
            {
              station: "MOURBARE",
              voters: 1294
            },
            {
              station: "POUKIERE",
              voters: 362
            },
            {
              station: "TEPILI",
              voters: 362
            },
          ],
          "ECOLE PUBLIQUE DE GAPRING TOUBONG / A": [
            {
              station: "DINAKO",
              voters: 337
            },
            {
              station: "BADJAM",
              voters: 337
            },
            {
              station: "TOUBONG",
              voters: 337
            },
            {
              station: "TOUKI",
              voters: 337
            },
            {
              station: "POUGUERE",
              voters: 882
            },
            {
              station: "BELLO",
              voters: 337
            },
          ],
          "ECOLE PUBLIQUE DE GAREY / A": [
            {
              station: "BIAKBI",
              voters: 1961
            },
            {
              station: "BOUDOUGOU",
              voters: 2043
            },
            {
              station: "GUECTHALLE",
              voters: 1961
            },
            {
              station: "GUEDAME",
              voters: 1961
            },
            {
              station: "GAREY",
              voters: 13727
            },
            {
              station: "GUELARE",
              voters: 2812
            },
            {
              station: "GUETEHALE",
              voters: 1961
            },
            {
              station: "GUIEMOUNGOUO",
              voters: 1961
            },
            {
              station: "GUIEPOURE",
              voters: 1961
            },
            {
              station: "KELIGONG",
              voters: 2730
            },
            {
              station: "MOUFOUORE",
              voters: 1961
            },
            {
              station: "MOURGUERE",
              voters: 1961
            },
            {
              station: "MOURKOUMI",
              voters: 1961
            },
            {
              station: "MOURTCHOUABE",
              voters: 1961
            },
            {
              station: "POURIE-GAREY",
              voters: 1961
            },
            {
              station: "TEGUIERE",
              voters: 1961
            },
            {
              station: "TEZIN",
              voters: 1961
            },
            {
              station: "TIGBILI",
              voters: 1961
            },
            {
              station: "ZAPILI",
              voters: 2926
            },
            {
              station: "ZASSERI",
              voters: 2573
            },
            {
              station: "ZATEPELGOUO",
              voters: 1961
            },
          ],
          "ECOLE PUBLIQUE DE GAZARO / A": [
            {
              station: "GAZARO",
              voters: 990
            },
            {
              station: "DOYANRE",
              voters: 848
            },
            {
              station: "SABERE",
              voters: 330
            },
          ],
          "ECOLE PUBLIQUE DE GOING / A": [
            {
              station: "DAMBALE",
              voters: 794
            },
            {
              station: "DERVOUNG",
              voters: 794
            },
            {
              station: "DOUNDERE",
              voters: 794
            },
            {
              station: "GOING",
              voters: 3176
            },
            {
              station: "MOURZIERE",
              voters: 2152
            },
            {
              station: "TEYARE",
              voters: 794
            },
            {
              station: "YABOYA",
              voters: 794
            },
          ],
          "ECOLE PUBLIQUE DE GOUBARA / A": [
            {
              station: "GOUBARA",
              voters: 826
            },
            {
              station: "GOUBOUI",
              voters: 413
            },
            {
              station: "KELI",
              voters: 413
            },
            {
              station: "KETCHILI",
              voters: 413
            },
          ],
          "ECOLE PUBLIQUE DE GOUDJOUING / A": [
            {
              station: "BLOUM",
              voters: 376
            },
            {
              station: "KESSING",
              voters: 376
            },
            {
              station: "PARWAI",
              voters: 376
            },
            {
              station: "POUSSINGRI",
              voters: 988
            },
            {
              station: "GOUDJOUING",
              voters: 752
            },
            {
              station: "TESSERAY",
              voters: 376
            },
          ],
          "ECOLE PUBLIQUE DE GOUZOUGOUI / A": [
            {
              station: "AVIATION",
              voters: 2238
            },
            {
              station: "FADANKA",
              voters: 2238
            },
            {
              station: "BIBEMIRE",
              voters: 2238
            },
            {
              station: "GOUZOUGOUI",
              voters: 2238
            },
          ],
          "ECOLE PUBLIQUE DE GUETALE / A": [
            {
              station: "BADJADJE",
              voters: 532
            },
            {
              station: "BARKIO",
              voters: 532
            },
            {
              station: "BAYAGALA",
              voters: 532
            },
            {
              station: "FILTEGUERE",
              voters: 532
            },
            {
              station: "GUETALE",
              voters: 1416
            },
            {
              station: "DOUMROU",
              voters: 2407
            },
            {
              station: "HODANGO",
              voters: 1383
            },
            {
              station: "KIDIKANG",
              voters: 532
            },
            {
              station: "NASSARAO",
              voters: 532
            },
            {
              station: "OURO",
              voters: 3885
            },
            {
              station: "BAYAYA",
              voters: 532
            },
            {
              station: "MANA",
              voters: 532
            },
            {
              station: "TCHAKADJAO",
              voters: 532
            },
          ],
          "ECOLE PUBLIQUE DE GUILIRI / A": [
            {
              station: "BALANE",
              voters: 490
            },
            {
              station: "DARBI",
              voters: 490
            },
            {
              station: "DJAOLANI",
              voters: 490
            },
            {
              station: "DJAOLI",
              voters: 490
            },
            {
              station: "FLING",
              voters: 490
            },
            {
              station: "GUEBOUZOU",
              voters: 490
            },
            {
              station: "GUIDIGUIS",
              voters: 490
            },
            {
              station: "GABAN",
              voters: 3399
            },
            {
              station: "GUILIRI",
              voters: 490
            },
            {
              station: "GUISSAI",
              voters: 490
            },
            {
              station: "WAILA",
              voters: 490
            },
            {
              station: "WEIBA",
              voters: 490
            },
            {
              station: "YAMELA",
              voters: 490
            },
          ],
          "ECOLE PUBLIQUE DE KANI / A": [
            {
              station: "BOURGOURI",
              voters: 408
            },
            {
              station: "KANI",
              voters: 3082
            },
            {
              station: "MAZIABE",
              voters: 408
            },
            {
              station: "MOURBAPAYOKBE",
              voters: 408
            },
            {
              station: "MOURGUIERE",
              voters: 408
            },
            {
              station: "MOURKIERE",
              voters: 1853
            },
            {
              station: "MOURZOUONG",
              voters: 747
            },
            {
              station: "IBBI",
              voters: 408
            },
          ],
          "ECOLE PUBLIQUE DE KASSELE / A": [
            {
              station: "BROUI",
              voters: 339
            },
            {
              station: "KASSELE",
              voters: 1356
            },
            {
              station: "POUDJESSOUA",
              voters: 339
            },
            {
              station: "TEPOULTIRI",
              voters: 339
            },
            {
              station: "ZAKLANG",
              voters: 1365
            },
          ],
          "ECOLE PUBLIQUE DE KILGUIM / A": [
            {
              station: "BLORI",
              voters: 284
            },
            {
              station: "TESSELE",
              voters: 284
            },
            {
              station: "KILGUIM",
              voters: 284
            },
          ],
          "ECOLE PUBLIQUE DE KLELIMBRI / A": [
            {
              station: "KLELIMBRI",
              voters: 1031
            },
          ],
          "ECOLE PUBLIQUE DE LARA / A": [
            {
              station: "TCHOING",
              voters: 666
            },
            {
              station: "KELERA",
              voters: 666
            },
            {
              station: "LARA",
              voters: 1874
            },
            {
              station: "POUKARE",
              voters: 1453
            },
            {
              station: "VIANGUE",
              voters: 666
            },
          ],
          "ECOLE PUBLIQUE DE LERA / A": [
            {
              station: "DING",
              voters: 1090
            },
            {
              station: "LERA",
              voters: 2725
            },
            {
              station: "ZOUA",
              voters: 545
            },
            {
              station: "POUWA",
              voters: 545
            },
            {
              station: "TEPOURCHELE",
              voters: 545
            },
          ],
          "ECOLE PUBLIQUE DE MAHAI / A": [
            {
              station: "LIGAZANG",
              voters: 972
            },
            {
              station: "MAHAI",
              voters: 1152
            },
            {
              station: "MADAMA",
              voters: 288
            },
          ],
          "ECOLE PUBLIQUE DE MAKASSA / A": [
            {
              station: "KITI",
              voters: 313
            },
            {
              station: "BRAM",
              voters: 313
            },
            {
              station: "MAKASSA",
              voters: 452
            },
            {
              station: "TALA",
              voters: 471
            },
            {
              station: "KOUCHOUM",
              voters: 226
            },
          ],
          "ECOLE PUBLIQUE DE MAKEBI / A": [
            {
              station: "MATCHIOLTA",
              voters: 2072
            },
            {
              station: "MABAYEDJOU",
              voters: 518
            },
            {
              station: "MADJINSOUA",
              voters: 518
            },
            {
              station: "MAGONSOUO",
              voters: 518
            },
            {
              station: "WARONG",
              voters: 518
            },
            {
              station: "MAKEBI",
              voters: 1036
            },
            {
              station: "MOURBILIRE",
              voters: 518
            },
            {
              station: "POUDJISSOUA",
              voters: 518
            },
            {
              station: "ZADRAME",
              voters: 518
            },
            {
              station: "ZAGUIERE",
              voters: 518
            },
          ],
          "ECOLE PUBLIQUE DE MANORE / A": [
            {
              station: "DATCHABE",
              voters: 394
            },
            {
              station: "MANORE",
              voters: 1182
            },
            {
              station: "MASSANGNE",
              voters: 394
            },
          ],
          "ECOLE PUBLIQUE DE MASSINKOU / A": [
            {
              station: "YOURE",
              voters: 250
            },
            {
              station: "MASSINKOU",
              voters: 250
            },
            {
              station: "MAYO-LOUE",
              voters: 250
            },
          ],
          "ECOLE PUBLIQUE DE MAZANG / A": [
            {
              station: "JOLI",
              voters: 472
            },
            {
              station: "SOIR",
              voters: 472
            },
            {
              station: "LOUKA",
              voters: 472
            },
            {
              station: "MAHOULAILA",
              voters: 472
            },
            {
              station: "MALANEGOME",
              voters: 990
            },
            {
              station: "MAZANGE",
              voters: 472
            },
            {
              station: "MAPOUSSIERE",
              voters: 472
            },
            {
              station: "MATONRI",
              voters: 472
            },
            {
              station: "MAZANG",
              voters: 944
            },
            {
              station: "MAZAN",
              voters: 472
            },
          ],
          "ECOLE PUBLIQUE DE MBOURSOU / A": [
            {
              station: "GONG",
              voters: 428
            },
            {
              station: "MBOURSOU",
              voters: 428
            },
            {
              station: "METEPLESE",
              voters: 428
            },
            {
              station: "ZABIMALOUM",
              voters: 428
            },
          ],
          "ECOLE PUBLIQUE DE MIDJIVIN / A": [
            {
              station: "BLING",
              voters: 714
            },
            {
              station: "BOURDJOUK",
              voters: 714
            },
            {
              station: "DIBAMOUA",
              voters: 1070
            },
            {
              station: "DIGUINE",
              voters: 2142
            },
            {
              station: "DIDAO",
              voters: 714
            },
            {
              station: "DJIVIDI",
              voters: 714
            },
            {
              station: "DOKO",
              voters: 714
            },
            {
              station: "GOUADA",
              voters: 714
            },
            {
              station: "HOURSO",
              voters: 714
            },
            {
              station: "MIDJIVIN",
              voters: 714
            },
            {
              station: "MOULZO",
              voters: 714
            },
            {
              station: "SARMOUA",
              voters: 714
            },
            {
              station: "BOUI",
              voters: 4127
            },
            {
              station: "DIBAMWA",
              voters: 714
            },
            {
              station: "TALLI",
              voters: 714
            },
          ],
          "ECOLE PUBLIQUE DE MINDJIL / A": [
            {
              station: "BIPAING-MINDJIL",
              voters: 851
            },
            {
              station: "KILIKECHILI",
              voters: 851
            },
            {
              station: "MINDJIL",
              voters: 1702
            },
            {
              station: "MOURFOUO",
              voters: 851
            },
            {
              station: "MOURGUIN",
              voters: 851
            },
            {
              station: "MOURTCHONRE",
              voters: 851
            },
            {
              station: "TEKELALE",
              voters: 851
            },
          ],
          "ECOLE PUBLIQUE DE MIZAO / A": [
            {
              station: "MIZAO",
              voters: 170
            },
          ],
          "ECOLE PUBLIQUE DE MOUIDJOUI / A": [
            {
              station: "BARAWA",
              voters: 595
            },
            {
              station: "MOUDJOUI",
              voters: 2119
            },
            {
              station: "GOUGOUM",
              voters: 595
            },
            {
              station: "KISSANG",
              voters: 595
            },
            {
              station: "MELEMET",
              voters: 595
            },
          ],
          "ECOLE PUBLIQUE DE MOUMOUR / A": [
            {
              station: "BACHINGOU",
              voters: 577
            },
            {
              station: "GUIMASSAI",
              voters: 577
            },
            {
              station: "MOUMOUR",
              voters: 2308
            },
            {
              station: "MOUPALA",
              voters: 577
            },
            {
              station: "MOUSSOUDA",
              voters: 577
            },
          ],
          "ECOLE PUBLIQUE DE PAZANI / A": [
            {
              station: "DALIMAO",
              voters: 310
            },
            {
              station: "DARSAN",
              voters: 310
            },
            {
              station: "DOUKA",
              voters: 310
            },
            {
              station: "LORO",
              voters: 310
            },
            {
              station: "GADA",
              voters: 310
            },
            {
              station: "MAYEL",
              voters: 310
            },
            {
              station: "MADINA",
              voters: 310
            },
            {
              station: "GORDI",
              voters: 310
            },
            {
              station: "PAZANI",
              voters: 620
            },
          ],
          "ECOLE PUBLIQUE DE PETENE / A": [
            {
              station: "PETENE",
              voters: 980
            },
          ],
          "ECOLE PUBLIQUE DE POUDAMA / A": [
            {
              station: "DIBAZAO",
              voters: 189
            },
            {
              station: "POUDAMA",
              voters: 189
            },
            {
              station: "MBAMA",
              voters: 189
            },
            {
              station: "YAWARDE",
              voters: 189
            },
          ],
          "ECOLE PUBLIQUE DE POUHORE / A": [
            {
              station: "POUHORE",
              voters: 825
            },
            {
              station: "TEPOULSELE",
              voters: 275
            },
            {
              station: "ZAKOE",
              voters: 275
            },
          ],
          "ECOLE PUBLIQUE DE POUKEBI / A": [
            {
              station: "DOUGOY",
              voters: 368
            },
            {
              station: "POUKEBI",
              voters: 736
            },
            {
              station: "MOURZIRE",
              voters: 368
            },
            {
              station: "POUKKEBI",
              voters: 368
            },
          ],
          "ECOLE PUBLIQUE DE ROUMDE / A": [
            {
              station: "ROUMDE",
              voters: 376
            },
          ],
          "ECOLE PUBLIQUE DE SIRLAWE / A": [
            {
              station: "KOULA",
              voters: 595
            },
            {
              station: "SIRLAWE",
              voters: 690
            },
            {
              station: "YOUKRI",
              voters: 345
            },
          ],
          "ECOLE PUBLIQUE DE TCHABEYEL / A": [
            {
              station: "TCHABEYEL",
              voters: 473
            },
          ],
          "ECOLE PUBLIQUE DE TCHEODE / A": [
            {
              station: "TCHEODE",
              voters: 1780
            },
            {
              station: "KESSOUM",
              voters: 356
            },
            {
              station: "TIPILI",
              voters: 356
            },
            {
              station: "GUEHAM",
              voters: 356
            },
          ],
          "ECOLE PUBLIQUE DE TIBIRI / A": [
            {
              station: "POMLA",
              voters: 309
            },
            {
              station: "POUZOUARE",
              voters: 309
            },
            {
              station: "TIBIRI",
              voters: 309
            },
            {
              station: "YOLDE",
              voters: 309
            },
          ],
          "ECOLE PUBLIQUE DE VAZA / A": [
            {
              station: "METCHED",
              voters: 353
            },
            {
              station: "VAZA",
              voters: 706
            },
          ],
          "ECOLE PUBLIQUE DE ZAKLANG / A": [
            {
              station: "DAOUSSAN",
              voters: 342
            },
            {
              station: "MOURHOURI",
              voters: 2269
            },
            {
              station: "PILZIMIRI",
              voters: 342
            },
          ],
          "ECOLE PUBLIQUE DE ZASSINRI / A": [
            {
              station: "ZASSINRI",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE ZOUANA / A": [
            {
              station: "BISSIE",
              voters: 376
            },
            {
              station: "GAPRING",
              voters: 1050
            },
            {
              station: "KIDIE",
              voters: 376
            },
            {
              station: "GOUSSOR",
              voters: 713
            },
            {
              station: "YANG",
              voters: 1251
            },
            {
              station: "ZOUANA",
              voters: 752
            },
            {
              station: "MOURTONRI",
              voters: 942
            },
          ],
          "ECOLE PUBLIQUE DE ZOUZOUI / A": [
            {
              station: "GOUI",
              voters: 775
            },
            {
              station: "MEDEGUERE",
              voters: 775
            },
            {
              station: "ZOUZOUI",
              voters: 3100
            },
            {
              station: "WETELE",
              voters: 775
            },
          ],
          "ESPLANADE CHEFFEREIR SOKOY / A": [
            {
              station: "SOKOY",
              voters: 292
            },
          ],
          "ESPLANADE CHEFFERIE DE DJAFADO / A": [
            {
              station: "DJAFADO",
              voters: 78
            },
            {
              station: "MOUDOUP",
              voters: 78
            },
          ],
          "ESPLANADE CHEFFERIE DE GUEBARE / A": [
            {
              station: "DJABIRE",
              voters: 214
            },
            {
              station: "DOUWOIRA",
              voters: 214
            },
            {
              station: "GUEBARE",
              voters: 214
            },
          ],
          "ESPLANADE CHEFFERIE DE PILDJIMIRI / A": [
            {
              station: "MBODI",
              voters: 265
            },
            {
              station: "PILDJIMIRI",
              voters: 265
            },
          ],
          "ESPLANADE CHEFFERIE WINDEO / A": [
            {
              station: "DJARENGOL",
              voters: 427
            },
            {
              station: "KOUSSOU",
              voters: 427
            },
            {
              station: "HAOUSSA",
              voters: 427
            },
            {
              station: "WAFFANGO",
              voters: 427
            },
            {
              station: "WINDEO",
              voters: 854
            },
            {
              station: "YOLDEO",
              voters: 427
            },
          ],
          "LYCEE CLASSIQUE ET MODERNE DE KAELE /  A": [
            {
              station: "ADMINISTRATIF",
              voters: 845
            },
          ],
          "LYCEE DE BOBOYO / A": [
            {
              station: "KILIMAYDAH",
              voters: 210
            },
            {
              station: "PILZEMAI",
              voters: 210
            },
            {
              station: "POUDJESOUA",
              voters: 210
            },
          ],
          "LYCEE DE DJIDOMA / A": [
            {
              station: "BARKOY",
              voters: 381
            },
            {
              station: "DIGUERA",
              voters: 381
            },
            {
              station: "DOUMDERE",
              voters: 381
            },
            {
              station: "WAPPI",
              voters: 899
            },
            {
              station: "POUWAH",
              voters: 381
            },
            {
              station: "DJIDOMA",
              voters: 1515
            },
            {
              station: "ZALIE",
              voters: 381
            },
          ],
          "LYCEE DE LARA / A": [
            {
              station: "POUSSOUPOURE",
              voters: 276
            },
            {
              station: "POUTIDINRI",
              voters: 276
            },
            {
              station: "ZABARAGE",
              voters: 276
            },
          ],
          "LYCEE TECHNIQUE DE KAELE / A": [
            {
              station: "COMPAGNIE",
              voters: 779
            },
            {
              station: "GENDARMERIE",
              voters: 779
            },
            {
              station: "KAELE",
              voters: 5929
            },
            {
              station: "ELF",
              voters: 1913
            },
            {
              station: "POUGOUBOUH",
              voters: 779
            },
          ],
          "MAIRIE KAELE / A": [
            {
              station: "GALLIONRE",
              voters: 489
            },
          ],
        },
        "MINDIF": {
          "BRIGADE DE MINDIF / A": [
            {
              station: "CASERNE",
              voters: 209
            },
            {
              station: "GENDARMERIE",
              voters: 209
            },
          ],
          "COMMUNE DE MINDIF / A": [
            {
              station: "FONCTIONNAIRE",
              voters: 227
            },
            {
              station: "YALDAMRE",
              voters: 1193
            },
          ],
          "ECOLE PUBLIQUE DE BEMBEL / A": [
            {
              station: "BEMBEL",
              voters: 590
            },
            {
              station: "GUAGUIRAYE",
              voters: 590
            },
            {
              station: "TAPAREO",
              voters: 590
            },
          ],
          "ECOLE PUBLIQUE DE DIR / A": [
            {
              station: "BAGARMIRE",
              voters: 653
            },
            {
              station: "DELKAI",
              voters: 1997
            },
            {
              station: "DIR",
              voters: 1959
            },
            {
              station: "DOMAYO",
              voters: 3848
            },
            {
              station: "GUIZIGA",
              voters: 1092
            },
            {
              station: "MOUDANG",
              voters: 1997
            },
            {
              station: "FAKAFAOUROU",
              voters: 653
            },
            {
              station: "OURO",
              voters: 8294
            },
            {
              station: "BAKARI",
              voters: 653
            },
            {
              station: "MAYAOU",
              voters: 653
            },
            {
              station: "YILLAGARE",
              voters: 653
            },
          ],
          "ECOLE PUBLIQUE DE DIRLAI / A": [
            {
              station: "DIRLAI",
              voters: 179
            },
          ],
          "ECOLE PUBLIQUE DE DJAMBOUTOU / A": [
            {
              station: "DJAMBOUTOU",
              voters: 211
            },
          ],
          "ECOLE PUBLIQUE DE DJAMHOURA / A": [
            {
              station: "DJAMHOURA",
              voters: 292
            },
            {
              station: "SABERE",
              voters: 292
            },
          ],
          "ECOLE PUBLIQUE DE DJANGAL / A": [
            {
              station: "DJANGAL",
              voters: 878
            },
            {
              station: "FOULBE",
              voters: 796
            },
            {
              station: "WALASSING",
              voters: 439
            },
          ],
          "ECOLE PUBLIQUE DE DJAPPAI / A": [
            {
              station: "BOUDJOUROU",
              voters: 1131
            },
            {
              station: "DJAPPAI",
              voters: 1131
            },
            {
              station: "DOULDA",
              voters: 1131
            },
            {
              station: "WOURO",
              voters: 1131
            },
            {
              station: "GADA",
              voters: 1131
            },
            {
              station: "GARIEL",
              voters: 1131
            },
            {
              station: "TALLIEL",
              voters: 1131
            },
          ],
          "ECOLE PUBLIQUE DE DJODJONG / A": [
            {
              station: "KESSOUWO",
              voters: 952
            },
            {
              station: "DJODJONG",
              voters: 2181
            },
            {
              station: "MBOULLI",
              voters: 727
            },
            {
              station: "SOULKADOU",
              voters: 727
            },
            {
              station: "YILLAGAWO",
              voters: 727
            },
          ],
          "ECOLE PUBLIQUE DE DOYANG / A": [
            {
              station: "BOURLEO",
              voters: 1344
            },
            {
              station: "BRAZZAVILLE",
              voters: 1344
            },
            {
              station: "DOYANG",
              voters: 2688
            },
            {
              station: "CENTRE",
              voters: 1954
            },
            {
              station: "FAKABOUDJEL",
              voters: 1344
            },
            {
              station: "FETCHARE",
              voters: 1344
            },
            {
              station: "POUDJEZOUA",
              voters: 1344
            },
            {
              station: "POUGGERE",
              voters: 1344
            },
            {
              station: "SONEL",
              voters: 1344
            },
            {
              station: "WOKADOU",
              voters: 1344
            },
            {
              station: "ZOUMAYARE",
              voters: 1344
            },
          ],
          "ECOLE PUBLIQUE DE GAGADJE / A": [
            {
              station: "GAGADJE",
              voters: 357
            },
            {
              station: "NGARWA",
              voters: 357
            },
            {
              station: "ZIGAO",
              voters: 357
            },
          ],
          "ECOLE PUBLIQUE DE HARDEO GAGUE / A": [
            {
              station: "GAGUE",
              voters: 205
            },
            {
              station: "MANA",
              voters: 205
            },
          ],
          "ECOLE PUBLIQUE DE HOPPO / A": [
            {
              station: "HOPPO",
              voters: 610
            },
            {
              station: "LIGAZANG",
              voters: 610
            },
            {
              station: "SABOUNGARI",
              voters: 610
            },
          ],
          "ECOLE PUBLIQUE DE LOUBOUR / A": [
            {
              station: "DJEDJEOU",
              voters: 1162
            },
            {
              station: "LOUBOUR",
              voters: 1162
            },
            {
              station: "MEDJENG",
              voters: 1162
            },
            {
              station: "TOUTOUROU",
              voters: 1162
            },
            {
              station: "ZALAWO",
              voters: 1162
            },
          ],
          "ECOLE PUBLIQUE DE MAOUDINE / A": [
            {
              station: "BABBA",
              voters: 412
            },
            {
              station: "SAWAWO",
              voters: 412
            },
            {
              station: "TAMBADJAM",
              voters: 412
            },
          ],
          "ECOLE PUBLIQUE DE MATFAI / A": [
            {
              station: "DJAGROUM",
              voters: 1175
            },
            {
              station: "DJOGOBE",
              voters: 1175
            },
            {
              station: "MATFAI",
              voters: 2752
            },
            {
              station: "KERRARE",
              voters: 1175
            },
            {
              station: "MAOUDIWO",
              voters: 1175
            },
            {
              station: "MASSA",
              voters: 1175
            },
            {
              station: "NANIKALOU",
              voters: 1175
            },
          ],
          "ECOLE PUBLIQUE DE MBOBORA / A": [
            {
              station: "MBOBORA",
              voters: 243
            },
          ],
          "ECOLE PUBLIQUE DE MEMEYEL / A": [
            {
              station: "MEMEYEL",
              voters: 556
            },
            {
              station: "SYLLIARE",
              voters: 556
            },
          ],
          "ECOLE PUBLIQUE DE MENDEO / A": [
            {
              station: "MENDEO",
              voters: 346
            },
          ],
          "ECOLE PUBLIQUE DE MINDIF 1 / A": [
            {
              station: "DASGARRE",
              voters: 845
            },
            {
              station: "GAIGAIRE",
              voters: 845
            },
            {
              station: "GOSSINGO",
              voters: 845
            },
            {
              station: "GUILIRWO",
              voters: 845
            },
            {
              station: "NGOURMARI",
              voters: 845
            },
            {
              station: "DOLLE",
              voters: 845
            },
            {
              station: "SARARE",
              voters: 845
            },
          ],
          "ECOLE PUBLIQUE DE MINDIF 2 / A": [
            {
              station: "GUILBADARE",
              voters: 966
            },
            {
              station: "1MINDIF",
              voters: 966
            },
            {
              station: "LIPORO",
              voters: 966
            },
            {
              station: "MAGAOURE",
              voters: 966
            },
            {
              station: "SEBORE",
              voters: 966
            },
          ],
          "ECOLE PUBLIQUE DE MINDIF 3 / A": [
            {
              station: "BONGOR",
              voters: 600
            },
            {
              station: "KATCHEL",
              voters: 600
            },
            {
              station: "MBOLOWA",
              voters: 600
            },
            {
              station: "SIROTORE",
              voters: 1012
            },
            {
              station: "MINDIF",
              voters: 4019
            },
            {
              station: "ZOKOLE",
              voters: 600
            },
          ],
          "ECOLE PUBLIQUE DE MODJOMBODI / A": [
            {
              station: "MODJOMBODI",
              voters: 719
            },
          ],
          "ECOLE PUBLIQUE DE MOGOM / A": [
            {
              station: "DALARE",
              voters: 1151
            },
            {
              station: "GADORE",
              voters: 2326
            },
            {
              station: "MOGOM",
              voters: 4009
            },
            {
              station: "GUIZIGARE",
              voters: 1151
            },
            {
              station: "HARDEO",
              voters: 3288
            },
            {
              station: "MAYEL",
              voters: 1878
            },
            {
              station: "KOLLE",
              voters: 1151
            },
            {
              station: "MBAMGUEL",
              voters: 1151
            },
            {
              station: "TOUNDOUROUM",
              voters: 1151
            },
          ],
          "ECOLE PUBLIQUE DE OURO BOUNNE / A": [
            {
              station: "GABANI",
              voters: 732
            },
            {
              station: "BOUNNE",
              voters: 732
            },
            {
              station: "GALDIMA",
              voters: 732
            },
            {
              station: "GUIDE",
              voters: 732
            },
          ],
          "ECOLE PUBLIQUE DE PARIS / A": [
            {
              station: "PARIS",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE DE TOWDEWO MATFAI / A": [
            {
              station: "DJOYEWO",
              voters: 804
            },
            {
              station: "ABDOULAYE",
              voters: 402
            },
            {
              station: "ADJI",
              voters: 402
            },
            {
              station: "TOWDEWO",
              voters: 402
            },
          ],
          "ECOLE PUBLIQUE DE YAKANG / A": [
            {
              station: "BANI",
              voters: 2854
            },
            {
              station: "DJOUTAWANDE",
              voters: 1427
            },
            {
              station: "DOUBAZAOU",
              voters: 1983
            },
            {
              station: "YAKANG",
              voters: 4488
            },
            {
              station: "KARALLOULE",
              voters: 1427
            },
            {
              station: "NGABAI",
              voters: 1427
            },
            {
              station: "NGARAWO",
              voters: 2154
            },
            {
              station: "BAH",
              voters: 1427
            },
            {
              station: "HEBBE",
              voters: 1427
            },
            {
              station: "PADAKONDEL",
              voters: 1427
            },
            {
              station: "PATTOUGA",
              voters: 2854
            },
            {
              station: "SARMOUA",
              voters: 2854
            },
            {
              station: "GARRE",
              voters: 7606
            },
          ],
          "ESPLANADE CHEF. MOBONO YAKANG / A": [
            {
              station: "MOBONO",
              voters: 207
            },
          ],
          "ESPLANADE CHEFFERIE DE GAIGAI / A": [
            {
              station: "FOULAYE",
              voters: 470
            },
            {
              station: "GAIGAI",
              voters: 470
            },
            {
              station: "NANIWARMA",
              voters: 470
            },
            {
              station: "NGOULMOUDI",
              voters: 470
            },
          ],
          "ESPLANADE CHEFFERIE DE KESSOUWO / A": [
            {
              station: "MAOUDINE",
              voters: 1686
            },
            {
              station: "TCHAWAKE",
              voters: 225
            },
            {
              station: "TONDEO",
              voters: 225
            },
          ],
          "ESPLANADE CHEFFERIE DE LARIE / A": [
            {
              station: "LARIE",
              voters: 205
            },
          ],
          "ESPLANADE CHEFFERIE DE NGOUMA / A": [
            {
              station: "DOUFFIRDE",
              voters: 540
            },
            {
              station: "NGOUMA",
              voters: 540
            },
          ],
          "LYCEE DE MINDIF / A": [
            {
              station: "KAGAO",
              voters: 642
            },
            {
              station: "LOUGGA",
              voters: 642
            },
            {
              station: "MANAWATCHI",
              voters: 1369
            },
            {
              station: "WAFANGO",
              voters: 642
            },
            {
              station: "ZADANG",
              voters: 642
            },
          ],
          "LYCEE DE MOGOM / A": [
            {
              station: "MADJAOULA",
              voters: 449
            },
            {
              station: "KAIGAMA",
              voters: 449
            },
            {
              station: "TOWANGO",
              voters: 449
            },
          ],
        },
        "MOULVOUDAYE": {
          "AGAMI MARCHE / A": [
            {
              station: "AGAMI",
              voters: 310
            },
            {
              station: "FOULBE",
              voters: 122
            },
            {
              station: "MOUSGOUM",
              voters: 122
            },
          ],
          "ANCIENNE RESIDENCE SODECOTON BAOUDI  /A": [
            {
              station: "AGALI",
              voters: 761
            },
            {
              station: "BAOUDI",
              voters: 761
            },
            {
              station: "GOUZOUMA-BOUNKA",
              voters: 761
            },
            {
              station: "GOUZOUMA-LAWA",
              voters: 761
            },
            {
              station: "KAFTA",
              voters: 761
            },
            {
              station: "KAMTCHOUKI",
              voters: 1186
            },
            {
              station: "KARAL-BALI",
              voters: 761
            },
            {
              station: "KOTORONKE",
              voters: 761
            },
            {
              station: "TOUPERE",
              voters: 761
            },
            {
              station: "YOLDE",
              voters: 761
            },
          ],
          "COLLEGE D'ENSEIG. SECONDAIRE  GADAMAYO / A": [
            {
              station: "DJAOUSSAKOU",
              voters: 283
            },
            {
              station: "GADAMAYO",
              voters: 283
            },
            {
              station: "MAROGARE",
              voters: 283
            },
            {
              station: "METCHERE",
              voters: 283
            },
            {
              station: "MOULOKOU",
              voters: 283
            },
          ],
          "DEVANT LA MAISON DE ALHADJI BODEDJO /  A": [
            {
              station: "WOILARE",
              voters: 491
            },
          ],
          "ECOLE PUBLIQUE DE DARAM GROUPE I / A": [
            {
              station: "BIBEMI",
              voters: 296
            },
            {
              station: "BLAMBALI",
              voters: 296
            },
            {
              station: "RIBAOU",
              voters: 1195
            },
            {
              station: "DARAM",
              voters: 2146
            },
          ],
          "ECOLE PUBLIQUE DE GUIRLING / A": [
            {
              station: "GUIRLING",
              voters: 375
            },
          ],
          "ECOLE PUBLIQUE DE KADAYE / A": [
            {
              station: "BEIDEIDJI",
              voters: 279
            },
            {
              station: "BONGORYEL",
              voters: 279
            },
            {
              station: "HOURKOUM",
              voters: 279
            },
            {
              station: "KADAYE",
              voters: 279
            },
            {
              station: "LAMOUDOU",
              voters: 279
            },
          ],
          "ECOLE PUBLIQUE DE KATARE / A": [
            {
              station: "AKOIRE",
              voters: 286
            },
            {
              station: "KATARE",
              voters: 851
            },
            {
              station: "MADI",
              voters: 480
            },
          ],
          "ECOLE PUBLIQUE DE KELLE / A": [
            {
              station: "KELEYEL",
              voters: 350
            },
            {
              station: "KELLE",
              voters: 350
            },
            {
              station: "LAINDE",
              voters: 350
            },
            {
              station: "MOUSTAPHAWO",
              voters: 350
            },
          ],
          "ECOLE PUBLIQUE DE KORRE / A": [
            {
              station: "KORRE-HITGO",
              voters: 107
            },
            {
              station: "OURO-LAMIDO",
              voters: 107
            },
            {
              station: "GOUMLAIRE",
              voters: 107
            },
            {
              station: "YOLABALDE",
              voters: 107
            },
          ],
          "ECOLE PUBLIQUE DE MOULVOUDAYE / A": [
            {
              station: "BRIGADE",
              voters: 193
            },
            {
              station: "DJAMBALBARE",
              voters: 193
            },
            {
              station: "POLICE",
              voters: 193
            },
            {
              station: "PRISON",
              voters: 193
            },
          ],
          "ECOLE PUBLIQUE DE SARMAN GOULOUM / A": [
            {
              station: "SARMAN-GOULOUM",
              voters: 360
            },
            {
              station: "WABAROU",
              voters: 360
            },
            {
              station: "WOURO-ARDO",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DE SOULKANDOU-DARAM /  A": [
            {
              station: "MOKOLO",
              voters: 390
            },
            {
              station: "TCHEMTCHEM",
              voters: 390
            },
          ],
          "ECOLE PUBLIQUE DE YOLA-HORLONG / A": [
            {
              station: "BOUZOUEL",
              voters: 484
            },
            {
              station: "DJOUREL",
              voters: 484
            },
            {
              station: "LOUGGA-BOULOULI",
              voters: 484
            },
            {
              station: "PALI",
              voters: 484
            },
            {
              station: "PIYO",
              voters: 484
            },
            {
              station: "YOLA",
              voters: 789
            },
          ],
          "ECOLE PUBLIQUE GROUPE I DE DARAM / A": [
            {
              station: "DAMAYAO-TOUPOURI",
              voters: 190
            },
            {
              station: "DANMIGRI",
              voters: 190
            },
            {
              station: "FORLAMI",
              voters: 190
            },
          ],
          "ESPL. CHEFFERIE DE  MOULVOUDAYE-TOUPOURI / A": [
            {
              station: "GAYA",
              voters: 142
            },
            {
              station: "TOUPOUI",
              voters: 142
            },
          ],
          "ESPLANADE CHEF. GOUDOUM-GOUDOUM / A": [
            {
              station: "DANGALA",
              voters: 667
            },
            {
              station: "GOUDOUM-GOUDOUM",
              voters: 667
            },
            {
              station: "GARRE",
              voters: 1119
            },
            {
              station: "MIBA",
              voters: 667
            },
            {
              station: "BARIKI",
              voters: 944
            },
            {
              station: "WOURO-GOULNA-FOULBE",
              voters: 667
            },
            {
              station: "WOURO-GOULNA-MOUSGOUM",
              voters: 667
            },
          ],
          "ESPLANADE CHEF. HORLONG -GARRE / A": [
            {
              station: "DOMAYO-FOULBE",
              voters: 622
            },
            {
              station: "HORLONG",
              voters: 622
            },
            {
              station: "DOMAYO-MOUDANG",
              voters: 622
            },
            {
              station: "DOMAYO-TOUPOURI",
              voters: 622
            },
            {
              station: "HORLONG-GARRE",
              voters: 1866
            },
            {
              station: "MBOULLA",
              voters: 622
            },
            {
              station: "IBBI",
              voters: 622
            },
            {
              station: "PATI-PIYO",
              voters: 622
            },
            {
              station: "SAGAMARE",
              voters: 622
            },
            {
              station: "TCHAKAMADJE",
              voters: 725
            },
            {
              station: "TOUMBADJAM",
              voters: 622
            },
          ],
          "ESPLANADE CHEF. SOULKANDOU-KOLARA /  A": [
            {
              station: "DJERDJERENGUEL",
              voters: 183
            },
            {
              station: "GABANWO",
              voters: 183
            },
            {
              station: "SOULKANDOU",
              voters: 573
            },
            {
              station: "KOLARA",
              voters: 359
            },
          ],
          "ESPLANADE CHEFFERIE DE  SOUDOU-WOROU / A": [
            {
              station: "SOUDOU-WOROU",
              voters: 214
            },
            {
              station: "TOUMOUL-BABA",
              voters: 214
            },
            {
              station: "TOUMOUL-GADJALOU",
              voters: 214
            },
          ],
          "ESPLANADE CHEFFERIE DE AGALIRE / A": [
            {
              station: "AGALIRE",
              voters: 664
            },
          ],
          "ESPLANADE CHEFFERIE DE AGOYO / A": [
            {
              station: "AGOYO",
              voters: 630
            },
            {
              station: "AGOYO-MOUSGOUM",
              voters: 315
            },
            {
              station: "AGOYO-TOUPOURI",
              voters: 315
            },
            {
              station: "HARDEWO-MOUSGOUM",
              voters: 381
            },
            {
              station: "MAHEL",
              voters: 315
            },
          ],
          "ESPLANADE CHEFFERIE DE BAKNAI / A": [
            {
              station: "BAKNAI",
              voters: 501
            },
            {
              station: "BAKNAI-GOLVO",
              voters: 501
            },
            {
              station: "DABALE",
              voters: 501
            },
            {
              station: "DJIDDELWO",
              voters: 501
            },
            {
              station: "KERDENYEL",
              voters: 501
            },
          ],
          "ESPLANADE CHEFFERIE DE BANKA MODI / A": [
            {
              station: "BANKA",
              voters: 345
            },
            {
              station: "OURO-BELLO",
              voters: 345
            },
            {
              station: "TOUPOURI",
              voters: 345
            },
          ],
          "ESPLANADE CHEFFERIE DE BOURLOUM / A": [
            {
              station: "BOURLOUM",
              voters: 392
            },
            {
              station: "DJALINGO",
              voters: 392
            },
          ],
          "ESPLANADE CHEFFERIE DE DANGARIA / A": [
            {
              station: "BAMGUEL",
              voters: 135
            },
            {
              station: "DANGARIA",
              voters: 135
            },
            {
              station: "SIRLAWE",
              voters: 135
            },
          ],
          "ESPLANADE CHEFFERIE DE DARAM-GARRE /  A": [
            {
              station: "BILHORE",
              voters: 730
            },
            {
              station: "DAMAYAO-FOULBE",
              voters: 730
            },
            {
              station: "DARAM-GARRE",
              voters: 730
            },
            {
              station: "DOMAYEL",
              voters: 730
            },
            {
              station: "LOUDGOUDOUMWO",
              voters: 730
            },
            {
              station: "SANRINWA",
              voters: 730
            },
            {
              station: "WIBIWA",
              voters: 906
            },
          ],
          "ESPLANADE CHEFFERIE DE DOUGANI / A": [
            {
              station: "DOUGANI",
              voters: 128
            },
            {
              station: "MADIARE",
              voters: 128
            },
          ],
          "ESPLANADE CHEFFERIE DE DOUKKA / A": [
            {
              station: "BELI-KOLE",
              voters: 341
            },
            {
              station: "DAWARIGA",
              voters: 341
            },
            {
              station: "DOUKKA",
              voters: 682
            },
            {
              station: "KATARKO",
              voters: 341
            },
            {
              station: "LABALIGA",
              voters: 1071
            },
            {
              station: "MANGADASSA",
              voters: 341
            },
            {
              station: "PATAWAL",
              voters: 341
            },
            {
              station: "TAMBADJAM",
              voters: 341
            },
            {
              station: "TCHOUKOUGA",
              voters: 341
            },
          ],
          "ESPLANADE CHEFFERIE DE GADJIA / A": [
            {
              station: "BADADJI",
              voters: 606
            },
            {
              station: "BODJONRE",
              voters: 606
            },
            {
              station: "DOUMOUROUWO",
              voters: 606
            },
            {
              station: "GADJIA",
              voters: 606
            },
            {
              station: "MAITOUFOUING",
              voters: 606
            },
            {
              station: "TCHOUDIGUEL",
              voters: 606
            },
          ],
          "ESPLANADE CHEFFERIE DE GOLOMBOUROU  /A": [
            {
              station: "GOLOMBOUROU",
              voters: 286
            },
            {
              station: "GUIDIGUIDIROU",
              voters: 286
            },
          ],
          "ESPLANADE CHEFFERIE DE GOUMLAYE / A": [
            {
              station: "GOUMLAYE",
              voters: 370
            },
            {
              station: "MAPARI",
              voters: 370
            },
          ],
          "ESPLANADE CHEFFERIE DE GUIDOUA / A": [
            {
              station: "GUIDOUA",
              voters: 456
            },
            {
              station: "MAOUKA",
              voters: 456
            },
            {
              station: "NGOUMA",
              voters: 456
            },
            {
              station: "SAKKAWO",
              voters: 456
            },
          ],
          "ESPLANADE CHEFFERIE DE GUILDIF / A": [
            {
              station: "DAMRAKI",
              voters: 294
            },
            {
              station: "DJOYEWO",
              voters: 294
            },
            {
              station: "GUILDIF",
              voters: 294
            },
            {
              station: "KALMATAWO",
              voters: 294
            },
          ],
          "ESPLANADE CHEFFERIE DE GUIRLING / A": [
            {
              station: "MBIDFIRE",
              voters: 114
            },
            {
              station: "MOUNFAPNE",
              voters: 114
            },
          ],
          "ESPLANADE CHEFFERIE DE HOUTFIRE / A": [
            {
              station: "DODJIRE",
              voters: 190
            },
            {
              station: "HOUTFIRE",
              voters: 190
            },
          ],
          "ESPLANADE CHEFFERIE DE KADAYE / A": [
            {
              station: "ALFI",
              voters: 190
            },
            {
              station: "DJADJEL",
              voters: 190
            },
            {
              station: "GAGUIREY",
              voters: 190
            },
            {
              station: "KADAYE-GARRE",
              voters: 190
            },
            {
              station: "LAMMOUDOU",
              voters: 190
            },
          ],
          "ESPLANADE CHEFFERIE DE KARABALDE / A": [
            {
              station: "DAKELWO",
              voters: 240
            },
            {
              station: "KARABALDE",
              voters: 240
            },
            {
              station: "LOUGGA",
              voters: 240
            },
            {
              station: "NGASKA",
              voters: 240
            },
            {
              station: "BOUS",
              voters: 240
            },
          ],
          "ESPLANADE CHEFFERIE DE KASSAI / A": [
            {
              station: "GAMDILIM",
              voters: 240
            },
            {
              station: "KASSAI",
              voters: 240
            },
            {
              station: "KASSAI-BARIYAM",
              voters: 240
            },
          ],
          "ESPLANADE CHEFFERIE DE KAYA / A": [
            {
              station: "BADANARE",
              voters: 421
            },
            {
              station: "GALARE",
              voters: 421
            },
            {
              station: "KATCHATCHIA",
              voters: 421
            },
            {
              station: "KAYA-GARRE",
              voters: 421
            },
            {
              station: "LOPPERE",
              voters: 421
            },
            {
              station: "MANDARAWO",
              voters: 421
            },
            {
              station: "SIRATARE",
              voters: 421
            },
          ],
          "ESPLANADE CHEFFERIE DE KERDENG / A": [
            {
              station: "KERDENG",
              voters: 168
            },
            {
              station: "KERDENG-FISSOU",
              voters: 168
            },
            {
              station: "KODOHO",
              voters: 168
            },
          ],
          "ESPLANADE CHEFFERIE DE KOBO-GARRE / A": [
            {
              station: "KOBO",
              voters: 2830
            },
            {
              station: "BIKOBO",
              voters: 736
            },
            {
              station: "DOMKOBO",
              voters: 736
            },
            {
              station: "KOBO-GARRE",
              voters: 736
            },
            {
              station: "KOBO-WINDE",
              voters: 736
            },
            {
              station: "LOUGGOL",
              voters: 736
            },
            {
              station: "MAYEL",
              voters: 1032
            },
            {
              station: "KODJOLE",
              voters: 1032
            },
            {
              station: "OURO",
              voters: 2247
            },
            {
              station: "DJABBI",
              voters: 736
            },
            {
              station: "YAMEDA",
              voters: 982
            },
          ],
          "ESPLANADE CHEFFERIE DE KOFARE / A": [
            {
              station: "FOURTOUBALI",
              voters: 567
            },
            {
              station: "KODJELEWO",
              voters: 567
            },
            {
              station: "KOFARE",
              voters: 567
            },
            {
              station: "GOURAMA",
              voters: 567
            },
            {
              station: "WADJA-WADJA",
              voters: 567
            },
            {
              station: "YANGOM-MOUSGOUM",
              voters: 567
            },
            {
              station: "YANGOM-TOUPOURI",
              voters: 567
            },
          ],
          "ESPLANADE CHEFFERIE DE KOLARA-GARRE /  A": [
            {
              station: "BOUZOU-MBELA",
              voters: 515
            },
            {
              station: "DOMAYO-KOLARA",
              voters: 515
            },
            {
              station: "KOLARA-GARRE",
              voters: 515
            },
          ],
          "ESPLANADE CHEFFERIE DE KORHO / A": [
            {
              station: "GUEBZE",
              voters: 226
            },
            {
              station: "KORHO",
              voters: 226
            },
            {
              station: "TAILE",
              voters: 226
            },
          ],
          "ESPLANADE CHEFFERIE DE KORRE-GARRE /  A": [
            {
              station: "KORRE-GARRE",
              voters: 323
            },
            {
              station: "TCHOUFIWO",
              voters: 323
            },
          ],
          "ESPLANADE CHEFFERIE DE LAMORDE / A": [
            {
              station: "LAMORDE",
              voters: 289
            },
          ],
          "ESPLANADE CHEFFERIE DE LOUMORE / A": [
            {
              station: "LOUMORE",
              voters: 289
            },
            {
              station: "MOULVOUDAYE",
              voters: 504
            },
          ],
          "ESPLANADE CHEFFERIE DE MASSA I / A": [
            {
              station: "GONAYE-DANSALA",
              voters: 486
            },
            {
              station: "GONAYE-GATCHOU",
              voters: 486
            },
            {
              station: "MASSA",
              voters: 892
            },
          ],
          "ESPLANADE CHEFFERIE DE MAYEL-BADJI / A": [
            {
              station: "BOULAMBALI",
              voters: 438
            },
            {
              station: "KORAYEL",
              voters: 438
            },
            {
              station: "MAYEL-BADJI",
              voters: 438
            },
            {
              station: "MBICHARE",
              voters: 438
            },
          ],
          "ESPLANADE CHEFFERIE DE MBABROURE / A": [
            {
              station: "GOLONDAI",
              voters: 194
            },
            {
              station: "KOPTO",
              voters: 194
            },
            {
              station: "MBABROURE",
              voters: 194
            },
          ],
          "ESPLANADE CHEFFERIE DE MODITANNE / A": [
            {
              station: "BAGAGNE",
              voters: 339
            },
            {
              station: "KAKALARE",
              voters: 339
            },
            {
              station: "KESSEL",
              voters: 339
            },
            {
              station: "MODITANNE",
              voters: 339
            },
          ],
          "ESPLANADE CHEFFERIE DE NDONG / A": [
            {
              station: "ARABI",
              voters: 259
            },
            {
              station: "BALANI",
              voters: 1747
            },
            {
              station: "NDONG",
              voters: 777
            },
            {
              station: "DJAOULANI",
              voters: 259
            },
            {
              station: "NDONGYEL",
              voters: 259
            },
          ],
          "ESPLANADE CHEFFERIE DE NDOUMGA / A": [
            {
              station: "KONKEO",
              voters: 425
            },
            {
              station: "MBANWERE",
              voters: 425
            },
            {
              station: "NDINWAL",
              voters: 425
            },
            {
              station: "NDOUMGA",
              voters: 425
            },
          ],
          "ESPLANADE CHEFFERIE DE OURO-BABARARI  /A": [
            {
              station: "OURO-ALHADJI",
              voters: 183
            },
            {
              station: "OURO-BABARARI",
              voters: 183
            },
            {
              station: "OURO-GAOU",
              voters: 183
            },
          ],
          "ESPLANADE CHEFFERIE DE OURO-BIRI / A": [
            {
              station: "MADJANGADI",
              voters: 277
            },
            {
              station: "OURO-ABBA",
              voters: 277
            },
            {
              station: "ILALI",
              voters: 277
            },
            {
              station: "OURO-BIRI",
              voters: 554
            },
          ],
          "ESPLANADE CHEFFERIE DE OURO-GARRE / A": [
            {
              station: "OURO-GARRE",
              voters: 130
            },
            {
              station: "DJONGARIWO",
              voters: 130
            },
            {
              station: "LOUGGA-DJAPTOWO",
              voters: 130
            },
            {
              station: "WOURO-GARRE",
              voters: 130
            },
            {
              station: "WOURO-YAYA",
              voters: 130
            },
          ],
          "ESPLANADE CHEFFERIE DE PADALA / A": [
            {
              station: "PADALA",
              voters: 308
            },
            {
              station: "TCHOFFI-FOULBE",
              voters: 308
            },
            {
              station: "TCHOFFI-TOUPOURI",
              voters: 308
            },
            {
              station: "WOURO-DAWADI",
              voters: 308
            },
          ],
          "ESPLANADE CHEFFERIE DE SABBODJIGA / A": [
            {
              station: "DJAMBOUTOU",
              voters: 525
            },
            {
              station: "LOUGGOL-DANEWOL",
              voters: 525
            },
            {
              station: "MAYO-WOUDO",
              voters: 525
            },
            {
              station: "SABBODJIGA-FOULBE",
              voters: 525
            },
          ],
          "ESPLANADE CHEFFERIE DE TCHAKAMADJE /  A": [
            {
              station: "TOUSSAINT",
              voters: 103
            },
          ],
          "ESPLANADE CHEFFERIE DE TCHOFFI DJABBE  /A": [
            {
              station: "BADJAM",
              voters: 215
            },
            {
              station: "GOBOULO",
              voters: 215
            },
            {
              station: "TCHOFFI",
              voters: 215
            },
            {
              station: "DJABBE",
              voters: 215
            },
          ],
          "ESPLANADE CHEFFERIE DE TENRENG / A": [
            {
              station: "TENRENG",
              voters: 425
            },
            {
              station: "TITCHEOU",
              voters: 425
            },
          ],
          "ESPLANADE CHEFFERIE DE WOILARE / A": [
            {
              station: "WOURO-BELLO-FOULBE",
              voters: 262
            },
          ],
          "ESPLANADE CHEFFERIE DE ZOKOTOI / A": [
            {
              station: "BIRNIGUEL",
              voters: 161
            },
            {
              station: "HARDEWO",
              voters: 161
            },
            {
              station: "TAOUROU",
              voters: 161
            },
            {
              station: "ZOKOTOI",
              voters: 161
            },
          ],
          "HOHORE DEVANT LA MAISON D'ALHADJI ISSA  /A": [
            {
              station: "HOHORE",
              voters: 406
            },
          ],
          "MARCHE DE AGAMI / A": [
            {
              station: "HARDEWO-TOUPOURI",
              voters: 66
            },
          ],
          "MARCHE DE DANMAI / A": [
            {
              station: "DANMAI",
              voters: 738
            },
            {
              station: "DJAMAN",
              voters: 246
            },
            {
              station: "DJAOLANI",
              voters: 246
            },
          ],
          "MARCHE DE LOUGGUE / A": [
            {
              station: "LAWANG",
              voters: 238
            },
            {
              station: "LOUGGUE",
              voters: 238
            },
            {
              station: "MBISSEO",
              voters: 238
            },
            {
              station: "YOUDIRI",
              voters: 238
            },
          ],
          "MARCHE DE PITOWA / A": [
            {
              station: "PITOWA",
              voters: 176
            },
          ],
          "MARCHE DE YOLA-KEGA / A": [
            {
              station: "LARA",
              voters: 662
            },
            {
              station: "YOLA-KEGA",
              voters: 610
            },
            {
              station: "TIPAYE",
              voters: 305
            },
          ],
          "MARCHE DE YOLAWO / A": [
            {
              station: "YOLAWO",
              voters: 714
            },
            {
              station: "MOGOM",
              voters: 357
            },
          ],
          "MOSQUEE DE ZARIA / A": [
            {
              station: "ZARIA",
              voters: 374
            },
          ],
          "MOSQUEE DJABARMARE / A": [
            {
              station: "BORNOUANG",
              voters: 220
            },
            {
              station: "DAMBAI",
              voters: 220
            },
          ],
        },
        "MOUTOURWA": {
          "ECOLE BILINGUE DE MOUTOURWA / A": [
            {
              station: "BONGOLORI",
              voters: 1354
            },
            {
              station: "ZAMAGA",
              voters: 778
            },
          ],
          "ECOLE PUBLIQUE DE BADJAVA / A": [
            {
              station: "BADJAVA",
              voters: 1997
            },
            {
              station: "DJOUMRI",
              voters: 882
            },
            {
              station: "MASSAI",
              voters: 1289
            },
          ],
          "ECOLE PUBLIQUE DE BARAWA CHEFFERIE /  A": [
            {
              station: "BARAWA",
              voters: 358
            },
            {
              station: "CHEF",
              voters: 125
            },
            {
              station: "BECHIIEW",
              voters: 125
            },
            {
              station: "DIGUILGUI",
              voters: 125
            },
          ],
          "ECOLE PUBLIQUE DE BARAWA-LADDE / A": [
            {
              station: "BARAWA-LADDE",
              voters: 1092
            },
            {
              station: "TALLA",
              voters: 13101
            },
            {
              station: "FOULBE",
              voters: 1696
            },
            {
              station: "MAI",
              voters: 273
            },
            {
              station: "LAWAN",
              voters: 273
            },
            {
              station: "MBANA",
              voters: 273
            },
            {
              station: "MOUTOURWA",
              voters: 471
            },
            {
              station: "TOUPOURI",
              voters: 1796
            },
          ],
          "ECOLE PUBLIQUE DE BROUI / A": [
            {
              station: "DOUNGOUL",
              voters: 478
            },
            {
              station: "MIKIN",
              voters: 478
            },
            {
              station: "MOBIGAD",
              voters: 478
            },
            {
              station: "NA'ABA",
              voters: 478
            },
            {
              station: "SIBIZI",
              voters: 478
            },
            {
              station: "SITAPAS",
              voters: 657
            },
            {
              station: "BROUI",
              voters: 478
            },
          ],
          "ECOLE PUBLIQUE DE DAMAI / A": [
            {
              station: "BOUDOUGOUM",
              voters: 720
            },
            {
              station: "DAMAI",
              voters: 720
            },
            {
              station: "WOURO",
              voters: 2913
            },
            {
              station: "DADA",
              voters: 720
            },
          ],
          "ECOLE PUBLIQUE DE DOURDOUM / A": [
            {
              station: "DOURDOUM",
              voters: 154
            },
          ],
          "ECOLE PUBLIQUE DE GANAHA / A": [
            {
              station: "GANAHA",
              voters: 244
            },
            {
              station: "TAHAY",
              voters: 244
            },
          ],
          "ECOLE PUBLIQUE DE GAZAD / A": [
            {
              station: "DJABAKOULI",
              voters: 212
            },
            {
              station: "SABERE",
              voters: 212
            },
            {
              station: "GOUDI",
              voters: 589
            },
            {
              station: "MOSTIDA",
              voters: 212
            },
          ],
          "ECOLE PUBLIQUE DE GOLOM / A": [
            {
              station: "DJIGUIMI",
              voters: 269
            },
            {
              station: "GOLOM",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE DE KALAF / A": [
            {
              station: "GUIDAR",
              voters: 314
            },
            {
              station: "MOKOLO",
              voters: 314
            },
            {
              station: "KALAF",
              voters: 628
            },
          ],
          "ECOLE PUBLIQUE DE LAF / A": [
            {
              station: "DOUBAZAO",
              voters: 2164
            },
            {
              station: "LAF",
              voters: 1480
            },
            {
              station: "HOUR",
              voters: 740
            },
            {
              station: "MARVA",
              voters: 740
            },
            {
              station: "CAMP",
              voters: 740
            },
            {
              station: "SABONGARI",
              voters: 740
            },
          ],
          "ECOLE PUBLIQUE DE LALANG / A": [
            {
              station: "LALANG",
              voters: 814
            },
            {
              station: "GAVIAN",
              voters: 407
            },
            {
              station: "AKITA",
              voters: 407
            },
            {
              station: "BIGAD",
              voters: 407
            },
            {
              station: "MADANGOAS",
              voters: 407
            },
            {
              station: "MAIBOU",
              voters: 407
            },
          ],
          "ECOLE PUBLIQUE DE MAYEL-GUINADJI / A": [
            {
              station: "DJAOURO",
              voters: 279
            },
            {
              station: "BABA",
              voters: 279
            },
            {
              station: "GADA-MAYO",
              voters: 279
            },
            {
              station: "LAMORDE",
              voters: 279
            },
            {
              station: "LOPERE",
              voters: 279
            },
            {
              station: "MAYEL-GUINADJI",
              voters: 279
            },
            {
              station: "TACHA",
              voters: 279
            },
          ],
          "ECOLE PUBLIQUE DE MAYEL-NGAIMA / A": [
            {
              station: "MAYEL-NGAIMA",
              voters: 278
            },
          ],
          "ECOLE PUBLIQUE DE MISSILIA / A": [
            {
              station: "BAMA",
              voters: 378
            },
            {
              station: "GAVALAI",
              voters: 378
            },
            {
              station: "NGUIROUI",
              voters: 378
            },
            {
              station: "TALA",
              voters: 2372
            },
            {
              station: "DIKOA",
              voters: 1410
            },
          ],
          "ECOLE PUBLIQUE DE MOGONG / A": [
            {
              station: "MOGONG",
              voters: 313
            },
            {
              station: "GOGOYO",
              voters: 313
            },
            {
              station: "DIRDEWO",
              voters: 313
            },
            {
              station: "MOUNG",
              voters: 313
            },
          ],
          "ECOLE PUBLIQUE DE MORDOK / A": [
            {
              station: "BOULDJOU",
              voters: 446
            },
            {
              station: "MOLOMBOR",
              voters: 446
            },
            {
              station: "MORDOK",
              voters: 446
            },
            {
              station: "SAKLI",
              voters: 446
            },
            {
              station: "SINIKOA",
              voters: 446
            },
            {
              station: "WIBA",
              voters: 446
            },
          ],
          "ECOLE PUBLIQUE DE MORONGO / A": [
            {
              station: "DJAORO",
              voters: 353
            },
            {
              station: "TOUMBA",
              voters: 353
            },
            {
              station: "MAGADA",
              voters: 353
            },
            {
              station: "MORONGO",
              voters: 353
            },
          ],
          "ECOLE PUBLIQUE DE MOUDA / A": [
            {
              station: "FONDATION",
              voters: 707
            },
            {
              station: "GOZORO",
              voters: 707
            },
            {
              station: "MATAKAKNA",
              voters: 707
            },
            {
              station: "MOBONO",
              voters: 770
            },
            {
              station: "BIZI",
              voters: 707
            },
            {
              station: "ZIMBIRLI",
              voters: 707
            },
          ],
          "ECOLE PUBLIQUE DE MOUDAWA / A": [
            {
              station: "BANA",
              voters: 198
            },
            {
              station: "MATAKAM",
              voters: 198
            },
            {
              station: "MOUDAWA",
              voters: 198
            },
          ],
          "ECOLE PUBLIQUE DE MOUGOUDOU / A": [
            {
              station: "MOUGOUDOU",
              voters: 430
            },
            {
              station: "MBORORO",
              voters: 215
            },
          ],
          "ECOLE PUBLIQUE DE MOULVA / A": [
            {
              station: "MOULVA",
              voters: 270
            },
          ],
          "ECOLE PUBLIQUE DE MOUSSOURTOUK / A": [
            {
              station: "MOUSSOURTOUK",
              voters: 1078
            },
            {
              station: "HINDIR",
              voters: 539
            },
            {
              station: "NDILEB",
              voters: 539
            },
            {
              station: "KESSOUM",
              voters: 539
            },
          ],
          "ECOLE PUBLIQUE DE MOUTOURWA / A": [
            {
              station: "MOLKOTOKOM",
              voters: 576
            },
            {
              station: "ROUM",
              voters: 1177
            },
            {
              station: "SODECOTON",
              voters: 576
            },
          ],
          "ECOLE PUBLIQUE DE NOUBOU / A": [
            {
              station: "KONGOLA",
              voters: 1032
            },
            {
              station: "NOUBOU",
              voters: 1032
            },
            {
              station: "BANANA",
              voters: 1032
            },
            {
              station: "GARAK",
              voters: 1032
            },
            {
              station: "TOULVOUI",
              voters: 1032
            },
          ],
          "ECOLE PUBLIQUE DE PLIM / A": [
            {
              station: "GOULDANG",
              voters: 461
            },
            {
              station: "MADELDELE",
              voters: 461
            },
            {
              station: "MOUZOUGOA",
              voters: 676
            },
          ],
          "ECOLE PUBLIQUE DE SARMOUAZOUGOUI / A": [
            {
              station: "DOUVA",
              voters: 233
            },
            {
              station: "MITER",
              voters: 233
            },
            {
              station: "SARMOUAZOUGOUI",
              voters: 233
            },
          ],
          "ECOLE PUBLIQUE DE TCHOFFI / A": [
            {
              station: "DIGUIDIM",
              voters: 519
            },
            {
              station: "MOGODOK",
              voters: 519
            },
            {
              station: "MOTOKOGNO",
              voters: 519
            },
            {
              station: "GAOULA",
              voters: 1058
            },
            {
              station: "NGABA",
              voters: 519
            },
            {
              station: "TCHOFFI",
              voters: 519
            },
          ],
          "ECOLE PUBLIQUE DE TITING / A": [
            {
              station: "BOLOLO",
              voters: 894
            },
            {
              station: "BOUI",
              voters: 2022
            },
            {
              station: "BALAM",
              voters: 1301
            },
            {
              station: "GUILPI",
              voters: 894
            },
            {
              station: "NAOUTAI",
              voters: 894
            },
            {
              station: "BOUKAR",
              voters: 894
            },
            {
              station: "BOUSS",
              voters: 894
            },
            {
              station: "TITING",
              voters: 894
            },
            {
              station: "VOURTANG",
              voters: 894
            },
          ],
          "ECOLE PUBLIQUE DE WOURO-BOCKI / A": [
            {
              station: "WOURO-BOCKI",
              voters: 330
            },
          ],
          "ECOLE PUBLIQUE DE YIWA / A": [
            {
              station: "MAZAPLIS",
              voters: 347
            },
            {
              station: "METINDING",
              voters: 347
            },
          ],
          "ECOLE PUBLIQUE DE ZALAVAD / A": [
            {
              station: "PAPALA",
              voters: 344
            },
            {
              station: "ZALAVAD",
              voters: 344
            },
          ],
          "ECOLE PUBLIQUE DE ZETENGRING / A": [
            {
              station: "ZETENGRING",
              voters: 358
            },
          ],
          "ECOLE PUBLIQUE DE ZIBOU / A": [
            {
              station: "GOURMOUI",
              voters: 337
            },
            {
              station: "MALBAO",
              voters: 337
            },
            {
              station: "MAMBAYA",
              voters: 337
            },
            {
              station: "ZIBOU",
              voters: 674
            },
          ],
          "ESPLANADE CHEFFERIE DE ILLIR / A": [
            {
              station: "BOULOUMOUD",
              voters: 235
            },
            {
              station: "ILLIR",
              voters: 470
            },
            {
              station: "CENTRE",
              voters: 235
            },
            {
              station: "PALLA",
              voters: 468
            },
          ],
          "ESPLANADE CHEFFERIE DE LIGAZANG / A": [
            {
              station: "LIGAZANG",
              voters: 145
            },
          ],
        },
        "TOULOUM": {
          "CES DE GAZAWA / A": [
            {
              station: "DJAKLALE",
              voters: 396
            },
            {
              station: "GAIGAM",
              voters: 396
            },
            {
              station: "KAOSSERE",
              voters: 396
            },
            {
              station: "TCHONLON",
              voters: 396
            },
          ],
          "CES DE KOFIDE / A": [
            {
              station: "BABAMARI",
              voters: 132
            },
          ],
          "ECOLE BILINGUE DE KIDISSI / A": [
            {
              station: "KIDISSI",
              voters: 177
            },
          ],
          "ECOLE PRIVEE CATH. DE GOLONDAKRI / A": [
            {
              station: "GOLONDAKRI",
              voters: 379
            },
          ],
          "ECOLE PUBLIQUE 1 DE SAOTSAI / A": [
            {
              station: "SAOTSAI",
              voters: 565
            },
          ],
          "ECOLE PUBLIQUE 1 DE TOULOUM / A": [
            {
              station: "MISSION",
              voters: 381
            },
            {
              station: "CATHOLIQUE",
              voters: 381
            },
            {
              station: "SEHOULI",
              voters: 381
            },
          ],
          "ECOLE PUBLIQUE 2 DE TOULOUM / A": [
            {
              station: "TOULOUM",
              voters: 1530
            },
            {
              station: "CAMP",
              voters: 454
            },
            {
              station: "FONCTIONNAIRE",
              voters: 454
            },
            {
              station: "CHEFFERIE",
              voters: 454
            },
            {
              station: "KIDIFI",
              voters: 631
            },
          ],
          "ECOLE PUBLIQUE DE BARDOUKI / A": [
            {
              station: "BARDOUKI",
              voters: 788
            },
            {
              station: "MBRAO",
              voters: 416
            },
          ],
          "ECOLE PUBLIQUE DE BISSEO / A": [
            {
              station: "BISSEO",
              voters: 390
            },
            {
              station: "FAGO",
              voters: 390
            },
          ],
          "ECOLE PUBLIQUE DE BIZILI-BABA / A": [
            {
              station: "BIHORE",
              voters: 571
            },
            {
              station: "BIZILI",
              voters: 809
            },
            {
              station: "BABA",
              voters: 571
            },
            {
              station: "TCHOURA",
              voters: 699
            },
          ],
          "ECOLE PUBLIQUE DE DANA / A": [
            {
              station: "KANKARWA",
              voters: 559
            },
            {
              station: "TIFOULI",
              voters: 559
            },
          ],
          "ECOLE PUBLIQUE DE DANDEWA / A": [
            {
              station: "DANDEWA",
              voters: 224
            },
          ],
          "ECOLE PUBLIQUE DE DANDIBALI / A": [
            {
              station: "DANDIBALI",
              voters: 153
            },
            {
              station: "DJAOLANE",
              voters: 661
            },
          ],
          "ECOLE PUBLIQUE DE DARGALA / A": [
            {
              station: "LAHELEOGA",
              voters: 372
            },
            {
              station: "YAMEDA",
              voters: 372
            },
          ],
          "ECOLE PUBLIQUE DE DJERNIGUE / A": [
            {
              station: "DJERNIGUE",
              voters: 380
            },
            {
              station: "YALEGUE",
              voters: 380
            },
          ],
          "ECOLE PUBLIQUE DE DOREGA / A": [
            {
              station: "DOREGA",
              voters: 360
            },
            {
              station: "RAWANI",
              voters: 360
            },
          ],
          "ECOLE PUBLIQUE DE FIRI / A": [
            {
              station: "FIRI",
              voters: 231
            },
            {
              station: "HORLONG",
              voters: 231
            },
            {
              station: "TOUDEM",
              voters: 231
            },
          ],
          "ECOLE PUBLIQUE DE FOULAYE / A": [
            {
              station: "FOULAYE",
              voters: 120
            },
          ],
          "ECOLE PUBLIQUE DE GAZAWA / A": [
            {
              station: "DOUFGUELNE",
              voters: 357
            },
            {
              station: "GAZAWA",
              voters: 357
            },
            {
              station: "CENTRE",
              voters: 1885
            },
          ],
          "ECOLE PUBLIQUE DE GOH / A": [
            {
              station: "DOUKDOUGOING",
              voters: 288
            },
            {
              station: "GOH",
              voters: 288
            },
            {
              station: "KAYA",
              voters: 288
            },
          ],
          "ECOLE PUBLIQUE DE GUEGUELEGUE / A": [
            {
              station: "GUEGUELEGUE",
              voters: 204
            },
          ],
          "ECOLE PUBLIQUE DE KABLA / A": [
            {
              station: "BITCHARE",
              voters: 1195
            },
            {
              station: "KABLA",
              voters: 1006
            },
            {
              station: "HOUMPIRI",
              voters: 503
            },
          ],
          "ECOLE PUBLIQUE DE KAOYA / A": [
            {
              station: "GORTIGUIRI",
              voters: 530
            },
            {
              station: "KAOYA",
              voters: 530
            },
            {
              station: "KARBAO",
              voters: 530
            },
            {
              station: "SODOM",
              voters: 530
            },
          ],
          "ECOLE PUBLIQUE DE KOFIDE / A": [
            {
              station: "KOFIDE",
              voters: 477
            },
          ],
          "ECOLE PUBLIQUE DE LALIPAKI / A": [
            {
              station: "DAWAREGA",
              voters: 342
            },
            {
              station: "DOUMROU",
              voters: 342
            },
            {
              station: "LALIPAKI",
              voters: 342
            },
          ],
          "ECOLE PUBLIQUE DE LAWANG GAORI / A": [
            {
              station: "GOLONREO",
              voters: 351
            },
            {
              station: "LAWANG",
              voters: 994
            },
            {
              station: "GAORI",
              voters: 351
            },
          ],
          "ECOLE PUBLIQUE DE LAYE / A": [
            {
              station: "GUESWEL",
              voters: 308
            },
            {
              station: "LAYE",
              voters: 308
            },
          ],
          "ECOLE PUBLIQUE DE MADAGALI / A": [
            {
              station: "MADAGALI",
              voters: 643
            },
            {
              station: "PORGAL",
              voters: 643
            },
          ],
          "ECOLE PUBLIQUE DE MBITCHARE / A": [
            {
              station: "TILALE",
              voters: 692
            },
            {
              station: "MBITCHARE",
              voters: 238
            },
            {
              station: "TITCHEO",
              voters: 641
            },
          ],
          "ECOLE PUBLIQUE DE NIMBAKRI-BIZILI / A": [
            {
              station: "NIMBAKRI",
              voters: 1181
            },
            {
              station: "KOLANDI",
              voters: 403
            },
          ],
          "ECOLE PUBLIQUE DE OURO DAWADI / A": [
            {
              station: "OURO",
              voters: 334
            },
            {
              station: "DAWADI",
              voters: 334
            },
          ],
          "ECOLE PUBLIQUE DE SALMAYE / A": [
            {
              station: "SALMAYE",
              voters: 424
            },
          ],
          "ECOLE PUBLIQUE DE SAO-ASTA / A": [
            {
              station: "SAO",
              voters: 146
            },
            {
              station: "ASTA",
              voters: 146
            },
          ],
          "ECOLE PUBLIQUE DE SIGUEORE / A": [
            {
              station: "SIGUEORE",
              voters: 400
            },
          ],
          "ECOLE PUBLIQUE DE TOULOUM BOUTOU / A": [
            {
              station: "DABAIGA",
              voters: 233
            },
            {
              station: "BOUTOU",
              voters: 233
            },
          ],
          "LYCEE DE TOULOUM / A": [
            {
              station: "GUITIMA",
              voters: 438
            },
            {
              station: "KRAIHONG",
              voters: 261
            },
          ],
          "MARCHE DE FADERE / A": [
            {
              station: "FADERE",
              voters: 169
            },
            {
              station: "LALEGARE",
              voters: 169
            },
          ],
          "MARCHE DE FIDMA / A": [
            {
              station: "FIDMA",
              voters: 376
            },
            {
              station: "GORDJO",
              voters: 376
            },
            {
              station: "TILAO",
              voters: 376
            },
          ],
          "MARCHE DE GOUSSOULOUM / A": [
            {
              station: "GOUSSOULOUM",
              voters: 226
            },
            {
              station: "IBBA",
              voters: 226
            },
            {
              station: "MBODI",
              voters: 226
            },
          ],
          "MARCHE DE KANAM / A": [
            {
              station: "KANAM",
              voters: 766
            },
          ],
          "MARCHE DE LIOUDE / A": [
            {
              station: "KAMBRAGUE",
              voters: 290
            },
            {
              station: "LIOUDE",
              voters: 290
            },
          ],
          "MARCHE DE SAO-ASTA / A": [
            {
              station: "MANTAMRA",
              voters: 86
            },
          ],
          "MARCHE DE TIMANA / A": [
            {
              station: "TIMANA",
              voters: 78
            },
          ],
          "SALMAYE FALEKALARE / A": [
            {
              station: "FALEKALARE",
              voters: 191
            },
          ],
        },
      },
      "MAYO-SAVA": {
        "KOLOFATA": {
          "ECOLE PUBLIQUE DE BAME / A": [
            {
              station: "BAME",
              voters: 451
            },
          ],
          "ECOLE PUBLIQUE DE BIA-CENTRE / A": [
            {
              station: "BIA-CENTRE",
              voters: 437
            },
          ],
          "ECOLE PUBLIQUE DE BORNORI / A": [
            {
              station: "BORNORI",
              voters: 608
            },
          ],
          "ECOLE PUBLIQUE DE BROUVARE / A": [
            {
              station: "BROUVARE",
              voters: 476
            },
          ],
          "ECOLE PUBLIQUE DE DOUGDJE / A": [
            {
              station: "DOUGDJE",
              voters: 394
            },
          ],
          "ECOLE PUBLIQUE DE GADERO / A": [
            {
              station: "GADERO",
              voters: 406
            },
          ],
          "ECOLE PUBLIQUE DE GAKARA / A": [
            {
              station: "GAKARA",
              voters: 918
            },
          ],
          "ECOLE PUBLIQUE DE GANCE / A": [
            {
              station: "GANCE",
              voters: 946
            },
          ],
          "ECOLE PUBLIQUE DE GANGAWA / A": [
            {
              station: "GANGAWA",
              voters: 326
            },
          ],
          "ECOLE PUBLIQUE DE GOUZOUDOU / A": [
            {
              station: "GOUZOUDOU",
              voters: 13280
            },
            {
              station: "BADJA",
              voters: 1622
            },
            {
              station: "BOUBA",
              voters: 1622
            },
            {
              station: "GADIHA",
              voters: 1622
            },
            {
              station: "KONTO",
              voters: 1622
            },
            {
              station: "MASSA",
              voters: 1622
            },
            {
              station: "MATAKON",
              voters: 1622
            },
            {
              station: "MODOU",
              voters: 1622
            },
            {
              station: "WAZIRI",
              voters: 1622
            },
            {
              station: "ZONGOLA",
              voters: 1622
            },
          ],
          "ECOLE PUBLIQUE DE GREA / A": [
            {
              station: "GREA",
              voters: 832
            },
          ],
          "ECOLE PUBLIQUE DE KERAWA / A": [
            {
              station: "CAMP",
              voters: 1139
            },
            {
              station: "MISSION",
              voters: 1139
            },
            {
              station: "MARCHE",
              voters: 1139
            },
            {
              station: "WABALA",
              voters: 1139
            },
          ],
          "ECOLE PUBLIQUE DE KIDJI-KERAWA / A": [
            {
              station: "KIDJI-KERAWA",
              voters: 314
            },
          ],
          "ECOLE PUBLIQUE DE KORDO / A": [
            {
              station: "KORDO",
              voters: 251
            },
          ],
          "ECOLE PUBLIQUE DE KOUYAPE / A": [
            {
              station: "CENTRE",
              voters: 696
            },
          ],
          "ECOLE PUBLIQUE DE MALLOUMRI  ABATCHOUA / A": [
            {
              station: "MALLOUMRI",
              voters: 767
            },
            {
              station: "ABATCHOUA",
              voters: 463
            },
          ],
          "ECOLE PUBLIQUE DE NDABA / A": [
            {
              station: "NDABA",
              voters: 499
            },
          ],
          "ECOLE PUBLIQUE DE SANDAWADJIRI / A": [
            {
              station: "BOTORI",
              voters: 826
            },
            {
              station: "SANDA",
              voters: 826
            },
            {
              station: "WADJIRI",
              voters: 826
            },
          ],
          "ECOLE PUBLIQUE DE TOLKOMARI / A": [
            {
              station: "BLADAMA",
              voters: 1238
            },
            {
              station: "BOUKAR",
              voters: 1238
            },
            {
              station: "ABISSO",
              voters: 1238
            },
          ],
          "ECOLE PUBLIQUE DE YEGOUA / A": [
            {
              station: "YEGOUA",
              voters: 803
            },
          ],
          "ECOLE PUBLIQUE G1 DE KOLOFATA / A": [
            {
              station: "BRIGADE",
              voters: 2723
            },
            {
              station: "VILLE",
              voters: 1660
            },
          ],
          "HANGAR BLAMA ABBA SALME AMCHIDE / A": [
            {
              station: "AMCHIDE",
              voters: 10164
            },
            {
              station: "ABBA",
              voters: 1573
            },
            {
              station: "SALME",
              voters: 1573
            },
          ],
          "HANGAR BLAMA ALHADJI WANO  TALA-SERADJE / A": [
            {
              station: "NGOUMOULDI",
              voters: 288
            },
            {
              station: "TALA-SERADJE",
              voters: 288
            },
          ],
          "HANGAR BLAMA DALIL DE KERAWA / A": [
            {
              station: "KERAWA",
              voters: 7165
            },
            {
              station: "DALIL",
              voters: 970
            },
            {
              station: "COMMISSARIAT",
              voters: 970
            },
          ],
          "HANGAR BLAMA DE ALHADJIRI / A": [
            {
              station: "ALHADJIRI",
              voters: 133
            },
          ],
          "HANGAR BLAMA DE BAKARISSE / A": [
            {
              station: "BAKARISSE",
              voters: 267
            },
            {
              station: "ALAMINE",
              voters: 267
            },
          ],
          "HANGAR BLAMA DE BIA BLABLINE / A": [
            {
              station: "BIA",
              voters: 249
            },
            {
              station: "BLABLINE",
              voters: 589
            },
          ],
          "HANGAR BLAMA DE CHERIPOURI / A": [
            {
              station: "CHERIPOURI",
              voters: 539
            },
          ],
          "HANGAR BLAMA DE DJAMANGA-KOUYAPE / A": [
            {
              station: "DJAMANGA-KOUYAPE",
              voters: 346
            },
          ],
          "HANGAR BLAMA DE DJARANDIWA / A": [
            {
              station: "DJARANDIWA",
              voters: 79
            },
          ],
          "HANGAR BLAMA DE DOUGZA / A": [
            {
              station: "DOUGZA",
              voters: 206
            },
          ],
          "HANGAR BLAMA DE GOUDERI / A": [
            {
              station: "GOUDERI",
              voters: 182
            },
          ],
          "HANGAR BLAMA DE GOUDOUMBOUL  KOUYAPE / A": [
            {
              station: "GOUDOUMBOUL",
              voters: 351
            },
            {
              station: "KOUYAPE",
              voters: 1047
            },
          ],
          "HANGAR BLAMA DE KALGUIWA / A": [
            {
              station: "KALGUIWA",
              voters: 139
            },
          ],
          "HANGAR BLAMA DE KERAWA KOKOA / A": [
            {
              station: "KOKOA",
              voters: 379
            },
          ],
          "HANGAR BLAMA DE KERAWA MAJA / A": [
            {
              station: "MAJA",
              voters: 734
            },
          ],
          "HANGAR BLAMA DE KIDJIMATARI / A": [
            {
              station: "KIDJIMATARI",
              voters: 191
            },
          ],
          "HANGAR BLAMA DE MAINANKOA / A": [
            {
              station: "MAINANKOA",
              voters: 256
            },
          ],
          "HANGAR BLAMA DE MATAKAYA PATOU / A": [
            {
              station: "MATAKAYA",
              voters: 250
            },
            {
              station: "PATOU",
              voters: 250
            },
          ],
          "HANGAR BLAMA DE MBANARI / A": [
            {
              station: "MBANARI",
              voters: 249
            },
          ],
          "HANGAR BLAMA DE MELERI / A": [
            {
              station: "MELERI",
              voters: 178
            },
          ],
          "HANGAR BLAMA DE SARE AMADOU / A": [
            {
              station: "SARE",
              voters: 194
            },
            {
              station: "AMADOU",
              voters: 194
            },
          ],
          "HANGAR BLAMA DE WAOULI / A": [
            {
              station: "WAOULI",
              voters: 286
            },
          ],
          "HANGAR BLAMA DE YABOGO / A": [
            {
              station: "YABOGO",
              voters: 1063
            },
          ],
          "HANGAR BLAMA DJOUGOUDOUM  MALLOUMRI / A": [
            {
              station: "SATOMI",
              voters: 629
            },
            {
              station: "FOULBE",
              voters: 304
            },
          ],
          "HANGAR BLAMA DOUNGOUS DE ALAGARNO /  A": [
            {
              station: "ALAGARNO",
              voters: 822
            },
            {
              station: "DOUNGOUS",
              voters: 411
            },
            {
              station: "YERIMA",
              voters: 411
            },
          ],
          "HANGAR BLAMA HASSANA DE TOLKOMARI / A": [
            {
              station: "TOLKOMARI",
              voters: 3761
            },
            {
              station: "HASSANA",
              voters: 47
            },
          ],
          "HANGAR BLAMA ISSA DE AMCHIDE / A": [
            {
              station: "ISSA",
              voters: 1114
            },
            {
              station: "YOUNOUSS",
              voters: 1114
            },
          ],
          "HANGAR BLAMA KAME DE CHERIVE / A": [
            {
              station: "CHERIVE",
              voters: 200
            },
            {
              station: "KAME",
              voters: 200
            },
            {
              station: "LELEDE",
              voters: 200
            },
          ],
          "HANGAR BLAMA KAMSOULOUM DE AMCHIDE  /A": [
            {
              station: "KAMSOULOUM",
              voters: 2263
            },
            {
              station: "COMMISSSARIAT",
              voters: 2263
            },
          ],
          "HANGAR BLAMA MADI RABA DE KERAWA / A": [
            {
              station: "MADI",
              voters: 1933
            },
            {
              station: "RABA",
              voters: 695
            },
          ],
          "HANGAR BLAMA MALLA DE ADANGA-DANGA /  A": [
            {
              station: "ADANGA-DANGA",
              voters: 400
            },
            {
              station: "BLAMA",
              voters: 22079
            },
            {
              station: "HIDIGUIR",
              voters: 200
            },
            {
              station: "MALLA",
              voters: 498
            },
          ],
          "HANGAR BLAMA OUMAR DE AMCHIDE / A": [
            {
              station: "OUMAR",
              voters: 774
            },
          ],
          "HANGAR LAWAN DE AGAI-GAI / A": [
            {
              station: "AGAI-GAI",
              voters: 348
            },
            {
              station: "LAWAN",
              voters: 681
            },
            {
              station: "KOUROUGOU",
              voters: 348
            },
          ],
          "HANGAR LAWAN DE MANAWATCHI LAWAN  BIE / A": [
            {
              station: "MANAWATCHI",
              voters: 333
            },
            {
              station: "BIE",
              voters: 333
            },
          ],
          "HANGAR LAWAN DE SILIMRI / A": [
            {
              station: "SILIMRI",
              voters: 120
            },
          ],
          "HANGAR LAWAN DE TALA-MADE / A": [
            {
              station: "TALA",
              voters: 336
            },
            {
              station: "MADE",
              voters: 336
            },
          ],
          "HANGAR LAWAN DE TALLA MALLA BRAHIM / A": [
            {
              station: "TALLA",
              voters: 298
            },
            {
              station: "BRAHIM",
              voters: 298
            },
          ],
          "HANGAR LAWAN DE WALASSA / A": [
            {
              station: "WALASSA",
              voters: 242
            },
          ],
          "HANGAR LAWAN DE WARAWIYEDE / A": [
            {
              station: "WARAWIYEDE",
              voters: 224
            },
          ],
          "HANGAR LAWAN DE WAVAZAI / A": [
            {
              station: "WAVAZAI",
              voters: 145
            },
          ],
          "LYCEE DE KOLOFATA GUIDI / A": [
            {
              station: "KOLOFATA",
              voters: 3626
            },
            {
              station: "GUIDI",
              voters: 306
            },
          ],
        },
        "MORA": {
          "CASE COMMUNAUTAIRE DE TAYER / A": [
            {
              station: "TAYER",
              voters: 618
            },
          ],
          "CASERNE MILITAIRE DE MORA / A": [
            {
              station: "CASERNE",
              voters: 413
            },
          ],
          "COMMISSARIAT SPECIAL DE MORA / A": [
            {
              station: "GENDARMERIE",
              voters: 192
            },
            {
              station: "COMMISSARIAT",
              voters: 384
            },
            {
              station: "SECURITE",
              voters: 384
            },
            {
              station: "PUBLIQUE",
              voters: 384
            },
            {
              station: "SPECIAL",
              voters: 192
            },
            {
              station: "ETAT",
              voters: 192
            },
            {
              station: "MAJOR",
              voters: 192
            },
            {
              station: "COMPAGNIE",
              voters: 192
            },
            {
              station: "POSTE",
              voters: 192
            },
            {
              station: "KOURGUI",
              voters: 1939
            },
          ],
          "DISPENSAIRE DE BOUNDERI / A": [
            {
              station: "BOUNDERI",
              voters: 568
            },
            {
              station: "BRIGADE",
              voters: 339
            },
            {
              station: "DISPENSAIRE",
              voters: 147
            },
          ],
          "DISPENSAIRE DE GOUDJIMDELE / A": [
            {
              station: "GOUDJIMDELE",
              voters: 356
            },
          ],
          "DISPENSAIRE DE PODOKO SUD / A": [
            {
              station: "PODOKO",
              voters: 819
            },
            {
              station: "SUD-DISPENSAIRE",
              voters: 819
            },
          ],
          "ECOLE MATERNELLE DE DJARME / A": [
            {
              station: "DJARME",
              voters: 636
            },
          ],
          "ECOLE PRIVEE ALLEMANDE D\AMTCHALI / A": [
            {
              station: "CHULZENTRUM",
              voters: 90
            },
          ],
          "ECOLE PUBLIQUE DE AISSA-HARDE / A": [
            {
              station: "WASSILI",
              voters: 249
            },
          ],
          "ECOLE PUBLIQUE DE BLABLINE-DOULO / A": [
            {
              station: "BLABLINE",
              voters: 283
            },
            {
              station: "DOULO",
              voters: 2513
            },
          ],
          "ECOLE PUBLIQUE DE BOUNDERI / A": [
            {
              station: "CENTRE",
              voters: 6346
            },
            {
              station: "WOULBA",
              voters: 274
            },
          ],
          "ECOLE PUBLIQUE DE DJOUNDE / A": [
            {
              station: "ECOLE",
              voters: 3614
            },
          ],
          "ECOLE PUBLIQUE DE DOMAYA / A": [
            {
              station: "NDAZA",
              voters: 862
            },
          ],
          "ECOLE PUBLIQUE DE DOUBLE / A": [
            {
              station: "DOUBLE",
              voters: 1920
            },
            {
              station: "MATAKAM",
              voters: 960
            },
          ],
          "ECOLE PUBLIQUE DE GAGADAMA / A": [
            {
              station: "GAGADAMA",
              voters: 262
            },
          ],
          "ECOLE PUBLIQUE DE GODIGONG / A": [
            {
              station: "IGZAWA",
              voters: 348
            },
          ],
          "ECOLE PUBLIQUE DE GOLDA 3 / A": [
            {
              station: "DADANG",
              voters: 277
            },
          ],
          "ECOLE PUBLIQUE DE GOUVAKA / A": [
            {
              station: "GOUVAKA",
              voters: 1123
            },
          ],
          "ECOLE PUBLIQUE DE LIMANI / A": [
            {
              station: "NARKI",
              voters: 1348
            },
          ],
          "ECOLE PUBLIQUE DE MAKLAI / A": [
            {
              station: "MAKLAI",
              voters: 116
            },
          ],
          "ECOLE PUBLIQUE DE MAKOULBE / A": [
            {
              station: "MAKOULBE",
              voters: 195
            },
          ],
          "ECOLE PUBLIQUE DE MEME / A": [
            {
              station: "DOMAYO",
              voters: 692
            },
            {
              station: "TALA",
              voters: 1589
            },
            {
              station: "ZAKE",
              voters: 692
            },
          ],
          "ECOLE PUBLIQUE DE MORA-MASSIF / A": [
            {
              station: "CHILI",
              voters: 574
            },
          ],
          "ECOLE PUBLIQUE DE MOUKTELE-BALDAMA /  A": [
            {
              station: "MOUKTELE-BALDAMA",
              voters: 157
            },
            {
              station: "CAMPT",
              voters: 157
            },
          ],
          "ECOLE PUBLIQUE DE NDOUBOU / A": [
            {
              station: "NDOUBOU",
              voters: 161
            },
          ],
          "ECOLE PUBLIQUE DE SEKOULE / A": [
            {
              station: "SEKOULE",
              voters: 333
            },
          ],
          "ECOLE PUBLIQUE DE SERALDOUMDA / A": [
            {
              station: "HAIRE",
              voters: 808
            },
            {
              station: "SERA-LDOUMDA",
              voters: 808
            },
          ],
          "ECOLE PUBLIQUE DE TCHOKO / A": [
            {
              station: "TCHOKO",
              voters: 106
            },
          ],
          "ECOLE PUBLIQUE DE WARBA / A": [
            {
              station: "WARBA",
              voters: 2553
            },
            {
              station: "EGLISE",
              voters: 851
            },
          ],
          "ECOLE PUBLIQUE DE YALA YALTA / A": [
            {
              station: "YALA",
              voters: 403
            },
            {
              station: "YALTA",
              voters: 403
            },
          ],
          "ECOLE PUBLIQUE SULTANAT / A": [
            {
              station: "JAJA",
              voters: 690
            },
          ],
          "ESPLANADE COMMUNE DE MORA / A": [
            {
              station: "COMMUNE",
              voters: 196
            },
          ],
          "HANAGAR BLAMA DE GANAI DOULO / A": [
            {
              station: "GANAI",
              voters: 233
            },
          ],
          "HANGAR BLAMA DABRA / A": [
            {
              station: "MOUNDANG",
              voters: 170
            },
          ],
          "HANGAR BLAMA DE  HOUDIYANG-KOTSEREHE / A": [
            {
              station: "HOUDIYANG-KOTSEREHE",
              voters: 121
            },
          ],
          "HANGAR BLAMA DE ADAKELE MEME / A": [
            {
              station: "ADAKELE",
              voters: 58
            },
            {
              station: "MEME",
              voters: 4262
            },
          ],
          "HANGAR BLAMA DE AGZAWAYA / A": [
            {
              station: "AGZAWAYA",
              voters: 137
            },
            {
              station: "BLAMA",
              voters: 3960
            },
          ],
          "HANGAR BLAMA DE AISSA-HARDE MANDARA  /A": [
            {
              station: "MANDARA",
              voters: 305
            },
          ],
          "HANGAR BLAMA DE AISSA-HARDE TARMOA /  A": [
            {
              station: "TARMOA",
              voters: 103
            },
          ],
          "HANGAR BLAMA DE ARDORI / A": [
            {
              station: "ARDORI",
              voters: 169
            },
          ],
          "HANGAR BLAMA DE BADI / A": [
            {
              station: "BADI",
              voters: 118
            },
          ],
          "HANGAR BLAMA DE BANKI-WANDALA / A": [
            {
              station: "BANKI-WANDALA",
              voters: 1008
            },
          ],
          "HANGAR BLAMA DE BIWANA / A": [
            {
              station: "BIWANA",
              voters: 192
            },
            {
              station: "DJAVARYA",
              voters: 192
            },
          ],
          "HANGAR BLAMA DE BLAKAFE / A": [
            {
              station: "BLAKAFE",
              voters: 96
            },
          ],
          "HANGAR BLAMA DE BLAMADERI / A": [
            {
              station: "BLAMADERI",
              voters: 237
            },
          ],
          "HANGAR BLAMA DE BLANGOUARE / A": [
            {
              station: "AYURI",
              voters: 370
            },
            {
              station: "BLANGOUARE",
              voters: 370
            },
            {
              station: "KLISSAWA",
              voters: 531
            },
            {
              station: "GUENE(TCHARI)",
              voters: 370
            },
            {
              station: "YALEMA",
              voters: 531
            },
          ],
          "HANGAR BLAMA DE BOUDOUA-RAMAT / A": [
            {
              station: "BOUDOUA",
              voters: 505
            },
            {
              station: "BOUDOUA-RAMAT",
              voters: 505
            },
          ],
          "HANGAR BLAMA DE DADALA / A": [
            {
              station: "DADALA",
              voters: 254
            },
          ],
          "HANGAR BLAMA DE DARGALA MEME / A": [
            {
              station: "DARGALA",
              voters: 316
            },
            {
              station: "DJAMAKIA",
              voters: 316
            },
          ],
          "HANGAR BLAMA DE DJABIRE / A": [
            {
              station: "FARKA",
              voters: 226
            },
          ],
          "HANGAR BLAMA DE DJAKANA / A": [
            {
              station: "DJAKANA",
              voters: 685
            },
            {
              station: "MAIRARI",
              voters: 685
            },
          ],
          "HANGAR BLAMA DE DJAKARA-GOLEDJE / A": [
            {
              station: "DJAKARA-GOLEDJE",
              voters: 414
            },
          ],
          "HANGAR BLAMA DE DJAMPALA-MEME / A": [
            {
              station: "DJAMPALA-MEME",
              voters: 116
            },
          ],
          "HANGAR BLAMA DE DJILDA / A": [
            {
              station: "DJILDA",
              voters: 246
            },
          ],
          "HANGAR BLAMA DE DOUME 1 / A": [
            {
              station: "DOUME",
              voters: 551
            },
          ],
          "HANGAR BLAMA DE DZONDZONGOUA / A": [
            {
              station: "DZONDZONGOUA",
              voters: 167
            },
          ],
          "HANGAR BLAMA DE EMAT / A": [
            {
              station: "MEHE",
              voters: 880
            },
            {
              station: "EMAT",
              voters: 211
            },
          ],
          "HANGAR BLAMA DE GABAGUE / A": [
            {
              station: "GABAGUE",
              voters: 455
            },
          ],
          "HANGAR BLAMA DE GAIGOLAM / A": [
            {
              station: "GAIGOLAM",
              voters: 210
            },
          ],
          "HANGAR BLAMA DE GAIZANG / A": [
            {
              station: "GAIZANG",
              voters: 419
            },
          ],
          "HANGAR BLAMA DE GAIZANG-KASSAYO / A": [
            {
              station: "GAIZANG-KASSAYO",
              voters: 169
            },
          ],
          "HANGAR BLAMA DE GALBI / A": [
            {
              station: "GALBI",
              voters: 154
            },
          ],
          "HANGAR BLAMA DE GAMBAROU / A": [
            {
              station: "GAMBAROU",
              voters: 194
            },
          ],
          "HANGAR BLAMA DE GANCE MANAWATCHI / A": [
            {
              station: "GANCE",
              voters: 273
            },
            {
              station: "MANAWATCHI",
              voters: 1575
            },
          ],
          "HANGAR BLAMA DE GARNACK / A": [
            {
              station: "GARNACK",
              voters: 75
            },
          ],
          "HANGAR BLAMA DE GILVE DJAMARE / A": [
            {
              station: "GILVE",
              voters: 444
            },
            {
              station: "DJAMARE",
              voters: 195
            },
          ],
          "HANGAR BLAMA DE GILVE WANDALA / A": [
            {
              station: "WANDALA",
              voters: 249
            },
          ],
          "HANGAR BLAMA DE GODIGONG MARCHE / A": [
            {
              station: "GODIGONG",
              voters: 641
            },
            {
              station: "MARCHE",
              voters: 1393
            },
          ],
          "HANGAR BLAMA DE GOGO / A": [
            {
              station: "GOGO",
              voters: 180
            },
          ],
          "HANGAR BLAMA DE GOLDA 1 / A": [
            {
              station: "GOLDA",
              voters: 1928
            },
            {
              station: "MAKDAF",
              voters: 461
            },
          ],
          "HANGAR BLAMA DE GOLDA 2 / A": [
            {
              station: "GUIYA",
              voters: 691
            },
          ],
          "HANGAR BLAMA DE GOLDA 4 / A": [
            {
              station: "HOUDMOUKOUA",
              voters: 260
            },
          ],
          "HANGAR BLAMA DE GOLDA 5 / A": [
            {
              station: "GAY-TCHIHEYE",
              voters: 239
            },
          ],
          "HANGAR BLAMA DE GOULOUDJOANE KALE /  A": [
            {
              station: "GOULOUDJOANE",
              voters: 139
            },
            {
              station: "KALE",
              voters: 139
            },
          ],
          "HANGAR BLAMA DE HARDEO-MEME / A": [
            {
              station: "HARDEO-MEME",
              voters: 510
            },
          ],
          "HANGAR BLAMA DE HAWAYE-ARABE / A": [
            {
              station: "HAWAYE-ARABE",
              voters: 84
            },
          ],
          "HANGAR BLAMA DE HOMAKA-IBE / A": [
            {
              station: "HOMAKA-IBE",
              voters: 152
            },
          ],
          "HANGAR BLAMA DE HOUDOUYANG / A": [
            {
              station: "HOUDOUYANG",
              voters: 510
            },
          ],
          "HANGAR BLAMA DE ICHIGA / A": [
            {
              station: "ICHIGA",
              voters: 215
            },
          ],
          "HANGAR BLAMA DE IGAGOUA 1 / A": [
            {
              station: "IGAGOUA",
              voters: 1291
            },
          ],
          "HANGAR BLAMA DE IGAWA DOULO / A": [
            {
              station: "IGAWA",
              voters: 343
            },
          ],
          "HANGAR BLAMA DE KACHIMRI DOULO / A": [
            {
              station: "KACHIMRI",
              voters: 209
            },
          ],
          "HANGAR BLAMA DE KANGALERI / A": [
            {
              station: "KANGALERI",
              voters: 284
            },
          ],
          "HANGAR BLAMA DE KANGARWA / A": [
            {
              station: "ABOUDJA",
              voters: 159
            },
            {
              station: "KANGARWA",
              voters: 159
            },
          ],
          "HANGAR BLAMA DE KOTSEREHE KOURGUI /  A": [
            {
              station: "KOTSEREHE",
              voters: 189
            },
          ],
          "HANGAR BLAMA DE KOURGUI MAYO / A": [
            {
              station: "MAYO",
              voters: 183
            },
          ],
          "HANGAR BLAMA DE KRIYO CENTRE / A": [
            {
              station: "KRIYO",
              voters: 275
            },
          ],
          "HANGAR BLAMA DE LIMANI BLAMA LAMPA / A": [
            {
              station: "LIMANI",
              voters: 4379
            },
            {
              station: "LAMPA",
              voters: 335
            },
          ],
          "HANGAR BLAMA DE MADJINA / A": [
            {
              station: "ABA",
              voters: 390
            },
            {
              station: "ZAGOUL",
              voters: 616
            },
            {
              station: "DJABIRE",
              voters: 1252
            },
            {
              station: "GUIRDJAWA",
              voters: 390
            },
            {
              station: "MADJINA",
              voters: 390
            },
            {
              station: "NJAMENA",
              voters: 390
            },
            {
              station: "OURO",
              voters: 1381
            },
            {
              station: "PALA",
              voters: 390
            },
            {
              station: "PARKA",
              voters: 390
            },
          ],
          "HANGAR BLAMA DE MADJIRDE / A": [
            {
              station: "MADJIRDE",
              voters: 45
            },
            {
              station: "WAMBA",
              voters: 45
            },
            {
              station: "YENNE",
              voters: 271
            },
          ],
          "HANGAR BLAMA DE MANAWATCHI 1 / A": [
            {
              station: "MAROUFOU",
              voters: 450
            },
          ],
          "HANGAR BLAMA DE MANAWATCHI 2 / A": [
            {
              station: "ISSIAGA",
              voters: 296
            },
          ],
          "HANGAR BLAMA DE MANAWATCHI 3 / A": [
            {
              station: "MANA",
              voters: 211
            },
            {
              station: "BINTOU",
              voters: 211
            },
          ],
          "HANGAR BLAMA DE MANAWATCHI 4 / A": [
            {
              station: "AMADI",
              voters: 345
            },
          ],
          "HANGAR BLAMA DE MANAWATCHI-LIMANI / A": [
            {
              station: "MANAWATCHI-LIMANI",
              voters: 294
            },
          ],
          "HANGAR BLAMA DE MANGAVE ABBA FADI / A": [
            {
              station: "MANGAVE",
              voters: 989
            },
            {
              station: "ABBA",
              voters: 566
            },
            {
              station: "FADI",
              voters: 340
            },
          ],
          "HANGAR BLAMA DE MANGAVE GOI-GOI / A": [
            {
              station: "GOI-GOI",
              voters: 670
            },
          ],
          "HANGAR BLAMA DE MANGAVE OURO MODI /  A": [
            {
              station: "MODI",
              voters: 164
            },
          ],
          "HANGAR BLAMA DE MANGAVE YOUNOUS / A": [
            {
              station: "YOUNOUS",
              voters: 364
            },
          ],
          "HANGAR BLAMA DE MASTAFARI / A": [
            {
              station: "MASTAFARI",
              voters: 96
            },
            {
              station: "WANDIDJABI",
              voters: 96
            },
            {
              station: "YASSINE",
              voters: 96
            },
          ],
          "HANGAR BLAMA DE MAYOURE / A": [
            {
              station: "MAYOURE",
              voters: 280
            },
          ],
          "HANGAR BLAMA DE MBARMA / A": [
            {
              station: "MBARMA",
              voters: 539
            },
          ],
          "HANGAR BLAMA DE MEHE LAWAN BAKARY /  A": [
            {
              station: "LAWAN",
              voters: 181
            },
            {
              station: "BAKARY",
              voters: 181
            },
          ],
          "HANGAR BLAMA DE MEHE SANDA / A": [
            {
              station: "SANDA",
              voters: 488
            },
          ],
          "HANGAR BLAMA DE MEME DINOUE 1 / A": [
            {
              station: "DINOUE",
              voters: 547
            },
          ],
          "HANGAR BLAMA DE MICHIVRE-MARCHE / A": [
            {
              station: "MICHIVRE-MARCHE",
              voters: 513
            },
          ],
          "HANGAR BLAMA DE MOFGORE / A": [
            {
              station: "GUIDIGUIDI",
              voters: 72
            },
            {
              station: "MOFGORE",
              voters: 72
            },
            {
              station: "WOBISKE",
              voters: 144
            },
            {
              station: "BRE",
              voters: 72
            },
            {
              station: "HESSANA",
              voters: 72
            },
          ],
          "HANGAR BLAMA DE MOGODE / A": [
            {
              station: "MOGODE",
              voters: 401
            },
          ],
          "HANGAR BLAMA DE MOGOGNE / A": [
            {
              station: "BALA",
              voters: 457
            },
            {
              station: "PLATA",
              voters: 457
            },
            {
              station: "BOKIRE",
              voters: 457
            },
            {
              station: "MOGOGNE",
              voters: 1371
            },
            {
              station: "BOUKAR",
              voters: 1412
            },
            {
              station: "HARDE",
              voters: 457
            },
            {
              station: "YAYA",
              voters: 457
            },
            {
              station: "MOUSSA",
              voters: 457
            },
          ],
          "HANGAR BLAMA DE MOKOCHE / A": [
            {
              station: "MOKOCHE",
              voters: 276
            },
          ],
          "HANGAR BLAMA DE MOUGDJE MALLOUM / A": [
            {
              station: "MOUGDJE",
              voters: 289
            },
            {
              station: "MALLOUM",
              voters: 289
            },
          ],
          "HANGAR BLAMA DE MOUVANE MEME / A": [
            {
              station: "MOUVANE",
              voters: 258
            },
          ],
          "HANGAR BLAMA DE OUDOUGVA / A": [
            {
              station: "OUDOUGVA",
              voters: 293
            },
          ],
          "HANGAR BLAMA DE OURAGA / A": [
            {
              station: "OURAGA",
              voters: 472
            },
          ],
          "HANGAR BLAMA DE OURBA YAWE / A": [
            {
              station: "OURBA",
              voters: 50
            },
            {
              station: "YAWE",
              voters: 50
            },
          ],
          "HANGAR BLAMA DE PIVOU / A": [
            {
              station: "PIVOU",
              voters: 218
            },
          ],
          "HANGAR BLAMA DE PODOKO-CENTRE  NAMBA / A": [
            {
              station: "PODOKO-CENTRE",
              voters: 765
            },
            {
              station: "NAMBA",
              voters: 765
            },
          ],
          "HANGAR BLAMA DE POUDARA GOI-GOI / A": [
            {
              station: "POUDARA",
              voters: 549
            },
          ],
          "HANGAR BLAMA DE SANDALE / A": [
            {
              station: "SANDALE",
              voters: 1642
            },
          ],
          "HANGAR BLAMA DE SAVA CENTRE / A": [
            {
              station: "PONT-SAVA",
              voters: 351
            },
            {
              station: "SAVA",
              voters: 351
            },
          ],
          "HANGAR BLAMA DE SERA-HADJIA / A": [
            {
              station: "SERA-HADJIA",
              voters: 345
            },
          ],
          "HANGAR BLAMA DE TAGAWA / A": [
            {
              station: "TAGAWA",
              voters: 185
            },
          ],
          "HANGAR BLAMA DE TAGOUDALE / A": [
            {
              station: "TAGOUDALE",
              voters: 296
            },
          ],
          "HANGAR BLAMA DE TALA VALAWA / A": [
            {
              station: "VALAWA",
              voters: 323
            },
          ],
          "HANGAR BLAMA DE TALA-MANDA / A": [
            {
              station: "TALA-MANDA",
              voters: 78
            },
          ],
          "HANGAR BLAMA DE TCHAKAMARIE / A": [
            {
              station: "TCHAKAMARIE",
              voters: 930
            },
          ],
          "HANGAR BLAMA DE TCHEKEWABA / A": [
            {
              station: "TCHEKEWABA",
              voters: 157
            },
          ],
          "HANGAR BLAMA DE TOUSKI DJOKO / A": [
            {
              station: "TOUSKI",
              voters: 112
            },
            {
              station: "DJOKO",
              voters: 112
            },
          ],
          "HANGAR BLAMA DE TOUSSA / A": [
            {
              station: "TOUSSA",
              voters: 363
            },
          ],
          "HANGAR BLAMA DE VADI GIGLA / A": [
            {
              station: "VADI",
              voters: 647
            },
            {
              station: "OUZLEGAYA",
              voters: 647
            },
          ],
          "HANGAR BLAMA DE VAME 1 / A": [
            {
              station: "VAME",
              voters: 830
            },
          ],
          "HANGAR BLAMA DE VOUAWA / A": [
            {
              station: "VOUAWA",
              voters: 467
            },
          ],
          "HANGAR BLAMA DE WALKAME / A": [
            {
              station: "WALKAME",
              voters: 285
            },
          ],
          "HANGAR BLAMA DE WAMBACHE ELIE / A": [
            {
              station: "WAMBACHE",
              voters: 802
            },
            {
              station: "ELIE",
              voters: 156
            },
          ],
          "HANGAR BLAMA DE WAMBACHE MODOU  KOUROU / A": [
            {
              station: "MODOU",
              voters: 334
            },
            {
              station: "KOUROU",
              voters: 334
            },
          ],
          "HANGAR BLAMA DE WARAGA / A": [
            {
              station: "WARAGA",
              voters: 1248
            },
          ],
          "HANGAR BLAMA DE YOLEL DADI / A": [
            {
              station: "YOLEL",
              voters: 218
            },
            {
              station: "DADI",
              voters: 218
            },
          ],
          "HANGAR BLAMA SALI DE MAHOULA / A": [
            {
              station: "MAHOULA",
              voters: 770
            },
            {
              station: "SALI",
              voters: 532
            },
          ],
          "HANGAR CAMP MISSION KOURGUI / A": [
            {
              station: "MISSION",
              voters: 1926
            },
          ],
          "HANGAR CAMPEMENT DE ZOUELVA / A": [
            {
              station: "ZOUELVA",
              voters: 1085
            },
            {
              station: "CAMPEMENT",
              voters: 502
            },
          ],
          "HANGAR CHEFFERIE DE DJOUNDE / A": [
            {
              station: "DJOUNDE",
              voters: 753
            },
          ],
          "HANGAR CHEFFERIE DE GOUVAKA  MAKOULAHE / A": [
            {
              station: "MAKOULAHE",
              voters: 682
            },
          ],
          "HANGAR CHEFFERIE DE KOSSA / A": [
            {
              station: "KOSSA",
              voters: 831
            },
          ],
          "HANGAR CHEFFERIE DE KOURGUI / A": [
            {
              station: "CHEFFERIE",
              voters: 499
            },
          ],
          "HANGAR CHEFFERIE DE MAGDEME / A": [
            {
              station: "MAGDEME",
              voters: 637
            },
            {
              station: "GDE",
              voters: 637
            },
            {
              station: "MOSQUEE",
              voters: 637
            },
          ],
          "HANGAR CHEFFERIE DE MEME / A": [
            {
              station: "GOLDOGO",
              voters: 755
            },
            {
              station: "TAGAMA",
              voters: 755
            },
          ],
          "HANGAR CHEFFERIE DE MORA-MASSIF / A": [
            {
              station: "MORA-MASSIF",
              voters: 510
            },
          ],
          "HANGAR CHEFFERIE DE MORA-VILLE / A": [
            {
              station: "MASSARE",
              voters: 2055
            },
          ],
          "HANGAR DELEGATION DEPARTEMENTALE  DU TOURISME / A": [
            {
              station: "QUARTIER",
              voters: 534
            },
            {
              station: "PREFECTORAL",
              voters: 84
            },
            {
              station: "DERNIER",
              voters: 84
            },
            {
              station: "POTEAU",
              voters: 84
            },
          ],
          "HANGAR EGLISE DE AISSA-HARDE / A": [
            {
              station: "AISSA-HARDE",
              voters: 1244
            },
            {
              station: "CAMP",
              voters: 2513
            },
          ],
          "HANGAR EGLISE DE AMTCHALI / A": [
            {
              station: "AMTCHALI",
              voters: 2604
            },
          ],
          "HANGAR EGLISE DE MALIKA / A": [
            {
              station: "MALIKA",
              voters: 718
            },
          ],
          "HANGAR ELEVAGE CZV DE MORA / A": [
            {
              station: "WALADE",
              voters: 3024
            },
          ],
          "HANGAR MARCHE DE BOURDALA / A": [
            {
              station: "BOURDALA",
              voters: 96
            },
          ],
          "HANGAR MARCHE DE HOMAKA / A": [
            {
              station: "HOMAKA",
              voters: 1196
            },
          ],
          "HANGAR MARCHE DE TALA-MOKOLO / A": [
            {
              station: "KIRKASSAKOUA",
              voters: 769
            },
            {
              station: "TALA-MOKOLO",
              voters: 769
            },
          ],
          "HANGAR MOSQUEE DE DJAMPALA / A": [
            {
              station: "DJAMPALA-DJOUNDE",
              voters: 138
            },
          ],
          "HANGAR MOSQUEE DE GOUDOUBA / A": [
            {
              station: "GOUDOUBA",
              voters: 190
            },
          ],
          "HANGAR MOSQUEE DE GOUMOULDI / A": [
            {
              station: "GOUMOULDI",
              voters: 284
            },
          ],
          "LYCEE DE MORA / A": [
            {
              station: "FIKE",
              voters: 3358
            },
          ],
          "MBIRCHE / A": [
            {
              station: "KARASSIRI",
              voters: 148
            },
            {
              station: "KIRZA",
              voters: 148
            },
            {
              station: "MBIRCHE",
              voters: 148
            },
          ],
          "PODOKO-SUD EP / A": [
            {
              station: "PODOKO-SUD",
              voters: 354
            },
          ],
          "PRISON PRICIPALE DE MORA / A": [
            {
              station: "MAGALA",
              voters: 365
            },
            {
              station: "PRISON",
              voters: 120
            },
          ],
          "SAR/SM DE MORA / A": [
            {
              station: "SAR/SM",
              voters: 245
            },
          ],
          "WAMBACHE GADADI BLAMA / A": [
            {
              station: "GADADI",
              voters: 312
            },
          ],
        },
        "TOKOMBERE": {
          "CASE PMI DE BAKA WANDALA / A": [
            {
              station: "WANDALA",
              voters: 220
            },
          ],
          "CASE PMI DE BALA OURO DOLE / A": [
            {
              station: "OURO",
              voters: 895
            },
            {
              station: "DOLE",
              voters: 420
            },
          ],
          "CASE PMI DE BALLA MAGAYE / A": [
            {
              station: "BALA",
              voters: 599
            },
            {
              station: "MAGAYE",
              voters: 179
            },
          ],
          "CASE PMI DE BISTRE / A": [
            {
              station: "BISTRE",
              voters: 249
            },
          ],
          "CASE PMI DE BZAGAMTAGNA 1 / A": [
            {
              station: "BZAGAMTAGNA",
              voters: 1016
            },
          ],
          "CASE PMI DE GADABAK / A": [
            {
              station: "PMI",
              voters: 521
            },
          ],
          "CASE PMI DE GADOUA-MASSIF / A": [
            {
              station: "GADOUA-MASSIF",
              voters: 94
            },
          ],
          "CASE PMI DE GAVALYAM / A": [
            {
              station: "GAVALYAM",
              voters: 289
            },
          ],
          "CASE PMI DE HOUMPATAK / A": [
            {
              station: "HOUMPATAK",
              voters: 476
            },
          ],
          "CASE PMI DE HOUNDJOK / A": [
            {
              station: "HOUNDJOK",
              voters: 311
            },
          ],
          "CASE PMI DE KOSSA-OULDEME / A": [
            {
              station: "KOSSA-OULDEME",
              voters: 134
            },
          ],
          "CASE PMI DE MADZAWA TALA LAKI / A": [
            {
              station: "MADZAWA",
              voters: 482
            },
            {
              station: "TALA",
              voters: 1250
            },
            {
              station: "LAKI",
              voters: 482
            },
          ],
          "CASE PMI DE MOLOKO-SOBO / A": [
            {
              station: "MOLOKO-SOBO",
              voters: 148
            },
          ],
          "CASE PMI DE MOUYENGUE KAYAMGALI / A": [
            {
              station: "KAYAMGALI",
              voters: 295
            },
          ],
          "CASE PMI DE OUGDA / A": [
            {
              station: "OUGDA",
              voters: 158
            },
          ],
          "CASE PMI DE PALBARA-LAHMA / A": [
            {
              station: "PALBARA-LAHMA",
              voters: 346
            },
          ],
          "CASE PMI DE SERADJOUE / A": [
            {
              station: "SERADJOUE",
              voters: 197
            },
          ],
          "CASE PMI DE TSOUMAH / A": [
            {
              station: "TSOUMAH",
              voters: 146
            },
          ],
          "CASE PMI DE VOUNDLAR / A": [
            {
              station: "VOUNDLAR",
              voters: 373
            },
          ],
          "CENTRE DE SANTE INTEGRE DE MAMBEZA /  A": [
            {
              station: "MAMBEZA",
              voters: 409
            },
            {
              station: "CSI",
              voters: 233
            },
          ],
          "CES DE MOKIO / A": [
            {
              station: "DOUMKALA",
              voters: 289
            },
          ],
          "ECOLE CATHOLIQUE DE PALBARA-MAVARAI /  A": [
            {
              station: "PALBARA-MAVARAI",
              voters: 470
            },
          ],
          "ECOLE DES PARENTS DE GOUGOULING / A": [
            {
              station: "GOUGOULING",
              voters: 174
            },
          ],
          "ECOLE DES PARENTS DE MBELE / A": [
            {
              station: "MBELE",
              voters: 620
            },
            {
              station: "EPAR",
              voters: 201
            },
          ],
          "ECOLE MATERNELLE DE NDJAMENA / A": [
            {
              station: "NDJAMENA",
              voters: 901
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE BIJE / A": [
            {
              station: "BIJE",
              voters: 519
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE BJESKAWE /  A": [
            {
              station: "BJESKAWE",
              voters: 638
            },
          ],
          "ECOLE PRIVEE CATHOLIQUE DE BLAR / A": [
            {
              station: "BLAR",
              voters: 420
            },
          ],
          "ECOLE PUBLIQUE DE BAKA MISSION / A": [
            {
              station: "BAKA",
              voters: 496
            },
            {
              station: "MISSION",
              voters: 481
            },
            {
              station: "BJEMILE",
              voters: 851
            },
          ],
          "ECOLE PUBLIQUE DE BZOUKOUDOU / A": [
            {
              station: "BZOUKOUDOU",
              voters: 547
            },
          ],
          "ECOLE PUBLIQUE DE CHEOLEO / A": [
            {
              station: "DANGOLA",
              voters: 54
            },
            {
              station: "CHEOLEO",
              voters: 54
            },
          ],
          "ECOLE PUBLIQUE DE DALA-ZOULGO / A": [
            {
              station: "DALA-ZOULGO",
              voters: 1648
            },
            {
              station: "ECOLE",
              voters: 4659
            },
            {
              station: "MARCHE",
              voters: 1203
            },
          ],
          "ECOLE PUBLIQUE DE DAMBOURKA / A": [
            {
              station: "DAMBOURKA",
              voters: 156
            },
          ],
          "ECOLE PUBLIQUE DE DELDER / A": [
            {
              station: "DELDER",
              voters: 320
            },
          ],
          "ECOLE PUBLIQUE DE DIBONG / A": [
            {
              station: "DIBONG",
              voters: 251
            },
          ],
          "ECOLE PUBLIQUE DE DIGAYA / A": [
            {
              station: "DIGAYA",
              voters: 187
            },
          ],
          "ECOLE PUBLIQUE DE DOGARE / A": [
            {
              station: "DOGARE",
              voters: 538
            },
          ],
          "ECOLE PUBLIQUE DE DOUBO-GUINDILE / A": [
            {
              station: "PALBARA-GUINDILE",
              voters: 324
            },
          ],
          "ECOLE PUBLIQUE DE FTAK / A": [
            {
              station: "FTAK",
              voters: 364
            },
          ],
          "ECOLE PUBLIQUE DE GADOUA-PLAINE / A": [
            {
              station: "GADOUA-PLAINE",
              voters: 483
            },
          ],
          "ECOLE PUBLIQUE DE GAGADAMA-OULDEME /  A": [
            {
              station: "GAGADAMA",
              voters: 359
            },
          ],
          "ECOLE PUBLIQUE DE GUIRZIGA / A": [
            {
              station: "GUIRZIGA",
              voters: 176
            },
          ],
          "ECOLE PUBLIQUE DE KOJING / A": [
            {
              station: "KOJING",
              voters: 378
            },
          ],
          "ECOLE PUBLIQUE DE KOTRABA / A": [
            {
              station: "KOTRABA",
              voters: 481
            },
          ],
          "ECOLE PUBLIQUE DE LALAWAI / A": [
            {
              station: "LALAWAI",
              voters: 699
            },
          ],
          "ECOLE PUBLIQUE DE LDEDENE / A": [
            {
              station: "LDEDENE",
              voters: 382
            },
          ],
          "ECOLE PUBLIQUE DE MADA KOLKOCH / A": [
            {
              station: "MALLOUM",
              voters: 882
            },
            {
              station: "MISSSION",
              voters: 882
            },
          ],
          "ECOLE PUBLIQUE DE MADAVARE / A": [
            {
              station: "MADAVARE",
              voters: 432
            },
            {
              station: "ADIGRE",
              voters: 73
            },
            {
              station: "MANGAVE",
              voters: 1097
            },
          ],
          "ECOLE PUBLIQUE DE MASRABA / A": [
            {
              station: "MAGRA",
              voters: 225
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-OULDEME / A": [
            {
              station: "MAYO-OULDEME",
              voters: 416
            },
          ],
          "ECOLE PUBLIQUE DE MAYO-PLATA / A": [
            {
              station: "MAYO-PLATA",
              voters: 1279
            },
            {
              station: "PLATA-DOUMLALAI",
              voters: 1279
            },
            {
              station: "PLATA-KAPA",
              voters: 1279
            },
          ],
          "ECOLE PUBLIQUE DE MOKIO / A": [
            {
              station: "MOKIO",
              voters: 828
            },
          ],
          "ECOLE PUBLIQUE DE MOSSOROH / A": [
            {
              station: "MOSSOROH",
              voters: 220
            },
          ],
          "ECOLE PUBLIQUE DE MOURAKA / A": [
            {
              station: "MOURAKA",
              voters: 636
            },
            {
              station: "TAZANG",
              voters: 2390
            },
          ],
          "ECOLE PUBLIQUE DE MOUYENGUE / A": [
            {
              station: "GOZOGOL",
              voters: 296
            },
            {
              station: "CHEFFERIE",
              voters: 296
            },
          ],
          "ECOLE PUBLIQUE DE OUJDEDE / A": [
            {
              station: "OUJDEDE",
              voters: 483
            },
          ],
          "ECOLE PUBLIQUE DE PALBARA / A": [
            {
              station: "PALBARA",
              voters: 499
            },
          ],
          "ECOLE PUBLIQUE DE SERAOUA / A": [
            {
              station: "SERAOUA",
              voters: 1148
            },
          ],
          "ECOLE PUBLIQUE DE TCHABA-TCHABA / A": [
            {
              station: "TCHABA-TCHABA",
              voters: 353
            },
          ],
          "GRENIER COMMUNAUTAIRE DE  DJALTAR-MAGRAMA / A": [
            {
              station: "DJALTAR",
              voters: 138
            },
            {
              station: "MAGRAMA",
              voters: 239
            },
          ],
          "GRENIER COMMUNAUTAIRE DE LOUGANDA /  A": [
            {
              station: "LOUGANDA",
              voters: 284
            },
          ],
          "HANGAR BLAMA DE CARREFOUR NDJELING /  A": [
            {
              station: "TOKOMBERE",
              voters: 2424
            },
            {
              station: "CARREFOUR",
              voters: 882
            },
            {
              station: "NDJELING",
              voters: 882
            },
          ],
          "HANGAR BLAMA DE DAKADALA / A": [
            {
              station: "DAKADALA",
              voters: 167
            },
          ],
          "HANGAR BLAMA DE KAMPALA / A": [
            {
              station: "KAMPALA",
              voters: 254
            },
          ],
          "HANGAR BLAMA DE LALAWAI TCHOUDANGOL  /A": [
            {
              station: "TCHOUDANGOL",
              voters: 295
            },
          ],
          "HANGAR BLAMA DE MOKOUNO / A": [
            {
              station: "MOKOUNO",
              voters: 115
            },
          ],
          "HANGAR BLAMA DE MOUKOLOPO / A": [
            {
              station: "MOUKOLOPO",
              voters: 97
            },
          ],
          "HANGAR BLAMA DE MOUNDOUVAYA / A": [
            {
              station: "MOUNDOUVAYA",
              voters: 654
            },
          ],
          "HANGAR BLAMA DE NGOURINGA / A": [
            {
              station: "NGOURINGA",
              voters: 354
            },
          ],
          "HANGAR BLAMA DE OULDEME PODOKO / A": [
            {
              station: "OULDEME",
              voters: 367
            },
            {
              station: "PODOKO",
              voters: 367
            },
          ],
          "HANGAR BLAMA DE OURO KROKRO / A": [
            {
              station: "KROKRO",
              voters: 475
            },
          ],
          "HANGAR BLAMA DE PALBARA-MOUGDINE / A": [
            {
              station: "PALBARA-MOUGDINE",
              voters: 301
            },
          ],
          "HANGAR BLAMA DE TINDIRME / A": [
            {
              station: "TINDIRME",
              voters: 553
            },
          ],
          "HANGAR BLAMA DELEGUE MOUYENGUE  MALTA / A": [
            {
              station: "MALTAI",
              voters: 318
            },
            {
              station: "DELEGUE",
              voters: 318
            },
          ],
          "HANGAR CHEFFERIE DE MADA / A": [
            {
              station: "MADA",
              voters: 6463
            },
            {
              station: "KOLKOCH",
              voters: 5581
            },
            {
              station: "BLAMA",
              voters: 3717
            },
            {
              station: "SALI",
              voters: 3399
            },
            {
              station: "BOUKAR",
              voters: 2517
            },
            {
              station: "CENTRE",
              voters: 3900
            },
          ],
          "HANGAR CHEFFERIE DE MAKALINGAI / A": [
            {
              station: "MAKALINGAI",
              voters: 1446
            },
          ],
          "HANGAR CHEFFERIE DE MOUYENGUE / A": [
            {
              station: "GOLDA-GOLDA",
              voters: 526
            },
          ],
          "HANGAR EGLISE ADVENTISTE DE GONDA / A": [
            {
              station: "GONDA",
              voters: 170
            },
          ],
          "HANGAR EGLISE BAPTISTE DE  MANDJOOF-MAGRAMA / A": [
            {
              station: "MANDJOOF",
              voters: 101
            },
          ],
          "HANGAR EGLISE DE MANGAVE WOILA MAYO  /A": [
            {
              station: "WOILA",
              voters: 523
            },
            {
              station: "MAYO",
              voters: 523
            },
            {
              station: "WOLORDE",
              voters: 1164
            },
            {
              station: "TCHABAWOL",
              voters: 968
            },
          ],
          "HANGAR EGLISE DE MBELECHE / A": [
            {
              station: "MBELECHE",
              voters: 195
            },
          ],
          "HANGAR EGLISE DE MOULWA / A": [
            {
              station: "MOULWA",
              voters: 227
            },
          ],
          "HANGAR EGLISE DE MOUYENGUE  BZAGAMBAI / A": [
            {
              station: "MOUYENGUE",
              voters: 1872
            },
            {
              station: "BZAGAMBAI",
              voters: 437
            },
          ],
          "HANGAR EGLISE DE PALBARA-GAZAYAKA / A": [
            {
              station: "PALBARA-GAZAYAKA",
              voters: 382
            },
          ],
          "HANGAR EGLISE UEBC LDANGUIRWA / A": [
            {
              station: "LDANGUIRWA",
              voters: 79
            },
          ],
          "HANGAR EGLISE UEEC DE KOTAMA / A": [
            {
              station: "KOTAMA",
              voters: 160
            },
          ],
          "HANGAR MARCHE DE GADABAK / A": [
            {
              station: "GADABAK",
              voters: 409
            },
          ],
          "HANGAR MARCHE DE HAGOZA / A": [
            {
              station: "HAGOZA",
              voters: 371
            },
          ],
          "HANGAR MOSQUEE DE TALA WAILA / A": [
            {
              station: "WAILA",
              voters: 715
            },
          ],
          "HANGAR PUBLIC DE BOLOGO PALBARA / A": [
            {
              station: "BOLOGO",
              voters: 154
            },
          ],
          "HANGAR PUBLIC DE DAGAL / A": [
            {
              station: "DAGAL",
              voters: 33
            },
          ],
          "HANGAR PUBLIC DE GAHADA / A": [
            {
              station: "GAHADA",
              voters: 82
            },
          ],
          "HANGAR PUBLIC DE GERE FAWA / A": [
            {
              station: "GERE",
              voters: 165
            },
            {
              station: "FAWA",
              voters: 165
            },
          ],
          "HANGAR PUBLIC DE GILING-MOUYENGUE / A": [
            {
              station: "GILING-MOUYENGUE",
              voters: 83
            },
          ],
          "HANGAR PUBLIC DE GODJI-GODJI / A": [
            {
              station: "GODJI-GODJI",
              voters: 28
            },
          ],
          "HANGAR PUBLIC DE OURO-KAOU / A": [
            {
              station: "AKANA",
              voters: 149
            },
            {
              station: "OURO-KAOU",
              voters: 149
            },
          ],
          "HANGAR PUBLIC DE TALA BECHAIR / A": [
            {
              station: "BECHAIR",
              voters: 53
            },
          ],
          "HANGAR PUBLIC DE TALA-GADJI / A": [
            {
              station: "CAMP",
              voters: 205
            },
            {
              station: "SEARAOUA",
              voters: 205
            },
            {
              station: "TALA-GADJI",
              voters: 205
            },
            {
              station: "TALA-GADOUA",
              voters: 205
            },
          ],
          "HANGAR TERRAIN DE MBEDIME / A": [
            {
              station: "MBEDIME",
              voters: 468
            },
            {
              station: "TERRAIN",
              voters: 168
            },
          ],
          "INADES DE CHIREM / A": [
            {
              station: "CHIREM",
              voters: 255
            },
          ],
          "MAIRIE DE TOKOMBERE / A": [
            {
              station: "BRIGADE",
              voters: 440
            },
            {
              station: "MAIRIE",
              voters: 440
            },
          ],
          "POSTE AGRICOLE DE MOKIO / A": [
            {
              station: "POSTE",
              voters: 348
            },
            {
              station: "AGRICOLE",
              voters: 348
            },
          ],
        },
      },
    },
  },
};
