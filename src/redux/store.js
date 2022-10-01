import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "./CardSlice";
import FavoriteSlice from "./FavoriteSlice";

export default configureStore({
  reducer: {
    card: CardSlice,
    favorite: FavoriteSlice,

    devTools: process.env.NODE_ENV !== "production",
  },
});
