import { useState } from 'react';
import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { Input, Dropdown, Menu } from 'antd';
import { t } from '@/utils/translate';
import { fundApi } from '@/requests/frontend';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/hooks/global';
import { requestApi, formatMoney, convertMoney } from '@/utils/common';
import { useUserBanks, useBalance } from '@/hooks/fund';
import PageLoading from '@/components/page-loading';
import * as checker from '@/utils/checker';

export default function WithdrawPage() {
    // useAuth('/fund/trans');
    const [, dispatch] = useGlobalState();
    const [receiveBank, setReceiveBank] = useState({});
    const [amount, setAmount] = useState('');
    const [fundpassword, setFundpassword] = useState('');
    const router = useRouter();
    const userBanks = useUserBanks();
    const balance = useBalance();
    if (userBanks?.length === 0) {
        router.replace('/user/add-bank-card');
    }
    return (
        <>
            {/* <Head>
                <title>Withdraw - WIN</title>
            </Head> */}
            <div className="px-4">
                <div className="">
                    {/* <InnerPageTitle title={t('withdraw', 'nav')} /> */}
                    {/* {!userBanks || !balance ? (
                        <PageLoading />
                    ) : (
                        <>
                            <div
                                className="mx-auto mt-4 pb-24 capitalize"
                                style={{ maxWidth: 440 }}
                            >
                                <div>
                                    <Dropdown
                                        trigger="click"
                                        overlay={
                                            <Menu>
                                                {userBanks.map(
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
                                                {userBanks.length < 5 && (
                                                    <Menu.Item>
                                                        <div
                                                            className="text-center"
                                                            onClick={() => {
                                                                router.push(
                                                                    '/user/add-bank-card'
                                                                );
                                                            }}
                                                        >
                                                            + {t('addCard')}
                                                        </div>
                                                    </Menu.Item>
                                                )}
                                            </Menu>
                                        }
                                    >
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <div className="clWhite">
                                                {t('myBankCards', 'field')}
                                            </div>
                                            <div className="flex-auto clWhite30 text-right pr-3">
                                                {receiveBank.bankname ||
                                                    t('pleaseSelect')}
                                            </div>
                                            <div className="icon-dropdown"></div>
                                        </div>
                                    </Dropdown>
                                    <div className="line mt-4"></div>
                                    {receiveBank.bankname && (
                                        <div className="bgWhite2 rounded-md p-4 mt-3">
                                            <div className="my-1">
                                                {receiveBank.bankname}
                                            </div>
                                            <div className="clWhite text-base">
                                                {receiveBank.paymentaccount}
                                            </div>
                                            <div>{receiveBank.accountname}</div>
                                        </div>
                                    )}
                                    <div className="clWhite mt-4">
                                        {t('amount', 'field')}
                                    </div>
                                    <div className="mt-4">
                                        <Input
                                            value={amount}
                                            placeholder={t('amount', 'field')}
                                            className="lineInput"
                                            suffix="VND"
                                            onChange={(e) => {
                                                setAmount(
                                                    formatMoney(e.target.value)
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <Input
                                            type="password"
                                            value={fundpassword}
                                            placeholder={t(
                                                'walletPassword',
                                                'field'
                                            )}
                                            className="lineInput"
                                            onChange={(e) => {
                                                setFundpassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <span>{formatMoney(balance)}</span>
                                        <span className="ml-2">
                                            {t('available')}
                                        </span>
                                        <span
                                            className="btnText ml-4"
                                            onClick={() => {
                                                setAmount(formatMoney(balance));
                                            }}
                                        >
                                            {t('all')}
                                        </span>
                                    </div>
                                    <div
                                        className="py-2 mt-5 rounded-full btnYellow"
                                        onClick={() => {
                                            requestApi(
                                                dispatch,
                                                async () => {
                                                    const amountNum =
                                                        convertMoney(amount);
                                                    if (
                                                        !receiveBank.informationcode ||
                                                        !amountNum ||
                                                        !fundpassword
                                                    )
                                                        throw t(
                                                            'required',
                                                            'msg'
                                                        );
                                                    checker.isNumber(amountNum);
                                                    return await fundApi.taking(
                                                        {
                                                            informationcode:
                                                                receiveBank.informationcode,
                                                            orderamount:
                                                                amountNum,
                                                            fundpassword,
                                                        }
                                                    );
                                                },
                                                () => {
                                                    router.push(
                                                        '/fund/transaction-result'
                                                    );
                                                }
                                            );
                                        }}
                                    >
                                        {t('submit')}
                                    </div>
                                </div>
                            </div>
                        </>
                    )} */}
                            <div
                                className="mx-auto mt-4 pb-24 capitalize"
                                style={{ maxWidth: 440 }}
                            >
                                <div>
                                    {/* <Dropdown
                                        trigger="click"
                                        overlay={
                                            <Menu>
                                                {userBanks.map(
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
                                                {userBanks.length < 5 && (
                                                    <Menu.Item>
                                                        <div
                                                            className="text-center"
                                                            onClick={() => {
                                                                router.push(
                                                                    '/user/add-bank-card'
                                                                );
                                                            }}
                                                        >
                                                            + {t('addCard')}
                                                        </div>
                                                    </Menu.Item>
                                                )}
                                            </Menu>
                                        }
                                    >
                                        <div className="flex justify-between items-center cursor-pointer">
                                            <div className="clWhite">
                                                {t('myBankCards', 'field')}
                                            </div>
                                            <div className="flex-auto clWhite30 text-right pr-3">
                                                {receiveBank.bankname ||
                                                    t('pleaseSelect')}
                                            </div>
                                            <div className="icon-dropdown"></div>
                                        </div>
                                    </Dropdown> */}
                                    <div className="line mt-4"></div>
                                    {receiveBank.bankname && (
                                        <div className="bgWhite2 rounded-md p-4 mt-3">
                                            <div className="my-1">
                                                {receiveBank.bankname}
                                            </div>
                                            <div className="clWhite text-base">
                                                {receiveBank.paymentaccount}
                                            </div>
                                            <div>{receiveBank.accountname}</div>
                                        </div>
                                    )}
                                    <div className="clWhite mt-4">
                                        {t('amount', 'field')}
                                    </div>
                                    <div className="mt-4">
                                        <Input
                                            value={amount}
                                            placeholder={t('amount', 'field')}
                                            className="lineInput"
                                            suffix="VND"
                                            onChange={(e) => {
                                                setAmount(
                                                    formatMoney(e.target.value)
                                                );
                                            }}
                                        />
                                    </div>
                                    <div className="mt-3">
                                        <Input
                                            type="password"
                                            value={fundpassword}
                                            placeholder={t(
                                                'walletPassword',
                                                'field'
                                            )}
                                            className="lineInput"
                                            onChange={(e) => {
                                                setFundpassword(e.target.value);
                                            }}
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <span>{formatMoney(balance)}</span>
                                        <span className="ml-2">
                                            {t('available')}
                                        </span>
                                        <span
                                            className="btnText ml-4"
                                            onClick={() => {
                                                setAmount(formatMoney(balance));
                                            }}
                                        >
                                            {t('all')}
                                        </span>
                                    </div>
                                    <div
                                        className="py-2 mt-5 rounded-full btnYellow"
                                        onClick={() => {
                                            requestApi(
                                                dispatch,
                                                async () => {
                                                    const amountNum =
                                                        convertMoney(amount);
                                                    if (
                                                        !receiveBank.informationcode ||
                                                        !amountNum ||
                                                        !fundpassword
                                                    )
                                                        throw t(
                                                            'required',
                                                            'msg'
                                                        );
                                                    checker.isNumber(amountNum);
                                                    return await fundApi.taking(
                                                        {
                                                            informationcode:
                                                                receiveBank.informationcode,
                                                            orderamount:
                                                                amountNum,
                                                            fundpassword,
                                                        }
                                                    );
                                                },
                                                () => {
                                                    router.push(
                                                        '/fund/transaction-result'
                                                    );
                                                }
                                            );
                                        }}
                                    >
                                        {t('submit')}
                                    </div>
                                </div>
                            </div>
                </div>
            </div>
        </>
    );
}
