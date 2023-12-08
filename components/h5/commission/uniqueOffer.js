import react, { useRef } from "react";
import styles from "./uniqueOffer.module.scss";
import NavBar from "@/components/h5/components/nav-bar";
import Head from "next/head";
import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";
import ShaeModal from "./components/shareModal";

const UniqueOffer = () => {
  const copyCot = (value) => {
    copy(value);
    Toast.show({
      content: "复制成功",
    });
  };

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
        <div className="copy-box">
          <div className="item">
            <p>专属邀请码</p>
            <input type="text" readOnly value="64C935E0F10A1" />
            <div
              className="copy"
              onClick={() => {
                copyCot("64C935E0F10A1");
              }}
            ></div>
          </div>
          <div className="item">
            <p>邀请链接</p>
            <input
              type="text"
              readOnly
              value="Https://m.win8.com/?u_code=64C954R3saA1"
            />
            <div
              className="copy"
              onClick={() => {
                copyCot("Https://m.win8.com/?u_code=64C954R3saA1");
              }}
            ></div>
          </div>
        </div>
        <ShaeModal title="立即邀请" />
        <div className="illustrate">
          <div className="title">说明事项</div>
          <ul>
            <li>
              <div className="num">1</div>
              <p>
                通过您专属链接注册，您的下线首次存款将获得 <span>2%</span> 的优
                惠，最高可获得 <span>500</span> ，获得的优惠只需要1倍打量。
              </p>
            </li>
            <li>
              <div className="num">2</div>
              <p>
                如发现任何作弊行为，所产生的邀请收益均不再计算，并
                回收所有的收益，严重者作封号处理。
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="share-box">
        <div className="icon">
          <img src="/assets/commission/icon_wa.png" />
          <p>Whatsapp</p>
        </div>
        <div className="icon">
          <img src="/assets/commission/icon_fb.png" />
          <p>Facebook</p>
        </div>
        <div className="icon">
          <img src="/assets/commission/icon_tele.png" />
          <p>Telegram</p>
        </div>
        <div className="icon">
          <img src="/assets/commission/icon_gxh.png" />
          <p>个性化</p>
        </div>
        <div className="icon">
          <ShaeModal title="立即邀请" isMore={true} />
        </div>
      </div>
    </div>
  );
};
export default UniqueOffer;
