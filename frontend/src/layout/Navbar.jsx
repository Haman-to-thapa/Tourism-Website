import { Bell } from "lucide-react";
import { useState } from "react";
import { message } from "antd";
import { TbWorldSearch } from "react-icons/tb";
import { FaUserAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoggedOut } from "@/appRedux/featureSlice/Slice";
import { useGetMeQuery, useLogoutUserMutation } from "@/appRedux/API/authApi";


export default function Navbar() {

  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logoutUser] = useLogoutUserMutation();

  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const { refetch } = useGetMeQuery()

  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
      dispatch(userLoggedOut());
      await refetch();
      message.success("Logged out successfully");
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
      message.error("Logout failed");
    }
  };


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
            {
              isAuthenticated ? (
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-green-700">
                      {user?.name}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="text-xl text-red-600 font-bold bg-yellow-300 p-2 rounded-xl">
                    Logout
                  </button>
                </div>
              ) : (
                <Link to='/login'>
                  <FaUserAlt size={20} className="hover:text-teal-600 cursor-pointer" /></Link>
              )
            }


          </div>
        </div>
      </nav>

      {/* Spacer so content below isn't hidden */}
      <div className="h-14" />
    </>
  );
}
