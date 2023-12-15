import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 优惠活动列表
export function listActivityData(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/ActivityInfo/ListActivityData`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}

// 优惠领取记录
export function proRecordList(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/Promo/proRecordList`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
