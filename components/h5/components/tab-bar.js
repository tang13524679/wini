import react from "react";
import styles from "./tab-bar.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

const TabBar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className={styles.tabBarBox}>
      <div className="link-list">
        <Link href="/home" passHref>
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
            <div className={`${pathname == "/home" ? "on" : ""} tit`}>首页</div>
          </div>
        </Link>
        <Link href="/commission" passHref>
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
              佣金
            </div>
          </div>
        </Link>
        <Link href="/wallet" passHref>
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
              钱包
            </div>
          </div>
        </Link>
        <Link href="/promo" passHref>
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
              优惠
            </div>
          </div>
        </Link>
        <Link href="/mine" passHref>
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
            <div className={`${pathname == "/mine" ? "on" : ""} tit`}>我的</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TabBar;
