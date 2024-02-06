import { useState } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { useGlobalState } from "@/hooks/global";
import VerifyCodeInput from "@/components/verify-code-input";
// import { userApi } from '@/requests/frontend';
import { countDownSeconds } from "@/utils/common";
import { message } from "antd";
import { useRouter } from "next/router";
import { requestApi } from "@/utils/common";

export default function VerifyPhonePage() {
  useAuth("/user/verify-phone");
  const [{ user }, dispatch] = useGlobalState();
  let codeRef = {};
  const [count, setCount] = useState(0);
  const router = useRouter();

  return (
    <InnerPageLayout>
      <Head>
        <title>Verify Phone - WIN1</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <InnerPageTitle title={t("verifyPhone", "nav")} />
          <div className="mx-auto pb-10" style={{ maxWidth: 440 }}>
            <div className="text-xs clWhite30 mt-4">
              <span>{t("verifyPhone", "msg")}</span>
              <span className="px-1">{user?.phoneno}</span>
            </div>
            <div className="my-8">
              <VerifyCodeInput onRef={codeRef} />
              <div className="mt-4">
                <span
                  className="btnText"
                  onClick={() => {
                    requestApi(
                      dispatch,
                      async () => {
                        if (!count) {
                          countDownSeconds(120, ({ second }) => {
                            if (second !== "00") {
                              setCount(second);
                            } else {
                              setCount(0);
                            }
                          });
                          // await userApi.getVerifycode({
                          //     phoneno,
                          // });
                        }
                      },
                      () => {
                        message.success(t("success", "msg"));
                        router.back();
                      }
                    );
                  }}
                >
                  {count ? count + "S" : t("send")}
                </span>
              </div>
            </div>
            <div
              className="py-2 mt-5 rounded-full btnYellow"
              onClick={() => {
                console.log(codeRef.value);
                if (codeRef.value.length < 6) {
                  message.error(t("required", "msg"));
                } else {
                  router.push("/user/bind-phone");
                }
              }}
            >
              {t("nextStep")}
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
