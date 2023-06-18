import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Providers/AuthProvider';

const MySelectedClass = () => {
    const [myClasses, setMyClasses] = useState([])
    console.log(myClasses)
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        fetch(`http://localhost:5000/myclasses/${user.email}`)
        .then(res=> res.json())
        .then(data=> setMyClasses(data))
    },[])



    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          fetch(`https://weight-loss-server.vercel.app/selected-class/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                Swal.fire("Deleted!", "Your toy has been deleted.", "success");
                const remaining = myClasses.filter(myCl => myCl._id !== id)
                setMyClasses(remaining)
              }
            });
        }
      });
    };

    return (
       <div>
            <Helmet>
                <title>My Selected Class - Weight Loss Academy</title>
            </Helmet>
         <div className='mt-20 mb-10'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                {
                    myClasses.map(myClass=>  <div key={myClass._id} className="card w-80 bg-gray-200 rounded-none shadow-lg">
                    <figure>
                      <img
                        src={myClass.image}
                        alt="classImage"
                        className="p-2"
                      />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{myClass.className}</h2>
                      <p>{myClass.instructorName}</p>
                      <p>Available: {myClass.availableSeat}</p>
                      <p>Price: ${myClass.price}</p>
                      <div className="card-actions">
                       <Link state={myClass} to="/dashboard/enroll"><button className="btn btn-primary btn-xs">Enrol Now</button></Link>
                        <button onClick={()=> handleDelete(myClass._id)} className="btn btn-primary btn-xs">Delete</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
       </div>
    );
};

export default MySelectedClass;