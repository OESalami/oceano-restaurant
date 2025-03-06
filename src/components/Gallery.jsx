// FancyCoverflowSlider.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from '../assets/gallery/img1.jpg'
import img2 from '../assets/gallery/img2.jpg'
import img3 from '../assets/gallery/img3.jpg'
import img4 from  '../assets/gallery/img4.jpg'
import img5 from '../assets/gallery/img5.jpg'
import img6 from '../assets/gallery/img6.jpg'
import img7 from '../assets/gallery/img7.jpg'
import img8 from '../assets/gallery/img8.jpg'
import img9 from '../assets/gallery/img9.jpg'
import img10 from '../assets/gallery/img10.jpg'
import img11 from '../assets/gallery/img11.jpg'
import img12 from '../assets/gallery/img12.jpg'
import img13 from '../assets/gallery/img13.jpg'
import img14   from '../assets/gallery/img14.jpg'
import img15 from '../assets/gallery/img15.jpg'
import img16 from '../assets/gallery/img16.jpg'
import img17 from '../assets/gallery/img17.jpg'
import img18 from '../assets/gallery/img18.jpg'
import img19 from '../assets/gallery/img19.jpg'

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const FancyCoverflowSlider = () => {
  return (
    <div className="gallery w-full py-16 px-4 bg-gradient-to-b bg-gray-200">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
       Gallery
      </h2>
      <p className="text-center font-semibold text-2xl mb-8 text-gray-800"> Explore Our Showcase</p>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="max-w-7xl mx-auto"
      >
        {images.map((url, index) => (
          <SwiperSlide key={index}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={url}
                alt={`Slide ${index}`}
                className="w-full h-80 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-xl font-semibold">
                  Slide {index + 1}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FancyCoverflowSlider;
