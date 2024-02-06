import classNames from "classnames";
import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import styles from "./vip-cards-banner.module.scss";
import { VipLevelCard } from "./vip-cards/vip-level-card";
import { Modal } from "antd";
import { t } from "@/utils/translate";

// icon mapping for vip perks
const iconMapping = {
  1: { on: "icon-vip-cunqukuan-on", off: "icon-vip-cunqukuan" },
  2: { on: "icon-vip-huodong-on", off: "icon-vip-huodong" },
  3: { on: "icon-vip-youhui-on", off: "icon-vip-youhui" },
  4: { on: "icon-vip-24hour-on", off: "icon-vip-24hour" },
  5: { on: "icon-vip-jieri-on", off: "icon-vip-jieri" },
  6: { on: "icon-vip-fukuan-on", off: "icon-vip-fukuan" },
  7: { on: "icon-vip-dujiafukuan-on", off: "icon-vip-dujiafukuan" },
  8: { on: "icon-vip-guibin-on", off: "icon-vip-guibin" },
  9: { on: "icon-vip-yaoqing-on", off: "icon-vip-yaoqing" },
  10: { on: "icon-vip-qita-on", off: "icon-vip-qita" },
  default: { on: "icon-vip-guibin-on", off: "icon-vip-guibin" },
};

export default function VipCardsBanner({
  className,
  level,
  vipInfos,
  percentage,
  currentAmount,
  nextAmount,
}) {
  const flag = useRef(false);
  const [vipNum, setVipNum] = useState(level);
  const [vipList, setVipList] = useState([]);
  const [active, setActive] = useState(() => Math.max((level ?? 1) - 1, 0));
  const slides = Array(vipInfos?.info.vipInfos.length ?? 5)
    .fill(0)
    .map((_, i) => (
      <SwiperSlide
        key={vipInfos?.info.vipInfos[i].vipCode ?? i}
        className="max-w-sm aspect-vip"
      >
        <VipLevelCard
          level={vipInfos?.info.vipInfos[i].vipLevel ?? i + 1}
          name={vipInfos?.info.vipInfos[i].vipName}
          upgrade={vipInfos?.info.vipInfos[i].upgrade}
          relegation={vipInfos?.info.vipInfos[i].relegationAmount}
          isCurrentLevel={level === vipInfos?.info.vipInfos[i].vipLevel}
        />
      </SwiperSlide>
    ));
  useEffect(() => {
    setVipList(vipInfos);
    console.log(vipList);
  }, [vipInfos]);

  // build memoized vip perks
  const nVipLevels = vipInfos?.info.vipInfos.length;
  const _vipPerks = useMemo(
    () =>
      vipInfos &&
      vipInfos.info.prerogativeInfos.map(({ id, levelCodes, name, index }) => {
        const isOn = levelCodes
          .split(",")
          .includes(vipInfos.info.vipInfos[active].vipCode);
        console.log(isOn, "index");
        return (
          <div key={id} className="flex items-center space-x-2">
            <div
              className={classNames(
                "shrink-0",
                isOn
                  ? iconMapping[id]?.on ?? iconMapping.default.on
                  : iconMapping[id]?.off ?? iconMapping.default.off
              )}
            />
            <span
              className={classNames(
                "text-sm transition duration-300 breakWord",
                isOn ? "clMainYellow" : "text-white/30"
              )}
            >
              {name}
            </span>
          </div>
        );
      }),
    [vipInfos, active]
  );

  // handlers
  const handleSlideChange = useCallback((e) => {
    setVipNum(e.snapIndex + 1);
    // ignore first callback call due to swiper bug
    if (!flag.current) {
      flag.current = true;
      return;
    }

    setActive(e.realIndex);
  }, []);

  return (
    <div className={styles.vipBannerContainer}>
      <div className="top-box">
        <div className="flex items-center justify-between moreInfo-box">
          <span className="clWhite text-base">{t("vipLevelLabel", "vip")}</span>
          <button
            className="clWhite70 text-sm flex items-center space-x-1 cursor-pointer transition hover:opacity-80"
            onClick={() => {
              const items = t("vipLevelDialogItems", "vip").map((item) => (
                <li key={item}>{item}</li>
              ));

              Modal.info({
                title: t("vipLevelDialogTitle", "vip"),
                content: <ol className="app-ol">{items}</ol>,
                centered: true,
              });
            }}
          >
            <span>{t("moreInfoLabel", "vip")}</span>
            <span className="icon-question inline-block" />
          </button>
        </div>
        <Swiper
          className="h-full"
          modules={[Autoplay]}
          autoplay={false}
          spaceBetween={20}
          slidesPerView={1}
          slideToClickedSlide={true}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          initialSlide={active}
          onSlideChange={handleSlideChange}
          breakpoints={{ 768: { slidesPerView: 3.2 } }}
        >
          {/* {slides} */}
          {vipInfos?.info.vipInfos?.map((item, index) => {
            return (
              <SwiperSlide
                key={index}
                className="aspect-vip"
                style={{ textAlign: "center" }}
              >
                <img
                  style={{ width: "100%" }}
                  src={`/assets/vip-levels/vip${index + 1}.png`}
                />
                <div className="text-box">
                  <div className="text">{t("Requiredforupgrading")}</div>
                  <div className="num">
                    {vipInfos?.info?.vipInfos[level - 1 - index]?.upgrade}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="bot-box">
          <div className="flex items-center justify-between text-lg clWhite">
            <span>{t("vipProgress", "vip")}</span>
            {percentage ? (
              <span>
                {vipNum == level ? percentage : vipNum < level ? "100%" : "0%"}
              </span>
            ) : (
              <div className="h-3 w-8 bgWhite20 animate-pulse rounded" />
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2.5 bg-white/10 rounded-md overflow-hidden relative progress">
            <div
              className="bgMainYellow absolute top-0 left-0 h-2.5 rounded-md rounded-box"
              style={{
                width:
                  vipNum == level ? percentage : vipNum < level ? "100%" : "0%",
              }}
            />
          </div>
        </div>
        {/* VIP Slider Custom Pagination */}
        <div
          className="-mx-4 md:mx-0 relative flex justify-around"
          style={{ height: "0", opacity: "0" }}
        >
          <div className="relative z-10 flex flex-col items-center">
            <span className="my-[2px] h-2 w-2 bg-[#656565] rounded-full"></span>
            <span className="mt-3">
              Lvl {active === 0 ? nVipLevels : active}
            </span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="h-3 w-3 bgMainYellow border-2 border-white rounded-full"></span>
            <span className="mt-3">Lvl {active + 1}</span>
          </div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="my-[2px] h-2 w-2 bg-[#656565] rounded-full"></span>
            <span className="mt-3">
              Lvl {active === nVipLevels - 1 ? 1 : active + 2}
            </span>
          </div>
          <div className="h-[3px] w-full absolute top-1 left-0 bgVipPaginationGradient" />
        </div>

        {/* VIP Perks Grid */}
      </div>
      {/* <div className="mt-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bottom-box">
        {_vipPerks}

      </div> */}
      {vipNum < 5 && (
        <div class="mt-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bottom-box">
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-cunqukuan-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext1")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-huodong-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext2")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-24hour-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext3")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-youhui"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext4")}{" "}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-jieri"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext5")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-dujiafukuan"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext6")}
            </span>
          </div>
        </div>
      )}
      {vipNum >= 5 && (
        <div class="mt-6 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 bottom-box">
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-cunqukuan-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext1")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-huodong-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext2")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-24hour-on"></div>
            <span class="text-sm transition duration-300 breakWord clMainYellow">
              {t("vipActivitytext3")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-youhui-on"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext4")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-jieri-on"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext5")}
            </span>
          </div>
          <div class="flex items-center space-x-2">
            <div class="shrink-0 icon-vip-dujiafukuan-on"></div>
            <span class="text-sm transition duration-300 breakWord text-white/30">
              {t("vipActivitytext6")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
