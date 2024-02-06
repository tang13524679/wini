import react, { useState, useRef, useEffect } from "react";
import styles from "./member.module.scss";
import { SearchBar } from "antd-mobile";
import { commissionApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { Pagination } from "antd";
import { t } from "@/utils/translate";

const Member = () => {
  const [gradeState, setGradeState] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [levelOneList, setLevelOneList] = useState([]);
  const [levelTwoList, setLevelTwoList] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [total, setTotal] = useState(0);
  const searchRef = useRef(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      if (gradeState == 1) {
        const res = await commissionApi.levelOne({
          loginaccount: search,
          pageIndex,
          pageSize,
        });
        if (res.code == "1") {
          setLevelOneList(res.info.rows);
          setTotal(res.info?.results);
        }
      } else {
        const res = await commissionApi.levelTwo({
          loginaccount: search,
          pageIndex,
          pageSize,
        });
        if (res.code == "1") {
          setLevelTwoList(res.info.rows);
          setTotal(res.info?.results);
        }
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
  }, [gradeState, search]);

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
      <SearchBar
        ref={searchRef}
        placeholder={t("Searchplaceholder")}
        onSearch={(val) => {
          setSearch(val);
        }}
      />
      <div className="top-box">
        <p>
          <span></span>
          {t("withdrawal")}
        </p>
        <div className="tabar">
          <div
            className={`${gradeState == 1 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(1);
              searchRef.current?.clear();
            }}
          >
            {t("Level1")}
          </div>
          <div
            className={`${gradeState == 2 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(2);
              searchRef.current?.clear();
            }}
          >
            {t("Level2")}
          </div>
        </div>
        {gradeState == 1 && levelOneList?.length > 0 && (
          <>
            <div className="record-list">
              {levelOneList.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="name">{item.loginaccount}</div>
                    <div className="type">
                      <div className="state">
                        {t("state")}
                        <span>
                          {item.employeestatus == 1 ? "已激活" : "未激活"}
                        </span>
                      </div>
                      <p>{t("bringprofit")}</p>
                    </div>
                    <div className="time">
                      <p>
                        {t("Registrationtime")}
                        {item.logindatetime}
                      </p>
                      <p>{item.lose_win_amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="commission-pagination">
              <div className="people">总计： {levelOneList.length}人</div>
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
        )}
        {gradeState == 2 && levelTwoList.length > 0 && (
          <>
            <div className="record-list">
              {levelTwoList.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <div className="name">{item.loginaccount}</div>
                    <div className="type">
                      <div className="state">
                        {t("state")}
                        <span>
                          {item.employeestatus == 1
                            ? t("activated")
                            : t("inactivated")}
                        </span>
                      </div>
                      <p>{t("bringprofit")}</p>
                    </div>
                    <div className="time">
                      <p>
                        {t("Registrationtime")}
                        {item.logindatetime}
                      </p>
                      <p>{item.lose_win_amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="commission-pagination">
              <div className="people">
                {t("totals")} {levelTwoList.length}人
              </div>
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
        )}
      </div>
      {gradeState == 1 && levelOneList?.length == 0 && (
        <div className="data-content">
          <div className="no-data">{t("noRecords")}</div>
        </div>
      )}
      {gradeState == 2 && levelTwoList?.length == 0 && (
        <div className="data-content">
          <div className="no-data">{t("noRecords")}</div>
        </div>
      )}
      <div className="games-odds">
        <div className="item">
          <span>{t("TY")}</span>
          <p>0.2%</p>
        </div>
        <div className="item">
          <span>{t("SX")}</span>
          <p>0.1%</p>
        </div>
        <div className="item">
          <span>{t("DZ")}</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>{t("CP")}</span>
          <p>0.1%</p>
        </div>
        <div className="item">
          <span>{t("QP")}</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>{t("BY")}</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>{t("RechargeRebate")}</span>
          <p>0.2%</p>
        </div>
      </div>
      <div className="member-footer">{t("memberfootertext")}</div>
      {isLoading && <Loading />}
    </div>
  );
};
export default Member;
