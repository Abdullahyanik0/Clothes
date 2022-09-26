import React from "react";
import Layout from "Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import Loading from "components/atoms/Loading";
import { useSelector, useDispatch } from "react-redux";

import Size from "../components/atoms/Size";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [basket, setBasket] = useState([]);

  const items = useSelector((state) => state.card.items);
  console.log(items);
  const dispatch = useDispatch();

  let params = useParams();
  const detail = params;

  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;

  const token = localStorage.getItem("token");

  const fetchData = () => {
    setLoading(true);
    axios

      .get(url, { headers: { token } })
      .then(function (response) {
        setData(response.data.product.shift());
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, [params]);

  /*   const handleAdd = () => {
    const arr = [basket,  data];
    setBasket(arr);
  };
 */
  return isLoading ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <div className="flex justify-center xxs:flex-col  mt-12 gap-x-16">
        <div className="w-96 xxs:w-full relative">
          <img className="w-full object-cover" src={data?.imgUrl} alt="" />
        </div>
        {basket?.map((basket) => (
          <div key={basket?._id}>{basket?.quantity}</div>
        ))}
        <div className="px-4 xxs:p-0 flex-col flex gap-y-6  justify-center">
          <p className="font-semibold py-2 ">{data?.name}</p>
          <p className="font-semibold py-2 ">{data?.subtitle}</p>
          <p className="py-1 font-bold ">$ {data?.price}</p>

          <p>4 interest-free payments of $42.48 with Klarna. Learn More</p>
          <Size />

          <div className="flex relative items-center">
            <button className="bg-black text-white w-full h-12 rounded">
              Add to cart
            </button>
            <div className="border-2 border-blue-400 ml-4 h-12 items-center flex w-12 justify-center">
              <button>
                <AiFillHeart
                  /*  onClick={() => dispatch(addCard(data?._id))} */
                  className="text-blue-800 "
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPage;
