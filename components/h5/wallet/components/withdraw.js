import react, { useState } from "react";
import styles from "./withdraw.module.scss";
import BankCard from "./bank-card";
import CurrencyCard from "./currency-card";

const Withdraw = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <div className={styles.container}>
      <div className="wallet-balance">钱包余额：100HKD</div>
      <div className="tabBar-list">
        <div
          className={`${tabState ? "active" : ""} tab`}
          onClick={() => {
            setTabState(true);
          }}
        >
          <img className="img1" src="/assets/wallet/yhk.png" />
          银行转账
        </div>
        <div
          className={`${!tabState ? "active" : ""} tab`}
          onClick={() => {
            setTabState(false);
          }}
        >
          <img className="img2" src="/assets/wallet/jm.png" />
          加密货币
        </div>
      </div>
      {tabState ? <BankCard /> : <CurrencyCard />}
    </div>
  );
};

export default Withdraw;
