import React, { useCallback } from "react";
import { t } from "@/utils/translate";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGlobalState } from "@/hooks/global";
//底部 导航栏
const getMenuProps = (key, params) => {
  const { pathname, myPath = `/${key}`, className } = params;
  const isCurrent = pathname === myPath;
  const iconName = isCurrent ? `icon-${key}-on-mobile` : `icon-${key}-mobile`;
  const params1 = {
    key: `/${key}`,
    title: t(key, "nav"),
    className: `${iconName} ${className}`,
    classNameText: isCurrent ? "#47B726" : "#858FA2",
    myPath: myPath,
  };
  switch (key) {
    case "home":
      params1.iconImage = "fangzi";
      break;
    case "commission":
      params1.iconImage = "yongjin";
      break;
    case "wallet":
      params1.iconImage = "wallet";
      break;
    case "trans":
      params1.iconImage = "qianbao";
      break;
    case "promo":
      params1.iconImage = "youhui";
      break;
    case "mine":
      (params1.iconImage = "wode"), (params1.title = "我的");
      break;
    default:
      break;
  }
  return params1;
};

export default function MobileNav() {
  const [, dispatch] = useGlobalState();
  const router = useRouter();
  const { pathname } = router;
  const params = { pathname };
  const menuGroup1 = [
    {
      ...getMenuProps("home", params),
    },
    {
      ...getMenuProps("commission", params),
    },
    {
      ...getMenuProps("wallet", params),
    },
    // {
    //     ...getMenuProps('trans', {
    //         ...params,
    //         myPath: '/fund/trans',
    //         // className: 'trans-scale'
    //     }),
    //     key: '/fund/trans?tab=deposit',
    // },
    {
      ...getMenuProps("promo", params),
    },
    {
      ...getMenuProps("mine", {
        ...params,
        myPath: "/mine",
        // className: 'trans-scale'
      }),
    },
  ];
  // const liveChat ={
  //     ...getMenuProps('liveChat', params),
  // }
  // const openChat = useCallback(() => {
  //     dispatch({
  //         type: 'set_chatWidgetVisible',
  //         payload: true,
  //     })
  // }, [])
  return (
    <div className="bgMobileNav">
      <div
        id="mobileNav"
        style={{
          height: "66px",
          paddingBottom: 0,
          alignItems: "end",
          display: "flex",
          justifyContent: "space-between",
          padding: "2px 10px",
        }}
        className=" bgMobileNav sm:hidden  fixed bottom-0 w-full capitalize z-30"
      >
        {menuGroup1.map((item) => (
          <Link key={item.key} href={item.key} passHref>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: 24, marginBottom: 5 }}
                src={`/assets/home/${item.iconImage}${
                  item.myPath == pathname ? "" : "2"
                }.png`}
              />
              <div
                className={`${item.classNameText} text-center text-xs scale-75`}
              >
                {item.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
