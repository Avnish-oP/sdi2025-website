"use client";

import dynamic from "next/dynamic";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { desc } from "framer-motion/client";
import Image from "next/image";

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
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container  bg-gradient-to-r from-purple-100 to-pink-200 p-10 mx-auto">
      <Slider {...settings}>
        <div className="">
          <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
        <div className="">
        <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
        <div className="">
        <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
        <div className="">
        <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
        <div className="">
        <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
        <div className="">
        <Trackk 
            icon={<Image src="/images/event1.png" alt="track1" width={100} height={100} />}
            title="Track 1"
            description="Description 1"    
          />
        </div>
      </Slider>
    </div>
  );
}

function Trackk({ icon, title, description }: any) {
  return(
    <div className="flex flex-col justify-center items-center bg-white rounded-lg p-6 transform scale-95 hover:scale-100 transition-all duration-300 cursor-pointer">
    <div className="text-6xl mb-4 text-indigo-600 animate__animated animate__fadeIn">
      {icon}
    </div>
    <h3 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-indigo-600 transition-all">
      {title}
    </h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
  )
}

export default Tracks;
