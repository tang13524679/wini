import react, { useState } from "react";
import styles from "./pcNav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PcNav() {
  const router = useRouter();
  console.log(router);
  const linkList = [
    {
      name: "首页",
      class: "box",
      className: "icon icon1",
      href: "/home",
      activeClass: "icon1-on",
    },
    {
      name: "游戏",
      class: "t-box1 t-box",
      className: "t-icon1 t-icon",
      href: "",
    },
    {
      name: "佣金",
      class: "t-box2 t-box",
      className: "t-icon2 t-icon",
      href: "",
    },
    {
      name: "Win1活动冲就送",
      class: "t-box3 t-box",
      className: "t-icon3 t-icon",
      href: "",
    },
    {
      name: "优惠",
      class: "box",
      className: "icon icon2",
      href: "",
      activeClass: "icon2-on",
    },
    {
      name: "VIP俱乐部",
      class: "box",
      className: "icon icon3",
      href: "",
      activeClass: "icon3-on",
    },
    {
      name: "个人中心",
      class: "box",
      className: "icon icon4",
      href: "",
      activeClass: "icon4-on",
    },
    {
      name: "银行卡",
      class: "box",
      className: "icon icon5",
      href: "",
      activeClass: "icon5-on",
    },
    {
      name: "额度记录",
      class: "box",
      className: "icon icon6",
      href: "",
      activeClass: "icon6-on",
    },
    {
      name: "游戏记录",
      class: "box",
      className: "icon icon7",
      href: "",
      activeClass: "icon7-on",
    },
    {
      name: "我的收藏",
      class: "box",
      className: "icon icon8",
      href: "",
      activeClass: "icon8-on",
    },
  ];
  return (
    <>
      <div className={styles.pcNav}>
        <div className="link-box">
          {linkList.map((item, index) => {
            return (
              <Link href={item.href} passHref key={index}>
                <div className={item.class}>
                  <span
                    className={`${item.className} ${
                      router.route == item.href ? item.activeClass : ""
                    }`}
                  ></span>
                  <div
                    className={`${
                      router.route == item.href ? "tit-on" : ""
                    } tit`}
                  >
                    {item.name}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
