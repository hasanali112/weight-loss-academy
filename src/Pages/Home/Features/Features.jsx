import React from "react";
import card1 from "../../../assets/image/card1.png";
import card2 from "../../../assets/image/card2.png";
import card3 from "../../../assets/image/card3.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {  Flip } from "react-awesome-reveal";

const Features = () => {
  return (
    <div>
       
        <h1 className="text-black text-4xl font-sans font-bold ml-14 border-b-2 border-b-[#73523a] mr-[930px] mt-32">Our Speciality</h1>
        <hr className="mx-14"/>
      <div className="flex flex-col md:flex-row md:space-x-9 md:space-y-0 space-y-5 mx-14  md:mx-16 mt-4">
        <div className="card w-60 h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-primary-content rounded-md mb-2">
          <div className="card-body text-center">
            <img src={card1} alt="" className="w-14 ml-14" />
            <h2 className="text-center text-white text-xl font-bold ">
              Group Fitness
            </h2>
            <p className="text-white text-base">
              We offer signature fitness classes including HIIT, Barre, Mat
              Pilates and more
            </p>
          </div>
        </div>
        <div className="card w-60 h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-primary-content rounded-md mb-2">
          <div className="card-body text-center">
            <img src={card2} alt="" className="w-14 ml-14" />
            <h2 className="text-center text-white text-xl font-bold ">
              WORKOUTS
            </h2>
            <p className="text-white">
              Discover our range of world-class group fitness workouts below.
            </p>
          </div>
        </div>
        <div className="card w-60 h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-primary-content rounded-md">
          <div className="card-body text-center">
            <img src={card3} alt="" className="w-14 ml-14" />
            <h2 className="text-center text-white text-xl font-bold ">
              Nutrition & Diet
            </h2>
            <p className="text-white">
              This courses provide comprehensive knowledge and skills within a specific context.
            </p>
          </div>
        </div>
        <div className="card w-60 h-60 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... text-primary-content rounded-md">
          <div className="card-body text-center">
            <img src={card2} alt="" className="w-14 ml-14" />
            <h2 className="text-center text-white text-xl font-bold ">
              Daily food habbit
            </h2>
            <p className="text-white">
              This courses provide comprehensive knowledge and skills within a specific context.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
