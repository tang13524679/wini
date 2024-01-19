import react, { useState, useEffect, useRef } from "react";
import styles from "./set-email.module.scss";
import Head from "next/head";
import { Toast } from "antd-mobile";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { Form, Input, message, Button } from "antd";
import { useGlobalState } from "@/hooks/global";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { requestApi } from "@/utils/common";
import * as checker from "@/utils/checker";
import store from "store";
import { t } from "@/utils/translate";
import NavBar from "@/components/h5/components/nav-bar";
import { SafetyCertificateOutlined, MailOutlined } from "@ant-design/icons";

export default function SetEmailPage() {
  useAuth("/user/set-email");
  const [{ user }, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [isNote, setIsNote] = useState(false);
  const [time, setTime] = useState(null);
  const timeRef = useRef();
  const [verifycode, setVerifycode] = useState("");

  const verifyHandle = async () => {
    try {
      setBtnLoading(true);
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
            <NavBar title={t("setEmail", "nav")} />
            {/* <InnerPageTitle title={t('setEmail', 'nav')} /> */}
            <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
              <Form
                form={form}
                onFinish={async (values) => {
                  requestApi(
                    dispatch,
                    async () => {
                      await userApi.updateInfo(values);
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
                <Form.Item
                  name="email"
                  rules={[
                    { required: true },
                    { type: "email", warningOnly: true },
                  ]}
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
                className="py-2 rounded-full btnYellow"
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
