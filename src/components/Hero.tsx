"use client"
import HeroCarousel from "./Corousel"; // Import the Carousel Component
import Link from 'next/link';
// import { ToastContainer, toast } from "react-toastify";

export default function HeroSection() {
  // const notify = () => toast("Resistration will be open soon");


  return (
    <section className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-100 via-purple-50 to-indigo-100 py-5 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/images/campus.jpeg')`, // Replace with your image path
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(2px) brightness(1.1) saturate(1.8)", // Apply blur, brightness, and saturation
        }}
      ></div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-700 via-transparent to-indigo-900 opacity-70 z-0"></div>

      <div className="container z-20 mt-24 md:mt-0 mx-auto flex flex-col md:flex-row gap-10 md:gap-20 items-center justify-between px-4 lg:px-0">
        {/* Left Section: Event Info */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl drop-shadow-lg sditext md:text-6xl font-extrabold text-white leading-tight ANTI">
            Smart Delhi Ideathon 2025
          </h1>
          <p className="text-white drop-shadow-lg text-xl mt-4 font-bold antialiased">
            Innovating for Sustainable Cities and Communities
          </p>
          <div className="mt-6 flex justify-center md:justify-start gap-4">
            {/* <Link href="#" onClick={notify} > */}
            <Link href="https://register.sdi2025.in/" target="_blank">
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

          {/* LG Trophy Section */}
          <div className="mt-10 -mb-12 p-6 bg-white bg-opacity-90 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-indigo-800 flex items-center gap-2">
              <span>🏆</span> LG Trophy
            </h2>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">🥇First Prize</span>
                <span className="text-xl font-bold text-indigo-900">₹5,00,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">🥈Second Prize</span>
                <span className="text-xl font-bold text-indigo-900">₹3,00,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-700">🥉Third Prize</span>
                <span className="text-xl font-bold text-indigo-900">₹1,00,000</span>
              </div>
              <div className="flex justify-between items-center font">
                <div className="text-lg font-semibold text-gray-700">
                  {/* <i>'Certificate of Participation' to all students and 'Certificate of Appreciation' to students who qualify Online Round</i> */}
                  <i>&lsquo;Certificate of Participation&rsquo; to all students and &lsquo;Certificate of Appreciation&rsquo; to students who qualify Online Round</i>

                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Section: Carousel */}
        <div className="w-full md:w-1/2 mt-10  md:mt-16">
          <HeroCarousel />
        </div>
      </div>
      {/* <ToastContainer  theme="dark" position="bottom-center" /> */}
    </section>
  );
}
