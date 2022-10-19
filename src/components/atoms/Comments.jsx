import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Rating from "@mui/material/Rating";
const Comments = () => {
  const comment = [
    {
      user: "Michael Phileps",

      info: " The pink color looks amazing! Even though it’s an anorak, it’s so easy to layer and throw on. Perfect with Kimmy Bib pant. ",
      imgUrl: "https://mui.com/static/images/avatar/2.jpg",
    },
  ];
  const color = localStorage.getItem("colors");
  return (
    <div>
      {comment.map((coms) => (
        <article key={nanoid()} className={`${color} my-10`}>
          <div className="flex items-center mb-4 space-x-4">
            <img className="w-10 h-10 rounded-full" src={coms.imgUrl} alt="" />
            <div className="space-y-1 font-medium dark:text-white">
              <p>
                {coms.user}
                <time
                  dateTime="2014-08-16 19:00"
                  className="block text-sm text-gray-500 "
                >
                  Joined on August 2014
                </time>
              </p>
            </div>
          </div>
          <Rating name="read-only" size="small" value={5} readOnly />
          <footer className="mb-2 text-sm  text-gray-500  ">
            <p>
              Reviewed in the United Kingdom on{" "}
              <time dateTime="2017-03-03 19:00">March 3, 2017</time>
            </p>
          </footer>

          <p className="mb-3 text-md xxs:text-sm  ">{coms.info}</p>
        </article>
      ))}
    </div>
  );
};

export default Comments;
