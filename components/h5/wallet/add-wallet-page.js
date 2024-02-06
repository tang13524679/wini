import react, { useState, useEffect } from "react";
import styles from "./add-wallet-page.module.scss";
import NavBar from "../components/nav-bar";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Picker } from "antd-mobile";
import { walletApi } from "@/requests/frontend";
import Loading from "@/components/h5/components/loading-mobile";
import { Toast } from "antd-mobile";
import { useRouter } from "next/router";
import { t } from "@/utils/translate";

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
          content: t("Walletaddedsuccessfully"),
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
      <NavBar title={t("Addcryptocurrencywallet")} />
      <div
        className="wallet-select"
        onClick={() => {
          setVisible(true);
        }}
      >
        <div className="left">{t("Cryptocurrencytype")}</div>
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
          <Form.Item label={t("Walletname")} name="walletName">
            <Input
              value={walletName}
              placeholder={t("PleaseenterChineseEnglishandnumbers")}
              onChange={(value) => {
                setWalletName(value);
              }}
            />
          </Form.Item>
          <Form.Item label={t("walletaddress") + "："} name="paymentaccount">
            <Input
              value={paymentaccount}
              placeholder={t("Pleaseenterwalletaddress")}
              onChange={(value) => {
                setPaymentaccount(value);
              }}
            />
          </Form.Item>
          <Form.Item label={t("Confirmaddress")} name="isPaymentaccount">
            <Input
              value={isPaymentaccount}
              placeholder={t("Pleaseconfirmaddress")}
              onChange={(value) => {
                setIsPaymentaccount(value);
              }}
            />
          </Form.Item>
          <div className="notice">{t("Important")}</div>
          <Form.Item
            label={t("Mail", "login")}
            extra={<a>{t("VerificationCode", "login")}</a>}
            name="E-mail"
          >
            <Input value={email} placeholder="2407***q.com" />
          </Form.Item>
          <Form.Item
            label={t("VerificationCode", "login")}
            name="verificationCode"
          >
            <Input value="" placeholder={t("pleaseentererificationcode")} />
          </Form.Item>
          <div className="confirm" onClick={confirmHandle}>
            {t("Confirmtosave")}
          </div>
        </Form>
      </div>

      <Picker
        popupClassName={styles.walletPicker}
        title={t("Pleaseselectcurrencytype")}
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
