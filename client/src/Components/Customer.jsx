import React, { useEffect } from 'react'
import Googlelogo from '../assets/Images/googlelogo.png'
import Star from '../assets/Images/star.png'
import { FcRating } from "react-icons/fc";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules'
import { MdVerified } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

function Customer() {
  let CustomerReviewArray=[
    {
      id:1,
      name:"Ashwin Kumar",
      year:"1 month ago",
      Star:"⭐⭐⭐⭐",
      des:"The outfits are stylish, comfortable, and made with excellent fabric quality.",
      color:"#ec5b5b"
    },
     {
      id:2,
      name:"Zowlein",
      year:"1 year ago",
      Star:"⭐⭐⭐⭐",
      des:"Trendy designs with a perfect fit, exactly as shown on the website.",
      color:"#ffa500"
    },
    {
      id:3,
      name:"Alexa",
      year:"2 months ago",
      Star:"⭐⭐⭐⭐⭐",
      des:"Pricing is reasonable for the quality and overall shopping experience.",
      color:"#e751e7"
    },
      {
      id:5,
      name:"Roman",
      year:"2 year ago",
      Star:"⭐⭐⭐⭐⭐",
      des:"Delivery was quick and the packaging was neat and secure",
      color:"#33e1e7"
    },
    {
      id:6,
      name:"Rollins",
      year:"5 months ago",
      Star:"⭐⭐⭐⭐",
      des:"Customer support was friendly and helped with size selection.",
      color:"#a52a2a"
    },
  ]
  useEffect(()=>{
    AOS.init({
          duration: 1000, 
          once: false      
        });
  },[])
  return (
    <>
    <section className='container-fluid p-5' id='customercf'>
    <div className="container" id='customercontainer'>
    
    <div id='customerheading' className='text-center'>
    <h1 className='mb-0' data-aos="zoom-in-up"
   data-aos-duration='1500'>What Our Customer Says!</h1>
    <div className='hrline'></div>
    </div>

    <div id='googlereviewparent' className='mt-3' data-aos="zoom-in-up" data-aos-duration='2000'>
    
    <div id='ratingprarent'>
    <div id='googlelogo' className=''> 
    <img src={Googlelogo} />
    <p>Excellent Review on Google</p>
    </div>
    <div id='starrating'>
    <img src={Star} alt="" />
    <p>4.8 Out of 5</p>
    </div>
    </div>

    <div id="" className='d-none d-lg-flex'>
    <button id='ratingbtn'>Rate Us <FcRating id='rateusicon' /></button>
    </div>
   
    </div>

    <div id='swipergrandparent' className='mt-3' data-aos="zoom-in-up" data-aos-duration='2000'>
    <Swiper modules={[Autoplay]} spaceBetween={50}
       loop={true} autoplay={{delay: 3000,disableOnInteraction: false }}
       breakpoints={{
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 4
    }
  }}>
    {
      CustomerReviewArray.map((x,y)=>{
        return(
          <SwiperSlide className='swiperdiv' key={x.id}>
          <div className="card" id='card'>
          <div className="card-body">
          <div className='d-flex align-items-center gap-2'>
          <div id='userprofile' style={{background:`${x.color}`}}>
          <p>{x.name.charAt(0).toUpperCase()}</p>
          </div>
          <div className='details mt-3'>
          <h6 className='mb-0'>{x.name} <MdVerified /></h6>
          <p className='mt-0'>{x.year}</p>
          </div>
          </div>
          <div className='d-flex flex-column gap-2' id='desdiv'>
          <p className='mb-0'>{x.Star}</p>
          <p id='des'>{x.des}</p>
          </div>
          </div>
          </div>
          </SwiperSlide>
        )
      })
    }
    </Swiper>
    </div>

    </div>
    </section>
    </>
  )
}

export default Customer