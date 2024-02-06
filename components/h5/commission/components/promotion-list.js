import react, { useEffect } from "react";
import styles from "./promotion-list.module.scss";
import PromotionBtn from "./promotion-btn";
import { t } from "@/utils/translate";

const PromotionList = () => {
  return (
    <div className={styles.container}>
      <div className="title">{t("Timelypromotion")}</div>
      <ul>
        <li>
          <p>cki****ggg</p>
          <div className="income">
            {t("Successfullysummoned")}
            <span>$59</span>
            {t("totalrevenue")}
            <span>$1095</span>
          </div>
        </li>
        <li>
          <p>cki****ggg</p>
          <div className="income">
            {t("Successfullysummoned")}
            <span>$59</span>
            {t("totalrevenue")}
            <span>$1095</span>
          </div>
        </li>
        <li>
          <p>cki****ggg</p>
          <div className="income">
            {t("Successfullysummoned")}
            <span>$59</span>
            {t("totalrevenue")}
            <span>$1095</span>
          </div>
        </li>
        <li>
          <p>cki****ggg</p>
          <div className="income">
            {t("Successfullysummoned")}
            <span>$59</span>
            {t("totalrevenue")}
            <span>$1095</span>
          </div>
        </li>
      </ul>
      <PromotionBtn></PromotionBtn>
    </div>
  );
};

export default PromotionList;
