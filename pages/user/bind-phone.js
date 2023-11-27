import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { t } from '@/utils/translate';
import PhoneCode from '@/components/phone-code';

export default function BindPhonePage() {
    useAuth('/user/bind-phone');
    const phonCodeRef = {};
    return (
        <InnerPageLayout>
            <Head>
                <title>Bind Phone - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('bindPhone', 'nav')} />
                    <div className="mx-auto py-10" style={{ maxWidth: 440 }}>
                        <PhoneCode onRef={phonCodeRef} />
                        <div
                            className="py-2 mt-5 rounded-full btnYellow"
                            onClick={async () => {}}
                        >
                            {t('confirm')}
                        </div>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
