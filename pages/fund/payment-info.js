import { useEffect } from 'react';
import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { useRouter } from 'next/router';
import { t } from '@/utils/translate';
import { formatMoney } from '@/utils/common';
import { useGlobalState } from '@/hooks/global';
import { message } from 'antd';

export default function PaymentInfoPage() {
    useAuth('/fund/payment');
    const [{ user }] = useGlobalState();
    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        // eslint-disable-next-line no-undef
        const clipboard = new ClipboardJS('.copy-btn');
        clipboard.on('success', (e) => {
            message.info(`${t('copied', 'msg')}`);
            e.clearSelection();
        });
        return () => {
            clipboard.destroy();
        };
    }, []);
    return (
        <InnerPageLayout>
            <Head>
                <title>Payment Info - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('paymentInfo', 'nav')} />
                    <div
                        className="mx-auto mt-4 pb-24"
                        style={{ maxWidth: 440 }}
                    >
                        <div className="bdWhite6 rounded-md my-4 p-4 capitalize">
                            <div>
                                <div className="flex justify-center items-center">
                                    <div className="icon-union mr-2"></div>
                                    <div className="clWhite">
                                        {t('bankTransfer')}
                                    </div>
                                </div>
                                <div className="flex justify-center items-end mt-4">
                                    <div className="clWhite text-2xl">
                                        {formatMoney(query.orderamount)}
                                    </div>
                                    <div className="clWhite30 ml-2">VND</div>
                                </div>
                            </div>
                            <div className="bgWhite2 rounded-md p-4 mt-4">
                                <div className="flex justify-between items-center">
                                    <div>{query.bankname}</div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div
                                        id="accountNo"
                                        className="clWhite text-base font-din-medium relative top-1"
                                    >
                                        {query.openningaccount}
                                    </div>
                                    <div
                                        className="btnText copy-btn"
                                        data-clipboard-target="#accountNo"
                                    >
                                        {t('copy')}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div id="accountName">
                                        {query.accountname}
                                    </div>
                                    <div
                                        className="btnText copy-btn"
                                        data-clipboard-target="#accountName"
                                    >
                                        {t('copy')}
                                    </div>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <div id="gameAccount">
                                        {user?.loginaccount}
                                    </div>
                                    <div
                                        className="btnText copy-btn"
                                        data-clipboard-target="#gameAccount"
                                    >
                                        {t('copy')}
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-4 fail">
                                {t('fillInNotes', 'msg')}
                            </div>
                            <div className="text-center mt-4">
                                {t('fillInTips', 'msg')}
                            </div>
                            <div
                                className="btnYellow py-2 px-4 rounded-full text-center mt-4"
                                onClick={() => {
                                    router.push({
                                        pathname: '/fund/fill-information',
                                        query,
                                    });
                                }}
                            >
                                {t('fillInfo', 'nav')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
