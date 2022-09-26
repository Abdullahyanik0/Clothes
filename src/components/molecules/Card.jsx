import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({
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
        className="flex xxs:min-h-[390px] cursor-pointer hover:scale-105 drop-shadow- mt-12  flex-col w-64 max-w-60  xxs:w-full  bg-white hover:text-gray-700 shadow-2xl shadow-gray-700"
      >
        <div>
          <img className="w-full" src={imgUrl} alt="" />
        </div>
        <div>
          <div className="flex pl-4 gap-x-1 py-2">
            <div className="bg-[#967E76] p-[10px] rounded-full"></div>
            <div className="bg-[#B7C4CF] p-[10px] rounded-full"></div>
            <div className="bg-[#EEE3CB] p-[10px] rounded-full"></div>
          </div>
          <div className="px-4 ">
            <p className="font-semibold py-2 ">{name}</p>
            <p className="py-1 font-bold ">$ {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
