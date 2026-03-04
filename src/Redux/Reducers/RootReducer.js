import { combineReducers } from "@reduxjs/toolkit";
import homeComponentInfoReducer from "../slices/homeComponentInfoSlice";

const rootReducer = combineReducers({
  homeComponentInfo: homeComponentInfoReducer,
});

export default rootReducer;