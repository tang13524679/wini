import react, { useState } from "react";
import styles from "./header.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useGlobalState } from "@/hooks/global";
import { useRouter } from "next/router";
import { useBalance } from "@/hooks/fund";
import LoginModal from "./loginModal";

export default function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const [{ user }] = useGlobalState();
  const router = useRouter();
  const balance = useBalance();
  return (
    <>
      <div className={styles.headerBox}>
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
                  setIsLogin(true);
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
                <div>{balance || 0}</div>
              </div>
              <Link href="/user/messages" passHref>
                <div className="icon-messages"></div>
              </Link>
            </div>
          )}
        </div>
      </div>
      <LoginModal
        isLogin={isLogin}
        callback={() => {
          setIsLogin(false);
        }}
      />
    </>
  );
}
