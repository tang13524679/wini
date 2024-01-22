import react, { useState, useEffect } from "react";
import styles from "./bank-card.module.scss";
import { Input } from "antd";
import { useRouter } from "next/router";
import Loading from "../../components/loading-mobile";
import { userApi, fundApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";

const QuickBankCard = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [bankType, setBankType] = useState(0);
  const [bankInfo, setBankInfo] = useState({});
  const [bankCardList, setBankCardList] = useState([]);
  const [orderamount, setOrderamount] = useState(0);
  const [fundpassword, setFundpassword] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await userApi.uFpsAddress();
      if (res.code == "1") {
        setBankCardList(res.info);
        setBankInfo(res.info[0]);
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
    fetchData();
  }, []);

  const confirmHandle = async () => {
    if (!orderamount) {
      Toast.show({
        content: "金钱数额不能为空",
      });
    } else if (!fundpassword) {
      Toast.show({
        content: "资金密码不能为空",
      });
    } else {
      try {
        setIsLoading(true);
        const res = await fundApi.taking({
          brandcode: bankInfo.brandcode,
          fundpassword,
          paymentaccount: bankInfo.paymentaccount,
          orderamount,
        });
        if (res.code == "1") {
          Toast.show({
            content: "提现成功，等待客服确认",
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

  return (
    <div className={styles.container}>
      <div className="card-box">
        <div className="title">最多添加5张转数快</div>
        <div className="card-list">
          {bankCardList.map((item, index) => {
            return (
              <div
                className={`${bankType == index ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setBankType(index);
                  setBankInfo(item);
                }}
              >
                <div className="icon"></div>
                <div className="content">
                  <p>{item.bankname}</p>
                  <p>{item.paymentaccount}</p>
                </div>
                <div className="delete"></div>
              </div>
            );
          })}
          <div
            className="add-card"
            onClick={() => {
              router.push("/user/add-quick-card");
            }}
          >
            + 添加一张
          </div>
        </div>
      </div>
      <div className="sbmit-box">
        <div className="title">提现金额</div>
        <div className="input-box">
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
          <Input
            value={fundpassword}
            placeholder="资金密码"
            className="lineInput"
            onChange={(e) => {
              setFundpassword(e.target.value);
            }}
          />
        </div>
        <div className="title">
          钱包余额：{props.balance}{" "}
          <span
            onClick={() => {
              setOrderamount(props.balance);
            }}
          >
            全部
          </span>
        </div>
        <div className="confirm" onClick={confirmHandle}>
          确认
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default QuickBankCard;
