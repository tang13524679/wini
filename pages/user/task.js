import { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { useGlobalState } from '@/hooks/global';
import { t } from '@/utils/translate';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { userApi } from '@/requests/frontend';
import { formatMoney } from '@/utils/common';
import { Progress } from 'antd';
import { requestApi } from '@/utils/common';

const local = {
    en: {
        progress: 'unfinished',
        get: 'get',
        done: 'finished',
        reward: 'reward',
        info: 'all the tasks renew at 23:59 GMT+7',
    },
    vi: {
        progress: 'Chưa hoàn thành',
        get: 'Nhận ngay',
        done: 'Đã nhận',
        reward: 'Phần thưởng',
        info: 'Nhiệm vụ mỗi ngày kết thúc vào lúc 23:59 GMT+7',
    },
    zh: {
        progress: '未完成',
        get: '领取',
        done: '已领取',
        reward: '奖励',
        info: '每天凌晨23:59结算，按照时区GMT+7',
    },
};

export default function TaskPage() {
    useAuth('/user/task');
    const [tab, setTab] = useState(1);
    const [list, setList] = useState([]);
    const [{ user, lang }, dispatch] = useGlobalState();
    const router = useRouter();

    const navs = [
        {
            title: t('task1', 'nav'),
        },
        {
            title: t('task2', 'nav'),
        },
        {
            title: t('task3', 'nav'),
        },
    ];

    async function getTaskList(type) {
        let res = await userApi.getTasks({ type });
        setList(res.info);
    }

    function getTitleByLang(task) {
        switch (lang) {
            case 'en':
                return task.enname;

            case 'zh':
                return task.cnname;

            default:
                return task.viname;
        }
    }

    function getStatusBtn(item) {
        let text = '';
        let classBtn = 'btnGray';

        switch (item.applyStatus) {
            case 0:
                text = local[lang]['progress'];
                break;

            case 1:
                text = local[lang]['get'];
                classBtn = 'btnYellow';
                break;

            case 2:
                text = local[lang]['done'];
                break;
        }

        return (
            <div
                className={`px-3 py-1 rounded-full ${classBtn}`}
                onClick={async () => {
                    if (item.applyStatus == 1) {
                        requestApi(
                            dispatch,
                            async () => {
                                await userApi.getTaskReward({
                                    id: item.id,
                                });
                                if (item.rewardtype == 1) {
                                    router.push('/lottery');
                                }
                            },
                            async () => {
                                getTaskList(tab);
                            }
                        );
                    }
                }}
            >
                {text}
            </div>
        );
    }

    function getStatus(item) {
        if (item.rewardtype == 1) {
            if (lang === 'en') {
                return (
                    <div className="line-clamp-1">
                        <span>reward</span>
                        <span className="clMainYellow mx-2">
                            {item.rewardamount}
                        </span>
                        <span>raffle ticket</span>
                    </div>
                );
            }
            if (lang === 'zh') {
                return (
                    <div className="line-clamp-1">
                        <span>奖励</span>
                        <span className="clMainYellow mx-2">
                            {item.rewardamount}
                        </span>
                        <span>张抽奖券</span>
                    </div>
                );
            }

            return (
                <div className="line-clamp-1">
                    <span className="clMainYellow mr-2">
                        {item.rewardamount}
                    </span>
                    <span>vé quay thưởng</span>
                </div>
            );
        }

        return (
            <div className="line-clamp-1">
                <span>{local[lang]['reward']}</span>
                <span className="clMainYellow ml-2">
                    {formatMoney(item.rewardamount)}
                </span>
            </div>
        );
    }

    useEffect(() => {
        getTaskList(1);
    }, []);

    if (!user) return <></>;

    return (
        <InnerPageLayout>
            <Head>
                <title>Task - WIN</title>
            </Head>
            <div className="task sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('task', 'nav')} />
                    <div className="grid grid-flow-col auto-cols-max gap-4 overflow-auto mt-4 navs">
                        {navs.map((item, index) => (
                            <div
                                key={index}
                                className={`nav py-1 px-4 rounded-full ${
                                    index + 1 === tab ? 'active' : ''
                                }`}
                                onClick={async () => {
                                    requestApi(
                                        dispatch,
                                        async () => {
                                            await getTaskList(index + 1);
                                        },
                                        async () => {
                                            setTab(index + 1);
                                        }
                                    );
                                }}
                            >
                                {item.title}
                            </div>
                        ))}
                    </div>
                    <div className="mt-4">{local[lang]['info']}</div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-4">
                        {list.map((item, index) => (
                            <div
                                key={index}
                                className="bgWhite6 p-3 rounded-md"
                            >
                                <div className="clWhite text-lg line-clamp-1">
                                    {getTitleByLang(item)}
                                </div>
                                <div className="mt-2">
                                    ({formatMoney(item.completedAmount)}/
                                    {formatMoney(item.taskvalue)})
                                </div>
                                <div className="flex justify-between items-center">
                                    <Progress
                                        percent={
                                            (item.completedAmount /
                                                item.taskvalue) *
                                            100
                                        }
                                        showInfo={false}
                                        strokeColor="#10E070"
                                    />
                                </div>
                                <div className="flex justify-between items-center  mt-3">
                                    {getStatus(item)}
                                    {getStatusBtn(item)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
