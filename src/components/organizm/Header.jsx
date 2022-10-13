import React, { useContext } from "react";
import logo from "../../images/logo.png";
import Navbar from "../molecules/Navbar";
import NavHeader from "../molecules/NavHeader";
import { Link } from "react-router-dom";
import Search from "components/atoms/Search";
import ToggleButton from "components/atoms/ToggleButton";
import { ThemeContext } from "context/ThemeContext";

const Header = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <header
      className={`header-container ${
        darkMode ? "bg-[#373739] " : ""
      } sticky top-0 z-10 bg-white opacity-90`}
    >
      <NavHeader />
      <div className="flex justify-center xxs:p-2 border-y-[1px] h-[91px] items-center p-11  font-bold text-[13px] ">
        <div className="w-full flex justify-between items-center ">
          <Link to="/">
            <img className="xxs:w-24 w-24 xxs:m-0  ml-3" src={logo} alt="" />
          </Link>
          <Navbar />
          <div className="absolute flex  items-center right-[330px] xxl:right-12 xxl:pt-3">
            <ToggleButton />
          </div>
          <div className="xxm:hidden">
            <Search />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
