import { useEffect, useState } from "react";
import { uaInfo, getDomain } from "@/utils/common";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRouter } from "next/router";
import Head from "next/head";
import { commonApi } from "@/requests/frontend";

export default function Download() {
  const router = useRouter();
  const [link, setLink] = useState("");
  const [isMobile, setMobile] = useState(false);
  const [isIOS, setIOS] = useState(false);

  async function getLink() {
    const ua = uaInfo();
    if (ua.device.type === "mobile") {
      setMobile(true);
    }
    let res = await commonApi.appLink({
      domain: getDomain(),
    });

    if (res) {
      if (ua.os.name && ua.os.name === "iOS") {
        setIOS(true);
        setLink(res.info.ios);
      } else {
        setLink(res.info.android);
      }
    }
  }
  useEffect(() => {
    function getAppPath() {
      switch (location.host) {
        case "www.g8vip.com":
          return "gg8agent01";

        case "www.g3vip.com":
          return "gg8agentg3";

        case "www.g6vip.com":
          return "gg8agentg6";

        case "www.g9vip.com":
          return "gg8agentg9";

        case "www.g32vip.com":
          return "gg8agentg32";

        case "www.g33vip.com":
          return "gg8agentg33";

        default:
          return "gg8admin";
      }
    }
    const ua = uaInfo();
    if (ua.os.name && ua.os.name === "iOS") {
      setIOS(true);
      setLink(`/app/${getAppPath()}/GG8.mobileconfig`);
    } else {
      setLink(`/app/${getAppPath()}/GG8.apk`);
    }

    getLink();
  }, []);
  const swipers = [
    {
      img: "1.png",
    },
    {
      img: "2.png",
    },
    {
      img: "3.png",
    },
  ];
  return (
    <>
      <Head>
        <title>Download - WIN</title>
      </Head>
      {isMobile && (
        <div className="overflow-auto relative" style={{ height: "100vh" }}>
          <img src="/download/back.png" alt="back" className="absolute top-0" />
          <div className="absolute top-0 w-full">
            <div
              className="h-20"
              onClick={() => {
                router.push("/home");
              }}
            ></div>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={true}
              slidesPerView={1}
              grabCursor={true}
              loop={true}
            >
              {swipers.map((item) => (
                <SwiperSlide key={item.img}>
                  <img src={`/download/${item.img}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="text-center mt-4">
              {link && (
                <a
                  target="_self"
                  href={link}
                  rel="noreferrer"
                  className="block"
                >
                  <div className="btnYellow py-2 px-4 w-26 inline-block w-4/5 rounded-full text-base">
                    download
                  </div>
                </a>
              )}
            </div>
            {/* IOS */}
            {isIOS && (
              <div className="p-4">
                <div className="flex items-center justify-center">
                  <div className="clMainYellow text-xs">
                    Vuốt xuống để xem các bước cài đặt IOS
                  </div>
                  <div className="icon-down-more ml-1"></div>
                </div>
                <div className="flex justify-center mt-10">
                  <div className="icon-apple"></div>
                </div>
                <div className="text-base clWhite text-center mt-3">
                  Các bước cài đặt
                </div>
                <img src="/download/steps.png" alt="steps" className="mt-6" />
              </div>
            )}
            <div className="h-20"></div>
          </div>
        </div>
      )}
    </>
  );
}
