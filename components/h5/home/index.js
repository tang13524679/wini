import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination, Autoplay } from "swiper";
import { homeApi, promoApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { play } from "@/utils/common";
import { t } from "@/utils/translate";
import useWindowSize from "@/hooks/useWindowSize";
import dynamic from "next/dynamic";
const MobileHeader = dynamic(() => import("../components/mobile-header"));
const HotGameList = dynamic(() => import("./components/hot-game-list"));
const Image = dynamic(() => import("next/image"));
const Link = dynamic(() => import("next/link"));

SwiperCore.use([Grid, Pagination]);

const HomePage = () => {
  const isMobile = useWindowSize();
  const [{ user, lang }, dispatch] = useGlobalState();
  const router = useRouter();
  const [activityList, setActivityList] = useState([]);
  const [recentGamesList, setRecentGamesList] = useState([]);
  const [pwaEvent, setPwaEvent] = useState(null);

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
    if (user) {
      fetchDataRecentGamesList();
    }
  }, [user]);

  useEffect(() => {
    // window.addEventListener("beforeinstallprompt", (e) => {
    //   setPwaEvent(e);
    // });
  }, []);

  return (
    <div className={styles.container}>
      <MobileHeader />
      <div className="home-banner">
        <Image src="/assets/home/bj.png" width="430" height="438" />
        {/* <img src="/assets/home/bj.png" /> */}
        {!user && (
          <div
            className="register"
            onClick={() => {
              router.push("/login?type=register");
            }}
          >
            {t("SignUpNow")}
          </div>
        )}
      </div>
      <HotGameList />
      <div className="tasks-list">
        {activityList.length > 0 && (
          <Swiper
            modules={[Autoplay]}
            slidesPerView={1.3}
            spaceBetween={15}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
          >
            {activityList?.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <Link href={`/promo/${item.ecactivitycode}`} passHref>
                    {/* <Image
                      src={item.activityimagehfive}
                      width="297"
                      height="128"
                    /> */}
                    <img src={item.activityimagehfive} />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
      {user && (
        <div className="recently">
          <div className="title">{t("recentGames")}</div>
          <Swiper slidesPerView={2.4} spaceBetween={12}>
            {recentGamesList?.map((item) => {
              return (
                <SwiperSlide key={item.gameId}>
                  <div
                    className="box"
                    onClick={() => {
                      if (isMobile == "mobile") {
                        const {
                          id,
                          gametype,
                          biggametype,
                          gameid,
                          cnname,
                          enname,
                        } = item;
                        router.push(
                          `/play-game?id=${id}&gametype=${gametype}&biggametype=${biggametype}&gameid=${gameid}&title=${
                            lang == "en" ? enname : cnname
                          }`
                        );
                      } else {
                        play(item, dispatch);
                      }
                    }}
                  >
                    <div className="img-box">
                      {item.biggametype != "DZ" ? (
                        <Image
                          src={`/assets/home/games/${item.biggametype}/${item.cnname}.png`}
                          width={200}
                          height={200}
                        />
                      ) : (
                        <img
                          src={`/assets/home/DZgame/${item.gametype.replace(
                            "Game",
                            ""
                          )}/${item.gameid}${
                            item.gametype == "YGRGame"
                              ? `_200x200_01_${lang == "en" ? "en" : "cn"}.png`
                              : item.gametype == "AMEBAGame"
                              ? `${lang == "en" ? "_enUS" : "_zhCN"}.png`
                              : ".png"
                          }`}
                        />
                        // <Image
                        //   src={}
                        //   width={200}
                        //   height={200}
                        // />
                      )}
                    </div>
                    <div className="text-box">
                      <div className="name">
                        {lang == "en" ? item.enname : item.cnname}
                      </div>
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
        <div className="title">{t("partner")}</div>
        <Swiper
          slidesPerView={2}
          spaceBetween={12}
          slidesPerGroup={2}
          grid={{ fill: "row", rows: 2 }}
        >
          <SwiperSlide>
            <Image
              src="/assets/home/hot/partner1.png"
              width="264"
              height="99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/hot/partner2.png"
              width="264"
              height="99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/hot/partner3.png"
              width="264"
              height="99"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/home/hot/partner4.png"
              width="264"
              height="99"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="license-box">
        <div className="title">{t("gameLicense")}</div>
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
            <p>{t("win1brand")}</p>
          </div>
        </div>
      </div>
      <div className="license-box">
        <div className="title">{t("license")}</div>
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
            <div className="title">{t("followUs")}</div>
          </div>
          <div className="tit-right">
            <div className="title">{t("responsibleGambling")}</div>
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
      {/* <div
        className="add"
        onClick={() => {
          pwaEvent.prompt();
        }}
      >
        {t("addToScreen")}
      </div> */}
      <div
        className="messages"
        onClick={() => {
          router.push("/user/messages");
        }}
      >
        <img src="/assets/nav/messages.png" />
      </div>
    </div>
  );
};

export default HomePage;
