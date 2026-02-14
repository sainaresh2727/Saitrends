import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Context from './Context/Context'
import Home from './Pages/Home'
import Login from './Components/Login'
import Layout from './Components/Layout'
import Signup from './Components/Signup'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NewArrivals from './Pages/NewArrivals'
import Mens from './Components/Mens'
import Womens from './Components/Womens'
import Kids from './Components/Kids'
import Bags from './Components/Bags'
import Shoes from './Components/Shoes'
import ProductPage from './Components/ProductPage'
import Protect from './Protect/Protect'
import About from './About'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Context>
    <ToastContainer
      position="top-center"
      autoClose={4000}
      theme="colored"
      toastStyle={{fontSize:"small"}}/>

    <Routes>
    <Route path='/' element={ <Login/>}/>
    <Route path='/Signup' element={<Signup/>}/>
   
    <Route element={<Protect><Layout/></Protect>}>
    <Route path='/about' element={<About/>}/>
    <Route path='/Home' element={<Protect><Home/></Protect>} />
    <Route path='/NewArrivals' element={<Protect><NewArrivals/></Protect>}/>
    <Route path='/Mens' element={<Protect><Mens/></Protect>}/>
    <Route path='/Womens' element={<Protect><Womens/></Protect>}/>
    <Route path='/Kids' element={<Protect><Kids/></Protect>}/>
    <Route path='/Bags' element={<Protect><Bags/></Protect>}/>
    <Route path='/Shoes' element={<Protect><Shoes/></Protect>}/>
    <Route path='/Contact' element={<Protect><Contact/></Protect>}/>
    <Route path='/ProductPage/:id' element={<Protect><ProductPage/></Protect>}/>
    </Route>
    </Routes>
    </Context>
   </BrowserRouter>
    
    
    </>
  )
}

export default App