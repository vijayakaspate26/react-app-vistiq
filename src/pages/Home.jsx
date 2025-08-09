import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import Navbar from "../components/Navbar.jsx";
import VerticalSliderSection from "../components/VerticalSliderSection.jsx";

function Home() {
  return (
    <>
      {/* Hero Section with Background */}
      <div
        className="relative bg-cover bg-center rounded-xl text-white"
        style={{ backgroundImage: "url('/img/heroimg1.jpeg')" }}
      >
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      {/* Statistics Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-[#F9F9F9]">
        <div className="text-center mb-12">
          <h5 className="sofia-regular text-lg sm:text-xl font-bold text-gray-600">
            Statistics
          </h5>
          <h2 className="sofia-regular text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Health that Speaks in Numbers
          </h2>
          <p className="sofia-regular text-gray-600 mt-4 text-base sm:text-lg">
            See how our expertise and dedication have transformed thousands of lives
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { number: "98 %", title: "Customer Satisfaction", text: "98% of our clients leave feeling deeply relaxed, refreshed, and rejuvenated after their visit" },
            { number: "05 k+", title: "Annual Treatments", text: "Over 5,000 luxury spa treatments performed every year, ensuring top-tier wellness experiences" },
            { number: "10 k+", title: "Happy Clients", text: "With over 10,000 satisfied clients worldwide, Vistiq is your trusted destination for luxury self-care" },
            { number: "4.9/5", title: "Excellence Rating", text: "Our services are rated 4.9/5 stars by thousands of delighted guests, reflecting our commitment to excellence" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition duration-300">
              <div className="sofia-regular text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#4B352A] mb-4">
                {item.number}
              </div>
              <h3 className="sofia-regular text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="sofia-regular text-gray-600 text-sm sm:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vertical Slider */}
      <VerticalSliderSection />

      {/* Products Section */}
      <section className="py-16 px-4 sm:px-8 md:px-20 bg-[#F9F9F9]">
        <div className="text-center mb-12">
          <h5 className="sofia-regular text-lg sm:text-xl font-bold text-gray-600">
            Vistiq Picks
          </h5>
          <h2 className="sofia-regular text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Handpicked for Your Ritual
          </h2>
          <p className="sofia-regular text-gray-600 mt-4 text-base sm:text-lg">
            From skin to soul, everything you need for your self-care ritual
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { img: "/img/product1.avif", title: "Vistiq Signature Scented Candle" },
            { img: "/img/product2.avif", title: "Botanical Room & Linen Mist" },
            { img: "/img/product3.avif", title: "Essential Oil Roller Trio" }
          ].map((product, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl hover:scale-105 transition duration-300">
              <div className="w-full h-60 sm:h-64 mb-4 overflow-hidden rounded-lg">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
              </div>
              <h3 className="sofia-regular text-lg sm:text-xl font-semibold text-gray-800">{product.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
