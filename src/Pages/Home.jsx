import React from 'react'
import ScrollingNavbar from '../components/ScrollingNavbar'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Glory from '../components/Glory'
import HomeProduct from '../components/HomeProduct'
import ScrollingText from '../components/ScrollingText'
import Winner from '../components/Winner'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Slider/>
      <Glory/>
      <HomeProduct/>
      <ScrollingText/>
      <Winner/>
    </div>
  )
}

export default Home