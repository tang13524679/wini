import react, { useEffect } from "react";
import dynamic from "next/dynamic";
const PromoPage = dynamic(() => import("@/components/h5/promo/promo-page"));
const TabBar = dynamic(() => import("@/components/h5/components/tab-bar"));

const Promo = () => {
  return (
    <>
      <PromoPage />
      <TabBar />
    </>
  );
};

export default Promo;
