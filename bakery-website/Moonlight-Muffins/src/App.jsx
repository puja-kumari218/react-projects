import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route} from 'react-router-dom'
import Layout from './Layout'

import Home from './pages/Home'
import Menu from './pages/Menu'
import MenuItem from './pages/MenuItem'
import About from './pages/About'
import Contact from './pages/Contact'
import Github from './pages/Github'


const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element ={<Layout/>}>
      <Route index element={<Home/>}/>

    </Route>
  )    
)

export default router
