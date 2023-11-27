import { t } from '@/utils/translate';

export function isNumber(v) {
    if (/^\d*$/.test(Number(v))) return true;
    throw t('ruleNumber', 'msg');
}

export function isMobileNumber(v) {
    if (/^\d{9,11}$/.test(Number(v))) return true;
    throw t('phoneRule', 'msg');
}

export function isWalletPassword(v) {
    if (/^[0-9]{6}$/.test(v)) return true;
    throw t('walletPasswordRule', 'msg');
}

export function isSpaceName(v) {
    if (/\s+/.test(v)) return true;
    throw t('spaceName', 'msg');
}

export function isEmail(v) {
    if (/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(v))
        return true;
    throw t('emailRule', 'msg');
}
