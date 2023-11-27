import request from '@/utils/fetcher-frontend';
import { BRAND_CODE, ENTERPRISE_CODE } from '@/utils/const';

// 获取品牌Banner图
export function banner(params) {
    return request(`/api/v1/EnterpriseBrand/banner`, params);
}
// 公告
export function notice(params) {
    return request(`/api/v1/Notic/Notic`, {
        brandcode: BRAND_CODE,
        enterprisecode: ENTERPRISE_CODE,
        ...params,
    });
}
// 活动列表
export function promos(params) {
    return request(`/api/v1/ActivityInfo/ListActivityData`, {
        enterprisecode: ENTERPRISE_CODE,
        ...params,
    });
}
// 活动详情
export function promoInfo(params) {
    return request(`/api/v1/ActivityInfo/info`, params);
}
// 参与活动
export function promoInfoEnrollIn(params) {
    return request(`/api/v1/activity/applyBonus`, params);
}
// APP下载地址
export function appLink(params) {
    return request(`/api/v1/Config/app/download`, params);
}
// 领红包
export function getRedEnvelope(params) {
    return request(`/api/v1/ActivityNationalDay/receiveRedBag`, params);
}
// 查看公告
export function viewAnnouncement(params) {
    return request(`/api/v1/Announce/visit`, params);
}
// 交易流水记录
export function getTransactionRecords(params) {
    return request(`/api/v1/flowSendRecord/getRecordList`, params);
}
// 周排行
export function getWeeklyRank(params) {
    return request(`/api/v1/Game/selectBonusRanking`, params);
}
export function getLastWeeklyRank(params) {
    return request(`/api/v1/Game/selectLastWeekBonusRanking`, params);
}
// 抽奖活动-获取玩家抽奖数据
export function getRaffleInfo(params) {
    return request(`/api/v1/ActivityTask/getRaffleInfo`, params);
}
// 抽奖活动-抽奖
export function getRaffle(params) {
    return request(`/api/v1/ActivityTask/raffle`, params);
}
// 抽奖活动-获取所有玩家中奖记录
export function getRaffleList(params) {
    return request(`/api/v1/ActivityTask/raffleList`, params);
}
// 抽奖活动-获取我的中奖记录
export function getPlayerRaffleList(params) {
    return request(`/api/v1/ActivityTask/playerRaffleList`, params);
}
