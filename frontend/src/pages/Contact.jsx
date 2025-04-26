import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-pink-200 flex items-center justify-center px-4 py-10">
      <div className="bg-white w-full max-w-6xl rounded-xl overflow-hidden shadow-xl grid grid-cols-1 md:grid-cols-2">

        {/* Left: Form Section */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-red-500 mb-2">Contact us</h2>
          <p className="text-gray-600 mb-6">Get in touch and let us know how we can help</p>

          <form className="space-y-4">
            {/* Name + Email */}
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 px-4 py-2 border-b border-gray-400 focus:outline-none"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-1/2 px-4 py-2 border-b border-gray-400 focus:outline-none"
              />
            </div>

            {/* Topic */}
            <select className="w-full px-4 py-2 border-b border-gray-400 bg-transparent focus:outline-none">
              <option value="Tezu">Tezu</option>
              <option value="Pasighat">Pasighat</option>
              <option value="Mebo">Mebo</option>
              <option value="Roing">Roing</option>
            </select>

            {/* Message */}
            <textarea
              placeholder="Your message"
              rows={4}
              className="w-full px-4 py-2 border-b border-gray-400 focus:outline-none resize-none"
            />

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" id="subscribe" />
              <label htmlFor="subscribe" className="text-gray-700 text-sm">Please sign me up for the newsletter</label>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-2 mt-2 rounded hover:bg-red-600 transition-all"
            >
              Send Message →
            </button>
          </form>

          {/* Socials */}
          <div className="mt-6 text-sm text-gray-500 flex items-center gap-4">
            <span>Follow us:</span>
            <a href="#" className="text-red-500 hover:underline">Twitter</a>
            <a href="#" className="text-red-500 hover:underline">Facebook</a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className="bg-pink-100 flex items-center justify-center p-8">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/051/166/491/small/communication-concept-with-email-message-box-and-contacts-icons-e-mail-marketing-customer-support-counseling-and-support-hotline-connection-with-modern-network-technology-contact-us-free-photo.jpg"
            alt="Illustration"
            className="max-h-[400px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
