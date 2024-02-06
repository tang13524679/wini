import react, { useState, useEffect } from "react";
import styles from "./index.module.scss";
import { RightOutlined } from "@ant-design/icons";
import { cleanUserStore } from "@/utils/common";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { getAvatarIndex } from "@/utils/common";
import { setOnline } from "@/requests/frontend/users";
import { Toast } from "antd-mobile";
import { useAuth } from "@/hooks/user";
import store from "store";
import { userApi, gameApi } from "@/requests/frontend";
import { t } from "@/utils/translate";
import dynamic from "next/dynamic";
const Link = dynamic(() => import("next/link"));

const MinePage = () => {
  useAuth("/mine");
  const [{ user }, dispatch] = useGlobalState();
  const [confirmLoading, setconfirmLoading] = useState(false);
  const router = useRouter();
  const avatarIndex = getAvatarIndex(user?.employeecode);
  const [balance, setBalance] = useState("");
  const [data, setData] = useState({});

  const getUserVipHandle = async () => {
    const res = await userApi.getUserVip();
    if (res.code == "1") {
      setData(res);
    }
  };

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
    getUserVipHandle();
    getBalance();
  }, []);

  return (
    <div className={styles.container}>
      <div className="user-info">
        <div className="avatar">
          <img src={`/assets/avatar/${avatarIndex}.jpg`} />
        </div>
        <div className="info">
          <div className="name">
            {user?.loginaccount} <span>{data?.info?.currentLevelName}</span>
          </div>
          <div className="time">
            {t("No.")}
            {user?.registerDays}
            {t("daystojoin")}WIN1
          </div>
        </div>
      </div>
      <div className="wallet-box">
        <div className="left">
          <div className="tit">{t("walletcenter")}（HKD）</div>
          <div className="num">{balance || store.get("balance")}</div>
        </div>
        <div className="right">
          <div
            className="btn"
            onClick={() => {
              router.push("/wallet?tab=recharge");
            }}
          >
            {t("topup")}
          </div>
          <div
            className="btn"
            onClick={() => {
              router.push("/wallet?tab=withdraw");
            }}
          >
            {t("Withdrawmoney")}
          </div>
        </div>
      </div>
      <div className="link-box">
        <Link href="/user/vip-club" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon1.png" />
              {t("VIPClub")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/promo" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon3.png" />
              {t("promo")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/personal" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon4.png" />
              {t("personalinformation")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/bank-card" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon5.png" />
              {t("bankcards")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/game-history" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon6.png" />

              {t("gamehistory")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/transaction" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon7.png" />
              {t("sideRecords")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/favorites" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon8.png" />
              {t("favorite")}
            </div>
            <RightOutlined />
          </div>
        </Link>
        <div
          className="box"
          onClick={() => {
            Modal.confirm({
              centered: true,
              title: t("tips"),
              content: t("loginstatus"),
              okText: t("Sure"),
              cancelText: t("Cancel"),
              confirmLoading: confirmLoading,
              onOk: async () => {
                try {
                  setconfirmLoading(true);
                  const res = await setOnline();
                  if (res.code == "1") {
                    cleanUserStore();
                    dispatch({
                      type: "set_user",
                      payload: null,
                    });
                    router.push("/home");
                  }
                } catch (error) {
                  Toast.show({
                    content: error,
                  });
                  console.error(error);
                } finally {
                  setconfirmLoading(false);
                }
              },
            });
          }}
        >
          <div className="tit">
            <img src="/assets/mine/icon9.png" />
            {t("Signout")}
          </div>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default MinePage;
