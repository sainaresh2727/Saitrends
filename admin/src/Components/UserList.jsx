import React from 'react'
import { useContext } from 'react'
import { My_Context } from '../Context/Context'

function UserList() {
  let {users}=useContext(My_Context)
  return (
   <>
   <section className='container-fluid mt-5'>
   <div className="container">
   <div id='totaluserslength'>
   <h5>Total Users: <span>{users.length}</span></h5>
   </div>
   <div className="table-responsive">
   <table className='table align-middle mt-1' id='userstable' >
   <thead>
   <th>USERNAME</th>
   {/* <th>PASSWORD</th> */}
   <th>EMAIL</th>
   <th>ADDRESS</th>
   <th>PHNO</th>
   <th>GENDER</th>
   </thead>
   <tbody>
   {
    users.map((x,y)=>{
        return(
            <tr key={x._id}>
            <td>{x.username}</td>
            {/* <td>{x.password}</td> */}
            <td>{x.email}</td>
            <td>{x.address}</td>
            <td>{x.phno}</td>
            <td>{x.gender}</td>
            </tr>
        )
    })
   }
   </tbody>
   </table>
    </div>
   </div>
   </section>
   </>
  )
}

export default UserList