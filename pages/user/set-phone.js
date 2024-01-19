import react, { useState, useEffect, useRef } from "react";
import styles from "./set-email.module.scss";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { Form, Input, message, Button, Dropdown, Menu } from "antd";
import { useGlobalState } from "@/hooks/global";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { requestApi } from "@/utils/common";
import * as checker from "@/utils/checker";
import store from "store";
import { t } from "@/utils/translate";
import NavBar from "@/components/h5/components/nav-bar";
import { Toast } from "antd-mobile";
import { SafetyCertificateOutlined, MobileOutlined } from "@ant-design/icons";

const countryCode = [
  { label: "+ 852", value: "852", icon: "icon-hk" },
  { label: "+ 63", value: "63", icon: "icon-ph" },
];

export default function SetEmailPage() {
  useAuth("/user/set-email");
  const [{ user }, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [time, setTime] = useState(null);
  const timeRef = useRef();
  const [verifycode, setVerifycode] = useState("");
  const [phonePrefixes, setPhonePrefixes] = useState({
    icon: "icon-hk",
    prefix: "852",
    phoneno: "",
    verifycode: "",
  });

  const verifyHandle = async () => {
    try {
      setBtnLoading(true);
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
    <InnerPageLayout>
      <Head>
        <title>Set Email - WIN</title>
      </Head>
      <div className={styles.container}>
        <div className="sm:px-4">
          <div className="bgInnerPage">
            <NavBar title={t("setPhone", "nav")} />
            {/* <InnerPageTitle title={t('setEmail', 'nav')} /> */}
            <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
              <Form
                form={form}
                onFinish={async (values) => {
                  console.log(values);
                  requestApi(
                    dispatch,
                    async () => {
                      await userApi.updateInfo({
                        phoneno: phonePrefixes.prefix + phone,
                        verifycode,
                      });
                      const rst = await userApi.takeEmployee();
                      if (rst?.info) {
                        store.set("user", rst.info);
                        dispatch({
                          type: "set_user",
                          payload: rst.info,
                        });
                      }
                    },
                    () => {
                      message.success(t("success", "msg"));
                      router.back();
                    }
                  );
                }}
              >
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
                    name="phoneno"
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
                <div className="verify-code">
                  <Form.Item
                    name="verifycode"
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
              </Form>
              <div
                className="py-2 mt-5 rounded-full btnYellow"
                onClick={() => {
                  form.submit();
                }}
              >
                {t("confirm")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
