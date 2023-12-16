import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import MobileHeader from "../components/mobile-header";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import HotGameList from "./components/hot-game-list";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination, Navigation } from "swiper";
import { homeApi, promoApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { play } from "@/utils/common";
import Link from "next/link";

SwiperCore.use([Grid, Pagination]);

const HomePage = () => {
  const [{ user }, dispatch] = useGlobalState();
  const router = useRouter();
  const [activityList, setActivityList] = useState([]);
  const [recentGamesList, setRecentGamesList] = useState([]);

  const fetchDataTasksList = async () => {
    try {
      const res = await promoApi.listActivityData({ activity_type: "" });
      if (res.code == "1") {
        setActivityList(res.info);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    } finally {
    }
  };

  const fetchDataRecentGamesList = async () => {
    try {
      const res = await homeApi.recentGamesList({});
      if (res.code == "1") {
        setRecentGamesList(res.info);
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
    fetchDataTasksList();
    user && fetchDataRecentGamesList();
  }, []);

  console.log(user);

  return (
    <div className={styles.container}>
      <MobileHeader />
      <div className="home-banner">
        <img src="/assets/home/bj.png" />
        {!user && (
          <div
            className="register"
            onClick={() => {
              router.push("/login?type=register");
            }}
          >
            立即注册
          </div>
        )}
      </div>
      <HotGameList />
      <div className="tasks-list">
        <Swiper
          slidesPerView={1.3}
          spaceBetween={15}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
        >
          {activityList?.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <Link href={`/promo/${item.ecactivitycode}`} passHref>
                  <img src={item.activityimagehfive} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {user && (
        <div className="recently">
          <div className="title">最近的重大胜利</div>
          <Swiper slidesPerView={2.4} spaceBetween={12}>
            {recentGamesList?.map((item) => {
              return (
                <SwiperSlide key={item.gameId}>
                  <div
                    className="box"
                    onClick={() => {
                      play(item, dispatch);
                    }}
                  >
                    <img src={item.imagename} />
                    <div className="text-box">
                      <div className="name">{item.cnname}</div>
                      <div className="hk">HK 360,514.89</div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      )}
      <div className="partner-list">
        <div className="title">合作伙伴</div>
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          slidesPerGroup={2}
          grid={{ fill: "row", rows: 2 }}
        >
          <SwiperSlide>
            <img src="assets/home/hot/partner1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/hot/partner2.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/hot/partner3.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="assets/home/hot/partner4.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="license-box">
        <div className="title">游戏许可证</div>
        <div className="license">
          <div className="left">
            <div className="item">
              <img
                style={{ height: "37.615px" }}
                src="assets/home/hot/license1.png"
              />
            </div>
            <div className="item">
              <img
                style={{ height: "40.509px" }}
                src="assets/home/hot/license2.png"
              />
            </div>
          </div>
          <div className="right">
            <p>
              WIN1品牌，由库拉索政府所发放 牌照并由库拉索博彩委员会监管
              （牌照号事：N.V#1168/JAZ）
            </p>
          </div>
        </div>
      </div>
      <div className="license-box">
        <div className="title">牌照</div>
        <Swiper slidesPerView={2} spaceBetween={13}>
          <SwiperSlide>
            <img src="/assets/home/hot/lic1.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/assets/home/hot/lic2.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="follow-us">
        <div className="title-box">
          <div className="tit-left">
            <div className="title">关注我们</div>
          </div>
          <div className="tit-right">
            <div className="title">责任博彩</div>
            <img src="/assets/home/hot/gamcare.png" />
          </div>
        </div>
        <div className="follow-list">
          <div className="list">
            <img src="/assets/home/hot/follow1.png" />
            <img src="/assets/home/hot/follow2.png" />
            <img src="/assets/home/hot/follow3.png" />
          </div>
          <div className="list">
            <img src="/assets/home/hot/follow4.png" />
            <img src="/assets/home/hot/follow5.png" />
            <img src="/assets/home/hot/follow6.png" />
          </div>
        </div>
      </div>
      <div className="add">添加到主屏幕</div>
    </div>
  );
};

export default HomePage;
