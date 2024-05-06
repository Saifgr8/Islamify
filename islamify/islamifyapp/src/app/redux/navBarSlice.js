import { createSlice } from "@reduxjs/toolkit";

export const menuOpen = createSlice({
  name: "NavBarOpen",
  initialState: {
    isNavBarOpen: false,
  },
  reducers: {
    saveState: (state, action) => {
      state.isNavBarOpen = action.payload
    },
  },
});

export default menuOpen.reducer;
export const { saveState } = menuOpen.actions;
