import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Episode } from "../../types/Episode";
import { EpisodeLocal } from "../../types/EpisodeLocal";
import { WatchListLocal } from "./types";

type WatchListLocalState = {
  watchLists: WatchListLocal[];
  isDeletionModalOpen: boolean;
  selectedEpisode: Episode | undefined;
  selectedWatchList: number;
  isAddToWatchListModalOpen: boolean;
};

const initialState: WatchListLocalState = {
  watchLists: [
    {
      id: 121, // TODO: remove is add watchlist functionality added
      name: "Monday",
      episodes: [],
    },
    {
      id: 122,
      name: "Friday",
      episodes: [],
    },
  ],
  isDeletionModalOpen: false,
  isAddToWatchListModalOpen: false,
  selectedEpisode: undefined,
  selectedWatchList: 0,
};

const watchListsSlice = createSlice({
  name: "watchLists",
  initialState: initialState,
  reducers: {
    addEpisodeToWatchList(state, action: PayloadAction<number>) {
      const watchList = state.watchLists.find((el) => el.id === action.payload);

      if (!watchList) {
        return;
      }

      if (!state.selectedEpisode) {
        return;
      }

      const isEpisodeInWatchList = watchList?.episodes.some(
        (el) => el.episodeInfo.id === state.selectedEpisode?.id
      );

      if (isEpisodeInWatchList) {
        return;
      }

      const newEpisodeLocal: EpisodeLocal = {
        completed: false,
        episodeInfo: state.selectedEpisode,
      };

      watchList?.episodes.push(newEpisodeLocal);
    },
    showAddToWatchListModal(state, action: PayloadAction<Episode>) {
      state.selectedEpisode = action.payload;
      state.isAddToWatchListModalOpen = true;
    },
    hideAddToWatchListModal(state) {
      state.isAddToWatchListModalOpen = false;
      state.selectedEpisode = undefined;
    },
    showDeletionModal(state, action: PayloadAction<number>) {
      state.selectedWatchList = action.payload;
      state.isDeletionModalOpen = true;
    },
    setSelectedEpisode(state, action: PayloadAction<Episode>) {
      state.selectedEpisode = action.payload;
    },
    hideDeletionModal(state) {
      state.isDeletionModalOpen = false;
      state.selectedWatchList = 0;
    },
    removeEpisodeFromWatchList(state) {
      const watchList = state.watchLists.find(
        (watchList) => watchList.id === state.selectedWatchList
      );

      if (!watchList) {
        return;
      }

      if (!state.selectedEpisode) {
        return;
      }

      const episodeStored = watchList.episodes.find(
        (ep) => ep.episodeInfo.id === state.selectedEpisode?.id
      );

      if (!episodeStored) {
        return;
      }

      watchList.episodes = watchList.episodes.filter(
        (ep) => ep.episodeInfo.id !== episodeStored.episodeInfo.id
      );
    },
    toggleCompletionStatus(
      state,
      action: PayloadAction<[EpisodeLocal, number]>
    ) {
      const [episode, watchListId] = action.payload;

      const watchList = state.watchLists.find((el) => el.id === watchListId);

      if (!watchList) {
        return;
      }

      const clickedEpisode = watchList.episodes.find(
        (el) => el.episodeInfo.id === episode.episodeInfo.id
      );
      if (!clickedEpisode) {
        return;
      }
      clickedEpisode.completed = !clickedEpisode.completed;
    },
    removeWatchList(state, action: PayloadAction<number>) {
      state.watchLists = state.watchLists.filter(
        (el) => el.id !== action.payload
      );
    },
  },
});

export const watchListsActions = watchListsSlice.actions;

export default watchListsSlice.reducer;
