import { createSlice } from "@reduxjs/toolkit";

export const SearchRedux = createSlice({
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
  SearchRedux.actions;
export default SearchRedux.reducer;
