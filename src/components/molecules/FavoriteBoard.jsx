import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FavoriteCard from "./FavoriteCard";

const FavoriteBoard = () => {
  const items = useSelector((state) => state.favorite.favorite);
  console.log(items);

  return items.length > 0 ? (
    <div className="xl:flex xl:justify-center ">
      <div className="mt-12 xl:w-8/12 ">
        {items?.map((item) => (
          <FavoriteCard
            key={item?._id}
            price={item?.price}
            categories={item?.categories}
            selected={item?.selected}
            imgUrl={item?.imgUrl}
            name={item?.name}
            title={item?.title}
            subtitle={item?.subtitle}
            quantity={item?.quantity}
            id={item?._id}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="text-center mb-24 mt-8">
      <h1 className="text-2xl font-semibold  underline-offset-4 underline">
        Your Favorite is Empty
      </h1>

      <div className="text-center my-12 ">
        <Link
          to="/"
          className="bg-[#3d7c7d]  p-4 w-48 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-14 text-white text-xl font-semibold"
        >
          Keep Shopping
        </Link>
      </div>
    </div>
  );
};

export default FavoriteBoard;
