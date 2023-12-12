import react, { useState, useEffect } from "react";
import styles from "./summary.module.scss";
import { Collapse } from "antd-mobile";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import ShaeModal from "./shareModal";
import { commissionApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";

const Sunmmary = () => {
  const [timeState, setTimeState] = useState("all");
  const [sumamount, setSumamount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
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
  const bonusList = [
    {
      id: 1,
      title: "总佣金（HKD）",
      directly: "直属佣金",
      under: "下级佣金",
      directlyTotal: 0,
      underTotal: 0,
    },
    {
      id: 2,
      title: "总团队成员数",
      directly: "直属成员",
      under: "下级成员",
      directlyTotal: 0,
      underTotal: 0,
    },
    {
      id: 3,
      title: "总邀请奖金",
      directly: "直属邀请奖金",
      under: "下级邀请奖金",
      directlyTotal: 0,
      underTotal: 0,
    },
    {
      id: 4,
      title: "总打码量奖金",
      directly: "直属打码量奖金",
      under: "下级打码量奖金",
      directlyTotal: 0,
      underTotal: 0,
    },
    {
      id: 5,
      title: "总存款奖金",
      directly: "直属存款奖金",
      under: "下级存款奖金",
      directlyTotal: 0,
      underTotal: 0,
    },
    {
      id: 6,
      title: "总提款奖金",
      directly: "直属提款奖金",
      under: "下级提款奖金",
      directlyTotal: 0,
      underTotal: 0,
    },
  ];

  const [{ user }, dispatch] = useGlobalState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.sumCommissions({
        loginaccount: user?.loginaccount,
        timeRange: timeState,
      });
      if (res.code == "1") {
        setSumamount(res.info.sumamount);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [timeState]);
  return (
    <div className={styles.container}>
      <div className="balance-box">
        <div className="top">
          <div className="text">分享佣金余额（HKD）：</div>
          <div className="num">{sumamount}</div>
          <div className="extract">提取</div>
        </div>
        <div className="bottom">
          <p>数据有延时，请于次日15:00更新为准</p>
          <div className="btn">规则说明</div>
        </div>
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
      <div className="collapse">
        {bonusList.map((item) => {
          return (
            <Collapse>
              <Collapse.Panel
                key={item.id}
                title={item.title}
                arrow={(active) =>
                  active ? (
                    <div className="total">
                      {item.directlyTotal + item.underTotal}
                      <UpOutline />
                    </div>
                  ) : (
                    <div className="total">
                      {item.directlyTotal + item.underTotal}
                      <DownOutline />
                    </div>
                  )
                }
              >
                <div className="panel-box">
                  <p>
                    {item.directly} <span>{item.directlyTotal}</span>
                  </p>
                  <p>
                    {item.under} <span>{item.underTotal}</span>
                  </p>
                </div>
              </Collapse.Panel>
            </Collapse>
          );
        })}
      </div>
      <ShaeModal title="立即推广" />
      {isLoading && <Loading />}
    </div>
  );
};
export default Sunmmary;
