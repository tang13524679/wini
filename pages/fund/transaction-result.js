import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import Link from "next/link";
import NavBar from "@/components/h5/components/nav-bar";

export default function ResultPage() {
  useAuth("/fund/upload-slip");

  return (
    <InnerPageLayout>
      <Head>
        <title>Transaction Result - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="转账结果" />
          {/* <InnerPageTitle
                        title={t('transactionResult', 'nav')}
                        backRoute="no"
                    /> */}
          <div className="py-12">
            <div className="w-32 h-32 mx-auto">
              <img src={"/assets/success.png"} />
            </div>
            <div className="clWhite text-2xl text-center mt-4">
              {t("success")}
            </div>
            <div className="clWhite70 text-center mt-4">
              {t("checkTransaction", "msg")}
            </div>
            <div className="flex justify-center mt-8">
              <Link href={"/home"} passHref>
                <div className="btnGray py-2  w-52 rounded-full text-center mr-4">
                  {t("backToHome", "nav")}
                </div>
              </Link>
              <Link href={"/user/transaction"} passHref>
                <div className="btnYellow py-2 w-52 rounded-full text-center">
                  {t("transactionRecords", "nav")}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
