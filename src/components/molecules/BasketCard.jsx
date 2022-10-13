import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { removeCard, increase, decrease } from "../../redux/CardSlice";
import { useDispatch } from "react-redux";

const BasketCard = ({
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
    <div className="flex shadow-xl w-full relative  text-sm font-semibold mb-6 ">
      <div className="flex w-full  gap-x-2 xxs:px-5 px-12  ">
        <img
          onClick={handleClick}
          className="w-32 h-40  rounded-md cursor-pointer"
          src={imgUrl}
          alt=""
        />
        <div className="flex flex-col  xxs:w-[260px]  ml-4 ">
          <p onClick={handleClick} className="mb-4  text-base cursor-pointer  ">
            {name}
          </p>

          <div>
            <div className="flex gap-x-4 text-lg">
              <button onClick={() => dispatch(decrease({ id, quantity }))}>
                -
              </button>
              <p>{quantity}</p>
              <button onClick={() => dispatch(increase({ id, quantity }))}>
                +
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 justify-end  absolute bottom-0 right-0">
          <DeleteOutlineIcon
            onClick={() => dispatch(removeCard({ id }))}
            fontSize="large"
            className="cursor-pointer"
          />

          <p className="text-right text-lg pr-3 pb-3">$ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default BasketCard;
