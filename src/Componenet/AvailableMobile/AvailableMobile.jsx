import React, { use } from "react";
import MobileCard from "../MobileCard/MobileCard";

const AvailableMobile = ({ fetchMobile }) => {
  let mobiles = use(fetchMobile);

  return (
    <div className="container mx-auto mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile}></MobileCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableMobile;
