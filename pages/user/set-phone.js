import react, { useState } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { Form, Input, message } from "antd";
import { useGlobalState } from "@/hooks/global";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { requestApi } from "@/utils/common";
import * as checker from "@/utils/checker";
import store from "store";
import { t } from "@/utils/translate";
import NavBar from "@/components/h5/components/nav-bar";

export default function SetEmailPage() {
  useAuth("/user/set-email");
  const [{ user }, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const [phoneno, setPhoneno] = useState("");
  const router = useRouter();
  return (
    <InnerPageLayout>
      <Head>
        <title>Set Email - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title={t("setPhone", "nav")} />
          {/* <InnerPageTitle title={t('setEmail', 'nav')} /> */}
          <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
            <Form
              form={form}
              onFinish={async () => {
                requestApi(
                  dispatch,
                  async () => {
                    if (!phoneno) throw t("required", "msg");
                    checker.isMobileNumber(phoneno);
                    await userApi.updateInfo({ phoneno });
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
              <Form.Item name="phone">
                <Input
                  defaultValue={phoneno}
                  allowClear
                  placeholder={t("phoneNumber", "field")}
                  className="roundInput mt-4"
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                />
              </Form.Item>
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
    </InnerPageLayout>
  );
}
