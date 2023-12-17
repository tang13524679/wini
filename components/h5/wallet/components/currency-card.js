import react, { useState } from "react";
import styles from "./currency-card.module.scss";
import { Input } from "antd";
import { useRouter } from "next/router";

const CurrencyCard = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className="card-box">
        <div className="title">选择要提款的加密货币钱包</div>
        <div className="card-list">
          <div className="item active">
            <div className="name">钱包地址：</div>
            <div className="content">
              <p>TC3GRdgsoTFzDa4qzdw8yhMcctCfbaCoJX</p>
              <p>协议: USDT-TRC20 bitpie</p>
            </div>
          </div>
          {/* {bankCardList.map((item, index) => {
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
          })} */}
          <div
            className="add-card"
            onClick={() => {
              router.push("/wallet/add-wallet");
            }}
          >
            + 添加加密货币钱包
          </div>
        </div>
        <Input
          // value={orderamount}
          placeholder="请输入金额"
          className="lineInput"
          type="number"
          suffix="HKD"
          // onChange={(e) => {
          //   setOrderamount(e.target.value);
          // }}
        />
        <div className="tit">
          当前参考汇率 <span>1 USDT=4.67 HKD</span>
        </div>
        <div className="tit">
          最终取款 <div className="num">USDT 0.00个</div>
        </div>
        <div className="confirm">确认取款</div>
        <div className="notice">
          <ul className="notice-list">
            <li>
              <div className="num">1</div>
              <p>您每日可提款10次（每日00：00重置）。</p>
            </li>
            <li>
              <div className="num">2</div>
              <p>
                取款前需完成存款金额的1倍有效投注额；若参与优惠，则需完成
                优惠的所需有效投注额。
              </p>
            </li>
            <li>
              <div className="num">3</div>
              <p>
                加密货币钱包需确保正确的物议和地址取款才能到账；错误信息
                请勿提文取款申请，需立即联系在线客服修改；提款将在1-5分钟
                完成（根据区块网络到账时间为准）。
              </p>
            </li>
            <li>
              <div className="num">4</div>
              <p>
                如利用本平台进行任何洗钱诈骗行为，本公司将保留权利终止
                会员服务及冻结其候户。
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CurrencyCard;
