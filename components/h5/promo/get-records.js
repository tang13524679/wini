import react, { useState, useEffect } from "react";
import styles from "./get-records.module.scss";
import NavBar from "../components/nav-bar";
import { Dropdown, Menu } from "antd";
import { Modal, Empty } from "antd-mobile";
import { promoApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";
import { t } from "@/utils/translate";

const GetRecords = () => {
  const [time, setTime] = useState({ label: t("all"), value: "all" });
  const [recordsList, setRecordsList] = useState([]);
  const [sumamount, setSumamount] = useState(0);
  const [{ user }, dispatch] = useGlobalState();
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [infoModal, setInfoModal] = useState({});

  const timeList = [
    { label: t("all"), value: "all" },
    { label: t("yesterday"), value: "yesterday" },
    { label: t("week"), value: "week" },
    { label: t("lastWeek"), value: "lastweek" },
    { label: t("month"), value: "month" },
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
          <div className="tit">{t("Details")}</div>
        </div>
        <div className="content-box">
          <div className="item">
            <p className="l">{t("name")}</p>
            <p className="r">{infoModal.loginaccount}</p>
          </div>
          <div className="item">
            <p className="l">{t("type")}</p>
            <p className="r">{infoModal.moneychangetypename}</p>
          </div>
          <div className="item">
            <p className="l">{t("amount")}</p>
            <p className="r">{infoModal.moneychangeamount}</p>
          </div>
          <div className="item">
            <p className="l">{t("settlementamount")}(HKD)</p>
            <p className="r">{infoModal.settlementamount}</p>
          </div>
        </div>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          {t("Ialreadyknow")}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <NavBar title={t("Getrecords")} />
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
            {t("Totalamountreceived")}：<span>{sumamount}</span>
          </div>
        </div>
        {recordsList.length > 0 && (
          <div className="records-list">
            <div className="title-box">
              <div className="tit tit1">{t("Withdrawdate")}</div>
              <div className="tit tit2">{t("WithdrawalAmount")}(HKD)</div>
              <div className="tit tit3">{t("Querydetails")}</div>
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
                      {t("Details")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {recordsList.length == 0 && <Empty description={t("noRecords")} />}
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
