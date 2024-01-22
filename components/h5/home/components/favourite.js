import react, { useState, useEffect } from "react";
import styles from "./favourite.module.scss";
import { StarFilled } from "@ant-design/icons";
import { useGlobalState } from "@/hooks/global";
import { userApi } from "@/requests/frontend";

const Favourite = (props) => {
  const [{ user, lang }, dispatch] = useGlobalState();
  const [heart, setHeart] = useState(props.favourite == "1" ? true : false);

  const clickHandle = async () => {
    if (heart) {
      const res = await userApi.doDelete({
        id: props.id,
        employeecode: user.employeecode,
      });
      if (res.code == "1") {
        setHeart(false);
      }
    } else {
      const res = await userApi.addUserPost({
        id: props.id,
        employeecode: user.employeecode,
      });
      if (res.code == "1") {
        setHeart(true);
      }
    }
  };

  return (
    <div className={styles.favouriteBox}>
      <div className={heart ? "heart active" : "heart"} onClick={clickHandle}>
        <StarFilled />
      </div>
    </div>
  );
};
export default Favourite;
