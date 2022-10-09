import { createSlice } from "@reduxjs/toolkit";

export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    favorite: [],
  },
  reducers: {
    addFavorite: (state, { payload: { data } }) => {
      const items = state.favorite?.map((item) =>
        item?._id === data?._id
          ? { ...item, selected: item.selected === false }
          : { ...item, selected: item.selected === true }
      );

      items.push(data);

      const filteredItem = items?.filter(
        (value, index, self) =>
          index ===
          self.findIndex((t) => {
            return t._id === value._id;
          })
      );

      state.favorite = filteredItem;
    },
    removeFavorite: (state, { payload }) => {
      state.favorite = state.favorite.filter((item) => item._id !== payload);
      state?.favorite.map((item) =>
        payload === item?._id ? (item.selected = false) : ""
      );
      
    },
  },
});

export const { addFavorite, removeFavorite } = FavoriteSlice.actions;

export default FavoriteSlice.reducer;
