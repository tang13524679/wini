import react, { useState, useEffect } from "react";
import styles from "./bank-transfer.module.scss";
import { Input, Dropdown, Menu, Modal } from "antd";
import { t } from "@/utils/translate";
import { useReceiveBanks } from "@/hooks/fund";
import { DownOutlined } from "@ant-design/icons";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { EThirdpartys, ESaving } from "@/requests/frontend/wallet";

const BankTransfer = () => {
  const amountList = [
    {
      label: "100",
      value: 100,
    },
    {
      label: "500",
      value: 500,
    },
    {
      label: "1000",
      value: 1000,
    },
    {
      label: "5000",
      value: 5000,
    },
    {
      label: "10000",
      value: 10000,
    },
    {
      label: "50000",
      value: 50000,
    },
  ];
  const [amount, setAmount] = useState("");
  const [receiveBank, setReceiveBank] = useState({});
  const [tripartiteList, setTripartiteList] = useState([]);
  const [isIframe, setIsIframe] = useState(false);
  const [iframeurl, setIframeurl] = useState("");
  const router = useRouter();

  useEffect(async () => {
    try {
      const res = await EThirdpartys();
      if (res.code == "1") {
        setTripartiteList(res.info);
      }
    } catch (error) {
      Toast.show({
        content: error,
      });
      console.error(error);
    }
  }, []);

  const confirmHandler = async () => {
    if (!amount) {
      Toast.show({
        content: t("Moneyamountcannotbeempty"),
      });
    } else if (JSON.stringify(receiveBank) == "{}") {
      Toast.show({
        content: t("Accountcannotbeempty"),
      });
    } else {
      try {
        const res = await ESaving({
          orderamount: amount,
          channelId: receiveBank.channelId,
          opreateChannel: 1,
        });
        if (res.code == "1") {
          setIframeurl(res.info);
          setIsIframe(true);
        }
      } catch (error) {
        console.error(error);
        Toast.show({
          content: error,
        });
      }
      // router.push({
      //   pathname: "/fund/payment-info",
      //   query: {
      //     ...receiveBank,
      //     orderamount: amount,
      //   },
      // });
    }
  };

  return (
    <div className={styles.container}>
      <div className="tit">金钱数额</div>
      <div className="money-box">
        <Input
          value={amount}
          placeholder={t("Pleaseentertheamount")}
          className="lineInput"
          type="number"
          suffix="HKD"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
        <div className="amountList">
          {amountList.map((item, index) => {
            return (
              <div className="item-box" key={index}>
                <div
                  className="item"
                  onClick={() => {
                    setAmount(item.value);
                  }}
                >
                  {item.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="tit">{t("paymentmethod")}</div>
      <div className="method-list">
        {/* <div className="box">
          <div
            className={`${receiveBank.channelId == 1 ? "active" : ""} item`}
            onClick={() => {
              setReceiveBank({
                channelId: 1,
                channelType: "ONLINEBANK",
                name: "转钱快",
              });
            }}
          >
            <p>转钱快</p>
          </div>
        </div> */}
        {tripartiteList?.map((item, index) => {
          return (
            <div
              className="box"
              key={index}
              onClick={() => {
                setReceiveBank(item);
              }}
            >
              <div
                className={`${
                  receiveBank.channelId == item.channelId ? "active" : ""
                } item`}
              >
                <p>{item.name}</p>
              </div>
            </div>
          );
        })}
      </div>
      {/* <Dropdown
        trigger="click"
        overlay={
          <Menu>
            {tripartiteList?.map((item, index) => (
              <Menu.Item
                key={index}
                onClick={() => {
                  setReceiveBank(item);
                }}
              >
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        }
      >
        <div className="flex justify-between items-center cursor-pointer bank-select">
          <div className="clWhite">{`WIN1${t("receiveAccount", "field")}`}</div>
          <div className="flex-auto clWhite30 text-right please-select">
            {receiveBank.name || t("pleaseSelect")}
          </div>
          <DownOutlined />
        </div>
      </Dropdown> */}
      <div className="confirm-box">
        <div className="confirm" onClick={confirmHandler}>
          {t("confirm")}
        </div>
        <div className="text">
          {t("pleasecontact")} <span>{t("Onlinecustomerservice")}</span>{" "}
          {t("toresolve")}
        </div>
      </div>
      {isIframe && (
        <Modal
          width="100%"
          open={isIframe}
          centered={true}
          footer={null}
          onCancel={() => {
            setIsIframe(false);
          }}
          bodyStyle={{ height: "calc(100vh - 40px)" }}
        >
          <div className="rounded-md overflow-hidden h-full relative">
            <iframe src={iframeurl} name="_iframe" width="100%" height="100%" />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default BankTransfer;
