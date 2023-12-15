import react, { useState, useEffect, useMemo } from "react";
import styles from "./hot-game-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper";
import { homeApi, gameApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { useGlobalState } from "@/hooks/global";
import { play, getGameImg } from "@/utils/common";
import {
  GAME_ENTRIES,
  GAME_TYPES,
  PROVIDERS,
  providerMap,
} from "@/utils/const";
import { useRouter } from "next/router";

SwiperCore.use([Grid, Pagination]);

const HotGameList = () => {
  const router = useRouter();
  const [hotGameList, setHotGameList] = useState([]);
  const [{ user, lang }, dispatch] = useGlobalState();

  const fetchData = async () => {
    try {
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
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [slide, setSlide] = useState("HOT");

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
    let entry = getEntry(slide, provider);
    if (entry) {
      play(entry, dispatch);
    } else {
      return;
    }
  };

  const getProviderList = () => {
    if (slide == "HOT") {
      return (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={2}
          grid={{ fill: "row", rows: 3 }}
        >
          {hotGameList?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="img-box"
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
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    } else {
      return (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={2}
          grid={{ fill: "row", rows: 3 }}
        >
          {providerMap[slide].map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="img-box"
                  onClick={() => {
                    onClickHandle(item);
                  }}
                >
                  <img src={`/assets/third/games/${slide}/${item}.png`} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      );
    }
  };

  return (
    <div className={styles.hotContainer}>
      <div className="tabbar-swiper">
        <Swiper slidesPerView={3.3} spaceBetween={10}>
          <SwiperSlide
            className={`${slide == "HOT" ? "active" : ""}`}
            onClick={() => {
              setSlide("HOT");
            }}
          >
            <div className="box">
              <div className="icon">
                <img src={`/assets/game/${"HOT".toLowerCase()}.png`} />
              </div>
              <div className="text">热门游戏</div>
            </div>
          </SwiperSlide>
          {GAME_TYPES(lang).map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${slide == item.value ? "active" : ""}`}
                onClick={() => {
                  setSlide(item.value);
                }}
              >
                <div className="box">
                  <div className="icon">
                    <img src={`/assets/game/${item.iconValue}.png`} />
                  </div>
                  <div className="text">{item.label}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="game-list">
        {getProviderList()}
        {/* {gamelist.map((item) => {
          return (
            item.value == slide && (
              <Swiper
                key={item.id}
                slidesPerView={3}
                spaceBetween={10}
                slidesPerGroup={2}
                grid={{ fill: "row", rows: 3 }}
              >
                {item.list.map((itm, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div
                        className="img-box"
                        onClick={() => {
                          play(itm, dispatch);
                        }}
                      >
                        <img
                          src={`	http://103.164.81.205:7078/game-icon/${itm.gamelsh}.png`}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )
          );
        })} */}
      </div>
    </div>
  );
};

export default HotGameList;
