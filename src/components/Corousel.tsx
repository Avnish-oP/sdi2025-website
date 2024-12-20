"use client";
import { useState, useEffect } from "react";

const carouselItems = [
  {
    image: "/images/event1.png",
    title: "Innovate for Smart Delhi",
    description: "Be the catalyst for change with your ideas.",
  },
  {
    image: "/images/event2.png",
    title: "Solve Real-World Problems",
    description: "Address urban challenges with creativity and tech.",
  },
  {
    image: "/images/event3.png",
    title: "Showcase Your Creativity",
    description: "Transform ideas into impactful solutions.",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Slide changes every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 md:h-[20rem] lg:h-[24rem] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
      {/* Background Images with Parallax Effect */}
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-transform duration-700 ease-in-out ${
            index === currentIndex
              ? "translate-x-0 z-10 opacity-100"
              : "translate-x-full z-0 opacity-0"
          }`}
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/40 to-transparent z-20"></div>

      {/* Slide Content */}
      <div className="relative top-1/4 z-30 w-3/4 text-center text-white">
        <h2 className="text-2xl md:text-4xl font-bold mb-4">
          {carouselItems[currentIndex].title}
        </h2>
        <p className="text-sm md:text-lg mb-6">
          {carouselItems[currentIndex].description}
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-y-0 left-4 flex items-center z-40">
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
            )
          }
          className="p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center z-40">
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="p-2 bg-white/70 rounded-full shadow-lg hover:bg-white transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 flex justify-center space-x-2 z-40">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-3 w-3 rounded-full ${
              currentIndex === index
                ? "bg-indigo-600"
                : "bg-gray-300 hover:bg-gray-400"
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
