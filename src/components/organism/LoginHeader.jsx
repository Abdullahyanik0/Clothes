import React from "react";
import logo from "images/logo.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const LoginHeader = () => {
  const color = useSelector((state) => state.card.headerColor);
  return (
    <div className={`${color}`}>
      <div className="flex justify-center p-4 ">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default LoginHeader;
