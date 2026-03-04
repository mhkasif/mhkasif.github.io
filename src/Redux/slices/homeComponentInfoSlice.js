import { createSlice } from "@reduxjs/toolkit";

const homeComponentInfoSlice = createSlice({
  name: "homeComponentInfo",
  initialState: {
    scrollCounter: 5,
    isScrollable: false,
    isRedirected: false,
    isRefreshed: true,
  },
  reducers: {
    incrementCounter(state) {
      state.scrollCounter += 1;
    },
    decrementCounter(state) {
      state.scrollCounter -= 1;
    },
    setScrollCounter(state, action) {
      state.scrollCounter = action.payload;
    },
    disableScroll(state) {
      state.isScrollable = false;
    },
    enableScroll(state) {
      state.isScrollable = true;
    },
    redirected(state, action) {
      state.isRedirected = action.payload;
    },
    refreshed(state, action) {
      state.isRefreshed = action.payload;
    },
  },
});

export const {
  incrementCounter,
  decrementCounter,
  setScrollCounter,
  disableScroll,
  enableScroll,
  redirected,
  refreshed,
} = homeComponentInfoSlice.actions;

export default homeComponentInfoSlice.reducer;
