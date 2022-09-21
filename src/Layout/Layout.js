import React from "react";
import Header from "components/organizm/Header";
import Footer from "components/organizm/Footer";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const color = useSelector((state) => state.card.headerColor)
  return (
    <div className={`${color}`}>
      <Header />
      <div>
        
        <div className="w-10/12 xxs:w-[95%] m-auto xs:w-full ">{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
