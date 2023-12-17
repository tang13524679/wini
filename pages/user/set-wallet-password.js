import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { Form, Input, message } from "antd";
import { t } from "@/utils/translate";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { requestApi } from "@/utils/common";
import * as checker from "@/utils/checker";
import store from "store";
import NavBar from "@/components/h5/components/nav-bar";

export default function SetWalletPasswordPage() {
  useAuth("/user/set-wallet-password");
  const [{ user }, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const router = useRouter();
  return (
    <InnerPageLayout>
      <Head>
        <title>Set Wallet Password - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title={t("setWalletPassword", "nav")} />
          {/* <InnerPageTitle title={t('setWalletPassword', 'nav')} /> */}
          <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
            <Form
              form={form}
              onFinish={async (values) => {
                requestApi(
                  dispatch,
                  async () => {
                    const { newfundpassword, newfundpassword1 } = values;

                    if (!newfundpassword || !newfundpassword1)
                      throw t("required", "msg");

                    if (newfundpassword != newfundpassword1)
                      throw t("passwordAgain", "msg");

                    checker.isWalletPassword(newfundpassword);

                    delete values.newfundpassword1;
                    await userApi.updatefpwd(values);
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
              <Form.Item name="newfundpassword">
                <Input
                  allowClear
                  type="password"
                  placeholder={t("walletPassword", "field")}
                  className="roundInput mt-4"
                />
              </Form.Item>
              <Form.Item name="newfundpassword1">
                <Input
                  allowClear
                  type="password"
                  placeholder={t("passwordAgain", "field")}
                  className="roundInput mt-4"
                />
              </Form.Item>
            </Form>
            <div className="text-xs clWhite30 mt-4">
              {t("walletPasswordRule", "msg")}
            </div>
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
