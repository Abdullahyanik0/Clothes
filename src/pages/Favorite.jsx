import React from "react";
import Layout from "Layout/Layout";
import { useState } from "react";
import { Card } from "@mui/material";

const Favorite = () => {
  const card = localStorage.getItem("items");

  const [item, setItem] = useState([card]);
  console.log(item);

  return (
    <Layout>
      {item.map((item) => (
        <Card key={item._id} name={card?.name} />
      ))}
    </Layout>
  );
};

export default Favorite;
