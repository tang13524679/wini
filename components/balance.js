import { useGlobalState } from '@/hooks/global';
import { useBalance } from '@/hooks/fund';
import { useRouter } from 'next/router';
import { formatMoney } from '@/utils/common';
import { isMobile } from '@/utils/common';

export default function Balance() {
    const [{ user, isShowMoney }] = useGlobalState();
    const balance = useBalance();
    const router = useRouter();

    return (
        <div
            className="balance flex items-center px-2 py-1"
            onClick={() => {
                if (isMobile()) {
                    router.push('/me');
                }
            }}
        >
            <div>{user?.loginaccount}</div>
            <div className="mx-1">
                <div className="icon-balance"></div>
            </div>
            <div>
                {isShowMoney
                    ? formatMoney(balance)
                    : balance?.replace(/./g, '*')}
            </div>
        </div>
    );
}
