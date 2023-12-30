import store from "store";
import { playPT } from "@/utils/pt-login";
import { gameApi } from "@/requests/frontend";
import { Modal, message } from "antd";
import numeral from "numeral";
import { t } from "@/utils/translate";
import { PROVIDERS, GAME_TYPES } from "@/utils/const";
// import RechargeModal from '@/components/recharge-modal';

export async function play(game, dispatch) {
  // authority check
  const user = store.get("user");
  if (!user) return (location.href = "/login");
  // if (!user) return (location.href = "/sign-in");

  // const lang = store.get('lang');
  // const balance = store.get('balance');
  // balance lower than 1000 VND to deposit
  // if (Number(balance) <= 1000) {
  //     Modal.confirm({
  //         centered: true,
  //         title: null,
  //         content: <RechargeModal lang={lang} />,
  //         okText: t('goDeposit'),
  //         onOk: () => {
  //             location.href = '/fund/trans';
  //         },
  //         cancelText: t('goGame'),
  //         onCancel: () => {
  //             playGame(game, dispatch);
  //         },
  //     });
  // } else {
  //     playGame(game, dispatch);
  // }
  playGame(game, dispatch);
}

export async function playGame(game, dispatch) {
  const ua = uaInfo();

  // play pt
  if (game.gametype === "PTGame") {
    playPT(game, dispatch);
  } else {
    // others
    let homeurl = "";
    let lobbyurl = "";
    try {
      dispatch({ type: "set_loading", payload: true });
      if (notAllowPC(game)) throw t("onlyMobile", "msg");
      let rst = await gameApi.play({
        id: game.gameId || game.id,
        gametype: game.gametype,
        playtype: game.gamecode,
        homeurl,
        lobbyurl,
        device: isMobile() ? "h5" : "web",
        language: toBigLanguage(),
      });
      dispatch({ type: "set_loading", payload: false });
      if (ifOpenWindowBlank(ua, game)) {
        dispatch({ type: "set_iframe", payload: false });
        dispatch({ type: "set_gaming", payload: false });
        openWindowBlank(rst.info);
      } else {
        dispatch({ type: "set_iframe", payload: true });
        openWindowIframe(rst.info);
      }
    } catch (msg) {
      dispatch({ type: "set_loading", payload: false });
      message.error(msg);
    }
  }
}

function ifOpenWindowBlank(ua, game) {
  if (game.gametype === "CMDGame") return true;
  if (game.gametype === "TCG_BBINGame") return true;
  if (game.gametype === "GWGame") return true;
  if (game.gametype === "GPIGame") return true;
}

function notAllowPC(game) {
  if (!isMobile()) {
    if (game.gametype === "GPIGame") return true;
  }
}

export function toBigLanguage() {
  const lang = store.get("lang");
  if (lang === "zh") return "zh_CN";
  if (lang === "vi") return "vi_VN";
  return "en_US";
}

export async function requestApi(dispatch, request, success, fail) {
  try {
    dispatch({
      type: "set_loading",
      payload: true,
    });

    let rst = await request();

    dispatch({
      type: "set_loading",
      payload: false,
    });

    if (success) success(rst);
  } catch (msg) {
    if (fail) {
      fail(msg);
    } else {
      dispatch({
        type: "set_loading",
        payload: false,
      });
      message.error(msg);
    }
  }
}

export function reminder(callback) {
  const remind = store.get("remind");
  const ua = uaInfo();
  if (ua.os.name === "iOS" && remind < 3) {
    store.set("remind", remind + 1);
    Modal.info({
      centered: true,
      title: t("tips"),
      content: t("tipsReturn", "msg"),
      onOk: () => {
        callback();
      },
    });
  } else {
    callback();
  }
}

export function openWindowIframe(url) {
  let open = window.open("", "_iframe", { fullscreen: false });
  if (open === null || typeof open === "undefined") {
    window.location.href = url;
  }
  if (open) {
    setTimeout(() => {
      open.location = url;
    }, 300);
  }
}
export function openWindowBlank(url) {
  let open = window.open("", "_blank", { fullscreen: false });
  if (open === null || typeof open === "undefined") {
    window.location.href = url;
  }
  if (open) {
    setTimeout(() => {
      open.location = url;
    }, 300);
  }
}

export function englishNameComparator(a, b) {
  const name1 = a.name_en.toUpperCase();
  const name2 = b.name_en.toUpperCase();

  if (name1 < name2) return -1;
  if (name1 > name2) return 1;
  return 0;
}

export function random(min, max) {
  if (arguments.length === 2) {
    return Math.floor(min + Math.random() * (max + 1 - min));
  } else {
    return null;
  }
}

export function countDownSeconds(seconds, callback) {
  let timer = null;
  timer = setInterval(function () {
    callback(seconds);
    seconds--;
    if (seconds < 0) clearInterval(timer);
  }, 1000);
}

export function isMobile() {
  let userAgentInfo = navigator.userAgent;
  let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone"];
  let flag = false;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = true;
      break;
    }
  }
  return flag;
}

export function getClientIp(req) {
  let ip =
    req.headers["cf-connecting-ip"] ||
    req.headers["x-real-ip"] ||
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    "null";

  console.log("headers: ", req.headers);

  if (ip.split(",").length > 0) {
    ip = ip.split(",")[0];
  }

  return ip;
}

export function sleep(ms) {
  // eslint-disable-next-line no-undef
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatA(amount) {
  return numeral(amount).format("0.0a");
}
export function formatB(amount) {
  return numeral(amount).format("0a");
}

export function formatMoney(amount) {
  return numeral(amount).format("0,0");
}
export function convertMoney(amount) {
  return numeral(amount).value();
}
export function getAvatarIndex(code) {
  return parseInt(code, 16) % 10;
}
export function uaInfo() {
  // eslint-disable-next-line no-undef
  const parser = new UAParser();
  const result = parser.getResult();
  return result;
}
export function isApp() {
  const ua = uaInfo();
  // const mobileNav = document.getElementById('mobileNav');
  // alert(`
  // windowInnerHeight: ${window.innerHeight},
  // windowOuterHeight: ${window.outerHeight},
  // screenHeight: ${window.screen.height},
  // screenAvailHeight:${window.screen.availHeight},
  // documentOffsetHeight:${document.body.offsetHeight},
  // documentClientHeight:${document.body.clientHeight},
  // documentScrollHeight:${document.body.scrollHeight},
  // navOffsetTop: ${mobileNav.offsetTop},
  // UA: ${JSON.stringify(ua)},
  // `);
  const isFullScreen = window.screen.height - document.body.offsetHeight <= 90;
  if (ua.device.type === "mobile" && isFullScreen) return true;
  return false;
}
export function getGameName(lang, game) {
  if (lang === "zh" && game.cnname) return game.cnname;
  if (lang === "vi" && game.viname) return game.viname;
  return game.enname;
}
export function getGameImg(game) {
  let path = "";

  // PT
  if (game.gametype === "PTGame") {
    path = `/assets/third/pt/${encodeURIComponent(`${game.enname}`)}.jpg`;
  } else if (game.gametype === "CQ9Game") {
    // CQ9
    path = `/assets/third/cq9/${encodeURIComponent(`${game.gamecode}`)}.png`;
  } else {
    if (game.gamelsh) {
      path = `/assets/third/game-icon/${game.gamelsh}.png`;
    } else if (game.gameId) {
      path = `/assets/third/game-icon/${game.gameId}.png`;
    } else if (game.id) {
      path = `/assets/third/game-icon/${game.id}.png`;
    } else {
      path = `/assets/third/404.jpg`;
    }
  }

  return path;
}
export function getGameTypeName(game) {
  const gameType = GAME_TYPES().find((item) => item.value === game.biggametype);
  return gameType?.label;
}
export function getProviderName(game) {
  const provider = PROVIDERS.find((item) => item.value === game.gametype);
  return provider?.label;
}
export function isCollected(game) {
  const collectedGames = store.get("collectedGames");
  let rst = false;
  if (collectedGames?.length) {
    for (const item of collectedGames) {
      if (item.gameId === game.id) {
        rst = true;
        break;
      }
    }
  }
  return rst;
}
export function cleanUserStore() {
  store.remove("token");
  store.remove("user");
  store.remove("balance");
  store.remove("collectedGames");
}

export function formatOrdinal(number) {
  const lang = store?.get("lang");

  // chinese locale
  if (lang === "zh") {
    return `第${number}`;
  }

  // vietnamese locale
  if (lang === "vi") {
    return number;
  }

  // english as default locale
  const lastDigit = number % 10;
  if (number >= 11 && number <= 13) return `${number}th`;
  if (lastDigit === 1) return `${number}st`;
  if (lastDigit === 2) return `${number}nd`;
  if (lastDigit === 3) return `${number}rd`;
  return `${number}th`;
}

export function renderMoneyStatus(amount) {
  if (Number(amount) > 0)
    return <span className="success">{formatA(amount)}</span>;
  if (Number(amount) < 0)
    return <span className="fail">{formatA(amount)}</span>;
  return <span>{formatA(amount)}</span>;
}

export function getDomain() {
  return window.location.host;
}
