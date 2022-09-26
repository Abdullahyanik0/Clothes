import React from "react";
import LoginHeader from "components/organizm/LoginHeader";
import { useSelector } from "react-redux";
import BottomBar from "../components/molecules/BottomBar";
import Footer from "components/organizm/Footer";

const LoginLayout = ({ children }) => {
  const color = useSelector((state) => state.card.headerColor);

  return (
    <div className={`${color} `}>
      <LoginHeader />
      <div className="mb-36">{children}</div>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default LoginLayout;
