import react, { useState } from "react";
import styles from "./hot-game-list.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination } from "swiper";

SwiperCore.use([Grid, Pagination]);

const HotGameList = () => {
  const hotGamelist = [
    {
      id: "1",
      name: "热门",
      icon: "/assets/home/hot/h-icon-1.png",
      value: 1,
      list: [
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_dg.png", href: "" },
        { img: "/assets/home/hot/hk_evo.png", href: "" },
        { img: "/assets/home/hot/hk_hb.png", href: "" },
        { img: "/assets/home/hot/hk_jdb.png", href: "" },
        { img: "/assets/home/hot/hk_joker.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
        { img: "/assets/home/hot/hk_pp.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_jdb.png", href: "" },
        { img: "/assets/home/hot/hk_joker.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
      ],
    },
    {
      id: "2",
      name: "游戏机",
      icon: "/assets/home/hot/h-icon-2.png",
      value: 2,
      list: [
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_dg.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
        { img: "/assets/home/hot/hk_pp.png", href: "" },
        { img: "/assets/home/hot/hk_jdb.png", href: "" },
        { img: "/assets/home/hot/hk_joker.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_evo.png", href: "" },
        { img: "/assets/home/hot/hk_hb.png", href: "" },
        { img: "/assets/home/hot/hk_dg.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
        { img: "/assets/home/hot/hk_pp.png", href: "" },
      ],
    },
    {
      id: "3",
      name: "赌场",
      icon: "/assets/home/hot/h-icon-3.png",
      value: 3,
      list: [
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
        { img: "/assets/home/hot/hk_pp.png", href: "" },
        { img: "/assets/home/hot/hk_dg.png", href: "" },
        { img: "/assets/home/hot/hk_evo.png", href: "" },
        { img: "/assets/home/hot/hk_hb.png", href: "" },
        { img: "/assets/home/hot/hk_jdb.png", href: "" },
        { img: "/assets/home/hot/hk_joker.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
      ],
    },
    {
      id: "4",
      name: "棋牌",
      icon: "/assets/home/hot/h-icon-3.png",
      value: 4,
      list: [
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_pp.png", href: "" },
        { img: "/assets/home/hot/hk_dg.png", href: "" },
        { img: "/assets/home/hot/hk_evo.png", href: "" },
        { img: "/assets/home/hot/hk_hb.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_jdb.png", href: "" },
        { img: "/assets/home/hot/hk_joker.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
        { img: "/assets/home/hot/hk_ky.png", href: "" },
        { img: "/assets/home/hot/hk_bs.png", href: "" },
      ],
    },
  ];

  const [slide, setSlide] = useState(1);

  return (
    <div className={styles.hotContainer}>
      <div className="tabbar-swiper">
        <Swiper slidesPerView={3.3} spaceBetween={10}>
          {hotGamelist.map((item) => {
            return (
              <SwiperSlide
                key={item.id}
                className={`${slide == item.value ? "active" : ""}`}
                onClick={() => {
                  setSlide(item.value);
                }}
              >
                <div className="box">
                  <div className="icon">
                    <img src={item.icon} />
                  </div>
                  <div className="text">{item.name}</div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="game-list">
        {hotGamelist.map((item) => {
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
                      <div className="img-box">
                        <img src={itm.img} />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )
          );
        })}
      </div>
    </div>
  );
};

export default HotGameList;
