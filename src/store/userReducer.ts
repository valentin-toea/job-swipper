import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { MAIN_URL } from "../utils/url";

export const authenticateUser = createAsyncThunk<any, any, any>(
  "user/authenticateUser",
  async ({ formData }) => {
    let ENDPOINT = "login";

    const response = await axios.post(MAIN_URL + ENDPOINT, {
      ...formData,
    });
    return { formData: formData, ...response.data };
  }
);

export const userSlice = createSlice({
  name: "user",
  // 1- persoana, 2 - recruiter
  initialState: { userData: {}, loggedIn: false, userType: 1 },
  reducers: {
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    deleteUser: (state, _) => {
      state.userData = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      if (action.payload !== -1) {
        state.userType = action.payload.type;
        state.userData = {
          id: action.payload["user_id"],
          ...action.payload.formData,
        };
        state.loggedIn = true;
      } else state.loggedIn = false;
    });

    builder.addCase(authenticateUser.rejected, (state, action) => {
      console.log("error");
    });
  },
});

export const { updateUserType, deleteUser } = userSlice.actions;
export default userSlice.reducer;
