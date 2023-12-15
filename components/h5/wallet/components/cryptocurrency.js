import react, { useState, useEffect } from "react";
import styles from "./cryptocurrency.module.scss";
import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";
import { ExclamationCircleFilled } from "@ant-design/icons";
import { walletApi } from "@/requests/frontend";
import QRCode from "qrcode.react";
import Loading from "../../components/loading-mobile";
import { Input } from "antd";

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

  const [currencyType, setCurrencyType] = useState("USDT");
  const [currencyTypeIndex, setCurrencyTypeIndex] = useState(0);
  const [protocolType, setProtocolType] = useState("");
  const [usdtInfo, setUsdtInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [depositNum, setDepositNum] = useState(0);

  const copyCot = (value) => {
    copy(value);
    Toast.show({
      content: "复制成功",
    });
  };

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.getRechargeUsdInfo({
        usdtype: currencyType,
        protocol: protocolType,
      });
      if (res.code == "1") {
        setUsdtInfo(res.info);
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
        content: "请输入金额",
      });
      return;
    }
    try {
      setIsLoading(true);
      const res = await walletApi.doTrans({
        depositNum,
        usdtype: currencyType,
      });
      if (res.code == "1") {
        Toast.show({
          content: res.info + "," + "等待客服确认",
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
      <div className="tit">货币类型</div>
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
        <div className="tit">选择协议</div>
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
                <p>地址：</p>
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
                  <div className="keep-btn">保存二维码</div>
                  <p>最低存款=10{currencyType}</p>
                  <p>当前参考汇率</p>
                  <p className="p1">
                    1 {currencyType}=HKD {usdtInfo.echrate}
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
              <div className="amount-box">
                <p>输入金额</p>
                <Input
                  value={depositNum}
                  placeholder="请输入金额"
                  className="lineInput"
                  type="number"
                  suffix="HKD"
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
          完成交易
        </div>
        <div className="text">
          重要：如果您需要任何帮助，请联系 <span>线上客服</span>
        </div>
      </div>
      <div className="notice">
        <ul className="notice-list">
          <li>
            <div className="num">1</div>
            <p>会员可以扫描二维码或复制地址开始交易。</p>
          </li>
          <li>
            <div className="num">2</div>
            <p>
              每个成员都有自己独特的加密货币存款地址。当上述地址收到
              加密货币时，它将自动存入您的WIN1主钱包余额。
            </p>
          </li>
          <li>
            <div className="num">3</div>
            <p>汇率是指示性的。实际利率和入账金额只能在提交交易后确定。</p>
          </li>
          <li>
            <div className="num">4</div>
            <p>
              会员需要登录各自的加密货币帐户并进行转账(与银行间转账相
              同)，仅将加密货币发送到我们存款页面中显示的相应存款地址，
              并确保您选择了正确的网路。
            </p>
          </li>
          <li>
            <div className="num">5</div>
            <p>
              将加密货币发送到昔误的地址或错误的网路可能会导致您的存 款丟失。
            </p>
          </li>
          <li>
            <div className="num">6</div>
            <p>
              交易确认后，信用将自动存入您的钱包。通常需要 5-10分钟才
              能反映在您的主钱包余额中。
            </p>
          </li>
        </ul>
      </div>
      {isLoading && <Loading />}
    </div>
  );
};

export default Cryptocurrency;
