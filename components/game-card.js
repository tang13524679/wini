import { useGlobalState } from '@/hooks/global';
import FadeInImage from '@/components/fadein-image';
import {
    play,
    formatA,
    getGameName,
    getGameImg,
    getProviderName,
    isCollected,
} from '@/utils/common';
import { t } from '@/utils/translate';
import { userApi } from '@/requests/frontend';
import { requestApi } from '@/utils/common';
import { message } from 'antd';
import { useRouter } from 'next/router';
import { useSWRConfig } from 'swr';

export default function GameCard({ type, game }) {
    const { mutate } = useSWRConfig();
    const [{ lang, user }, dispatch] = useGlobalState();
    const router = useRouter();
    let cardClassName = 'aspect-w-1 aspect-h-1';
    switch (type) {
        case 'live':
            cardClassName = 'aspect-w-3 aspect-h-4';
            break;
        case 'slot':
            cardClassName = 'aspect-w-4 aspect-h-3';
            break;
        case 'sports':
            cardClassName = 'aspect-w-2 aspect-h-1';
            break;
    }

    return (
        <div className="relative">
            <div
                className={`${cardClassName} bgPlaceholder rounded-md overflow-hidden relative z-10`}
            >
                <div
                    className="bgMask w-6 h-6 p-1 absolute bottom-0 right-0"
                    style={{
                        zIndex: 1,
                        borderBottomRightRadius: 8,
                    }}
                    onClick={() => {
                        requestApi(
                            dispatch,
                            async () => {
                                if (!user) throw 'login';
                                if (isCollected(game)) {
                                    await userApi.unCollectGame({
                                        gameid: game.id,
                                    });
                                } else {
                                    await userApi.collectGame({
                                        gameid: game.id,
                                    });
                                }
                            },
                            async () => {
                                await mutate('/api/v1/Post/postUserGameList');
                                message.error(t('success'));
                            },
                            (msg) => {
                                dispatch({
                                    type: 'set_loading',
                                    payload: false,
                                });
                                if (msg === 'login') {
                                    // router.push('/sign-in');
                                } else {
                                    message.error(msg);
                                }
                            }
                        );
                    }}
                >
                    {isCollected(game) ? (
                        <div className="icon-star-on"/>
                    ) : (
                        <div className="icon-star"/>
                    )}
                </div>
                <FadeInImage
                    src={getGameImg(game)}
                    className="transition-all duration-500 hover:scale-110"
                    onClick={() => {
                        play(game, dispatch);
                    }}
                />
            </div>
            {/* <div className="truncate mt-2">{getGameName(lang, game)}</div>
            <div className="mt-1 flex items-center justify-between">
                <div className="tag">{getProviderName(game)}</div>
                <div className="flex">
                    <div className="icon-play mr-1"></div>
                    <div className="text-xs">
                        {game.playtimes < 1000
                            ? game.playtimes
                            : formatA(game.playtimes)}
                    </div>
                </div>
            </div> */}
        </div>
    );
}
