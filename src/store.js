import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
