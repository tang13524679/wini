import react, { useState, useEffect } from "react";
import styles from "./login-form.module.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { UnlockOutline, UserOutline } from "antd-mobile-icons";
import Loading from "@/components/h5/components/loading-mobile";
import { userApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import { uaInfo } from "@/utils/common";
import store from "store";
import { getDomain } from "@/utils/common";
import { useRouter } from "next/router";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import { Toast } from "antd-mobile";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useGlobalState();
  const [ua, setUa] = useState({});
  const router = useRouter();

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = async () => {
    let requestParams = {
      loginaccount: userName,
      loginpassword: password,
      browserversion: ua.browser.name + ua.browser.version,
      opratesystem: ua.os.name + ua.os.version,
      enterprisecode: "EN001N",
      domain: getDomain(),
    };
    try {
      setIsLoading(true);
      const res = await userApi.login({
        ...requestParams,
        params: encryptECB(requestParams),
        signature: encryptMD5(requestParams),
      });
      if (res.info) {
        Toast.show({
          content: "登录成功",
        });
        store.set("user", res.info);
        store.set("token", res.info.token);
        dispatch({
          type: "set_user",
          payload: res.info,
        });
        router.push("/home");
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "请输入用户名",
            },
          ]}
        >
          <Input
            size="large"
            placeholder="用户名"
            prefix={<UserOutline />}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "请输入6-12位的密码",
            },
            { min: 6, message: "最低6位字符" },
            { max: 12, message: "最多12位字符" },
          ]}
        >
          <Input.Password
            size="large"
            placeholder="密码"
            prefix={<UnlockOutline />}
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>

        <div className="remember">
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <div className="forget">忘记密码</div>
        </div>

        <Form.Item>
          <div className="submit-button">
            <Button type="primary" htmlType="submit">
              立即登录
            </Button>
            <div className="footer-text">
              遇到登录问题，请联系<span>在线客服</span>
            </div>
          </div>
        </Form.Item>
      </Form>
      {isLoading && <Loading />}
    </div>
  );
};

export default LoginForm;
