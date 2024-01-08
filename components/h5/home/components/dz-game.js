import react, { useState, useEffect, useRef, useMemo } from "react";
import styles from "./dz-game.module.scss";
import { getGameList } from "@/requests/frontend/home";
import { Toast, Swiper } from "antd-mobile";
import { Input } from "antd";
import { SearchOutlined, DoubleLeftOutlined } from "@ant-design/icons";

const DZgame = () => {
  const ref = useRef(null);
  const [pageIndex, setPageIndex] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [ismain, setIsmain] = useState(1);
  const [gamelist, setGamelist] = useState([]);
  const [gameTotal, setGameTotal] = useState([]);
  const [gameType, setGameType] = useState("all");
  const [gameCategory, setGameCategory] = useState("");

  const fetchData = async () => {
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
  };

  useEffect(() => {
    fetchData();
  }, []);

  const selectionHandle = async (val) => {
    try {
      const res = await getGameList({
        biggametype: "DZ",
        gametype: val,
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

  const gameTypeList = useMemo(() => {
    const newMap = new Map();
    gameTotal.forEach((item) => {
      newMap.set(item.gametype, item);
    });
    const newGameTypeList = [...newMap.values()];
    return newGameTypeList;
  }, [gameTotal]);

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
                      <div className="text">
                        {item.gametype.replace("Game", "")}
                      </div>
                    </div>
                  </div>
                </Swiper.Item>
              );
            })}
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
              }}
            >
              全部
            </div>
            <div
              className={`${gameType == "hot" ? "active" : ""} item`}
              onClick={() => {
                setGameType("hot");
              }}
            >
              热门
            </div>
            <div
              className={`${gameType == "new" ? "active" : ""} item`}
              onClick={() => {
                setGameType("new");
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
          </div>
        </div>
      </div>
    </div>
  );
};
export default DZgame;
