import react, { useState, useEffect } from "react";
import styles from "./record.module.scss";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { commissionApi } from "@/requests/frontend";
import { Modal, Empty } from "antd-mobile";
import { Pagination } from "antd";
import { t } from "@/utils/translate";

const Record = () => {
  const [gradeState, setGradeState] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [record, setRecord] = useState([]);
  const [visible, setVisible] = useState(false);
  const [infoModal, setInfoModal] = useState({});
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  const fetchDataAuditRecord = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionAuditRecord({
        timeRange: "week",
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setAmount(res?.info?.amount);
        setRecord(res?.info?.record);
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

  const fetchDataRecord = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionRecord({
        timeRange: "week",
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setAmount(res?.info?.amount);
        setRecord(res?.info?.record);
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
    if (gradeState == 1) {
      fetchDataAuditRecord();
    } else {
      fetchDataRecord();
    }
  }, [gradeState]);

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
    if (gradeState == 1) {
      fetchDataAuditRecord();
    } else {
      fetchDataRecord();
    }
  };

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
      <div className="top-box">
        <div className="tabar">
          <div
            className={`${gradeState == 1 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(1);
            }}
          >
            {t("Issuancerecord")}
          </div>
          <div
            className={`${gradeState == 2 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(2);
            }}
          >
            {t("Withdrawalsrecord")}
          </div>
        </div>
        <p>
          <span></span>
          {t("bonusList20")}
        </p>
        {gradeState == 1 && (
          <div className="input-box">
            <input value={amount} readOnly />
            <span>{t("Totalcommissionissued")}（HKD）:</span>
          </div>
        )}
        {gradeState == 2 && (
          <div className="input-box">
            <input value={amount} readOnly />
            <span>{t("Totalcommissionissued")}（HKD）:</span>
          </div>
        )}
      </div>
      <div className="list-title">
        <div>{t("Releasedate")}</div>
        <div>{t("Disbursementamount")}(KHD)</div>
        <div>{t("Querydetails")}</div>
      </div>
      <div className="list">
        {record.length == 0 && <Empty description={t("noRecords")} />}
        {record.length > 0 && (
          <div className="content-list">
            {record.map((item, index) => {
              return (
                <div className="item" key={index}>
                  <div className="it it1">
                    {item.moneychangedate.split(" ")[0]}
                  </div>
                  <div className="it it2">{item.afteramount}</div>
                  <div
                    className="it text it3"
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
        )}
      </div>
      <div className="notice-box">
        <div className="item">
          <div className="num">1</div>
          <p>{t("noticetext1")}</p>
        </div>
        <div className="item">
          <div className="num">2</div>
          <p>{t("noticetext2")}</p>
        </div>
        <div className="item">
          <div className="num">3</div>
          <p>{t("noticetext3")}</p>
        </div>
        <div className="item">
          <div className="num">4</div>
          <p>{t("noticetext4")}</p>
        </div>
        <div className="item">
          <div className="num">5</div>
          <p>{t("noticetext5")}</p>
        </div>
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

export default Record;
