import react, { useState } from "react";
import styles from "./promotion-btn.module.scss";
import { Modal } from "antd-mobile";
import { useRouter } from "next/router";

const PromotionBtn = () => {
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const caseList = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit">赚钱案例</div>
        </div>
        <div className="content">
          作為一名熱衷於真人在線賭場遊鹹的玩家,我一直在WIN1找到了樂趣與挑戰。不僅能夠滿足我的遊戲熱情,更在其中找到了一種互動和分享的快樂。今天,我想和大家分享一下我的推廣心得。
        </div>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          我已知晓
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
        推广平台
      </div>
      <div
        className="btn"
        onClick={() => {
          setVisible(true);
        }}
      >
        赚钱案例
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
