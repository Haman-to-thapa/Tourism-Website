import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import AdminSidebar from './AdminSidebar'

const Admin = () => {
  return (
    <div>
      <AdminHeader />
      <div className="flex min-h-screen bg-gray-100">
        <div className="w-64 sm:w-72 md:w-80 lg:w-96 bg-white drop-shadow-lg text-black">
          <AdminSidebar />
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Admin