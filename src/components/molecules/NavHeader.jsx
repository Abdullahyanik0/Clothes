import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { MdKeyboardArrowDown, MdOutlineShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const NavHeader = () => {
  const card = useSelector((state) => state.card.items);
  const favorite = useSelector((state) => state.favorite.favorite);
  const token = localStorage.getItem("token");

  return (
    <div className="h-[43px]  text-gray-600 flex xxm:hidden xxs:hidden  justify-between items-center mx-4 px-12 font-bold text-[12px]">
      <ul className="flex gap-x-3 cursor-pointer ">
        <li className="pr-1 font-extrabold">BURTON</li>
        <li>ANON</li>
        <li>Blog</li>
        <li>Purpose</li>
      </ul>
      <div className="flex gap-x-1">
        <h1 className="text-gray-500 font-medium">
          FREE SHIPPING FOR LOYALTY MEMBERS
        </h1>
        <p className="underline text-black cursor-pointer">JOIN NOW</p>
      </div>
      <div className="flex gap-x-3 !font-medium cursor-pointer">
        <div className="relative">
          <NavLink to="/favorite">
            {favorite.length ? (
              <div className="rounded-full flex justify-center items-center w-4 h-4 absolute -top-1 right-2 text-white bg-red-600">
                {favorite.length}
              </div>
            ) : (
              ""
            )}
            <AiOutlineHeart className="mr-4" size={20} />
          </NavLink>
        </div>
        <p>Stores</p>
        <div className="flex gap-x-3   ">
          <img
            className="w-5 h-4"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          Tr/Tr
          <MdKeyboardArrowDown size={20} />
        </div>
        <NavLink to="/user">
          {token ? (
            <Avatar
              className="!w-6 !h-6"
              alt="Cindy Baker"
              src="https://img-s3.onedio.com/id-61f6b7125866d7ab37b83ac2/rev-0/w-620/f-jpg/s-42dc3dd87c46a2e3227d7bdffad0adc161bacd11.jpg"
            />
          ) : (
            "Sign In"
          )}
        </NavLink>
        <div className="relative">
          <NavLink to="/basket">
            {card.length ? (
              <div className="rounded-full flex justify-center items-center w-4 h-4 absolute -top-1 -right-1 text-white bg-red-600">
                {card.length}
              </div>
            ) : (
              ""
            )}

            <MdOutlineShoppingBasket size={20} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavHeader;
