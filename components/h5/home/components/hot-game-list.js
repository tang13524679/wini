import react, { useState, useEffect, useRef } from "react";
import styles from "./hot-game-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper";
import { homeApi, gameApi } from "@/requests/frontend";
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

SwiperCore.use([Grid, Pagination]);

const HotGameList = () => {
  const router = useRouter();
  const [hotGameList, setHotGameList] = useState([]);
  const [{ user, lang }, dispatch] = useGlobalState();
  const [scrollType, setScrollType] = useState(false);
  const [scrollValue, setScrollValue] = useState(0);
  const pageView = useRef(null);

  // const fetchData = async () => {
  //   try {
  //     const res = await homeApi.hotGameRanList({});
  //     if (res.code == "1") {
  //       setHotGameList(res.info);
  //     }
  //   } catch (error) {
  //     Toast.show({
  //       content: error,
  //     });
  //     console.error(error);
  //   } finally {
  //   }
  // };

  useEffect(() => {
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
    // fetchData();
  }, []);

  const [slide, setSlide] = useState("HOT");

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

  const onClickHandle = (provider) => {
    let entry = getEntry(slide, provider);
    console.log(entry, "222");
    if (entry) {
      play(entry, dispatch);
    } else {
      message.info("游戏维护中。。。。");
      return;
    }
  };

  // const getProviderList = () => {
  //   if (slide == "HOT") {
  //     return (
  //       hotGameList.length > 0 && (
  //         <Swiper
  //           slidesPerView={3}
  //           spaceBetween={10}
  //           slidesPerGroup={2}
  //           // loop={true}
  //           grid={{ fill: "row", rows: 3 }}
  //         >
  //           {hotGameList?.map((item, index) => {
  //             return (
  //               <SwiperSlide key={index}>
  //                 <div
  //                   className="img-box"
  //                   onClick={() => {
  //                     if (item.gameId) {
  //                       play(item, dispatch);
  //                     } else {
  //                       router.push(item.link);
  //                     }
  //                   }}
  //                 >
  //                   {/* <img src="/assets/horse.png" /> */}
  //                   {/* <Image src={getGameImg(item)} width={115} height={151} /> */}
  //                   <img src={getGameImg(item)} />
  //                 </div>
  //               </SwiperSlide>
  //             );
  //           })}
  //         </Swiper>
  //       )
  //     );
  //   } else {
  //     return (
  //       <Swiper
  //         slidesPerView={3}
  //         spaceBetween={10}
  //         slidesPerGroup={2}
  //         grid={{ fill: "row", rows: 3 }}
  //       >
  //         {providerMap[slide].map((item, index) => {
  //           return (
  //             <SwiperSlide
  //               key={index}
  //               className={
  //                 providerMap[slide].length < 7 ? "swiperSlide-on" : ""
  //               }
  //             >
  //               <div
  //                 className="img-box"
  //                 onClick={() => {
  //                   onClickHandle(item);
  //                 }}
  //               >
  //                 {/* <Image
  //                   src={`/assets/third/games/${slide}/${item}.png`}
  //                   width={115}
  //                   height={151}
  //                 /> */}
  //                 <img src={`/assets/third/games/${slide}/${item}.png`} />
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>
  //     );
  //   }
  // };

  return (
    <div className={styles.hotContainer} ref={pageView}>
      <div className={`${scrollType ? "tabbar-active" : ""} tabbar-swiper`}>
        <Swiper slidesPerView={3.5} spaceBetween={5}>
          {/* <SwiperSlide
            className={`${slide == "HOT" ? "active" : ""}`}
            onClick={() => {
              setSlide("HOT");
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
              <div className="text">热门游戏</div>
            </div>
          </SwiperSlide> */}
          {GAME_TYPES(lang).map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={`${slide == item.value ? "active" : ""}`}
                onClick={() => {
                  if (scrollType) {
                    document.documentElement.scrollTop = scrollValue;
                  }
                  setSlide(item.value);
                }}
              >
                <div className="box">
                  <div className="icon">
                    <Image
                      src={`/assets/game/${item.iconValue}.png`}
                      width={14}
                      height={14}
                    />
                  </div>
                  <div className="text">{item.label}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="game-list">
        {/* {getProviderList()} */}
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          slidesPerGroup={2}
          grid={{ fill: "row", rows: 3 }}
        >
          {providerMap[slide].map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className={
                  providerMap[slide].length < 7 ? "swiperSlide-on" : ""
                }
              >
                <div
                  className="img-box"
                  onClick={() => {
                    onClickHandle(item);
                  }}
                >
                  <Image
                    src={`/assets/home/games/${slide}/${item}.png`}
                    width={200}
                    height={280}
                  />
                  {/* <img src={`/assets/home/games/${slide}/${item}.png`} /> */}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default HotGameList;
