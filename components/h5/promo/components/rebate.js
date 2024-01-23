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
  const [TYgametype, setTYgametype] = useState("");

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

  const TYlisst = useMemo(() => {
    const newlist = new Map();
    rebateInfo["TY"]?.bonusList.forEach((item) => {
      newlist.set(item.gametype, item);
    });
    const newTYlist = [...newlist.values()];
    setTYgametype(newTYlist[0]?.gametype);
    return newTYlist;
  }, [rebateInfo]);

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
            <div className="TY-box">
              <div className="item">
                <div className="box">
                  <div className="name">{t(activeState)}</div>
                  <div className="bet">
                    总计有效投注：
                    <p>{rebateInfo[activeState]?.sumValidMoney}</p>
                  </div>
                  <div className="ratio">
                    总计返水金额：
                    <p>{rebateInfo[activeState]?.sumRebatesCash}</p>
                  </div>
                </div>
                {/* {rebateInfo[activeState]?.bonusList.map((item, index) => {
                return (
                  <div className="box" key={index}>
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
                );
              })} */}
              </div>
              <div className="gametype">
                {TYlisst.map((item, index) => {
                  return (
                    <div
                      className={`${
                        TYgametype == item.gametype ? "active it" : "it"
                      }`}
                      key={index}
                      onClick={() => {
                        setTYgametype(item.gametype);
                      }}
                    >
                      {item.gametype}
                    </div>
                  );
                })}
              </div>
              {rebateInfo["TY"].bonusList.map((item, index) => {
                return (
                  TYgametype == item.gametype && (
                    <div className="item">
                      <div className="box">
                        <div className="name">{item.gametype}</div>
                        <div className="bet">
                          有效投注：
                          <p>{item.validMoney}</p>
                        </div>
                        <div className="ratio">
                          返水比例：
                          <p>{(item.bonus * 100).toFixed(2)}%</p>
                        </div>
                      </div>
                    </div>
                  )
                );
              })}
            </div>
          )}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Rebate;
