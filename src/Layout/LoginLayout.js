import React from "react";
import LoginHeader from "components/LoginHeader";
import Footer from "components/Footer";

const LoginLayout = ({ children }) => {
  return (
    <>
      <LoginHeader />
      <div className="mb-36">{children}</div>
      <Footer />
    </>
  );
};

export default LoginLayout;
