export const ENTERPRISE_CODE = "EN001N";
export const BRAND_CODE = "EB00000T";
export const EMPLOYEE_CODE = "E0001QZC";
import { t } from "@/utils/translate";

export const PROVIDERS = [
  {
    label: "PT",
    value: "PTGame",
    tags: "SX DZ SLOT BY",
  },
  {
    label: "EVO",
    value: "EVOGame",
    tags: "SX DZ SB",
  },
  {
    label: "TF",
    value: "TF_TFGame",
    tags: "DJ",
  },
  {
    label: "CQ9",
    value: "CQ9Game",
    tags: "DZ SLOT SD SB BY",
  },
  {
    label: "CMD",
    value: "CMDGame",
    tags: "TY",
  },
  {
    label: "SABA",
    value: "SABAGame",
    tags: "TY",
  },
  {
    label: "SBO",
    value: "SBOGame",
    tags: "SX TY DZ SB",
  },
  {
    label: "KM",
    value: "AWC_KINGMAKERGame",
    tags: "DZ",
  },
  {
    label: "SEXY",
    value: "AWC_SEXYBCRTGame",
    tags: "SX SB",
  },
  {
    label: "E1",
    value: "AWC_E1SPORTGame",
    tags: "DJ",
  },
  {
    label: "AG",
    value: "TCG_AGGame",
    tags: "SX SB",
  },
  {
    label: "BBIN",
    value: "TCG_BBINGame",
    tags: "SX SD SB",
  },
  {
    label: "DG",
    value: "TCG_DGGame",
    tags: "SX SD SB",
  },
  {
    label: "SA",
    value: "TCG_SAGame",
    tags: "SX",
  },
  {
    label: "TCG",
    value: "TCG_LOTTOGame",
    tags: "CP",
  },
  {
    label: "GW",
    value: "GWGame",
    tags: "CP",
  },
  {
    label: "GPI",
    value: "GPIGame",
    tags: "CP",
  },
  {
    label: "WM",
    value: "WMGame",
    tags: "SX",
  },
  {
    label: "V8",
    value: "V8PokerGame",
    tags: "DZ",
  },
  {
    label: "AE",
    value: "AWC_AEGame",
    tags: "DZ",
  },
  {
    label: "FB",
    value: "TCG_FBGame",
    tags: "FB",
  },
];

export const providerMap = {
  HOT: ["EVO", "SEXY", "M8", "CQ9", "JDB", "VR", "NW", "IM", "YL"], // 热门 1
  SX: ["IBA", "SEXY", "WM", "OG", "EVO", "BG"], // 真人 1
  TY: ["M8", "DB", "POLY"], // 体育 1
  CP: ["VR", "BBIN"], // 彩票 1
  BY: ["CQ9", "JDB", "BBIN", "YL"], // 捕鱼 1
  CF: ["RCB988"], // 赛马 1
  DZ: ["YGR", "AMEBA", "CQ9", "JDB", "SG", "JOKER", "BBIN", "VG"], // 电子 1
  // SLOT: ["CQ9", "PT"], // 老虎机
  DJ: ["IM"], // 电竞 1
  QP: ["NW", "JDB", "LEG", "VG", "KY"], // 棋牌 1
};

export const GAME_TYPES = (lang = "zh") => {
  return [
    {
      label: t("hot", null, lang),
      value: "HOT",
      iconValue: "hot",
      icon: "icon-hot",
      iconOn: "icon-hot-on",
    },
    {
      label: t("live", null, lang),
      value: "SX",
      iconValue: "live",
      icon: "icon-live",
      iconOn: "icon-live-on",
    },
    {
      label: t("sports", null, lang),
      value: "TY",
      iconValue: "sports",
      icon: "icon-sports",
      iconOn: "icon-sports-on",
    },
    {
      label: t("egame", null, lang),
      value: "DZ",
      iconValue: "egame",
      icon: "icon-egame",
      iconOn: "icon-egame-on",
    },
    {
      label: t("chess", null, lang),
      value: "QP",
      iconValue: "chess",
      icon: "icon-chess",
      iconOn: "icon-chess-on",
    },
    {
      label: t("lottery", null, lang),
      value: "CP",
      iconValue: "lottery",
      icon: "icon-lottery",
      iconOn: "icon-lottery-on",
    },
    {
      label: t("esports", null, lang),
      value: "DJ",
      iconValue: "esports",
      icon: "icon-esports",
      iconOn: "icon-esports-on",
    },

    // {
    //   label: t("slot", null, lang),
    //   value: "SLOT",
    //   iconValue: "slot",
    //   icon: "icon-slot",
    //   iconOn: "icon-slot-on",
    // },
    {
      label: t("cock", null, lang),
      value: "RH",
      iconValue: "cock",
      icon: "icon-cock",
    },

    // {
    //   label: t("sicbo", null, lang),
    //   value: "SB",
    //   iconValue: "sicbo",
    //   icon: "icon-sicbo",
    //   iconOn: "icon-sicbo-on",
    // },
    // {
    //   label: t("discJolt", null, lang),
    //   value: "SD",
    //   iconValue: "discJolt",
    //   icon: "icon-discjolt",
    //   iconOn: "icon-discjolt-on",
    // },
    {
      label: t("fishing", null, lang),
      value: "BY",
      iconValue: "fishing",
      icon: "icon-fishing",
      iconOn: "icon-fishing-on",
    },
  ];
};

export const PROMO_TYPES = [
  {
    name_zh: "全部",
    name_en: "all",
    name_vi: "Tất cả",
    value: "",
  },
  {
    name_zh: "精选",
    name_en: "recommend",
    name_vi: "Đặc sắc",
    value: "Featured",
  },
  {
    name_zh: "新成员",
    name_en: "new member",
    name_vi: "Tân thủ",
    value: "Newmember",
  },
  // {
  //     name_zh: 'World Cup 2022',
  //     name_en: 'World Cup 2022',
  //     name_vi: 'World Cup 2022',
  //     value: 'Sport',
  // },
  {
    name_zh: "真人",
    name_en: "live casino",
    name_vi: "Casino",
    value: "Live",
  },
  {
    name_zh: "返水",
    name_en: "bonus",
    name_vi: "Hoàn trả",
    value: "Rebate",
  },
];

export const GAME_LOBBY = [];

export const GAME_ENTRIES = [
  //SX
  {
    biggametype: "SX",
    gameid: "IBAGame",
    gametype: "IBAGame",
    gamecode: "IBAGame",
    playtype: "",
    provider: "IBA",
  },
  {
    biggametype: "SX",
    gameid: "AWC_SEXYBCRTGame",
    gametype: "AWC_SEXYBCRTGame",
    gamecode: "",
    playtype: "",
    provider: "SEXY",
    isHot: true,
  },
  {
    biggametype: "SX",
    gameid: "WMGame",
    gametype: "WMGame",
    gamecode: "",
    playtype: "",
    provider: "WM",
  },
  {
    biggametype: "SX",
    gameid: "OGLIVEGame",
    gametype: "OGLIVEGame",
    gamecode: "",
    playtype: "",
    provider: "OG",
  },
  {
    biggametype: "SX",
    gameid: "EVOGame",
    gametype: "EVOGame",
    gamecode: "",
    playtype: "",
    provider: "EVO",
    isHot: true,
  },
  {
    biggametype: "SX",
    gameid: "BGGame",
    gametype: "BGGame",
    gamecode: "SX",
    playtype: "",
    provider: "BG",
  },
  // TY
  {
    biggametype: "TY",
    gameid: "M8Game",
    gametype: "M8Game",
    gamecode: "",
    playtype: "",
    provider: "M8",
    isHot: true,
  },
  {
    biggametype: "TY",
    gameid: "DBGame",
    gametype: "DBGame",
    gamecode: "",
    playtype: "",
    provider: "DB",
  },
  {
    biggametype: "TY",
    gameid: "POLYGame",
    gametype: "POLYGame",
    gamecode: "",
    playtype: "",
    provider: "POLY",
  },
  // DZ
  {
    biggametype: "DZ",
    gameid: "YGRGame",
    gametype: "YGRGame",
    gamecode: "055",
    playtype: "",
    provider: "YGR",
  },
  {
    biggametype: "DZ",
    gameid: "AMEBAGame",
    gametype: "AMEBAGame",
    gamecode: "1",
    playtype: "",
    provider: "AMEBA",
  },
  {
    biggametype: "DZ",
    gameid: "CQ9Game",
    gametype: "CQ9Game",
    gamecode: "61",
    playtype: "",
    provider: "CQ9",
    isHot: true,
  },
  {
    biggametype: "DZ",
    gameid: "JDBGame",
    gametype: "JDBGame",
    gamecode: "61",
    playtype: "",
    provider: "JDB",
    isHot: true,
  },
  {
    biggametype: "DZ",
    gameid: "SGSlotsGame",
    gametype: "SGSlotsGame",
    gamecode: "SG",
    playtype: "",
    provider: "SG",
  },
  {
    biggametype: "DZ",
    gameid: "JOKERGame",
    gametype: "JOKERGame",
    gamecode: "c53raraonrmbq",
    playtype: "",
    provider: "JOKER",
  },
  {
    biggametype: "DZ",
    gameid: "BBINGame",
    gametype: "BBINGame",
    gamecode: "BBINGame",
    playtype: "game",
    provider: "BBIN",
  },
  {
    biggametype: "DZ",
    gameid: "VGGame",
    gametype: "VGGame",
    gamecode: "",
    playtype: "",
    provider: "VG",
  },
  // QP
  {
    biggametype: "QP",
    gameid: "NWGame",
    gametype: "NWGame",
    gamecode: "NWGame",
    playtype: "",
    provider: "NW",
    isHot: true,
  },
  {
    biggametype: "QP",
    gameid: "JDBGame",
    gametype: "JDBGame",
    gamecode: "18",
    playtype: "",
    provider: "JDB",
  },
  {
    biggametype: "QP",
    gameid: "LEGGame",
    gametype: "LEGGame",
    gamecode: "LEGGame",
    playtype: "",
    provider: "LEG",
  },
  {
    biggametype: "QP",
    gameid: "VGGame",
    gametype: "VGGame",
    gamecode: "",
    playtype: "",
    provider: "VG",
  },
  {
    biggametype: "QP",
    gameid: "KYGame",
    gametype: "KYGame",
    gamecode: "",
    playtype: "",
    provider: "KY",
  },
  // CP
  {
    biggametype: "CP",
    gameid: "VRGame",
    gametype: "VRGame",
    gamecode: "VRGame",
    playtype: "",
    provider: "VR",
    isHot: true,
  },
  {
    biggametype: "CP",
    gameid: "BBINGame",
    gametype: "BBINGame",
    gamecode: "BBINGame",
    playtype: "Ltlottery",
    provider: "BBIN",
  },
  // DJ
  {
    biggametype: "DJ",
    gameid: "IMONEGame",
    gametype: "IMONEGame",
    gamecode: "IMONEGame",
    playtype: "",
    provider: "IM",
    isHot: true,
  },
  // CF
  {
    biggametype: "CF",
    gameid: "AWC_HORSEBOOK",
    gametype: "AWC_HORSEBOOK",
    gamecode: "AWC_HORSEBOOK",
    playtype: "",
    provider: "RCB988",
  },
  // BY
  {
    biggametype: "BY",
    gameid: "CQ9Game",
    gametype: "CQ9Game",
    gamecode: "",
    playtype: "",
    provider: "CQ9",
  },
  {
    biggametype: "BY",
    gameid: "JDBGame",
    gametype: "JDBGame",
    gamecode: "7",
    playtype: "",
    provider: "JDB",
  },
  {
    biggametype: "BY",
    gameid: "BBINGame",
    gametype: "BBINGame",
    gamecode: "BBINGame",
    playtype: "fisharea",
    provider: "BBIN",
  },
  {
    biggametype: "BY",
    gameid: "YLGame",
    gametype: "YLGame",
    gamecode: "YLGame",
    playtype: "",
    provider: "YL",
    isHot: true,
  },

  // // TY
  // {
  //   biggametype: "TY",
  //   gameid: "CMDGame",
  //   stype: "ESPORTS",
  //   cnname: "CMD 体育",
  //   gametype: "CMDGame",
  //   viname: "CMD sports",
  //   playtimes: 6793,
  //   id: 4535,
  //   category: "ESPORTS",
  //   gamecode: "CMDGame",
  //   enname: "CMD sports",
  //   provider: "CMD",
  //   isHot: true,
  // },
  // {
  //   biggametype: "TY",
  //   gameid: "SABAGame",
  //   stype: "SPORTS",
  //   cnname: "沙巴体育",
  //   gametype: "SABAGame",
  //   viname: "SABA sports",
  //   playtimes: 15776,
  //   id: 4548,
  //   category: "SPORTS",
  //   gamecode: "SABAGame",
  //   enname: "SABA sports",
  //   provider: "SABA",
  //   isHot: true,
  // },
  // {
  //   biggametype: "TY",
  //   gameid: "SportsBook",
  //   stype: "SPORTS",
  //   cnname: "SBOBET 体育",
  //   gametype: "SBOGame",
  //   viname: "SBOBET sports",
  //   playtimes: 2486,
  //   id: 4568,
  //   category: "SPORTS",
  //   gamecode: "SportsBook",
  //   enname: "SBOBET sports",
  //   provider: "SBO",
  // },
  // {
  //   biggametype: "TY",
  //   gameid: "FB0001",
  //   stype: "SPORTS",
  //   cnname: "FB 体育",
  //   gametype: "TCG_FBGame",
  //   viname: "FB sports",
  //   playtimes: 1000,
  //   id: 4710,
  //   category: "SPORTS",
  //   gamecode: "FB0001",
  //   enname: "FB sports",
  //   provider: "FB",
  //   isHot: true,
  // },
  // {
  //   biggametype: "TY",
  //   gameid: "M8Game",
  //   stype: "SPORTS",
  //   cnname: "M8 体育",
  //   gametype: "M8Game",
  //   id: 1,
  //   gamecode: "M8Game",
  //   provider: "M8",
  //   isHot: true,
  // },
  // // CP
  // {
  //   biggametype: "CP",
  //   gameid: "-1",
  //   stype: null,
  //   cnname: "GW彩票",
  //   gametype: "GWGame",
  //   viname: "GW Lottery",
  //   playtimes: 3106,
  //   id: 4696,
  //   category: null,
  //   gamecode: "-1",
  //   enname: "GW Lottery",
  //   provider: "GW",
  //   isHot: true,
  // },
  // {
  //   biggametype: "CP",
  //   gameid: "lottery",
  //   stype: "lottery",
  //   cnname: "GPI彩票",
  //   gametype: "GPIGame",
  //   viname: "GPI Lottery",
  //   playtimes: 1327,
  //   id: 4667,
  //   category: "OTHER",
  //   gamecode: "lottery",
  //   enname: "GPI Lottery",
  //   provider: "GPI",
  // },
  // {
  //   biggametype: "CP",
  //   gameid: "lobby",
  //   stype: "lobby",
  //   cnname: "TCG彩票大厅",
  //   gametype: "TCG_LOTTOGame",
  //   viname: "TCG Sảnh lottery",
  //   playtimes: 2672,
  //   id: 4653,
  //   category: "OTHER",
  //   gamecode: "lobby",
  //   enname: "TCG lottery Lobby",
  //   provider: "TCG",
  // },
  // {
  //   biggametype: "CP",
  //   provider: "ON",
  //   gameid: "ONGame",
  //   stype: "OTHER",
  //   gametype: "ONGame",
  //   cnname: "on彩票",
  //   viname: "ON Lottery",
  //   enname: "ON Lottery",
  //   id: 4713,
  //   category: "OTHER",
  //   gamecode: "ONGame",
  // },
  // {
  //   biggametype: "CP",
  //   gameid: "VRGame",
  //   stype: "SPORTS",
  //   cnname: "VR 彩票",
  //   gametype: "VRGame",
  //   id: 1,
  //   gamecode: "VRGame",
  //   provider: "VR",
  //   isHot: true,
  // },
  // // SX
  // {
  //   biggametype: "SX",
  //   gameid: "AWC_SEXYBCRTGame",
  //   stype: "BAC",
  //   cnname: "SEXY live",
  //   gametype: "AWC_SEXYBCRTGame",
  //   viname: "SEXY live",
  //   playtimes: 10842,
  //   id: 4539,
  //   category: "OTHER",
  //   gamecode: "AWC_SEXYBCRTGame",
  //   enname: "SEXY live",
  //   provider: "SEXY",
  //   isHot: true,
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "WMGame",
  //   stype: "OTHER",
  //   cnname: "WM真人大厅",
  //   gametype: "WMGame",
  //   viname: "Sảnh WM",
  //   playtimes: 23309,
  //   id: 4668,
  //   category: "OTHER",
  //   gamecode: "WMGame",
  //   enname: "WM Live Lobby",
  //   provider: "WM",
  //   isHot: true,
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "BEST_AGGame",
  //   stype: "OTHER",
  //   gametype: "BEST_AGGame",
  //   viname: "AG Lobby",
  //   enname: "AG Lobby",
  //   cnname: "AG真人",
  //   playtimes: 2430,
  //   id: 4714,
  //   category: "OTHER",
  //   gamecode: "BEST_AGGame",
  //   provider: "AG",
  //   isHot: true,
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "DGGame",
  //   stype: "OTHER",
  //   cnname: "DG真人",
  //   viname: "DG Lobby",
  //   enname: "DG Lobby",
  //   gametype: "DGGame",
  //   playtimes: 3172,
  //   id: 4715,
  //   category: "OTHER",
  //   gamecode: "DGGame",
  //   provider: "DG",
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "BBB001",
  //   stype: "BBB001",
  //   cnname: "BBIN 真人大厅",
  //   gametype: "TCG_BBINGame",
  //   viname: "Sảnh BBIN",
  //   playtimes: 985,
  //   id: 4651,
  //   category: "OTHER",
  //   gamecode: "BBB001",
  //   enname: "BBIN Live Lobby",
  //   provider: "BBIN",
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "Casino",
  //   stype: null,
  //   cnname: "SBO Live",
  //   gametype: "SBOGame",
  //   viname: "SBO Live",
  //   playtimes: 801,
  //   id: 4569,
  //   category: null,
  //   gamecode: "Casino",
  //   enname: "SBO Live",
  //   provider: "SBO",
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "top_games",
  //   stype: "top_games",
  //   cnname: "EVO真人大厅",
  //   gametype: "EVOGame",
  //   viname: "EVO Live Lobby",
  //   playtimes: 1161,
  //   id: 4654,
  //   category: "OTHER",
  //   gamecode: "top_games",
  //   enname: "EVO Live Lobby",
  //   provider: "EVO",
  //   isHot: true,
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "ubal",
  //   stype: "live",
  //   cnname: "PT 真人大厅",
  //   gametype: "PTGame",
  //   viname: "Sảnh PT",
  //   playtimes: 832,
  //   id: 4655,
  //   category: "OTHER",
  //   gamecode: "ubal",
  //   enname: "PT Live Lobby",
  //   provider: "PT",
  // },
  // {
  //   biggametype: "SX",
  //   gameid: "SA0001",
  //   stype: "SA0001",
  //   cnname: "SA 真人大厅",
  //   gametype: "TCG_SAGame",
  //   viname: "Sảnh SA",
  //   playtimes: 1386,
  //   id: 4652,
  //   category: "OTHER",
  //   gamecode: "SA0001",
  //   enname: "SA Live Lobby",
  //   provider: "SA",
  // },
  // // SD
  // {
  //   biggametype: "SD",
  //   gameid: "BBB009",
  //   stype: "BBB009",
  //   cnname: "BBIN 色碟",
  //   gametype: "TCG_BBINGame",
  //   viname: "BBIN XỐC DĨA",
  //   playtimes: 1371,
  //   id: 4657,
  //   category: "OTHER",
  //   gamecode: "BBB009",
  //   enname: "BBIN Se Die",
  //   provider: "BBIN",
  // },
  // {
  //   biggametype: "SD",
  //   gameid: "DG0013",
  //   stype: "DG0013",
  //   cnname: "DG 色碟",
  //   gametype: "TCG_DGGame",
  //   viname: "DG XỐC DĨA",
  //   playtimes: 1071,
  //   id: 4658,
  //   category: "OTHER",
  //   gamecode: "DG0013",
  //   enname: "DG Se Die",
  //   provider: "DG",
  // },
  // {
  //   biggametype: "SD",
  //   gameid: "",
  //   stype: "OTHER",
  //   cnname: "WM 色碟",
  //   gametype: "WMGame",
  //   viname: "WM XỐC DĨA",
  //   playtimes: 1819,
  //   id: 4699,
  //   category: "OTHER",
  //   gamecode: "onlysedie",
  //   enname: "WM Se Die",
  //   provider: "WM",
  // },
  // // SB
  // {
  //   biggametype: "SB",
  //   gameid: "top_games",
  //   stype: "top_games",
  //   cnname: "EVO 骰宝",
  //   gametype: "EVOGame",
  //   viname: "EVO Tài Xỉu",
  //   playtimes: 843,
  //   id: 4660,
  //   category: "OTHER",
  //   gamecode: "top_games",
  //   enname: "EVO Sicbo",
  //   provider: "EVO",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "Casino",
  //   stype: "Casino",
  //   cnname: "SBO 骰宝",
  //   gametype: "SBOGame",
  //   viname: "SBO Tài Xỉu",
  //   playtimes: 768,
  //   id: 4661,
  //   category: "OTHER",
  //   gamecode: "Casino",
  //   enname: "SBO Sicbo",
  //   provider: "SBO",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "AWC_SEXYBCRTGame",
  //   stype: "AWC_SEXYBCRTGame",
  //   cnname: "SEXY 骰宝",
  //   gametype: "AWC_SEXYBCRTGame",
  //   viname: "SEXY Tài Xỉu",
  //   playtimes: 753,
  //   id: 4662,
  //   category: "OTHER",
  //   gamecode: "AWC_SEXYBCRTGame",
  //   enname: "SEXY Sicbo",
  //   provider: "SEXY",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "A00070",
  //   stype: "A00070",
  //   cnname: "AG 骰宝",
  //   gametype: "TCG_AGGame",
  //   viname: "AG Tài Xỉu",
  //   playtimes: 672,
  //   id: 4663,
  //   category: "OTHER",
  //   gamecode: "A00070",
  //   enname: "AG Sicbo",
  //   provider: "AG",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "DG0013",
  //   stype: "DG0013",
  //   cnname: "DG 骰宝",
  //   gametype: "TCG_DGGame",
  //   viname: "DG Tài Xỉu",
  //   playtimes: 675,
  //   id: 4664,
  //   category: "OTHER",
  //   gamecode: "DG0013",
  //   enname: "DG Sicbo",
  //   provider: "DG",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "BBB001",
  //   stype: "BBB001",
  //   cnname: "BBIN 骰宝",
  //   gametype: "TCG_BBINGame",
  //   viname: "BBIN Tài Xỉu",
  //   playtimes: 665,
  //   id: 4665,
  //   category: "OTHER",
  //   gamecode: "BBB001",
  //   enname: "BBIN Sicbo",
  //   provider: "BBIN",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "SA0001",
  //   stype: "SA0001",
  //   cnname: "SA 骰宝",
  //   gametype: "TCG_SAGame",
  //   viname: "SA Tài Xỉu",
  //   playtimes: 766,
  //   id: 4666,
  //   category: "OTHER",
  //   gamecode: "SA0001",
  //   enname: "SA Sicbo",
  //   provider: "SA",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "207",
  //   stype: "arcade",
  //   cnname: "泰式骰宝",
  //   gametype: "CQ9Game",
  //   viname: "Thai HILO",
  //   playtimes: 961,
  //   id: 3921,
  //   category: "OTHER",
  //   gamecode: "207",
  //   enname: "Thai HILO",
  //   provider: "CQ9",
  // },
  // {
  //   biggametype: "SB",
  //   gameid: "6103",
  //   stype: null,
  //   cnname: "皇家骰宝",
  //   gametype: "SBOGame",
  //   viname: "Royal sic bo",
  //   playtimes: 1085,
  //   id: 4572,
  //   category: "OTHER",
  //   gamecode: "6103",
  //   enname: "Royal sic bo",
  //   provider: "SBO",
  // },
  // // CF
  // {
  //   biggametype: "CF",
  //   provider: "FA",
  //   gametype: "FAGame",
  //   id: 4711,
  //   gameid: "FAGame",
  //   gamecode: "FAGame",
  //   category: "OTHER",
  //   stype: "OTHER",
  //   cnname: "斗鸡",
  //   viname: "ĐÁ GÀ",
  //   enname: "cockfight",
  //   playtimes: 1190,
  // },
  // {
  //   biggametype: "CF",
  //   provider: "WGB",
  //   gametype: "WGBGame",
  //   id: 4712,
  //   gameid: "WGBGame",
  //   gamecode: "WGBGame",
  //   category: "OTHER",
  //   stype: "OTHER",
  //   cnname: "斗鸡",
  //   viname: "ĐÁ GÀ",
  //   enname: "cockfight",
  //   playtimes: 1190,
  // },
  // // DZ
  // {
  //   biggametype: "DZ",
  //   gameid: "EGAME",
  //   stype: null,
  //   cnname: "AE电子",
  //   gametype: "AWC_AEGame",
  //   viname: "AEGaming",
  //   playtimes: 1190,
  //   id: 4704,
  //   category: "OTHER",
  //   gamecode: "EGAME",
  //   enname: "AEGaming",
  //   provider: "AE",
  // },
  // {
  //   biggametype: "DZ",
  //   gameid: "0",
  //   stype: "OTHER",
  //   cnname: "V8 Poker",
  //   gametype: "V8PokerGame",
  //   viname: "V8 Poker",
  //   playtimes: 1505,
  //   id: 4697,
  //   category: "OTHER",
  //   gamecode: "0",
  //   enname: "V8 Poker",
  //   provider: "V8",
  //   isHot: true,
  // },
  // {
  //   biggametype: "DZ",
  //   gameid: "AWC_KINGMAKERGame",
  //   stype: "OTHER",
  //   cnname: "KINGMAKER",
  //   gametype: "AWC_KINGMAKERGame",
  //   viname: "KINGMAKER",
  //   playtimes: 1364,
  //   id: 4543,
  //   category: "OTHER",
  //   gamecode: "AWC_KINGMAKERGame",
  //   enname: "KINGMAKER",
  //   provider: "KM",
  // },
  // {
  //   biggametype: "DZ",
  //   gameid: "61",
  //   stype: "arcade",
  //   cnname: "天天吃豆",
  //   gametype: "CQ9Game",
  //   viname: "Mr. Bean",
  //   playtimes: 599,
  //   id: 3908,
  //   category: "ARCADE",
  //   gamecode: "61",
  //   enname: "Mr. Bean",
  //   provider: "CQ9",
  //   isHot: true,
  // },
  // // new
  // {
  //   biggametype: "DZ",
  //   gameid: "",
  //   stype: "",
  //   cnname: "JDB电子",
  //   gametype: "JDBGame",
  //   viname: "",
  //   playtimes: "",
  //   id: "",
  //   category: "",
  //   gamecode: "",
  //   enname: "",
  //   provider: "JDB",
  //   isHot: true,
  // },
  // // DJ
  // {
  //   biggametype: "DJ",
  //   gameid: "AWC_E1SPORTGame",
  //   stype: "ESPORTS",
  //   cnname: "E1SPORT esports",
  //   gametype: "AWC_E1SPORTGame",
  //   viname: "E1SPORT esports",
  //   playtimes: 805,
  //   id: 4547,
  //   category: "ESPORTS",
  //   gamecode: "AWC_E1SPORTGame",
  //   enname: "E1SPORT esports",
  //   provider: "E1",
  //   isHot: true,
  // },
  // {
  //   biggametype: "DJ",
  //   gameid: "1",
  //   stype: "OTHER",
  //   cnname: "TF 电竞",
  //   gametype: "TF_TFGame",
  //   viname: "TF esports",
  //   playtimes: 886,
  //   id: 4656,
  //   category: "OTHER",
  //   gamecode: "1",
  //   enname: "TF esports",
  //   provider: "TF",
  // },

  // {
  //   biggametype: "BY",
  //   gameid: "YLGame",
  //   stype: "SPORTS",
  //   cnname: "YL 捕鱼",
  //   gametype: "YLGame",
  //   id: 1,
  //   gamecode: "",
  //   provider: "YL",
  //   isHot: true,
  // },
];
