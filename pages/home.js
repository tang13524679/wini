import react, { useState, useEffect } from "react";
import TabBar from "@/components/h5/components/tab-bar";
import HomePage from "@/components/h5/home";
import useWindowSize from "@/hooks/useWindowSize";
import PcLayout from "@/layouts/pc-layouts";
import PcHomePage from "@/components/web/home";

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
