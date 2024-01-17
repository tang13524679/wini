/* eslint-disable @next/next/no-img-element */
import { useEffect, useMemo } from "react";
import { useGlobalState } from "@/hooks/global";
import store from "store";
import { ConfigProvider, Spin, Modal } from "antd";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import viVN from "antd/lib/locale/vi_VN";
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/vi";
import { isApp } from "@/utils/common";
import dynamic from "next/dynamic";
const SearchPanel = dynamic(() => import("@/components/search-panel"));
const PageLoading = dynamic(() => import("@/components/page-loading"));
const ChatWidgetIframe = dynamic(() =>
  import("@/components/chat-widget-iframe")
);

export default function Layout({ children }) {
  const [{ lang, isLoading, isSearch, isIframe, isGaming }, dispatch] =
    useGlobalState();

  const locale = useMemo(() => {
    switch (lang) {
      case "zh":
        moment.locale("zh");
        return zhCN;

      case "en":
        moment.locale("en");
        return enUS;

      default:
        moment.locale("zh");
        return zhCN;
    }
  }, [lang]);

  useEffect(() => {
    const langStore = store.get("lang");
    if (langStore) {
      dispatch({
        type: "set_lang",
        payload: langStore,
      });
    }

    const userStore = store.get("user");
    if (userStore) {
      dispatch({
        type: "set_user",
        payload: userStore,
      });
    }

    const isShowMoney = store.get("isShowMoney");
    if (typeof isShowMoney !== "undefined") {
      dispatch({
        type: "set_showMoney",
        payload: isShowMoney,
      });
    }

    if (isApp())
      dispatch({
        type: "set_app",
        payload: true,
      });
  }, [dispatch]);

  return (
    <Spin spinning={isLoading} delay={800} indicator={<PageLoading />}>
      {/* 搜索弹窗 */}
      {isSearch && <SearchPanel />}
      {/* 游戏弹窗 */}
      <Modal
        width="100%"
        open={isIframe}
        centered={true}
        footer={null}
        onCancel={() => {
          dispatch({ type: "set_iframe", payload: false });
          dispatch({ type: "set_gaming", payload: true });
        }}
        bodyStyle={{ height: "calc(100vh - 40px)" }}
      >
        <div className="rounded-md overflow-hidden h-full relative">
          <iframe name="_iframe" width="100%" height="100%" />
        </div>
      </Modal>
      {/* 返回游戏按钮 */}
      {isGaming && (
        <div
          className="fixed btnBlue inline-block p-4 rounded-full"
          onClick={() => {
            dispatch({ type: "set_iframe", payload: true });
          }}
          style={{ bottom: 150, right: 10, zIndex: 11 }}
        >
          <div className="icon-egame w-5 h-5"> </div>
        </div>
      )}
      <ConfigProvider locale={locale}>{children}</ConfigProvider>
      <ChatWidgetIframe />
    </Spin>
  );
}
