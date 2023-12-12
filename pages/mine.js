import react, { useEffect } from "react";
import TabBar from "@/components/h5/components/tab-bar";
import MinePage from "@/components/h5/mine";
import { useAuth } from "@/hooks/user";

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
