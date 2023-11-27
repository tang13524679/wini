import Head from 'next/head';
import Image from 'next/image';

import InnerPageLayout from '@/layouts/inner-page';
import InnerPageTitle from '@/components/inner-page-title';
import TutorialLinks from '@/components/tutorial-links';
import { useGlobalState } from '@/hooks/global';
import { t } from '@/utils/translate';
import SocialMedia from '@/components/social-media';

export default function Contact() {
    const _ = useGlobalState();

    return (
        <InnerPageLayout>
            <Head>
                <title>Contact Us - GG8</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage sm:pb-16 text-justify break-words">
                    <InnerPageTitle title={t('title', 'contact')} />

                    <TutorialLinks className="mt-4" />

                    <div className="my-6 clWhite text-base">
                        {t('description', 'contact')}
                    </div>
                    <SocialMedia />
                </div>
            </div>
        </InnerPageLayout>
    );
}
