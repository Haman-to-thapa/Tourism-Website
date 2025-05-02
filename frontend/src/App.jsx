import React, { useEffect } from 'react'
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
import PurchaseSession from './pages/PurchaseSession'
import { useDispatch } from 'react-redux'
import { useGetMeQuery } from './appRedux/API/authApi'
import { userLoggedIn, userLoggedOut } from './appRedux/featureSlice/Slice'
import ProtectedRoute from './components/ProtectedRoute'


const App = () => {

  const dispatch = useDispatch();
  const { data, isLoading, isError } = useGetMeQuery();

  useEffect(() => {
    if (data?.user) {
      dispatch(userLoggedIn({
        user: data.user,
        sessionCode: data.sessionCode
      }));
    } else {
      dispatch(userLoggedOut());
    }
  }, [data, isError, dispatch]);


  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/search' element={<SearchPlace />} />
          <Route path='/search/:id' element={<PlaceDetails />} />
          <Route path='/search/:id/book-now' element={
            <ProtectedRoute>
              <Booking />
            </ProtectedRoute>
          } />
          <Route path='/search/:id/book-now/purchase' element={<PurchaseSession />} />

          <Route path="/date" element={<SelectedDate />} />
          <Route path='/notification' element={<Notification />} />
          <Route path='/contact' element={<ContactUs />} />


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
