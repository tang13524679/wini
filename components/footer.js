import { useState, useEffect } from 'react';
import { t } from '@/utils/translate';
import { useGlobalState } from '@/hooks/global';
import TermsBtns from '@/components/terms/btns';
import Link from 'next/link';

export default function Footer() {
    const [{ isApp }] = useGlobalState();
    const [host, setHost] = useState('');
    useEffect(() => {
        setHost(location.host);
    }, []);
    return (
        <div className="mt-4">
            <TermsBtns />

            <div className="text-xs text-center mt-4">
                &copy; 2022 {host} | {t('copyRight')}
            </div>

            {/* {!isApp && (
                <div className="sm:hidden flex justify-center mt-6">
                    <Link href="/download" target="_blank" passHref>
                        <div className="flex items-center cursor-pointer border rounded-full py-1 px-4 bgWhite10">
                            <div className="icon-phone mr-2"></div>
                            <div>Download APP</div>
                        </div>
                    </Link>
                </div>
            )} */}
            <div className="sm:hidden h-24"></div>
        </div>
    );
}
