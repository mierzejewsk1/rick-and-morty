import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Episode } from "../../types/Episode";
import { API_URL } from "../../config/config";
import { ApiResponse } from "../../types/Character";

export const episodesApi = createApi({
  reducerPath: "episodesApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getEpisodes: build.query<ApiResponse<Episode>, string>({
      query: (params) => `/episode?${params}`,
    }),
  }),
});

export const { useGetEpisodesQuery } = episodesApi;
