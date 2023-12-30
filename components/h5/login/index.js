import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { Select } from "antd";
import LoginForm from "./components/login-form";
import Register from "./components/register";
import { useRouter } from "next/router";
import Image from "next/image";

const LoginModal = () => {
  const router = useRouter();
  const [loginState, setLoginState] = useState("login");
  console.log(router);
  useEffect(() => {
    if (router.query.type) {
      setLoginState(router.query.type);
    } else {
      setLoginState("login");
    }
  }, []);

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
        <Image src="/assets/login/login-img.png" width={430} height={323} />
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
