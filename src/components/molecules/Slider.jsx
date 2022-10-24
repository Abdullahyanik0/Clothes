import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Slider = () => {
  return (
    <div className="   mb-12 xxs:mt-12  ">
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
        <SwiperSlide>
          <div>
            <img
              className="min-h-[220px] max-h-[500px] object-cover  w-full"
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwc5938d43/W23/W23-Family-Tree-Launch-HTH/22FW-HTH-01-FullBleedHero-01-BG-2x.jpg?sw=1600&sfrm=jpg&q=80"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide className="min-h-[220px]  max-h-[500px] object-cover w-full ">
          <div>
            <img
              className="scale-110"
              src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw387b90dd/W23/W23-Kids-Outerwear/22FW-TD-OnePiece-02-BG-2x-1.jpg?sw=1600&sfrm=jpg&q=80"
              alt=""
            />
          </div>
         {/*  <div className="h-96 mt-12 relative scale-110">
        <img
          className="w-full h-full object-cover"
          src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw387b90dd/W23/W23-Kids-Outerwear/22FW-TD-OnePiece-02-BG-2x-1.jpg?sw=1600&sfrm=jpg&q=80"
          alt=""
        />
        <div className="w-[450px] xxs:w-11/12 xxs:m-3 absolute top-10 flex flex-col gap-y-6 text-white ml-10 font-semibold">
          <h1>Digging Through the Archives</h1>
          <h1 className="font-bold text-5xl xxs:text-3xl">
            Decades of Burton Innovation
          </h1>
          <h1>
            Burton has been the leader in product innovation since it's
            inception in 1977.
          </h1>
          <h1 className="p-4 w-1/2  bg-white text-black hover:bg-slate-200 cursor-pointer border-2 border-slate-400 mt-4 rounded font-bold text-sm">
            READ MORE
          </h1>
        </div>
      </div> */}
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="min-h-[220px] max-h-[500px] object-cover  w-full"
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
