import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const BOOKING_API="http://localhost:4040/api/bookings"

export const bookingApi = createApi({
  reducerPath:"bookingApi",
  baseQuery: fetchBaseQuery({
    baseUrl:BOOKING_API,
    credentials:"include"
  }),
  tagTypes: ['Booking'],
  endpoints: (builder) => ({
    createBooking:builder.mutation({
      query:(bookingData) => ({
        url:'/',
        method:"POST",
        body:bookingData
      }),
      invalidatesTags:['Booking']
    }),
    getUserBookings: builder.query({
      query:() => ({
        url:'/my-bookings',
        method:"GET"
      }),
      providesTags:['Booking']
    }),
    updateBookingStatus: builder.mutation({
      query:({bookingId, status}) => ({
        url:`/${bookingId}/status`,
        method:"PATCH",
        body:{status}
      }),
      invalidatesTags:['Booking']
    })
  })
  
})

export const {useCreateBookingMutation,useGetUserBookingsQuery,useUpdateBookingStatusMutation} = bookingApi