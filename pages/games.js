import { useState, useEffect, useReducer } from "react";
import MainLayout from "@/layouts/main";
import Head from "next/head";
import {
  GAME_ENTRIES,
  GAME_TYPES,
  PROVIDERS,
  providerMap,
} from "@/utils/const";
import { useGlobalState } from "@/hooks/global";
import qs from "query-string";
import { useRouter } from "next/router";
import { gameApi } from "@/requests/frontend";
import { play } from "@/utils/common";
import Loading from "@/components/loading";
import LoadingNoMore from "@/components/loading-nomore";
import InfiniteScroll from "react-infinite-scroll-component";
import GameCard from "@/components/game-card";
import HotGameRanking from "@/components/HotGameRanking";
import { useCollectedGames } from "@/hooks/user";

let start = 1;
let limit = 30;
let filter = {
  activeGroup: "HOT",
  biggametype: "",
  gametype: "",
};

// const resourceUrl = 'http://103.164.81.205:7078'
const resourceUrl = "assets/third";

function getEntry(type, provider) {
  let arr = GAME_ENTRIES.filter((item) => {
    if (type === "HOT") {
      return item.isHot && item.provider === provider;
    } else {
      return item.biggametype === type && item.provider === provider;
    }
  });
  return arr[0];
}
function getProviderValue(provider) {
  let arr = PROVIDERS.filter((item) => item.label === provider);
  return arr[0]["value"];
}

export default function GamesPage() {
  const [{ lang }, dispatch] = useGlobalState();
  const favorites = useCollectedGames();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);
  const router = useRouter();
  const [activeGroup, setActiveGroup] = useState("HOT");
  const [providers, setProviders] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [list, setList] = useState([]);

  async function fetchData() {
    const rst = await gameApi.gameList({
      pageIndex: start,
      pageSize: limit,
      ...filter,
    });
    const append = rst.info.rows;

    setList((val) => [...val, ...append]);
    setHasMore(append.length > 0 && append.length === limit);
  }

  function loadMore() {
    start++;
    fetchData();
  }

  function onClick(provider) {
    let entry = getEntry(activeGroup, provider);
    if (entry) {
      play(entry, dispatch);
    } else {
      start = 1;
      filter.biggametype = activeGroup;
      filter.gametype = getProviderValue(provider);
      fetchData();
    }
  }

  function getProviderList() {
    if (filter.activeGroup === "HOT") {
      return (
        <HotGameRanking gridCols="grid gap-4 grid-cols-3 sm:grid-cols-6" />
      );
    }
    return (
      <div className={`grid gap-4 grid-cols-1 sm:grid-cols-4`}>
        {console.log(providers)}
        {providers.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              onClick(item);
            }}
          >
            <img
              className="transition-all hover:-translate-y-2 cursor-pointer"
              src={`${resourceUrl}/games/${filter.activeGroup}/${item}.png`}
            />
          </div>
        ))}
      </div>
    );
  }

  function setActive(gameType) {
    setList([]);
    if (gameType) {
      filter.activeGroup = gameType;
      if (gameType === "HOT") {
        filter.biggametype = "";
      } else {
        filter.biggametype = gameType;
      }
      setActiveGroup(gameType);
      setProviders(providerMap[gameType]);
    }
  }

  useEffect(() => {
    const { query } = qs.parseUrl(router.asPath);
    if (query.group) {
      setActive(query.group);
    }
    return () => {
      start = 1;
      filter = {
        activeGroup: "HOT",
        biggametype: "",
      };
      setList([]);
    };
  }, []);

  // use for favorites
  useEffect(() => {
    forceUpdate();
  }, [favorites]);

  return (
    <MainLayout>
      <Head>
        <title>Games - WIN</title>
      </Head>
      <div className="px-4" style={{ height: "50vh" }}>
        <div className="flex sm:flex-col justify-between">
          <div className="flex-none games-nav sm:w-full overflow-auto py-4 sticky top-0 z-20 bgPage">
            <div className="flex flex-wrap gap-2">
              <div
                className={`menu flex flex-col items-center ${
                  activeGroup === "HOT" ? "active" : ""
                }`}
                onClick={() => {
                  setActive("HOT");
                }}
              >
                <div className="icon-hot w-8 h-8" />
                <div className="title">HOT</div>
              </div>
              {GAME_TYPES(lang).map((item, index) => (
                <div
                  key={index}
                  className={`menu flex flex-col items-center transition-all duration-500 sm:hover:scale-110 ${
                    activeGroup === item.value ? "active" : ""
                  }`}
                  onClick={() => {
                    setActive(item.value);
                  }}
                >
                  <div className={`${item.icon} w-8 h-8`} />
                  <div className="title line-clamp-1">{item.label}</div>
                </div>
              ))}
              <div className="h-32 sm:hidden" />
            </div>
          </div>
          <div className="flex-auto games-list pl-4 sm:pl-0 py-4 overflow-auto">
            {list.length === 0 && getProviderList()}
            {list.length > 0 && (
              <InfiniteScroll
                scrollableTarget="scrollableDiv"
                dataLength={list.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<Loading />}
                endMessage={<LoadingNoMore />}
              >
                <div>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-x-3 gap-y-6">
                    {list.map((item, index) => (
                      <GameCard key={index} type="egame" game={item} />
                    ))}
                  </div>
                </div>
              </InfiniteScroll>
            )}
            <div className="h-32 sm:hidden" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
