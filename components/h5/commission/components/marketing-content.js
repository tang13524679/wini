import react from "react";
import styles from "./marketing-content.module.scss";
import ShaeModal from "./shareModal";
import { t } from "@/utils/translate";

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
      <ShaeModal title={t("Promotenow")} />
    </div>
  );
};

export default MarketingContent;

const awardHandle = () => {
  return (
    <div className="content">
      <div className="content-box">
        <div className="tit">
          <span>{t("Contributionrewards")}</span>
        </div>
        <div className="award-box">
          <div className="award-title">
            <p>
              <span></span>
              {t("SuccessInvitationaward")}
            </p>
            <div className="txt">{t("correspondingReward")}</div>
          </div>
          <ul className="invite-ul">
            <li>
              <div className="num">1</div>
              <p>
                {t("initiatedTotal")}
                <span>1</span> {t("secondbestfriend")}
                {t("Depositbonus")} <span>500</span> {t("yuanreward")}
              </p>
            </li>
            <li>
              <div className="num">2</div>
              <p>
                {t("No")} <span>2</span> {t("text")}
                <span>500</span>
                {t("award")}
              </p>
            </li>
            <li>
              <div className="num">3</div>
              <p>
                {t("No")} <span>3</span> {t("text")}
                <span>500</span> {t("award")}
              </p>
            </li>
            <li>
              <div className="num">4</div>
              <p>
                {t("No")} <span>4</span> {t("text")}
                <span>500</span> {t("award")}
              </p>
            </li>
            <li>
              <div className="num">5</div>
              <p>
                {t("No")} <span>5</span> {t("text")}
                <span>500</span> {t("award")}
              </p>
            </li>
            <li>
              <div className="num">6</div>
              <p>
                {t("No")} <span>6</span> {t("text")}
                <span>500</span> {t("award")}
              </p>
            </li>
            <li>
              <div className="num">7</div>
              <p>
                {t("No")} <span>7</span> {t("text")}
                <span>500</span> {t("award")}
              </p>
            </li>
          </ul>
          <div className="bottom-tit">{t("sustainedincome")}</div>
          <div className="modal-title">
            <p className="p">
              <span></span>
              <div>{t("text2")}</div>
            </p>
          </div>
          <ul className="income-ul">
            <li>
              <span>{t("SX")}</span>
              <div className="num">0.2%</div>
            </li>
            <li>
              <span>{t("TY")}</span>
              <div className="num">0.1%</div>
            </li>
            <li>
              <span>{t("Slots/Fishing")}</span>
              <div className="num">0.3%</div>
            </li>
            <li>
              <span>{t("CP")}</span>
              <div className="num">0.1%</div>
            </li>
            <li>
              <span>{t("QP")}</span>
              <div className="num">0.3%</div>
            </li>
            <li>
              <span>{t("RechargeRebate")}</span>
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
          <span>{t("Makemoneyeasily")}</span>
        </div>
        <ul className="step-ul">
          <li>
            <div className="text">
              <span>1</span>
              {t("Choosepromotionmethod")}
            </div>
            <p>{t("socialcontact")}</p>
            <img src="/assets/commission/step1.png" />
          </li>
          <li>
            <div className="text">
              <span>2</span>
              {t("steplisttext1")}
            </div>
            <p>{t("steplisttext2")}</p>
            <img src="/assets/commission/step2.png" />
          </li>
          <li>
            <div className="text">
              <span>3</span>
              {t("steplisttext3")}
            </div>
            <p>{t("steplisttext4")}</p>
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
            <span>{t("Promotionplatformsummary")}</span>
          </div>
          <ul className="platform-ul">
            <li>
              <div className="left">
                <div className="text">
                  <span>1</span>
                  {t("Socialplatforms")}
                </div>
                <p>
                  {t("like")}Whatsapp、facebook、Telegram、Wechat{t("wait")}
                </p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform1.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>2</span>
                  {t("Newmedia")}
                </div>
                <p>
                  {t("like")}instagram、tiktok、Youtube{t("wait")}
                </p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform2.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>3</span>
                  {t("Livebroadcastplatform")}
                </div>
                <p>
                  {t("like")}BIGO、MICO、Uplive、Likee{t("wait")}
                </p>
              </div>
              <div className="right">
                <img src="/assets/commission/platform3.png" />
              </div>
            </li>
            <li>
              <div className="left">
                <div className="text">
                  <span>4</span>
                  {t("Otherpromotionplatforms")}
                </div>
                <p>
                  {t("like")}AiScore{t("forumtext")}
                </p>
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
            <span>{t("skilltitle")}</span>
          </div>
          <div className="skill-content">
            <div className="skill-tit">{t("skilltit")}</div>
            <p>
              <span>{t("skilllisttit1")}</span>
              {t("skilllisttext1")}
            </p>
            <p>
              <span>{t("skilllisttit2")}</span>
              {t("skilllisttext2")}
            </p>
            <p>
              <span>{t("skilllisttit3")}</span>
              {t("skilllisttext3")}
            </p>
            <p>
              <span>{t("skilllisttit4")}</span>
              {t("skilllisttext4")}
            </p>
            <p>
              <span>{t("skilllisttit5")}</span>
              {t("skilllisttext5")}
            </p>
            <p>
              <span>{t("Kindtips")}</span>
              {t("skilllisttext6")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
