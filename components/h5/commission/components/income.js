import react, { useEffect } from "react";
import styles from "./income.module.scss";
import { t } from "@/utils/translate";

const Income = () => {
  return (
    <div className={styles.container}>
      <div className="box">
        <div className="title">
          <div className="tit">{t("sustainedincome")}</div>
          <p>{t("text2")}</p>
        </div>
        <ul>
          <li>
            <div className="boxs">
              <span>{t("SX")}</span>
              <div className="num">0.2%</div>
            </div>
          </li>
          <li>
            <div className="boxs">
              <span>{t("TY")}</span>
              <div className="num">0.1%</div>
            </div>
          </li>
          <li>
            <div className="boxs">
              <span>{t("Slots/Fishing")}</span>
              <div className="num">0.3%</div>
            </div>
          </li>
          <li>
            <div className="boxs">
              <span>{t("CP")}</span>
              <div className="num">0.1%</div>
            </div>
          </li>
          <li>
            <div className="boxs">
              <span>{t("QP")}</span>
              <div className="num">0.3%</div>
            </div>
          </li>
          <li>
            <div className="boxs">
              <span>{t("RechargeRebate")}</span>
              <div className="num">0.2%</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Income;
