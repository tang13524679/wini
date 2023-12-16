import react from "react";
import styles from "./cashback-record.module.scss";
import NavBar from "../components/nav-bar";
import { Empty } from "antd-mobile";

const CashbackRecord = () => {
  return (
    <div className={styles.container}>
      <NavBar title="交易记录" />
      <Empty description="暂无数据" />
    </div>
  );
};

export default CashbackRecord;
