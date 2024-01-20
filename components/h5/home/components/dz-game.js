import react, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./dz-game.module.scss";
import { getGameList } from "@/requests/frontend/home";
import { userApi } from "@/requests/frontend";
import { Toast, Swiper } from "antd-mobile";
import { Input } from "antd";
import {
  SearchOutlined,
  DoubleLeftOutlined,
  StarFilled,
} from "@ant-design/icons";
import debounce from "@/utils/debounce";
import { InfiniteScroll } from "antd-mobile";
import { play } from "@/utils/common";
import { useGlobalState } from "@/hooks/global";
import Image from "next/image";
import { SpinLoading } from "antd-mobile";
import { t } from "@/utils/translate";
import { useRouter } from "next/router";
import useWindowSize from "@/hooks/useWindowSize";

const DZgame = () => {
  const isMobile = useWindowSize();
  const router = useRouter();
  const ref = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [{ user, lang }, dispatch] = useGlobalState();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [leftPageSize, setleftPageSize] = useState(50);
  const [ismain, setIsmain] = useState(1);
  const [ishot, setIshot] = useState(0);
  const [isnew, setIsnew] = useState(0);
  const [gamelist, setGamelist] = useState([]);
  const [gameTotal, setGameTotal] = useState([]);
  const [gameType, setGameType] = useState("all");
  const [gameCategory, setGameCategory] = useState("");
  const [inputValue, seInputValue] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [islist, setIslist] = useState("true");
  const [categoryInfo, setCategoryInfo] = useState({});

  useEffect(async () => {
    setIsLoading(true);
    try {
      const res = await getGameList({
        ismain: 0,
        biggametype: "DZ",
        pageIndex,
        pageSize: leftPageSize,
      });
      if (res.code == "1") {
        setGameTotal(res.info?.rows);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const gameTypeList = useMemo(() => {
    const newMap = new Map();
    gameTotal.forEach((item) => {
      newMap.set(item.gametype, item);
    });
    const newGameTypeList = [...newMap.values()];
    return newGameTypeList;
  }, [gameTotal]);

  const inputval = debounce(
    () => {
      setPageIndex(1);
      setHasMore(true);
      setGamelist([]);
    },
    2000,
    seInputValue
  );

  const loadMore = async (param) => {
    try {
      setIsLoading(true);
      const res = await getGameList(
        gameType == "all"
          ? {
              ismain,
              biggametype: "DZ",
              cnname: inputValue,
              gametype: gameCategory,
              pageIndex,
              pageSize,
            }
          : gameType == "hot"
          ? {
              ismain,
              biggametype: "DZ",
              cnname: inputValue,
              gametype: gameCategory,
              ishot,
              pageIndex,
              pageSize,
            }
          : {
              ismain,
              biggametype: "DZ",
              cnname: inputValue,
              gametype: gameCategory,
              isnew,
              pageIndex,
              pageSize,
            }
      );
      if (res.code == "1") {
        setGamelist((val) => [...val, ...res.info?.rows]);
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
        }`
      );
    } else {
      play(item, dispatch);
    }
  };

  const collectionHandle = async (id, favourite) => {
    if (favourite == "1") {
      const res = await userApi.doDelete({ id });
      if (res.code == "1") {
        loadMore();
      }
    } else {
      const res = await userApi.addUserPost({ id });
      if (res.code == "1") {
        loadMore();
      }
    }
  };

  return (
    <div className={styles.dzGameBox}>
      <div className="top">
        <Input
          placeholder={t("searchGames")}
          suffix={
            <SearchOutlined
              style={{ fontSize: "18px", color: "rgb(50, 144, 41)" }}
            />
          }
          onChange={(e) => inputval(e)}
          value={inputValue}
        />
      </div>
      <div className="list-box">
        <div className="left">
          {gameTypeList.length < 5 && (
            <div className="catList">
              {gameTypeList.map((item) => {
                return (
                  <div className="item">
                    <div
                      className={`${
                        gameCategory == item.gametype ? "active" : ""
                      } content`}
                      onClick={() => {
                        setIslist(item.islist);
                        setCategoryInfo(item);
                        setGameCategory(item.gametype);
                        setGameType("all");
                        setPageIndex(1);
                        seInputValue("");
                        setIshot(0);
                        setIsnew(0);
                        setHasMore(true);
                        setGamelist([]);
                      }}
                    >
                      <div className="box">
                        <img
                          src={`/assets/home/gametype/${item.gametype.replace(
                            "Game",
                            ""
                          )}.png`}
                        />
                        <div className="text">
                          {item.gametype.replace("Game", "")}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {gameTypeList.length > 5 && (
            <div>
              <Swiper
                direction="vertical"
                trackOffset={0}
                slideSize={20}
                indicator={() => false}
                ref={ref}
                style={{ "--height": "400px" }}
              >
                {gameTypeList.map((item) => {
                  return (
                    <Swiper.Item key={item.id}>
                      <div
                        className={`${
                          gameCategory == item.gametype ? "active" : ""
                        } content`}
                        onClick={() => {
                          setIslist(item.islist);
                          setCategoryInfo(item);
                          setGameCategory(item.gametype);
                          setGameType("all");
                          setPageIndex(1);
                          setIshot(0);
                          setIsnew(0);
                          setHasMore(true);
                          seInputValue("");
                          setGamelist([]);
                        }}
                      >
                        <div className="box">
                          <img
                            src={`/assets/home/gametype/${item.gametype.replace(
                              "Game",
                              ""
                            )}.png`}
                          />
                          <div className="text">
                            {item.gametype.replace("Game", "")}
                          </div>
                        </div>
                      </div>
                    </Swiper.Item>
                  );
                })}
                <Swiper.Item>
                  <div className="content">
                    <div className="box"></div>
                  </div>
                </Swiper.Item>
              </Swiper>
              <div
                className="next"
                onClick={() => {
                  ref.current?.swipeNext();
                }}
              >
                <DoubleLeftOutlined
                  style={{ color: "#fff", fontSize: "18px" }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="right">
          <div className="options">
            <div
              className={`${gameType == "all" ? "active" : ""} item`}
              onClick={() => {
                setGameType("all");
                setIshot(0);
                setIsnew(0);
                setPageIndex(1);
                setHasMore(true);
                setGamelist([]);
              }}
            >
              {t("all")}
            </div>
            <div
              className={`${gameType == "hot" ? "active" : ""} item`}
              onClick={() => {
                setGameType("hot");
                setIshot(1);
                setIsnew(0);
                setPageIndex(1);
                setHasMore(true);
                setGamelist([]);
              }}
            >
              {t("HOT")}
            </div>
            <div
              className={`${gameType == "new" ? "active" : ""} item`}
              onClick={() => {
                setGameType("new");
                setIshot(0);
                setIsnew(1);
                setPageIndex(1);
                setHasMore(true);
                setGamelist([]);
              }}
            >
              {t("upToDate")}
            </div>
          </div>
          <div className="gameList">
            {islist == "true" ? (
              <ul>
                {gamelist.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <div
                        className={
                          item.favourite == "1" ? "heart active" : "heart"
                        }
                        onClick={() => {
                          collectionHandle(item.id, item.favourite);
                        }}
                      >
                        <StarFilled />
                      </div>
                      <div
                        className="box"
                        onClick={() => {
                          onClickHandle(item);
                        }}
                      >
                        <Image
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
                        />
                        {/* <img
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
                  /> */}
                        <p>{lang == "en" ? item.enname : item.cnname}</p>
                        <div className="text">
                          {t("responseRate")}
                          {item.RTP}
                        </div>
                      </div>
                    </li>
                  );
                })}

                <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
              </ul>
            ) : (
              <div className="gamebox">
                <div
                  className="game-box"
                  onClick={() => {
                    onClickHandle(categoryInfo);
                  }}
                >
                  <img
                    src={`/assets/home/gametype/${categoryInfo?.gametype?.replace(
                      "Game",
                      ""
                    )}.png`}
                  />
                  <div className="text">
                    {categoryInfo?.gametype?.replace("Game", "")}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {isLoading && (
          <div className="loading">
            <SpinLoading color="primary" style={{ "--size": "38px" }} />
          </div>
        )}
      </div>
    </div>
  );
};
export default DZgame;
