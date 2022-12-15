import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: {
    location: {
      lat: 60.1699,
      lng: 24.9384,
    },
  },
  destination: {
    location: {
      lat: 60.1699,
      lng: 24.9384,
    },
  },
  travelTimeInformation: null,
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
    setTravelTimeInformation: (state, action) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navslice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInformation = (state) =>
  state.nav.travelTimeInformation;

export default navslice.reducer;
