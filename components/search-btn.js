import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';

export default function SearchBtn() {
    const [, dispatch] = useGlobalState();
    return (
        <div
            className="flex rounded-full overflow-hidden clWhite30 bgWhite10 mr-2"
            onClick={() => {
                dispatch({ type: 'set_search', payload: true });
            }}
        >
            <div className="icon py-3 sm:py-2 px-4 bgWhite20 rounded-full">
                <div className="icon-search"></div>
            </div>
            <div className="hidden sm:block input py-1.5 pr-4 pl-2">
                {t('searchGame', 'field')}
            </div>
        </div>
    );
}
