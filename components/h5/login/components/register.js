import react, { useState, useEffect } from "react";
import styles from "./register.module.scss";
import { Button, Form, Input, Tooltip } from "antd";
import { UnlockOutline, UserOutline } from "antd-mobile-icons";
import {
  BarcodeOutlined,
  InfoCircleOutlined,
  DownOutlined,
  UpOutlined,
  CustomerServiceFilled,
} from "@ant-design/icons";
import { userApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import { uaInfo } from "@/utils/common";
import store from "store";
import { color } from "@mui/system";
import { Toast, Checkbox } from "antd-mobile";
import { t } from "@/utils/translate";
import dynamic from "next/dynamic";
const Loading = dynamic(() =>
  import("@/components/h5/components/loading-mobile")
);
const RegisterVerify = dynamic(() => import("./register-verify"));

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [promoCode, setPromoCode] = useState(false);
  const [{ lang }, dispatch] = useGlobalState();
  const [ua, setUa] = useState({});
  const [isNextStep, setIsNextStep] = useState(false);

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = () => {
    if (password != isPassword) {
      Toast.show({
        content: t("passwordsNotMatch", "login"),
      });
      return;
    }
    setIsNextStep(true);
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
                message: t("pleaseEnterUserName", "login"),
              },
            ]}
          >
            <Input
              size="large"
              placeholder={t("username", "login")}
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
              placeholder={t("loginPassword", "login")}
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
                message: "请输入6-12位的密码",
              },
              { min: 6, message: "最低6位字符" },
              { max: 12, message: "最多12位字符" },
            ]}
          >
            <Input.Password
              size="large"
              placeholder={t("confirmPassword", "login")}
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
              <span style={{ color: "#3D97FF" }}>
                {t("promoCode", "login")}
              </span>
              {!promoCode && <DownOutlined />}
              {promoCode && <UpOutlined />}
            </div>
            {promoCode && (
              <Form.Item>
                <Input
                  size="large"
                  placeholder={t("promoCodeOptional", "login")}
                  prefix={<BarcodeOutlined />}
                  suffix={
                    <Tooltip title={t("promoCodeOptional", "login")}>
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
                {t("nextStep", "login")}
              </Button>
            </div>
          </Form.Item>
        </Form>
      )}
      {isNextStep && (
        <RegisterVerify
          userName={userName}
          password={password}
          setIsNextStep={setIsNextStep}
        />
      )}
      <div className={`${lang == "en" ? "en-privacy-text" : ""} privacy-text`}>
        <Checkbox defaultChecked />
        {t("readAndAgreeToTheRelevant", "login")}
        <span>{t("policy", "login")}</span>
      </div>
      <div className={`${lang == "en" ? "en-customer" : ""} customer`}>
        <CustomerServiceFilled />
        7X24{t("hourlyOnlineCustomerService", "login")}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Register;
