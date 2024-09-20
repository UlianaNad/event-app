import { createAsyncThunk } from "@reduxjs/toolkit";
import { eventsApi } from "../../api/api";

export const fetchEventsThunk = createAsyncThunk(
  "fetchEvents",
  async ({ page = 1, limit = 12 } = {}, thunkApi) => {
    try {
      const { data } = await eventsApi.get(
        `events?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);