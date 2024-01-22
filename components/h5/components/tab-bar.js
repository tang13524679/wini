import react from "react";
import styles from "./tab-bar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import { t } from "@/utils/translate";

const TabBar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div
      className={styles.tabBarBox}
      style={{ maxWidth: "430px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="link-list">
        <Link href="/home" prefetch={false}>
          <div className="box">
            <div className="img-box">
              <img
                src={`${
                  pathname == "/home"
                    ? "/assets/tabbar/home-on.png"
                    : "/assets/tabbar/home.png"
                }`}
              />
            </div>
            <div className={`${pathname == "/home" ? "on" : ""} tit`}>
              {t("home", "nav")}
            </div>
          </div>
        </Link>
        <Link href="/commission" prefetch={false}>
          <div className="box">
            <div className="img-box">
              <img
                src={`${
                  pathname == "/commission"
                    ? "/assets/tabbar/commission-on.png"
                    : "/assets/tabbar/commission.png"
                }`}
              />
            </div>
            <div className={`${pathname == "/commission" ? "on" : ""} tit`}>
              {t("commission", "nav")}
            </div>
          </div>
        </Link>
        <Link href="/wallet" prefetch={false}>
          <div className="box wallet-box">
            <div className="img-box">
              <img
                src={`${
                  pathname == "/wallet"
                    ? "/assets/tabbar/wallet-on.png"
                    : "/assets/tabbar/wallet.png"
                }`}
              />
            </div>
            <div className={`${pathname == "/wallet" ? "on" : ""} tit`}>
              {t("wallet", "nav")}
            </div>
          </div>
        </Link>
        <Link href="/promo" prefetch={false}>
          <div className="box">
            <div className="img-box">
              <img
                src={`${
                  pathname == "/promo"
                    ? "/assets/tabbar/promo-on.png"
                    : "/assets/tabbar/promo.png"
                }`}
              />
            </div>
            <div className={`${pathname == "/promo" ? "on" : ""} tit`}>
              {t("promo", "nav")}
            </div>
          </div>
        </Link>
        <Link href="/mine" prefetch={false}>
          <div className="box">
            <div className="img-box">
              <img
                src={`${
                  pathname == "/mine"
                    ? "/assets/tabbar/mine-on.png"
                    : "/assets/tabbar/mine.png"
                }`}
              />
            </div>
            <div className={`${pathname == "/mine" ? "on" : ""} tit`}>
              {t("mine", "nav")}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
