import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/Navbar/Nav'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
