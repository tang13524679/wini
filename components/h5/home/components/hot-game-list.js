import react, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./hot-game-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper";
import { homeApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { useGlobalState } from "@/hooks/global";
import { play, getGameImg } from "@/utils/common";
import { message } from "antd";
import {
  GAME_ENTRIES,
  GAME_TYPES,
  PROVIDERS,
  providerMap,
} from "@/utils/const";
import { useRouter } from "next/router";
import Image from "next/image";
import { t } from "@/utils/translate";
import DZgame from "./dz-game";
import { SpinLoading } from "antd-mobile";

SwiperCore.use([Grid, Pagination]);

const HotGameList = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hotGameList, setHotGameList] = useState([]);
  const [{ user, lang }, dispatch] = useGlobalState();
  const [scrollType, setScrollType] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const pageView = useRef(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [ismain, setIsmain] = useState(0);
  const [biggametype, setBiggametype] = useState("HOT");
  const [minCategory, setmMinCategory] = useState([]);
  const [gamesList, setGamesList] = useState([]);

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

  const fetchGameList = async () => {
    setIsLoading(true);
    try {
      const res = await homeApi.getGameList({
        ismain,
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setmMinCategory(res.info?.rows);
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

  useEffect(async () => {
    if (biggametype == "HOT") {
      fetchGameList();
    } else if (biggametype == "DZ") {
      return;
    } else {
      setIsLoading(true);
      try {
        const res = await homeApi.getGameList({
          ismain,
          biggametype,
          pageIndex,
          pageSize,
        });
        if (res.code == "1") {
          setGamesList(res.info?.rows);
        }
      } catch (error) {
        Toast.show({
          content: error,
        });
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  }, [biggametype]);

  const getCategry = useMemo(() => {
    const result = minCategory.reduce((pre, cur) => {
      var exists = pre.find(
        (item) =>
          JSON.stringify(item.biggametype) === JSON.stringify(cur.biggametype)
      );
      if (!exists) {
        pre.push(cur.biggametype);
      }
      return pre;
    }, []);

    const newArr = [...new Set(result)];
    console.log(newArr);
    return newArr || [];
  }, [minCategory]);

  useEffect(async () => {
    window.addEventListener("scroll", function (e) {
      // 滚动条滚动高度
      const scrollTop = document.documentElement.scrollTop;
      // 可视区域高度
      const clentHeight = document.documentElement.clientHeight;
      // 滚动内容高度
      const scrollHeight = document.documentElement.scrollHeight;
      // 可视区域宽度
      const clientWidth = document.documentElement.clientWidth;
      if (scrollTop > 400 && clientWidth < 391) {
        setScrollType(true);
        setScrollValue(400);
      } else if (scrollTop > 421 && 391 < clientWidth < 415) {
        setScrollType(true);
        setScrollValue(421);
      } else if (scrollTop > 437 && 415 < clientWidth < 431) {
        setScrollType(true);
        setScrollValue(437);
      } else {
        setScrollType(false);
      }
    });
  }, []);

  const getEntry = (type, provider) => {
    let arr = GAME_ENTRIES.filter((item) => {
      // return item.biggametype === type && item.provider === provider;
      if (type === "HOT") {
        return item.isHot && item.provider === provider;
      } else {
        return item.biggametype === type && item.provider === provider;
      }
    });
    return arr[0];
  };

  const onClickHandle = (item) => {
    if (item) {
      play(item, dispatch);
    } else {
      message.info("游戏维护中。。。。");
      return;
    }
  };

  return (
    <div className={styles.hotContainer} ref={pageView}>
      <div className={`${scrollType ? "tabbar-active" : ""} tabbar-swiper`}>
        <Swiper slidesPerView={3.5} spaceBetween={5}>
          <SwiperSlide
            className={`${biggametype == "HOT" ? "active" : ""}`}
            onClick={() => {
              if (scrollType) {
                document.documentElement.scrollTop = scrollValue;
              }
              setBiggametype("HOT");
            }}
          >
            <div className="box">
              <div className="icon">
                <Image
                  src={`/assets/game/${"HOT".toLowerCase()}.png`}
                  width={14}
                  height={14}
                />
              </div>
              <div className="text">{t("HOT")}</div>
            </div>
          </SwiperSlide>
          {getCategry.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${biggametype == item ? "active" : ""}`}
                onClick={() => {
                  if (scrollType) {
                    document.documentElement.scrollTop = scrollValue;
                  }
                  setBiggametype(item);
                }}
              >
                <div className="box">
                  <div className="icon">
                    <Image
                      src={`/assets/game/${item}.png`}
                      width={14}
                      height={14}
                    />
                    {/* <img src={`/assets/game/${item}.png`} /> */}
                  </div>
                  <div className="text">{t(item, null, lang)}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="game-list">
        {biggametype == "HOT" && (
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={2}
            grid={{ fill: "row", rows: 3 }}
          >
            {minCategory.map((item, index) => {
              return (
                item.ishot == "1" && (
                  <SwiperSlide
                    key={item.id}
                    className={item.ishot ? "swiperSlide-on" : ""}
                  >
                    <div
                      className="img-box"
                      onClick={() => {
                        onClickHandle(item);
                      }}
                    >
                      <Image
                        src={`/assets/home/games/${biggametype}/${item.cnname}.png`}
                        width={200}
                        height={280}
                      />
                    </div>
                  </SwiperSlide>
                )
              );
            })}
          </Swiper>
        )}
        {biggametype != "HOT" && biggametype != "DZ" && (
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            slidesPerGroup={2}
            grid={{ fill: "row", rows: 3 }}
          >
            {gamesList.map((item, index) => {
              return (
                <SwiperSlide
                  key={index}
                  className={gamesList.length < 7 ? "swiperSlide-on" : ""}
                >
                  <div
                    className="img-box"
                    onClick={() => {
                      onClickHandle(item);
                    }}
                  >
                    <Image
                      src={`/assets/home/games/${biggametype}/${item.cnname}.png`}
                      width={200}
                      height={280}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
        {biggametype == "DZ" && <DZgame />}
        {isLoading && (
          <div className="loading">
            <SpinLoading color="primary" style={{ "--size": "38px" }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HotGameList;
