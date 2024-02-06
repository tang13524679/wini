import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { Form, Input, Select, message, Modal } from "antd";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { useBanks } from "@/hooks/fund";
import { userApi } from "@/requests/frontend";
import { requestApi } from "@/utils/common";
import PageLoading from "@/components/page-loading";
import store from "store";
import * as checker from "@/utils/checker";
import NavBar from "@/components/h5/components/nav-bar";

let openningbank = "";

export default function QuickCardPage() {
  useAuth("/user/add-bank-card");
  const [{ lang }, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const banks = useBanks();
  const router = useRouter();

  return (
    <InnerPageLayout>
      <Head>
        <title>Add Bank Card - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title={t("AddFPS")} />
          {/* <InnerPageTitle title={t('addBankCard', 'nav')} /> */}
          {!banks ? (
            <PageLoading />
          ) : (
            <>
              <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={async (values) => {
                    requestApi(
                      dispatch,
                      async () => {
                        console.log(values);
                        await userApi.addUFps({
                          paymentaccount: values.FPSaddress,
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
                  <Form.Item
                    name="FPSaddress"
                    label={t("FPSaddress", "field") + "FPSID"}
                    rules={[{ required: true }]}
                    className="!mt-4"
                  >
                    <Input placeholder={"FPSID"} className="normalInput" />
                  </Form.Item>
                </Form>
                <div
                  className="py-2 mt-5 rounded-full btnYellow"
                  onClick={() => {
                    Modal.confirm({
                      centered: true,
                      title: t("tips"),
                      content: t("addFPSaddress", "msg"),
                      onOk: async () => {
                        form.submit();
                      },
                    });
                  }}
                >
                  {t("confirm")}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </InnerPageLayout>
  );
}
