import { useState, useEffect } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { DatePicker, Dropdown, Menu } from "antd";
import InfiniteScroll from "react-infinite-scroll-component";
import { fundApi } from "@/requests/frontend";
import { formatMoney, renderMoneyStatus } from "@/utils/common";
import moment from "moment";
import PageLoading from "@/components/page-loading";
import EmptyPage from "@/components/empty-page";
import Loading from "@/components/loading";
import classNames from "classnames";
import styles from "./transaction.module.scss";
import LoadingNoMore from "@/components/loading-nomore";
import NavBar from "@/components/h5/components/nav-bar";

let start = 0;
let limit = 30;
const dateFormat = "YYYY-MM-DD";
const startDay = moment().subtract(30, "days");
const now = moment();
let filter = {
  orderdate_begin: startDay.format(dateFormat),
  orderdate_end: now.format(dateFormat),
  ordertype: 1,
  orderstatus: "",
};

export default function TransactionPage() {
  useAuth("/user/transaction");
  const [startDate, setStartDate] = useState(startDay);
  const [endDate, setEndDate] = useState(now);
  const [hasMore, setHasMore] = useState(true);
  const [list, setList] = useState([]);
  const [init, setInit] = useState(true);
  const [orderType, setOrderType] = useState(1);
  const [orderStatus, setOrderStatus] = useState({
    label: t("all"),
    value: "",
  });
  const [total, setTotal] = useState({
    sumamount: 0,
  });
  const [isStatus, setStatus] = useState(true);

  async function fetchData() {
    const rst = await fundApi.allOrder({ start, limit, ...filter });
    const append = rst.info.record;
    setTotal({
      sumamount: rst.info.sumamount,
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
    setOrderType(1);
    setOrderStatus({
      label: t("all"),
      value: "",
    });
    fetchData();
  }

  function resetFilter() {
    start = 0;
    filter = {
      orderdate_begin: startDay.format(dateFormat),
      orderdate_end: now.format(dateFormat),
      ordertype: 1,
    };
  }

  const orderTypes = [
    t("deposit", "nav"),
    t("withdraw", "nav"),
    t("promo"),
    t("bonus"),
    t("reverse"),
  ];
  const orderStatus0 = [
    "",
    t("status.processing"),
    t("status.completed"),
    t("status.fail"),
    t("status.fail"),
    t("status.processing"),
  ];
  const orderStatus1 = [
    t("status.completed"),
    t("status.processing"),
    t("status.fail"),
  ];
  const Status = ({ status }) => {
    if (status == 1 || status == 5)
      return <span className="trans-ing">{orderStatus0[status]}</span>;
    if (status == 3 || status == 4)
      return <span className="trans-fail">{orderStatus0[status]}</span>;
    return <span className="trans-status">{orderStatus0[status]}</span>;
  };

  useEffect(() => {
    fetchData();
    return () => {
      resetFilter();
    };
  }, []);
  return (
    <InnerPageLayout>
      <Head>
        <title>Transaction - WIN1</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title={t("sideRecords")} />
          {/* <InnerPageTitle title={t('transaction', 'nav')} /> */}
          <div className={styles.container}>
            <div className="mt-5 flex flex-wrap lg:gap-5 nav-list">
              {orderTypes.map((item, index) => (
                <div
                  key={item}
                  className={classNames(
                    "item px-4 py-1 rounded-full transition cursor-pointer",
                    orderType === index + 1 ? "active" : ""
                  )}
                  onClick={() => {
                    const ot = index + 1;
                    setOrderType(ot);
                    setOrderStatus({
                      label: t("all"),
                      value: "",
                    });
                    if (ot === 3 || ot === 4 || ot === 5) {
                      setStatus(false);
                    } else {
                      setStatus(true);
                    }
                    // 充值 1 提现 2 优惠 3 返水 4 冲正 5
                    filter.ordertype = index + 1;
                    filter.orderstatus = "";
                    reload();
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="clWhite30 mt-3 text">{t("last30")}</div>
            <div className="flex items-center my-3">
              <DatePicker
                placeholder={t("startDate", "field")}
                inputReadOnly={true}
                allowClear={false}
                value={startDate}
                onChange={(date, dateString) => {
                  setStartDate(date);
                  filter.orderdate_begin = dateString;
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
                  filter.orderdate_end = dateString;
                  reload();
                }}
              />
              <div className="ml-4 btnText" onClick={() => reset()}>
                {t("default")}
              </div>
            </div>
            <div className="flex flex-wrap items-center">
              {isStatus && (
                <Dropdown
                  trigger="click"
                  placement="topLeft"
                  overlay={
                    <Menu>
                      <Menu.Item
                        key="0"
                        onClick={() => {
                          setOrderStatus({
                            label: t("all"),
                            value: "",
                          });
                          filter.orderstatus = "";
                          reload();
                        }}
                      >
                        <div>{t("all")}</div>
                      </Menu.Item>
                      {orderStatus1.map((item, index) => (
                        <Menu.Item
                          key={item}
                          onClick={() => {
                            setOrderStatus({
                              label: item,
                              value: index + 1,
                            });
                            // 成功 1 进行中 2  失败 3
                            filter.orderstatus = index + 1;
                            reload();
                          }}
                        >
                          {item}
                        </Menu.Item>
                      ))}
                    </Menu>
                  }
                >
                  <div className="cursor-pointer ml-2">
                    <div className="flex items-center">
                      <div className="mx-1">{orderStatus.label}</div>
                      <div className="icon-dropdown"></div>
                    </div>
                  </div>
                </Dropdown>
              )}
              <div className="mx-4 my-2">
                {t("total")}: {renderMoneyStatus(total.sumamount)}
              </div>
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
                    key={item.ordernumber}
                    className="flex justify-between items-center bdLine py-4"
                  >
                    {item.ordertype === 1 ? (
                      <div className="bgGradientYellow p-3 rounded-full mr-3">
                        <div className="icon-deposit"></div>
                      </div>
                    ) : (
                      <div className="bgGradientBlue p-3 rounded-full mr-3">
                        <div className="icon-withdraw"></div>
                      </div>
                    )}
                    <div className="flex-auto sm:basis-1/3">
                      <div className="clWhite">
                        {orderTypes[item.ordertype - 1]}
                      </div>
                      <div className="clWhite70 text-xs">{item.orderdate}</div>
                    </div>
                    <div className="sm:basis-1/3 clWhite hidden sm:block text-right font-din-medium">
                      {formatMoney(item.orderamount)}
                    </div>
                    <div className="sm:basis-1/3">
                      <div className="clWhite sm:hidden text-right font-din-medium">
                        {formatMoney(item.orderamount)}
                      </div>
                      <div className="text-xs text-right">
                        <Status status={item.orderstatus} />
                      </div>
                    </div>
                  </div>
                ))}
              </InfiniteScroll>
            )}
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}
