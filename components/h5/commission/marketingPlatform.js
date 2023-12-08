import react, { useState } from "react";
import styles from "./marketingPlatform.module.scss";
import NavBar from "@/components/h5/components/nav-bar";
import Head from "next/head";
import MarketingContent from "./components/marketing-content";

const MarketingPlatform = () => {
  const [navState, setNavState] = useState("award");
  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title="推广平台" />
      <div className="marketing-nav">
        <div
          className={`${navState == "award" ? "active" : ""} item`}
          onClick={() => {
            setNavState("award");
          }}
        >
          <div className="text">推广奖励</div>
        </div>
        <div
          className={`${navState == "step" ? "active" : ""} item`}
          onClick={() => {
            setNavState("step");
          }}
        >
          <div className="text">推广步骤</div>
        </div>
        <div
          className={`${navState == "platform" ? "active" : ""} item`}
          onClick={() => {
            setNavState("platform");
          }}
        >
          <div className="text">推广平台</div>
        </div>
      </div>
      {navState == "award" && (
        <MarketingContent type={navState} title="推广越多 奖励越多" />
      )}
      {navState == "step" && (
        <MarketingContent type={navState} title="邀请好友三部曲" />
      )}
      {navState == "platform" && (
        <MarketingContent
          type={navState}
          title="众多平台 更多技巧"
          tit="祝您的收益越来越多"
        />
      )}
    </div>
  );
};
export default MarketingPlatform;
