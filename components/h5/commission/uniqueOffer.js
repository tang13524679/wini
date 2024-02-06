import react, { useState, useEffect } from "react";
import styles from "./uniqueOffer.module.scss";
import NavBar from "@/components/h5/components/nav-bar";
import Head from "next/head";
import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";
import ShaeModal from "./components/shareModal";
import { getDomain } from "@/utils/common";
import { useGlobalState } from "@/hooks/global";
import QRCode from "qrcode.react";
import { t } from "@/utils/translate";

const UniqueOffer = () => {
  const [{ user }] = useGlobalState();
  const [invitationLink, setInvitationLink] = useState("");
  const copyCot = (value) => {
    copy(value);
    Toast.show({
      content: t("CopySuccessfully"),
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setInvitationLink(`${getDomain()}/login?agentCode=${user?.employeecode}`);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <NavBar title={t("Uniqueoffer")} />
      <div className="content-box">
        <div className="code-box">
          <div className="qr">
            <QRCode value={invitationLink} />
            <p>{t("yourinvitationcode")}</p>
          </div>
          <div className="text">
            {t("Uniqueoffertext1")}
            <span>{t("Uniqueoffertext2")}</span> {t("Uniqueoffertext3")}
            <span>{t("Uniqueoffertext4")}</span>
            {t("Uniqueoffertext5")}
          </div>
        </div>
        <div className="copy-box">
          <div className="item">
            <p>{t("Uniqueoffertext6")}</p>
            <input type="text" readOnly value={user?.employeecode} />
            <div
              className="copy"
              onClick={() => {
                copyCot("64C935E0F10A1");
              }}
            ></div>
          </div>
          <div className="item">
            <p>{t("Uniqueoffertext7")}</p>
            <input type="text" readOnly value={invitationLink} />
            <div
              className="copy"
              onClick={() => {
                copyCot(invitationLink);
              }}
            ></div>
          </div>
        </div>
        <ShaeModal title={t("Invitenow")} />
        <div className="illustrate">
          <div className="title">{t("Uniqueoffertext8")}</div>
          <ul>
            <li>
              <div className="num">1</div>
              <p>
                {t("Uniqueoffertext9")} <span>2%</span> {t("Uniqueoffertext10")}
                <span>500</span> {t("Uniqueoffertext11")}
              </p>
            </li>
            <li>
              <div className="num">2</div>
              <p>{t("Uniqueoffertext12")}</p>
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
          <p>{t("personalise")}</p>
        </div>
        <div className="icon">
          <ShaeModal title={t("Invitenow")} isMore={true} />
        </div>
      </div>
    </div>
  );
};
export default UniqueOffer;
