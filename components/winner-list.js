import { useState, useEffect } from 'react';
import { commonApi } from '@/requests/frontend';
import { formatMoney } from '@/utils/common';

const tabs = ['Danh sách', 'Ghi chú'];

export default function WinnerList() {
    const [tab, setTab] = useState(0);
    const [list, setList] = useState([]);

    async function getList(index = 0) {
        let res = [];
        if (index === 0) {
            res = await commonApi.getRaffleList();
        }
        if (index === 1) {
            res = await commonApi.getPlayerRaffleList();
        }
        setList(res.info);
    }

    useEffect(() => {
        getList();
    }, []);

    return (
        <div className="winner-list">
            <div className="winner">
                <span>WINNER</span>
                <img className="trophy" src="/assets/lottery/trophy.png" />
            </div>
            <div className="flex justify-around">
                {tabs.map((item, index) => (
                    <div
                        key={index}
                        className={`tab ${index === tab ? 'active' : ''}`}
                        onClick={() => {
                            setTab(index);
                            getList(index);
                        }}
                    >
                        {item}
                    </div>
                ))}
            </div>
            <ul>
                {list.map((item, index) => (
                    <li
                        key={index}
                        className="flex justify-between items-center"
                    >
                        <div className="time">{item.time}</div>
                        <div className="text-right">
                            <div>{item.name}</div>
                            <div className="money">
                                {formatMoney(item.amount)}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
