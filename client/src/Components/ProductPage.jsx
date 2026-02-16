import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { My_Context } from '../Context/Context'

function ProductPage() {
  let {AddToCart}=useContext(My_Context)
  let {id}=useParams()
  let  {allProduct}=useContext(My_Context)
  let Findpdct=allProduct.find((x,y)=>{
    return x._id===id
  })
   if (!Findpdct) {
    return (
      <div className="container text-center py-5">
        <h4>Loading product...</h4>
      </div>
    )
  }
  return (
    <>
    <section className='container-fluid' id='dynamicpagecf'>
    <div className="container">
    <div className="row p-3" id='rowdynamic'>
    <div className="col-lg-6 col-12" id='pdctpageimgparent'>
    <img src={Findpdct.ProductImg} alt="" />
    </div>
    <div className="col-lg-6 mt-5 col-12" id='dynamicpagecontent'>
    <h1 className='text-center' id='smallscheading'>{Findpdct.ProductName}</h1>
    <p>{ Findpdct.ProductDes}</p>
    <div className='' id='pricecategory'>
    <h6>Price: <span className='pricedynamic'>{Findpdct.ProductPrice}</span></h6>
    {/* <p>{Findpdct.ProductCategory}</p> */}
   <button id='buynowdynamicbtn' onClick={()=>AddToCart(id)}>Buy Now</button>
   
    </div>
   
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default ProductPage