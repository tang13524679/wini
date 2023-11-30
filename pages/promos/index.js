import { useState, useEffect } from "react";
import Head from "next/head";
import MainLayout from "@/layouts/main";
import { PROMO_TYPES } from "@/utils/const";
// import WithNav from '@/layouts/with-nav';
import FadeInImage from "@/components/fadein-image";
import Link from "next/link";
import { t } from "@/utils/translate";
import classNames from "classnames";
import { useGlobalState } from "@/hooks/global";
import EmptyPage from "@/components/empty-page";
import { commonApi } from "@/requests/frontend";

export default function PromoPage() {
  const [{ lang }] = useGlobalState();
  const [promoType, setPromoType] = useState(PROMO_TYPES[0]);
  const [data, setData] = useState([]);

  async function getPromos(type) {
    let rst = await commonApi.promos({ activity_type: type });
    setData(rst.info);
  }

  function renderTags(activity_type) {
    let tags = PROMO_TYPES.filter((item) => activity_type.includes(item.value));
    tags.shift();
    return tags.map((item, i) => (
      <div key={i} className="tag mr-2 my-1">
        {item[`name_${lang}`]}
      </div>
    ));
  }

  useEffect(() => {
    getPromos(promoType.value);
  }, [promoType]);

  return (
    <MainLayout>
      <Head>
        <title>Promo - WIN</title>
      </Head>
      <>
        <div className="p-4 grid grid-cols-3 sm:grid-cols-6 items-center gap-2 lg:gap-4 sticky top-0 z-10 bgPage">
          {/* {PROMO_TYPES.map((item, index) => (
                        <div
                            key={item}
                            className={classNames(
                                'px-4 py-1 rounded-full transition cursor-pointer capitalize text-center',
                                promoType.name_en === item.name_en
                                    ? 'bgMainYellow'
                                    : 'bgWhite6'
                            )}
                            onClick={() => {
                                setPromoType(PROMO_TYPES[index]);
                            }}
                        >
                            {item[`name_${lang}`]}
                        </div>
                    ))} */}
        </div>
        {data.length === 0 && <EmptyPage />}
        {data.length > 0 && (
          <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 px-4 pb-4">
            {data.map((item, index) => (
              <Link key={index} href={`/promo/${item.ecactivitycode}`} passHref>
                <div className="bgWhite4 rounded-md overflow-hidden cursor-pointer">
                  <div className="aspect-w-16 aspect-h-7 bgPlaceholder2 relative">
                    <FadeInImage src={item.activityimage} />
                  </div>
                  <div className="pt-2 pb-3 px-4">
                    <div className="text-sm sm:text-lg clWhite truncate hoverMainColor">
                      {lang == "zh" && item.activityname}
                      {lang == "en" && item.activityname_en}
                      {lang == "vi" && item.activityname_vi}
                    </div>
                    <div className="flex items-center mt-1">
                      <div className="icon-clock mr-2"></div>
                      <div className="clWhite30 text-xs truncate">
                        <span className="mr-1">{t("from")}</span>
                        <span>{item.starttime}</span>
                        <span className="mx-1">{t("to")}</span>
                        <span>{item.endtime}</span>
                      </div>
                    </div>
                    <div className="mt-2 flex flex-wrap">
                      {renderTags(item.activity_type)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </>
    </MainLayout>
  );
}
