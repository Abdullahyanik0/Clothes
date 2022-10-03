import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],

    headerColor: localStorage.getItem("color"),
  },
  reducers: {
    addCard: (state, { payload: { data } }) => {
      const items = state.items?.map((item) =>
        item?._id === data?._id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      );

      items.push(data);

      const filteredItem = items?.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t._id === value._id;
          })
      );

      state.items = filteredItem;
    },

    removeCard: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((item) => item._id !== id);
    },
    increase: (state, { payload }) => {
      const id = payload.id;
      const quantity = payload.quantity;
      const item = state.items.find((item) => item._id === id);
      item.quantity = Number(quantity) + 1;
    },

    decrease: (state, { payload }) => {
      const id = payload.id;
      const quantity = payload.quantity;
      const item = state.items.find((item) => item._id === id);
      item.quantity = Number(quantity) - 1;
    },

    changeHeaderColor: {
      reducer: (state) => {
        if (state.headerColor === "!bg-white") {
          state.headerColor = "!bg-[#1B1A17] !bg-opacity-90 !text-white";
        } else {
          state.headerColor = "!bg-white";
        }
        localStorage.setItem("color", state.headerColor);
      },
    },
  },
});

export const { changeHeaderColor, addCard, removeCard, increase, decrease } =
  CardSlice.actions;

export default CardSlice.reducer;
