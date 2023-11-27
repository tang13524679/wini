import { useGlobalState } from '@/hooks/global';
import Link from 'next/link';
import { useBalance } from '@/hooks/fund';
import { formatMoney } from '@/utils/common';

export default function Balance() {
    const [{ user, isShowMoney }, dispatch] = useGlobalState();
    const balance = useBalance();
    return (
        <div className="flex items-center bgBalance rounded-full overflow-hidden text-xs pr-2">
            <div className="bgWhite6 p-1 px-2">
                <Link href="/fund/trans" passHref>
                    <div className="icon-card"></div>
                </Link>
            </div>
            <div className="px-2">
                <div>{user?.loginaccount}</div>
                <div className="flex items-center">
                    <div className="clWhite mr-1">
                        {isShowMoney
                            ? formatMoney(balance)
                            : balance?.replace(/./g, '*')}
                    </div>
                    <div>HKD</div>
                </div>
            </div>
            <div
                className={`${
                    isShowMoney ? 'icon-eye-open' : 'icon-eye-close'
                } ml-1`}
                onClick={() => {
                    dispatch({
                        type: 'set_showMoney',
                        payload: !isShowMoney,
                    });
                }}
            ></div>
        </div>
    );
}
