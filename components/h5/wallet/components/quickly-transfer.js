import react, { useState, useEffect } from "react";
import styles from "./bank-transfer.module.scss";
import { Input, Dropdown, Menu, Modal } from "antd";
import { t } from "@/utils/translate";
import { useReceiveBanks } from "@/hooks/fund";
import { DownOutlined } from "@ant-design/icons";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { EThirdpartys, ESaving } from "@/requests/frontend/wallet";

const QuicklyTransfer = () => {
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
        content: "金钱数额不能为空",
      });
    } else if (JSON.stringify(receiveBank) == "{}") {
      Toast.show({
        content: "WIN1收款账号不能为空",
      });
    } else {
      try {
        const res = await ESaving({
          orderamount: amount,
          channelId: receiveBank.channelId,
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
        if (error == "未绑定银行卡，请绑定银行卡之后再充值") {
          router.push("/user/add-bank-card");
        }
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
          placeholder="请输入金额"
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
      <div className="tit">支付方式</div>
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
          确认
        </div>
        <div className="text">
          存款遇到问题？请联系 <span>线上客服</span> 进行解决
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

export default QuicklyTransfer;
