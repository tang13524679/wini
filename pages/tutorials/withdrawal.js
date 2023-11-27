import Head from 'next/head';

import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import TutorialTabsAndSteps from '@/components/tutorial-steps';
import { useGlobalState } from '@/hooks/global';
import { t } from '@/utils/translate';

export default function WithdrawalTutorial() {
    const _ = useGlobalState();
    const { title, tabs } = t('withdrawal', 'tutorials');

    return (
        <InnerPageLayout>
            <Head>
                <title>Withdrawal Tutorial - GG8</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage sm:pb-16">
                    <InnerPageTitle title={title} />
                    <TutorialTabsAndSteps tabs={tabs} />
                </div>
            </div>
        </InnerPageLayout>
    );
}
