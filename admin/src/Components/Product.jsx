import React from 'react'
import UploadImg from '../assets/Images/Uploadimg.png'
import { useContext } from 'react'
import { My_Context } from '../Context/Context'
import AdminImg from '../assets/Images/Adminimage.png'

function Product() {
  let {ProductName,setProductName,ProductDes,setProductDes,ProductPrice,setProductPrice,ProductImg,setProductImg,ProductCategory,setProductCategory,ImageCovert,ProductDatas}=useContext(My_Context)
  return (
    <>
    <section className='container-fluid py-5' id='productaddcf'>
    <div className="container">
    {/* <div className='text-center sectionname'>
    <h2>Mens and Kids</h2>
    </div> */}
    <div className="row">
    <div className="col-lg-6" id='adminimgcol'>
    <img src={AdminImg} alt="productcardadd" />
    </div>
    <div className="col-lg-6" id='productcolumn'>
    <div className="card" id='productcardadd'>
    <div className="card-body">
    <form onSubmit={(e)=>ProductDatas(e)} id='productform'>
    <div className='d-flex flex-column gap-2'>
    <label htmlFor="">Choose Product Image</label>
    <input type="file" hidden id='uploadimg' onChange={(e)=>ImageCovert(e)}/>
    <label htmlFor="uploadimg">
    <img src={
        ProductImg.length===0
        ?
        UploadImg
        :
        ProductImg
    }  style={{height:"65px"}}/>
    </label>
    </div>
    <div>
    <label>Product Name</label>
    <input type="text" className='form-control inputarea' placeholder='Name'  onChange={(e)=>setProductName(e.target.value)} value={ProductName}/>
    </div>
    <div>
    <label>Product Price</label>
    <input type="number" className='form-control inputarea' onChange={(e)=>setProductPrice(e.target.value)}  value={ProductPrice} placeholder='Price'/>
    </div>
    <div>
    <label>Product Description</label>
    <textarea rows={5} cols={4} className='form-control inputarea' onChange={(e)=>setProductDes(e.target.value)} value={ProductDes} placeholder='Description'></textarea>
    </div>
    <div>
    <label>Enter Product Category</label>
    <select className='form-control inputarea' onChange={(e)=>setProductCategory(e.target.value)}>
    <option hidden value="">SELECT CATEGORY</option>
    <option value="MENS">MENS</option>
    <option value="WOMENS">WOMENS</option>
    <option value="KIDS">KIDS</option>
    <option value="SHOES">SHOES</option>
    <option value="BAGS">BAGS</option>
    </select>
    </div>
    <div id='sumbit'>
    <input type="submit"/>
    </div>
    </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Product