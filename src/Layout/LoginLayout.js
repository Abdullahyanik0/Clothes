import React from "react";
import LoginHeader from "components/organizm/LoginHeader";
import BottomBar from "../components/molecules/BottomBar";


const LoginLayout = ({ children }) => {
  return (
    <div>
      <LoginHeader />
      <div className="pb-[135px]">{children}</div>

      <BottomBar />
 
    </div>
  );
};

export default LoginLayout;
