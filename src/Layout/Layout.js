import React from "react";
import Header from "components/organizm/Header";

import BottomBar from "../components/molecules/BottomBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <div className="w-10/12 xxs:w-[95%] m-auto xs:w-full ">{children}</div>
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
