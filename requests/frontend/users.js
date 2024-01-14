import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE, EMPLOYEE_CODE } from "@/utils/const";
import { getDomain } from "@/utils/common";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import store from "store";

// 注册
export function register(param) {
  return request(`/ecrm-api/User/register`, {
    brandcode: BRAND_CODE,
    domain: "www.level311.com",
    enterprisecode: ENTERPRISE_CODE,
    ...param,
    params: encryptECB({
      ...param,
      domain: "www.level311.com",
      brandcode: BRAND_CODE,
      enterprisecode: ENTERPRISE_CODE,
    }),
    signature: encryptMD5({
      ...param,
      domain: "www.level311.com",
      brandcode: BRAND_CODE,
      enterprisecode: ENTERPRISE_CODE,
    }),
  });
}
// 重置密码
export function resetPassword(params) {
  return request(`/ecrm-api/User/resetLoginPassword`, {
    enterprisecode: ENTERPRISE_CODE,
    ...params,
  });
}
// 登录
export function login(params) {
  return request(`/ecrm-api/User/login`, {
    domain: getDomain(),
    ...params,
  });
}
const userStore = store.get("user");
// 退出登录
export function setOnline(params) {
  return request(`/ecrm-api/User/setOnline`, {
    enterprisecode: ENTERPRISE_CODE,
    employeecode: userStore?.employeecode || EMPLOYEE_CODE,
    ...params,
  });
}
// 检查手机号是否已经注册
export function checkUserPhoneno(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/checkUserPhoneno`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 发送手机验证码
export function getVerifycode(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/getVerifycode`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 获取验证码
// export function getVerifycode(params) {
//   return request(`/ecrm-api/User/getVerifycodeH5`, params);
// }
// 检查邮箱是否已经注册
export function checkUserEmail(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/checkUserEmail`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 发送邮箱验证码
export function getEmailcode(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/getEmailcode`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 修改登录密码
export function updatepwd(params) {
  return request(`/ecrm-api/User/updatepwd`, params);
}
// 修改资金密码
export function updatefpwd(params) {
  return request(`/ecrm-api/User/updatefpwd`, params);
}
// 更新用户信息
export function updateInfo(params) {
  return request(`/ecrm-api/User/updateInfo`, params);
}
// 根据用户编号获取用户信息
export function takeEmployee(params) {
  return request(`/ecrm-api/User/takeEmployee`, params);
}
// 添加用户银行卡
export function addUBankCard(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/AddUBankCard`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 编辑用户银行卡
export function editUBankCard(params) {
  return request(`/ecrm-api/User/EditUBankCard`, params);
}
// 删除用户银行卡
export function deleteUBankCard(params) {
  return request(`/ecrm-api/User/DeleteUBankCard`, params);
}
// 查询用户银行卡
export function uBankCards(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/User/UBankCards`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 用户未读消息数量
export function messageCount(params) {
  return request(`/ecrm-api/UserMessage/MessageCount`, params);
}
// 消息列表
export function sysMessage(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/UserMessage/SysMessage`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 阅读消息
export function updateSysMessage(params) {
  return request(`/ecrm-api/UserMessage/updateSysMessage`, params);
}
// 参加活动
export function getBonus(params) {
  return request(`/ecrm-api/ActivitySignUpBonus/getBonus`, params);
}
// 收藏游戏
export function collectGame(params) {
  return request(`/ecrm-api/Post/addUserPost`, params);
}
// 取消收藏
export function unCollectGame(params) {
  return request(`/ecrm-api/Post/doDelete`, params);
}
// 获取任务列表
export function getTasks(params) {
  const param = {
    ...params,
    enterprisecode: ENTERPRISE_CODE,
  };
  return request(`/ecrm-api/ActivityTask/getActivityTaskList`, {
    ...param,
    params: encryptECB({ ...param }),
    signature: encryptMD5({ ...param }),
  });
}
// 领取任务奖励
export function getTaskReward(params) {
  return request(`/ecrm-api/ActivityTask/apply`, params);
}
