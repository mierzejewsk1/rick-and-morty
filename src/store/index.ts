import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import episodesReducer from "./episodes/episodes";
import { episodesApi } from "./episodes/api";
import locationsReducer from "./locations/locations";
import { locationsApi } from "./locations/api";
import watchListsReducer from "./watchList/watchListMultiple";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import themeReducer from "./theme/theme";

const persistConfig = {
  key: "root",
  storage,
};
const persistedWatchListsReducer = persistReducer(
  persistConfig,
  watchListsReducer
);

const persistedThemeReducer = persistReducer(persistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    [episodesApi.reducerPath]: episodesApi.reducer,
    locations: locationsReducer,
    [locationsApi.reducerPath]: locationsApi.reducer,
    watchList: persistedWatchListsReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    })
      .concat(episodesApi.middleware)
      .concat(locationsApi.middleware),
});

export const persistor = persistStore(store);
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
export default store;
