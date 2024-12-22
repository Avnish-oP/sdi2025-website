"use client";

import dynamic from "next/dynamic";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import themesData from "../themes.json";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Tracks() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden  bg-gradient-to-r from-purple-100 to-pink-200 md:p-10 mx-auto">
      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-2 animate__animated animate__fadeIn">
        Hackathon Problem Statements
      </h2>
      <p className="text-gray-600 text-center text-base px-5 animate__animated animate__fadeIn animate__delay-1s">
        Explore the diverse themes designed to address Delhi’s pressing urban
        challenges through technology and innovation.
      </p>

      <Slider {...settings}>
        <div className="">
          <Trackk
            index={1}
            icon="🚦"
            title={themesData.Theme_1.title}
            overview={themesData.Theme_1.overview}
            possible_challenges={themesData.Theme_1.possible_challenges}
            concerned_government_departments={
              themesData.Theme_1.concerned_government_departments
            }
            relevant_links={themesData.Theme_1.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={2}
            icon="🛡️"
            title={themesData.Theme_2.title}
            overview={themesData.Theme_2.overview}
            possible_challenges={themesData.Theme_2.possible_challenges}
            concerned_government_departments={
              themesData.Theme_2.concerned_government_departments
            }
            relevant_links={themesData.Theme_2.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={3}
            icon="🌱"
            title={themesData.Theme_3.title}
            overview={themesData.Theme_3.overview}
            possible_challenges={themesData.Theme_3.possible_challenges}
            concerned_government_departments={
              themesData.Theme_3.concerned_government_departments
            }
            relevant_links={themesData.Theme_3.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={4}
            icon="💡"
            title={themesData.Theme_4.title}
            overview={themesData.Theme_4.overview}
            possible_challenges={themesData.Theme_4.possible_challenges}
            concerned_government_departments={
              themesData.Theme_4.concerned_government_departments
            }
            relevant_links={themesData.Theme_4.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={5}
            icon="♻️"
            title={themesData.Theme_5.title}
            overview={themesData.Theme_5.overview}
            possible_challenges={themesData.Theme_5.possible_challenges}
            concerned_government_departments={
              themesData.Theme_5.concerned_government_departments
            }
            relevant_links={themesData.Theme_5.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={6}
            icon="💧"
            title={themesData.Theme_6.title}
            overview={themesData.Theme_6.overview}
            possible_challenges={themesData.Theme_6.possible_challenges}
            concerned_government_departments={
              themesData.Theme_6.concerned_government_departments
            }
            relevant_links={themesData.Theme_6.relevant_links}
          />
        </div>
        <div className="">
          <Trackk
            index={7}
            icon="🤖"
            title={themesData.Theme_7.title}
            overview={themesData.Theme_7.overview}
            possible_challenges={themesData.Theme_7.possible_challenges}
            concerned_government_departments={
              themesData.Theme_7.concerned_government_departments
            }
            relevant_links={themesData.Theme_7.relevant_links}
          />
        </div>
      </Slider>
    </div>
  );
}

function Trackk({
  index,
  icon,
  title,
  overview,
  possible_challenges,
  concerned_government_departments,
  relevant_links,
}: {
  index: number;
  icon: string;
  title: string;
  overview: string;
  possible_challenges: string[];
  concerned_government_departments: Record<string, string>;
  relevant_links: string[];
}) {
  return (
    <div className="flex flex-col bg-white lg:h-[70rem] rounded-lg p-6 transform scale-95 transition-all duration-300 shadow-md cursor-pointer">
      <div className="index text-xl text-indigo-700 font-bold absolute p-5 right-0">
        #THEME {index}
      </div>

      {/* Icon */}
      <div className="text-6xl mb-4 text-indigo-600 animate__animated animate__fadeIn">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition-all">
        Title: {title}
      </h3>

      {/* Overview */}
      <p className="text-gray-600 text-sm mb-4">Overview: {overview}</p>

      {/* Possible Challenges */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Possible Challenges
        </h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {possible_challenges.map((challenge, index) => (
            <li key={index}>{challenge}</li>
          ))}
        </ul>
      </div>

      {/* Concerned Government Departments */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Concerned Government Departments
        </h3>
        <ul className="list-disc pl-6 text-gray-600 space-y-2">
          {Object.entries(concerned_government_departments).map(
            ([department, description], index) => (
              <li key={index}>
                <span className="font-semibold">{department}:</span>{" "}
                {description}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Relevant Links */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Relevant Links
        </h3>
        <ul className="list-disc pl-6 text-blue-600 space-y-2">
          {relevant_links.map((link, index) => (
            <li key={index}>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="index text-indigo-800 text-xl font-bold right-0 absolute bottom-0 p-5">
        #{index}/7
      </div>

      <div className="text-center pt-20  text-3xl p-5 font-bold swipe">← SWIPE →</div>
    </div>
  );
}

export default Tracks;
