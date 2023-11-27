import { formatMoney } from '@/utils/common';
import { t } from '@/utils/translate';

export const VipLevel4 = ({ isCurrentLevel, name, upgrade, relegation }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 327 170"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_4418_18108"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F7E4FF"></stop>
                    <stop offset="1" stopColor="#D0A5F1"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4418_18108"
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
                    id="filter0_d_4418_18108"
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
                        result="effect1_dropShadow_4418_18108"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18108"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint2_linear_4418_18108"
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
                    id="paint3_linear_4418_18108"
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
                    id="paint4_linear_4418_18108"
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
                    id="paint5_linear_4418_18108"
                    x1="18.984"
                    x2="90.762"
                    y1="25.268"
                    y2="46.167"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D39BFF"></stop>
                    <stop offset="1" stopColor="#853A8B"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_4418_18108"
                    x1="18.984"
                    x2="90.762"
                    y1="25.268"
                    y2="46.167"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D39BFF"></stop>
                    <stop offset="1" stopColor="#853A8B"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_4418_18108"
                    x1="18.984"
                    x2="90.762"
                    y1="25.268"
                    y2="46.167"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D39BFF"></stop>
                    <stop offset="1" stopColor="#853A8B"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_4418_18108"
                    x1="18.984"
                    x2="90.762"
                    y1="25.268"
                    y2="46.167"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D39BFF"></stop>
                    <stop offset="1" stopColor="#853A8B"></stop>
                </linearGradient>
                <filter
                    id="filter1_d_4418_18108"
                    width="107.932"
                    height="119.679"
                    x="205.034"
                    y="7.391"
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
                    <feOffset dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.372428 0 0 0 0 0.150313 0 0 0 0 0.4875 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18108"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18108"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint9_linear_4418_18108"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EBD5FF"></stop>
                    <stop offset="0.491" stopColor="#F7C8FF"></stop>
                    <stop offset="1" stopColor="#B76BFF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint10_linear_4418_18108"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0E5E9"></stop>
                    <stop offset="0.342" stopColor="#C6CDD5"></stop>
                    <stop offset="1" stopColor="#7D8A97"></stop>
                </linearGradient>
                <linearGradient
                    id="paint11_linear_4418_18108"
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
                    id="filter2_f_4418_18108"
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
                        result="effect1_foregroundBlur_4418_18108"
                        stdDeviation="5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint12_linear_4418_18108"
                    x1="259"
                    x2="259"
                    y1="15.539"
                    y2="110.923"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DAB4FF"></stop>
                    <stop offset="1" stopColor="#D3A4FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_4418_18108"
                    x1="215.154"
                    x2="300.923"
                    y1="34.385"
                    y2="88.231"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A650D1"></stop>
                    <stop offset="1" stopColor="#A650D1" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter3_i_4418_18108"
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
                    <feColorMatrix values="0 0 0 0 0.545477 0 0 0 0 0.191406 0 0 0 0 0.729167 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_18108"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint14_linear_4418_18108"
                    x1="259"
                    x2="259"
                    y1="118.804"
                    y2="18.615"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B960ED"></stop>
                    <stop offset="1" stopColor="#C97AEE"></stop>
                </linearGradient>
                <filter
                    id="filter4_d_4418_18108"
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
                    <feColorMatrix values="0 0 0 0 0.536213 0 0 0 0 0.195937 0 0 0 0 0.7125 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18108"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18108"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint15_linear_4418_18108"
                    x1="259"
                    x2="259"
                    y1="28.615"
                    y2="97.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EECDFF"></stop>
                    <stop offset="1" stopColor="#EBB3FF"></stop>
                </linearGradient>
                <filter
                    id="filter5_d_4418_18108"
                    width="67.692"
                    height="60"
                    x="227.154"
                    y="42.846"
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
                    <feOffset dx="2" dy="5"></feOffset>
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.572266 0 0 0 0 0.249288 0 0 0 0 0.720833 0 0 0 0.8 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18108"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18108"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint16_linear_4418_18108"
                    x1="252.083"
                    x2="252.083"
                    y1="77.714"
                    y2="63.714"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ECF"></stop>
                    <stop offset="1" stopColor="#F9EDFF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint17_linear_4418_18108"
                    x1="270.923"
                    x2="270.923"
                    y1="63.714"
                    y2="87.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#C370EE"></stop>
                    <stop offset="1" stopColor="#F8E9FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint18_linear_4418_18108"
                    x1="247.077"
                    x2="247.077"
                    y1="63.714"
                    y2="87.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#C370EE"></stop>
                    <stop offset="1" stopColor="#F8E9FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint19_linear_4418_18108"
                    x1="252.083"
                    x2="252.083"
                    y1="57.052"
                    y2="47.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2D7FF"></stop>
                    <stop offset="1" stopColor="#FCF4FF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint20_linear_4418_18108"
                    x1="264.415"
                    x2="271.524"
                    y1="53.12"
                    y2="50.408"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E3ABFF"></stop>
                    <stop offset="1" stopColor="#FEFEFE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint21_linear_4418_18108"
                    x1="248.072"
                    x2="248.072"
                    y1="63.714"
                    y2="47.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DC99FF"></stop>
                    <stop offset="1" stopColor="#ECCFFF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint22_linear_4418_18108"
                    x1="250.613"
                    x2="257.723"
                    y1="53.12"
                    y2="50.408"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E2AAFF"></stop>
                    <stop offset="1" stopColor="#F9ECFF"></stop>
                </linearGradient>
                <linearGradient
                    id="paint23_linear_4418_18108"
                    x1="212.303"
                    x2="212.303"
                    y1="63.714"
                    y2="47.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D98FFF"></stop>
                    <stop offset="1" stopColor="#FAF1FF"></stop>
                </linearGradient>
            </defs>
            <mask
                id="mask0_4418_18108"
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
                    fill="url(#paint1_linear_4418_18108)"
                    rx="8"
                ></rect>
            </mask>
            <mask
                id="mask1_4418_18108"
                style={{ maskType: 'alpha' }}
                width="92"
                height="105"
                x="213"
                y="11"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="url(#paint10_linear_4418_18108)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </mask>
            <rect
                width="327"
                height="170"
                fill="url(#paint0_linear_4418_18108)"
                rx="8"
            ></rect>
            <g mask="url(#mask0_4418_18108)">
                <g filter="url(#filter0_d_4418_18108)">
                    <path
                        fill="url(#paint2_linear_4418_18108)"
                        d="M80.57 41c2.133 0 4.235.503 6.136 1.467 1.9.965 3.545 2.363 4.8 4.082l24.907 34.13a13.452 13.452 0 012.568 8.646 13.46 13.46 0 01-3.476 8.325l-63.478 69.916A13.529 13.529 0 0142 172a13.53 13.53 0 01-10.027-4.434L-31.505 97.65a13.446 13.446 0 01-.908-16.97l24.908-34.13a13.512 13.512 0 014.8-4.083A13.562 13.562 0 013.43 41h77.14zm0 11.553H3.43a1.936 1.936 0 00-1.561.793l-24.908 34.13a1.92 1.92 0 00.132 2.426l63.477 69.909a1.936 1.936 0 002.867 0l63.474-69.917a1.924 1.924 0 00.132-2.426L82.135 53.342a1.93 1.93 0 00-1.56-.793l-.005.004zM68.998 85.447a5.808 5.808 0 018.133-.349 5.764 5.764 0 01.46 8.1l-31.294 34.469a5.783 5.783 0 01-1.947 1.404 5.816 5.816 0 01-6.647-1.404L6.513 93.314a5.764 5.764 0 01.46-8.1 5.808 5.808 0 018.134.348L42 115.183l26.998-29.736z"
                        shapeRendering="crispEdges"
                    ></path>
                </g>
                <path
                    stroke="url(#paint3_linear_4418_18108)"
                    strokeWidth="2"
                    d="M72 1h120"
                ></path>
                <path
                    stroke="url(#paint4_linear_4418_18108)"
                    strokeWidth="2"
                    d="M327 5v80"
                ></path>
            </g>
            <path
                fill="url(#paint5_linear_4418_18108)"
                d="M36.632 53h-17.76l6.176-23.04h4.8l-5.152 19.2h12.96L36.632 53z"
            ></path>
            <path
                fill="url(#paint6_linear_4418_18108)"
                d="M48.337 53h-7.969l-.928-23.04h4.8l1.152 19.584L57.617 29.96h4.8L48.336 53z"
            ></path>
            <path
                fill="url(#paint7_linear_4418_18108)"
                d="M58.324 53h-4.832l1.248-4.512h4.8L58.324 53z"
            ></path>
            <path
                fill="url(#paint8_linear_4418_18108)"
                d="M80.66 53l-5.985 4.256 2.24-8.224h-11.36l7.008-19.072H77.3l-5.344 15.232h5.984l4.064-15.232h4.8L82.74 45.192h3.328l-1.024 3.84h-3.328L80.66 53z"
            ></path>
            <g filter="url(#filter1_d_4418_18108)">
                <path
                    fill="url(#paint9_linear_4418_18108)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </g>
            <g mask="url(#mask1_4418_18108)">
                <path
                    stroke="url(#paint11_linear_4418_18108)"
                    strokeWidth="2"
                    d="M226.7 97.462L246.685 109"
                ></path>
                <g filter="url(#filter2_f_4418_18108)">
                    <ellipse
                        cx="239"
                        cy="102.462"
                        fill="#fff"
                        fillOpacity="0.6"
                        rx="4.615"
                        ry="6.923"
                        transform="rotate(-45 239 102.462)"
                    ></ellipse>
                </g>
            </g>
            <path
                fill="url(#paint12_linear_4418_18108)"
                stroke="url(#paint13_linear_4418_18108)"
                d="M255.25 18.28a7.5 7.5 0 017.5 0l33.303 19.228a7.501 7.501 0 013.75 6.495v38.455c0 2.68-1.43 5.156-3.75 6.495l-33.303 19.228a7.504 7.504 0 01-7.5 0l-33.303-19.228a7.501 7.501 0 01-3.75-6.495V44.003c0-2.68 1.43-5.155 3.75-6.495l33.303-19.227z"
            ></path>
            <g filter="url(#filter3_i_4418_18108)">
                <path
                    fill="url(#paint14_linear_4418_18108)"
                    d="M256 20.347a6 6 0 016 0l32.638 18.844a6 6 0 013 5.196v37.687a6 6 0 01-3 5.197L262 106.114a5.999 5.999 0 01-6 0L223.362 87.27a6 6 0 01-3-5.196V44.387a6 6 0 013-5.196L256 20.347z"
                ></path>
            </g>
            <g filter="url(#filter4_d_4418_18108)">
                <path
                    fill="url(#paint15_linear_4418_18108)"
                    d="M255 30.925a8 8 0 018 0l21.978 12.689a8 8 0 014 6.928V75.92a8 8 0 01-4 6.928L263 95.537a8 8 0 01-8 0l-21.978-12.69a8 8 0 01-4-6.927V50.542a8 8 0 014-6.928L255 30.924z"
                ></path>
            </g>
            <g filter="url(#filter5_d_4418_18108)">
                <path
                    fill="#607693"
                    fillRule="evenodd"
                    d="M259 87.846l23.846-24.133-10.044-15.867h-27.603l-10.045 15.868L259 87.846z"
                    clipRule="evenodd"
                ></path>
            </g>
            <path
                fill="url(#paint16_linear_4418_18108)"
                fillRule="evenodd"
                d="M259 87.846l11.923-24.133h-23.846L259 87.847z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint17_linear_4418_18108)"
                fillRule="evenodd"
                d="M259 87.846l23.846-24.133h-11.923L259 87.847z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint18_linear_4418_18108)"
                fillRule="evenodd"
                d="M259 87.846l-11.923-24.133h-11.923L259 87.847z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint19_linear_4418_18108)"
                fillRule="evenodd"
                d="M259 47.846l-11.923 15.868h23.846L259 47.846z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint20_linear_4418_18108)"
                fillRule="evenodd"
                d="M272.801 47.846H259l11.923 15.868 1.878-15.868z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint21_linear_4418_18108)"
                fillRule="evenodd"
                d="M282.846 63.714l-10.044-15.868-1.879 15.868h11.923z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint22_linear_4418_18108)"
                fillRule="evenodd"
                d="M259 47.846h-13.801l1.878 15.868L259 47.846z"
                clipRule="evenodd"
            ></path>
            <path
                fill="url(#paint23_linear_4418_18108)"
                fillRule="evenodd"
                d="M245.199 47.846l-10.045 15.868h11.923l-1.878-15.868z"
                clipRule="evenodd"
            ></path>
            <text x="18" y="86" fill="#90489C" className="text-lg font-medium">
                {name}
            </text>
            {/* <text
                x="18"
                y="126"
                fill="#90489C"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardUpgrade', 'vip')}
                {formatMoney(upgrade)}
            </text>
            <text
                x="18"
                y="146"
                fill="#90489C"
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
                    <text x="7" y="13" fill="#90489C" fontSize="10">
                        {t('vipCardCurrentLevel', 'vip')}
                    </text>
                </>
            )}
        </svg>
    );
};
