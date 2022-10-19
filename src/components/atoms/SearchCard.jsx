import React from "react";
import { Link } from "react-router-dom";

const SearchCard = ({ name, imgUrl, id }) => {
  return (
    <Link to={"/detailpage/" + id}>
      <div className="flex cursor-pointer font-semibold  ">
        <img className="w-16 p-1" src={imgUrl} alt="" />
        {name}
      </div>
    </Link>
  );
};

export default SearchCard;
