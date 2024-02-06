import react, { useState } from "react";
import styles from "./invite-with-prizes.module.scss";
import { Modal } from "antd-mobile";
import ShaeModal from "./shareModal";
import { useRouter } from "next/router";
import store from "store";
import { t } from "@/utils/translate";

const InviteWithPrizes = () => {
  const [visible, setVisible] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(true);
  const [isShare, setIsShare] = useState(false);
  const router = useRouter();
  const userStore = store.get("user");

  const withdraw = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit">{t("SuccessInvitation")}</div>
          <p>
            <span></span>
            {t("SuccessInvitationaward")}
          </p>
          <div className="txt">{t("correspondingReward")}</div>
        </div>
        <ul className="withdraw-ul">
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
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          {t("Ialreadyknow")}
        </div>
      </div>
    );
  };

  const income = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit income-tit">
            {t("permanentoutputincome")}
            <div>{t("Profitsharing")}</div>
          </div>
          <p className="p">
            <span></span>
            <div>{t("text2")}</div>
          </p>
        </div>
        <ul className="income-ul">
          <li>
            <span>{t("SX")}</span>
            <div className="num">0.2%</div>
          </li>
          <li>
            <span>{t("TY")}</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>{t("Slots/Fishing")}</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>{t("CP")}</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>{t("QP")}</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>{t("RechargeRebate")}</span>
            <div className="num">0.2%</div>
          </li>
        </ul>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          {t("Ialreadyknow")}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <div className="title">
        <h3>
          {t("perInvitation")}
          <span>{t("afriend")}</span>
        </h3>
        <h4>
          {t("perInvitation")}
          <span>{t("TheFollowingRewards")}</span>
        </h4>
      </div>
      <div className="tab-box">
        <div className="tab tab1">
          <p>{t("Bonusupto")}</p>
          <div className="num">3888</div>
          <div
            className="btn"
            onClick={() => {
              setVisible(true);
              setIsWithdraw(true);
            }}
          >
            {t("Withdrawmoneyfromfriends")}
          </div>
        </div>
        <div className="tab tab2">
          <p>{t("sustainedincome")}</p>
          <div className="num">20%</div>
          <div
            className="btn"
            onClick={() => {
              setVisible(true);
              setIsWithdraw(false);
            }}
          >
            {t("ComprehensiveCommission")}
          </div>
        </div>
      </div>
      <ShaeModal title={t("Promotenow")} />
      <div className="invite-list">
        <div
          className="btn"
          onClick={() => {
            if (userStore) {
              router.push("/commission/invitation-income");
            } else {
              router.push("/login");
            }
          }}
        >
          {t("Invitationincome")}
        </div>
        <div
          className="btn"
          onClick={() => {
            if (userStore) {
              router.push("/commission/unique-offer");
            } else {
              router.push("/login");
            }
          }}
        >
          {t("UniqueOffer")}
        </div>
      </div>
      <Modal
        visible={visible}
        closeOnAction
        showCloseButton
        content={isWithdraw ? withdraw() : income()}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default InviteWithPrizes;
