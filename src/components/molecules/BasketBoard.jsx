import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BasketCard from "./BasketCard";

import { useState, useEffect } from "react";

const BasketBoard = () => {
  const [totals, setTotals] = useState([]);

  const items = useSelector((state) => state.card.items);

  const total = items?.map((it) => it.price * it.quantity);
  useEffect(() => {
    const CountTotal = () => {
      const totaled = items.reduce(function (res, item) {
        return res + item.price * item.quantity;
      }, 0);
      setTotals(totaled.toFixed(2));
   
    };
    CountTotal();
  }, [total]);

  return items.length > 0 ? (
    <div className="flex  justify-center ">
      <div className="xl:w-full flex-col items-center  flex xl:justify-center ">
        <div className="mt-12 xl:w-8/12 justify-center items-center flex  flex-col  ">
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
        </div>
        <div className="font-semibold text-center text-xl ">
          Total: $ {totals}
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
