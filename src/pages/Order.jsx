import axios from "axios";
import Card from "components/atoms/Card";
import Layout from "Layout/Layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);

  const url = "https://ecommerceappexpress.herokuapp.com/api/order";
  const token = localStorage.getItem("token");
  const getOrder = async () => {
    await axios.get(url, { headers: { token } }).then((response) => {
      setOrder(response?.data?.orders);
    });
  };
  console.log(order);
  useEffect(() => {
    getOrder();
  }, []);

  return (
    <Layout>
      <div>
        <h1 className="text-center text-2xl font-semibold my-4">Last Orders</h1>
        <div className="grid grid-cols-4 gap-12 text-black xxs:grid-cols-2 xxs:gap-y-4 mb-20">
          {order.map((or) =>
            or.orders.map((orr) => (
              <Card
                key={orr?._id}
                price={orr?.price}
                categories={orr?.categories}
                selected={orr?.selected}
                imgUrl={orr?.imgUrl}
                name={orr?.name}
                title={orr?.title}
                subtitle={orr?.subtitle}
                quantity={orr?.quantity}
                id={orr?._id}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Order;
