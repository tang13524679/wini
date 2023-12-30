import react, { useState } from "react";
import styles from "./shareModal.module.scss";
import { Popup } from "antd-mobile";
import copy from "copy-to-clipboard";
import { Toast } from "antd-mobile";
import { getDomain } from "@/utils/common";
import { useGlobalState } from "@/hooks/global";

const ShaeModal = (props) => {
  const [{ user }] = useGlobalState();
  const [visible, setVisible] = useState(false);
  const copyCot = (value) => {
    copy(value);
    Toast.show({
      content: "复制成功",
    });
  };
  return (
    <>
      {!props.isMore && (
        <div
          className={styles.shareBtn}
          onClick={() => {
            setVisible(true);
          }}
        >
          {props.title}
        </div>
      )}
      {props.isMore && (
        <div
          className={styles.more}
          onClick={() => {
            setVisible(true);
          }}
        >
          <img src="/assets/commission/icon_more.png" />
          <p>More</p>
        </div>
      )}
      <Popup
        visible={visible}
        onMaskClick={() => {
          setVisible(false);
        }}
        onClose={() => {
          setVisible(false);
        }}
        bodyStyle={{ height: "305px" }}
      >
        <div className={styles.sharePopup}>
          <div className="title">立即分享给好友</div>
          <div className="box">
            <div className="icon">
              <img src="/assets/commission/icon_fb.png" />
              <p>Facebook</p>
            </div>
            <div className="icon">
              <img src="/assets/commission/icon_wa.png" />
              <p>Whatsapp</p>
            </div>
            <div className="icon">
              <img src="/assets/commission/icon_tele.png" />
              <p>Telegram</p>
            </div>
            <div className="icon">
              <img src="/assets/commission/icon_tw.png" />
              <p>Twitter</p>
            </div>
            <div className="icon">
              <img src="/assets/commission/icon_gxh.png" />
              <p>个性化</p>
            </div>
            <div
              className="icon"
              onClick={() => {
                copyCot(
                  `${getDomain()}/login?agentCode=${
                    user.employeecode
                  }&source=FB`
                );
              }}
            >
              <img src="/assets/commission/icon_fz.png" />
              <p>复制链接</p>
            </div>
          </div>
          <div
            className="btn"
            onClick={() => {
              setVisible(false);
            }}
          >
            取消
          </div>
        </div>
      </Popup>
    </>
  );
};

export default ShaeModal;
