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
                <div className="bgInnerPage pb-4 text-justify break-words">
                    <InnerPageTitle title={t('title', 'about')} />
                    <div className="aspect-w-3 aspect-h-1 max-h-[320px]">
                        <FadeInImage
                            className="rounded-2xl"
                            src={t('featuredImage', 'about')}
                            alt="featured image"
                        />
                    </div>

                    <div className="mt-4 clWhite text-base">
                        {t('description', 'about')}
                    </div>

                    <div className="mt-4 bdWhite6 rounded-2xl px-4 flex items-center space-x-14 py-3">
                        <div>
                            <div className="clWhite text-lg">
                                {t('companyProfileTitle', 'about')}
                            </div>
                            <div className="mt-3">
                                {t('companyProfileDesc', 'about')}
                            </div>
                        </div>
                        <img
                            className="hidden sm:block w-56"
                            src="/assets/about/globe.png"
                            alt="globe"
                        />
                    </div>

                    <div className="mt-4 bdWhite6 rounded-2xl px-4 py-6">
                        <div className="clWhite text-lg">
                            {t('customerService1Title', 'about')}
                        </div>
                        <div className="mt-3">
                            {t('customerService1Desc', 'about')}
                        </div>
                    </div>

                    <div className="mt-4 bdWhite6 rounded-2xl px-4 py-6">
                        <div className="clWhite text-lg">
                            {t('customerService2Title', 'about')}
                        </div>
                        <div className="mt-3">
                            {t('customerService2Desc', 'about')}
                        </div>
                    </div>

                    <div className="mt-4 bdWhite6 rounded-2xl px-4 py-6">
                        <div className="clWhite text-lg">
                            {t('safeDWTitle', 'about')}
                        </div>
                        <div className="mt-3">{t('safeDWDesc', 'about')}</div>
                        <div className="mt-4 flex flex-wrap gap-4">
                            {t('safeDWItems', 'about').map(
                                ({ icon, label }) => (
                                    <div
                                        key={icon + label}
                                        className="bgWhite6 px-4 py-3 flex items-center space-x-2 rounded-lg"
                                    >
                                        <img src={icon} alt="icon" />
                                        <span className="clWhite text-base">
                                            {label}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="mt-6 clWhite text-lg">
                        {t('outroTitle', 'about')}
                    </div>
                    <div className="mt-4">{t('outroDesc', 'about')}</div>
                    <div className="mt-4 grid grid-cols-3 md:grid-cols-6 gap-3">
                        {PROVIDERS.map((item) => (
                            <div
                                key={item.label}
                                className="bgWhite6 rounded h-16 flex items-center justify-center"
                            >
                                <img
                                    src={`/assets/provider/${item.label}.png`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </InnerPageLayout>
    );
}
