import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import Image from "next/image";
import { useGlobalState } from "@/hooks/global";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Grid, Pagination, Autoplay } from "swiper";
import { homeApi, promoApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { play } from "@/utils/common";
import { InfoCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { GAME_ENTRIES } from "@/utils/const";

SwiperCore.use([Grid, Pagination]);

const PcHomePage = () => {
  const [{ user }, dispatch] = useGlobalState();
  const [recentGamesList, setRecentGamesList] = useState([]);

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

  const onClickHandle = (item) => {
    play(item, dispatch);
  };

  useEffect(() => {
    if (user) {
      fetchDataRecentGamesList();
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <div className="banner">
        <Image
          style={{ width: "100%" }}
          src="/assets/pcimg/home/banner.jpg"
          width="1620"
          height="550"
        />
        <div className="banner-box">
          <div className="left">
            <div className="text1">
              注册并<span>获得</span>奖励
            </div>
            <div className="text2">
              高达<span>710,000泰铢</span>
            </div>
            <div className="b-btn">立即注册</div>
            <div className="share-box">
              或者{" "}
              <Image
                src="/assets/pcimg/home/goole.png"
                width="59"
                height="59"
              />
              <Image
                src="/assets/pcimg/home/telegram.png"
                width="59"
                height="59"
              />
              <Image src="/assets/pcimg/home/fox.png" width="59" height="59" />
              <Image src="/assets/pcimg/home/w.png" width="59" height="59" />
            </div>
          </div>
          <div className="right">
            <Image src="/assets/pcimg/home/game1.png" width="129" height="62" />
            <Image src="/assets/pcimg/home/game2.png" width="129" height="57" />
            <Image src="/assets/pcimg/home/game3.png" width="193" height="60" />
          </div>
        </div>
      </div>
      <div className="tasks-list">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3.2}
          spaceBetween={15}
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks1.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks2.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks3.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks1.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks2.png" />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href={``} passHref>
              <img src="/assets/home/hot/tasks3.png" />
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
      {user && (
        <div className="recently">
          <div className="title">最近的重大胜利</div>
          <Swiper slidesPerView={7.2} spaceBetween={14}>
            {recentGamesList?.map((item) => {
              return (
                <SwiperSlide key={item.gameId}>
                  <div
                    className="box"
                    onClick={() => {
                      play(item, dispatch);
                    }}
                  >
                    <div className="img-box">
                      {item.imagename ? (
                        <img src={item.imagename} />
                      ) : (
                        <Image
                          src="/assets/home/LOGO.png"
                          width={77}
                          height={30}
                        />
                      )}
                    </div>
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
      <div className="hot-game-list">
        <div className="title">热门游戏</div>
        <Swiper slidesPerView={6.2} spaceBetween={15}>
          {GAME_ENTRIES.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                onClick={() => {
                  onClickHandle(item);
                }}
              >
                <div className="box">
                  <img
                    src={`/assets/home/games/${item.biggametype}/${item.provider}.png`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="live-game">
        <div className="title">真人游戏</div>
        <Swiper slidesPerView={7.3} spaceBetween={13}>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_1.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">隐</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_2.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉克斯德</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_3.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_1.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">隐</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_2.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉克斯德</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_3.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_1.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">隐</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_2.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉克斯德</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="box">
              <img src="/assets/home/hot/re_3.png" />
              <div className="text-box">
                <div className="text">
                  <div className="name">朱克拉</div>
                  <InfoCircleOutlined />
                </div>
                <div className="btn">现在播放</div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="application">
        <Swiper slidesPerView={1} spaceBetween={0}>
          <SwiperSlide>
            <div className="box">
              <div className="left">
                <div className="tit-box">
                  应用下载
                  <Image
                    src="/assets/pcimg/home/app-img.png"
                    width="147"
                    height="147"
                  />
                </div>
                <div className="text-box">
                  <div className="text">
                    <div className="text1">游戏的未来就在这里</div>
                    <div className="text2">
                      任何设备<span>都能运行</span>的好游戏
                    </div>
                    <div className="text3">
                      全新<span>win1应用</span>
                    </div>
                    <div className="text4">
                      现在注册<span>获得无限奖励</span>
                    </div>
                  </div>
                  <div className="qr">
                    <div className="qr-img">
                      <Image
                        src="/assets/pcimg/home/qr.png"
                        width="224"
                        height="224"
                      />
                    </div>
                  </div>
                </div>
                <div className="customer">客服声音</div>
              </div>
              <div className="right">
                <Image
                  src="/assets/pcimg/home/game-img.png"
                  width="596"
                  height="596"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="footer-box">
        <div className="top">
          <div className="btn">关于我们</div>
          <div className="btn">条款与规则</div>
          <div className="btn">产品信息</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2"
          viewBox="0 0 1520 2"
          fill="none"
          style={{ width: "100%" }}
        >
          <path d="M1520 0.16333H0V1.32278H1520V0.16333Z" fill="#0F0E0C" />
        </svg>
        <div className="license-box">
          <div className="license-list">
            <div className="license list-box">
              <div className="tit">游戏许可证</div>
              <div className="box">
                <div className="left">
                  <div className="item">
                    <img className="img1" src="assets/home/hot/license1.png" />
                  </div>
                  <div className="item">
                    <img className="img2" src="assets/home/hot/license2.png" />
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
            <div className="licenseBox list-box">
              <div className="tit">牌照</div>
              <Swiper slidesPerView={2} spaceBetween={13}>
                <SwiperSlide>
                  <img src="/assets/home/hot/lic1.png" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/assets/home/hot/lic2.png" />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="focus-on list-box">
              <div className="tit">关注我们</div>
              <div className="box">
                <img src="/assets/home/hot/follow1.png" />
                <img src="/assets/home/hot/follow2.png" />
                <img src="/assets/home/hot/follow3.png" />
              </div>
            </div>
            <div className="focus-on list-box">
              <div className="tit">责任博彩</div>
              <div className="box">
                <img src="/assets/home/hot/follow4.png" />
                <img className="gamcare" src="/assets/home/hot/gamcare.png" />
              </div>
            </div>
          </div>
        </div>
        <div className="partner-box">
          <img className="partner1" src="/assets/pcimg/home/partner1.png" />
          <img className="partner2" src="/assets/pcimg/home/partner2.png" />
          <img className="partner3" src="/assets/pcimg/home/partner3.png" />
          <img className="partner4" src="/assets/pcimg/home/partner4.png" />
          <img className="partner5" src="/assets/pcimg/home/partner5.png" />
          <img className="partner6" src="/assets/pcimg/home/partner6.png" />
          <img className="partner7" src="/assets/pcimg/home/partner7.png" />
          <img className="partner8" src="/assets/pcimg/home/partner8.png" />
        </div>
        <div className="footer-text">
          WIN1体育拥有颁发的合法执照，是受国际行业协会认可的合法公司。进行注册并娱乐前，请确保您年满18周岁！
          版权所有 ©2020-2023 PP88保留所有权
        </div>
      </div>
    </div>
  );
};

export default PcHomePage;
