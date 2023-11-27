import react from "react";
import styles from "./uniqueOffer.module.scss";
import NavBar from "@/components/h5/commission/components/nav-bar";
import Head from "next/head";

const UniqueOffer = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title="独特优惠" />
      <div className="content-box">
        <div className="code-box">
          <div className="qr">
            <img src="/assets/commission/qr.png" />
            <p>您的邀请码</p>
          </div>
          <div className="text">
            您的好友通过您的<span>专属链接</span> 或<span>邀请码</span>
            注册，首次存款将 获得独特的优惠。
          </div>
        </div>
      </div>
    </div>
  );
};
export default UniqueOffer;
