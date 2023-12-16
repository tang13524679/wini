import react, { useState, useEffect } from "react";
import styles from "./activity.module.scss";
import PromoNav from "./promoNav";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { promoApi, homeApi } from "@/requests/frontend";
import {
  GAME_ENTRIES,
  GAME_TYPES,
  PROVIDERS,
  providerMap,
} from "@/utils/const";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { play, getGameImg } from "@/utils/common";

const Activity = () => {
  const router = useRouter();
  const [activeState, setActiveState] = useState("HOT");
  const [isLoading, setIsLoading] = useState(false);
  const [{ user, lang }, dispatch] = useGlobalState();
  const [hotGameList, setHotGameList] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await homeApi.hotGameRanList({});
      if (res.code == "1") {
        setHotGameList(res.info);
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

  const getEntry = (type, provider) => {
    let arr = GAME_ENTRIES.filter((item) => {
      if (type === "HOT") {
        return item.isHot && item.provider === provider;
      } else {
        return item.biggametype === type && item.provider === provider;
      }
    });
    return arr[0];
  };

  const onClickHandle = (provider) => {
    let entry = getEntry(activeState, provider);
    if (entry) {
      play(entry, dispatch);
    } else {
      return;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className="left">
        <div className="navlist">
          <div
            className={`${activeState == "HOT" ? "active" : ""} item`}
            onClick={() => {
              setActiveState("HOT");
            }}
          >
            <img src={`/assets/game/hot.png`} />
            <p>热门</p>
          </div>
          {GAME_TYPES(lang).map((item, index) => {
            return (
              <div
                className={`${activeState == item.value ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setActiveState(item.value);
                }}
              >
                <img src={`/assets/game/${item.iconValue}.png`} />
                <p>{item.label}</p>
              </div>
            );
          })}
          <div
            className="record-btn"
            onClick={async () => {
              if (user) {
                router.push("/promo/activity");
              } else {
                await Toast.show({
                  content: "未登录，请先登录",
                });
                router.push("/login");
              }
            }}
          >
            领取记录
          </div>
        </div>
      </div>
      <div className="right">
        <div className="box">
          {activeState == "HOT" && (
            <div className="hot-box">
              {hotGameList?.map((item, index) => {
                return (
                  <div
                    className="item"
                    key={index}
                    onClick={() => {
                      if (item.gameId) {
                        play(item, dispatch);
                      } else {
                        router.push(item.link);
                      }
                    }}
                  >
                    <img src={getGameImg(item)} />
                  </div>
                );
              })}
            </div>
          )}
          {activeState != "HOT" &&
            providerMap[activeState].map((item, index) => {
              return (
                <div
                  className="item"
                  key={index}
                  onClick={() => {
                    onClickHandle(item);
                  }}
                >
                  <img src={`/assets/third/games/${activeState}/${item}.png`} />
                </div>
              );
            })}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Activity;
