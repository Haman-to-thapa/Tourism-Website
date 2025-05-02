import { combineReducers } from "@reduxjs/toolkit"
import { authApi } from "../API/authApi";
import { ownerApi } from "../API/ownerApi";
import { userApi } from "../API/userApi";
import authSlice from '../featureSlice/Slice'
import { bookingApi } from "../API/bookingApi";



const rootReducer = combineReducers({
  auth:authSlice,
  [authApi.reducerPath]:authApi.reducer,
  [ownerApi.reducerPath]:ownerApi.reducer,
  [userApi.reducerPath]:userApi.reducer,
  [bookingApi.reducerPath]:bookingApi.reducer,
})


export default rootReducer;