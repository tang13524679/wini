import Head from 'next/head';

import InnerPageTitle from '@/components/inner-page-title';
import FadeInImage from '@/components/fadein-image';
import InnerPageLayout from '@/layouts/inner-page';
import { useGlobalState } from '@/hooks/global';
import { t } from '@/utils/translate';
import { PROVIDERS } from '@/utils/const';

export default function About() {
    const _ = useGlobalState();

    return (
        <InnerPageLayout>
            <Head>
                <title>About Us - GG8</title>
            </Head>
            <div className="sm:px-4">
                <div className="bgInnerPage pb-4 text-justify breakWord">
                    <InnerPageTitle title={t('title', 'about')} />
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                        <iframe
                            src="https://player.vimeo.com/video/729113641?h=5a283348db"
                            width="640"
                            height="360"
                            frameborder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="pt-4">
                        <p className="text-base clWhite my-3">
                            {t('title1', 'about')}
                        </p>
                        <p className="my-3">{t('section1', 'about')}</p>
                        <p className="my-3">{t('section2', 'about')}</p>
                        <p className="my-3">{t('section3', 'about')}</p>
                        <div
                            className="flex items-center rounded-md"
                            style={{ background: 'rgba(80, 100, 255, 0.1)' }}
                        >
                            <div className="flex-none hidden sm:block">
                                <img
                                    width={112}
                                    height={112}
                                    src="/assets/24hours.png"
                                    alt="24"
                                />
                            </div>
                            <div className="flex-auto clWhite p-4 breakWord">
                                {t('section4', 'about')}
                            </div>
                        </div>
                        <p className="my-3">{t('section5', 'about')}</p>
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
