import { useState, useEffect } from 'react';
import { t } from '@/utils/translate';
import { Popover } from 'antd';
import { QRCodeSVG } from 'qrcode.react';
import { useGlobalState } from '@/hooks/global';
import { commonApi } from '@/requests/frontend';
import { formatMoney, isMobile } from '@/utils/common';
import Link from 'next/link';
import { SyncOutlined } from '@ant-design/icons';

const transaction = {
    zh: {
        title: '充值流水',
        btnText: '去充值',
        depositSuccess: '充值成功',
        withdrawSuccess: '取款成功',
        account: '账号',
        order: '订单号',
        applyTime: '申请时间',
        finishTime: '到账时间',
        duration: '处理时长',
    },
    vi: {
        title: 'Transaction',
        btnText: 'Bấm nạp tiền',
        depositSuccess: 'Nạp tiền thành công',
        withdrawSuccess: 'Rút tiền thành công',
        account: 'Tài khoản',
        order: 'Mã đơn',
        applyTime: 'Thời gian rút tiền',
        finishTime: 'Thời gian hoàn thành',
        duration: 'Thời gian xử lý',
    },
    en: {
        title: 'Transaction',
        btnText: 'Deposit',
        depositSuccess: 'Deposit success',
        withdrawSuccess: 'Withdraw success',
        account: 'Account',
        order: 'Order',
        applyTime: 'Apply time',
        finishTime: 'Finish time',
        duration: 'Duration',
    },
};

export default function SideTools() {
    const [{ lang }, dispatch] = useGlobalState();
    const [fold, setFold] = useState(false);
    const [qrLink, setQrLink] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [spin, setSpin] = useState(false);

    async function getRecords() {
        let res = await commonApi.getTransactionRecords();
        setTransactions(res.info);
    }

    useEffect(() => {
        setQrLink(`${location.origin}/download`);
        getRecords();

        if (isMobile()) {
            setFold(true);
        }
        // const timer = setInterval(() => {
        //     getRecords();
        // }, 10000);

        // return () => {
        //     clearInterval(timer);
        // };
    }, []);

    return (
        <div className={`side-tools ${fold ? 'slide-right' : 'slide-left'}`}>
            <div className="flex items-center">
                <div
                    className={fold ? 'icon-unfold' : 'icon-fold'}
                    onClick={() => {
                        setFold(!fold);
                    }}
                />
                <div className="icon-holder">
                    {/* live-chat */}
                    <div
                        className="flex flex-col items-center py-1"
                        onClick={() => {
                            dispatch({
                                type: 'set_chatWidgetVisible',
                                payload: true,
                            })
                        }}
                    >
                        <div className="icon-round">
                            <div className="icon-t-chat"/>
                        </div>
                        <div className="title">{t('liveChat', 'nav')}</div>
                    </div>
                    {/* records */}
                    <Popover
                        placement="left"
                        trigger="click"
                        content={
                            <div>
                                <div className="flex items-center justify-between">
                                    {/* <div className="bg-black">
                                        <div
                                            className="icon-close"
                                            onClick={() => {
                                                setOpen(false);
                                            }}
                                        ></div>
                                    </div> */}
                                    <div
                                        className="cursor-pointer"
                                        onClick={async () => {
                                            setSpin(true);
                                            await getRecords();
                                            setTimeout(() => {
                                                setSpin(false);
                                            }, 1000);
                                        }}
                                    >
                                        <SyncOutlined
                                            spin={spin}
                                            style={{ fontSize: 18 }}
                                        />
                                    </div>
                                    <div
                                        className="flex-none pl-2"
                                        style={{ width: 250 }}
                                    >
                                        {transaction[lang]['title']}
                                    </div>
                                    <Link href={'/fund/trans'} passHref>
                                        <div
                                            className="bgGradientYellow clWhite py-1 px-3 rounded-full cursor-pointer text-center"
                                            style={{ width: 110 }}
                                        >
                                            {transaction[lang]['btnText']}
                                        </div>
                                    </Link>
                                </div>
                                <div className="h-2"></div>
                                <div
                                    className="pb-4 overflow-auto"
                                    style={{ height: '50vh' }}
                                >
                                    {transactions.map((item) => (
                                        <div
                                            key={item.ordernumber}
                                            className="flex mt-2"
                                        >
                                            <div>
                                                {item.ordertype === 1 ? (
                                                    <div className="bgGradientYellow p-3 rounded-full mr-3">
                                                        <div className="icon-deposit"></div>
                                                    </div>
                                                ) : (
                                                    <div className="bgGradientBlue p-3 rounded-full mr-3">
                                                        <div className="icon-withdraw"></div>
                                                    </div>
                                                )}
                                            </div>
                                            <div
                                                className={`grow border border-px rounded-md p-2 ${
                                                    item.ordertype === 1
                                                        ? 'bg-yellow-100'
                                                        : 'bg-blue-100 '
                                                }`}
                                            >
                                                <div className="w-12 h-12 mx-auto">
                                                    <img
                                                        src={
                                                            '/assets/success.png'
                                                        }
                                                    />
                                                </div>
                                                <div className="text-center my-2">
                                                    {item.ordertype === 1
                                                        ? transaction[lang][
                                                              'depositSuccess'
                                                          ]
                                                        : transaction[lang][
                                                              'withdrawSuccess'
                                                          ]}
                                                </div>
                                                <div className="text-center text-xl font-bold my-2">
                                                    {formatMoney(
                                                        item.orderamount
                                                    )}{' '}
                                                    VND
                                                </div>
                                                <div className="text-xs">
                                                    <div className="flex justify-between my-1">
                                                        <div>
                                                            {
                                                                transaction[
                                                                    lang
                                                                ]['account']
                                                            }{' '}
                                                            :
                                                        </div>
                                                        <div>
                                                            {item.loginaccount}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between my-1">
                                                        <div>
                                                            {
                                                                transaction[
                                                                    lang
                                                                ]['order']
                                                            }{' '}
                                                            :
                                                        </div>
                                                        <div>
                                                            {item.ordernumber}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between my-1">
                                                        <div>
                                                            {
                                                                transaction[
                                                                    lang
                                                                ]['applyTime']
                                                            }{' '}
                                                            :
                                                        </div>
                                                        <div>
                                                            {item.orderdate}
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between my-1">
                                                        <div>
                                                            {
                                                                transaction[
                                                                    lang
                                                                ]['finishTime']
                                                            }{' '}
                                                            :
                                                        </div>
                                                        <div>
                                                            {
                                                                item.handleovertime
                                                            }
                                                        </div>
                                                    </div>
                                                    <div className="flex justify-between my-1">
                                                        <div>
                                                            {
                                                                transaction[
                                                                    lang
                                                                ]['duration']
                                                            }{' '}
                                                            :
                                                        </div>
                                                        <div>
                                                            {
                                                                item.processingtime
                                                            }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    >
                        <div
                            className="flex flex-col items-center py-1"
                            // onClick={() => {
                            //     setOpen(true);
                            // }}
                        >
                            <div className="icon-round">
                                <div className="icon-t-transaction"/>
                            </div>
                            <div className="title">{t('sideRecords')}</div>
                        </div>
                    </Popover>

                    {/* download app */}
                    <Popover
                        placement="left"
                        trigger="click"
                        content={
                            <div>
                                <div
                                    className="mx-auto relative"
                                    style={{
                                        width: 160,
                                        height: 160,
                                    }}
                                >
                                    <img
                                        className="absolute top-0 left-0"
                                        src="/download/qr.png"
                                    />
                                    <div
                                        className="absolute top-0 left-0 w-full h-full p-4"
                                        style={{ zIndex: 1 }}
                                    >
                                        <QRCodeSVG
                                            value={qrLink}
                                            width="100%"
                                            height="100%"
                                        />
                                    </div>
                                </div>
                                <div className="text-center mt-3 text-base">
                                    {t('scanQrDownload', 'msg')}
                                </div>
                                <div className="flex items-center justify-around mt-4">
                                    <div>
                                        <div className="text-center">
                                            <div className="inline-block bgWhite10 p-2 rounded-full">
                                                <div className="icon-ios"></div>
                                            </div>
                                        </div>
                                        <div className="text-center">IOS</div>
                                    </div>
                                    <div className="flex-none">
                                        <div className="text-center">
                                            <div className="inline-block bgWhite10 p-2 rounded-full">
                                                <div className="icon-android"></div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            Android
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        className="hidden sm:flex"
                    >
                        <div className="flex flex-col items-center py-1">
                            <div className="icon-round">
                                <div className="icon-t-app"></div>
                            </div>
                            <div className="title">{t('sideApp')}</div>
                        </div>
                    </Popover>

                    {/* contact us */}
                    <Popover
                        placement="left"
                        trigger="click"
                        content={
                            <div className="flex items-center gap-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="hidden sm:block">
                                        <img
                                            width={100}
                                            src="/assets/tools/qr_tg.png"
                                        />
                                    </div>
                                    <div>
                                        <a
                                            href="https://t.me/cskhgg8"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="icon-telegram"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <div className="hidden sm:block">
                                        <img
                                            width={100}
                                            src="/assets/tools/qr_zalo.png"
                                        />
                                    </div>
                                    <div>
                                        <a
                                            href="https://zalo.me/639202107606"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <div className="icon-zalo"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        }
                    >
                        <div className="flex flex-col items-center py-1">
                            <div className="icon-round">
                                <div className="icon-t-tg"></div>
                            </div>
                            <div className="title">{t('sideContact')}</div>
                        </div>
                    </Popover>

                    {/* phone */}
                    <Popover
                        placement="left"
                        trigger="click"
                        content={<div>+63 9202107606</div>}
                    >
                        <div className="flex flex-col items-center py-1">
                            <div className="icon-round">
                                <div className="icon-t-tel"></div>
                            </div>
                            <div className="title">{t('sidePhone')}</div>
                        </div>
                    </Popover>

                    {/* task */}
                    <Link href={'/user/task'} passHref>
                        <div className="flex flex-col items-center py-1">
                            <div className="icon-round">
                                <div className="icon-t-task"></div>
                            </div>
                            <div className="title">{t('task', 'nav')}</div>
                        </div>
                    </Link>

                    {/* lottery */}
                    <Link href={'/lottery'} passHref>
                        <div className="flex flex-col items-center py-1">
                            <div className="icon-round">
                                <div className="icon-t-lottery"></div>
                            </div>
                            <div className="title">{t('lottery', 'nav')}</div>
                        </div>
                    </Link>

                    {/* to top */}
                    <div
                        className="flex flex-col items-center py-1"
                        onClick={() => {
                            let scrollDiv =
                                document.getElementById('scrollableDiv');
                            scrollDiv.scroll(0, 0);
                        }}
                    >
                        <div className="icon-round">
                            <div className="icon-t-top"></div>
                        </div>
                        <div className="title">{t('sideTop')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
