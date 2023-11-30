import react from "react";
import styles from "./get-records.module.scss";
import NavBar from "../commission/components/nav-bar";

const GetRecords = () => {
  return (
    <div className={styles.container}>
      <NavBar title="领取记录" />
    </div>
  );
};

export default GetRecords;
