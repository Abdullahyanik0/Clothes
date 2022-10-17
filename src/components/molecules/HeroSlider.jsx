import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";
import Card from "../atoms/Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "../atoms/Loading";
import useFetch from "hooks/useFetch";

const HeroSlider = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const url = "https://ecommerceappexpress.herokuapp.com/api/product";
  const [data] = useFetch(url);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="  text-black">
      <div>{error ? error : ""}</div>
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
