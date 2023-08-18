import React, { useEffect, useState } from 'react';

const PopularClass = () => {
    const [popular, setPopular] = useState([])


    useEffect(()=>{
        fetch('https://weight-loss-server.vercel.app/popular-classes')
        .then(res=> res.json())
        .then(data=> setPopular(data))
    },[])
    return (
        <div className='mt-40'>
            <h1 className='text-4xl text-gray-700 font-bold text-center'>Popular Class</h1>
            <p className='text-base text-gray-700 font-bold text-center mt-3'>Explore top most class</p>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:mx-20 mx-6 mt-10' >
           {
                popular.map(popularClass=>
                    <div key={popularClass._id} className="card w-80 bg-gray-200 shadow-xl">
                    <figure><img src={popularClass.classImage} alt="class" className='p-3'/></figure>
                    <div className="card-body">
                      <h2 className="card-title">{popularClass.className}</h2>
                      <h2 className="card-title">{popularClass.instructorName}</h2>
                      <p>Total Student: {popularClass.numberOfStudent}</p>
                    </div>
                  </div>  
                    
                    )
            }
           </div>
            
        </div>
    );
};

export default PopularClass;