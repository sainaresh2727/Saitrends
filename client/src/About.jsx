import React, { useEffect } from 'react'

import vector1 from './assets/Images/7479.jpg'
import vector2 from './assets/Images/43289.jpg'
import vector3 from './assets/Images/vector1.jpg'
import vector4 from './assets/Images/Vector2.jpg'
import vector5 from './assets/Images/Vector4.png'
import vector6 from './assets/Images/Vector3.jpg'
import vector7 from './assets/Images/Vector5.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules'
import 'swiper/css';

import { GiClothes } from "react-icons/gi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { useNavigate } from 'react-router-dom'

import AOS from "aos";
import "aos/dist/aos.css";

function About() {
  let vectorimages=[
     vector4,vector5,vector1,vector2,vector3,vector6,vector7
  ]

  let whatweoffer=[
   {
        id:1,
        icon:"fa-solid fa-gem",
        title:"Premium Quality",
        Des:"We carefully select high-grade fabrics and ensure precise stitching so every outfit delivers long-lasting comfort, durability, and premium"
    },
       {
        id:2,
        icon:"fa-solid fa-shirt",
        title:"Trendy Collection",
        Des:"We carefully select high-grade fabrics and ensure precise stitching so every outfit delivers long-lasting comfort, durability, and premium feel"
    },
     {
        id:3,
        icon:"fa-solid fa-tags",
        title:"Affordable Prices",
        Des:"We believe fashion should be accessible to everyone. Enjoy stylish clothing at budget-friendly prices without compromising quality."
    }
    
  ]
  let navigate=useNavigate()
  useEffect(()=>{
    AOS.init({
            duration: 1000, 
            once: false      
               }); 
  },[])
  return (
    <>
    <section className='container-fluid py-5' id='aboutcf'>
    <div className="container">
    <div id='aboutusheading' className='text-center'>
    <h2 className='mb-0' data-aos="zoom-in-up"
   data-aos-duration='1500'>About Us</h2>
    <div className='hrline'></div>
    </div>
   
    <div className="row mt-2 mt-lg-5">
   
    <div className="col-lg-6  col-12" id='aboutusimgcol' data-aos="zoom-out-up" data-aos-duration='2000'>
    <Swiper modules={[Autoplay]} spaceBetween={10} className='mt-4'
    loop={true} autoplay={{delay: 1300,disableOnInteraction: false }}
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
            vectorimages.map((x,y)=>{
            return(
            <SwiperSlide id='aboutvector' className='text-center'>
            <img src={x} id='aboutusimgcolimg' />
            </SwiperSlide>
                )
            })
        }
    
    </Swiper>
    </div>
    <div className="col-lg-6 col-12 mt-lg-0 mt-5" id='aboutcontent' data-aos="zoom-out-up" data-aos-duration='2000'>
    <h1>Crafting With Style, <br />Delevering With Confidence</h1>
    <div className='aboutpara'>
    <p>We are a Passionate Clothing Brand Dedicated to Bringing You the Latest Trends with <span className='orangered'>Comfort, Quality, and Affordability</span> at the Heart of Everything We do.</p>
    <p>Our Collection is Carefully Curated to Suit <span className='orangered'>Every Style and Occasion</span>, Helping You Express Yourself with Confidence. With a Smooth Online Shopping Experience, Reliable Services, and a Strong Focus on Customer Satisfaction.</p>
    <p>We Aim to Make Fashion <span className='orangered'>Simple, Enjoyable, and Accessible</span> For Everyone. Join Us on Our Journey to Redefine Everyday Style and Make Every Outfit a Statement </p>
    </div>
    <button id='explorebtn' onClick={()=>navigate('/NewArrivals')}>Explore Now</button>
    </div>
    </div>

    <div className="row mt-5">
    
    <div className='col-lg-6 col-12'id='whowearecol1' data-aos="zoom-in-up" data-aos-duration='2000'>
   <h2 className='whowearehead'>WHO WE ARE</h2>
    <h2 className='whowearestyle'>Elevating Your Style, One Outfit at a Time!</h2>
    <div id='whowearep2' className=''>
    <p><span className='orangered'>Sai Vogue Trends </span>is a Clothing E-commerce Brand based in <span className='orangered'>Karaikudi, India</span>, Dedicated to Bringing Trendy, Comfortable, and Affordable Fashion to your Doorstep.</p>
    <p>We Curate Stylish Collections, Premium Fabrics, and the Latest Designs to Suit <span className='orangered'>Every Occasion and Personality.</span></p>
    <p>Our team <span className='orangered'>Focuses on Quality, Customer Satisfaction, and a Seamless Shopping</span> Experience from Browsing to Delivery.</p>
    </div>
    <button id='explorebtn' onClick={()=>navigate('/NewArrivals')}>Discover More</button>
    </div>
    <div className="col-lg-6 mt-lg-0 mt-3" id='whowearecol2parent' data-aos="zoom-in-up" data-aos-duration='2000'>
    <div className="row d-flex justify-content-center gap-4">
    <div className="col-lg-6 whowearecol2childs">
    <GiClothes className='iconwhoweare' />
    <p>Premium Fabric</p>
    </div>
    <div className="col-lg-6 whowearecol2childs">
    <MdOutlineDesignServices className='iconwhoweare' />
    <p>Trendy Design</p>
    </div>
    <div className="col-lg-6 whowearecol2childs">
    <FaShippingFast className='iconwhoweare' />
    <p>Fast Delivery</p>
    </div>
    <div className="col-lg-6 whowearecol2childs">
    <RiCustomerService2Line className='iconwhoweare' />
    <p>Customer Support</p>
    </div>
    </div>
    </div>
    </div>

    <div className="row mt-5" id='whychooseus'>
    <div className='text-center'>
    <h2 data-aos="zoom-in-up"
   data-aos-duration='1500'>WHY CHOOSE US</h2>
    <h1 className='mt-3' data-aos="zoom-in-up"
   data-aos-duration='1500'>What We Offer</h1>
    </div>
    {
      whatweoffer.map((x,y)=>{
        return(
          <div className="col-lg-4 col-12 mt-5 mt-lg-0" data-aos="zoom-in-up" data-aos-duration='2000'>
          <div className="card h-100 text-center" key={x.id} id='whatweoffercard'>
          <div className="card-body" id='whattweoffercardbody'>
          <div className='iconwhywechooseicon mx-auto'>
          <i className={x.icon}></i>
          </div>
          <h5 className='titleoffer'>{x.title}</h5>
          <p>{x.Des}</p>
          </div>
          </div>
          </div>
        )
      })
    }
    </div>

    <div className="row  mt-5" id="faqsrow">
    <div>
    <h2 className="text-center mb-0" id='askedquestion' data-aos="zoom-in-up"
   data-aos-duration='1500'>Frequently Asked Questions</h2>
    <div className='hrline'></div>
    </div>
   
    <div className="accordion col-md-8 mx-auto mt-4" id="accordionExample" >

        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              How can I place an order?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Browse products by category (Mens, Womens, Kids, Bags, Shoes),
              select size and quantity, click <strong>Add to Cart</strong>,
              then proceed to checkout and complete your payment securely.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              How long does delivery take?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Orders are delivered within <strong>3–7 business days</strong>.
              You will receive a tracking link once your order is shipped.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              What is your return policy?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We offer a <strong>7-day return policy</strong> for unused items
              with original tags. Refunds are processed within 5–10 business days.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              What payment methods do you accept?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We accept Debit/Credit Cards, UPI, Net Banking,
              and Cash on Delivery (COD) in selected locations.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              How do I choose the correct size?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Each product page includes a detailed size chart.
              Please refer to it before placing your order.
              If unsure, contact our support team for help.
            </div>
          </div>
        </div>

      </div>
    </div>

    </div>
    </section>
    </>
  )
}

export default About