import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import banner1 from '../../assets/image/bannar1.png'
import banner2 from '../../assets/image/banner2.png'

const Banner = () => {
  return (
   <div>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-[#b89374] flex flex-col-reverse md:flex-row md:justify-between md:space-x-10">
            <div>
            <h1 className="md:ml-20 ml-5 md:mt-28 mt-4 text-white md:text-5xl text-3xl font-bold">Welcome to Weight <br />Loss Academy</h1>
            <p className="md:mx-20 mx-5 md:mt-5 mt-3 text-white md:text-xl text-base font-semibold pb-5">Our goal brings to teache you gain confidence, increase energy and create a healthier relationship with food</p>
            <div className="md:ml-20 ml-5 space-x-3 md:pb-0 pb-7 mb-1">
            <button className="btn btn-sm btn-primary rounded-none">Join us</button>
            <button className="btn btn-sm btn-outline btn-ghost rounded-none">Learn more</button>
            </div>
            </div>
            <div>
              <img src={banner1} alt="" className="md:mr-16"/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="bg-[#8f8e8e] flex flex-col-reverse md:flex-row md:justify-between space-x-10">
            <div>
            <h1 className="md:ml-20 ml-5 md:mt-28 mt-4 text-white md:text-5xl text-3xl font-bold">Welcome to Weight <br />Loss Academy</h1>
            <p className="md:mx-20 mx-5 md:mt-5 mt-3 text-white md:text-xl text-base font-semibold pb-5">Our goal brings to teache you gain confidence, increase energy and create a healthier relationship with food</p>
            <div className="md:ml-20 ml-5 space-x-3 md:pb-0 pb-9 mb-2">
            <button className="btn btn-sm btn-primary rounded-none">Join us</button>
            <button className="btn btn-sm btn-outline btn-ghost rounded-none">Learn more</button>
            </div>
            </div>
            <div>
              <img src={banner2} alt="" className="md:mr-28 md:h-[400px] h-[350px]"/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
   </div>
  );
}; 

export default Banner;
