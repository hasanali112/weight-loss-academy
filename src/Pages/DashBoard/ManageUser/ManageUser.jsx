import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const ManageUser = () => {
    const[axiosSecure]=useAxiosSecure()
    const {data: users= [], refetch} = useQuery(['users'], async()=>{
      const res = await axiosSecure.get('/users')
      return res.data;
    })

   const [disabled, setDisabled] = useState(false)
   const [instrutorDisabled, setInstrutorDisabled] = useState(false)

    

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        handleClick(user._id);
    }


    const handleMakeInstrutor = user =>{
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Instructor Now!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
                  handleInstructor()  
            }
          
        })
    }

    const handleClick = (id) => {
        // setDisabled(true);
        if(id){
          setDisabled(true)
          console.log(id) 
        }
       };

    const handleInstructor = () => {
        setInstrutorDisabled(true);
        console.log('button clicked');
       };
  

    return (
        <div>
            <h1>Manage user: {users.length}</h1>

            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user, index)=>
            <tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.role === 'admin' ? 'Admin' : user.role === 'instructor' ? 'Instructor' : 'Student'}</td>
        <td><button disabled={disabled}  onClick={() =>handleMakeAdmin(user) } className="btn btn-primary btn-sm">Admin</button> <button disabled={instrutorDisabled} onClick={() => handleMakeInstrutor(user)} className="btn btn-neutral btn-sm">Instrutor</button></td>
      
      </tr>
        )
      }
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageUser;