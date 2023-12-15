import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, EMPLOYEE_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

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
  const props = { ...param, opreateType: 6, employeecode: EMPLOYEE_CODE };
  return request(`/ecrm-api/AgentNew/DoTrans`, {
    ...props,
    params: encryptECB({ ...props }),
    signature: encryptMD5({ ...props }),
  });
}
