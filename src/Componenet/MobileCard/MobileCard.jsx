import React from "react";

const MobileCard = ({ mobile }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm hover:shadow-2xl hover:transition duration-300">
      <img
        className="h-70 object-cover"
        src={mobile.image}
        alt="mobile image"
      />
      <div className="px-5">
        <h2 className="card-title mt-3">{mobile.name}</h2>
        <div className="flex justify-between items-center">
          <p className="font-bold">{mobile.brand}</p>
          <p className="font-bold text-red-500">
            {mobile.price} <span className="text-black">BDT</span>
          </p>
        </div>
        <p className="mt-2 text-gray-500">{mobile.description}</p>
        <div className="mt-2 flex justify-between items-center">
          <p className="font-semibold">RAM : {mobile.ram}</p>
          <p className="font-semibold">Storage : {mobile.storage}</p>
        </div>

        <p className="mt-1">Battery : {mobile.battery}</p>
        <p className="mt-1">Camera : {mobile.camera}</p>

        <p className="bg-[#fd795e] text-white text-center mt-2 py-1 rounded-xl">
          {mobile.warranty}
        </p>
        <button className="bg-black text-white mt-3 w-full py-3 font-bold rounded-lg cursor-pointer hover:bg-white hover:text-black hover:transition duration-400">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default MobileCard;
