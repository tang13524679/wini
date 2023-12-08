import react, { useState } from "react";
import styles from "./index.module.scss";
import Recharge from "./components/recharge";
import Withdraw from "./components/withdraw";

const WalletPage = () => {
  const [pageType, setPageType] = useState("recharge");
  return (
    <div className={styles.container}>
      <div className="navbar">
        <div
          className={`${pageType == "recharge" ? "active" : ""} item`}
          onClick={() => {
            setPageType("recharge");
          }}
        >
          <span>充值</span>
        </div>
        <div
          className={`${pageType == "withdraw" ? "active" : ""} item`}
          onClick={() => {
            setPageType("withdraw");
          }}
        >
          <span>提款</span>
        </div>
      </div>
      {pageType == "recharge" && <Recharge />}
      {pageType == "withdraw" && <Withdraw />}
    </div>
  );
};

export default WalletPage;
