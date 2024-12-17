import { useState } from 'react'
import './App.css'
import HomePage from './assets/pages/homePage/homePage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Shop from './assets/pages/shop/shop'
import Service from './assets/pages/servi/service'
import Contact from './assets/pages/contact/contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/> } />
          <Route path='/shop' element={<Shop/> } />
          <Route path='/services' element={<Service/> } />
          <Route path='/contact' element={<Contact/> } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
