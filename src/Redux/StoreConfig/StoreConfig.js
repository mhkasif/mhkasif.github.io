import { configureStore } from "@reduxjs/toolkit";
import homeComponentInfoReducer from "../slices/homeComponentInfoSlice";

const configStore = (preLoadedState) => {
  return configureStore({
    reducer: {
      homeComponentInfo: homeComponentInfoReducer,
    },
    preloadedState: preLoadedState,
  });
};

export default configStore;