import request from "@/utils/fetcher-backend";
import CryptoJS from "crypto-js";
import qs from "query-string";
import { ENTERPRISE_CODE } from "@/utils/const";
import { getClientIp } from "@/utils/common";

const host = process.env.GOLDEN_API;

export async function transferToGoldenApi(req) {
  const { lang, token } = req.headers;
  let url = `${host}/${req.query.slug.join(
    "/"
  )}?enterprisecode=${ENTERPRISE_CODE}`;
  let params = JSON.parse(JSON.stringify(req.query));
  let ip = getClientIp(req);
  delete params.slug;
  delete params.noCrypto;

  let stringParams = qs.stringify(params);
  console.log(stringParams);

  //encrypt
  if (!req.query.noCrypto) {
    const aesSecret = CryptoJS.enc.Utf8.parse("FO92712eVGwk0IG4");
    const encrypted = CryptoJS.AES.encrypt(stringParams, aesSecret, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    const signature = CryptoJS.MD5(`${stringParams}3JSHcteXuC8U0IBN`);
    url = `${url}&params=${encodeURIComponent(
      encrypted
    )}&signature=${signature}`;
  } else {
    url = `${url}&${stringParams}`;
  }

  const headers = {
    lang,
    token,
    ip,
  };

  console.log(headers);
  console.log(url);

  return request(url, null, "GET", headers);
}
