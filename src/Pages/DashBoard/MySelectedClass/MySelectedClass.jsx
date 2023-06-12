import React, { useEffect, useState } from 'react';
import MyClassCard from '../MyClassCard/MyClassCard';
import { Helmet } from 'react-helmet-async';

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
                    myClasses.map(myClass=> <MyClassCard
                    key={myClass._id}
                    item={myClass}
                    ></MyClassCard>)
                }
            </div>
        </div>
       </div>
    );
};

export default MySelectedClass;