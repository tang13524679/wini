import react, { useState, useEffect, useMemo } from "react";
import styles from "./currency-card.module.scss";
import { Input } from "antd";
import { useRouter } from "next/router";
import { walletApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";

const CurrencyCard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [walletList, setWalletList] = useState([]);
  const [orderamount, setOrderamount] = useState("");
  const [echrate, setEchrate] = useState(7.8);
  const [walletInfo, setWalletInfo] = useState({});

  const amountComput = useMemo(() => {
    return (orderamount / echrate).toFixed(2);
  }, [orderamount]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.UWalletAddress();
      if (res.code == "1") {
        setWalletList(res.info.record);
        setWalletInfo(res?.info?.record[0]);
        setEchrate(res.info.echrate);
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

  const confirmHandle = async () => {
    console.log(amountComput);
    if (!Number(amountComput)) {
      Toast.show({
        content: "金额不能为空",
      });
      return;
    } else {
      try {
        setIsLoading(true);
        const res = await walletApi.DoTrans({
          depositNum: amountComput,
          usdtype: walletInfo.openningbank,
        });
        if (res.code == "1") {
          Toast.show({
            content: "充值取款信息已提交，等待客服确认！",
          });
        }
      } catch (error) {
        Toast.show({
          content: error,
        });
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className={styles.container}>
      <div className="card-box">
        <div className="title">选择要提款的加密货币钱包</div>
        <div className="card-list">
          {walletList.length > 0 &&
            walletList.map((item, index) => {
              return (
                <div
                  className={`${
                    walletInfo.paymentaccount ==
                    walletList[index].paymentaccount
                      ? "active"
                      : ""
                  } item`}
                  key={index}
                  onClick={() => {
                    setWalletInfo(item);
                  }}
                >
                  <div className="name">钱包地址：</div>
                  <div className="content">
                    <p>{item.paymentaccount}</p>
                    <p>
                      协议: {item.openningbank}-{item.accountname} bitpie
                    </p>
                  </div>
                </div>
              );
            })}
          <div
            className="add-card"
            onClick={() => {
              router.push("/wallet/add-wallet");
            }}
          >
            + 添加加密货币钱包
          </div>
        </div>
        <Input
          value={orderamount}
          placeholder="请输入金额"
          className="lineInput"
          type="number"
          suffix="HKD"
          onChange={(e) => {
            setOrderamount(e.target.value);
          }}
        />
        <div className="tit">
          当前参考汇率 <span>1 USDT={echrate} HKD</span>
        </div>
        <div className="tit">
          最终取款 <div className="num">USDT {amountComput}个</div>
        </div>
        <div className="confirm" onClick={confirmHandle}>
          确认取款
        </div>
        <div className="notice">
          <ul className="notice-list">
            <li>
              <div className="num">1</div>
              <p>您每日可提款10次（每日00：00重置）。</p>
            </li>
            <li>
              <div className="num">2</div>
              <p>
                取款前需完成存款金额的1倍有效投注额；若参与优惠，则需完成
                优惠的所需有效投注额。
              </p>
            </li>
            <li>
              <div className="num">3</div>
              <p>
                加密货币钱包需确保正确的物议和地址取款才能到账；错误信息
                请勿提文取款申请，需立即联系在线客服修改；提款将在1-5分钟
                完成（根据区块网络到账时间为准）。
              </p>
            </li>
            <li>
              <div className="num">4</div>
              <p>
                如利用本平台进行任何洗钱诈骗行为，本公司将保留权利终止
                会员服务及冻结其候户。
              </p>
            </li>
          </ul>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default CurrencyCard;
