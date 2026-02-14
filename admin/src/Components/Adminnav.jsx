import React from 'react'
import Brandimage from '../assets/Images/Brand2.png'
import { Link, useNavigate } from 'react-router-dom'
import Myimg from '../assets/Images/Me.jpg'
import { useContext } from 'react'
import { My_Context } from '../Context/Context'
import { IoIosSearch } from "react-icons/io";

function Adminnav() {
  let {setsearchpdct}=useContext(My_Context)
  let navigate=useNavigate()
  return (
    <>
    <section className='container-fluid' id='navbarcf'>
    <div className="container" id='navbarcontainerlg'>
    
    <div id='Brandimg'>
    <img src={Brandimage} alt="" />
    </div>

    <div id='adminpanel'>
    <h3>Admin Panel</h3>
    </div>

    <div id='lgmenus'>
    <Link className='link' to={'/'}>Home</Link>
    <Link className='link' to={'/Productlist'}>Product List</Link>
    <Link className='link' to={'/Userslist'}>User List</Link>
    </div>

    <div id='searchpdct' className='input-group'>
    <input type="text"  className='form-control' placeholder='Search Product.......' onChange={(e)=>setsearchpdct(e.target.value)} onClick={()=>navigate('/Productlist')}/>
    <span className='input-group-text' id='searchicon'><IoIosSearch /></span>
    </div>

    <div id='adminprofileimg'>
    <img src={Myimg} alt="" />
    </div>

    </div>
    </section>
    </>
  )
}

export default Adminnav