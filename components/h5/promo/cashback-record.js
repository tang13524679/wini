import react from "react";
import styles from "./cashback-record.module.scss";
import NavBar from "../components/nav-bar";

const CashbackRecord = () => {
  return (
    <div className={styles.container}>
      <NavBar title="交易记录" />
    </div>
  );
};

export default CashbackRecord;
