import AboutHackathon from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { HackathonTimeline } from "@/components/Schedule";
import  Themes  from "@/components/Themes";
import  Tracks  from "@/components/Tracks";
import Committee from "@/components/Committee";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />

    <div id="home"><HeroSection /></div>
    <div id="about"><AboutHackathon /></div>
    <div id="themes">
      {/* <Themes /> */}
      <Tracks />
    </div>
    <div id="schedule"><HackathonTimeline /></div>
    <Committee />
    </>
  );
}
