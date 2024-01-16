import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { useGlobalState } from "@/hooks/global";
import { t } from "@/utils/translate";
import Link from "next/link";
import NavBar from "@/components/h5/components/nav-bar";

const UnSet = ({ title, to, status, btn }) => (
  <Link href={to} passHref>
    <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
      <div className="sm:basis-1/3">
        <div>{title}</div>
        <div className="clWhite30 sm:hidden">{status}</div>
      </div>
      <div className="flex-auto clWhite30 hidden sm:block">{status}</div>
      <div className="flex items-center">
        <div className="clWhite30 text-xs">{btn}</div>
        <div className="icon-more"></div>
      </div>
    </div>
  </Link>
);

export default function PersonalPage() {
  useAuth("/user/personal");
  const [{ user }] = useGlobalState();
  if (!user) return <></>;

  function getIpInfo() {
    // if (user.last_logincity)
    //     return `${user.last_loginip} (${user.last_logincity})`;
    return user.last_loginip;
  }

  return (
    <InnerPageLayout>
      <Head>
        <title>Personal - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="个人信息" />
          {/* <InnerPageTitle title={t('personal', 'nav')} /> */}
          <div className="flex justify-between items-center bdLine py-4">
            <div className="sm:basis-1/3">
              <div>{t("username", "field")}</div>
              <div className="clWhite sm:hidden">{user.loginaccount}</div>
            </div>
            <div className="flex-auto clWhite hidden sm:block">
              {user.loginaccount}
            </div>
          </div>
          {/* password */}
          <Link href="/user/change-password" passHref>
            <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
              <div className="sm:basis-1/3">
                <div>{t("password", "field")}</div>
                <div className="clWhite sm:hidden">******</div>
              </div>
              <div className="flex-auto clWhite hidden sm:block">******</div>
              <div className="flex items-center">
                <div className="clWhite30 text-xs">{t("toChange")}</div>
                <div className="icon-more"></div>
              </div>
            </div>
          </Link>
          {/* wallet password */}
          {user.fundpassword === "true" ? (
            <Link href="/user/change-wallet-password" passHref>
              <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
                <div className="sm:basis-1/3">
                  <div>{t("walletPassword", "field")}</div>
                  <div className="clWhite sm:hidden">******</div>
                </div>
                <div className="flex-auto clWhite hidden sm:block">******</div>
                <div className="flex items-center">
                  <div className="clWhite30 text-xs">{t("toChange")}</div>
                  <div className="icon-more"></div>
                </div>
              </div>
            </Link>
          ) : (
            <UnSet
              title={t("walletPassword", "field")}
              to="/user/set-wallet-password"
              status={t("unset")}
              btn={t("toSet")}
            />
          )}
          {/* email */}
          {user.email ? (
            <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
              <div className="sm:basis-1/3">
                <div>{t("email", "field")}</div>
                <div className="clWhite sm:hidden">{user.email}</div>
              </div>
              <div className="flex-auto clWhite hidden sm:block">
                {user.email}
              </div>
            </div>
          ) : (
            <UnSet
              title={t("email", "field")}
              to="/user/set-email"
              status={t("unset")}
              btn={t("toSet")}
            />
          )}
          {/* phone */}
          {/* <Link href="/user/verify-phone" passHref> */}
          {user.phoneno ? (
            <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
              <div className="sm:basis-1/3">
                <div>{t("phone", "field")}</div>
                <div className="clWhite sm:hidden">{user.phoneno}</div>
              </div>
              <div className="flex-auto clWhite hidden sm:block">
                {user.phoneno}
              </div>
            </div>
          ) : (
            <UnSet
              title={t("phone", "field")}
              to="/user/set-phone"
              status={t("unset")}
              btn={t("toSet")}
            />
          )}
          {/* </Link> */}
          {/* authentication */}
          {user.realname ? (
            <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
              <div className="sm:basis-1/3">
                <div>{t("authentication", "field")}</div>
                <div className="clWhite sm:hidden">{user.realname}</div>
              </div>
              <div className="flex-auto clWhite hidden sm:block">
                {user.realname}
              </div>
            </div>
          ) : (
            <UnSet
              title={t("authentication", "field")}
              to="/user/set-realname"
              status={t("unauthorized")}
              btn={t("toSet")}
            />
          )}
          {/* <div className="flex justify-between items-center bdLine py-4 cursor-pointer">
            <div className="sm:basis-1/3">
              <div>{t("authentication", "field")}</div>
              <div className="clWhite sm:hidden">
                {user.realname || t("unauthorized")}
              </div>
            </div>
            <div className="flex-auto clWhite hidden sm:block">
              {user.realname || t("unauthorized")}
            </div>
          </div> */}
          <div className="flex justify-between items-center bdLine py-4">
            <div className="sm:basis-1/3">
              <div>{t("lastLoginTime", "field")}</div>
              <div className="clWhite sm:hidden">{user.logindatetime}</div>
            </div>
            <div className="flex-auto clWhite hidden sm:block">
              {user.logindatetime}
            </div>
          </div>
          <div className="flex justify-between items-center bdLine py-4">
            <div className="sm:basis-1/3">
              <div>{t("lastLoginIP", "field")}</div>
              <div className="clWhite sm:hidden">{getIpInfo()}</div>
            </div>
            <div className="flex-auto clWhite hidden sm:block">
              {getIpInfo()}
            </div>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
