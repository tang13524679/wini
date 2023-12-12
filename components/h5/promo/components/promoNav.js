import react, { useEffect } from "react";
import styles from "./promoNav.module.scss";
import { useRouter } from "next/router";
import { useGlobalState } from "@/hooks/global";
import { Toast } from "antd-mobile";

const PromoNav = (props) => {
  const router = useRouter();
  const [{ user }, dispatch] = useGlobalState();

  return (
    <div className={styles.navlist}>
      {props.list.map((item) => {
        return (
          <div
            className={`${props.activeState == item.id ? "active" : ""} item`}
            key={item.id}
            onClick={() => {
              props.setActiveState(item.id);
            }}
          >
            <img src={item.activityIcon} />
            <p>{item.activity}</p>
          </div>
        );
      })}
      <div
        className="record-btn"
        onClick={async () => {
          if (user) {
            router.push(props.href);
          } else {
            await Toast.show({
              content: "未登录，请先登录",
            });
            router.push("/login");
          }
        }}
      >
        {props.record}
      </div>
    </div>
  );
};
export default PromoNav;
