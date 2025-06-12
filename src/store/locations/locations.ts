import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationsState } from "./types";

const initialState: LocationsState = {
  isModalOpen: false,
  residentsUrls: [],
};

const locationsSlice = createSlice({
  name: "locations",
  initialState: initialState,
  reducers: {
    showModalWindow(state) {
      state.isModalOpen = true;
    },
    hideModalWindow(state) {
      state.isModalOpen = false;
    },
    setResidentsUrls(state, action: PayloadAction<string[]>) {
      state.residentsUrls = action.payload;
    },
  },
});

export const locationsActions = locationsSlice.actions;

export default locationsSlice.reducer;
