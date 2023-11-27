import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { Menu, Modal } from 'antd';
import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';
import styles from './side-nav.module.scss';
import { cleanUserStore } from '@/utils/common';
import UserSummary from './user-summary';
import LangDropDown from "@/components/lang-dropdown";

const getMenuPropsFunc = (pathname) => (name, { myPath = '' } = {}) => {
    const iconName = pathname === myPath ? `${name}-on` : name
    return {
        label: <div>{t(name, 'nav')}</div>,
        icon: <div className={`icon-${iconName}`} />,
        className: name,
        key: myPath,
    }
}

export default function SideNav() {
    const [{ user, collapsed }, dispatch] = useGlobalState();
    const router = useRouter();
    const { pathname } = router;
    const getMenuProps = getMenuPropsFunc(pathname)
    const items = useMemo(()=> {
        const commonMenu = [
            {
                ...getMenuProps('home', {
                    myPath: '/home',
                }),
            }, {
                ...getMenuProps('games', {
                    myPath: '/games',
                }),
            }, {
                ...getMenuProps('promo', {
                    myPath: '/promo',
                }),
            }, {
                ...getMenuProps('vipClub', {
                    myPath: '/user/vip-club',
                }),
            }, {
                ...getMenuProps('agencyCooperation', {
                    myPath: 'https://gg8daily.net',
                }),
            }, {
                ...getMenuProps('task', {
                    myPath: '/user/task',
                }),
            }, {
                key: 'line1',
                className: 'line',
            }, {
                ...getMenuProps('personal', {
                    myPath: '/user/personal',
                }),
            }, {
                ...getMenuProps('bankCard', {
                    myPath: '/user/bank-card',
                }),
            }, {
                ...getMenuProps('transaction', {
                    myPath: '/user/transaction',
                }),
            }, {
                ...getMenuProps('gameHistory', {
                    myPath: '/user/game-history',
                }),
            },{
                ...getMenuProps('favorites', {
                    myPath: '/user/favorites',
                }),
            }, {
                ...getMenuProps('messages', {
                    myPath: '/user/messages',
                }),
            }, {
                key: 'line2',
                className: 'line',
            },
        ]
        if (user) {
            return commonMenu.concat([{
                ...getMenuProps('logout'),
                key: 'logout',
            }])
        }
        return commonMenu
    }, [user]);

    return (
        <div className={`${styles.container} hidden sm:block z-40 capitalize`}>
            {!collapsed && (
                <div
                    className="icon-collapse fixed"
                    style={{ zIndex: 11, left: 240, top: 17 }}
                    onClick={() => {
                        dispatch({
                            type: 'set_collapse',
                            payload: true,
                        });
                    }}
                />
            )}
            <div
                className="sticky top-0 py-3 z-10"
                style={{ backgroundColor: '#07070D' }}
                onClick={() => router.push('/home')}
            >
                {collapsed && (
                    <div
                        className="icon-collapse relative"
                        style={{
                            left: 6,
                            transform: 'rotate(180deg)',
                        }}
                        onClick={() => {
                            dispatch({
                                type: 'set_collapse',
                                payload: false,
                            });
                        }}
                    />
                )}
                {!collapsed && <div className="logo_text"/>}
            </div>
            <UserSummary className="mx-1.5 mb-4" collapsed={collapsed} />
            {/* lang */}
            <div className="lang" style={{padding: '0 10px 0 30px'}}>
                <LangDropDown collapsed={collapsed} />
            </div>
            <Menu
                items={items}
                mode="inline"
                inlineCollapsed={collapsed}
                style={{
                    backgroundColor: '#07070D',
                    padding: '0 10px 20px 10px',
                }}
                theme="dark"
                selectedKeys={[pathname]}
                onClick={({ key }) => {
                    if (key.includes('http')) {
                        window.open(key);
                        return
                    }
                    if (key.includes('/')) {
                        router.push(key);
                        return
                    }

                    if (key === 'logout') {
                        Modal.confirm({
                            centered: true,
                            title: t('tips'),
                            content: t('logoutConfirm', 'msg'),
                            okText: t('logout', 'nav'),
                            onOk: () => {
                                cleanUserStore();
                                dispatch({
                                    type: 'set_user',
                                    payload: null,
                                });
                                router.push('/home');
                            },
                        });
                    }
                }}
            >
            </Menu>
        </div>
    );
}
