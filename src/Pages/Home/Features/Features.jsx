import React from "react";
import card1 from "../../../assets/image/card1.png";
import card2 from "../../../assets/image/card2.png";
import card3 from "../../../assets/image/card3.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import {  Flip } from "react-awesome-reveal";

const Features = () => {
  return (
    <div>
        <Flip>
        <h1 className="text-gray-900 text-5xl font-bold text-center mt-20">Our Speciality</h1>
        <p className="text-gray-500 text-2xl font-semibold text-center mb-10 mt-3">Explore this feaute and lead a healthy life</p>
      <div className="flex flex-col md:flex-row md:space-x-4 mx-3  md:mx-24">
        <div className="card w-80 h-80 bg-[rgb(224,91,97)] hover:bg-[#e3333b] text-primary-content rounded-[50px] mb-2">
          <div className="card-body text-center">
            <img src={card1} alt="" className="w-14 ml-24" />
            <h2 className="text-center text-white text-3xl font-bold ">
              Group Fitness
            </h2>
            <p className="text-white text-base font-semibold">
              We offer signature fitness classes including HIIT, Barre, Mat
              Pilates, Boxing and Martial Arts, Zumba, Treadmill Running, Pool
              workouts and more
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-circle btn-outline">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-80 h-80 bg-[rgb(224,91,97)] hover:bg-[#e3333b] text-primary-content rounded-[50px] mb-2">
          <div className="card-body text-center">
            <img src={card2} alt="" className="w-14 ml-24" />
            <h2 className="text-center text-white text-3xl font-bold ">
              WORKOUTS
            </h2>
            <p className="text-white text-base font-semibold">
              Discover our range of world-class group fitness workouts below.
              The full-body weights workout, BODYPUMP is for anyone looking to
              get lean, toned
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-circle btn-outline">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
        <div className="card w-80 h-80 bg-[rgb(224,91,97)] hover:bg-[#e3333b] text-primary-content rounded-[50px]">
          <div className="card-body text-center">
            <img src={card3} alt="" className="w-14 ml-24" />
            <h2 className="text-center text-white text-3xl font-bold ">
              Nutrition & Diet
            </h2>
            <p className="text-white text-base font-semibold">
              The best nutrition courses provide comprehensive knowledge and
              skills about food, health, cooking, and more within a specific
              context
            </p>
            <div className="card-actions justify-center">
              <button className="btn btn-circle btn-outline">
                <FaArrowAltCircleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      </Flip>
    </div>
  );
};

export default Features;
