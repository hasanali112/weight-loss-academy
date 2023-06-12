import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
    const [allClass, setAllClass]= useState([])
    console.log(allClass)

    useEffect(()=>{
        fetch('http://localhost:5000/allclasses')
        .then(res=> res.json())
        .then(data=> setAllClass(data))
    },[])


  return (
    <div>
            <Helmet>
                <title>My Class - Weight Loss Academy</title>
            </Helmet>
      <div className="grid grid-cols-2 gap-12 mt-10 mb-10">
        {
            allClass.map(cl=> <div key={cl._id} className="card w-96 bg-gray-200 shadow-xl">
            <figure>
              <img
                src={cl.photoUrl}
                alt="weight loss"
                className="p-3"
              />
            </figure>
            <div className="ml-5">
              <h2 className="text-2xl font-bold">{cl.className}</h2>
              <p className="text-xl font-semibold">{cl.instructorName}</p>
              <p className="text-base font-semibold text-gray-500 mt-2">{cl.email}</p>
               <div className="flex space-x-3">
               <p className="text-base font-semibold text-gray-500">Price: ${cl.price}</p>
               <p className="text-base font-semibold text-gray-500">Available seat: {cl.availableSeat}</p>
               </div>
              <p className="text-base font-semibold text-gray-500">Status: {cl.status}</p>
              <div className="card-actions">
                <button className="btn btn-primary mb-8 mt-2">Update</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyClass;
