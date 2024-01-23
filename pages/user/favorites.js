import react, { useState, useEffect, useRef, useMemo } from "react";
import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { userApi } from "@/requests/frontend";
import FadeInImage from "@/components/fadein-image";
import { useGlobalState } from "@/hooks/global";
import { message } from "antd";
import { Toast } from "antd-mobile";
import { requestApi } from "@/utils/common";
import PageLoading from "@/components/page-loading";
import { useCollectedGames } from "@/hooks/user";
import {
  play,
  getGameImg,
  getGameName,
  getProviderName,
  getGameTypeName,
} from "@/utils/common";
import EmptyPage from "@/components/empty-page";
import { useSWRConfig } from "swr";
import NavBar from "@/components/h5/components/nav-bar";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { InfiniteScroll } from "antd-mobile";
import useWindowSize from "@/hooks/useWindowSize";
const Image = dynamic(() => import("next/image"));
const Loading = dynamic(() =>
  import("@/components/h5/components/loading-mobile")
);

export default function FavoritesPage() {
  useAuth("/user/favorites");
  const router = useRouter();
  const isMobile = useWindowSize();
  const [isLoading, setIsLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(15);
  const [hasMore, setHasMore] = useState(true);
  const { mutate } = useSWRConfig();
  const [{ user, lang }, dispatch] = useGlobalState();
  // const favorites = useCollectedGames();

  const loadMore = async (param) => {
    try {
      setIsLoading(true);
      const res = await userApi.postUserGameListPage({
        employeecode: user.employeecode,
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setFavorites((val) => [...val, ...res.info?.rows]);
        setHasMore(res.info?.rows.length > 0);
        setPageIndex(pageIndex + 1);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickHandle = (item) => {
    if (!user) return (location.href = "/login");
    if (isMobile == "mobile") {
      const { id, gametype, biggametype, gameid, cnname, enname } = item;
      router.push(
        `/play-game?id=${id}&gametype=${gametype}&biggametype=${biggametype}&gameid=${gameid}&title=${
          lang == "en" ? enname : cnname
        }&isFavorites=${true}`
      );
    } else {
      play(item, dispatch);
    }
  };

  const cancelHandle = async (id) => {
    try {
      const res = await userApi.doDelete({
        id: id,
        employeecode: user.employeecode,
      });
      if (res.code == "1") {
        const newFavorites = favorites.filter((item) => item.id != id);
        setFavorites(newFavorites);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    }
  };

  return (
    <InnerPageLayout>
      <Head>
        <title>Favorites - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="最喜欢的" />
          <>
            <div className="my-4 clWhite30" style={{ color: "#fff" }}>
              {`${t("favorites", "nav")} ${favorites.length} ${t("items")}`}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 pb-6">
              {favorites.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between sm:pr-6"
                >
                  <div
                    className="flex-none w-16 h-16 bgPlaceholder rounded-md overflow-hidden relative"
                    onClick={() => {
                      onClickHandle(item);
                    }}
                  >
                    {/* <Image
                        src={`/assets/home/DZgame/${item.gametype.replace(
                          "Game",
                          ""
                        )}/${item.gameid}${
                          item.gametype == "YGRGame"
                            ? `_200x200_01_${lang == "en" ? "en" : "cn"}.png`
                            : item.gametype == "AMEBAGame"
                            ? `${lang == "en" ? "_enUS" : "_zhCN"}.png`
                            : ".png"
                        }`}
                        width={200}
                        height={200}
                      /> */}
                    <img
                      src={`/assets/home/DZgame/${item.gametype.replace(
                        "Game",
                        ""
                      )}/${item.gameid}${
                        item.gametype == "YGRGame"
                          ? `_200x200_01_${lang == "en" ? "en" : "cn"}.png`
                          : item.gametype == "AMEBAGame"
                          ? `${lang == "en" ? "_enUS" : "_zhCN"}.png`
                          : ".png"
                      }`}
                    />
                    {/* <FadeInImage
                        src={getGameImg(item)}
                        className="transition-all duration-500 hover:scale-110"
                        onClick={() => {
                          play(item, dispatch);
                        }}
                      /> */}
                  </div>
                  <div
                    className="flex-auto ml-3"
                    onClick={() => {
                      onClickHandle(item);
                    }}
                  >
                    <div className="line-clamp-1 clWhite text-base">
                      {getGameName(lang, item)}
                    </div>
                    <div className="clWhite30 uppercase">
                      {getGameTypeName(item)}
                    </div>
                    <div className="tag inline-block">
                      {getProviderName(item)}
                    </div>
                  </div>
                  <div
                    className="bgWhite20 clWhite px-4 py-2 rounded-full hoverMainBg text-xs capitalize text-center"
                    style={{ minWidth: 85 }}
                    onClick={() => {
                      cancelHandle(item.id);
                    }}
                  >
                    {t("unLike")}
                  </div>
                </div>
              ))}
              <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
            </div>
          </>
        </div>
        {isLoading && <Loading />}
      </div>
    </InnerPageLayout>
  );
}
