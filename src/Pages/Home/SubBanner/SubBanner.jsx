import React from "react";
import subBanner1 from '../../../assets/image/bannerimg.png'
import subBanner2 from '../../../assets/image/bannar1.png'
import subBanner3 from '../../../assets/image/sb1.png'

const SubBanner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-8 md:mx-4 mx-2">
       <div className="flex items-center  bg-[#593A24] h-52">
         <div className="text-white w-3/4">
            <h3 className="ml-4 text-base font-semibold font-sans">Simple</h3>
            <h4 className="ml-4 md:text-2xl text-xl font-bold">Workout running</h4>
            <p className="ml-4 font-normal font-serif">Everyday try min 10 min.</p>
            <p className="mt-5 ml-4 font-serif">Check out </p>
         </div>
         <div>
            <img src={subBanner1} alt="" className="md:w-60 w-52"/>
         </div>
       </div>
       <div className="flex items-center  bg-[#3f2d20] h-52">
         <div className="text-white w-3/4">
            <h3 className="ml-4 text-base font-semibold font-sans">Simple</h3>
            <h4 className="ml-4 md:text-2xl text-xl font-bold">Maintain Gym</h4>
            <p className="ml-4 font-normal font-serif">Everyday try min 10 min.</p>
            <p className="mt-5 ml-4 font-serif">Check out </p>
         </div>
         <div>
            <img src={subBanner2} alt="" className="w-60"/>
         </div>
       </div>
       <div className="flex items-center  bg-[#a26d47] h-52">
         <div className="text-white md:w-3/4 w-1/2">
            <h3 className="ml-4 text-base font-semibold font-sans">Simple</h3>
            <h4 className="ml-4 md:text-2xl text-xl font-bold">Follow the Diet</h4>
            <p className="ml-4 font-normal font-serif">Everyday try min 10 min.</p>
            <p className="mt-5 ml-4 font-serif">Check out </p>
         </div>
         <div>
            <img src={subBanner3} alt="" className="md:w-60 w-40"/>
         </div>
       </div>
    </div>
  );
};

export default SubBanner;
