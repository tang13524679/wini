import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import qs from 'query-string';
import useSWR from 'swr';
import { Modal } from 'antd';
import { useRouter } from 'next/router';
import { useGlobalState } from '@/hooks/global';
import { formatOrdinal, getAvatarIndex } from '@/utils/common';
import { ENTERPRISE_CODE } from '@/utils/const';
import { t } from '@/utils/translate';

export default function UserSummary({ className, collapsed }) {
    const [{ user }] = useGlobalState();
    const router = useRouter();

    const { data } = useSWR(
        user && [
            '/api/v1/vipController/getUserVip',
            qs.stringify({
                enterprisecode: ENTERPRISE_CODE,
            }),
        ]
    );

    // skip render if user is not logged in
    if (!user) return null;

    // get user avatar
    const avatarIndex = getAvatarIndex(user.employeecode);

    return (
        <>
            <Link href="/user/personal">
                <a
                    className={classNames(
                        'rounded-lg flex items-center space-x-2 cursor-pointer transition hover:bg-white/10',
                        collapsed ? 'py-2 justify-center' : 'p-4 bgWhite6',
                        className
                    )}
                >
                    <Image
                        className="rounded-full overflow-hidden shrink-0"
                        src={`/assets/avatar/${avatarIndex}.jpg`}
                        alt="avatar"
                        width="32"
                        height="32"
                    />
                    {!collapsed && (
                        <div className="normal-case">
                            <div className="clWhite text-sm flex items-center">
                                <span className="mr-1">
                                    {user.loginaccount}
                                </span>
                                {data && (
                                    <Image
                                        className="translate-y-px"
                                        src={`/assets/vip-levels/vip_sz_0${data.info.currentLevel}_on.svg`}
                                        alt="icon"
                                        width="24"
                                        height="24"
                                    />
                                )}
                            </div>
                            <div className="clWhite30 text-[10px] leading-[14px]">
                                {t('joinDuration').replace(
                                    /{}/g,
                                    formatOrdinal(user.registerDays)
                                )}
                            </div>
                        </div>
                    )}
                </a>
            </Link>
            {!collapsed && (
                <div className="flex justify-around pb-2">
                    <div
                        className="btn-icon-text bgGradientBlue rounded-full px-5 py-2 mr-4"
                        onClick={() => {
                            if (user.fundpassword === 'false') {
                                Modal.confirm({
                                    centered: true,
                                    title: t('tips'),
                                    content: t('needSetWalletPassword', 'msg'),
                                    onOk: () => {
                                        router.push(
                                            '/user/set-wallet-password'
                                        );
                                    },
                                });
                            } else {
                                router.push('/fund/trans?tab=withdraw');
                            }
                        }}
                    >
                        <i className="icon icon-withdraw mr-2"></i>
                        <span className="text clWhite icon-text14">
                            {t('withdraw', 'nav')}
                        </span>
                    </div>
                    <Link href="/fund/trans?tab=deposit" passHref>
                        <div className="btn-icon-text bgGradientYellow rounded-full px-5 py-2">
                            <i className="icon icon-deposit mr-2"></i>
                            <span className="text clWhite icon-text14">
                                {t('deposit', 'nav')}
                            </span>
                        </div>
                    </Link>
                </div>
            )}
        </>
    );
}
