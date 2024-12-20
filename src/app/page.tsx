import AboutHackathon from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import { HackathonTimeline } from "@/components/Schedule";
import  Themes  from "@/components/Themes";
import WhySDISection from "@/components/Why";
import Committee from "@/components/Committee";

export default function Home() {
  return (
    <>
    <HeroSection />
    <AboutHackathon />
    <Themes />
    <HackathonTimeline />
    <WhySDISection />
    <Committee />
    </>
  );
}
