import react, { useEffect } from "react";
import Link from "next/link";
import styles from "./index.module.scss";
import { RightOutlined } from "@ant-design/icons";
import { cleanUserStore } from "@/utils/common";
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";

const MinePage = () => {
  const [{ user }, dispatch] = useGlobalState();
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className="user-info">
        <div className="avatar">
          <img src="/assets/mine/avatar.png" />
        </div>
        <div className="info">
          <div className="name">
            宏图大志 <span>LV.2</span>
          </div>
          <div className="time">第88天加入WIN8</div>
        </div>
      </div>
      <div className="wallet-box">
        <div className="left">
          <div className="tit">钱包中心（HKD）</div>
          <div className="num">0.00</div>
        </div>
        <div className="right">
          <div className="btn">充值</div>
          <div className="btn">提款</div>
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
        <Link href="" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon2.png" />
              代理合作
            </div>
            <RightOutlined />
          </div>
        </Link>
        <Link href="/user/task" passHref>
          <div className="box">
            <div className="tit">
              <img src="/assets/mine/icon3.png" />
              使命
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
              onOk: () => {
                cleanUserStore();
                dispatch({
                  type: "set_user",
                  payload: null,
                });
                router.push("/home");
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
