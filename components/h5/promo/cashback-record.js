import react from "react";
import styles from "./cashback-record.module.scss";
import NavBar from "../components/nav-bar";
import { Empty } from "antd-mobile";

const CashbackRecord = () => {
  return (
    <div className={styles.container}>
      <NavBar title={t("sideRecords")} />
      <Empty description={t("noRecords")} />
    </div>
  );
};

export default CashbackRecord;
