import react from "react";
import styles from "./nav-bar.module.scss";
import { LeftOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

const NavBar = (props) => {
  const router = useRouter();
  return (
    <div className={styles.navBarBox}>
      <div
        className="nav-bar-left"
        onClick={() => {
          router.back();
        }}
      >
        <LeftOutlined style={{ color: "#329029", fontSize: "18px" }} />
      </div>
      <div className="nav-bar-title">{props.title}</div>
      <div className="nav-bar-right"></div>
    </div>
  );
};

export default NavBar;
