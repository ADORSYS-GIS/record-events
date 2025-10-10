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
  "SUD-OUEST": {
    name: { en: "SOUTH-WEST", fr: "SUD-OUEST" },
    divisions: {
      "FAKO": {
        "BUEA": {
          "B.C.U.F. / A": [
            {
              station: "MOLYKO",
              voters: 10737
            },
          ],
          "BAPTIST CHURCH LOWER BOKOVA / A": [
            {
              station: "BOKOKO",
              voters: 323
            },
          ],
          "BAPTIST COMPREHENSIVE UPPER  MOKONGO / A": [
            {
              station: "GREAT",
              voters: 8541
            },
            {
              station: "SOPPO",
              voters: 9539
            },
          ],
          "BLESSING INTER. BILINGUAL SCHOOL / A": [
            {
              station: "BWITEVA",
              voters: 373
            },
          ],
          "BORSTAL (CAMP SIC/WEST FARM) / A": [
            {
              station: "WOTEKE",
              voters: 617
            },
          ],
          "BULU BLIND CENTER / A": [
            {
              station: "BULU",
              voters: 183
            },
          ],
          "C.B.C. SCHOOL BWIYUKU / A": [
            {
              station: "BWIYUKU",
              voters: 973
            },
          ],
          "C.B.C. SCHOOL LOWER BOLIFAMBA / A": [
            {
              station: "BOLIFAMBA",
              voters: 2761
            },
          ],
          "COMMMUNITY HALL BOANA / A": [
            {
              station: "BOANA",
              voters: 123
            },
          ],
          "COMMMUNITY HALL BOANDA / A": [
            {
              station: "BOANDA",
              voters: 235
            },
          ],
          "COMMMUNITY HALL BOANDO / A": [
            {
              station: "BOANDO",
              voters: 60
            },
          ],
          "COMMMUNITY HALL BOKWAI / A": [
            {
              station: "BOKWAI",
              voters: 670
            },
          ],
          "COMMMUNITY HALL BONAKANDA / A": [
            {
              station: "BONAKANDA",
              voters: 308
            },
            {
              station: "WOKULU",
              voters: 308
            },
          ],
          "COMMMUNITY HALL BONDUMA / A": [
            {
              station: "BONDUMA",
              voters: 2308
            },
          ],
          "COMMMUNITY HALL BOTEVA / A": [
            {
              station: "BOTEVA",
              voters: 60
            },
          ],
          "COMMMUNITY HALL BWILE / A": [
            {
              station: "LYSOKA",
              voters: 176
            },
          ],
          "COMMMUNITY HALL EKANDE / A": [
            {
              station: "EKANDE",
              voters: 57
            },
          ],
          "COMMMUNITY HALL EKONJO / A": [
            {
              station: "EKONJO",
              voters: 40
            },
          ],
          "COMMMUNITY HALL EWILI (NEW) / A": [
            {
              station: "MUSAKA",
              voters: 118
            },
            {
              station: "WONYA",
              voters: 2689
            },
            {
              station: "MOKUMBA",
              voters: 223
            },
          ],
          "COMMMUNITY HALL EWONDA / A": [
            {
              station: "EWONDA",
              voters: 65
            },
          ],
          "COMMMUNITY HALL LIKOMBE / A": [
            {
              station: "LIKOMBE",
              voters: 82
            },
          ],
          "COMMMUNITY HALL MAPANJA / A": [
            {
              station: "MAPANJA",
              voters: 115
            },
          ],
          "COMMMUNITY HALL MAUMU / A": [
            {
              station: "MAUMU",
              voters: 462
            },
          ],
          "COMMMUNITY HALL MEMBEA / A": [
            {
              station: "LIKOKO",
              voters: 1424
            },
            {
              station: "MEMBEA",
              voters: 1358
            },
          ],
          "COMMMUNITY HALL MOLI (NEW) / A": [
            {
              station: "MOLI",
              voters: 72
            },
          ],
          "COMMMUNITY HALL SAXENHOFF / A": [
            {
              station: "SAXENHOFF",
              voters: 37
            },
          ],
          "COMMMUNITY HALL VASINGI / A": [
            {
              station: "VASINGI",
              voters: 446
            },
          ],
          "COMMMUNITY HALL WOKAKA / A": [
            {
              station: "WOKAKA",
              voters: 75
            },
          ],
          "COMMMUNITY HALL WOKEKA / A": [
            {
              station: "WOKEKA",
              voters: 43
            },
          ],
          "COMMMUNITY HALL WOLIKAWO / A": [
            {
              station: "WOLIKAWO",
              voters: 144
            },
          ],
          "COMMMUNITY HALL WONGANJO / A": [
            {
              station: "WONGANJO",
              voters: 163
            },
          ],
          "COMMMUNITY HALL WONJAVA / A": [
            {
              station: "WONJAVA",
              voters: 67
            },
          ],
          "COMMMUNITY HALL WONJIA (NEW) / A": [
            {
              station: "WONJIA",
              voters: 95
            },
          ],
          "COMMMUNITY HALL WONYA EMONGO / A": [
            {
              station: "EMONGO",
              voters: 1163
            },
          ],
          "COMMMUNITY HALL WONYA LYONGA / A": [
            {
              station: "LYONGA",
              voters: 521
            },
          ],
          "COMMMUNITY HALL WONYA MAVIO / A": [
            {
              station: "MAVIO",
              voters: 782
            },
          ],
          "COMMMUNITY HALL WOTUTU / A": [
            {
              station: "WOTUTU",
              voters: 902
            },
          ],
          "COMMMUNITY HALL WOVILLA NATIVE / A": [
            {
              station: "WOVILLA",
              voters: 720
            },
          ],
          "COMMMUNITY MWANGAI / A": [
            {
              station: "MWANGAI",
              voters: 30
            },
          ],
          "COOPERATIVE HALL WONGANGA / A": [
            {
              station: "WONGANGA",
              voters: 838
            },
          ],
          "COURT OF APPEAL / A": [
            {
              station: "EWILI",
              voters: 751
            },
            {
              station: "GOVERNMENT",
              voters: 528
            },
            {
              station: "STATION",
              voters: 528
            },
          ],
          "CUSTOMARY COURT HALL BONJONGO / A": [
            {
              station: "BONJONGO",
              voters: 235
            },
          ],
          "CUSTOMARY COURT HALL BUEA TOWN / A": [
            {
              station: "WONDONGO",
              voters: 645
            },
          ],
          "CUSTOMARY COURT HALL UPPER MUEA / A": [
            {
              station: "MUEA",
              voters: 3748
            },
          ],
          "E.N.A.P. / A": [
            {
              station: "LOWER",
              voters: 618
            },
            {
              station: "FARMS",
              voters: 789
            },
          ],
          "ECOLE FRANCOPHONE / A": [
            {
              station: "LONG",
              voters: 932
            },
            {
              station: "ST.",
              voters: 932
            },
            {
              station: "SMALL",
              voters: 932
            },
          ],
          "FIRST POLICE DISTRICT MOKUNDA / A": [
            {
              station: "MOKUNDA",
              voters: 561
            },
          ],
          "G.B.P.S. EWONGO / A": [
            {
              station: "EWONGO",
              voters: 150
            },
          ],
          "G.S. BOMAKA / A": [
            {
              station: "BOMAKA",
              voters: 2641
            },
          ],
          "G.S. BOVA II / A": [
            {
              station: "BOVA",
              voters: 524
            },
            {
              station: "LIONGO",
              voters: 403
            },
            {
              station: "WONJOKU",
              voters: 260
            },
          ],
          "G.S. BUEA TOWN / A": [
            {
              station: "BUEA",
              voters: 1606
            },
            {
              station: "TOWN",
              voters: 1606
            },
            {
              station: "STRANGERS",
              voters: 1606
            },
          ],
          "G.S. BWASSA / A": [
            {
              station: "BWASSA",
              voters: 102
            },
          ],
          "G.S. DIBANDA / A": [
            {
              station: "DIBANDA",
              voters: 742
            },
          ],
          "G.S. MEVIO / A": [
            {
              station: "MEVIO",
              voters: 95
            },
          ],
          "G.S. MOLYKO / A": [
            {
              station: "WOKOKO",
              voters: 3163
            },
          ],
          "G.S. NA'ANGA / A": [
            {
              station: "NA'ANGA",
              voters: 288
            },
          ],
          "GENDARMERIE LEGION / A": [
            {
              station: "CLERKS'",
              voters: 513
            },
            {
              station: "QTRS",
              voters: 513
            },
            {
              station: "GENDARMERIE",
              voters: 513
            },
          ],
          "GHS BONJONGO / A": [
            {
              station: "BOJOKE",
              voters: 130
            },
            {
              station: "WOSENGE",
              voters: 130
            },
          ],
          "HINT INTERNATIONAL / A": [
            {
              station: "WOTOLO",
              voters: 1366
            },
          ],
          "JAMADALE SCHOOL / A": [
            {
              station: "BWITINGI",
              voters: 482
            },
          ],
          "MEMBEA HEALTH CENTER BOKWANGO / A": [
            {
              station: "BOKWANGO",
              voters: 1127
            },
          ],
          "MILITARY SECTOR I / A": [
            {
              station: "GRA",
              voters: 604
            },
          ],
          "MILITARY SECTOR II / A": [
            {
              station: "TWENTY",
              voters: 484
            },
            {
              station: "FIRST",
              voters: 484
            },
            {
              station: "MILITARY",
              voters: 484
            },
            {
              station: "SECTOR",
              voters: 484
            },
          ],
          "OLD GOVERNENT STATION / A": [
            {
              station: "YOUTH",
              voters: 210
            },
            {
              station: "CENTER",
              voters: 210
            },
          ],
          "PARLIAMENTARY FLAT / A": [
            {
              station: "FEDERAL",
              voters: 572
            },
          ],
          "POLICE BARARACKS / A": [
            {
              station: "POLICE",
              voters: 232
            },
            {
              station: "CANTEEN",
              voters: 232
            },
          ],
          "POLICE PERSONEL / A": [
            {
              station: "NATIONAL",
              voters: 171
            },
            {
              station: "SECURITY",
              voters: 171
            },
            {
              station: "DELEGATION",
              voters: 171
            },
            {
              station: "UPPER",
              voters: 171
            },
          ],
          "PRES CHURCH BOSSUMBU / A": [
            {
              station: "BOSSUMBU",
              voters: 50
            },
          ],
          "PRISON LECTURE HALL / A": [
            {
              station: "WARDERS'",
              voters: 175
            },
            {
              station: "BARRACKS",
              voters: 175
            },
          ],
          "SURVEY SCHOOL / A": [
            {
              station: "CLERK'S",
              voters: 1727
            },
            {
              station: "QUARTERS",
              voters: 2299
            },
          ],
        },
        "IDENAU": {
          "BIR BASE (NEW) / A": [
            {
              station: "BIBUNDE",
              voters: 2895
            },
          ],
          "CDC SECTORIAL OFFICE NJONJI / A": [
            {
              station: "NJONJI",
              voters: 291
            },
          ],
          "CDC SECTORIAL OFFICE SODEN / A": [
            {
              station: "SODEN",
              voters: 82
            },
          ],
          "CDC SECTOTIONAL OFFICE / A": [
            {
              station: "ISONGO",
              voters: 580
            },
          ],
          "COMMUNITY HALL ETOME / A": [
            {
              station: "ETOME",
              voters: 67
            },
          ],
          "GOV'T PRACT. SCHOOL KOSSE II / A": [
            {
              station: "KOSSE",
              voters: 16
            },
          ],
          "GREEN VALLEY / A": [
            {
              station: "BAKINGILI",
              voters: 415
            },
          ],
          "GS ENYENGE / A": [
            {
              station: "ENYENGE",
              voters: 235
            },
          ],
          "GS IDENAU GROUP I / A": [
            {
              station: "SCIPIO/RESCHFLUSS",
              voters: 287
            },
          ],
          "HEALTH CENTER SANJE / A": [
            {
              station: "SANJE",
              voters: 87
            },
          ],
          "MOBILE CANOPY / A": [
            {
              station: "BAROMBI",
              voters: 193
            },
            {
              station: "DEBUNDSCHA",
              voters: 432
            },
          ],
        },
        "LIMBE I": {
          "APOSTOLIC FAITH MAWOH / A": [
            {
              station: "MAWOH",
              voters: 1424
            },
          ],
          "BILL & SCOTT NURSERY/PRIMARY SCHOOL /  A": [
            {
              station: "LUMPSUM",
              voters: 680
            },
          ],
          "CATHOLIC SCHOOL GARDENS / A": [
            {
              station: "MOKEBA",
              voters: 1012
            },
          ],
          "CBC PRIM. SCHOOL BONADIKOMBO / A": [
            {
              station: "NEWTOWN",
              voters: 3909
            },
          ],
          "CHAMBER OF COMMERCE / A": [
            {
              station: "MBONJO/DOCKYARD",
              voters: 349
            },
          ],
          "COLLEGE SONARA / A": [
            {
              station: "CITE",
              voters: 937
            },
            {
              station: "NANGA/SONARA",
              voters: 937
            },
          ],
          "COMMUNITY HALL BOTA / A": [
            {
              station: "MIDDLEFARMS",
              voters: 1060
            },
          ],
          "COMMUNITY HALL MEVEO / A": [
            {
              station: "MEVEO",
              voters: 69
            },
            {
              station: "MBENGE",
              voters: 69
            },
            {
              station: "VILLAGE",
              voters: 69
            },
          ],
          "COMMUNITY HALL, BONADIKOMBO / A": [
            {
              station: "BONADIKOMBO",
              voters: 8539
            },
          ],
          "DELEGATION OF AGRIC / A": [
            {
              station: "TWO",
              voters: 1075
            },
          ],
          "DELEGATION OF URBAN AFFAIRS / A": [
            {
              station: "COCONUT",
              voters: 391
            },
            {
              station: "ISLAND",
              voters: 391
            },
          ],
          "ECOLE FRANCOPHONE,MILE ONE / A": [
            {
              station: "LIVANDA",
              voters: 1728
            },
            {
              station: "CONGO/NURSES",
              voters: 1728
            },
            {
              station: "QUARTER",
              voters: 7149
            },
          ],
          "FEICOM / A": [
            {
              station: "NAMBEKE",
              voters: 420
            },
            {
              station: "PHEMBELE",
              voters: 420
            },
          ],
          "G.H.S. LIMBE / A": [
            {
              station: "MAFANY",
              voters: 1097
            },
          ],
          "G.N.S. MABETA NEWLAYOUT / A": [
            {
              station: "MABETA",
              voters: 1031
            },
            {
              station: "NEWLAYOUT",
              voters: 1031
            },
          ],
          "G.S. BOSSUMBU / A": [
            {
              station: "LOWER",
              voters: 585
            },
            {
              station: "BOSSUMBU",
              voters: 585
            },
          ],
          "G.S. BOTA / A": [
            {
              station: "LIMBE",
              voters: 1063
            },
          ],
          "G.S. MILE ONE / A": [
            {
              station: "MILE",
              voters: 3156
            },
            {
              station: "ONE",
              voters: 2081
            },
          ],
          "G.S. MOTOWOH / A": [
            {
              station: "MOTOWOH",
              voters: 1207
            },
          ],
          "G.S. NEWTOWN / A": [
            {
              station: "SOUTH",
              voters: 597
            },
            {
              station: "EAST",
              voters: 597
            },
            {
              station: "COMMUNITY",
              voters: 597
            },
          ],
          "G.S. TOWE / A": [
            {
              station: "TOWE",
              voters: 2602
            },
          ],
          "LIMBE RIVER CLUB / A": [
            {
              station: "CUSTOM/FEDERAL",
              voters: 385
            },
            {
              station: "QUARTERS",
              voters: 1497
            },
          ],
          "LIMBE URBAN COUNCIL HALL / A": [
            {
              station: "DOWNBEACH/BOTANIC",
              voters: 261
            },
            {
              station: "GARDENS",
              voters: 1067
            },
          ],
          "NURSING AID SCHOOL / A": [
            {
              station: "UNITY",
              voters: 2060
            },
          ],
          "OLD BOULANGERIE / A": [
            {
              station: "CHURCH",
              voters: 534
            },
            {
              station: "STREET",
              voters: 534
            },
          ],
          "PHYTOSANITARY BASE / A": [
            {
              station: "CASSAVA",
              voters: 1683
            },
            {
              station: "FARMS",
              voters: 2695
            },
          ],
          "PREVENTIVE MEDICINE / A": [
            {
              station: "CLERK'S",
              voters: 681
            },
            {
              station: "QTRS/COW",
              voters: 681
            },
            {
              station: "FENCE",
              voters: 681
            },
          ],
          "S.S. CLUB BOTA / A": [
            {
              station: "G.R.A",
              voters: 1112
            },
            {
              station: "/S.S.",
              voters: 1112
            },
          ],
          "SENIOR OVERSEERS OFFICE, MOLIWE / A": [
            {
              station: "CAMP",
              voters: 1159
            },
            {
              station: "C.D.C.",
              voters: 96
            },
            {
              station: "MOLIWE",
              voters: 321
            },
          ],
          "VETERINARY POST / A": [
            {
              station: "MBENDE",
              voters: 385
            },
            {
              station: "EAST/WEST",
              voters: 385
            },
          ],
        },
        "LIMBE II": {
          "ARMY CAMP HALL CAPE LIMBO / A": [
            {
              station: "CSPS",
              voters: 108
            },
            {
              station: "ARMY",
              voters: 108
            },
            {
              station: "CAMP",
              voters: 1926
            },
            {
              station: "CAPE",
              voters: 1042
            },
            {
              station: "LIMBO",
              voters: 1042
            },
          ],
          "BEATRICE HENRY SCHOOL / A": [
            {
              station: "ISOKOLO",
              voters: 1743
            },
            {
              station: "OLD",
              voters: 1743
            },
            {
              station: "ROAD",
              voters: 1743
            },
          ],
          "CAMP HALL TOPLINE LIMBOLA / A": [
            {
              station: "CITE",
              voters: 934
            },
            {
              station: "SONARA",
              voters: 934
            },
            {
              station: "TOPLINE",
              voters: 50
            },
            {
              station: "CDC",
              voters: 50
            },
          ],
          "COMM. HALL BOANDO / A": [
            {
              station: "LOWER",
              voters: 154
            },
            {
              station: "BOANDO",
              voters: 154
            },
          ],
          "COMMUNITY FIELD NGEME / A": [
            {
              station: "NGEME",
              voters: 1027
            },
          ],
          "COMMUNITY HALL BATOKE / A": [
            {
              station: "BATOKE",
              voters: 3233
            },
          ],
          "COMMUNITY HALL BOTALAND / A": [
            {
              station: "BOTALAND",
              voters: 3571
            },
          ],
          "COMMUNITY HALL KIE / A": [
            {
              station: "KIE",
              voters: 174
            },
          ],
          "COMMUNITY HALL LIMBOLA / A": [
            {
              station: "LIMBOLA",
              voters: 647
            },
          ],
          "COMMUNITY HALL MOKUNDA / A": [
            {
              station: "MOKUNDA",
              voters: 1206
            },
          ],
          "COMMUNITY HALL WOVIA / A": [
            {
              station: "WOVIA",
              voters: 806
            },
          ],
          "GS MOKUNDANGE / A": [
            {
              station: "MOKUNDANGE",
              voters: 1257
            },
          ],
          "MOKINDI COMM HALL / A": [
            {
              station: "MOKINDI",
              voters: 1368
            },
          ],
          "MUNICIPAL HALL RESTAURANT / A": [
            {
              station: "KRATER",
              voters: 1768
            },
          ],
          "STAFF BILINGUAL NURS. AND PRIM. SCHOOL  /A": [
            {
              station: "BOBENDE",
              voters: 868
            },
          ],
        },
        "LIMBE III": {
          "BIR MAN-O-WAR BAY / A": [
            {
              station: "BIR",
              voters: 2360
            },
            {
              station: "MAN-O-WAR",
              voters: 2360
            },
            {
              station: "BAY",
              voters: 2360
            },
            {
              station: "CENTER",
              voters: 2360
            },
          ],
          "CDC BIMBIA CAMP OFIICE / A": [
            {
              station: "CDC",
              voters: 532
            },
            {
              station: "BIMBIA",
              voters: 517
            },
            {
              station: "CAMP/ESELE",
              voters: 388
            },
            {
              station: "NATIVE",
              voters: 388
            },
            {
              station: "MONDOLI",
              voters: 388
            },
          ],
          "CDC CLUB HALL MABETA / A": [
            {
              station: "MABETA",
              voters: 265
            },
            {
              station: "CAMP",
              voters: 144
            },
          ],
          "COMMUNITY HALL BONABILE / A": [
            {
              station: "BONABILE",
              voters: 77
            },
            {
              station: "VILLAGE",
              voters: 594
            },
          ],
          "COMMUNITY HALL BONANGOMBE / A": [
            {
              station: "BONANGOMBE",
              voters: 99
            },
          ],
          "COMMUNITY HALL DIKOLO BIMBIA / A": [
            {
              station: "DIKOLO",
              voters: 129
            },
          ],
          "COUNCIL CHECK POINT / A": [
            {
              station: "MANGA",
              voters: 1582
            },
            {
              station: "HILL",
              voters: 1582
            },
          ],
          "CRTV TRANSMISSION CENTER / A": [
            {
              station: "CHOP",
              voters: 54
            },
            {
              station: "FARM",
              voters: 54
            },
          ],
          "GS KANGE / A": [
            {
              station: "KANGE",
              voters: 105
            },
            {
              station: "FISHING",
              voters: 330
            },
            {
              station: "PORT",
              voters: 330
            },
          ],
          "GS MBOKO I / A": [
            {
              station: "MBOKO",
              voters: 52
            },
            {
              station: "MBOMO",
              voters: 52
            },
          ],
        },
        "MUYUKA": {
          "AGRIC POST BAFIA / A": [
            {
              station: "BAFIA",
              voters: 1089
            },
          ],
          "BAVENGA COMMUNITY HALL / A": [
            {
              station: "BAVENGA",
              voters: 19
            },
          ],
          "CATHOLIC SCHOOL EKONA MBENGE / A": [
            {
              station: "MBENGE",
              voters: 2644
            },
          ],
          "CATHOLIC SCHOOL MALENDE / A": [
            {
              station: "MALENDE",
              voters: 990
            },
          ],
          "CATHOLIC SCHOOL MAUTU / A": [
            {
              station: "MAUTU",
              voters: 566
            },
          ],
          "CDC CAMDEV I OFFICE / A": [
            {
              station: "CDC",
              voters: 994
            },
            {
              station: "CAMDEV",
              voters: 621
            },
          ],
          "COURT HALL MUYUKA / A": [
            {
              station: "MUYUKA",
              voters: 6635
            },
            {
              station: "BALONG",
              voters: 3386
            },
          ],
          "EKONA LELU COMMUNITY HALL / A": [
            {
              station: "EKONA",
              voters: 3053
            },
            {
              station: "LELU",
              voters: 36
            },
          ],
          "ELDERS AND FIFFS / A": [
            {
              station: "ELDERS",
              voters: 31
            },
            {
              station: "AND",
              voters: 31
            },
            {
              station: "FIFFS",
              voters: 31
            },
            {
              station: "VILLAGE",
              voters: 6126
            },
          ],
          "GBHS MUYUKA / A": [
            {
              station: "STRANGERS",
              voters: 3249
            },
            {
              station: "QUARTERS",
              voters: 3249
            },
          ],
          "GNS EKONA MBENGE / A": [
            {
              station: "YARD",
              voters: 373
            },
          ],
          "IKATA COOP HALL / A": [
            {
              station: "IKATA",
              voters: 729
            },
          ],
          "LEOLA BUEA COMMUNITY / A": [
            {
              station: "LEOLA",
              voters: 13
            },
            {
              station: "BUEA",
              voters: 13
            },
          ],
          "LILALE COOP HALL / A": [
            {
              station: "LILALE",
              voters: 194
            },
          ],
          "LYKOKO VILLAGE COMMUNITY HALL / A": [
            {
              station: "LYKOKO",
              voters: 591
            },
          ],
          "MASUMA COMMUNITY HALL / A": [
            {
              station: "MASUMA",
              voters: 16
            },
          ],
          "MBO QUARTER YOKE / A": [
            {
              station: "YOKE",
              voters: 3260
            },
          ],
          "MEANJA CAMP HALL / A": [
            {
              station: "MEANJA",
              voters: 888
            },
          ],
          "MILE 29 CAMP / A": [
            {
              station: "MILE",
              voters: 217
            },
          ],
          "MPUNDU BALONG COM. HALL (NATIVE) / A": [
            {
              station: "MPUNDU",
              voters: 668
            },
          ],
          "MUNDAME CAMP OFFICE / A": [
            {
              station: "MUNDAME",
              voters: 95
            },
          ],
          "MUYENGE CATHOLIC SCHOOL KCB / A": [
            {
              station: "MUNYENGE",
              voters: 1449
            },
          ],
          "MUYENGE GS / A": [
            {
              station: "MASONE",
              voters: 609
            },
          ],
          "OWE COMMUNITY HALL / A": [
            {
              station: "OWE",
              voters: 967
            },
          ],
          "POWO CDC CAMP OFFICE / A": [
            {
              station: "POWO",
              voters: 14
            },
            {
              station: "CAMP",
              voters: 14
            },
          ],
        },
        "TIKO": {
          "AIRPORT TIKO / A": [
            {
              station: "LIKOMBA",
              voters: 8396
            },
          ],
          "BANANA EXPANSION OFFICE TIKO / A": [
            {
              station: "HOLFORTH",
              voters: 1889
            },
            {
              station: "LONG",
              voters: 5999
            },
          ],
          "BIG IKANGE CAMP OFFICE / A": [
            {
              station: "IKANGE",
              voters: 199
            },
            {
              station: "VILLAGE",
              voters: 199
            },
          ],
          "BSA / A": [
            {
              station: "TIKO",
              voters: 1202
            },
            {
              station: "BEACH",
              voters: 1202
            },
          ],
          "BWINGA CAMP OFFICE / A": [
            {
              station: "TONGO",
              voters: 55
            },
            {
              station: "NATIVE",
              voters: 55
            },
          ],
          "CAMP 12 OFFICE / A": [
            {
              station: "MONDONI",
              voters: 637
            },
          ],
          "CAMP 6 OFFICE / A": [
            {
              station: "ESSOASSOA",
              voters: 179
            },
          ],
          "CBC SCHOOL MISAKA / A": [
            {
              station: "MISAKA",
              voters: 283
            },
          ],
          "CIAP MUTENGENE / A": [
            {
              station: "MUTENGENE",
              voters: 16708
            },
          ],
          "COMMUNITY HEALTH CENTER BONASONE / A": [
            {
              station: "MONGO",
              voters: 99
            },
          ],
          "CUSTOMARY COURT HALL TIKO / A": [
            {
              station: "JOHN",
              voters: 937
            },
            {
              station: "HOLT",
              voters: 937
            },
          ],
          "GOV'T HEALTH CENTER MOQUO CAMP / A": [
            {
              station: "MOQUO",
              voters: 447
            },
          ],
          "GOV'T NURSE. SCHOOL OMBE NEW LAYOUT /  A": [
            {
              station: "OMBE",
              voters: 582
            },
          ],
          "GOV'T SCHOOL MISSELLELE / A": [
            {
              station: "MISSELLELE",
              voters: 688
            },
          ],
          "GOV'T SCHOOL PUNGO CAMP / A": [
            {
              station: "PUNGO",
              voters: 179
            },
          ],
          "GOV'T SEC. SCHOOL MOTOMBOLOMBO / A": [
            {
              station: "MOTOMBOLOMBO",
              voters: 1882
            },
            {
              station: "AND",
              voters: 2858
            },
            {
              station: "NEW",
              voters: 2858
            },
            {
              station: "QUARTER",
              voters: 2858
            },
          ],
          "GOVERNMENT SCHOOL LIFONGO / A": [
            {
              station: "LIFONGO",
              voters: 96
            },
          ],
          "GOVERNMENT SCHOOL NDONGO / A": [
            {
              station: "NDONGO",
              voters: 175
            },
            {
              station: "CAMP",
              voters: 175
            },
            {
              station: "GOLF",
              voters: 175
            },
            {
              station: "QTR",
              voters: 175
            },
          ],
          "GOVERNMENT SCHOOL TIKO TOWN / A": [
            {
              station: "BOMA",
              voters: 2501
            },
            {
              station: "STREET",
              voters: 8500
            },
            {
              station: "MUDEKA",
              voters: 1271
            },
          ],
          "KEME CAMP OFFICE / A": [
            {
              station: "KEME",
              voters: 59
            },
          ],
          "KOKE CAMP OFFICE / A": [
            {
              station: "KOKE",
              voters: 101
            },
          ],
          "MARTE CAMP OFFICE / A": [
            {
              station: "MARTE",
              voters: 235
            },
          ],
          "NEW BONAKO FORESTRY POST / A": [
            {
              station: "BONAKO",
              voters: 456
            },
          ],
          "NGOMBE I KOMBOS / A": [
            {
              station: "KOMBOS",
              voters: 22
            },
          ],
          "PUNGO MATUTE CAMP OFFICE / A": [
            {
              station: "MATUTE",
              voters: 51
            },
          ],
          "SONNE CAMP OFFICE / A": [
            {
              station: "SONNE",
              voters: 115
            },
          ],
          "TIKO RURAL COUNCIL CHECK POINT I / A": [
            {
              station: "KONGWE",
              voters: 41
            },
          ],
        },
      },
      "NDIAN": {
        "DIKOME-BALUE": {
          "CATHOLIC MISSION / A": [
            {
              station: "ITENDE",
              voters: 248
            },
          ],
          "G S BETENGE BALUE / A": [
            {
              station: "BETENGE",
              voters: 550
            },
          ],
          "G S BONJI BALUE / A": [
            {
              station: "BONJI",
              voters: 245
            },
          ],
          "G S DIBOKI BALUE / A": [
            {
              station: "DIBOKI",
              voters: 73
            },
          ],
          "G S DIFENDA BALUE / A": [
            {
              station: "DIFENDA",
              voters: 456
            },
          ],
          "G S DIKOME BALUE / A": [
            {
              station: "DIKOME",
              voters: 1312
            },
            {
              station: "BALUE",
              voters: 4393
            },
          ],
          "G S MBOMBE BALUE / A": [
            {
              station: "MBOMBE",
              voters: 40
            },
          ],
          "G S MEKOMA BALUE / A": [
            {
              station: "MEKOMA",
              voters: 141
            },
          ],
          "G S MOFAKO BALUE / A": [
            {
              station: "MOFAKO",
              voters: 366
            },
          ],
          "G S WEME BALUE / A": [
            {
              station: "BONA",
              voters: 192
            },
            {
              station: "BOSUNGA",
              voters: 192
            },
            {
              station: "WEME",
              voters: 192
            },
          ],
          "G T C EBOBE BALUE / A": [
            {
              station: "EBOBE",
              voters: 148
            },
          ],
          "NDONONO COM.HALL / A": [
            {
              station: "NDONONO",
              voters: 238
            },
          ],
        },
        "EKONDO-TITI": {
          "ARMY CAMP / A": [
            {
              station: "TITI",
              voters: 5467
            },
            {
              station: "MARINE",
              voters: 373
            },
            {
              station: "BATTALION",
              voters: 373
            },
          ],
          "BAFAKA COM. HALL / A": [
            {
              station: "BAFAKA",
              voters: 595
            },
            {
              station: "BALUE",
              voters: 2877
            },
          ],
          "BERENGE COM. HALL / A": [
            {
              station: "BERENGE",
              voters: 53
            },
          ],
          "BEYANGA CDC OFFICE / A": [
            {
              station: "CDC",
              voters: 21
            },
            {
              station: "BEYANGA",
              voters: 21
            },
          ],
          "BISORO HEALTH CENTRE / A": [
            {
              station: "BISORO",
              voters: 209
            },
          ],
          "BONGONGO I COM. HALL / A": [
            {
              station: "BONGONGO",
              voters: 833
            },
          ],
          "CS EKONDO TITI / A": [
            {
              station: "WARD",
              voters: 6617
            },
          ],
          "EKWE COM. HALL / A": [
            {
              station: "EKWE",
              voters: 376
            },
          ],
          "GHS BEKORA BAROMBI / A": [
            {
              station: "BEKORA",
              voters: 1456
            },
            {
              station: "BAROMBI",
              voters: 2658
            },
          ],
          "GS BEKATAKO BALUE / A": [
            {
              station: "BEKATAKO",
              voters: 128
            },
          ],
          "GS DIBONDA BALONDO / A": [
            {
              station: "DIBONDA",
              voters: 47
            },
            {
              station: "BALONDO",
              voters: 1004
            },
          ],
          "GS DORA BAROMBI / A": [
            {
              station: "DORA",
              voters: 86
            },
          ],
          "GS EKONDO TITI BEACH / A": [
            {
              station: "BLACK",
              voters: 30
            },
            {
              station: "BUSH",
              voters: 30
            },
            {
              station: "AND",
              voters: 280
            },
            {
              station: "FISHING",
              voters: 30
            },
            {
              station: "PORTS",
              voters: 30
            },
            {
              station: "(BEACH)",
              voters: 30
            },
          ],
          "GS FUNGE BALONDO / A": [
            {
              station: "FUNGE",
              voters: 103
            },
            {
              station: "KUMBE",
              voters: 538
            },
          ],
          "GS ILIBANYANGA BALUE / A": [
            {
              station: "ILIBANYANGE",
              voters: 96
            },
          ],
          "GS ILLOR BALONDO / A": [
            {
              station: "ILLOR",
              voters: 125
            },
          ],
          "GS KOTTO BALUE / A": [
            {
              station: "KOTTO",
              voters: 94
            },
          ],
          "GS LIPENJA BAROMBI / A": [
            {
              station: "LIPENJA/NWENGI",
              voters: 144
            },
          ],
          "GS LOBE ESTATE GROUP III / A": [
            {
              station: "ESTATE",
              voters: 797
            },
            {
              station: "CAMPS",
              voters: 797
            },
          ],
          "GS LOE BALONDO / A": [
            {
              station: "LOE",
              voters: 89
            },
          ],
          "GS MASORE BALUE / A": [
            {
              station: "MASORE",
              voters: 130
            },
          ],
          "GS MOKONO BAROMBI / A": [
            {
              station: "MOKONO",
              voters: 139
            },
          ],
          "GS MONYANGE BALUE / A": [
            {
              station: "MONYANGE",
              voters: 24
            },
          ],
          "GS NALENDE BALUE / A": [
            {
              station: "NALENDE",
              voters: 93
            },
          ],
          "GS NGOLO METOKO BALUE / A": [
            {
              station: "NGOLO",
              voters: 202
            },
            {
              station: "METOKO",
              voters: 202
            },
          ],
          "GS PONDO BALUE / A": [
            {
              station: "PONDO",
              voters: 208
            },
          ],
          "GSS KITTA BALUE / A": [
            {
              station: "KITTA",
              voters: 202
            },
          ],
          "LIPENJA CLUB / A": [
            {
              station: "LIPENJA",
              voters: 334
            },
          ],
          "LOBE BALONDO COM. HALL / A": [
            {
              station: "LOBE",
              voters: 1482
            },
          ],
          "MANAGEMENT CLUB LOBE / A": [
            {
              station: "MGT-SUP",
              voters: 68
            },
            {
              station: "STAFF",
              voters: 68
            },
            {
              station: "QTRS",
              voters: 68
            },
          ],
          "NJIMA COM.HALL / A": [
            {
              station: "NJIMA",
              voters: 29
            },
          ],
          "PAMOL EKONDO NENE OFFICE / A": [
            {
              station: "PAMOL",
              voters: 401
            },
            {
              station: "EKONDO",
              voters: 5589
            },
            {
              station: "NENE",
              voters: 122
            },
          ],
          "RESEARCH OFFICE LOBE / A": [
            {
              station: "CAMP",
              voters: 132
            },
            {
              station: "JUNGLE",
              voters: 132
            },
            {
              station: "VILLAGE",
              voters: 132
            },
          ],
        },
        "IDABATO": {
          "DELTA BIR CAMP / A": [
            {
              station: "DELTA",
              voters: 538
            },
            {
              station: "BIR",
              voters: 538
            },
            {
              station: "JABANE",
              voters: 1614
            },
          ],
          "GPS IDABATO 2B / A": [
            {
              station: "DIAMOND",
              voters: 1460
            },
            {
              station: "EDEN",
              voters: 730
            },
            {
              station: "ABASI",
              voters: 730
            },
            {
              station: "EKEYA",
              voters: 730
            },
            {
              station: "GIDIGIDI",
              voters: 730
            },
            {
              station: "IDABATO",
              voters: 730
            },
            {
              station: "KOMBO",
              voters: 1390
            },
            {
              station: "AMUNJA",
              voters: 1390
            },
            {
              station: "NKOBODI",
              voters: 730
            },
          ],
          "GPS KOMBO AMUNJA 1 / A": [
            {
              station: "PASTOR",
              voters: 220
            },
            {
              station: "VILLAGE",
              voters: 220
            },
            {
              station: "SHELL",
              voters: 660
            },
            {
              station: "CREEK",
              voters: 660
            },
          ],
          "HEALTH CENTER NDO LOCATION / A": [
            {
              station: "NAWUMSI",
              voters: 165
            },
            {
              station: "NDO",
              voters: 55
            },
            {
              station: "LOCATION",
              voters: 55
            },
          ],
        },
        "ISANGUELE": {
          "COUNCIL CHAMBERS / A": [
            {
              station: "ORON",
              voters: 323
            },
          ],
          "G.P.S BATEKA / A": [
            {
              station: "IDIBANYANGHA",
              voters: 447
            },
          ],
          "G.S MASSAKA / A": [
            {
              station: "MASSAKA",
              voters: 138
            },
          ],
          "GENDARMERIE BRIGADE / A": [
            {
              station: "BATEKA",
              voters: 780
            },
          ],
          "GVMT. SCHOOL IDIBANYANGA / A": [
            {
              station: "IDIBANYANGA",
              voters: 102
            },
            {
              station: "ITANYAYANG",
              voters: 102
            },
            {
              station: "PAMOL",
              voters: 102
            },
            {
              station: "CAMP",
              voters: 102
            },
          ],
          "MILITARY POST RIO-DEL-REY / A": [
            {
              station: "BON-BON",
              voters: 47
            },
            {
              station: "RIO-DEL",
              voters: 29
            },
            {
              station: "-REY",
              voters: 29
            },
          ],
          "TOWN HALL AMOTO / A": [
            {
              station: "AMOTO",
              voters: 746
            },
            {
              station: "BUSH",
              voters: 373
            },
            {
              station: "DIBONDORIKPA",
              voters: 373
            },
            {
              station: "EKUMAMINDO",
              voters: 373
            },
            {
              station: "ISO-OBO",
              voters: 639
            },
            {
              station: "ITANYANYANG",
              voters: 373
            },
          ],
        },
        "KOMBO-ABEDIMO": {
          "GS AKWA / A": [
            {
              station: "AKWA",
              voters: 467
            },
          ],
          "GS MBENMONG / A": [
            {
              station: "MBENMONG",
              voters: 59
            },
          ],
          "KOMBO ABEDIMO MILITARY BARRACKS / A": [
            {
              station: "KOMBO",
              voters: 237
            },
            {
              station: "ABEDIMO",
              voters: 237
            },
            {
              station: "FISHING",
              voters: 237
            },
            {
              station: "PORT",
              voters: 237
            },
          ],
        },
        "KOMBO-ITINDI": {
          "G.S. BARRACKS / A": [
            {
              station: "BARRACKS",
              voters: 459
            },
          ],
          "G.S. NGOSSO / A": [
            {
              station: "NGOSSO",
              voters: 619
            },
          ],
          "MILITARY POST / A": [
            {
              station: "GOC",
              voters: 283
            },
          ],
        },
      },
      "MANYU": {
        "MAMFE": {
          "BALI MEETING HALL / A": [
            {
              station: "BANSO",
              voters: 225
            },
            {
              station: "QUARTER",
              voters: 225
            },
          ],
          "CATHOLIC MISSION HALL / A": [
            {
              station: "NEWLAYOUT",
              voters: 576
            },
          ],
          "COMMUNITY DEVELOPMENT OFFICE / A": [
            {
              station: "JOHN",
              voters: 205
            },
            {
              station: "HOLT",
              voters: 205
            },
          ],
          "COMMUNITY HALL TETOCKONOCK / A": [
            {
              station: "BESONGABANG",
              voters: 860
            },
          ],
          "CREDIT UNION HALL / A": [
            {
              station: "OKOYONG",
              voters: 809
            },
          ],
          "G.S BACHUO NTAI I / A": [
            {
              station: "BACHUO",
              voters: 1044
            },
            {
              station: "NTAI",
              voters: 1044
            },
          ],
          "G.S BANYA / A": [
            {
              station: "BANYA",
              voters: 816
            },
            {
              station: "MAMFE",
              voters: 5059
            },
            {
              station: "URBAN",
              voters: 5059
            },
          ],
          "G.S ESHOBI / A": [
            {
              station: "ESHOBI",
              voters: 286
            },
          ],
          "G.S ESHOBI GROUP II BERORE / A": [
            {
              station: "BERORE",
              voters: 250
            },
          ],
          "G.S EYANCHANG/ETEMETEK / A": [
            {
              station: "ETEMETEK",
              voters: 84
            },
          ],
          "G.S.S BACHUO NTAI I / A": [
            {
              station: "NCHANG",
              voters: 928
            },
          ],
          "GPS EGBEKAW / A": [
            {
              station: "EGBEKAW",
              voters: 950
            },
          ],
          "GVMT. SCHOOL BOMBE / A": [
            {
              station: "BOMBE",
              voters: 67
            },
          ],
          "OPERATION AKWAYA CHURCH / A": [
            {
              station: "BEJA",
              voters: 28
            },
          ],
          "VILLAGE HALL EYANCHANG / A": [
            {
              station: "EYANCHANG",
              voters: 277
            },
          ],
          "VILLAGE HALL EYANGNTUI / A": [
            {
              station: "EYANGNTUI",
              voters: 209
            },
          ],
          "VILLAGE HALL NFAITOCK II / A": [
            {
              station: "NFAITOCK",
              voters: 156
            },
          ],
          "WOMEN CENTRE / A": [
            {
              station: "HAUSA",
              voters: 726
            },
            {
              station: "QUARTERS",
              voters: 726
            },
          ],
        },
        "TINTO": {
          "ARM SCHOOL ADJELI / A": [
            {
              station: "ADJELI",
              voters: 42
            },
          ],
          "ARM SCHOOL EYANG. LAST BUSH / A": [
            {
              station: "EYANGATEMAKO",
              voters: 54
            },
            {
              station: "LAST",
              voters: 54
            },
            {
              station: "BUSH",
              voters: 54
            },
          ],
          "ARM SCHOOL KEPELLE / A": [
            {
              station: "KEPELLE",
              voters: 70
            },
          ],
          "ARM SCHOOL TAFU / A": [
            {
              station: "TAFU",
              voters: 52
            },
          ],
          "ARM SCHOOL TINTO MBU / A": [
            {
              station: "MBU",
              voters: 134
            },
          ],
          "CATH. SCHOOL BACHUO AKAGBE / A": [
            {
              station: "BACHUO",
              voters: 1323
            },
            {
              station: "AKAGBE",
              voters: 1323
            },
          ],
          "CATHOLIC SCHOOL MBEME / A": [
            {
              station: "MBEME",
              voters: 490
            },
          ],
          "COOPERATIVE HALL ASHUM / A": [
            {
              station: "ASHUM",
              voters: 412
            },
          ],
          "GOV'T SCHOOL AGONG / A": [
            {
              station: "AGONG",
              voters: 297
            },
            {
              station: "KENYANG",
              voters: 297
            },
            {
              station: "SABES",
              voters: 491
            },
          ],
          "GOV'T SCHOOL AKIRIBA / A": [
            {
              station: "AKIRIBA",
              voters: 164
            },
          ],
          "GOV'T SCHOOL ATI NUMBA / A": [
            {
              station: "ATI",
              voters: 102
            },
            {
              station: "NUMBA",
              voters: 481
            },
          ],
          "GOV'T SCHOOL ATIBONG WIRE / A": [
            {
              station: "ATIBONG",
              voters: 162
            },
            {
              station: "WIRE",
              voters: 704
            },
          ],
          "GOV'T SCHOOL AYUKABA / A": [
            {
              station: "AYUKABA",
              voters: 135
            },
          ],
          "GOV'T SCHOOL BATOH NUMBA / A": [
            {
              station: "BATOH",
              voters: 168
            },
          ],
          "GOV'T SCHOOL EBEAGWA / A": [
            {
              station: "EBEAGWA",
              voters: 149
            },
          ],
          "GOV'T SCHOOL EBENSUK / A": [
            {
              station: "EBENSUK",
              voters: 78
            },
          ],
          "GOV'T SCHOOL EKPAW / A": [
            {
              station: "EKPAW",
              voters: 105
            },
          ],
          "GOV'T SCHOOL ETOKO / A": [
            {
              station: "ETOKO",
              voters: 515
            },
          ],
          "GOV'T SCHOOL EYANGATEMAKO / A": [
            {
              station: "EYANGATAMAKO",
              voters: 379
            },
          ],
          "GOV'T SCHOOL FOTABE / A": [
            {
              station: "FOTABE",
              voters: 368
            },
          ],
          "GOV'T SCHOOL KEKPOTI / A": [
            {
              station: "KEKPOTI",
              voters: 95
            },
          ],
          "GOV'T SCHOOL KENDEM / A": [
            {
              station: "KENDEM",
              voters: 536
            },
          ],
          "GOV'T SCHOOL MBANGA PONGO / A": [
            {
              station: "MBANGA",
              voters: 122
            },
            {
              station: "PONGO",
              voters: 122
            },
          ],
          "GOV'T SCHOOL MBINJONG / A": [
            {
              station: "MBINJONG",
              voters: 527
            },
          ],
          "GOV'T SCHOOL MFAITOCK IA / A": [
            {
              station: "NFAITOCK",
              voters: 300
            },
          ],
          "GOV'T SCHOOL NCHEMBA I / A": [
            {
              station: "NCHEMBA",
              voters: 270
            },
          ],
          "GOV'T SCHOOL NFAINCHANG / A": [
            {
              station: "NFAINCHANG",
              voters: 119
            },
          ],
          "GOV'T SCHOOL NTENMBANG / A": [
            {
              station: "NTENMBANG",
              voters: 213
            },
          ],
          "GOV'T SCHOOL NYENEBA / A": [
            {
              station: "NYENNEBA",
              voters: 370
            },
          ],
          "GOV'T SCHOOL OBANG 3 CORNER / A": [
            {
              station: "OBANG",
              voters: 197
            },
            {
              station: "CORNER",
              voters: 197
            },
          ],
          "GOV'T SCHOOL TAKWAI / A": [
            {
              station: "TAKWAI",
              voters: 113
            },
          ],
          "GOV'T SCHOOL TALI I / A": [
            {
              station: "BARRAH",
              voters: 87
            },
            {
              station: "TALI",
              voters: 262
            },
          ],
          "GOV'T SEC. SCHOOL NYENEBA / A": [
            {
              station: "GURUTE",
              voters: 112
            },
          ],
          "GOVERNMENT SCHOOL BAKEBE / A": [
            {
              station: "BAKEBE",
              voters: 418
            },
          ],
          "GOVERNMENT SCHOOL BAKUMBA / A": [
            {
              station: "BAKUMBA",
              voters: 140
            },
          ],
          "GOVERNMENT SCHOOL FUMBE / A": [
            {
              station: "FUMBE",
              voters: 49
            },
          ],
          "GOVERNMENT SCHOOL MANTAH / A": [
            {
              station: "MANTAH",
              voters: 214
            },
          ],
          "GOVERNMENT SCHOOL MOSHIE / A": [
            {
              station: "MOSHIE",
              voters: 151
            },
          ],
          "GOVERNMENT SCHOOL TAYOR / A": [
            {
              station: "TAYOR",
              voters: 99
            },
          ],
          "GOV\T SCHOOL SUMBE TA\MBU / A": [
            {
              station: "TA\MBU",
              voters: 247
            },
          ],
          "QUARTER HALL DEFANG / A": [
            {
              station: "QUARTER",
              voters: 59
            },
          ],
          "QUARTER HALL ETOKO MILE 27 / A": [
            {
              station: "MILE",
              voters: 127
            },
          ],
          "QUARTER HALL KOH SABES / A": [
            {
              station: "KOH",
              voters: 43
            },
          ],
          "QUARTER HALL MENSING & MPAH / A": [
            {
              station: "MENSING",
              voters: 196
            },
            {
              station: "MPAH",
              voters: 196
            },
          ],
          "QUARTER HALL NGASANG / A": [
            {
              station: "NGASANG",
              voters: 39
            },
          ],
          "QUARTER HALL SUMBE NCHOT / A": [
            {
              station: "SUMBE",
              voters: 306
            },
            {
              station: "NCHOT",
              voters: 59
            },
          ],
          "SAR/SM TINTO KERIEH / A": [
            {
              station: "TINTO",
              voters: 1042
            },
            {
              station: "KERIEH",
              voters: 366
            },
          ],
          "TOWN HALL AMEBEISU / A": [
            {
              station: "AMEBEISU",
              voters: 82
            },
          ],
          "TOWN HALL ANAMAFONG / A": [
            {
              station: "ANAMAFONG",
              voters: 30
            },
          ],
          "TOWN HALL BAMBAT / A": [
            {
              station: "BAMBAT",
              voters: 62
            },
          ],
          "TOWN HALL BOKWA / A": [
            {
              station: "BOKWA",
              voters: 146
            },
          ],
          "TOWN HALL CHINDA / A": [
            {
              station: "CHINDA",
              voters: 68
            },
          ],
          "TOWN HALL DEFANG / A": [
            {
              station: "DEFANG",
              voters: 196
            },
          ],
          "TOWN HALL EBANGABI / A": [
            {
              station: "EBANGABI",
              voters: 82
            },
          ],
          "TOWN HALL EDJUINGANG / A": [
            {
              station: "EDJUINGANG",
              voters: 70
            },
          ],
          "TOWN HALL EGBEMO / A": [
            {
              station: "EGBEMO",
              voters: 22
            },
          ],
          "TOWN HALL ETOKO MBATOP / A": [
            {
              station: "MBATOP",
              voters: 35
            },
          ],
          "TOWN HALL GURUFENG / A": [
            {
              station: "GURUFENG",
              voters: 100
            },
          ],
          "TOWN HALL KOANO / A": [
            {
              station: "KOANO",
              voters: 108
            },
          ],
          "TOWN HALL MAMBO / A": [
            {
              station: "MAMBO",
              voters: 75
            },
          ],
          "TOWN HALL MBIO / A": [
            {
              station: "MBIO",
              voters: 85
            },
          ],
          "TOWN HALL MOKWECHA / A": [
            {
              station: "MUKWECHA",
              voters: 76
            },
          ],
          "VILLAGE HALL FONJO / A": [
            {
              station: "FONJO",
              voters: 51
            },
          ],
        },
      },
      "KOUPE-MANENGOUBA": {
        "TOMBEL": {
          "ARMY CAMP / A": [
            {
              station: "ELEMENTS",
              voters: 395
            },
            {
              station: "211TH",
              voters: 395
            },
            {
              station: "CIM",
              voters: 395
            },
            {
              station: "GENDARMERIE",
              voters: 395
            },
            {
              station: "ARMY",
              voters: 395
            },
            {
              station: "AND",
              voters: 1293
            },
            {
              station: "GENDAMARIE",
              voters: 395
            },
          ],
          "BAKOLLE HEALTH POST / A": [
            {
              station: "BAKOLLE",
              voters: 212
            },
          ],
          "CATH CHURCH EKEB-MBABE / A": [
            {
              station: "EKEB-MBABE",
              voters: 146
            },
          ],
          "CATH CHURCH MEKEDMBENG / A": [
            {
              station: "MEKEDMBENG",
              voters: 87
            },
          ],
          "CATH CHURCH MENYOM / A": [
            {
              station: "MENYOM",
              voters: 33
            },
          ],
          "CATH SCHOOL EBONJI / A": [
            {
              station: "EBONJI",
              voters: 1511
            },
          ],
          "CATH SCHOOL ESAM / A": [
            {
              station: "ESAM",
              voters: 112
            },
          ],
          "CATHOLIC SCHOOL WATER FALL / A": [
            {
              station: "WATER",
              voters: 328
            },
            {
              station: "FALL",
              voters: 328
            },
          ],
          "CO-OPERATIVE STORE BULUTU / A": [
            {
              station: "BULUTU",
              voters: 344
            },
          ],
          "CO-OPERATIVE STORE EHOM / A": [
            {
              station: "EHOM",
              voters: 340
            },
          ],
          "CO-OPERATIVE STORE ETAM I / A": [
            {
              station: "ETAM",
              voters: 1380
            },
          ],
          "CO-OPERATIVE STORE MEKOM / A": [
            {
              station: "MEKOM",
              voters: 176
            },
          ],
          "COCOA CAMP CDC / A": [
            {
              station: "TOMBEL",
              voters: 17026
            },
          ],
          "COMM. HALL BELLE / A": [
            {
              station: "BELLE",
              voters: 51
            },
          ],
          "COMM. SCHOOL BANGONE / A": [
            {
              station: "BANGONE",
              voters: 48
            },
          ],
          "COMMUNITY HALL ATOB / A": [
            {
              station: "ATOB",
              voters: 141
            },
          ],
          "COMMUNITY HALL BASENG / A": [
            {
              station: "BASENG",
              voters: 153
            },
          ],
          "COMMUNITY HALL BUBA III / A": [
            {
              station: "III",
              voters: 654
            },
          ],
          "COMMUNITY HALL BUBA MILE 6 / A": [
            {
              station: "MILE",
              voters: 813
            },
          ],
          "COMMUNITY HALL CDC EDIBENJOCK / A": [
            {
              station: "EDIBENJOCK",
              voters: 233
            },
          ],
          "COMMUNITY HALL EBOKO BAJOH / A": [
            {
              station: "EBOKO",
              voters: 324
            },
            {
              station: "BAJOH",
              voters: 324
            },
          ],
          "COMMUNITY HALL MAHOLE / A": [
            {
              station: "MAHOLE",
              voters: 271
            },
          ],
          "COMMUNITY HALL MBWOGMUTI / A": [
            {
              station: "MBWOGMUTI",
              voters: 55
            },
          ],
          "COMMUNITY HALL MENGE / A": [
            {
              station: "MENGE",
              voters: 28
            },
          ],
          "COMMUNITY HALL MPAKO / A": [
            {
              station: "MPAKO",
              voters: 181
            },
          ],
          "COMMUNITY HALL NYALLE / A": [
            {
              station: "NYALLE",
              voters: 86
            },
          ],
          "COMMUNITY HALL NYASOSO / A": [
            {
              station: "NYASOSO",
              voters: 791
            },
          ],
          "COURT HALL NYANDONG / A": [
            {
              station: "NYANDONG",
              voters: 428
            },
          ],
          "COURT HALL TOMBEL / A": [
            {
              station: "FIVE",
              voters: 646
            },
          ],
          "DISTRIC HEALTH SERVICE / A": [
            {
              station: "VIII",
              voters: 546
            },
            {
              station: "TOMBELWARD",
              voters: 546
            },
            {
              station: "EIGHT",
              voters: 546
            },
          ],
          "FONCHA'S HALL CDC / A": [
            {
              station: "CDC",
              voters: 608
            },
            {
              station: "CAMP",
              voters: 235
            },
          ],
          "GOV'T NURSERY SCHOOL NGOMBOKU / A": [
            {
              station: "NGOMBOKU",
              voters: 251
            },
          ],
          "GOV'T NURSERY SCHOOL TOMBEL / A": [
            {
              station: "NGOMENYOH",
              voters: 462
            },
          ],
          "GOV'T SCHOOL KODMIN / A": [
            {
              station: "KODMIN",
              voters: 74
            },
          ],
          "GOV'T SCHOOL MBABE / A": [
            {
              station: "MBABE",
              voters: 239
            },
          ],
          "GOV'T SCHOOL NDOM / A": [
            {
              station: "NDOM",
              voters: 259
            },
          ],
          "GOV'T SCHOOL NGUSI / A": [
            {
              station: "NGUSI",
              voters: 1107
            },
          ],
          "GOV'T SCHOOL NHIANGSE / A": [
            {
              station: "NHIANGSE",
              voters: 25
            },
          ],
          "GOV'T SCHOOL NSUKE / A": [
            {
              station: "NSUKE",
              voters: 160
            },
          ],
          "GOV'T SCHOOL TOMBEL III / A": [
            {
              station: "VII",
              voters: 935
            },
          ],
          "GS BEKUME / A": [
            {
              station: "BEKUME",
              voters: 124
            },
          ],
          "GS BUBA I / A": [
            {
              station: "BUBA",
              voters: 1511
            },
          ],
          "GS BUBA WATER FALL / A": [
            {
              station: "WATERFALL",
              voters: 598
            },
          ],
          "GS EKEB / A": [
            {
              station: "EKEB",
              voters: 128
            },
          ],
          "GS KUPE / A": [
            {
              station: "KUPE",
              voters: 236
            },
          ],
          "GS MBULLE / A": [
            {
              station: "MBULLE",
              voters: 143
            },
          ],
          "GS MBWOGMUT II / A": [
            {
              station: "MBWOGMUT",
              voters: 105
            },
          ],
          "GS MELONGO / A": [
            {
              station: "MELONGO",
              voters: 85
            },
          ],
          "GS MENGE-MESAKA / A": [
            {
              station: "MENGE-MESAKA",
              voters: 65
            },
          ],
          "GS PENG / A": [
            {
              station: "PENG",
              voters: 748
            },
          ],
          "GTC NDABEKOM / A": [
            {
              station: "NDABEKOM",
              voters: 121
            },
          ],
          "HEALTH CENTRE NDIBENJOCK / A": [
            {
              station: "NDIBENJOCK",
              voters: 109
            },
          ],
          "NONI HALL BAMBELE EBONDIAD / A": [
            {
              station: "BAMBELE",
              voters: 97
            },
            {
              station: "EBONDIAD",
              voters: 97
            },
          ],
          "PRES. NURSERY SCHOOL KACK / A": [
            {
              station: "KACK",
              voters: 166
            },
          ],
          "PRESBYTERIAN CHURCH EBUL-PENG / A": [
            {
              station: "EBUL-PENG",
              voters: 101
            },
          ],
          "PRESBYTERIAN CHURCH MUANYAN / A": [
            {
              station: "MUANYAN",
              voters: 44
            },
          ],
          "PRESBYTERIAN CHURCH NLOG / A": [
            {
              station: "NLOG",
              voters: 204
            },
          ],
          "PS NGOMBOMBENG / A": [
            {
              station: "NGOMBOMBENG",
              voters: 65
            },
          ],
          "UCHS TOMBEL / A": [
            {
              station: "NGAB",
              voters: 898
            },
            {
              station: "EKONEBEL",
              voters: 898
            },
            {
              station: "WARD",
              voters: 14853
            },
          ],
        },
      },
    },
  },
};
