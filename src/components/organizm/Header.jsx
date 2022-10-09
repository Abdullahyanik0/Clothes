import React from "react";
import logo from "../../images/logo.png";
import Navbar from "../molecules/Navbar";
import NavHeader from "../molecules/NavHeader";
import DarkButton from "../atoms/DarkButton";
import { useSelector, useDispatch } from "react-redux";
import { changeHeaderColor } from "redux/CardSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Search from "components/atoms/Search";

const Header = () => {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const color = useSelector((state) => state.card.headerColor);

  const [checked, setChecked] = useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className={`sticky top-0 z-10  ${color} `}>
      <NavHeader />
      <div className="flex justify-center xxs:p-2 border-y-[1px] h-[91px] items-center p-11  font-bold text-[13px] ">
        <div className="w-full flex justify-between items-center ">
          <Link to="/">
            <img className="xxs:w-24 w-24 xxs:m-0  ml-3" src={logo} alt="" />
          </Link>
          <Navbar />
          <div className="absolute flex  items-center right-[330px] xxl:right-12 xxl:pt-3">
            <DarkButton
              checked={checked}
              {...label}
              onChange={() => dispatch(changeHeaderColor())}
              onClick={handleChange}
            />
          </div>
          <div className="xxm:hidden">
            <Search />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
