import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './API/authApi';
import { ownerApi } from './API/ownerApi';
import { userApi } from './API/userApi';  // Import userApi
import rootReducer from './featureSlice/routeReducer';
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore';
import { bookingApi } from './API/bookingApi';


const persistConfig = {
  key: 'root',
  storage,
  whitelist:['auth']
}

const persistedReducer = persistReducer(persistConfig,rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  
  middleware: (defaultMiddleware) =>
    
    defaultMiddleware({
      serializableCheck:{
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }).concat(
      authApi.middleware,
      ownerApi.middleware,
      userApi.middleware,
      bookingApi.middleware,  // Add userApi middleware
    ),
});


export const persistor = persistStore(store)

