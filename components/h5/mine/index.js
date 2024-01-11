import react, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { RightOutlined } from "@ant-design/icons";
import { cleanUserStore } from "@/utils/common";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import useSWR from "swr";
import qs from "query-string";
import { formatOrdinal, getAvatarIndex } from "@/utils/common";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";
import { ENTERPRISE_CODE } from "@/utils/const";
import { useBalance } from "@/hooks/fund";
import { setOnline } from "@/requests/frontend/users";
import { Toast } from "antd-mobile";

const MinePage = () => {
  const [{ user }, dispatch] = useGlobalState();
  const [confirmLoading, setconfirmLoading] = useState(false);
  const router = useRouter();
  const avatarIndex = getAvatarIndex(user?.employeecode);
  const balance = useBalance();

  const { data } = useSWR(
    user && [
      "/ecrm-api/vipController/getUserVip",
      qs.stringify({
        enterprisecode: ENTERPRISE_CODE,
        params: encryptECB({ enterprisecode: ENTERPRISE_CODE }),
        signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE }),
      }),
    ]
  );

  console.log(data);

  return (
    <div className={styles.container}>
      <div className="user-info">
        <div className="avatar">
          <img src={`/assets/avatar/${avatarIndex}.jpg`} />
        </div>
        <div className="info">
          <div className="name">
            {user?.loginaccount} <span>{data?.info.currentLevelName}</span>
          </div>
          <div className="time">第{user?.registerDays}天加入WIN8</div>
        </div>
      </div>
      <div className="wallet-box">
        <div className="left">
          <div className="tit">钱包中心（HKD）</div>
          <div className="num">{balance}</div>
        </div>
        <div className="right">
          <div
            className="btn"
            onClick={() => {
              router.push("/wallet?tab=recharge");
            }}
          >
            充值
          </div>
          <div
            className="btn"
            onClick={() => {
              router.push("/wallet?tab=withdraw");
            }}
          >
            提款
          </div>
        </div>
      </div>
      <div className="link-box">
        <Link href="/user/vip-club" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon1.png" />
              贵宾俱乐部
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/promo" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon3.png" />
              优惠
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/personal" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon4.png" />
              个人信息
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/bank-card" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon5.png" />
              银行卡
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/game-history" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon6.png" />
              游戏历史
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/transaction" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon7.png" />
              交易记录
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/favorites" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon8.png" />
              最喜欢的
            </div>
            <RightOutlined />
          </div>
        </Link>
        <div
          className="box"
          onClick={() => {
            Modal.confirm({
              centered: true,
              title: "提示",
              content: "确定要退出当前登录状态吗?",
              okText: "确定",
              cancelText: "取消",
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
            登出
          </div>
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default MinePage;
