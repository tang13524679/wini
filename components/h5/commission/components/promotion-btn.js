import react, { useState } from "react";
import styles from "./promotion-btn.module.scss";
import { Modal } from "antd-mobile";
import { useRouter } from "next/router";
import { t } from "@/utils/translate";

const PromotionBtn = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const caseList = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit">{t("Makingmoneycases")}</div>
        </div>
        <div className="content">{t("PromotionBtntext")}</div>
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
      <div
        className="btn"
        onClick={() => {
          router.push("/commission/marketing-platform");
        }}
      >
        {t("Marketingplatform")}
      </div>
      <div
        className="btn"
        onClick={() => {
          setVisible(true);
        }}
      >
        {t("Makingmoneycases")}
      </div>
      <Modal
        visible={visible}
        closeOnAction
        showCloseButton
        content={caseList()}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default PromotionBtn;
