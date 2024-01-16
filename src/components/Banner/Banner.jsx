"use client";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Banner.components.css'
// import './styles.css';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

export default function Banner() {
  return (
    <>
    <div className="w-screen">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
        <img src='../../public/images/images/banner2.webp'/>
          
            </SwiperSlide>
        <SwiperSlide>
        <img src='../../public/images/images/banner3.webp'/>
            </SwiperSlide>
        <SwiperSlide>
        <img src='../../public/images/images/banner4.webp'/>
            </SwiperSlide>
      
       
      </Swiper>
            </div>
    </>
  );
}
