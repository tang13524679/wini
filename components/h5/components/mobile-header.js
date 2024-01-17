import react, { useState, useEffect } from "react";
import styles from "./mobile-header.module.scss";
import Link from "next/link";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { useBalance } from "@/hooks/fund";
import Image from "next/image";
import { t } from "@/utils/translate";
import { gameApi } from "@/requests/frontend";
import store from "store";

export default function MobileHeader() {
  const [{ user, lang }] = useGlobalState();
  const [balance, setBalance] = useState("");
  const router = useRouter();
  // const balance = useBalance();

  const getBalance = async () => {
    try {
      const res = await gameApi.balances();
      if (res.code == "1") {
        store.set("balance", res?.info);
        setBalance(res?.info);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    user && getBalance();
  }, []);
  return (
    <div
      className={styles.headerBox}
      style={{ maxWidth: "430px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="left">
        <Link href="/home">
          <Image src="/assets/home/logo1.png" width={50} height={50} />
        </Link>
      </div>
      <div className="right">
        {!user && (
          <div className="box">
            <div
              className="login"
              onClick={() => {
                router.push("/login?type=login");
              }}
            >
              {t("login")}
            </div>
            <div
              className={`${lang == "en" ? "en-register" : ""} register`}
              onClick={() => {
                router.push("/login?type=register");
              }}
            >
              {t("SignUpNow")}
            </div>
          </div>
        )}
        {user && (
          <div className="box">
            <div
              className="info"
              onClick={() => {
                router.push("/mine");
              }}
            >
              <div>{user?.loginaccount}</div>
              <div className="icon"></div>
              <div>{balance || store.get("balance")}</div>
            </div>
            <Link href="/user/messages" passHref>
              <div className="icon-messages"></div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
