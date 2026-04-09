import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider  } from 'react-router-dom'
import Layout from './Layout'
import About from './components/About/About'
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import User from "./components/User/User"
import Github, {githubInfoLoader} from "./components/Github/Github"



const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element ={<Layout/>}>
      <Route index element = {<Home/>}/>
      <Route path='about' element = {<About/>}/>
      <Route path='contact'element = {<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route loader = {githubInfoLoader} path='github' element ={<Github/>}/>

    </Route>

  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}/>
  </StrictMode>,
)
