import React from 'react'
import img1 from '../assets/Images/stfamilyimg1.png'
import img2 from '../assets/Images/stfamilyimg2.png'
import img3 from '../assets/Images/stfamilyimg3.png'
import img4 from '../assets/Images/stfamilyimg4.png'
import img5 from '../assets/Images/stfamilyimg5.png'
import img6 from '../assets/Images/stfamilyimg6.png'

function Stfamily() {
  return (
    <>
    <section className='container-fluid py-5'>
    <div className="container">
    <div className='text-center'>
    <h2 className='ourfamilytext mb-0'>Our <span className='primarycolor'>ST</span> Family</h2>
    <div className='hrline'></div>
    </div>
    <div className="row mt-3 d-none d-lg-flex">
    <div className="col-lg-4" id='stfamcol1'>
    <div className='imgparent'>
    <img src={img1} alt="" />
    </div>
    </div>
    <div className="col-lg-8" id='stfamcol2'>
    <div id='stfamilypara1' className='p-4'>
    <h6>"Fashion Threads Made Our Family Shopping So Effortless!"</h6>
    <p>When we Decided to Revamp Our Family's Wardrobe, We Weren’t Sure Where to Start. Then we Found Fashionista Threads! From Stylish Outfits for the Kids to Elegant Choices for us Parents, Everything we Needed was just a Click away. The Size Guides and Style Tips were Super Helpful, making outfit selections a breeze. The customer support team even helped us coordinate matching family looks for our weekend photoshoot. Our whole family looks and feels amazing. Thank you, Fashionista Threads, for turning shopping into a joyful family experience!</p>
    <div className='fmname'>
    <p>-Arjun & Family</p>
    </div>
    </div>
    </div>
    <div className="col-lg-8 mt-5" id='stfamcol3'>
    <div id='stfamilypara2' className='p-4'>
    <h6>"StyleHub Made Upgrading My Wardrobe Effortless!"</h6>
    <p>When I decided it was time to refresh my closet, I wasn’t sure where to start. Then I discovered StyleHub! From sharp casual wear to professional office outfits, everything I needed was just a click away. The size guides and style tips made choosing the right fit simple, and the quality of the clothes exceeded my expectations. The customer support team even helped me pick the perfect jacket for an upcoming event. I’ve never felt more confident and stylish. Thanks, StyleHub, for making men’s shopping so easy and satisfying</p>
    <div className='fmname'>
    <p>-Leodass</p>
    </div>
    </div>
    </div>
    <div className="col-lg-4 mt-5">
    <div className='imgparent'>
    <img src={img2} alt="" />
    </div>
    </div>
    
    <div className="col-lg-4 mt-5" id='stfamcol1'>
    <div className='imgparent'>
    <img src={img4} alt="" />
    </div>
    </div>
    <div className="col-lg-8 mt-5" id='stfamcol2'>
    <div id='stfamilypara3' className='p-4'>
    <h6>"StyleNest Made Dressing the Whole Family so Simple!"</h6>
    <p>When we wanted to refresh our family’s wardrobe, we weren’t sure where to begin. Then we discovered StyleNest! From playful outfits for the kids to chic and comfortable options for us adults, everything we needed was just a click away. The helpful size charts and style tips made picking the right outfits easy, and the quality of the clothes was excellent. The customer support team even suggested coordinating looks for our family reunion photos. Now, our whole family feels confident and stylish. Thank you, StyleNest, for making family shopping fun and stress-free!</p>
    <div className='fmname'>
    <p>-Mamitha Baiju</p>
    </div>
    </div>
    </div>

    <div className="col-lg-8 mt-5" id='stfamcol3'>
    <div id='stfamilypara4' className='p-4'>
    <h6>"TrendHive made family shopping a breeze!"</h6>
    <p>When it was time to update our family wardrobe, we didn’t know where to start. Then we found TrendHive! From cute outfits for the little ones to stylish pieces for us parents, everything we needed was just a click away. The size guides and outfit recommendations were super helpful, making shopping stress-free. The customer support team even helped us pick matching outfits for our weekend outing. Now, our family looks coordinated and feels amazing. Thank you, TrendHive, for turning family shopping into a joyful experience!</p>
    <div className='fmname'>
    <p>-Kapil</p>
    </div>
    </div>
    </div>
    <div className="col-lg-4 mt-5">
    <div className='imgparent'>
    <img src={img5} alt="" />
    </div>
    </div>

    <div className="col-lg-4 mt-5" id='stfamcol1'>
    <div className='imgparent'>
    <img src={img6} alt="" />
    </div>
    </div>
    <div className="col-lg-8 mt-5" id='stfamcol2'>
    <div id='stfamilypara5' className='p-4'>
    <h6>"Elegance Lane Made Shopping for Myself so Easy and Delightful"</h6>
    <p>Finding clothes that are stylish, comfortable, and age-appropriate has always been a challenge. Then I discovered Elegance Lane! From cozy yet elegant tops to beautiful dresses, everything I needed was just a click away. The size guides and style tips made picking the perfect outfit effortless. The customer support team even suggested accessories that complemented my look perfectly. I feel confident, comfortable, and stylish every day. Thank you, Elegance Lane, for making shopping enjoyable at any age!</p>
    <div className='fmname'>
    <p>-Sharmila</p>
    </div>
    </div>
    </div>

    </div>
    
    {/* ONLY VISIBLE FOR SMALL SCREENS */}
    <div className="row d-flex d-lg-none mt-3">
    <div className="col-lg-12 d-flex justify-content-center align-items-center" id='col1sm'>
    <div id='smimg1'>
    <img src={img1} alt="" />
    </div>
    </div>
    <div className="col-lg-12 mt-3" id=''>
    <div id='smpara1'>
    <h6>"Fashion Threads Made Our Family Shopping So Effortless!"</h6>
    <p>When we Decided to Revamp Our Family's Wardrobe, We Weren’t Sure Where to Start. Then we Found Fashionista Threads! From Stylish Outfits for the Kids to Elegant Choices for us Parents, Everything we Needed was just a Click away. The Size Guides and Style Tips were Super Helpful, making outfit selections a breeze. The customer support team even helped us coordinate matching family looks for our weekend photoshoot. Our whole family looks and feels amazing. Thank you, Fashionista Threads, for turning shopping into a joyful family experience!</p>
    <div className='familynamesm'>
    <p>-Arjun & Family</p>
    </div>
    </div>
    </div>
    
    <div className="col-lg-12 d-flex mt-5 justify-content-center align-items-center" id='col1sm'>
    <div id='smimg1'>
    <img src={img2} alt="" />
    </div>
    </div>
    <div className="col-lg-12 mt-3" id=''>
    <div id='smpara1'>
    <h6>"StyleHub Made Upgrading My Wardrobe Effortless!"</h6>
    <p>When I decided it was time to refresh my closet, I wasn’t sure where to start. Then I discovered StyleHub! From sharp casual wear to professional office outfits, everything I needed was just a click away. The size guides and style tips made choosing the right fit simple, and the quality of the clothes exceeded my expectations. The customer support team even helped me pick the perfect jacket for an upcoming event. I’ve never felt more confident and stylish. Thanks, StyleHub, for making men’s shopping so easy and satisfying</p>
    <div className='familynamesm'>
    <p>-Leodass</p>
    </div>
    </div>
    </div>
    <div className="col-lg-12 d-flex mt-5 justify-content-center align-items-center" id='col1sm'>
    <div id='smimg1'>
    <img src={img4} alt="" />
    </div>
    </div>
    <div className="col-lg-12 mt-3" id=''>
    <div id='smpara1'>
    <h6>"StyleNest Made Dressing the Whole Family so Simple!"</h6>
    <p>When we wanted to refresh our family’s wardrobe, we weren’t sure where to begin. Then we discovered StyleNest! From playful outfits for the kids to chic and comfortable options for us adults, everything we needed was just a click away. The helpful size charts and style tips made picking the right outfits easy, and the quality of the clothes was excellent. The customer support team even suggested coordinating looks for our family reunion photos. Now, our whole family feels confident and stylish. Thank you, StyleNest, for making family shopping fun and stress-free!</p>
    <div className='familynamesm'>
    <p>-Mamitha Baiju</p>
    </div>
    </div>
    </div>
    <div className="col-lg-12 d-flex mt-5 justify-content-center align-items-center" id='col1sm'>
    <div id='smimg1'>
    <img src={img5} alt="" />
    </div>
    </div>
    <div className="col-lg-12 mt-3" id=''>
    <div id='smpara1'>
    <h6>"TrendHive Made Family Shopping a Breeze!"</h6>
    <p>When it was time to update our family wardrobe, we didn’t know where to start. Then we found TrendHive! From cute outfits for the little ones to stylish pieces for us parents, everything we needed was just a click away. The size guides and outfit recommendations were super helpful, making shopping stress-free. The customer support team even helped us pick matching outfits for our weekend outing. Now, our family looks coordinated and feels amazing. Thank you, TrendHive, for turning family shopping into a joyful experience!</p>
    <div className='familynamesm'>
    <p>-Kapil</p>
    </div>
    </div>
    </div>
     <div className="col-lg-12 d-flex mt-5 justify-content-center align-items-center" id='col1sm'>
    <div id='smimg1'>
    <img src={img6} alt="" />
    </div>
    </div>
    <div className="col-lg-12 mt-3" id=''>
    <div id='smpara1'>
    <h6>"Elegance Lane Made Shopping for Myself so Easy and Delightful!"</h6>
    <p>Finding clothes that are stylish, comfortable, and age-appropriate has always been a challenge. Then I discovered Elegance Lane! From cozy yet elegant tops to beautiful dresses, everything I needed was just a click away. The size guides and style tips made picking the perfect outfit effortless. The customer support team even suggested accessories that complemented my look perfectly. I feel confident, comfortable, and stylish every day. Thank you, Elegance Lane, for making shopping enjoyable at any age!</p>
    <div className='familynamesm'>
    <p>-Sharmila</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Stfamily