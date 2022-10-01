import React from "react";
import Layout from "Layout/Layout";
import HeroSlider from "components/molecules/HeroSlider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteBoard from "../components/molecules/FavoriteBoard";

const Favorite = () => {
  const items = useSelector((state) => state.favorite.favorite);
  console.log(items);
  return items ? (
    <Layout>
      {items ? (
        <div className="text-center mb-24 mt-8">
          <h1 className="text-2xl font-semibold  underline-offset-4 underline">
            Your Favorite is Empty
          </h1>

          <div className="text-center my-12  ">
            <Link
              to="/"
              className="bg-[#3d7c7d]  p-4 w-48 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
            >
              Keep Shopping
            </Link>
          </div>
        </div>
      ) : (
        ""
      )}
      <FavoriteBoard />
      <HeroSlider />
      <div className="text-center my-4">
        <h1 className="font-semibold text-3xl">Best Sellers</h1>
      </div>
      <HeroSlider />
    </Layout>
  ) : (
    <Layout>
      <FavoriteBoard />
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

export default Favorite;
