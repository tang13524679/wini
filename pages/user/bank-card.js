import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { useUserBanks } from "@/hooks/fund";
import Link from "next/link";
import { userApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { message, Modal } from "antd";
import { requestApi } from "@/utils/common";
import PageLoading from "@/components/page-loading";
import NavBar from "@/components/h5/components/nav-bar";

export default function BankCardPage() {
  useAuth("/user/bank-card");
  const [, dispatch] = useGlobalState();
  const router = useRouter();
  const myBanks = useUserBanks();

  return (
    <InnerPageLayout>
      <Head>
        <title>Bank Card - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="银行卡" />
          {/* <InnerPageTitle title={t('bankCard', 'nav')} /> */}
          {!myBanks ? (
            <PageLoading />
          ) : (
            <>
              <div
                style={{ color: "rgb(203 202 202)" }}
                className="my-4 clWhite30"
              >
                {t("addCardsLimit", "msg")}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-10">
                {myBanks.map((item, index) => (
                  <div
                    key={`card_${index}`}
                    className={`bgColorFull-${index + 1} p-4`}
                  >
                    <div className="flex">
                      <div className="icon-bank-card-2 mr-2"></div>
                      <div className="flex-auto clWhite">{item.bankname}</div>
                      <div
                        className="icon-delete"
                        onClick={() => {
                          Modal.confirm({
                            centered: true,
                            title: t("tips"),
                            content: t("deleteCard", "msg"),
                            onOk: async () => {
                              requestApi(
                                dispatch,
                                async () => {
                                  const { informationcode } = item;
                                  await userApi.deleteUBankCard({
                                    informationcode,
                                  });
                                },
                                () => {
                                  message.success(t("success", "msg"));
                                  router.reload();
                                }
                              );
                            },
                          });
                        }}
                      ></div>
                    </div>
                    <div className="text-base clWhite70 mt-2">
                      {item.paymentaccount}
                    </div>
                  </div>
                ))}

                {myBanks.length < 5 && (
                  <Link href="/user/add-bank-card" passHref>
                    <div
                      style={{
                        background: "#2a2b30",
                        padding: "10px",
                        border: "1px dashed #4a4c52",
                        fontSize: "14px",
                        color: "#eee",
                        borderRadius: "8px",
                      }}
                      className="grid place-items-center bgWhite6 bdWhite10 rounded-md cursor-pointer p-8"
                    >
                      <div>+ {t("addCard")}</div>
                    </div>
                  </Link>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </InnerPageLayout>
  );
}
