import { formatMoney } from '@/utils/common';
import { t } from '@/utils/translate';

export const VipLevel2 = ({ isCurrentLevel, name, upgrade, relegation }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 327 170"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_4418_17901"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF3C2"></stop>
                    <stop offset="1" stopColor="#FFD16C"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4418_17901"
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
                    id="filter0_d_4418_17901"
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
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint2_linear_4418_17901"
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
                    id="paint3_linear_4418_17901"
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
                    id="paint4_linear_4418_17901"
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
                    id="paint5_linear_4418_17901"
                    x1="18"
                    x2="88"
                    y1="31"
                    y2="56.501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDE97"></stop>
                    <stop offset="1" stopColor="#AE7900"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_4418_17901"
                    x1="18"
                    x2="88"
                    y1="31"
                    y2="56.501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDE97"></stop>
                    <stop offset="1" stopColor="#AE7900"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_4418_17901"
                    x1="18"
                    x2="88"
                    y1="31"
                    y2="56.501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDE97"></stop>
                    <stop offset="1" stopColor="#AE7900"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_4418_17901"
                    x1="18"
                    x2="88"
                    y1="31"
                    y2="56.501"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFDE97"></stop>
                    <stop offset="1" stopColor="#AE7900"></stop>
                </linearGradient>
                <filter
                    id="filter1_d_4418_17901"
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
                    <feColorMatrix values="0 0 0 0 0.575 0 0 0 0 0.37479 0 0 0 0 0.0814583 0 0 0 0.3 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint9_linear_4418_17901"
                    x1="211.308"
                    x2="299.769"
                    y1="36.308"
                    y2="92.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F3EAB3"></stop>
                    <stop offset="0.491" stopColor="#FCDA31"></stop>
                    <stop offset="1" stopColor="#FFBE16"></stop>
                </linearGradient>
                <linearGradient
                    id="paint10_linear_4418_17901"
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
                    id="paint11_linear_4418_17901"
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
                    id="filter2_f_4418_17901"
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
                        result="effect1_foregroundBlur_4418_17901"
                        stdDeviation="5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint12_linear_4418_17901"
                    x1="259"
                    x2="259"
                    y1="15.539"
                    y2="110.923"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEEA5"></stop>
                    <stop offset="1" stopColor="#FFF0B6"></stop>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_4418_17901"
                    x1="215.154"
                    x2="300.923"
                    y1="34.385"
                    y2="88.231"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DB8310"></stop>
                    <stop offset="1" stopColor="#DB8310" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter3_i_4418_17901"
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
                    <feColorMatrix values="0 0 0 0 0.370833 0 0 0 0 0.219129 0 0 0 0 0 0 0 0 0.3 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17901"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint14_linear_4418_17901"
                    x1="259"
                    x2="259"
                    y1="118.804"
                    y2="18.615"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FAC02C"></stop>
                    <stop offset="1" stopColor="#FFC24F"></stop>
                </linearGradient>
                <filter
                    id="filter4_d_4418_17901"
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
                    <feColorMatrix values="0 0 0 0 0.604167 0 0 0 0 0.379274 0 0 0 0 0.0176215 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint15_linear_4418_17901"
                    x1="259"
                    x2="259"
                    y1="28.615"
                    y2="97.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE5B9"></stop>
                    <stop offset="1" stopColor="#FFF1A5"></stop>
                </linearGradient>
                <filter
                    id="filter5_d_4418_17901"
                    width="49.516"
                    height="40.365"
                    x="236.242"
                    y="43.173"
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
                    <feOffset dx="2" dy="4"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.694118 0 0 0 0 0.501961 0 0 0 0 0.160784 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter6_i_4418_17901"
                    width="44.615"
                    height="16.034"
                    x="236.692"
                    y="61.505"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17901"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint16_linear_4418_17901"
                    x1="254.144"
                    x2="263.116"
                    y1="70.88"
                    y2="83.389"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFD76D"></stop>
                    <stop offset="1" stopColor="#FFE7AA"></stop>
                </linearGradient>
                <filter
                    id="filter7_i_4418_17901"
                    width="22.308"
                    height="35.846"
                    x="236.692"
                    y="41.692"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17901"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint17_linear_4418_17901"
                    x1="245.401"
                    x2="257.674"
                    y1="64.364"
                    y2="67.911"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2C346"></stop>
                    <stop offset="1" stopColor="#FFC62F"></stop>
                </linearGradient>
                <filter
                    id="filter8_d_4418_17901"
                    width="40.308"
                    height="51.846"
                    x="250"
                    y="27.692"
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
                    <feOffset dy="-5"></feOffset>
                    <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.707828 0 0 0 0 0.493335 0 0 0 0 0 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint18_linear_4418_17901"
                    x1="280.998"
                    x2="280.998"
                    y1="42.128"
                    y2="75.035"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEAB5"></stop>
                    <stop offset="1" stopColor="#FFC01C"></stop>
                </linearGradient>
                <filter
                    id="filter9_d_4418_17901"
                    width="49.516"
                    height="40.365"
                    x="236.242"
                    y="44.923"
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
                    <feOffset dx="2" dy="-2"></feOffset>
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.695833 0 0 0 0 0.501061 0 0 0 0 0.159462 0 0 0 0.4 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter10_d_4418_17901"
                    width="62.615"
                    height="32.034"
                    x="227.692"
                    y="36.923"
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
                    <feOffset dy="-5"></feOffset>
                    <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.707828 0 0 0 0 0.493335 0 0 0 0 0 0 0 0 0.6 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_17901"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_17901"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint19_linear_4418_17901"
                    x1="237.311"
                    x2="237.311"
                    y1="64.776"
                    y2="51.132"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEAB5"></stop>
                    <stop offset="1" stopColor="#FFC01C"></stop>
                </linearGradient>
                <filter
                    id="filter11_i_4418_17901"
                    width="22.308"
                    height="35.846"
                    x="236.692"
                    y="50.923"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17901"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint20_linear_4418_17901"
                    x1="245.418"
                    x2="257.605"
                    y1="62.157"
                    y2="58.635"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFD76D"></stop>
                    <stop offset="1" stopColor="#FFE7AA"></stop>
                </linearGradient>
                <filter
                    id="filter12_i_4418_17901"
                    width="22.308"
                    height="35.846"
                    x="259"
                    y="50.923"
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
                    <feOffset dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="2.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_17901"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint21_linear_4418_17901"
                    x1="272.599"
                    x2="260.326"
                    y1="62.098"
                    y2="58.55"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F2C346"></stop>
                    <stop offset="1" stopColor="#FFC62F"></stop>
                </linearGradient>
                <linearGradient
                    id="paint22_linear_4418_17901"
                    x1="251.495"
                    x2="251.495"
                    y1="69.768"
                    y2="58.381"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFE9A7"></stop>
                    <stop offset="1" stopColor="#FFF3D4"></stop>
                </linearGradient>
            </defs>
            <mask
                id="mask0_4418_17901"
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
                    fill="url(#paint1_linear_4418_17901)"
                    rx="8"
                ></rect>
            </mask>
            <mask
                id="mask1_4418_17901"
                style={{ maskType: 'alpha' }}
                width="92"
                height="105"
                x="213"
                y="11"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="url(#paint10_linear_4418_17901)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </mask>
            <mask
                id="mask2_4418_17901"
                style={{ maskType: 'alpha' }}
                width="42"
                height="33"
                x="238"
                y="43"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M240.058 75.538c-1.444 0-2.308-1.604-1.514-2.81l18.943-28.74a1.812 1.812 0 013.026 0l18.943 28.74c.794 1.206-.07 2.81-1.514 2.81h-37.884z"
                    clipRule="evenodd"
                ></path>
            </mask>
            <mask
                id="mask3_4418_17901"
                style={{ maskType: 'alpha' }}
                width="42"
                height="34"
                x="238"
                y="50"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M240.058 50.923c-1.444 0-2.308 1.605-1.514 2.81l18.943 28.74a1.812 1.812 0 003.026 0l18.943-28.74c.794-1.205-.07-2.81-1.514-2.81h-37.884z"
                    clipRule="evenodd"
                ></path>
            </mask>
            <rect
                width="327"
                height="170"
                fill="url(#paint0_linear_4418_17901)"
                rx="8"
            ></rect>
            <g mask="url(#mask0_4418_17901)">
                <g filter="url(#filter0_d_4418_17901)">
                    <path
                        fill="url(#paint2_linear_4418_17901)"
                        d="M80.57 41c2.133 0 4.235.503 6.136 1.467 1.9.965 3.545 2.363 4.8 4.082l24.907 34.13a13.452 13.452 0 012.568 8.646 13.46 13.46 0 01-3.476 8.325l-63.478 69.916A13.529 13.529 0 0142 172a13.53 13.53 0 01-10.027-4.434L-31.505 97.65a13.446 13.446 0 01-.908-16.97l24.908-34.13a13.512 13.512 0 014.8-4.083A13.562 13.562 0 013.43 41h77.14zm0 11.553H3.43a1.936 1.936 0 00-1.561.793l-24.908 34.13a1.92 1.92 0 00.132 2.426l63.477 69.909a1.936 1.936 0 002.867 0l63.474-69.917a1.924 1.924 0 00.132-2.426L82.135 53.342a1.93 1.93 0 00-1.56-.793l-.005.004zM68.998 85.447a5.808 5.808 0 018.133-.349 5.764 5.764 0 01.46 8.1l-31.294 34.469a5.783 5.783 0 01-1.947 1.404 5.816 5.816 0 01-6.647-1.404L6.513 93.314a5.764 5.764 0 01.46-8.1 5.808 5.808 0 018.134.348L42 115.183l26.998-29.736z"
                        shapeRendering="crispEdges"
                    ></path>
                </g>
                <path
                    stroke="url(#paint3_linear_4418_17901)"
                    strokeWidth="2"
                    d="M72 1h120"
                ></path>
                <path
                    stroke="url(#paint4_linear_4418_17901)"
                    strokeWidth="2"
                    d="M327 5v80"
                ></path>
            </g>
            <path
                fill="url(#paint5_linear_4418_17901)"
                d="M35.632 54h-17.76l6.176-23.04h4.8l-5.152 19.2h12.96L35.632 54z"
            ></path>
            <path
                fill="url(#paint6_linear_4418_17901)"
                d="M47.337 54h-7.969l-.928-23.04h4.8l1.152 19.584L56.617 30.96h4.8L47.336 54z"
            ></path>
            <path
                fill="url(#paint7_linear_4418_17901)"
                d="M57.324 54h-4.832l1.248-4.512h4.8L57.324 54z"
            ></path>
            <path
                fill="url(#paint8_linear_4418_17901)"
                d="M68.683 54h-4.768l3.776-13.952h14.272l-.768 3.84H71.5L68.683 54zm13.312 0H70.251l1.088-3.84h11.68L81.995 54zm2.464-10.112h-4.512l2.4-9.088H68.971l1.024-3.84h18.112L84.46 43.888z"
            ></path>
            <g filter="url(#filter1_d_4418_17901)">
                <path
                    fill="url(#paint9_linear_4418_17901)"
                    d="M255 12.463a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.928L263 113.998a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928V41.311a8 8 0 014-6.928L255 12.463z"
                ></path>
            </g>
            <g mask="url(#mask1_4418_17901)">
                <path
                    stroke="url(#paint11_linear_4418_17901)"
                    strokeWidth="2"
                    d="M226.7 97.462L246.685 109"
                ></path>
                <g filter="url(#filter2_f_4418_17901)">
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
                fill="url(#paint12_linear_4418_17901)"
                stroke="url(#paint13_linear_4418_17901)"
                d="M255.25 18.28a7.5 7.5 0 017.5 0l33.303 19.228a7.501 7.501 0 013.75 6.495v38.455c0 2.68-1.43 5.156-3.75 6.495l-33.303 19.228a7.504 7.504 0 01-7.5 0l-33.303-19.228a7.501 7.501 0 01-3.75-6.495V44.003c0-2.68 1.43-5.155 3.75-6.495l33.303-19.227z"
            ></path>
            <g filter="url(#filter3_i_4418_17901)">
                <path
                    fill="url(#paint14_linear_4418_17901)"
                    d="M256 20.347a6 6 0 016 0l32.638 18.844a6 6 0 013 5.196v37.687a6 6 0 01-3 5.197L262 106.114a5.999 5.999 0 01-6 0L223.362 87.27a6 6 0 01-3-5.196V44.387a6 6 0 013-5.196L256 20.347z"
                ></path>
            </g>
            <g filter="url(#filter4_d_4418_17901)">
                <path
                    fill="url(#paint15_linear_4418_17901)"
                    d="M255 30.925a8 8 0 018 0l21.978 12.689a8 8 0 014 6.928V75.92a8 8 0 01-4 6.928L263 95.537a8 8 0 01-8 0l-21.978-12.69a8 8 0 01-4-6.927V50.542a8 8 0 014-6.928L255 30.924z"
                ></path>
            </g>
            <g filter="url(#filter5_d_4418_17901)">
                <path
                    fill="#E2A47A"
                    fillRule="evenodd"
                    d="M240.058 75.538c-1.444 0-2.308-1.604-1.514-2.81l18.943-28.74a1.812 1.812 0 013.026 0l18.943 28.74c.794 1.206-.07 2.81-1.514 2.81h-37.884z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g mask="url(#mask2_4418_17901)">
                <g filter="url(#filter6_i_4418_17901)">
                    <path
                        fill="url(#paint16_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M236.692 75.538L259 61.505l22.308 14.033h-44.616z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter7_i_4418_17901)">
                    <path
                        fill="url(#paint17_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M236.692 75.538L259 41.693v21.464l-22.308 12.383z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter8_d_4418_17901)">
                    <path
                        fill="url(#paint18_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M281.308 75.538L259 41.693v21.464l22.308 12.383z"
                        clipRule="evenodd"
                    ></path>
                </g>
            </g>
            <g filter="url(#filter9_d_4418_17901)">
                <path
                    fill="#E2A47A"
                    fillRule="evenodd"
                    d="M240.058 50.923c-1.444 0-2.308 1.605-1.514 2.81l18.943 28.74a1.812 1.812 0 003.026 0l18.943-28.74c.794-1.205-.07-2.81-1.514-2.81h-37.884z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g mask="url(#mask3_4418_17901)">
                <g filter="url(#filter10_d_4418_17901)">
                    <path
                        fill="url(#paint19_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M236.692 50.923L259 64.957l22.308-14.034h-44.616z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter11_i_4418_17901)">
                    <path
                        fill="url(#paint20_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M236.692 50.923L259 84.77V63.306l-22.308-12.383z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter12_i_4418_17901)">
                    <path
                        fill="url(#paint21_linear_4418_17901)"
                        fillRule="evenodd"
                        d="M281.308 50.923L259 84.77V63.306l22.308-12.383z"
                        clipRule="evenodd"
                    ></path>
                </g>
            </g>
            <path
                fill="url(#paint22_linear_4418_17901)"
                fillRule="evenodd"
                d="M249.895 58.176L259 71.99l9.105-13.815h-18.21z"
                clipRule="evenodd"
                opacity="0.7"
            ></path>
            <text x="18" y="86" fill="#9B731C" className="text-lg font-medium">
                {name}
            </text>
            {/* <text
                x="18"
                y="126"
                fill="#9B731C"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardUpgrade', 'vip')}
                {formatMoney(upgrade)}
            </text>
            <text
                x="18"
                y="146"
                fill="#9B731C"
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
                    <text x="7" y="13" fill="#9B731C" fontSize="10">
                        {t('vipCardCurrentLevel', 'vip')}
                    </text>
                </>
            )}
        </svg>
    );
};
