import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const [popular, setPopular] = useState([])
    console.log(popular)


    useEffect(()=>{
        fetch('https://weight-loss-server.vercel.app/popular-classes')
        .then(res=> res.json())
        .then(data=> setPopular(data))
    },[])
    return (
        <div className='mt-40'>
           <div className='flex justify-between items-center'>
           <h1 className='text-4xl text-black border-b-2 border-b-[#73523a]  md:ml-14 font-bold'>Popular Class</h1>
           <Link to='/classes'><h4 className='text-orange-800 text-xl font-bold md:mr-14'>View all</h4></Link>
           </div>
             <hr className='md:mx-14'/>
           <div className='grid grid-cols-1 md:grid-cols-6 gap-4 md:ml-8 mxl-6 mt-10' >
           {
                popular.map(popularClass=>
                    <div key={popularClass._id} className='bg-gray-100 p-3 shadow-md hover:-translate-y-1'>
                      <div>
                        <img src={popularClass.classImage} alt="" />
                      </div>
                      <div>
                        <h1 className='text-gray-500 font-sans font-semibold mt-2'>{popularClass.className}</h1>
                        <h3 className='text-black text-xl font-bold font-sans'>{popularClass.instructorName}</h3>
                        <p>Total enroll: {popularClass.numberOfStudent}</p>
                      </div>
                    </div>
                    
                    )
            }
           </div>
            
        </div>
    );
};

export default PopularClass;