import React from "react";
import Layout from "Layout/Layout";
import Slider from "components/molecules/Slider";

import HeroSlider from "components/molecules/HeroSlider";
import Box from "components/molecules/Box";
import Footer from "components/organizm/Footer";

const Home = () => {
  return (
    <Layout>
      <Slider />
      <div className="text-center ">
        <h1 className="font-bold text-3xl">Active Elements</h1>
        <h1 className="font-semibold text-base my-2">
          Softgoods designed, tested, and proven to magnify your experience.
        </h1>
      </div>
      <HeroSlider />

      <div className="flex justify-center">
        <h1 className="p-4  hover:text-white hover:bg-slate-400  border-2 border-slate-400 mt-4 rounded font-bold text-sm">
          EXPLORE THE COLLECTION
        </h1>
      </div>
      <div className="flex gap-x-6 xxs:block mt-24 xxs:mt-12">
        <Box
          imgUrl="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwd35fd0df/W23/W23-Category-Support/22F-k-hardgoods-2upsquare-BG-2x.jpeg"
          title="Get 'em Ready to Rip"
          subtitle="Boots, bindings, and boards to get your grom ready to rip all season long."
        />
        <Box
          imgUrl="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw7fc703af/W23/W23-Category-Support/22F-a-graphic-tees-2upsquare-BG-2x.jpeg"
          title="Graphic Tees & Hoodies"
          subtitle="Ultra-soft bluesign® and organic cotton materials keep you feeling good no matter what the day throws at you."
        />
      </div>
      <div className="h-96 mt-12 relative">
        <img
          className="w-full h-full object-cover"
          src="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwa188f6d4/W23/W23-Blogs/DiggingThroughArchives-Blog-FullBleedHero-Comp.jpg"
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
      </div>
      <div className="flex  xxs:text-base justify-center text-lg text-clip overflow-hidden font-bold my-16">
        <p>
          Our path forward is clear: If we want to continue having fun in the
          mountains, we must focus on positively impacting our people, planet,
          and sport.
        </p>
      </div>
      <div className="flex gap-x-6 xxs:block mt-24 xxs:mt-12 ">
        <Box
          imgUrl="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw857d46f2/W22/W22-People-Planet-Sport/People-3Up-Square-BG.jpg"
          title="Get 'em Ready to Rip"
          subtitle="Boots, bindings, and boards to get your grom ready to rip all season long."
        />
        <Box
          imgUrl="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dw82d379ff/W22/W22-People-Planet-Sport/Planet-3Up-Square-BG.jpg"
          title="Graphic Tees & Hoodies"
          subtitle="Ultra-soft bluesign® and organic cotton materials keep you feeling good no matter what the day throws at you."
        />
        <Box
          imgUrl="https://www.burton.com/dw/image/v2/AADF_PRD/on/demandware.static/-/Library-Sites-shared-content/default/dwf3b7ac63/W22/W22-People-Planet-Sport/Sport-3Up-Square-BG.jpg"
          title="Graphic Tees & Hoodies"
          subtitle="Ultra-soft bluesign® and organic cotton materials keep you feeling good no matter what the day throws at you."
        />
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
