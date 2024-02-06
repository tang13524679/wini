import react, { useState, useEffect } from "react";
import styles from "./cryptocurrency.module.scss";
import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { walletApi } from "@/requests/frontend";
import QRCode from "qrcode.react";
import Loading from "../../components/loading-mobile";
import { Input } from "antd";
import { useGlobalState } from "@/hooks/global";
import { t } from "@/utils/translate";

const Cryptocurrency = () => {
  const currencyTypeList = [
    {
      name: "USDT",
      img: "/assets/wallet/usdt.png",
      protocol: [
        {
          name: "ERC20",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
        {
          name: "TRC20",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
      ],
    },
    {
      name: "ETH",
      img: "/assets/wallet/eth.png",
      protocol: [
        {
          name: "ETH-ERC20",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
        {
          name: "ETH-OKTC",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
      ],
    },
    {
      name: "BTC",
      img: "/assets/wallet/btc.png",
      protocol: [
        {
          name: "BTC-Bitcoin",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
        {
          name: "BTC-Lightning",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
        {
          name: "BTC-OKTC",
          address: "TByiwzF1hezUv981JbaUcgm8s2LNK7SFN8",
          QRcode: "/assets/wallet/qr.png",
          exchangeRate: "7.82",
        },
      ],
    },
  ];
  const [{ user, lang }, dispatch] = useGlobalState();
  const [currencyType, setCurrencyType] = useState("USDT");
  const [currencyTypeIndex, setCurrencyTypeIndex] = useState(0);
  const [protocolType, setProtocolType] = useState("");
  const [usdtInfo, setUsdtInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [depositNum, setDepositNum] = useState(0);
  const [opreateType, setOpreateType] = useState(0);

  const copyCot = (value) => {
    copy(value);
    Toast.show({
      content: t("CopySuccessfully"),
    });
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.getRechargeUsdInfo({
        usdtype: currencyType,
        protocol: protocolType,
        opreateChannel: 3,
      });
      if (res.code == "1") {
        setUsdtInfo(res.info);
        setOpreateType(res.info.walletId);
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
    if (protocolType) {
      fetchData();
    }
  }, [protocolType]);

  const confirmHandle = async () => {
    if (!depositNum) {
      Toast.show({
        content: t("Pleaseentertheamount"),
      });
      return;
    }
    try {
      setIsLoading(true);
      const res = await walletApi.doTrans({
        depositNum,
        usdtype: currencyType,
        employeecode: user?.employeecode,
        opreateType: 1,
        walletId: opreateType,
        opreateChannel: 3,
      });
      if (res.code == "1") {
        Toast.show({
          content: res.info + "," + t("Waitingconfirmation"),
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
  };

  return (
    <div className={styles.container}>
      <div className="tit">{t("currencytype")}</div>
      <div className="currency-box">
        <div className="currency-list">
          {currencyTypeList.map((item, index) => {
            return (
              <div
                className={`${currencyType == item.name ? "active" : ""} item`}
                key={index}
                onClick={() => {
                  setCurrencyType(item.name);
                  setCurrencyTypeIndex(index);
                  setProtocolType("");
                  setDepositNum(0);
                }}
              >
                <img src={item.img} />
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
        <div className="tit">{t("Selectprotocol")}</div>
        <div className="protocol-list">
          {currencyTypeList[currencyTypeIndex].protocol.map((item) => {
            return (
              <div
                className={`${
                  protocolType == item.name ? "active" : ""
                } protocol`}
                onClick={() => {
                  setProtocolType(item.name);
                  setDepositNum(0);
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="currency-details">
          {protocolType && (
            <div className="details">
              <div className="address">
                <p>{t("address")}：</p>
                <input type="text" readOnly value={usdtInfo.waddress} />
                <div
                  className="copy"
                  onClick={() => {
                    copyCot(usdtInfo.waddress);
                  }}
                ></div>
              </div>
              <div className="details-text">
                <div className="left">
                  <QRCode value={usdtInfo.waddress} />
                  {/* <img src={item.QRcode} /> */}
                </div>
                <div className="right">
                  <div className="keep-btn">{t("SaveQRcode")}</div>
                  <p>
                    {t("Minimumdeposit")}=10{currencyType}
                  </p>
                  <p>{t("exchange")}</p>
                  <p className="p1">
                    1 {currencyType}=HKD {usdtInfo.echrate}
                  </p>
                  <p className="p2">
                    {t("NOTEUseyour")} {currencyType} {t("Scanthewalletcode")}
                  </p>
                  <p>
                    <ExclamationCircleFilled /> {t("onlyQRa")}
                  </p>
                  <p></p>
                </div>
              </div>
              <div className="amount-box">
                <div className="text-box">
                  <p>{t("Pleaseentertheamount")}</p>
                  <div className="num">
                    {t("AmountHKDrecharge")}
                    <span>
                      {(depositNum * usdtInfo.echrate).toFixed(2)} HKD
                    </span>
                  </div>
                </div>
                <Input
                  value={depositNum}
                  placeholder={t("Pleaseentertheamount")}
                  className="lineInput"
                  type="number"
                  suffix="USDT"
                  onChange={(e) => {
                    setDepositNum(e.target.value);
                  }}
                />
              </div>
            </div>
          )}
          {/* {currencyTypeList[currencyTypeIndex].protocol.map((item) => {
            return (
              protocolType == item.name && (
                <div className="details">
                  <div className="address">
                    <p>地址：</p>
                    <input type="text" readOnly value={item.address} />
                    <div
                      className="copy"
                      onClick={() => {
                        copyCot(item.address);
                      }}
                    ></div>
                  </div>
                  <div className="details-text">
                    <div className="left">
                      <img src={item.QRcode} />
                    </div>
                    <div className="right">
                      <div className="keep-btn">保存二维码</div>
                      <p>最低存款=10{currencyType}</p>
                      <p>当前参考汇率</p>
                      <p className="p1">
                        1 {currencyType}=HKD {item.exchangeRate}
                      </p>
                      <p className="p2">
                        注意：使用您 {currencyType} 钱包扫码此二维码
                      </p>
                      <p>
                        <ExclamationCircleFilled /> 此二维码仅允许扫码一次
                      </p>
                      <p></p>
                    </div>
                  </div>
                </div>
              )
            );
          })} */}
        </div>
      </div>
      <div className="confirm-box">
        <div className="confirm" onClick={confirmHandle}>
          {t("Sealthedeal")}
        </div>
        <div className="text">
          {t("IMPORTANT")} <span>{t("Onlinecustomerservice")}</span>
        </div>
      </div>
      <div className="notice">
        <ul className="notice-list">
          <li>
            <div className="num">1</div>
            <p>{t("Cryptocurrencynoticelist1")}</p>
          </li>
          <li>
            <div className="num">2</div>
            <p>{t("Cryptocurrencynoticelist2")} </p>
          </li>
          <li>
            <div className="num">3</div>
            <p>{t("Cryptocurrencynoticelist3")}</p>
          </li>
          <li>
            <div className="num">4</div>
            <p>{t("Cryptocurrencynoticelist4")}</p>
          </li>
          <li>
            <div className="num">5</div>
            <p>{t("Cryptocurrencynoticelist5")}</p>
          </li>
          <li>
            <div className="num">6</div>
            <p>{t("Cryptocurrencynoticelist6")}</p>
          </li>
        </ul>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Cryptocurrency;
