import react, { useState, useEffect, useMemo } from "react";
import styles from "./currency-card.module.scss";
import { Input } from "antd";
import { useRouter } from "next/router";
import { walletApi, fundApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { t } from "@/utils/translate";

const CurrencyCard = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [walletList, setWalletList] = useState([]);
  const [orderamount, setOrderamount] = useState("");
  const [echrate, setEchrate] = useState(7.8);
  const [walletInfo, setWalletInfo] = useState({});
  const [fundpassword, setFundpassword] = useState("");

  const amountComput = useMemo(() => {
    return (orderamount * walletInfo.cryptoWalletRate).toFixed(2) || 0;
  }, [orderamount]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.UWalletAddress();
      if (res.code == "1") {
        setWalletList(res.info.record);
        setWalletInfo(res?.info?.record[0] || 0);
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
        content: t("Pleaseentertheamount"),
      });
      return;
    } else if (fundpassword == "") {
      Toast.show({
        content: t("Pleaseenterthefundpassword"),
      });
      return;
    } else {
      try {
        setIsLoading(true);
        const res = await fundApi.taking({
          orderamount: orderamount,
          usdtype: walletInfo.openningbank,
          fundpassword,
          opreateChannel: 3,
          brandcode: walletInfo.brandcode,
          informationcode: walletInfo.informationcode,
        });
        if (res.code == "1") {
          Toast.show({
            content: t("Withdrawalsubmitted"),
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
        <div className="title">{t("Selectcryptocurrencywallet")}</div>
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
                  <div className="name">{t("walletaddress")}：</div>
                  <div className="content">
                    <p>{item.paymentaccount}</p>
                    <p>
                      {t("protocol")}: {item.openningbank}-{item.accountname}{" "}
                      bitpie
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
            + {t("Addcryptocurrencywallet")}
          </div>
        </div>
        <Input
          value={orderamount}
          placeholder={t("Pleaseentertheamount")}
          className="lineInput"
          type="number"
          suffix="USDT"
          onChange={(e) => {
            setOrderamount(e.target.value);
          }}
        />
        <Input.Password
          value={fundpassword}
          placeholder={t("Pleaseenterthefundpassword")}
          className="lineInput"
          type="number"
          onChange={(e) => {
            setFundpassword(e.target.value);
          }}
        />
        <div className="tit" style={{ marginTop: "10px" }}>
          {t("Currentreferenceexchangerate")}{" "}
          <span>1 USDT={walletInfo?.cryptoWalletRate} HKD</span>
        </div>
        <div className="tit">
          {t("finalwithdrawal")}{" "}
          <div className="num">
            HKD {amountComput}
            {t("indivual")}
          </div>
        </div>
        <div className="confirm" onClick={confirmHandle}>
          {t("Confirmwithdrawal")}
        </div>
        <div className="notice">
          <ul className="notice-list">
            <li>
              <div className="num">1</div>
              <p>{t("Withdrawmoneytext1")}</p>
            </li>
            <li>
              <div className="num">2</div>
              <p>{t("Withdrawmoneytext2")}</p>
            </li>
            <li>
              <div className="num">3</div>
              <p>{t("Withdrawmoneytext3")}</p>
            </li>
            <li>
              <div className="num">4</div>
              <p>{t("Withdrawmoneytext4")}</p>
            </li>
          </ul>
        </div>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default CurrencyCard;
