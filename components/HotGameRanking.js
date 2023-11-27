import useSWR from 'swr';
import { getGameImg, play } from '@/utils/common';
import { useGlobalState } from '@/hooks/global';
import { useRouter } from 'next/router';

function HotGameRanking(props) {
    const { maxLength, gridCols = 'grid grid-cols-4 sm:grid-cols-6 gap-3' } = props
    const [{}, dispatch] = useGlobalState();
    const router = useRouter();
    const { data: { info } = { info: [] } } = useSWR('/api/v1/hotGameRanking/list');
    const arr = maxLength ? info.slice(0, maxLength) : info
    return (
        <div className={gridCols}>
            {arr.map((item, index) => (
                <img
                    key={index}
                    className="cursor-pointer transition-all hover:-translate-y-2"
                    src={getGameImg(item)}
                    onClick={() => {
                        if (item.gameId) {
                            play(item, dispatch);
                        } else {
                            router.push(item.link);
                        }
                    }}
                />
            ))}
        </div>
    )
}

export default HotGameRanking