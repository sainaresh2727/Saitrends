import React, { useContext } from 'react'
import { My_Context } from '../Context/Context'
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import SignupImage from '../assets/Images/Signupimage.jpg'
import Brand from '../assets/Images/Brand2.png'
import {Link} from 'react-router-dom'

function Signup() {
  let {username,setusername,password,setpassword,email,setemail,address,setaddress,phno,setphno,gender,setgender,toogleEye,settoogleEye,signinerrormes,UserDetailsSignUp}=useContext(My_Context)
  return (
    <>
    <section className='container-fluid py-5' id='SignupCf'>
    <div className="container">
    <div className="row" id='signuprow'>
    <div className="col-lg-6 d-none d-lg-block" id='imgcolsignup'>
    <img src={SignupImage} alt="" />
    </div>
    <div className="col-lg-5 px-lg-3 px-4 col-12" id='registercol'>
   
   <div className='text-center mb-0 d-flex align-items-center justify-content-center'>
    <img src={Brand} alt=""  style={{height:"80px"}}/>
   </div>

   <div className='register text-center'>
   <h4>Welcome To Sai Trends</h4>
   <h6 className='mb-1'>Sign in Here</h6>
   </div> 
   <form id='signupform' className='mt-2' onSubmit={(e)=>UserDetailsSignUp(e)}>
    
    <div>
    <label>Enter Your Name</label>
    <input type="text" className='form-control input' placeholder='Name'  value={username} onChange={(e)=>setusername(e.target.value)} required/>
    </div> 
    <div>
    <label htmlFor="">Enter Your Password</label>
    <div className='input-group mt-2'>
    <input type={
      toogleEye?
      "text"
      :"password"
    } className='form-control' placeholder='Password' id='passwordinputsignin' onChange={(e)=>setpassword(e.target.value)} value={password} />
     <span className='input-group-text' id='eyepassword'>
     {
      toogleEye
      ?
      <FaEyeSlash  onClick={()=>settoogleEye(false)} />
      :
      <IoMdEye onClick={()=>settoogleEye(true)}  />
     }
     </span>
     </div>
     </div>
    
   
    <div>
    <div className=''>
    <label>Enter Your Email</label>
    <input type="email" className='form-control input' placeholder='Email'  value={email} onChange={(e)=>setemail(e.target.value)} required/>
    </div>
    </div>
  
    <div className=''>
    <label>Enter Your Address</label>
    <textarea className='form-control input' placeholder='Address' rows={5} value={address} onChange={(e)=>setaddress(e.target.value)} required></textarea>
    </div>  
    

    <div>
    <label htmlFor="">Enter Your Phoneno:</label>
    <input type="number" placeholder='Number' className='form-control input' value={phno} onChange={(e)=>setphno(e.target.value)} required />
    </div>

    <div>
    <label htmlFor="">Select Gender</label>
    <select className='form-control input' value={gender} onChange={(e)=>setgender(e.target.value)} required>
    <option hidden>Select Gender</option>
    <option value="MALE">MALE</option>
    <option value="FEMALE">FEMALE</option>
    </select>
    </div>

    {
      signinerrormes && (
    <div className='mb-0'>
    <p style={{color:"red"}}>{signinerrormes}</p>
    </div>
      )
    }
    

    <div className='mx-auto mb-0'>
    <input type="submit" id='signupsubmit' value={"Register"} />
    </div>

    <div className='text-center' id='alreadyhavenaccount'>
    <p>Already have an account? <Link to={'/'}className='alreadylogin'>Login</Link></p>
    </div>

    </form>

    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Signup