import react, { useState, useEffect } from "react";
import styles from "./detailed-data.module.scss";
import { commissionApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { Pagination } from "antd";
import { t } from "@/utils/translate";

const DetailedData = () => {
  const [detType, setDetType] = useState("DEPOSIT_RETURN");
  const [timeState, setTimeState] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [dataList, setDataList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const detTypeList = [
    {
      text: "存款",
      type: "DEPOSIT_RETURN",
    },
    {
      text: "投注",
      type: "GAME_RETURN",
    },
    {
      text: "开客奖",
      type: "INVITE_NEW_PLAYER",
    },
    {
      text: "下线代理分成",
      type: "SHARE_RETURN",
    },
    {
      text: "提现",
      type: "WITHDRAW_RETURN",
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

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionKind({
        activityenName: detType,
        timeRange: timeState,
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setDataList(res?.info?.rows);
        setTotal(res.info.results);
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
    setPageIndex(1);
    fetchData();
  }, [detType, timeState]);

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>{t("previous")}</a>;
    }
    if (type === "next") {
      return <a>{t("next")}</a>;
    }
    return originalElement;
  };

  const onChange = (page) => {
    setPageIndex(page);
    fetchData();
  };

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
        {dataList?.length ? (
          <>
            <div className="list-box">
              {dataList.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="text text1">{item.loginaccount}</div>
                    <div className="text text2">{item.depositmoney}</div>
                    <div className="text text3" style={{ color: "#48B726" }}>
                      {item.lsh}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="commission-pagination">
              <Pagination
                defaultCurrent={1}
                current={pageIndex}
                total={total}
                itemRender={itemRender}
                pageSize={pageSize}
                simple
                onChange={onChange}
              />
            </div>
          </>
        ) : (
          <p>暂无数据</p>
        )}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default DetailedData;
