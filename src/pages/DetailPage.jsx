import React from "react";
import Layout from "Layout/Layout";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Loading from "components/atoms/Loading";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "redux/CardSlice";
import Size from "../components/atoms/Size";
import Comments from "components/atoms/Comments";
import axios from "axios";
import { addFavorite, removeFavorite } from "redux/FavoriteSlice";
import toast, { Toaster } from "react-hot-toast";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const params = useParams();
  const detail = params;

  const notifyCard = () => toast("Added to Card.");
  const notifyFavorite = () => toast("Added to Favorite.");
  const notifyRemoveFavorite = () => toast("Remove to Favorite.");
  const favorite = useSelector((state) => state.favorite.favorite);

  useEffect(() => {
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

    fetchData();
  }, [detail]);

  const newData = favorite.find((fav) => fav?._id === data?._id);

  const multipleFunc = () => {
    dispatch(removeFavorite(data?._id));
    notifyRemoveFavorite();
  };
  const multipleFunc2 = () => {
    dispatch(addFavorite({ data }));
    notifyFavorite();
  };

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

          <div className="flex justify-between">
            <div onClick={notifyCard} className="w-full">
              <button
                onClick={() => dispatch(addCard({ data }))}
                className="bg-black text-white w-full h-12  rounded"
              >
                Add to cart
              </button>
            </div>
            <div>
              {newData?.selected ? (
                <div className="p-1 ml-2">
                  <button onClick={multipleFunc}>
                    <AiFillHeart size={40} />
                  </button>
                </div>
              ) : (
                <div className="p-1 ml-2 ">
                  <button onClick={multipleFunc2}>
                    <AiOutlineHeart size={40} />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Comments />
      <Toaster
        position="bottom-right "
        containerClassName="xxs:mb-12"
        reverseOrder={false}
        toastOptions={{
          duration: 1000,
          style: {
            background: "#363636",
            color: "#fff",
          },
        }}
      />
    </Layout>
  );
};

export default DetailPage;
