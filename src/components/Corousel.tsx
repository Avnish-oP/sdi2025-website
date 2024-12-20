"use client"
import { useState, useEffect } from "react";

const carouselItems = [
  {
    image: "/images/event1.jpg", // Replace with actual image URLs
    caption: "Innovate for Smart Delhi",
  },
  {
    image: "/images/event2.jpg",
    caption: "Solve Real-World Problems",
  },
  {
    image: "/images/event3.jpg",
    caption: "Showcase Your Creativity",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slides every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full md:w-2/3 lg:w-1/2 mx-auto">
      {/* Carousel Content */}
      {carouselItems.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={item.image}
            alt={item.caption}
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-transparent to-transparent p-4">
            <p className="text-white text-xl font-semibold">{item.caption}</p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full px-4">
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === 0 ? carouselItems.length - 1 : currentIndex - 1
            )
          }
          className="p-2 bg-white/70 rounded-full shadow-md hover:bg-white transition"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
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
        <button
          onClick={() =>
            setCurrentIndex(
              currentIndex === carouselItems.length - 1 ? 0 : currentIndex + 1
            )
          }
          className="p-2 bg-white/70 rounded-full shadow-md hover:bg-white transition"
        >
          <svg
            className="w-5 h-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
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
      <div className="flex justify-center space-x-2 mt-4">
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
