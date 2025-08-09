import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const experts = [
  {
    img: '/img/expert1.avif',
    name: 'Aaravi Mehta',
    role: 'Massage Therapist',
    desc: 'Specializes in deep tissue therapy with 10+ years of experience.',
  },
  {
    img: '/img/expert2.avif',
    name: 'Riya Sharma',
    role: 'Skincare Specialist',
    desc: 'Expert in organic facials and holistic skin treatments with 15+ years of experience',
  },
  {
    img: '/img/expert3.avif',
    name: 'Piya Joshi',
    role: 'Wellness Coach',
    desc: 'Guides mindful routines and personalized wellness plans.',
  },
  {
    img: '/img/expert4.avif',
    name: 'Saanvi Kapoor',
    role: 'Aromatherapist',
    desc: 'Blends custom oils for emotional and physical healing.',
  },
  // Add more as needed
];

export default function MeetTheExperts() {
  return (
    <section className="py-20 bg-[#FDFAF6] px-4 md:px-20">
      <div className="text-center mb-12">
        <h5 className="sofia-regular text-xl text-gray-600 mb-2">Meet the Experts</h5>
        <h2 className="sofia-regular text-5xl font-bold text-[#4B352A] leading-snug">
          The Humans <br className="hidden md:block" /> Behind the Calm
        </h2>
        <p className="sofia-regular text-lg text-gray-500 mt-4 max-w-2xl mx-auto">
          Our team blends expert training with mindful presence in every session.
        </p>
      </div>

      {/* <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1.3}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      > */}
      <Swiper
  modules={[Autoplay]}
  spaceBetween={40}
  slidesPerView={1.3}
  speed={1200} // Smoother transition speed
  loop={true}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  breakpoints={{
    768: { slidesPerView: 2.2 },
    1024: { slidesPerView: 3 },
  }}
  className="w-full transition-all ease-in-out duration-1000"
>
        {experts.map((expert, idx) => (
         <SwiperSlide key={idx}>
         <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition duration-300 h-full text-center max-w-md mx-auto">
           <img
             src={expert.img}
             alt={expert.name}
             className="w-32 h-32 mx-auto rounded-full object-cover mb-6 border-4 border-[#FAF6E9]"
           />
           <h3 className="sofia-regular text-2xl font-semibold text-[#4B352A] mb-1">{expert.name}</h3>
           <h4 className="text-lg text-gray-500 mb-3">{expert.role}</h4>
           <p className="text-base text-gray-600">{expert.desc}</p>
         </div>
       </SwiperSlide>
       
        ))}
      </Swiper>
    </section>
  );
}
