import React from 'react';
import { useLoaderData } from 'react-router-dom';
import BannarCover from './BannerCover/BannarCover';
import bannerCover from '../../src/assets/image/banner3.jpg'

const Classes = () => {
    const loadAllClasses= useLoaderData()
    return (
        <div>
           <BannarCover
           image={bannerCover}
           title='Explore Our Best Classes'
           subTitle='We provide best weight loss classes that help to fit and heathy life'
           ></BannarCover>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-3 md:ml-10 mb-10'>
           {
                loadAllClasses.map(loadClass=> <div key={loadClass._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={loadClass.photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                   {loadClass.className}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p>{loadClass.instructorName}</p>
                  <p>Available Seat:{loadClass.availableSeat}</p>
                  <p>Price: ${loadClass.price}</p>
                  <div className="card-actions justify-end">
                    <div className="btn btn-xs badge badge-outline">Add to cart</div>
                  </div>
                </div>
              </div>)
            }
           </div>
        </div>
    );
};

export default Classes;