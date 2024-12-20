"use client";

import { SetStateAction, useState } from "react";

export default function Themes() {
  const themes = [
    {
      title: "Alleviating Traffic Congestion",
      description:
        "Innovative solutions to tackle Delhi’s traffic challenges, focusing on smart parking, AI-based traffic management, congestion pricing, and enhanced public transportation networks.",
      icon: "🚦", // Use an emoji or replace with an icon URL
      details:
        "Detailed information about alleviating traffic congestion and possible solutions...",
    },
    {
      title: "Creating a Safer Delhi for Women",
      description:
        "Strengthening law and order through technology, gender-sensitive urban planning, and community-driven programs to ensure inclusive safety for women.",
      icon: "🛡️",
      details: "Detailed information about creating a safer Delhi for women...",
    },
    {
      title: "Cleaner and Healthier Air",
      description:
        "Strategies to combat air pollution with renewable energy, electric vehicles, urban afforestation, and public transportation enhancements.",
      icon: "🌱",
      details: "Detailed information about cleaner and healthier air...",
    },
    {
      title: "Economic Growth and Innovation",
      description:
        "Positioning Delhi as a hub for economic resilience by fostering startups, digital infrastructure, and collaboration between industry and academia.",
      icon: "💡",
      details: "Detailed information about economic growth and innovation...",
    },
    {
      title: "Achieving Zero Waste",
      description:
        "Promoting waste segregation at the source, circular economy practices, and partnerships to reduce landfill dependency and improve waste management.",
      icon: "♻️",
      details: "Detailed information about achieving zero waste...",
    },
    {
      title: "Maximizing Water Efficiency",
      description:
        "Ensuring water conservation through rainwater harvesting, wastewater reuse, smart metering, and public awareness campaigns.",
      icon: "💧",
      details: "Detailed information about maximizing water efficiency...",
    },
    {
      title: "Leveraging AI for Governance",
      description:
        "Transforming Delhi into a smart city with AI-driven solutions for traffic management, public safety, waste monitoring, and efficient grievance redressal systems.",
      icon: "🤖",
      details: "Detailed information about leveraging AI for governance...",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState<null | typeof themes[0]>(null);
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right");

  const handlePrev = () => {
    setSlideDirection("left");
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? themes.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setSlideDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex === themes.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleCardClick = (theme: typeof themes[0]) => {
    setSelectedTheme(theme);
  };

  const handleCloseDialog = () => {
    setSelectedTheme(null);
  };

  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 to-pink-200">
      <div className="container mx-auto px-6 lg:px-16 text-center">
        <h2 className="text-4xl font-bold text-indigo-800 mb-2 animate__animated animate__fadeIn">
          Hackathon Themes
        </h2>
        <p className="text-gray-600 text-lg mb-12 animate__animated animate__fadeIn animate__delay-1s">
          Explore the diverse themes designed to address Delhi’s pressing urban
          challenges through technology and innovation.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-5 items-center mb-8 md:space-x-4">
          <button
            onClick={handlePrev}
            className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-3 rounded-full transform transition duration-300 hover:scale-110"
          >
            Prev
          </button>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500 transform ${
              slideDirection === "right" ? "slide-next" : "slide-prev"
            }`}
          >
            {themes
              .slice(currentIndex, currentIndex + 3)
              .map((theme, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-lg p-6 transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => handleCardClick(theme)}
                >
                  <div className="text-6xl mb-4 text-indigo-600 animate__animated animate__fadeIn">
                    {theme.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition-all">
                    {theme.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{theme.description}</p>
                </div>
              ))}
          </div>

          <button
            onClick={handleNext}
            className="bg-gradient-to-l from-indigo-600 to-indigo-800 text-white px-6 py-3 rounded-full transform transition duration-300 hover:scale-110"
          >
            Next
          </button>
        </div>

        {selectedTheme && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full animate__animated animate__zoomIn">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {selectedTheme.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedTheme.details}</p>
              <button
                onClick={handleCloseDialog}
                className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white px-6 py-3 rounded-full transform transition duration-300 hover:scale-110"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
