import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE } from "@/utils/const";
import { getDomain } from "@/utils/common";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

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
// 获取验证码
export function getVerifycode(params) {
  return request(`/ecrm-api/User/getVerifycodeH5`, params);
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
  return request(`/ecrm-api/User/AddUBankCard`, params);
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
  return request(`/ecrm-api/User/UBankCards`, params);
}
// 用户未读消息数量
export function messageCount(params) {
  return request(`/ecrm-api/UserMessage/MessageCount`, params);
}
// 消息列表
export function sysMessage(params) {
  return request(`/ecrm-api/UserMessage/SysMessage`, params);
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
  return request(`/ecrm-api/ActivityTask/getActivityTaskList`, params);
}
// 领取任务奖励
export function getTaskReward(params) {
  return request(`/ecrm-api/ActivityTask/apply`, params);
}
