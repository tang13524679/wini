import { formatMoney } from '@/utils/common';
import { t } from '@/utils/translate';

export const VipLevel5 = ({ isCurrentLevel, name, upgrade, relegation }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 327 170"
        >
            <defs>
                <linearGradient
                    id="paint0_linear_4418_18052"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#070707"></stop>
                    <stop offset="0.379" stopColor="#363636"></stop>
                    <stop offset="1" stopColor="#101010"></stop>
                </linearGradient>
                <linearGradient
                    id="paint1_linear_4418_18052"
                    x1="0"
                    x2="347.748"
                    y1="0"
                    y2="81.873"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D0D9E6"></stop>
                    <stop offset="1" stopColor="#B0C1D8"></stop>
                </linearGradient>
                <filter
                    id="filter0_d_4418_18052"
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
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint2_linear_4418_18052"
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
                    id="paint3_linear_4418_18052"
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
                    id="paint4_linear_4418_18052"
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
                    id="paint5_linear_4418_18052"
                    x1="19.988"
                    x2="91.407"
                    y1="27"
                    y2="52.471"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EB"></stop>
                    <stop offset="1" stopColor="#F3D4A0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint6_linear_4418_18052"
                    x1="19.988"
                    x2="91.407"
                    y1="27"
                    y2="52.471"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EB"></stop>
                    <stop offset="1" stopColor="#F3D4A0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint7_linear_4418_18052"
                    x1="19.988"
                    x2="91.407"
                    y1="27"
                    y2="52.471"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EB"></stop>
                    <stop offset="1" stopColor="#F3D4A0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint8_linear_4418_18052"
                    x1="19.988"
                    x2="91.407"
                    y1="27"
                    y2="52.471"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EB"></stop>
                    <stop offset="1" stopColor="#F3D4A0"></stop>
                </linearGradient>
                <linearGradient
                    id="paint9_linear_4418_18052"
                    x1="304.385"
                    x2="294.266"
                    y1="75.538"
                    y2="89.994"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter1_d_4418_18052"
                    width="34.462"
                    height="47.538"
                    x="279.462"
                    y="8.923"
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
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint10_linear_4418_18052"
                    x1="278.231"
                    x2="297.7"
                    y1="28.808"
                    y2="51.601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF5EB"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter2_d_4418_18052"
                    width="32.923"
                    height="40.378"
                    x="288.692"
                    y="45.56"
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
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint11_linear_4418_18052"
                    x1="309.385"
                    x2="290.505"
                    y1="45.371"
                    y2="51.924"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFFDFA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter3_d_4418_18052"
                    width="30.149"
                    height="50.04"
                    x="288.692"
                    y="20.267"
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
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint12_linear_4418_18052"
                    x1="307.304"
                    x2="290.35"
                    y1="15.247"
                    y2="18.771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFFDFA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <linearGradient
                    id="paint13_linear_4418_18052"
                    x1="212.846"
                    x2="222.965"
                    y1="75.538"
                    y2="89.994"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF7EA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter4_d_4418_18052"
                    width="34.462"
                    height="47.538"
                    x="203.308"
                    y="8.923"
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
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint14_linear_4418_18052"
                    x1="239"
                    x2="219.531"
                    y1="28.808"
                    y2="51.601"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF5EB"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter5_d_4418_18052"
                    width="32.923"
                    height="40.378"
                    x="195.615"
                    y="47.56"
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
                    <feOffset dy="-2"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint15_linear_4418_18052"
                    x1="207.846"
                    x2="226.725"
                    y1="45.371"
                    y2="51.924"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFFDFA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter6_d_4418_18052"
                    width="30.149"
                    height="50.04"
                    x="198.389"
                    y="20.267"
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
                    <feOffset dy="-4"></feOffset>
                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.809894 0 0 0 0 0.679402 0 0 0 0 0.452249 0 0 0 0.479389 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint16_linear_4418_18052"
                    x1="209.927"
                    x2="226.881"
                    y1="15.247"
                    y2="18.771"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFFDFA"></stop>
                    <stop offset="1" stopColor="#FCD38C"></stop>
                </linearGradient>
                <filter
                    id="filter7_d_4418_18052"
                    width="107.932"
                    height="119.679"
                    x="204.265"
                    y="6.622"
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
                    <feColorMatrix values="0 0 0 0 0.35 0 0 0 0 0.27567 0 0 0 0 0.153125 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint17_linear_4418_18052"
                    x1="210.538"
                    x2="299"
                    y1="35.538"
                    y2="91.692"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#DFC496"></stop>
                    <stop offset="0.491" stopColor="#EFDDBE"></stop>
                    <stop offset="1" stopColor="#E0B977"></stop>
                </linearGradient>
                <linearGradient
                    id="paint18_linear_4418_18052"
                    x1="210.538"
                    x2="299"
                    y1="35.538"
                    y2="91.692"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#E0E5E9"></stop>
                    <stop offset="0.342" stopColor="#C6CDD5"></stop>
                    <stop offset="1" stopColor="#7D8A97"></stop>
                </linearGradient>
                <linearGradient
                    id="paint19_linear_4418_18052"
                    x1="225.93"
                    x2="245.908"
                    y1="96.692"
                    y2="108.243"
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
                    id="filter8_f_4418_18052"
                    width="31.768"
                    height="31.768"
                    x="222.347"
                    y="85.808"
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
                        result="effect1_foregroundBlur_4418_18052"
                        stdDeviation="5"
                    ></feGaussianBlur>
                </filter>
                <linearGradient
                    id="paint20_linear_4418_18052"
                    x1="258.231"
                    x2="258.231"
                    y1="14.769"
                    y2="110.154"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#F5E1BC"></stop>
                    <stop offset="1" stopColor="#E6D3B3"></stop>
                </linearGradient>
                <linearGradient
                    id="paint21_linear_4418_18052"
                    x1="214.385"
                    x2="300.154"
                    y1="33.615"
                    y2="87.462"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#B18D4E"></stop>
                    <stop offset="1" stopColor="#B18D4E" stopOpacity="0"></stop>
                </linearGradient>
                <filter
                    id="filter9_i_4418_18052"
                    width="79.276"
                    height="91.374"
                    x="219.593"
                    y="18.774"
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
                    <feColorMatrix values="0 0 0 0 0.504167 0 0 0 0 0.388128 0 0 0 0 0.199566 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_18052"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint22_linear_4418_18052"
                    x1="258.231"
                    x2="258.231"
                    y1="118.035"
                    y2="17.846"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#735D38"></stop>
                    <stop offset="1" stopColor="#BD9757"></stop>
                </linearGradient>
                <filter
                    id="filter10_d_4418_18052"
                    width="67.956"
                    height="75.993"
                    x="224.253"
                    y="26.465"
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
                    <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0.0546406 0 0 0 0 0.0546406 0 0 0 0 0.0546406 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint23_linear_4418_18052"
                    x1="225.696"
                    x2="225.696"
                    y1="29.641"
                    y2="94.711"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0.001" stopColor="#040404"></stop>
                    <stop offset="1" stopColor="#4A4A4A"></stop>
                </linearGradient>
                <filter
                    id="filter11_d_4418_18052"
                    width="70.769"
                    height="67.692"
                    x="222.846"
                    y="32.846"
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
                    <feGaussianBlur stdDeviation="5"></feGaussianBlur>
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint24_linear_4418_18052"
                    x1="238.446"
                    x2="276.595"
                    y1="90.663"
                    y2="90.663"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FDE1C4"></stop>
                    <stop offset="0.217" stopColor="#F5BB69"></stop>
                    <stop offset="0.514" stopColor="#FCD89E"></stop>
                    <stop offset="0.803" stopColor="#F9C171"></stop>
                    <stop offset="1" stopColor="#FDE3B8"></stop>
                </linearGradient>
                <linearGradient
                    id="paint25_linear_4418_18052"
                    x1="278.634"
                    x2="237.372"
                    y1="63.011"
                    y2="63.011"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FDF9C0"></stop>
                    <stop offset="0.559" stopColor="#F3EDA2"></stop>
                    <stop offset="1" stopColor="#FEE2B5"></stop>
                </linearGradient>
                <linearGradient
                    id="paint26_linear_4418_18052"
                    x1="279.562"
                    x2="236.737"
                    y1="48.019"
                    y2="48.019"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#EED59E"></stop>
                    <stop offset="0.149" stopColor="#E2A84D"></stop>
                    <stop offset="0.493" stopColor="#E8C679"></stop>
                    <stop offset="0.848" stopColor="#EBAC4D"></stop>
                    <stop offset="1" stopColor="#F4D39C"></stop>
                </linearGradient>
                <linearGradient
                    id="paint27_linear_4418_18052"
                    x1="258.459"
                    x2="258.459"
                    y1="35.267"
                    y2="83.822"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFF9EE"></stop>
                    <stop offset="1" stopColor="#D0A050"></stop>
                </linearGradient>
                <linearGradient
                    id="paint28_linear_4418_18052"
                    x1="270.538"
                    x2="270.538"
                    y1="46.211"
                    y2="83.231"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" stopOpacity="0.107"></stop>
                    <stop
                        offset="1"
                        stopColor="#fff"
                        stopOpacity="0.298"
                    ></stop>
                </linearGradient>
                <filter
                    id="filter12_di_4418_18052"
                    width="14.582"
                    height="9.967"
                    x="250.44"
                    y="64.132"
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
                    <feOffset dx="-1" dy="1"></feOffset>
                    <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.933333 0 0 0 0 0.843137 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_4418_18052"
                    ></feBlend>
                    <feBlend
                        in="SourceGraphic"
                        in2="effect1_dropShadow_4418_18052"
                        result="shape"
                    ></feBlend>
                    <feColorMatrix
                        in="SourceAlpha"
                        result="hardAlpha"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    ></feColorMatrix>
                    <feOffset dx="-2" dy="2"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.57849 0 0 0 0 0.379203 0 0 0 0 0.0316093 0 0 0 1 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect2_innerShadow_4418_18052"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint29_linear_4418_18052"
                    x1="252.419"
                    x2="252.202"
                    y1="62.021"
                    y2="74.078"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#C68928"></stop>
                    <stop offset="1" stopColor="#9F6400"></stop>
                </linearGradient>
                <filter
                    id="filter13_i_4418_18052"
                    width="4.615"
                    height="6.615"
                    x="232.846"
                    y="50.462"
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
                    <feOffset dy="-2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.862918 0 0 0 0 0.577489 0 0 0 0 0.125053 0 0 0 0.694573 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_18052"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint30_linear_4418_18052"
                    x1="233.977"
                    x2="238.502"
                    y1="59.34"
                    y2="57.077"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEFCB"></stop>
                    <stop offset="1" stopColor="#FEB369"></stop>
                </linearGradient>
                <filter
                    id="filter14_i_4418_18052"
                    width="4.615"
                    height="6.615"
                    x="279"
                    y="50.462"
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
                    <feOffset dy="-2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.862918 0 0 0 0 0.577489 0 0 0 0 0.125053 0 0 0 0.694573 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_18052"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint31_linear_4418_18052"
                    x1="280.131"
                    x2="284.656"
                    y1="59.34"
                    y2="57.077"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEFCB"></stop>
                    <stop offset="1" stopColor="#FEB369"></stop>
                </linearGradient>
                <filter
                    id="filter15_i_4418_18052"
                    width="7.692"
                    height="9.692"
                    x="254.385"
                    y="35.846"
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
                    <feOffset dy="-2"></feOffset>
                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                    <feComposite
                        in2="hardAlpha"
                        k2="-1"
                        k3="1"
                        operator="arithmetic"
                    ></feComposite>
                    <feColorMatrix values="0 0 0 0 0.862918 0 0 0 0 0.577489 0 0 0 0 0.125053 0 0 0 0.694573 0"></feColorMatrix>
                    <feBlend
                        in2="shape"
                        result="effect1_innerShadow_4418_18052"
                    ></feBlend>
                </filter>
                <linearGradient
                    id="paint32_linear_4418_18052"
                    x1="256.27"
                    x2="263.812"
                    y1="49.309"
                    y2="45.538"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#FFEFCB"></stop>
                    <stop offset="1" stopColor="#FEB369"></stop>
                </linearGradient>
            </defs>
            <mask
                id="mask1_4418_18052"
                style={{ maskType: 'alpha' }}
                width="93"
                height="105"
                x="212"
                y="10"
                maskUnits="userSpaceOnUse"
            >
                <path
                    fill="url(#paint18_linear_4418_18052)"
                    d="M254.231 11.694a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.927l-37.966 21.92a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928v-43.84a8 8 0 014-6.927l37.966-21.92z"
                ></path>
            </mask>
            <rect
                width="327"
                height="170"
                fill="url(#paint0_linear_4418_18052)"
                rx="8"
            ></rect>
            <rect
                width="326"
                height="169"
                x="0.5"
                y="0.5"
                stroke="#fff"
                strokeOpacity="0.1"
                rx="7.5"
            ></rect>
            <g opacity="0.2">
                <mask
                    id="mask0_4418_18052"
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
                        fill="url(#paint1_linear_4418_18052)"
                        rx="8"
                    ></rect>
                </mask>
                <g mask="url(#mask0_4418_18052)">
                    <g filter="url(#filter0_d_4418_18052)">
                        <path
                            fill="url(#paint2_linear_4418_18052)"
                            d="M80.57 41c2.133 0 4.235.503 6.136 1.467 1.9.965 3.545 2.363 4.8 4.082l24.907 34.13a13.452 13.452 0 012.568 8.646 13.46 13.46 0 01-3.476 8.325l-63.478 69.916A13.529 13.529 0 0142 172a13.53 13.53 0 01-10.027-4.434L-31.505 97.65a13.446 13.446 0 01-.908-16.97l24.908-34.13a13.512 13.512 0 014.8-4.083A13.562 13.562 0 013.43 41h77.14zm0 11.553H3.43a1.936 1.936 0 00-1.561.793l-24.908 34.13a1.92 1.92 0 00.132 2.426l63.477 69.909a1.936 1.936 0 002.867 0l63.474-69.917a1.924 1.924 0 00.132-2.426L82.135 53.342a1.93 1.93 0 00-1.56-.793l-.005.004zM68.998 85.447a5.808 5.808 0 018.133-.349 5.764 5.764 0 01.46 8.1l-31.294 34.469a5.783 5.783 0 01-1.947 1.404 5.816 5.816 0 01-6.647-1.404L6.513 93.314a5.764 5.764 0 01.46-8.1 5.808 5.808 0 018.134.348L42 115.183l26.998-29.736z"
                            shapeRendering="crispEdges"
                        ></path>
                    </g>
                    <path
                        stroke="url(#paint3_linear_4418_18052)"
                        strokeWidth="2"
                        d="M72 1h120"
                    ></path>
                    <path
                        stroke="url(#paint4_linear_4418_18052)"
                        strokeWidth="2"
                        d="M327 5v80"
                    ></path>
                </g>
            </g>
            <path
                fill="url(#paint5_linear_4418_18052)"
                d="M37.632 54h-17.76l6.176-23.04h4.8l-5.152 19.2h12.96L37.632 54z"
            ></path>
            <path
                fill="url(#paint6_linear_4418_18052)"
                d="M49.337 54h-7.969l-.928-23.04h4.8l1.152 19.584L58.617 30.96h4.8L49.336 54z"
            ></path>
            <path
                fill="url(#paint7_linear_4418_18052)"
                d="M59.324 54h-4.832l1.248-4.512h4.8L59.324 54z"
            ></path>
            <path
                fill="url(#paint8_linear_4418_18052)"
                d="M81.051 54h-14.72l1.024-3.84h12.16l2.08-7.904H69.66l3.008-11.296h17.44l-1.024 3.84H76.38l-.992 3.744h9.28l1.984 2.112L83.74 52.4 81.051 54z"
            ></path>
            <path
                fill="url(#paint9_linear_4418_18052)"
                fillRule="evenodd"
                d="M296.692 91.692V80.923h15.385c0 7.567-6.745 10.64-15.12 10.767l-.265.002z"
                clipRule="evenodd"
            ></path>
            <g filter="url(#filter1_d_4418_18052)">
                <path
                    fill="url(#paint10_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M305.923 52.462h-18.461V20.922c14.615 7.498 18.458 20.77 18.458 30.995l.003.544z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g filter="url(#filter2_d_4418_18052)">
                <path
                    fill="url(#paint11_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M296.692 81.692V70.923l16.923-13.363c0 20.286-7.256 25.67-16.684 24.13l-.239.002z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g filter="url(#filter3_d_4418_18052)">
                <path
                    fill="url(#paint12_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M296.692 66.308v-10.77l10.436-23.27c8.795 25.578.178 33.143-7.359 33.27l-3.077.77z"
                    clipRule="evenodd"
                ></path>
            </g>
            <path
                fill="url(#paint13_linear_4418_18052)"
                fillRule="evenodd"
                d="M220.538 91.692V80.923h-15.384c0 7.567 6.745 10.64 15.119 10.767l.265.002z"
                clipRule="evenodd"
            ></path>
            <g filter="url(#filter4_d_4418_18052)">
                <path
                    fill="url(#paint14_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M211.308 52.462h18.461V20.922c-14.615 7.498-18.458 20.77-18.458 30.995l-.003.544z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g filter="url(#filter5_d_4418_18052)">
                <path
                    fill="url(#paint15_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M220.538 81.692V70.923L203.615 57.56c0 20.286 7.257 25.67 16.685 24.13l.238.002z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g filter="url(#filter6_d_4418_18052)">
                <path
                    fill="url(#paint16_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M220.538 66.308v-10.77l-10.435-23.27c-8.795 25.578-.178 33.143 7.359 33.27l3.076.77z"
                    clipRule="evenodd"
                ></path>
            </g>
            <g filter="url(#filter7_d_4418_18052)">
                <path
                    fill="url(#paint17_linear_4418_18052)"
                    d="M254.231 11.694a8 8 0 018 0l37.966 21.92a8 8 0 014 6.928v43.84a8 8 0 01-4 6.927l-37.966 21.92a8 8 0 01-8 0l-37.966-21.92a8 8 0 01-4-6.928v-43.84a8 8 0 014-6.927l37.966-21.92z"
                ></path>
            </g>
            <g mask="url(#mask1_4418_18052)">
                <path
                    stroke="url(#paint19_linear_4418_18052)"
                    strokeWidth="2"
                    d="M225.93 96.692l19.986 11.539"
                ></path>
                <g filter="url(#filter8_f_4418_18052)">
                    <ellipse
                        cx="238.231"
                        cy="101.692"
                        fill="#fff"
                        fillOpacity="0.6"
                        rx="4.615"
                        ry="6.923"
                        transform="rotate(-45 238.231 101.692)"
                    ></ellipse>
                </g>
            </g>
            <path
                fill="url(#paint20_linear_4418_18052)"
                stroke="url(#paint21_linear_4418_18052)"
                d="M254.481 17.512a7.5 7.5 0 017.5 0l33.303 19.227a7.501 7.501 0 013.75 6.495V81.69c0 2.68-1.43 5.155-3.75 6.495l-33.303 19.227a7.499 7.499 0 01-7.5 0l-33.303-19.227a7.501 7.501 0 01-3.75-6.495V43.234c0-2.68 1.43-5.155 3.75-6.495l33.303-19.227z"
            ></path>
            <g filter="url(#filter9_i_4418_18052)">
                <path
                    fill="url(#paint22_linear_4418_18052)"
                    d="M255.231 19.578a6 6 0 016 0l32.638 18.844a6 6 0 013 5.196v37.687a6 6 0 01-3 5.196l-32.638 18.844a5.999 5.999 0 01-6 0l-32.638-18.844a5.999 5.999 0 01-3-5.196V43.618a5.999 5.999 0 013-5.196l32.638-18.844z"
                ></path>
            </g>
            <g filter="url(#filter10_d_4418_18052)">
                <path
                    fill="url(#paint23_linear_4418_18052)"
                    d="M256.231 29a4 4 0 014 0l25.978 15c1.237.714 2 2.034 2 3.463V77.46c0 1.429-.763 2.75-2 3.464l-25.978 14.998a4 4 0 01-4 0l-25.978-14.998a4 4 0 01-2-3.464V47.463a4 4 0 012-3.464l25.978-14.998z"
                ></path>
            </g>
            <g filter="url(#filter11_d_4418_18052)">
                <path
                    fill="url(#paint24_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M235.119 57.055c-.313-1.573 1.259-2.855 2.737-2.234l6.948 2.922a2 2 0 002.448-.747l9.368-14.29a2 2 0 013.345 0l9.369 14.29a2 2 0 002.448.747l6.947-2.922c1.478-.621 3.05.661 2.737 2.234l-4.356 21.917c-.32 1.606-1.285 3.012-2.793 3.65-2.83 1.2-8.243 2.916-16.024 2.916-7.782 0-13.195-1.717-16.025-2.915-1.508-.639-2.473-2.045-2.793-3.651l-4.356-21.917z"
                    clipRule="evenodd"
                ></path>
                <mask
                    id="mask2_4418_18052"
                    style={{ maskType: 'alpha' }}
                    width="47"
                    height="45"
                    x="235"
                    y="41"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M235.119 57.055c-.313-1.573 1.259-2.855 2.737-2.234l6.948 2.922a2 2 0 002.448-.747l9.368-14.29a2 2 0 013.345 0l9.369 14.29a2 2 0 002.448.747l6.947-2.922c1.478-.621 3.05.661 2.737 2.234l-4.356 21.917c-.32 1.606-1.285 3.012-2.793 3.65-2.83 1.2-8.243 2.916-16.024 2.916-7.782 0-13.195-1.717-16.025-2.915-1.508-.639-2.473-2.045-2.793-3.651l-4.356-21.917z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask2_4418_18052)">
                    <path
                        fill="url(#paint25_linear_4418_18052)"
                        fillRule="evenodd"
                        d="M298.223 40.154c-.41 21.736-18.158 39.23-39.992 39.23-21.835 0-39.583-17.494-39.993-39.23-.005.256-.007.512-.007.77 0 22.09 17.908 40 40 40 22.091 0 40-17.91 40-40 0-.258-.003-.514-.008-.77z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <path
                    fill="url(#paint26_linear_4418_18052)"
                    fillRule="evenodd"
                    d="M238.528 74.203l-3.409-17.148c-.313-1.573 1.259-2.855 2.737-2.234l6.948 2.922a2 2 0 002.448-.747l9.368-14.29a2 2 0 013.345 0l9.369 14.29a2 2 0 002.448.747l6.947-2.922c1.478-.621 3.05.661 2.737 2.234l-3.393 17.069a39.812 39.812 0 01-19.842 5.26 39.813 39.813 0 01-19.703-5.18z"
                    clipRule="evenodd"
                ></path>
                <mask
                    id="mask3_4418_18052"
                    style={{ maskType: 'alpha' }}
                    width="47"
                    height="39"
                    x="235"
                    y="41"
                    maskUnits="userSpaceOnUse"
                >
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M238.528 74.203l-3.409-17.148c-.313-1.573 1.259-2.855 2.737-2.234l6.948 2.922a2 2 0 002.448-.747l9.368-14.29a2 2 0 013.345 0l9.369 14.29a2 2 0 002.448.747l6.947-2.922c1.478-.621 3.05.661 2.737 2.234l-3.393 17.069a39.812 39.812 0 01-19.842 5.26 39.813 39.813 0 01-19.703-5.18z"
                        clipRule="evenodd"
                    ></path>
                </mask>
                <g mask="url(#mask3_4418_18052)">
                    <path
                        fill="#fff"
                        fillRule="evenodd"
                        d="M234.385 47.077l16.099 33.846-18.407-4.615 2.308-29.231z"
                        clipRule="evenodd"
                        opacity="0.2"
                    ></path>
                    <path
                        fill="url(#paint27_linear_4418_18052)"
                        d="M258.081 35.267H284.235V85.267H258.081z"
                    ></path>
                    <path
                        fill="url(#paint28_linear_4418_18052)"
                        fillRule="evenodd"
                        d="M271.158 53.23l-.62 30 11.663-37.02-11.043 7.02z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter12_di_4418_18052)" opacity="0.6">
                    <path
                        fill="url(#paint29_linear_4418_18052)"
                        fillRule="evenodd"
                        d="M258.231 73.095a2.302 2.302 0 01-1.764-.672l-4.351-4.352a2.307 2.307 0 113.263-3.264l2.852 2.852 2.851-2.851a2.308 2.308 0 013.264 3.263l-4.351 4.352a2.303 2.303 0 01-1.764.672z"
                        clipRule="evenodd"
                    ></path>
                </g>
                <g filter="url(#filter13_i_4418_18052)">
                    <circle
                        cx="235.154"
                        cy="54.769"
                        r="2.308"
                        fill="url(#paint30_linear_4418_18052)"
                    ></circle>
                </g>
                <g filter="url(#filter14_i_4418_18052)">
                    <circle
                        cx="281.308"
                        cy="54.769"
                        r="2.308"
                        fill="url(#paint31_linear_4418_18052)"
                    ></circle>
                </g>
                <g filter="url(#filter15_i_4418_18052)">
                    <ellipse
                        cx="258.231"
                        cy="41.692"
                        fill="url(#paint32_linear_4418_18052)"
                        rx="3.846"
                        ry="3.846"
                    ></ellipse>
                </g>
            </g>
            <text x="18" y="86" fill="#F3D4A0" className="text-lg font-medium">
                {name}
            </text>
            {/* <text
                x="18"
                y="126"
                fill="#F3D4A0"
                fillOpacity="0.6"
                className="text-xs"
            >
                {t('vipCardUpgrade', 'vip')}
                {formatMoney(upgrade)}
            </text>
            <text
                x="18"
                y="146"
                fill="#F3D4A0"
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
                    <text x="7" y="13" fill="#F3D4A0" fontSize="10">
                        {t('vipCardCurrentLevel', 'vip')}
                    </text>
                </>
            )}
        </svg>
    );
};
