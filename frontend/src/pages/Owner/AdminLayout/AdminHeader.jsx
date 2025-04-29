import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from '@/appRedux/featureSlice/Slice';
import { useGetMeQuery, useLogoutUserMutation } from '@/appRedux/API/authApi';
import { message } from 'antd';

const AdminHeader = () => {
  const [logoutUser] = useLogoutUserMutation();
  const { refetch } = useGetMeQuery();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const result = await logoutUser().unwrap();
      if (result.success) {
        dispatch(userLoggedOut());
        await refetch();
        message.success("Logged out successfully");
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
      message.error("Logout failed");
    }
  };
  return (
    <header className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏞️ Tourism Owner</h1>

      <div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader