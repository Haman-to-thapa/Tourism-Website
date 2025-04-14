import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './layout/Home'
import Login from './pages/User/Login'
import Register from './pages/User/register'
import SearchPlace from './pages/NavbarIcon/SearchPlace'
import SelectedDate from './pages/NavbarIcon/SelectedDate'
import Notification from './pages/NavbarIcon/Notification'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<SearchPlace />} />
          <Route path="/date" element={<SelectedDate />} />
          <Route path='/notification' element={<Notification />} />

        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
