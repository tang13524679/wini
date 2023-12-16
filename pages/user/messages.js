import { useState, useEffect } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import InfiniteScroll from "react-infinite-scroll-component";
import { userApi } from "@/requests/frontend";
import moment from "moment";
import PageLoading from "@/components/page-loading";
import EmptyPage from "@/components/empty-page";
import Loading from "@/components/loading";
import LoadingNoMore from "@/components/loading-nomore";
import { useGlobalState } from "@/hooks/global";
import NavBar from "@/components/h5/components/nav-bar";

let start = 0;
let limit = 30;
const dateFormat = "YYYY-MM-DD HH:mm:ss";
let startDay = moment().subtract(365, "days");
let now = moment();
let filter = {
  startDate: startDay.format(dateFormat),
  endDate: now.format(dateFormat),
};

export default function MessagesPage() {
  useAuth("/user/messages");
  const [, dispatch] = useGlobalState();
  const [hasMore, setHasMore] = useState(true);
  const [list, setList] = useState([]);
  const [init, setInit] = useState(true);

  async function fetchData() {
    const rst = await userApi.sysMessage({ start, limit, ...filter });
    const append = rst.info.rows;
    setList((val) => [...val, ...append]);
    setHasMore(append.length > 0 && append.length === limit);
    setInit(false);
  }

  function loadMore() {
    start++;
    fetchData();
  }

  useEffect(() => {
    //refresh time
    startDay = moment().subtract(365, "days");
    now = moment();
    filter = {
      startDate: startDay.format(dateFormat),
      endDate: now.format(dateFormat),
    };
    fetchData();

    return () => {
      start = 0;
    };
  }, []);

  useEffect(() => {
    list.forEach((item) => {
      if (item.readstatus == "1") {
        userApi.updateSysMessage({ messagecode: item.messagecode });
      }
    });
    dispatch({ type: "set_badge", payload: 0 });
  }, [list]);

  return (
    <InnerPageLayout>
      <Head>
        <title>Messages - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title={t("messages", "nav")} />
          {/* <InnerPageTitle title={t('messages', 'nav')} /> */}
          {init && <PageLoading />}
          {!init && list.length === 0 && <EmptyPage />}
          {!init && list.length > 0 && (
            <InfiniteScroll
              scrollableTarget="scrollableDiv"
              dataLength={list.length}
              next={loadMore}
              hasMore={hasMore}
              loader={<Loading />}
              endMessage={<LoadingNoMore />}
            >
              {list.map((item) => (
                <div key={item.ordernumber} className="mt-6">
                  <div className="clWhite30 text-xs pl-11">
                    {item.text.sendtime}
                  </div>
                  <div className="flex items-center mt-2">
                    <div className="icon-message flex-none mr-3"></div>
                    <div className="py-3 px-4 rounded-md bgWhite6 clWhite text-xs breakWord">
                      {item.text.content}
                    </div>
                  </div>
                </div>
              ))}
            </InfiniteScroll>
          )}
        </div>
      </div>
    </InnerPageLayout>
  );
}
