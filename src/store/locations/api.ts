import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Location } from "../../types/Location";
import { API_URL } from "../../config/config";
import { ApiResponse } from "../../types/Character";

export const locationsApi = createApi({
  reducerPath: "locationsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (build) => ({
    getLocations: build.query<ApiResponse<Location>, string>({
      query: (params) => `/location?${params}`,
    }),
  }),
});

export const { useGetLocationsQuery } = locationsApi;
