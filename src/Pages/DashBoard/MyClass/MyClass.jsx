import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const MyClass = () => {
    const [allClass, setAllClass]= useState([])
    console.log(allClass)

    const [totalEnroll, setTotalEnroll] = useState(0)
    
    
    

    useEffect(()=>{
        fetch('https://weight-loss-server.vercel.app/allclasses')
        .then(res=> res.json())
        .then(data=> setAllClass(data))
    },[])


    useEffect(()=>{
      fetch('https://weight-loss-server.vercel.app/payment/count')
      .then((res) => res.json())
      .then(data=>{ 
        const count = data && data.length > 0 ? data[0].count : 0;
        setTotalEnroll(count);
       })
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
              <p className="text-base font-semibold text-gray-500">Total Enroll:{0? 0: totalEnroll } </p>
              <p className="text-base font-semibold text-gray-500">Feedback:{cl?.feedback} </p>
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
