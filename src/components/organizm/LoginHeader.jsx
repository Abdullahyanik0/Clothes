import React from "react";
import logo from "images/logo.png";
import { Link } from "react-router-dom";

const LoginHeader = () => {
  return (
    <div className="flex justify-center p-4 ">
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
    </div>
  );
};

export default LoginHeader;
