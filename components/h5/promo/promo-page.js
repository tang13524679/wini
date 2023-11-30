import react, { useState } from "react";
import styles from "./promo-page.module.scss";
import Activity from "./components/activity";
import Rebate from "./components/rebate";

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
          <span>活动</span>
        </div>
        <div
          className={`${pageType == "rebate" ? "active" : ""} item`}
          onClick={() => {
            setPageType("rebate");
          }}
        >
          <span>返水</span>
        </div>
      </div>
      {pageType == "activity" && <Activity />}
      {pageType == "rebate" && <Rebate />}
    </div>
  );
};

export default PromoPage;
