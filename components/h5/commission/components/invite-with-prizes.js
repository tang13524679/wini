import react, { useState } from "react";
import styles from "./invite-with-prizes.module.scss";
import { Modal } from "antd-mobile";
import ShaeModal from "./shareModal";
import { useRouter } from "next/router";
import store from "store";

const InviteWithPrizes = () => {
  const [visible, setVisible] = useState(false);
  const [isWithdraw, setIsWithdraw] = useState(true);
  const [isShare, setIsShare] = useState(false);
  const router = useRouter();
  const userStore = store.get("user");

  const withdraw = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit">成功邀请，立即见收益</div>
          <p>
            <span></span>成功邀请好友，您都会获得以下相应的奖励。
          </p>
          <div className="txt">(根据好友提款数额，系统自动计算相对应奖励）</div>
        </div>
        <ul className="withdraw-ul">
          <li>
            <div className="num">1</div>
            <p>
              您的朋友存款启动后，您将共有 <span>1</span> 次获得朋友的
              存款额外奖励，每次获得最高 <span>500</span> 元奖励。
            </p>
          </li>
          <li>
            <div className="num">2</div>
            <p>
              第 <span>2</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
          <li>
            <div className="num">3</div>
            <p>
              第 <span>3</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
          <li>
            <div className="num">4</div>
            <p>
              第 <span>4</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
          <li>
            <div className="num">5</div>
            <p>
              第 <span>5</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
          <li>
            <div className="num">6</div>
            <p>
              第 <span>6</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
          <li>
            <div className="num">7</div>
            <p>
              第 <span>7</span> 次成功提款：立即获得最高
              <span>500</span> 奖励
            </p>
          </li>
        </ul>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          我已知晓
        </div>
      </div>
    );
  };

  const income = () => {
    return (
      <div className="modal-box">
        <div className="modal-title">
          <div className="tit income-tit">
            永久产出收益，下线综合提成10%<div>利润分成！</div>
          </div>
          <p className="p">
            <span></span>
            <div>
              下线会员带来永久的持续收益，无论是存款、游戏投注、下线邀请好友（无限制分享下线
              的10%收益）等正常的用户行为，均带来持续
              的收益。以下是返利比例图示。
            </div>
          </p>
        </div>
        <ul className="income-ul">
          <li>
            <span>体育</span>
            <div className="num">0.2%</div>
          </li>
          <li>
            <span>体育</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>老虎机/捕鱼</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>彩票</span>
            <div className="num">0.1%</div>
          </li>
          <li>
            <span>棋牌</span>
            <div className="num">0.3%</div>
          </li>
          <li>
            <span>充值返利</span>
            <div className="num">0.2%</div>
          </li>
        </ul>
        <div
          className="modal-btn"
          onClick={() => {
            setVisible(false);
          }}
        >
          我已知晓
        </div>
      </div>
    );
  };

  return (
    <div className={styles.box}>
      <div className="title">
        <h3>
          每邀请<span>一名好友</span>
        </h3>
        <h4>
          每邀请<span>以下奖励</span>
        </h4>
      </div>
      <div className="tab-box">
        <div className="tab tab1">
          <p>奖金高达</p>
          <div className="num">3888</div>
          <div
            className="btn"
            onClick={() => {
              setVisible(true);
              setIsWithdraw(true);
            }}
          >
            好友提现
          </div>
        </div>
        <div className="tab tab2">
          <p>持续收益</p>
          <div className="num">20%</div>
          <div
            className="btn"
            onClick={() => {
              setVisible(true);
              setIsWithdraw(false);
            }}
          >
            综合提成
          </div>
        </div>
      </div>
      <ShaeModal title="立即推广" />
      <div className="invite-list">
        <div
          className="btn"
          onClick={() => {
            if (userStore) {
              router.push("/commission/invitation-income");
            } else {
              router.push("/login");
            }
          }}
        >
          邀请收益
        </div>
        <div
          className="btn"
          onClick={() => {
            if (userStore) {
              router.push("/commission/unique-offer");
            } else {
              router.push("/login");
            }
          }}
        >
          独特优惠
        </div>
      </div>
      <Modal
        visible={visible}
        closeOnAction
        showCloseButton
        content={isWithdraw ? withdraw() : income()}
        onClose={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default InviteWithPrizes;
