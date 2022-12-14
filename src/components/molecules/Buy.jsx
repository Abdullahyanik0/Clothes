import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import BasketBoard from "./BasketBoard";
import { removeState } from "redux/CardSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

const Buy = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const orderm = useSelector((state) => state.card.items);
  const basketitem = orderm.map((item) => item);
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();
  const url = "https://ecommerceappexpress.herokuapp.com/api/order";

  const notify = () => toast("Your order has been confirmed.");
  const notify2 = () => toast("Error.");

  const multipleFunc = () => {
    if (!token) {
      alert("please login");
      setTimeout(() => {
        navigate("/user", { state: { name: location.pathname } });
      }, 1000);
    } else {
      setTimeout(async () => {
        await axios({
          method: "post",
          url: url,
          data: {
            orders: basketitem,
          },
          headers: { token },
        })
          .then((response) => {
            console.log(response);
            notify();
            setTimeout(() => {
              dispatch(removeState());
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
            notify2();
          });
      }, 100);
    }
  };

  return (
    <div>
      <button
        className="bg-[#3d7c7d]   w-48 rounded hover:bg-opacity-90 my-4 ease-in duration-200 h-14 text-white text-xl font-semibold"
        onClick={handleOpen}
      >
        Buy
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="!h-full overflow-auto "
      >
        <Box sx={{ ...style, width: 11 / 12 }} className="!border-0 ">
          <BasketBoard />
          <div className="flex justify-center">
            <button
              className="bg-[#3d7c7d] w-full  xl:w-4/12 rounded hover:bg-opacity-90 my-4 ease-in duration-200 h-14 text-white text-xl font-semibold"
              onClick={multipleFunc}
            >
              Buy
            </button>
          </div>
        </Box>
      </Modal>
      <Toaster
        position="center"
        reverseOrder={false}
        containerClassName="w-96"
        toastOptions={{
          className: "",
          duration: 3000,
          style: {
            background: "#16C60C",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Buy;
