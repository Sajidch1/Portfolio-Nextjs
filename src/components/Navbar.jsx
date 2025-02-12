"use client"; // Enables client-side behavior (useState, useEffect)

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full transition-all duration-300 ${
        isSticky
          ? "fixed top-0 left-0 bg-black/70 backdrop-blur-md shadow-lg"
          : "relative bg-black"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Left Side: Profile Image + Name */}
        <div className="flex items-center space-x-4">
          <img
            src="/profile.jpg" // Change to your image path
            alt="Sajid"
            className="w-12 h-12 rounded-full border-2 border-white"
          />
          <span className="text-xl font-semibold text-white">Sajid</span>
        </div>

        {/* Right Side: Navigation + Button */}
        <div className="flex items-center space-x-8">
          <ul className="hidden md:flex space-x-12 text-white">
            <li><a href="#" className="hover:text-gray-400">HOME</a></li>
            <li><a href="#" className="hover:text-gray-400">ABOUT</a></li>
            <li><a href="#" className="hover:text-gray-400">SERVICE</a></li>
            <li><a href="#" className="hover:text-gray-400">PORTFOLIO</a></li>
            <li><a href="#" className="hover:text-gray-400">CLIENT</a></li>
            <li><a href="#" className="hover:text-gray-400">BLOG</a></li>
            <li><a href="#" className="hover:text-gray-400">PRICING</a></li>
            <li><a href="#" className="hover:text-gray-400">CONTACT</a></li>
          </ul>

          {/* Hire Now Button */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
            Hire Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none"
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu (Hidden by Default) */}
      <div className={`md:hidden bg-black ${isOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center space-y-4 py-4 text-white">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Portfolio</a></li>
          <li><a href="#" className="hover:text-gray-400">client</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          <li>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
              Hire Now
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
