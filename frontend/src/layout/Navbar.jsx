import { Bell, User } from "lucide-react";
import { useState } from "react";
import { Menu, X } from 'lucide-react'
import { TbWorldSearch } from "react-icons/tb";
import { Button } from "@/components/ui/button";


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
            <h1 className=" flex gap-2  font-bold hover:scale-105 hover:text-blue-600 transition-all duration-500">Toursim 🌴</h1>
          </div>
          <div className=" flex items-center text-xl font-bold text-gray-800 space-x-4 ">
            <button className="border px-2 py-1 rounded text-sm hover:bg-gray-100">EN</button>

            <TbWorldSearch size={20} className="hover:text-teal-600 cursor-pointer" />

            <Bell size={20} className="hover:text-teal-600 cursor-pointer" />

            <User size={20} className="hover:text-teal-600 cursor-pointer" />
          </div>
        </div>
      </nav>

      {/* Spacer so content below isn't hidden */}
      <div className="h-14" />
    </>
  );
}
