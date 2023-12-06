import react, { useState, useEffect } from "react";
import styles from "./register.module.scss";
import { Button, Checkbox, Form, Input, Tooltip } from "antd";
import { UnlockOutline, UserOutline } from "antd-mobile-icons";
import {
  BarcodeOutlined,
  InfoCircleOutlined,
  DownOutlined,
  UpOutlined,
  CustomerServiceFilled,
} from "@ant-design/icons";
import Loading from "@/components/h5/loading-mobile";
import { userApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import { uaInfo } from "@/utils/common";
import RegisterVerify from "./register-verify";
import store from "store";
import { color } from "@mui/system";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [, dispatch] = useGlobalState();
  const [ua, setUa] = useState({});
  const [isNextStep, setIsNextStep] = useState(false);

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = async () => {
    setIsNextStep(true);
    try {
      setIsLoading(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className={styles.container}>
      {!isNextStep && (
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
                message: "请输入6-12位英文和数字的组合",
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
                message: "密码至少8位",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="登录密码"
              prefix={<UnlockOutline />}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Item>

          <Form.Item
            name="isPassword"
            rules={[
              {
                required: true,
                message: "两次输入的密码不匹配",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="确认密码"
              prefix={<UnlockOutline />}
              value={isPassword}
              onChange={(e) => {
                setIsPassword(e.target.value);
              }}
            />
          </Form.Item>

          <div className="promo-code">
            <div
              className="text-box"
              onClick={() => {
                setPromoCode(!promoCode);
              }}
            >
              <span style={{ color: "#3D97FF" }}>优惠码</span>
              {!promoCode && <DownOutlined />}
              {promoCode && <UpOutlined />}
            </div>
            {promoCode && (
              <Form.Item>
                <Input
                  size="large"
                  placeholder="优惠码（可选）"
                  prefix={<BarcodeOutlined />}
                  suffix={
                    <Tooltip title="优惠码（可选）">
                      <InfoCircleOutlined />
                    </Tooltip>
                  }
                />
              </Form.Item>
            )}
          </div>

          <Form.Item>
            <div className="submit-button">
              <Button type="primary" htmlType="submit">
                下一步
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
      {isNextStep && <RegisterVerify />}
      <div className="privacy-text">
        <Checkbox />
        我已阅读并同意相关的<span>条款和隐私政策</span>
      </div>
      <div className="customer">
        <CustomerServiceFilled />
        7X24小时在线客服
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Register;
