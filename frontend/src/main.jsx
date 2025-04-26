import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { Provider } from 'react-redux'
import { store } from './appRedux/store'
import CustomLoader from './components/CustomLoader'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <CustomLoader>
        <App />
      </CustomLoader>
    </Provider>

  </StrictMode>,
)
