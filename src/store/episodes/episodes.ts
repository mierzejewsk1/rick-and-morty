import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EpisodesState } from "./types";

const initialState: EpisodesState = {
  isModalOpen: false,
  charactersUrls: [],
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState: initialState,
  reducers: {
    showModalWindow(state) {
      state.isModalOpen = true;
    },
    hideModalWindow(state) {
      state.isModalOpen = false;
    },
    setCharactersUrls(state, action: PayloadAction<string[]>) {
      state.charactersUrls = action.payload;
    },
  },
});

export const episodesActions = episodesSlice.actions;

export default episodesSlice.reducer;
