import react, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./dz-game.module.scss";
import { getGameList } from "@/requests/frontend/home";
import { Toast, Swiper } from "antd-mobile";
import { Input } from "antd";
import { SearchOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import debounce from "@/utils/debounce";
import { InfiniteScroll } from "antd-mobile";
import { play } from "@/utils/common";
import { useGlobalState } from "@/hooks/global";
import Image from "next/image";

const DZgame = () => {
  const ref = useRef(null);
  const [{ user, lang }, dispatch] = useGlobalState();
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [leftPageSize, setleftPageSize] = useState(300);
  const [ismain, setIsmain] = useState(1);
  const [gamelist, setGamelist] = useState([]);
  const [gameTotal, setGameTotal] = useState([]);
  const [gameType, setGameType] = useState("all");
  const [gameCategory, setGameCategory] = useState("");
  const [inputValue, seInputValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (val) => {
    try {
      const res = await getGameList({
        ...val,
        ismain,
        biggametype: "DZ",
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setGamelist(res.info?.rows);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    }
  };

  useEffect(async () => {
    try {
      const res = await getGameList({
        ismain,
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
      if (gameType == "all") {
        fetchData({
          cnname: inputValue,
          gametype: gameCategory,
        });
      } else if (gameType == "hot") {
        fetchData({
          cnname: inputValue,
          gametype: gameCategory,
          ishot: 1,
        });
      } else {
        fetchData({
          cnname: inputValue,
          gametype: gameCategory,
          isnew: 1,
        });
      }
    },
    2000,
    seInputValue
  );

  const loadMore = async () => {
    if (gameType == "all") {
      try {
        const res = await getGameList({
          ismain,
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          pageIndex,
          pageSize,
        });
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
      }
    } else if (gameType == "hot") {
      try {
        const res = await getGameList({
          ismain,
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          ishot: 1,
          pageIndex,
          pageSize,
        });
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
      }
    } else {
      try {
        const res = await getGameList({
          ismain,
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          isnew: 1,
          pageIndex,
          pageSize,
        });
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
      }
    }
  };

  const onClickHandle = (item) => {
    if (item) {
      play(item, dispatch);
    } else {
      message.info("游戏维护中。。。。");
      return;
    }
  };

  return (
    <div className={styles.dzGameBox}>
      <div className="top">
        <Input
          placeholder="搜索游戏"
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
                      setGameCategory(item.gametype);
                      setGameType("all");
                      setPageIndex(1);
                      seInputValue("");
                      fetchData({ gametype: item.gametype });
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
            <DoubleLeftOutlined style={{ color: "#fff", fontSize: "18px" }} />
          </div>
        </div>
        <div className="right">
          <div className="options">
            <div
              className={`${gameType == "all" ? "active" : ""} item`}
              onClick={() => {
                setGameType("all");
                seInputValue("");
                setPageIndex(1);
                fetchData({
                  gametype: gameCategory,
                });
              }}
            >
              全部
            </div>
            <div
              className={`${gameType == "hot" ? "active" : ""} item`}
              onClick={() => {
                setGameType("hot");
                seInputValue("");
                setPageIndex(1);
                fetchData({
                  ishot: 1,
                  gametype: gameCategory,
                });
              }}
            >
              热门
            </div>
            <div
              className={`${gameType == "new" ? "active" : ""} item`}
              onClick={() => {
                setGameType("new");
                seInputValue("");
                setPageIndex(1);
                fetchData({
                  isnew: 1,
                  gametype: gameCategory,
                });
              }}
            >
              最新
            </div>
          </div>
          <div className="gameList">
            <ul>
              {gamelist.map((item) => {
                return (
                  <li key={item.id}>
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
                            ? "_200x200_01_cn.png"
                            : item.gametype == "AMEBAGame"
                            ? "_zhCN.png"
                            : ".png"
                        }`}
                        width={200}
                        height={200}
                      />
                      <p>{item.cnname}</p>
                      <div className="text">回报率{item.RTP}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DZgame;
