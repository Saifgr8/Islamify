import { configureStore } from "@reduxjs/toolkit";
import NavBarOpenSlice from "../redux/navBarSlice";

const store = configureStore({
  reducer: {
    NavBarOpen: NavBarOpenSlice,
  },
});

export default store;
