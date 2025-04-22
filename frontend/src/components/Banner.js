import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../css/Banner.css';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__container">
        
        {/* Sidebar Category */}
        <div className="banner__sidebar">
          <ul className="banner__category-list">
            <li className="banner__category-item">Woman's Fashion</li>
            <li className="banner__category-item">Men's Fashion</li>
            <li className="banner__category-item">Electronics</li>
            <li className="banner__category-item">Home & Lifestyle</li>
            <li className="banner__category-item">Medicine</li>
            <li className="banner__category-item">Sports & Outdoor</li>
            <li className="banner__category-item">Baby's & Toys</li>
            <li className="banner__category-item">Groceries & Pets</li>
            <li className="banner__category-item">Health & Beauty</li>
          </ul>
        </div>

        {/* Banner Slider */}
        <div className="banner__slider">
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

      </div>
    </section>
  );
};

export default Banner;
