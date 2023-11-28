import react, { useState } from "react";
import styles from "./detailed-data.module.scss";

const DetailedData = () => {
  const [detType, setDetType] = useState("deposit");
  const [timeState, setTimeState] = useState("all");

  const detTypeList = [
    {
      text: "存款",
      type: "deposit",
    },
    {
      text: "投注",
      type: "bet",
    },
    {
      text: "开客奖",
      type: "open",
    },
    {
      text: "下线代理分成",
      type: "acting",
    },
    {
      text: "提现",
      type: "withdraw",
    },
  ];
  const timeList = [
    {
      text: "全部",
      value: "all",
    },
    {
      text: "昨天",
      value: "yesterday",
    },
    {
      text: "本周",
      value: "week",
    },
    {
      text: "上周",
      value: "lastWeek",
    },
    {
      text: "本月",
      value: "month",
    },
  ];
  return (
    <div className={styles.container}>
      <div className="tit">数据有延时，请于次日15:00更新为准</div>
      <div className="detail-type-box">
        {detTypeList.map((item) => {
          return (
            <div className="box">
              <div
                className={`${item.type == detType ? "active" : ""} item`}
                onClick={() => {
                  setDetType(item.type);
                }}
              >
                {item.text}
              </div>
            </div>
          );
        })}
      </div>
      <div className="timelist">
        {timeList.map((item) => {
          return (
            <div
              className={`${timeState == item.value ? "active" : ""} item`}
              key={item.text}
              onClick={() => {
                setTimeState(item.value);
              }}
            >
              {item.text}
            </div>
          );
        })}
      </div>
      <div className="list-title">
        <div>会员</div>
        <div>存款金额(KHD)</div>
        <div>带来收益(HKD)</div>
      </div>
      <div className="list">
        <p>暂无数据</p>
      </div>
    </div>
  );
};

export default DetailedData;
