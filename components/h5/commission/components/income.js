import react, { useEffect } from "react";
import styles from "./income.module.scss";

const Income = () => {
  return (
    <div className={styles.container}>
      <div className="box">
        <div className="title">
          <div className="tit">持续收益</div>
          <p>
            下线会员带来永久的持续收益，无论是存款、游戏投注、
            下线邀请好友（无限制分享下线的10%利益）等正常的
            用户行为，均带来持续的收益。以下是返利比例图示：
          </p>
        </div>
        <ul>
          <li>
            <span>体育</span>
            <div className="num">0.2%</div>
          </li>
          <li>
            <span>体育</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>老虎机/捕鱼</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>彩票</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>棋牌</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>充值返利</span>
            <div className="num">0.2%</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Income;
