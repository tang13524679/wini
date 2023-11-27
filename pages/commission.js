import react, { useEffect } from "react";
import CommissionH5 from "@/components/h5/commission";
import MobileNav from "@/components/mobile-nav";

const Commission = () => {
  return (
    <div className="overflow-auto">
      <CommissionH5></CommissionH5>
      <MobileNav />
    </div>
  );
};

export default Commission;
