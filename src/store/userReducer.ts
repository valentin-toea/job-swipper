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

export const getJobsForRecruiter = createAsyncThunk<any, any, any>(
  "user/getJobsForRecruiter",
  async ({ userId }) => {
    let ENDPOINT = "current_user_jobs";
    const response = await axios.post(MAIN_URL + ENDPOINT, {
      user_id: userId,
    });
    return response.data;
  }
);

export const getMatches = createAsyncThunk<any, any, any>(
  "user/getMatches",
  async ({ userId }) => {
    let ENDPOINT = "matches";
    const response = await axios.post(MAIN_URL + ENDPOINT, {
      user_id: userId,
    });
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  // 1- persoana, 2 - recruiter
  initialState: {
    userData: {},
    loggedIn: false,
    userType: 0,
    filterString: {},
    jobs: [],
    recruiterJob: 0,
    matches: [],
    notificationNumber: 0,
  },
  reducers: {
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    deleteUser: (state, _) => {
      state.userData = {};
    },
    updateFilterString: (state, action) => {
      state.filterString = action.payload;
    },
    setRecruiterJob: (state, action) => {
      state.recruiterJob = action.payload;
    },
    resetNotificationNumber: (state, action) => {
      state.notificationNumber = 0;
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

    builder.addCase(getJobsForRecruiter.fulfilled, (state, action) => {
      state.jobs = action.payload.map((obj: any) => ({
        name: obj["1"] + " - " + obj["0"],
        id: obj["4"],
      }));
      state.recruiterJob = action.payload[0]["4"];
      console.log(state.jobs);
    });

    builder.addCase(getJobsForRecruiter.rejected, (state, action) => {
      console.log("error");
    });

    builder.addCase(getMatches.fulfilled, (state, action) => {
      if (action.payload.length !== state.matches.length) {
        state.matches = action.payload;

        const num = action.payload.length - state.matches.length;
        state.notificationNumber = action.payload.length;
      }
    });
  },
});

export const {
  updateUserType,
  deleteUser,
  updateFilterString,
  setRecruiterJob,
  resetNotificationNumber,
} = userSlice.actions;
export default userSlice.reducer;
