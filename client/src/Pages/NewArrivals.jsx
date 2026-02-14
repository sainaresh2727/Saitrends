import React, { useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { My_Context } from '../Context/Context';

import AOS from "aos";
import "aos/dist/aos.css";

function NewArrivals() {
  let {Mens,Kids,Womens,Shoes,Bags}=useContext(My_Context)

  useEffect(()=>{
    AOS.init({
            duration: 1000, 
            once: false      
               }); 
  },[])

  return (
   <>
   <section className='container-fluid py-5'>
   <div className="container">
    <div className='text-center' id='newarrivalsheading'>
    <h2 className='mb-1' data-aos="zoom-in-up"
   data-aos-duration='1500'>You'r In New Arrivals</h2>
    
    <marquee behavior="" direction="" id=''className='mt-2'>
    <div id='marqueenewarrivals'>
    <p>Fresh Styles Just Landed, <span className='orangered'>Latest Trends </span>for Your Family.</p>
    <p>From Everyday Comfort to <span className='orangered'>Standout Styles, </span>Explore What's <span className='orangered'>New in Our Store</span> in this Week.</p>
    <p>Step into the Season with Our Newest Collections in <span className='orangered'>Clothing, Bags, Shoes. Handpicked Trends, Premium Quality </span>and Styles You'll Love!</p>
    </div>
    </marquee>

    {/* MENS */}
    <div className="row">
    <div className='categories'>
    <h3>FOR MEN'S</h3>
    <Link className='viewmore' to={'/Mens'}>View More <HiOutlineArrowCircleRight className='viewmoreicon'/></Link>
    </div>
    {
        Mens.slice(0,4).map((x,y)=>{
        return (
        <div className="col-lg-3 mt-3 col-12" data-aos="fade-down" data-aos-duration='2000'>
        <div className="card h-100 menscardarrivals" key={x._id}>
        <div className='imageparent'>
         <img src={x.ProductImg} alt="" />
        </div>
        <div className="card-body">
        <div className='namecategory'>
        <h3>{x.ProductName}</h3>
        <p>{x.ProductCategory}</p>
        </div>
        <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,70)+"..."
        :
        x.ProductDes}</p>
        <div className='d-flex justify-content-start'>
        <p className='pdctprice'> <b>Price:</b> <span className='pricecolor'>{x.ProductPrice}</span></p>
        </div>
        <div>
        <Link className='viewmorebutton' to={'/Mens'}>View More <HiOutlineArrowCircleRight className='viewmoreiconn'/></Link>
        </div>
        </div>
        </div>
        </div>
            )
        })
    }

    
    </div>
    
    {/* KIDS */}
    <div className="row mt-5">
    <div className='categories'>
    <h3>FOR KID'S</h3>
    <Link className='viewmore' to={'/Kids'}>View More <HiOutlineArrowCircleRight className='viewmoreicon'/></Link>
    </div>
    {
        Kids.slice(0,4).map((x,y)=>{
        return(
        <div className="col-lg-3 mt-3 col-12" data-aos="fade-down" data-aos-duration='2000'>
        <div className="card menscardarrivals" id='' key={x._id}>
        <div className='imageparentKids'>
        <img src={x.ProductImg} alt="" />
        </div>
         <div className="card-body">
        <div className='namecategoryKids'>
        <h3>{x.ProductName}</h3>
        <p >{x.ProductCategory}</p>
        </div>
        <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,70)+"..."
        :
        x.ProductDes}</p>
        <div className='d-flex justify-content-start'>
        <p className='pdctprice'> <b>Price:</b> <span className='pricecolor'>{x.ProductPrice}</span></p>
        </div>
        <div>
        <Link className='viewmorebutton' to={'/Kids'}>View More <HiOutlineArrowCircleRight className='viewmoreiconn'/></Link>
        </div>
        </div>
        </div>
        </div>
            )
        })
    }
    </div>

    {/* WOMENS */}
    <div className="row mt-5">
    <div className='categories'>
    <h3>FOR WOMEN'S</h3>
    <Link className='viewmore' to={'/Womens'}>View More <HiOutlineArrowCircleRight className='viewmoreicon'/></Link>
    </div>
    {
        Womens.slice(0,4).map((x,y)=>{
        return (
        <div className="col-lg-3 mt-3 col-12" data-aos="fade-down" data-aos-duration='2000'>
        <div className="card h-100 menscardarrivals" key={x._id}>
        <div className='imageparent'>
         <img src={x.ProductImg} alt="" />
        </div>
        <div className="card-body">
        <div className='namecategorywomen'>
        <h3>{x.ProductName}</h3>
        <p>{x.ProductCategory}</p>
        </div>
        <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,70)+"..."
        :
        x.ProductDes}</p>
        <div className='d-flex justify-content-start'>
        <p className='pdctprice'> <b>Price:</b> <span className='pricecolor'>{x.ProductPrice}</span></p>
        </div>
        <div>
        <Link className='viewmorebutton' to={'/Womens'}>View More <HiOutlineArrowCircleRight className='viewmoreiconn'/></Link>
        </div>
        </div>
        </div>
        </div>
            )
        })
    }

    
    </div>

    <div className="row mt-5">
    <div className='categories'>
    <h3>BAGS</h3>
    <Link className='viewmore' to={'/Bags'}>View More <HiOutlineArrowCircleRight className='viewmoreicon'/></Link>
    </div>
    {
        Bags.slice(0,4).map((x,y)=>{
        return (
        <div className="col-lg-3 mt-3 col-12" data-aos="fade-down" data-aos-duration='2000'>
        <div className="card h-100 menscardarrivals" key={x._id}>
        <div className='imageparent'>
         <img src={x.ProductImg} alt="" />
        </div>
        <div className="card-body">
        <div className='namecategoryBags'>
        <h3>{x.ProductName}</h3>
        <p>{x.ProductCategory}</p>
        </div>
        <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,70)+"..."
        :
        x.ProductDes}</p>
        <div className='d-flex justify-content-start'>
        <p className='pdctprice'> <b>Price:</b> <span className='pricecolor'>{x.ProductPrice}</span></p>
        </div>
        <div>
        <Link className='viewmorebutton' to={'/Bags'}>View More <HiOutlineArrowCircleRight className='viewmoreiconn'/></Link>
        </div>
        </div>
        </div>
        </div>
            )
        })
    }

    
    </div>

    {/* SHOES */}
     <div className="row mt-5">
    <div className='categories'>
    <h3>SHOE'S</h3>
    <Link className='viewmore' to={'/Shoes'}>View More <HiOutlineArrowCircleRight className='viewmoreicon'/></Link>
    </div>
    {
        Shoes.slice(0,4).map((x,y)=>{
        return (
        <div className="col-lg-3 mt-3 col-12" data-aos="fade-down" data-aos-duration='2000'>
        <div className="card h-100 menscardarrivals" key={x._id}>
        <div className='imageparent'>
         <img src={x.ProductImg} alt="" />
        </div>
        <div className="card-body">
        <div className='namecategoryShoes'>
        <h3>{x.ProductName}</h3>
        <p>{x.ProductCategory}</p>
        </div>
        <p className='pdctdes mt-2 mb-2'>{x.ProductDes?.length > 160 ? x.ProductDes.slice(0,70)+"..."
        :
        x.ProductDes}</p>
        <div className='d-flex justify-content-start'>
        <p className='pdctprice'> <b>Price:</b> <span className='pricecolor'>{x.ProductPrice}</span></p>
        </div>
        <div>
        <Link className='viewmorebutton' to={'/Shoes'}>View More <HiOutlineArrowCircleRight className='viewmoreiconn'/></Link>
        </div>
        </div>
        </div>
        </div>
            )
        })
    }

    
    </div>

    </div>
    </div>
    </section>
   </>
  )
}

export default NewArrivals