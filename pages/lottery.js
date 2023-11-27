import { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import styles from './lottery.module.scss';
import WinnerList from '@/components/winner-list';
import { formatMoney } from '@/utils/common';
import _ from 'lodash';
import { commonApi } from '@/requests/frontend';
import { message } from 'antd';

const PopUp = ({ money, onClose }) => {
    return (
        <>
            <div className="grid grid-cols-auto place-content-center modal-container">
                <div className="modal-holder">
                    <img width={560} src="/assets/lottery/reward-modal.png" />
                    <img
                        className="title"
                        src="/assets/lottery/reward-title.png"
                    />
                    <img
                        className="close cursor-pointer"
                        src="/assets/lottery/close.png"
                        onClick={() => {
                            onClose();
                        }}
                    />
                    <div className="content">
                        {money > 0 && (
                            <>
                                <div className="text-lg sm:text-2xl">
                                    BẠN ĐÃ NHẬN ĐƯỢC
                                </div>
                                <div className="text-2xl sm:text-4xl font-bold mt-3 sm:mt-4">
                                    {`${formatMoney(money)}đ`}
                                </div>
                            </>
                        )}
                        {money <= 0 && (
                            <div className=" text-base sm:text-2xl mt-4 sm:mt-8">
                                CHÚC BẠN MAY MẮN LẦN SAU
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="h-full w-full mask"
                    onClick={() => {
                        onClose();
                    }}
                ></div>
            </div>
        </>
    );
};

export default function LotteryPage() {
    const [start, setStart] = useState('disabled');
    const [isPopUp, setPopUp] = useState(false);
    const [info, setInfo] = useState({ num: 0, amount: 0 });
    const [raffle, setRaffle] = useState({});

    function spin(area) {
        // area 1-8
        let wheel = document.getElementById('Wheel');
        let d = 0;
        let speed = 10;
        let extra = _.random(-20, 20);

        let timer = setInterval(() => {
            d -= speed;
            let round = Math.trunc(-d / 360);

            if (round === 2) speed = 9;
            if (round === 3) speed = 8;
            if (round === 4) speed = 7;
            if (round === 5) speed = 6;
            if (round === 6) speed = 5;
            if (round === 7) speed = 4;
            if (round === 8) speed = 3;
            if (round === 9) speed = 2;
            if (round === 10) speed = 1;

            if (d < -(10 * 360 + (area - 1) * 45 + extra)) {
                // pop up
                playPrize();
                setPopUp(true);
                // check if disable
                getInfo();

                // stop
                clearInterval(timer);
            }
            wheel.style.transform = `rotate(${d}deg)`;
        }, 10);
    }

    function playRoulette() {
        const audio = new Audio('/assets/sound/roulette.mp3');
        audio.play();
    }

    function playPrize() {
        const audio = new Audio('/assets/sound/prize.mp3');
        audio.play();
    }

    function playMusic() {
        const background = document.getElementById('background');
        if (background.paused) {
            background.play();
        }
    }

    async function getInfo() {
        let res = await commonApi.getRaffleInfo();
        if (res.info) setInfo(res.info);
        if (res.info.num > 0) {
            setStart('ready');
        } else {
            setStart('disabled');
        }
    }

    function getRewardAmount() {
        let amount = info.amount.toString();
        return amount.slice(0, amount.length - 3) || 0;
    }

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <>
            <Head>
                <title>Lottery - WIN</title>
            </Head>
            <audio
                id="background"
                src="/assets/sound/background.mp3"
                style={{ opacity: 0 }}
                preload="auto"
                controls
                loop
                hidden
            />

            <div
                className={styles.container}
                onClick={() => {
                    playMusic();
                }}
            >
                {isPopUp && (
                    <PopUp
                        money={raffle.amount}
                        onClose={() => {
                            setPopUp(false);
                        }}
                    />
                )}
                <div className="top-container">
                    <div className="flex justify-center gap-4 sm:gap-8 mb-8">
                        <Link href={'/'} passHref>
                            <div className="btn">TRANG CHỦ</div>
                        </Link>
                        <Link href={'/user/task'} passHref>
                            <div className="btn">NHẬT KÝ NHIỆM VỤ</div>
                        </Link>
                        <Link href={'/sign-in'} passHref>
                            <div className="btn">ĐĂNG KÝ</div>
                        </Link>
                    </div>
                    <div className="wheel-container">
                        <div className="score flex justify-between items-center">
                            <div className="score-left">
                                <img src="/assets/lottery/score-left.png" />
                                <div className="num">{info.num}</div>
                            </div>
                            <div className="score-logo">
                                <img src="/assets/lottery/logo.png" />
                            </div>
                            <div className="score-right">
                                <img src="/assets/lottery/score-right.png" />
                                <div className="num">{getRewardAmount()}</div>
                            </div>
                        </div>
                        <div className="wheel-holder">
                            <img
                                id="Wheel"
                                className="wheel"
                                src="/assets/lottery/wheel.png"
                            />
                            <img
                                className="start"
                                src={`/assets/lottery/start-${start}.png`}
                                onClick={async () => {
                                    if (start === 'ready') {
                                        let res = await commonApi.getRaffle();
                                        if (res.info) {
                                            setStart('spinning');
                                            setRaffle(res.info);
                                            spin(res.info.top);
                                            playRoulette();
                                        } else {
                                            message.error('error');
                                        }
                                    }
                                }}
                            />
                            <img
                                className="triangle"
                                src="/assets/lottery/triangle.png"
                            />
                            <img
                                className="base"
                                src="/assets/lottery/base.png"
                            />
                            <img
                                className="float-left-1"
                                src="/assets/lottery/float-left-1.png"
                            />
                            <img
                                className="float-left-2"
                                src="/assets/lottery/float-left-2.png"
                            />
                            <img
                                className="float-left-3"
                                src="/assets/lottery/float-left-3.png"
                            />
                            <img
                                className="float-left-4"
                                src="/assets/lottery/float-left-4.png"
                            />
                            <img
                                className="float-right-1"
                                src="/assets/lottery/float-right-1.png"
                            />
                            <img
                                className="float-right-2"
                                src="/assets/lottery/float-right-2.png"
                            />
                            <img
                                className="float-right-3"
                                src="/assets/lottery/float-right-3.png"
                            />
                            <img
                                className="float-right-4"
                                src="/assets/lottery/float-right-4.png"
                            />
                            <img
                                className="pc-awards"
                                src="/assets/lottery/award-pc.png"
                            />
                            <div className="winner-list-pc">
                                <WinnerList />
                            </div>
                        </div>
                        <div className="space"></div>
                    </div>
                </div>
                <div className="bottom-container">
                    <div className="px-4 sm:px-0">
                        <img
                            className="block sm:hidden"
                            src="/assets/lottery/award-mobile.png"
                        />
                        <div className="block sm:hidden h-24"></div>
                        <div className="block sm:hidden">
                            <WinnerList />
                        </div>
                        <div className="h-28 sm:h-40"></div>
                        <div className="rules">
                            <img
                                className="flag"
                                src="/assets/lottery/flag-title.png"
                            />
                            <ul>
                                <li>
                                    <span className="index">1.</span>
                                    <span>
                                        Chương trình chỉ áp dụng cho trò chơi:
                                        Thể thao
                                    </span>
                                </li>
                                <li>
                                    <span className="index">2.</span>
                                    <span>
                                        Chỉ các cược Thắng / Thua mới được tính
                                        vào số vòng cược hợp lệ yêu cầu của
                                        chương trình khuyến mãi. Cược Hòa / Hủy,
                                        bất kỳ tỷ lệ cược đối đầu Châu Âu nào
                                        nhỏ hơn 1.75 hoặc tỷ lệ cược đối đầu
                                        Châu Á nhỏ hơn 0.75, và tỷ lệ cược đối
                                        đầu tương tự tại cùng một thời điểm trò
                                        chơi sẽ không được tính là cược hợp lệ.
                                    </span>
                                </li>
                                <li>
                                    <span className="index">3.</span>
                                    <span>
                                        Chương trình dành cho tất cả Thành Viên
                                        tại Golden-G8. Tiền thưởng cần hoàn
                                        thành 2 vòng cược trước khi rút tiền về
                                        tài khoản.
                                    </span>
                                </li>
                                <li>
                                    <span className="index">4.</span>
                                    <span>
                                        Thành Viên cần liên hệ hỗ trợ trực
                                        truyến để nhận Khuyến mãi. Tiền thưởng
                                        được cập nhật trong vòng 72 kể từ khi có
                                        kết quả cuối cùng và chính thức.
                                    </span>
                                </li>
                                <li>
                                    <span className="index">5.</span>
                                    <span>
                                        Mỗi Thành Viên chỉ được sử dụng một tài
                                        khoản để tham gia hoạt động (1 số điện
                                        thoại / 1 email / 1 địa chỉ thường trú /
                                        1 số tài khoản ngân hàng / 1 địa chỉ IP
                                        / 1 máy tính hoặc thiết bị mạng khác).
                                        Thành Viên vi phạm sẽ không được tham
                                        gia chương trình.
                                    </span>
                                </li>
                                <li>
                                    <span className="index">6.</span>
                                    <span>
                                        Bất kỳ cá nhân, tổ chức có hành vi lạm
                                        dụng khuyến mãi trục lợi. Golden-G8 có
                                        quyền thu hồi tiền thưởng và tiền thắng
                                        khi nhận Khuyến mãi.
                                    </span>
                                </li>
                                <li>
                                    <span className="index">7.</span>
                                    <span>
                                        Mọi quyền quyết định sẽ thuộc về GG8.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer">WIN1© Copyright 2022</div>
            </div>
        </>
    );
}
