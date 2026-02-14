import React from 'react'
import Banner1 from '../assets/Images/Banner4.png'
import Banner2 from '../assets/Images/Banner2.png'

import Banner4 from '../assets/Images/Banner7.png'
import Banner5 from '../assets/Images/Banner6.png'
import Banner6 from '../assets/Images/Bagsbanner.jpg'
import Banner7 from '../assets/Images/Banner5.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation} from 'swiper/modules'
import 'swiper/css/navigation';
import { useNavigate } from 'react-router-dom'

function Swiperbg() {
  let Bgbanner=[
    Banner1,Banner2,Banner5,Banner4,Banner6,Banner7
  ]
  let navigate=useNavigate()
  return (
    <>
    <section className='container-fluid py-5' id='swiperparent'>
    <div className="container">
    <div className='text-center' id='offers'>
    <h3 className='mb-0'>Explore Our Offers</h3>
    <div className='hrline mb-0'></div>
    </div>    
    <Swiper modules={[Autoplay,Navigation]} spaceBetween={10} className='mt-4' navigation={true}  
    loop={true} autoplay={{delay: 3000,disableOnInteraction: false }}
           breakpoints={{
        0: {
          slidesPerView: 1
        },
        576: {
          slidesPerView: 1
        },
        992: {
          slidesPerView: 1
        },
        1200: {
          slidesPerView: 1
        }
      }} id=''>
        {
            Bgbanner.map((x,y)=>{
            return(
            <SwiperSlide id='bgbanner' className='text-center' onClick={()=>navigate('/NewArrivals')}>
            <img src={x} alt="" />
            </SwiperSlide>
                )
            })
        }
    
    </Swiper>
    </div>
    </section>
    </>
  )
}

export default Swiperbg