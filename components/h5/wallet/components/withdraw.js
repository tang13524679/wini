import react, { useState } from "react";
import styles from "./withdraw.module.scss";
import { useBalance } from "@/hooks/fund";
import dynamic from "next/dynamic";
import { t } from "@/utils/translate";
const QuickBankCard = dynamic(() => import("./quickBankCard"));
const BankCard = dynamic(() => import("./bank-card"));
const CurrencyCard = dynamic(() => import("./currency-card"));

const Withdraw = () => {
  const [tabState, setTabState] = useState(1);
  const balance = useBalance();

  return (
    <div className={styles.container}>
      <div className="wallet-balance">
        {t("walletbalance")} {balance} HKD
      </div>
      <div className="tabBar-list">
        <div
          className={`${tabState == 1 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(1);
          }}
        >
          <img className="img1" src="/assets/wallet/yhk.png" />
          {t("FastRPM")}
          {t("Withdrawmoney")}
        </div>
        <div
          className={`${tabState == 2 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(2);
          }}
        >
          <img className="img1" src="/assets/wallet/yhk.png" />
          {t("Onlinebanking")}
          {t("Withdrawmoney")}
        </div>
        <div
          className={`${tabState == 3 ? "active" : ""} tab`}
          onClick={() => {
            setTabState(3);
          }}
        >
          <img className="img2" src="/assets/wallet/jm.png" />
          {t("cryptocurrency")}
        </div>
      </div>
      {tabState == 1 && <QuickBankCard balance={balance} />}
      {tabState == 2 && <BankCard balance={balance} />}
      {tabState == 3 && <CurrencyCard />}
    </div>
  );
};

export default Withdraw;
