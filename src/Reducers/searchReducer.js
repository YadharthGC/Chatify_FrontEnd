import { createSlice } from "@reduxjs/toolkit";

export const SearchReducer = createSlice({
  name: "search",
  initialState: {
    users: [],
    mainUser: "",
    mainUserId: "",
    receiverId: "",
    receiverName: "",
  },
  reducers: {
    handleAdd: (state, action) => {
      state.users = action.payload;
    },
    handleMainUser: (state, action) => {
      state.mainUser = action.payload;
    },
    handleReceiver: (state, action) => {
      state.receiverId = action.payload.id;
      state.receiverName = action.payload.name;
    },
  },
});

export const { handleAdd, handleMainUser, handleReceiver } =
  SearchReducer.actions;
export default SearchReducer.reducer;
