import react, { useState, useEffect } from "react";
import styles from "./invitationIncome.module.scss";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/h5/components/nav-bar"));
const Head = dynamic(() => import("next/head"));
const Sunmmary = dynamic(() => import("./components/summary"));
const Member = dynamic(() => import("./components/member"));
const DetailedData = dynamic(() => import("./components/detailed-data"));
const Record = dynamic(() => import("./components/record"));
const RankingList = dynamic(() => import("./components/ranking-list"));

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
