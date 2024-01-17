import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useGlobalState } from "@/hooks/global";
import { isMobile, toBigLanguage } from "@/utils/common";
import { gameApi } from "@/requests/frontend";
import { useRouter } from "next/router";
import { LeftOutlined } from "@ant-design/icons";

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
      <div
        className="navBarBox"
        style={{
          maxWidth: "430px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div
          className="nav-bar-left"
          onClick={() => {
            router.push("/home");
          }}
        >
          <LeftOutlined style={{ color: "#329029", fontSize: "18px" }} />
        </div>
        <div className="nav-bar-title">{data.title}</div>
        <div className="nav-bar-right"></div>
      </div>
      <div className="iframe-box">
        <iframe src={url} width="100%" height="100%" />
      </div>
    </div>
  );
};

export default PlayGamePage;
