import Image from "next/image";

import FadeInImage from "@/components/fadein-image";
import { formatMoney } from "@/utils/common";
import { t } from "@/utils/translate";

export default function VipUserProgress({
  level,
  percentage,
  currentAmount,
  nextAmount,
}) {
  const _currentLevel =
    typeof level === "number" ? (
      <Image
        src={`/assets/vip-levels/${level}.png`}
        alt="icon"
        width="34"
        height="34"
      />
    ) : (
      <div className="h-3 w-8 bgWhite20 animate-pulse rounded" />
    );
  const _nextLevel =
    typeof level === "number" ? (
      level < 12 && (
        <Image
          src={`/assets/vip-levels/${level + 1}.png`}
          alt="icon"
          width="34"
          height="34"
        />
      )
    ) : (
      <div className="h-3 w-8 bgWhite20 animate-pulse rounded" />
    );

  return (
    <div className="bgVipLightBlue mt-4 rounded-lg pl-4 pr-4 md:pr-0 pb-4 md:pb-0 flex flex-col-reverse md:flex-row items-center">
      <div className="mt-4 md:mt-0 w-full md:w-1/2 xl:w-[500px]">
        {/* Progress percentage as text */}
        <div className="flex items-center justify-between text-lg clWhite">
          <span>{t("vipProgress", "vip")}</span>
          {percentage ? (
            <span>{percentage}</span>
          ) : (
            <div className="h-3 w-8 bgWhite20 animate-pulse rounded" />
          )}
        </div>

        {/* Progress bar */}
        <div className="mt-4 h-1.5 bg-white/10 rounded-md overflow-hidden relative">
          <div
            className="bgMainYellow absolute top-0 left-0 h-1.5 rounded-md"
            style={{ width: percentage }}
          />
        </div>

        {/* VIP Level icons */}
        <div className="min-h-[34px] flex items-center justify-between">
          {_currentLevel}
          {_nextLevel}
        </div>

        {/* Current flow */}
        <div className="mt-4 flex justify-between text-xs">
          <span className="clWhite70">
            {t("currentFlowLabel", "vip")} (VND)
          </span>
          <span className="space-x-1">
            <span className="clWhite">{formatMoney(currentAmount ?? 0)}</span>
            <span className="clWhite30">/ {formatMoney(nextAmount ?? 0)}</span>
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="relative h-48 w-48 lg:h-[230px] lg:w-[230px] md:-mr-8 md:-mt-4 md:-mb-6">
          <FadeInImage src="/assets/vip_jindu_dz.png" />
        </div>
      </div>
    </div>
  );
}
