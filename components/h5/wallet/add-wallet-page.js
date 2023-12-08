import react, { useState } from "react";
import styles from "./add-wallet-page.module.scss";
import NavBar from "../components/nav-bar";
import { RightOutlined } from "@ant-design/icons";
import { Form, Input, Picker } from "antd-mobile";

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
        value: "USDT ERC20",
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/usdt.png" />
            USDT TRC20
          </div>
        ),
        value: "USDT TRC20",
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/eth.png" />
            ETH ERC20
          </div>
        ),
        value: "ETH ERC20",
      },
      {
        label: (
          <div className="wallet-type">
            <img src="/assets/wallet/btc.png" />
            BTC ERC20
          </div>
        ),
        value: "BTC ERC20",
      },
    ],
  ];

  const [visible, setVisible] = useState(false);

  const onConfirm = (val) => {
    console.log(val);
  };

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
        <Form layout="horizontal">
          <Form.Item label="钱包名称：" name="username">
            <Input placeholder="请输入3-10位中文、英文、数字" clearable />
          </Form.Item>
          <Form.Item label="钱包地址：" name="password">
            <Input placeholder="请输入42位USDT钱包地址" clearable />
          </Form.Item>
          <Form.Item label="确认地址：" name="password">
            <Input placeholder="请再次确认42位USDT钱包地址" clearable />
          </Form.Item>
          <div className="notice">
            重要：请确认42位 USDT钱包地址正确无误，否则资金将不可找回
          </div>
          <Form.Item label="邮箱" extra={<a>验证码</a>}>
            <Input placeholder="2407***q.com" />
          </Form.Item>
          <Form.Item label="验证码" name="password">
            <Input placeholder="请输入验证码" clearable />
          </Form.Item>
        </Form>
      </div>
      <div className="confirm">确认保存</div>
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
    </div>
  );
};
export default AddWalletPage;
