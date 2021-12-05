import { configureStore } from "@reduxjs/toolkit";
import picturesReducer from "./picturesReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pictures: picturesReducer,
  },
});
