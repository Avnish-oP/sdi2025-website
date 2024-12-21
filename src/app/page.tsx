import AboutHackathon from "@/components/AboutUs";
import HeroSection from "@/components/Hero";
import { HackathonTimeline } from "@/components/Schedule";
import  Themes  from "@/components/Themes";
import WhySDISection from "@/components/Why";
import Committee from "@/components/Committee";

export default function Home() {
  return (
    <>
    <div id="home"><HeroSection /></div>
    <div id="about"><AboutHackathon /></div>
    <div id="themes"><Themes /></div>
    <div id="schedule"><HackathonTimeline /></div>
    <WhySDISection />
    <Committee />
    </>
  );
}
