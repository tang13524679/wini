import react, { useState, useEffect, useRef } from "react";
import styles from "./index.module.scss";
import { Button, Form, Input, Dropdown, Menu } from "antd";
import { UnlockOutline, UserOutline } from "antd-mobile-icons";
import {
  SafetyCertificateOutlined,
  MobileOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Loading from "@/components/h5/components/loading-mobile";
import { userApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import store from "store";
import { Toast } from "antd-mobile";
import { t } from "@/utils/translate";
import NavBar from "@/components/h5/components/nav-bar";
import { useRouter } from "next/router";

const countryCode = [
  { label: "+ 852", value: "852", icon: "icon-hk" },
  { label: "+ 63", value: "63", icon: "icon-ph" },
];

export default function ResetPasswordPage() {
  const router = useRouter();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [verifyType, setVerifyType] = useState("phone");
  const [verifycode, setVerifycode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isNote, setIsNote] = useState(false);
  const [time, setTime] = useState(null);
  const timeRef = useRef();
  const [phonePrefixes, setPhonePrefixes] = useState({
    icon: "icon-hk",
    prefix: "852",
    phoneno: "",
    verifycode: "",
  });

  const onFinish = async () => {
    if (password != isPassword) {
      Toast.show({
        content: t("passwordsNotMatch", "login"),
      });
      return;
    }
    try {
      setIsLoading(true);
      const res = await userApi.resetPassword(
        verifyType == "phone"
          ? {
              loginaccount: userName,
              newloginpassword: password,
              phoneno: phone,
              verifycode: verifycode,
            }
          : {
              loginaccount: userName,
              newloginpassword: password,
              email: email,
              verifycode: verifycode,
            }
      );
      if (res.code == "1") {
        Toast.show({
          content: res.info,
        });
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
      Toast.show({
        content: error,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyHandle = async () => {
    try {
      setBtnLoading(true);
      if (verifyType == "phone") {
        const res = await userApi.checkUserPhoneno({
          phoneno: phonePrefixes.prefix + phone,
        });
        if (res.code == "10000") {
          setTime(60);
          setIsNote(true);
          const rts = await userApi.getVerifycode({
            phoneno: phonePrefixes.prefix + phone,
          });
          if (rts.code == "1") {
            Toast.show({
              content: rts.info,
            });
          }
        }
      } else {
        const res = await userApi.checkUserEmail({
          email,
        });
        if (res.code == "10000") {
          setTime(60);
          setIsNote(true);
          const rts = await userApi.getEmailcode({
            email,
          });
          if (rts.code == "1") {
            Toast.show({
              content: rts.info,
            });
          }
        }
      }
    } catch (error) {
      setTime(null);
      setIsNote(false);
      console.error(error);
      Toast.show({
        content: error,
      });
    } finally {
      setBtnLoading(false);
    }
  };

  useEffect(() => {
    if (time && time != 0) {
      timeRef.current = setTimeout(() => {
        setTime((time) => time - 1);
      }, 1000);
    } else {
      setIsNote(false);
    }
    return () => {
      clearInterval(timeRef.current);
    };
  }, [time]);
  return (
    <div className={styles.resetPassword}>
      <NavBar title={t("forgetThePassword", "login")} />
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

        <div className="tabar">
          <div
            className={`${verifyType == "phone" ? "active" : ""} item`}
            onClick={() => {
              setVerifyType("phone");
            }}
          >
            {t("phoneNumber", "login")}
          </div>
          <div
            className={`${verifyType == "e-mail" ? "active" : ""} item`}
            onClick={() => {
              setVerifyType("e-mail");
            }}
          >
            {t("Mail", "login")}
          </div>
        </div>

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
                value={phone}
                placeholder={t("phoneNumber", "login")}
                prefix={<MobileOutlined />}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </Form.Item>
          </div>
        )}
        {verifyType == "e-mail" && (
          <Form.Item
            name="email"
            rules={[{ required: true }, { type: "email", warningOnly: true }]}
          >
            <Input
              value={email}
              size="large"
              placeholder={t("Mail", "login")}
              prefix={<MailOutlined />}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
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
              placeholder={t("VerificationCode", "login")}
              type="number"
              value={verifycode}
              prefix={<SafetyCertificateOutlined />}
              onChange={(e) => {
                setVerifycode(e.target.value);
              }}
            />
          </Form.Item>
          {isNote ? (
            <Button className="get-code" loading={btnLoading}>
              {time}s
            </Button>
          ) : (
            <Button
              className="get-code"
              loading={btnLoading}
              onClick={verifyHandle}
            >
              {t("getVerificationCode", "login")}
            </Button>
          )}
        </div>

        <Form.Item>
          <div className="submit-button">
            <Button type="primary" htmlType="submit">
              {t("confirm")}
            </Button>
          </div>
        </Form.Item>
      </Form>
      {isLoading && <Loading />}
    </div>
  );
}
