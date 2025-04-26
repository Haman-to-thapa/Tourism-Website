import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetAllPlacesQuery } from '@/appRedux/API/userApi';

const SearchPlace = () => {
  const { data, isLoading, isError } = useGetAllPlacesQuery();
  const [expandedIds, setExpandedIds] = useState({});

  // Function to handle toggling the expanded description
  const toggleExpand = (id) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle the value for the given place
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
              <div className="group" key={item._id}>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt={item.place}
                    className="h-[250px] w-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {item.place}
                    </h3>
                    <p className="text-white">
                      {isExpanded ? item.description : truncatedDescription}
                      {/* Display full or truncated description based on toggle state */}
                      {item.description.length > truncatedDescription.length && (
                        <span
                          onClick={() => toggleExpand(item._id)} // Toggle the description
                          className="underline text-blue-300 cursor-pointer ml-2"
                        >
                          {isExpanded ? 'Read less' : 'Read more'}
                        </span>
                      )}
                    </p>

                    {/* Optional: Link to full detail page */}
                    <Link to={`/search/${item._id}`} className="block mt-3 text-green-300 underline">
                      View Full Details
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPlace;
