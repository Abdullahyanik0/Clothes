import React from "react";
import LoginHeader from "components/organism/LoginHeader";
import BottomBar from "../components/molecules/BottomBar";
import { useSelector } from "react-redux";

const LoginLayout = ({ children }) => {
  const color = useSelector((state) => state.card.headerColor);
  return (
    <div>
      <LoginHeader />
      <div className={`${color}`}>
        <div className="h-screen pt-8">{children}</div>
      </div>
      <BottomBar />
    </div>
  );
};

export default LoginLayout;
