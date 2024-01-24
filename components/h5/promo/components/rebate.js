import react, { useState, useEffect, useMemo } from "react";
import styles from "./rebate.module.scss";
import { promoApi } from "@/requests/frontend";
import Loading from "../../components/loading-mobile";
import { Toast } from "antd-mobile";
import { t } from "@/utils/translate";
import { Progress } from "antd";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import {
  DoubleRightOutlined,
  ContainerOutlined,
  CaretRightOutlined,
} from "@ant-design/icons";

const Rebate = () => {
  const router = useRouter();
  const [{ user, lang }, dispatch] = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [activeState, setActiveState] = useState("SX");
  const [rebateInfo, setRebateInfo] = useState({});
  const [topRebateInfo, setTopRebateInfo] = useState({});
  const [TYgametype, setTYgametype] = useState("");

  const categorieList = useMemo(() => {
    return [...Object.keys(rebateInfo)];
  }, [rebateInfo]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await promoApi.getUserRebate();
      if (res.code == "1") {
        setRebateInfo(res.info.bigTypeGameMap);
        setTopRebateInfo(res.info.sumMap);
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
      <div className="top-box">
        <div className="text-box">
          <div className="text">
            当日累积有效投注：
            <span>{topRebateInfo.tdayValid}</span>
          </div>
          <div className="text">
            预计返水：
            <span>{topRebateInfo.tdayRebates}</span>
          </div>
          <div className="text">
            昨日累积有效投注：
            <span>{topRebateInfo.ydayValid}</span>
          </div>
          <div className="text">
            已发放返水：
            <span style={{ color: "#48B726" }}>
              {topRebateInfo.ydayRebates}
            </span>
          </div>
        </div>
        <div className="txt">
          注：如当天有效打码量达到下一价梯或注单延近，還漏，差额部分将会在次日发放至主账户。
        </div>
        <div
          className="link-btn"
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
          育询更多返水记录 <DoubleRightOutlined />
        </div>
      </div>
      <div className="bottom-box">
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
          </div>
        </div>
        <div className="right">
          {activeState == "TY" && (
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
                    {lang == "en" ? item.gamename_en : item.gamename_cn}
                  </div>
                );
              })}
            </div>
          )}
          <div className="right-top">
            <div className="currValid">
              <ContainerOutlined
                style={{ color: "#959EA8", marginRight: "5px" }}
              />
              当前有效投注：
              {activeState == "TY"
                ? rebateInfo[activeState]?.games[TYgametype]?.currValid
                : rebateInfo[activeState]?.currValid}
            </div>
            <div className="currRatio-box">
              <div className="currRatio">
                <div className="item1">
                  当前返水：
                  {activeState == "TY"
                    ? (
                        rebateInfo[activeState]?.games[TYgametype]?.currRatio *
                        100
                      ).toFixed(2)
                    : (rebateInfo[activeState]?.currRatio * 100).toFixed(2)}
                  %
                </div>
                <div className="item2">
                  下一档返水：
                  <span>
                    {activeState == "TY"
                      ? (
                          rebateInfo[activeState]?.games[TYgametype]
                            ?.nextRatio * 100
                        ).toFixed(2)
                      : (rebateInfo[activeState]?.nextRatio * 100).toFixed(2)}
                    %
                  </span>
                </div>
              </div>
              <div className="progress">
                <Progress
                  percent={
                    activeState == "TY"
                      ? rebateInfo[activeState]?.games[TYgametype]?.process
                      : rebateInfo[activeState]?.process
                  }
                />
              </div>
              <div className="nextValid">
                {activeState == "TY"
                  ? rebateInfo[activeState]?.games[TYgametype]?.rebates
                  : rebateInfo[activeState]?.rebates}{" "}
                /{" "}
                {activeState == "TY"
                  ? rebateInfo[activeState]?.games[TYgametype]?.nextValid
                  : rebateInfo[activeState]?.nextValid}
              </div>
            </div>
          </div>
          <div className="right-bottom">
            <div className="title-box">
              <div className="im im1">有效投注（HKD）</div>
              <div className="im im2">返水比例</div>
            </div>
            <div className="valid-list">
              {rebateInfo[activeState]?.bonusList.map((item, index) => {
                return activeState == "TY" ? (
                  TYgametype == item.gametype && (
                    <div className="item">
                      <div className="valid tet">
                        {rebateInfo[activeState]?.games[TYgametype]
                          ?.currRatio == item.bonus && <CaretRightOutlined />}
                        {item.validMoney}
                      </div>
                      <div
                        className={`${
                          rebateInfo[activeState]?.games[TYgametype]
                            ?.currRatio == item.bonus
                            ? "ratio tet active"
                            : "ratio tet"
                        }`}
                      >
                        <span>{(item.bonus * 100).toFixed(2)}%</span>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="item">
                    <div className="valid tet">
                      {rebateInfo[activeState]?.currRatio == item.bonus && (
                        <CaretRightOutlined />
                      )}
                      {item.validMoney}
                    </div>
                    <div
                      className={`${
                        rebateInfo[activeState]?.currRatio == item.bonus
                          ? "ratio tet active"
                          : "ratio tet"
                      }`}
                    >
                      <span>{(item.bonus * 100).toFixed(2)}%</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {isLoading && <Loading />}
    </div>
  );
};

export default Rebate;
