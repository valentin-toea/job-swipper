import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const MAIN_URL = "https://randomuser.me/api/?results=50";

export const getPictures = createAsyncThunk<any, any, any>(
  "pictures/getPictures",
  async () => {
    const response = await axios.get(MAIN_URL);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "pictures",
  initialState: { list: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPictures.fulfilled, (state, action) => {
      if (action.payload !== "") {
        const arr = action.payload.results;
        state.list = arr.map((person: any) => person.picture.large);
      }
    });
  },
});

export const {} = userSlice.actions;
export default userSlice.reducer;
