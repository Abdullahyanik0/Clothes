import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <div className="w-10/12 xxs:w-[95%] m-auto xs:w-full ">{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
