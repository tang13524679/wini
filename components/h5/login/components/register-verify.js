import react, { useState } from "react";
import styles from "./register-verify.module.scss";
import { Dropdown, Menu, Form, Input, Button } from "antd";
import { UnlockOutline } from "antd-mobile-icons";
import {
  SafetyCertificateOutlined,
  ArrowLeftOutlined,
  MailOutlined,
  MobileOutlined,
} from "@ant-design/icons";

const countryCode = [
  { label: "+ 84", value: "84", icon: "icon-vi" },
  { label: "+ 86", value: "86", icon: "icon-zh" },
  { label: "+ 63", value: "63", icon: "icon-ph" },
];

const RegisterVerify = () => {
  const [verifyType, setVerifyType] = useState("phone");
  const [phonePrefixes, setPhonePrefixes] = useState({
    icon: "icon-vi",
    prefix: "84",
    phoneno: "",
    verifycode: "",
  });

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
              name="username"
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
            name="username"
            rules={[
              {
                required: true,
                message: "不同国家会有不同存款方式，请选择合适您的国家",
              },
            ]}
          >
            <Input size="large" placeholder="邮箱" prefix={<MailOutlined />} />
          </Form.Item>
        )}
        <div className="verify-code">
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="验证码"
              prefix={<SafetyCertificateOutlined />}
            />
          </Form.Item>
          <div className="get-code">获取验证码</div>
        </div>
        <Form.Item>
          <div className="submit-button">
            <div className="back">
              <ArrowLeftOutlined />
            </div>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RegisterVerify;
