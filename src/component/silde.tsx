import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function Sile() {
  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='gambarku' src="https://tse2.mm.bing.net/th?id=OIP.uatAv-vocp9PWCScvQ7hdgHaEK&pid=Api&P=0&h=180" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='gambarku' src="https://tse3.mm.bing.net/th?id=OIP.xpSwuFx6SEdECKjps24dOAHaEK&pid=Api&P=0&h=180" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
