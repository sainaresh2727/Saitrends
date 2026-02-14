import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";
import { FaEyeSlash } from "react-icons/fa";
import { My_Context } from '../Context/Context';
import Brandimg from '../assets/Images/Brand2.png' 
import { RiLockPasswordLine } from "react-icons/ri";

function Login() {
  let {logintoggle,setlogintoggle,loginerror,LoginFun,lname,setlname,lpass,setlpass}=useContext(My_Context)
  return (
    <>
    <section className='container-fluid' id='loginCf'>
    <div className="container">
    <div className="row">
   <div className="col-lg-4 mx-auto d-flex justify-content-center">
    
    <div className="card" id='logincard'>
    <form className="card-body" id='logincardbody' onSubmit={(e)=>LoginFun(e)}>

    <div id='usericon'>
    {/* <FaRegUser  id='usericonn'/> */}
    <img src={Brandimg} style={{height:"90px"}}/>
    </div>

    
    
    <div className='mt-5'>
    <label><FaRegUser  id='usericonn'/> Enter Your Username</label>
    <input type="text" className='form-control mt-1 inputlogin' placeholder='Username' onChange={(e)=>setlname(e.target.value)}  value={lname}/>
    </div>

    <div>
    <label><RiLockPasswordLine id='passwordicon' /> Enter Your Password</label>
    <div className='input-group mt-1'>
    <input type={
      logintoggle
      ?
      "text"
      :
      "password"
    } className='form-control inputlogin' placeholder='Password' id='passinput' onChange={(e)=>setlpass(e.target.value)} value={lpass} />
    <span className='input-group-text' id='loginigt'> 
      {
        logintoggle
        ?
        <FaEyeSlash  onClick={()=>setlogintoggle(false)} className='eyepassword'/>
        :
        <IoMdEye onClick={()=>setlogintoggle(true)} className='eyepassword' />
      }
    </span>
    </div>
    </div>

  {
    loginerror && (
    <div id='errormessage' className='text-center' >
    <p style={{color:"red",fontWeight:"bold"}}>{loginerror}</p>
    </div>
  )
}
   <div id='loginbtn' className='text-center'>
    <input type="submit" className='' value={"LOGIN"} />
    </div>

   <div className='text-center' id='donthavelogin'>
    <p>Don't have an account? <Link to={'/Signup'}  className='signin'>SignIn</Link></p>
    </div>

    </form>
    </div>
    </div>
    </div>
    </div>
    </section>
    </>
  )
}

export default Login