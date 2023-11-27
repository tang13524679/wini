import { useGlobalState } from '@/hooks/global';
import FadeInImage from '@/components/fadein-image';
import { play, getGameName, getGameImg } from '@/utils/common';

export default function GameCardSmall({ game }) {
    const [{ lang }, dispatch] = useGlobalState();

    return (
        <div>
            <div className="aspect-w-1 aspect-h-1 w-16 h-16 sm:w-36 sm:h-36 bgPlaceholder rounded-md overflow-hidden relative">
                <FadeInImage
                    src={getGameImg(game)}
                    className="transition-all duration-500 hover:scale-110"
                    onClick={() => {
                        play(game, dispatch);
                        dispatch({ type: 'set_search', payload: false });
                    }}
                />
            </div>
            <div className="w-16 sm:w-36 truncate text-xs text-center sm:text-sm mt-1">
                {getGameName(lang, game)}
            </div>
        </div>
    );
}
