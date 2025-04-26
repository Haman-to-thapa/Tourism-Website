import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const OWNER_API = 'http://localhost:4040/api/owner';

export const ownerApi = createApi({
  reducerPath: 'ownerApi',
  baseQuery: fetchBaseQuery({
    baseUrl: OWNER_API,
    credentials: 'include',
  }),
  endpoints: (builder) => ({
    addPlaces: builder.mutation({
      query: (newPlaceData) => ({
        url: '/',
        method: 'POST',
        body: newPlaceData,
      }),
    }),
   
  }),
});

export const { 
  useAddPlacesMutation
} = ownerApi;
