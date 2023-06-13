import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MySelectedClass = () => {
    const [myClasses, setMyClasses] = useState([])
    console.log(myClasses)

    useEffect(()=>{
        fetch('http://localhost:5000/myclasses')
        .then(res=> res.json())
        .then(data=> setMyClasses(data))
    },[])
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
                        <button className="btn btn-primary btn-xs">Delete</button>
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