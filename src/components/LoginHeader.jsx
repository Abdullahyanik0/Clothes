import React from "react";
import logo from "images/logo.png";

const LoginHeader = () => {
  return (
    <div className="flex justify-center p-4 my-6">
      <a href="/">
        <img src={logo} alt="" />
      </a>
    </div>
  );
};

export default LoginHeader;
