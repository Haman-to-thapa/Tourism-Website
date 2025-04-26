import React from 'react'
import bridge from '../assets/bridg.jpg'
import { useParams } from 'react-router-dom'

import LoaderInfinityLoader from '@/components/LoaderInfityLoader'
import { useGetPlaceByIdQuery } from '@/appRedux/API/userApi'

const PlaceDetails = () => {

  const { id } = useParams();

  const { data, isError, isLoading } = useGetPlaceByIdQuery(id)
  console.log(data)



  if (isLoading) return <LoaderInfinityLoader />;
  if (isError) return <p>Something went wrong .Place try again later</p>

  return (
    <div className="mt-10">
      {/* Bridge Image */}
      <div className="container mx-auto flex flex-col items-center">
        <img
          src={data?.image || bridge}
          alt={data?.place}
          className="w-full md:w-[80vw] rounded-xl shadow"
        />

      </div>

      {/* Main Content */}
      <div className="mx-6 md:mx-20 mt-20 flex flex-col lg:flex-row gap-10">
        {/* Left Side - Description and Guidelines */}
        <div className="flex-1 space-y-10 text-center">
          {/* Title */}
          <div>
            <h1 className="text-4xl font-bold text-green-700">
              {data?.place} – Where Nature Meets Serenity
            </h1>

          </div>

          {/* Description */}
          <div className="bg-green-50 p-6 rounded-xl shadow text-gray-700 space-y-4">
            <p>{data?.description}</p>

          </div>

          {/* Booking Guidelines */}
          <div className="space-y-6">
            {/* How to Book */}
            <div className="bg-white border rounded-xl shadow p-5 text-left">
              <h2 className="text-xl font-semibold mb-3 text-green-700 text-center">
                How to Book:
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Choose your date and time slot.</li>
                <li>Select the number of visitors.</li>
                <li>Click on “Book Now” to proceed to checkout.</li>
              </ul>
            </div>

            {/* Payment Options */}
            <div className="bg-white border rounded-xl shadow p-5 text-left">
              <h2 className="text-xl font-semibold mb-3 text-green-700 text-center">
                Payment Options:
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>UPI (Google Pay, PhonePe, Paytm)</li>
                <li>Debit/Credit Card</li>
                <li>Net Banking</li>
                <li>Wallets</li>
              </ul>
              <p className="text-sm text-gray-500 mt-2 text-center">
                All payments are secured and powered by [Your Payment Provider].
              </p>
            </div>

            {/* Visitor Guidelines */}
            <div className="bg-white border rounded-xl shadow p-5 text-left">
              <h2 className="text-xl font-semibold mb-3 text-green-700 text-center">
                Visitor Guidelines:
              </h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Carry a digital or printed copy of your booking confirmation.</li>
                <li>Visiting Hours: <strong>6:00 AM – 6:00 PM</strong></li>
                <li>Wear comfortable footwear and sun protection.</li>
                <li>Please do not litter — help preserve the natural beauty.</li>
                <li>Photography is allowed and encouraged!</li>
                <li>Swimming in the river is strictly prohibited.</li>
              </ul>
            </div>
          </div>

          {/* Book Now Button */}
          <div className='mb-10'>
            <button className="bg-green-600 text-white px-8 py-3 rounded-xl text-lg hover:bg-green-700">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default PlaceDetails