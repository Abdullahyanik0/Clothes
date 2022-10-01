import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavorite: (state, { payload: { data } }) => {
      const favorite = state.favorite.map((item) =>
        item._id === data._id
          ? { ...item, quantity: Number(item.quantity) + 1 }
          : item
      );

      favorite.push(data);

      const filteredItem = favorite.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t._id === value._id;
          })
      );

      state.favorite = filteredItem;
      console.log(state.favorite)
    },
  },
});

export const { addFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
