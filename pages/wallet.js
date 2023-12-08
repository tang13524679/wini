import react, { useEffect } from "react";
import WalletPage from "@/components/h5/wallet/index";
import TabBar from "@/components/h5/components/tab-bar";
import { useAuth } from "@/hooks/user";

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
