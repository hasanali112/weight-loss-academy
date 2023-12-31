import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useEffect } from 'react';

const MyEnrolledClass = () => {
    const [entrolledClasses, setEtrolledClasses] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
      fetch(`http://localhost:5000/entrolledclasses/${user.email}`)
      .then(res=> res.json())
      .then(data=> setEtrolledClasses(data))
  },[])



    return (
        <div>
             <Helmet>
                <title>My Enrolled Class - Weight Loss Academy</title>
            </Helmet>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>
            {
                entrolledClasses.map(entrolledClasse=><div key={entrolledClasse._id} className="card w-80 rounded-none bg-gray-300 shadow-lg">
                <figure>
                  <img
                    src={entrolledClasse.image}
                    alt="weight loss"
                    className="p-3"
                  />
                </figure>
                <div className="ml-5 p-2">
                  <h2 className="text-2xl font-bold">{entrolledClasse.className}</h2>
                  <p className="text-xl font-semibold">{entrolledClasse.instructorName}</p>
                   <div className="flex space-x-3 mb-4">
                   <p className="text-base font-semibold text-gray-500">Price: ${entrolledClasse.price}</p>
                   <p className="text-base font-semibold text-gray-500">Available seat: {entrolledClasse.availableSeat}</p>
                   </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default MyEnrolledClass;