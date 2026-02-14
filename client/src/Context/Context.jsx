import React, { createContext, useEffect, useState } from 'react'
import Axios from 'axios'
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import AddtocartAudio from '../assets/Images/Addtocartt.m4a'

export let My_Context=createContext()
function Context({children}) {
  let [username,setusername]=useState("")
  let [password,setpassword]=useState("")
  let [email,setemail]=useState("")
  let [address,setaddress]=useState("")
  let [phno,setphno]=useState("")
  let [gender,setgender]=useState("")

  //SIGNUP
  let [toogleEye,settoogleEye]=useState(false)
  let [signinerrormes,setsigninerrormes]=useState("")
  
  let navigate=useNavigate()

  //SENDING USER DETAILS SIGNIN
  async function UserDetailsSignUp(e) {
    e.preventDefault()
    try{
      let Res=await Axios.post('http://localhost:8000/users/add',{
        username,password,email,address,phno,gender
      })
     
      toast.success(Res.data.message)
      setusername("")
      setpassword("")
      setemail("")
      setaddress("")
      setphno("")
      setgender("")
      navigate('/')
    }
    catch(err){
      setsigninerrormes(err.response?.data?.message||err.message)
    }
  }

  //LOGIN
  let [logintoggle,setlogintoggle]=useState(false)
  let [lname,setlname]=useState("")
  let [lpass,setlpass]=useState("")
  let [loginerror,setloginerror]=useState("")
  
 
  let [UserName,setUserName]=useState("")
  async function LoginFun(e) {
    e.preventDefault()
    try{
      let Res=await Axios.post('http://localhost:8000/login/users/add',{
        lname,lpass
      })
      localStorage.setItem("Token",Res.data.token)
      localStorage.setItem("UserName",Res.data.UserName)
      navigate('/Home')
      toast.success(Res.data.message)
      
    }
    catch(err){
      setloginerror(err.response?.data?.message||err.message)
    }
  }

  useEffect(()=>{
    let userNameLocal=localStorage.getItem("UserName")

    if(userNameLocal){
      setUserName(userNameLocal)
    }

  },[])

  //GETTING PRODUCT
  
  let [allProduct,setallProduct]=useState([])


  async function Allproducts() {
   try{
     let Res=await Axios.get('http://localhost:8000/product/get')
     setallProduct(Res.data.data)
   }
   catch(err){
    console.log(err.response?.data?.message||err.message);
   }
  }
  //MENS
  let Mens=allProduct.filter((x,y)=>{
    return x.ProductCategory==="MENS"
  })

  //WOMENS
  let Womens=allProduct.filter((x,y)=>{
    return x.ProductCategory==="WOMENS"
  })

  //KIDS
  let Kids=allProduct.filter((x,y)=>{
    return x.ProductCategory==="KIDS"
  })

  //BAGS
  let Bags=allProduct.filter((x,y)=>{
    return x.ProductCategory==="BAGS"
  })

  //SHOES
  let Shoes=allProduct.filter((x,y)=>{
    return x.ProductCategory==="SHOES"
  })


  useEffect(()=>{
    Allproducts()
  },[])

  //LOGOUT

  function LogOut(){
    localStorage.removeItem("Token")
    localStorage.removeItem("UserName")
    navigate('/')
  }

  //SEARCH PRODUCTS
  let [SearchPdct,setSearchPdct]=useState("")
  let SearchLower=SearchPdct.toLowerCase()

  let Searchpdctinput=allProduct.filter((x,y)=>{
    return x.ProductName.toLowerCase().includes(SearchLower) || x.ProductCategory.toLowerCase().includes(SearchLower)
  })
 
  let Token=localStorage.getItem("Token")
  console.log(Token);
  
  async function AddToCart(productId) {
    try{
      let Res=await Axios.post('http://localhost:8000/cart/add',{productId},
        {
        headers: {
          authorization: `Bearer ${Token}`
        }
      }
      )
      let audio=new Audio(AddtocartAudio)
      audio.preload="auto"
      audio.play()
      
      // alert(Res.data.message)
      toast.success(Res.data.message)
      GetAddedPdct()
    }
    catch(err){
      console.log(err.response?.data?.message||err.message);
      
    }
  }

  //GET ADDED ITEMS
  let [addedcart,setaddedcart]=useState([])
  
  // function AddToCart(id) {

  // let product = allProduct.find((x) => x._id === id)

  // if (!product) return

  // let already = addedcart.find((y) => y._id === id)

  // if (already) {

  //   let updated = addedcart.map((x) => {
  //     if (x._id === id) {
  //       return { ...x, Quantity: x.Quantity + 1 }
  //     } else {
  //       return x
  //     }
  //   })

  //   setaddedcart(updated)
    
  // } else {

  //   setaddedcart([
  //     ...addedcart,
  //     { ...product, Quantity: 1 }
  //   ])

  // }
  //  }


  async function GetAddedPdct() {
    try{
      let Res=await Axios.get('http://localhost:8000/cart/get',{
        headers:{
          authorization:`Bearer ${Token}`
        }
      })
      setaddedcart(Res.data.data.Products)

    }
    catch(err){
      console.log(err.response?.data?.message||err.message);
    }
  }
  useEffect(()=>{
    GetAddedPdct()
  },[])

  //REMOVE CART
  async function RemoveFromCart(productId) {
  try {
    let Res = await Axios.delete(
      `http://localhost:8000/cart/remove/${productId}`,
      {
        headers: {
          authorization: `Bearer ${Token}`
        }
      }
    )

    toast.success(Res.data.message)
    GetAddedPdct()

  } catch (err) {
    console.log(err.response?.data?.message || err.message)
  }
}

  let totalPrice = addedcart.reduce((total, item) => {
  return total + (item.ProductId.ProductPrice * item.Quantity)
}, 0) 
  
  return (
   <>
   <My_Context.Provider value={{username,setusername,password,setpassword,email,setemail,address,setaddress,phno,setphno,gender,setgender,toogleEye,settoogleEye,signinerrormes,UserDetailsSignUp,logintoggle,setlogintoggle,loginerror,setloginerror,LoginFun,lname,setlname,lpass,setlpass,Mens,Kids,Womens,Shoes,Bags,allProduct,LogOut,setSearchPdct,Searchpdctinput,SearchPdct,AddToCart,addedcart,RemoveFromCart,totalPrice,UserName}}>
    {children}
    </My_Context.Provider>
   </>
  )
}

export default Context