import react, { useState, useRef, useEffect } from "react";
import styles from "./member.module.scss";
import { SearchBar } from "antd-mobile";
import { commissionApi } from "@/requests/frontend";
import { useGlobalState } from "@/hooks/global";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";

const Member = () => {
  const [gradeState, setGradeState] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      if (gradeState == 1) {
        const res = await commissionApi.levelOne({
          loginaccount: search,
        });
      } else {
        const res = await commissionApi.levelTwo({
          loginaccount: search,
        });
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
  }, [gradeState, search]);
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
      </div>
      <div className="data-content">
        <div className="no-data">暂无数据</div>
      </div>
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
