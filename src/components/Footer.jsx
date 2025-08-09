import React from 'react';

const Footer = () => (

	<footer className="bg-[#4B352A] text-white py-10 px-4 md:px-20">
  <div className="flex flex-col md:flex-row justify-between items-center gap-6">
    
    {/* Brand */}
    <div className="text-center md:text-left">
      <h2 className="text-8xl font-bold sofia-regular">Vistiq Spa</h2>
      <p className="text-sm text-[#f5f5f5] mt-2 ml-2">A Haven of Peace & Beauty</p>
    </div>

    {/* Navigation Links */}
    <div className="flex flex-wrap justify-center gap-6 text-base font-medium">
      <a href="/" className="hover:text-[#FDF6E9] transition duration-300">Home</a>
      <a href="/about" className="hover:text-[#FDF6E9] transition duration-300">About Us</a>
      <a href="/contact" className="hover:text-[#FDF6E9] transition duration-300">Contact</a>
      <a href="/appointment" className="hover:text-[#FDF6E9] transition duration-300">Book Appointment</a>
    </div>
    
  </div>

  {/* Bottom Text */}
  <div className="text-center text-sm text-gray-300 mt-8">
    &copy; {new Date().getFullYear()} Vistiq Spa. All rights reserved.
  </div>
</footer>

);

export default Footer;
