import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

const VerticalSliderSection = () => {
  const slides = [
    {
      img: 'img/spa1.avif',
      title: 'Luxury Facial',
      desc: 'Deep cleansing and glow restoration.',
    },
    {
      img: 'img/spa2.avif',
      title: 'Aromatherapy Massage',
      desc: 'Relax with essential oils and pressure.',
    },
    {
      img: 'img/spa3.avif',
      title: 'Detox Body Wrap',
      desc: 'Flush toxins and revitalize your skin.',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row px-4 md:px-20 py-16 bg-white items-center gap-12">
      {/* Left Info */}
      <div className="md:w-1/2 text-left">
        <h5 className='sofia-regular text-xl md:text-xl font-bold text-gray-600 mb-5'>Luxury Treatments</h5>
        <h2 className="sofia-regular text-8xl md:text-5xl font-bold text-gray-800 mb-5">
        Healing Hands,<br />
        Lasting Benefits
        </h2>
        <p className="sofia-regular text-lg text-gray-600 mb-6">
        Feel the difference with expert care that restores and revitalizes
        </p>
        <div className="flex gap-4">
          <button className="sofia-regular bg-[#4B352A] text-white  px-6 py-3 rounded-lg shadow-md font-medium">
            Book Now
          </button>
          <button className="sofia-regular bg-transparent border border-gray-300 hover:bg-gray-100 text-gray-800 px-6 py-3 rounded-lg shadow-md font-medium">
            Learn More
          </button>
        </div>  

      </div>

      {/* Right Smooth Slider */}
      <div className="md:w-1/2 w-full h-[420px]">
        <Swiper
          direction={'vertical'}
          slidesPerView={2}
          spaceBetween={20}
          navigation={false}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={1000} // Smooth speed
          loop={true}
          modules={[Autoplay, Navigation]}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center gap-4 bg-[#f8f8f8] p-4 rounded-lg shadow transition-all duration-1000">
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="w-42 h-42 object-cover rounded-lg"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{slide.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VerticalSliderSection;
