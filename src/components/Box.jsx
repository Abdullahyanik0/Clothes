import React from "react";

const Box = ({ title, imgUrl, subtitle }) => {
  return (
    <div className="cursor-pointer mb-8 hover:scale-105">
      <img src={imgUrl} alt="" />
      <h1 className="font-bold text-3xl my-4">{title}</h1>
      <h1 className="font-medium">{subtitle}</h1>
      <button className="w-40 h-12 hover:text-white hover:bg-slate-400  border-2 border-slate-400 mt-4 rounded font-bold text-sm">
        SHOP NOW
      </button>
    </div>
  );
};

export default Box;
