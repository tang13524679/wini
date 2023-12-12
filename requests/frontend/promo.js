import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 分享佣金余额
export function proRecordList(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/Promo/proRecordList`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
