import react, { useState } from "react";
import styles from "./recharge.module.scss";
import dynamic from "next/dynamic";
const QuicklyTransfer = dynamic(() => import("./quickly-transfer"));
const BankTransfer = dynamic(() => import("./bank-transfer"));
const Cryptocurrency = dynamic(() => import("./cryptocurrency"));

const Recharge = () => {
  const [tabState, setTabState] = useState(1);

  return (
    <div className={styles.container}>
      <div className="top-box">
        <div className="tit">充值方式</div>
        <div className="tabBar-list">
          <div
            className={`${tabState == 1 ? "active" : ""} tab`}
            onClick={() => {
              setTabState(1);
            }}
          >
            <img className="img1" src="/assets/wallet/yhk.png" />
            转钱快
          </div>
          <div
            className={`${tabState == 2 ? "active" : ""} tab`}
            onClick={() => {
              setTabState(2);
            }}
          >
            <img className="img1" src="/assets/wallet/yhk.png" />
            网银支付
          </div>
          <div
            className={`${tabState == 3 ? "active" : ""} tab`}
            onClick={() => {
              setTabState(3);
            }}
          >
            <img className="img2" src="/assets/wallet/jm.png" />
            加密货币
          </div>
        </div>
      </div>
      {tabState == 1 && <QuicklyTransfer />}
      {tabState == 2 && <BankTransfer />}
      {tabState == 3 && <Cryptocurrency />}
    </div>
  );
};

export default Recharge;
