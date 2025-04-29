import { combineReducers } from "@reduxjs/toolkit"
import { authApi } from "../API/authApi";
import { ownerApi } from "../API/ownerApi";
import { userApi } from "../API/userApi";
import authSlice from '../featureSlice/Slice'



const rootReducer = combineReducers({
  auth:authSlice,
  [authApi.reducerPath]:authApi.reducer,
  [ownerApi.reducerPath]:ownerApi.reducer,
  [userApi.reducerPath]:userApi.reducer,
})


export default rootReducer;