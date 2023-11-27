import { useState, useEffect } from 'react';
import { Input } from 'antd';
import { requestApi } from '@/utils/common';
import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';
import { gameApi } from '@/requests/frontend';
import GameCardSearch from '@/components/game-card-search';
import { uniq, pull } from 'lodash';
import store from 'store';
import { useDebounce } from 'ahooks';

export default function SearchPanel() {
    const [, dispatch] = useGlobalState();
    const [keyword, setKeyword] = useState('');
    const [games, setGames] = useState([]);
    const [history, setHistory] = useState([]);
    const debouncedValue = useDebounce(keyword, { wait: 500 });

    function removeHistory(item) {
        let his = [...history];
        pull(his, item);
        setHistory(his);
        store.set('searchHistory', his);
    }

    function cleanHistory() {
        setHistory([]);
        store.set('searchHistory', []);
    }

    useEffect(() => {
        setHistory(store.get('searchHistory'));
    }, []);

    useEffect(() => {
        if (debouncedValue.length > 2) {
            let searchHistory = store.get('searchHistory');
            searchHistory.unshift(debouncedValue);
            let uniqHistory = uniq(searchHistory);
            if (uniqHistory.length > 10) uniqHistory.length = 10;
            store.set('searchHistory', uniqHistory);
            setHistory(uniqHistory);
            requestApi(
                dispatch,
                () => {
                    return gameApi.searchGame({ keyword: debouncedValue });
                },
                (rst) => {
                    setGames(rst.info.rows);
                }
            );
        }
        return () => {
            setGames([]);
        };
    }, [debouncedValue, dispatch]);

    return (
        <div className="fixed top-0 w-full z-50" style={{ height: '100vh' }}>
            <div
                className="bgModal mx-auto rounded-md relative z-10 pb-4"
                style={{ maxWidth: 800 }}
            >
                <div className="p-4">
                    <Input
                        autoFocus
                        allowClear
                        placeholder={t('searchGame', 'field')}
                        className="roundInput"
                        prefix={<div className="icon-search"></div>}
                        value={keyword}
                        onChange={(e) => {
                            setKeyword(e.target.value);
                        }}
                    />
                </div>
                {keyword.length < 3 && (
                    <>
                        <div className="clWhite70 text-center py-8 px-4 mx-auto">
                            {t('atLeast3', 'msg')}
                        </div>
                        <div>
                            {history.map((item) => (
                                <div
                                    key={item}
                                    className="flex items-center justify-between hoverSearch py-2 px-4"
                                >
                                    <div className="icon-search-history"></div>
                                    <div
                                        className="flex-auto ml-3"
                                        onClick={() => {
                                            setKeyword(item);
                                        }}
                                    >
                                        {item}
                                    </div>
                                    <div
                                        className="icon-close !w-4 !h-4"
                                        onClick={() => {
                                            removeHistory(item);
                                        }}
                                    ></div>
                                </div>
                            ))}
                            {history.length > 0 && (
                                <div
                                    className="flex items-center justify-center hoverMainColor"
                                    onClick={() => {
                                        cleanHistory();
                                    }}
                                >
                                    <div className="icon-clean mr-2"></div>
                                    <div>{t('clean')}</div>
                                </div>
                            )}
                        </div>
                    </>
                )}
                {keyword.length > 2 && games.length === 0 && (
                    <div className="clWhite70 text-center py-12 px-4 mx-auto">
                        {t('noRecords')}
                    </div>
                )}
                {keyword.length > 2 && games.length > 0 && (
                    <div
                        className="grid grid-cols-3 sm:grid-cols-6 gap-x-2 gap-y-3 overflow-auto mt-3 px-4"
                        style={{ maxHeight: '80vh' }}
                    >
                        {games.map((item) => (
                            <GameCardSearch key={item.id} game={item} />
                        ))}
                    </div>
                )}
            </div>

            <div
                className="bgMask w-full h-full fixed top-0 z-0"
                onClick={() => {
                    dispatch({ type: 'set_search', payload: false });
                }}
            ></div>
        </div>
    );
}
