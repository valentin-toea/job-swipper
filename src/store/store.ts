import { configureStore } from "@reduxjs/toolkit";
import cardContentReducer from "./cardContentReducer";
import picturesReducer from "./picturesReducer";
import userReducer from "./userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    pictures: picturesReducer,
    cardContent: cardContentReducer,
  },
});
