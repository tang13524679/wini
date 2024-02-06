import react, { useState } from "react";
import styles from "./marketingPlatform.module.scss";
import NavBar from "@/components/h5/components/nav-bar";
import Head from "next/head";
import MarketingContent from "./components/marketing-content";
import { t } from "@/utils/translate";

const MarketingPlatform = () => {
  const [navState, setNavState] = useState("award");
  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title={t("Marketingplatform")} />
      <div className="marketing-nav">
        <div
          className={`${navState == "award" ? "active" : ""} item`}
          onClick={() => {
            setNavState("award");
          }}
        >
          <div className="text">{t("Promotionalrewards")}</div>
        </div>
        <div
          className={`${navState == "step" ? "active" : ""} item`}
          onClick={() => {
            setNavState("step");
          }}
        >
          <div className="text">{t("Promotionsteps")}</div>
        </div>
        <div
          className={`${navState == "platform" ? "active" : ""} item`}
          onClick={() => {
            setNavState("platform");
          }}
        >
          <div className="text">{t("Marketingplatform")}</div>
        </div>
      </div>
      {navState == "award" && (
        <MarketingContent type={navState} title={t("Themorepromotion")} />
      )}
      {navState == "step" && (
        <MarketingContent type={navState} title={t("Invitefriendstrilogy")} />
      )}
      {navState == "platform" && (
        <MarketingContent
          type={navState}
          title={t("Manyplatforms")}
          tit={t("incomeisincreasing")}
        />
      )}
    </div>
  );
};
export default MarketingPlatform;
