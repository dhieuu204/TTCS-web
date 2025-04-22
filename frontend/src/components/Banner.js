import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Banner.css';

const Banner = () => {
  return (
    <div className="banner">
     <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/images/ip15promax.jpg" alt="Banner 1" className="banner__image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ip16promax.jpg" alt="Banner 2" className="banner__image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/ipadgen9.jpg" alt="Banner 3" className="banner__image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
