// src/pages/Foto.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const Foto = () => {
  const images = [
    "assets/Galery/anto.jpg",
    "assets/Galery/Foto 1.jpg",
    "assets/Galery/Foto 2.jpg",
    "assets/Galery/Foto 3.jpg",
    "assets/Galery/Foto 4.jpg",
    "assets/Galery/Foto 5.jpg",
    "assets/Galery/Foto 6.jpg",
    "assets/Galery/Foto 7.jpg",
    "assets/Galery/Foto 8.jpg",
  ];

  return (
    <div
      className="w-full bg-black/20 
      border-[#D4AF37]/50 py-4 backdrop-blur-xs  "
    >
      {/* Swiper */}
      <div className="max-w-5xl mx-auto">
        <Swiper
          loop
          grabCursor
          centeredSlides
          slidesPerView={3}
          spaceBetween={16}
          effect="coverflow"
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 3.2 },
            1280: { slidesPerView: 3.5 },
          }}
          coverflowEffect={{
            rotate: 0,
            scale: 0.95,
            stretch: 0,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
          className="w-full max-w-6xl mx-auto "
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`foto-${index}`}
                className="w-[190px] py-2 h-[300px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Foto;
