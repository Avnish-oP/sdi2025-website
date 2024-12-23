import HeroCarousel from "./Corousel"; // Import the Carousel Component
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-200 py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/campus.jpeg')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px) brightness(0.8)", // Apply blur and brightness here
        }}
      ></div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* <svg
          className="absolute top-1/2 left-10 w-40 h-40 text-gray-200"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="1" />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-56 h-56 text-gray-300"
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
          className="absolute top-1/2 right-20 w-24 h-24 text-gray-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="none"
        >
          <polygon
            points="50,10 90,90 10,90"
            stroke="currentColor"
            strokeWidth="1"
          />
        </svg> */}
      </div>

      <div className="container z-20 mt-10 mx-auto flex flex-col md:flex-row gap-8 items-center justify-between px-4 lg:px-8">
        {/* Right Section: Event Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mt-2">
            Smart Delhi Ideathon 2025
          </h1>
          <p className="text-gray-100 text-lg mt-4">
            Youth For Change
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <Link href="https://dorahacks.io/hackathon/sdi2025">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition">
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

        {/* Left Section: Carousel */}
        <div className="w-full  md:w-1/2 mt-8 md:mt-0 md:mb-0">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
