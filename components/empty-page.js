import { t } from '@/utils/translate';
import FadeInImage from '@/components/fadein-image';
export default function EmptyPage() {
    return (
        <div className="grid place-content-center" style={{ height: '80vh' }}>
            <div className="w-32 h-32 relative">
                <FadeInImage src="/assets/empty.png" />
            </div>
            <div className="text-center">{t('noRecords')}</div>
        </div>
    );
}
