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
            {t("tdayValid")}
            <span>{topRebateInfo.tdayValid}</span>
          </div>
          <div className="text">
            {t("tdayRebates")}
            <span>{topRebateInfo.tdayRebates}</span>
          </div>
          <div className="text">
            {t("ydayValid")}
            <span>{topRebateInfo.ydayValid}</span>
          </div>
          <div className="text">
            {t("ydayRebates")}
            <span style={{ color: "#48B726" }}>
              {topRebateInfo.ydayRebates}
            </span>
          </div>
        </div>
        <div className="txt">{t("topRebateInfotext")}</div>
        <div
          className="link-btn"
          onClick={async () => {
            if (user) {
              router.push("/user/transaction");
            } else {
              await Toast.show({
                content: t("Notloggedin"),
              });
              router.push("/login");
            }
          }}
        >
          {t("rebaterecords")} <DoubleRightOutlined />
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
              {t("Currentvalidbets")}
              {activeState == "TY"
                ? rebateInfo[activeState]?.games[TYgametype]?.currValid
                : rebateInfo[activeState]?.currValid}
            </div>
            <div className="currRatio-box">
              <div className="currRatio">
                <div className="item1">
                  {t("Currentrebate")}
                  {activeState == "TY"
                    ? (
                        rebateInfo[activeState]?.games[TYgametype]?.currRatio *
                        100
                      ).toFixed(2)
                    : (rebateInfo[activeState]?.currRatio * 100).toFixed(2)}
                  %
                </div>
                <div className="item2">
                  {t("Nextlevelrebate")}
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
              <div className="im im1">{t("Validbet")}（HKD）</div>
              <div className="im im2">{t("Rebateratio")}</div>
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
