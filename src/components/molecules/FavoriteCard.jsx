import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeFavorite } from "../../redux/FavoriteSlice";
import { useDispatch } from "react-redux";

const FavoriteCard = ({
  title,
  price,
  name,
  selected,
  quantity,
  imgUrl,
  subtitle,
  id,
}) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/detailpage/" + id);
  };
  const dispatch = useDispatch();

  return (
    <div className="flex shadow-xl    text-sm font-semibold mb-6 ">
      <div className="flex gap-x-2 ">
        <img
          onClick={handleClick}
          className="w-32 h-40 rounded-md cursor-pointer"
          src={imgUrl}
          alt=""
        />
        <div className="flex flex-col justify-between  xxs:w-[260px]">
          <p onClick={handleClick} className=" mt-4 text-base cursor-pointer  ">
            {name}
          </p>

          <div className="flex px-2 justify-end items-center">
            <DeleteOutlineIcon
              onClick={() => dispatch(removeFavorite(id))}
              fontSize="large"
              className="cursor-pointer"
            />
          </div>

          <p className="text-right text-lg pr-3 pb-3">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default FavoriteCard;
