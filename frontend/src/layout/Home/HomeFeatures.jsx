import React from 'react'
import { Link } from 'react-router-dom';
import bodak from '../../assets/bodak.jpg'
import river from '../../assets/sirki.jpg'
import bridge from '../../assets/bridg.jpg'
import snow from '../../assets/snow.jpg'
import temple from '../../assets/temple.jpg'
import { IoIosMore } from "react-icons/io"

const card = [
  {
    place: "Sriki River",
    description: " Nestled in the heart of Arunachal Pradesh, Sirki River in Pasighat is a hidden treasure. Surrounded by lush green hills and the soothing sounds of flowing water...",
    image: river,
  },
  {
    place: "Hanging Bridge",
    description: " Cross the iconic Hanging Bridge of Pasighat—a bamboo bridge over the Siang River. Feel the heritage and witness stunning views of nature...",
    image: bridge,
  },
  {
    place: "Golden Pagoda",
    description: "  Cross the iconic Hanging Bridge of Pasighat—a bamboo bridge over the Siang River. Feel the heritage and witness stunning views of nature...",
    image: temple,
  },
  {
    place: "Mayodia Roing",
    description: "  Hidden in the misty hills above Roing lies Mayodia Pass, a serene mountain getaway that transforms into a snowy wonderland during the winter. With winding roads, ...",
    image: snow,
  }
]


const HomeFeatures = () => {

  return (
    <div>
      {/* Background Section */}
      <div
        className="bg-cover bg-center relative h-[500px] flex items-center justify-center text-white shadow-2xl"
        style={{
          backgroundImage: `url(${bodak})`,
          backgroundColor: '#334c39',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <Link to="/about">
          <h2 className="relative text-3xl md:text-4xl font-bold text-white z-10 hover:scale-110 duration-500 hover:underline">
            Discover Nature With Us
          </h2>
        </Link>

      </div>

      {/* Features Section */}
      <div
        className="bg-cover bg-center py-10 px-4 md:px-10"
        style={{
          backgroundColor: 'rgba(34, 56, 45, 0.6)',
        }}

      >
        <div className="grid md:grid-cols-2 gap-6 text-gray-800">


          {
            card.map((item, index) => (
              <Link to="/sirki" className="group" key={index}>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                  <img
                    src={item.image}
                    alt="Sirki River"
                    className="h-[250px] w-full object-cover group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="p-4 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.place}</h3>
                    <p>
                      {item.description}
                      <span className="underline text-blue-300 cursor-pointer"> Click more</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          }
          {/* Sirki River Card */}


        </div>
        <div className="text-white">
          <h1 className='flex items-center justify-center mt-5 font-bold underline cursor-pointer hover:text-blue-600 hover:scale-105 duration-500 transition-all '>see more <span><IoIosMore /></span></h1>
        </div>
      </div>
    </div >
  )
}

export default HomeFeatures

