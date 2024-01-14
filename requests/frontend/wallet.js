import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, EMPLOYEE_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

const userStore = store.get("user");
// 获取加密货币地址
export function getRechargeUsdInfo(param) {
  const props = { ...param, enterprisecode: ENTERPRISE_CODE };
  return request(`/ecrm-api/Promo/getRechargeUsdInfo`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 提交加密货币金额
export function doTrans(param) {
  const props = {
    ...param,
    opreateType: 6,
    employeecode: userStore?.employeecode,
  };
  return request(`/ecrm-api/AgentNew/DoTrans`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 添加钱包币种地址
export function AddUWallet(param) {
  const props = {
    ...param,
    opreateType: 6,
    enterprisecode: ENTERPRISE_CODE,
    bankcode: "B000",
  };
  return request(`/ecrm-api/Promo/AddUWallet`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 获取加密货币收币地址
export function UWalletAddress(param) {
  const props = {
    ...param,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/Promo/UWalletAddress`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 加密货币取款确认
export function DoTrans(param) {
  const props = {
    ...param,
    opreateType: 7,
    employeecode: EMPLOYEE_CODE,
  };
  return request(`/ecrm-api/AgentNew/DoTrans`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
// 获取第三方支付通道
export function EThirdpartys() {
  return request(`/ecrm-api/TPayment/EThirdpartys`);
}
// 第三方实时存款-支付
export function ESaving(param) {
  const props = {
    ...param,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/TPayment/ESaving`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
