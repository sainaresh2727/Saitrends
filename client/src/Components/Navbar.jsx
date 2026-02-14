import React, { useContext } from 'react'

// import Brandimg from '../assets/Images/Brand.png'

import Brandimg from '../assets/Images/Brand2.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { RiLogoutBoxLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { My_Context } from '../Context/Context';
import { TbListDetails } from "react-icons/tb";
import notfound from '../assets/Images/Nopdctfount.jpg'

function Navbar() {
  let {LogOut,setSearchPdct,Searchpdctinput,SearchPdct,addedcart,AddToCart,RemoveFromCart,totalPrice,UserName}=useContext(My_Context)
  let navigate=useNavigate()
  return (
    <>
    <section className='container-fluid p-3' id='navbarcf'>
    {/* ONLY VISIBLE FOR LARGE SCREENS */}
    <div className="d-none d-lg-flex p-2" id='navbarcontainer'>
    
    <div id='brand'>
    <img src={Brandimg} alt="" />
    </div>

   <div id='menubarlg'>
   <NavLink
    to="/Home"
    
    className={({ isActive }) => isActive ? "active" : "navlink"}
  >
    Home
  </NavLink>

  <NavLink
    to="/about"
    className={({ isActive }) => isActive ? "active" : "navlink"}
  >
    About
  </NavLink>

  <NavLink
    to="/NewArrivals"
    className={({ isActive }) => isActive ? "active" : "navlink"}
  >
    New Arrivals
  </NavLink>
  <NavLink
    to="/contact"
    className={({ isActive }) => isActive ? "active" : "navlink"}>
    Contact
  </NavLink>
   </div>

   <div id='categories'>
   <p className='categoriescontent'>Categories <IoMdArrowDropdown  className='droparrow'/></p>
   <div  className='categoriessection'>
   <Link to={'/Mens'} className='categorieslink'>Mens</Link>
   <Link className='categorieslink' to={'/Womens'}>Womens</Link>
   <Link className='categorieslink' to={'/Kids'}>Kids</Link>
   <Link className='categorieslink' to={'/Bags'}>Bags</Link>
   <Link className='categorieslink' to={'/Shoes'}>Shoes</Link>
   </div>
   </div>

    <div className='iconslg'>
    <CiSearch data-bs-toggle='offcanvas' data-bs-target='#SearchOffcanvas' />
    <CiHeart />
    <IoCartOutline  data-bs-toggle='offcanvas' data-bs-target='#CartOffcanvas'/>
    </div>

    <div id='purchaselogoutbtn'>
    <button id='purchasebtn' onClick={()=>navigate('/NewArrivals')}>Purchase <IoCartOutline  className='btninsideicon'/></button>
    <button id='logoutbtn' onClick={()=>LogOut()}>Logout    <RiLogoutBoxLine  className='btninsideicon'/></button>
    </div>

    <div id='profileid'>
    <p>{UserName.charAt(0).toUpperCase()}</p>
    </div>

    </div>

    {/* ONLY VISIBILE FOR SMALL SCREENS */}
    <div className="container d-flex d-lg-none" id='smnavbarcontainer'>
    
    <div id='smbrandimg'>
    <img src={Brandimg}  />
    </div>

    <div className='iconslg'>
    <CiSearch data-bs-toggle='offcanvas' data-bs-target='#SearchOffcanvas' />
    <CiHeart />
    <IoCartOutline data-bs-toggle='offcanvas' data-bs-target='#CartOffcanvas' />
    </div>

    <div id='smnavlinks'>
    <FaBars id='bar' data-bs-toggle='offcanvas' data-bs-target='#smnavbaroffcanvas' />
    </div>

    </div>
    </section>

    {/* OFFCANVAS FOR SMALL SCREENS NAVBAR */}
   <div className="offcanvas offcanvas-start" id="smnavbaroffcanvas">
   <div className="offcanvas-header">
   <h5 className="offcanvas-title" ></h5>
   <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
  </div>
  <div className="offcanvas-body">
  <div id='smnavlinks'>
  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Home'}style={{textDecoration:"none",color:"black"}}>Home</NavLink>
  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/about'} style={{textDecoration:"none",color:"black"}}>About</NavLink>

    <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/NewArrivals'} style={{textDecoration:"none",color:"black"}}>New Arrivals</NavLink>

  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Mens'} style={{textDecoration:"none",color:"black"}}>Mens</NavLink>

  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Womens'} style={{textDecoration:"none",color:"black"}}>Womens</NavLink>

  
  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Kids'} style={{textDecoration:"none",color:"black"}}>Kids</NavLink>

  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Bags'} style={{textDecoration:"none",color:"black"}}>Bags</NavLink>

  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Shoes'} style={{textDecoration:"none",color:"black"}}>Shoes</NavLink>
  
  <NavLink className={({ isActive }) => isActive ? "active" : "navlinksm"} to={'/Contact'} style={{textDecoration:"none",color:"black"}}>Contact</NavLink>

  <button id='purchasebtn' className='align-self-start' onClick={()=>navigate('/NewArrivals')}>Purchase <IoCartOutline  className='btninsideicon'/></button>
  <button id='logoutbtn' className='align-self-start' onClick={()=>LogOut()}>Logout    <RiLogoutBoxLine  className='btninsideicon'/></button>
  </div>
  
  </div>
  </div>

    {/* OFFCANVAS FOR SEARCH */}
    <div className="offcanvas offcanvas-top h-100" id='SearchOffcanvas'>
    <div className="offcanvas-header">
    <input type="text" className='form-control' placeholder='Search Here....' onChange={(e)=>setSearchPdct(e.target.value)}/>
    <h5 className="offcanvas-title"></h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
   </div>
   <div className="offcanvas-body">
  
    <section className='container-fluid' id='SearchCf'>
    <div className="container">
    <div className="row">
    {
      SearchPdct.length===0
      ?
      <div className='text-center'>
      <img src={notfound} style={{height:"320px"}}/>
      </div>
      :
      Searchpdctinput.map((x,y)=>{
        return(
          <div className="col-lg-3 mt-4">
          <div className="card" id='searchcard' key={x._id}>
          <div className='imgparentproduct'>
          <img src={x.ProductImg} alt="" />
          <div className="overlay"></div>
          </div>
          <div className="card-body">
          <div className='namecategorysearch'>
          <h6>{x.ProductName}</h6>
          <p>{x.ProductCategory}</p>
          </div>
          <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,130)+"..."
        :
        x.ProductDes}</p>
          <h6 className='priceparent'>Price: <span className='searchpdctprice'>{x.ProductPrice}</span></h6>
          <div className='text-center mt-3'>
          <button id='searchaddtocartbtn' onClick={()=>AddToCart(x._id)}>Add To Cart</button>
          </div>
          <div className='heartdetailsSearch'>
          <div className='hearticonparent'>
           <TbListDetails className='detailsicon' onClick={()=>navigate(`/ProductPage/${x._id}`)}/>
              </div>
              <div className='hearticonparent'>
              <CiHeart className='HeartIcon' />
              </div>
              </div>
          </div>
          </div>
          </div>
        )
      })
    }
    </div>
    </div>
    </section>
   
   </div>
   </div>

   {/* OFFCANVAS FOR ADDEDITEMS */}
    <div className="offcanvas offcanvas-top h-100" id='CartOffcanvas'>
    <div className="offcanvas-header">
    <h5 className="offcanvas-title"></h5>
    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"></button>
   </div>
   <div className="offcanvas-body">
   <section className='container-fluid'>
   <div className="container">
   <div id='addeditemsheading' className='text-center'>
   <h3>Added Items <IoCartOutline className='cartaddedicon'/></h3>
   <button id='checkoutbtn' className='btn btn-danger' data-bs-toggle='modal' data-bs-target='#InvoiceModal'>Check Out</button>
   </div>
   <div className="table-responsive mt-3">
   <table className='table align-middle' id='carttable'>
   <thead>
   <tr>
   <th>Image</th>
   <th>Name</th>
   <th>Price</th>
   <th>Quantity</th>
   <th>Description</th>
   <th>Remove</th>
   </tr>
   </thead>
   <tbody>
    {
      addedcart.map((x,y)=>{
        return (
          <tr>
          <td>
          <img src={x.ProductId.ProductImg} style={{height:"90px",borderRadius:"20px"}} />
          </td>
          <td>{x.ProductId.ProductName}</td>
          <td>{x.ProductId.ProductPrice}</td>
          <td className='text-center'>{x.Quantity}</td>
          <td>{x.ProductId.ProductDes?.length > 160 ? x.ProductId.ProductDes.slice(0,60)+"..."
        :
        x.ProductId.ProductDes}</td>
        <td><button id='RemoveCart' onClick={()=>RemoveFromCart(x.ProductId._id)}>Remove</button></td>
       </tr>
        )
      })
    }
   </tbody>
   </table>
   </div>
   </div>
   </section>
   </div>
    </div>

    {/* MODAL FOR INVOICE */}
    <div className="modal" id='InvoiceModal'>
    <div className="modal-dialog">
    <div className="modal-content">
    <div className="modal-header">
    <h3 className="modal-title" id='thanksvisit'>Invoice</h3>
    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div className="modal-body">
    <div className='d-flex justify-content-between align-items-center'>
    <img src={Brandimg} style={{height:"95px"}}/>
    <h5 className='thanksvoice'>Thanks For Visiting Our Shop!</h5>
    </div>
    <div className="table-responsive">
    <table className='table table-success'>
    <thead>
    <tr>
    <td>Product Name</td>
    <td>Product Quatity</td>
    <td>Product Price</td>
    <td>Product Ctegory</td>
    </tr>
    </thead>
    <tbody>
    {
      addedcart.map((x,y)=>{
        return (
          <tr>
          <td>{x.ProductId.ProductName}</td>
           <td className='text-center'>{x.Quantity}</td>
          <td>{x.ProductId.ProductPrice}</td>
          <td>{x.ProductId.ProductCategory}</td>
          </tr>
        )
      })
    }
    </tbody>
    </table>
    <div className='d-flex justify-content-center'>
    <p className='totalprice'>Total Price: {totalPrice}</p>
    </div>
    </div>
    </div>
    <div className="modal-footer">
    <button type="button" className="btn btn-success" data-bs-dismiss="modal">Pay</button>
   
    </div>
    </div>
   </div>
   </div>
    
    </>
  )
}

export default Navbar