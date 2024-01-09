import react, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./dz-game.module.scss";
import { getGameList } from "@/requests/frontend/home";
import { Toast, Swiper } from "antd-mobile";
import { Input } from "antd";
import { SearchOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import debounce from "@/utils/debounce";
import { InfiniteScroll } from "antd-mobile";

const DZgame = () => {
  const ref = useRef(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(30);
  const [ismain, setIsmain] = useState(1);
  const [gamelist, setGamelist] = useState([]);
  const [gameTotal, setGameTotal] = useState([]);
  const [gameType, setGameType] = useState("all");
  const [gameCategory, setGameCategory] = useState("");
  const [inputValue, seInputValue] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async (val) => {
    setPageIndex(1);
    try {
      const res = await getGameList({ ...val });
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
        biggametype: "DZ",
        pageIndex,
        pageSize,
      });
      if (res.code == "1") {
        setGameTotal(res.info?.rows);
        setGamelist(res.info?.rows);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    }
  }, []);

  const selectionHandle = (val) => {
    setPageIndex(1);
    if (gameType == "all") {
      fetchData({
        biggametype: "DZ",
        gametype: val,
        cnname: inputValue,
        pageIndex,
        pageSize,
      });
    } else if (gameType == "hot") {
      fetchData({
        biggametype: "DZ",
        gametype: val,
        cnname: inputValue,
        ishot: 1,
        pageIndex,
        pageSize,
      });
    } else {
      fetchData({
        biggametype: "DZ",
        gametype: val,
        cnname: inputValue,
        isnew: 1,
        pageIndex,
        pageSize,
      });
    }
  };

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
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          pageIndex,
          pageSize,
        });
      } else if (gameType == "hot") {
        fetchData({
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          ishot: 1,
          pageIndex,
          pageSize,
        });
      } else {
        fetchData({
          biggametype: "DZ",
          cnname: inputValue,
          gametype: gameCategory,
          isnew: 1,
          pageIndex,
          pageSize,
        });
      }
    },
    1000,
    seInputValue
  );

  const loadMore = async () => {
    const res = await getGameList({
      biggametype: "DZ",
      cnname: inputValue,
      gametype: gameCategory,
      isnew: 1,
      pageIndex: pageIndex,
      pageSize,
    });
    if (res.code == "1") {
      setGamelist((val) => [...val, ...res.info?.rows]);
      setHasMore(res.info?.rows.length > 0);
      setPageIndex(pageIndex + 1);
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
                      selectionHandle(item.gametype);
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
                fetchData({
                  biggametype: "DZ",
                  gametype: gameCategory,
                  cnname: inputValue,
                  pageIndex,
                  pageSize,
                });
              }}
            >
              全部
            </div>
            <div
              className={`${gameType == "hot" ? "active" : ""} item`}
              onClick={() => {
                setGameType("hot");
                fetchData({
                  biggametype: "DZ",
                  ishot: 1,
                  gametype: gameCategory,
                  cnname: inputValue,
                  pageIndex,
                  pageSize,
                });
              }}
            >
              热门
            </div>
            <div
              className={`${gameType == "new" ? "active" : ""} item`}
              onClick={() => {
                setGameType("new");
                fetchData({
                  biggametype: "DZ",
                  isnew: 1,
                  gametype: gameCategory,
                  cnname: inputValue,
                  pageIndex,
                  pageSize,
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
                    <div className="box">
                      <img src="" />
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
