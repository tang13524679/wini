import { formatMoney } from '@/utils/common';
import { t } from '@/utils/translate';

export const VipLevel3 = ({ isCurrentLevel, name, upgrade, relegation }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 327 170"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_4418_17902"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E4F3FF"></stop>
                    <stop offset="1" stopColor="#A8C9F2"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4418_17902"
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
                    id="filter0_d_4418_17902"
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
                        result="effect1_dropShadow_4418_17902"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17902"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint2_linear_4418_17902"
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
                    id="paint3_linear_4418_17902"
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
                    id="paint4_linear_4418_17902"
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
                    id="paint5_linear_4418_17902"
                    x1="18.986"
                    x2="89.621"
                    y1="27"
                    y2="51.835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ABD7FF"></stop>
                    <stop offset="1" stopColor="#2B6294"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_4418_17902"
                    x1="18.986"
                    x2="89.621"
                    y1="27"
                    y2="51.835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ABD7FF"></stop>
                    <stop offset="1" stopColor="#2B6294"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_4418_17902"
                    x1="18.986"
                    x2="89.621"
                    y1="27"
                    y2="51.835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ABD7FF"></stop>
                    <stop offset="1" stopColor="#2B6294"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_4418_17902"
                    x1="18.986"
                    x2="89.621"
                    y1="27"
                    y2="51.835"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ABD7FF"></stop>
                    <stop offset="1" stopColor="#2B6294"></stop>
                </linearGradient>
                <filter
                    id="filter1_d_4418_17902"
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
                    <feColorMatrix values="0 0 0 0 0.33526 0 0 0 0 0.414621 0 0 0 0 0.5125 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17902"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17902"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint9_linear_4418_17902"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D5EAFD"></stop>
                    <stop offset="0.491" stopColor="#CAE2FA"></stop>
                    <stop offset="1" stopColor="#8AA4C7"></stop>
                </linearGradient>
                <linearGradient
                    id="paint10_linear_4418_17902"
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
                    id="paint11_linear_4418_17902"
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
                    id="filter2_f_4418_17902"
                    width="31.768"
                    height="31.768"
                    x="223.116"
                    y="86.578"
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
                        result="effect1_foregroundBlur_4418_17902"
                        stdDeviation="5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint12_linear_4418_17902"
                    x1="259"
                    x2="259"
                    y1="15.539"
                    y2="110.923"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DBEDFF"></stop>
                    <stop offset="1" stopColor="#D9E7F7"></stop>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_4418_17902"
                    x1="215.154"
                    x2="300.923"
                    y1="34.385"
                    y2="88.231"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#5477A3"></stop>
                    <stop offset="1" stopColor="#333" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter3_i_4418_17902"
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
                    <feColorMatrix values="0 0 0 0 0.315556 0 0 0 0 0.413068 0 0 0 0 0.533333 0 0 0 0.8 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17902"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint14_linear_4418_17902"
                    x1="259"
                    x2="259"
                    y1="118.804"
                    y2="18.615"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#7A98BD"></stop>
                    <stop offset="1" stopColor="#6D8BB0"></stop>
                </linearGradient>
                <filter
                    id="filter4_d_4418_17902"
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
                    <feColorMatrix values="0 0 0 0 0.259514 0 0 0 0 0.330918 0 0 0 0 0.420833 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17902"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17902"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint15_linear_4418_17902"
                    x1="259"
                    x2="259"
                    y1="28.615"
                    y2="97.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E5EEF7"></stop>
                    <stop offset="1" stopColor="#B9CEE9"></stop>
                </linearGradient>
                <filter
                    id="filter5_d_4418_17902"
                    width="56.877"
                    height="61.65"
                    x="230.444"
                    y="35.519"
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
                    <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.34 0 0 0 0 0.456418 0 0 0 0 0.6 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17902"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17902"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint16_linear_4418_17902"
                    x1="233.931"
                    x2="242.247"
                    y1="66.91"
                    y2="81.314"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint17_linear_4418_17902"
                    x1="230.191"
                    x2="239.221"
                    y1="72.734"
                    y2="81.793"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#A3BCDB"></stop>
                    <stop offset="1" stopColor="#BACBE2"></stop>
                </linearGradient>
                <linearGradient
                    id="paint18_linear_4418_17902"
                    x1="246.011"
                    x2="256.125"
                    y1="69.739"
                    y2="87.257"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint19_linear_4418_17902"
                    x1="246.586"
                    x2="268.167"
                    y1="78.322"
                    y2="83.544"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#728FB5"></stop>
                    <stop offset="1" stopColor="#B1C8E4"></stop>
                </linearGradient>
                <linearGradient
                    id="paint20_linear_4418_17902"
                    x1="258.752"
                    x2="269.083"
                    y1="62.383"
                    y2="80.277"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint21_linear_4418_17902"
                    x1="259.918"
                    x2="279.419"
                    y1="70.624"
                    y2="73.252"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#87A0B9"></stop>
                    <stop offset="1" stopColor="#D2E4F7"></stop>
                </linearGradient>
                <linearGradient
                    id="paint22_linear_4418_17902"
                    x1="254.586"
                    x2="262.902"
                    y1="54.984"
                    y2="69.388"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint23_linear_4418_17902"
                    x1="255.309"
                    x2="264.604"
                    y1="68.344"
                    y2="77.487"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#7DA3D1"></stop>
                    <stop offset="1" stopColor="#B1C1C5"></stop>
                </linearGradient>
                <linearGradient
                    id="paint24_linear_4418_17902"
                    x1="248.42"
                    x2="258.534"
                    y1="44.502"
                    y2="62.02"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint25_linear_4418_17902"
                    x1="248.996"
                    x2="270.577"
                    y1="53.084"
                    y2="58.306"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F8DB2"></stop>
                    <stop offset="1" stopColor="#B1C1C5"></stop>
                </linearGradient>
                <linearGradient
                    id="paint26_linear_4418_17902"
                    x1="235.685"
                    x2="245.799"
                    y1="51.854"
                    y2="69.372"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#BDD8F1"></stop>
                    <stop offset="1" stopColor="#ECF5FE"></stop>
                </linearGradient>
                <linearGradient
                    id="paint27_linear_4418_17902"
                    x1="243.127"
                    x2="253.453"
                    y1="47.558"
                    y2="65.442"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#6F8DB2"></stop>
                    <stop offset="1" stopColor="#6F8DB2" stopOpacity="0"></stop>
                </linearGradient>
            </defs>
            <mask
                id="mask0_4418_17902"
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
                    fill="url(#paint1_linear_4418_17902)"
                    rx="8"
                ></rect>
            </mask>
            <mask
                id="mask1_4418_17902"
                style={{ maskType: 'alpha' }}
                width="92"
                height="105"
                x="213"
                y="11"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="url(#paint10_linear_4418_17902)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </mask>
            <mask
                id="mask2_4418_17902"
                style={{ maskType: 'alpha' }}
                width="40"
                height="45"
                x="239"
                y="40"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="#4C5E61"
                    fillRule="evenodd"
                    d="M251.418 77.792a3.995 3.995 0 00-2.183-1.26l-6.596-1.358a4 4 0 01-2.99-5.178l2.122-6.392a3.997 3.997 0 000-2.52l-2.122-6.392a4 4 0 012.99-5.179l6.596-1.357a3.995 3.995 0 002.183-1.261l4.474-5.034a4 4 0 015.98 0l4.474 5.034a4.002 4.002 0 002.183 1.26l6.597 1.358a4 4 0 012.989 5.179l-2.122 6.391a3.997 3.997 0 000 2.521l2.122 6.392a4 4 0 01-2.989 5.178l-6.597 1.358a4.001 4.001 0 00-2.183 1.26l-4.474 5.034a4 4 0 01-5.98 0l-4.474-5.034z"
                    clipRule="evenodd"
                ></path>
            </mask>
            <rect
                width="327"
                height="170"
                fill="url(#paint0_linear_4418_17902)"
                rx="8"
            ></rect>
            <g mask="url(#mask0_4418_17902)">
                <g filter="url(#filter0_d_4418_17902)">
                    <path
                        fill="url(#paint2_linear_4418_17902)"
                        d="M80.57 41c2.133 0 4.235.503 6.136 1.467 1.9.965 3.545 2.363 4.8 4.082l24.907 34.13a13.452 13.452 0 012.568 8.646 13.46 13.46 0 01-3.476 8.325l-63.478 69.916A13.529 13.529 0 0142 172a13.53 13.53 0 01-10.027-4.434L-31.505 97.65a13.446 13.446 0 01-.908-16.97l24.908-34.13a13.512 13.512 0 014.8-4.083A13.562 13.562 0 013.43 41h77.14zm0 11.553H3.43a1.936 1.936 0 00-1.561.793l-24.908 34.13a1.92 1.92 0 00.132 2.426l63.477 69.909a1.936 1.936 0 002.867 0l63.474-69.917a1.924 1.924 0 00.132-2.426L82.135 53.342a1.93 1.93 0 00-1.56-.793l-.005.004zM68.998 85.447a5.808 5.808 0 018.133-.349 5.764 5.764 0 01.46 8.1l-31.294 34.469a5.783 5.783 0 01-1.947 1.404 5.816 5.816 0 01-6.647-1.404L6.513 93.314a5.764 5.764 0 01.46-8.1 5.808 5.808 0 018.134.348L42 115.183l26.998-29.736z"
                        shapeRendering="crispEdges"
                    ></path>
                </g>
                <path
                    stroke="url(#paint3_linear_4418_17902)"
                    strokeWidth="2"
                    d="M72 1h120"
                ></path>
                <path
                    stroke="url(#paint4_linear_4418_17902)"
                    strokeWidth="2"
                    d="M327 5v80"
                ></path>
            </g>
            <path
                fill="url(#paint5_linear_4418_17902)"
                d="M36.632 54h-17.76l6.176-23.04h4.8l-5.152 19.2h12.96L36.632 54z"
            ></path>
            <path
                fill="url(#paint6_linear_4418_17902)"
                d="M48.337 54h-7.969l-.928-23.04h4.8l1.152 19.584L57.617 30.96h4.8L48.336 54z"
            ></path>
            <path
                fill="url(#paint7_linear_4418_17902)"
                d="M58.324 54h-4.832l1.248-4.512h4.8L58.324 54z"
            ></path>
            <path
                fill="url(#paint8_linear_4418_17902)"
                d="M80.5 54H64.882l1.024-3.84H78.58l1.664-6.24H68.211l1.056-3.84H81.3l1.408-5.28H70.035l1.024-3.84h15.616l1.44 1.6-2.272 7.776-1.856 1.184 1.216 2.464-2.336 8.128L80.5 54z"
            ></path>
            <g filter="url(#filter1_d_4418_17902)">
                <path
                    fill="url(#paint9_linear_4418_17902)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </g>
            <g mask="url(#mask1_4418_17902)">
                <path
                    stroke="url(#paint11_linear_4418_17902)"
                    strokeWidth="2"
                    d="M226.7 97.462L246.685 109"
                ></path>
                <g filter="url(#filter2_f_4418_17902)">
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
                fill="url(#paint12_linear_4418_17902)"
                stroke="url(#paint13_linear_4418_17902)"
                d="M255.25 18.28a7.5 7.5 0 017.5 0l33.303 19.228a7.501 7.501 0 013.75 6.495v38.455c0 2.68-1.43 5.156-3.75 6.495l-33.303 19.228a7.504 7.504 0 01-7.5 0l-33.303-19.228a7.501 7.501 0 01-3.75-6.495V44.003c0-2.68 1.43-5.155 3.75-6.495l33.303-19.227z"
            ></path>
            <g filter="url(#filter3_i_4418_17902)">
                <path
                    fill="url(#paint14_linear_4418_17902)"
                    d="M256 20.347a6 6 0 016 0l32.638 18.844a6 6 0 013 5.196v37.687a6 6 0 01-3 5.197L262 106.114a5.999 5.999 0 01-6 0L223.362 87.27a6 6 0 01-3-5.196V44.387a6 6 0 013-5.196L256 20.347z"
                ></path>
            </g>
            <g filter="url(#filter4_d_4418_17902)">
                <path
                    fill="url(#paint15_linear_4418_17902)"
                    d="M255 30.925a8 8 0 018 0l21.978 12.689a8 8 0 014 6.928V75.92a8 8 0 01-4 6.928L263 95.537a8 8 0 01-8 0l-21.978-12.69a8 8 0 01-4-6.927V50.542a8 8 0 014-6.928L255 30.924z"
                ></path>
            </g>
            <g filter="url(#filter5_d_4418_17902)">
                <path
                    fill="#4C5E61"
                    fillRule="evenodd"
                    d="M251.418 77.792a3.995 3.995 0 00-2.183-1.26l-6.596-1.358a4 4 0 01-2.99-5.178l2.122-6.392a3.997 3.997 0 000-2.52l-2.122-6.392a4 4 0 012.99-5.179l6.596-1.357a3.995 3.995 0 002.183-1.261l4.474-5.034a4 4 0 015.98 0l4.474 5.034a4.002 4.002 0 002.183 1.26l6.597 1.358a4 4 0 012.989 5.179l-2.122 6.391a3.997 3.997 0 000 2.521l2.122 6.392a4 4 0 01-2.989 5.178l-6.597 1.358a4.002 4.002 0 00-2.183 1.26l-4.474 5.034a4 4 0 01-5.98 0l-4.474-5.034z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g
                fillRule="evenodd"
                clipRule="evenodd"
                mask="url(#mask2_4418_17902)"
            >
                <path
                    fill="url(#paint16_linear_4418_17902)"
                    d="M250.125 77.167l-12.161-2.782 3.671-11.924h16.98l-8.49 14.706z"
                ></path>
                <path
                    fill="url(#paint17_linear_4418_17902)"
                    d="M237.964 74.385l3.671-11.924h16.98l-20.651 11.924z"
                ></path>
                <path
                    fill="url(#paint18_linear_4418_17902)"
                    d="M267.106 77.167l-8.491 9.14-8.49-9.14 8.49-14.706 8.491 14.706z"
                ></path>
                <path
                    fill="url(#paint19_linear_4418_17902)"
                    d="M258.615 86.308l-8.49-9.141 8.49-14.706v23.847z"
                ></path>
                <path
                    fill="url(#paint20_linear_4418_17902)"
                    d="M267.106 77.167l-8.491-14.706h17.75l3.789 11.924-13.048 2.782z"
                ></path>
                <path
                    fill="url(#paint21_linear_4418_17902)"
                    d="M267.106 77.167l-8.491-14.706 20.652 11.924-12.161 2.782z"
                ></path>
                <path
                    fill="url(#paint22_linear_4418_17902)"
                    d="M258.615 62.462l8.491-14.706 12.279 2.013-3.789 12.693h-16.981z"
                ></path>
                <path
                    fill="url(#paint23_linear_4418_17902)"
                    d="M258.615 62.462l21.539-12.693-3.789 12.693h-17.75z"
                ></path>
                <path
                    fill="url(#paint24_linear_4418_17902)"
                    d="M250.125 47.756l8.49-9.14 8.491 9.14-8.491 14.706-8.49-14.706z"
                ></path>
                <path
                    fill="url(#paint25_linear_4418_17902)"
                    d="M258.615 37.462l9.231 9.615-9.231 15.385v-25z"
                ></path>
                <path
                    fill="url(#paint26_linear_4418_17902)"
                    d="M258.615 62.462h-16.98l-3.671-11.924 12.161-2.782 8.49 14.706z"
                ></path>
                <path
                    fill="url(#paint27_linear_4418_17902)"
                    d="M258.615 62.462l-20.651-11.924 12.161-2.782 8.49 14.706z"
                ></path>
                <path
                    fill="#fff"
                    d="M254.728 69.538l-5.838-1.425 1.684-5.77-1.684-5.769 5.838-1.425 4.154-4.344 4.154 4.344 5.839 1.425-1.685 5.77 1.685 5.769-5.839 1.425-4.154 4.344-4.154-4.344z"
                    opacity="0.8"
                ></path>
            </g>
            <text x="18" y="86" fill="#3A70A0" className="text-lg font-medium">
                {name}
            </text>
            {/* <text
                x="18"
                y="126"
                fill="#3A70A0"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardUpgrade', 'vip')}
                {formatMoney(upgrade)}
            </text>
            <text
                x="18"
                y="146"
                fill="#3A70A0"
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
                    <text x="7" y="13" fill="#3A70A0" fontSize="10">
                        {t('vipCardCurrentLevel', 'vip')}
                    </text>
                </>
            )}
        </svg>
    );
};
