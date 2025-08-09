import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo2.png"; // adjust path

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-transparent px-4 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <div className="rounded-full bg-white p-1 w-14 h-14 shadow-md overflow-hidden">
            <img src={logo} alt="Logo" className="w-full h-full object-cover cursor-pointer" />
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="text-2xl md:hidden" onClick={toggleMenu}>
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="sofia-regular text-2xl hover:text-blue-400">Home</Link>
          <Link to="/about" className="sofia-regular text-2xl hover:text-blue-400">About</Link>
          <Link to="/contact" className="sofia-regular text-2xl hover:text-blue-400">Contact</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 text-white"
          >
            <div className="flex flex-col gap-3">
              <Link to="/" onClick={toggleMenu} className="sofia-regular text-4xl hover:text-blue-400">Home</Link>
              <Link to="/about" onClick={toggleMenu} className="sofia-regular text-4xl hover:text-blue-400">About</Link>
              <Link to="/contact" onClick={toggleMenu} className="sofia-regular text-4xl hover:text-blue-400">Contact</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
