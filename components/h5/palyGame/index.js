import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useGlobalState } from "@/hooks/global";
import { isMobile, toBigLanguage } from "@/utils/common";
import { gameApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const NavBar = dynamic(() => import("@/components/h5/components/nav-bar"));

const PlayGamePage = () => {
  const router = useRouter();
  const [{ user, lang }, dispatch] = useGlobalState();
  const [data, setData] = useState(router.query);
  const [url, setUrl] = useState("");

  useEffect(async () => {
    dispatch({ type: "set_loading", payload: true });
    try {
      const res = await gameApi.play({
        id: data.id,
        gametype: data.gametype,
        biggametype: data.biggametype,
        gamecode: data.gameid,
        gameid: data.gameid,
        device: isMobile() ? "h5" : "web",
        language: toBigLanguage(),
      });
      if (res.code == "1") {
        setUrl(res.info);
      }
    } catch (error) {
      console.error(error);
    } finally {
      dispatch({ type: "set_loading", payload: false });
    }
  }, []);
  return (
    <div className={styles.container}>
      <NavBar title={data.title}></NavBar>
      <div className="iframe-box">
        <iframe src={url} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PlayGamePage;
