import React from 'react'
import JoinNowimg from '../assets/Images/shopimg.jpg'
import { HiMiniArrowUturnRight } from "react-icons/hi2";

function Join() {
  return (
    <>
    <section className='py-5'>
    <div className="container">
    <div className="row">
    <div className="col-lg-6 col-12" id='joincol1'>
    <img src={JoinNowimg} alt="" />
    </div>
    <div className="col-lg-6 col-12 mt-5 mt-lg-0" id='joincontent'>
    <h1>Join the Style Sphere Community</h1>
    <ul id='offers'>
    <li>Premium Quality Clothing for Men, Women & Kids</li>
    <li>Style Guidance for Everyday Wear & Special Occasions</li>
    <li>First Access to New Arrivals & Festive Collections</li>
    <li>Community Fashion Events & Style Workshops</li>
    <li>Thoughtfully Designed Outfits that Blend Comfort & Elegance</li>
    </ul>
    <button id='joinnowbtn' className='mx-auto'>Join Now <HiMiniArrowUturnRight   id='joinnowicon'/></button>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Join