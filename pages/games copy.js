import { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';
import GameCard from '@/components/game-card';
import WithNav from '@/layouts/with-nav';
import { Dropdown } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useRouter } from 'next/router';
import { gameApi } from '@/requests/frontend';
import { PROVIDERS, GAME_TYPES } from '@/utils/const';
import Image from 'next/image';
import Loading from '@/components/loading';
import LoadingNoMore from '@/components/loading-nomore';
import { useCollectedGames } from '@/hooks/user';
import SearchBtn from '@/components/search-btn';
import qs from 'query-string';

let start = 1;
let limit = 30;
let filter = {
    biggametype: 'TY',
    category: '',
    gametype: '',
};

export default function GamesPage() {
    const [{ lang }] = useGlobalState();
    const favorites = useCollectedGames();
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const router = useRouter();
    const [activeGroup, setActiveGroup] = useState('TY');
    const [activeTypes, setActiveTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [activeType, setActiveType] = useState('all');
    const [activeProvider, setActiveProvider] = useState('');
    const [providers, setProviders] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const [list, setList] = useState([]);
    const [total, setTotal] = useState('');

    async function fetchData() {
        setLoading(true);
        const rst = await gameApi.gameList({
            pageIndex: start,
            pageSize: limit,
            ...filter,
        });
        setLoading(false);
        const append = rst.info.rows;
        const total = rst.info.results;
        setTotal(total);
        setList((val) => [...val, ...append]);
        setHasMore(append.length > 0 && append.length === limit);
    }

    function loadMore() {
        start++;
        fetchData();
    }

    function reload() {
        start = 1;
        setHasMore(true);
        setList([]);
        setTotal('');
        fetchData();
    }

    const slotTypes = [
        {
            label: t('machines'),
            value: 'MACHINES',
        },
        {
            label: t('jackpot'),
            value: 'JACKPOT',
        },
    ];
    const egameTypes = [
        {
            label: t('baccarat'),
            value: 'BAC',
        },
        {
            label: t('roulette'),
            value: 'LP',
        },
        {
            label: t('poker'),
            value: 'POKER',
        },
        {
            label: t('blackjack'),
            value: 'BLACKJACK',
        },
        {
            label: t('arcade'),
            value: 'ARCADE',
        },
        {
            label: t('other'),
            value: 'OTHER',
        },
    ];

    function getCardType() {
        let type = 'egame';
        switch (activeGroup) {
            case 'TY':
            case 'CP':
                type = 'sports';
                break;
            case 'DJ':
            case 'SX':
                type = 'live';
                break;
        }
        return type;
    }

    function getTypeList() {
        switch (activeGroup) {
            case 'TY':
            case 'CP':
                return (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-6">
                        {list.map((item, index) => (
                            <GameCard
                                key={index}
                                type={getCardType()}
                                game={item}
                            />
                        ))}
                    </div>
                );

            case 'SD':
            case 'SB':
            case 'BY':
            case 'DJ':
                return (
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-x-3 gap-y-6">
                        {list.map((item, index) => (
                            <GameCard
                                key={index}
                                type={getCardType()}
                                game={item}
                            />
                        ))}
                    </div>
                );

            default:
                return (
                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-6">
                        {list.map((item, index) => (
                            <GameCard
                                key={index}
                                type={getCardType()}
                                game={item}
                            />
                        ))}
                    </div>
                );
        }
    }

    // activeGroup onchange
    useEffect(() => {
        setActiveType('all');

        switch (activeGroup) {
            case 'DZ':
                setActiveTypes(egameTypes);
                break;
            case 'SLOT':
                setActiveTypes(slotTypes);
                break;
            default:
                setActiveTypes([]);
                break;
        }
        let p = PROVIDERS.filter((item) => item.tags.includes(activeGroup));
        setProviders(p);
    }, [activeGroup, lang]);

    // query
    useEffect(() => {
        const { query } = qs.parseUrl(router.asPath);
        if (query.group) {
            switch (query.group) {
                case 'sports':
                    filter.biggametype = 'TY';
                    setActiveGroup('TY');
                    break;
                case 'lottery':
                    filter.biggametype = 'CP';
                    setActiveGroup('CP');
                    break;
                case 'live':
                    filter.biggametype = 'SX';
                    setActiveGroup('SX');
                    break;
                case 'discjolt':
                    filter.biggametype = 'SD';
                    setActiveGroup('SD');
                    break;
                case 'sicbo':
                    filter.biggametype = 'SB';
                    setActiveGroup('SB');
                    break;
                case 'egame':
                    filter.biggametype = 'DZ';
                    setActiveGroup('DZ');
                    break;
                case 'fishing':
                    filter.biggametype = 'BY';
                    setActiveGroup('BY');
                    break;
                case 'slot':
                    filter.biggametype = 'SLOT';
                    setActiveGroup('SLOT');
                    break;
                case 'esports':
                    filter.biggametype = 'DJ';
                    setActiveGroup('DJ');
                    break;
            }
        }

        fetchData();

        return () => {
            start = 1;
            filter = {
                biggametype: 'TY',
                category: '',
                gametype: '',
            };
            setList([]);
        };
    }, []);

    // use for favorites
    useEffect(() => {
        forceUpdate();
    }, [favorites]);

    useEffect(() => {
        const myElement = document.getElementById('gameList');
        const types = GAME_TYPES().map((item) => item.value);
        // eslint-disable-next-line no-undef
        var mc = new Hammer(myElement);
        mc.on('swipe', (ev) => {
            filter.category = '';
            filter.gametype = '';
            setActiveProvider('');
            // to right
            if (ev.direction === 2) {
                const activeGroupIndex = types.indexOf(filter.biggametype);
                console.log(activeGroupIndex);
                if (activeGroupIndex < types.length - 1) {
                    const nextGroup = types[activeGroupIndex + 1];
                    filter.biggametype = nextGroup;
                    setActiveGroup(nextGroup);
                    reload();
                }
            }
            // to left
            if (ev.direction === 4) {
                const activeGroupIndex = types.indexOf(filter.biggametype);
                if (activeGroupIndex != 0) {
                    const preGroup = types[activeGroupIndex - 1];
                    filter.biggametype = preGroup;
                    setActiveGroup(preGroup);
                    reload();
                }
            }
        });
    }, []);

    return (
        <WithNav>
            <Head>
                <title>Games - WIN</title>
            </Head>
            <div className="px-4">
                <div className="sticky top-0 z-40 bgPage">
                    <div className="text-left overflow-auto">
                        <div
                            className="rounded-full inline-block pt-3 relative"
                            style={{ width: 1100 }}
                        >
                            <div className="flex">
                                <div className="sm:hidden">
                                    <SearchBtn />
                                </div>
                                {GAME_TYPES(lang).map((item, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center text-xs py-2 px-4 text-center rounded-full cursor-pointer ${
                                            activeGroup === item.value
                                                ? 'round-active2'
                                                : ''
                                        }`}
                                        onClick={() => {
                                            if (!loading) {
                                                setActiveGroup(item.value);
                                                setActiveProvider('');
                                                filter.biggametype = item.value;
                                                filter.category = '';
                                                filter.gametype = '';
                                                reload();
                                            }
                                        }}
                                    >
                                        <div
                                            className={`${item.icon} mr-1 w-5 h-5`}
                                        ></div>
                                        <div className="uppercase hoverMainColor">
                                            {item.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center bdLine mt-4 capitalize">
                        <div className="flex-auto overflow-auto">
                            <div style={{ width: 900 }}>
                                <span
                                    className={`inline-block mr-6 hoverMainColor ${
                                        activeType === 'all'
                                            ? 'border-active'
                                            : ''
                                    }`}
                                    onClick={() => {
                                        setActiveType('all');
                                        filter.category = '';
                                        reload();
                                    }}
                                >
                                    {`${t('all')} ${
                                        activeType === 'all' ? `(${total})` : ''
                                    }`}
                                </span>
                                {activeTypes.length > 0 &&
                                    activeTypes.map((item, index) => (
                                        <span
                                            key={index}
                                            className={`inline-block mr-6 hoverMainColor ${
                                                activeType === item.value
                                                    ? 'border-active'
                                                    : ''
                                            }`}
                                            onClick={() => {
                                                if (!loading) {
                                                    setActiveType(item.value);
                                                    filter.category =
                                                        item.value;
                                                    reload();
                                                }
                                            }}
                                        >
                                            {`${item.label} ${
                                                activeType === item.value
                                                    ? `(${total})`
                                                    : ''
                                            }`}
                                        </span>
                                    ))}
                            </div>
                        </div>
                        <Dropdown
                            trigger="click"
                            destroyPopupOnHide={true}
                            placement="bottomRight"
                            overlay={
                                <div className="bgModal p-4 rounded-md">
                                    <div
                                        className="grid grid-cols-2 gap-3 overflow-auto"
                                        style={{ width: 302 }}
                                    >
                                        {providers.map((item, index) => (
                                            <div
                                                key={index}
                                                className={`rounded-md cursor-pointer overflow-hidden hoverMainBg  ${
                                                    activeProvider ===
                                                    item.label
                                                        ? 'main-active-bg'
                                                        : ''
                                                }`}
                                                onClick={() => {
                                                    setActiveProvider(
                                                        item.label
                                                    );
                                                    filter.gametype =
                                                        item.value;
                                                    reload();
                                                }}
                                            >
                                                <div className="h-16 bgWhite6 relative">
                                                    <Image
                                                        src={`/assets/provider/${item.label}.png`}
                                                        alt="provider"
                                                        layout="fill"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {activeProvider && (
                                        <div className="flex justify-around mt-4">
                                            <div
                                                className="flex items-center cursor-pointer hoverMainColor"
                                                onClick={() => {
                                                    setActiveProvider('');
                                                    filter.gametype = '';
                                                    reload();
                                                }}
                                            >
                                                <div className="icon-clean mr-2"></div>
                                                <div>{t('clean')}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            }
                        >
                            <div className="flex items-center filter hoverMainColor hoverMainBg rounded-full py-1 px-3 relative bottom-2">
                                <div className="icon-filter mr-1"></div>
                                <div>{activeProvider || t('filter')}</div>
                            </div>
                        </Dropdown>
                    </div>
                </div>
                <div className="h-4"></div>
                <InfiniteScroll
                    scrollableTarget="scrollableDiv"
                    dataLength={list.length}
                    next={loadMore}
                    hasMore={hasMore}
                    loader={<Loading />}
                    endMessage={<LoadingNoMore />}
                >
                    <div id="gameList" style={{ minHeight: '80vh' }}>
                        {getTypeList()}
                    </div>
                </InfiniteScroll>
            </div>
        </WithNav>
    );
}
