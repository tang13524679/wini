import react, { useEffect } from "react";
import dynamic from "next/dynamic";
const CommissionH5 = dynamic(() => import("@/components/h5/commission"));
const TabBar = dynamic(() => import("@/components/h5/components/tab-bar"));

const Commission = () => {
  return (
    <div className="overflow-auto">
      <CommissionH5></CommissionH5>
      <TabBar />
    </div>
  );
};

export default Commission;
