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
        placeholder="请输入会员账号搜索"
        onSearch={(val) => {
          setSearch(val);
        }}
      />
      <div className="top-box">
        <p>
          <span></span>注册有三分钟延迟显示，完成提款则成为启动用户
        </p>
        <div className="tabar">
          <div
            className={`${gradeState == 1 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(1);
              searchRef.current?.clear();
            }}
          >
            一级
          </div>
          <div
            className={`${gradeState == 2 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(2);
              searchRef.current?.clear();
            }}
          >
            二级
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
                        状态：
                        <span>
                          {item.employeestatus == 1 ? "已激活" : "未激活"}
                        </span>
                      </div>
                      <p>带来收益</p>
                    </div>
                    <div className="time">
                      <p>注册时间：{item.logindatetime}</p>
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
                        状态：
                        <span>
                          {item.employeestatus == 1 ? "已激活" : "未激活"}
                        </span>
                      </div>
                      <p>带来收益</p>
                    </div>
                    <div className="time">
                      <p>注册时间：{item.logindatetime}</p>
                      <p>{item.lose_win_amount}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="commission-pagination">
              <div className="people">总计： {levelTwoList.length}人</div>
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
          <div className="no-data">暂无数据</div>
        </div>
      )}
      {gradeState == 2 && levelTwoList?.length == 0 && (
        <div className="data-content">
          <div className="no-data">暂无数据</div>
        </div>
      )}
      <div className="games-odds">
        <div className="item">
          <span>体育</span>
          <p>0.2%</p>
        </div>
        <div className="item">
          <span>真人</span>
          <p>0.1%</p>
        </div>
        <div className="item">
          <span>电子</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>彩票</span>
          <p>0.1%</p>
        </div>
        <div className="item">
          <span>棋牌</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>捕鱼</span>
          <p>0.3%</p>
        </div>
        <div className="item">
          <span>充值返利</span>
          <p>0.2%</p>
        </div>
      </div>
      <div className="member-footer">另外分享下线收益的10%无限层级！</div>
      {isLoading && <Loading />}
    </div>
  );
};
export default Member;
