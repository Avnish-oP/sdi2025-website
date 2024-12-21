import AboutHackathon from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import { HackathonTimeline } from "@/components/Schedule";
import  Themes  from "@/components/Themes";
import  Tracks  from "@/components/Tracks";
import OrganizingCommittee from "@/components/Committee";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutHackathon />
    {/* <Themes /> */}
    <Tracks />
    <HackathonTimeline />
    <OrganizingCommittee />
    </>
  );
}
