import { useState } from 'react'
import './App.css'
import Carousel from './Components/Carousel'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <div className=''>
      <Navbar></Navbar>
    <Carousel></Carousel>
    <Footer></Footer>
    </div>
    </>
  )
}

export default App
