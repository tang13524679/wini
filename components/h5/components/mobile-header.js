import react from "react";
import styles from "./mobile-header.module.scss";
import Link from "next/link";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { useBalance } from "@/hooks/fund";
import Image from "next/image";
import { t } from "@/utils/translate";

export default function MobileHeader() {
  const [{ user, lang }] = useGlobalState();
  const router = useRouter();
  const balance = useBalance();
  return (
    <div
      className={styles.headerBox}
      style={{ maxWidth: "430px", left: "50%", transform: "translateX(-50%)" }}
    >
      <div className="left">
        <Link href="/home">
          <Image src="/assets/home/LOGO.png" width={77} height={30} />
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
              <div>{balance || 0}</div>
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
