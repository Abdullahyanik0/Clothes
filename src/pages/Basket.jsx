import React from "react";
import Layout from "Layout/Layout";
import HeroSlider from "components/molecules/HeroSlider";
import Buy from "components/molecules/Buy";
import { removeState } from "redux/CardSlice";
import BasketBoard from "components/molecules/BasketBoard";
import { useDispatch, useSelector } from "react-redux";

const Basket = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.items);
  console.log(items);
  return (
    <Layout>
      <BasketBoard />
      {items.length > 0 ? (
        <div className="flex gap-x-4 justify-between ">
          <Buy />
          <button
            onClick={() => dispatch(removeState())}
            className="bg-[#3d7c7d]   w-48 rounded hover:bg-opacity-90 my-4 ease-in duration-200 h-14 text-white text-xl font-semibold"
          >
            Clear Cart
          </button>
        </div>
      ) : (
        ""
      )}

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
