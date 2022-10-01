import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],

    headerColor: localStorage.getItem("color"),
  },
  reducers: {
    addCard: (state, { payload: { data } }) => {
      const items = state.items.map((item) =>
        item._id === data._id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      );

      items.push(data);

      const filteredItem = items.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t._id === value._id;
          })
      );

      state.items = filteredItem;
    },

    /*  removeCard: (state, payload) => {
      const result = state.items.filter((res) =>
        res.id === payload ? (state.items = []) : ""
      );
    }, */

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

export const { changeHeaderColor, addCard, removeCard, addFavorite } =
  CardSlice.actions;

export default CardSlice.reducer;
