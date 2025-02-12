import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Contact Details */}
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <img
              src="/profile.jpg" // Replace with your image path
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-500"
            />
            <div>
              <h2 className="text-2xl font-semibold">Sajid</h2>
              <p className="text-gray-400">Freelance Developer</p>
            </div>
          </div>
          <p className="text-gray-400">
            I am available for freelance work. Connect with me via phone or email.
          </p>
          <p className="text-gray-400">Phone: +01234567890</p>
          <p className="text-gray-400">Email: admin@example.com</p>
        </div>

        {/* Right Side - Contact Form */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <form>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 mb-4 bg-gray-700 text-white rounded"
            ></textarea>
            <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-4 mt-8">
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
          <FaFacebookF className="text-white" />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
          <FaLinkedinIn className="text-white" />
        </a>
        <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-gray-700">
          <FaInstagram className="text-white" />
        </a>
      </div>
    </footer>
  );
}
