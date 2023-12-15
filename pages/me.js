import Head from "next/head";
import MainLayout from "@/layouts/main";
// import LangDropDown from '@/components/lang-dropdown';
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { t } from "@/utils/translate";
import Link from "next/link";
// import useSWR from 'swr';
import { Modal } from "antd";
import { cleanUserStore } from "@/utils/common";
import UserSummary from "@/components/user-summary";

export default function MePage() {
  const [{ user, badge }, dispatch] = useGlobalState();
  const router = useRouter();
  // const { data: badge } = useSWR(user && '/ecrm-api/UserMessage/MessageCount');

  return (
    <MainLayout>
      <Head>
        <title>Me - WIN</title>
      </Head>
      <div className="p-4 bgInnerPage capitalize">
        <UserSummary className="mb-4" />
        {/* <div className="flex">
                    <Link href="/fund/trans" passHref>
                        <div className="btn-icon-text bgGradientYellow rounded-full px-5 py-2">
                            <i className="icon icon-deposit mr-2"></i>
                            <span className="text clWhite icon-text14">
                                {t('deposit', 'nav')}
                            </span>
                        </div>
                    </Link>
                    <div
                        className="btn-icon-text bgGradientBlue rounded-full px-5 py-2 ml-4"
                        onClick={() => {
                            if (user) {
                                if (user.fundpassword === 'false') {
                                    Modal.confirm({
                                        centered: true,
                                        title: t('tips'),
                                        content: t(
                                            'needSetWalletPassword',
                                            'msg'
                                        ),
                                        onOk: () => {
                                            router.push(
                                                '/user/set-wallet-password'
                                            );
                                        },
                                    });
                                } else {
                                    router.push('/fund/trans');
                                }
                            } else {
                                router.push('/sign-in');
                            }
                        }}
                    >
                        <i className="icon icon-withdraw mr-2"></i>
                        <span className="text clWhite icon-text14">
                            {t('withdraw', 'nav')}
                        </span>
                    </div>
                </div> */}

        <div className="h-4"></div>

        <Link href="/user/vip-club" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-vip-club mr-4"></div>
            <div className="flex-auto text-base">{t("vipClub", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="https://gg8daily.net" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-agent mr-4"></div>
            <div className="flex-auto text-base">
              {t("agencyCooperation", "nav")}
            </div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="/user/task" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-task mr-4"></div>
            <div className="flex-auto text-base">{t("task", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>

        <div className="line my-3"></div>

        <Link href="/user/personal" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-personal mr-4"></div>
            <div className="flex-auto text-base">{t("personal", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="/user/bank-card" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-bank-card mr-4"></div>
            <div className="flex-auto text-base">{t("bankCard", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="/user/game-history" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-game-history mr-4"></div>
            <div className="flex-auto text-base">{t("gameHistory", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="/user/transaction" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-transaction mr-4"></div>
            <div className="flex-auto text-base">{t("transaction", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        <Link href="/user/favorites" passHref>
          <div className="flex justify-between items-center py-3">
            <div className="icon-favorites mr-4"></div>
            <div className="flex-auto text-base">{t("favorites", "nav")}</div>
            <div className="icon-more"></div>
          </div>
        </Link>
        {/* <Link href="/user/messages" passHref>
                    <div className="flex justify-between items-center py-3">
                        <div className="icon-messages mr-4"></div>
                        <div className="flex-auto text-base">
                            {t('messages', 'nav')}
                        </div>
                        <div>
                            {badge?.info && badge?.info != 0 && (
                                <span className="badge">{badge.info}</span>
                            )}
                        </div>
                        <div className="icon-more"></div>
                    </div>
                </Link> */}

        <div className="line my-3"></div>

        {user && (
          <div
            className="flex justify-between items-center py-3"
            onClick={() => {
              Modal.confirm({
                centered: true,
                title: t("tips"),
                content: t("logoutConfirm", "msg"),
                okText: t("logout", "nav"),
                onOk: () => {
                  cleanUserStore();
                  dispatch({
                    type: "set_user",
                    payload: null,
                  });
                  router.push("/home");
                },
              });
            }}
          >
            <div className="icon-logout mr-4"></div>
            <div className="flex-auto text-base">{t("logout", "nav")}</div>
          </div>
        )}

        {/*<LangDropDown />*/}
      </div>
    </MainLayout>
  );
}
