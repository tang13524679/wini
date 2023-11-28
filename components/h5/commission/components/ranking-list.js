import react from "react";
import styles from "./ranking-list.module.scss";

const RankingList = () => {
  const list = [
    {
      account: "ZS***VG",
      amount: "83.006",
    },
    {
      account: "12***yG",
      amount: "78.564",
    },
    {
      account: "12***yG",
      amount: "78.564",
    },
    {
      account: "SD***ym",
      amount: "75.064",
    },
    {
      account: "dd***cv",
      amount: "68.552",
    },
    {
      account: "12***47",
      amount: "66.321",
    },
  ];

  return (
    <div className={styles.container}>
      <div className="list-box">
        <div className="title">
          <img src="/assets/commission/ranking.png" />
          <span>周佣金排行榜</span>
        </div>
        <div className="title-box">
          <div>排名</div>
          <div>账号</div>
          <div>佣金（HKD）</div>
        </div>
        <div className="list">
          {list.map((item, index) => {
            return (
              <div className="item">
                {index == 0 && (
                  <div>
                    <img src="/assets/commission/top1.png" />
                  </div>
                )}
                {index == 1 && (
                  <div>
                    <img src="/assets/commission/top2.png" />
                  </div>
                )}
                {index == 2 && (
                  <div>
                    <img src="/assets/commission/top3.png" />
                  </div>
                )}
                {index > 2 && <div>{index + 1}</div>}
                <div>{item.account}</div>
                <div>{item.amount}</div>
              </div>
            );
          })}
        </div>
        <div className="ranking-footer">最后更新于2023-10-16 00:00:34</div>
      </div>
    </div>
  );
};

export default RankingList;
