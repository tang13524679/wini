import Loading from "@/components/loading";
import styles from "./page-loading.module.scss";

export default function PageLoading() {
  return (
    <div className={styles.loadingBox}>
      <div className="grid place-content-center" style={{ height: "80vh" }}>
        <Loading />
      </div>
    </div>
  );
}
