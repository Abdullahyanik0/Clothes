import Layout from "Layout/Layout";
import React from "react";
import useFetch from "hooks/useFetch";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Card from "components/atoms/Card";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const AllProducts = () => {
  const [total, setTotal] = useState();
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  console.log(skip);
  const [data, setData] = useState([]);
  const url = `https://ecommerceappexpress.herokuapp.com/api/product?limit=${limit}&skip=${skip}`;
  const handleChange = (event) => {
    setLimit(event.target.value);
  };
  const handlePageChange = (event, value) => {
    setSkip((value - 1) * limit);
    console.log(event.target.value);
  };
  const getData = async () => {
    await axios.get(url).then((response) => {
      setData(response.data.result.data);
      setTotal(response.data.result.totalDocs);
    });
  };
  useEffect(() => {
    getData();
  }, [limit, skip]);

  return (
    <Layout>
      <h1 className="text-center font-semibold text-2xl mt-6">All Products</h1>
      <div className="mt-6 flex justify-end">
        <FormControl className="w-20">
          <InputLabel id="demo-simple-select-label">Limit</InputLabel>
          <Select
            id="demo-simple-select"
            value={limit}
            label="Limit"
            onChange={handleChange}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={19}>15</MenuItem>
            <MenuItem value={total}>All</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="grid grid-cols-4 gap-12  text-black xxs:grid-cols-2 xxs:gap-y-4 xxs:pb-12 pb-20">
        {data?.map((item) => (
          <Card
            key={item?._id}
            price={item?.price}
            categories={item?.categories}
            selected={item?.selected}
            imgUrl={item?.imgUrl}
            name={item?.name}
            title={item?.title}
            subtitle={item?.subtitle}
            quantity={item?.quantity}
            id={item?._id}
          />
        ))}
      </div>
      <div className="flex justify-center items-center  pb-12 xxs:pb-24">
        <Pagination
          onChange={handlePageChange}
          count={Math.ceil(total / limit)}
          color="primary"
        />
      </div>
    </Layout>
  );
};

export default AllProducts;
