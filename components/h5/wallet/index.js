import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const Recharge = dynamic(() => import("./components/recharge"));
const Withdraw = dynamic(() => import("./components/withdraw"));

const WalletPage = () => {
  const router = useRouter();
  const [pageType, setPageType] = useState("recharge");

  useEffect(() => {
    if (JSON.stringify(router?.query?.tab) == "{}" || !router?.query?.tab) {
      setPageType("recharge");
    } else {
      setPageType(router?.query?.tab);
    }
  }, [router?.query?.tab]);

  return (
    <div className={styles.container}>
      <div className="navbar">
        <div
          className={`${pageType == "recharge" ? "active" : ""} item`}
          onClick={() => {
            // setPageType("recharge");
            router.push("/wallet?tab=recharge");
          }}
        >
          <span>充值</span>
        </div>
        <div
          className={`${pageType == "withdraw" ? "active" : ""} item`}
          onClick={() => {
            // setPageType("withdraw");
            router.push("/wallet?tab=withdraw");
          }}
        >
          <span>提款</span>
        </div>
      </div>
      {pageType == "recharge" && <Recharge />}
      {pageType == "withdraw" && <Withdraw />}
    </div>
  );
};

export default WalletPage;
