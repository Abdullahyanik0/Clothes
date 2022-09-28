import React from "react";
import Layout from "Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { AiFillHeart } from "react-icons/ai";
import Loading from "components/atoms/Loading";
import { useSelector, useDispatch } from "react-redux";
import { addCard } from "redux/CardSlice";

import Size from "../components/atoms/Size";
import Comments from "components/atoms/Comments";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const items = useSelector((state) => state.card.items);
  console.log(items);
  const dispatch = useDispatch();

  let params = useParams();
  const detail = params;

  const url = `https://ecommerceappexpress.herokuapp.com/api/product/${detail?.id}`;

  const token = localStorage.getItem("token");

  const fetchData = async () => {
    setLoading(true);
    await axios

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
  const id = data?._id;
  console.log(id);

  return isLoading ? (
    <Layout>
      <Loading />
    </Layout>
  ) : (
    <Layout>
      <div className="flex justify-center xxs:flex-col  my-12 gap-x-16">
        <div className="w-96 xxs:w-full relative">
          <p className="font-semibold py-2 xxs:block mb-3 md:hidden  ">
            {data?.name}
          </p>
          <img className="w-full object-cover" src={data?.imgUrl} alt="" />
        </div>

        <div className="px-4 xxs:p-0 flex-col flex gap-y-6 mt-2 justify-center">
          <p className="font-semibold py-2 xxs:hidden  ">{data?.name}</p>
          <p className="font-semibold py-2 ">{data?.subtitle}</p>
          <p className="py-1 font-bold ">$ {data?.price}</p>

          <p>4 interest-free payments of $42.48 with Klarna. Learn More</p>
          <Size />

          <div className="flex relative items-center">
            <button
              onClick={() => dispatch(addCard({ id }))}
              className="bg-black text-white w-full h-12 rounded"
            >
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
      <Comments />
    </Layout>
  );
};

export default DetailPage;
