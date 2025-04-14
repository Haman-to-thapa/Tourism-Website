
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';




const SelectedDate = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());


  return (
    <div
      className='h-200'
      style={{ background: ' #2f4f4f', color: 'white' }}>
      <div className="p-6 font-medium  text-white flex flex-col md:flex-row "

      >

        <div className=" md:flex-1 mx-2 md:mx-6 lg:mx-10 lg:mt-10 ">
          <p className="text-lg mb-2 ">Select Tour Date</p>
          <div className="space-x-2 space-y-6">

            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="dd/MM/yyyy"
              className="border border-gray-300 rounded px-3 py-2"
              minDate={new Date()}
            />
            <button

              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 m-4 "
            >
              Book Tour
            </button>
          </div>


          <p className="mt-6">You selected: {selectedDate.toDateString()}</p>
        </div>
        <div className="md:flex-1 lg:mt-10 mt-20">
          <p><span className='text-3xl font-bold'>Pick a date </span>— we’re waiting for you!
            Choose your perfect day for an unforgettable journey. Whether you're planning ahead or feeling spontaneous, your next adventure starts with just one click. We can't wait to show you the beauty and excitement that awaits. Let the countdown to your tour begin!</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-4 text-white">
        {[
          { title: "Free Guide", icon: "🧭" },
          { title: "Snacks Included", icon: "🍱" },
          { title: "Photography", icon: "📸" },
          { title: "Transportation", icon: "🚐" },
        ].map((item, i) => (
          <div key={i} className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm shadow-md">
            <div className="text-3xl mb-2">{item.icon}</div>
            <p className="font-semibold">{item.title}</p>
          </div>
        ))}
      </div>


    </div >
  );
};

export default SelectedDate;

