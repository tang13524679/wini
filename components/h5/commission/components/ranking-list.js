import react, { useEffect, useState } from "react";
import styles from "./ranking-list.module.scss";
import { commissionApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Empty } from "antd-mobile";
import { t } from "@/utils/translate";

const RankingList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [rankingList, setRankingList] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionRank({
        timeRange: "week",
      });
      if (res.code == "1") {
        setRankingList(res.info.record);
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
      <div className="list-box">
        <div className="title">
          <img src="/assets/commission/ranking.png" />
          <span>{t("Rankinglist")}</span>
        </div>
        <div className="title-box">
          <div>{t("Rankings")}</div>
          <div>{t("account")}</div>
          <div>{t("commission")}（HKD）</div>
        </div>
        <div className="list">
          {rankingList.length == 0 && <Empty description={t("noRecords")} />}
          {rankingList.length > 0 &&
            rankingList.map((item, index) => {
              return (
                <div className="item">
                  {index == 0 && (
                    <div>
                      <img src="/assets/commission/top1.png" />
                    </div>
                  )}
                  {index == 1 && (
                    <div>
                      <img src="/assets/commission/top2.png" />
                    </div>
                  )}
                  {index == 2 && (
                    <div>
                      <img src="/assets/commission/top3.png" />
                    </div>
                  )}
                  {index > 2 && <div>{index + 1}</div>}
                  <div>{item.account}</div>
                  <div>{item.loginaccount}</div>
                </div>
              );
            })}
        </div>
        <div className="ranking-footer">
          {t("Lastupdatedon")}2023-10-16 00:00:34
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default RankingList;
