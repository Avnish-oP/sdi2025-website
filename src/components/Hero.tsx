import HeroCarousel from "./Corousel"; // Import the Carousel Component

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-gray-50 to-gray-200 py-16 md:py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-0">
        {/* Gradient Blobs */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full blur-2xl opacity-30"></div>

        {/* SVG Lines */}
        <svg
          className="absolute top-20 left-32 w-48 h-auto text-indigo-500 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
          stroke="currentColor"
        >
          <path
            strokeWidth="0.5"
            d="M10 10 L90 10 M10 20 L90 20 M10 30 L90 30 M10 40 L90 40"
          />
        </svg>
        <svg
          className="absolute bottom-20 right-32 w-64 h-auto text-pink-500 opacity-30"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 100 100"
          stroke="currentColor"
        >
          <path
            strokeWidth="0.5"
            d="M10 10 L90 10 Q100 50 10 90"
          />
        </svg>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 lg:px-8">
        {/* Right Section: Event Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <div className="mb-4">
            <img
              src="/images/sponsor-logo.png" // Replace with your sponsor logo
              alt="Sponsor Logo"
              className="mx-auto md:mx-0 w-32 md:w-40"
            />
          </div>
          <p className="text-lg font-semibold text-gray-600">Presents</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mt-2">
            Smart Delhi Ideathon 2025
          </h1>
          <p className="text-gray-600 text-lg mt-4">
            Reinventing Delhi with Tech and Creativity
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Register Now
            </button>
            <button className="px-6 py-3 bg-gray-300 text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-400 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Left Section: Carousel */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}
