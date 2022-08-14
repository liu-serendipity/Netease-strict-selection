import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './rem'
import { Provider } from 'react-redux'
import store from '@/store'
import App from './App'
import { GlobalStyle } from './style'
import './assets/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
)
