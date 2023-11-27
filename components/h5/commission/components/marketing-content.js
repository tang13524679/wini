import react from "react";
import styles from "./marketing-content.module.scss";
import ShaeModal from "./shareModal";

const MarketingContent = (props) => {
  return (
    <div className={styles.container}>
      <div className="title">
        <p>{props.title}</p>
        {props.tit && <span>{props.tit}</span>}
      </div>
      {props.type == "award" && awardHandle()}
      {props.type == "step" && stepHandle()}
      {props.type == "platform" && platformHandle()}
      <ShaeModal title="立即推广" />
    </div>
  );
};

export default MarketingContent;

const awardHandle = () => {
  return (
    <div className="content">
      <div className="content-box">
        <div className="tit">
          <span>贡献奖励</span>
        </div>
        <div className="award-box">
          <div className="award-title">
            <p>
              <span></span>成功邀请好友，您都会获得以下相应的奖励。
            </p>
            <div className="txt">
              (根据好友提款数额，系统自动计算相对应奖励）
            </div>
          </div>
          <ul className="invite-ul">
            <li>
              <div className="num">1</div>
              <p>
                您的朋友存款启动后，您将共有 <span>1</span> 次获得朋友
                的存款额外奖励，每次获得最高 <span>500</span> 元奖励。
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
          <div className="bottom-tit">持续收益</div>
          <div className="modal-title">
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
        </div>
      </div>
    </div>
  );
};

const stepHandle = () => {
  return (
    <div className="content">
      <div className="content-box">
        <div className="tit">
          <span>简单赚钱</span>
        </div>
        <ul className="step-ul">
          <li>
            <div className="text">
              <span>1</span>选择推广方式
            </div>
            <p>
              使用平台提供的社交分享等快捷功能，或者使用平台内
              个性化方式进行推广。
            </p>
            <img src="/assets/commission/step1.png" />
          </li>
          <li>
            <div className="text">
              <span>2</span>分享到您的渠道
            </div>
            <p>
              保存平台的二维码海报，邀请链接，将其分享到您的推
              广渠道内。并添加一段具有吸引力的文案：例（快来
              WIN1啦，返水超高）（每周有红包，WIN1全港唯一）
            </p>
            <img src="/assets/commission/step2.png" />
          </li>
          <li>
            <div className="text">
              <span>3</span>好友下载，成为下级
            </div>
            <p>
              好友打开您的链接下载，自动成为您的下级好友，为您带来丰厚的奖励哦。
            </p>
            <img src="/assets/commission/step3.png" />
          </li>
        </ul>
      </div>
    </div>
  );
};

const platformHandle = () => {
  return (
    <>
      <div className="content">
        <div className="content-box">
          <div className="tit">
            <span>推广平台汇总</span>
          </div>
          <ul className="platform-ul">
            <li>
              <div className="left">
                <div className="text">
                  <span>1</span>社交平台
                </div>
                <p>如：Whatsapp、facebook、Telegram、Wechat等</p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform1.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>2</span>新媒体/短视频平台
                </div>
                <p>如：instagram、tiktok、Youtube等</p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform2.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>3</span>直播平台
                </div>
                <p>如：BIGO、MICO、Uplive、Likee等</p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform3.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>4</span>其他推广平台
                </div>
                <p>如：AiScore足球直播、论坛、自建的网站、一些玩家群等</p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform4.png" />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <div className="content-box">
          <div className="tit">
            <span>推广小技巧</span>
          </div>
          <div className="skill-content">
            <div className="skill-tit">以下是推广大佬提供的推广技巧</div>
            <p>
              <span>技巧一：</span>
              将WIN1分享给您身边的玩足球、玩真人视讯、玩老虎机、玩彩票等等的朋友。
            </p>
            <p>
              <span>技巧二：</span>
              推广时，编辑平台特色功能(例高返水比例、极速存款取款操作流畅、每周有红包等)，配合相关的功能
              截图，有助于吸引人去了解，增加您的推广点击率和下 载转化。
            </p>
            <p>
              <span>技巧三：</span>
              将提款截图、游戏赢利截图、中大奖等图片做
              成短视频，发布到视频推广平台，年轻人更喜欢看视频。
            </p>
            <p>
              <span>技巧四：</span>
              以真实用户的角度，参加一些玩家群、论坛论讨、社交群组讨论等，向有需要的用户
              分享在WIN1的体验和 心得或游戏技巧。
            </p>
            <p>
              <span>技巧五：</span>
              针对性的去各大平台的玩家群或社交与在线游
              戏相关的群组等，查找那些正在玩在线赌场的玩家，跟玩
              家交流并推荐WIN1。
            </p>
            <p>
              <span>温馨提示：</span>
              平台会持续提供更多的推广技巧，同时会分
              享一些推广大佬真实的推广案例，供大家交流学习。
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
