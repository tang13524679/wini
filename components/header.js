// import { useState, useEffect } from 'react';
import Link from 'next/link';
import Balance from '@/components/balance';
import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';
import SearchBtn from '@/components/search-btn';
import classNames from 'classnames';
// import { useRouter } from 'next/router';
// import { Modal, Dropdown } from 'antd';
// import { getAvatarIndex } from '@/utils/common';
// import { QRCodeSVG } from 'qrcode.react';

export default function Header() {
    const [{ user, badge }] = useGlobalState();
    // const router = useRouter();
    // const avatarIndex = getAvatarIndex(user?.employeecode);
    // const [qrLink, setQrLink] = useState('');
    // useEffect(() => {
    //     setQrLink(`${location.origin}/download`);
    // }, []);

    return (
        <div className="headerShadow">
            <div className="container mx-auto">
                <div className="px-4">
                    <div className="hidden sm:flex justify-between items-center py-4 z-40 rounded-md">
                        <SearchBtn />
                        <div className="flex-auto">
                            <div className="flex justify-end items-center">
                                {/* login before */}
                                {!user && <>
                                    <Link href="/sign-in?active=login" passHref>
                                        <div className="px-5 py-2 rounded-md btnYellow">
                                            {t('login')}
                                        </div>
                                    </Link>
                                    <Link href="/sign-in?active=join" passHref>
                                        <div className="px-5 py-2 rounded-md btnYellowGhost signInBtn">
                                            {t('join')}
                                            <div className='icon-gift'/>
                                        </div>
                                    </Link>
                                </>}
                                {/* login after */}
                                {user && (
                                    <>
                                        <Balance />
                                        <Link href="/user/messages" passHref>
                                            <div className="relative cursor-pointer ml-2">
                                                <div className="icon-messages"></div>
                                                {Number(badge) > 0 && (
                                                    <div className="absolute -right-1 -top-2">
                                                        <span className="badge">
                                                            {badge}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </Link>
                                        {/* <div className="flex ml-4">
                                            <div
                                                className="btn-icon-text bgGradientBlue rounded-full px-5 py-2 mr-4"
                                                onClick={() => {
                                                    if (
                                                        user.fundpassword ===
                                                        'false'
                                                    ) {
                                                        Modal.confirm({
                                                            centered: true,
                                                            title: t('tips'),
                                                            content: t(
                                                                'needSetWalletPassword',
                                                                'msg'
                                                            ),
                                                            onOk: () => {
                                                                router.push(
                                                                    '/user/set-wallet-password'
                                                                );
                                                            },
                                                        });
                                                    } else {
                                                        router.push(
                                                            '/fund/trans'
                                                        );
                                                    }
                                                }}
                                            >
                                                <i className="icon icon-withdraw mr-2"></i>
                                                <span className="text clWhite icon-text14">
                                                    {t('withdraw', 'nav')}
                                                </span>
                                            </div>
                                            <Link href="/fund/trans" passHref>
                                                <div className="btn-icon-text bgGradientYellow rounded-full px-5 py-2">
                                                    <i className="icon icon-deposit mr-2"></i>
                                                    <span className="text clWhite icon-text14">
                                                        {t('deposit', 'nav')}
                                                    </span>
                                                </div>
                                            </Link>
                                        </div> */}
                                    </>
                                )}
                            </div>
                        </div>
                        {/* <div>
                            <Dropdown
                                placement="topRight"
                                overlay={
                                    <div
                                        className="bgModal rounded-md overflow-hidden"
                                        style={{ width: 620, height: 400 }}
                                    >
                                        <div className="relative h-full">
                                            <div className="absolute top-0">
                                                <img src="/download/qr_back.jpg" />
                                            </div>
                                            <div className="absolute top-0 right-0 pr-16 pt-16">
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
                                                        <div className="clWhite70 text-center">
                                                            IOS
                                                        </div>
                                                    </div>
                                                    <div className="flex-none">
                                                        <div className="text-center">
                                                            <div className="inline-block bgWhite10 p-2 rounded-full">
                                                                <div className="icon-android"></div>
                                                            </div>
                                                        </div>
                                                        <div className="clWhite70 text-center">
                                                            Android
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                            >
                                <div className="flex items-center cursor-pointer border rounded-full py-1 px-4 ml-4 bgWhite10">
                                    <div className="icon-phone mr-2"></div>
                                    <div>APP</div>
                                </div>
                            </Dropdown>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
