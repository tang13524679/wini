import react, { useState, useEffect, useMemo } from "react";
import styles from "./rebate.module.scss";
import { promoApi } from "@/requests/frontend";
import Loading from "../../components/loading-mobile";
import { Toast } from "antd-mobile";
import { t } from "@/utils/translate";

const Rebate = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [activeState, setActiveState] = useState("SX");
  const [rebateInfo, setRebateInfo] = useState({});
  const rebateList = useMemo(() => {
    return [
      {
        id: 1,
        name: "全部",
        list: [
          { ...rebateInfo["SX"], type: "真人", c_name: "SX" },
          { ...rebateInfo["TY"], type: "体育", c_name: "TY" },
          { ...rebateInfo["DZ"], type: "电子", c_name: "DZ" },
          { ...rebateInfo["QP"], type: "棋牌", c_name: "QP" },
          { ...rebateInfo["DJ"], type: "电竞", c_name: "DJ" },
          { ...rebateInfo["CP"], type: "彩票", c_name: "CP" },
          { ...rebateInfo["RH"], type: "赛马", c_name: "RH" },
          { ...rebateInfo["BY"], type: "捕鱼", c_name: "BY" },
        ],
      },
      {
        id: 2,
        name: "真人",
        list: [{ ...rebateInfo["SX"], type: "真人", c_name: "SX" }],
      },
      {
        id: 3,
        name: "体育",
        list: [{ ...rebateInfo["TY"], type: "体育", c_name: "TY" }],
      },
      {
        id: 4,
        name: "电子",
        list: [{ ...rebateInfo["DZ"], type: "电子", c_name: "DZ" }],
      },
      {
        id: 5,
        name: "棋牌",
        list: [{ ...rebateInfo["QP"], type: "棋牌", c_name: "QP" }],
      },
      {
        id: 6,
        name: "电竞",
        list: [{ ...rebateInfo["DJ"], type: "电竞", c_name: "DJ" }],
      },
      {
        id: 7,
        name: "电竞",
        list: [{ ...rebateInfo["CP"], type: "彩票", c_name: "CP" }],
      },
      {
        id: 8,
        name: "电竞",
        list: [{ ...rebateInfo["RH"], type: "赛马", c_name: "RH" }],
      },
      {
        id: 9,
        name: "捕鱼",
        list: [{ ...rebateInfo["BY"], type: "捕鱼", c_name: "BY" }],
      },
    ];
  }, [rebateInfo]);

  const categorieList = useMemo(() => {
    return [...Object.keys(rebateInfo)];
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
          {categorieList.map((item, index) => {
            return (
              <div
                className={`${activeState == item ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setActiveState(item);
                }}
              >
                <p>{t(item)}</p>
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
          {activeState != "TY" ? (
            <div className="item">
              <div className="box">
                <div className="name">{t(activeState)}</div>
                <div className="bet">
                  有效投注：
                  <p>{rebateInfo[activeState]?.sumValidMoney}</p>
                </div>
                <div className="ratio">
                  返水金额：
                  <p>{rebateInfo[activeState]?.sumRebatesCash}</p>
                </div>
              </div>
            </div>
          ) : (
            rebateInfo[activeState]?.bonusList.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="box">
                    <div className="name">{item.gametype}</div>
                    <div className="bet">
                      有效投注：
                      <p>{item.validMoney}</p>
                    </div>
                    <div className="ratio">
                      返水比例：
                      <p>{item.bonus}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Rebate;
