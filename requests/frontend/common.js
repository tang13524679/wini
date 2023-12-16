import request from "@/utils/fetcher-frontend";
import { BRAND_CODE, ENTERPRISE_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

// 获取品牌Banner图
export function banner(params) {
  return request(`/ecrm-api/EnterpriseBrand/banner`, params);
}
// 公告
export function notice(params) {
  return request(`/ecrm-api/Notic/Notic`, {
    brandcode: BRAND_CODE,
    enterprisecode: ENTERPRISE_CODE,
    ...params,
  });
}
// 活动列表
export function promos(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/ActivityInfo/ListActivityData`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// export function promos(params) {
//   return request(`/ecrm-api/ActivityInfo/ListActivityData`, {
//     enterprisecode: ENTERPRISE_CODE,
//     ...params,
//   });
// }
// 活动详情
export function promoInfo(params) {
  const props = { ...params, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/ActivityInfo/info`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 参与活动
export function promoInfoEnrollIn(params) {
  const props = { ...params, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/activity/applyBonus`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// APP下载地址
export function appLink(params) {
  return request(`/ecrm-api/Config/app/download`, params);
}
// 领红包
export function getRedEnvelope(params) {
  return request(`/ecrm-api/ActivityNationalDay/receiveRedBag`, params);
}
// 查看公告
export function viewAnnouncement(params) {
  return request(`/ecrm-api/Announce/visit`, params);
}
// 交易流水记录
export function getTransactionRecords(params) {
  return request(`/ecrm-api/flowSendRecord/getRecordList`, params);
}
// 周排行
export function getWeeklyRank(params) {
  return request(`/ecrm-api/Game/selectBonusRanking`, params);
}
export function getLastWeeklyRank(params) {
  return request(`/ecrm-api/Game/selectLastWeekBonusRanking`, params);
}
// 抽奖活动-获取玩家抽奖数据
export function getRaffleInfo(params) {
  return request(`/ecrm-api/ActivityTask/getRaffleInfo`, params);
}
// 抽奖活动-抽奖
export function getRaffle(params) {
  return request(`/ecrm-api/ActivityTask/raffle`, params);
}
// 抽奖活动-获取所有玩家中奖记录
export function getRaffleList(params) {
  return request(`/ecrm-api/ActivityTask/raffleList`, params);
}
// 抽奖活动-获取我的中奖记录
export function getPlayerRaffleList(params) {
  return request(`/ecrm-api/ActivityTask/playerRaffleList`, params);
}
