import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { useRouter } from "next/router";
import { t } from "@/utils/translate";
import { useBanks } from "@/hooks/fund";
import { Form, Select, Input } from "antd";
import { useGlobalState } from "@/hooks/global";
import { requestApi, formatMoney, convertMoney } from "@/utils/common";
import { fundApi } from "@/requests/frontend";
import PageLoading from "@/components/page-loading";
import NavBar from "@/components/h5/components/nav-bar";

export default function FillInformationPage() {
  useAuth("/fund/fill-information");
  const [, dispatch] = useGlobalState();
  const [form] = Form.useForm();
  const router = useRouter();
  const { query } = router;
  const banks = useBanks();

  return (
    <InnerPageLayout>
      <Head>
        <title>Fill In Information - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="填写转账信息" />
          {/* <InnerPageTitle title={t('fillInfo', 'nav')} /> */}
          {!banks ? (
            <PageLoading />
          ) : (
            <>
              <div className="mx-auto mt-4  pb-24" style={{ maxWidth: 440 }}>
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    orderamount: formatMoney(query.orderamount),
                  }}
                  onFinish={async (values) => {
                    requestApi(
                      dispatch,
                      async () => {
                        return fundApi.saving({
                          ...values,
                          ...query,
                          orderamount: convertMoney(query.orderamount),
                        });
                      },
                      () => {
                        router.replace("/fund/transaction-result");
                      }
                    );
                  }}
                >
                  <Form.Item
                    name="employeepaymentbank"
                    label={t("bankName", "field")}
                    rules={[{ required: true }]}
                    className="!mt-4"
                  >
                    <Select
                      options={banks}
                      placeholder={t("pleaseSelect")}
                      suffixIcon={<div className="icon-dropdown"></div>}
                    ></Select>
                  </Form.Item>
                  <Form.Item
                    name="employeepaymentname"
                    label={t("accountName", "field")}
                    rules={[{ required: true }]}
                    className="!mt-4"
                  >
                    <Input
                      placeholder={t("accountName", "field")}
                      className="normalInput"
                    />
                  </Form.Item>
                  <Form.Item
                    name="employeepaymentaccount"
                    label={t("accountNo", "field")}
                    rules={[{ required: true }]}
                    className="!mt-4"
                  >
                    <Input
                      placeholder={t("accountNo", "field")}
                      className="normalInput"
                    />
                  </Form.Item>
                  <Form.Item
                    name="orderamount"
                    label={t("amount", "field")}
                    className="!mt-4"
                  >
                    <Input
                      disabled
                      placeholder={t("accountNo", "field")}
                      className="normalInput"
                    />
                  </Form.Item>
                  <Form.Item
                    name="ordercomment"
                    label={t("comment", "field")}
                    className="!mt-4"
                  >
                    <Input.TextArea
                      placeholder={t("comment", "field")}
                      className="normalInput"
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
            </>
          )}
        </div>
      </div>
    </InnerPageLayout>
  );
}
