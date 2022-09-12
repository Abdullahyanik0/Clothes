import React from "react";
import LoginHeader from "components/LoginHeader";
import Footer from "components/Footer";

const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />
      {children}
      <div className="bottom-0 left-0 absolute w-full">
        <Footer />
      </div>
    </>
  );
};

export default LoginLayout;
