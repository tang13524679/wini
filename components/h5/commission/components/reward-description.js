import react, { useState } from "react";
import styles from "./reward-description.module.scss";
import PromotionList from "./promotion-list";
import PromotionBtn from "./promotion-btn";

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
            奖励说明
          </div>
          <div
            className={`${!tabState ? "active" : ""} tab`}
            onClick={() => {
              setTabState(false);
            }}
          >
            <img src="/assets/commission/tab-icon2.png" />
            近期推廣
          </div>
        </div>
        <div className="tabBar-content">
          {tabState && (
            <div className="content">
              <div className="text-box">
                <div className="title">
                  <p>
                    <span></span>成功邀请好友，您都会获得以下相应的奖励。
                  </p>
                  <div className="txt">
                    (根据好友提款数额，系统自动计算相对应奖励）
                  </div>
                </div>
                <ul>
                  <li>
                    <div className="num">1</div>
                    <p>
                      您的朋友存款启动后，您将共有 <span>1</span> 次获得朋友
                      的存款额外奖励，每次获得最高 <span>500</span> 元奖励。
                    </p>
                  </li>
                  <li>
                    <div className="num">2</div>
                    <p>
                      第 <span>2</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
                    </p>
                  </li>
                  <li>
                    <div className="num">3</div>
                    <p>
                      第 <span>3</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
                    </p>
                  </li>
                  <li>
                    <div className="num">4</div>
                    <p>
                      第 <span>4</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
                    </p>
                  </li>
                  <li>
                    <div className="num">5</div>
                    <p>
                      第 <span>5</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
                    </p>
                  </li>
                  <li>
                    <div className="num">6</div>
                    <p>
                      第 <span>6</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
                    </p>
                  </li>
                  <li>
                    <div className="num">7</div>
                    <p>
                      第 <span>7</span> 次成功提款：立即获得最高
                      <span>500</span> 奖励
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
