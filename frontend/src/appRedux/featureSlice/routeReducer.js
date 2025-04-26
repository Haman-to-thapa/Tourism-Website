import { combineReducers } from "@reduxjs/toolkit"
import { authApi } from "../API/authApi";
import { ownerApi } from "../API/ownerApi";
import { userApi } from "../API/userApi";



const rootReducer = combineReducers({
  [authApi.reducerPath]:authApi.reducer,
  [ownerApi.reducerPath]:ownerApi.reducer,
  [userApi.reducerPath]:userApi.reducer,
})


export default rootReducer;