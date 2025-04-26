import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import bodak from '../../assets/bodak.jpg';
import { IoIosMore } from 'react-icons/io';
import { useGetAllPlacesQuery } from '@/appRedux/API/userApi';

const HomeFeatures = () => {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetAllPlacesQuery();
  const [expandedIds, setExpandedIds] = useState({}); // State to handle expanded descriptions

  // Function to handle toggling the expanded description
  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the expanded state for the given place
    }));
  };

  // Function to truncate description to the first 30 words
  const truncateDescription = (description, wordLimit) => {
    const words = description.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...'; // Limit to wordLimit
    }
    return description;
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading places...</p>
      </div>
    );
  }

  // Error state
  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500">Something went wrong! Please try again later.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Background Section */}
      <div
        className="bg-cover bg-center relative h-[500px] flex items-center justify-center text-white shadow-2xl"
        style={{
          backgroundImage: `url(${bodak})`,
          backgroundColor: '#334c39',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Link to="/about">
          <h2 className="relative text-3xl md:text-4xl font-bold text-white z-10 hover:scale-110 duration-500 hover:underline">
            Discover Nature With Us
          </h2>
        </Link>
      </div>

      {/* Features Section */}
      <div
        className="bg-cover bg-center py-10 px-4 md:px-10"
        style={{
          backgroundColor: 'rgba(34, 56, 45, 0.6)',
        }}
      >
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">
          {data?.places?.map((item) => {
            const isExpanded = expandedIds[item._id]; // Check if the description is expanded
            const truncatedDescription = truncateDescription(item.description, 30);

            return (
              <Link to={`/search/${item._id}`} className="group" key={item._id}>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="h-[250px] w-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.place}</h3>
                    <p>
                      {isExpanded ? item.description : truncatedDescription}
                      {/* Display full or truncated description based on toggle state */}
                      {item.description.length > truncatedDescription.length && (
                        <span
                          onClick={() => toggleExpand(item._id)} // Toggle the description
                          className="underline text-blue-300 cursor-pointer ml-2"
                        >
                          {isExpanded ? ' Read less' : ' Read more'}
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* 'See more' Link */}
        <div className="text-white mt-6" onClick={() => navigate('/search')}>
          <h1 className="flex items-center justify-center font-bold underline cursor-pointer hover:text-blue-600 hover:scale-105 duration-500 transition-all">
            See more <span><IoIosMore /></span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeFeatures;
