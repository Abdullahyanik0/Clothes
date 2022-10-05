import React from "react";
import { BsSearch } from "react-icons/bs";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";

const Search = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div className="w-72  flex items-center relative">
      <input
        onClick={handleOpen}
        className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
        placeholder="Search"
        type="text"
      />

      <BsSearch size={20} className="absolute  right-2 " />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative">
            <input
              className="border-[1px] w-full border-[#bbb] rounded-xs p-2 !text-black  !font-medium text-base"
              placeholder="Search"
              type="text"
            />

            <BsSearch size={21} className="absolute top-3 right-2 " />
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Search;
