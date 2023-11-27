import request from '@/utils/fetcher-frontend';
import { ENTERPRISE_CODE, BRAND_CODE } from '@/utils/const';
import store from 'store';

// 进入游戏
export function play(params) {
    return request(`/api/v1/Game/play`, { brandcode: BRAND_CODE, ...params });
}
// 试玩游戏
export function tryPlay(params) {
    return request(`/api/v1/Game/tryPlay`, params);
}
// 玩家余额總數
export function balances(params) {
    return request(`/api/v1/Game/balances`, params);
}
// 查询会员时间段内的存取款、优惠等数据統計
export function allMoney(params) {
    return request(`/api/v1/Game/allMoney`, params);
}
// 游戏纪录
export function recordsAll(params) {
    return request(`/api/v1/GRecords/RecordsAll`, {
        ...params,
    });
}
// 可用游戏类型
export function brandGameAll(params) {
    return request(`/api/v1/GRecords/BrandGameAll`, {
        brandcode: BRAND_CODE,
        ...params,
    });
}
// 游戏列表
export function gameList(params) {
    return request(`/api/v1/gameItemGameTypeEnterprise/gameList`, {
        enterprisecode: ENTERPRISE_CODE,
        ...params,
    });
}
// 搜索游戏
export function searchGame(params) {
    return request(`/api/v1/gameItemGameTypeEnterprise/gameKeywordList`, {
        enterprisecode: ENTERPRISE_CODE,
        ...params,
    });
}
