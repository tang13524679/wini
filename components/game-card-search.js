import { useGlobalState } from '@/hooks/global';
import FadeInImage from '@/components/fadein-image';
import { play, getGameName, getGameImg, getProviderName } from '@/utils/common';

export default function GameCardSearch({ game }) {
    const [{ lang }, dispatch] = useGlobalState();

    return (
        <div className="relative">
            <div
                className={`aspect-w-4 aspect-h-4 bgPlaceholder rounded-md overflow-hidden relative z-10`}
            >
                <FadeInImage
                    src={getGameImg(game)}
                    className="transition-all duration-500 hover:scale-110"
                    onClick={() => {
                        play(game, dispatch);
                    }}
                />
            </div>
            <div className="truncate mt-2">{getGameName(lang, game)}</div>
            <div className="mt-1 flex items-center justify-between">
                <div className="tag">{getProviderName(game)}</div>
            </div>
        </div>
    );
}
