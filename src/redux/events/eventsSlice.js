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
        console.log(action.payload.events)
        const newEvents = action.payload.events;
        const uniqueNewEvents = newEvents
          .filter((newEvent) => {
            return !state.events.some(
              (existingEvent) => existingEvent.id === newEvent.id
            );
          });
        state.events = [...state.events, ...uniqueNewEvents];
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