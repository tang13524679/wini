import react, { useState, useEffect } from "react";
import styles from "./invitationIncome.module.scss";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import { t } from "@/utils/translate";
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
      text: t("Summary"),
      value: 1,
    },
    {
      text: t("member"),
      value: 2,
    },
    {
      text: t("Detaileddata"),
      value: 3,
    },
    {
      text: t("Commissionrecords"),
      value: 4,
    },
    {
      text: t("Ranking"),
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
      <NavBar title={t("Invitationincome")} />
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
