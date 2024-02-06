import react, { useEffect } from "react";
import styles from "./index.module.scss";
import dynamic from "next/dynamic";
import { t } from "@/utils/translate";
const NavBar = dynamic(() => import("@/components/h5/components/nav-bar"));
const InviteWithPrizes = dynamic(() =>
  import("@/components/h5/commission/components/invite-with-prizes")
);
const RewardDescription = dynamic(() =>
  import("./components/reward-description")
);
const Income = dynamic(() => import("./components/income"));
const Head = dynamic(() => import("next/head"));

const CommissionPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title={t("Invite")}></NavBar>
      <InviteWithPrizes></InviteWithPrizes>
      <RewardDescription></RewardDescription>
      <Income></Income>
      <div className="plan-box">
        <div className="box">
          <div className="title">
            <p>{t("affiliateProgram")}</p>
            <span>{t("makeMoreMoney")}</span>
          </div>
          <div className="plan-user">
            <img className="avatar" src="/assets/commission/avatar.png" />
            <div className="hierarchy">
              <div className="btn" style={{ margin: "0 auto" }}>
                {t("you")}
              </div>
              <div className="btn-box">
                <div className="btn">{t("Offline")}</div>
                <img src="/assets/commission/bottom.png" />
                <img src="/assets/commission/top.png" />
                <div className="btn">{t("income")}</div>
              </div>
            </div>
            <img
              className="planUserImg"
              src="/assets/commission/planUser.png"
            />
          </div>
        </div>
      </div>
      <div className="notice-text">
        <div className="box">
          <div className="title">{t("Precautions")}</div>
          <ul>
            <li>{t("matter1")}</li>
            <li>{t("matter2")}</li>
            <li>{t("matter3")}</li>
            <li>{t("matter4")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommissionPage;
