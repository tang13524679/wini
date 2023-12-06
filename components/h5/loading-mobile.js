import react from "react";
import styles from "./loading-mobile.module.scss";
import { SpinLoading } from "antd-mobile";

export default function Loading() {
  return (
    <div className={styles.loadingContainer}>
      <SpinLoading color="primary" style={{ "--size": "48px" }} />
    </div>
  );
}
