import request from '@/utils/fetcher-frontend';
import { BRAND_CODE, ENTERPRISE_CODE } from '@/utils/const';
import store from 'store';

// 获取收款银行(取一个)
export function eBankCards(params) {
    // return request(`/api/v1/Funds/EBankCards`, params);
}
// 用户存款
export function saving(params) {
    // return request(`/api/v1/Funds/Saving`, {
    //     brandcode: BRAND_CODE,
    //     ...params,
    // });
}
// 用户取款
export function taking(params) {
    // return request(`/api/v1/Funds/Taking`, {
    //     brandcode: BRAND_CODE,
    //     ...params,
    // });
}
// 存&取款记录
export function allOrder(params) {
    // return request(`/api/v1/Fetch/AllOrder`, {
    //     brandcode: BRAND_CODE,
    //     ...params,
    // });
}
// 第三方支付信息
export function eThirdpartys(params) {
    // return request(`/api/v1/TPayment/EThirdpartys`, {
    //     enterprisecode: ENTERPRISE_CODE,
    //     ...params,
    // });
}
// 第三方支付
export function eSaving(params) {
    // return request(`/api/v1/TPayment/ESaving`, {
    //     enterprisecode: ENTERPRISE_CODE,
    //     ...params,
    // });
}
