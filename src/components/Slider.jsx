import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Slider = () => {
  return (
    <div className=" mb-12 xxs:mt-12  ">
      <Swiper
        className="max-h-[655px] "
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="min-h-[220px] max-h-[550px] object-cover w-full ">
          <div>
            <img
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw387b90dd/W23/W23-Kids-Outerwear/22FW-TD-OnePiece-02-BG-2x-1.jpg?sw=1600&sfrm=jpg&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="min-h-[220px] max-h-[550px] object-cover  w-full"
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw1836ac92/W23/W23-Blogs/LineArt-FullHeroPromo-2x.jpg?sw=3000&sfrm=jpg&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
