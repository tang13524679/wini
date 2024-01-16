import react, { useEffect } from "react";
import { useAuth } from "@/hooks/user";
import dynamic from "next/dynamic";
const TabBar = dynamic(() => import("@/components/h5/components/tab-bar"));
const MinePage = dynamic(() => import("@/components/h5/mine"));

const Mine = () => {
  useAuth("/mine");
  return (
    <>
      <MinePage />
      <TabBar />
    </>
  );
};

export default Mine;
