import react, { useState } from "react";
import styles from "./recharge.module.scss";
import BankTransfer from "./bank-transfer";
import Cryptocurrency from "./cryptocurrency";

const Recharge = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <div className={styles.container}>
      <div className="top-box">
        <div className="tit">充值方式</div>
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
      </div>
      {tabState ? <BankTransfer /> : <Cryptocurrency />}
    </div>
  );
};

export default Recharge;
