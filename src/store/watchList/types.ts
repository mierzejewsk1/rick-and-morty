import { Episode } from "../../types/Episode";
import { EpisodeLocal } from "../../types/EpisodeLocal";

export interface WatchListState {
  watchList: EpisodeLocal[];
  isDeletionModalOpen: boolean;
  episodeToDelete: Episode | null;
}

export type WatchListLocal = {
  id: number;
  name: string;
  episodes: EpisodeLocal[];
};
