import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: { location: { lat: 0, lng: 0 } },
  destination: { location: { lat: 0, lng: 0 } },
};

export const navslice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
      state.origin = action.payload;
    },
    setDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { setOrigin, setDestination } = navslice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;

export default navslice.reducer;
