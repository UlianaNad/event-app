import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { eventsReducer } from "./events/eventsSlice";
// import { favoritesReducer } from "./favorites/favoritesSlice";
// import { filterReducer } from "./filter/filterSlice";

const rootReducer = combineReducers({
  events: eventsReducer,
  // favorites: favoritesReducer,
  // filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  
});