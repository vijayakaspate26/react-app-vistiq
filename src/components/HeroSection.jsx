import React from "react";

const HeroSection = () => {
  return (
    <section className="min-h-screen md:h-[80vh] flex items-start justify-start px-4 sm:px-8 md:px-20 pt-10 md:pt-10 text-left">
      <div className="max-w-2xl">
        <h1 className="sofia-regular text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-bold text-[#FAF6E9] drop-shadow-lg leading-tight">
          A Haven of Peace <br /> & Beauty
        </h1>

        <p className="sofia-regular text-base sm:text-lg md:text-xl mt-6 mb-6 text-[#FFFDF6]">
          Reconnect with your inner calm through holistic spa rituals <br className="hidden sm:block" />
          and botanical skincare
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button className="sofia-regular bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-lg shadow-md font-medium transition">
            Book Appointment
          </button>
          <button className="sofia-regular bg-transparent border border-white hover:bg-white hover:text-black text-white px-6 py-3 rounded-lg shadow-md font-medium transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
