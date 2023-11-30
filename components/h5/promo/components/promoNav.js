import react from "react";
import styles from "./promoNav.module.scss";
import { useRouter } from "next/router";

const PromoNav = (props) => {
  const router = useRouter();

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
        onClick={() => {
          router.push(props.href);
        }}
      >
        {props.record}
      </div>
    </div>
  );
};
export default PromoNav;
