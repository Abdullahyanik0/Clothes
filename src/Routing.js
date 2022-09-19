import React from "react";
import Home from "pages/Home";
import DetailPage from "pages/DetailPage";
import CategoryPage from "pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "pages/User";
import Favorite from "pages/Favorite";
import Element from "Element";
import PageNotFound from "components/atoms/PageNotFound";
import SingIn from "pages/SingIn";

const Routing = () => {
  const items = [
    {
      path: "/",
      element: <Home />,
      exact: true,
      isAuthProtected: false,
    },
    {
      path: "detailpage/:id",
      element: <DetailPage />,
      isAuthProtected: false,
    },
    {
      path: "categorypage/:id",
      element: <CategoryPage />,
      isAuthProtected: false,
    },
    {
      path: "categorypage",
      element: <CategoryPage />,
      isAuthProtected: false,
    },
    {
      path: "user",
      element: <User />,
      isAuthProtected: false,
    },
    {
      path: "singin",
      element: <SingIn />,
      isAuthProtected: false,
    },
    {
      path: "favorite",
      element: <Favorite />,
      isAuthProtected: true,
    },
    { path: "*", element: <PageNotFound /> },
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
