import React from "react";
import logo from "../../images/logo.png";
import Navbar from "../molecules/Navbar";
import NavHeader from "../molecules/NavHeader";
import { BsSearch } from "react-icons/bs";
import DarkButton from "../atoms/DarkButton";
import { useSelector, useDispatch } from "react-redux";
import { changeHeaderColor } from "redux/CardSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const color = useSelector((state) => state.card.headerColor);

  const [checked, setChecked] = React.useState(true);

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
            <p>Dark Mode</p>
            <DarkButton
              checked={checked}
              {...label}
              onChange={() => dispatch(changeHeaderColor())}
              onClick={handleChange}
            />
          </div>
          <div className="w-72 xxs:hidden xxm:!hidden flex items-center relative">
            <input
              className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
              placeholder="Search"
              type="text"
            />

            <BsSearch size={20} className="absolute  right-2 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
