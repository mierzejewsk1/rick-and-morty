import { Label } from "../types/Label";

export const API_URL: string = Object.freeze("https://rickandmortyapi.com/api");

export const SELECT_MENU_DEFAULT_VALUE: string = "all";
export const SKELETON_SIZE: number = 20;
export const LOCATIONS_SKELETON_SIZE: number = 1;
export const PAGINATION_DEFAULT_PAGE: string = "1";
export const TABLE_ELEMENTS_PER_PAGE: number = 20;
export const LOCAL_STORAGE: Record<string, string> = {
  EPISODES: "episodes",
};

export enum CHARACTER_STATUS_VALUE {
  ALIVE = "Alive",
  DEAD = "Dead",
  UNKNOWN = "Unknown",
}

export enum CHARACTER_PARAMS {
  PAGE = "page",
  SPECIES = "species",
  STATUS = "status",
  GENDER = "gender",
}

export enum EPISODE_PARAMS {
  PAGE = "page",
  NAME = "name",
}

export enum LOCATIONS_PARAMS {
  PAGE = "page",
  NAME = "name",
  TYPE = "type",
  DIMENSION = "dimension",
}

export const CHARACTER_STATUS: Label[] = [
  {
    value: "all",
    label: "all",
  },
  {
    value: "Alive",
    label: "Alive",
  },
  {
    value: "Dead",
    label: "Dead",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];

export const CHARACTER_GENDER: Label[] = [
  {
    value: "all",
    label: "all",
  },
  {
    value: "Female",
    label: "Female",
  },
  {
    value: "Male",
    label: "Male",
  },
  {
    value: "Genderless",
    label: "Genderless",
  },
  {
    value: "unknown",
    label: "unknown",
  },
];

export const EPISODE_COLUMN_NAMES: Label[] = [
  {
    value: "id",
    label: "Id",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "air_date",
    label: "Air date",
  },
  {
    value: "episode",
    label: "Episode",
  },
  {
    value: "more_info",
    label: "More info",
  },
  {
    value: "watchlist",
    label: "Watchlist",
  },
];

export const LOCATIONS_COLUMN_NAMES: Label[] = [
  {
    value: "id",
    label: "Id",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "type",
    label: "Type",
  },
  {
    value: "dimension",
    label: "Dimension",
  },
  {
    value: "residents",
    label: "Residents",
  },
];

export const LOCAL_EPISODES_COLUMN_NAMES: Label[] = [
  {
    value: "id",
    label: "Id",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "air_date",
    label: "Air date",
  },
  {
    value: "episode",
    label: "Episode",
  },
  {
    value: "action",
    label: "Action",
  },
  {
    value: "completed",
    label: "Completed?",
  },
];
