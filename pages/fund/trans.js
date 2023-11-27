import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { t } from '@/utils/translate';
import qs from 'query-string';
import Deposit from '@/components/deposit';
import Withdraw from '@/components/withdraw';
import MainLayout from '@/layouts/main';
import WithHeader from '@/layouts/with-header';
import Box from '@mui/material/Box';
export default function TransPage() {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState('deposit');
    const { query } = qs.parseUrl(router.asPath);

    const navs = [
        {
            key: 'deposit',
            label: t('deposit', 'nav'),
        },
        {
            key: 'withdraw',
            label: t('withdraw', 'nav'),
        },
    ];

    function onClick(nav) {
        router.push(`/fund/trans?tab=${nav.key}`);
    }

    useEffect(() => {
        if (query.tab) {
            setActiveNav(query.tab);
        }
    }, [query]);

    return (
        <MainLayout>
            <div className="sm:px-4">
                <div className="mt-2">
                    {/* <div 
                        style={{justifyContent:'center'}}
                        className="flex items-center trans-nav gap-2">
                        {navs.map((item, index) => (
                            <div
                                key={index}
                                style={{justifyContent:'center'}}
                                className={`nav flex items-center ${
                                    activeNav === item.key ? 'active' : ''
                                }`}
                                onClick={() => {
                                    onClick(item);
                                }}
                            >
                                {item.label}
                            </div>
                        ))}
                    </div> */}
                    <Box p={2}>
                        <div className="tabBar-list">
                            <div
                                className={`${activeNav == 'deposit' ? "active" : ""} tab`}
                                onClick={() => {
                                    onClick({
                                        key:'deposit'
                                    });
                                }}
                            >
                                <img style={{marginRight:'10px'}} src="/assets/fund/img_yhk2.png" />
                                银行卡转账
                            </div>
                            <div
                                className={`${activeNav == 'withdraw'? "active" : ""} tab`}
                                onClick={() => {
                                    onClick({
                                        key:'withdraw'
                                    });
                                }}
                            >
                                <img style={{marginRight:'10px'}}  src="/assets/fund/img_jm2.png" />
                                加密货币
                            </div>
                        </div>
                    </Box>

                    {activeNav === 'deposit' && <Deposit />}
                    {activeNav === 'withdraw' && <Withdraw />}
                </div>
            </div>
        </MainLayout>
    );
}
