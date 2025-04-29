import React from 'react'
import hero from '../../assets/river.jpg'
import { Link, useNavigate, useParams } from 'react-router-dom'

const HomeIcon = () => {


  const { id } = useParams()

  const navigate = useNavigate()

  const user = {
    name: 'John Doe',
    role: 'owner', // or 'user'
  }


  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Dashboard Logo (top right) */}
      {
        user?.role === "owner" && (
          <div className="absolute top-6 right-6 z-20">
            <button
              onClick={() => navigate('/owner')}
              className="bg-white text-blue-700 font-bold px-4 py-2 rounded-full shadow-md hover:bg-blue-700 hover:text-white transition"
            >
              Dashboard
            </button>
          </div>
        )
      }

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-[600px] text-white ">
          Explore the <br /> NortEast with us
        </h1>

        <div className="flex items-center gap-4 mt-6 text-white">
          {/* Learn More Button */}
          <Link to={`/search/${id}/book-now`}>
            <button className="group bg-blue-700 hover:scale-110 px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 hover:bg-blue-800 hover:shadow-md hover:text-white text-white font-bold">
              Book Now
              <span className="inline-block transform transition-transform group-hover:translate-x-1">↗</span>
            </button>
          </Link>

          {/* Contact Button */}
          <button
            onClick={() => navigate('/contact')}
            className="group border px-6 py-3 rounded-full transition-all duration-300 bg-white hover:bg-white hover:scale-90 font-bold  hover:shadow-md"
          >
            <span className='text-gray-800'>Contact</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default HomeIcon
