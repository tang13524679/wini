import { useState, useEffect } from 'react';
import store from 'store';

const rechargeSlogan = {
    vi: 'Nạp ngay, cùng thắng to',
    zh: '现在充值，一起赢',
    en: 'Recharge now and win together',
};

export default function RechargeModal({ lang }) {
    const [balance, setBalance] = useState(0);
    useEffect(() => {
        const b = store.get('balance');
        setBalance(b);
    }, []);

    return (
        <div className="clWhite p-4">
            <div className="flex justify-center">
                <img width={170} src="/assets/money_bag.png" />
            </div>
            <div className="flex justify-center my-2">
                <div className="icon-card mr-2"></div>
                <div className="font-din-medium text-lg">{balance} VND</div>
            </div>
            <div className="text-center clWhite70">{rechargeSlogan[lang]}</div>
        </div>
    );
}
