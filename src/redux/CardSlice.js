import { createSlice } from "@reduxjs/toolkit";


export const CardSlice = createSlice({
  name: "card",
  initialState: {
    items: [],
  },
  reducers: {
    addCard: {
      reducer: (state, action) => {
        state.items.push([action.payload]);
        localStorage.setItem("items", state.items);
      },
    },
  },
});

export const { addCard } = CardSlice.actions;

export default CardSlice.reducer;
