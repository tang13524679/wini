import { formatMoney } from '@/utils/common';
import { t } from '@/utils/translate';

export const VipLevel1 = ({ isCurrentLevel, name, upgrade, relegation }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 327 170"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_4418_17903"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9DCE0"></stop>
                    <stop offset="1" stopColor="#A8ACB1"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4418_17903"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EBEBEB"></stop>
                    <stop offset="1" stopColor="#BBB"></stop>
                </linearGradient>
                <filter
                    id="filter0_d_4418_17903"
                    width="154"
                    height="132"
                    x="-35"
                    y="40"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="-1"></feOffset>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17903"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17903"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint2_linear_4418_17903"
                    x1="42"
                    x2="42"
                    y1="41"
                    y2="172"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity="0.2"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0.1"></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0.3"></stop>
                </linearGradient>
                <linearGradient
                    id="paint3_linear_4418_17903"
                    x1="192"
                    x2="72"
                    y1="1"
                    y2="1"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity="0"></stop>
                    <stop
                        offset="0.498"
                        stopColor="#fff"
                        stopOpacity="0.8"
                    ></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint4_linear_4418_17903"
                    x1="327"
                    x2="326.826"
                    y1="4.998"
                    y2="85"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity="0"></stop>
                    <stop
                        offset="0.498"
                        stopColor="#fff"
                        stopOpacity="0.7"
                    ></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint5_linear_4418_17903"
                    x1="17.979"
                    x2="85.046"
                    y1="27"
                    y2="49.088"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9B9B9"></stop>
                    <stop offset="1" stopColor="#555557"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_4418_17903"
                    x1="17.979"
                    x2="85.046"
                    y1="27"
                    y2="49.088"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9B9B9"></stop>
                    <stop offset="1" stopColor="#555557"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_4418_17903"
                    x1="17.979"
                    x2="85.046"
                    y1="27"
                    y2="49.088"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9B9B9"></stop>
                    <stop offset="1" stopColor="#555557"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_4418_17903"
                    x1="17.979"
                    x2="85.046"
                    y1="27"
                    y2="49.088"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9B9B9"></stop>
                    <stop offset="1" stopColor="#555557"></stop>
                </linearGradient>
                <filter
                    id="filter1_d_4418_17903"
                    width="107.932"
                    height="119.679"
                    x="205.034"
                    y="5.391"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.470833 0 0 0 0 0.470833 0 0 0 0 0.470833 0 0 0 0.8 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17903"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17903"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint9_linear_4418_17903"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EAEAEA"></stop>
                    <stop offset="0.342" stopColor="#C6CDD5"></stop>
                    <stop offset="1" stopColor="#8D8D8D"></stop>
                </linearGradient>
                <linearGradient
                    id="paint10_linear_4418_17903"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EBEBEB"></stop>
                    <stop offset="0.342" stopColor="#C6CDD5"></stop>
                    <stop offset="1" stopColor="#A9A9A9"></stop>
                </linearGradient>
                <linearGradient
                    id="paint11_linear_4418_17903"
                    x1="226.699"
                    x2="246.678"
                    y1="97.461"
                    y2="109.012"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity="0"></stop>
                    <stop
                        offset="0.498"
                        stopColor="#fff"
                        stopOpacity="0.4"
                    ></stop>
                    <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter2_f_4418_17903"
                    width="31.768"
                    height="31.768"
                    x="223.116"
                    y="86.577"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feGaussianBlur
                        result="effect1_foregroundBlur_4418_17903"
                        stdDeviation="5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint12_linear_4418_17903"
                    x1="259"
                    x2="259"
                    y1="15.539"
                    y2="110.923"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#C8C9CB"></stop>
                    <stop offset="1" stopColor="#D0D5DC"></stop>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_4418_17903"
                    x1="215.154"
                    x2="300.923"
                    y1="34.385"
                    y2="88.231"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#898989"></stop>
                    <stop offset="1" stopColor="#8F8F8F" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter3_i_4418_17903"
                    width="79.276"
                    height="91.374"
                    x="220.362"
                    y="19.544"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="2" dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.183264 0 0 0 0 0.199965 0 0 0 0 0.216667 0 0 0 0.3 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17903"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint14_linear_4418_17903"
                    x1="259"
                    x2="259"
                    y1="118.804"
                    y2="18.615"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#999"></stop>
                    <stop offset="1" stopColor="silver"></stop>
                </linearGradient>
                <filter
                    id="filter4_d_4418_17903"
                    width="63.956"
                    height="70.756"
                    x="227.022"
                    y="29.853"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.184314 0 0 0 0 0.2 0 0 0 0 0.215686 0 0 0 0.25 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17903"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17903"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint15_linear_4418_17903"
                    x1="259"
                    x2="259"
                    y1="106.348"
                    y2="28.615"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DADADA"></stop>
                    <stop offset="1" stopColor="#E6E6E6"></stop>
                </linearGradient>
                <filter
                    id="filter5_d_4418_17903"
                    width="43.448"
                    height="52.615"
                    x="230.738"
                    y="41.538"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="5"></feOffset>
                    <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.462745 0 0 0 0 0.486275 0 0 0 0 0.486275 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17903"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17903"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint16_linear_4418_17903"
                    x1="253.455"
                    x2="258.74"
                    y1="68.365"
                    y2="67.913"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D9E0E8"></stop>
                    <stop offset="1" stopColor="#9BA2A9"></stop>
                </linearGradient>
                <linearGradient
                    id="paint17_linear_4418_17903"
                    x1="266.221"
                    x2="258.108"
                    y1="76.443"
                    y2="62.756"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ABB1B6"></stop>
                    <stop offset="1" stopColor="#DBDBDB"></stop>
                </linearGradient>
                <linearGradient
                    id="paint18_linear_4418_17903"
                    x1="251.373"
                    x2="245.439"
                    y1="55.594"
                    y2="56.343"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DCDDDD"></stop>
                    <stop offset="1" stopColor="#AAAFB4"></stop>
                </linearGradient>
                <linearGradient
                    id="paint19_linear_4418_17903"
                    x1="240.148"
                    x2="248.683"
                    y1="49.921"
                    y2="59.787"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B9B9B9"></stop>
                    <stop offset="1" stopColor="#EEE"></stop>
                </linearGradient>
                <filter
                    id="filter6_d_4418_17903"
                    width="33.907"
                    height="40.225"
                    x="254.289"
                    y="41.538"
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                >
                    <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dy="5"></feOffset>
                    <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.461094 0 0 0 0 0.4875 0 0 0 0 0.4875 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17903"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17903"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint20_linear_4418_17903"
                    x1="272.787"
                    x2="276.419"
                    y1="53.838"
                    y2="54.174"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E1E1E1"></stop>
                    <stop offset="1" stopColor="#AEB6BE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint21_linear_4418_17903"
                    x1="264.128"
                    x2="267.452"
                    y1="60.876"
                    y2="61.51"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EDEDED"></stop>
                    <stop offset="1" stopColor="#C6CCD2"></stop>
                </linearGradient>
                <linearGradient
                    id="paint22_linear_4418_17903"
                    x1="269.769"
                    x2="261.01"
                    y1="63.018"
                    y2="59.109"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EFEFEF"></stop>
                    <stop offset="1" stopColor="#B4B9BE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint23_linear_4418_17903"
                    x1="278.828"
                    x2="272.989"
                    y1="48.726"
                    y2="57.292"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D0D4D8"></stop>
                    <stop offset="1" stopColor="#EBEBEB"></stop>
                </linearGradient>
            </defs>
            <mask
                id="mask0_4418_17903"
                style={{ maskType: 'alpha' }}
                width="327"
                height="170"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
            >
                <rect
                    width="327"
                    height="170"
                    fill="url(#paint1_linear_4418_17903)"
                    rx="8"
                ></rect>
            </mask>
            <mask
                id="mask1_4418_17903"
                style={{ maskType: 'alpha' }}
                width="92"
                height="105"
                x="213"
                y="11"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="url(#paint10_linear_4418_17903)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </mask>
            <rect
                width="327"
                height="170"
                fill="url(#paint0_linear_4418_17903)"
                rx="8"
            ></rect>
            <g mask="url(#mask0_4418_17903)">
                <g filter="url(#filter0_d_4418_17903)">
                    <path
                        fill="url(#paint2_linear_4418_17903)"
                        d="M80.57 41c2.133 0 4.235.503 6.136 1.467 1.9.965 3.545 2.363 4.8 4.082l24.907 34.13a13.452 13.452 0 012.568 8.646 13.46 13.46 0 01-3.476 8.325l-63.478 69.916A13.529 13.529 0 0142 172a13.53 13.53 0 01-10.027-4.434L-31.505 97.65a13.446 13.446 0 01-.908-16.97l24.908-34.13a13.512 13.512 0 014.8-4.083A13.562 13.562 0 013.43 41h77.14zm0 11.553H3.43a1.936 1.936 0 00-1.561.793l-24.908 34.13a1.92 1.92 0 00.132 2.426l63.477 69.909a1.936 1.936 0 002.867 0l63.474-69.917a1.924 1.924 0 00.132-2.426L82.135 53.342a1.93 1.93 0 00-1.56-.793l-.005.004zM68.998 85.447a5.808 5.808 0 018.133-.349 5.764 5.764 0 01.46 8.1l-31.294 34.469a5.783 5.783 0 01-1.947 1.404 5.816 5.816 0 01-6.647-1.404L6.513 93.314a5.764 5.764 0 01.46-8.1 5.808 5.808 0 018.134.348L42 115.183l26.998-29.736z"
                        shapeRendering="crispEdges"
                    ></path>
                </g>
                <path
                    stroke="url(#paint3_linear_4418_17903)"
                    strokeWidth="2"
                    d="M72 1h120"
                ></path>
                <path
                    stroke="url(#paint4_linear_4418_17903)"
                    strokeWidth="2"
                    d="M327 5v80"
                ></path>
            </g>
            <path
                fill="url(#paint5_linear_4418_17903)"
                d="M35.632 54h-17.76l6.176-23.04h4.8l-5.152 19.2h12.96L35.632 54z"
            ></path>
            <path
                fill="url(#paint6_linear_4418_17903)"
                d="M47.337 54h-7.969l-.928-23.04h4.8l1.152 19.584L56.617 30.96h4.8L47.336 54z"
            ></path>
            <path
                fill="url(#paint7_linear_4418_17903)"
                d="M57.324 54h-4.832l1.248-4.512h4.8L57.324 54z"
            ></path>
            <path
                fill="url(#paint8_linear_4418_17903)"
                d="M76.555 54h-4.8l5.152-19.2-6.272 2.24 1.024-3.84 6.272-2.24h4.8L76.555 54z"
            ></path>
            <g filter="url(#filter1_d_4418_17903)">
                <path
                    fill="url(#paint9_linear_4418_17903)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </g>
            <g mask="url(#mask1_4418_17903)">
                <path
                    stroke="url(#paint11_linear_4418_17903)"
                    strokeWidth="2"
                    d="M226.7 97.462L246.685 109"
                ></path>
                <g filter="url(#filter2_f_4418_17903)">
                    <ellipse
                        cx="239"
                        cy="102.461"
                        fill="#fff"
                        fillOpacity="0.6"
                        rx="4.615"
                        ry="6.923"
                        transform="rotate(-45 239 102.461)"
                    ></ellipse>
                </g>
            </g>
            <path
                fill="url(#paint12_linear_4418_17903)"
                stroke="url(#paint13_linear_4418_17903)"
                d="M255.25 18.28a7.5 7.5 0 017.5 0l33.303 19.228a7.501 7.501 0 013.75 6.495v38.455c0 2.68-1.43 5.156-3.75 6.495l-33.303 19.228a7.504 7.504 0 01-7.5 0l-33.303-19.228a7.501 7.501 0 01-3.75-6.495V44.003c0-2.68 1.43-5.155 3.75-6.495l33.303-19.227z"
            ></path>
            <g filter="url(#filter3_i_4418_17903)">
                <path
                    fill="url(#paint14_linear_4418_17903)"
                    d="M256 20.347a6 6 0 016 0l32.638 18.844a6 6 0 013 5.196v37.687a6 6 0 01-3 5.197L262 106.114a5.999 5.999 0 01-6 0L223.362 87.27a6 6 0 01-3-5.196V44.387a6 6 0 013-5.196L256 20.347z"
                ></path>
            </g>
            <g filter="url(#filter4_d_4418_17903)">
                <path
                    fill="url(#paint15_linear_4418_17903)"
                    d="M255 30.925a8 8 0 018 0l21.978 12.689a8 8 0 014 6.928V75.92a8 8 0 01-4 6.928L263 95.537a8 8 0 01-8 0l-21.978-12.69a8 8 0 01-4-6.927V50.542a8 8 0 014-6.928L255 30.924z"
                ></path>
            </g>
            <g filter="url(#filter5_d_4418_17903)">
                <path
                    fill="#FFC08A"
                    fillRule="evenodd"
                    d="M240.118 51.23c-1.238-2.652.698-5.691 3.624-5.691h5.018a4 4 0 013.625 2.308l12.42 26.615c1.238 2.652-.698 5.692-3.624 5.692h-5.018a4 4 0 01-3.625-2.309l-12.42-26.615z"
                    clipRule="evenodd"
                ></path>
                <mask
                    id="mask2_4418_17903"
                    style={{ maskType: 'alpha' }}
                    width="27"
                    height="36"
                    x="239"
                    y="45"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M240.118 51.23c-1.238-2.652.698-5.691 3.624-5.691h5.018a4 4 0 013.625 2.308l12.42 26.615c1.238 2.652-.698 5.692-3.624 5.692h-5.018a4 4 0 01-3.625-2.309l-12.42-26.615z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g
                    fillRule="evenodd"
                    clipRule="evenodd"
                    mask="url(#mask2_4418_17903)"
                >
                    <path
                        fill="url(#paint16_linear_4418_17903)"
                        d="M251.308 45.538l16.154 34.616-15.385-17.692-.769-16.924z"
                    ></path>
                    <path
                        fill="url(#paint17_linear_4418_17903)"
                        d="M252.462 62.462l15 17.692h-13.847l-1.153-17.692z"
                    ></path>
                    <path
                        fill="url(#paint18_linear_4418_17903)"
                        d="M237.462 45.538l15 16.924 1.153 17.692-16.153-34.615z"
                    ></path>
                    <path
                        fill="url(#paint19_linear_4418_17903)"
                        d="M237.462 45.538h13.846l1.154 16.924-15-16.924z"
                    ></path>
                </g>
            </g>
            <g filter="url(#filter6_d_4418_17903)">
                <path
                    fill="#D8D8D8"
                    fillRule="evenodd"
                    d="M278.856 51.142c1.156-2.643-.78-5.604-3.664-5.604h-5.022a4 4 0 00-3.714 2.515l-2.881 7.202a4.001 4.001 0 00.266 3.513l4.711 8.01c.828 1.407 2.902 1.283 3.557-.213l6.747-15.423z"
                    clipRule="evenodd"
                ></path>
                <mask
                    id="mask3_4418_17903"
                    style={{ maskType: 'alpha' }}
                    width="17"
                    height="23"
                    x="263"
                    y="45"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M278.856 51.142c1.156-2.643-.78-5.604-3.664-5.604h-5.022a4 4 0 00-3.714 2.515l-2.881 7.202a4.001 4.001 0 00.266 3.513l4.711 8.01c.828 1.407 2.902 1.283 3.557-.213l6.747-15.423z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g
                    fillRule="evenodd"
                    clipRule="evenodd"
                    mask="url(#mask3_4418_17903)"
                >
                    <path
                        fill="url(#paint20_linear_4418_17903)"
                        d="M281.308 45.538l-9.231 12.308-1.539 12.308 10.77-24.615z"
                    ></path>
                    <path
                        fill="url(#paint21_linear_4418_17903)"
                        d="M272.077 57.846l-9.231-.77 7.692 13.078 1.539-12.308z"
                    ></path>
                    <path
                        fill="url(#paint22_linear_4418_17903)"
                        d="M272.077 57.846l-4.615-12.307-4.616 11.538 9.231.77z"
                    ></path>
                    <path
                        fill="url(#paint23_linear_4418_17903)"
                        d="M281.308 45.538h-13.846l4.615 12.308 9.231-12.307z"
                    ></path>
                </g>
            </g>
            <text x="18" y="86" fill="#555557" className="text-lg font-medium">
                {name}
            </text>
            {/* <text
                x="18"
                y="126"
                fill="#555557"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardUpgrade', 'vip')}
                {formatMoney(upgrade)}
            </text>
            <text
                x="18"
                y="146"
                fill="#555557"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardRelegation', 'vip')}
                {formatMoney(relegation)}
            </text> */}
            {isCurrentLevel && (
                <>
                    <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H74V12C74 16.4183 70.4183 20 66 20H0V8Z"
                        fill="white"
                        fillOpacity="0.33"
                    />
                    <text x="7" y="13" fill="#555557" fontSize="10">
                        {t('vipCardCurrentLevel', 'vip')}
                    </text>
                </>
            )}
        </svg>
    );
};
