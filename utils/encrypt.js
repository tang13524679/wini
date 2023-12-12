import CryptoJS from "crypto-js";

const getTieInfo = (val) => {
  let queryValue = "";
  for (let i in val) {
    queryValue = queryValue + "&" + i + "=" + val[i];
  }
  return queryValue.substr(1);
};

// AES加密
export function encryptECB(params) {
  let param = getTieInfo(params);
  let key = CryptoJS.enc.Utf8.parse("FO92712eVGwk0IG4"); //16位数作为密钥
  let srcs = CryptoJS.enc.Utf8.parse(param);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.toString();
}

// MD5加密
export function encryptMD5(params) {
  let param = getTieInfo(params);
  return CryptoJS.MD5(param + "3JSHcteXuC8U0IBN").toString();
}
