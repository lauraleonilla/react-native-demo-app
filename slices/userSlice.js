import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: "",
  email: "",
  phoneNumber: "",
  photoURL: "",
  imageDownloadUrl: "",
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
    setImageDownloadUrl: (state, action) => {
      state.imageDownloadUrl = action.payload.imageDownloadUrl;
    },
    resetUser: () => initialState,
  },
});

export const { setUser, setUserPhoneNumber, setImageDownloadUrl, resetUser } =
  userSlice.actions;

export const getUser = (state) => {
  return {
    displayName: state.displayName,
    email: state.email,
    photoURL: state.photoURL,
  };
};

export const getUserPhoneNumber = (state) => state.phoneNumber;
export const getImageDownloadUrl = (state) => state.imageDownloadUrl;

export default userSlice.reducer;
