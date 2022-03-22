import React from 'react'
import './Testimonials.css'
import mee1 from '../../Assets/mee1.jpg';
// import i16 from'../../Assets/i16.jpg';
// import i16 from'../../Assets/i16.jpg';
// import i16 from'../../Assets/i16.jpg';

// import Swiper core and required modules
import {  Pagination  } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';


const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Received From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[ Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        
      >
        <SwiperSlide className="testimonial">
          <div className="client__avater">
            <img src={mee1} alt="CA" />
          </div>
          <h5 className="client__name">Someone</h5>
          <small className="client__review">lorem ipsum blaa blaa blaa🤪</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avater">
            <img src={mee1} alt="CA" />
          </div>
          <h5 className="client__name">Someone</h5>
          <small className="client__review">lorem ipsum blaa blaa blaa🤪</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avater">
            <img src={mee1} alt="CA" />
          </div>
          <h5 className="client__name">Someone</h5>
          <small className="client__review">lorem ipsum blaa blaa blaa🤪</small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avater">
            <img src={mee1} alt="CA" />
          </div>
          <h5 className="client__name">Someone</h5>
          <small className="client__review">lorem ipsum blaa blaa blaa🤪</small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Testimonials