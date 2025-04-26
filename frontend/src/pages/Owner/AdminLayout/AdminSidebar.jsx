import React from 'react';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const linkClass =
    'w-full text-center py-3 px-4 rounded-md transition-all duration-300';
  const activeClass = 'bg-white text-blue-700 font-bold';


  return (
    <div className="min-h-screen w-full bg-amber-700 text-white flex flex-col items-center px-4 py-6">
      {/* Title Section */}
      <div className="mb-8 text-center">
        <div className="text-5xl">🚀</div>
        <h1 className="text-xl md:text-2xl font-bold mt-2">
          Create your Idea
        </h1>
      </div>

      {/* Nav Links */}
      <nav className="flex flex-col gap-4 w-full ">
        <NavLink
          to="/owner/add-place"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'hover:bg-blue-600'}`
          }
        >
          Add Place
        </NavLink>
        <NavLink
          to="/owner/all-places"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'hover:bg-blue-600'}`
          }
        >
          All Places
        </NavLink>
        <NavLink
          to="/owner/profile"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'hover:bg-blue-600'}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/owner/settings"
          className={({ isActive }) =>
            `${linkClass} ${isActive ? activeClass : 'hover:bg-blue-600'}`
          }
        >
          Settings
        </NavLink>
      </nav>
    </div>
  );
};

export default AdminSidebar;

