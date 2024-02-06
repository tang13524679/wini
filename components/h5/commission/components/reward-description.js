import react, { useState } from "react";
import styles from "./reward-description.module.scss";
import PromotionList from "./promotion-list";
import PromotionBtn from "./promotion-btn";
import { t } from "@/utils/translate";

const RewardDescription = () => {
  const [tabState, setTabState] = useState(true);

  return (
    <div className={styles.container}>
      <div className="tab-bar">
        <div className="hr"></div>
        <div className="tabBar-list">
          <div
            className={`${tabState ? "active" : ""} tab`}
            onClick={() => {
              setTabState(true);
            }}
          >
            <img src="/assets/commission/tab-icon1.png" />
            {t("RewardDescription")}
          </div>
          <div
            className={`${!tabState ? "active" : ""} tab`}
            onClick={() => {
              setTabState(false);
            }}
          >
            <img src="/assets/commission/tab-icon2.png" />
            {t("Recentpromotion")}
          </div>
        </div>
        <div className="tabBar-content">
          {tabState && (
            <div className="content">
              <div className="text-box">
                <div className="title">
                  <p>
                    <span></span>
                    {t("SuccessInvitationaward")}
                  </p>
                  <div className="txt">{t("initiatedTotal")}</div>
                </div>
                <ul>
                  <li>
                    <div className="num">1</div>
                    <p>
                      {t("initiatedTotal")}
                      <span>1</span> {t("secondbestfriend")}
                      {t("Depositbonus")} <span>500</span> {t("yuanreward")}
                    </p>
                  </li>
                  <li>
                    <div className="num">2</div>
                    <p>
                      {t("No")} <span>2</span> {t("text")}
                      <span>500</span>
                      {t("award")}
                    </p>
                  </li>
                  <li>
                    <div className="num">3</div>
                    <p>
                      {t("No")} <span>3</span> {t("text")}
                      <span>500</span> {t("award")}
                    </p>
                  </li>
                  <li>
                    <div className="num">4</div>
                    <p>
                      {t("No")} <span>4</span> {t("text")}
                      <span>500</span> {t("award")}
                    </p>
                  </li>
                  <li>
                    <div className="num">5</div>
                    <p>
                      {t("No")} <span>5</span> {t("text")}
                      <span>500</span> {t("award")}
                    </p>
                  </li>
                  <li>
                    <div className="num">6</div>
                    <p>
                      {t("No")} <span>6</span> {t("text")}
                      <span>500</span> {t("award")}
                    </p>
                  </li>
                  <li>
                    <div className="num">7</div>
                    <p>
                      {t("No")} <span>7</span> {t("text")}
                      <span>500</span> {t("award")}
                    </p>
                  </li>
                </ul>
              </div>
              <PromotionBtn></PromotionBtn>
            </div>
          )}
          {!tabState && <PromotionList></PromotionList>}
        </div>
      </div>
    </div>
  );
};

export default RewardDescription;
