import react, { useState, useEffect } from "react";
import styles from "./bank-card.module.scss";
import { Input } from "antd";
import { useRouter } from "next/router";
import Loading from "../../components/loading-mobile";
import { userApi, fundApi } from "@/requests/frontend";
import { Toast } from "antd-mobile";
import { t } from "@/utils/translate";

const BankCard = (props) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [bankType, setBankType] = useState(0);
  const [bankInfo, setBankInfo] = useState({});
  const [bankCardList, setBankCardList] = useState([]);
  const [orderamount, setOrderamount] = useState("");
  const [fundpassword, setFundpassword] = useState("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await userApi.uBankCards();
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
        content: t("Moneyamountcannotbeempty"),
      });
    } else if (!fundpassword) {
      Toast.show({
        content: t("Fundpasswordcannotbeempty"),
      });
    } else {
      try {
        setIsLoading(true);
        const res = await fundApi.taking({
          brandcode: bankInfo.brandcode,
          fundpassword,
          informationcode: bankInfo.informationcode,
          orderamount,
          opreateChannel: 1,
        });
        if (res.code == "1") {
          Toast.show({
            content: t("Withdrawalsuccessful"),
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
        <div className="title">{t("Addbankcards")}</div>
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
              router.push("/user/add-bank-card");
            }}
          >
            + {t("addone")}
          </div>
        </div>
      </div>
      <div className="sbmit-box">
        <div className="title">{t("WithdrawalAmount")}</div>
        <div className="input-box">
          <Input
            value={orderamount}
            placeholder={t("Pleaseentertheamount")}
            className="lineInput"
            type="number"
            suffix="HKD"
            onChange={(e) => {
              setOrderamount(e.target.value);
            }}
          />
          <Input.Password
            value={fundpassword}
            placeholder={t("Pleaseenterthefundpassword")}
            className="lineInput"
            onChange={(e) => {
              setFundpassword(e.target.value);
            }}
          />
        </div>
        <div className="title">
          {t("walletbalance")}
          {props.balance}{" "}
          <span
            onClick={() => {
              setOrderamount(props.balance);
            }}
          >
            {t("all")}
          </span>
        </div>
        <div className="confirm" onClick={confirmHandle}>
          {t("confirm")}
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default BankCard;
