import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { MAIN_URL } from "../utils/url";

export const getPeopleList = createAsyncThunk<any, any, any>(
  "cardContent/getList",
  async () => {
    let ENDPOINT = "people";

    const response = await axios.get(MAIN_URL + ENDPOINT);
    return response.data;
  }
);

export const cardContentSlice = createSlice({
  name: "cardContent",
  // 1- persoana, 2 - recruiter
  initialState: { peopleList: [], jobList: [], loading: false },
  reducers: {
    deletePeopleList: (state, _) => {
      state.peopleList = [];
    },
    removeOnePersonFromList: (state, _) => {
      const newList = [...state.peopleList];
      state.peopleList = [...newList.slice(1)];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPeopleList.fulfilled, (state, action) => {
      state.peopleList = action.payload;
      state.loading = false;
    });

    builder.addCase(getPeopleList.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(getPeopleList.rejected, (state, action) => {
      console.log("error");
      state.loading = false;
    });
  },
});

export const { deletePeopleList, removeOnePersonFromList } =
  cardContentSlice.actions;
export default cardContentSlice.reducer;
