import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store, persistor } from './appRedux/store'
import CustomLoader from './components/CustomLoader'
import { } from 'redux-persist/integration/react'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <CustomLoader>
          <App />
          <Toaster position='top-center' toastOptions={{ duration: 3000 }} />
        </CustomLoader>
      </PersistGate>

    </Provider>

  </StrictMode>,
)
