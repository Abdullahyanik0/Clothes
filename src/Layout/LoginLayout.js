import React from "react";
import LoginHeader from "components/organizm/LoginHeader";
import Footer from "components/organizm/Footer";
import { useSelector } from "react-redux";

const LoginLayout = ({ children }) => {
  const color = useSelector((state) => state.card.headerColor)

  return (
    <div className={`${color}`}>
      <LoginHeader />
      <div className="mb-36">{children}</div>
      <Footer />
    </div>
  );
};

export default LoginLayout;
