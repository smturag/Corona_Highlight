import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import App from './App'
import APPP from './UI/Pages/SplashScreen'
const store = configureStore()



export default function index(){
  return(
    <Provider store={store}>
    
      <App />
      
    </Provider>
    
  )
}
