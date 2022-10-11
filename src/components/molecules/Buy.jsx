import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import BasketBoard from "./BasketBoard";
import { removeState } from "redux/CardSlice";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Buy = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const dispatch = useDispatch();

  const notify = () => toast("Your order has been confirmed.");
  const multipleFunc = () => {
    notify();
    dispatch(removeState());
    handleClose();
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
      >
        <Box className="flex flex-col !p-1 " sx={{ ...style, width: 11 / 12 }}>
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
