import { useUpdateBookingStatusMutation } from '@/appRedux/API/bookingApi';
import { useGetPlaceByIdQuery } from '@/appRedux/API/userApi';
import LoaderInfinityLoader from '@/components/LoaderInfityLoader';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const PurchaseSession = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [bookingData, setBookingData] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("Credit Card");

  const paymentMethods = ["Credit Card", "PayPal", "Google Pay", "Apple Pay"];

  // Load booking data from state or localStorage
  useEffect(() => {
    let bookingInfo = null;

    // Try to get booking from location state first
    if (location.state?.booking) {
      bookingInfo = location.state.booking;
    }
    // If not in state, try localStorage
    else {
      try {
        const savedBooking = localStorage.getItem('currentBooking');
        if (savedBooking) {
          bookingInfo = JSON.parse(savedBooking);
        }
      } catch (error) {
        toast.error("Failed to load booking information");
      }
    }

    // If we have booking info, set it
    if (bookingInfo) {
      setBookingData(bookingInfo);
      navigate(`/search/${id}/book-now/purchase`)

    } else {
      toast.error("Booking information not found");
      navigate(`/search/${id}/book-now`);
    }
  }, [location.state, id, navigate]);

  const [updateBookingStatus] = useUpdateBookingStatusMutation();

  const { data: placeData, isLoading: placeLoading } = useGetPlaceByIdQuery(id);

  // Calculate taxes and total based on place price
  const basePrice = placeData?.price || 0;
  const taxes = Math.round(basePrice * 0.1 * 100) / 100; // 10% rounded to 2 decimal places
  const total = basePrice + taxes;

  const handlePayment = async () => {
    if (!bookingData?._id) {
      toast.error("Booking information is incomplete");
      return;
    }

    setIsProcessing(true);
    try {
      await updateBookingStatus({
        bookingId: bookingData._id,
        status: "Confirmed",
        paymentStatus: "paid"
      }).unwrap();

      toast.success("Payment successful! Your booking is confirmed");

      localStorage.removeItem("currentBooking");
      navigate('/');
    } catch (error) {
      toast.error("Payment failed. Please try again");
    } finally {
      setIsProcessing(false);
    }
  };

  if (placeLoading || !bookingData) return <LoaderInfinityLoader />;

  // Format the date for display
  const formattedDate = bookingData.selectedDate
    ? new Date(bookingData.selectedDate).toLocaleDateString()
    : "Not specified";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg p-8 rounded-2xl shadow-xl bg-white border border-gray-200">
        <div className="flex flex-col gap-8">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Complete Your Payment
          </h1>

          {/* Booking Details */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className='text-gray-600 font-medium'>Place:</span>
              <span className='text-gray-800 font-semibold'>{placeData?.place || 'Unknown place'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className='text-gray-600 font-medium'>Date:</span>
              <span className='text-gray-800 font-semibold'>{formattedDate}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className='text-gray-600 font-medium'>Time:</span>
              <span className='text-gray-800 font-semibold'>{bookingData.selectedTime || "Not specified"}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className='text-gray-600 font-medium'>Guest:</span>
              <span className='text-gray-800 font-semibold'>{bookingData.firstName || "Guest"}</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300"></div>

          {/* Payment Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Price</span>
              <span className="text-lg font-bold text-gray-900">${basePrice.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Taxes & Fees (10%)</span>
              <span className="text-lg font-bold text-gray-900">${taxes.toFixed(2)}</span>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-xl font-bold text-green-600">${total.toFixed(2)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-semibold text-gray-800">Payment Method</h2>
            <div className="grid grid-cols-2 gap-4">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  onClick={() => setSelectedMethod(method)}
                  className={`border p-3 rounded-lg flex items-center justify-center cursor-pointer transition duration-200
                    ${selectedMethod === method ? "bg-blue-100 border-blue-500" : "bg-white border-gray-300 hover:bg-gray-50"}`}
                >
                  <span className={`font-medium ${selectedMethod === method ? "text-blue-700" : "text-gray-700"}`}>
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`w-full py-3 mt-6 ${isProcessing ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'
              } text-white font-bold rounded-xl shadow-md transition duration-300`}
          >
            {isProcessing ? 'Processing...' : `Pay $${total.toFixed(2)}`}
          </button>
          <button
            onClick={() => navigate(`/search/${id}/book-now`)}
            className="w-full py-2 text-gray-600 hover:text-gray-800 font-medium"
          >
            Back to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchaseSession;