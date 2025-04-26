import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './layout/Home'
import Login from './pages/User/Login'
import Register from './pages/User/register'
import SearchPlace from './pages/NavbarIcon/SearchPlace'
import SelectedDate from './pages/NavbarIcon/SelectedDate'
import Notification from './pages/NavbarIcon/Notification'
import PlaceDetails from './pages/PlaceDetails'
import ContactUs from './pages/Contact'
import Booking from './pages/Booking'
import Admin from './pages/Owner/AdminLayout/Admin'
import OwnerLayout from './pages/Owner/OwnerLayout'
import AddPlace from './pages/Owner/pages/AddPlace'
import AllPlaces from './pages/Owner/pages/AllPlaces'


const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<SearchPlace />} />
          <Route path='/search/:id' element={<PlaceDetails />} />
          <Route path="/date" element={<SelectedDate />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/contact' element={<ContactUs />} />

          {/* delete sometimes */}
          <Route path='/booking' element={<Booking />} />


        </Route>

        <Route path='/owner' element={<Admin />}>
          <Route index element={<OwnerLayout />} />
          <Route path='/owner/add-place' element={<AddPlace />} />
          <Route path='/owner/all-places' element={<AllPlaces />} />

        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
