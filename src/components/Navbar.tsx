"use client"
import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-xl fixed w-full z-30 transition-all duration-300">
      <div className="max-w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex gap-5">
            <Link
              href="http://www.ipu.ac.in/"
              target="_blank"
              className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              {/* <Image src="/logo.png" width={70} height={70} quality={100} className="h-12 w-auto" alt="logo" /> */}
              <img
                src="/images/ipulogo.png" // Replace with your illustration path
                alt="Smart Delhi Ideathon"
                className="p-1 h-20"
              />

            </Link>
            <Link
              href="/"
              className="text-2xl font-extrabold text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              {/* <Image src="/logo.png" width={70} height={70} quality={100} className="h-12 w-auto" alt="logo" /> */}
              <img
                src="/logo.png" // Replace with your illustration path
                alt="Smart Delhi Ideathon"
                className="p-1 h-20"
              />

            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "About", "Themes", "Problem Statements", "FAQ", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href={item==="Contact Us"?"/contact": item === "Problem Statements"?"/problem-statements": item === "Home"?"/":`/#${item.toLowerCase().replace(" ", "-")}`}
                  className="relative text-gray-700 font-medium hover:text-indigo-600 transition duration-300 group"
                >
                  {item}
                  {/* Hover underline animation */}
                  <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt- flex flex-col gap-2 space-y-4 pb-10">
            {["Home", "About", "Themes", "Problem Statements", "FAQ", "Contact Us"].map(
              (item) => (
                <Link
                  key={item}
                  href={item==="Contact Us"?"/contact": item === "Problem Statements"?"/problem-statements": item === "Home"?"/":`#${item.toLowerCase().replace(" ", "-")}`}
                  className=" text-gray-700 hover:text-indigo-600 hover:bg-gray-100 px-4 py-2 rounded transition duration-200"
                >
                 <span className="absolute h-[2px] text-nowrap w-0 bg-indigo-600 hover-glow transition-all duration-300 group-hover:w-full">{item}</span> 
                </Link>
              )
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
