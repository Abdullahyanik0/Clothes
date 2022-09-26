import React from "react";
import { nanoid } from "@reduxjs/toolkit";
const Comments = () => {
  const comment = [
    {
      user: "Jese Leos",
      title: "Love the color , love",
      info: "Love the color , love the style, usually my size is S when I ski, but I choose M for snow boarding. It’s cool and I love it and it could be fit when I need some layers in it.",
      imgUrl: "https://mui.com/static/images/avatar/1.jpg",
    },
    {
      user: "John Doe",
      title: " My new favorite",
      info: " The pink color looks amazing! Even though it’s an anorak, it’s so easy to layer and throw on. Perfect with Kimmy Bib pant. ",
      imgUrl: "https://mui.com/static/images/avatar/2.jpg",
    },
    {
      user: "Michael Phileps",
      title: "LOVE IT",
      info: " This is a great jacket. Super light weight but technical enough to keep you warm. Easy to take on an off. I'm usually a UK8-10 / 36 and I went for a M for a larger fit. The arms are quite long but these are adjustable with the velcro tabs.The pockets and vents are perfectly placed too. And I love the colour. too. ",
      imgUrl: "https://mui.com/static/images/avatar/3.jpg",
    },
    {
      user: "Arnold Lee",
      title: "Great",
      info: " Love it. The style is great. I have the bright colour female one. I normally range between medium and large but the medium fits me well in this. 150lbs at 5’3. Kept me dry and warm on the mountains here in BC. ",
      imgUrl: "https://mui.com/static/images/avatar/4.jpg",
    },
  ];
  const color = localStorage.getItem("colors");
  return (
    <div>
      {comment.map((coms) => (
        <article key={nanoid()} className={`${color} my-16`}>
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
          <div className="flex items-center mb-1">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>First star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Second star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Third star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fourth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Fifth star</title>
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          </div>
          <footer className="mb-2 text-sm  text-gray-500  ">
            <p>
              Reviewed in the United Kingdom on{" "}
              <time dateTime="2017-03-03 19:00">March 3, 2017</time>
            </p>
          </footer>
          <p className="mb-2 font-medium">{coms.title}</p>
          <p className="mb-3 text-sm  ">{coms.info}</p>
        </article>
      ))}
    </div>
  );
};

export default Comments;
