import { useEffect } from 'react';
import { SWRConfig } from 'swr';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '@/layouts/index';
import fetcher from '@/utils/fetcher-frontend';
import { StateProvider } from '@/hooks/global';
import store from 'store';
import { initPT } from '@/utils/pt-login';
import { useRouter } from 'next/router';
import { logEvent } from '@/utils/firebase';
import { message, Modal } from 'antd';
import { t } from '@/utils/translate';

import 'swiper/css/bundle';
import 'antd/dist/antd.min.css';
import '../styles/main.scss';
import { createTheme, ThemeProvider, Tabs, Tab } from '@mui/material';
export default function App({ Component, pageProps }) {
    const router = useRouter();
    const theme = createTheme({
        components: {
            MuiTabs: {
            styleOverrides: {
                indicator: {
                backgroundColor: '#00FF18', // 你希望的颜色
                },
            },
            },
        },
    });
    useEffect(() => {
        // default store
        const lang = store.get('lang');
        const remind = store.get('remind');
        const isShowMoney = store.get('isShowMoney');
        const searchHistory = store.get('searchHistory');
        if (!lang) store.set('lang', 'vi');
        if (!remind) store.set('remind', 0);
        if (typeof isShowMoney === 'undefined') store.set('isShowMoney', true);
        if (!searchHistory) store.set('searchHistory', []);
        // init pt games
        initPT();
        // attach gtm tracking code only on production
        // so that agents will not be overwhelmed
        // if (process.env.NEXT_PUBLIC_GTM === 'enabled') {
        //     TagManager.initialize({ gtmId: 'GTM-PPGSBHH' });
        // }
        // antd default config
        message.config({
            top: 300,
        });
        // check cookie
        if (!navigator.cookieEnabled) {
            Modal.info({
                title: t('tips'),
                content: 'please enable cookie',
                centered: true,
            });
        }

    }, []);

    useEffect(() => {
        // track route changes
        const handler = (url) =>
            logEvent('page_view', {
                page_location: url,
                page_title: document?.title,
            });

        router.events.on('routeChangeStart', handler);
        return () => router.events.off('routeChangeStart', handler);
    }, [router.events]);

    return (
        <ThemeProvider theme={theme}>
            <Head>
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/UAParser.js/0.7.20/ua-parser.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/fingerprintjs2/2.1.5/fingerprint2.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>

                {/* favicon stuff */}
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <Script
                src="https://login-am.hotspin88.com/jswrapper/hotspin88am/integration.js"
                strategy="beforeInteractive"
            />

            <SWRConfig
                value={{
                    fetcher,
                    revalidateOnFocus: false,
                }}
            >
                <StateProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </StateProvider>
            </SWRConfig>
        </ThemeProvider>
    );
}
