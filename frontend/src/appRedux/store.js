import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './API/authApi';
import { ownerApi } from './API/ownerApi';
import { userApi } from './API/userApi';  // Import userApi

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [ownerApi.reducerPath]: ownerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,  // Add userApi reducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(
      authApi.middleware,
      ownerApi.middleware,
      userApi.middleware  // Add userApi middleware
    ),
});

const initializeApp = async () => {
  await store.dispatch()
}