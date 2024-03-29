export const ENTERPRISE_CODE = 'EN001N';
export const BRAND_CODE = 'EB00000T';
import { t } from '@/utils/translate';

export const PROVIDERS = [
    {
        label: 'PT',
        value: 'PTGame',
        tags: 'SX DZ SLOT BY',
    },
    {
        label: 'EVO',
        value: 'EVOGame',
        tags: 'SX DZ SB',
    },
    {
        label: 'TF',
        value: 'TF_TFGame',
        tags: 'DJ',
    },
    {
        label: 'CQ9',
        value: 'CQ9Game',
        tags: 'DZ SLOT SD SB BY',
    },
    {
        label: 'CMD',
        value: 'CMDGame',
        tags: 'TY',
    },
    {
        label: 'SABA',
        value: 'SABAGame',
        tags: 'TY',
    },
    {
        label: 'SBO',
        value: 'SBOGame',
        tags: 'SX TY DZ SB',
    },
    {
        label: 'KM',
        value: 'AWC_KINGMAKERGame',
        tags: 'DZ',
    },
    {
        label: 'SEXY',
        value: 'AWC_SEXYBCRTGame',
        tags: 'SX SB',
    },
    {
        label: 'E1',
        value: 'AWC_E1SPORTGame',
        tags: 'DJ',
    },
    {
        label: 'AG',
        value: 'TCG_AGGame',
        tags: 'SX SB',
    },
    {
        label: 'BBIN',
        value: 'TCG_BBINGame',
        tags: 'SX SD SB',
    },
    {
        label: 'DG',
        value: 'TCG_DGGame',
        tags: 'SX SD SB',
    },
    {
        label: 'SA',
        value: 'TCG_SAGame',
        tags: 'SX',
    },
    {
        label: 'TCG',
        value: 'TCG_LOTTOGame',
        tags: 'CP',
    },
    {
        label: 'GW',
        value: 'GWGame',
        tags: 'CP',
    },
    {
        label: 'GPI',
        value: 'GPIGame',
        tags: 'CP',
    },
    {
        label: 'WM',
        value: 'WMGame',
        tags: 'SX',
    },
    {
        label: 'V8',
        value: 'V8PokerGame',
        tags: 'DZ',
    },
    {
        label: 'AE',
        value: 'AWC_AEGame',
        tags: 'DZ',
    },
    {
        label: 'FB',
        value: 'TCG_FBGame',
        tags: 'FB',
    },
];

export const providerMap = {
    HOT: [],
    // HOT: ['FB', 'WM', 'SEXY', 'AG', 'GW'],
    SX: ['WM', 'AG', 'SEXY', 'DG', 'SBO', 'BBIN', 'SA', 'PT', 'EVO'],
    TY: ['SABA', 'CMD', 'SBO', 'FB'],
    CP: ['GW', 'GPI', 'TCG', 'ON'],
    BY: ['CQ9', 'PT'],
    CF: ['FA', 'WGB'],
    DZ: ['AE', 'V8', 'KM', 'SBO', 'PT', 'CQ9'],
    SLOT: ['CQ9', 'PT'],
    DJ: ['E1', 'TF'],
}

export const GAME_TYPES = (lang = 'vi') => {
    return [
        {
            label: t('cock', null, lang),
            value: 'CF',
            icon: 'icon-cock',
        },
        {
            label: t('live', null, lang),
            value: 'SX',
            icon: 'icon-live',
            iconOn: 'icon-live-on',
        },
        {
            label: t('sports', null, lang),
            value: 'TY',
            icon: 'icon-sports',
            iconOn: 'icon-sports-on',
        },
        {
            label: t('lottery', null, lang),
            value: 'CP',
            icon: 'icon-lottery',
            iconOn: 'icon-lottery-on',
        },
        // {
        //     label: t('sicbo', null, lang),
        //     value: 'SB',
        //     icon: 'icon-sicbo',
        //     iconOn: 'icon-sicbo-on',
        // },
        // {
        //     label: t('discJolt', null, lang),
        //     value: 'SD',
        //     icon: 'icon-discjolt',
        //     iconOn: 'icon-discjolt-on',
        // },
        {
            label: t('fishing', null, lang),
            value: 'BY',
            icon: 'icon-fishing',
            iconOn: 'icon-fishing-on',
        },
        {
            label: t('egame', null, lang),
            value: 'DZ',
            icon: 'icon-egame',
            iconOn: 'icon-egame-on',
        },

        {
            label: t('slot', null, lang),
            value: 'SLOT',
            icon: 'icon-slot',
            iconOn: 'icon-slot-on',
        },
        {
            label: t('esports', null, lang),
            value: 'DJ',
            icon: 'icon-esports',
            iconOn: 'icon-esports-on',
        },
    ];
};

export const PROMO_TYPES = [
    {
        name_zh: '全部',
        name_en: 'all',
        name_vi: 'Tất cả',
        value: '',
    },
    {
        name_zh: '精选',
        name_en: 'recommend',
        name_vi: 'Đặc sắc',
        value: 'Featured',
    },
    {
        name_zh: '新成员',
        name_en: 'new member',
        name_vi: 'Tân thủ',
        value: 'Newmember',
    },
    // {
    //     name_zh: 'World Cup 2022',
    //     name_en: 'World Cup 2022',
    //     name_vi: 'World Cup 2022',
    //     value: 'Sport',
    // },
    {
        name_zh: '真人',
        name_en: 'live casino',
        name_vi: 'Casino',
        value: 'Live',
    },
    {
        name_zh: '返水',
        name_en: 'bonus',
        name_vi: 'Hoàn trả',
        value: 'Rebate',
    },
];

export const GAME_ENTRIES = [
    // TY
    {
        biggametype: 'TY',
        gameid: 'CMDGame',
        stype: 'ESPORTS',
        cnname: 'CMD 体育',
        gametype: 'CMDGame',
        viname: 'CMD sports',
        playtimes: 6793,
        id: 4535,
        category: 'ESPORTS',
        gamecode: 'CMDGame',
        enname: 'CMD sports',
        provider: 'CMD',
    }, {
        biggametype: 'TY',
        gameid: 'SABAGame',
        stype: 'SPORTS',
        cnname: '沙巴体育',
        gametype: 'SABAGame',
        viname: 'SABA sports',
        playtimes: 15776,
        id: 4548,
        category: 'SPORTS',
        gamecode: 'SABAGame',
        enname: 'SABA sports',
        provider: 'SABA',
        isHot: true,
    }, {
        biggametype: 'TY',
        gameid: 'SportsBook',
        stype: 'SPORTS',
        cnname: 'SBOBET 体育',
        gametype: 'SBOGame',
        viname: 'SBOBET sports',
        playtimes: 2486,
        id: 4568,
        category: 'SPORTS',
        gamecode: 'SportsBook',
        enname: 'SBOBET sports',
        provider: 'SBO',
    }, {
        biggametype: 'TY',
        gameid: 'FB0001',
        stype: 'SPORTS',
        cnname: 'FB 体育',
        gametype: 'TCG_FBGame',
        viname: 'FB sports',
        playtimes: 1000,
        id: 4710,
        category: 'SPORTS',
        gamecode: 'FB0001',
        enname: 'FB sports',
        provider: 'FB',
        isHot: true,
    },
    // CP
    {
        biggametype: 'CP',
        gameid: '-1',
        stype: null,
        cnname: 'GW彩票',
        gametype: 'GWGame',
        viname: 'GW Lottery',
        playtimes: 3106,
        id: 4696,
        category: null,
        gamecode: '-1',
        enname: 'GW Lottery',
        provider: 'GW',
        isHot: true,
    }, {
        biggametype: 'CP',
        gameid: 'lottery',
        stype: 'lottery',
        cnname: 'GPI彩票',
        gametype: 'GPIGame',
        viname: 'GPI Lottery',
        playtimes: 1327,
        id: 4667,
        category: 'OTHER',
        gamecode: 'lottery',
        enname: 'GPI Lottery',
        provider: 'GPI',
    }, {
        biggametype: 'CP',
        gameid: 'lobby',
        stype: 'lobby',
        cnname: 'TCG彩票大厅',
        gametype: 'TCG_LOTTOGame',
        viname: 'TCG Sảnh lottery',
        playtimes: 2672,
        id: 4653,
        category: 'OTHER',
        gamecode: 'lobby',
        enname: 'TCG lottery Lobby',
        provider: 'TCG',
    },{
        biggametype: 'CP',
        provider: 'ON',
        gameid: 'ONGame',
        stype: 'OTHER',
        gametype: 'ONGame',
        cnname: 'on彩票',
        viname: 'ON Lottery',
        enname: 'ON Lottery',
        id: 4713,
        category: 'OTHER',
        gamecode: 'ONGame',
    },
    // SX
    {
        biggametype: 'SX',
        gameid: 'AWC_SEXYBCRTGame',
        stype: 'BAC',
        cnname: 'SEXY live',
        gametype: 'AWC_SEXYBCRTGame',
        viname: 'SEXY live',
        playtimes: 10842,
        id: 4539,
        category: 'OTHER',
        gamecode: 'AWC_SEXYBCRTGame',
        enname: 'SEXY live',
        provider: 'SEXY',
        isHot: true,
    }, {
        biggametype: 'SX',
        gameid: 'WMGame',
        stype: 'OTHER',
        cnname: 'WM真人大厅',
        gametype: 'WMGame',
        viname: 'Sảnh WM',
        playtimes: 23309,
        id: 4668,
        category: 'OTHER',
        gamecode: 'WMGame',
        enname: 'WM Live Lobby',
        provider: 'WM',
        isHot: true,
    }, {
        biggametype: 'SX',
        gameid: 'BEST_AGGame',
        stype: 'OTHER',
        gametype: 'BEST_AGGame',
        viname: 'AG Lobby',
        enname: 'AG Lobby',
        cnname: 'AG真人',
        playtimes: 2430,
        id: 4714,
        category: 'OTHER',
        gamecode: 'BEST_AGGame',
        provider: 'AG',
        isHot: true,
    }, {
        biggametype: 'SX',
        gameid: 'DGGame',
        stype: 'OTHER',
        cnname: 'DG真人',
        viname: 'DG Lobby',
        enname: 'DG Lobby',
        gametype: 'DGGame',
        playtimes: 3172,
        id: 4715,
        category: 'OTHER',
        gamecode: 'DGGame',
        provider: 'DG',
    }, {
        biggametype: 'SX',
        gameid: 'BBB001',
        stype: 'BBB001',
        cnname: 'BBIN 真人大厅',
        gametype: 'TCG_BBINGame',
        viname: 'Sảnh BBIN',
        playtimes: 985,
        id: 4651,
        category: 'OTHER',
        gamecode: 'BBB001',
        enname: 'BBIN Live Lobby',
        provider: 'BBIN',
    }, {
        biggametype: 'SX',
        gameid: 'Casino',
        stype: null,
        cnname: 'SBO Live',
        gametype: 'SBOGame',
        viname: 'SBO Live',
        playtimes: 801,
        id: 4569,
        category: null,
        gamecode: 'Casino',
        enname: 'SBO Live',
        provider: 'SBO',
    }, {
        biggametype: 'SX',
        gameid: 'top_games',
        stype: 'top_games',
        cnname: 'EVO真人大厅',
        gametype: 'EVOGame',
        viname: 'EVO Live Lobby',
        playtimes: 1161,
        id: 4654,
        category: 'OTHER',
        gamecode: 'top_games',
        enname: 'EVO Live Lobby',
        provider: 'EVO',
    }, {
        biggametype: 'SX',
        gameid: 'ubal',
        stype: 'live',
        cnname: 'PT 真人大厅',
        gametype: 'PTGame',
        viname: 'Sảnh PT',
        playtimes: 832,
        id: 4655,
        category: 'OTHER',
        gamecode: 'ubal',
        enname: 'PT Live Lobby',
        provider: 'PT',
    }, {
        biggametype: 'SX',
        gameid: 'SA0001',
        stype: 'SA0001',
        cnname: 'SA 真人大厅',
        gametype: 'TCG_SAGame',
        viname: 'Sảnh SA',
        playtimes: 1386,
        id: 4652,
        category: 'OTHER',
        gamecode: 'SA0001',
        enname: 'SA Live Lobby',
        provider: 'SA',
    },
    // SD
    {
        biggametype: 'SD',
        gameid: 'BBB009',
        stype: 'BBB009',
        cnname: 'BBIN 色碟',
        gametype: 'TCG_BBINGame',
        viname: 'BBIN XỐC DĨA',
        playtimes: 1371,
        id: 4657,
        category: 'OTHER',
        gamecode: 'BBB009',
        enname: 'BBIN Se Die',
        provider: 'BBIN',
    }, {
        biggametype: 'SD',
        gameid: 'DG0013',
        stype: 'DG0013',
        cnname: 'DG 色碟',
        gametype: 'TCG_DGGame',
        viname: 'DG XỐC DĨA',
        playtimes: 1071,
        id: 4658,
        category: 'OTHER',
        gamecode: 'DG0013',
        enname: 'DG Se Die',
        provider: 'DG',
    }, {
        biggametype: 'SD',
        gameid: '',
        stype: 'OTHER',
        cnname: 'WM 色碟',
        gametype: 'WMGame',
        viname: 'WM XỐC DĨA',
        playtimes: 1819,
        id: 4699,
        category: 'OTHER',
        gamecode: 'onlysedie',
        enname: 'WM Se Die',
        provider: 'WM',
    },
    // SB
    {
        biggametype: 'SB',
        gameid: 'top_games',
        stype: 'top_games',
        cnname: 'EVO 骰宝',
        gametype: 'EVOGame',
        viname: 'EVO Tài Xỉu',
        playtimes: 843,
        id: 4660,
        category: 'OTHER',
        gamecode: 'top_games',
        enname: 'EVO Sicbo',
        provider: 'EVO',
    }, {
        biggametype: 'SB',
        gameid: 'Casino',
        stype: 'Casino',
        cnname: 'SBO 骰宝',
        gametype: 'SBOGame',
        viname: 'SBO Tài Xỉu',
        playtimes: 768,
        id: 4661,
        category: 'OTHER',
        gamecode: 'Casino',
        enname: 'SBO Sicbo',
        provider: 'SBO',
    }, {
        biggametype: 'SB',
        gameid: 'AWC_SEXYBCRTGame',
        stype: 'AWC_SEXYBCRTGame',
        cnname: 'SEXY 骰宝',
        gametype: 'AWC_SEXYBCRTGame',
        viname: 'SEXY Tài Xỉu',
        playtimes: 753,
        id: 4662,
        category: 'OTHER',
        gamecode: 'AWC_SEXYBCRTGame',
        enname: 'SEXY Sicbo',
        provider: 'SEXY',
    }, {
        biggametype: 'SB',
        gameid: 'A00070',
        stype: 'A00070',
        cnname: 'AG 骰宝',
        gametype: 'TCG_AGGame',
        viname: 'AG Tài Xỉu',
        playtimes: 672,
        id: 4663,
        category: 'OTHER',
        gamecode: 'A00070',
        enname: 'AG Sicbo',
        provider: 'AG',
    }, {
        biggametype: 'SB',
        gameid: 'DG0013',
        stype: 'DG0013',
        cnname: 'DG 骰宝',
        gametype: 'TCG_DGGame',
        viname: 'DG Tài Xỉu',
        playtimes: 675,
        id: 4664,
        category: 'OTHER',
        gamecode: 'DG0013',
        enname: 'DG Sicbo',
        provider: 'DG',
    }, {
        biggametype: 'SB',
        gameid: 'BBB001',
        stype: 'BBB001',
        cnname: 'BBIN 骰宝',
        gametype: 'TCG_BBINGame',
        viname: 'BBIN Tài Xỉu',
        playtimes: 665,
        id: 4665,
        category: 'OTHER',
        gamecode: 'BBB001',
        enname: 'BBIN Sicbo',
        provider: 'BBIN',
    }, {
        biggametype: 'SB',
        gameid: 'SA0001',
        stype: 'SA0001',
        cnname: 'SA 骰宝',
        gametype: 'TCG_SAGame',
        viname: 'SA Tài Xỉu',
        playtimes: 766,
        id: 4666,
        category: 'OTHER',
        gamecode: 'SA0001',
        enname: 'SA Sicbo',
        provider: 'SA',
    }, {
        biggametype: 'SB',
        gameid: '207',
        stype: 'arcade',
        cnname: '泰式骰宝',
        gametype: 'CQ9Game',
        viname: 'Thai HILO',
        playtimes: 961,
        id: 3921,
        category: 'OTHER',
        gamecode: '207',
        enname: 'Thai HILO',
        provider: 'CQ9',
    }, {
        biggametype: 'SB',
        gameid: '6103',
        stype: null,
        cnname: '皇家骰宝',
        gametype: 'SBOGame',
        viname: 'Royal sic bo',
        playtimes: 1085,
        id: 4572,
        category: 'OTHER',
        gamecode: '6103',
        enname: 'Royal sic bo',
        provider: 'SBO',
    },
    // CF
    {
        biggametype: 'CF',
        provider: 'FA',
        gametype: 'FAGame',
        id: 4711,
        gameid: 'FAGame',
        gamecode: 'FAGame',
        category: 'OTHER',
        stype: 'OTHER',
        cnname: '斗鸡',
        viname: 'ĐÁ GÀ',
        enname: 'cockfight',
        playtimes: 1190,
    }, {
        biggametype: 'CF',
        provider: 'WGB',
        gametype: 'WGBGame',
        id: 4712,
        gameid: 'WGBGame',
        gamecode: 'WGBGame',
        category: 'OTHER',
        stype: 'OTHER',
        cnname: '斗鸡',
        viname: 'ĐÁ GÀ',
        enname: 'cockfight',
        playtimes: 1190,
    },
    // DZ
    {
        biggametype: 'DZ',
        gameid: 'EGAME',
        stype: null,
        cnname: 'AE电子',
        gametype: 'AWC_AEGame',
        viname: 'AEGaming',
        playtimes: 1190,
        id: 4704,
        category: 'OTHER',
        gamecode: 'EGAME',
        enname: 'AEGaming',
        provider: 'AE',
    }, {
        biggametype: 'DZ',
        gameid: '0',
        stype: 'OTHER',
        cnname: 'V8 Poker',
        gametype: 'V8PokerGame',
        viname: 'V8 Poker',
        playtimes: 1505,
        id: 4697,
        category: 'OTHER',
        gamecode: '0',
        enname: 'V8 Poker',
        provider: 'V8',
        isHot: true,
    }, {
        biggametype: 'DZ',
        gameid: 'AWC_KINGMAKERGame',
        stype: 'OTHER',
        cnname: 'KINGMAKER',
        gametype: 'AWC_KINGMAKERGame',
        viname: 'KINGMAKER',
        playtimes: 1364,
        id: 4543,
        category: 'OTHER',
        gamecode: 'AWC_KINGMAKERGame',
        enname: 'KINGMAKER',
        provider: 'KM',
    }, {
        biggametype: 'DZ',
        gameid: '61',
        stype: 'arcade',
        cnname: '天天吃豆',
        gametype: 'CQ9Game',
        viname: 'Mr. Bean',
        playtimes: 599,
        id: 3908,
        category: 'ARCADE',
        gamecode: '61',
        enname: 'Mr. Bean',
        provider: 'CQ9',
    },
    // DJ
    {
        biggametype: 'DJ',
        gameid: 'AWC_E1SPORTGame',
        stype: 'ESPORTS',
        cnname: 'E1SPORT esports',
        gametype: 'AWC_E1SPORTGame',
        viname: 'E1SPORT esports',
        playtimes: 805,
        id: 4547,
        category: 'ESPORTS',
        gamecode: 'AWC_E1SPORTGame',
        enname: 'E1SPORT esports',
        provider: 'E1',
    }, {
        biggametype: 'DJ',
        gameid: '1',
        stype: 'OTHER',
        cnname: 'TF 电竞',
        gametype: 'TF_TFGame',
        viname: 'TF esports',
        playtimes: 886,
        id: 4656,
        category: 'OTHER',
        gamecode: '1',
        enname: 'TF esports',
        provider: 'TF',
    },
];
