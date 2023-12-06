import react, { useState, useEffect } from "react";
import styles from "./login-form.module.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { UnlockOutline, UserOutline } from "antd-mobile-icons";
import Loading from "@/components/h5/loading-mobile";
import { userApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import { uaInfo } from "@/utils/common";
import store from "store";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useGlobalState();
  const [ua, setUa] = useState({});

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = async () => {
    try {
      setIsLoading(true);
      const res = await userApi.login({
        loginaccount: userName,
        loginpassword: password,
        browserversion: ua.browser.name + ua.browser.version,
        opratesystem: ua.os.name + ua.os.version,
        browserid: store.get("browserId"),
        enterprisecode: "EN001N",
      });
      console.log(res);
    } catch (error) {
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
