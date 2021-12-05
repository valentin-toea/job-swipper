import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { MAIN_URL } from "../utils/url";

export const authenticateUser = createAsyncThunk<any, any, any>(
  "user/authenticateUser",
  async ({ userType, formData }) => {
    /*  let ENDPOINT = "get-student-data";

    const response = await axios.post(MAIN_URL + ENDPOINT, {
      ...formData,
    });
    return response.data; */
    return { ...formData, userType };
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: { userData: undefined, loggedIn: false, userType: 1 },
  reducers: {
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    deleteUser: (state, _) => {
      state.userData = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      if (action.payload !== "") {
        state.userData = action.payload;
        state.userType = action.payload.userType;
        state.loggedIn = true;
      } else state.loggedIn = false;
    });
  },
});

export const { updateUserType, deleteUser } = userSlice.actions;
export default userSlice.reducer;
