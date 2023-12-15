import react, { useState, useEffect } from "react";
import styles from "./record.module.scss";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { commissionApi } from "@/requests/frontend";
import { Empty } from "antd-mobile";

const Record = () => {
  const [gradeState, setGradeState] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [amount, setAmount] = useState(0);
  const [record, setRecord] = useState([]);

  const fetchDataAuditRecord = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionAuditRecord({
        timeRange: "week",
      });
      if (res.code == "1") {
        setAmount(res?.info?.amount);
        setRecord(res?.info?.record);
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

  const fetchDataRecord = async () => {
    try {
      setIsLoading(true);
      const res = await commissionApi.commissionRecord({
        timeRange: "week",
      });
      if (res.code == "1") {
        setAmount(res?.info?.amount);
        setRecord(res?.info?.record);
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

  useEffect(() => {
    if (gradeState == 1) {
      fetchDataAuditRecord();
    } else {
      fetchDataRecord();
    }
  }, [gradeState]);

  return (
    <div className={styles.container}>
      <div className="top-box">
        <div className="tabar">
          <div
            className={`${gradeState == 1 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(1);
            }}
          >
            发放记录
          </div>
          <div
            className={`${gradeState == 2 ? "active" : ""} item`}
            onClick={() => {
              setGradeState(2);
            }}
          >
            提现记录
          </div>
        </div>
        <p>
          <span></span>数据有延时，请于次日15：00更新为准
        </p>
        {gradeState == 1 && (
          <div className="input-box">
            <input value={amount} readOnly />
            <span>合计总发放佣金（HKD）:</span>
          </div>
        )}
        {gradeState == 2 && (
          <div className="input-box">
            <input value={amount} readOnly />
            <span>合计总提现佣金（HKD）:</span>
          </div>
        )}
      </div>
      <div className="list-title">
        <div>发放日期</div>
        <div>发放金额(KHD)</div>
        <div>查询明细</div>
      </div>
      <div className="list">
        {record.length == 0 && <Empty description="暂无数据" />}
      </div>
      <div className="notice-box">
        <div className="item">
          <div className="num">1</div>
          <p>数据只显示最近30天的发放记录, 不包括更早的记录。</p>
        </div>
        <div className="item">
          <div className="num">2</div>
          <p>
            分享备金来源包括开客奖、 充值返点、 游戏返点和下 线收 益10%,
            佣金的详细明细可在"详细数据"中查看。
          </p>
        </div>
        <div className="item">
          <div className="num">3</div>
          <p>
            佣金可即时提取至主帐户, 无需打码量, 可以在提取后 用
            于游戏或直接提现。
          </p>
        </div>
        <div className="item">
          <div className="num">4</div>
          <p>
            WIN1将会对每个符合资格的帐号进行审核, 一旦发现 复制 或假帐号的情况,
            WIN1将会取消该帐号的参加资 格并不会 派发分享佣金给涉事帐号。
          </p>
        </div>
        <div className="item">
          <div className="num">5</div>
          <p>WIN1合营部保留随时更改备金比例、 取消、 暂停或 终止的 权利。</p>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Record;
