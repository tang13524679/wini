import react, { useState } from "react";
import styles from "./promo-page.module.scss";
import dynamic from "next/dynamic";
import { t } from "@/utils/translate";
const Activity = dynamic(() => import("./components/activity"));
const Rebate = dynamic(() => import("./components/rebate"));

const PromoPage = () => {
  const [pageType, setPageType] = useState("activity");
  return (
    <div className={styles.container}>
      <div className="navbar">
        <div
          className={`${pageType == "activity" ? "active" : ""} item`}
          onClick={() => {
            setPageType("activity");
          }}
        >
          <span>{t("Activity")}</span>
        </div>
        <div
          className={`${pageType == "rebate" ? "active" : ""} item`}
          onClick={() => {
            setPageType("rebate");
          }}
        >
          <span>{t("rebate")}</span>
        </div>
      </div>
      {pageType == "activity" && <Activity />}
      {pageType == "rebate" && <Rebate />}
    </div>
  );
};

export default PromoPage;
