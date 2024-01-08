import react, { useState, useEffect } from "react";
import styles from "./bank-transfer.module.scss";
import { Input, Dropdown, Menu } from "antd";
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
  const receiveBanks = useReceiveBanks();
  console.log(receiveBanks, "11");
  const [receiveBank, setReceiveBank] = useState({});
  const router = useRouter();

  useEffect(() => {
    EThirdpartys();
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
      const res = await ESaving({
        orderamount: amount,
        channelId: 6,
      });
      console.log(res, "11");
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
      {receiveBanks != undefined && (
        <Dropdown
          trigger="click"
          overlay={
            <Menu>
              {receiveBanks?.map((item, index) => (
                <Menu.Item
                  key={index}
                  onClick={() => {
                    setReceiveBank(item);
                  }}
                >
                  {item.bankname}
                </Menu.Item>
              ))}
            </Menu>
          }
        >
          <div className="flex justify-between items-center cursor-pointer bank-select">
            <div className="clWhite">{`WIN1${t(
              "receiveAccount",
              "field"
            )}`}</div>
            <div className="flex-auto clWhite30 text-right please-select">
              {receiveBank.bankname || t("pleaseSelect")}
            </div>
            <DownOutlined />
          </div>
        </Dropdown>
      )}
      <div className="confirm-box">
        <div className="confirm" onClick={confirmHandler}>
          确认
        </div>
        <div className="text">
          存款遇到问题？请联系 <span>线上客服</span> 进行解决
        </div>
      </div>
    </div>
  );
};

export default BankTransfer;
