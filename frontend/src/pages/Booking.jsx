import React, { useState } from 'react';

const Booking = ({ placeId }) => {
  const [firstName, setFirstName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTag, setSelectedTag] = useState('All Places');
  const [isBooked, setIsBooked] = useState(false);

  // Available time slots
  const availableSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];
  const placeTags = ['All Places', 'Popular Destinations', 'Hidden Gems', 'Adventure Spots']; // Tags for the place

  const handleBooking = () => {
    if (!firstName || !address || !phone || !email || !selectedDate || !selectedTime) {
      alert('Please fill in all fields before booking!');
      return;
    }

    // Here you can handle the API call to send the booking details to the backend.
    console.log({
      firstName,
      address,
      phone,
      email,
      selectedTag,
      selectedDate,
      selectedTime,
      feedback,
    });

    setIsBooked(true);
  };

  return (
    <div className="bg-white border rounded-xl shadow p-5 mt-10 mx-auto container">
      <h2 className="text-xl font-semibold mb-3 text-green-700">Booking Slot for Place ID: {placeId}</h2>

      <div className="space-y-4">
        {/* First Name */}
        <div>
          <label htmlFor="firstName" className="block text-lg text-gray-700 mb-2">First Name:</label>
          <input
            type="text"
            id="firstName"
            className="border rounded-xl p-2 w-full"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-lg text-gray-700 mb-2">Address:</label>
          <input
            type="text"
            id="address"
            className="border rounded-xl p-2 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Phone Number */}
        <div>
          <label htmlFor="phone" className="block text-lg text-gray-700 mb-2">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            className="border rounded-xl p-2 w-full"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email:</label>
          <input
            type="email"
            id="email"
            className="border rounded-xl p-2 w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-lg text-gray-700 mb-2">Select Date:</label>
          <input
            type="date"
            id="date"
            className="border rounded-xl p-2 w-full"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Time Selection */}
        <div>
          <label htmlFor="time" className="block text-lg text-gray-700 mb-2">Select Time:</label>
          <select
            id="time"
            className="border rounded-xl p-2 w-full"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
          >
            <option value="">-- Select a Time Slot --</option>
            {availableSlots.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>

        {/* Tag Selection */}
        <div>
          <label htmlFor="tag" className="block text-lg text-gray-700 mb-2">Select Tag:</label>
          <select
            id="tag"
            className="border rounded-xl p-2 w-full"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            {placeTags.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>

        {/* Feedback */}
        <div>
          <label htmlFor="feedback" className="block text-lg text-gray-700 mb-2">Feedback (optional):</label>
          <textarea
            id="feedback"
            className="border rounded-xl p-2 w-full"
            rows="4"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />
        </div>

        {/* Book Now Button */}
        <div className='flex '>
          <button
            onClick={handleBooking}
            className="bg-green-600 text-white px-10  py-3 rounded-xl text-lg hover:bg-green-700 "
          >
            {isBooked ? 'Booking Confirmed' : 'Book Now'}
          </button>
        </div>
      </div>

      {isBooked && (
        <div className="mt-5 text-center text-green-600">
          <p>Your booking has been confirmed!</p>
          <p>Booking details: {firstName} | {selectedDate} | {selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default Booking;
