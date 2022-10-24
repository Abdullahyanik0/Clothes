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
        <div className="flex items-center">
          <div className="flex gap-x-3   ">
            <img
              className="w-5 h-4"
              src="https://1.bp.blogspot.com/-WQgdz_jTVxs/X_BhFzR8q3I/AAAAAAAACOI/LKZzfOzEbLQ-HF8jF8qAAyVWaZax-rpcQCNcBGAsYHQ/s842/a4-turk-bayragi-indir-3.jpg"
              alt=""
            />
            Tr/Tr
            <MdKeyboardArrowDown size={20} />
          </div>
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
