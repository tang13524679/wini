import { useState, useEffect, useReducer } from 'react';
import Head from 'next/head';
import MainLayout from '@/layouts/main';
import Banner from '@/components/banner';
import GameCardSmall from '@/components/game-card-small';
// import GameCard from '@/components/game-card';
import Marquee from 'react-fast-marquee';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Footer from '@/components/footer';
import Link from 'next/link';
import store from 'store';
import qs from 'query-string';
import { t } from '@/utils/translate';
import { BRAND_CODE, ENTERPRISE_CODE } from '@/utils/const';
import useSWR from 'swr';
import { useGlobalState } from '@/hooks/global';
import { isMobile, play } from '@/utils/common';
import { useRouter } from 'next/router';
import { useCollectedGames } from '@/hooks/user';
import providerPreload from '@/components/gamesResourcePreload'
// import HotGameRanking from '@/components/HotGameRanking'
// import SocialMedia from '@/components/social-media';
// import Announcement from '@/components/announcement';
// import SideTools from '@/components/side-tools';
import { commonApi, userApi } from '@/requests/frontend';
import Box from '@mui/material/Box';
import GameList from '@/components/GameList';
import HorizontalScrollTabs from '@/components/HorizontalScrollTabs';
import Slider from '@/components/Slider';
import DataTablePaihH from '@/components/DataTablePaihH';
import Button from '@mui/material/Button';

import { display } from '@mui/system';

const hotSports = [
    {
        name: 'sbo',
        gameId: '4568',
        gametype: 'SBOGame',
        gamecode: 'SportsBook',
        // img: 'https://pic.aipayapi.com/games/TY/SBO.png',
    },
    {
        name: 'cmd',
        gameId: '4535',
        gametype: 'CMDGame',
        gamecode: 'CMDGame',
        // img: 'https://pic.aipayapi.com/games/TY/CMD.png',
    },
    {
        name: 'saba',
        gameId: '4548',
        gametype: 'SABAGame',
        gamecode: 'SABAGame',
        // img: 'https://pic.aipayapi.com/games/TY/SABA.png',
    },
    {
        name: 'fb',
        gameId: '4710',
        gametype: 'TCG_FBGame',
        gamecode: 'FB0001',
        // img: 'https://pic.aipayapi.com/games/TY/FB.png',
    },
];
const hotGames = [
    {
        name: 'live',
        link: '/games?group=SX',
    },
    {
        name: 'lottery',
        link: '/games?group=CP',
    },
    {
        name: 'slots',
        link: '/games?group=SLOT',
    },
    {
        name: 'fish',
        link: '/games?group=BY',
    },
    {
        name: 'egame',
        link: '/games?group=DZ',
    },
    {
        name: 'sd',
        link: '/games?group=SD',
    },
    {
        name: 'esports',
        link: '/games?group=DJ',
    },
];

const hotLive = [
    {
        name: 'sexy',
        gameId: '4539',
        gametype: 'AWC_SEXYBCRTGame',
        gamecode: 'AWC_SEXYBCRTGame',
    },
    {
        name: 'wm',
        gameId: '4668',
        gametype: 'WMGame',
        gamecode: 'WMGame',
    },
    {
        name: 'ag',
        gameId: '4649',
        gametype: 'TCG_AGGame',
        gamecode: 'A00070',
    },
    {
        name: 'dg',
        gameId: '4650',
        gametype: 'TCG_DGGame',
        gamecode: 'DG0013',
    },
];

const advantages = [
    {
        id: '01',
        icon: '/assets/info/adv1.png',
        title_vi: 'Giao dịch nhanh chóng',
        title_en: 'transaction transfer',
        title_zh: '交易转账',
        desc_vi:
            'Giao dich gửi tiền được xử lý ngay lập tức kể từ khi nhận được khoản chuyển.Thời gian rút tiền trong vòng 2 phút,tối đa 10 phút.',
        desc_en:
            'The top-up transfer will increase the points immediately after receiving the transfer. The withdrawal time is 2 minutes, and the longest is 10 minutes.',
        desc_zh: '充值转账收到转账后立即上分，提款时间在2分钟，最长是10分钟。',
    },
    {
        id: '02',
        icon: '/assets/info/adv2.png',
        title_vi: 'Thương Hiệu Uy Tín',
        title_en: 'Prestige Brand',
        title_zh: '品牌信任',
        desc_vi: 'Thương hiệu uy tín hàng đầu trên thị trường',
        desc_en: 'Top reputable brand in the market',
        desc_zh: '市场上最知名的品牌',
    },
    {
        id: '03',
        icon: '/assets/info/adv3.png',
        title_vi: 'An Ninh Bảo Mật',
        title_en: 'Security Security',
        title_zh: '安全中心',
        desc_vi:
            'Phương thức thanh toán đa dạng , đảm bảo an ninh và bảo mật thông tin',
        desc_en:
            'Diverse payment methods, ensuring security and confidentiality of information',
        desc_zh: '选择更多支付方式，信息安全保证安全',
    },
    {
        id: '04',
        icon: '/assets/info/adv4.png',
        title_vi: 'Đa Dạng Sản Phẩm',
        title_en: 'game diversification',
        title_zh: '游戏多样化',
        desc_vi:
            'Trò chơi , Sòng bài , Thể thao , Bắn cá , E-Sports , Xổ số. Nhiều sản phẩm đa dạng có thể lựa chọn',
        desc_en:
            'Games, Live, Sports, Fishing, E-Sports, Lottery. and provide more products to choose from',
        desc_zh:
            '游戏，真人，体育，捕鱼，电子竞技，彩票。 和提供更多产品可选择',
    },
];

const downloadSlogan = {
    vi: 'Trải nghiệm ứng dụng GG8',
    zh: 'WIN1应用体验',
    en: 'Try WIN1app for better experience',
};

const rankT = {
    en: {
        weeklyRankTitle: 'Weekly Rank',
        rank: 'rank',
        memberAccount: 'player',
        betAmount: 'bet amount',
        winAmount: 'win amount',
        restTime: 'the rank data will be updated at 23:59:59 on sunday',
        joinGame: 'join game',
        checkLastWeek: 'check last week',
    },
    zh: {
        weeklyRankTitle: '周排行榜',
        rank: '名次',
        memberAccount: '会员账号',
        betAmount: '押注金额',
        winAmount: '中奖金额',
        restTime: '注：本周排行榜统计每周日凌晨0点截止',
        joinGame: '加入比赛',
        checkLastWeek: '查看上周',
    },
    vi: {
        weeklyRankTitle: 'BXH tuần',
        rank: 'Tên',
        memberAccount: 'Tài khoản ID',
        betAmount: 'Tiền cược',
        winAmount: 'Tiền Thắng',
        restTime:
            'Thống kê bảng xếp hạng của tuần này kết thúc lúc 23:59:59 Chủ nhật hàng tuần',
        joinGame: 'Tham gia đua top',
        checkLastWeek: 'Tuần trước',
    },
};
export default function HomePage() {
    const favorites = useCollectedGames();
    const router = useRouter();
    const [{ user, lang, isApp }, dispatch] = useGlobalState();
    const [slidesPerView, setSlidesPerView] = useState(1);
    const [slidesPerView1, setSlidesPerView1] = useState(1);
    const [, forceUpdate] = useReducer((x) => x + 1, 0);
    const [isDownload, setDownload] = useState(true);
    const [weeklyRank, setWeeklyRank] = useState({});
    const [isShowRegist, setShowRegist] = useState(true);
    const [isAuthenticated,setIsAuthenticated] = useState(true);
    const [games,setGames]=useState([
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/HAB.png' },
    ])
    const [sliderImages,setSliderImages]=useState([
        { id: 1, name: 'Game 1',slideWidth: '80%', imagePath: '/assets/home/1-2.png' },
        { id: 2, name: 'Game 2',slideWidth: '80%', imagePath: '/assets/home/1-2.png' },
        { id: 3, name: 'Game 3',slideWidth: '80%', imagePath: '/assets/home/1-2.png' },
        { id: 4, name: 'Game 4',slideWidth: '80%', imagePath: '/assets/home/1-2.png' },
        { id: 5, name: 'Game 5',slideWidth: '80%', imagePath: '/assets/home/1-2.png' },
    ])
    const [sliderImage1,setSliderImage1]=useState([
        { id: 1, name: 'Game 1', imagePath: '/assets/home/1-2.png' },
        { id: 2, name: 'Game 2', imagePath: '/assets/home/1-2.png' },
        { id: 3, name: 'Game 3', imagePath: '/assets/home/1-2.png' },
        { id: 4, name: 'Game 4', imagePath: '/assets/home/1-2.png' },
        { id: 5, name: 'Game 5', imagePath: '/assets/home/1-2.png' },
    ])
    const [columns,setColumns]=useState([
        { header: '游戏', field: 'name' },
        { header: '会员', field: 'calories'},
        { header: '奖励收益', field: 'fat',},
    ])
    const [columnsData,setColumnsData]=useState([
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
        { name: 'Frozen yoghurt', calories: 'jdkajdklasjdlkas', fat: 'p6.0' },
    ])
    const [hezuo,hezuoData]=useState([
        { id: 1, name: 'Game 1', imagePath: '/assets/home/c.png' },
        { id: 2, name: 'Game 2', imagePath: '/assets/home/c.png' },
        { id: 3, name: 'Game 3', imagePath: '/assets/home/c.png' },
        { id: 4, name: 'Game 4', imagePath: '/assets/home/c.png' },
        { id: 5, name: 'Game 5', imagePath: '/assets/home/c.png' },
    ])
    
    const { data: notice } = useSWR([
        '/api/v1/Notic/Notic',
        qs.stringify({
            brandcode: BRAND_CODE,
            enterprisecode: ENTERPRISE_CODE,
        }),
    ]);
    // const { data: hotMatches } = useSWR(
    //     '/api/v1/gameItemGameTypeEnterprise/popularGames'
    // );
    const { data: recentGames } = useSWR(
        user && '/api/v1/Game/recentGamesList'
    );
    const { data: isRedEnvelope } = useSWR(
        '/api/v1/ActivityNationalDay/promotionStatus'
    );
    // const { data: recentWin } = useSWR('/api/v1/hotGameRanking/recentWin');
    useEffect(() => {
        if (!isMobile()) {
            setSlidesPerView(4);
            setSlidesPerView1(4);
        }
        async function getData() {
            let res = await commonApi.getWeeklyRank();
            if (user) {
                let count = await userApi.messageCount();
                dispatch({ type: 'set_badge', payload: count.info });
            }
            setWeeklyRank(res);
        }
        getData();

        // preloadGamePageResource
        providerPreload()
    }, []);
    useEffect(() => {
        forceUpdate();
    }, [favorites]);
    useEffect(() => {
        if (router.query.agentCode) {
            store.set('sourceQuery', router.query);
        }
    });
    const openGameWindow = (gameId) => {
        // 这里可以实现打开游戏窗口的逻辑
        console.log(`Open Game Window for Game ${gameId}`);
    };
    const handleImageClick = (gameId) => {
        // 这里可以实现打开游戏窗口的逻辑
        console.log(`Open Game Window for Game ${gameId}`);
    };
    const addMainScreen = () => {
        if ('beforeinstallprompt' in window) {
        // Trigger the install prompt
        window.beforeinstallprompt.prompt();
        }
    };
    
    return (
        <MainLayout>
            {/* <title>Home - WIN</title>
            <Head>
                <title>Home - WIN</title>
            </Head> */}
            {isShowRegist&&(
            <div 
                style={{
                    display:'flex',
                    // height:400,
                    alignItems:'center',
                    position:'relative',
                    justifyContent:'center'}}>
                {/* <div>立即注册</div> */}
                <img height={400} src="/assets/home/bj.png" />
                <div style={{
                    position:'absolute',
                    width: '100%',
                    height:40,
                    bottom:20,
                    display:'flex',
                    padding:20,
                    alignItems:'center',
                    justifyContent:'center'
                }}>
                    <div style={{
                        height:38,
                        flex:1,
                        display:'flex',
                        justifyContent:'center',
                        alignItems:'center',
                        borderRadius:20,
                        color:'#fff',
                        border: '1px solid #A284E4',
                        background: 'linear-gradient(91deg, #6E6AF5 20.09%, #7F3CE3 61%',
                        backgroundSize: 'cover',
                    }}>
                        立即注册
                    </div>
                </div>
            </div>)}
            <HorizontalScrollTabs labels={['热门', '游戏机', '赌场','热门1', '游戏机1', '赌场1']}>
                <GameList  
                games={games} 
                isAuthenticated={isAuthenticated} 
                openGameWindow={openGameWindow} />
                <GameList  
                games={games} 
                isAuthenticated={isAuthenticated} 
                openGameWindow={openGameWindow} />
                <GameList  
                games={games} 
                isAuthenticated={isAuthenticated} 
                openGameWindow={openGameWindow} />
                <GameList  
                games={games} 
                isAuthenticated={isAuthenticated} 
                openGameWindow={openGameWindow} />
                <GameList  
                games={games} 
                isAuthenticated={isAuthenticated} 
                openGameWindow={openGameWindow} />
            </HorizontalScrollTabs>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div>
                    赚钱与优惠
                </div>
                <div>
                    更多
                </div>
            </Box>
            <Slider images={sliderImages} onImageClick={handleImageClick} />
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div>
                    最近的重大胜利
                </div>
            </Box>
            <Slider slidesPerView={3} images={sliderImage1} onImageClick={handleImageClick} />
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div>
                    最新投注和奖励
                </div>
            </Box>
            <Slider slidesPerView={3} images={sliderImage1} onImageClick={handleImageClick} />
            <HorizontalScrollTabs labels={['游戏赢钱排行榜', '获得奖励排行榜',]}>
                <DataTablePaihH data={columnsData} columns={columns} />
                <DataTablePaihH data={columnsData} columns={columns} />
            </HorizontalScrollTabs>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'2px',height:'20px',backgroundColor:'#47B728',marginRight:'10px'}}></div>
                    <div style={{fontSize:'1.5rem'}}>合作伙伴</div>
                </div>
            </Box>
            <Box p={2} style={
                {display:'flex',
                flexWrap: 'wrap',
                gap: '10px',
                }}>
                <div style={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        style={{height:'4rem'}}
                        srcSet={`${'/assets/home/c.png'}`}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
                <div style={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        srcSet={`${'/assets/home/c.png'}`}
                        style={{height:'4rem'}}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
                <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                     width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        srcSet={`${'/assets/home/c.png'}`}
                        style={{height:'4rem'}}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
                <div style={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        srcSet={`${'/assets/home/c.png'}`}
                        style={{height:'4rem'}}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
            </Box>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'2px',height:'20px',backgroundColor:'#47B728',marginRight:'10px'}}></div>
                    <div style={{fontSize:'1.5rem'}}>游戏许可证</div>
                </div>
                {/* <div style={{fontSize:'1.5rem'}}>
                    责任博彩
                </div> */}
            </Box>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',}}>
                {/* <div style={{width:'12rem',height:'5rem', display:'flex'}}>
                    <img style={{width:'5rem'}} src={`${'/assets/home/xukezheng1.png'}?&fit=crop&auto=format`}></img>
                    <img src={`${'/assets/home/xukezheng2.png'}?&fit=crop&auto=format`}></img>
                </div>
                <div style={{fontSize:'2rem'}}>
                    WIN品牌，由克拉索政府所发放牌照并由库拉索博彩委员会监管（拍照号事：N.V#1168/JAZ）
                </div> */}
                <img style={{height:'5rem'}} src={`${'/assets/home/xukezheng1.png'}?&fit=crop&auto=format`}></img>
                <img style={{height:'5rem',marginLeft:'1rem',marginRight:'1rem'}} src={`${'/assets/home/xukezheng1.png'}?&fit=crop&auto=format`}></img>
                <div style={{fontSize:'1.5rem'}}>
                    WIN品牌，由克拉索政府所
                    发放牌照并由库拉索博彩委
                    员会监管（拍照号事：N.V
                    #1168/JAZ）
                </div>
            </Box>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'2px',height:'20px',backgroundColor:'#47B728',marginRight:'10px'}}></div>
                    <div style={{fontSize:'1.5rem'}}>牌照</div>
                </div>
            </Box>
            <Box p={2} style={
                {display:'flex',
                flexWrap: 'wrap',
                gap: '10px',
                }}>
                <div style={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        srcSet={`${'/assets/home/c.png'}`}
                        style={{height:'4rem'}}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
                <div style={{ 
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width: 'calc(50% - 5px)', height: '80px', background: '#2B2C30',padding:'20px' }}>
                    <img
                        srcSet={`${'/assets/home/c.png'}`}
                        style={{height:'4rem'}}
                        src={`${'/assets/home/c.png'}?&fit=crop&auto=format`}
                        loading="lazy"
                    />
                </div>
            </Box>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <div style={{width:'2px',height:'20px',backgroundColor:'#47B728',marginRight:'10px'}}></div>
                    <div style={{fontSize:'1.5rem'}}>关注我们</div>
                </div>
                <div style={{fontSize:'1.5rem'}}>
                    责任博彩
                </div>
            </Box>
            <Box p={2} style={{'display':'flex',justifyContent: 'space-between',color:'#fff'}} >
                <div style={{display:'flex'}}>
                    <img
                        srcSet={`${'/assets/home/facebook.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/facebook.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                    <img
                        srcSet={`${'/assets/home/instagram.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/instagram.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                    <img
                        srcSet={`${'/assets/home/youtube.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/youtube.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                </div>
                <div style={{display:'flex'}}>
                    <img
                        srcSet={`${'/assets/home/18.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/18.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                    <img
                        srcSet={`${'/assets/home/instagram.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/instagram.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                    <img
                        srcSet={`${'/assets/home/facebook.png'}`}
                        style={{borderRadius:'50%',width:'3rem',height:'3rem',marginRight:'0.8rem'}}
                        src={`${'/assets/home/facebook.png'}?fit=crop&auto=format`}
                        loading="lazy"
                    />  
                </div>
            </Box>
            <Box p={2} style={{display:'flex',marginTop:20,marginBottom:50,justifyContent:'center'}}>
                <Button
                    variant="contained"
                    color="primary"
                    style={{
                        background: 'url("/assets/home/anniu.png")', // Replace with your image URL
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'white',
                        fontSize:16,
                        border: '1px solid rgb(162, 132, 228)'
                    }}
                    size="middle"
                    onClick={addMainScreen}
                    >
                        添加到主屏幕
                </Button>
            </Box>
            {/* <SideTools />
            <Announcement />
            {isRedEnvelope?.info === 'ON' && (
                <Link href={'/events/red-envelope'}>
                    <img
                        width={90}
                        src="/assets/events/red-envelope/hongbao_icon.png"
                        className="fixed z-40 cursor-pointer hongbaoanime"
                        style={{
                            right: 10,
                            bottom: 200,
                        }}
                    />
                </Link>
            )}
            <div className="px-4">
                {!isApp && isDownload && (
                    <div className="sm:hidden flex items-center justify-between bgGradientYellow rounded-md p-2 sticky top-0 z-30">
                        <div className="flex-none">
                            <img width={36} src="/assets/logo_app.png" />
                        </div>
                        <div className="grow px-2">{downloadSlogan[lang]}</div>
                        <Link href={'/download'}>
                            <div className="app-download-btn clMainYellow rounded-full px-3 py-2 mr-2">
                                {t('download')}
                            </div>
                        </Link>
                        <div
                            className="flex-none icon-close"
                            onClick={() => {
                                setDownload(false);
                            }}
                        />
                    </div>
                )}
                <Banner slidesPerView={1} />
                {notice && (
                    <>
                        {notice?.info.length > 0 && (
                            <div className="flex bgWhite10 clWhite70 p-2 rounded-full mt-6">
                                <div className="icon-notice"/>
                                <div className="px-2 w-full overflow-hidden">
                                    <Marquee
                                        gradient={false}
                                        speed={50}
                                        pauseOnHover={true}
                                    >
                                        {notice?.info.map((item, index) => (
                                            <div key={index} className="mx-4">
                                                {item.content}
                                            </div>
                                        ))}
                                    </Marquee>
                                </div>
                            </div>
                        )}
                    </>
                )}
                <div className="flex items-center mt-5 mb-3">
                    <div className="flex-auto clMainYellow text-base uppercase">
                        {t('hotSports')}
                    </div>
                    <div className="flex bgWhite6 rounded-full bdWhite30">
                        <div id="hot-sports-left">
                            <div className="py-1 px-4">
                                <div className="icon-left"/>
                            </div>
                        </div>
                        <div
                            className="bgWhite30"
                            style={{
                                height: 24,
                                width: 1,
                            }}
                        />
                        <div id="hot-sports-right">
                            <div className="py-1 px-4">
                                <div className="icon-right"/>
                            </div>
                        </div>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={slidesPerView}
                    grabCursor={true}
                    navigation={{
                        nextEl: '#hot-sports-right',
                        prevEl: '#hot-sports-left',
                    }}
                    loop={true}
                    className="h-full"
                >
                    {hotSports.map((item, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={item.img}
                                onClick={() => {
                                    play(item, dispatch);
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex mb-3">
                    <div className="clMainYellow text-base uppercase">
                        {t('hotGames')}
                    </div>
                </div>
                <HotGameRanking maxLength={18} />
                {user && recentGames?.info?.length > 0 && (
                    <>
                        <div className="flex mt-5 mb-3">
                            <div className="clMainYellow text-base uppercase">
                                {t('recentGames')}
                            </div>
                        </div>
                        <div className="grid grid-flow-col auto-cols-max gap-3 overflow-auto">
                            {recentGames?.info?.map((item, index) => (
                                <GameCardSmall key={index} game={item} />
                            ))}
                        </div>
                    </>
                )}

                <div className="mt-5 mb-3 uppercase clMainYellow text-lg">
                    {t('advantages')}
                </div>
                <div className="overflow-auto">
                    <div
                        className="grid grid-cols-4 rounded-md bg-[#151825]"
                        style={{
                            border: '1px solid rgba(80, 100, 255, 0.2)',
                            minWidth: 1000,
                        }}
                    >
                        {advantages.map((item) => (
                            <div
                                key={item.id}
                                className="p-4"
                                style={{
                                    borderRight:
                                        '1px solid rgba(80, 100, 255, 0.2)',
                                }}
                            >
                                <div className="flex justify-between items-center">
                                    <div
                                        className="clWhite30 font-bold font-din-medium"
                                        style={{ fontSize: 40 }}
                                    >
                                        {item.id}
                                    </div>
                                    <div>
                                        <img
                                            width={68}
                                            height={40}
                                            src={item.icon}
                                        />
                                    </div>
                                </div>
                                <div className="text-base clWhite my-2">
                                    {item[`title_${lang}`]}
                                </div>
                                <div>{item[`desc_${lang}`]}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <SocialMedia />
                <Footer />
            </div> */}
        </MainLayout>
    );
}
