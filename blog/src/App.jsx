
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
// import Banner from './Components/Banner'


function App() {
  

  return (
    <>
      
      <Navbar/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
