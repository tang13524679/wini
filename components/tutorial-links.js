import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import { t } from '@/utils/translate';

const gradientBgs = [
    'bg-gradient-red',
    'bg-gradient-yellow',
    'bg-gradient-purple',
];

export default function TutorialLinks({ className }) {
    return (
        <div
            className={classNames(
                'grid grid-cols-1 lg:grid-cols-3 gap-3',
                className
            )}
        >
            {t('tutorials', 'contact').map(({ icon, title, desc, link }, i) => (
                <Link key={icon + title + desc} href={link}>
                    <a
                        className={classNames(
                            'flex items-center space-x-4 p-4 rounded-lg hover:text-white',
                            gradientBgs[i % gradientBgs.length]
                        )}
                    >
                        <Image src={icon} alt="icon" width="48" height="48" />
                        <div className="flex-1">
                            <div className="clWhite text-base">{title}</div>
                            <div className="mt-1 text-xs">{desc}</div>
                        </div>
                        <Image
                            src="/assets/contact/icon-arrow.svg"
                            alt="icon"
                            width="16"
                            height="16"
                        />
                    </a>
                </Link>
            ))}
        </div>
    );
}
