import react, { useState, useEffect, useRef } from "react";
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
import { getClientIp } from "@/utils/common";
import { t } from "@/utils/translate";

const countryCode = [
  { label: "+ 852", value: "852", icon: "icon-hk" },
  { label: "+ 63", value: "63", icon: "icon-ph" },
];

const RegisterVerify = (props) => {
  const router = useRouter();
  const [ua, setUa] = useState({});
  const [verifyType, setVerifyType] = useState("phone");
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [verifycode, setVerifycode] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [, dispatch] = useGlobalState();
  const [isNote, setIsNote] = useState(false);
  const [time, setTime] = useState(null);
  const timeRef = useRef();
  const [phonePrefixes, setPhonePrefixes] = useState({
    icon: "icon-hk",
    prefix: "852",
    phoneno: "",
    verifycode: "",
  });

  useEffect(() => {
    let result = uaInfo();
    setUa(result);
  }, []);

  const onFinish = async () => {
    const param = verifyType == "phone" ? { phoneno: phone } : { email };
    try {
      setIsLoading(true);
      const res = await userApi.register({
        ...param,
        loginaccount: props.userName,
        loginpassword: props.password,
        verifycode,
        agentCode: router.query?.agentCode || "",
      });
      if (res.code == "1") {
        Toast.show({
          content: t("registrationSuccess", "login"),
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
            content: t("loginSuccessful", "login"),
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
          const rts = await userApi.getVerifycode({
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
      console.error(error);
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
    <div className={styles.container}>
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
            <div
              className="back"
              onClick={() => {
                props.setIsNextStep(false);
              }}
            >
              <ArrowLeftOutlined />
            </div>
            <Button type="primary" htmlType="submit">
              {t("join", "login")}
            </Button>
          </div>
        </Form.Item>
      </Form>
      {isLoading && <Loading />}
    </div>
  );
};

export default RegisterVerify;
