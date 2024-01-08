import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE, E0001QZC } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 热门游戏列表
export function hotGameRanList(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/hotGameRanking/list`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// banner列表
export function bannerList(param) {
  const props = {
    ...param,
    enterprisecode: ENTERPRISE_CODE,
    brandcode: BRAND_CODE,
  };
  return request(`/ecrm-api/EnterpriseBrand/banner`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 近期游戏列表
export function recentGamesList(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/Game/recentGamesList`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 获取游戏列表
export function getGameList(param) {
  const props = {
    ...param,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/gameItemGameTypeEnterprise/gameList`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
