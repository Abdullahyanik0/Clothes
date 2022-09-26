import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../atoms/Loading";

const HeroSlider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const token = localStorage.getItem("token");

  const url = "https://ecommerceappexpress.herokuapp.com/api/product";
  const fetchData = () => {
    axios
      .get(url, { headers: { token } })
      .then(function (response) {
        // handle success
        setData(response.data.result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    setIsLoading(true);
    fetchData();
    setIsLoading(false);
  }, []);

  const shuffle = (array) => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  shuffle(data);

  return isLoading ? (
    <Loading />
  ) : (
    <div className=" mb-12  text-black">
      <Swiper
        breakpoints={{
          500: {
            slidesPerView: 4,
          },
        }}
        className="h-[600px] xxs:h-[500px] w-full "
        spaceBetween={50}
        slidesPerView={2}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data?.map((data) => (
          <SwiperSlide key={data?._id}>
            <Card
              key={data?._id}
              id={data?._id}
              price={data?.price}
              categories={data?.categories}
              selected={data?.selected}
              imgUrl={data?.imgUrl}
              name={data?.name}
              title={data?.title}
              subtitle={data?.subtitle}
              quantity={data?.quantity}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
