import React from 'react'
import { useContext } from 'react'
import { My_Context } from '../Context/Context'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function ProductList() {
  let {ProdutArray,Findupdatid,updatepdctname,setupdatepdctname,updatepdctprice,setupdatepdctprice,updatepdctdes,setupdatepdctdes,updatepdctcategory,setupdatepdctcategory,updatepdctimg,setupdatepdctimg,ImageCovertUpdate,UpdatePdctFun,DeleteProductFun,SearchArray,searchpdct,Men,Kids,Shoes,Womens,Bags}=useContext(My_Context)
  return (
   <>
    
  
    <section className='container-fluid py-5'>
    <div className="container">
    {/* <div className='text-center sectionname'>
    <h2>Mens and Kids List</h2>
    </div> */}
    <div className='totalcount'>
    <h5>Mens: <span className='lengthcolor'>{Men.length}</span></h5>
    <h5>Kids: <span className='lengthcolor'>{Kids.length}</span></h5>
    <h5>Shoes: <span className='lengthcolor'>{Shoes.length}</span></h5>
    <h5>Womens: <span className='lengthcolor'>{Womens.length}</span> </h5>
    <h5>Bags: <span className='lengthcolor'>{Bags.length}</span> </h5>
    <h5>Total Products: <span className='lengthcolor'>{ProdutArray.length}</span> </h5>
    </div>
    <div className='table-responsive'>
    <table className='table align-middle' id='pdctstable'>
    <thead>
    <tr>
    <th>Image</th>
    <th>Name</th>
    <th>Price</th>
    <th className='text-center'>Description</th>
    <th>Category</th>
    <th>Update</th>
    <th>Delete</th>
    </tr>
    </thead>
    <tbody>
    {
      searchpdct.length===0
        ?
      ProdutArray.map((x,y)=>{
            return(
            <tr key={x._id}>
            <td>
            <img src={x.ProductImg} id='imgpdctlist' />
            </td>
            <td>{x.ProductName}</td>
            <td className=''><p className='Price'>{x.ProductPrice}</p></td>
            <td>{x.ProductDes?.length > 300 
        ? x.ProductDes.slice(0, 45) + '...'
        : x.ProductDes}</td>
            <td><p className='Category'>{x.ProductCategory}</p></td>
            <td><button id='pdcteditbtn' onClick={()=>Findupdatid(x._id)}data-bs-toggle='modal' data-bs-target='#productupdatemodal'>Edit <FaRegEdit className='updateicon' /></button></td>
            <td><button id='pdctdeletetbtn' onClick={()=>DeleteProductFun(x._id)}>Delete <MdDeleteOutline /></button></td>
            </tr>
            )
        })
        :
      SearchArray.map((x,y)=>{
            return(
            <tr key={x._id}>
            <td>
            <img src={x.ProductImg} id='imgpdctlist' />
            </td>
            <td>{x.ProductName}</td>
            <td className=''><p className='Price'>{x.ProductPrice}</p></td>
            <td>{x.ProductDes?.length > 300 
        ? x.ProductDes.slice(0, 45) + '...'
        : x.ProductDes}</td>
            <td><p className='Category'>{x.ProductCategory}</p></td>
            <td><button id='pdcteditbtn' onClick={()=>Findupdatid(x._id)}data-bs-toggle='modal' data-bs-target='#productupdatemodal'>Edit <FaRegEdit /></button></td>
            <td><button id='pdctdeletetbtn' onClick={()=>DeleteProductFun(x._id)}>Delete <MdDeleteOutline /></button></td>
            </tr>
            )
        })
    }
    </tbody>
    </table>
    </div>
    </div>
   </section>

   {/* MODAL FOR UPDATE */}
   <div className="modal h-100" id='productupdatemodal'>
   <div className="modal-dialog">
   <div className="modal-content">
   <div className="modal-header">
   <h5  className="modal-title updatehere">Update Here</h5>
  <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
  </div>
  <div className="modal-body">
  
  <form id='updatepdctform' onSubmit={(e)=>UpdatePdctFun(e)}>
  
  <div className='d-flex flex-column gap-2'>
  <label>Choose Image</label>
  <input type="file" hidden id='updateimg' onChange={(e)=>ImageCovertUpdate(e)}/>
  <label htmlFor="updateimg">
  <img src={updatepdctimg} alt="" style={{height:"80px",borderRadius:"20px"}} />
  </label>
  </div>

  <div className='samedivpdctupdate'>
  <div>
  <label>Product Name</label>
  <input type="text" className='form-control pdctupdateinput' placeholder='Name'  onChange={(e)=>setupdatepdctname(e.target.value)} value={updatepdctname}/>
  </div>

  <div>
  <label>Product Price</label>
  <input type="number" className='form-control pdctupdateinput' placeholder='Price' onChange={(e)=>setupdatepdctprice(e.target.value)} value={updatepdctprice} />
  </div>
  </div>
  

  <div>
  
  </div>
  

  <div>
  <label>Product Description</label>
  <textarea className='form-control pdctupdateinput' placeholder='Description'rows={4} cols={5} onChange={(e)=>setupdatepdctdes(e.target.value)} value={updatepdctdes}></textarea>
  </div>

  <div>
  <label>Choose Category</label>
  <select className='form-control pdctupdateinput' value={updatepdctcategory} onChange={(e)=>setupdatepdctcategory(e.target.value)}>
  {/* <option hidden>CHOOSE CATEGORY</option> */}
  <option value="MENS">MENS</option>
  <option value="WOMENS">WOMENS</option>
  <option value="KIDS">KIDS</option>
  <option value="BAGS">BAGS</option>
  <option value="SHOES">SHOES</option>
  </select>
  </div>

  <div id='savepdct'>
   <input type="submit" value={"Save"}  className=''/>
  </div>

  </form>

  </div>
  <div className="modal-footer">
 
  </div>
  </div>
  </div>
  </div>
   </>
  )
}

export default ProductList