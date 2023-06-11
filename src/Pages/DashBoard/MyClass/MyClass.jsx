import React, { useEffect, useState } from "react";

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
      <div className="grid grid-cols-2 gap-12">
        {
            allClass.map(cl=> <div key={cl._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src={cl.photoUrl}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{cl.className}</h2>
              <p>{cl.instructorName}</p>
              <p>{cl.email}</p>
              <p>Price: ${cl.price}</p>
              <p>Available seat: {cl.availableSeat}</p>
              <p>Status: {cl.status}</p>
              <div className="card-actions">
                <button className="btn btn-primary">Update</button>
              </div>
            </div>
          </div>)
        }
      </div>
    </div>
  );
};

export default MyClass;
