import React from "react";
import banner1 from "../../assets/image/banner1.jpg";
import banner2 from "../../assets/image/banner2.jpg";
import banner3 from "../../assets/image/banner3.jpg";
import banner4 from "../../assets/image/banner4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full md:h-[650px] h-[350px]  mb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute flex items-center w-full h-full transform  md:left-0  md:top-0 bg-black bg-opacity-40">
          <div className="md:space-y-6  md:pt-5 pt-28 md:pl-12">
            <h1 className="text-white ml-4  md:text-center md:text-5xl text-xl font-bold">
              Welcome to <br />
              Weight Loss Academy
            </h1>
            <p className="text-white md:text-center mb-4 ml-4 md:w-1/2 md:ml-72 md:text-xl text-base md:font-bold ">
            The Weight Loss Academy brings you the most sought that teaches you how to lose body fat, gain confidence, increase energy and create a healthier relationship with food
            </p>
            <button className="btn btn-warning md:btn-wide md:ml-[450px] ml-4 md:rounded-full">Join Us</button>
          </div>
        </div>
        <div className="absolute flex md:justify-between justify-end transform -translate-y-1/2 left-5 right-5 md:top-2/3 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute flex items-center h-full transform  left-0  top-0 bg-black bg-opacity-40">
        <div className="space-y-6 pl-12">
            <h1 className="text-white text-center md:text-5xl text-xl font-bold">
              Welcome to <br />
              Weight Loss Academy
            </h1>
            <p className="text-white text-center w-1/2 ml-72 text-xl font-bold">
            The Weight Loss Academy brings you the most sought that teaches you how to lose body fat, gain confidence, increase energy and create a healthier relationship with food
            </p>
            <button className="btn btn-warning btn-wide ml-[450px] rounded-full">Join Us</button>
          </div>
        </div>
        <div className="absolute flex md:justify-between justify-end transform -translate-y-1/2 left-5 right-5 md:md:top-2/3 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute flex items-center h-full transform  left-0  top-0 bg-black bg-opacity-40">
        <div className="space-y-6 md:pl-12">
            <h1 className="text-white text-center md:text-5xl text-xl font-bold">
              Welcome to <br />
              Weight Loss Academy
            </h1>
            <p className="text-white md:text-center w-1/2 md:ml-72 text-xl font-bold">
            The Weight Loss Academy brings you the most sought that teaches you how to lose body fat, gain confidence, increase energy and create a healthier relationship with food
            </p>
            <button className="btn btn-warning btn-wide ml-[450px] rounded-full">Join Us</button>
          </div>
        </div>
        <div className="absolute flex md:justify-between justify-end transform -translate-y-1/2 left-5 right-5 md:top-2/3 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full" />
        <div className="absolute flex items-center h-full transform  left-0  top-0 bg-black bg-opacity-40">
        <div className="space-y-6 md:pl-12">
            <h1 className="text-white text-center md:text-5xl text-xl font-bold">
              Welcome to <br />
              Weight Loss Academy
            </h1>
            <p className="text-white text-center md:w-1/2 md:ml-72 text-xl font-bold">
            The Weight Loss Academy brings you the most sought that teaches you how to lose body fat, gain confidence, increase energy and create a healthier relationship with food
            </p>
            <button className="btn btn-warning btn-wide ml-[450px] rounded-full">Join Us</button>
          </div>
        </div>
        <div className="absolute flex md:justify-between justify-end transform -translate-y-1/2 left-5 right-5 md:top-2/3 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
