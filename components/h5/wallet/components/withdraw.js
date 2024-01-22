import react, { useState } from "react";
import styles from "./withdraw.module.scss";
import { useBalance } from "@/hooks/fund";
import dynamic from "next/dynamic";
const QuickBankCard = dynamic(() => import("./quickBankCard"));
const BankCard = dynamic(() => import("./bank-card"));
const CurrencyCard = dynamic(() => import("./currency-card"));

const Withdraw = () => {
  const [tabState, setTabState] = useState(1);
  const balance = useBalance();

  return (
    <div className={styles.container}>
      <div className="wallet-balance">钱包余额：{balance} HKD</div>
      <div className="tabBar-list">
        <div
          className={`${tabState == 1 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(1);
          }}
        >
          <img className="img1" src="/assets/wallet/yhk.png" />
          转数快
        </div>
        <div
          className={`${tabState == 2 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(2);
          }}
        >
          <img className="img1" src="/assets/wallet/yhk.png" />
          银行转账
        </div>
        <div
          className={`${!tabState == 3 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(3);
          }}
        >
          <img className="img2" src="/assets/wallet/jm.png" />
          加密货币
        </div>
      </div>
      {tabState == 1 && <QuickBankCard balance={balance} />}
      {tabState == 2 && <BankCard balance={balance} />}
      {tabState == 3 && <CurrencyCard />}
    </div>
  );
};

export default Withdraw;
