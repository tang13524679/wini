import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import FadeInImage from "@/components/fadein-image";
import qs from "query-string";
import { BRAND_CODE } from "@/utils/const";
import styles from "./banner.module.scss";
import { useRouter } from "next/router";

export default function Banner({ slidesPerView = 1 }) {
  const router = useRouter();
  const { data } = useSWR([
    "/ecrm-api/EnterpriseBrand/banner",
    qs.stringify({
      brandcode: BRAND_CODE,
    }),
  ]);

  return (
    <div className={styles.container}>
      <div className={`aspect-w-16 aspect-h-7 mt-2 pagination`}>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={true}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          className="h-full"
        >
          {data?.info.map((item) => (
            <SwiperSlide key={item.bannername}>
              <div
                className="cursor-pointer"
                onClick={() => {
                  router.push(item.linkpath);
                }}
              >
                <FadeInImage src={item.imgpath} priority={true} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
