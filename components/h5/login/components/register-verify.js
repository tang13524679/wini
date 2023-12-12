import react, { useState, useEffect } from "react";
import styles from "./register-verify.module.scss";
import { Dropdown, Menu, Form, Input, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ArrowLeftOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";
import { getDomain, uaInfo } from "@/utils/common";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { userApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import { useGlobalState } from "@/hooks/global";
import store from "store";

const countryCode = [
  { label: "+ 84", value: "84", icon: "icon-vi" },
  { label: "+ 86", value: "86", icon: "icon-zh" },
  { label: "+ 63", value: "63", icon: "icon-ph" },
];

const RegisterVerify = (props) => {
  const router = useRouter();
  const [ua, setUa] = useState({});
  const [verifyType, setVerifyType] = useState("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [, dispatch] = useGlobalState();
  const [phonePrefixes, setPhonePrefixes] = useState({
    icon: "icon-vi",
    prefix: "84",
    phoneno: "",
    verifycode: "",
  });

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = async () => {
    try {
      setIsLoading(true);
      const res = await userApi.register({
        loginaccount: props.userName,
        loginpassword: props.password,
      });
      if (res.code == "1") {
        Toast.show({
          content: "注册成功",
        });
        let requestParams = {
          loginaccount: props.userName,
          loginpassword: props.password,
          browserversion: ua.browser.name + ua.browser.version,
          opratesystem: ua.os.name + ua.os.version,
          enterprisecode: "EN001N",
          domain: getDomain(),
        };
        const rst = await userApi.login({
          ...requestParams,
          params: encryptECB(requestParams),
          signature: encryptMD5(requestParams),
        });
        if (rst.info) {
          Toast.show({
            content: "登录成功",
          });
          store.set("user", rst.info);
          store.set("token", rst.info.token);
          dispatch({
            type: "set_user",
            payload: rst.info,
          });
          router.push("/home");
        }
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
      <div className="tabar">
        <div
          className={`${verifyType == "phone" ? "active" : ""} item`}
          onClick={() => {
            setVerifyType("phone");
          }}
        >
          手机号
        </div>
        <div
          className={`${verifyType == "e-mail" ? "active" : ""} item`}
          onClick={() => {
            setVerifyType("e-mail");
          }}
        >
          邮箱
        </div>
      </div>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {verifyType == "phone" && (
          <div className="phone-box">
            <Dropdown
              trigger="click"
              overlay={
                <Menu>
                  {countryCode.map((item) => (
                    <Menu.Item
                      key={item.value}
                      icon={<div className={item.icon}></div>}
                      onClick={() => {
                        setPhonePrefixes({
                          ...phonePrefixes,
                          prefix: item.value,
                          icon: item.icon,
                        });
                      }}
                    >
                      <span className="ml-2">{item.label}</span>
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <div className="btn-icon-text bgWhite2 bdWhite6 rounded-full py-2 px-4 cursor-pointer">
                <div style={{ minWidth: 100 }}>
                  <i className={`icon ${phonePrefixes.icon}`}></i>
                  <span className="text icon-text16 mx-2 clWhite">
                    + {phonePrefixes.prefix}
                  </span>
                  <i className="icon icon-dropdown"></i>
                </div>
              </div>
            </Dropdown>
            <Form.Item
              name="phone"
              rules={[
                {
                  required: true,
                  message: "不同国家会有不同存款方式，请选择合适您的国家",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="手机号码"
                prefix={<MobileOutlined />}
              />
            </Form.Item>
          </div>
        )}
        {verifyType == "e-mail" && (
          <Form.Item
            name="email"
            rules={[
              { required: true },
              { type: "string", min: 6 },
              { type: "email", warningOnly: true },
            ]}
          >
            <Input size="large" placeholder="邮箱" prefix={<MailOutlined />} />
          </Form.Item>
        )}
        <div className="verify-code">
          <Form.Item
            name="verifyCode"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
              { min: 6, message: "最低6位数字" },
            ]}
          >
            <Input
              size="large"
              placeholder="验证码"
              type="number"
              prefix={<SafetyCertificateOutlined />}
            />
          </Form.Item>
          <div className="get-code">获取验证码</div>
        </div>
        <Form.Item>
          <div className="submit-button">
            <div
              className="back"
              onClick={() => {
                props.setIsNextStep(false);
              }}
            >
              <ArrowLeftOutlined />
            </div>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </div>
        </Form.Item>
      </Form>
      {isLoading && <Loading />}
    </div>
  );
};

export default RegisterVerify;
