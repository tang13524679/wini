import Header from "@/components/web/components/header";
import styles from "./pc-layouts.module.scss";
import PcNav from "@/components/web/components/pcNav";

export default function PcLayout({ children }) {
  return (
    <>
      <div className={styles.pcLayout}>
        <Header />
        <div className="layoutContent">
          <div className="nav-list">
            <PcNav />
          </div>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}
