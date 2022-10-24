import axios from "axios";
import Card from "components/atoms/Card";
import Layout from "Layout/Layout";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import OrderCard from "components/atoms/OrderCard";
import { Link } from "react-router-dom";

const Order = () => {
  const [order, setOrder] = useState([]);

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
      <div className="pb-[5000px] h-screen flex flex-col items-center ">
        <h1 className="text-center text-2xl font-semibold my-4">Last Orders</h1>
        {order?.length ? (
          order?.map((or, i) => (
            <div className="py-2 w-full  " key={i}>
              <Accordion>
                <AccordionSummary
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="flex items-center font-semibold gap-x-2">
                    Order {i + 1}{" "}
                    {or.orders?.map((orr, i) => (
                      <div key={i}>
                        <img
                          className="w-10 h-10 object-top object-cover  rounded-full    "
                          src={orr?.imgUrl}
                        />
                      </div>
                    ))}{" "}
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <div className="grid grid-cols-4  gap-12  text-black xxs:grid-cols-2 xxs:gap-y-8 ">
                    {or.orders?.map((orr, i) => (
                      <div key={i}>
                        <OrderCard
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
                      </div>
                    ))}
                  </div>
                </AccordionDetails>
              </Accordion>
            </div>
          ))
        ) : (
          <div className="text-center mb-24 mt-8">
            <h1 className="text-2xl font-semibold  underline-offset-4 underline">
              You have not yet created an order
            </h1>

            <div className="text-center my-12 ">
              <Link
                to="/"
                className="bg-[#3d7c7d] p-4  w-48 rounded hover:bg-opacity-90 my-8 ease-in duration-200 h-24 text-white text-xl font-semibold"
              >
                Keep Shopping
              </Link>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Order;
