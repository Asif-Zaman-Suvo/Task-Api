import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const getApi = createApi({
  reducerPath: "getApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_ENDPOINT,
  }),
  endpoints: (builder) => ({
    getCompanyData: builder.query({
      query: (arg) => `get-all-companys?page=${arg.page}`,
    }),
  }),
});

export const { useGetCompanyDataQuery } = getApi;
