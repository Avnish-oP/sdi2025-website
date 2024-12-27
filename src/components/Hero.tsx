import HeroCarousel from "./Corousel"; // Import the Carousel Component
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen max-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/campus.jpeg')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px) brightness(0.9) saturate(1.2)", // Apply blur, brightness, and saturation
        }}
      ></div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 via-transparent to-indigo-900 opacity-70 z-0"></div>

      {/* Decorative Background Elements */}
      {/* <div className="absolute inset-0 z-10 pointer-events-none">
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-indigo-200 opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="2" />
        </svg>
        <svg
          className="absolute bottom-10 right-20 w-40 h-40 text-indigo-300 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M10 10 L90 10 L90 90 L10 90 Z"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
        <svg
          className="absolute top-1/3 right-16 w-24 h-24 text-gray-300 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,10 90,90 10,90"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg>
      </div> */}

      <div className="container z-20 mt-10 mx-auto flex flex-col md:flex-row gap-8 items-center justify-between px-4 lg:px-8">
        {/* Left Section: Event Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mt-2 leading-tight ANTI">
            Smart Delhi Ideathon 2025
          </h1>
          <p className="text-indigo-200 text-xl mt-4 font-bold antialiased">
            Innovating for Sustainable Cities and Communities
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="https://dorahacks.io/hackathon/sdi2025">
              <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition">
                Register Now
              </button>
            </Link>
            <Link href="/#about">
              <button className="px-6 py-3 bg-white text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 transition">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <HeroCarousel />
        </div>
      </div>

      {/* Bar Below Hero Section */}
      <div className="absolute bottom-0 w-full bg-white bg-opacity-90 shadow-lg py-4 z-30">
        <div className="container mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
            <span>🏆</span>
            <span className="text-indigo-900 font-bold">LG Cup</span>: First Prize ₹5,00,000
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
            <span>🥈</span> Second Prize ₹3,00,000
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
            <span>🥉</span> Third Prize ₹1,00,000
          </div>
          <div className="flex items-center gap-2 text-lg font-semibold text-indigo-800">
            <span>🎓</span> Special Recognition Awards
          </div>
        </div>
      </div>
    </section>
  );
}
