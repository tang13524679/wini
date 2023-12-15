import react, { useState, useEffect } from "react";
import styles from "./invitationIncome.module.scss";
import NavBar from "@/components/h5/components/nav-bar";
import Head from "next/head";
import Sunmmary from "./components/summary";
import Member from "./components/member";
import DetailedData from "./components/detailed-data";
import Record from "./components/record";
import RankingList from "./components/ranking-list";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";

const MarketingPlatform = () => {
  const [navState, setNavState] = useState(1);
  const [{ user }] = useGlobalState();
  const router = useRouter();
  const navList = [
    {
      text: "汇总",
      value: 1,
    },
    {
      text: "会员",
      value: 2,
    },
    {
      text: "详细数据",
      value: 3,
    },
    {
      text: "佣金记录",
      value: 4,
    },
    {
      text: "排行榜",
      value: 5,
    },
  ];

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title="邀请收益" />
      <div className="invitation-nav">
        {navList.map((item) => {
          return (
            <div
              className={`${navState == item.value ? "active" : ""} item`}
              key={item.value}
              onClick={() => {
                setNavState(item.value);
              }}
            >
              <div className="text">{item.text}</div>
            </div>
          );
        })}
      </div>
      {navState == 1 && <Sunmmary />}
      {navState == 2 && <Member />}
      {navState == 3 && <DetailedData />}
      {navState == 4 && <Record />}
      {navState == 5 && <RankingList />}
    </div>
  );
};
export default MarketingPlatform;
