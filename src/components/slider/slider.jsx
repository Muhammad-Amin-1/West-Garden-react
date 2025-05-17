import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./HeroSlider.scss";
import StrlaLeft from "@/assets/svg/left-strelka.svg";
import StrelaRight from "@/assets/svg/right-strelka.svg";

import Hero from "@/assets/images/Hero-img-desktop.jpg";

export default function HeroSlider({ slides, sideCrop = 0.2 }) {


  return (
    <div className="hero-slider-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1 + sideCrop}
        centeredSlides={true}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        className="hero-swiper"
        breakpoints={{
          500: {
            slidesPerView: 1 + sideCrop,
            spaceBetween: 4,
          },
          768: {
            slidesPerView: 1 + sideCrop,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 1 + sideCrop ,
            spaceBetween: 20,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img
              src={slide.src}
              alt={slide.alt}
              className="hero-slide__image"
            />
          </SwiperSlide>
        ))}

        {/* Кастомные стрелки */}
        <div className="custom-prev custom-nav-btn">
          <img src={StrlaLeft} alt="Назад" />
        </div>
        <div className="custom-next custom-nav-btn">
          <img src={StrelaRight} alt="Вперёд" />
        </div>
      </Swiper>
    </div>
  );
}
