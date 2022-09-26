import React from "react";
import Layout from "Layout/Layout";
import { useSelector } from "react-redux";

const Basket = () => {
  const items = useSelector((state) => state.card.items);
  console.log(items);
  return <Layout>{items}</Layout>;
};

export default Basket;
