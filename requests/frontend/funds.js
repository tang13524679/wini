import request from "@/utils/fetcher-frontend";
import { BRAND_CODE, ENTERPRISE_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 获取收款银行(取一个)
export function eBankCards(params) {
  return request(`/ecrm-api/Funds/EBankCards`, params);
}
// 用户存款
export function saving(params) {
  return request(`/ecrm-api/Funds/Saving`, {
    brandcode: BRAND_CODE,
    ...params,
    params: encryptECB({ brandcode: BRAND_CODE, ...params }),
    signature: encryptMD5({ brandcode: BRAND_CODE, ...params }),
  });
}
// 用户取款
export function taking(params) {
  return request(`/ecrm-api/Funds/Taking`, {
    brandcode: BRAND_CODE,
    ...params,
    params: encryptECB({ brandcode: BRAND_CODE, ...params }),
    signature: encryptMD5({ brandcode: BRAND_CODE, ...params }),
  });
}
// 存&取款记录
export function allOrder(params) {
  return request(`/ecrm-api/Fetch/AllOrder`, {
    brandcode: BRAND_CODE,
    ...params,
    params: encryptECB({ brandcode: BRAND_CODE, ...params }),
    signature: encryptMD5({ brandcode: BRAND_CODE, ...params }),
  });
}
// 第三方支付信息
export function eThirdpartys(params) {
  return request(`/ecrm-api/TPayment/EThirdpartys`, {
    enterprisecode: ENTERPRISE_CODE,
    ...params,
    params: encryptECB({ enterprisecode: ENTERPRISE_CODE, ...params }),
    signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE, ...params }),
  });
}
// 第三方支付
export function eSaving(params) {
  return request(`/ecrm-api/TPayment/ESaving`, {
    enterprisecode: ENTERPRISE_CODE,
    ...params,
    params: encryptECB({ enterprisecode: ENTERPRISE_CODE, ...params }),
    signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE, ...params }),
  });
}
