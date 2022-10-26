import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = ({
  title,
  price,
  name,
  selected,
  quantity,
  imgUrl,
  subtitle,
  id,
}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/detailpage/" + id);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="flex flex-col mb-4 text-black  relative cursor-pointer hover:scale-105 drop-shadow-sm    xxs:w-full  bg-white hover:text-gray-700 shadow-2xl shadow-gray-700"
      >
        <img className="w-full" src={imgUrl} alt="" />

        <div className="px-2 ">
          <p className="font-semibold py-2 ">{name}</p>
          <p className="py-1 font-bold ">$ {price}</p>
        </div>
      </div>
    </>
  );
};

export default OrderCard;
