import react, { useEffect } from "react";
import styles from "./index.module.scss";
import NavBar from "@/components/h5/commission/components/nav-bar";
import InviteWithPrizes from "@/components/h5/commission/components/invite-with-prizes";
import RewardDescription from "./components/reward-description";
import Income from "./components/income";
import Head from "next/head";

const CommissionPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title={"邀请好友赚钱"}></NavBar>
      <InviteWithPrizes></InviteWithPrizes>
      <RewardDescription></RewardDescription>
      <Income></Income>
      <div className="plan-box">
        <div className="box">
          <div className="title">
            <p>会员计划</p>
            <span>无限层级更赚钱</span>
          </div>
          <div className="plan-user">
            <img className="avatar" src="/assets/commission/avatar.png" />
            <div className="hierarchy">
              <div className="btn" style={{ margin: "0 auto" }}>
                您
              </div>
              <div className="btn-box">
                <div className="btn">下线</div>
                <img src="/assets/commission/bottom.png" />
                <img src="/assets/commission/top.png" />
                <div className="btn">收益</div>
              </div>
            </div>
            <img
              className="planUserImg"
              src="/assets/commission/planUser.png"
            />
          </div>
        </div>
      </div>
      <div className="notice-text">
        <div className="box">
          <div className="title">注意事项</div>
          <ul>
            <li>
              凡是存在以下违规行为的用户,WIN1有权扣除其作弊奖
              励,行为严重者将做封号处理,请您正常使用平台。
            </li>
            <li>
              同一终端设备注册/绑定同一账号, 会被视为同一账户。 用虚拟号码注册,
              会被视为无效用户。 以上均会被视异 常用户, 上级无法获得推广奖动。
              一经核实有作弊为， 推广账户未来所有的收益将不再计算。
            </li>
            <li>
              通过不正当手段 (利用他人资料注册, 批量注册,用
              模拟注册,以及各种形式诱导收徒等非真实玩家行为)
              WIN1权终结追回奖励,必要时做封号处理。 对活动规则
              进变动或调整,相关变动或调整将公布在活动页面上, 并公布时即时生效。
            </li>
            <li>
              最终解释权在博彩款法律允许的范围内归WIN1所有。
              如果用户拒绝活动规则的变更或者调整, 请放弃参与变 更后的活动。
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CommissionPage;
