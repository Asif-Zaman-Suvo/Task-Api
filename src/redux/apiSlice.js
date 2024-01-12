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
    getFilteredData: builder.query({
      query: (args) => {
        const { company_status, company_name } = args;
        return `get-all-companys?company_status=${company_status}&company_name=${company_name}`;
      },
    }),
  }),
});

export const { useGetCompanyDataQuery, useGetFilteredDataQuery } = getApi;
