import React from 'react'
import Contactimg from '../assets/Images/contactimage.jpg'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <>
    <section className='container-fluid py-5'>
    <div className="container">
    <div className='text-center' id='contactheading'>
    <h2 className='mb-0'>Contact Us</h2>
    <div className='hrline'></div>
    </div>
    <div className="row mt-0 mt-lg-5">
    <div className="col-lg-6" id='contactusimaagecol1'>
    <img src={Contactimg}/>
    </div>
    <div className="col-lg-6" id='contactpara'>
    <p>At Sai Trends, we’re Always here to Help you with Your Shopping Needs. Whether you Have Questions About Orders, Sizing, Returns, or New Arrivals, Feel Free to Reach Out to Us Anytime.</p>
    <p>Our support team is dedicated to providing quick responses and ensuring you have a smooth and enjoyable shopping experience. We believe that great fashion should be backed by great service, and we are committed to assisting you at every step of your shopping journey.</p>
    <p>From helping you choose the perfect outfit to tracking your order and resolving concerns, our team is ready to support you with professionalism and care. Your satisfaction is our priority, and we continuously strive to improve our services to meet your expectations.</p>
    </div>
    </div>
    <div className="row mt-4">
    <div className="col-lg-6" id='contactuscol3'>
    <h4>Get In Touch</h4>
    <p>Feel Free to Reach Out Through Any of the Methods Below :</p>
    <div className='contactinfo'>
    <FaLocationDot className='contactusicons' />
    <p>Sai Trends,<br />123 Street, <br />Karaikudi</p>
    </div>
    <div className='contactinfo'>
    <FaPhoneAlt className='contactusicons' />
    <p>6380205098</p>
    </div>
    <div className='contactinfo'>
    <IoMdMail className='contactusicons' />
    <p>saitrends27@gmail.com</p>
    </div>
    </div>
    <div className="col-lg-6 mt-4 mt-lg-0" id='sendmessage'>
    <h4>Send a Message</h4>
    <div className='formcontact'>
    <input type="text" className='form-control' placeholder='Enter Your Name' />
    <input type="number" className='form-control' placeholder='Enter Your Number' />
   <textarea className='form-control' rows={4} placeholder='Enter Your Queries'></textarea>
   <button id='messagecontact'>Message</button>
    </div>
    </div> 
    </div>
    <div className="row mt-4">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31426.87761097026!2d78.76115444730621!3d10.06958411747878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005d8b08de4f3b%3A0x1f24fc0ab84584f8!2sKaraikudi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1770983357659!5m2!1sen!2sin" width="600" height="450" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    </div>
    </section>
    </>
  )
}

export default Contact