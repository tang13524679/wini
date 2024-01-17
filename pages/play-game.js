import react from "react";
import dynamic from "next/dynamic";
const PlayGamePage = dynamic(() => import("@/components/h5/palyGame/index"));

const PlayGame = () => {
  return (
    <>
      <PlayGamePage />
    </>
  );
};

export default PlayGame;
