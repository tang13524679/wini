import react, { useState, useEffect } from "react";
import styles from "./get-records.module.scss";
import NavBar from "../components/nav-bar";
import { Dropdown, Menu } from "antd";
import { Modal, Empty } from "antd-mobile";
import { promoApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";

const GetRecords = () => {
  const [time, setTime] = useState({ label: "全部", value: "all" });
  const [recordsList, setRecordsList] = useState([]);
  const [sumamount, setSumamount] = useState(0);
  const [{ user }, dispatch] = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [infoModal, setInfoModal] = useState({});

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
        setSumamount(res.info.sumamount);
        setRecordsList(res.info.record);
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

  const content = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit">明细</div>
        </div>
        <div className="content-box">
          <div className="item">
            <p className="l">名字</p>
            <p className="r">{infoModal.loginaccount}</p>
          </div>
          <div className="item">
            <p className="l">类型</p>
            <p className="r">{infoModal.moneychangetypename}</p>
          </div>
          <div className="item">
            <p className="l">金额</p>
            <p className="r">{infoModal.moneychangeamount}</p>
          </div>
          <div className="item">
            <p className="l">首存金额(HKD)</p>
            <p className="r">{infoModal.settlementamount}</p>
          </div>
        </div>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          我已知晓
        </div>
      </div>
    );
  };

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
            领取总额：<span>{sumamount}</span>
          </div>
        </div>
        {recordsList.length > 0 && (
          <div className="records-list">
            <div className="title-box">
              <div className="tit tit1">提现日期</div>
              <div className="tit tit2">提现金额(HKD)</div>
              <div className="tit tit3">查询明细</div>
            </div>
            <div className="content-list">
              {recordsList.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="it it1">{item.moneychangedate}</div>
                    <div className="it">{item.afteramount}</div>
                    <div
                      className="it text"
                      onClick={() => {
                        setInfoModal(item);
                        setVisible(true);
                      }}
                    >
                      明细
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {recordsList.length == 0 && <Empty description="暂无数据" />}
      </div>
      {isLoading && <Loading />}
      <Modal
        visible={visible}
        closeOnAction
        showCloseButton
        content={content()}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default GetRecords;
