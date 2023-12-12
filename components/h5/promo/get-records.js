import react, { useState, useEffect } from "react";
import styles from "./get-records.module.scss";
import NavBar from "../components/nav-bar";
import { Dropdown, Menu } from "antd";
import { Empty } from "antd-mobile";
import { promoApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";

const GetRecords = () => {
  const [time, setTime] = useState({ label: "全部", value: "all" });
  const [recordsList, setRecordsList] = useState([]);
  const [{ user }, dispatch] = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);

  const timeList = [
    { label: "全部", value: "all" },
    { label: "昨天", value: "yesterday" },
    { label: "本周", value: "week" },
    { label: "上周", value: "lastweek" },
    { label: "本月", value: "month" },
  ];

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await promoApi.proRecordList({
        loginaccount: user?.loginaccount,
        timeRange: time.value,
      });
      if (res.code == "1") {
        // setSumamount(res.info.sumamount);
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
  }, [time]);
  return (
    <div className={styles.container}>
      <NavBar title="领取记录" />
      <div className="records-box">
        <div className="records-tit">
          <Dropdown
            trigger="click"
            overlay={
              <Menu>
                {timeList.map((item) => (
                  <Menu.Item
                    key={item.value}
                    onClick={() => {
                      setTime({ ...item });
                    }}
                  >
                    <span className="ml-2">{item.label}</span>
                  </Menu.Item>
                ))}
              </Menu>
            }
          >
            <div className="btn-icon-text bgWhite2 bdWhite6 rounded-full py-2 px-4 cursor-pointer">
              <div className="box">
                <span className="text icon-text16 mx-2 clWhite">
                  {time.label}
                </span>
                <i className="icon icon-dropdown"></i>
              </div>
            </div>
          </Dropdown>
          <div className="amount">
            领取总额：<span>0</span>
          </div>
        </div>
        {recordsList.length > 0 && <div className="records-list"></div>}
        {recordsList.length == 0 && <Empty description="暂无数据" />}
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default GetRecords;
