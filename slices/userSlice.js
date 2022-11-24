import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
      state.phoneNumber = action.payload.phoneNumber;
      state.photoURL = action.payload.photoURL;
    },
    clearUser: (state) => {
      state.displayName = "";
      state.email = "";
      state.phoneNumber = "";
      state.photoURL = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const getUser = (state) => state;

export default userSlice.reducer;
