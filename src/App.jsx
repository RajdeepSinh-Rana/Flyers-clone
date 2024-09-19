
import './App.css'
import Navbar from './components/Navbar'
import ScrollingNavbar from './components/ScrollingNavbar'
import Footer from './Pages/Footer'

import MainRouter from './Router/Router'


function App() {

  return (
    <>
    <ScrollingNavbar/>
      <MainRouter/>
      <Footer/>
    </>
  )
}

export default App
