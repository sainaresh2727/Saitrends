import React from 'react'
import { Navigate } from 'react-router-dom'


function Protect({children}) {
  let getToken=localStorage.getItem("Token")
  if(!getToken){
    return <Navigate to={'/'} replace />
  }
  else{
    return children
  }
  return (
   <>
   
   </>
  )
}

export default Protect