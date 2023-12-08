import react, { useEffect } from "react";
import CommissionH5 from "@/components/h5/commission";
import MobileNav from "@/components/mobile-nav";
import TabBar from "@/components/h5/components/tab-bar";

const Commission = () => {
  return (
    <div className="overflow-auto">
      <CommissionH5></CommissionH5>
      <TabBar />
    </div>
  );
};

export default Commission;
