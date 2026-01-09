import React from "react";

const Hero = () => {
  return (
    <div className="mt-5 md:mt-10 container pr-3 md:pr-4 md:mx-auto bg-[url(./assets/backgroun.jpg)] bg-cover bg-center py-10 md:py-25 rounded-3xl">
      <h1 className="text-right text-4xl font-bold text-white">
        Best Mobile Phones at Best Prices
      </h1>
      <h3 className="text-right text-xl font-semibold mt-3 text-gray-200">
        Affordable Prices & Best Deals
      </h3>
      <p className="font-bold text-xl ml-60 hidden md:block">Hello!</p>
      <p className="font-bold ml-55 hidden md:block">How are you?</p>
      <div className="flex justify-end">
        <p className="text-right mt-6 text-gray-200 w-120">
          “We sell original and brand new mobile phones at affordable prices.
          Latest models, trusted quality, and reliable service available.”
        </p>
      </div>
      <div className="flex justify-end">
        <p className="mt-6 text-white font-bold bg-[#fd795e] py-2 text-center w-75 rounded-xl">
          Cash & EMI Available
        </p>
      </div>
      <div className="flex justify-end mt-6">
        <button className="bg-black text-white cursor-pointer px-5 md:px-10 py-4 rounded-lg md:rounded-xl font-bold hover:bg-white hover:text-black hover:transition duration-400">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Hero;
