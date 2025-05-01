
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



const USER_API = "http://localhost:4040/api/users"

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: USER_API,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set('Content-Type', 'application/json');
      return headers;
    }

    
  }),
  tagTypes:['User'],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (inputData) => ({
        url:"register",
        method:"POST",
        body:inputData
      }),
      invalidatesTags:['User']
    }),
    loginUser: builder.mutation({
      query: (inputData) => ({
        url:"login",
        method:"POST",
        body:inputData
      }),invalidatesTags:['User']
    }),
    logoutUser : builder.mutation({
      query:() => ({
        url:"logout",
        method:"GET"
      }),
      invalidatesTags:["User"],
      async onQueryStarted(arg,{dispatch,queryFulfilled}){
        try {
          await queryFulfilled;
          dispatch(authApi.util.resetApiState())
        } catch (error) {
          console.error("Logut error ", error)
        }
      }
    }),
    getMe: builder.query({
      query: () => ({
        url:"me",
        method:"GET",
        
      }),
      providesTags:['User']
    }),
  })
})


export const {useRegisterUserMutation, useLoginUserMutation, useGetMeQuery, useLogoutUserMutation} = authApi