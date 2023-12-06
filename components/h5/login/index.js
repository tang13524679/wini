import react, { useState } from "react";
import styles from "./index.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useRouter } from "next/router";
import LoginForm from "./components/login-form";
import Register from "./components/register";

const LoginModal = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState("login");
  return (
    <div className={styles.loginBox}>
      <div className="login-tabBar">
        <LeftOutlined
          style={{ color: "#329029", fontSize: "18px" }}
          onClick={() => {
            router.back();
          }}
        />
        <Select
          placeholder="语言选择"
          optionFilterProp="children"
          options={[
            {
              value: "CN",
              label: "简体中文",
            },
            {
              value: "ZH-TW",
              label: "繁体中文",
            },
            {
              value: "EN",
              label: "English",
            },
          ]}
        />
      </div>
      <div className="login-top">
        <img src="/assets/login/login-img.png" />
        <div className="tab-bar">
          <div
            className={`${loginState == "login" ? "active" : ""} item`}
            onClick={() => {
              setLoginState("login");
            }}
          >
            登录
          </div>
          <div
            className={`${loginState == "register" ? "active" : ""} item`}
            onClick={() => {
              setLoginState("register");
            }}
          >
            注册
          </div>
        </div>
      </div>
      {loginState == "login" && <LoginForm />}
      {loginState == "register" && <Register />}
    </div>
  );
};

export default LoginModal;
