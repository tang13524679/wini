import { Modal } from "antd";
import Head from "next/head";
import Image from "next/image";
import qs from "query-string";
import { useMemo } from "react";
import useSWR from "swr";

import InnerPageTitle from "@/components/inner-page-title";
import VipCardsBanner from "@/components/vip-cards-banner";
import VipUserProgress from "@/components/vip-user-progress";
import { useGlobalState } from "@/hooks/global";
import InnerPageLayout from "@/layouts/inner-page";
import { formatMoney } from "@/utils/common";
import { ENTERPRISE_CODE } from "@/utils/const";
import { t } from "@/utils/translate";
import NavBar from "@/components/h5/components/nav-bar";
import { encryptECB, encryptMD5 } from "@/utils/encrypt";

export default function VipClubPage() {
  const [{ user }] = useGlobalState();
  const { data: userVip } = useSWR(
    user && [
      "/ecrm-api/vipController/getUserVip",
      qs.stringify({
        enterprisecode: ENTERPRISE_CODE,
        params: encryptECB({ enterprisecode: ENTERPRISE_CODE }),
        signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE }),
      }),
    ]
  );
  const { data: vipInfos } = useSWR([
    "/ecrm-api/vipController/getVipInfo",
    qs.stringify({
      enterprisecode: ENTERPRISE_CODE,
      params: encryptECB({ enterprisecode: ENTERPRISE_CODE }),
      signature: encryptMD5({ enterprisecode: ENTERPRISE_CODE }),
    }),
  ]);

  // restructure rebates table data
  const rebatesData = useMemo(
    () =>
      vipInfos?.info.bonusInfos.reduce((a, { bonus }, i) => {
        const keys = Object.keys(bonus);

        // add placeholder values for each game types
        keys
          .filter((key) => !Object.prototype.hasOwnProperty.call(a, key))
          .forEach((key) => (a[key] = Array(12).fill("-")));

        // replace placeholder values with actual values
        keys.forEach((key) => (a[key][i] = bonus[key]));
        console.log(a, "ss");
        return a;
      }, {}),
    [vipInfos?.info.bonusInfos]
  );

  // current and next level icons
  const currentLevel = userVip?.info.currentLevel;
  const process = currentLevel === 5 ? "100%" : userVip?.info.process;

  return (
    <InnerPageLayout>
      <Head>
        <title>VIP Club - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="贵宾俱乐部" />
          {/* <InnerPageTitle title={t('vipClub', 'nav')} /> */}

          {/* VIP Progress summary */}
          {user && (
            <VipUserProgress
              level={currentLevel}
              percentage={process}
              currentAmount={userVip?.info.currentAmount}
              nextAmount={userVip?.info.nextAmount}
            />
          )}

          {/* VIP Levels */}
          <div className={user ? "mt-9" : "mt-4"}>
            <div className="flex items-center justify-between">
              <span className="clWhite text-base">
                {t("vipLevelLabel", "vip")}
              </span>
              <button
                className="clWhite70 text-sm flex items-center space-x-1 cursor-pointer transition hover:opacity-80"
                onClick={() => {
                  const items = t("vipLevelDialogItems", "vip").map((item) => (
                    <li key={item}>{item}</li>
                  ));

                  Modal.info({
                    title: t("vipLevelDialogTitle", "vip"),
                    content: <ol className="app-ol">{items}</ol>,
                    centered: true,
                  });
                }}
              >
                <span>{t("moreInfoLabel", "vip")}</span>
                <span className="icon-question inline-block" />
              </button>
            </div>

            {/* VIP Levels Slider */}
            <VipCardsBanner
              className="mt-4"
              level={currentLevel}
              vipInfos={vipInfos}
            />
          </div>

          {/* Daily Rebates Table */}
          {/* <div className="mt-9">
            <div className="flex items-center justify-between">
              <span className="clWhite text-base">
                {t("rebatesLabel", "vip")}
              </span>
              <button
                className="clWhite70 text-sm flex items-center space-x-1 cursor-pointer transition hover:opacity-80"
                onClick={() => {
                  const items = t("rebatesDialogItems", "vip").map((item) => (
                    <li key={item}>{item}</li>
                  ));

                  Modal.info({
                    title: t("rebatesDialogTitle", "vip"),
                    content: <ol className="app-ol">{items}</ol>,
                    centered: true,
                  });
                }}
              >
                <span>{t("moreInfoLabel", "vip")}</span>
                <span className="icon-question inline-block" />
              </button>
            </div>
            <div className="max-w-[100vw] overflow-y-auto">
              <table className="mt-3 app-table">
                <thead>
                  <tr>
                    <th>{t("gameTypeLabel", "vip")}</th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/1.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/2.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/3.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/5.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/5.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/6.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/7.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/8.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/9.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/10.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/11.png"
                        width="62"
                        height="41"
                      />
                    </th>
                    <th>
                      <Image
                        className="translate-y-1"
                        src="/assets/vip-levels/12.png"
                        width="62"
                        height="41"
                      />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rebatesData &&
                    Object.keys(rebatesData).map((key) => (
                      <tr key={key}>
                        <th>{t("rebatesGameTypes", "vip")[key]}</th>
                        {rebatesData[key].reverse().map((v, i) => (
                          <td key={i}>{v}</td>
                        ))}
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div> */}

          {/* Special Bonus Table */}
          {/* <div className="mt-9">
            <div className="flex items-center justify-between">
              <span className="clWhite text-base">
                {t("specialBonusLabel", "vip")}
              </span>
            </div>
            <div className="max-w-[100vw] overflow-y-auto">
              <VipSpecialRewardsTable vipInfos={vipInfos} />
            </div>
          </div> */}

          {/* Terms and Conditions */}
          <div className="mt-9 pb-9">
            <div className="text-base flex justify-between">
              <span className="clWhite">{t("conditionsHeading", "vip")}</span>
            </div>
            <ol className="mt-3 app-ol space-y-4">
              {t("conditions", "vip").map((item) => (
                <li
                  key={item}
                  className="breakWord"
                  style={{ color: "rgb(113 113 113)" }}
                >
                  {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </InnerPageLayout>
  );
}

function VipSpecialRewardsTable({ vipInfos }) {
  // collect vip codes for each vip level
  const vipCodes = vipInfos?.info.vipInfos
    .filter(({ vipLevel }) => vipLevel >= 1 && vipLevel <= 12)
    .map(({ vipCode }) => vipCode);
  const specialRewards = vipInfos?.info.specialBonusInfos
    .filter(({ vipCode }) => vipCodes.includes(vipCode))
    .reduce(
      (a, { vipCode, bonus, uplimit }) => ({
        ...a,
        [vipCode]: { bonus, uplimit },
      }),
      {}
    );

  return (
    <table className="mt-3 app-table">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/1.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/2.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/3.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/5.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/5.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/6.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/7.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/8.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/9.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/10.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/11.png"
              width="62"
              height="41"
            />
          </th>
          <th>
            <Image
              className="translate-y-1"
              src="/assets/vip-levels/12.png"
              width="62"
              height="41"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        {vipInfos ? (
          <>
            <tr>
              <th>{t("bonusProportion", "vip")}</th>
              {vipCodes.reverse().map((code) => (
                <td style={{ minWidth: "68px" }} key={code}>
                  {specialRewards[code]?.bonus ?? "-"}
                </td>
              ))}
            </tr>
            <tr>
              <th>{t("bonusMaxLimit", "vip")}</th>
              {vipCodes.map((code) => (
                <td key={code}>
                  {specialRewards[code]
                    ? formatMoney(specialRewards[code].uplimit)
                    : "-"}
                </td>
              ))}
            </tr>
          </>
        ) : (
          <tr>
            <td colSpan={6}>{t("loading")}...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
