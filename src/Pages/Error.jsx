import React from 'react';
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../public/error.json";
import { Link } from 'react-router-dom';


const Error = () => {
    return (
        <div className='w-2/3 mx-auto'>
            <Lottie animationData={groovyWalkAnimation} loop={true} />;
           <Link to='/'> <button className="btn bg-[#de6d72] btn-primary text-white border-0 md:btn-wide ml-80 md:rounded-full">
             Back To Home 
            </button></Link>
        </div>
    );
};

export default Error;