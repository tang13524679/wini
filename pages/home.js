import react, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import useWindowSize from "@/hooks/useWindowSize";
const TabBar = dynamic(() => import("@/components/h5/components/tab-bar"));
const HomePage = dynamic(() => import("@/components/h5/home"));
const PcLayout = dynamic(() => import("@/layouts/pc-layouts"));
const PcHomePage = dynamic(() => import("@/components/web/home"));

const Home = () => {
  const isMobile = useWindowSize();
  return (
    <>
      {isMobile == "desktop" && (
        <PcLayout>
          <PcHomePage />
        </PcLayout>
      )}
      {isMobile == "mobile" && (
        <div
          className="main-container"
          style={{
            maxWidth: "430px",
            margin: "0 auto",
          }}
        >
          <HomePage />
          <TabBar />
        </div>
      )}
    </>
  );
};

export default Home;
