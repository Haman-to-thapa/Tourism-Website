import React from 'react'

const AdminHeader = () => {
  return (
    <header className="bg-gray-900 text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">🏞️ Tourism Owner</h1>

      <div>
        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm">
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminHeader