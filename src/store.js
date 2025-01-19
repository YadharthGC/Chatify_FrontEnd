import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./Reducers/searchReducer";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
});
