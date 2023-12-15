import { useState } from "react";
import { useRouter } from "next/router";
import { Menu, Tooltip, Modal } from "antd";
import { t } from "@/utils/translate";
import { useGlobalState } from "@/hooks/global";
import LangDropDown from "@/components/lang-dropdown";
// import useSWR from 'swr';
import styles from "./side-nav.module.scss";
import { cleanUserStore } from "@/utils/common";
import UserSummary from "./user-summary";

export default function SideNav() {
  const [{ user, collapsed, badge }, dispatch] = useGlobalState();
  const router = useRouter();
  const { pathname } = router;
  const [selectedKeys, setSelectedKeys] = useState([pathname]);
  // const { data: badge } = useSWR(user && '/ecrm-api/UserMessage/MessageCount');

  const menuGroup0 = [
    {
      key: "/home",
      className: pathname === "/home" ? "icon-home-on" : "icon-home",
      title: t("home", "nav"),
    },
    {
      key: "/games",
      className: pathname === "/games" ? "icon-games-on" : "icon-games",
      title: t("games", "nav"),
    },
  ];
  const menuGroup1 = [
    {
      key: "/promo",
      className: pathname === "/promo" ? "icon-promo-on" : "icon-promo",
      title: t("promo", "nav"),
    },
    {
      key: "/user/vip-club",
      className: pathname.includes("/vip-club")
        ? "icon-vip-club-on"
        : "icon-vip-club",
      title: t("vipClub", "nav"),
    },
    {
      key: "https://gg8daily.net",
      className: "icon-agent",
      title: t("agencyCooperation", "nav"),
    },
    {
      key: "/user/task",
      className: pathname === "/user/task" ? "icon-task-on" : "icon-task",
      title: t("task", "nav"),
    },
  ];
  const menuGroup2 = [
    {
      key: "/user/personal",
      className: pathname.includes("/personal")
        ? "icon-personal-on"
        : "icon-personal",
      title: t("personal", "nav"),
    },
    {
      key: "/user/bank-card",
      className: pathname.includes("/bank-card")
        ? "icon-bank-card-on"
        : "icon-bank-card",
      title: t("bankCard", "nav"),
    },
    {
      key: "/user/game-history",
      className: pathname.includes("/game-history")
        ? "icon-game-history-on"
        : "icon-game-history",
      title: t("gameHistory", "nav"),
    },
    {
      key: "/user/transaction",
      className: pathname.includes("/transaction")
        ? "icon-transaction-on"
        : "icon-transaction",
      title: t("transaction", "nav"),
    },
    {
      key: "/user/favorites",
      className:
        pathname === "/user/favorites" ? "icon-favorites-on" : "icon-favorites",
      title: t("favorites", "nav"),
    },
  ];

  // const promosMenus = [
  //     {
  //         key: '/promo/13',
  //         title: t('promo1'),
  //     },
  //     {
  //         key: '/promo/8',
  //         title: t('promo2'),
  //     },
  //     {
  //         key: '/promo',
  //         title: `${t('more')}...`,
  //     },
  // ];

  const messagesClassName = pathname.includes("/messages")
    ? "icon-messages-on"
    : "icon-messages";

  return (
    <div className={`${styles.container} hidden sm:block z-40 capitalize`}>
      {!collapsed && (
        <div
          className="icon-collapse fixed"
          style={{ zIndex: 11, left: 240, top: 17 }}
          onClick={() => {
            dispatch({
              type: "set_collapse",
              payload: true,
            });
          }}
        />
      )}
      <Menu
        mode="inline"
        inlineCollapsed={collapsed}
        style={{
          backgroundColor: "#07070D",
          height: "100vh",
          padding: "0 10px",
          overflow: "auto",
        }}
        theme="dark"
        selectedKeys={selectedKeys}
        onClick={({ key }) => {
          if (key.includes("http")) {
            window.open(key);
            return;
          }
          if (key.includes("/")) {
            router.push(key);
            setSelectedKeys([key]);
          }

          if (key === "logout") {
            Modal.confirm({
              centered: true,
              title: t("tips"),
              content: t("logoutConfirm", "msg"),
              okText: t("logout", "nav"),
              onOk: () => {
                cleanUserStore();
                dispatch({
                  type: "set_user",
                  payload: null,
                });
                router.push("/home");
              },
            });
          }
        }}
      >
        {/* <Tooltip title={t('expandTips')} placement="right"></Tooltip> */}
        <div
          className="sticky top-0 py-3 z-10"
          style={{ backgroundColor: "#07070D" }}
          onClick={() => router.push("/home")}
        >
          {collapsed && (
            <div
              className="icon-collapse relative"
              style={{
                left: 6,
                transform: "rotate(180deg)",
              }}
              onClick={() => {
                dispatch({
                  type: "set_collapse",
                  payload: false,
                });
              }}
            />
          )}
          {!collapsed && <div className="logo_text" />}
        </div>

        {/* User Profile link in side navigation */}
        <UserSummary className="mx-1.5 mb-4" collapsed={collapsed} />

        {menuGroup0.map((item) => (
          <Menu.Item key={item.key} icon={<div className={item.className} />}>
            {item.title}
          </Menu.Item>
        ))}

        {/* <Menu.SubMenu
                    title={t('promo', 'nav')}
                    key="promos"
                    icon={<div className="icon-promo"></div>}
                    popupOffset={[10, 0]}
                    style={{ maxWidth: 238 }}
                >
                    {promosMenus.map((item) => (
                        <Menu.Item key={item.key}>
                            <span
                                className="truncate text-xs"
                                style={{ width: 175 }}
                            >
                                {item.title}
                            </span>
                        </Menu.Item>
                    ))}
                </Menu.SubMenu> */}

        {menuGroup1.map((item) => (
          <Menu.Item key={item.key} icon={<div className={item.className} />}>
            {item.title}
          </Menu.Item>
        ))}

        <div className="line my-3" />

        {menuGroup2.map((item) => (
          <Menu.Item key={item.key} icon={<div className={item.className} />}>
            {item.title}
          </Menu.Item>
        ))}

        {/* messages */}
        {/* <Menu.Item key="/user/messages" title={t('messages', 'nav')}>
                    {collapsed && (
                        <div className="relative">
                            <div className={messagesClassName}></div>
                            {badge && badge?.info != '0' && (
                                <div className="absolute -right-1 -top-4">
                                    <span className="badge">{badge?.info}</span>
                                </div>
                            )}
                        </div>
                    )}
                    {!collapsed && (
                        <div className="flex justify-between items-center">
                            <div className={messagesClassName}></div>
                            <div className="flex-auto pl-2">
                                {t('messages', 'nav')}
                            </div>
                            {badge && badge?.info != '0' && (
                                <div>
                                    <span className="badge">{badge?.info}</span>
                                </div>
                            )}
                        </div>
                    )}
                </Menu.Item> */}

        <div className="line my-3" />

        {/* Logout */}
        {user && (
          <Menu.Item key="logout" icon={<div className="icon-logout" />}>
            {t("logout", "nav")}
          </Menu.Item>
        )}
        {/* lang */}
        <Menu.Item key="lang">
          <LangDropDown collapsed={collapsed} />
        </Menu.Item>
      </Menu>
    </div>
  );
}
