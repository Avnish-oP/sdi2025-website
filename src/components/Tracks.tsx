"use client";

import dynamic from "next/dynamic";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import themesData from "../themes.json";
import Link from "next/link";

// Dynamically import react-slick to prevent SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

function Tracks() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
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
          slidesToScroll: 1
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden py-16 bg-gradient-to-r from-purple-100 to-pink-200 md:p-10 mx-auto">
      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-2 animate__animated animate__fadeIn">
        Hackathon Themes
      </h2>
      <p className="text-gray-600 text-center text-lg px-5 pb-10 pt-5 animate__animated animate__fadeIn animate__delay-1s">
        Explore the diverse themes designed to address Delhi’s pressing urban
        challenges through technology and innovation.
      </p>

      <Slider {...settings} className="">
        <div className="">
          <Trackk
            index={1}
            icon="🚦"
            title={themesData.Theme_1.title}
            pslink={themesData.Theme_1.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={2}
            icon="🛡️"
            title={themesData.Theme_2.title}
            pslink={themesData.Theme_2.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={3}
            icon="🌱"
            title={themesData.Theme_3.title}
            pslink={themesData.Theme_3.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={4}
            icon="💡"
            title={themesData.Theme_4.title}
            pslink={themesData.Theme_4.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={5}
            icon="♻️"
            title={themesData.Theme_5.title}
            pslink={themesData.Theme_5.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={6}
            icon="💧"
            title={themesData.Theme_6.title}
            pslink={themesData.Theme_6.pslink}
          />
        </div>
        <div className="">
          <Trackk
            index={7}
            icon="🤖"
            title={themesData.Theme_7.title}
            pslink={themesData.Theme_7.pslink}
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
  pslink,
}: {
  index: number;
  icon: string;
  title: string;
  pslink: string;
}) {
  return (
    <div className="flex flex-col bg-white border-2 border-violet-400 min-h-[26rem] lg:min-h-[23rem] overflow-hidden rounded-lg p-6 transform scale-90 hover:scale-95 transition-all duration-300 shadow-md cursor-pointer">
      <div className="index text-xl text-indigo-700 font-bold absolute p-5 right-0">
        #THEME {index}
      </div>

      {/* Icon */}
      <div className="text-6xl mb-4 text-indigo-600 animate__animated animate__fadeIn">
        {icon}
      </div>

      {/* Title */}
      <h3 className="lg:text-2xl text-xl font-semibold overflow-hidden text-gray-800 mb-4 hover:text-indigo-600 transition-all">
        {title}
      </h3>

      <div className="text-gray-600 text-sm absolute bottom-10 lg:bottom-0 pb-5">
        <h3 className="lg:text-lg text-base text-gray-800 mb-2">
          To read more about the theme, click the button below:
        </h3>
        <div className="flex gap-4">
          <Link href="/problem-statements">
            <button className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md hover:bg-indigo-700 transition">
              Read More
            </button>
          </Link>
          <Link href={`${pslink}`}>
            <button className="px-6 py-3 bg-gray-100 border text-gray-800 font-bold rounded-lg shadow-md hover:bg-gray-300 transition">
              Download PDF
            </button>
          </Link>
        </div>
      </div>

      <div className="index text-indigo-800 text-xl font-bold right-0 absolute bottom-0 p-5">
        #{index}/7
      </div>

      {/* <div className="text-center pt-20  text-3xl p-5 font-bold swipe">← SWIPE →</div> */}
    </div>
  );
}

export default Tracks;
