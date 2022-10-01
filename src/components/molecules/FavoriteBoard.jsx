import React from "react";
import { useSelector } from "react-redux";
import BasketCard from "./BasketCard";

const BasketBoard = () => {
  const items = useSelector((state) => state.favorite.favorite);
  console.log(items);

  return (
    <div className="mt-12">
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
  );
};

export default BasketBoard;
