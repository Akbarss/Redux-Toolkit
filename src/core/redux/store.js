import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "../redux/features/crud/crudSlice";

export const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});
