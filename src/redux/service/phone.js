import { createApi } from "@reduxjs/toolkit/query/react";
import { createBaseQuery } from "../../config/create-bace-query";

export const phoneApi = createApi({
  reducerPath: "phone_api",
  baseQuery: createBaseQuery(),
  tagTypes: ["User"],
  endpoints: (build) => ({
    getPhones: build.query({
      query: () => "/phones",
    }),
  }),
  providesTags: ["User"],
});

export const { useGetPhonesQuery } = phoneApi;
