import React from "react";
import LoginHeader from "components/organizm/LoginHeader";
import BottomBar from "../components/molecules/BottomBar";
import Footer from "components/organizm/Footer";

const LoginLayout = ({ children }) => {
  return (
    <div>
      <LoginHeader />
      <div className="pb-[135px]">{children}</div>
      <Footer />
      <BottomBar />
    </div>
  );
};

export default LoginLayout;
