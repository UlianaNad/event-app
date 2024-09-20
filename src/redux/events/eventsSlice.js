import { createSlice } from "@reduxjs/toolkit";
import { fetchEventsThunk } from "./eventThunk";


const initialState = {
  events: [],
  loading: false,
  error: "",
};
export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventsThunk.fulfilled, (state, action) => {
        state.events = action.payload;
        state.loading = false;
      })
      .addCase(fetchEventsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEventsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const eventsReducer = eventsSlice.reducer;