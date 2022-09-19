import { createSlice } from "@reduxjs/toolkit";

export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
    headerColor: localStorage.getItem("color"),
  },
  reducers: {
    addCard: {
      reducer: (state, action) => {
        state.items.push(action.payload);
        localStorage.setItem("items", state.items);
      },
    },
    changeHeaderColor: {
      reducer: (state) => {
        if (state.headerColor === "bg-white") {
          state.headerColor = "bg-[#1B1A17] bg-opacity-90 text-white";
        } else {
          state.headerColor = "bg-white";
        }
        localStorage.setItem("color", state.headerColor);
      },
    },
  },
});

export const { addCard, changeHeaderColor, TextColor } = CardSlice.actions;

export default CardSlice.reducer;
