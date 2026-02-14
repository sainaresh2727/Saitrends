import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import imageCompression from 'browser-image-compression'
import Axios from 'axios'

import uploadimg from '../assets/Images/Uploadimg.png'
import { useEffect } from 'react'
import ProductAdded from '../assets/Images/ProductAdded.m4a'

export let My_Context=createContext()
function Context({children}) {
  
  // ADD PRODUCTS
  let [ProductName,setProductName]=useState("")
  let [ProductDes,setProductDes]=useState("")
  let [ProductPrice,setProductPrice]=useState("")
  let [ProductImg,setProductImg]=useState("")
  let [ProductCategory,setProductCategory]=useState("")

     //BASE 64 METHOD FOR IMAGE
    async function ImageCovert(e) {
        let File=e.target.files[0]
        if(File){
    try{
    let Compression={
      maxSizeMB:0.5,
      maxWidthOrHeight:800
    }
    let CompressionFile= await imageCompression(File,Compression)
    let Reader=new FileReader()
    Reader.onload=()=>{
      setProductImg(Reader.result)
    }
    Reader.readAsDataURL(CompressionFile)
  }
  catch(err){
    console.error("Image compression failed:", err);
  }
  }
  }

  async function ProductDatas(e) {
    e.preventDefault()
    try{
        let pdctDatas=await Axios.post('http://localhost:8000/product/add',{
         ProductName, ProductDes, ProductPrice,ProductImg,ProductCategory
        })
        let audio=new Audio(ProductAdded)
        audio.preload="auto"
        audio.play()
        alert(pdctDatas.data.message)
        setProductName("")
        setProductPrice("")
        setProductDes("")
        setProductImg(uploadimg)
        setProductCategory("")
        GettingPdcts()
       
    }
    catch(err){
        console.log(err.response?.data?.message||err.message);
        
    }
  }
  let [ProdutArray,setProdutArray]=useState([])
 
  //GETTING PRODUCTS
  async function GettingPdcts() {
    try{
        let Res=await Axios.get('http://localhost:8000/product/get')
        setProdutArray(Res.data.data)
    }
    catch(err){
        console.log(err.response?.data?.message||err.message);
        }   
  }
  useEffect(()=>{
    GettingPdcts()
  },[])

  //UPDATE
  let [updatepdctimg,setupdatepdctimg]=useState("")
  let [updatepdctname,setupdatepdctname]=useState("")
  let [updatepdctprice,setupdatepdctprice]=useState("")
  let [updatepdctdes,setupdatepdctdes]=useState("")
  let [updatepdctcategory,setupdatepdctcategory]=useState("")
  let [updatepdctid,setupdatepdctid]=useState("")

  function Findupdatid(id){
    let Findid=ProdutArray.find((x,y)=>{
      return x._id===id
    })
    if(Findid){
      setupdatepdctname(Findid.ProductName)
      setupdatepdctprice(Findid.ProductPrice)
      setupdatepdctdes(Findid.ProductDes)
      setupdatepdctcategory(Findid.ProductCategory)
      setupdatepdctimg(Findid.ProductImg)
      setupdatepdctid(id)
    }
  }

   async function ImageCovertUpdate(e) {
      let File=e.target.files[0]
        if(File){
    try{
    let Compression={
      maxSizeMB:0.5,
      maxWidthOrHeight:800
    }
    let CompressionFile= await imageCompression(File,Compression)
    let Reader=new FileReader()
    Reader.onload=()=>{
      setupdatepdctimg(Reader.result)
    }
    Reader.readAsDataURL(CompressionFile)
  }
  catch(err){
    console.error("Image compression failed:", err);
  }
  }
  }

  async function UpdatePdctFun(e) {
    e.preventDefault()
    try{
      let Res=await Axios.put(`http://localhost:8000/product/update/${updatepdctid}`,{
        ProductName:updatepdctname,
        ProductDes:updatepdctdes,
        ProductPrice:updatepdctprice,
        ProductImg:updatepdctimg,
        ProductCategory:updatepdctcategory
      })
      alert(Res.data.message)
      GettingPdcts()
    }
    catch(err){
      console.log(err.response?.data?.message||err.message);
      
    }
  }

  // PRODUCT DELETE
  async function DeleteProductFun(id) {

    let Confirm=window.confirm("Are You Surely Want to Delete ?")
    if(!Confirm) return
    try{
      let Res=await Axios.delete(`http://localhost:8000/product/delete/${id}`)
      alert(Res.data.message)
      GettingPdcts()
    }
     catch(err){
      console.log(err.response?.data?.message||err.message);
      
    }
  }

  let [searchpdct,setsearchpdct]=useState("")
  let spdctlowercase=searchpdct.toLowerCase()

  let SearchArray=ProdutArray.filter((x,y)=>{
    return x.ProductName.toLowerCase().includes(spdctlowercase)||x.ProductCategory.toLowerCase().includes(spdctlowercase)
  })

  //MENS 
  let Men=ProdutArray.filter((x,y)=>{
    return x.ProductCategory==="MENS"
  })

  //KIDS
  let Kids=ProdutArray.filter((x,y)=>{
    return x.ProductCategory==="KIDS"
  })

  //SHOES
  let Shoes=ProdutArray.filter((x,y)=>{
    return x.ProductCategory==="SHOES"
  })

  //WOMENS
  let Womens=ProdutArray.filter((x,y)=>{
    return x.ProductCategory==="WOMENS"
  })

  //BAGS
  let Bags=ProdutArray.filter((x,y)=>{
    return x.ProductCategory==="BAGS"
  })

  //GETTING USERS
  let [users,setUsers]=useState([])
  async function FetchUsers() {
    try{
      let Res=await Axios.get('http://localhost:8000/users/get')
      setUsers(Res.data.data)
    }
    catch(err){
      console.log(err.response?.data?.message||err.message);
      
    }
  }

  useEffect(()=>{
    FetchUsers()
  },[])

  return (
   <>
   <My_Context.Provider value={{ProductName,setProductName,ProductDes,setProductDes,ProductPrice,setProductPrice,ProductImg,setProductImg,ProductCategory,setProductCategory,ImageCovert,ProductDatas,ProdutArray,Findupdatid,updatepdctname,setupdatepdctname,updatepdctprice,setupdatepdctprice,updatepdctdes,setupdatepdctdes,updatepdctcategory,setupdatepdctcategory,updatepdctimg,setupdatepdctimg,ImageCovertUpdate,UpdatePdctFun,DeleteProductFun,setsearchpdct,SearchArray,searchpdct,Men,Kids,Shoes,Womens,Bags,users}}>
    {children}
   </My_Context.Provider>
   </>
  )
}

export default Context