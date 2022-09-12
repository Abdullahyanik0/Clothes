import React from "react";
import Home from "pages/Home";
import DetailPage from "pages/DetailPage";
import CategoryPage from "pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "pages/User";
import Favorite from "pages/Favorite";
import Element from "Element";

const Routing = () => {
  const items = [
    {
      path: "/",
      element: <Home />,
      exact: true,
      isAuthProtected: false
      
    },
    {
      path: "detailpage/:id",
      element: <DetailPage />,
      isAuthProtected: true
     
    },
    {
      path: "categorypage/:id",
      element: <CategoryPage />,
      isAuthProtected: true     
    },
    {
      path: "categorypage",
      element: <CategoryPage />,
      isAuthProtected: true
    },
    {
      path: "user",
      element: <User />,
      isAuthProtected: false
    },
    {
      path: "favorite",
      element: <Favorite />,
   
    },
    /*  {
      path: "/Game/catch/:name",
      component: Game,
    }, */
  ];

  return (
    <BrowserRouter>
      <Routes>
        {items?.map((item) => (
          <Route
            key={item.path}
            path={item.path}
            element={<Element item={item} />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
