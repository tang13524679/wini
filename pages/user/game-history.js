import { useState, useEffect } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { DatePicker, Dropdown, Menu } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { gameApi } from "@/requests/frontend";
import { renderMoneyStatus, formatMoney, formatA } from "@/utils/common";
import moment from "moment";
import PageLoading from "@/components/page-loading";
import EmptyPage from "@/components/empty-page";
import Loading from "@/components/loading";
import { GAME_TYPES } from "@/utils/const";
import { useGlobalState } from "@/hooks/global";
import LoadingNoMore from "@/components/loading-nomore";
import NavBar from "@/components/h5/components/nav-bar";

let start = 0;
let limit = 30;
const dateFormat = "YYYY-MM-DD";
const startDay = moment().subtract(1, "days");
const now = moment();
let filter = {
  startDate: startDay.format(dateFormat),
  endDate: now.format(dateFormat),
  biggametype: "",
};

export default function GameHistoryPage() {
  useAuth("/user/game-history");
  const [{ lang }] = useGlobalState();
  const [startDate, setStartDate] = useState(startDay);
  const [endDate, setEndDate] = useState(now);
  const [hasMore, setHasMore] = useState(true);
  const [gameType, setGameType] = useState({
    label: t("all"),
    value: "",
    icon: "",
  });
  const [total, setTotal] = useState({
    bet: 0,
    validbet: 0,
    win: 0,
  });
  const [list, setList] = useState([]);
  const [init, setInit] = useState(true);

  async function fetchData() {
    const rst = await gameApi.recordsAll({ start, limit, ...filter });
    const append = rst.info.record;
    setTotal({
      bet: rst.info.betMoneyAll,
      validbet: rst.info.validMoneyAll,
      win: rst.info.netMoneyAll,
    });
    setList((val) => [...val, ...append]);
    setHasMore(append.length > 0 && append.length === limit);
    setInit(false);
  }

  function loadMore() {
    start++;
    fetchData();
  }

  function reload() {
    start = 0;
    setList([]);
    fetchData();
  }

  function reset() {
    resetFilter();
    setList([]);
    setStartDate(startDay);
    setEndDate(now);
    fetchData();
    setGameType({
      label: t("all"),
      value: "",
      icon: "",
    });
  }

  function resetFilter() {
    start = 0;
    filter = {
      startDate: startDay.format(dateFormat),
      endDate: now.format(dateFormat),
      biggametype: "",
    };
  }

  useEffect(() => {
    fetchData();
    return () => {
      resetFilter();
    };
  }, []);
  return (
    <InnerPageLayout>
      <Head>
        <title>Game History - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="游戏历史" />
          {/* <InnerPageTitle title={t('gameHistory', 'nav')} /> */}
          {/* <div className="clWhite30 mt-3">{`${t('last30')}，${t(
                        'gameHistoryUpdate',
                        'msg'
                    )}`}</div> */}
          <div className="flex items-center my-3">
            <DatePicker
              placeholder={t("startDate", "field")}
              inputReadOnly={true}
              allowClear={false}
              value={startDate}
              onChange={(date, dateString) => {
                setStartDate(date);
                filter.startDate = dateString;
                reload();
              }}
            />
            <div className="mx-2">—</div>
            <DatePicker
              placeholder={t("endDate", "field")}
              inputReadOnly={true}
              allowClear={false}
              value={endDate}
              onChange={(date, dateString) => {
                setEndDate(date);
                filter.endDate = dateString;
                reload();
              }}
            />
            <div className="ml-4 btnText" onClick={() => reset()}>
              {t("default")}
            </div>
          </div>
          <div className="flex flex-wrap items-center">
            <Dropdown
              trigger="click"
              placement="topLeft"
              overlay={
                <Menu>
                  <Menu.Item
                    key="0"
                    onClick={() => {
                      setGameType({
                        label: t("all"),
                        value: "",
                        icon: "",
                      });
                      filter.biggametype = "";
                      reload();
                    }}
                  >
                    <div className="text-center">{t("all")}</div>
                  </Menu.Item>
                  {GAME_TYPES(lang).map((item) => (
                    <Menu.Item
                      key={item.value}
                      // icon={<div className={`${item.icon} w-5 h-5`}></div>}
                      onClick={() => {
                        setGameType(item);
                        filter.biggametype = item.value;
                        reload();
                      }}
                    >
                      {t(item.value)}
                    </Menu.Item>
                  ))}
                </Menu>
              }
            >
              <div className="cursor-pointer ml-2">
                <div className="flex items-center">
                  <div className={gameType.icon}></div>
                  <div className="mx-1">{gameType.label}</div>
                  <div className="icon-dropdown"></div>
                </div>
              </div>
            </Dropdown>
            <div className="mx-4 my-2">
              {t("totalBet")}: {renderMoneyStatus(total.bet)}
            </div>
            <div className="mr-4 my-2">
              {t("totalValidBet")}:{renderMoneyStatus(total.validbet)}
            </div>
            <div className="my-2">
              {t("totalWin")}: {renderMoneyStatus(total.win)}
            </div>
          </div>
          <div className="h-4"></div>
          <div className="grid grid-cols-4 sticky z-40 top-12 py-4 bgPage px-2">
            <div>{t("gameName")}</div>
            <div className="text-center">{t("betAmount")}</div>
            <div className="text-center">{t("validBet")}</div>
            <div className="text-right">{t("payout")}</div>
          </div>
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
                <div
                  key={item.orderId}
                  className="grid grid-cols-4 bdLine py-4 px-2"
                >
                  <div>
                    <div className="clWhite line-clamp-1">{item.gamename}</div>
                    <div className="clWhite70 text-xs mt-1">{item.bettime}</div>
                  </div>
                  <div className="clWhite font-din-medium self-center text-center">
                    {formatA(item.betmoney)}
                  </div>
                  <div className="clWhite font-din-medium self-center text-center">
                    {formatA(item.validbet)}
                  </div>
                  <div className="clWhite font-din-medium self-center text-right">
                    {renderMoneyStatus(item.netmoney)}
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
