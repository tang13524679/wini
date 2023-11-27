import { t } from '@/utils/translate';

export default function Loading() {
    return (
        <div className="text-center">
            <div className="inline-block anime-loading"></div>
            <div className="text-xs clWhite">{`${t('loading')}`}</div>
        </div>
    );
}
