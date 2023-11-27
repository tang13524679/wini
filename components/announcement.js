import { useState, useEffect } from 'react';
import { commonApi } from '@/requests/frontend';
import { useGlobalState } from '@/hooks/global';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import useSWR from 'swr';
import qs from 'query-string';
import { ENTERPRISE_CODE } from '@/utils/const';
import { openWindowBlank, requestApi } from '@/utils/common';
import { isMobile } from '@/utils/common';

export default function Announcement() {
    const [{ isAnnouncement }, dispatch] = useGlobalState();
    const [isM, setM] = useState(false);
    const [active, setActive] = useState(null);

    const { data: announce } = useSWR([
        '/api/v1/Announce/list',
        qs.stringify({
            enterprisecode: ENTERPRISE_CODE,
        }),
    ]);

    useEffect(() => {
        if (isMobile()) {
            setM(true);
        }
    }, []);

    useEffect(() => {
        setActive(announce?.info[0]);
    }, [announce]);

    return (
        <>
            {/* PC */}
            {announce?.info.length > 0 && !isM && isAnnouncement && (
                <div className="announcement-container grid place-content-center">
                    <div className="flex justify-end">
                        <div
                            className="icon-close mb-2"
                            onClick={() => {
                                dispatch({
                                    type: 'set_announcement',
                                    payload: false,
                                });
                            }}
                        ></div>
                    </div>
                    <div
                        className="flex border-4 border-white"
                        style={{ width: 850, height: 450 }}
                    >
                        <div
                            className="flex-none border-r-4 border-white announce-back pc-side-menu overflow-auto"
                            style={{ width: 250 }}
                        >
                            {announce?.info.map((item) => (
                                <div
                                    className={`title grid place-content-center ${
                                        active?.id === item.id ? 'active' : ''
                                    }`}
                                    key={item.id}
                                    onClick={() => {
                                        setActive(item);
                                    }}
                                >
                                    <div className="line-clamp-2">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            {active && (
                                <img
                                    className="object-cover h-full w-full cursor-pointer"
                                    src={active.imgurl}
                                    onClick={async () => {
                                        requestApi(dispatch, async () => {
                                            await commonApi.viewAnnouncement({
                                                announceId: active.id,
                                            });
                                            openWindowBlank(active.link);
                                        });
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
            {/* Mobile */}
            {announce?.info.length > 0 && isM && isAnnouncement && (
                <div
                    className="announcement-container grid place-content-center"
                    onClick={() => {
                        dispatch({
                            type: 'set_announcement',
                            payload: false,
                        });
                    }}
                >
                    <div className="ann-center cursor-pointer">
                        <div className="flex justify-end">
                            <div
                                className="icon-close mb-2"
                                onClick={() => {
                                    dispatch({
                                        type: 'set_announcement',
                                        payload: false,
                                    });
                                }}
                            ></div>
                        </div>
                        <div className="ann-left">
                            <div className="icon-left"></div>
                        </div>
                        <div className="ann-right">
                            <div className="icon-right"></div>
                        </div>
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay]}
                            pagination={{ clickable: true }}
                            autoplay={false}
                            spaceBetween={10}
                            slidesPerView={1}
                            grabCursor={true}
                            centeredSlides={true}
                            loop={true}
                            navigation={{
                                nextEl: '.ann-right',
                                prevEl: '.ann-left',
                            }}
                        >
                            {announce?.info.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div
                                        onClick={async () => {
                                            requestApi(dispatch, async () => {
                                                await commonApi.viewAnnouncement(
                                                    {
                                                        announceId: item.id,
                                                    }
                                                );
                                                openWindowBlank(item.link);
                                            });
                                        }}
                                        className="border-4 border-white"
                                    >
                                        <div className="aspect-w-4 aspect-h-3">
                                            <img
                                                src={item.imgurl}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="bg-[#9D0008] clWhite p-3">
                                            <div className="line-clamp-2">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
}
