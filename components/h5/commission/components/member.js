import react, { useState } from "react";
import styles from "./member.module.scss";
import { SearchBar } from "antd-mobile";

const Member = () => {
  const [gradeState, setGradeState] = useState(1);
  return (
    <div className={styles.container}>
      <SearchBar placeholder="请输入会员账号搜索" />
      <div className="top-box">
        <p>
          <span></span>注册有三分钟延迟显示，完成提款则成为启动用户
        </p>
        <div className="tabar">
          <div
            className={`${gradeState == 1 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(1);
            }}
          >
            一级
          </div>
          <div
            className={`${gradeState == 2 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(2);
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
    </div>
  );
};
export default Member;
