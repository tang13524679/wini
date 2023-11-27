import react, { useEffect } from "react";
import styles from "./promotion-list.module.scss";
import PromotionBtn from "./promotion-btn";

const PromotionList = () => {
  return (
    <div className={styles.container}>
      <div className="title">賓時推廣收益廣播，隨時推廣都不遲！</div>
      <ul>
        <li>
          <p>cki****ggg</p>
          <div className="income">
            成功召喚請好友獲得<span>$59</span>，合計收益<span>$1095</span>
          </div>
        </li>
        <li>
          <p>aye***hui</p>
          <div className="income">
            邀請好朋友存款返利獲得<span>$40</span>，合計收益<span>$7585</span>
          </div>
        </li>
        <li>
          <p>aye***hui</p>
          <div className="income">
            邀請好朋友存款返利獲得<span>$40</span>，合計收益<span>$7585</span>
          </div>
        </li>
        <li>
          <p>aye***hui</p>
          <div className="income">
            邀請好朋友存款返利獲得<span>$40</span>，合計收益<span>$7585</span>
          </div>
        </li>
      </ul>
      <PromotionBtn></PromotionBtn>
    </div>
  );
};

export default PromotionList;
