import Head from "next/head";
import { useRouter } from "next/router";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { t } from "@/utils/translate";
import FadeInImage from "@/components/fadein-image";
import qs from "query-string";
import PageLoading from "@/components/page-loading";
import useSWR from "swr";
import styles from "./styles.module.scss";
import { Modal } from "antd";
import { useGlobalState } from "@/hooks/global";
import { commonApi } from "@/requests/frontend";
import { ENTERPRISE_CODE, EMPLOYEE_CODE } from "@/utils/const";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import NavBar from "@/components/h5/components/nav-bar";

export default function PromoDetailPage() {
  const [{ lang, user }] = useGlobalState();
  const router = useRouter();

  const { query } = router;
  const { data } = useSWR([
    "/ecrm-api/ActivityInfo/info",
    qs.stringify({
      ecactivitycode: query.id,
      enterprisecode: ENTERPRISE_CODE,
      params: encryptECB({
        ecactivitycode: query.id,
        enterprisecode: ENTERPRISE_CODE,
      }),
      signature: encryptMD5({
        ecactivitycode: query.id,
        enterprisecode: ENTERPRISE_CODE,
      }),
    }),
  ]);
  const detail = data?.info;

  function getRules() {
    if (lang === "en") return detail.activitycontenth5_en;
    if (lang === "vi") return detail.activitycontenth5_vi;
    return detail.activitycontenth5;
  }

  return (
    <InnerPageLayout>
      <Head>
        <title>Promo Detail - WIN</title>
      </Head>
      {detail && (
        <div className="sm:px-4">
          <div className="bgInnerPage break-normal">
            <NavBar title="活动详情" />
            {/* <InnerPageTitle title={t("promoDetail", "nav")} /> */}
            <div
              className={`${styles.container}`}
              style={{ marginTop: "20px" }}
            >
              <div className="aspect-w-16 aspect-h-7 bgPlaceholder2 relative">
                {detail.activityimage && (
                  <img src={detail.activityimage} />
                  // <FadeInImage src={detail.activityimage} noScale={true} />
                )}
              </div>
              <div className="text-base sm:text-lg clWhite my-2 sm:my-5">
                {lang === "zh" && detail.activityname}
                {lang === "en" && detail.activityname_en}
                {lang === "vi" && detail.activityname_vi}
              </div>
              <div className="flex items-center">
                <div className="icon-clock mr-2" />
                <div className="clWhite30 text-xs">
                  <span className="mr-1">{t("from")}</span>
                  <span>{detail.starttime}</span>
                  <span className="mx-1">{t("to")}</span>
                  <span>{detail.endtime}</span>
                </div>
              </div>
              <div className="clWhite70 text-justify my-4">
                {lang === "zh" && detail.activitycontent}
                {lang === "en" && detail.activitycontent_en}
                {lang === "vi" && detail.activitycontent_vi}
              </div>
              <div className="clMainYellow text-base my-4 uppercase">
                {t("eventRules")}
              </div>
              <div
                className="bdWhite10 rounded-md detail"
                dangerouslySetInnerHTML={{
                  __html: getRules(),
                }}
              />
              {/* 已参加 */}
              {detail.attend && (
                <div className="btnGray py-2 px-10 rounded-full mt-3 capitalize inline-block">
                  {t("participated")}
                </div>
              )}
              {/* 未参加 */}
              {!detail.attend && (
                <div
                  className="btnYellow py-2 px-10 rounded-full mt-3 capitalize inline-block"
                  onClick={async () => {
                    // 未登录
                    if (!user) {
                      router.push("/login");
                      // router.push(`/sign-in?from=${router.asPath}`);
                    } else {
                      commonApi
                        .promoInfoEnrollIn({
                          ecactivitycode: query.id,
                        })
                        .then((res) => {
                          Modal.info({
                            title: t("tips"),
                            content: res.info,
                            centered: true,
                          });
                        })
                        .catch((err) => {
                          Modal.info({
                            title: t("tips"),
                            content: err,
                            centered: true,
                          });
                        });
                    }
                  }}
                >
                  {t("enrollIn")}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </InnerPageLayout>
  );
}
