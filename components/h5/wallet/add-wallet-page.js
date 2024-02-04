import react, { useState, useEffect } from "react";
import styles from "./add-wallet-page.module.scss";
import NavBar from "../components/nav-bar";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Picker } from "antd-mobile";
import { walletApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";

const AddWalletPage = () => {
  const walletColumns = [
    [
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/usdt.png" />
            USDT ERC20
          </div>
        ),
        value: { bankType: "USDT", accountType: "ERC20" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/usdt.png" />
            USDT TRC20
          </div>
        ),
        value: { bankType: "USDT", accountType: "TRC20" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/eth.png" />
            ETH ETH-ERC20
          </div>
        ),
        value: { bankType: "ETH", accountType: "ETH-ERC20" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/eth.png" />
            ETH ETH-OKTC
          </div>
        ),
        value: { bankType: "ETH", accountType: "ETH-OKTC" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/btc.png" />
            BTC BTC-Bitcoin
          </div>
        ),
        value: { bankType: "BTC", accountType: "BTC-Bitcoin" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/btc.png" />
            BTC BTC-Lightning
          </div>
        ),
        value: { bankType: "BTC", accountType: "BTC-Lightning" },
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/btc.png" />
            BTC BTC-OKTC
          </div>
        ),
        value: { bankType: "BTC", accountType: "BTC-OKTC" },
      },
    ],
  ];

  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [walletName, setWalletName] = useState("");
  const [walletType, setWalletType] = useState("");
  const [paymentaccount, setPaymentaccount] = useState("");
  const [isPaymentaccount, setIsPaymentaccount] = useState("");
  const [openningbank, setOpenningbank] = useState("USDT");
  const [accountname, setAccountname] = useState("ERC20");
  const [email, setEmail] = useState("");
  const router = useRouter();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.UWalletAddress();
      if (res.code == "1") {
        setWalletType(res.info.wallettype);
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

  const onConfirm = (val) => {
    setOpenningbank(val[0].bankType);
    setAccountname(val[0].accountType);
  };

  const confirmHandle = async () => {
    try {
      setIsLoading(true);
      const res = await walletApi.AddUWallet({
        accountname,
        paymentaccount,
        openningbank,
      });
      if (res.code == "1") {
        Toast.show({
          content: "钱包添加成功",
        });
        router.push("/wallet?tab=withdraw");
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

  return (
    <div className={styles.container}>
      <NavBar title="添加加密货币钱包" />
      <div
        className="wallet-select"
        onClick={() => {
          setVisible(true);
        }}
      >
        <div className="left">加密货币类型</div>
        <div className="right">
          <div className="wallet-type">
            <img src="/assets/wallet/usdt.png" />
            USDT ERC20
          </div>
          <RightOutlined />
        </div>
      </div>
      <div className="form-box">
        <Form
          layout="horizontal"
          initialValues={{
            remember: true,
          }}
          onFinish={confirmHandle}
          autoComplete="off"
        >
          <Form.Item label="钱包名称：" name="walletName">
            <Input
              value={walletName}
              placeholder="请输入3-10位中文、英文、数字"
              onChange={(value) => {
                setWalletName(value);
              }}
            />
          </Form.Item>
          <Form.Item label="钱包地址：" name="paymentaccount">
            <Input
              value={paymentaccount}
              placeholder="请输入42位USDT钱包地址"
              onChange={(value) => {
                setPaymentaccount(value);
              }}
            />
          </Form.Item>
          <Form.Item label="确认地址：" name="isPaymentaccount">
            <Input
              value={isPaymentaccount}
              placeholder="请再次确认42位USDT钱包地址"
              onChange={(value) => {
                setIsPaymentaccount(value);
              }}
            />
          </Form.Item>
          <div className="notice">
            重要：请确认42位 USDT钱包地址正确无误，否则资金将不可找回
          </div>
          <Form.Item label="邮箱" extra={<a>验证码</a>} name="E-mail">
            <Input value={email} placeholder="2407***q.com" />
          </Form.Item>
          <Form.Item label="验证码" name="verificationCode">
            <Input value="" placeholder="请输入验证码" />
          </Form.Item>
          <div className="confirm" onClick={confirmHandle}>
            确认保存
          </div>
        </Form>
      </div>

      <Picker
        popupClassName={styles.walletPicker}
        title="请选择货币类型"
        // defaultValue={{
        //   name: "USDT ERC20",
        //   img: "/assets/wallet/usdt.png",
        // }}
        columns={walletColumns}
        visible={visible}
        onConfirm={onConfirm}
        onClose={() => {
          setVisible(false);
        }}
      />
      {isLoading && <Loading />}
    </div>
  );
};
export default AddWalletPage;
