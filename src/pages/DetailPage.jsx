import React from "react";
import Layout from "Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Loading from "components/Loading";

const DetailPage = () => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [items, setItems] = useState();
  let params = useParams();
  const detail = params;

  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;

  const fetchData = () => {
    setLoading(true);
    axios

      .get(url)
      .then(function (response) {
        setData(response.data.product[0]);
        setLoading(false);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [params]);

  const addFavorite = () => {
    const item = data._id;
    setItems((prevState) => ({ ...prevState, item }));
    localStorage.setItem("item", items);
  };

  return isLoading ? (
    <Layout>c
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <div className="flex justify-center xxs:flex-col  mt-12 gap-x-16">
        <div className="w-96 xxs:w-full relative">
          <img className="w-full object-cover" src={data?.imgUrl} alt="" />
        </div>
        <div className="px-4 xxs:p-0 flex-col flex gap-y-6  justify-center">
          <p className="font-semibold py-2 ">{data?.name}</p>
          <p className="font-semibold py-2 ">{data?.subtitle}</p>
          <p className="py-1 font-bold ">$ {data?.price}</p>

          <p>4 interest-free payments of $42.48 with Klarna. Learn More</p>
          <div className="flex gap-x-2 xxs:gap-1  ">
            <button className="rounded-full border-2 border-black hover:scale-105 w-10 h-10 text-xs">
              Xs
            </button>
            <button className="rounded-full border-2 border-black hover:scale-105 w-10 h-10 text-xs">
              S
            </button>
            <button className="rounded-full border-2 border-black hover:scale-105 w-10 h-10 text-xs">
              M
            </button>
            <button className="rounded-full border-2 border-black hover:scale-105 w-10 h-10 text-xs">
              L
            </button>
            <button className="rounded-full border-2 border-black hover:scale-105 w-10 h-10 text-xs">
              XL
            </button>
          </div>
          <div className="flex relative items-center">
            <button className="bg-black text-white w-full h-12 rounded">
              Select a Size
            </button>
            <div className="border-2 border-blue-400 ml-4 h-12 items-center flex w-12 justify-center">
              <button onClick={addFavorite}>
                <AiFillHeart className="text-blue-800 " size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
