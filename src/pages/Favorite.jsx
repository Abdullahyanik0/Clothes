import React from "react";
import Layout from "Layout/Layout";
import { useState } from "react";

const Favorite = () => {
  const card = localStorage.getItem("items");


  const [item, setItem] = useState([card]);
  console.log(item);

  return (
    <Layout>
      <ul>
        {item.map((item) => (
          <li key={item._id}>{item}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Favorite;
