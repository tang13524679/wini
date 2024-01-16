import react, { useEffect } from "react";
import { useAuth } from "@/hooks/user";
import dynamic from "next/dynamic";
const WalletPage = dynamic(() => import("@/components/h5/wallet/index"));
const TabBar = dynamic(() => import("@/components/h5/components/tab-bar"));

const Wallet = () => {
  useAuth("/wallet");
  return (
    <>
      <WalletPage />
      <TabBar />
    </>
  );
};

export default Wallet;
