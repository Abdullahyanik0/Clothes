import React from "react";
import logo from "../../images/logo.png";
import Navbar from "../molecules/Navbar";
import NavHeader from "../molecules/NavHeader";
import { Link } from "react-router-dom";
import Search from "components/atoms/Search";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white opacity-90">
      <NavHeader />
      <div className="flex justify-center xxs:p-2 border-y-[1px] h-[91px] items-center p-11  font-bold text-[13px] ">
        <div className="w-full flex justify-between items-center ">
          <Link to="/">
            <img className="xxs:w-24 w-24 xxs:m-0  ml-3" src={logo} alt="" />
          </Link>
          <Navbar />

          <div className="xxm:hidden">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
