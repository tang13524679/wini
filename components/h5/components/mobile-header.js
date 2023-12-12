import react from "react";
import styles from "./mobile-header.module.scss";
import Link from "next/link";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";

export default function MobileHeader() {
  const [{ user }] = useGlobalState();
  const router = useRouter();
  return (
    <div className={styles.headerBox}>
      <div className="left">
        <Link href="/home">
          <img src="/assets/home/LOGO.png" />
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
              登录
            </div>
            <div
              className="register"
              onClick={() => {
                router.push("/login?type=register");
              }}
            >
              立即注册
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
              <div>0</div>
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
