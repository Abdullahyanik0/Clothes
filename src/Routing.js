import React from "react";
import Home from "pages/Home";
import DetailPage from "pages/DetailPage";
import CategoryPage from "pages/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "pages/User";
import Basket from "pages/Basket";
import Element from "Element";
import PageNotFound from "components/atoms/PageNotFound";
import SingIn from "pages/SingIn";
import Favorite from "pages/Favorite";
import Order from "pages/Order";
import SearchPage from "pages/SearchPage";
import AllProducts from "pages/AllProducts";
import ScrollToTop from "components/atoms/ScrollToTop ";

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
      path: "basket",
      element: <Basket />,
      isAuthProtected: false,
    },
    {
      path: "favorite",
      element: <Favorite />,
      isAuthProtected: false,
    },
    {
      path: "order",
      element: <Order />,
      isAuthProtected: false,
    },
    {
      path: "search",
      element: <SearchPage />,
      isAuthProtected: false,
    },
    {
      path: "allproducts",
      element: <AllProducts />,
      isAuthProtected: false,
    },
    { path: "*", element: <PageNotFound /> },
  ];

  return (
    <BrowserRouter>
    <ScrollToTop/>
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
