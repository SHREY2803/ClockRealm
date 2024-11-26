import React from 'react';
import "./Slider.css";

import { Swiper, SwiperSlide } from 'swiper/react';
import sliderData from "./Slider.json";
import firstWatch from "../../../assets/watch-slider1.png"
import secondWatch from "../../../assets/watch-slider2.png"
import thirdWatch from "../../../assets/watch-slider3.png"
import fourthWatch from "../../../assets/watch-slider4.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

const images = {
  slider1: secondWatch,
  slider2: fourthWatch,
  slider3: firstWatch,
  slider4: thirdWatch,
}

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper"
      >
        <>
        {sliderData.slides.map((slide,index)=>(
          <SwiperSlide key={index}>
          <img 
          src={images[slide.image]}
          alt={slide.headLine}
           />

          <div className="content">
            <span>{slide.announcement}</span>
            <h1 dangerouslySetInnerHTML={{__html:slide.headLine}}></h1>
            <p dangerouslySetInnerHTML={{__html:slide.description}}></p>
            <a href={slide.buttonLink}>{slide.buttonText}</a>
            </div> 
        </SwiperSlide>
        ))}

        </>
        
      </Swiper>
      
    </>
  );
}

