import React from 'react';

const PurchaseSession = () => {
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
              <span className="text-gray-600 font-medium">Place:</span>
              <span className="text-gray-800 font-semibold">Maldives Beach Resort</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Date:</span>
              <span className="text-gray-800 font-semibold">April 30, 2025</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 font-medium">Guest Name:</span>
              <span className="text-gray-800 font-semibold">John Doe</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-300"></div>

          {/* Payment Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Price</span>
              <span className="text-lg font-bold text-gray-900">$200</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-700">Taxes & Fees</span>
              <span className="text-lg font-bold text-gray-900">$20</span>
            </div>
            <div className="border-t border-gray-300"></div>
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-gray-800">Total</span>
              <span className="text-xl font-bold text-green-600">$220</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full py-3 mt-6 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition duration-300">
            Proceed to Payment
          </button>

        </div>
      </div>
    </div>
  );
};

export default PurchaseSession;
