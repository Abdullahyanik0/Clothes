import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "./BasketCard";
import { removeState } from "redux/CardSlice";
import { useDispatch } from "react-redux";

const BasketBoard = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.card.items);
  console.log(items);

  return items.length > 0 ? (
    <div className="xl:flex xl:justify-center ">
      <div className="mt-12 xl:w-8/12">
        {items?.map((item) => (
          <BasketCard
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
        <div className="flex justify-end ">
          <button
            onClick={() => dispatch(removeState())}
            className="bg-[#3d7c7d]   w-48 rounded hover:bg-opacity-90 my-4 ease-in duration-200 h-14 text-white text-xl font-semibold"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-center mb-24 mt-8">
      <h1 className="text-2xl font-semibold  underline-offset-4 underline">
        Your Shopping Cart is Empty
      </h1>

      <div className="text-center my-12 ">
        <Link
          to="/"
          className="bg-[#3d7c7d] p-4  w-48 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-24 text-white text-xl font-semibold"
        >
          Keep Shopping
        </Link>
      </div>
    </div>
  );
};

export default BasketBoard;
