import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 进入游戏
export function play(params) {
  const param = {
    ...params,
    brandcode: BRAND_CODE,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/Game/play`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 试玩游戏
export function tryPlay(params) {
  return request(`/ecrm-api/Game/tryPlay`, params);
}
// 玩家余额總數
export function balances(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/Game/balances`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 查询会员时间段内的存取款、优惠等数据統計
export function allMoney(params) {
  return request(`/ecrm-api/Game/allMoney`, params);
}
// 游戏纪录
export function recordsAll(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/GRecords/RecordsAll`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 可用游戏类型
export function brandGameAll(params) {
  return request(`/ecrm-api/GRecords/BrandGameAll`, {
    brandcode: BRAND_CODE,
    ...params,
  });
}
// 游戏列表
export function gameList(params) {
  return request(`/ecrm-api/gameItemGameTypeEnterprise/gameList`, {
    enterprisecode: ENTERPRISE_CODE,
    ...params,
  });
}
// 搜索游戏
export function searchGame(params) {
  return request(`/ecrm-api/gameItemGameTypeEnterprise/gameKeywordList`, {
    enterprisecode: ENTERPRISE_CODE,
    ...params,
  });
}
