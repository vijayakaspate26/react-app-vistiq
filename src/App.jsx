import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';



const App = () => {
  return (
    <Router>
      <main  className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <section className="relative w-full h-[500px]">
        {/* Google Map as background */}

        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7567.935579334872!2d73.94777291503488!3d18.485118155438094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e9e305da104d%3A0x58d4427f13f11bc9!2sBhekrai%20Nagar%2C%20Phursungi%2C%20Pune%2C%20Maharashtra%20412308!5e0!3m2!1sen!2sin!4v1751368842280!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="absolute inset-0 z-0">
        </iframe>

        {/* Dark overlay for better contrast */}
        {/* <div className="absolute inset-0 bg-[#FFFBDE] bg-opacity-50 z-10" /> */}
        {/* Faded Radial Corner Overlays */}
        <div
          className="absolute top-0 left-0 w-[200px] h-[200px] z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top left, #FDFAF6 0%, transparent 40%)',
          }}
        />

        <div
          className="absolute top-0 right-0 w-[400px] h-[400px] z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at top right, #FDFAF6 0%, transparent 80%)',
          }}
        />

        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom left, #FDFAF6 0%, transparent 80%)',
          }}
        />

        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] z-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at bottom right, #FDFAF6 0%, transparent 80%)',
          }}
        />

        {/* Appointment card overlay */}
        <div className="relative z-20 flex items-start justify-end h-full pt-10">
          <div className="bg-white bg-opacity-95 rounded-xl shadow-xl p-8 max-w-md text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4 sofia-regular">
              Book Your Appointment
            </h2>
            <p className="text-gray-700 mb-4 sofia-regular">
              Walk into calm. Select your ideal time below.
            </p>
            <div className="text-left text-gray-800 mb-6">
              <p><strong>Mon – Fri:</strong> 10:00 AM – 7:00 PM</p>
              <p><strong>Saturday:</strong> 11:00 AM – 5:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
            </div>
            <button className="bg-[#4B352A] hover:bg-[#3a281f] text-white px-6 py-3 rounded-lg shadow-md transition">
              Book Now
            </button>
          </div>
        </div>
      </section>


      <Footer />

    </Router>
  );
};

export default App;
