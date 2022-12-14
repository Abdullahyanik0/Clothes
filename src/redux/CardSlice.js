import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
    headerColor: "!bg-white",
  },
  reducers: {
    addCard: (state, { payload: { data } }) => {
      const items = state.items?.map((item) =>
        item?._id === data?._id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      );

      items.push({ ...data, quantity: Number(data.quantity) + 1 });

      const filteredItem = items?.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t._id === value._id;
          })
      );

      state.items = filteredItem;
    },

    removeCard: (state, { payload: { id } }) => {
      state.items = state.items.filter((item) => item._id !== id);
    },
    increase: (state, { payload: { id, quantity } }) => {
      const item = state.items.find((item) => item._id === id);
      item.quantity = Number(quantity) + 1;
    },

    decrease: (state, { payload: { id, quantity } }) => {
      const item = state.items.find((item) => item._id === id);

      if (item.quantity > 0) {
        item.quantity = Number(quantity) - 1;
      }
      if (item.quantity === 0) {
        state.items = state.items.filter((item) => item._id !== id);
      }
    },
    removeState: (state) => {
      state.items = [];
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

export const {
  addCard,
  removeCard,
  increase,
  decrease,
  removeState,
  changeHeaderColor,
} = CardSlice.actions;

export default CardSlice.reducer;
