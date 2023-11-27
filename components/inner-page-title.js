import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isMobile } from '@/utils/common';

export default function InnerPageTitle({ title, backRoute }) {
    const [bgClass, setBgClass] = useState('bgPage');
    const router = useRouter();
    useEffect(() => {
        if (!isMobile()) {
            setBgClass('bgInnerPageC');
        }
    }, []);
    return (
        <div className={`sticky top-0 z-40 ${bgClass}`}>
            <div className="flex py-4 capitalize">
                {backRoute != 'no' && (
                    <div
                        className="icon-return mx-4"
                        onClick={() => {
                            if (backRoute) return router.push(backRoute);
                            router.back();
                        }}
                    />
                )}
                <div className="text-base clWhite">{title}</div>
            </div>
            <div className="line"></div>
        </div>
    );
}
