import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const USER_API = "http://localhost:4040/api/places";


export const userApi = createApi({
  reducerPath:"userApi",
  baseQuery: fetchBaseQuery({
 baseUrl:USER_API,
 credentials:'include'
  }),
  endpoints: (builder) => ({
    getAllPlaces: builder.query({
      query:() => ({
        url:'/',
        method:"GET"
      })

    }),
    getPlaceById : builder.query({
    query : (id) => ({
      url:`/${id}`,
      method:"GET"
    })  
    })
  })
})

export const {useGetAllPlacesQuery,useGetPlaceByIdQuery} = userApi;