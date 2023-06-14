import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageClass = () => {
    const [manageClass, setManageClass]= useState([])

    useEffect(()=>{
        fetch('https://weight-loss-server.vercel.app/allclasses')
        .then(res=> res.json())
        .then(data=> setManageClass(data))
    },[manageClass])

   //status change
   const handlApproved = id =>{
    fetch(`https://weight-loss-server.vercel.app/class/approve/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Status updated',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    })
   }
   const handlDenied = id =>{
    fetch(`https://weight-loss-server.vercel.app/class/deny/${id}`, {
        method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title:'Status updated',
                showConfirmButton: false,
                timer: 1500
              })
        }
      
    })
   }







    return (
        <div>
           <Helmet>
                <title>Manage Class - Weight Loss Academy</title>
            </Helmet>
            <div className="grid grid-cols-2 gap-12 mt-10">
        {
            manageClass.map(clManage=> <div key={clManage._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={clManage.photoUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{clManage.className}</h2>
              <p>{clManage.instructorName}</p>
              <p>{clManage.email}</p>
              <p>Price: ${clManage.price}</p>
              <p>Available seat: {clManage.availableSeat}</p>
              <p>Status: {clManage.status === 'approve' ? 'Approved' : clManage.status === 'deny' ? 'Denied' : 'Pending'}</p>
              <div className="card-actions">
                <button disabled={clManage.status === 'approve' && 'deny'} onClick={()=> handlApproved(clManage._id)} className="btn btn-primary"> Approve</button>
                <button disabled={clManage.status === 'approve' && 'deny'} onClick={()=>  handlDenied (clManage._id)} className="btn btn-primary">Deny</button>
                <Link to='/dashboard/feedback'>  <button className="btn btn-primary">send feedback</button></Link>
              </div>
            </div>
          </div>)
        }
      </div>
        </div>
    );
};

export default ManageClass;