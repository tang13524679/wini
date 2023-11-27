import Head from 'next/head';
import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import { useAuth } from '@/hooks/user';
import { t } from '@/utils/translate';

export default function BindEmailPage() {
    useAuth('/user/bind-email');
    return (
        <InnerPageLayout>
            <Head>
                <title>Bind Email - WIN</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage">
                    <InnerPageTitle title={t('bindEmail', 'nav')} />
                </div>
            </div>
        </InnerPageLayout>
    );
}
