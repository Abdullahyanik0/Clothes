import React from "react";
import Layout from "Layout/Layout";
import HeroSlider from "components/molecules/HeroSlider";

import BasketBoard from "components/molecules/BasketBoard";


const Basket = () => {
  
  return (
    <Layout>
      <BasketBoard />
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
