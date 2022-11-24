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
      state.photoURL = action.payload.photoURL;
    },
    setUserPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    getUserPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload.phoneNumber;
    },
    clearUser: (state) => {
      state.displayName = "";
      state.email = "";
      state.phoneNumber = "";
      state.photoURL = "";
    },
  },
});

export const { setUser, setUserPhoneNumber, clearUser } = userSlice.actions;

export const getUser = (state) => {
  return {
    displayName: state.displayName,
    email: state.email,
    photoURL: state.photoURL,
  };
};

export const getUserPhoneNumber = (state) => state.phoneNumber;

export default userSlice.reducer;
