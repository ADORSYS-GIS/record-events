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
  "SUD-OUEST": {
    "name": {
      "en": "SOUTH-WEST",
      "fr": "SUD-OUEST"
    },
    "divisions": {
      "FAKO": {
        "BUEA": {
          "MOLYKO": [
            {
              "station": "B.C.U.F. / A",
              "voters": 10737
            }
          ],
          "BOKOKO": [
            {
              "station": "BAPTIST CHURCH LOWER BOKOVA / A",
              "voters": 323
            }
          ],
          "GREAT": [
            {
              "station": "BAPTIST COMPREHENSIVE UPPER  MOKONGO / A",
              "voters": 8541
            }
          ],
          "SOPPO": [
            {
              "station": "BAPTIST COMPREHENSIVE UPPER  MOKONGO / A",
              "voters": 9539
            }
          ],
          "BWITEVA": [
            {
              "station": "BLESSING INTER. BILINGUAL SCHOOL / A",
              "voters": 373
            }
          ],
          "WOTEKE": [
            {
              "station": "BORSTAL (CAMP SIC/WEST FARM) / A",
              "voters": 617
            }
          ],
          "BULU": [
            {
              "station": "BULU BLIND CENTER / A",
              "voters": 183
            }
          ],
          "BWIYUKU": [
            {
              "station": "C.B.C. SCHOOL BWIYUKU / A",
              "voters": 973
            }
          ],
          "BOLIFAMBA": [
            {
              "station": "C.B.C. SCHOOL LOWER BOLIFAMBA / A",
              "voters": 2761
            }
          ],
          "BOANA": [
            {
              "station": "COMMMUNITY HALL BOANA / A",
              "voters": 123
            }
          ],
          "BOANDA": [
            {
              "station": "COMMMUNITY HALL BOANDA / A",
              "voters": 235
            }
          ],
          "BOANDO": [
            {
              "station": "COMMMUNITY HALL BOANDO / A",
              "voters": 60
            }
          ],
          "BOKWAI": [
            {
              "station": "COMMMUNITY HALL BOKWAI / A",
              "voters": 670
            }
          ],
          "BONAKANDA": [
            {
              "station": "COMMMUNITY HALL BONAKANDA / A",
              "voters": 308
            }
          ],
          "WOKULU": [
            {
              "station": "COMMMUNITY HALL BONAKANDA / A",
              "voters": 308
            }
          ],
          "BONDUMA": [
            {
              "station": "COMMMUNITY HALL BONDUMA / A",
              "voters": 2308
            }
          ],
          "BOTEVA": [
            {
              "station": "COMMMUNITY HALL BOTEVA / A",
              "voters": 60
            }
          ],
          "LYSOKA": [
            {
              "station": "COMMMUNITY HALL BWILE / A",
              "voters": 176
            }
          ],
          "EKANDE": [
            {
              "station": "COMMMUNITY HALL EKANDE / A",
              "voters": 57
            }
          ],
          "EKONJO": [
            {
              "station": "COMMMUNITY HALL EKONJO / A",
              "voters": 40
            }
          ],
          "MUSAKA": [
            {
              "station": "COMMMUNITY HALL EWILI (NEW) / A",
              "voters": 118
            }
          ],
          "WONYA": [
            {
              "station": "COMMMUNITY HALL EWILI (NEW) / A",
              "voters": 2689
            }
          ],
          "MOKUMBA": [
            {
              "station": "COMMMUNITY HALL EWILI (NEW) / A",
              "voters": 223
            }
          ],
          "EWONDA": [
            {
              "station": "COMMMUNITY HALL EWONDA / A",
              "voters": 65
            }
          ],
          "LIKOMBE": [
            {
              "station": "COMMMUNITY HALL LIKOMBE / A",
              "voters": 82
            }
          ],
          "MAPANJA": [
            {
              "station": "COMMMUNITY HALL MAPANJA / A",
              "voters": 115
            }
          ],
          "MAUMU": [
            {
              "station": "COMMMUNITY HALL MAUMU / A",
              "voters": 462
            }
          ],
          "LIKOKO": [
            {
              "station": "COMMMUNITY HALL MEMBEA / A",
              "voters": 1424
            }
          ],
          "MEMBEA": [
            {
              "station": "COMMMUNITY HALL MEMBEA / A",
              "voters": 1358
            }
          ],
          "MOLI": [
            {
              "station": "COMMMUNITY HALL MOLI (NEW) / A",
              "voters": 72
            }
          ],
          "SAXENHOFF": [
            {
              "station": "COMMMUNITY HALL SAXENHOFF / A",
              "voters": 37
            }
          ],
          "VASINGI": [
            {
              "station": "COMMMUNITY HALL VASINGI / A",
              "voters": 446
            }
          ],
          "WOKAKA": [
            {
              "station": "COMMMUNITY HALL WOKAKA / A",
              "voters": 75
            }
          ],
          "WOKEKA": [
            {
              "station": "COMMMUNITY HALL WOKEKA / A",
              "voters": 43
            }
          ],
          "WOLIKAWO": [
            {
              "station": "COMMMUNITY HALL WOLIKAWO / A",
              "voters": 144
            }
          ],
          "WONGANJO": [
            {
              "station": "COMMMUNITY HALL WONGANJO / A",
              "voters": 163
            }
          ],
          "WONJAVA": [
            {
              "station": "COMMMUNITY HALL WONJAVA / A",
              "voters": 67
            }
          ],
          "WONJIA": [
            {
              "station": "COMMMUNITY HALL WONJIA (NEW) / A",
              "voters": 95
            }
          ],
          "EMONGO": [
            {
              "station": "COMMMUNITY HALL WONYA EMONGO / A",
              "voters": 1163
            }
          ],
          "LYONGA": [
            {
              "station": "COMMMUNITY HALL WONYA LYONGA / A",
              "voters": 521
            }
          ],
          "MAVIO": [
            {
              "station": "COMMMUNITY HALL WONYA MAVIO / A",
              "voters": 782
            }
          ],
          "WOTUTU": [
            {
              "station": "COMMMUNITY HALL WOTUTU / A",
              "voters": 902
            }
          ],
          "WOVILLA": [
            {
              "station": "COMMMUNITY HALL WOVILLA NATIVE / A",
              "voters": 720
            }
          ],
          "MWANGAI": [
            {
              "station": "COMMMUNITY MWANGAI / A",
              "voters": 30
            }
          ],
          "WONGANGA": [
            {
              "station": "COOPERATIVE HALL WONGANGA / A",
              "voters": 838
            }
          ],
          "EWILI": [
            {
              "station": "COURT OF APPEAL / A",
              "voters": 751
            }
          ],
          "GOVERNMENT": [
            {
              "station": "COURT OF APPEAL / A",
              "voters": 528
            }
          ],
          "STATION": [
            {
              "station": "COURT OF APPEAL / A",
              "voters": 528
            }
          ],
          "BONJONGO": [
            {
              "station": "CUSTOMARY COURT HALL BONJONGO / A",
              "voters": 235
            }
          ],
          "WONDONGO": [
            {
              "station": "CUSTOMARY COURT HALL BUEA TOWN / A",
              "voters": 645
            }
          ],
          "MUEA": [
            {
              "station": "CUSTOMARY COURT HALL UPPER MUEA / A",
              "voters": 3748
            }
          ],
          "LOWER": [
            {
              "station": "E.N.A.P. / A",
              "voters": 618
            }
          ],
          "FARMS": [
            {
              "station": "E.N.A.P. / A",
              "voters": 789
            }
          ],
          "LONG": [
            {
              "station": "ECOLE FRANCOPHONE / A",
              "voters": 932
            }
          ],
          "ST.": [
            {
              "station": "ECOLE FRANCOPHONE / A",
              "voters": 932
            }
          ],
          "SMALL": [
            {
              "station": "ECOLE FRANCOPHONE / A",
              "voters": 932
            }
          ],
          "MOKUNDA": [
            {
              "station": "FIRST POLICE DISTRICT MOKUNDA / A",
              "voters": 561
            }
          ],
          "EWONGO": [
            {
              "station": "G.B.P.S. EWONGO / A",
              "voters": 150
            }
          ],
          "BOMAKA": [
            {
              "station": "G.S. BOMAKA / A",
              "voters": 2641
            }
          ],
          "BOVA": [
            {
              "station": "G.S. BOVA II / A",
              "voters": 524
            }
          ],
          "LIONGO": [
            {
              "station": "G.S. BOVA II / A",
              "voters": 403
            }
          ],
          "WONJOKU": [
            {
              "station": "G.S. BOVA II / A",
              "voters": 260
            }
          ],
          "BUEA": [
            {
              "station": "G.S. BUEA TOWN / A",
              "voters": 1606
            }
          ],
          "TOWN": [
            {
              "station": "G.S. BUEA TOWN / A",
              "voters": 1606
            }
          ],
          "STRANGERS": [
            {
              "station": "G.S. BUEA TOWN / A",
              "voters": 1606
            }
          ],
          "BWASSA": [
            {
              "station": "G.S. BWASSA / A",
              "voters": 102
            }
          ],
          "DIBANDA": [
            {
              "station": "G.S. DIBANDA / A",
              "voters": 742
            }
          ],
          "MEVIO": [
            {
              "station": "G.S. MEVIO / A",
              "voters": 95
            }
          ],
          "WOKOKO": [
            {
              "station": "G.S. MOLYKO / A",
              "voters": 3163
            }
          ],
          "NA'ANGA": [
            {
              "station": "G.S. NA'ANGA / A",
              "voters": 288
            }
          ],
          "CLERKS'": [
            {
              "station": "GENDARMERIE LEGION / A",
              "voters": 513
            }
          ],
          "QTRS": [
            {
              "station": "GENDARMERIE LEGION / A",
              "voters": 513
            }
          ],
          "GENDARMERIE": [
            {
              "station": "GENDARMERIE LEGION / A",
              "voters": 513
            }
          ],
          "BOJOKE": [
            {
              "station": "GHS BONJONGO / A",
              "voters": 130
            }
          ],
          "WOSENGE": [
            {
              "station": "GHS BONJONGO / A",
              "voters": 130
            }
          ],
          "WOTOLO": [
            {
              "station": "HINT INTERNATIONAL / A",
              "voters": 1366
            }
          ],
          "BWITINGI": [
            {
              "station": "JAMADALE SCHOOL / A",
              "voters": 482
            }
          ],
          "BOKWANGO": [
            {
              "station": "MEMBEA HEALTH CENTER BOKWANGO / A",
              "voters": 1127
            }
          ],
          "GRA": [
            {
              "station": "MILITARY SECTOR I / A",
              "voters": 604
            }
          ],
          "TWENTY": [
            {
              "station": "MILITARY SECTOR II / A",
              "voters": 484
            }
          ],
          "FIRST": [
            {
              "station": "MILITARY SECTOR II / A",
              "voters": 484
            }
          ],
          "MILITARY": [
            {
              "station": "MILITARY SECTOR II / A",
              "voters": 484
            }
          ],
          "SECTOR": [
            {
              "station": "MILITARY SECTOR II / A",
              "voters": 484
            }
          ],
          "YOUTH": [
            {
              "station": "OLD GOVERNENT STATION / A",
              "voters": 210
            }
          ],
          "CENTER": [
            {
              "station": "OLD GOVERNENT STATION / A",
              "voters": 210
            }
          ],
          "FEDERAL": [
            {
              "station": "PARLIAMENTARY FLAT / A",
              "voters": 572
            }
          ],
          "POLICE": [
            {
              "station": "POLICE BARARACKS / A",
              "voters": 232
            }
          ],
          "CANTEEN": [
            {
              "station": "POLICE BARARACKS / A",
              "voters": 232
            }
          ],
          "NATIONAL": [
            {
              "station": "POLICE PERSONEL / A",
              "voters": 171
            }
          ],
          "SECURITY": [
            {
              "station": "POLICE PERSONEL / A",
              "voters": 171
            }
          ],
          "DELEGATION": [
            {
              "station": "POLICE PERSONEL / A",
              "voters": 171
            }
          ],
          "UPPER": [
            {
              "station": "POLICE PERSONEL / A",
              "voters": 171
            }
          ],
          "BOSSUMBU": [
            {
              "station": "PRES CHURCH BOSSUMBU / A",
              "voters": 50
            }
          ],
          "WARDERS'": [
            {
              "station": "PRISON LECTURE HALL / A",
              "voters": 175
            }
          ],
          "BARRACKS": [
            {
              "station": "PRISON LECTURE HALL / A",
              "voters": 175
            }
          ],
          "CLERK'S": [
            {
              "station": "SURVEY SCHOOL / A",
              "voters": 1727
            }
          ],
          "QUARTERS": [
            {
              "station": "SURVEY SCHOOL / A",
              "voters": 2299
            }
          ]
        },
        "IDENAU": {
          "BIBUNDE": [
            {
              "station": "BIR BASE (NEW) / A",
              "voters": 2895
            }
          ],
          "NJONJI": [
            {
              "station": "CDC SECTORIAL OFFICE NJONJI / A",
              "voters": 291
            }
          ],
          "SODEN": [
            {
              "station": "CDC SECTORIAL OFFICE SODEN / A",
              "voters": 82
            }
          ],
          "ISONGO": [
            {
              "station": "CDC SECTOTIONAL OFFICE / A",
              "voters": 580
            }
          ],
          "ETOME": [
            {
              "station": "COMMUNITY HALL ETOME / A",
              "voters": 67
            }
          ],
          "KOSSE": [
            {
              "station": "GOV'T PRACT. SCHOOL KOSSE II / A",
              "voters": 16
            }
          ],
          "BAKINGILI": [
            {
              "station": "GREEN VALLEY / A",
              "voters": 415
            }
          ],
          "ENYENGE": [
            {
              "station": "GS ENYENGE / A",
              "voters": 235
            }
          ],
          "SCIPIO/RESCHFLUSS": [
            {
              "station": "GS IDENAU GROUP I / A",
              "voters": 287
            }
          ],
          "SANJE": [
            {
              "station": "HEALTH CENTER SANJE / A",
              "voters": 87
            }
          ],
          "BAROMBI": [
            {
              "station": "MOBILE CANOPY / A",
              "voters": 193
            }
          ],
          "DEBUNDSCHA": [
            {
              "station": "MOBILE CANOPY / A",
              "voters": 432
            }
          ]
        },
        "LIMBE I": {
          "MAWOH": [
            {
              "station": "APOSTOLIC FAITH MAWOH / A",
              "voters": 1424
            }
          ],
          "LUMPSUM": [
            {
              "station": "BILL & SCOTT NURSERY/PRIMARY SCHOOL /  A",
              "voters": 680
            }
          ],
          "MOKEBA": [
            {
              "station": "CATHOLIC SCHOOL GARDENS / A",
              "voters": 1012
            }
          ],
          "NEWTOWN": [
            {
              "station": "CBC PRIM. SCHOOL BONADIKOMBO / A",
              "voters": 3909
            }
          ],
          "MBONJO/DOCKYARD": [
            {
              "station": "CHAMBER OF COMMERCE / A",
              "voters": 349
            }
          ],
          "CITE": [
            {
              "station": "COLLEGE SONARA / A",
              "voters": 937
            }
          ],
          "NANGA/SONARA": [
            {
              "station": "COLLEGE SONARA / A",
              "voters": 937
            }
          ],
          "MIDDLEFARMS": [
            {
              "station": "COMMUNITY HALL BOTA / A",
              "voters": 1060
            }
          ],
          "MEVEO": [
            {
              "station": "COMMUNITY HALL MEVEO / A",
              "voters": 69
            }
          ],
          "MBENGE": [
            {
              "station": "COMMUNITY HALL MEVEO / A",
              "voters": 69
            }
          ],
          "VILLAGE": [
            {
              "station": "COMMUNITY HALL MEVEO / A",
              "voters": 69
            }
          ],
          "BONADIKOMBO": [
            {
              "station": "COMMUNITY HALL, BONADIKOMBO / A",
              "voters": 8539
            }
          ],
          "TWO": [
            {
              "station": "DELEGATION OF AGRIC / A",
              "voters": 1075
            }
          ],
          "COCONUT": [
            {
              "station": "DELEGATION OF URBAN AFFAIRS / A",
              "voters": 391
            }
          ],
          "ISLAND": [
            {
              "station": "DELEGATION OF URBAN AFFAIRS / A",
              "voters": 391
            }
          ],
          "LIVANDA": [
            {
              "station": "ECOLE FRANCOPHONE,MILE ONE / A",
              "voters": 1728
            }
          ],
          "CONGO/NURSES": [
            {
              "station": "ECOLE FRANCOPHONE,MILE ONE / A",
              "voters": 1728
            }
          ],
          "QUARTER": [
            {
              "station": "ECOLE FRANCOPHONE,MILE ONE / A",
              "voters": 7149
            }
          ],
          "NAMBEKE": [
            {
              "station": "FEICOM / A",
              "voters": 420
            }
          ],
          "PHEMBELE": [
            {
              "station": "FEICOM / A",
              "voters": 420
            }
          ],
          "MAFANY": [
            {
              "station": "G.H.S. LIMBE / A",
              "voters": 1097
            }
          ],
          "MABETA": [
            {
              "station": "G.N.S. MABETA NEWLAYOUT / A",
              "voters": 1031
            }
          ],
          "NEWLAYOUT": [
            {
              "station": "G.N.S. MABETA NEWLAYOUT / A",
              "voters": 1031
            }
          ],
          "LOWER": [
            {
              "station": "G.S. BOSSUMBU / A",
              "voters": 585
            }
          ],
          "BOSSUMBU": [
            {
              "station": "G.S. BOSSUMBU / A",
              "voters": 585
            }
          ],
          "LIMBE": [
            {
              "station": "G.S. BOTA / A",
              "voters": 1063
            }
          ],
          "MILE": [
            {
              "station": "G.S. MILE ONE / A",
              "voters": 3156
            }
          ],
          "ONE": [
            {
              "station": "G.S. MILE ONE / A",
              "voters": 2081
            }
          ],
          "MOTOWOH": [
            {
              "station": "G.S. MOTOWOH / A",
              "voters": 1207
            }
          ],
          "SOUTH": [
            {
              "station": "G.S. NEWTOWN / A",
              "voters": 597
            }
          ],
          "EAST": [
            {
              "station": "G.S. NEWTOWN / A",
              "voters": 597
            }
          ],
          "COMMUNITY": [
            {
              "station": "G.S. NEWTOWN / A",
              "voters": 597
            }
          ],
          "TOWE": [
            {
              "station": "G.S. TOWE / A",
              "voters": 2602
            }
          ],
          "CUSTOM/FEDERAL": [
            {
              "station": "LIMBE RIVER CLUB / A",
              "voters": 385
            }
          ],
          "QUARTERS": [
            {
              "station": "LIMBE RIVER CLUB / A",
              "voters": 1497
            }
          ],
          "DOWNBEACH/BOTANIC": [
            {
              "station": "LIMBE URBAN COUNCIL HALL / A",
              "voters": 261
            }
          ],
          "GARDENS": [
            {
              "station": "LIMBE URBAN COUNCIL HALL / A",
              "voters": 1067
            }
          ],
          "UNITY": [
            {
              "station": "NURSING AID SCHOOL / A",
              "voters": 2060
            }
          ],
          "CHURCH": [
            {
              "station": "OLD BOULANGERIE / A",
              "voters": 534
            }
          ],
          "STREET": [
            {
              "station": "OLD BOULANGERIE / A",
              "voters": 534
            }
          ],
          "CASSAVA": [
            {
              "station": "PHYTOSANITARY BASE / A",
              "voters": 1683
            }
          ],
          "FARMS": [
            {
              "station": "PHYTOSANITARY BASE / A",
              "voters": 2695
            }
          ],
          "CLERK'S": [
            {
              "station": "PREVENTIVE MEDICINE / A",
              "voters": 681
            }
          ],
          "QTRS/COW": [
            {
              "station": "PREVENTIVE MEDICINE / A",
              "voters": 681
            }
          ],
          "FENCE": [
            {
              "station": "PREVENTIVE MEDICINE / A",
              "voters": 681
            }
          ],
          "G.R.A": [
            {
              "station": "S.S. CLUB BOTA / A",
              "voters": 1112
            }
          ],
          "/S.S.": [
            {
              "station": "S.S. CLUB BOTA / A",
              "voters": 1112
            }
          ],
          "CAMP": [
            {
              "station": "SENIOR OVERSEERS OFFICE, MOLIWE / A",
              "voters": 1159
            }
          ],
          "C.D.C.": [
            {
              "station": "SENIOR OVERSEERS OFFICE, MOLIWE / A",
              "voters": 96
            }
          ],
          "MOLIWE": [
            {
              "station": "SENIOR OVERSEERS OFFICE, MOLIWE / A",
              "voters": 321
            }
          ],
          "MBENDE": [
            {
              "station": "VETERINARY POST / A",
              "voters": 385
            }
          ],
          "EAST/WEST": [
            {
              "station": "VETERINARY POST / A",
              "voters": 385
            }
          ]
        },
        "LIMBE II": {
          "CSPS": [
            {
              "station": "ARMY CAMP HALL CAPE LIMBO / A",
              "voters": 108
            }
          ],
          "ARMY": [
            {
              "station": "ARMY CAMP HALL CAPE LIMBO / A",
              "voters": 108
            }
          ],
          "CAMP": [
            {
              "station": "ARMY CAMP HALL CAPE LIMBO / A",
              "voters": 1926
            }
          ],
          "CAPE": [
            {
              "station": "ARMY CAMP HALL CAPE LIMBO / A",
              "voters": 1042
            }
          ],
          "LIMBO": [
            {
              "station": "ARMY CAMP HALL CAPE LIMBO / A",
              "voters": 1042
            }
          ],
          "ISOKOLO": [
            {
              "station": "BEATRICE HENRY SCHOOL / A",
              "voters": 1743
            }
          ],
          "OLD": [
            {
              "station": "BEATRICE HENRY SCHOOL / A",
              "voters": 1743
            }
          ],
          "ROAD": [
            {
              "station": "BEATRICE HENRY SCHOOL / A",
              "voters": 1743
            }
          ],
          "CITE": [
            {
              "station": "CAMP HALL TOPLINE LIMBOLA / A",
              "voters": 934
            }
          ],
          "SONARA": [
            {
              "station": "CAMP HALL TOPLINE LIMBOLA / A",
              "voters": 934
            }
          ],
          "TOPLINE": [
            {
              "station": "CAMP HALL TOPLINE LIMBOLA / A",
              "voters": 50
            }
          ],
          "CDC": [
            {
              "station": "CAMP HALL TOPLINE LIMBOLA / A",
              "voters": 50
            }
          ],
          "LOWER": [
            {
              "station": "COMM. HALL BOANDO / A",
              "voters": 154
            }
          ],
          "BOANDO": [
            {
              "station": "COMM. HALL BOANDO / A",
              "voters": 154
            }
          ],
          "NGEME": [
            {
              "station": "COMMUNITY FIELD NGEME / A",
              "voters": 1027
            }
          ],
          "BATOKE": [
            {
              "station": "COMMUNITY HALL BATOKE / A",
              "voters": 3233
            }
          ],
          "BOTALAND": [
            {
              "station": "COMMUNITY HALL BOTALAND / A",
              "voters": 3571
            }
          ],
          "KIE": [
            {
              "station": "COMMUNITY HALL KIE / A",
              "voters": 174
            }
          ],
          "LIMBOLA": [
            {
              "station": "COMMUNITY HALL LIMBOLA / A",
              "voters": 647
            }
          ],
          "MOKUNDA": [
            {
              "station": "COMMUNITY HALL MOKUNDA / A",
              "voters": 1206
            }
          ],
          "WOVIA": [
            {
              "station": "COMMUNITY HALL WOVIA / A",
              "voters": 806
            }
          ],
          "MOKUNDANGE": [
            {
              "station": "GS MOKUNDANGE / A",
              "voters": 1257
            }
          ],
          "MOKINDI": [
            {
              "station": "MOKINDI COMM HALL / A",
              "voters": 1368
            }
          ],
          "KRATER": [
            {
              "station": "MUNICIPAL HALL RESTAURANT / A",
              "voters": 1768
            }
          ],
          "BOBENDE": [
            {
              "station": "STAFF BILINGUAL NURS. AND PRIM. SCHOOL  /A",
              "voters": 868
            }
          ]
        },
        "LIMBE III": {
          "BIR": [
            {
              "station": "BIR MAN-O-WAR BAY / A",
              "voters": 2360
            }
          ],
          "MAN-O-WAR": [
            {
              "station": "BIR MAN-O-WAR BAY / A",
              "voters": 2360
            }
          ],
          "BAY": [
            {
              "station": "BIR MAN-O-WAR BAY / A",
              "voters": 2360
            }
          ],
          "CENTER": [
            {
              "station": "BIR MAN-O-WAR BAY / A",
              "voters": 2360
            }
          ],
          "CDC": [
            {
              "station": "CDC BIMBIA CAMP OFIICE / A",
              "voters": 532
            }
          ],
          "BIMBIA": [
            {
              "station": "CDC BIMBIA CAMP OFIICE / A",
              "voters": 517
            }
          ],
          "CAMP/ESELE": [
            {
              "station": "CDC BIMBIA CAMP OFIICE / A",
              "voters": 388
            }
          ],
          "NATIVE": [
            {
              "station": "CDC BIMBIA CAMP OFIICE / A",
              "voters": 388
            }
          ],
          "MONDOLI": [
            {
              "station": "CDC BIMBIA CAMP OFIICE / A",
              "voters": 388
            }
          ],
          "MABETA": [
            {
              "station": "CDC CLUB HALL MABETA / A",
              "voters": 265
            }
          ],
          "CAMP": [
            {
              "station": "CDC CLUB HALL MABETA / A",
              "voters": 144
            }
          ],
          "BONABILE": [
            {
              "station": "COMMUNITY HALL BONABILE / A",
              "voters": 77
            }
          ],
          "VILLAGE": [
            {
              "station": "COMMUNITY HALL BONABILE / A",
              "voters": 594
            }
          ],
          "BONANGOMBE": [
            {
              "station": "COMMUNITY HALL BONANGOMBE / A",
              "voters": 99
            }
          ],
          "DIKOLO": [
            {
              "station": "COMMUNITY HALL DIKOLO BIMBIA / A",
              "voters": 129
            }
          ],
          "MANGA": [
            {
              "station": "COUNCIL CHECK POINT / A",
              "voters": 1582
            }
          ],
          "HILL": [
            {
              "station": "COUNCIL CHECK POINT / A",
              "voters": 1582
            }
          ],
          "CHOP": [
            {
              "station": "CRTV TRANSMISSION CENTER / A",
              "voters": 54
            }
          ],
          "FARM": [
            {
              "station": "CRTV TRANSMISSION CENTER / A",
              "voters": 54
            }
          ],
          "KANGE": [
            {
              "station": "GS KANGE / A",
              "voters": 105
            }
          ],
          "FISHING": [
            {
              "station": "GS KANGE / A",
              "voters": 330
            }
          ],
          "PORT": [
            {
              "station": "GS KANGE / A",
              "voters": 330
            }
          ],
          "MBOKO": [
            {
              "station": "GS MBOKO I / A",
              "voters": 52
            }
          ],
          "MBOMO": [
            {
              "station": "GS MBOKO I / A",
              "voters": 52
            }
          ]
        },
        "MUYUKA": {
          "BAFIA": [
            {
              "station": "AGRIC POST BAFIA / A",
              "voters": 1089
            }
          ],
          "BAVENGA": [
            {
              "station": "BAVENGA COMMUNITY HALL / A",
              "voters": 19
            }
          ],
          "MBENGE": [
            {
              "station": "CATHOLIC SCHOOL EKONA MBENGE / A",
              "voters": 2644
            }
          ],
          "MALENDE": [
            {
              "station": "CATHOLIC SCHOOL MALENDE / A",
              "voters": 990
            }
          ],
          "MAUTU": [
            {
              "station": "CATHOLIC SCHOOL MAUTU / A",
              "voters": 566
            }
          ],
          "CDC": [
            {
              "station": "CDC CAMDEV I OFFICE / A",
              "voters": 994
            }
          ],
          "CAMDEV": [
            {
              "station": "CDC CAMDEV I OFFICE / A",
              "voters": 621
            }
          ],
          "MUYUKA": [
            {
              "station": "COURT HALL MUYUKA / A",
              "voters": 6635
            }
          ],
          "BALONG": [
            {
              "station": "COURT HALL MUYUKA / A",
              "voters": 3386
            }
          ],
          "EKONA": [
            {
              "station": "EKONA LELU COMMUNITY HALL / A",
              "voters": 3053
            }
          ],
          "LELU": [
            {
              "station": "EKONA LELU COMMUNITY HALL / A",
              "voters": 36
            }
          ],
          "ELDERS": [
            {
              "station": "ELDERS AND FIFFS / A",
              "voters": 31
            }
          ],
          "AND": [
            {
              "station": "ELDERS AND FIFFS / A",
              "voters": 31
            }
          ],
          "FIFFS": [
            {
              "station": "ELDERS AND FIFFS / A",
              "voters": 31
            }
          ],
          "VILLAGE": [
            {
              "station": "ELDERS AND FIFFS / A",
              "voters": 6126
            }
          ],
          "STRANGERS": [
            {
              "station": "GBHS MUYUKA / A",
              "voters": 3249
            }
          ],
          "QUARTERS": [
            {
              "station": "GBHS MUYUKA / A",
              "voters": 3249
            }
          ],
          "YARD": [
            {
              "station": "GNS EKONA MBENGE / A",
              "voters": 373
            }
          ],
          "IKATA": [
            {
              "station": "IKATA COOP HALL / A",
              "voters": 729
            }
          ],
          "LEOLA": [
            {
              "station": "LEOLA BUEA COMMUNITY / A",
              "voters": 13
            }
          ],
          "BUEA": [
            {
              "station": "LEOLA BUEA COMMUNITY / A",
              "voters": 13
            }
          ],
          "LILALE": [
            {
              "station": "LILALE COOP HALL / A",
              "voters": 194
            }
          ],
          "LYKOKO": [
            {
              "station": "LYKOKO VILLAGE COMMUNITY HALL / A",
              "voters": 591
            }
          ],
          "MASUMA": [
            {
              "station": "MASUMA COMMUNITY HALL / A",
              "voters": 16
            }
          ],
          "YOKE": [
            {
              "station": "MBO QUARTER YOKE / A",
              "voters": 3260
            }
          ],
          "MEANJA": [
            {
              "station": "MEANJA CAMP HALL / A",
              "voters": 888
            }
          ],
          "MILE": [
            {
              "station": "MILE 29 CAMP / A",
              "voters": 217
            }
          ],
          "MPUNDU": [
            {
              "station": "MPUNDU BALONG COM. HALL (NATIVE) / A",
              "voters": 668
            }
          ],
          "MUNDAME": [
            {
              "station": "MUNDAME CAMP OFFICE / A",
              "voters": 95
            }
          ],
          "MUNYENGE": [
            {
              "station": "MUYENGE CATHOLIC SCHOOL KCB / A",
              "voters": 1449
            }
          ],
          "MASONE": [
            {
              "station": "MUYENGE GS / A",
              "voters": 609
            }
          ],
          "OWE": [
            {
              "station": "OWE COMMUNITY HALL / A",
              "voters": 967
            }
          ],
          "POWO": [
            {
              "station": "POWO CDC CAMP OFFICE / A",
              "voters": 14
            }
          ],
          "CAMP": [
            {
              "station": "POWO CDC CAMP OFFICE / A",
              "voters": 14
            }
          ]
        },
        "TIKO": {
          "LIKOMBA": [
            {
              "station": "AIRPORT TIKO / A",
              "voters": 8396
            }
          ],
          "HOLFORTH": [
            {
              "station": "BANANA EXPANSION OFFICE TIKO / A",
              "voters": 1889
            }
          ],
          "LONG": [
            {
              "station": "BANANA EXPANSION OFFICE TIKO / A",
              "voters": 5999
            }
          ],
          "IKANGE": [
            {
              "station": "BIG IKANGE CAMP OFFICE / A",
              "voters": 199
            }
          ],
          "VILLAGE": [
            {
              "station": "BIG IKANGE CAMP OFFICE / A",
              "voters": 199
            }
          ],
          "TIKO": [
            {
              "station": "BSA / A",
              "voters": 1202
            }
          ],
          "BEACH": [
            {
              "station": "BSA / A",
              "voters": 1202
            }
          ],
          "TONGO": [
            {
              "station": "BWINGA CAMP OFFICE / A",
              "voters": 55
            }
          ],
          "NATIVE": [
            {
              "station": "BWINGA CAMP OFFICE / A",
              "voters": 55
            }
          ],
          "MONDONI": [
            {
              "station": "CAMP 12 OFFICE / A",
              "voters": 637
            }
          ],
          "ESSOASSOA": [
            {
              "station": "CAMP 6 OFFICE / A",
              "voters": 179
            }
          ],
          "MISAKA": [
            {
              "station": "CBC SCHOOL MISAKA / A",
              "voters": 283
            }
          ],
          "MUTENGENE": [
            {
              "station": "CIAP MUTENGENE / A",
              "voters": 16708
            }
          ],
          "MONGO": [
            {
              "station": "COMMUNITY HEALTH CENTER BONASONE / A",
              "voters": 99
            }
          ],
          "JOHN": [
            {
              "station": "CUSTOMARY COURT HALL TIKO / A",
              "voters": 937
            }
          ],
          "HOLT": [
            {
              "station": "CUSTOMARY COURT HALL TIKO / A",
              "voters": 937
            }
          ],
          "MOQUO": [
            {
              "station": "GOV'T HEALTH CENTER MOQUO CAMP / A",
              "voters": 447
            }
          ],
          "OMBE": [
            {
              "station": "GOV'T NURSE. SCHOOL OMBE NEW LAYOUT /  A",
              "voters": 582
            }
          ],
          "MISSELLELE": [
            {
              "station": "GOV'T SCHOOL MISSELLELE / A",
              "voters": 688
            }
          ],
          "PUNGO": [
            {
              "station": "GOV'T SCHOOL PUNGO CAMP / A",
              "voters": 179
            }
          ],
          "MOTOMBOLOMBO": [
            {
              "station": "GOV'T SEC. SCHOOL MOTOMBOLOMBO / A",
              "voters": 1882
            }
          ],
          "AND": [
            {
              "station": "GOV'T SEC. SCHOOL MOTOMBOLOMBO / A",
              "voters": 2858
            }
          ],
          "NEW": [
            {
              "station": "GOV'T SEC. SCHOOL MOTOMBOLOMBO / A",
              "voters": 2858
            }
          ],
          "QUARTER": [
            {
              "station": "GOV'T SEC. SCHOOL MOTOMBOLOMBO / A",
              "voters": 2858
            }
          ],
          "LIFONGO": [
            {
              "station": "GOVERNMENT SCHOOL LIFONGO / A",
              "voters": 96
            }
          ],
          "NDONGO": [
            {
              "station": "GOVERNMENT SCHOOL NDONGO / A",
              "voters": 175
            }
          ],
          "CAMP": [
            {
              "station": "GOVERNMENT SCHOOL NDONGO / A",
              "voters": 175
            }
          ],
          "GOLF": [
            {
              "station": "GOVERNMENT SCHOOL NDONGO / A",
              "voters": 175
            }
          ],
          "QTR": [
            {
              "station": "GOVERNMENT SCHOOL NDONGO / A",
              "voters": 175
            }
          ],
          "BOMA": [
            {
              "station": "GOVERNMENT SCHOOL TIKO TOWN / A",
              "voters": 2501
            }
          ],
          "STREET": [
            {
              "station": "GOVERNMENT SCHOOL TIKO TOWN / A",
              "voters": 8500
            }
          ],
          "MUDEKA": [
            {
              "station": "GOVERNMENT SCHOOL TIKO TOWN / A",
              "voters": 1271
            }
          ],
          "KEME": [
            {
              "station": "KEME CAMP OFFICE / A",
              "voters": 59
            }
          ],
          "KOKE": [
            {
              "station": "KOKE CAMP OFFICE / A",
              "voters": 101
            }
          ],
          "MARTE": [
            {
              "station": "MARTE CAMP OFFICE / A",
              "voters": 235
            }
          ],
          "BONAKO": [
            {
              "station": "NEW BONAKO FORESTRY POST / A",
              "voters": 456
            }
          ],
          "KOMBOS": [
            {
              "station": "NGOMBE I KOMBOS / A",
              "voters": 22
            }
          ],
          "MATUTE": [
            {
              "station": "PUNGO MATUTE CAMP OFFICE / A",
              "voters": 51
            }
          ],
          "SONNE": [
            {
              "station": "SONNE CAMP OFFICE / A",
              "voters": 115
            }
          ],
          "KONGWE": [
            {
              "station": "TIKO RURAL COUNCIL CHECK POINT I / A",
              "voters": 41
            }
          ]
        }
      },
      "NDIAN": {
        "DIKOME-BALUE": {
          "ITENDE": [
            {
              "station": "CATHOLIC MISSION / A",
              "voters": 248
            }
          ],
          "BETENGE": [
            {
              "station": "G S BETENGE BALUE / A",
              "voters": 550
            }
          ],
          "BONJI": [
            {
              "station": "G S BONJI BALUE / A",
              "voters": 245
            }
          ],
          "DIBOKI": [
            {
              "station": "G S DIBOKI BALUE / A",
              "voters": 73
            }
          ],
          "DIFENDA": [
            {
              "station": "G S DIFENDA BALUE / A",
              "voters": 456
            }
          ],
          "DIKOME": [
            {
              "station": "G S DIKOME BALUE / A",
              "voters": 1312
            }
          ],
          "BALUE": [
            {
              "station": "G S DIKOME BALUE / A",
              "voters": 4393
            }
          ],
          "MBOMBE": [
            {
              "station": "G S MBOMBE BALUE / A",
              "voters": 40
            }
          ],
          "MEKOMA": [
            {
              "station": "G S MEKOMA BALUE / A",
              "voters": 141
            }
          ],
          "MOFAKO": [
            {
              "station": "G S MOFAKO BALUE / A",
              "voters": 366
            }
          ],
          "BONA": [
            {
              "station": "G S WEME BALUE / A",
              "voters": 192
            }
          ],
          "BOSUNGA": [
            {
              "station": "G S WEME BALUE / A",
              "voters": 192
            }
          ],
          "WEME": [
            {
              "station": "G S WEME BALUE / A",
              "voters": 192
            }
          ],
          "EBOBE": [
            {
              "station": "G T C EBOBE BALUE / A",
              "voters": 148
            }
          ],
          "NDONONO": [
            {
              "station": "NDONONO COM.HALL / A",
              "voters": 238
            }
          ]
        },
        "EKONDO-TITI": {
          "TITI": [
            {
              "station": "ARMY CAMP / A",
              "voters": 5467
            }
          ],
          "MARINE": [
            {
              "station": "ARMY CAMP / A",
              "voters": 373
            }
          ],
          "BATTALION": [
            {
              "station": "ARMY CAMP / A",
              "voters": 373
            }
          ],
          "BAFAKA": [
            {
              "station": "BAFAKA COM. HALL / A",
              "voters": 595
            }
          ],
          "BALUE": [
            {
              "station": "BAFAKA COM. HALL / A",
              "voters": 2877
            }
          ],
          "BERENGE": [
            {
              "station": "BERENGE COM. HALL / A",
              "voters": 53
            }
          ],
          "CDC": [
            {
              "station": "BEYANGA CDC OFFICE / A",
              "voters": 21
            }
          ],
          "BEYANGA": [
            {
              "station": "BEYANGA CDC OFFICE / A",
              "voters": 21
            }
          ],
          "BISORO": [
            {
              "station": "BISORO HEALTH CENTRE / A",
              "voters": 209
            }
          ],
          "BONGONGO": [
            {
              "station": "BONGONGO I COM. HALL / A",
              "voters": 833
            }
          ],
          "WARD": [
            {
              "station": "CS EKONDO TITI / A",
              "voters": 6617
            }
          ],
          "EKWE": [
            {
              "station": "EKWE COM. HALL / A",
              "voters": 376
            }
          ],
          "BEKORA": [
            {
              "station": "GHS BEKORA BAROMBI / A",
              "voters": 1456
            }
          ],
          "BAROMBI": [
            {
              "station": "GHS BEKORA BAROMBI / A",
              "voters": 2658
            }
          ],
          "BEKATAKO": [
            {
              "station": "GS BEKATAKO BALUE / A",
              "voters": 128
            }
          ],
          "DIBONDA": [
            {
              "station": "GS DIBONDA BALONDO / A",
              "voters": 47
            }
          ],
          "BALONDO": [
            {
              "station": "GS DIBONDA BALONDO / A",
              "voters": 1004
            }
          ],
          "DORA": [
            {
              "station": "GS DORA BAROMBI / A",
              "voters": 86
            }
          ],
          "BLACK": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 30
            }
          ],
          "BUSH": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 30
            }
          ],
          "AND": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 280
            }
          ],
          "FISHING": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 30
            }
          ],
          "PORTS": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 30
            }
          ],
          "(BEACH)": [
            {
              "station": "GS EKONDO TITI BEACH / A",
              "voters": 30
            }
          ],
          "FUNGE": [
            {
              "station": "GS FUNGE BALONDO / A",
              "voters": 103
            }
          ],
          "KUMBE": [
            {
              "station": "GS FUNGE BALONDO / A",
              "voters": 538
            }
          ],
          "ILIBANYANGE": [
            {
              "station": "GS ILIBANYANGA BALUE / A",
              "voters": 96
            }
          ],
          "ILLOR": [
            {
              "station": "GS ILLOR BALONDO / A",
              "voters": 125
            }
          ],
          "KOTTO": [
            {
              "station": "GS KOTTO BALUE / A",
              "voters": 94
            }
          ],
          "LIPENJA/NWENGI": [
            {
              "station": "GS LIPENJA BAROMBI / A",
              "voters": 144
            }
          ],
          "ESTATE": [
            {
              "station": "GS LOBE ESTATE GROUP III / A",
              "voters": 797
            }
          ],
          "CAMPS": [
            {
              "station": "GS LOBE ESTATE GROUP III / A",
              "voters": 797
            }
          ],
          "LOE": [
            {
              "station": "GS LOE BALONDO / A",
              "voters": 89
            }
          ],
          "MASORE": [
            {
              "station": "GS MASORE BALUE / A",
              "voters": 130
            }
          ],
          "MOKONO": [
            {
              "station": "GS MOKONO BAROMBI / A",
              "voters": 139
            }
          ],
          "MONYANGE": [
            {
              "station": "GS MONYANGE BALUE / A",
              "voters": 24
            }
          ],
          "NALENDE": [
            {
              "station": "GS NALENDE BALUE / A",
              "voters": 93
            }
          ],
          "NGOLO": [
            {
              "station": "GS NGOLO METOKO BALUE / A",
              "voters": 202
            }
          ],
          "METOKO": [
            {
              "station": "GS NGOLO METOKO BALUE / A",
              "voters": 202
            }
          ],
          "PONDO": [
            {
              "station": "GS PONDO BALUE / A",
              "voters": 208
            }
          ],
          "KITTA": [
            {
              "station": "GSS KITTA BALUE / A",
              "voters": 202
            }
          ],
          "LIPENJA": [
            {
              "station": "LIPENJA CLUB / A",
              "voters": 334
            }
          ],
          "LOBE": [
            {
              "station": "LOBE BALONDO COM. HALL / A",
              "voters": 1482
            }
          ],
          "MGT-SUP": [
            {
              "station": "MANAGEMENT CLUB LOBE / A",
              "voters": 68
            }
          ],
          "STAFF": [
            {
              "station": "MANAGEMENT CLUB LOBE / A",
              "voters": 68
            }
          ],
          "QTRS": [
            {
              "station": "MANAGEMENT CLUB LOBE / A",
              "voters": 68
            }
          ],
          "NJIMA": [
            {
              "station": "NJIMA COM.HALL / A",
              "voters": 29
            }
          ],
          "PAMOL": [
            {
              "station": "PAMOL EKONDO NENE OFFICE / A",
              "voters": 401
            }
          ],
          "EKONDO": [
            {
              "station": "PAMOL EKONDO NENE OFFICE / A",
              "voters": 5589
            }
          ],
          "NENE": [
            {
              "station": "PAMOL EKONDO NENE OFFICE / A",
              "voters": 122
            }
          ],
          "CAMP": [
            {
              "station": "RESEARCH OFFICE LOBE / A",
              "voters": 132
            }
          ],
          "JUNGLE": [
            {
              "station": "RESEARCH OFFICE LOBE / A",
              "voters": 132
            }
          ],
          "VILLAGE": [
            {
              "station": "RESEARCH OFFICE LOBE / A",
              "voters": 132
            }
          ]
        },
        "IDABATO": {
          "DELTA": [
            {
              "station": "DELTA BIR CAMP / A",
              "voters": 538
            }
          ],
          "BIR": [
            {
              "station": "DELTA BIR CAMP / A",
              "voters": 538
            }
          ],
          "JABANE": [
            {
              "station": "DELTA BIR CAMP / A",
              "voters": 1614
            }
          ],
          "DIAMOND": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 1460
            }
          ],
          "EDEN": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "ABASI": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "EKEYA": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "GIDIGIDI": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "IDABATO": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "KOMBO": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 1390
            }
          ],
          "AMUNJA": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 1390
            }
          ],
          "NKOBODI": [
            {
              "station": "GPS IDABATO 2B / A",
              "voters": 730
            }
          ],
          "PASTOR": [
            {
              "station": "GPS KOMBO AMUNJA 1 / A",
              "voters": 220
            }
          ],
          "VILLAGE": [
            {
              "station": "GPS KOMBO AMUNJA 1 / A",
              "voters": 220
            }
          ],
          "SHELL": [
            {
              "station": "GPS KOMBO AMUNJA 1 / A",
              "voters": 660
            }
          ],
          "CREEK": [
            {
              "station": "GPS KOMBO AMUNJA 1 / A",
              "voters": 660
            }
          ],
          "NAWUMSI": [
            {
              "station": "HEALTH CENTER NDO LOCATION / A",
              "voters": 165
            }
          ],
          "NDO": [
            {
              "station": "HEALTH CENTER NDO LOCATION / A",
              "voters": 55
            }
          ],
          "LOCATION": [
            {
              "station": "HEALTH CENTER NDO LOCATION / A",
              "voters": 55
            }
          ]
        },
        "ISANGUELE": {
          "ORON": [
            {
              "station": "COUNCIL CHAMBERS / A",
              "voters": 323
            }
          ],
          "IDIBANYANGHA": [
            {
              "station": "G.P.S BATEKA / A",
              "voters": 447
            }
          ],
          "MASSAKA": [
            {
              "station": "G.S MASSAKA / A",
              "voters": 138
            }
          ],
          "BATEKA": [
            {
              "station": "GENDARMERIE BRIGADE / A",
              "voters": 780
            }
          ],
          "IDIBANYANGA": [
            {
              "station": "GVMT. SCHOOL IDIBANYANGA / A",
              "voters": 102
            }
          ],
          "ITANYAYANG": [
            {
              "station": "GVMT. SCHOOL IDIBANYANGA / A",
              "voters": 102
            }
          ],
          "PAMOL": [
            {
              "station": "GVMT. SCHOOL IDIBANYANGA / A",
              "voters": 102
            }
          ],
          "CAMP": [
            {
              "station": "GVMT. SCHOOL IDIBANYANGA / A",
              "voters": 102
            }
          ],
          "BON-BON": [
            {
              "station": "MILITARY POST RIO-DEL-REY / A",
              "voters": 47
            }
          ],
          "RIO-DEL": [
            {
              "station": "MILITARY POST RIO-DEL-REY / A",
              "voters": 29
            }
          ],
          "-REY": [
            {
              "station": "MILITARY POST RIO-DEL-REY / A",
              "voters": 29
            }
          ],
          "AMOTO": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 746
            }
          ],
          "BUSH": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 373
            }
          ],
          "DIBONDORIKPA": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 373
            }
          ],
          "EKUMAMINDO": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 373
            }
          ],
          "ISO-OBO": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 639
            }
          ],
          "ITANYANYANG": [
            {
              "station": "TOWN HALL AMOTO / A",
              "voters": 373
            }
          ]
        },
        "KOMBO-ABEDIMO": {
          "AKWA": [
            {
              "station": "GS AKWA / A",
              "voters": 467
            }
          ],
          "MBENMONG": [
            {
              "station": "GS MBENMONG / A",
              "voters": 59
            }
          ],
          "KOMBO": [
            {
              "station": "KOMBO ABEDIMO MILITARY BARRACKS / A",
              "voters": 237
            }
          ],
          "ABEDIMO": [
            {
              "station": "KOMBO ABEDIMO MILITARY BARRACKS / A",
              "voters": 237
            }
          ],
          "FISHING": [
            {
              "station": "KOMBO ABEDIMO MILITARY BARRACKS / A",
              "voters": 237
            }
          ],
          "PORT": [
            {
              "station": "KOMBO ABEDIMO MILITARY BARRACKS / A",
              "voters": 237
            }
          ]
        },
        "KOMBO-ITINDI": {
          "BARRACKS": [
            {
              "station": "G.S. BARRACKS / A",
              "voters": 459
            }
          ],
          "NGOSSO": [
            {
              "station": "G.S. NGOSSO / A",
              "voters": 619
            }
          ],
          "GOC": [
            {
              "station": "MILITARY POST / A",
              "voters": 283
            }
          ]
        }
      },
      "MANYU": {
        "MAMFE": {
          "BANSO": [
            {
              "station": "BALI MEETING HALL / A",
              "voters": 225
            }
          ],
          "QUARTER": [
            {
              "station": "BALI MEETING HALL / A",
              "voters": 225
            }
          ],
          "NEWLAYOUT": [
            {
              "station": "CATHOLIC MISSION HALL / A",
              "voters": 576
            }
          ],
          "JOHN": [
            {
              "station": "COMMUNITY DEVELOPMENT OFFICE / A",
              "voters": 205
            }
          ],
          "HOLT": [
            {
              "station": "COMMUNITY DEVELOPMENT OFFICE / A",
              "voters": 205
            }
          ],
          "BESONGABANG": [
            {
              "station": "COMMUNITY HALL TETOCKONOCK / A",
              "voters": 860
            }
          ],
          "OKOYONG": [
            {
              "station": "CREDIT UNION HALL / A",
              "voters": 809
            }
          ],
          "BACHUO": [
            {
              "station": "G.S BACHUO NTAI I / A",
              "voters": 1044
            }
          ],
          "NTAI": [
            {
              "station": "G.S BACHUO NTAI I / A",
              "voters": 1044
            }
          ],
          "BANYA": [
            {
              "station": "G.S BANYA / A",
              "voters": 816
            }
          ],
          "MAMFE": [
            {
              "station": "G.S BANYA / A",
              "voters": 5059
            }
          ],
          "URBAN": [
            {
              "station": "G.S BANYA / A",
              "voters": 5059
            }
          ],
          "ESHOBI": [
            {
              "station": "G.S ESHOBI / A",
              "voters": 286
            }
          ],
          "BERORE": [
            {
              "station": "G.S ESHOBI GROUP II BERORE / A",
              "voters": 250
            }
          ],
          "ETEMETEK": [
            {
              "station": "G.S EYANCHANG/ETEMETEK / A",
              "voters": 84
            }
          ],
          "NCHANG": [
            {
              "station": "G.S.S BACHUO NTAI I / A",
              "voters": 928
            }
          ],
          "EGBEKAW": [
            {
              "station": "GPS EGBEKAW / A",
              "voters": 950
            }
          ],
          "BOMBE": [
            {
              "station": "GVMT. SCHOOL BOMBE / A",
              "voters": 67
            }
          ],
          "BEJA": [
            {
              "station": "OPERATION AKWAYA CHURCH / A",
              "voters": 28
            }
          ],
          "EYANCHANG": [
            {
              "station": "VILLAGE HALL EYANCHANG / A",
              "voters": 277
            }
          ],
          "EYANGNTUI": [
            {
              "station": "VILLAGE HALL EYANGNTUI / A",
              "voters": 209
            }
          ],
          "NFAITOCK": [
            {
              "station": "VILLAGE HALL NFAITOCK II / A",
              "voters": 156
            }
          ],
          "HAUSA": [
            {
              "station": "WOMEN CENTRE / A",
              "voters": 726
            }
          ],
          "QUARTERS": [
            {
              "station": "WOMEN CENTRE / A",
              "voters": 726
            }
          ]
        },
        "TINTO": {
          "ADJELI": [
            {
              "station": "ARM SCHOOL ADJELI / A",
              "voters": 42
            }
          ],
          "EYANGATEMAKO": [
            {
              "station": "ARM SCHOOL EYANG. LAST BUSH / A",
              "voters": 54
            }
          ],
          "LAST": [
            {
              "station": "ARM SCHOOL EYANG. LAST BUSH / A",
              "voters": 54
            }
          ],
          "BUSH": [
            {
              "station": "ARM SCHOOL EYANG. LAST BUSH / A",
              "voters": 54
            }
          ],
          "KEPELLE": [
            {
              "station": "ARM SCHOOL KEPELLE / A",
              "voters": 70
            }
          ],
          "TAFU": [
            {
              "station": "ARM SCHOOL TAFU / A",
              "voters": 52
            }
          ],
          "MBU": [
            {
              "station": "ARM SCHOOL TINTO MBU / A",
              "voters": 134
            }
          ],
          "BACHUO": [
            {
              "station": "CATH. SCHOOL BACHUO AKAGBE / A",
              "voters": 1323
            }
          ],
          "AKAGBE": [
            {
              "station": "CATH. SCHOOL BACHUO AKAGBE / A",
              "voters": 1323
            }
          ],
          "MBEME": [
            {
              "station": "CATHOLIC SCHOOL MBEME / A",
              "voters": 490
            }
          ],
          "ASHUM": [
            {
              "station": "COOPERATIVE HALL ASHUM / A",
              "voters": 412
            }
          ],
          "AGONG": [
            {
              "station": "GOV'T SCHOOL AGONG / A",
              "voters": 297
            }
          ],
          "KENYANG": [
            {
              "station": "GOV'T SCHOOL AGONG / A",
              "voters": 297
            }
          ],
          "SABES": [
            {
              "station": "GOV'T SCHOOL AGONG / A",
              "voters": 491
            }
          ],
          "AKIRIBA": [
            {
              "station": "GOV'T SCHOOL AKIRIBA / A",
              "voters": 164
            }
          ],
          "ATI": [
            {
              "station": "GOV'T SCHOOL ATI NUMBA / A",
              "voters": 102
            }
          ],
          "NUMBA": [
            {
              "station": "GOV'T SCHOOL ATI NUMBA / A",
              "voters": 481
            }
          ],
          "ATIBONG": [
            {
              "station": "GOV'T SCHOOL ATIBONG WIRE / A",
              "voters": 162
            }
          ],
          "WIRE": [
            {
              "station": "GOV'T SCHOOL ATIBONG WIRE / A",
              "voters": 704
            }
          ],
          "AYUKABA": [
            {
              "station": "GOV'T SCHOOL AYUKABA / A",
              "voters": 135
            }
          ],
          "BATOH": [
            {
              "station": "GOV'T SCHOOL BATOH NUMBA / A",
              "voters": 168
            }
          ],
          "EBEAGWA": [
            {
              "station": "GOV'T SCHOOL EBEAGWA / A",
              "voters": 149
            }
          ],
          "EBENSUK": [
            {
              "station": "GOV'T SCHOOL EBENSUK / A",
              "voters": 78
            }
          ],
          "EKPAW": [
            {
              "station": "GOV'T SCHOOL EKPAW / A",
              "voters": 105
            }
          ],
          "ETOKO": [
            {
              "station": "GOV'T SCHOOL ETOKO / A",
              "voters": 515
            }
          ],
          "EYANGATAMAKO": [
            {
              "station": "GOV'T SCHOOL EYANGATEMAKO / A",
              "voters": 379
            }
          ],
          "FOTABE": [
            {
              "station": "GOV'T SCHOOL FOTABE / A",
              "voters": 368
            }
          ],
          "KEKPOTI": [
            {
              "station": "GOV'T SCHOOL KEKPOTI / A",
              "voters": 95
            }
          ],
          "KENDEM": [
            {
              "station": "GOV'T SCHOOL KENDEM / A",
              "voters": 536
            }
          ],
          "MBANGA": [
            {
              "station": "GOV'T SCHOOL MBANGA PONGO / A",
              "voters": 122
            }
          ],
          "PONGO": [
            {
              "station": "GOV'T SCHOOL MBANGA PONGO / A",
              "voters": 122
            }
          ],
          "MBINJONG": [
            {
              "station": "GOV'T SCHOOL MBINJONG / A",
              "voters": 527
            }
          ],
          "NFAITOCK": [
            {
              "station": "GOV'T SCHOOL MFAITOCK IA / A",
              "voters": 300
            }
          ],
          "NCHEMBA": [
            {
              "station": "GOV'T SCHOOL NCHEMBA I / A",
              "voters": 270
            }
          ],
          "NFAINCHANG": [
            {
              "station": "GOV'T SCHOOL NFAINCHANG / A",
              "voters": 119
            }
          ],
          "NTENMBANG": [
            {
              "station": "GOV'T SCHOOL NTENMBANG / A",
              "voters": 213
            }
          ],
          "NYENNEBA": [
            {
              "station": "GOV'T SCHOOL NYENEBA / A",
              "voters": 370
            }
          ],
          "OBANG": [
            {
              "station": "GOV'T SCHOOL OBANG 3 CORNER / A",
              "voters": 197
            }
          ],
          "CORNER": [
            {
              "station": "GOV'T SCHOOL OBANG 3 CORNER / A",
              "voters": 197
            }
          ],
          "TAKWAI": [
            {
              "station": "GOV'T SCHOOL TAKWAI / A",
              "voters": 113
            }
          ],
          "BARRAH": [
            {
              "station": "GOV'T SCHOOL TALI I / A",
              "voters": 87
            }
          ],
          "TALI": [
            {
              "station": "GOV'T SCHOOL TALI I / A",
              "voters": 262
            }
          ],
          "GURUTE": [
            {
              "station": "GOV'T SEC. SCHOOL NYENEBA / A",
              "voters": 112
            }
          ],
          "BAKEBE": [
            {
              "station": "GOVERNMENT SCHOOL BAKEBE / A",
              "voters": 418
            }
          ],
          "BAKUMBA": [
            {
              "station": "GOVERNMENT SCHOOL BAKUMBA / A",
              "voters": 140
            }
          ],
          "FUMBE": [
            {
              "station": "GOVERNMENT SCHOOL FUMBE / A",
              "voters": 49
            }
          ],
          "MANTAH": [
            {
              "station": "GOVERNMENT SCHOOL MANTAH / A",
              "voters": 214
            }
          ],
          "MOSHIE": [
            {
              "station": "GOVERNMENT SCHOOL MOSHIE / A",
              "voters": 151
            }
          ],
          "TAYOR": [
            {
              "station": "GOVERNMENT SCHOOL TAYOR / A",
              "voters": 99
            }
          ],
          "TAMBU": [
            {
              "station": "GOVT SCHOOL SUMBE TAMBU / A",
              "voters": 247
            }
          ],
          "QUARTER": [
            {
              "station": "QUARTER HALL DEFANG / A",
              "voters": 59
            }
          ],
          "MILE": [
            {
              "station": "QUARTER HALL ETOKO MILE 27 / A",
              "voters": 127
            }
          ],
          "KOH": [
            {
              "station": "QUARTER HALL KOH SABES / A",
              "voters": 43
            }
          ],
          "MENSING": [
            {
              "station": "QUARTER HALL MENSING & MPAH / A",
              "voters": 196
            }
          ],
          "MPAH": [
            {
              "station": "QUARTER HALL MENSING & MPAH / A",
              "voters": 196
            }
          ],
          "NGASANG": [
            {
              "station": "QUARTER HALL NGASANG / A",
              "voters": 39
            }
          ],
          "SUMBE": [
            {
              "station": "QUARTER HALL SUMBE NCHOT / A",
              "voters": 306
            }
          ],
          "NCHOT": [
            {
              "station": "QUARTER HALL SUMBE NCHOT / A",
              "voters": 59
            }
          ],
          "TINTO": [
            {
              "station": "SAR/SM TINTO KERIEH / A",
              "voters": 1042
            }
          ],
          "KERIEH": [
            {
              "station": "SAR/SM TINTO KERIEH / A",
              "voters": 366
            }
          ],
          "AMEBEISU": [
            {
              "station": "TOWN HALL AMEBEISU / A",
              "voters": 82
            }
          ],
          "ANAMAFONG": [
            {
              "station": "TOWN HALL ANAMAFONG / A",
              "voters": 30
            }
          ],
          "BAMBAT": [
            {
              "station": "TOWN HALL BAMBAT / A",
              "voters": 62
            }
          ],
          "BOKWA": [
            {
              "station": "TOWN HALL BOKWA / A",
              "voters": 146
            }
          ],
          "CHINDA": [
            {
              "station": "TOWN HALL CHINDA / A",
              "voters": 68
            }
          ],
          "DEFANG": [
            {
              "station": "TOWN HALL DEFANG / A",
              "voters": 196
            }
          ],
          "EBANGABI": [
            {
              "station": "TOWN HALL EBANGABI / A",
              "voters": 82
            }
          ],
          "EDJUINGANG": [
            {
              "station": "TOWN HALL EDJUINGANG / A",
              "voters": 70
            }
          ],
          "EGBEMO": [
            {
              "station": "TOWN HALL EGBEMO / A",
              "voters": 22
            }
          ],
          "MBATOP": [
            {
              "station": "TOWN HALL ETOKO MBATOP / A",
              "voters": 35
            }
          ],
          "GURUFENG": [
            {
              "station": "TOWN HALL GURUFENG / A",
              "voters": 100
            }
          ],
          "KOANO": [
            {
              "station": "TOWN HALL KOANO / A",
              "voters": 108
            }
          ],
          "MAMBO": [
            {
              "station": "TOWN HALL MAMBO / A",
              "voters": 75
            }
          ],
          "MBIO": [
            {
              "station": "TOWN HALL MBIO / A",
              "voters": 85
            }
          ],
          "MUKWECHA": [
            {
              "station": "TOWN HALL MOKWECHA / A",
              "voters": 76
            }
          ],
          "FONJO": [
            {
              "station": "VILLAGE HALL FONJO / A",
              "voters": 51
            }
          ]
        }
      },
      "KOUPE-MANENGOUBA": {
        "TOMBEL": {
          "ELEMENTS": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "211TH": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "CIM": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "GENDARMERIE": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "ARMY": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "AND": [
            {
              "station": "ARMY CAMP / A",
              "voters": 1293
            }
          ],
          "GENDAMARIE": [
            {
              "station": "ARMY CAMP / A",
              "voters": 395
            }
          ],
          "BAKOLLE": [
            {
              "station": "BAKOLLE HEALTH POST / A",
              "voters": 212
            }
          ],
          "EKEB-MBABE": [
            {
              "station": "CATH CHURCH EKEB-MBABE / A",
              "voters": 146
            }
          ],
          "MEKEDMBENG": [
            {
              "station": "CATH CHURCH MEKEDMBENG / A",
              "voters": 87
            }
          ],
          "MENYOM": [
            {
              "station": "CATH CHURCH MENYOM / A",
              "voters": 33
            }
          ],
          "EBONJI": [
            {
              "station": "CATH SCHOOL EBONJI / A",
              "voters": 1511
            }
          ],
          "ESAM": [
            {
              "station": "CATH SCHOOL ESAM / A",
              "voters": 112
            }
          ],
          "WATER": [
            {
              "station": "CATHOLIC SCHOOL WATER FALL / A",
              "voters": 328
            }
          ],
          "FALL": [
            {
              "station": "CATHOLIC SCHOOL WATER FALL / A",
              "voters": 328
            }
          ],
          "BULUTU": [
            {
              "station": "CO-OPERATIVE STORE BULUTU / A",
              "voters": 344
            }
          ],
          "EHOM": [
            {
              "station": "CO-OPERATIVE STORE EHOM / A",
              "voters": 340
            }
          ],
          "ETAM": [
            {
              "station": "CO-OPERATIVE STORE ETAM I / A",
              "voters": 1380
            }
          ],
          "MEKOM": [
            {
              "station": "CO-OPERATIVE STORE MEKOM / A",
              "voters": 176
            }
          ],
          "TOMBEL": [
            {
              "station": "COCOA CAMP CDC / A",
              "voters": 17026
            }
          ],
          "BELLE": [
            {
              "station": "COMM. HALL BELLE / A",
              "voters": 51
            }
          ],
          "BANGONE": [
            {
              "station": "COMM. SCHOOL BANGONE / A",
              "voters": 48
            }
          ],
          "ATOB": [
            {
              "station": "COMMUNITY HALL ATOB / A",
              "voters": 141
            }
          ],
          "BASENG": [
            {
              "station": "COMMUNITY HALL BASENG / A",
              "voters": 153
            }
          ],
          "III": [
            {
              "station": "COMMUNITY HALL BUBA III / A",
              "voters": 654
            }
          ],
          "MILE": [
            {
              "station": "COMMUNITY HALL BUBA MILE 6 / A",
              "voters": 813
            }
          ],
          "EDIBENJOCK": [
            {
              "station": "COMMUNITY HALL CDC EDIBENJOCK / A",
              "voters": 233
            }
          ],
          "EBOKO": [
            {
              "station": "COMMUNITY HALL EBOKO BAJOH / A",
              "voters": 324
            }
          ],
          "BAJOH": [
            {
              "station": "COMMUNITY HALL EBOKO BAJOH / A",
              "voters": 324
            }
          ],
          "MAHOLE": [
            {
              "station": "COMMUNITY HALL MAHOLE / A",
              "voters": 271
            }
          ],
          "MBWOGMUTI": [
            {
              "station": "COMMUNITY HALL MBWOGMUTI / A",
              "voters": 55
            }
          ],
          "MENGE": [
            {
              "station": "COMMUNITY HALL MENGE / A",
              "voters": 28
            }
          ],
          "MPAKO": [
            {
              "station": "COMMUNITY HALL MPAKO / A",
              "voters": 181
            }
          ],
          "NYALLE": [
            {
              "station": "COMMUNITY HALL NYALLE / A",
              "voters": 86
            }
          ],
          "NYASOSO": [
            {
              "station": "COMMUNITY HALL NYASOSO / A",
              "voters": 791
            }
          ],
          "NYANDONG": [
            {
              "station": "COURT HALL NYANDONG / A",
              "voters": 428
            }
          ],
          "FIVE": [
            {
              "station": "COURT HALL TOMBEL / A",
              "voters": 646
            }
          ],
          "VIII": [
            {
              "station": "DISTRIC HEALTH SERVICE / A",
              "voters": 546
            }
          ],
          "TOMBELWARD": [
            {
              "station": "DISTRIC HEALTH SERVICE / A",
              "voters": 546
            }
          ],
          "EIGHT": [
            {
              "station": "DISTRIC HEALTH SERVICE / A",
              "voters": 546
            }
          ],
          "CDC": [
            {
              "station": "FONCHA'S HALL CDC / A",
              "voters": 608
            }
          ],
          "CAMP": [
            {
              "station": "FONCHA'S HALL CDC / A",
              "voters": 235
            }
          ],
          "NGOMBOKU": [
            {
              "station": "GOV'T NURSERY SCHOOL NGOMBOKU / A",
              "voters": 251
            }
          ],
          "NGOMENYOH": [
            {
              "station": "GOV'T NURSERY SCHOOL TOMBEL / A",
              "voters": 462
            }
          ],
          "KODMIN": [
            {
              "station": "GOV'T SCHOOL KODMIN / A",
              "voters": 74
            }
          ],
          "MBABE": [
            {
              "station": "GOV'T SCHOOL MBABE / A",
              "voters": 239
            }
          ],
          "NDOM": [
            {
              "station": "GOV'T SCHOOL NDOM / A",
              "voters": 259
            }
          ],
          "NGUSI": [
            {
              "station": "GOV'T SCHOOL NGUSI / A",
              "voters": 1107
            }
          ],
          "NHIANGSE": [
            {
              "station": "GOV'T SCHOOL NHIANGSE / A",
              "voters": 25
            }
          ],
          "NSUKE": [
            {
              "station": "GOV'T SCHOOL NSUKE / A",
              "voters": 160
            }
          ],
          "VII": [
            {
              "station": "GOV'T SCHOOL TOMBEL III / A",
              "voters": 935
            }
          ],
          "BEKUME": [
            {
              "station": "GS BEKUME / A",
              "voters": 124
            }
          ],
          "BUBA": [
            {
              "station": "GS BUBA I / A",
              "voters": 1511
            }
          ],
          "WATERFALL": [
            {
              "station": "GS BUBA WATER FALL / A",
              "voters": 598
            }
          ],
          "EKEB": [
            {
              "station": "GS EKEB / A",
              "voters": 128
            }
          ],
          "KUPE": [
            {
              "station": "GS KUPE / A",
              "voters": 236
            }
          ],
          "MBULLE": [
            {
              "station": "GS MBULLE / A",
              "voters": 143
            }
          ],
          "MBWOGMUT": [
            {
              "station": "GS MBWOGMUT II / A",
              "voters": 105
            }
          ],
          "MELONGO": [
            {
              "station": "GS MELONGO / A",
              "voters": 85
            }
          ],
          "MENGE-MESAKA": [
            {
              "station": "GS MENGE-MESAKA / A",
              "voters": 65
            }
          ],
          "PENG": [
            {
              "station": "GS PENG / A",
              "voters": 748
            }
          ],
          "NDABEKOM": [
            {
              "station": "GTC NDABEKOM / A",
              "voters": 121
            }
          ],
          "NDIBENJOCK": [
            {
              "station": "HEALTH CENTRE NDIBENJOCK / A",
              "voters": 109
            }
          ],
          "BAMBELE": [
            {
              "station": "NONI HALL BAMBELE EBONDIAD / A",
              "voters": 97
            }
          ],
          "EBONDIAD": [
            {
              "station": "NONI HALL BAMBELE EBONDIAD / A",
              "voters": 97
            }
          ],
          "KACK": [
            {
              "station": "PRES. NURSERY SCHOOL KACK / A",
              "voters": 166
            }
          ],
          "EBUL-PENG": [
            {
              "station": "PRESBYTERIAN CHURCH EBUL-PENG / A",
              "voters": 101
            }
          ],
          "MUANYAN": [
            {
              "station": "PRESBYTERIAN CHURCH MUANYAN / A",
              "voters": 44
            }
          ],
          "NLOG": [
            {
              "station": "PRESBYTERIAN CHURCH NLOG / A",
              "voters": 204
            }
          ],
          "NGOMBOMBENG": [
            {
              "station": "PS NGOMBOMBENG / A",
              "voters": 65
            }
          ],
          "NGAB": [
            {
              "station": "UCHS TOMBEL / A",
              "voters": 898
            }
          ],
          "EKONEBEL": [
            {
              "station": "UCHS TOMBEL / A",
              "voters": 898
            }
          ],
          "WARD": [
            {
              "station": "UCHS TOMBEL / A",
              "voters": 14853
            }
          ]
        }
      }
    }
  }
};