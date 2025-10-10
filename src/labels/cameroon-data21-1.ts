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
  "NORD-OUEST": {
    name: { en: "NORTH-WEST", fr: "NORD-OUEST" },
    divisions: {
      "DONGA-MANTUNG": {
        "AKO": {
          "ABUENSHE UP VILLAGE HALL / A": [
            {
              station: "Abuenshie",
              voters: 776
            },
          ],
          "G.H.S. AKO / A": [
            {
              station: "261",
              voters: 261
            },
          ],
          "G.S. ABAFUM / A": [
            {
              station: "G.S",
              voters: 7177
            },
            {
              station: "Buku",
              voters: 1275
            },
          ],
          "G.S. ABAKA / A": [
            {
              station: "Ako",
              voters: 5126
            },
          ],
          "G.S. AKO 2 / A": [
            {
              station: "360",
              voters: 360
            },
          ],
          "G.S. JAFFOR NDOOH / A": [
            {
              station: "133",
              voters: 133
            },
          ],
          "G.S. JEVI / A": [
            {
              station: "140",
              voters: 140
            },
          ],
          "G.S. JEYU / A": [
            {
              station: "101",
              voters: 101
            },
          ],
          "G.S. NDAKA / A": [
            {
              station: "187",
              voters: 187
            },
          ],
          "G.S. NZIBIE / A": [
            {
              station: "356",
              voters: 356
            },
          ],
          "G.S. SABONGIDA / A": [
            {
              station: "172",
              voters: 172
            },
          ],
          "G.S. ZEMBEABURU / A": [
            {
              station: "239",
              voters: 239
            },
          ],
          "GWMT. SCHOOL AKWESSE / A": [
            {
              station: "114",
              voters: 114
            },
          ],
          "JAFFOR FRA VILLAGE HALL / A": [
            {
              station: "145",
              voters: 145
            },
          ],
          "JEVI COUNCIL HALL / A": [
            {
              station: "217",
              voters: 217
            },
          ],
          "MBANDE VILLAGE HALL / A": [
            {
              station: "294",
              voters: 294
            },
          ],
          "MBANDE VILLAGE HALL / B": [
            {
              station: "288",
              voters: 288
            },
          ],
          "MBIRIBUA VILLAGE HALL / A": [
            {
              station: "178",
              voters: 178
            },
          ],
          "MBOI VILLAGE HALL / A": [
            {
              station: "123",
              voters: 123
            },
          ],
          "MPENCHERE COUNCIL HALL / A": [
            {
              station: "144",
              voters: 144
            },
          ],
          "NGATHO ANDE 2 SQUARE / A": [
            {
              station: "182",
              voters: 182
            },
          ],
          "ZOCHE VILLAGE HALL / A": [
            {
              station: "107",
              voters: 107
            },
          ],
        },
        "MISAJE": {
          "C.B.C NJIPTOP / A": [
            {
              station: "322",
              voters: 322
            },
          ],
          "COM. HALL NJIYUNG / A": [
            {
              station: "139",
              voters: 139
            },
          ],
          "G.S MBAWRONG / A": [
            {
              station: "Ntumbaw",
              voters: 1837
            },
          ],
          "G.S. MBENG-TAKU / A": [
            {
              station: "276",
              voters: 276
            },
          ],
          "G.S. NJIFOR / A": [
            {
              station: "314",
              voters: 314
            },
          ],
          "G.S. NJIFOR / B": [
            {
              station: "221",
              voters: 221
            },
          ],
          "G.S. NJINGARUM / A": [
            {
              station: "161",
              voters: 161
            },
          ],
          "G.S. NJIPLVU / A": [
            {
              station: "140",
              voters: 280
            },
          ],
          "G.S. NSAM / A": [
            {
              station: "136",
              voters: 136
            },
          ],
          "G.S. NTISAW / A": [
            {
              station: "277",
              voters: 277
            },
          ],
          "G.S. NTISAW / B": [
            {
              station: "250",
              voters: 250
            },
          ],
          "G.S. TENGTENG / A": [
            {
              station: "127",
              voters: 127
            },
          ],
          "JIRT COOPERATIVE / A": [
            {
              station: "Ndu",
              voters: 5630
            },
            {
              station: "Grandstand",
              voters: 5630
            },
          ],
          "MBIYEH CUSTOMARY COURT / A": [
            {
              station: "G.S",
              voters: 5083
            },
            {
              station: "Talla",
              voters: 3246
            },
          ],
          "MBONGONG MKT SQUARE / A": [
            {
              station: "269",
              voters: 269
            },
          ],
          "MBONGONG MKT SQUARE / B": [
            {
              station: "230",
              voters: 230
            },
          ],
          "NSHI-O-DOH C.B.C. SCH / A": [
            {
              station: "349",
              voters: 349
            },
          ],
          "NSHI-O-DOH C.B.C. SCH / B": [
            {
              station: "300",
              voters: 300
            },
          ],
          "NTAMNRUH MARKET SQ. / A": [
            {
              station: "390",
              voters: 390
            },
          ],
          "NTUNGE COOPERATIVE / A": [
            {
              station: "282",
              voters: 282
            },
          ],
          "P.S. KAKAR / A": [
            {
              station: "185",
              voters: 185
            },
          ],
        },
        "NKAMBE": {
          "ARMY CAMP / A": [
            {
              station: "High",
              voters: 1523
            },
            {
              station: "Ways",
              voters: 1523
            },
            {
              station: "Nkambe",
              voters: 4311
            },
          ],
          "BINKA COOPERATIVE STORE / A": [
            {
              station: "G.S",
              voters: 1969
            },
            {
              station: "Binka",
              voters: 1969
            },
          ],
          "BINSHUA WOMEN'S HALL / A": [
            {
              station: "G.B.S",
              voters: 1308
            },
          ],
          "BINTALA SQUARE / A": [
            {
              station: "231",
              voters: 231
            },
          ],
          "BONYAP CULTURAL HALL / A": [
            {
              station: "362",
              voters: 362
            },
          ],
          "C.B.C WAT / A": [
            {
              station: "139",
              voters: 139
            },
          ],
          "C.S MBAA / A": [
            {
              station: "131",
              voters: 131
            },
          ],
          "C.S MBIRBOH / A": [
            {
              station: "288",
              voters: 288
            },
          ],
          "C.S. KIEKU / A": [
            {
              station: "321",
              voters: 321
            },
          ],
          "C.S. KIEKU / B": [
            {
              station: "196",
              voters: 392
            },
          ],
          "CATHOLIC MISSION MBANTU / A": [
            {
              station: "151",
              voters: 151
            },
          ],
          "CENTRAL BAR / A": [
            {
              station: "329",
              voters: 658
            },
          ],
          "CNPS NKAMBE / A": [
            {
              station: "350",
              voters: 350
            },
          ],
          "CNPS NKAMBE / B": [
            {
              station: "300",
              voters: 300
            },
          ],
          "CNPS NKAMBE / C": [
            {
              station: "109",
              voters: 109
            },
          ],
          "COMM. HALL KINDFU / A": [
            {
              station: "147",
              voters: 147
            },
          ],
          "COMM. HALL MBANKA / A": [
            {
              station: "229",
              voters: 229
            },
          ],
          "COMMERCE / A": [
            {
              station: "361",
              voters: 361
            },
          ],
          "COUNCIL CHAMBERS / A": [
            {
              station: "302",
              voters: 302
            },
          ],
          "FUNCHI MARKET SQUARE / A": [
            {
              station: "120",
              voters: 120
            },
          ],
          "G.S BINKA / A": [
            {
              station: "292",
              voters: 584
            },
          ],
          "G.S MBAKA / A": [
            {
              station: "198",
              voters: 198
            },
          ],
          "G.S MBIBU / A": [
            {
              station: "119",
              voters: 119
            },
          ],
          "G.S MBIRBOH / A": [
            {
              station: "289",
              voters: 289
            },
          ],
          "G.S MOH / A": [
            {
              station: "433",
              voters: 433
            },
          ],
          "G.S NJEMAH / A": [
            {
              station: "304",
              voters: 608
            },
          ],
          "G.S TUKU / A": [
            {
              station: "208",
              voters: 208
            },
          ],
          "G.S. BINJENG / A": [
            {
              station: "G.S.S",
              voters: 837
            },
            {
              station: "Bih",
              voters: 837
            },
          ],
          "G.S. BONDU / A": [
            {
              station: "G.H.S",
              voters: 2416
            },
            {
              station: "Tabenken",
              voters: 2416
            },
          ],
          "G.S. KONCHEP / A": [
            {
              station: "G.P.S",
              voters: 1480
            },
          ],
          "G.S. MBABI / A": [
            {
              station: "269",
              voters: 269
            },
          ],
          "G.S. NGOTONG / A": [
            {
              station: "217",
              voters: 217
            },
          ],
          "G.S. WAT / A": [
            {
              station: "213",
              voters: 213
            },
          ],
          "G.T.T.C NKAMBE / A": [
            {
              station: "137",
              voters: 137
            },
          ],
          "GBS NKAMBE / A": [
            {
              station: "228",
              voters: 228
            },
          ],
          "GRAND STAND / A": [
            {
              station: "363",
              voters: 363
            },
          ],
          "GRAND STAND / B": [
            {
              station: "309",
              voters: 309
            },
          ],
          "GRAND STAND / C": [
            {
              station: "276",
              voters: 276
            },
          ],
          "GRAND STAND / D": [
            {
              station: "338",
              voters: 338
            },
          ],
          "GVMT. SCHOOL GWEMENG / A": [
            {
              station: "167",
              voters: 167
            },
          ],
          "HEALTH CENTER BINKA / A": [
            {
              station: "166",
              voters: 166
            },
          ],
          "HEALTH CENTER BINSHUA / A": [
            {
              station: "184",
              voters: 184
            },
          ],
          "MBANGUI YOUTH CENTER / A": [
            {
              station: "138",
              voters: 138
            },
          ],
          "MBAYA HALL, TFUM / A": [
            {
              station: "470",
              voters: 470
            },
          ],
          "MBIKOP MARKET SQUARE / A": [
            {
              station: "367",
              voters: 367
            },
          ],
          "NGIE MARKET SQUARE / B": [
            {
              station: "230",
              voters: 230
            },
          ],
          "NKATECCUL / A": [
            {
              station: "212",
              voters: 424
            },
          ],
          "NKATECCUL / B": [
            {
              station: "143",
              voters: 143
            },
          ],
          "NTERMBANG G.S. / A": [
            {
              station: "247",
              voters: 247
            },
          ],
          "NWANGRI COOPERATIVE HALL / A": [
            {
              station: "336",
              voters: 336
            },
          ],
          "P.S NJILAH / A": [
            {
              station: "145",
              voters: 145
            },
          ],
          "PHYTOSANITORY / A": [
            {
              station: "267",
              voters: 534
            },
          ],
          "PHYTOSANITORY / B": [
            {
              station: "257",
              voters: 257
            },
          ],
          "SAAH MARKET SQUARE / A": [
            {
              station: "389",
              voters: 389
            },
          ],
          "SASH HALL NKAMBE / C": [
            {
              station: "339",
              voters: 1017
            },
          ],
          "ST LOUIS / A": [
            {
              station: "403",
              voters: 403
            },
          ],
          "SUB PREFECTURE / A": [
            {
              station: "187",
              voters: 187
            },
          ],
          "TORCH BEARERS / A": [
            {
              station: "271",
              voters: 542
            },
          ],
          "WAT MARKET SQUARE / A": [
            {
              station: "324",
              voters: 324
            },
          ],
          "YAMBA YOUTH HALL / A": [
            {
              station: "188",
              voters: 188
            },
          ],
        },
        "NWA": {
          "G.S ADERE / A": [
            {
              station: "Nwa",
              voters: 7590
            },
            {
              station: "Community",
              voters: 7590
            },
            {
              station: "Hall",
              voters: 7590
            },
          ],
        },
      },
      "MOMO": {
        "ANDEK": {
          "ACHA-TUGI HOSPITAL / A": [
            {
              station: "SAR/SM",
              voters: 737
            },
          ],
          "C.S NJINDOM / A": [
            {
              station: "373",
              voters: 373
            },
          ],
          "C.S NJINDOM / B": [
            {
              station: "102",
              voters: 102
            },
          ],
          "EJEE MARKET SQUARE / A": [
            {
              station: "160",
              voters: 160
            },
          ],
          "G.S ANGLO ARABIC / A": [
            {
              station: "G.B.S",
              voters: 2784
            },
            {
              station: "MBENGWI",
              voters: 8289
            },
          ],
          "G.S MUNAM / A": [
            {
              station: "290",
              voters: 290
            },
          ],
          "G.S NJINIBI / A": [
            {
              station: "296",
              voters: 296
            },
          ],
          "G.S. BESSI-FOMUKONG / A": [
            {
              station: "COUNCIL",
              voters: 3703
            },
            {
              station: "HALL",
              voters: 3703
            },
          ],
          "G.S. CHIGWIRI / A": [
            {
              station: "GBHS",
              voters: 1802
            },
          ],
          "G.S. NJAH-ETU / A": [
            {
              station: "304",
              voters: 304
            },
          ],
          "G.S. NJERWO / A": [
            {
              station: "106",
              voters: 106
            },
          ],
          "G.S. NOWOKWONG / A": [
            {
              station: "189",
              voters: 189
            },
          ],
          "G.S. TUANYANG / A": [
            {
              station: "186",
              voters: 186
            },
          ],
          "G.S. TUDIG / A": [
            {
              station: "219",
              voters: 219
            },
          ],
          "G.S. TUGI / A": [
            {
              station: "279",
              voters: 279
            },
          ],
          "G.S. WUMNEBURG / A": [
            {
              station: "267",
              voters: 267
            },
          ],
          "G.S. WUMSOM / A": [
            {
              station: "198",
              voters: 198
            },
          ],
          "G.S. ZANG-TABI / A": [
            {
              station: "358",
              voters: 358
            },
          ],
          "NGYEN-MBO COMMUNITY HALL / A": [
            {
              station: "346",
              voters: 346
            },
          ],
          "NGYEN-MBO COMMUNITY HALL / B": [
            {
              station: "325",
              voters: 325
            },
          ],
          "NJIMETU MARKET SQUARE / A": [
            {
              station: "176",
              voters: 176
            },
          ],
          "NYEN COOPERTIVE HALL / A": [
            {
              station: "368",
              voters: 368
            },
          ],
          "P.C. MBENGWI / B": [
            {
              station: "130",
              voters: 130
            },
          ],
          "P.C. ZEM / A": [
            {
              station: "222",
              voters: 222
            },
          ],
          "SANG MARKET SQUARE / A": [
            {
              station: "161",
              voters: 161
            },
          ],
        },
        "NJIKWA": {
          "BAKO MARKET SQUARE / A": [
            {
              station: "INSPECTORATE",
              voters: 2221
            },
            {
              station: "BASIC",
              voters: 2221
            },
            {
              station: "EDUCATION",
              voters: 2221
            },
            {
              station: "NJIKWA",
              voters: 2221
            },
          ],
          "BEMBAN HALL / A": [
            {
              station: "106",
              voters: 106
            },
          ],
          "BEREJE HALL / A": [
            {
              station: "243",
              voters: 243
            },
          ],
          "COOPERATIVE HALL OSHIE / A": [
            {
              station: "304",
              voters: 304
            },
          ],
          "G.S. SOH / A": [
            {
              station: "203",
              voters: 203
            },
          ],
          "NGEBENGE HALL / A": [
            {
              station: "179",
              voters: 179
            },
          ],
          "NJIKWA COUNCIL HALL / A": [
            {
              station: "324",
              voters: 324
            },
          ],
          "NJWO HALL / A": [
            {
              station: "127",
              voters: 127
            },
          ],
          "NKUN COOPERATIVE HALL / A": [
            {
              station: "342",
              voters: 342
            },
          ],
          "NYEBAI HALL / A": [
            {
              station: "193",
              voters: 193
            },
          ],
          "NYIKOP HALL / A": [
            {
              station: "123",
              voters: 123
            },
          ],
          "SABRI HALL / A": [
            {
              station: "163",
              voters: 163
            },
          ],
          "TOGOBEI -KU HALL / A": [
            {
              station: "101",
              voters: 101
            },
          ],
        },
        "WIDIKUM": {
          "C.S. ACHANA / A": [
            {
              station: "122",
              voters: 122
            },
          ],
          "C.S. AMBOMBO / A": [
            {
              station: "BIFANG",
              voters: 2589
            },
          ],
          "CATHOLIC MISSION OCHIE / A": [
            {
              station: "151",
              voters: 151
            },
          ],
          "COMMUNITY HALL MANTOH / A": [
            {
              station: "117",
              voters: 117
            },
          ],
          "CUSTOMARY COURT HALL MENKA / A": [
            {
              station: "184",
              voters: 184
            },
          ],
          "G.S LARRINJI / A": [
            {
              station: "107",
              voters: 107
            },
          ],
          "G.S TANKA / A": [
            {
              station: "171",
              voters: 171
            },
          ],
          "G.S. ABEDU / A": [
            {
              station: "G.S",
              voters: 7378
            },
            {
              station: "WIDIKUM",
              voters: 4206
            },
          ],
          "G.S. ACHANA / A": [
            {
              station: "120",
              voters: 120
            },
          ],
          "G.S. BAMBEN / A": [
            {
              station: "TIKOM",
              voters: 583
            },
          ],
          "G.S. ISHIA / A": [
            {
              station: "100",
              voters: 100
            },
          ],
          "G.S. KANIMBOM / A": [
            {
              station: "119",
              voters: 119
            },
          ],
          "G.S. NGALLA / A": [
            {
              station: "365",
              voters: 365
            },
          ],
          "G.S. NYEN / A": [
            {
              station: "320",
              voters: 320
            },
          ],
          "G.S. OLORUNTI / A": [
            {
              station: "352",
              voters: 352
            },
          ],
          "G.S. TIKOM / A": [
            {
              station: "303",
              voters: 303
            },
          ],
          "KWAFONG CATHOLIC CHURCH / A": [
            {
              station: "128",
              voters: 128
            },
          ],
          "N.A.C. MBAKOK HALL / A": [
            {
              station: "138",
              voters: 138
            },
          ],
        },
      },
      "NGOKE TUNJIA": {
        "BABESSI": {
          "AKUMUM GOVERNMENT SCHOOL / A": [
            {
              station: "235",
              voters: 235
            },
          ],
          "BALOM HEALTH CENTRE / A": [
            {
              station: "201",
              voters: 201
            },
          ],
          "BAMUNKUMBIT G.S.S./ A": [
            {
              station: "169",
              voters: 169
            },
          ],
          "EKWO GOVERNMENT SCHOOL / A": [
            {
              station: "BADO",
              voters: 6222
            },
            {
              station: "HALL",
              voters: 6222
            },
          ],
          "MANJOM G.S. ALUMLI / A": [
            {
              station: "188",
              voters: 188
            },
          ],
          "MANJOM G.S./ A": [
            {
              station: "236",
              voters: 236
            },
          ],
          "MBANKA C.S./ A": [
            {
              station: "371",
              voters: 371
            },
          ],
          "MBANTAP FULL GOSPEL CHURCH / A": [
            {
              station: "154",
              voters: 154
            },
          ],
          "MBANTI AGRIC POST / A": [
            {
              station: "290",
              voters: 290
            },
          ],
          "MULAFI G.S./ A": [
            {
              station: "364",
              voters: 364
            },
          ],
          "MUNANJI PRESBYTERIAN CHURCH / A": [
            {
              station: "207",
              voters: 207
            },
          ],
          "NDUMMET BADO HALL / A": [
            {
              station: "108",
              voters: 108
            },
          ],
          "NGOLANEPKAT C.S./ A": [
            {
              station: "334",
              voters: 334
            },
          ],
          "NGONGO CATHOLIC SCHOOL / A": [
            {
              station: "190",
              voters: 190
            },
          ],
          "NJINDEM MEETING HOUSE / A": [
            {
              station: "122",
              voters: 122
            },
          ],
          "NYAMBU KODUNA G.S./ A": [
            {
              station: "341",
              voters: 341
            },
          ],
          "NYONGSONGHA BADO HALL / A": [
            {
              station: "319",
              voters: 319
            },
          ],
          "NYUGU C.B.C CHURCH / A": [
            {
              station: "222",
              voters: 222
            },
          ],
          "PILIMBO COMMUNITY HALL / A": [
            {
              station: "130",
              voters: 130
            },
          ],
          "SMALL MARKET PRESBY. SCHOOL / A": [
            {
              station: "359",
              voters: 359
            },
          ],
          "WAPU GOV'T SCHOOL / A": [
            {
              station: "191",
              voters: 191
            },
          ],
        },
      },
      "MEZAM": {
        "BAFUT": {
          "ADIEMUKONG MARKET SQUARE / A": [
            {
              station: "Council",
              voters: 2502
            },
            {
              station: "building,",
              voters: 2502
            },
            {
              station: "nsoh",
              voters: 2502
            },
          ],
          "C.S MBERIWI / A": [
            {
              station: "103",
              voters: 103
            },
          ],
          "C.S NSOH / A": [
            {
              station: "411",
              voters: 411
            },
          ],
          "C.S NSOH / B": [
            {
              station: "367",
              voters: 367
            },
          ],
          "C.S NSOH / C": [
            {
              station: "455",
              voters: 455
            },
          ],
          "COMMUNITY HALL NTABUWE / A": [
            {
              station: "339",
              voters: 339
            },
          ],
          "CUSTOMARY COURT NJINTEH / A": [
            {
              station: "388",
              voters: 388
            },
          ],
          "CUSTOMARY COURT NJINTEH / B": [
            {
              station: "387",
              voters: 387
            },
          ],
          "CUSTOMARY COURT NJINTEH / C": [
            {
              station: "134",
              voters: 134
            },
          ],
          "G.S MBEBILI / A": [
            {
              station: "294",
              voters: 294
            },
          ],
          "G.S NDUNG / A": [
            {
              station: "404",
              voters: 404
            },
          ],
          "G.S. ACHENI / A": [
            {
              station: "G.N.S",
              voters: 4939
            },
            {
              station: "AGYATI",
              voters: 4939
            },
          ],
          "G.S. MANKWI / A": [
            {
              station: "324",
              voters: 324
            },
          ],
          "G.S. MANKWI / B": [
            {
              station: "311",
              voters: 311
            },
          ],
          "G.S. MBAKONG / A": [
            {
              station: "418",
              voters: 418
            },
          ],
          "G.S. MFONTA / A": [
            {
              station: "156",
              voters: 156
            },
          ],
          "G.S. MUGHIE / A": [
            {
              station: "252",
              voters: 252
            },
          ],
          "G.S. NEBEBA / A": [
            {
              station: "114",
              voters: 114
            },
          ],
          "G.S. NIKO / A": [
            {
              station: "429",
              voters: 429
            },
          ],
          "G.S. NIKO / B": [
            {
              station: "102",
              voters: 102
            },
          ],
          "G.S. NJIBUJANG / A": [
            {
              station: "198",
              voters: 198
            },
          ],
          "G.S. NJIMBEE / A": [
            {
              station: "212",
              voters: 212
            },
          ],
          "G.S. NSOH / A": [
            {
              station: "393",
              voters: 393
            },
          ],
          "G.S. NSOH / B": [
            {
              station: "181",
              voters: 181
            },
          ],
          "G.S. OBANG / A": [
            {
              station: "389",
              voters: 389
            },
          ],
          "G.S. OKWALA / A": [
            {
              station: "157",
              voters: 157
            },
          ],
          "G.S. TINGOH / A": [
            {
              station: "316",
              voters: 316
            },
          ],
          "G.S. TINGOH / B": [
            {
              station: "286",
              voters: 286
            },
          ],
          "MFORYA MKT SQUARE / A": [
            {
              station: "276",
              voters: 276
            },
          ],
          "MFORYA MKT SQUARE / B": [
            {
              station: "254",
              voters: 508
            },
          ],
          "MUNDUM HEALTH CENTER / A": [
            {
              station: "158",
              voters: 158
            },
          ],
          "P.C NIBE / A": [
            {
              station: "170",
              voters: 170
            },
          ],
          "P.C NJIBUJANG / A": [
            {
              station: "363",
              voters: 363
            },
          ],
          "P.C NJIBUJANG / B": [
            {
              station: "110",
              voters: 110
            },
          ],
          "P.C. ALANTAH / B": [
            {
              station: "271",
              voters: 271
            },
          ],
          "P.C. MBEBALI / A": [
            {
              station: "357",
              voters: 357
            },
          ],
          "P.C. MBEBALI / B": [
            {
              station: "337",
              voters: 337
            },
          ],
          "P.S. NCHUM / A": [
            {
              station: "417",
              voters: 417
            },
          ],
          "P.S. NCHUM / B": [
            {
              station: "122",
              voters: 122
            },
          ],
          "P.S. NSEM / A": [
            {
              station: "405",
              voters: 405
            },
          ],
        },
        "BALI": {
          "ALPHA NURSERY AND PRIMARY / A": [
            {
              station: "318",
              voters: 318
            },
          ],
          "BALI COMMUNITY HALL / A": [
            {
              station: "369",
              voters: 369
            },
          ],
          "BALI COMMUNITY HALL / B": [
            {
              station: "329",
              voters: 329
            },
          ],
          "C.P.C. BALI / A": [
            {
              station: "200",
              voters: 400
            },
          ],
          "C.S. BALI / A": [
            {
              station: "278",
              voters: 278
            },
          ],
          "G.N.S. / A": [
            {
              station: "374",
              voters: 374
            },
          ],
          "G.N.S. / B": [
            {
              station: "327",
              voters: 327
            },
          ],
          "G.N.S. / C": [
            {
              station: "294",
              voters: 294
            },
          ],
          "G.S BAWOCK / A": [
            {
              station: "416",
              voters: 416
            },
          ],
          "G.S WOSING / A": [
            {
              station: "400",
              voters: 400
            },
          ],
          "GTHS SANG / A": [
            {
              station: "383",
              voters: 383
            },
          ],
          "GTHS SANG / B": [
            {
              station: "114",
              voters: 114
            },
          ],
          "HAUSSA COOPERATIVE HALL / A": [
            {
              station: "359",
              voters: 359
            },
          ],
          "HAUSSA COOPERATIVE HALL / B": [
            {
              station: "148",
              voters: 148
            },
          ],
          "INTEGRATED HEALTH CENTRE / A": [
            {
              station: "407",
              voters: 407
            },
          ],
          "NETAB P.C. HALL / A": [
            {
              station: "143",
              voters: 143
            },
          ],
          "NGWATKAN COMMUNITY HALL / A": [
            {
              station: "115",
              voters: 115
            },
          ],
          "NSAMWOCK COOPERATIVE HALL / A": [
            {
              station: "204",
              voters: 204
            },
          ],
          "P.S. NJENKA / A": [
            {
              station: "389",
              voters: 389
            },
          ],
          "P.S. NJENKA / B": [
            {
              station: "401",
              voters: 401
            },
          ],
          "P.S. NJENKA / C": [
            {
              station: "154",
              voters: 154
            },
          ],
          "TITA MUFUT CULTURAL HALL / A": [
            {
              station: "LEGAL",
              voters: 3339
            },
            {
              station: "D￉PARTEMENT",
              voters: 3339
            },
            {
              station: "BUILDING.",
              voters: 3339
            },
          ],
        },
        "BAMENDA II": {
          "C.S MBATU / A": [
            {
              station: "211",
              voters: 211
            },
          ],
          "C.S NJIMAFOR / A": [
            {
              station: "314",
              voters: 314
            },
          ],
          "C.S. BIG MANKOM / A": [
            {
              station: "G.S",
              voters: 1309
            },
          ],
          "CATHOLIC CHURCH NJIMAFOR / A": [
            {
              station: "380",
              voters: 380
            },
          ],
          "G.B.H.S MBATU / A": [
            {
              station: "174",
              voters: 174
            },
          ],
          "G.S NSONGWA MILE 90 / A": [
            {
              station: "376",
              voters: 376
            },
          ],
          "G.S NSONGWA MILE 90 / B": [
            {
              station: "346",
              voters: 346
            },
          ],
          "G.S NSONGWA MILE 90 / C": [
            {
              station: "361",
              voters: 361
            },
          ],
          "G.S. CHOMBA / A": [
            {
              station: "COUNCIL",
              voters: 2932
            },
            {
              station: "LIBRARY",
              voters: 2932
            },
          ],
          "HEALTH CEN. ALABUKAM / A": [
            {
              station: "G.B.S-GMI",
              voters: 5506
            },
          ],
          "MINCOM/ADMINISTRATIVE GARAGE / A": [
            {
              station: "G.B.S",
              voters: 345
            },
            {
              station: "OLD",
              voters: 1654
            },
            {
              station: "TOWN",
              voters: 1654
            },
          ],
          "MROMASSA HALL / A": [
            {
              station: "397",
              voters: 397
            },
          ],
          "PRESBY CH-HALL NSONGWA / A": [
            {
              station: "164",
              voters: 164
            },
          ],
          "VETERINARY CLINIC / D": [
            {
              station: "287",
              voters: 287
            },
          ],
          "VETERINARY CLINIC / E": [
            {
              station: "291",
              voters: 291
            },
          ],
          "VETERINARY CLINIC / F": [
            {
              station: "286",
              voters: 286
            },
          ],
          "VETERINARY CLINIC / G": [
            {
              station: "317",
              voters: 317
            },
          ],
        },
        "BAMENDA III": {
          "C.B.C. MILE 3 / A": [
            {
              station: "CBC",
              voters: 4876
            },
            {
              station: "MILE",
              voters: 4444
            },
          ],
          "FORMER P & T DELEGATION / B": [
            {
              station: "NKWEN",
              voters: 712
            },
          ],
          "INDEPENDENCE HALL ALAHLIE / A": [
            {
              station: "FUTRU",
              voters: 5775
            },
          ],
          "INDEPENDENCE HALL MBELEWA / A": [
            {
              station: "NIBUNG",
              voters: 352
            },
          ],
          "PMI NKWEN / A": [
            {
              station: "BAYELLE",
              voters: 5337
            },
          ],
          "ST JOHN CATHOLIC SCHOOL / A": [
            {
              station: "GTHS",
              voters: 280
            },
          ],
          "TEKEN HALL / A": [
            {
              station: "TEKEN",
              voters: 744
            },
            {
              station: "HALL",
              voters: 744
            },
          ],
          "WIMBUM WOMEN'S HALL / A": [
            {
              station: "NTAMBESSI",
              voters: 3085
            },
          ],
        },
        "BAMENDA I": {
          "BAMENDA PRISON CANTEEN / A": [
            {
              station: "G.S.",
              voters: 2901
            },
            {
              station: "STATION",
              voters: 2901
            },
          ],
          "BANGSHIE MARKET SQUARE / A": [
            {
              station: "335",
              voters: 335
            },
          ],
          "C.S. NTENEFOR / A": [
            {
              station: "350",
              voters: 350
            },
          ],
          "C.S. NTENEFOR / C": [
            {
              station: "316",
              voters: 316
            },
          ],
          "C.S. NTENEFOR / D": [
            {
              station: "169",
              voters: 169
            },
          ],
          "C.S. NTENEFOR / E": [
            {
              station: "297",
              voters: 297
            },
          ],
          "E.P.F. ARMY CAMP / A": [
            {
              station: "329",
              voters: 658
            },
          ],
          "E.P.F. ARMY CAMP / B": [
            {
              station: "273",
              voters: 273
            },
          ],
          "E.P.F. ARMY CAMP / C": [
            {
              station: "250",
              voters: 250
            },
          ],
          "E.P.F. ARMY CAMP / D": [
            {
              station: "360",
              voters: 360
            },
          ],
          "E.P.F. ARMY CAMP / E": [
            {
              station: "282",
              voters: 282
            },
          ],
          "E.P.F. ARMY CAMP / F": [
            {
              station: "479",
              voters: 479
            },
          ],
          "G.B.H.S. BAMANDAN-KWE / A": [
            {
              station: "372",
              voters: 372
            },
          ],
          "G.B.H.S. BAMANDAN-KWE / B": [
            {
              station: "354",
              voters: 354
            },
          ],
          "G.B.H.S. BAMANDAN-KWE / D": [
            {
              station: "369",
              voters: 369
            },
          ],
          "G.S. ABANGOH / A": [
            {
              station: "ABANGOH",
              voters: 1817
            },
          ],
          "G.S. NTANCHE / A": [
            {
              station: "365",
              voters: 365
            },
          ],
          "G.S. NTANCHE / B": [
            {
              station: "326",
              voters: 326
            },
          ],
          "G.S. NTANCHE / C": [
            {
              station: "251",
              voters: 251
            },
          ],
          "G.S. NTOH / A": [
            {
              station: "380",
              voters: 380
            },
          ],
          "G.S. NTOH / B": [
            {
              station: "409",
              voters: 409
            },
          ],
          "G.S. NTOH / C": [
            {
              station: "221",
              voters: 221
            },
          ],
          "HEALTH CENTER / A": [
            {
              station: "384",
              voters: 384
            },
          ],
          "HEALTH CENTER / B": [
            {
              station: "265",
              voters: 265
            },
          ],
          "P.S. BUJONG / A": [
            {
              station: "376",
              voters: 376
            },
          ],
          "P.S. BUJONG / B": [
            {
              station: "268",
              voters: 268
            },
          ],
          "REG. DEL. NATIONAL SECURITY / A": [
            {
              station: "FORMAL",
              voters: 535
            },
            {
              station: "PWD",
              voters: 535
            },
            {
              station: "BUILDING",
              voters: 535
            },
          ],
          "SIXTH MILITARY SECTOR / A": [
            {
              station: "328",
              voters: 656
            },
          ],
        },
        "SANTA": {
          "C.S. ACHIALUM / A": [
            {
              station: "CIVIL",
              voters: 4537
            },
            {
              station: "STATUS",
              voters: 4537
            },
            {
              station: "CENTER",
              voters: 4537
            },
            {
              station: "AWING",
              voters: 4537
            },
          ],
          "C.S. MBEI / A": [
            {
              station: "430",
              voters: 430
            },
          ],
          "C.S. MBEI / B": [
            {
              station: "414",
              voters: 414
            },
          ],
          "C.S. MBEI / C": [
            {
              station: "202",
              voters: 202
            },
          ],
          "CDSTS / A": [
            {
              station: "380",
              voters: 380
            },
          ],
          "CDSTS / B": [
            {
              station: "197",
              voters: 197
            },
          ],
          "CO - OPT. UNION SANTA / A": [
            {
              station: "352",
              voters: 352
            },
          ],
          "CO - OPT. UNION SANTA / B": [
            {
              station: "350",
              voters: 350
            },
          ],
          "CO - OPT. UNION SANTA / C": [
            {
              station: "121",
              voters: 121
            },
          ],
          "CO-OPT. STORE ASOH / A": [
            {
              station: "452",
              voters: 452
            },
          ],
          "COMM. HALL NJONG / A": [
            {
              station: "393",
              voters: 393
            },
          ],
          "COMM. HALL NJONG / B": [
            {
              station: "151",
              voters: 151
            },
          ],
          "COUNCIL HALL SANTA / A": [
            {
              station: "418",
              voters: 418
            },
          ],
          "COUNCIL HALL SANTA / B": [
            {
              station: "424",
              voters: 424
            },
          ],
          "CUSTOMARY COURT / A": [
            {
              station: "387",
              voters: 387
            },
          ],
          "G.B.H.S. SANTA / A": [
            {
              station: "348",
              voters: 348
            },
          ],
          "G.B.H.S. SANTA / B": [
            {
              station: "314",
              voters: 314
            },
          ],
          "G.S. ACHOU / A": [
            {
              station: "176",
              voters: 176
            },
          ],
          "G.S. BAMOCK / A": [
            {
              station: "281",
              voters: 281
            },
          ],
          "G.S. BANJONG / A": [
            {
              station: "163",
              voters: 326
            },
          ],
          "G.S. NJONG / A": [
            {
              station: "370",
              voters: 370
            },
          ],
          "G.S. NJONG / B": [
            {
              station: "299",
              voters: 299
            },
          ],
          "G.S. NTARRAH / A": [
            {
              station: "345",
              voters: 345
            },
          ],
          "G.S. NTOH MBEI / A": [
            {
              station: "217",
              voters: 217
            },
          ],
          "G.S. SANTA / A": [
            {
              station: "407",
              voters: 407
            },
          ],
          "G.S. SANTA / B": [
            {
              station: "127",
              voters: 127
            },
          ],
          "G.S. SANTA COFFEE ESTATE / A": [
            {
              station: "BALIGHAM",
              voters: 1223
            },
          ],
          "G.S.ASANE AKUM / A": [
            {
              station: "G.S",
              voters: 4845
            },
            {
              station: "AKUM",
              voters: 3622
            },
          ],
          "G.S.BALIGHAM / A": [
            {
              station: "398",
              voters: 398
            },
          ],
          "G.S.BALIGHAM / B": [
            {
              station: "279",
              voters: 279
            },
          ],
          "G.S.BUCHI / A": [
            {
              station: "294",
              voters: 294
            },
          ],
          "INSPECTORATE BASIC EDUC. / A": [
            {
              station: "341",
              voters: 341
            },
          ],
          "MAGARET T. SCHOOL / A": [
            {
              station: "261",
              voters: 261
            },
          ],
          "MAGARET T. SCHOOL / B": [
            {
              station: "239",
              voters: 239
            },
          ],
          "MKT. SQ. MATAJEM / A": [
            {
              station: "235",
              voters: 235
            },
          ],
          "P.S. SANTA / A": [
            {
              station: "360",
              voters: 360
            },
          ],
          "P.S. SANTA / B": [
            {
              station: "267",
              voters: 267
            },
          ],
          "P.S.BALIGHAM / A": [
            {
              station: "351",
              voters: 351
            },
          ],
          "SANTA URBAN HEALTH CENTER / A": [
            {
              station: "282",
              voters: 282
            },
          ],
          "SAR/SM BALIGHAM / A": [
            {
              station: "169",
              voters: 169
            },
          ],
        },
        "TUBAH": {
          "AGAM CHECK POINT BAR / A": [
            {
              station: "CCAST",
              voters: 2005
            },
            {
              station: "HALL",
              voters: 11075
            },
            {
              station: "BAMBILI",
              voters: 11075
            },
          ],
          "C.B.C. CHUKU / A": [
            {
              station: "384",
              voters: 384
            },
          ],
          "C.B.C. CHUKU / B": [
            {
              station: "402",
              voters: 402
            },
          ],
          "C.B.C. KWIGHE / B": [
            {
              station: "300",
              voters: 300
            },
          ],
          "C.B.C. KWIGHE / C": [
            {
              station: "117",
              voters: 117
            },
          ],
          "C.H.S. BAMBUI / A": [
            {
              station: "333",
              voters: 666
            },
          ],
          "C.H.S. BAMBUI / B": [
            {
              station: "323",
              voters: 323
            },
          ],
          "C.H.S. BAMBUI / C": [
            {
              station: "288",
              voters: 288
            },
          ],
          "C.S. MANDZEBANG / A": [
            {
              station: "143",
              voters: 143
            },
          ],
          "C.S. ST. BERNARD / A": [
            {
              station: "214",
              voters: 214
            },
          ],
          "COMM. HALL NTEHNLOH / A": [
            {
              station: "164",
              voters: 164
            },
          ],
          "COMM. HALL NTEHNTUH / A": [
            {
              station: "383",
              voters: 383
            },
          ],
          "COMMUNITY HALL BARFORKUM / A": [
            {
              station: "283",
              voters: 283
            },
          ],
          "COMMUNITY HALL BUELAMFOR / A": [
            {
              station: "390",
              voters: 780
            },
          ],
          "CREDIT UNION H. ACHI / A": [
            {
              station: "356",
              voters: 356
            },
          ],
          "ENSAB HALL / A": [
            {
              station: "ENSAB",
              voters: 9070
            },
          ],
          "FARM DEMONSTRATION CEN. / A": [
            {
              station: "291",
              voters: 291
            },
          ],
          "FARM DEMONSTRATION CEN. / B": [
            {
              station: "243",
              voters: 243
            },
          ],
          "G.B.P.S. BAMBILI / A": [
            {
              station: "GBPS",
              voters: 301
            },
            {
              station: "TUBAH",
              voters: 301
            },
            {
              station: "BAMBUI",
              voters: 301
            },
          ],
          "G.B.P.S. TUBAH / A": [
            {
              station: "387",
              voters: 387
            },
          ],
          "G.P.S. JOROBURO / A": [
            {
              station: "233",
              voters: 233
            },
          ],
          "G.P.S. NTEMBANG / A": [
            {
              station: "159",
              voters: 159
            },
          ],
          "G.P.S. TONGUH / A": [
            {
              station: "319",
              voters: 319
            },
          ],
          "G.S AKOH / A": [
            {
              station: "174",
              voters: 174
            },
          ],
          "G.S MALLAM / A": [
            {
              station: "103",
              voters: 103
            },
          ],
          "G.S. ABOBONG / A": [
            {
              station: "278",
              voters: 556
            },
          ],
          "G.S. ABOBONG / B": [
            {
              station: "273",
              voters: 273
            },
          ],
          "G.S. ATUNIBA / A": [
            {
              station: "298",
              voters: 298
            },
          ],
          "G.S. ATUNIBA / B": [
            {
              station: "123",
              voters: 123
            },
          ],
          "G.S. BABANKI TUNGO / A": [
            {
              station: "201",
              voters: 201
            },
          ],
          "G.S. BIG BABANKI / A": [
            {
              station: "385",
              voters: 770
            },
          ],
          "G.S. FINGE / A": [
            {
              station: "376",
              voters: 376
            },
          ],
          "G.S. KETIEH / A": [
            {
              station: "222",
              voters: 222
            },
          ],
          "G.S. LIH / B": [
            {
              station: "294",
              voters: 294
            },
          ],
          "G.S. MACHA / A": [
            {
              station: "398",
              voters: 398
            },
          ],
          "G.S. MACHA / B": [
            {
              station: "199",
              voters: 199
            },
          ],
          "G.S. NCHOKEN / A": [
            {
              station: "213",
              voters: 213
            },
          ],
          "G.S. NTIGI / A": [
            {
              station: "316",
              voters: 316
            },
          ],
          "G.T.C. KEDJOM KETINGUH / A": [
            {
              station: "155",
              voters: 155
            },
          ],
          "G.Y.C. BAMBUI / A": [
            {
              station: "367",
              voters: 734
            },
          ],
          "G.Y.C. BAMBUI / B": [
            {
              station: "360",
              voters: 360
            },
          ],
          "G.Y.C. BAMBUI / D": [
            {
              station: "373",
              voters: 373
            },
          ],
          "HEALTH CEN. BAMBUI / A": [
            {
              station: "312",
              voters: 624
            },
          ],
          "HEALTH CEN. BAMBUI / B": [
            {
              station: "359",
              voters: 359
            },
          ],
          "HEALTH CEN. BAMBUI / C": [
            {
              station: "245",
              voters: 245
            },
          ],
          "HEALTH CEN. K. KETINGUH / A": [
            {
              station: "324",
              voters: 324
            },
          ],
          "HEALTH CENTER NTEMBANG / A": [
            {
              station: "156",
              voters: 156
            },
          ],
          "MALLAM HALL / A": [
            {
              station: "160",
              voters: 320
            },
          ],
          "MUTOH LIGHI SQUARE / A": [
            {
              station: "166",
              voters: 166
            },
          ],
          "NIBIE COOP. HALL / A": [
            {
              station: "358",
              voters: 716
            },
          ],
          "NIBIE COOP. HALL / C": [
            {
              station: "394",
              voters: 394
            },
          ],
          "OLD MARKET BUH FENGAM / A": [
            {
              station: "276",
              voters: 276
            },
          ],
          "P.S. TUBAH / A": [
            {
              station: "382",
              voters: 382
            },
          ],
          "P.S. TUBAH / C": [
            {
              station: "372",
              voters: 372
            },
          ],
          "P.S. TUBAH / D": [
            {
              station: "364",
              voters: 364
            },
          ],
          "P.S. TUBAH / E": [
            {
              station: "332",
              voters: 664
            },
          ],
          "P.S. TUBAH / F": [
            {
              station: "362",
              voters: 362
            },
          ],
          "P.S. TUBAH / G": [
            {
              station: "337",
              voters: 337
            },
          ],
          "P.S. TUBAH / H": [
            {
              station: "342",
              voters: 342
            },
          ],
          "P.S. TUBAH / J": [
            {
              station: "176",
              voters: 176
            },
          ],
          "PRES. CHURCH FUPHENSE / A": [
            {
              station: "426",
              voters: 426
            },
          ],
          "Q.H.C. FONTA / A": [
            {
              station: "121",
              voters: 121
            },
          ],
          "R.C.A. HALL / A": [
            {
              station: "247",
              voters: 247
            },
          ],
          "VETERINARY POST SABGA / A": [
            {
              station: "381",
              voters: 381
            },
          ],
        },
      },
      "BOYO": {
        "BELO": {
          "B.C.H.S. NJINIKEJEM / A": [
            {
              station: "272",
              voters: 272
            },
          ],
          "B.C.H.S. NJINIKEJEM / B": [
            {
              station: "249",
              voters: 249
            },
          ],
          "C.B.C. ANYAJUA / A": [
            {
              station: "Market",
              voters: 1605
            },
            {
              station: "Stores",
              voters: 1605
            },
          ],
          "C.B.C. JUABUM / A": [
            {
              station: "354",
              voters: 354
            },
          ],
          "C.B.C. MBINGO II / A": [
            {
              station: "379",
              voters: 379
            },
          ],
          "C.B.C. MBINGO II / B": [
            {
              station: "350",
              voters: 350
            },
          ],
          "C.B.C. MUGHOM / A": [
            {
              station: "204",
              voters: 204
            },
          ],
          "C.S. AFUA / A": [
            {
              station: "Ndawara",
              voters: 404
            },
            {
              station: "Islamic",
              voters: 404
            },
            {
              station: "Primary",
              voters: 404
            },
            {
              station: "School",
              voters: 404
            },
          ],
          "C.S. ASUH / A": [
            {
              station: "Community",
              voters: 1928
            },
            {
              station: "radio",
              voters: 1928
            },
            {
              station: "Building",
              voters: 1928
            },
          ],
          "C.S. MBESA / A": [
            {
              station: "248",
              voters: 248
            },
          ],
          "C.S. MBESA / B": [
            {
              station: "247",
              voters: 494
            },
          ],
          "C.S. NJINIKEJEM / A": [
            {
              station: "319",
              voters: 319
            },
          ],
          "C.S. NJINIKEJEM / B": [
            {
              station: "312",
              voters: 312
            },
          ],
          "C.S. NTUM / A": [
            {
              station: "128",
              voters: 128
            },
          ],
          "C.S. SHO / A": [
            {
              station: "349",
              voters: 349
            },
          ],
          "C.S. SHO / B": [
            {
              station: "176",
              voters: 176
            },
          ],
          "CO-OPERATIVE STORE NJINIKEJEM / A": [
            {
              station: "346",
              voters: 346
            },
          ],
          "CO-OPERATIVE STORE NJINIKEJEM / B": [
            {
              station: "305",
              voters: 305
            },
          ],
          "CO-OPERATIVE. STORE MBESA / A": [
            {
              station: "334",
              voters: 334
            },
          ],
          "CO-OPERATIVE. STORE MBESA / B": [
            {
              station: "323",
              voters: 323
            },
          ],
          "COMM. HALL ANJANG / A": [
            {
              station: "Potatoes",
              voters: 3229
            },
            {
              station: "Cooperative",
              voters: 3229
            },
          ],
          "COMMUNITY HALL TWALATWAL / A": [
            {
              station: "281",
              voters: 281
            },
          ],
          "G.H.S. MBESA / A": [
            {
              station: "276",
              voters: 276
            },
          ],
          "G.H.S. MBESA / B": [
            {
              station: "261",
              voters: 261
            },
          ],
          "G.S. ABOH / A": [
            {
              station: "Belo",
              voters: 3354
            },
            {
              station: "Council",
              voters: 3031
            },
            {
              station: "Hall",
              voters: 7338
            },
          ],
          "G.S. ACHA / A": [
            {
              station: "BADU",
              voters: 2683
            },
          ],
          "G.S. KITCHU / A": [
            {
              station: "242",
              voters: 242
            },
          ],
          "G.S. KITCHU / B": [
            {
              station: "228",
              voters: 228
            },
          ],
          "G.S. MEJUNG / A": [
            {
              station: "210",
              voters: 210
            },
          ],
          "G.S. NGEMSIBO / A": [
            {
              station: "180",
              voters: 180
            },
          ],
          "G.S. SHO / A": [
            {
              station: "266",
              voters: 266
            },
          ],
          "G.S. SOWI / A": [
            {
              station: "366",
              voters: 366
            },
          ],
          "GOVT HEALTH CENTER TUMUKU / A": [
            {
              station: "336",
              voters: 336
            },
          ],
          "GOVT HEALTH CENTER TUMUKU / B": [
            {
              station: "321",
              voters: 321
            },
          ],
          "GOYT HEALTH CENTER TUMUKU / C": [
            {
              station: "138",
              voters: 138
            },
          ],
          "HEALTH CENTER MEJANG / A": [
            {
              station: "193",
              voters: 193
            },
          ],
          "HEALTH CENTER NDAWARA / A": [
            {
              station: "428",
              voters: 428
            },
          ],
          "ISLAMIC PRIMARY SCHOOL  NDAWARA / A": [
            {
              station: "279",
              voters: 279
            },
          ],
          "MBINGO MARKET SQUARE / A": [
            {
              station: "363",
              voters: 363
            },
          ],
          "MBINGO MARKET SQUARE / B": [
            {
              station: "158",
              voters: 158
            },
          ],
        },
        "FONKUKA": {
          "G.S. BUABUA / A": [
            {
              station: "PNE",
              voters: 1682
            },
            {
              station: "Fonfunka",
              voters: 1682
            },
          ],
          "G.S. FONFUKA / A": [
            {
              station: "Council",
              voters: 3382
            },
            {
              station: "Market",
              voters: 3382
            },
            {
              station: "Building",
              voters: 3382
            },
          ],
          "G.S. FUSEJOU / A": [
            {
              station: "Agric.",
              voters: 1967
            },
            {
              station: "Post",
              voters: 1967
            },
            {
              station: "Fonfuka",
              voters: 1967
            },
          ],
          "G.S. MUNGONG / A": [
            {
              station: "Mungong",
              voters: 466
            },
          ],
        },
        "FUNDONG": {
          "C.B.C. FUJUA / A": [
            {
              station: "278",
              voters: 278
            },
          ],
          "C.S. BOYUI / A": [
            {
              station: "141",
              voters: 141
            },
          ],
          "C.S. MUTEFF / A": [
            {
              station: "406",
              voters: 406
            },
          ],
          "CO-OPERATIVE STORE ALIM / A": [
            {
              station: "GTHS",
              voters: 1296
            },
            {
              station: "Fundong",
              voters: 3858
            },
          ],
          "COM. HALL ABAIAKANG / A": [
            {
              station: "151",
              voters: 151
            },
          ],
          "COMM. HALL FUNDONG VILLAGE / A": [
            {
              station: "396",
              voters: 396
            },
          ],
          "COMMUNITY HALL ABUH-IKU / A": [
            {
              station: "GNS",
              voters: 2588
            },
            {
              station: "Lainilain",
              voters: 6362
            },
          ],
          "COMMUNITY HALL ACHANGNE / A": [
            {
              station: "Community",
              voters: 3774
            },
            {
              station: "Hall",
              voters: 3774
            },
          ],
          "COMMUNITY HALL MUTEFF / A": [
            {
              station: "373",
              voters: 373
            },
          ],
          "COMMUNITY HALL NTEHGUM / A": [
            {
              station: "386",
              voters: 386
            },
          ],
          "COMMUNITY HALL YUWI / A": [
            {
              station: "198",
              voters: 198
            },
          ],
          "G.B.N.S FUNDONG / A": [
            {
              station: "GBNS",
              voters: 811
            },
          ],
          "G.P.S. MBISSI / A": [
            {
              station: "365",
              voters: 365
            },
          ],
          "G.P.S. NOWAINKUMA / A": [
            {
              station: "395",
              voters: 395
            },
          ],
          "G.S. ILUNG / A": [
            {
              station: "293",
              voters: 293
            },
          ],
          "G.S. ISAIBI / A": [
            {
              station: "145",
              voters: 145
            },
          ],
          "G.S. LAIKOM / A": [
            {
              station: "160",
              voters: 160
            },
          ],
          "G.S. MBAM / A": [
            {
              station: "361",
              voters: 361
            },
          ],
          "G.S. MBAM / B": [
            {
              station: "321",
              voters: 321
            },
          ],
          "G.S. MBENGKAS / A": [
            {
              station: "135",
              voters: 135
            },
          ],
          "G.S. MBOH / A": [
            {
              station: "311",
              voters: 311
            },
          ],
          "G.S. MBONOKISSU / A": [
            {
              station: "166",
              voters: 166
            },
          ],
          "G.S. MELI / A": [
            {
              station: "350",
              voters: 350
            },
          ],
          "G.S. MENTANG / A": [
            {
              station: "422",
              voters: 422
            },
          ],
          "G.S. MUAL / A": [
            {
              station: "112",
              voters: 112
            },
          ],
          "G.S. NOWAH ALOIN / A": [
            {
              station: "340",
              voters: 340
            },
          ],
          "G.S.KUMTEM / A": [
            {
              station: "410",
              voters: 410
            },
          ],
          "G.S.S. MELI / A": [
            {
              station: "335",
              voters: 670
            },
          ],
          "GSS FUJUA / A": [
            {
              station: "243",
              voters: 243
            },
          ],
          "P.S. FUNDONG / A": [
            {
              station: "394",
              voters: 394
            },
          ],
          "P.S. FUNDONG / B": [
            {
              station: "387",
              voters: 387
            },
          ],
          "P.S. IKUJUJA / A": [
            {
              station: "148",
              voters: 148
            },
          ],
        },
      },
      "BUI": {
        "ELAK": {
          "CHAK COMMUNITY HALL / A": [
            {
              station: "ELAK",
              voters: 421
            },
            {
              station: "COMMUNITY",
              voters: 421
            },
            {
              station: "HALL",
              voters: 421
            },
          ],
        },
        "JAKIRI": {
          "C.B.C. KAM. / A": [
            {
              station: "272",
              voters: 272
            },
          ],
          "C.S. NKARKUI / A": [
            {
              station: "119",
              voters: 119
            },
          ],
          "C.S. RAN. / A": [
            {
              station: "286",
              voters: 286
            },
          ],
          "C.S. ROONTONG / A": [
            {
              station: "196",
              voters: 196
            },
          ],
          "C.S. SOP / A": [
            {
              station: "214",
              voters: 214
            },
          ],
          "G.S. KIMAR / A": [
            {
              station: "127",
              voters: 127
            },
          ],
          "G.S. MBITEEI / A": [
            {
              station: "204",
              voters: 204
            },
          ],
          "G.S. NDZEREM - NYAM / A": [
            {
              station: "165",
              voters: 165
            },
          ],
          "G.S. NKAR / A": [
            {
              station: "269",
              voters: 269
            },
          ],
          "G.S. NKARTSEN / A": [
            {
              station: "160",
              voters: 160
            },
          ],
          "G.S. NTSEIMBANG / A": [
            {
              station: "129",
              voters: 258
            },
          ],
          "G.S. TAN / A": [
            {
              station: "365",
              voters: 365
            },
          ],
          "G.S. TARON. / A": [
            {
              station: "174",
              voters: 174
            },
          ],
          "G.S. WAINAMAH / A": [
            {
              station: "367",
              voters: 367
            },
          ],
          "G.S. WAINAMAH / B": [
            {
              station: "354",
              voters: 354
            },
          ],
          "G.S. YER / A": [
            {
              station: "427",
              voters: 427
            },
          ],
          "I.P.S. NTUNIR / A": [
            {
              station: "290",
              voters: 290
            },
          ],
          "I.P.S. NTUR / A": [
            {
              station: "187",
              voters: 187
            },
          ],
          "I.P.S. VEKOVI. / A": [
            {
              station: "201",
              voters: 201
            },
          ],
          "KIBANG MARKET SQUARE / A": [
            {
              station: "G.B.P.S",
              voters: 66
            },
            {
              station: "SABONGARI",
              voters: 66
            },
          ],
          "NKAR CREDIT UNION / A": [
            {
              station: "143",
              voters: 143
            },
          ],
          "NKAR MARKET / A": [
            {
              station: "341",
              voters: 341
            },
          ],
          "NOI COOPERATIVE / A": [
            {
              station: "217",
              voters: 217
            },
          ],
          "NOI COOPERATIVE / B": [
            {
              station: "222",
              voters: 222
            },
          ],
          "NTOTTI MARKET SQUARE / A": [
            {
              station: "180",
              voters: 180
            },
          ],
          "NYAN MARKET SQUARE / A": [
            {
              station: "285",
              voters: 285
            },
          ],
          "ROONDOP SQUARE / A": [
            {
              station: "125",
              voters: 125
            },
          ],
          "SANGHERI VEKOVI / A": [
            {
              station: "235",
              voters: 235
            },
          ],
          "SAR / SM JAKIRI. / A": [
            {
              station: "373",
              voters: 373
            },
          ],
          "SAR / SM SOP / A": [
            {
              station: "134",
              voters: 134
            },
          ],
          "SHIY COOPERATIVE / A": [
            {
              station: "349",
              voters: 349
            },
          ],
          "SOP HEALTH CENTRE / A": [
            {
              station: "249",
              voters: 249
            },
          ],
          "TAAVIRER SAMBA HOUSE / A": [
            {
              station: "112",
              voters: 112
            },
          ],
          "VEKOVI COOPERATIVE / A": [
            {
              station: "353",
              voters: 353
            },
          ],
          "VEKOVI HEALTH CENTRE / A": [
            {
              station: "243",
              voters: 243
            },
          ],
          "WAINKAR COOPERATIVE / A": [
            {
              station: "386",
              voters: 386
            },
          ],
          "WASI COOPERATIVE / A": [
            {
              station: "356",
              voters: 356
            },
          ],
          "WVEM COOPERATIVE / A": [
            {
              station: "377",
              voters: 377
            },
          ],
        },
        "KUMBO": {
          "C.B.C BAMDZENG / A": [
            {
              station: "G.B.H.S.",
              voters: 4023
            },
            {
              station: "KUMBO",
              voters: 4023
            },
          ],
          "G.S. BAMNGAM / A": [
            {
              station: "GPS",
              voters: 253
            },
            {
              station: "TOBIN",
              voters: 253
            },
          ],
          "G.S. KAI / A": [
            {
              station: "DELEGATION",
              voters: 3100
            },
            {
              station: "SOCIAL",
              voters: 521
            },
            {
              station: "AFFAIRS",
              voters: 3100
            },
          ],
          "SALAMA HOUSE TAKUM / A": [
            {
              station: "YOUTH",
              voters: 2579
            },
          ],
        },
        "MBIAME": {
          "AGRIC POST MBONSO / A": [
            {
              station: "MBIAME",
              voters: 7294
            },
            {
              station: "COUNCIL",
              voters: 4289
            },
            {
              station: "HALL",
              voters: 7294
            },
          ],
          "G.S NJANAWA / A": [
            {
              station: "COOPERATIVE",
              voters: 3005
            },
          ],
          "G.S TANYAR / A": [
            {
              station: "217",
              voters: 217
            },
          ],
          "I.P.S NJANAWA / A": [
            {
              station: "293",
              voters: 293
            },
          ],
        },
        "NKOR": {
          "G.S. BAMTI / A": [
            {
              station: "GOVERNMENT",
              voters: 6446
            },
            {
              station: "SCHOOL",
              voters: 6446
            },
            {
              station: "NYALIN",
              voters: 6446
            },
          ],
          "G.S. DOM / A": [
            {
              station: "NKOR",
              voters: 2383
            },
            {
              station: "COMMUNITY",
              voters: 2383
            },
            {
              station: "HALL",
              voters: 2383
            },
          ],
        },
        "NKUM": {
          "G.S. BANTEN / A": [
            {
              station: "G.S",
              voters: 10168
            },
            {
              station: "TATUM",
              voters: 10168
            },
          ],
        },
        "WUM": {
          "AKU COMMUNITY HALL / A": [
            {
              station: "KESU",
              voters: 2582
            },
            {
              station: "COURT",
              voters: 2582
            },
            {
              station: "HALL",
              voters: 2582
            },
          ],
          "ATUE COMMUNITY HALL / A": [
            {
              station: "GBHS",
              voters: 1666
            },
            {
              station: "WUM",
              voters: 5651
            },
          ],
          "CATHOLIC PRIMARY SCHOOL HOLY  TRINITY WUM / A": [
            {
              station: "280",
              voters: 280
            },
          ],
          "CHEREGHA HALL / A": [
            {
              station: "GRANDSTAND",
              voters: 1536
            },
          ],
          "DEL. BASIC EDUCATION / A": [
            {
              station: "310",
              voters: 310
            },
          ],
          "FORMER DOM. SCIENCE CENTRE / A": [
            {
              station: "338",
              voters: 338
            },
          ],
          "G. S AGULLI / A": [
            {
              station: "G.S",
              voters: 1597
            },
            {
              station: "BANGWE",
              voters: 600
            },
          ],
          "G. S ZONGEFUH / A": [
            {
              station: "297",
              voters: 594
            },
          ],
          "G. S. MBINJAM / A": [
            {
              station: "GNPS",
              voters: 2449
            },
          ],
          "G. S. NGOH WANANGWEN / A": [
            {
              station: "180",
              voters: 180
            },
          ],
          "G. S. WANANGWEN / A": [
            {
              station: "169",
              voters: 169
            },
          ],
          "GOYT NURSERY SCHOOL / A": [
            {
              station: "327",
              voters: 327
            },
          ],
          "GOYT NURSERY SCHOOL / B": [
            {
              station: "173",
              voters: 173
            },
          ],
          "GTHS JUNCTION / A": [
            {
              station: "362",
              voters: 362
            },
          ],
          "GTHS JUNCTION / B": [
            {
              station: "160",
              voters: 160
            },
          ],
          "HAUSA COMM. HALL / A": [
            {
              station: "308",
              voters: 308
            },
          ],
          "HAUSA COMM. HALL / B": [
            {
              station: "208",
              voters: 208
            },
          ],
          "MEMBERS CLUB 64 / A": [
            {
              station: "250",
              voters: 250
            },
          ],
          "WAAJUNG HALL / A": [
            {
              station: "353",
              voters: 353
            },
          ],
          "WATUO VILLAGE HALL / A": [
            {
              station: "225",
              voters: 225
            },
          ],
          "ZONGEKWO HALL / A": [
            {
              station: "294",
              voters: 294
            },
          ],
          "ZONGEKWO HALL / B": [
            {
              station: "234",
              voters: 234
            },
          ],
          "ZONGETIA HALL / A": [
            {
              station: "159",
              voters: 159
            },
          ],
        },
      },
      "MENCHUM": {
        "FURU AWA": {
          "G. S. LUBU / A": [
            {
              station: "LUBU",
              voters: 493
            },
          ],
          "G.S. AKUM / A": [
            {
              station: "G.S",
              voters: 3931
            },
            {
              station: "FURU-AWA",
              voters: 3438
            },
          ],
          "P.C. BADJI / A": [
            {
              station: "CATHOLIC",
              voters: 985
            },
            {
              station: "CHURCH",
              voters: 985
            },
            {
              station: "NSER",
              voters: 985
            },
          ],
        },
        "ZHOA": {
          "ABAR HEALTH CENTRE / A": [
            {
              station: "ZHOA",
              voters: 318
            },
            {
              station: "COMMUNITY",
              voters: 318
            },
            {
              station: "HALL",
              voters: 318
            },
          ],
          "ALLOH MARKET SQUARE / A": [
            {
              station: "MMEN",
              voters: 4760
            },
            {
              station: "MARKET",
              voters: 4760
            },
            {
              station: "SQAURE",
              voters: 4760
            },
            {
              station: "(MCDA",
              voters: 4760
            },
            {
              station: "multipurpose",
              voters: 4760
            },
            {
              station: "hall",
              voters: 4760
            },
            {
              station: "Bafmeng)",
              voters: 4760
            },
          ],
        },
      },
    },
  },
};
