import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Banner from './Components/Hero/Banner'
import App from './App'
import Review from './Components/Review'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Signup from './Components/Signup'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Banner/>}/>
      <Route path='/review' element={<Review/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>



    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
 
  </StrictMode>,
)
