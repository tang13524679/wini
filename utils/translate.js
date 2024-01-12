import store from "store";

// en
import enCommon from "../locals/en/common";
import enNav from "../locals/en/nav";
import enMsg from "../locals/en/msg";
import enField from "../locals/en/field";
import enVip from "../locals/en/vip";
import enAbout from "../locals/en/about";
import enContact from "../locals/en/contact";
import enTutorials from "../locals/en/tutorials";
import enLogin from "../locals/en/login";

// zh
import zhCommon from "../locals/zh/common";
import zhNav from "../locals/zh/nav";
import zhMsg from "../locals/zh/msg";
import zhField from "../locals/zh/field";
import zhVip from "../locals/zh/vip";
import zhAbout from "../locals/zh/about";
import zhContact from "../locals/zh/contact";
import zhTutorials from "../locals/zh/tutorials";
import zhLogin from "../locals/zh/login";

// vi
import viCommon from "../locals/vi/common";
import viNav from "../locals/vi/nav";
import viMsg from "../locals/vi/msg";
import viField from "../locals/vi/field";
import viVip from "../locals/vi/vip";
import viAbout from "../locals/vi/about";
import viContact from "../locals/vi/contact";
import viTutorials from "../locals/vi/tutorials";

export function t(key, nsp = null, language = null) {
  const lang = language || store?.get("lang");
  // const lang = 'zh'
  let result = "";

  if (lang === "zh") {
    switch (nsp) {
      case "login":
        result = zhLogin[key];
        break;
      case "nav":
        result = zhNav[key];
        break;
      case "field":
        result = zhField[key];
        break;
      case "msg":
        result = zhMsg[key];
        break;
      case "vip":
        result = zhVip[key];
        break;
      case "about":
        result = zhAbout[key];
        break;
      case "contact":
        result = zhContact[key];
        break;
      case "tutorials":
        result = zhTutorials[key];
        break;
      default:
        result = zhCommon[key];
        break;
    }
  } else if (lang === "en") {
    switch (nsp) {
      case "login":
        result = enLogin[key];
        break;
      case "nav":
        result = enNav[key];
        break;
      case "field":
        result = enField[key];
        break;
      case "msg":
        result = enMsg[key];
        break;
      case "vip":
        result = enVip[key];
        break;
      case "about":
        result = enAbout[key];
        break;
      case "contact":
        result = enContact[key];
        break;
      case "tutorials":
        result = enTutorials[key];
        break;
      default:
        result = enCommon[key];
        break;
    }
  } else {
    switch (nsp) {
      case "nav":
        result = viNav[key];
        break;
      case "field":
        result = viField[key];
        break;
      case "msg":
        result = viMsg[key];
        break;
      case "vip":
        result = viVip[key];
        break;
      case "about":
        result = viAbout[key];
        break;
      case "contact":
        result = viContact[key];
        break;
      case "tutorials":
        result = viTutorials[key];
        break;
      default:
        result = viCommon[key];
        break;
    }
  }

  return result;
}
