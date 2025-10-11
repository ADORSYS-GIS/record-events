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
  "NORD-OUEST": {
    "name": {
      "en": "NORTH-WEST",
      "fr": "NORD-OUEST"
    },
    "divisions": {
      "DONGA-MANTUNG": {
        "AKO": {
          "101": [
            {
              "station": "G.S. JEYU / A",
              "voters": 101
            }
          ],
          "107": [
            {
              "station": "ZOCHE VILLAGE HALL / A",
              "voters": 107
            }
          ],
          "114": [
            {
              "station": "GWMT. SCHOOL AKWESSE / A",
              "voters": 114
            }
          ],
          "123": [
            {
              "station": "MBOI VILLAGE HALL / A",
              "voters": 123
            }
          ],
          "133": [
            {
              "station": "G.S. JAFFOR NDOOH / A",
              "voters": 133
            }
          ],
          "140": [
            {
              "station": "G.S. JEVI / A",
              "voters": 140
            }
          ],
          "144": [
            {
              "station": "MPENCHERE COUNCIL HALL / A",
              "voters": 144
            }
          ],
          "145": [
            {
              "station": "JAFFOR FRA VILLAGE HALL / A",
              "voters": 145
            }
          ],
          "172": [
            {
              "station": "G.S. SABONGIDA / A",
              "voters": 172
            }
          ],
          "178": [
            {
              "station": "MBIRIBUA VILLAGE HALL / A",
              "voters": 178
            }
          ],
          "182": [
            {
              "station": "NGATHO ANDE 2 SQUARE / A",
              "voters": 182
            }
          ],
          "187": [
            {
              "station": "G.S. NDAKA / A",
              "voters": 187
            }
          ],
          "217": [
            {
              "station": "JEVI COUNCIL HALL / A",
              "voters": 217
            }
          ],
          "239": [
            {
              "station": "G.S. ZEMBEABURU / A",
              "voters": 239
            }
          ],
          "261": [
            {
              "station": "G.H.S. AKO / A",
              "voters": 261
            }
          ],
          "288": [
            {
              "station": "MBANDE VILLAGE HALL / B",
              "voters": 288
            }
          ],
          "294": [
            {
              "station": "MBANDE VILLAGE HALL / A",
              "voters": 294
            }
          ],
          "356": [
            {
              "station": "G.S. NZIBIE / A",
              "voters": 356
            }
          ],
          "360": [
            {
              "station": "G.S. AKO 2 / A",
              "voters": 360
            }
          ],
          "Abuenshie": [
            {
              "station": "ABUENSHE UP VILLAGE HALL / A",
              "voters": 776
            }
          ],
          "G.S": [
            {
              "station": "G.S. ABAFUM / A",
              "voters": 7177
            }
          ],
          "Buku": [
            {
              "station": "G.S. ABAFUM / A",
              "voters": 1275
            }
          ],
          "Ako": [
            {
              "station": "G.S. ABAKA / A",
              "voters": 5126
            }
          ]
        },
        "MISAJE": {
          "127": [
            {
              "station": "G.S. TENGTENG / A",
              "voters": 127
            }
          ],
          "136": [
            {
              "station": "G.S. NSAM / A",
              "voters": 136
            }
          ],
          "139": [
            {
              "station": "COM. HALL NJIYUNG / A",
              "voters": 139
            }
          ],
          "140": [
            {
              "station": "G.S. NJIPLVU / A",
              "voters": 280
            }
          ],
          "161": [
            {
              "station": "G.S. NJINGARUM / A",
              "voters": 161
            }
          ],
          "185": [
            {
              "station": "P.S. KAKAR / A",
              "voters": 185
            }
          ],
          "221": [
            {
              "station": "G.S. NJIFOR / B",
              "voters": 221
            }
          ],
          "230": [
            {
              "station": "MBONGONG MKT SQUARE / B",
              "voters": 230
            }
          ],
          "250": [
            {
              "station": "G.S. NTISAW / B",
              "voters": 250
            }
          ],
          "269": [
            {
              "station": "MBONGONG MKT SQUARE / A",
              "voters": 269
            }
          ],
          "276": [
            {
              "station": "G.S. MBENG-TAKU / A",
              "voters": 276
            }
          ],
          "277": [
            {
              "station": "G.S. NTISAW / A",
              "voters": 277
            }
          ],
          "282": [
            {
              "station": "NTUNGE COOPERATIVE / A",
              "voters": 282
            }
          ],
          "300": [
            {
              "station": "NSHI-O-DOH C.B.C. SCH / B",
              "voters": 300
            }
          ],
          "314": [
            {
              "station": "G.S. NJIFOR / A",
              "voters": 314
            }
          ],
          "322": [
            {
              "station": "C.B.C NJIPTOP / A",
              "voters": 322
            }
          ],
          "349": [
            {
              "station": "NSHI-O-DOH C.B.C. SCH / A",
              "voters": 349
            }
          ],
          "390": [
            {
              "station": "NTAMNRUH MARKET SQ. / A",
              "voters": 390
            }
          ],
          "Ntumbaw": [
            {
              "station": "G.S MBAWRONG / A",
              "voters": 1837
            }
          ],
          "Ndu": [
            {
              "station": "JIRT COOPERATIVE / A",
              "voters": 5630
            }
          ],
          "Grandstand": [
            {
              "station": "JIRT COOPERATIVE / A",
              "voters": 5630
            }
          ],
          "G.S": [
            {
              "station": "MBIYEH CUSTOMARY COURT / A",
              "voters": 5083
            }
          ],
          "Talla": [
            {
              "station": "MBIYEH CUSTOMARY COURT / A",
              "voters": 3246
            }
          ]
        },
        "NKAMBE": {
          "109": [
            {
              "station": "CNPS NKAMBE / C",
              "voters": 109
            }
          ],
          "119": [
            {
              "station": "G.S MBIBU / A",
              "voters": 119
            }
          ],
          "120": [
            {
              "station": "FUNCHI MARKET SQUARE / A",
              "voters": 120
            }
          ],
          "131": [
            {
              "station": "C.S MBAA / A",
              "voters": 131
            }
          ],
          "137": [
            {
              "station": "G.T.T.C NKAMBE / A",
              "voters": 137
            }
          ],
          "138": [
            {
              "station": "MBANGUI YOUTH CENTER / A",
              "voters": 138
            }
          ],
          "139": [
            {
              "station": "C.B.C WAT / A",
              "voters": 139
            }
          ],
          "143": [
            {
              "station": "NKATECCUL / B",
              "voters": 143
            }
          ],
          "145": [
            {
              "station": "P.S NJILAH / A",
              "voters": 145
            }
          ],
          "147": [
            {
              "station": "COMM. HALL KINDFU / A",
              "voters": 147
            }
          ],
          "151": [
            {
              "station": "CATHOLIC MISSION MBANTU / A",
              "voters": 151
            }
          ],
          "166": [
            {
              "station": "HEALTH CENTER BINKA / A",
              "voters": 166
            }
          ],
          "167": [
            {
              "station": "GVMT. SCHOOL GWEMENG / A",
              "voters": 167
            }
          ],
          "184": [
            {
              "station": "HEALTH CENTER BINSHUA / A",
              "voters": 184
            }
          ],
          "187": [
            {
              "station": "SUB PREFECTURE / A",
              "voters": 187
            }
          ],
          "188": [
            {
              "station": "YAMBA YOUTH HALL / A",
              "voters": 188
            }
          ],
          "196": [
            {
              "station": "C.S. KIEKU / B",
              "voters": 392
            }
          ],
          "198": [
            {
              "station": "G.S MBAKA / A",
              "voters": 198
            }
          ],
          "208": [
            {
              "station": "G.S TUKU / A",
              "voters": 208
            }
          ],
          "212": [
            {
              "station": "NKATECCUL / A",
              "voters": 424
            }
          ],
          "213": [
            {
              "station": "G.S. WAT / A",
              "voters": 213
            }
          ],
          "217": [
            {
              "station": "G.S. NGOTONG / A",
              "voters": 217
            }
          ],
          "228": [
            {
              "station": "GBS NKAMBE / A",
              "voters": 228
            }
          ],
          "229": [
            {
              "station": "COMM. HALL MBANKA / A",
              "voters": 229
            }
          ],
          "230": [
            {
              "station": "NGIE MARKET SQUARE / B",
              "voters": 230
            }
          ],
          "231": [
            {
              "station": "BINTALA SQUARE / A",
              "voters": 231
            }
          ],
          "247": [
            {
              "station": "NTERMBANG G.S. / A",
              "voters": 247
            }
          ],
          "257": [
            {
              "station": "PHYTOSANITORY / B",
              "voters": 257
            }
          ],
          "267": [
            {
              "station": "PHYTOSANITORY / A",
              "voters": 534
            }
          ],
          "269": [
            {
              "station": "G.S. MBABI / A",
              "voters": 269
            }
          ],
          "271": [
            {
              "station": "TORCH BEARERS / A",
              "voters": 542
            }
          ],
          "276": [
            {
              "station": "GRAND STAND / C",
              "voters": 276
            }
          ],
          "288": [
            {
              "station": "C.S MBIRBOH / A",
              "voters": 288
            }
          ],
          "289": [
            {
              "station": "G.S MBIRBOH / A",
              "voters": 289
            }
          ],
          "292": [
            {
              "station": "G.S BINKA / A",
              "voters": 584
            }
          ],
          "300": [
            {
              "station": "CNPS NKAMBE / B",
              "voters": 300
            }
          ],
          "302": [
            {
              "station": "COUNCIL CHAMBERS / A",
              "voters": 302
            }
          ],
          "304": [
            {
              "station": "G.S NJEMAH / A",
              "voters": 608
            }
          ],
          "309": [
            {
              "station": "GRAND STAND / B",
              "voters": 309
            }
          ],
          "321": [
            {
              "station": "C.S. KIEKU / A",
              "voters": 321
            }
          ],
          "324": [
            {
              "station": "WAT MARKET SQUARE / A",
              "voters": 324
            }
          ],
          "329": [
            {
              "station": "CENTRAL BAR / A",
              "voters": 658
            }
          ],
          "336": [
            {
              "station": "NWANGRI COOPERATIVE HALL / A",
              "voters": 336
            }
          ],
          "338": [
            {
              "station": "GRAND STAND / D",
              "voters": 338
            }
          ],
          "339": [
            {
              "station": "SASH HALL NKAMBE / C",
              "voters": 1017
            }
          ],
          "350": [
            {
              "station": "CNPS NKAMBE / A",
              "voters": 350
            }
          ],
          "361": [
            {
              "station": "COMMERCE / A",
              "voters": 361
            }
          ],
          "362": [
            {
              "station": "BONYAP CULTURAL HALL / A",
              "voters": 362
            }
          ],
          "363": [
            {
              "station": "GRAND STAND / A",
              "voters": 363
            }
          ],
          "367": [
            {
              "station": "MBIKOP MARKET SQUARE / A",
              "voters": 367
            }
          ],
          "389": [
            {
              "station": "SAAH MARKET SQUARE / A",
              "voters": 389
            }
          ],
          "403": [
            {
              "station": "ST LOUIS / A",
              "voters": 403
            }
          ],
          "433": [
            {
              "station": "G.S MOH / A",
              "voters": 433
            }
          ],
          "470": [
            {
              "station": "MBAYA HALL, TFUM / A",
              "voters": 470
            }
          ],
          "High": [
            {
              "station": "ARMY CAMP / A",
              "voters": 1523
            }
          ],
          "Ways": [
            {
              "station": "ARMY CAMP / A",
              "voters": 1523
            }
          ],
          "Nkambe": [
            {
              "station": "ARMY CAMP / A",
              "voters": 4311
            }
          ],
          "G.S": [
            {
              "station": "BINKA COOPERATIVE STORE / A",
              "voters": 1969
            }
          ],
          "Binka": [
            {
              "station": "BINKA COOPERATIVE STORE / A",
              "voters": 1969
            }
          ],
          "G.B.S": [
            {
              "station": "BINSHUA WOMEN'S HALL / A",
              "voters": 1308
            }
          ],
          "G.S.S": [
            {
              "station": "G.S. BINJENG / A",
              "voters": 837
            }
          ],
          "Bih": [
            {
              "station": "G.S. BINJENG / A",
              "voters": 837
            }
          ],
          "G.H.S": [
            {
              "station": "G.S. BONDU / A",
              "voters": 2416
            }
          ],
          "Tabenken": [
            {
              "station": "G.S. BONDU / A",
              "voters": 2416
            }
          ],
          "G.P.S": [
            {
              "station": "G.S. KONCHEP / A",
              "voters": 1480
            }
          ]
        },
        "NWA": {
          "Nwa": [
            {
              "station": "G.S ADERE / A",
              "voters": 7590
            }
          ],
          "Community": [
            {
              "station": "G.S ADERE / A",
              "voters": 7590
            }
          ],
          "Hall": [
            {
              "station": "G.S ADERE / A",
              "voters": 7590
            }
          ]
        }
      },
      "MOMO": {
        "ANDEK": {
          "102": [
            {
              "station": "C.S NJINDOM / B",
              "voters": 102
            }
          ],
          "106": [
            {
              "station": "G.S. NJERWO / A",
              "voters": 106
            }
          ],
          "130": [
            {
              "station": "P.C. MBENGWI / B",
              "voters": 130
            }
          ],
          "160": [
            {
              "station": "EJEE MARKET SQUARE / A",
              "voters": 160
            }
          ],
          "161": [
            {
              "station": "SANG MARKET SQUARE / A",
              "voters": 161
            }
          ],
          "176": [
            {
              "station": "NJIMETU MARKET SQUARE / A",
              "voters": 176
            }
          ],
          "186": [
            {
              "station": "G.S. TUANYANG / A",
              "voters": 186
            }
          ],
          "189": [
            {
              "station": "G.S. NOWOKWONG / A",
              "voters": 189
            }
          ],
          "198": [
            {
              "station": "G.S. WUMSOM / A",
              "voters": 198
            }
          ],
          "219": [
            {
              "station": "G.S. TUDIG / A",
              "voters": 219
            }
          ],
          "222": [
            {
              "station": "P.C. ZEM / A",
              "voters": 222
            }
          ],
          "267": [
            {
              "station": "G.S. WUMNEBURG / A",
              "voters": 267
            }
          ],
          "279": [
            {
              "station": "G.S. TUGI / A",
              "voters": 279
            }
          ],
          "290": [
            {
              "station": "G.S MUNAM / A",
              "voters": 290
            }
          ],
          "296": [
            {
              "station": "G.S NJINIBI / A",
              "voters": 296
            }
          ],
          "304": [
            {
              "station": "G.S. NJAH-ETU / A",
              "voters": 304
            }
          ],
          "325": [
            {
              "station": "NGYEN-MBO COMMUNITY HALL / B",
              "voters": 325
            }
          ],
          "346": [
            {
              "station": "NGYEN-MBO COMMUNITY HALL / A",
              "voters": 346
            }
          ],
          "358": [
            {
              "station": "G.S. ZANG-TABI / A",
              "voters": 358
            }
          ],
          "368": [
            {
              "station": "NYEN COOPERTIVE HALL / A",
              "voters": 368
            }
          ],
          "373": [
            {
              "station": "C.S NJINDOM / A",
              "voters": 373
            }
          ],
          "SAR/SM": [
            {
              "station": "ACHA-TUGI HOSPITAL / A",
              "voters": 737
            }
          ],
          "G.B.S": [
            {
              "station": "G.S ANGLO ARABIC / A",
              "voters": 2784
            }
          ],
          "MBENGWI": [
            {
              "station": "G.S ANGLO ARABIC / A",
              "voters": 8289
            }
          ],
          "COUNCIL": [
            {
              "station": "G.S. BESSI-FOMUKONG / A",
              "voters": 3703
            }
          ],
          "HALL": [
            {
              "station": "G.S. BESSI-FOMUKONG / A",
              "voters": 3703
            }
          ],
          "GBHS": [
            {
              "station": "G.S. CHIGWIRI / A",
              "voters": 1802
            }
          ]
        },
        "NJIKWA": {
          "101": [
            {
              "station": "TOGOBEI -KU HALL / A",
              "voters": 101
            }
          ],
          "106": [
            {
              "station": "BEMBAN HALL / A",
              "voters": 106
            }
          ],
          "123": [
            {
              "station": "NYIKOP HALL / A",
              "voters": 123
            }
          ],
          "127": [
            {
              "station": "NJWO HALL / A",
              "voters": 127
            }
          ],
          "163": [
            {
              "station": "SABRI HALL / A",
              "voters": 163
            }
          ],
          "179": [
            {
              "station": "NGEBENGE HALL / A",
              "voters": 179
            }
          ],
          "193": [
            {
              "station": "NYEBAI HALL / A",
              "voters": 193
            }
          ],
          "203": [
            {
              "station": "G.S. SOH / A",
              "voters": 203
            }
          ],
          "243": [
            {
              "station": "BEREJE HALL / A",
              "voters": 243
            }
          ],
          "304": [
            {
              "station": "COOPERATIVE HALL OSHIE / A",
              "voters": 304
            }
          ],
          "324": [
            {
              "station": "NJIKWA COUNCIL HALL / A",
              "voters": 324
            }
          ],
          "342": [
            {
              "station": "NKUN COOPERATIVE HALL / A",
              "voters": 342
            }
          ],
          "INSPECTORATE": [
            {
              "station": "BAKO MARKET SQUARE / A",
              "voters": 2221
            }
          ],
          "BASIC": [
            {
              "station": "BAKO MARKET SQUARE / A",
              "voters": 2221
            }
          ],
          "EDUCATION": [
            {
              "station": "BAKO MARKET SQUARE / A",
              "voters": 2221
            }
          ],
          "NJIKWA": [
            {
              "station": "BAKO MARKET SQUARE / A",
              "voters": 2221
            }
          ]
        },
        "WIDIKUM": {
          "100": [
            {
              "station": "G.S. ISHIA / A",
              "voters": 100
            }
          ],
          "107": [
            {
              "station": "G.S LARRINJI / A",
              "voters": 107
            }
          ],
          "117": [
            {
              "station": "COMMUNITY HALL MANTOH / A",
              "voters": 117
            }
          ],
          "119": [
            {
              "station": "G.S. KANIMBOM / A",
              "voters": 119
            }
          ],
          "120": [
            {
              "station": "G.S. ACHANA / A",
              "voters": 120
            }
          ],
          "122": [
            {
              "station": "C.S. ACHANA / A",
              "voters": 122
            }
          ],
          "128": [
            {
              "station": "KWAFONG CATHOLIC CHURCH / A",
              "voters": 128
            }
          ],
          "138": [
            {
              "station": "N.A.C. MBAKOK HALL / A",
              "voters": 138
            }
          ],
          "151": [
            {
              "station": "CATHOLIC MISSION OCHIE / A",
              "voters": 151
            }
          ],
          "171": [
            {
              "station": "G.S TANKA / A",
              "voters": 171
            }
          ],
          "184": [
            {
              "station": "CUSTOMARY COURT HALL MENKA / A",
              "voters": 184
            }
          ],
          "303": [
            {
              "station": "G.S. TIKOM / A",
              "voters": 303
            }
          ],
          "320": [
            {
              "station": "G.S. NYEN / A",
              "voters": 320
            }
          ],
          "352": [
            {
              "station": "G.S. OLORUNTI / A",
              "voters": 352
            }
          ],
          "365": [
            {
              "station": "G.S. NGALLA / A",
              "voters": 365
            }
          ],
          "BIFANG": [
            {
              "station": "C.S. AMBOMBO / A",
              "voters": 2589
            }
          ],
          "G.S": [
            {
              "station": "G.S. ABEDU / A",
              "voters": 7378
            }
          ],
          "WIDIKUM": [
            {
              "station": "G.S. ABEDU / A",
              "voters": 4206
            }
          ],
          "TIKOM": [
            {
              "station": "G.S. BAMBEN / A",
              "voters": 583
            }
          ]
        }
      },
      "NGOKE TUNJIA": {
        "BABESSI": {
          "108": [
            {
              "station": "NDUMMET BADO HALL / A",
              "voters": 108
            }
          ],
          "122": [
            {
              "station": "NJINDEM MEETING HOUSE / A",
              "voters": 122
            }
          ],
          "130": [
            {
              "station": "PILIMBO COMMUNITY HALL / A",
              "voters": 130
            }
          ],
          "154": [
            {
              "station": "MBANTAP FULL GOSPEL CHURCH / A",
              "voters": 154
            }
          ],
          "169": [
            {
              "station": "BAMUNKUMBIT G.S.S./ A",
              "voters": 169
            }
          ],
          "188": [
            {
              "station": "MANJOM G.S. ALUMLI / A",
              "voters": 188
            }
          ],
          "190": [
            {
              "station": "NGONGO CATHOLIC SCHOOL / A",
              "voters": 190
            }
          ],
          "191": [
            {
              "station": "WAPU GOV'T SCHOOL / A",
              "voters": 191
            }
          ],
          "201": [
            {
              "station": "BALOM HEALTH CENTRE / A",
              "voters": 201
            }
          ],
          "207": [
            {
              "station": "MUNANJI PRESBYTERIAN CHURCH / A",
              "voters": 207
            }
          ],
          "222": [
            {
              "station": "NYUGU C.B.C CHURCH / A",
              "voters": 222
            }
          ],
          "235": [
            {
              "station": "AKUMUM GOVERNMENT SCHOOL / A",
              "voters": 235
            }
          ],
          "236": [
            {
              "station": "MANJOM G.S./ A",
              "voters": 236
            }
          ],
          "290": [
            {
              "station": "MBANTI AGRIC POST / A",
              "voters": 290
            }
          ],
          "319": [
            {
              "station": "NYONGSONGHA BADO HALL / A",
              "voters": 319
            }
          ],
          "334": [
            {
              "station": "NGOLANEPKAT C.S./ A",
              "voters": 334
            }
          ],
          "341": [
            {
              "station": "NYAMBU KODUNA G.S./ A",
              "voters": 341
            }
          ],
          "359": [
            {
              "station": "SMALL MARKET PRESBY. SCHOOL / A",
              "voters": 359
            }
          ],
          "364": [
            {
              "station": "MULAFI G.S./ A",
              "voters": 364
            }
          ],
          "371": [
            {
              "station": "MBANKA C.S./ A",
              "voters": 371
            }
          ],
          "BADO": [
            {
              "station": "EKWO GOVERNMENT SCHOOL / A",
              "voters": 6222
            }
          ],
          "HALL": [
            {
              "station": "EKWO GOVERNMENT SCHOOL / A",
              "voters": 6222
            }
          ]
        }
      },
      "MEZAM": {
        "BAFUT": {
          "102": [
            {
              "station": "G.S. NIKO / B",
              "voters": 102
            }
          ],
          "103": [
            {
              "station": "C.S MBERIWI / A",
              "voters": 103
            }
          ],
          "110": [
            {
              "station": "P.C NJIBUJANG / B",
              "voters": 110
            }
          ],
          "114": [
            {
              "station": "G.S. NEBEBA / A",
              "voters": 114
            }
          ],
          "122": [
            {
              "station": "P.S. NCHUM / B",
              "voters": 122
            }
          ],
          "134": [
            {
              "station": "CUSTOMARY COURT NJINTEH / C",
              "voters": 134
            }
          ],
          "156": [
            {
              "station": "G.S. MFONTA / A",
              "voters": 156
            }
          ],
          "157": [
            {
              "station": "G.S. OKWALA / A",
              "voters": 157
            }
          ],
          "158": [
            {
              "station": "MUNDUM HEALTH CENTER / A",
              "voters": 158
            }
          ],
          "170": [
            {
              "station": "P.C NIBE / A",
              "voters": 170
            }
          ],
          "181": [
            {
              "station": "G.S. NSOH / B",
              "voters": 181
            }
          ],
          "198": [
            {
              "station": "G.S. NJIBUJANG / A",
              "voters": 198
            }
          ],
          "212": [
            {
              "station": "G.S. NJIMBEE / A",
              "voters": 212
            }
          ],
          "252": [
            {
              "station": "G.S. MUGHIE / A",
              "voters": 252
            }
          ],
          "254": [
            {
              "station": "MFORYA MKT SQUARE / B",
              "voters": 508
            }
          ],
          "271": [
            {
              "station": "P.C. ALANTAH / B",
              "voters": 271
            }
          ],
          "276": [
            {
              "station": "MFORYA MKT SQUARE / A",
              "voters": 276
            }
          ],
          "286": [
            {
              "station": "G.S. TINGOH / B",
              "voters": 286
            }
          ],
          "294": [
            {
              "station": "G.S MBEBILI / A",
              "voters": 294
            }
          ],
          "311": [
            {
              "station": "G.S. MANKWI / B",
              "voters": 311
            }
          ],
          "316": [
            {
              "station": "G.S. TINGOH / A",
              "voters": 316
            }
          ],
          "324": [
            {
              "station": "G.S. MANKWI / A",
              "voters": 324
            }
          ],
          "337": [
            {
              "station": "P.C. MBEBALI / B",
              "voters": 337
            }
          ],
          "339": [
            {
              "station": "COMMUNITY HALL NTABUWE / A",
              "voters": 339
            }
          ],
          "357": [
            {
              "station": "P.C. MBEBALI / A",
              "voters": 357
            }
          ],
          "363": [
            {
              "station": "P.C NJIBUJANG / A",
              "voters": 363
            }
          ],
          "367": [
            {
              "station": "C.S NSOH / B",
              "voters": 367
            }
          ],
          "387": [
            {
              "station": "CUSTOMARY COURT NJINTEH / B",
              "voters": 387
            }
          ],
          "388": [
            {
              "station": "CUSTOMARY COURT NJINTEH / A",
              "voters": 388
            }
          ],
          "389": [
            {
              "station": "G.S. OBANG / A",
              "voters": 389
            }
          ],
          "393": [
            {
              "station": "G.S. NSOH / A",
              "voters": 393
            }
          ],
          "404": [
            {
              "station": "G.S NDUNG / A",
              "voters": 404
            }
          ],
          "405": [
            {
              "station": "P.S. NSEM / A",
              "voters": 405
            }
          ],
          "411": [
            {
              "station": "C.S NSOH / A",
              "voters": 411
            }
          ],
          "417": [
            {
              "station": "P.S. NCHUM / A",
              "voters": 417
            }
          ],
          "418": [
            {
              "station": "G.S. MBAKONG / A",
              "voters": 418
            }
          ],
          "429": [
            {
              "station": "G.S. NIKO / A",
              "voters": 429
            }
          ],
          "455": [
            {
              "station": "C.S NSOH / C",
              "voters": 455
            }
          ],
          "Council": [
            {
              "station": "ADIEMUKONG MARKET SQUARE / A",
              "voters": 2502
            }
          ],
          "building,": [
            {
              "station": "ADIEMUKONG MARKET SQUARE / A",
              "voters": 2502
            }
          ],
          "nsoh": [
            {
              "station": "ADIEMUKONG MARKET SQUARE / A",
              "voters": 2502
            }
          ],
          "G.N.S": [
            {
              "station": "G.S. ACHENI / A",
              "voters": 4939
            }
          ],
          "AGYATI": [
            {
              "station": "G.S. ACHENI / A",
              "voters": 4939
            }
          ]
        },
        "BALI": {
          "114": [
            {
              "station": "GTHS SANG / B",
              "voters": 114
            }
          ],
          "115": [
            {
              "station": "NGWATKAN COMMUNITY HALL / A",
              "voters": 115
            }
          ],
          "143": [
            {
              "station": "NETAB P.C. HALL / A",
              "voters": 143
            }
          ],
          "148": [
            {
              "station": "HAUSSA COOPERATIVE HALL / B",
              "voters": 148
            }
          ],
          "154": [
            {
              "station": "P.S. NJENKA / C",
              "voters": 154
            }
          ],
          "200": [
            {
              "station": "C.P.C. BALI / A",
              "voters": 400
            }
          ],
          "204": [
            {
              "station": "NSAMWOCK COOPERATIVE HALL / A",
              "voters": 204
            }
          ],
          "278": [
            {
              "station": "C.S. BALI / A",
              "voters": 278
            }
          ],
          "294": [
            {
              "station": "G.N.S. / C",
              "voters": 294
            }
          ],
          "318": [
            {
              "station": "ALPHA NURSERY AND PRIMARY / A",
              "voters": 318
            }
          ],
          "327": [
            {
              "station": "G.N.S. / B",
              "voters": 327
            }
          ],
          "329": [
            {
              "station": "BALI COMMUNITY HALL / B",
              "voters": 329
            }
          ],
          "359": [
            {
              "station": "HAUSSA COOPERATIVE HALL / A",
              "voters": 359
            }
          ],
          "369": [
            {
              "station": "BALI COMMUNITY HALL / A",
              "voters": 369
            }
          ],
          "374": [
            {
              "station": "G.N.S. / A",
              "voters": 374
            }
          ],
          "383": [
            {
              "station": "GTHS SANG / A",
              "voters": 383
            }
          ],
          "389": [
            {
              "station": "P.S. NJENKA / A",
              "voters": 389
            }
          ],
          "400": [
            {
              "station": "G.S WOSING / A",
              "voters": 400
            }
          ],
          "401": [
            {
              "station": "P.S. NJENKA / B",
              "voters": 401
            }
          ],
          "407": [
            {
              "station": "INTEGRATED HEALTH CENTRE / A",
              "voters": 407
            }
          ],
          "416": [
            {
              "station": "G.S BAWOCK / A",
              "voters": 416
            }
          ],
          "LEGAL": [
            {
              "station": "TITA MUFUT CULTURAL HALL / A",
              "voters": 3339
            }
          ],
          "D￉PARTEMENT": [
            {
              "station": "TITA MUFUT CULTURAL HALL / A",
              "voters": 3339
            }
          ],
          "BUILDING.": [
            {
              "station": "TITA MUFUT CULTURAL HALL / A",
              "voters": 3339
            }
          ]
        },
        "BAMENDA II": {
          "164": [
            {
              "station": "PRESBY CH-HALL NSONGWA / A",
              "voters": 164
            }
          ],
          "174": [
            {
              "station": "G.B.H.S MBATU / A",
              "voters": 174
            }
          ],
          "211": [
            {
              "station": "C.S MBATU / A",
              "voters": 211
            }
          ],
          "286": [
            {
              "station": "VETERINARY CLINIC / F",
              "voters": 286
            }
          ],
          "287": [
            {
              "station": "VETERINARY CLINIC / D",
              "voters": 287
            }
          ],
          "291": [
            {
              "station": "VETERINARY CLINIC / E",
              "voters": 291
            }
          ],
          "314": [
            {
              "station": "C.S NJIMAFOR / A",
              "voters": 314
            }
          ],
          "317": [
            {
              "station": "VETERINARY CLINIC / G",
              "voters": 317
            }
          ],
          "346": [
            {
              "station": "G.S NSONGWA MILE 90 / B",
              "voters": 346
            }
          ],
          "361": [
            {
              "station": "G.S NSONGWA MILE 90 / C",
              "voters": 361
            }
          ],
          "376": [
            {
              "station": "G.S NSONGWA MILE 90 / A",
              "voters": 376
            }
          ],
          "380": [
            {
              "station": "CATHOLIC CHURCH NJIMAFOR / A",
              "voters": 380
            }
          ],
          "397": [
            {
              "station": "MROMASSA HALL / A",
              "voters": 397
            }
          ],
          "G.S": [
            {
              "station": "C.S. BIG MANKOM / A",
              "voters": 1309
            }
          ],
          "COUNCIL": [
            {
              "station": "G.S. CHOMBA / A",
              "voters": 2932
            }
          ],
          "LIBRARY": [
            {
              "station": "G.S. CHOMBA / A",
              "voters": 2932
            }
          ],
          "G.B.S-GMI": [
            {
              "station": "HEALTH CEN. ALABUKAM / A",
              "voters": 5506
            }
          ],
          "G.B.S": [
            {
              "station": "MINCOM/ADMINISTRATIVE GARAGE / A",
              "voters": 345
            }
          ],
          "OLD": [
            {
              "station": "MINCOM/ADMINISTRATIVE GARAGE / A",
              "voters": 1654
            }
          ],
          "TOWN": [
            {
              "station": "MINCOM/ADMINISTRATIVE GARAGE / A",
              "voters": 1654
            }
          ]
        },
        "BAMENDA III": {
          "CBC": [
            {
              "station": "C.B.C. MILE 3 / A",
              "voters": 4876
            }
          ],
          "MILE": [
            {
              "station": "C.B.C. MILE 3 / A",
              "voters": 4444
            }
          ],
          "NKWEN": [
            {
              "station": "FORMER P & T DELEGATION / B",
              "voters": 712
            }
          ],
          "FUTRU": [
            {
              "station": "INDEPENDENCE HALL ALAHLIE / A",
              "voters": 5775
            }
          ],
          "NIBUNG": [
            {
              "station": "INDEPENDENCE HALL MBELEWA / A",
              "voters": 352
            }
          ],
          "BAYELLE": [
            {
              "station": "PMI NKWEN / A",
              "voters": 5337
            }
          ],
          "GTHS": [
            {
              "station": "ST JOHN CATHOLIC SCHOOL / A",
              "voters": 280
            }
          ],
          "TEKEN": [
            {
              "station": "TEKEN HALL / A",
              "voters": 744
            }
          ],
          "HALL": [
            {
              "station": "TEKEN HALL / A",
              "voters": 744
            }
          ],
          "NTAMBESSI": [
            {
              "station": "WIMBUM WOMEN'S HALL / A",
              "voters": 3085
            }
          ]
        },
        "BAMENDA I": {
          "169": [
            {
              "station": "C.S. NTENEFOR / D",
              "voters": 169
            }
          ],
          "221": [
            {
              "station": "G.S. NTOH / C",
              "voters": 221
            }
          ],
          "250": [
            {
              "station": "E.P.F. ARMY CAMP / C",
              "voters": 250
            }
          ],
          "251": [
            {
              "station": "G.S. NTANCHE / C",
              "voters": 251
            }
          ],
          "265": [
            {
              "station": "HEALTH CENTER / B",
              "voters": 265
            }
          ],
          "268": [
            {
              "station": "P.S. BUJONG / B",
              "voters": 268
            }
          ],
          "273": [
            {
              "station": "E.P.F. ARMY CAMP / B",
              "voters": 273
            }
          ],
          "282": [
            {
              "station": "E.P.F. ARMY CAMP / E",
              "voters": 282
            }
          ],
          "297": [
            {
              "station": "C.S. NTENEFOR / E",
              "voters": 297
            }
          ],
          "316": [
            {
              "station": "C.S. NTENEFOR / C",
              "voters": 316
            }
          ],
          "326": [
            {
              "station": "G.S. NTANCHE / B",
              "voters": 326
            }
          ],
          "328": [
            {
              "station": "SIXTH MILITARY SECTOR / A",
              "voters": 656
            }
          ],
          "329": [
            {
              "station": "E.P.F. ARMY CAMP / A",
              "voters": 658
            }
          ],
          "335": [
            {
              "station": "BANGSHIE MARKET SQUARE / A",
              "voters": 335
            }
          ],
          "350": [
            {
              "station": "C.S. NTENEFOR / A",
              "voters": 350
            }
          ],
          "354": [
            {
              "station": "G.B.H.S. BAMANDAN-KWE / B",
              "voters": 354
            }
          ],
          "360": [
            {
              "station": "E.P.F. ARMY CAMP / D",
              "voters": 360
            }
          ],
          "365": [
            {
              "station": "G.S. NTANCHE / A",
              "voters": 365
            }
          ],
          "369": [
            {
              "station": "G.B.H.S. BAMANDAN-KWE / D",
              "voters": 369
            }
          ],
          "372": [
            {
              "station": "G.B.H.S. BAMANDAN-KWE / A",
              "voters": 372
            }
          ],
          "376": [
            {
              "station": "P.S. BUJONG / A",
              "voters": 376
            }
          ],
          "380": [
            {
              "station": "G.S. NTOH / A",
              "voters": 380
            }
          ],
          "384": [
            {
              "station": "HEALTH CENTER / A",
              "voters": 384
            }
          ],
          "409": [
            {
              "station": "G.S. NTOH / B",
              "voters": 409
            }
          ],
          "479": [
            {
              "station": "E.P.F. ARMY CAMP / F",
              "voters": 479
            }
          ],
          "G.S.": [
            {
              "station": "BAMENDA PRISON CANTEEN / A",
              "voters": 2901
            }
          ],
          "STATION": [
            {
              "station": "BAMENDA PRISON CANTEEN / A",
              "voters": 2901
            }
          ],
          "ABANGOH": [
            {
              "station": "G.S. ABANGOH / A",
              "voters": 1817
            }
          ],
          "FORMAL": [
            {
              "station": "REG. DEL. NATIONAL SECURITY / A",
              "voters": 535
            }
          ],
          "PWD": [
            {
              "station": "REG. DEL. NATIONAL SECURITY / A",
              "voters": 535
            }
          ],
          "BUILDING": [
            {
              "station": "REG. DEL. NATIONAL SECURITY / A",
              "voters": 535
            }
          ]
        },
        "SANTA": {
          "121": [
            {
              "station": "CO - OPT. UNION SANTA / C",
              "voters": 121
            }
          ],
          "127": [
            {
              "station": "G.S. SANTA / B",
              "voters": 127
            }
          ],
          "151": [
            {
              "station": "COMM. HALL NJONG / B",
              "voters": 151
            }
          ],
          "163": [
            {
              "station": "G.S. BANJONG / A",
              "voters": 326
            }
          ],
          "169": [
            {
              "station": "SAR/SM BALIGHAM / A",
              "voters": 169
            }
          ],
          "176": [
            {
              "station": "G.S. ACHOU / A",
              "voters": 176
            }
          ],
          "197": [
            {
              "station": "CDSTS / B",
              "voters": 197
            }
          ],
          "202": [
            {
              "station": "C.S. MBEI / C",
              "voters": 202
            }
          ],
          "217": [
            {
              "station": "G.S. NTOH MBEI / A",
              "voters": 217
            }
          ],
          "235": [
            {
              "station": "MKT. SQ. MATAJEM / A",
              "voters": 235
            }
          ],
          "239": [
            {
              "station": "MAGARET T. SCHOOL / B",
              "voters": 239
            }
          ],
          "261": [
            {
              "station": "MAGARET T. SCHOOL / A",
              "voters": 261
            }
          ],
          "267": [
            {
              "station": "P.S. SANTA / B",
              "voters": 267
            }
          ],
          "279": [
            {
              "station": "G.S.BALIGHAM / B",
              "voters": 279
            }
          ],
          "281": [
            {
              "station": "G.S. BAMOCK / A",
              "voters": 281
            }
          ],
          "282": [
            {
              "station": "SANTA URBAN HEALTH CENTER / A",
              "voters": 282
            }
          ],
          "294": [
            {
              "station": "G.S.BUCHI / A",
              "voters": 294
            }
          ],
          "299": [
            {
              "station": "G.S. NJONG / B",
              "voters": 299
            }
          ],
          "314": [
            {
              "station": "G.B.H.S. SANTA / B",
              "voters": 314
            }
          ],
          "341": [
            {
              "station": "INSPECTORATE BASIC EDUC. / A",
              "voters": 341
            }
          ],
          "345": [
            {
              "station": "G.S. NTARRAH / A",
              "voters": 345
            }
          ],
          "348": [
            {
              "station": "G.B.H.S. SANTA / A",
              "voters": 348
            }
          ],
          "350": [
            {
              "station": "CO - OPT. UNION SANTA / B",
              "voters": 350
            }
          ],
          "351": [
            {
              "station": "P.S.BALIGHAM / A",
              "voters": 351
            }
          ],
          "352": [
            {
              "station": "CO - OPT. UNION SANTA / A",
              "voters": 352
            }
          ],
          "360": [
            {
              "station": "P.S. SANTA / A",
              "voters": 360
            }
          ],
          "370": [
            {
              "station": "G.S. NJONG / A",
              "voters": 370
            }
          ],
          "380": [
            {
              "station": "CDSTS / A",
              "voters": 380
            }
          ],
          "387": [
            {
              "station": "CUSTOMARY COURT / A",
              "voters": 387
            }
          ],
          "393": [
            {
              "station": "COMM. HALL NJONG / A",
              "voters": 393
            }
          ],
          "398": [
            {
              "station": "G.S.BALIGHAM / A",
              "voters": 398
            }
          ],
          "407": [
            {
              "station": "G.S. SANTA / A",
              "voters": 407
            }
          ],
          "414": [
            {
              "station": "C.S. MBEI / B",
              "voters": 414
            }
          ],
          "418": [
            {
              "station": "COUNCIL HALL SANTA / A",
              "voters": 418
            }
          ],
          "424": [
            {
              "station": "COUNCIL HALL SANTA / B",
              "voters": 424
            }
          ],
          "430": [
            {
              "station": "C.S. MBEI / A",
              "voters": 430
            }
          ],
          "452": [
            {
              "station": "CO-OPT. STORE ASOH / A",
              "voters": 452
            }
          ],
          "CIVIL": [
            {
              "station": "C.S. ACHIALUM / A",
              "voters": 4537
            }
          ],
          "STATUS": [
            {
              "station": "C.S. ACHIALUM / A",
              "voters": 4537
            }
          ],
          "CENTER": [
            {
              "station": "C.S. ACHIALUM / A",
              "voters": 4537
            }
          ],
          "AWING": [
            {
              "station": "C.S. ACHIALUM / A",
              "voters": 4537
            }
          ],
          "BALIGHAM": [
            {
              "station": "G.S. SANTA COFFEE ESTATE / A",
              "voters": 1223
            }
          ],
          "G.S": [
            {
              "station": "G.S.ASANE AKUM / A",
              "voters": 4845
            }
          ],
          "AKUM": [
            {
              "station": "G.S.ASANE AKUM / A",
              "voters": 3622
            }
          ]
        },
        "TUBAH": {
          "103": [
            {
              "station": "G.S MALLAM / A",
              "voters": 103
            }
          ],
          "117": [
            {
              "station": "C.B.C. KWIGHE / C",
              "voters": 117
            }
          ],
          "121": [
            {
              "station": "Q.H.C. FONTA / A",
              "voters": 121
            }
          ],
          "123": [
            {
              "station": "G.S. ATUNIBA / B",
              "voters": 123
            }
          ],
          "143": [
            {
              "station": "C.S. MANDZEBANG / A",
              "voters": 143
            }
          ],
          "155": [
            {
              "station": "G.T.C. KEDJOM KETINGUH / A",
              "voters": 155
            }
          ],
          "156": [
            {
              "station": "HEALTH CENTER NTEMBANG / A",
              "voters": 156
            }
          ],
          "159": [
            {
              "station": "G.P.S. NTEMBANG / A",
              "voters": 159
            }
          ],
          "160": [
            {
              "station": "MALLAM HALL / A",
              "voters": 320
            }
          ],
          "164": [
            {
              "station": "COMM. HALL NTEHNLOH / A",
              "voters": 164
            }
          ],
          "166": [
            {
              "station": "MUTOH LIGHI SQUARE / A",
              "voters": 166
            }
          ],
          "174": [
            {
              "station": "G.S AKOH / A",
              "voters": 174
            }
          ],
          "176": [
            {
              "station": "P.S. TUBAH / J",
              "voters": 176
            }
          ],
          "199": [
            {
              "station": "G.S. MACHA / B",
              "voters": 199
            }
          ],
          "201": [
            {
              "station": "G.S. BABANKI TUNGO / A",
              "voters": 201
            }
          ],
          "213": [
            {
              "station": "G.S. NCHOKEN / A",
              "voters": 213
            }
          ],
          "214": [
            {
              "station": "C.S. ST. BERNARD / A",
              "voters": 214
            }
          ],
          "222": [
            {
              "station": "G.S. KETIEH / A",
              "voters": 222
            }
          ],
          "233": [
            {
              "station": "G.P.S. JOROBURO / A",
              "voters": 233
            }
          ],
          "243": [
            {
              "station": "FARM DEMONSTRATION CEN. / B",
              "voters": 243
            }
          ],
          "245": [
            {
              "station": "HEALTH CEN. BAMBUI / C",
              "voters": 245
            }
          ],
          "247": [
            {
              "station": "R.C.A. HALL / A",
              "voters": 247
            }
          ],
          "273": [
            {
              "station": "G.S. ABOBONG / B",
              "voters": 273
            }
          ],
          "276": [
            {
              "station": "OLD MARKET BUH FENGAM / A",
              "voters": 276
            }
          ],
          "278": [
            {
              "station": "G.S. ABOBONG / A",
              "voters": 556
            }
          ],
          "283": [
            {
              "station": "COMMUNITY HALL BARFORKUM / A",
              "voters": 283
            }
          ],
          "288": [
            {
              "station": "C.H.S. BAMBUI / C",
              "voters": 288
            }
          ],
          "291": [
            {
              "station": "FARM DEMONSTRATION CEN. / A",
              "voters": 291
            }
          ],
          "294": [
            {
              "station": "G.S. LIH / B",
              "voters": 294
            }
          ],
          "298": [
            {
              "station": "G.S. ATUNIBA / A",
              "voters": 298
            }
          ],
          "300": [
            {
              "station": "C.B.C. KWIGHE / B",
              "voters": 300
            }
          ],
          "312": [
            {
              "station": "HEALTH CEN. BAMBUI / A",
              "voters": 624
            }
          ],
          "316": [
            {
              "station": "G.S. NTIGI / A",
              "voters": 316
            }
          ],
          "319": [
            {
              "station": "G.P.S. TONGUH / A",
              "voters": 319
            }
          ],
          "323": [
            {
              "station": "C.H.S. BAMBUI / B",
              "voters": 323
            }
          ],
          "324": [
            {
              "station": "HEALTH CEN. K. KETINGUH / A",
              "voters": 324
            }
          ],
          "332": [
            {
              "station": "P.S. TUBAH / E",
              "voters": 664
            }
          ],
          "333": [
            {
              "station": "C.H.S. BAMBUI / A",
              "voters": 666
            }
          ],
          "337": [
            {
              "station": "P.S. TUBAH / G",
              "voters": 337
            }
          ],
          "342": [
            {
              "station": "P.S. TUBAH / H",
              "voters": 342
            }
          ],
          "356": [
            {
              "station": "CREDIT UNION H. ACHI / A",
              "voters": 356
            }
          ],
          "358": [
            {
              "station": "NIBIE COOP. HALL / A",
              "voters": 716
            }
          ],
          "359": [
            {
              "station": "HEALTH CEN. BAMBUI / B",
              "voters": 359
            }
          ],
          "360": [
            {
              "station": "G.Y.C. BAMBUI / B",
              "voters": 360
            }
          ],
          "362": [
            {
              "station": "P.S. TUBAH / F",
              "voters": 362
            }
          ],
          "364": [
            {
              "station": "P.S. TUBAH / D",
              "voters": 364
            }
          ],
          "367": [
            {
              "station": "G.Y.C. BAMBUI / A",
              "voters": 734
            }
          ],
          "372": [
            {
              "station": "P.S. TUBAH / C",
              "voters": 372
            }
          ],
          "373": [
            {
              "station": "G.Y.C. BAMBUI / D",
              "voters": 373
            }
          ],
          "376": [
            {
              "station": "G.S. FINGE / A",
              "voters": 376
            }
          ],
          "381": [
            {
              "station": "VETERINARY POST SABGA / A",
              "voters": 381
            }
          ],
          "382": [
            {
              "station": "P.S. TUBAH / A",
              "voters": 382
            }
          ],
          "383": [
            {
              "station": "COMM. HALL NTEHNTUH / A",
              "voters": 383
            }
          ],
          "384": [
            {
              "station": "C.B.C. CHUKU / A",
              "voters": 384
            }
          ],
          "385": [
            {
              "station": "G.S. BIG BABANKI / A",
              "voters": 770
            }
          ],
          "387": [
            {
              "station": "G.B.P.S. TUBAH / A",
              "voters": 387
            }
          ],
          "390": [
            {
              "station": "COMMUNITY HALL BUELAMFOR / A",
              "voters": 780
            }
          ],
          "394": [
            {
              "station": "NIBIE COOP. HALL / C",
              "voters": 394
            }
          ],
          "398": [
            {
              "station": "G.S. MACHA / A",
              "voters": 398
            }
          ],
          "402": [
            {
              "station": "C.B.C. CHUKU / B",
              "voters": 402
            }
          ],
          "426": [
            {
              "station": "PRES. CHURCH FUPHENSE / A",
              "voters": 426
            }
          ],
          "CCAST": [
            {
              "station": "AGAM CHECK POINT BAR / A",
              "voters": 2005
            }
          ],
          "HALL": [
            {
              "station": "AGAM CHECK POINT BAR / A",
              "voters": 11075
            }
          ],
          "BAMBILI": [
            {
              "station": "AGAM CHECK POINT BAR / A",
              "voters": 11075
            }
          ],
          "ENSAB": [
            {
              "station": "ENSAB HALL / A",
              "voters": 9070
            }
          ],
          "GBPS": [
            {
              "station": "G.B.P.S. BAMBILI / A",
              "voters": 301
            }
          ],
          "TUBAH": [
            {
              "station": "G.B.P.S. BAMBILI / A",
              "voters": 301
            }
          ],
          "BAMBUI": [
            {
              "station": "G.B.P.S. BAMBILI / A",
              "voters": 301
            }
          ]
        }
      },
      "BOYO": {
        "BELO": {
          "128": [
            {
              "station": "C.S. NTUM / A",
              "voters": 128
            }
          ],
          "138": [
            {
              "station": "GOYT HEALTH CENTER TUMUKU / C",
              "voters": 138
            }
          ],
          "158": [
            {
              "station": "MBINGO MARKET SQUARE / B",
              "voters": 158
            }
          ],
          "176": [
            {
              "station": "C.S. SHO / B",
              "voters": 176
            }
          ],
          "180": [
            {
              "station": "G.S. NGEMSIBO / A",
              "voters": 180
            }
          ],
          "193": [
            {
              "station": "HEALTH CENTER MEJANG / A",
              "voters": 193
            }
          ],
          "204": [
            {
              "station": "C.B.C. MUGHOM / A",
              "voters": 204
            }
          ],
          "210": [
            {
              "station": "G.S. MEJUNG / A",
              "voters": 210
            }
          ],
          "228": [
            {
              "station": "G.S. KITCHU / B",
              "voters": 228
            }
          ],
          "242": [
            {
              "station": "G.S. KITCHU / A",
              "voters": 242
            }
          ],
          "247": [
            {
              "station": "C.S. MBESA / B",
              "voters": 494
            }
          ],
          "248": [
            {
              "station": "C.S. MBESA / A",
              "voters": 248
            }
          ],
          "249": [
            {
              "station": "B.C.H.S. NJINIKEJEM / B",
              "voters": 249
            }
          ],
          "261": [
            {
              "station": "G.H.S. MBESA / B",
              "voters": 261
            }
          ],
          "266": [
            {
              "station": "G.S. SHO / A",
              "voters": 266
            }
          ],
          "272": [
            {
              "station": "B.C.H.S. NJINIKEJEM / A",
              "voters": 272
            }
          ],
          "276": [
            {
              "station": "G.H.S. MBESA / A",
              "voters": 276
            }
          ],
          "279": [
            {
              "station": "ISLAMIC PRIMARY SCHOOL  NDAWARA / A",
              "voters": 279
            }
          ],
          "281": [
            {
              "station": "COMMUNITY HALL TWALATWAL / A",
              "voters": 281
            }
          ],
          "305": [
            {
              "station": "CO-OPERATIVE STORE NJINIKEJEM / B",
              "voters": 305
            }
          ],
          "312": [
            {
              "station": "C.S. NJINIKEJEM / B",
              "voters": 312
            }
          ],
          "319": [
            {
              "station": "C.S. NJINIKEJEM / A",
              "voters": 319
            }
          ],
          "321": [
            {
              "station": "GOVT HEALTH CENTER TUMUKU / B",
              "voters": 321
            }
          ],
          "323": [
            {
              "station": "CO-OPERATIVE. STORE MBESA / B",
              "voters": 323
            }
          ],
          "334": [
            {
              "station": "CO-OPERATIVE. STORE MBESA / A",
              "voters": 334
            }
          ],
          "336": [
            {
              "station": "GOVT HEALTH CENTER TUMUKU / A",
              "voters": 336
            }
          ],
          "346": [
            {
              "station": "CO-OPERATIVE STORE NJINIKEJEM / A",
              "voters": 346
            }
          ],
          "349": [
            {
              "station": "C.S. SHO / A",
              "voters": 349
            }
          ],
          "350": [
            {
              "station": "C.B.C. MBINGO II / B",
              "voters": 350
            }
          ],
          "354": [
            {
              "station": "C.B.C. JUABUM / A",
              "voters": 354
            }
          ],
          "363": [
            {
              "station": "MBINGO MARKET SQUARE / A",
              "voters": 363
            }
          ],
          "366": [
            {
              "station": "G.S. SOWI / A",
              "voters": 366
            }
          ],
          "379": [
            {
              "station": "C.B.C. MBINGO II / A",
              "voters": 379
            }
          ],
          "428": [
            {
              "station": "HEALTH CENTER NDAWARA / A",
              "voters": 428
            }
          ],
          "Market": [
            {
              "station": "C.B.C. ANYAJUA / A",
              "voters": 1605
            }
          ],
          "Stores": [
            {
              "station": "C.B.C. ANYAJUA / A",
              "voters": 1605
            }
          ],
          "Ndawara": [
            {
              "station": "C.S. AFUA / A",
              "voters": 404
            }
          ],
          "Islamic": [
            {
              "station": "C.S. AFUA / A",
              "voters": 404
            }
          ],
          "Primary": [
            {
              "station": "C.S. AFUA / A",
              "voters": 404
            }
          ],
          "School": [
            {
              "station": "C.S. AFUA / A",
              "voters": 404
            }
          ],
          "Community": [
            {
              "station": "C.S. ASUH / A",
              "voters": 1928
            }
          ],
          "radio": [
            {
              "station": "C.S. ASUH / A",
              "voters": 1928
            }
          ],
          "Building": [
            {
              "station": "C.S. ASUH / A",
              "voters": 1928
            }
          ],
          "Potatoes": [
            {
              "station": "COMM. HALL ANJANG / A",
              "voters": 3229
            }
          ],
          "Cooperative": [
            {
              "station": "COMM. HALL ANJANG / A",
              "voters": 3229
            }
          ],
          "Belo": [
            {
              "station": "G.S. ABOH / A",
              "voters": 3354
            }
          ],
          "Council": [
            {
              "station": "G.S. ABOH / A",
              "voters": 3031
            }
          ],
          "Hall": [
            {
              "station": "G.S. ABOH / A",
              "voters": 7338
            }
          ],
          "BADU": [
            {
              "station": "G.S. ACHA / A",
              "voters": 2683
            }
          ]
        },
        "FONKUKA": {
          "PNE": [
            {
              "station": "G.S. BUABUA / A",
              "voters": 1682
            }
          ],
          "Fonfunka": [
            {
              "station": "G.S. BUABUA / A",
              "voters": 1682
            }
          ],
          "Council": [
            {
              "station": "G.S. FONFUKA / A",
              "voters": 3382
            }
          ],
          "Market": [
            {
              "station": "G.S. FONFUKA / A",
              "voters": 3382
            }
          ],
          "Building": [
            {
              "station": "G.S. FONFUKA / A",
              "voters": 3382
            }
          ],
          "Agric.": [
            {
              "station": "G.S. FUSEJOU / A",
              "voters": 1967
            }
          ],
          "Post": [
            {
              "station": "G.S. FUSEJOU / A",
              "voters": 1967
            }
          ],
          "Fonfuka": [
            {
              "station": "G.S. FUSEJOU / A",
              "voters": 1967
            }
          ],
          "Mungong": [
            {
              "station": "G.S. MUNGONG / A",
              "voters": 466
            }
          ]
        },
        "FUNDONG": {
          "112": [
            {
              "station": "G.S. MUAL / A",
              "voters": 112
            }
          ],
          "135": [
            {
              "station": "G.S. MBENGKAS / A",
              "voters": 135
            }
          ],
          "141": [
            {
              "station": "C.S. BOYUI / A",
              "voters": 141
            }
          ],
          "145": [
            {
              "station": "G.S. ISAIBI / A",
              "voters": 145
            }
          ],
          "148": [
            {
              "station": "P.S. IKUJUJA / A",
              "voters": 148
            }
          ],
          "151": [
            {
              "station": "COM. HALL ABAIAKANG / A",
              "voters": 151
            }
          ],
          "160": [
            {
              "station": "G.S. LAIKOM / A",
              "voters": 160
            }
          ],
          "166": [
            {
              "station": "G.S. MBONOKISSU / A",
              "voters": 166
            }
          ],
          "198": [
            {
              "station": "COMMUNITY HALL YUWI / A",
              "voters": 198
            }
          ],
          "243": [
            {
              "station": "GSS FUJUA / A",
              "voters": 243
            }
          ],
          "278": [
            {
              "station": "C.B.C. FUJUA / A",
              "voters": 278
            }
          ],
          "293": [
            {
              "station": "G.S. ILUNG / A",
              "voters": 293
            }
          ],
          "311": [
            {
              "station": "G.S. MBOH / A",
              "voters": 311
            }
          ],
          "321": [
            {
              "station": "G.S. MBAM / B",
              "voters": 321
            }
          ],
          "335": [
            {
              "station": "G.S.S. MELI / A",
              "voters": 670
            }
          ],
          "340": [
            {
              "station": "G.S. NOWAH ALOIN / A",
              "voters": 340
            }
          ],
          "350": [
            {
              "station": "G.S. MELI / A",
              "voters": 350
            }
          ],
          "361": [
            {
              "station": "G.S. MBAM / A",
              "voters": 361
            }
          ],
          "365": [
            {
              "station": "G.P.S. MBISSI / A",
              "voters": 365
            }
          ],
          "373": [
            {
              "station": "COMMUNITY HALL MUTEFF / A",
              "voters": 373
            }
          ],
          "386": [
            {
              "station": "COMMUNITY HALL NTEHGUM / A",
              "voters": 386
            }
          ],
          "387": [
            {
              "station": "P.S. FUNDONG / B",
              "voters": 387
            }
          ],
          "394": [
            {
              "station": "P.S. FUNDONG / A",
              "voters": 394
            }
          ],
          "395": [
            {
              "station": "G.P.S. NOWAINKUMA / A",
              "voters": 395
            }
          ],
          "396": [
            {
              "station": "COMM. HALL FUNDONG VILLAGE / A",
              "voters": 396
            }
          ],
          "406": [
            {
              "station": "C.S. MUTEFF / A",
              "voters": 406
            }
          ],
          "410": [
            {
              "station": "G.S.KUMTEM / A",
              "voters": 410
            }
          ],
          "422": [
            {
              "station": "G.S. MENTANG / A",
              "voters": 422
            }
          ],
          "GTHS": [
            {
              "station": "CO-OPERATIVE STORE ALIM / A",
              "voters": 1296
            }
          ],
          "Fundong": [
            {
              "station": "CO-OPERATIVE STORE ALIM / A",
              "voters": 3858
            }
          ],
          "GNS": [
            {
              "station": "COMMUNITY HALL ABUH-IKU / A",
              "voters": 2588
            }
          ],
          "Lainilain": [
            {
              "station": "COMMUNITY HALL ABUH-IKU / A",
              "voters": 6362
            }
          ],
          "Community": [
            {
              "station": "COMMUNITY HALL ACHANGNE / A",
              "voters": 3774
            }
          ],
          "Hall": [
            {
              "station": "COMMUNITY HALL ACHANGNE / A",
              "voters": 3774
            }
          ],
          "GBNS": [
            {
              "station": "G.B.N.S FUNDONG / A",
              "voters": 811
            }
          ]
        }
      },
      "BUI": {
        "ELAK": {
          "ELAK": [
            {
              "station": "CHAK COMMUNITY HALL / A",
              "voters": 421
            }
          ],
          "COMMUNITY": [
            {
              "station": "CHAK COMMUNITY HALL / A",
              "voters": 421
            }
          ],
          "HALL": [
            {
              "station": "CHAK COMMUNITY HALL / A",
              "voters": 421
            }
          ]
        },
        "JAKIRI": {
          "112": [
            {
              "station": "TAAVIRER SAMBA HOUSE / A",
              "voters": 112
            }
          ],
          "119": [
            {
              "station": "C.S. NKARKUI / A",
              "voters": 119
            }
          ],
          "125": [
            {
              "station": "ROONDOP SQUARE / A",
              "voters": 125
            }
          ],
          "127": [
            {
              "station": "G.S. KIMAR / A",
              "voters": 127
            }
          ],
          "129": [
            {
              "station": "G.S. NTSEIMBANG / A",
              "voters": 258
            }
          ],
          "134": [
            {
              "station": "SAR / SM SOP / A",
              "voters": 134
            }
          ],
          "143": [
            {
              "station": "NKAR CREDIT UNION / A",
              "voters": 143
            }
          ],
          "160": [
            {
              "station": "G.S. NKARTSEN / A",
              "voters": 160
            }
          ],
          "165": [
            {
              "station": "G.S. NDZEREM - NYAM / A",
              "voters": 165
            }
          ],
          "174": [
            {
              "station": "G.S. TARON. / A",
              "voters": 174
            }
          ],
          "180": [
            {
              "station": "NTOTTI MARKET SQUARE / A",
              "voters": 180
            }
          ],
          "187": [
            {
              "station": "I.P.S. NTUR / A",
              "voters": 187
            }
          ],
          "196": [
            {
              "station": "C.S. ROONTONG / A",
              "voters": 196
            }
          ],
          "201": [
            {
              "station": "I.P.S. VEKOVI. / A",
              "voters": 201
            }
          ],
          "204": [
            {
              "station": "G.S. MBITEEI / A",
              "voters": 204
            }
          ],
          "214": [
            {
              "station": "C.S. SOP / A",
              "voters": 214
            }
          ],
          "217": [
            {
              "station": "NOI COOPERATIVE / A",
              "voters": 217
            }
          ],
          "222": [
            {
              "station": "NOI COOPERATIVE / B",
              "voters": 222
            }
          ],
          "235": [
            {
              "station": "SANGHERI VEKOVI / A",
              "voters": 235
            }
          ],
          "243": [
            {
              "station": "VEKOVI HEALTH CENTRE / A",
              "voters": 243
            }
          ],
          "249": [
            {
              "station": "SOP HEALTH CENTRE / A",
              "voters": 249
            }
          ],
          "269": [
            {
              "station": "G.S. NKAR / A",
              "voters": 269
            }
          ],
          "272": [
            {
              "station": "C.B.C. KAM. / A",
              "voters": 272
            }
          ],
          "285": [
            {
              "station": "NYAN MARKET SQUARE / A",
              "voters": 285
            }
          ],
          "286": [
            {
              "station": "C.S. RAN. / A",
              "voters": 286
            }
          ],
          "290": [
            {
              "station": "I.P.S. NTUNIR / A",
              "voters": 290
            }
          ],
          "341": [
            {
              "station": "NKAR MARKET / A",
              "voters": 341
            }
          ],
          "349": [
            {
              "station": "SHIY COOPERATIVE / A",
              "voters": 349
            }
          ],
          "353": [
            {
              "station": "VEKOVI COOPERATIVE / A",
              "voters": 353
            }
          ],
          "354": [
            {
              "station": "G.S. WAINAMAH / B",
              "voters": 354
            }
          ],
          "356": [
            {
              "station": "WASI COOPERATIVE / A",
              "voters": 356
            }
          ],
          "365": [
            {
              "station": "G.S. TAN / A",
              "voters": 365
            }
          ],
          "367": [
            {
              "station": "G.S. WAINAMAH / A",
              "voters": 367
            }
          ],
          "373": [
            {
              "station": "SAR / SM JAKIRI. / A",
              "voters": 373
            }
          ],
          "377": [
            {
              "station": "WVEM COOPERATIVE / A",
              "voters": 377
            }
          ],
          "386": [
            {
              "station": "WAINKAR COOPERATIVE / A",
              "voters": 386
            }
          ],
          "427": [
            {
              "station": "G.S. YER / A",
              "voters": 427
            }
          ],
          "G.B.P.S": [
            {
              "station": "KIBANG MARKET SQUARE / A",
              "voters": 66
            }
          ],
          "SABONGARI": [
            {
              "station": "KIBANG MARKET SQUARE / A",
              "voters": 66
            }
          ]
        },
        "KUMBO": {
          "G.B.H.S.": [
            {
              "station": "C.B.C BAMDZENG / A",
              "voters": 4023
            }
          ],
          "KUMBO": [
            {
              "station": "C.B.C BAMDZENG / A",
              "voters": 4023
            }
          ],
          "GPS": [
            {
              "station": "G.S. BAMNGAM / A",
              "voters": 253
            }
          ],
          "TOBIN": [
            {
              "station": "G.S. BAMNGAM / A",
              "voters": 253
            }
          ],
          "DELEGATION": [
            {
              "station": "G.S. KAI / A",
              "voters": 3100
            }
          ],
          "SOCIAL": [
            {
              "station": "G.S. KAI / A",
              "voters": 521
            }
          ],
          "AFFAIRS": [
            {
              "station": "G.S. KAI / A",
              "voters": 3100
            }
          ],
          "YOUTH": [
            {
              "station": "SALAMA HOUSE TAKUM / A",
              "voters": 2579
            }
          ]
        },
        "MBIAME": {
          "217": [
            {
              "station": "G.S TANYAR / A",
              "voters": 217
            }
          ],
          "293": [
            {
              "station": "I.P.S NJANAWA / A",
              "voters": 293
            }
          ],
          "MBIAME": [
            {
              "station": "AGRIC POST MBONSO / A",
              "voters": 7294
            }
          ],
          "COUNCIL": [
            {
              "station": "AGRIC POST MBONSO / A",
              "voters": 4289
            }
          ],
          "HALL": [
            {
              "station": "AGRIC POST MBONSO / A",
              "voters": 7294
            }
          ],
          "COOPERATIVE": [
            {
              "station": "G.S NJANAWA / A",
              "voters": 3005
            }
          ]
        },
        "NKOR": {
          "GOVERNMENT": [
            {
              "station": "G.S. BAMTI / A",
              "voters": 6446
            }
          ],
          "SCHOOL": [
            {
              "station": "G.S. BAMTI / A",
              "voters": 6446
            }
          ],
          "NYALIN": [
            {
              "station": "G.S. BAMTI / A",
              "voters": 6446
            }
          ],
          "NKOR": [
            {
              "station": "G.S. DOM / A",
              "voters": 2383
            }
          ],
          "COMMUNITY": [
            {
              "station": "G.S. DOM / A",
              "voters": 2383
            }
          ],
          "HALL": [
            {
              "station": "G.S. DOM / A",
              "voters": 2383
            }
          ]
        },
        "NKUM": {
          "G.S": [
            {
              "station": "G.S. BANTEN / A",
              "voters": 10168
            }
          ],
          "TATUM": [
            {
              "station": "G.S. BANTEN / A",
              "voters": 10168
            }
          ]
        },
        "WUM": {
          "159": [
            {
              "station": "ZONGETIA HALL / A",
              "voters": 159
            }
          ],
          "160": [
            {
              "station": "GTHS JUNCTION / B",
              "voters": 160
            }
          ],
          "169": [
            {
              "station": "G. S. WANANGWEN / A",
              "voters": 169
            }
          ],
          "173": [
            {
              "station": "GOYT NURSERY SCHOOL / B",
              "voters": 173
            }
          ],
          "180": [
            {
              "station": "G. S. NGOH WANANGWEN / A",
              "voters": 180
            }
          ],
          "208": [
            {
              "station": "HAUSA COMM. HALL / B",
              "voters": 208
            }
          ],
          "225": [
            {
              "station": "WATUO VILLAGE HALL / A",
              "voters": 225
            }
          ],
          "234": [
            {
              "station": "ZONGEKWO HALL / B",
              "voters": 234
            }
          ],
          "250": [
            {
              "station": "MEMBERS CLUB 64 / A",
              "voters": 250
            }
          ],
          "280": [
            {
              "station": "CATHOLIC PRIMARY SCHOOL HOLY  TRINITY WUM / A",
              "voters": 280
            }
          ],
          "294": [
            {
              "station": "ZONGEKWO HALL / A",
              "voters": 294
            }
          ],
          "297": [
            {
              "station": "G. S ZONGEFUH / A",
              "voters": 594
            }
          ],
          "308": [
            {
              "station": "HAUSA COMM. HALL / A",
              "voters": 308
            }
          ],
          "310": [
            {
              "station": "DEL. BASIC EDUCATION / A",
              "voters": 310
            }
          ],
          "327": [
            {
              "station": "GOYT NURSERY SCHOOL / A",
              "voters": 327
            }
          ],
          "338": [
            {
              "station": "FORMER DOM. SCIENCE CENTRE / A",
              "voters": 338
            }
          ],
          "353": [
            {
              "station": "WAAJUNG HALL / A",
              "voters": 353
            }
          ],
          "362": [
            {
              "station": "GTHS JUNCTION / A",
              "voters": 362
            }
          ],
          "KESU": [
            {
              "station": "AKU COMMUNITY HALL / A",
              "voters": 2582
            }
          ],
          "COURT": [
            {
              "station": "AKU COMMUNITY HALL / A",
              "voters": 2582
            }
          ],
          "HALL": [
            {
              "station": "AKU COMMUNITY HALL / A",
              "voters": 2582
            }
          ],
          "GBHS": [
            {
              "station": "ATUE COMMUNITY HALL / A",
              "voters": 1666
            }
          ],
          "WUM": [
            {
              "station": "ATUE COMMUNITY HALL / A",
              "voters": 5651
            }
          ],
          "GRANDSTAND": [
            {
              "station": "CHEREGHA HALL / A",
              "voters": 1536
            }
          ],
          "G.S": [
            {
              "station": "G. S AGULLI / A",
              "voters": 1597
            }
          ],
          "BANGWE": [
            {
              "station": "G. S AGULLI / A",
              "voters": 600
            }
          ],
          "GNPS": [
            {
              "station": "G. S. MBINJAM / A",
              "voters": 2449
            }
          ]
        }
      },
      "MENCHUM": {
        "FURU AWA": {
          "LUBU": [
            {
              "station": "G. S. LUBU / A",
              "voters": 493
            }
          ],
          "G.S": [
            {
              "station": "G.S. AKUM / A",
              "voters": 3931
            }
          ],
          "FURU-AWA": [
            {
              "station": "G.S. AKUM / A",
              "voters": 3438
            }
          ],
          "CATHOLIC": [
            {
              "station": "P.C. BADJI / A",
              "voters": 985
            }
          ],
          "CHURCH": [
            {
              "station": "P.C. BADJI / A",
              "voters": 985
            }
          ],
          "NSER": [
            {
              "station": "P.C. BADJI / A",
              "voters": 985
            }
          ]
        },
        "ZHOA": {
          "ZHOA": [
            {
              "station": "ABAR HEALTH CENTRE / A",
              "voters": 318
            }
          ],
          "COMMUNITY": [
            {
              "station": "ABAR HEALTH CENTRE / A",
              "voters": 318
            }
          ],
          "HALL": [
            {
              "station": "ABAR HEALTH CENTRE / A",
              "voters": 318
            }
          ],
          "MMEN": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "MARKET": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "SQAURE": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "(MCDA": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "multipurpose": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "hall": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ],
          "Bafmeng)": [
            {
              "station": "ALLOH MARKET SQUARE / A",
              "voters": 4760
            }
          ]
        }
      }
    }
  }
};