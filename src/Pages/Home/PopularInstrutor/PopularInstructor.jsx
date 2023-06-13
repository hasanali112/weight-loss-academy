import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const PopularInstructor = () => {
    const [populars, setPopulars] =useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/popularinstructor')
        .then(res=> res.json())
        .then(data=> setPopulars(data))
    },[])
    return (
        <div>
            <Fade>
            <h1 className='text-center text-3xl font-bold mt-20'>Our Popuplar Instrutors</h1>
            <p className='text-center text-xl font-semibold mt-2 text-gray-500'>We provide world class instructors</p>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 md:mx-20 mx-4 mt-10'>
                {
                    populars.map(popular=> <div key={popular._id} className="card w-80 bg-gray-200 shadow-xl">
                    <figure>
                      <img src={popular.photoUrl} alt="intructor" className="p-3" />
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title">{popular.name}</h2>
                      <p>{popular.email}</p>
                    </div>
                  </div>)
                }
             </div>
            </Fade>
        </div>
    );
};

export default PopularInstructor;