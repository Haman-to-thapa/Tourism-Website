import { Bell } from "lucide-react";
import { useState } from "react";

import { TbWorldSearch } from "react-icons/tb";
import { Button } from "@/components/ui/button";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Navbar() {

  const [open, setOpen] = useState(false)
  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/30 backdrop-blur-md px-6 py-3   md:block items-center ">
        <div className="flex items-center justify-between text-xl">
          <div className="">
            <Link to='/'>
              <h1 className=" flex gap-2  font-bold hover:scale-105 hover:text-blue-600 transition-all duration-500">Toursim 🌴</h1></Link>
          </div>
          <div className=" flex items-center text-xl font-bold text-gray-800 space-x-4 ">
            <Link to='/date'>
              <button className="border px-2 py-1 rounded text-sm hover:bg-gray-100">🗓️</button>
            </Link>

            <Link to='/search'>
              <TbWorldSearch size={20} className="hover:text-teal-600 cursor-pointer" />
            </Link>

            <Link to='/notification'>
              <Bell size={20} className="hover:text-teal-600 cursor-pointer" />
            </Link>

            <Link to='/login'>
              <FaUserAlt size={20} className="hover:text-teal-600 cursor-pointer" /></Link>
          </div>
        </div>
      </nav>

      {/* Spacer so content below isn't hidden */}
      <div className="h-14" />
    </>
  );
}
