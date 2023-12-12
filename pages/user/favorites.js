import Head from "next/head";
import InnerPageLayout from "@/layouts/inner-page";
import InnerPageTitle from "@/components/inner-page-title";
import { useAuth } from "@/hooks/user";
import { t } from "@/utils/translate";
import { userApi } from "@/requests/frontend";
import FadeInImage from "@/components/fadein-image";
import { useGlobalState } from "@/hooks/global";
import { message } from "antd";
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

export default function FavoritesPage() {
  useAuth("/user/favorites");
  const { mutate } = useSWRConfig();
  const [{ lang }, dispatch] = useGlobalState();
  const favorites = useCollectedGames();

  return (
    <InnerPageLayout>
      <Head>
        <title>Favorites - WIN</title>
      </Head>
      <div className="sm:px-4">
        <div className="bgInnerPage">
          <NavBar title="最喜欢的" />
          {/* <InnerPageTitle title={t("favorites", "nav")} /> */}
          {!favorites && <PageLoading />}
          {favorites && favorites.length === 0 && <EmptyPage />}
          {favorites && favorites.length > 0 && (
            <>
              <div className="my-4 clWhite30">
                {`${t("favorites", "nav")} ${favorites.length} ${t("items")}`}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 pb-6">
                {favorites.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between sm:pr-6"
                  >
                    <div className="flex-none w-16 h-16 bgPlaceholder rounded-md overflow-hidden relative">
                      <FadeInImage
                        src={getGameImg(item)}
                        className="transition-all duration-500 hover:scale-110"
                        onClick={() => {
                          play(item, dispatch);
                        }}
                      />
                    </div>
                    <div className="flex-auto ml-3">
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
                        requestApi(
                          dispatch,
                          async () => {
                            await userApi.unCollectGame({
                              gameid: item.gameId,
                            });
                          },
                          async () => {
                            await mutate("/api/v1/Post/postUserGameList");
                            message.error(t("success"));
                          }
                        );
                      }}
                    >
                      {t("unLike")}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </InnerPageLayout>
  );
}
