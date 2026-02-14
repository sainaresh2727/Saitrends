import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Context from './Context/Context'
import Adminnav from './Components/Adminnav'
import Home from './Pages/Home'
import ProductList from './Components/ProductList'
import UserList from './Components/UserList'

function App() {
  return (
    <>
    <BrowserRouter>
    <Context>
    <Adminnav/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Productlist' element={<ProductList/>}/>
    <Route path='/Userslist' element={<UserList/>}/>
    </Routes>
    </Context>
    </BrowserRouter>
    </>
  )
}

export default App