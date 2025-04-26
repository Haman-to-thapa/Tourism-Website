import { useGetAllPlacesQuery } from '@/appRedux/API/userApi';
import LoaderInfityLoader from './LoaderInfityLoader';
import React from 'react';


const CustomLoader = ({ children }) => {
  const { isLoading, error, data } = useGetAllPlacesQuery();

  if (isLoading) {
    return <LoaderInfityLoader />;
  }

  if (error) {
    return <div className="text-red-500 text-center mt-8">Failed to load. Please refresh.</div>;
  }

  return <>{children}</>;
};

export default CustomLoader;
