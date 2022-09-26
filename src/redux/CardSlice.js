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
        if (state.headerColor === "!bg-white") {
          state.headerColor = "!bg-[#1B1A17] !bg-opacity-90 !text-white";
        } else {
          state.headerColor = "!bg-white";
        }
        localStorage.setItem("color", state.headerColor);
      },
    },
    reducers: {
      clearCart: (state) => {
        state.items = [];
      },
      removeItem: (state, action) => {
        const itemId = action.payload;
        state.items = state.items.filter((item) => item.id !== itemId);
      },
      increase: (state, { payload }) => {
        const cartItem = state.items.find((item) => item.id === payload.id);
        cartItem.quantity = cartItem.quantity + 1;
      },
      decrease: (state, { payload }) => {
        const cartItem = state.items.find((item) => item.id === payload.id);
        cartItem.quantity = cartItem.quantity - 1;
      },
      calculateTotals: (state) => {
        let quantity = 0;
        let total = 0;
        state.items.forEach((item) => {
          quantity += item.quantity;
          total += item.quantity * item.price;
        });
        state.quantity = quantity;
        state.total = total;
      },
    },
  },
});

export const {
  clearCart,
  changeHeaderColor,
  removeItem,
  increase,
  decrease,
  calculateTotals,
} = CardSlice.actions;

export default CardSlice.reducer;
