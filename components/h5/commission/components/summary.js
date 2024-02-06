import react, { useState, useEffect, useMemo } from "react";
import styles from "./summary.module.scss";
import { Collapse } from "antd-mobile";
import { UpOutline, DownOutline } from "antd-mobile-icons";
import ShaeModal from "./shareModal";
import { commissionApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { Modal } from "antd";
import { t } from "@/utils/translate";

const Sunmmary = () => {
  const [timeState, setTimeState] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [sumInfo, setSumInfo] = useState({});
  const [confirmLoading, setConfirmLoading] = useState(false);
  const timeList = [
    {
      text: t("all"),
      value: "all",
    },
    {
      text: t("yesterday"),
      value: "yesterday",
    },
    {
      text: t("week"),
      value: "week",
    },
    {
      text: t("lastWeek"),
      value: "lastWeek",
    },
    {
      text: t("month"),
      value: "month",
    },
  ];
  const bonusList = useMemo(() => {
    return [
      {
        id: 1,
        title: t("bonusList1"),
        directly: t("bonusList2"),
        under: t("bonusList3"),
        directlyTotal: sumInfo.directCommission || 0,
        underTotal: sumInfo.lowCommission || 0,
      },
      {
        id: 2,
        title: t("bonusList4"),
        directly: t("bonusList5"),
        under: t("bonusList6"),
        directlyTotal: sumInfo.direcMember || 0,
        underTotal: sumInfo.lowMember || 0,
      },
      {
        id: 3,
        title: t("bonusList7"),
        directly: t("bonusList8"),
        under: t("bonusList9"),
        directlyTotal: sumInfo.directInvite || 0,
        underTotal: sumInfo.lowInvite || 0,
      },
      {
        id: 4,
        title: t("bonusList10"),
        directly: t("bonusList11"),
        under: t("bonusList12"),
        directlyTotal: sumInfo.directBet || 0,
        underTotal: sumInfo.lowBet || 0,
      },
      {
        id: 5,
        title: t("bonusList13"),
        directly: t("bonusList14"),
        under: t("bonusList15"),
        directlyTotal: sumInfo.directDeposit || 0,
        underTotal: sumInfo.lowDeposit || 0,
      },
      {
        id: 6,
        title: t("bonusList16"),
        directly: t("bonusList17"),
        under: t("bonusList18"),
        directlyTotal: sumInfo.directWithdraw || 0,
        underTotal: sumInfo.lowWithdraw || 0,
      },
    ];
  }, [sumInfo]);

  const [{ user }, dispatch] = useGlobalState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.sumCommissions({
        loginaccount: user?.loginaccount,
        timeRange: timeState,
      });
      if (res.code == "1") {
        setSumInfo(res.info);
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
          <div className="text">{t("bonusList19")}</div>
          <div className="num">{sumInfo.sumCommission || 0}</div>
          <div
            className="extract"
            onClick={() => {
              Modal.confirm({
                centered: true,
                title: t("Kindtips"),
                content: t("wantBalance"),
                okText: t("Sure"),
                cancelText: t("Cancel"),
                confirmLoading: confirmLoading,
                onOk: async () => {
                  try {
                    setConfirmLoading(true);
                    const res = await commissionApi.takeCommission();
                    if (res.code == "1") {
                      Toast.show({
                        content: res.info,
                      });
                      fetchData();
                    }
                  } catch (error) {
                    Toast.show({
                      content: error,
                    });
                    console.error(error);
                  } finally {
                    setConfirmLoading(false);
                  }
                },
              });
            }}
          >
            {t("extract")}
          </div>
        </div>
        <div className="bottom">
          <p>{t("bonusList20")}</p>
          <div className="btn">{t("Ruledescription")}</div>
        </div>
      </div>
      <div className="timelist">
        {timeList.map((item, index) => {
          return (
            <div
              className={`${timeState == item.value ? "active" : ""} item`}
              key={index}
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
      <ShaeModal title={t("Promotenow")} />
      {isLoading && <Loading />}
    </div>
  );
};
export default Sunmmary;
