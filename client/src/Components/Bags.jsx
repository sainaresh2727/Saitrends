import React, { useContext, useEffect } from 'react'
import { FaCartPlus } from "react-icons/fa";
import { TbListDetails } from "react-icons/tb";
import { CiHeart } from "react-icons/ci"
import { My_Context } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

function Bags() {
  let {Bags,AddToCart}=useContext(My_Context)
  let naviagte=useNavigate()
  useEffect(()=>{
AOS.init({
        duration: 1000, 
        once: false      
                 }); 
  },[])
  return (
   <>
   <section className='container-fluid mb-5'>
         <div className="container">
         <div className='text-center mt-4' id='mensectioncontent' data-aos="zoom-in-up"
        data-aos-duration='1500'>
         <h2 className='mb-0'>Bags for Every Journey</h2>
         <h4>Carry Style Everywhere.</h4>
         </div>
         <div className="row">
          {
            Bags.map((x,y)=>{
              return(
                <div className="col-lg-3 mt-5 col-12"  data-aos="fade-down" 
               data-aos-duration='1500'>
                <div className="card h-100" id='MensCard' key={x._id}>
                <div className='imageParentInd'>
                <img src={x.ProductImg} alt="" />
                <div className="overlay"></div>
                </div>
                <div className="card-body">
                <div className='categoryBagsec'>
                <h6>{x.ProductName}</h6>
                <p className='despdct'>{x.ProductCategory}</p>
                </div>
                <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,130)+"..."
              :
              x.ProductDes}</p>
              <h1 className='price'>Price: <span className='pricerate'>{x.ProductPrice}</span> </h1>
              <div className='addtocart text-center mt-3'>
              <button className='cartbtn'  onClick={()=>AddToCart(x._id)}>Add To Cart <FaCartPlus className='carticon' /></button>
              </div>
              
              <div className='heartdetails'>
              <div className='hearticonparent'>
              <TbListDetails className='detailsicon' onClick={()=>naviagte(`/ProductPage/${x._id}`)}/>
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
   </>
  )
}

export default Bags