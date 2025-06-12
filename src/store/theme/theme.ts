import { createSlice } from "@reduxjs/toolkit";
import { themeState } from "./types";

const initialState: themeState = {
  isDarkMode: false,
};

const themeSlice = createSlice({
  name: "theme",
  initialState: initialState,
  reducers: {
    toggleTheme(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
