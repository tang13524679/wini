import react, { useState, useEffect, useMemo } from "react";
import styles from "./rebate.module.scss";
import { promoApi } from "@/requests/frontend";
import Loading from "../../components/loading-mobile";
import { Toast } from "antd-mobile";

const Rebate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeState, setActiveState] = useState(1);
  const [rebateInfo, setRebateInfo] = useState({});
  const rebateList = useMemo(() => {
    return [
      {
        id: 1,
        name: "全部",
        list: [
          { ...rebateInfo["_SX"], type: "真人", c_name: "_SX" },
          { ...rebateInfo["_TY"], type: "体育", c_name: "_TY" },
          { ...rebateInfo["_DZ"], type: "电子", c_name: "_DZ" },
          { ...rebateInfo["_QP"], type: "棋牌", c_name: "_QP" },
          { ...rebateInfo["_DJ"], type: "电竞", c_name: "_DJ" },
          { ...rebateInfo["_BY"], type: "捕鱼", c_name: "_BY" },
        ],
      },
      {
        id: 2,
        name: "真人",
        list: [{ ...rebateInfo["_SX"], type: "真人", c_name: "_SX" }],
      },
      {
        id: 3,
        name: "体育",
        list: [{ ...rebateInfo["_TY"], type: "体育", c_name: "_TY" }],
      },
      {
        id: 4,
        name: "电子",
        list: [{ ...rebateInfo["_DZ"], type: "电子", c_name: "_DZ" }],
      },
      {
        id: 5,
        name: "棋牌",
        list: [{ ...rebateInfo["_QP"], type: "棋牌", c_name: "_QP" }],
      },
      {
        id: 6,
        name: "电竞",
        list: [{ ...rebateInfo["_DJ"], type: "电竞", c_name: "_DJ" }],
      },
      {
        id: 7,
        name: "捕鱼",
        list: [{ ...rebateInfo["_BY"], type: "捕鱼", c_name: "_BY" }],
      },
    ];
  }, [rebateInfo]);
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await promoApi.getUserRebate();
      if (res.code == "1") {
        setRebateInfo(res.info);
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
  }, []);
  return (
    <div className={styles.container}>
      <div className="left">
        <div className="navlist">
          {rebateList.map((item, index) => {
            return (
              <div
                className={`${activeState == item.id ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setActiveState(item.id);
                }}
              >
                <p>{item.name}</p>
              </div>
            );
          })}
          <div
            className="record-btn"
            onClick={async () => {
              if (user) {
                router.push("/user/transaction");
              } else {
                await Toast.show({
                  content: "未登录，请先登录",
                });
                router.push("/login");
              }
            }}
          >
            返水记录
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box-list">
          {rebateList.length > 0 &&
            rebateList[activeState - 1]?.list?.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="box">
                    <div className="name">{item.type}</div>
                    <div className="bet">
                      总有效投注：<p>{item.sumValidMoney}</p>
                    </div>
                    <div className="ratio">
                      总返水比例：<p>{item.sumRebatesCash}%</p>
                    </div>
                  </div>
                  <div className="box">
                    <div className="name">
                      {rebateInfo[item.c_name]?.games[""]?.gametype}
                    </div>
                    <div className="bet">
                      有效投注：
                      <span>
                        {rebateInfo[item.c_name]?.games[""]?.validMoney}
                      </span>
                    </div>
                    <div className="ratio">
                      返水比例：
                      <span>
                        {rebateInfo[item.c_name]?.games[""]?.rebatesCash}%
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Rebate;
