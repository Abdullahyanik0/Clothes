import React from "react";
import Layout from "Layout/Layout";

import HeroSlider from "components/molecules/HeroSlider";

const Basket = () => {
  return (
    <Layout>
      <div className="text-center mb-24 mt-8">
        <h1 className="text-2xl font-semibold  underline-offset-4 underline">
          Your Shopping Cart is Empty
        </h1>
        <div className="text-center my-12  " >
          <a
            href="/"
            className="bg-[#3d7c7d]  p-4 w-48 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
          >
            Keep Shopping
          </a>
        </div>
      </div>

      <div className="text-center my-4">
        <h1 className="font-semibold text-3xl">Recently Viewed</h1>
      </div>
      <HeroSlider />
      <div className="text-center my-4">
        <h1 className="font-semibold text-3xl">Best Sellers</h1>
      </div>
      <HeroSlider />
    </Layout>
  );
};

export default Basket;
