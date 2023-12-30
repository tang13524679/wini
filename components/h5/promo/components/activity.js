import react, { useState, useEffect } from "react";
import styles from "./activity.module.scss";
import { PROMO_TYPES } from "@/utils/const";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import Loading from "../../components/loading-mobile";
import { promoApi } from "@/requests/frontend";
import Link from "next/link";
import { Toast } from "antd-mobile";

const Activity = () => {
  const router = useRouter();
  const [{ user }, dispatch] = useGlobalState();
  const [activeType, setActiveType] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [list, setList] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await promoApi.listActivityData({
        activity_type: activeType,
      });
      if (res.code == "1") {
        setList(res.info);
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
  }, [activeType]);
  return (
    <div className={styles.container}>
      <div className="left">
        <div className="navlist">
          {PROMO_TYPES.map((item, index) => {
            return (
              <div
                className={`${activeType == item.value ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setActiveType(item.value);
                }}
              >
                {/* <img src={item.activityIcon} /> */}
                <p>{item.name_zh}</p>
              </div>
            );
          })}
          <div
            className="record-btn"
            onClick={async () => {
              if (user) {
                router.push("/promo/activity");
              } else {
                await Toast.show({
                  content: "未登录，请先登录",
                });
                router.push("/login");
              }
            }}
          >
            领取记录
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box">
          {list?.map((item, index) => {
            return (
              <div className="item" key={index}>
                <Link href={`/promo/${item.ecactivitycode}`} passHref>
                  <img src={item.activityimagehfive} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Activity;
