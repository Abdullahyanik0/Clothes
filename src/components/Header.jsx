import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";
import NavHeader from "./NavHeader";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 bg-white">
      <NavHeader />
      <div className="flex justify-center xxs:p-2 border-y-[1px] h-[91px] items-center p-11  font-bold text-[13px] ">
        <div className="w-full flex justify-between items-center ">
          <a href="/">
            <img className="xxs:w-24 w-24 xxs:m-0  ml-3" src={logo} alt="" />
          </a>
          <Navbar />
          <div className="w-72 xxs:hidden flex items-center relative">
            <input
              className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
              placeholder="Search"
              type="text"
            />
            <BsSearch size={20} className="absolute right-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
