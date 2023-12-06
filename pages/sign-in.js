import { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { Modal } from "antd";
import InnerPageTitle from "@/components/inner-page-title";
import PhoneCode from "@/components/phone-code";
import { Checkbox, Input, message } from "antd";
import FadeInImage from "@/components/fadein-image";
import { t } from "@/utils/translate";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import store from "store";
import { useGlobalState } from "@/hooks/global";
import { requestApi, uaInfo } from "@/utils/common";
// import TermsBtns from '@/components/terms/btns';
import * as checker from "@/utils/checker";

let initialParams = {
  loginaccount: "",
  loginpassword: "",
  loginpassword1: "",
};

const LoginWithPhone = (props) => {
  const { phonCodeRef, setType, ua } = props;
  const [, dispatch] = useGlobalState();
  return (
    <>
      <PhoneCode onRef={phonCodeRef} />
      <div
        className="py-2 mt-5 rounded-full btnYellow"
        onClick={async () => {
          requestApi(
            dispatch,
            async () => {
              const { prefix, phoneno, verifycode } = phonCodeRef.values;
              if (!prefix || !phoneno || !verifycode)
                throw t("required", "msg");
              checker.isNumber(verifycode);
              return userApi.login({
                phoneno: prefix + phoneno,
                verifycode,
                browserversion: ua.browser.name + ua.browser.version,
                opratesystem: ua.os.name + ua.os.version,
                browserid: store.get("browserId"),
              });
            },
            (rst) => {
              if (rst.info) {
                store.set("user", rst.info);
                store.set("token", rst.info.token);
                dispatch({
                  type: "set_user",
                  payload: rst.info,
                });
                if (props.onLoginSuccess) props.onLoginSuccess();
              }
            }
          );
        }}
      >
        {"立即" + t("login")}
      </div>
      <div
        className="text-md indent-[10%] mt-6 hoverMainColor clWhite30 text-base"
        onClick={() => {
          setType("username");
        }}
      >
        {t("loginViaAccount")}
      </div>
    </>
  );
};

const LoginWithAccount = (props) => {
  const { params, setParams, setType, ua } = props;
  const [, dispatch] = useGlobalState();
  function login() {
    requestApi(
      dispatch,
      async () => {
        const { loginaccount, loginpassword } = params;
        if (!loginaccount || !loginpassword) throw t("required", "msg");
        return userApi.login({
          loginaccount,
          loginpassword,
          browserversion: ua.browser.name + ua.browser.version,
          opratesystem: ua.os.name + ua.os.version,
          browserid: store.get("browserId"),
          enterprisecode: "EN001N",
        });
      },
      (rst) => {
        if (rst.info) {
          store.set("user", rst.info);
          store.set("token", rst.info.token);
          dispatch({
            type: "set_user",
            payload: rst.info,
          });
          if (props.onLoginSuccess) props.onLoginSuccess();
        }
      }
    );
    if (props.onLoginSuccess) props.onLoginSuccess();
  }

  return (
    <>
      <Input
        value={params.loginaccount}
        onChange={(e) => {
          setParams({
            ...params,
            loginaccount: e.target.value,
          });
        }}
        placeholder={t("account", "field")}
        prefix={<div className="icon-login-me mr-2"></div>}
        className="roundInput"
      />
      <Input.Password
        value={params.loginpassword}
        onChange={(e) => {
          setParams({
            ...params,
            loginpassword: e.target.value,
          });
        }}
        onPressEnter={() => {
          login();
        }}
        placeholder={t("password", "field")}
        prefix={<div className="icon-login-password mr-2"></div>}
        className="roundInput mt-4"
      />
      <div
        className="py-3 mt-5 rounded-full btnYellow text-lg"
        onClick={() => {
          login();
        }}
      >
        {"立即" + t("login")}
      </div>
      <div
        className="text-base indent-[10%] text-base clWhite30 mt-4 hoverMainColor"
        onClick={() => {
          setType("phone");
        }}
      >
        {t("loginViaPhone")}
      </div>
    </>
  );
};

const Join = ({ phonCodeRef, params, setParams, setActive }) => {
  const [, dispatch] = useGlobalState();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    return () => {
      setParams(initialParams);
    };
  }, []);
  return (
    <>
      <PhoneCode onRef={phonCodeRef} />
      <Input
        value={params.loginaccount}
        onChange={(e) => {
          let userName = e.target.value;
          setParams({
            ...params,
            loginaccount: userName.toLowerCase(),
          });
        }}
        placeholder={t("username", "field")}
        prefix={<div className="icon-login-me mr-2"></div>}
        className="roundInput mt-4"
      />
      <Input.Password
        value={params.loginpassword}
        onChange={(e) => {
          setParams({
            ...params,
            loginpassword: e.target.value,
          });
        }}
        placeholder={t("password", "field")}
        prefix={<div className="icon-login-password mr-2" />}
        className="roundInput mt-4"
      />
      <Input.Password
        value={params.loginpassword1}
        onChange={(e) => {
          setParams({
            ...params,
            loginpassword1: e.target.value,
          });
        }}
        placeholder={t("passwordAgain", "field")}
        prefix={<div className="icon-login-password mr-2" />}
        className="roundInput mt-4"
      />
      <div
        className="py-2 mt-5 rounded-full btnYellow"
        onClick={async () => {
          requestApi(
            dispatch,
            async () => {
              const { loginaccount, loginpassword, loginpassword1 } = params;
              const { prefix, phoneno, verifycode } = phonCodeRef.values;
              if (
                !loginaccount ||
                !loginpassword ||
                !loginpassword1 ||
                !prefix ||
                !phoneno ||
                !verifycode
              )
                throw t("required", "msg");
              if (loginpassword !== loginpassword1)
                throw t("passwordAgain", "msg");
              if (!checked) throw t("readUserTerms", "msg");
              const sourceQuery = store.get("sourceQuery");

              await userApi.register({
                loginaccount,
                loginpassword,
                phoneno: prefix + phoneno,
                verifycode,
                agentCode: sourceQuery?.agentCode,
                source: sourceQuery?.source,
              });
            },
            () => {
              message.success(t("joinSuccess", "msg"));
              setActive("login");
            }
          );
        }}
      >
        {t("join")}
      </div>
      {/*<TermsBtns />*/}
      <Checkbox
        checked={checked}
        onChange={(e) => {
          setChecked(e.target.checked);
        }}
        className="text-xs mt-4"
      >
        {t("readUserTerms")}
      </Checkbox>
    </>
  );
};

const ForgotPassword = ({ phonCodeRef, params, setParams, setType }) => {
  const [, dispatch] = useGlobalState();

  useEffect(() => {
    setParams({ ...params, loginpassword: "", loginpassword1: "" });
    return () => setParams(initialParams);
  }, []);

  return (
    <>
      <PhoneCode onRef={phonCodeRef} />
      <Input
        value={params.loginaccount}
        onChange={(e) => {
          let userName = e.target.value;
          setParams({
            ...params,
            loginaccount: userName.toLowerCase(),
          });
        }}
        placeholder={t("username", "field")}
        prefix={<div className="icon-login-me mr-2" />}
        className="roundInput mt-4"
      />
      <Input.Password
        value={params.loginpassword}
        onChange={(e) => {
          setParams({
            ...params,
            loginpassword: e.target.value,
          });
        }}
        placeholder={t("newPassword", "field")}
        prefix={<div className="icon-login-password mr-2" />}
        className="roundInput mt-4"
      />
      <Input.Password
        value={params.loginpassword1}
        onChange={(e) => {
          setParams({
            ...params,
            loginpassword1: e.target.value,
          });
        }}
        placeholder={t("passwordAgain", "field")}
        prefix={<div className="icon-login-password mr-2"></div>}
        className="roundInput mt-4"
      />
      <div
        className="py-2 mt-5 mb-4 rounded-full btnYellow"
        onClick={async () => {
          requestApi(
            dispatch,
            async () => {
              const { loginaccount, loginpassword, loginpassword1 } = params;
              const { prefix, phoneno, verifycode } = phonCodeRef.values;
              if (
                !loginaccount ||
                !loginpassword ||
                !loginpassword1 ||
                !prefix ||
                !phoneno ||
                !verifycode
              )
                throw t("required", "msg");
              if (loginpassword != loginpassword1)
                throw t("passwordAgain", "msg");

              await userApi.resetPassword({
                phoneno: prefix + phoneno,
                verifycode,
                loginaccount,
                newloginpassword: loginpassword,
              });
            },
            () => {
              message.success(t("resetSuccess", "msg"));
              setType("username");
            }
          );
        }}
      >
        {t("resetPassword")}
      </div>

      <div
        className="text-md indent-[10%] mt-6 hoverMainColor"
        onClick={() => setType("username")}
      >
        {t("goBackToLogin")}
      </div>
    </>
  );
};

const SignInMain = (props) => {
  const phonCodeRef = {};
  const router = useRouter();
  const [params, setParams] = useState(initialParams);
  const [active, setActive] = useState(props.active || "login");
  const [type, setType] = useState("username");
  const [ua, setUa] = useState({});

  const setRouterActive = useCallback((key) => {
    setActive(key || "login");
    if (router.pathname === "/sign-in") {
      router.replace(`/sign-in?active=${key}`);
    }
  }, []);

  useEffect(() => {
    setActive(props.active || "login");
  }, [props.active]);

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  useEffect(() => {
    if (router.query.agentCode) {
      store.set("sourceQuery", router.query);
    }
  });
  return (
    <div className="flex">
      <div
        className="bgLoginPanel basis-full lg:basis-[58%] px-6 py-4
                            rounded-s-3xl tab-bar "
      >
        {/* <div className="text-center pb-8" style={{}}>
                    <div className="  inline-block  px-1 py-2">
                        <div className="flex cursor-pointer">
                            <div
                                className={`px-4 text-lg text-center  ${
                                    active === 'login'
                                        ? 'active-tab'
                                        : ''
                                }`}
                                onClick={() => {
                                    setRouterActive('login');
                                }}
                            >
                                {t('login')}
                            </div>
                            <div
                                className={`px-4 text-lg text-center  ${
                                    active === 'join'
                                        ? 'active-tab'
                                        : ''
                                }`}
                                onClick={() => {
                                    setRouterActive('join');
                                }}
                            >
                                { t('join')}
                            </div>
                        </div>
                    </div>
                </div> */}
        <div style={{ marginBottom: "10px" }} className="tabBar-list">
          <div
            className={`${active === "login" ? "active" : ""} tab`}
            onClick={() => {
              setRouterActive("login");
            }}
          >
            {t("login")}
          </div>
          <div
            className={`${active === "join" ? "active" : ""} tab`}
            onClick={() => {
              setRouterActive("join");
            }}
          >
            {t("join")}
          </div>
        </div>
        <div>
          {/* login with phone */}
          {active === "login" && type === "phone" && (
            <LoginWithPhone
              phonCodeRef={phonCodeRef}
              setType={setType}
              ua={ua}
              {...props}
            />
          )}
          {/* login with account */}
          {active === "login" && type === "username" && (
            <LoginWithAccount
              setType={setType}
              params={params}
              setParams={setParams}
              ua={ua}
              {...props}
            />
          )}
          {/* forget password */}
          {active === "login" && type === "forgot-password" && (
            <ForgotPassword
              phonCodeRef={phonCodeRef}
              params={params}
              setParams={setParams}
              setType={setType}
              setActive={setRouterActive}
            />
          )}
          {/* join */}
          {active === "join" && (
            <Join
              phonCodeRef={phonCodeRef}
              params={params}
              setParams={setParams}
              setActive={setRouterActive}
            />
          )}
        </div>
      </div>
      <div className="basis-[42%] relative hidden lg:block rounded-e-3xl rightPoster">
        <div className={`posterContain ${active} ${type}`}>
          {active === "join" && (
            <FadeInImage src={"/assets/login/join-poster.png"} />
          )}
          {active === "login" && (
            <>
              {type === "username" ? (
                <FadeInImage src={"/assets/login/login-poster.png"} />
              ) : (
                <FadeInImage src={"/assets/login/login-poster-1.png"} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export const LoginModal = ({ open, active, onCancel }) => {
  return (
    <Modal
      className={"loginModalContain"}
      title=""
      wrapClassName="loginModal"
      open={open}
      footer={null}
      onCancel={onCancel}
      destroyOnClose={true}
    >
      <SignInMain active={active} onLoginSuccess={onCancel} />
    </Modal>
  );
};

export default function SignInPage() {
  const router = useRouter();
  const { query } = router;
  console.log(router, "sss");
  const onLoginSuccess = useCallback(() => {
    if (router.query.from) {
      router.replace(`/${router.query.from}`);
    } else {
      router.replace("/home");
    }
  }, []);
  return (
    <>
      <Head>
        <title>Sign In - WIN</title>
      </Head>
      <div className="bgInnerPage pb-10 h-full overflow-auto">
        <InnerPageTitle title={t("return")} backRoute="/home" />
        <div className="mx-auto mt-14" style={{ maxWidth: 800 }}>
          <SignInMain active={query.active} onLoginSuccess={onLoginSuccess} />
        </div>
      </div>
    </>
  );
}
