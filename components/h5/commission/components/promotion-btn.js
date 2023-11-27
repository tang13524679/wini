import react from "react";
import styles from "./promotion-btn.module.scss";

const PromotionBtn = () => {
  return (
    <div className={styles.box}>
      <div className="btn">推广平台</div>
      <div className="btn">赚钱案例</div>
    </div>
  );
};

export default PromotionBtn;
