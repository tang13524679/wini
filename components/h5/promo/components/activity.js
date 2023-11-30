import react, { useState } from "react";
import styles from "./activity.module.scss";
import PromoNav from "./promoNav";

const Activity = () => {
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
          record="领取记录"
          href="/promo/activity"
        />
      </div>
      <div className="right">
        <div className="box">
          {list[activeState - 1].activityList.map((item, index) => {
            return (
              <div className="item" key={index}>
                <img src={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Activity;
