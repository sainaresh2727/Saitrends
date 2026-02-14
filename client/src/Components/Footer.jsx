import React from 'react'
import Brandimg from '../assets/Images/Brand2.png'
import { Link } from 'react-router-dom'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
  return (
    <>
    <section className='container-fluid py-5' id='footercf'>
    <div className="container">
    <div className="row">
   
    <div className="col-lg-4 p-2 col-12" id='footercol1'>
    <h4>SAI <span className='orangered' style={{fontWeight:"normal"}}>TRENDS</span></h4>
    <p>At Saitrends, we specialize in delivering <br /> trend-forwardfashion, premium quality <br /> apparel,and stylish accessories that help you <br /> express your confidence every day. <br /> From everyday essentials to statement pieces, <br /> we ensure comfort, quality, and elegance  <br />in every collection.</p>
    </div>
    
    <div className="col-lg-2 p-2 col-12" id='footercol2'>
    <h5>Quick Links</h5>
    <div id='footerLinks'>
    <Link className='linksFooter'>Home</Link>
    <Link className='linksFooter'>About</Link>
    <Link className='linksFooter'>New Arrivals</Link>
   <Link className='linksFooter'>Contact</Link>
    </div>
    </div>

    <div className="col-lg-2 p-2 col-12" id='footerservices'>
    <h5>Our Services</h5>
    <div id='servicesfootercont'>
    <p>Clothing Collection</p>
    <p>Bags</p>
    <p>Footwear</p>
    <p>Shoes</p>
    <p style={{whiteSpace:"nowrap"}}>Personal Styling Support</p>
    
    </div>
    </div>

    <div className="col-lg-4 p-2 col-12" id='footercolcontact'>
    <h5>Contact Us</h5>
    <div className='contact'>
    <FaPhoneAlt className='footericon' />
    <p>6380205098</p>
    </div>
    <div className='contact'>
    <IoMdMail  className='footericon' />
    <p>saitrends27@gmail.com</p>
    </div>
    <div className='contact'>
    <FaLocationDot   className='footericon' />
    <p>Sai Trends,123 Street,Karaikudi</p>
    </div>
    </div>

    </div>
    </div>
    </section>
    </>
  )
}

export default Footer