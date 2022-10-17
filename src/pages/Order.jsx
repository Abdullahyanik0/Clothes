import axios from "axios";
import Card from "components/atoms/Card";
import Layout from "Layout/Layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Order = () => {
  const [order, setOrder] = useState([]);

  const order3 = order.map((asd) => asd.orders.map((asdd) => asdd.prodId));

  const order4 = order3.map((qwe) => qwe[0][0]);
  /*   console.log(order4); */
  /* console.log(
    order?.map((oitem) =>
      oitem.orders.map((ooitem) => ooitem.prodId.map((oooitem) => oooitem))
    )
  ); */

  const url = "https://ecommerceappexpress.herokuapp.com/api/order";
  const token = localStorage.getItem("token");
  const getOrder = async () => {
    await axios.get(url, { headers: { token } }).then((response) => {
      setOrder(response?.data?.orders);
    });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <Layout>
      <div className="h-screen  ">
        <h1 className="text-center text-2xl font-semibold my-4">Last Orders</h1>
        {order4.map((or) => (
          <Card
            key={or?._id}
            price={or?.price}
            categories={or?.categories}
            selected={or?.selected}
            imgUrl={or?.imgUrl}
            name={or?.name}
            title={or?.title}
            subtitle={or?.subtitle}
            quantity={or?.quantity}
            id={or?._id}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Order;
