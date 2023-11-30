import react, { useState } from "react";
import styles from "./rebate.module.scss";
import PromoNav from "./promoNav";

const Rebate = () => {
  const [activeState, setActiveState] = useState(1);
  const list = [
    {
      id: 1,
      activity: "综合",
      activityIcon: "/assets/promo/icon1.png",
      activityList: ["/assets/promo/active1.png", "/assets/promo/active2.png"],
    },
    {
      id: 2,
      activity: "体育",
      activityIcon: "/assets/promo/icon2.png",
      activityList: ["/assets/promo/active1.png"],
    },
    {
      id: 3,
      activity: "真人",
      activityIcon: "/assets/promo/icon3.png",
      activityList: ["/assets/promo/active2.png"],
    },
    {
      id: 4,
      activity: "棋牌",
      activityIcon: "/assets/promo/icon4.png",
      activityList: [],
    },
    {
      id: 5,
      activity: "动物",
      activityIcon: "/assets/promo/icon5.png",
      activityList: [],
    },
    {
      id: 6,
      activity: "电竞",
      activityIcon: "/assets/promo/icon6.png",
      activityList: [],
    },
    {
      id: 7,
      activity: "电子",
      activityIcon: "/assets/promo/icon7.png",
      activityList: [],
    },
  ];
  return (
    <div className={styles.container}>
      <div className="left">
        <PromoNav
          list={list}
          setActiveState={setActiveState}
          activeState={activeState}
          record="返水记录"
          href="/promo/rebate"
        />
      </div>
      <div className="right">
        <div className="box-list">
          <div className="item">
            <div className="box">
              <div className="name">体育</div>
              <div className="bet">
                有效投注：<p>0</p>
              </div>
              <div className="ratio">
                返水比例：<p>2.5%</p>
              </div>
            </div>
            <div className="box">
              <div className="name">体育</div>
              <div className="bet">
                有效投注：<span>0</span>
              </div>
              <div className="ratio">
                返水比例：<span>2.5%</span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box">
              <div className="name">体育</div>
              <div className="bet">
                有效投注：<p>0</p>
              </div>
              <div className="ratio">
                返水比例：<p>2.5%</p>
              </div>
            </div>
            <div className="box">
              <div className="name">PP88 PLUS</div>
              <div className="bet">
                有效投注：<span>0</span>
              </div>
              <div className="ratio">
                返水比例：<span>0.0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rebate;
