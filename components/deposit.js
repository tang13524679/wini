import { useState, useEffect } from 'react';
import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { useRouter } from 'next/router';
import { t } from '@/utils/translate';
import { Input, Dropdown, Menu, message, Modal } from 'antd';
import { useEThirdParty, useReceiveBanks } from '@/hooks/fund';
import { fundApi } from '@/requests/frontend';
import {
    requestApi,
    formatMoney,
    convertMoney,
    isMobile,
} from '@/utils/common';
import { useGlobalState } from '@/hooks/global';
import * as checker from '@/utils/checker';

export default function DepositPage() {
    // useAuth('/fund/trans');
    const [, dispatch] = useGlobalState();
    const router = useRouter();
    const [amount, setAmount] = useState('');
    const [activeType, setActiveType] = useState(0);
    const [receiveBank, setReceiveBank] = useState({});
    const [receiveThirdParty, setReceiveThirdParty] = useState({});
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [payLink, setPayLink] = useState('');

    const receiveBanks = useReceiveBanks();
    const thirdParties = useEThirdParty();

    const presets = [
        {
            label: '300',
            value: 300,
        },
        {
            label: '500',
            value: 500,
        },
        {
            label: '1000',
            value: 1000,
        },
        {
            label: '5000',
            value: 5000,
        },
        {
            label: '10000',
            value: 10000,
        },
        {
            label: '50000',
            value: 50000,
        },
    ];
    // thirdParties = [{
    //     channelId:1,
    // }]
    useEffect(() => {
        if (thirdParties?.length) {
            setActiveType(1);
            setReceiveThirdParty(thirdParties[0]);
        }
    }, [thirdParties]);

    function getThirdPartyIcon(type) {
        switch (type) {
            // 网银支付
            case 'ONLINEBANK':
                return 'icon-online-bank';

            // 扫码支付
            case 'BANKQR':
                return 'icon-scan';

            // zalo
            case 'ZALO':
                return 'icon-zalo-pay';

            // momo
            case 'MOMO':
                return 'icon-momo';

            // viettel
            case 'VIETTEL':
                return 'icon-viettel';

            default:
                return 'icon-union';
        }
    }
    return (
        <>
            {/* <Head>
                <title>Deposit - WIN</title>
            </Head> */}
            <Modal
                open={isModalVisible}
                footer={null}
                width={440}
                onCancel={() => {
                    Modal.confirm({
                        centered: true,
                        title: t('tips'),
                        content: t('confirmPayment', 'msg'),
                        okText: t('confirm'),
                        onOk: () => {
                            setIsModalVisible(false);
                            router.replace('/fund/transaction-result');
                        },
                    });
                }}
            >
                <div className="p-4">
                    <div className="flex justify-center items-center">
                        <div
                            className={`${getThirdPartyIcon(
                                receiveThirdParty.channelType
                            )} mr-2 flex-none`}
                        ></div>
                        <div className="clMainYellow">
                            {receiveThirdParty.name}
                        </div>
                    </div>
                    <div className="flex justify-center items-end mt-4">
                        <div className="clWhite text-2xl">
                            {formatMoney(amount)}
                        </div>
                        <div style={{border:'1px solid #374220'}} className="clWhite30 ml-2">VND</div>
                    </div>

                    <a
                        href={payLink}
                        target="_blank"
                        className="block"
                        rel="noreferrer"
                    >
                        <div className="py-2 mt-5 rounded-full btnYellow">
                            {t('toPay')}
                        </div>
                    </a>
                </div>
            </Modal>
            <div className="px-4">
                <div className="">
                    {/* <InnerPageTitle title={t('deposit', 'nav')} /> */}
                    <div
                        className="mx-auto mt-4 pb-24 capitalize"
                        style={{ maxWidth: 440 }}
                    >
                        <div className="clWhite">
                            {t('transferType', 'field')}
                        </div>
                        <div className="grid grid-cols-2 gap-3 mt-4">
                            {thirdParties?.length === 0 && (
                                <div
                                    className={`flex items-center bgWhite6 rounded-full h-12 pl-4 pr-2 cursor-pointer ${
                                        activeType === 0
                                            ? 'transfer_type_active'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        // 0 表示银行卡转账
                                        setActiveType(0);
                                        setReceiveThirdParty({});
                                    }}
                                >
                                    <div className="icon-union mr-2"></div>
                                    <div>{t('bankTransfer')}</div>
                                </div>
                            )}
                            {thirdParties?.length > 0 &&
                                thirdParties?.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center bgWhite6 rounded-full h-12 pl-4 pr-2 cursor-pointer ${
                                            receiveThirdParty.channelId ===
                                            item.channelId
                                                ? 'transfer_type_active'
                                                : ''
                                        }`}
                                        onClick={() => {
                                            // 1 表示第三方支付
                                            setActiveType(1);
                                            setReceiveThirdParty(item);
                                        }}
                                    >
                                        <div
                                            className={`${getThirdPartyIcon(
                                                item.channelType
                                            )} mr-2 flex-none`}
                                        ></div>
                                        <div className="line-clamp-2">
                                            {item.name}
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div className="clWhite mt-8">
                            {t('amount', 'field')}
                        </div>
                        <div style={{
                            backgroundColor:'#161616',
                            borderRadius:25,
                            padding:'0 25px',

                        }} className="mt-3">
                            <Input
                                value={amount}
                                placeholder={t('amount', 'field')}
                                className="lineInput"
                                suffix="VND"
                                onChange={(e) => {
                                    setAmount(formatMoney(e.target.value));
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3 mt-3">
                            {presets.map((item, index) => (
                                <div
                                    key={index}
                                    className="bgWhite6 rounded-full py-2 px-4 cursor-pointer text-center"
                                    onClick={() => {
                                        setAmount(formatMoney(item.value));
                                    }}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                        {activeType === 0 && (
                            <div>
                                <Dropdown
                                    trigger="click"
                                    overlay={
                                        <Menu>
                                            {receiveBanks?.map(
                                                (item, index) => (
                                                    <Menu.Item
                                                        key={index}
                                                        onClick={() => {
                                                            setReceiveBank(
                                                                item
                                                            );
                                                        }}
                                                    >
                                                        {item.bankname}
                                                    </Menu.Item>
                                                )
                                            )}
                                        </Menu>
                                    }
                                >
                                    <div className="flex justify-between items-center mt-12 cursor-pointer">
                                        <div className="clWhite">
                                            {`WIN1${t(
                                                'receiveAccount',
                                                'field'
                                            )}`}
                                        </div>
                                        <div className="flex-auto clWhite30 text-right pr-3">
                                            {receiveBank.bankname ||
                                                t('pleaseSelect')}
                                        </div>
                                        {/* <div className="icon-dropdown"></div> */}
                                    </div>
                                </Dropdown>
                                <div className="line my-4"></div>
                                {receiveBank.bankname && (
                                    <div className="bgWhite2 rounded-md p-4">
                                        <div className="my-1">
                                            {receiveBank.bankname}
                                        </div>
                                        <div className="clWhite text-base font-din-medium">
                                            {receiveBank.openningaccount}
                                        </div>
                                        <div>{receiveBank.accountname}</div>
                                    </div>
                                )}
                            </div>
                        )}
                        <div
                            className="py-2 mt-8 rounded-full btnYellow"
                            onClick={() => {
                                // bank transfer
                                if (activeType === 0) {
                                    try {
                                        if (!amount || !receiveBank.bankname)
                                            throw t('required', 'msg');
                                        router.push({
                                            pathname: '/fund/payment-info',
                                            query: {
                                                ...receiveBank,
                                                orderamount: amount,
                                            },
                                        });
                                    } catch (msg) {
                                        message.error(msg);
                                    }
                                } else {
                                    // third party
                                    requestApi(
                                        dispatch,
                                        async () => {
                                            const amountNum =
                                                convertMoney(amount);
                                            if (!amountNum)
                                                throw t('required', 'msg');
                                            checker.isNumber(amountNum);
                                            return fundApi.eSaving({
                                                channelId:
                                                    receiveThirdParty.channelId,
                                                orderamount: amountNum,
                                                deviceType: isMobile()
                                                    ? 'WAP'
                                                    : 'PC',
                                            });
                                        },
                                        (rst) => {
                                            setPayLink(rst.info);
                                            setIsModalVisible(true);
                                        }
                                    );
                                }
                            }}
                        >
                            {t('submit')}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
