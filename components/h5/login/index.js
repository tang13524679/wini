import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { Select } from "antd";
import store from "store";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { t } from "@/utils/translate";
import dynamic from "next/dynamic";
const LoginForm = dynamic(() => import("./components/login-form"));
const Register = dynamic(() => import("./components/register"));
const Image = dynamic(() => import("next/image"));

const LoginModal = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState("login");
  const [{ lang }, dispatch] = useGlobalState();
  useEffect(() => {
    if (router.query.type) {
      setLoginState(router.query.type);
    } else {
      setLoginState("login");
    }
  }, []);

  const handleChange = (value) => {
    dispatch({
      type: "set_lang",
      payload: value,
    });
    store.set("lang", value);
    console.log(lang);
  };

  return (
    <div className={styles.loginBox}>
      <div className="login-tabBar" style={{ maxWidth: "430px" }}>
        <LeftOutlined
          style={{ color: "#329029", fontSize: "18px" }}
          onClick={() => {
            router.push("/home");
          }}
        />
        <Select
          placeholder="语言选择"
          optionFilterProp="children"
          defaultValue={store.get("lang")}
          onChange={handleChange}
          options={[
            {
              value: "zh",
              label: "简体中文",
            },
            {
              value: "en",
              label: "English",
            },
          ]}
        />
      </div>
      <div className="login-top">
        <Image src="/assets/login/login-img.png" width={430} height={323} />
        <div className="tab-bar">
          <div
            className={`${loginState == "login" ? "active" : ""} item`}
            onClick={() => {
              setLoginState("login");
            }}
          >
            {t("login", "login")}
            {/* 登录 */}
          </div>
          <div
            className={`${loginState == "register" ? "active" : ""} item`}
            onClick={() => {
              setLoginState("register");
            }}
          >
            {t("join", "login")}
          </div>
        </div>
      </div>
      {loginState == "login" && <LoginForm />}
      {loginState == "register" && <Register />}
    </div>
  );
};

export default LoginModal;
