import React from 'react'
import hero from '../../assets/river.jpg'

const HomeIcon = () => {
  return (
    <section
      className="h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${hero})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-16 ">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-[600px] text-white ">
          Explore the <br /> NortEast with us
        </h1>

        <div className="flex items-center gap-4">
          <button className="bg-white  px-6 py-3 rounded-full font-medium  transition flex items-center gap-2">
            Learn more
            <span className="inline-block transform group-hover:translate-x-1 transition ">↗</span>
          </button>

          <button className="border border-white px-6 py-3 rounded-full font-medium bg-white hover:text-gray-800 transition">
            Contact
          </button>
        </div>
      </div>
    </section>
  )
}

export default HomeIcon
