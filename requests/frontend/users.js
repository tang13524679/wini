import request from "@/utils/fetcher-frontend";
import { ENTERPRISE_CODE, BRAND_CODE } from "@/utils/const";
import { getDomain } from "@/utils/common";

// 注册
export function register(params) {
  return request(`/api/v1/User/register`, {
    brandcode: BRAND_CODE,
    domain: getDomain(),
    ...params,
  });
}
// 重置密码
export function resetPassword(params) {
  return request(`/api/v1/User/resetLoginPassword`, {
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
  return request(`/api/v1/User/getVerifycodeH5`, params);
}
// 修改登录密码
export function updatepwd(params) {
  return request(`/api/v1/User/updatepwd`, params);
}
// 修改资金密码
export function updatefpwd(params) {
  return request(`/api/v1/User/updatefpwd`, params);
}
// 更新用户信息
export function updateInfo(params) {
  return request(`/api/v1/User/updateInfo`, params);
}
// 根据用户编号获取用户信息
export function takeEmployee(params) {
  return request(`/api/v1/User/takeEmployee`, params);
}
// 添加用户银行卡
export function addUBankCard(params) {
  return request(`/api/v1/User/AddUBankCard`, params);
}
// 编辑用户银行卡
export function editUBankCard(params) {
  return request(`/api/v1/User/EditUBankCard`, params);
}
// 删除用户银行卡
export function deleteUBankCard(params) {
  return request(`/api/v1/User/DeleteUBankCard`, params);
}
// 查询用户银行卡
export function uBankCards(params) {
  return request(`/api/v1/User/UBankCards`, params);
}
// 用户未读消息数量
export function messageCount(params) {
  return request(`/api/v1/UserMessage/MessageCount`, params);
}
// 消息列表
export function sysMessage(params) {
  return request(`/api/v1/UserMessage/SysMessage`, params);
}
// 阅读消息
export function updateSysMessage(params) {
  return request(`/api/v1/UserMessage/updateSysMessage`, params);
}
// 参加活动
export function getBonus(params) {
  return request(`/api/v1/ActivitySignUpBonus/getBonus`, params);
}
// 收藏游戏
export function collectGame(params) {
  return request(`/api/v1/Post/addUserPost`, params);
}
// 取消收藏
export function unCollectGame(params) {
  return request(`/api/v1/Post/doDelete`, params);
}
// 获取任务列表
export function getTasks(params) {
  return request(`/api/v1/ActivityTask/getActivityTaskList`, params);
}
// 领取任务奖励
export function getTaskReward(params) {
  return request(`/api/v1/ActivityTask/apply`, params);
}
