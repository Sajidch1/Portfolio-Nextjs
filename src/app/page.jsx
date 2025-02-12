import Image from "next/image";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import TypingEffect from "@/components/TypingEffect"; // Import the Client Component

export default function Home() {
  return (
    <section className="relative bg-gray-900 text-white min-h-screen flex items-center justify-center px-8 overflow-hidden">
      {/* Container with Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Content - Bigger Text */}
        <div className="space-y-8">
          <h4 className="text-gray-400 uppercase tracking-widest text-lg">
            Welcome to my world
          </h4>
          <h1 className="text-6xl font-bold leading-tight">
            Hi, I’m <span className="text-pink-500">Jone Lee</span> <br />
            <TypingEffect /> {/* Typing effect as a separate component */}
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed">
            I use animation as a third dimension by which to simplify
            experiences and guide interactions. I’m not adding motion just to
            spruce things up, but to create a better user experience.
          </p>
          {/* Download Resume Button */}
          <div className="mt-4">
            <a
              href="/Software-Engineer-2025.pdf" // Make sure the file exists in the public folder
              download="Software-Engineer-2025.pdf"
              className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition font-semibold"
            >
              Download Resume
            </a>
          </div>
          {/* Social Media & Skills Section */}
          <div className="flex flex-col md:flex-row md:space-x-10 space-y-6 md:space-y-0">
            {/* Social Media Links */}
            <div>
              <h4 className="text-gray-400 uppercase text-lg mb-4">
                Find me on
              </h4>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
                >
                  <FaFacebookF className="text-white text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
                >
                  <FaLinkedinIn className="text-white text-xl" />
                </a>
                <a
                  href="#"
                  className="bg-gray-800 p-4 rounded-full hover:bg-gray-700 transition"
                >
                  <FaInstagram className="text-white text-xl" />
                </a>
              </div>
            </div>

            {/* Best Skills Section */}
            <div>
              <h4 className="text-gray-400 uppercase text-lg mb-4">
                Best skill on
              </h4>
              <div className="flex space-x-5">
                <a
                  href="#"
                  className="bg-blue-600 p-4 rounded-full hover:bg-blue-500 transition"
                >
                  <span className="text-white font-bold text-xl">In</span>
                </a>
                <a
                  href="#"
                  className="bg-yellow-500 p-4 rounded-full hover:bg-yellow-400 transition"
                >
                  <span className="text-white font-bold text-xl">Sk</span>
                </a>
                <a
                  href="#"
                  className="bg-pink-500 p-4 rounded-full hover:bg-pink-400 transition"
                >
                  <span className="text-white font-bold text-xl">Fi</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex justify-center">
          {/* Dark Background Shadow Behind Image */}
          <div className="absolute w-[550px] h-[500px] bg-black rounded-lg opacity-70 bottom-0"></div>

          {/* Profile Image - Fixed to Bottom */}
          <div className="relative z-10">
            <Image
              src="/banner-01.png" // Replace with actual image path
              alt="Jone Lee"
              width={500}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
  {/* sajid Image Section */}